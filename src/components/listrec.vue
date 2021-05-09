<template>
  <h2 class="listrec">
    <span
      v-for="(item, index) in items"
      :key="index"
      v-bind:class="'letters letters-' + (index + 1)"
      v-bind:style="'color:' + gColor(index)"
      >{{ item }}</span
    >
  </h2>
</template>

<script>
function gColor(x) {
  let colors = [
    "#F9DEA3",
    "#A1CEF4",
    "#a1f4b3",
    "#efa1f4",
    "#a1abf4",
    "#f4baa1",
  ];
  return colors[x];
}

export default {
  props: ["items"],
  methods: {
    gColor,
  },
};
</script>
