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
              id: order.id,
              quantity: order.quantity,
              price: order.price,
              name: order.name
          })
      }
      this.funds -= order.price * order.quantity;
  }

  @Mutation
  public 'SELL_STOCK' (order: any) {
      const record = this.stocks.find(element => element.id == order.id);
      if(record.quantity > order.quantity){
          record.quantity -= order.quantity;
      }
      else{
          this.stocks.splice(this.stocks.indexOf(record), 1);
      }
      this.funds += order.price * order.quantity;
  }
  
  @Action
  public sellStock(order: any): void {
     this.context.commit('SELL_STOCK', order);
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