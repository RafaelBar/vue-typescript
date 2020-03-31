<template> 
    <div class="panel-holder">
        <div class="panel panel-success">
            <div class="panel-heading"><strong>Name:</strong> {{stock.name}}</div>
            <div class="panel-body">
                <div class="panel-content"><strong>Price:</strong> {{stock.price}} </div>
                <button>Sell Stock</button>
            </div>
        </div>
    </div>
</template>

<script lang="ts">
import { Component, Vue, Prop } from 'vue-property-decorator'

@Component
export default class Stock extends Vue{
    @Prop() readonly stock!: any[];
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
            background: #483c8a;
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
                background: darkslateblue;
                border-radius: 5px;
                padding:10px;
                color:white;
                font-size: 16px;
                cursor: pointer;
            }
        }
    }
}
</style>