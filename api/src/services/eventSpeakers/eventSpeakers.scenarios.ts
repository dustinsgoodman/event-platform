import type { Prisma, EventSpeaker } from '@prisma/client'

import type { ScenarioData } from '@redwoodjs/testing/api'

export const standard = defineScenario<Prisma.EventSpeakerCreateArgs>({
  eventSpeaker: {
    one: {
      data: {
        firstName: 'String',
        lastName: 'String',
        bio: 'String',
        event: {
          create: {
            name: 'String',
            startAt: '2023-09-02T18:06:54.217Z',
            endAt: '2023-09-02T18:06:54.217Z',
            registrationStartAt: '2023-09-02T18:06:54.217Z',
            registrationEndAt: '2023-09-02T18:06:54.217Z',
          },
        },
      },
    },
    two: {
      data: {
        firstName: 'String',
        lastName: 'String',
        bio: 'String',
        event: {
          create: {
            name: 'String',
            startAt: '2023-09-02T18:06:54.217Z',
            endAt: '2023-09-02T18:06:54.217Z',
            registrationStartAt: '2023-09-02T18:06:54.217Z',
            registrationEndAt: '2023-09-02T18:06:54.217Z',
          },
        },
      },
    },
  },
})

export type StandardScenario = ScenarioData<EventSpeaker, 'eventSpeaker'>
