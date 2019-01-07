let code = {};

code.horizontal = `
<template>
    <p>Steven Paul Jobs was an American entrepreneur and business magnate. He was the chairman, chief executive officer, and a co-founder of Apple Inc.</p>
    <Divider />
    <p>Steven Paul Jobs was an American entrepreneur and business magnate. He was the chairman, chief executive officer, and a co-founder of Apple Inc.</p>
    <Divider>With Text</Divider>
    <p>Steven Paul Jobs was an American entrepreneur and business magnate. He was the chairman, chief executive officer, and a co-founder of Apple Inc.</p>
    <Divider dashed />
    <p>Steven Paul Jobs was an American entrepreneur and business magnate. He was the chairman, chief executive officer, and a co-founder of Apple Inc.</p>
</template>
<script>
    export default {
        
    }
</script>
`;

code.vertical = `
<template>
    Text
    <Divider type="vertical" />
    <a href="#">Link</a>
    <Divider type="vertical" />
    <a href="#">Link</a>
</template>
<script>
    export default {
        
    }
</script>
`;

code.title = `
<template>
    <Divider orientation="left">Left Text</Divider>
    <p>Steven Paul Jobs was an American entrepreneur and business magnate. He was the chairman, chief executive officer, and a co-founder of Apple Inc.</p>
    <Divider orientation="right">Right Text</Divider>
    <p>Steven Paul Jobs was an American entrepreneur and business magnate. He was the chairman, chief executive officer, and a co-founder of Apple Inc.</p>
</template>
<script>
    export default {
        
    }
</script>
`;

export default code;