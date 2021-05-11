<template>
  <div id="app">
    <div id="particles-js"></div>
    <!--Page 1-->
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

      <ft txt="SnowballSH" id="ft1" />

      <br v-for="index in 0" :key="index" />

      <and />
    </div>

    <!--Page 2-->
    <div id="page-2"></div>
    
    <div class="centered">
      <ft txt="Hi! I am SnowballSH, a software developer and music producer." id="ft2" />
    </div>
  </div>
</template>

<script>
import ft from "./components/ft.vue";
import listrec from "./components/listrec.vue";
import and from "./components/and.vue";

export default {
  components: {
    ft,
    listrec,
    and,
  },
};
</script>
