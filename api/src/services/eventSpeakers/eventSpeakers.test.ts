import type { EventSpeaker } from '@prisma/client'

import {
  eventSpeakers,
  eventSpeaker,
  createEventSpeaker,
  updateEventSpeaker,
  deleteEventSpeaker,
} from './eventSpeakers'
import type { StandardScenario } from './eventSpeakers.scenarios'

// Generated boilerplate tests do not account for all circumstances
// and can fail without adjustments, e.g. Float.
//           Please refer to the RedwoodJS Testing Docs:
//       https://redwoodjs.com/docs/testing#testing-services
// https://redwoodjs.com/docs/testing#jest-expect-type-considerations

describe('eventSpeakers', () => {
  scenario('returns all eventSpeakers', async (scenario: StandardScenario) => {
    const result = await eventSpeakers()

    expect(result.length).toEqual(Object.keys(scenario.eventSpeaker).length)
  })

  scenario(
    'returns a single eventSpeaker',
    async (scenario: StandardScenario) => {
      const result = await eventSpeaker({ id: scenario.eventSpeaker.one.id })

      expect(result).toEqual(scenario.eventSpeaker.one)
    }
  )

  scenario('creates a eventSpeaker', async (scenario: StandardScenario) => {
    const result = await createEventSpeaker({
      input: {
        firstName: 'String',
        lastName: 'String',
        bio: 'String',
        eventId: scenario.eventSpeaker.two.eventId,
        registrantId: scenario.eventSpeaker.two.registrantId,
      },
    })

    expect(result.firstName).toEqual('String')
    expect(result.lastName).toEqual('String')
    expect(result.bio).toEqual('String')
    expect(result.eventId).toEqual(scenario.eventSpeaker.two.eventId)
    expect(result.registrantId).toEqual(scenario.eventSpeaker.two.registrantId)
  })

  scenario('updates a eventSpeaker', async (scenario: StandardScenario) => {
    const original = (await eventSpeaker({
      id: scenario.eventSpeaker.one.id,
    })) as EventSpeaker
    const result = await updateEventSpeaker({
      id: original.id,
      input: { firstName: 'String2' },
    })

    expect(result.firstName).toEqual('String2')
  })

  scenario('deletes a eventSpeaker', async (scenario: StandardScenario) => {
    const original = (await deleteEventSpeaker({
      id: scenario.eventSpeaker.one.id,
    })) as EventSpeaker
    const result = await eventSpeaker({ id: original.id })

    expect(result).toEqual(null)
  })
})
