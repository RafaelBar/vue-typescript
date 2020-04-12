export default class Stock{
    public name!: string;
    public id!: number;
    public price!: number;
    public quantity!: number;

    setOrder(id: number, price: number, quantity: number, name: string){
        this.id = id;
        this.price = price;
        this.name = name;
        this.quantity = quantity;   
    }

    getOrder(){
        return this
    }
}