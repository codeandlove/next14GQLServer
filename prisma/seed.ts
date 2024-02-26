import { Category, Collection, PrismaClient } from "@prisma/client";
import { faker } from "@faker-js/faker";

const prisma = new PrismaClient();

const productsCount = 500;

const findUniques = (arr: Array<Object>) => {
  return arr.filter((value, index, self) => {
    return self.indexOf(value) === index;
  });
}

const getMultipleRandom = (arr: Array<Object>, num: number) => {
  const shuffled = [...arr].sort(() => 0.5 - Math.random());

  return shuffled.slice(0, num);
}

//Categories
const categoriesNames = ['T-hirts', 'Shoes', 'Shorts', 'Underwear', 'Pants', 'Jackets', 'Hats', 'Socks'];
const categoriesCount = categoriesNames.length;
const categories = [];

for (let i = 0; i < categoriesCount; i++) {
  const name = categoriesNames[i];
  const result = await prisma.category.create({
    data: {
      name: name,
      slug: faker.helpers.slugify(name).toLowerCase(),
      description: faker.lorem.paragraphs(4)
    },
  });
  categories.push(result);
  console.log(`Created category with id: ${result.id}`);
}

//Callections
const collectionsNames = ['Summer', 'Winter', 'Spring', 'Autumn', 'All Year'];
const collectionsCount = collectionsNames.length;
const collections = [];

for (let i = 0; i < collectionsCount; i++) {
  const name = collectionsNames[i];
  const result = await prisma.collection.create({
    data: {
      name: name,
      slug: faker.helpers.slugify(name).toLowerCase(),
      description: faker.lorem.paragraphs(4)
    },
  });
  collections.push(result);
  console.log(`Created category with id: ${result.id}`);
}

//Products
for (let i = 0; i < productsCount; i++) {
  const name = faker.commerce.productName();
  const pickedCategories = getMultipleRandom(categories, Math.floor(Math.random() * categoriesCount - 1) + 1) as Array<Category>;
  const pickedCollections = getMultipleRandom(collections, Math.floor(Math.random() * collectionsCount - 1) + 1) as Array<Collection>

  const createdProduct = await prisma.product.create({
    data: {
      name: name,
      slug: faker.helpers.slugify(name).toLowerCase(),
      description: faker.commerce.productDescription(),
      longDescription: faker.lorem.paragraphs(4),
      price: Number(faker.commerce.price()) * 100,
      categories: {
        connect: pickedCategories,
      },
      collections: {
        connect: pickedCollections,
      },
      image: faker.image.urlPicsumPhotos({width: 600, height: 800 }),
      status: Math.random() > 0.5 ? "INSTOCK" : "OUTOFSTOCK",
      rating: Math.floor(Math.random() * 5) + 1,
    },
  });
  console.log(`Created product with id: ${createdProduct.id}`);
}
