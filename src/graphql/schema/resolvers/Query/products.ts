import { prisma } from "../../../../db.js";
import type { QueryResolvers } from "./../../../types.generated";

export const products: NonNullable<QueryResolvers["products"]> = async (
  _parent,
  _arg,
  _ctx,
) => {
  const total = await prisma.product.count();
  /* Implement Query.products resolver logic here */
  const result = await prisma.product.findMany({
    take: _arg.take,
    skip: _arg.skip,
    orderBy: {
      createdAt: "desc",
    },
    include: {
      category: true,
    },
  });
  return result;
};
