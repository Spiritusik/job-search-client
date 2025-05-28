import { JobItem } from '@/types/api';
import { getFromLocalStorage, setToLocalStorage } from '../localStorage';

const LIKED_JOBS_KEY = 'liked-jobs';

export function getLikedJobs(): JobItem[] {
  return getFromLocalStorage<JobItem[]>(LIKED_JOBS_KEY) ?? [];
}

export function addLikedJob(job: JobItem): void {
  const current = getLikedJobs();
  const exists = current.some(j => j.job_id === job.job_id);
  if (!exists) {
    setToLocalStorage(LIKED_JOBS_KEY, [...current, job]);
  }
}

export function removeLikedJob(jobId: string): void {
  const updated = getLikedJobs().filter(j => j.job_id !== jobId);
  setToLocalStorage(LIKED_JOBS_KEY, updated);
}