<template>
  <div id="contacts">
    <div>
      <!-- 顶部栏 -->
      <nav-bar>
        <template #left>
          <my-date></my-date>
        </template>

        <template #center>
          <p>联系人</p>
        </template>

        <template #right>
          <div></div>
        </template>
      </nav-bar>
      <!-- 搜索组件 -->
      <sou-suo></sou-suo>
      <!-- 可能认识的人 -->
      <div class="pymk">
        <p>可能认识的人 ></p>
        <div class="cur-pin" v-for="(item, index) in list" :key="index">
          <div class="pyuan">
            <img :src="item.src1" alt="" />
          </div>
          <div class="pleft-text">
            <p style="color: #222; font-size: 17px">{{ item.name }}</p>
            <p>{{ item.num }}个共同好友</p>
          </div>
          <div class="pright-text">
            <div class="prt"><p style="margin: 12% 2% 9% 30%">添加</p></div>
            <img class="chahao" :src="item.src2" alt="" />
          </div>
        </div>
      </div>
      <!-- 新朋友和群通知 -->
      <xpy></xpy>
      <!-- 分组 -->
      <FenZuControl class="tab-Control" :titlesww="arr" />
    </div>
    <!-- 好友内容 -->
    <!-- 啧啧 -->
    <div class="updown">
      <ul>
        <li v-for="re in res" :key="re.id" style="list-style-type: none;">

          <router-link :to="{name:'ri',query:{id:re.id}}" class="di-re" tag="div">
          
            <img v-bind:src="re.headPortrait" />
            <p>{{ re.remarks }}</p>
          
          </router-link>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import NavBar from "../../components/common/navbar/NavBar";
import SouSuo from "../../components/sousuo/SouSuo.vue";
import MyDate from "../../components/common/mydate/MyDate.vue";
import Xpy from "./Xpy.vue";
import FenZuControl from "./FenZuControl.vue";


// import Xpy from "./Xpy.vue"
export default {
  // 记得加双引号
  name: "Contacts",
  data() {
    return {
      res: [],
      list: [
        {
          src1: require("../../../public/contacts/1.png"),
          src2: require("../../../public/contacts/chahao.png"),
          name: "Curtain",
          num: 1,
        },
        {
          src1: require("../../../public/contacts/2.png"),
          src2: require("../../../public/contacts/chahao.png"),
          name: "平常心",
          num: 3,
        },
      ],
      arr: ["好友", "分组", "群聊", "设备", "通讯录", "订阅号"],
    };
  },
  methods: {
    abc() {
      console.log(hahah);
    },
    getData() {
      this.$http
        .get("http://localhost:8080/localdata.json")
        .then((res) => {
          this.res = res.data.messageya;
          console.log(res);
        })
        .catch((err) => {
          console.log(err);
        });
    },
  },
  mounted() {
    this.getData();
    // this.abc();
    //  this.$nextTick(function () {
    //   this.getData()
    // })
  },
  components: {
    NavBar,
    SouSuo,
    MyDate,
    Xpy,
    FenZuControl,
  },
};
</script>

<style scoped>
.pymk {
  position: relative;
  font-weight: 550;
  top: 3%;
  /* left: 5%; */
  margin-left: 5%;
  font-size: 12px;
  color: #919590;
}
.cur-pin {
  width: 100%;
  margin: 8px 0px;
  position: relative;
}
.pleft-text {
  display: inline-block;
  position: absolute;
  top: 10%;
  margin-left: 4%;
}
.pleft-text p {
  margin: 0;
}
.pright-text {
  width: 90px;
  height: 42px;
  display: inline-block;
  position: absolute;
  right: 6%;
  /* background: #919590; */
  font-size: 13px;
}
.prt {
  position: absolute;
  top: 16%;
  width: 60%;
  height: 64%;
  border-radius: 28px;
  background: #eeeeee;
  color: black;
  font-size: 12px;
}
.pyuan {
  display: inline-block;
  width: 40px;
  height: 40px;
  border-radius: 30px;
  overflow: hidden;
}
.chahao {
  display: inline-block;
  width: 12px;
  height: 12px;
  position: absolute;
  top: 36%;
  right: 5%;
}
.xpyhqtz {
  position: relative;
}
.tab-Control {
  position: sticky;
  top: 55px;
  background: white;
}
.updown {
  border-top: 1px solid #e5e5e5;
  height: 280px;
  /* width:540px; */
  margin: 15px 0 0 0;
  overflow: auto;
  background-color: #fff;
}
.updown>ul{
  padding: 0;
  margin: 0;
}
.di-re {
  position: relative;
  list-style: none;
  /* width: 540px; */
  /* height: 80px; */
  border-bottom: 1px solid #e5e5e5;
}
.di-re > img {
    position: absolute;
    width: 40px;
    height: 40px;
    border-radius: 30px;
    overflow: hidden;
    margin: -11px 14px;
}
.di-re > p {
  color: rgb(34, 34, 34);
    font-size: 17px;
  margin: 20px 73px;
}


</style>