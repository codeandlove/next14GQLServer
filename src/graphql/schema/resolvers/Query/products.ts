import { prisma } from "../../../../db";
import type { QueryResolvers } from "./../../../types.generated";

export const products: NonNullable<QueryResolvers["products"]> = async (_parent, _arg, _ctx) => {
	/* Implement Query.products resolver logic here */

	let result;
	const total = await prisma.product.count();

	if (_arg.search) {
		result = await prisma.product.findMany({
			skip: _arg.skip,
			take: _arg.take,
			where: {
				name: {
					contains: _arg.search,
					mode: "insensitive",
				},
			},
			include: {
				categories: true,
				collections: true,
			},
		});
	} else if (_arg.ids) {
		result = await prisma.product.findMany({
			skip: _arg.skip,
			take: _arg.take,
			where: {
				id: {
					in: _arg.ids,
				},
			},
			include: {
				categories: true,
				collections: true,
			},
		});
	} else {
		result = await prisma.product.findMany({
			skip: _arg.skip,
			take: _arg.take,
			include: {
				categories: true,
				collections: true,
			},
		});
	}

	return {
		data: result.map((product) => ({ ...product, categories: [], collections: [] })),
		meta: { count: result.length, total: total },
	};
};
