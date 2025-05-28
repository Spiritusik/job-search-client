import { useState } from 'react';

export function useLoadingState() {
  const [isLoading, setIsLoading] = useState(false);

  return {
    isLoading,
    startLoading: () => setIsLoading(true),
    stopLoading: () => setIsLoading(false),
  };
}