<template>
  <scroll>
    <div class="page-better">
      <!-- <div class="wrapper-one" v-show="isShowLength">
          <div class="wrapper-header">
              已选菜品<span class="header-text">(可点击取消，重选)</span>  {{lengthCurrent.length}}份
          </div>
          <div class="item-result" v-for="(newItem, i) in resultData" @click="clickQuit(i)" :class="newItem== '' ? 'greeActive': ''">
              <span>{{newItem}}</span>
          </div>
      </div> -->
      <!-- <div class="wrapper-images">
        <img :src="imgUrl"/>
      </div> -->
      <!-- <div class="wrapper-input">
        <label>搜索菜品  <span class="input-text">共{{data.length}}种  </span></label><input v-model="inputModel" @blur="dealSearch" @keyup.enter="dealSearch"/>
      </div> -->
      <!-- <div class="wrapper-tow">
          <div class="wrapper-header">
              请选菜品<span class="header-text">(点击选择)</span>
          </div>
          <div class="item" v-for="(item, index) in data" @click="clickChoic(item, index)"  :class="resultData.indexOf(item) !== -1 ? 'active': ''">
              <span>{{item}}</span>
          </div>
      </div> -->
      <div ref="name">123</div>
      <div class="wrapper-text" v-for="(item, index) in dataEnd" :key="index">
        <textarea class="wrapper-textarea" ref="inputText"></textarea>
        <button @click="copyText(index)">复制菜单</button>
        <div class="ref" ref="refResult">
          <div># {{ date }}</div>
          <div v-for="(i, j) in item" :key="j">
            {{ i }}
          </div>
        </div>
      </div>
    </div>
    <loadings :isShow="isShowLoading"></loadings>
    <top-item :text="title"></top-item>
  </scroll>
</template>
<script>
import topItem from "../common/topItem.vue";
import scroll from "../common/scroll.vue";
import loadings from "@/components/common/loading.vue";
export default {
  data () {
    return {
      title: "菜单生成页面",
      isShowLoading: true,
      dataName: [ // 套餐名
        "A", "B", "C", "D", "E"
      ],
      dataOld: [ // 原始数据
        "冬瓜云耳炒肉", "冬瓜肉片", "青瓜云耳炒肉", "青瓜支竹炒肉", "香干炒肉", "尖椒香干炒肉", "梅菜扣肉", "香菇肉饼", "香菇爆炒腩肉", "肉沫水晶粉", "肉丝炒豆角条", "肉丝炒圆椒", "西芹炒肉条", "西芹香干炒肉", "兰豆炒腊肠",
        "肉酱水蛋", "青豆炒猪皮肉", "蒜苗炒肉条", "水煮肉", "京酱肉丝", "回锅肉", "卤水拼盘", "尖椒豆卜炒肉", "特色小炒王", "小炒肉", "豆芽炒肉丝", "豆芽炒肉", "土豆小炒肉", "土豆条炒肉", "土豆丝炒肉", "土豆炒肉丝", "土豆炒肉", "胡萝卜炒肉",
        "西芹炒卤肚", "卤水猪手", "酱香猪手", "南乳花生猪手", "凉拌牛肉", "黑椒牛肉粒", "黑椒汁鲜菇肥牛", "糖醋排骨", "香芋蒸排骨", "凉瓜黄豆炆排骨", "彩椒炒排骨", "香辣牛腩", "尖椒炒鱿鱼", "豉汁马鲛鱼", "蒜台炒腊味",
        "三色煎蛋", "三杯鸭", "炒三丝", "洋葱爆炒卤肚", "萝卜炆牛腩", "姜汁鱼块", "洋葱爆鱿鱼丝", "青瓜炒蛋", "肉丝炒豆芽", "莴笋炒肉片", "莴笋炒肉", "青瓜炒肉片", "手工自制肉丸",
        "土豆咖喱鸡", "水蒸鸡", "炸鸡腿", "玉米炒鸡丁", "宫保鸡丁", "捞起鸡三宝", "奥尔良鸡腿", "豉汁姜葱炒鸡", "明炉烧鸭", "啤酒鸭", "子姜鸭", "茄汁鸡扒", "香菇炆鸡", "白切鸡", "沙姜白切鸡",
        "水煮鱼", "老干妈鱼块", "老干妈带鱼", "姜汁海鱼", "豉汁海鱼", "红杉鱼", "豉汁沙丁鱼", "清蒸草鱼", "蒜苔麻虾", "豉油王洋葱虾", "香菇豆腐炆鱿鱼", "韭黄炒蛋", "尖椒炒蛋", "凉瓜炒蛋",
        "一碗香", "云耳藕片", "老干妈炒藕片", "干煸豆角", "西红柿炒蛋", "梅香鱼炆茄子", "白玉冬瓜", "凉瓜豆豉炒肉", "凉瓜豆豉炒", "豆豉虎皮青椒", "麻辣豆腐", "蚝汁酿豆卜", "手撕包菜", "炸茄盒",
        "花生炆猪手", "肉片炒香干", "酱鸭", "红烧鱼块", "咖喱鸡", "梅香鱼炒茄条", "客家豆腐炆腩肉", "豉油皇虾", "蒜苗爆肉条", "黄瓜炒肉片", "豆豉凉瓜炒肉",
        "火腿炒脆花", "蒜香牛肉", "蒜苔鱿鱼丝", "香干炒西芹", "萝卜放排骨肉", "肉丝炒韭黄", "西红柿炒香菇", "蚝汁酿凉瓜",
        "凉拌炒肥肉", "尖椒豆卜", "肉沫冬瓜", "肉沫水蛋", "豆角炒肉丝", "焦香鸡翅", "玉米炒火腿粒", "红烧肉", "黑椒肥牛粒", "豉汁海鱼", "韭菜炒蛋", "尖椒炒豆卜", "蒜台鱿鱼丝", "肉沫南瓜片", "鸡丁炒玉米粒", "西红柿烩鲜菇",
        "蒜台麻虾", "姜醋猪手", "尖椒炒麻虾", "卤味拼盘", "姜汁红杉鱼", "五香牛腩", "青豆角炒卤肚", "爆炒肉丝", "蚝汁鲜菇", "萝卜丝炒肉", "客家豆腐膨肉", "芽菜肉沫豆角松", "肉沫豆角松", "虎皮尖椒", "菜花炒腊肠",
        "凉瓜炒肥牛", "香酥鸡腿", "姜汁鸡扒", "煎焗排骨", "爆炒鱿鱼丝", "支竹云耳炒肉", "韭黄炒肉丝", "梅香鱼坟茄条", "尖椒炒香干", "豉汁红杉鱼", "沙姜白切鸭", "炸鸡翅", "豆腐炆腩肉", "香干小炒肉", "梅香鱼炆茄条",
        "豉油皇爆花楠", "麻婆豆腐", "腊肠炒脆花", "爆炒猪扒筋", "西兰花炒肉丝", "鲜菇牛肉", "椒盐三炆鱼头", "卤味三拼", "香菇烩冬瓜", "豆角炒肉", "酱爆茄子", "家常豆腐", "冬瓜炆猪手", "豉油王麻虾", "蒜台爆炒肉条",
        "咸菜炒肚片", "鲜菇炒肉", "香菇蒸鸡", "地三鲜", "白菜炖豆卜", "咕噜肉", "云耳青瓜炒肉", "蒸水蛋", "土豆烧排骨", "香酥福寿鱼", "蚝汁茄盒", "韭菜猪红", "煎焗鸡翅根", "老千妈鱼块",
        "蒜苔爆肉条", "肉沫芽菜豆角松", "葱油鸡", "清蒸大草鱼", "咸菜炒卤肚", "鱼香茄条", "花腩黄瓜炆豆腐", "云耳白菜炖豆", "土豆炆排骨", "尖椒麻虾", "豆卜炆腩肉", "椒盐海泥鳅", "香芋扣肉",
        "蒜台炒鱿鱼丝", "烤汁焗鸡翅根", "香酥海鱼", "菠萝咕噜肉"
      ],
      data: [ // 列表数据
        "冬瓜云耳炒肉", "冬瓜肉片", "青瓜云耳炒肉", "青瓜支竹炒肉", "香干炒肉", "尖椒香干炒肉", "梅菜扣肉", "香菇肉饼", "香菇爆炒腩肉", "肉沫水晶粉", "肉丝炒豆角条", "肉丝炒圆椒", "西芹炒肉条", "西芹香干炒肉", "兰豆炒腊肠",
        "肉酱水蛋", "青豆炒猪皮肉", "蒜苗炒肉条", "水煮肉", "京酱肉丝", "回锅肉", "卤水拼盘", "尖椒豆卜炒肉", "特色小炒王", "小炒肉", "豆芽炒肉丝", "豆芽炒肉", "土豆小炒肉", "土豆条炒肉", "土豆丝炒肉", "土豆炒肉丝", "土豆炒肉", "胡萝卜炒肉",
        "西芹炒卤肚", "卤水猪手", "酱香猪手", "南乳花生猪手", "凉拌牛肉", "黑椒牛肉粒", "黑椒汁鲜菇肥牛", "糖醋排骨", "香芋蒸排骨", "凉瓜黄豆炆排骨", "彩椒炒排骨", "香辣牛腩", "尖椒炒鱿鱼", "豉汁马鲛鱼", "蒜台炒腊味",
        "三色煎蛋", "三杯鸭", "炒三丝", "洋葱爆炒卤肚", "萝卜炆牛腩", "姜汁鱼块", "洋葱爆鱿鱼丝", "青瓜炒蛋", "肉丝炒豆芽", "莴笋炒肉片", "莴笋炒肉", "青瓜炒肉片", "手工自制肉丸",
        "土豆咖喱鸡", "水蒸鸡", "炸鸡腿", "玉米炒鸡丁", "宫保鸡丁", "捞起鸡三宝", "奥尔良鸡腿", "豉汁姜葱炒鸡", "明炉烧鸭", "啤酒鸭", "子姜鸭", "茄汁鸡扒", "香菇炆鸡", "白切鸡", "沙姜白切鸡",
        "水煮鱼", "老干妈鱼块", "老干妈带鱼", "姜汁海鱼", "豉汁海鱼", "红杉鱼", "豉汁沙丁鱼", "清蒸草鱼", "蒜苔麻虾", "豉油王洋葱虾", "香菇豆腐炆鱿鱼", "韭黄炒蛋", "尖椒炒蛋", "凉瓜炒蛋",
        "一碗香", "云耳藕片", "老干妈炒藕片", "干煸豆角", "西红柿炒蛋", "梅香鱼炆茄子", "白玉冬瓜", "凉瓜豆豉炒肉", "凉瓜豆豉炒", "豆豉虎皮青椒", "麻辣豆腐", "蚝汁酿豆卜", "手撕包菜", "炸茄盒",
        "花生炆猪手", "肉片炒香干", "酱鸭", "红烧鱼块", "咖喱鸡", "梅香鱼炒茄条", "客家豆腐炆腩肉", "豉油皇虾", "蒜苗爆肉条", "黄瓜炒肉片", "豆豉凉瓜炒肉",
        "火腿炒脆花", "蒜香牛肉", "蒜苔鱿鱼丝", "香干炒西芹", "萝卜炆排骨肉", "肉丝炒韭黄", "西红柿炒香菇", "蚝汁酿凉瓜",
        "凉拌炒肥肉", "尖椒豆卜", "肉沫冬瓜", "肉沫水蛋", "豆角炒肉丝", "焦香鸡翅", "玉米炒火腿粒", "红烧肉", "黑椒肥牛粒", "豉汁海鱼", "韭菜炒蛋", "尖椒炒豆卜", "蒜台鱿鱼丝", "肉沫南瓜片", "鸡丁炒玉米粒", "西红柿烩鲜菇",
        "蒜台麻虾", "姜醋猪手", "尖椒炒麻虾", "卤味拼盘", "姜汁红杉鱼", "五香牛腩", "青豆角炒卤肚", "爆炒肉丝", "蚝汁鲜菇", "萝卜丝炒肉", "客家豆腐膨肉", "芽菜肉沫豆角松", "肉沫豆角松", "虎皮尖椒", "菜花炒腊肠",
        "凉瓜炒肥牛", "香酥鸡腿", "姜汁鸡扒", "煎焗排骨", "爆炒鱿鱼丝", "支竹云耳炒肉", "韭黄炒肉丝", "梅香鱼坟茄条", "尖椒炒香干", "豉汁红杉鱼", "沙姜白切鸭", "炸鸡翅", "豆腐炆腩肉", "香干小炒肉",
        "豉油皇爆花楠", "麻婆豆腐", "腊肠炒脆花", "爆炒猪扒筋", "西兰花炒肉丝", "鲜菇牛肉", "椒盐三炆鱼头", "卤味三拼", "香菇烩冬瓜", "豆角炒肉", "酱爆茄子", "家常豆腐", "冬瓜炆猪手", "豉油王麻虾", "蒜台爆炒肉条",
        "咸菜炒肚片", "鲜菇炒肉", "香菇蒸鸡", "地三鲜", "白菜炖豆卜", "咕噜肉", "云耳青瓜炒肉", "蒸水蛋", "土豆烧排骨", "香酥福寿鱼", "蚝汁茄盒", "韭菜猪红", "煎焗鸡翅根", "老千妈鱼块",
        "蒜苔爆肉条", "肉沫芽菜豆角松", "葱油鸡", "清蒸大草鱼", "咸菜炒卤肚", "鱼香茄条", "花腩黄瓜炆豆腐", "云耳白菜炖豆", "土豆炆排骨", "尖椒麻虾", "豆卜炆腩肉", "椒盐海泥鳅", "香芋扣肉",
        "蒜台炒鱿鱼丝", "烤汁焗鸡翅根", "香酥海鱼", "菠萝咕噜肉"
      ],
      resultData: [ // 结果内容
      ],
      dataEnd: [ // 生成菜单内容
      ],
      inputModel: "", // 输入内容
      infoText: "",
      isShowText: false,
      date: "",
      imgUrl: require("../../common/images/wechat/wechat.jpg"),
      isDeal: false, // 是否统计过
      info: false, // 是否有取消记录
      ajaxResult: [],
    };
  },
  created () {
    // let that = this;
    // // let arrLocal = that.getLocalStorage("data"); // 本地缓存的
    // // if (arrLocal) {
    // //   that.isShowLoading = false;
    // //   that.dataEnd = arrLocal;
    // //   return;
    // // }
    // this.dataEnd = [];
    // that.getData();
  },
  mounted () {
    console.log(this.$refs.name);
    let now = new Date();
    let month = now.getMonth();
    let day = now.getDate();
    month = month + 1;
    if (month < 10) month = "0" + month;
    if (day < 10) day = "0" + day;
    this.date = month + "-" + day;
  },
  activated () {
    this.dataEnd = [];
    this.ajaxResult = [];
    this.getData();
  },
  computed: {
    // // 显示的长度
    // isShowLength: function () {
    //   return this.resultData.length;
    // },
    // // 非空的长度
    // lengthCurrent: function () {
    //   return this.resultData.filter(function (item) {
    //     return item !== "";
    //   });
    // }
  },
  watch: {
    // // 修改查询后，清空不重置列表
    // inputModel: function (val) {
    //   if (val.length == 0) {
    //     this.data = this.dataOld;
    //   }
    // },
    // // 非空的长度，清空复制框内容
    // lengthCurrent: function (val) {
    //   if (val.length < 10) {
    //     this.$refs.inputText.value = "";
    //   }
    // }
  },
  methods: {
    // async uploadFild (event) {
    //   const files = event.target.files;
    //   const formDate = new FormData();
    //   for (let file of Object.values(files)) {
    //     formDate.append("avatar", file);
    //   }
    //   const response = await this.uploadFilds(formDate);
    //   if (response.code === 1) {
    //     this.$toast.show("文件上传成功！");
    //   }
    // },
    // async uploadFilds (formDate) {
    //   return this.$axios({
    //     url: "/imgUpdate",
    //     data: formDate,
    //   }).then(res => {
    //     console.log(res);
    //   });
    // },
    getData () {
      let that = this;
      // console.log(123131313);
      that.$axios({ url: "/imgOcr" }).then(res => {
        that.isShowLoading = false;
        let arrRes = res.data.words_result; // 最初的
        console.log(arrRes);
        let arrResNew = []; // 过滤后的
        let newArr = []; // 组合成套餐的
        let arrs = [];
        arrRes.forEach(function (item) {
          if (item["words"].search("星期") == "-1" && item["words"].search("尾期") == "-1" && item["words"].search("套餐") == "-1" && item["words"].search("时蔬") == "-1" && item["words"].search("每份16元") == "-1") {
            if (item["words"].indexOf("于") >= 0 || item["words"].indexOf("千") >= 0) {
              item = {
                words: item["words"].replace(/[于,千]/g, "干")
              };
            }
            if (item["words"].indexOf("蚊") >= 0 || item["words"].indexOf("文") >= 0) {
              item = {
                words: item["words"].replace(/[蚊,文]/g, "炆")
              };
            }
            if (item["words"].indexOf("非") >= 0) {
              item = {
                words: item["words"].replace(/非/g, "韭")
              };
            }
            if (item["words"].indexOf("末") >= 0) {
              item = {
                words: item["words"].replace(/末/g, "沫")
              };
            }
            if (item["words"].indexOf("玻") >= 0) {
              item = {
                words: item["words"].replace(/玻/g, "豉")
              };
            }
            if (item["words"].indexOf("于妙肉") >= 0) {
              item = {
                words: item["words"].replace(/于妙肉/g, "小炒肉")
              };
            }
            if (item["words"].indexOf("炊测肉") >= 0) {
              item = {
                words: item["words"].replace(/炊测肉/g, "炆腩肉")
              };
            }
            if (item["words"].indexOf("碗香") >= 0) {
              item = {
                words: item["words"].replace(/碗香/g, "一碗香")
              };
            }
            if (item["words"].indexOf("品") >= 0) {
              item = {
                words: item["words"].replace(/品/g, "晶")
              };
            }
            if (item["words"].indexOf("于") >= 0) {
              item = {
                words: item["words"].replace(/于/g, "干")
              };
            }
            if (item["words"].indexOf("|") >= 0) {
              item = {
                words: item["words"].replace(/\|/g, "")
              };
            }
            if (item["words"].indexOf("她") >= 0) {
              item = {
                words: item["words"].replace(/她/g, "炖")
              };
            }
            arrResNew.push(item);
          }
        });
        console.log(arrResNew); // 过滤后的
        arrResNew.forEach(ele => {
          ele["words"].replaceAll(" ", "");
          if (ele["words"].length >= 2) {
            that.dealItem(ele["words"]);
          }
        });
        arrs = that.ajaxResult; // 处理后的
        console.log("菜单种类" + arrs.length);
        if (arrs.length > 30) {
          for (let j = 0; j < arrs.length; j++) {
            if (j > 0 && j % 10 == 0 && j / 10 !== 2) {
              console.log(arrs[j]);
              console.log(newArr);
              if (j < arrs.length) {
                j = j + 9;
                console.log(j);
              }
            } else {
              console.log(arrs[j]);
              newArr.push(arrs[j]) && newArr.push(arrs[j + 10]);
            }
          }
          that.$nextTick(function () {
            console.log(newArr);
            that.dealResultFour(newArr);
          });
        } else {
          for (let i = 0; i < arrs.length; i++) {
            if (i > 0 && i % 5 == 0 && i % 10 != 0) {
              if (i < arrs.length) {
                i += 4;
              }
            } else {
              newArr.push(arrs[i]) && newArr.push(arrs[i + 5]);
            }
          }
          that.$nextTick(function () {
            that.dealResult(newArr);
          });
        }

      }).catch(function (error) {
        console.log(error);
      });
    },
    setLocalStorage (key, value, days) {
      // 设置过期原则
      if (!value) {
        localStorage.removeItem(key);
      } else {
        var Days = days || 1; // 默认保留1天
        var exp = new Date();
        localStorage[key] = JSON.stringify({
          value,
          expires: exp.getTime() + Days * 24 * 60 * 60 * 1000
        });
      }
    },
    getLocalStorage (key) {
      let result = localStorage[key];
      console.log(result);
      if (result == undefined) {
        return false;
      }
      let o = JSON.parse(localStorage[key]);
      if (!o || o.expires < Date.now()) {
        return false;
      } else {
        return o.value;
      }

      //  catch (e) {
      //   // 兼容其他localstorage
      //   console.log(e);
      //   return localStorage[key];
      // }
    },
    // 处理显示菜单结果
    dealResultFour (arrs) { // 处理四张图
      this.dataEnd = [];
      for (let j = 0; j < arrs.length / 10; j++) {
        let newArr = [];
        if (j < 1) {
          for (let i = 0; i < this.dataName.length; i++) {
            newArr.push(`${this.dataName[i]}  ${arrs[i * 2]}  ${arrs[i * 2 + 1]}  时蔬`);
          }
        } else {
          for (let i = 0; i < this.dataName.length; i++) {
            newArr.push(`${this.dataName[i]}  ${arrs[j * 10 + i * 2]}  ${arrs[j * 10 + i * 2 + 1]}  时蔬`);
          }
        }
        this.dataEnd.push(newArr);
        this.setLocalStorage("data", this.dataEnd, 0.3);
      }
    },
    // 处理显示菜单结果
    dealResult (arrs) { // 处理一张图和三张图
      this.dataEnd = [];
      for (let j = 0; j < arrs.length / 10; j++) {
        let newArr = [];
        if (j < 1) {
          for (let i = 0; i < this.dataName.length; i++) {
            newArr.push(`${this.dataName[i]}  ${arrs[i * 2]}  ${arrs[i * 2 + 1]}  时蔬`);
          }
        } else {
          for (let i = 0; i < this.dataName.length; i++) {
            newArr.push(`${this.dataName[i]}  ${arrs[j * 10 + i * 2]}  ${arrs[j * 10 + i * 2 + 1]}  时蔬`);
          }
        }
        this.dataEnd.push(newArr);
        console.log(this.dataEnd);
        this.setLocalStorage("data", this.dataEnd, 0.3);
      }
    },
    dealItem (ele) {
      let newEle = "";
      let arrResult = [];
      let splicString = ele.slice(0, 2);
      console.log(splicString + "splicString");
      this.dataOld.forEach(function (item, index) { // 菜单中包含截取部分的数组
        if (item.indexOf(splicString) >= 0) {
          arrResult.push({ // 从本地菜单匹配的多个结果
            id: index,
            val: item
          });
        }
      });
      console.log(ele + "-------");
      console.log(arrResult);
      let resultArr = arrResult.filter(function (i) { // 从匹配的多个结果中筛选符合的
        return ele.indexOf(i.val) >= 0;
      });
      console.log(resultArr); // 多个结果
      let resultObject = [];
      resultArr.forEach(function (list) { // 把筛选出来的组合成对象数组
        if (ele.indexOf(list.val) != -1) {
          resultObject.push({
            id: ele.indexOf(list.val),
            values: list.val
          });
        }
      });
      let resultValues = resultObject.sort(function sortNumber (a, b) { // 根据对象数组id处理在ele中出现的符合条件的数组中的第一的值
        return (a["id"] - b["id"]);
      })[0].values;
      console.log(resultValues);
      this.ajaxResult.push(resultValues); // 真正的结果
      newEle = ele.replace(resultValues, ""); // 删除已匹配的部分
      console.log(newEle + "----剩下的部分");
      if (newEle.length >= 2) { // 递归匹配
        this.dealItem(newEle);
      } else {
        return;
      }
    },
    // // 取消
    // clickQuit: function(index) { // 清除选择的数据
    //   this.resultData.splice(index, 1, "");
    // },
    // // 选择
    // clickChoic: function (item) {
    //   if (this.inputModel !== "") {
    //     this.inputModel = "";
    //     this.data = this.dataOld;
    //   }
    //   if (this.lengthCurrent.length == 10) {
    //     alert("已选十个菜品，查看底部生成菜品！");
    //     return false;
    //   }
    //   let index = this.resultData.indexOf(item);
    //   if (index == -1) { // 不存在
    //     let indexEmpty = this.resultData.indexOf("");
    //     if (indexEmpty !== -1) { // 有记录，存在为“”
    //       this.resultData.splice(indexEmpty, 1, item);
    //     } else {
    //       this.resultData.push(item);
    //     }
    //   } else {
    //     alert("所选菜品已存在，请先取消后再选择该菜品！");
    //     return false;
    //   }
    //   if (this.lengthCurrent.length == 10) {
    //     this.dealResult();
    //     alert("已选十个菜品，查看底部生成菜单！");
    //     return;
    //   }
    // },
    // // 搜索
    // dealSearch() {
    //   let that = this;
    //   if (that.inputModel == "") {
    //     that.data = that.dataOld;
    //     return;
    //   }
    //   this.data = that.data.filter(function(item) {
    //     return item.search(that.inputModel) !== -1;
    //   });
    // },
    // 复制菜单
    copyText (index) {
      let text = this.$refs.refResult[index].innerText;
      let input = this.$refs.inputText[index];
      input.value = text; // 修改炆本框的内容
      input.select(); // 选中炆本
      document.execCommand("copy"); // 执行浏览器复制命令
    }
  },
  components: {
    "scroll": scroll,
    loadings,
    "top-item": topItem
  }
};
</script>
<style scoped>
.wrapper {
  position: relative;
  top: 80px;
  left: 0;
  width: 100%;
  height: 100%;
  overflow: scroll;
  box-sizing: border-box;
}

.wrapper .wrapper-info {
  width: 100%;
  height: 20px;
  line-height: 20px;
  margin-bottom: 10px;
  color: orangered;
}

.wrapper-images {
  width: 100%;
  height: 50%;
  text-align: center;
  margin-bottom: 10px;
}

.wrapper-images img {
  width: 80%;
  height: 80%;
}

.wrapper .wrapper-input {
  width: 100%;
  height: 40px;
  /*border-bottom: 1px solid #d6d7dc;*/
  margin-bottom: 10px;
}

.wrapper-input input {
  margin: 0;
  text-indent: 10px;
  border: none;
  outline: none;
  height: 30px;
  line-height: 30px;
  border-radius: 15px;
  border: 1px solid #00c65d;
}

.wrapper-input .input-text {
  font-size: 12px;
}

.wrapper .wrapper-one {
  width: 100%;
  height: 230px;
  margin-bottom: 30px;
  display: flex;
  flex-wrap: wrap;
  flex-direction: row;
  justify-content: flex-start;
  padding-bottom: 10px;
  /*border-bottom: 1px solid #d6d7dc;*/
}

.wrapper .wrapper-tow {
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  flex-direction: row;
  justify-content: flex-start;
  padding-bottom: 10px;
  /*border-bottom: 1px solid #d6d7dc;*/
}

.wrapper-tow .item {
  flex: 1;
  width: 46%;
  min-width: 46%;
  max-width: 46%;
  height: 30px;
  line-height: 30px;
  margin-bottom: 10px;
  cursor: pointer;
  margin-left: 2px;
  border-radius: 15px;
  font-size: 14px;
  color: #fff;
  text-align: center;
  background-color: #00c65d;
}

.wrapper-tow .active {
  background: orange;
}

.wrapper-one .item-result {
  flex: 1;
  width: 46%;
  min-width: 46%;
  max-width: 46%;
  height: 30px;
  line-height: 30px;
  margin-bottom: 10px;
  cursor: pointer;
  border-radius: 15px;
  margin-left: 2px;
  font-size: 14px;
  color: #fff;
  text-align: center;
  background-color: orange;
}

.wrapper-one .greeActive {
  background: #00c65d;
}

.wrapper-one .wrapper-header,
.wrapper-tow .wrapper-header {
  width: 100%;
  height: 30px;
  line-height: 30px;
  font-size: 16px;
  font-weight: 500;
  margin-bottom: 10px;
  /*border-bottom: 1px solid #d6d7dc;*/
}

.wrapper-header .header-text {
  font-size: 12px;
}

.wrapper-text {
  width: 80%;
  margin: 0 auto;
  padding: 20px 0;
}

.wrapper-textarea {
  display: inline-block;
  vertical-align: bottom;
  width: 60%;
  height: 30px;
  height: auto;
  border: 1px solid #00c65d;
}

button {
  display: inline-block;
  vertical-align: bottom;
  background: #fff;
  height: 30px;
  line-height: 30px;
  border: 1px solid #00c65d;
}
</style>
