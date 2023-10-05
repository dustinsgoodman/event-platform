import { Router, Route, Set } from '@redwoodjs/router';

import ScaffoldLayout from 'src/layouts/ScaffoldLayout';
import AdminLayout from 'src/layouts/AdminLayout/AdminLayout';
import EventAdminLayout from 'src/layouts/EventAdminLayout/EventAdminLayout';

const Routes = () => {
  return (
    <Router>
      <Set wrap={AdminLayout}>
        <Route path="/events/new" page={EventNewEventPage} name="newEvent" />
        <Route path="/events" page={EventEventsPage} name="events" />
      </Set>
      <Set wrap={EventAdminLayout}>
        <Route path="/events/{eventId}/sessions/new" page={EventSessionNewEventSessionPage} name="newEventSession" />
        <Route path="/events/{eventId}/sessions/{id}/edit" page={EventSessionEditEventSessionPage} name="editEventSession" />
        <Route path="/events/{eventId}/session/{id}" page={EventSessionEventSessionPage} name="eventSession" />
        <Route path="/events/{eventId}/sessions" page={EventSessionEventSessionsPage} name="eventSessions" />

        <Route path="/events/{eventId}/speakers" page={EventSpeakerEventSpeakersPage} name="eventSpeakers" />

        <Route path="/events/{eventId}/registrants" page={EventRegistrantEventRegistrantsPage} name="eventRegistrants" />

        <Route path="/events/{eventId}/edit" page={EventEditEventPage} name="editEvent" />
        <Route path="/events/{eventId}" page={EventEventPage} name="event" />
      </Set>
      <Route path="/" page={HomePage} name="home" />
      <Route notfound page={NotFoundPage} />
    </Router>
  );
};

export default Routes;
