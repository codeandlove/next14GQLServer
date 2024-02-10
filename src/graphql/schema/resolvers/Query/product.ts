import type { QueryResolvers } from "./../../../types.generated";
import { prisma } from "../../../../db.js";
// import { faker } from "@faker-js/faker";

export const product: NonNullable<QueryResolvers["product"]> = async (
  _parent,
  _arg,
  _ctx,
) => {
  /* Implement Query.product resolver logic here */
  const product = await prisma.product.findUnique({
    where: {
      id: _arg.id,
    },
  });
  return product;
};
