<template>
    <div>
      <h1>token:</h1>
      <h1>{{this.$store.getters.getLoginToken}}</h1>
      <el-button @click='click' type="primary">测试</el-button>
    </div>
</template>

<script>
export default {
  name: 'Home',
  methods: {
    async click () {
      const { res: data } = await this.$http.get('test')
      console.log(data)
    }
  }
}
</script>

<style lang="less" scoped>

</style>
