<template>
  <div class="cont">
    <div class="cart-items">
      <CartItem
        v-for="(item, index) in getData"
        :key="index"
        :data="item"
        @deleteItem="deleteItem(item)"
      />
    </div>
    <p v-if="getData.length === 0">Cart is Empty</p>
    <div class="balance-info" v-else>
      <h2 class="cart">Cart</h2>
      <h2 class="full-balance">Full Balance</h2>
      <h3 class="balance">{{ getFullBalance }} Gel</h3>
    </div>
  </div>
</template>

<script setup>
import CartItem from "@/components/CartItem.vue";
import { ProductsStore } from "@/store/ProductsStore";
import { computed } from "vue";

const store = ProductsStore();

const getData = computed(() => {
  return store.cartProducts;
});

const deleteItem = (item) => {
  store.removeProduct(item.id);
  localStorage.setItem("cartItem", JSON.stringify(store.cartProducts));
};

const getFullBalance = computed(() => {
  let balance = 0;
  getData.value.forEach((item) => {
    balance += +item.price;
  });
  return balance.toFixed(3).slice(0, -1).replace(/0$/, "");
});
</script>

<style scoped lang="scss">
.cont {
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 60%;
  .cart-items {
    display: flex;
    flex-direction: column;
  }
  .balance-info {
    position: fixed;
    top: 50%;
    left: 50%;
    transform: translate(0, -50%);

    .cart {
      font-size: 70px;
      /* position: fixed; */
    }
    .full-balance {
      font-size: 50px;
      /* position: fixed; */
    }
    .balance {
      font-size: 50px;
      /* position: fixed; */
    }
  }
  p {
    font-size: 55px;
    font-weight: bold;
    margin-top: 50px;
    color: red;
  }
}
</style>
