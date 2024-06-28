import { registerApplication, start } from "single-spa";

registerApplication({
  name: "@single-spa/welcome",
  app: () => System.import(  // 远程加载模块
    "https://unpkg.com/single-spa-welcome/dist/single-spa-welcome.js"
  ),
  activeWhen: (location) => location.pathname === '/',
});

registerApplication({
  name: "@bird/react-name",
  app: () => System.import("@bird/react"),
  activeWhen: (location) => location.pathname.startsWith('/react')
});

registerApplication({
  name: "@bird/vue",
  app: () => System.import("@bird/vue"),
  activeWhen: (location) => location.pathname.startsWith('/vue')
});

// registerApplication({
//   name: "@bird/navbar",
//   app: () => System.import("@bird/navbar"),
//   activeWhen: ["/"]
// });

start({
  urlRerouteOnly: true,
});

// 父应用的加载过程 9000 -》 index.ejs ->  @bird-root-config->  bird-root-config.js 