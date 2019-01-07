let code = {};

code.base = `
<template>
    <div>
        <div class="demo-avatar">
            <Avatar icon="ios-person" size="large" />
            <Avatar icon="ios-person" />
            <Avatar icon="ios-person" size="small" />
        </div>
        <div class="demo-avatar">
            <Avatar shape="square" icon="ios-person" size="large" />
            <Avatar shape="square" icon="ios-person" />
            <Avatar shape="square" icon="ios-person" size="small" />
        </div>
    </div>
</template>
<script>
    export default {
        
    }
</script>
`;

code.type = `
<template>
    <div class="demo-avatar">
        <Avatar icon="ios-person" />
        <Avatar>U</Avatar>
        <Avatar>USER</Avatar>
        <Avatar src="https://i.loli.net/2017/08/21/599a521472424.jpg" />
        <Avatar style="color: #f56a00;background-color: #fde3cf">U</Avatar>
        <Avatar style="background-color: #87d068" icon="ios-person" />
    </div>
</template>
<script>
    export default {
        
    }
</script>
`;

code.badge = `
<template>
    <div class="demo-avatar-badge">
        <Badge :count="1">
            <Avatar shape="square" icon="ios-person" />
        </Badge>
        <Badge dot>
            <Avatar shape="square" icon="ios-person" />
        </Badge>
    </div>
</template>
<script>
    export default {
        
    }
</script>
`;

code.string = `
<template>
    <div class="demo-avatar">
        <Avatar :style="{background: color}">{{ user }}</Avatar>
        <Button size="small" @click="handleChange">Change</Button>
    </div>
</template>
<script>
    const UserList = ['U', 'Lucy', 'Tom', 'Edward'];
    const ColorList = ['#f56a00', '#7265e6', '#ffbf00', '#00a2ae'];
    
    export default {
        data () {
            return {
                user: UserList[0],
                color: ColorList[0]
            }
        },
        methods: {
            handleChange () {
                const index = UserList.indexOf(this.user);
                this.user = index < UserList.length - 1 ? UserList[index + 1] : UserList[0];
                this.color = index < ColorList.length - 1 ? ColorList[index + 1] : ColorList[0];
            }
        }        
    }
</script>
`;

export default code;