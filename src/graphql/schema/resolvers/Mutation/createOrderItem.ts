import { prisma } from "../../../../db";
import type { MutationResolvers } from "./../../../types.generated";
export const createOrderItem: NonNullable<MutationResolvers["createOrderItem"]> = async (
	_parent,
	_arg,
	_ctx,
) => {
	/* Implement Mutation.createOrderItem resolver logic here */

	let orderItem;

	const order = await prisma.order.findUnique({
		where: {
			id: _arg.orderId,
		},
		include: {
			orderItems: true,
		},
	});

	console.log("asdasdasd1 -------------------- asdas das ");
	console.log(order);
	console.log("asdasdasd1 -------------------- asdas das ");

	if (order) {
		orderItem = order.orderItems.filter(async (orderItem) => {
			return orderItem.productId === _arg.productId;
		});
	}

	console.log("asdasdasd -------------------- asdas das ");
	console.log(orderItem);
	console.log("asdasdasd -------------------- asdas das ");

	const result = await prisma.order.update({
		where: {
			id: _arg.orderId,
		},
		data: {
			totalAmount: 10,
			orderItems: {
				upsert: {
					where: {
						productId_orderId: {
							productId: _arg.productId,
							orderId: _arg.orderId,
						},
					},
					update: {
						quantity: orderItem && orderItem[0] ? orderItem[0].quantity + _arg.quantity : _arg.quantity,
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
