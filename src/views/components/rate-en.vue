<template>
    <i-article>
        <article>
            <h1>Rate</h1>
            <inAnchor title="Brief Introduction" h2></inAnchor>
            <p>A quick rating operation on something or show evaluation.</p>
            <inAnchor title="Examples" h2></inAnchor>
            <Demo title="Basic Usage">
                <div slot="demo">
                    <Rate v-model="value" />
                </div>
                <div slot="desc">
                    <p>The simplest usage.</p>
                </div>
                <i-code lang="html" slot="code">{{ code.base }}</i-code>
            </Demo>
            <Demo title="Half star">
                <div slot="demo">
                    <Rate allow-half v-model="valueHalf" />
                </div>
                <div slot="desc">
                    <p>Set the attribute <code>allow-half</code> to select the half star.</p>
                </div>
                <i-code lang="html" slot="code">{{ code.half }}</i-code>
            </Demo>
            <Demo title="Show copywriting">
                <div slot="demo">
                    <Row>
                        <Col span="12">
                            <Rate show-text v-model="valueText" />
                        </Col>
                        <Col span="12">
                            <Rate show-text allow-half v-model="valueCustomText">
                                <span style="color: #f5a623">{{ valueCustomText }}</span>
                            </Rate>
                        </Col>
                    </Row>
                </div>
                <div slot="desc">
                    <p>Set the property <code>show-text</code> to display the prompt text.</p>
                    <p>The prompt can also be customized via the slot.</p>
                </div>
                <i-code lang="html" slot="code">{{ code.text }}</i-code>
            </Demo>
            <Demo title="Read only">
                <div slot="demo">
                    <Rate disabled v-model="valueDisabled" />
                </div>
                <div slot="desc">
                    <p>Set the property <code>disabled</code> to open read-only mode, unable to interact.</p>
                </div>
                <i-code lang="html" slot="code">{{ code.disabled }}</i-code>
            </Demo>
            <Demo title="Clearable">
                <div slot="demo">
                    <Rate clearable v-model="value1" /> clearable: true
                    <br>
                    <Rate v-model="value2" /> clearable: false
                </div>
                <div slot="desc">
                    <p>Support set allow to clear star when click again.</p>
                </div>
                <i-code lang="html" slot="code">{{ code.clearable }}</i-code>
            </Demo>
            <Demo title="Character and Icon">
                <div slot="demo">
                    <Rate v-model="value3" character="A" />
                    <Rate v-model="value4" character="好" />
                    <Rate v-model="value5" icon="ios-heart" />
                </div>
                <div slot="desc">
                    <p>Set the <code>character</code> property to customize the character.</p>
                    <p>You can customize the icon by setting the <code>icon</code> or <code>custom-icon</code> property.</p>
                </div>
                <i-code lang="html" slot="code">{{ code.custom }}</i-code>
            </Demo>

            <ad></ad>

            <div class="api">
                <inAnchor title="API" h2></inAnchor>
                <inAnchor title="Rate props" h3></inAnchor>
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
                            <td>count</td>
                            <td>Star count.</td>
                            <td>Number</td>
                            <td>5</td>
                        </tr>
                        <tr>
                            <td>value</td>
                            <td>Current value. Use v-model to enable a two-way binding.</td>
                            <td>Number</td>
                            <td>0</td>
                        </tr>
                        <tr>
                            <td>allow-half</td>
                            <td>Whether to allow semi selection.</td>
                            <td>Boolean</td>
                            <td>false</td>
                        </tr>
                        <tr>
                            <td>disabled</td>
                            <td>Read only, unable to interact.</td>
                            <td>Boolean</td>
                            <td>false</td>
                        </tr>
                        <tr>
                            <td>show-text</td>
                            <td>Whether to display a prompt text.</td>
                            <td>Boolean</td>
                            <td>false</td>
                        </tr>
                        <tr>
                            <td>clearable</td>
                            <td>Whether to cancel the selection.</td>
                            <td>Boolean</td>
                            <td>false</td>
                        </tr>
                        <tr>
                            <td>character</td>
                            <td>Custom character.</td>
                            <td>String</td>
                            <td>-</td>
                        </tr>
                        <tr>
                            <td>icon</td>
                            <td>Use icon.</td>
                            <td>String</td>
                            <td>-</td>
                        </tr>
                        <tr>
                            <td>custom-icon</td>
                            <td>Use custom icon.</td>
                            <td>String</td>
                            <td>-</td>
                        </tr>
                    </tbody>
                </table>
                <inAnchor title="Rate events" h3></inAnchor>
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
                            <td>Emitted when rate changing.</td>
                            <td>value</td>
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
    import Code from '../../code/rate';
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
                value: 0,
                valueHalf: 2.5,
                valueText: 3,
                valueCustomText: 3.8,
                valueDisabled: 2,
                value1: 3,
                value2: 3,
                value3: 3,
                value4: 3,
                value5: 3,
            }
        },
        methods: {

        }
    };
</script>