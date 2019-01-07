<style>
    .demo-drawer-footer{
        width: 100%;
        position: absolute;
        bottom: 0;
        left: 0;
        border-top: 1px solid #e8e8e8;
        padding: 10px 16px;
        text-align: right;
        background: #fff;
    }
    .demo-drawer-profile{
        font-size: 14px;
    }
    .demo-drawer-profile .ivu-col{
        margin-bottom: 12px;
    }
</style>
<template>
    <i-article>
        <article>
            <h1>Drawer 抽屉</h1>
            <inAnchor title="概述" h2></inAnchor>
            <p>抽屉从父窗体边缘滑入，覆盖住部分父窗体内容。用户在抽屉内操作时不必离开当前任务，操作完成后，可以平滑地回到到原任务。</p>
            <inAnchor title="何时使用" h2></inAnchor>
            <li>当需要一个附加的面板来控制父窗体内容，这个面板在需要时呼出。比如，控制界面展示样式，往界面中添加内容。</li>
            <li>当需要在当前任务流中插入临时任务，创建或预览附加内容。比如展示协议条款，创建子对象。</li>

            <inAnchor title="代码示例" h2></inAnchor>

            <Demo title="基础抽屉">
                <div slot="demo">
                    <Button @click="value1 = true" type="primary">Open</Button>
                    <Drawer title="Basic Drawer" :closable="false" v-model="value1">
                        <p>Some contents...</p>
                        <p>Some contents...</p>
                        <p>Some contents...</p>
                    </Drawer>
                </div>
                <div slot="desc">
                    <p>基础抽屉，点击触发按钮抽屉从右滑出，点击遮罩区关闭。</p>
                </div>
                <i-code lang="html" slot="code">{{ code.base }}</i-code>
            </Demo>

            <Demo title="左侧滑出">
                <div slot="demo">
                    <Button @click="value2 = true" type="primary">Open</Button>
                    <Drawer title="Basic Drawer" placement="left" :closable="false" v-model="value2">
                        <p>Some contents...</p>
                        <p>Some contents...</p>
                        <p>Some contents...</p>
                    </Drawer>
                </div>
                <div slot="desc">
                    <p>基础抽屉，点击触发按钮抽屉从左滑出，点击遮罩区关闭。</p>
                </div>
                <i-code lang="html" slot="code">{{ code.left }}</i-code>
            </Demo>

            <Demo title="对象编辑">
                <div slot="demo">
                    <Button @click="value3 = true" type="primary">Create</Button>
                    <Drawer
                        title="Create"
                        v-model="value3"
                        width="720"
                        :mask-closable="false"
                        :styles="styles"
                    >
                        <Form :model="formData">
                            <Row :gutter="32">
                                <Col span="12">
                                    <FormItem label="Name" label-position="top">
                                        <Input v-model="formData.name" placeholder="please enter user name" />
                                    </FormItem>
                                </Col>
                                <Col span="12">
                                    <FormItem label="Url" label-position="top">
                                        <Input v-model="formData.url" placeholder="please enter url">
                                            <span slot="prepend">http://</span>
                                            <span slot="append">.com</span>
                                        </Input>
                                    </FormItem>
                                </Col>
                            </Row>
                            <Row :gutter="32">
                                <Col span="12">
                                    <FormItem label="Owner" label-position="top">
                                        <Select v-model="formData.owner" placeholder="please select an owner">
                                            <Option value="jobs">Steven Paul Jobs</Option>
                                            <Option value="ive">Sir Jonathan Paul Ive</Option>
                                        </Select>
                                    </FormItem>
                                </Col>
                                <Col span="12">
                                    <FormItem label="Type" label-position="top">
                                        <Select v-model="formData.type" placeholder="please choose the type">
                                            <Option value="private">Private</Option>
                                            <Option value="public">Public</Option>
                                        </Select>
                                    </FormItem>
                                </Col>
                            </Row>
                            <Row :gutter="32">
                                <Col span="12">
                                    <FormItem label="Approver" label-position="top">
                                        <Select v-model="formData.approver" placeholder="please choose the approver">
                                            <Option value="jobs">Steven Paul Jobs</Option>
                                            <Option value="ive">Sir Jonathan Paul Ive</Option>
                                        </Select>
                                    </FormItem>
                                </Col>
                                <Col span="12">
                                    <FormItem label="DateTime" label-position="top">
                                        <DatePicker v-model="formData.date" type="daterange" placeholder="please select the date" style="display: block" placement="bottom-end"></DatePicker>
                                    </FormItem>
                                </Col>
                            </Row>
                            <FormItem label="Description" label-position="top">
                                <Input type="textarea" v-model="formData.desc" :rows="4" placeholder="please enter the description" />
                            </FormItem>
                        </Form>
                        <div class="demo-drawer-footer">
                            <Button style="margin-right: 8px" @click="value3 = false">Cancel</Button>
                            <Button type="primary" @click="value3 = false">Submit</Button>
                        </div>
                    </Drawer>
                </div>
                <div slot="desc">
                    <p>用于承载编辑相关操作，需要点击关闭按钮关闭。</p>
                </div>
                <i-code lang="html" slot="code">{{ code.create }}</i-code>
            </Demo>

            <Demo title="信息预览抽屉">
                <div slot="demo">
                    <Button @click="value4 = true" type="primary">View Profile</Button>
                    <Drawer :closable="false" width="640" v-model="value4">
                        <p :style="pStyle">User Profile</p>
                        <p :style="pStyle">Personal</p>
                        <div class="demo-drawer-profile">
                            <Row>
                                <Col span="12">
                                    Full Name: Aresn
                                </Col>
                                <Col span="12">
                                    Account: aresn@aresn.com
                                </Col>
                            </Row>
                            <Row>
                                <Col span="12">
                                    City: BeiJing
                                </Col>
                                <Col span="12">
                                    Country: China
                                </Col>
                            </Row>
                            <Row>
                                <Col span="12">
                                    Birthday: May 14, 1991
                                </Col>
                                <Col span="12">
                                    Website: <a href="https://dev.iviewui.com" target="_blank">https://dev.iviewui.com</a>
                                    </Col>
                            </Row>
                            Message: Hello, Developer
                        </div>
                        <Divider />
                        <p :style="pStyle">Company</p>
                        <div class="demo-drawer-profile">
                            <Row>
                                <Col span="12">
                                    Position: Programmer
                                </Col>
                                <Col span="12">
                                    Responsibilities:Coding
                                </Col>
                            </Row>
                            <Row>
                                <Col span="12">
                                    Department: Map visualization
                                </Col>
                            </Row>
                            Skills:C / C + +, data structures, software engineering, operating systems, computer networks, databases, compiler theory, computer architecture, Microcomputer Principle and Interface Technology, Computer English, Java, ASP, etc.
                        </div>
                        <Divider />
                        <p :style="pStyle">Contacts</p>
                        <div class="demo-drawer-profile">
                            <Row>
                                <Col span="12">
                                    Email: admin@aresn.com
                                </Col>
                                <Col span="12">
                                    Phone Number: +86 18888888888
                                </Col>
                            </Row>
                            <Row>
                                <Col span="12">
                                    GitHub: <a href="https://github.com/iview/iview" target="_blank">https://github.com/iview/iview</a>
                                </Col>
                            </Row>
                        </div>
                    </Drawer>
                </div>
                <div slot="desc">
                    <p>需要快速预览对象概要时使用，点击遮罩区关闭。</p>
                </div>
                <i-code lang="html" slot="code">{{ code.profile }}</i-code>
            </Demo>

            <Demo title="多层抽屉">
                <div slot="demo">
                    <Button @click="value5 = true" type="primary">Open Drawer</Button>
                    <Drawer title="Multi-level drawer" width="512" :closable="false" v-model="value5">
                        <Button @click="value6 = true" type="primary">Two-level Drawer</Button>
                    </Drawer>
                    <Drawer title="Two-level Drawer" :closable="false" v-model="value6">
                        This is two-level drawer.
                    </Drawer>
                </div>
                <div slot="desc">
                    <p>在抽屉内打开新的抽屉，用以解决多分支任务的复杂状况。</p>
                </div>
                <i-code lang="html" slot="code">{{ code.multiple }}</i-code>
            </Demo>

            <ad></ad>

            <div class="api">
                <inAnchor title="API" h2></inAnchor>
                <inAnchor title="Drawer props" h3></inAnchor>
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
                            <td>value</td>
                            <td>抽屉是否显示，可使用 v-model 双向绑定数据</td>
                            <td>Boolean</td>
                            <td>false</td>
                        </tr>
                        <tr>
                            <td>title</td>
                            <td>抽屉标题，如果使用 slot 自定义了页头，则 title 无效</td>
                            <td>String</td>
                            <td>-</td>
                        </tr>
                        <tr>
                            <td>width</td>
                            <td>抽屉宽度。当其值不大于 100 时以百分比显示，大于 100 时为像素</td>
                            <td>Number | String</td>
                            <td>256</td>
                        </tr>
                        <tr>
                            <td>closable</td>
                            <td>是否显示右上角的关闭按钮</td>
                            <td>Boolean</td>
                            <td>true</td>
                        </tr>
                        <tr>
                            <td>mask-closable</td>
                            <td>是否允许点击遮罩层关闭</td>
                            <td>Boolean</td>
                            <td>true</td>
                        </tr>
                        <tr>
                            <td>mask</td>
                            <td>是否显示遮罩层</td>
                            <td>Boolean</td>
                            <td>true</td>
                        </tr>
                        <tr>
                            <td>mask-style</td>
                            <td>遮罩层样式</td>
                            <td>Object</td>
                            <td>-</td>
                        </tr>
                        <tr>
                            <td>styles</td>
                            <td>抽屉中间层的样式</td>
                            <td>Object</td>
                            <td>-</td>
                        </tr>
                        <tr>
                            <td>scrollable</td>
                            <td>页面是否可以滚动</td>
                            <td>Boolean</td>
                            <td>false</td>
                        </tr>
                        <tr>
                            <td>placement</td>
                            <td>抽屉的方向，可选值为 left 或 right</td>
                            <td>String</td>
                            <td>right</td>
                        </tr>
                        <!--<tr>-->
                            <!--<td>z-index</td>-->
                            <!--<td>设置 Drawer 的 z-index</td>-->
                            <!--<td>Number</td>-->
                            <!--<td>1000</td>-->
                        <!--</tr>-->
                        <tr>
                            <td>transfer</td>
                            <td>是否将抽屉放置于 body 内</td>
                            <td>Boolean</td>
                            <td>true</td>
                        </tr>
                        <tr>
                            <td>class-name</td>
                            <td>设置抽屉容器.ivu-drawer-wrap的类名</td>
                            <td>String</td>
                            <td>-</td>
                        </tr>
                        <tr>
                            <td>inner</td>
                            <td>是否设置抽屉在某个元素内打开，开启此属性时，应当关闭 transfer 属性</td>
                            <td>Boolean</td>
                            <td>false</td>
                        </tr>
                    </tbody>
                </table>
                <inAnchor title="Drawer events" h3></inAnchor>
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
                            <td>on-close</td>
                            <td>关闭抽屉时触发</td>
                            <td>无</td>
                        </tr>
                        <tr>
                            <td>on-visible-change</td>
                            <td>显示状态发生变化时触发</td>
                            <td>true / false</td>
                        </tr>
                    </tbody>
                </table>
                <inAnchor title="Drawer slot" h3></inAnchor>
                <table>
                    <thead>
                    <tr>
                        <th>名称</th>
                        <th>说明</th>
                    </tr>
                    </thead>
                    <tbody>
                    <tr>
                        <td>header</td>
                        <td>自定义标题栏</td>
                    </tr>
                    <tr>
                        <td>close</td>
                        <td>自定义右上角关闭内容</td>
                    </tr>
                    <tr>
                        <td>默认</td>
                        <td>抽屉主体内容</td>
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
    import Code from '../../code/drawer';
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
                value1: false,
                value2: false,
                value3: false,
                value4: false,
                value5: false,
                value6: false,
                styles: {
                    height: 'calc(100% - 55px)',
                    overflow: 'auto',
                    paddingBottom: '53px',
                    position: 'static'
                },
                formData: {
                    name: '',
                    url: '',
                    owner: '',
                    type: '',
                    approver: '',
                    date: '',
                    desc: ''
                },
                pStyle: {
                    fontSize: '16px',
                    color: 'rgba(0,0,0,0.85)',
                    lineHeight: '24px',
                    display: 'block',
                    marginBottom: '16px'
                }
            }
        },
        methods: {

        }
    }
</script>