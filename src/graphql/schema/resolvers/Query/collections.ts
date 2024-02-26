import { prisma } from "@/db";
import type { QueryResolvers } from "./../../../types.generated";
export const collections: NonNullable<QueryResolvers["collections"]> = async (
  _parent,
  _arg,
  _ctx,
) => {
  /* Implement Query.collections resolver logic here */
  const total = await prisma.collection.count();
  const result = await prisma.collection.findMany({
    include: {
      products: {
        take: _arg.take,
        skip: _arg.skip,
      },
    },
  });

  return {
    data: result,
    meta: { count: result.length, total: total },
  };
};
