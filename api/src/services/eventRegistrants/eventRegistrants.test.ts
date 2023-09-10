import type { EventRegistrant } from '@prisma/client';

import {
  eventRegistrants,
  eventRegistrant,
  createEventRegistrant,
  updateEventRegistrant,
  deleteEventRegistrant,
} from './eventRegistrants';
import type { StandardScenario } from './eventRegistrants.scenarios';

describe('eventRegistrants', () => {
  scenario(
    'returns all eventRegistrants',
    async (scenario: StandardScenario) => {
      const result = await eventRegistrants();

      expect(result.length).toEqual(
        Object.keys(scenario.eventRegistrant).length
      );
    }
  );

  scenario(
    'returns a single eventRegistrant',
    async (scenario: StandardScenario) => {
      const result = await eventRegistrant({
        id: scenario.eventRegistrant.one.id,
      });

      expect(result).toEqual(scenario.eventRegistrant.one);
    }
  );

  scenario('creates a eventRegistrant', async (scenario: StandardScenario) => {
    const result = await createEventRegistrant({
      input: {
        email: 'String',
        firstName: 'String',
        lastName: 'String',
        dateOfBirth: '2023-09-02T18:07:00.678Z',
        ipAddress: 'String',
        notes: 'String',
        language: 'en_US',
        eventId: scenario.eventRegistrant.two.eventId,
      },
    });

    expect(result.email).toEqual('String');
    expect(result.firstName).toEqual('String');
    expect(result.lastName).toEqual('String');
    expect(result.dateOfBirth).toEqual(new Date('2023-09-02T00:00:00.000Z'));
    expect(result.ipAddress).toEqual('String');
    expect(result.notes).toEqual('String');
    expect(result.eventId).toEqual(scenario.eventRegistrant.two.eventId);
  });

  scenario('updates a eventRegistrant', async (scenario: StandardScenario) => {
    const original = (await eventRegistrant({
      id: scenario.eventRegistrant.one.id,
    })) as EventRegistrant;
    const result = await updateEventRegistrant({
      id: original.id,
      input: { email: 'String2' },
    });

    expect(result.email).toEqual('String2');
  });

  scenario('deletes a eventRegistrant', async (scenario: StandardScenario) => {
    const original = (await deleteEventRegistrant({
      id: scenario.eventRegistrant.one.id,
    })) as EventRegistrant;
    const result = await eventRegistrant({ id: original.id });

    expect(result).toEqual(null);
  });
});
