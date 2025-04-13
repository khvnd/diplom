import { createApp } from 'vue';
import App from './App.vue';
import router from './router';
import VueGoogleMaps from '@fawmi/vue-google-maps';

const app = createApp(App);

app.use(router);
app.use(VueGoogleMaps, {
  load: {
    key: 'AIzaSyBWflUp8M0VygVmiwd7mqXqOljDLctFU0Y',
  },
});

app.mount('#app');
