"use strict";(self.webpackChunkshenyu_website=self.webpackChunkshenyu_website||[]).push([[1112],{3905:function(e,t,n){n.d(t,{Zo:function(){return u},kt:function(){return d}});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var c=r.createContext({}),s=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},u=function(e){var t=s(e.components);return r.createElement(c.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,c=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),m=s(n),d=a,f=m["".concat(c,".").concat(d)]||m[d]||p[d]||o;return n?r.createElement(f,i(i({ref:t},u),{},{components:n})):r.createElement(f,i({ref:t},u))}));function d(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=m;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l.mdxType="string"==typeof e?e:a,i[1]=l;for(var s=2;s<o;s++)i[s]=n[s];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},5065:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return l},contentTitle:function(){return c},metadata:function(){return s},toc:function(){return u},default:function(){return m}});var r=n(87462),a=n(63366),o=(n(67294),n(3905)),i=["components"],l={title:"\u672c\u5730\u8fd0\u884c\u96c6\u6210\u6d4b\u8bd5",sidebar_position:15,description:"Run Integration Test Locally",categories:"Apache ShenYu",tags:["integration test"]},c=void 0,s={unversionedId:"integration-test",id:"integration-test",isDocsHomePage:!1,title:"\u672c\u5730\u8fd0\u884c\u96c6\u6210\u6d4b\u8bd5",description:"Run Integration Test Locally",source:"@site/i18n/zh/docusaurus-plugin-content-docs-community/current/14-integration-test.md",sourceDirName:".",slug:"/integration-test",permalink:"/zh/community/integration-test",editUrl:"https://github.com/apache/incubator-shenyu-website/edit/main/i18n/zh/docusaurus-plugin-content-docs-community/current/14-integration-test.md",version:"current",lastUpdatedBy:"Sinsy",lastUpdatedAt:1640053186,formattedLastUpdatedAt:"2021/12/21",sidebarPosition:15,frontMatter:{title:"\u672c\u5730\u8fd0\u884c\u96c6\u6210\u6d4b\u8bd5",sidebar_position:15,description:"Run Integration Test Locally",categories:"Apache ShenYu",tags:["integration test"]},sidebar:"community",previous:{title:"FAQ",permalink:"/zh/community/faq"}},u=[{value:"\u51c6\u5907",id:"\u51c6\u5907",children:[]},{value:"\u5728\u672c\u5730\u5f00\u542f\u96c6\u6210\u6d4b\u8bd5",id:"\u5728\u672c\u5730\u5f00\u542f\u96c6\u6210\u6d4b\u8bd5",children:[]}],p={toc:u};function m(e){var t=e.components,n=(0,a.Z)(e,i);return(0,o.kt)("wrapper",(0,r.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h3",{id:"\u51c6\u5907"},"\u51c6\u5907"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"\u514b\u9686 ",(0,o.kt)("a",{parentName:"li",href:"https://github.com/apache/incubator-shenyu"},"Apache ShenYu")," \u7684\u4ee3\u7801."),(0,o.kt)("li",{parentName:"ol"},"\u5b89\u88c5\u5e76\u542f\u52a8 ",(0,o.kt)("inlineCode",{parentName:"li"},"docker")," .")),(0,o.kt)("h3",{id:"\u5728\u672c\u5730\u5f00\u542f\u96c6\u6210\u6d4b\u8bd5"},"\u5728\u672c\u5730\u5f00\u542f\u96c6\u6210\u6d4b\u8bd5"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"\u7528 Maven \u6784\u5efa")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-shell"},"./mvnw -B clean install -Prelease,docker -Dmaven.javadoc.skip=true -Dmaven.test.skip=true\n")),(0,o.kt)("ol",{start:2},(0,o.kt)("li",{parentName:"ol"},"\u6784\u5efa ",(0,o.kt)("inlineCode",{parentName:"li"},"shenyu-examples"))),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-shell"},"./mvnw -B clean install -DskipTests -f ./shenyu-examples/pom.xml -Pdocker\n")),(0,o.kt)("ol",{start:3},(0,o.kt)("li",{parentName:"ol"},"\u6784\u5efa ",(0,o.kt)("inlineCode",{parentName:"li"},"shenyu-integrated-test"))),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-shell"},"./mvnw -B clean install -Pit -DskipTests -f ./shenyu-integrated-test/pom.xml\n")),(0,o.kt)("ol",{start:4},(0,o.kt)("li",{parentName:"ol"},"docker-compose \u8fd0\u884c")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-shell"},"docker-compose -f ./shenyu-integrated-test/${{ matrix.case }}/docker-compose.yml up -d\n")),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"\u4f60\u9700\u8981\u628a ",(0,o.kt)("inlineCode",{parentName:"p"},"${{ matrix.case }}")," \u66ff\u6362\u6210\u5177\u4f53\u7684\u76ee\u5f55, \u6bd4\u5982 ",(0,o.kt)("inlineCode",{parentName:"p"},"shenyu-integrated-test-http"),".")),(0,o.kt)("ol",{start:5},(0,o.kt)("li",{parentName:"ol"},"\u8fd0\u884c\u6d4b\u8bd5")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-shell"},"./mvnw test -Pit -f ./shenyu-integrated-test/${{ matrix.case }}/pom.xml\n")))}m.isMDXComponent=!0}}]);