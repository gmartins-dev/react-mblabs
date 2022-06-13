import { useState } from 'react';
import { FiSearch } from 'react-icons/fi';
import { Container, SearchBox } from './styles.js';

export default function SearchBar({ handleSearch }) {
  const [searchValue, setSearchValue] = useState('');
  return (
    <Container>
      <SearchBox>
        <form
          onSubmit={(event) => {
            event.preventDefault();
            handleSearch(searchValue);
          }}
        >
          <input
            type="text"
            placeholder="Buscar..."
            onChange={(event) =>
              setSearchValue(event.target.value)
            }
            value={searchValue}
          />

          <button type="submit" className="buttonSearch">
            <FiSearch size={25} color="#FFF" />
          </button>
        </form>
      </SearchBox>
    </Container>
  );
}
