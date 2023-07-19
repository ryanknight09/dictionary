import {
  Box,
  Divider,
  List,
  ListItem,
  Stack,
  Typography,
  styled,
} from '@mui/material';

type definition = {
  definition: string;
  example?: string;
};

type MeaningProps = {
  partOfSpeach: string;
  definitions: definition[];
  synonyms?: string[];
};

export const Meaning = ({
  partOfSpeach,
  definitions,
  synonyms = [],
}: MeaningProps) => (
  <Stack gap="1.75rem">
    <SectionWrapper>
      <Typography variant="body2" sx={{ fontWeight: 700 }}>
        {partOfSpeach}
      </Typography>
      <Divider sx={{ flex: 1 }} />
    </SectionWrapper>
    <Stack>
      <MeaningText variant="body2">Meaning</MeaningText>
      <List disablePadding sx={{ listStyleType: 'disc', pl: 2.25 }}>
        {definitions.map((item, index) => (
          <ListItem
            key={`${partOfSpeach}-${index}`}
            sx={{
              display: 'list-item',
              color: 'primary.main',
            }}
          >
            <DefinitionText variant="body2">{item.definition}</DefinitionText>
            {item.example && (
              <ExamplenText variant="body2">{item.example}</ExamplenText>
            )}
          </ListItem>
        ))}
      </List>
      {synonyms?.length > 0 && (
        <SynonymText variant="body2">
          Synonyms<span>{synonyms.join(', ')}</span>
        </SynonymText>
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
  mt: '.5rem',
}));

const SynonymText = styled(Typography)(({ theme }) => ({
  color: theme.palette.text.secondary,
  fontSize: '1rem',
  mt: '1rem',
  span: {
    fontWeight: 700,
    ml: '2.5rem',
    color: theme.palette.primary.main,
  },
}));
