"use strict";(self.webpackChunktypegraphql_prisma_website=self.webpackChunktypegraphql_prisma_website||[]).push([[418],{3905:function(e,t,r){r.d(t,{Zo:function(){return l},kt:function(){return d}});var n=r(7294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function p(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var s=n.createContext({}),c=function(e){var t=n.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},l=function(e){var t=c(e.components);return n.createElement(s.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},u=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,s=e.parentName,l=p(e,["components","mdxType","originalType","parentName"]),u=c(r),d=a,f=u["".concat(s,".").concat(d)]||u[d]||m[d]||o;return r?n.createElement(f,i(i({ref:t},l),{},{components:r})):n.createElement(f,i({ref:t},l))}));function d(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,i=new Array(o);i[0]=u;var p={};for(var s in t)hasOwnProperty.call(t,s)&&(p[s]=t[s]);p.originalType=e,p.mdxType="string"==typeof e?e:a,i[1]=p;for(var c=2;c<o;c++)i[c]=r[c];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}u.displayName="MDXCreateElement"},6121:function(e,t,r){r.r(t),r.d(t,{frontMatter:function(){return p},contentTitle:function(){return s},metadata:function(){return c},toc:function(){return l},default:function(){return u}});var n=r(7462),a=r(3366),o=(r(7294),r(3905)),i=["components"],p={title:"Custom Prisma Client import path",sidebar_label:"Prisma import path",sidebar_position:12},s=void 0,c={unversionedId:"advanced/custom-prisma-import",id:"advanced/custom-prisma-import",title:"Custom Prisma Client import path",description:"If you have a complex repository structure, e.g. with multiple Prisma clients generated, you can provide a custom Prisma import path as a generator option:",source:"@site/../docs/advanced/custom-prisma-import.md",sourceDirName:"advanced",slug:"/advanced/custom-prisma-import",permalink:"/docs/advanced/custom-prisma-import",editUrl:"https://github.com/MichalLytek/typegraphql-prisma/edit/main/docs/../docs/advanced/custom-prisma-import.md",tags:[],version:"current",sidebarPosition:12,frontMatter:{title:"Custom Prisma Client import path",sidebar_label:"Prisma import path",sidebar_position:12},sidebar:"docs",previous:{title:"Simple resolvers",permalink:"/docs/advanced/simple-resolvers"},next:{title:"Prisma context key",permalink:"/docs/advanced/custom-prisma-context-key"}},l=[],m={toc:l};function u(e){var t=e.components,r=(0,a.Z)(e,i);return(0,o.kt)("wrapper",(0,n.Z)({},m,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"If you have a complex repository structure, e.g. with multiple Prisma clients generated, you can provide a custom Prisma import path as a generator option:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-prisma",metastring:"{3}","{3}":!0},'generator typegraphql {\n  provider               = "typegraphql-prisma"\n  customPrismaImportPath = "../client"\n}\n')),(0,o.kt)("p",null,"This will replace the standard, default system of detecting Prisma generator output folder, based on the ",(0,o.kt)("inlineCode",{parentName:"p"},"node_modules")," presence in the Prisma ",(0,o.kt)("inlineCode",{parentName:"p"},"output")," option."),(0,o.kt)("p",null,"The custom Prisma import path will be used in all generated files, treated as a relative path to the ",(0,o.kt)("inlineCode",{parentName:"p"},"output")," folder of ",(0,o.kt)("inlineCode",{parentName:"p"},"typegraphql-prisma")," generator. This means the paths will be prepended with appropriate ",(0,o.kt)("inlineCode",{parentName:"p"},"'../'")," for files in nested directories, like ",(0,o.kt)("inlineCode",{parentName:"p"},"resolvers/outputs"),"."))}u.isMDXComponent=!0}}]);