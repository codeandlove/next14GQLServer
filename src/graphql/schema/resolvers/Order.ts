import { prisma } from "../../../db";
import type { OrderResolvers } from "./../../types.generated";
export const Order: OrderResolvers = {
	/* Implement Order resolver logic here */

	async orderItems(_parent, _arg, _ctx) {
		const result = await prisma.order.findUnique({
			where: {
				id: _parent.id,
			},
			include: {
				orderItems: {
					include: {
						product: true,
						order: true,
					},
				},
			},
		});

		if (!result) {
			throw new Error("Order not found");
		}

		return (
			result.orderItems.map((orderItem) => ({
				...orderItem,
				product: {
					...orderItem.product,
					categories: [],
					collections: [],
				},
			})) ?? []
		);
	},
};
