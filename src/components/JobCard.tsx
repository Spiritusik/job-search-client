'use client'
import { JobItem } from "@/types/api";
import React from "react";
import Avatar from "./ui/avatars/Avatar";
import H2 from "./ui/typography/H2";
import Button from "./ui/buttons/Button";
import { JobDetailRow } from "./JobDetailRow";
import FavoriteIcon from "./ui/icons/FavoriteIcon";
import { useLikedJobsState } from "@/hooks/useLikedJobsState";

type JobCardProps = {
  data: JobItem;
  variant?: 'full' | 'small';
};

const JobCard: React.FC<JobCardProps> = (props) => {
  const { data, variant='full' } = props;
  const {
    job_id,
    job_title,
    employer_name,
    employer_logo,
    job_employment_type,
    job_location,
    job_posted_at,
    job_min_salary,
    job_max_salary,
    job_salary_period,
    job_description,
  } = data;
  const { isLiked, toggleLike } = useLikedJobsState();

  return (
    <div
      className="border rounded-2xl p-5 shadow-sm bg-white hover:shadow-lg transition dark:bg-gray-900 dark:border-gray-800"
    >
      <div className="flex items-center gap-4 mb-4">
          <div className="flex-shrink-0">
            <Avatar
              src={employer_logo}
              alt={`${employer_name} logo`}
            />
          </div>
        <div className="flex-grow">
          <H2 className="text-lg font-semibold text-gray-900 dark:text-white">
            {job_title}
          </H2>
          <p className="text-sm text-gray-600 dark:text-gray-400">{employer_name}</p>
        </div>
        <div className="flex-shrink-0">
          <FavoriteIcon isFavorited={isLiked(job_id)} onToggle={() => toggleLike(data)}/>
        </div>
      </div>

      <div className="mt-2 flex flex-col gap-2">
        { job_location && <JobDetailRow label="Location" value={job_location}/> }
        { job_employment_type && <JobDetailRow label="Employment" value={job_employment_type}/> }
        { job_posted_at && <JobDetailRow label="Posted" value={`${job_posted_at}`}/> }
        {job_min_salary && job_max_salary && job_salary_period && (
          <JobDetailRow label="Salary" value={`$${job_min_salary} - $${job_max_salary} / ${job_salary_period.toLowerCase()}`}/>
        )}
        { variant === 'full' && (
          <div className="text-sm text-gray-700 dark:text-gray-300">
            <p className="font-bold">Description:</p>
            <p className="whitespace-pre-wrap">{job_description}</p>
          </div>
          
        )}
      </div>

      { variant === 'small' && (
        <div className="mt-4 flex justify-end">
          <Button
            href={`/job-details/${job_id}`}
            variant="primary"
          >
            Details
          </Button>
        </div>
      )}
    </div>
  );
};

export default JobCard;
