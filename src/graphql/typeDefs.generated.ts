import type { DocumentNode } from "graphql";
export const typeDefs = {
	kind: "Document",
	definitions: [
		{
			kind: "ObjectTypeExtension",
			name: { kind: "Name", value: "Query", loc: { start: 12, end: 17 } },
			interfaces: [],
			directives: [],
			fields: [
				{
					kind: "FieldDefinition",
					name: { kind: "Name", value: "category", loc: { start: 22, end: 30 } },
					arguments: [
						{
							kind: "InputValueDefinition",
							name: { kind: "Name", value: "id", loc: { start: 31, end: 33 } },
							type: {
								kind: "NamedType",
								name: { kind: "Name", value: "ID", loc: { start: 35, end: 37 } },
								loc: { start: 35, end: 37 },
							},
							directives: [],
							loc: { start: 31, end: 37 },
						},
						{
							kind: "InputValueDefinition",
							name: { kind: "Name", value: "slug", loc: { start: 39, end: 43 } },
							type: {
								kind: "NamedType",
								name: { kind: "Name", value: "String", loc: { start: 45, end: 51 } },
								loc: { start: 45, end: 51 },
							},
							directives: [],
							loc: { start: 39, end: 51 },
						},
					],
					type: {
						kind: "NonNullType",
						type: {
							kind: "NamedType",
							name: { kind: "Name", value: "Category", loc: { start: 54, end: 62 } },
							loc: { start: 54, end: 62 },
						},
						loc: { start: 54, end: 63 },
					},
					directives: [],
					loc: { start: 22, end: 63 },
				},
				{
					kind: "FieldDefinition",
					name: { kind: "Name", value: "categories", loc: { start: 66, end: 76 } },
					arguments: [
						{
							kind: "InputValueDefinition",
							name: { kind: "Name", value: "take", loc: { start: 77, end: 81 } },
							type: {
								kind: "NonNullType",
								type: {
									kind: "NamedType",
									name: { kind: "Name", value: "Int", loc: { start: 83, end: 86 } },
									loc: { start: 83, end: 86 },
								},
								loc: { start: 83, end: 87 },
							},
							directives: [],
							loc: { start: 77, end: 87 },
						},
						{
							kind: "InputValueDefinition",
							name: { kind: "Name", value: "skip", loc: { start: 89, end: 93 } },
							type: {
								kind: "NonNullType",
								type: {
									kind: "NamedType",
									name: { kind: "Name", value: "Int", loc: { start: 95, end: 98 } },
									loc: { start: 95, end: 98 },
								},
								loc: { start: 95, end: 99 },
							},
							directives: [],
							loc: { start: 89, end: 99 },
						},
					],
					type: {
						kind: "NonNullType",
						type: {
							kind: "NamedType",
							name: { kind: "Name", value: "CategoryList", loc: { start: 102, end: 114 } },
							loc: { start: 102, end: 114 },
						},
						loc: { start: 102, end: 115 },
					},
					directives: [],
					loc: { start: 66, end: 115 },
				},
				{
					kind: "FieldDefinition",
					name: { kind: "Name", value: "collection", loc: { start: 118, end: 128 } },
					arguments: [
						{
							kind: "InputValueDefinition",
							name: { kind: "Name", value: "id", loc: { start: 129, end: 131 } },
							type: {
								kind: "NamedType",
								name: { kind: "Name", value: "ID", loc: { start: 133, end: 135 } },
								loc: { start: 133, end: 135 },
							},
							directives: [],
							loc: { start: 129, end: 135 },
						},
						{
							kind: "InputValueDefinition",
							name: { kind: "Name", value: "slug", loc: { start: 137, end: 141 } },
							type: {
								kind: "NamedType",
								name: { kind: "Name", value: "String", loc: { start: 143, end: 149 } },
								loc: { start: 143, end: 149 },
							},
							directives: [],
							loc: { start: 137, end: 149 },
						},
					],
					type: {
						kind: "NonNullType",
						type: {
							kind: "NamedType",
							name: { kind: "Name", value: "Collection", loc: { start: 152, end: 162 } },
							loc: { start: 152, end: 162 },
						},
						loc: { start: 152, end: 163 },
					},
					directives: [],
					loc: { start: 118, end: 163 },
				},
				{
					kind: "FieldDefinition",
					name: { kind: "Name", value: "collections", loc: { start: 166, end: 177 } },
					arguments: [
						{
							kind: "InputValueDefinition",
							name: { kind: "Name", value: "take", loc: { start: 178, end: 182 } },
							type: {
								kind: "NonNullType",
								type: {
									kind: "NamedType",
									name: { kind: "Name", value: "Int", loc: { start: 184, end: 187 } },
									loc: { start: 184, end: 187 },
								},
								loc: { start: 184, end: 188 },
							},
							directives: [],
							loc: { start: 178, end: 188 },
						},
						{
							kind: "InputValueDefinition",
							name: { kind: "Name", value: "skip", loc: { start: 190, end: 194 } },
							type: {
								kind: "NonNullType",
								type: {
									kind: "NamedType",
									name: { kind: "Name", value: "Int", loc: { start: 196, end: 199 } },
									loc: { start: 196, end: 199 },
								},
								loc: { start: 196, end: 200 },
							},
							directives: [],
							loc: { start: 190, end: 200 },
						},
					],
					type: {
						kind: "NonNullType",
						type: {
							kind: "NamedType",
							name: { kind: "Name", value: "CollectionList", loc: { start: 203, end: 217 } },
							loc: { start: 203, end: 217 },
						},
						loc: { start: 203, end: 218 },
					},
					directives: [],
					loc: { start: 166, end: 218 },
				},
				{
					kind: "FieldDefinition",
					name: { kind: "Name", value: "order", loc: { start: 221, end: 226 } },
					arguments: [
						{
							kind: "InputValueDefinition",
							name: { kind: "Name", value: "id", loc: { start: 227, end: 229 } },
							type: {
								kind: "NonNullType",
								type: {
									kind: "NamedType",
									name: { kind: "Name", value: "ID", loc: { start: 231, end: 233 } },
									loc: { start: 231, end: 233 },
								},
								loc: { start: 231, end: 234 },
							},
							directives: [],
							loc: { start: 227, end: 234 },
						},
						{
							kind: "InputValueDefinition",
							name: { kind: "Name", value: "status", loc: { start: 236, end: 242 } },
							type: {
								kind: "NamedType",
								name: { kind: "Name", value: "OrderStatus", loc: { start: 244, end: 255 } },
								loc: { start: 244, end: 255 },
							},
							directives: [],
							loc: { start: 236, end: 255 },
						},
					],
					type: {
						kind: "NonNullType",
						type: {
							kind: "NamedType",
							name: { kind: "Name", value: "Order", loc: { start: 258, end: 263 } },
							loc: { start: 258, end: 263 },
						},
						loc: { start: 258, end: 264 },
					},
					directives: [],
					loc: { start: 221, end: 264 },
				},
				{
					kind: "FieldDefinition",
					name: { kind: "Name", value: "orders", loc: { start: 267, end: 273 } },
					arguments: [
						{
							kind: "InputValueDefinition",
							name: { kind: "Name", value: "userId", loc: { start: 274, end: 280 } },
							type: {
								kind: "NonNullType",
								type: {
									kind: "NamedType",
									name: { kind: "Name", value: "ID", loc: { start: 282, end: 284 } },
									loc: { start: 282, end: 284 },
								},
								loc: { start: 282, end: 285 },
							},
							directives: [],
							loc: { start: 274, end: 285 },
						},
					],
					type: {
						kind: "NonNullType",
						type: {
							kind: "ListType",
							type: {
								kind: "NonNullType",
								type: {
									kind: "NamedType",
									name: { kind: "Name", value: "Order", loc: { start: 289, end: 294 } },
									loc: { start: 289, end: 294 },
								},
								loc: { start: 289, end: 295 },
							},
							loc: { start: 288, end: 296 },
						},
						loc: { start: 288, end: 297 },
					},
					directives: [],
					loc: { start: 267, end: 297 },
				},
				{
					kind: "FieldDefinition",
					name: { kind: "Name", value: "product", loc: { start: 300, end: 307 } },
					arguments: [
						{
							kind: "InputValueDefinition",
							name: { kind: "Name", value: "id", loc: { start: 308, end: 310 } },
							type: {
								kind: "NamedType",
								name: { kind: "Name", value: "ID", loc: { start: 312, end: 314 } },
								loc: { start: 312, end: 314 },
							},
							directives: [],
							loc: { start: 308, end: 314 },
						},
						{
							kind: "InputValueDefinition",
							name: { kind: "Name", value: "slug", loc: { start: 316, end: 320 } },
							type: {
								kind: "NamedType",
								name: { kind: "Name", value: "String", loc: { start: 322, end: 328 } },
								loc: { start: 322, end: 328 },
							},
							directives: [],
							loc: { start: 316, end: 328 },
						},
					],
					type: {
						kind: "NonNullType",
						type: {
							kind: "NamedType",
							name: { kind: "Name", value: "Product", loc: { start: 331, end: 338 } },
							loc: { start: 331, end: 338 },
						},
						loc: { start: 331, end: 339 },
					},
					directives: [],
					loc: { start: 300, end: 339 },
				},
				{
					kind: "FieldDefinition",
					name: { kind: "Name", value: "products", loc: { start: 342, end: 350 } },
					arguments: [
						{
							kind: "InputValueDefinition",
							name: { kind: "Name", value: "order", loc: { start: 351, end: 356 } },
							type: {
								kind: "NonNullType",
								type: {
									kind: "NamedType",
									name: { kind: "Name", value: "SortDirection", loc: { start: 358, end: 371 } },
									loc: { start: 358, end: 371 },
								},
								loc: { start: 358, end: 372 },
							},
							defaultValue: { kind: "EnumValue", value: "ASC", loc: { start: 375, end: 378 } },
							directives: [],
							loc: { start: 351, end: 378 },
						},
						{
							kind: "InputValueDefinition",
							name: { kind: "Name", value: "orderBy", loc: { start: 380, end: 387 } },
							type: {
								kind: "NonNullType",
								type: {
									kind: "NamedType",
									name: { kind: "Name", value: "ProductsSortBy", loc: { start: 389, end: 403 } },
									loc: { start: 389, end: 403 },
								},
								loc: { start: 389, end: 404 },
							},
							defaultValue: { kind: "EnumValue", value: "DEFAULT", loc: { start: 407, end: 414 } },
							directives: [],
							loc: { start: 380, end: 414 },
						},
						{
							kind: "InputValueDefinition",
							name: { kind: "Name", value: "search", loc: { start: 416, end: 422 } },
							type: {
								kind: "NamedType",
								name: { kind: "Name", value: "String", loc: { start: 424, end: 430 } },
								loc: { start: 424, end: 430 },
							},
							directives: [],
							loc: { start: 416, end: 430 },
						},
						{
							kind: "InputValueDefinition",
							name: { kind: "Name", value: "take", loc: { start: 432, end: 436 } },
							type: {
								kind: "NonNullType",
								type: {
									kind: "NamedType",
									name: { kind: "Name", value: "Int", loc: { start: 438, end: 441 } },
									loc: { start: 438, end: 441 },
								},
								loc: { start: 438, end: 442 },
							},
							directives: [],
							loc: { start: 432, end: 442 },
						},
						{
							kind: "InputValueDefinition",
							name: { kind: "Name", value: "skip", loc: { start: 444, end: 448 } },
							type: {
								kind: "NonNullType",
								type: {
									kind: "NamedType",
									name: { kind: "Name", value: "Int", loc: { start: 450, end: 453 } },
									loc: { start: 450, end: 453 },
								},
								loc: { start: 450, end: 454 },
							},
							directives: [],
							loc: { start: 444, end: 454 },
						},
					],
					type: {
						kind: "NonNullType",
						type: {
							kind: "NamedType",
							name: { kind: "Name", value: "ProductList", loc: { start: 457, end: 468 } },
							loc: { start: 457, end: 468 },
						},
						loc: { start: 457, end: 469 },
					},
					directives: [],
					loc: { start: 342, end: 469 },
				},
				{
					kind: "FieldDefinition",
					name: { kind: "Name", value: "reviews", loc: { start: 472, end: 479 } },
					arguments: [
						{
							kind: "InputValueDefinition",
							name: { kind: "Name", value: "productId", loc: { start: 480, end: 489 } },
							type: {
								kind: "NonNullType",
								type: {
									kind: "NamedType",
									name: { kind: "Name", value: "ID", loc: { start: 491, end: 493 } },
									loc: { start: 491, end: 493 },
								},
								loc: { start: 491, end: 494 },
							},
							directives: [],
							loc: { start: 480, end: 494 },
						},
					],
					type: {
						kind: "NonNullType",
						type: {
							kind: "ListType",
							type: {
								kind: "NonNullType",
								type: {
									kind: "NamedType",
									name: { kind: "Name", value: "Review", loc: { start: 498, end: 504 } },
									loc: { start: 498, end: 504 },
								},
								loc: { start: 498, end: 505 },
							},
							loc: { start: 497, end: 506 },
						},
						loc: { start: 497, end: 507 },
					},
					directives: [],
					loc: { start: 472, end: 507 },
				},
			],
			loc: { start: 0, end: 509 },
		},
		{
			kind: "ObjectTypeExtension",
			name: { kind: "Name", value: "Mutation", loc: { start: 523, end: 531 } },
			interfaces: [],
			directives: [],
			fields: [
				{
					kind: "FieldDefinition",
					name: { kind: "Name", value: "createOrder", loc: { start: 536, end: 547 } },
					arguments: [],
					type: {
						kind: "NonNullType",
						type: {
							kind: "NamedType",
							name: { kind: "Name", value: "Order", loc: { start: 549, end: 554 } },
							loc: { start: 549, end: 554 },
						},
						loc: { start: 549, end: 555 },
					},
					directives: [],
					loc: { start: 536, end: 555 },
				},
				{
					kind: "FieldDefinition",
					name: { kind: "Name", value: "createOrderItem", loc: { start: 558, end: 573 } },
					arguments: [
						{
							kind: "InputValueDefinition",
							name: { kind: "Name", value: "orderId", loc: { start: 574, end: 581 } },
							type: {
								kind: "NonNullType",
								type: {
									kind: "NamedType",
									name: { kind: "Name", value: "ID", loc: { start: 583, end: 585 } },
									loc: { start: 583, end: 585 },
								},
								loc: { start: 583, end: 586 },
							},
							directives: [],
							loc: { start: 574, end: 586 },
						},
						{
							kind: "InputValueDefinition",
							name: { kind: "Name", value: "productId", loc: { start: 588, end: 597 } },
							type: {
								kind: "NonNullType",
								type: {
									kind: "NamedType",
									name: { kind: "Name", value: "ID", loc: { start: 599, end: 601 } },
									loc: { start: 599, end: 601 },
								},
								loc: { start: 599, end: 602 },
							},
							directives: [],
							loc: { start: 588, end: 602 },
						},
						{
							kind: "InputValueDefinition",
							name: { kind: "Name", value: "quantity", loc: { start: 604, end: 612 } },
							type: {
								kind: "NonNullType",
								type: {
									kind: "NamedType",
									name: { kind: "Name", value: "Int", loc: { start: 614, end: 617 } },
									loc: { start: 614, end: 617 },
								},
								loc: { start: 614, end: 618 },
							},
							directives: [],
							loc: { start: 604, end: 618 },
						},
					],
					type: {
						kind: "NonNullType",
						type: {
							kind: "NamedType",
							name: { kind: "Name", value: "Order", loc: { start: 621, end: 626 } },
							loc: { start: 621, end: 626 },
						},
						loc: { start: 621, end: 627 },
					},
					directives: [],
					loc: { start: 558, end: 627 },
				},
				{
					kind: "FieldDefinition",
					name: { kind: "Name", value: "updateOrderItem", loc: { start: 630, end: 645 } },
					arguments: [
						{
							kind: "InputValueDefinition",
							name: { kind: "Name", value: "orderId", loc: { start: 646, end: 653 } },
							type: {
								kind: "NonNullType",
								type: {
									kind: "NamedType",
									name: { kind: "Name", value: "ID", loc: { start: 655, end: 657 } },
									loc: { start: 655, end: 657 },
								},
								loc: { start: 655, end: 658 },
							},
							directives: [],
							loc: { start: 646, end: 658 },
						},
						{
							kind: "InputValueDefinition",
							name: { kind: "Name", value: "productId", loc: { start: 660, end: 669 } },
							type: {
								kind: "NonNullType",
								type: {
									kind: "NamedType",
									name: { kind: "Name", value: "ID", loc: { start: 671, end: 673 } },
									loc: { start: 671, end: 673 },
								},
								loc: { start: 671, end: 674 },
							},
							directives: [],
							loc: { start: 660, end: 674 },
						},
						{
							kind: "InputValueDefinition",
							name: { kind: "Name", value: "quantity", loc: { start: 676, end: 684 } },
							type: {
								kind: "NonNullType",
								type: {
									kind: "NamedType",
									name: { kind: "Name", value: "Int", loc: { start: 686, end: 689 } },
									loc: { start: 686, end: 689 },
								},
								loc: { start: 686, end: 690 },
							},
							directives: [],
							loc: { start: 676, end: 690 },
						},
					],
					type: {
						kind: "NonNullType",
						type: {
							kind: "NamedType",
							name: { kind: "Name", value: "Order", loc: { start: 693, end: 698 } },
							loc: { start: 693, end: 698 },
						},
						loc: { start: 693, end: 699 },
					},
					directives: [],
					loc: { start: 630, end: 699 },
				},
				{
					kind: "FieldDefinition",
					name: { kind: "Name", value: "removeOrderItem", loc: { start: 702, end: 717 } },
					arguments: [
						{
							kind: "InputValueDefinition",
							name: { kind: "Name", value: "orderId", loc: { start: 718, end: 725 } },
							type: {
								kind: "NonNullType",
								type: {
									kind: "NamedType",
									name: { kind: "Name", value: "ID", loc: { start: 727, end: 729 } },
									loc: { start: 727, end: 729 },
								},
								loc: { start: 727, end: 730 },
							},
							directives: [],
							loc: { start: 718, end: 730 },
						},
						{
							kind: "InputValueDefinition",
							name: { kind: "Name", value: "productId", loc: { start: 732, end: 741 } },
							type: {
								kind: "NonNullType",
								type: {
									kind: "NamedType",
									name: { kind: "Name", value: "ID", loc: { start: 743, end: 745 } },
									loc: { start: 743, end: 745 },
								},
								loc: { start: 743, end: 746 },
							},
							directives: [],
							loc: { start: 732, end: 746 },
						},
					],
					type: {
						kind: "NonNullType",
						type: {
							kind: "NamedType",
							name: { kind: "Name", value: "Order", loc: { start: 749, end: 754 } },
							loc: { start: 749, end: 754 },
						},
						loc: { start: 749, end: 755 },
					},
					directives: [],
					loc: { start: 702, end: 755 },
				},
				{
					kind: "FieldDefinition",
					name: { kind: "Name", value: "placeOrder", loc: { start: 758, end: 768 } },
					arguments: [
						{
							kind: "InputValueDefinition",
							name: { kind: "Name", value: "orderId", loc: { start: 769, end: 776 } },
							type: {
								kind: "NonNullType",
								type: {
									kind: "NamedType",
									name: { kind: "Name", value: "ID", loc: { start: 778, end: 780 } },
									loc: { start: 778, end: 780 },
								},
								loc: { start: 778, end: 781 },
							},
							directives: [],
							loc: { start: 769, end: 781 },
						},
						{
							kind: "InputValueDefinition",
							name: { kind: "Name", value: "email", loc: { start: 783, end: 788 } },
							type: {
								kind: "NonNullType",
								type: {
									kind: "NamedType",
									name: { kind: "Name", value: "String", loc: { start: 790, end: 796 } },
									loc: { start: 790, end: 796 },
								},
								loc: { start: 790, end: 797 },
							},
							directives: [],
							loc: { start: 783, end: 797 },
						},
						{
							kind: "InputValueDefinition",
							name: { kind: "Name", value: "userId", loc: { start: 799, end: 805 } },
							type: {
								kind: "NamedType",
								name: { kind: "Name", value: "ID", loc: { start: 807, end: 809 } },
								loc: { start: 807, end: 809 },
							},
							directives: [],
							loc: { start: 799, end: 809 },
						},
						{
							kind: "InputValueDefinition",
							name: { kind: "Name", value: "sessionId", loc: { start: 811, end: 820 } },
							type: {
								kind: "NamedType",
								name: { kind: "Name", value: "String", loc: { start: 822, end: 828 } },
								loc: { start: 822, end: 828 },
							},
							directives: [],
							loc: { start: 811, end: 828 },
						},
						{
							kind: "InputValueDefinition",
							name: { kind: "Name", value: "totalAmount", loc: { start: 830, end: 841 } },
							type: {
								kind: "NonNullType",
								type: {
									kind: "NamedType",
									name: { kind: "Name", value: "Int", loc: { start: 843, end: 846 } },
									loc: { start: 843, end: 846 },
								},
								loc: { start: 843, end: 847 },
							},
							directives: [],
							loc: { start: 830, end: 847 },
						},
					],
					type: {
						kind: "NonNullType",
						type: {
							kind: "NamedType",
							name: { kind: "Name", value: "Order", loc: { start: 850, end: 855 } },
							loc: { start: 850, end: 855 },
						},
						loc: { start: 850, end: 856 },
					},
					directives: [],
					loc: { start: 758, end: 856 },
				},
				{
					kind: "FieldDefinition",
					name: { kind: "Name", value: "createReview", loc: { start: 859, end: 871 } },
					arguments: [
						{
							kind: "InputValueDefinition",
							name: { kind: "Name", value: "productId", loc: { start: 872, end: 881 } },
							type: {
								kind: "NonNullType",
								type: {
									kind: "NamedType",
									name: { kind: "Name", value: "ID", loc: { start: 883, end: 885 } },
									loc: { start: 883, end: 885 },
								},
								loc: { start: 883, end: 886 },
							},
							directives: [],
							loc: { start: 872, end: 886 },
						},
						{
							kind: "InputValueDefinition",
							name: { kind: "Name", value: "headline", loc: { start: 888, end: 896 } },
							type: {
								kind: "NonNullType",
								type: {
									kind: "NamedType",
									name: { kind: "Name", value: "String", loc: { start: 898, end: 904 } },
									loc: { start: 898, end: 904 },
								},
								loc: { start: 898, end: 905 },
							},
							directives: [],
							loc: { start: 888, end: 905 },
						},
						{
							kind: "InputValueDefinition",
							name: { kind: "Name", value: "content", loc: { start: 907, end: 914 } },
							type: {
								kind: "NonNullType",
								type: {
									kind: "NamedType",
									name: { kind: "Name", value: "String", loc: { start: 916, end: 922 } },
									loc: { start: 916, end: 922 },
								},
								loc: { start: 916, end: 923 },
							},
							directives: [],
							loc: { start: 907, end: 923 },
						},
						{
							kind: "InputValueDefinition",
							name: { kind: "Name", value: "rating", loc: { start: 925, end: 931 } },
							type: {
								kind: "NonNullType",
								type: {
									kind: "NamedType",
									name: { kind: "Name", value: "Int", loc: { start: 933, end: 936 } },
									loc: { start: 933, end: 936 },
								},
								loc: { start: 933, end: 937 },
							},
							directives: [],
							loc: { start: 925, end: 937 },
						},
						{
							kind: "InputValueDefinition",
							name: { kind: "Name", value: "name", loc: { start: 939, end: 943 } },
							type: {
								kind: "NonNullType",
								type: {
									kind: "NamedType",
									name: { kind: "Name", value: "String", loc: { start: 945, end: 951 } },
									loc: { start: 945, end: 951 },
								},
								loc: { start: 945, end: 952 },
							},
							directives: [],
							loc: { start: 939, end: 952 },
						},
						{
							kind: "InputValueDefinition",
							name: { kind: "Name", value: "email", loc: { start: 954, end: 959 } },
							type: {
								kind: "NonNullType",
								type: {
									kind: "NamedType",
									name: { kind: "Name", value: "String", loc: { start: 961, end: 967 } },
									loc: { start: 961, end: 967 },
								},
								loc: { start: 961, end: 968 },
							},
							directives: [],
							loc: { start: 954, end: 968 },
						},
					],
					type: {
						kind: "NonNullType",
						type: {
							kind: "NamedType",
							name: { kind: "Name", value: "Review", loc: { start: 971, end: 977 } },
							loc: { start: 971, end: 977 },
						},
						loc: { start: 971, end: 978 },
					},
					directives: [],
					loc: { start: 859, end: 978 },
				},
			],
			loc: { start: 511, end: 980 },
		},
		{
			kind: "ObjectTypeDefinition",
			name: { kind: "Name", value: "Category", loc: { start: 987, end: 995 } },
			interfaces: [],
			directives: [],
			fields: [
				{
					kind: "FieldDefinition",
					name: { kind: "Name", value: "id", loc: { start: 1000, end: 1002 } },
					arguments: [],
					type: {
						kind: "NonNullType",
						type: {
							kind: "NamedType",
							name: { kind: "Name", value: "ID", loc: { start: 1004, end: 1006 } },
							loc: { start: 1004, end: 1006 },
						},
						loc: { start: 1004, end: 1007 },
					},
					directives: [],
					loc: { start: 1000, end: 1007 },
				},
				{
					kind: "FieldDefinition",
					name: { kind: "Name", value: "name", loc: { start: 1010, end: 1014 } },
					arguments: [],
					type: {
						kind: "NonNullType",
						type: {
							kind: "NamedType",
							name: { kind: "Name", value: "String", loc: { start: 1016, end: 1022 } },
							loc: { start: 1016, end: 1022 },
						},
						loc: { start: 1016, end: 1023 },
					},
					directives: [],
					loc: { start: 1010, end: 1023 },
				},
				{
					kind: "FieldDefinition",
					name: { kind: "Name", value: "slug", loc: { start: 1026, end: 1030 } },
					arguments: [],
					type: {
						kind: "NonNullType",
						type: {
							kind: "NamedType",
							name: { kind: "Name", value: "String", loc: { start: 1032, end: 1038 } },
							loc: { start: 1032, end: 1038 },
						},
						loc: { start: 1032, end: 1039 },
					},
					directives: [],
					loc: { start: 1026, end: 1039 },
				},
				{
					kind: "FieldDefinition",
					name: { kind: "Name", value: "description", loc: { start: 1042, end: 1053 } },
					arguments: [],
					type: {
						kind: "NonNullType",
						type: {
							kind: "NamedType",
							name: { kind: "Name", value: "String", loc: { start: 1055, end: 1061 } },
							loc: { start: 1055, end: 1061 },
						},
						loc: { start: 1055, end: 1062 },
					},
					directives: [],
					loc: { start: 1042, end: 1062 },
				},
				{
					kind: "FieldDefinition",
					name: { kind: "Name", value: "products", loc: { start: 1065, end: 1073 } },
					arguments: [
						{
							kind: "InputValueDefinition",
							name: { kind: "Name", value: "take", loc: { start: 1074, end: 1078 } },
							type: {
								kind: "NonNullType",
								type: {
									kind: "NamedType",
									name: { kind: "Name", value: "Int", loc: { start: 1080, end: 1083 } },
									loc: { start: 1080, end: 1083 },
								},
								loc: { start: 1080, end: 1084 },
							},
							directives: [],
							loc: { start: 1074, end: 1084 },
						},
						{
							kind: "InputValueDefinition",
							name: { kind: "Name", value: "skip", loc: { start: 1086, end: 1090 } },
							type: {
								kind: "NonNullType",
								type: {
									kind: "NamedType",
									name: { kind: "Name", value: "Int", loc: { start: 1092, end: 1095 } },
									loc: { start: 1092, end: 1095 },
								},
								loc: { start: 1092, end: 1096 },
							},
							directives: [],
							loc: { start: 1086, end: 1096 },
						},
					],
					type: {
						kind: "NonNullType",
						type: {
							kind: "ListType",
							type: {
								kind: "NonNullType",
								type: {
									kind: "NamedType",
									name: { kind: "Name", value: "Product", loc: { start: 1100, end: 1107 } },
									loc: { start: 1100, end: 1107 },
								},
								loc: { start: 1100, end: 1108 },
							},
							loc: { start: 1099, end: 1109 },
						},
						loc: { start: 1099, end: 1110 },
					},
					directives: [],
					loc: { start: 1065, end: 1110 },
				},
			],
			loc: { start: 982, end: 1112 },
		},
		{
			kind: "ObjectTypeDefinition",
			name: { kind: "Name", value: "CategoryList", loc: { start: 1119, end: 1131 } },
			interfaces: [],
			directives: [],
			fields: [
				{
					kind: "FieldDefinition",
					name: { kind: "Name", value: "data", loc: { start: 1136, end: 1140 } },
					arguments: [],
					type: {
						kind: "NonNullType",
						type: {
							kind: "ListType",
							type: {
								kind: "NonNullType",
								type: {
									kind: "NamedType",
									name: { kind: "Name", value: "Category", loc: { start: 1143, end: 1151 } },
									loc: { start: 1143, end: 1151 },
								},
								loc: { start: 1143, end: 1152 },
							},
							loc: { start: 1142, end: 1153 },
						},
						loc: { start: 1142, end: 1154 },
					},
					directives: [],
					loc: { start: 1136, end: 1154 },
				},
				{
					kind: "FieldDefinition",
					name: { kind: "Name", value: "meta", loc: { start: 1157, end: 1161 } },
					arguments: [],
					type: {
						kind: "NonNullType",
						type: {
							kind: "NamedType",
							name: { kind: "Name", value: "Meta", loc: { start: 1163, end: 1167 } },
							loc: { start: 1163, end: 1167 },
						},
						loc: { start: 1163, end: 1168 },
					},
					directives: [],
					loc: { start: 1157, end: 1168 },
				},
			],
			loc: { start: 1114, end: 1170 },
		},
		{
			kind: "ObjectTypeDefinition",
			name: { kind: "Name", value: "Collection", loc: { start: 1177, end: 1187 } },
			interfaces: [],
			directives: [],
			fields: [
				{
					kind: "FieldDefinition",
					name: { kind: "Name", value: "id", loc: { start: 1192, end: 1194 } },
					arguments: [],
					type: {
						kind: "NonNullType",
						type: {
							kind: "NamedType",
							name: { kind: "Name", value: "ID", loc: { start: 1196, end: 1198 } },
							loc: { start: 1196, end: 1198 },
						},
						loc: { start: 1196, end: 1199 },
					},
					directives: [],
					loc: { start: 1192, end: 1199 },
				},
				{
					kind: "FieldDefinition",
					name: { kind: "Name", value: "name", loc: { start: 1202, end: 1206 } },
					arguments: [],
					type: {
						kind: "NonNullType",
						type: {
							kind: "NamedType",
							name: { kind: "Name", value: "String", loc: { start: 1208, end: 1214 } },
							loc: { start: 1208, end: 1214 },
						},
						loc: { start: 1208, end: 1215 },
					},
					directives: [],
					loc: { start: 1202, end: 1215 },
				},
				{
					kind: "FieldDefinition",
					name: { kind: "Name", value: "slug", loc: { start: 1218, end: 1222 } },
					arguments: [],
					type: {
						kind: "NonNullType",
						type: {
							kind: "NamedType",
							name: { kind: "Name", value: "String", loc: { start: 1224, end: 1230 } },
							loc: { start: 1224, end: 1230 },
						},
						loc: { start: 1224, end: 1231 },
					},
					directives: [],
					loc: { start: 1218, end: 1231 },
				},
				{
					kind: "FieldDefinition",
					name: { kind: "Name", value: "description", loc: { start: 1234, end: 1245 } },
					arguments: [],
					type: {
						kind: "NonNullType",
						type: {
							kind: "NamedType",
							name: { kind: "Name", value: "String", loc: { start: 1247, end: 1253 } },
							loc: { start: 1247, end: 1253 },
						},
						loc: { start: 1247, end: 1254 },
					},
					directives: [],
					loc: { start: 1234, end: 1254 },
				},
				{
					kind: "FieldDefinition",
					name: { kind: "Name", value: "products", loc: { start: 1257, end: 1265 } },
					arguments: [
						{
							kind: "InputValueDefinition",
							name: { kind: "Name", value: "take", loc: { start: 1266, end: 1270 } },
							type: {
								kind: "NonNullType",
								type: {
									kind: "NamedType",
									name: { kind: "Name", value: "Int", loc: { start: 1272, end: 1275 } },
									loc: { start: 1272, end: 1275 },
								},
								loc: { start: 1272, end: 1276 },
							},
							directives: [],
							loc: { start: 1266, end: 1276 },
						},
						{
							kind: "InputValueDefinition",
							name: { kind: "Name", value: "skip", loc: { start: 1278, end: 1282 } },
							type: {
								kind: "NonNullType",
								type: {
									kind: "NamedType",
									name: { kind: "Name", value: "Int", loc: { start: 1284, end: 1287 } },
									loc: { start: 1284, end: 1287 },
								},
								loc: { start: 1284, end: 1288 },
							},
							directives: [],
							loc: { start: 1278, end: 1288 },
						},
					],
					type: {
						kind: "NonNullType",
						type: {
							kind: "ListType",
							type: {
								kind: "NonNullType",
								type: {
									kind: "NamedType",
									name: { kind: "Name", value: "Product", loc: { start: 1292, end: 1299 } },
									loc: { start: 1292, end: 1299 },
								},
								loc: { start: 1292, end: 1300 },
							},
							loc: { start: 1291, end: 1301 },
						},
						loc: { start: 1291, end: 1302 },
					},
					directives: [],
					loc: { start: 1257, end: 1302 },
				},
			],
			loc: { start: 1172, end: 1304 },
		},
		{
			kind: "ObjectTypeDefinition",
			name: { kind: "Name", value: "CollectionList", loc: { start: 1311, end: 1325 } },
			interfaces: [],
			directives: [],
			fields: [
				{
					kind: "FieldDefinition",
					name: { kind: "Name", value: "data", loc: { start: 1330, end: 1334 } },
					arguments: [],
					type: {
						kind: "NonNullType",
						type: {
							kind: "ListType",
							type: {
								kind: "NonNullType",
								type: {
									kind: "NamedType",
									name: { kind: "Name", value: "Collection", loc: { start: 1337, end: 1347 } },
									loc: { start: 1337, end: 1347 },
								},
								loc: { start: 1337, end: 1348 },
							},
							loc: { start: 1336, end: 1349 },
						},
						loc: { start: 1336, end: 1350 },
					},
					directives: [],
					loc: { start: 1330, end: 1350 },
				},
				{
					kind: "FieldDefinition",
					name: { kind: "Name", value: "meta", loc: { start: 1353, end: 1357 } },
					arguments: [],
					type: {
						kind: "NonNullType",
						type: {
							kind: "NamedType",
							name: { kind: "Name", value: "Meta", loc: { start: 1359, end: 1363 } },
							loc: { start: 1359, end: 1363 },
						},
						loc: { start: 1359, end: 1364 },
					},
					directives: [],
					loc: { start: 1353, end: 1364 },
				},
			],
			loc: { start: 1306, end: 1366 },
		},
		{
			kind: "ObjectTypeDefinition",
			name: { kind: "Name", value: "Product", loc: { start: 1373, end: 1380 } },
			interfaces: [],
			directives: [],
			fields: [
				{
					kind: "FieldDefinition",
					name: { kind: "Name", value: "id", loc: { start: 1385, end: 1387 } },
					arguments: [],
					type: {
						kind: "NonNullType",
						type: {
							kind: "NamedType",
							name: { kind: "Name", value: "ID", loc: { start: 1389, end: 1391 } },
							loc: { start: 1389, end: 1391 },
						},
						loc: { start: 1389, end: 1392 },
					},
					directives: [],
					loc: { start: 1385, end: 1392 },
				},
				{
					kind: "FieldDefinition",
					name: { kind: "Name", value: "name", loc: { start: 1395, end: 1399 } },
					arguments: [],
					type: {
						kind: "NonNullType",
						type: {
							kind: "NamedType",
							name: { kind: "Name", value: "String", loc: { start: 1401, end: 1407 } },
							loc: { start: 1401, end: 1407 },
						},
						loc: { start: 1401, end: 1408 },
					},
					directives: [],
					loc: { start: 1395, end: 1408 },
				},
				{
					kind: "FieldDefinition",
					name: { kind: "Name", value: "slug", loc: { start: 1411, end: 1415 } },
					arguments: [],
					type: {
						kind: "NonNullType",
						type: {
							kind: "NamedType",
							name: { kind: "Name", value: "String", loc: { start: 1417, end: 1423 } },
							loc: { start: 1417, end: 1423 },
						},
						loc: { start: 1417, end: 1424 },
					},
					directives: [],
					loc: { start: 1411, end: 1424 },
				},
				{
					kind: "FieldDefinition",
					name: { kind: "Name", value: "description", loc: { start: 1427, end: 1438 } },
					arguments: [],
					type: {
						kind: "NonNullType",
						type: {
							kind: "NamedType",
							name: { kind: "Name", value: "String", loc: { start: 1440, end: 1446 } },
							loc: { start: 1440, end: 1446 },
						},
						loc: { start: 1440, end: 1447 },
					},
					directives: [],
					loc: { start: 1427, end: 1447 },
				},
				{
					kind: "FieldDefinition",
					name: { kind: "Name", value: "longDescription", loc: { start: 1450, end: 1465 } },
					arguments: [],
					type: {
						kind: "NonNullType",
						type: {
							kind: "NamedType",
							name: { kind: "Name", value: "String", loc: { start: 1467, end: 1473 } },
							loc: { start: 1467, end: 1473 },
						},
						loc: { start: 1467, end: 1474 },
					},
					directives: [],
					loc: { start: 1450, end: 1474 },
				},
				{
					kind: "FieldDefinition",
					name: { kind: "Name", value: "price", loc: { start: 1477, end: 1482 } },
					arguments: [],
					type: {
						kind: "NonNullType",
						type: {
							kind: "NamedType",
							name: { kind: "Name", value: "Int", loc: { start: 1484, end: 1487 } },
							loc: { start: 1484, end: 1487 },
						},
						loc: { start: 1484, end: 1488 },
					},
					directives: [],
					loc: { start: 1477, end: 1488 },
				},
				{
					kind: "FieldDefinition",
					name: { kind: "Name", value: "image", loc: { start: 1491, end: 1496 } },
					arguments: [],
					type: {
						kind: "NonNullType",
						type: {
							kind: "NamedType",
							name: { kind: "Name", value: "String", loc: { start: 1498, end: 1504 } },
							loc: { start: 1498, end: 1504 },
						},
						loc: { start: 1498, end: 1505 },
					},
					directives: [],
					loc: { start: 1491, end: 1505 },
				},
				{
					kind: "FieldDefinition",
					name: { kind: "Name", value: "status", loc: { start: 1508, end: 1514 } },
					arguments: [],
					type: {
						kind: "NonNullType",
						type: {
							kind: "NamedType",
							name: { kind: "Name", value: "String", loc: { start: 1516, end: 1522 } },
							loc: { start: 1516, end: 1522 },
						},
						loc: { start: 1516, end: 1523 },
					},
					directives: [],
					loc: { start: 1508, end: 1523 },
				},
				{
					kind: "FieldDefinition",
					name: { kind: "Name", value: "rating", loc: { start: 1526, end: 1532 } },
					arguments: [],
					type: {
						kind: "NonNullType",
						type: {
							kind: "NamedType",
							name: { kind: "Name", value: "Int", loc: { start: 1534, end: 1537 } },
							loc: { start: 1534, end: 1537 },
						},
						loc: { start: 1534, end: 1538 },
					},
					directives: [],
					loc: { start: 1526, end: 1538 },
				},
				{
					kind: "FieldDefinition",
					name: { kind: "Name", value: "categories", loc: { start: 1541, end: 1551 } },
					arguments: [],
					type: {
						kind: "NonNullType",
						type: {
							kind: "ListType",
							type: {
								kind: "NonNullType",
								type: {
									kind: "NamedType",
									name: { kind: "Name", value: "Category", loc: { start: 1554, end: 1562 } },
									loc: { start: 1554, end: 1562 },
								},
								loc: { start: 1554, end: 1563 },
							},
							loc: { start: 1553, end: 1564 },
						},
						loc: { start: 1553, end: 1565 },
					},
					directives: [],
					loc: { start: 1541, end: 1565 },
				},
				{
					kind: "FieldDefinition",
					name: { kind: "Name", value: "collections", loc: { start: 1568, end: 1579 } },
					arguments: [],
					type: {
						kind: "NonNullType",
						type: {
							kind: "ListType",
							type: {
								kind: "NonNullType",
								type: {
									kind: "NamedType",
									name: { kind: "Name", value: "Collection", loc: { start: 1582, end: 1592 } },
									loc: { start: 1582, end: 1592 },
								},
								loc: { start: 1582, end: 1593 },
							},
							loc: { start: 1581, end: 1594 },
						},
						loc: { start: 1581, end: 1595 },
					},
					directives: [],
					loc: { start: 1568, end: 1595 },
				},
			],
			loc: { start: 1368, end: 1597 },
		},
		{
			kind: "ObjectTypeDefinition",
			name: { kind: "Name", value: "ProductList", loc: { start: 1604, end: 1615 } },
			interfaces: [],
			directives: [],
			fields: [
				{
					kind: "FieldDefinition",
					name: { kind: "Name", value: "data", loc: { start: 1620, end: 1624 } },
					arguments: [],
					type: {
						kind: "NonNullType",
						type: {
							kind: "ListType",
							type: {
								kind: "NonNullType",
								type: {
									kind: "NamedType",
									name: { kind: "Name", value: "Product", loc: { start: 1627, end: 1634 } },
									loc: { start: 1627, end: 1634 },
								},
								loc: { start: 1627, end: 1635 },
							},
							loc: { start: 1626, end: 1636 },
						},
						loc: { start: 1626, end: 1637 },
					},
					directives: [],
					loc: { start: 1620, end: 1637 },
				},
				{
					kind: "FieldDefinition",
					name: { kind: "Name", value: "meta", loc: { start: 1640, end: 1644 } },
					arguments: [],
					type: {
						kind: "NonNullType",
						type: {
							kind: "NamedType",
							name: { kind: "Name", value: "Meta", loc: { start: 1646, end: 1650 } },
							loc: { start: 1646, end: 1650 },
						},
						loc: { start: 1646, end: 1651 },
					},
					directives: [],
					loc: { start: 1640, end: 1651 },
				},
			],
			loc: { start: 1599, end: 1653 },
		},
		{
			kind: "ObjectTypeDefinition",
			name: { kind: "Name", value: "Order", loc: { start: 1660, end: 1665 } },
			interfaces: [],
			directives: [],
			fields: [
				{
					kind: "FieldDefinition",
					name: { kind: "Name", value: "id", loc: { start: 1670, end: 1672 } },
					arguments: [],
					type: {
						kind: "NonNullType",
						type: {
							kind: "NamedType",
							name: { kind: "Name", value: "ID", loc: { start: 1674, end: 1676 } },
							loc: { start: 1674, end: 1676 },
						},
						loc: { start: 1674, end: 1677 },
					},
					directives: [],
					loc: { start: 1670, end: 1677 },
				},
				{
					kind: "FieldDefinition",
					name: { kind: "Name", value: "totalAmount", loc: { start: 1680, end: 1691 } },
					arguments: [],
					type: {
						kind: "NonNullType",
						type: {
							kind: "NamedType",
							name: { kind: "Name", value: "Int", loc: { start: 1693, end: 1696 } },
							loc: { start: 1693, end: 1696 },
						},
						loc: { start: 1693, end: 1697 },
					},
					directives: [],
					loc: { start: 1680, end: 1697 },
				},
				{
					kind: "FieldDefinition",
					name: { kind: "Name", value: "status", loc: { start: 1700, end: 1706 } },
					arguments: [],
					type: {
						kind: "NonNullType",
						type: {
							kind: "NamedType",
							name: { kind: "Name", value: "OrderStatus", loc: { start: 1708, end: 1719 } },
							loc: { start: 1708, end: 1719 },
						},
						loc: { start: 1708, end: 1720 },
					},
					directives: [],
					loc: { start: 1700, end: 1720 },
				},
				{
					kind: "FieldDefinition",
					name: { kind: "Name", value: "orderItems", loc: { start: 1723, end: 1733 } },
					arguments: [],
					type: {
						kind: "NonNullType",
						type: {
							kind: "ListType",
							type: {
								kind: "NonNullType",
								type: {
									kind: "NamedType",
									name: { kind: "Name", value: "OrderItem", loc: { start: 1736, end: 1745 } },
									loc: { start: 1736, end: 1745 },
								},
								loc: { start: 1736, end: 1746 },
							},
							loc: { start: 1735, end: 1747 },
						},
						loc: { start: 1735, end: 1748 },
					},
					directives: [],
					loc: { start: 1723, end: 1748 },
				},
				{
					kind: "FieldDefinition",
					name: { kind: "Name", value: "email", loc: { start: 1751, end: 1756 } },
					arguments: [],
					type: {
						kind: "NamedType",
						name: { kind: "Name", value: "String", loc: { start: 1758, end: 1764 } },
						loc: { start: 1758, end: 1764 },
					},
					directives: [],
					loc: { start: 1751, end: 1764 },
				},
				{
					kind: "FieldDefinition",
					name: { kind: "Name", value: "userId", loc: { start: 1767, end: 1773 } },
					arguments: [],
					type: {
						kind: "NamedType",
						name: { kind: "Name", value: "ID", loc: { start: 1775, end: 1777 } },
						loc: { start: 1775, end: 1777 },
					},
					directives: [],
					loc: { start: 1767, end: 1777 },
				},
				{
					kind: "FieldDefinition",
					name: { kind: "Name", value: "sessionId", loc: { start: 1780, end: 1789 } },
					arguments: [],
					type: {
						kind: "NamedType",
						name: { kind: "Name", value: "String", loc: { start: 1791, end: 1797 } },
						loc: { start: 1791, end: 1797 },
					},
					directives: [],
					loc: { start: 1780, end: 1797 },
				},
				{
					kind: "FieldDefinition",
					name: { kind: "Name", value: "createdAt", loc: { start: 1800, end: 1809 } },
					arguments: [],
					type: {
						kind: "NonNullType",
						type: {
							kind: "NamedType",
							name: { kind: "Name", value: "DateTime", loc: { start: 1811, end: 1819 } },
							loc: { start: 1811, end: 1819 },
						},
						loc: { start: 1811, end: 1820 },
					},
					directives: [],
					loc: { start: 1800, end: 1820 },
				},
				{
					kind: "FieldDefinition",
					name: { kind: "Name", value: "updatedAt", loc: { start: 1823, end: 1832 } },
					arguments: [],
					type: {
						kind: "NonNullType",
						type: {
							kind: "NamedType",
							name: { kind: "Name", value: "DateTime", loc: { start: 1834, end: 1842 } },
							loc: { start: 1834, end: 1842 },
						},
						loc: { start: 1834, end: 1843 },
					},
					directives: [],
					loc: { start: 1823, end: 1843 },
				},
			],
			loc: { start: 1655, end: 1845 },
		},
		{
			kind: "ObjectTypeDefinition",
			name: { kind: "Name", value: "OrderItem", loc: { start: 1852, end: 1861 } },
			interfaces: [],
			directives: [],
			fields: [
				{
					kind: "FieldDefinition",
					name: { kind: "Name", value: "id", loc: { start: 1866, end: 1868 } },
					arguments: [],
					type: {
						kind: "NonNullType",
						type: {
							kind: "NamedType",
							name: { kind: "Name", value: "ID", loc: { start: 1870, end: 1872 } },
							loc: { start: 1870, end: 1872 },
						},
						loc: { start: 1870, end: 1873 },
					},
					directives: [],
					loc: { start: 1866, end: 1873 },
				},
				{
					kind: "FieldDefinition",
					name: { kind: "Name", value: "quantity", loc: { start: 1876, end: 1884 } },
					arguments: [],
					type: {
						kind: "NonNullType",
						type: {
							kind: "NamedType",
							name: { kind: "Name", value: "Int", loc: { start: 1886, end: 1889 } },
							loc: { start: 1886, end: 1889 },
						},
						loc: { start: 1886, end: 1890 },
					},
					directives: [],
					loc: { start: 1876, end: 1890 },
				},
				{
					kind: "FieldDefinition",
					name: { kind: "Name", value: "product", loc: { start: 1893, end: 1900 } },
					arguments: [],
					type: {
						kind: "NonNullType",
						type: {
							kind: "NamedType",
							name: { kind: "Name", value: "Product", loc: { start: 1902, end: 1909 } },
							loc: { start: 1902, end: 1909 },
						},
						loc: { start: 1902, end: 1910 },
					},
					directives: [],
					loc: { start: 1893, end: 1910 },
				},
				{
					kind: "FieldDefinition",
					name: { kind: "Name", value: "productId", loc: { start: 1913, end: 1922 } },
					arguments: [],
					type: {
						kind: "NonNullType",
						type: {
							kind: "NamedType",
							name: { kind: "Name", value: "ID", loc: { start: 1924, end: 1926 } },
							loc: { start: 1924, end: 1926 },
						},
						loc: { start: 1924, end: 1927 },
					},
					directives: [],
					loc: { start: 1913, end: 1927 },
				},
				{
					kind: "FieldDefinition",
					name: { kind: "Name", value: "orderId", loc: { start: 1930, end: 1937 } },
					arguments: [],
					type: {
						kind: "NonNullType",
						type: {
							kind: "NamedType",
							name: { kind: "Name", value: "ID", loc: { start: 1939, end: 1941 } },
							loc: { start: 1939, end: 1941 },
						},
						loc: { start: 1939, end: 1942 },
					},
					directives: [],
					loc: { start: 1930, end: 1942 },
				},
			],
			loc: { start: 1847, end: 1944 },
		},
		{
			kind: "ObjectTypeDefinition",
			name: { kind: "Name", value: "Review", loc: { start: 1951, end: 1957 } },
			interfaces: [],
			directives: [],
			fields: [
				{
					kind: "FieldDefinition",
					name: { kind: "Name", value: "id", loc: { start: 1962, end: 1964 } },
					arguments: [],
					type: {
						kind: "NonNullType",
						type: {
							kind: "NamedType",
							name: { kind: "Name", value: "ID", loc: { start: 1966, end: 1968 } },
							loc: { start: 1966, end: 1968 },
						},
						loc: { start: 1966, end: 1969 },
					},
					directives: [],
					loc: { start: 1962, end: 1969 },
				},
				{
					kind: "FieldDefinition",
					name: { kind: "Name", value: "headline", loc: { start: 1972, end: 1980 } },
					arguments: [],
					type: {
						kind: "NonNullType",
						type: {
							kind: "NamedType",
							name: { kind: "Name", value: "String", loc: { start: 1982, end: 1988 } },
							loc: { start: 1982, end: 1988 },
						},
						loc: { start: 1982, end: 1989 },
					},
					directives: [],
					loc: { start: 1972, end: 1989 },
				},
				{
					kind: "FieldDefinition",
					name: { kind: "Name", value: "content", loc: { start: 1992, end: 1999 } },
					arguments: [],
					type: {
						kind: "NonNullType",
						type: {
							kind: "NamedType",
							name: { kind: "Name", value: "String", loc: { start: 2001, end: 2007 } },
							loc: { start: 2001, end: 2007 },
						},
						loc: { start: 2001, end: 2008 },
					},
					directives: [],
					loc: { start: 1992, end: 2008 },
				},
				{
					kind: "FieldDefinition",
					name: { kind: "Name", value: "rating", loc: { start: 2011, end: 2017 } },
					arguments: [],
					type: {
						kind: "NonNullType",
						type: {
							kind: "NamedType",
							name: { kind: "Name", value: "Int", loc: { start: 2019, end: 2022 } },
							loc: { start: 2019, end: 2022 },
						},
						loc: { start: 2019, end: 2023 },
					},
					directives: [],
					loc: { start: 2011, end: 2023 },
				},
				{
					kind: "FieldDefinition",
					name: { kind: "Name", value: "name", loc: { start: 2026, end: 2030 } },
					arguments: [],
					type: {
						kind: "NonNullType",
						type: {
							kind: "NamedType",
							name: { kind: "Name", value: "String", loc: { start: 2032, end: 2038 } },
							loc: { start: 2032, end: 2038 },
						},
						loc: { start: 2032, end: 2039 },
					},
					directives: [],
					loc: { start: 2026, end: 2039 },
				},
				{
					kind: "FieldDefinition",
					name: { kind: "Name", value: "email", loc: { start: 2042, end: 2047 } },
					arguments: [],
					type: {
						kind: "NonNullType",
						type: {
							kind: "NamedType",
							name: { kind: "Name", value: "String", loc: { start: 2049, end: 2055 } },
							loc: { start: 2049, end: 2055 },
						},
						loc: { start: 2049, end: 2056 },
					},
					directives: [],
					loc: { start: 2042, end: 2056 },
				},
				{
					kind: "FieldDefinition",
					name: { kind: "Name", value: "createdAt", loc: { start: 2059, end: 2068 } },
					arguments: [],
					type: {
						kind: "NonNullType",
						type: {
							kind: "NamedType",
							name: { kind: "Name", value: "DateTime", loc: { start: 2070, end: 2078 } },
							loc: { start: 2070, end: 2078 },
						},
						loc: { start: 2070, end: 2079 },
					},
					directives: [],
					loc: { start: 2059, end: 2079 },
				},
			],
			loc: { start: 1946, end: 2081 },
		},
		{
			kind: "ScalarTypeDefinition",
			name: { kind: "Name", value: "DateTime", loc: { start: 2090, end: 2098 } },
			directives: [],
			loc: { start: 2083, end: 2098 },
		},
		{
			kind: "ObjectTypeDefinition",
			name: { kind: "Name", value: "Meta", loc: { start: 2105, end: 2109 } },
			interfaces: [],
			directives: [],
			fields: [
				{
					kind: "FieldDefinition",
					name: { kind: "Name", value: "count", loc: { start: 2114, end: 2119 } },
					arguments: [],
					type: {
						kind: "NonNullType",
						type: {
							kind: "NamedType",
							name: { kind: "Name", value: "Int", loc: { start: 2121, end: 2124 } },
							loc: { start: 2121, end: 2124 },
						},
						loc: { start: 2121, end: 2125 },
					},
					directives: [],
					loc: { start: 2114, end: 2125 },
				},
				{
					kind: "FieldDefinition",
					name: { kind: "Name", value: "total", loc: { start: 2128, end: 2133 } },
					arguments: [],
					type: {
						kind: "NonNullType",
						type: {
							kind: "NamedType",
							name: { kind: "Name", value: "Int", loc: { start: 2135, end: 2138 } },
							loc: { start: 2135, end: 2138 },
						},
						loc: { start: 2135, end: 2139 },
					},
					directives: [],
					loc: { start: 2128, end: 2139 },
				},
			],
			loc: { start: 2100, end: 2141 },
		},
		{
			kind: "EnumTypeDefinition",
			name: { kind: "Name", value: "OrderStatus", loc: { start: 2148, end: 2159 } },
			directives: [],
			values: [
				{
					kind: "EnumValueDefinition",
					name: { kind: "Name", value: "PAID", loc: { start: 2164, end: 2168 } },
					directives: [],
					loc: { start: 2164, end: 2168 },
				},
				{
					kind: "EnumValueDefinition",
					name: { kind: "Name", value: "FULFILLED", loc: { start: 2171, end: 2180 } },
					directives: [],
					loc: { start: 2171, end: 2180 },
				},
				{
					kind: "EnumValueDefinition",
					name: { kind: "Name", value: "CREATED", loc: { start: 2183, end: 2190 } },
					directives: [],
					loc: { start: 2183, end: 2190 },
				},
				{
					kind: "EnumValueDefinition",
					name: { kind: "Name", value: "CANCELLED", loc: { start: 2193, end: 2202 } },
					directives: [],
					loc: { start: 2193, end: 2202 },
				},
			],
			loc: { start: 2143, end: 2204 },
		},
		{
			kind: "EnumTypeDefinition",
			name: { kind: "Name", value: "SortDirection", loc: { start: 2211, end: 2224 } },
			directives: [],
			values: [
				{
					kind: "EnumValueDefinition",
					name: { kind: "Name", value: "ASC", loc: { start: 2229, end: 2232 } },
					directives: [],
					loc: { start: 2229, end: 2232 },
				},
				{
					kind: "EnumValueDefinition",
					name: { kind: "Name", value: "DESC", loc: { start: 2235, end: 2239 } },
					directives: [],
					loc: { start: 2235, end: 2239 },
				},
			],
			loc: { start: 2206, end: 2241 },
		},
		{
			kind: "EnumTypeDefinition",
			name: { kind: "Name", value: "OrderSortBy", loc: { start: 2248, end: 2259 } },
			directives: [],
			values: [
				{
					kind: "EnumValueDefinition",
					name: { kind: "Name", value: "DEFAULT", loc: { start: 2264, end: 2271 } },
					directives: [],
					loc: { start: 2264, end: 2271 },
				},
				{
					kind: "EnumValueDefinition",
					name: { kind: "Name", value: "STATUS", loc: { start: 2274, end: 2280 } },
					directives: [],
					loc: { start: 2274, end: 2280 },
				},
				{
					kind: "EnumValueDefinition",
					name: { kind: "Name", value: "TOTAL", loc: { start: 2283, end: 2288 } },
					directives: [],
					loc: { start: 2283, end: 2288 },
				},
			],
			loc: { start: 2243, end: 2290 },
		},
		{
			kind: "EnumTypeDefinition",
			name: { kind: "Name", value: "ProductsSortBy", loc: { start: 2297, end: 2311 } },
			directives: [],
			values: [
				{
					kind: "EnumValueDefinition",
					name: { kind: "Name", value: "DEFAULT", loc: { start: 2316, end: 2323 } },
					directives: [],
					loc: { start: 2316, end: 2323 },
				},
				{
					kind: "EnumValueDefinition",
					name: { kind: "Name", value: "PRICE", loc: { start: 2326, end: 2331 } },
					directives: [],
					loc: { start: 2326, end: 2331 },
				},
				{
					kind: "EnumValueDefinition",
					name: { kind: "Name", value: "NAME", loc: { start: 2334, end: 2338 } },
					directives: [],
					loc: { start: 2334, end: 2338 },
				},
			],
			loc: { start: 2292, end: 2340 },
		},
		{
			kind: "ObjectTypeDefinition",
			name: { kind: "Name", value: "Query", loc: { start: 2346, end: 2351 } },
			interfaces: [],
			directives: [],
			fields: [],
			loc: { start: 2341, end: 2351 },
		},
		{
			kind: "ObjectTypeDefinition",
			name: { kind: "Name", value: "Mutation", loc: { start: 2358, end: 2366 } },
			interfaces: [],
			directives: [],
			fields: [],
			loc: { start: 2353, end: 2366 },
		},
	],
	loc: { start: 0, end: 2367 },
} as unknown as DocumentNode;
