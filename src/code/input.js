let code = {};

code.base = `
<template>
    <Input v-model="value" placeholder="Enter something..." style="width: 300px" />
</template>
<script>
    export default {
        data () {
            return {
                value: ''
            }
        }
    }
</script>
`;

code.size = `
<template>
    <Input v-model="value1" size="large" placeholder="large size" />
    <br>
    <Input v-model="value2" placeholder="default size" />
    <br>
    <Input v-model="value3" size="small" placeholder="small size" />
</template>
<script>
    export default {
        data () {
            return {
                value1: '',
                value2: '',
                value3: ''
            }
        }
    }
</script>
`;

code.clearable = `
<template>
    <Input v-model="value14" placeholder="Enter something..." clearable style="width: 200px" />
</template>
<script>
    export default {
        data () {
            return {
                value14: 'Hello World'
            }
        }
    }
</script>
`;

code.icon = `
<template>
    <Input v-model="value4" icon="ios-clock-outline" placeholder="Enter something..." style="width: 200px" />
</template>
<script>
    export default {
        data () {
            return {
                value4: ''
            }
        }
    }
</script>
`;

code.textarea = `
<template>
    <Input v-model="value5" type="textarea" placeholder="Enter something..." />
    <Input v-model="value6" type="textarea" :rows="4" placeholder="Enter something..." />
</template>
<script>
    export default {
        data () {
            return {
                value5: '',
                value6: ''
            }
        }
    }
</script>
`;

code.autosize = `
<template>
    <Input v-model="value7" type="textarea" :autosize="true" placeholder="Enter something..." />
    <Input v-model="value8" type="textarea" :autosize="{minRows: 2,maxRows: 5}" placeholder="Enter something..." />
</template>
<script>
    export default {
        data () {
            return {
                value7: '',
                value8: ''
            }
        }
    }
</script>
`;

code.disabled = `
<template>
    <Input v-model="value9" disabled placeholder="Enter something..." />
    <Input v-model="value10" disabled type="textarea" placeholder="Enter something..." />
</template>
<script>
    export default {
        data () {
            return {
                value9: '',
                value10: ''
            }
        }
    }
</script>
`;

code.addon = `
<template>
    <Input v-model="value11">
        <span slot="prepend">http://</span>
        <span slot="append">.com</span>
    </Input>
    <br>
    <Input v-model="value12">
        <Select v-model="select1" slot="prepend" style="width: 80px">
            <Option value="http">http://</Option>
            <Option value="https">https://</Option>
        </Select>
        <Select v-model="select2" slot="append" style="width: 70px">
            <Option value="com">.com</Option>
            <Option value="org">.org</Option>
            <Option value="io">.io</Option>
        </Select>
    </Input>
    <br>
    <Input v-model="value13">
        <Select v-model="select3" slot="prepend" style="width: 80px">
            <Option value="day">Day</Option>
            <Option value="month">Month</Option>
        </Select>
        <Button slot="append" icon="ios-search"></Button>
    </Input>
</template>
<script>
    export default {
        data () {
            return {
                value11: '',
                value12: '',
                value13: '',
                select1: 'http',
                select2: 'com',
                select3: 'day'
            }
        }
    }
</script>
`;

code.prefix = `
<template>
    <div>
        Props：
        <Input prefix="ios-contact" placeholder="Enter name" style="width: auto" />
        <Input suffix="ios-search" placeholder="Enter text" style="width: auto" />
    </div>
    <div style="margin-top: 6px">
        Slots：
        <Input placeholder="Enter name" style="width: auto">
            <Icon type="ios-contact" slot="prefix" />
        </Input>
        <Input placeholder="Enter text" style="width: auto">
            <Icon type="ios-search" slot="suffix" />
        </Input>
    </div>
</template>
<script>
    export default {
        
    }
</script>
`;

code.search = `
<template>
    <div>
        <Input search placeholder="Enter something..." />
        <Input search enter-button placeholder="Enter something..." />
        <Input search enter-button="Search" placeholder="Enter something..." />
    </div>
</template>
<script>
    export default {
        
    }
</script>
`;

code.format = `
<template>
    <Poptip trigger="focus">
        <Input v-model="value15" prefix="logo-usd" placeholder="Enter number" style="width: 120px" />
        <div slot="content">{{ formatNumber }}</div>
    </Poptip>
</template>
<script>
    export default {
        data () {
            return {
                value15: ''
            }
        },
        computed: {
            formatNumber () {
                if (this.value15 === '') return 'Enter number';
                function parseNumber(str) {
                    const re = /(?=(?!\b)(\d{3})+$)/g;
                    return str.replace(re, ',');
                }
                return parseNumber(this.value15);
            }
        }
    }
</script>
`;

export default code;