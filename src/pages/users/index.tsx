import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { Box, useTheme } from '@mui/material';
import { useSelector } from 'react-redux';

export default function Users() {
  const formData: IFormInput = useSelector(
    (state: RootState) => state.form.formData
  );
  console.log(formData);
  const rows = [formData];
  const theme = useTheme();

  return (
    <Box
      sx={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
      }}
    >
      <TableContainer
        component={Paper}
        sx={{
          margin: '20px',
          width: '320px',
          [theme.breakpoints.up('md')]: {
            width: '850px',
          },
          [theme.breakpoints.up('sm')]: {
            width: '550px',
          },
          [theme.breakpoints.up('lg')]: {
            width: '1150px',
          },
        }}
      >
        <Table sx={{ minWidth: 600 }} size="small" aria-label="a dense table">
          <TableHead>
            <TableRow>
              <TableCell>Name</TableCell>
              <TableCell align="center">Number</TableCell>
              <TableCell align="center">email</TableCell>
              <TableCell align="center">date</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {rows.map((row) => (
              <TableRow
                key={row.name}
                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
              >
                <TableCell component="th" scope="row">
                  {row.name}
                </TableCell>
                <TableCell align="center">{row.number}</TableCell>
                <TableCell align="center">{row.email}</TableCell>
                <TableCell align="center">{row.date}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Box>
  );
}
