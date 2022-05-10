<template>
  <div>
    <el-form
      :label-position="labelPosition"
      :model="ruleForm"
      :rules="rules"
      ref="ruleForm"
      label-width="100px"
      class="demo-ruleForm"
    >
      <!-- <el-form-item label="Model Image" prop="image">
        <el-upload
          action="https://jsonplaceholder.typicode.com/posts/"
          list-type="picture-card"
          :on-preview="handlePictureCardPreview"
          :on-remove="handleRemove"
        >
          <i class="el-icon-plus"></i>
        </el-upload>
        <el-dialog :visible.sync="dialogVisible">
          <img width="100%" :src="dialogImageUrl" alt="" />
        </el-dialog>
      </el-form-item> -->

      <el-form-item label="Model Image">
        <div class="com-upload-img">
          <div class="img_group">
            <div class="img_box" v-if="allowAddImg">
              <div>
                <i class="el-icon-picture image-upload-button"></i>
                <input
                  ref="upload"
                  type="file"
                  accept="image/*"
                  multiple="multiple"
                  class="model-image-input"
                  @change="changeImg($event)"
                />
              </div>
            </div>

            <viewer :images="imgArr">
              <img
                v-for="(src, index) in imgArr"
                :src="src"
                :key="index"
                width="450"
                class="img-show"
                @contextmenu.prevent="deleteImg(index)"
              />
            </viewer>
          </div>
        </div>
      </el-form-item>
      <el-form-item label="Model Name" prop="name">
        <el-input v-model="ruleForm.name"></el-input>
      </el-form-item>

      <el-form-item label="Description" prop="desc">
        <el-input v-model="ruleForm.desc"></el-input>
      </el-form-item>

      <!-- <el-form-item label="Report File" prop="reportFile">
        <el-upload
          accept=".pdf"
          action="https://jsonplaceholder.typicode.com/posts/"
          :file-list="fileArr"
          :show-file-list="true"
          :auto-upload="false"
          :before-upload="beforeUpload"
          :on-success="upSuccess"
          :on-error="upError"
          :on-change="imgPreview"
        >
          <el-button size="small" type="primary" class="upload-btn">
            <span class="iconfont icon-shangchuan" />Click to Upload
          </el-button>
        </el-upload>
      </el-form-item> -->

      <!-- <el-form-item label="Include Model" prop="include">
        <el-switch v-model="ruleForm.delivery"></el-switch>
      </el-form-item> -->

      <!-- <el-form-item label="External Link" prop="exlink">
        <el-input v-model="ruleForm.exlink"></el-input>
      </el-form-item> -->

      <el-form-item>
        <!-- <el-button @click="resetForm('ruleForm')">Reset</el-button> -->
        <el-button type="primary" @click="mint()">Mint</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>


<script>
import pdf from "vue-pdf";
import { mintnft } from "../../api/index";
import { createNFT } from "../../api/web3/contracts";
import { mapState } from "vuex";
import { getStore } from "../../utils/storage";
export default {
  props: ["close"],
  data() {
    return {
      imgArr: [],
      allowAddImg: true,
      labelPosition: "top",
      dialogImageUrl: "",
      //fileList: [],
      pdfUrl: "",
      numPages: [],
      // fileArr: [],
      upLoadImgUrl: "",
      dialogVisible: false,
      ruleForm: {
        name: "",
        desc: "",
        // include: false,
        // exlink: "",
      },
      rules: {
        name: [
          {
            required: true,
            message: "Please Enter Model Name",
            trigger: "blur",
          },
          {
            min: 3,
            max: 15,
            message: "3 to 15 characters long",
            trigger: "blur",
          },
        ],
        desc: [
          {
            required: true,
            message: "Please Enter Model Description",
            trigger: "blur",
          },
          {
            min: 3,
            max: 150,
            message: "3 to 150 characters long",
            trigger: "blur",
          },
        ],

        exlink: [
          {
            required: true,
            message: "Please Enter External Link",
            trigger: "blur",
          },
          {
            min: 10,
            max: 200,
            message: "10 to 200 characters long",
            trigger: "blur",
          },
        ],
        // exlink: [
        //   { required: true, message: "Please Enter External Link", trigger: "blur" },
        //   {
        //     min: 10,
        //     max: 200,
        //     message: "10 to 200 characters long",
        //     trigger: "blur",
        //   },
        // ],
      },
      mintResult: false,
    };
  },
  components: {
    pdf,
  },
  computed: {
    ...mapState(["user", "statusCode", "configData", "historySimulateData"]),
  },
  methods: {
    submitForm(formName) {
      this.$refs[formName].validate((valid) => {
        if (valid) {
          alert("submit!");
        } else {
          console.log("error submit!!");
          return false;
        }
      });
    },
    // resetForm(formName) {
    //   this.$refs[formName].resetFields();
    // },

    // handleRemove(file, fileList) {
    //   console.log(file, fileList);
    // },
    // handlePictureCardPreview(file) {
    //   this.dialogImageUrl = file.url;
    //   this.dialogVisible = true;
    // },
    // handleChange(file, fileList) {
    //   this.fileList = fileList.slice(-3);
    // },
    // beforeUpload(file) {
    //   const fileSuffix = file.name.substring(file.name.lastIndexOf(".") + 1);
    //   const whiteList = ["pdf"];
    //   if (whiteList.indexOf(fileSuffix) === -1) {
    //     this.$msg("上传文件只能是 pdf");
    //     return false;
    //   }
    // },
    // imgPreview(file) {
    //   this.fileArr = [];
    //   this.fileArr.push(file);
    //   this.form.position = "";
    //   console.log(file);
    //   this.form.position = file.name;
    //   let fileName = file.name;
    //   let regex = /(.jpg|.jpeg|.gif|.png|.pdf)$/;
    //   if (regex.test(fileName.toLowerCase())) {
    //     this.upLoadImgUrl = URL.createObjectURL(file.raw); // 获取URL
    //     this.pdfUrl = this.getPdfUrl(file);
    //     console.log(this.upLoadImgUrl);
    //   } else {
    //     this.$message.error("请选择pdf文件");
    //   }
    // },

    // 上传成功
    upSuccess(res) {
      this.$message({
        message: "上传成功",
        type: "success",
      });
    },
    // 上传失败
    upError(e) {
      this.$message({
        message: "上传失败",
        type: "error",
      });
    },
    //处理pdf
    getPdfUrl(file) {
      console.log(file);
      let url = window.URL.createObjectURL(file.raw); //将文件转化成url
      //加载pdf
      let loadingTask = pdf.createLoadingTask(url);
      loadingTask.promise
        .then((pdf) => {
          this.numPages = pdf.numPages;
          console.log(this.numPages);
        })
        .catch((err) => {
          console.error("pdf 加载失败", err);
        });
      return url;
    },
    //调用该函数创建nft
    confirmMint(modelData, user, name, desc, displayUrl) {
      // 参数: modelData, params, user, name, desc, displayUrl
      // 获取画布上节点的参数包装
      let paramsJSONString = this.getParamsOutsideGraph();
      let resultJSONString = JSON.stringify(this.historySimulateData);

      const req = {
        accountAddr: user,
        metaData: {
          name: this.ruleForm.name,
          desc: this.ruleForm.desc,
          displayUrl: displayUrl,
          metadataHash: "",
        },
        secretData: {
          modelData: modelData,
          params: paramsJSONString,
          results: resultJSONString,
        },
      };
      console.log(req);
      try {
        mintnft(req).then((backRes) => {
          if (backRes.message_code == this.statusCode.SUCCESSED) {
            createNFT(
              this.user,
              name,
              desc,
              "",
              backRes.data.metadata_hash
            ).then((chainRes) => {
              if (chainRes.status == "successed") {
                this.$notify.success({
                  title: "Success",
                  message: "Mint NFT successful !",
                  position: "bottom-right",
                });
              } else {
                this.$notify.error({
                  title: "Error",
                  message: "Mint NFT error !",
                  position: "bottom-right",
                });
              }
            });
          } else {
            this.$notify.error({
              title: "Error",
              message: "Mint NFT error !",
              position: "bottom-right",
            });
          }
        });
      } catch (e) {
        this.$notify.error({
          title: "Error",
          message: "Mint NFT error !",
          position: "bottom-right",
        });
      }
    },
    changeImg(e) {
      // console.log(this.imgArr);
      var _this = this;
      var imgLimit = 10;
      var files = e.target.files;
      var image = new Image();
      if (files.length > 0) {
        var dd = 0;
        var timer = setInterval(function () {
          if (
            files.item(dd).type != "image/png" &&
            files.item(dd).type != "image/jpeg" &&
            files.item(dd).type != "image/gif"
          ) {
            _this.$message.error("仅支持图片类型！");
            return false;
          }
          if (files.item(dd).size > imgLimit * 102400) {
            //to do sth
            this.$message.error("图片要求小于1MB");
          } else {
            image.src = window.URL.createObjectURL(files.item(dd));
            image.onload = function () {
              // 默认按比例压缩
              var w = image.width,
                h = image.height;
              var quality = 1;
              var canvas = document.createElement("canvas");
              var ctx = canvas.getContext("2d");
              var anw = document.createAttribute("width");
              anw.nodeValue = w;
              var anh = document.createAttribute("height");
              anh.nodeValue = h;
              canvas.setAttributeNode(anw);
              canvas.setAttributeNode(anh);
              ctx.drawImage(image, 0, 0, w, h);
              var ext = image.src
                .substring(image.src.lastIndexOf(".") + 1)
                .toLowerCase(); //图片格式
              var base64 = canvas.toDataURL("image/" + ext, quality);
              // 回调函数返回base64的值
              if (_this.imgArr.length <= 1) {
                _this.imgArr.unshift("");
                _this.imgArr.splice(0, 1, base64); //替换数组数据的方法，此处不能使用：this.imgArr[index] = url;
                _this.$notify.success({
                  title: "Success",
                  message:
                    "Image upload successful! You can right-click to delete it ",
                  position: "bottom-right",
                });
                _this.$refs.upload.value = null;
                if (_this.imgArr.length >= 1) {
                  _this.allowAddImg = false;
                }
              }
            };
          }
          if (dd < files.length - 1) {
            dd++;
          } else {
            clearInterval(timer);
          }
        }, 1000);
      }
    },
    deleteImg(index) {
      this.imgArr.splice(index, 1);
      if (this.imgArr.length < 5) {
        this.allowAddImg = true;
      }
    },
    mint() {
      const modelData = getStore("graph");
      try {
        this.confirmMint(
          modelData,
          this.user,
          this.ruleForm.name,
          this.ruleForm.desc,
          this.imgArr[0]
        );
      } finally {
        this.ruleForm.name = "";
        this.ruleForm.desc = "";
        this.imgArr = [];
        this.allowAddImg = true;
        this.close();
      }
    },
    // 获取画布之外的环境参数，返回值是 JSON 字符串
    getParamsOutsideGraph() {
      let res = {
        configData: this.configData
      };

      return JSON.stringify(res);
    },
  },
};
</script>

<style lang="scss" scoped >
.img_box {
  position: relative;
  .image-upload-button {
    font-size: 60px;
    margin-left: 30px;
  }
  .model-image-input {
    position: absolute;
    font-size: 40px;
    left: 30px;
    top: 0;
    opacity: 0;
    width: 60px;
  }
}
.img-show {
  margin-left: 15px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.12), 0 0 6px rgba(0, 0, 0, 0.04);
}
</style>