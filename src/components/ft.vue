<template>
  <h1 v-if="h1" class="ft" :id="id">{{ txt }}</h1>
  <h3 v-else class="ft" :id="id">{{ txt }}</h3>
</template>

<script>
export default {
  props: ["txt", "id", "h1"],
};
</script>
