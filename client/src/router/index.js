import Vue from 'vue'
import Router from 'vue-router'
import index from '@/components/index'
import studentlist from '@/components/studentlist'
import addstudent from '@/components/addstudent'
import userlist from '@/components/userlist'
import actlist from '@/components/actlist'
import login from '@/components/login'
import addact from '@/components/addact'
import test from '@/components/test'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'index',
      component: index,
      children: [
      { path: '/studentlist',name: 'studentlist',component: studentlist },
      { path: '/actlist',name: 'actlist',component: actlist },
      { path: '/addact',name: 'addact',component: addact },
      { path: '/addstudent',name: 'addstudent',component: addstudent },
      { path: '/userlist',name: 'userlist',component: userlist },
      { path: '/test',name: 'test',component: test }
      ]
    },
    { path: '/login',name: 'login',component: login }
  ]
})
