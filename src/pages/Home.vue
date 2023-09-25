<template>
  <div class="search-box">
    <input
      type="text"
      class="input-search"
      v-model="searchWord"
      placeholder="Type to Search..."
    />
  </div>

  <div class="product-cont">
    <Products
      v-for="(item, index) in getData"
      :key="index"
      :id="item.id"
      :data="item"
    />
  </div>
  <p v-if="errorMsg" class="error">item was not found :(</p>
</template>

<script setup>
import Products from "@/components/Products.vue";
import { getProductsData } from "@/services/getProductsData";

import { ref, computed, watch } from "vue";

const productsData = ref([]);

getProductsData().then((resp) => {
  productsData.value = resp.data;
});
const getData = computed(() => {
  return productsData.value.filter((el) =>
    el.title.toLocaleLowerCase().includes(searchWord.value.toLocaleLowerCase())
  );
});

const searchWord = ref("");

const errorMsg = ref(false);

watch(getData, (val) => {
  if (val.length === 0) {
    errorMsg.value = true;
  } else {
    errorMsg.value = false;
  }
});
</script>

<style scoped lang="scss">
.product-cont {
  padding: 10px;
  margin-top: 50px;
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  gap: 70px;
}

.search-box {
  padding-top: 20px;
  text-align: center;
  margin: 0 auto;

  .input-search {
    height: 50px;
    width: 300px;
    border-style: none;
    padding: 10px;
    font-size: 18px;
    letter-spacing: 2px;
    border-radius: 25px;
    background-color: #22a6b3;
    padding-right: 40px;
    color: #fff;
    &::placeholder {
      color: rgba(255, 255, 255, 0.5);
      font-size: 18px;
      letter-spacing: 2px;
      font-weight: 100;
    }
  }
}
.error {
  font-size: 55px;
  text-align: center;
}
</style>
