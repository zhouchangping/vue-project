<template>
  <div class="page-base">
    <div class="page-contain">
      <div class="page-main">
        <div ref="geolocation">地理定位</div>
        <button @click="getLocation">点我</button>
      </div>
      <div class="page-main">
        <div class="drag" @drop="drop" @dragover.prevent></div>
        <div class="drag" @drop="drop" @dragover.prevent></div>
        <br />
        <img
          loading="lazy"
          id="drag"
          :src="urlImage"
          @dragstart="dragStart"
          draggable="true"
          width="336"
          height="69"
        />
      </div>
      <div class="page-main">
        <div>vue-worker</div>
      </div>
      <div class="page-main">
        <div>WebSocket</div>
      </div>
    </div>
    <top-item :text="title"></top-item>
  </div>
</template>
<script>
// import scroll from "../common/scroll.vue";
import topItem from "../common/topItem.vue";
export default {
  data () {
    return {
      title: "html5新功能",
      urlImage: require("../../common/images/flow/P_00.jpg"),
    };
  },
  methods: {
    getLocation () {
      if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(this.showPosition);
      }
      else {
        this.$refs.geolocation.innerHTML = "该浏览器不支持获取地理位置。";
      }
    },
    showPosition (position) {
      this.$refs.geolocation.innerHTML = "纬度: " + position.coords.latitude +
        "<br>经度: " + position.coords.longitude;
    },

    dragStart: function (ev) {
      ev.dataTransfer.setData("Text", event.target.id);
    },
    // dragging: function (ev) {
    //   document.getElementById("demo").innerHTML =
    //     "The p element is being dragged";
    // },
    allowDrop: function (event) {
      event.preventDefault();
    },
    drop: function (ev) {
      ev.preventDefault();
      var data = ev.dataTransfer.getData("Text");
      ev.target.appendChild(document.getElementById(data));
    },


  },
  components: {
    // scroll: scroll,
    "top-item": topItem
  }
};
</script>
<style scoped>
.drag {
  width: 350px;
  height: 70px;
  padding: 10px;
  border: 1px solid #aaaaaa;
}
</style>
