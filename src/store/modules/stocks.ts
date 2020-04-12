import { VuexModule, Module, Mutation, Action } from 'vuex-module-decorators'
import stocksData from '../../data/stocks'

@Module
class Stocks extends VuexModule {
  public stocks: any[] = []

  @Mutation
  public 'SET_STOCKS'(stocks: any[]): void {
    this.stocks = stocks;
  }
  @Mutation
  public 'RND_STOCKS'(): void {
    this.stocks.forEach(stock => {
        stock.price = Math.round(+stock.price * +(1 + Math.random() - 0.45));
    });
  }

  @Action
  public initStocks(): void {
     this.context.commit('SET_STOCKS', stocksData);
  }
  @Action
  public buyStock(order: any): void {
     this.context.commit('BUY_STOCK', order);
  }
  @Action
  public randomizeStocks(): void {
     this.context.commit('RND_STOCKS');
  }

  get dataStocks(): any {
    return this.stocks
  }
}

export default Stocks