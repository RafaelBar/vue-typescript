import { VuexModule, Module, Mutation, Action } from 'vuex-module-decorators'

@Module
class Portfolio extends VuexModule {
<<<<<<< Updated upstream
  public funds: any = 10000
  public stocks: any[] = []

  @Mutation
  public 'BUY_STOCK' (order: any) {
    debugger
      const record = this.stocks.find(element => element.id == order.stockId);
=======
  public funds: number = 1000
  public stocks: any[] = []
  

  @Mutation
  public 'BUY_STOCK' (order: StockObj) {
      const record = this.stocks.find(element => element.id == order.id);
>>>>>>> Stashed changes
      if(record){
        order.quantity = parseInt(order.quantity);
          record.quantity = parseInt(record.quantity);
          record.quantity += order.quantity;
      }
      else{
          this.stocks.push({
<<<<<<< Updated upstream
              id: order.stockId,
=======
              id: order.id,
>>>>>>> Stashed changes
              quantity: order.quantity,
              price: order.stockPrice,
              name: order.name
          })
      }
<<<<<<< Updated upstream
      this.funds -= order.stockPrice * order.quantity;
  }
  
  //Getters
  get stockPortfolio(): any {
=======
      this.funds -= order.price * order.quantity;
  }
  
  //Getters
  get stockPortfolio(): StockObj[] {
>>>>>>> Stashed changes
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
<<<<<<< Updated upstream
  get _funds(): any {
=======
  get _funds(): number {
>>>>>>> Stashed changes
    return this.funds
  }
}
  
export default Portfolio