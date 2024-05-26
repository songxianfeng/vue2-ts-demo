<template>
    <div class="home">
        <img alt="Vue logo" src="../assets/logo.png">
        <HelloWorld msg="Welcome to Your Vue.js + TypeScript App"/>
        <div class="center-flex">
            <el-container>
                <el-main>
                    <el-row>
                        <el-col :span="24">
                            babel的前端工程
                            istanbul提供的babel插件babel-plugin-istanbul（https://github.com/istanbuljs/babel-plugin-istanbul）
                            , 能够在代码编译打包阶段直接植入插桩代码 适用于使用babel的前端工程，基于react和vue的工程都可以。
                        </el-col>
                    </el-row>
                    <el-row>
                        <el-col :span="24">
                            <p>
                            A Babel plugin that instruments your code with Istanbul coverage. It can instantly be used
                            with karma-coverage and mocha on Node.js (through nyc).
                            </p>
                        </el-col>
                    </el-row>
                    <el-row>
                        <el-col :span="24">
                            Note: This plugin does not generate any report or save any data to any file; it only adds
                            instrumenting code to your JavaScript source code. To integrate with testing tools, please
                            see the Integrations section.
                        </el-col>
                    </el-row>
                </el-main>
            </el-container>
        </div>
    </div>
</template>

<script lang="ts">
    import {Component, Vue} from 'vue-property-decorator';
    import HelloWorld from '@/components/HelloWorld.vue'; // @ is an alias to /src

    @Component({
        components: {
            HelloWorld,
        },
    })
    export default class HomeView extends Vue {
    }
</script>
<style scoped>
    .center-flex {
        display: flex;
        justify-content: center; /* 水平居中 */
        align-items: center; /* 垂直居中 */
        height: 200px; /* 设置div高度 */
        width: 1000px;
        margin-left: 350px;
    }
</style>
