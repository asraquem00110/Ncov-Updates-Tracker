(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2d0b5965"],{"1a10":function(t,e){var r=function(){function t(){this.start=0,this.end=0,this.previous=null,this.parent=null,this.rules=null,this.parsedCssText="",this.cssText="",this.atRule=!1,this.type=0,this.keyframesName="",this.selector="",this.parsedSelector=""}return t}();function n(t){return t=s(t),o(i(t),t)}function s(t){return t.replace(p.comments,"").replace(p.port,"")}function i(t){var e=new r;e["start"]=0,e["end"]=t.length;for(var n=e,s=0,i=t.length;s<i;s++)if(t[s]===c){n["rules"]||(n["rules"]=[]);var o=n,a=o["rules"][o["rules"].length-1]||null;n=new r,n["start"]=s+1,n["parent"]=o,n["previous"]=a,o["rules"].push(n)}else t[s]===l&&(n["end"]=s+1,n=n["parent"]||e);return e}function o(t,e){var r=e.substring(t["start"],t["end"]-1);if(t["parsedCssText"]=t["cssText"]=r.trim(),t.parent){var n=t.previous?t.previous["end"]:t.parent["start"];r=e.substring(n,t["start"]-1),r=a(r),r=r.replace(p.multipleSpaces," "),r=r.substring(r.lastIndexOf(";")+1);var s=t["parsedSelector"]=t["selector"]=r.trim();t["atRule"]=0===s.indexOf(v),t["atRule"]?0===s.indexOf(h)?t["type"]=u.MEDIA_RULE:s.match(p.keyframesRule)&&(t["type"]=u.KEYFRAMES_RULE,t["keyframesName"]=t["selector"].split(p.multipleSpaces).pop()):0===s.indexOf(f)?t["type"]=u.MIXIN_RULE:t["type"]=u.STYLE_RULE}var i=t["rules"];if(i)for(var c=0,l=i.length,m=void 0;c<l&&(m=i[c]);c++)o(m,e);return t}function a(t){return t.replace(/\\([0-9a-f]{1,6})\s/gi,(function(){var t=arguments[1],e=6-t.length;while(e--)t="0"+t;return"\\"+t}))}var u={STYLE_RULE:1,KEYFRAMES_RULE:7,MEDIA_RULE:4,MIXIN_RULE:1e3},c="{",l="}",p={comments:/\/\*[^*]*\*+([^/*][^*]*\*+)*\//gim,port:/@import[^;]*;/gim,customProp:/(?:^[^;\-\s}]+)?--[^;{}]*?:[^{};]*?(?:[;\n]|$)/gim,mixinProp:/(?:^[^;\-\s}]+)?--[^;{}]*?:[^{};]*?{[^}]*?}(?:[;\n]|$)?/gim,mixinApply:/@apply\s*\(?[^);]*\)?\s*(?:[;\n]|$)?/gim,varApply:/[^;:]*?:[^;]*?var\([^;]*\)(?:[;\n]|$)?/gim,keyframesRule:/^@[^\s]*keyframes/,multipleSpaces:/\s+/g},f="--",h="@media",v="@";function m(t,e,r){t["lastIndex"]=0;var n=e.substring(r).match(t);if(n){var s=r+n["index"];return{start:s,end:s+n[0].length}}return null}var d=/\bvar\(/,g=/\B--[\w-]+\s*:/,y=/\/\*[^*]*\*+([^/*][^*]*\*+)*\//gim,S=/^[\t ]+\n/gm;function b(t,e,r){return t[e]?t[e]:r?M(r,t):""}function E(t,e){for(var r=0,n=e;n<t.length;n++){var s=t[n];if("("===s)r++;else if(")"===s&&(r--,r<=0))return n+1}return n}function w(t,e){var r=m(d,t,e);if(!r)return null;var n=E(t,r.start),s=t.substring(r.end,n-1),i=s.split(","),o=i[0],a=i.slice(1);return{start:r.start,end:n,propName:o.trim(),fallback:a.length>0?a.join(",").trim():void 0}}function x(t,e,r){var n=w(t,r);if(!n)return e.push(t.substring(r,t.length)),t.length;var s=n.propName,i=null!=n.fallback?I(n.fallback):void 0;return e.push(t.substring(r,n.start),(function(t){return b(t,s,i)})),n.end}function M(t,e){for(var r="",n=0;n<t.length;n++){var s=t[n];r+="string"===typeof s?s:s(e)}return r}function k(t,e){for(var r=!1,n=!1,s=e;s<t.length;s++){var i=t[s];if(r)n&&'"'===i&&(r=!1),n||"'"!==i||(r=!1);else if('"'===i)r=!0,n=!0;else if("'"===i)r=!0,n=!1;else{if(";"===i)return s+1;if("}"===i)return s}}return s}function C(t){var e="",r=0;while(1){var n=m(g,t,r),s=n?n.start:t.length;if(e+=t.substring(r,s),!n)break;r=k(t,s)}return e}function I(t){var e=0;t=t.replace(y,""),t=C(t).replace(S,"");var r=[];while(e<t.length)e=x(t,r,e);return r}function R(t){var e={};t.forEach((function(t){t.declarations.forEach((function(t){e[t.prop]=t.value}))}));for(var r={},n=Object.entries(e),s=function(t){var e=!1;if(n.forEach((function(t){var n=t[0],s=t[1],i=M(s,r);i!==r[n]&&(r[n]=i,e=!0)})),!e)return"break"},i=0;i<10;i++){var o=s();if("break"===o)break}return r}function _(t,e){if(void 0===e&&(e=0),!t.rules)return[];var r=[];return t.rules.filter((function(t){return t.type===u.STYLE_RULE})).forEach((function(t){var n=T(t.cssText);n.length>0&&t.parsedSelector.split(",").forEach((function(t){t=t.trim(),r.push({selector:t,declarations:n,specificity:L(),nu:e})})),e++})),r}function L(t){return 1}var A="!important",O=/(?:^|[;\s{]\s*)(--[\w-]*?)\s*:\s*(?:((?:'(?:\\'|.)*?'|"(?:\\"|.)*?"|\([^)]*?\)|[^};{])+)|\{([^}]*)\}(?:(?=[;\s}])|$))/gm;function T(t){var e,r=[];while(e=O.exec(t.trim())){var n=U(e[2]),s=n.value,i=n.important;r.push({prop:e[1].trim(),value:I(s),important:i})}return r}function U(t){var e=/\s+/gim;t=t.replace(e," ").trim();var r=t.endsWith(A);return r&&(t=t.substr(0,t.length-A.length).trim()),{value:t,important:r}}function N(t,e,r){var n=[],s=j(e,t);r.forEach((function(t){return n.push(t)})),s.forEach((function(t){return n.push(t)}));var i=$(n),o=i.filter((function(e){return H(t,e.selector)}));return G(o)}function j(t,e){var r=[];while(e){var n=t.get(e);n&&r.push(n),e=e.parentElement}return r}function $(t){var e=[];return t.forEach((function(t){e.push.apply(e,t.selectors)})),e}function G(t){return t.sort((function(t,e){return t.specificity===e.specificity?t.nu-e.nu:t.specificity-e.specificity})),t}function H(t,e){return":root"===e||"html"===e||t.matches(e)}function P(t){var e=n(t),r=I(t),s=_(e);return{original:t,template:r,selectors:s,usesCssVars:r.length>1}}function V(t,e){if(t.some((function(t){return t.styleEl===e})))return!1;var r=P(e.textContent);return r.styleEl=e,t.push(r),!0}function Y(t){var e=$(t),r=R(e);t.forEach((function(t){t.usesCssVars&&(t.styleEl.textContent=M(t.template,r))}))}function q(t,e){var r=t.template.map((function(r){return"string"===typeof r?B(r,t.scopeId,e):r})),n=t.selectors.map((function(r){return Object.assign(Object.assign({},r),{selector:B(r.selector,t.scopeId,e)})}));return Object.assign(Object.assign({},t),{template:r,selectors:n,scopeId:e})}function B(t,e,r){return t=F(t,"\\."+e,"."+r),t}function F(t,e,r){return t.replace(new RegExp(e,"g"),r)}function W(t,e){return K(t,e),J(t,e)}function D(t,e){var r=new MutationObserver((function(){K(t,e)&&Y(e)}));r.observe(document.head,{childList:!0})}function J(t,e){for(var r=[],n=t.querySelectorAll('link[rel="stylesheet"][href]:not([data-no-shim])'),s=0;s<n.length;s++)r.push(X(t,e,n[s]));return Promise.all(r)}function K(t,e){var r=Array.from(t.querySelectorAll("style:not([data-styles]):not([data-no-shim])"));return r.map((function(t){return V(e,t)})).some(Boolean)}function X(t,e,r){var n=r.href;return fetch(n).then((function(t){return t.text()})).then((function(s){if(Z(s)&&r.parentNode){tt(s)&&(s=et(s,n));var i=t.createElement("style");i.setAttribute("data-styles",""),i.textContent=s,V(e,i),r.parentNode.insertBefore(i,r),r.remove()}})).catch((function(t){console.error(t)}))}var z=/[\s;{]--[-a-zA-Z0-9]+\s*:/m;function Z(t){return t.indexOf("var(")>-1||z.test(t)}var Q=/url[\s]*\([\s]*['"]?(?!(?:https?|data)\:|\/)([^\'\"\)]*)[\s]*['"]?\)[\s]*/gim;function tt(t){return Q.lastIndex=0,Q.test(t)}function et(t,e){var r=e.replace(/[^/]*$/,"");return t.replace(Q,(function(t,e){var n=r+e;return t.replace(e,n)}))}var rt=function(){function t(t,e){this.win=t,this.doc=e,this.count=0,this.hostStyleMap=new WeakMap,this.hostScopeMap=new WeakMap,this.globalScopes=[],this.scopesMap=new Map,this.didInit=!1}return t.prototype.initShim=function(){var t=this;return this.didInit?Promise.resolve():(this.didInit=!0,new Promise((function(e){t.win.requestAnimationFrame((function(){D(t.doc,t.globalScopes),W(t.doc,t.globalScopes).then((function(){return e()}))}))})))},t.prototype.addLink=function(t){var e=this;return X(this.doc,this.globalScopes,t).then((function(){e.updateGlobal()}))},t.prototype.addGlobalStyle=function(t){V(this.globalScopes,t)&&this.updateGlobal()},t.prototype.createHostStyle=function(t,e,r,n){if(this.hostScopeMap.has(t))throw new Error("host style already created");var s=this.registerHostTemplate(r,e,n),i=this.doc.createElement("style");return i.setAttribute("data-styles",""),s.usesCssVars?n?(i["s-sc"]=e=s.scopeId+"-"+this.count,i.textContent="/*needs update*/",this.hostStyleMap.set(t,i),this.hostScopeMap.set(t,q(s,e)),this.count++):(s.styleEl=i,s.usesCssVars||(i.textContent=M(s.template,{})),this.globalScopes.push(s),this.updateGlobal(),this.hostScopeMap.set(t,s)):i.textContent=r,i},t.prototype.removeHost=function(t){var e=this.hostStyleMap.get(t);e&&e.remove(),this.hostStyleMap.delete(t),this.hostScopeMap.delete(t)},t.prototype.updateHost=function(t){var e=this.hostScopeMap.get(t);if(e&&e.usesCssVars&&e.isScoped){var r=this.hostStyleMap.get(t);if(r){var n=N(t,this.hostScopeMap,this.globalScopes),s=R(n);r.textContent=M(e.template,s)}}},t.prototype.updateGlobal=function(){Y(this.globalScopes)},t.prototype.registerHostTemplate=function(t,e,r){var n=this.scopesMap.get(e);return n||(n=P(t),n.scopeId=e,n.isScoped=r,this.scopesMap.set(e,n)),n},t}(),nt=window;function st(){return!(nt.CSS&&nt.CSS.supports&&nt.CSS.supports("color","var(--c)"))}!nt.__stencil_cssshim&&st()&&(nt.__stencil_cssshim=new rt(nt,document))}}]);
//# sourceMappingURL=chunk-2d0b5965.f16e5366.js.map