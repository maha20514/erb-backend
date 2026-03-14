/*
  Warnings:

  - Made the column `entity` on table `Log` required. This step will fail if there are existing NULL values in that column.

*/
-- AlterTable
ALTER TABLE "Log" ALTER COLUMN "entity" SET NOT NULL;
