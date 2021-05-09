<template>
  <div class="centered">
    <listrec />
    <br />
    <ft txt="SnowballSH" />
  </div>
</template>

<script>
import ft from "./components/ft.vue";
import listrec from "./components/listrec.vue";

export default {
  components: {
    ft,
    listrec,
  },
};
</script>
