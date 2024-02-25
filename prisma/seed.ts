import { PrismaClient } from "@prisma/client";
import { faker } from "@faker-js/faker";

const prisma = new PrismaClient();

const productsCount = 500;

const categoriesNames = ['T-hirts', 'Shoes', 'Shorts', 'Underwear', 'Pants', 'Jackets', 'Hats', 'Socks'];
const categoriesCount = categoriesNames.length;
const categories = [];

for (let i = 0; i < categoriesCount; i++) {
  const categoryName = categoriesNames[i];
  const createdCategory = await prisma.category.create({
    data: {
      name: categoryName,
      slug: faker.helpers.slugify(categoryName).toLowerCase(),
      description: faker.lorem.paragraphs(4)
    },
  });
  categories.push(createdCategory);
  console.log(`Created category with id: ${createdCategory.id}`);
}

for (let i = 0; i < productsCount; i++) {
  const productName = faker.commerce.productName();
  const productCategory = categories[Math.floor(Math.random() * categoriesCount)];

  const createdProduct = await prisma.product.create({
    data: {
      name: productName,
      slug: faker.helpers.slugify(productName).toLowerCase(),
      description: faker.commerce.productDescription(),
      longDescription: faker.lorem.paragraphs(4),
      price: Number(faker.commerce.price()) * 100,
      categoryId: productCategory.id,
      image: faker.image.urlPicsumPhotos({width: 600, height: 800 }),
      status: Math.random() > 0.5 ? "INSTOCK" : "OUTOFSTOCK",
      rating: Math.floor(Math.random() * 5) + 1,
    },
  });
  console.log(`Created product with id: ${createdProduct.id}`);
}
