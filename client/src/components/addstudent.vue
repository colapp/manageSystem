<template>
<el-form ref="form" :model="form" label-width="120px">
  <el-form-item label="班级">
    <el-select v-model="form.clas" placeholder="请选择班级" style="width: 400px;">
      <el-option label="物联网151" value="物联网151"></el-option>
      <el-option label="电信151" value="电信151"></el-option>
      <el-option label="网络151" value="网络151"></el-option>
      <el-option label="计本151" value="计本151"></el-option>
      <el-option label="信工151" value="信工151"></el-option>
    </el-select>
  </el-form-item>
  <el-form-item label="学号">
    <el-input v-model="form.sno" placeholder="学号必须为12位数字" style="width: 400px;"></el-input>
  </el-form-item>
  <el-form-item label="姓名">
    <el-input v-model="form.sname" placeholder="请输入姓名" style="width: 400px;"></el-input>
  </el-form-item>
  <el-form-item label="leyid">
    <el-input v-model="form.keyid" placeholder="请输入电子卡密钥" style="width: 400px;"></el-input>
  </el-form-item>
  <el-form-item>
    <el-button type="primary" @click="onSubmit">立即添加</el-button>
    <el-button  @click="clean">重置</el-button>
  </el-form-item>
</el-form>
</template>
<script>
import Qs from 'qs'
  export default {
    name : 'addstudent',
    data() {
      return {
        form: {
          clas:'',
          sno: '',
          sname: '',
          keyid: ''
        }
      }
    },
    methods: {
      clean() {
        this.form.clas = '',
        this.form.sno = '20150602',
        this.form.sname = '',
        this.form.keyid = ''
      },
      onSubmit() {
        console.log(Qs.stringify(this.form));
        //都不能为空
        if (!(this.form.clas =='' || this.form.sno =='' || this.form.sname =='' || this.form.keyid =='')) {
          this.form.sno = this.form.sno.split(" ").join("")
          this.form.keyid = this.form.keyid.split(" ").join("")
          //sno keyid必须满足6位数
          if (this.form.sno.length == 12 && this.form.keyid.length == 6) {
              this.$axios.post("http://127.0.0.1:3000/add", Qs.stringify(this.form), {
              headers: {
                  'Content-Type': 'application/x-www-form-urlencoded'
                }
              })
              .then((response) => {
                console.log(response);
                this.$notify({
                title: '添加成功',
                message: '已成功添加学生'+ this.form.sname,
                type: 'success'
              });
              })
              .catch(function (error) {
                console.log(error);
              });


            }else{
              this.$notify.error({
              title: '提交失败',
              message: 'keyid必须要12位,keyid必须要6位'
              })
            }
        }else{
          this.$notify.error({
          title: '提交失败',
          message: '必填项不能为空！'
          })
          
        }

      }
    }
  }
</script>