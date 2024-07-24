<template>
  <ul className="menu bg-base-200 rounded-box w-56">
    <li v-for="categorie in categories">
      <p>{{ categorie.name }}</p>
    </li>
  </ul>
</template>

<script setup lang="ts">
const { data: categories, error } = useFetch<Categorie[]>(
  "/api/categories/all"
);
const isLoading = ref<boolean>(false);
</script>
