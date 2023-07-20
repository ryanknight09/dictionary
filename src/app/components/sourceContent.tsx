import LaunchIcon from '@mui/icons-material/Launch';
import {
  Box,
  IconButton,
  Link,
  Stack,
  Typography,
  styled,
} from '@mui/material';

type SourceContentProps = {
  sourceUrl: string;
};

export const SourceContent = ({ sourceUrl }: SourceContentProps) => (
  <Stack gap=".5rem">
    <Link
      target="_blank"
      color="text.secondary"
      sx={(theme) => ({
        ...theme.typography.button,
      })}
      href={sourceUrl}
    >
      Source
    </Link>
    <FlexDisplay gap=".5rem">
      <Typography variant="button" sx={{ textTransform: 'none' }}>
        {sourceUrl}
      </Typography>
      <a href={sourceUrl} target="_blank">
        <IconButton>
          <LaunchIcon fontSize="small" />
        </IconButton>
      </a>
    </FlexDisplay>
  </Stack>
);

const FlexDisplay = styled(Box)(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
}));
