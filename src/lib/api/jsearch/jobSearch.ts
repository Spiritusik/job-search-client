import { JobSearchItem, JobSearchQuery } from "@/types/api";
import { jsearchApi } from "../jsearchApi";


export async function jobSearch(query: JobSearchQuery): Promise<JobSearchItem> {
  const resp = await jsearchApi.get('/search', {
    params: query
  })
  return resp?.data?.data ?? [];
}