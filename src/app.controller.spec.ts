import { Test, TestingModule } from '@nestjs/testing';
import { UsersController } from './users/users.controller';
import { UsersService } from './users/users.service';

describe('AppController', () => {
  let appController: UsersController;

  beforeEach(async () => {
    const app: TestingModule = await Test.createTestingModule({
      controllers: [UsersController],
      providers: [UsersService],
    }).compile();

    appController = app.get<UsersController>(UsersController);
  });

  describe('root', () => {
    it('should return "Hello World!"', () => {
      expect(appController.getUsers()).toBe('Hello World!');
    });
  });
});
