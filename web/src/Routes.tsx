import { Router, Route, Set } from '@redwoodjs/router';

import ScaffoldLayout from 'src/layouts/ScaffoldLayout';

const Routes = () => {
  return (
    <Router>
      <Set wrap={ScaffoldLayout} title="Events" titleTo="events" buttonLabel="New Event" buttonTo="newEvent">
        <Route path="/events/new" page={EventNewEventPage} name="newEvent" />
        <Route path="/events/{id}/edit" page={EventEditEventPage} name="editEvent" />
        <Route path="/events/{id}" page={EventEventPage} name="event" />
        <Route path="/events" page={EventEventsPage} name="events" />
      </Set>
      <Route path="/" page={HomePage} name="home" />
      <Route notfound page={NotFoundPage} />
    </Router>
  );
};

export default Routes;
