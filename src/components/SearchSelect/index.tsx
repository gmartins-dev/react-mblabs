import { useState } from 'react';
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select, {
  SelectChangeEvent,
} from '@mui/material/Select';

export default function SearchSelect({ handleSelect }) {
  const [ticketType, setTicketType] = useState('');

  console.log(ticketType);

  return (
    <Box sx={{ minWidth: 120 }}>
      <FormControl fullWidth>
        <InputLabel id="search-select-label">
          Tipo
        </InputLabel>
        <Select
          labelId="search-select-label"
          id="search-select"
          value={ticketType}
          label="ticketType"
          onChange={(e) => setTicketType(e.target.value)}
        >
          <MenuItem value={1}>Todos</MenuItem>
          <MenuItem value={2}>Empresarial</MenuItem>
          <MenuItem value={3}>Acadêmico</MenuItem>
        </Select>
      </FormControl>
    </Box>
  );
}
