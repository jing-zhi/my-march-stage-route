<template>
  <div class="Friend">
    <div class="backya"></div>

    <!-- 发消息 -->
    <div class="faxiaoxi">
      <div class="DBF"><p>名片</p></div>
      <div class="DBF"><p>编辑资料</p></div>
      <div class="DBF">
        <router-link :to="{name:'Liaotian',query:{id:this.friend.id}}" class="ro-p" ><i class="fa fa-comment-o"></i>
          发消息
        </router-link>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      friend: []
    }
  },
  created () {
    const id = this.$route.query.id
    this.$http.get('http://localhost:8080/localdata.json')
      .then(res => {
        this.friend = res.data.messageya[id]
        // console.log(this.friend);
      })
      .catch(err => {
        console.log(err)
      })
  },
  mounted () {
  },
  methods: {
  }
}
</script>

<style scoped>
.backya{
  background: url(../../../public/contacts/img/c5.png);
  width: 375px;
  height: 196px;
}
.faxiaoxi{
  display: flex;
  width: 375px;
  height: 70px;
  z-index: 99;
  position: absolute;
  bottom: 0;
  background: white;
}
.DBF{
  flex: 1;
  height: 49px;
  text-align: center;
}
</style>