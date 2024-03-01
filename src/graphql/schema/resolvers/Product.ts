import { prisma } from "@/db";
import type { ProductResolvers } from "./../../types.generated";
export const Product: ProductResolvers = {
	/* Implement Product resolver logic here */

	async categories(_parent, _arg, _ctx) {
		const result = await prisma.product.findUnique({
			where: {
				id: _parent.id,
			},
			include: {
				categories: true,
			},
		});

		if (!result) {
			throw new Error("Categories not found");
		}

		return result.categories.map((category) => ({ ...category, products: [] })) ?? [];
	},
	async collections(_parent, _arg, _ctx) {
		const result = await prisma.product.findUnique({
			where: {
				id: _parent.id,
			},
			include: {
				collections: true,
			},
		});

		if (!result) {
			throw new Error("Collection not found");
		}

		return result.collections.map((collection) => ({ ...collection, products: [] })) ?? [];
	},
};
