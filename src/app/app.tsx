import { Box, Container, Stack, styled } from '@mui/material';
import { ApiProvider } from './apiProvider';
import { Content } from './content';
import { Header } from './header';
import Theme from './theme/theme';
import { ThemeContextProvider } from './useThemeContext';

export function App() {
  return (
    <ThemeContextProvider>
      <Theme>
        <ApiProvider>
          <Box sx={{ width: '100vw', height: '100vh' }}>
            <AppWrapper>
              <Stack gap="1.5rem">
                <Header />
                <Content />
              </Stack>
            </AppWrapper>
          </Box>
        </ApiProvider>
      </Theme>
    </ThemeContextProvider>
  );
}

export default App;

const AppWrapper = styled(Container)(({ theme }) => ({
  padding: '1.5rem',
  overflowY: 'auto',
  [theme.breakpoints.up(768)]: {
    padding: '3.5rem 1.5rem',
  },
}));
