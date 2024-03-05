import { prisma } from "../../../db";
import type { OrderItemResolvers } from "./../../types.generated";
export const OrderItem: OrderItemResolvers = {
	/* Implement OrderItem resolver logic here */

	async product(_parent, _arg, _ctx) {
		const result = await prisma.orderItem.findUnique({
			where: {
				id: _parent.id,
			},
			include: {
				order: {
					include: {
						orderItems: {
							include: {
								product: true,
							},
						},
					},
				},
				product: true,
			},
		});

		if (!result) {
			throw new Error("Product not found");
		}

		return { ...result.product, categories: [], collections: [] };
	},
};
