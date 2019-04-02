<template>
<div>
 <h1>hello</h1>
 <p>现在是凌晨一点左右</p>
 <p>李想同学有点困了</p>
 <p>但是他依然坚持学习</p>
 <p>祝他秋招顺利，加油</p>
 <p>这里是store的值 {{author}} </p>
 <el-button @click="setauthor">变变变</el-button>
</div>
</template>
<style type="text/css" lang="scss">
  $h-color : #f90;
  $p-color : green;
  div{
    h1{
      color: $h-color;
    }
    p{
      color: $p-color;
      &:hover { color: red }
    }
  }
</style>
<script type="text/javascript">
export default {
methods:{
  setauthor(){
    // this.$store.state.author = "123456"
    this.$store.commit('newAuthor','123456')
  }
  },
computed: {
  author () {
  return this.$store.state.author
  }
 }

 }
</script>