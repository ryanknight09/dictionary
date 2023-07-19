import { Container, Stack, styled } from '@mui/material';
import { Content } from './content';
import { Header } from './header';
import Theme from './theme/theme';
import { ThemeContextProvider } from './useThemeContext';

export function App() {
  return (
    <ThemeContextProvider>
      <Theme>
        <AppWrapper>
          <Stack gap="1.5rem" paddingBottom="1.5rem">
            <Header />
            <Content />
          </Stack>
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
