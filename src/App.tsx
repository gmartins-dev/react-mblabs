import TicketsTable from '../src/components/table/TicketsTable';
import SearchBar from '../src/components/SearchBar';
import './App.css';
import { useState } from 'react';
import SelectType from './components/SelectType';
import { Box } from '@mui/material';
function App() {
  const [search, setSearch] = useState('');
  const [ticketType, setTicketType] = useState('Todos');
  const [ticketOnline, setTicketOnline] = useState('Todos');

  return (
    <>
      <header>App header teste</header>
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'center',
          margin: 'auto',
          gap: '5px',
          marginTop: '20px',
        }}
      >
        <SearchBar handleSearch={setSearch} />
        <SelectType
          ticketType={ticketType}
          setTicketType={setTicketType}
          values={['Todos', 'Empresarial', 'Acadêmico']}
        />
        <SelectType
          ticketType={ticketType}
          setTicketType={setTicketType}
          values={['Todos', 'Online', 'Presencial']}
        />
      </Box>

      <TicketsTable
        search={search}
        select={ticketType}
        online={ticketOnline}
      />
    </>
  );
}

export default App;
