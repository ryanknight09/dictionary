import SearchIcon from '@mui/icons-material/Search';
import {
  Divider,
  InputAdornment,
  OutlinedInput,
  Stack,
  styled,
} from '@mui/material';
import { useQuery } from '@tanstack/react-query';
import { SearchResponse } from './apiProvider';
import { ContentHeading } from './components/contentHeading';
import { LoadingSkeleton } from './components/loadingSkeleton';
import { Meaning } from './components/meaning';
import { SourceContent } from './components/sourceContent';
import { getFirstNonEmptyAudio } from './utils';

export const Content = ({ searchTerm }: { searchTerm: string }) => {
  const { isFetching, data } = useQuery<SearchResponse, Error>({
    queryKey: [searchTerm],
    keepPreviousData: true,
    onError: (error) => console.log(error),
  });

  if (isFetching) return <LoadingSkeleton />;
  if (!data) return 'No Data!';

  const results = data[0];
  const audioUrl = getFirstNonEmptyAudio(results.phonetics);
  const audio = new Audio(audioUrl);

  return (
    <Stack gap="1.75rem">
      <Stack gap="1.75rem">
        <ContentHeading {...results} audioUrl={audioUrl} audio={audio} />
        {results.meanings.map((meaning) => (
          <Meaning key={meaning.partOfSpeech} {...meaning} />
        ))}
        <Divider />
        <SourceContent sourceUrl={results.sourceUrls[0]} />
      </Stack>
    </Stack>
  );
};

const Search = styled(OutlinedInput)(({ theme }) => ({
  borderRadius: '1rem',
  height: '3rem',
  fontSize: '1rem',
  fontWeight: 700,
  '& .MuiOutlinedInput-notchedOutline': {
    border: 'none',
  },
  '&.Mui-focused': {
    border: `1px solid ${theme.palette.primary.main}`,
  },
}));

Search.defaultProps = {
  fullWidth: true,
  type: 'search',
  placeholder: 'Search...',
  startAdornment: (
    <InputAdornment position="start">
      <SearchIcon color="secondary" />
    </InputAdornment>
  ),
};
