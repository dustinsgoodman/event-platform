import type { Prisma, Event } from '@prisma/client'

import type { ScenarioData } from '@redwoodjs/testing/api'

export const standard = defineScenario<Prisma.EventCreateArgs>({
  event: {
    one: {
      data: {
        name: 'String',
        startAt: '2023-09-02T18:06:26.235Z',
        endAt: '2023-09-02T18:06:26.235Z',
        registrationStartAt: '2023-09-02T18:06:26.235Z',
        registrationEndAt: '2023-09-02T18:06:26.235Z',
      },
    },
    two: {
      data: {
        name: 'String',
        startAt: '2023-09-02T18:06:26.235Z',
        endAt: '2023-09-02T18:06:26.235Z',
        registrationStartAt: '2023-09-02T18:06:26.235Z',
        registrationEndAt: '2023-09-02T18:06:26.235Z',
      },
    },
  },
})

export type StandardScenario = ScenarioData<Event, 'event'>
