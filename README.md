# qiankun微前端demo

启动顺序： 

1、启动基座substrate 

2、再启动子应用

# 原理解析

父应用的加载过程 9000 -》 index.ejs ->  @bird-root-config->  bird-root-config.js 

1.registerApplication注册应用，System.import(moduleName)

2.根据步骤一里面的moduleName，在systemjs-importmap里获取到实际的url

3.应用SystemJS加载url对应的模块内容

4.路由劫持，根据activeWhen的条件渲染对应的模块（子应用）

5.在子应用启动、挂载、卸载的过程执行其对应的生命周期钩子函数

