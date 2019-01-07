let code = {};

code.base = `
<template>
    <Page :total="100" />
</template>
<script>
    export default {
        
    }
</script>
`;

code.sizer = `
<template>
    <Page :total="100" show-sizer />
</template>
<script>
    export default {
        
    }
</script>
`;

code.elevator = `
<template>
    <Page :total="100" show-elevator />
</template>
<script>
    export default {
        
    }
</script>
`;

code.total = `
<template>
    <Page :total="100" show-total />
</template>
<script>
    export default {
        
    }
</script>
`;

code.mini = `
<template>
    <Page :total="40" size="small" />
    <Page :total="40" size="small" show-elevator show-sizer />
    <Page :total="40" size="small" show-total />
</template>
<script>
    export default {
        
    }
</script>
`;

code.simple = `
<template>
    <Page :current="2" :total="50" simple />
</template>
<script>
    export default {
        
    }
</script>
`;

code.text = `
<template>
    <Page :total="100" prev-text="Previous" next-text="Next" />
</template>
<script>
    export default {
        
    }
</script>
`;

export default code;