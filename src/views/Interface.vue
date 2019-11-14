<template>
  <div>
    <div @click="interfacetest()">77777777</div>
    <div @click="GetDataList()">88888888</div>
  </div>
</template>
<style></style>
<script>
import axios from 'axios'
export default {
    data(){
        return{

        }
    },
    methods:{
        interfacetest:function(){
            axios.post('/Login/Login', {
                'username': 'GRGBaseAdmin',
                'password': '321654a',
                'websiteid': '5bbade37-3aac-4807-9c77-9c471de1270a'
            })
            .then(function (response) {
                console.log(response);
            })
            .catch(function (error) {
                console.log(error);
            });
        },
        GetDataList:function(){
            axios.post('/InvestmentProject/GetDataList', {
                "page_number": 1,
                "page_size": 10,
                "contains_draft": true
            })
            .then(function (response) {
                console.log(response);
            })
            .catch(function (error) {
                console.log(error);
            });
        }
    }
}
</script>