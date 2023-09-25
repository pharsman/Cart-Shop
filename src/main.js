import { createApp } from "vue";
import { createPinia } from "pinia";
import App from "@/App.vue";
import router from "./router.js";
import store from "@/store/index.js";
import "./styles/main.scss";

const app = createApp(App);

app.use(router);
app.use(createPinia());

app.use(store);

app.mount("#app");
