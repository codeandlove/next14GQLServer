import { prisma } from "../../../db";
import type { CollectionResolvers } from "./../../types.generated";
export const Collection: CollectionResolvers = {
	/* Implement Collection resolver logic here */

	async products(_parent, _arg, _ctx) {
		const result = await prisma.collection.findUnique({
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
			throw new Error("Collection not found");
		}

		return (
			result.products.map((product) => ({ ...product, categories: [], collections: [] })) ?? []
		);
	},
};
