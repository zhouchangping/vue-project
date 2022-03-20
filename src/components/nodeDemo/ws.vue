<template>
  <scroll>
    <div class="page-base">
      <div class="page-contain">
        <form onsubmit="return false;">
          <h3>WebSocket 聊天室：</h3>
          <textarea
            id="responseText"
            style="width: 500px; height: 300px"
          ></textarea>
          <br />
          <input
            type="text"
            name="message"
            style="width: 300px"
            v-model="value"
          />
          <input type="button" value="发送消息" @click="send()" />
          <input
            type="button"
            onclick="javascript:document.getElementById('responseText').value=''"
            value="清空聊天记录"
          />
        </form>
      </div>
    </div>
    <top-item :text="title"></top-item>
  </scroll>
</template>
<script>
import scroll from "../common/scroll.vue";
import topItem from "../common/topItem.vue";
export default {
  data () {
    return {
      title: "node聊天室", // 需打开common虾的nodeToll下的ws服务
      value: "haha"
    };
  },
  mounted () {
    this.webSocket();
  },
  components: {
    scroll: scroll,
    "top-item": topItem
  },
  methods: {
    send () {
      if (!window.WebSocket) {
        return;
      }
      if (this.socket.readyState == WebSocket.OPEN) {
        this.socket.send(this.value);
      } else {
        alert("连接没有开启.");
      }
    },
    webSocket () {
      if (!window.WebSocket) {
        window.WebSocket = window.MozWebSocket;
      }
      if (window.WebSocket) {
        this.socket = new WebSocket("ws://localhost:9000/ws");
        console.log(this.socket);
        this.socket.onmessage = function (event) {
          console.log(event);
          var ta = document.getElementById("responseText");
          ta.value = ta.value + "\n" + event.data;
        };
        this.socket.onopen = function (event) {
          var ta = document.getElementById("responseText");
          ta.value = "连接开启!";
        };
        this.socket.onclose = function (event) {
          var ta = document.getElementById("responseText");
          ta.value = ta.value + "连接被关闭";
        };
      } else {
        alert("你的浏览器不支持 WebSocket！");
      }
    }
  }
};
</script>
<style scoped>
</style>
