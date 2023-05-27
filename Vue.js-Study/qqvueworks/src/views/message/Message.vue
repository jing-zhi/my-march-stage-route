<template>
  <div id="message">
    <nav-bar>
      <template #left>
        <my-date></my-date>
        <div class="message-lefttop">阿达</div>
        <p class="zaidiqiu">在地球></p>
      </template>

      <template #center>
        <!-- <p>QQ</p> -->
      </template>

      <template #right>
        <div style="width: 30px; height: 30px">
          <img class="jiahao" src="../../assets/img/navbar/jiahao.png" alt="" />
        </div>
        <img
          class="xiaoshijie"
          src="../../assets/img/navbar/xiaoshijie.png"
          alt=""
        />
      </template>
    </nav-bar>
    <!-- 搜索组件 -->
    <sou-suo></sou-suo>

    <ul class="mu">
      <li
        class="ll"
        v-for="(item, index) in list" :key="index" v-show="item.sb" >
        
       
     
      
        <router-link :to="{ path: 'liao', query: { id: item.manid } }" class="ml">
          <img :src="this.lt[item.manid].headPortrait" /> 
          <p style="height: 50px; line-height: 50px; font-size: 25px">
            {{ lt[item.manid].remarks }}
          </p>
          <p
            style="
              color: #7f7f7f;
              height: 30px;
              line-height: 30px;
              font-size: 16px;
            "
          >
            {{ item.mess }}
          </p>
        </router-link>
      </li>
    </ul>
    
  </div>
</template>

<script>
import NavBar from "../../components/common/navbar/NavBar";
import SouSuo from "../../components/sousuo/SouSuo.vue";
import MyDate from "../../components/common/mydate/MyDate.vue";
export default {
  name: "Message",
  components: {
    NavBar,
    SouSuo,
    MyDate,
  },
  // data () {
  //   return {
  //     list: [{ manid: 1, mess: '' }],
  //     lt: [],
  //     lis: []
  //   }
  // },
  created () {
    // const id = this.$route.query.id
    this.$http.get("http://localhost:8080/localdata.json")
      .then(res => {
        this.lt = res.data.messageya
        
        console.log(this.lt[item.manid].headPortrait)
        
      })
      .catch(err => {
        console.log(err)
      })
  },
  mounted: function () {
    var l = JSON.parse(localStorage.getItem('msgs') || '[]')
    this.list = l
  },
  
}
</script>

<style scoped>
.jiahao {
  margin: 16px -30px 0px 60px;
  width: 30px;
  height: 30px;
}
.xiaoshijie {
  margin: -16px 30px 0px 0px;
  width: 30px;
  height: 30px;
}
.message-lefttop {
  margin: 13px 0px 0px 44px;
  font-size: 14px;
}
.zaidiqiu {
  position: absolute;
  font-size: 12px;
  font-weight: 400;
  margin: 5px -60px 0px 19px;
  width: 50px;
  height: 20px;
  color: white;
  display: inline-block;
}
.ml>img{
  width: 40px;
  height: 40px;
  border-radius: 30px;
}
</style>