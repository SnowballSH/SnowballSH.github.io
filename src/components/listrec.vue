<template>
  <h2 class="listrec">
    <span
      v-for="(item, index) in items"
      :key="index"
      v-bind:class="'letters letters-' + (index + 1)"
      >{{ item }}</span
    >
  </h2>
</template>

<script>
export default {
  props: ["items"],
};
</script>
