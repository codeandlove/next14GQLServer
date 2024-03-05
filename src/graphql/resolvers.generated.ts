/* This file was automatically generated. DO NOT UPDATE MANUALLY. */
import type { Resolvers } from "./types.generated";
import { Category } from "./schema/resolvers/Category";
import { CategoryList } from "./schema/resolvers/CategoryList";
import { Collection } from "./schema/resolvers/Collection";
import { CollectionList } from "./schema/resolvers/CollectionList";
import { Meta } from "./schema/resolvers/Meta";
import { createOrder as Mutation_createOrder } from "./schema/resolvers/Mutation/createOrder";
import { createOrderItem as Mutation_createOrderItem } from "./schema/resolvers/Mutation/createOrderItem";
import { removeOrderItem as Mutation_removeOrderItem } from "./schema/resolvers/Mutation/removeOrderItem";
import { updateOrderItem as Mutation_updateOrderItem } from "./schema/resolvers/Mutation/updateOrderItem";
import { Order } from "./schema/resolvers/Order";
import { OrderItem } from "./schema/resolvers/OrderItem";
import { Product } from "./schema/resolvers/Product";
import { ProductList } from "./schema/resolvers/ProductList";
import { categories as Query_categories } from "./schema/resolvers/Query/categories";
import { category as Query_category } from "./schema/resolvers/Query/category";
import { collection as Query_collection } from "./schema/resolvers/Query/collection";
import { collections as Query_collections } from "./schema/resolvers/Query/collections";
import { order as Query_order } from "./schema/resolvers/Query/order";
import { product as Query_product } from "./schema/resolvers/Query/product";
import { products as Query_products } from "./schema/resolvers/Query/products";
import { DateTimeResolver } from "graphql-scalars";
export const resolvers: Resolvers = {
	Query: {
		categories: Query_categories,
		category: Query_category,
		collection: Query_collection,
		collections: Query_collections,
		order: Query_order,
		product: Query_product,
		products: Query_products,
	},
	Mutation: {
		createOrder: Mutation_createOrder,
		createOrderItem: Mutation_createOrderItem,
		removeOrderItem: Mutation_removeOrderItem,
		updateOrderItem: Mutation_updateOrderItem,
	},

	Category: Category,
	CategoryList: CategoryList,
	Collection: Collection,
	CollectionList: CollectionList,
	Meta: Meta,
	Order: Order,
	OrderItem: OrderItem,
	Product: Product,
	ProductList: ProductList,
	DateTime: DateTimeResolver,
};
