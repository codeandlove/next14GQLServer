import { GraphQLResolveInfo } from "graphql";
export type Maybe<T> = T | null | undefined;
export type InputMaybe<T> = T | null | undefined;
export type Exact<T extends { [key: string]: unknown }> = {
  [K in keyof T]: T[K];
};
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & {
  [SubKey in K]?: Maybe<T[SubKey]>;
};
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & {
  [SubKey in K]: Maybe<T[SubKey]>;
};
export type MakeEmpty<
  T extends { [key: string]: unknown },
  K extends keyof T,
> = { [_ in K]?: never };
export type Incremental<T> =
  | T
  | {
      [P in keyof T]?: P extends " $fragmentName" | "__typename" ? T[P] : never;
    };
export type RequireFields<T, K extends keyof T> = Omit<T, K> & {
  [P in K]-?: NonNullable<T[P]>;
};
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: { input: string; output: string };
  String: { input: string; output: string };
  Boolean: { input: boolean; output: boolean };
  Int: { input: number; output: number };
  Float: { input: number; output: number };
};

export type Cart = {
  __typename?: "Cart";
  id: Scalars["ID"]["output"];
  items: Array<CartItem>;
};

export type CartItem = {
  __typename?: "CartItem";
  product: Product;
  quantity: Scalars["Int"]["output"];
};

export type Category = {
  __typename?: "Category";
  description: Scalars["String"]["output"];
  id: Scalars["ID"]["output"];
  name: Scalars["String"]["output"];
  products: Array<Product>;
  slug: Scalars["String"]["output"];
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

export type Order = {
  __typename?: "Order";
  createAt: Scalars["String"]["output"];
  id: Scalars["ID"]["output"];
  lines: Scalars["String"]["output"];
  status: OrderStatus;
  totalAmount: Scalars["Int"]["output"];
  updaetAt: Scalars["String"]["output"];
};

export type OrderList = {
  __typename?: "OrderList";
  data: Array<Order>;
  meta: Meta;
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
};

export type ProductList = {
  __typename?: "ProductList";
  data: Array<Product>;
  meta: Meta;
};

export type ProductsSortBy = "DEFAULT" | "NAME" | "PRICE";

export type Query = {
  __typename?: "Query";
  cart: Cart;
  categories: CategoryList;
  category: Category;
  collection: Collection;
  collections: CollectionList;
  order: Order;
  orders: OrderList;
  product: Product;
  products: ProductList;
};

export type QuerycartArgs = {
  id: Scalars["ID"]["input"];
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

export type QueryorderArgs = {
  id: Scalars["ID"]["input"];
};

export type QueryordersArgs = {
  email: Scalars["String"]["input"];
  order?: SortDirection;
  orderBy?: OrderSortBy;
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
  subscribe: SubscriptionSubscribeFn<
    { [key in TKey]: TResult },
    TParent,
    TContext,
    TArgs
  >;
  resolve?: SubscriptionResolveFn<
    TResult,
    { [key in TKey]: TResult },
    TContext,
    TArgs
  >;
}

export interface SubscriptionResolverObject<TResult, TParent, TContext, TArgs> {
  subscribe: SubscriptionSubscribeFn<any, TParent, TContext, TArgs>;
  resolve: SubscriptionResolveFn<TResult, any, TContext, TArgs>;
}

export type SubscriptionObject<
  TResult,
  TKey extends string,
  TParent,
  TContext,
  TArgs,
> =
  | SubscriptionSubscriberObject<TResult, TKey, TParent, TContext, TArgs>
  | SubscriptionResolverObject<TResult, TParent, TContext, TArgs>;

export type SubscriptionResolver<
  TResult,
  TKey extends string,
  TParent = {},
  TContext = {},
  TArgs = {},
> =
  | ((
      ...args: any[]
    ) => SubscriptionObject<TResult, TKey, TParent, TContext, TArgs>)
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

export type DirectiveResolverFn<
  TResult = {},
  TParent = {},
  TContext = {},
  TArgs = {},
> = (
  next: NextResolverFn<TResult>,
  parent: TParent,
  args: TArgs,
  context: TContext,
  info?: GraphQLResolveInfo,
) => TResult | Promise<TResult>;

/** Mapping between all available schema types and the resolvers types */
export type ResolversTypes = {
  Cart: ResolverTypeWrapper<Cart>;
  ID: ResolverTypeWrapper<Scalars["ID"]["output"]>;
  CartItem: ResolverTypeWrapper<CartItem>;
  Int: ResolverTypeWrapper<Scalars["Int"]["output"]>;
  Category: ResolverTypeWrapper<Category>;
  String: ResolverTypeWrapper<Scalars["String"]["output"]>;
  CategoryList: ResolverTypeWrapper<CategoryList>;
  Collection: ResolverTypeWrapper<Collection>;
  CollectionList: ResolverTypeWrapper<CollectionList>;
  Meta: ResolverTypeWrapper<Meta>;
  Order: ResolverTypeWrapper<Order>;
  OrderList: ResolverTypeWrapper<OrderList>;
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
  Cart: Cart;
  ID: Scalars["ID"]["output"];
  CartItem: CartItem;
  Int: Scalars["Int"]["output"];
  Category: Category;
  String: Scalars["String"]["output"];
  CategoryList: CategoryList;
  Collection: Collection;
  CollectionList: CollectionList;
  Meta: Meta;
  Order: Order;
  OrderList: OrderList;
  Product: Product;
  ProductList: ProductList;
  Query: {};
  Boolean: Scalars["Boolean"]["output"];
};

export type CartResolvers<
  ContextType = any,
  ParentType extends
    ResolversParentTypes["Cart"] = ResolversParentTypes["Cart"],
> = {
  id?: Resolver<ResolversTypes["ID"], ParentType, ContextType>;
  items?: Resolver<Array<ResolversTypes["CartItem"]>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type CartItemResolvers<
  ContextType = any,
  ParentType extends
    ResolversParentTypes["CartItem"] = ResolversParentTypes["CartItem"],
> = {
  product?: Resolver<ResolversTypes["Product"], ParentType, ContextType>;
  quantity?: Resolver<ResolversTypes["Int"], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type CategoryResolvers<
  ContextType = any,
  ParentType extends
    ResolversParentTypes["Category"] = ResolversParentTypes["Category"],
> = {
  description?: Resolver<ResolversTypes["String"], ParentType, ContextType>;
  id?: Resolver<ResolversTypes["ID"], ParentType, ContextType>;
  name?: Resolver<ResolversTypes["String"], ParentType, ContextType>;
  products?: Resolver<
    Array<ResolversTypes["Product"]>,
    ParentType,
    ContextType
  >;
  slug?: Resolver<ResolversTypes["String"], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type CategoryListResolvers<
  ContextType = any,
  ParentType extends
    ResolversParentTypes["CategoryList"] = ResolversParentTypes["CategoryList"],
> = {
  data?: Resolver<Array<ResolversTypes["Category"]>, ParentType, ContextType>;
  meta?: Resolver<ResolversTypes["Meta"], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type CollectionResolvers<
  ContextType = any,
  ParentType extends
    ResolversParentTypes["Collection"] = ResolversParentTypes["Collection"],
> = {
  description?: Resolver<ResolversTypes["String"], ParentType, ContextType>;
  id?: Resolver<ResolversTypes["ID"], ParentType, ContextType>;
  name?: Resolver<ResolversTypes["String"], ParentType, ContextType>;
  products?: Resolver<
    Array<ResolversTypes["Product"]>,
    ParentType,
    ContextType
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

export type MetaResolvers<
  ContextType = any,
  ParentType extends
    ResolversParentTypes["Meta"] = ResolversParentTypes["Meta"],
> = {
  count?: Resolver<ResolversTypes["Int"], ParentType, ContextType>;
  total?: Resolver<ResolversTypes["Int"], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type OrderResolvers<
  ContextType = any,
  ParentType extends
    ResolversParentTypes["Order"] = ResolversParentTypes["Order"],
> = {
  createAt?: Resolver<ResolversTypes["String"], ParentType, ContextType>;
  id?: Resolver<ResolversTypes["ID"], ParentType, ContextType>;
  lines?: Resolver<ResolversTypes["String"], ParentType, ContextType>;
  status?: Resolver<ResolversTypes["OrderStatus"], ParentType, ContextType>;
  totalAmount?: Resolver<ResolversTypes["Int"], ParentType, ContextType>;
  updaetAt?: Resolver<ResolversTypes["String"], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type OrderListResolvers<
  ContextType = any,
  ParentType extends
    ResolversParentTypes["OrderList"] = ResolversParentTypes["OrderList"],
> = {
  data?: Resolver<Array<ResolversTypes["Order"]>, ParentType, ContextType>;
  meta?: Resolver<ResolversTypes["Meta"], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type ProductResolvers<
  ContextType = any,
  ParentType extends
    ResolversParentTypes["Product"] = ResolversParentTypes["Product"],
> = {
  categories?: Resolver<
    Array<ResolversTypes["Category"]>,
    ParentType,
    ContextType
  >;
  collections?: Resolver<
    Array<ResolversTypes["Collection"]>,
    ParentType,
    ContextType
  >;
  description?: Resolver<ResolversTypes["String"], ParentType, ContextType>;
  id?: Resolver<ResolversTypes["ID"], ParentType, ContextType>;
  image?: Resolver<ResolversTypes["String"], ParentType, ContextType>;
  longDescription?: Resolver<ResolversTypes["String"], ParentType, ContextType>;
  name?: Resolver<ResolversTypes["String"], ParentType, ContextType>;
  price?: Resolver<ResolversTypes["Int"], ParentType, ContextType>;
  rating?: Resolver<ResolversTypes["Int"], ParentType, ContextType>;
  slug?: Resolver<ResolversTypes["String"], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type ProductListResolvers<
  ContextType = any,
  ParentType extends
    ResolversParentTypes["ProductList"] = ResolversParentTypes["ProductList"],
> = {
  data?: Resolver<Array<ResolversTypes["Product"]>, ParentType, ContextType>;
  meta?: Resolver<ResolversTypes["Meta"], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type QueryResolvers<
  ContextType = any,
  ParentType extends
    ResolversParentTypes["Query"] = ResolversParentTypes["Query"],
> = {
  cart?: Resolver<
    ResolversTypes["Cart"],
    ParentType,
    ContextType,
    RequireFields<QuerycartArgs, "id">
  >;
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
  order?: Resolver<
    ResolversTypes["Order"],
    ParentType,
    ContextType,
    RequireFields<QueryorderArgs, "id">
  >;
  orders?: Resolver<
    ResolversTypes["OrderList"],
    ParentType,
    ContextType,
    RequireFields<
      QueryordersArgs,
      "email" | "order" | "orderBy" | "skip" | "take"
    >
  >;
  product?: Resolver<
    ResolversTypes["Product"],
    ParentType,
    ContextType,
    Partial<QueryproductArgs>
  >;
  products?: Resolver<
    ResolversTypes["ProductList"],
    ParentType,
    ContextType,
    RequireFields<QueryproductsArgs, "order" | "orderBy" | "skip" | "take">
  >;
};

export type Resolvers<ContextType = any> = {
  Cart?: CartResolvers<ContextType>;
  CartItem?: CartItemResolvers<ContextType>;
  Category?: CategoryResolvers<ContextType>;
  CategoryList?: CategoryListResolvers<ContextType>;
  Collection?: CollectionResolvers<ContextType>;
  CollectionList?: CollectionListResolvers<ContextType>;
  Meta?: MetaResolvers<ContextType>;
  Order?: OrderResolvers<ContextType>;
  OrderList?: OrderListResolvers<ContextType>;
  Product?: ProductResolvers<ContextType>;
  ProductList?: ProductListResolvers<ContextType>;
  Query?: QueryResolvers<ContextType>;
};
