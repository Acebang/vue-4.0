<template>
  <div>
    <div>{{tsVal1 + tsVal2}}</div>
    <div>{{jsVal1 + jsVal2}}</div>
  </div>
</template>

<script lang='ts'>
// @ is an alias to /src
import HelloWorld from "@/components/HelloWorld.vue";
import { Component, Vue, Provide } from 'vue-property-decorator'

@Component({
  name:"home",
  components:{
    HelloWorld
  }
})
export default class home extends Vue{
  tsVal1: string = "11";
  tsVal2: string = "22";
  data(){
    return{
      jsVal1:"1",
      jsVal2:"2"
    }
  }
};
</script>
