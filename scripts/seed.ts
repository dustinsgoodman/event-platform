import type {
  Event,
  EventRegistrant,
  EventSession,
  EventSpeaker,
} from '@prisma/client';
import { EventVenueType } from '@prisma/client';
import { db } from 'api/src/lib/db';

const EVENTS: Event[] = [
  {
    id: '97d64e90-2c53-41cf-a6a5-af399f75ecc5',
    name: 'Connect.Tech 2023',
    description:
      'The largest multi-framework front-end conference in the USA. A three day event diving deep with experts from across the tech ecosystem.',
    timezone: 'America/New_York',
    startAt: new Date('October 24, 2023 08:00:00'),
    endAt: new Date('October 26, 2023 05:00:00'),
    venueType: EventVenueType.IN_PERSON,
    venueName: 'Georgia World Congress Center',
    address: '285 Andrew Young International Blvd NW',
    country: 'USA',
    city: 'Atlanta',
    stateOrProvince: 'GA',
    postalCode: '30313',
    registrationStartAt: new Date('May 1, 2023 08:00:00'),
    registrationEndAt: new Date('September 15, 2023 23:59:59'),
    currency: 'USD',
    capacity: null,
    createdAt: new Date('November 1, 2022 08:00:00'),
    updatedAt: new Date(),
  },
  {
    id: '97d64e90-2c53-41cf-a6a5-af399f75ecc6',
    name: 'Connect.Tech 2024',
    description:
      'The largest multi-framework front-end conference in the USA. A three day event diving deep with experts from across the tech ecosystem.',
    timezone: 'America/New_York',
    startAt: new Date('October 24, 2024 08:00:00'),
    endAt: new Date('October 26, 2024 05:00:00'),
    venueType: EventVenueType.IN_PERSON,
    venueName: 'Georgia World Congress Center',
    address: '285 Andrew Young International Blvd NW',
    country: 'USA',
    city: 'Atlanta',
    stateOrProvince: 'GA',
    postalCode: '30313',
    registrationStartAt: new Date('May 1, 2024 08:00:00'),
    registrationEndAt: new Date('September 15, 2024 23:59:59'),
    currency: 'USD',
    capacity: null,
    createdAt: new Date('November 1, 2022 08:00:00'),
    updatedAt: new Date(),
  },
  {
    id: '97d64e90-2c53-41cf-a6a5-af399f75ecc7',
    name: 'Connect.Tech 2025',
    description:
      'The largest multi-framework front-end conference in the USA. A three day event diving deep with experts from across the tech ecosystem.',
    timezone: 'America/New_York',
    startAt: new Date('October 24, 2025 08:00:00'),
    endAt: new Date('October 26, 2025 05:00:00'),
    venueType: EventVenueType.IN_PERSON,
    venueName: 'Georgia World Congress Center',
    address: '285 Andrew Young International Blvd NW',
    country: 'USA',
    city: 'Atlanta',
    stateOrProvince: 'GA',
    postalCode: '30313',
    registrationStartAt: new Date('May 1, 2025 08:00:00'),
    registrationEndAt: new Date('September 15, 2025 23:59:59'),
    currency: 'USD',
    capacity: null,
    createdAt: new Date('November 1, 2022 08:00:00'),
    updatedAt: new Date(),
  },
  {
    id: '97d64e90-2c53-41cf-a6a5-af399f75ecc8',
    name: 'Connect.Tech 2026',
    description:
      'The largest multi-framework front-end conference in the USA. A three day event diving deep with experts from across the tech ecosystem.',
    timezone: 'America/New_York',
    startAt: new Date('October 24, 2026 08:00:00'),
    endAt: new Date('October 26, 2026 05:00:00'),
    venueType: EventVenueType.IN_PERSON,
    venueName: 'Georgia World Congress Center',
    address: '285 Andrew Young International Blvd NW',
    country: 'USA',
    city: 'Atlanta',
    stateOrProvince: 'GA',
    postalCode: '30313',
    registrationStartAt: new Date('May 1, 2026 08:00:00'),
    registrationEndAt: new Date('September 15, 2026 23:59:59'),
    currency: 'USD',
    capacity: null,
    createdAt: new Date('November 1, 2022 08:00:00'),
    updatedAt: new Date(),
  },
  {
    id: '97d64e90-2c53-41cf-a6a5-af399f75ecc9',
    name: 'Connect.Tech 2027',
    description:
      'The largest multi-framework front-end conference in the USA. A three day event diving deep with experts from across the tech ecosystem.',
    timezone: 'America/New_York',
    startAt: new Date('October 24, 2027 08:00:00'),
    endAt: new Date('October 26, 2027 05:00:00'),
    venueType: EventVenueType.IN_PERSON,
    venueName: 'Georgia World Congress Center',
    address: '285 Andrew Young International Blvd NW',
    country: 'USA',
    city: 'Atlanta',
    stateOrProvince: 'GA',
    postalCode: '30313',
    registrationStartAt: new Date('May 1, 2027 08:00:00'),
    registrationEndAt: new Date('September 15, 2027 23:59:59'),
    currency: 'USD',
    capacity: null,
    createdAt: new Date('November 1, 2022 08:00:00'),
    updatedAt: new Date(),
  },
  {
    id: '97d64e90-2c53-41cf-a6a5-af399f75ecc1',
    name: 'Connect.Tech 2028',
    description:
      'The largest multi-framework front-end conference in the USA. A three day event diving deep with experts from across the tech ecosystem.',
    timezone: 'America/New_York',
    startAt: new Date('October 24, 2028 08:00:00'),
    endAt: new Date('October 26, 2028 05:00:00'),
    venueType: EventVenueType.IN_PERSON,
    venueName: 'Georgia World Congress Center',
    address: '285 Andrew Young International Blvd NW',
    country: 'USA',
    city: 'Atlanta',
    stateOrProvince: 'GA',
    postalCode: '30313',
    registrationStartAt: new Date('May 1, 2028 08:00:00'),
    registrationEndAt: new Date('September 15, 2028 23:59:59'),
    currency: 'USD',
    capacity: null,
    createdAt: new Date('November 1, 2022 08:00:00'),
    updatedAt: new Date(),
  },
  {
    id: '97d64e90-2c53-41cf-a6a5-af399f75ecc2',
    name: 'Connect.Tech 2029',
    description:
      'The largest multi-framework front-end conference in the USA. A three day event diving deep with experts from across the tech ecosystem.',
    timezone: 'America/New_York',
    startAt: new Date('October 24, 2029 08:00:00'),
    endAt: new Date('October 26, 2029 05:00:00'),
    venueType: EventVenueType.IN_PERSON,
    venueName: 'Georgia World Congress Center',
    address: '285 Andrew Young International Blvd NW',
    country: 'USA',
    city: 'Atlanta',
    stateOrProvince: 'GA',
    postalCode: '30313',
    registrationStartAt: new Date('May 1, 2029 08:00:00'),
    registrationEndAt: new Date('September 15, 2029 23:59:59'),
    currency: 'USD',
    capacity: null,
    createdAt: new Date('November 1, 2022 08:00:00'),
    updatedAt: new Date(),
  },
];

const ATTENDEES: EventRegistrant[] = [
  {
    id: '98aebd2d-4ce9-4354-94a9-6b0711a3d048',
    eventId: '97d64e90-2c53-41cf-a6a5-af399f75ecc5',
    email: 'dustin@example.com',
    firstName: 'Dustin',
    lastName: 'Goodman',
    displayName: null,
    jobTitle: 'Engineering Manager',
    company: 'This Dot',
    profilePicture:
      'https://sessionize.com/image/997e-400o400o2-ErWnrX3Q6Z4sefhpd86weG.jpg',
    dateOfBirth: new Date('November 2, 1990'),
    language: 'en-US',
    ipAddress: '171.174.170.81',
    notes: null,
    createdAt: new Date('May 15, 2024 13:00:00'),
    updatedAt: new Date(),
    cancelledAt: null,
    checkedInAt: null,
  },
  {
    id: '909db914-c9c7-4058-a819-f3e7b884eb67',
    eventId: '97d64e90-2c53-41cf-a6a5-af399f75ecc5',
    email: 'mike@example.com',
    firstName: 'Mike',
    lastName: 'Hartington',
    displayName: null,
    jobTitle: 'Developer/Advocate',
    company: 'Ionic',
    profilePicture:
      'https://sessionize.com/image/4fa6-400o400o2-94cLY2MbjsgFNAGjoyaKxV.jpg',
    dateOfBirth: new Date('February 19, 1988'),
    language: 'en-US',
    ipAddress: '95.25.112.121',
    notes: null,
    createdAt: new Date('May 15, 2024 13:00:00'),
    updatedAt: new Date(),
    cancelledAt: null,
    checkedInAt: null,
  },
  {
    id: '02958635-6196-4ea1-8e82-50d3d2207f54',
    eventId: '97d64e90-2c53-41cf-a6a5-af399f75ecc5',
    email: 'cory@example.com',
    firstName: 'Cory',
    lastName: 'House',
    displayName: null,
    jobTitle: 'Author / Consultant',
    company: null,
    profilePicture:
      'https://sessionize.com/image/af5d-400o400o2-BkPm4ggeAKRPpzBY1mPi2g.jpg',
    dateOfBirth: new Date('September 17, 1984'),
    language: 'en-US',
    ipAddress: '51.105.121.194',
    notes: null,
    createdAt: new Date('May 15, 2024 13:00:00'),
    updatedAt: new Date(),
    cancelledAt: null,
    checkedInAt: null,
  },
  {
    id: 'e3f34c53-4a81-4748-a260-2be3a1d1d4cd',
    eventId: '97d64e90-2c53-41cf-a6a5-af399f75ecc5',
    email: 'jesse@example.com',
    firstName: 'Jesse',
    lastName: 'Tomchak',
    displayName: null,
    jobTitle: 'Senior Software Engineer',
    company: 'Mammoth',
    profilePicture: null,
    dateOfBirth: new Date('May 17, 1978'),
    language: 'en-US',
    ipAddress: '195.110.164.126',
    notes: null,
    createdAt: new Date('July 15, 2024 14:00:00'),
    updatedAt: new Date(),
    cancelledAt: null,
    checkedInAt: null,
  },
];

const SPEAKERS: EventSpeaker[] = [
  {
    id: '85f244a6-fcf6-499a-bdc7-bd6e1344c987',
    eventId: '97d64e90-2c53-41cf-a6a5-af399f75ecc5',
    registrantId: '98aebd2d-4ce9-4354-94a9-6b0711a3d048',
    firstName: 'Dustin',
    lastName: 'Goodman',
    jobTitle: 'Engineering Manager',
    company: 'This Dot',
    profilePicture:
      'https://sessionize.com/image/997e-400o400o2-ErWnrX3Q6Z4sefhpd86weG.jpg',
    dateOfBirth: new Date('November 2, 1990'),
    language: 'en-US',
    ipAddress: '171.174.170.81',
    bio: 'Dustin Goodman is an engineer, tech speaker, and blogger with over a decade of experience in web development. He currently acts as an Engineering Manager at This Dot, and actively contributes free community resources through This Dot Media. He actively engages in the tech communities to bring new tech to people in accessible ways. He loves learning new tech and finding ways to use it in meaningful ways within projects. Additionally, he enjoys mentoring rising developers and helping them attain the knowledge and skills they need to level-up.',
    createdAt: new Date('May 15, 2024 13:00:00'),
    updatedAt: new Date(),
  },
  {
    id: 'a3930996-afc4-480c-acc5-b1a820ec4fda',
    eventId: '97d64e90-2c53-41cf-a6a5-af399f75ecc5',
    registrantId: '909db914-c9c7-4058-a819-f3e7b884eb67',
    firstName: 'Mike',
    lastName: 'Hartington',
    jobTitle: 'Developer/Advocate',
    company: 'Ionic',
    profilePicture:
      'https://sessionize.com/image/4fa6-400o400o2-94cLY2MbjsgFNAGjoyaKxV.jpg',
    dateOfBirth: new Date('February 19, 1988'),
    language: 'en-US',
    ipAddress: '95.25.112.121',
    bio: "Mike is a developer, Angular GDE, and Director of Developer Advocacy at Ionic who's been working in the mobile landscape for most of his professional career. When he's not working Ionic itself, Mike works with community members and helps them succeed at mobile. In his spare time, he’s an aspiring woodworker, occasional musician, and craft beer lover.",
    createdAt: new Date('May 15, 2024 13:00:00'),
    updatedAt: new Date(),
  },
  {
    id: 'e2bb9f54-5ed5-487d-8e67-745ed1e725c8',
    eventId: '97d64e90-2c53-41cf-a6a5-af399f75ecc5',
    registrantId: '02958635-6196-4ea1-8e82-50d3d2207f54',
    firstName: 'Cory',
    lastName: 'House',
    jobTitle: 'Author / Consultant',
    company: null,
    profilePicture:
      'https://sessionize.com/image/af5d-400o400o2-BkPm4ggeAKRPpzBY1mPi2g.jpg',
    dateOfBirth: new Date('September 17, 1984'),
    language: 'en-US',
    ipAddress: '51.105.121.194',
    bio: 'Cory is a Pluralsight author, 9 time Microsoft MVP, and international speaker. He is founder of reactjsconsulting, where he helps companies transition to React. He has trained over 10,000 software developers at conferences and businesses worldwide. Cory has authored over a dozen courses on JavaScript, React, C#, automated testing, and web development on Pluralsight. He shares software development tips daily on Twitter as @housecor.',
    createdAt: new Date('May 15, 2024 13:00:00'),
    updatedAt: new Date(),
  },
];

const SESSIONS: EventSession[] = [
  {
    id: '0b640391-5a8e-4c1c-8136-7c4a881c9383',
    eventId: '97d64e90-2c53-41cf-a6a5-af399f75ecc5',
    name: 'The Challenges of the GraphQL Mental Model',
    description:
      "GraphQL can be an amazing tool for teams to implement the APIs powering their different applications that rely on the same source of data. However, the mental model required for it may not be as straightforward as traditional solutions. In this session, we'll explore these challenges and how to mitigate them on your teams.",
    startAt: new Date('October 26, 2023 14:00:00'),
    endAt: new Date('October 26, 2023 15:00:00'),
    capacity: null,
    createdAt: new Date('May 15, 2024 13:00:00'),
    updatedAt: new Date(),
  },
  {
    id: '85c0b781-2e1d-4f0a-932e-05bd764fb45d',
    eventId: '97d64e90-2c53-41cf-a6a5-af399f75ecc5',
    name: 'One app, multiple platforms: How Cross Platform Actually Works',
    description:
      'Today\'s solutions for cross platform development all aim to provide developers a better way to build their apps. Build your app in a certain way, and you can ship it to multiple targets (iOS, Android, Web, etc.) with ease. But not all solutions are created equal, and it can be difficult to understand the benefits of one solution over another. But it doesn\'t have to be this way. In this talk we will look at some of the top cross platform technologies, see how they actually work, why you would use one solution, and why you should rethink your perception of what tool is "the best".',
    startAt: new Date('October 26, 2023 10:00:00'),
    endAt: new Date('October 26, 2023 11:00:00'),
    capacity: null,
    createdAt: new Date('May 15, 2024 13:00:00'),
    updatedAt: new Date(),
  },
  {
    id: 'ba895dd6-4e49-4c0e-856e-6ea8fa8ed54a',
    eventId: '97d64e90-2c53-41cf-a6a5-af399f75ecc5',
    name: 'Lessons Learned from 10 Years in React',
    description:
      "This session explores the lessons I've learned from working in React for the last (nearly) 10 years including rethinking separation of concerns, propTypes vs types, how to choose between state management approaches, performance optimizations, form optimizations, Storybook driven development workflows, utilizing mock APIs, custom dev tools, and sharing components. In this session, I'll share the many mistakes I've made, and the useful techniques I've found along the way.",
    startAt: new Date('October 25, 2023 10:00:00'),
    endAt: new Date('October 25, 2023 11:00:00'),
    capacity: null,
    createdAt: new Date('May 15, 2024 13:00:00'),
    updatedAt: new Date(),
  },
  {
    id: '72ebe0af-27f9-4873-afb5-3dd76c95b2ba',
    eventId: '97d64e90-2c53-41cf-a6a5-af399f75ecc5',
    name: 'React: The Most Common Mistakes in 2023',
    description:
      "React is unopinionated. This makes it flexible. But it also means it's intimidating to get started, and difficult to scale. You constantly wonder if you're \"doing it wrong\". In this session, we'll explore the most common mistakes teams are making in modern React applications, and how to avoid them.",
    startAt: new Date('October 25, 2023 14:00:00'),
    endAt: new Date('October 25, 2023 15:00:00'),
    capacity: null,
    createdAt: new Date('May 15, 2024 13:00:00'),
    updatedAt: new Date(),
  },
];

const SESSION_SPEAKER_MAP: { sessionId: string; speakerId: string }[] = [
  {
    sessionId: '0b640391-5a8e-4c1c-8136-7c4a881c9383',
    speakerId: '85f244a6-fcf6-499a-bdc7-bd6e1344c987',
  },
  {
    sessionId: '85c0b781-2e1d-4f0a-932e-05bd764fb45d',
    speakerId: 'a3930996-afc4-480c-acc5-b1a820ec4fda',
  },
  {
    sessionId: 'ba895dd6-4e49-4c0e-856e-6ea8fa8ed54a',
    speakerId: 'e2bb9f54-5ed5-487d-8e67-745ed1e725c8',
  },
  {
    sessionId: '72ebe0af-27f9-4873-afb5-3dd76c95b2ba',
    speakerId: 'e2bb9f54-5ed5-487d-8e67-745ed1e725c8',
  },
];

export default async () => {
  try {
    console.log('Seeding Events...');
    await db.event.createMany({
      data: EVENTS,
    });

    console.log('Seeding Attendees...');
    await db.eventRegistrant.createMany({
      data: ATTENDEES,
    });

    console.log('Seeding Speakers...');
    await db.eventSpeaker.createMany({
      data: SPEAKERS,
    });

    console.log('Seeding Sessions...');
    await db.eventSession.createMany({
      data: SESSIONS,
    });

    console.log('Connect Sessions & Speakers...');
    for (const ids of SESSION_SPEAKER_MAP) {
      const { sessionId, speakerId } = ids;
      await db.eventSession.update({
        where: { id: sessionId },
        data: { speakers: { connect: { id: speakerId } } },
      });
    }
  } catch (error) {
    console.error(error);
  }
};
