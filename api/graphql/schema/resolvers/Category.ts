import { prisma } from "../../../db";
import type { CategoryResolvers } from "../../types.generated";
export const Category: CategoryResolvers = {
	/* Implement Category resolver logic here */

	async products(_parent, _arg, _ctx) {
		const result = await prisma.category.findUnique({
			where: {
				id: _parent.id,
			},
			include: {
				products: {
					skip: _arg.skip,
					take: _arg.take,
				},
			},
		});

		if (!result) {
			throw new Error("Category not found");
		}

		return (
			result.products.map((product) => ({ ...product, categories: [], collections: [] })) ?? []
		);
	},
};
