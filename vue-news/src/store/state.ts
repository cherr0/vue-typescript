import { NewsItem } from '@/api';
const state = {
    news: [] as NewsItem[],
};

export type RootState = typeof state;
