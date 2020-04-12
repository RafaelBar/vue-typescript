<template> 
    <div class="panel-holder">
        <div class="panel panel-success" :class="{'panel-stocks':from == 'stocks','panel-portfolio':from == 'portfolio'}">
            <div class="panel-heading"><strong>Name:</strong> {{stock.name}}</div>
            <div class="panel-body">
                <div class="panel-content"><strong>Price:</strong> {{stock.price}} </div>

                <!-- for portfolio only -->
                <div v-if="from == 'portfolio'" class="panel-content"><strong>Quantity:</strong> {{stock.quantity}} </div>
                <!-- for portfolio only -->

                <div class=""><input v-model="quantity" type="number" placeholder="Quantity" class="form-control"></div>

                <!-- for stocks only -->
                <button 
                v-if="from == 'stocks'" 
                :disabled="+_funds < (+quantity * +stock.price)" 
                @click="actionStock('buyStock')">Buy Stock</button>
                <!-- for stocks only -->

                <!-- for portfolio only -->
                <button 
                v-if="from == 'portfolio'"
                :disabled="(+stock.quantity < +quantity) || !(+quantity > 0)"
                @click="actionStock('sellStock')">Sell Stock</button>
                <!-- for portfolio only -->

            </div>
        </div>
    </div>
</template>

<script lang="ts">
import { Component, Vue, Prop } from 'vue-property-decorator'
import StockPattern from '../modules/stock'

@Component
export default class StockTemplate extends Vue{
    @Prop() readonly stock!: StockPattern;
    @Prop() readonly from!: string;
    order: StockPattern  = new StockPattern();
    quantity = 0;

    public actionStock(actionTYpe: string){
        this.order.setOrder(this.stock.id, this.stock.price, this.quantity, this.stock.name);
        this.$store.dispatch(actionTYpe, this.order.getOrder());
    }

    get _funds(){
        return this.$store.getters._funds;
    }
}
</script>

<style lang="scss" scoped>
.panel-holder{
    width: 33.33333333%;
    .panel{
        border: 1px solid gray;
        border-radius: 1em;
        margin: 15px;
        overflow: hidden;
        .panel-heading{
            border-bottom: 1px solid gray;
            padding: 10px 10px;
            color:white;
        }
        .panel-body{
            padding:10px 10px;
            .panel-content{
                display: inherit;
            }
            button{
                margin-top:10px;
                border:0;
                border-radius: 5px;
                padding:10px;
                color:white;
                font-size: 16px;
                cursor: pointer;
                &:disabled{
                    opacity: 0.3;
                    cursor: not-allowed;
                }
            }
        }
        &.panel-stocks{
            .panel-heading{
                background: #c70053;
            }
            .panel-body{
                button{
                    background: #c70053; 
                }
            }
        }
        &.panel-portfolio{
            .panel-heading{
                background: #483c8a;
            }
            .panel-body{
                button{
                    background: #483c8a; 
                }
            }
        }
    }
}
</style>