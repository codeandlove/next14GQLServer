import { prisma } from "../../../../db";
import type { MutationResolvers } from "./../../../types.generated";
export const createOrderItem: NonNullable<MutationResolvers["createOrderItem"]> = async (
	_parent,
	_arg,
	_ctx,
) => {
	/* Implement Mutation.createOrderItem resolver logic here */

	const result = await prisma.order.update({
		where: {
			id: _arg.orderId,
		},
		data: {
			totalAmount: 10,
			orderItems: {
				upsert: {
					where: {
						productId: _arg.productId,
					},
					update: {
						quantity: _arg.quantity,
					},
					create: {
						quantity: _arg.quantity,
						product: {
							connect: {
								id: _arg.productId,
							},
						},
					},
				},
				// create: {
				// 	quantity: _arg.quantity,
				// 	product: {
				// 		connect: {
				// 			id: _arg.productId,
				// 		},
				// 	},
				// },
				// connectOrCreate: {
				// 	where: {
				// 		id: _arg.orderId,
				// 	},
				// 	create: {
				// 		quantity: _arg.quantity + _arg.quantity * Math.floor(Math.random() * 10) + 800,
				// 		product: {
				// 			connect: {
				// 				id: _arg.productId,
				// 			},
				// 		},
				// 	},
				// },
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
