import { prisma } from "../../../..//db";
import type { QueryResolvers } from "./../../../types.generated";
export const categories: NonNullable<QueryResolvers["categories"]> = async (
	_parent,
	_arg,
	_ctx,
) => {
	/* Implement Query.categories resolver logic here */

	const total = await prisma.category.count();
	const result = await prisma.category.findMany({
		skip: _arg.skip,
		take: _arg.take,
		include: {
			products: true,
		},
	});

	return {
		data: result.map((category) => ({ ...category, products: [] })),
		meta: { count: result.length, total: total },
	};
};
