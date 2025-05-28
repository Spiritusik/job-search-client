'use client';

import { useJobSearch } from '@/hooks/useSearchJob';
import React, { useEffect, useCallback } from 'react';
import Input from './ui/inputs/Input';
import Loader from './ui/loaders/Loader';
import JobList from './JobList';
import { useSearchParams, useRouter, usePathname } from 'next/navigation';
import Button from './ui/buttons/Button';

export default function JobSearch() {
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const query = searchParams.get('search')?.trim();

  const { handleJobSearch, isLoading, data } = useJobSearch();

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

  return (
    <>
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
        <Button type='submit' className="rounded-l-none">Search</Button>
      </form>

      {isLoading ? <Loader /> : <JobList data={data ?? []} />}
    </>
  );
}
