import { prisma } from "../../../../db";
import type { QueryResolvers } from "./../../../types.generated";
export const order: NonNullable<QueryResolvers["order"]> = async (_parent, _arg, _ctx) => {
	/* Implement Query.order resolver logic here */

	const result = await prisma.order.findUnique({
		where: {
			id: _arg.id,
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
		throw new Error("Order not found");
	}

	return { ...result, orderItems: [] };
};
