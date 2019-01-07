<template>
    <i-article>
        <article>
            <h1>Cell</h1>
            <inAnchor title="Brief Introduction" h2></inAnchor>
            <p>Used for a fixed menu list.</p>
            <inAnchor title="Examples" h2></inAnchor>
            <Demo title="Basic Usage">
                <div slot="demo">
                    <div style="padding: 10px;background: #f8f8f9">
                        <Card title="Options" icon="ios-options" :padding="0" shadow style="width: 300px;">
                            <CellGroup>
                                <Cell title="Only show titles" />
                                <Cell title="Display label content" label="label content" />
                                <Cell title="Display right content" extra="details" />
                                <Cell title="Link" extra="details" to="/components/button" />
                                <Cell title="Open link in new window" to="/components/button" target="_blank" />
                                <Cell title="Disabled" disabled />
                                <Cell title="Selected" selected />
                                <Cell title="With Badge" to="/components/badge">
                                    <Badge :count="10" slot="extra" />
                                </Cell>
                                <Cell title="With Switch">
                                    <Switch v-model="switchValue" slot="extra" />
                                </Cell>
                            </CellGroup>
                        </Card>
                    </div>
                </div>
                <div slot="desc">
                    <p>Contains a comprehensive example of various usages.</p>
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
                        <th>Event Name</th>
                        <th>Description</th>
                        <th>Return Value</th>
                    </tr>
                    </thead>
                    <tbody>
                    <tr>
                        <td>on-click</td>
                        <td>Trigger when click a cell.</td>
                        <td>name</td>
                    </tr>
                    </tbody>
                </table>
                <inAnchor title="Cell props" h3></inAnchor>
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
                        <td>name</td>
                        <td>Used to identify this cell.</td>
                        <td>String | Number</td>
                        <td>-</td>
                    </tr>
                    <tr>
                        <td>title</td>
                        <td>Left heading</td>
                        <td>String</td>
                        <td>-</td>
                    </tr>
                    <tr>
                        <td>label</td>
                        <td>The description below the title</td>
                        <td>String</td>
                        <td>-</td>
                    </tr>
                    <tr>
                        <td>extra</td>
                        <td>Extra content on the right</td>
                        <td>String</td>
                        <td>-</td>
                    </tr>
                    <tr>
                        <td>disabled</td>
                        <td>Disabling this cell</td>
                        <td>Boolean</td>
                        <td>false</td>
                    </tr>
                    <tr>
                        <td>selected</td>
                        <td>Mark the item as selected.</td>
                        <td>Boolean</td>
                        <td>false</td>
                    </tr>
                    <tr>
                        <td>to</td>
                        <td>Jumping links, support for vue-router objects.</td>
                        <td>String | Object</td>
                        <td>-</td>
                    </tr>
                    <tr>
                        <td>replace</td>
                        <td>Set true, the navigation will not leave a history record.</td>
                        <td>Boolean</td>
                        <td>false</td>
                    </tr>
                    <tr>
                        <td>target</td>
                        <td>Equivalent to the a target of the link.</td>
                        <td>String</td>
                        <td>_self</td>
                    </tr>
                    </tbody>
                </table>
                <inAnchor title="Cell slot" h3></inAnchor>
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
                        <td>Equivalent to title</td>
                    </tr>
                    <tr>
                        <td>icon</td>
                        <td>Heading Icon</td>
                    </tr>
                    <tr>
                        <td>label</td>
                        <td>Equivalent to label</td>
                    </tr>
                    <tr>
                        <td>extra</td>
                        <td>Equivalent to extra</td>
                    </tr>
                    <tr>
                        <td>arrow</td>
                        <td>When you have a link, you can customize the right arrow.</td>
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