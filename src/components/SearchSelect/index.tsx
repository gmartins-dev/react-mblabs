import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';

export default function SearchSelect({
  ticketType,
  setTicketType,
  values,
}) {
  console.log(values);
  return (
    <Box sx={{ minWidth: 100 }}>
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
          {values.map((name) => {
            return (
              <MenuItem key={name.id} value={name.value}>
                {name.nome}
              </MenuItem>
            );
          })}
        </Select>
      </FormControl>
    </Box>
  );
}
