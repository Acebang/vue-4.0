<template>
  <div>
    <div v-on:click="handleChange('Table')">{{tsVal1 + tsVal2}}</div>
    <div>{{jsVal1 + jsVal2}}</div>
    <router-view></router-view>
  </div>
</template>

<script lang="ts">
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
  tsVal1: string = "11 at home";
  tsVal2: string = "22 at home";
  data(){
    return{
      jsVal1:"1 at home",
      jsVal2:"2 at home"
    }
  }
  handleChange(path:any){
    this.$router.push({path:path})
  }
};
</script>
