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
  Box,
  LinearProgress,
  TableFooter,
} from '@mui/material';

function TicketsTable() {
  const [ticketsList, setTicketsList] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setIsLoading(true);
    async function fetchData() {
      const { data } = await api.get('/tickets');
      setTicketsList(data);
      setIsLoading(false);
    }
    fetchData();
  }, []);

  return (
    <Box
      height="80vh"
      width="80vw"
      display="flex"
      flexDirection="column"
      alignItems="center"
      justifyContent="center"
      margin="auto"
      marginTop="50px"
      marginBottom="50px"
      gap={1}
    >
      <TableContainer
        component={Paper}
        variant="outlined"
        sx={{ m: 1, width: 'auto' }}
      >
        <Table arial-label="simple table" stickyHeader>
          <TableHead>
            <TableRow>
              <TableCell>Avatar</TableCell>
              <TableCell>Evento</TableCell>
              <TableCell>Descrição</TableCell>
              <TableCell>Data</TableCell>
              <TableCell>Cidade</TableCell>
              <TableCell>Local</TableCell>
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
                <TableCell>
                  {ticketsRow.ticketName}
                </TableCell>
                <TableCell>
                  {ticketsRow.ticketDescription}
                </TableCell>
                <TableCell>
                  {ticketsRow.ticketDate}
                </TableCell>
                <TableCell>
                  {ticketsRow.ticketCity}
                </TableCell>
                <TableCell>
                  <Box
                    sx={{
                      display: 'flex',
                      flexDirection: 'row',
                      alignItems: 'center',
                      gap: '5px',
                    }}
                  >
                    <Box
                      sx={{
                        width: '10px',
                        height: '10px',
                        backgroundColor:
                          ticketsRow.ticketOnline === true
                            ? 'green'
                            : 'gray',
                        borderRadius: '50px',
                      }}
                    />
                    {ticketsRow.ticketOnline === true
                      ? 'Online'
                      : 'Presencial'}
                  </Box>
                </TableCell>
                <TableCell>
                  {ticketsRow.ticketType === true
                    ? 'Empresarial'
                    : 'Acadêmico'}
                </TableCell>
                <TableCell>
                  {ticketsRow.ticketAvailable}
                </TableCell>
                <TableCell>
                  {ticketsRow.ticketPrice}
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
          <TableFooter>
            {isLoading && (
              <TableRow>
                <TableCell colSpan={10}>
                  <LinearProgress variant="indeterminate" />
                </TableCell>
              </TableRow>
            )}
          </TableFooter>
        </Table>
      </TableContainer>
    </Box>
  );
}

export default TicketsTable;
