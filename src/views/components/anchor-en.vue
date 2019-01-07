<style>
    .demo-anchor .ivu-affix{
        z-index: 1000;
    }
</style>
<template>
    <i-article>
        <article>
            <h1>Anchor</h1>
            <inAnchor title="Brief Introduction" h2></inAnchor>
            <p>Used to jump to a specific location on the page.</p>
            <inAnchor title="Examples" h2></inAnchor>
            <div id="basic_usage">
                <Demo title="Basic Usage">
                    <div slot="demo">
                        <Anchor show-ink class="demo-anchor">
                            <AnchorLink href="#basic_usage" title="Basic Usage" />
                            <AnchorLink href="#static_position" title="Static Position" />
                            <AnchorLink href="#API" title="API">
                                <AnchorLink href="#Anchor_props" title="Anchor props" />
                                <AnchorLink href="#Anchor_events" title="Anchor events" />
                                <AnchorLink href="#AnchorLink_props" title="AnchorLink props" />
                            </AnchorLink>
                        </Anchor>
                    </div>
                    <div slot="desc">
                        <p>The simplest usage.</p>
                    </div>
                    <i-code lang="html" slot="code">{{ code.base }}</i-code>
                </Demo>
            </div>

            <div id="static_position">
                <Demo title="Static Position">
                    <div slot="demo">
                        <Anchor :affix="false">
                            <AnchorLink href="#basic_usage" title="Basic Usage" />
                            <AnchorLink href="#static_position" title="Static Position" />
                            <AnchorLink href="#API" title="API">
                                <AnchorLink href="#Anchor_props" title="Anchor props" />
                                <AnchorLink href="#Anchor_events" title="Anchor events" />
                                <AnchorLink href="#AnchorLink_props" title="AnchorLink props" />
                            </AnchorLink>
                        </Anchor>
                    </div>
                    <div slot="desc">
                        <p>Do not change state when page is scrolling.</p>
                    </div>
                    <i-code lang="html" slot="code">{{ code.affix }}</i-code>
                </Demo>
            </div>

            <ad></ad>

            <div class="api">
                <inAnchor title="API" h2></inAnchor>
                <inAnchor title="Anchor props" h3></inAnchor>
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
                        <td>affix</td>
                        <td>Fixed mode of Anchor</td>
                        <td>Boolean</td>
                        <td>true</td>
                    </tr>
                    <tr>
                        <td>offset-top</td>
                        <td>Pixels to offset from top when calculating position of scroll.</td>
                        <td>Number</td>
                        <td>0</td>
                    </tr>
                    <tr>
                        <td>offset-bottom</td>
                        <td>Pixels to offset from bottom when calculating position of scroll.</td>
                        <td>Number</td>
                        <td>-</td>
                    </tr>
                    <tr>
                        <td>bounds</td>
                        <td>Bounding distance of anchor area, unit: px.</td>
                        <td>Number</td>
                        <td>5</td>
                    </tr>
                    <tr>
                        <td>scroll-offset</td>
                        <td>Click to scroll extra distance.</td>
                        <td>Number</td>
                        <td>0</td>
                    </tr>
                    <tr>
                        <td>container</td>
                        <td>Scrolling container.</td>
                        <td>String | HTMLElement</td>
                        <td>-</td>
                    </tr>
                    <tr>
                        <td>show-ink</td>
                        <td>Whether show ink-balls.</td>
                        <td>Boolean</td>
                        <td>false</td>
                    </tr>
                    </tbody>
                </table>
                <inAnchor title="Anchor events" h3></inAnchor>
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
                        <td>on-select</td>
                        <td>Click on the anchor point to trigger back link.</td>
                        <td>href</td>
                    </tr>
                    <tr>
                        <td>on-change</td>
                        <td>Triggered when the link changes, returning new link and old link.</td>
                        <td>newHref, oldHref</td>
                    </tr>
                    </tbody>
                </table>
                <inAnchor title="AnchorLink props" h3></inAnchor>
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
                        <td>href</td>
                        <td>target of hyperlink</td>
                        <td>String</td>
                        <td>-</td>
                    </tr>
                    <tr>
                        <td>title</td>
                        <td>content of hyperlink</td>
                        <td>String</td>
                        <td>-</td>
                    </tr>
                    <tr>
                        <td>scroll-offset</td>
                        <td>Click to scroll extra distance.</td>
                        <td>Number</td>
                        <td>0</td>
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
    import Code from '../../code/anchor';
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