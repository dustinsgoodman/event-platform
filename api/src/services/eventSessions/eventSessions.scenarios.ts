import type { Prisma, EventSession } from '@prisma/client';

import type { ScenarioData } from '@redwoodjs/testing/api';

export const standard = defineScenario<Prisma.EventSessionCreateArgs>({
  eventSession: {
    one: {
      data: {
        name: 'String',
        startAt: '2023-09-02T18:06:47.392Z',
        endAt: '2023-09-02T18:06:47.392Z',
        event: {
          create: {
            name: 'String',
            startAt: '2023-09-02T18:06:47.392Z',
            endAt: '2023-09-02T18:06:47.392Z',
            registrationStartAt: '2023-09-02T18:06:47.392Z',
            registrationEndAt: '2023-09-02T18:06:47.392Z',
          },
        },
      },
    },
    two: {
      data: {
        name: 'String',
        startAt: '2023-09-02T18:06:47.392Z',
        endAt: '2023-09-02T18:06:47.392Z',
        event: {
          create: {
            name: 'String',
            startAt: '2023-09-02T18:06:47.392Z',
            endAt: '2023-09-02T18:06:47.392Z',
            registrationStartAt: '2023-09-02T18:06:47.392Z',
            registrationEndAt: '2023-09-02T18:06:47.392Z',
          },
        },
      },
    },
  },
});

export type StandardScenario = ScenarioData<EventSession, 'eventSession'>;
