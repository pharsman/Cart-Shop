<template>
    <header>
        <h1>
            <router-link to="/">Simple Shop System</router-link>
        </h1>
        <p :class="{ 'active': active }" class="cart"><span> {{ getProductLength }}</span>
            <router-link to="/cart">Cart</router-link>
        </p>
    </header>
</template>

<script setup>
import { useStore } from 'vuex';
import { ref, watch, computed } from 'vue';

const store = useStore()

const active = ref(false)

const getProductLength = computed(() => {
    return store.getters.getProducts.length
})

watch(getProductLength, () => {
    active.value = true
    setTimeout(() => {
        active.value = false
    }, 1000);
})

</script>

<style lang="scss" scoped>
* {
    text-decoration: none;
}

header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    background-color: pink;
    padding: 10px;

    h1 {
        a {
            font-size: 55px;
            -webkit-text-stroke: 2px black;
            color: white;
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