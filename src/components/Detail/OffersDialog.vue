<template >
  <div class="content">
    <el-table :data="offersData" style="width: 100%" max-height="250"
      >>
      <el-table-column prop="price" label="Unit Price" width="180">
        <template slot-scope="scope">
          <span class="item">{{ scope.row.price }} ETH</span>
        </template>
      </el-table-column>
      <!-- <el-table-column prop="" label="Quantity" width="180">
        <template slot-scope="scope">
          <span class="item">{{ scope.row.quantity }}</span>
        </template>
      </el-table-column> -->
      <el-table-column prop="buyer" label="From">
        <template slot-scope="scope">
          <span class="item"
            >{{ scope.row.buyer.substr(0, 5) }}...{{
              scope.row.buyer.substr(38)
            }}</span
          >
        </template>
      </el-table-column>
      <el-table-column label="" width="150"
        ><template slot-scope="scope">
          <el-button
            @click="confirmSell(scope.row)"
            type="text"
            size="small"
            class="accept"
            >Accept</el-button
          >
        </template>
      </el-table-column>
    </el-table>
  </div>
</template>
<script>
import { approveNFT, registerNFTSale } from "../../api/web3/contracts";

export default {
  props: ["offers"],
  data() {
    return {
      offersData: [],
    };
  },
  mounted() {
    this.offersData = this.offers;
  },
  methods: {
    confirmSell(row) {
      console.log(row.nftId);

      approveNFT().then((chainRes1) => {
        if (chainRes1.status == "success") {
          this.$notify.success({
            title: "Success",
            message: "Approve NFT successful !",
            position: "bottom-right",
          });
          console.log("tx response:", chainRes1.response);

          registerNFTSale(row.nftId).then((chainRes2) => {
            if (chainRes2.status == "success") {
              this.$notify.success({
                title: "Success",
                message: "Approve NFT sale successful !",
                position: "bottom-right",
              });
              console.log("tx response:", chainRes2.response);

            } else {
              this.$notify.error({
                title: "Error",
                message: "Approve NFT sale error !",
                position: "bottom-right",
              });
            }
          })

        } else {
          this.$notify.error({
            title: "Error",
            message: "Approve NFT error !",
            position: "bottom-right",
          });
        }
      })

      
    }
  }
};
</script>
<style lang="scss" scoped>
.content {
  //   border: 1px solid rgb(228, 228, 228);
  border-radius: 10px;
  .el-table {
    border-radius: 10px;
  }
  .accept {
    font-size: 16px;
    font-weight: 600;
    padding: 10px;
    // border: 1px solid #409eff;
    border-top-color: rgb(255, 230, 0);
    border-left: 1px double rgb(76, 209, 250);
    border-right: 1px double rgb(255, 169, 248);
    border-bottom: 1px double rgb(207, 94, 252);
    border-radius: 15px;
  }
  .item {
    font-weight: 600;
    color: rgb(113, 113, 113);
  }
}
</style>