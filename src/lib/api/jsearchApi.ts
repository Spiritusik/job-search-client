import { $jsearch } from './hosts';
import { JobItem, JobSearchQuery } from "@/types/api";

class JsearchApi {
    async jobDetails (id: string): Promise<JobItem> {
      const resp = await $jsearch.get("/job-details", {
        params: {
          job_id: decodeURIComponent(id),
        }
      })
      return resp?.data?.data[0] ?? null;
    }

    async jobSearch(query: JobSearchQuery): Promise<JobItem[]> {
    const resp = await $jsearch.get('/search', {
      params: query
    })
    return resp?.data?.data ?? [];
  }
}

export const jsearchApi = new JsearchApi();