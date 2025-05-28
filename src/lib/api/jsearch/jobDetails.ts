import { JobItem } from "@/types/api";
import { jsearchApi } from "../jsearchApi";
import { cache } from "react";


export async function jobDetails(id: string): Promise<JobItem> {
  const resp = await jsearchApi.get("/job-details", {
    params: {
      job_id: decodeURIComponent(id),
    }
  })
  return resp?.data?.data[0] ?? null;
}

export const cashJobDetails = cache(jobDetails)