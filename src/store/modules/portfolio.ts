import { VuexModule, Module, Mutation, Action } from 'vuex-module-decorators'

@Module
class Portfolio extends VuexModule {
  public funds: any = 10000
  public stocks: any[] = []

  @Mutation
  public 'BUY_STOCK' (order: any) {
    debugger
      const record = this.stocks.find(element => element.id == order.stockId);
      if(record){
        order.quantity = parseInt(order.quantity);
          record.quantity = parseInt(record.quantity);
          record.quantity += order.quantity;
      }
      else{
          this.stocks.push({
              id: order.stockId,
              quantity: order.quantity,
              price: order.stockPrice,
              name: order.name
          })
      }
      this.funds -= order.stockPrice * order.quantity;
  }
  
  //Getters
  get stockPortfolio(): any {
          return this.stocks.map(stock => {
              const record = this.stocks.find(element => element.id == stock.id);
              return{
                  id: record.id,
                  quantity: record.quantity,
                  name: record.name,
                  price: record.price
              }
          });
  }
  get _funds(): any {
    return this.funds
  }
}
  
export default Portfolio