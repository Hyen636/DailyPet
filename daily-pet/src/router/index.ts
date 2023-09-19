import { createRouter, createWebHistory } from 'vue-router'
import HomePage from '../views/HomePage.vue'
import LoginPage from '../views/LoginPage.vue'
import JoinPage from '../views/JoinPage.vue'
import FindUserPage from '../views/FindUserPage.vue'
import EditUserPage from '../views/EditUserPage.vue'
import AddPetPage from '../views/AddPetPage.vue'
import EditPetPage from '../views/EditPetPage.vue'
import TodoPage from '../views/TodoPage.vue'
import DiaryPage from '../views/DiaryPage.vue'
import MyPage from '../views/MyPage.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomePage
    },
    {
      path: '/login',
      name: 'login',
      component: LoginPage
    },
    {
      path: '/join',
      name: 'join',
      component: JoinPage
    },
    {
      path: '/find-user',
      name: 'findUser',
      component: FindUserPage
    },
    {
      path: '/edit-user',
      name: 'editUser',
      component: EditUserPage
    },
    {
      path: '/add-pet',
      name: 'addPet',
      component: AddPetPage
    },
    {
      path: '/edit-pet',
      name: 'editPet',
      component: EditPetPage
    },
    {
      path: '/todo',
      name: 'todo',
      component: TodoPage
    },
    {
      path: '/diary',
      name: 'diary',
      component: DiaryPage
    },
    {
      path: '/my-page',
      name: 'myPage',
      component: MyPage
    }
  ]
})

export default router
