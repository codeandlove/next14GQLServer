import { prisma } from "@/db";
import type { QueryResolvers } from "./../../../types.generated";
export const order: NonNullable<QueryResolvers["order"]> = async (
  _parent,
  _arg,
  _ctx,
) => {
  /* Implement Query.order resolver logic here */
  const result = await prisma.product.findUnique({
    where: {
      id: _arg.id,
    },
    include: {
      categories: {
        include: {
          products: true,
        },
      },
      collections: {
        include: {
          products: true,
        },
      },
    },
  });

  return result;
};
