<template>
  <scroll>
    <div class="page-better">
      <div>
        <button class="page-btn" @click="imageUpdate">上传图片</button>
        <p>上传进度<span ref="J_UploadProgress">0</span>%</p>
        <p>上传结果图片</p>
        <div ref="J_PicturePreview" class="preview-picture"></div>
      </div>
      <div ref="test">{{ test }}</div>
      <div ref="test1">{{ test1 }}</div>
      <button @click="handleClick">tet213123123123132</button>
    </div>
    <!-- <loadings :isShow="isShowLoading"></loadings> -->
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
      test: "begin",
      test1: "begin1",
      title: "图片上传页面",
      UtilType: {
        isPrototype: function (data) {
          return Object.prototype.toString.call(data).toLowerCase();
        },

        isJSON: function (data) {
          return this.isPrototype(data) === "[object object]";
        },

        isFunction: function (data) {
          return this.isPrototype(data) === "[object function]";
        }
      },
    };
  },
  created () {
  },
  mounted () {
  },
  computed: {
  },
  watch: {
  },
  methods: {
    handleClick () {
      let that = this;
      that.test = "end";
      that.test1 = "123";
      console.log(that.$refs.test1.innerText);//打印“begin”
      this.$nextTick(() => {
        console.log(that.$refs.test1.innerText);
      });
    },
    imageUpdate () {
      let progressElem = this.$refs["J_UploadProgress"];
      let previewElem = this.$refs["J_PicturePreview"];
      console.log(3435);
      this.uploadAction({
        success: function (result) {
          console.log(result);
          if (result && result.success && result.data && result.data.pictureUrl) {
            previewElem.innerHTML = "<img src=\"" + result.data.pictureUrl + "\" style=\"max-width: 100%\">";
          }
        },
        progress: function (data) {
          if (data && data * 1 > 0) {
            progressElem.innerText = data;
          }
        }
      });
    },
    uploadAction (options) {
      if (!this.UtilType.isJSON(options)) {
        console.log("upload options is null");
        return;
      }
      let _options = {};
      _options.success = this.UtilType.isFunction(options.success) ? options.success : function () { };
      _options.fail = this.UtilType.isFunction(options.fail) ? options.fail : function () { };
      _options.progress = this.UtilType.isFunction(options.progress) ? options.progress : function () { };
      this.uploadEvent(_options);
    },
    /**
   * 上传事件
   * @param  {object} options 上传参数
   */
    uploadEvent (options) {
      let file;
      let that = this;
      let formData = new FormData();
      let input = document.createElement("input");
      input.setAttribute("type", "file");
      input.setAttribute("name", "files");

      input.click();
      input.onchange = function () {
        file = input.files[0];
        formData.append("files", file);
        that.requestEvent({
          formData,
          success: options.success,
          fail: options.fail,
          progress: options.progress
        });
      };
    },
    /**
     * form表单上传请求事件
     * @param  {object} options 请求参数
     */
    requestEvent (options) {
      let that = this;
      console.log(123);
      let formData = options.formData;
      that.$axios({
        method: "POST",
        url: "/api/picture/upload",
        data: formData,
        onUploadProgress: function (progressEvent) { //原生获取上传进度的事件
          if (progressEvent.lengthComputable) {
            //属性lengthComputable主要表明总共需要完成的工作量和已经完成的工作是否可以被测量
            //如果lengthComputable为false，就获取不到progressEvent.total和progressEvent.loaded
            console.log(progressEvent);
            let per = progressEvent.loaded / progressEvent.total;
            console.log(progressEvent.loaded / progressEvent.total);  //上传的百分比
            options.progress(per);
          }
        },
      }).then(res => {
        console.log(res);
        options.success(res.data);
      });
      // let xhr = new XMLHttpRequest();
      // xhr.onreadystatechange = function () {
      //   if (xhr.readyState === 4 && xhr.status === 200) {
      //     options.success(JSON.parse(xhr.responseText));
      //   }
      // };
      // xhr.upload.onprogress = function (evt) {
      //   let loaded = evt.loaded;
      //   let tot = evt.total;
      //   let per = Math.floor(100 * loaded / tot);
      //   options.progress(per);
      // };
      // xhr.open("post", "/api/picture/upload");
      // xhr.send(formData);
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

.page-btn {
  width: 100px;
  height: 30px;
  text-align: center;
  vertical-align: middle;
  color: white;
  background: #32af50;
}
</style>
