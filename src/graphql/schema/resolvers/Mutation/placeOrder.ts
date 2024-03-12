import { prisma } from "../../../../db";
import type { MutationResolvers } from "./../../../types.generated";
export const placeOrder: NonNullable<MutationResolvers["placeOrder"]> = async (
	_parent,
	_arg,
	_ctx,
) => {
	/* Implement Mutation.placeOrder resolver logic here */

	const result = await prisma.order.update({
		where: {
			id: _arg.orderId,
		},
		data: {
			status: "FULFILLED",
			email: _arg.email,
			userId: _arg.userId,
			sessionId: _arg.sessionId,
			totalAmount: _arg.totalAmount,
		},
	});

	return { ...result, orderItems: [] };
};
