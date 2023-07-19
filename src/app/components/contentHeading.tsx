import styled from '@emotion/styled';
import { Box, IconButton, Stack, Typography } from '@mui/material';
import { ReactComponent as PlayIcon } from '../../assets/images/icon-play.svg';

type ContentHeadingProps = {
  word: string;
  phonetic: string;
  audioUrl?: string;
  audio: HTMLAudioElement;
};

export const ContentHeading = ({
  word,
  phonetic,
  audio,
  audioUrl,
}: ContentHeadingProps) => (
  <FlexDisplay sx={{ justifyContent: 'space-between' }}>
    <Stack gap=".5rem">
      <Typography variant="h1" sx={{ fontSize: '2rem' }}>
        {word}
      </Typography>
      <Typography color="primary" variant="body2">
        {phonetic}
      </Typography>
    </Stack>
    <IconButton
      disabled={!audioUrl}
      color="secondary"
      sx={{ padding: 0 }}
      onClick={() => audio.play()}
    >
      <Play style={{ opacity: !audioUrl ? '.25' : 'unset' }} />
    </IconButton>
  </FlexDisplay>
);

const FlexDisplay = styled(Box)(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
}));

const Play = styled(PlayIcon)(({ theme }) => ({
  width: '3rem',
  height: '3rem',
}));
