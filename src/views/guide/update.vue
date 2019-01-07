<style>
    .doc-update .ivu-timeline .ivu-timeline-item-content{
        top: -14px;
    }
    .doc-update h2{
        margin: 0;
        font-weight: normal;
    }
    .doc-update code{
        margin: 8px 0 10px;
    }
    .doc-update ul{
        padding-left: 22px !important;
    }
    .doc-update-important{
        color: #3399ff;
    }
    .doc-update-loop.ivu-load-loop{
        animation-duration: 3s;
    }
</style>
<template>
    <i-article>
        <h1>更新日志</h1>
        <article class="doc-update">
            <Timeline pending>
                <TimelineItem>
                    <Icon type="ios-snow" class="ivu-load-loop doc-update-loop" style="font-size: 24px;color: rgb(220,50,51)" slot="dot"></Icon>
                    <inAnchor title="3.2.1" h2>
                        <span class="doc-update-important">Merry Christmas</span>
                    </inAnchor>
                    <p>
                        <code>2018-12-25</code>
                    </p>
                    <ul>
                        <li>优化 Input 的 v-model 在输入中文时的体验。<issue id="5060"></issue></li>
                        <li>优化 InputNumber 的 placeholder 颜色。<issue id="5053"></issue></li>
                        <li>优化 Select 在 multiple 模式下，选项过长的样式。<issue id="4938"></issue></li>
                        <li>修复 Select 列表无法在移动端滚动的问题。<issue id="4941"></issue></li>
                        <li>修复由 3.2.0 版本导致 Select 在 group 模式下，无法选择的问题。<a href="https://github.com/iview/iview/commit/57bd5393c55e6f0101e8a2f92b5ae2dff9228ce2" target="_blank">57bd539</a></li>
                        <li>修复 DatePicker 在 datetime 模式下，切换时间，浮层位置不正确的问题。<issue id="5046"></issue></li>
                        <li>修复 Cascader 在 change-on-select 模式下，点击选项有时无法选中的问题。<issue id="5021"></issue></li>
                        <li>修复 Cascader 点击选项有时显示错误的问题。<issue id="4998"></issue></li>
                        <li>修复 Cascader 在 filterable 模式下，@on-change 事件返回数据不正确的问题。<issue id="4786"></issue></li>
                        <li>修复 Cascader 在页面最右侧时，无法显示完整列表的问题（需开启 transfer 属性）。<issue id="4189"></issue></li>
                        <li>修复 Tag 手动修改 checked 值，UI 未响应的问题。<issue id="4587"></issue></li>
                        <li>修复 Scroll 在按需加载时，报错组件未注册的问题。<issue id="3391"></issue></li>
                        <li>修复 Modal 在 fullscreen 模式下，宽度小于 768px 时，样式不正确的问题。<issue id="4804"></issue></li>
                        <li>修复 TS 的一些问题。<issue id="5044"></issue> <issue id="5054"></issue></li>
                        <li>修复 Dropdown 在 Tree 内使用时，样式不正确的问题。<issue id="5056"></issue></li>
                    </ul>
                </TimelineItem>
                <TimelineItem>
                    <inAnchor title="3.2.0 Lost Tracks" h2></inAnchor>
                    <p>
                        <code>2018-12-18</code>
                    </p>
                    <ul>
                        <li>Table 支持 slot-scope 用法。<issue id="4847"></issue>
                            <a href="https://run.iviewui.com/50ahQHrs" target="_blank">查看示例</a>
                        </li>
                        <li>Tree 新增属性 <code>check-strictly</code>，开启后，在复选框模式下，将不再严格遵循父子互相关联的做法。<issue id="4872"></issue></li>
                        <li>Tree 的 @on-select-change 和 @on-check-change 事件返回参数新增当前项。<issue id="4849"></issue></li>
                        <li>修复 TS 的一些问题。<issue id="4809"></issue> <issue id="4465"></issue> <issue id="4930"></issue></li>
                        <li>修复 Table 动态设置表头分组报错的问题。<issue id="3472"></issue></li>
                        <li>修复 InputNumber 在设置最小值为负数时，数值变化为 0 时的错误。<issue id="5002"></issue></li>
                        <li>修复 ColorPicker 在 transfer 模式下，有时无法聚焦输入框的问题。<issue id="4826"></issue></li>
                        <li>修复 Modal 的拖拽功能在某些浏览器下无效的问题。<issue id="4903"></issue></li>
                        <li>修复 Drawer 多层嵌套使用时，内层关闭，外层的滚动属性错误的问题。<issue id="4831"></issue></li>
                        <li>修复 Select 动态修改 slot 后，绑定的值未更新 label 的问题。<issue id="4626"></issue></li>
                        <li>修复 Select 浮层有时因 slot 改变而位置发生变化的问题。<issue id="4913"></issue></li>
                        <li>修复 Select 手动赋值后，未触发 Form 验证的问题。<issue id="4910"></issue></li>
                        <li>修复 Menu 在 primary 模式下，样式不正确的问题。</li>
                        <li>修改 Upload 的 on-form-change 事件派发时机。<issue id="5012"></issue></li>
                        <li>优化 AutoComplete 的输入体验。<issue id="4985"></issue></li>
                        <li>新增阿拉伯语。<mention id="OsamaElzero"></mention></li>
                    </ul>
                </TimelineItem>
                <TimelineItem>
                    <inAnchor title="3.1.5" h2></inAnchor>
                    <p>
                        <code>2018-11-09</code>
                    </p>
                    <ul>
                        <li>修复 ColorPicker 在开启 transfer 时，输入框无法聚焦的问题。<issue id="4718"></issue></li>
                        <li>修复 Slider 在使用数字输入框时，清空数值报错的问题。<issue id="4746"></issue></li>
                        <li>修复 AutoComplete 有时无法选中、选中删除瞬间消失等问题。<issue id="4750"></issue></li>
                        <li>修复 Table 内无法使用单元格组件 Cell 的问题。<issue id="4258"></issue></li>
                        <li>优化 Switch 样式。<issue id="4762"></issue></li>
                    </ul>
                </TimelineItem>
                <TimelineItem>
                    <inAnchor title="3.1.4" h2></inAnchor>
                    <p>
                        <code>2018-10-30</code>
                    </p>
                    <ul>
                        <li>Tree 新增选中及半选节点的方法 <code>getCheckedAndIndeterminateNodes</code>。<issue id="4664"></issue></li>
                        <li>修复 Time 组件有时计算时间不准确的 bug。<issue id="4651"></issue></li>
                        <li>新增芬兰语。<mention id="lahdekorpi"></mention></li>
                    </ul>
                </TimelineItem>
                <TimelineItem>
                    <inAnchor title="3.1.3" h2></inAnchor>
                    <p>
                        <code>2018-09-30</code>
                    </p>
                    <ul>
                        <li>Time 组件支持国际化。<issue id="4317"></issue></li>
                        <li>Table 新增取消全选事件 <code>@on-select-all-cancel</code>。<issue id="2586"></issue></li>
                        <li>优化 Cascader 在 <code>trigger="hover"</code> 时的表现。<issue id="4472"></issue></li>
                        <li>Page 组件的 total 动态修改为 0 时，当前页置为 1。<issue id="4460"></issue></li>
                        <li>修复 Select 在 filterable 模式下，完整匹配搜索词时显示完整列表的问题。<issue id="4273"></issue></li>
                        <li>修复 Select 在 filterable 且 multiple 模式下，动态设置数据出错的问题。<issue id="4575"></issue></li>
                        <li>修复 Select 在 filterable 模式下，使用 OptionGroup 搜索出错的问题。<issue id="4371"></issue></li>
                        <li>修复 Table 在固定高度时，配置可展开列无法动态计算滚动条的问题。<issue id="4219"></issue></li>
                        <li>修复 Carousel 动态设置 height 出错的问题。<issue id="4324"></issue></li>
                    </ul>
                </TimelineItem>
                <TimelineItem>
                    <inAnchor title="3.1.2" h2></inAnchor>
                    <p>
                        <code>2018-09-25</code>
                    </p>
                    <ul>
                        <li>修复 DatePicker 在 split-panels 模式下，有时报错的问题。<issue id="4524"></issue></li>
                        <li>修复 DatePicker 点击清空图标时，弹出选择器的问题。</li>
                        <li>修复 DatePicker 切换月份时，左边月份比右边大的问题。<issue id="3973"></issue></li>
                        <li>修复 FormItem 使用 required 属性时，无法校验的问题。<issue id="4537"></issue></li>
                    </ul>
                </TimelineItem>
                <TimelineItem>
                    <inAnchor title="3.1.1" h2></inAnchor>
                    <p>
                        <code>2018-09-18</code>
                    </p>
                    <ul>
                        <li>修复支持 TypeScript 的一些问题。<issue id="4447"></issue> <issue id="4449"></issue> <issue id="4490"></issue></li>
                        <li>修复 3.1.0 版本下，TimePicker 报错的问题。<issue id="4473"></issue></li>
                        <li>修复 3.1.0 版本下，Modal 的遮罩层没有 z-index 的问题。<issue id="4439"></issue></li>
                        <li>修复 3.1.0 版本下，Modal 内使用其它开启 transfer 属性的组件后，层级错乱的问题。<a
                                href="https://github.com/iview/iview/commit/7bafe9d94c839ab811be044b4295ebb0661ab4ea" target="_blank">7bafe9d</a></li>
                        <li>修复 ColorPicker 未导入 Button 的问题。<issue id="4483"></issue></li>
                        <li>修复 InputNumber 失焦时没有触发 Form 校验的问题。<issue id="4536"></issue></li>
                        <li>新增传统蒙古语。<mention id="XuYS"></mention></li>
                    </ul>
                </TimelineItem>
                <TimelineItem>
                    <inAnchor title="3.1.0 INSIDE" h2></inAnchor>
                    <p>
                        <code>2018-09-03</code>
                    </p>
                    <ul>
                        <li>支持 TypeScript。<issue id="4406"></issue></li>
                        <li>增加 Vue CLI 3 插件。<a href="https://github.com/iview/vue-cli-plugin-iview" target="_blank">vue-cli-plugin-iview</a></li>
                        <li>文档增加 Nuxt.js 用法。<a href="https://dev.iviewui.com/articles/1024499044308881408" target="_blank">查看</a></li>
                        <li>文档更新<strong>快速上手</strong>章节。<router-link to="/docs/guide/start">查看</router-link></li>
                        <li>新增抽屉组件 Drawer。<router-link to="/components/drawer">查看</router-link> <issue id="4352"></issue></li>
                        <li>ColorPicker 新增属性 <code>editable</code>，支持输入色值。<issue id="4353"></issue></li>
                        <li>Tabs 新增属性 <code>beforeRemove</code>，返回 Promise 可中断关闭。</li>
                        <li>InputNumber 新增属性 <code>active-change</code>，设置为 false 时，只会在失焦时更改数据。<issue id="4315"></issue></li>
                        <li>Modal 新增属性 <code>z-index</code>。</li>
                        <li>Modal 的 ESC 按键，现在只会关闭最顶层的模态框，当点击某个 Modal 区域时，它将置为最顶层。</li>
                        <li>修复 DatePicker 在某些日期下，面板联动错误的 bug。<issue id="3773"></issue></li>
                        <li>修复 DatePicker 无法使用 <code>disabled</code> 属性的 bug。<issue id="4351"></issue></li>
                        <li>修复 Select 开启 <code>transfer</code> 属性后，在 3.0.1 版本下有时样式错误的 bug。<issue id="4329"></issue></li>
                        <li>MenuItem 设置 <code>target="_blank"</code> 时，点击菜单不再高亮当前项。</li>
                        <blockquote>特别感谢 <a href="https://github.com/yangdan8" target="_blank">@yangdan8</a></blockquote>
                    </ul>
                </TimelineItem>
                <TimelineItem>
                    <inAnchor title="3.0.1" h2></inAnchor>
                    <p>
                        <code>2018-08-22</code>
                    </p>
                    <ul>
                        <li>Select 的 placement 属性，新增值 <code>top-start</code>, <code>bottom-start</code>, <code>top-end</code>, <code>bottom-end</code>，并将默认值修改为 <code>bottom-start</code>。</li>
                        <li>修复 3.0 按需使用时，报错的 bug。<issue id="4165"></issue></li>
                        <li>修复 DatePicker 在部分时区下选择后错误的 bug。<issue id="4250"></issue></li>
                        <li>修复 DatePicker 的 shortcuts 功能自定义格式出错的 bug。<issue id="4127"></issue></li>
                        <li>修复 DatePicker 在 multiple 模式下，跨月选择会重新定位到第一个日期位置的 bug。<issue id="4249"></issue></li>
                        <li>修复 Select 的 Option 过长，样式错误的 bug。<issue id="4194"></issue></li>
                        <li>修复 Select 在 disabled 模式下，clearable 仍然能使用的 bug。<issue id="3924"></issue></li>
                        <li>修复 FormItem 动态设置 <code>rules</code> 有时不生效的 bug。<issue id="4214"></issue></li>
                        <li>修复 FormItem 无法给 <code>label-width</code> 设置为 0 的 bug。</li>
                        <li>修复 RadioGroup 有时无法手动设置数据的 bug。<issue id="4114"></issue></li>
                        <li>修复 Input 在 number 模式下，删除清空后，值会置为 0 的 bug。<issue id="4048"></issue></li>
                        <li>修复 Tabs 移除标签页时，有时无法显示正确的标签内容的 bug。<issue id="4052"></issue></li>
                        <li>优化 Transfer 在搜索时，只能全选搜索结果项。<issue id="4151"></issue></li>
                        <li>优化 Tree 的样式。<issue id="4162"></issue></li>
                        <li>Progress 增加 name。<issue id="4036"></issue></li>
                    </ul>
                </TimelineItem>
                <Timeline-item color="green">
                    <Icon type="ios-trophy" size="18" slot="dot"></Icon>
                    <inAnchor title="3.0.0 Battleheart" h2></inAnchor>
                    <p>
                        <code @dblclick="handleEgg">2018-07-28</code>
                    </p>
                    <h2>新增组件</h2>
                    <ul>
                        <li>相对时间组件 <code>Time</code>。<issue id="3645"></issue> <router-link to="/components/time">查看组件</router-link></li>
                        <li>锚点组件 <code>Anchor</code>。<issue id="3369"></issue> <router-link to="/components/anchor">查看组件</router-link></li>
                        <li>面板分割组件 <code>Split</code>。<issue id="3844"></issue> <router-link to="/components/split">查看组件</router-link></li>
                        <li>分割线组件 <code>Divider</code>。<issue id="3275"></issue> <router-link to="/components/divider">查看组件</router-link></li>
                        <li>单元格组件 <code>Cell</code>。<router-link to="/components/cell">查看组件</router-link></li>
                    </ul>
                    <h2>UI</h2>
                    <ul>
                        <li>优化 Collapse 组件样式，看起来更简洁、清新。</li>
                        <li>优化 Switch 组件样式，尺寸更协调了。</li>
                        <li>优化 Page 组件样式，风格更简洁。</li>
                        <li>优化 Poptip / Tooltip 组件样式，箭头更清晰了。</li>
                        <li>优化了 Tag 组件样式，增加多种预设的颜色。</li>
                        <li>优化 Alert 组件样式，配色和图标更直观好看了。</li>
                        <li>优化 Message / Notice 组件样式，看起来更简洁、清新。</li>
                        <li>优化 Modal、$Modal 样式，看起来更协调了。</li>
                        <li>优化 Menu 样式。</li>
                        <li>优化 Select 样式。</li>
                        <li>Circle 和 Progress 组件的默认色改为了主色，保持配色统一。</li>
                    </ul>
                    <h2>新特性</h2>
                    <br>
                    <h3>全局配置</h3>
                    <ul>
                        <li>使用 iView 时，可以进行全局配置组件的一些属性，例如：</li>
                        <i-code lang="auto" bg>{{ code.global.example }}</i-code>
                        目前只支持配置 transfer 和 size 两个属性。组件会优先使用 prop 设置的属性，如果未设置，再使用全局配置。
                    </ul>
                    <h3>Icon 图标：</h3>
                    <ul>
                        <li>升级至 <code>ionicons</code> 3.0 图标。</li>
                        <li>新增属性 <code>custom</code>，支持自定义图标。<issue id="3568"></issue> </li>
                    </ul>
                    <h3>Button 按钮：</h3>
                    <ul>
                        <li>新增属性 <code>custom-icon</code>，支持自定义图标。</li>
                        <li>新增属性 <code>to</code>、<code>replace</code>、<code>target</code>，支持点击直接跳转。</li>
                        <li>新增幽灵属性 <code>ghost</code>，可以使按钮背景透明，常用于有色背景上。</li>
                    </ul>
                    <h3>Input 输入框：</h3>
                    <ul>
                        <li>新增属性 <code>prefix</code> 和 <code>suffix</code> 以及同名 slot，支持设置前缀和后缀图标。</li>
                        <li>新增属性 <code>search</code> 和 <code>enterButton</code>，支持搜索类型的输入框。</li>
                        <li>新增事件 <code>@on-search</code>，使用搜索类型输入框时，点击搜索或按下回车键时触发。</li>
                    </ul>
                    <h3>Modal 对话框：</h3>
                    <ul>
                        <li>新增全屏属性 <code>fullscreen</code>。</li>
                        <li>新增隐藏遮罩层属性 <code>mask</code>。</li>
                        <li>新增拖拽属性 <code>draggable</code>。</li>
                    </ul>
                    <h3>Table 表格：</h3>
                    <ul>
                        <li>Column 新增属性 <code>indexMethod</code>， 可以自定义 <code>type="index"</code> 时的序号。</li>
                        <li>Column 新增属性 <code>tooltip</code>，开启后，当单元格文本超过一行，会以…显示，并在 Tooltip 中显示完整内容。</li>
                    </ul>
                    <h3>Menu 菜单：</h3>
                    <ul>
                        <li>新增属性 <code>to</code>、<code>replace</code>、<code>target</code>，支持点击直接跳转。</li>
                    </ul>
                    <h3>Breadcrumb 面包屑：</h3>
                    <ul>
                        <li>新增属性 <code>target</code>。</li>
                    </ul>
                    <h3>Badge 徽章：</h3>
                    <ul>
                        <li>新增属性 <code>show-zero</code>。<issue id="3654"></issue> </li>
                        <li>新增属性 <code>text</code>，可以自定义内容。</li>
                        <li>新增属性 <code>status</code>，可以设置徽标为状态点。</li>
                        <li>新增属性 <code>offset</code>，可以设置偏移量。</li>
                        <li>新增属性 <code>type</code>，可以设置预设的颜色。</li>
                    </ul>
                    <h3>Page 分页：</h3>
                    <ul>
                        <li>新增属性 <code>prev-text</code> 和 <code>next-text</code>，可以自定义上下页的文案。</li>
                    </ul>
                    <h3>Upload 上传：</h3>
                    <ul>
                        <li>新增属性 <code>paste</code>，开启后可以上传复制在剪贴板的文件。</li>
                    </ul>
                    <h3>Tooltip 文字提示：</h3>
                    <ul>
                        <li>新增属性 <code>theme</code>，可以设置 dark（默认）或 light 两种主题。</li>
                        <li>新增属性 <code>max-width</code>，超出最大值后，文本将自动换行，并两端对齐。</li>
                    </ul>
                    <h3>Poptip 气泡提示：</h3>
                    <ul>
                        <li>新增属性 <code>word-wrap</code>，开启后，超出指定宽度文本将自动换行，并两端对齐。</li>
                        <li>新增属性 <code>padding</code>，可以自定义间距值。</li>
                    </ul>
                    <h3>Rate 评分：</h3>
                    <ul>
                        <li>新增属性 <code>character</code>、<code>icon</code> 和 <code>custom-icon</code>，支持自定义字符或图标。</li>
                    </ul>
                    <h3>Collapse 折叠面板：</h3>
                    <ul>
                        <li>新增属性 <code>hide-arrow</code>，可以隐藏箭头。</li>
                        <li>新增属性 <code>simple</code>，可以显示为无边框的简洁模式。</li>
                    </ul>
                    <h3>Switch 开关：</h3>
                    <ul>
                        <li>新增属性 <code>loading</code>，可表示开关仍在执行中。</li>
                    </ul>
                    <h3>Tag 标签：</h3>
                    <ul>
                        <li><code>color</code> 属性新增了 13 种预设。</li>
                    </ul>
                    <h3>Dropdown 下拉菜单：</h3>
                    <ul>
                        <li>触发方式 trigger 新增 <code>contextMenu</code>，可以通过点击右键触发。</li>
                    </ul>
                    <h3>Circle 进度环：</h3>
                    <ul>
                        <li>新增仪表盘属性 <code>dashboard</code>。</li>
                    </ul>
                    <h3>Progress 进度条：</h3>
                    <ul>
                        <li>新增分段进度属性 <code>success-percent</code>。</li>
                    </ul>
                    <h3>Avatar 头像：</h3>
                    <ul>
                        <li>新增自定义图标属性 <code>custom-icon</code>。</li>
                    </ul>
                    <h2>优化</h2>
                    <br>
                    <h3>Breadcrumb 面包屑：</h3>
                    <ul>
                        <li>在链接上会显示 a 标签的 href 值。</li>
                    </ul>
                    <h3>Page 分页：</h3>
                    <ul>
                        <li>优化快进和快退的逻辑。<issue id="3965"></issue> </li>
                    </ul>
                    <h3>Table 表格：</h3>
                    <ul>
                        <li>优化 <code>type="selection"</code> 时，Checkbox 为居中。</li>
                    </ul>
                    <h2>其它</h2>
                    <ul>
                        <li>新增蒙古语。<mention id="Ariunbold13"></mention> </li>
                    </ul>
                    <h2>修复</h2>
                    <ul>
                        <li>修复 Progress 纵向时，active 动画方向不正确的 bug。</li>
                        <li>修复 Carousel 未使用 v-model 时，点击指示器，指示器不更新的 bug。</li>
                        <li>修复 Carousel 设置 loop 无效的 bug。</li>
                    </ul>
                    <h2>不兼容更新</h2>
                    <ul>
                        <li>Button 废弃 type <code>ghost</code>，原先的 default 样式有改变。</li>
                        <li>Icon 的图标升级至 <code>ionicons</code> 3.0 图标，图标名称有改变。</li>
                        <li>Breadcrumb 废弃 <code>href</code> 属性。</li>
                        <li>Badge 的 count 属性只支持 Number 类型。</li>
                        <li>Tag 的 color 属性将原先的 <code>blue</code>、<code>green</code>、<code>yellow</code>、<code>red</code> 更名为了 <code>primary</code>、<code>success</code>、<code>warning</code>、<code>error</code>。</li>
                    </ul>
                </Timeline-item>
                <Timeline-item>
                    <Button size="large" @click="handleBefore">查看 2.x 版本的日志</Button>
                </Timeline-item>
            </Timeline>
        </article>
    </i-article>
</template>
<script>
    import iArticle from '../../components/article.vue';
    import iCode from 'iCode';
    import Code from '../../code/guide';
    import inAnchor from '../../components/anchor.vue';
    import issue from '../../components/issue.vue';
    import mention from '../../components/mention.vue';

    import version from '../../config/config';

    export default {
        components: {
            iArticle,
            iCode,
            inAnchor,
            issue,
            mention
        },
        data () {
            return {
                code: Code
            }
        },
        mounted () {
            window.localStorage.setItem('version', version.version);
        },
        methods: {
            handleBefore () {
                window.open('http://v2.iviewui.com/docs/guide/update');
            },
            handleEgg () {
                this.$Notice.info({
                    title: decodeURI('%E6%81%AD%E5%96%9C%E4%BD%A0%E6%89%BE%E5%88%B0%E7%AC%AC%E4%B8%89%E6%9E%9A%E5%BD%A9%E8%9B%8B'),
                    desc: 'Keywords: Apple; Chapter 24',
                    duration: 0
                });
            }
        }
    }
</script>
