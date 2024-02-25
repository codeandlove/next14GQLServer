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
          name: { kind: "Name", value: "product", loc: { start: 22, end: 29 } },
          arguments: [
            {
              kind: "InputValueDefinition",
              name: { kind: "Name", value: "id", loc: { start: 30, end: 32 } },
              type: {
                kind: "NonNullType",
                type: {
                  kind: "NamedType",
                  name: {
                    kind: "Name",
                    value: "ID",
                    loc: { start: 34, end: 36 },
                  },
                  loc: { start: 34, end: 36 },
                },
                loc: { start: 34, end: 37 },
              },
              directives: [],
              loc: { start: 30, end: 37 },
            },
          ],
          type: {
            kind: "NamedType",
            name: {
              kind: "Name",
              value: "Product",
              loc: { start: 40, end: 47 },
            },
            loc: { start: 40, end: 47 },
          },
          directives: [],
          loc: { start: 22, end: 47 },
        },
        {
          kind: "FieldDefinition",
          name: {
            kind: "Name",
            value: "products",
            loc: { start: 50, end: 58 },
          },
          arguments: [
            {
              kind: "InputValueDefinition",
              name: {
                kind: "Name",
                value: "take",
                loc: { start: 59, end: 63 },
              },
              type: {
                kind: "NonNullType",
                type: {
                  kind: "NamedType",
                  name: {
                    kind: "Name",
                    value: "Int",
                    loc: { start: 65, end: 68 },
                  },
                  loc: { start: 65, end: 68 },
                },
                loc: { start: 65, end: 69 },
              },
              directives: [],
              loc: { start: 59, end: 69 },
            },
            {
              kind: "InputValueDefinition",
              name: {
                kind: "Name",
                value: "skip",
                loc: { start: 71, end: 75 },
              },
              type: {
                kind: "NonNullType",
                type: {
                  kind: "NamedType",
                  name: {
                    kind: "Name",
                    value: "Int",
                    loc: { start: 77, end: 80 },
                  },
                  loc: { start: 77, end: 80 },
                },
                loc: { start: 77, end: 81 },
              },
              directives: [],
              loc: { start: 71, end: 81 },
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
                  name: {
                    kind: "Name",
                    value: "Product",
                    loc: { start: 85, end: 92 },
                  },
                  loc: { start: 85, end: 92 },
                },
                loc: { start: 85, end: 93 },
              },
              loc: { start: 84, end: 94 },
            },
            loc: { start: 84, end: 95 },
          },
          directives: [],
          loc: { start: 50, end: 95 },
        },
        {
          kind: "FieldDefinition",
          name: {
            kind: "Name",
            value: "category",
            loc: { start: 98, end: 106 },
          },
          arguments: [
            {
              kind: "InputValueDefinition",
              name: {
                kind: "Name",
                value: "id",
                loc: { start: 107, end: 109 },
              },
              type: {
                kind: "NonNullType",
                type: {
                  kind: "NamedType",
                  name: {
                    kind: "Name",
                    value: "ID",
                    loc: { start: 111, end: 113 },
                  },
                  loc: { start: 111, end: 113 },
                },
                loc: { start: 111, end: 114 },
              },
              directives: [],
              loc: { start: 107, end: 114 },
            },
          ],
          type: {
            kind: "NamedType",
            name: {
              kind: "Name",
              value: "Category",
              loc: { start: 117, end: 125 },
            },
            loc: { start: 117, end: 125 },
          },
          directives: [],
          loc: { start: 98, end: 125 },
        },
        {
          kind: "FieldDefinition",
          name: {
            kind: "Name",
            value: "categories",
            loc: { start: 128, end: 138 },
          },
          arguments: [
            {
              kind: "InputValueDefinition",
              name: {
                kind: "Name",
                value: "where",
                loc: { start: 139, end: 144 },
              },
              type: {
                kind: "NonNullType",
                type: {
                  kind: "NamedType",
                  name: {
                    kind: "Name",
                    value: "WhereInput",
                    loc: { start: 146, end: 156 },
                  },
                  loc: { start: 146, end: 156 },
                },
                loc: { start: 146, end: 157 },
              },
              directives: [],
              loc: { start: 139, end: 157 },
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
                  name: {
                    kind: "Name",
                    value: "Category",
                    loc: { start: 161, end: 169 },
                  },
                  loc: { start: 161, end: 169 },
                },
                loc: { start: 161, end: 170 },
              },
              loc: { start: 160, end: 171 },
            },
            loc: { start: 160, end: 172 },
          },
          directives: [],
          loc: { start: 128, end: 172 },
        },
      ],
      loc: { start: 0, end: 174 },
    },
    {
      kind: "InputObjectTypeDefinition",
      name: {
        kind: "Name",
        value: "WhereInput",
        loc: { start: 182, end: 192 },
      },
      directives: [],
      fields: [
        {
          kind: "InputValueDefinition",
          name: { kind: "Name", value: "slug", loc: { start: 197, end: 201 } },
          type: {
            kind: "NonNullType",
            type: {
              kind: "NamedType",
              name: {
                kind: "Name",
                value: "String",
                loc: { start: 203, end: 209 },
              },
              loc: { start: 203, end: 209 },
            },
            loc: { start: 203, end: 210 },
          },
          directives: [],
          loc: { start: 197, end: 210 },
        },
      ],
      loc: { start: 176, end: 212 },
    },
    {
      kind: "ObjectTypeDefinition",
      name: { kind: "Name", value: "Product", loc: { start: 219, end: 226 } },
      interfaces: [],
      directives: [],
      fields: [
        {
          kind: "FieldDefinition",
          name: { kind: "Name", value: "id", loc: { start: 231, end: 233 } },
          arguments: [],
          type: {
            kind: "NonNullType",
            type: {
              kind: "NamedType",
              name: {
                kind: "Name",
                value: "ID",
                loc: { start: 235, end: 237 },
              },
              loc: { start: 235, end: 237 },
            },
            loc: { start: 235, end: 238 },
          },
          directives: [],
          loc: { start: 231, end: 238 },
        },
        {
          kind: "FieldDefinition",
          name: { kind: "Name", value: "name", loc: { start: 241, end: 245 } },
          arguments: [],
          type: {
            kind: "NonNullType",
            type: {
              kind: "NamedType",
              name: {
                kind: "Name",
                value: "String",
                loc: { start: 247, end: 253 },
              },
              loc: { start: 247, end: 253 },
            },
            loc: { start: 247, end: 254 },
          },
          directives: [],
          loc: { start: 241, end: 254 },
        },
        {
          kind: "FieldDefinition",
          name: { kind: "Name", value: "slug", loc: { start: 257, end: 261 } },
          arguments: [],
          type: {
            kind: "NonNullType",
            type: {
              kind: "NamedType",
              name: {
                kind: "Name",
                value: "String",
                loc: { start: 263, end: 269 },
              },
              loc: { start: 263, end: 269 },
            },
            loc: { start: 263, end: 270 },
          },
          directives: [],
          loc: { start: 257, end: 270 },
        },
        {
          kind: "FieldDefinition",
          name: {
            kind: "Name",
            value: "categoryId",
            loc: { start: 273, end: 283 },
          },
          arguments: [],
          type: {
            kind: "NonNullType",
            type: {
              kind: "NamedType",
              name: {
                kind: "Name",
                value: "ID",
                loc: { start: 285, end: 287 },
              },
              loc: { start: 285, end: 287 },
            },
            loc: { start: 285, end: 288 },
          },
          directives: [],
          loc: { start: 273, end: 288 },
        },
        {
          kind: "FieldDefinition",
          name: {
            kind: "Name",
            value: "description",
            loc: { start: 291, end: 302 },
          },
          arguments: [],
          type: {
            kind: "NonNullType",
            type: {
              kind: "NamedType",
              name: {
                kind: "Name",
                value: "String",
                loc: { start: 304, end: 310 },
              },
              loc: { start: 304, end: 310 },
            },
            loc: { start: 304, end: 311 },
          },
          directives: [],
          loc: { start: 291, end: 311 },
        },
        {
          kind: "FieldDefinition",
          name: {
            kind: "Name",
            value: "longDescription",
            loc: { start: 314, end: 329 },
          },
          arguments: [],
          type: {
            kind: "NonNullType",
            type: {
              kind: "NamedType",
              name: {
                kind: "Name",
                value: "String",
                loc: { start: 331, end: 337 },
              },
              loc: { start: 331, end: 337 },
            },
            loc: { start: 331, end: 338 },
          },
          directives: [],
          loc: { start: 314, end: 338 },
        },
        {
          kind: "FieldDefinition",
          name: { kind: "Name", value: "price", loc: { start: 341, end: 346 } },
          arguments: [],
          type: {
            kind: "NonNullType",
            type: {
              kind: "NamedType",
              name: {
                kind: "Name",
                value: "Int",
                loc: { start: 348, end: 351 },
              },
              loc: { start: 348, end: 351 },
            },
            loc: { start: 348, end: 352 },
          },
          directives: [],
          loc: { start: 341, end: 352 },
        },
        {
          kind: "FieldDefinition",
          name: {
            kind: "Name",
            value: "rating",
            loc: { start: 355, end: 361 },
          },
          arguments: [],
          type: {
            kind: "NonNullType",
            type: {
              kind: "NamedType",
              name: {
                kind: "Name",
                value: "Int",
                loc: { start: 363, end: 366 },
              },
              loc: { start: 363, end: 366 },
            },
            loc: { start: 363, end: 367 },
          },
          directives: [],
          loc: { start: 355, end: 367 },
        },
        {
          kind: "FieldDefinition",
          name: { kind: "Name", value: "image", loc: { start: 370, end: 375 } },
          arguments: [],
          type: {
            kind: "NonNullType",
            type: {
              kind: "NamedType",
              name: {
                kind: "Name",
                value: "String",
                loc: { start: 377, end: 383 },
              },
              loc: { start: 377, end: 383 },
            },
            loc: { start: 377, end: 384 },
          },
          directives: [],
          loc: { start: 370, end: 384 },
        },
      ],
      loc: { start: 214, end: 386 },
    },
    {
      kind: "ObjectTypeDefinition",
      name: { kind: "Name", value: "Category", loc: { start: 393, end: 401 } },
      interfaces: [],
      directives: [],
      fields: [
        {
          kind: "FieldDefinition",
          name: { kind: "Name", value: "id", loc: { start: 406, end: 408 } },
          arguments: [],
          type: {
            kind: "NonNullType",
            type: {
              kind: "NamedType",
              name: {
                kind: "Name",
                value: "ID",
                loc: { start: 410, end: 412 },
              },
              loc: { start: 410, end: 412 },
            },
            loc: { start: 410, end: 413 },
          },
          directives: [],
          loc: { start: 406, end: 413 },
        },
        {
          kind: "FieldDefinition",
          name: { kind: "Name", value: "name", loc: { start: 416, end: 420 } },
          arguments: [],
          type: {
            kind: "NonNullType",
            type: {
              kind: "NamedType",
              name: {
                kind: "Name",
                value: "String",
                loc: { start: 422, end: 428 },
              },
              loc: { start: 422, end: 428 },
            },
            loc: { start: 422, end: 429 },
          },
          directives: [],
          loc: { start: 416, end: 429 },
        },
        {
          kind: "FieldDefinition",
          name: { kind: "Name", value: "slug", loc: { start: 432, end: 436 } },
          arguments: [],
          type: {
            kind: "NonNullType",
            type: {
              kind: "NamedType",
              name: {
                kind: "Name",
                value: "String",
                loc: { start: 438, end: 444 },
              },
              loc: { start: 438, end: 444 },
            },
            loc: { start: 438, end: 445 },
          },
          directives: [],
          loc: { start: 432, end: 445 },
        },
        {
          kind: "FieldDefinition",
          name: {
            kind: "Name",
            value: "description",
            loc: { start: 448, end: 459 },
          },
          arguments: [],
          type: {
            kind: "NonNullType",
            type: {
              kind: "NamedType",
              name: {
                kind: "Name",
                value: "String",
                loc: { start: 461, end: 467 },
              },
              loc: { start: 461, end: 467 },
            },
            loc: { start: 461, end: 468 },
          },
          directives: [],
          loc: { start: 448, end: 468 },
        },
        {
          kind: "FieldDefinition",
          name: {
            kind: "Name",
            value: "products",
            loc: { start: 471, end: 479 },
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
                    loc: { start: 482, end: 489 },
                  },
                  loc: { start: 482, end: 489 },
                },
                loc: { start: 482, end: 490 },
              },
              loc: { start: 481, end: 491 },
            },
            loc: { start: 481, end: 492 },
          },
          directives: [],
          loc: { start: 471, end: 492 },
        },
      ],
      loc: { start: 388, end: 494 },
    },
    {
      kind: "ObjectTypeDefinition",
      name: { kind: "Name", value: "Query", loc: { start: 500, end: 505 } },
      interfaces: [],
      directives: [],
      fields: [],
      loc: { start: 495, end: 505 },
    },
  ],
  loc: { start: 0, end: 506 },
} as unknown as DocumentNode;
