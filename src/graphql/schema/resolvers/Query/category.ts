import { prisma } from "@/db";
import type { QueryResolvers } from "./../../../types.generated";
export const category: NonNullable<QueryResolvers["category"]> = async (_parent, _arg, _ctx) => {
	/* Implement Query.category resolver logic here */

	if (!_arg.id && !_arg.slug) {
		throw new Error("id or slug is required for Query.category");
	}

	let result;

	if (_arg.id) {
		result = await prisma.category.findUnique({
			where: {
				id: _arg.id,
			},
			include: { products: true },
		});
	}

	if (_arg.slug) {
		result = await prisma.category.findUnique({
			where: {
				slug: _arg.slug,
			},
			include: { products: true },
		});

		result = result;
	}

	if (!result) {
		throw new Error("Category not found");
	}

	return { ...result, products: [] };
};
