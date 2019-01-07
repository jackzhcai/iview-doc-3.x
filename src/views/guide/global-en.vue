<template>
    <i-article>
        <article>
            <h1>Global Options</h1>
            <p>When using iView 3, some properties of the global configuration component can be made.</p>
            <p>Currently only supports the <code>transfer</code> and <code>size</code> properties. The component will use the properties set by prop first, and if not, then use the global configuration.</p>
            <ul>
                <li>
                    <strong>transfer</strong>: All components with floating layers, whether the floating layer is placed in the body, the default is not set, see the default transfer value of each component. The optional value is <code>true</code> or <code>false</code>.
                </li>
                <li>
                    <strong>size</strong>: The size of all components with the size property is not set by default. See the default size value of each component for details. The options are <code>default</code>, <code>small</code>, or <code>large</code>.
                </li>
            </ul>
            <p>Usage is as follows:</p>
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