import { GraphQLResolveInfo, GraphQLScalarType, GraphQLScalarTypeConfig } from "graphql";
export type Maybe<T> = T | null | undefined;
export type InputMaybe<T> = T | null | undefined;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
export type MakeEmpty<T extends { [key: string]: unknown }, K extends keyof T> = {
	[_ in K]?: never;
};
export type Incremental<T> =
	| T
	| { [P in keyof T]?: P extends " $fragmentName" | "__typename" ? T[P] : never };
export type RequireFields<T, K extends keyof T> = Omit<T, K> & { [P in K]-?: NonNullable<T[P]> };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
	ID: { input: string; output: string };
	String: { input: string; output: string };
	Boolean: { input: boolean; output: boolean };
	Int: { input: number; output: number };
	Float: { input: number; output: number };
	DateTime: { input: Date; output: Date };
};

export type Category = {
	__typename?: "Category";
	description: Scalars["String"]["output"];
	id: Scalars["ID"]["output"];
	name: Scalars["String"]["output"];
	products: Array<Product>;
	slug: Scalars["String"]["output"];
};

export type CategoryproductsArgs = {
	skip: Scalars["Int"]["input"];
	take: Scalars["Int"]["input"];
};

export type CategoryList = {
	__typename?: "CategoryList";
	data: Array<Category>;
	meta: Meta;
};

export type Collection = {
	__typename?: "Collection";
	description: Scalars["String"]["output"];
	id: Scalars["ID"]["output"];
	name: Scalars["String"]["output"];
	products: Array<Product>;
	slug: Scalars["String"]["output"];
};

export type CollectionproductsArgs = {
	skip: Scalars["Int"]["input"];
	take: Scalars["Int"]["input"];
};

export type CollectionList = {
	__typename?: "CollectionList";
	data: Array<Collection>;
	meta: Meta;
};

export type Meta = {
	__typename?: "Meta";
	count: Scalars["Int"]["output"];
	total: Scalars["Int"]["output"];
};

export type OrderSortBy = "DEFAULT" | "STATUS" | "TOTAL";

export type OrderStatus = "CANCELLED" | "CREATED" | "FULFILLED" | "PAID";

export type Product = {
	__typename?: "Product";
	categories: Array<Category>;
	collections: Array<Collection>;
	description: Scalars["String"]["output"];
	id: Scalars["ID"]["output"];
	image: Scalars["String"]["output"];
	longDescription: Scalars["String"]["output"];
	name: Scalars["String"]["output"];
	price: Scalars["Int"]["output"];
	rating: Scalars["Int"]["output"];
	slug: Scalars["String"]["output"];
	status: Scalars["String"]["output"];
};

export type ProductList = {
	__typename?: "ProductList";
	data: Array<Product>;
	meta: Meta;
};

export type ProductsSortBy = "DEFAULT" | "NAME" | "PRICE";

export type Query = {
	__typename?: "Query";
	categories: CategoryList;
	category: Category;
	collection: Collection;
	collections: CollectionList;
	product: Product;
	products: ProductList;
};

export type QuerycategoriesArgs = {
	skip: Scalars["Int"]["input"];
	take: Scalars["Int"]["input"];
};

export type QuerycategoryArgs = {
	id?: InputMaybe<Scalars["ID"]["input"]>;
	slug?: InputMaybe<Scalars["String"]["input"]>;
};

export type QuerycollectionArgs = {
	id?: InputMaybe<Scalars["ID"]["input"]>;
	slug?: InputMaybe<Scalars["String"]["input"]>;
};

export type QuerycollectionsArgs = {
	skip: Scalars["Int"]["input"];
	take: Scalars["Int"]["input"];
};

export type QueryproductArgs = {
	id?: InputMaybe<Scalars["ID"]["input"]>;
	slug?: InputMaybe<Scalars["String"]["input"]>;
};

export type QueryproductsArgs = {
	order?: SortDirection;
	orderBy?: ProductsSortBy;
	search?: InputMaybe<Scalars["String"]["input"]>;
	skip: Scalars["Int"]["input"];
	take: Scalars["Int"]["input"];
};

export type SortDirection = "ASC" | "DESC";

export type ResolverTypeWrapper<T> = Promise<T> | T;

export type ResolverWithResolve<TResult, TParent, TContext, TArgs> = {
	resolve: ResolverFn<TResult, TParent, TContext, TArgs>;
};
export type Resolver<TResult, TParent = {}, TContext = {}, TArgs = {}> =
	| ResolverFn<TResult, TParent, TContext, TArgs>
	| ResolverWithResolve<TResult, TParent, TContext, TArgs>;

export type ResolverFn<TResult, TParent, TContext, TArgs> = (
	parent: TParent,
	args: TArgs,
	context: TContext,
	info?: GraphQLResolveInfo,
) => Promise<TResult> | TResult;

export type SubscriptionSubscribeFn<TResult, TParent, TContext, TArgs> = (
	parent: TParent,
	args: TArgs,
	context: TContext,
	info?: GraphQLResolveInfo,
) => AsyncIterable<TResult> | Promise<AsyncIterable<TResult>>;

export type SubscriptionResolveFn<TResult, TParent, TContext, TArgs> = (
	parent: TParent,
	args: TArgs,
	context: TContext,
	info?: GraphQLResolveInfo,
) => TResult | Promise<TResult>;

export interface SubscriptionSubscriberObject<
	TResult,
	TKey extends string,
	TParent,
	TContext,
	TArgs,
> {
	subscribe: SubscriptionSubscribeFn<{ [key in TKey]: TResult }, TParent, TContext, TArgs>;
	resolve?: SubscriptionResolveFn<TResult, { [key in TKey]: TResult }, TContext, TArgs>;
}

export interface SubscriptionResolverObject<TResult, TParent, TContext, TArgs> {
	subscribe: SubscriptionSubscribeFn<any, TParent, TContext, TArgs>;
	resolve: SubscriptionResolveFn<TResult, any, TContext, TArgs>;
}

export type SubscriptionObject<TResult, TKey extends string, TParent, TContext, TArgs> =
	| SubscriptionSubscriberObject<TResult, TKey, TParent, TContext, TArgs>
	| SubscriptionResolverObject<TResult, TParent, TContext, TArgs>;

export type SubscriptionResolver<
	TResult,
	TKey extends string,
	TParent = {},
	TContext = {},
	TArgs = {},
> =
	| ((...args: any[]) => SubscriptionObject<TResult, TKey, TParent, TContext, TArgs>)
	| SubscriptionObject<TResult, TKey, TParent, TContext, TArgs>;

export type TypeResolveFn<TTypes, TParent = {}, TContext = {}> = (
	parent: TParent,
	context: TContext,
	info?: GraphQLResolveInfo,
) => Maybe<TTypes> | Promise<Maybe<TTypes>>;

export type IsTypeOfResolverFn<T = {}, TContext = {}> = (
	obj: T,
	context: TContext,
	info?: GraphQLResolveInfo,
) => boolean | Promise<boolean>;

export type NextResolverFn<T> = () => Promise<T>;

export type DirectiveResolverFn<TResult = {}, TParent = {}, TContext = {}, TArgs = {}> = (
	next: NextResolverFn<TResult>,
	parent: TParent,
	args: TArgs,
	context: TContext,
	info?: GraphQLResolveInfo,
) => TResult | Promise<TResult>;

/** Mapping between all available schema types and the resolvers types */
export type ResolversTypes = {
	Category: ResolverTypeWrapper<Category>;
	String: ResolverTypeWrapper<Scalars["String"]["output"]>;
	ID: ResolverTypeWrapper<Scalars["ID"]["output"]>;
	Int: ResolverTypeWrapper<Scalars["Int"]["output"]>;
	CategoryList: ResolverTypeWrapper<CategoryList>;
	Collection: ResolverTypeWrapper<Collection>;
	CollectionList: ResolverTypeWrapper<CollectionList>;
	DateTime: ResolverTypeWrapper<Scalars["DateTime"]["output"]>;
	Meta: ResolverTypeWrapper<Meta>;
	OrderSortBy: OrderSortBy;
	OrderStatus: OrderStatus;
	Product: ResolverTypeWrapper<Product>;
	ProductList: ResolverTypeWrapper<ProductList>;
	ProductsSortBy: ProductsSortBy;
	Query: ResolverTypeWrapper<{}>;
	SortDirection: SortDirection;
	Boolean: ResolverTypeWrapper<Scalars["Boolean"]["output"]>;
};

/** Mapping between all available schema types and the resolvers parents */
export type ResolversParentTypes = {
	Category: Category;
	String: Scalars["String"]["output"];
	ID: Scalars["ID"]["output"];
	Int: Scalars["Int"]["output"];
	CategoryList: CategoryList;
	Collection: Collection;
	CollectionList: CollectionList;
	DateTime: Scalars["DateTime"]["output"];
	Meta: Meta;
	Product: Product;
	ProductList: ProductList;
	Query: {};
	Boolean: Scalars["Boolean"]["output"];
};

export type CategoryResolvers<
	ContextType = any,
	ParentType extends ResolversParentTypes["Category"] = ResolversParentTypes["Category"],
> = {
	description?: Resolver<ResolversTypes["String"], ParentType, ContextType>;
	id?: Resolver<ResolversTypes["ID"], ParentType, ContextType>;
	name?: Resolver<ResolversTypes["String"], ParentType, ContextType>;
	products?: Resolver<
		Array<ResolversTypes["Product"]>,
		ParentType,
		ContextType,
		RequireFields<CategoryproductsArgs, "skip" | "take">
	>;
	slug?: Resolver<ResolversTypes["String"], ParentType, ContextType>;
	__isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type CategoryListResolvers<
	ContextType = any,
	ParentType extends ResolversParentTypes["CategoryList"] = ResolversParentTypes["CategoryList"],
> = {
	data?: Resolver<Array<ResolversTypes["Category"]>, ParentType, ContextType>;
	meta?: Resolver<ResolversTypes["Meta"], ParentType, ContextType>;
	__isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type CollectionResolvers<
	ContextType = any,
	ParentType extends ResolversParentTypes["Collection"] = ResolversParentTypes["Collection"],
> = {
	description?: Resolver<ResolversTypes["String"], ParentType, ContextType>;
	id?: Resolver<ResolversTypes["ID"], ParentType, ContextType>;
	name?: Resolver<ResolversTypes["String"], ParentType, ContextType>;
	products?: Resolver<
		Array<ResolversTypes["Product"]>,
		ParentType,
		ContextType,
		RequireFields<CollectionproductsArgs, "skip" | "take">
	>;
	slug?: Resolver<ResolversTypes["String"], ParentType, ContextType>;
	__isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type CollectionListResolvers<
	ContextType = any,
	ParentType extends
		ResolversParentTypes["CollectionList"] = ResolversParentTypes["CollectionList"],
> = {
	data?: Resolver<Array<ResolversTypes["Collection"]>, ParentType, ContextType>;
	meta?: Resolver<ResolversTypes["Meta"], ParentType, ContextType>;
	__isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export interface DateTimeScalarConfig
	extends GraphQLScalarTypeConfig<ResolversTypes["DateTime"], any> {
	name: "DateTime";
}

export type MetaResolvers<
	ContextType = any,
	ParentType extends ResolversParentTypes["Meta"] = ResolversParentTypes["Meta"],
> = {
	count?: Resolver<ResolversTypes["Int"], ParentType, ContextType>;
	total?: Resolver<ResolversTypes["Int"], ParentType, ContextType>;
	__isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type ProductResolvers<
	ContextType = any,
	ParentType extends ResolversParentTypes["Product"] = ResolversParentTypes["Product"],
> = {
	categories?: Resolver<Array<ResolversTypes["Category"]>, ParentType, ContextType>;
	collections?: Resolver<Array<ResolversTypes["Collection"]>, ParentType, ContextType>;
	description?: Resolver<ResolversTypes["String"], ParentType, ContextType>;
	id?: Resolver<ResolversTypes["ID"], ParentType, ContextType>;
	image?: Resolver<ResolversTypes["String"], ParentType, ContextType>;
	longDescription?: Resolver<ResolversTypes["String"], ParentType, ContextType>;
	name?: Resolver<ResolversTypes["String"], ParentType, ContextType>;
	price?: Resolver<ResolversTypes["Int"], ParentType, ContextType>;
	rating?: Resolver<ResolversTypes["Int"], ParentType, ContextType>;
	slug?: Resolver<ResolversTypes["String"], ParentType, ContextType>;
	status?: Resolver<ResolversTypes["String"], ParentType, ContextType>;
	__isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type ProductListResolvers<
	ContextType = any,
	ParentType extends ResolversParentTypes["ProductList"] = ResolversParentTypes["ProductList"],
> = {
	data?: Resolver<Array<ResolversTypes["Product"]>, ParentType, ContextType>;
	meta?: Resolver<ResolversTypes["Meta"], ParentType, ContextType>;
	__isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type QueryResolvers<
	ContextType = any,
	ParentType extends ResolversParentTypes["Query"] = ResolversParentTypes["Query"],
> = {
	categories?: Resolver<
		ResolversTypes["CategoryList"],
		ParentType,
		ContextType,
		RequireFields<QuerycategoriesArgs, "skip" | "take">
	>;
	category?: Resolver<
		ResolversTypes["Category"],
		ParentType,
		ContextType,
		Partial<QuerycategoryArgs>
	>;
	collection?: Resolver<
		ResolversTypes["Collection"],
		ParentType,
		ContextType,
		Partial<QuerycollectionArgs>
	>;
	collections?: Resolver<
		ResolversTypes["CollectionList"],
		ParentType,
		ContextType,
		RequireFields<QuerycollectionsArgs, "skip" | "take">
	>;
	product?: Resolver<ResolversTypes["Product"], ParentType, ContextType, Partial<QueryproductArgs>>;
	products?: Resolver<
		ResolversTypes["ProductList"],
		ParentType,
		ContextType,
		RequireFields<QueryproductsArgs, "order" | "orderBy" | "skip" | "take">
	>;
};

export type Resolvers<ContextType = any> = {
	Category?: CategoryResolvers<ContextType>;
	CategoryList?: CategoryListResolvers<ContextType>;
	Collection?: CollectionResolvers<ContextType>;
	CollectionList?: CollectionListResolvers<ContextType>;
	DateTime?: GraphQLScalarType;
	Meta?: MetaResolvers<ContextType>;
	Product?: ProductResolvers<ContextType>;
	ProductList?: ProductListResolvers<ContextType>;
	Query?: QueryResolvers<ContextType>;
};
