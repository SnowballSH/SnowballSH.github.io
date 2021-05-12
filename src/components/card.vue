<template>
  <div
    :title="URL"
    class="card"
    :onclick="'window.open(\'' + URL + '\',\'_blank\')'"
    :id="id"
  >
    <h5 class="card-inner header" style="font-weight: 400">
      {{ header }}
    </h5>

    <h5 class="card-inner content">
      {{ content }}
    </h5>

    <div class="card-footer">
      <img :src="image" />
      <h5 style="font-weight: 500">
        {{ imgtxt }}
      </h5>
    </div>
  </div>
</template>
<script>
export default {
  props: ["header", "URL", "content", "id", "image", "imgtxt"],
};
</script>