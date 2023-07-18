import ExpandLessIcon from '@mui/icons-material/ExpandLess';
import { Box, Button, Menu, MenuItem, Switch, Typography } from '@mui/material';
import { useState } from 'react';
import { ReactComponent as BookIcon } from '../assets/images/logo.svg';
import { useThemeContext } from './useThemeContext';

export const Header = () => {
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const { font, setIsDarkMode, setFont } = useThemeContext();
  const open = Boolean(anchorEl);

  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const fontMap: { [key: string]: string } = {
    Inter: 'Sans Serif',
    Lora: 'Serif',
    Inconsolata: 'Mono',
  };

  return (
    <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
      <BookIcon />
      <Box sx={{ display: 'flex' }}>
        <Button
          onClick={handleClick}
          variant="text"
          endIcon={<ExpandLessIcon />}
          sx={{ textTransform: 'none', fontWeight: 700 }}
        >
          {fontMap[font]}
        </Button>
        <Switch onChange={() => setIsDarkMode((prevMode) => !prevMode)} />
        <Menu anchorEl={anchorEl} open={open} onClose={() => setAnchorEl(null)}>
          <MenuItem
            onClick={() => setFont('Inter')}
            sx={{ fontFamily: 'Inter' }}
          >
            Sans
          </MenuItem>
          <MenuItem onClick={() => setFont('Lora')} sx={{ fontFamily: 'Lora' }}>
            Serif
          </MenuItem>
          <MenuItem
            onClick={() => setFont('Inconsolata')}
            sx={{ fontFamily: 'Inconsolata' }}
          >
            Mono
          </MenuItem>
        </Menu>
      </Box>
      <Typography>Hello</Typography>
    </Box>
  );
};
