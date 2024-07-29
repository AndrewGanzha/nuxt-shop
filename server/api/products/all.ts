export default defineEventHandler(async (event) => {
  const allProducts = await $fetch<Products>("https://dummyjson.com/products");

  return allProducts;
});
