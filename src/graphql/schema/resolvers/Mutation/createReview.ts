import { prisma } from "../../../../db";
import type { MutationResolvers } from "./../../../types.generated";
export const createReview: NonNullable<MutationResolvers["createReview"]> = async (
	_parent,
	_arg,
	_ctx,
) => {
	/* Implement Mutation.createReview resolver logic here */

	const result = await prisma.review.create({
		data: {
			productId: _arg.productId,
			headline: _arg.headline,
			content: _arg.content,
			rating: _arg.rating,
			name: _arg.name,
			email: _arg.email,
		},
	});

	return result;
};
