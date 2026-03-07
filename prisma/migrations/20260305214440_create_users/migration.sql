-- AlterTable
ALTER TABLE "User" ADD COLUMN     "password" TEXT NOT NULL DEFAULT 'temp',
ADD COLUMN     "role" TEXT NOT NULL DEFAULT 'user';
