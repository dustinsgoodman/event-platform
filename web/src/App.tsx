import { FatalErrorBoundary, RedwoodProvider } from '@redwoodjs/web';
import { RedwoodApolloProvider } from '@redwoodjs/web/apollo';
import { ApolloLink, HttpLink } from '@apollo/client';
import { BatchHttpLink } from "@apollo/client/link/batch-http";

import FatalErrorPage from 'src/pages/FatalErrorPage';
import Routes from 'src/Routes';

import './index.css';

const uri = 'http://localhost:8910/.redwood/functions/graphql';
const httpLink = new HttpLink({ uri });
const batchLink = new BatchHttpLink({ uri, headers: { batch: "true " } })

const App = () => (
  <FatalErrorBoundary page={FatalErrorPage}>
    <RedwoodProvider titleTemplate="%PageTitle | %AppTitle">
      <RedwoodApolloProvider graphQLClientConfig={{
        link: (redwoodApolloLinks) => {
          const configuredBatchLink = ApolloLink.split(
            operation => operation.getContext().important === true,
            httpLink,
            batchLink
          );
          return ApolloLink.from([configuredBatchLink, ...redwoodApolloLinks.map(({ link }) => link)]);
        }
      }}>
        <Routes />
      </RedwoodApolloProvider>
    </RedwoodProvider>
  </FatalErrorBoundary>
);

export default App;
