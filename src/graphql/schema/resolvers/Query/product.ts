import { prisma } from "@/db";
import type { QueryResolvers } from "./../../../types.generated";
export const product: NonNullable<QueryResolvers["product"]> = async (_parent, _arg, _ctx) => {
	/* Implement Query.product resolver logic here */

	if (!_arg.id && !_arg.slug) {
		throw new Error("id or slug is required for Query.product");
	}

	let result;

	if (_arg.id) {
		result = await prisma.product.findUnique({
			where: {
				id: _arg.id,
			},
			include: { categories: true, collections: true },
		});
	}

	if (_arg.slug) {
		result = await prisma.product.findUnique({
			where: {
				slug: _arg.slug,
			},
			include: { categories: true, collections: true },
		});
	}
  
	if (!result) {
		throw new Error("Product not found");
	}

	return { ...result, categories: [], collections: [] };
};
