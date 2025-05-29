import useSWRMutation from "swr/mutation";
import { JobSearchQuery } from "@/types/api";
import { jsearchApi } from "@/lib/api/jsearchApi";

export function useJobSearch() {
  const {
    trigger: handleJobSearch,
    isMutating: isLoading,
    error,
    data,
  } = useSWRMutation("job-search", async (_key, { arg }: { arg: JobSearchQuery }) => {
    return await jsearchApi.jobSearch(arg);
  });

  return {
    handleJobSearch,
    isLoading,
    error,
    data,
  };
}
