import Vue from 'vue'
import Vuex from 'vuex'
 
Vue.use(Vuex)
 
const store = new Vuex.Store({
 // 定义状态
 state: {
 author: 'Wise Wrong',
 userInfo: { //保存用户信息
 account: 'admin',
 checkPass: '123456'
 }
 },
 mutations: {
 	newAuthor(state,msg) {
 		state.author = msg
 	},
    //设置userinfo
 	newaccout(state,userInfo) {
 		state.userInfo.account = userInfo
 	}
 }
})
 
export default store