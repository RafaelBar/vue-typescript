<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <h1>{{ fullName }}</h1>
    <p class="">{{counter}}</p>
    <button @click="incrementCounter" class="btn btn-default">
      click here!
    </button>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';

@Component
export default class HelloWorld extends Vue {
  @Prop() private msg!: string;
  firstName = "Rafael";
  lastName = "Bar";
  counter = 0;
  

  get fullName(): string{
    return this.firstName + " " + this.lastName;
  }

  incrementCounter(): number{
    return this.counter++;
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
