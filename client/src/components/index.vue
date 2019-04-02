<template>
<el-container style="height: 700px;min-height: 100%">
  <el-header>
    <span>考勤管理系统</span>
    <el-dropdown style="float: right">
    <span class="el-dropdown-link" style="color: #fff">
      王景锋<i class="el-icon-arrow-down el-icon--right"></i>
    </span>
    <el-dropdown-menu slot="dropdown">
      <el-dropdown-item>修改信息</el-dropdown-item>
      <el-dropdown-item @click.native.prevent="back()">退出</el-dropdown-item>
    </el-dropdown-menu>
    </el-dropdown>
  </el-header>
  <el-container>
<!--     侧边导航 -->
  <el-aside width="200px">
    <el-menu :default-openeds="[]">
      <el-submenu index="1">
        <template slot="title"><i class="el-icon-menu"></i>考勤管理</template>
          <el-menu-item index="1-1"><router-link to="/actlist">签到记录</router-link></el-menu-item>
          <el-menu-item index="1-2"><router-link to="/addact">活动发起</router-link></el-menu-item>
      </el-submenu>
      <el-submenu index="2">
        <template slot="title"><i class="el-icon-setting"></i>学籍管理</template>
          <el-menu-item index="2-1"><router-link to="/studentlist">学生列表</router-link></el-menu-item>
          <el-menu-item index="2-2"><router-link to="/addstudent">添加学生</router-link></el-menu-item>
      </el-submenu>
      <el-submenu index="3">
        <template slot="title"><i class="el-icon-tickets"></i>用户管理</template>
          <el-menu-item index="3-1"><router-link to="/userlist">用户列表</router-link></el-menu-item>
      </el-submenu>
    </el-menu>
  </el-aside>
<!--    内容组件 -->
    <el-main>
      <el-breadcrumb separator="/" >
        <el-breadcrumb-item :to="{ path: '/index' }">首页</el-breadcrumb-item>
        <el-breadcrumb-item><a href="/">活动管理</a></el-breadcrumb-item>
        <el-breadcrumb-item>活动列表</el-breadcrumb-item>
      </el-breadcrumb>
      <router-view/>
    </el-main>
  </el-container>
  <el-footer>Copyright ©2018  All Rights Reserved By Li Xiang</el-footer>
</el-container>
</template>

<style>
  body{
    margin:0px;
  }
  i{
    color: #fff;
  }
  .el-header{
    background-color: #222;
    color: #fff;
    line-height: 60px;
  }
  .el-footer{
    background-color: #222;
    color: #fff;
    text-align: center;
    line-height: 60px;
  }
  .el-breadcrumb{
    margin-top:15px;
    padding-left: 15px; 
    margin-bottom: 10px;
    padding-bottom: 15px;
    border-bottom: 1px #c9c9c9 solid;
  }
  .el-aside{
    background-color: #eeeeee;
    color: #333;
    border-right: 1px #c9c9c9 solid;
  }
  .el-main{
    padding: 0px;
  }
  .el-submenu__title{
    background-color: #eeeeee;
    color: #333;
  }
  .el-submenu__title i {
    color: #333;
  }
  .el-menu-item{
    color: #333;
    background-color: #eeeeee !important;
  }
  a:hover{
    color: #409EFF;
/*    background-color: #eeeeee !important;*/
  }
  .el-menu-item.is-active {
    color: #409EFF;
  }
  a{
    color: #333;
    text-decoration-line: none;
  }
  .router-link-active{
    color: #409EFF;
  }
</style>

<script>
  export default {
    data() {
      return {
        
      }
    },
    methods: {
      back: function(){
        this.$router.push({ path: '/login'})
      }
    }
  };
</script>
