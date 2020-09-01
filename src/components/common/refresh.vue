<template>
  <div class="loading-mask" v-show="isLoading">
    <div class="bg-loading" id="j-loading" v-show="isLoading">
      <div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "isLoading",
  props: ["isLoading"],
  data() {
    return {
      text: "加载中！"
    };
  },
  mounted() {
    //document.getElementsById('j-loading').style.top = 80 + 'px';
  }
};
</script>
<style scoped>
.loading-mask {
  position: fixed;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
  z-index: 1000000;
  background: #fff;
  opacity: 0.9;
}
.bg-loading {
  position: absolute;
  height: 80px;
  width: 100%;
  left: 50%;
  transform: translateX(-48%);
  top: 50%;
  text-align: center;
}

.bg-loading > div:nth-of-type(1) {
  position: relative;
  left: 50%;
  transform: translateX(-22%);
  width: 50px;
  height: 50px;
  margin-bottom: 10px;
}

.bg-loading > div:nth-of-type(1) > div {
  position: absolute;
  width: 10px;
  height: 10px;
  border-radius: 100%;
  background: #ea6f5a;
  font-size: 14px;
  -webkit-animation-fill-mode: both;
  animation-fill-mode: both;
}

.bg-loading > div:nth-of-type(1) > div:nth-of-type(1) {
  top: 25px;
  left: 0;
  animation: anm-loading 1s 0s infinite linear;
}

.bg-loading > div:nth-of-type(1) > div:nth-of-type(2) {
  top: 17.04545px;
  left: 17.04545px;
  animation: anm-loading 1s 0.12s infinite linear;
}

.bg-loading > div:nth-of-type(1) > div:nth-of-type(3) {
  top: 0;
  left: 25px;
  animation: anm-loading 1s 0.24s infinite linear;
}

.bg-loading > div:nth-of-type(1) > div:nth-of-type(4) {
  top: -17.04545px;
  left: 17.04545px;
  animation: anm-loading 1s 0.36s infinite linear;
}

.bg-loading > div:nth-of-type(1) > div:nth-of-type(5) {
  top: -25px;
  left: 0;
  animation: anm-loading 1s 0.48s infinite linear;
}

.bg-loading > div:nth-of-type(1) > div:nth-of-type(6) {
  top: -17.04545px;
  left: -17.04545px;
  animation: anm-loading 1s 0.6s infinite linear;
}

.bg-loading > div:nth-of-type(1) > div:nth-of-type(7) {
  top: 0;
  left: -25px;
  animation: anm-loading 1s 0.72s infinite linear;
}

.bg-loading > div:nth-of-type(1) > div:nth-of-type(8) {
  top: 17.04545px;
  left: -17.04545px;
  animation: anm-loading 1s 0.84s infinite linear;
}

@keyframes anm-loading {
  50% {
    opacity: 0.3;
    -webkit-transform: scale(0.4);
    transform: scale(0.4);
  }
  100% {
    opacity: 1;
    -webkit-transform: scale(1);
    transform: scale(1);
  }
}
</style>
