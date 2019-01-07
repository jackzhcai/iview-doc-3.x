let code = {};

code.base = `
<template>
    <Rate v-model="value" />
</template>
<script>
    export default {
        data () {
            return {
                value: 0
            }
        }
    }
</script>
`;

code.half = `
<template>
    <Rate allow-half v-model="valueHalf" />
</template>
<script>
    export default {
        data () {
            return {
                valueHalf: 2.5
            }
        }
    }
</script>
`;

code.text = `
<template>
    <Row>
        <Col span="12">
            <Rate show-text v-model="valueText" />
        </Col>
        <Col span="12">
            <Rate show-text allow-half v-model="valueCustomText">
                <span style="color: #f5a623">{{ valueCustomText }}</span>
            </Rate>
        </Col>
    </Row>
</template>
<script>
    export default {
        data () {
            return {
                valueText: 3,
                valueCustomText: 3.8
            }
        }
    }
</script>
`;

code.disabled = `
<template>
    <Rate disabled v-model="valueDisabled" />
</template>
<script>
    export default {
        data () {
            return {
                valueDisabled: 2
            }
        }
    }
</script>
`;

code.clearable = `
<template>
    <Rate clearable v-model="value1" /> clearable: true
    <Rate v-model="value2" /> clearable: false
</template>
<script>
    export default {
        data () {
            return {
                value1: 3,
                value2: 3
            }
        }
    }
</script>
`;

code.custom = `
<template>
    <Rate v-model="value3" character="A" />
    <Rate v-model="value4" character="好" />
    <Rate v-model="value5" icon="ios-heart" />
</template>
<script>
    export default {
        data () {
            return {
                value3: 3,
                value4: 3,
                value5: 3
            }
        }
    }
</script>
`;

export default code;