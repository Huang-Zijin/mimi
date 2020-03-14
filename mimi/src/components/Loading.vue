<template>
  <div class="loading">
    <img src="/imgs/loading-svg/loading-bars.svg" alt="">
  </div>
</template>

<script>
export default {
  name: 'Loading'
}
</script>

<style lang="scss">
  .loading {
    height: 80px;
    line-height: 80px;
    text-align: center;
    margin-top: 30px;
    img {
      height: 100%;
      color: #000;
    }
  }
</style>
