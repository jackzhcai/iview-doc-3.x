let code = {};

code.base = `
<template>
    <Switch v-model="switch1" @on-change="change" />
</template>
<script>
    export default {
        data () {
            return {
                switch1: false
            }  
        },
        methods: {
            change (status) {
                this.$Message.info('开关状态：' + status);
            }
        }
    }
</script>
`;

code.size = `
<template>
    <Switch size="large" />
    <Switch />
    <Switch size="small" />
</template>
<script>
    export default {
        
    }
</script>
`;

code.custom = `
<template>
    <Switch>
        <span slot="open">开</span>
        <span slot="close">关</span>
    </Switch>
    <Switch>
        <Icon type="md-checkmark" slot="open"></Icon>
        <Icon type="md-close" slot="close"></Icon>
    </Switch>
    <br><br>
    <Switch size="large">
        <span slot="open">开启</span>
        <span slot="close">关闭</span>
    </Switch>
    <Switch size="large">
        <span slot="open">ON</span>
        <span slot="close">OFF</span>
    </Switch>
</template>
<script>
    export default {
        
    }
</script>
`;

code.disabled = `
<template>
    <Switch :disabled="disabled" />
    <Button type="primary" @click="disabled = !disabled">Toggle Disabled</Button>
</template>
<script>
    export default {
        data () {
            return {
                disabled: true
            }
        },
    }
</script>
`;

code.loading = `
<template>
    <Switch loading :value="true" />
    <Switch loading :value="false" size="small" />
</template>
<script>
    export default {
        
    }
</script>
`;

export default code;