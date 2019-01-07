<style lang="less">
    @import "../styles/index3.less";
</style>
<template>
    <div class="index">
        <div class="index-main">
            <img src="../images/logo-doc.png" class="index-logo">
            <div class="index-search">
                <i-select
                        ref="select"
                        v-model="search"
                        filterable
                        :placeholder="searchText"
                        :not-found-text="notFoundText"
                        @on-change="handleSearch">
                    <i-option v-for="item in navigateList" :key="item.path" :value="item.path">
                        <template v-if="lang === 'zh-CN'">{{ item.title }}</template>
                        <template v-else>{{ item.title.split(' ')[0] }}</template>
                    </i-option>
                </i-select>
            </div>
            <row type="flex" justify="center" align="middle" class="index-container">
                <i-col span="24">
                    <img src="../images/index-title.png" class="index-title">
                    <div class="index-content">{{ $t('index.title1') }}</div>
                    <div class="index-content">{{ $t('index.title2') }}</div>
                    <div class="index-actions">
                        <Button class="index-btn" size="large" type="primary" shape="circle" :to="handleGoToMenu('/docs/guide/install')">{{ $t('index.start') }}</Button>
                        <Button class="index-btn" size="large" type="primary" shape="circle" ghost icon="ios-construct" to="https://dev.iviewui.com" target="_blank" v-if="lang === 'zh-CN'">开发者社区</Button>
                        <Button class="index-btn" size="large" type="primary" shape="circle" ghost icon="logo-github" to="https://github.com/iview/iview" target="_blank">GitHub</Button>
                        <Button class="index-btn" size="large" type="primary" shape="circle" ghost to="https://gitee.com/icarusion/iview" target="_blank" v-if="lang === 'zh-CN'">
                            <Icon custom="iconfont icon-mayun" size="12"></Icon>
                            码云
                        </Button>
                    </div>
                </i-col>
            </row>
        </div>
        <div class="index-bg-footer">
            <img src="../images/bg-index-footer.png">
        </div>
        <div class="index-extra">
            <Select size="small" value="3" style="width: 60px;margin: 0 10px;" @on-change="handleVersion">
                <Option value="3">3.x</Option>
                <Option value="2">2.x</Option>
                <Option value="1">1.x</Option>
            </Select>

            <Button size="small" @click="handleChangeLang">
                <template v-if="lang === 'zh-CN'">English</template>
                <template v-else>中文</template>
            </Button>
        </div>
    </div>
</template>
<script>
    import bus from '../../src/components/bus';
    import navigate from '../config/navigate';
    import Config from '../config/config';

    export default {
        data () {
            return {
                lang: this.$lang,
                searchText: this.$t('index.search'),
                notFoundText: this.$t('index.notFound'),
                navigateList: [],
                search: '',
            }
        },
        computed: {
            suffix () {
                return this.lang === 'zh-CN' ? '' : '-en';
            }
        },
        methods: {
            handleChangeLang () {
                const lang = this.lang === 'zh-CN' ? 'en-US' : 'zh-CN';
                bus.$emit('on-change-lang', lang, '/');
            },
            handleVersion (v) {
                if (v == 1) {
                    window.location.href = 'http://v1.iviewui.com';
                }
                if (v == 2) {
                    window.location.href = 'http://v2.iviewui.com';
                }
            },
            handleGoToMenu (name) {
                if (this.lang === 'zh-CN') {
                    return name;
                } else {
                    return name + '-en';
                }
            },
            handleSearch (path) {
                if (this.lang === 'en-US') path += '-en';
                this.search = '';
                this.$refs.select.setQuery('');
                this.$nextTick(() => {
                    setTimeout(() => {
                        this.$router.push(path);
                    }, 300);
                });
            },
        },
        mounted () {
            this.lang = this.$lang;
        },
        created () {
            this.lang = this.$lang;
            let list = [];
            for (let i = 0; i < navigate.components.length; i++) {
                for (let j = 0; j < navigate.components[i].list.length; j++) {
                    list.push(navigate.components[i].list[j]);
                }
            }
            this.navigateList = list;
        }
    }
</script>
