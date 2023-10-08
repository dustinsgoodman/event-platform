import { render } from '@redwoodjs/testing/web';

import DetailHeader from './DetailHeader';

//   Improve this test with help from the Redwood Testing Doc:
//    https://redwoodjs.com/docs/testing#testing-components

describe('DetailHeader', () => {
  it('renders successfully', () => {
    expect(() => {
      render(
        <DetailHeader
          mutation={gql`
            mutation DeleteEventMutation($id: String!) {
              deleteEvent(id: $id) {
                id
              }
            }
          `}
          entityType="Entity"
          entityId="1234"
          entityName="Entity Name"
          entityIndexRoute="/"
          entityEditRoute="/1234/edit"
        />
      );
    }).not.toThrow();
  });
});
