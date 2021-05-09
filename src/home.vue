<template>
  <div id="app">
    <div class="centered">
      <listrec
        v-bind:items="[
          'EDM',
          'Backend Dev',
          'System Programming',
          'Frontend',
          'Percussion',
          'AI',
        ]"
      />

      <br v-for="index in 4" :key="index" />

      <ft txt="SnowballSH" />
    </div>
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
