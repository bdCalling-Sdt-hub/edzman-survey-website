import { url } from '@/lib/utils';
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

const baseApis = createApi({
  reducerPath: 'api',
  baseQuery: fetchBaseQuery({
    baseUrl: url,
    credentials: 'include',
    prepareHeaders: (headers) => {
      if (typeof window !== 'undefined') {
        const token = localStorage.getItem('accessToken');
        if (token) {
          headers.set('Authorization', `${token}`);
        }
      }
      return headers;
    },
  }),
  tagTypes: [
    'profile',
    'user',
    'overView',
    'blog',
    'story',
    'why',
    'personal-why',
  ],
  endpoints: () => ({}),
});

export default baseApis;
