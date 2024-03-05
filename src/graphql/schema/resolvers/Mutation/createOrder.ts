import { prisma } from "../../../../db";
import type { MutationResolvers } from "./../../../types.generated";
export const createOrder: NonNullable<MutationResolvers["createOrder"]> = async (
	_parent,
	_arg,
	_ctx,
) => {
	/* Implement Mutation.createOrder resolver logic here */

	const result = await prisma.order.create({
		data: {
			totalAmount: 0,
			status: "CREATED",
		},
	});

	return { ...result, orderItems: [] };
};
