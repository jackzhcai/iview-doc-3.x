<style lang="less" scoped>
    @import "../styles/navigate.less";
</style>
<style lang="less">
    @import "../styles/asd.less";
</style>
<template>
    <div class="navigate">
        <template v-if="lang === 'zh-CN'">
            <a v-for="item in app.adList1" :href="item.link" target="_blank" class="asd asd-mb" :key="item.id" @click="handleAsideAd(item.id)">
                <div class="asd-main">
                    <img :src="item.img">
                </div>
            </a>
            <Affix :offset-top="64" class="asd-affix" @on-change="handleChangeAdAffix">
                <Carousel v-model="adCarousel" autoplay :autoplay-speed="5000" radius-dot v-if="app.adList4.length && adCarouselShow" arrow="never">
                    <CarouselItem v-for="item in carouselList" :key="item.id">
                        <a :href="item.link" target="_blank" class="asd asd-mb" @click="handleAsideAd(item.id)">
                            <div class="asd-main asd-main-no-opacity">
                                <img :src="item.img">
                            </div>
                        </a>
                    </CarouselItem>
                </Carousel>
            </Affix>
        </template>
        <!--<div class="asd-car" v-else>-->
            <!--<iframe src="https://file.iviewui.com/ad6.html" frameborder="0" width="100%" height="100%"></iframe>-->
        <!--</div>-->
        <Menu width="auto" :active-name="activeKey" v-if="type === 'guide'">
            <Menu-item v-for="item in navigate.guide" :key="item.path" :name="item.path" :to="handleGoToMenu(item.path)">
                <template v-if="lang === 'zh-CN'">{{ item.title }}</template>
                <template v-else>{{ item.titleEn }}</template>
            </Menu-item>
        </Menu>
        <Menu width="auto" :active-name="activeKey" v-if="type === 'component'">
            <Menu-item v-for="item in navigate.beforeComponents" :key="item.path" :name="item.path" :to="handleGoToMenu(item.path)" :target="item.target">
                <template v-if="item.title !== '更新日志'">
                    <template v-if="lang === 'zh-CN'">{{ item.title }}</template>
                    <template v-else>{{ item.titleEn }}</template>
                </template>
                <template v-if="item.title === '更新日志'">
                    <Badge :dot="showDot">
                        <template v-if="lang === 'zh-CN'">{{ item.title }}</template>
                        <template v-else>{{ item.titleEn }}</template>
                    </Badge>
                </template>
            </Menu-item>
            <!--<Button type="warning" v-if="lang === 'zh-CN'" icon="heart" size="small" style="width:130px;margin:15px 0 15px 15px;" @click="handleDonate">{{ $t('index.donate') }}</Button>-->
            <div class="navigate-group">{{ $t('index.component') }}</div>
            <Menu-group v-for="item in navigate.components" :key="item.type" :title="lang === 'zh-CN' ? item.title : item.type">
                <Menu-item v-for="component in item.list" :key="component.path" :name="component.path" :to="handleGoToMenu(component.path)">
                    <i class="ivu-icon" :class="'ivu-icon-' + component.icon"></i>
                    <template v-if="lang === 'zh-CN'">
                        {{ component.title.split(' ')[0] }}
                        <span class="navigate-group-span">{{ component.title.split(' ')[1] }}</span>
                    </template>
                    <template v-else>{{ component.title.split(' ')[0] }}</template>
                </Menu-item>
            </Menu-group>
        </Menu>
        <Menu width="auto" :active-name="activeKey" v-if="type === 'practice'">
            <Menu-item v-for="item in navigate.practice" :key="item.path" :name="item.path" :to="handleGoToMenu(item.path)">
                <template v-if="lang === 'zh-CN'">{{ item.title }}</template>
                <template v-else>{{ item.titleEn }}</template>
            </Menu-item>
        </Menu>
        <Menu width="auto" :active-name="activeKey" v-if="type === 'live'">
            <Menu-item v-for="item in navigate.live" :key="item.path" :name="item.path" :to="handleGoToMenu(item.path)">
                <template v-if="lang === 'zh-CN'">{{ item.title }}</template>
                <template v-else>{{ item.titleEn }}</template>
            </Menu-item>
        </Menu>
        <Modal v-model="showAd" width="900" title="《Vue.js 实战》现已开售" footer-hide>
            <div class="i-article">
                <Row>
                    <Col span="10">
                        <img src="../images/vue-book.png" style="display: block;width: 90%;margin: 0 auto;">
                    </Col>
                    <Col span="14">
                        <div style="padding: 32px">
                            <Alert>
                                《Vue.js 实战》
                                <div slot="desc">
                                    <p style="margin-top: 6px">本书由 Vue.js 作者 <strong>尤雨溪</strong> 作推荐序，TalkingData 研发副总裁马骥、W3cplus.com 站长 大漠、在线回声前端技术专家 justjavac（迷渡）、laravel-china.org 站长 Summer 联合推荐。</p>
                                    <p style="margin-top: 6px">作者：TalkingData 可视化架构师 & iView 作者 梁灏（Aresn）</p>
                                    <p style="margin-top: 6px">图书介绍：本书以 Vue.js 2.0 为基础，以项目实战的方式来引导读者渐进式学习 Vue.js。通过本书的学习，读者能够掌握 Vue.js 框架主要 API 的使用方法、自定义指令、组件开发、单文件组件、Render 函数、使用 Webpack 开发可复用的单页面富应用等。本书特点是示例丰富，侧重实战，适用于刚接触或即将接触 Vue.js 的开发者，也适用于对 Vue.js 有过开发经验，但需要进一步提升的开发者。</p>
                                </div>
                            </Alert>
                            <div style="margin-top: 12px;">
                                <Row :gutter="16">
                                    <i-col span="8">
                                        <Button icon="ios-cart" type="warning" size="large" long @click="handleBuy('taobao')">天猫购买</Button>
                                    </i-col>
                                    <i-col span="8">
                                        <Button icon="ios-cart" type="error" size="large" long @click="handleBuy('jd')">京东购买</Button>
                                    </i-col>
                                    <i-col span="8">
                                        <Button icon="ios-cart" type="info" size="large" long @click="handleBuy('dangdang')">当当购买</Button>
                                    </i-col>
                                    <!--<i-col span="6">-->
                                        <!--<Button icon="ios-videocam" type="info" size="large" long @click="handleBuy('video')">系列视频教程</Button>-->
                                    <!--</i-col>-->
                                </Row>
                            </div>
                        </div>
                    </Col>
                </Row>
            </div>
        </Modal>
    </div>
</template>
<script>
    import navigate from '../config/navigate';
    import version from '../config/config';
    import bus from './bus';
    import adSend from './ad-send.vue';

    function randomSort(a, b) { return Math.random() > 0.5 ? -1 : 1; }

    export default {
        inject: ['app'],
        components: { adSend },
        props: {
            type: {
                type: [String, Number]
            }
        },
        data () {
            return {
                navigate: navigate,
                showDot: false,
                activeKey: this.$route.path,
                lang: this.$lang,
                showAd: false,
                adCarousel: 0,
                adCarouselShow: false
            }
        },
        computed: {
            carouselList () {
                const list = this.app.adList4 || [];
                return list.sort(randomSort);
            }
        },
        methods: {
            handleDonate () {
                bus.$emit('on-donate-show');
            },
            handleSelect (path) {
                if (this.lang === 'en-US') path += '-en';
                this.$nextTick(() => {
                    this.$router.push(path);
                });
            },
            handleAd () {
//                _hmt.push(['_trackEvent', 'vue-juejin', 'click']);
//                this.$router.push('/live');
//                this.showAd = true;
                window.open('https://juejin.im/welcome/frontend?utm_source=iview&utm_medium=banner&utm_content=huoyue&utm_campaign=q4_website');
            },
            handleAdBmqb () {
//                _hmt.push(['_trackEvent', 'vue-bmqb', 'click']);
                window.open('https://www.bmqb.com/a/jobs?from=iview');
            },
            handleBuy (type) {
                if (type === 'taobao') {
                    window.open('https://detail.tmall.com/item.htm?id=559480603657');
                } else if (type === 'jd') {
                    window.open('https://item.jd.com/12215519.html');
                } else if (type === 'video') {
                    window.open('https://segmentfault.com/ls/1650000011074057');
                } else if (type === 'dangdang') {
                    window.open('http://product.dangdang.com/25180286.html');
                }
            },
            handleGoToMenu (name) {
                if (this.lang === 'zh-CN') {
                    return name;
                } else {
                    return name + '-en';
                }
            },
            handleAsideAd (name) {
//                _hmt.push(['_trackEvent', name, 'click']);
            },
            handleChangeAdAffix (status) {
                this.adCarousel = 0;
                this.adCarouselShow = status;
            }
        },
        created () {
            this.lang = this.$lang;
            const path = this.lang === 'zh-CN' ? this.$route.path : this.$route.path.split('-en')[0];
            this.activeKey = path;
        },
        mounted () {
            // 判断是否已阅读更新日志
            const dotVersion = window.localStorage.getItem('version');
            if (dotVersion) {
                this.showDot = dotVersion < version.version;
            } else {
                this.showDot = true;
            }
        }
    }
</script>