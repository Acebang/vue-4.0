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
            var _this = this;
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
            var _this = this;
            axios.post('/InvestmentProject/GetDataList', _this.formData({
                'page_number': 1,
                'page_size': 10,
                'sort_key': '', 
                'sort_order': '', 
                'search_value': '', 
                'project_name': '', 
                'investment_way': '', 
                'project_status': '', 
                'leaderid': '', 
                'contains_draft': true
            }))
            .then(function (response) {
                console.log(response);
            })
            .catch(function (error) {
                console.log(error);
            });
        },
        formData:function(params){
            var form = new FormData()
            for (let i in params) {
                form.append(i, params[i])
            }
            return form
        }
    }
}
</script>