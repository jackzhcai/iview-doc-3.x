<style>
    .demo-spin-container{
        display: inline-block;
        width: 200px;
        height: 100px;
        position: relative;
        border: 1px solid #eee;
    }
    .demo-spin-icon-load{
        animation: ani-demo-spin 1s linear infinite;
    }
    @keyframes ani-demo-spin {
        from { transform: rotate(0deg);}
        50%  { transform: rotate(180deg);}
        to   { transform: rotate(360deg);}
    }
    .demo-spin-col{
        height: 100px;
        position: relative;
        border: 1px solid #eee;
    }
    .demo-spin-article{
        width: 400px;
        height: 200px;
        padding: 10px;
        position: relative;
        border: 1px solid #eee;
        text-align: center;
    }
    .demo-spin-article h3{
        font-size: 22px;
    }
    .demo-spin-article address{
        color: #999;
        font-style: normal;
        font-size: 14px;
    }
    .demo-spin-article p{
        font-size: 16px;
    }
</style>
<template>
    <i-article>
        <article>
            <h1>Spin</h1>
            <inAnchor title="Brief Introduction" h2></inAnchor>
            <p>When part of the page is waiting for asynchronous data or during a rendering process, an appropriate loading animation can effectively alleviate users' inquietude.</p>
            <inAnchor title="Examples" h2></inAnchor>
            <Demo title="Basic Usage">
                <div slot="demo">
                    <Spin></Spin>
                </div>
                <div slot="desc">
                    <p>A simple loading status.</p>
                </div>
                <i-code lang="html" slot="code">{{ code.base }}</i-code>
            </Demo>
            <Demo title="Size">
                <div slot="demo">
                    <Row>
                        <Col span="8">
                            <Spin size="small"></Spin>
                        </Col>
                        <Col span="8">
                            <Spin></Spin>
                        </Col>
                        <Col span="8">
                            <Spin size="large"></Spin>
                        </Col>
                    </Row>
                </div>
                <div slot="desc">
                    <p>Set the <code>size</code> to <code>large</code> or <code>small</code> to use large/small size of spin, by default the spin's size is medium.</p>
                </div>
                <i-code lang="html" slot="code">{{ code.size }}</i-code>
            </Demo>
            <Demo title="Centered fixed">
                <div slot="demo">
                    <div class="demo-spin-container">
                        <Spin fix></Spin>
                    </div>
                </div>
                <div slot="desc">
                    <p>Vertical center fixed inside the container, you need to set a <code>relative</code> or <code>absolute</code> style in parent.</p>
                </div>
                <i-code lang="html" slot="code">{{ code.fix }}</i-code>
            </Demo>
            <Demo title="Customized description">
                <div slot="demo">
                    <Row>
                        <Col class="demo-spin-col" span="8">
                            <Spin fix>加载中...</Spin>
                        </Col>
                        <Col class="demo-spin-col" span="8">
                            <Spin fix>
                                <Icon type="ios-loading" size=18 class="demo-spin-icon-load"></Icon>
                                <div>Loading</div>
                            </Spin>
                        </Col>
                        <Col class="demo-spin-col" span="8">
                            <Spin fix>
                                <div class="loader">
                                    <svg class="circular" viewBox="25 25 50 50">
                                        <circle class="path" cx="50" cy="50" r="20" fill="none" stroke-width="5" stroke-miterlimit="10"></circle>
                                    </svg>
                                </div>
                            </Spin>
                        </Col>
                    </Row>
                </div>
                <div slot="desc">
                    <p>Customized description content. You can set it as a simple text, or a very complicated animation.</p>
                </div>
                <i-code lang="html" slot="code">{{ code.custom }}</i-code>
            </Demo>
            <Demo title="State switch">
                <div slot="demo">
                    <div class="demo-spin-article">
                        <h3>登金陵凤凰台</h3>
                        <address>李白</address>
                        <article>
                            <p>凤凰台上凤凰游，凤去台空江自流。</p>
                            <p>吴宫花草埋幽径，晋代衣冠成古丘。</p>
                            <p>三山半落青天外，二水中分白鹭洲。</p>
                            <p>总为浮云能蔽日，长安不见使人愁。</p>
                        </article>
                        <Spin size="large" fix v-if="spinShow"></Spin>
                    </div>
                    <br>
                    Switch status：<i-switch @on-change="spinShow = !spinShow"></i-switch>
                </div>
                <div slot="desc">
                    <p>Controls the display and disappearance of the spin.</p>
                </div>
                <i-code lang="html" slot="code">{{ code.status }}</i-code>
            </Demo>
            <Demo title="Full screen loading">
                <div slot="demo">
                    <Button type="primary" @click="handleSpinShow">Full screen loading for 3 seconds</Button>
                    <Button type="primary" @click="handleSpinCustom">Customize display content</Button>
                </div>
                <div slot="desc">
                    <p>Use the <code>$Spin</code> method to load globally.</p>
                    <p>You can use the Render function to customize the display content.</p>
                </div>
                <i-code lang="html" slot="code">{{ code.$spin }}</i-code>
            </Demo>

            <ad></ad>

            <div class="api">
                <inAnchor title="API" h2></inAnchor>
                <inAnchor title="Spin props" h3></inAnchor>
                <table>
                    <thead>
                        <tr>
                            <th>Attribute</th>
                            <th>Explanation</th>
                            <th>Type</th>
                            <th>Default</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>size</td>
                            <td>Spin size，options include <code></code> and <code>small</code>, optional</td>
                            <td>String</td>
                            <td>-</td>
                        </tr>
                        <tr>
                            <td>fix</td>
                            <td>Whether it is fixed, you need to set a <code>relative</code> or <code>absolute</code> style in parent.</td>
                            <td>Boolean</td>
                            <td>false</td>
                        </tr>
                    </tbody>
                </table>
                <inAnchor title="Spin slot" h3></inAnchor>
                <table>
                    <thead>
                        <tr>
                            <th>Name</th>
                            <th>Description</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>default</td>
                            <td>Customized description content. When the slot is set, the default style does not take effect.</td>
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
    import Code from '../../code/spin';
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
                code: Code,
                spinShow: true
            }
        },
        methods: {
            handleSpinShow () {
                this.$Spin.show();
                setTimeout(() => {
                    this.$Spin.hide();
                }, 3000);
            },
            handleSpinCustom () {
                this.$Spin.show({
                    render: (h) => {
                        return h('div', [
                            h('Icon', {
                                'class': 'demo-spin-icon-load',
                                props: {
                                    type: 'ios-loading',
                                    size: 18
                                }
                            }),
                            h('div', 'Loading')
                        ])
                    }
                });
                setTimeout(() => {
                    this.$Spin.hide();
                }, 3000);
            }
        }
    }
</script>