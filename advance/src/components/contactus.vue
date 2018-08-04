<template>
    <div class="contactus">
        <div class="nav-list">
            <div class="nav-left">
                <b>{{con.lianx}}</b>
                <span>{{con.gou}}</span>
                <p><img :src="con.conImg" alt=""></p>
                <li>{{con.Ti}}</li>
            </div>
            <div class="nav-right">
                <img :src="con.RightImg" alt="">
            </div>
        </div>
        <div class="con-text">
            <div class="text-top">
                <h3>{{con.lianx}}</h3>
            <p>{{con.textP}}</p>
            </div>
            <div class="text-bot">
                <li v-for="(item,index) in con.conList" :key="index">
                    <i :class="item.icon"></i>
                    <span>
                        <b>{{item.concar}}</b>
                        <b>{{item.conzuo}}</b>
                    </span>
                </li>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    data(){
      return{
        con:[]
      }
    },
    methods:{
      init(){
        fetch("https://www.easy-mock.com/mock/5b480d3dae45641f63210b3b/example/advance#!method=get")
        .then(res=>{
          res.json().then(body=>{
            this.con=body.data.contactus
          })
        })
      }
    },
    mounted(){
      this.init()
    }
}
</script>

<style>
@import "../common/style/contactus.css";
</style>
