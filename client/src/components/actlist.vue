<template>
  <div>
  <el-table
    :data="tableData"
    style="width: 100%">
    <el-table-column
      prop="ano"
      label="编号"
      width="150">
    </el-table-column>
    <el-table-column
      prop="time"
      label="时间"
      width="150">
    </el-table-column>
    <el-table-column
      prop="type"
      label="类型"
      width="120">
    </el-table-column>
    <el-table-column
      prop="clas"
      label="班级"
      width="120">
    </el-table-column>
    <el-table-column
      prop="area"
      label="地点"
      width="120">
    </el-table-column>
    <el-table-column
      prop="state"
      label="状态"
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
          @click="dialogVisible = true"
          size="mini">
          查看详情
        </el-button>
      </template>
    </el-table-column>
  </el-table>
  <el-dialog title="打卡详情" :visible.sync="dialogVisible">
    <el-collapse v-model="activeNames" @change="handleChange">
      <el-collapse-item title="已完成人员" name="1">
        <div>
          <el-tag type="success">员工一</el-tag>
          <el-tag type="success">员工二</el-tag>
          <el-tag type="success">员工三</el-tag>
          <el-tag type="success">员工四</el-tag>
          <el-tag type="success">员工五</el-tag>
        </div>
      </el-collapse-item>
      <el-collapse-item title="请假人员" name="2">
        <div>
          <el-tag type="warning">员工九</el-tag>
          <el-tag type="warning">员工十</el-tag>
        </div>
      </el-collapse-item>
      <el-collapse-item title="未完成人员" name="2">
        <div>
          <el-tag type="danger">员工六</el-tag>
          <el-tag type="danger">员工七</el-tag>
          <el-tag type="danger">员工八</el-tag>
        </div>
      </el-collapse-item>
    </el-collapse>
  </el-dialog>
  </div>
</template>

<script>
export default {
  methods: {
      deleteRow(index, rows) {
        rows.splice(index, 1);
        //成功提醒
        this.$notify({
          title: '成功',
          message: '这是一条成功的提示消息',
          type: 'success'
        });
      },
       handleChange(val) {
        console.log(val);
      }
    },
  name: 'studentlist',
  data () {
    const item = {
        ano: '6103241997',
        time:'2018-08-08 12:00',
        type: '晚点名',
        clas: '物联网151',
        area: 'F101',
        state:'已完成'
      };
    return {
      tableData: Array(5).fill(item),
      dialogVisible: false,
      activeNames: ['1']
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
