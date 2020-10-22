let componentModule = {
    pcNav: {
        props: ["data"],
        template: `
        <nav class="pc_nav pageContent">
            <ul class="yjBox">
                <li v-for="(item,index) in data">
                    <a href="javascript:;" class="yjTitle">{{item.name}}</a>
                    <div class="slideBox">
                        <ul class="ejBox">
                            <li v-for="(item,index) in item.children">
                                <a href="javascript:;" class="ejTitle">{{item.name}}</a>
                            </li>
                        </ul>
                    </div>
                </li>
            </ul>
        </nav>
        `
    },
    navBtn: {
        props: ["navBtnClick", "navBtnClose"],
        data: function () {
            return {
                isClick: false
            };
        },
        template: `
            <div class="navBtn" v-bind:class="{click:isClick}" v-on:click="btnClick(navBtnClick,navBtnClose,$event)">
                <span class="line"></span>
            </div>
        `,
        methods: {
            btnClick: function (navBtnClick, navBtnClose, event) {
                if (!this.isClick) {
                    navBtnClick && navBtnClick();
                } else if (this.isClick) {
                    navBtnClose && navBtnClose();
                }
                this.isClick = !this.isClick;
            }
        }
    },
    moNav: {
        props: ["data"],
        data:function(){
            return{
                navShow:false
            }
        },
        template: `
        <div class="mo_menu">
            <div class="navBtn" v-bind:class="{click:navShow}" v-on:click="ifShow">
                <span class="line"></span>
            </div>
            <div class="mo_navBox" id="mo_navBox" v-bind:class="{hide:!navShow}" style="display:none;">
                <div class="mo_navBg"></div>
                <nav class="mo_nav">
                    <div class="navHideBtn"  v-on:click="ifShow">
                        <i>&gt;</i>
                    </div>
                    <ul class="yjBox">
                        <li v-for="(item,index) in data">
                            <a href="javascript:;" class="yjTitle">{{item.name}}</a>
                            <div class="slideBox" v-if="item.children != null">
                                <ul class="ejBox">
                                    <li v-for="(item,index) in item.children">
                                        <a href="javascript:;" class="ejTitle">{{item.name}}</a>
                                    </li>
                                </ul>
                            </div>
                        </li>
                    </ul>
                </nav>
            </div>
        </div>
        `,
        methods: {
            btnClick: function () {
                document.querySelector('header .mo_navBox').classList.add('hide');
                setTimeout(function(){
                    document.querySelector('header .mo_navBox').style.display = "none";
                },500);
            },
            ifShow:function(){
                this.navShow = !this.navShow;
                if (!this.navShow) {
                    setTimeout(function(){
                        document.getElementById("mo_navBox").style.display = "none";
                    },500);
                }else{
                    document.getElementById("mo_navBox").style.display = "block";
                }
            }
        }
    },
    footerNav: {
        props: ["data"],
        template: `
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
    tabNav: {
        props: ["proClass", "proList","proList2"],
        template: `
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
                                <a :href="item.url" class="proLink"></a>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="content_item">
                    <div class="proList">
                        <div class="proItem" v-for="(item,index) in proList2">
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
                <div class="content_item">
                    <div class="proList">
                        <div class="proItem" v-for="(item,index) in proList2">
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
            </div>
        </div>
        `
    }
};