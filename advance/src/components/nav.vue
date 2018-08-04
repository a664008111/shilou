<template>
  <div class="nav">
     <div class="nav-list">
        <div class="nav-left">
          <b>{{nav.pin}}</b>
          <span>{{nav.gui}}</span>
          <p><img :src="nav.navImg" alt=""></p>
          <li>{{nav.cai}}</li>
        </div>
        <div class="nav-right">
          <el-carousel indicator-position="outside">
            <el-carousel-item v-for="(item,index) in nav.elImg" :key="index">
              <h3><img :src="item.imgs" alt=""></h3>
            </el-carousel-item>
          </el-carousel>
        </div>
     </div>
     <div class="nav-jin">
       <h1>{{nav.yu}}</h1>
       <h3><img :src="nav.jinImg" alt=""></h3>
       <div class="nav-text">
         <dl v-for="(item,index) in nav.huang" :key="index" :class="{active:index==indexs}">
           <dt ><img :src="item.huanImg" alt="" @click="getImg(index)" :class="{active:index==indexs}"></dt>
           <dd>{{item.dd}}</dd>
         </dl>
       </div>
     </div>
     <div class="nav-pvc">
         <h2><b>京 <span>华</span></b>代理产品</h2>
         <p><span>{{nav.jinhua}}</span></p>
     </div>
     <div class="nav-hide" v-if="setImg">
       <span class="el-icon-error" @click="navshow"></span>
            <li><img :src="navImg" alt=""></li>
            <b class="el-icon-arrow-left" @click="Zuo(indexs)"></b>
            <b class="el-icon-arrow-right" @click="You(indexs)"></b>
     </div>
  </div>
</template>

<script>
export default {
    data(){
      return{
        nav:[],
        setImg:false,
        navImg:'',
        indexs:0
      }
    },
    methods:{
      init(){
        this.indexs=-1;
        fetch("https://www.easy-mock.com/mock/5b480d3dae45641f63210b3b/example/advance#!method=get")
        .then(res=>{
          res.json().then(body=>{
            this.nav=body.data.nav
          })
        })
      },
      getImg(index){
          this.indexs=index
          this.setImg=true
          this.navImg=this.nav.huang[index].showImg
      },
      navshow(){
        this.setImg=false
        this.indexs=-1
      },
      Zuo(index){
          this.indexs=index
        if(this.indexs>0){      
        this.indexs--
        this.getImg(this.indexs)
        }else{
          this.$message({
              type: 'warning',
              message: `亲，没有产品视图了哦，请去产品中心查看全部`
            });
        }
      },
      You(index){
          this.indexs=index
        if(this.indexs<this.nav.huang.length-1){  
          this.indexs++
          this.getImg(this.indexs)
        }else{
          this.$message({
              type: 'warning',
              message: `亲，没有产品视图了哦，请去产品中心查看全部`
            });
        }
      }
    },
    mounted(){
      this.init()
    }
}
</script>

<style>
  @import "../common/style/nav.css";
</style>
