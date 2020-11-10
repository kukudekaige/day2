<template>
  <div class="home">
    <div class="head">
      <van-nav-bar
        title="标题"
        left-text="返回"
        right-text="按钮"
        left-arrow
        @click-left="onClickLeft"
        @click-right="onClickRight"
      />
    </div>
    <div class="main">
      <van-tabs v-model="active">
        <van-tab
          :title="item.title"
          v-for="(item, index) in list"
          :key="index"
          @click="chan(index)"
        >
          <van-card
            :num="ite.cont"
            price="2.00"
            desc="描述信息"
            :title="ite.name"
            :thumb="ite.url"
            v-for="(ite, inde) in list[active].children"
            :key="inde"
            @click="Todotail(ite.id)"
          >
            <template #tags>
              <van-tag plain type="danger">标签</van-tag>
              <van-tag plain type="danger">标签</van-tag>
            </template>
            <template #footer>
              <van-button size="mini">按钮</van-button>
              <van-button size="mini">按钮</van-button>
            </template>
          </van-card>
        </van-tab>
      </van-tabs>
    </div>
    <Footer />
  </div>
</template>

<script>
import { Toast } from "vant";
import axios from "axios";
export default {
  created() {
    axios.get("/api/list").then((res) => {
      this.list = res.data;
      console.log(this.list);
    });
  },
  data() {
    return {
      active: 0,
      list: [],
    };
  },
  methods: {
    onClickLeft() {
      Toast("返回");
    },
    onClickRight() {
      Toast("按钮");
    },
    chan(index) {
      this.active = index;
      console.log(active);
    },
    Todotail(id) {
      this.$router.push(`/dotail/${id}`);
    },
  },
};
</script>

<style>
</style>