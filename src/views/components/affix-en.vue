<style scoped>
    article{
        min-height: 1500px;
    }
    .demo-affix{
        display: inline-block;
        color: #fff;
        padding: 10px 30px;
        text-align: center;
        background: rgba(0, 153, 229, .9);
    }
</style>
<template>
    <i-article>
        <article>
            <h1>Affix</h1>
            <inAnchor title="Brief Introduction" h2></inAnchor>
            <p>By using Affix, user can fix the content at the screen position and it won't scroll with page scrolling. Common Usage: Sidebar etc.</p>
            <inAnchor title="Examples" h2></inAnchor>
            <Demo title="Basic Usage">
                <div slot="demo">
                    <Affix>
                        <span class="demo-affix">Fixed at the top</span>
                    </Affix>
                </div>
                <div slot="desc">
                    <p>Simple Use: Fixed at the top when element is invisible.</p>
                </div>
                <i-code lang="html" slot="code">{{ code.base }}</i-code>
            </Demo>
            <Demo title="Offset">
                <div slot="demo">
                    <Affix :offset-top="50">
                        <span class="demo-affix">Fixed at the top 50px from the top</span>
                    </Affix>
                </div>
                <div slot="desc">
                    <p>Fixed after rolling a certain distance.</p>
                </div>
                <i-code lang="html" slot="code">{{ code.top }}</i-code>
            </Demo>
            <Demo title="Fixed at the bottom">
                <div slot="demo">
                    <Affix :offset-bottom="20">
                        <span class="demo-affix">Fix at the bottom 20px</span>
                    </Affix>
                </div>
                <div slot="desc">
                    <p>Fixed at the under screen area. Reduce the height of the browser window to see the effect.</p>
                    <p>Attention，Only one of <code>offset-top</code> and <code>offset-bottom</code> can be set，If you set both，<code>offset-top</code> will be used.</p>
                </div>
                <i-code lang="html" slot="code">{{ code.bottom }}</i-code>
            </Demo>
            <Demo title="Callback when affix state is changed">
                <div slot="demo">
                    <Affix :offset-top="100" @on-change="change">
                        <span class="demo-affix">Fix the position at the top of 100px at the top</span>
                    </Affix>
                </div>
                <div slot="desc">
                    <p>When affix state is changed，a event will be emitted.</p>
                </div>
                <i-code lang="html" slot="code">{{ code.change }}</i-code>
            </Demo>

            <ad></ad>

            <div class="api">
                <inAnchor title="API" h2></inAnchor>
                <inAnchor title="Affix props" h3></inAnchor>
                <table>
                    <thead>
                        <tr>
                            <th>Property</th>
                            <th>Description</th>
                            <th>Type</th>
                            <th>Default</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>offset-top</td>
                            <td>Pixels to offset from top when calculating position of scroll.</td>
                            <td>Number</td>
                            <td>0</td>
                        </tr>
                        <tr>
                            <td>offset-bottom</td>
                            <td>Pixels to offset from bottom when calculating position of scroll.</td>
                            <td>Number</td>
                            <td>-</td>
                        </tr>
                    </tbody>
                </table>
                <inAnchor title="Affix events" h3></inAnchor>
                <table>
                    <thead>
                        <tr>
                            <th>Event Name</th>
                            <th>Description</th>
                            <th>Return Value</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>on-change</td>
                            <td>Emit when affix state is changed</td>
                            <td>true | false</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </article>
    </i-article>
</template>
<script>
    import iArticle from '../../components/article.vue';
    import iCode from 'iCode';
    import Demo from '../../components/demo.vue';
    import Code from '../../code/affix';
    import inAnchor from '../../components/anchor.vue';

    export default {
        components: {
            iArticle,
            iCode,
            Demo,
            inAnchor
        },
        data () {
            return {
                code: Code
            }
        },
        methods: {
            change (status) {
                this.$Message.info(`Status: ${status}`);
            }
        }
    }
</script>