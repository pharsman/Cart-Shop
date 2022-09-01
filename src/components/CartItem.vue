<template>
    <section>
        <div class="list">
            <h3>{{ data.title }}</h3>
            <p>{{ data.desc }}</p>
            <p class="count">{{ data.amount }} X</p>
            <p><strong>{{ data.price }}</strong></p>
            <div class="watch">
                <img @click="openInner" :src="data.url">
            </div>
            <button @click="deleteItem">Delete</button>
        </div>
    </section>
</template>

<script setup>
import { useRouter } from 'vue-router'

const props = defineProps({
    data: {
        type: Object,
        required: true
    }
})
const emit = defineEmits(['deleteItem'])

const deleteItem = () => {
    emit('deleteItem', props.data.id)
}

const router = useRouter()

const openInner = () => {
    router.push({ path: 'inner', query: { plan: props.data.id } })
}

</script>

<style scoped lang="scss">
section {
    margin: 3rem;

    .list {
        border: 2px solid black;
        border-radius: 10px;
        width: 500px;
        margin-top: 20px;

        .count {
            color: green
        }

        h3,
        p {
            margin-left: 50%;

        }

        .watch {
            width: 200px;
            height: 170px;
            margin-top: -100px;
            margin-left: 10px;

            img {
                width: 100%;
                cursor: pointer;
            }
        }

        button {
            background-color: red;
            color: white;
            padding: 5px 15px;
            border-radius: 2px;
            margin-left: 50%;
            margin-bottom: 10px;
            cursor: pointer;
            transition: 0.6s;

            &:hover {
                transform: scale(1.12);
            }
        }
    }
}
</style>