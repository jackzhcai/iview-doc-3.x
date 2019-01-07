<template>
    <i-article>
        <article>
            <h1>Divider 分割线</h1>
            <inAnchor title="概述" h2></inAnchor>
            <p>区隔内容的分割线。</p>
            <p>对不同章节的文本段落进行分割。</p>
            <p>对行内文字/链接进行分割，例如表格的操作列。</p>
            <inAnchor title="代码示例" h2></inAnchor>

            <Demo title="水平分割线">
                <div slot="demo">
                    <p>Steven Paul Jobs was an American entrepreneur and business magnate. He was the chairman, chief executive officer, and a co-founder of Apple Inc.</p>
                    <Divider />
                    <p>Steven Paul Jobs was an American entrepreneur and business magnate. He was the chairman, chief executive officer, and a co-founder of Apple Inc.</p>
                    <Divider>With Text</Divider>
                    <p>Steven Paul Jobs was an American entrepreneur and business magnate. He was the chairman, chief executive officer, and a co-founder of Apple Inc.</p>
                    <Divider dashed />
                    <p>Steven Paul Jobs was an American entrepreneur and business magnate. He was the chairman, chief executive officer, and a co-founder of Apple Inc.</p>
                </div>
                <div slot="desc">
                    <p>默认为水平分割线，可在中间加入文字。</p>
                </div>
                <i-code lang="html" slot="code">{{ code.horizontal }}</i-code>
            </Demo>

            <Demo title="垂直分割线">
                <div slot="demo">
                    Text
                    <Divider type="vertical" />
                    <a href="#">Link</a>
                    <Divider type="vertical" />
                    <a href="#">Link</a>
                </div>
                <div slot="desc">
                    <p>使用 <code>type="vertical"</code> 设置为行内的垂直分割线。</p>
                </div>
                <i-code lang="html" slot="code">{{ code.vertical }}</i-code>
            </Demo>

            <Demo title="标题位置">
                <div slot="demo">
                    <Divider orientation="left">Left Text</Divider>
                    <p>Steven Paul Jobs was an American entrepreneur and business magnate. He was the chairman, chief executive officer, and a co-founder of Apple Inc.</p>
                    <Divider orientation="right">Right Text</Divider>
                    <p>Steven Paul Jobs was an American entrepreneur and business magnate. He was the chairman, chief executive officer, and a co-founder of Apple Inc.</p>
                </div>
                <div slot="desc">
                    <p>修改分割线标题的位置。</p>
                </div>
                <i-code lang="html" slot="code">{{ code.title }}</i-code>
            </Demo>

            <ad></ad>

            <div class="api">
                <inAnchor title="API" h2></inAnchor>
                <inAnchor title="Divider props" h3></inAnchor>
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
                            <td>type</td>
                            <td>水平还是垂直类型，可选值为 horizontal 或 vertical</td>
                            <td>String</td>
                            <td>horizontal</td>
                        </tr>
                        <tr>
                            <td>orientation</td>
                            <td>分割线标题的位置，可选值为 left、right 或 center</td>
                            <td>Number</td>
                            <td>center</td>
                        </tr>
                        <tr>
                            <td>dashed</td>
                            <td>是否虚线</td>
                            <td>Boolean</td>
                            <td>false</td>
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
    import Code from '../../code/divider';
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
                this.$Message.info(`当前状态：${status}`);
            }
        }
    }
</script>