<template>
  <van-tabbar route>
    <van-tabbar-item
      replace
      :to="item.path"
      icon="home-o"
      v-for="(item, index) in data"
      :key="index"
      >{{ item.name }}</van-tabbar-item
    >
  </van-tabbar>
</template>

<script>
export default {
  data() {
    return {
      data: [
        {
          path: "/home",
          name: "首页",
        },
        {
          path: "/list",
          name: "列表",
        },
        {
          path: "/car",
          name: "购物车",
        },
        {
          path: "/my",
          name: "我的",
        },
      ],
    };
  },
};
</script>

<style>
</style>