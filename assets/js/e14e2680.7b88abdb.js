"use strict";(self.webpackChunkshenyu_website=self.webpackChunkshenyu_website||[]).push([[45418],{3905:(e,t,n)=>{n.d(t,{Zo:()=>h,kt:()=>d});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var p=a.createContext({}),c=function(e){var t=a.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},h=function(e){var t=c(e.components);return a.createElement(p.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},u=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,p=e.parentName,h=l(e,["components","mdxType","originalType","parentName"]),u=c(n),d=r,g=u["".concat(p,".").concat(d)]||u[d]||s[d]||o;return n?a.createElement(g,i(i({ref:t},h),{},{components:n})):a.createElement(g,i({ref:t},h))}));function d(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,i=new Array(o);i[0]=u;var l={};for(var p in t)hasOwnProperty.call(t,p)&&(l[p]=t[p]);l.originalType=e,l.mdxType="string"==typeof e?e:r,i[1]=l;for(var c=2;c<o;c++)i[c]=n[c];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}u.displayName="MDXCreateElement"},54846:(e,t,n)=>{n.r(t),n.d(t,{contentTitle:()=>i,default:()=>h,frontMatter:()=>o,metadata:()=>l,toc:()=>p});var a=n(87462),r=(n(67294),n(3905));const o={title:"Code Analysis For Context-Path Plugin",author:"Kunshuai Zhu",author_title:"Apache ShenYu Contributor",author_url:"https://github.com/JooKS-me",author_image_url:"https://avatars1.githubusercontent.com/u/62384022?v=4",tags:["Context-Path","Apache ShenYu"]},i=void 0,l={permalink:"/blog/Plugin-SourceCode-Analysis-Context-Path-Plugin",editUrl:"https://github.com/apache/incubator-shenyu-website/edit/main/blog/Plugin-SourceCode-Analysis-Context-Path-Plugin.md",source:"@site/blog/Plugin-SourceCode-Analysis-Context-Path-Plugin.md",title:"Code Analysis For Context-Path Plugin",description:"Before starting, you can refer to this article to start the gateway",date:"2022-07-26T11:18:28.266Z",formattedDate:"July 26, 2022",tags:[{label:"Context-Path",permalink:"/blog/tags/context-path"},{label:"Apache ShenYu",permalink:"/blog/tags/apache-shen-yu"}],readingTime:2.02,truncated:!1,prevItem:{title:"Integration Test Analysis",permalink:"/blog/IntegrationTest-Analysis"},nextItem:{title:"Code Analysis For Divide Plugin",permalink:"/blog/Plugin-SourceCode-Analysis-Divide-Plugin"}},p=[{value:"Body",id:"body",children:[]}],c={toc:p};function h(e){let{components:t,...n}=e;return(0,r.kt)("wrapper",(0,a.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"Before starting, you can refer to ",(0,r.kt)("a",{parentName:"p",href:"./start-demo"},"this article")," to start the gateway")),(0,r.kt)("h3",{id:"body"},"Body"),(0,r.kt)("p",null,"First, look at the ",(0,r.kt)("inlineCode",{parentName:"p"},"ContextPathPlugin#doExecute")," method, which is the core of this plugin."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-java"},"protected Mono<Void> doExecute(final ServerWebExchange exchange, final ShenyuPluginChain chain, final SelectorData selector, final RuleData rule) {\n    ...\n    // 1. get the contextMappingHandle from the JVM cache\n    ContextMappingHandle contextMappingHandle = ContextPathPluginDataHandler.CACHED_HANDLE.get().obtainHandle(CacheKeyUtils.INST.getKey(rule));\n    ...\n    // 2. set shenyu context according to contextMappingHandle\n    buildContextPath(shenyuContext, contextMappingHandle);\n    return chain.execute(exchange);\n}\n")),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Get the ",(0,r.kt)("inlineCode",{parentName:"p"},"contextMappingHandle")," from the JVM cache"),(0,r.kt)("p",{parentName:"li"},"The ",(0,r.kt)("inlineCode",{parentName:"p"},"contextMappingHandle")," here is an instance of the ",(0,r.kt)("inlineCode",{parentName:"p"},"ContextMappingHandle")," class, which has two member variables: ",(0,r.kt)("inlineCode",{parentName:"p"},"contextPath")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"addPrefix")),(0,r.kt)("p",{parentName:"li"},"These two variables have appeared in the Rules form in the Admin before, and they are updated when the data is synchronized.")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Set shenyu context according to contextMappingHandle"),(0,r.kt)("p",{parentName:"li"},"Below is the source code of the ",(0,r.kt)("inlineCode",{parentName:"p"},"ContextPathPlugin#buildContextPath")," method"),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-java"},'private void buildContextPath(final ShenyuContext context, final ContextMappingHandle handle) {\n    String realURI = "";\n    // 1. set the context path of shenyu, remove the prefix of the real URI according to the length of the contextPath\n    if (StringUtils.isNoneBlank(handle.getContextPath())) {\n        context.setContextPath(handle.getContextPath());\n        context.setModule(handle.getContextPath());\n        realURI = context.getPath().substring(handle.getContextPath().length());\n    }\n    // add prefix\n    if (StringUtils.isNoneBlank(handle.getAddPrefix())) {\n        if (StringUtils.isNotBlank(realURI)) {\n            realURI = handle.getAddPrefix() + realURI;\n        } else {\n            realURI = handle.getAddPrefix() + context.getPath();\n        }\n    }\n    context.setRealUrl(realURI);\n}\n')),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Set the context path of shenyu, ",(0,r.kt)("strong",{parentName:"p"},"remove the prefix of the real URI according to the length of the contextPath")),(0,r.kt)("p",{parentName:"li"},"You may be wondering whether ",(0,r.kt)("strong",{parentName:"p"},'there is a problem with the so-called "according to the length of the contextPath" here'),"?"),(0,r.kt)("p",{parentName:"li"},"In fact, such a judgment is not a problem, because the request will be processed by the plugin only after it is matched by the Selector and Rules. Therefore, under the premise of setting up Selector and Rules, it is completely possible to meet the needs of converting a specific contextPath."))))),(0,r.kt)("p",null,"Then, the ",(0,r.kt)("inlineCode",{parentName:"p"},"ContextPathPlugin")," class has a more important method ",(0,r.kt)("inlineCode",{parentName:"p"},"skip"),", part of the code is shown below. We can find: ",(0,r.kt)("strong",{parentName:"p"},"If it is a call to the RPC service, the context_path plugin will be skipped directly.")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-java"},"public Boolean skip(final ServerWebExchange exchange) {\n    ...\n    return Objects.equals(rpcType, RpcTypeEnum.DUBBO.getName())\n            || Objects.equals(rpcType, RpcTypeEnum.GRPC.getName())\n            || Objects.equals(rpcType, RpcTypeEnum.TARS.getName())\n            || Objects.equals(rpcType, RpcTypeEnum.MOTAN.getName())\n            || Objects.equals(rpcType, RpcTypeEnum.SOFA.getName());\n}\n")),(0,r.kt)("p",null,"Finally, the context-path plugin has another class ",(0,r.kt)("inlineCode",{parentName:"p"},"ContextPathPluginDataHandler"),". The function of this class is to subscribe to the data of the plug-in. When the plugin configuration is modified, deleted, or added, the data is modified, deleted, or added to the JVM cache."))}h.isMDXComponent=!0}}]);