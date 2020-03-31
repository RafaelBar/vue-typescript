<template>
<div class="">
    <div class="nav">
        <router-link to="/">Home</router-link> |
        <router-link to="/portfolio">Portfolio</router-link> |
        <router-link to="/stocks">Stocks</router-link>    
    </div> 
</div>  
</template>


<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';

@Component
export default class Header extends Vue {

}
</script>