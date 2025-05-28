'use client'
import React from 'react'
import JobList from './JobList'
import { useLikedJobsState } from '@/hooks/useLikedJobsState'
import H2 from './ui/typography/H2';
import Button from './ui/buttons/Button';
import { useRouter } from 'next/navigation';

export default function LikedJobs() {
  const { likedJobs } = useLikedJobsState();
  const router = useRouter();

  return (
    <>
      {
        [].length
        ? <JobList data={likedJobs}/>
        : <div className='flex gap-5'>
          <H2>You haven&apos;t liked any jobs yet.</H2>
          <Button variant="secondary" onClick={() => router.back()} className="mb-4">
            Go Back
          </Button>
        </div>
      }
    </>
  )
}
