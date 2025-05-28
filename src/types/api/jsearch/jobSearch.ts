import { JobItem } from "."

export type JobSearchQuery = {
  query: string;
}

export interface JobSearchResponse {
  status: string;
  request_id: string;
  parameters: {
    query: string;
    page: number;
    num_pages: number;
    country: string;
    language: string;
  };
  data: JobItem[];
}
