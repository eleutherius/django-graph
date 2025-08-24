import React from 'react';
import gql from 'graphql-tag';
import { useQuery } from '@apollo/react-hooks';


import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper } from '@mui/material';


const GET_MOVIES = gql`
  {
    allMovies {
      edges {
        node {
          id
          title
          year
          director {
            name
            surname
          }
        }
      }
    }
  }
`;


function NewMovies() {
  const { loading, error, data } = useQuery(GET_MOVIES);
  if (loading) return 'Loading...';
  if (error) return `Error! ${error.message}`;
  const movies = data.allMovies.edges;
  return (
    <TableContainer component={Paper}>
      <Table>
        <TableHead>
          <TableRow>
            <TableCell>ID</TableCell>
            <TableCell>Title</TableCell>
            <TableCell>Year</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          { movies.map((row) => (
            <TableRow key={row.node.id}>
              <TableCell>{row.node.id}</TableCell>
              <TableCell>{row.node.title}</TableCell>
              <TableCell>{row.node.year}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}

export default NewMovies;
