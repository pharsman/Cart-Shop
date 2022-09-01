<template>
    <CartItem v-for="(item, index) in getData" :key="index" :data="item" @deleteItem="deleteItem(item)" />
    <p v-if="getData.length === 0">Cart is Empty</p>
    <div>
        <h1>Cart</h1>
        <h2>Full Balance</h2>
        <h3>{{ getFullBalance }} Gel</h3>
    </div>
</template>

<script setup>
import CartItem from '@/components/CartItem.vue';
import { useStore } from 'vuex';
import { computed } from 'vue';

const store = useStore()

const getData = computed(() => {
    return store.getters.getProducts
})

const deleteItem = (item) => {
    store.dispatch('removeProduct', item.id)
    localStorage.setItem('cartItem',JSON.stringify(store.state.cartProducts))
}

const getFullBalance = computed(() => {
    let balance = 0
    getData.value.forEach(item => {
        balance += item.price
    })
    return balance
})

</script>

<style scoped lang="scss">
p {
    font-size: 55px;
    font-weight: bold;
    margin-top: 50px;
    color: red;
}

div {
    height: 100px;
    width: 50px;

    h1 {
        top: 200px;
        right: 730px;
        font-size: 70px;
        position: fixed;
    }

    h2 {
        top: 300px;
        right: 600px;
        font-size: 50px;
        position: fixed;
    }

    h3 {
        top: 350px;
        right: 708px;
        font-size: 50px;
        position: fixed;
    }
}
</style>
