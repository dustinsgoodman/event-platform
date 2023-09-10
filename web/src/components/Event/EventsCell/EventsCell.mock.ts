import type { FindEvents } from 'types/graphql';

export const standard: () => FindEvents = () => ({
  events: {
    nodes: [
      {
        id: '97d64e90-2c53-41cf-a6a5-af399f75ecc5',
        name: 'Connect.Tech 2023',
        startAt: new Date('October 24, 2023 08:00:00').toString(),
        endAt: new Date('October 26, 2023 05:00:00').toString(),
        registrationStartAt: new Date('May 1, 2023 08:00:00').toString(),
        registrationEndAt: new Date('September 15, 2023 23:59:59').toString(),
      },
      {
        id: '97d64e90-2c53-41cf-a6a5-af399f75ecc6',
        name: 'Connect.Tech 2024',
        startAt: new Date('October 24, 2024 08:00:00').toString(),
        endAt: new Date('October 26, 2024 05:00:00').toString(),
        registrationStartAt: new Date('May 1, 2024 08:00:00').toString(),
        registrationEndAt: new Date('September 15, 2024 23:59:59').toString(),
      },
      {
        id: '97d64e90-2c53-41cf-a6a5-af399f75ecc7',
        name: 'Connect.Tech 2025',
        startAt: new Date('October 24, 2025 08:00:00').toString(),
        endAt: new Date('October 26, 2025 05:00:00').toString(),
        registrationStartAt: new Date('May 1, 2025 08:00:00').toString(),
        registrationEndAt: new Date('September 15, 2025 23:59:59').toString(),
      },
    ],
    pagination: {
      totalPages: 3,
      page: 1,
      perPage: 3,
      total: 7,
    },
  },
});
