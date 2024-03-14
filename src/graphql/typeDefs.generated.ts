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
							name: { kind: "Name", value: "ids", loc: { start: 416, end: 419 } },
							type: {
								kind: "ListType",
								type: {
									kind: "NonNullType",
									type: {
										kind: "NamedType",
										name: { kind: "Name", value: "ID", loc: { start: 422, end: 424 } },
										loc: { start: 422, end: 424 },
									},
									loc: { start: 422, end: 425 },
								},
								loc: { start: 421, end: 426 },
							},
							directives: [],
							loc: { start: 416, end: 426 },
						},
						{
							kind: "InputValueDefinition",
							name: { kind: "Name", value: "search", loc: { start: 428, end: 434 } },
							type: {
								kind: "NamedType",
								name: { kind: "Name", value: "String", loc: { start: 436, end: 442 } },
								loc: { start: 436, end: 442 },
							},
							directives: [],
							loc: { start: 428, end: 442 },
						},
						{
							kind: "InputValueDefinition",
							name: { kind: "Name", value: "take", loc: { start: 444, end: 448 } },
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
						{
							kind: "InputValueDefinition",
							name: { kind: "Name", value: "skip", loc: { start: 456, end: 460 } },
							type: {
								kind: "NonNullType",
								type: {
									kind: "NamedType",
									name: { kind: "Name", value: "Int", loc: { start: 462, end: 465 } },
									loc: { start: 462, end: 465 },
								},
								loc: { start: 462, end: 466 },
							},
							directives: [],
							loc: { start: 456, end: 466 },
						},
					],
					type: {
						kind: "NonNullType",
						type: {
							kind: "NamedType",
							name: { kind: "Name", value: "ProductList", loc: { start: 469, end: 480 } },
							loc: { start: 469, end: 480 },
						},
						loc: { start: 469, end: 481 },
					},
					directives: [],
					loc: { start: 342, end: 481 },
				},
				{
					kind: "FieldDefinition",
					name: { kind: "Name", value: "reviews", loc: { start: 484, end: 491 } },
					arguments: [
						{
							kind: "InputValueDefinition",
							name: { kind: "Name", value: "productId", loc: { start: 492, end: 501 } },
							type: {
								kind: "NonNullType",
								type: {
									kind: "NamedType",
									name: { kind: "Name", value: "ID", loc: { start: 503, end: 505 } },
									loc: { start: 503, end: 505 },
								},
								loc: { start: 503, end: 506 },
							},
							directives: [],
							loc: { start: 492, end: 506 },
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
									name: { kind: "Name", value: "Review", loc: { start: 510, end: 516 } },
									loc: { start: 510, end: 516 },
								},
								loc: { start: 510, end: 517 },
							},
							loc: { start: 509, end: 518 },
						},
						loc: { start: 509, end: 519 },
					},
					directives: [],
					loc: { start: 484, end: 519 },
				},
			],
			loc: { start: 0, end: 521 },
		},
		{
			kind: "ObjectTypeExtension",
			name: { kind: "Name", value: "Mutation", loc: { start: 535, end: 543 } },
			interfaces: [],
			directives: [],
			fields: [
				{
					kind: "FieldDefinition",
					name: { kind: "Name", value: "createOrder", loc: { start: 548, end: 559 } },
					arguments: [],
					type: {
						kind: "NonNullType",
						type: {
							kind: "NamedType",
							name: { kind: "Name", value: "Order", loc: { start: 561, end: 566 } },
							loc: { start: 561, end: 566 },
						},
						loc: { start: 561, end: 567 },
					},
					directives: [],
					loc: { start: 548, end: 567 },
				},
				{
					kind: "FieldDefinition",
					name: { kind: "Name", value: "createOrderItem", loc: { start: 570, end: 585 } },
					arguments: [
						{
							kind: "InputValueDefinition",
							name: { kind: "Name", value: "orderId", loc: { start: 586, end: 593 } },
							type: {
								kind: "NonNullType",
								type: {
									kind: "NamedType",
									name: { kind: "Name", value: "ID", loc: { start: 595, end: 597 } },
									loc: { start: 595, end: 597 },
								},
								loc: { start: 595, end: 598 },
							},
							directives: [],
							loc: { start: 586, end: 598 },
						},
						{
							kind: "InputValueDefinition",
							name: { kind: "Name", value: "productId", loc: { start: 600, end: 609 } },
							type: {
								kind: "NonNullType",
								type: {
									kind: "NamedType",
									name: { kind: "Name", value: "ID", loc: { start: 611, end: 613 } },
									loc: { start: 611, end: 613 },
								},
								loc: { start: 611, end: 614 },
							},
							directives: [],
							loc: { start: 600, end: 614 },
						},
						{
							kind: "InputValueDefinition",
							name: { kind: "Name", value: "quantity", loc: { start: 616, end: 624 } },
							type: {
								kind: "NonNullType",
								type: {
									kind: "NamedType",
									name: { kind: "Name", value: "Int", loc: { start: 626, end: 629 } },
									loc: { start: 626, end: 629 },
								},
								loc: { start: 626, end: 630 },
							},
							directives: [],
							loc: { start: 616, end: 630 },
						},
					],
					type: {
						kind: "NonNullType",
						type: {
							kind: "NamedType",
							name: { kind: "Name", value: "Order", loc: { start: 633, end: 638 } },
							loc: { start: 633, end: 638 },
						},
						loc: { start: 633, end: 639 },
					},
					directives: [],
					loc: { start: 570, end: 639 },
				},
				{
					kind: "FieldDefinition",
					name: { kind: "Name", value: "updateOrderItem", loc: { start: 642, end: 657 } },
					arguments: [
						{
							kind: "InputValueDefinition",
							name: { kind: "Name", value: "orderId", loc: { start: 658, end: 665 } },
							type: {
								kind: "NonNullType",
								type: {
									kind: "NamedType",
									name: { kind: "Name", value: "ID", loc: { start: 667, end: 669 } },
									loc: { start: 667, end: 669 },
								},
								loc: { start: 667, end: 670 },
							},
							directives: [],
							loc: { start: 658, end: 670 },
						},
						{
							kind: "InputValueDefinition",
							name: { kind: "Name", value: "productId", loc: { start: 672, end: 681 } },
							type: {
								kind: "NonNullType",
								type: {
									kind: "NamedType",
									name: { kind: "Name", value: "ID", loc: { start: 683, end: 685 } },
									loc: { start: 683, end: 685 },
								},
								loc: { start: 683, end: 686 },
							},
							directives: [],
							loc: { start: 672, end: 686 },
						},
						{
							kind: "InputValueDefinition",
							name: { kind: "Name", value: "quantity", loc: { start: 688, end: 696 } },
							type: {
								kind: "NonNullType",
								type: {
									kind: "NamedType",
									name: { kind: "Name", value: "Int", loc: { start: 698, end: 701 } },
									loc: { start: 698, end: 701 },
								},
								loc: { start: 698, end: 702 },
							},
							directives: [],
							loc: { start: 688, end: 702 },
						},
					],
					type: {
						kind: "NonNullType",
						type: {
							kind: "NamedType",
							name: { kind: "Name", value: "Order", loc: { start: 705, end: 710 } },
							loc: { start: 705, end: 710 },
						},
						loc: { start: 705, end: 711 },
					},
					directives: [],
					loc: { start: 642, end: 711 },
				},
				{
					kind: "FieldDefinition",
					name: { kind: "Name", value: "removeOrderItem", loc: { start: 714, end: 729 } },
					arguments: [
						{
							kind: "InputValueDefinition",
							name: { kind: "Name", value: "orderId", loc: { start: 730, end: 737 } },
							type: {
								kind: "NonNullType",
								type: {
									kind: "NamedType",
									name: { kind: "Name", value: "ID", loc: { start: 739, end: 741 } },
									loc: { start: 739, end: 741 },
								},
								loc: { start: 739, end: 742 },
							},
							directives: [],
							loc: { start: 730, end: 742 },
						},
						{
							kind: "InputValueDefinition",
							name: { kind: "Name", value: "productId", loc: { start: 744, end: 753 } },
							type: {
								kind: "NonNullType",
								type: {
									kind: "NamedType",
									name: { kind: "Name", value: "ID", loc: { start: 755, end: 757 } },
									loc: { start: 755, end: 757 },
								},
								loc: { start: 755, end: 758 },
							},
							directives: [],
							loc: { start: 744, end: 758 },
						},
					],
					type: {
						kind: "NonNullType",
						type: {
							kind: "NamedType",
							name: { kind: "Name", value: "Order", loc: { start: 761, end: 766 } },
							loc: { start: 761, end: 766 },
						},
						loc: { start: 761, end: 767 },
					},
					directives: [],
					loc: { start: 714, end: 767 },
				},
				{
					kind: "FieldDefinition",
					name: { kind: "Name", value: "placeOrder", loc: { start: 770, end: 780 } },
					arguments: [
						{
							kind: "InputValueDefinition",
							name: { kind: "Name", value: "orderId", loc: { start: 781, end: 788 } },
							type: {
								kind: "NonNullType",
								type: {
									kind: "NamedType",
									name: { kind: "Name", value: "ID", loc: { start: 790, end: 792 } },
									loc: { start: 790, end: 792 },
								},
								loc: { start: 790, end: 793 },
							},
							directives: [],
							loc: { start: 781, end: 793 },
						},
						{
							kind: "InputValueDefinition",
							name: { kind: "Name", value: "email", loc: { start: 795, end: 800 } },
							type: {
								kind: "NonNullType",
								type: {
									kind: "NamedType",
									name: { kind: "Name", value: "String", loc: { start: 802, end: 808 } },
									loc: { start: 802, end: 808 },
								},
								loc: { start: 802, end: 809 },
							},
							directives: [],
							loc: { start: 795, end: 809 },
						},
						{
							kind: "InputValueDefinition",
							name: { kind: "Name", value: "userId", loc: { start: 811, end: 817 } },
							type: {
								kind: "NamedType",
								name: { kind: "Name", value: "ID", loc: { start: 819, end: 821 } },
								loc: { start: 819, end: 821 },
							},
							directives: [],
							loc: { start: 811, end: 821 },
						},
						{
							kind: "InputValueDefinition",
							name: { kind: "Name", value: "sessionId", loc: { start: 823, end: 832 } },
							type: {
								kind: "NamedType",
								name: { kind: "Name", value: "String", loc: { start: 834, end: 840 } },
								loc: { start: 834, end: 840 },
							},
							directives: [],
							loc: { start: 823, end: 840 },
						},
						{
							kind: "InputValueDefinition",
							name: { kind: "Name", value: "totalAmount", loc: { start: 842, end: 853 } },
							type: {
								kind: "NonNullType",
								type: {
									kind: "NamedType",
									name: { kind: "Name", value: "Int", loc: { start: 855, end: 858 } },
									loc: { start: 855, end: 858 },
								},
								loc: { start: 855, end: 859 },
							},
							directives: [],
							loc: { start: 842, end: 859 },
						},
					],
					type: {
						kind: "NonNullType",
						type: {
							kind: "NamedType",
							name: { kind: "Name", value: "Order", loc: { start: 862, end: 867 } },
							loc: { start: 862, end: 867 },
						},
						loc: { start: 862, end: 868 },
					},
					directives: [],
					loc: { start: 770, end: 868 },
				},
				{
					kind: "FieldDefinition",
					name: { kind: "Name", value: "createReview", loc: { start: 871, end: 883 } },
					arguments: [
						{
							kind: "InputValueDefinition",
							name: { kind: "Name", value: "productId", loc: { start: 884, end: 893 } },
							type: {
								kind: "NonNullType",
								type: {
									kind: "NamedType",
									name: { kind: "Name", value: "ID", loc: { start: 895, end: 897 } },
									loc: { start: 895, end: 897 },
								},
								loc: { start: 895, end: 898 },
							},
							directives: [],
							loc: { start: 884, end: 898 },
						},
						{
							kind: "InputValueDefinition",
							name: { kind: "Name", value: "headline", loc: { start: 900, end: 908 } },
							type: {
								kind: "NonNullType",
								type: {
									kind: "NamedType",
									name: { kind: "Name", value: "String", loc: { start: 910, end: 916 } },
									loc: { start: 910, end: 916 },
								},
								loc: { start: 910, end: 917 },
							},
							directives: [],
							loc: { start: 900, end: 917 },
						},
						{
							kind: "InputValueDefinition",
							name: { kind: "Name", value: "content", loc: { start: 919, end: 926 } },
							type: {
								kind: "NonNullType",
								type: {
									kind: "NamedType",
									name: { kind: "Name", value: "String", loc: { start: 928, end: 934 } },
									loc: { start: 928, end: 934 },
								},
								loc: { start: 928, end: 935 },
							},
							directives: [],
							loc: { start: 919, end: 935 },
						},
						{
							kind: "InputValueDefinition",
							name: { kind: "Name", value: "rating", loc: { start: 937, end: 943 } },
							type: {
								kind: "NonNullType",
								type: {
									kind: "NamedType",
									name: { kind: "Name", value: "Int", loc: { start: 945, end: 948 } },
									loc: { start: 945, end: 948 },
								},
								loc: { start: 945, end: 949 },
							},
							directives: [],
							loc: { start: 937, end: 949 },
						},
						{
							kind: "InputValueDefinition",
							name: { kind: "Name", value: "name", loc: { start: 951, end: 955 } },
							type: {
								kind: "NonNullType",
								type: {
									kind: "NamedType",
									name: { kind: "Name", value: "String", loc: { start: 957, end: 963 } },
									loc: { start: 957, end: 963 },
								},
								loc: { start: 957, end: 964 },
							},
							directives: [],
							loc: { start: 951, end: 964 },
						},
						{
							kind: "InputValueDefinition",
							name: { kind: "Name", value: "email", loc: { start: 966, end: 971 } },
							type: {
								kind: "NonNullType",
								type: {
									kind: "NamedType",
									name: { kind: "Name", value: "String", loc: { start: 973, end: 979 } },
									loc: { start: 973, end: 979 },
								},
								loc: { start: 973, end: 980 },
							},
							directives: [],
							loc: { start: 966, end: 980 },
						},
					],
					type: {
						kind: "NonNullType",
						type: {
							kind: "NamedType",
							name: { kind: "Name", value: "Review", loc: { start: 983, end: 989 } },
							loc: { start: 983, end: 989 },
						},
						loc: { start: 983, end: 990 },
					},
					directives: [],
					loc: { start: 871, end: 990 },
				},
			],
			loc: { start: 523, end: 992 },
		},
		{
			kind: "ObjectTypeDefinition",
			name: { kind: "Name", value: "Category", loc: { start: 999, end: 1007 } },
			interfaces: [],
			directives: [],
			fields: [
				{
					kind: "FieldDefinition",
					name: { kind: "Name", value: "id", loc: { start: 1012, end: 1014 } },
					arguments: [],
					type: {
						kind: "NonNullType",
						type: {
							kind: "NamedType",
							name: { kind: "Name", value: "ID", loc: { start: 1016, end: 1018 } },
							loc: { start: 1016, end: 1018 },
						},
						loc: { start: 1016, end: 1019 },
					},
					directives: [],
					loc: { start: 1012, end: 1019 },
				},
				{
					kind: "FieldDefinition",
					name: { kind: "Name", value: "name", loc: { start: 1022, end: 1026 } },
					arguments: [],
					type: {
						kind: "NonNullType",
						type: {
							kind: "NamedType",
							name: { kind: "Name", value: "String", loc: { start: 1028, end: 1034 } },
							loc: { start: 1028, end: 1034 },
						},
						loc: { start: 1028, end: 1035 },
					},
					directives: [],
					loc: { start: 1022, end: 1035 },
				},
				{
					kind: "FieldDefinition",
					name: { kind: "Name", value: "slug", loc: { start: 1038, end: 1042 } },
					arguments: [],
					type: {
						kind: "NonNullType",
						type: {
							kind: "NamedType",
							name: { kind: "Name", value: "String", loc: { start: 1044, end: 1050 } },
							loc: { start: 1044, end: 1050 },
						},
						loc: { start: 1044, end: 1051 },
					},
					directives: [],
					loc: { start: 1038, end: 1051 },
				},
				{
					kind: "FieldDefinition",
					name: { kind: "Name", value: "description", loc: { start: 1054, end: 1065 } },
					arguments: [],
					type: {
						kind: "NonNullType",
						type: {
							kind: "NamedType",
							name: { kind: "Name", value: "String", loc: { start: 1067, end: 1073 } },
							loc: { start: 1067, end: 1073 },
						},
						loc: { start: 1067, end: 1074 },
					},
					directives: [],
					loc: { start: 1054, end: 1074 },
				},
				{
					kind: "FieldDefinition",
					name: { kind: "Name", value: "products", loc: { start: 1077, end: 1085 } },
					arguments: [
						{
							kind: "InputValueDefinition",
							name: { kind: "Name", value: "take", loc: { start: 1086, end: 1090 } },
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
						{
							kind: "InputValueDefinition",
							name: { kind: "Name", value: "skip", loc: { start: 1098, end: 1102 } },
							type: {
								kind: "NonNullType",
								type: {
									kind: "NamedType",
									name: { kind: "Name", value: "Int", loc: { start: 1104, end: 1107 } },
									loc: { start: 1104, end: 1107 },
								},
								loc: { start: 1104, end: 1108 },
							},
							directives: [],
							loc: { start: 1098, end: 1108 },
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
									name: { kind: "Name", value: "Product", loc: { start: 1112, end: 1119 } },
									loc: { start: 1112, end: 1119 },
								},
								loc: { start: 1112, end: 1120 },
							},
							loc: { start: 1111, end: 1121 },
						},
						loc: { start: 1111, end: 1122 },
					},
					directives: [],
					loc: { start: 1077, end: 1122 },
				},
			],
			loc: { start: 994, end: 1124 },
		},
		{
			kind: "ObjectTypeDefinition",
			name: { kind: "Name", value: "CategoryList", loc: { start: 1131, end: 1143 } },
			interfaces: [],
			directives: [],
			fields: [
				{
					kind: "FieldDefinition",
					name: { kind: "Name", value: "data", loc: { start: 1148, end: 1152 } },
					arguments: [],
					type: {
						kind: "NonNullType",
						type: {
							kind: "ListType",
							type: {
								kind: "NonNullType",
								type: {
									kind: "NamedType",
									name: { kind: "Name", value: "Category", loc: { start: 1155, end: 1163 } },
									loc: { start: 1155, end: 1163 },
								},
								loc: { start: 1155, end: 1164 },
							},
							loc: { start: 1154, end: 1165 },
						},
						loc: { start: 1154, end: 1166 },
					},
					directives: [],
					loc: { start: 1148, end: 1166 },
				},
				{
					kind: "FieldDefinition",
					name: { kind: "Name", value: "meta", loc: { start: 1169, end: 1173 } },
					arguments: [],
					type: {
						kind: "NonNullType",
						type: {
							kind: "NamedType",
							name: { kind: "Name", value: "Meta", loc: { start: 1175, end: 1179 } },
							loc: { start: 1175, end: 1179 },
						},
						loc: { start: 1175, end: 1180 },
					},
					directives: [],
					loc: { start: 1169, end: 1180 },
				},
			],
			loc: { start: 1126, end: 1182 },
		},
		{
			kind: "ObjectTypeDefinition",
			name: { kind: "Name", value: "Collection", loc: { start: 1189, end: 1199 } },
			interfaces: [],
			directives: [],
			fields: [
				{
					kind: "FieldDefinition",
					name: { kind: "Name", value: "id", loc: { start: 1204, end: 1206 } },
					arguments: [],
					type: {
						kind: "NonNullType",
						type: {
							kind: "NamedType",
							name: { kind: "Name", value: "ID", loc: { start: 1208, end: 1210 } },
							loc: { start: 1208, end: 1210 },
						},
						loc: { start: 1208, end: 1211 },
					},
					directives: [],
					loc: { start: 1204, end: 1211 },
				},
				{
					kind: "FieldDefinition",
					name: { kind: "Name", value: "name", loc: { start: 1214, end: 1218 } },
					arguments: [],
					type: {
						kind: "NonNullType",
						type: {
							kind: "NamedType",
							name: { kind: "Name", value: "String", loc: { start: 1220, end: 1226 } },
							loc: { start: 1220, end: 1226 },
						},
						loc: { start: 1220, end: 1227 },
					},
					directives: [],
					loc: { start: 1214, end: 1227 },
				},
				{
					kind: "FieldDefinition",
					name: { kind: "Name", value: "slug", loc: { start: 1230, end: 1234 } },
					arguments: [],
					type: {
						kind: "NonNullType",
						type: {
							kind: "NamedType",
							name: { kind: "Name", value: "String", loc: { start: 1236, end: 1242 } },
							loc: { start: 1236, end: 1242 },
						},
						loc: { start: 1236, end: 1243 },
					},
					directives: [],
					loc: { start: 1230, end: 1243 },
				},
				{
					kind: "FieldDefinition",
					name: { kind: "Name", value: "description", loc: { start: 1246, end: 1257 } },
					arguments: [],
					type: {
						kind: "NonNullType",
						type: {
							kind: "NamedType",
							name: { kind: "Name", value: "String", loc: { start: 1259, end: 1265 } },
							loc: { start: 1259, end: 1265 },
						},
						loc: { start: 1259, end: 1266 },
					},
					directives: [],
					loc: { start: 1246, end: 1266 },
				},
				{
					kind: "FieldDefinition",
					name: { kind: "Name", value: "products", loc: { start: 1269, end: 1277 } },
					arguments: [
						{
							kind: "InputValueDefinition",
							name: { kind: "Name", value: "take", loc: { start: 1278, end: 1282 } },
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
						{
							kind: "InputValueDefinition",
							name: { kind: "Name", value: "skip", loc: { start: 1290, end: 1294 } },
							type: {
								kind: "NonNullType",
								type: {
									kind: "NamedType",
									name: { kind: "Name", value: "Int", loc: { start: 1296, end: 1299 } },
									loc: { start: 1296, end: 1299 },
								},
								loc: { start: 1296, end: 1300 },
							},
							directives: [],
							loc: { start: 1290, end: 1300 },
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
									name: { kind: "Name", value: "Product", loc: { start: 1304, end: 1311 } },
									loc: { start: 1304, end: 1311 },
								},
								loc: { start: 1304, end: 1312 },
							},
							loc: { start: 1303, end: 1313 },
						},
						loc: { start: 1303, end: 1314 },
					},
					directives: [],
					loc: { start: 1269, end: 1314 },
				},
			],
			loc: { start: 1184, end: 1316 },
		},
		{
			kind: "ObjectTypeDefinition",
			name: { kind: "Name", value: "CollectionList", loc: { start: 1323, end: 1337 } },
			interfaces: [],
			directives: [],
			fields: [
				{
					kind: "FieldDefinition",
					name: { kind: "Name", value: "data", loc: { start: 1342, end: 1346 } },
					arguments: [],
					type: {
						kind: "NonNullType",
						type: {
							kind: "ListType",
							type: {
								kind: "NonNullType",
								type: {
									kind: "NamedType",
									name: { kind: "Name", value: "Collection", loc: { start: 1349, end: 1359 } },
									loc: { start: 1349, end: 1359 },
								},
								loc: { start: 1349, end: 1360 },
							},
							loc: { start: 1348, end: 1361 },
						},
						loc: { start: 1348, end: 1362 },
					},
					directives: [],
					loc: { start: 1342, end: 1362 },
				},
				{
					kind: "FieldDefinition",
					name: { kind: "Name", value: "meta", loc: { start: 1365, end: 1369 } },
					arguments: [],
					type: {
						kind: "NonNullType",
						type: {
							kind: "NamedType",
							name: { kind: "Name", value: "Meta", loc: { start: 1371, end: 1375 } },
							loc: { start: 1371, end: 1375 },
						},
						loc: { start: 1371, end: 1376 },
					},
					directives: [],
					loc: { start: 1365, end: 1376 },
				},
			],
			loc: { start: 1318, end: 1378 },
		},
		{
			kind: "ObjectTypeDefinition",
			name: { kind: "Name", value: "Product", loc: { start: 1385, end: 1392 } },
			interfaces: [],
			directives: [],
			fields: [
				{
					kind: "FieldDefinition",
					name: { kind: "Name", value: "id", loc: { start: 1397, end: 1399 } },
					arguments: [],
					type: {
						kind: "NonNullType",
						type: {
							kind: "NamedType",
							name: { kind: "Name", value: "ID", loc: { start: 1401, end: 1403 } },
							loc: { start: 1401, end: 1403 },
						},
						loc: { start: 1401, end: 1404 },
					},
					directives: [],
					loc: { start: 1397, end: 1404 },
				},
				{
					kind: "FieldDefinition",
					name: { kind: "Name", value: "name", loc: { start: 1407, end: 1411 } },
					arguments: [],
					type: {
						kind: "NonNullType",
						type: {
							kind: "NamedType",
							name: { kind: "Name", value: "String", loc: { start: 1413, end: 1419 } },
							loc: { start: 1413, end: 1419 },
						},
						loc: { start: 1413, end: 1420 },
					},
					directives: [],
					loc: { start: 1407, end: 1420 },
				},
				{
					kind: "FieldDefinition",
					name: { kind: "Name", value: "slug", loc: { start: 1423, end: 1427 } },
					arguments: [],
					type: {
						kind: "NonNullType",
						type: {
							kind: "NamedType",
							name: { kind: "Name", value: "String", loc: { start: 1429, end: 1435 } },
							loc: { start: 1429, end: 1435 },
						},
						loc: { start: 1429, end: 1436 },
					},
					directives: [],
					loc: { start: 1423, end: 1436 },
				},
				{
					kind: "FieldDefinition",
					name: { kind: "Name", value: "description", loc: { start: 1439, end: 1450 } },
					arguments: [],
					type: {
						kind: "NonNullType",
						type: {
							kind: "NamedType",
							name: { kind: "Name", value: "String", loc: { start: 1452, end: 1458 } },
							loc: { start: 1452, end: 1458 },
						},
						loc: { start: 1452, end: 1459 },
					},
					directives: [],
					loc: { start: 1439, end: 1459 },
				},
				{
					kind: "FieldDefinition",
					name: { kind: "Name", value: "longDescription", loc: { start: 1462, end: 1477 } },
					arguments: [],
					type: {
						kind: "NonNullType",
						type: {
							kind: "NamedType",
							name: { kind: "Name", value: "String", loc: { start: 1479, end: 1485 } },
							loc: { start: 1479, end: 1485 },
						},
						loc: { start: 1479, end: 1486 },
					},
					directives: [],
					loc: { start: 1462, end: 1486 },
				},
				{
					kind: "FieldDefinition",
					name: { kind: "Name", value: "price", loc: { start: 1489, end: 1494 } },
					arguments: [],
					type: {
						kind: "NonNullType",
						type: {
							kind: "NamedType",
							name: { kind: "Name", value: "Int", loc: { start: 1496, end: 1499 } },
							loc: { start: 1496, end: 1499 },
						},
						loc: { start: 1496, end: 1500 },
					},
					directives: [],
					loc: { start: 1489, end: 1500 },
				},
				{
					kind: "FieldDefinition",
					name: { kind: "Name", value: "image", loc: { start: 1503, end: 1508 } },
					arguments: [],
					type: {
						kind: "NonNullType",
						type: {
							kind: "NamedType",
							name: { kind: "Name", value: "String", loc: { start: 1510, end: 1516 } },
							loc: { start: 1510, end: 1516 },
						},
						loc: { start: 1510, end: 1517 },
					},
					directives: [],
					loc: { start: 1503, end: 1517 },
				},
				{
					kind: "FieldDefinition",
					name: { kind: "Name", value: "status", loc: { start: 1520, end: 1526 } },
					arguments: [],
					type: {
						kind: "NonNullType",
						type: {
							kind: "NamedType",
							name: { kind: "Name", value: "String", loc: { start: 1528, end: 1534 } },
							loc: { start: 1528, end: 1534 },
						},
						loc: { start: 1528, end: 1535 },
					},
					directives: [],
					loc: { start: 1520, end: 1535 },
				},
				{
					kind: "FieldDefinition",
					name: { kind: "Name", value: "rating", loc: { start: 1538, end: 1544 } },
					arguments: [],
					type: {
						kind: "NonNullType",
						type: {
							kind: "NamedType",
							name: { kind: "Name", value: "Int", loc: { start: 1546, end: 1549 } },
							loc: { start: 1546, end: 1549 },
						},
						loc: { start: 1546, end: 1550 },
					},
					directives: [],
					loc: { start: 1538, end: 1550 },
				},
				{
					kind: "FieldDefinition",
					name: { kind: "Name", value: "categories", loc: { start: 1553, end: 1563 } },
					arguments: [],
					type: {
						kind: "NonNullType",
						type: {
							kind: "ListType",
							type: {
								kind: "NonNullType",
								type: {
									kind: "NamedType",
									name: { kind: "Name", value: "Category", loc: { start: 1566, end: 1574 } },
									loc: { start: 1566, end: 1574 },
								},
								loc: { start: 1566, end: 1575 },
							},
							loc: { start: 1565, end: 1576 },
						},
						loc: { start: 1565, end: 1577 },
					},
					directives: [],
					loc: { start: 1553, end: 1577 },
				},
				{
					kind: "FieldDefinition",
					name: { kind: "Name", value: "collections", loc: { start: 1580, end: 1591 } },
					arguments: [],
					type: {
						kind: "NonNullType",
						type: {
							kind: "ListType",
							type: {
								kind: "NonNullType",
								type: {
									kind: "NamedType",
									name: { kind: "Name", value: "Collection", loc: { start: 1594, end: 1604 } },
									loc: { start: 1594, end: 1604 },
								},
								loc: { start: 1594, end: 1605 },
							},
							loc: { start: 1593, end: 1606 },
						},
						loc: { start: 1593, end: 1607 },
					},
					directives: [],
					loc: { start: 1580, end: 1607 },
				},
			],
			loc: { start: 1380, end: 1609 },
		},
		{
			kind: "ObjectTypeDefinition",
			name: { kind: "Name", value: "ProductList", loc: { start: 1616, end: 1627 } },
			interfaces: [],
			directives: [],
			fields: [
				{
					kind: "FieldDefinition",
					name: { kind: "Name", value: "data", loc: { start: 1632, end: 1636 } },
					arguments: [],
					type: {
						kind: "NonNullType",
						type: {
							kind: "ListType",
							type: {
								kind: "NonNullType",
								type: {
									kind: "NamedType",
									name: { kind: "Name", value: "Product", loc: { start: 1639, end: 1646 } },
									loc: { start: 1639, end: 1646 },
								},
								loc: { start: 1639, end: 1647 },
							},
							loc: { start: 1638, end: 1648 },
						},
						loc: { start: 1638, end: 1649 },
					},
					directives: [],
					loc: { start: 1632, end: 1649 },
				},
				{
					kind: "FieldDefinition",
					name: { kind: "Name", value: "meta", loc: { start: 1652, end: 1656 } },
					arguments: [],
					type: {
						kind: "NonNullType",
						type: {
							kind: "NamedType",
							name: { kind: "Name", value: "Meta", loc: { start: 1658, end: 1662 } },
							loc: { start: 1658, end: 1662 },
						},
						loc: { start: 1658, end: 1663 },
					},
					directives: [],
					loc: { start: 1652, end: 1663 },
				},
			],
			loc: { start: 1611, end: 1665 },
		},
		{
			kind: "ObjectTypeDefinition",
			name: { kind: "Name", value: "Order", loc: { start: 1672, end: 1677 } },
			interfaces: [],
			directives: [],
			fields: [
				{
					kind: "FieldDefinition",
					name: { kind: "Name", value: "id", loc: { start: 1682, end: 1684 } },
					arguments: [],
					type: {
						kind: "NonNullType",
						type: {
							kind: "NamedType",
							name: { kind: "Name", value: "ID", loc: { start: 1686, end: 1688 } },
							loc: { start: 1686, end: 1688 },
						},
						loc: { start: 1686, end: 1689 },
					},
					directives: [],
					loc: { start: 1682, end: 1689 },
				},
				{
					kind: "FieldDefinition",
					name: { kind: "Name", value: "totalAmount", loc: { start: 1692, end: 1703 } },
					arguments: [],
					type: {
						kind: "NonNullType",
						type: {
							kind: "NamedType",
							name: { kind: "Name", value: "Int", loc: { start: 1705, end: 1708 } },
							loc: { start: 1705, end: 1708 },
						},
						loc: { start: 1705, end: 1709 },
					},
					directives: [],
					loc: { start: 1692, end: 1709 },
				},
				{
					kind: "FieldDefinition",
					name: { kind: "Name", value: "status", loc: { start: 1712, end: 1718 } },
					arguments: [],
					type: {
						kind: "NonNullType",
						type: {
							kind: "NamedType",
							name: { kind: "Name", value: "OrderStatus", loc: { start: 1720, end: 1731 } },
							loc: { start: 1720, end: 1731 },
						},
						loc: { start: 1720, end: 1732 },
					},
					directives: [],
					loc: { start: 1712, end: 1732 },
				},
				{
					kind: "FieldDefinition",
					name: { kind: "Name", value: "orderItems", loc: { start: 1735, end: 1745 } },
					arguments: [],
					type: {
						kind: "NonNullType",
						type: {
							kind: "ListType",
							type: {
								kind: "NonNullType",
								type: {
									kind: "NamedType",
									name: { kind: "Name", value: "OrderItem", loc: { start: 1748, end: 1757 } },
									loc: { start: 1748, end: 1757 },
								},
								loc: { start: 1748, end: 1758 },
							},
							loc: { start: 1747, end: 1759 },
						},
						loc: { start: 1747, end: 1760 },
					},
					directives: [],
					loc: { start: 1735, end: 1760 },
				},
				{
					kind: "FieldDefinition",
					name: { kind: "Name", value: "email", loc: { start: 1763, end: 1768 } },
					arguments: [],
					type: {
						kind: "NamedType",
						name: { kind: "Name", value: "String", loc: { start: 1770, end: 1776 } },
						loc: { start: 1770, end: 1776 },
					},
					directives: [],
					loc: { start: 1763, end: 1776 },
				},
				{
					kind: "FieldDefinition",
					name: { kind: "Name", value: "userId", loc: { start: 1779, end: 1785 } },
					arguments: [],
					type: {
						kind: "NamedType",
						name: { kind: "Name", value: "ID", loc: { start: 1787, end: 1789 } },
						loc: { start: 1787, end: 1789 },
					},
					directives: [],
					loc: { start: 1779, end: 1789 },
				},
				{
					kind: "FieldDefinition",
					name: { kind: "Name", value: "sessionId", loc: { start: 1792, end: 1801 } },
					arguments: [],
					type: {
						kind: "NamedType",
						name: { kind: "Name", value: "String", loc: { start: 1803, end: 1809 } },
						loc: { start: 1803, end: 1809 },
					},
					directives: [],
					loc: { start: 1792, end: 1809 },
				},
				{
					kind: "FieldDefinition",
					name: { kind: "Name", value: "createdAt", loc: { start: 1812, end: 1821 } },
					arguments: [],
					type: {
						kind: "NonNullType",
						type: {
							kind: "NamedType",
							name: { kind: "Name", value: "DateTime", loc: { start: 1823, end: 1831 } },
							loc: { start: 1823, end: 1831 },
						},
						loc: { start: 1823, end: 1832 },
					},
					directives: [],
					loc: { start: 1812, end: 1832 },
				},
				{
					kind: "FieldDefinition",
					name: { kind: "Name", value: "updatedAt", loc: { start: 1835, end: 1844 } },
					arguments: [],
					type: {
						kind: "NonNullType",
						type: {
							kind: "NamedType",
							name: { kind: "Name", value: "DateTime", loc: { start: 1846, end: 1854 } },
							loc: { start: 1846, end: 1854 },
						},
						loc: { start: 1846, end: 1855 },
					},
					directives: [],
					loc: { start: 1835, end: 1855 },
				},
			],
			loc: { start: 1667, end: 1857 },
		},
		{
			kind: "ObjectTypeDefinition",
			name: { kind: "Name", value: "OrderItem", loc: { start: 1864, end: 1873 } },
			interfaces: [],
			directives: [],
			fields: [
				{
					kind: "FieldDefinition",
					name: { kind: "Name", value: "id", loc: { start: 1878, end: 1880 } },
					arguments: [],
					type: {
						kind: "NonNullType",
						type: {
							kind: "NamedType",
							name: { kind: "Name", value: "ID", loc: { start: 1882, end: 1884 } },
							loc: { start: 1882, end: 1884 },
						},
						loc: { start: 1882, end: 1885 },
					},
					directives: [],
					loc: { start: 1878, end: 1885 },
				},
				{
					kind: "FieldDefinition",
					name: { kind: "Name", value: "quantity", loc: { start: 1888, end: 1896 } },
					arguments: [],
					type: {
						kind: "NonNullType",
						type: {
							kind: "NamedType",
							name: { kind: "Name", value: "Int", loc: { start: 1898, end: 1901 } },
							loc: { start: 1898, end: 1901 },
						},
						loc: { start: 1898, end: 1902 },
					},
					directives: [],
					loc: { start: 1888, end: 1902 },
				},
				{
					kind: "FieldDefinition",
					name: { kind: "Name", value: "product", loc: { start: 1905, end: 1912 } },
					arguments: [],
					type: {
						kind: "NonNullType",
						type: {
							kind: "NamedType",
							name: { kind: "Name", value: "Product", loc: { start: 1914, end: 1921 } },
							loc: { start: 1914, end: 1921 },
						},
						loc: { start: 1914, end: 1922 },
					},
					directives: [],
					loc: { start: 1905, end: 1922 },
				},
				{
					kind: "FieldDefinition",
					name: { kind: "Name", value: "productId", loc: { start: 1925, end: 1934 } },
					arguments: [],
					type: {
						kind: "NonNullType",
						type: {
							kind: "NamedType",
							name: { kind: "Name", value: "ID", loc: { start: 1936, end: 1938 } },
							loc: { start: 1936, end: 1938 },
						},
						loc: { start: 1936, end: 1939 },
					},
					directives: [],
					loc: { start: 1925, end: 1939 },
				},
				{
					kind: "FieldDefinition",
					name: { kind: "Name", value: "orderId", loc: { start: 1942, end: 1949 } },
					arguments: [],
					type: {
						kind: "NonNullType",
						type: {
							kind: "NamedType",
							name: { kind: "Name", value: "ID", loc: { start: 1951, end: 1953 } },
							loc: { start: 1951, end: 1953 },
						},
						loc: { start: 1951, end: 1954 },
					},
					directives: [],
					loc: { start: 1942, end: 1954 },
				},
			],
			loc: { start: 1859, end: 1956 },
		},
		{
			kind: "ObjectTypeDefinition",
			name: { kind: "Name", value: "Review", loc: { start: 1963, end: 1969 } },
			interfaces: [],
			directives: [],
			fields: [
				{
					kind: "FieldDefinition",
					name: { kind: "Name", value: "id", loc: { start: 1974, end: 1976 } },
					arguments: [],
					type: {
						kind: "NonNullType",
						type: {
							kind: "NamedType",
							name: { kind: "Name", value: "ID", loc: { start: 1978, end: 1980 } },
							loc: { start: 1978, end: 1980 },
						},
						loc: { start: 1978, end: 1981 },
					},
					directives: [],
					loc: { start: 1974, end: 1981 },
				},
				{
					kind: "FieldDefinition",
					name: { kind: "Name", value: "headline", loc: { start: 1984, end: 1992 } },
					arguments: [],
					type: {
						kind: "NonNullType",
						type: {
							kind: "NamedType",
							name: { kind: "Name", value: "String", loc: { start: 1994, end: 2000 } },
							loc: { start: 1994, end: 2000 },
						},
						loc: { start: 1994, end: 2001 },
					},
					directives: [],
					loc: { start: 1984, end: 2001 },
				},
				{
					kind: "FieldDefinition",
					name: { kind: "Name", value: "content", loc: { start: 2004, end: 2011 } },
					arguments: [],
					type: {
						kind: "NonNullType",
						type: {
							kind: "NamedType",
							name: { kind: "Name", value: "String", loc: { start: 2013, end: 2019 } },
							loc: { start: 2013, end: 2019 },
						},
						loc: { start: 2013, end: 2020 },
					},
					directives: [],
					loc: { start: 2004, end: 2020 },
				},
				{
					kind: "FieldDefinition",
					name: { kind: "Name", value: "rating", loc: { start: 2023, end: 2029 } },
					arguments: [],
					type: {
						kind: "NonNullType",
						type: {
							kind: "NamedType",
							name: { kind: "Name", value: "Int", loc: { start: 2031, end: 2034 } },
							loc: { start: 2031, end: 2034 },
						},
						loc: { start: 2031, end: 2035 },
					},
					directives: [],
					loc: { start: 2023, end: 2035 },
				},
				{
					kind: "FieldDefinition",
					name: { kind: "Name", value: "name", loc: { start: 2038, end: 2042 } },
					arguments: [],
					type: {
						kind: "NonNullType",
						type: {
							kind: "NamedType",
							name: { kind: "Name", value: "String", loc: { start: 2044, end: 2050 } },
							loc: { start: 2044, end: 2050 },
						},
						loc: { start: 2044, end: 2051 },
					},
					directives: [],
					loc: { start: 2038, end: 2051 },
				},
				{
					kind: "FieldDefinition",
					name: { kind: "Name", value: "email", loc: { start: 2054, end: 2059 } },
					arguments: [],
					type: {
						kind: "NonNullType",
						type: {
							kind: "NamedType",
							name: { kind: "Name", value: "String", loc: { start: 2061, end: 2067 } },
							loc: { start: 2061, end: 2067 },
						},
						loc: { start: 2061, end: 2068 },
					},
					directives: [],
					loc: { start: 2054, end: 2068 },
				},
				{
					kind: "FieldDefinition",
					name: { kind: "Name", value: "createdAt", loc: { start: 2071, end: 2080 } },
					arguments: [],
					type: {
						kind: "NonNullType",
						type: {
							kind: "NamedType",
							name: { kind: "Name", value: "DateTime", loc: { start: 2082, end: 2090 } },
							loc: { start: 2082, end: 2090 },
						},
						loc: { start: 2082, end: 2091 },
					},
					directives: [],
					loc: { start: 2071, end: 2091 },
				},
			],
			loc: { start: 1958, end: 2093 },
		},
		{
			kind: "ScalarTypeDefinition",
			name: { kind: "Name", value: "DateTime", loc: { start: 2102, end: 2110 } },
			directives: [],
			loc: { start: 2095, end: 2110 },
		},
		{
			kind: "ObjectTypeDefinition",
			name: { kind: "Name", value: "Meta", loc: { start: 2117, end: 2121 } },
			interfaces: [],
			directives: [],
			fields: [
				{
					kind: "FieldDefinition",
					name: { kind: "Name", value: "count", loc: { start: 2126, end: 2131 } },
					arguments: [],
					type: {
						kind: "NonNullType",
						type: {
							kind: "NamedType",
							name: { kind: "Name", value: "Int", loc: { start: 2133, end: 2136 } },
							loc: { start: 2133, end: 2136 },
						},
						loc: { start: 2133, end: 2137 },
					},
					directives: [],
					loc: { start: 2126, end: 2137 },
				},
				{
					kind: "FieldDefinition",
					name: { kind: "Name", value: "total", loc: { start: 2140, end: 2145 } },
					arguments: [],
					type: {
						kind: "NonNullType",
						type: {
							kind: "NamedType",
							name: { kind: "Name", value: "Int", loc: { start: 2147, end: 2150 } },
							loc: { start: 2147, end: 2150 },
						},
						loc: { start: 2147, end: 2151 },
					},
					directives: [],
					loc: { start: 2140, end: 2151 },
				},
			],
			loc: { start: 2112, end: 2153 },
		},
		{
			kind: "EnumTypeDefinition",
			name: { kind: "Name", value: "OrderStatus", loc: { start: 2160, end: 2171 } },
			directives: [],
			values: [
				{
					kind: "EnumValueDefinition",
					name: { kind: "Name", value: "PAID", loc: { start: 2176, end: 2180 } },
					directives: [],
					loc: { start: 2176, end: 2180 },
				},
				{
					kind: "EnumValueDefinition",
					name: { kind: "Name", value: "FULFILLED", loc: { start: 2183, end: 2192 } },
					directives: [],
					loc: { start: 2183, end: 2192 },
				},
				{
					kind: "EnumValueDefinition",
					name: { kind: "Name", value: "CREATED", loc: { start: 2195, end: 2202 } },
					directives: [],
					loc: { start: 2195, end: 2202 },
				},
				{
					kind: "EnumValueDefinition",
					name: { kind: "Name", value: "CANCELLED", loc: { start: 2205, end: 2214 } },
					directives: [],
					loc: { start: 2205, end: 2214 },
				},
			],
			loc: { start: 2155, end: 2216 },
		},
		{
			kind: "EnumTypeDefinition",
			name: { kind: "Name", value: "SortDirection", loc: { start: 2223, end: 2236 } },
			directives: [],
			values: [
				{
					kind: "EnumValueDefinition",
					name: { kind: "Name", value: "ASC", loc: { start: 2241, end: 2244 } },
					directives: [],
					loc: { start: 2241, end: 2244 },
				},
				{
					kind: "EnumValueDefinition",
					name: { kind: "Name", value: "DESC", loc: { start: 2247, end: 2251 } },
					directives: [],
					loc: { start: 2247, end: 2251 },
				},
			],
			loc: { start: 2218, end: 2253 },
		},
		{
			kind: "EnumTypeDefinition",
			name: { kind: "Name", value: "OrderSortBy", loc: { start: 2260, end: 2271 } },
			directives: [],
			values: [
				{
					kind: "EnumValueDefinition",
					name: { kind: "Name", value: "DEFAULT", loc: { start: 2276, end: 2283 } },
					directives: [],
					loc: { start: 2276, end: 2283 },
				},
				{
					kind: "EnumValueDefinition",
					name: { kind: "Name", value: "STATUS", loc: { start: 2286, end: 2292 } },
					directives: [],
					loc: { start: 2286, end: 2292 },
				},
				{
					kind: "EnumValueDefinition",
					name: { kind: "Name", value: "TOTAL", loc: { start: 2295, end: 2300 } },
					directives: [],
					loc: { start: 2295, end: 2300 },
				},
			],
			loc: { start: 2255, end: 2302 },
		},
		{
			kind: "EnumTypeDefinition",
			name: { kind: "Name", value: "ProductsSortBy", loc: { start: 2309, end: 2323 } },
			directives: [],
			values: [
				{
					kind: "EnumValueDefinition",
					name: { kind: "Name", value: "DEFAULT", loc: { start: 2328, end: 2335 } },
					directives: [],
					loc: { start: 2328, end: 2335 },
				},
				{
					kind: "EnumValueDefinition",
					name: { kind: "Name", value: "PRICE", loc: { start: 2338, end: 2343 } },
					directives: [],
					loc: { start: 2338, end: 2343 },
				},
				{
					kind: "EnumValueDefinition",
					name: { kind: "Name", value: "NAME", loc: { start: 2346, end: 2350 } },
					directives: [],
					loc: { start: 2346, end: 2350 },
				},
			],
			loc: { start: 2304, end: 2352 },
		},
		{
			kind: "ObjectTypeDefinition",
			name: { kind: "Name", value: "Query", loc: { start: 2358, end: 2363 } },
			interfaces: [],
			directives: [],
			fields: [],
			loc: { start: 2353, end: 2363 },
		},
		{
			kind: "ObjectTypeDefinition",
			name: { kind: "Name", value: "Mutation", loc: { start: 2370, end: 2378 } },
			interfaces: [],
			directives: [],
			fields: [],
			loc: { start: 2365, end: 2378 },
		},
	],
	loc: { start: 0, end: 2379 },
} as unknown as DocumentNode;
