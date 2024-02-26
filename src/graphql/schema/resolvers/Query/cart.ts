import { prisma } from "@/db";
import type { QueryResolvers } from "./../../../types.generated";
export const cart: NonNullable<QueryResolvers["cart"]> = async (
  _parent,
  _arg,
  _ctx,
) => {
  /* Implement Query.cart resolver logic here */
  const result = await prisma.cart.findUnique({
    where: {
      id: _arg.id,
    },
    include: {
      include: {
        products: true,
      },
    },
  });

  return result;
};
