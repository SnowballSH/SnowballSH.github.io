<template>
  <div
    class="bar"
    :id="name"
    :style="'background-color:' + color + ';max-width:' + value + '%'"
  >
    <h5 class="bar-name">
      {{ name }}
    </h5>
    <p class="bar-text">{{ value }}%</p>
  </div>
</template>

<script>
export default {
  props: ["name", "color", "value"],
};
</script>