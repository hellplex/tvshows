export interface Show {
  id: number;
  image: { medium: string, original: string };
  name: string;
  genres: string[];
  language: string;
  premiered: Date;
  rating: {average: number};
  summary: string;
  isLoading?: boolean;
}
