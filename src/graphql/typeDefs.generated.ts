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
					name: { kind: "Name", value: "product", loc: { start: 267, end: 274 } },
					arguments: [
						{
							kind: "InputValueDefinition",
							name: { kind: "Name", value: "id", loc: { start: 275, end: 277 } },
							type: {
								kind: "NamedType",
								name: { kind: "Name", value: "ID", loc: { start: 279, end: 281 } },
								loc: { start: 279, end: 281 },
							},
							directives: [],
							loc: { start: 275, end: 281 },
						},
						{
							kind: "InputValueDefinition",
							name: { kind: "Name", value: "slug", loc: { start: 283, end: 287 } },
							type: {
								kind: "NamedType",
								name: { kind: "Name", value: "String", loc: { start: 289, end: 295 } },
								loc: { start: 289, end: 295 },
							},
							directives: [],
							loc: { start: 283, end: 295 },
						},
					],
					type: {
						kind: "NonNullType",
						type: {
							kind: "NamedType",
							name: { kind: "Name", value: "Product", loc: { start: 298, end: 305 } },
							loc: { start: 298, end: 305 },
						},
						loc: { start: 298, end: 306 },
					},
					directives: [],
					loc: { start: 267, end: 306 },
				},
				{
					kind: "FieldDefinition",
					name: { kind: "Name", value: "products", loc: { start: 309, end: 317 } },
					arguments: [
						{
							kind: "InputValueDefinition",
							name: { kind: "Name", value: "order", loc: { start: 318, end: 323 } },
							type: {
								kind: "NonNullType",
								type: {
									kind: "NamedType",
									name: { kind: "Name", value: "SortDirection", loc: { start: 325, end: 338 } },
									loc: { start: 325, end: 338 },
								},
								loc: { start: 325, end: 339 },
							},
							defaultValue: { kind: "EnumValue", value: "ASC", loc: { start: 342, end: 345 } },
							directives: [],
							loc: { start: 318, end: 345 },
						},
						{
							kind: "InputValueDefinition",
							name: { kind: "Name", value: "orderBy", loc: { start: 347, end: 354 } },
							type: {
								kind: "NonNullType",
								type: {
									kind: "NamedType",
									name: { kind: "Name", value: "ProductsSortBy", loc: { start: 356, end: 370 } },
									loc: { start: 356, end: 370 },
								},
								loc: { start: 356, end: 371 },
							},
							defaultValue: { kind: "EnumValue", value: "DEFAULT", loc: { start: 374, end: 381 } },
							directives: [],
							loc: { start: 347, end: 381 },
						},
						{
							kind: "InputValueDefinition",
							name: { kind: "Name", value: "search", loc: { start: 383, end: 389 } },
							type: {
								kind: "NamedType",
								name: { kind: "Name", value: "String", loc: { start: 391, end: 397 } },
								loc: { start: 391, end: 397 },
							},
							directives: [],
							loc: { start: 383, end: 397 },
						},
						{
							kind: "InputValueDefinition",
							name: { kind: "Name", value: "take", loc: { start: 399, end: 403 } },
							type: {
								kind: "NonNullType",
								type: {
									kind: "NamedType",
									name: { kind: "Name", value: "Int", loc: { start: 405, end: 408 } },
									loc: { start: 405, end: 408 },
								},
								loc: { start: 405, end: 409 },
							},
							directives: [],
							loc: { start: 399, end: 409 },
						},
						{
							kind: "InputValueDefinition",
							name: { kind: "Name", value: "skip", loc: { start: 411, end: 415 } },
							type: {
								kind: "NonNullType",
								type: {
									kind: "NamedType",
									name: { kind: "Name", value: "Int", loc: { start: 417, end: 420 } },
									loc: { start: 417, end: 420 },
								},
								loc: { start: 417, end: 421 },
							},
							directives: [],
							loc: { start: 411, end: 421 },
						},
					],
					type: {
						kind: "NonNullType",
						type: {
							kind: "NamedType",
							name: { kind: "Name", value: "ProductList", loc: { start: 424, end: 435 } },
							loc: { start: 424, end: 435 },
						},
						loc: { start: 424, end: 436 },
					},
					directives: [],
					loc: { start: 309, end: 436 },
				},
			],
			loc: { start: 0, end: 438 },
		},
		{
			kind: "ObjectTypeExtension",
			name: { kind: "Name", value: "Mutation", loc: { start: 452, end: 460 } },
			interfaces: [],
			directives: [],
			fields: [
				{
					kind: "FieldDefinition",
					name: { kind: "Name", value: "createOrder", loc: { start: 465, end: 476 } },
					arguments: [],
					type: {
						kind: "NonNullType",
						type: {
							kind: "NamedType",
							name: { kind: "Name", value: "Order", loc: { start: 478, end: 483 } },
							loc: { start: 478, end: 483 },
						},
						loc: { start: 478, end: 484 },
					},
					directives: [],
					loc: { start: 465, end: 484 },
				},
				{
					kind: "FieldDefinition",
					name: { kind: "Name", value: "createOrderItem", loc: { start: 487, end: 502 } },
					arguments: [
						{
							kind: "InputValueDefinition",
							name: { kind: "Name", value: "orderId", loc: { start: 503, end: 510 } },
							type: {
								kind: "NonNullType",
								type: {
									kind: "NamedType",
									name: { kind: "Name", value: "ID", loc: { start: 512, end: 514 } },
									loc: { start: 512, end: 514 },
								},
								loc: { start: 512, end: 515 },
							},
							directives: [],
							loc: { start: 503, end: 515 },
						},
						{
							kind: "InputValueDefinition",
							name: { kind: "Name", value: "productId", loc: { start: 517, end: 526 } },
							type: {
								kind: "NonNullType",
								type: {
									kind: "NamedType",
									name: { kind: "Name", value: "ID", loc: { start: 528, end: 530 } },
									loc: { start: 528, end: 530 },
								},
								loc: { start: 528, end: 531 },
							},
							directives: [],
							loc: { start: 517, end: 531 },
						},
						{
							kind: "InputValueDefinition",
							name: { kind: "Name", value: "quantity", loc: { start: 533, end: 541 } },
							type: {
								kind: "NonNullType",
								type: {
									kind: "NamedType",
									name: { kind: "Name", value: "Int", loc: { start: 543, end: 546 } },
									loc: { start: 543, end: 546 },
								},
								loc: { start: 543, end: 547 },
							},
							directives: [],
							loc: { start: 533, end: 547 },
						},
					],
					type: {
						kind: "NonNullType",
						type: {
							kind: "NamedType",
							name: { kind: "Name", value: "Order", loc: { start: 550, end: 555 } },
							loc: { start: 550, end: 555 },
						},
						loc: { start: 550, end: 556 },
					},
					directives: [],
					loc: { start: 487, end: 556 },
				},
				{
					kind: "FieldDefinition",
					name: { kind: "Name", value: "updateOrderItem", loc: { start: 559, end: 574 } },
					arguments: [
						{
							kind: "InputValueDefinition",
							name: { kind: "Name", value: "orderId", loc: { start: 575, end: 582 } },
							type: {
								kind: "NonNullType",
								type: {
									kind: "NamedType",
									name: { kind: "Name", value: "ID", loc: { start: 584, end: 586 } },
									loc: { start: 584, end: 586 },
								},
								loc: { start: 584, end: 587 },
							},
							directives: [],
							loc: { start: 575, end: 587 },
						},
						{
							kind: "InputValueDefinition",
							name: { kind: "Name", value: "productId", loc: { start: 589, end: 598 } },
							type: {
								kind: "NonNullType",
								type: {
									kind: "NamedType",
									name: { kind: "Name", value: "ID", loc: { start: 600, end: 602 } },
									loc: { start: 600, end: 602 },
								},
								loc: { start: 600, end: 603 },
							},
							directives: [],
							loc: { start: 589, end: 603 },
						},
						{
							kind: "InputValueDefinition",
							name: { kind: "Name", value: "quantity", loc: { start: 605, end: 613 } },
							type: {
								kind: "NonNullType",
								type: {
									kind: "NamedType",
									name: { kind: "Name", value: "Int", loc: { start: 615, end: 618 } },
									loc: { start: 615, end: 618 },
								},
								loc: { start: 615, end: 619 },
							},
							directives: [],
							loc: { start: 605, end: 619 },
						},
					],
					type: {
						kind: "NonNullType",
						type: {
							kind: "NamedType",
							name: { kind: "Name", value: "Order", loc: { start: 622, end: 627 } },
							loc: { start: 622, end: 627 },
						},
						loc: { start: 622, end: 628 },
					},
					directives: [],
					loc: { start: 559, end: 628 },
				},
				{
					kind: "FieldDefinition",
					name: { kind: "Name", value: "removeOrderItem", loc: { start: 631, end: 646 } },
					arguments: [
						{
							kind: "InputValueDefinition",
							name: { kind: "Name", value: "orderId", loc: { start: 647, end: 654 } },
							type: {
								kind: "NonNullType",
								type: {
									kind: "NamedType",
									name: { kind: "Name", value: "ID", loc: { start: 656, end: 658 } },
									loc: { start: 656, end: 658 },
								},
								loc: { start: 656, end: 659 },
							},
							directives: [],
							loc: { start: 647, end: 659 },
						},
						{
							kind: "InputValueDefinition",
							name: { kind: "Name", value: "productId", loc: { start: 661, end: 670 } },
							type: {
								kind: "NonNullType",
								type: {
									kind: "NamedType",
									name: { kind: "Name", value: "ID", loc: { start: 672, end: 674 } },
									loc: { start: 672, end: 674 },
								},
								loc: { start: 672, end: 675 },
							},
							directives: [],
							loc: { start: 661, end: 675 },
						},
					],
					type: {
						kind: "NonNullType",
						type: {
							kind: "NamedType",
							name: { kind: "Name", value: "Order", loc: { start: 678, end: 683 } },
							loc: { start: 678, end: 683 },
						},
						loc: { start: 678, end: 684 },
					},
					directives: [],
					loc: { start: 631, end: 684 },
				},
			],
			loc: { start: 440, end: 686 },
		},
		{
			kind: "ObjectTypeDefinition",
			name: { kind: "Name", value: "Category", loc: { start: 693, end: 701 } },
			interfaces: [],
			directives: [],
			fields: [
				{
					kind: "FieldDefinition",
					name: { kind: "Name", value: "id", loc: { start: 706, end: 708 } },
					arguments: [],
					type: {
						kind: "NonNullType",
						type: {
							kind: "NamedType",
							name: { kind: "Name", value: "ID", loc: { start: 710, end: 712 } },
							loc: { start: 710, end: 712 },
						},
						loc: { start: 710, end: 713 },
					},
					directives: [],
					loc: { start: 706, end: 713 },
				},
				{
					kind: "FieldDefinition",
					name: { kind: "Name", value: "name", loc: { start: 716, end: 720 } },
					arguments: [],
					type: {
						kind: "NonNullType",
						type: {
							kind: "NamedType",
							name: { kind: "Name", value: "String", loc: { start: 722, end: 728 } },
							loc: { start: 722, end: 728 },
						},
						loc: { start: 722, end: 729 },
					},
					directives: [],
					loc: { start: 716, end: 729 },
				},
				{
					kind: "FieldDefinition",
					name: { kind: "Name", value: "slug", loc: { start: 732, end: 736 } },
					arguments: [],
					type: {
						kind: "NonNullType",
						type: {
							kind: "NamedType",
							name: { kind: "Name", value: "String", loc: { start: 738, end: 744 } },
							loc: { start: 738, end: 744 },
						},
						loc: { start: 738, end: 745 },
					},
					directives: [],
					loc: { start: 732, end: 745 },
				},
				{
					kind: "FieldDefinition",
					name: { kind: "Name", value: "description", loc: { start: 748, end: 759 } },
					arguments: [],
					type: {
						kind: "NonNullType",
						type: {
							kind: "NamedType",
							name: { kind: "Name", value: "String", loc: { start: 761, end: 767 } },
							loc: { start: 761, end: 767 },
						},
						loc: { start: 761, end: 768 },
					},
					directives: [],
					loc: { start: 748, end: 768 },
				},
				{
					kind: "FieldDefinition",
					name: { kind: "Name", value: "products", loc: { start: 771, end: 779 } },
					arguments: [
						{
							kind: "InputValueDefinition",
							name: { kind: "Name", value: "take", loc: { start: 780, end: 784 } },
							type: {
								kind: "NonNullType",
								type: {
									kind: "NamedType",
									name: { kind: "Name", value: "Int", loc: { start: 786, end: 789 } },
									loc: { start: 786, end: 789 },
								},
								loc: { start: 786, end: 790 },
							},
							directives: [],
							loc: { start: 780, end: 790 },
						},
						{
							kind: "InputValueDefinition",
							name: { kind: "Name", value: "skip", loc: { start: 792, end: 796 } },
							type: {
								kind: "NonNullType",
								type: {
									kind: "NamedType",
									name: { kind: "Name", value: "Int", loc: { start: 798, end: 801 } },
									loc: { start: 798, end: 801 },
								},
								loc: { start: 798, end: 802 },
							},
							directives: [],
							loc: { start: 792, end: 802 },
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
									name: { kind: "Name", value: "Product", loc: { start: 806, end: 813 } },
									loc: { start: 806, end: 813 },
								},
								loc: { start: 806, end: 814 },
							},
							loc: { start: 805, end: 815 },
						},
						loc: { start: 805, end: 816 },
					},
					directives: [],
					loc: { start: 771, end: 816 },
				},
			],
			loc: { start: 688, end: 818 },
		},
		{
			kind: "ObjectTypeDefinition",
			name: { kind: "Name", value: "CategoryList", loc: { start: 825, end: 837 } },
			interfaces: [],
			directives: [],
			fields: [
				{
					kind: "FieldDefinition",
					name: { kind: "Name", value: "data", loc: { start: 842, end: 846 } },
					arguments: [],
					type: {
						kind: "NonNullType",
						type: {
							kind: "ListType",
							type: {
								kind: "NonNullType",
								type: {
									kind: "NamedType",
									name: { kind: "Name", value: "Category", loc: { start: 849, end: 857 } },
									loc: { start: 849, end: 857 },
								},
								loc: { start: 849, end: 858 },
							},
							loc: { start: 848, end: 859 },
						},
						loc: { start: 848, end: 860 },
					},
					directives: [],
					loc: { start: 842, end: 860 },
				},
				{
					kind: "FieldDefinition",
					name: { kind: "Name", value: "meta", loc: { start: 863, end: 867 } },
					arguments: [],
					type: {
						kind: "NonNullType",
						type: {
							kind: "NamedType",
							name: { kind: "Name", value: "Meta", loc: { start: 869, end: 873 } },
							loc: { start: 869, end: 873 },
						},
						loc: { start: 869, end: 874 },
					},
					directives: [],
					loc: { start: 863, end: 874 },
				},
			],
			loc: { start: 820, end: 876 },
		},
		{
			kind: "ObjectTypeDefinition",
			name: { kind: "Name", value: "Collection", loc: { start: 883, end: 893 } },
			interfaces: [],
			directives: [],
			fields: [
				{
					kind: "FieldDefinition",
					name: { kind: "Name", value: "id", loc: { start: 898, end: 900 } },
					arguments: [],
					type: {
						kind: "NonNullType",
						type: {
							kind: "NamedType",
							name: { kind: "Name", value: "ID", loc: { start: 902, end: 904 } },
							loc: { start: 902, end: 904 },
						},
						loc: { start: 902, end: 905 },
					},
					directives: [],
					loc: { start: 898, end: 905 },
				},
				{
					kind: "FieldDefinition",
					name: { kind: "Name", value: "name", loc: { start: 908, end: 912 } },
					arguments: [],
					type: {
						kind: "NonNullType",
						type: {
							kind: "NamedType",
							name: { kind: "Name", value: "String", loc: { start: 914, end: 920 } },
							loc: { start: 914, end: 920 },
						},
						loc: { start: 914, end: 921 },
					},
					directives: [],
					loc: { start: 908, end: 921 },
				},
				{
					kind: "FieldDefinition",
					name: { kind: "Name", value: "slug", loc: { start: 924, end: 928 } },
					arguments: [],
					type: {
						kind: "NonNullType",
						type: {
							kind: "NamedType",
							name: { kind: "Name", value: "String", loc: { start: 930, end: 936 } },
							loc: { start: 930, end: 936 },
						},
						loc: { start: 930, end: 937 },
					},
					directives: [],
					loc: { start: 924, end: 937 },
				},
				{
					kind: "FieldDefinition",
					name: { kind: "Name", value: "description", loc: { start: 940, end: 951 } },
					arguments: [],
					type: {
						kind: "NonNullType",
						type: {
							kind: "NamedType",
							name: { kind: "Name", value: "String", loc: { start: 953, end: 959 } },
							loc: { start: 953, end: 959 },
						},
						loc: { start: 953, end: 960 },
					},
					directives: [],
					loc: { start: 940, end: 960 },
				},
				{
					kind: "FieldDefinition",
					name: { kind: "Name", value: "products", loc: { start: 963, end: 971 } },
					arguments: [
						{
							kind: "InputValueDefinition",
							name: { kind: "Name", value: "take", loc: { start: 972, end: 976 } },
							type: {
								kind: "NonNullType",
								type: {
									kind: "NamedType",
									name: { kind: "Name", value: "Int", loc: { start: 978, end: 981 } },
									loc: { start: 978, end: 981 },
								},
								loc: { start: 978, end: 982 },
							},
							directives: [],
							loc: { start: 972, end: 982 },
						},
						{
							kind: "InputValueDefinition",
							name: { kind: "Name", value: "skip", loc: { start: 984, end: 988 } },
							type: {
								kind: "NonNullType",
								type: {
									kind: "NamedType",
									name: { kind: "Name", value: "Int", loc: { start: 990, end: 993 } },
									loc: { start: 990, end: 993 },
								},
								loc: { start: 990, end: 994 },
							},
							directives: [],
							loc: { start: 984, end: 994 },
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
									name: { kind: "Name", value: "Product", loc: { start: 998, end: 1005 } },
									loc: { start: 998, end: 1005 },
								},
								loc: { start: 998, end: 1006 },
							},
							loc: { start: 997, end: 1007 },
						},
						loc: { start: 997, end: 1008 },
					},
					directives: [],
					loc: { start: 963, end: 1008 },
				},
			],
			loc: { start: 878, end: 1010 },
		},
		{
			kind: "ObjectTypeDefinition",
			name: { kind: "Name", value: "CollectionList", loc: { start: 1017, end: 1031 } },
			interfaces: [],
			directives: [],
			fields: [
				{
					kind: "FieldDefinition",
					name: { kind: "Name", value: "data", loc: { start: 1036, end: 1040 } },
					arguments: [],
					type: {
						kind: "NonNullType",
						type: {
							kind: "ListType",
							type: {
								kind: "NonNullType",
								type: {
									kind: "NamedType",
									name: { kind: "Name", value: "Collection", loc: { start: 1043, end: 1053 } },
									loc: { start: 1043, end: 1053 },
								},
								loc: { start: 1043, end: 1054 },
							},
							loc: { start: 1042, end: 1055 },
						},
						loc: { start: 1042, end: 1056 },
					},
					directives: [],
					loc: { start: 1036, end: 1056 },
				},
				{
					kind: "FieldDefinition",
					name: { kind: "Name", value: "meta", loc: { start: 1059, end: 1063 } },
					arguments: [],
					type: {
						kind: "NonNullType",
						type: {
							kind: "NamedType",
							name: { kind: "Name", value: "Meta", loc: { start: 1065, end: 1069 } },
							loc: { start: 1065, end: 1069 },
						},
						loc: { start: 1065, end: 1070 },
					},
					directives: [],
					loc: { start: 1059, end: 1070 },
				},
			],
			loc: { start: 1012, end: 1072 },
		},
		{
			kind: "ObjectTypeDefinition",
			name: { kind: "Name", value: "Product", loc: { start: 1079, end: 1086 } },
			interfaces: [],
			directives: [],
			fields: [
				{
					kind: "FieldDefinition",
					name: { kind: "Name", value: "id", loc: { start: 1091, end: 1093 } },
					arguments: [],
					type: {
						kind: "NonNullType",
						type: {
							kind: "NamedType",
							name: { kind: "Name", value: "ID", loc: { start: 1095, end: 1097 } },
							loc: { start: 1095, end: 1097 },
						},
						loc: { start: 1095, end: 1098 },
					},
					directives: [],
					loc: { start: 1091, end: 1098 },
				},
				{
					kind: "FieldDefinition",
					name: { kind: "Name", value: "name", loc: { start: 1101, end: 1105 } },
					arguments: [],
					type: {
						kind: "NonNullType",
						type: {
							kind: "NamedType",
							name: { kind: "Name", value: "String", loc: { start: 1107, end: 1113 } },
							loc: { start: 1107, end: 1113 },
						},
						loc: { start: 1107, end: 1114 },
					},
					directives: [],
					loc: { start: 1101, end: 1114 },
				},
				{
					kind: "FieldDefinition",
					name: { kind: "Name", value: "slug", loc: { start: 1117, end: 1121 } },
					arguments: [],
					type: {
						kind: "NonNullType",
						type: {
							kind: "NamedType",
							name: { kind: "Name", value: "String", loc: { start: 1123, end: 1129 } },
							loc: { start: 1123, end: 1129 },
						},
						loc: { start: 1123, end: 1130 },
					},
					directives: [],
					loc: { start: 1117, end: 1130 },
				},
				{
					kind: "FieldDefinition",
					name: { kind: "Name", value: "description", loc: { start: 1133, end: 1144 } },
					arguments: [],
					type: {
						kind: "NonNullType",
						type: {
							kind: "NamedType",
							name: { kind: "Name", value: "String", loc: { start: 1146, end: 1152 } },
							loc: { start: 1146, end: 1152 },
						},
						loc: { start: 1146, end: 1153 },
					},
					directives: [],
					loc: { start: 1133, end: 1153 },
				},
				{
					kind: "FieldDefinition",
					name: { kind: "Name", value: "longDescription", loc: { start: 1156, end: 1171 } },
					arguments: [],
					type: {
						kind: "NonNullType",
						type: {
							kind: "NamedType",
							name: { kind: "Name", value: "String", loc: { start: 1173, end: 1179 } },
							loc: { start: 1173, end: 1179 },
						},
						loc: { start: 1173, end: 1180 },
					},
					directives: [],
					loc: { start: 1156, end: 1180 },
				},
				{
					kind: "FieldDefinition",
					name: { kind: "Name", value: "price", loc: { start: 1183, end: 1188 } },
					arguments: [],
					type: {
						kind: "NonNullType",
						type: {
							kind: "NamedType",
							name: { kind: "Name", value: "Int", loc: { start: 1190, end: 1193 } },
							loc: { start: 1190, end: 1193 },
						},
						loc: { start: 1190, end: 1194 },
					},
					directives: [],
					loc: { start: 1183, end: 1194 },
				},
				{
					kind: "FieldDefinition",
					name: { kind: "Name", value: "image", loc: { start: 1197, end: 1202 } },
					arguments: [],
					type: {
						kind: "NonNullType",
						type: {
							kind: "NamedType",
							name: { kind: "Name", value: "String", loc: { start: 1204, end: 1210 } },
							loc: { start: 1204, end: 1210 },
						},
						loc: { start: 1204, end: 1211 },
					},
					directives: [],
					loc: { start: 1197, end: 1211 },
				},
				{
					kind: "FieldDefinition",
					name: { kind: "Name", value: "status", loc: { start: 1214, end: 1220 } },
					arguments: [],
					type: {
						kind: "NonNullType",
						type: {
							kind: "NamedType",
							name: { kind: "Name", value: "String", loc: { start: 1222, end: 1228 } },
							loc: { start: 1222, end: 1228 },
						},
						loc: { start: 1222, end: 1229 },
					},
					directives: [],
					loc: { start: 1214, end: 1229 },
				},
				{
					kind: "FieldDefinition",
					name: { kind: "Name", value: "rating", loc: { start: 1232, end: 1238 } },
					arguments: [],
					type: {
						kind: "NonNullType",
						type: {
							kind: "NamedType",
							name: { kind: "Name", value: "Int", loc: { start: 1240, end: 1243 } },
							loc: { start: 1240, end: 1243 },
						},
						loc: { start: 1240, end: 1244 },
					},
					directives: [],
					loc: { start: 1232, end: 1244 },
				},
				{
					kind: "FieldDefinition",
					name: { kind: "Name", value: "categories", loc: { start: 1247, end: 1257 } },
					arguments: [],
					type: {
						kind: "NonNullType",
						type: {
							kind: "ListType",
							type: {
								kind: "NonNullType",
								type: {
									kind: "NamedType",
									name: { kind: "Name", value: "Category", loc: { start: 1260, end: 1268 } },
									loc: { start: 1260, end: 1268 },
								},
								loc: { start: 1260, end: 1269 },
							},
							loc: { start: 1259, end: 1270 },
						},
						loc: { start: 1259, end: 1271 },
					},
					directives: [],
					loc: { start: 1247, end: 1271 },
				},
				{
					kind: "FieldDefinition",
					name: { kind: "Name", value: "collections", loc: { start: 1274, end: 1285 } },
					arguments: [],
					type: {
						kind: "NonNullType",
						type: {
							kind: "ListType",
							type: {
								kind: "NonNullType",
								type: {
									kind: "NamedType",
									name: { kind: "Name", value: "Collection", loc: { start: 1288, end: 1298 } },
									loc: { start: 1288, end: 1298 },
								},
								loc: { start: 1288, end: 1299 },
							},
							loc: { start: 1287, end: 1300 },
						},
						loc: { start: 1287, end: 1301 },
					},
					directives: [],
					loc: { start: 1274, end: 1301 },
				},
			],
			loc: { start: 1074, end: 1303 },
		},
		{
			kind: "ObjectTypeDefinition",
			name: { kind: "Name", value: "ProductList", loc: { start: 1310, end: 1321 } },
			interfaces: [],
			directives: [],
			fields: [
				{
					kind: "FieldDefinition",
					name: { kind: "Name", value: "data", loc: { start: 1326, end: 1330 } },
					arguments: [],
					type: {
						kind: "NonNullType",
						type: {
							kind: "ListType",
							type: {
								kind: "NonNullType",
								type: {
									kind: "NamedType",
									name: { kind: "Name", value: "Product", loc: { start: 1333, end: 1340 } },
									loc: { start: 1333, end: 1340 },
								},
								loc: { start: 1333, end: 1341 },
							},
							loc: { start: 1332, end: 1342 },
						},
						loc: { start: 1332, end: 1343 },
					},
					directives: [],
					loc: { start: 1326, end: 1343 },
				},
				{
					kind: "FieldDefinition",
					name: { kind: "Name", value: "meta", loc: { start: 1346, end: 1350 } },
					arguments: [],
					type: {
						kind: "NonNullType",
						type: {
							kind: "NamedType",
							name: { kind: "Name", value: "Meta", loc: { start: 1352, end: 1356 } },
							loc: { start: 1352, end: 1356 },
						},
						loc: { start: 1352, end: 1357 },
					},
					directives: [],
					loc: { start: 1346, end: 1357 },
				},
			],
			loc: { start: 1305, end: 1359 },
		},
		{
			kind: "ObjectTypeDefinition",
			name: { kind: "Name", value: "Order", loc: { start: 1366, end: 1371 } },
			interfaces: [],
			directives: [],
			fields: [
				{
					kind: "FieldDefinition",
					name: { kind: "Name", value: "id", loc: { start: 1376, end: 1378 } },
					arguments: [],
					type: {
						kind: "NonNullType",
						type: {
							kind: "NamedType",
							name: { kind: "Name", value: "ID", loc: { start: 1380, end: 1382 } },
							loc: { start: 1380, end: 1382 },
						},
						loc: { start: 1380, end: 1383 },
					},
					directives: [],
					loc: { start: 1376, end: 1383 },
				},
				{
					kind: "FieldDefinition",
					name: { kind: "Name", value: "totalAmount", loc: { start: 1386, end: 1397 } },
					arguments: [],
					type: {
						kind: "NonNullType",
						type: {
							kind: "NamedType",
							name: { kind: "Name", value: "Int", loc: { start: 1399, end: 1402 } },
							loc: { start: 1399, end: 1402 },
						},
						loc: { start: 1399, end: 1403 },
					},
					directives: [],
					loc: { start: 1386, end: 1403 },
				},
				{
					kind: "FieldDefinition",
					name: { kind: "Name", value: "status", loc: { start: 1406, end: 1412 } },
					arguments: [],
					type: {
						kind: "NonNullType",
						type: {
							kind: "NamedType",
							name: { kind: "Name", value: "OrderStatus", loc: { start: 1414, end: 1425 } },
							loc: { start: 1414, end: 1425 },
						},
						loc: { start: 1414, end: 1426 },
					},
					directives: [],
					loc: { start: 1406, end: 1426 },
				},
				{
					kind: "FieldDefinition",
					name: { kind: "Name", value: "orderItems", loc: { start: 1429, end: 1439 } },
					arguments: [],
					type: {
						kind: "NonNullType",
						type: {
							kind: "ListType",
							type: {
								kind: "NonNullType",
								type: {
									kind: "NamedType",
									name: { kind: "Name", value: "OrderItem", loc: { start: 1442, end: 1451 } },
									loc: { start: 1442, end: 1451 },
								},
								loc: { start: 1442, end: 1452 },
							},
							loc: { start: 1441, end: 1453 },
						},
						loc: { start: 1441, end: 1454 },
					},
					directives: [],
					loc: { start: 1429, end: 1454 },
				},
				{
					kind: "FieldDefinition",
					name: { kind: "Name", value: "lines", loc: { start: 1457, end: 1462 } },
					arguments: [],
					type: {
						kind: "NamedType",
						name: { kind: "Name", value: "String", loc: { start: 1464, end: 1470 } },
						loc: { start: 1464, end: 1470 },
					},
					directives: [],
					loc: { start: 1457, end: 1470 },
				},
				{
					kind: "FieldDefinition",
					name: { kind: "Name", value: "createdAt", loc: { start: 1473, end: 1482 } },
					arguments: [],
					type: {
						kind: "NonNullType",
						type: {
							kind: "NamedType",
							name: { kind: "Name", value: "DateTime", loc: { start: 1484, end: 1492 } },
							loc: { start: 1484, end: 1492 },
						},
						loc: { start: 1484, end: 1493 },
					},
					directives: [],
					loc: { start: 1473, end: 1493 },
				},
				{
					kind: "FieldDefinition",
					name: { kind: "Name", value: "updatedAt", loc: { start: 1496, end: 1505 } },
					arguments: [],
					type: {
						kind: "NonNullType",
						type: {
							kind: "NamedType",
							name: { kind: "Name", value: "DateTime", loc: { start: 1507, end: 1515 } },
							loc: { start: 1507, end: 1515 },
						},
						loc: { start: 1507, end: 1516 },
					},
					directives: [],
					loc: { start: 1496, end: 1516 },
				},
			],
			loc: { start: 1361, end: 1518 },
		},
		{
			kind: "ObjectTypeDefinition",
			name: { kind: "Name", value: "OrderItem", loc: { start: 1525, end: 1534 } },
			interfaces: [],
			directives: [],
			fields: [
				{
					kind: "FieldDefinition",
					name: { kind: "Name", value: "id", loc: { start: 1539, end: 1541 } },
					arguments: [],
					type: {
						kind: "NonNullType",
						type: {
							kind: "NamedType",
							name: { kind: "Name", value: "ID", loc: { start: 1543, end: 1545 } },
							loc: { start: 1543, end: 1545 },
						},
						loc: { start: 1543, end: 1546 },
					},
					directives: [],
					loc: { start: 1539, end: 1546 },
				},
				{
					kind: "FieldDefinition",
					name: { kind: "Name", value: "quantity", loc: { start: 1549, end: 1557 } },
					arguments: [],
					type: {
						kind: "NonNullType",
						type: {
							kind: "NamedType",
							name: { kind: "Name", value: "Int", loc: { start: 1559, end: 1562 } },
							loc: { start: 1559, end: 1562 },
						},
						loc: { start: 1559, end: 1563 },
					},
					directives: [],
					loc: { start: 1549, end: 1563 },
				},
				{
					kind: "FieldDefinition",
					name: { kind: "Name", value: "product", loc: { start: 1566, end: 1573 } },
					arguments: [],
					type: {
						kind: "NonNullType",
						type: {
							kind: "NamedType",
							name: { kind: "Name", value: "Product", loc: { start: 1575, end: 1582 } },
							loc: { start: 1575, end: 1582 },
						},
						loc: { start: 1575, end: 1583 },
					},
					directives: [],
					loc: { start: 1566, end: 1583 },
				},
				{
					kind: "FieldDefinition",
					name: { kind: "Name", value: "productId", loc: { start: 1586, end: 1595 } },
					arguments: [],
					type: {
						kind: "NonNullType",
						type: {
							kind: "NamedType",
							name: { kind: "Name", value: "ID", loc: { start: 1597, end: 1599 } },
							loc: { start: 1597, end: 1599 },
						},
						loc: { start: 1597, end: 1600 },
					},
					directives: [],
					loc: { start: 1586, end: 1600 },
				},
				{
					kind: "FieldDefinition",
					name: { kind: "Name", value: "orderId", loc: { start: 1603, end: 1610 } },
					arguments: [],
					type: {
						kind: "NonNullType",
						type: {
							kind: "NamedType",
							name: { kind: "Name", value: "ID", loc: { start: 1612, end: 1614 } },
							loc: { start: 1612, end: 1614 },
						},
						loc: { start: 1612, end: 1615 },
					},
					directives: [],
					loc: { start: 1603, end: 1615 },
				},
			],
			loc: { start: 1520, end: 1617 },
		},
		{
			kind: "ScalarTypeDefinition",
			name: { kind: "Name", value: "DateTime", loc: { start: 1626, end: 1634 } },
			directives: [],
			loc: { start: 1619, end: 1634 },
		},
		{
			kind: "ObjectTypeDefinition",
			name: { kind: "Name", value: "Meta", loc: { start: 1641, end: 1645 } },
			interfaces: [],
			directives: [],
			fields: [
				{
					kind: "FieldDefinition",
					name: { kind: "Name", value: "count", loc: { start: 1650, end: 1655 } },
					arguments: [],
					type: {
						kind: "NonNullType",
						type: {
							kind: "NamedType",
							name: { kind: "Name", value: "Int", loc: { start: 1657, end: 1660 } },
							loc: { start: 1657, end: 1660 },
						},
						loc: { start: 1657, end: 1661 },
					},
					directives: [],
					loc: { start: 1650, end: 1661 },
				},
				{
					kind: "FieldDefinition",
					name: { kind: "Name", value: "total", loc: { start: 1664, end: 1669 } },
					arguments: [],
					type: {
						kind: "NonNullType",
						type: {
							kind: "NamedType",
							name: { kind: "Name", value: "Int", loc: { start: 1671, end: 1674 } },
							loc: { start: 1671, end: 1674 },
						},
						loc: { start: 1671, end: 1675 },
					},
					directives: [],
					loc: { start: 1664, end: 1675 },
				},
			],
			loc: { start: 1636, end: 1677 },
		},
		{
			kind: "EnumTypeDefinition",
			name: { kind: "Name", value: "OrderStatus", loc: { start: 1684, end: 1695 } },
			directives: [],
			values: [
				{
					kind: "EnumValueDefinition",
					name: { kind: "Name", value: "PAID", loc: { start: 1700, end: 1704 } },
					directives: [],
					loc: { start: 1700, end: 1704 },
				},
				{
					kind: "EnumValueDefinition",
					name: { kind: "Name", value: "FULFILLED", loc: { start: 1707, end: 1716 } },
					directives: [],
					loc: { start: 1707, end: 1716 },
				},
				{
					kind: "EnumValueDefinition",
					name: { kind: "Name", value: "CREATED", loc: { start: 1719, end: 1726 } },
					directives: [],
					loc: { start: 1719, end: 1726 },
				},
				{
					kind: "EnumValueDefinition",
					name: { kind: "Name", value: "CANCELLED", loc: { start: 1729, end: 1738 } },
					directives: [],
					loc: { start: 1729, end: 1738 },
				},
			],
			loc: { start: 1679, end: 1740 },
		},
		{
			kind: "EnumTypeDefinition",
			name: { kind: "Name", value: "SortDirection", loc: { start: 1747, end: 1760 } },
			directives: [],
			values: [
				{
					kind: "EnumValueDefinition",
					name: { kind: "Name", value: "ASC", loc: { start: 1765, end: 1768 } },
					directives: [],
					loc: { start: 1765, end: 1768 },
				},
				{
					kind: "EnumValueDefinition",
					name: { kind: "Name", value: "DESC", loc: { start: 1771, end: 1775 } },
					directives: [],
					loc: { start: 1771, end: 1775 },
				},
			],
			loc: { start: 1742, end: 1777 },
		},
		{
			kind: "EnumTypeDefinition",
			name: { kind: "Name", value: "OrderSortBy", loc: { start: 1784, end: 1795 } },
			directives: [],
			values: [
				{
					kind: "EnumValueDefinition",
					name: { kind: "Name", value: "DEFAULT", loc: { start: 1800, end: 1807 } },
					directives: [],
					loc: { start: 1800, end: 1807 },
				},
				{
					kind: "EnumValueDefinition",
					name: { kind: "Name", value: "STATUS", loc: { start: 1810, end: 1816 } },
					directives: [],
					loc: { start: 1810, end: 1816 },
				},
				{
					kind: "EnumValueDefinition",
					name: { kind: "Name", value: "TOTAL", loc: { start: 1819, end: 1824 } },
					directives: [],
					loc: { start: 1819, end: 1824 },
				},
			],
			loc: { start: 1779, end: 1826 },
		},
		{
			kind: "EnumTypeDefinition",
			name: { kind: "Name", value: "ProductsSortBy", loc: { start: 1833, end: 1847 } },
			directives: [],
			values: [
				{
					kind: "EnumValueDefinition",
					name: { kind: "Name", value: "DEFAULT", loc: { start: 1852, end: 1859 } },
					directives: [],
					loc: { start: 1852, end: 1859 },
				},
				{
					kind: "EnumValueDefinition",
					name: { kind: "Name", value: "PRICE", loc: { start: 1862, end: 1867 } },
					directives: [],
					loc: { start: 1862, end: 1867 },
				},
				{
					kind: "EnumValueDefinition",
					name: { kind: "Name", value: "NAME", loc: { start: 1870, end: 1874 } },
					directives: [],
					loc: { start: 1870, end: 1874 },
				},
			],
			loc: { start: 1828, end: 1876 },
		},
		{
			kind: "ObjectTypeDefinition",
			name: { kind: "Name", value: "Query", loc: { start: 1882, end: 1887 } },
			interfaces: [],
			directives: [],
			fields: [],
			loc: { start: 1877, end: 1887 },
		},
		{
			kind: "ObjectTypeDefinition",
			name: { kind: "Name", value: "Mutation", loc: { start: 1894, end: 1902 } },
			interfaces: [],
			directives: [],
			fields: [],
			loc: { start: 1889, end: 1902 },
		},
	],
	loc: { start: 0, end: 1903 },
} as unknown as DocumentNode;
