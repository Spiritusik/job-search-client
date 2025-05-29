'use client';

import { useJobSearch } from '@/hooks/useSearchJob';
import React, { useEffect, useCallback } from 'react';
import Input from './ui/inputs/Input';
import Loader from './ui/loaders/Loader';
import JobList from './JobList';
import { useSearchParams, useRouter, usePathname } from 'next/navigation';
import Button from './ui/buttons/Button/Button';
import { useProfile } from '@/context/profile';

export default function JobSearch() {
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const query = searchParams.get('search')?.trim();
  const { handleJobSearch, isLoading, data } = useJobSearch();
  const { profile } = useProfile();
  const isShowSearch = !profile || (profile && !data?.length);

  useEffect(() => {
    if (!query) return;
    handleJobSearch({ query });
  }, [query, handleJobSearch]);

  const handleSubmit = useCallback(
    (event: React.FormEvent<HTMLFormElement>) => {
      event.preventDefault();
      const formData = new FormData(event.currentTarget);
      const search = formData.get('search')?.toString().trim();
      if (!search) return;

      const newParams = new URLSearchParams(searchParams.toString());
      newParams.set('search', search);
      router.push(`${pathname}?${newParams.toString()}`);
    },
    [router, pathname, searchParams]
  );

  useEffect(() => {
    if(!profile) return;
    let query = `${profile.name} ${profile.jobTitle}`
    if(profile?.about) query += ` ${profile?.about}`;
    handleJobSearch({ query })
  }, [profile, handleJobSearch])

  return (
    <>
      {
        isShowSearch &&
        <form className='flex' onSubmit={handleSubmit}>
          <Input
            name="search"
            containerClassName="flex-grow"
            className="rounded-r-none"
            id="search"
            type="text"
            placeholder="Search..."
            defaultValue={query ?? ''}
          />
          <Button type='submit' disabled={isLoading} className="rounded-l-none">Search</Button>
        </form>
      }

      {isLoading ? <Loader /> : <JobList data={data ?? []} />}
    </>
  );
}
