<template>
  <h1 class="ft" v-bind:id="id">{{ txt }}</h1>
</template>

<script>
export default {
  props: ["txt", "id"],
};
</script>
