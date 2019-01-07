<template>
    <i-article>
        <article>
            <h1>Divider</h1>
            <inAnchor title="Brief Introduction" h2></inAnchor>
            <p>A divider line separates different content.</p>
            <p>Divide sections of article.</p>
            <p>Divide inline text and links such as the operation column of table.</p>
            <inAnchor title="Examples" h2></inAnchor>

            <Demo title="Horizontal">
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
                    <p>Divider default type is horizontal. Support inner text inside Divider.</p>
                </div>
                <i-code lang="html" slot="code">{{ code.horizontal }}</i-code>
            </Demo>

            <Demo title="Vertical">
                <div slot="demo">
                    Text
                    <Divider type="vertical" />
                    <a href="#">Link</a>
                    <Divider type="vertical" />
                    <a href="#">Link</a>
                </div>
                <div slot="desc">
                    <p>Use <code>type="vertical"</code> make it vertical.</p>
                </div>
                <i-code lang="html" slot="code">{{ code.vertical }}</i-code>
            </Demo>

            <Demo title="Orientation of title">
                <div slot="demo">
                    <Divider orientation="left">Left Text</Divider>
                    <p>Steven Paul Jobs was an American entrepreneur and business magnate. He was the chairman, chief executive officer, and a co-founder of Apple Inc.</p>
                    <Divider orientation="right">Right Text</Divider>
                    <p>Steven Paul Jobs was an American entrepreneur and business magnate. He was the chairman, chief executive officer, and a co-founder of Apple Inc.</p>
                </div>
                <div slot="desc">
                    <p>Set orientation of divider to left or right.</p>
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
                        <th>Property</th>
                        <th>Description</th>
                        <th>Type</th>
                        <th>Default</th>
                    </tr>
                    </thead>
                    <tbody>
                    <tr>
                        <td>type</td>
                        <td>Direction type of divider, optional values are horizontal or vertical.</td>
                        <td>String</td>
                        <td>horizontal</td>
                    </tr>
                    <tr>
                        <td>orientation</td>
                        <td>Position of title inside divider, the optional value is left, right or center.</td>
                        <td>Number</td>
                        <td>center</td>
                    </tr>
                    <tr>
                        <td>dashed</td>
                        <td>Whether line is dashed</td>
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