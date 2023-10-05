import type { Prisma, EventRegistrant } from '@prisma/client';

import type { ScenarioData } from '@redwoodjs/testing/api';

export const standard = defineScenario<Prisma.EventRegistrantCreateArgs>({
  eventRegistrant: {
    one: {
      data: {
        email: 'String',
        firstName: 'String',
        lastName: 'String',
        dateOfBirth: '2023-09-02T18:07:00.691Z',
        ipAddress: 'String',
        notes: 'String',
        event: {
          create: {
            name: 'String',
            startAt: '2023-09-02T18:07:00.691Z',
            endAt: '2023-09-02T18:07:00.691Z',
            registrationStartAt: '2023-09-02T18:07:00.691Z',
            registrationEndAt: '2023-09-02T18:07:00.691Z',
          },
        },
      },
    },
    two: {
      data: {
        email: 'String',
        firstName: 'String',
        lastName: 'String',
        dateOfBirth: '2023-09-02T18:07:00.691Z',
        ipAddress: 'String',
        notes: 'String',
        event: {
          create: {
            name: 'String',
            startAt: '2023-09-02T18:07:00.691Z',
            endAt: '2023-09-02T18:07:00.691Z',
            registrationStartAt: '2023-09-02T18:07:00.691Z',
            registrationEndAt: '2023-09-02T18:07:00.691Z',
          },
        },
      },
    },
  },
});

export type StandardScenario = ScenarioData<EventRegistrant, 'eventRegistrant'>;
