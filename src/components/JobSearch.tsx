'use client';
import { useJobSearch } from '@/hooks/useSearchJob';
import React, { useCallback } from 'react'
import Input from './ui/inputs/Input';

export default function JobSearch() {
  const { handleJobSearch, isLoading, data} = useJobSearch();
  console.log(data)

  const handleSubmit = useCallback((event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if(isLoading) return;
    
  const formData = new FormData(event.currentTarget);
  const search = formData.get("search")?.toString().trim();
  if (!search) return;
  
  handleJobSearch({ query: search })
  }, [ isLoading, handleJobSearch ]);
  return (
    <form onSubmit={handleSubmit}>
      <Input name="search" id="search" type="text" placeholder="Search..."/>
    </form>
  )
}
