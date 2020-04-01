<template>
    <div class="panel-container">
        <app-stock :stock="stock" v-for="(stock, index) in stocks()" :key="index">{{stock.name}}</app-stock> 
    </div>
</template>

<script lang="ts">
  import { Component, Vue } from 'vue-property-decorator'
  import Stock from './Stock.vue'

  @Component({
    components: {
      'app-stock': Stock
    }
  })

  export default class Stocks extends Vue {
        stocks = () => {
          return this.$store.getters.dataStocks;
        }
  }
</script>

<style lang="scss" scoped>
.panel-container{
    display: flex;
    flex-wrap: wrap;
}
</style>