<template>
   <div class="scenarios">
       <div class="scen-list">
        <h2>
            <li>
                <span><b>{{scenarios.chan}}</b></span>
                <p>{{scenarios.escape}}</p>
            </li>
        </h2>
        <div class="scen-text">
            <h1><i class="el-icon-caret-right"></i> {{scenarios.chan}}</h1>
            <li>
                <dl v-for="(item,index) in scenarios.staticList" :key="index">
                    <dt :style="{backgroundImage:'url('+item.staticImg+')'}" ></dt>
                    <dd>{{item.staticText}}</dd>
                    <i class="el-icon-view" @click="swipers(index)"></i>
                </dl>
            </li>
        </div>
        <div class="el" v-if="hide">
            <span class="el-icon-error" @click="hides"></span>
            <el-carousel :interval="2000" type="card" height="440px" :initial-index="ID">
                <el-carousel-item v-for="(item,index) in scenarios.staticList" :key="index">
                 <b>{{item.staticText}}</b>
                 <h3><img :src="item.beforeImg" alt=""></h3>
                </el-carousel-item>
             </el-carousel>
        </div>
      </div>
   </div>
</template>

<script>
export default {
    
    data(){
      return{
        scenarios:[],
        hide:false,
        ID:0
      }
    },
    methods:{
      init(){
        fetch("https://www.easy-mock.com/mock/5b480d3dae45641f63210b3b/example/advance#!method=get")
        .then(res=>{
          res.json().then(body=>{
            this.scenarios=body.data.scenarios
          })
        })
      },
      swipers(index){
          this.hide=!this.hide
          this.ID=index
      },
      hides(){
          this.hide=!this.hide
      }
    },
    mounted(){
      this.init()
    }
}
</script>

<style>
@import "../common/style/scenarios.css";
</style>
