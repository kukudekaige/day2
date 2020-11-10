<template>
  <div class="car">
    <div class="main">
      <van-card
        :num="ite.cont"
        price="2.00"
        desc="描述信息"
        :title="ite.name"
        :thumb="ite.url"
        v-for="(ite, inde) in list"
        :key="inde"
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
    </div>
    <van-goods-action>
      <van-goods-action-icon icon="chat-o" text="客服" dot />
      <van-goods-action-icon icon="cart-o" text="购物车" badge="" />
      <van-goods-action-icon icon="shop-o" text="店铺" :badge="list.length" />
      <van-goods-action-button type="danger" text="立即购买" />
    </van-goods-action>
  </div>
</template>

<script>
export default {
  data() {
    return {
      list: JSON.parse(localStorage.getItem("Car")) || [],
    };
  },
  methods: {},
};
</script>

<style>
</style>