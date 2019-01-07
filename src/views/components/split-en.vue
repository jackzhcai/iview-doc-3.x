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
            <h1>Split</h1>
            <inAnchor title="Brief Introduction" h2></inAnchor>
            <p>One area can be divided into two areas that can be dragged to adjust width or height.</p>
            <inAnchor title="Examples" h2></inAnchor>
            <Demo title="Left And Right">
                <div slot="demo">
                    <div class="demo-split">
                        <Split v-model="split1">
                            <div slot="left" class="demo-split-pane">
                                Left Pane
                            </div>
                            <div slot="right" class="demo-split-pane">
                                Right Pane
                            </div>
                        </Split>
                    </div>
                </div>
                <div slot="desc">
                    <p>Left and right usage.</p>
                </div>
                <i-code lang="html" slot="code">{{ code.horizontal }}</i-code>
            </Demo>

            <Demo title="Top And Bottom">
                <div slot="demo">
                    <div class="demo-split">
                        <Split v-model="split2" mode="vertical">
                            <div slot="top" class="demo-split-pane">
                                Top Pane
                            </div>
                            <div slot="bottom" class="demo-split-pane">
                                Bottom Pane
                            </div>
                        </Split>
                    </div>
                </div>
                <div slot="desc">
                    <p>Top and bottom usage.</p>
                </div>
                <i-code lang="html" slot="code">{{ code.vertical }}</i-code>
            </Demo>

            <Demo title="Nest">
                <div slot="demo">
                    <div class="demo-split">
                        <Split v-model="split3">
                            <div slot="left" class="demo-split-pane no-padding">
                                <Split v-model="split4" mode="vertical">
                                    <div slot="top" class="demo-split-pane">
                                        Top Pane
                                    </div>
                                    <div slot="bottom" class="demo-split-pane">
                                        Bottom Pane
                                    </div>
                                </Split>
                            </div>
                            <div slot="right" class="demo-split-pane">
                                Right Pane
                            </div>
                        </Split>
                    </div>
                </div>
                <div slot="desc">
                    <p>Can be used nested.</p>
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
                        <th>Property</th>
                        <th>Description</th>
                        <th>Type</th>
                        <th>Default</th>
                    </tr>
                    </thead>
                    <tbody>
                    <tr>
                        <td>value</td>
                        <td>The panel position, which can be 0~1 represents the percentage, or the pixel of the specific value, available for v-model two-way binding.</td>
                        <td>Number | String</td>
                        <td>0.5</td>
                    </tr>
                    <tr>
                        <td>mode</td>
                        <td>Type, optional value is horizontal or vertical.</td>
                        <td>String</td>
                        <td>horizontal</td>
                    </tr>
                    <tr>
                        <td>min</td>
                        <td>Minimum threshold.</td>
                        <td>Number | String</td>
                        <td>40px</td>
                    </tr>
                    <tr>
                        <td>max</td>
                        <td>Maximum threshold.</td>
                        <td>Number | String</td>
                        <td>40px</td>
                    </tr>
                    </tbody>
                </table>
                <inAnchor title="Split events" h3></inAnchor>
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
                        <td>on-move-start</td>
                        <td>Dragging start</td>
                        <td>-</td>
                    </tr>
                    <tr>
                        <td>on-moving</td>
                        <td>Dragging</td>
                        <td>event</td>
                    </tr>
                    <tr>
                        <td>on-move-end</td>
                        <td>Dragging end</td>
                        <td>-</td>
                    </tr>
                    </tbody>
                </table>
                <inAnchor title="Split slot" h3></inAnchor>
                <table>
                    <thead>
                    <tr>
                        <th>Name</th>
                        <th>Description</th>
                    </tr>
                    </thead>
                    <tbody>
                    <tr>
                        <td>left</td>
                        <td>Available when mode is horizontal, left panel.</td>
                    </tr>
                    <tr>
                        <td>right</td>
                        <td>Available when mode is horizontal, right panel.</td>
                    </tr>
                    <tr>
                        <td>top</td>
                        <td>Available when mode is vertical, top panel.</td>
                    </tr>
                    <tr>
                        <td>bottom</td>
                        <td>Available when mode is vertical, bottom panel.</td>
                    </tr>
                    <tr>
                        <td>trigger</td>
                        <td>Custom split drag node.</td>
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