import { prisma } from "@/db";
import type { QueryResolvers } from "./../../../types.generated";
export const orders: NonNullable<QueryResolvers["orders"]> = async (
  _parent,
  _arg,
  _ctx,
) => {
  /* Implement Query.orders resolver logic here */

  const total = await prisma.order.count();
  const result = await prisma.order.findMany({
    where: {
      email: _arg.email,
    },
    take: _arg.take,
    skip: _arg.skip,
  });

  return {
    data: result,
    meta: { count: result.length, total: total },
  };
};
