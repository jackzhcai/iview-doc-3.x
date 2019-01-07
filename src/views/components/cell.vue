<template>
    <i-article>
        <article>
            <h1>Cell 单元格</h1>
            <inAnchor title="概述" h2></inAnchor>
            <p>用于固定的菜单列表。</p>
            <inAnchor title="代码示例" h2></inAnchor>
            <Demo title="基础用法">
                <div slot="demo">
                    <div style="padding: 10px;background: #f8f8f9">
                        <Card title="选项" icon="ios-options" :padding="0" shadow style="width: 300px;">
                            <CellGroup>
                                <Cell title="只显示标题" />
                                <Cell title="显示 label 内容" label="label 的内容" />
                                <Cell title="显示右侧内容" extra="详细信息" />
                                <Cell title="链接" extra="详细信息" to="/components/button" />
                                <Cell title="新窗口打开链接" to="/components/button" target="_blank" />
                                <Cell title="禁用" disabled />
                                <Cell title="选中" selected />
                                <Cell title="显示徽标" to="/components/badge">
                                    <Badge :count="10" slot="extra" />
                                </Cell>
                                <Cell title="开关">
                                    <Switch v-model="switchValue" slot="extra" />
                                </Cell>
                            </CellGroup>
                        </Card>
                    </div>
                </div>
                <div slot="desc">
                    <p>包含各类用法的综合示例。</p>
                </div>
                <i-code lang="html" slot="code">{{ code.base }}</i-code>
            </Demo>

            <ad></ad>

            <div class="api">
                <inAnchor title="API" h2></inAnchor>
                <inAnchor title="CellGroup events" h3></inAnchor>
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
                            <td>on-click</td>
                            <td>点击单元格时触发</td>
                            <td>name</td>
                        </tr>
                    </tbody>
                </table>
                <inAnchor title="Cell props" h3></inAnchor>
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
                        <td>name</td>
                        <td>用来标识这一项</td>
                        <td>String | Number</td>
                        <td>-</td>
                    </tr>
                    <tr>
                        <td>title</td>
                        <td>左侧标题</td>
                        <td>String</td>
                        <td>-</td>
                    </tr>
                    <tr>
                        <td>label</td>
                        <td>标题下方的描述信息</td>
                        <td>String</td>
                        <td>-</td>
                    </tr>
                    <tr>
                        <td>extra</td>
                        <td>右侧额外内容</td>
                        <td>String</td>
                        <td>-</td>
                    </tr>
                    <tr>
                        <td>disabled</td>
                        <td>禁用该项</td>
                        <td>Boolean</td>
                        <td>false</td>
                    </tr>
                    <tr>
                        <td>selected</td>
                        <td>标记该项为选中状态</td>
                        <td>Boolean</td>
                        <td>false</td>
                    </tr>
                    <tr>
                        <td>to</td>
                        <td>跳转的链接，支持 vue-router 对象</td>
                        <td>String | Object</td>
                        <td>-</td>
                    </tr>
                    <tr>
                        <td>replace</td>
                        <td>路由跳转时，开启 replace 将不会向 history 添加新记录</td>
                        <td>Boolean</td>
                        <td>false</td>
                    </tr>
                    <tr>
                        <td>target</td>
                        <td>相当于 a 链接的 target 属性</td>
                        <td>String</td>
                        <td>_self</td>
                    </tr>
                    </tbody>
                </table>
                <inAnchor title="Cell slot" h3></inAnchor>
                <table>
                    <thead>
                    <tr>
                        <th>名称</th>
                        <th>说明</th>
                    </tr>
                    </thead>
                    <tbody>
                    <tr>
                        <td>默认</td>
                        <td>相当于 title</td>
                    </tr>
                    <tr>
                        <td>icon</td>
                        <td>标题前的 Icon</td>
                    </tr>
                    <tr>
                        <td>label</td>
                        <td>相当于 label</td>
                    </tr>
                    <tr>
                        <td>extra</td>
                        <td>相当于 extra</td>
                    </tr>
                    <tr>
                        <td>arrow</td>
                        <td>有链接时，可自定义右侧箭头</td>
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
    import Code from '../../code/cell';
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
                switchValue: true
            }
        },
        methods: {

        }
    }
</script>