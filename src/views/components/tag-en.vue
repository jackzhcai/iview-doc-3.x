<template>
    <i-article>
        <article>
            <h1>Tag</h1>
            <inAnchor title="Brief Introduction" h2></inAnchor>
            <p>Tag for categorizing or markuping.</p>
            <inAnchor title="Examples" h2></inAnchor>
            <Demo title="Basic Usage">
                <div slot="demo">
                    <Tag>标签一</Tag>
                    <Tag>标签二</Tag>
                    <Tag v-if="show" closable @on-close="handleClose">标签三</Tag>
                </div>
                <div slot="desc">
                    <p>Usage of basic Tag, and it could be closable by set <code>closable</code> property. </p>
                    <p>Click to close the tag, it will trigger <code>on-close</code> event, you need to implement the logic of your own closure.</p>
                </div>
                <i-code lang="html" slot="code">{{ code.base }}</i-code>
            </Demo>
            <Demo title="Type">
                <div slot="demo">
                    <Tag type="border">标签三</Tag>
                    <Tag type="border" closable>标签四</Tag>
                    <Tag type="dot">标签一</Tag>
                    <Tag type="dot" closable>标签二</Tag>
                </div>
                <div slot="desc">
                    <p>You can select a different style type by setting the <code>type</code> property to <code>border</code> or <code>dot</code>. It is recommended to use the border when you want to close, in the legend of the scene using dot.</p>
                </div>
                <i-code lang="html" slot="code">{{ code.type }}</i-code>
            </Demo>
            <Demo title="Colors">
                <div slot="demo">
                    <Tag color="default">default</Tag>
                    <Tag color="primary">primary</Tag>
                    <Tag color="success">success</Tag>
                    <Tag color="error">error</Tag>
                    <Tag color="warning">warning</Tag>
                    <Tag color="magenta">magenta</Tag>
                    <Tag color="red">red</Tag>
                    <Tag color="volcano">volcano</Tag>
                    <Tag color="orange">orange</Tag>
                    <Tag color="gold">gold</Tag>
                    <Tag color="yellow">yellow</Tag>
                    <Tag color="lime">lime</Tag>
                    <Tag color="green">green</Tag>
                    <Tag color="cyan">cyan</Tag>
                    <Tag color="blue">blue</Tag>
                    <Tag color="geekblue">geekblue</Tag>
                    <Tag color="purple">purple</Tag>
                    <Tag color="#FFA2D3">Custom Color</Tag>
                    <br><br>
                    <Tag type="border" closable color="primary">标签一</Tag>
                    <Tag type="border" closable color="success">标签二</Tag>
                    <Tag type="border" closable color="error">标签三</Tag>
                    <Tag type="border" closable color="warning">标签四</Tag>
                    <br><br>
                    <Tag type="dot" closable color="primary">标签一</Tag>
                    <Tag type="dot" closable color="success">标签二</Tag>
                    <Tag type="dot" closable color="error">标签三</Tag>
                    <Tag type="dot" closable color="warning">标签四</Tag>
                </div>
                <div slot="desc">
                    <p>A variety of preset colors, you can also use custom color.</p>
                </div>
                <i-code lang="html" slot="code">{{ code.color }}</i-code>
            </Demo>
            <Demo title="Checkable">
                <div slot="demo">
                    <Tag checkable color="primary">标签一</Tag>
                    <Tag checkable color="success">标签二</Tag>
                    <Tag checkable color="error">标签三</Tag>
                    <Tag checkable color="warning">标签四</Tag>
                </div>
                <div slot="desc">
                    <p>Set the property <code>checkable</code> to select the tag, and the property <code>checked</code> to control the current selection state.</p>
                </div>
                <i-code lang="html" slot="code">{{ code.checkable }}</i-code>
            </Demo>
            <Demo title="Add & Remove Dynamically">
                <div slot="demo">
                    <Tag v-for="item in count" :key="item" :name="item" closable @on-close="handleClose2">标签{{ item + 1 }}</Tag>
                    <Button icon="ios-add" type="dashed" size="small" @click="handleAdd">添加标签</Button>
                </div>
                <div slot="desc">
                    <p>Generating a set of Tags by array, you can add and remove dynamically.</p>
                </div>
                <i-code lang="html" slot="code">{{ code.add }}</i-code>
            </Demo>

            <ad></ad>

            <div class="api">
                <inAnchor title="API" h2></inAnchor>
                <inAnchor title="Tag props" h3></inAnchor>
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
                            <td>closable</td>
                            <td>Tag can be closed.</td>
                            <td>Boolean</td>
                            <td>false</td>
                        </tr>
                        <tr>
                            <td>checkable</td>
                            <td>Tag can be selected.</td>
                            <td>Boolean</td>
                            <td>false</td>
                        </tr>
                        <tr>
                            <td>checked</td>
                            <td>The selected state of the tag.</td>
                            <td>Boolean</td>
                            <td>true</td>
                        </tr>
                        <tr>
                            <td>type</td>
                            <td>Tag style type, the optional value for the <code>border</code>, <code>dot</code> or not fill.</td>
                            <td>String</td>
                            <td>-</td>
                        </tr>
                        <tr>
                            <td>color</td>
                            <td>Tag color, default values for <code>default</code>, <code>primary</code>, <code>success</code>, <code>warning</code>, <code>error</code>, <code>blue</code>, <code>green</code>, <code>red</code>, <code>yellow</code>, <code>pink</code>, <code >magenta</code>, <code>volcano</code>, <code>orange</code>, <code>gold</code>, <code>lime</code>, <code>cyan</code >, <code>geekblue</code>, <code>purple</code>, you can also customize color values.</td>
                            <td>String</td>
                            <td>-</td>
                        </tr>
                        <tr>
                            <td>name</td>
                            <td>The name of the current tag, it will be useful when using v-for, and supporting close.</td>
                            <td>String | Number</td>
                            <td>-</td>
                        </tr>
                        <tr>
                            <td>fade</td>
                            <td>Whether to use a gradient animation when appearing and disappearing, animation duration may cause flashing of the placeholder.</td>
                            <td>Boolean</td>
                            <td>true</td>
                        </tr>
                    </tbody>
                </table>
                <inAnchor title="Tag events" h3></inAnchor>
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
                            <td>on-close</td>
                            <td>Emitted when closed.</td>
                            <td>event, name</td>
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
    import Code from '../../code/tag';
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
                count: [0, 1, 2],
                show: true
            }
        },
        methods: {
            handleClose () {
                this.show = false;
            },
            handleAdd () {
                if (this.count.length) {
                    this.count.push(this.count[this.count.length - 1] + 1);
                } else {
                    this.count.push(0);
                }
            },
            handleClose2 (event, name) {
                const index = this.count.indexOf(name);
                this.count.splice(index, 1);
            }
        }
    }
</script>