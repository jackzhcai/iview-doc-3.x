<template>
    <i-article>
        <article>
            <h1>全局配置</h1>
            <p>使用 iView 3 时，可以进行全局配置组件的一些属性。</p>
            <p>目前只支持配置 <code>transfer</code> 和 <code>size</code> 两个属性。组件会优先使用 prop 设置的属性，如果未设置，再使用全局配置。</p>
            <ul>
                <li>
                    <strong>transfer</strong>：所有带浮层的组件，是否将浮层放置在 body 内，默认为不设置，详见各组件默认的 transfer 值。可选值为 <code>true</code> 或 <code>false</code>。
                </li>
                <li>
                    <strong>size</strong>：所有带有 size 属性的组件的尺寸，默认为不设置，详见各组件默认的 size 值。可选值为 <code>default</code>、<code>small</code> 或 <code>large</code>。
                </li>
            </ul>
            <p>用法如下：</p>
            <i-code lang="auto" bg>{{ code.global.example }}</i-code>
        </article>
    </i-article>
</template>
<script>
    import iArticle from '../../components/article.vue';
    import iCode from 'iCode';
    import Code from '../../code/guide';
    import inAnchor from '../../components/anchor.vue';
    import Study from '../../components/study.vue';

    export default {
        components: {
            iArticle,
            iCode,
            inAnchor,
            Study
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