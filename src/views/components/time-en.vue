<template>
    <i-article>
        <article>
            <h1>Time</h1>
            <inAnchor title="Brief Introduction" h2></inAnchor>
            <p>It is often used to represent the time description of a few minutes ago, a few hours ago, etc. relative to the present time.</p>
            <inAnchor title="Examples" h2></inAnchor>
            <Demo title="Basic Usage">
                <div slot="demo">
                    <Time :time="time1" />
                    <br>
                    <Time :time="time2" />
                </div>
                <div slot="desc">
                    <p>Set a timestamp or Date to automatically change to the current time.</p>
                </div>
                <i-code lang="html" slot="code">{{ code.base }}</i-code>
            </Demo>

            <Demo title="Interval">
                <div slot="demo">
                    <Time :time="time3" :interval="1" />
                </div>
                <div slot="desc">
                    <p>Set the automatic update interval. The default is 60 seconds.</p>
                </div>
                <i-code lang="html" slot="code">{{ code.interval }}</i-code>
            </Demo>

            <Demo title="Type">
                <div slot="demo">
                    <Time :time="time2" />
                    <br>
                    <Time :time="time2" type="date" />
                    <br>
                    <Time :time="time2" type="datetime" />
                </div>
                <div slot="desc">
                    <p>Different display types can be set depending on the situation.</p>
                </div>
                <i-code lang="html" slot="code">{{ code.type }}</i-code>
            </Demo>

            <Demo title="Hash">
                <div slot="demo">
                    <Time :time="time2" hash="#hash" />
                </div>
                <div slot="desc">
                    <p>With set the <code>hash</code> property, the time can be clicked.</p>
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
                        <th>Property</th>
                        <th>Description</th>
                        <th>Type</th>
                        <th>Default</th>
                    </tr>
                    </thead>
                    <tbody>
                    <tr>
                        <td>time</td>
                        <td>The time to compare, which can be a timestamp or Date type.</td>
                        <td>Number | Date | String</td>
                        <td>-</td>
                    </tr>
                    <tr>
                        <td>type</td>
                        <td>Type, optional relative, date, or datetime.</td>
                        <td>String</td>
                        <td>relative</td>
                    </tr>
                    <tr>
                        <td>interval</td>
                        <td>Automatic update interval, unit: second.</td>
                        <td>Number</td>
                        <td>60</td>
                    </tr>
                    <tr>
                        <td>hash</td>
                        <td>Fill in the value and click to locate the anchor.</td>
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