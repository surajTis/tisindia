import { ApolloClient, InMemoryCache } from "@apollo/client";

const defaultOptions = {
  watchQuery: {
    fetchPolicy: 'no-cache',
    errorPolicy: 'ignore',
  },
  query: {
    fetchPolicy: 'no-cache',
    errorPolicy: 'all',
  },
  mutate: {
    errorPolicy: 'all',
  },
};


const client = new ApolloClient({
  uri: 'https://getaprogrammer.co.uk/onlineseodev/graphql',
  cache: new InMemoryCache({
    // just totally disable caching
    dataIdFromObject: () => (null),
  }),
  defaultOptions: defaultOptions,
});

export default client;
