// LoadingSkeleton.tsx
import React from 'react';

const LoadingSkeleton: React.FC = () => {
  return (
    <div className="flex flex-col gap-4">
      {/* Header skeleton */}
      <div className="animate-pulse flex flex-col gap-2">
        <div className="bg-gray-300 h-6 w-64 rounded-md"></div>
        <div className="bg-gray-300 h-4 w-48 rounded-md"></div>
      </div>

      {/* Register import skeleton */}
      <div className="flex items-center justify-center flex-col gap-4">
        <div className="animate-pulse bg-gray-300 h-40 w-2/5 rounded-md"></div>
        <div className="animate-pulse bg-gray-300 h-6 w-48 rounded-md"></div>
        <div className="animate-pulse bg-gray-300 h-4 w-64 rounded-md"></div>
      </div>

      {/* Spot visualization skeleton */}
      <div className="animate-pulse flex flex-col gap-4">
        <div className="bg-gray-300 h-6 w-64 rounded-md"></div>
        <div className="bg-gray-300 h-40 w-full rounded-md"></div>
      </div>

      {/* Charts skeleton */}
      <div className="flex flex-col gap-4">
        <div className="animate-pulse flex flex-col gap-2">
          <div className="bg-gray-300 h-6 w-64 rounded-md"></div>
          <div className="bg-gray-300 h-4 w-48 rounded-md"></div>
        </div>
        <div className="animate-pulse flex flex-col gap-2">
          <div className="bg-gray-300 h-6 w-64 rounded-md"></div>
          <div className="bg-gray-300 h-4 w-48 rounded-md"></div>
        </div>
      </div>
    </div>
  );
};

export default LoadingSkeleton;
