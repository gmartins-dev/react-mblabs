import { useEffect, useState } from 'react';
import api from '../../../services/api.ts';
import {
  TableContainer,
  Table,
  TableCell,
  TableHead,
  TableBody,
  TableRow,
  Paper,
  Box,
  LinearProgress,
  TableFooter,
  Button,
  styled,
} from '@mui/material';
import { tableCellClasses } from '@mui/material/TableCell';

function TicketsTable({ search, select }) {
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

  const StyledTableCell = styled(TableCell)(
    ({ theme }) => ({
      [`&.${tableCellClasses.head}`]: {
        backgroundColor: theme.palette.primary.main,
        color: theme.palette.common.white,
      },
      [`&.${tableCellClasses.body}`]: {
        fontSize: 14,
      },
    }),
  );

  const StyledTableRow = styled(TableRow)(({ theme }) => ({
    '&:nth-of-type(odd)': {
      backgroundColor: theme.palette.action.hover,
    },
    // hide last border
    '&:last-child td, &:last-child th': {
      border: 0,
    },
  }));

  const filterData = ticketsList.filter((result) => {
    if (select === 1) {
      return result;
    } else {
      return select === result.ticketType;
    }
  });

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
              <StyledTableCell align="center"></StyledTableCell>
              <StyledTableCell>Evento</StyledTableCell>
              <StyledTableCell>Descrição</StyledTableCell>
              <StyledTableCell>Data</StyledTableCell>
              <StyledTableCell>Cidade</StyledTableCell>
              <StyledTableCell>Local</StyledTableCell>
              <StyledTableCell>Tipo</StyledTableCell>
              <StyledTableCell>Vagas</StyledTableCell>
              <StyledTableCell>Preço</StyledTableCell>
              <StyledTableCell align="center">
                Comprar
              </StyledTableCell>
            </TableRow>
          </TableHead>

          <TableBody>
            {filterData
              .filter((ticketsRow) => {
                if (search === '') {
                  return ticketsRow;
                } else if (
                  ticketsRow.ticketName
                    .toLowerCase()
                    .includes(search.toLowerCase())
                ) {
                  return ticketsRow;
                }
              })
              .map((ticketsRow) => (
                <StyledTableRow
                  key={ticketsRow.ticketId}
                  sx={{
                    '&:last-child td, &:last-child th': {
                      border: 0,
                    },
                  }}
                >
                  <StyledTableCell>
                    <img
                      src={ticketsRow.ticketAvatar}
                      alt={ticketsRow.ticketName}
                      width="50px"
                      heigth="50px"
                    />
                  </StyledTableCell>
                  <StyledTableCell>
                    {ticketsRow.ticketName}
                  </StyledTableCell>
                  <StyledTableCell>
                    {ticketsRow.ticketDescription}
                  </StyledTableCell>
                  <StyledTableCell>
                    {ticketsRow.ticketDate}
                  </StyledTableCell>
                  <StyledTableCell>
                    {ticketsRow.ticketCity}
                  </StyledTableCell>
                  <StyledTableCell>
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
                  </StyledTableCell>
                  <StyledTableCell>
                    {ticketsRow.ticketType === true
                      ? 'Empresarial'
                      : 'Acadêmico'}
                  </StyledTableCell>
                  <StyledTableCell>
                    {ticketsRow.ticketAvailable}
                  </StyledTableCell>
                  <StyledTableCell>
                    R$&nbsp;{ticketsRow.ticketPrice}
                  </StyledTableCell>
                  <StyledTableCell>
                    <Button variant="outlined">
                      Comprar
                    </Button>
                  </StyledTableCell>
                </StyledTableRow>
              ))}
          </TableBody>
          <TableFooter>
            {isLoading && (
              <TableRow>
                <StyledTableCell colSpan={10}>
                  <LinearProgress variant="indeterminate" />
                </StyledTableCell>
              </TableRow>
            )}
          </TableFooter>
        </Table>
      </TableContainer>
    </Box>
  );
}

export default TicketsTable;
