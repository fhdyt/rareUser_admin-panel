import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import Toast from "vue-toastification";
import "vue-toastification/dist/index.css"
import './assets/tailwind.css'
import Loading from 'vue3-loading-screen'

const app = createApp(App)
const options = {
  position: "bottom-right",
  transition: "Vue-Toastification__fade",
}
app.use(Toast, options);

app.use(Loading, {
  bg: '#000000ad',
  slot: `
    <div class="px-5 py-3">
      <h3 class="text-3xl text-white"><i class="fas fa-spinner fa-spin"></i> Loading...</h3>
    </div>`
})

/* import the fontawesome core */
import { library } from '@fortawesome/fontawesome-svg-core'

/* import font awesome icon component */
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

/* import specific icons */
import { faUserSecret, faPlus, faTrashCan, faPencil } from '@fortawesome/free-solid-svg-icons'

/* add icons to the library */
library.add(faUserSecret, faPlus, faTrashCan, faPencil)


app.use(router)
app.component('font-awesome-icon', FontAwesomeIcon)
app.mount('#app')
