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
          name: { kind: "Name", value: "cart", loc: { start: 22, end: 26 } },
          arguments: [
            {
              kind: "InputValueDefinition",
              name: { kind: "Name", value: "id", loc: { start: 27, end: 29 } },
              type: {
                kind: "NonNullType",
                type: {
                  kind: "NamedType",
                  name: {
                    kind: "Name",
                    value: "ID",
                    loc: { start: 31, end: 33 },
                  },
                  loc: { start: 31, end: 33 },
                },
                loc: { start: 31, end: 34 },
              },
              directives: [],
              loc: { start: 27, end: 34 },
            },
          ],
          type: {
            kind: "NonNullType",
            type: {
              kind: "NamedType",
              name: {
                kind: "Name",
                value: "Cart",
                loc: { start: 37, end: 41 },
              },
              loc: { start: 37, end: 41 },
            },
            loc: { start: 37, end: 42 },
          },
          directives: [],
          loc: { start: 22, end: 42 },
        },
        {
          kind: "FieldDefinition",
          name: {
            kind: "Name",
            value: "category",
            loc: { start: 45, end: 53 },
          },
          arguments: [
            {
              kind: "InputValueDefinition",
              name: { kind: "Name", value: "id", loc: { start: 54, end: 56 } },
              type: {
                kind: "NamedType",
                name: {
                  kind: "Name",
                  value: "ID",
                  loc: { start: 58, end: 60 },
                },
                loc: { start: 58, end: 60 },
              },
              directives: [],
              loc: { start: 54, end: 60 },
            },
            {
              kind: "InputValueDefinition",
              name: {
                kind: "Name",
                value: "slug",
                loc: { start: 62, end: 66 },
              },
              type: {
                kind: "NamedType",
                name: {
                  kind: "Name",
                  value: "String",
                  loc: { start: 68, end: 74 },
                },
                loc: { start: 68, end: 74 },
              },
              directives: [],
              loc: { start: 62, end: 74 },
            },
          ],
          type: {
            kind: "NonNullType",
            type: {
              kind: "NamedType",
              name: {
                kind: "Name",
                value: "Category",
                loc: { start: 77, end: 85 },
              },
              loc: { start: 77, end: 85 },
            },
            loc: { start: 77, end: 86 },
          },
          directives: [],
          loc: { start: 45, end: 86 },
        },
        {
          kind: "FieldDefinition",
          name: {
            kind: "Name",
            value: "categories",
            loc: { start: 89, end: 99 },
          },
          arguments: [
            {
              kind: "InputValueDefinition",
              name: {
                kind: "Name",
                value: "take",
                loc: { start: 100, end: 104 },
              },
              type: {
                kind: "NonNullType",
                type: {
                  kind: "NamedType",
                  name: {
                    kind: "Name",
                    value: "Int",
                    loc: { start: 106, end: 109 },
                  },
                  loc: { start: 106, end: 109 },
                },
                loc: { start: 106, end: 110 },
              },
              directives: [],
              loc: { start: 100, end: 110 },
            },
            {
              kind: "InputValueDefinition",
              name: {
                kind: "Name",
                value: "skip",
                loc: { start: 112, end: 116 },
              },
              type: {
                kind: "NonNullType",
                type: {
                  kind: "NamedType",
                  name: {
                    kind: "Name",
                    value: "Int",
                    loc: { start: 118, end: 121 },
                  },
                  loc: { start: 118, end: 121 },
                },
                loc: { start: 118, end: 122 },
              },
              directives: [],
              loc: { start: 112, end: 122 },
            },
          ],
          type: {
            kind: "NonNullType",
            type: {
              kind: "NamedType",
              name: {
                kind: "Name",
                value: "CategoryList",
                loc: { start: 125, end: 137 },
              },
              loc: { start: 125, end: 137 },
            },
            loc: { start: 125, end: 138 },
          },
          directives: [],
          loc: { start: 89, end: 138 },
        },
        {
          kind: "FieldDefinition",
          name: {
            kind: "Name",
            value: "collection",
            loc: { start: 141, end: 151 },
          },
          arguments: [
            {
              kind: "InputValueDefinition",
              name: {
                kind: "Name",
                value: "id",
                loc: { start: 152, end: 154 },
              },
              type: {
                kind: "NamedType",
                name: {
                  kind: "Name",
                  value: "ID",
                  loc: { start: 156, end: 158 },
                },
                loc: { start: 156, end: 158 },
              },
              directives: [],
              loc: { start: 152, end: 158 },
            },
            {
              kind: "InputValueDefinition",
              name: {
                kind: "Name",
                value: "slug",
                loc: { start: 160, end: 164 },
              },
              type: {
                kind: "NamedType",
                name: {
                  kind: "Name",
                  value: "String",
                  loc: { start: 166, end: 172 },
                },
                loc: { start: 166, end: 172 },
              },
              directives: [],
              loc: { start: 160, end: 172 },
            },
          ],
          type: {
            kind: "NonNullType",
            type: {
              kind: "NamedType",
              name: {
                kind: "Name",
                value: "Collection",
                loc: { start: 175, end: 185 },
              },
              loc: { start: 175, end: 185 },
            },
            loc: { start: 175, end: 186 },
          },
          directives: [],
          loc: { start: 141, end: 186 },
        },
        {
          kind: "FieldDefinition",
          name: {
            kind: "Name",
            value: "collections",
            loc: { start: 189, end: 200 },
          },
          arguments: [
            {
              kind: "InputValueDefinition",
              name: {
                kind: "Name",
                value: "take",
                loc: { start: 201, end: 205 },
              },
              type: {
                kind: "NonNullType",
                type: {
                  kind: "NamedType",
                  name: {
                    kind: "Name",
                    value: "Int",
                    loc: { start: 207, end: 210 },
                  },
                  loc: { start: 207, end: 210 },
                },
                loc: { start: 207, end: 211 },
              },
              directives: [],
              loc: { start: 201, end: 211 },
            },
            {
              kind: "InputValueDefinition",
              name: {
                kind: "Name",
                value: "skip",
                loc: { start: 213, end: 217 },
              },
              type: {
                kind: "NonNullType",
                type: {
                  kind: "NamedType",
                  name: {
                    kind: "Name",
                    value: "Int",
                    loc: { start: 219, end: 222 },
                  },
                  loc: { start: 219, end: 222 },
                },
                loc: { start: 219, end: 223 },
              },
              directives: [],
              loc: { start: 213, end: 223 },
            },
          ],
          type: {
            kind: "NonNullType",
            type: {
              kind: "NamedType",
              name: {
                kind: "Name",
                value: "CollectionList",
                loc: { start: 226, end: 240 },
              },
              loc: { start: 226, end: 240 },
            },
            loc: { start: 226, end: 241 },
          },
          directives: [],
          loc: { start: 189, end: 241 },
        },
        {
          kind: "FieldDefinition",
          name: { kind: "Name", value: "order", loc: { start: 244, end: 249 } },
          arguments: [
            {
              kind: "InputValueDefinition",
              name: {
                kind: "Name",
                value: "id",
                loc: { start: 250, end: 252 },
              },
              type: {
                kind: "NonNullType",
                type: {
                  kind: "NamedType",
                  name: {
                    kind: "Name",
                    value: "ID",
                    loc: { start: 254, end: 256 },
                  },
                  loc: { start: 254, end: 256 },
                },
                loc: { start: 254, end: 257 },
              },
              directives: [],
              loc: { start: 250, end: 257 },
            },
          ],
          type: {
            kind: "NonNullType",
            type: {
              kind: "NamedType",
              name: {
                kind: "Name",
                value: "Order",
                loc: { start: 260, end: 265 },
              },
              loc: { start: 260, end: 265 },
            },
            loc: { start: 260, end: 266 },
          },
          directives: [],
          loc: { start: 244, end: 266 },
        },
        {
          kind: "FieldDefinition",
          name: {
            kind: "Name",
            value: "orders",
            loc: { start: 269, end: 275 },
          },
          arguments: [
            {
              kind: "InputValueDefinition",
              name: {
                kind: "Name",
                value: "email",
                loc: { start: 276, end: 281 },
              },
              type: {
                kind: "NonNullType",
                type: {
                  kind: "NamedType",
                  name: {
                    kind: "Name",
                    value: "String",
                    loc: { start: 283, end: 289 },
                  },
                  loc: { start: 283, end: 289 },
                },
                loc: { start: 283, end: 290 },
              },
              directives: [],
              loc: { start: 276, end: 290 },
            },
            {
              kind: "InputValueDefinition",
              name: {
                kind: "Name",
                value: "order",
                loc: { start: 292, end: 297 },
              },
              type: {
                kind: "NonNullType",
                type: {
                  kind: "NamedType",
                  name: {
                    kind: "Name",
                    value: "SortDirection",
                    loc: { start: 299, end: 312 },
                  },
                  loc: { start: 299, end: 312 },
                },
                loc: { start: 299, end: 313 },
              },
              defaultValue: {
                kind: "EnumValue",
                value: "ASC",
                loc: { start: 316, end: 319 },
              },
              directives: [],
              loc: { start: 292, end: 319 },
            },
            {
              kind: "InputValueDefinition",
              name: {
                kind: "Name",
                value: "orderBy",
                loc: { start: 321, end: 328 },
              },
              type: {
                kind: "NonNullType",
                type: {
                  kind: "NamedType",
                  name: {
                    kind: "Name",
                    value: "OrderSortBy",
                    loc: { start: 330, end: 341 },
                  },
                  loc: { start: 330, end: 341 },
                },
                loc: { start: 330, end: 342 },
              },
              defaultValue: {
                kind: "EnumValue",
                value: "DEFAULT",
                loc: { start: 345, end: 352 },
              },
              directives: [],
              loc: { start: 321, end: 352 },
            },
            {
              kind: "InputValueDefinition",
              name: {
                kind: "Name",
                value: "take",
                loc: { start: 354, end: 358 },
              },
              type: {
                kind: "NonNullType",
                type: {
                  kind: "NamedType",
                  name: {
                    kind: "Name",
                    value: "Int",
                    loc: { start: 360, end: 363 },
                  },
                  loc: { start: 360, end: 363 },
                },
                loc: { start: 360, end: 364 },
              },
              directives: [],
              loc: { start: 354, end: 364 },
            },
            {
              kind: "InputValueDefinition",
              name: {
                kind: "Name",
                value: "skip",
                loc: { start: 366, end: 370 },
              },
              type: {
                kind: "NonNullType",
                type: {
                  kind: "NamedType",
                  name: {
                    kind: "Name",
                    value: "Int",
                    loc: { start: 372, end: 375 },
                  },
                  loc: { start: 372, end: 375 },
                },
                loc: { start: 372, end: 376 },
              },
              directives: [],
              loc: { start: 366, end: 376 },
            },
          ],
          type: {
            kind: "NonNullType",
            type: {
              kind: "NamedType",
              name: {
                kind: "Name",
                value: "OrderList",
                loc: { start: 379, end: 388 },
              },
              loc: { start: 379, end: 388 },
            },
            loc: { start: 379, end: 389 },
          },
          directives: [],
          loc: { start: 269, end: 389 },
        },
        {
          kind: "FieldDefinition",
          name: {
            kind: "Name",
            value: "product",
            loc: { start: 392, end: 399 },
          },
          arguments: [
            {
              kind: "InputValueDefinition",
              name: {
                kind: "Name",
                value: "id",
                loc: { start: 400, end: 402 },
              },
              type: {
                kind: "NamedType",
                name: {
                  kind: "Name",
                  value: "ID",
                  loc: { start: 404, end: 406 },
                },
                loc: { start: 404, end: 406 },
              },
              directives: [],
              loc: { start: 400, end: 406 },
            },
            {
              kind: "InputValueDefinition",
              name: {
                kind: "Name",
                value: "slug",
                loc: { start: 408, end: 412 },
              },
              type: {
                kind: "NamedType",
                name: {
                  kind: "Name",
                  value: "String",
                  loc: { start: 414, end: 420 },
                },
                loc: { start: 414, end: 420 },
              },
              directives: [],
              loc: { start: 408, end: 420 },
            },
          ],
          type: {
            kind: "NonNullType",
            type: {
              kind: "NamedType",
              name: {
                kind: "Name",
                value: "Product",
                loc: { start: 423, end: 430 },
              },
              loc: { start: 423, end: 430 },
            },
            loc: { start: 423, end: 431 },
          },
          directives: [],
          loc: { start: 392, end: 431 },
        },
        {
          kind: "FieldDefinition",
          name: {
            kind: "Name",
            value: "products",
            loc: { start: 434, end: 442 },
          },
          arguments: [
            {
              kind: "InputValueDefinition",
              name: {
                kind: "Name",
                value: "order",
                loc: { start: 443, end: 448 },
              },
              type: {
                kind: "NonNullType",
                type: {
                  kind: "NamedType",
                  name: {
                    kind: "Name",
                    value: "SortDirection",
                    loc: { start: 450, end: 463 },
                  },
                  loc: { start: 450, end: 463 },
                },
                loc: { start: 450, end: 464 },
              },
              defaultValue: {
                kind: "EnumValue",
                value: "ASC",
                loc: { start: 467, end: 470 },
              },
              directives: [],
              loc: { start: 443, end: 470 },
            },
            {
              kind: "InputValueDefinition",
              name: {
                kind: "Name",
                value: "orderBy",
                loc: { start: 472, end: 479 },
              },
              type: {
                kind: "NonNullType",
                type: {
                  kind: "NamedType",
                  name: {
                    kind: "Name",
                    value: "ProductsSortBy",
                    loc: { start: 481, end: 495 },
                  },
                  loc: { start: 481, end: 495 },
                },
                loc: { start: 481, end: 496 },
              },
              defaultValue: {
                kind: "EnumValue",
                value: "DEFAULT",
                loc: { start: 499, end: 506 },
              },
              directives: [],
              loc: { start: 472, end: 506 },
            },
            {
              kind: "InputValueDefinition",
              name: {
                kind: "Name",
                value: "search",
                loc: { start: 508, end: 514 },
              },
              type: {
                kind: "NamedType",
                name: {
                  kind: "Name",
                  value: "String",
                  loc: { start: 516, end: 522 },
                },
                loc: { start: 516, end: 522 },
              },
              directives: [],
              loc: { start: 508, end: 522 },
            },
            {
              kind: "InputValueDefinition",
              name: {
                kind: "Name",
                value: "take",
                loc: { start: 524, end: 528 },
              },
              type: {
                kind: "NonNullType",
                type: {
                  kind: "NamedType",
                  name: {
                    kind: "Name",
                    value: "Int",
                    loc: { start: 530, end: 533 },
                  },
                  loc: { start: 530, end: 533 },
                },
                loc: { start: 530, end: 534 },
              },
              directives: [],
              loc: { start: 524, end: 534 },
            },
            {
              kind: "InputValueDefinition",
              name: {
                kind: "Name",
                value: "skip",
                loc: { start: 536, end: 540 },
              },
              type: {
                kind: "NonNullType",
                type: {
                  kind: "NamedType",
                  name: {
                    kind: "Name",
                    value: "Int",
                    loc: { start: 542, end: 545 },
                  },
                  loc: { start: 542, end: 545 },
                },
                loc: { start: 542, end: 546 },
              },
              directives: [],
              loc: { start: 536, end: 546 },
            },
          ],
          type: {
            kind: "NonNullType",
            type: {
              kind: "NamedType",
              name: {
                kind: "Name",
                value: "ProductList",
                loc: { start: 549, end: 560 },
              },
              loc: { start: 549, end: 560 },
            },
            loc: { start: 549, end: 561 },
          },
          directives: [],
          loc: { start: 434, end: 561 },
        },
      ],
      loc: { start: 0, end: 563 },
    },
    {
      kind: "ObjectTypeDefinition",
      name: { kind: "Name", value: "Cart", loc: { start: 570, end: 574 } },
      interfaces: [],
      directives: [],
      fields: [
        {
          kind: "FieldDefinition",
          name: { kind: "Name", value: "id", loc: { start: 579, end: 581 } },
          arguments: [],
          type: {
            kind: "NonNullType",
            type: {
              kind: "NamedType",
              name: {
                kind: "Name",
                value: "ID",
                loc: { start: 583, end: 585 },
              },
              loc: { start: 583, end: 585 },
            },
            loc: { start: 583, end: 586 },
          },
          directives: [],
          loc: { start: 579, end: 586 },
        },
        {
          kind: "FieldDefinition",
          name: { kind: "Name", value: "items", loc: { start: 589, end: 594 } },
          arguments: [],
          type: {
            kind: "NonNullType",
            type: {
              kind: "ListType",
              type: {
                kind: "NonNullType",
                type: {
                  kind: "NamedType",
                  name: {
                    kind: "Name",
                    value: "CartItem",
                    loc: { start: 597, end: 605 },
                  },
                  loc: { start: 597, end: 605 },
                },
                loc: { start: 597, end: 606 },
              },
              loc: { start: 596, end: 607 },
            },
            loc: { start: 596, end: 608 },
          },
          directives: [],
          loc: { start: 589, end: 608 },
        },
      ],
      loc: { start: 565, end: 610 },
    },
    {
      kind: "ObjectTypeDefinition",
      name: { kind: "Name", value: "CartItem", loc: { start: 617, end: 625 } },
      interfaces: [],
      directives: [],
      fields: [
        {
          kind: "FieldDefinition",
          name: {
            kind: "Name",
            value: "product",
            loc: { start: 630, end: 637 },
          },
          arguments: [],
          type: {
            kind: "NonNullType",
            type: {
              kind: "NamedType",
              name: {
                kind: "Name",
                value: "Product",
                loc: { start: 639, end: 646 },
              },
              loc: { start: 639, end: 646 },
            },
            loc: { start: 639, end: 647 },
          },
          directives: [],
          loc: { start: 630, end: 647 },
        },
        {
          kind: "FieldDefinition",
          name: {
            kind: "Name",
            value: "quantity",
            loc: { start: 650, end: 658 },
          },
          arguments: [],
          type: {
            kind: "NonNullType",
            type: {
              kind: "NamedType",
              name: {
                kind: "Name",
                value: "Int",
                loc: { start: 660, end: 663 },
              },
              loc: { start: 660, end: 663 },
            },
            loc: { start: 660, end: 664 },
          },
          directives: [],
          loc: { start: 650, end: 664 },
        },
      ],
      loc: { start: 612, end: 666 },
    },
    {
      kind: "ObjectTypeDefinition",
      name: { kind: "Name", value: "Category", loc: { start: 673, end: 681 } },
      interfaces: [],
      directives: [],
      fields: [
        {
          kind: "FieldDefinition",
          name: { kind: "Name", value: "id", loc: { start: 686, end: 688 } },
          arguments: [],
          type: {
            kind: "NonNullType",
            type: {
              kind: "NamedType",
              name: {
                kind: "Name",
                value: "ID",
                loc: { start: 690, end: 692 },
              },
              loc: { start: 690, end: 692 },
            },
            loc: { start: 690, end: 693 },
          },
          directives: [],
          loc: { start: 686, end: 693 },
        },
        {
          kind: "FieldDefinition",
          name: { kind: "Name", value: "name", loc: { start: 696, end: 700 } },
          arguments: [],
          type: {
            kind: "NonNullType",
            type: {
              kind: "NamedType",
              name: {
                kind: "Name",
                value: "String",
                loc: { start: 702, end: 708 },
              },
              loc: { start: 702, end: 708 },
            },
            loc: { start: 702, end: 709 },
          },
          directives: [],
          loc: { start: 696, end: 709 },
        },
        {
          kind: "FieldDefinition",
          name: { kind: "Name", value: "slug", loc: { start: 712, end: 716 } },
          arguments: [],
          type: {
            kind: "NonNullType",
            type: {
              kind: "NamedType",
              name: {
                kind: "Name",
                value: "String",
                loc: { start: 718, end: 724 },
              },
              loc: { start: 718, end: 724 },
            },
            loc: { start: 718, end: 725 },
          },
          directives: [],
          loc: { start: 712, end: 725 },
        },
        {
          kind: "FieldDefinition",
          name: {
            kind: "Name",
            value: "description",
            loc: { start: 728, end: 739 },
          },
          arguments: [],
          type: {
            kind: "NonNullType",
            type: {
              kind: "NamedType",
              name: {
                kind: "Name",
                value: "String",
                loc: { start: 741, end: 747 },
              },
              loc: { start: 741, end: 747 },
            },
            loc: { start: 741, end: 748 },
          },
          directives: [],
          loc: { start: 728, end: 748 },
        },
        {
          kind: "FieldDefinition",
          name: {
            kind: "Name",
            value: "products",
            loc: { start: 751, end: 759 },
          },
          arguments: [],
          type: {
            kind: "NonNullType",
            type: {
              kind: "ListType",
              type: {
                kind: "NonNullType",
                type: {
                  kind: "NamedType",
                  name: {
                    kind: "Name",
                    value: "Product",
                    loc: { start: 762, end: 769 },
                  },
                  loc: { start: 762, end: 769 },
                },
                loc: { start: 762, end: 770 },
              },
              loc: { start: 761, end: 771 },
            },
            loc: { start: 761, end: 772 },
          },
          directives: [],
          loc: { start: 751, end: 772 },
        },
      ],
      loc: { start: 668, end: 774 },
    },
    {
      kind: "ObjectTypeDefinition",
      name: {
        kind: "Name",
        value: "CategoryList",
        loc: { start: 781, end: 793 },
      },
      interfaces: [],
      directives: [],
      fields: [
        {
          kind: "FieldDefinition",
          name: { kind: "Name", value: "data", loc: { start: 798, end: 802 } },
          arguments: [],
          type: {
            kind: "NonNullType",
            type: {
              kind: "ListType",
              type: {
                kind: "NonNullType",
                type: {
                  kind: "NamedType",
                  name: {
                    kind: "Name",
                    value: "Category",
                    loc: { start: 805, end: 813 },
                  },
                  loc: { start: 805, end: 813 },
                },
                loc: { start: 805, end: 814 },
              },
              loc: { start: 804, end: 815 },
            },
            loc: { start: 804, end: 816 },
          },
          directives: [],
          loc: { start: 798, end: 816 },
        },
        {
          kind: "FieldDefinition",
          name: { kind: "Name", value: "meta", loc: { start: 819, end: 823 } },
          arguments: [],
          type: {
            kind: "NonNullType",
            type: {
              kind: "NamedType",
              name: {
                kind: "Name",
                value: "Meta",
                loc: { start: 825, end: 829 },
              },
              loc: { start: 825, end: 829 },
            },
            loc: { start: 825, end: 830 },
          },
          directives: [],
          loc: { start: 819, end: 830 },
        },
      ],
      loc: { start: 776, end: 832 },
    },
    {
      kind: "ObjectTypeDefinition",
      name: {
        kind: "Name",
        value: "Collection",
        loc: { start: 839, end: 849 },
      },
      interfaces: [],
      directives: [],
      fields: [
        {
          kind: "FieldDefinition",
          name: { kind: "Name", value: "id", loc: { start: 854, end: 856 } },
          arguments: [],
          type: {
            kind: "NonNullType",
            type: {
              kind: "NamedType",
              name: {
                kind: "Name",
                value: "ID",
                loc: { start: 858, end: 860 },
              },
              loc: { start: 858, end: 860 },
            },
            loc: { start: 858, end: 861 },
          },
          directives: [],
          loc: { start: 854, end: 861 },
        },
        {
          kind: "FieldDefinition",
          name: { kind: "Name", value: "name", loc: { start: 864, end: 868 } },
          arguments: [],
          type: {
            kind: "NonNullType",
            type: {
              kind: "NamedType",
              name: {
                kind: "Name",
                value: "String",
                loc: { start: 870, end: 876 },
              },
              loc: { start: 870, end: 876 },
            },
            loc: { start: 870, end: 877 },
          },
          directives: [],
          loc: { start: 864, end: 877 },
        },
        {
          kind: "FieldDefinition",
          name: { kind: "Name", value: "slug", loc: { start: 880, end: 884 } },
          arguments: [],
          type: {
            kind: "NonNullType",
            type: {
              kind: "NamedType",
              name: {
                kind: "Name",
                value: "String",
                loc: { start: 886, end: 892 },
              },
              loc: { start: 886, end: 892 },
            },
            loc: { start: 886, end: 893 },
          },
          directives: [],
          loc: { start: 880, end: 893 },
        },
        {
          kind: "FieldDefinition",
          name: {
            kind: "Name",
            value: "description",
            loc: { start: 896, end: 907 },
          },
          arguments: [],
          type: {
            kind: "NonNullType",
            type: {
              kind: "NamedType",
              name: {
                kind: "Name",
                value: "String",
                loc: { start: 909, end: 915 },
              },
              loc: { start: 909, end: 915 },
            },
            loc: { start: 909, end: 916 },
          },
          directives: [],
          loc: { start: 896, end: 916 },
        },
        {
          kind: "FieldDefinition",
          name: {
            kind: "Name",
            value: "products",
            loc: { start: 919, end: 927 },
          },
          arguments: [],
          type: {
            kind: "NonNullType",
            type: {
              kind: "ListType",
              type: {
                kind: "NonNullType",
                type: {
                  kind: "NamedType",
                  name: {
                    kind: "Name",
                    value: "Product",
                    loc: { start: 930, end: 937 },
                  },
                  loc: { start: 930, end: 937 },
                },
                loc: { start: 930, end: 938 },
              },
              loc: { start: 929, end: 939 },
            },
            loc: { start: 929, end: 940 },
          },
          directives: [],
          loc: { start: 919, end: 940 },
        },
      ],
      loc: { start: 834, end: 942 },
    },
    {
      kind: "ObjectTypeDefinition",
      name: {
        kind: "Name",
        value: "CollectionList",
        loc: { start: 949, end: 963 },
      },
      interfaces: [],
      directives: [],
      fields: [
        {
          kind: "FieldDefinition",
          name: { kind: "Name", value: "data", loc: { start: 968, end: 972 } },
          arguments: [],
          type: {
            kind: "NonNullType",
            type: {
              kind: "ListType",
              type: {
                kind: "NonNullType",
                type: {
                  kind: "NamedType",
                  name: {
                    kind: "Name",
                    value: "Collection",
                    loc: { start: 975, end: 985 },
                  },
                  loc: { start: 975, end: 985 },
                },
                loc: { start: 975, end: 986 },
              },
              loc: { start: 974, end: 987 },
            },
            loc: { start: 974, end: 988 },
          },
          directives: [],
          loc: { start: 968, end: 988 },
        },
        {
          kind: "FieldDefinition",
          name: { kind: "Name", value: "meta", loc: { start: 991, end: 995 } },
          arguments: [],
          type: {
            kind: "NonNullType",
            type: {
              kind: "NamedType",
              name: {
                kind: "Name",
                value: "Meta",
                loc: { start: 997, end: 1001 },
              },
              loc: { start: 997, end: 1001 },
            },
            loc: { start: 997, end: 1002 },
          },
          directives: [],
          loc: { start: 991, end: 1002 },
        },
      ],
      loc: { start: 944, end: 1004 },
    },
    {
      kind: "ObjectTypeDefinition",
      name: { kind: "Name", value: "Product", loc: { start: 1011, end: 1018 } },
      interfaces: [],
      directives: [],
      fields: [
        {
          kind: "FieldDefinition",
          name: { kind: "Name", value: "id", loc: { start: 1023, end: 1025 } },
          arguments: [],
          type: {
            kind: "NonNullType",
            type: {
              kind: "NamedType",
              name: {
                kind: "Name",
                value: "ID",
                loc: { start: 1027, end: 1029 },
              },
              loc: { start: 1027, end: 1029 },
            },
            loc: { start: 1027, end: 1030 },
          },
          directives: [],
          loc: { start: 1023, end: 1030 },
        },
        {
          kind: "FieldDefinition",
          name: {
            kind: "Name",
            value: "name",
            loc: { start: 1033, end: 1037 },
          },
          arguments: [],
          type: {
            kind: "NonNullType",
            type: {
              kind: "NamedType",
              name: {
                kind: "Name",
                value: "String",
                loc: { start: 1039, end: 1045 },
              },
              loc: { start: 1039, end: 1045 },
            },
            loc: { start: 1039, end: 1046 },
          },
          directives: [],
          loc: { start: 1033, end: 1046 },
        },
        {
          kind: "FieldDefinition",
          name: {
            kind: "Name",
            value: "slug",
            loc: { start: 1049, end: 1053 },
          },
          arguments: [],
          type: {
            kind: "NonNullType",
            type: {
              kind: "NamedType",
              name: {
                kind: "Name",
                value: "String",
                loc: { start: 1055, end: 1061 },
              },
              loc: { start: 1055, end: 1061 },
            },
            loc: { start: 1055, end: 1062 },
          },
          directives: [],
          loc: { start: 1049, end: 1062 },
        },
        {
          kind: "FieldDefinition",
          name: {
            kind: "Name",
            value: "categories",
            loc: { start: 1065, end: 1075 },
          },
          arguments: [],
          type: {
            kind: "NonNullType",
            type: {
              kind: "ListType",
              type: {
                kind: "NonNullType",
                type: {
                  kind: "NamedType",
                  name: {
                    kind: "Name",
                    value: "Category",
                    loc: { start: 1078, end: 1086 },
                  },
                  loc: { start: 1078, end: 1086 },
                },
                loc: { start: 1078, end: 1087 },
              },
              loc: { start: 1077, end: 1088 },
            },
            loc: { start: 1077, end: 1089 },
          },
          directives: [],
          loc: { start: 1065, end: 1089 },
        },
        {
          kind: "FieldDefinition",
          name: {
            kind: "Name",
            value: "collections",
            loc: { start: 1092, end: 1103 },
          },
          arguments: [],
          type: {
            kind: "NonNullType",
            type: {
              kind: "ListType",
              type: {
                kind: "NonNullType",
                type: {
                  kind: "NamedType",
                  name: {
                    kind: "Name",
                    value: "Collection",
                    loc: { start: 1106, end: 1116 },
                  },
                  loc: { start: 1106, end: 1116 },
                },
                loc: { start: 1106, end: 1117 },
              },
              loc: { start: 1105, end: 1118 },
            },
            loc: { start: 1105, end: 1119 },
          },
          directives: [],
          loc: { start: 1092, end: 1119 },
        },
        {
          kind: "FieldDefinition",
          name: {
            kind: "Name",
            value: "description",
            loc: { start: 1122, end: 1133 },
          },
          arguments: [],
          type: {
            kind: "NonNullType",
            type: {
              kind: "NamedType",
              name: {
                kind: "Name",
                value: "String",
                loc: { start: 1135, end: 1141 },
              },
              loc: { start: 1135, end: 1141 },
            },
            loc: { start: 1135, end: 1142 },
          },
          directives: [],
          loc: { start: 1122, end: 1142 },
        },
        {
          kind: "FieldDefinition",
          name: {
            kind: "Name",
            value: "longDescription",
            loc: { start: 1145, end: 1160 },
          },
          arguments: [],
          type: {
            kind: "NonNullType",
            type: {
              kind: "NamedType",
              name: {
                kind: "Name",
                value: "String",
                loc: { start: 1162, end: 1168 },
              },
              loc: { start: 1162, end: 1168 },
            },
            loc: { start: 1162, end: 1169 },
          },
          directives: [],
          loc: { start: 1145, end: 1169 },
        },
        {
          kind: "FieldDefinition",
          name: {
            kind: "Name",
            value: "price",
            loc: { start: 1172, end: 1177 },
          },
          arguments: [],
          type: {
            kind: "NonNullType",
            type: {
              kind: "NamedType",
              name: {
                kind: "Name",
                value: "Int",
                loc: { start: 1179, end: 1182 },
              },
              loc: { start: 1179, end: 1182 },
            },
            loc: { start: 1179, end: 1183 },
          },
          directives: [],
          loc: { start: 1172, end: 1183 },
        },
        {
          kind: "FieldDefinition",
          name: {
            kind: "Name",
            value: "rating",
            loc: { start: 1186, end: 1192 },
          },
          arguments: [],
          type: {
            kind: "NonNullType",
            type: {
              kind: "NamedType",
              name: {
                kind: "Name",
                value: "Int",
                loc: { start: 1194, end: 1197 },
              },
              loc: { start: 1194, end: 1197 },
            },
            loc: { start: 1194, end: 1198 },
          },
          directives: [],
          loc: { start: 1186, end: 1198 },
        },
        {
          kind: "FieldDefinition",
          name: {
            kind: "Name",
            value: "image",
            loc: { start: 1201, end: 1206 },
          },
          arguments: [],
          type: {
            kind: "NonNullType",
            type: {
              kind: "NamedType",
              name: {
                kind: "Name",
                value: "String",
                loc: { start: 1208, end: 1214 },
              },
              loc: { start: 1208, end: 1214 },
            },
            loc: { start: 1208, end: 1215 },
          },
          directives: [],
          loc: { start: 1201, end: 1215 },
        },
      ],
      loc: { start: 1006, end: 1217 },
    },
    {
      kind: "ObjectTypeDefinition",
      name: {
        kind: "Name",
        value: "ProductList",
        loc: { start: 1224, end: 1235 },
      },
      interfaces: [],
      directives: [],
      fields: [
        {
          kind: "FieldDefinition",
          name: {
            kind: "Name",
            value: "data",
            loc: { start: 1240, end: 1244 },
          },
          arguments: [],
          type: {
            kind: "NonNullType",
            type: {
              kind: "ListType",
              type: {
                kind: "NonNullType",
                type: {
                  kind: "NamedType",
                  name: {
                    kind: "Name",
                    value: "Product",
                    loc: { start: 1247, end: 1254 },
                  },
                  loc: { start: 1247, end: 1254 },
                },
                loc: { start: 1247, end: 1255 },
              },
              loc: { start: 1246, end: 1256 },
            },
            loc: { start: 1246, end: 1257 },
          },
          directives: [],
          loc: { start: 1240, end: 1257 },
        },
        {
          kind: "FieldDefinition",
          name: {
            kind: "Name",
            value: "meta",
            loc: { start: 1260, end: 1264 },
          },
          arguments: [],
          type: {
            kind: "NonNullType",
            type: {
              kind: "NamedType",
              name: {
                kind: "Name",
                value: "Meta",
                loc: { start: 1266, end: 1270 },
              },
              loc: { start: 1266, end: 1270 },
            },
            loc: { start: 1266, end: 1271 },
          },
          directives: [],
          loc: { start: 1260, end: 1271 },
        },
      ],
      loc: { start: 1219, end: 1273 },
    },
    {
      kind: "ObjectTypeDefinition",
      name: { kind: "Name", value: "Order", loc: { start: 1280, end: 1285 } },
      interfaces: [],
      directives: [],
      fields: [
        {
          kind: "FieldDefinition",
          name: { kind: "Name", value: "id", loc: { start: 1290, end: 1292 } },
          arguments: [],
          type: {
            kind: "NonNullType",
            type: {
              kind: "NamedType",
              name: {
                kind: "Name",
                value: "ID",
                loc: { start: 1294, end: 1296 },
              },
              loc: { start: 1294, end: 1296 },
            },
            loc: { start: 1294, end: 1297 },
          },
          directives: [],
          loc: { start: 1290, end: 1297 },
        },
        {
          kind: "FieldDefinition",
          name: {
            kind: "Name",
            value: "totalAmount",
            loc: { start: 1300, end: 1311 },
          },
          arguments: [],
          type: {
            kind: "NonNullType",
            type: {
              kind: "NamedType",
              name: {
                kind: "Name",
                value: "Int",
                loc: { start: 1313, end: 1316 },
              },
              loc: { start: 1313, end: 1316 },
            },
            loc: { start: 1313, end: 1317 },
          },
          directives: [],
          loc: { start: 1300, end: 1317 },
        },
        {
          kind: "FieldDefinition",
          name: {
            kind: "Name",
            value: "status",
            loc: { start: 1320, end: 1326 },
          },
          arguments: [],
          type: {
            kind: "NonNullType",
            type: {
              kind: "NamedType",
              name: {
                kind: "Name",
                value: "OrderStatus",
                loc: { start: 1328, end: 1339 },
              },
              loc: { start: 1328, end: 1339 },
            },
            loc: { start: 1328, end: 1340 },
          },
          directives: [],
          loc: { start: 1320, end: 1340 },
        },
        {
          kind: "FieldDefinition",
          name: {
            kind: "Name",
            value: "lines",
            loc: { start: 1343, end: 1348 },
          },
          arguments: [],
          type: {
            kind: "NonNullType",
            type: {
              kind: "NamedType",
              name: {
                kind: "Name",
                value: "String",
                loc: { start: 1350, end: 1356 },
              },
              loc: { start: 1350, end: 1356 },
            },
            loc: { start: 1350, end: 1357 },
          },
          directives: [],
          loc: { start: 1343, end: 1357 },
        },
        {
          kind: "FieldDefinition",
          name: {
            kind: "Name",
            value: "createAt",
            loc: { start: 1360, end: 1368 },
          },
          arguments: [],
          type: {
            kind: "NonNullType",
            type: {
              kind: "NamedType",
              name: {
                kind: "Name",
                value: "String",
                loc: { start: 1370, end: 1376 },
              },
              loc: { start: 1370, end: 1376 },
            },
            loc: { start: 1370, end: 1377 },
          },
          directives: [],
          loc: { start: 1360, end: 1377 },
        },
        {
          kind: "FieldDefinition",
          name: {
            kind: "Name",
            value: "updaetAt",
            loc: { start: 1380, end: 1388 },
          },
          arguments: [],
          type: {
            kind: "NonNullType",
            type: {
              kind: "NamedType",
              name: {
                kind: "Name",
                value: "String",
                loc: { start: 1390, end: 1396 },
              },
              loc: { start: 1390, end: 1396 },
            },
            loc: { start: 1390, end: 1397 },
          },
          directives: [],
          loc: { start: 1380, end: 1397 },
        },
      ],
      loc: { start: 1275, end: 1399 },
    },
    {
      kind: "ObjectTypeDefinition",
      name: {
        kind: "Name",
        value: "OrderList",
        loc: { start: 1406, end: 1415 },
      },
      interfaces: [],
      directives: [],
      fields: [
        {
          kind: "FieldDefinition",
          name: {
            kind: "Name",
            value: "data",
            loc: { start: 1420, end: 1424 },
          },
          arguments: [],
          type: {
            kind: "NonNullType",
            type: {
              kind: "ListType",
              type: {
                kind: "NonNullType",
                type: {
                  kind: "NamedType",
                  name: {
                    kind: "Name",
                    value: "Order",
                    loc: { start: 1427, end: 1432 },
                  },
                  loc: { start: 1427, end: 1432 },
                },
                loc: { start: 1427, end: 1433 },
              },
              loc: { start: 1426, end: 1434 },
            },
            loc: { start: 1426, end: 1435 },
          },
          directives: [],
          loc: { start: 1420, end: 1435 },
        },
        {
          kind: "FieldDefinition",
          name: {
            kind: "Name",
            value: "meta",
            loc: { start: 1438, end: 1442 },
          },
          arguments: [],
          type: {
            kind: "NonNullType",
            type: {
              kind: "NamedType",
              name: {
                kind: "Name",
                value: "Meta",
                loc: { start: 1444, end: 1448 },
              },
              loc: { start: 1444, end: 1448 },
            },
            loc: { start: 1444, end: 1449 },
          },
          directives: [],
          loc: { start: 1438, end: 1449 },
        },
      ],
      loc: { start: 1401, end: 1451 },
    },
    {
      kind: "ObjectTypeDefinition",
      name: { kind: "Name", value: "Meta", loc: { start: 1458, end: 1462 } },
      interfaces: [],
      directives: [],
      fields: [
        {
          kind: "FieldDefinition",
          name: {
            kind: "Name",
            value: "count",
            loc: { start: 1467, end: 1472 },
          },
          arguments: [],
          type: {
            kind: "NonNullType",
            type: {
              kind: "NamedType",
              name: {
                kind: "Name",
                value: "Int",
                loc: { start: 1474, end: 1477 },
              },
              loc: { start: 1474, end: 1477 },
            },
            loc: { start: 1474, end: 1478 },
          },
          directives: [],
          loc: { start: 1467, end: 1478 },
        },
        {
          kind: "FieldDefinition",
          name: {
            kind: "Name",
            value: "total",
            loc: { start: 1481, end: 1486 },
          },
          arguments: [],
          type: {
            kind: "NonNullType",
            type: {
              kind: "NamedType",
              name: {
                kind: "Name",
                value: "Int",
                loc: { start: 1488, end: 1491 },
              },
              loc: { start: 1488, end: 1491 },
            },
            loc: { start: 1488, end: 1492 },
          },
          directives: [],
          loc: { start: 1481, end: 1492 },
        },
      ],
      loc: { start: 1453, end: 1494 },
    },
    {
      kind: "EnumTypeDefinition",
      name: {
        kind: "Name",
        value: "OrderStatus",
        loc: { start: 1501, end: 1512 },
      },
      directives: [],
      values: [
        {
          kind: "EnumValueDefinition",
          name: {
            kind: "Name",
            value: "PAID",
            loc: { start: 1517, end: 1521 },
          },
          directives: [],
          loc: { start: 1517, end: 1521 },
        },
        {
          kind: "EnumValueDefinition",
          name: {
            kind: "Name",
            value: "FULFILLED",
            loc: { start: 1524, end: 1533 },
          },
          directives: [],
          loc: { start: 1524, end: 1533 },
        },
        {
          kind: "EnumValueDefinition",
          name: {
            kind: "Name",
            value: "CREATED",
            loc: { start: 1536, end: 1543 },
          },
          directives: [],
          loc: { start: 1536, end: 1543 },
        },
        {
          kind: "EnumValueDefinition",
          name: {
            kind: "Name",
            value: "CANCELLED",
            loc: { start: 1546, end: 1555 },
          },
          directives: [],
          loc: { start: 1546, end: 1555 },
        },
      ],
      loc: { start: 1496, end: 1557 },
    },
    {
      kind: "EnumTypeDefinition",
      name: {
        kind: "Name",
        value: "SortDirection",
        loc: { start: 1564, end: 1577 },
      },
      directives: [],
      values: [
        {
          kind: "EnumValueDefinition",
          name: { kind: "Name", value: "ASC", loc: { start: 1582, end: 1585 } },
          directives: [],
          loc: { start: 1582, end: 1585 },
        },
        {
          kind: "EnumValueDefinition",
          name: {
            kind: "Name",
            value: "DESC",
            loc: { start: 1588, end: 1592 },
          },
          directives: [],
          loc: { start: 1588, end: 1592 },
        },
      ],
      loc: { start: 1559, end: 1594 },
    },
    {
      kind: "EnumTypeDefinition",
      name: {
        kind: "Name",
        value: "OrderSortBy",
        loc: { start: 1601, end: 1612 },
      },
      directives: [],
      values: [
        {
          kind: "EnumValueDefinition",
          name: {
            kind: "Name",
            value: "DEFAULT",
            loc: { start: 1617, end: 1624 },
          },
          directives: [],
          loc: { start: 1617, end: 1624 },
        },
        {
          kind: "EnumValueDefinition",
          name: {
            kind: "Name",
            value: "STATUS",
            loc: { start: 1627, end: 1633 },
          },
          directives: [],
          loc: { start: 1627, end: 1633 },
        },
        {
          kind: "EnumValueDefinition",
          name: {
            kind: "Name",
            value: "TOTAL",
            loc: { start: 1636, end: 1641 },
          },
          directives: [],
          loc: { start: 1636, end: 1641 },
        },
      ],
      loc: { start: 1596, end: 1643 },
    },
    {
      kind: "EnumTypeDefinition",
      name: {
        kind: "Name",
        value: "ProductsSortBy",
        loc: { start: 1650, end: 1664 },
      },
      directives: [],
      values: [
        {
          kind: "EnumValueDefinition",
          name: {
            kind: "Name",
            value: "DEFAULT",
            loc: { start: 1669, end: 1676 },
          },
          directives: [],
          loc: { start: 1669, end: 1676 },
        },
        {
          kind: "EnumValueDefinition",
          name: {
            kind: "Name",
            value: "PRICE",
            loc: { start: 1679, end: 1684 },
          },
          directives: [],
          loc: { start: 1679, end: 1684 },
        },
        {
          kind: "EnumValueDefinition",
          name: {
            kind: "Name",
            value: "NAME",
            loc: { start: 1687, end: 1691 },
          },
          directives: [],
          loc: { start: 1687, end: 1691 },
        },
      ],
      loc: { start: 1645, end: 1693 },
    },
    {
      kind: "ObjectTypeDefinition",
      name: { kind: "Name", value: "Query", loc: { start: 1699, end: 1704 } },
      interfaces: [],
      directives: [],
      fields: [],
      loc: { start: 1694, end: 1704 },
    },
  ],
  loc: { start: 0, end: 1705 },
} as unknown as DocumentNode;
