import { prisma } from "../../../../db";
import type { MutationResolvers } from "./../../../types.generated";
export const removeOrderItem: NonNullable<MutationResolvers["removeOrderItem"]> = async (
	_parent,
	_arg,
	_ctx,
) => {
	/* Implement Mutation.removeOrderItem resolver logic here */

	const result = await prisma.order.update({
		where: {
			id: _arg.orderId,
		},
		data: {
			totalAmount: 10,
			orderItems: {
				deleteMany: {
					productId: _arg.productId,
					orderId: _arg.orderId,
				},
			},
		},
		include: {
			orderItems: {
				include: {
					order: true,
					product: true,
				},
			},
		},
	});

	return { ...result, orderItems: [] };
};
