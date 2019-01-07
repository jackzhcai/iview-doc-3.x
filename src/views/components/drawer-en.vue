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
            <h1>Drawer</h1>
            <inAnchor title="Brief Introduction" h2></inAnchor>
            <p>A Drawer is a panel that is typically overlaid on top of a page and slides in from the side. It contains a set of information or actions. Since that user can interact with the Drawer without leaving the current page, tasks can be achieved more efficient within the same context.</p>
            <inAnchor title="When To Use" h2></inAnchor>
            <li>Use a Form to create or edit a set of information.</li>
            <li>Processing subtasks. When subtasks are too heavy for Poptip and we still want to keep the subtasks in the context of the main task, Drawer comes very handy.</li>
            <li>When a same Form is needed in multiple places.</li>

            <inAnchor title="Examples" h2></inAnchor>

            <Demo title="Basic">
                <div slot="demo">
                    <Button @click="value1 = true" type="primary">Open</Button>
                    <Drawer title="Basic Drawer" :closable="false" v-model="value1">
                        <p>Some contents...</p>
                        <p>Some contents...</p>
                        <p>Some contents...</p>
                    </Drawer>
                </div>
                <div slot="desc">
                    <p>Basic drawer.</p>
                </div>
                <i-code lang="html" slot="code">{{ code.base }}</i-code>
            </Demo>

            <Demo title="Left Slider">
                <div slot="demo">
                    <Button @click="value2 = true" type="primary">Open</Button>
                    <Drawer title="Basic Drawer" placement="left" :closable="false" v-model="value2">
                        <p>Some contents...</p>
                        <p>Some contents...</p>
                        <p>Some contents...</p>
                    </Drawer>
                </div>
                <div slot="desc">
                    <p>Basic drawer.</p>
                </div>
                <i-code lang="html" slot="code">{{ code.left }}</i-code>
            </Demo>

            <Demo title="Edit item in drawer">
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
                    <p>A drawer containing an editable form which needs to be collapsed by clicking the close button.</p>
                </div>
                <i-code lang="html" slot="code">{{ code.create }}</i-code>
            </Demo>

            <Demo title="Preview drawer">
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
                    <p>Use when you need to quickly preview the outline of the object. Such as list item preview.</p>
                </div>
                <i-code lang="html" slot="code">{{ code.profile }}</i-code>
            </Demo>

            <Demo title="Multi-level drawer">
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
                    <p>Open a new drawer on top of an existing drawer to handle multi branch tasks.</p>
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
                        <th>Property</th>
                        <th>Description</th>
                        <th>Type</th>
                        <th>Default</th>
                    </tr>
                    </thead>
                    <tbody>
                    <tr>
                        <td>value</td>
                        <td>Display Drawer or not. Use v-model to enable two-way binding.</td>
                        <td>Boolean</td>
                        <td>false</td>
                    </tr>
                    <tr>
                        <td>title</td>
                        <td>The title of Drawer. It is invalid if header slot is set.</td>
                        <td>String</td>
                        <td>-</td>
                    </tr>
                    <tr>
                        <td>width</td>
                        <td>The width of Drawer. It will be displayed as a percentage when the value less than 100, otherwise it is a pixel.</td>
                        <td>Number | String</td>
                        <td>256</td>
                    </tr>
                    <tr>
                        <td>closable</td>
                        <td>Display the close button at the right top corner or not.</td>
                        <td>Boolean</td>
                        <td>true</td>
                    </tr>
                    <tr>
                        <td>mask-closable</td>
                        <td>Allow mask-closing operation (Click mask layer around the Drawer to close it) or not.</td>
                        <td>Boolean</td>
                        <td>true</td>
                    </tr>
                    <tr>
                        <td>mask</td>
                        <td>Whether to display the mask layer.</td>
                        <td>Boolean</td>
                        <td>true</td>
                    </tr>
                    <tr>
                        <td>mask-style</td>
                        <td>The custom style of mask.</td>
                        <td>Object</td>
                        <td>-</td>
                    </tr>
                    <tr>
                        <td>styles</td>
                        <td>The custom style of container.</td>
                        <td>Object</td>
                        <td>-</td>
                    </tr>
                    <tr>
                        <td>scrollable</td>
                        <td>Allow scrolling or not.</td>
                        <td>Boolean</td>
                        <td>false</td>
                    </tr>
                    <tr>
                        <td>placement</td>
                        <td>The placement of the Drawer, options include left, right.</td>
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
                        <td>Whether to append the layer in body.</td>
                        <td>Boolean</td>
                        <td>true</td>
                    </tr>
                    <tr>
                        <td>class-name</td>
                        <td>Set Drawer's wrapper - <code>.ivu-drawer-wrap</code>'s class name.</td>
                        <td>String</td>
                        <td>-</td>
                    </tr>
                    <tr>
                        <td>inner</td>
                        <td>Whether to set the drawer in an element, when you turn this property on, you should turn off the transfer property.</td>
                        <td>Boolean</td>
                        <td>false</td>
                    </tr>
                    </tbody>
                </table>
                <inAnchor title="Drawer events" h3></inAnchor>
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
                        <td>Triggered when close the drawer.</td>
                        <td>-</td>
                    </tr>
                    <tr>
                        <td>on-visible-change</td>
                        <td>Triggered when the display status changes.</td>
                        <td>true / false</td>
                    </tr>
                    </tbody>
                </table>
                <inAnchor title="Drawer slot" h3></inAnchor>
                <table>
                    <thead>
                    <tr>
                        <th>Name</th>
                        <th>Description</th>
                    </tr>
                    </thead>
                    <tbody>
                    <tr>
                        <td>header</td>
                        <td>Custom header.</td>
                    </tr>
                    <tr>
                        <td>close</td>
                        <td>Custom right-top closing area.</td>
                    </tr>
                    <tr>
                        <td>default</td>
                        <td>Custom main content.</td>
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