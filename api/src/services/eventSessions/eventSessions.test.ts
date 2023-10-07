import type { EventSession } from '@prisma/client';

import {
  eventSessions,
  eventSession,
  createEventSession,
  updateEventSession,
  deleteEventSession,
} from './eventSessions';
import type { StandardScenario } from './eventSessions.scenarios';

describe('eventSessions', () => {
  scenario('returns all eventSessions', async (scenario: StandardScenario) => {
    const result = await eventSessions({
      eventId: scenario.eventSession.one.eventId,
    });

    expect(result.nodes.length).toEqual(1);
  });

  scenario(
    'returns a single eventSession',
    async (scenario: StandardScenario) => {
      const result = await eventSession({ id: scenario.eventSession.one.id });

      expect(result).toEqual(scenario.eventSession.one);
    }
  );

  scenario('creates a eventSession', async (scenario: StandardScenario) => {
    const result = await createEventSession({
      input: {
        name: 'String',
        startAt: '2023-09-02T18:06:47.379Z',
        endAt: '2023-09-02T18:06:47.379Z',
        eventId: scenario.eventSession.two.eventId,
      },
    });

    expect(result.name).toEqual('String');
    expect(result.startAt).toEqual(new Date('2023-09-02T18:06:47.379Z'));
    expect(result.endAt).toEqual(new Date('2023-09-02T18:06:47.379Z'));
    expect(result.event.id).toEqual(scenario.eventSession.two.eventId);
  });

  scenario('updates a eventSession', async (scenario: StandardScenario) => {
    const original = (await eventSession({
      id: scenario.eventSession.one.id,
    })) as EventSession;
    const result = await updateEventSession({
      id: original.id,
      input: { name: 'String2' },
    });

    expect(result.name).toEqual('String2');
  });

  scenario('deletes a eventSession', async (scenario: StandardScenario) => {
    const original = (await deleteEventSession({
      id: scenario.eventSession.one.id,
    })) as EventSession;
    const result = await eventSession({ id: original.id });

    expect(result).toEqual(null);
  });
});
