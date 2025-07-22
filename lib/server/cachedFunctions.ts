import { getResume } from '@/lib/server/redisActions';
import { clerkClient } from '@clerk/nextjs/server';
import { unstable_cache } from 'next/cache';

export const getCachedUser = async (userId: string) => {
  return unstable_cache(
    async () => {
      return await (await clerkClient()).users.getUser(userId);
    },
    [userId],
    {
      tags: ['users'],
      revalidate: 86400, // 1 day in seconds
    },
  )();
};

export const getCachedResume = async (userId: string) => {
  return unstable_cache(
    async () => {
      return await getResume(userId);
    },
    [userId],
    {
      tags: ['resumes'],
      revalidate: 86400, // 1 day in seconds
    },
  );
};
