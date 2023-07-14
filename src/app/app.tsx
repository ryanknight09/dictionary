import { Button, Container, Paper, Switch, Typography } from '@mui/material';
import { useState } from 'react';
import Theme from './theme/theme';

export function App() {
  const [isDarkMode, setIsDarkMode] = useState(false);

  const mode = isDarkMode ? 'dark' : 'light';

  return (
    <Theme mode={mode}>
      <Container>
        <Switch onChange={() => setIsDarkMode((prevMode) => !prevMode)} />
        <Paper>Hello world</Paper>
        <Button variant="contained">Click Me</Button>
        <Typography variant="h1">Here is some snazzy text!</Typography>
      </Container>
    </Theme>
  );
}

export default App;
