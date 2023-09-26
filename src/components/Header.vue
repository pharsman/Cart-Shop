<template>
  <header>
    <h1>
      <router-link to="/">Simple Shop System</router-link>
    </h1>
    <p :class="{ active: active }" class="cart">
      <span> {{ getProductLength }}</span>
      <router-link to="/cart">Cart</router-link>
    </p>
  </header>
</template>

<script setup>
import { ProductsStore } from "@/store/ProductsStore";
import { ref, watch, computed } from "vue";

const store = ProductsStore();

const active = ref(false);

const getProductLength = computed(() => {
  return store.cartProducts.length;
});

watch(getProductLength, () => {
  active.value = true;
  setTimeout(() => {
    active.value = false;
  }, 1000);
});
</script>

<style lang="scss" scoped>
* {
  text-decoration: none;
}

header {
  padding: 24px 20px;
  background-color: pink;
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;

  h1 {
    a {
      font-size: 55px;
      color: white;
      cursor: pointer;
      user-select: none;
      -webkit-user-select: none;
    }
  }

  .active {
    transform: scale(1.2);
  }

  .cart {
    position: relative;
    transition: 0.6s;

    a {
      font-size: 34px;
      cursor: pointer;
      color: yellow;
      font-weight: bold;
    }

    span {
      position: absolute;
      top: 0;
      left: -12px;
      width: 20px;
      height: 20px;
      border-radius: 60%;
      background-color: red;
      font-size: 12px;
      text-align: center;
      line-height: 20px;
    }
  }
}
</style>
