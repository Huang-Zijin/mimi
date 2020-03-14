<template>
  <div>
    <div class="ali-pay">
      <loading v-if="loading"></loading>
      <div class="form" v-html="content"></div>
    </div>
  </div>
</template>

<script>
import Loading from './../components/Loading'
export default {
  name: 'alipay',
  data () {
    return {
      orderId: this.$route.query.orderId,
      content: '',
      loading: true
    }
  },
  components: {
    Loading
  },
  mounted () {
    this.paySubmit()
    console.log(this.orderId)
  },
  methods: {
    paySubmit () {
      this.axios.post('/pay', {
        orderId: this.orderId,
        orderName: '仿小米商城',
        amount: 0.01,
        payType: 1
      }).then((res) => {
        this.content = res.content
        setTimeout(() => {
          document.forms[0].submit()
        }, 600)
      })
    }
  }
}
</script>
