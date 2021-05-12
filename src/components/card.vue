<template>
  <div
    v-bind:title="URL"
    class="card"
    v-bind:onclick="'window.open(\'' + URL + '\',\'_blank\')'"
  >
    <h5 class="card-inner header" style="font-weight: 400">
      {{ header }}
    </h5>

    <br />

    <h5 class="card-inner content">
      {{ content }}
    </h5>
  </div>
</template>
<script>
export default {
  props: ["header", "URL", "content"],
};
</script>