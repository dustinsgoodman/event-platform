/*
  Warnings:

  - A unique constraint covering the columns `[registrantId]` on the table `EventSpeaker` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `registrantId` to the `EventSpeaker` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "EventSpeaker" ADD COLUMN     "registrantId" TEXT NOT NULL;

-- CreateTable
CREATE TABLE "EventRegistrant" (
    "id" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "firstName" TEXT NOT NULL,
    "lastName" TEXT NOT NULL,
    "displayName" TEXT,
    "jobTitle" TEXT,
    "company" TEXT,
    "profilePicture" TEXT,
    "dateOfBirth" DATE NOT NULL,
    "language" TEXT NOT NULL DEFAULT 'en-US',
    "ipAddress" TEXT NOT NULL,
    "notes" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "cancelledAt" TIMESTAMP(3),
    "checkedInAt" TIMESTAMP(3),
    "eventId" TEXT NOT NULL,

    CONSTRAINT "EventRegistrant_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "_EventRegistrantToEventSession" (
    "A" TEXT NOT NULL,
    "B" TEXT NOT NULL
);

-- CreateIndex
CREATE UNIQUE INDEX "_EventRegistrantToEventSession_AB_unique" ON "_EventRegistrantToEventSession"("A", "B");

-- CreateIndex
CREATE INDEX "_EventRegistrantToEventSession_B_index" ON "_EventRegistrantToEventSession"("B");

-- CreateIndex
CREATE UNIQUE INDEX "EventSpeaker_registrantId_key" ON "EventSpeaker"("registrantId");

-- AddForeignKey
ALTER TABLE "EventRegistrant" ADD CONSTRAINT "EventRegistrant_eventId_fkey" FOREIGN KEY ("eventId") REFERENCES "Event"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "EventSpeaker" ADD CONSTRAINT "EventSpeaker_registrantId_fkey" FOREIGN KEY ("registrantId") REFERENCES "EventRegistrant"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_EventRegistrantToEventSession" ADD CONSTRAINT "_EventRegistrantToEventSession_A_fkey" FOREIGN KEY ("A") REFERENCES "EventRegistrant"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_EventRegistrantToEventSession" ADD CONSTRAINT "_EventRegistrantToEventSession_B_fkey" FOREIGN KEY ("B") REFERENCES "EventSession"("id") ON DELETE CASCADE ON UPDATE CASCADE;
