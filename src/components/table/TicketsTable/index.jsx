import { useEffect, useState } from 'react';
import api from '../../../services/api.ts';
import {
  TableContainer,
  Table,
  TableHead,
  TableBody,
  TableRow,
  TableCell,
  Paper,
} from '@mui/material';

function TicketsTable() {
  const [ticketsList, setTicketsList] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const { data } = await api.get('/tickets');
      setTicketsList(data);
    }
    fetchData();
  }, []);

  return (
    <TableContainer component={Paper}>
      <Table arial-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>Id</TableCell>
            <TableCell>Name</TableCell>
          </TableRow>
        </TableHead>

        <TableBody>
          {ticketsList.map((ticketsRow) => (
            <TableRow
              key={ticketsRow.ticketId}
              sx={{
                '&:last-child td, &:last-child th': {
                  border: 0,
                },
              }}
            >
              <TableCell>{ticketsRow.ticketId}</TableCell>
              <TableCell>{ticketsRow.ticketName}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}

export default TicketsTable;
