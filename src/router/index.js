import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import LoginView from '../views/LoginView.vue'
import InfluencerDetail from '../views/InfluencerDetail.vue'
import CountryView from '../views/CountryView.vue'
import CountryForm from '../components/CountryForm.vue'
import PlatformForm from '../components/PlatformForm.vue'
import PostForm from '../components/PostForm.vue'
import InfluencerForm from '../components/InfluencerForm.vue'
import PicForm from '../components/PicForm.vue'
import ScoreForm from '../components/ScoreForm.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/login',
    name: 'login',
    component: LoginView
  },
  {
    path: '/influencer-detail/:id',
    name: 'InfluencerDetail',
    component: InfluencerDetail
  },
  {
    path: '/influencer/form',
    name: 'InfluencerForm',
    component: InfluencerForm,
  },
  {
    path: '/influencer/picform/:id',
    name: 'PicForm',
    component: PicForm,
  },
  {
    path: '/country',
    name: 'country',
    component: CountryView
  },
  {
    path: '/country/form',
    name: 'CountryForm',
    component: CountryForm
  },
  {
    path: '/platform/form/:id',
    name: 'PlatformForm',
    component: PlatformForm
  },
  {
    path: '/platform/score/:id',
    name: 'ScoreForm',
    component: ScoreForm
  },
  {
    path: '/postform/form/:id',
    name: 'PostForm',
    component: PostForm
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  base: 'admin-rare-user',
  routes
})

router.beforeEach((to, from, next) => {
  const auth = JSON.parse(localStorage.getItem('isAutenticated'))
  // const token = localStorage.getItem('token')
  // console.log(token)
  if (to.name != 'login' && !auth) next({ name: "login" })
  if (to.name == 'login' && auth) next({ name: "home" })
  else next()
})

export default router
