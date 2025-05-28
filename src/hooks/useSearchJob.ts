import useSWRMutation from "swr/mutation";
import { jobSearch } from "@/lib/api/jsearch/jobSearch";
import { JobSearchQuery } from "@/types/api";

export function useJobSearch() {
  const {
    trigger: handleJobSearch,
    isMutating: isLoading,
    error,
    data,
  } = useSWRMutation("job-search", async (_key, { arg }: { arg: JobSearchQuery }) => {
    return await jobSearch(arg);
  });

  return {
    handleJobSearch,
    isLoading,
    error,
    data,
  };
}
