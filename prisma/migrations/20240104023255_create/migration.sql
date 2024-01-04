-- CreateTable
CREATE TABLE "info" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "name" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "phone" TEXT NOT NULL,
    "word" TEXT,
    "trademarkName" TEXT,
    "logo" TEXT
);

-- CreateIndex
CREATE UNIQUE INDEX "info_email_key" ON "info"("email");
