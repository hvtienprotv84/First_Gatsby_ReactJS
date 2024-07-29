"use strict";(self.webpackChunkmy_portfolio=self.webpackChunkmy_portfolio||[]).push([[508],{6064:function(e,t,n){n.d(t,{nr:function(){return g},X5:function(){return s.X},cy:function(){return x},fW:function(){return N},v3:function(){return $},YW:function(){return a.Y},wn:function(){return i.w},G$:function(){return l.G}});var a=n(2386),l=n(3420),r=n(6540),s=n(1007),i=(n(1445),n(871)),o=n(8406);n(8253);n(3783);var c=n(4794);!function(e,t){void 0===t&&(t={});var n=t.insertAt;if(e&&"undefined"!=typeof document){var a=document.head||document.getElementsByTagName("head")[0],l=document.createElement("style");l.type="text/css","top"===n&&a.firstChild?a.insertBefore(l,a.firstChild):a.appendChild(l),l.styleSheet?l.styleSheet.cssText=e:l.appendChild(document.createTextNode(e))}}('.styles_skeleton__tyzRD{background:#eff1f6;display:inline-block;line-height:1;overflow:hidden;position:relative}.styles_skeleton__tyzRD:before{animation:styles_skeleton-progress__aezri 1.2s ease-in-out infinite;background-image:linear-gradient(90deg,hsla(0,0%,100%,0),hsla(0,0%,100%,.6),hsla(0,0%,100%,0));content:"";height:100%;left:-500px;position:absolute;top:0;width:500px}@keyframes styles_skeleton-progress__aezri{0%{left:-500px}to{left:100%}}');n(211);n(3493);var m=n(2532);const d=()=>(0,c.useStaticQuery)("1764120992");var u="style-module--About--0f660",f="style-module--Description--2e019",y="style-module--Image--57f3b",h="style-module--ImageWrapper--a41ba";function g(e){const t=d().allAboutMarkdown.sections[0];return r.createElement(s.X,{type:"fadeUp"},r.createElement(i.w,{anchor:e.sectionId,heading:e.heading},r.createElement("div",{className:u},r.createElement("div",{className:f,dangerouslySetInnerHTML:{__html:t.html}}),t.frontmatter.imageSrc&&r.createElement(s.X,{type:"fadeLeft",delay:200},r.createElement("div",{className:h},r.createElement(m.G,{image:t.frontmatter.imageSrc.childImageSharp.gatsbyImageData,className:y,alt:t.frontmatter.imageAlt||"About Image"}))))))}var p="style-module--Button--82b1f";let b=function(e){return e.BUTTON="button",e.SUBMIT="submit",e.LINK="link",e}({});function E(e){if(e.type===b.LINK){if(e.url)return e.externalLink?r.createElement("a",{id:e.id,className:p,href:e.url,target:"_blank",rel:"noopener noreferrer","aria-label":"External Link"},e.label):r.createElement(c.Link,{id:e.id,to:e.url,className:p},e.label);throw new Error(`Button should be a ${e.type} but no URL is given!`)}if(e.type===b.BUTTON||e.type===b.SUBMIT){if(!e.onClickHandler)throw new Error(`Button should be a ${e.type} but no onClickHandler is given!`);return r.createElement("button",{id:e.id,className:p,type:e.type,onClick:e.onClickHandler},e.label)}throw new Error("Unknown button type specified.")}const I=()=>(0,c.useStaticQuery)("4042740421");var v="style-module--Icon--4b6f8",k="style-module--Interest--4bfd4",w="style-module--Interests--3d3b3";function N(e){var t;const n=I().allInterestsJson.sections[0],a=!1!==n.button.visible,l=null!==(t=n.button.initiallyShownInterests)&&void 0!==t?t:5,[o,c]=r.useState(a?l:n.interests.length);return r.createElement(s.X,{type:"fadeUp"},r.createElement(i.w,{anchor:e.sectionId,heading:e.heading},r.createElement("div",{className:w},n.interests.slice(0,o).map(((e,t)=>r.createElement(s.X,{key:t,className:k,type:"scaleIn",delay:100*t},e.image.src&&r.createElement(m.G,{image:e.image.src.childImageSharp.gatsbyImageData,className:v,alt:e.image.alt||`Interest ${e.label}`})," ",e.label))),a&&o<n.interests.length&&r.createElement(s.X,{type:"scaleIn",delay:100*(o+1)},r.createElement(E,{type:b.BUTTON,onClickHandler:function(){c(n.interests.length)},label:n.button.label})))))}n(3323),n(9483);const S=()=>(0,c.useStaticQuery)("1572444355");var _="style-module--Avatar--fda4c",C="style-module--Contact--1c6f8",T="style-module--ContactDetails--70da4",B="style-module--Description--87aea",L="style-module--Name--8248f",U="style-module--Profile--3b0af";function x(e){const t=S().allContactJson.sections[0];return r.createElement(s.X,{type:"fadeUp"},r.createElement(i.w,{anchor:e.sectionId,heading:e.heading,additionalClasses:[C]},t.description&&r.createElement("p",{className:B},t.description),r.createElement("div",{className:U},t.image.src&&r.createElement(m.G,{className:_,image:t.image.src.childImageSharp.gatsbyImageData,alt:t.image.alt||`Profile ${t.name}`}),r.createElement("div",{className:T},r.createElement("div",{className:L},t.name),r.createElement("u",null,r.createElement("a",{href:`mailto:${t.email}`},t.email)))),t.socialProfiles&&r.createElement(o.S,{from:t.socialProfiles.from,showIcon:t.socialProfiles.showIcons})))}const D=()=>(0,c.useStaticQuery)("597217301"),X=(e,t)=>{const n=e.allLegalSection.sections.filter((e=>e.frontmatter.sectionId===t));if(0===n.length)throw new Error(`Could not find section ${t} by id.`);if(n.length>1)throw new Error(`Found section ${t} multiple times. Make sure the id is unique.`);return n[0]};function $(e){const t=D(),n=X(t,e.sectionId);return r.createElement(i.w,{anchor:e.sectionId,heading:e.heading},r.createElement("div",{dangerouslySetInnerHTML:{__html:n.html}}))}}}]);
//# sourceMappingURL=730a8bd782e050fc37bbb373f186ecef55b9fac4-d7702e6dee38f659b05e.js.map