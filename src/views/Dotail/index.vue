<template>
  <div class="dotail">
    <p class="lin1">
      <span @click="back"> 返回上一层 </span>
      <b>详情页</b>
    </p>
    <p>
      <img :src="obj.url" alt="" />
    </p>
    <h1>{{ obj.name }}</h1>
    <p>
      <button @click="add(obj)">加入购物车</button>
    </p>
  </div>
</template>

<script>
import axios from "axios";
export default {
  created() {
    axios
      .get("/api/obj", {
        params: {
          id: this.id,
        },
      })
      .then((res) => {
        this.obj = res.data;
        console.log(this.obj);
      });
  },
  data() {
    return {
      id: this.$route.params.id,
      obj: {},
    };
  },
  methods: {
    add(obj) {
      let Car = JSON.parse(localStorage.getItem("Car")) || [];
      let res = Car.find((item) => item.id === obj.id);
      console.log(obj);
      if (res) {
        res.cont++;
      } else {
        Car.push({
          ...obj,
          cont: 1,
        });
      }
      localStorage.setItem("Car", JSON.stringify(Car));
    },
    back() {
      this.$router.back();
    },
  },
};
</script>

<style>
img {
  width: 100%;
  height: 300px;
}
input {
  width: 30px;
  margin: 0 10px;
}
.lin1 {
  position: fixed;
  width: 100%;
  display: flex;
  justify-content: space-between;
  top: 0;
  left: 0;
}
.dotail {
  box-sizing: border-box;
}
</style>