"use strict";(self.webpackChunkshenyu_website=self.webpackChunkshenyu_website||[]).push([[88392],{3905:(e,n,r)=>{r.d(n,{Zo:()=>p,kt:()=>g});var t=r(67294);function a(e,n,r){return n in e?Object.defineProperty(e,n,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[n]=r,e}function i(e,n){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);n&&(t=t.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),r.push.apply(r,t)}return r}function l(e){for(var n=1;n<arguments.length;n++){var r=null!=arguments[n]?arguments[n]:{};n%2?i(Object(r),!0).forEach((function(n){a(e,n,r[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(r,n))}))}return e}function o(e,n){if(null==e)return{};var r,t,a=function(e,n){if(null==e)return{};var r,t,a={},i=Object.keys(e);for(t=0;t<i.length;t++)r=i[t],n.indexOf(r)>=0||(a[r]=e[r]);return a}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(t=0;t<i.length;t++)r=i[t],n.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var s=t.createContext({}),u=function(e){var n=t.useContext(s),r=n;return e&&(r="function"==typeof e?e(n):l(l({},n),e)),r},p=function(e){var n=u(e.components);return t.createElement(s.Provider,{value:n},e.children)},d={inlineCode:"code",wrapper:function(e){var n=e.children;return t.createElement(t.Fragment,{},n)}},c=t.forwardRef((function(e,n){var r=e.components,a=e.mdxType,i=e.originalType,s=e.parentName,p=o(e,["components","mdxType","originalType","parentName"]),c=u(r),g=a,m=c["".concat(s,".").concat(g)]||c[g]||d[g]||i;return r?t.createElement(m,l(l({ref:n},p),{},{components:r})):t.createElement(m,l({ref:n},p))}));function g(e,n){var r=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var i=r.length,l=new Array(i);l[0]=c;var o={};for(var s in n)hasOwnProperty.call(n,s)&&(o[s]=n[s]);o.originalType=e,o.mdxType="string"==typeof e?e:a,l[1]=o;for(var u=2;u<i;u++)l[u]=r[u];return t.createElement.apply(null,l)}return t.createElement.apply(null,r)}c.displayName="MDXCreateElement"},99436:(e,n,r)=>{r.r(n),r.d(n,{contentTitle:()=>l,default:()=>p,frontMatter:()=>i,metadata:()=>o,toc:()=>s});var t=r(87462),a=(r(67294),r(3905));const i={sidebar_position:4,title:"SpringCloud Proxy",keywords:["soul"],description:"springCloud with soul gateway"},l=void 0,o={unversionedId:"users-guide/spring-cloud-proxy",id:"version-2.3.0-Legacy/users-guide/spring-cloud-proxy",isDocsHomePage:!1,title:"SpringCloud Proxy",description:"springCloud with soul gateway",source:"@site/versioned_docs/version-2.3.0-Legacy/users-guide/spring-cloud-proxy.md",sourceDirName:"users-guide",slug:"/users-guide/spring-cloud-proxy",permalink:"/docs/2.3.0-Legacy/users-guide/spring-cloud-proxy",editUrl:"https://github.com/apache/incubator-shenyu-website/edit/main/versioned_docs/version-2.3.0-Legacy/users-guide/spring-cloud-proxy.md",version:"2.3.0-Legacy",sidebarPosition:4,frontMatter:{sidebar_position:4,title:"SpringCloud Proxy",keywords:["soul"],description:"springCloud with soul gateway"},sidebar:"version-2.3.0-Legacy/tutorialSidebar",previous:{title:"Integrate dubbo with soul gateway",permalink:"/docs/2.3.0-Legacy/users-guide/dubbo-proxy"},next:{title:"Sofa RPC Proxy",permalink:"/docs/2.3.0-Legacy/users-guide/sofa-rpc-proxy"}},s=[{value:"Features",id:"features",children:[]},{value:"Configure soul gateway as Spring Cloud proxy",id:"configure-soul-gateway-as-spring-cloud-proxy",children:[]},{value:"SpringCloud integration with gateway",id:"springcloud-integration-with-gateway",children:[]},{value:"Plugin Setting",id:"plugin-setting",children:[]},{value:"User Request",id:"user-request",children:[]}],u={toc:s};function p(e){let{components:n,...r}=e;return(0,a.kt)("wrapper",(0,t.Z)({},u,r,{components:n,mdxType:"MDXLayout"}),(0,a.kt)("h2",{id:"features"},"Features"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"This article is a guide about how to integrate Spring Cloud with soul gateway quickly."),(0,a.kt)("li",{parentName:"ul"},"Please enable ",(0,a.kt)("inlineCode",{parentName:"li"},"springCloud")," plug-in in soul-admin background."),(0,a.kt)("li",{parentName:"ul"},"Please start ",(0,a.kt)("inlineCode",{parentName:"li"},"soul-admin")," successfully before integrating and ",(0,a.kt)("a",{parentName:"li",href:"./soul-set-up"},"Environment Setup")," is Ok.")),(0,a.kt)("h2",{id:"configure-soul-gateway-as-spring-cloud-proxy"},"Configure soul gateway as Spring Cloud proxy"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"add these dependencies in gateway's pom.xml:")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-xml"},"\x3c!--soul springCloud plugin start--\x3e\n<dependency>\n    <groupId>org.dromara</groupId>\n    <artifactId>soul-spring-boot-starter-plugin-springcloud</artifactId>\n    <version>${last.version}</version>\n</dependency>\n \x3c!--soul springCloud plugin end--\x3e\n\n<dependency>\n    <groupId>org.springframework.cloud</groupId>\n    <artifactId>spring-cloud-commons</artifactId>\n    <version>2.2.0.RELEASE</version>\n</dependency> \n<dependency>\n    <groupId>org.springframework.cloud</groupId>\n    <artifactId>spring-cloud-starter-netflix-ribbon</artifactId>\n    <version>2.2.0.RELEASE</version>\n</dependency>\n")),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"If you use ",(0,a.kt)("inlineCode",{parentName:"p"},"eureka")," as SpringCloud registry center."),(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"add these dependencies:")),(0,a.kt)("pre",{parentName:"li"},(0,a.kt)("code",{parentName:"pre",className:"language-xml"},"  <dependency>\n       <groupId>org.springframework.cloud</groupId>\n       <artifactId>spring-cloud-starter-netflix-eureka-client</artifactId>\n       <version>2.2.0.RELEASE</version>\n  </dependency>\n"))),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"add these config values in gateway's yaml file:"),(0,a.kt)("pre",{parentName:"li"},(0,a.kt)("code",{parentName:"pre",className:"language-yaml"},"   eureka:\n     client:\n       serviceUrl:\n         defaultZone: http://localhost:8761/eureka/ #your eureka address\n     instance:\n       prefer-ip-address: true\n"))),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"if you use ",(0,a.kt)("inlineCode",{parentName:"p"},"nacos")," as Spring Cloud registry center."),(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"add these dependencies:")),(0,a.kt)("pre",{parentName:"li"},(0,a.kt)("code",{parentName:"pre",className:"language-xml"}," <dependency>\n       <groupId>com.alibaba.cloud</groupId>\n       <artifactId>spring-cloud-starter-alibaba-nacos-discovery</artifactId>\n       <version>2.1.0.RELEASE</version>\n </dependency>\n"))),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"add these config values in gateway's yaml file:"),(0,a.kt)("pre",{parentName:"li"},(0,a.kt)("code",{parentName:"pre",className:"language-yaml"},"  spring:\n     cloud:\n       nacos:\n         discovery:\n            server-addr: 127.0.0.1:8848 # your nacos address\n"))),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"restart your gateway service."))),(0,a.kt)("h2",{id:"springcloud-integration-with-gateway"},"SpringCloud integration with gateway"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"add these dependencies in your project\uff1a")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-xml"}," <dependency>\n      <groupId>org.dromara</groupId>\n      <artifactId>soul-spring-boot-starter-client-springcloud</artifactId>\n      <version>${last.version}</version>\n </dependency>\n")),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"backend server register center config, please look:",(0,a.kt)("a",{parentName:"li",href:"../register-center/register-center-access"},"register center access"),".")),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"add the annotation ",(0,a.kt)("inlineCode",{parentName:"p"},"@SoulSpringCloudClient")," in your ",(0,a.kt)("inlineCode",{parentName:"p"},"controller")," interface.")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"you can apply the annotation to class-level in a controller.the name of the path variable is prefix and '/**' will apply proxy for entire interfaces."),(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"example \uff081\uff09\uff1aboth ",(0,a.kt)("inlineCode",{parentName:"li"},"/test/payment")," and ",(0,a.kt)("inlineCode",{parentName:"li"},"/test/findByUserId")," will be handled by gateway.")),(0,a.kt)("pre",{parentName:"li"},(0,a.kt)("code",{parentName:"pre",className:"language-java"},' @RestController\n @RequestMapping("/test")\n @SoulSpringCloudClient(path = "/test/**")\n public class HttpTestController {\n     \n     @PostMapping("/payment")\n     public UserDTO post(@RequestBody final UserDTO userDTO) {\n         return userDTO;\n     }\n     \n     @GetMapping("/findByUserId")\n     public UserDTO findByUserId(@RequestParam("userId") final String userId) {\n         UserDTO userDTO = new UserDTO();\n         userDTO.setUserId(userId);\n         userDTO.setUserName("hello world");\n         return userDTO;\n     }    \n  }\n')))),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},'  \n* example \uff082\uff09\uff1a`/order/save` will be handled by gateway, and `/order/findById` won\'t.\n  \n ```java\n  @RestController\n  @RequestMapping("/order")\n  @SoulSpringCloudClient(path = "/order")\n  public class OrderController {\n  \n      @PostMapping("/save")\n      @SoulSpringMvcClient(path = "/save")\n      public OrderDTO save(@RequestBody final OrderDTO orderDTO) {\n          orderDTO.setName("hello world save order");\n          return orderDTO;\n      }\n \n      @GetMapping("/findById")\n      public OrderDTO findById(@RequestParam("id") final String id) {\n          OrderDTO orderDTO = new OrderDTO();\n          orderDTO.setId(id);\n          orderDTO.setName("hello world findById");\n          return orderDTO;\n      }\n  }\n')),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"start your service, get the log ",(0,a.kt)("inlineCode",{parentName:"li"},"dubbo client register success"),", then your interface has been added with soul gateway successfully.")),(0,a.kt)("h2",{id:"plugin-setting"},"Plugin Setting"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"enable Spring Cloud plugin in ",(0,a.kt)("inlineCode",{parentName:"li"},"soul-admin"),".")),(0,a.kt)("h2",{id:"user-request"},"User Request"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"Send the request as before, only two points need to notice.")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"firstly\uff0cthe domain name that requested before in your service, now need to replace with gateway's domain name.")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"secondly\uff0csoul gateway needs a route prefix which comes from ",(0,a.kt)("inlineCode",{parentName:"p"},"contextPath"),", it configured during the integration with gateway, you can change it freely in divide plugin of ",(0,a.kt)("inlineCode",{parentName:"p"},"soul-admin"),", if your familiar with it. "))),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-yaml"},"\n# for example, your have an order service and it has a interface, the request url: http://localhost:8080/test/save\n\n# now need to change to\uff1ahttp://localhost:9195/order/test/save\n\n# we can see localhost:9195 is the gateway's ip port, default port number is 9195 \uff0c/order is the contextPath in your config yaml file. \n\n# the request of other parameters don't change.\n\n# Any questions, pls join the group and we can talk about it.\n\n")),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Then you can visit, very easy and simple.")))}p.isMDXComponent=!0}}]);