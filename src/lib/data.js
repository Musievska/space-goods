import {prisma} from './prismaClient';

// import { unstable_noStore as noStore } from 'next/cache';
// import { unstable_getCache as getCache } from 'next/cache';
// import { unstable_setCache as setCache } from 'next/cache';
// import { unstable_cache as cache } from 'next/cache';

export const getProducts = async ({ page, limit }) => {
  const skip = (page - 1) * limit;

  return await prisma.product.findMany({
      skip,
      take: limit
  });
};

export const getTotalProductCount = async () => {
  return await prisma.product.count();
};