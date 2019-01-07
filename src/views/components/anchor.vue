<style>
    .demo-anchor .ivu-affix{
        z-index: 1000;
    }
</style>
<template>
    <i-article>
        <article>
            <h1>Anchor 锚点</h1>
            <inAnchor title="概述" h2></inAnchor>
            <p>用于跳转到页面指定位置。</p>
            <inAnchor title="代码示例" h2></inAnchor>
            <div id="basic_usage">
                <Demo title="基础用法">
                    <div slot="demo">
                        <Anchor show-ink class="demo-anchor">
                            <AnchorLink href="#basic_usage" title="基础用法" />
                            <AnchorLink href="#static_position" title="静态位置" />
                            <AnchorLink href="#API" title="API">
                                <AnchorLink href="#Anchor_props" title="Anchor props" />
                                <AnchorLink href="#Anchor_events" title="Anchor events" />
                                <AnchorLink href="#AnchorLink_props" title="AnchorLink props" />
                            </AnchorLink>
                        </Anchor>
                    </div>
                    <div slot="desc">
                        <p>最简单的用法。</p>
                    </div>
                    <i-code lang="html" slot="code">{{ code.base }}</i-code>
                </Demo>
            </div>

            <div id="static_position">
                <Demo title="静态位置">
                    <div slot="demo">
                        <Anchor :affix="false">
                            <AnchorLink href="#basic_usage" title="基础用法" />
                            <AnchorLink href="#static_position" title="静态位置" />
                            <AnchorLink href="#API" title="API">
                                <AnchorLink href="#Anchor_props" title="Anchor props" />
                                <AnchorLink href="#Anchor_events" title="Anchor events" />
                                <AnchorLink href="#AnchorLink_props" title="AnchorLink props" />
                            </AnchorLink>
                        </Anchor>
                    </div>
                    <div slot="desc">
                        <p>不浮动，状态不随页面滚动变化。</p>
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
                            <th>属性</th>
                            <th>说明</th>
                            <th>类型</th>
                            <th>默认值</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>affix</td>
                            <td>固定模式</td>
                            <td>Boolean</td>
                            <td>true</td>
                        </tr>
                        <tr>
                            <td>offset-top</td>
                            <td>距离窗口顶部达到指定偏移量后触发</td>
                            <td>Number</td>
                            <td>0</td>
                        </tr>
                        <tr>
                            <td>offset-bottom</td>
                            <td>距离窗口底部达到指定偏移量后触发</td>
                            <td>Number</td>
                            <td>-</td>
                        </tr>
                        <tr>
                            <td>bounds</td>
                            <td>锚点区域边界，单位：px</td>
                            <td>Number</td>
                            <td>5</td>
                        </tr>
                        <tr>
                            <td>scroll-offset</td>
                            <td>点击滚动的额外距离</td>
                            <td>Number</td>
                            <td>0</td>
                        </tr>
                        <tr>
                            <td>container</td>
                            <td>指定滚动的容器</td>
                            <td>String | HTMLElement</td>
                            <td>-</td>
                        </tr>
                        <tr>
                            <td>show-ink</td>
                            <td>是否显示小圆点</td>
                            <td>Boolean</td>
                            <td>false</td>
                        </tr>
                    </tbody>
                </table>
                <inAnchor title="Anchor events" h3></inAnchor>
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
                            <td>on-select</td>
                            <td>点击锚点时触发，返回链接</td>
                            <td>href</td>
                        </tr>
                        <tr>
                            <td>on-change</td>
                            <td>链接改变时触发，返回新链接和旧链接</td>
                            <td>newHref, oldHref</td>
                        </tr>
                    </tbody>
                </table>
                <inAnchor title="AnchorLink props" h3></inAnchor>
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
                            <td>href</td>
                            <td>锚点链接</td>
                            <td>String</td>
                            <td>-</td>
                        </tr>
                        <tr>
                            <td>title</td>
                            <td>文字内容</td>
                            <td>String</td>
                            <td>-</td>
                        </tr>
                        <tr>
                            <td>scroll-offset</td>
                            <td>点击滚动的额外距离</td>
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