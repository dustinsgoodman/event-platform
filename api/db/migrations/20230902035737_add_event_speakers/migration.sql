-- CreateTable
CREATE TABLE "EventSpeaker" (
    "id" TEXT NOT NULL,
    "firstName" TEXT NOT NULL,
    "lastName" TEXT NOT NULL,
    "jobTitle" TEXT,
    "company" TEXT,
    "profilePicture" TEXT,
    "bio" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "eventId" TEXT NOT NULL,

    CONSTRAINT "EventSpeaker_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "_EventSessionToEventSpeaker" (
    "A" TEXT NOT NULL,
    "B" TEXT NOT NULL
);

-- CreateIndex
CREATE UNIQUE INDEX "_EventSessionToEventSpeaker_AB_unique" ON "_EventSessionToEventSpeaker"("A", "B");

-- CreateIndex
CREATE INDEX "_EventSessionToEventSpeaker_B_index" ON "_EventSessionToEventSpeaker"("B");

-- AddForeignKey
ALTER TABLE "EventSpeaker" ADD CONSTRAINT "EventSpeaker_eventId_fkey" FOREIGN KEY ("eventId") REFERENCES "Event"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_EventSessionToEventSpeaker" ADD CONSTRAINT "_EventSessionToEventSpeaker_A_fkey" FOREIGN KEY ("A") REFERENCES "EventSession"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_EventSessionToEventSpeaker" ADD CONSTRAINT "_EventSessionToEventSpeaker_B_fkey" FOREIGN KEY ("B") REFERENCES "EventSpeaker"("id") ON DELETE CASCADE ON UPDATE CASCADE;
