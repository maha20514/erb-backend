/* eslint-disable @typescript-eslint/no-unsafe-argument */
/* eslint-disable @typescript-eslint/no-floating-promises */
/* eslint-disable @typescript-eslint/no-unsafe-member-access */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
import {
  Injectable,
  NestInterceptor,
  ExecutionContext,
  CallHandler,
} from '@nestjs/common';
import { Observable, tap } from 'rxjs';
import { LogsService } from 'src/logs/logs.service';

@Injectable()
export class LoggingInterceptor implements NestInterceptor {
  constructor(private logsService: LogsService) {}

  intercept(context: ExecutionContext, next: CallHandler): Observable<any> {
    const request = context.switchToHttp().getRequest();

    const user = request.user;
    const method = request.method;
    const url = request.url;

    return next.handle().pipe(
      tap(() => {
        this.logsService.createLogger(method, user?.userId, url);
      }),
    );
  }
}
