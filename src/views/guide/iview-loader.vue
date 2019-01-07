<template>
    <i-article>
        <article>
            <h1>iView Loader</h1>
            <inAnchor title="用途" h2></inAnchor>
            <p>统一 iView 标签书写规范，所有标签都可以使用首字母大写的形式，包括 Vue 限制的两个标签 <code>Switch</code> 和 <code>Circle</code>。</p>
            <p>虽然不推荐，但通过 loader 选项配置，可以开启所有标签前缀的写法了，比如 <code>i-date-picker</code>。</p>
            <p><a href="https://cn.vuejs.org/v2/style-guide/#模板中的组件名大小写-强烈推荐" target="_blank">为什么推荐在单文件组件和字符串模板中组件名应该总是 PascalCase 的。</a></p>
            <inAnchor title="使用方法" h2></inAnchor>
            <inAnchor title="安装" h3></inAnchor>
            <p>首先通过 npm 安装 iview-loader</p>
            <i-code lang="auto" bg>{{ code.loader.install }}</i-code>
            <inAnchor title="配置" h3></inAnchor>
            <p>配置 webpack，改写平时 vue-loader 的配置，形如：</p>
            <i-code bg>{{ code.loader.webpack }}</i-code>
            <inAnchor title="说明" h3></inAnchor>
            <ul>
                <li>可以直接写 <code>&lt;Switch&gt;</code> 和 <code>&lt;Circle&gt;</code> 这两个标签；</li>
                <li>参数 <code>prefix</code> 设置为 <code>true</code> 后，所有 iView 组件标签名都可以使用前缀 <code>i-</code>，例如 <code>&lt;i-row&gt;</code>、<code>&lt;i-select&gt;</code></li>
            </ul>
            <p>完整的标签名如下：</p>
            <i-code bg>{{ code.loader.tags }}</i-code>
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
                code: Code
            }
        },
        methods: {

        }
    }
</script>