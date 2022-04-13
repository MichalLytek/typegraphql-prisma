"use strict";(self.webpackChunktypegraphql_prisma_website=self.webpackChunktypegraphql_prisma_website||[]).push([[223],{3905:function(e,t,r){r.d(t,{Zo:function(){return l},kt:function(){return d}});var n=r(7294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function c(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var s=n.createContext({}),p=function(e){var t=n.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},l=function(e){var t=p(e.components);return n.createElement(s.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,a=e.originalType,s=e.parentName,l=c(e,["components","mdxType","originalType","parentName"]),m=p(r),d=o,y=m["".concat(s,".").concat(d)]||m[d]||u[d]||a;return r?n.createElement(y,i(i({ref:t},l),{},{components:r})):n.createElement(y,i({ref:t},l))}));function d(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=r.length,i=new Array(a);i[0]=m;var c={};for(var s in t)hasOwnProperty.call(t,s)&&(c[s]=t[s]);c.originalType=e,c.mdxType="string"==typeof e?e:o,i[1]=c;for(var p=2;p<a;p++)i[p]=r[p];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"},2447:function(e,t,r){r.r(t),r.d(t,{frontMatter:function(){return c},contentTitle:function(){return s},metadata:function(){return p},toc:function(){return l},default:function(){return m}});var n=r(7462),o=r(3366),a=(r(7294),r(3905)),i=["components"],c={title:"Custom Prisma Client context key",sidebar_label:"Prisma context key",sidebar_position:13},s=void 0,p={unversionedId:"advanced/custom-prisma-context-key",id:"advanced/custom-prisma-context-key",title:"Custom Prisma Client context key",description:"By default, typegraphql-prisma looks in runtime for Prisma Client in the GraphQL context under the prisma key.",source:"@site/../docs/advanced/custom-prisma-context-key.md",sourceDirName:"advanced",slug:"/advanced/custom-prisma-context-key",permalink:"/docs/advanced/custom-prisma-context-key",editUrl:"https://github.com/MichalLytek/typegraphql-prisma/edit/main/docs/../docs/advanced/custom-prisma-context-key.md",tags:[],version:"current",sidebarPosition:13,frontMatter:{title:"Custom Prisma Client context key",sidebar_label:"Prisma context key",sidebar_position:13},sidebar:"docs",previous:{title:"Prisma import path",permalink:"/docs/advanced/custom-prisma-import"}},l=[],u={toc:l};function m(e){var t=e.components,r=(0,o.Z)(e,i);return(0,a.kt)("wrapper",(0,n.Z)({},u,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"By default, ",(0,a.kt)("inlineCode",{parentName:"p"},"typegraphql-prisma")," looks in runtime for Prisma Client in the GraphQL context under the ",(0,a.kt)("inlineCode",{parentName:"p"},"prisma")," key."),(0,a.kt)("p",null,"However, in some cases like when you have multiple Prisma clients generated, you can provide a generator option to set the custom key for context object, where the Prisma Client can be found:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-prisma",metastring:"{3}","{3}":!0},'generator typegraphql {\n  provider         = "typegraphql-prisma"\n  contextPrismaKey = "customPrisma"\n}\n')),(0,a.kt)("p",null,"By using this option, all the generated resolvers will try to use the Prisma Client from ",(0,a.kt)("inlineCode",{parentName:"p"},'context["customPrisma"]')," instead of the standard ",(0,a.kt)("inlineCode",{parentName:"p"},"context.prisma"),"."))}m.isMDXComponent=!0}}]);