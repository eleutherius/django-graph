import React, { useState } from 'react';
import { gql, useMutation } from '@apollo/client';
import { Box, Stack, TextField, Button, Alert, Typography } from '@mui/material';

// NOTE: Adjust the mutation name/args/response fields to match your GraphQL schema.
const CREATE_MOVIE = gql`
  mutation CreateMovie($title: String!, $year: Int!) {
    createMovie(title: $title, year: $year) {
      movie {
        id
        title
        year
      }
      # Include any additional fields your backend returns, e.g. ok, errors, etc.
    }
  }
`;

export default function MovieForm() {
  const [form, setForm] = useState({ title: '', year: '' });
  const [createMovie, { data, loading, error }] = useMutation(CREATE_MOVIE);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const yearInt = parseInt(form.year, 10);
    if (!form.title || Number.isNaN(yearInt)) return;
    try {
      await createMovie({ variables: { title: form.title, year: yearInt } });
      // Optional: clear form on success
      setForm({ title: '', year: '' });
    } catch (_e) {
      // Handled by 'error'
    }
  };

  const created = data?.createMovie?.movie;

  return (
    <Box component="section" sx={{ mb: 3 }}>
      <Typography variant="h6" gutterBottom>
        Add Movie
      </Typography>
      <Box component="form" onSubmit={handleSubmit} noValidate>
        <Stack direction={{ xs: 'column', sm: 'row' }} spacing={2} alignItems="flex-start">
          <TextField
            label="Title"
            name="title"
            value={form.title}
            onChange={handleChange}
            required
            fullWidth
          />
          <TextField
            label="Year"
            name="year"
            type="number"
            inputProps={{ min: 1888 }}
            value={form.year}
            onChange={handleChange}
            required
            sx={{ width: { xs: '100%', sm: 160 } }}
          />
          <Button
            type="submit"
            variant="contained"
            color="primary"
            disabled={loading || !form.title || !form.year}
          >
            {loading ? 'Saving...' : 'Save'}
          </Button>
        </Stack>
      </Box>

      {error && (
        <Alert severity="error" sx={{ mt: 2 }}>
          {error.message}
        </Alert>
      )}
      {created && (
        <Alert severity="success" sx={{ mt: 2 }}>
          Created: {created.title} ({created.year})
        </Alert>
      )}
    </Box>
  );
}
