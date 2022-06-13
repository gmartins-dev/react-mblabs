import { useEffect, useState } from 'react';
import api from '../../../services/api';
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

interface IticketsList {
  ticketCreatedAt: Date;
  ticketName: string;
  ticketAvatar: string;
  ticketType: boolean;
  ticketPrice: string;
  ticketAvailable: number;
  ticketDescription: string;
  ticketCity: string;
  ticketDate: string;
  ticketOnline: boolean;
  ticketId: string;
}

function TicketsTable({ search, select, online }) {
  const [ticketsList, setTicketsList] = useState<
    IticketsList[]
  >([]);
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

  function formatDate(date: string) {
    const [datetime, time] = date.split('T');
    const [year, month, day] = datetime.split('-');

    return `${day}/${month}/${year}`;
  }

  return (
    <Box
      height="90vh"
      width="80vw"
      display="flex"
      flexDirection="column"
      alignItems="center"
      justifyContent="center"
      margin="auto"
      marginTop="30px"
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
              .filter((result) => {
                if (online === 1) {
                  return result;
                } else {
                  return online === result.ticketOnline;
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
                      height="50px"
                    />
                  </StyledTableCell>
                  <StyledTableCell>
                    {ticketsRow.ticketName}
                  </StyledTableCell>
                  <StyledTableCell>
                    {ticketsRow.ticketDescription}
                  </StyledTableCell>
                  <StyledTableCell>
                    {formatDate(ticketsRow.ticketDate)}
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
                <StyledTableCell
                  colSpan={10}
                  height={400}
                  width={600}
                >
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
