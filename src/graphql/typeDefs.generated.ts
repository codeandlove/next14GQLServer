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
					name: { kind: "Name", value: "product", loc: { start: 221, end: 228 } },
					arguments: [
						{
							kind: "InputValueDefinition",
							name: { kind: "Name", value: "id", loc: { start: 229, end: 231 } },
							type: {
								kind: "NamedType",
								name: { kind: "Name", value: "ID", loc: { start: 233, end: 235 } },
								loc: { start: 233, end: 235 },
							},
							directives: [],
							loc: { start: 229, end: 235 },
						},
						{
							kind: "InputValueDefinition",
							name: { kind: "Name", value: "slug", loc: { start: 237, end: 241 } },
							type: {
								kind: "NamedType",
								name: { kind: "Name", value: "String", loc: { start: 243, end: 249 } },
								loc: { start: 243, end: 249 },
							},
							directives: [],
							loc: { start: 237, end: 249 },
						},
					],
					type: {
						kind: "NonNullType",
						type: {
							kind: "NamedType",
							name: { kind: "Name", value: "Product", loc: { start: 252, end: 259 } },
							loc: { start: 252, end: 259 },
						},
						loc: { start: 252, end: 260 },
					},
					directives: [],
					loc: { start: 221, end: 260 },
				},
				{
					kind: "FieldDefinition",
					name: { kind: "Name", value: "products", loc: { start: 263, end: 271 } },
					arguments: [
						{
							kind: "InputValueDefinition",
							name: { kind: "Name", value: "order", loc: { start: 272, end: 277 } },
							type: {
								kind: "NonNullType",
								type: {
									kind: "NamedType",
									name: { kind: "Name", value: "SortDirection", loc: { start: 279, end: 292 } },
									loc: { start: 279, end: 292 },
								},
								loc: { start: 279, end: 293 },
							},
							defaultValue: { kind: "EnumValue", value: "ASC", loc: { start: 296, end: 299 } },
							directives: [],
							loc: { start: 272, end: 299 },
						},
						{
							kind: "InputValueDefinition",
							name: { kind: "Name", value: "orderBy", loc: { start: 301, end: 308 } },
							type: {
								kind: "NonNullType",
								type: {
									kind: "NamedType",
									name: { kind: "Name", value: "ProductsSortBy", loc: { start: 310, end: 324 } },
									loc: { start: 310, end: 324 },
								},
								loc: { start: 310, end: 325 },
							},
							defaultValue: { kind: "EnumValue", value: "DEFAULT", loc: { start: 328, end: 335 } },
							directives: [],
							loc: { start: 301, end: 335 },
						},
						{
							kind: "InputValueDefinition",
							name: { kind: "Name", value: "search", loc: { start: 337, end: 343 } },
							type: {
								kind: "NamedType",
								name: { kind: "Name", value: "String", loc: { start: 345, end: 351 } },
								loc: { start: 345, end: 351 },
							},
							directives: [],
							loc: { start: 337, end: 351 },
						},
						{
							kind: "InputValueDefinition",
							name: { kind: "Name", value: "take", loc: { start: 353, end: 357 } },
							type: {
								kind: "NonNullType",
								type: {
									kind: "NamedType",
									name: { kind: "Name", value: "Int", loc: { start: 359, end: 362 } },
									loc: { start: 359, end: 362 },
								},
								loc: { start: 359, end: 363 },
							},
							directives: [],
							loc: { start: 353, end: 363 },
						},
						{
							kind: "InputValueDefinition",
							name: { kind: "Name", value: "skip", loc: { start: 365, end: 369 } },
							type: {
								kind: "NonNullType",
								type: {
									kind: "NamedType",
									name: { kind: "Name", value: "Int", loc: { start: 371, end: 374 } },
									loc: { start: 371, end: 374 },
								},
								loc: { start: 371, end: 375 },
							},
							directives: [],
							loc: { start: 365, end: 375 },
						},
					],
					type: {
						kind: "NonNullType",
						type: {
							kind: "NamedType",
							name: { kind: "Name", value: "ProductList", loc: { start: 378, end: 389 } },
							loc: { start: 378, end: 389 },
						},
						loc: { start: 378, end: 390 },
					},
					directives: [],
					loc: { start: 263, end: 390 },
				},
			],
			loc: { start: 0, end: 392 },
		},
		{
			kind: "ObjectTypeDefinition",
			name: { kind: "Name", value: "Category", loc: { start: 399, end: 407 } },
			interfaces: [],
			directives: [],
			fields: [
				{
					kind: "FieldDefinition",
					name: { kind: "Name", value: "id", loc: { start: 412, end: 414 } },
					arguments: [],
					type: {
						kind: "NonNullType",
						type: {
							kind: "NamedType",
							name: { kind: "Name", value: "ID", loc: { start: 416, end: 418 } },
							loc: { start: 416, end: 418 },
						},
						loc: { start: 416, end: 419 },
					},
					directives: [],
					loc: { start: 412, end: 419 },
				},
				{
					kind: "FieldDefinition",
					name: { kind: "Name", value: "name", loc: { start: 422, end: 426 } },
					arguments: [],
					type: {
						kind: "NonNullType",
						type: {
							kind: "NamedType",
							name: { kind: "Name", value: "String", loc: { start: 428, end: 434 } },
							loc: { start: 428, end: 434 },
						},
						loc: { start: 428, end: 435 },
					},
					directives: [],
					loc: { start: 422, end: 435 },
				},
				{
					kind: "FieldDefinition",
					name: { kind: "Name", value: "slug", loc: { start: 438, end: 442 } },
					arguments: [],
					type: {
						kind: "NonNullType",
						type: {
							kind: "NamedType",
							name: { kind: "Name", value: "String", loc: { start: 444, end: 450 } },
							loc: { start: 444, end: 450 },
						},
						loc: { start: 444, end: 451 },
					},
					directives: [],
					loc: { start: 438, end: 451 },
				},
				{
					kind: "FieldDefinition",
					name: { kind: "Name", value: "description", loc: { start: 454, end: 465 } },
					arguments: [],
					type: {
						kind: "NonNullType",
						type: {
							kind: "NamedType",
							name: { kind: "Name", value: "String", loc: { start: 467, end: 473 } },
							loc: { start: 467, end: 473 },
						},
						loc: { start: 467, end: 474 },
					},
					directives: [],
					loc: { start: 454, end: 474 },
				},
				{
					kind: "FieldDefinition",
					name: { kind: "Name", value: "products", loc: { start: 477, end: 485 } },
					arguments: [
						{
							kind: "InputValueDefinition",
							name: { kind: "Name", value: "take", loc: { start: 486, end: 490 } },
							type: {
								kind: "NonNullType",
								type: {
									kind: "NamedType",
									name: { kind: "Name", value: "Int", loc: { start: 492, end: 495 } },
									loc: { start: 492, end: 495 },
								},
								loc: { start: 492, end: 496 },
							},
							directives: [],
							loc: { start: 486, end: 496 },
						},
						{
							kind: "InputValueDefinition",
							name: { kind: "Name", value: "skip", loc: { start: 498, end: 502 } },
							type: {
								kind: "NonNullType",
								type: {
									kind: "NamedType",
									name: { kind: "Name", value: "Int", loc: { start: 504, end: 507 } },
									loc: { start: 504, end: 507 },
								},
								loc: { start: 504, end: 508 },
							},
							directives: [],
							loc: { start: 498, end: 508 },
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
									name: { kind: "Name", value: "Product", loc: { start: 512, end: 519 } },
									loc: { start: 512, end: 519 },
								},
								loc: { start: 512, end: 520 },
							},
							loc: { start: 511, end: 521 },
						},
						loc: { start: 511, end: 522 },
					},
					directives: [],
					loc: { start: 477, end: 522 },
				},
			],
			loc: { start: 394, end: 524 },
		},
		{
			kind: "ObjectTypeDefinition",
			name: { kind: "Name", value: "CategoryList", loc: { start: 531, end: 543 } },
			interfaces: [],
			directives: [],
			fields: [
				{
					kind: "FieldDefinition",
					name: { kind: "Name", value: "data", loc: { start: 548, end: 552 } },
					arguments: [],
					type: {
						kind: "NonNullType",
						type: {
							kind: "ListType",
							type: {
								kind: "NonNullType",
								type: {
									kind: "NamedType",
									name: { kind: "Name", value: "Category", loc: { start: 555, end: 563 } },
									loc: { start: 555, end: 563 },
								},
								loc: { start: 555, end: 564 },
							},
							loc: { start: 554, end: 565 },
						},
						loc: { start: 554, end: 566 },
					},
					directives: [],
					loc: { start: 548, end: 566 },
				},
				{
					kind: "FieldDefinition",
					name: { kind: "Name", value: "meta", loc: { start: 569, end: 573 } },
					arguments: [],
					type: {
						kind: "NonNullType",
						type: {
							kind: "NamedType",
							name: { kind: "Name", value: "Meta", loc: { start: 575, end: 579 } },
							loc: { start: 575, end: 579 },
						},
						loc: { start: 575, end: 580 },
					},
					directives: [],
					loc: { start: 569, end: 580 },
				},
			],
			loc: { start: 526, end: 582 },
		},
		{
			kind: "ObjectTypeDefinition",
			name: { kind: "Name", value: "Collection", loc: { start: 589, end: 599 } },
			interfaces: [],
			directives: [],
			fields: [
				{
					kind: "FieldDefinition",
					name: { kind: "Name", value: "id", loc: { start: 604, end: 606 } },
					arguments: [],
					type: {
						kind: "NonNullType",
						type: {
							kind: "NamedType",
							name: { kind: "Name", value: "ID", loc: { start: 608, end: 610 } },
							loc: { start: 608, end: 610 },
						},
						loc: { start: 608, end: 611 },
					},
					directives: [],
					loc: { start: 604, end: 611 },
				},
				{
					kind: "FieldDefinition",
					name: { kind: "Name", value: "name", loc: { start: 614, end: 618 } },
					arguments: [],
					type: {
						kind: "NonNullType",
						type: {
							kind: "NamedType",
							name: { kind: "Name", value: "String", loc: { start: 620, end: 626 } },
							loc: { start: 620, end: 626 },
						},
						loc: { start: 620, end: 627 },
					},
					directives: [],
					loc: { start: 614, end: 627 },
				},
				{
					kind: "FieldDefinition",
					name: { kind: "Name", value: "slug", loc: { start: 630, end: 634 } },
					arguments: [],
					type: {
						kind: "NonNullType",
						type: {
							kind: "NamedType",
							name: { kind: "Name", value: "String", loc: { start: 636, end: 642 } },
							loc: { start: 636, end: 642 },
						},
						loc: { start: 636, end: 643 },
					},
					directives: [],
					loc: { start: 630, end: 643 },
				},
				{
					kind: "FieldDefinition",
					name: { kind: "Name", value: "description", loc: { start: 646, end: 657 } },
					arguments: [],
					type: {
						kind: "NonNullType",
						type: {
							kind: "NamedType",
							name: { kind: "Name", value: "String", loc: { start: 659, end: 665 } },
							loc: { start: 659, end: 665 },
						},
						loc: { start: 659, end: 666 },
					},
					directives: [],
					loc: { start: 646, end: 666 },
				},
				{
					kind: "FieldDefinition",
					name: { kind: "Name", value: "products", loc: { start: 669, end: 677 } },
					arguments: [
						{
							kind: "InputValueDefinition",
							name: { kind: "Name", value: "take", loc: { start: 678, end: 682 } },
							type: {
								kind: "NonNullType",
								type: {
									kind: "NamedType",
									name: { kind: "Name", value: "Int", loc: { start: 684, end: 687 } },
									loc: { start: 684, end: 687 },
								},
								loc: { start: 684, end: 688 },
							},
							directives: [],
							loc: { start: 678, end: 688 },
						},
						{
							kind: "InputValueDefinition",
							name: { kind: "Name", value: "skip", loc: { start: 690, end: 694 } },
							type: {
								kind: "NonNullType",
								type: {
									kind: "NamedType",
									name: { kind: "Name", value: "Int", loc: { start: 696, end: 699 } },
									loc: { start: 696, end: 699 },
								},
								loc: { start: 696, end: 700 },
							},
							directives: [],
							loc: { start: 690, end: 700 },
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
									name: { kind: "Name", value: "Product", loc: { start: 704, end: 711 } },
									loc: { start: 704, end: 711 },
								},
								loc: { start: 704, end: 712 },
							},
							loc: { start: 703, end: 713 },
						},
						loc: { start: 703, end: 714 },
					},
					directives: [],
					loc: { start: 669, end: 714 },
				},
			],
			loc: { start: 584, end: 716 },
		},
		{
			kind: "ObjectTypeDefinition",
			name: { kind: "Name", value: "CollectionList", loc: { start: 723, end: 737 } },
			interfaces: [],
			directives: [],
			fields: [
				{
					kind: "FieldDefinition",
					name: { kind: "Name", value: "data", loc: { start: 742, end: 746 } },
					arguments: [],
					type: {
						kind: "NonNullType",
						type: {
							kind: "ListType",
							type: {
								kind: "NonNullType",
								type: {
									kind: "NamedType",
									name: { kind: "Name", value: "Collection", loc: { start: 749, end: 759 } },
									loc: { start: 749, end: 759 },
								},
								loc: { start: 749, end: 760 },
							},
							loc: { start: 748, end: 761 },
						},
						loc: { start: 748, end: 762 },
					},
					directives: [],
					loc: { start: 742, end: 762 },
				},
				{
					kind: "FieldDefinition",
					name: { kind: "Name", value: "meta", loc: { start: 765, end: 769 } },
					arguments: [],
					type: {
						kind: "NonNullType",
						type: {
							kind: "NamedType",
							name: { kind: "Name", value: "Meta", loc: { start: 771, end: 775 } },
							loc: { start: 771, end: 775 },
						},
						loc: { start: 771, end: 776 },
					},
					directives: [],
					loc: { start: 765, end: 776 },
				},
			],
			loc: { start: 718, end: 778 },
		},
		{
			kind: "ObjectTypeDefinition",
			name: { kind: "Name", value: "Product", loc: { start: 785, end: 792 } },
			interfaces: [],
			directives: [],
			fields: [
				{
					kind: "FieldDefinition",
					name: { kind: "Name", value: "id", loc: { start: 797, end: 799 } },
					arguments: [],
					type: {
						kind: "NonNullType",
						type: {
							kind: "NamedType",
							name: { kind: "Name", value: "ID", loc: { start: 801, end: 803 } },
							loc: { start: 801, end: 803 },
						},
						loc: { start: 801, end: 804 },
					},
					directives: [],
					loc: { start: 797, end: 804 },
				},
				{
					kind: "FieldDefinition",
					name: { kind: "Name", value: "name", loc: { start: 807, end: 811 } },
					arguments: [],
					type: {
						kind: "NonNullType",
						type: {
							kind: "NamedType",
							name: { kind: "Name", value: "String", loc: { start: 813, end: 819 } },
							loc: { start: 813, end: 819 },
						},
						loc: { start: 813, end: 820 },
					},
					directives: [],
					loc: { start: 807, end: 820 },
				},
				{
					kind: "FieldDefinition",
					name: { kind: "Name", value: "slug", loc: { start: 823, end: 827 } },
					arguments: [],
					type: {
						kind: "NonNullType",
						type: {
							kind: "NamedType",
							name: { kind: "Name", value: "String", loc: { start: 829, end: 835 } },
							loc: { start: 829, end: 835 },
						},
						loc: { start: 829, end: 836 },
					},
					directives: [],
					loc: { start: 823, end: 836 },
				},
				{
					kind: "FieldDefinition",
					name: { kind: "Name", value: "description", loc: { start: 839, end: 850 } },
					arguments: [],
					type: {
						kind: "NonNullType",
						type: {
							kind: "NamedType",
							name: { kind: "Name", value: "String", loc: { start: 852, end: 858 } },
							loc: { start: 852, end: 858 },
						},
						loc: { start: 852, end: 859 },
					},
					directives: [],
					loc: { start: 839, end: 859 },
				},
				{
					kind: "FieldDefinition",
					name: { kind: "Name", value: "longDescription", loc: { start: 862, end: 877 } },
					arguments: [],
					type: {
						kind: "NonNullType",
						type: {
							kind: "NamedType",
							name: { kind: "Name", value: "String", loc: { start: 879, end: 885 } },
							loc: { start: 879, end: 885 },
						},
						loc: { start: 879, end: 886 },
					},
					directives: [],
					loc: { start: 862, end: 886 },
				},
				{
					kind: "FieldDefinition",
					name: { kind: "Name", value: "price", loc: { start: 889, end: 894 } },
					arguments: [],
					type: {
						kind: "NonNullType",
						type: {
							kind: "NamedType",
							name: { kind: "Name", value: "Int", loc: { start: 896, end: 899 } },
							loc: { start: 896, end: 899 },
						},
						loc: { start: 896, end: 900 },
					},
					directives: [],
					loc: { start: 889, end: 900 },
				},
				{
					kind: "FieldDefinition",
					name: { kind: "Name", value: "image", loc: { start: 903, end: 908 } },
					arguments: [],
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
					loc: { start: 903, end: 917 },
				},
				{
					kind: "FieldDefinition",
					name: { kind: "Name", value: "status", loc: { start: 920, end: 926 } },
					arguments: [],
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
					loc: { start: 920, end: 935 },
				},
				{
					kind: "FieldDefinition",
					name: { kind: "Name", value: "rating", loc: { start: 938, end: 944 } },
					arguments: [],
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
					loc: { start: 938, end: 950 },
				},
				{
					kind: "FieldDefinition",
					name: { kind: "Name", value: "categories", loc: { start: 953, end: 963 } },
					arguments: [],
					type: {
						kind: "NonNullType",
						type: {
							kind: "ListType",
							type: {
								kind: "NonNullType",
								type: {
									kind: "NamedType",
									name: { kind: "Name", value: "Category", loc: { start: 966, end: 974 } },
									loc: { start: 966, end: 974 },
								},
								loc: { start: 966, end: 975 },
							},
							loc: { start: 965, end: 976 },
						},
						loc: { start: 965, end: 977 },
					},
					directives: [],
					loc: { start: 953, end: 977 },
				},
				{
					kind: "FieldDefinition",
					name: { kind: "Name", value: "collections", loc: { start: 980, end: 991 } },
					arguments: [],
					type: {
						kind: "NonNullType",
						type: {
							kind: "ListType",
							type: {
								kind: "NonNullType",
								type: {
									kind: "NamedType",
									name: { kind: "Name", value: "Collection", loc: { start: 994, end: 1004 } },
									loc: { start: 994, end: 1004 },
								},
								loc: { start: 994, end: 1005 },
							},
							loc: { start: 993, end: 1006 },
						},
						loc: { start: 993, end: 1007 },
					},
					directives: [],
					loc: { start: 980, end: 1007 },
				},
			],
			loc: { start: 780, end: 1009 },
		},
		{
			kind: "ObjectTypeDefinition",
			name: { kind: "Name", value: "ProductList", loc: { start: 1016, end: 1027 } },
			interfaces: [],
			directives: [],
			fields: [
				{
					kind: "FieldDefinition",
					name: { kind: "Name", value: "data", loc: { start: 1032, end: 1036 } },
					arguments: [],
					type: {
						kind: "NonNullType",
						type: {
							kind: "ListType",
							type: {
								kind: "NonNullType",
								type: {
									kind: "NamedType",
									name: { kind: "Name", value: "Product", loc: { start: 1039, end: 1046 } },
									loc: { start: 1039, end: 1046 },
								},
								loc: { start: 1039, end: 1047 },
							},
							loc: { start: 1038, end: 1048 },
						},
						loc: { start: 1038, end: 1049 },
					},
					directives: [],
					loc: { start: 1032, end: 1049 },
				},
				{
					kind: "FieldDefinition",
					name: { kind: "Name", value: "meta", loc: { start: 1052, end: 1056 } },
					arguments: [],
					type: {
						kind: "NonNullType",
						type: {
							kind: "NamedType",
							name: { kind: "Name", value: "Meta", loc: { start: 1058, end: 1062 } },
							loc: { start: 1058, end: 1062 },
						},
						loc: { start: 1058, end: 1063 },
					},
					directives: [],
					loc: { start: 1052, end: 1063 },
				},
			],
			loc: { start: 1011, end: 1065 },
		},
		{
			kind: "ScalarTypeDefinition",
			name: { kind: "Name", value: "DateTime", loc: { start: 1074, end: 1082 } },
			directives: [],
			loc: { start: 1067, end: 1082 },
		},
		{
			kind: "ObjectTypeDefinition",
			name: { kind: "Name", value: "Meta", loc: { start: 1089, end: 1093 } },
			interfaces: [],
			directives: [],
			fields: [
				{
					kind: "FieldDefinition",
					name: { kind: "Name", value: "count", loc: { start: 1098, end: 1103 } },
					arguments: [],
					type: {
						kind: "NonNullType",
						type: {
							kind: "NamedType",
							name: { kind: "Name", value: "Int", loc: { start: 1105, end: 1108 } },
							loc: { start: 1105, end: 1108 },
						},
						loc: { start: 1105, end: 1109 },
					},
					directives: [],
					loc: { start: 1098, end: 1109 },
				},
				{
					kind: "FieldDefinition",
					name: { kind: "Name", value: "total", loc: { start: 1112, end: 1117 } },
					arguments: [],
					type: {
						kind: "NonNullType",
						type: {
							kind: "NamedType",
							name: { kind: "Name", value: "Int", loc: { start: 1119, end: 1122 } },
							loc: { start: 1119, end: 1122 },
						},
						loc: { start: 1119, end: 1123 },
					},
					directives: [],
					loc: { start: 1112, end: 1123 },
				},
			],
			loc: { start: 1084, end: 1125 },
		},
		{
			kind: "EnumTypeDefinition",
			name: { kind: "Name", value: "OrderStatus", loc: { start: 1132, end: 1143 } },
			directives: [],
			values: [
				{
					kind: "EnumValueDefinition",
					name: { kind: "Name", value: "PAID", loc: { start: 1148, end: 1152 } },
					directives: [],
					loc: { start: 1148, end: 1152 },
				},
				{
					kind: "EnumValueDefinition",
					name: { kind: "Name", value: "FULFILLED", loc: { start: 1155, end: 1164 } },
					directives: [],
					loc: { start: 1155, end: 1164 },
				},
				{
					kind: "EnumValueDefinition",
					name: { kind: "Name", value: "CREATED", loc: { start: 1167, end: 1174 } },
					directives: [],
					loc: { start: 1167, end: 1174 },
				},
				{
					kind: "EnumValueDefinition",
					name: { kind: "Name", value: "CANCELLED", loc: { start: 1177, end: 1186 } },
					directives: [],
					loc: { start: 1177, end: 1186 },
				},
			],
			loc: { start: 1127, end: 1188 },
		},
		{
			kind: "EnumTypeDefinition",
			name: { kind: "Name", value: "SortDirection", loc: { start: 1195, end: 1208 } },
			directives: [],
			values: [
				{
					kind: "EnumValueDefinition",
					name: { kind: "Name", value: "ASC", loc: { start: 1213, end: 1216 } },
					directives: [],
					loc: { start: 1213, end: 1216 },
				},
				{
					kind: "EnumValueDefinition",
					name: { kind: "Name", value: "DESC", loc: { start: 1219, end: 1223 } },
					directives: [],
					loc: { start: 1219, end: 1223 },
				},
			],
			loc: { start: 1190, end: 1225 },
		},
		{
			kind: "EnumTypeDefinition",
			name: { kind: "Name", value: "OrderSortBy", loc: { start: 1232, end: 1243 } },
			directives: [],
			values: [
				{
					kind: "EnumValueDefinition",
					name: { kind: "Name", value: "DEFAULT", loc: { start: 1248, end: 1255 } },
					directives: [],
					loc: { start: 1248, end: 1255 },
				},
				{
					kind: "EnumValueDefinition",
					name: { kind: "Name", value: "STATUS", loc: { start: 1258, end: 1264 } },
					directives: [],
					loc: { start: 1258, end: 1264 },
				},
				{
					kind: "EnumValueDefinition",
					name: { kind: "Name", value: "TOTAL", loc: { start: 1267, end: 1272 } },
					directives: [],
					loc: { start: 1267, end: 1272 },
				},
			],
			loc: { start: 1227, end: 1274 },
		},
		{
			kind: "EnumTypeDefinition",
			name: { kind: "Name", value: "ProductsSortBy", loc: { start: 1281, end: 1295 } },
			directives: [],
			values: [
				{
					kind: "EnumValueDefinition",
					name: { kind: "Name", value: "DEFAULT", loc: { start: 1300, end: 1307 } },
					directives: [],
					loc: { start: 1300, end: 1307 },
				},
				{
					kind: "EnumValueDefinition",
					name: { kind: "Name", value: "PRICE", loc: { start: 1310, end: 1315 } },
					directives: [],
					loc: { start: 1310, end: 1315 },
				},
				{
					kind: "EnumValueDefinition",
					name: { kind: "Name", value: "NAME", loc: { start: 1318, end: 1322 } },
					directives: [],
					loc: { start: 1318, end: 1322 },
				},
			],
			loc: { start: 1276, end: 1324 },
		},
		{
			kind: "ObjectTypeDefinition",
			name: { kind: "Name", value: "Query", loc: { start: 1330, end: 1335 } },
			interfaces: [],
			directives: [],
			fields: [],
			loc: { start: 1325, end: 1335 },
		},
	],
	loc: { start: 0, end: 1336 },
} as unknown as DocumentNode;
