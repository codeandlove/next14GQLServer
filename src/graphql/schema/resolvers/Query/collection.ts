import { prisma } from "@/db";
import type { QueryResolvers } from "./../../../types.generated";
export const collection: NonNullable<QueryResolvers["collection"]> = async (
  _parent,
  _arg,
  _ctx,
) => {
  /* Implement Query.collection resolver logic here */

  if (!_arg.id && !_arg.slug) {
    throw new Error("id or slug is required for Query.collection");
  }

  let result;

  if (_arg.id) {
    result = await prisma.collection.findUnique({
      where: {
        id: _arg.id,
      },
      include: {
        products: true,
      },
    });

    return result;
  }

  if (_arg.slug) {
    result = await prisma.collection.findFirstOrThrow({
      where: {
        slug: _arg.slug,
      },
      include: {
        products: true,
      },
    });

    return result;
  }
};
