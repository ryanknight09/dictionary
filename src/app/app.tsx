import { Container, styled } from '@mui/material';
import { Header } from './header';
import Theme from './theme/theme';
import { ThemeContextProvider } from './useThemeContext';

export function App() {
  return (
    <ThemeContextProvider>
      <Theme>
        <AppWrapper>
          <Header />
        </AppWrapper>
      </Theme>
    </ThemeContextProvider>
  );
}

export default App;

const AppWrapper = styled(Container)(({ theme }) => ({
  width: '100vw',
  height: '100vh',
  padding: '1.5rem',
  [theme.breakpoints.up(768)]: {
    padding: '3.5rem 1.5rem',
  },
}));
