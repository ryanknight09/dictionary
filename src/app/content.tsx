import SearchIcon from '@mui/icons-material/Search';
import { InputAdornment, OutlinedInput, Stack, styled } from '@mui/material';

export const Content = () => {
  return (
    <Stack>
      <Search />
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
  placeholder: 'Search...',
  endAdornment: (
    <InputAdornment position="start">
      <SearchIcon color="secondary" />
    </InputAdornment>
  ),
};
