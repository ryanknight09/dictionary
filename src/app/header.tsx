import ExpandLessIcon from '@mui/icons-material/ExpandLess';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import LightModeOutlinedIcon from '@mui/icons-material/LightModeOutlined';
import NightlightOutlinedIcon from '@mui/icons-material/NightlightOutlined';
import {
  Box,
  Button,
  Divider,
  Menu,
  MenuItem,
  Switch,
  styled,
} from '@mui/material';
import { useState } from 'react';
import { ReactComponent as BookIcon } from '../assets/images/logo.svg';
import { useThemeContext } from './useThemeContext';

export const Header = () => {
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const { font, mode, setIsDarkMode, setFont } = useThemeContext();
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
    <HeaderWrapper>
      <BookIcon />
      <ContentRight>
        <FontButton
          onClick={handleClick}
          variant="text"
          endIcon={
            open ? (
              <ExpandMoreIcon color="primary" />
            ) : (
              <ExpandLessIcon color="primary" />
            )
          }
        >
          {fontMap[font]}
        </FontButton>
        <Divider orientation="vertical" />
        <Switch onChange={() => setIsDarkMode((prevMode) => !prevMode)} />
        {mode === 'dark' ? (
          <NightlightOutlinedIcon color="primary" />
        ) : (
          <LightModeOutlinedIcon />
        )}
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
      </ContentRight>
    </HeaderWrapper>
  );
};

const HeaderWrapper = styled(Box)(({ theme }) => ({
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
}));

const ContentRight = styled(Box)(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  height: '2rem',
  gap: '.5rem',
}));

const FontButton = styled(Button)(({ theme }) => ({
  textTransform: 'none',
  fontWeight: 700,
}));
