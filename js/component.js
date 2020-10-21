let componentModule = {
    "pcNav":{
        props:["data"],
        template:`
        <nav class="pc_nav pageContent">
            <ul class="yjBox">
                <li v-for="(item,index) in data">
                    <a href="javascript:;" class="yjTitle">{{item.name}}</a>
                    <div class="slideBox">
                        <ul class="ejBox">
                            <li>
                                <a href="javascript:;" class="ejTitle">二级导航</a>
                            </li>
                            <li>
                                <a href="javascript:;" class="ejTitle">二级导航</a>
                            </li>
                            <li>
                                <a href="javascript:;" class="ejTitle">二级导航</a>
                            </li>
                            <li>
                                <a href="javascript:;" class="ejTitle">二级导航</a>
                            </li>
                        </ul>
                    </div>
                </li>
            </ul>
        </nav>
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
    "footerNav":{
        props:["data"],
        template:`
        <div class="footerNav">
            <ul class="yjBox">
                <li v-for="(item,index) in data">
                    <a href="javascript:;" class="yjTitle">{{item.name}}</a>
                    <div class="slideBox">
                        <ul class="ejBox">
                            <li>
                                <a href="javascript:;" class="ejTitle">二级导航</a>
                            </li>
                            <li>
                                <a href="javascript:;" class="ejTitle">二级导航</a>
                            </li>
                            <li>
                                <a href="javascript:;" class="ejTitle">二级导航</a>
                            </li>
                            <li>
                                <a href="javascript:;" class="ejTitle">二级导航</a>
                            </li>
                        </ul>
                    </div>
                </li>
            </ul>
        </div>
        `
    },
    "tabNav":{
        props:["proClass","proList"],
        template:`
        <div class="tabBox">
            <ul class="tabNav">
                <li class="nav_item" v-for="(item,index) in proClass">
                    <a href="javascript:;" target="_self" class="tab_link">
                        <h3>{{item.name}}</h3>
                        <p>{{item.summary}}</p>
                    </a>
                    <a href="javascript:;" target="_self" class="tab_link hover">
                        <h3>{{item.name}}</h3>
                        <p>{{item.summary}}</p>
                    </a>
                </li>
            </ul>
            <div class="tabContent">
                <div class="content_item">
                    <div class="proList">
                        <div class="proItem" v-for="(item,index) in proList">
                            <div class="proBox">
                                <div class="imgBox">
                                    <img :src="item.image" alt="item.name">
                                </div>
                                <div class="contentBox">
                                    <div class="slideBox">
                                        <div class="textBox">
                                            <h3 class="proTitle">{{item.name}}</h3>
                                            <a :href="item.url" class="proBtn">+</a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="content_item">222</div>
                <div class="content_item">333</div>
                <div class="content_item">444</div>
            </div>
        </div>
        `
    }
}