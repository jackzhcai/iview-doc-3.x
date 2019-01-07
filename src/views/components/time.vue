<template>
    <i-article>
        <article>
            <h1>Time 相对时间</h1>
            <inAnchor title="概述" h2></inAnchor>
            <p>常用于表示几分钟前、几小时前等相对于此时此刻的时间描述。</p>
            <inAnchor title="代码示例" h2></inAnchor>
            <Demo title="基础用法">
                <div slot="demo">
                    <Time :time="time1" />
                    <br>
                    <Time :time="time2" />
                </div>
                <div slot="desc">
                    <p>设置一个时间戳或 Date，可自动转为相对于当前的时间。</p>
                </div>
                <i-code lang="html" slot="code">{{ code.base }}</i-code>
            </Demo>

            <Demo title="自动更新间隔">
                <div slot="demo">
                    <Time :time="time3" :interval="1" />
                </div>
                <div slot="desc">
                    <p>设置自动更新间隔，默认为 60 秒。</p>
                </div>
                <i-code lang="html" slot="code">{{ code.interval }}</i-code>
            </Demo>

            <Demo title="不同类型">
                <div slot="demo">
                    <Time :time="time2" />
                    <br>
                    <Time :time="time2" type="date" />
                    <br>
                    <Time :time="time2" type="datetime" />
                </div>
                <div slot="desc">
                    <p>可以根据情况，设置不同的显示类型。</p>
                </div>
                <i-code lang="html" slot="code">{{ code.type }}</i-code>
            </Demo>

            <Demo title="锚点">
                <div slot="demo">
                    <Time :time="time2" hash="#hash" />
                </div>
                <div slot="desc">
                    <p>设置 <code>hash</code> 属性，相对时间可以点击并定位锚点。</p>
                </div>
                <i-code lang="html" slot="code">{{ code.hash }}</i-code>
            </Demo>

            <ad></ad>

            <div class="api">
                <inAnchor title="API" h2></inAnchor>
                <inAnchor title="Time props" h3></inAnchor>
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
                            <td>time</td>
                            <td>需要对比的时间，可以是时间戳或 Date 类型</td>
                            <td>Number | Date | String</td>
                            <td>-</td>
                        </tr>
                        <tr>
                            <td>type</td>
                            <td>类型，可选值为 relative、date 或 datetime</td>
                            <td>String</td>
                            <td>relative</td>
                        </tr>
                        <tr>
                            <td>interval</td>
                            <td>自动更新的间隔，单位：秒</td>
                            <td>Number</td>
                            <td>60</td>
                        </tr>
                        <tr>
                            <td>hash</td>
                            <td>填写该值，点击会定位锚点</td>
                            <td>String</td>
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
    import Code from '../../code/time';
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
                time1: (new Date()).getTime() - 60 * 3 * 1000,
                time2: (new Date()).getTime() - 86400 * 3 * 1000,
                time3: new Date()
            }
        }
    }
</script>