<template>
  <div
    :title="URL"
    class="card"
    :onclick="'window.open(\'' + URL + '\',\'_blank\')'"
  >
    <h5 class="card-inner header" style="font-weight: 400">
      {{ header }}
    </h5>

    <br />

    <h5 class="card-inner content">
      {{ content }}
    </h5>

    <div style="position: absolute; bottom: 2rem">
      <span>
        <img :src="image" style="margin-top: 5px" />
      </span>
      {{ imgtxt }}
    </div>
  </div>
</template>
<script>
export default {
  props: ["header", "URL", "content", "id", "image", "imgtxt"],
};
</script>