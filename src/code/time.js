let code = {};

code.base = `
<template>
    <div>
        <Time :time="time1" />
            <br>
        <Time :time="time2" />
    </div>
</template>
<script>
    export default {
        data () {
            return {
                time1: (new Date()).getTime() - 60 * 3 * 1000,
                time2: (new Date()).getTime() - 86400 * 3 * 1000
            }
        }
    }
</script>
`;

code.interval = `
<template>
    <Time :time="time3" :interval="1" />
</template>
<script>
    export default {
        data () {
            return {
                time3: new Date()
            }
        }
    }
</script>
`;

code.type = `
<template>
    <div>
        <Time :time="time2" />
        <br>
        <Time :time="time2" type="date" />
        <br>
        <Time :time="time2" type="datetime" />
    </div>
</template>
<script>
    export default {
        data () {
            return {
                time2: (new Date()).getTime() - 86400 * 3 * 1000
            }
        }
    }
</script>
`;

code.hash = `
<template>
    <Time :time="time2" hash="#hash" />
</template>
<script>
    export default {
        data () {
            return {
                time2: (new Date()).getTime() - 86400 * 3 * 1000
            }
        }
    }
</script>
`;


export default code;