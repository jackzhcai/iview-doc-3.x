<style scoped>
    .demo-badge{
        width: 42px;
        height: 42px;
        background: #eee;
        border-radius: 6px;
        display: inline-block;
    }
</style>
<style>
    .demo-badge-alone{
        background: #5cb85c !important;
    }
</style>
<template>
    <i-article>
        <article>
            <h1>Badge</h1>
            <inAnchor title="Brief Introduction" h2></inAnchor>
            <p>Mainly used to set a corner mark to notice the count of unread messages, remind user to read.</p>
            <inAnchor title="Examples" h2></inAnchor>
            <Demo title="Basic Usage">
                <div slot="demo">
                    <Badge :count="3">
                        <a href="#" class="demo-badge"></a>
                    </Badge>
                </div>
                <div slot="desc">
                    <p>The simplest usage.</p>
                </div>
                <i-code lang="html" slot="code">{{ code.base }}</i-code>
            </Demo>
            <Demo title="Little Red Dot">
                <div slot="demo">
                    <Row>
                        <Col span="6">
                            <Badge dot>
                                <a href="#" class="demo-badge"></a>
                            </Badge>
                        </Col>
                        <Col span="6">
                            <Badge dot>
                                <Icon type="ios-notifications-outline" size="26"></Icon>
                            </Badge>
                        </Col>
                        <Col span="6">
                            <Badge dot>
                                <a href="#">可以是一个链接</a>
                            </Badge>
                        </Col>
                    </Row>
                </div>
                <div slot="desc">
                    <p>Never use it if you have Qiang Po Zheng (Those who feel uncomfortable with any discordant things). </p>
                </div>
                <i-code lang="html" slot="code">{{ code.dot }}</i-code>
            </Demo>
            <Demo title="Overflow Count">
                <div slot="demo">
                    <Row>
                        <Col span="6">
                            <Badge :count="100">
                                <a href="#" class="demo-badge"></a>
                            </Badge>
                        </Col>
                        <Col span="6">
                            <Badge :count="1000" overflow-count="999">
                                <a href="#" class="demo-badge"></a>
                            </Badge>
                        </Col>
                    </Row>
                </div>
                <div slot="desc">
                    <p>You can set a maximal count by setting <code>overflow-count</code>.  When message count exceed the number, <code>${overflowCount}+</code> will be shown.</p>
                </div>
                <i-code lang="html" slot="code">{{ code.overflow }}</i-code>
            </Demo>
            <Demo title="Standalone Usage and Customized Style">
                <div slot="demo">
                    <Badge :count="10"></Badge>
                    <Badge :count="20" class-name="demo-badge-alone"></Badge>
                </div>
                <div slot="desc">
                    <p>Display without slot.</p>
                </div>
                <i-code lang="html" slot="code">{{ code.alone }}</i-code>
            </Demo>
            <Demo title="Custom Text">
                <div slot="demo">
                    <Row>
                        <Col span="6">
                            <Badge text="new">
                                <a href="#" class="demo-badge"></a>
                            </Badge>
                        </Col>
                        <Col span="6">
                            <Badge text="hot">
                                <a href="#" class="demo-badge"></a>
                            </Badge>
                        </Col>
                    </Row>
                </div>
                <div slot="desc">
                    <p>Set the <code>text</code> property to customize the display.</p>
                </div>
                <i-code lang="html" slot="code">{{ code.text }}</i-code>
            </Demo>
            <Demo title="Status">
                <div slot="demo">
                    <Badge status="success" />
                    <Badge status="error" />
                    <Badge status="default" />
                    <Badge status="processing" />
                    <Badge status="warning" />
                    <br />
                    <Badge status="success" text="Success" />
                    <br />
                    <Badge status="error" text="Error" />
                    <br />
                    <Badge status="default" text="Default" />
                    <br />
                    <Badge status="processing" text="Processing" />
                    <br />
                    <Badge status="warning" text="Warning" />
                </div>
                <div slot="desc">
                    <p>Standalone badge with status.</p>
                </div>
                <i-code lang="html" slot="code">{{ code.status }}</i-code>
            </Demo>

            <Demo title="Types">
                <div slot="demo">
                    <Badge :count="5" type="primary">
                        <a href="#" class="demo-badge"></a>
                    </Badge>
                    <Badge :count="5" type="success">
                        <a href="#" class="demo-badge"></a>
                    </Badge>
                    <Badge :count="5" type="normal">
                        <a href="#" class="demo-badge"></a>
                    </Badge>
                    <Badge :count="5" type="info">
                        <a href="#" class="demo-badge"></a>
                    </Badge>
                    <Badge :count="5" type="error">
                        <a href="#" class="demo-badge"></a>
                    </Badge>
                    <Badge :count="5" type="warning">
                        <a href="#" class="demo-badge"></a>
                    </Badge>
                </div>
                <div slot="desc">
                    <p>Different colors can be set using the <code>type</code> property.</p>
                </div>
                <i-code lang="html" slot="code">{{ code.type }}</i-code>
            </Demo>

            <ad></ad>

            <div class="api">
                <inAnchor title="API" h2></inAnchor>
                <inAnchor title="Badge props" h3></inAnchor>
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
                            <td>Count to be shown. Show <code>${overflowCount}+</code> if bigger than <code>overflowCount</code>. Hide if 0.</td>
                            <td>Number</td>
                            <td>-</td>
                        </tr>
                        <tr>
                            <td>overflow-count</td>
                            <td>Maximal count that is allowed to be shown.</td>
                            <td>Number | String</td>
                            <td>99</td>
                        </tr>
                        <tr>
                            <td>dot</td>
                            <td>Only a red dot without count. Set <code>count</code> to 0 to hide the dot.</td>
                            <td>Boolean</td>
                            <td>false</td>
                        </tr>
                        <tr>
                            <td>class-name</td>
                            <td>Customized class name, invalid in dot mode.</td>
                            <td>String</td>
                            <td>-</td>
                        </tr>
                        <tr>
                            <td>type</td>
                            <td>Use the default color, the choices are success, primary, normal, error, warning, info.</td>
                            <td>String</td>
                            <td>-</td>
                        </tr>
                        <tr>
                            <td>show-zero</td>
                            <td>Whether the Badge is displayed when the value is 0.</td>
                            <td>Boolean</td>
                            <td>false</td>
                        </tr>
                        <tr>
                            <td>status</td>
                            <td>Set Badge to status point. The optional values are success, processing, default, error, warning.</td>
                            <td>String</td>
                            <td>-</td>
                        </tr>
                        <tr>
                            <td>text</td>
                            <td>Custom content, if status is set, the text of the status point.</td>
                            <td>String</td>
                            <td>-</td>
                        </tr>
                        <tr>
                            <td>offset</td>
                            <td>Set the position offset of the Badge, the format is [x, y]</td>
                            <td>Array</td>
                            <td>-</td>
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
    import Code from '../../code/badge';
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

        }
    }
</script>