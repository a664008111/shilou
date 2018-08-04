<template>
  <div class="home" @scroll="shows" ref="home">
      <h4>
      <p><img src="../../static/334.png" alt="" class="animated zoomInLeft" :class="{active:scroll}"></p>
      <li class="animated rotateInDownLeft">Shanxi stone steel <em>industry</em></li>
      <span><i class="el-icon-service animated tada infinite"></i>{{homeData.homecar}}<b>{{homeData.carnum}}</b></span>
      </h4>
      <header ref="header" :class="{active:scroll}">
          <div class="ho_nav">
              <ul v-for="(item,index) in homeData.homeList" :key="index" @click="honav(index)" :class="{active:scroll}">
                    <router-link :to="{path:item.path}"><li :class="{active:index==indexs}">{{item.list}}</li></router-link>
              </ul>
          </div>
      </header>
      <section>
          <router-view></router-view>
      </section>
      <el-popover placement="top-start" title="请拨打:" width="200" trigger="hover" content="13935834529 1363682898" class="pop" :class="{active:scroll}">
           <el-button slot="reference">联系电话</el-button>
      </el-popover>
      <footer>
          <div class="foot-left">
              <dl>
                  <dt>
                       <el-tooltip class="item" effect="dark" content="手机网址" placement="top">
                            <el-button><img src="../../static/qrCode.png" alt=""></el-button>
                        </el-tooltip> 
                    </dt>
                  <dd>
                      <li>{{homeData.homeNav}}<em>{{homeData.homeNavs}}</em></li>
                      <b>{{homeData.erwei}}</b>
                  </dd>
              </dl>
          </div>
          <div class="foot-con">
              <li>
                  <span>{{homeData.qq}}</span>
                  <span>{{homeData.tures}}</span>
              </li>
              <li>
                  <span>{{homeData.homeyx}}</span>
                  <span>{{homeData.homedz}}</span>
              </li>
          </div>
          <div class="foot-right">
              <el-tooltip class="item" effect="dark" content="添加微信" placement="top">
                <el-button><img src="../../static/qrCode.png" alt=""></el-button>
                </el-tooltip> 
          </div>
      </footer>
  </div>
</template>

<script>
import axios from 'axios'
export default {
    data(){
        return{
            homeData:[],
            indexs:0,
            show:false,
            scroll:false,
            co:1
        }
    },
    methods:{
        init(){
            fetch("https://www.easy-mock.com/mock/5b480d3dae45641f63210b3b/example/advance#!method=get")
            .then(res=>{
                res.json().then(body=>{
                    this.homeData=body.data.home
                    console.log("[ 晋石钢业,欢迎您的到来，我们的联系方式：13935834529 13663682898 ]")
                })
            })
        },
        honav(index){
            this.indexs=index;
        },
        shows(){
            if(this.$refs.home.scrollTop>95){
                this.scroll=true
            }else{
                this.scroll=false
            }
        }
    },
    mounted(){
        this.init()
        window.addEventListener('scroll', this.shows)   
    }
}
</script>

<style>
@import "../common/style/home.css";
@import "../common/style/animate.css";
</style>
