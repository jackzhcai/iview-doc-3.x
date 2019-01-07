let code = {};

code.base = `
<template>
    <Progress :percent="25" />
    <Progress :percent="45" status="active" />
    <Progress :percent="65" status="wrong" />
    <Progress :percent="100" />
    <Progress :percent="25" hide-info />
</template>
<script>
    export default {
        
    }
</script>
`;

code.vertical = `
<template>
    <div style="height: 100px;">
        <Progress vertical :percent="25" />
        <Progress vertical :percent="45" status="active" />
        <Progress vertical :percent="65" status="wrong" />
        <Progress vertical :percent="100" />
        <Progress vertical :percent="25" hide-info />
    </div>
</template>
<script>
    export default {
        
    }
</script>
`;

code.percent = `
<template>
    <Progress :percent="percent" />
    <ButtonGroup size="large">
        <Button icon="ios-add" @click="add"></Button>
        <Button icon="ios-remove" @click="minus"></Button>
    </ButtonGroup>
</template>
<script>
    export default {
        data () {
            return {
                percent: 0
            }
        },
        methods: {
            add () {
                if (this.percent >= 100) {
                    return false;
                }
                this.percent += 10;
            },
            minus () {
                if (this.percent <= 0) {
                    return false;
                }
                this.percent -= 10;
            }
        }
    }
</script>
`;

code.custom = `
<template>
    <Progress :percent="25" :stroke-width="5" />
    <Progress :percent="100">
        <Icon type="checkmark-circled"></Icon>
        <span>成功</span>
    </Progress>
</template>
<script>
    export default {
        
    }
</script>
`;

code.segment = `
<template>
    <Tooltip content="3 done / 3 in progress / 4 to do" style="width: 100%">
        <Progress :percent="60" :success-percent="30" />
    </Tooltip>
</template>
<script>
    export default {
        
    }
</script>
`;

export default code;