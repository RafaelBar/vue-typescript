import { VuexModule, Module, Mutation, Action } from 'vuex-module-decorators'
import stocksData from '../../data/stocks'

@Module
class Stocks extends VuexModule {
  public stocks: any[] = []


  @Mutation
  public 'SET_STOCKS'(stocks: any[]): void {
    this.stocks = stocks;
  }

  @Action
  public initStocks(): void {
     this.context.commit('SET_STOCKS', stocksData);
  }
  @Action
  public buyStock(order: any): void {
     this.context.commit('BUY_STOCK', order);
  }

  get dataStocks(): any {
    return this.stocks
  }
}

export default Stocks