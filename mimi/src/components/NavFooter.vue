<template>
  <div class="footer">
    <div class="footer-logo">
      <img src="/imgs/logo-footer.png" alt="">
      <p>小米商城</p>
    </div>
    <div class="footer-link">
      <a href="javascript:;">我的主页</a><span>|</span>
      <a href="javascript:;">我的战绩</a><span>|</span>
      <a href="javascript:;">我的问题</a><span>|</span>
      <a href="javascript:;">我的小店</a>
    </div>
    <div class="copyright">Copyright @2019 <span class="lomin">mi.future.com</span> All Rights Serve</div>
  </div>
</template>

<script>
export default {
  name: 'nav-footer'
}
</script>

<style lang="scss" scoped>
  .footer {
    height: 234px;
    border-top: 4px solid #FF6600;
    background-color: #333;
    color: #999;
    font-size: 16px;
    text-align: center;
    .footer-logo {
      margin-top: 46px;
      margin-bottom: 31px;
      img {
        width: 53px;
        height: 36px;
        margin-bottom: 13px;
      }
    }
    .footer-link {
      a {
        color: #999;
        display: inline-block;
      }
      span {
        margin: 0 10px;
      }
      margin-bottom: 13px;
    }
    .copyright {
      .lomin {
        color: #ff6600;
      }
    }
  }
</style>
