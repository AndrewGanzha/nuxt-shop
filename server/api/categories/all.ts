export default defineEventHandler(async (event) => {
  const allProducts = await $fetch("https://dummyjson.com/products/categories");

  return allProducts;
});
