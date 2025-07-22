import { CustomSpinner } from '@/components/CustomSpinner';
import React from 'react';

interface LoadingFallbackProps {
  message: string;
}

const LoadingFallback: React.FC<LoadingFallbackProps> = ({ message }) => {
  return (
    <div className="flex justify-center items-center h-[80vh] flex-col">
      <CustomSpinner className="h-10 w-10 mr-2" />
      <p className="mt-2.5 font-mono max-w-[400px] text-center text-lg">
        {message}
      </p>
    </div>
  );
};

export default LoadingFallback;
