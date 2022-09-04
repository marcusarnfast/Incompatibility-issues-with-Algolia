<template>
  <div>{{ result }}</div>
</template>

<script setup>
const { result, search } = useAlgoliaSearch('test_index'); // pass your index name as param

onMounted(async () => {
  await search({ query: 'Samsung' });
});
</script>
