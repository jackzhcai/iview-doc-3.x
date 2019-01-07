<template>
    <i-article>
        <article>
            <h1>Button 按钮</h1>
            <p>基础组件，触发业务逻辑时使用。</p>
            <Alert show-icon style="margin-top: 16px">注意：非 template/render 模式下，需使用 <code>i-button</code>。</Alert>
            <inAnchor title="代码示例" h2></inAnchor>
            <Demo title="按钮类型">
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
                    <p>按钮类型有：默认按钮、主按钮、虚线按钮、文字按钮以及四种颜色按钮。</p>
                    <p>通过设置<code>type</code>为<code>primary</code>、<code>dashed</code>、<code>text</code>、<code>info</code>、<code>success</code>、<code>warning</code>、<code>error</code>创建不同样式的按钮，不设置为默认样式。</p>
                </div>
                <i-code lang="html" slot="code">{{ code.type }}</i-code>
            </Demo>
            <Demo title="幽灵按钮">
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
                    <p>幽灵按钮将其他按钮的内容反色，背景变为透明，常用在有色背景上。</p>
                </div>
                <i-code lang="html" slot="code">{{ code.ghost }}</i-code>
            </Demo>
            <Demo title="图标按钮及按钮形状">
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
                    <p>通过设置<code>icon</code>属性在<code>Button</code>内嵌入一个<code>Icon</code>，或者直接在<code>Button</code>内使用<code>Icon</code>组件。</p>
                    <p>使用<code>Button</code>的<code>icon</code>属性，图标位置将在最左边，如果需要自定义位置，需使用<code>Icon</code>组件。</p>
                    <p>通过设置<code>shape</code>属性为<code>circle</code>，可将按钮置为圆的形状。</p>
                </div>
                <i-code lang="html" slot="code">{{ code.icon }}</i-code>
            </Demo>
            <Demo title="按钮尺寸">
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
                    <p>按钮有三种尺寸：大、默认（中）、小</p>
                    <p>通过设置<code>size</code>为<code>large</code>和<code>small</code>将按钮设置为大和小尺寸，不设置为默认（中）尺寸。</p>
                </div>
                <i-code lang="html" slot="code">{{ code.size }}</i-code>
            </Demo>
            <Demo title="长按钮">
                <div slot="demo">
                    <Button type="success" long>SUBMIT</Button>
                    <br><br>
                    <Button type="error" long>DELETE</Button>
                </div>
                <div slot="desc">
                    <p>通过设置属性 <code>long</code> 可将按钮宽度设置为 100%，常用于弹窗内操作按钮。</p>
                    <p>使用者也可以直接通过给组件添加 <code>style</code> 来设置更细节的样式，比如定宽。</p>
                </div>
                <i-code lang="html" slot="code">{{ code.long }}</i-code>
            </Demo>
            <Demo title="不可用状态">
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
                    <p>通过添加<code>disabled</code>属性可将按钮设置为不可用状态。</p>
                </div>
                <i-code lang="html" slot="code">{{ code.disabled }}</i-code>
            </Demo>
            <Demo title="加载中状态">
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
                    <p>通过添加<code>loading</code>属性可以让按钮处于加载中状态，后两个按钮在点击时进入加载状态。</p>
                </div>
                <i-code lang="html" slot="code">{{ code.loading }}</i-code>
            </Demo>
            <Demo title="按钮组合">
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
                    <p>将多个<code>Button</code>放入<code>ButtonGroup</code>内，可实现按钮组合的效果。</p>
                    <p>通过设置<code>ButtonGroup</code>的属性<code>size</code>为<code>large</code>和<code>small</code>，可将按钮组尺寸设置为大和小，不设置<code>size</code>，则为默认（中）尺寸。</p>
                    <p>通过设置<code>ButtonGroup</code>的属性<code>shape</code>为<code>circle</code>，可将按钮组形状设置为圆角。</p>
                </div>
                <i-code lang="html" slot="code">{{ code.group }}</i-code>
            </Demo>
            <Demo title="按钮组纵向排列">
                <div slot="demo">
                    <ButtonGroup vertical>
                        <Button icon="logo-facebook"></Button>
                        <Button icon="logo-twitter"></Button>
                        <Button icon="logo-googleplus"></Button>
                        <Button icon="logo-tumblr"></Button>
                    </ButtonGroup>
                </div>
                <div slot="desc">
                    <p>通过设置<code>ButtonGroup</code>的属性<code>vertical</code>，可以使按钮组纵向排列。</p>
                </div>
                <i-code lang="html" slot="code">{{ code.vertical }}</i-code>
            </Demo>

            <Demo title="跳转">
                <div slot="demo">
                    <Button to="/components/icon">普通跳转</Button>
                    <Button to="/components/icon" replace>不保存历史的跳转</Button>
                    <Button to="//iviewui.com" target="_blank">新窗口打开</Button>
                </div>
                <div slot="desc">
                    <p>通过设置 <code>to</code> 可以实现点击按钮直接跳转，支持传入 vue-router 对象。</p>
                    <p>设置 <code>replace</code> 则不会保存历史记录。</p>
                    <p>设置 <code>target</code>，会跟 a 标签一样的行为。</p>
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
                            <th>属性</th>
                            <th>说明</th>
                            <th>类型</th>
                            <th>默认值</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>type</td>
                            <td>按钮类型，可选值为 <code>default</code>、<code>primary</code>、<code>dashed</code>、<code>text</code>、<code>info</code>、<code>success</code>、<code>warning</code>、<code>error</code>或者不设置</td>
                            <td>String</td>
                            <td>default</td>
                        </tr>
                        <tr>
                            <td>ghost</td>
                            <td>幽灵属性，使按钮背景透明</td>
                            <td>Boolean</td>
                            <td>false</td>
                        </tr>
                        <tr>
                            <td>size</td>
                            <td>按钮大小，可选值为<code>large</code>、<code>small</code>、<code>default</code>或者不设置</td>
                            <td>String</td>
                            <td>default</td>
                        </tr>
                        <tr>
                            <td>shape</td>
                            <td>按钮形状，可选值为<code>circle</code>或者不设置</td>
                            <td>String</td>
                            <td>-</td>
                        </tr>
                        <tr>
                            <td>long</td>
                            <td>开启后，按钮的长度为 100%</td>
                            <td>Boolean</td>
                            <td>false</td>
                        </tr>
                        <tr>
                            <td>html-type</td>
                            <td>设置<code>button</code>原生的<code>type</code>，可选值为<code>button</code>、<code>submit</code>、<code>reset</code></td>
                            <td>String</td>
                            <td>button</td>
                        </tr>
                        <tr>
                            <td>disabled</td>
                            <td>设置按钮为禁用状态</td>
                            <td>Boolean</td>
                            <td>false</td>
                        </tr>
                        <tr>
                            <td>loading</td>
                            <td>设置按钮为加载中状态</td>
                            <td>Boolean</td>
                            <td>false</td>
                        </tr>
                        <tr>
                            <td>icon</td>
                            <td>设置按钮的图标类型</td>
                            <td>String</td>
                            <td>-</td>
                        </tr>
                        <tr>
                            <td>custom-icon</td>
                            <td>设置按钮的自定义图标</td>
                            <td>String</td>
                            <td>-</td>
                        </tr>
                        <tr>
                            <td>to</td>
                            <td>跳转的链接，支持 vue-router 对象</td>
                            <td>String | Object</td>
                            <td>-</td>
                        </tr>
                        <tr>
                            <td>replace</td>
                            <td>路由跳转时，开启 replace 将不会向 history 添加新记录</td>
                            <td>Boolean</td>
                            <td>false</td>
                        </tr>
                        <tr>
                            <td>target</td>
                            <td>相当于 a 链接的 target 属性</td>
                            <td>String</td>
                            <td>_self</td>
                        </tr>
                    </tbody>
                </table>
                <inAnchor title="ButtonGroup props" h3></inAnchor>
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
                            <td>size</td>
                            <td>按钮组合大小，可选值为<code>large</code>、<code>small</code>、<code>default</code>或者不设置</td>
                            <td>String</td>
                            <td>default</td>
                        </tr>
                        <tr>
                            <td>shape</td>
                            <td>按钮组合形状，可选值为<code>circle</code>或者不设置</td>
                            <td>String</td>
                            <td>-</td>
                        </tr>
                        <tr>
                            <td>vertical</td>
                            <td>是否纵向排列按钮组</td>
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
