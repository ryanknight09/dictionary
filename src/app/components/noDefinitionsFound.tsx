import { Stack, Typography } from '@mui/material';

export const NoDefinitionsFound = () => (
  <Stack gap="1.75rem" textAlign="center" marginTop="8.25rem">
    <Typography variant="h1">😕</Typography>
    <Typography
      color="text.primary"
      variant="body2"
      sx={{ fontWeight: 700, marginBottom: '1rem' }}
    >
      No Definitions Found
    </Typography>
    <Typography variant="body2" color="text.secondary" sx={{ fontWeight: 400 }}>
      Sorry pal, we couldn't find definitions for the word you were looking for.
      You can try the search again at later time or head to the web instead.
    </Typography>
  </Stack>
);
