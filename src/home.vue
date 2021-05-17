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

    <!--Pages-->
    <div id="page-2">
      <div class="centered">
        <img src="assets/SnowballSH.png" width="20%" height="20%" />
        <ft
          txt="Hi! I am SnowballSH, a software developer and music producer."
          id="ft2"
          v-bind:h1="false"
        />
      </div>
    </div>

    <div id="page-3">
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

    <div id="page-4">
      <h4 class="h3-text">My Programming Skills:</h4>

      <div class="bar-container" id="bar-con">
        <bar name="Python" color="#3572A5" value="95" />
        <bar name="Ruby" color="#701516" value="93" />
        <bar name="TypeScript" color="#2b7489" value="90" />
        <bar name="React" color="#44AEDC" value="87" />
        <bar name="Rust" color="#dea584" value="85" />
        <bar name="Go" color="#00ADD8" value="81" />
      </div>
    </div>

    <div id="page-5">
      <h4 class="h3-text">My Most Popular Video:</h4>

      <div style="margin-bottom: 0" class="yt-container">
        <iframe
          class="ytvid"
          src="https://www.youtube.com/embed/3m6lHpmrZr0"
          title="YouTube video player"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowfullscreen
        ></iframe>
      </div>

      <h4 class="h3-text">My Latest Original Release:</h4>

      <div class="yt-container">
        <iframe
          class="ytvid"
          src="https://www.youtube.com/embed/GkePtqJU5mk"
          title="YouTube video player"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowfullscreen
        ></iframe>
      </div>
    </div>

    <div id="footer">
      <img src="assets/SnowballSH.png" width="20%" height="20%" />
      <h4 class="h3-text" style="padding: 0rem">SnowballSH</h4>
    </div>
  </div>
</template>

<script>
import ft from "./components/ft.vue";
import listrec from "./components/listrec.vue";
import and from "./components/and.vue";
import card from "./components/card.vue";
import bar from "./components/bar.vue";

export default {
  components: {
    ft,
    listrec,
    and,
    card,
    bar,
  },
};
</script>
