"use strict";(self.webpackChunkshenyu_website=self.webpackChunkshenyu_website||[]).push([[7088],{3905:function(e,t,a){a.d(t,{Zo:function(){return d},kt:function(){return g}});var n=a(67294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function i(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function l(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?i(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function p(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},i=Object.keys(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var o=n.createContext({}),c=function(e){var t=n.useContext(o),a=t;return e&&(a="function"==typeof e?e(t):l(l({},t),e)),a},d=function(e){var t=c(e.components);return n.createElement(o.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},u=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,i=e.originalType,o=e.parentName,d=p(e,["components","mdxType","originalType","parentName"]),u=c(a),g=r,s=u["".concat(o,".").concat(g)]||u[g]||m[g]||i;return a?n.createElement(s,l(l({ref:t},d),{},{components:a})):n.createElement(s,l({ref:t},d))}));function g(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=a.length,l=new Array(i);l[0]=u;var p={};for(var o in t)hasOwnProperty.call(t,o)&&(p[o]=t[o]);p.originalType=e,p.mdxType="string"==typeof e?e:r,l[1]=p;for(var c=2;c<i;c++)l[c]=a[c];return n.createElement.apply(null,l)}return n.createElement.apply(null,a)}u.displayName="MDXCreateElement"},33950:function(e,t,a){a.r(t),a.d(t,{frontMatter:function(){return p},contentTitle:function(){return o},metadata:function(){return c},toc:function(){return d},default:function(){return u}});var n=a(87462),r=a(63366),i=(a(67294),a(3905)),l=["components"],p={title:"MatchStrategy--\u57fa\u4e8eSPI\u7684\u4ee3\u7801\u5206\u6790",author:"Huihui Yin",author_title:"Apache ShenYu Contributor",categories:"Apache ShenYu",tags:["SPI","Apache ShenYu"]},o=void 0,c={permalink:"/zh/blog/SourceCode-Analysis-MatchStrategy-SPI",editUrl:"https://github.com/apache/incubator-shenyu-website/edit/main/blog/blog/SourceCode-Analysis-MatchStrategy-SPI.md",source:"@site/i18n/zh/docusaurus-plugin-content-blog/SourceCode-Analysis-MatchStrategy-SPI.md",title:"MatchStrategy--\u57fa\u4e8eSPI\u7684\u4ee3\u7801\u5206\u6790",description:"Apache Shenyu \u7f51\u5173\u7684\u5404\u4e2aPlugin\uff08\u5305\u62ecDubbo, gRPC,Spring-cloud\u7b49) \u4e2d\uff0crouting\u53c2\u6570\u5747\u8bbe\u8ba1\u4e3a\u53ef\u4ee5\u63a5\u53d7\u591a\u4e2a\u6761\u4ef6\u7684\u7ec4\u5408\u3002 \u4e3a\u4e86\u5b9e\u73b0\u8fd9\u6837\u7684\u76ee\u7684\uff0c\u9075\u5faa\u5176SPI\u7684\u673a\u5236\u8fdb\u884c\u5c06\u53c2\u6570\u53ca\u884c\u4e3a\u62bd\u8c61\u4e3a\u5982\u4e0b\u4e09\u90e8\u5206\uff0c\u8fd9\u4e9bSPI \u5728shenyu-plugin-base\u6a21\u7ec4\u4e2d\u5b9e\u73b0",date:"2021-09-28T06:04:02.847Z",formattedDate:"2021\u5e749\u670828\u65e5",tags:[{label:"SPI",permalink:"/zh/blog/tags/spi"},{label:"Apache ShenYu",permalink:"/zh/blog/tags/apache-shen-yu"}],readingTime:6.145,truncated:!1,prevItem:{title:"Context-Path\u63d2\u4ef6\u6e90\u7801\u5206\u6790",permalink:"/zh/blog/code-analysis-context-path"},nextItem:{title:"Param-Mapping\u63d2\u4ef6\u6e90\u7801\u5206\u6790",permalink:"/zh/blog/code-analysis-param-mapping"}},d=[{value:"MatchStrategy",id:"matchstrategy",children:[]},{value:"MatchStrategy Interface",id:"matchstrategy-interface",children:[]},{value:"AbstractMatchStrategy",id:"abstractmatchstrategy",children:[]},{value:"\u5b9e\u73b0\u7c7b\u53caProfile",id:"\u5b9e\u73b0\u7c7b\u53caprofile",children:[{value:"AndMatchStrategy-  \u201c\u4e0e\u201d\u7684\u5173\u7cfb",id:"andmatchstrategy---\u4e0e\u7684\u5173\u7cfb",children:[]}]},{value:"MatchStrategyFactory",id:"matchstrategyfactory",children:[]},{value:"\u8c03\u7528\u65b9\u5f0f",id:"\u8c03\u7528\u65b9\u5f0f",children:[]},{value:"Summary",id:"summary",children:[]}],m={toc:d};function u(e){var t=e.components,p=(0,r.Z)(e,l);return(0,i.kt)("wrapper",(0,n.Z)({},m,p,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"Apache Shenyu")," \u7f51\u5173\u7684\u5404\u4e2a",(0,i.kt)("inlineCode",{parentName:"p"},"Plugin"),"\uff08\u5305\u62ec",(0,i.kt)("inlineCode",{parentName:"p"},"Dubbo"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"gRPC"),",",(0,i.kt)("inlineCode",{parentName:"p"},"Spring-cloud"),"\u7b49) \u4e2d\uff0c",(0,i.kt)("inlineCode",{parentName:"p"},"routing"),"\u53c2\u6570\u5747\u8bbe\u8ba1\u4e3a\u53ef\u4ee5\u63a5\u53d7\u591a\u4e2a\u6761\u4ef6\u7684\u7ec4\u5408\u3002 \u4e3a\u4e86\u5b9e\u73b0\u8fd9\u6837\u7684\u76ee\u7684\uff0c\u9075\u5faa\u5176",(0,i.kt)("inlineCode",{parentName:"p"},"SPI"),"\u7684\u673a\u5236\u8fdb\u884c\u5c06\u53c2\u6570\u53ca\u884c\u4e3a\u62bd\u8c61\u4e3a\u5982\u4e0b\u4e09\u90e8\u5206\uff0c\u8fd9\u4e9b",(0,i.kt)("inlineCode",{parentName:"p"},"SPI")," \u5728",(0,i.kt)("strong",{parentName:"p"},(0,i.kt)("em",{parentName:"strong"},"shenyu-plugin-base")),"\u6a21\u7ec4\u4e2d\u5b9e\u73b0"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"ParameterData"),"-\u53c2\u6570\u8d44\u6599"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"PredictJudge"),"-\u65ad\u8a00"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"MatchStrategy"),"-\u5339\u914d\u7b56\u7565")),(0,i.kt)("p",null,"\u76f8\u5bf9\u800c\u8a00\uff0c\u5339\u914d\u7b56\u7565\u662f\u9700\u8981\u6269\u5c55\u70b9\u6700\u5c11\u7684\u90e8\u5206\u3002\u60f3\u8c61\u4e00\u4e0b\uff0c\u5bf9\u591a\u4e2a\u6761\u4ef6\u7684\u7ec4\u5408\u5224\u65ad\uff0c\u6700\u5e38\u89c1\u7684\u51e0\u79cd\u89c4\u5219\u662f\uff1a\u5168\u90e8\u90fd\u6ee1\u8db3\u3001\u81f3\u5c11\u6ee1\u8db3\u4e00\u4e2a\u6761\u4ef6\u3001\u81f3\u5c11\u6ee1\u8db3\u7b2c\u4e00\u4e2a\uff0c\u6216\u8005\u5927\u90e8\u5206\u6ee1\u8db3\u7b49\u7b49\u3002 \u5e76\u4e14\u8981\u505a\u5230\u5bf9\u5404\u79cd",(0,i.kt)("inlineCode",{parentName:"p"},"plugin"),"\u7684\u4e0d\u540c\u7c7b\u578b\u7684\u53c2\u6570\uff0c\u5982",(0,i.kt)("inlineCode",{parentName:"p"},"IP"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"header"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"uri"),"\u7b49\u3002\u9488\u5bf9\u8fd9\u4e9b\u9700\u6c42\uff0c\u5982\u4f55\u5c06",(0,i.kt)("inlineCode",{parentName:"p"},"MatchStrategy"),"\u8bbe\u8ba1\u5f97\u7b80\u5355\u6613\u7528\u4e14\u5bb9\u6613\u6269\u5c55\uff1f"),(0,i.kt)("h2",{id:"matchstrategy"},"MatchStrategy"),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"MatchStrategy"),"\u7684\u5b9e\u73b0\u4ee3\u7801\u5728",(0,i.kt)("strong",{parentName:"p"},(0,i.kt)("em",{parentName:"strong"},"shenyu-plugin-base")),"\u6a21\u7ec4\u4e2d\uff0c\u57fa\u4e8e",(0,i.kt)("inlineCode",{parentName:"p"},"Apache Shenyu"),"\u7684",(0,i.kt)("inlineCode",{parentName:"p"},"SPI"),"\u521b\u5efa\u673a\u5236\uff0c \u8bbe\u8ba1\u4e0a\u7ed3\u5408\u4e86\u5de5\u5382\u6a21\u5f0f\u548c\u7b56\u7565\u6a21\u5f0f\uff0c\u6574\u4f53",(0,i.kt)("inlineCode",{parentName:"p"},"MatchStrategy"),"\u7684\u8bbe\u8ba1\u7c7b\u56fe\u5982\u4e0b\u4e0b\uff1a"),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"MatchStrategy-class-diagram",src:a(94078).Z})),(0,i.kt)("p",null,"\u4ee5\u63a5\u53e3",(0,i.kt)("inlineCode",{parentName:"p"},"MatchStrategy"),"\u4e3a\u57fa\u7840\uff0c\u8bbe\u8ba1\u5b9e\u73b0\u7c7b\uff0c\u5e76\u7531\u62bd\u8c61\u7c7b",(0,i.kt)("inlineCode",{parentName:"p"},"AbstractMatchStrategy"),"\u5b9e\u73b0\u516c\u5171\u65b9\u6cd5\uff0c\u7531\u5de5\u5382\u7c7b",(0,i.kt)("inlineCode",{parentName:"p"},"MatchStrategyFactory"),"\u63d0\u4f9b\u521b\u5efa\u548c\u5916\u90e8\u8c03\u7528\u529f\u80fd\u3002"),(0,i.kt)("h2",{id:"matchstrategy-interface"},"MatchStrategy Interface"),(0,i.kt)("p",null,"\u9996\u5148\u6765\u770b",(0,i.kt)("inlineCode",{parentName:"p"},"MatchStrategy")," ",(0,i.kt)("inlineCode",{parentName:"p"},"SPI"),"\u63a5\u53e3\u7684\u5b9a\u4e49\uff1a"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-java"},"@SPI\npublic interface MatchStrategy {\n\n    Boolean match(List<ConditionData> conditionDataList, ServerWebExchange exchange);\n}\n")),(0,i.kt)("p",null,"@",(0,i.kt)("inlineCode",{parentName:"p"},"SPI")," ",(0,i.kt)("inlineCode",{parentName:"p"},"annotation"),"\u4ee3\u8868\u8fd9\u662f\u4e00\u4e2a",(0,i.kt)("inlineCode",{parentName:"p"},"SPI"),"\u63a5\u53e3\u3002",(0,i.kt)("inlineCode",{parentName:"p"},"ServerWebExchange")," \u662f ",(0,i.kt)("inlineCode",{parentName:"p"},"org.springframework.web.server.ServerWebExchange")," ,\u4ee3\u8868",(0,i.kt)("inlineCode",{parentName:"p"},"HTTP"),"\u7684 ",(0,i.kt)("inlineCode",{parentName:"p"},"request-response"),"  \u7684\u4ea4\u4e92\u5185\u5bb9\u3002",(0,i.kt)("inlineCode",{parentName:"p"},"ConditionData"),"\u7684\u4ee3\u7801\u5982\u4e0b\uff0c\u66f4\u591a\u8bf4\u660e\u53ef\u4ee5\u53c2\u8003",(0,i.kt)("inlineCode",{parentName:"p"},"PredicateJudge"),(0,i.kt)("a",{parentName:"p",href:"http://shenyu.apache.org/blog/PredicateJudge-SPI"},"\u4ee3\u7801\u5206\u6790"),"\u4e2d\u7684\u8bf4\u660e\uff0c"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-java"},"public class ConditionData {\n\n    private String paramType;\n    private String operator;\n\n    private String paramName;\n    private String paramValue;\n}\n")),(0,i.kt)("h2",{id:"abstractmatchstrategy"},"AbstractMatchStrategy"),(0,i.kt)("p",null,"\u5728\u62bd\u8c61\u7c7b",(0,i.kt)("inlineCode",{parentName:"p"},"AbstractMatchStrategy"),"\u4e2d\uff0c\u5b9a\u4e49",(0,i.kt)("inlineCode",{parentName:"p"},"MatchStrategy"),"\u7684\u516c\u5171\u65b9\u6cd5\uff0c \u7528",(0,i.kt)("inlineCode",{parentName:"p"},"buildRealData"),"\u65b9\u6cd5\u4e2d\uff0c\u7528",(0,i.kt)("inlineCode",{parentName:"p"},"ParameterData"),"\u5de5\u5382\u7c7b",(0,i.kt)("inlineCode",{parentName:"p"},"ParameterDataFactory"),"\uff0c\u5c06\u591a\u79cd\u53c2\u6570\u5982  ",(0,i.kt)("inlineCode",{parentName:"p"},"Ip"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"Cookie"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"Header"),",",(0,i.kt)("inlineCode",{parentName:"p"},"uri"),"\u7b49\u8d44\u6599\u90fd\u4ee5\u7edf\u4e00\u7684\u63a5\u53e3\u65b9\u6cd5\u6765\u5448\u73b0\u3002\u8fd9\u4e9b\u53c2\u6570\u683c\u5f0f\u53ca\u89c4\u5219\u7684\u4fee\u6539\uff0c\u4e0d\u4f1a\u5f71\u54cd\u5230\u5bf9\u53c2\u6570\u89c4\u5219\u5339\u914d",(0,i.kt)("inlineCode",{parentName:"p"},"MatchStrategy"),"\u7684\u8c03\u7528\u3002"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-java"},"public abstract class AbstractMatchStrategy {\n\n    public String buildRealData(final ConditionData condition, final ServerWebExchange exchange) {\n        return ParameterDataFactory.builderData(condition.getParamType(), condition.getParamName(), exchange);\n    }\n}\n")),(0,i.kt)("h2",{id:"\u5b9e\u73b0\u7c7b\u53caprofile"},"\u5b9e\u73b0\u7c7b\u53caProfile"),(0,i.kt)("p",null,"\u57fa\u4e8e\u4e0a\u8ff0\u63a5\u53e3\u5b9a\u4e49, ",(0,i.kt)("strong",{parentName:"p"},(0,i.kt)("em",{parentName:"strong"},"shenyu-plugin-base"))," \u6a21\u7ec4\u63d0\u4f9b\u4e86\u4e24\u4e2a",(0,i.kt)("inlineCode",{parentName:"p"},"MatchStrategy"),"\u5b9e\u73b0\u7c7b"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("inlineCode",{parentName:"p"},"AndMatchStrategy"),"-\u591a\u4e2a\u6761\u4ef6 AND")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("inlineCode",{parentName:"p"},"OrMatchStrategy"),"- \u591a\u4e2a\u6761\u4ef6 OR"),(0,i.kt)("p",{parentName:"li"},"\u5e76\u5728",(0,i.kt)("inlineCode",{parentName:"p"},"SHENYU_DIRECTORY"),"\u76ee\u5f55\u4e0b\u7684\u914d\u7f6e\u6587\u4ef6\u4e2d\uff0c\u5bf9\u5b9e\u4f5c\u7c7b\u505a\u4e86\u914d\u7f6e\u3002\u5728\u7cfb\u7edf\u542f\u52a8\u65f6\u4f1a\u7531\u9876\u5c42",(0,i.kt)("inlineCode",{parentName:"p"},"SPI"),"\u4ee5",(0,i.kt)("inlineCode",{parentName:"p"},"key-value"),"\u5f62\u5f0f\u52a0\u8f7d\u5e76",(0,i.kt)("inlineCode",{parentName:"p"},"cache"),"\u8d77\u6765\u3002"))),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-properties"},"and=org.apache.shenyu.plugin.base.condition.strategy.AndMatchStrategy\nor=org.apache.shenyu.plugin.base.condition.strategy.OrMatchStrategy\n")),(0,i.kt)("p",null," \u4e24\u4e2a\u5b9e\u73b0\u7c7b",(0,i.kt)("inlineCode",{parentName:"p"},"AndMatchStrategy")," \u7ee7\u627f",(0,i.kt)("inlineCode",{parentName:"p"},"AbstractMatchStrategy")," \u5e76\u5b9e\u505a\u4e86",(0,i.kt)("inlineCode",{parentName:"p"},"MatchStrategy"),"\u3002"),(0,i.kt)("h3",{id:"andmatchstrategy---\u4e0e\u7684\u5173\u7cfb"},"AndMatchStrategy-  \u201c\u4e0e\u201d\u7684\u5173\u7cfb"),(0,i.kt)("p",null,"  \u7531\u4e8e",(0,i.kt)("inlineCode",{parentName:"p"},"PredicateJudge"),"\u5c01\u88c5\u4e86\u6761\u4ef6\u5224\u65ad\u7684\u591a\u6837\u6027\uff0c",(0,i.kt)("inlineCode",{parentName:"p"},"ConditionData"),"\u548c",(0,i.kt)("inlineCode",{parentName:"p"},"ParameData"),"\u5c01\u88c5\u4e86\u591a\u79cd\u53c2\u6570\u3002\u90a3\u4e48\u5bf9\u4e8e\u591a\u4e2a\u6761\u4ef6\u7684\u5339\u914d\u6765\u8bf4\uff0c\u91c7\u7528",(0,i.kt)("inlineCode",{parentName:"p"},"Stream"),"\u6d41\u5904\u7406\u53ca",(0,i.kt)("inlineCode",{parentName:"p"},"lamda"),'\u8868\u8fbe\u5f0f\uff0c\u975e\u5e38\u7b80\u6d01\u9ad8\u6548\u8fbe\u6210\u4e86\uff1a\u5168\u90e8\u6761\u4ef6\u90fd\u6ee1\u8db3\uff0c\u5373"AND"\u7684\u903b\u8f91\u3002'),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-java"},"@Join\npublic class AndMatchStrategy extends AbstractMatchStrategy implements MatchStrategy {\n\n    @Override\n    public Boolean match(final List<ConditionData> conditionDataList, final ServerWebExchange exchange) {\n        return conditionDataList\n                .stream()\n                .allMatch(condition -> PredicateJudgeFactory.judge(condition, buildRealData(condition, exchange)));\n    }\n}\n")),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"OrMatchStrategy"),'\u662f\u540c\u6837\u7684\u5b9e\u73b0\u65b9\u5f0f\uff0c\u5b9e\u73b0: \u81f3\u5c11\u6ee1\u8db3\u4e00\u4e2a\u6761\u4ef6"OR"\u7684\u89c4\u5219\uff0c\u5728\u6b64\u4e0d\u505a\u8d58\u8ff0\u3002'),(0,i.kt)("h2",{id:"matchstrategyfactory"},"MatchStrategyFactory"),(0,i.kt)("p",null,"\u8fd9\u662f",(0,i.kt)("inlineCode",{parentName:"p"},"MatchStrategy"),"\u7684\u5de5\u5382\u7c7b\uff0c\u5b9e\u73b0\u4e86\u4e24\u4e2a\u65b9\u6cd5\uff0c\u4e00\u4e2a\u662f",(0,i.kt)("inlineCode",{parentName:"p"},"newInstance()"),"\u65b9\u6cd5\u6839\u636e\u7b56\u7565\u4ee3\u7801\u548c\u540d\u79f0\uff0c\u8fd4\u56de\u7531",(0,i.kt)("inlineCode",{parentName:"p"},"SPI")," ",(0,i.kt)("inlineCode",{parentName:"p"},"ExtensionLoader"),"\u6309key\u6765\u52a0\u8f7d\u5bf9\u5e94\u7684",(0,i.kt)("inlineCode",{parentName:"p"},"MatchStrategy"),"\u5b9e\u73b0\u7c7b\u3002"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-java"},"    public static MatchStrategy newInstance(final Integer strategy) {\n        String matchMode = MatchModeEnum.getMatchModeByCode(strategy);\n        return ExtensionLoader.getExtensionLoader(MatchStrategy.class).getJoin(matchMode);\n    }\n")),(0,i.kt)("p",null,"\u5728",(0,i.kt)("inlineCode",{parentName:"p"},"MatchModeEnum"),' \u4e2d\u5b9a\u4e49\u4e86match\u7b56\u7565\u7684code\u548cname\u3002 \u8c03\u7528\u65f6\u7531\u7b56\u7565\u540d\u79f0\uff0c\u5982"and","or"\uff0c\u6839\u636e\u542f\u52a8\u65f6SPI\u52a0\u8f7d\u7684key-value\u8d44\u6599\uff0c\u627e\u5230\u5bf9\u5e94\u7684\u5b9e\u73b0\u7c7b\uff1a'),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-java"},'AND(0, "and"),  \nOR(1, "or");\n')),(0,i.kt)("p",null,"\u53e6\u4e00\u4e2a\u662f",(0,i.kt)("inlineCode",{parentName:"p"},"match()"),"\u65b9\u6cd5\uff0c\u8c03\u7528\u5b9e\u4f5c\u7c7b\u7684",(0,i.kt)("inlineCode",{parentName:"p"},"match"),"\u65b9\u6cd5\u3002"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-java"},"    public static boolean match(final Integer strategy, final List<ConditionData> conditionDataList, final ServerWebExchange exchange) {\n        return newInstance(strategy).match(conditionDataList, exchange);\n    }\n")),(0,i.kt)("h2",{id:"\u8c03\u7528\u65b9\u5f0f"},"\u8c03\u7528\u65b9\u5f0f"),(0,i.kt)("p",null,"\u5728",(0,i.kt)("inlineCode",{parentName:"p"},"shenyu-plugin"),"\u6a21\u7ec4\u7684\u5404\u4e2a",(0,i.kt)("inlineCode",{parentName:"p"},"plugin"),"\u7684\u57fa\u7c7b",(0,i.kt)("inlineCode",{parentName:"p"},"AbstractShenyuPlugin")," \u4e2d\uff0c\u5b9a\u4e49\u4e86\u4e24\u4e2a\u9009\u62e9\u7684\u65b9\u6cd5\uff1a",(0,i.kt)("inlineCode",{parentName:"p"},"filterSelector")," \u548c",(0,i.kt)("inlineCode",{parentName:"p"},"filterRule")," \u5b83\u4eec\u90fd\u8c03\u7528\u4e86",(0,i.kt)("inlineCode",{parentName:"p"},"MatchStrategyFactory")," \u65b9\u6cd5\uff0c\u4e0b\u9762\u662f",(0,i.kt)("inlineCode",{parentName:"p"},"AbstractShenyuPlugin"),"\u4e2d",(0,i.kt)("inlineCode",{parentName:"p"},"filterSelector"),"\u65b9\u6cd5\u7684\u4ee3\u7801\uff1a"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-java"},"    private Boolean filterSelector(final SelectorData selector, final ServerWebExchange exchange) {        if (selector.getType() == SelectorTypeEnum.CUSTOM_FLOW.getCode()) {            if (CollectionUtils.isEmpty(selector.getConditionList())) {                return false;            }            return MatchStrategyFactory.match(selector.getMatchMode(), selector.getConditionList(), exchange);        }        return true;    }\n")),(0,i.kt)("p",null,"\u8fd9\u6bb5\u4ee3\u7801\u4e2d\uff0c\u5148\u68c0\u6d4b\u53c2\u6570\u5339\u914d\u6761\u4ef6",(0,i.kt)("inlineCode",{parentName:"p"},"SelectorData"),"\u662f\u5426\u4e3a\u7a7a\uff0c\u4e4b\u540e\u8c03\u7528",(0,i.kt)("inlineCode",{parentName:"p"},"MatchStrategyFactory"),"\u7684",(0,i.kt)("inlineCode",{parentName:"p"},"match"),"\u65b9\u6cd5\uff0c\u5de5\u5382\u65b9\u6cd5\u5c06\u8c03\u7528\u5bf9\u5e94\u7684\u5b9e\u4f5c\u7c7b\u7684",(0,i.kt)("inlineCode",{parentName:"p"},"match"),"\u65b9\u6cd5\u3002\u540c\u7406\uff0c\u5982\u4e0b\u662f",(0,i.kt)("inlineCode",{parentName:"p"},"AbstractShenyuPlugin"),"\u4e2d ",(0,i.kt)("inlineCode",{parentName:"p"},"filterRule")," \u65b9\u6cd5"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-java"},"    private Boolean filterRule(final RuleData ruleData, final ServerWebExchange exchange) {        return ruleData.getEnabled() && MatchStrategyFactory.match(ruleData.getMatchMode(), ruleData.getConditionDataList(), exchange);    }\n")),(0,i.kt)("p",null,"\u4e5f\u540c\u6837\u662f\u8c03\u7528",(0,i.kt)("inlineCode",{parentName:"p"},"MatchStrategyFactory"),"\u7684",(0,i.kt)("inlineCode",{parentName:"p"},"match"),"\u65b9\u6cd5\uff0c\u770b\u4e0a\u53bb\u662f\u4e0d\u662f\u7279\u522b\u7684\u7b80\u6d01\u751a\u81f3\u662f\u7b80\u5355\uff1f \u5728",(0,i.kt)("inlineCode",{parentName:"p"},"PredicteJudge"),"\u7684",(0,i.kt)("a",{parentName:"p",href:"http://shenyu.apache.org/blog/PredicateJudge-SPI"},"\u4ee3\u7801\u5206\u6790"),"\u6587\u4e2d\uff0c\u5bf9",(0,i.kt)("inlineCode",{parentName:"p"},"shenyu-plugin"),"\u5982\u4f55\u505a\u53c2\u6570\u8c03\u7528\u65b9\u9762\u505a\u4e86\u66f4\u8fdb\u4e00\u6b65\u7684\u63cf\u8ff0\u3002"),(0,i.kt)("h2",{id:"summary"},"Summary"),(0,i.kt)("p",null,"\u7531\u4e8e\u5e94\u7528\u4e86",(0,i.kt)("inlineCode",{parentName:"p"},"Apache shenyu"),"\u7684",(0,i.kt)("inlineCode",{parentName:"p"},"SPI"),"\u6846\u67b6\uff0c\u4f7f\u5f97\u6574\u4f53\u4e0a\u5177\u6709\u677e\u8026\u5408\u3001\u6613\u4e8e\u6269\u5c55\u7684\u7279\u70b9\u3002\u5728\u591a\u4e2a\u53c2\u6570\u89c4\u5219\u7b56\u7565\u65b9\u9762\uff0c",(0,i.kt)("inlineCode",{parentName:"p"},"MatchStrategy"),"\u63d0\u4f9b\u4e86\u826f\u597d\u7684\u8bbe\u8ba1\uff0c\u867d\u7136\u76ee\u524d\u53ea\u63d0\u4f9b\u4e86\u4e24\u4e2aAND \u548cOR\u7684\u5b9e\u73b0\u7c7b\uff0c\u4f46\u672a\u6765\u53ef\u4ee5\u5f88\u8f7b\u677e\u5730\u6269\u5c55\u4e3a\u66f4\u591a",(0,i.kt)("inlineCode",{parentName:"p"},"MatchStrategy"),"\u89c4\u5219\uff0c\u4f8b\u5982 ",(0,i.kt)("inlineCode",{parentName:"p"},"firstOf"),"\uff1a\u5373\u5fc5\u987b\u6ee1\u8db3\u7b2c\u4e00\u4e2a\u6761\u4ef6\uff0c\u6216",(0,i.kt)("inlineCode",{parentName:"p"},"mostOf"),"-\u6ee1\u8db3\u5927\u90e8\u5206\u6761\u4ef6\u7b49\u66f4\u591a\u590d\u6742\u7b56\u7565\uff0c\u800c\u5176\u4ed6\u8c03\u7528\u90e8\u5206\u7684\u4ee3\u7801\u5b8c\u5168\u4e0d\u53d7\u5f71\u54cd\u3002 "),(0,i.kt)("p",null,"\u6709\u5174\u8da3\u7684\u8bfb\u8005\u53ef\u4ee5\u53bb\u9605\u8bfb",(0,i.kt)("inlineCode",{parentName:"p"},"Shenyu plugin"),"\u7684\u6e90\u7801\u4e86\u89e3\u66f4\u591a\u5185\u5bb9\u3002"))}u.isMDXComponent=!0},94078:function(e,t,a){t.Z=a.p+"assets/images/MatchStrategy-class-diagram-ac006eef5089ce92a972e039b431100b.PNG"}}]);