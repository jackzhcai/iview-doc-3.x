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
        <h1>Change Log</h1>
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
                        <li>Optimize the experience of Input when entering Chinese in v-model mode. <issue id="5060"></issue></li>
                        <li>Optimize the placeholder color of the InputNumber. <issue id="5053"></issue></li>
                        <li>Optimize the Select style in multiple mode when the option is too long. <issue id="4938"></issue></li>
                        <li>Fixed Select problem that can not scroll on the mobile. <issue id="4941"></issue></li>
                        <li>Fixed Select problem that can not select in group mode in 3.2.0 version. <a href="https://github.com/iview/iview/commit/57bd5393c55e6f0101e8a2f92b5ae2dff9228ce2" target="_blank">57bd539</a></li>
                        <li>Fixed DatePicker problem in datetime mode, switching time, floating layer position is not correct. <issue id="5046"></issue></li>
                        <li>Fixed Cascader problem in change-on-select mode, click on the option that sometimes cannot be selected. <issue id="5021"></issue></li>
                        <li>Fixed Cascader problem when click option, it shows the wrong selected item sometimes. <issue id="4998"></issue></li>
                        <li>Fixed Cascader problem in filterable mode, the @on-change event returns an incorrect data. <issue id="4786"></issue></li>
                        <li>Fixed Cascader problem that could not display the full list when it was at the far right of the page (requires the transfer property to be turned on). <issue id="4189"></issue></li>
                        <li>Fixed Tag problem that manually modified the checked value and the UI did not respond. <issue id="4587"></issue></li>
                        <li>Fixed Scroll on demand problem that throw error about component was not registered. <issue id="3391"></issue></li>
                        <li>Fixed an issue that Modal's style was not correct in fullscreen mode with a width less than 768px. <issue id="4804"></issue></li>
                        <li>Fixed some issues with TS. <issue id="5044"></issue> <issue id="5054"></issue></li>
                        <li>Fixed an issue where Dropdown's style was wrong when used inside a Tree. <issue id="5056"></issue></li>
                    </ul>
                </TimelineItem>
                <TimelineItem>
                    <inAnchor title="3.2.0 Lost Tracks" h2></inAnchor>
                    <p>
                        <code>2018-12-18</code>
                    </p>
                    <ul>
                        <li>Table supports slot-scope usage. <issue id="4847"></issue>
                            <a href="https://run.iviewui.com/50ahQHrs" target="_blank">view demo</a>
                        </li>
                        <li>Tree add new property <code>check-strictly</code>, when it is turned on, in the checkbox mode, the parent-child relationship is no longer strictly followed. <issue id="4872"></issue></li>
                        <li>The @on-select-change and @on-check-change event of the Tree component return parameters add the current item. <issue id="4849"></issue></li>
                        <li>Fixed some issues with TS. <issue id="4809"></issue> <issue id="4465"></issue> <issue id="4930"></issue></li>
                        <li>Fixed Table problem that dynamically set the group header throw errors. <issue id="3472"></issue></li>
                        <li>Fixed InputNumber problem that the minimum value is set to a negative value and the value changes to 0. <issue id="5002"></issue></li>
                        <li>Fixed ColorPicker problem that sometimes can't focus on the input box in transfer mode. <issue id="4826"></issue></li>
                        <li>Fixed an issue where Modal's drag and drop functionality is not working under some browsers. <issue id="4903"></issue></li>
                        <li>Fixed the problem that when the Drawer multi-layer nesting is used, the inner layer is closed and the outer scrolling property is wrong. <issue id="4831"></issue></li>
                        <li>Fixed the Select problem that change slot dynamically, the bound value does not update the label. <issue id="4626"></issue></li>
                        <li>Fixed the Select problem that layer changes position due to slot changes. <issue id="4913"></issue></li>
                        <li>Fixed a problem where Form validation was not triggered after Select manual assignment. <issue id="4910"></issue></li>
                        <li>Fixed the problem that the Menu is not in the correct style in primary mode.</li>
                        <li>Modify the Upload event <code>on-form-change</code> dispatch time. <issue id="5012"></issue></li>
                        <li>Optimize the input experience of AutoComplete. <issue id="4985"></issue></li>
                        <li>Add Arabic. <mention id="OsamaElzero"></mention></li>
                    </ul>
                </TimelineItem>
                <TimelineItem>
                    <inAnchor title="3.1.5" h2></inAnchor>
                    <p>
                        <code>2018-11-09</code>
                    </p>
                    <ul>
                        <li>Fixed the ColorPicker problem that input could not focus under transfer mode. <issue id="4718"></issue></li>
                        <li>Fixed the Slider problem with InputNumber, it will throw error when clear the value. <issue id="4746"></issue></li>
                        <li>Fixed the AutoComplete problem that can not be selected or disappeared when select an item sometimes. <issue id="4750"></issue></li>
                        <li>Fixed the Table problem that can not use Cell component in Render function. <issue id="4258"></issue></li>
                        <li>Optimize the Switch style. <issue id="4762"></issue></li>
                    </ul>
                </TimelineItem>
                <TimelineItem>
                    <inAnchor title="3.1.4" h2></inAnchor>
                    <p>
                        <code>2018-10-30</code>
                    </p>
                    <ul>
                        <li>Tree add new method <code>getCheckedAndIndeterminateNodes</code> to get the selected and half-selected nodes. <issue id="4664"></issue></li>
                        <li>Fixed the Time problem that the calculation time is not accurate sometimes. <issue id="4651"></issue></li>
                        <li>Add Finnish. <mention id="lahdekorpi"></mention></li>
                    </ul>
                </TimelineItem>
                <TimelineItem>
                    <inAnchor title="3.1.3" h2></inAnchor>
                    <p>
                        <code>2018-09-30</code>
                    </p>
                    <ul>
                        <li>The Time component supports internationalization. <issue id="4317"></issue></li>
                        <li>Table add new event <code>@on-select-all-cancel</code>. <issue id="2586"></issue></li>
                        <li>Optimize the performance of Cascader at <code>trigger="hover"</code>. <issue id="4472"></issue></li>
                        <li>When the total property of the Page component is modified to 0, the current page is set to 1. <issue id="4460"></issue></li>
                        <li>Fixed the Select problem in filterable mode, it will display a complete list when matching a search item. <issue id="4273"></issue></li>
                        <li>Fixed the Select problem in filterable and multiple mode when set data dynamically. <issue id="4575"></issue></li>
                        <li>Fixed the Select problem in filterable mode with OptionGroup components. <issue id="4371"></issue></li>
                        <li>Fixed the Table problem when set height property, when open the expanded column, the scrollbar is wrong. <issue id="4219"></issue></li>
                        <li>Fixed the Carousel problem that dynamically setting height. <issue id="4324"></issue></li>
                    </ul>
                </TimelineItem>
                <TimelineItem>
                    <inAnchor title="3.1.2" h2></inAnchor>
                    <p>
                        <code>2018-09-25</code>
                    </p>
                    <ul>
                        <li>Fixed the problem that DatePicker will throw error in split-panels mode. <issue id="4524"></issue></li>
                        <li>Fixed the problem that DatePicker's panel will open when click the clear icon.</li>
                        <li>Fixed the problem that DatePicker change the month, the left month was larger than the right. <issue id="3973"></issue></li>
                        <li>Fixed the problem that FormItem could not be verified when using the required property. <issue id="4537"></issue></li>
                    </ul>
                </TimelineItem>
                <TimelineItem>
                    <inAnchor title="3.1.1" h2></inAnchor>
                    <p>
                        <code>2018-09-18</code>
                    </p>
                    <ul>
                        <li>Fixed some issues on supporting TypeScript. <issue id="4447"></issue> <issue id="4449"></issue> <issue id="4490"></issue></li>
                        <li>Fixed the problem that TimePicker throw error under version 3.1.0. <issue id="4473"></issue></li>
                        <li>Fixed the problem that Modal's mask has now z-index. <issue id="4439"></issue></li>
                        <li>Fixed the problem that using some components with transfer property in Modal, the layer is wrong. <a
                                href="https://github.com/iview/iview/commit/7bafe9d94c839ab811be044b4295ebb0661ab4ea" target="_blank">7bafe9d</a></li>
                        <li>Fixed the problem that ColorPicker not import Button component. <issue id="4483"></issue></li>
                        <li>Fixed the problem that InputNumber not emit event to Form when blur. <issue id="4536"></issue></li>
                        <li>Add Traditional Mongolian. <mention id="XuYS"></mention></li>
                    </ul>
                </TimelineItem>
                <TimelineItem>
                    <inAnchor title="3.1.0 INSIDE" h2></inAnchor>
                    <p>
                        <code>2018-09-03</code>
                    </p>
                    <ul>
                        <li>Supports TypeScript. <issue id="4406"></issue></li>
                        <li>Add Vue CLI 3 plugin. <a href="https://github.com/iview/vue-cli-plugin-iview" target="_blank">vue-cli-plugin-iview</a></li>
                        <li>The documentation adds Nuxt.js usage. <a href="https://dev.iviewui.com/articles/1024499044308881408" target="_blank">View</a></li>
                        <li>The document update <strong>Quick Start</strong> section. <router-link to="/docs/guide/start-en">View</router-link></li>
                        <li>Add new component Drawer. <router-link to="/components/drawer-en">View</router-link> <issue id="4352"></issue></li>
                        <li>ColorPicker add new property <code>editable</code>, support for input color values. <issue id="4353"></issue></li>
                        <li>Tabs add new property <code>beforeRemove</code>, return Promise to interrupt close.</li>
                        <li>InputNumber add new property <code>active-change</code>, when set to false, the data will only be changed when blur. <issue id="4315"></issue></li>
                        <li>Modal add new property <code>z-index</code>.</li>
                        <li>Modal's ESC button will now only close the topmost modal box, and when clicked on a Modal area, it will be placed at the top level.</li>
                        <li>Fixed bug that DatePicker's pane is wrong sometimes. <issue id="3773"></issue></li>
                        <li>Fixed bug that DatePicker can not use <code>disabled</code>. <issue id="4351"></issue></li>
                        <li>Fixed bug that Select's style is wrong under version 3.0.1 <issue id="4329"></issue></li>
                        <li>When MenuItem sets <code>target="_blank"</code>, clicking the menu no longer highlights the current item.</li>
                        <blockquote>Special thanks to <a href="https://github.com/yangdan8" target="_blank">@yangdan8</a></blockquote>
                    </ul>
                </TimelineItem>
                <TimelineItem>
                    <inAnchor title="3.0.1" h2></inAnchor>
                    <p>
                        <code>2018-08-22</code>
                    </p>
                    <ul>
                        <li>Select add new placement: <code>top-start</code>, <code>bottom-start</code>, <code>top-end</code>, <code>bottom-end</code>, and change the default value to <code>bottom-start</code>.</li>
                        <li>Fixed bug when importing iView on demand in 3.0 version. <issue id="4165"></issue></li>
                        <li>Fixed bug that DatePicker selected on a partial time zone. <issue id="4250"></issue></li>
                        <li>Fixed bug that the shortcuts of DatePicker format error. <issue id="4127"></issue></li>
                        <li>Fixed bug that DatePicker with multiple mode, cross-month selection will relocate to the first date location. <issue id="4249"></issue></li>
                        <li>Fixed bug when Select Option is too long, the style is wrong. <issue id="4194"></issue></li>
                        <li>Fixed bug that Select can use <code>clearable</code> in disabled mode. <issue id="3924"></issue></li>
                        <li>Fixed bug that FormItem dynamic setting <code>rules</code> sometimes does not work. <issue id="4214"></issue></li>
                        <li>Fixed bug that FormItem could not set <code>label-width</code> to 0.</li>
                        <li>Fixed bug that RadioGroup can't manually set data sometimes. <issue id="4114"></issue></li>
                        <li>Fixed bug that Input with number mode, when delete the value, it will be set to 0. <issue id="4048"></issue></li>
                        <li>Fixed bug when Tabs remove a tab, it will not display the correct label content sometimes. <issue id="4052"></issue></li>
                        <li>Optimize Transfer that you can only select all search result items. <issue id="4151"></issue></li>
                        <li>Optimize the style of the Tree. <issue id="4162"></issue></li>
                        <li>Progress add component name. <issue id="4036"></issue></li>
                    </ul>
                </TimelineItem>
                <Timeline-item color="green">
                    <Icon type="ios-trophy" size="18" slot="dot"></Icon>
                    <inAnchor title="3.0.0 Battleheart" h2></inAnchor>
                    <p>
                        <code>2018-07-28</code>
                    </p>
                    <h2>New Components</h2>
                    <ul>
                        <li>Add new component <code>Time</code>。<issue id="3645"></issue> <router-link to="/components/time-en">View</router-link></li>
                        <li>Add new component <code>Anchor</code>。<issue id="3369"></issue> <router-link to="/components/anchor-en">View</router-link></li>
                        <li>Add new component <code>Split</code>。<issue id="3844"></issue> <router-link to="/components/split-en">View</router-link></li>
                        <li>Add new component <code>Divider</code>。<issue id="3275"></issue> <router-link to="/components/divider-en">View</router-link></li>
                        <li>Add new component <code>Cell</code>。<router-link to="/components/cell-en">View</router-link></li>
                    </ul>
                    <h2>UI</h2>
                    <ul>
                        <li>Optimize the Collapse component style to look cleaner and fresher.</li>
                        <li>Optimize the Switch component style and make the dimensions more coordinated.</li>
                        <li>Optimize the Page component for a more concise style.</li>
                        <li>Optimize the Poptip / Tooltip components styles and the arrows are clearer.</li>
                        <li>Optimized the Tag component style and added a variety of preset colors.</li>
                        <li>Optimize the Alert component style, color and icons are more intuitive.</li>
                        <li>Optimize the Message / Notice components style to look cleaner and fresher.</li>
                        <li>Optimize the Modal and $Modal components style to look more coordinated.</li>
                        <li>Optimize the Menu style.</li>
                        <li>Optimize the Select style.</li>
                        <li>The default color of the Circle and Progress components is changed to the primary color, keeping the color uniform.</li>
                    </ul>
                    <h2>New Features</h2>
                    <br>
                    <h3>Global Settings</h3>
                    <ul>
                        <li>When using iView, you can make some properties of the global configuration component, for example:</li>
                        <i-code lang="auto" bg>{{ code.global.example }}</i-code>
                        Currently only supports the transfer and size properties. The component will use the properties set by prop first, and if not, then use the global configuration.
                    </ul>
                    <h3>Icon:</h3>
                    <ul>
                        <li>Upgrade to the <code>ionicons</code> 3.0 icon.</li>
                        <li>Add new property <code>custom</code>, now you can customize the icons. <issue id="3568"></issue> </li>
                    </ul>
                    <h3>Button:</h3>
                    <ul>
                        <li>Add new property <code>custom-icon</code>, now you can customize the icons of button.</li>
                        <li>Add new properties <code>to</code>, <code>replace</code>, <code>target</code>, support click to jump directly.</li>
                        <li>Add new property <code>ghost</code>, the button background can be made transparent and is often used on colored backgrounds.</li>
                    </ul>
                    <h3>Input:</h3>
                    <ul>
                        <li>Add new properties <code>prefix</code> and <code>suffix</code> , and the same named slot, support for setting the prefix and suffix icon.</li>
                        <li>Add new properties <code>search</code> and <code>enterButton</code>, support for input types of search boxes.</li>
                        <li>Add new event <code>@on-search</code>, when using the search type, trigger when you click search button or press the Enter key.</li>
                    </ul>
                    <h3>Modal:</h3>
                    <ul>
                        <li>Add new property <code>fullscreen</code>.</li>
                        <li>Add hidden mask layer property <code>mask</code>.</li>
                        <li>Add new property <code>draggable</code>.</li>
                    </ul>
                    <h3>Table:</h3>
                    <ul>
                        <li>Column add new property <code>indexMethod</code>, you can customize the index when use <code>type="index"</code> .</li>
                        <li>Column add new property <code>tooltip</code>, if open it, when the cell text exceeds one line, it will be displayed in ... and the full content will be displayed in the Tooltip.</li>
                    </ul>
                    <h3>Menu:</h3>
                    <ul>
                        <li>Add new properties <code>to</code>, <code>replace</code>, and <code>target</code>, support click to jump directly.</li>
                    </ul>
                    <h3>Breadcrumb:</h3>
                    <ul>
                        <li>Add new property <code>target</code>。</li>
                    </ul>
                    <h3>Badge:</h3>
                    <ul>
                        <li>Add new property <code>show-zero</code>. <issue id="3654"></issue> </li>
                        <li>Add new property <code>text</code>, now you can customize the content of Badge.</li>
                        <li>Add new property <code>status</code>, the Badge can be set to a status point.</li>
                        <li>Add new property <code>offset</code>, you can set the position.</li>
                        <li>Add new property <code>type</code>, the preset color can be set.</li>
                    </ul>
                    <h3>Page:</h3>
                    <ul>
                        <li>Add new property <code>prev-text</code> and <code>next-text</code>, you can customize the copy of the upper and lower pages.</li>
                    </ul>
                    <h3>Upload:</h3>
                    <ul>
                        <li>Add new property <code>paste</code>, after opening, you can upload files copied to the clipboard.</li>
                    </ul>
                    <h3>Tooltip:</h3>
                    <ul>
                        <li>Add new property <code>theme</code>, you can set either dark (default) or light.</li>
                        <li>Add new property <code>max-width</code>, when the maximum value is exceeded, the text will automatically wrap and be aligned.</li>
                    </ul>
                    <h3>Poptip:</h3>
                    <ul>
                        <li>Add new property <code>word-wrap</code>, when turned on, text that exceeds the specified width will automatically wrap and be aligned.</li>
                        <li>Add new property <code>padding</code>, you can customize the spacing value.</li>
                    </ul>
                    <h3>Rate:</h3>
                    <ul>
                        <li>Add new property <code>character</code>, <code>icon</code> and <code>custom-icon</code>, support for custom characters or icons.</li>
                    </ul>
                    <h3>Collapse:</h3>
                    <ul>
                        <li>Add new property <code>hide-arrow</code>, you can hide the arrows.</li>
                        <li>Add new property <code>simple</code>, can be displayed as a clean mode without borders.</li>
                    </ul>
                    <h3>Switch:</h3>
                    <ul>
                        <li>Add new property <code>loading</code>, it can be said that the switch is still being executed.</li>
                    </ul>
                    <h3>Tag:</h3>
                    <ul>
                        <li>There are 13 new presets added to the <code>color</code> property.</li>
                    </ul>
                    <h3>Dropdown:</h3>
                    <ul>
                        <li>Trigger mode <code>trigger</code> add <code>contextMenu</code>, which can be triggered by right clicking.</li>
                    </ul>
                    <h3>Circle:</h3>
                    <ul>
                        <li>Add new property <code>dashboard</code>.</li>
                    </ul>
                    <h3>Progress:</h3>
                    <ul>
                        <li>Added the segmentation progress property <code>success-percent</code>.</li>
                    </ul>
                    <h3>Avatar:</h3>
                    <ul>
                        <li>Add custom icon property <code>custom-icon</code>.</li>
                    </ul>
                    <h2>Optimizations</h2>
                    <br>
                    <h3>Breadcrumb:</h3>
                    <ul>
                        <li>The href value of the `a` is displayed.</li>
                    </ul>
                    <h3>Page:</h3>
                    <ul>
                        <li>Optimize the logic for fast forward and fast backwards. <issue id="3965"></issue> </li>
                    </ul>
                    <h3>Table:</h3>
                    <ul>
                        <li>Checkbox is centered when <code>type="selection"</code>.</li>
                    </ul>
                    <h2>Others</h2>
                    <ul>
                        <li>Add Mongolian. <mention id="Ariunbold13"></mention> </li>
                    </ul>
                    <h2>Bug Fix</h2>
                    <ul>
                        <li>Fixed a bug where the active animation was not oriented correctly when Progress was vertical.</li>
                        <li>Fixed a bug where Carousel does not use v-model when clicking on the indicator and the indicator is not updated.</li>
                        <li>Fixed a bug that Carouse loop is invalid.</li>
                    </ul>
                    <h2>Breaking Changes</h2>
                    <ul>
                        <li>Button discards type <code>ghost</code>, the original default style has changed.</li>
                        <li>The Icon is upgraded to the <code>ionicons</code> 3.0, icon and the icon's name has changed.</li>
                        <li>Breadcrumb discards the <code>href</code> property.</li>
                        <li>Badge's count property only supports the Number type.</li>
                        <li>The color property of Tag renames the original <code>blur</code>, <code>green</code>, <code>yellow</code>, <code>red</code> to <code>primary</code>, <code>success</code>, <code>warning</code>, <code>error</code>.</li>
                    </ul>
                </Timeline-item>
                <Timeline-item>
                    <Button size="large" @click="handleBefore">View 2.x Change Log</Button>
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
                window.open('http://v2.iviewui.com/docs/guide/update-en');
            }
        }
    }
</script>