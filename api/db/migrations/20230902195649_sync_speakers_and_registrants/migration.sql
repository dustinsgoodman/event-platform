/*
  Warnings:

  - Added the required column `dateOfBirth` to the `EventSpeaker` table without a default value. This is not possible if the table is not empty.
  - Added the required column `ipAddress` to the `EventSpeaker` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "EventSpeaker" DROP CONSTRAINT "EventSpeaker_registrantId_fkey";

-- AlterTable
ALTER TABLE "EventRegistrant" ALTER COLUMN "notes" DROP NOT NULL;

-- AlterTable
ALTER TABLE "EventSpeaker" ADD COLUMN     "dateOfBirth" DATE NOT NULL,
ADD COLUMN     "ipAddress" TEXT NOT NULL,
ADD COLUMN     "language" TEXT NOT NULL DEFAULT 'en-US',
ALTER COLUMN "registrantId" DROP NOT NULL;

-- AddForeignKey
ALTER TABLE "EventSpeaker" ADD CONSTRAINT "EventSpeaker_registrantId_fkey" FOREIGN KEY ("registrantId") REFERENCES "EventRegistrant"("id") ON DELETE SET NULL ON UPDATE CASCADE;
