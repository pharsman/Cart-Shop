<template>
    <div class="home">
        <div class="search-cont">
            <input class="search" type="search" placeholder="search..." v-model="searchWord">
        </div>
        <div class="product-cont">
            <Products v-for="(item, index) in getData" :key="index" :id="item.id" :data="item" />
        </div>
        <p v-if="errorMsg" class="error">item was not found :(</p>
    </div>
</template>

<script setup>
import Products from '@/components/Products.vue';
import prData from '@/product.json'

import { ref, computed, watch } from 'vue';

const productsData = ref(prData)

const getData = computed(() => {
    return productsData.value.filter(el => el.title.toLocaleLowerCase().includes(searchWord.value.toLocaleLowerCase()))
})

const searchWord = ref('')

const errorMsg = ref(false)

watch(getData, (val) => {
    if(val.length === 0) {
        errorMsg.value = true
    }else{
        errorMsg.value = false
    }
})

</script>

<style scoped lang="scss">
.product-cont {
    display: flex;
    justify-content: space-around;
    align-items: center;
    flex-wrap: wrap;
}

.search-cont {
    padding-top: 20px;
    text-align: center;
    margin: 0 auto;

    .search {
        outline: none;
    }
}
.error{
        font-size: 55px;
        text-align: center;
    }
</style>

