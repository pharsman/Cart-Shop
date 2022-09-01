<template>
    <div class="img">
        <img :src="currentData[0].url">
    </div>
    <h2> {{ currentData[0].title }}</h2>
    <p>{{ currentData[0].desc }}</p>
    <p><strong>{{ balance }} GEL</strong></p>
    <div class="button">
        <button @click="minus" :disabled="disableBut">-</button>
        <span>{{ counter }}</span>
        <button @click="plus" :disabled="disableBut">+</button>
    </div>
    <button class="add" :disabled="disableBut" @click="add">Add to Cart</button>
</template>

<script setup>
import prData from '@/product.json'
import { useStore } from 'vuex';
import { useRoute } from 'vue-router';
import { ref, onMounted } from 'vue';

const route = useRoute()
const store = useStore()

const currentData = ref(prData)
const counter = ref(1)
const balance = ref(0)

const plus = () => {
    counter.value++
    increment()
}


const minus = () => {
    if (counter.value > 0) {
        counter.value--
        decrement()
    }
}


const increment = () => {
    balance.value += currentData.value[0].price
}
const decrement = () => {
    balance.value -= currentData.value[0].price
}

const addItem = ref(null)

const add = () => {
    addItem.value = {
        id: currentData.value[0].id,
        title: currentData.value[0].title,
        desc: currentData.value[0].desc,
        url: currentData.value[0].url,
        price: balance.value,
        amount: counter.value
    }
    store.dispatch('setProduct', addItem.value)
    localStorage.setItem('cartItem',JSON.stringify(store.state.cartProducts))
    disableButton()
}

const disableBut = ref(false)

const disableButton = () => {
    store.getters.getProducts.forEach((el) => {
        if (el.id === currentData.value[0].id) {
            disableBut.value = true
        }
    })
}

onMounted(() => {
    currentData.value = prData.filter(el => el.id === parseInt(route.query.plan))
    balance.value = currentData.value[0].price
    disableButton()
})

</script>

<style scoped lang="scss">
.img {
    width: 700px;
    height: 700px;
    overflow: hidden;
    margin-top: 1rem;

    img {
        width: 100%;
        border-radius: 10px;
    }
}

h2 {
    margin-left: 40%;
    margin-top: -650px;
    font-size: 90px;
}

p {
    margin-left: 40%;
}

.button {
    margin-left: 40%;
    width: 200px;

    button {
        margin-right: 10px;
        margin-left: 8px;
        font-size: 24px;
        cursor: pointer;
    }

    p {
        margin-left: 25px;
        margin-top: -25px;
    }
}

.add {
    background-color: rgb(0, 255, 0);
    padding: 15px;
    border-radius: 10px;
    margin-left: 40%;
    margin-top: 20px;
    font-weight: bold;
    cursor: pointer;
}
</style>