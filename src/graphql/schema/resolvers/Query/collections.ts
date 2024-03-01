import { prisma } from "../../../../db";
import type { QueryResolvers } from "./../../../types.generated";
export const collections: NonNullable<QueryResolvers["collections"]> = async (
	_parent,
	_arg,
	_ctx,
) => {
	/* Implement Query.collections resolver logic here */

	const total = await prisma.collection.count();
	const result = await prisma.collection.findMany({
		skip: _arg.skip,
		take: _arg.take,
		include: {
			products: true,
		},
	});

	return {
		data: result.map((collection) => ({ ...collection, products: [] })),
		meta: { count: result.length, total: total },
	};
};
