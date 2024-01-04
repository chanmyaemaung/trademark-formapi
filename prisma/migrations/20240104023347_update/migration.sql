/*
  Warnings:

  - You are about to drop the `info` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropTable
PRAGMA foreign_keys=off;
DROP TABLE "info";
PRAGMA foreign_keys=on;

-- CreateTable
CREATE TABLE "details" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "name" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "phone" TEXT NOT NULL,
    "word" TEXT,
    "trademarkName" TEXT,
    "logo" TEXT
);

-- CreateIndex
CREATE UNIQUE INDEX "details_email_key" ON "details"("email");
