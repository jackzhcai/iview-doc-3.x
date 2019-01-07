<template>
    <i-article>
        <article>
            <h1>Button</h1>
            <p>Basic component that is used to trigger bussiness logic.</p>
            <Alert show-icon style="margin-top: 16px">Warning：Except for template/render mode，use <code>i-button</code> instead.</Alert>
            <inAnchor title="Example" h2></inAnchor>
            <Demo title="Types">
                <div slot="demo">
                    <Button>Default</Button>
                    <Button type="primary">Primary</Button>
                    <Button type="dashed">Dashed</Button>
                    <Button type="text">Text</Button>
                    <br><br>
                    <Button type="info">Info</Button>
                    <Button type="success">Success</Button>
                    <Button type="warning">Warning</Button>
                    <Button type="error">Error</Button>
                </div>
                <div slot="desc">
                    <p>Types of buttons: default, primary, dashed, text and 4 buttons of different colors.</p>
                    <p>Set the <code>type</code> to<code>primary</code>, <code>dashed</code>, <code>text</code>, <code>info</code>, <code>success</code>, <code>warning</code>, <code>error</code>to choose different buttons, by default the default type is used.</p>
                </div>
                <i-code lang="html" slot="code">{{ code.type }}</i-code>
            </Demo>
            <Demo title="Ghost">
                <div slot="demo">
                    <div style="padding: 20px;background: rgb(190, 200, 200)">
                        <Button type="default" ghost>Default</Button>
                        <Button type="primary" ghost>Primary</Button>
                        <Button type="dashed" ghost>Dashed</Button>
                        <Button type="text" ghost>Text</Button>
                        <br><br>
                        <Button type="info" ghost>Info</Button>
                        <Button type="success" ghost>Success</Button>
                        <Button type="warning" ghost>Warning</Button>
                        <Button type="error" ghost>Error</Button>
                    </div>
                </div>
                <div slot="desc">
                    <p><code>ghost</code> property will make button's background transparent, it is common used in colored background.</p>
                </div>
                <i-code lang="html" slot="code">{{ code.ghost }}</i-code>
            </Demo>
            <Demo title="Icons & Shapes">
                <div slot="demo">
                    <Button type="primary" shape="circle" icon="ios-search"></Button>
                    <Button type="primary" icon="ios-search">Search</Button>
                    <Button type="primary" shape="circle" icon="ios-search">Search</Button>
                    <Button type="primary" shape="circle">Circle</Button>
                    <br><br>
                    <Button shape="circle" icon="ios-search"></Button>
                    <Button icon="ios-search">Search</Button>
                    <Button shape="circle" icon="ios-search">Search</Button>
                    <Button shape="circle">Circle</Button>
                </div>
                <div slot="desc">
                    <p>Set the <code>icon</code> to insert an <code>Icon</code> to the <code>Button</code>, or use the <code>Icon</code> component inside the <code>Button</code> directly.</p>
                    The icon would appear at the leftmost side of the <code>Button</code> when <p>using the <code>icon</code>; use <code>Icon</code> component for different icons' positions.</p>
                    <p>Set the <code>shape</code> to <code>circle</code> to use a circle button.</p>
                </div>
                <i-code lang="html" slot="code">{{ code.icon }}</i-code>
            </Demo>
            <Demo title="Size">
                <div slot="demo">
                    <RadioGroup v-model="buttonSize" type="button">
                        <Radio label="large">Large</Radio>
                        <Radio label="default">Default</Radio>
                        <Radio label="small">small</Radio>
                    </RadioGroup>
                    <br><br>
                    <Button :size="buttonSize" type="primary">Primary</Button>
                    <Button :size="buttonSize" type="default">Default</Button>
                    <Button :size="buttonSize" type="dashed">Dashed</Button>
                    <Button :size="buttonSize" type="text">Text</Button>
                    <br><br>
                    <Button :size="buttonSize" icon="ios-download-outline" type="primary" shape="circle"></Button>
                    <Button :size="buttonSize" icon="ios-download-outline" type="primary">Download</Button>
                    <br><br>
                    <ButtonGroup :size="buttonSize">
                        <Button :size="buttonSize" type="primary">
                            <Icon type="ios-arrow-back" />
                            Backward
                        </Button>
                        <Button :size="buttonSize" type="primary">
                            Forward
                            <Icon type="ios-arrow-forward" />
                        </Button>
                    </ButtonGroup>
                </div>
                <div slot="desc">
                    <p>Sizes of buttons: large, default (medium) and small.</p>
                    <p>Set the <code>size</code> to <code>large</code> or <code>small</code> to use large/small size of button, by default the button's size is medium.</p>
                </div>
                <i-code lang="html" slot="code">{{ code.size }}</i-code>
            </Demo>
            <Demo title="Long Button">
                <div slot="demo">
                    <Button type="success" long>SUBMIT</Button>
                    <br><br>
                    <Button type="error" long>DELETE</Button>
                </div>
                <div slot="desc">
                    <p>Set the <code>long</code> to set the width of the button to 100%，it's usually used for modals.</p>
                    <p>Users could also add <code>style</code> to the component to furtherly refine, e.g., use customed width.</p>
                </div>
                <i-code lang="html" slot="code">{{ code.long }}</i-code>
            </Demo>
            <Demo title="Disabled">
                <div slot="demo">
                    <Button>Default</Button>
                    <Button disabled>Default(Disabled)</Button>
                    <br><br>
                    <Button type="primary">Primary</Button>
                    <Button type="primary" disabled>Primary(Disabled)</Button>
                    <br><br>
                    <Button type="dashed">Dashed</Button>
                    <Button type="dashed" disabled>Dashed(Disabled)</Button>
                    <br><br>
                    <Button type="text">Text</Button>
                    <Button type="text" disabled>Text(Disabled)</Button>
                </div>
                <div slot="desc">
                    <p>Set the <code>disabled</code> attribute to disable the button.</p>
                </div>
                <i-code lang="html" slot="code">{{ code.disabled }}</i-code>
            </Demo>
            <Demo title="Loading">
                <div slot="demo">
                    <Button type="primary" loading>Loading...</Button>
                    <Button type="primary" :loading="loading" @click="toLoading">
                        <span v-if="!loading">Click me!</span>
                        <span v-else>Loading...</span>
                    </Button>
                    <Button type="primary" :loading="loading2" icon="ios-power" @click="toLoading2">
                        <span v-if="!loading2">Click me!</span>
                        <span v-else>Loading...</span>
                    </Button>
                    <Button loading shape="circle"></Button>
                    <Button loading shape="circle" type="primary"></Button>
                </div>
                <div slot="desc">
                    <p>Set <code>loading</code> attribute to set the button to loading status, click the latter two buttons to see the loading effect in action.</p>
                </div>
                <i-code lang="html" slot="code">{{ code.loading }}</i-code>
            </Demo>
            <Demo title="Group">
                <div slot="demo">
                    <h4>Basic</h4>
                    <br><br>
                    <ButtonGroup>
                        <Button>Cancel</Button>
                        <Button type="primary">Confirm</Button>
                    </ButtonGroup>
                    <ButtonGroup>
                        <Button disabled>Yesterday</Button>
                        <Button disabled>Today</Button>
                        <Button disabled>Tomorrow</Button>
                    </ButtonGroup>
                    <ButtonGroup>
                        <Button type="primary">L</Button>
                        <Button>M</Button>
                        <Button>M</Button>
                        <Button type="dashed">R</Button>
                    </ButtonGroup>
                    <br><br>
                    <h4>Icons</h4>
                    <br><br>
                    <ButtonGroup>
                        <Button type="primary">
                            <Icon type="ios-arrow-back"></Icon>
                            Backward
                        </Button>
                        <Button type="primary">
                            Forward
                            <Icon type="ios-arrow-forward"></Icon>
                        </Button>
                    </ButtonGroup>
                    <ButtonGroup>
                        <Button type="primary" icon="ios-skip-backward"></Button>
                        <Button type="primary" icon="ios-skip-forward"></Button>
                    </ButtonGroup>
                    <ButtonGroup>
                        <Button icon="ios-color-wand-outline"></Button>
                        <Button icon="ios-sunny-outline"></Button>
                        <Button icon="ios-crop"></Button>
                        <Button icon="ios-color-filter-outline"></Button>
                    </ButtonGroup>
                    <br><br>
                    <h4>Circle</h4>
                    <br><br>
                    <ButtonGroup shape="circle">
                        <Button type="primary">
                            <Icon type="ios-arrow-back"></Icon>
                            Backward
                        </Button>
                        <Button type="primary">
                            Forward
                            <Icon type="ios-arrow-forward"></Icon>
                        </Button>
                    </ButtonGroup>
                    <ButtonGroup shape="circle">
                        <Button type="primary" icon="ios-skip-backward"></Button>
                        <Button type="primary" icon="ios-skip-forward"></Button>
                    </ButtonGroup>
                    <ButtonGroup shape="circle">
                        <Button icon="ios-color-wand-outline"></Button>
                        <Button icon="ios-sunny-outline"></Button>
                        <Button icon="ios-crop"></Button>
                        <Button icon="ios-color-filter-outline"></Button>
                    </ButtonGroup>
                    <br><br>
                    <h4>Size</h4>
                    <br><br>
                    <ButtonGroup size="large">
                        <Button>Large</Button>
                        <Button>Large</Button>
                    </ButtonGroup>
                    <ButtonGroup>
                        <Button>Default</Button>
                        <Button>Default</Button>
                    </ButtonGroup>
                    <ButtonGroup size="small">
                        <Button>Small</Button>
                        <Button>Small</Button>
                    </ButtonGroup>
                    <br><br>
                    <ButtonGroup size="large" shape="circle">
                        <Button>Large</Button>
                        <Button>Large</Button>
                    </ButtonGroup>
                    <ButtonGroup shape="circle">
                        <Button>Default</Button>
                        <Button>Default</Button>
                    </ButtonGroup>
                    <ButtonGroup size="small" shape="circle">
                        <Button>Small</Button>
                        <Button>Small</Button>
                    </ButtonGroup>
                </div>
                <div slot="desc">
                    <p>Combine multiple <code>Button</code> together into <code>ButtonGroup</code> to get a buttons set.</p>
                    <p>Set the <code>ButtonGroup</code> attribute <code>size</code> to <code>large</code> or <code>small</code> to choose large/small size of botton group, by default the <code>size</code> is medium.</p>
                    <p>Set the <code>ButtonGroup</code> atrribute <code>shape</code> to <code>circle</code> to apply a border-radius to the button's shape.</p>
                </div>
                <i-code lang="html" slot="code">{{ code.group }}</i-code>
            </Demo>
            <Demo title="Vertical ButtonGroup">
                <div slot="demo">
                    <ButtonGroup vertical>
                        <Button icon="logo-facebook"></Button>
                        <Button icon="logo-twitter"></Button>
                        <Button icon="logo-googleplus"></Button>
                        <Button icon="logo-tumblr"></Button>
                    </ButtonGroup>
                </div>
                <div slot="desc">
                    <p>Set the <code>ButtonGroup</code> attribute <code>vertical</code> to set up a vertical button group.</p>
                </div>
                <i-code lang="html" slot="code">{{ code.vertical }}</i-code>
            </Demo>

            <Demo title="Link Button">
                <div slot="demo">
                    <Button to="/components/icon-en">Normal</Button>
                    <Button to="/components/icon-en" replace>No history</Button>
                    <Button to="//iviewui.com" target="_blank">New window</Button>
                </div>
                <div slot="desc">
                    <p>By setting <code>to</code>, you can click the button to jump directly and support the vue-router object.</p>
                    <p>Setting <code>replace</code> will not save the history.</p>
                    <p>Setting <code>target</code> will behave like a tag.</p>
                </div>
                <i-code lang="html" slot="code">{{ code.link }}</i-code>
            </Demo>

            <ad></ad>

            <div class="api">
                <inAnchor title="API" h2></inAnchor>
                <inAnchor title="Button props" h3></inAnchor>
                <table>
                    <thead>
                        <tr>
                            <th>Attribute</th>
                            <th>Explanation</th>
                            <th>Type</th>
                            <th>Default</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>type</td>
                            <td>Button type, options include <code>default</code>, <code>primary</code>, <code>dashed</code>, <code>text</code>, <code>info</code>, <code>success</code>, <code>warning</code>, <code>error</code>, optional</td>
                            <td>String</td>
                            <td>default</td>
                        </tr>
                        <tr>
                            <td>ghost</td>
                            <td>Make background transparent and invert text and border colors.</td>
                            <td>Boolean</td>
                            <td>false</td>
                        </tr>
                        <tr>
                            <td>size</td>
                            <td>Button size，options include <code>large</code>, <code>small</code>, <code>default</code> optional</td>
                            <td>String</td>
                            <td>default</td>
                        </tr>
                        <tr>
                            <td>shape</td>
                            <td>Button shape, options include <code>circle</code>, optional</td>
                            <td>String</td>
                            <td>-</td>
                        </tr>
                        <tr>
                            <td>long</td>
                            <td>Set the width of the button to 100%</td>
                            <td>Boolean</td>
                            <td>false</td>
                        </tr>
                        <tr>
                            <td>html-type</td>
                            <td>Set the <code>button</code> raw <code>type</code>，options include <code>button</code>, <code>submit</code>, <code>reset</code></td>
                            <td>String</td>
                            <td>button</td>
                        </tr>
                        <tr>
                            <td>disabled</td>
                            <td>Disable the button</td>
                            <td>Boolean</td>
                            <td>false</td>
                        </tr>
                        <tr>
                            <td>loading</td>
                            <td>Set the button to loading status</td>
                            <td>Boolean</td>
                            <td>false</td>
                        </tr>
                        <tr>
                            <td>icon</td>
                            <td>Set the icons used in the button</td>
                            <td>String</td>
                            <td>-</td>
                        </tr>
                        <tr>
                            <td>custom-icon</td>
                            <td>Set the custom icons used in the button</td>
                            <td>String</td>
                            <td>-</td>
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
                <inAnchor title="ButtonGroup props" h3></inAnchor>
                <table>
                    <thead>
                        <tr>
                            <th>Attribute</th>
                            <th>Explanation</th>
                            <th>Type</th>
                            <th>Default</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>size</td>
                            <td>ButtonGroup size, options include <code>large</code>, <code>small</code>, <code>default</code> optional</td>
                            <td>String</td>
                            <td>default</td>
                        </tr>
                        <tr>
                            <td>shape</td>
                            <td>ButtonGroup shape, options include<code>circle</code>, optional</td>
                            <td>String</td>
                            <td>-</td>
                        </tr>
                        <tr>
                            <td>vertical</td>
                            <td>For vertical ButtonGroup</td>
                            <td>Boolean</td>
                            <td>false</td>
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
    import Code from '../../code/button';
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
                loading: false,
                loading2: false,
                buttonSize: 'large'
            }
        },
        methods: {
            toLoading () {
                this.loading = true;
            },
            toLoading2 () {
                this.loading2 = true;
            }
        }
    }
</script>
