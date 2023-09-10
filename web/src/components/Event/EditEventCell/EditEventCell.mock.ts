import type { EditEventById } from 'types/graphql';

export const standard: () => EditEventById = () => {
  return {
    event: {
      id: '97d64e90-2c53-41cf-a6a5-af399f75ecc5',
      name: 'Connect.Tech 2023',
      description:
        'The largest multi-framework front-end conference in the USA. A three day event diving deep with experts from across the tech ecosystem.',
      timezone: 'America/New_York',
      startAt: new Date('October 24, 2023 08:00:00').toString(),
      endAt: new Date('October 26, 2023 05:00:00').toString(),
      venueType: 'IN_PERSON',
      venueName: 'Georgia World Congress Center',
      address: '285 Andrew Young International Blvd NW',
      country: 'USA',
      city: 'Atlanta',
      stateOrProvince: 'GA',
      postalCode: '30313',
      registrationStartAt: new Date('May 1, 2023 08:00:00').toString(),
      registrationEndAt: new Date('September 15, 2023 23:59:59').toString(),
      currency: 'USD',
      capacity: null,
      createdAt: new Date('November 1, 2022 08:00:00').toString(),
      updatedAt: new Date().toString(),
    },
  };
};
