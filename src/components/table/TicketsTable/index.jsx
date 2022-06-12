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
            <TableCell>Avatar</TableCell>
            <TableCell>Evento</TableCell>
            <TableCell>Descrição</TableCell>
            <TableCell>Data</TableCell>
            <TableCell>Cidade</TableCell>
            <TableCell>Online</TableCell>
            <TableCell>Tipo</TableCell>
            <TableCell>Vagas</TableCell>
            <TableCell>Preço</TableCell>
            <TableCell>Botão</TableCell>
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
              <TableCell>
                <img
                  src={ticketsRow.ticketAvatar}
                  alt={ticketsRow.ticketName}
                  width="50px"
                  heigth="50px"
                />
              </TableCell>
              <TableCell>{ticketsRow.ticketName}</TableCell>
              <TableCell>
                {ticketsRow.ticketDescription}
              </TableCell>
              <TableCell>{ticketsRow.ticketDate}</TableCell>
              <TableCell>{ticketsRow.ticketCity}</TableCell>
              <TableCell>
                {ticketsRow.ticketOnline}
              </TableCell>
              <TableCell>{ticketsRow.ticketType}</TableCell>
              <TableCell>
                {ticketsRow.ticketAvailable}
              </TableCell>
              <TableCell>
                {ticketsRow.ticketPrice}
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}

export default TicketsTable;
