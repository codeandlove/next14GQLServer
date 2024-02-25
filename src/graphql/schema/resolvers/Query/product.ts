import { prisma } from "../../../../db.js";
import type { QueryResolvers } from "./../../../types.generated";

export const product: NonNullable<QueryResolvers["product"]> = async (
  _parent,
  _arg,
  _ctx,
) => {
  /* Implement Query.product resolver logic here */
  const result = await prisma.product.findUnique({
    where: {
      id: _arg.id,
    },
  });
  return result;
};
