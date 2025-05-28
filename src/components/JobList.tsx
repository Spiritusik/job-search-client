import { JobItem } from '@/types/api'
import React from 'react'
import JobCard from './JobCard';

export type JobListProps = {
  data: JobItem[];
}

export default function JobList( props: JobListProps ) {
  const { data } = props;

  return (
    <div className='mt-5 flex flex-col gap-4'>
      {
        data.map(item => <JobCard key={item.job_id} variant="small" data={item}/>)
      }
    </div>
  )
}
