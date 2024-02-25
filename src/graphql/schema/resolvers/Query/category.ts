import { prisma } from "../../../../db.js";
import type { QueryResolvers } from "./../../../types.generated";
export const category: NonNullable<QueryResolvers["category"]> = async (
  _parent,
  _arg,
  _ctx,
) => {
  /* Implement Query.category resolver logic here */
  const result = await prisma.category.findUnique({
    where: {
      id: _arg.id,
    },
    include: {
      products: true,
    },
  });
  return result;
};
