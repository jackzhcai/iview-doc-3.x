<template>
    <i-article>
        <article>
            <h1>关于 iView</h1>
            <p>iView 是一套基于 Vue.js 的开源 UI 组件库，主要服务于 PC 界面的中后台产品。</p>
            <inAnchor title="特性" h2></inAnchor>
            <ul>
                <li>高质量、功能丰富</li>
                <li>友好的 API ，自由灵活地使用空间</li>
                <li>细致、漂亮的 UI</li>
                <li>事无巨细的文档</li>
                <li>可自定义主题</li>
            </ul>
            <inAnchor title="谁在使用" h2></inAnchor>
            <ul>
                <li><a href="http://www.talkingdata.com/" target="_blank">TalkingData</a></li>
                <li><a href="http://www.alibaba.com/" target="_blank">阿里巴巴</a></li>
                <li><a href="https://www.baidu.com/" target="_blank">百度</a></li>
                <li><a href="https://www.tencent.com/" target="_blank">腾讯</a></li>
                <li><a href="https://www.toutiao.com/" target="_blank">今日头条</a></li>
                <li><a href="http://www.jd.com/" target="_blank">京东</a></li>
                <li><a href="http://www.didichuxing.com/" target="_blank">滴滴出行</a></li>
                <li><a href="http://www.meituan.com/" target="_blank">美团</a></li>
                <li><a href="http://www.sina.com.cn/" target="_blank">新浪</a></li>
                <li><a href="https://www.lenovo.com.cn/" target="_blank">联想</a></li>
                <li><a href="http://www.iflytek.com/" target="_blank">科大讯飞</a></li>
                <li><a href="https://www.ly.com/" target="_blank">同程艺龙</a></li>
            </ul>
            <blockquote>
                如果你的公司和产品使用了iView，欢迎到 <a href="https://github.com/iview/iview/issues/2143" target="_blank">这里</a> 留言。
            </blockquote>
            <inAnchor title="安装" h2></inAnchor>
            <p>使用 npm</p>
            <i-code lang="auto" bg>{{ code.introduce.install }}</i-code>
            <p>或使用 &lt;script&gt; 全局引用</p>
            <i-code lang="html" bg>{{ code.introduce.script }}</i-code>
            <inAnchor title="示例" h2></inAnchor>
            <i-code lang="html" bg>{{ code.introduce.demo }}</i-code>
            <p>效果</p>
            <Slider v-model="value" range></Slider>
            <inAnchor title="版本" h2></inAnchor>
            <p>
                <a href="https://www.npmjs.com/package/iview" target="_blank">
                    <img src="https://img.shields.io/npm/v/iview.svg?style=flat-square">
                </a>
            </p>
            <inAnchor title="兼容" h2></inAnchor>
            <ul>
                <li>支持 Vue.js 2.x</li>
                <li>支持 Vue.js 1.x <a href="http://v1.iviewui.com">查看 1.0 文档</a></li>
                <li>支持服务端渲染</li>
                <li>支持 Nuxt.js</li>
                <li>支持 TypeScript</li>
                <li>支持 <a href="http://electron.atom.io/" target="_blank">Electron</a></li>
                <li>大部分组件和功能支持 IE9 及以上浏览器，部分组件和功能不支持 IE</li>
            </ul>
            <inAnchor title="相关链接" h2></inAnchor>
            <ul>
                <li>
                    <a href="http://cn.vuejs.org/" target="_blank">Vue官方文档</a>
                </li>
                <li>
                    <a href="http://webpack.github.io/" target="_blank">Webpack</a>
                </li>
                <li>
                    <a href="https://git.oschina.net/icarusion/iview" target="_blank">码云</a>
                </li>
            </ul>
        </article>
    </i-article>
</template>
<script>
    import iArticle from '../../components/article.vue';
    import iCode from 'iCode';
    import Code from '../../code/guide';
    import inAnchor from '../../components/anchor.vue';

    export default {
        components: {
            iArticle,
            iCode,
            inAnchor
        },
        data () {
            return {
                code: Code,
                value: [20, 50]
            }
        },
        methods: {

        }
    }
</script>