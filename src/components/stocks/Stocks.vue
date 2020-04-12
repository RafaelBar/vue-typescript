<template>
    <div class="panel-container">
        <app-stock :from="'stocks'" :stock="stock" v-for="(stock, index) in stocks" :key="index">{{stock.name}}</app-stock> 
        <div v-if="+stocks.length < 1" class="">No Stocks to Buy</div>
    </div>
</template>

<script lang="ts">
  import { Component, Vue } from 'vue-property-decorator'
  import Stock from '../StockTemplate.vue'

  @Component({
    components: {
      'app-stock': Stock
    }
  })

  export default class Stocks extends Vue {
    get stocks(){
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