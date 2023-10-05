import { Router, Route, Set } from '@redwoodjs/router';

import AdminLayout from './layouts/AdminLayout/AdminLayout';

const Routes = () => {
  return (
    <Router>
      <Route path="/" page={HomePage} name="home" />
      <Set wrap={AdminLayout}>
        <Route path="/events/{id}" page={EventPage} name="event" />
        <Route path="/events" page={EventsPage} name="events" />
      </Set>
      <Route notfound page={NotFoundPage} />
    </Router>
  );
};

export default Routes;
