import { prisma } from "../../../../db";
import type { MutationResolvers } from "./../../../types.generated";
export const updateOrderItem: NonNullable<MutationResolvers["updateOrderItem"]> = async (
	_parent,
	_arg,
	_ctx,
) => {
	/* Implement Mutation.updateOrderItem resolver logic here */

	const result = await prisma.order.update({
		where: {
			id: _arg.orderId,
		},
		data: {
			totalAmount: 10,
			orderItems: {
				update: {
					where: {
						productId_orderId: {
							orderId: _arg.orderId,
							productId: _arg.productId,
						},
					},
					data: {
						quantity: _arg.quantity,
					},
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
