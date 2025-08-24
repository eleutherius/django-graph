import { ApolloClient, InMemoryCache } from '@apollo/client';

const client = new ApolloClient({
  // uri: 'http://localhost:8000/graphql',
  uri: 'http://172.20.10.2:8000/graphql/',
  cache: new InMemoryCache(),
});

export default client;
