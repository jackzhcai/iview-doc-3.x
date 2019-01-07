let code = {};

code.type = `
<template>
    <Button>Default</Button>
    <Button type="primary">Primary</Button>
    <Button type="dashed">Dashed</Button>
    <Button type="text">Text</Button>
    <br><br>
    <Button type="info">Info</Button>
    <Button type="success">Success</Button>
    <Button type="warning">Warning</Button>
    <Button type="error">Error</Button>
</template>
<script>
    export default {
        
    }
</script>
`;

code.icon = `
<template>
    <Button type="primary" shape="circle" icon="ios-search"></Button>
    <Button type="primary" icon="ios-search">Search</Button>
    <Button type="primary" shape="circle" icon="ios-search">Search</Button>
    <Button type="primary" shape="circle">Circle</Button>
    <br><br>
    <Button shape="circle" icon="ios-search"></Button>
    <Button icon="ios-search">Search</Button>
    <Button shape="circle" icon="ios-search">Search</Button>
    <Button shape="circle">Circle</Button>
</template>
<script>
    export default {
        
    }
</script>
`;

code.size = `
<template>
    <div>
        <RadioGroup v-model="buttonSize" type="button">
            <Radio label="large">Large</Radio>
            <Radio label="default">Default</Radio>
            <Radio label="small">small</Radio>
        </RadioGroup>
        <br><br>
        <Button :size="buttonSize" type="primary">Primary</Button>
        <Button :size="buttonSize" type="default">Default</Button>
        <Button :size="buttonSize" type="dashed">Dashed</Button>
        <Button :size="buttonSize" type="text">Text</Button>
        <br><br>
        <Button :size="buttonSize" icon="ios-download-outline" type="primary" shape="circle"></Button>
        <Button :size="buttonSize" icon="ios-download-outline" type="primary">Download</Button>
        <br><br>
        <ButtonGroup :size="buttonSize">
            <Button :size="buttonSize" type="primary">
                <Icon type="ios-arrow-back" />
                Backward
            </Button>
            <Button :size="buttonSize" type="primary">
                Forward
                <Icon type="ios-arrow-forward" />
            </Button>
        </ButtonGroup>
    </div>
</template>
<script>
    export default {
        data () {
            return {
                buttonSize: 'large'
            }
        },
    }
</script>
`;

code.long = `
<template>
    <Button type="success" long>SUBMIT</Button>
    <br><br>
    <Button type="error" long>DELETE</Button>
</template>
<script>
    export default {
        
    }
</script>
`;

code.disabled = `
<template>
    <Button>Default</Button>
    <Button disabled>Default(Disabled)</Button>
    <br>
    <Button type="primary">Primary</Button>
    <Button type="primary" disabled>Primary(Disabled)</Button>
    <br>
    <Button type="dashed">Dashed</Button>
    <Button type="dashed" disabled>Dashed(Disabled)</Button>
    <br>
    <Button type="text">Text</Button>
    <Button type="text" disabled>Text(Disabled)</Button>
</template>
<script>
    export default {
        
    }
</script>
`;

code.loading = `
<template>
    <Button type="primary" loading>Loading...</Button>
    <Button type="primary" :loading="loading" @click="toLoading">
        <span v-if="!loading">Click me!</span>
        <span v-else>Loading...</span>
    </Button>
    <Button type="primary" :loading="loading2" icon="ios-power" @click="toLoading2">
        <span v-if="!loading2">Click me!</span>
        <span v-else>Loading...</span>
    </Button>
    <Button loading shape="circle"></Button>
    <Button loading shape="circle" type="primary"></Button>
</template>
<script>
    export default {
        data () {
            return {
                loading: false,
                loading2: false
            }
        },
        methods: {
            toLoading () {
                this.loading = true;
            },
            toLoading2 () {
                this.loading2 = true;
            }
        }
    }
</script>
`;
code.group = `
<template>
    <h4>Basic</h4>
    <br><br>
    <ButtonGroup>
        <Button>Cancel</Button>
        <Button type="primary">Confirm</Button>
    </ButtonGroup>
    <ButtonGroup>
        <Button disabled>Yesterday</Button>
        <Button disabled>Today</Button>
        <Button disabled>Tomorrow</Button>
    </ButtonGroup>
    <ButtonGroup>
        <Button type="primary">L</Button>
        <Button>M</Button>
        <Button>M</Button>
        <Button type="dashed">R</Button>
    </ButtonGroup>
    <br><br>
    <h4>Icons</h4>
    <br><br>
    <ButtonGroup>
        <Button type="primary">
            <Icon type="ios-arrow-back"></Icon>
            Backward
        </Button>
        <Button type="primary">
            Forward
            <Icon type="ios-arrow-forward"></Icon>
        </Button>
    </ButtonGroup>
    <ButtonGroup>
        <Button type="primary" icon="ios-skip-backward"></Button>
        <Button type="primary" icon="ios-skip-forward"></Button>
    </ButtonGroup>
    <ButtonGroup>
        <Button icon="ios-color-wand-outline"></Button>
        <Button icon="ios-sunny-outline"></Button>
        <Button icon="ios-crop"></Button>
        <Button icon="ios-color-filter-outline"></Button>
    </ButtonGroup>
    <br><br>
    <h4>Circle</h4>
    <br><br>
    <ButtonGroup shape="circle">
        <Button type="primary">
            <Icon type="ios-arrow-back"></Icon>
            Backward
        </Button>
        <Button type="primary">
            Forward
            <Icon type="ios-arrow-forward"></Icon>
        </Button>
    </ButtonGroup>
    <ButtonGroup shape="circle">
        <Button type="primary" icon="ios-skip-backward"></Button>
        <Button type="primary" icon="ios-skip-forward"></Button>
    </ButtonGroup>
    <ButtonGroup shape="circle">
        <Button icon="ios-color-wand-outline"></Button>
        <Button icon="ios-sunny-outline"></Button>
        <Button icon="ios-crop"></Button>
        <Button icon="ios-color-filter-outline"></Button>
    </ButtonGroup>
    <br><br>
    <h4>Size</h4>
    <br><br>
    <ButtonGroup size="large">
        <Button>Large</Button>
        <Button>Large</Button>
    </ButtonGroup>
    <ButtonGroup>
        <Button>Default</Button>
        <Button>Default</Button>
    </ButtonGroup>
    <ButtonGroup size="small">
        <Button>Small</Button>
        <Button>Small</Button>
    </ButtonGroup>
    <br><br>
    <ButtonGroup size="large" shape="circle">
        <Button>Large</Button>
        <Button>Large</Button>
    </ButtonGroup>
    <ButtonGroup shape="circle">
        <Button>Default</Button>
        <Button>Default</Button>
    </ButtonGroup>
    <ButtonGroup size="small" shape="circle">
        <Button>Small</Button>
        <Button>Small</Button>
    </ButtonGroup>
</template>
<script>
    export default {
        
    }
</script>
`;

code.vertical = `
<template>
    <ButtonGroup vertical>
        <Button icon="logo-facebook"></Button>
        <Button icon="logo-twitter"></Button>
        <Button icon="logo-googleplus"></Button>
        <Button icon="logo-tumblr"></Button>
    </ButtonGroup>
</template>
<script>
    export default {
        
    }
</script>
`;

code.ghost = `
<template>
    <Button type="default" ghost>Default</Button>
    <Button type="primary" ghost>Primary</Button>
    <Button type="dashed" ghost>Dashed</Button>
    <Button type="text" ghost>Text</Button>
    <Button type="info" ghost>Info</Button>
    <Button type="success" ghost>Success</Button>
    <Button type="warning" ghost>Warning</Button>
    <Button type="error" ghost>Error</Button>
</template>
<script>
    export default {
        
    }
</script>
`;

code.link = `
<template>
    <Button to="/components/icon-en">Normal</Button>
    <Button to="/components/icon-en" replace>No history</Button>
    <Button to="//iviewui.com" target="_blank">New window</Button>
</template>
<script>
    export default {
        
    }
</script>
`;

export default code;