<template >
  <div>
    <div class="image-box" :id="id"></div>
    <div class="infor-box">
      <div class="desc-box">
        <strong
          ><p>{{ name }}</p></strong
        >
        <p>{{ desc }}</p>
      </div>
      <div class="price-box">
        <strong><p>Price</p></strong>
        <i class="el-icon-d-caret">
          <span class="current-price"><strong> 0.22 </strong></span>
        </i>
      </div>
    </div>
    <div class="buy-and-collect-box">
      <div class="buy-box">
        <el-button type="text">Buy Now</el-button>
      </div>
      <div class="collect-box">
        <i class="el-icon-star-off"><span id="like">123</span></i>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  props: ["modelData"],
  data() {
    return {
      name: "",
      desc: "",
      img: "",
      accountAddr: "",
      metadataHash: "",
      metadata: null,
      id: "",
    };
  },
  methods: {
    initData() {
      this.accountAddr = this.modelData.accountAddr;
      this.metadataHash = this.modelData.metadataHash;
      this.metadata = JSON.parse(this.modelData.metadata);
      this.name = this.metadata.name;
      this.desc = this.metadata.desc;
      this.img = this.metadata.displayUrl;
      this.id = this.modelData.id;

      this.$nextTick(function () {
        document.getElementById(this.id).style.backgroundImage =
          "url(" + this.img + ")";
      });
    },
  },
  mounted() {
    this.initData();
  },
};
</script>

<style  lang="scss" scoped>
.image-box {
    height: 170px;
    //   background-image: url("https://lh3.googleusercontent.com/4mZN8XfWnchD1Q3HH3hKHUwZPbwHfS2sOjFk2jfdx_T4oWcpQtcUDB2AclymwViSFn4phjzGlXh7KVNMzB-VqjbQ_BEXCTgcdfThpg=h200");
    background-repeat: no-repeat;
    background-size: 100% 100%;
    border-radius: 10px 10px 0px 0px;
    /* border-top: 1px inset #22e8fe;
    border-left: 1px inset #22e8fe;
    border-right:  1px inset #22e8fe; */
    border: 1.5px inset rgb(162, 139, 245);
    border-bottom: none;
  }

.infor-box {
  //border-left: 0.5px solid #37e2f5;
  border: 1.5px inset rgb(162, 139, 245);
  border-bottom: 1.5px dotted rgb(162, 139, 245);
  border-top: 1.5px dotted rgb(162, 139, 245);
  background-color: #fff;
  opacity: 0.65;
  //width: 250px;
  height: 60px;
  padding-top: 2%;
  padding-left: 5%;
  padding-right: 3%;
  .desc-box {
    float: left;
  }
  .price-box {
    float: right;
  }
}
.buy-and-collect-box {
  //border: 1px solid #bbb;
  border: 1.5px inset rgb(162, 139, 245);
  background-color: #fff;
  opacity: 1;
  border-top: none;
  border-radius: 0px 0px 10px 10px;
  height: 40px;
  .buy-box {
    float: left;
    padding-left: 3%;
  }
  .collect-box {
    padding-right: 3%;
    padding-top: 4%;
    float: right;
  }
}   



</style>