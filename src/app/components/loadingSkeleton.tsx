import { Box, Divider, Skeleton, Stack, styled } from '@mui/material';

export const LoadingSkeleton = () => (
  <Stack gap="2.5rem">
    <FlexDisplay justifyContent="space-between">
      <Stack>
        <Skeleton width="200px" />
        <Skeleton width="115px" />
      </Stack>
      <Skeleton variant="circular" width={'4rem'} height={'4rem'} />
    </FlexDisplay>
    <Divider />
    <Stack>
      <Skeleton width="115px" sx={{ marginBottom: '1rem' }} />
      <Skeleton width="80%" />
      <Skeleton />
      <Skeleton />
    </Stack>
    <Divider />
    <Stack>
      <Skeleton width="115px" sx={{ marginBottom: '1rem' }} />
      <Skeleton width="80%" />
      <Skeleton />
      <Skeleton />
      <Skeleton width="90%" />
      <Skeleton />
      <Skeleton width="40%" />
    </Stack>
  </Stack>
);

const FlexDisplay = styled(Box)(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
}));
