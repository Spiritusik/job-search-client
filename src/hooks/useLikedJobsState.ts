import { useCallback, useEffect, useState } from "react";
import { JobItem } from "@/types/api";
import {
  getLikedJobs,
  addLikedJob,
  removeLikedJob,
} from "@/utils/storage/liked";

export function useLikedJobsState() {
  const [likedJobs, setLikedJobs] = useState<JobItem[]>([]);

  useEffect(() => {
    const stored = getLikedJobs();
    setLikedJobs(stored);
  }, []);

  const isLiked = useCallback(
    (jobId: string) => likedJobs.some((job) => job.job_id === jobId),
    [likedJobs]
  );

  const toggleLike = useCallback(
    (job: JobItem) => {
      const exists = likedJobs.some((j) => j.job_id === job.job_id);

      if (exists) {
        removeLikedJob(job.job_id);
        setLikedJobs((prev) => prev.filter((j) => j.job_id !== job.job_id));
      } else {
        addLikedJob(job);
        setLikedJobs((prev) => [...prev, job]);
      }
    },
    [likedJobs]
  );

  return {
    likedJobs,
    isLiked,
    toggleLike,
  };
}
