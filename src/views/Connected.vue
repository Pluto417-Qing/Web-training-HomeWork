<script setup>
  import { useRoute } from 'vue-router'
  import router from '@/router'
  import { onMounted, onUnmounted, ref } from 'vue'
  import { computed } from 'vue'
  import { useUserStore } from '@/stores/user'

  //获取路由实例，用于页面跳转
  const route = useRoute()
  const userName = route.query.userName
  const userStore = useUserStore()

  const hour = ref(0)
  const min = ref(0)
  const sec = ref(0)

  let timer = null
  let timer2 = null

  // 断开连接函数，点击后跳转回登录页面
  const cutConnnect = () => {
      router.push({
        path: '/', // 跳转到根路径（登录页）
      })
  }

  const timeStr = computed(() => {
    // 利用计算属性格式化时间输出
    return String(hour.value).padStart(2,'0') + ':' + 
      String(min.value).padStart(2,'0') + ':' +
        String(sec.value).padStart(2,'0')
  })

  const increTime = () => {
    sec.value += 1
    formatTime()
  }

  const increUsage = (usage) => {
    // 增加用户使用流量
    userStore.increUsage(userName, usage)
  }

  const formatTime = () => {
    // 增加时间
    if (sec.value >= 60) {
      sec.value %= 60
      min.value += 1
    }
    if (min.value >= 60) {
      min.value %= 60
      hour.value += 1
    }
  }

  onMounted(() => {
    // 设置定时器
    timer = setInterval(increTime, 1000)
    timer2 = setInterval(increUsage, 1000, 3.33)
  })

  onUnmounted(() => {
    clearInterval(timer)
    clearInterval(timer2)
  })

</script>

<template>
  <div id="all">
    <!-- 第一大部分-三个面板区 -->
    <div id="main">
      <!-- 第一个面板（橙色欢迎面板） -->
      <div id="first">
        <!-- 第一个面板中的文字部分 -->
        <div id="words">
          <img src="../assets/images/smile.png" id="smile">
          <p id="welZh">欢迎,</p>
          <p id="welEn">Welcome.</p>
        </div>
        <!-- 第一个面板下方尖角 -->
        <div id="rectangle"></div>
      </div>
      <!-- 第二个面板-流量统计和时间显示面板 -->
      <div id="second">
        <!-- 第二个面板上显示的用户名 -->
        <h1 id="userName">{{ $route.query.userName }}</h1>
        <!-- 第二个面板上显示的统计信息 -->
        <div id="showing">
          <!-- 显示的使用时间 -->
          <div id="duration">
            <div class="remainder">已连接Duration</div>
            <span id="time">{{ timeStr }}</span>
          </div>
          <!-- 显示的流量使用情况 -->
          <div id="usage">
            <div class="remainder">已用流量usage</div>
            <div id="container">
              <div id="progressing" :style="{ width: userStore.usageList[userStore.nameList.indexOf(userName)] / 50 * 100 + '%'}">
                <small>{{ (userStore.usageList[userStore.nameList.indexOf(userName)]).toFixed(2) }}G</small>
              </div>
            </div>            
          </div>
        </div>
      </div>
      <!-- 第三个面板-断开连接面板 -->
      <div id="third">
        <!-- 第三个面板右上方的灰色三角形 -->
        <div id="rec2"></div>
        <!-- 第三个面板上的断开连接按钮 -->
        <button id="cutButton" @click="cutConnnect">
          断开连接<br><small>Disconnected</small>
        </button>
      </div>
    </div>
    <!-- 第二大部分-底部图标和文字 -->
    <footer id="footer">
      <div><img src="../assets/images/info.gif"><span>Info</span></div>
      <div><img src="../assets/images/lib.gif"><span>Lib</span></div>
      <div><img src="../assets/images/learn.gif"><span>Learn</span></div>
      <div><img src="../assets/images/mail.gif"><span>Mail</span></div>
    </footer>
  </div>
  
</template>

<style scoped>
  /* 总体的样式，包括背景，宽高*/
  #all { 
    margin: auto;
    background-color: #e4e4e4;
    text-align: center;
    align-items: center;
    width: 600px;
    height: 400px;
  }

  /* 先定位上面三个小面板总体 */
  #main {
    position: relative;
    top: 10%;
    left: 10%;

    width: 80%;
    height: 60%;
  }
/*----------------------------------------*/
  /* 第一个面板（橙色欢迎面板）定位*/
  #first {
    position: relative;
    top: 0%;
    left: 0%;
    width: 90%;
    height: 80%;
    text-align: left;
    
    background-color: #f33711;
  }

  #first #words {
    position: relative;
    top:2%;
    left: 5%;
    color: white;
    width: 20%;
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  #first #words #welZh {
    font-size: 180%;
    opacity: 80%;
    font-family:Arial, Helvetica, sans-serif;
    margin-bottom: 0px;
    margin-top: 10%;
  }

  #first #words #welEn {
    font-size: 100%;
    opacity: 80%;
    font-family:Arial, Helvetica, sans-serif;
    margin-top: 10%;
    margin-bottom: 10%;
  }

  #first #words #smile {
    /* display: inline; */
    width: 60%;
    margin-top: 25%;
    margin-left: 3%;
  }

   /* 通过盒模型控制边框绘制出一个三角形,作为橙色方框的尖角*/
  #rectangle {
    width: 0px;
    height: 0px;
    border: 20px solid #f33711;
    border-right-color: #e4e4e4;
    border-bottom-color: #e4e4e4;

    /* 对该三角形进行定位 */
    position: relative;
    bottom: -14%;
    left: 6%
  }
/*---------------------------------------*/
  /* 第二个面板定位 */
  #second {
    z-index: 1;
    position: relative;
    top: -70%;
    left: 25%;

    background-color: rgb(247, 247, 245);
    width: 70%;
    height: 85%;

    /* 为第二个面板添加底部的阴影 */
    filter: drop-shadow(-10px 15px 10px rgba(110, 109, 109, 0.2));
  }

  #second #userName {
    font-size: x-large;
    color:#f33711;
    text-align: left;
    margin-left: 10%;
    padding-top: 5%;
  }

  #second #showing {
    width: 85%;
    height: 40%;
    margin: auto;
    display: flex;
    flex-direction: column;
  }

  #second #showing .remainder {
    position: relative;
    left: -20%;
    display: inline-block;
    font-family: 'Courier New', Courier, monospace;
    font-size: 10%;
    white-space: pre-wrap;
    width: 18%;
    font-weight: 300;
    margin-bottom: 3%;
    margin-top: 2%;
  }

  #second #showing #usage .remainder {
    left: -36%
  }

  #second #container {
    position: relative;
    left: 30%;
    top: -70%;

    width: 70%;
    height: 80%;
    /* 进度条背景图片添加 */
    background-image: url(../assets/images/usage.png);
    background-repeat: no-repeat;
    background-size: contain;
  }

  #second #progressing {
    background-color: rgb(245, 189, 93);
    /* width: 40%; */
    width: 40%;
    height: 52%;
    position: relative;
    bottom: -26%;
    left: 0%;

    font-size: large;
    color: rgb(69, 69, 69);
    transition: 1s;
  }

  #second #showing #time {
    color: #f33711;
    font-size: x-large;
    font-weight: 500;
    margin-bottom: 0%;

    position: relative;
    left: -10%;
  }

/*---------------------------------------*/
  /* 第三个面板定位 */
  #third {
    /* 相对定位 */
    z-index: 2;
    position: relative;
    bottom: 90%;
    right: -63%;

    width: 35%;
    height: 25%;
    background-color: white;
  }

  #third #rec2 {
    width: 0px;
    height: 0px;
    border: 11px solid #bfbdcb;
    border-right-color: white;
    border-bottom-color: white;
    border-left-color: rgb(247, 247, 245);
    transform: rotate(45deg);

    /* 对该三角形进行定位 */
    position: relative;
    bottom: 19%;
    right: -85%
  }

  #third #cutButton {
    /* 断开连接按钮的样式 */
    background-color: rgb(199, 203, 221);
    border: 0px;
    width: 80%;
    margin: 17% auto;
    padding-bottom: 1%;
    padding-top: 1%;
    font-family: "SimHei", "黑体", sans-serif;
    font-size: medium;
    color: #474652;
    font-weight: 500;

    position: relative;
    top: -68%;
  }

/*----------------------------------------------*/
  /* 底下小图标部分样式 */
  #footer { 
    position: relative;
    bottom: -20%;
    right: 8%;
    font-family:'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
    font-weight: 700;
    font-size: x-small;
    color: #c14820;
    text-align: right;
     
  /* background-color: bisque; */
  }

  #footer div {
    display: inline;
    margin-right: 2%;
  }

  #footer div img {
    width: 3%;
  }

  #footer div span {
    text-align: center;
    margin-left: 0.5%;
  }
</style>
