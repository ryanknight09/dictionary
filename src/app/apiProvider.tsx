import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import axios from 'axios';
import type { FC } from 'react';

export type License = {
  name: string;
  url: string;
};

export type Definition = {
  definition: string;
  example?: string;
};

export type Meaning = {
  partOfSpeech: string;
  definitions: Definition[];
  synonyms?: string[];
};

export type Phonetics = {
  audio: string;
  license: License;
  sourceUrl: string;
  text: string;
};

export type SearchResponse = [
  {
    license: License;
    meanings: Meaning[];
    phonetic: string;
    phonetics: Phonetics[];
    sourceUrls: string[];
    word: string;
  }
];

interface ApiProviderProps {
  children: React.ReactNode;
}

const BASE_URL = 'https://api.dictionaryapi.dev/api/v2/entries/en';

export const ApiProvider: FC<ApiProviderProps> = ({ children }) => {
  const queryClient = new QueryClient({
    defaultOptions: {
      queries: {
        queryFn: async ({ queryKey: [url] }) => {
          if (typeof url === 'string') {
            const response = await axios.get(`${BASE_URL}/${url}`, {
              headers: {
                'Content-Type': 'application/json',
              },
            });
            return response.data;
          }
          throw new Error('Invalid QueryKey');
        },
      },
    },
  });

  return (
    <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
  );
};
