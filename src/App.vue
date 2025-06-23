<script setup>
  import { ref } from "vue";


</script>

<template>
  <div id="all">
    <div id="main">
      <div id="first">
        <div id="words">
          <img src="/src/images/smile.png" id="smile">
          <p id="welZh">欢迎,</p>
          <p id="welEn">Welcome.</p>
        </div>
        <div id="rectangle"></div>
      </div>

      <div id="second">
        <h1 id="userName">yuanqh23</h1>
        <div id="showing">
          <div id="duration">
            <div class="remainder">已连接Duration</div>
            <span id="time">00:07:03</span>
          </div>
          <div id="usage">
            <div class="remainder">已用流量usage</div>
            <div id="container">
              <div id="progressing"><small>27.43G</small></div>
            </div>            
            <!-- <span id="usageWord">27.43G</span> -->       
          </div>
        </div>
      </div>

      <div id="third">
        <div id="rec2"></div>
        <button id="cutButton">
          断开连接<br><small>Disconnected</small>
        </button>
      </div>
    </div>
    <footer id="footer">
      <div><img src="/src/images/info.gif"><span>Info</span></div>
      <div><img src="/src/images/lib.gif"><span>Lib</span></div>
      <div><img src="/src/images/learn.gif"><span>Learn</span></div>
      <div><img src="/src/images/mail.gif"><span>Mail</span></div>
    </footer>
  </div>
  
</template>

<style scoped>
  /* 总体的样式，包括背景，宽高*/
  #all { 
    background-color: #e4e4e4;
    text-align: center;
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
    height: 70%;
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
    font-size: 160%;
    opacity: 50%;
    font-family:Arial, Helvetica, sans-serif;
    margin-bottom: 0px;
    margin-top: 10%;
  }

  #first #words #welEn {
    font-size: 90%;
    opacity: 50%;
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
    bottom: -5%;
    left: 6%
  }
/*---------------------------------------*/
  /* 第二个面板定位 */
  #second {
    position: relative;
    top: -70%;
    left: 25%;

    background-color: rgb(247, 247, 245);
    width: 70%;
    height: 85%;

    box-shadow:  -2px 2px 8px rgba(0, 0, 0, 0.3);
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
    font-weight: 600;
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
    background-image: url(/src/images/usage.png);
    background-repeat: no-repeat;
    background-size: contain;
  }

  #second #progressing {
    background-color: rgb(245, 189, 93);
    width: 40%;
    height: 52%;
    position: relative;
    bottom: -18%;
    left: 0%;

    font-size: large;
    color: rgb(69, 69, 69);
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
    position: relative;
    bottom: 87%;
    right: -68%;

    width: 32%;
    height: 23%;
    background-color: white;
  }

  #third #rec2 {
    width: 0px;
    height: 0px;
    border: 19px solid #d1d1d1;
    border-right-color: white;
    border-bottom-color: white;
    border-left-color: rgb(247, 247, 245);
    transform: rotate(45deg);

    /* 对该三角形进行定位 */
    position: relative;
    bottom: 30%;
    right: -72%
  }

  #third #cutButton {
    background-color: rgb(199, 203, 221);
    border: 0px;
    width: 80%;
    margin: 5% auto;
    padding-bottom: 3%;
    padding-top: 3%;
    font-family: monospace;
    font-size: medium;
    font-weight: 600;

    position: relative;
    top: -68%;
  }

/*----------------------------------------------*/
  /* 底下小图标部分样式 */
  #footer { 
    position: relative;
    bottom: -15%;
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
