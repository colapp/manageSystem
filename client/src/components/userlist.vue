<template>
  <el-table
    :data="tableData"
    style="width: 100%">
    <el-table-column
      prop="uno"
      label="工号"
      width="150">
    </el-table-column>
    <el-table-column
      prop="name"
      label="姓名"
      width="120">
    </el-table-column>
    <el-table-column
      prop="user"
      label="账号"
      width="120">
    </el-table-column>
    <el-table-column
      prop="pwd"
      label="密码"
      width="120">
    </el-table-column>
    <el-table-column
      prop="tel"
      label="电话"
      width="120">
    </el-table-column>
    <el-table-column
      label=""
      width="90">
      <template slot-scope="scope">
        <el-button
          @click.native.prevent="deleteRow(scope.$index, tableData)"
          size="mini"
          type="danger">
          删除
        </el-button>
      </template>
    </el-table-column>
    <el-table-column
      label=""
      width="120">
      <template slot-scope="scope">
        <el-button
          @click.native.prevent="mes()"
          size="mini">
          修改信息
        </el-button>
      </template>
    </el-table-column>
  </el-table>
</template>

<script>
export default {
  methods: {
      deleteRow(index, rows) {
        rows.splice(index, 1);
      },
      mes(){
        alert("谢谢你长得这么好看，还来看我!!!")
      }
    },
  name: 'studentlist',
  data () {
    const item = {
        uno: '6103241997',
        name: '李想',
        user: '25613415',
        pwd: '123456',
        tel:'18733554987'
      };
    return {
      tableData: Array(5).fill(item)
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
