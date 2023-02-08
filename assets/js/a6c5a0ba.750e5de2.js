"use strict";(self.webpackChunktypegraphql_prisma_website=self.webpackChunktypegraphql_prisma_website||[]).push([[63],{3905:(e,t,r)=>{r.d(t,{Zo:()=>p,kt:()=>u});var n=r(7294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function s(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var i=n.createContext({}),c=function(e){var t=n.useContext(i),r=t;return e&&(r="function"==typeof e?e(t):s(s({},t),e)),r},p=function(e){var t=c(e.components);return n.createElement(i.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,a=e.originalType,i=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),m=c(r),u=o,f=m["".concat(i,".").concat(u)]||m[u]||d[u]||a;return r?n.createElement(f,s(s({ref:t},p),{},{components:r})):n.createElement(f,s({ref:t},p))}));function u(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=r.length,s=new Array(a);s[0]=m;var l={};for(var i in t)hasOwnProperty.call(t,i)&&(l[i]=t[i]);l.originalType=e,l.mdxType="string"==typeof e?e:o,s[1]=l;for(var c=2;c<a;c++)s[c]=r[c];return n.createElement.apply(null,s)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"},6617:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>i,contentTitle:()=>s,default:()=>d,frontMatter:()=>a,metadata:()=>l,toc:()=>c});var n=r(7462),o=(r(7294),r(3905));const a={title:"Exposing selected models Prisma CRUD actions",sidebar_label:"Exposing selected models"},s=void 0,l={unversionedId:"advanced/exposing-models",id:"advanced/exposing-models",title:"Exposing selected models Prisma CRUD actions",description:"If you want to expose only CRUD Prisma actions for selected models, you can import crud resolver classes only for that models, instead of the all-in-one resolvers object.",source:"@site/../docs/advanced/exposing-models.md",sourceDirName:"advanced",slug:"/advanced/exposing-models",permalink:"/docs/advanced/exposing-models",draft:!1,editUrl:"https://github.com/MichalLytek/typegraphql-prisma/edit/main/docs/../docs/advanced/exposing-models.md",tags:[],version:"current",frontMatter:{title:"Exposing selected models Prisma CRUD actions",sidebar_label:"Exposing selected models"},sidebar:"docs",previous:{title:"Advanced",permalink:"/docs/category/advanced"},next:{title:"Exposing selected actions",permalink:"/docs/advanced/exposing-actions"}},i={},c=[],p={toc:c};function d(e){let{components:t,...r}=e;return(0,o.kt)("wrapper",(0,n.Z)({},p,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"If you want to expose only CRUD Prisma actions for selected models, you can import crud resolver classes only for that models, instead of the all-in-one ",(0,o.kt)("inlineCode",{parentName:"p"},"resolvers")," object."),(0,o.kt)("p",null,"Then you just have to put them into the ",(0,o.kt)("inlineCode",{parentName:"p"},"buildSchema"),":"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-ts",metastring:"{1,4}","{1,4}":!0},'import { UserCrudResolver, PostCrudResolver } from "@generated/type-graphql";\n\nconst schema = await buildSchema({\n  resolvers: [CustomUserResolver, UserCrudResolver, PostCrudResolver],\n  validate: false,\n});\n')),(0,o.kt)("p",null,"However, if you also want to have relations like ",(0,o.kt)("inlineCode",{parentName:"p"},"User -> posts")," emitted in schema, you need to import also the relations resolvers and register them in your ",(0,o.kt)("inlineCode",{parentName:"p"},"buildSchema")," call:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-ts",metastring:"{3,8}","{3,8}":!0},'import {\n  User,\n  UserRelationsResolver,\n  UserCrudResolver,\n} from "@generated/type-graphql";\n\nconst schema = await buildSchema({\n  resolvers: [CustomUserResolver, UserRelationsResolver, UserCrudResolver],\n  validate: false,\n});\n')))}d.isMDXComponent=!0}}]);