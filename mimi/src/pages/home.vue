<template>
  <div>
    <nav-header></nav-header>
    <router-view></router-view>
    <nav-footer></nav-footer>  <!--,home是主页面，其他组件都嵌套在home里面，结构组件复用-->
  </div>
</template>

<script>
import NavHeader from '../components/NavHeader'
import NavFooter from '../components/NavFooter'
export default {
  name: 'home',
  components: {
    NavHeader,
    NavFooter
  }
}
</script>
