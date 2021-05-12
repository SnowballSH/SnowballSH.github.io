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

      <ft txt="SnowballSH" id="ft1" v-bind:h1="true" />

      <and />
    </div>

    <!--Page 2-->
    <div id="page-2"></div>

    <div class="centered">
      <ft
        txt="Hi! I am SnowballSH, a software developer and music producer."
        id="ft2"
        v-bind:h1="false"
      />
    </div>

    <h4 class="h3-text">Places to see my projects:</h4>
    <div class="cards">
      <card
        id="gh"
        header="Github"
        URL="https://github.com/SnowballSH"
        content="View my github profile where I post my coding projects!"
        image="assets/gh32.png"
        imgtxt="github.com/SnowballSH"
      />
      <card
        id="yt"
        header="YouTube"
        URL="https://youtube.com/c/SnowballSH"
        content="View my YouTube channel where I post my orginal and remix music!"
        image="assets/yt32.png"
        imgtxt="youtube.com/c/SnowballSH"
      />
    </div>
  </div>
</template>

<script>
import ft from "./components/ft.vue";
import listrec from "./components/listrec.vue";
import and from "./components/and.vue";
import card from "./components/card.vue";

export default {
  components: {
    ft,
    listrec,
    and,
    card,
  },
};
</script>
