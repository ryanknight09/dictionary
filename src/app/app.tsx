import {
  Button,
  Container,
  Menu,
  MenuItem,
  Paper,
  Switch,
  Typography,
} from '@mui/material';
import { useState } from 'react';
import Theme from './theme/theme';

export function App() {
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [font, setFont] = useState('Lora');
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);

  const mode = isDarkMode ? 'dark' : 'light';

  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };

  return (
    <Theme mode={mode} font={font}>
      <Container>
        <Switch onChange={() => setIsDarkMode((prevMode) => !prevMode)} />
        <Menu anchorEl={anchorEl} open={open} onClose={() => setAnchorEl(null)}>
          <MenuItem onClick={() => setFont('Inter')}>Sans</MenuItem>
          <MenuItem onClick={() => setFont('Lora')}>Serif</MenuItem>
          <MenuItem onClick={() => setFont('Inconsolata')}>Mono</MenuItem>
        </Menu>
        <Paper>Hello world</Paper>
        <Button onClick={handleClick} variant="contained">
          Click Me
        </Button>
        <Typography variant="h1">Here is some snazzy text!</Typography>
      </Container>
    </Theme>
  );
}

export default App;
