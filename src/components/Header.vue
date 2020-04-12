<template>
<div class="">
    <div class="nav">
        <router-link to="/">Home</router-link> |
        <router-link to="/portfolio">Portfolio</router-link> |
        <router-link to="/stocks">Stocks</router-link>  |
        <span><strong>Funds:</strong> {{fundss}}</span> 
        <span class="end-day"><a @click="endDay" class="nav-link" href="#endDay"><strong class="">End Day</strong></a></span>   
    </div> 
</div>  
</template>


<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';

@Component
export default class Header extends Vue {
    get fundss() {
        return this.$store.getters._funds;
    }

    public endDay(){
        this.$store.dispatch('randomizeStocks');
    }
}
</script>

<style lang="scss" scoped>
.end-day{
    padding-left: 10px;
    float: right;
    a{
        color:black;
        text-decoration: none;
    }
}
</style>