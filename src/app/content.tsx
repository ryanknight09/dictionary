import LaunchIcon from '@mui/icons-material/Launch';
import SearchIcon from '@mui/icons-material/Search';
import {
  Box,
  IconButton,
  InputAdornment,
  Link,
  OutlinedInput,
  Stack,
  Typography,
  styled,
} from '@mui/material';
import { ReactComponent as PlayIcon } from '../assets/images/icon-play.svg';
import { Meaning } from './meaning';

export const Content = () => {
  return (
    <Stack gap="1.75rem">
      <Search />
      <FlexDisplay sx={{ justifyContent: 'space-between' }}>
        <Stack gap=".5rem">
          <Typography variant="h1" sx={{ fontSize: '2rem' }}>
            Keyboard
          </Typography>
          <Typography color="primary" variant="body2">
            /ˈkiːbɔːd/
          </Typography>
        </Stack>
        <IconButton color="secondary" sx={{ padding: 0 }}>
          <PlayIcon style={{ width: '3rem', height: '3rem' }} />
        </IconButton>
      </FlexDisplay>

      <Meaning partOfSpeach={''} definitions={[]} />
      {/* <Box sx={{ display: 'flex', alignItems: 'center', gap: '1.5rem' }}>
        <Typography variant="body2" sx={{ fontWeight: 700 }}>
          noun
        </Typography>
        <Divider sx={{ flex: 1 }} />
      </Box>
      <Stack>
        <Typography
          variant="body2"
          color="text.secondary"
          sx={{ fontSize: '1rem' }}
        >
          Meaning
        </Typography>
        <List disablePadding sx={{ listStyleType: 'disc', pl: 2.25 }}>
          <ListItem
            sx={{
              display: 'list-item',
              color: 'primary.main',
            }}
          >
            <Typography
              color="text.primary"
              variant="body2"
              sx={{ fontSize: '.9375rem' }}
            >
              (etc.) A set of keys used to operate a typewriter, computer etc.
            </Typography>
          </ListItem>
          <ListItem
            sx={{
              display: 'list-item',
              color: 'primary.main',
            }}
          >
            <Typography
              color="text.primary"
              variant="body2"
              sx={{ fontSize: '.9375rem' }}
            >
              A component of many instruments including the piano, organ, and
              harpsichord consisting of usually black and white keys that cause
              different tones to be produced when struck.
            </Typography>
          </ListItem>
          <ListItem
            sx={{
              display: 'list-item',
              color: 'primary.main',
            }}
          >
            <Typography
              color="text.primary"
              variant="body2"
              sx={{ fontSize: '.9375rem' }}
            >
              A device with keys of a musical keyboard, used to control
              electronic sound-producing devices which may be built into or
              separate from the keyboard device.
            </Typography>
          </ListItem>
        </List>
        <Typography
          variant="body2"
          color="text.secondary"
          sx={{
            fontSize: '1rem',
            mt: '1rem',
            span: {
              fontWeight: 700,
              ml: '2.5rem',
              color: 'primary.main',
            },
          }}
        >
          Synonyms<span>electronic keyboard</span>
        </Typography>
      </Stack>
      <Box sx={{ display: 'flex', alignItems: 'center', gap: '1.5rem' }}>
        <Typography variant="body2" sx={{ fontWeight: 700 }}>
          verb
        </Typography>
        <Divider sx={{ flex: 1 }} />
      </Box>
      <Stack>
        <Typography
          variant="body2"
          color="text.secondary"
          sx={{ fontSize: '1rem' }}
        >
          Meaning
        </Typography>
        <List disablePadding sx={{ listStyleType: 'disc', pl: 2.25 }}>
          <ListItem
            sx={{
              display: 'list-item',
              color: 'primary.main',
            }}
          >
            <Typography
              color="text.primary"
              variant="body2"
              sx={{ fontSize: '.9375rem' }}
            >
              To type on a computer keyboard.
            </Typography>
            <Typography
              variant="body2"
              color="text.secondary"
              sx={{
                fontSize: '.9375rem',
                mt: '.5rem',
              }}
            >
              “Keyboarding is the part of this job I hate the most.”
            </Typography>
          </ListItem>
        </List>
      </Stack>
      <Divider /> */}
      <Stack gap=".5rem">
        <Link
          color="text.secondary"
          sx={(theme) => ({
            ...theme.typography.button,
          })}
          href="https://en.wiktionary.org/wiki/keyboard"
        >
          Source
        </Link>
        <FlexDisplay gap=".5rem">
          <Typography variant="button">
            https://en.wiktionary.org/wiki/keyboard
          </Typography>
          <IconButton>
            <LaunchIcon fontSize="small" />
          </IconButton>
        </FlexDisplay>
      </Stack>
    </Stack>
  );
};

const FlexDisplay = styled(Box)(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
}));

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
