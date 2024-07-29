<template>
  <main>
    <span
      v-if="status === 'pending'"
      class="loading loading-spinner loading-xs"
    ></span>
    <div v-else>
      <div class="flex flex-wrap gap-4 justify-center">
        <div
          v-for="product in products?.products"
          class="card bg-base-100 w-96 shadow-xl"
        >
          <div v-if="product.images.length > 1" class="carousel rounded-box">
            <div class="carousel-item w-1/2" v-for="images in product.images">
              <img class="w-96 h-96" :src="images" alt="Burger" />
            </div>
          </div>
          <figure v-else>
            <img
              class="w-96 h-96 object-cover"
              :src="product.images[0]"
              alt="Shoes"
            />
          </figure>
          <div class="card-body">
            <h2 class="card-title">{{ product.title }}</h2>
            <p>{{ product.description }}</p>
            <p>{{ product.price }} $</p>
            <div class="card-actions justify-end">
              <button class="btn btn-primary">Buy Now</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </main>
</template>

<script setup lang="ts">
const { data: products, status } = useLazyFetch<Products>("/api/products/all");
</script>
