<template>
  <span
    v-if="status === 'pending'"
    class="loading loading-spinner loading-xs"
  ></span>
  <ul v-else class="menu bg-base-200 rounded-box w-56">
    <li v-for="categorie in categories">
      <p>{{ categorie.name }}</p>
    </li>
  </ul>
</template>

<script setup lang="ts">
const { data: categories, status } = useLazyFetch<Categorie[]>(
  "/api/categories/all"
);
</script>
