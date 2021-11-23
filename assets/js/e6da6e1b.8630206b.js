"use strict";(self.webpackChunkshenyu_website=self.webpackChunkshenyu_website||[]).push([[2967],{3905:function(e,t,n){n.d(t,{Zo:function(){return p},kt:function(){return d}});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var u=r.createContext({}),s=function(e){var t=r.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},p=function(e){var t=s(e.components);return r.createElement(u.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,u=e.parentName,p=o(e,["components","mdxType","originalType","parentName"]),m=s(n),d=a,k=m["".concat(u,".").concat(d)]||m[d]||c[d]||i;return n?r.createElement(k,l(l({ref:t},p),{},{components:n})):r.createElement(k,l({ref:t},p))}));function d(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,l=new Array(i);l[0]=m;var o={};for(var u in t)hasOwnProperty.call(t,u)&&(o[u]=t[u]);o.originalType=e,o.mdxType="string"==typeof e?e:a,l[1]=o;for(var s=2;s<i;s++)l[s]=n[s];return r.createElement.apply(null,l)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},89311:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return o},contentTitle:function(){return u},metadata:function(){return s},toc:function(){return p},default:function(){return m}});var r=n(87462),a=n(63366),i=(n(67294),n(3905)),l=["components"],o={title:"Code Suggestions",sidebar_position:2,description:"Apache ShenYu Coding Guide",author:"xiaoyu",categories:"Apache ShenYu",tags:["Code Suggestions"],date:new Date("2019-09-22T00:00:00.000Z"),cover:"/img/architecture/shenyu-framework.png"},u=void 0,s={unversionedId:"code-suggestions",id:"code-suggestions",isDocsHomePage:!1,title:"Code Suggestions",description:"Apache ShenYu Coding Guide",source:"@site/community/1-code-suggestions.md",sourceDirName:".",slug:"/code-suggestions",permalink:"/community/code-suggestions",editUrl:"https://github.com/apache/incubator-shenyu-website/edit/main/community/1-code-suggestions.md",version:"current",lastUpdatedBy:"lahm xu",lastUpdatedAt:1637648407,formattedLastUpdatedAt:"11/23/2021",sidebarPosition:2,frontMatter:{title:"Code Suggestions",sidebar_position:2,description:"Apache ShenYu Coding Guide",author:"xiaoyu",categories:"Apache ShenYu",tags:["Code Suggestions"],date:"2019-09-22T00:00:00.000Z",cover:"/img/architecture/shenyu-framework.png"},sidebar:"community",previous:{title:"Subscribe Email",permalink:"/community/subscribe-email"},next:{title:"Issue And Pull Request",permalink:"/community/issue-pr"}},p=[{value:"General",id:"general",children:[]},{value:"Object",id:"object",children:[]},{value:"Collection",id:"collection",children:[{value:"List",id:"list",children:[]},{value:"Map",id:"map",children:[]}]},{value:"String",id:"string",children:[]},{value:"Exception",id:"exception",children:[]},{value:"Resource",id:"resource",children:[]}],c={toc:p};function m(e){var t=e.components,n=(0,a.Z)(e,l);return(0,i.kt)("wrapper",(0,r.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h2",{id:"general"},"General"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"Use as many ",(0,i.kt)("inlineCode",{parentName:"p"},"lambda function")," expressions as possible.")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"Method parameters must be modified with ",(0,i.kt)("inlineCode",{parentName:"p"},"final"),".")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"Constants modified ",(0,i.kt)("inlineCode",{parentName:"p"},"static final")," must be named in upper case.")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"Methods should not have too many parameters.")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"Clear unused classes and methods.")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"Use linux line separators.")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"Tab size is 4 and keep indents on empty lines.")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"All code passage of Checkstyle: ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/apache/incubator-shenyu/blob/master/script/shenyu_checkstyle.xml"},"https://github.com/apache/incubator-shenyu/blob/master/script/shenyu_checkstyle.xml")))),(0,i.kt)("h2",{id:"object"},"Object"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Ues Optional transform Null.")),(0,i.kt)("blockquote",null,(0,i.kt)("p",{parentName:"blockquote"},"Optional.ofNullable(xxx).orElse(obj)")),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Ues Objects Judgment Null Or NotNull.")),(0,i.kt)("blockquote",null,(0,i.kt)("p",{parentName:"blockquote"},"Objects.isNull(obj) OR Objects.nonNull(obj)")),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Ues ",(0,i.kt)("inlineCode",{parentName:"li"},"Objects.equals")," Judgment are they equal.")),(0,i.kt)("blockquote",null,(0,i.kt)("p",{parentName:"blockquote"},"Objects.equals(obj1, obj2)")),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Creater objects outside of a for loop.")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-java"},"Object object = null;\nfor () {\n    object = new Object();\n}\n")),(0,i.kt)("h2",{id:"collection"},"Collection"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"must indicate initial capacity to avoid recalculate capacity.")),(0,i.kt)("h3",{id:"list"},"List"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"Use ",(0,i.kt)("inlineCode",{parentName:"p"},"LinkedList")," when you need to add or delete elements, Else use ",(0,i.kt)("inlineCode",{parentName:"p"},"ArrayList"),".")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"Ues ",(0,i.kt)("inlineCode",{parentName:"p"},"org.apache.commons.collections4.CollectionUtils")," Judgment Is empty Or Not empty."))),(0,i.kt)("blockquote",null,(0,i.kt)("p",{parentName:"blockquote"},"CollectionUtils.isEmpty(list) or CollectionUtils.isNotEmpty(data)")),(0,i.kt)("h3",{id:"map"},"Map"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"Use ",(0,i.kt)("inlineCode",{parentName:"p"},"ConcurrenHashMap")," when considering concurrency of threads, Else use ",(0,i.kt)("inlineCode",{parentName:"p"},"HashMap"),".")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"Iterate over map using the most efficient way Or use ",(0,i.kt)("inlineCode",{parentName:"p"},"lambda function"),"."))),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-java"},"Set<Map.Entry<String, String>> entrySet = map.entrySet();\nIterator<Map.Entry<String, String>> iter = entrySet.iterator();\nwhile (iter.hasNext()) {\n        Map.Entry<String, String> entry = iter.next();\n      \n}\n")),(0,i.kt)("h2",{id:"string"},"String"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Ues ",(0,i.kt)("inlineCode",{parentName:"li"},"org.apache.commons.lang3.StringUtils")," Judgment Is empty Or Not empty.")),(0,i.kt)("blockquote",null,(0,i.kt)("p",{parentName:"blockquote"},"StringUtils.isEmpty(list) or StringUtils.isNotEmpty(data)")),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"String.join")," should be used when string concatenation occurs.")),(0,i.kt)("blockquote",null,(0,i.kt)("p",{parentName:"blockquote"},"String join(CharSequence delimiter, CharSequence... elements)")),(0,i.kt)("h2",{id:"exception"},"Exception"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Do not use try...catch in a loop, it should be on the outermost layer.")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"try {\n  for () {\n  }\n} catch () {\n  \n}\n")),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"Do not use ",(0,i.kt)("inlineCode",{parentName:"p"},"printStackTrace()"),".")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"Please use custom exceptions or ",(0,i.kt)("inlineCode",{parentName:"p"},"ShenyuException"),"."))),(0,i.kt)("h2",{id:"resource"},"Resource"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Please use ",(0,i.kt)("inlineCode",{parentName:"li"},"try with resource")," to close resource.")))}m.isMDXComponent=!0}}]);