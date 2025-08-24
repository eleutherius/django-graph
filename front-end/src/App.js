import React from 'react';
import './App.css';
import { ApolloProvider, ApolloClient, InMemoryCache } from '@apollo/client';
import {Typography } from '@mui/material';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import NewMovies from './movies';
import client from './apolloClient';
import MovieForm from './components/MovieForm';

const theme = createTheme({
  palette: {
    primary: {
      main: '#1976d2',
    },
    secondary: {
      main: '#dc004e',
    },
  },
});


function App() {
  return (
      <ThemeProvider theme={theme}>
      <Typography variant="h4" component="h1" gutterBottom>
        Welcome to MUI with GraphQL
      </Typography>
      <ApolloProvider client={client}>
      <div className="App">
        <MovieForm />
        <NewMovies />
      </div>
    </ApolloProvider>
    </ThemeProvider>

  );
}
export default App;
