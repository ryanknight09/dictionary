import {
  Box,
  Divider,
  List,
  ListItem,
  Stack,
  Typography,
  styled,
} from '@mui/material';
import type { Meaning as MeaningProps } from '../apiProvider';

export const Meaning = ({
  partOfSpeech,
  definitions,
  synonyms = [],
}: MeaningProps) => (
  <Stack gap="1.75rem">
    <SectionWrapper>
      <Typography variant="body2" sx={{ fontWeight: 700 }}>
        {partOfSpeech}
      </Typography>
      <Divider sx={{ flex: 1 }} />
    </SectionWrapper>
    <Stack>
      <MeaningText variant="body2">Meaning</MeaningText>
      <List disablePadding sx={{ listStyleType: 'disc', pl: 2.75 }}>
        {definitions.map((item, index) => (
          <ListItem
            key={`${partOfSpeech}-${index}`}
            sx={{
              display: 'list-item',
              color: 'primary.main',
            }}
          >
            <DefinitionText variant="body2">{item.definition}</DefinitionText>
            {item.example && (
              <ExamplenText variant="body2">{`“${item.example}”`}</ExamplenText>
            )}
          </ListItem>
        ))}
      </List>
      {synonyms?.length > 0 && (
        <Box sx={{ display: 'flex', gap: '2.5rem', marginTop: '1.5rem' }}>
          <SynonymText variant="body2">Synonyms</SynonymText>
          <SynonymTextContent>{synonyms.join(', ')}</SynonymTextContent>
        </Box>
      )}
    </Stack>
  </Stack>
);

const SectionWrapper = styled(Box)(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  gap: '1.5rem',
}));

const MeaningText = styled(Typography)(({ theme }) => ({
  color: theme.palette.text.secondary,
  fontSize: '1rem',
}));

const DefinitionText = styled(Typography)(({ theme }) => ({
  color: theme.palette.text.primary,
  fontSize: '.9375rem',
}));

const ExamplenText = styled(Typography)(({ theme }) => ({
  color: theme.palette.text.secondary,
  fontSize: '.9375rem',
  marginTop: '.5rem',
}));

const SynonymText = styled(Typography)(({ theme }) => ({
  color: theme.palette.text.secondary,
  fontSize: '1rem',
}));

const SynonymTextContent = styled(Typography)(({ theme }) => ({
  fontWeight: 700,
  fontSize: '1rem',
  color: theme.palette.primary.main,
}));
