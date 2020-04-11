<template>
    <div class="panel-container">
        <app-stock :stock="stock" v-for="(stock, index) in stocks" :key="index">{{stock.name}}</app-stock> 
        <div v-if="+stocks.length < 1" class="">No Stocks to Sell</div>
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
  
  export default class Portfolio extends Vue {
        get stocks(){
          return this.$store.getters.stockPortfolio;
        }
        // _stocks(){
        //   console.log(this.$store.getters.stockPortfolio);
        //   return this.$store.getters.stockPortfolio;
        // }
  }
</script>

<style lang="scss" scoped>
.panel-container{
    display: flex;
    flex-wrap: wrap;
}
</style>