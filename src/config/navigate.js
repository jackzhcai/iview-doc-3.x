// 定义左侧导航

const list = {
    guide: [
        {
            title: '介绍',
            titleEn: 'Introduction',
            path: '/docs/guide/introduce'
        },
        {
            title: '实践',
            titleEn: 'Practice',
            path: '/docs/guide/case'
        },
        {
            title: '设计原则',
            titleEn: 'Design Principles',
            path: '/docs/guide/design'
        },
        {
            title: '布局',
            titleEn: 'Navigation Examples',
            path: '/docs/guide/layout'
        },
        {
            title: '参与贡献',
            titleEn: 'Contributing Guide',
            path: '/docs/guide/standard'
        }
    ],
    beforeComponents: [
        {
            title: '安装',
            titleEn: 'Installation',
            path: '/docs/guide/install'
        },
        {
            title: '快速上手',
            titleEn: 'Quick Start',
            path: '/docs/guide/start'
        },
        {
            title: '全局配置',
            titleEn: 'Global Options',
            path: '/docs/guide/global'
        },
        {
            title: '国际化',
            titleEn: 'Internationalization',
            path: '/docs/guide/i18n'
        },
        {
            title: '定制主题',
            titleEn: 'Customize Theme',
            path: '/docs/guide/theme'
        },
        {
            title: 'iView Loader',
            titleEn: 'iView Loader',
            path: '/docs/guide/iview-loader'
        },
        // {
        //     title: '概览',
        //     titleEn: 'Overview',
        //     path: '/overview'
        // },
        {
            title: '在 Nuxt.js 中使用',
            titleEn: 'Using in Nuxt.js',
            path: 'https://dev.iviewui.com/articles/1024499044308881408',
            target: '_blank'
        },
        {
            title: '更新日志',
            titleEn: 'Change Log',
            path: '/docs/guide/update'
        }
    ],
    components: [
        {
            type: 'Basic',
            title: '基础',
            list: [
                {
                    title: 'Color 色彩',
                    path: '/components/color',
                    img: 'color.png',
                    icon: 'ios-color-fill-outline'
                },
                {
                    title: 'Font 字体',
                    path: '/components/font',
                    img: 'font.png',
                    icon: 'ios-at-outline'
                },
                {
                    title: 'Button 按钮',
                    path: '/components/button',
                    img: 'button.png',
                    icon: 'logo-youtube'
                },
                {
                    title: 'Icon 图标',
                    path: '/components/icon',
                    img: 'icon.png',
                    icon: 'ios-heart-outline'
                }
            ]
        },
        {
            type: 'Layout',
            title: '布局',
            list: [
                {
                    title: 'Grid 栅格',
                    path: '/components/grid',
                    img: 'grid.png',
                    icon: 'ios-grid-outline'
                },
                {
                    title: 'Layout 布局',
                    path: '/components/layout',
                    img: 'layout-new.png',
                    icon: 'ios-browsers-outline'
                },
                {
                    title: 'Card 卡片',
                    path: '/components/card',
                    img: 'card.png',
                    icon: 'ios-card-outline'
                },
                {
                    title: 'Collapse 折叠面板',
                    path: '/components/collapse',
                    img: 'collapse.png',
                    icon: 'ios-albums-outline'
                },
                {
                    title: 'Split 面板分割',
                    path: '/components/split',
                    img: 'split.png',
                    icon: 'ios-square-outline'
                },
                {
                    title: 'Divider 分割线',
                    path: '/components/divider',
                    img: 'divider.png',
                    icon: 'ios-remove'
                },
                {
                    title: 'Cell 单元格',
                    path: '/components/cell',
                    img: 'cell.png',
                    icon: 'ios-list-box-outline'
                },
            ]
        },
        {
            type: 'Navigation',
            title: '导航',
            list: [
                {
                    title: 'Menu 导航菜单',
                    path: '/components/menu',
                    img: 'menu.png',
                    icon: 'ios-menu'
                },
                {
                    title: 'Tabs 标签页',
                    path: '/components/tabs',
                    img: 'tabs.png',
                    icon: 'ios-more-outline'
                },
                {
                    title: 'Dropdown 下拉菜单',
                    path: '/components/dropdown',
                    img: 'dropdown.png',
                    icon: 'md-arrow-dropdown'
                },
                {
                    title: 'Page 分页',
                    path: '/components/page',
                    img: 'page.png',
                    icon: 'ios-book-outline'
                },
                {
                    title: 'Breadcrumb 面包屑',
                    path: '/components/breadcrumb',
                    img: 'breadcrumb.png',
                    icon: 'ios-arrow-forward'
                },
                {
                    title: 'Badge 徽标数',
                    path: '/components/badge',
                    img: 'badge.png',
                    icon: 'md-square'
                },
                {
                    title: 'Anchor 锚点',
                    path: '/components/anchor',
                    img: 'anchor.png',
                    icon: 'md-link'
                },
                {
                    title: 'Steps 步骤条',
                    path: '/components/steps',
                    img: 'steps.png',
                    icon: 'ios-checkmark-circle-outline'
                },
                {
                    title: 'LoadingBar 加载进度条',
                    path: '/components/loading-bar',
                    img: 'loading-bar.png',
                    icon: 'ios-remove'
                }
            ]
        },
        {
            type: 'Form',
            title: '表单',
            list: [
                {
                    title: 'Input 输入框',
                    path: '/components/input',
                    img: 'input.png',
                    icon: 'ios-create-outline'
                },
                {
                    title: 'Radio 单选框',
                    path: '/components/radio',
                    img: 'radio.png',
                    icon: 'ios-radio-button-on'
                },
                {
                    title: 'Checkbox 多选框',
                    path: '/components/checkbox',
                    img: 'checkbox.png',
                    icon: 'ios-checkbox-outline'
                },
                {
                    title: 'Switch 开关',
                    path: '/components/switch',
                    img: 'switch.png',
                    icon: 'ios-switch'
                },
                {
                    title: 'Table 表格',
                    path: '/components/table',
                    img: 'table.png',
                    icon: 'ios-grid'
                },
                {
                    title: 'Select 选择器',
                    path: '/components/select',
                    img: 'select.png',
                    icon: 'ios-arrow-down'
                },
                {
                    title: 'AutoComplete 自动完成',
                    path: '/components/auto-complete',
                    img: 'auto-complete.png',
                    icon: 'md-list'
                },
                {
                    title: 'Slider 滑块',
                    path: '/components/slider',
                    img: 'slider.png',
                    icon: 'md-remove'
                },
                {
                    title: 'DatePicker 日期选择器',
                    path: '/components/date-picker',
                    img: 'date-picker.png',
                    icon: 'ios-calendar-outline'
                },
                {
                    title: 'TimePicker 时间选择器',
                    path: '/components/time-picker',
                    img: 'time-picker.png',
                    icon: 'ios-time-outline'
                },
                {
                    title: 'Cascader 级联选择',
                    path: '/components/cascader',
                    img: 'cascader.png',
                    icon: 'ios-more-outline'
                },
                {
                    title: 'Transfer 穿梭框',
                    path: '/components/transfer',
                    img: 'transfer.png',
                    icon: 'ios-swap'
                },
                {
                    title: 'InputNumber 数字输入框',
                    path: '/components/input-number',
                    img: 'input-number.png',
                    icon: 'ios-calculator'
                },
                {
                    title: 'Rate 评分',
                    path: '/components/rate',
                    img: 'rate.png',
                    icon: 'ios-star'
                },
                {
                    title: 'Upload 上传',
                    path: '/components/upload',
                    img: 'upload.png',
                    icon: 'ios-cloud-upload-outline'
                },
                {
                    title: 'ColorPicker 颜色选择器',
                    path: '/components/color-picker',
                    img: 'color-picker.png',
                    icon: 'ios-color-palette-outline'
                },
                {
                    title: 'Form 表单',
                    path: '/components/form',
                    img: 'form.png',
                    icon: 'ios-list-box-outline'
                }
            ]
        },
        {
            type: 'View',
            title: '视图',
            list: [
                {
                    title: 'Alert 警告提示',
                    path: '/components/alert',
                    img: 'alert.png',
                    icon: 'ios-information-circle-outline'
                },
                {
                    title: 'Message 全局提示',
                    path: '/components/message',
                    img: 'message.png',
                    icon: 'ios-alert-outline'
                },
                {
                    title: 'Notice 通知提醒',
                    path: '/components/notice',
                    img: 'notice.png',
                    icon: 'ios-notifications-outline'
                },
                {
                    title: 'Modal 对话框',
                    path: '/components/modal',
                    img: 'modal.png',
                    icon: 'ios-text-outline'
                },
                {
                    title: 'Drawer 抽屉',
                    path: '/components/drawer',
                    img: 'modal.png',
                    icon: 'md-list'
                },
                {
                    title: 'Tree 树形控件',
                    path: '/components/tree',
                    img: 'tree.png',
                    icon: 'ios-git-network'
                },
                {
                    title: 'Tooltip 文字提示',
                    path: '/components/tooltip',
                    img: 'tooltip.png',
                    icon: 'md-text'
                },
                {
                    title: 'Poptip 气泡提示',
                    path: '/components/poptip',
                    img: 'poptip.png',
                    icon: 'ios-chatboxes-outline'
                },
                {
                    title: 'Progress 进度条',
                    path: '/components/progress',
                    img: 'progress.png',
                    icon: 'ios-remove'
                },
                {
                    title: 'Avatar 头像',
                    path: '/components/avatar',
                    img: 'avatar.png',
                    icon: 'ios-contact-outline'
                },
                {
                    title: 'Tag 标签',
                    path: '/components/tag',
                    img: 'tag.png',
                    icon: 'md-pricetag'
                },
                {
                    title: 'Carousel 走马灯',
                    path: '/components/carousel',
                    img: 'carousel.png',
                    icon: 'ios-film-outline'
                },
                {
                    title: 'Timeline 时间轴',
                    path: '/components/timeline',
                    img: 'timeline.png',
                    icon: 'md-more'
                },
                {
                    title: 'Time 相对时间',
                    path: '/components/time',
                    img: 'time.png',
                    icon: 'ios-clock-outline'
                },
            ]
        },
        {
            type: 'Chart',
            title: '图表',
            list: [
                {
                    title: 'Circle 进度环',
                    path: '/components/circle',
                    img: 'circle.png',
                    icon: 'ios-radio-button-off'
                }
            ]
        },
        {
            type: 'Other',
            title: '其它',
            list: [
                {
                    title: 'Affix 图钉',
                    path: '/components/affix',
                    img: 'affix.png',
                    icon: 'logo-pinterest'
                },
                {
                    title: 'BackTop 返回顶部',
                    path: '/components/back-top',
                    img: 'back-top.png',
                    icon: 'ios-arrow-up'
                },
                {
                    title: 'Spin 加载中',
                    path: '/components/spin',
                    img: 'spin.png',
                    icon: 'ios-loading'
                },
                {
                    title: 'Scroll 无限滚动',
                    path: '/components/scroll',
                    img: 'scroll.png',
                    icon: 'ios-more'
                }
            ]
        }
    ],
    practice: [
        {
            title: '实践案例',
            titleEn: 'Practical Cases',
            path: '/docs/practice/case'
        },
        // {
        //     title: 'iView Logo 设计思路',
        //     titleEn: 'iView Logo Design',
        //     path: '/docs/practice/logo'
        // }
    ],
    live: [
        {
            title: '最新课程',
            path: '/live'
        }
    ]
};

export default list;
