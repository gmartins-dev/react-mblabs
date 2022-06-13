import TicketsTable from '../src/components/table/TicketsTable';
import SearchBar from '../src/components/SearchBar';
import './App.css';
import { useState } from 'react';
import SearchSelect from '../src/components/SearchSelect';
import { Box } from '@mui/material';
function App() {
  const [search, setSearch] = useState('');

  return (
    <>
      <header>App header teste</header>
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'row',
          alignItems: 'center',
          gap: '5px',
        }}
      >
        <SearchBar handleSearch={setSearch} />
        <SearchSelect />
      </Box>

      <TicketsTable search={search} />
    </>
  );
}

export default App;
