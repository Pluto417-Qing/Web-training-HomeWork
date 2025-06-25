<script setup>
    import { ref } from 'vue'
    import { useRouter } from 'vue-router'

    const userName = ref('')
    const password = ref('')   
    
    const router = useRouter()

    const checkInput = () => {
        if (userName.value === '') {
            alert("用户名不能为空!")
            return
        } else if (password.value === '') {
            alert("密码不能为空!")
            return
        } else {
            router.push({ 
            path: '/connected', 
            query: { userName: userName.value }  
            })
        }
    }
</script>

<template>
    <div id="all">
        <!-- 第一大部分-头部图标区域 -->
        <header id="header">
            <div id="netImage"></div>
            <div id="code">
                <img id="codeImage" src="@/assets/images/scanCode.jpg">
                <small id="codeWord">欢迎关注"清华大学信息服务"</small>
            </div>   
        </header>

        <!-- 第二大部分-面板区 -->
        <div id="main">
            <!-- 第一个面板（紫色面板） -->
            <div id="first">
                <!-- 第一个面板中的文字部分 -->
                <div id="purple1"></div>
                <div id="purple2"></div>
                <!-- 第一个面板下方尖角 -->
                <div id="rectangle1"></div>
                <!-- 第二个面板下方尖角 -->
                <div id="rectangle2"></div>
            </div>
            <!-- 第二个面板-流量统计和时间显示面板 -->
            <div id="second">
                <div id="input">
                    <div class="input2">
                        <label for="userID">用户名User ID</label>
                        <input type="text" id="userID" v-model="userName">
                    </div>
                    <div class="input2">
                        <label for="password">密码Password</label>
                        <input type="password" id="password" v-model="password">
                    </div>
                </div>
                
                <div id="checkBox">
                    <input type="checkbox" />
                    <div id="checkWord">访问校外(IPv4)网络Access to the Internet(IPv4)</div>
                </div>
                <button id="button" @click="checkInput">连接<br/>Connect</button>
                <div id="rectangle3"></div>
            </div>
        </div>

        <!-- 第三大部分-底部下载栏目 -->
        <div id="download">
            <div id="downloadImage"></div>
            <ul id="downIcon">
                <li></li>
                <li></li>
                <li></li>
                <li></li>
                <li></li>
            </ul>
        </div>

        <!-- 第四大部分-底部小图标栏目 -->
        <div id="bookmark">
            <ul id="downWord">
                <li>Windows</li>
                <li>MacOS</li>
                <li>Linux</li>
                <li>Android</li>
                <li>iOS</li>
            </ul>
            <div id="icons">
                <div class="icon" id="bookIcon">
                    <img class="iconImage" src="@/assets/images/bookmark.gif">
                    <div class="iconWord">
                        <span class="iconWordZh">收藏</span><br/>
                        <span class="iconWordEn">Bookmark This Page</span>
                    </div>
                </div>
                <div class="icon" id="helpIcon">
                    <img class="iconImage" src="@/assets/images/help.gif">
                    <div class="iconWord">
                        <span class="iconWordZh">帮助</span><br/>
                        <span class="iconWordEn">Help</span>
                    </div>
                </div>
                <div class="icon" id="contactIcon">
                    <img class="iconImage" src="@/assets/images/phone.gif">
                    <div class="iconWord">
                        <span class="iconWordZh">联系</span><br/>
                        <span class="iconWordEn">Contact</span>
                    </div>
                    <div class="iconWord iconWordEn">
                        <span>+86-10-62784859</span><br/>
                        <span>its@tsinghua.edu.cn</span>
                    </div>
                </div>
            </div>
        </div>

        <!-- 第五大部分-底部脚注 -->
        <footer id="footer">
            <small>清华大学信息化技术中心</small><br/>
            <small>Information Technology Center of Tsinghua University</small>
        </footer>
    </div>
</template>

<style scoped>
    /* 全局样式 */
    #all {
        width: 530px;
        height: 470px;
        margin: auto;
        background-color: #e6e6e6;
    }
/* ------------------------------------------- */
    /* 头部图标栏样式 */
    #header {
        position: relative;
        top: 0%;
        left: 0%;
        width: 100%;
        height: 20%;
        display: flex;
        justify-content: space-between;
    }

    #header #netImage {
        width: 35%;
        height: 70%;
        margin-top: 1%;
        background-image: url(@/assets/images/thuNet.png);
        background-size: contain;
        background-repeat: no-repeat;
        background-position: center; 
    }

    #header #code {
        width: 22%;
        display: flex;
        flex-direction: column;
        text-align: center;
        align-items: center;
    }

    #header #code #codeWord {
        font-size: 6px;
        margin-top: 4%;
        margin-right: 0%;
        color: #6e6f6f;
    }

    #header #code #codeImage {
        width:50%;
        margin-top: 5%;
    }
/* ---------------------------------------- */
    /* 面板区总体样式 */
    #main {
        width: 100%;
        height: 55%;
        margin-top: -3%;
    }
/* ------------------------------------------- */
    /* 紫色面板样式 */
    #first {
        background-color: #93278f;
        width: 80%;
        height: 70%;
        position: relative;
        top: 5%;
        left: 7%;
    }

    #first #purple1 {
        background-image: url(@/assets/images/greeting.png);
        background-size: contain;
        background-repeat: no-repeat;
        background-position: center;

        width: 36%;
        height: 50%;

        position: relative;
        left: 5%;
        top: 3%;
    }

    #first #purple2 {
        z-index: 1;
        width: 50%;
        height: 58%;
        background-color: #93278f;

        position: relative;
        top: 1%;
        left: -3%;
        box-shadow: -2px 2px 15px rgba(18, 18, 18, 0.2);
    }
    
    #first #rectangle1 {
        width: 0px;
        height: 0px;
        border: 8px solid #6d3b7b;
        border-right-color: #93278f;
        border-bottom-color: #93278f;
        border-left-color: #93278f;
        transform: rotate(-45deg);

        position: relative;
        top: -61.5%;
        left: -2%;
    }

    #first #rectangle2 {
        width: 0px;
        height: 0px;
        border: 14px solid #93278f;
        border-right-color: #e6e6e6;
        border-bottom-color: #e6e6e6;
        border-left-color: #93278f;

        position: relative;
        top: -10%;
        left: 5%;
    }
/* -------------------------------------------- */
    /* 面板2样式 */
    #second {
        z-index: 2;
        background-color: #f2f2f2;
        display: flex;
        flex-direction: column;

        width: 55%;
        height: 75%;

        position: relative;
        top: -59%;
        right: -40%;
        box-shadow: -2px -7px 20px rgba(155, 155, 155, 0.2);
    }

    #second #input {
        display: flex;
        flex-direction: column;
        height: 15%;
        margin: 1% 10%;
    }

    #second #input .input2 {
        display: flex;
        margin-top: 7%;
    }

    #second #input input {
        border: 1px solid white;
        border-radius: 2px;
        width: 100%;
    }

    #second #input input:focus {
        outline: none;
    }

    #second #input label {
        font-size: 8px;
        text-align: left;
        margin-right: 5%;
        font-weight: 500;
    }

    #second #checkBox {
        color: #93278f;
        font-family: Arial, Helvetica, sans-serif;
        font-weight: 400;
        margin-left: 10%;
        display: flex;

        width: 45%;
        position: relative;
        top: 30%;
        left: 5%;
        transform: scale(0.7);
    }

    #second #checkBox #checkWord {
        text-align: left;
        font-size: 10px;
    }

    #second #button {
        width: 85%;
        height: 16%;
        font-size: 9px;
        background-color: #C0CE55;
        border: #9CB22E solid 1px;
        margin-left: auto;
        margin-right: auto;

        position: relative;
        top: 32%;
    }

    #second #rectangle3 {
        width: 0px;
        height: 0px;
        border: 14px solid #f2f2f2;
        border-right-color: #e6e6e6;
        border-bottom-color: #e6e6e6;

        position: relative;
        top: 46%;
        left: 81%;
    }
/* ------------------------------------------- */
    /* 底部下载图标样式 */
    #download {
        width: 100%;
        height: 15%;
        position: relative;
        bottom: 0%;
    }

    #download #downloadImage {
        background-image: url(@/assets/images/download.png);
        background-repeat: no-repeat;
        background-size: contain;
        background-position: center;
        width: 35%;
        height: 40%;
    }

    #download #downIcon {
        width: 96%;
        height: 50%;

        display: flex;  
        background-color: #cccccc;  
        opacity: 50%;
        /* justify-content: space-evenly;  元素及边缘间隔完全均等 */

        position: relative;
        top: -32%;
        left: 0%;
        padding-left: 0%;
        border-radius: 5px;
        box-shadow: 0 0 90px rgba(0, 0, 0, 0.2);
    }

    #download #downIcon li:nth-child(1) {
        background-image: url(@/assets/images/windows.gif);
    }

    #download #downIcon li:nth-child(2) {
        background-image: url(@/assets/images/mac.gif);
    }

    #download #downIcon li:nth-child(3) {
        background-image: url(@/assets/images/linux.gif);
    }

    #download #downIcon li:nth-child(4) {
        background-image: url(@/assets/images/android.gif);
    }

    #download #downIcon li:nth-child(5) {
        background-image: url(@/assets/images/ios.gif);
    }

    #download #downIcon li{
        list-style-type: none;
        background-repeat: no-repeat;
        /* background-position: center; */
        background-size: contain;
        /* display: inline-block; */

        width: 6%;
        /* margin-left: 10%; */
        margin-right: 3%;
        border-radius: 3px;
        box-shadow: 0 0 -1px rgba(0, 0, 0, 0.2);
    }
/* ------------------------------------------- */
    /* 底部小图标样式 */
    #bookmark {
        display: flex;
        width: 100%;
        height: 10%;

        position: relative;
        top: -3%;
    }

    #bookmark #downWord {
        list-style-type: none;
        display: flex;
        background-color: #808080;
        width: 45%;
        height: 80%;
        padding-left: 1%;

        position: relative;
        top: -68%;
        left: -0.2%;
    }

    #bookmark #downWord li {
        color: white;
        font-size: 9px;
        
        display: flex;
        align-items: center;     
        justify-content: center; 
        margin-right: 5%;
        
        height: 100%;           
        width: 100%;           
    }

    #bookmark #icons {
        width: 60%;
        position: relative;
        top: -45%;
        display: flex;
    }

    #bookmark .icon {
        display: flex;
        font-size: 6px;
    }

    #bookmark .iconImage {
        width: 35%;
        height: 60%;
        position: relative;
        bottom: -40%;
    }
   
    #bookmark .iconWord {
        position: relative;
        top: 30%;
    }

    #bookmark #helpIcon {
        margin-right: 10%;
    }
    
/* ------------------------------------------- */
    /* 底部脚注样式 */
    #footer {
        color: #6e6f6f;
        font-size: 8px;
        line-height: 7px;
        text-align: right;

        position: relative;
        bottom: 2%;
        margin-right: 1%;
    }
</style>
