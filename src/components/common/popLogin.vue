<template>
  <div class="pop-container">
    <div class="pop-count">
      <input v-model="username" />
    </div>
    <div class="pop-password">
      <input v-model="password" type="password" />
    </div>
    <div class="pop-submit">
      <button @click="submit">提交信息</button>
    </div>
  </div>
</template>
<script type="text/ecmascript-6">
export default {
  props: {
  },
  data () {
    return {
      username: "",
      password: ""
    };
  },
  computed: {
  },
  mounted () {
  },
  methods: {
    submit: function () {
      let that = this;
      this.username = this.username.trim();
      this.password = this.password.trim();
      console.log(this.username);
      console.log(/^[a-z]+$/.test(this.password));
      if (this.username && /^[a-z]+$/.test(this.password)) {
        fetch("/api/api/signin", {
          method: "POST",
          body: JSON.stringify({
            name: that.username,
            password: that.password,
          }),
          headers: new Headers({
            "Content-Type": "application/json"
          })
        }).then(function (response) {
          console.log(response.json());
          // return response.json();
        }).then(data => console.log(data)
        ).catch(error => console.error("Error:", error));
      } else {
        this.username = "";
        this.password = "";
      }
    }
  },
  watch: {
    data () {
    }
  }
};
</script>

<style scoped>
.pop-container {
  width: 200px;
  margin: 0 auto;
}

.pop-container div {
  height: 31px;
  width: 300px;
  margin-top: 20px;
}

.pop-container input {
  width: 100%;
  border: 1px solid red;
  border-radius: 15px;
  height: 30px;
  line-height: 30px;
  text-indent: 5px;
  outline: 0px;
}

.pop-container button {
  margin-top: 20px;
  background: #000;
  color: #fff;
  border-radius: 15px;
  height: 30px;
  width: 300px;
  line-height: 30px;
  text-indent: 5px;
  outline: 0px;
}
</style>


