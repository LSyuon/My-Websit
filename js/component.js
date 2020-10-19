let componentData = {
    "information":{
        props:['title','information'],
        template: `
            <div class="information">
                <h2 class="title">{{title}}</h2>
                <ul class="informationBox">
                    <li class="informationItem gridBox boxCenter" v-for='(item,index) in information'>
                        <div class="iconBox gridCell">
                            <i class="iconfont" v-html="item.icon"></i>
                        </div>
                        <div class="inforBox gridCell">
                            <h3 class="title">{{item.title}}</h3>
                            <p class="infor">{{item.infor}}</p>
                        </div>
                    </li>
                </ul>
            </div>
        `
    },
    "contact":{
        props:['title','contact'],
        template:`
        <div class="contact">
            <h2 class="title">{{title}}</h2>
            <ul class="contactBox">
                <li class="contactItem gridBox boxCenter" v-for="(item,index) in contact">
                    <div class="titleBox gridCell">
                        <h3 class="title">{{item.title}}</h3>
                    </div>
                    <div class="inforBox gridCell">
                        <p class="infor" v-html="item.infor"></p>
                    </div>
                </li>
            </ul>
        </div>
        `
    },
    "skill":{
        props: ['title','skill'],
        template: `
        <div class="skill">
            <h2 class="title">{{title}}</h2>
            <ul class="skillBox">
                <li class="skillItem gridBox boxCenter" v-for="(item,index) in skill"><span>{{item.title}}</span></li>
            </ul>
        </div>
        `
    },
    "skillValue":{
        props: ['title','skill','postscript'],
        template: `
        <div class="skill">
            <h2 class="title">{{title}}</h2>
            <ul class="skillBox2">
                <li class="skillItem gridBox boxCenter" v-for="(item,index) in skill">
                    <div class="titleBox gridCell">
                        <h3 class="title">{{item.title}}</h3>
                    </div>
                    <div class="proficiencyBox gridCell">
                        <div class="proficiency" :style="{width:item.value}"></div>
                    </div>
                </li>
            </ul>
            <p style="color:#ffffff;font-size:16px;margin-top:10px;">备注 :{{postscript}}</p>
        </div>
        `
    },
    "resumeStyle1":{
        props:['data'],
        template:`
        <div class="about resume">
            <div class="titleBox gridBox boxCenter">
                <div class="iconBox gridCell">
                    <i class="iconfont" v-html="data.icon"></i>
                </div>
                <div class="title gridCell">
                    <h2 class="title">{{data.title}}</h2>
                </div>
            </div>
            <div class="contentBox">
                <p class="content" v-html="data.infor"></p>
            </div>
        </div>
        `
    },
    "resumeStyle2":{
        props:['data'],
        template:`
        <div class="about resume">
            <div class="titleBox gridBox boxCenter">
                <div class="iconBox gridCell">
                    <i class="iconfont" v-html="data.icon"></i>
                </div>
                <div class="title gridCell">
                    <h2 class="title">{{data.title}}</h2>
                </div>
            </div>
            <div class="contentBox">
                <ul class="itemBox gridBox boxCenter">
                    <li class="item gridCell" v-for="(item,index) in data.item">
                        <h3 class="title">
                            <strong class="title">{{item.title}}</strong>
                            <span class="infor">{{item.infor}}</span>
                        </h3>
                    </li>
                </ul>
                <p class="content" v-html="data.infor"></p>
            </div>
        </div>
        `
    },
    "navBtn":{
        data:function(){
            return{
                isClick:false
            }
        },
        props:['navBtnClick','navBtnClose'],
        template:`
            <div class="navBtn" v-bind:class="{click:isClick}" v-on:click='btnClick(navBtnClick,navBtnClose,$event)'>
                <span class="line"></span>
            </div>
        `,
        methods:{
            btnClick: function(navBtnClick,navBtnClose,event){
                if(!this.isClick){
                    navBtnClick && navBtnClick();
                }else if(this.isClick){
                    navBtnClose && navBtnClose();
                }
                this.isClick = !this.isClick;
            }
        }
    },
}