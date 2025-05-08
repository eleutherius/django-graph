import React from 'react';
import './App.css';
import Movies from './movies';
import { ApolloProvider, ApolloClient, InMemoryCache } from '@apollo/client';

const client = new ApolloClient({
  uri: "http://localhost:8000/graphql/", // Використовуйте localhost
  cache: new InMemoryCache(),
});

function App() {
  return (
    <ApolloProvider client={client}>
      <div className="App">
        <Movies />
      </div>
    </ApolloProvider>
  );
}

export default App;
