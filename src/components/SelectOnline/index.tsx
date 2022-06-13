import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';

export default function SelectOnline({ ticketOnline }) {
  return (
    <Box sx={{ minWidth: 100 }}>
      <FormControl fullWidth>
        <InputLabel id="search-select-label">
          Online
        </InputLabel>
        <Select
          labelId="search-select-label"
          id="search-select"
          value={ticketOnline}
          label="ticketOnline"
          onChange={(e) => ticketOnline(e.target.value)}
        >
          <MenuItem value={1}>Todos</MenuItem>
          <MenuItem value={true}>Online</MenuItem>
          <MenuItem value={false}>Presencial</MenuItem>
        </Select>
      </FormControl>
    </Box>
  );
}
