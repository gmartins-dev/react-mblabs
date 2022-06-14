<tbody>
  {usersFiltered.length === 0 ? (
    <div className="user-notfound">No User Found!</div>
  ) : (
    usersFiltered.map((user) => {
      return (
        <TableUsers key={user.login.uuid} user={user} />
      );
    })
  )}
</tbody>;

{
  filterData.length === 0 ? (
    <div>No User Found!</div>
  ) : (
    filterData
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
            <Button variant="outlined">Comprar</Button>
          </StyledTableCell>
        </StyledTableRow>
      ))
  );
}
