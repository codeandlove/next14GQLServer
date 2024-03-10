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
				{
					kind: "FieldDefinition",
					name: { kind: "Name", value: "reviews", loc: { start: 439, end: 446 } },
					arguments: [
						{
							kind: "InputValueDefinition",
							name: { kind: "Name", value: "productId", loc: { start: 447, end: 456 } },
							type: {
								kind: "NonNullType",
								type: {
									kind: "NamedType",
									name: { kind: "Name", value: "ID", loc: { start: 458, end: 460 } },
									loc: { start: 458, end: 460 },
								},
								loc: { start: 458, end: 461 },
							},
							directives: [],
							loc: { start: 447, end: 461 },
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
									name: { kind: "Name", value: "Review", loc: { start: 465, end: 471 } },
									loc: { start: 465, end: 471 },
								},
								loc: { start: 465, end: 472 },
							},
							loc: { start: 464, end: 473 },
						},
						loc: { start: 464, end: 474 },
					},
					directives: [],
					loc: { start: 439, end: 474 },
				},
			],
			loc: { start: 0, end: 476 },
		},
		{
			kind: "ObjectTypeExtension",
			name: { kind: "Name", value: "Mutation", loc: { start: 490, end: 498 } },
			interfaces: [],
			directives: [],
			fields: [
				{
					kind: "FieldDefinition",
					name: { kind: "Name", value: "createOrder", loc: { start: 503, end: 514 } },
					arguments: [],
					type: {
						kind: "NonNullType",
						type: {
							kind: "NamedType",
							name: { kind: "Name", value: "Order", loc: { start: 516, end: 521 } },
							loc: { start: 516, end: 521 },
						},
						loc: { start: 516, end: 522 },
					},
					directives: [],
					loc: { start: 503, end: 522 },
				},
				{
					kind: "FieldDefinition",
					name: { kind: "Name", value: "createOrderItem", loc: { start: 525, end: 540 } },
					arguments: [
						{
							kind: "InputValueDefinition",
							name: { kind: "Name", value: "orderId", loc: { start: 541, end: 548 } },
							type: {
								kind: "NonNullType",
								type: {
									kind: "NamedType",
									name: { kind: "Name", value: "ID", loc: { start: 550, end: 552 } },
									loc: { start: 550, end: 552 },
								},
								loc: { start: 550, end: 553 },
							},
							directives: [],
							loc: { start: 541, end: 553 },
						},
						{
							kind: "InputValueDefinition",
							name: { kind: "Name", value: "productId", loc: { start: 555, end: 564 } },
							type: {
								kind: "NonNullType",
								type: {
									kind: "NamedType",
									name: { kind: "Name", value: "ID", loc: { start: 566, end: 568 } },
									loc: { start: 566, end: 568 },
								},
								loc: { start: 566, end: 569 },
							},
							directives: [],
							loc: { start: 555, end: 569 },
						},
						{
							kind: "InputValueDefinition",
							name: { kind: "Name", value: "quantity", loc: { start: 571, end: 579 } },
							type: {
								kind: "NonNullType",
								type: {
									kind: "NamedType",
									name: { kind: "Name", value: "Int", loc: { start: 581, end: 584 } },
									loc: { start: 581, end: 584 },
								},
								loc: { start: 581, end: 585 },
							},
							directives: [],
							loc: { start: 571, end: 585 },
						},
					],
					type: {
						kind: "NonNullType",
						type: {
							kind: "NamedType",
							name: { kind: "Name", value: "Order", loc: { start: 588, end: 593 } },
							loc: { start: 588, end: 593 },
						},
						loc: { start: 588, end: 594 },
					},
					directives: [],
					loc: { start: 525, end: 594 },
				},
				{
					kind: "FieldDefinition",
					name: { kind: "Name", value: "updateOrderItem", loc: { start: 597, end: 612 } },
					arguments: [
						{
							kind: "InputValueDefinition",
							name: { kind: "Name", value: "orderId", loc: { start: 613, end: 620 } },
							type: {
								kind: "NonNullType",
								type: {
									kind: "NamedType",
									name: { kind: "Name", value: "ID", loc: { start: 622, end: 624 } },
									loc: { start: 622, end: 624 },
								},
								loc: { start: 622, end: 625 },
							},
							directives: [],
							loc: { start: 613, end: 625 },
						},
						{
							kind: "InputValueDefinition",
							name: { kind: "Name", value: "productId", loc: { start: 627, end: 636 } },
							type: {
								kind: "NonNullType",
								type: {
									kind: "NamedType",
									name: { kind: "Name", value: "ID", loc: { start: 638, end: 640 } },
									loc: { start: 638, end: 640 },
								},
								loc: { start: 638, end: 641 },
							},
							directives: [],
							loc: { start: 627, end: 641 },
						},
						{
							kind: "InputValueDefinition",
							name: { kind: "Name", value: "quantity", loc: { start: 643, end: 651 } },
							type: {
								kind: "NonNullType",
								type: {
									kind: "NamedType",
									name: { kind: "Name", value: "Int", loc: { start: 653, end: 656 } },
									loc: { start: 653, end: 656 },
								},
								loc: { start: 653, end: 657 },
							},
							directives: [],
							loc: { start: 643, end: 657 },
						},
					],
					type: {
						kind: "NonNullType",
						type: {
							kind: "NamedType",
							name: { kind: "Name", value: "Order", loc: { start: 660, end: 665 } },
							loc: { start: 660, end: 665 },
						},
						loc: { start: 660, end: 666 },
					},
					directives: [],
					loc: { start: 597, end: 666 },
				},
				{
					kind: "FieldDefinition",
					name: { kind: "Name", value: "removeOrderItem", loc: { start: 669, end: 684 } },
					arguments: [
						{
							kind: "InputValueDefinition",
							name: { kind: "Name", value: "orderId", loc: { start: 685, end: 692 } },
							type: {
								kind: "NonNullType",
								type: {
									kind: "NamedType",
									name: { kind: "Name", value: "ID", loc: { start: 694, end: 696 } },
									loc: { start: 694, end: 696 },
								},
								loc: { start: 694, end: 697 },
							},
							directives: [],
							loc: { start: 685, end: 697 },
						},
						{
							kind: "InputValueDefinition",
							name: { kind: "Name", value: "productId", loc: { start: 699, end: 708 } },
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
							loc: { start: 699, end: 713 },
						},
					],
					type: {
						kind: "NonNullType",
						type: {
							kind: "NamedType",
							name: { kind: "Name", value: "Order", loc: { start: 716, end: 721 } },
							loc: { start: 716, end: 721 },
						},
						loc: { start: 716, end: 722 },
					},
					directives: [],
					loc: { start: 669, end: 722 },
				},
				{
					kind: "FieldDefinition",
					name: { kind: "Name", value: "createReview", loc: { start: 725, end: 737 } },
					arguments: [
						{
							kind: "InputValueDefinition",
							name: { kind: "Name", value: "productId", loc: { start: 738, end: 747 } },
							type: {
								kind: "NonNullType",
								type: {
									kind: "NamedType",
									name: { kind: "Name", value: "ID", loc: { start: 749, end: 751 } },
									loc: { start: 749, end: 751 },
								},
								loc: { start: 749, end: 752 },
							},
							directives: [],
							loc: { start: 738, end: 752 },
						},
						{
							kind: "InputValueDefinition",
							name: { kind: "Name", value: "headline", loc: { start: 754, end: 762 } },
							type: {
								kind: "NonNullType",
								type: {
									kind: "NamedType",
									name: { kind: "Name", value: "String", loc: { start: 764, end: 770 } },
									loc: { start: 764, end: 770 },
								},
								loc: { start: 764, end: 771 },
							},
							directives: [],
							loc: { start: 754, end: 771 },
						},
						{
							kind: "InputValueDefinition",
							name: { kind: "Name", value: "content", loc: { start: 773, end: 780 } },
							type: {
								kind: "NonNullType",
								type: {
									kind: "NamedType",
									name: { kind: "Name", value: "String", loc: { start: 782, end: 788 } },
									loc: { start: 782, end: 788 },
								},
								loc: { start: 782, end: 789 },
							},
							directives: [],
							loc: { start: 773, end: 789 },
						},
						{
							kind: "InputValueDefinition",
							name: { kind: "Name", value: "rating", loc: { start: 791, end: 797 } },
							type: {
								kind: "NonNullType",
								type: {
									kind: "NamedType",
									name: { kind: "Name", value: "Int", loc: { start: 799, end: 802 } },
									loc: { start: 799, end: 802 },
								},
								loc: { start: 799, end: 803 },
							},
							directives: [],
							loc: { start: 791, end: 803 },
						},
						{
							kind: "InputValueDefinition",
							name: { kind: "Name", value: "name", loc: { start: 805, end: 809 } },
							type: {
								kind: "NonNullType",
								type: {
									kind: "NamedType",
									name: { kind: "Name", value: "String", loc: { start: 811, end: 817 } },
									loc: { start: 811, end: 817 },
								},
								loc: { start: 811, end: 818 },
							},
							directives: [],
							loc: { start: 805, end: 818 },
						},
						{
							kind: "InputValueDefinition",
							name: { kind: "Name", value: "email", loc: { start: 820, end: 825 } },
							type: {
								kind: "NonNullType",
								type: {
									kind: "NamedType",
									name: { kind: "Name", value: "String", loc: { start: 827, end: 833 } },
									loc: { start: 827, end: 833 },
								},
								loc: { start: 827, end: 834 },
							},
							directives: [],
							loc: { start: 820, end: 834 },
						},
					],
					type: {
						kind: "NonNullType",
						type: {
							kind: "NamedType",
							name: { kind: "Name", value: "Review", loc: { start: 837, end: 843 } },
							loc: { start: 837, end: 843 },
						},
						loc: { start: 837, end: 844 },
					},
					directives: [],
					loc: { start: 725, end: 844 },
				},
			],
			loc: { start: 478, end: 846 },
		},
		{
			kind: "ObjectTypeDefinition",
			name: { kind: "Name", value: "Category", loc: { start: 853, end: 861 } },
			interfaces: [],
			directives: [],
			fields: [
				{
					kind: "FieldDefinition",
					name: { kind: "Name", value: "id", loc: { start: 866, end: 868 } },
					arguments: [],
					type: {
						kind: "NonNullType",
						type: {
							kind: "NamedType",
							name: { kind: "Name", value: "ID", loc: { start: 870, end: 872 } },
							loc: { start: 870, end: 872 },
						},
						loc: { start: 870, end: 873 },
					},
					directives: [],
					loc: { start: 866, end: 873 },
				},
				{
					kind: "FieldDefinition",
					name: { kind: "Name", value: "name", loc: { start: 876, end: 880 } },
					arguments: [],
					type: {
						kind: "NonNullType",
						type: {
							kind: "NamedType",
							name: { kind: "Name", value: "String", loc: { start: 882, end: 888 } },
							loc: { start: 882, end: 888 },
						},
						loc: { start: 882, end: 889 },
					},
					directives: [],
					loc: { start: 876, end: 889 },
				},
				{
					kind: "FieldDefinition",
					name: { kind: "Name", value: "slug", loc: { start: 892, end: 896 } },
					arguments: [],
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
					loc: { start: 892, end: 905 },
				},
				{
					kind: "FieldDefinition",
					name: { kind: "Name", value: "description", loc: { start: 908, end: 919 } },
					arguments: [],
					type: {
						kind: "NonNullType",
						type: {
							kind: "NamedType",
							name: { kind: "Name", value: "String", loc: { start: 921, end: 927 } },
							loc: { start: 921, end: 927 },
						},
						loc: { start: 921, end: 928 },
					},
					directives: [],
					loc: { start: 908, end: 928 },
				},
				{
					kind: "FieldDefinition",
					name: { kind: "Name", value: "products", loc: { start: 931, end: 939 } },
					arguments: [
						{
							kind: "InputValueDefinition",
							name: { kind: "Name", value: "take", loc: { start: 940, end: 944 } },
							type: {
								kind: "NonNullType",
								type: {
									kind: "NamedType",
									name: { kind: "Name", value: "Int", loc: { start: 946, end: 949 } },
									loc: { start: 946, end: 949 },
								},
								loc: { start: 946, end: 950 },
							},
							directives: [],
							loc: { start: 940, end: 950 },
						},
						{
							kind: "InputValueDefinition",
							name: { kind: "Name", value: "skip", loc: { start: 952, end: 956 } },
							type: {
								kind: "NonNullType",
								type: {
									kind: "NamedType",
									name: { kind: "Name", value: "Int", loc: { start: 958, end: 961 } },
									loc: { start: 958, end: 961 },
								},
								loc: { start: 958, end: 962 },
							},
							directives: [],
							loc: { start: 952, end: 962 },
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
									name: { kind: "Name", value: "Product", loc: { start: 966, end: 973 } },
									loc: { start: 966, end: 973 },
								},
								loc: { start: 966, end: 974 },
							},
							loc: { start: 965, end: 975 },
						},
						loc: { start: 965, end: 976 },
					},
					directives: [],
					loc: { start: 931, end: 976 },
				},
			],
			loc: { start: 848, end: 978 },
		},
		{
			kind: "ObjectTypeDefinition",
			name: { kind: "Name", value: "CategoryList", loc: { start: 985, end: 997 } },
			interfaces: [],
			directives: [],
			fields: [
				{
					kind: "FieldDefinition",
					name: { kind: "Name", value: "data", loc: { start: 1002, end: 1006 } },
					arguments: [],
					type: {
						kind: "NonNullType",
						type: {
							kind: "ListType",
							type: {
								kind: "NonNullType",
								type: {
									kind: "NamedType",
									name: { kind: "Name", value: "Category", loc: { start: 1009, end: 1017 } },
									loc: { start: 1009, end: 1017 },
								},
								loc: { start: 1009, end: 1018 },
							},
							loc: { start: 1008, end: 1019 },
						},
						loc: { start: 1008, end: 1020 },
					},
					directives: [],
					loc: { start: 1002, end: 1020 },
				},
				{
					kind: "FieldDefinition",
					name: { kind: "Name", value: "meta", loc: { start: 1023, end: 1027 } },
					arguments: [],
					type: {
						kind: "NonNullType",
						type: {
							kind: "NamedType",
							name: { kind: "Name", value: "Meta", loc: { start: 1029, end: 1033 } },
							loc: { start: 1029, end: 1033 },
						},
						loc: { start: 1029, end: 1034 },
					},
					directives: [],
					loc: { start: 1023, end: 1034 },
				},
			],
			loc: { start: 980, end: 1036 },
		},
		{
			kind: "ObjectTypeDefinition",
			name: { kind: "Name", value: "Collection", loc: { start: 1043, end: 1053 } },
			interfaces: [],
			directives: [],
			fields: [
				{
					kind: "FieldDefinition",
					name: { kind: "Name", value: "id", loc: { start: 1058, end: 1060 } },
					arguments: [],
					type: {
						kind: "NonNullType",
						type: {
							kind: "NamedType",
							name: { kind: "Name", value: "ID", loc: { start: 1062, end: 1064 } },
							loc: { start: 1062, end: 1064 },
						},
						loc: { start: 1062, end: 1065 },
					},
					directives: [],
					loc: { start: 1058, end: 1065 },
				},
				{
					kind: "FieldDefinition",
					name: { kind: "Name", value: "name", loc: { start: 1068, end: 1072 } },
					arguments: [],
					type: {
						kind: "NonNullType",
						type: {
							kind: "NamedType",
							name: { kind: "Name", value: "String", loc: { start: 1074, end: 1080 } },
							loc: { start: 1074, end: 1080 },
						},
						loc: { start: 1074, end: 1081 },
					},
					directives: [],
					loc: { start: 1068, end: 1081 },
				},
				{
					kind: "FieldDefinition",
					name: { kind: "Name", value: "slug", loc: { start: 1084, end: 1088 } },
					arguments: [],
					type: {
						kind: "NonNullType",
						type: {
							kind: "NamedType",
							name: { kind: "Name", value: "String", loc: { start: 1090, end: 1096 } },
							loc: { start: 1090, end: 1096 },
						},
						loc: { start: 1090, end: 1097 },
					},
					directives: [],
					loc: { start: 1084, end: 1097 },
				},
				{
					kind: "FieldDefinition",
					name: { kind: "Name", value: "description", loc: { start: 1100, end: 1111 } },
					arguments: [],
					type: {
						kind: "NonNullType",
						type: {
							kind: "NamedType",
							name: { kind: "Name", value: "String", loc: { start: 1113, end: 1119 } },
							loc: { start: 1113, end: 1119 },
						},
						loc: { start: 1113, end: 1120 },
					},
					directives: [],
					loc: { start: 1100, end: 1120 },
				},
				{
					kind: "FieldDefinition",
					name: { kind: "Name", value: "products", loc: { start: 1123, end: 1131 } },
					arguments: [
						{
							kind: "InputValueDefinition",
							name: { kind: "Name", value: "take", loc: { start: 1132, end: 1136 } },
							type: {
								kind: "NonNullType",
								type: {
									kind: "NamedType",
									name: { kind: "Name", value: "Int", loc: { start: 1138, end: 1141 } },
									loc: { start: 1138, end: 1141 },
								},
								loc: { start: 1138, end: 1142 },
							},
							directives: [],
							loc: { start: 1132, end: 1142 },
						},
						{
							kind: "InputValueDefinition",
							name: { kind: "Name", value: "skip", loc: { start: 1144, end: 1148 } },
							type: {
								kind: "NonNullType",
								type: {
									kind: "NamedType",
									name: { kind: "Name", value: "Int", loc: { start: 1150, end: 1153 } },
									loc: { start: 1150, end: 1153 },
								},
								loc: { start: 1150, end: 1154 },
							},
							directives: [],
							loc: { start: 1144, end: 1154 },
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
									name: { kind: "Name", value: "Product", loc: { start: 1158, end: 1165 } },
									loc: { start: 1158, end: 1165 },
								},
								loc: { start: 1158, end: 1166 },
							},
							loc: { start: 1157, end: 1167 },
						},
						loc: { start: 1157, end: 1168 },
					},
					directives: [],
					loc: { start: 1123, end: 1168 },
				},
			],
			loc: { start: 1038, end: 1170 },
		},
		{
			kind: "ObjectTypeDefinition",
			name: { kind: "Name", value: "CollectionList", loc: { start: 1177, end: 1191 } },
			interfaces: [],
			directives: [],
			fields: [
				{
					kind: "FieldDefinition",
					name: { kind: "Name", value: "data", loc: { start: 1196, end: 1200 } },
					arguments: [],
					type: {
						kind: "NonNullType",
						type: {
							kind: "ListType",
							type: {
								kind: "NonNullType",
								type: {
									kind: "NamedType",
									name: { kind: "Name", value: "Collection", loc: { start: 1203, end: 1213 } },
									loc: { start: 1203, end: 1213 },
								},
								loc: { start: 1203, end: 1214 },
							},
							loc: { start: 1202, end: 1215 },
						},
						loc: { start: 1202, end: 1216 },
					},
					directives: [],
					loc: { start: 1196, end: 1216 },
				},
				{
					kind: "FieldDefinition",
					name: { kind: "Name", value: "meta", loc: { start: 1219, end: 1223 } },
					arguments: [],
					type: {
						kind: "NonNullType",
						type: {
							kind: "NamedType",
							name: { kind: "Name", value: "Meta", loc: { start: 1225, end: 1229 } },
							loc: { start: 1225, end: 1229 },
						},
						loc: { start: 1225, end: 1230 },
					},
					directives: [],
					loc: { start: 1219, end: 1230 },
				},
			],
			loc: { start: 1172, end: 1232 },
		},
		{
			kind: "ObjectTypeDefinition",
			name: { kind: "Name", value: "Product", loc: { start: 1239, end: 1246 } },
			interfaces: [],
			directives: [],
			fields: [
				{
					kind: "FieldDefinition",
					name: { kind: "Name", value: "id", loc: { start: 1251, end: 1253 } },
					arguments: [],
					type: {
						kind: "NonNullType",
						type: {
							kind: "NamedType",
							name: { kind: "Name", value: "ID", loc: { start: 1255, end: 1257 } },
							loc: { start: 1255, end: 1257 },
						},
						loc: { start: 1255, end: 1258 },
					},
					directives: [],
					loc: { start: 1251, end: 1258 },
				},
				{
					kind: "FieldDefinition",
					name: { kind: "Name", value: "name", loc: { start: 1261, end: 1265 } },
					arguments: [],
					type: {
						kind: "NonNullType",
						type: {
							kind: "NamedType",
							name: { kind: "Name", value: "String", loc: { start: 1267, end: 1273 } },
							loc: { start: 1267, end: 1273 },
						},
						loc: { start: 1267, end: 1274 },
					},
					directives: [],
					loc: { start: 1261, end: 1274 },
				},
				{
					kind: "FieldDefinition",
					name: { kind: "Name", value: "slug", loc: { start: 1277, end: 1281 } },
					arguments: [],
					type: {
						kind: "NonNullType",
						type: {
							kind: "NamedType",
							name: { kind: "Name", value: "String", loc: { start: 1283, end: 1289 } },
							loc: { start: 1283, end: 1289 },
						},
						loc: { start: 1283, end: 1290 },
					},
					directives: [],
					loc: { start: 1277, end: 1290 },
				},
				{
					kind: "FieldDefinition",
					name: { kind: "Name", value: "description", loc: { start: 1293, end: 1304 } },
					arguments: [],
					type: {
						kind: "NonNullType",
						type: {
							kind: "NamedType",
							name: { kind: "Name", value: "String", loc: { start: 1306, end: 1312 } },
							loc: { start: 1306, end: 1312 },
						},
						loc: { start: 1306, end: 1313 },
					},
					directives: [],
					loc: { start: 1293, end: 1313 },
				},
				{
					kind: "FieldDefinition",
					name: { kind: "Name", value: "longDescription", loc: { start: 1316, end: 1331 } },
					arguments: [],
					type: {
						kind: "NonNullType",
						type: {
							kind: "NamedType",
							name: { kind: "Name", value: "String", loc: { start: 1333, end: 1339 } },
							loc: { start: 1333, end: 1339 },
						},
						loc: { start: 1333, end: 1340 },
					},
					directives: [],
					loc: { start: 1316, end: 1340 },
				},
				{
					kind: "FieldDefinition",
					name: { kind: "Name", value: "price", loc: { start: 1343, end: 1348 } },
					arguments: [],
					type: {
						kind: "NonNullType",
						type: {
							kind: "NamedType",
							name: { kind: "Name", value: "Int", loc: { start: 1350, end: 1353 } },
							loc: { start: 1350, end: 1353 },
						},
						loc: { start: 1350, end: 1354 },
					},
					directives: [],
					loc: { start: 1343, end: 1354 },
				},
				{
					kind: "FieldDefinition",
					name: { kind: "Name", value: "image", loc: { start: 1357, end: 1362 } },
					arguments: [],
					type: {
						kind: "NonNullType",
						type: {
							kind: "NamedType",
							name: { kind: "Name", value: "String", loc: { start: 1364, end: 1370 } },
							loc: { start: 1364, end: 1370 },
						},
						loc: { start: 1364, end: 1371 },
					},
					directives: [],
					loc: { start: 1357, end: 1371 },
				},
				{
					kind: "FieldDefinition",
					name: { kind: "Name", value: "status", loc: { start: 1374, end: 1380 } },
					arguments: [],
					type: {
						kind: "NonNullType",
						type: {
							kind: "NamedType",
							name: { kind: "Name", value: "String", loc: { start: 1382, end: 1388 } },
							loc: { start: 1382, end: 1388 },
						},
						loc: { start: 1382, end: 1389 },
					},
					directives: [],
					loc: { start: 1374, end: 1389 },
				},
				{
					kind: "FieldDefinition",
					name: { kind: "Name", value: "rating", loc: { start: 1392, end: 1398 } },
					arguments: [],
					type: {
						kind: "NonNullType",
						type: {
							kind: "NamedType",
							name: { kind: "Name", value: "Int", loc: { start: 1400, end: 1403 } },
							loc: { start: 1400, end: 1403 },
						},
						loc: { start: 1400, end: 1404 },
					},
					directives: [],
					loc: { start: 1392, end: 1404 },
				},
				{
					kind: "FieldDefinition",
					name: { kind: "Name", value: "categories", loc: { start: 1407, end: 1417 } },
					arguments: [],
					type: {
						kind: "NonNullType",
						type: {
							kind: "ListType",
							type: {
								kind: "NonNullType",
								type: {
									kind: "NamedType",
									name: { kind: "Name", value: "Category", loc: { start: 1420, end: 1428 } },
									loc: { start: 1420, end: 1428 },
								},
								loc: { start: 1420, end: 1429 },
							},
							loc: { start: 1419, end: 1430 },
						},
						loc: { start: 1419, end: 1431 },
					},
					directives: [],
					loc: { start: 1407, end: 1431 },
				},
				{
					kind: "FieldDefinition",
					name: { kind: "Name", value: "collections", loc: { start: 1434, end: 1445 } },
					arguments: [],
					type: {
						kind: "NonNullType",
						type: {
							kind: "ListType",
							type: {
								kind: "NonNullType",
								type: {
									kind: "NamedType",
									name: { kind: "Name", value: "Collection", loc: { start: 1448, end: 1458 } },
									loc: { start: 1448, end: 1458 },
								},
								loc: { start: 1448, end: 1459 },
							},
							loc: { start: 1447, end: 1460 },
						},
						loc: { start: 1447, end: 1461 },
					},
					directives: [],
					loc: { start: 1434, end: 1461 },
				},
			],
			loc: { start: 1234, end: 1463 },
		},
		{
			kind: "ObjectTypeDefinition",
			name: { kind: "Name", value: "ProductList", loc: { start: 1470, end: 1481 } },
			interfaces: [],
			directives: [],
			fields: [
				{
					kind: "FieldDefinition",
					name: { kind: "Name", value: "data", loc: { start: 1486, end: 1490 } },
					arguments: [],
					type: {
						kind: "NonNullType",
						type: {
							kind: "ListType",
							type: {
								kind: "NonNullType",
								type: {
									kind: "NamedType",
									name: { kind: "Name", value: "Product", loc: { start: 1493, end: 1500 } },
									loc: { start: 1493, end: 1500 },
								},
								loc: { start: 1493, end: 1501 },
							},
							loc: { start: 1492, end: 1502 },
						},
						loc: { start: 1492, end: 1503 },
					},
					directives: [],
					loc: { start: 1486, end: 1503 },
				},
				{
					kind: "FieldDefinition",
					name: { kind: "Name", value: "meta", loc: { start: 1506, end: 1510 } },
					arguments: [],
					type: {
						kind: "NonNullType",
						type: {
							kind: "NamedType",
							name: { kind: "Name", value: "Meta", loc: { start: 1512, end: 1516 } },
							loc: { start: 1512, end: 1516 },
						},
						loc: { start: 1512, end: 1517 },
					},
					directives: [],
					loc: { start: 1506, end: 1517 },
				},
			],
			loc: { start: 1465, end: 1519 },
		},
		{
			kind: "ObjectTypeDefinition",
			name: { kind: "Name", value: "Order", loc: { start: 1526, end: 1531 } },
			interfaces: [],
			directives: [],
			fields: [
				{
					kind: "FieldDefinition",
					name: { kind: "Name", value: "id", loc: { start: 1536, end: 1538 } },
					arguments: [],
					type: {
						kind: "NonNullType",
						type: {
							kind: "NamedType",
							name: { kind: "Name", value: "ID", loc: { start: 1540, end: 1542 } },
							loc: { start: 1540, end: 1542 },
						},
						loc: { start: 1540, end: 1543 },
					},
					directives: [],
					loc: { start: 1536, end: 1543 },
				},
				{
					kind: "FieldDefinition",
					name: { kind: "Name", value: "totalAmount", loc: { start: 1546, end: 1557 } },
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
					loc: { start: 1546, end: 1563 },
				},
				{
					kind: "FieldDefinition",
					name: { kind: "Name", value: "status", loc: { start: 1566, end: 1572 } },
					arguments: [],
					type: {
						kind: "NonNullType",
						type: {
							kind: "NamedType",
							name: { kind: "Name", value: "OrderStatus", loc: { start: 1574, end: 1585 } },
							loc: { start: 1574, end: 1585 },
						},
						loc: { start: 1574, end: 1586 },
					},
					directives: [],
					loc: { start: 1566, end: 1586 },
				},
				{
					kind: "FieldDefinition",
					name: { kind: "Name", value: "orderItems", loc: { start: 1589, end: 1599 } },
					arguments: [],
					type: {
						kind: "NonNullType",
						type: {
							kind: "ListType",
							type: {
								kind: "NonNullType",
								type: {
									kind: "NamedType",
									name: { kind: "Name", value: "OrderItem", loc: { start: 1602, end: 1611 } },
									loc: { start: 1602, end: 1611 },
								},
								loc: { start: 1602, end: 1612 },
							},
							loc: { start: 1601, end: 1613 },
						},
						loc: { start: 1601, end: 1614 },
					},
					directives: [],
					loc: { start: 1589, end: 1614 },
				},
				{
					kind: "FieldDefinition",
					name: { kind: "Name", value: "lines", loc: { start: 1617, end: 1622 } },
					arguments: [],
					type: {
						kind: "NamedType",
						name: { kind: "Name", value: "String", loc: { start: 1624, end: 1630 } },
						loc: { start: 1624, end: 1630 },
					},
					directives: [],
					loc: { start: 1617, end: 1630 },
				},
				{
					kind: "FieldDefinition",
					name: { kind: "Name", value: "createdAt", loc: { start: 1633, end: 1642 } },
					arguments: [],
					type: {
						kind: "NonNullType",
						type: {
							kind: "NamedType",
							name: { kind: "Name", value: "DateTime", loc: { start: 1644, end: 1652 } },
							loc: { start: 1644, end: 1652 },
						},
						loc: { start: 1644, end: 1653 },
					},
					directives: [],
					loc: { start: 1633, end: 1653 },
				},
				{
					kind: "FieldDefinition",
					name: { kind: "Name", value: "updatedAt", loc: { start: 1656, end: 1665 } },
					arguments: [],
					type: {
						kind: "NonNullType",
						type: {
							kind: "NamedType",
							name: { kind: "Name", value: "DateTime", loc: { start: 1667, end: 1675 } },
							loc: { start: 1667, end: 1675 },
						},
						loc: { start: 1667, end: 1676 },
					},
					directives: [],
					loc: { start: 1656, end: 1676 },
				},
			],
			loc: { start: 1521, end: 1678 },
		},
		{
			kind: "ObjectTypeDefinition",
			name: { kind: "Name", value: "OrderItem", loc: { start: 1685, end: 1694 } },
			interfaces: [],
			directives: [],
			fields: [
				{
					kind: "FieldDefinition",
					name: { kind: "Name", value: "id", loc: { start: 1699, end: 1701 } },
					arguments: [],
					type: {
						kind: "NonNullType",
						type: {
							kind: "NamedType",
							name: { kind: "Name", value: "ID", loc: { start: 1703, end: 1705 } },
							loc: { start: 1703, end: 1705 },
						},
						loc: { start: 1703, end: 1706 },
					},
					directives: [],
					loc: { start: 1699, end: 1706 },
				},
				{
					kind: "FieldDefinition",
					name: { kind: "Name", value: "quantity", loc: { start: 1709, end: 1717 } },
					arguments: [],
					type: {
						kind: "NonNullType",
						type: {
							kind: "NamedType",
							name: { kind: "Name", value: "Int", loc: { start: 1719, end: 1722 } },
							loc: { start: 1719, end: 1722 },
						},
						loc: { start: 1719, end: 1723 },
					},
					directives: [],
					loc: { start: 1709, end: 1723 },
				},
				{
					kind: "FieldDefinition",
					name: { kind: "Name", value: "product", loc: { start: 1726, end: 1733 } },
					arguments: [],
					type: {
						kind: "NonNullType",
						type: {
							kind: "NamedType",
							name: { kind: "Name", value: "Product", loc: { start: 1735, end: 1742 } },
							loc: { start: 1735, end: 1742 },
						},
						loc: { start: 1735, end: 1743 },
					},
					directives: [],
					loc: { start: 1726, end: 1743 },
				},
				{
					kind: "FieldDefinition",
					name: { kind: "Name", value: "productId", loc: { start: 1746, end: 1755 } },
					arguments: [],
					type: {
						kind: "NonNullType",
						type: {
							kind: "NamedType",
							name: { kind: "Name", value: "ID", loc: { start: 1757, end: 1759 } },
							loc: { start: 1757, end: 1759 },
						},
						loc: { start: 1757, end: 1760 },
					},
					directives: [],
					loc: { start: 1746, end: 1760 },
				},
				{
					kind: "FieldDefinition",
					name: { kind: "Name", value: "orderId", loc: { start: 1763, end: 1770 } },
					arguments: [],
					type: {
						kind: "NonNullType",
						type: {
							kind: "NamedType",
							name: { kind: "Name", value: "ID", loc: { start: 1772, end: 1774 } },
							loc: { start: 1772, end: 1774 },
						},
						loc: { start: 1772, end: 1775 },
					},
					directives: [],
					loc: { start: 1763, end: 1775 },
				},
			],
			loc: { start: 1680, end: 1777 },
		},
		{
			kind: "ObjectTypeDefinition",
			name: { kind: "Name", value: "Review", loc: { start: 1784, end: 1790 } },
			interfaces: [],
			directives: [],
			fields: [
				{
					kind: "FieldDefinition",
					name: { kind: "Name", value: "id", loc: { start: 1795, end: 1797 } },
					arguments: [],
					type: {
						kind: "NonNullType",
						type: {
							kind: "NamedType",
							name: { kind: "Name", value: "ID", loc: { start: 1799, end: 1801 } },
							loc: { start: 1799, end: 1801 },
						},
						loc: { start: 1799, end: 1802 },
					},
					directives: [],
					loc: { start: 1795, end: 1802 },
				},
				{
					kind: "FieldDefinition",
					name: { kind: "Name", value: "headline", loc: { start: 1805, end: 1813 } },
					arguments: [],
					type: {
						kind: "NonNullType",
						type: {
							kind: "NamedType",
							name: { kind: "Name", value: "String", loc: { start: 1815, end: 1821 } },
							loc: { start: 1815, end: 1821 },
						},
						loc: { start: 1815, end: 1822 },
					},
					directives: [],
					loc: { start: 1805, end: 1822 },
				},
				{
					kind: "FieldDefinition",
					name: { kind: "Name", value: "content", loc: { start: 1825, end: 1832 } },
					arguments: [],
					type: {
						kind: "NonNullType",
						type: {
							kind: "NamedType",
							name: { kind: "Name", value: "String", loc: { start: 1834, end: 1840 } },
							loc: { start: 1834, end: 1840 },
						},
						loc: { start: 1834, end: 1841 },
					},
					directives: [],
					loc: { start: 1825, end: 1841 },
				},
				{
					kind: "FieldDefinition",
					name: { kind: "Name", value: "rating", loc: { start: 1844, end: 1850 } },
					arguments: [],
					type: {
						kind: "NonNullType",
						type: {
							kind: "NamedType",
							name: { kind: "Name", value: "Int", loc: { start: 1852, end: 1855 } },
							loc: { start: 1852, end: 1855 },
						},
						loc: { start: 1852, end: 1856 },
					},
					directives: [],
					loc: { start: 1844, end: 1856 },
				},
				{
					kind: "FieldDefinition",
					name: { kind: "Name", value: "name", loc: { start: 1859, end: 1863 } },
					arguments: [],
					type: {
						kind: "NonNullType",
						type: {
							kind: "NamedType",
							name: { kind: "Name", value: "String", loc: { start: 1865, end: 1871 } },
							loc: { start: 1865, end: 1871 },
						},
						loc: { start: 1865, end: 1872 },
					},
					directives: [],
					loc: { start: 1859, end: 1872 },
				},
				{
					kind: "FieldDefinition",
					name: { kind: "Name", value: "email", loc: { start: 1875, end: 1880 } },
					arguments: [],
					type: {
						kind: "NonNullType",
						type: {
							kind: "NamedType",
							name: { kind: "Name", value: "String", loc: { start: 1882, end: 1888 } },
							loc: { start: 1882, end: 1888 },
						},
						loc: { start: 1882, end: 1889 },
					},
					directives: [],
					loc: { start: 1875, end: 1889 },
				},
				{
					kind: "FieldDefinition",
					name: { kind: "Name", value: "createdAt", loc: { start: 1892, end: 1901 } },
					arguments: [],
					type: {
						kind: "NonNullType",
						type: {
							kind: "NamedType",
							name: { kind: "Name", value: "DateTime", loc: { start: 1903, end: 1911 } },
							loc: { start: 1903, end: 1911 },
						},
						loc: { start: 1903, end: 1912 },
					},
					directives: [],
					loc: { start: 1892, end: 1912 },
				},
			],
			loc: { start: 1779, end: 1914 },
		},
		{
			kind: "ScalarTypeDefinition",
			name: { kind: "Name", value: "DateTime", loc: { start: 1923, end: 1931 } },
			directives: [],
			loc: { start: 1916, end: 1931 },
		},
		{
			kind: "ObjectTypeDefinition",
			name: { kind: "Name", value: "Meta", loc: { start: 1938, end: 1942 } },
			interfaces: [],
			directives: [],
			fields: [
				{
					kind: "FieldDefinition",
					name: { kind: "Name", value: "count", loc: { start: 1947, end: 1952 } },
					arguments: [],
					type: {
						kind: "NonNullType",
						type: {
							kind: "NamedType",
							name: { kind: "Name", value: "Int", loc: { start: 1954, end: 1957 } },
							loc: { start: 1954, end: 1957 },
						},
						loc: { start: 1954, end: 1958 },
					},
					directives: [],
					loc: { start: 1947, end: 1958 },
				},
				{
					kind: "FieldDefinition",
					name: { kind: "Name", value: "total", loc: { start: 1961, end: 1966 } },
					arguments: [],
					type: {
						kind: "NonNullType",
						type: {
							kind: "NamedType",
							name: { kind: "Name", value: "Int", loc: { start: 1968, end: 1971 } },
							loc: { start: 1968, end: 1971 },
						},
						loc: { start: 1968, end: 1972 },
					},
					directives: [],
					loc: { start: 1961, end: 1972 },
				},
			],
			loc: { start: 1933, end: 1974 },
		},
		{
			kind: "EnumTypeDefinition",
			name: { kind: "Name", value: "OrderStatus", loc: { start: 1981, end: 1992 } },
			directives: [],
			values: [
				{
					kind: "EnumValueDefinition",
					name: { kind: "Name", value: "PAID", loc: { start: 1997, end: 2001 } },
					directives: [],
					loc: { start: 1997, end: 2001 },
				},
				{
					kind: "EnumValueDefinition",
					name: { kind: "Name", value: "FULFILLED", loc: { start: 2004, end: 2013 } },
					directives: [],
					loc: { start: 2004, end: 2013 },
				},
				{
					kind: "EnumValueDefinition",
					name: { kind: "Name", value: "CREATED", loc: { start: 2016, end: 2023 } },
					directives: [],
					loc: { start: 2016, end: 2023 },
				},
				{
					kind: "EnumValueDefinition",
					name: { kind: "Name", value: "CANCELLED", loc: { start: 2026, end: 2035 } },
					directives: [],
					loc: { start: 2026, end: 2035 },
				},
			],
			loc: { start: 1976, end: 2037 },
		},
		{
			kind: "EnumTypeDefinition",
			name: { kind: "Name", value: "SortDirection", loc: { start: 2044, end: 2057 } },
			directives: [],
			values: [
				{
					kind: "EnumValueDefinition",
					name: { kind: "Name", value: "ASC", loc: { start: 2062, end: 2065 } },
					directives: [],
					loc: { start: 2062, end: 2065 },
				},
				{
					kind: "EnumValueDefinition",
					name: { kind: "Name", value: "DESC", loc: { start: 2068, end: 2072 } },
					directives: [],
					loc: { start: 2068, end: 2072 },
				},
			],
			loc: { start: 2039, end: 2074 },
		},
		{
			kind: "EnumTypeDefinition",
			name: { kind: "Name", value: "OrderSortBy", loc: { start: 2081, end: 2092 } },
			directives: [],
			values: [
				{
					kind: "EnumValueDefinition",
					name: { kind: "Name", value: "DEFAULT", loc: { start: 2097, end: 2104 } },
					directives: [],
					loc: { start: 2097, end: 2104 },
				},
				{
					kind: "EnumValueDefinition",
					name: { kind: "Name", value: "STATUS", loc: { start: 2107, end: 2113 } },
					directives: [],
					loc: { start: 2107, end: 2113 },
				},
				{
					kind: "EnumValueDefinition",
					name: { kind: "Name", value: "TOTAL", loc: { start: 2116, end: 2121 } },
					directives: [],
					loc: { start: 2116, end: 2121 },
				},
			],
			loc: { start: 2076, end: 2123 },
		},
		{
			kind: "EnumTypeDefinition",
			name: { kind: "Name", value: "ProductsSortBy", loc: { start: 2130, end: 2144 } },
			directives: [],
			values: [
				{
					kind: "EnumValueDefinition",
					name: { kind: "Name", value: "DEFAULT", loc: { start: 2149, end: 2156 } },
					directives: [],
					loc: { start: 2149, end: 2156 },
				},
				{
					kind: "EnumValueDefinition",
					name: { kind: "Name", value: "PRICE", loc: { start: 2159, end: 2164 } },
					directives: [],
					loc: { start: 2159, end: 2164 },
				},
				{
					kind: "EnumValueDefinition",
					name: { kind: "Name", value: "NAME", loc: { start: 2167, end: 2171 } },
					directives: [],
					loc: { start: 2167, end: 2171 },
				},
			],
			loc: { start: 2125, end: 2173 },
		},
		{
			kind: "ObjectTypeDefinition",
			name: { kind: "Name", value: "Query", loc: { start: 2179, end: 2184 } },
			interfaces: [],
			directives: [],
			fields: [],
			loc: { start: 2174, end: 2184 },
		},
		{
			kind: "ObjectTypeDefinition",
			name: { kind: "Name", value: "Mutation", loc: { start: 2191, end: 2199 } },
			interfaces: [],
			directives: [],
			fields: [],
			loc: { start: 2186, end: 2199 },
		},
	],
	loc: { start: 0, end: 2200 },
} as unknown as DocumentNode;
