let code = {};

code.base = `
<style scoped>
    .demo-badge{
        width: 42px;
        height: 42px;
        background: #eee;
        border-radius: 6px;
        display: inline-block;
    }
</style>
<template>
    <Badge :count="3">
        <a href="#" class="demo-badge"></a>
    </Badge>
</template>
<script>
    export default {
        
    }
</script>
`;

code.dot = `
<template>
    <Badge dot>
        <a href="#" class="demo-badge"></a>
    </Badge>
    <Badge dot>
        <Icon type="ios-notifications-outline" size="26"></Icon>
    </Badge>
    <Badge dot>
        <a href="#">可以是一个链接</a>
    </Badge>
</template>
<script>
    export default {
        
    }
</script>
`;

code.overflow = `
<template>
    <Badge :count="100">
        <a href="#" class="demo-badge"></a>
    </Badge>
    <Badge :count="1000" overflow-count="999">
        <a href="#" class="demo-badge"></a>
    </Badge>
</template>
<script>
    export default {
        
    }
</script>
`;

code.alone = `
<style>
    .demo-badge-alone{
        background: #5cb85c !important;
    }
</style>
<template>
    <Badge :count="10"></Badge>
    <Badge :count="20" class-name="demo-badge-alone"></Badge>
</template>
<script>
    export default {
        
    }
</script>
`;

code.text = `
<template>
    <Row>
        <Col span="6">
            <Badge text="new">
                <a href="#" class="demo-badge"></a>
            </Badge>
        </Col>
        <Col span="6">
            <Badge text="hot">
                <a href="#" class="demo-badge"></a>
            </Badge>
        </Col>
    </Row>
</template>
<script>
    export default {
        
    }
</script>
`;

code.status = `
<template>
    <Badge status="success" />
    <Badge status="error" />
    <Badge status="default" />
    <Badge status="processing" />
    <Badge status="warning" />
    <br />
    <Badge status="success" text="Success" />
    <br />
    <Badge status="error" text="Error" />
    <br />
    <Badge status="default" text="Default" />
    <br />
    <Badge status="processing" text="Processing" />
    <br />
    <Badge status="warning" text="Warning" />
</template>
<script>
    export default {
        
    }
</script>
`;

code.type = `
<template>
    <Badge :count="5" type="primary">
        <a href="#" class="demo-badge"></a>
    </Badge>
    <Badge :count="5" type="success">
        <a href="#" class="demo-badge"></a>
    </Badge>
    <Badge :count="5" type="normal">
        <a href="#" class="demo-badge"></a>
    </Badge>
    <Badge :count="5" type="info">
        <a href="#" class="demo-badge"></a>
    </Badge>
    <Badge :count="5" type="error">
        <a href="#" class="demo-badge"></a>
    </Badge>
    <Badge :count="5" type="warning">
        <a href="#" class="demo-badge"></a>
    </Badge>
</template>
<script>
    export default {
        
    }
</script>
`;

export default code;