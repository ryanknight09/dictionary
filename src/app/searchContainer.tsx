import SearchIcon from '@mui/icons-material/Search';
import { InputAdornment, OutlinedInput, Stack, styled } from '@mui/material';
import { useState } from 'react';
import { Content } from './content';
import { useDebounce } from './useDebounce';

export const SearchContainer = () => {
  const [searchTerm, setSearchTerm] = useState('hello');
  const debouncedSearch = useDebounce(searchTerm, 300);

  const handleSearchChange = (event: React.ChangeEvent<HTMLInputElement>) =>
    setSearchTerm(event.target.value);

  return (
    <Stack gap="1.75rem">
      <Search value={searchTerm} onChange={handleSearchChange} />
      <Content searchTerm={debouncedSearch} />
    </Stack>
  );
};

const Search = styled(OutlinedInput)(({ theme }) => ({
  borderRadius: '1rem',
  height: '3rem',
  fontSize: '1rem',
  fontWeight: 700,
  '& .MuiOutlinedInput-notchedOutline': {
    border: 'none',
  },
  '&.Mui-focused': {
    border: `1px solid ${theme.palette.primary.main}`,
  },
}));

Search.defaultProps = {
  fullWidth: true,
  type: 'search',
  placeholder: 'Search...',
  startAdornment: (
    <InputAdornment position="start">
      <SearchIcon color="secondary" />
    </InputAdornment>
  ),
};
