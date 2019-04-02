<template>
  <div>
  <el-table
    :data="tableData"
    border="8"
    style="width: 100%">
    <el-table-column
      prop="clas"
      label="班级"
      width="150">
    </el-table-column>
    <el-table-column
      prop="sname"
      label="姓名"
      width="120">
    </el-table-column>
    <el-table-column
      prop="sno"
      label="学号"
      width="150">
    </el-table-column>
    <el-table-column
      label="">
      <template slot-scope="scope">
        <el-button
          size="mini"
          type="danger"
          @click.native.prevent="deleteRow(scope.$index, tableData)">
          删除
        </el-button>
        <el-button
          @click.native.prevent="show(scope.$index, tableData)"
          size="mini">
          修改信息
        </el-button>
      </template>
    </el-table-column>
  </el-table>

  <el-dialog title="修改学生信息" :visible.sync="dialogFormVisible">
  <el-form :model="form">
    <el-form-item label="学号" :label-width="formLabelWidth">
      <el-input v-model="form.sno" auto-complete="off" :disabled="true">></el-input>
    </el-form-item>
    <el-form-item label="班级" :label-width="formLabelWidth">
    <el-select v-model="form.clas" placeholder="请选择班级" >
      <el-option label="物联网151" value="物联网151"></el-option>
      <el-option label="电信151" value="电信151"></el-option>
      <el-option label="网络151" value="网络151"></el-option>
      <el-option label="计本151" value="计本151"></el-option>
      <el-option label="信工151" value="信工151"></el-option>
    </el-select>
    </el-form-item>
    <el-form-item label="姓名" :label-width="formLabelWidth">
      <el-input v-model="form.sname" auto-complete="off"></el-input>
    </el-form-item>
    <el-form-item label="leyid" :label-width="formLabelWidth">
      <el-input v-model="form.keyid" auto-complete="off"></el-input>
    </el-form-item>
  </el-form>
  <div slot="footer" class="dialog-footer">
    <el-button @click="dialogFormVisible = false">取 消</el-button>
    <el-button type="primary" @click="update()">确 定</el-button>
  </div>
  </el-dialog>
  </div>
</template>

<script>
import Qs from 'qs'
export default {
  name: 'studentlist',
  data () {
    return {
      tableData: [],
      dialogFormVisible: false,
      form: {
        clas:'',
        sno: '',
        sname: '',
        keyid: ''
      },
      formLabelWidth: '150px'
    }
  },
  mounted(){
    var state = sessionStorage.getItem("state");
    console.log(state);
    this.$axios({
      method: 'get',
      url: 'http://127.0.0.1:3000/list'
    }).then((res) => {
        this.tableData = res.data;
      })
      .catch((err) => {
        console.log(err);
      });
  },
  methods: {

      deleteRow(index, rows) {
        //index 是索引
        //rows 是数组
        console.log(rows[index].sno);
        this.$axios({
          method: 'get',
          url: 'http://127.0.0.1:3000/delete?sno='+rows[index].sno
        })
          .then((res) => {
            //成功提醒
            this.$notify({
              title: '删除成功',
              message: '已成功删除学号为'+ rows[index].sno + rows[index].sname +'的学生',
              type: 'success'
            });
            rows.splice(index, 1);
          })
          .catch((err) => {
            console.log(err);
          });
      },
      show(index, rows){
        this.dialogFormVisible = true
        this.form.clas = rows[index].clas
        this.form.sno = rows[index].sno
        this.form.sname = rows[index].sname
        this.form.keyid = rows[index].keyid
      },
      update() {
        console.log(Qs.stringify(this.form));
        //都不能为空
        if (!(this.form.clas =='' || this.form.sno =='' || this.form.sname =='' || this.form.keyid =='')) {
          // console.log(this.form.keyid.split(" ").join(""));
          //keyid必须满足6位数
          if (this.form.keyid.length == 6) {
              this.$axios.post("http://127.0.0.1:3000/update", Qs.stringify(this.form), {
                headers: {
                  'Content-Type': 'application/x-www-form-urlencoded'
                }
                })
                .then((response) => {
                console.log(response);
                //更新数据后页面加载新数据
                this.$axios({
                  method: 'get',
                  url: 'http://127.0.0.1:3000/list'
                })
                .then((res) => {
                  this.tableData = res.data;
                })
                .catch((err) => {
                  console.log('更新数据后重新加载数据出现问题：' + err);
                })
                this.dialogFormVisible = false
                this.$message({
                message: '学生信息成功',
                type: 'success'
                })
              })
              .catch(function (error) {
                console.log(error);
              });


            }else{
              this.$notify.error({
              title: '提交失败',
              message: 'keyid必须要6位'
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

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
