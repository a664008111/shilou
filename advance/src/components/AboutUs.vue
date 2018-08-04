<template>
  <div class="AboutUs">
      <div class="abou">
        <h2>
            <li>
                <span><b>{{aboutus.mi}}</b></span>
                <b>{{aboutus.chuang}}</b>
            </li>
        </h2>
        <div class="absou-list">
            <h1><i class="el-icon-caret-right"></i> {{aboutus.AboutUsli}}</h1>
            <p><span></span> <b>{{aboutus.textP}}</b></p>
        </div>
      </div>
  </div>
</template>

<script>
export default {
    data(){
      return{
        aboutus:[]
      }
    },
    methods:{
      init(){
        fetch("https://www.easy-mock.com/mock/5b480d3dae45641f63210b3b/example/advance#!method=get")
        .then(res=>{
          res.json().then(body=>{
            this.aboutus=body.data.AboutUs
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
@import "../common/style/AboutUs.css";
</style>
