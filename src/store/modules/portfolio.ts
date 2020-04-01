import { VuexModule, Module, Mutation, Action } from 'vuex-module-decorators'

@Module
class Portfolio extends VuexModule {
  public funds: any = 10000
  public stocks: any[] = []

  @Mutation
  public 'BUY_STOCK' (order: any) {
      const record = this.stocks.find(element => element.id == order.stockId);
      if(record){
        order.quantity = parseInt(order.quantity);
          record.quantity = parseInt(record.quantity);
          record.quantity += order.quantity;
      }
      else{
          this.stocks.push({
              id: order.stockId,
              quantity: order.quantity
          })
      }
      this.funds -= order.stockPrice * order.quantity;
      debugger
  }
  
  
}
export default Portfolio