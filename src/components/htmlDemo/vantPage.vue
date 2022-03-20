<template>
  <div class="pageContainer">
    <!-- <loading :isShow="isShow"></loading> -->
    <!-- <van-skeleton title avatar :row="4" :loading="loading"/> -->
    <div class="page-better">
      <div class="page-box">
        <van-button type="info">默认按钮</van-button>
      </div>
      <div class="page-box">
        <van-cell-group>
          <van-cell @touchstart.stop="show = true" title="单元格" value="展示弹出层" />
          <van-cell title="单元格" value="内容" />
        </van-cell-group>
      </div>
      <div class="page-box">
        <van-cell-group>
          <van-cell @touchstart.stop="show = true" title="单元格" value="展示弹出层" />
          <van-cell title="单元格" value="内容" />
        </van-cell-group>
      </div>
      <!-- <div class="page-box">
        <van-image round lazy-load src="https://img.yzcdn.cn/vant/cat.jpeg" width="100" height="100">
          <template v-slot:loading>
            <van-loading type="spinner" size="20" />
          </template>
        </van-image>
      </div> -->
      <!-- <div class="page-box">
        <van-number-keyboard :show="show" extra-key="." close-button-text="完成" @blur="show = false" @input="onInput"
          @delete="onDelete" />
        </div>
      </div> -->
      <!-- <div class="page-box">
          <van-cell-group>
            <van-field v-model="value" placeholder="请输入用户名" />
          </van-cell-group>
          <van-field v-model="tel" type="tel" label="手机号" />
        </div> -->
      <!-- <div class="page-box">
        <van-password-input :value="value" info="密码为 6 位数字" :focused="showKeyboard" @focus="showKeyboard = false" />
        <van-number-keyboard :show="showKeyboard" @input="onInput" @delete="onDelete" @blur="showKeyboard = false" />
      </div> -->
      <van-field>12341</van-field>
      <van-field readonly clickable label="城市" :value="value" placeholder="选择城市" @click="showPicker = true" />
      <van-popup v-model="showPicker" position="bottom">
        <van-picker show-toolbar :columns="columns" @cancel="showPicker = false" @confirm="onConfirm" />
      </van-popup>

      <div class="page-box">
        <img width="100px" height="100px" v-for="(img, index) in imageList" v-lazy="img" :key="index" />
      </div>
    </div>
    <div calss="page-box">
      <!-- <van-skeleton title :row="3" /> -->
    </div>
  </div>
</template>
<script>
import loading from "@/components/common/loading.vue";
export default {
  data() {
    return {
      isShow: true,
      value: "",
      // showKeyboard: true,
      showPicker: false,
      columns: [
        {
          text: "浙江",
          children: [
            {
              text: "杭州",
              children: [{ text: "西湖区" }, { text: "余杭区" }]
            },
            {
              text: "温州",
              children: [{ text: "鹿城区" }, { text: "瓯海区" }]
            }
          ]
        },
        {
          text: "福建",
          children: [
            {
              text: "福州",
              children: [{ text: "鼓楼区" }, { text: "台江区" }]
            },
            {
              text: "厦门",
              children: [{ text: "思明区" }, { text: "海沧区" }]
            }
          ]
        }
      ],
      imageList: [
        "",
        ""
        // "https://img.yzcdn.cn/vant/apple-1.jpg",
        // "https://img.yzcdn.cn/vant/apple-2.jpg"
      ]
    };
  },
  created() {
    let publicKey = `-----BEGIN PUBLIC KEY-----
MIGfMA0GCSqGSIb3DQEBAQUAA4GNADCBiQKBgQC4IUq6ZfMpJbYRXjcs6Rta/ksv
4IfpCCDuCJxV+J0kGgv0o3pJyLxMzy/lE53Rbg0bfv538LT9m9mgaklQDdZJVCiM
V0HErxfubH0U5wNbCFjHRuUo4lFrsnnL9Jim3/JEBp5RgPsD9AMNS/FPmC3xTbF1
1VZyVF7VsswaGVRPowIDAQAB
-----END PUBLIC KEY-----`;
    let privateKey = `-----BEGIN RSA PRIVATE KEY-----
MIICXAIBAAKBgQC4IUq6ZfMpJbYRXjcs6Rta/ksv4IfpCCDuCJxV+J0kGgv0o3pJ
yLxMzy/lE53Rbg0bfv538LT9m9mgaklQDdZJVCiMV0HErxfubH0U5wNbCFjHRuUo
4lFrsnnL9Jim3/JEBp5RgPsD9AMNS/FPmC3xTbF11VZyVF7VsswaGVRPowIDAQAB
AoGAc3EkCgObVaP4J6F7VGP+K6mdeDH85CSdiL/LTLdnxleyQToxlIsPS9TmgWgw
HTszapbPcmFvCEYrRsD8n/1c6GJfe5WIxgcSVXi1MzAjbjFQPaYw9FWEpS2tHnEo
RWMuDX6/YL66PAXE77vVW83te0/9FXbpsBWt/xpDTT7CcpECQQDcF3zh+uwTuaiB
ZC+XNm7gM7K7/Y4q5owVzcg5awNQZPf2U+Uaf9yHSp4/p3DwN8UU6n7ybJHQYHvV
Mjg+uZHrAkEA1ivNKrJnY7KURw2uhQkDLf4Sc+X8x5kPqJ60rBPfdojDcF0q5lKD
yj6x/q5LEbIRJdpjTRwDTCmihDYbFfaTKQJAMx+Fk5xMb/yFJqEV6OLs+Ekp8D7i
YhaxXXMyWhwAZhE+A8rTAcfHeumbPp/vPO1HaydZG4iaijOPMCN9KxzBxwJAG2lX
xRM4cGY23DFAGP7iTUyrh/HzvIg2nNpTPYL9ouo2OXdzOi9tdsE3fuVH7mfgEfw1
oXToZyMdDdbu+IyqoQJBAMWH/Ag8Kr7aPODCUvbE+31WwUy3eNKXXY38ZNxCdT6e
61Y/w/U+ruaXXCPyP8DB5/jBk9ZFCHWX2nlGOI8l5zc=
-----END RSA PRIVATE KEY-----`;
    let result = this.encruption("345", publicKey);
    console.log(result + "------result");
    let result2 = this.decryption(result, privateKey);
    console.log(result2 + "-----result2");
  },
  methods: {
    encruption(obj, publicKey) {
      let jse = new this.$jsEncrypt();
      // console.log(this.$md5(obj) + "-------2313123132312");
      jse.setPublicKey(publicKey); // 加入rsa public key
      return jse.encrypt(this.$md5(obj));
      // return jse.encrypt(obj); // 将password加密;
    },
    decryption(obj, privateKey) {
      let _decryp = new this.$jsEncrypt();
      _decryp.setPrivateKey(
        //KEY RSA私钥
        privateKey
      );
      return _decryp.decrypt(obj);
    },
    onConfirm(value) {
      this.value = value;
      this.showPicker = false;
    }
    // onInput(key) {
    //   this.value = (this.value + key).slice(0, 6);
    // },
    // onDelete() {
    //   this.value = this.value.slice(0, this.value.length - 1);
    // }
  },
  activated() {
    // keep-alive 组件激活时调用。
    this.$store.commit("SET_TITLES", "vant"); // 该方法比较靠谱
  },
  mounted() {
    // var that = this;
    // setTimeout(()=> {
    //   that.imageList = [
    //     "https://img.yzcdn.cn/vant/apple-1.jpg",
    //     "https://img.yzcdn.cn/vant/apple-2.jpg"
    //   ];
    //   that.isShow = false;
    // }, 2000);
    // that.loading = false;
  },
  deactivated() {},
  components: {
    loading: loading // 动画
  }
};
</script>
<style scoped>
.page-box {
  margin: 0 auto;
  margin-top: 20px;
}
</style>
