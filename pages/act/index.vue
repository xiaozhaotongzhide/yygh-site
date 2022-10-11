<template>
  <!-- header -->
  <div class="nav-container page-component">
    <!--左侧导航 #start -->
    <div class="nav left-nav">
      <div class="nav-item selected">
        <span class="v-link clickable dark" onclick="javascript:window.location='/act'">活动中心 </span>
      </div>
      <div class="nav-item">
        <span class="v-link selected dark" onclick="javascript:window.location='/actorder'">购物券列表 </span>
      </div>
    </div>
    <!-- 左侧导航 #end -->
    <!-- 右侧内容 #start -->
    <div class="page-container">
      <el-button type="success" @click="signTask()">签到</el-button>
      <el-table :data="list" stripe style="width: 100%">
        <el-table-column prop="id" label="购物券id"/>
        <el-table-column prop="inventory" label="库存"/>
        <el-table-column prop="details" label="详情"/>
        <el-table-column type="date" prop="startTime" label="优惠券开始时间"/>
        <el-table-column type="date" prop="endTime" label="优惠券结束时间"/>

        <el-table-column label="操作" align="center">
          <template slot-scope="scope">
            <el-button type="danger" @click="seckill(scope.row.id)">秒杀</el-button>
          </template>
        </el-table-column>
      </el-table>

    </div>
    <!-- 右侧内容 #end -->
    <!-- 登录弹出框 -->
  </div>
  <!-- footer -->
</template>

<script>
import '~/assets/css/hospital_personal.css'
import '~/assets/css/hospital.css'
import '~/assets/css/personal.css'
import actApi from '@/api/act'

const defaultForm = {
  name: '',
  certificatesType: '',
  certificatesNo: '',
  certificatesUrl: ''
}


export default {
  data() {
    return {
      certificatesTypeList: [],
      userInfo: {
        param: {}
      },
      submitBnt: '提交',
      list: [],
      couponId: ''
    }
  },
  created() {
    this.getList()

  },
  methods: {
    seckill(id) {
      actApi.seckill(id).then(response => {
        this.$message.success("签到成功")
        window.location.reload()
      }).catch(e => {
        this.submitBnt = '提交'
      })
    },
    signTask() {
      actApi.signTask().then(response => {
        this.$message.success("签到成功")
        window.location.reload()
      }).catch(e => {
        this.submitBnt = '提交'
      })
    },
    getList() {

      actApi.getList()
        .then((Response) => {
          this.list = Response.data.records
        })
        .catch((error) => {
          console.log(error)
        })
    }
  }
}
</script>
<style>
.header-wrapper .title {
  font-size: 16px;
  margin-top: 0;
}

.content-wrapper {
  margin-left: 0;
}

.patient-card .el-card__header .detail {
  font-size: 14px;
}

.page-container .title {
  letter-spacing: 1px;
  font-weight: 700;
  color: #333;
  font-size: 16px;
  margin-top: 0;
  margin-bottom: 20px;
}

.page-container .tips {
  width: 100%;
  padding-left: 0;
}

.page-container .form-wrapper {
  padding-left: 92px;
  width: 580px;
}

.form-normal {
  height: 40px;
}

.bottom-wrapper {
  width: 100%;
  padding: 0;
  margin-top: 0;
}
</style>

