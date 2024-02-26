import { prisma } from "@/db";
import type { QueryResolvers } from "./../../../types.generated";

export const products: NonNullable<QueryResolvers["products"]> = async (
  _parent,
  _arg,
  _ctx,
) => {
  /* Implement Query.products resolver logic here */

  const total = await prisma.product.count();
  const result = await prisma.product.findMany({
    take: _arg.take,
    skip: _arg.skip,
    include: {
      categories: true,
      collections: true,
    },
  });

  return {
    data: result,
    meta: { count: result.length, total: total },
  };
};
