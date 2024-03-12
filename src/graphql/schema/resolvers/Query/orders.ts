import { prisma } from "../../../../db";
import type { QueryResolvers } from "./../../../types.generated";
export const orders: NonNullable<QueryResolvers["orders"]> = async (_parent, _arg, _ctx) => {
	/* Implement Query.orders resolver logic here */

	const result = await prisma.order.findMany({
		where: {
			userId: _arg.userId,
		},
		include: {
			orderItems: {
				include: {
					product: true,
				},
			},
		},
	});

	if (!result) {
		throw new Error("Orders not found");
	}

	return result.map((order) => ({ ...order, orderItems: [] }));
};
