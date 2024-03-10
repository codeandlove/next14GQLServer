import { prisma } from "../../../../db";
import type { QueryResolvers } from "./../../../types.generated";
export const reviews: NonNullable<QueryResolvers["reviews"]> = async (_parent, _arg, _ctx) => {
	/* Implement Query.reviews resolver logic here */

	const total = await prisma.review.count();
	const result = await prisma.review.findMany({
		where: {
			productId: _arg.productId,
		},
		include: {
			product: true,
		},
	});

	return result.map((review) => ({ ...review, product: {} }));
};
