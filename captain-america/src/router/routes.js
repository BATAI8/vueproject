// 也可以
// import Home from '@/views/Home'
// 组件按需加载
const Home = () => import('@/views/Home')
const Category = () => import('@/views/category')
const Cart = () => import('@/views/cart')
const Mine = () => import('@/views/mine')

const routes = [
  {
    path:'/',
    redirect:'/home'
  },
  {
    path:'/home',
    name:'home',
    icon:'home',
    component:Home
  },
  {
    path:'/category',
    name:'category',
    icon:'category',
    component:Category
  },
  {
    path:'/cart',
    name:'cart',
    icon:'cart',
    component:Cart
  },
  {
    path:'/mine',
    name:'mine',
    icon:'mine',
    component:Mine
  },


]
export default routes
