<template>
    <i-article>
        <article>
            <h1>Installation</h1>
            <inAnchor title="CDN" h2></inAnchor>
            <p>Get the latest version of iView from <a href="https://unpkg.com/iview/" target="_blank">unpkg.com/iview</a>. Use CDN to deliver compiled JS and CSS to your project:</p>
            <i-code lang="html" bg>{{ code.install.cdn }}</i-code>
            <inAnchor title="Get Started" h3></inAnchor>
            <p>It's easy to get started with CDN. Copy the following code or go to <a href="http://output.jsbin.com/libihed" target="_blank">Online Testing Bin</a>。</p>
            <i-code lang="auto" bg>{{ code.install.demo }}</i-code>
            <inAnchor title="npm" h2></inAnchor>
            <p>Install iView with the node package manager. It can work with webpack and ES2015 very well.</p>
            <i-code lang="auto" bg>{{ code.install.install }}</i-code>
            <p>If you wish to use npm and webpack, please continue to read the <router-link to="/docs/guide/start">next paragraph</router-link>.</p>
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
