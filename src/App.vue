<template>
  <Header />
  <RouterView />
</template>

<script setup>
import Header from "./components/Header.vue";
import { onMounted } from "vue";
import { useStore } from "vuex";
import { ProductsStore } from "@/store/ProductsStore";

const store = ProductsStore();

onMounted(() => {
  if (localStorage.getItem("cartItem")) {
    store.replaceProduct(JSON.parse(localStorage.getItem("cartItem")));
  }
});
</script>
