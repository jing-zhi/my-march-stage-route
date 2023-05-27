// const Vue2614 = require("./Vue2.6.14");
// console.log(date.);

const app = new Vue({
  el: '#app',
  data: {

  },
  components: {
    cpn: {
      template: '#cpn'  
    }
  }
})

// const app = new Vue({
//   el: '#app',
//   data: {
//     type: 'true'
//   },
  // methods: {
  //   handleToggle() {
  //    type = false
  //   }
  // }
// })

// Vue.component('todo-item',{
//     props: ['todo'],
//     template: '<li>{{ todo.text }}</li>'
// })

// new Vue({
//     el: '#app',
//     data: {
//         sites:[
//             {text: 'asdasd'},
//         ]
//     }
// })

// 注册组件
// var Child={
//     template: '<h1>妙哉！组件像是一个接口，一个bootstrap插件</h1>'
// };

//     new Vue({
//         el: '#app',
//         components: {
//             'runboo': Child
//         }
//     })
// new Vue({
//     el: '#asd',
//     data: {
//         isactive: true,
//         error: {
//             value: true,
//             type: 'fatal'
//         },
//         computed: {
//             obj: function(){
//                 return {
//                     active:true,
//                     'base': this.error.value && this.error.type === 'fatal'
//                 }
//             }
//         }
//     }
// })

// new Vue({
//     el: '.qwe',
//     data: {
//         backact: {
//             background: '#b93d3d',

//         },
//         yanseact: {
//             color: '#efc4c4',
//             fontSize: '15px'
//         },
//         seeyou: true

//     }
// })

// alert(Date.now());
// Vue.component('todo-item',{
//     props: ['todo'],
//     template: '<li>{{ todo.text}}</li>'
// })

// Vue.component(' todo-item' , {
//     props: ['todo'],
//     template: '<li>{{ todo.text }}</li>'
// })

// var app = new Vue({
//     el: '#app',
//     data: {
//         groceryList: [
//             { id: 0,text: '水果'},
//             { id: 1,text: '小白瓜'},
//             { id: 2,text: '小白瓜好久没吃了！'}
//         ]
//     }
// })

// var vm = new Vue({
//     el: '#qw',
//     data:{
//         message: "我是哥帅大"
//     },
//     computed: {
//         reversedmessage: function(){
//             return this.message.split('').reverse('').join('')
//         }
//     },
//     methods:{
//         reversedmessage2: function(){
//             return this.message.split('').reverse('').join('')
//         }
//     }
// })

// new Vue({
//     el: '.asde'
// })

// new Vue({
//     el:'.asd',
//     data: {
//         object:{
//             name: '我叫王景玉',
//             url: 'https://www.bilibili.com/',
//             slogan: '我也不知道什么是slogan  标语'
//         }
//     }
// })

// new Vue({
//     el:".qwe",
//     data: {
//         sites: [
//             {namee: '我帅'},
//             {namee: '我很帅'},
//             {namee: '我超级帅'}
//         ]
//     }
// })

// new Vue({
//     el: '#app',
//     data:{
//         use:false
//     }
// });

// var vm = new Vue({
//     el: '#vue_det',
//     data: {
//         site: "我最帅啦！",
//         url: "https://space.bilibili.com/379826364?spm_id_from=333.788.b_765f7570696e666f.1",
//         alaxa: "10000"
//     },
//     methods: {
//         details: function(){
//             return this.site + "-帅当然是有帅的原因啦！";
//         }
//     }
// })