import React from 'react';
import './App.css';
import { ApolloProvider } from '@apollo/client';
import { Typography, Tabs, Tab, Box, Fab, Dialog, DialogTitle, DialogContent } from '@mui/material';
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

// Minimal TabPanel helper
function TabPanel({ children, value, index, ...other }) {
  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`app-tabpanel-${index}`}
      aria-labelledby={`app-tab-${index}`}
      {...other}
    >
      {value === index && <Box sx={{ pt: 2 }}>{children}</Box>}
    </div>
  );
}
const a11yProps = (index) => ({
  id: `app-tab-${index}`,
  'aria-controls': `app-tabpanel-${index}`,
});

function App() {
  const [tab, setTab] = React.useState(0);
  const [openForm, setOpenForm] = React.useState(false);

  return (
      <ThemeProvider theme={theme}>
      <Typography variant="h4" component="h1" gutterBottom>
        Welcome to MUI with GraphQL
      </Typography>
      <ApolloProvider client={client}>
      <div className="App">
        <Tabs value={tab} onChange={(_, v) => setTab(v)} aria-label="App tabs">
          <Tab label="Movies" {...a11yProps(0)} />
        </Tabs>

        <TabPanel value={tab} index={0}>
          <NewMovies />
        </TabPanel>

        <Fab
          color="primary"
          aria-label="add movie"
          onClick={() => setOpenForm(true)}
          sx={{ position: 'fixed', right: 24, bottom: 24, fontSize: 24 }}
        >
          +
        </Fab>

        <Dialog
          open={openForm}
          onClose={() => setOpenForm(false)}
          fullWidth
          maxWidth="sm"
        >
          <DialogTitle>Add Movie</DialogTitle>
          <DialogContent dividers>
            <MovieForm onSuccess={() => setOpenForm(false)} />
          </DialogContent>
        </Dialog>
      </div>
    </ApolloProvider>
    </ThemeProvider>

  );
}
export default App;
