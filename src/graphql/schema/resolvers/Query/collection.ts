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
			include: { products: true },
		});
	}

	if (_arg.slug) {
		result = await prisma.collection.findUnique({
			where: {
				slug: _arg.slug,
			},
			include: { products: true },
		});
	}

	if (!result) {
		throw new Error("Collection not found");
	}

	return { ...result, products: [] };
};
