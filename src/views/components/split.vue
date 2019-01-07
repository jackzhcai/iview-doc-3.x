<style>
    .demo-split{
        height: 200px;
        border: 1px solid #dcdee2;
    }
    .demo-split-pane{
        padding: 10px;
    }
    .demo-split-pane.no-padding{
        height: 200px;
        padding: 0;
    }
</style>
<template>
    <i-article>
        <article>
            <h1>Split 面板分割</h1>
            <inAnchor title="概述" h2></inAnchor>
            <p>可将一片区域，分割为可以拖拽调整宽度或高度的两部分区域。</p>
            <inAnchor title="代码示例" h2></inAnchor>
            <Demo title="左右分割">
                <div slot="demo">
                    <div class="demo-split">
                        <Split v-model="split1">
                            <div slot="left" class="demo-split-pane">
                                左边面板
                            </div>
                            <div slot="right" class="demo-split-pane">
                                右边面板
                            </div>
                        </Split>
                    </div>
                </div>
                <div slot="desc">
                    <p>左右分割用法。</p>
                </div>
                <i-code lang="html" slot="code">{{ code.horizontal }}</i-code>
            </Demo>

            <Demo title="上下分割">
                <div slot="demo">
                    <div class="demo-split">
                        <Split v-model="split2" mode="vertical">
                            <div slot="top" class="demo-split-pane">
                                上边面板
                            </div>
                            <div slot="bottom" class="demo-split-pane">
                                下边面板
                            </div>
                        </Split>
                    </div>
                </div>
                <div slot="desc">
                    <p>左右分割用法。</p>
                </div>
                <i-code lang="html" slot="code">{{ code.vertical }}</i-code>
            </Demo>

            <Demo title="嵌套使用">
                <div slot="demo">
                    <div class="demo-split">
                        <Split v-model="split3">
                            <div slot="left" class="demo-split-pane no-padding">
                                <Split v-model="split4" mode="vertical">
                                    <div slot="top" class="demo-split-pane">
                                        上边面板
                                    </div>
                                    <div slot="bottom" class="demo-split-pane">
                                        下边面板
                                    </div>
                                </Split>
                            </div>
                            <div slot="right" class="demo-split-pane">
                                右边面板
                            </div>
                        </Split>
                    </div>
                </div>
                <div slot="desc">
                    <p>可以嵌套使用。</p>
                </div>
                <i-code lang="html" slot="code">{{ code.nest }}</i-code>
            </Demo>

            <ad></ad>

            <div class="api">
                <inAnchor title="API" h2></inAnchor>
                <inAnchor title="Split props" h3></inAnchor>
                <table>
                    <thead>
                        <tr>
                            <th>属性</th>
                            <th>说明</th>
                            <th>类型</th>
                            <th>默认值</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>value</td>
                            <td>面板位置，可以是 0~1 代表百分比，或具体数值的像素，可用 v-model 双向绑定</td>
                            <td>Number | String</td>
                            <td>0.5</td>
                        </tr>
                        <tr>
                            <td>mode</td>
                            <td>类型，可选值为 horizontal 或 vertical</td>
                            <td>String</td>
                            <td>horizontal</td>
                        </tr>
                        <tr>
                            <td>min</td>
                            <td>最小阈值</td>
                            <td>Number | String</td>
                            <td>40px</td>
                        </tr>
                        <tr>
                            <td>max</td>
                            <td>最大阈值</td>
                            <td>Number | String</td>
                            <td>40px</td>
                        </tr>
                    </tbody>
                </table>
                <inAnchor title="Split events" h3></inAnchor>
                <table>
                    <thead>
                        <tr>
                            <th>事件名</th>
                            <th>说明</th>
                            <th>返回值</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>on-move-start</td>
                            <td>拖拽开始</td>
                            <td>-</td>
                        </tr>
                        <tr>
                            <td>on-moving</td>
                            <td>拖拽中</td>
                            <td>event</td>
                        </tr>
                        <tr>
                            <td>on-move-end</td>
                            <td>拖拽结束</td>
                            <td>-</td>
                        </tr>
                    </tbody>
                </table>
                <inAnchor title="Split slot" h3></inAnchor>
                <table>
                    <thead>
                        <tr>
                            <th>名称</th>
                            <th>说明</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>left</td>
                            <td>mode 为 horizontal 时可用，左边面板</td>
                        </tr>
                        <tr>
                            <td>right</td>
                            <td>mode 为 horizontal 时可用，右边面板</td>
                        </tr>
                        <tr>
                            <td>top</td>
                            <td>mode 为 vertical 时可用，上边面板</td>
                        </tr>
                        <tr>
                            <td>bottom</td>
                            <td>mode 为 vertical 时可用，下边面板</td>
                        </tr>
                        <tr>
                            <td>trigger</td>
                            <td>自定义分割拖拽节点</td>
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
    import Code from '../../code/split';
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
                split1: 0.5,
                split2: 0.5,
                split3: 0.5,
                split4: 0.5
            }
        },
        methods: {
            change (status) {
                this.$Message.info(`当前状态：${status}`);
            }
        }
    }
</script>