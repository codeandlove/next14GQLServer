import { prisma } from "../../../../db.js";
import type { QueryResolvers } from "./../../../types.generated";
export const categories: NonNullable<QueryResolvers["categories"]> = async (
  _parent,
  _arg,
  _ctx,
) => {
  /* Implement Query.categories resolver logic here */
  let result;

  if (_arg.where) {
    result = await prisma.category.findMany({
      where: _arg.where,
      include: {
        products: {
          include: {
            category: true,
          },
        },
      },
    });
  } else {
    result = await prisma.category.findMany({
      include: {
        products: {
          include: {
            category: true,
          },
        },
      },
    });
  }

  return result;
};
