import type { EventSession } from '@prisma/client'

import {
  eventSessions,
  eventSession,
  createEventSession,
  updateEventSession,
  deleteEventSession,
} from './eventSessions'
import type { StandardScenario } from './eventSessions.scenarios'

// Generated boilerplate tests do not account for all circumstances
// and can fail without adjustments, e.g. Float.
//           Please refer to the RedwoodJS Testing Docs:
//       https://redwoodjs.com/docs/testing#testing-services
// https://redwoodjs.com/docs/testing#jest-expect-type-considerations

describe('eventSessions', () => {
  scenario('returns all eventSessions', async (scenario: StandardScenario) => {
    const result = await eventSessions()

    expect(result.length).toEqual(Object.keys(scenario.eventSession).length)
  })

  scenario(
    'returns a single eventSession',
    async (scenario: StandardScenario) => {
      const result = await eventSession({ id: scenario.eventSession.one.id })

      expect(result).toEqual(scenario.eventSession.one)
    }
  )

  scenario('creates a eventSession', async (scenario: StandardScenario) => {
    const result = await createEventSession({
      input: {
        name: 'String',
        startAt: '2023-09-02T18:06:47.379Z',
        endAt: '2023-09-02T18:06:47.379Z',
        eventId: scenario.eventSession.two.eventId,
      },
    })

    expect(result.name).toEqual('String')
    expect(result.startAt).toEqual(new Date('2023-09-02T18:06:47.379Z'))
    expect(result.endAt).toEqual(new Date('2023-09-02T18:06:47.379Z'))
    expect(result.eventId).toEqual(scenario.eventSession.two.eventId)
  })

  scenario('updates a eventSession', async (scenario: StandardScenario) => {
    const original = (await eventSession({
      id: scenario.eventSession.one.id,
    })) as EventSession
    const result = await updateEventSession({
      id: original.id,
      input: { name: 'String2' },
    })

    expect(result.name).toEqual('String2')
  })

  scenario('deletes a eventSession', async (scenario: StandardScenario) => {
    const original = (await deleteEventSession({
      id: scenario.eventSession.one.id,
    })) as EventSession
    const result = await eventSession({ id: original.id })

    expect(result).toEqual(null)
  })
})
