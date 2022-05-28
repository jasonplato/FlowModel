<template >
  <div class="content">
    <div class="item">
      <p class="item-title">Price</p>
      <div class="item-content">
        <span class="coin-name"> WETH </span>
        <el-input
          class="account-input"
          v-model="account"
          placeholder="Amount"
        ></el-input>
      </div>
    </div>
    <el-button class="make-offer-button" type="primary" @click="makeoffer()">Make Offer</el-button>
  </div>
</template>
<script>
import { mapState } from "vuex";

import { getEOAPubkey } from "../../utils/cryptoUtil";
import { saveoffer } from "../../api/index";
import { approveNFT } from "../../api/web3/contracts";

export default {
  computed: {
    ...mapState([
      "user",
    ]),
  },
  props: ["nftId", "closeMakeOffer"],
  data() {
    return {
      account: 0,
    };
  },
  methods: {
    async makeoffer() {
      let pub = await getEOAPubkey(this.user);
      // let encPub = await encryptDataEOA(pub, this.user);

      let params = {
        "nftId": this.nftId,
        "address": this.user,
        "price": this.account,
        "key": pub,
      };

      saveoffer(params).then((res) => {
        if (res.message_code == 500) {
          console.log("SUCCESS sync offer data to database");
        } else {
          console.error("FAIL sync offer data to database");
        }
      });
      this.closeMakeOffer();
    } 
  },
  mounted() {
    console.log(this.nftId);
  },
};
</script>
<style lang="scss" scoped>
.item {
  .item-title {
    font-size: 18px;
    font-weight: 600;
    text-align: left;
    padding: 10px 0px;
  }
  .item-content {
    border-radius: 5px;
    border: solid 1px rgb(202, 201, 201);
    .coin-name {
      display: inline-block;
      font-weight: 600;
      padding: 5px 20px;
    }
    .account-input {
      width: 80%;
      border-left: 1px solid rgb(206, 206, 206);
      /deep/ .el-input__inner {
        border: none;
        font-weight: 600;
      }
    }
  }
}
.make-offer-button {
  margin: 30px 39%;
  font-weight: 600;
}
</style>