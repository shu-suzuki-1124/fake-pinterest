import { createRouter, createWebHistory } from "vue-router";
import combineRoutes from '@/router/routes/combine'

const routes = [
  {
    path: '/',
    redirect: '/'
  }
].concat(combineRoutes)
const router = createRouter({ history: createWebHistory(), routes });
// ....
// BeforeEach code here
//.....
export default router
