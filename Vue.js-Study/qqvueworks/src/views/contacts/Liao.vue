 <template>
  <div class="Liaotian">
    <div class="tc">
      <p>撤回</p>
      <router-link :to="{path:'Message',query:{id:this.de.id}}" >
            <i class="fa fa-angle-left chat_i">{{de.remarks}}</i>
            </router-link>
            <!-- {{de.remarks}} -->
            <i class="fa fa-ellipsis-h tp-r chat_i"></i>
    </div>

    <div
      class="zhongceng"
      v-bind:class="{ changeup: changeclass }"
      @click="changeclass = false"
    >
      <ul>
        <li class="shou">
          <img :src="de.headPortrait" />
          <p>我喜欢你</p>
        </li>
        <!--实现发送消息-->
        <li
          v-for="(item, index) in list"
          :key="index"
          v-show="item.manid == $route.query.id"
          class="wode"
        >
          <img :src="de.headPortrait" />
          <p>{{ item.mess }}</p>
        </li>
      </ul>
    </div>
    <div class="fasong" @click="changeclass = true">
      <input type="text" v-model="msg" />
      <li style="display: inline-block" @click="sendmessage">fasong</li>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      de: [],
      msg: "",
      list: [{ manid: 1, mess: "", sb: false }],
      changeclass: false,
    };
  },
  mounted() {
    var l = JSON.parse(localStorage.getItem("msgs") || "[]");
    for (var i = 0; i < l.length; i++) {
      if (l[i].manid === this.$route.query.id) {
        l[i].sb = false;
        localStorage.setItem("msgs", JSON.stringify(l));
      }
    }
    this.list = l;
  },
  created() {
    const id = this.$route.query.id;
    this.$http
      .get("http://localhost:8080/localdata.json")
      .then((res) => {
        this.de = res.data.messageya[id];
      })
      .catch((err) => {
        console.log(err);
      });
  },
  methods: {
    sendmessage() {
      var now = { manid: this.$route.query.id, mess: this.msg, sb: true };
      var list = JSON.parse(localStorage.getItem("msgs") || "[]");
      list.push(now);
      localStorage.setItem("msgs", JSON.stringify(list));
      this.list.push(now);
      this.msg = "";
    },
  },
};
</script>

<style scoped>
.tc {
  width: 375px;
  height: 70px;
  background: #3a88c0;
  position: relative;
}
.fasong {
  width: 375px;
  height: 70px;
  z-index: 99;
  position: absolute;
  bottom: 0;
  background: white;
}
.zhongceng {
  height: 400px;
  overflow-y: auto;
}
.zhongceng ul {
  margin: 0;
  padding: 0;
  /* overflow: hidden; */
  width: 375px;
}
.shou>img{
  width: 40px;
  height: 40px;
  border-radius: 30px;
  overflow: hidden;
}
.wode {
  width: 375px;
  height: 80px;
  float: right;
}
.wode > img {
  float: right;
  width: 40px;
  height: 40px;
  border-radius: 30px;
  overflow: hidden;
  /* display: inline-block; */
}
.wode > p {
  float: right;
}
</style>