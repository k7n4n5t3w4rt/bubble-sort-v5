(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))n(r);new MutationObserver(r=>{for(const s of r)if(s.type==="childList")for(const o of s.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&n(o)}).observe(document,{childList:!0,subtree:!0});function t(r){const s={};return r.integrity&&(s.integrity=r.integrity),r.referrerPolicy&&(s.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?s.credentials="include":r.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function n(r){if(r.ep)return;r.ep=!0;const s=t(r);fetch(r.href,s)}})();var vr,Ye,du,On,cl,pu,mu,gu,_a,Ho,Go,_u,lr={},vu=[],xf=/acit|ex(?:s|g|n|p|$)|rph|grid|ows|mnc|ntw|ine[ch]|zoo|^ord|itera/i,xr=Array.isArray;function $t(i,e){for(var t in e)i[t]=e[t];return i}function va(i){i&&i.parentNode&&i.parentNode.removeChild(i)}function Es(i,e,t){var n,r,s,o={};for(s in e)s=="key"?n=e[s]:s=="ref"?r=e[s]:o[s]=e[s];if(arguments.length>2&&(o.children=arguments.length>3?vr.call(arguments,2):t),typeof i=="function"&&i.defaultProps!=null)for(s in i.defaultProps)o[s]===void 0&&(o[s]=i.defaultProps[s]);return tr(i,o,n,r,null)}function tr(i,e,t,n,r){var s={type:i,props:e,key:t,ref:n,__k:null,__:null,__b:0,__e:null,__c:null,constructor:void 0,__v:r??++du,__i:-1,__u:0};return r==null&&Ye.vnode!=null&&Ye.vnode(s),s}function As(i){return i.children}function nr(i,e){this.props=i,this.context=e}function wi(i,e){if(e==null)return i.__?wi(i.__,i.__i+1):null;for(var t;e<i.__k.length;e++)if((t=i.__k[e])!=null&&t.__e!=null)return t.__e;return typeof i.type=="function"?wi(i):null}function xu(i){var e,t;if((i=i.__)!=null&&i.__c!=null){for(i.__e=i.__c.base=null,e=0;e<i.__k.length;e++)if((t=i.__k[e])!=null&&t.__e!=null){i.__e=i.__c.base=t.__e;break}return xu(i)}}function Vo(i){(!i.__d&&(i.__d=!0)&&On.push(i)&&!fs.__r++||cl!=Ye.debounceRendering)&&((cl=Ye.debounceRendering)||pu)(fs)}function fs(){for(var i,e,t,n,r,s,o,a=1;On.length;)On.length>a&&On.sort(mu),i=On.shift(),a=On.length,i.__d&&(t=void 0,r=(n=(e=i).__v).__e,s=[],o=[],e.__P&&((t=$t({},n)).__v=n.__v+1,Ye.vnode&&Ye.vnode(t),xa(e.__P,t,n,e.__n,e.__P.namespaceURI,32&n.__u?[r]:null,s,r??wi(n),!!(32&n.__u),o),t.__v=n.__v,t.__.__k[t.__i]=t,bu(s,t,o),t.__e!=r&&xu(t)));fs.__r=0}function yu(i,e,t,n,r,s,o,a,l,c,h){var u,f,d,g,_,v,p=n&&n.__k||vu,m=e.length;for(l=yf(t,e,p,l,m),u=0;u<m;u++)(d=t.__k[u])!=null&&(f=d.__i==-1?lr:p[d.__i]||lr,d.__i=u,v=xa(i,d,f,r,s,o,a,l,c,h),g=d.__e,d.ref&&f.ref!=d.ref&&(f.ref&&ya(f.ref,null,d),h.push(d.ref,d.__c||g,d)),_==null&&g!=null&&(_=g),4&d.__u||f.__k===d.__k?l=Mu(d,l,i):typeof d.type=="function"&&v!==void 0?l=v:g&&(l=g.nextSibling),d.__u&=-7);return t.__e=_,l}function yf(i,e,t,n,r){var s,o,a,l,c,h=t.length,u=h,f=0;for(i.__k=new Array(r),s=0;s<r;s++)(o=e[s])!=null&&typeof o!="boolean"&&typeof o!="function"?(l=s+f,(o=i.__k[s]=typeof o=="string"||typeof o=="number"||typeof o=="bigint"||o.constructor==String?tr(null,o,null,null,null):xr(o)?tr(As,{children:o},null,null,null):o.constructor==null&&o.__b>0?tr(o.type,o.props,o.key,o.ref?o.ref:null,o.__v):o).__=i,o.__b=i.__b+1,a=null,(c=o.__i=Mf(o,t,l,u))!=-1&&(u--,(a=t[c])&&(a.__u|=2)),a==null||a.__v==null?(c==-1&&(r>h?f--:r<h&&f++),typeof o.type!="function"&&(o.__u|=4)):c!=l&&(c==l-1?f--:c==l+1?f++:(c>l?f--:f++,o.__u|=4))):i.__k[s]=null;if(u)for(s=0;s<h;s++)(a=t[s])!=null&&!(2&a.__u)&&(a.__e==n&&(n=wi(a)),Su(a,a));return n}function Mu(i,e,t){var n,r;if(typeof i.type=="function"){for(n=i.__k,r=0;n&&r<n.length;r++)n[r]&&(n[r].__=i,e=Mu(n[r],e,t));return e}i.__e!=e&&(e&&i.type&&!t.contains(e)&&(e=wi(i)),t.insertBefore(i.__e,e||null),e=i.__e);do e=e&&e.nextSibling;while(e!=null&&e.nodeType==8);return e}function Wo(i,e){return e=e||[],i==null||typeof i=="boolean"||(xr(i)?i.some(function(t){Wo(t,e)}):e.push(i)),e}function Mf(i,e,t,n){var r,s,o=i.key,a=i.type,l=e[t];if(l===null&&i.key==null||l&&o==l.key&&a==l.type&&!(2&l.__u))return t;if(n>(l!=null&&!(2&l.__u)?1:0))for(r=t-1,s=t+1;r>=0||s<e.length;){if(r>=0){if((l=e[r])&&!(2&l.__u)&&o==l.key&&a==l.type)return r;r--}if(s<e.length){if((l=e[s])&&!(2&l.__u)&&o==l.key&&a==l.type)return s;s++}}return-1}function ul(i,e,t){e[0]=="-"?i.setProperty(e,t??""):i[e]=t==null?"":typeof t!="number"||xf.test(e)?t:t+"px"}function Rr(i,e,t,n,r){var s,o;e:if(e=="style")if(typeof t=="string")i.style.cssText=t;else{if(typeof n=="string"&&(i.style.cssText=n=""),n)for(e in n)t&&e in t||ul(i.style,e,"");if(t)for(e in t)n&&t[e]==n[e]||ul(i.style,e,t[e])}else if(e[0]=="o"&&e[1]=="n")s=e!=(e=e.replace(gu,"$1")),o=e.toLowerCase(),e=o in i||e=="onFocusOut"||e=="onFocusIn"?o.slice(2):e.slice(2),i.l||(i.l={}),i.l[e+s]=t,t?n?t.u=n.u:(t.u=_a,i.addEventListener(e,s?Go:Ho,s)):i.removeEventListener(e,s?Go:Ho,s);else{if(r=="http://www.w3.org/2000/svg")e=e.replace(/xlink(H|:h)/,"h").replace(/sName$/,"s");else if(e!="width"&&e!="height"&&e!="href"&&e!="list"&&e!="form"&&e!="tabIndex"&&e!="download"&&e!="rowSpan"&&e!="colSpan"&&e!="role"&&e!="popover"&&e in i)try{i[e]=t??"";break e}catch{}typeof t=="function"||(t==null||t===!1&&e[4]!="-"?i.removeAttribute(e):i.setAttribute(e,e=="popover"&&t==1?"":t))}}function hl(i){return function(e){if(this.l){var t=this.l[e.type+i];if(e.t==null)e.t=_a++;else if(e.t<t.u)return;return t(Ye.event?Ye.event(e):e)}}}function xa(i,e,t,n,r,s,o,a,l,c){var h,u,f,d,g,_,v,p,m,y,x,M,R,D,O,j,k,P=e.type;if(e.constructor!=null)return null;128&t.__u&&(l=!!(32&t.__u),s=[a=e.__e=t.__e]),(h=Ye.__b)&&h(e);e:if(typeof P=="function")try{if(p=e.props,m="prototype"in P&&P.prototype.render,y=(h=P.contextType)&&n[h.__c],x=h?y?y.props.value:h.__:n,t.__c?v=(u=e.__c=t.__c).__=u.__E:(m?e.__c=u=new P(p,x):(e.__c=u=new nr(p,x),u.constructor=P,u.render=wf),y&&y.sub(u),u.props=p,u.state||(u.state={}),u.context=x,u.__n=n,f=u.__d=!0,u.__h=[],u._sb=[]),m&&u.__s==null&&(u.__s=u.state),m&&P.getDerivedStateFromProps!=null&&(u.__s==u.state&&(u.__s=$t({},u.__s)),$t(u.__s,P.getDerivedStateFromProps(p,u.__s))),d=u.props,g=u.state,u.__v=e,f)m&&P.getDerivedStateFromProps==null&&u.componentWillMount!=null&&u.componentWillMount(),m&&u.componentDidMount!=null&&u.__h.push(u.componentDidMount);else{if(m&&P.getDerivedStateFromProps==null&&p!==d&&u.componentWillReceiveProps!=null&&u.componentWillReceiveProps(p,x),!u.__e&&u.shouldComponentUpdate!=null&&u.shouldComponentUpdate(p,u.__s,x)===!1||e.__v==t.__v){for(e.__v!=t.__v&&(u.props=p,u.state=u.__s,u.__d=!1),e.__e=t.__e,e.__k=t.__k,e.__k.some(function(w){w&&(w.__=e)}),M=0;M<u._sb.length;M++)u.__h.push(u._sb[M]);u._sb=[],u.__h.length&&o.push(u);break e}u.componentWillUpdate!=null&&u.componentWillUpdate(p,u.__s,x),m&&u.componentDidUpdate!=null&&u.__h.push(function(){u.componentDidUpdate(d,g,_)})}if(u.context=x,u.props=p,u.__P=i,u.__e=!1,R=Ye.__r,D=0,m){for(u.state=u.__s,u.__d=!1,R&&R(e),h=u.render(u.props,u.state,u.context),O=0;O<u._sb.length;O++)u.__h.push(u._sb[O]);u._sb=[]}else do u.__d=!1,R&&R(e),h=u.render(u.props,u.state,u.context),u.state=u.__s;while(u.__d&&++D<25);u.state=u.__s,u.getChildContext!=null&&(n=$t($t({},n),u.getChildContext())),m&&!f&&u.getSnapshotBeforeUpdate!=null&&(_=u.getSnapshotBeforeUpdate(d,g)),j=h,h!=null&&h.type===As&&h.key==null&&(j=wu(h.props.children)),a=yu(i,xr(j)?j:[j],e,t,n,r,s,o,a,l,c),u.base=e.__e,e.__u&=-161,u.__h.length&&o.push(u),v&&(u.__E=u.__=null)}catch(w){if(e.__v=null,l||s!=null)if(w.then){for(e.__u|=l?160:128;a&&a.nodeType==8&&a.nextSibling;)a=a.nextSibling;s[s.indexOf(a)]=null,e.__e=a}else for(k=s.length;k--;)va(s[k]);else e.__e=t.__e,e.__k=t.__k;Ye.__e(w,e,t)}else s==null&&e.__v==t.__v?(e.__k=t.__k,e.__e=t.__e):a=e.__e=bf(t.__e,e,t,n,r,s,o,l,c);return(h=Ye.diffed)&&h(e),128&e.__u?void 0:a}function bu(i,e,t){for(var n=0;n<t.length;n++)ya(t[n],t[++n],t[++n]);Ye.__c&&Ye.__c(e,i),i.some(function(r){try{i=r.__h,r.__h=[],i.some(function(s){s.call(r)})}catch(s){Ye.__e(s,r.__v)}})}function wu(i){return typeof i!="object"||i==null||i.__b&&i.__b>0?i:xr(i)?i.map(wu):$t({},i)}function bf(i,e,t,n,r,s,o,a,l){var c,h,u,f,d,g,_,v=t.props,p=e.props,m=e.type;if(m=="svg"?r="http://www.w3.org/2000/svg":m=="math"?r="http://www.w3.org/1998/Math/MathML":r||(r="http://www.w3.org/1999/xhtml"),s!=null){for(c=0;c<s.length;c++)if((d=s[c])&&"setAttribute"in d==!!m&&(m?d.localName==m:d.nodeType==3)){i=d,s[c]=null;break}}if(i==null){if(m==null)return document.createTextNode(p);i=document.createElementNS(r,m,p.is&&p),a&&(Ye.__m&&Ye.__m(e,s),a=!1),s=null}if(m==null)v===p||a&&i.data==p||(i.data=p);else{if(s=s&&vr.call(i.childNodes),v=t.props||lr,!a&&s!=null)for(v={},c=0;c<i.attributes.length;c++)v[(d=i.attributes[c]).name]=d.value;for(c in v)if(d=v[c],c!="children"){if(c=="dangerouslySetInnerHTML")u=d;else if(!(c in p)){if(c=="value"&&"defaultValue"in p||c=="checked"&&"defaultChecked"in p)continue;Rr(i,c,null,d,r)}}for(c in p)d=p[c],c=="children"?f=d:c=="dangerouslySetInnerHTML"?h=d:c=="value"?g=d:c=="checked"?_=d:a&&typeof d!="function"||v[c]===d||Rr(i,c,d,v[c],r);if(h)a||u&&(h.__html==u.__html||h.__html==i.innerHTML)||(i.innerHTML=h.__html),e.__k=[];else if(u&&(i.innerHTML=""),yu(e.type=="template"?i.content:i,xr(f)?f:[f],e,t,n,m=="foreignObject"?"http://www.w3.org/1999/xhtml":r,s,o,s?s[0]:t.__k&&wi(t,0),a,l),s!=null)for(c=s.length;c--;)va(s[c]);a||(c="value",m=="progress"&&g==null?i.removeAttribute("value"):g!=null&&(g!==i[c]||m=="progress"&&!g||m=="option"&&g!=v[c])&&Rr(i,c,g,v[c],r),c="checked",_!=null&&_!=i[c]&&Rr(i,c,_,v[c],r))}return i}function ya(i,e,t){try{if(typeof i=="function"){var n=typeof i.__u=="function";n&&i.__u(),n&&e==null||(i.__u=i(e))}else i.current=e}catch(r){Ye.__e(r,t)}}function Su(i,e,t){var n,r;if(Ye.unmount&&Ye.unmount(i),(n=i.ref)&&(n.current&&n.current!=i.__e||ya(n,null,e)),(n=i.__c)!=null){if(n.componentWillUnmount)try{n.componentWillUnmount()}catch(s){Ye.__e(s,e)}n.base=n.__P=null}if(n=i.__k)for(r=0;r<n.length;r++)n[r]&&Su(n[r],e,t||typeof i.type!="function");t||va(i.__e),i.__c=i.__=i.__e=void 0}function wf(i,e,t){return this.constructor(i,t)}function Sf(i,e,t){var n,r,s,o;e==document&&(e=document.documentElement),Ye.__&&Ye.__(i,e),r=(n=!1)?null:e.__k,s=[],o=[],xa(e,i=e.__k=Es(As,null,[i]),r||lr,lr,e.namespaceURI,r?null:e.firstChild?vr.call(e.childNodes):null,s,r?r.__e:e.firstChild,n,o),bu(s,i,o)}function Tf(i,e,t){var n,r,s,o,a=$t({},i.props);for(s in i.type&&i.type.defaultProps&&(o=i.type.defaultProps),e)s=="key"?n=e[s]:s=="ref"?r=e[s]:a[s]=e[s]===void 0&&o!=null?o[s]:e[s];return arguments.length>2&&(a.children=arguments.length>3?vr.call(arguments,2):t),tr(i.type,a,n||i.key,r||i.ref,null)}function Ef(i){function e(t){var n,r;return this.getChildContext||(n=new Set,(r={})[e.__c]=this,this.getChildContext=function(){return r},this.componentWillUnmount=function(){n=null},this.shouldComponentUpdate=function(s){this.props.value!=s.value&&n.forEach(function(o){o.__e=!0,Vo(o)})},this.sub=function(s){n.add(s);var o=s.componentWillUnmount;s.componentWillUnmount=function(){n&&n.delete(s),o&&o.call(s)}}),t.children}return e.__c="__cC"+_u++,e.__=i,e.Provider=e.__l=(e.Consumer=function(t,n){return t.children(n)}).contextType=e,e}vr=vu.slice,Ye={__e:function(i,e,t,n){for(var r,s,o;e=e.__;)if((r=e.__c)&&!r.__)try{if((s=r.constructor)&&s.getDerivedStateFromError!=null&&(r.setState(s.getDerivedStateFromError(i)),o=r.__d),r.componentDidCatch!=null&&(r.componentDidCatch(i,n||{}),o=r.__d),o)return r.__E=r}catch(a){i=a}throw i}},du=0,nr.prototype.setState=function(i,e){var t;t=this.__s!=null&&this.__s!=this.state?this.__s:this.__s=$t({},this.state),typeof i=="function"&&(i=i($t({},t),this.props)),i&&$t(t,i),i!=null&&this.__v&&(e&&this._sb.push(e),Vo(this))},nr.prototype.forceUpdate=function(i){this.__v&&(this.__e=!0,i&&this.__h.push(i),Vo(this))},nr.prototype.render=As,On=[],pu=typeof Promise=="function"?Promise.prototype.then.bind(Promise.resolve()):setTimeout,mu=function(i,e){return i.__v.__b-e.__v.__b},fs.__r=0,gu=/(PointerCapture)$|Capture$/i,_a=0,Ho=hl(!1),Go=hl(!0),_u=0;var Tu=function(i,e,t,n){var r;e[0]=0;for(var s=1;s<e.length;s++){var o=e[s++],a=e[s]?(e[0]|=o?1:2,t[e[s++]]):e[++s];o===3?n[0]=a:o===4?n[1]=Object.assign(n[1]||{},a):o===5?(n[1]=n[1]||{})[e[++s]]=a:o===6?n[1][e[++s]]+=a+"":o?(r=i.apply(a,Tu(i,a,t,["",null])),n.push(r),a[0]?e[0]|=2:(e[s-2]=0,e[s]=r)):n.push(a)}return n},fl=new Map;function Af(i){var e=fl.get(this);return e||(e=new Map,fl.set(this,e)),(e=Tu(this,e.get(i)||(e.set(i,e=function(t){for(var n,r,s=1,o="",a="",l=[0],c=function(f){s===1&&(f||(o=o.replace(/^\s*\n\s*|\s*\n\s*$/g,"")))?l.push(0,f,o):s===3&&(f||o)?(l.push(3,f,o),s=2):s===2&&o==="..."&&f?l.push(4,f,0):s===2&&o&&!f?l.push(5,0,!0,o):s>=5&&((o||!f&&s===5)&&(l.push(s,0,o,r),s=6),f&&(l.push(s,f,0,r),s=6)),o=""},h=0;h<t.length;h++){h&&(s===1&&c(),c(h));for(var u=0;u<t[h].length;u++)n=t[h][u],s===1?n==="<"?(c(),l=[l],s=3):o+=n:s===4?o==="--"&&n===">"?(s=1,o=""):o=n+o[0]:a?n===a?a="":o+=n:n==='"'||n==="'"?a=n:n===">"?(c(),s=1):s&&(n==="="?(s=5,r=o,o=""):n==="/"&&(s<5||t[h][u+1]===">")?(c(),s===3&&(l=l[0]),s=l,(l=l[0]).push(2,0,s),s=0):n===" "||n==="	"||n===`
`||n==="\r"?(c(),s=2):o+=n),s===3&&o==="!--"&&(s=4,l=l[0])}return c(),l}(i)),e),arguments,[])).length>1?e:e[0]}var Si=Af.bind(Es),Cf={};function Eu(i,e){for(var t in e)i[t]=e[t];return i}function Au(i,e,t){var n=/(?:\?([^#]*))?(#.*)?$/,r=i.match(n),s={},o;if(r&&r[1])for(var a=r[1].split("&"),l=0;l<a.length;l++){var c=a[l].split("=");s[decodeURIComponent(c[0])]=decodeURIComponent(c.slice(1).join("="))}i=qo(i.replace(n,"")),e=qo(e||"");for(var h=Math.max(i.length,e.length),u=0;u<h;u++)if(e[u]&&e[u].charAt(0)===":"){var f=e[u].replace(/(^:|[+*?]+$)/g,""),d=(e[u].match(/[+*?]+$/)||Cf)[0]||"",g=~d.indexOf("+"),_=~d.indexOf("*"),v=i[u]||"";if(!v&&!_&&(d.indexOf("?")<0||g)){o=!1;break}if(s[f]=decodeURIComponent(v),g||_){s[f]=i.slice(u).map(decodeURIComponent).join("/");break}}else if(e[u]!==i[u]){o=!1;break}return t.default!==!0&&o===!1?!1:s}function Lf(i,e){return i.rank<e.rank?1:i.rank>e.rank?-1:i.index-e.index}function Rf(i,e){return i.index=e,i.rank=Df(i),i.props}function qo(i){return i.replace(/(^\/+|\/+$)/g,"").split("/")}function Pf(i){return i.charAt(0)==":"?1+"*+?".indexOf(i.charAt(i.length-1))||4:5}function If(i){return qo(i).map(Pf).join("")}function Df(i){return i.props.default?0:If(i.props.path)}var At=null,kn=[],Xo=[],Nf={};function Ff(i,e){e===void 0&&(e="push"),At&&At[e]?At[e](i):typeof history<"u"&&history[e+"State"]&&history[e+"State"](null,null,i)}function Ma(){var i;return At&&At.location?i=At.location:At&&At.getCurrentLocation?i=At.getCurrentLocation():i=typeof location<"u"?location:Nf,""+(i.pathname||"")+(i.search||"")}function Cu(i,e){return e===void 0&&(e=!1),typeof i!="string"&&i.url&&(e=i.replace,i=i.url),zf(i)&&Ff(i,e?"replace":"push"),Lu(i)}function zf(i){for(var e=kn.length;e--;)if(kn[e].canRoute(i))return!0;return!1}function Lu(i){for(var e=!1,t=0;t<kn.length;t++)kn[t].routeTo(i)===!0&&(e=!0);for(var n=Xo.length;n--;)Xo[n](i);return e}function Ru(i){if(!(!i||!i.getAttribute)){var e=i.getAttribute("href"),t=i.getAttribute("target");if(!(!e||!e.match(/^\//g)||t&&!t.match(/^_?self$/i)))return Cu(e)}}function Bf(i){if(!(i.ctrlKey||i.metaKey||i.altKey||i.shiftKey||i.button!==0))return Ru(i.currentTarget||i.target||this),Pu(i)}function Pu(i){return i&&(i.stopImmediatePropagation&&i.stopImmediatePropagation(),i.stopPropagation&&i.stopPropagation(),i.preventDefault()),!1}function Of(i){if(!(i.ctrlKey||i.metaKey||i.altKey||i.shiftKey||i.button!==0)){var e=i.target;do if(String(e.nodeName).toUpperCase()==="A"&&e.getAttribute("href")){if(e.hasAttribute("native"))return;if(Ru(e))return Pu(i)}while(e=e.parentNode)}}var dl=!1;function kf(){dl||(typeof addEventListener=="function"&&(At||addEventListener("popstate",function(){Lu(Ma())}),addEventListener("click",Of)),dl=!0)}var Kt=function(i){function e(t){i.call(this,t),t.history&&(At=t.history),this.state={url:t.url||Ma()},kf()}return i&&(e.__proto__=i),e.prototype=Object.create(i&&i.prototype),e.prototype.constructor=e,e.prototype.shouldComponentUpdate=function(n){return n.static!==!0?!0:n.url!==this.props.url||n.onChange!==this.props.onChange},e.prototype.canRoute=function(n){var r=Wo(this.props.children);return this.getMatchingChildren(r,n,!1).length>0},e.prototype.routeTo=function(n){this.setState({url:n});var r=this.canRoute(n);return this.updating||this.forceUpdate(),r},e.prototype.componentWillMount=function(){kn.push(this),this.updating=!0},e.prototype.componentDidMount=function(){var n=this;At&&(this.unlisten=At.listen(function(r){n.routeTo(""+(r.pathname||"")+(r.search||""))})),this.updating=!1},e.prototype.componentWillUnmount=function(){typeof this.unlisten=="function"&&this.unlisten(),kn.splice(kn.indexOf(this),1)},e.prototype.componentWillUpdate=function(){this.updating=!0},e.prototype.componentDidUpdate=function(){this.updating=!1},e.prototype.getMatchingChildren=function(n,r,s){return n.filter(Rf).sort(Lf).map(function(o){var a=Au(r,o.props.path,o.props);if(a){if(s!==!1){var l={url:r,matches:a};return Eu(l,a),delete l.ref,delete l.key,Tf(o,l)}return o}}).filter(Boolean)},e.prototype.render=function(n,r){var s=n.children,o=n.onChange,a=r.url,l=this.getMatchingChildren(Wo(s),a,!0),c=l[0]||null,h=this.previousUrl;return a!==h&&(this.previousUrl=a,typeof o=="function"&&o({router:this,url:a,previous:h,active:l,current:c})),c},e}(nr),Uf=function(i){return Es("a",Eu({onClick:Bf},i))},Hf=function(i){return Es(i.component,i)};Kt.subscribers=Xo;Kt.getCurrentUrl=Ma;Kt.route=Cu;Kt.Router=Kt;Kt.Route=Hf;Kt.Link=Uf;Kt.exec=Au;let Yo=!1;(typeof process>"u"||process.release.name!=="node")&&(Yo=window.REMEMBER_ME??Yo);const Cs={REMEMBER_ME:Yo};var ds,et,$s,pl,ml=0,Iu=[],nt=Ye,gl=nt.__b,_l=nt.__r,vl=nt.diffed,xl=nt.__c,yl=nt.unmount,Ml=nt.__;function Du(i,e){nt.__h&&nt.__h(et,i,ml||e),ml=0;var t=et.__H||(et.__H={__:[],__h:[]});return i>=t.__.length&&t.__.push({}),t.__[i]}function Nu(i,e,t){var n=Du(ds++,2);if(n.t=i,!n.__c&&(n.__=[qf(void 0,e),function(a){var l=n.__N?n.__N[0]:n.__[0],c=n.t(l,a);l!==c&&(n.__N=[c,n.__[1]],n.__c.setState({}))}],n.__c=et,!et.__f)){var r=function(a,l,c){if(!n.__c.__H)return!0;var h=n.__c.__H.__.filter(function(f){return!!f.__c});if(h.every(function(f){return!f.__N}))return!s||s.call(this,a,l,c);var u=n.__c.props!==a;return h.forEach(function(f){if(f.__N){var d=f.__[0];f.__=f.__N,f.__N=void 0,d!==f.__[0]&&(u=!0)}}),s&&s.call(this,a,l,c)||u};et.__f=!0;var s=et.shouldComponentUpdate,o=et.componentWillUpdate;et.componentWillUpdate=function(a,l,c){if(this.__e){var h=s;s=void 0,r(a,l,c),s=h}o&&o.call(this,a,l,c)},et.shouldComponentUpdate=r}return n.__N||n.__}function Fu(i,e){var t=Du(ds++,3);!nt.__s&&Wf(t.__H,e)&&(t.__=i,t.u=e,et.__H.__h.push(t))}function Gf(){for(var i;i=Iu.shift();)if(i.__P&&i.__H)try{i.__H.__h.forEach(us),i.__H.__h.forEach(jo),i.__H.__h=[]}catch(e){i.__H.__h=[],nt.__e(e,i.__v)}}nt.__b=function(i){et=null,gl&&gl(i)},nt.__=function(i,e){i&&e.__k&&e.__k.__m&&(i.__m=e.__k.__m),Ml&&Ml(i,e)},nt.__r=function(i){_l&&_l(i),ds=0;var e=(et=i.__c).__H;e&&($s===et?(e.__h=[],et.__h=[],e.__.forEach(function(t){t.__N&&(t.__=t.__N),t.u=t.__N=void 0})):(e.__h.forEach(us),e.__h.forEach(jo),e.__h=[],ds=0)),$s=et},nt.diffed=function(i){vl&&vl(i);var e=i.__c;e&&e.__H&&(e.__H.__h.length&&(Iu.push(e)!==1&&pl===nt.requestAnimationFrame||((pl=nt.requestAnimationFrame)||Vf)(Gf)),e.__H.__.forEach(function(t){t.u&&(t.__H=t.u),t.u=void 0})),$s=et=null},nt.__c=function(i,e){e.some(function(t){try{t.__h.forEach(us),t.__h=t.__h.filter(function(n){return!n.__||jo(n)})}catch(n){e.some(function(r){r.__h&&(r.__h=[])}),e=[],nt.__e(n,t.__v)}}),xl&&xl(i,e)},nt.unmount=function(i){yl&&yl(i);var e,t=i.__c;t&&t.__H&&(t.__H.__.forEach(function(n){try{us(n)}catch(r){e=r}}),t.__H=void 0,e&&nt.__e(e,t.__v))};var bl=typeof requestAnimationFrame=="function";function Vf(i){var e,t=function(){clearTimeout(n),bl&&cancelAnimationFrame(e),setTimeout(i)},n=setTimeout(t,35);bl&&(e=requestAnimationFrame(t))}function us(i){var e=et,t=i.__c;typeof t=="function"&&(i.__c=void 0,t()),et=e}function jo(i){var e=et;i.__c=i.__(),et=e}function Wf(i,e){return!i||i.length!==e.length||e.some(function(t,n){return t!==i[n]})}function qf(i,e){return typeof e=="function"?e(i):e}var zu=Symbol.for("immer-nothing"),wl=Symbol.for("immer-draftable"),Lt=Symbol.for("immer-state");function kt(i,...e){throw new Error(`[Immer] minified error nr: ${i}. Full error at: https://bit.ly/3cXEKWf`)}var Ti=Object.getPrototypeOf;function Ei(i){return!!i&&!!i[Lt]}function Wn(i){var e;return i?Bu(i)||Array.isArray(i)||!!i[wl]||!!((e=i.constructor)!=null&&e[wl])||Rs(i)||Ps(i):!1}var Xf=Object.prototype.constructor.toString();function Bu(i){if(!i||typeof i!="object")return!1;const e=Ti(i);if(e===null)return!0;const t=Object.hasOwnProperty.call(e,"constructor")&&e.constructor;return t===Object?!0:typeof t=="function"&&Function.toString.call(t)===Xf}function ps(i,e){Ls(i)===0?Reflect.ownKeys(i).forEach(t=>{e(t,i[t],i)}):i.forEach((t,n)=>e(n,t,i))}function Ls(i){const e=i[Lt];return e?e.type_:Array.isArray(i)?1:Rs(i)?2:Ps(i)?3:0}function $o(i,e){return Ls(i)===2?i.has(e):Object.prototype.hasOwnProperty.call(i,e)}function Ou(i,e,t){const n=Ls(i);n===2?i.set(e,t):n===3?i.add(t):i[e]=t}function Yf(i,e){return i===e?i!==0||1/i===1/e:i!==i&&e!==e}function Rs(i){return i instanceof Map}function Ps(i){return i instanceof Set}function zn(i){return i.copy_||i.base_}function Zo(i,e){if(Rs(i))return new Map(i);if(Ps(i))return new Set(i);if(Array.isArray(i))return Array.prototype.slice.call(i);const t=Bu(i);if(e===!0||e==="class_only"&&!t){const n=Object.getOwnPropertyDescriptors(i);delete n[Lt];let r=Reflect.ownKeys(n);for(let s=0;s<r.length;s++){const o=r[s],a=n[o];a.writable===!1&&(a.writable=!0,a.configurable=!0),(a.get||a.set)&&(n[o]={configurable:!0,writable:!0,enumerable:a.enumerable,value:i[o]})}return Object.create(Ti(i),n)}else{const n=Ti(i);if(n!==null&&t)return{...i};const r=Object.create(n);return Object.assign(r,i)}}function ba(i,e=!1){return Is(i)||Ei(i)||!Wn(i)||(Ls(i)>1&&(i.set=i.add=i.clear=i.delete=jf),Object.freeze(i),e&&Object.entries(i).forEach(([t,n])=>ba(n,!0))),i}function jf(){kt(2)}function Is(i){return Object.isFrozen(i)}var $f={};function qn(i){const e=$f[i];return e||kt(0,i),e}var cr;function ku(){return cr}function Zf(i,e){return{drafts_:[],parent_:i,immer_:e,canAutoFreeze_:!0,unfinalizedDrafts_:0}}function Sl(i,e){e&&(qn("Patches"),i.patches_=[],i.inversePatches_=[],i.patchListener_=e)}function Jo(i){Qo(i),i.drafts_.forEach(Jf),i.drafts_=null}function Qo(i){i===cr&&(cr=i.parent_)}function Tl(i){return cr=Zf(cr,i)}function Jf(i){const e=i[Lt];e.type_===0||e.type_===1?e.revoke_():e.revoked_=!0}function El(i,e){e.unfinalizedDrafts_=e.drafts_.length;const t=e.drafts_[0];return i!==void 0&&i!==t?(t[Lt].modified_&&(Jo(e),kt(4)),Wn(i)&&(i=ms(e,i),e.parent_||gs(e,i)),e.patches_&&qn("Patches").generateReplacementPatches_(t[Lt].base_,i,e.patches_,e.inversePatches_)):i=ms(e,t,[]),Jo(e),e.patches_&&e.patchListener_(e.patches_,e.inversePatches_),i!==zu?i:void 0}function ms(i,e,t){if(Is(e))return e;const n=e[Lt];if(!n)return ps(e,(r,s)=>Al(i,n,e,r,s,t)),e;if(n.scope_!==i)return e;if(!n.modified_)return gs(i,n.base_,!0),n.base_;if(!n.finalized_){n.finalized_=!0,n.scope_.unfinalizedDrafts_--;const r=n.copy_;let s=r,o=!1;n.type_===3&&(s=new Set(r),r.clear(),o=!0),ps(s,(a,l)=>Al(i,n,r,a,l,t,o)),gs(i,r,!1),t&&i.patches_&&qn("Patches").generatePatches_(n,t,i.patches_,i.inversePatches_)}return n.copy_}function Al(i,e,t,n,r,s,o){if(Ei(r)){const a=s&&e&&e.type_!==3&&!$o(e.assigned_,n)?s.concat(n):void 0,l=ms(i,r,a);if(Ou(t,n,l),Ei(l))i.canAutoFreeze_=!1;else return}else o&&t.add(r);if(Wn(r)&&!Is(r)){if(!i.immer_.autoFreeze_&&i.unfinalizedDrafts_<1)return;ms(i,r),(!e||!e.scope_.parent_)&&typeof n!="symbol"&&Object.prototype.propertyIsEnumerable.call(t,n)&&gs(i,r)}}function gs(i,e,t=!1){!i.parent_&&i.immer_.autoFreeze_&&i.canAutoFreeze_&&ba(e,t)}function Qf(i,e){const t=Array.isArray(i),n={type_:t?1:0,scope_:e?e.scope_:ku(),modified_:!1,finalized_:!1,assigned_:{},parent_:e,base_:i,draft_:null,copy_:null,revoke_:null,isManual_:!1};let r=n,s=wa;t&&(r=[n],s=ur);const{revoke:o,proxy:a}=Proxy.revocable(r,s);return n.draft_=a,n.revoke_=o,a}var wa={get(i,e){if(e===Lt)return i;const t=zn(i);if(!$o(t,e))return Kf(i,t,e);const n=t[e];return i.finalized_||!Wn(n)?n:n===Zs(i.base_,e)?(Js(i),i.copy_[e]=ea(n,i)):n},has(i,e){return e in zn(i)},ownKeys(i){return Reflect.ownKeys(zn(i))},set(i,e,t){const n=Uu(zn(i),e);if(n!=null&&n.set)return n.set.call(i.draft_,t),!0;if(!i.modified_){const r=Zs(zn(i),e),s=r==null?void 0:r[Lt];if(s&&s.base_===t)return i.copy_[e]=t,i.assigned_[e]=!1,!0;if(Yf(t,r)&&(t!==void 0||$o(i.base_,e)))return!0;Js(i),Ko(i)}return i.copy_[e]===t&&(t!==void 0||e in i.copy_)||Number.isNaN(t)&&Number.isNaN(i.copy_[e])||(i.copy_[e]=t,i.assigned_[e]=!0),!0},deleteProperty(i,e){return Zs(i.base_,e)!==void 0||e in i.base_?(i.assigned_[e]=!1,Js(i),Ko(i)):delete i.assigned_[e],i.copy_&&delete i.copy_[e],!0},getOwnPropertyDescriptor(i,e){const t=zn(i),n=Reflect.getOwnPropertyDescriptor(t,e);return n&&{writable:!0,configurable:i.type_!==1||e!=="length",enumerable:n.enumerable,value:t[e]}},defineProperty(){kt(11)},getPrototypeOf(i){return Ti(i.base_)},setPrototypeOf(){kt(12)}},ur={};ps(wa,(i,e)=>{ur[i]=function(){return arguments[0]=arguments[0][0],e.apply(this,arguments)}});ur.deleteProperty=function(i,e){return ur.set.call(this,i,e,void 0)};ur.set=function(i,e,t){return wa.set.call(this,i[0],e,t,i[0])};function Zs(i,e){const t=i[Lt];return(t?zn(t):i)[e]}function Kf(i,e,t){var r;const n=Uu(e,t);return n?"value"in n?n.value:(r=n.get)==null?void 0:r.call(i.draft_):void 0}function Uu(i,e){if(!(e in i))return;let t=Ti(i);for(;t;){const n=Object.getOwnPropertyDescriptor(t,e);if(n)return n;t=Ti(t)}}function Ko(i){i.modified_||(i.modified_=!0,i.parent_&&Ko(i.parent_))}function Js(i){i.copy_||(i.copy_=Zo(i.base_,i.scope_.immer_.useStrictShallowCopy_))}var ed=class{constructor(i){this.autoFreeze_=!0,this.useStrictShallowCopy_=!1,this.produce=(e,t,n)=>{if(typeof e=="function"&&typeof t!="function"){const s=t;t=e;const o=this;return function(l=s,...c){return o.produce(l,h=>t.call(this,h,...c))}}typeof t!="function"&&kt(6),n!==void 0&&typeof n!="function"&&kt(7);let r;if(Wn(e)){const s=Tl(this),o=ea(e,void 0);let a=!0;try{r=t(o),a=!1}finally{a?Jo(s):Qo(s)}return Sl(s,n),El(r,s)}else if(!e||typeof e!="object"){if(r=t(e),r===void 0&&(r=e),r===zu&&(r=void 0),this.autoFreeze_&&ba(r,!0),n){const s=[],o=[];qn("Patches").generateReplacementPatches_(e,r,s,o),n(s,o)}return r}else kt(1,e)},this.produceWithPatches=(e,t)=>{if(typeof e=="function")return(o,...a)=>this.produceWithPatches(o,l=>e(l,...a));let n,r;return[this.produce(e,t,(o,a)=>{n=o,r=a}),n,r]},typeof(i==null?void 0:i.autoFreeze)=="boolean"&&this.setAutoFreeze(i.autoFreeze),typeof(i==null?void 0:i.useStrictShallowCopy)=="boolean"&&this.setUseStrictShallowCopy(i.useStrictShallowCopy)}createDraft(i){Wn(i)||kt(8),Ei(i)&&(i=td(i));const e=Tl(this),t=ea(i,void 0);return t[Lt].isManual_=!0,Qo(e),t}finishDraft(i,e){const t=i&&i[Lt];(!t||!t.isManual_)&&kt(9);const{scope_:n}=t;return Sl(n,e),El(void 0,n)}setAutoFreeze(i){this.autoFreeze_=i}setUseStrictShallowCopy(i){this.useStrictShallowCopy_=i}applyPatches(i,e){let t;for(t=e.length-1;t>=0;t--){const r=e[t];if(r.path.length===0&&r.op==="replace"){i=r.value;break}}t>-1&&(e=e.slice(t+1));const n=qn("Patches").applyPatches_;return Ei(i)?n(i,e):this.produce(i,r=>n(r,e))}};function ea(i,e){const t=Rs(i)?qn("MapSet").proxyMap_(i,e):Ps(i)?qn("MapSet").proxySet_(i,e):Qf(i,e);return(e?e.scope_:ku()).drafts_.push(t),t}function td(i){return Ei(i)||kt(10,i),Hu(i)}function Hu(i){if(!Wn(i)||Is(i))return i;const e=i[Lt];let t;if(e){if(!e.modified_)return e.base_;e.finalized_=!0,t=Zo(i,e.scope_.immer_.useStrictShallowCopy_)}else t=Zo(i,!0);return ps(t,(n,r)=>{Ou(t,n,Hu(r))}),e&&(e.finalized_=!1),t}var Rt=new ed,nd=Rt.produce;Rt.produceWithPatches.bind(Rt);Rt.setAutoFreeze.bind(Rt);Rt.setUseStrictShallowCopy.bind(Rt);Rt.applyPatches.bind(Rt);Rt.createDraft.bind(Rt);Rt.finishDraft.bind(Rt);const id=(i,e=Cs.REMEMBER_ME)=>typeof process>"u"||process.release.name!=="node"?typeof e<"u"&&e===!0?localStorage.getItem(i):sessionStorage.getItem(i):"{}",rd=(i,e,t=Cs.REMEMBER_ME)=>{(typeof process>"u"||process.release.name!=="node")&&(typeof t<"u"&&t===!0?(sessionStorage.clear(),localStorage.setItem(i,e)):(localStorage.clear(),sessionStorage.setItem(i,e)))},sd=(i=Cs.REMEMBER_ME)=>{(typeof process>"u"||process.release.name!=="node")&&(typeof i<"u"&&i===!0?localStorage.clear():sessionStorage.clear())},Pr={getItem:id,setItem:rd,clear:sd},Cl=Ef([{},()=>{}]),od=(i,e)=>nd(i,t=>{let n;e.type==="add"&&(n=i.count||e.payload,n++,t.count=n),e.type==="subtract"&&(n=i.count||e.payload,n--,t.count=n),e.type==="reset"&&(t.count=e.payload.count)}),Ll=i=>{const[e,t]=Nu(od,{});if(typeof process>"u"||process.release.name!=="node"){if(JSON.stringify(e)===JSON.stringify({})){let n=Pr.getItem("state",e.rememberme);if(JSON.stringify(e)===JSON.stringify({})&&(typeof n>"u"||n===null)&&(n=Pr.getItem("state",!0)),typeof n<"u"&&n!==null)try{t({type:"reset",payload:JSON.parse(n)})}catch{Pr.clear(e.rememberme)}}JSON.stringify(e)!==JSON.stringify({})&&Pr.setItem("state",JSON.stringify(e),Cs.REMEMBER_ME)}return Si`
      <${Cl.Provider} value=${[e,t]}>
				${i.children}
      </${Cl.Provider}>
  `},Gu=(i="NOT VERY RANDOM")=>parseInt(i.split("").reduce((e,t)=>{const n=t.toLowerCase().charCodeAt(0)-97+1;return e+n.toString()},""));var ad="abcdefghijklmnopqrstuvwxyz".split("");function Qs(i){return ad[i]}var _s=Date.now();function Vu(i){if(i===null){_s=Date.now();return}if(typeof i!="number")throw Error("Unable to setSeed as provided seed was not a valid number");if(i===Number.MAX_SAFE_INTEGER)throw Error("Unable to setSeed because the seed was already the maximum safe JavaScript number allowed");if(i===Number.POSITIVE_INFINITY||i===Number.NEGATIVE_INFINITY)throw new Error("Unable to setSeed. Positive or negative infinity is not allowed");if(i<0)throw new Error("Unable to setSeed. Seed must be a number >= 0");_s=i}var Rl=/(\d{1,2})/g;function ld(){for(var i=[],e=_s.toString(),t=Rl.exec(e);t;)i.push(t[0]),t=Rl.exec(e);var n="_";return i.forEach(function(r){var s=+r;if(s>25){var o=r.split(""),a=o[0],l=o[1];n+=""+Qs(+a)+Qs(+l)}else n+=Qs(s)}),_s+=1,n}function cd(i){return""+i+ld()}var ud=[];function hd(){return ud}function fd(i){return/&/g.test(i)}function dd(i){return i.toLowerCase().startsWith("@media")}function pd(i){return i.replace(/([A-Z])/g,function(e){return"-"+e.toLowerCase()})}function Pl(i){return Object.entries(i).reduce(function(e,t){var n=t[0],r=t[1];return""+e+pd(n)+":"+r+";"},"")}function yi(i,e,t,n){n===void 0&&(n=!1);for(var r={},s="",o="",a=Object.entries(i),l=!1,c=function(){l&&(s+="}"),l=!1},h=function(){var g=f[u],_=g[0],v=g[1];if(dd(_)){if(typeof v!="object")throw new Error("Unable to map @media query because rules / props are an invalid type");c(),o+=_+"{";var p=yi(v,e,t),m=p[1],y=p[2];o+=m,o+="}",o+=y}else if(fd(_)){if(!t)throw new Error("Unable to generate nested rule because parentSelector is missing");c();var x=_.replace(/&/g,t);x.split(/,\s*/).forEach(function(w){var b=yi(v,e,w),F=b[1],I=b[2];s+=F,o+=I})}else if(!t&&typeof v=="object"){c();var M=n?_:cd(_);r[_]=M;var R=(n?"":".")+M,D=yi(v,e,R),O=D[1],j=D[2];s+=O,o+=j}else{var k;if(!t)throw new Error("Unable to write css props because parent selector is null");if(l)s+=Pl((k={},k[_]=v,k));else{var P;s+=t+"{"+Pl((P={},P[_]=v,P)),l=!0}}},u=0,f=a;u<f.length;u++)h();return c(),[r,s,o]}function Il(i,e){for(var t=e,n=[],r=/\$\w([a-zA-Z0-9_-]+)?/gm,s=r.exec(t);s;)n.push(s[0].valueOf()),s=r.exec(t);for(var o=0,a=n;o<a.length;o++){var l=a[o];t=t.replace(l,"."+i[l.substring(1)])}return hd().reduce(function(c,h){return h(c)},t)}function md(i){if(typeof document<"u"&&document.head&&document.head.appendChild&&typeof document.createElement=="function"){var e=document.createElement("style");return e.innerHTML=i,e}return null}function Wu(i,e){var t=md(i);return t&&document.head.appendChild(t),t}function qu(i){return{flush:!0}}function gd(i,e){var t=qu(),n=yi(i,t,null,!0),r=n[1],s=n[2],o=""+r+s;return Wu(o),o}function Xu(i,e){var t=qu(),n=yi(i,t,null),r=n[0],s=n[1],o=n[2],a=""+s+o,l=Il(r,a),c=null,h=function(f){if(c){var d=yi(f,{},null),g=d[0],_=d[1],v=d[2],p=""+_+v,m=Il(r,p);return c.innerHTML=m,[g,m]}return null};return c=Wu(l),[r,l,h]}Vu(Gu("threebubblesortparams"));const _d=[{id:"bitonic",label:"Bitonic",query:"?cols=6&rows=11&speed=5&scalex=1.2&scaley=2.3&scalez=1.9&algorithm=bitonic&diffuseSwapsPerTick=20&diffuseNeighborRadius=1&unsortPauseMs=20000"},{id:"pancake",label:"Pancake",query:"?cols=6&rows=11&speed=5&scalex=6.9&scaley=13.4&scalez=10.9&algorithm=pancake&diffuseSwapsPerTick=10&diffuseNeighborRadius=1&unsortPauseMs=20000"},{id:"oddeven",label:"Odd-Even",query:"?cols=6&rows=13&speed=5&scalex=2.4&scaley=3.9&scalez=3.8&algorithm=oddeven&diffuseSwapsPerTick=10&diffuseNeighborRadius=1&unsortPauseMs=20000"},{id:"insertion",label:"Insertion",query:"?cols=6&rows=11&speed=5&scalex=40.8&scaley=78.5&scalez=64.0&algorithm=insertion&diffuseSwapsPerTick=10&diffuseNeighborRadius=1&unsortPauseMs=20000"},{id:"bubble",label:"Bubble",query:"?cols=7&rows=12&speed=5&scalex=4.2&scaley=8.6&scalez=6.5&algorithm=bubble&diffuseSwapsPerTick=20&diffuseNeighborRadius=1&unsortPauseMs=20000"},{id:"cocktail",label:"Cocktail",query:"?cols=7&rows=12&speed=5&scalex=1.4&scaley=3.0&scalez=2.3&algorithm=cocktail&diffuseSwapsPerTick=10&diffuseNeighborRadius=1&unsortPauseMs=20000"},{id:"binaryinsertion",label:"Binary Insertion",query:"?cols=7&rows=12&speed=5&scalex=2.9&scaley=6.0&scalez=4.6&algorithm=binaryinsertion&diffuseSwapsPerTick=20&diffuseNeighborRadius=1&unsortPauseMs=20000"},{id:"gnome",label:"Gnome",query:"?cols=7&rows=12&speed=5&scalex=8.5&scaley=17.5&scalez=13.3&algorithm=gnome&diffuseSwapsPerTick=20&diffuseNeighborRadius=1&unsortPauseMs=20000"},{id:"heap",label:"Heap",query:"?cols=5&rows=10&speed=5&scalex=69.7&scaley=123.1&scalez=109.4&algorithm=heap&diffuseSwapsPerTick=20&diffuseNeighborRadius=1&unsortPauseMs=20000"},{id:"shell",label:"Shell",query:"?cols=11&rows=22&speed=5&scalex=15.6&scaley=27.6&scalez=24.5&algorithm=shell&diffuseSwapsPerTick=90&diffuseNeighborRadius=1&unsortPauseMs=20000"},{id:"quick",label:"Quick",query:"?cols=11&rows=19&speed=5&scalex=7.7&scaley=15.7&scalez=12.1&algorithm=quick&diffuseSwapsPerTick=70&diffuseNeighborRadius=1&unsortPauseMs=20000"},{id:"comb",label:"Comb",query:"?cols=10&rows=18&speed=5&scalex=70.8&scaley=138.9&scalez=111.1&algorithm=comb&diffuseSwapsPerTick=20&diffuseNeighborRadius=1&unsortPauseMs=20000"},{id:"cycle",label:"Cycle",query:"?cols=20&rows=35&speed=5&scalex=24.8&scaley=50.1&scalez=39.0&algorithm=cycle&diffuseSwapsPerTick=200&diffuseNeighborRadius=2&unsortPauseMs=20000"},{id:"selection",label:"Selection",query:"?cols=19&rows=36&speed=5&scalex=6.3&scaley=11.8&scalez=9.9&algorithm=selection&diffuseSwapsPerTick=20&diffuseNeighborRadius=1&unsortPauseMs=20000"}],[vd]=Xu({paramsContainer:{boxSizing:"border-box",width:"100%",height:"100%",padding:"1rem",paddingTop:"3rem"}});gd({output:{display:"block",float:"left",fontSize:"1rem",padding:"0.2rem",color:"white",fontWeight:"bold",textShadow:"2px 2px 2px grey"},label:{display:"block",float:"left",fontSize:"1rem",padding:"0.2rem",color:"white",fontWeight:"bold",textShadow:"2px 2px 2px grey"},"input[type=text]":{boxSizing:"border-box",backgroundColor:"white",padding:"0.5rem"}});const xd=i=>{const e=i.cols,t=i.rows,n=i.speed,r=i.scaleX,s=i.scaleY,o=i.scaleZ,a=i.algorithm||"bubble",l=i.diffuseSwapsPerTick??0,c=i.diffuseNeighborRadius??1,h=i.unsortPauseMs??1e4,u=i.dispatch;Fu(()=>{});const f=(g,_)=>v=>{g({type:"CHANGE_PARAM",payload:{param:_,value:v.target.value}})},d=g=>{const v=g.target.value;v&&(window.location.search=v)};return Si`
    <div id="params-container" className="${vd.paramsContainer}">
      <fieldset>
        <div>
          <label for="presets">Preset:</label>
          <select id="preset" name="preset" onChange=${d}>
            <option value="">Custom</option>
            ${_d.map(g=>Si`<option value="${g.query}">${g.label}</option>`)}
          </select>
        </div>
        <div>
          <label for="algorithm">Algorithm:</label>
          <select
            id="algorithm"
            name="algorithm"
            value="${a}"
            onChange=${f(u,"algorithm")}
          >
            <option value="bubble">Bubble Sort</option>
            <!-- Added: Pancake Sort option to enable UI selection -->
            <option value="pancake">Pancake Sort</option>
            <!-- Added: Gnome Sort option to enable UI selection -->
            <option value="gnome">Gnome Sort</option>
            <!-- Added: Odd-Even (Brick) Sort option to enable UI selection -->
            <option value="oddeven">Odd-Even Sort</option>
            <!-- Added: Bitonic Sort option to enable UI selection -->
            <option value="bitonic">Bitonic Sort</option>
            <!-- Added: Cocktail Shaker Sort option to enable UI selection -->
            <option value="cocktail">Cocktail Shaker Sort</option>
            <!-- Added: Insertion Sort option to enable UI selection -->
            <option value="insertion">Insertion Sort</option>
            <!-- Added: Binary Insertion Sort option to enable UI selection -->
            <option value="binaryinsertion">Binary Insertion Sort</option>
            <!-- Added: Shell Sort option to enable UI selection -->
            <option value="shell">Shell Sort</option>
            <!-- Added: Heap Sort option to enable UI selection -->
            <option value="heap">Heap Sort</option>
            <!-- Added: Cycle Sort option to enable UI selection -->
            <option value="cycle">Cycle Sort</option>
            <!-- Added: Comb Sort option to enable UI selection -->
            <option value="comb">Comb Sort</option>
            <option value="selection">Selection Sort</option>
            <option value="quick">Quick Sort</option>
          </select>
        </div>
        <div>
          <label for="cols">Columns:</label>
          <output id="colsOutput" name="colsOutput" for="cols"
            >${e.toString()}</output
          >
          <input
            type="range"
            id="cols"
            name="cols"
            min="1"
            max="100"
            step="1"
            value="${e.toString()}"
            onChange=${f(u,"cols")}
          />
        </div>
        <div>
          <label for="rows">Rows:</label>
          <output id="rowsOutput" name="rowsOutput" for="rows"
            >${t.toString()}</output
          >
          <input
            type="range"
            name="rows"
            id="rows"
            min="1"
            max="100"
            step="1"
            onChange=${f(u,"rows")}
            value="${t.toString()}"
          />
        </div>
        <div>
          <label for="speed">Speed:</label>
          <output id="speedOutput" name="speedOutput" for="speed"
            >${n.toString()}</output
          >
          <input
            type="range"
            id="speed"
            name="speed"
            min="1"
            max="10"
            step="1"
            onChange=${f(u,"speed")}
            value="${n.toString()}"
          />
        </div>
        <!-- Removed: diffuseMinMaxMs label and input (hard-coded to 3000ms) -->
        <div>
          <label for="diffuseSwapsPerTick"
            >Unsort swaps-per-tick (0 = auto):</label
          >
          <output
            id="diffuseSwapsPerTickOutput"
            name="diffuseSwapsPerTickOutput"
            for="diffuseSwapsPerTick"
            >${l.toString()}</output
          >
          <input
            type="range"
            id="diffuseSwapsPerTick"
            name="diffuseSwapsPerTick"
            min="0"
            max="2000"
            step="10"
            onChange=${f(u,"diffuseSwapsPerTick")}
            value="${l.toString()}"
          />
        </div>
        <div>
          <label for="diffuseNeighborRadius"
            >Unsort neighbor radius (1 = adjacent):</label
          >
          <output
            id="diffuseNeighborRadiusOutput"
            name="diffuseNeighborRadiusOutput"
            for="diffuseNeighborRadius"
            >${c.toString()}</output
          >
          <input
            type="range"
            id="diffuseNeighborRadius"
            name="diffuseNeighborRadius"
            min="1"
            max="6"
            step="1"
            onChange=${f(u,"diffuseNeighborRadius")}
            value="${c.toString()}"
          />
        </div>
        <div>
          <label for="unsortPauseMs">Pause before unsort (ms):</label>
          <output
            id="unsortPauseMsOutput"
            name="unsortPauseMsOutput"
            for="unsortPauseMs"
            >${h.toString()}</output
          >
          <input
            type="range"
            id="unsortPauseMs"
            name="unsortPauseMs"
            min="0"
            max="60000"
            step="500"
            onChange=${f(u,"unsortPauseMs")}
            value="${h.toString()}"
          />
        </div>
        <div>
          <label for="scaleX">Xcm:</label>
          <output id="scaleXOutput" name="scaleXOutput" for="scaleX"
            >${r.toString()}</output
          >
          <input
            type="range"
            id="scaleX"
            name="scaleX"
            min="1"
            max="100"
            step="1"
            onChange=${f(u,"scaleX")}
            value="${r.toString()}"
          />
        </div>
        <div>
          <label for="scaleY">Ycm:</label>
          <output id="scaleYOutput" name="scaleYOutput" for="scaleY"
            >${s.toString()}</output
          >
          <input
            type="range"
            id="scaleY"
            name="scaleY"
            min="1"
            max="100"
            step="1"
            onChange=${f(u,"scaleY")}
            value="${s.toString()}"
          />
        </div>
        <div>
          <label for="scaleZ">Zcm:</label>
          <output id="scaleZOutput" name="scaleZOutput" for="scaleZ"
            >${o.toString()}</output
          >
          <input
            type="range"
            id="scaleZ"
            name="scaleZ"
            min="1"
            max="100"
            step="1"
            onChange=${f(u,"scaleZ")}
            value="${o.toString()}"
          />
        </div>
      </fieldset>
    </div>
  `},yd=(i,e)=>{switch(e.type){case"CHANGE_PARAM":return{...i,[e.payload.param]:e.payload.value};default:return{...i}}};/**
 * @license
 * Copyright 2010-2021 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const Sa="136",jn={ROTATE:0,DOLLY:1,PAN:2},$n={ROTATE:0,PAN:1,DOLLY_PAN:2,DOLLY_ROTATE:3},Md=0,Dl=1,bd=2,Yu=1,wd=2,Ki=3,hr=0,rt=1,Ai=2,ju=1,bn=0,ir=1,Nl=2,Fl=3,zl=4,Sd=5,mi=100,Td=101,Ed=102,Bl=103,Ol=104,Ad=200,Cd=201,Ld=202,Rd=203,$u=204,Zu=205,Pd=206,Id=207,Dd=208,Nd=209,Fd=210,zd=0,Bd=1,Od=2,ta=3,kd=4,Ud=5,Hd=6,Gd=7,Ds=0,Vd=1,Wd=2,wn=0,qd=1,Xd=2,Yd=3,jd=4,$d=5,Ju=300,yr=301,Mr=302,na=303,ia=304,Ns=306,Ta=307,ra=1e3,Ct=1001,sa=1002,st=1003,kl=1004,Ul=1005,Mt=1006,Zd=1007,Fs=1008,hn=1009,Jd=1010,Qd=1011,fr=1012,Kd=1013,hs=1014,Mn=1015,Un=1016,ep=1017,tp=1018,np=1019,Mi=1020,ip=1021,Hn=1022,ct=1023,rp=1024,sp=1025,Gn=1026,Ci=1027,op=1028,ap=1029,lp=1030,cp=1031,up=1032,hp=1033,Hl=33776,Gl=33777,Vl=33778,Wl=33779,ql=35840,Xl=35841,Yl=35842,jl=35843,fp=36196,$l=37492,Zl=37496,dp=37808,pp=37809,mp=37810,gp=37811,_p=37812,vp=37813,xp=37814,yp=37815,Mp=37816,bp=37817,wp=37818,Sp=37819,Tp=37820,Ep=37821,Ap=36492,Cp=37840,Lp=37841,Rp=37842,Pp=37843,Ip=37844,Dp=37845,Np=37846,Fp=37847,zp=37848,Bp=37849,Op=37850,kp=37851,Up=37852,Hp=37853,Gp=2200,Vp=2201,Wp=2202,vs=2300,xs=2301,Ks=2302,gi=2400,_i=2401,ys=2402,Ea=2500,Qu=2501,qp=0,Ht=3e3,Pi=3001,Xp=3200,Yp=3201,Ii=0,jp=1,eo=7680,$p=519,dr=35044,Ms=35048,Jl="300 es";class Ln{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});const n=this._listeners;n[e]===void 0&&(n[e]=[]),n[e].indexOf(t)===-1&&n[e].push(t)}hasEventListener(e,t){if(this._listeners===void 0)return!1;const n=this._listeners;return n[e]!==void 0&&n[e].indexOf(t)!==-1}removeEventListener(e,t){if(this._listeners===void 0)return;const r=this._listeners[e];if(r!==void 0){const s=r.indexOf(t);s!==-1&&r.splice(s,1)}}dispatchEvent(e){if(this._listeners===void 0)return;const n=this._listeners[e.type];if(n!==void 0){e.target=this;const r=n.slice(0);for(let s=0,o=r.length;s<o;s++)r[s].call(this,e);e.target=null}}}const ht=[];for(let i=0;i<256;i++)ht[i]=(i<16?"0":"")+i.toString(16);const to=Math.PI/180,oa=180/Math.PI;function Qt(){const i=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(ht[i&255]+ht[i>>8&255]+ht[i>>16&255]+ht[i>>24&255]+"-"+ht[e&255]+ht[e>>8&255]+"-"+ht[e>>16&15|64]+ht[e>>24&255]+"-"+ht[t&63|128]+ht[t>>8&255]+"-"+ht[t>>16&255]+ht[t>>24&255]+ht[n&255]+ht[n>>8&255]+ht[n>>16&255]+ht[n>>24&255]).toUpperCase()}function wt(i,e,t){return Math.max(e,Math.min(t,i))}function Zp(i,e){return(i%e+e)%e}function no(i,e,t){return(1-t)*i+t*e}function Ql(i){return(i&i-1)===0&&i!==0}function Jp(i){return Math.pow(2,Math.floor(Math.log(i)/Math.LN2))}class Z{constructor(e=0,t=0){this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e,t){return t!==void 0?(console.warn("THREE.Vector2: .add() now only accepts one argument. Use .addVectors( a, b ) instead."),this.addVectors(e,t)):(this.x+=e.x,this.y+=e.y,this)}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e,t){return t!==void 0?(console.warn("THREE.Vector2: .sub() now only accepts one argument. Use .subVectors( a, b ) instead."),this.subVectors(e,t)):(this.x-=e.x,this.y-=e.y,this)}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const t=this.x,n=this.y,r=e.elements;return this.x=r[0]*t+r[3]*n+r[6],this.y=r[1]*t+r[4]*n+r[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=this.x<0?Math.ceil(this.x):Math.floor(this.x),this.y=this.y<0?Math.ceil(this.y):Math.floor(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,n=this.y-e.y;return t*t+n*n}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t,n){return n!==void 0&&console.warn("THREE.Vector2: offset has been removed from .fromBufferAttribute()."),this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){const n=Math.cos(t),r=Math.sin(t),s=this.x-e.x,o=this.y-e.y;return this.x=s*n-o*r+e.x,this.y=s*r+o*n+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}Z.prototype.isVector2=!0;class ft{constructor(){this.elements=[1,0,0,0,1,0,0,0,1],arguments.length>0&&console.error("THREE.Matrix3: the constructor no longer reads arguments. use .set() instead.")}set(e,t,n,r,s,o,a,l,c){const h=this.elements;return h[0]=e,h[1]=r,h[2]=a,h[3]=t,h[4]=s,h[5]=l,h[6]=n,h[7]=o,h[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],this}extractBasis(e,t,n){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const n=e.elements,r=t.elements,s=this.elements,o=n[0],a=n[3],l=n[6],c=n[1],h=n[4],u=n[7],f=n[2],d=n[5],g=n[8],_=r[0],v=r[3],p=r[6],m=r[1],y=r[4],x=r[7],M=r[2],R=r[5],D=r[8];return s[0]=o*_+a*m+l*M,s[3]=o*v+a*y+l*R,s[6]=o*p+a*x+l*D,s[1]=c*_+h*m+u*M,s[4]=c*v+h*y+u*R,s[7]=c*p+h*x+u*D,s[2]=f*_+d*m+g*M,s[5]=f*v+d*y+g*R,s[8]=f*p+d*x+g*D,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){const e=this.elements,t=e[0],n=e[1],r=e[2],s=e[3],o=e[4],a=e[5],l=e[6],c=e[7],h=e[8];return t*o*h-t*a*c-n*s*h+n*a*l+r*s*c-r*o*l}invert(){const e=this.elements,t=e[0],n=e[1],r=e[2],s=e[3],o=e[4],a=e[5],l=e[6],c=e[7],h=e[8],u=h*o-a*c,f=a*l-h*s,d=c*s-o*l,g=t*u+n*f+r*d;if(g===0)return this.set(0,0,0,0,0,0,0,0,0);const _=1/g;return e[0]=u*_,e[1]=(r*c-h*n)*_,e[2]=(a*n-r*o)*_,e[3]=f*_,e[4]=(h*t-r*l)*_,e[5]=(r*s-a*t)*_,e[6]=d*_,e[7]=(n*l-c*t)*_,e[8]=(o*t-n*s)*_,this}transpose(){let e;const t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,n,r,s,o,a){const l=Math.cos(s),c=Math.sin(s);return this.set(n*l,n*c,-n*(l*o+c*a)+o+e,-r*c,r*l,-r*(-c*o+l*a)+a+t,0,0,1),this}scale(e,t){const n=this.elements;return n[0]*=e,n[3]*=e,n[6]*=e,n[1]*=t,n[4]*=t,n[7]*=t,this}rotate(e){const t=Math.cos(e),n=Math.sin(e),r=this.elements,s=r[0],o=r[3],a=r[6],l=r[1],c=r[4],h=r[7];return r[0]=t*s+n*l,r[3]=t*o+n*c,r[6]=t*a+n*h,r[1]=-n*s+t*l,r[4]=-n*o+t*c,r[7]=-n*a+t*h,this}translate(e,t){const n=this.elements;return n[0]+=e*n[2],n[3]+=e*n[5],n[6]+=e*n[8],n[1]+=t*n[2],n[4]+=t*n[5],n[7]+=t*n[8],this}equals(e){const t=this.elements,n=e.elements;for(let r=0;r<9;r++)if(t[r]!==n[r])return!1;return!0}fromArray(e,t=0){for(let n=0;n<9;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){const n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e}clone(){return new this.constructor().fromArray(this.elements)}}ft.prototype.isMatrix3=!0;function Ku(i){if(i.length===0)return-1/0;let e=i[0];for(let t=1,n=i.length;t<n;++t)i[t]>e&&(e=i[t]);return e}function zs(i){return document.createElementNS("http://www.w3.org/1999/xhtml",i)}let Zn;class Di{static getDataURL(e){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let t;if(e instanceof HTMLCanvasElement)t=e;else{Zn===void 0&&(Zn=zs("canvas")),Zn.width=e.width,Zn.height=e.height;const n=Zn.getContext("2d");e instanceof ImageData?n.putImageData(e,0,0):n.drawImage(e,0,0,e.width,e.height),t=Zn}return t.width>2048||t.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",e),t.toDataURL("image/jpeg",.6)):t.toDataURL("image/png")}}let Qp=0;class ut extends Ln{constructor(e=ut.DEFAULT_IMAGE,t=ut.DEFAULT_MAPPING,n=Ct,r=Ct,s=Mt,o=Fs,a=ct,l=hn,c=1,h=Ht){super(),Object.defineProperty(this,"id",{value:Qp++}),this.uuid=Qt(),this.name="",this.image=e,this.mipmaps=[],this.mapping=t,this.wrapS=n,this.wrapT=r,this.magFilter=s,this.minFilter=o,this.anisotropy=c,this.format=a,this.internalFormat=null,this.type=l,this.offset=new Z(0,0),this.repeat=new Z(1,1),this.center=new Z(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new ft,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.encoding=h,this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.image=e.image,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.encoding=e.encoding,this.userData=JSON.parse(JSON.stringify(e.userData)),this}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const n={metadata:{version:4.5,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,mapping:this.mapping,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,type:this.type,encoding:this.encoding,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};if(this.image!==void 0){const r=this.image;if(r.uuid===void 0&&(r.uuid=Qt()),!t&&e.images[r.uuid]===void 0){let s;if(Array.isArray(r)){s=[];for(let o=0,a=r.length;o<a;o++)r[o].isDataTexture?s.push(io(r[o].image)):s.push(io(r[o]))}else s=io(r);e.images[r.uuid]={uuid:r.uuid,url:s}}n.image=r.uuid}return JSON.stringify(this.userData)!=="{}"&&(n.userData=this.userData),t||(e.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==Ju)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case ra:e.x=e.x-Math.floor(e.x);break;case Ct:e.x=e.x<0?0:1;break;case sa:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case ra:e.y=e.y-Math.floor(e.y);break;case Ct:e.y=e.y<0?0:1;break;case sa:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&this.version++}}ut.DEFAULT_IMAGE=void 0;ut.DEFAULT_MAPPING=Ju;ut.prototype.isTexture=!0;function io(i){return typeof HTMLImageElement<"u"&&i instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&i instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&i instanceof ImageBitmap?Di.getDataURL(i):i.data?{data:Array.prototype.slice.call(i.data),width:i.width,height:i.height,type:i.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}class qe{constructor(e=0,t=0,n=0,r=1){this.x=e,this.y=t,this.z=n,this.w=r}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,n,r){return this.x=e,this.y=t,this.z=n,this.w=r,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e,t){return t!==void 0?(console.warn("THREE.Vector4: .add() now only accepts one argument. Use .addVectors( a, b ) instead."),this.addVectors(e,t)):(this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this)}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e,t){return t!==void 0?(console.warn("THREE.Vector4: .sub() now only accepts one argument. Use .subVectors( a, b ) instead."),this.subVectors(e,t)):(this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this)}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const t=this.x,n=this.y,r=this.z,s=this.w,o=e.elements;return this.x=o[0]*t+o[4]*n+o[8]*r+o[12]*s,this.y=o[1]*t+o[5]*n+o[9]*r+o[13]*s,this.z=o[2]*t+o[6]*n+o[10]*r+o[14]*s,this.w=o[3]*t+o[7]*n+o[11]*r+o[15]*s,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,n,r,s;const l=e.elements,c=l[0],h=l[4],u=l[8],f=l[1],d=l[5],g=l[9],_=l[2],v=l[6],p=l[10];if(Math.abs(h-f)<.01&&Math.abs(u-_)<.01&&Math.abs(g-v)<.01){if(Math.abs(h+f)<.1&&Math.abs(u+_)<.1&&Math.abs(g+v)<.1&&Math.abs(c+d+p-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;const y=(c+1)/2,x=(d+1)/2,M=(p+1)/2,R=(h+f)/4,D=(u+_)/4,O=(g+v)/4;return y>x&&y>M?y<.01?(n=0,r=.707106781,s=.707106781):(n=Math.sqrt(y),r=R/n,s=D/n):x>M?x<.01?(n=.707106781,r=0,s=.707106781):(r=Math.sqrt(x),n=R/r,s=O/r):M<.01?(n=.707106781,r=.707106781,s=0):(s=Math.sqrt(M),n=D/s,r=O/s),this.set(n,r,s,t),this}let m=Math.sqrt((v-g)*(v-g)+(u-_)*(u-_)+(f-h)*(f-h));return Math.abs(m)<.001&&(m=1),this.x=(v-g)/m,this.y=(u-_)/m,this.z=(f-h)/m,this.w=Math.acos((c+d+p-1)/2),this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this.w=Math.max(e.w,Math.min(t.w,this.w)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this.w=Math.max(e,Math.min(t,this.w)),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=this.x<0?Math.ceil(this.x):Math.floor(this.x),this.y=this.y<0?Math.ceil(this.y):Math.floor(this.y),this.z=this.z<0?Math.ceil(this.z):Math.floor(this.z),this.w=this.w<0?Math.ceil(this.w):Math.floor(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this.w=e.w+(t.w-e.w)*n,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t,n){return n!==void 0&&console.warn("THREE.Vector4: offset has been removed from .fromBufferAttribute()."),this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}qe.prototype.isVector4=!0;class It extends Ln{constructor(e,t,n={}){super(),this.width=e,this.height=t,this.depth=1,this.scissor=new qe(0,0,e,t),this.scissorTest=!1,this.viewport=new qe(0,0,e,t),this.texture=new ut(void 0,n.mapping,n.wrapS,n.wrapT,n.magFilter,n.minFilter,n.format,n.type,n.anisotropy,n.encoding),this.texture.isRenderTargetTexture=!0,this.texture.image={width:e,height:t,depth:1},this.texture.generateMipmaps=n.generateMipmaps!==void 0?n.generateMipmaps:!1,this.texture.internalFormat=n.internalFormat!==void 0?n.internalFormat:null,this.texture.minFilter=n.minFilter!==void 0?n.minFilter:Mt,this.depthBuffer=n.depthBuffer!==void 0?n.depthBuffer:!0,this.stencilBuffer=n.stencilBuffer!==void 0?n.stencilBuffer:!1,this.depthTexture=n.depthTexture!==void 0?n.depthTexture:null}setTexture(e){e.image={width:this.width,height:this.height,depth:this.depth},this.texture=e}setSize(e,t,n=1){(this.width!==e||this.height!==t||this.depth!==n)&&(this.width=e,this.height=t,this.depth=n,this.texture.image.width=e,this.texture.image.height=t,this.texture.image.depth=n,this.dispose()),this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.width=e.width,this.height=e.height,this.depth=e.depth,this.viewport.copy(e.viewport),this.texture=e.texture.clone(),this.texture.image={...this.texture.image},this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.depthTexture=e.depthTexture,this}dispose(){this.dispatchEvent({type:"dispose"})}}It.prototype.isWebGLRenderTarget=!0;class Kp extends It{constructor(e,t,n){super(e,t);const r=this.texture;this.texture=[];for(let s=0;s<n;s++)this.texture[s]=r.clone()}setSize(e,t,n=1){if(this.width!==e||this.height!==t||this.depth!==n){this.width=e,this.height=t,this.depth=n;for(let r=0,s=this.texture.length;r<s;r++)this.texture[r].image.width=e,this.texture[r].image.height=t,this.texture[r].image.depth=n;this.dispose()}return this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t),this}copy(e){this.dispose(),this.width=e.width,this.height=e.height,this.depth=e.depth,this.viewport.set(0,0,this.width,this.height),this.scissor.set(0,0,this.width,this.height),this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.depthTexture=e.depthTexture,this.texture.length=0;for(let t=0,n=e.texture.length;t<n;t++)this.texture[t]=e.texture[t].clone();return this}}Kp.prototype.isWebGLMultipleRenderTargets=!0;class Aa extends It{constructor(e,t,n={}){super(e,t,n),this.samples=4,this.ignoreDepthForMultisampleCopy=n.ignoreDepth!==void 0?n.ignoreDepth:!0,this.useRenderToTexture=n.useRenderToTexture!==void 0?n.useRenderToTexture:!1,this.useRenderbuffer=this.useRenderToTexture===!1}copy(e){return super.copy.call(this,e),this.samples=e.samples,this.useRenderToTexture=e.useRenderToTexture,this.useRenderbuffer=e.useRenderbuffer,this}}Aa.prototype.isWebGLMultisampleRenderTarget=!0;class _t{constructor(e=0,t=0,n=0,r=1){this._x=e,this._y=t,this._z=n,this._w=r}static slerp(e,t,n,r){return console.warn("THREE.Quaternion: Static .slerp() has been deprecated. Use qm.slerpQuaternions( qa, qb, t ) instead."),n.slerpQuaternions(e,t,r)}static slerpFlat(e,t,n,r,s,o,a){let l=n[r+0],c=n[r+1],h=n[r+2],u=n[r+3];const f=s[o+0],d=s[o+1],g=s[o+2],_=s[o+3];if(a===0){e[t+0]=l,e[t+1]=c,e[t+2]=h,e[t+3]=u;return}if(a===1){e[t+0]=f,e[t+1]=d,e[t+2]=g,e[t+3]=_;return}if(u!==_||l!==f||c!==d||h!==g){let v=1-a;const p=l*f+c*d+h*g+u*_,m=p>=0?1:-1,y=1-p*p;if(y>Number.EPSILON){const M=Math.sqrt(y),R=Math.atan2(M,p*m);v=Math.sin(v*R)/M,a=Math.sin(a*R)/M}const x=a*m;if(l=l*v+f*x,c=c*v+d*x,h=h*v+g*x,u=u*v+_*x,v===1-a){const M=1/Math.sqrt(l*l+c*c+h*h+u*u);l*=M,c*=M,h*=M,u*=M}}e[t]=l,e[t+1]=c,e[t+2]=h,e[t+3]=u}static multiplyQuaternionsFlat(e,t,n,r,s,o){const a=n[r],l=n[r+1],c=n[r+2],h=n[r+3],u=s[o],f=s[o+1],d=s[o+2],g=s[o+3];return e[t]=a*g+h*u+l*d-c*f,e[t+1]=l*g+h*f+c*u-a*d,e[t+2]=c*g+h*d+a*f-l*u,e[t+3]=h*g-a*u-l*f-c*d,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,n,r){return this._x=e,this._y=t,this._z=n,this._w=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t){if(!(e&&e.isEuler))throw new Error("THREE.Quaternion: .setFromEuler() now expects an Euler rotation rather than a Vector3 and order.");const n=e._x,r=e._y,s=e._z,o=e._order,a=Math.cos,l=Math.sin,c=a(n/2),h=a(r/2),u=a(s/2),f=l(n/2),d=l(r/2),g=l(s/2);switch(o){case"XYZ":this._x=f*h*u+c*d*g,this._y=c*d*u-f*h*g,this._z=c*h*g+f*d*u,this._w=c*h*u-f*d*g;break;case"YXZ":this._x=f*h*u+c*d*g,this._y=c*d*u-f*h*g,this._z=c*h*g-f*d*u,this._w=c*h*u+f*d*g;break;case"ZXY":this._x=f*h*u-c*d*g,this._y=c*d*u+f*h*g,this._z=c*h*g+f*d*u,this._w=c*h*u-f*d*g;break;case"ZYX":this._x=f*h*u-c*d*g,this._y=c*d*u+f*h*g,this._z=c*h*g-f*d*u,this._w=c*h*u+f*d*g;break;case"YZX":this._x=f*h*u+c*d*g,this._y=c*d*u+f*h*g,this._z=c*h*g-f*d*u,this._w=c*h*u-f*d*g;break;case"XZY":this._x=f*h*u-c*d*g,this._y=c*d*u-f*h*g,this._z=c*h*g+f*d*u,this._w=c*h*u+f*d*g;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+o)}return t!==!1&&this._onChangeCallback(),this}setFromAxisAngle(e,t){const n=t/2,r=Math.sin(n);return this._x=e.x*r,this._y=e.y*r,this._z=e.z*r,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(e){const t=e.elements,n=t[0],r=t[4],s=t[8],o=t[1],a=t[5],l=t[9],c=t[2],h=t[6],u=t[10],f=n+a+u;if(f>0){const d=.5/Math.sqrt(f+1);this._w=.25/d,this._x=(h-l)*d,this._y=(s-c)*d,this._z=(o-r)*d}else if(n>a&&n>u){const d=2*Math.sqrt(1+n-a-u);this._w=(h-l)/d,this._x=.25*d,this._y=(r+o)/d,this._z=(s+c)/d}else if(a>u){const d=2*Math.sqrt(1+a-n-u);this._w=(s-c)/d,this._x=(r+o)/d,this._y=.25*d,this._z=(l+h)/d}else{const d=2*Math.sqrt(1+u-n-a);this._w=(o-r)/d,this._x=(s+c)/d,this._y=(l+h)/d,this._z=.25*d}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let n=e.dot(t)+1;return n<Number.EPSILON?(n=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=n):(this._x=0,this._y=-e.z,this._z=e.y,this._w=n)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=n),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(wt(this.dot(e),-1,1)))}rotateTowards(e,t){const n=this.angleTo(e);if(n===0)return this;const r=Math.min(1,t/n);return this.slerp(e,r),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e,t){return t!==void 0?(console.warn("THREE.Quaternion: .multiply() now only accepts one argument. Use .multiplyQuaternions( a, b ) instead."),this.multiplyQuaternions(e,t)):this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){const n=e._x,r=e._y,s=e._z,o=e._w,a=t._x,l=t._y,c=t._z,h=t._w;return this._x=n*h+o*a+r*c-s*l,this._y=r*h+o*l+s*a-n*c,this._z=s*h+o*c+n*l-r*a,this._w=o*h-n*a-r*l-s*c,this._onChangeCallback(),this}slerp(e,t){if(t===0)return this;if(t===1)return this.copy(e);const n=this._x,r=this._y,s=this._z,o=this._w;let a=o*e._w+n*e._x+r*e._y+s*e._z;if(a<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,a=-a):this.copy(e),a>=1)return this._w=o,this._x=n,this._y=r,this._z=s,this;const l=1-a*a;if(l<=Number.EPSILON){const d=1-t;return this._w=d*o+t*this._w,this._x=d*n+t*this._x,this._y=d*r+t*this._y,this._z=d*s+t*this._z,this.normalize(),this._onChangeCallback(),this}const c=Math.sqrt(l),h=Math.atan2(c,a),u=Math.sin((1-t)*h)/c,f=Math.sin(t*h)/c;return this._w=o*u+this._w*f,this._x=n*u+this._x*f,this._y=r*u+this._y*f,this._z=s*u+this._z*f,this._onChangeCallback(),this}slerpQuaternions(e,t,n){this.copy(e).slerp(t,n)}random(){const e=Math.random(),t=Math.sqrt(1-e),n=Math.sqrt(e),r=2*Math.PI*Math.random(),s=2*Math.PI*Math.random();return this.set(t*Math.cos(r),n*Math.sin(s),n*Math.cos(s),t*Math.sin(r))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}}_t.prototype.isQuaternion=!0;class C{constructor(e=0,t=0,n=0){this.x=e,this.y=t,this.z=n}set(e,t,n){return n===void 0&&(n=this.z),this.x=e,this.y=t,this.z=n,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e,t){return t!==void 0?(console.warn("THREE.Vector3: .add() now only accepts one argument. Use .addVectors( a, b ) instead."),this.addVectors(e,t)):(this.x+=e.x,this.y+=e.y,this.z+=e.z,this)}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e,t){return t!==void 0?(console.warn("THREE.Vector3: .sub() now only accepts one argument. Use .subVectors( a, b ) instead."),this.subVectors(e,t)):(this.x-=e.x,this.y-=e.y,this.z-=e.z,this)}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e,t){return t!==void 0?(console.warn("THREE.Vector3: .multiply() now only accepts one argument. Use .multiplyVectors( a, b ) instead."),this.multiplyVectors(e,t)):(this.x*=e.x,this.y*=e.y,this.z*=e.z,this)}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return e&&e.isEuler||console.error("THREE.Vector3: .applyEuler() now expects an Euler rotation rather than a Vector3 and order."),this.applyQuaternion(Kl.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(Kl.setFromAxisAngle(e,t))}applyMatrix3(e){const t=this.x,n=this.y,r=this.z,s=e.elements;return this.x=s[0]*t+s[3]*n+s[6]*r,this.y=s[1]*t+s[4]*n+s[7]*r,this.z=s[2]*t+s[5]*n+s[8]*r,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const t=this.x,n=this.y,r=this.z,s=e.elements,o=1/(s[3]*t+s[7]*n+s[11]*r+s[15]);return this.x=(s[0]*t+s[4]*n+s[8]*r+s[12])*o,this.y=(s[1]*t+s[5]*n+s[9]*r+s[13])*o,this.z=(s[2]*t+s[6]*n+s[10]*r+s[14])*o,this}applyQuaternion(e){const t=this.x,n=this.y,r=this.z,s=e.x,o=e.y,a=e.z,l=e.w,c=l*t+o*r-a*n,h=l*n+a*t-s*r,u=l*r+s*n-o*t,f=-s*t-o*n-a*r;return this.x=c*l+f*-s+h*-a-u*-o,this.y=h*l+f*-o+u*-s-c*-a,this.z=u*l+f*-a+c*-o-h*-s,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const t=this.x,n=this.y,r=this.z,s=e.elements;return this.x=s[0]*t+s[4]*n+s[8]*r,this.y=s[1]*t+s[5]*n+s[9]*r,this.z=s[2]*t+s[6]*n+s[10]*r,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=this.x<0?Math.ceil(this.x):Math.floor(this.x),this.y=this.y<0?Math.ceil(this.y):Math.floor(this.y),this.z=this.z<0?Math.ceil(this.z):Math.floor(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this}cross(e,t){return t!==void 0?(console.warn("THREE.Vector3: .cross() now only accepts one argument. Use .crossVectors( a, b ) instead."),this.crossVectors(e,t)):this.crossVectors(this,e)}crossVectors(e,t){const n=e.x,r=e.y,s=e.z,o=t.x,a=t.y,l=t.z;return this.x=r*l-s*a,this.y=s*o-n*l,this.z=n*a-r*o,this}projectOnVector(e){const t=e.lengthSq();if(t===0)return this.set(0,0,0);const n=e.dot(this)/t;return this.copy(e).multiplyScalar(n)}projectOnPlane(e){return ro.copy(this).projectOnVector(e),this.sub(ro)}reflect(e){return this.sub(ro.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const n=this.dot(e)/t;return Math.acos(wt(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,n=this.y-e.y,r=this.z-e.z;return t*t+n*n+r*r}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,n){const r=Math.sin(t)*e;return this.x=r*Math.sin(n),this.y=Math.cos(t)*e,this.z=r*Math.cos(n),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,n){return this.x=e*Math.sin(t),this.y=n,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){const t=this.setFromMatrixColumn(e,0).length(),n=this.setFromMatrixColumn(e,1).length(),r=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=n,this.z=r,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t,n){return n!==void 0&&console.warn("THREE.Vector3: offset has been removed from .fromBufferAttribute()."),this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=(Math.random()-.5)*2,t=Math.random()*Math.PI*2,n=Math.sqrt(1-e**2);return this.x=n*Math.cos(t),this.y=n*Math.sin(t),this.z=e,this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}C.prototype.isVector3=!0;const ro=new C,Kl=new _t;class Nt{constructor(e=new C(1/0,1/0,1/0),t=new C(-1/0,-1/0,-1/0)){this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){let t=1/0,n=1/0,r=1/0,s=-1/0,o=-1/0,a=-1/0;for(let l=0,c=e.length;l<c;l+=3){const h=e[l],u=e[l+1],f=e[l+2];h<t&&(t=h),u<n&&(n=u),f<r&&(r=f),h>s&&(s=h),u>o&&(o=u),f>a&&(a=f)}return this.min.set(t,n,r),this.max.set(s,o,a),this}setFromBufferAttribute(e){let t=1/0,n=1/0,r=1/0,s=-1/0,o=-1/0,a=-1/0;for(let l=0,c=e.count;l<c;l++){const h=e.getX(l),u=e.getY(l),f=e.getZ(l);h<t&&(t=h),u<n&&(n=u),f<r&&(r=f),h>s&&(s=h),u>o&&(o=u),f>a&&(a=f)}return this.min.set(t,n,r),this.max.set(s,o,a),this}setFromPoints(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){const n=Vi.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(n),this.max.copy(e).add(n),this}setFromObject(e){return this.makeEmpty(),this.expandByObject(e)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e){e.updateWorldMatrix(!1,!1);const t=e.geometry;t!==void 0&&(t.boundingBox===null&&t.computeBoundingBox(),so.copy(t.boundingBox),so.applyMatrix4(e.matrixWorld),this.union(so));const n=e.children;for(let r=0,s=n.length;r<s;r++)this.expandByObject(n[r]);return this}containsPoint(e){return!(e.x<this.min.x||e.x>this.max.x||e.y<this.min.y||e.y>this.max.y||e.z<this.min.z||e.z>this.max.z)}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return!(e.max.x<this.min.x||e.min.x>this.max.x||e.max.y<this.min.y||e.min.y>this.max.y||e.max.z<this.min.z||e.min.z>this.max.z)}intersectsSphere(e){return this.clampPoint(e.center,Vi),Vi.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,n;return e.normal.x>0?(t=e.normal.x*this.min.x,n=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,n=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,n+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,n+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,n+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,n+=e.normal.z*this.min.z),t<=-e.constant&&n>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(Wi),Ir.subVectors(this.max,Wi),Jn.subVectors(e.a,Wi),Qn.subVectors(e.b,Wi),Kn.subVectors(e.c,Wi),dn.subVectors(Qn,Jn),pn.subVectors(Kn,Qn),Dn.subVectors(Jn,Kn);let t=[0,-dn.z,dn.y,0,-pn.z,pn.y,0,-Dn.z,Dn.y,dn.z,0,-dn.x,pn.z,0,-pn.x,Dn.z,0,-Dn.x,-dn.y,dn.x,0,-pn.y,pn.x,0,-Dn.y,Dn.x,0];return!oo(t,Jn,Qn,Kn,Ir)||(t=[1,0,0,0,1,0,0,0,1],!oo(t,Jn,Qn,Kn,Ir))?!1:(Dr.crossVectors(dn,pn),t=[Dr.x,Dr.y,Dr.z],oo(t,Jn,Qn,Kn,Ir))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return Vi.copy(e).clamp(this.min,this.max).sub(e).length()}getBoundingSphere(e){return this.getCenter(e.center),e.radius=this.getSize(Vi).length()*.5,e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(rn[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),rn[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),rn[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),rn[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),rn[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),rn[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),rn[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),rn[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(rn),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}}Nt.prototype.isBox3=!0;const rn=[new C,new C,new C,new C,new C,new C,new C,new C],Vi=new C,so=new Nt,Jn=new C,Qn=new C,Kn=new C,dn=new C,pn=new C,Dn=new C,Wi=new C,Ir=new C,Dr=new C,Nn=new C;function oo(i,e,t,n,r){for(let s=0,o=i.length-3;s<=o;s+=3){Nn.fromArray(i,s);const a=r.x*Math.abs(Nn.x)+r.y*Math.abs(Nn.y)+r.z*Math.abs(Nn.z),l=e.dot(Nn),c=t.dot(Nn),h=n.dot(Nn);if(Math.max(-Math.max(l,c,h),Math.min(l,c,h))>a)return!1}return!0}const em=new Nt,ec=new C,Nr=new C,ao=new C;class Ni{constructor(e=new C,t=-1){this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){const n=this.center;t!==void 0?n.copy(t):em.setFromPoints(e).getCenter(n);let r=0;for(let s=0,o=e.length;s<o;s++)r=Math.max(r,n.distanceToSquared(e[s]));return this.radius=Math.sqrt(r),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){const n=this.center.distanceToSquared(e);return t.copy(e),n>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){ao.subVectors(e,this.center);const t=ao.lengthSq();if(t>this.radius*this.radius){const n=Math.sqrt(t),r=(n-this.radius)*.5;this.center.add(ao.multiplyScalar(r/n)),this.radius+=r}return this}union(e){return this.center.equals(e.center)===!0?Nr.set(0,0,1).multiplyScalar(e.radius):Nr.subVectors(e.center,this.center).normalize().multiplyScalar(e.radius),this.expandByPoint(ec.copy(e.center).add(Nr)),this.expandByPoint(ec.copy(e.center).sub(Nr)),this}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}}const sn=new C,lo=new C,Fr=new C,mn=new C,co=new C,zr=new C,uo=new C;class Fi{constructor(e=new C,t=new C(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.direction).multiplyScalar(e).add(this.origin)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,sn)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);const n=t.dot(this.direction);return n<0?t.copy(this.origin):t.copy(this.direction).multiplyScalar(n).add(this.origin)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const t=sn.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(sn.copy(this.direction).multiplyScalar(t).add(this.origin),sn.distanceToSquared(e))}distanceSqToSegment(e,t,n,r){lo.copy(e).add(t).multiplyScalar(.5),Fr.copy(t).sub(e).normalize(),mn.copy(this.origin).sub(lo);const s=e.distanceTo(t)*.5,o=-this.direction.dot(Fr),a=mn.dot(this.direction),l=-mn.dot(Fr),c=mn.lengthSq(),h=Math.abs(1-o*o);let u,f,d,g;if(h>0)if(u=o*l-a,f=o*a-l,g=s*h,u>=0)if(f>=-g)if(f<=g){const _=1/h;u*=_,f*=_,d=u*(u+o*f+2*a)+f*(o*u+f+2*l)+c}else f=s,u=Math.max(0,-(o*f+a)),d=-u*u+f*(f+2*l)+c;else f=-s,u=Math.max(0,-(o*f+a)),d=-u*u+f*(f+2*l)+c;else f<=-g?(u=Math.max(0,-(-o*s+a)),f=u>0?-s:Math.min(Math.max(-s,-l),s),d=-u*u+f*(f+2*l)+c):f<=g?(u=0,f=Math.min(Math.max(-s,-l),s),d=f*(f+2*l)+c):(u=Math.max(0,-(o*s+a)),f=u>0?s:Math.min(Math.max(-s,-l),s),d=-u*u+f*(f+2*l)+c);else f=o>0?-s:s,u=Math.max(0,-(o*f+a)),d=-u*u+f*(f+2*l)+c;return n&&n.copy(this.direction).multiplyScalar(u).add(this.origin),r&&r.copy(Fr).multiplyScalar(f).add(lo),d}intersectSphere(e,t){sn.subVectors(e.center,this.origin);const n=sn.dot(this.direction),r=sn.dot(sn)-n*n,s=e.radius*e.radius;if(r>s)return null;const o=Math.sqrt(s-r),a=n-o,l=n+o;return a<0&&l<0?null:a<0?this.at(l,t):this.at(a,t)}intersectsSphere(e){return this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;const n=-(this.origin.dot(e.normal)+e.constant)/t;return n>=0?n:null}intersectPlane(e,t){const n=this.distanceToPlane(e);return n===null?null:this.at(n,t)}intersectsPlane(e){const t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let n,r,s,o,a,l;const c=1/this.direction.x,h=1/this.direction.y,u=1/this.direction.z,f=this.origin;return c>=0?(n=(e.min.x-f.x)*c,r=(e.max.x-f.x)*c):(n=(e.max.x-f.x)*c,r=(e.min.x-f.x)*c),h>=0?(s=(e.min.y-f.y)*h,o=(e.max.y-f.y)*h):(s=(e.max.y-f.y)*h,o=(e.min.y-f.y)*h),n>o||s>r||((s>n||n!==n)&&(n=s),(o<r||r!==r)&&(r=o),u>=0?(a=(e.min.z-f.z)*u,l=(e.max.z-f.z)*u):(a=(e.max.z-f.z)*u,l=(e.min.z-f.z)*u),n>l||a>r)||((a>n||n!==n)&&(n=a),(l<r||r!==r)&&(r=l),r<0)?null:this.at(n>=0?n:r,t)}intersectsBox(e){return this.intersectBox(e,sn)!==null}intersectTriangle(e,t,n,r,s){co.subVectors(t,e),zr.subVectors(n,e),uo.crossVectors(co,zr);let o=this.direction.dot(uo),a;if(o>0){if(r)return null;a=1}else if(o<0)a=-1,o=-o;else return null;mn.subVectors(this.origin,e);const l=a*this.direction.dot(zr.crossVectors(mn,zr));if(l<0)return null;const c=a*this.direction.dot(co.cross(mn));if(c<0||l+c>o)return null;const h=-a*mn.dot(uo);return h<0?null:this.at(h/o,s)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class Me{constructor(){this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],arguments.length>0&&console.error("THREE.Matrix4: the constructor no longer reads arguments. use .set() instead.")}set(e,t,n,r,s,o,a,l,c,h,u,f,d,g,_,v){const p=this.elements;return p[0]=e,p[4]=t,p[8]=n,p[12]=r,p[1]=s,p[5]=o,p[9]=a,p[13]=l,p[2]=c,p[6]=h,p[10]=u,p[14]=f,p[3]=d,p[7]=g,p[11]=_,p[15]=v,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new Me().fromArray(this.elements)}copy(e){const t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],t[9]=n[9],t[10]=n[10],t[11]=n[11],t[12]=n[12],t[13]=n[13],t[14]=n[14],t[15]=n[15],this}copyPosition(e){const t=this.elements,n=e.elements;return t[12]=n[12],t[13]=n[13],t[14]=n[14],this}setFromMatrix3(e){const t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,n){return e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this}makeBasis(e,t,n){return this.set(e.x,t.x,n.x,0,e.y,t.y,n.y,0,e.z,t.z,n.z,0,0,0,0,1),this}extractRotation(e){const t=this.elements,n=e.elements,r=1/ei.setFromMatrixColumn(e,0).length(),s=1/ei.setFromMatrixColumn(e,1).length(),o=1/ei.setFromMatrixColumn(e,2).length();return t[0]=n[0]*r,t[1]=n[1]*r,t[2]=n[2]*r,t[3]=0,t[4]=n[4]*s,t[5]=n[5]*s,t[6]=n[6]*s,t[7]=0,t[8]=n[8]*o,t[9]=n[9]*o,t[10]=n[10]*o,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){e&&e.isEuler||console.error("THREE.Matrix4: .makeRotationFromEuler() now expects a Euler rotation rather than a Vector3 and order.");const t=this.elements,n=e.x,r=e.y,s=e.z,o=Math.cos(n),a=Math.sin(n),l=Math.cos(r),c=Math.sin(r),h=Math.cos(s),u=Math.sin(s);if(e.order==="XYZ"){const f=o*h,d=o*u,g=a*h,_=a*u;t[0]=l*h,t[4]=-l*u,t[8]=c,t[1]=d+g*c,t[5]=f-_*c,t[9]=-a*l,t[2]=_-f*c,t[6]=g+d*c,t[10]=o*l}else if(e.order==="YXZ"){const f=l*h,d=l*u,g=c*h,_=c*u;t[0]=f+_*a,t[4]=g*a-d,t[8]=o*c,t[1]=o*u,t[5]=o*h,t[9]=-a,t[2]=d*a-g,t[6]=_+f*a,t[10]=o*l}else if(e.order==="ZXY"){const f=l*h,d=l*u,g=c*h,_=c*u;t[0]=f-_*a,t[4]=-o*u,t[8]=g+d*a,t[1]=d+g*a,t[5]=o*h,t[9]=_-f*a,t[2]=-o*c,t[6]=a,t[10]=o*l}else if(e.order==="ZYX"){const f=o*h,d=o*u,g=a*h,_=a*u;t[0]=l*h,t[4]=g*c-d,t[8]=f*c+_,t[1]=l*u,t[5]=_*c+f,t[9]=d*c-g,t[2]=-c,t[6]=a*l,t[10]=o*l}else if(e.order==="YZX"){const f=o*l,d=o*c,g=a*l,_=a*c;t[0]=l*h,t[4]=_-f*u,t[8]=g*u+d,t[1]=u,t[5]=o*h,t[9]=-a*h,t[2]=-c*h,t[6]=d*u+g,t[10]=f-_*u}else if(e.order==="XZY"){const f=o*l,d=o*c,g=a*l,_=a*c;t[0]=l*h,t[4]=-u,t[8]=c*h,t[1]=f*u+_,t[5]=o*h,t[9]=d*u-g,t[2]=g*u-d,t[6]=a*h,t[10]=_*u+f}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(tm,e,nm)}lookAt(e,t,n){const r=this.elements;return Tt.subVectors(e,t),Tt.lengthSq()===0&&(Tt.z=1),Tt.normalize(),gn.crossVectors(n,Tt),gn.lengthSq()===0&&(Math.abs(n.z)===1?Tt.x+=1e-4:Tt.z+=1e-4,Tt.normalize(),gn.crossVectors(n,Tt)),gn.normalize(),Br.crossVectors(Tt,gn),r[0]=gn.x,r[4]=Br.x,r[8]=Tt.x,r[1]=gn.y,r[5]=Br.y,r[9]=Tt.y,r[2]=gn.z,r[6]=Br.z,r[10]=Tt.z,this}multiply(e,t){return t!==void 0?(console.warn("THREE.Matrix4: .multiply() now only accepts one argument. Use .multiplyMatrices( a, b ) instead."),this.multiplyMatrices(e,t)):this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const n=e.elements,r=t.elements,s=this.elements,o=n[0],a=n[4],l=n[8],c=n[12],h=n[1],u=n[5],f=n[9],d=n[13],g=n[2],_=n[6],v=n[10],p=n[14],m=n[3],y=n[7],x=n[11],M=n[15],R=r[0],D=r[4],O=r[8],j=r[12],k=r[1],P=r[5],w=r[9],b=r[13],F=r[2],I=r[6],N=r[10],z=r[14],ee=r[3],re=r[7],G=r[11],W=r[15];return s[0]=o*R+a*k+l*F+c*ee,s[4]=o*D+a*P+l*I+c*re,s[8]=o*O+a*w+l*N+c*G,s[12]=o*j+a*b+l*z+c*W,s[1]=h*R+u*k+f*F+d*ee,s[5]=h*D+u*P+f*I+d*re,s[9]=h*O+u*w+f*N+d*G,s[13]=h*j+u*b+f*z+d*W,s[2]=g*R+_*k+v*F+p*ee,s[6]=g*D+_*P+v*I+p*re,s[10]=g*O+_*w+v*N+p*G,s[14]=g*j+_*b+v*z+p*W,s[3]=m*R+y*k+x*F+M*ee,s[7]=m*D+y*P+x*I+M*re,s[11]=m*O+y*w+x*N+M*G,s[15]=m*j+y*b+x*z+M*W,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){const e=this.elements,t=e[0],n=e[4],r=e[8],s=e[12],o=e[1],a=e[5],l=e[9],c=e[13],h=e[2],u=e[6],f=e[10],d=e[14],g=e[3],_=e[7],v=e[11],p=e[15];return g*(+s*l*u-r*c*u-s*a*f+n*c*f+r*a*d-n*l*d)+_*(+t*l*d-t*c*f+s*o*f-r*o*d+r*c*h-s*l*h)+v*(+t*c*u-t*a*d-s*o*u+n*o*d+s*a*h-n*c*h)+p*(-r*a*h-t*l*u+t*a*f+r*o*u-n*o*f+n*l*h)}transpose(){const e=this.elements;let t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,n){const r=this.elements;return e.isVector3?(r[12]=e.x,r[13]=e.y,r[14]=e.z):(r[12]=e,r[13]=t,r[14]=n),this}invert(){const e=this.elements,t=e[0],n=e[1],r=e[2],s=e[3],o=e[4],a=e[5],l=e[6],c=e[7],h=e[8],u=e[9],f=e[10],d=e[11],g=e[12],_=e[13],v=e[14],p=e[15],m=u*v*c-_*f*c+_*l*d-a*v*d-u*l*p+a*f*p,y=g*f*c-h*v*c-g*l*d+o*v*d+h*l*p-o*f*p,x=h*_*c-g*u*c+g*a*d-o*_*d-h*a*p+o*u*p,M=g*u*l-h*_*l-g*a*f+o*_*f+h*a*v-o*u*v,R=t*m+n*y+r*x+s*M;if(R===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const D=1/R;return e[0]=m*D,e[1]=(_*f*s-u*v*s-_*r*d+n*v*d+u*r*p-n*f*p)*D,e[2]=(a*v*s-_*l*s+_*r*c-n*v*c-a*r*p+n*l*p)*D,e[3]=(u*l*s-a*f*s-u*r*c+n*f*c+a*r*d-n*l*d)*D,e[4]=y*D,e[5]=(h*v*s-g*f*s+g*r*d-t*v*d-h*r*p+t*f*p)*D,e[6]=(g*l*s-o*v*s-g*r*c+t*v*c+o*r*p-t*l*p)*D,e[7]=(o*f*s-h*l*s+h*r*c-t*f*c-o*r*d+t*l*d)*D,e[8]=x*D,e[9]=(g*u*s-h*_*s-g*n*d+t*_*d+h*n*p-t*u*p)*D,e[10]=(o*_*s-g*a*s+g*n*c-t*_*c-o*n*p+t*a*p)*D,e[11]=(h*a*s-o*u*s-h*n*c+t*u*c+o*n*d-t*a*d)*D,e[12]=M*D,e[13]=(h*_*r-g*u*r+g*n*f-t*_*f-h*n*v+t*u*v)*D,e[14]=(g*a*r-o*_*r-g*n*l+t*_*l+o*n*v-t*a*v)*D,e[15]=(o*u*r-h*a*r+h*n*l-t*u*l-o*n*f+t*a*f)*D,this}scale(e){const t=this.elements,n=e.x,r=e.y,s=e.z;return t[0]*=n,t[4]*=r,t[8]*=s,t[1]*=n,t[5]*=r,t[9]*=s,t[2]*=n,t[6]*=r,t[10]*=s,t[3]*=n,t[7]*=r,t[11]*=s,this}getMaxScaleOnAxis(){const e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],n=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],r=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,n,r))}makeTranslation(e,t,n){return this.set(1,0,0,e,0,1,0,t,0,0,1,n,0,0,0,1),this}makeRotationX(e){const t=Math.cos(e),n=Math.sin(e);return this.set(1,0,0,0,0,t,-n,0,0,n,t,0,0,0,0,1),this}makeRotationY(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,0,n,0,0,1,0,0,-n,0,t,0,0,0,0,1),this}makeRotationZ(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,0,n,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){const n=Math.cos(t),r=Math.sin(t),s=1-n,o=e.x,a=e.y,l=e.z,c=s*o,h=s*a;return this.set(c*o+n,c*a-r*l,c*l+r*a,0,c*a+r*l,h*a+n,h*l-r*o,0,c*l-r*a,h*l+r*o,s*l*l+n,0,0,0,0,1),this}makeScale(e,t,n){return this.set(e,0,0,0,0,t,0,0,0,0,n,0,0,0,0,1),this}makeShear(e,t,n,r,s,o){return this.set(1,n,s,0,e,1,o,0,t,r,1,0,0,0,0,1),this}compose(e,t,n){const r=this.elements,s=t._x,o=t._y,a=t._z,l=t._w,c=s+s,h=o+o,u=a+a,f=s*c,d=s*h,g=s*u,_=o*h,v=o*u,p=a*u,m=l*c,y=l*h,x=l*u,M=n.x,R=n.y,D=n.z;return r[0]=(1-(_+p))*M,r[1]=(d+x)*M,r[2]=(g-y)*M,r[3]=0,r[4]=(d-x)*R,r[5]=(1-(f+p))*R,r[6]=(v+m)*R,r[7]=0,r[8]=(g+y)*D,r[9]=(v-m)*D,r[10]=(1-(f+_))*D,r[11]=0,r[12]=e.x,r[13]=e.y,r[14]=e.z,r[15]=1,this}decompose(e,t,n){const r=this.elements;let s=ei.set(r[0],r[1],r[2]).length();const o=ei.set(r[4],r[5],r[6]).length(),a=ei.set(r[8],r[9],r[10]).length();this.determinant()<0&&(s=-s),e.x=r[12],e.y=r[13],e.z=r[14],zt.copy(this);const c=1/s,h=1/o,u=1/a;return zt.elements[0]*=c,zt.elements[1]*=c,zt.elements[2]*=c,zt.elements[4]*=h,zt.elements[5]*=h,zt.elements[6]*=h,zt.elements[8]*=u,zt.elements[9]*=u,zt.elements[10]*=u,t.setFromRotationMatrix(zt),n.x=s,n.y=o,n.z=a,this}makePerspective(e,t,n,r,s,o){o===void 0&&console.warn("THREE.Matrix4: .makePerspective() has been redefined and has a new signature. Please check the docs.");const a=this.elements,l=2*s/(t-e),c=2*s/(n-r),h=(t+e)/(t-e),u=(n+r)/(n-r),f=-(o+s)/(o-s),d=-2*o*s/(o-s);return a[0]=l,a[4]=0,a[8]=h,a[12]=0,a[1]=0,a[5]=c,a[9]=u,a[13]=0,a[2]=0,a[6]=0,a[10]=f,a[14]=d,a[3]=0,a[7]=0,a[11]=-1,a[15]=0,this}makeOrthographic(e,t,n,r,s,o){const a=this.elements,l=1/(t-e),c=1/(n-r),h=1/(o-s),u=(t+e)*l,f=(n+r)*c,d=(o+s)*h;return a[0]=2*l,a[4]=0,a[8]=0,a[12]=-u,a[1]=0,a[5]=2*c,a[9]=0,a[13]=-f,a[2]=0,a[6]=0,a[10]=-2*h,a[14]=-d,a[3]=0,a[7]=0,a[11]=0,a[15]=1,this}equals(e){const t=this.elements,n=e.elements;for(let r=0;r<16;r++)if(t[r]!==n[r])return!1;return!0}fromArray(e,t=0){for(let n=0;n<16;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){const n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e[t+9]=n[9],e[t+10]=n[10],e[t+11]=n[11],e[t+12]=n[12],e[t+13]=n[13],e[t+14]=n[14],e[t+15]=n[15],e}}Me.prototype.isMatrix4=!0;const ei=new C,zt=new Me,tm=new C(0,0,0),nm=new C(1,1,1),gn=new C,Br=new C,Tt=new C,tc=new Me,nc=new _t;class zi{constructor(e=0,t=0,n=0,r=zi.DefaultOrder){this._x=e,this._y=t,this._z=n,this._order=r}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,n,r=this._order){return this._x=e,this._y=t,this._z=n,this._order=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,n=!0){const r=e.elements,s=r[0],o=r[4],a=r[8],l=r[1],c=r[5],h=r[9],u=r[2],f=r[6],d=r[10];switch(t){case"XYZ":this._y=Math.asin(wt(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-h,d),this._z=Math.atan2(-o,s)):(this._x=Math.atan2(f,c),this._z=0);break;case"YXZ":this._x=Math.asin(-wt(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(a,d),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-u,s),this._z=0);break;case"ZXY":this._x=Math.asin(wt(f,-1,1)),Math.abs(f)<.9999999?(this._y=Math.atan2(-u,d),this._z=Math.atan2(-o,c)):(this._y=0,this._z=Math.atan2(l,s));break;case"ZYX":this._y=Math.asin(-wt(u,-1,1)),Math.abs(u)<.9999999?(this._x=Math.atan2(f,d),this._z=Math.atan2(l,s)):(this._x=0,this._z=Math.atan2(-o,c));break;case"YZX":this._z=Math.asin(wt(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-h,c),this._y=Math.atan2(-u,s)):(this._x=0,this._y=Math.atan2(a,d));break;case"XZY":this._z=Math.asin(-wt(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(f,c),this._y=Math.atan2(a,s)):(this._x=Math.atan2(-h,d),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,n===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,n){return tc.makeRotationFromQuaternion(e),this.setFromRotationMatrix(tc,t,n)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return nc.setFromEuler(this),this.setFromQuaternion(nc,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}toVector3(e){return e?e.set(this._x,this._y,this._z):new C(this._x,this._y,this._z)}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}}zi.prototype.isEuler=!0;zi.DefaultOrder="XYZ";zi.RotationOrders=["XYZ","YZX","ZXY","XZY","YXZ","ZYX"];class eh{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let im=0;const ic=new C,ti=new _t,on=new Me,Or=new C,qi=new C,rm=new C,sm=new _t,rc=new C(1,0,0),sc=new C(0,1,0),oc=new C(0,0,1),om={type:"added"},ac={type:"removed"};class He extends Ln{constructor(){super(),Object.defineProperty(this,"id",{value:im++}),this.uuid=Qt(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=He.DefaultUp.clone();const e=new C,t=new zi,n=new _t,r=new C(1,1,1);function s(){n.setFromEuler(t,!1)}function o(){t.setFromQuaternion(n,void 0,!1)}t._onChange(s),n._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:r},modelViewMatrix:{value:new Me},normalMatrix:{value:new ft}}),this.matrix=new Me,this.matrixWorld=new Me,this.matrixAutoUpdate=He.DefaultMatrixAutoUpdate,this.matrixWorldNeedsUpdate=!1,this.layers=new eh,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return ti.setFromAxisAngle(e,t),this.quaternion.multiply(ti),this}rotateOnWorldAxis(e,t){return ti.setFromAxisAngle(e,t),this.quaternion.premultiply(ti),this}rotateX(e){return this.rotateOnAxis(rc,e)}rotateY(e){return this.rotateOnAxis(sc,e)}rotateZ(e){return this.rotateOnAxis(oc,e)}translateOnAxis(e,t){return ic.copy(e).applyQuaternion(this.quaternion),this.position.add(ic.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(rc,e)}translateY(e){return this.translateOnAxis(sc,e)}translateZ(e){return this.translateOnAxis(oc,e)}localToWorld(e){return e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return e.applyMatrix4(on.copy(this.matrixWorld).invert())}lookAt(e,t,n){e.isVector3?Or.copy(e):Or.set(e,t,n);const r=this.parent;this.updateWorldMatrix(!0,!1),qi.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?on.lookAt(qi,Or,this.up):on.lookAt(Or,qi,this.up),this.quaternion.setFromRotationMatrix(on),r&&(on.extractRotation(r.matrixWorld),ti.setFromRotationMatrix(on),this.quaternion.premultiply(ti.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.parent!==null&&e.parent.remove(e),e.parent=this,this.children.push(e),e.dispatchEvent(om)):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}const t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(ac)),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){for(let e=0;e<this.children.length;e++){const t=this.children[e];t.parent=null,t.dispatchEvent(ac)}return this.children.length=0,this}attach(e){return this.updateWorldMatrix(!0,!1),on.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),on.multiply(e.parent.matrixWorld)),e.applyMatrix4(on),this.add(e),e.updateWorldMatrix(!1,!0),this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let n=0,r=this.children.length;n<r;n++){const o=this.children[n].getObjectByProperty(e,t);if(o!==void 0)return o}}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(qi,e,rm),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(qi,sm,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);const t=this.children;for(let n=0,r=t.length;n<r;n++)t[n].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const t=this.children;for(let n=0,r=t.length;n<r;n++)t[n].traverseVisible(e)}traverseAncestors(e){const t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),this.matrixWorldNeedsUpdate=!1,e=!0);const t=this.children;for(let n=0,r=t.length;n<r;n++)t[n].updateMatrixWorld(e)}updateWorldMatrix(e,t){const n=this.parent;if(e===!0&&n!==null&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),t===!0){const r=this.children;for(let s=0,o=r.length;s<o;s++)r[s].updateWorldMatrix(!1,!0)}}toJSON(e){const t=e===void 0||typeof e=="string",n={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{}},n.metadata={version:4.5,type:"Object",generator:"Object3D.toJSON"});const r={};r.uuid=this.uuid,r.type=this.type,this.name!==""&&(r.name=this.name),this.castShadow===!0&&(r.castShadow=!0),this.receiveShadow===!0&&(r.receiveShadow=!0),this.visible===!1&&(r.visible=!1),this.frustumCulled===!1&&(r.frustumCulled=!1),this.renderOrder!==0&&(r.renderOrder=this.renderOrder),JSON.stringify(this.userData)!=="{}"&&(r.userData=this.userData),r.layers=this.layers.mask,r.matrix=this.matrix.toArray(),this.matrixAutoUpdate===!1&&(r.matrixAutoUpdate=!1),this.isInstancedMesh&&(r.type="InstancedMesh",r.count=this.count,r.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(r.instanceColor=this.instanceColor.toJSON()));function s(a,l){return a[l.uuid]===void 0&&(a[l.uuid]=l.toJSON(e)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?r.background=this.background.toJSON():this.background.isTexture&&(r.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&(r.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){r.geometry=s(e.geometries,this.geometry);const a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){const l=a.shapes;if(Array.isArray(l))for(let c=0,h=l.length;c<h;c++){const u=l[c];s(e.shapes,u)}else s(e.shapes,l)}}if(this.isSkinnedMesh&&(r.bindMode=this.bindMode,r.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(s(e.skeletons,this.skeleton),r.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const a=[];for(let l=0,c=this.material.length;l<c;l++)a.push(s(e.materials,this.material[l]));r.material=a}else r.material=s(e.materials,this.material);if(this.children.length>0){r.children=[];for(let a=0;a<this.children.length;a++)r.children.push(this.children[a].toJSON(e).object)}if(this.animations.length>0){r.animations=[];for(let a=0;a<this.animations.length;a++){const l=this.animations[a];r.animations.push(s(e.animations,l))}}if(t){const a=o(e.geometries),l=o(e.materials),c=o(e.textures),h=o(e.images),u=o(e.shapes),f=o(e.skeletons),d=o(e.animations);a.length>0&&(n.geometries=a),l.length>0&&(n.materials=l),c.length>0&&(n.textures=c),h.length>0&&(n.images=h),u.length>0&&(n.shapes=u),f.length>0&&(n.skeletons=f),d.length>0&&(n.animations=d)}return n.object=r,n;function o(a){const l=[];for(const c in a){const h=a[c];delete h.metadata,l.push(h)}return l}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let n=0;n<e.children.length;n++){const r=e.children[n];this.add(r.clone())}return this}}He.DefaultUp=new C(0,1,0);He.DefaultMatrixAutoUpdate=!0;He.prototype.isObject3D=!0;const Bt=new C,an=new C,ho=new C,ln=new C,ni=new C,ii=new C,lc=new C,fo=new C,po=new C,mo=new C;class ot{constructor(e=new C,t=new C,n=new C){this.a=e,this.b=t,this.c=n}static getNormal(e,t,n,r){r.subVectors(n,t),Bt.subVectors(e,t),r.cross(Bt);const s=r.lengthSq();return s>0?r.multiplyScalar(1/Math.sqrt(s)):r.set(0,0,0)}static getBarycoord(e,t,n,r,s){Bt.subVectors(r,t),an.subVectors(n,t),ho.subVectors(e,t);const o=Bt.dot(Bt),a=Bt.dot(an),l=Bt.dot(ho),c=an.dot(an),h=an.dot(ho),u=o*c-a*a;if(u===0)return s.set(-2,-1,-1);const f=1/u,d=(c*l-a*h)*f,g=(o*h-a*l)*f;return s.set(1-d-g,g,d)}static containsPoint(e,t,n,r){return this.getBarycoord(e,t,n,r,ln),ln.x>=0&&ln.y>=0&&ln.x+ln.y<=1}static getUV(e,t,n,r,s,o,a,l){return this.getBarycoord(e,t,n,r,ln),l.set(0,0),l.addScaledVector(s,ln.x),l.addScaledVector(o,ln.y),l.addScaledVector(a,ln.z),l}static isFrontFacing(e,t,n,r){return Bt.subVectors(n,t),an.subVectors(e,t),Bt.cross(an).dot(r)<0}set(e,t,n){return this.a.copy(e),this.b.copy(t),this.c.copy(n),this}setFromPointsAndIndices(e,t,n,r){return this.a.copy(e[t]),this.b.copy(e[n]),this.c.copy(e[r]),this}setFromAttributeAndIndices(e,t,n,r){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,n),this.c.fromBufferAttribute(e,r),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return Bt.subVectors(this.c,this.b),an.subVectors(this.a,this.b),Bt.cross(an).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return ot.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return ot.getBarycoord(e,this.a,this.b,this.c,t)}getUV(e,t,n,r,s){return ot.getUV(e,this.a,this.b,this.c,t,n,r,s)}containsPoint(e){return ot.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return ot.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){const n=this.a,r=this.b,s=this.c;let o,a;ni.subVectors(r,n),ii.subVectors(s,n),fo.subVectors(e,n);const l=ni.dot(fo),c=ii.dot(fo);if(l<=0&&c<=0)return t.copy(n);po.subVectors(e,r);const h=ni.dot(po),u=ii.dot(po);if(h>=0&&u<=h)return t.copy(r);const f=l*u-h*c;if(f<=0&&l>=0&&h<=0)return o=l/(l-h),t.copy(n).addScaledVector(ni,o);mo.subVectors(e,s);const d=ni.dot(mo),g=ii.dot(mo);if(g>=0&&d<=g)return t.copy(s);const _=d*c-l*g;if(_<=0&&c>=0&&g<=0)return a=c/(c-g),t.copy(n).addScaledVector(ii,a);const v=h*g-d*u;if(v<=0&&u-h>=0&&d-g>=0)return lc.subVectors(s,r),a=(u-h)/(u-h+(d-g)),t.copy(r).addScaledVector(lc,a);const p=1/(v+_+f);return o=_*p,a=f*p,t.copy(n).addScaledVector(ni,o).addScaledVector(ii,a)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}let am=0;class yt extends Ln{constructor(){super(),Object.defineProperty(this,"id",{value:am++}),this.uuid=Qt(),this.name="",this.type="Material",this.fog=!0,this.blending=ir,this.side=hr,this.vertexColors=!1,this.opacity=1,this.format=ct,this.transparent=!1,this.blendSrc=$u,this.blendDst=Zu,this.blendEquation=mi,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.depthFunc=ta,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=$p,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=eo,this.stencilZFail=eo,this.stencilZPass=eo,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBuild(){}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const t in e){const n=e[t];if(n===void 0){console.warn("THREE.Material: '"+t+"' parameter is undefined.");continue}if(t==="shading"){console.warn("THREE."+this.type+": .shading has been removed. Use the boolean .flatShading instead."),this.flatShading=n===ju;continue}const r=this[t];if(r===void 0){console.warn("THREE."+this.type+": '"+t+"' is not a property of this material.");continue}r&&r.isColor?r.set(n):r&&r.isVector3&&n&&n.isVector3?r.copy(n):this[t]=n}}toJSON(e){const t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});const n={metadata:{version:4.5,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(e).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(e).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(e).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(e).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(e).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==ir&&(n.blending=this.blending),this.side!==hr&&(n.side=this.side),this.vertexColors&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.format!==ct&&(n.format=this.format),this.transparent===!0&&(n.transparent=this.transparent),n.depthFunc=this.depthFunc,n.depthTest=this.depthTest,n.depthWrite=this.depthWrite,n.colorWrite=this.colorWrite,n.stencilWrite=this.stencilWrite,n.stencilWriteMask=this.stencilWriteMask,n.stencilFunc=this.stencilFunc,n.stencilRef=this.stencilRef,n.stencilFuncMask=this.stencilFuncMask,n.stencilFail=this.stencilFail,n.stencilZFail=this.stencilZFail,n.stencilZPass=this.stencilZPass,this.rotation&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaToCoverage===!0&&(n.alphaToCoverage=this.alphaToCoverage),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=this.premultipliedAlpha),this.wireframe===!0&&(n.wireframe=this.wireframe),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=this.flatShading),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),JSON.stringify(this.userData)!=="{}"&&(n.userData=this.userData);function r(s){const o=[];for(const a in s){const l=s[a];delete l.metadata,o.push(l)}return o}if(t){const s=r(e.textures),o=r(e.images);s.length>0&&(n.textures=s),o.length>0&&(n.images=o)}return n}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.fog=e.fog,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.format=e.format,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const t=e.clippingPlanes;let n=null;if(t!==null){const r=t.length;n=new Array(r);for(let s=0;s!==r;++s)n[s]=t[s].clone()}return this.clippingPlanes=n,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}}yt.prototype.isMaterial=!0;const th={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Ot={h:0,s:0,l:0},kr={h:0,s:0,l:0};function go(i,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?i+(e-i)*6*t:t<1/2?e:t<2/3?i+(e-i)*6*(2/3-t):i}function _o(i){return i<.04045?i*.0773993808:Math.pow(i*.9478672986+.0521327014,2.4)}function vo(i){return i<.0031308?i*12.92:1.055*Math.pow(i,.41666)-.055}class ve{constructor(e,t,n){return t===void 0&&n===void 0?this.set(e):this.setRGB(e,t,n)}set(e){return e&&e.isColor?this.copy(e):typeof e=="number"?this.setHex(e):typeof e=="string"&&this.setStyle(e),this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,this}setRGB(e,t,n){return this.r=e,this.g=t,this.b=n,this}setHSL(e,t,n){if(e=Zp(e,1),t=wt(t,0,1),n=wt(n,0,1),t===0)this.r=this.g=this.b=n;else{const r=n<=.5?n*(1+t):n+t-n*t,s=2*n-r;this.r=go(s,r,e+1/3),this.g=go(s,r,e),this.b=go(s,r,e-1/3)}return this}setStyle(e){function t(r){r!==void 0&&parseFloat(r)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let n;if(n=/^((?:rgb|hsl)a?)\(([^\)]*)\)/.exec(e)){let r;const s=n[1],o=n[2];switch(s){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return this.r=Math.min(255,parseInt(r[1],10))/255,this.g=Math.min(255,parseInt(r[2],10))/255,this.b=Math.min(255,parseInt(r[3],10))/255,t(r[4]),this;if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return this.r=Math.min(100,parseInt(r[1],10))/100,this.g=Math.min(100,parseInt(r[2],10))/100,this.b=Math.min(100,parseInt(r[3],10))/100,t(r[4]),this;break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o)){const a=parseFloat(r[1])/360,l=parseInt(r[2],10)/100,c=parseInt(r[3],10)/100;return t(r[4]),this.setHSL(a,l,c)}break}}else if(n=/^\#([A-Fa-f\d]+)$/.exec(e)){const r=n[1],s=r.length;if(s===3)return this.r=parseInt(r.charAt(0)+r.charAt(0),16)/255,this.g=parseInt(r.charAt(1)+r.charAt(1),16)/255,this.b=parseInt(r.charAt(2)+r.charAt(2),16)/255,this;if(s===6)return this.r=parseInt(r.charAt(0)+r.charAt(1),16)/255,this.g=parseInt(r.charAt(2)+r.charAt(3),16)/255,this.b=parseInt(r.charAt(4)+r.charAt(5),16)/255,this}return e&&e.length>0?this.setColorName(e):this}setColorName(e){const t=th[e.toLowerCase()];return t!==void 0?this.setHex(t):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=_o(e.r),this.g=_o(e.g),this.b=_o(e.b),this}copyLinearToSRGB(e){return this.r=vo(e.r),this.g=vo(e.g),this.b=vo(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(){return this.r*255<<16^this.g*255<<8^this.b*255<<0}getHexString(){return("000000"+this.getHex().toString(16)).slice(-6)}getHSL(e){const t=this.r,n=this.g,r=this.b,s=Math.max(t,n,r),o=Math.min(t,n,r);let a,l;const c=(o+s)/2;if(o===s)a=0,l=0;else{const h=s-o;switch(l=c<=.5?h/(s+o):h/(2-s-o),s){case t:a=(n-r)/h+(n<r?6:0);break;case n:a=(r-t)/h+2;break;case r:a=(t-n)/h+4;break}a/=6}return e.h=a,e.s=l,e.l=c,e}getStyle(){return"rgb("+(this.r*255|0)+","+(this.g*255|0)+","+(this.b*255|0)+")"}offsetHSL(e,t,n){return this.getHSL(Ot),Ot.h+=e,Ot.s+=t,Ot.l+=n,this.setHSL(Ot.h,Ot.s,Ot.l),this}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,n){return this.r=e.r+(t.r-e.r)*n,this.g=e.g+(t.g-e.g)*n,this.b=e.b+(t.b-e.b)*n,this}lerpHSL(e,t){this.getHSL(Ot),e.getHSL(kr);const n=no(Ot.h,kr.h,t),r=no(Ot.s,kr.s,t),s=no(Ot.l,kr.l,t);return this.setHSL(n,r,s),this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),e.normalized===!0&&(this.r/=255,this.g/=255,this.b/=255),this}toJSON(){return this.getHex()}}ve.NAMES=th;ve.prototype.isColor=!0;ve.prototype.r=1;ve.prototype.g=1;ve.prototype.b=1;class br extends yt{constructor(e){super(),this.type="MeshBasicMaterial",this.color=new ve(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.combine=Ds,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this}}br.prototype.isMeshBasicMaterial=!0;const Xe=new C,Ur=new Z;class at{constructor(e,t,n){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=n===!0,this.usage=dr,this.updateRange={offset:0,count:-1},this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this}copyAt(e,t,n){e*=this.itemSize,n*=t.itemSize;for(let r=0,s=this.itemSize;r<s;r++)this.array[e+r]=t.array[n+r];return this}copyArray(e){return this.array.set(e),this}copyColorsArray(e){const t=this.array;let n=0;for(let r=0,s=e.length;r<s;r++){let o=e[r];o===void 0&&(console.warn("THREE.BufferAttribute.copyColorsArray(): color is undefined",r),o=new ve),t[n++]=o.r,t[n++]=o.g,t[n++]=o.b}return this}copyVector2sArray(e){const t=this.array;let n=0;for(let r=0,s=e.length;r<s;r++){let o=e[r];o===void 0&&(console.warn("THREE.BufferAttribute.copyVector2sArray(): vector is undefined",r),o=new Z),t[n++]=o.x,t[n++]=o.y}return this}copyVector3sArray(e){const t=this.array;let n=0;for(let r=0,s=e.length;r<s;r++){let o=e[r];o===void 0&&(console.warn("THREE.BufferAttribute.copyVector3sArray(): vector is undefined",r),o=new C),t[n++]=o.x,t[n++]=o.y,t[n++]=o.z}return this}copyVector4sArray(e){const t=this.array;let n=0;for(let r=0,s=e.length;r<s;r++){let o=e[r];o===void 0&&(console.warn("THREE.BufferAttribute.copyVector4sArray(): vector is undefined",r),o=new qe),t[n++]=o.x,t[n++]=o.y,t[n++]=o.z,t[n++]=o.w}return this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,n=this.count;t<n;t++)Ur.fromBufferAttribute(this,t),Ur.applyMatrix3(e),this.setXY(t,Ur.x,Ur.y);else if(this.itemSize===3)for(let t=0,n=this.count;t<n;t++)Xe.fromBufferAttribute(this,t),Xe.applyMatrix3(e),this.setXYZ(t,Xe.x,Xe.y,Xe.z);return this}applyMatrix4(e){for(let t=0,n=this.count;t<n;t++)Xe.x=this.getX(t),Xe.y=this.getY(t),Xe.z=this.getZ(t),Xe.applyMatrix4(e),this.setXYZ(t,Xe.x,Xe.y,Xe.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)Xe.x=this.getX(t),Xe.y=this.getY(t),Xe.z=this.getZ(t),Xe.applyNormalMatrix(e),this.setXYZ(t,Xe.x,Xe.y,Xe.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)Xe.x=this.getX(t),Xe.y=this.getY(t),Xe.z=this.getZ(t),Xe.transformDirection(e),this.setXYZ(t,Xe.x,Xe.y,Xe.z);return this}set(e,t=0){return this.array.set(e,t),this}getX(e){return this.array[e*this.itemSize]}setX(e,t){return this.array[e*this.itemSize]=t,this}getY(e){return this.array[e*this.itemSize+1]}setY(e,t){return this.array[e*this.itemSize+1]=t,this}getZ(e){return this.array[e*this.itemSize+2]}setZ(e,t){return this.array[e*this.itemSize+2]=t,this}getW(e){return this.array[e*this.itemSize+3]}setW(e,t){return this.array[e*this.itemSize+3]=t,this}setXY(e,t,n){return e*=this.itemSize,this.array[e+0]=t,this.array[e+1]=n,this}setXYZ(e,t,n,r){return e*=this.itemSize,this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=r,this}setXYZW(e,t,n,r,s){return e*=this.itemSize,this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=r,this.array[e+3]=s,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.prototype.slice.call(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==dr&&(e.usage=this.usage),(this.updateRange.offset!==0||this.updateRange.count!==-1)&&(e.updateRange=this.updateRange),e}}at.prototype.isBufferAttribute=!0;class nh extends at{constructor(e,t,n){super(new Uint16Array(e),t,n)}}class ih extends at{constructor(e,t,n){super(new Uint32Array(e),t,n)}}class lm extends at{constructor(e,t,n){super(new Uint16Array(e),t,n)}}lm.prototype.isFloat16BufferAttribute=!0;class tt extends at{constructor(e,t,n){super(new Float32Array(e),t,n)}}let cm=0;const Pt=new Me,xo=new He,ri=new C,Et=new Nt,Xi=new Nt,lt=new C;class je extends Ln{constructor(){super(),Object.defineProperty(this,"id",{value:cm++}),this.uuid=Qt(),this.name="",this.type="BufferGeometry",this.index=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(Ku(e)>65535?ih:nh)(e,1):this.index=e,this}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,n=0){this.groups.push({start:e,count:t,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){const t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);const n=this.attributes.normal;if(n!==void 0){const s=new ft().getNormalMatrix(e);n.applyNormalMatrix(s),n.needsUpdate=!0}const r=this.attributes.tangent;return r!==void 0&&(r.transformDirection(e),r.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return Pt.makeRotationFromQuaternion(e),this.applyMatrix4(Pt),this}rotateX(e){return Pt.makeRotationX(e),this.applyMatrix4(Pt),this}rotateY(e){return Pt.makeRotationY(e),this.applyMatrix4(Pt),this}rotateZ(e){return Pt.makeRotationZ(e),this.applyMatrix4(Pt),this}translate(e,t,n){return Pt.makeTranslation(e,t,n),this.applyMatrix4(Pt),this}scale(e,t,n){return Pt.makeScale(e,t,n),this.applyMatrix4(Pt),this}lookAt(e){return xo.lookAt(e),xo.updateMatrix(),this.applyMatrix4(xo.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(ri).negate(),this.translate(ri.x,ri.y,ri.z),this}setFromPoints(e){const t=[];for(let n=0,r=e.length;n<r;n++){const s=e[n];t.push(s.x,s.y,s.z||0)}return this.setAttribute("position",new tt(t,3)),this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Nt);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingBox.set(new C(-1/0,-1/0,-1/0),new C(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let n=0,r=t.length;n<r;n++){const s=t[n];Et.setFromBufferAttribute(s),this.morphTargetsRelative?(lt.addVectors(this.boundingBox.min,Et.min),this.boundingBox.expandByPoint(lt),lt.addVectors(this.boundingBox.max,Et.max),this.boundingBox.expandByPoint(lt)):(this.boundingBox.expandByPoint(Et.min),this.boundingBox.expandByPoint(Et.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Ni);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingSphere.set(new C,1/0);return}if(e){const n=this.boundingSphere.center;if(Et.setFromBufferAttribute(e),t)for(let s=0,o=t.length;s<o;s++){const a=t[s];Xi.setFromBufferAttribute(a),this.morphTargetsRelative?(lt.addVectors(Et.min,Xi.min),Et.expandByPoint(lt),lt.addVectors(Et.max,Xi.max),Et.expandByPoint(lt)):(Et.expandByPoint(Xi.min),Et.expandByPoint(Xi.max))}Et.getCenter(n);let r=0;for(let s=0,o=e.count;s<o;s++)lt.fromBufferAttribute(e,s),r=Math.max(r,n.distanceToSquared(lt));if(t)for(let s=0,o=t.length;s<o;s++){const a=t[s],l=this.morphTargetsRelative;for(let c=0,h=a.count;c<h;c++)lt.fromBufferAttribute(a,c),l&&(ri.fromBufferAttribute(e,c),lt.add(ri)),r=Math.max(r,n.distanceToSquared(lt))}this.boundingSphere.radius=Math.sqrt(r),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const n=e.array,r=t.position.array,s=t.normal.array,o=t.uv.array,a=r.length/3;t.tangent===void 0&&this.setAttribute("tangent",new at(new Float32Array(4*a),4));const l=t.tangent.array,c=[],h=[];for(let k=0;k<a;k++)c[k]=new C,h[k]=new C;const u=new C,f=new C,d=new C,g=new Z,_=new Z,v=new Z,p=new C,m=new C;function y(k,P,w){u.fromArray(r,k*3),f.fromArray(r,P*3),d.fromArray(r,w*3),g.fromArray(o,k*2),_.fromArray(o,P*2),v.fromArray(o,w*2),f.sub(u),d.sub(u),_.sub(g),v.sub(g);const b=1/(_.x*v.y-v.x*_.y);isFinite(b)&&(p.copy(f).multiplyScalar(v.y).addScaledVector(d,-_.y).multiplyScalar(b),m.copy(d).multiplyScalar(_.x).addScaledVector(f,-v.x).multiplyScalar(b),c[k].add(p),c[P].add(p),c[w].add(p),h[k].add(m),h[P].add(m),h[w].add(m))}let x=this.groups;x.length===0&&(x=[{start:0,count:n.length}]);for(let k=0,P=x.length;k<P;++k){const w=x[k],b=w.start,F=w.count;for(let I=b,N=b+F;I<N;I+=3)y(n[I+0],n[I+1],n[I+2])}const M=new C,R=new C,D=new C,O=new C;function j(k){D.fromArray(s,k*3),O.copy(D);const P=c[k];M.copy(P),M.sub(D.multiplyScalar(D.dot(P))).normalize(),R.crossVectors(O,P);const b=R.dot(h[k])<0?-1:1;l[k*4]=M.x,l[k*4+1]=M.y,l[k*4+2]=M.z,l[k*4+3]=b}for(let k=0,P=x.length;k<P;++k){const w=x[k],b=w.start,F=w.count;for(let I=b,N=b+F;I<N;I+=3)j(n[I+0]),j(n[I+1]),j(n[I+2])}}computeVertexNormals(){const e=this.index,t=this.getAttribute("position");if(t!==void 0){let n=this.getAttribute("normal");if(n===void 0)n=new at(new Float32Array(t.count*3),3),this.setAttribute("normal",n);else for(let f=0,d=n.count;f<d;f++)n.setXYZ(f,0,0,0);const r=new C,s=new C,o=new C,a=new C,l=new C,c=new C,h=new C,u=new C;if(e)for(let f=0,d=e.count;f<d;f+=3){const g=e.getX(f+0),_=e.getX(f+1),v=e.getX(f+2);r.fromBufferAttribute(t,g),s.fromBufferAttribute(t,_),o.fromBufferAttribute(t,v),h.subVectors(o,s),u.subVectors(r,s),h.cross(u),a.fromBufferAttribute(n,g),l.fromBufferAttribute(n,_),c.fromBufferAttribute(n,v),a.add(h),l.add(h),c.add(h),n.setXYZ(g,a.x,a.y,a.z),n.setXYZ(_,l.x,l.y,l.z),n.setXYZ(v,c.x,c.y,c.z)}else for(let f=0,d=t.count;f<d;f+=3)r.fromBufferAttribute(t,f+0),s.fromBufferAttribute(t,f+1),o.fromBufferAttribute(t,f+2),h.subVectors(o,s),u.subVectors(r,s),h.cross(u),n.setXYZ(f+0,h.x,h.y,h.z),n.setXYZ(f+1,h.x,h.y,h.z),n.setXYZ(f+2,h.x,h.y,h.z);this.normalizeNormals(),n.needsUpdate=!0}}merge(e,t){if(!(e&&e.isBufferGeometry)){console.error("THREE.BufferGeometry.merge(): geometry not an instance of THREE.BufferGeometry.",e);return}t===void 0&&(t=0,console.warn("THREE.BufferGeometry.merge(): Overwriting original geometry, starting at offset=0. Use BufferGeometryUtils.mergeBufferGeometries() for lossless merge."));const n=this.attributes;for(const r in n){if(e.attributes[r]===void 0)continue;const o=n[r].array,a=e.attributes[r],l=a.array,c=a.itemSize*t,h=Math.min(l.length,o.length-c);for(let u=0,f=c;u<h;u++,f++)o[f]=l[u]}return this}normalizeNormals(){const e=this.attributes.normal;for(let t=0,n=e.count;t<n;t++)lt.fromBufferAttribute(e,t),lt.normalize(),e.setXYZ(t,lt.x,lt.y,lt.z)}toNonIndexed(){function e(a,l){const c=a.array,h=a.itemSize,u=a.normalized,f=new c.constructor(l.length*h);let d=0,g=0;for(let _=0,v=l.length;_<v;_++){a.isInterleavedBufferAttribute?d=l[_]*a.data.stride+a.offset:d=l[_]*h;for(let p=0;p<h;p++)f[g++]=c[d++]}return new at(f,h,u)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const t=new je,n=this.index.array,r=this.attributes;for(const a in r){const l=r[a],c=e(l,n);t.setAttribute(a,c)}const s=this.morphAttributes;for(const a in s){const l=[],c=s[a];for(let h=0,u=c.length;h<u;h++){const f=c[h],d=e(f,n);l.push(d)}t.morphAttributes[a]=l}t.morphTargetsRelative=this.morphTargetsRelative;const o=this.groups;for(let a=0,l=o.length;a<l;a++){const c=o[a];t.addGroup(c.start,c.count,c.materialIndex)}return t}toJSON(){const e={metadata:{version:4.5,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const l=this.parameters;for(const c in l)l[c]!==void 0&&(e[c]=l[c]);return e}e.data={attributes:{}};const t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});const n=this.attributes;for(const l in n){const c=n[l];e.data.attributes[l]=c.toJSON(e.data)}const r={};let s=!1;for(const l in this.morphAttributes){const c=this.morphAttributes[l],h=[];for(let u=0,f=c.length;u<f;u++){const d=c[u];h.push(d.toJSON(e.data))}h.length>0&&(r[l]=h,s=!0)}s&&(e.data.morphAttributes=r,e.data.morphTargetsRelative=this.morphTargetsRelative);const o=this.groups;o.length>0&&(e.data.groups=JSON.parse(JSON.stringify(o)));const a=this.boundingSphere;return a!==null&&(e.data.boundingSphere={center:a.center.toArray(),radius:a.radius}),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const t={};this.name=e.name;const n=e.index;n!==null&&this.setIndex(n.clone(t));const r=e.attributes;for(const c in r){const h=r[c];this.setAttribute(c,h.clone(t))}const s=e.morphAttributes;for(const c in s){const h=[],u=s[c];for(let f=0,d=u.length;f<d;f++)h.push(u[f].clone(t));this.morphAttributes[c]=h}this.morphTargetsRelative=e.morphTargetsRelative;const o=e.groups;for(let c=0,h=o.length;c<h;c++){const u=o[c];this.addGroup(u.start,u.count,u.materialIndex)}const a=e.boundingBox;a!==null&&(this.boundingBox=a.clone());const l=e.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,e.parameters!==void 0&&(this.parameters=Object.assign({},e.parameters)),this}dispose(){this.dispatchEvent({type:"dispose"})}}je.prototype.isBufferGeometry=!0;const cc=new Me,si=new Fi,yo=new Ni,_n=new C,vn=new C,xn=new C,Mo=new C,bo=new C,wo=new C,Hr=new C,Gr=new C,Vr=new C,Wr=new Z,qr=new Z,Xr=new Z,So=new C,Yr=new C;class gt extends He{constructor(e=new je,t=new br){super(),this.type="Mesh",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e){return super.copy(e),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=e.material,this.geometry=e.geometry,this}updateMorphTargets(){const e=this.geometry;if(e.isBufferGeometry){const t=e.morphAttributes,n=Object.keys(t);if(n.length>0){const r=t[n[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,o=r.length;s<o;s++){const a=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=s}}}}else{const t=e.morphTargets;t!==void 0&&t.length>0&&console.error("THREE.Mesh.updateMorphTargets() no longer supports THREE.Geometry. Use THREE.BufferGeometry instead.")}}raycast(e,t){const n=this.geometry,r=this.material,s=this.matrixWorld;if(r===void 0||(n.boundingSphere===null&&n.computeBoundingSphere(),yo.copy(n.boundingSphere),yo.applyMatrix4(s),e.ray.intersectsSphere(yo)===!1)||(cc.copy(s).invert(),si.copy(e.ray).applyMatrix4(cc),n.boundingBox!==null&&si.intersectsBox(n.boundingBox)===!1))return;let o;if(n.isBufferGeometry){const a=n.index,l=n.attributes.position,c=n.morphAttributes.position,h=n.morphTargetsRelative,u=n.attributes.uv,f=n.attributes.uv2,d=n.groups,g=n.drawRange;if(a!==null)if(Array.isArray(r))for(let _=0,v=d.length;_<v;_++){const p=d[_],m=r[p.materialIndex],y=Math.max(p.start,g.start),x=Math.min(a.count,Math.min(p.start+p.count,g.start+g.count));for(let M=y,R=x;M<R;M+=3){const D=a.getX(M),O=a.getX(M+1),j=a.getX(M+2);o=jr(this,m,e,si,l,c,h,u,f,D,O,j),o&&(o.faceIndex=Math.floor(M/3),o.face.materialIndex=p.materialIndex,t.push(o))}}else{const _=Math.max(0,g.start),v=Math.min(a.count,g.start+g.count);for(let p=_,m=v;p<m;p+=3){const y=a.getX(p),x=a.getX(p+1),M=a.getX(p+2);o=jr(this,r,e,si,l,c,h,u,f,y,x,M),o&&(o.faceIndex=Math.floor(p/3),t.push(o))}}else if(l!==void 0)if(Array.isArray(r))for(let _=0,v=d.length;_<v;_++){const p=d[_],m=r[p.materialIndex],y=Math.max(p.start,g.start),x=Math.min(l.count,Math.min(p.start+p.count,g.start+g.count));for(let M=y,R=x;M<R;M+=3){const D=M,O=M+1,j=M+2;o=jr(this,m,e,si,l,c,h,u,f,D,O,j),o&&(o.faceIndex=Math.floor(M/3),o.face.materialIndex=p.materialIndex,t.push(o))}}else{const _=Math.max(0,g.start),v=Math.min(l.count,g.start+g.count);for(let p=_,m=v;p<m;p+=3){const y=p,x=p+1,M=p+2;o=jr(this,r,e,si,l,c,h,u,f,y,x,M),o&&(o.faceIndex=Math.floor(p/3),t.push(o))}}}else n.isGeometry&&console.error("THREE.Mesh.raycast() no longer supports THREE.Geometry. Use THREE.BufferGeometry instead.")}}gt.prototype.isMesh=!0;function um(i,e,t,n,r,s,o,a){let l;if(e.side===rt?l=n.intersectTriangle(o,s,r,!0,a):l=n.intersectTriangle(r,s,o,e.side!==Ai,a),l===null)return null;Yr.copy(a),Yr.applyMatrix4(i.matrixWorld);const c=t.ray.origin.distanceTo(Yr);return c<t.near||c>t.far?null:{distance:c,point:Yr.clone(),object:i}}function jr(i,e,t,n,r,s,o,a,l,c,h,u){_n.fromBufferAttribute(r,c),vn.fromBufferAttribute(r,h),xn.fromBufferAttribute(r,u);const f=i.morphTargetInfluences;if(s&&f){Hr.set(0,0,0),Gr.set(0,0,0),Vr.set(0,0,0);for(let g=0,_=s.length;g<_;g++){const v=f[g],p=s[g];v!==0&&(Mo.fromBufferAttribute(p,c),bo.fromBufferAttribute(p,h),wo.fromBufferAttribute(p,u),o?(Hr.addScaledVector(Mo,v),Gr.addScaledVector(bo,v),Vr.addScaledVector(wo,v)):(Hr.addScaledVector(Mo.sub(_n),v),Gr.addScaledVector(bo.sub(vn),v),Vr.addScaledVector(wo.sub(xn),v)))}_n.add(Hr),vn.add(Gr),xn.add(Vr)}i.isSkinnedMesh&&(i.boneTransform(c,_n),i.boneTransform(h,vn),i.boneTransform(u,xn));const d=um(i,e,t,n,_n,vn,xn,So);if(d){a&&(Wr.fromBufferAttribute(a,c),qr.fromBufferAttribute(a,h),Xr.fromBufferAttribute(a,u),d.uv=ot.getUV(So,_n,vn,xn,Wr,qr,Xr,new Z)),l&&(Wr.fromBufferAttribute(l,c),qr.fromBufferAttribute(l,h),Xr.fromBufferAttribute(l,u),d.uv2=ot.getUV(So,_n,vn,xn,Wr,qr,Xr,new Z));const g={a:c,b:h,c:u,normal:new C,materialIndex:0};ot.getNormal(_n,vn,xn,g.normal),d.face=g}return d}class Bi extends je{constructor(e=1,t=1,n=1,r=1,s=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:n,widthSegments:r,heightSegments:s,depthSegments:o};const a=this;r=Math.floor(r),s=Math.floor(s),o=Math.floor(o);const l=[],c=[],h=[],u=[];let f=0,d=0;g("z","y","x",-1,-1,n,t,e,o,s,0),g("z","y","x",1,-1,n,t,-e,o,s,1),g("x","z","y",1,1,e,n,t,r,o,2),g("x","z","y",1,-1,e,n,-t,r,o,3),g("x","y","z",1,-1,e,t,n,r,s,4),g("x","y","z",-1,-1,e,t,-n,r,s,5),this.setIndex(l),this.setAttribute("position",new tt(c,3)),this.setAttribute("normal",new tt(h,3)),this.setAttribute("uv",new tt(u,2));function g(_,v,p,m,y,x,M,R,D,O,j){const k=x/D,P=M/O,w=x/2,b=M/2,F=R/2,I=D+1,N=O+1;let z=0,ee=0;const re=new C;for(let G=0;G<N;G++){const W=G*P-b;for(let ae=0;ae<I;ae++){const ie=ae*k-w;re[_]=ie*m,re[v]=W*y,re[p]=F,c.push(re.x,re.y,re.z),re[_]=0,re[v]=0,re[p]=R>0?1:-1,h.push(re.x,re.y,re.z),u.push(ae/D),u.push(1-G/O),z+=1}}for(let G=0;G<O;G++)for(let W=0;W<D;W++){const ae=f+W+I*G,ie=f+W+I*(G+1),ue=f+(W+1)+I*(G+1),Re=f+(W+1)+I*G;l.push(ae,ie,Re),l.push(ie,ue,Re),ee+=6}a.addGroup(d,ee,j),d+=ee,f+=z}}static fromJSON(e){return new Bi(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function Li(i){const e={};for(const t in i){e[t]={};for(const n in i[t]){const r=i[t][n];r&&(r.isColor||r.isMatrix3||r.isMatrix4||r.isVector2||r.isVector3||r.isVector4||r.isTexture||r.isQuaternion)?e[t][n]=r.clone():Array.isArray(r)?e[t][n]=r.slice():e[t][n]=r}}return e}function pt(i){const e={};for(let t=0;t<i.length;t++){const n=Li(i[t]);for(const r in n)e[r]=n[r]}return e}const hm={clone:Li,merge:pt};var fm=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,dm=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class Xn extends yt{constructor(e){super(),this.type="ShaderMaterial",this.defines={},this.uniforms={},this.vertexShader=fm,this.fragmentShader=dm,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.extensions={derivatives:!1,fragDepth:!1,drawBuffers:!1,shaderTextureLOD:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv2:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&(e.attributes!==void 0&&console.error("THREE.ShaderMaterial: attributes should now be defined in THREE.BufferGeometry instead."),this.setValues(e))}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=Li(e.uniforms),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){const t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(const r in this.uniforms){const o=this.uniforms[r].value;o&&o.isTexture?t.uniforms[r]={type:"t",value:o.toJSON(e).uuid}:o&&o.isColor?t.uniforms[r]={type:"c",value:o.getHex()}:o&&o.isVector2?t.uniforms[r]={type:"v2",value:o.toArray()}:o&&o.isVector3?t.uniforms[r]={type:"v3",value:o.toArray()}:o&&o.isVector4?t.uniforms[r]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?t.uniforms[r]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?t.uniforms[r]={type:"m4",value:o.toArray()}:t.uniforms[r]={value:o}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader;const n={};for(const r in this.extensions)this.extensions[r]===!0&&(n[r]=!0);return Object.keys(n).length>0&&(t.extensions=n),t}}Xn.prototype.isShaderMaterial=!0;class Ca extends He{constructor(){super(),this.type="Camera",this.matrixWorldInverse=new Me,this.projectionMatrix=new Me,this.projectionMatrixInverse=new Me}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(-t[8],-t[9],-t[10]).normalize()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}Ca.prototype.isCamera=!0;class mt extends Ca{constructor(e=50,t=1,n=.1,r=2e3){super(),this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=n,this.far=r,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const t=.5*this.getFilmHeight()/e;this.fov=oa*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(to*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return oa*2*Math.atan(Math.tan(to*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}setViewOffset(e,t,n,r,s,o){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=r,this.view.width=s,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let t=e*Math.tan(to*.5*this.fov)/this.zoom,n=2*t,r=this.aspect*n,s=-.5*r;const o=this.view;if(this.view!==null&&this.view.enabled){const l=o.fullWidth,c=o.fullHeight;s+=o.offsetX*r/l,t-=o.offsetY*n/c,r*=o.width/l,n*=o.height/c}const a=this.filmOffset;a!==0&&(s+=e*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(s,s+r,t,t-n,e,this.far),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}}mt.prototype.isPerspectiveCamera=!0;const oi=90,ai=1;class La extends He{constructor(e,t,n){if(super(),this.type="CubeCamera",n.isWebGLCubeRenderTarget!==!0){console.error("THREE.CubeCamera: The constructor now expects an instance of WebGLCubeRenderTarget as third parameter.");return}this.renderTarget=n;const r=new mt(oi,ai,e,t);r.layers=this.layers,r.up.set(0,-1,0),r.lookAt(new C(1,0,0)),this.add(r);const s=new mt(oi,ai,e,t);s.layers=this.layers,s.up.set(0,-1,0),s.lookAt(new C(-1,0,0)),this.add(s);const o=new mt(oi,ai,e,t);o.layers=this.layers,o.up.set(0,0,1),o.lookAt(new C(0,1,0)),this.add(o);const a=new mt(oi,ai,e,t);a.layers=this.layers,a.up.set(0,0,-1),a.lookAt(new C(0,-1,0)),this.add(a);const l=new mt(oi,ai,e,t);l.layers=this.layers,l.up.set(0,-1,0),l.lookAt(new C(0,0,1)),this.add(l);const c=new mt(oi,ai,e,t);c.layers=this.layers,c.up.set(0,-1,0),c.lookAt(new C(0,0,-1)),this.add(c)}update(e,t){this.parent===null&&this.updateMatrixWorld();const n=this.renderTarget,[r,s,o,a,l,c]=this.children,h=e.xr.enabled,u=e.getRenderTarget();e.xr.enabled=!1;const f=n.texture.generateMipmaps;n.texture.generateMipmaps=!1,e.setRenderTarget(n,0),e.render(t,r),e.setRenderTarget(n,1),e.render(t,s),e.setRenderTarget(n,2),e.render(t,o),e.setRenderTarget(n,3),e.render(t,a),e.setRenderTarget(n,4),e.render(t,l),n.texture.generateMipmaps=f,e.setRenderTarget(n,5),e.render(t,c),e.setRenderTarget(u),e.xr.enabled=h}}class Bs extends ut{constructor(e,t,n,r,s,o,a,l,c,h){e=e!==void 0?e:[],t=t!==void 0?t:yr,super(e,t,n,r,s,o,a,l,c,h),this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}Bs.prototype.isCubeTexture=!0;class rh extends It{constructor(e,t,n){Number.isInteger(t)&&(console.warn("THREE.WebGLCubeRenderTarget: constructor signature is now WebGLCubeRenderTarget( size, options )"),t=n),super(e,e,t),t=t||{},this.texture=new Bs(void 0,t.mapping,t.wrapS,t.wrapT,t.magFilter,t.minFilter,t.format,t.type,t.anisotropy,t.encoding),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=t.generateMipmaps!==void 0?t.generateMipmaps:!1,this.texture.minFilter=t.minFilter!==void 0?t.minFilter:Mt,this.texture._needsFlipEnvMap=!1}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.format=ct,this.texture.encoding=t.encoding,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;const n={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},r=new Bi(5,5,5),s=new Xn({name:"CubemapFromEquirect",uniforms:Li(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:rt,blending:bn});s.uniforms.tEquirect.value=t;const o=new gt(r,s),a=t.minFilter;return t.minFilter===Fs&&(t.minFilter=Mt),new La(1,10,this).update(e,o),t.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(e,t,n,r){const s=e.getRenderTarget();for(let o=0;o<6;o++)e.setRenderTarget(this,o),e.clear(t,n,r);e.setRenderTarget(s)}}rh.prototype.isWebGLCubeRenderTarget=!0;const To=new C,pm=new C,mm=new ft;class un{constructor(e=new C(1,0,0),t=0){this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,n,r){return this.normal.set(e,t,n),this.constant=r,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,n){const r=To.subVectors(n,t).cross(pm.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(r,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(this.normal).multiplyScalar(-this.distanceToPoint(e)).add(e)}intersectLine(e,t){const n=e.delta(To),r=this.normal.dot(n);if(r===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;const s=-(e.start.dot(this.normal)+this.constant)/r;return s<0||s>1?null:t.copy(n).multiplyScalar(s).add(e.start)}intersectsLine(e){const t=this.distanceToPoint(e.start),n=this.distanceToPoint(e.end);return t<0&&n>0||n<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){const n=t||mm.getNormalMatrix(e),r=this.coplanarPoint(To).applyMatrix4(e),s=this.normal.applyMatrix3(n).normalize();return this.constant=-r.dot(s),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}un.prototype.isPlane=!0;const li=new Ni,$r=new C;class Os{constructor(e=new un,t=new un,n=new un,r=new un,s=new un,o=new un){this.planes=[e,t,n,r,s,o]}set(e,t,n,r,s,o){const a=this.planes;return a[0].copy(e),a[1].copy(t),a[2].copy(n),a[3].copy(r),a[4].copy(s),a[5].copy(o),this}copy(e){const t=this.planes;for(let n=0;n<6;n++)t[n].copy(e.planes[n]);return this}setFromProjectionMatrix(e){const t=this.planes,n=e.elements,r=n[0],s=n[1],o=n[2],a=n[3],l=n[4],c=n[5],h=n[6],u=n[7],f=n[8],d=n[9],g=n[10],_=n[11],v=n[12],p=n[13],m=n[14],y=n[15];return t[0].setComponents(a-r,u-l,_-f,y-v).normalize(),t[1].setComponents(a+r,u+l,_+f,y+v).normalize(),t[2].setComponents(a+s,u+c,_+d,y+p).normalize(),t[3].setComponents(a-s,u-c,_-d,y-p).normalize(),t[4].setComponents(a-o,u-h,_-g,y-m).normalize(),t[5].setComponents(a+o,u+h,_+g,y+m).normalize(),this}intersectsObject(e){const t=e.geometry;return t.boundingSphere===null&&t.computeBoundingSphere(),li.copy(t.boundingSphere).applyMatrix4(e.matrixWorld),this.intersectsSphere(li)}intersectsSprite(e){return li.center.set(0,0,0),li.radius=.7071067811865476,li.applyMatrix4(e.matrixWorld),this.intersectsSphere(li)}intersectsSphere(e){const t=this.planes,n=e.center,r=-e.radius;for(let s=0;s<6;s++)if(t[s].distanceToPoint(n)<r)return!1;return!0}intersectsBox(e){const t=this.planes;for(let n=0;n<6;n++){const r=t[n];if($r.x=r.normal.x>0?e.max.x:e.min.x,$r.y=r.normal.y>0?e.max.y:e.min.y,$r.z=r.normal.z>0?e.max.z:e.min.z,r.distanceToPoint($r)<0)return!1}return!0}containsPoint(e){const t=this.planes;for(let n=0;n<6;n++)if(t[n].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}function sh(){let i=null,e=!1,t=null,n=null;function r(s,o){t(s,o),n=i.requestAnimationFrame(r)}return{start:function(){e!==!0&&t!==null&&(n=i.requestAnimationFrame(r),e=!0)},stop:function(){i.cancelAnimationFrame(n),e=!1},setAnimationLoop:function(s){t=s},setContext:function(s){i=s}}}function gm(i,e){const t=e.isWebGL2,n=new WeakMap;function r(c,h){const u=c.array,f=c.usage,d=i.createBuffer();i.bindBuffer(h,d),i.bufferData(h,u,f),c.onUploadCallback();let g=5126;return u instanceof Float32Array?g=5126:u instanceof Float64Array?console.warn("THREE.WebGLAttributes: Unsupported data buffer format: Float64Array."):u instanceof Uint16Array?c.isFloat16BufferAttribute?t?g=5131:console.warn("THREE.WebGLAttributes: Usage of Float16BufferAttribute requires WebGL2."):g=5123:u instanceof Int16Array?g=5122:u instanceof Uint32Array?g=5125:u instanceof Int32Array?g=5124:u instanceof Int8Array?g=5120:(u instanceof Uint8Array||u instanceof Uint8ClampedArray)&&(g=5121),{buffer:d,type:g,bytesPerElement:u.BYTES_PER_ELEMENT,version:c.version}}function s(c,h,u){const f=h.array,d=h.updateRange;i.bindBuffer(u,c),d.count===-1?i.bufferSubData(u,0,f):(t?i.bufferSubData(u,d.offset*f.BYTES_PER_ELEMENT,f,d.offset,d.count):i.bufferSubData(u,d.offset*f.BYTES_PER_ELEMENT,f.subarray(d.offset,d.offset+d.count)),d.count=-1)}function o(c){return c.isInterleavedBufferAttribute&&(c=c.data),n.get(c)}function a(c){c.isInterleavedBufferAttribute&&(c=c.data);const h=n.get(c);h&&(i.deleteBuffer(h.buffer),n.delete(c))}function l(c,h){if(c.isGLBufferAttribute){const f=n.get(c);(!f||f.version<c.version)&&n.set(c,{buffer:c.buffer,type:c.type,bytesPerElement:c.elementSize,version:c.version});return}c.isInterleavedBufferAttribute&&(c=c.data);const u=n.get(c);u===void 0?n.set(c,r(c,h)):u.version<c.version&&(s(u.buffer,c,h),u.version=c.version)}return{get:o,remove:a,update:l}}class Ra extends je{constructor(e=1,t=1,n=1,r=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:n,heightSegments:r};const s=e/2,o=t/2,a=Math.floor(n),l=Math.floor(r),c=a+1,h=l+1,u=e/a,f=t/l,d=[],g=[],_=[],v=[];for(let p=0;p<h;p++){const m=p*f-o;for(let y=0;y<c;y++){const x=y*u-s;g.push(x,-m,0),_.push(0,0,1),v.push(y/a),v.push(1-p/l)}}for(let p=0;p<l;p++)for(let m=0;m<a;m++){const y=m+c*p,x=m+c*(p+1),M=m+1+c*(p+1),R=m+1+c*p;d.push(y,x,R),d.push(x,M,R)}this.setIndex(d),this.setAttribute("position",new tt(g,3)),this.setAttribute("normal",new tt(_,3)),this.setAttribute("uv",new tt(v,2))}static fromJSON(e){return new Ra(e.width,e.height,e.widthSegments,e.heightSegments)}}var _m=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vUv ).g;
#endif`,vm=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,xm=`#ifdef USE_ALPHATEST
	if ( diffuseColor.a < alphaTest ) discard;
#endif`,ym=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,Mm=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vUv2 ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometry.normal, geometry.viewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,bm=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,wm="vec3 transformed = vec3( position );",Sm=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,Tm=`vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 f0, const in float f90, const in float roughness ) {
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
	float D = D_GGX( alpha, dotNH );
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transposeMat3( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif`,Em=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vUv );
		vec2 dSTdy = dFdy( vUv );
		float Hll = bumpScale * texture2D( bumpMap, vUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = vec3( dFdx( surf_pos.x ), dFdx( surf_pos.y ), dFdx( surf_pos.z ) );
		vec3 vSigmaY = vec3( dFdy( surf_pos.x ), dFdy( surf_pos.y ), dFdy( surf_pos.z ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,Am=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#pragma unroll_loop_start
	for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
		plane = clippingPlanes[ i ];
		if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
	}
	#pragma unroll_loop_end
	#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
		bool clipped = true;
		#pragma unroll_loop_start
		for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
		}
		#pragma unroll_loop_end
		if ( clipped ) discard;
	#endif
#endif`,Cm=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,Lm=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,Rm=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,Pm=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,Im=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,Dm=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	varying vec3 vColor;
#endif`,Nm=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif`,Fm=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 color ) { return dot( color, vec3( 0.3333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
struct GeometricContext {
	vec3 position;
	vec3 normal;
	vec3 viewDir;
#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal;
#endif
};
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );
}
mat3 transposeMat3( const in mat3 m ) {
	mat3 tmp;
	tmp[ 0 ] = vec3( m[ 0 ].x, m[ 1 ].x, m[ 2 ].x );
	tmp[ 1 ] = vec3( m[ 0 ].y, m[ 1 ].y, m[ 2 ].y );
	tmp[ 2 ] = vec3( m[ 0 ].z, m[ 1 ].z, m[ 2 ].z );
	return tmp;
}
float linearToRelativeLuminance( const in vec3 color ) {
	vec3 weights = vec3( 0.2126, 0.7152, 0.0722 );
	return dot( weights, color.rgb );
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}`,zm=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_maxMipLevel 8.0
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_maxTileSize 256.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		float texelSize = 1.0 / ( 3.0 * cubeUV_maxTileSize );
		vec2 uv = getUV( direction, face ) * ( faceSize - 1.0 ) + 0.5;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		if ( mipInt < cubeUV_maxMipLevel ) {
			uv.y += 2.0 * cubeUV_maxTileSize;
		}
		uv.y += filterInt * 2.0 * cubeUV_minTileSize;
		uv.x += 3.0 * max( 0.0, cubeUV_maxTileSize - 2.0 * faceSize );
		uv *= texelSize;
		return texture2D( envMap, uv ).rgb;
	}
	#define r0 1.0
	#define v0 0.339
	#define m0 - 2.0
	#define r1 0.8
	#define v1 0.276
	#define m1 - 1.0
	#define r4 0.4
	#define v4 0.046
	#define m4 2.0
	#define r5 0.305
	#define v5 0.016
	#define m5 3.0
	#define r6 0.21
	#define v6 0.0038
	#define m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= r1 ) {
			mip = ( r0 - roughness ) * ( m1 - m0 ) / ( r0 - r1 ) + m0;
		} else if ( roughness >= r4 ) {
			mip = ( r1 - roughness ) * ( m4 - m1 ) / ( r1 - r4 ) + m1;
		} else if ( roughness >= r5 ) {
			mip = ( r4 - roughness ) * ( m5 - m4 ) / ( r4 - r5 ) + m4;
		} else if ( roughness >= r6 ) {
			mip = ( r5 - roughness ) * ( m6 - m5 ) / ( r5 - r6 ) + m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), m0, cubeUV_maxMipLevel );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,Bm=`vec3 transformedNormal = objectNormal;
#ifdef USE_INSTANCING
	mat3 m = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( m[ 0 ], m[ 0 ] ), dot( m[ 1 ], m[ 1 ] ), dot( m[ 2 ], m[ 2 ] ) );
	transformedNormal = m * transformedNormal;
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	vec3 transformedTangent = ( modelViewMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,Om=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,km=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vUv ).x * displacementScale + displacementBias );
#endif`,Um=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vUv );
	emissiveColor.rgb = emissiveMapTexelToLinear( emissiveColor ).rgb;
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,Hm=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,Gm="gl_FragColor = linearToOutputTexel( gl_FragColor );",Vm=`vec4 LinearToLinear( in vec4 value ) {
	return value;
}
vec4 sRGBToLinear( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 LinearTosRGB( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,Wm=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
		envColor = envMapTexelToLinear( envColor );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 envColor = textureCubeUV( envMap, reflectVec, 0.0 );
	#else
		vec4 envColor = vec4( 0.0 );
	#endif
	#ifdef ENVMAP_BLENDING_MULTIPLY
		outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_MIX )
		outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_ADD )
		outgoingLight += envColor.xyz * specularStrength * reflectivity;
	#endif
#endif`,qm=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,Xm=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,Ym=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) ||defined( PHONG )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,jm=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,$m=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,Zm=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,Jm=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,Qm=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,Km=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		return ( coord.x < 0.7 ) ? vec3( 0.7 ) : vec3( 1.0 );
	#endif
}`,eg=`#ifdef USE_LIGHTMAP
	vec4 lightMapTexel = texture2D( lightMap, vUv2 );
	vec3 lightMapIrradiance = lightMapTexelToLinear( lightMapTexel ).rgb * lightMapIntensity;
	#ifndef PHYSICALLY_CORRECT_LIGHTS
		lightMapIrradiance *= PI;
	#endif
	reflectedLight.indirectDiffuse += lightMapIrradiance;
#endif`,tg=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,ng=`vec3 diffuse = vec3( 1.0 );
GeometricContext geometry;
geometry.position = mvPosition.xyz;
geometry.normal = normalize( transformedNormal );
geometry.viewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( -mvPosition.xyz );
GeometricContext backGeometry;
backGeometry.position = geometry.position;
backGeometry.normal = -geometry.normal;
backGeometry.viewDir = geometry.viewDir;
vLightFront = vec3( 0.0 );
vIndirectFront = vec3( 0.0 );
#ifdef DOUBLE_SIDED
	vLightBack = vec3( 0.0 );
	vIndirectBack = vec3( 0.0 );
#endif
IncidentLight directLight;
float dotNL;
vec3 directLightColor_Diffuse;
vIndirectFront += getAmbientLightIrradiance( ambientLightColor );
vIndirectFront += getLightProbeIrradiance( lightProbe, geometry.normal );
#ifdef DOUBLE_SIDED
	vIndirectBack += getAmbientLightIrradiance( ambientLightColor );
	vIndirectBack += getLightProbeIrradiance( lightProbe, backGeometry.normal );
#endif
#if NUM_POINT_LIGHTS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		getPointLightInfo( pointLights[ i ], geometry, directLight );
		dotNL = dot( geometry.normal, directLight.direction );
		directLightColor_Diffuse = directLight.color;
		vLightFront += saturate( dotNL ) * directLightColor_Diffuse;
		#ifdef DOUBLE_SIDED
			vLightBack += saturate( - dotNL ) * directLightColor_Diffuse;
		#endif
	}
	#pragma unroll_loop_end
#endif
#if NUM_SPOT_LIGHTS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		getSpotLightInfo( spotLights[ i ], geometry, directLight );
		dotNL = dot( geometry.normal, directLight.direction );
		directLightColor_Diffuse = directLight.color;
		vLightFront += saturate( dotNL ) * directLightColor_Diffuse;
		#ifdef DOUBLE_SIDED
			vLightBack += saturate( - dotNL ) * directLightColor_Diffuse;
		#endif
	}
	#pragma unroll_loop_end
#endif
#if NUM_DIR_LIGHTS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		getDirectionalLightInfo( directionalLights[ i ], geometry, directLight );
		dotNL = dot( geometry.normal, directLight.direction );
		directLightColor_Diffuse = directLight.color;
		vLightFront += saturate( dotNL ) * directLightColor_Diffuse;
		#ifdef DOUBLE_SIDED
			vLightBack += saturate( - dotNL ) * directLightColor_Diffuse;
		#endif
	}
	#pragma unroll_loop_end
#endif
#if NUM_HEMI_LIGHTS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
		vIndirectFront += getHemisphereLightIrradiance( hemisphereLights[ i ], geometry.normal );
		#ifdef DOUBLE_SIDED
			vIndirectBack += getHemisphereLightIrradiance( hemisphereLights[ i ], backGeometry.normal );
		#endif
	}
	#pragma unroll_loop_end
#endif`,ig=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
uniform vec3 lightProbe[ 9 ];
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	#if defined ( PHYSICALLY_CORRECT_LIGHTS )
		float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
		if ( cutoffDistance > 0.0 ) {
			distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
		}
		return distanceFalloff;
	#else
		if ( cutoffDistance > 0.0 && decayExponent > 0.0 ) {
			return pow( saturate( - lightDistance / cutoffDistance + 1.0 ), decayExponent );
		}
		return 1.0;
	#endif
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, const in GeometricContext geometry, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in GeometricContext geometry, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometry.position;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in GeometricContext geometry, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometry.position;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif`,rg=`#if defined( USE_ENVMAP )
	#ifdef ENVMAP_MODE_REFRACTION
		uniform float refractionRatio;
	#endif
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#if defined( ENVMAP_TYPE_CUBE_UV )
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#if defined( ENVMAP_TYPE_CUBE_UV )
			vec3 reflectVec;
			#ifdef ENVMAP_MODE_REFLECTION
				reflectVec = reflect( - viewDir, normal );
				reflectVec = normalize( mix( reflectVec, normal, roughness * roughness) );
			#else
				reflectVec = refract( - viewDir, normal, refractionRatio );
			#endif
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
#endif`,sg=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,og=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in GeometricContext geometry, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometry.normal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in GeometricContext geometry, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon
#define Material_LightProbeLOD( material )	(0)`,ag=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,lg=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in GeometricContext geometry, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometry.normal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometry.viewDir, geometry.normal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in GeometricContext geometry, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong
#define Material_LightProbeLOD( material )	(0)`,cg=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb * ( 1.0 - metalnessFactor );
vec3 dxy = max( abs( dFdx( geometryNormal ) ), abs( dFdy( geometryNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	#ifdef SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULARINTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vUv ).a;
		#endif
		#ifdef USE_SPECULARCOLORMAP
			specularColorFactor *= specularColorMapTexelToLinear( texture2D( specularColorMap, vUv ) ).rgb;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = mix( min( pow2( ( ior - 1.0 ) / ( ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = mix( vec3( 0.04 ), diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEENCOLORMAP
		material.sheenColor *= sheenColorMapTexelToLinear( texture2D( sheenColorMap, vUv ) ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.07, 1.0 );
	#ifdef USE_SHEENROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vUv ).a;
	#endif
#endif`,ug=`struct PhysicalMaterial {
	vec3 diffuseColor;
	float roughness;
	vec3 specularColor;
	float specularF90;
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
};
vec3 clearcoatSpecular = vec3( 0.0 );
vec3 sheenSpecular = vec3( 0.0 );
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float a = roughness < 0.25 ? -339.2 * r2 + 161.4 * roughness - 25.9 : -8.48 * r2 + 14.3 * roughness - 9.95;
	float b = roughness < 0.25 ? 44.0 * r2 - 23.7 * roughness + 3.26 : 1.97 * r2 - 3.27 * roughness + 0.72;
	float DG = exp( a * dotNV + b ) + ( roughness < 0.25 ? 0.0 : 0.1 * ( roughness - 0.25 ) );
	return saturate( DG * RECIPROCAL_PI );
}
vec2 DFGApprox( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	const vec4 c0 = vec4( - 1, - 0.0275, - 0.572, 0.022 );
	const vec4 c1 = vec4( 1, 0.0425, 1.04, - 0.04 );
	vec4 r = roughness * c0 + c1;
	float a004 = min( r.x * r.x, exp2( - 9.28 * dotNV ) ) * r.x + r.y;
	vec2 fab = vec2( - 1.04, 1.04 ) * a004 + r.zw;
	return fab;
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	return specularColor * fab.x + specularF90 * fab.y;
}
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	vec3 FssEss = specularColor * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = specularColor + ( 1.0 - specularColor ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in GeometricContext geometry, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometry.normal;
		vec3 viewDir = geometry.viewDir;
		vec3 position = geometry.position;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColor * t2.x + ( vec3( 1.0 ) - material.specularColor ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseColor * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in GeometricContext geometry, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometry.normal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometry.clearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecular += ccIrradiance * BRDF_GGX( directLight.direction, geometry.viewDir, geometry.clearcoatNormal, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecular += irradiance * BRDF_Sheen( directLight.direction, geometry.viewDir, geometry.normal, material.sheenColor, material.sheenRoughness );
	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX( directLight.direction, geometry.viewDir, geometry.normal, material.specularColor, material.specularF90, material.roughness );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in GeometricContext geometry, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in GeometricContext geometry, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecular += clearcoatRadiance * EnvironmentBRDF( geometry.clearcoatNormal, geometry.viewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecular += irradiance * material.sheenColor * IBLSheenBRDF( geometry.normal, geometry.viewDir, material.sheenRoughness );
	#endif
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	computeMultiscattering( geometry.normal, geometry.viewDir, material.specularColor, material.specularF90, material.roughness, singleScattering, multiScattering );
	vec3 diffuse = material.diffuseColor * ( 1.0 - ( singleScattering + multiScattering ) );
	reflectedLight.indirectSpecular += radiance * singleScattering;
	reflectedLight.indirectSpecular += multiScattering * cosineWeightedIrradiance;
	reflectedLight.indirectDiffuse += diffuse * cosineWeightedIrradiance;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,hg=`
GeometricContext geometry;
geometry.position = - vViewPosition;
geometry.normal = normal;
geometry.viewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
#ifdef USE_CLEARCOAT
	geometry.clearcoatNormal = clearcoatNormal;
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometry, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= all( bvec2( directLight.visible, receiveShadow ) ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometry, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometry, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= all( bvec2( directLight.visible, receiveShadow ) ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometry, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, geometry, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= all( bvec2( directLight.visible, receiveShadow ) ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometry, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometry, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	irradiance += getLightProbeIrradiance( lightProbe, geometry.normal );
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometry.normal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,fg=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vUv2 );
		vec3 lightMapIrradiance = lightMapTexelToLinear( lightMapTexel ).rgb * lightMapIntensity;
		#ifndef PHYSICALLY_CORRECT_LIGHTS
			lightMapIrradiance *= PI;
		#endif
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )
		iblIrradiance += getIBLIrradiance( geometry.normal );
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	radiance += getIBLRadiance( geometry.viewDir, geometry.normal, material.roughness );
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometry.viewDir, geometry.clearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,dg=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometry, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometry, material, reflectedLight );
#endif`,pg=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	gl_FragDepthEXT = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,mg=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,gg=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		varying float vFragDepth;
		varying float vIsPerspective;
	#else
		uniform float logDepthBufFC;
	#endif
#endif`,_g=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		vFragDepth = 1.0 + gl_Position.w;
		vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
	#else
		if ( isPerspectiveMatrix( projectionMatrix ) ) {
			gl_Position.z = log2( max( EPSILON, gl_Position.w + 1.0 ) ) * logDepthBufFC - 1.0;
			gl_Position.z *= gl_Position.w;
		}
	#endif
#endif`,vg=`#ifdef USE_MAP
	vec4 texelColor = texture2D( map, vUv );
	texelColor = mapTexelToLinear( texelColor );
	diffuseColor *= texelColor;
#endif`,xg=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,yg=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
#endif
#ifdef USE_MAP
	vec4 mapTexel = texture2D( map, uv );
	diffuseColor *= mapTexelToLinear( mapTexel );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,Mg=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	uniform mat3 uvTransform;
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,bg=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vUv );
	metalnessFactor *= texelMetalness.b;
#endif`,wg=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,Sg=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
			if ( morphTargetInfluences[ i ] > 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1, 2 ) * morphTargetInfluences[ i ];
		}
	#else
		objectNormal += morphNormal0 * morphTargetInfluences[ 0 ];
		objectNormal += morphNormal1 * morphTargetInfluences[ 1 ];
		objectNormal += morphNormal2 * morphTargetInfluences[ 2 ];
		objectNormal += morphNormal3 * morphTargetInfluences[ 3 ];
	#endif
#endif`,Tg=`#ifdef USE_MORPHTARGETS
	uniform float morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
		uniform sampler2DArray morphTargetsTexture;
		uniform vec2 morphTargetsTextureSize;
		vec3 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset, const in int stride ) {
			float texelIndex = float( vertexIndex * stride + offset );
			float y = floor( texelIndex / morphTargetsTextureSize.x );
			float x = texelIndex - y * morphTargetsTextureSize.x;
			vec3 morphUV = vec3( ( x + 0.5 ) / morphTargetsTextureSize.x, y / morphTargetsTextureSize.y, morphTargetIndex );
			return texture( morphTargetsTexture, morphUV ).xyz;
		}
	#else
		#ifndef USE_MORPHNORMALS
			uniform float morphTargetInfluences[ 8 ];
		#else
			uniform float morphTargetInfluences[ 4 ];
		#endif
	#endif
#endif`,Eg=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
			#ifndef USE_MORPHNORMALS
				if ( morphTargetInfluences[ i ] > 0.0 ) transformed += getMorph( gl_VertexID, i, 0, 1 ) * morphTargetInfluences[ i ];
			#else
				if ( morphTargetInfluences[ i ] > 0.0 ) transformed += getMorph( gl_VertexID, i, 0, 2 ) * morphTargetInfluences[ i ];
			#endif
		}
	#else
		transformed += morphTarget0 * morphTargetInfluences[ 0 ];
		transformed += morphTarget1 * morphTargetInfluences[ 1 ];
		transformed += morphTarget2 * morphTargetInfluences[ 2 ];
		transformed += morphTarget3 * morphTargetInfluences[ 3 ];
		#ifndef USE_MORPHNORMALS
			transformed += morphTarget4 * morphTargetInfluences[ 4 ];
			transformed += morphTarget5 * morphTargetInfluences[ 5 ];
			transformed += morphTarget6 * morphTargetInfluences[ 6 ];
			transformed += morphTarget7 * morphTargetInfluences[ 7 ];
		#endif
	#endif
#endif`,Ag=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = vec3( dFdx( vViewPosition.x ), dFdx( vViewPosition.y ), dFdx( vViewPosition.z ) );
	vec3 fdy = vec3( dFdy( vViewPosition.x ), dFdy( vViewPosition.y ), dFdy( vViewPosition.z ) );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	#ifdef USE_TANGENT
		vec3 tangent = normalize( vTangent );
		vec3 bitangent = normalize( vBitangent );
		#ifdef DOUBLE_SIDED
			tangent = tangent * faceDirection;
			bitangent = bitangent * faceDirection;
		#endif
		#if defined( TANGENTSPACE_NORMALMAP ) || defined( USE_CLEARCOAT_NORMALMAP )
			mat3 vTBN = mat3( tangent, bitangent, normal );
		#endif
	#endif
#endif
vec3 geometryNormal = normal;`,Cg=`#ifdef OBJECTSPACE_NORMALMAP
	normal = texture2D( normalMap, vUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( TANGENTSPACE_NORMALMAP )
	vec3 mapN = texture2D( normalMap, vUv ).xyz * 2.0 - 1.0;
	mapN.xy *= normalScale;
	#ifdef USE_TANGENT
		normal = normalize( vTBN * mapN );
	#else
		normal = perturbNormal2Arb( - vViewPosition, normal, mapN, faceDirection );
	#endif
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,Lg=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Rg=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Pg=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,Ig=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef OBJECTSPACE_NORMALMAP
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( TANGENTSPACE_NORMALMAP ) || defined ( USE_CLEARCOAT_NORMALMAP ) )
	vec3 perturbNormal2Arb( vec3 eye_pos, vec3 surf_norm, vec3 mapN, float faceDirection ) {
		vec3 q0 = vec3( dFdx( eye_pos.x ), dFdx( eye_pos.y ), dFdx( eye_pos.z ) );
		vec3 q1 = vec3( dFdy( eye_pos.x ), dFdy( eye_pos.y ), dFdy( eye_pos.z ) );
		vec2 st0 = dFdx( vUv.st );
		vec2 st1 = dFdy( vUv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : faceDirection * inversesqrt( det );
		return normalize( T * ( mapN.x * scale ) + B * ( mapN.y * scale ) + N * mapN.z );
	}
#endif`,Dg=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = geometryNormal;
#endif`,Ng=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	#ifdef USE_TANGENT
		clearcoatNormal = normalize( vTBN * clearcoatMapN );
	#else
		clearcoatNormal = perturbNormal2Arb( - vViewPosition, clearcoatNormal, clearcoatMapN, faceDirection );
	#endif
#endif`,Fg=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif`,zg=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= transmissionAlpha + 0.1;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,Bg=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;
const vec3 PackFactors = vec3( 256. * 256. * 256., 256. * 256., 256. );
const vec4 UnpackFactors = UnpackDownscale / vec4( PackFactors, 1. );
const float ShiftRight8 = 1. / 256.;
vec4 packDepthToRGBA( const in float v ) {
	vec4 r = vec4( fract( v * PackFactors ), v );
	r.yzw -= r.xyz * ShiftRight8;	return r * PackUpscale;
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors );
}
vec4 pack2HalfToRGBA( vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float linearClipZ, const in float near, const in float far ) {
	return linearClipZ * ( near - far ) - near;
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float invClipZ, const in float near, const in float far ) {
	return ( near * far ) / ( ( far - near ) * invClipZ - far );
}`,Og=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,kg=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,Ug=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,Hg=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,Gg=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vUv );
	roughnessFactor *= texelRoughness.g;
#endif`,Vg=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,Wg=`#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		varying vec4 vSpotShadowCoord[ NUM_SPOT_LIGHT_SHADOWS ];
		struct SpotLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform sampler2D pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	float texture2DCompare( sampler2D depths, vec2 uv, float compare ) {
		return step( compare, unpackRGBAToDepth( texture2D( depths, uv ) ) );
	}
	vec2 texture2DDistribution( sampler2D shadow, vec2 uv ) {
		return unpackRGBATo2Half( texture2D( shadow, uv ) );
	}
	float VSMShadow (sampler2D shadow, vec2 uv, float compare ){
		float occlusion = 1.0;
		vec2 distribution = texture2DDistribution( shadow, uv );
		float hard_shadow = step( compare , distribution.x );
		if (hard_shadow != 1.0 ) {
			float distance = compare - distribution.x ;
			float variance = max( 0.00000, distribution.y * distribution.y );
			float softness_probability = variance / (variance + distance * distance );			softness_probability = clamp( ( softness_probability - 0.3 ) / ( 0.95 - 0.3 ), 0.0, 1.0 );			occlusion = clamp( max( hard_shadow, softness_probability ), 0.0, 1.0 );
		}
		return occlusion;
	}
	float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
		float shadow = 1.0;
		shadowCoord.xyz /= shadowCoord.w;
		shadowCoord.z += shadowBias;
		bvec4 inFrustumVec = bvec4 ( shadowCoord.x >= 0.0, shadowCoord.x <= 1.0, shadowCoord.y >= 0.0, shadowCoord.y <= 1.0 );
		bool inFrustum = all( inFrustumVec );
		bvec2 frustumTestVec = bvec2( inFrustum, shadowCoord.z <= 1.0 );
		bool frustumTest = all( frustumTestVec );
		if ( frustumTest ) {
		#if defined( SHADOWMAP_TYPE_PCF )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx0 = - texelSize.x * shadowRadius;
			float dy0 = - texelSize.y * shadowRadius;
			float dx1 = + texelSize.x * shadowRadius;
			float dy1 = + texelSize.y * shadowRadius;
			float dx2 = dx0 / 2.0;
			float dy2 = dy0 / 2.0;
			float dx3 = dx1 / 2.0;
			float dy3 = dy1 / 2.0;
			shadow = (
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy1 ), shadowCoord.z )
			) * ( 1.0 / 17.0 );
		#elif defined( SHADOWMAP_TYPE_PCF_SOFT )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx = texelSize.x;
			float dy = texelSize.y;
			vec2 uv = shadowCoord.xy;
			vec2 f = fract( uv * shadowMapSize + 0.5 );
			uv -= f * texelSize;
			shadow = (
				texture2DCompare( shadowMap, uv, shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( dx, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( 0.0, dy ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + texelSize, shadowCoord.z ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, 0.0 ), shadowCoord.z ), 
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 0.0 ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, dy ), shadowCoord.z ), 
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, dy ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( 0.0, -dy ), shadowCoord.z ), 
					 texture2DCompare( shadowMap, uv + vec2( 0.0, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( texture2DCompare( shadowMap, uv + vec2( dx, -dy ), shadowCoord.z ), 
					 texture2DCompare( shadowMap, uv + vec2( dx, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( mix( texture2DCompare( shadowMap, uv + vec2( -dx, -dy ), shadowCoord.z ), 
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, -dy ), shadowCoord.z ),
						  f.x ),
					 mix( texture2DCompare( shadowMap, uv + vec2( -dx, 2.0 * dy ), shadowCoord.z ), 
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 2.0 * dy ), shadowCoord.z ),
						  f.x ),
					 f.y )
			) * ( 1.0 / 9.0 );
		#elif defined( SHADOWMAP_TYPE_VSM )
			shadow = VSMShadow( shadowMap, shadowCoord.xy, shadowCoord.z );
		#else
			shadow = texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z );
		#endif
		}
		return shadow;
	}
	vec2 cubeToUV( vec3 v, float texelSizeY ) {
		vec3 absV = abs( v );
		float scaleToCube = 1.0 / max( absV.x, max( absV.y, absV.z ) );
		absV *= scaleToCube;
		v *= scaleToCube * ( 1.0 - 2.0 * texelSizeY );
		vec2 planar = v.xy;
		float almostATexel = 1.5 * texelSizeY;
		float almostOne = 1.0 - almostATexel;
		if ( absV.z >= almostOne ) {
			if ( v.z > 0.0 )
				planar.x = 4.0 - v.x;
		} else if ( absV.x >= almostOne ) {
			float signX = sign( v.x );
			planar.x = v.z * signX + 2.0 * signX;
		} else if ( absV.y >= almostOne ) {
			float signY = sign( v.y );
			planar.x = v.x + 2.0 * signY + 2.0;
			planar.y = v.z * signY - 2.0;
		}
		return vec2( 0.125, 0.25 ) * planar + vec2( 0.375, 0.75 );
	}
	float getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		vec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );
		vec3 lightToPosition = shadowCoord.xyz;
		float dp = ( length( lightToPosition ) - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );		dp += shadowBias;
		vec3 bd3D = normalize( lightToPosition );
		#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )
			vec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;
			return (
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyx, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyx, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxx, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxx, texelSize.y ), dp )
			) * ( 1.0 / 9.0 );
		#else
			return texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );
		#endif
	}
#endif`,qg=`#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		uniform mat4 spotShadowMatrix[ NUM_SPOT_LIGHT_SHADOWS ];
		varying vec4 vSpotShadowCoord[ NUM_SPOT_LIGHT_SHADOWS ];
		struct SpotLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,Xg=`#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0 || NUM_SPOT_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0
		vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		vec4 shadowWorldPosition;
	#endif
	#if NUM_DIR_LIGHT_SHADOWS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
		vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias, 0 );
		vSpotShadowCoord[ i ] = spotShadowMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
		vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
	#endif
#endif`,Yg=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowBias, spotLight.shadowRadius, vSpotShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,jg=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,$g=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	#ifdef BONE_TEXTURE
		uniform highp sampler2D boneTexture;
		uniform int boneTextureSize;
		mat4 getBoneMatrix( const in float i ) {
			float j = i * 4.0;
			float x = mod( j, float( boneTextureSize ) );
			float y = floor( j / float( boneTextureSize ) );
			float dx = 1.0 / float( boneTextureSize );
			float dy = 1.0 / float( boneTextureSize );
			y = dy * ( y + 0.5 );
			vec4 v1 = texture2D( boneTexture, vec2( dx * ( x + 0.5 ), y ) );
			vec4 v2 = texture2D( boneTexture, vec2( dx * ( x + 1.5 ), y ) );
			vec4 v3 = texture2D( boneTexture, vec2( dx * ( x + 2.5 ), y ) );
			vec4 v4 = texture2D( boneTexture, vec2( dx * ( x + 3.5 ), y ) );
			mat4 bone = mat4( v1, v2, v3, v4 );
			return bone;
		}
	#else
		uniform mat4 boneMatrices[ MAX_BONES ];
		mat4 getBoneMatrix( const in float i ) {
			mat4 bone = boneMatrices[ int(i) ];
			return bone;
		}
	#endif
#endif`,Zg=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,Jg=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,Qg=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,Kg=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,e_=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,t_=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return toneMappingExposure * color;
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 OptimizedCineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,n_=`#ifdef USE_TRANSMISSION
	float transmissionAlpha = 1.0;
	float transmissionFactor = transmission;
	float thicknessFactor = thickness;
	#ifdef USE_TRANSMISSIONMAP
		transmissionFactor *= texture2D( transmissionMap, vUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		thicknessFactor *= texture2D( thicknessMap, vUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmission = getIBLVolumeRefraction(
		n, v, roughnessFactor, material.diffuseColor, material.specularColor, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, ior, thicknessFactor,
		attenuationColor, attenuationDistance );
	totalDiffuse = mix( totalDiffuse, transmission.rgb, transmissionFactor );
	transmissionAlpha = mix( transmissionAlpha, transmission.a, transmissionFactor );
#endif`,i_=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	vec3 getVolumeTransmissionRay( vec3 n, vec3 v, float thickness, float ior, mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( float roughness, float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( vec2 fragCoord, float roughness, float ior ) {
		float framebufferLod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		#ifdef TEXTURE_LOD_EXT
			return texture2DLodEXT( transmissionSamplerMap, fragCoord.xy, framebufferLod );
		#else
			return texture2D( transmissionSamplerMap, fragCoord.xy, framebufferLod );
		#endif
	}
	vec3 applyVolumeAttenuation( vec3 radiance, float transmissionDistance, vec3 attenuationColor, float attenuationDistance ) {
		if ( attenuationDistance == 0.0 ) {
			return radiance;
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance * radiance;
		}
	}
	vec4 getIBLVolumeRefraction( vec3 n, vec3 v, float roughness, vec3 diffuseColor, vec3 specularColor, float specularF90,
		vec3 position, mat4 modelMatrix, mat4 viewMatrix, mat4 projMatrix, float ior, float thickness,
		vec3 attenuationColor, float attenuationDistance ) {
		vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
		vec3 refractedRayExit = position + transmissionRay;
		vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
		vec2 refractionCoords = ndcPos.xy / ndcPos.w;
		refractionCoords += 1.0;
		refractionCoords /= 2.0;
		vec4 transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
		vec3 attenuatedColor = applyVolumeAttenuation( transmittedLight.rgb, length( transmissionRay ), attenuationColor, attenuationDistance );
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		return vec4( ( 1.0 - F ) * attenuatedColor * diffuseColor, transmittedLight.a );
	}
#endif`,r_=`#if ( defined( USE_UV ) && ! defined( UVS_VERTEX_ONLY ) )
	varying vec2 vUv;
#endif`,s_=`#ifdef USE_UV
	#ifdef UVS_VERTEX_ONLY
		vec2 vUv;
	#else
		varying vec2 vUv;
	#endif
	uniform mat3 uvTransform;
#endif`,o_=`#ifdef USE_UV
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
#endif`,a_=`#if defined( USE_LIGHTMAP ) || defined( USE_AOMAP )
	varying vec2 vUv2;
#endif`,l_=`#if defined( USE_LIGHTMAP ) || defined( USE_AOMAP )
	attribute vec2 uv2;
	varying vec2 vUv2;
	uniform mat3 uv2Transform;
#endif`,c_=`#if defined( USE_LIGHTMAP ) || defined( USE_AOMAP )
	vUv2 = ( uv2Transform * vec3( uv2, 1 ) ).xy;
#endif`,u_=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION )
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const h_=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,f_=`uniform sampler2D t2D;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	gl_FragColor = mapTexelToLinear( texColor );
	#include <tonemapping_fragment>
	#include <encodings_fragment>
}`,d_=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,p_=`#include <envmap_common_pars_fragment>
uniform float opacity;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	vec3 vReflect = vWorldDirection;
	#include <envmap_fragment>
	gl_FragColor = envColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <encodings_fragment>
}`,m_=`#include <common>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <skinbase_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,g_=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( 1.0 );
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <logdepthbuf_fragment>
	float fragCoordZ = 0.5 * vHighPrecisionZW[0] / vHighPrecisionZW[1] + 0.5;
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#endif
}`,__=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <skinbase_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,v_=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( 1.0 );
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = packDepthToRGBA( dist );
}`,x_=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,y_=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	vec4 texColor = texture2D( tEquirect, sampleUV );
	gl_FragColor = mapTexelToLinear( texColor );
	#include <tonemapping_fragment>
	#include <encodings_fragment>
}`,M_=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <color_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,b_=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,w_=`#include <common>
#include <uv_pars_vertex>
#include <uv2_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <uv2_vertex>
	#include <color_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,S_=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <uv2_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <cube_uv_reflection_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel= texture2D( lightMap, vUv2 );
		reflectedLight.indirectDiffuse += lightMapTexelToLinear( lightMapTexel ).rgb * lightMapIntensity;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,T_=`#define LAMBERT
varying vec3 vLightFront;
varying vec3 vIndirectFront;
#ifdef DOUBLE_SIDED
	varying vec3 vLightBack;
	varying vec3 vIndirectBack;
#endif
#include <common>
#include <uv_pars_vertex>
#include <uv2_pars_vertex>
#include <envmap_pars_vertex>
#include <bsdfs>
#include <lights_pars_begin>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <uv2_vertex>
	#include <color_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <lights_lambert_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,E_=`uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
varying vec3 vLightFront;
varying vec3 vIndirectFront;
#ifdef DOUBLE_SIDED
	varying vec3 vLightBack;
	varying vec3 vIndirectBack;
#endif
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <uv2_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <cube_uv_reflection_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <fog_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <specularmap_fragment>
	#include <emissivemap_fragment>
	#ifdef DOUBLE_SIDED
		reflectedLight.indirectDiffuse += ( gl_FrontFacing ) ? vIndirectFront : vIndirectBack;
	#else
		reflectedLight.indirectDiffuse += vIndirectFront;
	#endif
	#include <lightmap_fragment>
	reflectedLight.indirectDiffuse *= BRDF_Lambert( diffuseColor.rgb );
	#ifdef DOUBLE_SIDED
		reflectedLight.directDiffuse = ( gl_FrontFacing ) ? vLightFront : vLightBack;
	#else
		reflectedLight.directDiffuse = vLightFront;
	#endif
	reflectedLight.directDiffuse *= BRDF_Lambert( diffuseColor.rgb ) * getShadowMask();
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,A_=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,C_=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
		matcapColor = matcapTexelToLinear( matcapColor );
	#else
		vec4 matcapColor = vec4( 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,L_=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( TANGENTSPACE_NORMALMAP )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( TANGENTSPACE_NORMALMAP )
	vViewPosition = - mvPosition.xyz;
#endif
}`,R_=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( TANGENTSPACE_NORMALMAP )
	varying vec3 vViewPosition;
#endif
#include <packing>
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( packNormalToRGB( normal ), opacity );
}`,P_=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <uv_pars_vertex>
#include <uv2_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <uv2_vertex>
	#include <color_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,I_=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <uv2_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <cube_uv_reflection_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,D_=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <uv_pars_vertex>
#include <uv2_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <uv2_vertex>
	#include <color_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,N_=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULARINTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
	#ifdef USE_SPECULARCOLORMAP
		uniform sampler2D specularColorMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEENCOLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEENROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <uv2_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <bsdfs>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
		float sheenEnergyComp = 1.0 - 0.157 * max3( material.sheenColor );
		outgoingLight = outgoingLight * sheenEnergyComp + sheenSpecular;
	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometry.clearcoatNormal, geometry.viewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + clearcoatSpecular * material.clearcoat;
	#endif
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,F_=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <uv_pars_vertex>
#include <uv2_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <uv2_vertex>
	#include <color_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,z_=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <uv2_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,B_=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <color_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,O_=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,k_=`#include <common>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,U_=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <packing>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
}`,H_=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix * vec4( 0.0, 0.0, 0.0, 1.0 );
	vec2 scale;
	scale.x = length( vec3( modelMatrix[ 0 ].x, modelMatrix[ 0 ].y, modelMatrix[ 0 ].z ) );
	scale.y = length( vec3( modelMatrix[ 1 ].x, modelMatrix[ 1 ].y, modelMatrix[ 1 ].z ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,G_=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
}`,Ne={alphamap_fragment:_m,alphamap_pars_fragment:vm,alphatest_fragment:xm,alphatest_pars_fragment:ym,aomap_fragment:Mm,aomap_pars_fragment:bm,begin_vertex:wm,beginnormal_vertex:Sm,bsdfs:Tm,bumpmap_pars_fragment:Em,clipping_planes_fragment:Am,clipping_planes_pars_fragment:Cm,clipping_planes_pars_vertex:Lm,clipping_planes_vertex:Rm,color_fragment:Pm,color_pars_fragment:Im,color_pars_vertex:Dm,color_vertex:Nm,common:Fm,cube_uv_reflection_fragment:zm,defaultnormal_vertex:Bm,displacementmap_pars_vertex:Om,displacementmap_vertex:km,emissivemap_fragment:Um,emissivemap_pars_fragment:Hm,encodings_fragment:Gm,encodings_pars_fragment:Vm,envmap_fragment:Wm,envmap_common_pars_fragment:qm,envmap_pars_fragment:Xm,envmap_pars_vertex:Ym,envmap_physical_pars_fragment:rg,envmap_vertex:jm,fog_vertex:$m,fog_pars_vertex:Zm,fog_fragment:Jm,fog_pars_fragment:Qm,gradientmap_pars_fragment:Km,lightmap_fragment:eg,lightmap_pars_fragment:tg,lights_lambert_vertex:ng,lights_pars_begin:ig,lights_toon_fragment:sg,lights_toon_pars_fragment:og,lights_phong_fragment:ag,lights_phong_pars_fragment:lg,lights_physical_fragment:cg,lights_physical_pars_fragment:ug,lights_fragment_begin:hg,lights_fragment_maps:fg,lights_fragment_end:dg,logdepthbuf_fragment:pg,logdepthbuf_pars_fragment:mg,logdepthbuf_pars_vertex:gg,logdepthbuf_vertex:_g,map_fragment:vg,map_pars_fragment:xg,map_particle_fragment:yg,map_particle_pars_fragment:Mg,metalnessmap_fragment:bg,metalnessmap_pars_fragment:wg,morphnormal_vertex:Sg,morphtarget_pars_vertex:Tg,morphtarget_vertex:Eg,normal_fragment_begin:Ag,normal_fragment_maps:Cg,normal_pars_fragment:Lg,normal_pars_vertex:Rg,normal_vertex:Pg,normalmap_pars_fragment:Ig,clearcoat_normal_fragment_begin:Dg,clearcoat_normal_fragment_maps:Ng,clearcoat_pars_fragment:Fg,output_fragment:zg,packing:Bg,premultiplied_alpha_fragment:Og,project_vertex:kg,dithering_fragment:Ug,dithering_pars_fragment:Hg,roughnessmap_fragment:Gg,roughnessmap_pars_fragment:Vg,shadowmap_pars_fragment:Wg,shadowmap_pars_vertex:qg,shadowmap_vertex:Xg,shadowmask_pars_fragment:Yg,skinbase_vertex:jg,skinning_pars_vertex:$g,skinning_vertex:Zg,skinnormal_vertex:Jg,specularmap_fragment:Qg,specularmap_pars_fragment:Kg,tonemapping_fragment:e_,tonemapping_pars_fragment:t_,transmission_fragment:n_,transmission_pars_fragment:i_,uv_pars_fragment:r_,uv_pars_vertex:s_,uv_vertex:o_,uv2_pars_fragment:a_,uv2_pars_vertex:l_,uv2_vertex:c_,worldpos_vertex:u_,background_vert:h_,background_frag:f_,cube_vert:d_,cube_frag:p_,depth_vert:m_,depth_frag:g_,distanceRGBA_vert:__,distanceRGBA_frag:v_,equirect_vert:x_,equirect_frag:y_,linedashed_vert:M_,linedashed_frag:b_,meshbasic_vert:w_,meshbasic_frag:S_,meshlambert_vert:T_,meshlambert_frag:E_,meshmatcap_vert:A_,meshmatcap_frag:C_,meshnormal_vert:L_,meshnormal_frag:R_,meshphong_vert:P_,meshphong_frag:I_,meshphysical_vert:D_,meshphysical_frag:N_,meshtoon_vert:F_,meshtoon_frag:z_,points_vert:B_,points_frag:O_,shadow_vert:k_,shadow_frag:U_,sprite_vert:H_,sprite_frag:G_},ce={common:{diffuse:{value:new ve(16777215)},opacity:{value:1},map:{value:null},uvTransform:{value:new ft},uv2Transform:{value:new ft},alphaMap:{value:null},alphaTest:{value:0}},specularmap:{specularMap:{value:null}},envmap:{envMap:{value:null},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1}},emissivemap:{emissiveMap:{value:null}},bumpmap:{bumpMap:{value:null},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalScale:{value:new Z(1,1)}},displacementmap:{displacementMap:{value:null},displacementScale:{value:1},displacementBias:{value:0}},roughnessmap:{roughnessMap:{value:null}},metalnessmap:{metalnessMap:{value:null}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new ve(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotShadowMap:{value:[]},spotShadowMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new ve(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaTest:{value:0},uvTransform:{value:new ft}},sprite:{diffuse:{value:new ve(16777215)},opacity:{value:1},center:{value:new Z(.5,.5)},rotation:{value:0},map:{value:null},alphaMap:{value:null},alphaTest:{value:0},uvTransform:{value:new ft}}},jt={basic:{uniforms:pt([ce.common,ce.specularmap,ce.envmap,ce.aomap,ce.lightmap,ce.fog]),vertexShader:Ne.meshbasic_vert,fragmentShader:Ne.meshbasic_frag},lambert:{uniforms:pt([ce.common,ce.specularmap,ce.envmap,ce.aomap,ce.lightmap,ce.emissivemap,ce.fog,ce.lights,{emissive:{value:new ve(0)}}]),vertexShader:Ne.meshlambert_vert,fragmentShader:Ne.meshlambert_frag},phong:{uniforms:pt([ce.common,ce.specularmap,ce.envmap,ce.aomap,ce.lightmap,ce.emissivemap,ce.bumpmap,ce.normalmap,ce.displacementmap,ce.fog,ce.lights,{emissive:{value:new ve(0)},specular:{value:new ve(1118481)},shininess:{value:30}}]),vertexShader:Ne.meshphong_vert,fragmentShader:Ne.meshphong_frag},standard:{uniforms:pt([ce.common,ce.envmap,ce.aomap,ce.lightmap,ce.emissivemap,ce.bumpmap,ce.normalmap,ce.displacementmap,ce.roughnessmap,ce.metalnessmap,ce.fog,ce.lights,{emissive:{value:new ve(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Ne.meshphysical_vert,fragmentShader:Ne.meshphysical_frag},toon:{uniforms:pt([ce.common,ce.aomap,ce.lightmap,ce.emissivemap,ce.bumpmap,ce.normalmap,ce.displacementmap,ce.gradientmap,ce.fog,ce.lights,{emissive:{value:new ve(0)}}]),vertexShader:Ne.meshtoon_vert,fragmentShader:Ne.meshtoon_frag},matcap:{uniforms:pt([ce.common,ce.bumpmap,ce.normalmap,ce.displacementmap,ce.fog,{matcap:{value:null}}]),vertexShader:Ne.meshmatcap_vert,fragmentShader:Ne.meshmatcap_frag},points:{uniforms:pt([ce.points,ce.fog]),vertexShader:Ne.points_vert,fragmentShader:Ne.points_frag},dashed:{uniforms:pt([ce.common,ce.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Ne.linedashed_vert,fragmentShader:Ne.linedashed_frag},depth:{uniforms:pt([ce.common,ce.displacementmap]),vertexShader:Ne.depth_vert,fragmentShader:Ne.depth_frag},normal:{uniforms:pt([ce.common,ce.bumpmap,ce.normalmap,ce.displacementmap,{opacity:{value:1}}]),vertexShader:Ne.meshnormal_vert,fragmentShader:Ne.meshnormal_frag},sprite:{uniforms:pt([ce.sprite,ce.fog]),vertexShader:Ne.sprite_vert,fragmentShader:Ne.sprite_frag},background:{uniforms:{uvTransform:{value:new ft},t2D:{value:null}},vertexShader:Ne.background_vert,fragmentShader:Ne.background_frag},cube:{uniforms:pt([ce.envmap,{opacity:{value:1}}]),vertexShader:Ne.cube_vert,fragmentShader:Ne.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Ne.equirect_vert,fragmentShader:Ne.equirect_frag},distanceRGBA:{uniforms:pt([ce.common,ce.displacementmap,{referencePosition:{value:new C},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Ne.distanceRGBA_vert,fragmentShader:Ne.distanceRGBA_frag},shadow:{uniforms:pt([ce.lights,ce.fog,{color:{value:new ve(0)},opacity:{value:1}}]),vertexShader:Ne.shadow_vert,fragmentShader:Ne.shadow_frag}};jt.physical={uniforms:pt([jt.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatNormalScale:{value:new Z(1,1)},clearcoatNormalMap:{value:null},sheen:{value:0},sheenColor:{value:new ve(0)},sheenColorMap:{value:null},sheenRoughness:{value:0},sheenRoughnessMap:{value:null},transmission:{value:0},transmissionMap:{value:null},transmissionSamplerSize:{value:new Z},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},attenuationDistance:{value:0},attenuationColor:{value:new ve(0)},specularIntensity:{value:0},specularIntensityMap:{value:null},specularColor:{value:new ve(1,1,1)},specularColorMap:{value:null}}]),vertexShader:Ne.meshphysical_vert,fragmentShader:Ne.meshphysical_frag};function V_(i,e,t,n,r){const s=new ve(0);let o=0,a,l,c=null,h=0,u=null;function f(g,_){let v=!1,p=_.isScene===!0?_.background:null;p&&p.isTexture&&(p=e.get(p));const m=i.xr,y=m.getSession&&m.getSession();y&&y.environmentBlendMode==="additive"&&(p=null),p===null?d(s,o):p&&p.isColor&&(d(p,1),v=!0),(i.autoClear||v)&&i.clear(i.autoClearColor,i.autoClearDepth,i.autoClearStencil),p&&(p.isCubeTexture||p.mapping===Ns)?(l===void 0&&(l=new gt(new Bi(1,1,1),new Xn({name:"BackgroundCubeMaterial",uniforms:Li(jt.cube.uniforms),vertexShader:jt.cube.vertexShader,fragmentShader:jt.cube.fragmentShader,side:rt,depthTest:!1,depthWrite:!1,fog:!1})),l.geometry.deleteAttribute("normal"),l.geometry.deleteAttribute("uv"),l.onBeforeRender=function(x,M,R){this.matrixWorld.copyPosition(R.matrixWorld)},Object.defineProperty(l.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),n.update(l)),l.material.uniforms.envMap.value=p,l.material.uniforms.flipEnvMap.value=p.isCubeTexture&&p.isRenderTargetTexture===!1?-1:1,(c!==p||h!==p.version||u!==i.toneMapping)&&(l.material.needsUpdate=!0,c=p,h=p.version,u=i.toneMapping),g.unshift(l,l.geometry,l.material,0,0,null)):p&&p.isTexture&&(a===void 0&&(a=new gt(new Ra(2,2),new Xn({name:"BackgroundMaterial",uniforms:Li(jt.background.uniforms),vertexShader:jt.background.vertexShader,fragmentShader:jt.background.fragmentShader,side:hr,depthTest:!1,depthWrite:!1,fog:!1})),a.geometry.deleteAttribute("normal"),Object.defineProperty(a.material,"map",{get:function(){return this.uniforms.t2D.value}}),n.update(a)),a.material.uniforms.t2D.value=p,p.matrixAutoUpdate===!0&&p.updateMatrix(),a.material.uniforms.uvTransform.value.copy(p.matrix),(c!==p||h!==p.version||u!==i.toneMapping)&&(a.material.needsUpdate=!0,c=p,h=p.version,u=i.toneMapping),g.unshift(a,a.geometry,a.material,0,0,null))}function d(g,_){t.buffers.color.setClear(g.r,g.g,g.b,_,r)}return{getClearColor:function(){return s},setClearColor:function(g,_=1){s.set(g),o=_,d(s,o)},getClearAlpha:function(){return o},setClearAlpha:function(g){o=g,d(s,o)},render:f}}function W_(i,e,t,n){const r=i.getParameter(34921),s=n.isWebGL2?null:e.get("OES_vertex_array_object"),o=n.isWebGL2||s!==null,a={},l=_(null);let c=l;function h(b,F,I,N,z){let ee=!1;if(o){const re=g(N,I,F);c!==re&&(c=re,f(c.object)),ee=v(N,z),ee&&p(N,z)}else{const re=F.wireframe===!0;(c.geometry!==N.id||c.program!==I.id||c.wireframe!==re)&&(c.geometry=N.id,c.program=I.id,c.wireframe=re,ee=!0)}b.isInstancedMesh===!0&&(ee=!0),z!==null&&t.update(z,34963),ee&&(D(b,F,I,N),z!==null&&i.bindBuffer(34963,t.get(z).buffer))}function u(){return n.isWebGL2?i.createVertexArray():s.createVertexArrayOES()}function f(b){return n.isWebGL2?i.bindVertexArray(b):s.bindVertexArrayOES(b)}function d(b){return n.isWebGL2?i.deleteVertexArray(b):s.deleteVertexArrayOES(b)}function g(b,F,I){const N=I.wireframe===!0;let z=a[b.id];z===void 0&&(z={},a[b.id]=z);let ee=z[F.id];ee===void 0&&(ee={},z[F.id]=ee);let re=ee[N];return re===void 0&&(re=_(u()),ee[N]=re),re}function _(b){const F=[],I=[],N=[];for(let z=0;z<r;z++)F[z]=0,I[z]=0,N[z]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:F,enabledAttributes:I,attributeDivisors:N,object:b,attributes:{},index:null}}function v(b,F){const I=c.attributes,N=b.attributes;let z=0;for(const ee in N){const re=I[ee],G=N[ee];if(re===void 0||re.attribute!==G||re.data!==G.data)return!0;z++}return c.attributesNum!==z||c.index!==F}function p(b,F){const I={},N=b.attributes;let z=0;for(const ee in N){const re=N[ee],G={};G.attribute=re,re.data&&(G.data=re.data),I[ee]=G,z++}c.attributes=I,c.attributesNum=z,c.index=F}function m(){const b=c.newAttributes;for(let F=0,I=b.length;F<I;F++)b[F]=0}function y(b){x(b,0)}function x(b,F){const I=c.newAttributes,N=c.enabledAttributes,z=c.attributeDivisors;I[b]=1,N[b]===0&&(i.enableVertexAttribArray(b),N[b]=1),z[b]!==F&&((n.isWebGL2?i:e.get("ANGLE_instanced_arrays"))[n.isWebGL2?"vertexAttribDivisor":"vertexAttribDivisorANGLE"](b,F),z[b]=F)}function M(){const b=c.newAttributes,F=c.enabledAttributes;for(let I=0,N=F.length;I<N;I++)F[I]!==b[I]&&(i.disableVertexAttribArray(I),F[I]=0)}function R(b,F,I,N,z,ee){n.isWebGL2===!0&&(I===5124||I===5125)?i.vertexAttribIPointer(b,F,I,z,ee):i.vertexAttribPointer(b,F,I,N,z,ee)}function D(b,F,I,N){if(n.isWebGL2===!1&&(b.isInstancedMesh||N.isInstancedBufferGeometry)&&e.get("ANGLE_instanced_arrays")===null)return;m();const z=N.attributes,ee=I.getAttributes(),re=F.defaultAttributeValues;for(const G in ee){const W=ee[G];if(W.location>=0){let ae=z[G];if(ae===void 0&&(G==="instanceMatrix"&&b.instanceMatrix&&(ae=b.instanceMatrix),G==="instanceColor"&&b.instanceColor&&(ae=b.instanceColor)),ae!==void 0){const ie=ae.normalized,ue=ae.itemSize,Re=t.get(ae);if(Re===void 0)continue;const X=Re.buffer,Ce=Re.type,xe=Re.bytesPerElement;if(ae.isInterleavedBufferAttribute){const de=ae.data,pe=de.stride,Fe=ae.offset;if(de&&de.isInstancedInterleavedBuffer){for(let V=0;V<W.locationSize;V++)x(W.location+V,de.meshPerAttribute);b.isInstancedMesh!==!0&&N._maxInstanceCount===void 0&&(N._maxInstanceCount=de.meshPerAttribute*de.count)}else for(let V=0;V<W.locationSize;V++)y(W.location+V);i.bindBuffer(34962,X);for(let V=0;V<W.locationSize;V++)R(W.location+V,ue/W.locationSize,Ce,ie,pe*xe,(Fe+ue/W.locationSize*V)*xe)}else{if(ae.isInstancedBufferAttribute){for(let de=0;de<W.locationSize;de++)x(W.location+de,ae.meshPerAttribute);b.isInstancedMesh!==!0&&N._maxInstanceCount===void 0&&(N._maxInstanceCount=ae.meshPerAttribute*ae.count)}else for(let de=0;de<W.locationSize;de++)y(W.location+de);i.bindBuffer(34962,X);for(let de=0;de<W.locationSize;de++)R(W.location+de,ue/W.locationSize,Ce,ie,ue*xe,ue/W.locationSize*de*xe)}}else if(re!==void 0){const ie=re[G];if(ie!==void 0)switch(ie.length){case 2:i.vertexAttrib2fv(W.location,ie);break;case 3:i.vertexAttrib3fv(W.location,ie);break;case 4:i.vertexAttrib4fv(W.location,ie);break;default:i.vertexAttrib1fv(W.location,ie)}}}}M()}function O(){P();for(const b in a){const F=a[b];for(const I in F){const N=F[I];for(const z in N)d(N[z].object),delete N[z];delete F[I]}delete a[b]}}function j(b){if(a[b.id]===void 0)return;const F=a[b.id];for(const I in F){const N=F[I];for(const z in N)d(N[z].object),delete N[z];delete F[I]}delete a[b.id]}function k(b){for(const F in a){const I=a[F];if(I[b.id]===void 0)continue;const N=I[b.id];for(const z in N)d(N[z].object),delete N[z];delete I[b.id]}}function P(){w(),c!==l&&(c=l,f(c.object))}function w(){l.geometry=null,l.program=null,l.wireframe=!1}return{setup:h,reset:P,resetDefaultState:w,dispose:O,releaseStatesOfGeometry:j,releaseStatesOfProgram:k,initAttributes:m,enableAttribute:y,disableUnusedAttributes:M}}function q_(i,e,t,n){const r=n.isWebGL2;let s;function o(c){s=c}function a(c,h){i.drawArrays(s,c,h),t.update(h,s,1)}function l(c,h,u){if(u===0)return;let f,d;if(r)f=i,d="drawArraysInstanced";else if(f=e.get("ANGLE_instanced_arrays"),d="drawArraysInstancedANGLE",f===null){console.error("THREE.WebGLBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}f[d](s,c,h,u),t.update(h,s,u)}this.setMode=o,this.render=a,this.renderInstances=l}function X_(i,e,t){let n;function r(){if(n!==void 0)return n;if(e.has("EXT_texture_filter_anisotropic")===!0){const D=e.get("EXT_texture_filter_anisotropic");n=i.getParameter(D.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else n=0;return n}function s(D){if(D==="highp"){if(i.getShaderPrecisionFormat(35633,36338).precision>0&&i.getShaderPrecisionFormat(35632,36338).precision>0)return"highp";D="mediump"}return D==="mediump"&&i.getShaderPrecisionFormat(35633,36337).precision>0&&i.getShaderPrecisionFormat(35632,36337).precision>0?"mediump":"lowp"}const o=typeof WebGL2RenderingContext<"u"&&i instanceof WebGL2RenderingContext||typeof WebGL2ComputeRenderingContext<"u"&&i instanceof WebGL2ComputeRenderingContext;let a=t.precision!==void 0?t.precision:"highp";const l=s(a);l!==a&&(console.warn("THREE.WebGLRenderer:",a,"not supported, using",l,"instead."),a=l);const c=o||e.has("WEBGL_draw_buffers"),h=t.logarithmicDepthBuffer===!0,u=i.getParameter(34930),f=i.getParameter(35660),d=i.getParameter(3379),g=i.getParameter(34076),_=i.getParameter(34921),v=i.getParameter(36347),p=i.getParameter(36348),m=i.getParameter(36349),y=f>0,x=o||e.has("OES_texture_float"),M=y&&x,R=o?i.getParameter(36183):0;return{isWebGL2:o,drawBuffers:c,getMaxAnisotropy:r,getMaxPrecision:s,precision:a,logarithmicDepthBuffer:h,maxTextures:u,maxVertexTextures:f,maxTextureSize:d,maxCubemapSize:g,maxAttributes:_,maxVertexUniforms:v,maxVaryings:p,maxFragmentUniforms:m,vertexTextures:y,floatFragmentTextures:x,floatVertexTextures:M,maxSamples:R}}function Y_(i){const e=this;let t=null,n=0,r=!1,s=!1;const o=new un,a=new ft,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(u,f,d){const g=u.length!==0||f||n!==0||r;return r=f,t=h(u,d,0),n=u.length,g},this.beginShadows=function(){s=!0,h(null)},this.endShadows=function(){s=!1,c()},this.setState=function(u,f,d){const g=u.clippingPlanes,_=u.clipIntersection,v=u.clipShadows,p=i.get(u);if(!r||g===null||g.length===0||s&&!v)s?h(null):c();else{const m=s?0:n,y=m*4;let x=p.clippingState||null;l.value=x,x=h(g,f,y,d);for(let M=0;M!==y;++M)x[M]=t[M];p.clippingState=x,this.numIntersection=_?this.numPlanes:0,this.numPlanes+=m}};function c(){l.value!==t&&(l.value=t,l.needsUpdate=n>0),e.numPlanes=n,e.numIntersection=0}function h(u,f,d,g){const _=u!==null?u.length:0;let v=null;if(_!==0){if(v=l.value,g!==!0||v===null){const p=d+_*4,m=f.matrixWorldInverse;a.getNormalMatrix(m),(v===null||v.length<p)&&(v=new Float32Array(p));for(let y=0,x=d;y!==_;++y,x+=4)o.copy(u[y]).applyMatrix4(m,a),o.normal.toArray(v,x),v[x+3]=o.constant}l.value=v,l.needsUpdate=!0}return e.numPlanes=_,e.numIntersection=0,v}}function j_(i){let e=new WeakMap;function t(o,a){return a===na?o.mapping=yr:a===ia&&(o.mapping=Mr),o}function n(o){if(o&&o.isTexture&&o.isRenderTargetTexture===!1){const a=o.mapping;if(a===na||a===ia)if(e.has(o)){const l=e.get(o).texture;return t(l,o.mapping)}else{const l=o.image;if(l&&l.height>0){const c=i.getRenderTarget(),h=new rh(l.height/2);return h.fromEquirectangularTexture(i,o),e.set(o,h),i.setRenderTarget(c),o.addEventListener("dispose",r),t(h.texture,o.mapping)}else return null}}return o}function r(o){const a=o.target;a.removeEventListener("dispose",r);const l=e.get(a);l!==void 0&&(e.delete(a),l.dispose())}function s(){e=new WeakMap}return{get:n,dispose:s}}class Pa extends Ca{constructor(e=-1,t=1,n=1,r=-1,s=.1,o=2e3){super(),this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=n,this.bottom=r,this.near=s,this.far=o,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,n,r,s,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=r,this.view.width=s,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,r=(this.top+this.bottom)/2;let s=n-e,o=n+e,a=r+t,l=r-t;if(this.view!==null&&this.view.enabled){const c=(this.right-this.left)/this.view.fullWidth/this.zoom,h=(this.top-this.bottom)/this.view.fullHeight/this.zoom;s+=c*this.view.offsetX,o=s+c*this.view.width,a-=h*this.view.offsetY,l=a-h*this.view.height}this.projectionMatrix.makeOrthographic(s,o,a,l,this.near,this.far),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}}Pa.prototype.isOrthographicCamera=!0;class ks extends Xn{constructor(e){super(e),this.type="RawShaderMaterial"}}ks.prototype.isRawShaderMaterial=!0;const bi=4,Sn=8,Yt=Math.pow(2,Sn),oh=[.125,.215,.35,.446,.526,.582],ah=Sn-bi+1+oh.length,ci=20,bs={[Ht]:0,[Pi]:1},Eo=new Pa,{_lodPlanes:Yi,_sizeLods:uc,_sigmas:Zr}=Z_(),hc=new ve;let Ao=null;const Bn=(1+Math.sqrt(5))/2,ui=1/Bn,fc=[new C(1,1,1),new C(-1,1,1),new C(1,1,-1),new C(-1,1,-1),new C(0,Bn,ui),new C(0,Bn,-ui),new C(ui,0,Bn),new C(-ui,0,Bn),new C(Bn,ui,0),new C(-Bn,ui,0)];class $_{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._blurMaterial=J_(ci),this._equirectShader=null,this._cubemapShader=null,this._compileMaterial(this._blurMaterial)}fromScene(e,t=0,n=.1,r=100){Ao=this._renderer.getRenderTarget();const s=this._allocateTargets();return this._sceneToCubeUV(e,n,r,s),t>0&&this._blur(s,0,0,t),this._applyPMREM(s),this._cleanup(s),s}fromEquirectangular(e){return this._fromTexture(e)}fromCubemap(e){return this._fromTexture(e)}compileCubemapShader(){this._cubemapShader===null&&(this._cubemapShader=mc(),this._compileMaterial(this._cubemapShader))}compileEquirectangularShader(){this._equirectShader===null&&(this._equirectShader=pc(),this._compileMaterial(this._equirectShader))}dispose(){this._blurMaterial.dispose(),this._cubemapShader!==null&&this._cubemapShader.dispose(),this._equirectShader!==null&&this._equirectShader.dispose();for(let e=0;e<Yi.length;e++)Yi[e].dispose()}_cleanup(e){this._pingPongRenderTarget.dispose(),this._renderer.setRenderTarget(Ao),e.scissorTest=!1,Jr(e,0,0,e.width,e.height)}_fromTexture(e){Ao=this._renderer.getRenderTarget();const t=this._allocateTargets(e);return this._textureToCubeUV(e,t),this._applyPMREM(t),this._cleanup(t),t}_allocateTargets(e){const t={magFilter:Mt,minFilter:Mt,generateMipmaps:!1,type:Un,format:ct,encoding:Ht,depthBuffer:!1},n=dc(t);return n.depthBuffer=!e,this._pingPongRenderTarget=dc(t),n}_compileMaterial(e){const t=new gt(Yi[0],e);this._renderer.compile(t,Eo)}_sceneToCubeUV(e,t,n,r){const a=new mt(90,1,t,n),l=[1,-1,1,1,1,1],c=[1,1,1,-1,-1,-1],h=this._renderer,u=h.autoClear,f=h.toneMapping;h.getClearColor(hc),h.toneMapping=wn,h.autoClear=!1;const d=new br({name:"PMREM.Background",side:rt,depthWrite:!1,depthTest:!1}),g=new gt(new Bi,d);let _=!1;const v=e.background;v?v.isColor&&(d.color.copy(v),e.background=null,_=!0):(d.color.copy(hc),_=!0);for(let p=0;p<6;p++){const m=p%3;m==0?(a.up.set(0,l[p],0),a.lookAt(c[p],0,0)):m==1?(a.up.set(0,0,l[p]),a.lookAt(0,c[p],0)):(a.up.set(0,l[p],0),a.lookAt(0,0,c[p])),Jr(r,m*Yt,p>2?Yt:0,Yt,Yt),h.setRenderTarget(r),_&&h.render(g,a),h.render(e,a)}g.geometry.dispose(),g.material.dispose(),h.toneMapping=f,h.autoClear=u,e.background=v}_setEncoding(e,t){this._renderer.capabilities.isWebGL2===!0&&t.format===ct&&t.type===hn&&t.encoding===Pi?e.value=bs[Ht]:e.value=bs[t.encoding]}_textureToCubeUV(e,t){const n=this._renderer,r=e.mapping===yr||e.mapping===Mr;r?this._cubemapShader==null&&(this._cubemapShader=mc()):this._equirectShader==null&&(this._equirectShader=pc());const s=r?this._cubemapShader:this._equirectShader,o=new gt(Yi[0],s),a=s.uniforms;a.envMap.value=e,r||a.texelSize.value.set(1/e.image.width,1/e.image.height),this._setEncoding(a.inputEncoding,e),Jr(t,0,0,3*Yt,2*Yt),n.setRenderTarget(t),n.render(o,Eo)}_applyPMREM(e){const t=this._renderer,n=t.autoClear;t.autoClear=!1;for(let r=1;r<ah;r++){const s=Math.sqrt(Zr[r]*Zr[r]-Zr[r-1]*Zr[r-1]),o=fc[(r-1)%fc.length];this._blur(e,r-1,r,s,o)}t.autoClear=n}_blur(e,t,n,r,s){const o=this._pingPongRenderTarget;this._halfBlur(e,o,t,n,r,"latitudinal",s),this._halfBlur(o,e,n,n,r,"longitudinal",s)}_halfBlur(e,t,n,r,s,o,a){const l=this._renderer,c=this._blurMaterial;o!=="latitudinal"&&o!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const h=3,u=new gt(Yi[r],c),f=c.uniforms,d=uc[n]-1,g=isFinite(s)?Math.PI/(2*d):2*Math.PI/(2*ci-1),_=s/g,v=isFinite(s)?1+Math.floor(h*_):ci;v>ci&&console.warn(`sigmaRadians, ${s}, is too large and will clip, as it requested ${v} samples when the maximum is set to ${ci}`);const p=[];let m=0;for(let R=0;R<ci;++R){const D=R/_,O=Math.exp(-D*D/2);p.push(O),R==0?m+=O:R<v&&(m+=2*O)}for(let R=0;R<p.length;R++)p[R]=p[R]/m;f.envMap.value=e.texture,f.samples.value=v,f.weights.value=p,f.latitudinal.value=o==="latitudinal",a&&(f.poleAxis.value=a),f.dTheta.value=g,f.mipInt.value=Sn-n;const y=uc[r],x=3*Math.max(0,Yt-2*y),M=(r===0?0:2*Yt)+2*y*(r>Sn-bi?r-Sn+bi:0);Jr(t,x,M,3*y,2*y),l.setRenderTarget(t),l.render(u,Eo)}}function Z_(){const i=[],e=[],t=[];let n=Sn;for(let r=0;r<ah;r++){const s=Math.pow(2,n);e.push(s);let o=1/s;r>Sn-bi?o=oh[r-Sn+bi-1]:r==0&&(o=0),t.push(o);const a=1/(s-1),l=-a/2,c=1+a/2,h=[l,l,c,l,c,c,l,l,c,c,l,c],u=6,f=6,d=3,g=2,_=1,v=new Float32Array(d*f*u),p=new Float32Array(g*f*u),m=new Float32Array(_*f*u);for(let x=0;x<u;x++){const M=x%3*2/3-1,R=x>2?0:-1,D=[M,R,0,M+2/3,R,0,M+2/3,R+1,0,M,R,0,M+2/3,R+1,0,M,R+1,0];v.set(D,d*f*x),p.set(h,g*f*x);const O=[x,x,x,x,x,x];m.set(O,_*f*x)}const y=new je;y.setAttribute("position",new at(v,d)),y.setAttribute("uv",new at(p,g)),y.setAttribute("faceIndex",new at(m,_)),i.push(y),n>bi&&n--}return{_lodPlanes:i,_sizeLods:e,_sigmas:t}}function dc(i){const e=new It(3*Yt,3*Yt,i);return e.texture.mapping=Ns,e.texture.name="PMREM.cubeUv",e.scissorTest=!0,e}function Jr(i,e,t,n,r){i.viewport.set(e,t,n,r),i.scissor.set(e,t,n,r)}function J_(i){const e=new Float32Array(i),t=new C(0,1,0);return new ks({name:"SphericalGaussianBlur",defines:{n:i},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:e},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:t}},vertexShader:Ia(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			${Da()}

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`,blending:bn,depthTest:!1,depthWrite:!1})}function pc(){const i=new Z(1,1);return new ks({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null},texelSize:{value:i},inputEncoding:{value:bs[Ht]}},vertexShader:Ia(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform vec2 texelSize;

			${Da()}

			#include <common>

			void main() {

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				vec2 f = fract( uv / texelSize - 0.5 );
				uv -= f * texelSize;
				vec3 tl = envMapTexelToLinear( texture2D ( envMap, uv ) ).rgb;
				uv.x += texelSize.x;
				vec3 tr = envMapTexelToLinear( texture2D ( envMap, uv ) ).rgb;
				uv.y += texelSize.y;
				vec3 br = envMapTexelToLinear( texture2D ( envMap, uv ) ).rgb;
				uv.x -= texelSize.x;
				vec3 bl = envMapTexelToLinear( texture2D ( envMap, uv ) ).rgb;

				vec3 tm = mix( tl, tr, f.x );
				vec3 bm = mix( bl, br, f.x );
				gl_FragColor.rgb = mix( tm, bm, f.y );

			}
		`,blending:bn,depthTest:!1,depthWrite:!1})}function mc(){return new ks({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},inputEncoding:{value:bs[Ht]}},vertexShader:Ia(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			${Da()}

			void main() {

				gl_FragColor = envMapTexelToLinear( textureCube( envMap, vec3( - vOutputDirection.x, vOutputDirection.yz ) ) );

			}
		`,blending:bn,depthTest:!1,depthWrite:!1})}function Ia(){return`

		precision mediump float;
		precision mediump int;

		attribute vec3 position;
		attribute vec2 uv;
		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`}function Da(){return`

		uniform int inputEncoding;

		#include <encodings_pars_fragment>

		vec4 inputTexelToLinear( vec4 value ) {

			if ( inputEncoding == 0 ) {

				return value;

			} else {

				return sRGBToLinear( value );

			}

		}

		vec4 envMapTexelToLinear( vec4 color ) {

			return inputTexelToLinear( color );

		}
	`}function Q_(i){let e=new WeakMap,t=null;function n(a){if(a&&a.isTexture&&a.isRenderTargetTexture===!1){const l=a.mapping,c=l===na||l===ia,h=l===yr||l===Mr;if(c||h){if(e.has(a))return e.get(a).texture;{const u=a.image;if(c&&u&&u.height>0||h&&u&&r(u)){const f=i.getRenderTarget();t===null&&(t=new $_(i));const d=c?t.fromEquirectangular(a):t.fromCubemap(a);return e.set(a,d),i.setRenderTarget(f),a.addEventListener("dispose",s),d.texture}else return null}}}return a}function r(a){let l=0;const c=6;for(let h=0;h<c;h++)a[h]!==void 0&&l++;return l===c}function s(a){const l=a.target;l.removeEventListener("dispose",s);const c=e.get(l);c!==void 0&&(e.delete(l),c.dispose())}function o(){e=new WeakMap,t!==null&&(t.dispose(),t=null)}return{get:n,dispose:o}}function K_(i){const e={};function t(n){if(e[n]!==void 0)return e[n];let r;switch(n){case"WEBGL_depth_texture":r=i.getExtension("WEBGL_depth_texture")||i.getExtension("MOZ_WEBGL_depth_texture")||i.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":r=i.getExtension("EXT_texture_filter_anisotropic")||i.getExtension("MOZ_EXT_texture_filter_anisotropic")||i.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":r=i.getExtension("WEBGL_compressed_texture_s3tc")||i.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":r=i.getExtension("WEBGL_compressed_texture_pvrtc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:r=i.getExtension(n)}return e[n]=r,r}return{has:function(n){return t(n)!==null},init:function(n){n.isWebGL2?t("EXT_color_buffer_float"):(t("WEBGL_depth_texture"),t("OES_texture_float"),t("OES_texture_half_float"),t("OES_texture_half_float_linear"),t("OES_standard_derivatives"),t("OES_element_index_uint"),t("OES_vertex_array_object"),t("ANGLE_instanced_arrays")),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture")},get:function(n){const r=t(n);return r===null&&console.warn("THREE.WebGLRenderer: "+n+" extension not supported."),r}}}function ev(i,e,t,n){const r={},s=new WeakMap;function o(u){const f=u.target;f.index!==null&&e.remove(f.index);for(const g in f.attributes)e.remove(f.attributes[g]);f.removeEventListener("dispose",o),delete r[f.id];const d=s.get(f);d&&(e.remove(d),s.delete(f)),n.releaseStatesOfGeometry(f),f.isInstancedBufferGeometry===!0&&delete f._maxInstanceCount,t.memory.geometries--}function a(u,f){return r[f.id]===!0||(f.addEventListener("dispose",o),r[f.id]=!0,t.memory.geometries++),f}function l(u){const f=u.attributes;for(const g in f)e.update(f[g],34962);const d=u.morphAttributes;for(const g in d){const _=d[g];for(let v=0,p=_.length;v<p;v++)e.update(_[v],34962)}}function c(u){const f=[],d=u.index,g=u.attributes.position;let _=0;if(d!==null){const m=d.array;_=d.version;for(let y=0,x=m.length;y<x;y+=3){const M=m[y+0],R=m[y+1],D=m[y+2];f.push(M,R,R,D,D,M)}}else{const m=g.array;_=g.version;for(let y=0,x=m.length/3-1;y<x;y+=3){const M=y+0,R=y+1,D=y+2;f.push(M,R,R,D,D,M)}}const v=new(Ku(f)>65535?ih:nh)(f,1);v.version=_;const p=s.get(u);p&&e.remove(p),s.set(u,v)}function h(u){const f=s.get(u);if(f){const d=u.index;d!==null&&f.version<d.version&&c(u)}else c(u);return s.get(u)}return{get:a,update:l,getWireframeAttribute:h}}function tv(i,e,t,n){const r=n.isWebGL2;let s;function o(f){s=f}let a,l;function c(f){a=f.type,l=f.bytesPerElement}function h(f,d){i.drawElements(s,d,a,f*l),t.update(d,s,1)}function u(f,d,g){if(g===0)return;let _,v;if(r)_=i,v="drawElementsInstanced";else if(_=e.get("ANGLE_instanced_arrays"),v="drawElementsInstancedANGLE",_===null){console.error("THREE.WebGLIndexedBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}_[v](s,d,a,f*l,g),t.update(d,s,g)}this.setMode=o,this.setIndex=c,this.render=h,this.renderInstances=u}function nv(i){const e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function n(s,o,a){switch(t.calls++,o){case 4:t.triangles+=a*(s/3);break;case 1:t.lines+=a*(s/2);break;case 3:t.lines+=a*(s-1);break;case 2:t.lines+=a*s;break;case 0:t.points+=a*s;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",o);break}}function r(){t.frame++,t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:r,update:n}}class Na extends ut{constructor(e=null,t=1,n=1,r=1){super(null),this.image={data:e,width:t,height:n,depth:r},this.magFilter=st,this.minFilter=st,this.wrapR=Ct,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}Na.prototype.isDataTexture2DArray=!0;function iv(i,e){return i[0]-e[0]}function rv(i,e){return Math.abs(e[1])-Math.abs(i[1])}function gc(i,e){let t=1;const n=e.isInterleavedBufferAttribute?e.data.array:e.array;n instanceof Int8Array?t=127:n instanceof Int16Array?t=32767:n instanceof Int32Array?t=2147483647:console.error("THREE.WebGLMorphtargets: Unsupported morph attribute data type: ",n),i.divideScalar(t)}function sv(i,e,t){const n={},r=new Float32Array(8),s=new WeakMap,o=new C,a=[];for(let c=0;c<8;c++)a[c]=[c,0];function l(c,h,u,f){const d=c.morphTargetInfluences;if(e.isWebGL2===!0){const g=h.morphAttributes.position.length;let _=s.get(h);if(_===void 0||_.count!==g){_!==void 0&&_.texture.dispose();const m=h.morphAttributes.normal!==void 0,y=h.morphAttributes.position,x=h.morphAttributes.normal||[],M=h.attributes.position.count,R=m===!0?2:1;let D=M*R,O=1;D>e.maxTextureSize&&(O=Math.ceil(D/e.maxTextureSize),D=e.maxTextureSize);const j=new Float32Array(D*O*4*g),k=new Na(j,D,O,g);k.format=ct,k.type=Mn,k.needsUpdate=!0;const P=R*4;for(let w=0;w<g;w++){const b=y[w],F=x[w],I=D*O*4*w;for(let N=0;N<b.count;N++){o.fromBufferAttribute(b,N),b.normalized===!0&&gc(o,b);const z=N*P;j[I+z+0]=o.x,j[I+z+1]=o.y,j[I+z+2]=o.z,j[I+z+3]=0,m===!0&&(o.fromBufferAttribute(F,N),F.normalized===!0&&gc(o,F),j[I+z+4]=o.x,j[I+z+5]=o.y,j[I+z+6]=o.z,j[I+z+7]=0)}}_={count:g,texture:k,size:new Z(D,O)},s.set(h,_)}let v=0;for(let m=0;m<d.length;m++)v+=d[m];const p=h.morphTargetsRelative?1:1-v;f.getUniforms().setValue(i,"morphTargetBaseInfluence",p),f.getUniforms().setValue(i,"morphTargetInfluences",d),f.getUniforms().setValue(i,"morphTargetsTexture",_.texture,t),f.getUniforms().setValue(i,"morphTargetsTextureSize",_.size)}else{const g=d===void 0?0:d.length;let _=n[h.id];if(_===void 0||_.length!==g){_=[];for(let x=0;x<g;x++)_[x]=[x,0];n[h.id]=_}for(let x=0;x<g;x++){const M=_[x];M[0]=x,M[1]=d[x]}_.sort(rv);for(let x=0;x<8;x++)x<g&&_[x][1]?(a[x][0]=_[x][0],a[x][1]=_[x][1]):(a[x][0]=Number.MAX_SAFE_INTEGER,a[x][1]=0);a.sort(iv);const v=h.morphAttributes.position,p=h.morphAttributes.normal;let m=0;for(let x=0;x<8;x++){const M=a[x],R=M[0],D=M[1];R!==Number.MAX_SAFE_INTEGER&&D?(v&&h.getAttribute("morphTarget"+x)!==v[R]&&h.setAttribute("morphTarget"+x,v[R]),p&&h.getAttribute("morphNormal"+x)!==p[R]&&h.setAttribute("morphNormal"+x,p[R]),r[x]=D,m+=D):(v&&h.hasAttribute("morphTarget"+x)===!0&&h.deleteAttribute("morphTarget"+x),p&&h.hasAttribute("morphNormal"+x)===!0&&h.deleteAttribute("morphNormal"+x),r[x]=0)}const y=h.morphTargetsRelative?1:1-m;f.getUniforms().setValue(i,"morphTargetBaseInfluence",y),f.getUniforms().setValue(i,"morphTargetInfluences",r)}}return{update:l}}function ov(i,e,t,n){let r=new WeakMap;function s(l){const c=n.render.frame,h=l.geometry,u=e.get(l,h);return r.get(u)!==c&&(e.update(u),r.set(u,c)),l.isInstancedMesh&&(l.hasEventListener("dispose",a)===!1&&l.addEventListener("dispose",a),t.update(l.instanceMatrix,34962),l.instanceColor!==null&&t.update(l.instanceColor,34962)),u}function o(){r=new WeakMap}function a(l){const c=l.target;c.removeEventListener("dispose",a),t.remove(c.instanceMatrix),c.instanceColor!==null&&t.remove(c.instanceColor)}return{update:s,dispose:o}}class lh extends ut{constructor(e=null,t=1,n=1,r=1){super(null),this.image={data:e,width:t,height:n,depth:r},this.magFilter=st,this.minFilter=st,this.wrapR=Ct,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}lh.prototype.isDataTexture3D=!0;const ch=new ut,uh=new Na,hh=new lh,fh=new Bs,_c=[],vc=[],xc=new Float32Array(16),yc=new Float32Array(9),Mc=new Float32Array(4);function Oi(i,e,t){const n=i[0];if(n<=0||n>0)return i;const r=e*t;let s=_c[r];if(s===void 0&&(s=new Float32Array(r),_c[r]=s),e!==0){n.toArray(s,0);for(let o=1,a=0;o!==e;++o)a+=t,i[o].toArray(s,a)}return s}function bt(i,e){if(i.length!==e.length)return!1;for(let t=0,n=i.length;t<n;t++)if(i[t]!==e[t])return!1;return!0}function vt(i,e){for(let t=0,n=e.length;t<n;t++)i[t]=e[t]}function Us(i,e){let t=vc[e];t===void 0&&(t=new Int32Array(e),vc[e]=t);for(let n=0;n!==e;++n)t[n]=i.allocateTextureUnit();return t}function av(i,e){const t=this.cache;t[0]!==e&&(i.uniform1f(this.addr,e),t[0]=e)}function lv(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(bt(t,e))return;i.uniform2fv(this.addr,e),vt(t,e)}}function cv(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(i.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(bt(t,e))return;i.uniform3fv(this.addr,e),vt(t,e)}}function uv(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(bt(t,e))return;i.uniform4fv(this.addr,e),vt(t,e)}}function hv(i,e){const t=this.cache,n=e.elements;if(n===void 0){if(bt(t,e))return;i.uniformMatrix2fv(this.addr,!1,e),vt(t,e)}else{if(bt(t,n))return;Mc.set(n),i.uniformMatrix2fv(this.addr,!1,Mc),vt(t,n)}}function fv(i,e){const t=this.cache,n=e.elements;if(n===void 0){if(bt(t,e))return;i.uniformMatrix3fv(this.addr,!1,e),vt(t,e)}else{if(bt(t,n))return;yc.set(n),i.uniformMatrix3fv(this.addr,!1,yc),vt(t,n)}}function dv(i,e){const t=this.cache,n=e.elements;if(n===void 0){if(bt(t,e))return;i.uniformMatrix4fv(this.addr,!1,e),vt(t,e)}else{if(bt(t,n))return;xc.set(n),i.uniformMatrix4fv(this.addr,!1,xc),vt(t,n)}}function pv(i,e){const t=this.cache;t[0]!==e&&(i.uniform1i(this.addr,e),t[0]=e)}function mv(i,e){const t=this.cache;bt(t,e)||(i.uniform2iv(this.addr,e),vt(t,e))}function gv(i,e){const t=this.cache;bt(t,e)||(i.uniform3iv(this.addr,e),vt(t,e))}function _v(i,e){const t=this.cache;bt(t,e)||(i.uniform4iv(this.addr,e),vt(t,e))}function vv(i,e){const t=this.cache;t[0]!==e&&(i.uniform1ui(this.addr,e),t[0]=e)}function xv(i,e){const t=this.cache;bt(t,e)||(i.uniform2uiv(this.addr,e),vt(t,e))}function yv(i,e){const t=this.cache;bt(t,e)||(i.uniform3uiv(this.addr,e),vt(t,e))}function Mv(i,e){const t=this.cache;bt(t,e)||(i.uniform4uiv(this.addr,e),vt(t,e))}function bv(i,e,t){const n=this.cache,r=t.allocateTextureUnit();n[0]!==r&&(i.uniform1i(this.addr,r),n[0]=r),t.safeSetTexture2D(e||ch,r)}function wv(i,e,t){const n=this.cache,r=t.allocateTextureUnit();n[0]!==r&&(i.uniform1i(this.addr,r),n[0]=r),t.setTexture3D(e||hh,r)}function Sv(i,e,t){const n=this.cache,r=t.allocateTextureUnit();n[0]!==r&&(i.uniform1i(this.addr,r),n[0]=r),t.safeSetTextureCube(e||fh,r)}function Tv(i,e,t){const n=this.cache,r=t.allocateTextureUnit();n[0]!==r&&(i.uniform1i(this.addr,r),n[0]=r),t.setTexture2DArray(e||uh,r)}function Ev(i){switch(i){case 5126:return av;case 35664:return lv;case 35665:return cv;case 35666:return uv;case 35674:return hv;case 35675:return fv;case 35676:return dv;case 5124:case 35670:return pv;case 35667:case 35671:return mv;case 35668:case 35672:return gv;case 35669:case 35673:return _v;case 5125:return vv;case 36294:return xv;case 36295:return yv;case 36296:return Mv;case 35678:case 36198:case 36298:case 36306:case 35682:return bv;case 35679:case 36299:case 36307:return wv;case 35680:case 36300:case 36308:case 36293:return Sv;case 36289:case 36303:case 36311:case 36292:return Tv}}function Av(i,e){i.uniform1fv(this.addr,e)}function Cv(i,e){const t=Oi(e,this.size,2);i.uniform2fv(this.addr,t)}function Lv(i,e){const t=Oi(e,this.size,3);i.uniform3fv(this.addr,t)}function Rv(i,e){const t=Oi(e,this.size,4);i.uniform4fv(this.addr,t)}function Pv(i,e){const t=Oi(e,this.size,4);i.uniformMatrix2fv(this.addr,!1,t)}function Iv(i,e){const t=Oi(e,this.size,9);i.uniformMatrix3fv(this.addr,!1,t)}function Dv(i,e){const t=Oi(e,this.size,16);i.uniformMatrix4fv(this.addr,!1,t)}function Nv(i,e){i.uniform1iv(this.addr,e)}function Fv(i,e){i.uniform2iv(this.addr,e)}function zv(i,e){i.uniform3iv(this.addr,e)}function Bv(i,e){i.uniform4iv(this.addr,e)}function Ov(i,e){i.uniform1uiv(this.addr,e)}function kv(i,e){i.uniform2uiv(this.addr,e)}function Uv(i,e){i.uniform3uiv(this.addr,e)}function Hv(i,e){i.uniform4uiv(this.addr,e)}function Gv(i,e,t){const n=e.length,r=Us(t,n);i.uniform1iv(this.addr,r);for(let s=0;s!==n;++s)t.safeSetTexture2D(e[s]||ch,r[s])}function Vv(i,e,t){const n=e.length,r=Us(t,n);i.uniform1iv(this.addr,r);for(let s=0;s!==n;++s)t.setTexture3D(e[s]||hh,r[s])}function Wv(i,e,t){const n=e.length,r=Us(t,n);i.uniform1iv(this.addr,r);for(let s=0;s!==n;++s)t.safeSetTextureCube(e[s]||fh,r[s])}function qv(i,e,t){const n=e.length,r=Us(t,n);i.uniform1iv(this.addr,r);for(let s=0;s!==n;++s)t.setTexture2DArray(e[s]||uh,r[s])}function Xv(i){switch(i){case 5126:return Av;case 35664:return Cv;case 35665:return Lv;case 35666:return Rv;case 35674:return Pv;case 35675:return Iv;case 35676:return Dv;case 5124:case 35670:return Nv;case 35667:case 35671:return Fv;case 35668:case 35672:return zv;case 35669:case 35673:return Bv;case 5125:return Ov;case 36294:return kv;case 36295:return Uv;case 36296:return Hv;case 35678:case 36198:case 36298:case 36306:case 35682:return Gv;case 35679:case 36299:case 36307:return Vv;case 35680:case 36300:case 36308:case 36293:return Wv;case 36289:case 36303:case 36311:case 36292:return qv}}function Yv(i,e,t){this.id=i,this.addr=t,this.cache=[],this.setValue=Ev(e.type)}function dh(i,e,t){this.id=i,this.addr=t,this.cache=[],this.size=e.size,this.setValue=Xv(e.type)}dh.prototype.updateCache=function(i){const e=this.cache;i instanceof Float32Array&&e.length!==i.length&&(this.cache=new Float32Array(i.length)),vt(e,i)};function ph(i){this.id=i,this.seq=[],this.map={}}ph.prototype.setValue=function(i,e,t){const n=this.seq;for(let r=0,s=n.length;r!==s;++r){const o=n[r];o.setValue(i,e[o.id],t)}};const Co=/(\w+)(\])?(\[|\.)?/g;function bc(i,e){i.seq.push(e),i.map[e.id]=e}function jv(i,e,t){const n=i.name,r=n.length;for(Co.lastIndex=0;;){const s=Co.exec(n),o=Co.lastIndex;let a=s[1];const l=s[2]==="]",c=s[3];if(l&&(a=a|0),c===void 0||c==="["&&o+2===r){bc(t,c===void 0?new Yv(a,i,e):new dh(a,i,e));break}else{let u=t.map[a];u===void 0&&(u=new ph(a),bc(t,u)),t=u}}}function Tn(i,e){this.seq=[],this.map={};const t=i.getProgramParameter(e,35718);for(let n=0;n<t;++n){const r=i.getActiveUniform(e,n),s=i.getUniformLocation(e,r.name);jv(r,s,this)}}Tn.prototype.setValue=function(i,e,t,n){const r=this.map[e];r!==void 0&&r.setValue(i,t,n)};Tn.prototype.setOptional=function(i,e,t){const n=e[t];n!==void 0&&this.setValue(i,t,n)};Tn.upload=function(i,e,t,n){for(let r=0,s=e.length;r!==s;++r){const o=e[r],a=t[o.id];a.needsUpdate!==!1&&o.setValue(i,a.value,n)}};Tn.seqWithValue=function(i,e){const t=[];for(let n=0,r=i.length;n!==r;++n){const s=i[n];s.id in e&&t.push(s)}return t};function wc(i,e,t){const n=i.createShader(e);return i.shaderSource(n,t),i.compileShader(n),n}let $v=0;function Zv(i){const e=i.split(`
`);for(let t=0;t<e.length;t++)e[t]=t+1+": "+e[t];return e.join(`
`)}function mh(i){switch(i){case Ht:return["Linear","( value )"];case Pi:return["sRGB","( value )"];default:return console.warn("THREE.WebGLProgram: Unsupported encoding:",i),["Linear","( value )"]}}function Sc(i,e,t){const n=i.getShaderParameter(e,35713),r=i.getShaderInfoLog(e).trim();return n&&r===""?"":t.toUpperCase()+`

`+r+`

`+Zv(i.getShaderSource(e))}function Fn(i,e){const t=mh(e);return"vec4 "+i+"( vec4 value ) { return "+t[0]+"ToLinear"+t[1]+"; }"}function Jv(i,e){const t=mh(e);return"vec4 "+i+"( vec4 value ) { return LinearTo"+t[0]+t[1]+"; }"}function Qv(i,e){let t;switch(e){case qd:t="Linear";break;case Xd:t="Reinhard";break;case Yd:t="OptimizedCineon";break;case jd:t="ACESFilmic";break;case $d:t="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),t="Linear"}return"vec3 "+i+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}function Kv(i){return[i.extensionDerivatives||i.envMapCubeUV||i.bumpMap||i.tangentSpaceNormalMap||i.clearcoatNormalMap||i.flatShading||i.shaderID==="physical"?"#extension GL_OES_standard_derivatives : enable":"",(i.extensionFragDepth||i.logarithmicDepthBuffer)&&i.rendererExtensionFragDepth?"#extension GL_EXT_frag_depth : enable":"",i.extensionDrawBuffers&&i.rendererExtensionDrawBuffers?"#extension GL_EXT_draw_buffers : require":"",(i.extensionShaderTextureLOD||i.envMap||i.transmission)&&i.rendererExtensionShaderTextureLod?"#extension GL_EXT_shader_texture_lod : enable":""].filter(er).join(`
`)}function e0(i){const e=[];for(const t in i){const n=i[t];n!==!1&&e.push("#define "+t+" "+n)}return e.join(`
`)}function t0(i,e){const t={},n=i.getProgramParameter(e,35721);for(let r=0;r<n;r++){const s=i.getActiveAttrib(e,r),o=s.name;let a=1;s.type===35674&&(a=2),s.type===35675&&(a=3),s.type===35676&&(a=4),t[o]={type:s.type,location:i.getAttribLocation(e,o),locationSize:a}}return t}function er(i){return i!==""}function Tc(i,e){return i.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function Ec(i,e){return i.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const n0=/^[ \t]*#include +<([\w\d./]+)>/gm;function aa(i){return i.replace(n0,i0)}function i0(i,e){const t=Ne[e];if(t===void 0)throw new Error("Can not resolve #include <"+e+">");return aa(t)}const r0=/#pragma unroll_loop[\s]+?for \( int i \= (\d+)\; i < (\d+)\; i \+\+ \) \{([\s\S]+?)(?=\})\}/g,s0=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Ac(i){return i.replace(s0,gh).replace(r0,o0)}function o0(i,e,t,n){return console.warn("WebGLProgram: #pragma unroll_loop shader syntax is deprecated. Please use #pragma unroll_loop_start syntax instead."),gh(i,e,t,n)}function gh(i,e,t,n){let r="";for(let s=parseInt(e);s<parseInt(t);s++)r+=n.replace(/\[\s*i\s*\]/g,"[ "+s+" ]").replace(/UNROLLED_LOOP_INDEX/g,s);return r}function Cc(i){let e="precision "+i.precision+` float;
precision `+i.precision+" int;";return i.precision==="highp"?e+=`
#define HIGH_PRECISION`:i.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:i.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}function a0(i){let e="SHADOWMAP_TYPE_BASIC";return i.shadowMapType===Yu?e="SHADOWMAP_TYPE_PCF":i.shadowMapType===wd?e="SHADOWMAP_TYPE_PCF_SOFT":i.shadowMapType===Ki&&(e="SHADOWMAP_TYPE_VSM"),e}function l0(i){let e="ENVMAP_TYPE_CUBE";if(i.envMap)switch(i.envMapMode){case yr:case Mr:e="ENVMAP_TYPE_CUBE";break;case Ns:case Ta:e="ENVMAP_TYPE_CUBE_UV";break}return e}function c0(i){let e="ENVMAP_MODE_REFLECTION";if(i.envMap)switch(i.envMapMode){case Mr:case Ta:e="ENVMAP_MODE_REFRACTION";break}return e}function u0(i){let e="ENVMAP_BLENDING_NONE";if(i.envMap)switch(i.combine){case Ds:e="ENVMAP_BLENDING_MULTIPLY";break;case Vd:e="ENVMAP_BLENDING_MIX";break;case Wd:e="ENVMAP_BLENDING_ADD";break}return e}function h0(i,e,t,n){const r=i.getContext(),s=t.defines;let o=t.vertexShader,a=t.fragmentShader;const l=a0(t),c=l0(t),h=c0(t),u=u0(t),f=t.isWebGL2?"":Kv(t),d=e0(s),g=r.createProgram();let _,v,p=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(_=[d].filter(er).join(`
`),_.length>0&&(_+=`
`),v=[f,d].filter(er).join(`
`),v.length>0&&(v+=`
`)):(_=[Cc(t),"#define SHADER_NAME "+t.shaderName,d,t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.supportsVertexTextures?"#define VERTEX_TEXTURES":"","#define MAX_BONES "+t.maxBones,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+h:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMap&&t.objectSpaceNormalMap?"#define OBJECTSPACE_NORMALMAP":"",t.normalMap&&t.tangentSpaceNormalMap?"#define TANGENTSPACE_NORMALMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.displacementMap&&t.supportsVertexTextures?"#define USE_DISPLACEMENTMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularIntensityMap?"#define USE_SPECULARINTENSITYMAP":"",t.specularColorMap?"#define USE_SPECULARCOLORMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEENCOLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEENROUGHNESSMAP":"",t.vertexTangents?"#define USE_TANGENT":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUvs?"#define USE_UV":"",t.uvsVertexOnly?"#define UVS_VERTEX_ONLY":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.useVertexTexture?"#define BONE_TEXTURE":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphTargets&&t.isWebGL2?"#define MORPHTARGETS_TEXTURE":"",t.morphTargets&&t.isWebGL2?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.logarithmicDepthBuffer&&t.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#if ( defined( USE_MORPHTARGETS ) && ! defined( MORPHTARGETS_TEXTURE ) )","	attribute vec3 morphTarget0;","	attribute vec3 morphTarget1;","	attribute vec3 morphTarget2;","	attribute vec3 morphTarget3;","	#ifdef USE_MORPHNORMALS","		attribute vec3 morphNormal0;","		attribute vec3 morphNormal1;","		attribute vec3 morphNormal2;","		attribute vec3 morphNormal3;","	#else","		attribute vec3 morphTarget4;","		attribute vec3 morphTarget5;","		attribute vec3 morphTarget6;","		attribute vec3 morphTarget7;","	#endif","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(er).join(`
`),v=[f,Cc(t),"#define SHADER_NAME "+t.shaderName,d,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+c:"",t.envMap?"#define "+h:"",t.envMap?"#define "+u:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMap&&t.objectSpaceNormalMap?"#define OBJECTSPACE_NORMALMAP":"",t.normalMap&&t.tangentSpaceNormalMap?"#define TANGENTSPACE_NORMALMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularIntensityMap?"#define USE_SPECULARINTENSITYMAP":"",t.specularColorMap?"#define USE_SPECULARCOLORMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEENCOLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEENROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUvs?"#define USE_UV":"",t.uvsVertexOnly?"#define UVS_VERTEX_ONLY":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.physicallyCorrectLights?"#define PHYSICALLY_CORRECT_LIGHTS":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.logarithmicDepthBuffer&&t.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"",(t.extensionShaderTextureLOD||t.envMap)&&t.rendererExtensionShaderTextureLod?"#define TEXTURE_LOD_EXT":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==wn?"#define TONE_MAPPING":"",t.toneMapping!==wn?Ne.tonemapping_pars_fragment:"",t.toneMapping!==wn?Qv("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.format===Hn?"#define OPAQUE":"",Ne.encodings_pars_fragment,t.map?Fn("mapTexelToLinear",t.mapEncoding):"",t.matcap?Fn("matcapTexelToLinear",t.matcapEncoding):"",t.envMap?Fn("envMapTexelToLinear",t.envMapEncoding):"",t.emissiveMap?Fn("emissiveMapTexelToLinear",t.emissiveMapEncoding):"",t.specularColorMap?Fn("specularColorMapTexelToLinear",t.specularColorMapEncoding):"",t.sheenColorMap?Fn("sheenColorMapTexelToLinear",t.sheenColorMapEncoding):"",t.lightMap?Fn("lightMapTexelToLinear",t.lightMapEncoding):"",Jv("linearToOutputTexel",t.outputEncoding),t.depthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(er).join(`
`)),o=aa(o),o=Tc(o,t),o=Ec(o,t),a=aa(a),a=Tc(a,t),a=Ec(a,t),o=Ac(o),a=Ac(a),t.isWebGL2&&t.isRawShaderMaterial!==!0&&(p=`#version 300 es
`,_=["precision mediump sampler2DArray;","#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+_,v=["#define varying in",t.glslVersion===Jl?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===Jl?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+v);const m=p+_+o,y=p+v+a,x=wc(r,35633,m),M=wc(r,35632,y);if(r.attachShader(g,x),r.attachShader(g,M),t.index0AttributeName!==void 0?r.bindAttribLocation(g,0,t.index0AttributeName):t.morphTargets===!0&&r.bindAttribLocation(g,0,"position"),r.linkProgram(g),i.debug.checkShaderErrors){const O=r.getProgramInfoLog(g).trim(),j=r.getShaderInfoLog(x).trim(),k=r.getShaderInfoLog(M).trim();let P=!0,w=!0;if(r.getProgramParameter(g,35714)===!1){P=!1;const b=Sc(r,x,"vertex"),F=Sc(r,M,"fragment");console.error("THREE.WebGLProgram: Shader Error "+r.getError()+" - VALIDATE_STATUS "+r.getProgramParameter(g,35715)+`

Program Info Log: `+O+`
`+b+`
`+F)}else O!==""?console.warn("THREE.WebGLProgram: Program Info Log:",O):(j===""||k==="")&&(w=!1);w&&(this.diagnostics={runnable:P,programLog:O,vertexShader:{log:j,prefix:_},fragmentShader:{log:k,prefix:v}})}r.deleteShader(x),r.deleteShader(M);let R;this.getUniforms=function(){return R===void 0&&(R=new Tn(r,g)),R};let D;return this.getAttributes=function(){return D===void 0&&(D=t0(r,g)),D},this.destroy=function(){n.releaseStatesOfProgram(this),r.deleteProgram(g),this.program=void 0},this.name=t.shaderName,this.id=$v++,this.cacheKey=e,this.usedTimes=1,this.program=g,this.vertexShader=x,this.fragmentShader=M,this}let f0=0;class d0{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const t=e.vertexShader,n=e.fragmentShader,r=this._getShaderStage(t),s=this._getShaderStage(n),o=this._getShaderCacheForMaterial(e);return o.has(r)===!1&&(o.add(r),r.usedTimes++),o.has(s)===!1&&(o.add(s),s.usedTimes++),this}remove(e){const t=this.materialCache.get(e);for(const n of t)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const t=this.materialCache;return t.has(e)===!1&&t.set(e,new Set),t.get(e)}_getShaderStage(e){const t=this.shaderCache;if(t.has(e)===!1){const n=new p0;t.set(e,n)}return t.get(e)}}class p0{constructor(){this.id=f0++,this.usedTimes=0}}function m0(i,e,t,n,r,s,o){const a=new eh,l=new d0,c=[],h=r.isWebGL2,u=r.logarithmicDepthBuffer,f=r.floatVertexTextures,d=r.maxVertexUniforms,g=r.vertexTextures;let _=r.precision;const v={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function p(w){const F=w.skeleton.bones;if(f)return 1024;{const N=Math.floor((d-20)/4),z=Math.min(N,F.length);return z<F.length?(console.warn("THREE.WebGLRenderer: Skeleton has "+F.length+" bones. This GPU supports "+z+"."),0):z}}function m(w){let b;return w&&w.isTexture?b=w.encoding:w&&w.isWebGLRenderTarget?(console.warn("THREE.WebGLPrograms.getTextureEncodingFromMap: don't use render targets as textures. Use their .texture property instead."),b=w.texture.encoding):b=Ht,h&&w&&w.isTexture&&w.format===ct&&w.type===hn&&w.encoding===Pi&&(b=Ht),b}function y(w,b,F,I,N){const z=I.fog,ee=w.isMeshStandardMaterial?I.environment:null,re=(w.isMeshStandardMaterial?t:e).get(w.envMap||ee),G=v[w.type],W=N.isSkinnedMesh?p(N):0;w.precision!==null&&(_=r.getMaxPrecision(w.precision),_!==w.precision&&console.warn("THREE.WebGLProgram.getParameters:",w.precision,"not supported, using",_,"instead."));let ae,ie,ue,Re;if(G){const pe=jt[G];ae=pe.vertexShader,ie=pe.fragmentShader}else ae=w.vertexShader,ie=w.fragmentShader,l.update(w),ue=l.getVertexShaderID(w),Re=l.getFragmentShaderID(w);const X=i.getRenderTarget(),Ce=w.alphaTest>0,xe=w.clearcoat>0;return{isWebGL2:h,shaderID:G,shaderName:w.type,vertexShader:ae,fragmentShader:ie,defines:w.defines,customVertexShaderID:ue,customFragmentShaderID:Re,isRawShaderMaterial:w.isRawShaderMaterial===!0,glslVersion:w.glslVersion,precision:_,instancing:N.isInstancedMesh===!0,instancingColor:N.isInstancedMesh===!0&&N.instanceColor!==null,supportsVertexTextures:g,outputEncoding:X!==null?m(X.texture):i.outputEncoding,map:!!w.map,mapEncoding:m(w.map),matcap:!!w.matcap,matcapEncoding:m(w.matcap),envMap:!!re,envMapMode:re&&re.mapping,envMapEncoding:m(re),envMapCubeUV:!!re&&(re.mapping===Ns||re.mapping===Ta),lightMap:!!w.lightMap,lightMapEncoding:m(w.lightMap),aoMap:!!w.aoMap,emissiveMap:!!w.emissiveMap,emissiveMapEncoding:m(w.emissiveMap),bumpMap:!!w.bumpMap,normalMap:!!w.normalMap,objectSpaceNormalMap:w.normalMapType===jp,tangentSpaceNormalMap:w.normalMapType===Ii,clearcoat:xe,clearcoatMap:xe&&!!w.clearcoatMap,clearcoatRoughnessMap:xe&&!!w.clearcoatRoughnessMap,clearcoatNormalMap:xe&&!!w.clearcoatNormalMap,displacementMap:!!w.displacementMap,roughnessMap:!!w.roughnessMap,metalnessMap:!!w.metalnessMap,specularMap:!!w.specularMap,specularIntensityMap:!!w.specularIntensityMap,specularColorMap:!!w.specularColorMap,specularColorMapEncoding:m(w.specularColorMap),alphaMap:!!w.alphaMap,alphaTest:Ce,gradientMap:!!w.gradientMap,sheen:w.sheen>0,sheenColorMap:!!w.sheenColorMap,sheenColorMapEncoding:m(w.sheenColorMap),sheenRoughnessMap:!!w.sheenRoughnessMap,transmission:w.transmission>0,transmissionMap:!!w.transmissionMap,thicknessMap:!!w.thicknessMap,combine:w.combine,vertexTangents:!!w.normalMap&&!!N.geometry&&!!N.geometry.attributes.tangent,vertexColors:w.vertexColors,vertexAlphas:w.vertexColors===!0&&!!N.geometry&&!!N.geometry.attributes.color&&N.geometry.attributes.color.itemSize===4,vertexUvs:!!w.map||!!w.bumpMap||!!w.normalMap||!!w.specularMap||!!w.alphaMap||!!w.emissiveMap||!!w.roughnessMap||!!w.metalnessMap||!!w.clearcoatMap||!!w.clearcoatRoughnessMap||!!w.clearcoatNormalMap||!!w.displacementMap||!!w.transmissionMap||!!w.thicknessMap||!!w.specularIntensityMap||!!w.specularColorMap||!!w.sheenColorMap||!!w.sheenRoughnessMap,uvsVertexOnly:!(w.map||w.bumpMap||w.normalMap||w.specularMap||w.alphaMap||w.emissiveMap||w.roughnessMap||w.metalnessMap||w.clearcoatNormalMap||w.transmission>0||w.transmissionMap||w.thicknessMap||w.specularIntensityMap||w.specularColorMap||w.sheen>0||w.sheenColorMap||w.sheenRoughnessMap)&&!!w.displacementMap,fog:!!z,useFog:w.fog,fogExp2:z&&z.isFogExp2,flatShading:!!w.flatShading,sizeAttenuation:w.sizeAttenuation,logarithmicDepthBuffer:u,skinning:N.isSkinnedMesh===!0&&W>0,maxBones:W,useVertexTexture:f,morphTargets:!!N.geometry&&!!N.geometry.morphAttributes.position,morphNormals:!!N.geometry&&!!N.geometry.morphAttributes.normal,morphTargetsCount:N.geometry&&N.geometry.morphAttributes.position?N.geometry.morphAttributes.position.length:0,numDirLights:b.directional.length,numPointLights:b.point.length,numSpotLights:b.spot.length,numRectAreaLights:b.rectArea.length,numHemiLights:b.hemi.length,numDirLightShadows:b.directionalShadowMap.length,numPointLightShadows:b.pointShadowMap.length,numSpotLightShadows:b.spotShadowMap.length,numClippingPlanes:o.numPlanes,numClipIntersection:o.numIntersection,format:w.format,dithering:w.dithering,shadowMapEnabled:i.shadowMap.enabled&&F.length>0,shadowMapType:i.shadowMap.type,toneMapping:w.toneMapped?i.toneMapping:wn,physicallyCorrectLights:i.physicallyCorrectLights,premultipliedAlpha:w.premultipliedAlpha,doubleSided:w.side===Ai,flipSided:w.side===rt,depthPacking:w.depthPacking!==void 0?w.depthPacking:!1,index0AttributeName:w.index0AttributeName,extensionDerivatives:w.extensions&&w.extensions.derivatives,extensionFragDepth:w.extensions&&w.extensions.fragDepth,extensionDrawBuffers:w.extensions&&w.extensions.drawBuffers,extensionShaderTextureLOD:w.extensions&&w.extensions.shaderTextureLOD,rendererExtensionFragDepth:h||n.has("EXT_frag_depth"),rendererExtensionDrawBuffers:h||n.has("WEBGL_draw_buffers"),rendererExtensionShaderTextureLod:h||n.has("EXT_shader_texture_lod"),customProgramCacheKey:w.customProgramCacheKey()}}function x(w){const b=[];if(w.shaderID?b.push(w.shaderID):(b.push(w.customVertexShaderID),b.push(w.customFragmentShaderID)),w.defines!==void 0)for(const F in w.defines)b.push(F),b.push(w.defines[F]);return w.isRawShaderMaterial===!1&&(M(b,w),R(b,w),b.push(i.outputEncoding)),b.push(w.customProgramCacheKey),b.join()}function M(w,b){w.push(b.precision),w.push(b.outputEncoding),w.push(b.mapEncoding),w.push(b.matcapEncoding),w.push(b.envMapMode),w.push(b.envMapEncoding),w.push(b.lightMapEncoding),w.push(b.emissiveMapEncoding),w.push(b.combine),w.push(b.vertexUvs),w.push(b.fogExp2),w.push(b.sizeAttenuation),w.push(b.maxBones),w.push(b.morphTargetsCount),w.push(b.numDirLights),w.push(b.numPointLights),w.push(b.numSpotLights),w.push(b.numHemiLights),w.push(b.numRectAreaLights),w.push(b.numDirLightShadows),w.push(b.numPointLightShadows),w.push(b.numSpotLightShadows),w.push(b.shadowMapType),w.push(b.toneMapping),w.push(b.numClippingPlanes),w.push(b.numClipIntersection),w.push(b.format),w.push(b.specularColorMapEncoding),w.push(b.sheenColorMapEncoding)}function R(w,b){a.disableAll(),b.isWebGL2&&a.enable(0),b.supportsVertexTextures&&a.enable(1),b.instancing&&a.enable(2),b.instancingColor&&a.enable(3),b.map&&a.enable(4),b.matcap&&a.enable(5),b.envMap&&a.enable(6),b.envMapCubeUV&&a.enable(7),b.lightMap&&a.enable(8),b.aoMap&&a.enable(9),b.emissiveMap&&a.enable(10),b.bumpMap&&a.enable(11),b.normalMap&&a.enable(12),b.objectSpaceNormalMap&&a.enable(13),b.tangentSpaceNormalMap&&a.enable(14),b.clearcoat&&a.enable(15),b.clearcoatMap&&a.enable(16),b.clearcoatRoughnessMap&&a.enable(17),b.clearcoatNormalMap&&a.enable(18),b.displacementMap&&a.enable(19),b.specularMap&&a.enable(20),b.roughnessMap&&a.enable(21),b.metalnessMap&&a.enable(22),b.gradientMap&&a.enable(23),b.alphaMap&&a.enable(24),b.alphaTest&&a.enable(25),b.vertexColors&&a.enable(26),b.vertexAlphas&&a.enable(27),b.vertexUvs&&a.enable(28),b.vertexTangents&&a.enable(29),b.uvsVertexOnly&&a.enable(30),b.fog&&a.enable(31),w.push(a.mask),a.disableAll(),b.useFog&&a.enable(0),b.flatShading&&a.enable(1),b.logarithmicDepthBuffer&&a.enable(2),b.skinning&&a.enable(3),b.useVertexTexture&&a.enable(4),b.morphTargets&&a.enable(5),b.morphNormals&&a.enable(6),b.premultipliedAlpha&&a.enable(7),b.shadowMapEnabled&&a.enable(8),b.physicallyCorrectLights&&a.enable(9),b.doubleSided&&a.enable(10),b.flipSided&&a.enable(11),b.depthPacking&&a.enable(12),b.dithering&&a.enable(13),b.specularIntensityMap&&a.enable(14),b.specularColorMap&&a.enable(15),b.transmission&&a.enable(16),b.transmissionMap&&a.enable(17),b.thicknessMap&&a.enable(18),b.sheen&&a.enable(19),b.sheenColorMap&&a.enable(20),b.sheenRoughnessMap&&a.enable(21),w.push(a.mask)}function D(w){const b=v[w.type];let F;if(b){const I=jt[b];F=hm.clone(I.uniforms)}else F=w.uniforms;return F}function O(w,b){let F;for(let I=0,N=c.length;I<N;I++){const z=c[I];if(z.cacheKey===b){F=z,++F.usedTimes;break}}return F===void 0&&(F=new h0(i,b,w,s),c.push(F)),F}function j(w){if(--w.usedTimes===0){const b=c.indexOf(w);c[b]=c[c.length-1],c.pop(),w.destroy()}}function k(w){l.remove(w)}function P(){l.dispose()}return{getParameters:y,getProgramCacheKey:x,getUniforms:D,acquireProgram:O,releaseProgram:j,releaseShaderCache:k,programs:c,dispose:P}}function g0(){let i=new WeakMap;function e(s){let o=i.get(s);return o===void 0&&(o={},i.set(s,o)),o}function t(s){i.delete(s)}function n(s,o,a){i.get(s)[o]=a}function r(){i=new WeakMap}return{get:e,remove:t,update:n,dispose:r}}function _0(i,e){return i.groupOrder!==e.groupOrder?i.groupOrder-e.groupOrder:i.renderOrder!==e.renderOrder?i.renderOrder-e.renderOrder:i.material.id!==e.material.id?i.material.id-e.material.id:i.z!==e.z?i.z-e.z:i.id-e.id}function Lc(i,e){return i.groupOrder!==e.groupOrder?i.groupOrder-e.groupOrder:i.renderOrder!==e.renderOrder?i.renderOrder-e.renderOrder:i.z!==e.z?e.z-i.z:i.id-e.id}function Rc(){const i=[];let e=0;const t=[],n=[],r=[];function s(){e=0,t.length=0,n.length=0,r.length=0}function o(u,f,d,g,_,v){let p=i[e];return p===void 0?(p={id:u.id,object:u,geometry:f,material:d,groupOrder:g,renderOrder:u.renderOrder,z:_,group:v},i[e]=p):(p.id=u.id,p.object=u,p.geometry=f,p.material=d,p.groupOrder=g,p.renderOrder=u.renderOrder,p.z=_,p.group=v),e++,p}function a(u,f,d,g,_,v){const p=o(u,f,d,g,_,v);d.transmission>0?n.push(p):d.transparent===!0?r.push(p):t.push(p)}function l(u,f,d,g,_,v){const p=o(u,f,d,g,_,v);d.transmission>0?n.unshift(p):d.transparent===!0?r.unshift(p):t.unshift(p)}function c(u,f){t.length>1&&t.sort(u||_0),n.length>1&&n.sort(f||Lc),r.length>1&&r.sort(f||Lc)}function h(){for(let u=e,f=i.length;u<f;u++){const d=i[u];if(d.id===null)break;d.id=null,d.object=null,d.geometry=null,d.material=null,d.group=null}}return{opaque:t,transmissive:n,transparent:r,init:s,push:a,unshift:l,finish:h,sort:c}}function v0(){let i=new WeakMap;function e(n,r){let s;return i.has(n)===!1?(s=new Rc,i.set(n,[s])):r>=i.get(n).length?(s=new Rc,i.get(n).push(s)):s=i.get(n)[r],s}function t(){i=new WeakMap}return{get:e,dispose:t}}function x0(){const i={};return{get:function(e){if(i[e.id]!==void 0)return i[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new C,color:new ve};break;case"SpotLight":t={position:new C,direction:new C,color:new ve,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new C,color:new ve,distance:0,decay:0};break;case"HemisphereLight":t={direction:new C,skyColor:new ve,groundColor:new ve};break;case"RectAreaLight":t={color:new ve,position:new C,halfWidth:new C,halfHeight:new C};break}return i[e.id]=t,t}}}function y0(){const i={};return{get:function(e){if(i[e.id]!==void 0)return i[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Z};break;case"SpotLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Z};break;case"PointLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Z,shadowCameraNear:1,shadowCameraFar:1e3};break}return i[e.id]=t,t}}}let M0=0;function b0(i,e){return(e.castShadow?1:0)-(i.castShadow?1:0)}function w0(i,e){const t=new x0,n=y0(),r={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotShadow:[],spotShadowMap:[],spotShadowMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[]};for(let h=0;h<9;h++)r.probe.push(new C);const s=new C,o=new Me,a=new Me;function l(h,u){let f=0,d=0,g=0;for(let j=0;j<9;j++)r.probe[j].set(0,0,0);let _=0,v=0,p=0,m=0,y=0,x=0,M=0,R=0;h.sort(b0);const D=u!==!0?Math.PI:1;for(let j=0,k=h.length;j<k;j++){const P=h[j],w=P.color,b=P.intensity,F=P.distance,I=P.shadow&&P.shadow.map?P.shadow.map.texture:null;if(P.isAmbientLight)f+=w.r*b*D,d+=w.g*b*D,g+=w.b*b*D;else if(P.isLightProbe)for(let N=0;N<9;N++)r.probe[N].addScaledVector(P.sh.coefficients[N],b);else if(P.isDirectionalLight){const N=t.get(P);if(N.color.copy(P.color).multiplyScalar(P.intensity*D),P.castShadow){const z=P.shadow,ee=n.get(P);ee.shadowBias=z.bias,ee.shadowNormalBias=z.normalBias,ee.shadowRadius=z.radius,ee.shadowMapSize=z.mapSize,r.directionalShadow[_]=ee,r.directionalShadowMap[_]=I,r.directionalShadowMatrix[_]=P.shadow.matrix,x++}r.directional[_]=N,_++}else if(P.isSpotLight){const N=t.get(P);if(N.position.setFromMatrixPosition(P.matrixWorld),N.color.copy(w).multiplyScalar(b*D),N.distance=F,N.coneCos=Math.cos(P.angle),N.penumbraCos=Math.cos(P.angle*(1-P.penumbra)),N.decay=P.decay,P.castShadow){const z=P.shadow,ee=n.get(P);ee.shadowBias=z.bias,ee.shadowNormalBias=z.normalBias,ee.shadowRadius=z.radius,ee.shadowMapSize=z.mapSize,r.spotShadow[p]=ee,r.spotShadowMap[p]=I,r.spotShadowMatrix[p]=P.shadow.matrix,R++}r.spot[p]=N,p++}else if(P.isRectAreaLight){const N=t.get(P);N.color.copy(w).multiplyScalar(b),N.halfWidth.set(P.width*.5,0,0),N.halfHeight.set(0,P.height*.5,0),r.rectArea[m]=N,m++}else if(P.isPointLight){const N=t.get(P);if(N.color.copy(P.color).multiplyScalar(P.intensity*D),N.distance=P.distance,N.decay=P.decay,P.castShadow){const z=P.shadow,ee=n.get(P);ee.shadowBias=z.bias,ee.shadowNormalBias=z.normalBias,ee.shadowRadius=z.radius,ee.shadowMapSize=z.mapSize,ee.shadowCameraNear=z.camera.near,ee.shadowCameraFar=z.camera.far,r.pointShadow[v]=ee,r.pointShadowMap[v]=I,r.pointShadowMatrix[v]=P.shadow.matrix,M++}r.point[v]=N,v++}else if(P.isHemisphereLight){const N=t.get(P);N.skyColor.copy(P.color).multiplyScalar(b*D),N.groundColor.copy(P.groundColor).multiplyScalar(b*D),r.hemi[y]=N,y++}}m>0&&(e.isWebGL2||i.has("OES_texture_float_linear")===!0?(r.rectAreaLTC1=ce.LTC_FLOAT_1,r.rectAreaLTC2=ce.LTC_FLOAT_2):i.has("OES_texture_half_float_linear")===!0?(r.rectAreaLTC1=ce.LTC_HALF_1,r.rectAreaLTC2=ce.LTC_HALF_2):console.error("THREE.WebGLRenderer: Unable to use RectAreaLight. Missing WebGL extensions.")),r.ambient[0]=f,r.ambient[1]=d,r.ambient[2]=g;const O=r.hash;(O.directionalLength!==_||O.pointLength!==v||O.spotLength!==p||O.rectAreaLength!==m||O.hemiLength!==y||O.numDirectionalShadows!==x||O.numPointShadows!==M||O.numSpotShadows!==R)&&(r.directional.length=_,r.spot.length=p,r.rectArea.length=m,r.point.length=v,r.hemi.length=y,r.directionalShadow.length=x,r.directionalShadowMap.length=x,r.pointShadow.length=M,r.pointShadowMap.length=M,r.spotShadow.length=R,r.spotShadowMap.length=R,r.directionalShadowMatrix.length=x,r.pointShadowMatrix.length=M,r.spotShadowMatrix.length=R,O.directionalLength=_,O.pointLength=v,O.spotLength=p,O.rectAreaLength=m,O.hemiLength=y,O.numDirectionalShadows=x,O.numPointShadows=M,O.numSpotShadows=R,r.version=M0++)}function c(h,u){let f=0,d=0,g=0,_=0,v=0;const p=u.matrixWorldInverse;for(let m=0,y=h.length;m<y;m++){const x=h[m];if(x.isDirectionalLight){const M=r.directional[f];M.direction.setFromMatrixPosition(x.matrixWorld),s.setFromMatrixPosition(x.target.matrixWorld),M.direction.sub(s),M.direction.transformDirection(p),f++}else if(x.isSpotLight){const M=r.spot[g];M.position.setFromMatrixPosition(x.matrixWorld),M.position.applyMatrix4(p),M.direction.setFromMatrixPosition(x.matrixWorld),s.setFromMatrixPosition(x.target.matrixWorld),M.direction.sub(s),M.direction.transformDirection(p),g++}else if(x.isRectAreaLight){const M=r.rectArea[_];M.position.setFromMatrixPosition(x.matrixWorld),M.position.applyMatrix4(p),a.identity(),o.copy(x.matrixWorld),o.premultiply(p),a.extractRotation(o),M.halfWidth.set(x.width*.5,0,0),M.halfHeight.set(0,x.height*.5,0),M.halfWidth.applyMatrix4(a),M.halfHeight.applyMatrix4(a),_++}else if(x.isPointLight){const M=r.point[d];M.position.setFromMatrixPosition(x.matrixWorld),M.position.applyMatrix4(p),d++}else if(x.isHemisphereLight){const M=r.hemi[v];M.direction.setFromMatrixPosition(x.matrixWorld),M.direction.transformDirection(p),M.direction.normalize(),v++}}}return{setup:l,setupView:c,state:r}}function Pc(i,e){const t=new w0(i,e),n=[],r=[];function s(){n.length=0,r.length=0}function o(u){n.push(u)}function a(u){r.push(u)}function l(u){t.setup(n,u)}function c(u){t.setupView(n,u)}return{init:s,state:{lightsArray:n,shadowsArray:r,lights:t},setupLights:l,setupLightsView:c,pushLight:o,pushShadow:a}}function S0(i,e){let t=new WeakMap;function n(s,o=0){let a;return t.has(s)===!1?(a=new Pc(i,e),t.set(s,[a])):o>=t.get(s).length?(a=new Pc(i,e),t.get(s).push(a)):a=t.get(s)[o],a}function r(){t=new WeakMap}return{get:n,dispose:r}}class _h extends yt{constructor(e){super(),this.type="MeshDepthMaterial",this.depthPacking=Xp,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}_h.prototype.isMeshDepthMaterial=!0;class vh extends yt{constructor(e){super(),this.type="MeshDistanceMaterial",this.referencePosition=new C,this.nearDistance=1,this.farDistance=1e3,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.fog=!1,this.setValues(e)}copy(e){return super.copy(e),this.referencePosition.copy(e.referencePosition),this.nearDistance=e.nearDistance,this.farDistance=e.farDistance,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}vh.prototype.isMeshDistanceMaterial=!0;const T0=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,E0=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
#include <packing>
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = unpackRGBATo2Half( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ) );
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = unpackRGBAToDepth( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ) );
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( squared_mean - mean * mean );
	gl_FragColor = pack2HalfToRGBA( vec2( mean, std_dev ) );
}`;function xh(i,e,t){let n=new Os;const r=new Z,s=new Z,o=new qe,a=new _h({depthPacking:Yp}),l=new vh,c={},h=t.maxTextureSize,u={0:rt,1:hr,2:Ai},f=new Xn({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Z},radius:{value:4}},vertexShader:T0,fragmentShader:E0}),d=f.clone();d.defines.HORIZONTAL_PASS=1;const g=new je;g.setAttribute("position",new at(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const _=new gt(g,f),v=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Yu,this.render=function(x,M,R){if(v.enabled===!1||v.autoUpdate===!1&&v.needsUpdate===!1||x.length===0)return;const D=i.getRenderTarget(),O=i.getActiveCubeFace(),j=i.getActiveMipmapLevel(),k=i.state;k.setBlending(bn),k.buffers.color.setClear(1,1,1,1),k.buffers.depth.setTest(!0),k.setScissorTest(!1);for(let P=0,w=x.length;P<w;P++){const b=x[P],F=b.shadow;if(F===void 0){console.warn("THREE.WebGLShadowMap:",b,"has no shadow.");continue}if(F.autoUpdate===!1&&F.needsUpdate===!1)continue;r.copy(F.mapSize);const I=F.getFrameExtents();if(r.multiply(I),s.copy(F.mapSize),(r.x>h||r.y>h)&&(r.x>h&&(s.x=Math.floor(h/I.x),r.x=s.x*I.x,F.mapSize.x=s.x),r.y>h&&(s.y=Math.floor(h/I.y),r.y=s.y*I.y,F.mapSize.y=s.y)),F.map===null&&!F.isPointLightShadow&&this.type===Ki){const z={minFilter:Mt,magFilter:Mt,format:ct};F.map=new It(r.x,r.y,z),F.map.texture.name=b.name+".shadowMap",F.mapPass=new It(r.x,r.y,z),F.camera.updateProjectionMatrix()}if(F.map===null){const z={minFilter:st,magFilter:st,format:ct};F.map=new It(r.x,r.y,z),F.map.texture.name=b.name+".shadowMap",F.camera.updateProjectionMatrix()}i.setRenderTarget(F.map),i.clear();const N=F.getViewportCount();for(let z=0;z<N;z++){const ee=F.getViewport(z);o.set(s.x*ee.x,s.y*ee.y,s.x*ee.z,s.y*ee.w),k.viewport(o),F.updateMatrices(b,z),n=F.getFrustum(),y(M,R,F.camera,b,this.type)}!F.isPointLightShadow&&this.type===Ki&&p(F,R),F.needsUpdate=!1}v.needsUpdate=!1,i.setRenderTarget(D,O,j)};function p(x,M){const R=e.update(_);f.defines.VSM_SAMPLES!==x.blurSamples&&(f.defines.VSM_SAMPLES=x.blurSamples,d.defines.VSM_SAMPLES=x.blurSamples,f.needsUpdate=!0,d.needsUpdate=!0),f.uniforms.shadow_pass.value=x.map.texture,f.uniforms.resolution.value=x.mapSize,f.uniforms.radius.value=x.radius,i.setRenderTarget(x.mapPass),i.clear(),i.renderBufferDirect(M,null,R,f,_,null),d.uniforms.shadow_pass.value=x.mapPass.texture,d.uniforms.resolution.value=x.mapSize,d.uniforms.radius.value=x.radius,i.setRenderTarget(x.map),i.clear(),i.renderBufferDirect(M,null,R,d,_,null)}function m(x,M,R,D,O,j,k){let P=null;const w=D.isPointLight===!0?x.customDistanceMaterial:x.customDepthMaterial;if(w!==void 0?P=w:P=D.isPointLight===!0?l:a,i.localClippingEnabled&&R.clipShadows===!0&&R.clippingPlanes.length!==0||R.displacementMap&&R.displacementScale!==0||R.alphaMap&&R.alphaTest>0){const b=P.uuid,F=R.uuid;let I=c[b];I===void 0&&(I={},c[b]=I);let N=I[F];N===void 0&&(N=P.clone(),I[F]=N),P=N}return P.visible=R.visible,P.wireframe=R.wireframe,k===Ki?P.side=R.shadowSide!==null?R.shadowSide:R.side:P.side=R.shadowSide!==null?R.shadowSide:u[R.side],P.alphaMap=R.alphaMap,P.alphaTest=R.alphaTest,P.clipShadows=R.clipShadows,P.clippingPlanes=R.clippingPlanes,P.clipIntersection=R.clipIntersection,P.displacementMap=R.displacementMap,P.displacementScale=R.displacementScale,P.displacementBias=R.displacementBias,P.wireframeLinewidth=R.wireframeLinewidth,P.linewidth=R.linewidth,D.isPointLight===!0&&P.isMeshDistanceMaterial===!0&&(P.referencePosition.setFromMatrixPosition(D.matrixWorld),P.nearDistance=O,P.farDistance=j),P}function y(x,M,R,D,O){if(x.visible===!1)return;if(x.layers.test(M.layers)&&(x.isMesh||x.isLine||x.isPoints)&&(x.castShadow||x.receiveShadow&&O===Ki)&&(!x.frustumCulled||n.intersectsObject(x))){x.modelViewMatrix.multiplyMatrices(R.matrixWorldInverse,x.matrixWorld);const P=e.update(x),w=x.material;if(Array.isArray(w)){const b=P.groups;for(let F=0,I=b.length;F<I;F++){const N=b[F],z=w[N.materialIndex];if(z&&z.visible){const ee=m(x,P,z,D,R.near,R.far,O);i.renderBufferDirect(R,null,P,ee,x,N)}}}else if(w.visible){const b=m(x,P,w,D,R.near,R.far,O);i.renderBufferDirect(R,null,P,b,x,null)}}const k=x.children;for(let P=0,w=k.length;P<w;P++)y(k[P],M,R,D,O)}}function A0(i,e,t){const n=t.isWebGL2;function r(){let E=!1;const J=new qe;let $=null;const ge=new qe(0,0,0,0);return{setMask:function(fe){$!==fe&&!E&&(i.colorMask(fe,fe,fe,fe),$=fe)},setLocked:function(fe){E=fe},setClear:function(fe,Te,le,ye,ze){ze===!0&&(fe*=ye,Te*=ye,le*=ye),J.set(fe,Te,le,ye),ge.equals(J)===!1&&(i.clearColor(fe,Te,le,ye),ge.copy(J))},reset:function(){E=!1,$=null,ge.set(-1,0,0,0)}}}function s(){let E=!1,J=null,$=null,ge=null;return{setTest:function(fe){fe?ie(2929):ue(2929)},setMask:function(fe){J!==fe&&!E&&(i.depthMask(fe),J=fe)},setFunc:function(fe){if($!==fe){if(fe)switch(fe){case zd:i.depthFunc(512);break;case Bd:i.depthFunc(519);break;case Od:i.depthFunc(513);break;case ta:i.depthFunc(515);break;case kd:i.depthFunc(514);break;case Ud:i.depthFunc(518);break;case Hd:i.depthFunc(516);break;case Gd:i.depthFunc(517);break;default:i.depthFunc(515)}else i.depthFunc(515);$=fe}},setLocked:function(fe){E=fe},setClear:function(fe){ge!==fe&&(i.clearDepth(fe),ge=fe)},reset:function(){E=!1,J=null,$=null,ge=null}}}function o(){let E=!1,J=null,$=null,ge=null,fe=null,Te=null,le=null,ye=null,ze=null;return{setTest:function(We){E||(We?ie(2960):ue(2960))},setMask:function(We){J!==We&&!E&&(i.stencilMask(We),J=We)},setFunc:function(We,Gt,Vt){($!==We||ge!==Gt||fe!==Vt)&&(i.stencilFunc(We,Gt,Vt),$=We,ge=Gt,fe=Vt)},setOp:function(We,Gt,Vt){(Te!==We||le!==Gt||ye!==Vt)&&(i.stencilOp(We,Gt,Vt),Te=We,le=Gt,ye=Vt)},setLocked:function(We){E=We},setClear:function(We){ze!==We&&(i.clearStencil(We),ze=We)},reset:function(){E=!1,J=null,$=null,ge=null,fe=null,Te=null,le=null,ye=null,ze=null}}}const a=new r,l=new s,c=new o;let h={},u={},f=null,d=!1,g=null,_=null,v=null,p=null,m=null,y=null,x=null,M=!1,R=null,D=null,O=null,j=null,k=null;const P=i.getParameter(35661);let w=!1,b=0;const F=i.getParameter(7938);F.indexOf("WebGL")!==-1?(b=parseFloat(/^WebGL (\d)/.exec(F)[1]),w=b>=1):F.indexOf("OpenGL ES")!==-1&&(b=parseFloat(/^OpenGL ES (\d)/.exec(F)[1]),w=b>=2);let I=null,N={};const z=i.getParameter(3088),ee=i.getParameter(2978),re=new qe().fromArray(z),G=new qe().fromArray(ee);function W(E,J,$){const ge=new Uint8Array(4),fe=i.createTexture();i.bindTexture(E,fe),i.texParameteri(E,10241,9728),i.texParameteri(E,10240,9728);for(let Te=0;Te<$;Te++)i.texImage2D(J+Te,0,6408,1,1,0,6408,5121,ge);return fe}const ae={};ae[3553]=W(3553,3553,1),ae[34067]=W(34067,34069,6),a.setClear(0,0,0,1),l.setClear(1),c.setClear(0),ie(2929),l.setFunc(ta),Fe(!1),V(Dl),ie(2884),de(bn);function ie(E){h[E]!==!0&&(i.enable(E),h[E]=!0)}function ue(E){h[E]!==!1&&(i.disable(E),h[E]=!1)}function Re(E,J){return u[E]!==J?(i.bindFramebuffer(E,J),u[E]=J,n&&(E===36009&&(u[36160]=J),E===36160&&(u[36009]=J)),!0):!1}function X(E){return f!==E?(i.useProgram(E),f=E,!0):!1}const Ce={[mi]:32774,[Td]:32778,[Ed]:32779};if(n)Ce[Bl]=32775,Ce[Ol]=32776;else{const E=e.get("EXT_blend_minmax");E!==null&&(Ce[Bl]=E.MIN_EXT,Ce[Ol]=E.MAX_EXT)}const xe={[Ad]:0,[Cd]:1,[Ld]:768,[$u]:770,[Fd]:776,[Dd]:774,[Pd]:772,[Rd]:769,[Zu]:771,[Nd]:775,[Id]:773};function de(E,J,$,ge,fe,Te,le,ye){if(E===bn){d===!0&&(ue(3042),d=!1);return}if(d===!1&&(ie(3042),d=!0),E!==Sd){if(E!==g||ye!==M){if((_!==mi||m!==mi)&&(i.blendEquation(32774),_=mi,m=mi),ye)switch(E){case ir:i.blendFuncSeparate(1,771,1,771);break;case Nl:i.blendFunc(1,1);break;case Fl:i.blendFuncSeparate(0,0,769,771);break;case zl:i.blendFuncSeparate(0,768,0,770);break;default:console.error("THREE.WebGLState: Invalid blending: ",E);break}else switch(E){case ir:i.blendFuncSeparate(770,771,1,771);break;case Nl:i.blendFunc(770,1);break;case Fl:i.blendFunc(0,769);break;case zl:i.blendFunc(0,768);break;default:console.error("THREE.WebGLState: Invalid blending: ",E);break}v=null,p=null,y=null,x=null,g=E,M=ye}return}fe=fe||J,Te=Te||$,le=le||ge,(J!==_||fe!==m)&&(i.blendEquationSeparate(Ce[J],Ce[fe]),_=J,m=fe),($!==v||ge!==p||Te!==y||le!==x)&&(i.blendFuncSeparate(xe[$],xe[ge],xe[Te],xe[le]),v=$,p=ge,y=Te,x=le),g=E,M=null}function pe(E,J){E.side===Ai?ue(2884):ie(2884);let $=E.side===rt;J&&($=!$),Fe($),E.blending===ir&&E.transparent===!1?de(bn):de(E.blending,E.blendEquation,E.blendSrc,E.blendDst,E.blendEquationAlpha,E.blendSrcAlpha,E.blendDstAlpha,E.premultipliedAlpha),l.setFunc(E.depthFunc),l.setTest(E.depthTest),l.setMask(E.depthWrite),a.setMask(E.colorWrite);const ge=E.stencilWrite;c.setTest(ge),ge&&(c.setMask(E.stencilWriteMask),c.setFunc(E.stencilFunc,E.stencilRef,E.stencilFuncMask),c.setOp(E.stencilFail,E.stencilZFail,E.stencilZPass)),ne(E.polygonOffset,E.polygonOffsetFactor,E.polygonOffsetUnits),E.alphaToCoverage===!0?ie(32926):ue(32926)}function Fe(E){R!==E&&(E?i.frontFace(2304):i.frontFace(2305),R=E)}function V(E){E!==Md?(ie(2884),E!==D&&(E===Dl?i.cullFace(1029):E===bd?i.cullFace(1028):i.cullFace(1032))):ue(2884),D=E}function te(E){E!==O&&(w&&i.lineWidth(E),O=E)}function ne(E,J,$){E?(ie(32823),(j!==J||k!==$)&&(i.polygonOffset(J,$),j=J,k=$)):ue(32823)}function he(E){E?ie(3089):ue(3089)}function se(E){E===void 0&&(E=33984+P-1),I!==E&&(i.activeTexture(E),I=E)}function we(E,J){I===null&&se();let $=N[I];$===void 0&&($={type:void 0,texture:void 0},N[I]=$),($.type!==E||$.texture!==J)&&(i.bindTexture(E,J||ae[E]),$.type=E,$.texture=J)}function Se(){const E=N[I];E!==void 0&&E.type!==void 0&&(i.bindTexture(E.type,null),E.type=void 0,E.texture=void 0)}function Pe(){try{i.compressedTexImage2D.apply(i,arguments)}catch(E){console.error("THREE.WebGLState:",E)}}function Ve(){try{i.texSubImage2D.apply(i,arguments)}catch(E){console.error("THREE.WebGLState:",E)}}function A(){try{i.texSubImage3D.apply(i,arguments)}catch(E){console.error("THREE.WebGLState:",E)}}function S(){try{i.compressedTexSubImage2D.apply(i,arguments)}catch(E){console.error("THREE.WebGLState:",E)}}function Y(){try{i.texStorage2D.apply(i,arguments)}catch(E){console.error("THREE.WebGLState:",E)}}function K(){try{i.texStorage3D.apply(i,arguments)}catch(E){console.error("THREE.WebGLState:",E)}}function oe(){try{i.texImage2D.apply(i,arguments)}catch(E){console.error("THREE.WebGLState:",E)}}function Q(){try{i.texImage3D.apply(i,arguments)}catch(E){console.error("THREE.WebGLState:",E)}}function be(E){re.equals(E)===!1&&(i.scissor(E.x,E.y,E.z,E.w),re.copy(E))}function me(E){G.equals(E)===!1&&(i.viewport(E.x,E.y,E.z,E.w),G.copy(E))}function L(){i.disable(3042),i.disable(2884),i.disable(2929),i.disable(32823),i.disable(3089),i.disable(2960),i.disable(32926),i.blendEquation(32774),i.blendFunc(1,0),i.blendFuncSeparate(1,0,1,0),i.colorMask(!0,!0,!0,!0),i.clearColor(0,0,0,0),i.depthMask(!0),i.depthFunc(513),i.clearDepth(1),i.stencilMask(4294967295),i.stencilFunc(519,0,4294967295),i.stencilOp(7680,7680,7680),i.clearStencil(0),i.cullFace(1029),i.frontFace(2305),i.polygonOffset(0,0),i.activeTexture(33984),i.bindFramebuffer(36160,null),n===!0&&(i.bindFramebuffer(36009,null),i.bindFramebuffer(36008,null)),i.useProgram(null),i.lineWidth(1),i.scissor(0,0,i.canvas.width,i.canvas.height),i.viewport(0,0,i.canvas.width,i.canvas.height),h={},I=null,N={},u={},f=null,d=!1,g=null,_=null,v=null,p=null,m=null,y=null,x=null,M=!1,R=null,D=null,O=null,j=null,k=null,re.set(0,0,i.canvas.width,i.canvas.height),G.set(0,0,i.canvas.width,i.canvas.height),a.reset(),l.reset(),c.reset()}return{buffers:{color:a,depth:l,stencil:c},enable:ie,disable:ue,bindFramebuffer:Re,useProgram:X,setBlending:de,setMaterial:pe,setFlipSided:Fe,setCullFace:V,setLineWidth:te,setPolygonOffset:ne,setScissorTest:he,activeTexture:se,bindTexture:we,unbindTexture:Se,compressedTexImage2D:Pe,texImage2D:oe,texImage3D:Q,texStorage2D:Y,texStorage3D:K,texSubImage2D:Ve,texSubImage3D:A,compressedTexSubImage2D:S,scissor:be,viewport:me,reset:L}}function C0(i,e,t,n,r,s,o){const a=r.isWebGL2,l=r.maxTextures,c=r.maxCubemapSize,h=r.maxTextureSize,u=r.maxSamples,d=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):void 0,g=new WeakMap;let _,v=!1;try{v=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function p(A,S){return v?new OffscreenCanvas(A,S):zs("canvas")}function m(A,S,Y,K){let oe=1;if((A.width>K||A.height>K)&&(oe=K/Math.max(A.width,A.height)),oe<1||S===!0)if(typeof HTMLImageElement<"u"&&A instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&A instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&A instanceof ImageBitmap){const Q=S?Jp:Math.floor,be=Q(oe*A.width),me=Q(oe*A.height);_===void 0&&(_=p(be,me));const L=Y?p(be,me):_;return L.width=be,L.height=me,L.getContext("2d").drawImage(A,0,0,be,me),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+A.width+"x"+A.height+") to ("+be+"x"+me+")."),L}else return"data"in A&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+A.width+"x"+A.height+")."),A;return A}function y(A){return Ql(A.width)&&Ql(A.height)}function x(A){return a?!1:A.wrapS!==Ct||A.wrapT!==Ct||A.minFilter!==st&&A.minFilter!==Mt}function M(A,S){return A.generateMipmaps&&S&&A.minFilter!==st&&A.minFilter!==Mt}function R(A){i.generateMipmap(A)}function D(A,S,Y,K){if(a===!1)return S;if(A!==null){if(i[A]!==void 0)return i[A];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+A+"'")}let oe=S;return S===6403&&(Y===5126&&(oe=33326),Y===5131&&(oe=33325),Y===5121&&(oe=33321)),S===6407&&(Y===5126&&(oe=34837),Y===5131&&(oe=34843),Y===5121&&(oe=32849)),S===6408&&(Y===5126&&(oe=34836),Y===5131&&(oe=34842),Y===5121&&(oe=K===Pi?35907:32856)),(oe===33325||oe===33326||oe===34842||oe===34836)&&e.get("EXT_color_buffer_float"),oe}function O(A,S,Y){return M(A,Y)===!0||A.isFramebufferTexture&&A.minFilter!==st&&A.minFilter!==Mt?Math.log2(Math.max(S.width,S.height))+1:A.mipmaps!==void 0&&A.mipmaps.length>0?A.mipmaps.length:A.isCompressedTexture&&Array.isArray(A.image)?S.mipmaps.length:1}function j(A){return A===st||A===kl||A===Ul?9728:9729}function k(A){const S=A.target;S.removeEventListener("dispose",k),w(S),S.isVideoTexture&&g.delete(S),o.memory.textures--}function P(A){const S=A.target;S.removeEventListener("dispose",P),b(S)}function w(A){const S=n.get(A);S.__webglInit!==void 0&&(i.deleteTexture(S.__webglTexture),n.remove(A))}function b(A){const S=A.texture,Y=n.get(A),K=n.get(S);if(A){if(K.__webglTexture!==void 0&&(i.deleteTexture(K.__webglTexture),o.memory.textures--),A.depthTexture&&A.depthTexture.dispose(),A.isWebGLCubeRenderTarget)for(let oe=0;oe<6;oe++)i.deleteFramebuffer(Y.__webglFramebuffer[oe]),Y.__webglDepthbuffer&&i.deleteRenderbuffer(Y.__webglDepthbuffer[oe]);else i.deleteFramebuffer(Y.__webglFramebuffer),Y.__webglDepthbuffer&&i.deleteRenderbuffer(Y.__webglDepthbuffer),Y.__webglMultisampledFramebuffer&&i.deleteFramebuffer(Y.__webglMultisampledFramebuffer),Y.__webglColorRenderbuffer&&i.deleteRenderbuffer(Y.__webglColorRenderbuffer),Y.__webglDepthRenderbuffer&&i.deleteRenderbuffer(Y.__webglDepthRenderbuffer);if(A.isWebGLMultipleRenderTargets)for(let oe=0,Q=S.length;oe<Q;oe++){const be=n.get(S[oe]);be.__webglTexture&&(i.deleteTexture(be.__webglTexture),o.memory.textures--),n.remove(S[oe])}n.remove(S),n.remove(A)}}let F=0;function I(){F=0}function N(){const A=F;return A>=l&&console.warn("THREE.WebGLTextures: Trying to use "+A+" texture units while this GPU supports only "+l),F+=1,A}function z(A,S){const Y=n.get(A);if(A.isVideoTexture&&se(A),A.version>0&&Y.__version!==A.version){const K=A.image;if(K===void 0)console.warn("THREE.WebGLRenderer: Texture marked for update but image is undefined");else if(K.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{Re(Y,A,S);return}}t.activeTexture(33984+S),t.bindTexture(3553,Y.__webglTexture)}function ee(A,S){const Y=n.get(A);if(A.version>0&&Y.__version!==A.version){Re(Y,A,S);return}t.activeTexture(33984+S),t.bindTexture(35866,Y.__webglTexture)}function re(A,S){const Y=n.get(A);if(A.version>0&&Y.__version!==A.version){Re(Y,A,S);return}t.activeTexture(33984+S),t.bindTexture(32879,Y.__webglTexture)}function G(A,S){const Y=n.get(A);if(A.version>0&&Y.__version!==A.version){X(Y,A,S);return}t.activeTexture(33984+S),t.bindTexture(34067,Y.__webglTexture)}const W={[ra]:10497,[Ct]:33071,[sa]:33648},ae={[st]:9728,[kl]:9984,[Ul]:9986,[Mt]:9729,[Zd]:9985,[Fs]:9987};function ie(A,S,Y){if(Y?(i.texParameteri(A,10242,W[S.wrapS]),i.texParameteri(A,10243,W[S.wrapT]),(A===32879||A===35866)&&i.texParameteri(A,32882,W[S.wrapR]),i.texParameteri(A,10240,ae[S.magFilter]),i.texParameteri(A,10241,ae[S.minFilter])):(i.texParameteri(A,10242,33071),i.texParameteri(A,10243,33071),(A===32879||A===35866)&&i.texParameteri(A,32882,33071),(S.wrapS!==Ct||S.wrapT!==Ct)&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.wrapS and Texture.wrapT should be set to THREE.ClampToEdgeWrapping."),i.texParameteri(A,10240,j(S.magFilter)),i.texParameteri(A,10241,j(S.minFilter)),S.minFilter!==st&&S.minFilter!==Mt&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.minFilter should be set to THREE.NearestFilter or THREE.LinearFilter.")),e.has("EXT_texture_filter_anisotropic")===!0){const K=e.get("EXT_texture_filter_anisotropic");if(S.type===Mn&&e.has("OES_texture_float_linear")===!1||a===!1&&S.type===Un&&e.has("OES_texture_half_float_linear")===!1)return;(S.anisotropy>1||n.get(S).__currentAnisotropy)&&(i.texParameterf(A,K.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(S.anisotropy,r.getMaxAnisotropy())),n.get(S).__currentAnisotropy=S.anisotropy)}}function ue(A,S){A.__webglInit===void 0&&(A.__webglInit=!0,S.addEventListener("dispose",k),A.__webglTexture=i.createTexture(),o.memory.textures++)}function Re(A,S,Y){let K=3553;S.isDataTexture2DArray&&(K=35866),S.isDataTexture3D&&(K=32879),ue(A,S),t.activeTexture(33984+Y),t.bindTexture(K,A.__webglTexture),i.pixelStorei(37440,S.flipY),i.pixelStorei(37441,S.premultiplyAlpha),i.pixelStorei(3317,S.unpackAlignment),i.pixelStorei(37443,0);const oe=x(S)&&y(S.image)===!1,Q=m(S.image,oe,!1,h),be=y(Q)||a,me=s.convert(S.format);let L=s.convert(S.type),E=D(S.internalFormat,me,L,S.encoding);ie(K,S,be);let J;const $=S.mipmaps,ge=a&&S.isVideoTexture!==!0,fe=A.__version===void 0,Te=O(S,Q,be);if(S.isDepthTexture)E=6402,a?S.type===Mn?E=36012:S.type===hs?E=33190:S.type===Mi?E=35056:E=33189:S.type===Mn&&console.error("WebGLRenderer: Floating point depth texture requires WebGL2."),S.format===Gn&&E===6402&&S.type!==fr&&S.type!==hs&&(console.warn("THREE.WebGLRenderer: Use UnsignedShortType or UnsignedIntType for DepthFormat DepthTexture."),S.type=fr,L=s.convert(S.type)),S.format===Ci&&E===6402&&(E=34041,S.type!==Mi&&(console.warn("THREE.WebGLRenderer: Use UnsignedInt248Type for DepthStencilFormat DepthTexture."),S.type=Mi,L=s.convert(S.type))),ge&&fe?t.texStorage2D(3553,1,E,Q.width,Q.height):t.texImage2D(3553,0,E,Q.width,Q.height,0,me,L,null);else if(S.isDataTexture)if($.length>0&&be){ge&&fe&&t.texStorage2D(3553,Te,E,$[0].width,$[0].height);for(let le=0,ye=$.length;le<ye;le++)J=$[le],ge?t.texSubImage2D(3553,0,0,0,J.width,J.height,me,L,J.data):t.texImage2D(3553,le,E,J.width,J.height,0,me,L,J.data);S.generateMipmaps=!1}else ge?(fe&&t.texStorage2D(3553,Te,E,Q.width,Q.height),t.texSubImage2D(3553,0,0,0,Q.width,Q.height,me,L,Q.data)):t.texImage2D(3553,0,E,Q.width,Q.height,0,me,L,Q.data);else if(S.isCompressedTexture){ge&&fe&&t.texStorage2D(3553,Te,E,$[0].width,$[0].height);for(let le=0,ye=$.length;le<ye;le++)J=$[le],S.format!==ct&&S.format!==Hn?me!==null?ge?t.compressedTexSubImage2D(3553,le,0,0,J.width,J.height,me,J.data):t.compressedTexImage2D(3553,le,E,J.width,J.height,0,J.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):ge?t.texSubImage2D(3553,le,0,0,J.width,J.height,me,L,J.data):t.texImage2D(3553,le,E,J.width,J.height,0,me,L,J.data)}else if(S.isDataTexture2DArray)ge?(fe&&t.texStorage3D(35866,Te,E,Q.width,Q.height,Q.depth),t.texSubImage3D(35866,0,0,0,0,Q.width,Q.height,Q.depth,me,L,Q.data)):t.texImage3D(35866,0,E,Q.width,Q.height,Q.depth,0,me,L,Q.data);else if(S.isDataTexture3D)ge?(fe&&t.texStorage3D(32879,Te,E,Q.width,Q.height,Q.depth),t.texSubImage3D(32879,0,0,0,0,Q.width,Q.height,Q.depth,me,L,Q.data)):t.texImage3D(32879,0,E,Q.width,Q.height,Q.depth,0,me,L,Q.data);else if(S.isFramebufferTexture)ge&&fe?t.texStorage2D(3553,Te,E,Q.width,Q.height):t.texImage2D(3553,0,E,Q.width,Q.height,0,me,L,null);else if($.length>0&&be){ge&&fe&&t.texStorage2D(3553,Te,E,$[0].width,$[0].height);for(let le=0,ye=$.length;le<ye;le++)J=$[le],ge?t.texSubImage2D(3553,le,0,0,me,L,J):t.texImage2D(3553,le,E,me,L,J);S.generateMipmaps=!1}else ge?(fe&&t.texStorage2D(3553,Te,E,Q.width,Q.height),t.texSubImage2D(3553,0,0,0,me,L,Q)):t.texImage2D(3553,0,E,me,L,Q);M(S,be)&&R(K),A.__version=S.version,S.onUpdate&&S.onUpdate(S)}function X(A,S,Y){if(S.image.length!==6)return;ue(A,S),t.activeTexture(33984+Y),t.bindTexture(34067,A.__webglTexture),i.pixelStorei(37440,S.flipY),i.pixelStorei(37441,S.premultiplyAlpha),i.pixelStorei(3317,S.unpackAlignment),i.pixelStorei(37443,0);const K=S&&(S.isCompressedTexture||S.image[0].isCompressedTexture),oe=S.image[0]&&S.image[0].isDataTexture,Q=[];for(let le=0;le<6;le++)!K&&!oe?Q[le]=m(S.image[le],!1,!0,c):Q[le]=oe?S.image[le].image:S.image[le];const be=Q[0],me=y(be)||a,L=s.convert(S.format),E=s.convert(S.type),J=D(S.internalFormat,L,E,S.encoding),$=a&&S.isVideoTexture!==!0,ge=A.__version===void 0;let fe=O(S,be,me);ie(34067,S,me);let Te;if(K){$&&ge&&t.texStorage2D(34067,fe,J,be.width,be.height);for(let le=0;le<6;le++){Te=Q[le].mipmaps;for(let ye=0;ye<Te.length;ye++){const ze=Te[ye];S.format!==ct&&S.format!==Hn?L!==null?$?t.compressedTexSubImage2D(34069+le,ye,0,0,ze.width,ze.height,L,ze.data):t.compressedTexImage2D(34069+le,ye,J,ze.width,ze.height,0,ze.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):$?t.texSubImage2D(34069+le,ye,0,0,ze.width,ze.height,L,E,ze.data):t.texImage2D(34069+le,ye,J,ze.width,ze.height,0,L,E,ze.data)}}}else{Te=S.mipmaps,$&&ge&&(Te.length>0&&fe++,t.texStorage2D(34067,fe,J,Q[0].width,Q[0].height));for(let le=0;le<6;le++)if(oe){$?t.texSubImage2D(34069+le,0,0,0,Q[le].width,Q[le].height,L,E,Q[le].data):t.texImage2D(34069+le,0,J,Q[le].width,Q[le].height,0,L,E,Q[le].data);for(let ye=0;ye<Te.length;ye++){const We=Te[ye].image[le].image;$?t.texSubImage2D(34069+le,ye+1,0,0,We.width,We.height,L,E,We.data):t.texImage2D(34069+le,ye+1,J,We.width,We.height,0,L,E,We.data)}}else{$?t.texSubImage2D(34069+le,0,0,0,L,E,Q[le]):t.texImage2D(34069+le,0,J,L,E,Q[le]);for(let ye=0;ye<Te.length;ye++){const ze=Te[ye];$?t.texSubImage2D(34069+le,ye+1,0,0,L,E,ze.image[le]):t.texImage2D(34069+le,ye+1,J,L,E,ze.image[le])}}}M(S,me)&&R(34067),A.__version=S.version,S.onUpdate&&S.onUpdate(S)}function Ce(A,S,Y,K,oe){const Q=s.convert(Y.format),be=s.convert(Y.type),me=D(Y.internalFormat,Q,be,Y.encoding);n.get(S).__hasExternalTextures||(oe===32879||oe===35866?t.texImage3D(oe,0,me,S.width,S.height,S.depth,0,Q,be,null):t.texImage2D(oe,0,me,S.width,S.height,0,Q,be,null)),t.bindFramebuffer(36160,A),S.useRenderToTexture?d.framebufferTexture2DMultisampleEXT(36160,K,oe,n.get(Y).__webglTexture,0,he(S)):i.framebufferTexture2D(36160,K,oe,n.get(Y).__webglTexture,0),t.bindFramebuffer(36160,null)}function xe(A,S,Y){if(i.bindRenderbuffer(36161,A),S.depthBuffer&&!S.stencilBuffer){let K=33189;if(Y||S.useRenderToTexture){const oe=S.depthTexture;oe&&oe.isDepthTexture&&(oe.type===Mn?K=36012:oe.type===hs&&(K=33190));const Q=he(S);S.useRenderToTexture?d.renderbufferStorageMultisampleEXT(36161,Q,K,S.width,S.height):i.renderbufferStorageMultisample(36161,Q,K,S.width,S.height)}else i.renderbufferStorage(36161,K,S.width,S.height);i.framebufferRenderbuffer(36160,36096,36161,A)}else if(S.depthBuffer&&S.stencilBuffer){const K=he(S);Y&&S.useRenderbuffer?i.renderbufferStorageMultisample(36161,K,35056,S.width,S.height):S.useRenderToTexture?d.renderbufferStorageMultisampleEXT(36161,K,35056,S.width,S.height):i.renderbufferStorage(36161,34041,S.width,S.height),i.framebufferRenderbuffer(36160,33306,36161,A)}else{const K=S.isWebGLMultipleRenderTargets===!0?S.texture[0]:S.texture,oe=s.convert(K.format),Q=s.convert(K.type),be=D(K.internalFormat,oe,Q,K.encoding),me=he(S);Y&&S.useRenderbuffer?i.renderbufferStorageMultisample(36161,me,be,S.width,S.height):S.useRenderToTexture?d.renderbufferStorageMultisampleEXT(36161,me,be,S.width,S.height):i.renderbufferStorage(36161,be,S.width,S.height)}i.bindRenderbuffer(36161,null)}function de(A,S){if(S&&S.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(t.bindFramebuffer(36160,A),!(S.depthTexture&&S.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");(!n.get(S.depthTexture).__webglTexture||S.depthTexture.image.width!==S.width||S.depthTexture.image.height!==S.height)&&(S.depthTexture.image.width=S.width,S.depthTexture.image.height=S.height,S.depthTexture.needsUpdate=!0),z(S.depthTexture,0);const K=n.get(S.depthTexture).__webglTexture,oe=he(S);if(S.depthTexture.format===Gn)S.useRenderToTexture?d.framebufferTexture2DMultisampleEXT(36160,36096,3553,K,0,oe):i.framebufferTexture2D(36160,36096,3553,K,0);else if(S.depthTexture.format===Ci)S.useRenderToTexture?d.framebufferTexture2DMultisampleEXT(36160,33306,3553,K,0,oe):i.framebufferTexture2D(36160,33306,3553,K,0);else throw new Error("Unknown depthTexture format")}function pe(A){const S=n.get(A),Y=A.isWebGLCubeRenderTarget===!0;if(A.depthTexture&&!S.__autoAllocateDepthBuffer){if(Y)throw new Error("target.depthTexture not supported in Cube render targets");de(S.__webglFramebuffer,A)}else if(Y){S.__webglDepthbuffer=[];for(let K=0;K<6;K++)t.bindFramebuffer(36160,S.__webglFramebuffer[K]),S.__webglDepthbuffer[K]=i.createRenderbuffer(),xe(S.__webglDepthbuffer[K],A,!1)}else t.bindFramebuffer(36160,S.__webglFramebuffer),S.__webglDepthbuffer=i.createRenderbuffer(),xe(S.__webglDepthbuffer,A,!1);t.bindFramebuffer(36160,null)}function Fe(A,S,Y){const K=n.get(A);S!==void 0&&Ce(K.__webglFramebuffer,A,A.texture,36064,3553),Y!==void 0&&pe(A)}function V(A){const S=A.texture,Y=n.get(A),K=n.get(S);A.addEventListener("dispose",P),A.isWebGLMultipleRenderTargets!==!0&&(K.__webglTexture===void 0&&(K.__webglTexture=i.createTexture()),K.__version=S.version,o.memory.textures++);const oe=A.isWebGLCubeRenderTarget===!0,Q=A.isWebGLMultipleRenderTargets===!0,be=S.isDataTexture3D||S.isDataTexture2DArray,me=y(A)||a;if(a&&S.format===Hn&&(S.type===Mn||S.type===Un)&&(S.format=ct,console.warn("THREE.WebGLRenderer: Rendering to textures with RGB format is not supported. Using RGBA format instead.")),oe){Y.__webglFramebuffer=[];for(let L=0;L<6;L++)Y.__webglFramebuffer[L]=i.createFramebuffer()}else if(Y.__webglFramebuffer=i.createFramebuffer(),Q)if(r.drawBuffers){const L=A.texture;for(let E=0,J=L.length;E<J;E++){const $=n.get(L[E]);$.__webglTexture===void 0&&($.__webglTexture=i.createTexture(),o.memory.textures++)}}else console.warn("THREE.WebGLRenderer: WebGLMultipleRenderTargets can only be used with WebGL2 or WEBGL_draw_buffers extension.");else if(A.useRenderbuffer)if(a){Y.__webglMultisampledFramebuffer=i.createFramebuffer(),Y.__webglColorRenderbuffer=i.createRenderbuffer(),i.bindRenderbuffer(36161,Y.__webglColorRenderbuffer);const L=s.convert(S.format),E=s.convert(S.type),J=D(S.internalFormat,L,E,S.encoding),$=he(A);i.renderbufferStorageMultisample(36161,$,J,A.width,A.height),t.bindFramebuffer(36160,Y.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(36160,36064,36161,Y.__webglColorRenderbuffer),i.bindRenderbuffer(36161,null),A.depthBuffer&&(Y.__webglDepthRenderbuffer=i.createRenderbuffer(),xe(Y.__webglDepthRenderbuffer,A,!0)),t.bindFramebuffer(36160,null)}else console.warn("THREE.WebGLRenderer: WebGLMultisampleRenderTarget can only be used with WebGL2.");if(oe){t.bindTexture(34067,K.__webglTexture),ie(34067,S,me);for(let L=0;L<6;L++)Ce(Y.__webglFramebuffer[L],A,S,36064,34069+L);M(S,me)&&R(34067),t.unbindTexture()}else if(Q){const L=A.texture;for(let E=0,J=L.length;E<J;E++){const $=L[E],ge=n.get($);t.bindTexture(3553,ge.__webglTexture),ie(3553,$,me),Ce(Y.__webglFramebuffer,A,$,36064+E,3553),M($,me)&&R(3553)}t.unbindTexture()}else{let L=3553;be&&(a?L=S.isDataTexture3D?32879:35866:console.warn("THREE.DataTexture3D and THREE.DataTexture2DArray only supported with WebGL2.")),t.bindTexture(L,K.__webglTexture),ie(L,S,me),Ce(Y.__webglFramebuffer,A,S,36064,L),M(S,me)&&R(L),t.unbindTexture()}A.depthBuffer&&pe(A)}function te(A){const S=y(A)||a,Y=A.isWebGLMultipleRenderTargets===!0?A.texture:[A.texture];for(let K=0,oe=Y.length;K<oe;K++){const Q=Y[K];if(M(Q,S)){const be=A.isWebGLCubeRenderTarget?34067:3553,me=n.get(Q).__webglTexture;t.bindTexture(be,me),R(be),t.unbindTexture()}}}function ne(A){if(A.useRenderbuffer)if(a){const S=A.width,Y=A.height;let K=16384;const oe=[36064],Q=A.stencilBuffer?33306:36096;A.depthBuffer&&oe.push(Q),A.ignoreDepthForMultisampleCopy||(A.depthBuffer&&(K|=256),A.stencilBuffer&&(K|=1024));const be=n.get(A);t.bindFramebuffer(36008,be.__webglMultisampledFramebuffer),t.bindFramebuffer(36009,be.__webglFramebuffer),A.ignoreDepthForMultisampleCopy&&(i.invalidateFramebuffer(36008,[Q]),i.invalidateFramebuffer(36009,[Q])),i.blitFramebuffer(0,0,S,Y,0,0,S,Y,K,9728),i.invalidateFramebuffer(36008,oe),t.bindFramebuffer(36008,null),t.bindFramebuffer(36009,be.__webglMultisampledFramebuffer)}else console.warn("THREE.WebGLRenderer: WebGLMultisampleRenderTarget can only be used with WebGL2.")}function he(A){return a&&(A.useRenderbuffer||A.useRenderToTexture)?Math.min(u,A.samples):0}function se(A){const S=o.render.frame;g.get(A)!==S&&(g.set(A,S),A.update())}let we=!1,Se=!1;function Pe(A,S){A&&A.isWebGLRenderTarget&&(we===!1&&(console.warn("THREE.WebGLTextures.safeSetTexture2D: don't use render targets as textures. Use their .texture property instead."),we=!0),A=A.texture),z(A,S)}function Ve(A,S){A&&A.isWebGLCubeRenderTarget&&(Se===!1&&(console.warn("THREE.WebGLTextures.safeSetTextureCube: don't use cube render targets as textures. Use their .texture property instead."),Se=!0),A=A.texture),G(A,S)}this.allocateTextureUnit=N,this.resetTextureUnits=I,this.setTexture2D=z,this.setTexture2DArray=ee,this.setTexture3D=re,this.setTextureCube=G,this.rebindTextures=Fe,this.setupRenderTarget=V,this.updateRenderTargetMipmap=te,this.updateMultisampleRenderTarget=ne,this.setupDepthRenderbuffer=pe,this.setupFrameBufferTexture=Ce,this.safeSetTexture2D=Pe,this.safeSetTextureCube=Ve}function L0(i,e,t){const n=t.isWebGL2;function r(s){let o;if(s===hn)return 5121;if(s===ep)return 32819;if(s===tp)return 32820;if(s===np)return 33635;if(s===Jd)return 5120;if(s===Qd)return 5122;if(s===fr)return 5123;if(s===Kd)return 5124;if(s===hs)return 5125;if(s===Mn)return 5126;if(s===Un)return n?5131:(o=e.get("OES_texture_half_float"),o!==null?o.HALF_FLOAT_OES:null);if(s===ip)return 6406;if(s===Hn)return 6407;if(s===ct)return 6408;if(s===rp)return 6409;if(s===sp)return 6410;if(s===Gn)return 6402;if(s===Ci)return 34041;if(s===op)return 6403;if(s===ap)return 36244;if(s===lp)return 33319;if(s===cp)return 33320;if(s===up)return 36248;if(s===hp)return 36249;if(s===Hl||s===Gl||s===Vl||s===Wl)if(o=e.get("WEBGL_compressed_texture_s3tc"),o!==null){if(s===Hl)return o.COMPRESSED_RGB_S3TC_DXT1_EXT;if(s===Gl)return o.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(s===Vl)return o.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(s===Wl)return o.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(s===ql||s===Xl||s===Yl||s===jl)if(o=e.get("WEBGL_compressed_texture_pvrtc"),o!==null){if(s===ql)return o.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(s===Xl)return o.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(s===Yl)return o.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(s===jl)return o.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(s===fp)return o=e.get("WEBGL_compressed_texture_etc1"),o!==null?o.COMPRESSED_RGB_ETC1_WEBGL:null;if((s===$l||s===Zl)&&(o=e.get("WEBGL_compressed_texture_etc"),o!==null)){if(s===$l)return o.COMPRESSED_RGB8_ETC2;if(s===Zl)return o.COMPRESSED_RGBA8_ETC2_EAC}if(s===dp||s===pp||s===mp||s===gp||s===_p||s===vp||s===xp||s===yp||s===Mp||s===bp||s===wp||s===Sp||s===Tp||s===Ep||s===Cp||s===Lp||s===Rp||s===Pp||s===Ip||s===Dp||s===Np||s===Fp||s===zp||s===Bp||s===Op||s===kp||s===Up||s===Hp)return o=e.get("WEBGL_compressed_texture_astc"),o!==null?s:null;if(s===Ap)return o=e.get("EXT_texture_compression_bptc"),o!==null?s:null;if(s===Mi)return n?34042:(o=e.get("WEBGL_depth_texture"),o!==null?o.UNSIGNED_INT_24_8_WEBGL:null)}return{convert:r}}class yh extends mt{constructor(e=[]){super(),this.cameras=e}}yh.prototype.isArrayCamera=!0;class vi extends He{constructor(){super(),this.type="Group"}}vi.prototype.isGroup=!0;const R0={type:"move"};class Lo{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new vi,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new vi,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new C,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new C),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new vi,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new C,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new C),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,n){let r=null,s=null,o=null;const a=this._targetRay,l=this._grip,c=this._hand;if(e&&t.session.visibilityState!=="visible-blurred")if(a!==null&&(r=t.getPose(e.targetRaySpace,n),r!==null&&(a.matrix.fromArray(r.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),r.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(r.linearVelocity)):a.hasLinearVelocity=!1,r.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(r.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(R0))),c&&e.hand){o=!0;for(const _ of e.hand.values()){const v=t.getJointPose(_,n);if(c.joints[_.jointName]===void 0){const m=new vi;m.matrixAutoUpdate=!1,m.visible=!1,c.joints[_.jointName]=m,c.add(m)}const p=c.joints[_.jointName];v!==null&&(p.matrix.fromArray(v.transform.matrix),p.matrix.decompose(p.position,p.rotation,p.scale),p.jointRadius=v.radius),p.visible=v!==null}const h=c.joints["index-finger-tip"],u=c.joints["thumb-tip"],f=h.position.distanceTo(u.position),d=.02,g=.005;c.inputState.pinching&&f>d+g?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!c.inputState.pinching&&f<=d-g&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else l!==null&&e.gripSpace&&(s=t.getPose(e.gripSpace,n),s!==null&&(l.matrix.fromArray(s.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),s.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(s.linearVelocity)):l.hasLinearVelocity=!1,s.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(s.angularVelocity)):l.hasAngularVelocity=!1));return a!==null&&(a.visible=r!==null),l!==null&&(l.visible=s!==null),c!==null&&(c.visible=o!==null),this}}class la extends ut{constructor(e,t,n,r,s,o,a,l,c,h){if(h=h!==void 0?h:Gn,h!==Gn&&h!==Ci)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");n===void 0&&h===Gn&&(n=fr),n===void 0&&h===Ci&&(n=Mi),super(null,r,s,o,a,l,h,n,c),this.image={width:e,height:t},this.magFilter=a!==void 0?a:st,this.minFilter=l!==void 0?l:st,this.flipY=!1,this.generateMipmaps=!1}}la.prototype.isDepthTexture=!0;class P0 extends Ln{constructor(e,t){super();const n=this;let r=null,s=1,o=null,a="local-floor";const l=e.extensions.has("WEBGL_multisampled_render_to_texture");let c=null,h=null,u=null,f=null,d=!1,g=null;const _=t.getContextAttributes();let v=null,p=null;const m=[],y=new Map,x=new mt;x.layers.enable(1),x.viewport=new qe;const M=new mt;M.layers.enable(2),M.viewport=new qe;const R=[x,M],D=new yh;D.layers.enable(1),D.layers.enable(2);let O=null,j=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(G){let W=m[G];return W===void 0&&(W=new Lo,m[G]=W),W.getTargetRaySpace()},this.getControllerGrip=function(G){let W=m[G];return W===void 0&&(W=new Lo,m[G]=W),W.getGripSpace()},this.getHand=function(G){let W=m[G];return W===void 0&&(W=new Lo,m[G]=W),W.getHandSpace()};function k(G){const W=y.get(G.inputSource);W&&W.dispatchEvent({type:G.type,data:G.inputSource})}function P(){y.forEach(function(G,W){G.disconnect(W)}),y.clear(),O=null,j=null,e.setRenderTarget(v),f=null,u=null,h=null,r=null,p=null,re.stop(),n.isPresenting=!1,n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(G){s=G,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(G){a=G,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return o},this.getBaseLayer=function(){return u!==null?u:f},this.getBinding=function(){return h},this.getFrame=function(){return g},this.getSession=function(){return r},this.setSession=async function(G){if(r=G,r!==null){if(v=e.getRenderTarget(),r.addEventListener("select",k),r.addEventListener("selectstart",k),r.addEventListener("selectend",k),r.addEventListener("squeeze",k),r.addEventListener("squeezestart",k),r.addEventListener("squeezeend",k),r.addEventListener("end",P),r.addEventListener("inputsourceschange",w),_.xrCompatible!==!0&&await t.makeXRCompatible(),r.renderState.layers===void 0||e.capabilities.isWebGL2===!1){const W={antialias:r.renderState.layers===void 0?_.antialias:!0,alpha:_.alpha,depth:_.depth,stencil:_.stencil,framebufferScaleFactor:s};f=new XRWebGLLayer(r,t,W),r.updateRenderState({baseLayer:f}),p=new It(f.framebufferWidth,f.framebufferHeight,{format:ct,type:hn,encoding:e.outputEncoding})}else{d=_.antialias;let W=null,ae=null,ie=null;_.depth&&(ie=_.stencil?35056:33190,W=_.stencil?Ci:Gn,ae=_.stencil?Mi:fr);const ue={colorFormat:_.alpha||d?32856:32849,depthFormat:ie,scaleFactor:s};h=new XRWebGLBinding(r,t),u=h.createProjectionLayer(ue),r.updateRenderState({layers:[u]}),d?p=new Aa(u.textureWidth,u.textureHeight,{format:ct,type:hn,depthTexture:new la(u.textureWidth,u.textureHeight,ae,void 0,void 0,void 0,void 0,void 0,void 0,W),stencilBuffer:_.stencil,ignoreDepth:u.ignoreDepthValues,useRenderToTexture:l,encoding:e.outputEncoding}):p=new It(u.textureWidth,u.textureHeight,{format:_.alpha?ct:Hn,type:hn,depthTexture:new la(u.textureWidth,u.textureHeight,ae,void 0,void 0,void 0,void 0,void 0,void 0,W),stencilBuffer:_.stencil,ignoreDepth:u.ignoreDepthValues,encoding:e.outputEncoding})}this.setFoveation(1),o=await r.requestReferenceSpace(a),re.setContext(r),re.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}};function w(G){const W=r.inputSources;for(let ae=0;ae<m.length;ae++)y.set(W[ae],m[ae]);for(let ae=0;ae<G.removed.length;ae++){const ie=G.removed[ae],ue=y.get(ie);ue&&(ue.dispatchEvent({type:"disconnected",data:ie}),y.delete(ie))}for(let ae=0;ae<G.added.length;ae++){const ie=G.added[ae],ue=y.get(ie);ue&&ue.dispatchEvent({type:"connected",data:ie})}}const b=new C,F=new C;function I(G,W,ae){b.setFromMatrixPosition(W.matrixWorld),F.setFromMatrixPosition(ae.matrixWorld);const ie=b.distanceTo(F),ue=W.projectionMatrix.elements,Re=ae.projectionMatrix.elements,X=ue[14]/(ue[10]-1),Ce=ue[14]/(ue[10]+1),xe=(ue[9]+1)/ue[5],de=(ue[9]-1)/ue[5],pe=(ue[8]-1)/ue[0],Fe=(Re[8]+1)/Re[0],V=X*pe,te=X*Fe,ne=ie/(-pe+Fe),he=ne*-pe;W.matrixWorld.decompose(G.position,G.quaternion,G.scale),G.translateX(he),G.translateZ(ne),G.matrixWorld.compose(G.position,G.quaternion,G.scale),G.matrixWorldInverse.copy(G.matrixWorld).invert();const se=X+ne,we=Ce+ne,Se=V-he,Pe=te+(ie-he),Ve=xe*Ce/we*se,A=de*Ce/we*se;G.projectionMatrix.makePerspective(Se,Pe,Ve,A,se,we)}function N(G,W){W===null?G.matrixWorld.copy(G.matrix):G.matrixWorld.multiplyMatrices(W.matrixWorld,G.matrix),G.matrixWorldInverse.copy(G.matrixWorld).invert()}this.updateCamera=function(G){if(r===null)return;D.near=M.near=x.near=G.near,D.far=M.far=x.far=G.far,(O!==D.near||j!==D.far)&&(r.updateRenderState({depthNear:D.near,depthFar:D.far}),O=D.near,j=D.far);const W=G.parent,ae=D.cameras;N(D,W);for(let ue=0;ue<ae.length;ue++)N(ae[ue],W);D.matrixWorld.decompose(D.position,D.quaternion,D.scale),G.position.copy(D.position),G.quaternion.copy(D.quaternion),G.scale.copy(D.scale),G.matrix.copy(D.matrix),G.matrixWorld.copy(D.matrixWorld);const ie=G.children;for(let ue=0,Re=ie.length;ue<Re;ue++)ie[ue].updateMatrixWorld(!0);ae.length===2?I(D,x,M):D.projectionMatrix.copy(x.projectionMatrix)},this.getCamera=function(){return D},this.getFoveation=function(){if(u!==null)return u.fixedFoveation;if(f!==null)return f.fixedFoveation},this.setFoveation=function(G){u!==null&&(u.fixedFoveation=G),f!==null&&f.fixedFoveation!==void 0&&(f.fixedFoveation=G)};let z=null;function ee(G,W){if(c=W.getViewerPose(o),g=W,c!==null){const ie=c.views;f!==null&&(e.setRenderTargetFramebuffer(p,f.framebuffer),e.setRenderTarget(p));let ue=!1;ie.length!==D.cameras.length&&(D.cameras.length=0,ue=!0);for(let Re=0;Re<ie.length;Re++){const X=ie[Re];let Ce=null;if(f!==null)Ce=f.getViewport(X);else{const de=h.getViewSubImage(u,X);Ce=de.viewport,Re===0&&(e.setRenderTargetTextures(p,de.colorTexture,u.ignoreDepthValues?void 0:de.depthStencilTexture),e.setRenderTarget(p))}const xe=R[Re];xe.matrix.fromArray(X.transform.matrix),xe.projectionMatrix.fromArray(X.projectionMatrix),xe.viewport.set(Ce.x,Ce.y,Ce.width,Ce.height),Re===0&&D.matrix.copy(xe.matrix),ue===!0&&D.cameras.push(xe)}}const ae=r.inputSources;for(let ie=0;ie<m.length;ie++){const ue=m[ie],Re=ae[ie];ue.update(Re,W,o)}z&&z(G,W),g=null}const re=new sh;re.setAnimationLoop(ee),this.setAnimationLoop=function(G){z=G},this.dispose=function(){}}}function I0(i){function e(p,m){p.fogColor.value.copy(m.color),m.isFog?(p.fogNear.value=m.near,p.fogFar.value=m.far):m.isFogExp2&&(p.fogDensity.value=m.density)}function t(p,m,y,x,M){m.isMeshBasicMaterial?n(p,m):m.isMeshLambertMaterial?(n(p,m),l(p,m)):m.isMeshToonMaterial?(n(p,m),h(p,m)):m.isMeshPhongMaterial?(n(p,m),c(p,m)):m.isMeshStandardMaterial?(n(p,m),m.isMeshPhysicalMaterial?f(p,m,M):u(p,m)):m.isMeshMatcapMaterial?(n(p,m),d(p,m)):m.isMeshDepthMaterial?(n(p,m),g(p,m)):m.isMeshDistanceMaterial?(n(p,m),_(p,m)):m.isMeshNormalMaterial?(n(p,m),v(p,m)):m.isLineBasicMaterial?(r(p,m),m.isLineDashedMaterial&&s(p,m)):m.isPointsMaterial?o(p,m,y,x):m.isSpriteMaterial?a(p,m):m.isShadowMaterial?(p.color.value.copy(m.color),p.opacity.value=m.opacity):m.isShaderMaterial&&(m.uniformsNeedUpdate=!1)}function n(p,m){p.opacity.value=m.opacity,m.color&&p.diffuse.value.copy(m.color),m.emissive&&p.emissive.value.copy(m.emissive).multiplyScalar(m.emissiveIntensity),m.map&&(p.map.value=m.map),m.alphaMap&&(p.alphaMap.value=m.alphaMap),m.specularMap&&(p.specularMap.value=m.specularMap),m.alphaTest>0&&(p.alphaTest.value=m.alphaTest);const y=i.get(m).envMap;y&&(p.envMap.value=y,p.flipEnvMap.value=y.isCubeTexture&&y.isRenderTargetTexture===!1?-1:1,p.reflectivity.value=m.reflectivity,p.ior.value=m.ior,p.refractionRatio.value=m.refractionRatio),m.lightMap&&(p.lightMap.value=m.lightMap,p.lightMapIntensity.value=m.lightMapIntensity),m.aoMap&&(p.aoMap.value=m.aoMap,p.aoMapIntensity.value=m.aoMapIntensity);let x;m.map?x=m.map:m.specularMap?x=m.specularMap:m.displacementMap?x=m.displacementMap:m.normalMap?x=m.normalMap:m.bumpMap?x=m.bumpMap:m.roughnessMap?x=m.roughnessMap:m.metalnessMap?x=m.metalnessMap:m.alphaMap?x=m.alphaMap:m.emissiveMap?x=m.emissiveMap:m.clearcoatMap?x=m.clearcoatMap:m.clearcoatNormalMap?x=m.clearcoatNormalMap:m.clearcoatRoughnessMap?x=m.clearcoatRoughnessMap:m.specularIntensityMap?x=m.specularIntensityMap:m.specularColorMap?x=m.specularColorMap:m.transmissionMap?x=m.transmissionMap:m.thicknessMap?x=m.thicknessMap:m.sheenColorMap?x=m.sheenColorMap:m.sheenRoughnessMap&&(x=m.sheenRoughnessMap),x!==void 0&&(x.isWebGLRenderTarget&&(x=x.texture),x.matrixAutoUpdate===!0&&x.updateMatrix(),p.uvTransform.value.copy(x.matrix));let M;m.aoMap?M=m.aoMap:m.lightMap&&(M=m.lightMap),M!==void 0&&(M.isWebGLRenderTarget&&(M=M.texture),M.matrixAutoUpdate===!0&&M.updateMatrix(),p.uv2Transform.value.copy(M.matrix))}function r(p,m){p.diffuse.value.copy(m.color),p.opacity.value=m.opacity}function s(p,m){p.dashSize.value=m.dashSize,p.totalSize.value=m.dashSize+m.gapSize,p.scale.value=m.scale}function o(p,m,y,x){p.diffuse.value.copy(m.color),p.opacity.value=m.opacity,p.size.value=m.size*y,p.scale.value=x*.5,m.map&&(p.map.value=m.map),m.alphaMap&&(p.alphaMap.value=m.alphaMap),m.alphaTest>0&&(p.alphaTest.value=m.alphaTest);let M;m.map?M=m.map:m.alphaMap&&(M=m.alphaMap),M!==void 0&&(M.matrixAutoUpdate===!0&&M.updateMatrix(),p.uvTransform.value.copy(M.matrix))}function a(p,m){p.diffuse.value.copy(m.color),p.opacity.value=m.opacity,p.rotation.value=m.rotation,m.map&&(p.map.value=m.map),m.alphaMap&&(p.alphaMap.value=m.alphaMap),m.alphaTest>0&&(p.alphaTest.value=m.alphaTest);let y;m.map?y=m.map:m.alphaMap&&(y=m.alphaMap),y!==void 0&&(y.matrixAutoUpdate===!0&&y.updateMatrix(),p.uvTransform.value.copy(y.matrix))}function l(p,m){m.emissiveMap&&(p.emissiveMap.value=m.emissiveMap)}function c(p,m){p.specular.value.copy(m.specular),p.shininess.value=Math.max(m.shininess,1e-4),m.emissiveMap&&(p.emissiveMap.value=m.emissiveMap),m.bumpMap&&(p.bumpMap.value=m.bumpMap,p.bumpScale.value=m.bumpScale,m.side===rt&&(p.bumpScale.value*=-1)),m.normalMap&&(p.normalMap.value=m.normalMap,p.normalScale.value.copy(m.normalScale),m.side===rt&&p.normalScale.value.negate()),m.displacementMap&&(p.displacementMap.value=m.displacementMap,p.displacementScale.value=m.displacementScale,p.displacementBias.value=m.displacementBias)}function h(p,m){m.gradientMap&&(p.gradientMap.value=m.gradientMap),m.emissiveMap&&(p.emissiveMap.value=m.emissiveMap),m.bumpMap&&(p.bumpMap.value=m.bumpMap,p.bumpScale.value=m.bumpScale,m.side===rt&&(p.bumpScale.value*=-1)),m.normalMap&&(p.normalMap.value=m.normalMap,p.normalScale.value.copy(m.normalScale),m.side===rt&&p.normalScale.value.negate()),m.displacementMap&&(p.displacementMap.value=m.displacementMap,p.displacementScale.value=m.displacementScale,p.displacementBias.value=m.displacementBias)}function u(p,m){p.roughness.value=m.roughness,p.metalness.value=m.metalness,m.roughnessMap&&(p.roughnessMap.value=m.roughnessMap),m.metalnessMap&&(p.metalnessMap.value=m.metalnessMap),m.emissiveMap&&(p.emissiveMap.value=m.emissiveMap),m.bumpMap&&(p.bumpMap.value=m.bumpMap,p.bumpScale.value=m.bumpScale,m.side===rt&&(p.bumpScale.value*=-1)),m.normalMap&&(p.normalMap.value=m.normalMap,p.normalScale.value.copy(m.normalScale),m.side===rt&&p.normalScale.value.negate()),m.displacementMap&&(p.displacementMap.value=m.displacementMap,p.displacementScale.value=m.displacementScale,p.displacementBias.value=m.displacementBias),i.get(m).envMap&&(p.envMapIntensity.value=m.envMapIntensity)}function f(p,m,y){u(p,m),p.ior.value=m.ior,m.sheen>0&&(p.sheenColor.value.copy(m.sheenColor).multiplyScalar(m.sheen),p.sheenRoughness.value=m.sheenRoughness,m.sheenColorMap&&(p.sheenColorMap.value=m.sheenColorMap),m.sheenRoughnessMap&&(p.sheenRoughnessMap.value=m.sheenRoughnessMap)),m.clearcoat>0&&(p.clearcoat.value=m.clearcoat,p.clearcoatRoughness.value=m.clearcoatRoughness,m.clearcoatMap&&(p.clearcoatMap.value=m.clearcoatMap),m.clearcoatRoughnessMap&&(p.clearcoatRoughnessMap.value=m.clearcoatRoughnessMap),m.clearcoatNormalMap&&(p.clearcoatNormalScale.value.copy(m.clearcoatNormalScale),p.clearcoatNormalMap.value=m.clearcoatNormalMap,m.side===rt&&p.clearcoatNormalScale.value.negate())),m.transmission>0&&(p.transmission.value=m.transmission,p.transmissionSamplerMap.value=y.texture,p.transmissionSamplerSize.value.set(y.width,y.height),m.transmissionMap&&(p.transmissionMap.value=m.transmissionMap),p.thickness.value=m.thickness,m.thicknessMap&&(p.thicknessMap.value=m.thicknessMap),p.attenuationDistance.value=m.attenuationDistance,p.attenuationColor.value.copy(m.attenuationColor)),p.specularIntensity.value=m.specularIntensity,p.specularColor.value.copy(m.specularColor),m.specularIntensityMap&&(p.specularIntensityMap.value=m.specularIntensityMap),m.specularColorMap&&(p.specularColorMap.value=m.specularColorMap)}function d(p,m){m.matcap&&(p.matcap.value=m.matcap),m.bumpMap&&(p.bumpMap.value=m.bumpMap,p.bumpScale.value=m.bumpScale,m.side===rt&&(p.bumpScale.value*=-1)),m.normalMap&&(p.normalMap.value=m.normalMap,p.normalScale.value.copy(m.normalScale),m.side===rt&&p.normalScale.value.negate()),m.displacementMap&&(p.displacementMap.value=m.displacementMap,p.displacementScale.value=m.displacementScale,p.displacementBias.value=m.displacementBias)}function g(p,m){m.displacementMap&&(p.displacementMap.value=m.displacementMap,p.displacementScale.value=m.displacementScale,p.displacementBias.value=m.displacementBias)}function _(p,m){m.displacementMap&&(p.displacementMap.value=m.displacementMap,p.displacementScale.value=m.displacementScale,p.displacementBias.value=m.displacementBias),p.referencePosition.value.copy(m.referencePosition),p.nearDistance.value=m.nearDistance,p.farDistance.value=m.farDistance}function v(p,m){m.bumpMap&&(p.bumpMap.value=m.bumpMap,p.bumpScale.value=m.bumpScale,m.side===rt&&(p.bumpScale.value*=-1)),m.normalMap&&(p.normalMap.value=m.normalMap,p.normalScale.value.copy(m.normalScale),m.side===rt&&p.normalScale.value.negate()),m.displacementMap&&(p.displacementMap.value=m.displacementMap,p.displacementScale.value=m.displacementScale,p.displacementBias.value=m.displacementBias)}return{refreshFogUniforms:e,refreshMaterialUniforms:t}}function D0(){const i=zs("canvas");return i.style.display="block",i}function Ge(i={}){const e=i.canvas!==void 0?i.canvas:D0(),t=i.context!==void 0?i.context:null,n=i.alpha!==void 0?i.alpha:!1,r=i.depth!==void 0?i.depth:!0,s=i.stencil!==void 0?i.stencil:!0,o=i.antialias!==void 0?i.antialias:!1,a=i.premultipliedAlpha!==void 0?i.premultipliedAlpha:!0,l=i.preserveDrawingBuffer!==void 0?i.preserveDrawingBuffer:!1,c=i.powerPreference!==void 0?i.powerPreference:"default",h=i.failIfMajorPerformanceCaveat!==void 0?i.failIfMajorPerformanceCaveat:!1;let u=null,f=null;const d=[],g=[];this.domElement=e,this.debug={checkShaderErrors:!0},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.outputEncoding=Ht,this.physicallyCorrectLights=!1,this.toneMapping=wn,this.toneMappingExposure=1;const _=this;let v=!1,p=0,m=0,y=null,x=-1,M=null;const R=new qe,D=new qe;let O=null,j=e.width,k=e.height,P=1,w=null,b=null;const F=new qe(0,0,j,k),I=new qe(0,0,j,k);let N=!1;const z=[],ee=new Os;let re=!1,G=!1,W=null;const ae=new Me,ie=new C,ue={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};function Re(){return y===null?P:1}let X=t;function Ce(T,B){for(let H=0;H<T.length;H++){const U=T[H],q=e.getContext(U,B);if(q!==null)return q}return null}try{const T={alpha:n,depth:r,stencil:s,antialias:o,premultipliedAlpha:a,preserveDrawingBuffer:l,powerPreference:c,failIfMajorPerformanceCaveat:h};if("setAttribute"in e&&e.setAttribute("data-engine",`three.js r${Sa}`),e.addEventListener("webglcontextlost",ge,!1),e.addEventListener("webglcontextrestored",fe,!1),X===null){const B=["webgl2","webgl","experimental-webgl"];if(_.isWebGL1Renderer===!0&&B.shift(),X=Ce(B,T),X===null)throw Ce(B)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}X.getShaderPrecisionFormat===void 0&&(X.getShaderPrecisionFormat=function(){return{rangeMin:1,rangeMax:1,precision:1}})}catch(T){throw console.error("THREE.WebGLRenderer: "+T.message),T}let xe,de,pe,Fe,V,te,ne,he,se,we,Se,Pe,Ve,A,S,Y,K,oe,Q,be,me,L,E;function J(){xe=new K_(X),de=new X_(X,xe,i),xe.init(de),L=new L0(X,xe,de),pe=new A0(X,xe,de),z[0]=1029,Fe=new nv,V=new g0,te=new C0(X,xe,pe,V,de,L,Fe),ne=new j_(_),he=new Q_(_),se=new gm(X,de),E=new W_(X,xe,se,de),we=new ev(X,se,Fe,E),Se=new ov(X,we,se,Fe),Q=new sv(X,de,te),Y=new Y_(V),Pe=new m0(_,ne,he,xe,de,E,Y),Ve=new I0(V),A=new v0,S=new S0(xe,de),oe=new V_(_,ne,pe,Se,a),K=new xh(_,Se,de),be=new q_(X,xe,Fe,de),me=new tv(X,xe,Fe,de),Fe.programs=Pe.programs,_.capabilities=de,_.extensions=xe,_.properties=V,_.renderLists=A,_.shadowMap=K,_.state=pe,_.info=Fe}J();const $=new P0(_,X);this.xr=$,this.getContext=function(){return X},this.getContextAttributes=function(){return X.getContextAttributes()},this.forceContextLoss=function(){const T=xe.get("WEBGL_lose_context");T&&T.loseContext()},this.forceContextRestore=function(){const T=xe.get("WEBGL_lose_context");T&&T.restoreContext()},this.getPixelRatio=function(){return P},this.setPixelRatio=function(T){T!==void 0&&(P=T,this.setSize(j,k,!1))},this.getSize=function(T){return T.set(j,k)},this.setSize=function(T,B,H){if($.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}j=T,k=B,e.width=Math.floor(T*P),e.height=Math.floor(B*P),H!==!1&&(e.style.width=T+"px",e.style.height=B+"px"),this.setViewport(0,0,T,B)},this.getDrawingBufferSize=function(T){return T.set(j*P,k*P).floor()},this.setDrawingBufferSize=function(T,B,H){j=T,k=B,P=H,e.width=Math.floor(T*H),e.height=Math.floor(B*H),this.setViewport(0,0,T,B)},this.getCurrentViewport=function(T){return T.copy(R)},this.getViewport=function(T){return T.copy(F)},this.setViewport=function(T,B,H,U){T.isVector4?F.set(T.x,T.y,T.z,T.w):F.set(T,B,H,U),pe.viewport(R.copy(F).multiplyScalar(P).floor())},this.getScissor=function(T){return T.copy(I)},this.setScissor=function(T,B,H,U){T.isVector4?I.set(T.x,T.y,T.z,T.w):I.set(T,B,H,U),pe.scissor(D.copy(I).multiplyScalar(P).floor())},this.getScissorTest=function(){return N},this.setScissorTest=function(T){pe.setScissorTest(N=T)},this.setOpaqueSort=function(T){w=T},this.setTransparentSort=function(T){b=T},this.getClearColor=function(T){return T.copy(oe.getClearColor())},this.setClearColor=function(){oe.setClearColor.apply(oe,arguments)},this.getClearAlpha=function(){return oe.getClearAlpha()},this.setClearAlpha=function(){oe.setClearAlpha.apply(oe,arguments)},this.clear=function(T,B,H){let U=0;(T===void 0||T)&&(U|=16384),(B===void 0||B)&&(U|=256),(H===void 0||H)&&(U|=1024),X.clear(U)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){e.removeEventListener("webglcontextlost",ge,!1),e.removeEventListener("webglcontextrestored",fe,!1),A.dispose(),S.dispose(),V.dispose(),ne.dispose(),he.dispose(),Se.dispose(),E.dispose(),Pe.dispose(),$.dispose(),$.removeEventListener("sessionstart",Gt),$.removeEventListener("sessionend",Vt),W&&(W.dispose(),W=null),Pn.stop()};function ge(T){T.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),v=!0}function fe(){console.log("THREE.WebGLRenderer: Context Restored."),v=!1;const T=Fe.autoReset,B=K.enabled,H=K.autoUpdate,U=K.needsUpdate,q=K.type;J(),Fe.autoReset=T,K.enabled=B,K.autoUpdate=H,K.needsUpdate=U,K.type=q}function Te(T){const B=T.target;B.removeEventListener("dispose",Te),le(B)}function le(T){ye(T),V.remove(T)}function ye(T){const B=V.get(T).programs;B!==void 0&&(B.forEach(function(H){Pe.releaseProgram(H)}),T.isShaderMaterial&&Pe.releaseShaderCache(T))}this.renderBufferDirect=function(T,B,H,U,q,Ee){B===null&&(B=ue);const Le=q.isMesh&&q.matrixWorld.determinant()<0,Ie=gf(T,B,H,U,q);pe.setMaterial(U,Le);let Ae=H.index;const Oe=H.attributes.position;if(Ae===null){if(Oe===void 0||Oe.count===0)return}else if(Ae.count===0)return;let De=1;U.wireframe===!0&&(Ae=we.getWireframeAttribute(H),De=2),E.setup(q,U,Ie,H,Ae);let Be,Je=be;Ae!==null&&(Be=se.get(Ae),Je=me,Je.setIndex(Be));const In=Ae!==null?Ae.count:Oe.count,Yn=H.drawRange.start*De,ke=H.drawRange.count*De,Wt=Ee!==null?Ee.start*De:0,it=Ee!==null?Ee.count*De:1/0,qt=Math.max(Yn,Wt),Lr=Math.min(In,Yn+ke,Wt+it)-1,Xt=Math.max(0,Lr-qt+1);if(Xt!==0){if(q.isMesh)U.wireframe===!0?(pe.setLineWidth(U.wireframeLinewidth*Re()),Je.setMode(1)):Je.setMode(4);else if(q.isLine){let nn=U.linewidth;nn===void 0&&(nn=1),pe.setLineWidth(nn*Re()),q.isLineSegments?Je.setMode(1):q.isLineLoop?Je.setMode(2):Je.setMode(3)}else q.isPoints?Je.setMode(0):q.isSprite&&Je.setMode(4);if(q.isInstancedMesh)Je.renderInstances(qt,Xt,q.count);else if(H.isInstancedBufferGeometry){const nn=Math.min(H.instanceCount,H._maxInstanceCount);Je.renderInstances(qt,Xt,nn)}else Je.render(qt,Xt)}},this.compile=function(T,B){f=S.get(T),f.init(),g.push(f),T.traverseVisible(function(H){H.isLight&&H.layers.test(B.layers)&&(f.pushLight(H),H.castShadow&&f.pushShadow(H))}),f.setupLights(_.physicallyCorrectLights),T.traverse(function(H){const U=H.material;if(U)if(Array.isArray(U))for(let q=0;q<U.length;q++){const Ee=U[q];js(Ee,T,H)}else js(U,T,H)}),g.pop(),f=null};let ze=null;function We(T){ze&&ze(T)}function Gt(){Pn.stop()}function Vt(){Pn.start()}const Pn=new sh;Pn.setAnimationLoop(We),typeof window<"u"&&Pn.setContext(window),this.setAnimationLoop=function(T){ze=T,$.setAnimationLoop(T),T===null?Pn.stop():Pn.start()},$.addEventListener("sessionstart",Gt),$.addEventListener("sessionend",Vt),this.render=function(T,B){if(B!==void 0&&B.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(v===!0)return;T.autoUpdate===!0&&T.updateMatrixWorld(),B.parent===null&&B.updateMatrixWorld(),$.enabled===!0&&$.isPresenting===!0&&($.cameraAutoUpdate===!0&&$.updateCamera(B),B=$.getCamera()),T.isScene===!0&&T.onBeforeRender(_,T,B,y),f=S.get(T,g.length),f.init(),g.push(f),ae.multiplyMatrices(B.projectionMatrix,B.matrixWorldInverse),ee.setFromProjectionMatrix(ae),G=this.localClippingEnabled,re=Y.init(this.clippingPlanes,G,B),u=A.get(T,d.length),u.init(),d.push(u),ol(T,B,0,_.sortObjects),u.finish(),_.sortObjects===!0&&u.sort(w,b),re===!0&&Y.beginShadows();const H=f.state.shadowsArray;if(K.render(H,T,B),re===!0&&Y.endShadows(),this.info.autoReset===!0&&this.info.reset(),oe.render(u,T),f.setupLights(_.physicallyCorrectLights),B.isArrayCamera){const U=B.cameras;for(let q=0,Ee=U.length;q<Ee;q++){const Le=U[q];al(u,T,Le,Le.viewport)}}else al(u,T,B);y!==null&&(te.updateMultisampleRenderTarget(y),te.updateRenderTargetMipmap(y)),T.isScene===!0&&T.onAfterRender(_,T,B),pe.buffers.depth.setTest(!0),pe.buffers.depth.setMask(!0),pe.buffers.color.setMask(!0),pe.setPolygonOffset(!1),E.resetDefaultState(),x=-1,M=null,g.pop(),g.length>0?f=g[g.length-1]:f=null,d.pop(),d.length>0?u=d[d.length-1]:u=null};function ol(T,B,H,U){if(T.visible===!1)return;if(T.layers.test(B.layers)){if(T.isGroup)H=T.renderOrder;else if(T.isLOD)T.autoUpdate===!0&&T.update(B);else if(T.isLight)f.pushLight(T),T.castShadow&&f.pushShadow(T);else if(T.isSprite){if(!T.frustumCulled||ee.intersectsSprite(T)){U&&ie.setFromMatrixPosition(T.matrixWorld).applyMatrix4(ae);const Le=Se.update(T),Ie=T.material;Ie.visible&&u.push(T,Le,Ie,H,ie.z,null)}}else if((T.isMesh||T.isLine||T.isPoints)&&(T.isSkinnedMesh&&T.skeleton.frame!==Fe.render.frame&&(T.skeleton.update(),T.skeleton.frame=Fe.render.frame),!T.frustumCulled||ee.intersectsObject(T))){U&&ie.setFromMatrixPosition(T.matrixWorld).applyMatrix4(ae);const Le=Se.update(T),Ie=T.material;if(Array.isArray(Ie)){const Ae=Le.groups;for(let Oe=0,De=Ae.length;Oe<De;Oe++){const Be=Ae[Oe],Je=Ie[Be.materialIndex];Je&&Je.visible&&u.push(T,Le,Je,H,ie.z,Be)}}else Ie.visible&&u.push(T,Le,Ie,H,ie.z,null)}}const Ee=T.children;for(let Le=0,Ie=Ee.length;Le<Ie;Le++)ol(Ee[Le],B,H,U)}function al(T,B,H,U){const q=T.opaque,Ee=T.transmissive,Le=T.transparent;f.setupLightsView(H),Ee.length>0&&pf(q,B,H),U&&pe.viewport(R.copy(U)),q.length>0&&Cr(q,B,H),Ee.length>0&&Cr(Ee,B,H),Le.length>0&&Cr(Le,B,H)}function pf(T,B,H){if(W===null){const Le=o===!0&&de.isWebGL2===!0?Aa:It;W=new Le(1024,1024,{generateMipmaps:!0,type:L.convert(Un)!==null?Un:hn,minFilter:Fs,magFilter:st,wrapS:Ct,wrapT:Ct,useRenderToTexture:xe.has("WEBGL_multisampled_render_to_texture")})}const U=_.getRenderTarget();_.setRenderTarget(W),_.clear();const q=_.toneMapping;_.toneMapping=wn,Cr(T,B,H),_.toneMapping=q,te.updateMultisampleRenderTarget(W),te.updateRenderTargetMipmap(W),_.setRenderTarget(U)}function Cr(T,B,H){const U=B.isScene===!0?B.overrideMaterial:null;for(let q=0,Ee=T.length;q<Ee;q++){const Le=T[q],Ie=Le.object,Ae=Le.geometry,Oe=U===null?Le.material:U,De=Le.group;Ie.layers.test(H.layers)&&mf(Ie,B,H,Ae,Oe,De)}}function mf(T,B,H,U,q,Ee){T.onBeforeRender(_,B,H,U,q,Ee),T.modelViewMatrix.multiplyMatrices(H.matrixWorldInverse,T.matrixWorld),T.normalMatrix.getNormalMatrix(T.modelViewMatrix),q.onBeforeRender(_,B,H,U,T,Ee),q.transparent===!0&&q.side===Ai?(q.side=rt,q.needsUpdate=!0,_.renderBufferDirect(H,B,U,q,T,Ee),q.side=hr,q.needsUpdate=!0,_.renderBufferDirect(H,B,U,q,T,Ee),q.side=Ai):_.renderBufferDirect(H,B,U,q,T,Ee),T.onAfterRender(_,B,H,U,q,Ee)}function js(T,B,H){B.isScene!==!0&&(B=ue);const U=V.get(T),q=f.state.lights,Ee=f.state.shadowsArray,Le=q.state.version,Ie=Pe.getParameters(T,q.state,Ee,B,H),Ae=Pe.getProgramCacheKey(Ie);let Oe=U.programs;U.environment=T.isMeshStandardMaterial?B.environment:null,U.fog=B.fog,U.envMap=(T.isMeshStandardMaterial?he:ne).get(T.envMap||U.environment),Oe===void 0&&(T.addEventListener("dispose",Te),Oe=new Map,U.programs=Oe);let De=Oe.get(Ae);if(De!==void 0){if(U.currentProgram===De&&U.lightsStateVersion===Le)return ll(T,Ie),De}else Ie.uniforms=Pe.getUniforms(T),T.onBuild(H,Ie,_),T.onBeforeCompile(Ie,_),De=Pe.acquireProgram(Ie,Ae),Oe.set(Ae,De),U.uniforms=Ie.uniforms;const Be=U.uniforms;(!T.isShaderMaterial&&!T.isRawShaderMaterial||T.clipping===!0)&&(Be.clippingPlanes=Y.uniform),ll(T,Ie),U.needsLights=vf(T),U.lightsStateVersion=Le,U.needsLights&&(Be.ambientLightColor.value=q.state.ambient,Be.lightProbe.value=q.state.probe,Be.directionalLights.value=q.state.directional,Be.directionalLightShadows.value=q.state.directionalShadow,Be.spotLights.value=q.state.spot,Be.spotLightShadows.value=q.state.spotShadow,Be.rectAreaLights.value=q.state.rectArea,Be.ltc_1.value=q.state.rectAreaLTC1,Be.ltc_2.value=q.state.rectAreaLTC2,Be.pointLights.value=q.state.point,Be.pointLightShadows.value=q.state.pointShadow,Be.hemisphereLights.value=q.state.hemi,Be.directionalShadowMap.value=q.state.directionalShadowMap,Be.directionalShadowMatrix.value=q.state.directionalShadowMatrix,Be.spotShadowMap.value=q.state.spotShadowMap,Be.spotShadowMatrix.value=q.state.spotShadowMatrix,Be.pointShadowMap.value=q.state.pointShadowMap,Be.pointShadowMatrix.value=q.state.pointShadowMatrix);const Je=De.getUniforms(),In=Tn.seqWithValue(Je.seq,Be);return U.currentProgram=De,U.uniformsList=In,De}function ll(T,B){const H=V.get(T);H.outputEncoding=B.outputEncoding,H.instancing=B.instancing,H.skinning=B.skinning,H.morphTargets=B.morphTargets,H.morphNormals=B.morphNormals,H.morphTargetsCount=B.morphTargetsCount,H.numClippingPlanes=B.numClippingPlanes,H.numIntersection=B.numClipIntersection,H.vertexAlphas=B.vertexAlphas,H.vertexTangents=B.vertexTangents,H.toneMapping=B.toneMapping}function gf(T,B,H,U,q){B.isScene!==!0&&(B=ue),te.resetTextureUnits();const Ee=B.fog,Le=U.isMeshStandardMaterial?B.environment:null,Ie=y===null?_.outputEncoding:y.texture.encoding,Ae=(U.isMeshStandardMaterial?he:ne).get(U.envMap||Le),Oe=U.vertexColors===!0&&!!H.attributes.color&&H.attributes.color.itemSize===4,De=!!U.normalMap&&!!H.attributes.tangent,Be=!!H.morphAttributes.position,Je=!!H.morphAttributes.normal,In=H.morphAttributes.position?H.morphAttributes.position.length:0,Yn=U.toneMapped?_.toneMapping:wn,ke=V.get(U),Wt=f.state.lights;if(re===!0&&(G===!0||T!==M)){const Ft=T===M&&U.id===x;Y.setState(U,T,Ft)}let it=!1;U.version===ke.__version?(ke.needsLights&&ke.lightsStateVersion!==Wt.state.version||ke.outputEncoding!==Ie||q.isInstancedMesh&&ke.instancing===!1||!q.isInstancedMesh&&ke.instancing===!0||q.isSkinnedMesh&&ke.skinning===!1||!q.isSkinnedMesh&&ke.skinning===!0||ke.envMap!==Ae||U.fog&&ke.fog!==Ee||ke.numClippingPlanes!==void 0&&(ke.numClippingPlanes!==Y.numPlanes||ke.numIntersection!==Y.numIntersection)||ke.vertexAlphas!==Oe||ke.vertexTangents!==De||ke.morphTargets!==Be||ke.morphNormals!==Je||ke.toneMapping!==Yn||de.isWebGL2===!0&&ke.morphTargetsCount!==In)&&(it=!0):(it=!0,ke.__version=U.version);let qt=ke.currentProgram;it===!0&&(qt=js(U,B,q));let Lr=!1,Xt=!1,nn=!1;const dt=qt.getUniforms(),Gi=ke.uniforms;if(pe.useProgram(qt.program)&&(Lr=!0,Xt=!0,nn=!0),U.id!==x&&(x=U.id,Xt=!0),Lr||M!==T){if(dt.setValue(X,"projectionMatrix",T.projectionMatrix),de.logarithmicDepthBuffer&&dt.setValue(X,"logDepthBufFC",2/(Math.log(T.far+1)/Math.LN2)),M!==T&&(M=T,Xt=!0,nn=!0),U.isShaderMaterial||U.isMeshPhongMaterial||U.isMeshToonMaterial||U.isMeshStandardMaterial||U.envMap){const Ft=dt.map.cameraPosition;Ft!==void 0&&Ft.setValue(X,ie.setFromMatrixPosition(T.matrixWorld))}(U.isMeshPhongMaterial||U.isMeshToonMaterial||U.isMeshLambertMaterial||U.isMeshBasicMaterial||U.isMeshStandardMaterial||U.isShaderMaterial)&&dt.setValue(X,"isOrthographic",T.isOrthographicCamera===!0),(U.isMeshPhongMaterial||U.isMeshToonMaterial||U.isMeshLambertMaterial||U.isMeshBasicMaterial||U.isMeshStandardMaterial||U.isShaderMaterial||U.isShadowMaterial||q.isSkinnedMesh)&&dt.setValue(X,"viewMatrix",T.matrixWorldInverse)}if(q.isSkinnedMesh){dt.setOptional(X,q,"bindMatrix"),dt.setOptional(X,q,"bindMatrixInverse");const Ft=q.skeleton;Ft&&(de.floatVertexTextures?(Ft.boneTexture===null&&Ft.computeBoneTexture(),dt.setValue(X,"boneTexture",Ft.boneTexture,te),dt.setValue(X,"boneTextureSize",Ft.boneTextureSize)):dt.setOptional(X,Ft,"boneMatrices"))}return H&&(H.morphAttributes.position!==void 0||H.morphAttributes.normal!==void 0)&&Q.update(q,H,U,qt),(Xt||ke.receiveShadow!==q.receiveShadow)&&(ke.receiveShadow=q.receiveShadow,dt.setValue(X,"receiveShadow",q.receiveShadow)),Xt&&(dt.setValue(X,"toneMappingExposure",_.toneMappingExposure),ke.needsLights&&_f(Gi,nn),Ee&&U.fog&&Ve.refreshFogUniforms(Gi,Ee),Ve.refreshMaterialUniforms(Gi,U,P,k,W),Tn.upload(X,ke.uniformsList,Gi,te)),U.isShaderMaterial&&U.uniformsNeedUpdate===!0&&(Tn.upload(X,ke.uniformsList,Gi,te),U.uniformsNeedUpdate=!1),U.isSpriteMaterial&&dt.setValue(X,"center",q.center),dt.setValue(X,"modelViewMatrix",q.modelViewMatrix),dt.setValue(X,"normalMatrix",q.normalMatrix),dt.setValue(X,"modelMatrix",q.matrixWorld),qt}function _f(T,B){T.ambientLightColor.needsUpdate=B,T.lightProbe.needsUpdate=B,T.directionalLights.needsUpdate=B,T.directionalLightShadows.needsUpdate=B,T.pointLights.needsUpdate=B,T.pointLightShadows.needsUpdate=B,T.spotLights.needsUpdate=B,T.spotLightShadows.needsUpdate=B,T.rectAreaLights.needsUpdate=B,T.hemisphereLights.needsUpdate=B}function vf(T){return T.isMeshLambertMaterial||T.isMeshToonMaterial||T.isMeshPhongMaterial||T.isMeshStandardMaterial||T.isShadowMaterial||T.isShaderMaterial&&T.lights===!0}this.getActiveCubeFace=function(){return p},this.getActiveMipmapLevel=function(){return m},this.getRenderTarget=function(){return y},this.setRenderTargetTextures=function(T,B,H){V.get(T.texture).__webglTexture=B,V.get(T.depthTexture).__webglTexture=H;const U=V.get(T);U.__hasExternalTextures=!0,U.__hasExternalTextures&&(U.__autoAllocateDepthBuffer=H===void 0,U.__autoAllocateDepthBuffer||T.useRenderToTexture&&(console.warn("render-to-texture extension was disabled because an external texture was provided"),T.useRenderToTexture=!1,T.useRenderbuffer=!0))},this.setRenderTargetFramebuffer=function(T,B){const H=V.get(T);H.__webglFramebuffer=B,H.__useDefaultFramebuffer=B===void 0},this.setRenderTarget=function(T,B=0,H=0){y=T,p=B,m=H;let U=!0;if(T){const Ae=V.get(T);Ae.__useDefaultFramebuffer!==void 0?(pe.bindFramebuffer(36160,null),U=!1):Ae.__webglFramebuffer===void 0?te.setupRenderTarget(T):Ae.__hasExternalTextures&&te.rebindTextures(T,V.get(T.texture).__webglTexture,V.get(T.depthTexture).__webglTexture)}let q=null,Ee=!1,Le=!1;if(T){const Ae=T.texture;(Ae.isDataTexture3D||Ae.isDataTexture2DArray)&&(Le=!0);const Oe=V.get(T).__webglFramebuffer;T.isWebGLCubeRenderTarget?(q=Oe[B],Ee=!0):T.useRenderbuffer?q=V.get(T).__webglMultisampledFramebuffer:q=Oe,R.copy(T.viewport),D.copy(T.scissor),O=T.scissorTest}else R.copy(F).multiplyScalar(P).floor(),D.copy(I).multiplyScalar(P).floor(),O=N;if(pe.bindFramebuffer(36160,q)&&de.drawBuffers&&U){let Ae=!1;if(T)if(T.isWebGLMultipleRenderTargets){const Oe=T.texture;if(z.length!==Oe.length||z[0]!==36064){for(let De=0,Be=Oe.length;De<Be;De++)z[De]=36064+De;z.length=Oe.length,Ae=!0}}else(z.length!==1||z[0]!==36064)&&(z[0]=36064,z.length=1,Ae=!0);else(z.length!==1||z[0]!==1029)&&(z[0]=1029,z.length=1,Ae=!0);Ae&&(de.isWebGL2?X.drawBuffers(z):xe.get("WEBGL_draw_buffers").drawBuffersWEBGL(z))}if(pe.viewport(R),pe.scissor(D),pe.setScissorTest(O),Ee){const Ae=V.get(T.texture);X.framebufferTexture2D(36160,36064,34069+B,Ae.__webglTexture,H)}else if(Le){const Ae=V.get(T.texture),Oe=B||0;X.framebufferTextureLayer(36160,36064,Ae.__webglTexture,H||0,Oe)}x=-1},this.readRenderTargetPixels=function(T,B,H,U,q,Ee,Le){if(!(T&&T.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Ie=V.get(T).__webglFramebuffer;if(T.isWebGLCubeRenderTarget&&Le!==void 0&&(Ie=Ie[Le]),Ie){pe.bindFramebuffer(36160,Ie);try{const Ae=T.texture,Oe=Ae.format,De=Ae.type;if(Oe!==ct&&L.convert(Oe)!==X.getParameter(35739)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}const Be=De===Un&&(xe.has("EXT_color_buffer_half_float")||de.isWebGL2&&xe.has("EXT_color_buffer_float"));if(De!==hn&&L.convert(De)!==X.getParameter(35738)&&!(De===Mn&&(de.isWebGL2||xe.has("OES_texture_float")||xe.has("WEBGL_color_buffer_float")))&&!Be){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}X.checkFramebufferStatus(36160)===36053?B>=0&&B<=T.width-U&&H>=0&&H<=T.height-q&&X.readPixels(B,H,U,q,L.convert(Oe),L.convert(De),Ee):console.error("THREE.WebGLRenderer.readRenderTargetPixels: readPixels from renderTarget failed. Framebuffer not complete.")}finally{const Ae=y!==null?V.get(y).__webglFramebuffer:null;pe.bindFramebuffer(36160,Ae)}}},this.copyFramebufferToTexture=function(T,B,H=0){if(B.isFramebufferTexture!==!0){console.error("THREE.WebGLRenderer: copyFramebufferToTexture() can only be used with FramebufferTexture.");return}const U=Math.pow(2,-H),q=Math.floor(B.image.width*U),Ee=Math.floor(B.image.height*U);te.setTexture2D(B,0),X.copyTexSubImage2D(3553,H,0,0,T.x,T.y,q,Ee),pe.unbindTexture()},this.copyTextureToTexture=function(T,B,H,U=0){const q=B.image.width,Ee=B.image.height,Le=L.convert(H.format),Ie=L.convert(H.type);te.setTexture2D(H,0),X.pixelStorei(37440,H.flipY),X.pixelStorei(37441,H.premultiplyAlpha),X.pixelStorei(3317,H.unpackAlignment),B.isDataTexture?X.texSubImage2D(3553,U,T.x,T.y,q,Ee,Le,Ie,B.image.data):B.isCompressedTexture?X.compressedTexSubImage2D(3553,U,T.x,T.y,B.mipmaps[0].width,B.mipmaps[0].height,Le,B.mipmaps[0].data):X.texSubImage2D(3553,U,T.x,T.y,Le,Ie,B.image),U===0&&H.generateMipmaps&&X.generateMipmap(3553),pe.unbindTexture()},this.copyTextureToTexture3D=function(T,B,H,U,q=0){if(_.isWebGL1Renderer){console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: can only be used with WebGL2.");return}const Ee=T.max.x-T.min.x+1,Le=T.max.y-T.min.y+1,Ie=T.max.z-T.min.z+1,Ae=L.convert(U.format),Oe=L.convert(U.type);let De;if(U.isDataTexture3D)te.setTexture3D(U,0),De=32879;else if(U.isDataTexture2DArray)te.setTexture2DArray(U,0),De=35866;else{console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: only supports THREE.DataTexture3D and THREE.DataTexture2DArray.");return}X.pixelStorei(37440,U.flipY),X.pixelStorei(37441,U.premultiplyAlpha),X.pixelStorei(3317,U.unpackAlignment);const Be=X.getParameter(3314),Je=X.getParameter(32878),In=X.getParameter(3316),Yn=X.getParameter(3315),ke=X.getParameter(32877),Wt=H.isCompressedTexture?H.mipmaps[0]:H.image;X.pixelStorei(3314,Wt.width),X.pixelStorei(32878,Wt.height),X.pixelStorei(3316,T.min.x),X.pixelStorei(3315,T.min.y),X.pixelStorei(32877,T.min.z),H.isDataTexture||H.isDataTexture3D?X.texSubImage3D(De,q,B.x,B.y,B.z,Ee,Le,Ie,Ae,Oe,Wt.data):H.isCompressedTexture?(console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: untested support for compressed srcTexture."),X.compressedTexSubImage3D(De,q,B.x,B.y,B.z,Ee,Le,Ie,Ae,Wt.data)):X.texSubImage3D(De,q,B.x,B.y,B.z,Ee,Le,Ie,Ae,Oe,Wt),X.pixelStorei(3314,Be),X.pixelStorei(32878,Je),X.pixelStorei(3316,In),X.pixelStorei(3315,Yn),X.pixelStorei(32877,ke),q===0&&U.generateMipmaps&&X.generateMipmap(De),pe.unbindTexture()},this.initTexture=function(T){te.setTexture2D(T,0),pe.unbindTexture()},this.resetState=function(){p=0,m=0,y=null,pe.reset(),E.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}Ge.prototype.isWebGLRenderer=!0;class N0 extends Ge{}N0.prototype.isWebGL1Renderer=!0;class Hs extends He{constructor(){super(),this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.overrideMaterial=null,this.autoUpdate=!0,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.autoUpdate=e.autoUpdate,this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),t}}Hs.prototype.isScene=!0;class wr{constructor(e,t){this.array=e,this.stride=t,this.count=e!==void 0?e.length/t:0,this.usage=dr,this.updateRange={offset:0,count:-1},this.version=0,this.uuid=Qt()}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}copy(e){return this.array=new e.array.constructor(e.array),this.count=e.count,this.stride=e.stride,this.usage=e.usage,this}copyAt(e,t,n){e*=this.stride,n*=t.stride;for(let r=0,s=this.stride;r<s;r++)this.array[e+r]=t.array[n+r];return this}set(e,t=0){return this.array.set(e,t),this}clone(e){e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=Qt()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);const t=new this.array.constructor(e.arrayBuffers[this.array.buffer._uuid]),n=new this.constructor(t,this.stride);return n.setUsage(this.usage),n}onUpload(e){return this.onUploadCallback=e,this}toJSON(e){return e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=Qt()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=Array.prototype.slice.call(new Uint32Array(this.array.buffer))),{uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride}}}wr.prototype.isInterleavedBuffer=!0;const Ke=new C;class pr{constructor(e,t,n,r=!1){this.name="",this.data=e,this.itemSize=t,this.offset=n,this.normalized=r===!0}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(e){this.data.needsUpdate=e}applyMatrix4(e){for(let t=0,n=this.data.count;t<n;t++)Ke.x=this.getX(t),Ke.y=this.getY(t),Ke.z=this.getZ(t),Ke.applyMatrix4(e),this.setXYZ(t,Ke.x,Ke.y,Ke.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)Ke.x=this.getX(t),Ke.y=this.getY(t),Ke.z=this.getZ(t),Ke.applyNormalMatrix(e),this.setXYZ(t,Ke.x,Ke.y,Ke.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)Ke.x=this.getX(t),Ke.y=this.getY(t),Ke.z=this.getZ(t),Ke.transformDirection(e),this.setXYZ(t,Ke.x,Ke.y,Ke.z);return this}setX(e,t){return this.data.array[e*this.data.stride+this.offset]=t,this}setY(e,t){return this.data.array[e*this.data.stride+this.offset+1]=t,this}setZ(e,t){return this.data.array[e*this.data.stride+this.offset+2]=t,this}setW(e,t){return this.data.array[e*this.data.stride+this.offset+3]=t,this}getX(e){return this.data.array[e*this.data.stride+this.offset]}getY(e){return this.data.array[e*this.data.stride+this.offset+1]}getZ(e){return this.data.array[e*this.data.stride+this.offset+2]}getW(e){return this.data.array[e*this.data.stride+this.offset+3]}setXY(e,t,n){return e=e*this.data.stride+this.offset,this.data.array[e+0]=t,this.data.array[e+1]=n,this}setXYZ(e,t,n,r){return e=e*this.data.stride+this.offset,this.data.array[e+0]=t,this.data.array[e+1]=n,this.data.array[e+2]=r,this}setXYZW(e,t,n,r,s){return e=e*this.data.stride+this.offset,this.data.array[e+0]=t,this.data.array[e+1]=n,this.data.array[e+2]=r,this.data.array[e+3]=s,this}clone(e){if(e===void 0){console.log("THREE.InterleavedBufferAttribute.clone(): Cloning an interlaved buffer attribute will deinterleave buffer data.");const t=[];for(let n=0;n<this.count;n++){const r=n*this.data.stride+this.offset;for(let s=0;s<this.itemSize;s++)t.push(this.data.array[r+s])}return new at(new this.array.constructor(t),this.itemSize,this.normalized)}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.clone(e)),new pr(e.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(e){if(e===void 0){console.log("THREE.InterleavedBufferAttribute.toJSON(): Serializing an interlaved buffer attribute will deinterleave buffer data.");const t=[];for(let n=0;n<this.count;n++){const r=n*this.data.stride+this.offset;for(let s=0;s<this.itemSize;s++)t.push(this.data.array[r+s])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:t,normalized:this.normalized}}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.toJSON(e)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}}pr.prototype.isInterleavedBufferAttribute=!0;class Mh extends yt{constructor(e){super(),this.type="SpriteMaterial",this.color=new ve(16777215),this.map=null,this.alphaMap=null,this.rotation=0,this.sizeAttenuation=!0,this.transparent=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.rotation=e.rotation,this.sizeAttenuation=e.sizeAttenuation,this}}Mh.prototype.isSpriteMaterial=!0;let hi;const ji=new C,fi=new C,di=new C,pi=new Z,$i=new Z,bh=new Me,Qr=new C,Zi=new C,Kr=new C,Ic=new Z,Ro=new Z,Dc=new Z;class F0 extends He{constructor(e){if(super(),this.type="Sprite",hi===void 0){hi=new je;const t=new Float32Array([-.5,-.5,0,0,0,.5,-.5,0,1,0,.5,.5,0,1,1,-.5,.5,0,0,1]),n=new wr(t,5);hi.setIndex([0,1,2,0,2,3]),hi.setAttribute("position",new pr(n,3,0,!1)),hi.setAttribute("uv",new pr(n,2,3,!1))}this.geometry=hi,this.material=e!==void 0?e:new Mh,this.center=new Z(.5,.5)}raycast(e,t){e.camera===null&&console.error('THREE.Sprite: "Raycaster.camera" needs to be set in order to raycast against sprites.'),fi.setFromMatrixScale(this.matrixWorld),bh.copy(e.camera.matrixWorld),this.modelViewMatrix.multiplyMatrices(e.camera.matrixWorldInverse,this.matrixWorld),di.setFromMatrixPosition(this.modelViewMatrix),e.camera.isPerspectiveCamera&&this.material.sizeAttenuation===!1&&fi.multiplyScalar(-di.z);const n=this.material.rotation;let r,s;n!==0&&(s=Math.cos(n),r=Math.sin(n));const o=this.center;es(Qr.set(-.5,-.5,0),di,o,fi,r,s),es(Zi.set(.5,-.5,0),di,o,fi,r,s),es(Kr.set(.5,.5,0),di,o,fi,r,s),Ic.set(0,0),Ro.set(1,0),Dc.set(1,1);let a=e.ray.intersectTriangle(Qr,Zi,Kr,!1,ji);if(a===null&&(es(Zi.set(-.5,.5,0),di,o,fi,r,s),Ro.set(0,1),a=e.ray.intersectTriangle(Qr,Kr,Zi,!1,ji),a===null))return;const l=e.ray.origin.distanceTo(ji);l<e.near||l>e.far||t.push({distance:l,point:ji.clone(),uv:ot.getUV(ji,Qr,Zi,Kr,Ic,Ro,Dc,new Z),face:null,object:this})}copy(e){return super.copy(e),e.center!==void 0&&this.center.copy(e.center),this.material=e.material,this}}F0.prototype.isSprite=!0;function es(i,e,t,n,r,s){pi.subVectors(i,t).addScalar(.5).multiply(n),r!==void 0?($i.x=s*pi.x-r*pi.y,$i.y=r*pi.x+s*pi.y):$i.copy(pi),i.copy(e),i.x+=$i.x,i.y+=$i.y,i.applyMatrix4(bh)}const Nc=new C,Fc=new qe,zc=new qe,z0=new C,Bc=new Me;class wh extends gt{constructor(e,t){super(e,t),this.type="SkinnedMesh",this.bindMode="attached",this.bindMatrix=new Me,this.bindMatrixInverse=new Me}copy(e){return super.copy(e),this.bindMode=e.bindMode,this.bindMatrix.copy(e.bindMatrix),this.bindMatrixInverse.copy(e.bindMatrixInverse),this.skeleton=e.skeleton,this}bind(e,t){this.skeleton=e,t===void 0&&(this.updateMatrixWorld(!0),this.skeleton.calculateInverses(),t=this.matrixWorld),this.bindMatrix.copy(t),this.bindMatrixInverse.copy(t).invert()}pose(){this.skeleton.pose()}normalizeSkinWeights(){const e=new qe,t=this.geometry.attributes.skinWeight;for(let n=0,r=t.count;n<r;n++){e.x=t.getX(n),e.y=t.getY(n),e.z=t.getZ(n),e.w=t.getW(n);const s=1/e.manhattanLength();s!==1/0?e.multiplyScalar(s):e.set(1,0,0,0),t.setXYZW(n,e.x,e.y,e.z,e.w)}}updateMatrixWorld(e){super.updateMatrixWorld(e),this.bindMode==="attached"?this.bindMatrixInverse.copy(this.matrixWorld).invert():this.bindMode==="detached"?this.bindMatrixInverse.copy(this.bindMatrix).invert():console.warn("THREE.SkinnedMesh: Unrecognized bindMode: "+this.bindMode)}boneTransform(e,t){const n=this.skeleton,r=this.geometry;Fc.fromBufferAttribute(r.attributes.skinIndex,e),zc.fromBufferAttribute(r.attributes.skinWeight,e),Nc.copy(t).applyMatrix4(this.bindMatrix),t.set(0,0,0);for(let s=0;s<4;s++){const o=zc.getComponent(s);if(o!==0){const a=Fc.getComponent(s);Bc.multiplyMatrices(n.bones[a].matrixWorld,n.boneInverses[a]),t.addScaledVector(z0.copy(Nc).applyMatrix4(Bc),o)}}return t.applyMatrix4(this.bindMatrixInverse)}}wh.prototype.isSkinnedMesh=!0;class B0 extends He{constructor(){super(),this.type="Bone"}}B0.prototype.isBone=!0;class O0 extends ut{constructor(e=null,t=1,n=1,r,s,o,a,l,c=st,h=st,u,f){super(null,o,a,l,c,h,r,s,u,f),this.image={data:e,width:t,height:n},this.magFilter=c,this.minFilter=h,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}O0.prototype.isDataTexture=!0;class ca extends at{constructor(e,t,n,r=1){typeof n=="number"&&(r=n,n=!1,console.error("THREE.InstancedBufferAttribute: The constructor now expects normalized as the third argument.")),super(e,t,n),this.meshPerAttribute=r}copy(e){return super.copy(e),this.meshPerAttribute=e.meshPerAttribute,this}toJSON(){const e=super.toJSON();return e.meshPerAttribute=this.meshPerAttribute,e.isInstancedBufferAttribute=!0,e}}ca.prototype.isInstancedBufferAttribute=!0;const Oc=new Me,kc=new Me,ts=[],Ji=new gt;class k0 extends gt{constructor(e,t,n){super(e,t),this.instanceMatrix=new ca(new Float32Array(n*16),16),this.instanceColor=null,this.count=n,this.frustumCulled=!1}copy(e){return super.copy(e),this.instanceMatrix.copy(e.instanceMatrix),e.instanceColor!==null&&(this.instanceColor=e.instanceColor.clone()),this.count=e.count,this}getColorAt(e,t){t.fromArray(this.instanceColor.array,e*3)}getMatrixAt(e,t){t.fromArray(this.instanceMatrix.array,e*16)}raycast(e,t){const n=this.matrixWorld,r=this.count;if(Ji.geometry=this.geometry,Ji.material=this.material,Ji.material!==void 0)for(let s=0;s<r;s++){this.getMatrixAt(s,Oc),kc.multiplyMatrices(n,Oc),Ji.matrixWorld=kc,Ji.raycast(e,ts);for(let o=0,a=ts.length;o<a;o++){const l=ts[o];l.instanceId=s,l.object=this,t.push(l)}ts.length=0}}setColorAt(e,t){this.instanceColor===null&&(this.instanceColor=new ca(new Float32Array(this.instanceMatrix.count*3),3)),t.toArray(this.instanceColor.array,e*3)}setMatrixAt(e,t){t.toArray(this.instanceMatrix.array,e*16)}updateMorphTargets(){}dispose(){this.dispatchEvent({type:"dispose"})}}k0.prototype.isInstancedMesh=!0;class Sr extends yt{constructor(e){super(),this.type="LineBasicMaterial",this.color=new ve(16777215),this.linewidth=1,this.linecap="round",this.linejoin="round",this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this}}Sr.prototype.isLineBasicMaterial=!0;const Uc=new C,Hc=new C,Gc=new Me,Po=new Fi,ns=new Ni;class Fa extends He{constructor(e=new je,t=new Sr){super(),this.type="Line",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e){return super.copy(e),this.material=e.material,this.geometry=e.geometry,this}computeLineDistances(){const e=this.geometry;if(e.isBufferGeometry)if(e.index===null){const t=e.attributes.position,n=[0];for(let r=1,s=t.count;r<s;r++)Uc.fromBufferAttribute(t,r-1),Hc.fromBufferAttribute(t,r),n[r]=n[r-1],n[r]+=Uc.distanceTo(Hc);e.setAttribute("lineDistance",new tt(n,1))}else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");else e.isGeometry&&console.error("THREE.Line.computeLineDistances() no longer supports THREE.Geometry. Use THREE.BufferGeometry instead.");return this}raycast(e,t){const n=this.geometry,r=this.matrixWorld,s=e.params.Line.threshold,o=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),ns.copy(n.boundingSphere),ns.applyMatrix4(r),ns.radius+=s,e.ray.intersectsSphere(ns)===!1)return;Gc.copy(r).invert(),Po.copy(e.ray).applyMatrix4(Gc);const a=s/((this.scale.x+this.scale.y+this.scale.z)/3),l=a*a,c=new C,h=new C,u=new C,f=new C,d=this.isLineSegments?2:1;if(n.isBufferGeometry){const g=n.index,v=n.attributes.position;if(g!==null){const p=Math.max(0,o.start),m=Math.min(g.count,o.start+o.count);for(let y=p,x=m-1;y<x;y+=d){const M=g.getX(y),R=g.getX(y+1);if(c.fromBufferAttribute(v,M),h.fromBufferAttribute(v,R),Po.distanceSqToSegment(c,h,f,u)>l)continue;f.applyMatrix4(this.matrixWorld);const O=e.ray.origin.distanceTo(f);O<e.near||O>e.far||t.push({distance:O,point:u.clone().applyMatrix4(this.matrixWorld),index:y,face:null,faceIndex:null,object:this})}}else{const p=Math.max(0,o.start),m=Math.min(v.count,o.start+o.count);for(let y=p,x=m-1;y<x;y+=d){if(c.fromBufferAttribute(v,y),h.fromBufferAttribute(v,y+1),Po.distanceSqToSegment(c,h,f,u)>l)continue;f.applyMatrix4(this.matrixWorld);const R=e.ray.origin.distanceTo(f);R<e.near||R>e.far||t.push({distance:R,point:u.clone().applyMatrix4(this.matrixWorld),index:y,face:null,faceIndex:null,object:this})}}}else n.isGeometry&&console.error("THREE.Line.raycast() no longer supports THREE.Geometry. Use THREE.BufferGeometry instead.")}updateMorphTargets(){const e=this.geometry;if(e.isBufferGeometry){const t=e.morphAttributes,n=Object.keys(t);if(n.length>0){const r=t[n[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,o=r.length;s<o;s++){const a=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=s}}}}else{const t=e.morphTargets;t!==void 0&&t.length>0&&console.error("THREE.Line.updateMorphTargets() does not support THREE.Geometry. Use THREE.BufferGeometry instead.")}}}Fa.prototype.isLine=!0;const Vc=new C,Wc=new C;class za extends Fa{constructor(e,t){super(e,t),this.type="LineSegments"}computeLineDistances(){const e=this.geometry;if(e.isBufferGeometry)if(e.index===null){const t=e.attributes.position,n=[];for(let r=0,s=t.count;r<s;r+=2)Vc.fromBufferAttribute(t,r),Wc.fromBufferAttribute(t,r+1),n[r]=r===0?0:n[r-1],n[r+1]=n[r]+Vc.distanceTo(Wc);e.setAttribute("lineDistance",new tt(n,1))}else console.warn("THREE.LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");else e.isGeometry&&console.error("THREE.LineSegments.computeLineDistances() no longer supports THREE.Geometry. Use THREE.BufferGeometry instead.");return this}}za.prototype.isLineSegments=!0;class U0 extends Fa{constructor(e,t){super(e,t),this.type="LineLoop"}}U0.prototype.isLineLoop=!0;class Sh extends yt{constructor(e){super(),this.type="PointsMaterial",this.color=new ve(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.size=e.size,this.sizeAttenuation=e.sizeAttenuation,this}}Sh.prototype.isPointsMaterial=!0;const qc=new Me,ua=new Fi,is=new Ni,rs=new C;class H0 extends He{constructor(e=new je,t=new Sh){super(),this.type="Points",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e){return super.copy(e),this.material=e.material,this.geometry=e.geometry,this}raycast(e,t){const n=this.geometry,r=this.matrixWorld,s=e.params.Points.threshold,o=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),is.copy(n.boundingSphere),is.applyMatrix4(r),is.radius+=s,e.ray.intersectsSphere(is)===!1)return;qc.copy(r).invert(),ua.copy(e.ray).applyMatrix4(qc);const a=s/((this.scale.x+this.scale.y+this.scale.z)/3),l=a*a;if(n.isBufferGeometry){const c=n.index,u=n.attributes.position;if(c!==null){const f=Math.max(0,o.start),d=Math.min(c.count,o.start+o.count);for(let g=f,_=d;g<_;g++){const v=c.getX(g);rs.fromBufferAttribute(u,v),Xc(rs,v,l,r,e,t,this)}}else{const f=Math.max(0,o.start),d=Math.min(u.count,o.start+o.count);for(let g=f,_=d;g<_;g++)rs.fromBufferAttribute(u,g),Xc(rs,g,l,r,e,t,this)}}else console.error("THREE.Points.raycast() no longer supports THREE.Geometry. Use THREE.BufferGeometry instead.")}updateMorphTargets(){const e=this.geometry;if(e.isBufferGeometry){const t=e.morphAttributes,n=Object.keys(t);if(n.length>0){const r=t[n[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,o=r.length;s<o;s++){const a=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=s}}}}else{const t=e.morphTargets;t!==void 0&&t.length>0&&console.error("THREE.Points.updateMorphTargets() does not support THREE.Geometry. Use THREE.BufferGeometry instead.")}}}H0.prototype.isPoints=!0;function Xc(i,e,t,n,r,s,o){const a=ua.distanceSqToPoint(i);if(a<t){const l=new C;ua.closestPointToPoint(i,l),l.applyMatrix4(n);const c=r.ray.origin.distanceTo(l);if(c<r.near||c>r.far)return;s.push({distance:c,distanceToRay:Math.sqrt(a),point:l,index:e,face:null,object:o})}}class G0 extends ut{constructor(e,t,n,r,s,o,a,l,c){super(e,t,n,r,s,o,a,l,c),this.format=a!==void 0?a:Hn,this.minFilter=o!==void 0?o:Mt,this.magFilter=s!==void 0?s:Mt,this.generateMipmaps=!1;const h=this;function u(){h.needsUpdate=!0,e.requestVideoFrameCallback(u)}"requestVideoFrameCallback"in e&&e.requestVideoFrameCallback(u)}clone(){return new this.constructor(this.image).copy(this)}update(){const e=this.image;"requestVideoFrameCallback"in e===!1&&e.readyState>=e.HAVE_CURRENT_DATA&&(this.needsUpdate=!0)}}G0.prototype.isVideoTexture=!0;class V0 extends ut{constructor(e,t,n){super({width:e,height:t}),this.format=n,this.magFilter=st,this.minFilter=st,this.generateMipmaps=!1,this.needsUpdate=!0}}V0.prototype.isFramebufferTexture=!0;class W0 extends ut{constructor(e,t,n,r,s,o,a,l,c,h,u,f){super(null,o,a,l,c,h,r,s,u,f),this.image={width:t,height:n},this.mipmaps=e,this.flipY=!1,this.generateMipmaps=!1}}W0.prototype.isCompressedTexture=!0;class q0 extends ut{constructor(e,t,n,r,s,o,a,l,c){super(e,t,n,r,s,o,a,l,c),this.needsUpdate=!0}}q0.prototype.isCanvasTexture=!0;class Dt{constructor(){this.type="Curve",this.arcLengthDivisions=200}getPoint(){return console.warn("THREE.Curve: .getPoint() not implemented."),null}getPointAt(e,t){const n=this.getUtoTmapping(e);return this.getPoint(n,t)}getPoints(e=5){const t=[];for(let n=0;n<=e;n++)t.push(this.getPoint(n/e));return t}getSpacedPoints(e=5){const t=[];for(let n=0;n<=e;n++)t.push(this.getPointAt(n/e));return t}getLength(){const e=this.getLengths();return e[e.length-1]}getLengths(e=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===e+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;const t=[];let n,r=this.getPoint(0),s=0;t.push(0);for(let o=1;o<=e;o++)n=this.getPoint(o/e),s+=n.distanceTo(r),t.push(s),r=n;return this.cacheArcLengths=t,t}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(e,t){const n=this.getLengths();let r=0;const s=n.length;let o;t?o=t:o=e*n[s-1];let a=0,l=s-1,c;for(;a<=l;)if(r=Math.floor(a+(l-a)/2),c=n[r]-o,c<0)a=r+1;else if(c>0)l=r-1;else{l=r;break}if(r=l,n[r]===o)return r/(s-1);const h=n[r],f=n[r+1]-h,d=(o-h)/f;return(r+d)/(s-1)}getTangent(e,t){let r=e-1e-4,s=e+1e-4;r<0&&(r=0),s>1&&(s=1);const o=this.getPoint(r),a=this.getPoint(s),l=t||(o.isVector2?new Z:new C);return l.copy(a).sub(o).normalize(),l}getTangentAt(e,t){const n=this.getUtoTmapping(e);return this.getTangent(n,t)}computeFrenetFrames(e,t){const n=new C,r=[],s=[],o=[],a=new C,l=new Me;for(let d=0;d<=e;d++){const g=d/e;r[d]=this.getTangentAt(g,new C)}s[0]=new C,o[0]=new C;let c=Number.MAX_VALUE;const h=Math.abs(r[0].x),u=Math.abs(r[0].y),f=Math.abs(r[0].z);h<=c&&(c=h,n.set(1,0,0)),u<=c&&(c=u,n.set(0,1,0)),f<=c&&n.set(0,0,1),a.crossVectors(r[0],n).normalize(),s[0].crossVectors(r[0],a),o[0].crossVectors(r[0],s[0]);for(let d=1;d<=e;d++){if(s[d]=s[d-1].clone(),o[d]=o[d-1].clone(),a.crossVectors(r[d-1],r[d]),a.length()>Number.EPSILON){a.normalize();const g=Math.acos(wt(r[d-1].dot(r[d]),-1,1));s[d].applyMatrix4(l.makeRotationAxis(a,g))}o[d].crossVectors(r[d],s[d])}if(t===!0){let d=Math.acos(wt(s[0].dot(s[e]),-1,1));d/=e,r[0].dot(a.crossVectors(s[0],s[e]))>0&&(d=-d);for(let g=1;g<=e;g++)s[g].applyMatrix4(l.makeRotationAxis(r[g],d*g)),o[g].crossVectors(r[g],s[g])}return{tangents:r,normals:s,binormals:o}}clone(){return new this.constructor().copy(this)}copy(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}toJSON(){const e={metadata:{version:4.5,type:"Curve",generator:"Curve.toJSON"}};return e.arcLengthDivisions=this.arcLengthDivisions,e.type=this.type,e}fromJSON(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}}class Gs extends Dt{constructor(e=0,t=0,n=1,r=1,s=0,o=Math.PI*2,a=!1,l=0){super(),this.type="EllipseCurve",this.aX=e,this.aY=t,this.xRadius=n,this.yRadius=r,this.aStartAngle=s,this.aEndAngle=o,this.aClockwise=a,this.aRotation=l}getPoint(e,t){const n=t||new Z,r=Math.PI*2;let s=this.aEndAngle-this.aStartAngle;const o=Math.abs(s)<Number.EPSILON;for(;s<0;)s+=r;for(;s>r;)s-=r;s<Number.EPSILON&&(o?s=0:s=r),this.aClockwise===!0&&!o&&(s===r?s=-r:s=s-r);const a=this.aStartAngle+e*s;let l=this.aX+this.xRadius*Math.cos(a),c=this.aY+this.yRadius*Math.sin(a);if(this.aRotation!==0){const h=Math.cos(this.aRotation),u=Math.sin(this.aRotation),f=l-this.aX,d=c-this.aY;l=f*h-d*u+this.aX,c=f*u+d*h+this.aY}return n.set(l,c)}copy(e){return super.copy(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}toJSON(){const e=super.toJSON();return e.aX=this.aX,e.aY=this.aY,e.xRadius=this.xRadius,e.yRadius=this.yRadius,e.aStartAngle=this.aStartAngle,e.aEndAngle=this.aEndAngle,e.aClockwise=this.aClockwise,e.aRotation=this.aRotation,e}fromJSON(e){return super.fromJSON(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}}Gs.prototype.isEllipseCurve=!0;class Th extends Gs{constructor(e,t,n,r,s,o){super(e,t,n,n,r,s,o),this.type="ArcCurve"}}Th.prototype.isArcCurve=!0;function Ba(){let i=0,e=0,t=0,n=0;function r(s,o,a,l){i=s,e=a,t=-3*s+3*o-2*a-l,n=2*s-2*o+a+l}return{initCatmullRom:function(s,o,a,l,c){r(o,a,c*(a-s),c*(l-o))},initNonuniformCatmullRom:function(s,o,a,l,c,h,u){let f=(o-s)/c-(a-s)/(c+h)+(a-o)/h,d=(a-o)/h-(l-o)/(h+u)+(l-a)/u;f*=h,d*=h,r(o,a,f,d)},calc:function(s){const o=s*s,a=o*s;return i+e*s+t*o+n*a}}}const ss=new C,Io=new Ba,Do=new Ba,No=new Ba;class Eh extends Dt{constructor(e=[],t=!1,n="centripetal",r=.5){super(),this.type="CatmullRomCurve3",this.points=e,this.closed=t,this.curveType=n,this.tension=r}getPoint(e,t=new C){const n=t,r=this.points,s=r.length,o=(s-(this.closed?0:1))*e;let a=Math.floor(o),l=o-a;this.closed?a+=a>0?0:(Math.floor(Math.abs(a)/s)+1)*s:l===0&&a===s-1&&(a=s-2,l=1);let c,h;this.closed||a>0?c=r[(a-1)%s]:(ss.subVectors(r[0],r[1]).add(r[0]),c=ss);const u=r[a%s],f=r[(a+1)%s];if(this.closed||a+2<s?h=r[(a+2)%s]:(ss.subVectors(r[s-1],r[s-2]).add(r[s-1]),h=ss),this.curveType==="centripetal"||this.curveType==="chordal"){const d=this.curveType==="chordal"?.5:.25;let g=Math.pow(c.distanceToSquared(u),d),_=Math.pow(u.distanceToSquared(f),d),v=Math.pow(f.distanceToSquared(h),d);_<1e-4&&(_=1),g<1e-4&&(g=_),v<1e-4&&(v=_),Io.initNonuniformCatmullRom(c.x,u.x,f.x,h.x,g,_,v),Do.initNonuniformCatmullRom(c.y,u.y,f.y,h.y,g,_,v),No.initNonuniformCatmullRom(c.z,u.z,f.z,h.z,g,_,v)}else this.curveType==="catmullrom"&&(Io.initCatmullRom(c.x,u.x,f.x,h.x,this.tension),Do.initCatmullRom(c.y,u.y,f.y,h.y,this.tension),No.initCatmullRom(c.z,u.z,f.z,h.z,this.tension));return n.set(Io.calc(l),Do.calc(l),No.calc(l)),n}copy(e){super.copy(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){const r=e.points[t];this.points.push(r.clone())}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}toJSON(){const e=super.toJSON();e.points=[];for(let t=0,n=this.points.length;t<n;t++){const r=this.points[t];e.points.push(r.toArray())}return e.closed=this.closed,e.curveType=this.curveType,e.tension=this.tension,e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){const r=e.points[t];this.points.push(new C().fromArray(r))}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}}Eh.prototype.isCatmullRomCurve3=!0;function Yc(i,e,t,n,r){const s=(n-e)*.5,o=(r-t)*.5,a=i*i,l=i*a;return(2*t-2*n+s+o)*l+(-3*t+3*n-2*s-o)*a+s*i+t}function X0(i,e){const t=1-i;return t*t*e}function Y0(i,e){return 2*(1-i)*i*e}function j0(i,e){return i*i*e}function rr(i,e,t,n){return X0(i,e)+Y0(i,t)+j0(i,n)}function $0(i,e){const t=1-i;return t*t*t*e}function Z0(i,e){const t=1-i;return 3*t*t*i*e}function J0(i,e){return 3*(1-i)*i*i*e}function Q0(i,e){return i*i*i*e}function sr(i,e,t,n,r){return $0(i,e)+Z0(i,t)+J0(i,n)+Q0(i,r)}class Oa extends Dt{constructor(e=new Z,t=new Z,n=new Z,r=new Z){super(),this.type="CubicBezierCurve",this.v0=e,this.v1=t,this.v2=n,this.v3=r}getPoint(e,t=new Z){const n=t,r=this.v0,s=this.v1,o=this.v2,a=this.v3;return n.set(sr(e,r.x,s.x,o.x,a.x),sr(e,r.y,s.y,o.y,a.y)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}}Oa.prototype.isCubicBezierCurve=!0;class Ah extends Dt{constructor(e=new C,t=new C,n=new C,r=new C){super(),this.type="CubicBezierCurve3",this.v0=e,this.v1=t,this.v2=n,this.v3=r}getPoint(e,t=new C){const n=t,r=this.v0,s=this.v1,o=this.v2,a=this.v3;return n.set(sr(e,r.x,s.x,o.x,a.x),sr(e,r.y,s.y,o.y,a.y),sr(e,r.z,s.z,o.z,a.z)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}}Ah.prototype.isCubicBezierCurve3=!0;class Vs extends Dt{constructor(e=new Z,t=new Z){super(),this.type="LineCurve",this.v1=e,this.v2=t}getPoint(e,t=new Z){const n=t;return e===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(e).add(this.v1)),n}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t){const n=t||new Z;return n.copy(this.v2).sub(this.v1).normalize(),n}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}Vs.prototype.isLineCurve=!0;class K0 extends Dt{constructor(e=new C,t=new C){super(),this.type="LineCurve3",this.isLineCurve3=!0,this.v1=e,this.v2=t}getPoint(e,t=new C){const n=t;return e===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(e).add(this.v1)),n}getPointAt(e,t){return this.getPoint(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class ka extends Dt{constructor(e=new Z,t=new Z,n=new Z){super(),this.type="QuadraticBezierCurve",this.v0=e,this.v1=t,this.v2=n}getPoint(e,t=new Z){const n=t,r=this.v0,s=this.v1,o=this.v2;return n.set(rr(e,r.x,s.x,o.x),rr(e,r.y,s.y,o.y)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}ka.prototype.isQuadraticBezierCurve=!0;class Ch extends Dt{constructor(e=new C,t=new C,n=new C){super(),this.type="QuadraticBezierCurve3",this.v0=e,this.v1=t,this.v2=n}getPoint(e,t=new C){const n=t,r=this.v0,s=this.v1,o=this.v2;return n.set(rr(e,r.x,s.x,o.x),rr(e,r.y,s.y,o.y),rr(e,r.z,s.z,o.z)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}Ch.prototype.isQuadraticBezierCurve3=!0;class Ua extends Dt{constructor(e=[]){super(),this.type="SplineCurve",this.points=e}getPoint(e,t=new Z){const n=t,r=this.points,s=(r.length-1)*e,o=Math.floor(s),a=s-o,l=r[o===0?o:o-1],c=r[o],h=r[o>r.length-2?r.length-1:o+1],u=r[o>r.length-3?r.length-1:o+2];return n.set(Yc(a,l.x,c.x,h.x,u.x),Yc(a,l.y,c.y,h.y,u.y)),n}copy(e){super.copy(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){const r=e.points[t];this.points.push(r.clone())}return this}toJSON(){const e=super.toJSON();e.points=[];for(let t=0,n=this.points.length;t<n;t++){const r=this.points[t];e.points.push(r.toArray())}return e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){const r=e.points[t];this.points.push(new Z().fromArray(r))}return this}}Ua.prototype.isSplineCurve=!0;var Lh=Object.freeze({__proto__:null,ArcCurve:Th,CatmullRomCurve3:Eh,CubicBezierCurve:Oa,CubicBezierCurve3:Ah,EllipseCurve:Gs,LineCurve:Vs,LineCurve3:K0,QuadraticBezierCurve:ka,QuadraticBezierCurve3:Ch,SplineCurve:Ua});class ex extends Dt{constructor(){super(),this.type="CurvePath",this.curves=[],this.autoClose=!1}add(e){this.curves.push(e)}closePath(){const e=this.curves[0].getPoint(0),t=this.curves[this.curves.length-1].getPoint(1);e.equals(t)||this.curves.push(new Vs(t,e))}getPoint(e,t){const n=e*this.getLength(),r=this.getCurveLengths();let s=0;for(;s<r.length;){if(r[s]>=n){const o=r[s]-n,a=this.curves[s],l=a.getLength(),c=l===0?0:1-o/l;return a.getPointAt(c,t)}s++}return null}getLength(){const e=this.getCurveLengths();return e[e.length-1]}updateArcLengths(){this.needsUpdate=!0,this.cacheLengths=null,this.getCurveLengths()}getCurveLengths(){if(this.cacheLengths&&this.cacheLengths.length===this.curves.length)return this.cacheLengths;const e=[];let t=0;for(let n=0,r=this.curves.length;n<r;n++)t+=this.curves[n].getLength(),e.push(t);return this.cacheLengths=e,e}getSpacedPoints(e=40){const t=[];for(let n=0;n<=e;n++)t.push(this.getPoint(n/e));return this.autoClose&&t.push(t[0]),t}getPoints(e=12){const t=[];let n;for(let r=0,s=this.curves;r<s.length;r++){const o=s[r],a=o&&o.isEllipseCurve?e*2:o&&(o.isLineCurve||o.isLineCurve3)?1:o&&o.isSplineCurve?e*o.points.length:e,l=o.getPoints(a);for(let c=0;c<l.length;c++){const h=l[c];n&&n.equals(h)||(t.push(h),n=h)}}return this.autoClose&&t.length>1&&!t[t.length-1].equals(t[0])&&t.push(t[0]),t}copy(e){super.copy(e),this.curves=[];for(let t=0,n=e.curves.length;t<n;t++){const r=e.curves[t];this.curves.push(r.clone())}return this.autoClose=e.autoClose,this}toJSON(){const e=super.toJSON();e.autoClose=this.autoClose,e.curves=[];for(let t=0,n=this.curves.length;t<n;t++){const r=this.curves[t];e.curves.push(r.toJSON())}return e}fromJSON(e){super.fromJSON(e),this.autoClose=e.autoClose,this.curves=[];for(let t=0,n=e.curves.length;t<n;t++){const r=e.curves[t];this.curves.push(new Lh[r.type]().fromJSON(r))}return this}}class ha extends ex{constructor(e){super(),this.type="Path",this.currentPoint=new Z,e&&this.setFromPoints(e)}setFromPoints(e){this.moveTo(e[0].x,e[0].y);for(let t=1,n=e.length;t<n;t++)this.lineTo(e[t].x,e[t].y);return this}moveTo(e,t){return this.currentPoint.set(e,t),this}lineTo(e,t){const n=new Vs(this.currentPoint.clone(),new Z(e,t));return this.curves.push(n),this.currentPoint.set(e,t),this}quadraticCurveTo(e,t,n,r){const s=new ka(this.currentPoint.clone(),new Z(e,t),new Z(n,r));return this.curves.push(s),this.currentPoint.set(n,r),this}bezierCurveTo(e,t,n,r,s,o){const a=new Oa(this.currentPoint.clone(),new Z(e,t),new Z(n,r),new Z(s,o));return this.curves.push(a),this.currentPoint.set(s,o),this}splineThru(e){const t=[this.currentPoint.clone()].concat(e),n=new Ua(t);return this.curves.push(n),this.currentPoint.copy(e[e.length-1]),this}arc(e,t,n,r,s,o){const a=this.currentPoint.x,l=this.currentPoint.y;return this.absarc(e+a,t+l,n,r,s,o),this}absarc(e,t,n,r,s,o){return this.absellipse(e,t,n,n,r,s,o),this}ellipse(e,t,n,r,s,o,a,l){const c=this.currentPoint.x,h=this.currentPoint.y;return this.absellipse(e+c,t+h,n,r,s,o,a,l),this}absellipse(e,t,n,r,s,o,a,l){const c=new Gs(e,t,n,r,s,o,a,l);if(this.curves.length>0){const u=c.getPoint(0);u.equals(this.currentPoint)||this.lineTo(u.x,u.y)}this.curves.push(c);const h=c.getPoint(1);return this.currentPoint.copy(h),this}copy(e){return super.copy(e),this.currentPoint.copy(e.currentPoint),this}toJSON(){const e=super.toJSON();return e.currentPoint=this.currentPoint.toArray(),e}fromJSON(e){return super.fromJSON(e),this.currentPoint.fromArray(e.currentPoint),this}}class Tr extends ha{constructor(e){super(e),this.uuid=Qt(),this.type="Shape",this.holes=[]}getPointsHoles(e){const t=[];for(let n=0,r=this.holes.length;n<r;n++)t[n]=this.holes[n].getPoints(e);return t}extractPoints(e){return{shape:this.getPoints(e),holes:this.getPointsHoles(e)}}copy(e){super.copy(e),this.holes=[];for(let t=0,n=e.holes.length;t<n;t++){const r=e.holes[t];this.holes.push(r.clone())}return this}toJSON(){const e=super.toJSON();e.uuid=this.uuid,e.holes=[];for(let t=0,n=this.holes.length;t<n;t++){const r=this.holes[t];e.holes.push(r.toJSON())}return e}fromJSON(e){super.fromJSON(e),this.uuid=e.uuid,this.holes=[];for(let t=0,n=e.holes.length;t<n;t++){const r=e.holes[t];this.holes.push(new ha().fromJSON(r))}return this}}const tx={triangulate:function(i,e,t=2){const n=e&&e.length,r=n?e[0]*t:i.length;let s=Rh(i,0,r,t,!0);const o=[];if(!s||s.next===s.prev)return o;let a,l,c,h,u,f,d;if(n&&(s=ox(i,e,s,t)),i.length>80*t){a=c=i[0],l=h=i[1];for(let g=t;g<r;g+=t)u=i[g],f=i[g+1],u<a&&(a=u),f<l&&(l=f),u>c&&(c=u),f>h&&(h=f);d=Math.max(c-a,h-l),d=d!==0?1/d:0}return mr(s,o,t,a,l,d),o}};function Rh(i,e,t,n,r){let s,o;if(r===_x(i,e,t,n)>0)for(s=e;s<t;s+=n)o=jc(s,i[s],i[s+1],o);else for(s=t-n;s>=e;s-=n)o=jc(s,i[s],i[s+1],o);return o&&Ws(o,o.next)&&(_r(o),o=o.next),o}function An(i,e){if(!i)return i;e||(e=i);let t=i,n;do if(n=!1,!t.steiner&&(Ws(t,t.next)||Ze(t.prev,t,t.next)===0)){if(_r(t),t=e=t.prev,t===t.next)break;n=!0}else t=t.next;while(n||t!==e);return e}function mr(i,e,t,n,r,s,o){if(!i)return;!o&&s&&hx(i,n,r,s);let a=i,l,c;for(;i.prev!==i.next;){if(l=i.prev,c=i.next,s?ix(i,n,r,s):nx(i)){e.push(l.i/t),e.push(i.i/t),e.push(c.i/t),_r(i),i=c.next,a=c.next;continue}if(i=c,i===a){o?o===1?(i=rx(An(i),e,t),mr(i,e,t,n,r,s,2)):o===2&&sx(i,e,t,n,r,s):mr(An(i),e,t,n,r,s,1);break}}}function nx(i){const e=i.prev,t=i,n=i.next;if(Ze(e,t,n)>=0)return!1;let r=i.next.next;for(;r!==i.prev;){if(xi(e.x,e.y,t.x,t.y,n.x,n.y,r.x,r.y)&&Ze(r.prev,r,r.next)>=0)return!1;r=r.next}return!0}function ix(i,e,t,n){const r=i.prev,s=i,o=i.next;if(Ze(r,s,o)>=0)return!1;const a=r.x<s.x?r.x<o.x?r.x:o.x:s.x<o.x?s.x:o.x,l=r.y<s.y?r.y<o.y?r.y:o.y:s.y<o.y?s.y:o.y,c=r.x>s.x?r.x>o.x?r.x:o.x:s.x>o.x?s.x:o.x,h=r.y>s.y?r.y>o.y?r.y:o.y:s.y>o.y?s.y:o.y,u=fa(a,l,e,t,n),f=fa(c,h,e,t,n);let d=i.prevZ,g=i.nextZ;for(;d&&d.z>=u&&g&&g.z<=f;){if(d!==i.prev&&d!==i.next&&xi(r.x,r.y,s.x,s.y,o.x,o.y,d.x,d.y)&&Ze(d.prev,d,d.next)>=0||(d=d.prevZ,g!==i.prev&&g!==i.next&&xi(r.x,r.y,s.x,s.y,o.x,o.y,g.x,g.y)&&Ze(g.prev,g,g.next)>=0))return!1;g=g.nextZ}for(;d&&d.z>=u;){if(d!==i.prev&&d!==i.next&&xi(r.x,r.y,s.x,s.y,o.x,o.y,d.x,d.y)&&Ze(d.prev,d,d.next)>=0)return!1;d=d.prevZ}for(;g&&g.z<=f;){if(g!==i.prev&&g!==i.next&&xi(r.x,r.y,s.x,s.y,o.x,o.y,g.x,g.y)&&Ze(g.prev,g,g.next)>=0)return!1;g=g.nextZ}return!0}function rx(i,e,t){let n=i;do{const r=n.prev,s=n.next.next;!Ws(r,s)&&Ph(r,n,n.next,s)&&gr(r,s)&&gr(s,r)&&(e.push(r.i/t),e.push(n.i/t),e.push(s.i/t),_r(n),_r(n.next),n=i=s),n=n.next}while(n!==i);return An(n)}function sx(i,e,t,n,r,s){let o=i;do{let a=o.next.next;for(;a!==o.prev;){if(o.i!==a.i&&px(o,a)){let l=Ih(o,a);o=An(o,o.next),l=An(l,l.next),mr(o,e,t,n,r,s),mr(l,e,t,n,r,s);return}a=a.next}o=o.next}while(o!==i)}function ox(i,e,t,n){const r=[];let s,o,a,l,c;for(s=0,o=e.length;s<o;s++)a=e[s]*n,l=s<o-1?e[s+1]*n:i.length,c=Rh(i,a,l,n,!1),c===c.next&&(c.steiner=!0),r.push(dx(c));for(r.sort(ax),s=0;s<r.length;s++)lx(r[s],t),t=An(t,t.next);return t}function ax(i,e){return i.x-e.x}function lx(i,e){if(e=cx(i,e),e){const t=Ih(e,i);An(e,e.next),An(t,t.next)}}function cx(i,e){let t=e;const n=i.x,r=i.y;let s=-1/0,o;do{if(r<=t.y&&r>=t.next.y&&t.next.y!==t.y){const f=t.x+(r-t.y)*(t.next.x-t.x)/(t.next.y-t.y);if(f<=n&&f>s){if(s=f,f===n){if(r===t.y)return t;if(r===t.next.y)return t.next}o=t.x<t.next.x?t:t.next}}t=t.next}while(t!==e);if(!o)return null;if(n===s)return o;const a=o,l=o.x,c=o.y;let h=1/0,u;t=o;do n>=t.x&&t.x>=l&&n!==t.x&&xi(r<c?n:s,r,l,c,r<c?s:n,r,t.x,t.y)&&(u=Math.abs(r-t.y)/(n-t.x),gr(t,i)&&(u<h||u===h&&(t.x>o.x||t.x===o.x&&ux(o,t)))&&(o=t,h=u)),t=t.next;while(t!==a);return o}function ux(i,e){return Ze(i.prev,i,e.prev)<0&&Ze(e.next,i,i.next)<0}function hx(i,e,t,n){let r=i;do r.z===null&&(r.z=fa(r.x,r.y,e,t,n)),r.prevZ=r.prev,r.nextZ=r.next,r=r.next;while(r!==i);r.prevZ.nextZ=null,r.prevZ=null,fx(r)}function fx(i){let e,t,n,r,s,o,a,l,c=1;do{for(t=i,i=null,s=null,o=0;t;){for(o++,n=t,a=0,e=0;e<c&&(a++,n=n.nextZ,!!n);e++);for(l=c;a>0||l>0&&n;)a!==0&&(l===0||!n||t.z<=n.z)?(r=t,t=t.nextZ,a--):(r=n,n=n.nextZ,l--),s?s.nextZ=r:i=r,r.prevZ=s,s=r;t=n}s.nextZ=null,c*=2}while(o>1);return i}function fa(i,e,t,n,r){return i=32767*(i-t)*r,e=32767*(e-n)*r,i=(i|i<<8)&16711935,i=(i|i<<4)&252645135,i=(i|i<<2)&858993459,i=(i|i<<1)&1431655765,e=(e|e<<8)&16711935,e=(e|e<<4)&252645135,e=(e|e<<2)&858993459,e=(e|e<<1)&1431655765,i|e<<1}function dx(i){let e=i,t=i;do(e.x<t.x||e.x===t.x&&e.y<t.y)&&(t=e),e=e.next;while(e!==i);return t}function xi(i,e,t,n,r,s,o,a){return(r-o)*(e-a)-(i-o)*(s-a)>=0&&(i-o)*(n-a)-(t-o)*(e-a)>=0&&(t-o)*(s-a)-(r-o)*(n-a)>=0}function px(i,e){return i.next.i!==e.i&&i.prev.i!==e.i&&!mx(i,e)&&(gr(i,e)&&gr(e,i)&&gx(i,e)&&(Ze(i.prev,i,e.prev)||Ze(i,e.prev,e))||Ws(i,e)&&Ze(i.prev,i,i.next)>0&&Ze(e.prev,e,e.next)>0)}function Ze(i,e,t){return(e.y-i.y)*(t.x-e.x)-(e.x-i.x)*(t.y-e.y)}function Ws(i,e){return i.x===e.x&&i.y===e.y}function Ph(i,e,t,n){const r=as(Ze(i,e,t)),s=as(Ze(i,e,n)),o=as(Ze(t,n,i)),a=as(Ze(t,n,e));return!!(r!==s&&o!==a||r===0&&os(i,t,e)||s===0&&os(i,n,e)||o===0&&os(t,i,n)||a===0&&os(t,e,n))}function os(i,e,t){return e.x<=Math.max(i.x,t.x)&&e.x>=Math.min(i.x,t.x)&&e.y<=Math.max(i.y,t.y)&&e.y>=Math.min(i.y,t.y)}function as(i){return i>0?1:i<0?-1:0}function mx(i,e){let t=i;do{if(t.i!==i.i&&t.next.i!==i.i&&t.i!==e.i&&t.next.i!==e.i&&Ph(t,t.next,i,e))return!0;t=t.next}while(t!==i);return!1}function gr(i,e){return Ze(i.prev,i,i.next)<0?Ze(i,e,i.next)>=0&&Ze(i,i.prev,e)>=0:Ze(i,e,i.prev)<0||Ze(i,i.next,e)<0}function gx(i,e){let t=i,n=!1;const r=(i.x+e.x)/2,s=(i.y+e.y)/2;do t.y>s!=t.next.y>s&&t.next.y!==t.y&&r<(t.next.x-t.x)*(s-t.y)/(t.next.y-t.y)+t.x&&(n=!n),t=t.next;while(t!==i);return n}function Ih(i,e){const t=new da(i.i,i.x,i.y),n=new da(e.i,e.x,e.y),r=i.next,s=e.prev;return i.next=e,e.prev=i,t.next=r,r.prev=t,n.next=t,t.prev=n,s.next=n,n.prev=s,n}function jc(i,e,t,n){const r=new da(i,e,t);return n?(r.next=n.next,r.prev=n,n.next.prev=r,n.next=r):(r.prev=r,r.next=r),r}function _r(i){i.next.prev=i.prev,i.prev.next=i.next,i.prevZ&&(i.prevZ.nextZ=i.nextZ),i.nextZ&&(i.nextZ.prevZ=i.prevZ)}function da(i,e,t){this.i=i,this.x=e,this.y=t,this.prev=null,this.next=null,this.z=null,this.prevZ=null,this.nextZ=null,this.steiner=!1}function _x(i,e,t,n){let r=0;for(let s=e,o=t-n;s<t;s+=n)r+=(i[o]-i[s])*(i[s+1]+i[o+1]),o=s;return r}class En{static area(e){const t=e.length;let n=0;for(let r=t-1,s=0;s<t;r=s++)n+=e[r].x*e[s].y-e[s].x*e[r].y;return n*.5}static isClockWise(e){return En.area(e)<0}static triangulateShape(e,t){const n=[],r=[],s=[];$c(e),Zc(n,e);let o=e.length;t.forEach($c);for(let l=0;l<t.length;l++)r.push(o),o+=t[l].length,Zc(n,t[l]);const a=tx.triangulate(n,r);for(let l=0;l<a.length;l+=3)s.push(a.slice(l,l+3));return s}}function $c(i){const e=i.length;e>2&&i[e-1].equals(i[0])&&i.pop()}function Zc(i,e){for(let t=0;t<e.length;t++)i.push(e[t].x),i.push(e[t].y)}class ki extends je{constructor(e=new Tr([new Z(.5,.5),new Z(-.5,.5),new Z(-.5,-.5),new Z(.5,-.5)]),t={}){super(),this.type="ExtrudeGeometry",this.parameters={shapes:e,options:t},e=Array.isArray(e)?e:[e];const n=this,r=[],s=[];for(let a=0,l=e.length;a<l;a++){const c=e[a];o(c)}this.setAttribute("position",new tt(r,3)),this.setAttribute("uv",new tt(s,2)),this.computeVertexNormals();function o(a){const l=[],c=t.curveSegments!==void 0?t.curveSegments:12,h=t.steps!==void 0?t.steps:1;let u=t.depth!==void 0?t.depth:1,f=t.bevelEnabled!==void 0?t.bevelEnabled:!0,d=t.bevelThickness!==void 0?t.bevelThickness:.2,g=t.bevelSize!==void 0?t.bevelSize:d-.1,_=t.bevelOffset!==void 0?t.bevelOffset:0,v=t.bevelSegments!==void 0?t.bevelSegments:3;const p=t.extrudePath,m=t.UVGenerator!==void 0?t.UVGenerator:vx;t.amount!==void 0&&(console.warn("THREE.ExtrudeBufferGeometry: amount has been renamed to depth."),u=t.amount);let y,x=!1,M,R,D,O;p&&(y=p.getSpacedPoints(h),x=!0,f=!1,M=p.computeFrenetFrames(h,!1),R=new C,D=new C,O=new C),f||(v=0,d=0,g=0,_=0);const j=a.extractPoints(c);let k=j.shape;const P=j.holes;if(!En.isClockWise(k)){k=k.reverse();for(let V=0,te=P.length;V<te;V++){const ne=P[V];En.isClockWise(ne)&&(P[V]=ne.reverse())}}const b=En.triangulateShape(k,P),F=k;for(let V=0,te=P.length;V<te;V++){const ne=P[V];k=k.concat(ne)}function I(V,te,ne){return te||console.error("THREE.ExtrudeGeometry: vec does not exist"),te.clone().multiplyScalar(ne).add(V)}const N=k.length,z=b.length;function ee(V,te,ne){let he,se,we;const Se=V.x-te.x,Pe=V.y-te.y,Ve=ne.x-V.x,A=ne.y-V.y,S=Se*Se+Pe*Pe,Y=Se*A-Pe*Ve;if(Math.abs(Y)>Number.EPSILON){const K=Math.sqrt(S),oe=Math.sqrt(Ve*Ve+A*A),Q=te.x-Pe/K,be=te.y+Se/K,me=ne.x-A/oe,L=ne.y+Ve/oe,E=((me-Q)*A-(L-be)*Ve)/(Se*A-Pe*Ve);he=Q+Se*E-V.x,se=be+Pe*E-V.y;const J=he*he+se*se;if(J<=2)return new Z(he,se);we=Math.sqrt(J/2)}else{let K=!1;Se>Number.EPSILON?Ve>Number.EPSILON&&(K=!0):Se<-Number.EPSILON?Ve<-Number.EPSILON&&(K=!0):Math.sign(Pe)===Math.sign(A)&&(K=!0),K?(he=-Pe,se=Se,we=Math.sqrt(S)):(he=Se,se=Pe,we=Math.sqrt(S/2))}return new Z(he/we,se/we)}const re=[];for(let V=0,te=F.length,ne=te-1,he=V+1;V<te;V++,ne++,he++)ne===te&&(ne=0),he===te&&(he=0),re[V]=ee(F[V],F[ne],F[he]);const G=[];let W,ae=re.concat();for(let V=0,te=P.length;V<te;V++){const ne=P[V];W=[];for(let he=0,se=ne.length,we=se-1,Se=he+1;he<se;he++,we++,Se++)we===se&&(we=0),Se===se&&(Se=0),W[he]=ee(ne[he],ne[we],ne[Se]);G.push(W),ae=ae.concat(W)}for(let V=0;V<v;V++){const te=V/v,ne=d*Math.cos(te*Math.PI/2),he=g*Math.sin(te*Math.PI/2)+_;for(let se=0,we=F.length;se<we;se++){const Se=I(F[se],re[se],he);Ce(Se.x,Se.y,-ne)}for(let se=0,we=P.length;se<we;se++){const Se=P[se];W=G[se];for(let Pe=0,Ve=Se.length;Pe<Ve;Pe++){const A=I(Se[Pe],W[Pe],he);Ce(A.x,A.y,-ne)}}}const ie=g+_;for(let V=0;V<N;V++){const te=f?I(k[V],ae[V],ie):k[V];x?(D.copy(M.normals[0]).multiplyScalar(te.x),R.copy(M.binormals[0]).multiplyScalar(te.y),O.copy(y[0]).add(D).add(R),Ce(O.x,O.y,O.z)):Ce(te.x,te.y,0)}for(let V=1;V<=h;V++)for(let te=0;te<N;te++){const ne=f?I(k[te],ae[te],ie):k[te];x?(D.copy(M.normals[V]).multiplyScalar(ne.x),R.copy(M.binormals[V]).multiplyScalar(ne.y),O.copy(y[V]).add(D).add(R),Ce(O.x,O.y,O.z)):Ce(ne.x,ne.y,u/h*V)}for(let V=v-1;V>=0;V--){const te=V/v,ne=d*Math.cos(te*Math.PI/2),he=g*Math.sin(te*Math.PI/2)+_;for(let se=0,we=F.length;se<we;se++){const Se=I(F[se],re[se],he);Ce(Se.x,Se.y,u+ne)}for(let se=0,we=P.length;se<we;se++){const Se=P[se];W=G[se];for(let Pe=0,Ve=Se.length;Pe<Ve;Pe++){const A=I(Se[Pe],W[Pe],he);x?Ce(A.x,A.y+y[h-1].y,y[h-1].x+ne):Ce(A.x,A.y,u+ne)}}}ue(),Re();function ue(){const V=r.length/3;if(f){let te=0,ne=N*te;for(let he=0;he<z;he++){const se=b[he];xe(se[2]+ne,se[1]+ne,se[0]+ne)}te=h+v*2,ne=N*te;for(let he=0;he<z;he++){const se=b[he];xe(se[0]+ne,se[1]+ne,se[2]+ne)}}else{for(let te=0;te<z;te++){const ne=b[te];xe(ne[2],ne[1],ne[0])}for(let te=0;te<z;te++){const ne=b[te];xe(ne[0]+N*h,ne[1]+N*h,ne[2]+N*h)}}n.addGroup(V,r.length/3-V,0)}function Re(){const V=r.length/3;let te=0;X(F,te),te+=F.length;for(let ne=0,he=P.length;ne<he;ne++){const se=P[ne];X(se,te),te+=se.length}n.addGroup(V,r.length/3-V,1)}function X(V,te){let ne=V.length;for(;--ne>=0;){const he=ne;let se=ne-1;se<0&&(se=V.length-1);for(let we=0,Se=h+v*2;we<Se;we++){const Pe=N*we,Ve=N*(we+1),A=te+he+Pe,S=te+se+Pe,Y=te+se+Ve,K=te+he+Ve;de(A,S,Y,K)}}}function Ce(V,te,ne){l.push(V),l.push(te),l.push(ne)}function xe(V,te,ne){pe(V),pe(te),pe(ne);const he=r.length/3,se=m.generateTopUV(n,r,he-3,he-2,he-1);Fe(se[0]),Fe(se[1]),Fe(se[2])}function de(V,te,ne,he){pe(V),pe(te),pe(he),pe(te),pe(ne),pe(he);const se=r.length/3,we=m.generateSideWallUV(n,r,se-6,se-3,se-2,se-1);Fe(we[0]),Fe(we[1]),Fe(we[3]),Fe(we[1]),Fe(we[2]),Fe(we[3])}function pe(V){r.push(l[V*3+0]),r.push(l[V*3+1]),r.push(l[V*3+2])}function Fe(V){s.push(V.x),s.push(V.y)}}}toJSON(){const e=super.toJSON(),t=this.parameters.shapes,n=this.parameters.options;return xx(t,n,e)}static fromJSON(e,t){const n=[];for(let s=0,o=e.shapes.length;s<o;s++){const a=t[e.shapes[s]];n.push(a)}const r=e.options.extrudePath;return r!==void 0&&(e.options.extrudePath=new Lh[r.type]().fromJSON(r)),new ki(n,e.options)}}const vx={generateTopUV:function(i,e,t,n,r){const s=e[t*3],o=e[t*3+1],a=e[n*3],l=e[n*3+1],c=e[r*3],h=e[r*3+1];return[new Z(s,o),new Z(a,l),new Z(c,h)]},generateSideWallUV:function(i,e,t,n,r,s){const o=e[t*3],a=e[t*3+1],l=e[t*3+2],c=e[n*3],h=e[n*3+1],u=e[n*3+2],f=e[r*3],d=e[r*3+1],g=e[r*3+2],_=e[s*3],v=e[s*3+1],p=e[s*3+2];return Math.abs(a-h)<Math.abs(o-c)?[new Z(o,1-l),new Z(c,1-u),new Z(f,1-g),new Z(_,1-p)]:[new Z(a,1-l),new Z(h,1-u),new Z(d,1-g),new Z(v,1-p)]}};function xx(i,e,t){if(t.shapes=[],Array.isArray(i))for(let n=0,r=i.length;n<r;n++){const s=i[n];t.shapes.push(s.uuid)}else t.shapes.push(i.uuid);return e.extrudePath!==void 0&&(t.options.extrudePath=e.extrudePath.toJSON()),t}class Ha extends je{constructor(e=.5,t=1,n=8,r=1,s=0,o=Math.PI*2){super(),this.type="RingGeometry",this.parameters={innerRadius:e,outerRadius:t,thetaSegments:n,phiSegments:r,thetaStart:s,thetaLength:o},n=Math.max(3,n),r=Math.max(1,r);const a=[],l=[],c=[],h=[];let u=e;const f=(t-e)/r,d=new C,g=new Z;for(let _=0;_<=r;_++){for(let v=0;v<=n;v++){const p=s+v/n*o;d.x=u*Math.cos(p),d.y=u*Math.sin(p),l.push(d.x,d.y,d.z),c.push(0,0,1),g.x=(d.x/t+1)/2,g.y=(d.y/t+1)/2,h.push(g.x,g.y)}u+=f}for(let _=0;_<r;_++){const v=_*(n+1);for(let p=0;p<n;p++){const m=p+v,y=m,x=m+n+1,M=m+n+2,R=m+1;a.push(y,x,R),a.push(x,M,R)}}this.setIndex(a),this.setAttribute("position",new tt(l,3)),this.setAttribute("normal",new tt(c,3)),this.setAttribute("uv",new tt(h,2))}static fromJSON(e){return new Ha(e.innerRadius,e.outerRadius,e.thetaSegments,e.phiSegments,e.thetaStart,e.thetaLength)}}class Ga extends je{constructor(e=new Tr([new Z(0,.5),new Z(-.5,-.5),new Z(.5,-.5)]),t=12){super(),this.type="ShapeGeometry",this.parameters={shapes:e,curveSegments:t};const n=[],r=[],s=[],o=[];let a=0,l=0;if(Array.isArray(e)===!1)c(e);else for(let h=0;h<e.length;h++)c(e[h]),this.addGroup(a,l,h),a+=l,l=0;this.setIndex(n),this.setAttribute("position",new tt(r,3)),this.setAttribute("normal",new tt(s,3)),this.setAttribute("uv",new tt(o,2));function c(h){const u=r.length/3,f=h.extractPoints(t);let d=f.shape;const g=f.holes;En.isClockWise(d)===!1&&(d=d.reverse());for(let v=0,p=g.length;v<p;v++){const m=g[v];En.isClockWise(m)===!0&&(g[v]=m.reverse())}const _=En.triangulateShape(d,g);for(let v=0,p=g.length;v<p;v++){const m=g[v];d=d.concat(m)}for(let v=0,p=d.length;v<p;v++){const m=d[v];r.push(m.x,m.y,0),s.push(0,0,1),o.push(m.x,m.y)}for(let v=0,p=_.length;v<p;v++){const m=_[v],y=m[0]+u,x=m[1]+u,M=m[2]+u;n.push(y,x,M),l+=3}}}toJSON(){const e=super.toJSON(),t=this.parameters.shapes;return yx(t,e)}static fromJSON(e,t){const n=[];for(let r=0,s=e.shapes.length;r<s;r++){const o=t[e.shapes[r]];n.push(o)}return new Ga(n,e.curveSegments)}}function yx(i,e){if(e.shapes=[],Array.isArray(i))for(let t=0,n=i.length;t<n;t++){const r=i[t];e.shapes.push(r.uuid)}else e.shapes.push(i.uuid);return e}class Mx extends yt{constructor(e){super(),this.type="ShadowMaterial",this.color=new ve(0),this.transparent=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this}}Mx.prototype.isShadowMaterial=!0;class Dh extends yt{constructor(e){super(),this.defines={STANDARD:""},this.type="MeshStandardMaterial",this.color=new ve(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new ve(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Ii,this.normalScale=new Z(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapIntensity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapIntensity=e.envMapIntensity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this}}Dh.prototype.isMeshStandardMaterial=!0;class bx extends Dh{constructor(e){super(),this.defines={STANDARD:"",PHYSICAL:""},this.type="MeshPhysicalMaterial",this.clearcoatMap=null,this.clearcoatRoughness=0,this.clearcoatRoughnessMap=null,this.clearcoatNormalScale=new Z(1,1),this.clearcoatNormalMap=null,this.ior=1.5,Object.defineProperty(this,"reflectivity",{get:function(){return wt(2.5*(this.ior-1)/(this.ior+1),0,1)},set:function(t){this.ior=(1+.4*t)/(1-.4*t)}}),this.sheenColor=new ve(0),this.sheenColorMap=null,this.sheenRoughness=1,this.sheenRoughnessMap=null,this.transmissionMap=null,this.thickness=0,this.thicknessMap=null,this.attenuationDistance=0,this.attenuationColor=new ve(1,1,1),this.specularIntensity=1,this.specularIntensityMap=null,this.specularColor=new ve(1,1,1),this.specularColorMap=null,this._sheen=0,this._clearcoat=0,this._transmission=0,this.setValues(e)}get sheen(){return this._sheen}set sheen(e){this._sheen>0!=e>0&&this.version++,this._sheen=e}get clearcoat(){return this._clearcoat}set clearcoat(e){this._clearcoat>0!=e>0&&this.version++,this._clearcoat=e}get transmission(){return this._transmission}set transmission(e){this._transmission>0!=e>0&&this.version++,this._transmission=e}copy(e){return super.copy(e),this.defines={STANDARD:"",PHYSICAL:""},this.clearcoat=e.clearcoat,this.clearcoatMap=e.clearcoatMap,this.clearcoatRoughness=e.clearcoatRoughness,this.clearcoatRoughnessMap=e.clearcoatRoughnessMap,this.clearcoatNormalMap=e.clearcoatNormalMap,this.clearcoatNormalScale.copy(e.clearcoatNormalScale),this.ior=e.ior,this.sheen=e.sheen,this.sheenColor.copy(e.sheenColor),this.sheenColorMap=e.sheenColorMap,this.sheenRoughness=e.sheenRoughness,this.sheenRoughnessMap=e.sheenRoughnessMap,this.transmission=e.transmission,this.transmissionMap=e.transmissionMap,this.thickness=e.thickness,this.thicknessMap=e.thicknessMap,this.attenuationDistance=e.attenuationDistance,this.attenuationColor.copy(e.attenuationColor),this.specularIntensity=e.specularIntensity,this.specularIntensityMap=e.specularIntensityMap,this.specularColor.copy(e.specularColor),this.specularColorMap=e.specularColorMap,this}}bx.prototype.isMeshPhysicalMaterial=!0;class wx extends yt{constructor(e){super(),this.type="MeshPhongMaterial",this.color=new ve(16777215),this.specular=new ve(1118481),this.shininess=30,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new ve(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Ii,this.normalScale=new Z(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.combine=Ds,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.specular.copy(e.specular),this.shininess=e.shininess,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this}}wx.prototype.isMeshPhongMaterial=!0;class Sx extends yt{constructor(e){super(),this.defines={TOON:""},this.type="MeshToonMaterial",this.color=new ve(16777215),this.map=null,this.gradientMap=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new ve(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Ii,this.normalScale=new Z(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.alphaMap=null,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.gradientMap=e.gradientMap,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.alphaMap=e.alphaMap,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this}}Sx.prototype.isMeshToonMaterial=!0;class Tx extends yt{constructor(e){super(),this.type="MeshNormalMaterial",this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Ii,this.normalScale=new Z(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.flatShading=!1,this.setValues(e)}copy(e){return super.copy(e),this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.flatShading=e.flatShading,this}}Tx.prototype.isMeshNormalMaterial=!0;class Ex extends yt{constructor(e){super(),this.type="MeshLambertMaterial",this.color=new ve(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new ve(0),this.emissiveIntensity=1,this.emissiveMap=null,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.combine=Ds,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this}}Ex.prototype.isMeshLambertMaterial=!0;class Ax extends yt{constructor(e){super(),this.defines={MATCAP:""},this.type="MeshMatcapMaterial",this.color=new ve(16777215),this.matcap=null,this.map=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Ii,this.normalScale=new Z(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.alphaMap=null,this.flatShading=!1,this.setValues(e)}copy(e){return super.copy(e),this.defines={MATCAP:""},this.color.copy(e.color),this.matcap=e.matcap,this.map=e.map,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.alphaMap=e.alphaMap,this.flatShading=e.flatShading,this}}Ax.prototype.isMeshMatcapMaterial=!0;class Cx extends Sr{constructor(e){super(),this.type="LineDashedMaterial",this.scale=1,this.dashSize=3,this.gapSize=1,this.setValues(e)}copy(e){return super.copy(e),this.scale=e.scale,this.dashSize=e.dashSize,this.gapSize=e.gapSize,this}}Cx.prototype.isLineDashedMaterial=!0;const $e={arraySlice:function(i,e,t){return $e.isTypedArray(i)?new i.constructor(i.subarray(e,t!==void 0?t:i.length)):i.slice(e,t)},convertArray:function(i,e,t){return!i||!t&&i.constructor===e?i:typeof e.BYTES_PER_ELEMENT=="number"?new e(i):Array.prototype.slice.call(i)},isTypedArray:function(i){return ArrayBuffer.isView(i)&&!(i instanceof DataView)},getKeyframeOrder:function(i){function e(r,s){return i[r]-i[s]}const t=i.length,n=new Array(t);for(let r=0;r!==t;++r)n[r]=r;return n.sort(e),n},sortedArray:function(i,e,t){const n=i.length,r=new i.constructor(n);for(let s=0,o=0;o!==n;++s){const a=t[s]*e;for(let l=0;l!==e;++l)r[o++]=i[a+l]}return r},flattenJSON:function(i,e,t,n){let r=1,s=i[0];for(;s!==void 0&&s[n]===void 0;)s=i[r++];if(s===void 0)return;let o=s[n];if(o!==void 0)if(Array.isArray(o))do o=s[n],o!==void 0&&(e.push(s.time),t.push.apply(t,o)),s=i[r++];while(s!==void 0);else if(o.toArray!==void 0)do o=s[n],o!==void 0&&(e.push(s.time),o.toArray(t,t.length)),s=i[r++];while(s!==void 0);else do o=s[n],o!==void 0&&(e.push(s.time),t.push(o)),s=i[r++];while(s!==void 0)},subclip:function(i,e,t,n,r=30){const s=i.clone();s.name=e;const o=[];for(let l=0;l<s.tracks.length;++l){const c=s.tracks[l],h=c.getValueSize(),u=[],f=[];for(let d=0;d<c.times.length;++d){const g=c.times[d]*r;if(!(g<t||g>=n)){u.push(c.times[d]);for(let _=0;_<h;++_)f.push(c.values[d*h+_])}}u.length!==0&&(c.times=$e.convertArray(u,c.times.constructor),c.values=$e.convertArray(f,c.values.constructor),o.push(c))}s.tracks=o;let a=1/0;for(let l=0;l<s.tracks.length;++l)a>s.tracks[l].times[0]&&(a=s.tracks[l].times[0]);for(let l=0;l<s.tracks.length;++l)s.tracks[l].shift(-1*a);return s.resetDuration(),s},makeClipAdditive:function(i,e=0,t=i,n=30){n<=0&&(n=30);const r=t.tracks.length,s=e/n;for(let o=0;o<r;++o){const a=t.tracks[o],l=a.ValueTypeName;if(l==="bool"||l==="string")continue;const c=i.tracks.find(function(p){return p.name===a.name&&p.ValueTypeName===l});if(c===void 0)continue;let h=0;const u=a.getValueSize();a.createInterpolant.isInterpolantFactoryMethodGLTFCubicSpline&&(h=u/3);let f=0;const d=c.getValueSize();c.createInterpolant.isInterpolantFactoryMethodGLTFCubicSpline&&(f=d/3);const g=a.times.length-1;let _;if(s<=a.times[0]){const p=h,m=u-h;_=$e.arraySlice(a.values,p,m)}else if(s>=a.times[g]){const p=g*u+h,m=p+u-h;_=$e.arraySlice(a.values,p,m)}else{const p=a.createInterpolant(),m=h,y=u-h;p.evaluate(s),_=$e.arraySlice(p.resultBuffer,m,y)}l==="quaternion"&&new _t().fromArray(_).normalize().conjugate().toArray(_);const v=c.times.length;for(let p=0;p<v;++p){const m=p*d+f;if(l==="quaternion")_t.multiplyQuaternionsFlat(c.values,m,_,0,c.values,m);else{const y=d-f*2;for(let x=0;x<y;++x)c.values[m+x]-=_[x]}}}return i.blendMode=Qu,i}};class Cn{constructor(e,t,n,r){this.parameterPositions=e,this._cachedIndex=0,this.resultBuffer=r!==void 0?r:new t.constructor(n),this.sampleValues=t,this.valueSize=n,this.settings=null,this.DefaultSettings_={}}evaluate(e){const t=this.parameterPositions;let n=this._cachedIndex,r=t[n],s=t[n-1];e:{t:{let o;n:{i:if(!(e<r)){for(let a=n+2;;){if(r===void 0){if(e<s)break i;return n=t.length,this._cachedIndex=n,this.afterEnd_(n-1,e,s)}if(n===a)break;if(s=r,r=t[++n],e<r)break t}o=t.length;break n}if(!(e>=s)){const a=t[1];e<a&&(n=2,s=a);for(let l=n-2;;){if(s===void 0)return this._cachedIndex=0,this.beforeStart_(0,e,r);if(n===l)break;if(r=s,s=t[--n-1],e>=s)break t}o=n,n=0;break n}break e}for(;n<o;){const a=n+o>>>1;e<t[a]?o=a:n=a+1}if(r=t[n],s=t[n-1],s===void 0)return this._cachedIndex=0,this.beforeStart_(0,e,r);if(r===void 0)return n=t.length,this._cachedIndex=n,this.afterEnd_(n-1,s,e)}this._cachedIndex=n,this.intervalChanged_(n,s,r)}return this.interpolate_(n,s,e,r)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(e){const t=this.resultBuffer,n=this.sampleValues,r=this.valueSize,s=e*r;for(let o=0;o!==r;++o)t[o]=n[s+o];return t}interpolate_(){throw new Error("call to abstract method")}intervalChanged_(){}}Cn.prototype.beforeStart_=Cn.prototype.copySampleValue_;Cn.prototype.afterEnd_=Cn.prototype.copySampleValue_;class Lx extends Cn{constructor(e,t,n,r){super(e,t,n,r),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:gi,endingEnd:gi}}intervalChanged_(e,t,n){const r=this.parameterPositions;let s=e-2,o=e+1,a=r[s],l=r[o];if(a===void 0)switch(this.getSettings_().endingStart){case _i:s=e,a=2*t-n;break;case ys:s=r.length-2,a=t+r[s]-r[s+1];break;default:s=e,a=n}if(l===void 0)switch(this.getSettings_().endingEnd){case _i:o=e,l=2*n-t;break;case ys:o=1,l=n+r[1]-r[0];break;default:o=e-1,l=t}const c=(n-t)*.5,h=this.valueSize;this._weightPrev=c/(t-a),this._weightNext=c/(l-n),this._offsetPrev=s*h,this._offsetNext=o*h}interpolate_(e,t,n,r){const s=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=e*a,c=l-a,h=this._offsetPrev,u=this._offsetNext,f=this._weightPrev,d=this._weightNext,g=(n-t)/(r-t),_=g*g,v=_*g,p=-f*v+2*f*_-f*g,m=(1+f)*v+(-1.5-2*f)*_+(-.5+f)*g+1,y=(-1-d)*v+(1.5+d)*_+.5*g,x=d*v-d*_;for(let M=0;M!==a;++M)s[M]=p*o[h+M]+m*o[c+M]+y*o[l+M]+x*o[u+M];return s}}class Nh extends Cn{constructor(e,t,n,r){super(e,t,n,r)}interpolate_(e,t,n,r){const s=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=e*a,c=l-a,h=(n-t)/(r-t),u=1-h;for(let f=0;f!==a;++f)s[f]=o[c+f]*u+o[l+f]*h;return s}}class Rx extends Cn{constructor(e,t,n,r){super(e,t,n,r)}interpolate_(e){return this.copySampleValue_(e-1)}}class tn{constructor(e,t,n,r){if(e===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(t===void 0||t.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+e);this.name=e,this.times=$e.convertArray(t,this.TimeBufferType),this.values=$e.convertArray(n,this.ValueBufferType),this.setInterpolation(r||this.DefaultInterpolation)}static toJSON(e){const t=e.constructor;let n;if(t.toJSON!==this.toJSON)n=t.toJSON(e);else{n={name:e.name,times:$e.convertArray(e.times,Array),values:$e.convertArray(e.values,Array)};const r=e.getInterpolation();r!==e.DefaultInterpolation&&(n.interpolation=r)}return n.type=e.ValueTypeName,n}InterpolantFactoryMethodDiscrete(e){return new Rx(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodLinear(e){return new Nh(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodSmooth(e){return new Lx(this.times,this.values,this.getValueSize(),e)}setInterpolation(e){let t;switch(e){case vs:t=this.InterpolantFactoryMethodDiscrete;break;case xs:t=this.InterpolantFactoryMethodLinear;break;case Ks:t=this.InterpolantFactoryMethodSmooth;break}if(t===void 0){const n="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(e!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(n);return console.warn("THREE.KeyframeTrack:",n),this}return this.createInterpolant=t,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return vs;case this.InterpolantFactoryMethodLinear:return xs;case this.InterpolantFactoryMethodSmooth:return Ks}}getValueSize(){return this.values.length/this.times.length}shift(e){if(e!==0){const t=this.times;for(let n=0,r=t.length;n!==r;++n)t[n]+=e}return this}scale(e){if(e!==1){const t=this.times;for(let n=0,r=t.length;n!==r;++n)t[n]*=e}return this}trim(e,t){const n=this.times,r=n.length;let s=0,o=r-1;for(;s!==r&&n[s]<e;)++s;for(;o!==-1&&n[o]>t;)--o;if(++o,s!==0||o!==r){s>=o&&(o=Math.max(o,1),s=o-1);const a=this.getValueSize();this.times=$e.arraySlice(n,s,o),this.values=$e.arraySlice(this.values,s*a,o*a)}return this}validate(){let e=!0;const t=this.getValueSize();t-Math.floor(t)!==0&&(console.error("THREE.KeyframeTrack: Invalid value size in track.",this),e=!1);const n=this.times,r=this.values,s=n.length;s===0&&(console.error("THREE.KeyframeTrack: Track is empty.",this),e=!1);let o=null;for(let a=0;a!==s;a++){const l=n[a];if(typeof l=="number"&&isNaN(l)){console.error("THREE.KeyframeTrack: Time is not a valid number.",this,a,l),e=!1;break}if(o!==null&&o>l){console.error("THREE.KeyframeTrack: Out of order keys.",this,a,l,o),e=!1;break}o=l}if(r!==void 0&&$e.isTypedArray(r))for(let a=0,l=r.length;a!==l;++a){const c=r[a];if(isNaN(c)){console.error("THREE.KeyframeTrack: Value is not a valid number.",this,a,c),e=!1;break}}return e}optimize(){const e=$e.arraySlice(this.times),t=$e.arraySlice(this.values),n=this.getValueSize(),r=this.getInterpolation()===Ks,s=e.length-1;let o=1;for(let a=1;a<s;++a){let l=!1;const c=e[a],h=e[a+1];if(c!==h&&(a!==1||c!==e[0]))if(r)l=!0;else{const u=a*n,f=u-n,d=u+n;for(let g=0;g!==n;++g){const _=t[u+g];if(_!==t[f+g]||_!==t[d+g]){l=!0;break}}}if(l){if(a!==o){e[o]=e[a];const u=a*n,f=o*n;for(let d=0;d!==n;++d)t[f+d]=t[u+d]}++o}}if(s>0){e[o]=e[s];for(let a=s*n,l=o*n,c=0;c!==n;++c)t[l+c]=t[a+c];++o}return o!==e.length?(this.times=$e.arraySlice(e,0,o),this.values=$e.arraySlice(t,0,o*n)):(this.times=e,this.values=t),this}clone(){const e=$e.arraySlice(this.times,0),t=$e.arraySlice(this.values,0),n=this.constructor,r=new n(this.name,e,t);return r.createInterpolant=this.createInterpolant,r}}tn.prototype.TimeBufferType=Float32Array;tn.prototype.ValueBufferType=Float32Array;tn.prototype.DefaultInterpolation=xs;class Ui extends tn{}Ui.prototype.ValueTypeName="bool";Ui.prototype.ValueBufferType=Array;Ui.prototype.DefaultInterpolation=vs;Ui.prototype.InterpolantFactoryMethodLinear=void 0;Ui.prototype.InterpolantFactoryMethodSmooth=void 0;class Fh extends tn{}Fh.prototype.ValueTypeName="color";class ws extends tn{}ws.prototype.ValueTypeName="number";class Px extends Cn{constructor(e,t,n,r){super(e,t,n,r)}interpolate_(e,t,n,r){const s=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=(n-t)/(r-t);let c=e*a;for(let h=c+a;c!==h;c+=4)_t.slerpFlat(s,0,o,c-a,o,c,l);return s}}class Er extends tn{InterpolantFactoryMethodLinear(e){return new Px(this.times,this.values,this.getValueSize(),e)}}Er.prototype.ValueTypeName="quaternion";Er.prototype.DefaultInterpolation=xs;Er.prototype.InterpolantFactoryMethodSmooth=void 0;class Hi extends tn{}Hi.prototype.ValueTypeName="string";Hi.prototype.ValueBufferType=Array;Hi.prototype.DefaultInterpolation=vs;Hi.prototype.InterpolantFactoryMethodLinear=void 0;Hi.prototype.InterpolantFactoryMethodSmooth=void 0;class Ss extends tn{}Ss.prototype.ValueTypeName="vector";class Jc{constructor(e,t=-1,n,r=Ea){this.name=e,this.tracks=n,this.duration=t,this.blendMode=r,this.uuid=Qt(),this.duration<0&&this.resetDuration()}static parse(e){const t=[],n=e.tracks,r=1/(e.fps||1);for(let o=0,a=n.length;o!==a;++o)t.push(Dx(n[o]).scale(r));const s=new this(e.name,e.duration,t,e.blendMode);return s.uuid=e.uuid,s}static toJSON(e){const t=[],n=e.tracks,r={name:e.name,duration:e.duration,tracks:t,uuid:e.uuid,blendMode:e.blendMode};for(let s=0,o=n.length;s!==o;++s)t.push(tn.toJSON(n[s]));return r}static CreateFromMorphTargetSequence(e,t,n,r){const s=t.length,o=[];for(let a=0;a<s;a++){let l=[],c=[];l.push((a+s-1)%s,a,(a+1)%s),c.push(0,1,0);const h=$e.getKeyframeOrder(l);l=$e.sortedArray(l,1,h),c=$e.sortedArray(c,1,h),!r&&l[0]===0&&(l.push(s),c.push(c[0])),o.push(new ws(".morphTargetInfluences["+t[a].name+"]",l,c).scale(1/n))}return new this(e,-1,o)}static findByName(e,t){let n=e;if(!Array.isArray(e)){const r=e;n=r.geometry&&r.geometry.animations||r.animations}for(let r=0;r<n.length;r++)if(n[r].name===t)return n[r];return null}static CreateClipsFromMorphTargetSequences(e,t,n){const r={},s=/^([\w-]*?)([\d]+)$/;for(let a=0,l=e.length;a<l;a++){const c=e[a],h=c.name.match(s);if(h&&h.length>1){const u=h[1];let f=r[u];f||(r[u]=f=[]),f.push(c)}}const o=[];for(const a in r)o.push(this.CreateFromMorphTargetSequence(a,r[a],t,n));return o}static parseAnimation(e,t){if(!e)return console.error("THREE.AnimationClip: No animation in JSONLoader data."),null;const n=function(u,f,d,g,_){if(d.length!==0){const v=[],p=[];$e.flattenJSON(d,v,p,g),v.length!==0&&_.push(new u(f,v,p))}},r=[],s=e.name||"default",o=e.fps||30,a=e.blendMode;let l=e.length||-1;const c=e.hierarchy||[];for(let u=0;u<c.length;u++){const f=c[u].keys;if(!(!f||f.length===0))if(f[0].morphTargets){const d={};let g;for(g=0;g<f.length;g++)if(f[g].morphTargets)for(let _=0;_<f[g].morphTargets.length;_++)d[f[g].morphTargets[_]]=-1;for(const _ in d){const v=[],p=[];for(let m=0;m!==f[g].morphTargets.length;++m){const y=f[g];v.push(y.time),p.push(y.morphTarget===_?1:0)}r.push(new ws(".morphTargetInfluence["+_+"]",v,p))}l=d.length*o}else{const d=".bones["+t[u].name+"]";n(Ss,d+".position",f,"pos",r),n(Er,d+".quaternion",f,"rot",r),n(Ss,d+".scale",f,"scl",r)}}return r.length===0?null:new this(s,l,r,a)}resetDuration(){const e=this.tracks;let t=0;for(let n=0,r=e.length;n!==r;++n){const s=this.tracks[n];t=Math.max(t,s.times[s.times.length-1])}return this.duration=t,this}trim(){for(let e=0;e<this.tracks.length;e++)this.tracks[e].trim(0,this.duration);return this}validate(){let e=!0;for(let t=0;t<this.tracks.length;t++)e=e&&this.tracks[t].validate();return e}optimize(){for(let e=0;e<this.tracks.length;e++)this.tracks[e].optimize();return this}clone(){const e=[];for(let t=0;t<this.tracks.length;t++)e.push(this.tracks[t].clone());return new this.constructor(this.name,this.duration,e,this.blendMode)}toJSON(){return this.constructor.toJSON(this)}}function Ix(i){switch(i.toLowerCase()){case"scalar":case"double":case"float":case"number":case"integer":return ws;case"vector":case"vector2":case"vector3":case"vector4":return Ss;case"color":return Fh;case"quaternion":return Er;case"bool":case"boolean":return Ui;case"string":return Hi}throw new Error("THREE.KeyframeTrack: Unsupported typeName: "+i)}function Dx(i){if(i.type===void 0)throw new Error("THREE.KeyframeTrack: track type undefined, can not parse");const e=Ix(i.type);if(i.times===void 0){const t=[],n=[];$e.flattenJSON(i.keys,t,n,"value"),i.times=t,i.values=n}return e.parse!==void 0?e.parse(i):new e(i.name,i.times,i.values,i.interpolation)}const Ri={enabled:!1,files:{},add:function(i,e){this.enabled!==!1&&(this.files[i]=e)},get:function(i){if(this.enabled!==!1)return this.files[i]},remove:function(i){delete this.files[i]},clear:function(){this.files={}}};class Nx{constructor(e,t,n){const r=this;let s=!1,o=0,a=0,l;const c=[];this.onStart=void 0,this.onLoad=e,this.onProgress=t,this.onError=n,this.itemStart=function(h){a++,s===!1&&r.onStart!==void 0&&r.onStart(h,o,a),s=!0},this.itemEnd=function(h){o++,r.onProgress!==void 0&&r.onProgress(h,o,a),o===a&&(s=!1,r.onLoad!==void 0&&r.onLoad())},this.itemError=function(h){r.onError!==void 0&&r.onError(h)},this.resolveURL=function(h){return l?l(h):h},this.setURLModifier=function(h){return l=h,this},this.addHandler=function(h,u){return c.push(h,u),this},this.removeHandler=function(h){const u=c.indexOf(h);return u!==-1&&c.splice(u,2),this},this.getHandler=function(h){for(let u=0,f=c.length;u<f;u+=2){const d=c[u],g=c[u+1];if(d.global&&(d.lastIndex=0),d.test(h))return g}return null}}}const Fx=new Nx;class Rn{constructor(e){this.manager=e!==void 0?e:Fx,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(e,t){const n=this;return new Promise(function(r,s){n.load(e,r,t,s)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}}const cn={};class zx extends Rn{constructor(e){super(e)}load(e,t,n,r){e===void 0&&(e=""),this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const s=Ri.get(e);if(s!==void 0)return this.manager.itemStart(e),setTimeout(()=>{t&&t(s),this.manager.itemEnd(e)},0),s;if(cn[e]!==void 0){cn[e].push({onLoad:t,onProgress:n,onError:r});return}cn[e]=[],cn[e].push({onLoad:t,onProgress:n,onError:r});const o=new Request(e,{headers:new Headers(this.requestHeader),credentials:this.withCredentials?"include":"same-origin"});fetch(o).then(a=>{if(a.status===200||a.status===0){if(a.status===0&&console.warn("THREE.FileLoader: HTTP Status 0 received."),typeof ReadableStream>"u"||a.body.getReader===void 0)return a;const l=cn[e],c=a.body.getReader(),h=a.headers.get("Content-Length"),u=h?parseInt(h):0,f=u!==0;let d=0;const g=new ReadableStream({start(_){v();function v(){c.read().then(({done:p,value:m})=>{if(p)_.close();else{d+=m.byteLength;const y=new ProgressEvent("progress",{lengthComputable:f,loaded:d,total:u});for(let x=0,M=l.length;x<M;x++){const R=l[x];R.onProgress&&R.onProgress(y)}_.enqueue(m),v()}})}}});return new Response(g)}else throw Error(`fetch for "${a.url}" responded with ${a.status}: ${a.statusText}`)}).then(a=>{switch(this.responseType){case"arraybuffer":return a.arrayBuffer();case"blob":return a.blob();case"document":return a.text().then(l=>new DOMParser().parseFromString(l,this.mimeType));case"json":return a.json();default:return a.text()}}).then(a=>{Ri.add(e,a);const l=cn[e];delete cn[e];for(let c=0,h=l.length;c<h;c++){const u=l[c];u.onLoad&&u.onLoad(a)}}).catch(a=>{const l=cn[e];if(l===void 0)throw this.manager.itemError(e),a;delete cn[e];for(let c=0,h=l.length;c<h;c++){const u=l[c];u.onError&&u.onError(a)}this.manager.itemError(e)}).finally(()=>{this.manager.itemEnd(e)}),this.manager.itemStart(e)}setResponseType(e){return this.responseType=e,this}setMimeType(e){return this.mimeType=e,this}}class zh extends Rn{constructor(e){super(e)}load(e,t,n,r){this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const s=this,o=Ri.get(e);if(o!==void 0)return s.manager.itemStart(e),setTimeout(function(){t&&t(o),s.manager.itemEnd(e)},0),o;const a=zs("img");function l(){h(),Ri.add(e,this),t&&t(this),s.manager.itemEnd(e)}function c(u){h(),r&&r(u),s.manager.itemError(e),s.manager.itemEnd(e)}function h(){a.removeEventListener("load",l,!1),a.removeEventListener("error",c,!1)}return a.addEventListener("load",l,!1),a.addEventListener("error",c,!1),e.substr(0,5)!=="data:"&&this.crossOrigin!==void 0&&(a.crossOrigin=this.crossOrigin),s.manager.itemStart(e),a.src=e,a}}class Bx extends Rn{constructor(e){super(e)}load(e,t,n,r){const s=new Bs,o=new zh(this.manager);o.setCrossOrigin(this.crossOrigin),o.setPath(this.path);let a=0;function l(c){o.load(e[c],function(h){s.images[c]=h,a++,a===6&&(s.needsUpdate=!0,t&&t(s))},void 0,r)}for(let c=0;c<e.length;++c)l(c);return s}}class Ox extends Rn{constructor(e){super(e)}load(e,t,n,r){const s=new ut,o=new zh(this.manager);return o.setCrossOrigin(this.crossOrigin),o.setPath(this.path),o.load(e,function(a){s.image=a,s.needsUpdate=!0,t!==void 0&&t(s)},n,r),s}}class en extends He{constructor(e,t=1){super(),this.type="Light",this.color=new ve(e),this.intensity=t}dispose(){}copy(e){return super.copy(e),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){const t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,this.groundColor!==void 0&&(t.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(t.object.distance=this.distance),this.angle!==void 0&&(t.object.angle=this.angle),this.decay!==void 0&&(t.object.decay=this.decay),this.penumbra!==void 0&&(t.object.penumbra=this.penumbra),this.shadow!==void 0&&(t.object.shadow=this.shadow.toJSON()),t}}en.prototype.isLight=!0;class Va extends en{constructor(e,t,n){super(e,n),this.type="HemisphereLight",this.position.copy(He.DefaultUp),this.updateMatrix(),this.groundColor=new ve(t)}copy(e){return en.prototype.copy.call(this,e),this.groundColor.copy(e.groundColor),this}}Va.prototype.isHemisphereLight=!0;const Qc=new Me,Kc=new C,eu=new C;class Wa{constructor(e){this.camera=e,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new Z(512,512),this.map=null,this.mapPass=null,this.matrix=new Me,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Os,this._frameExtents=new Z(1,1),this._viewportCount=1,this._viewports=[new qe(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){const t=this.camera,n=this.matrix;Kc.setFromMatrixPosition(e.matrixWorld),t.position.copy(Kc),eu.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(eu),t.updateMatrixWorld(),Qc.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Qc),n.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),n.multiply(t.projectionMatrix),n.multiply(t.matrixWorldInverse)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.bias=e.bias,this.radius=e.radius,this.mapSize.copy(e.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const e={};return this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}}class Bh extends Wa{constructor(){super(new mt(50,1,.5,500)),this.focus=1}updateMatrices(e){const t=this.camera,n=oa*2*e.angle*this.focus,r=this.mapSize.width/this.mapSize.height,s=e.distance||t.far;(n!==t.fov||r!==t.aspect||s!==t.far)&&(t.fov=n,t.aspect=r,t.far=s,t.updateProjectionMatrix()),super.updateMatrices(e)}copy(e){return super.copy(e),this.focus=e.focus,this}}Bh.prototype.isSpotLightShadow=!0;class kx extends en{constructor(e,t,n=0,r=Math.PI/3,s=0,o=1){super(e,t),this.type="SpotLight",this.position.copy(He.DefaultUp),this.updateMatrix(),this.target=new He,this.distance=n,this.angle=r,this.penumbra=s,this.decay=o,this.shadow=new Bh}get power(){return this.intensity*Math.PI}set power(e){this.intensity=e/Math.PI}dispose(){this.shadow.dispose()}copy(e){return super.copy(e),this.distance=e.distance,this.angle=e.angle,this.penumbra=e.penumbra,this.decay=e.decay,this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}}kx.prototype.isSpotLight=!0;const tu=new Me,Qi=new C,Fo=new C;class Oh extends Wa{constructor(){super(new mt(90,1,.5,500)),this._frameExtents=new Z(4,2),this._viewportCount=6,this._viewports=[new qe(2,1,1,1),new qe(0,1,1,1),new qe(3,1,1,1),new qe(1,1,1,1),new qe(3,0,1,1),new qe(1,0,1,1)],this._cubeDirections=[new C(1,0,0),new C(-1,0,0),new C(0,0,1),new C(0,0,-1),new C(0,1,0),new C(0,-1,0)],this._cubeUps=[new C(0,1,0),new C(0,1,0),new C(0,1,0),new C(0,1,0),new C(0,0,1),new C(0,0,-1)]}updateMatrices(e,t=0){const n=this.camera,r=this.matrix,s=e.distance||n.far;s!==n.far&&(n.far=s,n.updateProjectionMatrix()),Qi.setFromMatrixPosition(e.matrixWorld),n.position.copy(Qi),Fo.copy(n.position),Fo.add(this._cubeDirections[t]),n.up.copy(this._cubeUps[t]),n.lookAt(Fo),n.updateMatrixWorld(),r.makeTranslation(-Qi.x,-Qi.y,-Qi.z),tu.multiplyMatrices(n.projectionMatrix,n.matrixWorldInverse),this._frustum.setFromProjectionMatrix(tu)}}Oh.prototype.isPointLightShadow=!0;class Ux extends en{constructor(e,t,n=0,r=1){super(e,t),this.type="PointLight",this.distance=n,this.decay=r,this.shadow=new Oh}get power(){return this.intensity*4*Math.PI}set power(e){this.intensity=e/(4*Math.PI)}dispose(){this.shadow.dispose()}copy(e){return super.copy(e),this.distance=e.distance,this.decay=e.decay,this.shadow=e.shadow.clone(),this}}Ux.prototype.isPointLight=!0;class kh extends Wa{constructor(){super(new Pa(-5,5,5,-5,.5,500))}}kh.prototype.isDirectionalLightShadow=!0;class Hx extends en{constructor(e,t){super(e,t),this.type="DirectionalLight",this.position.copy(He.DefaultUp),this.updateMatrix(),this.target=new He,this.shadow=new kh}dispose(){this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}}Hx.prototype.isDirectionalLight=!0;class Uh extends en{constructor(e,t){super(e,t),this.type="AmbientLight"}}Uh.prototype.isAmbientLight=!0;class Gx extends en{constructor(e,t,n=10,r=10){super(e,t),this.type="RectAreaLight",this.width=n,this.height=r}get power(){return this.intensity*this.width*this.height*Math.PI}set power(e){this.intensity=e/(this.width*this.height*Math.PI)}copy(e){return super.copy(e),this.width=e.width,this.height=e.height,this}toJSON(e){const t=super.toJSON(e);return t.object.width=this.width,t.object.height=this.height,t}}Gx.prototype.isRectAreaLight=!0;class Hh{constructor(){this.coefficients=[];for(let e=0;e<9;e++)this.coefficients.push(new C)}set(e){for(let t=0;t<9;t++)this.coefficients[t].copy(e[t]);return this}zero(){for(let e=0;e<9;e++)this.coefficients[e].set(0,0,0);return this}getAt(e,t){const n=e.x,r=e.y,s=e.z,o=this.coefficients;return t.copy(o[0]).multiplyScalar(.282095),t.addScaledVector(o[1],.488603*r),t.addScaledVector(o[2],.488603*s),t.addScaledVector(o[3],.488603*n),t.addScaledVector(o[4],1.092548*(n*r)),t.addScaledVector(o[5],1.092548*(r*s)),t.addScaledVector(o[6],.315392*(3*s*s-1)),t.addScaledVector(o[7],1.092548*(n*s)),t.addScaledVector(o[8],.546274*(n*n-r*r)),t}getIrradianceAt(e,t){const n=e.x,r=e.y,s=e.z,o=this.coefficients;return t.copy(o[0]).multiplyScalar(.886227),t.addScaledVector(o[1],2*.511664*r),t.addScaledVector(o[2],2*.511664*s),t.addScaledVector(o[3],2*.511664*n),t.addScaledVector(o[4],2*.429043*n*r),t.addScaledVector(o[5],2*.429043*r*s),t.addScaledVector(o[6],.743125*s*s-.247708),t.addScaledVector(o[7],2*.429043*n*s),t.addScaledVector(o[8],.429043*(n*n-r*r)),t}add(e){for(let t=0;t<9;t++)this.coefficients[t].add(e.coefficients[t]);return this}addScaledSH(e,t){for(let n=0;n<9;n++)this.coefficients[n].addScaledVector(e.coefficients[n],t);return this}scale(e){for(let t=0;t<9;t++)this.coefficients[t].multiplyScalar(e);return this}lerp(e,t){for(let n=0;n<9;n++)this.coefficients[n].lerp(e.coefficients[n],t);return this}equals(e){for(let t=0;t<9;t++)if(!this.coefficients[t].equals(e.coefficients[t]))return!1;return!0}copy(e){return this.set(e.coefficients)}clone(){return new this.constructor().copy(this)}fromArray(e,t=0){const n=this.coefficients;for(let r=0;r<9;r++)n[r].fromArray(e,t+r*3);return this}toArray(e=[],t=0){const n=this.coefficients;for(let r=0;r<9;r++)n[r].toArray(e,t+r*3);return e}static getBasisAt(e,t){const n=e.x,r=e.y,s=e.z;t[0]=.282095,t[1]=.488603*r,t[2]=.488603*s,t[3]=.488603*n,t[4]=1.092548*n*r,t[5]=1.092548*r*s,t[6]=.315392*(3*s*s-1),t[7]=1.092548*n*s,t[8]=.546274*(n*n-r*r)}}Hh.prototype.isSphericalHarmonics3=!0;class qa extends en{constructor(e=new Hh,t=1){super(void 0,t),this.sh=e}copy(e){return super.copy(e),this.sh.copy(e.sh),this}fromJSON(e){return this.intensity=e.intensity,this.sh.fromArray(e.sh),this}toJSON(e){const t=super.toJSON(e);return t.object.sh=this.sh.toArray(),t}}qa.prototype.isLightProbe=!0;class Vx{static decodeText(e){if(typeof TextDecoder<"u")return new TextDecoder().decode(e);let t="";for(let n=0,r=e.length;n<r;n++)t+=String.fromCharCode(e[n]);try{return decodeURIComponent(escape(t))}catch{return t}}static extractUrlBase(e){const t=e.lastIndexOf("/");return t===-1?"./":e.substr(0,t+1)}static resolveURL(e,t){return typeof e!="string"||e===""?"":(/^https?:\/\//i.test(t)&&/^\//.test(e)&&(t=t.replace(/(^https?:\/\/[^\/]+).*/i,"$1")),/^(https?:)?\/\//i.test(e)||/^data:.*,.*$/i.test(e)||/^blob:.*$/i.test(e)?e:t+e)}}class Wx extends je{constructor(){super(),this.type="InstancedBufferGeometry",this.instanceCount=1/0}copy(e){return super.copy(e),this.instanceCount=e.instanceCount,this}clone(){return new this.constructor().copy(this)}toJSON(){const e=super.toJSON(this);return e.instanceCount=this.instanceCount,e.isInstancedBufferGeometry=!0,e}}Wx.prototype.isInstancedBufferGeometry=!0;class qx extends Rn{constructor(e){super(e),typeof createImageBitmap>"u"&&console.warn("THREE.ImageBitmapLoader: createImageBitmap() not supported."),typeof fetch>"u"&&console.warn("THREE.ImageBitmapLoader: fetch() not supported."),this.options={premultiplyAlpha:"none"}}setOptions(e){return this.options=e,this}load(e,t,n,r){e===void 0&&(e=""),this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const s=this,o=Ri.get(e);if(o!==void 0)return s.manager.itemStart(e),setTimeout(function(){t&&t(o),s.manager.itemEnd(e)},0),o;const a={};a.credentials=this.crossOrigin==="anonymous"?"same-origin":"include",a.headers=this.requestHeader,fetch(e,a).then(function(l){return l.blob()}).then(function(l){return createImageBitmap(l,Object.assign(s.options,{colorSpaceConversion:"none"}))}).then(function(l){Ri.add(e,l),t&&t(l),s.manager.itemEnd(e)}).catch(function(l){r&&r(l),s.manager.itemError(e),s.manager.itemEnd(e)}),s.manager.itemStart(e)}}qx.prototype.isImageBitmapLoader=!0;let ls;const Xx={getContext:function(){return ls===void 0&&(ls=new(window.AudioContext||window.webkitAudioContext)),ls},setContext:function(i){ls=i}};class Yx extends Rn{constructor(e){super(e)}load(e,t,n,r){const s=this,o=new zx(this.manager);o.setResponseType("arraybuffer"),o.setPath(this.path),o.setRequestHeader(this.requestHeader),o.setWithCredentials(this.withCredentials),o.load(e,function(a){try{const l=a.slice(0);Xx.getContext().decodeAudioData(l,function(h){t(h)})}catch(l){r?r(l):console.error(l),s.manager.itemError(e)}},n,r)}}class jx extends qa{constructor(e,t,n=1){super(void 0,n);const r=new ve().set(e),s=new ve().set(t),o=new C(r.r,r.g,r.b),a=new C(s.r,s.g,s.b),l=Math.sqrt(Math.PI),c=l*Math.sqrt(.75);this.sh.coefficients[0].copy(o).add(a).multiplyScalar(l),this.sh.coefficients[1].copy(o).sub(a).multiplyScalar(c)}}jx.prototype.isHemisphereLightProbe=!0;class $x extends qa{constructor(e,t=1){super(void 0,t);const n=new ve().set(e);this.sh.coefficients[0].set(n.r,n.g,n.b).multiplyScalar(2*Math.sqrt(Math.PI))}}$x.prototype.isAmbientLightProbe=!0;class Zx extends He{constructor(e){super(),this.type="Audio",this.listener=e,this.context=e.context,this.gain=this.context.createGain(),this.gain.connect(e.getInput()),this.autoplay=!1,this.buffer=null,this.detune=0,this.loop=!1,this.loopStart=0,this.loopEnd=0,this.offset=0,this.duration=void 0,this.playbackRate=1,this.isPlaying=!1,this.hasPlaybackControl=!0,this.source=null,this.sourceType="empty",this._startedAt=0,this._progress=0,this._connected=!1,this.filters=[]}getOutput(){return this.gain}setNodeSource(e){return this.hasPlaybackControl=!1,this.sourceType="audioNode",this.source=e,this.connect(),this}setMediaElementSource(e){return this.hasPlaybackControl=!1,this.sourceType="mediaNode",this.source=this.context.createMediaElementSource(e),this.connect(),this}setMediaStreamSource(e){return this.hasPlaybackControl=!1,this.sourceType="mediaStreamNode",this.source=this.context.createMediaStreamSource(e),this.connect(),this}setBuffer(e){return this.buffer=e,this.sourceType="buffer",this.autoplay&&this.play(),this}play(e=0){if(this.isPlaying===!0){console.warn("THREE.Audio: Audio is already playing.");return}if(this.hasPlaybackControl===!1){console.warn("THREE.Audio: this Audio has no playback control.");return}this._startedAt=this.context.currentTime+e;const t=this.context.createBufferSource();return t.buffer=this.buffer,t.loop=this.loop,t.loopStart=this.loopStart,t.loopEnd=this.loopEnd,t.onended=this.onEnded.bind(this),t.start(this._startedAt,this._progress+this.offset,this.duration),this.isPlaying=!0,this.source=t,this.setDetune(this.detune),this.setPlaybackRate(this.playbackRate),this.connect()}pause(){if(this.hasPlaybackControl===!1){console.warn("THREE.Audio: this Audio has no playback control.");return}return this.isPlaying===!0&&(this._progress+=Math.max(this.context.currentTime-this._startedAt,0)*this.playbackRate,this.loop===!0&&(this._progress=this._progress%(this.duration||this.buffer.duration)),this.source.stop(),this.source.onended=null,this.isPlaying=!1),this}stop(){if(this.hasPlaybackControl===!1){console.warn("THREE.Audio: this Audio has no playback control.");return}return this._progress=0,this.source.stop(),this.source.onended=null,this.isPlaying=!1,this}connect(){if(this.filters.length>0){this.source.connect(this.filters[0]);for(let e=1,t=this.filters.length;e<t;e++)this.filters[e-1].connect(this.filters[e]);this.filters[this.filters.length-1].connect(this.getOutput())}else this.source.connect(this.getOutput());return this._connected=!0,this}disconnect(){if(this.filters.length>0){this.source.disconnect(this.filters[0]);for(let e=1,t=this.filters.length;e<t;e++)this.filters[e-1].disconnect(this.filters[e]);this.filters[this.filters.length-1].disconnect(this.getOutput())}else this.source.disconnect(this.getOutput());return this._connected=!1,this}getFilters(){return this.filters}setFilters(e){return e||(e=[]),this._connected===!0?(this.disconnect(),this.filters=e.slice(),this.connect()):this.filters=e.slice(),this}setDetune(e){if(this.detune=e,this.source.detune!==void 0)return this.isPlaying===!0&&this.source.detune.setTargetAtTime(this.detune,this.context.currentTime,.01),this}getDetune(){return this.detune}getFilter(){return this.getFilters()[0]}setFilter(e){return this.setFilters(e?[e]:[])}setPlaybackRate(e){if(this.hasPlaybackControl===!1){console.warn("THREE.Audio: this Audio has no playback control.");return}return this.playbackRate=e,this.isPlaying===!0&&this.source.playbackRate.setTargetAtTime(this.playbackRate,this.context.currentTime,.01),this}getPlaybackRate(){return this.playbackRate}onEnded(){this.isPlaying=!1}getLoop(){return this.hasPlaybackControl===!1?(console.warn("THREE.Audio: this Audio has no playback control."),!1):this.loop}setLoop(e){if(this.hasPlaybackControl===!1){console.warn("THREE.Audio: this Audio has no playback control.");return}return this.loop=e,this.isPlaying===!0&&(this.source.loop=this.loop),this}setLoopStart(e){return this.loopStart=e,this}setLoopEnd(e){return this.loopEnd=e,this}getVolume(){return this.gain.gain.value}setVolume(e){return this.gain.gain.setTargetAtTime(e,this.context.currentTime,.01),this}}class Jx{constructor(e,t,n){this.binding=e,this.valueSize=n;let r,s,o;switch(t){case"quaternion":r=this._slerp,s=this._slerpAdditive,o=this._setAdditiveIdentityQuaternion,this.buffer=new Float64Array(n*6),this._workIndex=5;break;case"string":case"bool":r=this._select,s=this._select,o=this._setAdditiveIdentityOther,this.buffer=new Array(n*5);break;default:r=this._lerp,s=this._lerpAdditive,o=this._setAdditiveIdentityNumeric,this.buffer=new Float64Array(n*5)}this._mixBufferRegion=r,this._mixBufferRegionAdditive=s,this._setIdentity=o,this._origIndex=3,this._addIndex=4,this.cumulativeWeight=0,this.cumulativeWeightAdditive=0,this.useCount=0,this.referenceCount=0}accumulate(e,t){const n=this.buffer,r=this.valueSize,s=e*r+r;let o=this.cumulativeWeight;if(o===0){for(let a=0;a!==r;++a)n[s+a]=n[a];o=t}else{o+=t;const a=t/o;this._mixBufferRegion(n,s,0,a,r)}this.cumulativeWeight=o}accumulateAdditive(e){const t=this.buffer,n=this.valueSize,r=n*this._addIndex;this.cumulativeWeightAdditive===0&&this._setIdentity(),this._mixBufferRegionAdditive(t,r,0,e,n),this.cumulativeWeightAdditive+=e}apply(e){const t=this.valueSize,n=this.buffer,r=e*t+t,s=this.cumulativeWeight,o=this.cumulativeWeightAdditive,a=this.binding;if(this.cumulativeWeight=0,this.cumulativeWeightAdditive=0,s<1){const l=t*this._origIndex;this._mixBufferRegion(n,r,l,1-s,t)}o>0&&this._mixBufferRegionAdditive(n,r,this._addIndex*t,1,t);for(let l=t,c=t+t;l!==c;++l)if(n[l]!==n[l+t]){a.setValue(n,r);break}}saveOriginalState(){const e=this.binding,t=this.buffer,n=this.valueSize,r=n*this._origIndex;e.getValue(t,r);for(let s=n,o=r;s!==o;++s)t[s]=t[r+s%n];this._setIdentity(),this.cumulativeWeight=0,this.cumulativeWeightAdditive=0}restoreOriginalState(){const e=this.valueSize*3;this.binding.setValue(this.buffer,e)}_setAdditiveIdentityNumeric(){const e=this._addIndex*this.valueSize,t=e+this.valueSize;for(let n=e;n<t;n++)this.buffer[n]=0}_setAdditiveIdentityQuaternion(){this._setAdditiveIdentityNumeric(),this.buffer[this._addIndex*this.valueSize+3]=1}_setAdditiveIdentityOther(){const e=this._origIndex*this.valueSize,t=this._addIndex*this.valueSize;for(let n=0;n<this.valueSize;n++)this.buffer[t+n]=this.buffer[e+n]}_select(e,t,n,r,s){if(r>=.5)for(let o=0;o!==s;++o)e[t+o]=e[n+o]}_slerp(e,t,n,r){_t.slerpFlat(e,t,e,t,e,n,r)}_slerpAdditive(e,t,n,r,s){const o=this._workIndex*s;_t.multiplyQuaternionsFlat(e,o,e,t,e,n),_t.slerpFlat(e,t,e,t,e,o,r)}_lerp(e,t,n,r,s){const o=1-r;for(let a=0;a!==s;++a){const l=t+a;e[l]=e[l]*o+e[n+a]*r}}_lerpAdditive(e,t,n,r,s){for(let o=0;o!==s;++o){const a=t+o;e[a]=e[a]+e[n+o]*r}}}const Xa="\\[\\]\\.:\\/",Qx=new RegExp("["+Xa+"]","g"),Ya="[^"+Xa+"]",Kx="[^"+Xa.replace("\\.","")+"]",ey=/((?:WC+[\/:])*)/.source.replace("WC",Ya),ty=/(WCOD+)?/.source.replace("WCOD",Kx),ny=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",Ya),iy=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",Ya),ry=new RegExp("^"+ey+ty+ny+iy+"$"),sy=["material","materials","bones"];class oy{constructor(e,t,n){const r=n||Ue.parseTrackName(t);this._targetGroup=e,this._bindings=e.subscribe_(t,r)}getValue(e,t){this.bind();const n=this._targetGroup.nCachedObjects_,r=this._bindings[n];r!==void 0&&r.getValue(e,t)}setValue(e,t){const n=this._bindings;for(let r=this._targetGroup.nCachedObjects_,s=n.length;r!==s;++r)n[r].setValue(e,t)}bind(){const e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].bind()}unbind(){const e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].unbind()}}class Ue{constructor(e,t,n){this.path=t,this.parsedPath=n||Ue.parseTrackName(t),this.node=Ue.findNode(e,this.parsedPath.nodeName)||e,this.rootNode=e,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(e,t,n){return e&&e.isAnimationObjectGroup?new Ue.Composite(e,t,n):new Ue(e,t,n)}static sanitizeNodeName(e){return e.replace(/\s/g,"_").replace(Qx,"")}static parseTrackName(e){const t=ry.exec(e);if(!t)throw new Error("PropertyBinding: Cannot parse trackName: "+e);const n={nodeName:t[2],objectName:t[3],objectIndex:t[4],propertyName:t[5],propertyIndex:t[6]},r=n.nodeName&&n.nodeName.lastIndexOf(".");if(r!==void 0&&r!==-1){const s=n.nodeName.substring(r+1);sy.indexOf(s)!==-1&&(n.nodeName=n.nodeName.substring(0,r),n.objectName=s)}if(n.propertyName===null||n.propertyName.length===0)throw new Error("PropertyBinding: can not parse propertyName from trackName: "+e);return n}static findNode(e,t){if(!t||t===""||t==="."||t===-1||t===e.name||t===e.uuid)return e;if(e.skeleton){const n=e.skeleton.getBoneByName(t);if(n!==void 0)return n}if(e.children){const n=function(s){for(let o=0;o<s.length;o++){const a=s[o];if(a.name===t||a.uuid===t)return a;const l=n(a.children);if(l)return l}return null},r=n(e.children);if(r)return r}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(e,t){e[t]=this.targetObject[this.propertyName]}_getValue_array(e,t){const n=this.resolvedProperty;for(let r=0,s=n.length;r!==s;++r)e[t++]=n[r]}_getValue_arrayElement(e,t){e[t]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(e,t){this.resolvedProperty.toArray(e,t)}_setValue_direct(e,t){this.targetObject[this.propertyName]=e[t]}_setValue_direct_setNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(e,t){const n=this.resolvedProperty;for(let r=0,s=n.length;r!==s;++r)n[r]=e[t++]}_setValue_array_setNeedsUpdate(e,t){const n=this.resolvedProperty;for(let r=0,s=n.length;r!==s;++r)n[r]=e[t++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(e,t){const n=this.resolvedProperty;for(let r=0,s=n.length;r!==s;++r)n[r]=e[t++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(e,t){this.resolvedProperty[this.propertyIndex]=e[t]}_setValue_arrayElement_setNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(e,t){this.resolvedProperty.fromArray(e,t)}_setValue_fromArray_setNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(e,t){this.bind(),this.getValue(e,t)}_setValue_unbound(e,t){this.bind(),this.setValue(e,t)}bind(){let e=this.node;const t=this.parsedPath,n=t.objectName,r=t.propertyName;let s=t.propertyIndex;if(e||(e=Ue.findNode(this.rootNode,t.nodeName)||this.rootNode,this.node=e),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!e){console.error("THREE.PropertyBinding: Trying to update node for track: "+this.path+" but it wasn't found.");return}if(n){let c=t.objectIndex;switch(n){case"materials":if(!e.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.materials){console.error("THREE.PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}e=e.material.materials;break;case"bones":if(!e.skeleton){console.error("THREE.PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}e=e.skeleton.bones;for(let h=0;h<e.length;h++)if(e[h].name===c){c=h;break}break;default:if(e[n]===void 0){console.error("THREE.PropertyBinding: Can not bind to objectName of node undefined.",this);return}e=e[n]}if(c!==void 0){if(e[c]===void 0){console.error("THREE.PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,e);return}e=e[c]}}const o=e[r];if(o===void 0){const c=t.nodeName;console.error("THREE.PropertyBinding: Trying to update property for track: "+c+"."+r+" but it wasn't found.",e);return}let a=this.Versioning.None;this.targetObject=e,e.needsUpdate!==void 0?a=this.Versioning.NeedsUpdate:e.matrixWorldNeedsUpdate!==void 0&&(a=this.Versioning.MatrixWorldNeedsUpdate);let l=this.BindingType.Direct;if(s!==void 0){if(r==="morphTargetInfluences"){if(!e.geometry){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(e.geometry.isBufferGeometry){if(!e.geometry.morphAttributes){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}e.morphTargetDictionary[s]!==void 0&&(s=e.morphTargetDictionary[s])}else{console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences on THREE.Geometry. Use THREE.BufferGeometry instead.",this);return}}l=this.BindingType.ArrayElement,this.resolvedProperty=o,this.propertyIndex=s}else o.fromArray!==void 0&&o.toArray!==void 0?(l=this.BindingType.HasFromToArray,this.resolvedProperty=o):Array.isArray(o)?(l=this.BindingType.EntireArray,this.resolvedProperty=o):this.propertyName=r;this.getValue=this.GetterByBindingType[l],this.setValue=this.SetterByBindingTypeAndVersioning[l][a]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}}Ue.Composite=oy;Ue.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};Ue.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};Ue.prototype.GetterByBindingType=[Ue.prototype._getValue_direct,Ue.prototype._getValue_array,Ue.prototype._getValue_arrayElement,Ue.prototype._getValue_toArray];Ue.prototype.SetterByBindingTypeAndVersioning=[[Ue.prototype._setValue_direct,Ue.prototype._setValue_direct_setNeedsUpdate,Ue.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[Ue.prototype._setValue_array,Ue.prototype._setValue_array_setNeedsUpdate,Ue.prototype._setValue_array_setMatrixWorldNeedsUpdate],[Ue.prototype._setValue_arrayElement,Ue.prototype._setValue_arrayElement_setNeedsUpdate,Ue.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[Ue.prototype._setValue_fromArray,Ue.prototype._setValue_fromArray_setNeedsUpdate,Ue.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];class ay{constructor(e,t,n=null,r=t.blendMode){this._mixer=e,this._clip=t,this._localRoot=n,this.blendMode=r;const s=t.tracks,o=s.length,a=new Array(o),l={endingStart:gi,endingEnd:gi};for(let c=0;c!==o;++c){const h=s[c].createInterpolant(null);a[c]=h,h.settings=l}this._interpolantSettings=l,this._interpolants=a,this._propertyBindings=new Array(o),this._cacheIndex=null,this._byClipCacheIndex=null,this._timeScaleInterpolant=null,this._weightInterpolant=null,this.loop=Vp,this._loopCount=-1,this._startTime=null,this.time=0,this.timeScale=1,this._effectiveTimeScale=1,this.weight=1,this._effectiveWeight=1,this.repetitions=1/0,this.paused=!1,this.enabled=!0,this.clampWhenFinished=!1,this.zeroSlopeAtStart=!0,this.zeroSlopeAtEnd=!0}play(){return this._mixer._activateAction(this),this}stop(){return this._mixer._deactivateAction(this),this.reset()}reset(){return this.paused=!1,this.enabled=!0,this.time=0,this._loopCount=-1,this._startTime=null,this.stopFading().stopWarping()}isRunning(){return this.enabled&&!this.paused&&this.timeScale!==0&&this._startTime===null&&this._mixer._isActiveAction(this)}isScheduled(){return this._mixer._isActiveAction(this)}startAt(e){return this._startTime=e,this}setLoop(e,t){return this.loop=e,this.repetitions=t,this}setEffectiveWeight(e){return this.weight=e,this._effectiveWeight=this.enabled?e:0,this.stopFading()}getEffectiveWeight(){return this._effectiveWeight}fadeIn(e){return this._scheduleFading(e,0,1)}fadeOut(e){return this._scheduleFading(e,1,0)}crossFadeFrom(e,t,n){if(e.fadeOut(t),this.fadeIn(t),n){const r=this._clip.duration,s=e._clip.duration,o=s/r,a=r/s;e.warp(1,o,t),this.warp(a,1,t)}return this}crossFadeTo(e,t,n){return e.crossFadeFrom(this,t,n)}stopFading(){const e=this._weightInterpolant;return e!==null&&(this._weightInterpolant=null,this._mixer._takeBackControlInterpolant(e)),this}setEffectiveTimeScale(e){return this.timeScale=e,this._effectiveTimeScale=this.paused?0:e,this.stopWarping()}getEffectiveTimeScale(){return this._effectiveTimeScale}setDuration(e){return this.timeScale=this._clip.duration/e,this.stopWarping()}syncWith(e){return this.time=e.time,this.timeScale=e.timeScale,this.stopWarping()}halt(e){return this.warp(this._effectiveTimeScale,0,e)}warp(e,t,n){const r=this._mixer,s=r.time,o=this.timeScale;let a=this._timeScaleInterpolant;a===null&&(a=r._lendControlInterpolant(),this._timeScaleInterpolant=a);const l=a.parameterPositions,c=a.sampleValues;return l[0]=s,l[1]=s+n,c[0]=e/o,c[1]=t/o,this}stopWarping(){const e=this._timeScaleInterpolant;return e!==null&&(this._timeScaleInterpolant=null,this._mixer._takeBackControlInterpolant(e)),this}getMixer(){return this._mixer}getClip(){return this._clip}getRoot(){return this._localRoot||this._mixer._root}_update(e,t,n,r){if(!this.enabled){this._updateWeight(e);return}const s=this._startTime;if(s!==null){const l=(e-s)*n;if(l<0||n===0)return;this._startTime=null,t=n*l}t*=this._updateTimeScale(e);const o=this._updateTime(t),a=this._updateWeight(e);if(a>0){const l=this._interpolants,c=this._propertyBindings;switch(this.blendMode){case Qu:for(let h=0,u=l.length;h!==u;++h)l[h].evaluate(o),c[h].accumulateAdditive(a);break;case Ea:default:for(let h=0,u=l.length;h!==u;++h)l[h].evaluate(o),c[h].accumulate(r,a)}}}_updateWeight(e){let t=0;if(this.enabled){t=this.weight;const n=this._weightInterpolant;if(n!==null){const r=n.evaluate(e)[0];t*=r,e>n.parameterPositions[1]&&(this.stopFading(),r===0&&(this.enabled=!1))}}return this._effectiveWeight=t,t}_updateTimeScale(e){let t=0;if(!this.paused){t=this.timeScale;const n=this._timeScaleInterpolant;if(n!==null){const r=n.evaluate(e)[0];t*=r,e>n.parameterPositions[1]&&(this.stopWarping(),t===0?this.paused=!0:this.timeScale=t)}}return this._effectiveTimeScale=t,t}_updateTime(e){const t=this._clip.duration,n=this.loop;let r=this.time+e,s=this._loopCount;const o=n===Wp;if(e===0)return s===-1?r:o&&(s&1)===1?t-r:r;if(n===Gp){s===-1&&(this._loopCount=0,this._setEndings(!0,!0,!1));e:{if(r>=t)r=t;else if(r<0)r=0;else{this.time=r;break e}this.clampWhenFinished?this.paused=!0:this.enabled=!1,this.time=r,this._mixer.dispatchEvent({type:"finished",action:this,direction:e<0?-1:1})}}else{if(s===-1&&(e>=0?(s=0,this._setEndings(!0,this.repetitions===0,o)):this._setEndings(this.repetitions===0,!0,o)),r>=t||r<0){const a=Math.floor(r/t);r-=t*a,s+=Math.abs(a);const l=this.repetitions-s;if(l<=0)this.clampWhenFinished?this.paused=!0:this.enabled=!1,r=e>0?t:0,this.time=r,this._mixer.dispatchEvent({type:"finished",action:this,direction:e>0?1:-1});else{if(l===1){const c=e<0;this._setEndings(c,!c,o)}else this._setEndings(!1,!1,o);this._loopCount=s,this.time=r,this._mixer.dispatchEvent({type:"loop",action:this,loopDelta:a})}}else this.time=r;if(o&&(s&1)===1)return t-r}return r}_setEndings(e,t,n){const r=this._interpolantSettings;n?(r.endingStart=_i,r.endingEnd=_i):(e?r.endingStart=this.zeroSlopeAtStart?_i:gi:r.endingStart=ys,t?r.endingEnd=this.zeroSlopeAtEnd?_i:gi:r.endingEnd=ys)}_scheduleFading(e,t,n){const r=this._mixer,s=r.time;let o=this._weightInterpolant;o===null&&(o=r._lendControlInterpolant(),this._weightInterpolant=o);const a=o.parameterPositions,l=o.sampleValues;return a[0]=s,l[0]=t,a[1]=s+e,l[1]=n,this}}class ly extends Ln{constructor(e){super(),this._root=e,this._initMemoryManager(),this._accuIndex=0,this.time=0,this.timeScale=1}_bindAction(e,t){const n=e._localRoot||this._root,r=e._clip.tracks,s=r.length,o=e._propertyBindings,a=e._interpolants,l=n.uuid,c=this._bindingsByRootAndName;let h=c[l];h===void 0&&(h={},c[l]=h);for(let u=0;u!==s;++u){const f=r[u],d=f.name;let g=h[d];if(g!==void 0)o[u]=g;else{if(g=o[u],g!==void 0){g._cacheIndex===null&&(++g.referenceCount,this._addInactiveBinding(g,l,d));continue}const _=t&&t._propertyBindings[u].binding.parsedPath;g=new Jx(Ue.create(n,d,_),f.ValueTypeName,f.getValueSize()),++g.referenceCount,this._addInactiveBinding(g,l,d),o[u]=g}a[u].resultBuffer=g.buffer}}_activateAction(e){if(!this._isActiveAction(e)){if(e._cacheIndex===null){const n=(e._localRoot||this._root).uuid,r=e._clip.uuid,s=this._actionsByClip[r];this._bindAction(e,s&&s.knownActions[0]),this._addInactiveAction(e,r,n)}const t=e._propertyBindings;for(let n=0,r=t.length;n!==r;++n){const s=t[n];s.useCount++===0&&(this._lendBinding(s),s.saveOriginalState())}this._lendAction(e)}}_deactivateAction(e){if(this._isActiveAction(e)){const t=e._propertyBindings;for(let n=0,r=t.length;n!==r;++n){const s=t[n];--s.useCount===0&&(s.restoreOriginalState(),this._takeBackBinding(s))}this._takeBackAction(e)}}_initMemoryManager(){this._actions=[],this._nActiveActions=0,this._actionsByClip={},this._bindings=[],this._nActiveBindings=0,this._bindingsByRootAndName={},this._controlInterpolants=[],this._nActiveControlInterpolants=0;const e=this;this.stats={actions:{get total(){return e._actions.length},get inUse(){return e._nActiveActions}},bindings:{get total(){return e._bindings.length},get inUse(){return e._nActiveBindings}},controlInterpolants:{get total(){return e._controlInterpolants.length},get inUse(){return e._nActiveControlInterpolants}}}}_isActiveAction(e){const t=e._cacheIndex;return t!==null&&t<this._nActiveActions}_addInactiveAction(e,t,n){const r=this._actions,s=this._actionsByClip;let o=s[t];if(o===void 0)o={knownActions:[e],actionByRoot:{}},e._byClipCacheIndex=0,s[t]=o;else{const a=o.knownActions;e._byClipCacheIndex=a.length,a.push(e)}e._cacheIndex=r.length,r.push(e),o.actionByRoot[n]=e}_removeInactiveAction(e){const t=this._actions,n=t[t.length-1],r=e._cacheIndex;n._cacheIndex=r,t[r]=n,t.pop(),e._cacheIndex=null;const s=e._clip.uuid,o=this._actionsByClip,a=o[s],l=a.knownActions,c=l[l.length-1],h=e._byClipCacheIndex;c._byClipCacheIndex=h,l[h]=c,l.pop(),e._byClipCacheIndex=null;const u=a.actionByRoot,f=(e._localRoot||this._root).uuid;delete u[f],l.length===0&&delete o[s],this._removeInactiveBindingsForAction(e)}_removeInactiveBindingsForAction(e){const t=e._propertyBindings;for(let n=0,r=t.length;n!==r;++n){const s=t[n];--s.referenceCount===0&&this._removeInactiveBinding(s)}}_lendAction(e){const t=this._actions,n=e._cacheIndex,r=this._nActiveActions++,s=t[r];e._cacheIndex=r,t[r]=e,s._cacheIndex=n,t[n]=s}_takeBackAction(e){const t=this._actions,n=e._cacheIndex,r=--this._nActiveActions,s=t[r];e._cacheIndex=r,t[r]=e,s._cacheIndex=n,t[n]=s}_addInactiveBinding(e,t,n){const r=this._bindingsByRootAndName,s=this._bindings;let o=r[t];o===void 0&&(o={},r[t]=o),o[n]=e,e._cacheIndex=s.length,s.push(e)}_removeInactiveBinding(e){const t=this._bindings,n=e.binding,r=n.rootNode.uuid,s=n.path,o=this._bindingsByRootAndName,a=o[r],l=t[t.length-1],c=e._cacheIndex;l._cacheIndex=c,t[c]=l,t.pop(),delete a[s],Object.keys(a).length===0&&delete o[r]}_lendBinding(e){const t=this._bindings,n=e._cacheIndex,r=this._nActiveBindings++,s=t[r];e._cacheIndex=r,t[r]=e,s._cacheIndex=n,t[n]=s}_takeBackBinding(e){const t=this._bindings,n=e._cacheIndex,r=--this._nActiveBindings,s=t[r];e._cacheIndex=r,t[r]=e,s._cacheIndex=n,t[n]=s}_lendControlInterpolant(){const e=this._controlInterpolants,t=this._nActiveControlInterpolants++;let n=e[t];return n===void 0&&(n=new Nh(new Float32Array(2),new Float32Array(2),1,this._controlInterpolantsResultBuffer),n.__cacheIndex=t,e[t]=n),n}_takeBackControlInterpolant(e){const t=this._controlInterpolants,n=e.__cacheIndex,r=--this._nActiveControlInterpolants,s=t[r];e.__cacheIndex=r,t[r]=e,s.__cacheIndex=n,t[n]=s}clipAction(e,t,n){const r=t||this._root,s=r.uuid;let o=typeof e=="string"?Jc.findByName(r,e):e;const a=o!==null?o.uuid:e,l=this._actionsByClip[a];let c=null;if(n===void 0&&(o!==null?n=o.blendMode:n=Ea),l!==void 0){const u=l.actionByRoot[s];if(u!==void 0&&u.blendMode===n)return u;c=l.knownActions[0],o===null&&(o=c._clip)}if(o===null)return null;const h=new ay(this,o,t,n);return this._bindAction(h,c),this._addInactiveAction(h,a,s),h}existingAction(e,t){const n=t||this._root,r=n.uuid,s=typeof e=="string"?Jc.findByName(n,e):e,o=s?s.uuid:e,a=this._actionsByClip[o];return a!==void 0&&a.actionByRoot[r]||null}stopAllAction(){const e=this._actions,t=this._nActiveActions;for(let n=t-1;n>=0;--n)e[n].stop();return this}update(e){e*=this.timeScale;const t=this._actions,n=this._nActiveActions,r=this.time+=e,s=Math.sign(e),o=this._accuIndex^=1;for(let c=0;c!==n;++c)t[c]._update(r,e,s,o);const a=this._bindings,l=this._nActiveBindings;for(let c=0;c!==l;++c)a[c].apply(o);return this}setTime(e){this.time=0;for(let t=0;t<this._actions.length;t++)this._actions[t].time=0;return this.update(e)}getRoot(){return this._root}uncacheClip(e){const t=this._actions,n=e.uuid,r=this._actionsByClip,s=r[n];if(s!==void 0){const o=s.knownActions;for(let a=0,l=o.length;a!==l;++a){const c=o[a];this._deactivateAction(c);const h=c._cacheIndex,u=t[t.length-1];c._cacheIndex=null,c._byClipCacheIndex=null,u._cacheIndex=h,t[h]=u,t.pop(),this._removeInactiveBindingsForAction(c)}delete r[n]}}uncacheRoot(e){const t=e.uuid,n=this._actionsByClip;for(const o in n){const a=n[o].actionByRoot,l=a[t];l!==void 0&&(this._deactivateAction(l),this._removeInactiveAction(l))}const r=this._bindingsByRootAndName,s=r[t];if(s!==void 0)for(const o in s){const a=s[o];a.restoreOriginalState(),this._removeInactiveBinding(a)}}uncacheAction(e,t){const n=this.existingAction(e,t);n!==null&&(this._deactivateAction(n),this._removeInactiveAction(n))}}ly.prototype._controlInterpolantsResultBuffer=new Float32Array(1);class cy extends wr{constructor(e,t,n=1){super(e,t),this.meshPerAttribute=n}copy(e){return super.copy(e),this.meshPerAttribute=e.meshPerAttribute,this}clone(e){const t=super.clone(e);return t.meshPerAttribute=this.meshPerAttribute,t}toJSON(e){const t=super.toJSON(e);return t.isInstancedInterleavedBuffer=!0,t.meshPerAttribute=this.meshPerAttribute,t}}cy.prototype.isInstancedInterleavedBuffer=!0;class nu{constructor(e=1,t=0,n=0){return this.radius=e,this.phi=t,this.theta=n,this}set(e,t,n){return this.radius=e,this.phi=t,this.theta=n,this}copy(e){return this.radius=e.radius,this.phi=e.phi,this.theta=e.theta,this}makeSafe(){return this.phi=Math.max(1e-6,Math.min(Math.PI-1e-6,this.phi)),this}setFromVector3(e){return this.setFromCartesianCoords(e.x,e.y,e.z)}setFromCartesianCoords(e,t,n){return this.radius=Math.sqrt(e*e+t*t+n*n),this.radius===0?(this.theta=0,this.phi=0):(this.theta=Math.atan2(e,n),this.phi=Math.acos(wt(t/this.radius,-1,1))),this}clone(){return new this.constructor().copy(this)}}const yn=new C,cs=new Me,zo=new Me;class uy extends za{constructor(e){const t=Gh(e),n=new je,r=[],s=[],o=new ve(0,0,1),a=new ve(0,1,0);for(let c=0;c<t.length;c++){const h=t[c];h.parent&&h.parent.isBone&&(r.push(0,0,0),r.push(0,0,0),s.push(o.r,o.g,o.b),s.push(a.r,a.g,a.b))}n.setAttribute("position",new tt(r,3)),n.setAttribute("color",new tt(s,3));const l=new Sr({vertexColors:!0,depthTest:!1,depthWrite:!1,toneMapped:!1,transparent:!0});super(n,l),this.type="SkeletonHelper",this.isSkeletonHelper=!0,this.root=e,this.bones=t,this.matrix=e.matrixWorld,this.matrixAutoUpdate=!1}updateMatrixWorld(e){const t=this.bones,n=this.geometry,r=n.getAttribute("position");zo.copy(this.root.matrixWorld).invert();for(let s=0,o=0;s<t.length;s++){const a=t[s];a.parent&&a.parent.isBone&&(cs.multiplyMatrices(zo,a.matrixWorld),yn.setFromMatrixPosition(cs),r.setXYZ(o,yn.x,yn.y,yn.z),cs.multiplyMatrices(zo,a.parent.matrixWorld),yn.setFromMatrixPosition(cs),r.setXYZ(o+1,yn.x,yn.y,yn.z),o+=2)}n.getAttribute("position").needsUpdate=!0,super.updateMatrixWorld(e)}}function Gh(i){const e=[];i&&i.isBone&&e.push(i);for(let t=0;t<i.children.length;t++)e.push.apply(e,Gh(i.children[t]));return e}class hy extends za{constructor(e=10,t=10,n=4473924,r=8947848){n=new ve(n),r=new ve(r);const s=t/2,o=e/t,a=e/2,l=[],c=[];for(let f=0,d=0,g=-a;f<=t;f++,g+=o){l.push(-a,0,g,a,0,g),l.push(g,0,-a,g,0,a);const _=f===s?n:r;_.toArray(c,d),d+=3,_.toArray(c,d),d+=3,_.toArray(c,d),d+=3,_.toArray(c,d),d+=3}const h=new je;h.setAttribute("position",new tt(l,3)),h.setAttribute("color",new tt(c,3));const u=new Sr({vertexColors:!0,toneMapped:!1});super(h,u),this.type="GridHelper"}}const fy=new Float32Array(1);new Int32Array(fy.buffer);Dt.create=function(i,e){return console.log("THREE.Curve.create() has been deprecated"),i.prototype=Object.create(Dt.prototype),i.prototype.constructor=i,i.prototype.getPoint=e,i};ha.prototype.fromPoints=function(i){return console.warn("THREE.Path: .fromPoints() has been renamed to .setFromPoints()."),this.setFromPoints(i)};hy.prototype.setColors=function(){console.error("THREE.GridHelper: setColors() has been deprecated, pass them in the constructor instead.")};uy.prototype.update=function(){console.error("THREE.SkeletonHelper: update() no longer needs to be called.")};Rn.prototype.extractUrlBase=function(i){return console.warn("THREE.Loader: .extractUrlBase() has been deprecated. Use THREE.LoaderUtils.extractUrlBase() instead."),Vx.extractUrlBase(i)};Rn.Handlers={add:function(){console.error("THREE.Loader: Handlers.add() has been removed. Use LoadingManager.addHandler() instead.")},get:function(){console.error("THREE.Loader: Handlers.get() has been removed. Use LoadingManager.getHandler() instead.")}};Nt.prototype.center=function(i){return console.warn("THREE.Box3: .center() has been renamed to .getCenter()."),this.getCenter(i)};Nt.prototype.empty=function(){return console.warn("THREE.Box3: .empty() has been renamed to .isEmpty()."),this.isEmpty()};Nt.prototype.isIntersectionBox=function(i){return console.warn("THREE.Box3: .isIntersectionBox() has been renamed to .intersectsBox()."),this.intersectsBox(i)};Nt.prototype.isIntersectionSphere=function(i){return console.warn("THREE.Box3: .isIntersectionSphere() has been renamed to .intersectsSphere()."),this.intersectsSphere(i)};Nt.prototype.size=function(i){return console.warn("THREE.Box3: .size() has been renamed to .getSize()."),this.getSize(i)};Ni.prototype.empty=function(){return console.warn("THREE.Sphere: .empty() has been renamed to .isEmpty()."),this.isEmpty()};Os.prototype.setFromMatrix=function(i){return console.warn("THREE.Frustum: .setFromMatrix() has been renamed to .setFromProjectionMatrix()."),this.setFromProjectionMatrix(i)};ft.prototype.flattenToArrayOffset=function(i,e){return console.warn("THREE.Matrix3: .flattenToArrayOffset() has been deprecated. Use .toArray() instead."),this.toArray(i,e)};ft.prototype.multiplyVector3=function(i){return console.warn("THREE.Matrix3: .multiplyVector3() has been removed. Use vector.applyMatrix3( matrix ) instead."),i.applyMatrix3(this)};ft.prototype.multiplyVector3Array=function(){console.error("THREE.Matrix3: .multiplyVector3Array() has been removed.")};ft.prototype.applyToBufferAttribute=function(i){return console.warn("THREE.Matrix3: .applyToBufferAttribute() has been removed. Use attribute.applyMatrix3( matrix ) instead."),i.applyMatrix3(this)};ft.prototype.applyToVector3Array=function(){console.error("THREE.Matrix3: .applyToVector3Array() has been removed.")};ft.prototype.getInverse=function(i){return console.warn("THREE.Matrix3: .getInverse() has been removed. Use matrixInv.copy( matrix ).invert(); instead."),this.copy(i).invert()};Me.prototype.extractPosition=function(i){return console.warn("THREE.Matrix4: .extractPosition() has been renamed to .copyPosition()."),this.copyPosition(i)};Me.prototype.flattenToArrayOffset=function(i,e){return console.warn("THREE.Matrix4: .flattenToArrayOffset() has been deprecated. Use .toArray() instead."),this.toArray(i,e)};Me.prototype.getPosition=function(){return console.warn("THREE.Matrix4: .getPosition() has been removed. Use Vector3.setFromMatrixPosition( matrix ) instead."),new C().setFromMatrixColumn(this,3)};Me.prototype.setRotationFromQuaternion=function(i){return console.warn("THREE.Matrix4: .setRotationFromQuaternion() has been renamed to .makeRotationFromQuaternion()."),this.makeRotationFromQuaternion(i)};Me.prototype.multiplyToArray=function(){console.warn("THREE.Matrix4: .multiplyToArray() has been removed.")};Me.prototype.multiplyVector3=function(i){return console.warn("THREE.Matrix4: .multiplyVector3() has been removed. Use vector.applyMatrix4( matrix ) instead."),i.applyMatrix4(this)};Me.prototype.multiplyVector4=function(i){return console.warn("THREE.Matrix4: .multiplyVector4() has been removed. Use vector.applyMatrix4( matrix ) instead."),i.applyMatrix4(this)};Me.prototype.multiplyVector3Array=function(){console.error("THREE.Matrix4: .multiplyVector3Array() has been removed.")};Me.prototype.rotateAxis=function(i){console.warn("THREE.Matrix4: .rotateAxis() has been removed. Use Vector3.transformDirection( matrix ) instead."),i.transformDirection(this)};Me.prototype.crossVector=function(i){return console.warn("THREE.Matrix4: .crossVector() has been removed. Use vector.applyMatrix4( matrix ) instead."),i.applyMatrix4(this)};Me.prototype.translate=function(){console.error("THREE.Matrix4: .translate() has been removed.")};Me.prototype.rotateX=function(){console.error("THREE.Matrix4: .rotateX() has been removed.")};Me.prototype.rotateY=function(){console.error("THREE.Matrix4: .rotateY() has been removed.")};Me.prototype.rotateZ=function(){console.error("THREE.Matrix4: .rotateZ() has been removed.")};Me.prototype.rotateByAxis=function(){console.error("THREE.Matrix4: .rotateByAxis() has been removed.")};Me.prototype.applyToBufferAttribute=function(i){return console.warn("THREE.Matrix4: .applyToBufferAttribute() has been removed. Use attribute.applyMatrix4( matrix ) instead."),i.applyMatrix4(this)};Me.prototype.applyToVector3Array=function(){console.error("THREE.Matrix4: .applyToVector3Array() has been removed.")};Me.prototype.makeFrustum=function(i,e,t,n,r,s){return console.warn("THREE.Matrix4: .makeFrustum() has been removed. Use .makePerspective( left, right, top, bottom, near, far ) instead."),this.makePerspective(i,e,n,t,r,s)};Me.prototype.getInverse=function(i){return console.warn("THREE.Matrix4: .getInverse() has been removed. Use matrixInv.copy( matrix ).invert(); instead."),this.copy(i).invert()};un.prototype.isIntersectionLine=function(i){return console.warn("THREE.Plane: .isIntersectionLine() has been renamed to .intersectsLine()."),this.intersectsLine(i)};_t.prototype.multiplyVector3=function(i){return console.warn("THREE.Quaternion: .multiplyVector3() has been removed. Use is now vector.applyQuaternion( quaternion ) instead."),i.applyQuaternion(this)};_t.prototype.inverse=function(){return console.warn("THREE.Quaternion: .inverse() has been renamed to invert()."),this.invert()};Fi.prototype.isIntersectionBox=function(i){return console.warn("THREE.Ray: .isIntersectionBox() has been renamed to .intersectsBox()."),this.intersectsBox(i)};Fi.prototype.isIntersectionPlane=function(i){return console.warn("THREE.Ray: .isIntersectionPlane() has been renamed to .intersectsPlane()."),this.intersectsPlane(i)};Fi.prototype.isIntersectionSphere=function(i){return console.warn("THREE.Ray: .isIntersectionSphere() has been renamed to .intersectsSphere()."),this.intersectsSphere(i)};ot.prototype.area=function(){return console.warn("THREE.Triangle: .area() has been renamed to .getArea()."),this.getArea()};ot.prototype.barycoordFromPoint=function(i,e){return console.warn("THREE.Triangle: .barycoordFromPoint() has been renamed to .getBarycoord()."),this.getBarycoord(i,e)};ot.prototype.midpoint=function(i){return console.warn("THREE.Triangle: .midpoint() has been renamed to .getMidpoint()."),this.getMidpoint(i)};ot.prototypenormal=function(i){return console.warn("THREE.Triangle: .normal() has been renamed to .getNormal()."),this.getNormal(i)};ot.prototype.plane=function(i){return console.warn("THREE.Triangle: .plane() has been renamed to .getPlane()."),this.getPlane(i)};ot.barycoordFromPoint=function(i,e,t,n,r){return console.warn("THREE.Triangle: .barycoordFromPoint() has been renamed to .getBarycoord()."),ot.getBarycoord(i,e,t,n,r)};ot.normal=function(i,e,t,n){return console.warn("THREE.Triangle: .normal() has been renamed to .getNormal()."),ot.getNormal(i,e,t,n)};Tr.prototype.extractAllPoints=function(i){return console.warn("THREE.Shape: .extractAllPoints() has been removed. Use .extractPoints() instead."),this.extractPoints(i)};Tr.prototype.extrude=function(i){return console.warn("THREE.Shape: .extrude() has been removed. Use ExtrudeGeometry() instead."),new ki(this,i)};Tr.prototype.makeGeometry=function(i){return console.warn("THREE.Shape: .makeGeometry() has been removed. Use ShapeGeometry() instead."),new Ga(this,i)};Z.prototype.fromAttribute=function(i,e,t){return console.warn("THREE.Vector2: .fromAttribute() has been renamed to .fromBufferAttribute()."),this.fromBufferAttribute(i,e,t)};Z.prototype.distanceToManhattan=function(i){return console.warn("THREE.Vector2: .distanceToManhattan() has been renamed to .manhattanDistanceTo()."),this.manhattanDistanceTo(i)};Z.prototype.lengthManhattan=function(){return console.warn("THREE.Vector2: .lengthManhattan() has been renamed to .manhattanLength()."),this.manhattanLength()};C.prototype.setEulerFromRotationMatrix=function(){console.error("THREE.Vector3: .setEulerFromRotationMatrix() has been removed. Use Euler.setFromRotationMatrix() instead.")};C.prototype.setEulerFromQuaternion=function(){console.error("THREE.Vector3: .setEulerFromQuaternion() has been removed. Use Euler.setFromQuaternion() instead.")};C.prototype.getPositionFromMatrix=function(i){return console.warn("THREE.Vector3: .getPositionFromMatrix() has been renamed to .setFromMatrixPosition()."),this.setFromMatrixPosition(i)};C.prototype.getScaleFromMatrix=function(i){return console.warn("THREE.Vector3: .getScaleFromMatrix() has been renamed to .setFromMatrixScale()."),this.setFromMatrixScale(i)};C.prototype.getColumnFromMatrix=function(i,e){return console.warn("THREE.Vector3: .getColumnFromMatrix() has been renamed to .setFromMatrixColumn()."),this.setFromMatrixColumn(e,i)};C.prototype.applyProjection=function(i){return console.warn("THREE.Vector3: .applyProjection() has been removed. Use .applyMatrix4( m ) instead."),this.applyMatrix4(i)};C.prototype.fromAttribute=function(i,e,t){return console.warn("THREE.Vector3: .fromAttribute() has been renamed to .fromBufferAttribute()."),this.fromBufferAttribute(i,e,t)};C.prototype.distanceToManhattan=function(i){return console.warn("THREE.Vector3: .distanceToManhattan() has been renamed to .manhattanDistanceTo()."),this.manhattanDistanceTo(i)};C.prototype.lengthManhattan=function(){return console.warn("THREE.Vector3: .lengthManhattan() has been renamed to .manhattanLength()."),this.manhattanLength()};qe.prototype.fromAttribute=function(i,e,t){return console.warn("THREE.Vector4: .fromAttribute() has been renamed to .fromBufferAttribute()."),this.fromBufferAttribute(i,e,t)};qe.prototype.lengthManhattan=function(){return console.warn("THREE.Vector4: .lengthManhattan() has been renamed to .manhattanLength()."),this.manhattanLength()};He.prototype.getChildByName=function(i){return console.warn("THREE.Object3D: .getChildByName() has been renamed to .getObjectByName()."),this.getObjectByName(i)};He.prototype.renderDepth=function(){console.warn("THREE.Object3D: .renderDepth has been removed. Use .renderOrder, instead.")};He.prototype.translate=function(i,e){return console.warn("THREE.Object3D: .translate() has been removed. Use .translateOnAxis( axis, distance ) instead."),this.translateOnAxis(e,i)};He.prototype.getWorldRotation=function(){console.error("THREE.Object3D: .getWorldRotation() has been removed. Use THREE.Object3D.getWorldQuaternion( target ) instead.")};He.prototype.applyMatrix=function(i){return console.warn("THREE.Object3D: .applyMatrix() has been renamed to .applyMatrix4()."),this.applyMatrix4(i)};Object.defineProperties(He.prototype,{eulerOrder:{get:function(){return console.warn("THREE.Object3D: .eulerOrder is now .rotation.order."),this.rotation.order},set:function(i){console.warn("THREE.Object3D: .eulerOrder is now .rotation.order."),this.rotation.order=i}},useQuaternion:{get:function(){console.warn("THREE.Object3D: .useQuaternion has been removed. The library now uses quaternions by default.")},set:function(){console.warn("THREE.Object3D: .useQuaternion has been removed. The library now uses quaternions by default.")}}});gt.prototype.setDrawMode=function(){console.error("THREE.Mesh: .setDrawMode() has been removed. The renderer now always assumes THREE.TrianglesDrawMode. Transform your geometry via BufferGeometryUtils.toTrianglesDrawMode() if necessary.")};Object.defineProperties(gt.prototype,{drawMode:{get:function(){return console.error("THREE.Mesh: .drawMode has been removed. The renderer now always assumes THREE.TrianglesDrawMode."),qp},set:function(){console.error("THREE.Mesh: .drawMode has been removed. The renderer now always assumes THREE.TrianglesDrawMode. Transform your geometry via BufferGeometryUtils.toTrianglesDrawMode() if necessary.")}}});wh.prototype.initBones=function(){console.error("THREE.SkinnedMesh: initBones() has been removed.")};mt.prototype.setLens=function(i,e){console.warn("THREE.PerspectiveCamera.setLens is deprecated. Use .setFocalLength and .filmGauge for a photographic setup."),e!==void 0&&(this.filmGauge=e),this.setFocalLength(i)};Object.defineProperties(en.prototype,{onlyShadow:{set:function(){console.warn("THREE.Light: .onlyShadow has been removed.")}},shadowCameraFov:{set:function(i){console.warn("THREE.Light: .shadowCameraFov is now .shadow.camera.fov."),this.shadow.camera.fov=i}},shadowCameraLeft:{set:function(i){console.warn("THREE.Light: .shadowCameraLeft is now .shadow.camera.left."),this.shadow.camera.left=i}},shadowCameraRight:{set:function(i){console.warn("THREE.Light: .shadowCameraRight is now .shadow.camera.right."),this.shadow.camera.right=i}},shadowCameraTop:{set:function(i){console.warn("THREE.Light: .shadowCameraTop is now .shadow.camera.top."),this.shadow.camera.top=i}},shadowCameraBottom:{set:function(i){console.warn("THREE.Light: .shadowCameraBottom is now .shadow.camera.bottom."),this.shadow.camera.bottom=i}},shadowCameraNear:{set:function(i){console.warn("THREE.Light: .shadowCameraNear is now .shadow.camera.near."),this.shadow.camera.near=i}},shadowCameraFar:{set:function(i){console.warn("THREE.Light: .shadowCameraFar is now .shadow.camera.far."),this.shadow.camera.far=i}},shadowCameraVisible:{set:function(){console.warn("THREE.Light: .shadowCameraVisible has been removed. Use new THREE.CameraHelper( light.shadow.camera ) instead.")}},shadowBias:{set:function(i){console.warn("THREE.Light: .shadowBias is now .shadow.bias."),this.shadow.bias=i}},shadowDarkness:{set:function(){console.warn("THREE.Light: .shadowDarkness has been removed.")}},shadowMapWidth:{set:function(i){console.warn("THREE.Light: .shadowMapWidth is now .shadow.mapSize.width."),this.shadow.mapSize.width=i}},shadowMapHeight:{set:function(i){console.warn("THREE.Light: .shadowMapHeight is now .shadow.mapSize.height."),this.shadow.mapSize.height=i}}});Object.defineProperties(at.prototype,{length:{get:function(){return console.warn("THREE.BufferAttribute: .length has been deprecated. Use .count instead."),this.array.length}},dynamic:{get:function(){return console.warn("THREE.BufferAttribute: .dynamic has been deprecated. Use .usage instead."),this.usage===Ms},set:function(){console.warn("THREE.BufferAttribute: .dynamic has been deprecated. Use .usage instead."),this.setUsage(Ms)}}});at.prototype.setDynamic=function(i){return console.warn("THREE.BufferAttribute: .setDynamic() has been deprecated. Use .setUsage() instead."),this.setUsage(i===!0?Ms:dr),this};at.prototype.copyIndicesArray=function(){console.error("THREE.BufferAttribute: .copyIndicesArray() has been removed.")},at.prototype.setArray=function(){console.error("THREE.BufferAttribute: .setArray has been removed. Use BufferGeometry .setAttribute to replace/resize attribute buffers")};je.prototype.addIndex=function(i){console.warn("THREE.BufferGeometry: .addIndex() has been renamed to .setIndex()."),this.setIndex(i)};je.prototype.addAttribute=function(i,e){return console.warn("THREE.BufferGeometry: .addAttribute() has been renamed to .setAttribute()."),!(e&&e.isBufferAttribute)&&!(e&&e.isInterleavedBufferAttribute)?(console.warn("THREE.BufferGeometry: .addAttribute() now expects ( name, attribute )."),this.setAttribute(i,new at(arguments[1],arguments[2]))):i==="index"?(console.warn("THREE.BufferGeometry.addAttribute: Use .setIndex() for index attribute."),this.setIndex(e),this):this.setAttribute(i,e)};je.prototype.addDrawCall=function(i,e,t){t!==void 0&&console.warn("THREE.BufferGeometry: .addDrawCall() no longer supports indexOffset."),console.warn("THREE.BufferGeometry: .addDrawCall() is now .addGroup()."),this.addGroup(i,e)};je.prototype.clearDrawCalls=function(){console.warn("THREE.BufferGeometry: .clearDrawCalls() is now .clearGroups()."),this.clearGroups()};je.prototype.computeOffsets=function(){console.warn("THREE.BufferGeometry: .computeOffsets() has been removed.")};je.prototype.removeAttribute=function(i){return console.warn("THREE.BufferGeometry: .removeAttribute() has been renamed to .deleteAttribute()."),this.deleteAttribute(i)};je.prototype.applyMatrix=function(i){return console.warn("THREE.BufferGeometry: .applyMatrix() has been renamed to .applyMatrix4()."),this.applyMatrix4(i)};Object.defineProperties(je.prototype,{drawcalls:{get:function(){return console.error("THREE.BufferGeometry: .drawcalls has been renamed to .groups."),this.groups}},offsets:{get:function(){return console.warn("THREE.BufferGeometry: .offsets has been renamed to .groups."),this.groups}}});wr.prototype.setDynamic=function(i){return console.warn("THREE.InterleavedBuffer: .setDynamic() has been deprecated. Use .setUsage() instead."),this.setUsage(i===!0?Ms:dr),this};wr.prototype.setArray=function(){console.error("THREE.InterleavedBuffer: .setArray has been removed. Use BufferGeometry .setAttribute to replace/resize attribute buffers")};ki.prototype.getArrays=function(){console.error("THREE.ExtrudeGeometry: .getArrays() has been removed.")};ki.prototype.addShapeList=function(){console.error("THREE.ExtrudeGeometry: .addShapeList() has been removed.")};ki.prototype.addShape=function(){console.error("THREE.ExtrudeGeometry: .addShape() has been removed.")};Hs.prototype.dispose=function(){console.error("THREE.Scene: .dispose() has been removed.")};Object.defineProperties(yt.prototype,{wrapAround:{get:function(){console.warn("THREE.Material: .wrapAround has been removed.")},set:function(){console.warn("THREE.Material: .wrapAround has been removed.")}},overdraw:{get:function(){console.warn("THREE.Material: .overdraw has been removed.")},set:function(){console.warn("THREE.Material: .overdraw has been removed.")}},wrapRGB:{get:function(){return console.warn("THREE.Material: .wrapRGB has been removed."),new ve}},shading:{get:function(){console.error("THREE."+this.type+": .shading has been removed. Use the boolean .flatShading instead.")},set:function(i){console.warn("THREE."+this.type+": .shading has been removed. Use the boolean .flatShading instead."),this.flatShading=i===ju}},stencilMask:{get:function(){return console.warn("THREE."+this.type+": .stencilMask has been removed. Use .stencilFuncMask instead."),this.stencilFuncMask},set:function(i){console.warn("THREE."+this.type+": .stencilMask has been removed. Use .stencilFuncMask instead."),this.stencilFuncMask=i}},vertexTangents:{get:function(){console.warn("THREE."+this.type+": .vertexTangents has been removed.")},set:function(){console.warn("THREE."+this.type+": .vertexTangents has been removed.")}}});Object.defineProperties(Xn.prototype,{derivatives:{get:function(){return console.warn("THREE.ShaderMaterial: .derivatives has been moved to .extensions.derivatives."),this.extensions.derivatives},set:function(i){console.warn("THREE. ShaderMaterial: .derivatives has been moved to .extensions.derivatives."),this.extensions.derivatives=i}}});Ge.prototype.clearTarget=function(i,e,t,n){console.warn("THREE.WebGLRenderer: .clearTarget() has been deprecated. Use .setRenderTarget() and .clear() instead."),this.setRenderTarget(i),this.clear(e,t,n)};Ge.prototype.animate=function(i){console.warn("THREE.WebGLRenderer: .animate() is now .setAnimationLoop()."),this.setAnimationLoop(i)};Ge.prototype.getCurrentRenderTarget=function(){return console.warn("THREE.WebGLRenderer: .getCurrentRenderTarget() is now .getRenderTarget()."),this.getRenderTarget()};Ge.prototype.getMaxAnisotropy=function(){return console.warn("THREE.WebGLRenderer: .getMaxAnisotropy() is now .capabilities.getMaxAnisotropy()."),this.capabilities.getMaxAnisotropy()};Ge.prototype.getPrecision=function(){return console.warn("THREE.WebGLRenderer: .getPrecision() is now .capabilities.precision."),this.capabilities.precision};Ge.prototype.resetGLState=function(){return console.warn("THREE.WebGLRenderer: .resetGLState() is now .state.reset()."),this.state.reset()};Ge.prototype.supportsFloatTextures=function(){return console.warn("THREE.WebGLRenderer: .supportsFloatTextures() is now .extensions.get( 'OES_texture_float' )."),this.extensions.get("OES_texture_float")};Ge.prototype.supportsHalfFloatTextures=function(){return console.warn("THREE.WebGLRenderer: .supportsHalfFloatTextures() is now .extensions.get( 'OES_texture_half_float' )."),this.extensions.get("OES_texture_half_float")};Ge.prototype.supportsStandardDerivatives=function(){return console.warn("THREE.WebGLRenderer: .supportsStandardDerivatives() is now .extensions.get( 'OES_standard_derivatives' )."),this.extensions.get("OES_standard_derivatives")};Ge.prototype.supportsCompressedTextureS3TC=function(){return console.warn("THREE.WebGLRenderer: .supportsCompressedTextureS3TC() is now .extensions.get( 'WEBGL_compressed_texture_s3tc' )."),this.extensions.get("WEBGL_compressed_texture_s3tc")};Ge.prototype.supportsCompressedTexturePVRTC=function(){return console.warn("THREE.WebGLRenderer: .supportsCompressedTexturePVRTC() is now .extensions.get( 'WEBGL_compressed_texture_pvrtc' )."),this.extensions.get("WEBGL_compressed_texture_pvrtc")};Ge.prototype.supportsBlendMinMax=function(){return console.warn("THREE.WebGLRenderer: .supportsBlendMinMax() is now .extensions.get( 'EXT_blend_minmax' )."),this.extensions.get("EXT_blend_minmax")};Ge.prototype.supportsVertexTextures=function(){return console.warn("THREE.WebGLRenderer: .supportsVertexTextures() is now .capabilities.vertexTextures."),this.capabilities.vertexTextures};Ge.prototype.supportsInstancedArrays=function(){return console.warn("THREE.WebGLRenderer: .supportsInstancedArrays() is now .extensions.get( 'ANGLE_instanced_arrays' )."),this.extensions.get("ANGLE_instanced_arrays")};Ge.prototype.enableScissorTest=function(i){console.warn("THREE.WebGLRenderer: .enableScissorTest() is now .setScissorTest()."),this.setScissorTest(i)};Ge.prototype.initMaterial=function(){console.warn("THREE.WebGLRenderer: .initMaterial() has been removed.")};Ge.prototype.addPrePlugin=function(){console.warn("THREE.WebGLRenderer: .addPrePlugin() has been removed.")};Ge.prototype.addPostPlugin=function(){console.warn("THREE.WebGLRenderer: .addPostPlugin() has been removed.")};Ge.prototype.updateShadowMap=function(){console.warn("THREE.WebGLRenderer: .updateShadowMap() has been removed.")};Ge.prototype.setFaceCulling=function(){console.warn("THREE.WebGLRenderer: .setFaceCulling() has been removed.")};Ge.prototype.allocTextureUnit=function(){console.warn("THREE.WebGLRenderer: .allocTextureUnit() has been removed.")};Ge.prototype.setTexture=function(){console.warn("THREE.WebGLRenderer: .setTexture() has been removed.")};Ge.prototype.setTexture2D=function(){console.warn("THREE.WebGLRenderer: .setTexture2D() has been removed.")};Ge.prototype.setTextureCube=function(){console.warn("THREE.WebGLRenderer: .setTextureCube() has been removed.")};Ge.prototype.getActiveMipMapLevel=function(){return console.warn("THREE.WebGLRenderer: .getActiveMipMapLevel() is now .getActiveMipmapLevel()."),this.getActiveMipmapLevel()};Object.defineProperties(Ge.prototype,{shadowMapEnabled:{get:function(){return this.shadowMap.enabled},set:function(i){console.warn("THREE.WebGLRenderer: .shadowMapEnabled is now .shadowMap.enabled."),this.shadowMap.enabled=i}},shadowMapType:{get:function(){return this.shadowMap.type},set:function(i){console.warn("THREE.WebGLRenderer: .shadowMapType is now .shadowMap.type."),this.shadowMap.type=i}},shadowMapCullFace:{get:function(){console.warn("THREE.WebGLRenderer: .shadowMapCullFace has been removed. Set Material.shadowSide instead.")},set:function(){console.warn("THREE.WebGLRenderer: .shadowMapCullFace has been removed. Set Material.shadowSide instead.")}},context:{get:function(){return console.warn("THREE.WebGLRenderer: .context has been removed. Use .getContext() instead."),this.getContext()}},vr:{get:function(){return console.warn("THREE.WebGLRenderer: .vr has been renamed to .xr"),this.xr}},gammaInput:{get:function(){return console.warn("THREE.WebGLRenderer: .gammaInput has been removed. Set the encoding for textures via Texture.encoding instead."),!1},set:function(){console.warn("THREE.WebGLRenderer: .gammaInput has been removed. Set the encoding for textures via Texture.encoding instead.")}},gammaOutput:{get:function(){return console.warn("THREE.WebGLRenderer: .gammaOutput has been removed. Set WebGLRenderer.outputEncoding instead."),!1},set:function(i){console.warn("THREE.WebGLRenderer: .gammaOutput has been removed. Set WebGLRenderer.outputEncoding instead."),this.outputEncoding=i===!0?Pi:Ht}},toneMappingWhitePoint:{get:function(){return console.warn("THREE.WebGLRenderer: .toneMappingWhitePoint has been removed."),1},set:function(){console.warn("THREE.WebGLRenderer: .toneMappingWhitePoint has been removed.")}},gammaFactor:{get:function(){return console.warn("THREE.WebGLRenderer: .gammaFactor has been removed."),2},set:function(){console.warn("THREE.WebGLRenderer: .gammaFactor has been removed.")}}});Object.defineProperties(xh.prototype,{cullFace:{get:function(){console.warn("THREE.WebGLRenderer: .shadowMap.cullFace has been removed. Set Material.shadowSide instead.")},set:function(){console.warn("THREE.WebGLRenderer: .shadowMap.cullFace has been removed. Set Material.shadowSide instead.")}},renderReverseSided:{get:function(){console.warn("THREE.WebGLRenderer: .shadowMap.renderReverseSided has been removed. Set Material.shadowSide instead.")},set:function(){console.warn("THREE.WebGLRenderer: .shadowMap.renderReverseSided has been removed. Set Material.shadowSide instead.")}},renderSingleSided:{get:function(){console.warn("THREE.WebGLRenderer: .shadowMap.renderSingleSided has been removed. Set Material.shadowSide instead.")},set:function(){console.warn("THREE.WebGLRenderer: .shadowMap.renderSingleSided has been removed. Set Material.shadowSide instead.")}}});Object.defineProperties(It.prototype,{wrapS:{get:function(){return console.warn("THREE.WebGLRenderTarget: .wrapS is now .texture.wrapS."),this.texture.wrapS},set:function(i){console.warn("THREE.WebGLRenderTarget: .wrapS is now .texture.wrapS."),this.texture.wrapS=i}},wrapT:{get:function(){return console.warn("THREE.WebGLRenderTarget: .wrapT is now .texture.wrapT."),this.texture.wrapT},set:function(i){console.warn("THREE.WebGLRenderTarget: .wrapT is now .texture.wrapT."),this.texture.wrapT=i}},magFilter:{get:function(){return console.warn("THREE.WebGLRenderTarget: .magFilter is now .texture.magFilter."),this.texture.magFilter},set:function(i){console.warn("THREE.WebGLRenderTarget: .magFilter is now .texture.magFilter."),this.texture.magFilter=i}},minFilter:{get:function(){return console.warn("THREE.WebGLRenderTarget: .minFilter is now .texture.minFilter."),this.texture.minFilter},set:function(i){console.warn("THREE.WebGLRenderTarget: .minFilter is now .texture.minFilter."),this.texture.minFilter=i}},anisotropy:{get:function(){return console.warn("THREE.WebGLRenderTarget: .anisotropy is now .texture.anisotropy."),this.texture.anisotropy},set:function(i){console.warn("THREE.WebGLRenderTarget: .anisotropy is now .texture.anisotropy."),this.texture.anisotropy=i}},offset:{get:function(){return console.warn("THREE.WebGLRenderTarget: .offset is now .texture.offset."),this.texture.offset},set:function(i){console.warn("THREE.WebGLRenderTarget: .offset is now .texture.offset."),this.texture.offset=i}},repeat:{get:function(){return console.warn("THREE.WebGLRenderTarget: .repeat is now .texture.repeat."),this.texture.repeat},set:function(i){console.warn("THREE.WebGLRenderTarget: .repeat is now .texture.repeat."),this.texture.repeat=i}},format:{get:function(){return console.warn("THREE.WebGLRenderTarget: .format is now .texture.format."),this.texture.format},set:function(i){console.warn("THREE.WebGLRenderTarget: .format is now .texture.format."),this.texture.format=i}},type:{get:function(){return console.warn("THREE.WebGLRenderTarget: .type is now .texture.type."),this.texture.type},set:function(i){console.warn("THREE.WebGLRenderTarget: .type is now .texture.type."),this.texture.type=i}},generateMipmaps:{get:function(){return console.warn("THREE.WebGLRenderTarget: .generateMipmaps is now .texture.generateMipmaps."),this.texture.generateMipmaps},set:function(i){console.warn("THREE.WebGLRenderTarget: .generateMipmaps is now .texture.generateMipmaps."),this.texture.generateMipmaps=i}}});Zx.prototype.load=function(i){console.warn("THREE.Audio: .load has been deprecated. Use THREE.AudioLoader instead.");const e=this;return new Yx().load(i,function(n){e.setBuffer(n)}),this};La.prototype.updateCubeMap=function(i,e){return console.warn("THREE.CubeCamera: .updateCubeMap() is now .update()."),this.update(i,e)};La.prototype.clear=function(i,e,t,n){return console.warn("THREE.CubeCamera: .clear() is now .renderTarget.clear()."),this.renderTarget.clear(i,e,t,n)};Di.crossOrigin=void 0;Di.loadTexture=function(i,e,t,n){console.warn("THREE.ImageUtils.loadTexture has been deprecated. Use THREE.TextureLoader() instead.");const r=new Ox;r.setCrossOrigin(this.crossOrigin);const s=r.load(i,t,void 0,n);return e&&(s.mapping=e),s};Di.loadTextureCube=function(i,e,t,n){console.warn("THREE.ImageUtils.loadTextureCube has been deprecated. Use THREE.CubeTextureLoader() instead.");const r=new Bx;r.setCrossOrigin(this.crossOrigin);const s=r.load(i,t,void 0,n);return e&&(s.mapping=e),s};Di.loadCompressedTexture=function(){console.error("THREE.ImageUtils.loadCompressedTexture has been removed. Use THREE.DDSLoader instead.")};Di.loadCompressedTextureCube=function(){console.error("THREE.ImageUtils.loadCompressedTextureCube has been removed. Use THREE.DDSLoader instead.")};typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:Sa}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=Sa);const dy=()=>{const i=globalThis.__bubbleSortRenderer;if(i)return i.setPixelRatio(window.devicePixelRatio),i.setSize(window.innerWidth,window.innerHeight),i.xr.enabled=!0,i;const e=new Ge({antialias:!0,alpha:!0});return e.setPixelRatio(window.devicePixelRatio),e.setSize(window.innerWidth,window.innerHeight),e.xr.enabled=!0,globalThis.__bubbleSortRenderer=e,e},py=(i,e,t={},{onSessionStarted:n=void 0}={})=>{const r=document.getElementById("ARButton");r!==null&&r.remove();let s=null;const o=document.createElement("button");function a(){async function u(d){if(d.addEventListener("end",f),"xr"in navigator){if(e.xr.setReferenceSpaceType("local"),await e.xr.setSession(d),typeof n=="function")try{await n(d)}catch{}o.textContent="STOP AR",o.style.display="",s=d}}function f(){s!==null&&(s.removeEventListener("end",f),window.location.assign(i))}o.style.display="",o.style.cursor="pointer",o.style.left="calc(50% - 50px)",o.style.width="100px",o.textContent="START AR",o.onmouseenter=function(){o.style.opacity="1.0"},o.onmouseleave=function(){o.style.opacity="0.5"},o.onclick=function(){s===null?"xr"in navigator&&navigator.xr.requestSession("immersive-ar",t).then(u):s.end()}}function l(){o.style.display="",o.style.cursor="auto",o.style.left="calc(50% - 75px)",o.style.width="150px",o.onmouseenter=null,o.onmouseleave=null,o.onclick=null}function c(){l(),o.textContent="AR NOT SUPPORTED"}function h(u){u.style.position="absolute",u.style.bottom="20px",u.style.padding="12px 6px",u.style.border="1px solid #fff",u.style.borderRadius="4px",u.style.background="rgba(0,0,0,0.1)",u.style.color="#fff",u.style.font="normal 13px sans-serif",u.style.textAlign="center",u.style.opacity="0.5",u.style.outline="none",u.style.zIndex="10000"}if("xr"in navigator)return o.id="ARButton",o.style.display="none",h(o),navigator.xr.isSessionSupported("immersive-ar").then(function(u){u?a():c()}).catch(c),o;{const u=document.createElement("a");return window.isSecureContext===!1?(u.href=document.location.href.replace(/^http:/,"https:"),u.innerHTML="WEBXR NEEDS HTTPS"):(u.href="https://immersiveweb.dev/",u.innerHTML="WEBXR NOT AVAILABLE"),u.style.left="calc(50% - 90px)",u.style.width="180px",u.style.textDecoration="none",h(u),u}},my={createButton:py},iu=i=>{const e=document.getElementById(i);e&&e.remove()},gy=async(i,e,t,{locationString:n="/",displayName:r="START"}={})=>{const s=document.getElementById("dom-overlay");if(!s)return;iu("start-button"),iu("ARButton");let o=!1;if(navigator&&navigator.xr&&typeof navigator.xr.isSessionSupported=="function")try{o=await navigator.xr.isSessionSupported("immersive-ar")}catch{o=!1}if(o&&typeof t=="function"){const l=my.createButton(n,i,{requiredFeatures:["hit-test"],optionalFeatures:["dom-overlay"],domOverlay:{root:s}},{onSessionStarted:()=>{t(i)}});l!==void 0&&s.appendChild(l);return}const a=document.createElement("button");a.id="start-button",a.textContent=r,a.style.position="absolute",a.style.bottom="20px",a.style.left="calc(50% - 50px)",a.style.width="100px",a.style.padding="12px 6px",a.style.border="1px solid #fff",a.style.borderRadius="4px",a.style.background="rgba(0,0,0,0.1)",a.style.color="#fff",a.style.font="normal 13px sans-serif",a.style.textAlign="center",a.style.opacity="0.5",a.style.outline="none",a.style.cursor="pointer",a.style.zIndex="10000",a.onmouseenter=()=>{a.style.opacity="1.0"},a.onmouseleave=()=>{a.style.opacity="0.5"},a.addEventListener("click",()=>{a.remove(),typeof e=="function"&&e(i)}),s.appendChild(a)},ru={type:"change"},Bo={type:"start"},su={type:"end"};class _y extends Ln{constructor(e,t){super(),t===void 0&&console.warn('THREE.OrbitControls: The second parameter "domElement" is now mandatory.'),t===document&&console.error('THREE.OrbitControls: "document" should not be used as the target "domElement". Please use "renderer.domElement" instead.'),this.object=e,this.domElement=t,this.domElement.style.touchAction="none",this.enabled=!0,this.target=new C,this.minDistance=0,this.maxDistance=1/0,this.minZoom=0,this.maxZoom=1/0,this.minPolarAngle=0,this.maxPolarAngle=Math.PI,this.minAzimuthAngle=-1/0,this.maxAzimuthAngle=1/0,this.enableDamping=!1,this.dampingFactor=.05,this.enableZoom=!0,this.zoomSpeed=1,this.enableRotate=!0,this.rotateSpeed=1,this.enablePan=!0,this.panSpeed=1,this.screenSpacePanning=!0,this.keyPanSpeed=7,this.autoRotate=!1,this.autoRotateSpeed=2,this.keys={LEFT:"ArrowLeft",UP:"ArrowUp",RIGHT:"ArrowRight",BOTTOM:"ArrowDown"},this.mouseButtons={LEFT:jn.ROTATE,MIDDLE:jn.DOLLY,RIGHT:jn.PAN},this.touches={ONE:$n.ROTATE,TWO:$n.DOLLY_PAN},this.target0=this.target.clone(),this.position0=this.object.position.clone(),this.zoom0=this.object.zoom,this._domElementKeyEvents=null,this.getPolarAngle=function(){return a.phi},this.getAzimuthalAngle=function(){return a.theta},this.getDistance=function(){return this.object.position.distanceTo(this.target)},this.listenToKeyEvents=function(L){L.addEventListener("keydown",A),this._domElementKeyEvents=L},this.saveState=function(){n.target0.copy(n.target),n.position0.copy(n.object.position),n.zoom0=n.object.zoom},this.reset=function(){n.target.copy(n.target0),n.object.position.copy(n.position0),n.object.zoom=n.zoom0,n.object.updateProjectionMatrix(),n.dispatchEvent(ru),n.update(),s=r.NONE},this.update=function(){const L=new C,E=new _t().setFromUnitVectors(e.up,new C(0,1,0)),J=E.clone().invert(),$=new C,ge=new _t,fe=2*Math.PI;return function(){const le=n.object.position;L.copy(le).sub(n.target),L.applyQuaternion(E),a.setFromVector3(L),n.autoRotate&&s===r.NONE&&j(D()),n.enableDamping?(a.theta+=l.theta*n.dampingFactor,a.phi+=l.phi*n.dampingFactor):(a.theta+=l.theta,a.phi+=l.phi);let ye=n.minAzimuthAngle,ze=n.maxAzimuthAngle;return isFinite(ye)&&isFinite(ze)&&(ye<-Math.PI?ye+=fe:ye>Math.PI&&(ye-=fe),ze<-Math.PI?ze+=fe:ze>Math.PI&&(ze-=fe),ye<=ze?a.theta=Math.max(ye,Math.min(ze,a.theta)):a.theta=a.theta>(ye+ze)/2?Math.max(ye,a.theta):Math.min(ze,a.theta)),a.phi=Math.max(n.minPolarAngle,Math.min(n.maxPolarAngle,a.phi)),a.makeSafe(),a.radius*=c,a.radius=Math.max(n.minDistance,Math.min(n.maxDistance,a.radius)),n.enableDamping===!0?n.target.addScaledVector(h,n.dampingFactor):n.target.add(h),L.setFromSpherical(a),L.applyQuaternion(J),le.copy(n.target).add(L),n.object.lookAt(n.target),n.enableDamping===!0?(l.theta*=1-n.dampingFactor,l.phi*=1-n.dampingFactor,h.multiplyScalar(1-n.dampingFactor)):(l.set(0,0,0),h.set(0,0,0)),c=1,u||$.distanceToSquared(n.object.position)>o||8*(1-ge.dot(n.object.quaternion))>o?(n.dispatchEvent(ru),$.copy(n.object.position),ge.copy(n.object.quaternion),u=!1,!0):!1}}(),this.dispose=function(){n.domElement.removeEventListener("contextmenu",K),n.domElement.removeEventListener("pointerdown",ne),n.domElement.removeEventListener("pointercancel",we),n.domElement.removeEventListener("wheel",Ve),n.domElement.removeEventListener("pointermove",he),n.domElement.removeEventListener("pointerup",se),n._domElementKeyEvents!==null&&n._domElementKeyEvents.removeEventListener("keydown",A)};const n=this,r={NONE:-1,ROTATE:0,DOLLY:1,PAN:2,TOUCH_ROTATE:3,TOUCH_PAN:4,TOUCH_DOLLY_PAN:5,TOUCH_DOLLY_ROTATE:6};let s=r.NONE;const o=1e-6,a=new nu,l=new nu;let c=1;const h=new C;let u=!1;const f=new Z,d=new Z,g=new Z,_=new Z,v=new Z,p=new Z,m=new Z,y=new Z,x=new Z,M=[],R={};function D(){return 2*Math.PI/60/60*n.autoRotateSpeed}function O(){return Math.pow(.95,n.zoomSpeed)}function j(L){l.theta-=L}function k(L){l.phi-=L}const P=function(){const L=new C;return function(J,$){L.setFromMatrixColumn($,0),L.multiplyScalar(-J),h.add(L)}}(),w=function(){const L=new C;return function(J,$){n.screenSpacePanning===!0?L.setFromMatrixColumn($,1):(L.setFromMatrixColumn($,0),L.crossVectors(n.object.up,L)),L.multiplyScalar(J),h.add(L)}}(),b=function(){const L=new C;return function(J,$){const ge=n.domElement;if(n.object.isPerspectiveCamera){const fe=n.object.position;L.copy(fe).sub(n.target);let Te=L.length();Te*=Math.tan(n.object.fov/2*Math.PI/180),P(2*J*Te/ge.clientHeight,n.object.matrix),w(2*$*Te/ge.clientHeight,n.object.matrix)}else n.object.isOrthographicCamera?(P(J*(n.object.right-n.object.left)/n.object.zoom/ge.clientWidth,n.object.matrix),w($*(n.object.top-n.object.bottom)/n.object.zoom/ge.clientHeight,n.object.matrix)):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - pan disabled."),n.enablePan=!1)}}();function F(L){n.object.isPerspectiveCamera?c/=L:n.object.isOrthographicCamera?(n.object.zoom=Math.max(n.minZoom,Math.min(n.maxZoom,n.object.zoom*L)),n.object.updateProjectionMatrix(),u=!0):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),n.enableZoom=!1)}function I(L){n.object.isPerspectiveCamera?c*=L:n.object.isOrthographicCamera?(n.object.zoom=Math.max(n.minZoom,Math.min(n.maxZoom,n.object.zoom/L)),n.object.updateProjectionMatrix(),u=!0):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),n.enableZoom=!1)}function N(L){f.set(L.clientX,L.clientY)}function z(L){m.set(L.clientX,L.clientY)}function ee(L){_.set(L.clientX,L.clientY)}function re(L){d.set(L.clientX,L.clientY),g.subVectors(d,f).multiplyScalar(n.rotateSpeed);const E=n.domElement;j(2*Math.PI*g.x/E.clientHeight),k(2*Math.PI*g.y/E.clientHeight),f.copy(d),n.update()}function G(L){y.set(L.clientX,L.clientY),x.subVectors(y,m),x.y>0?F(O()):x.y<0&&I(O()),m.copy(y),n.update()}function W(L){v.set(L.clientX,L.clientY),p.subVectors(v,_).multiplyScalar(n.panSpeed),b(p.x,p.y),_.copy(v),n.update()}function ae(L){L.deltaY<0?I(O()):L.deltaY>0&&F(O()),n.update()}function ie(L){let E=!1;switch(L.code){case n.keys.UP:b(0,n.keyPanSpeed),E=!0;break;case n.keys.BOTTOM:b(0,-n.keyPanSpeed),E=!0;break;case n.keys.LEFT:b(n.keyPanSpeed,0),E=!0;break;case n.keys.RIGHT:b(-n.keyPanSpeed,0),E=!0;break}E&&(L.preventDefault(),n.update())}function ue(){if(M.length===1)f.set(M[0].pageX,M[0].pageY);else{const L=.5*(M[0].pageX+M[1].pageX),E=.5*(M[0].pageY+M[1].pageY);f.set(L,E)}}function Re(){if(M.length===1)_.set(M[0].pageX,M[0].pageY);else{const L=.5*(M[0].pageX+M[1].pageX),E=.5*(M[0].pageY+M[1].pageY);_.set(L,E)}}function X(){const L=M[0].pageX-M[1].pageX,E=M[0].pageY-M[1].pageY,J=Math.sqrt(L*L+E*E);m.set(0,J)}function Ce(){n.enableZoom&&X(),n.enablePan&&Re()}function xe(){n.enableZoom&&X(),n.enableRotate&&ue()}function de(L){if(M.length==1)d.set(L.pageX,L.pageY);else{const J=me(L),$=.5*(L.pageX+J.x),ge=.5*(L.pageY+J.y);d.set($,ge)}g.subVectors(d,f).multiplyScalar(n.rotateSpeed);const E=n.domElement;j(2*Math.PI*g.x/E.clientHeight),k(2*Math.PI*g.y/E.clientHeight),f.copy(d)}function pe(L){if(M.length===1)v.set(L.pageX,L.pageY);else{const E=me(L),J=.5*(L.pageX+E.x),$=.5*(L.pageY+E.y);v.set(J,$)}p.subVectors(v,_).multiplyScalar(n.panSpeed),b(p.x,p.y),_.copy(v)}function Fe(L){const E=me(L),J=L.pageX-E.x,$=L.pageY-E.y,ge=Math.sqrt(J*J+$*$);y.set(0,ge),x.set(0,Math.pow(y.y/m.y,n.zoomSpeed)),F(x.y),m.copy(y)}function V(L){n.enableZoom&&Fe(L),n.enablePan&&pe(L)}function te(L){n.enableZoom&&Fe(L),n.enableRotate&&de(L)}function ne(L){n.enabled!==!1&&(M.length===0&&(n.domElement.setPointerCapture(L.pointerId),n.domElement.addEventListener("pointermove",he),n.domElement.addEventListener("pointerup",se)),oe(L),L.pointerType==="touch"?S(L):Se(L))}function he(L){n.enabled!==!1&&(L.pointerType==="touch"?Y(L):Pe(L))}function se(L){Q(L),M.length===0&&(n.domElement.releasePointerCapture(L.pointerId),n.domElement.removeEventListener("pointermove",he),n.domElement.removeEventListener("pointerup",se)),n.dispatchEvent(su),s=r.NONE}function we(L){Q(L)}function Se(L){let E;switch(L.button){case 0:E=n.mouseButtons.LEFT;break;case 1:E=n.mouseButtons.MIDDLE;break;case 2:E=n.mouseButtons.RIGHT;break;default:E=-1}switch(E){case jn.DOLLY:if(n.enableZoom===!1)return;z(L),s=r.DOLLY;break;case jn.ROTATE:if(L.ctrlKey||L.metaKey||L.shiftKey){if(n.enablePan===!1)return;ee(L),s=r.PAN}else{if(n.enableRotate===!1)return;N(L),s=r.ROTATE}break;case jn.PAN:if(L.ctrlKey||L.metaKey||L.shiftKey){if(n.enableRotate===!1)return;N(L),s=r.ROTATE}else{if(n.enablePan===!1)return;ee(L),s=r.PAN}break;default:s=r.NONE}s!==r.NONE&&n.dispatchEvent(Bo)}function Pe(L){if(n.enabled!==!1)switch(s){case r.ROTATE:if(n.enableRotate===!1)return;re(L);break;case r.DOLLY:if(n.enableZoom===!1)return;G(L);break;case r.PAN:if(n.enablePan===!1)return;W(L);break}}function Ve(L){n.enabled===!1||n.enableZoom===!1||s!==r.NONE||(L.preventDefault(),n.dispatchEvent(Bo),ae(L),n.dispatchEvent(su))}function A(L){n.enabled===!1||n.enablePan===!1||ie(L)}function S(L){switch(be(L),M.length){case 1:switch(n.touches.ONE){case $n.ROTATE:if(n.enableRotate===!1)return;ue(),s=r.TOUCH_ROTATE;break;case $n.PAN:if(n.enablePan===!1)return;Re(),s=r.TOUCH_PAN;break;default:s=r.NONE}break;case 2:switch(n.touches.TWO){case $n.DOLLY_PAN:if(n.enableZoom===!1&&n.enablePan===!1)return;Ce(),s=r.TOUCH_DOLLY_PAN;break;case $n.DOLLY_ROTATE:if(n.enableZoom===!1&&n.enableRotate===!1)return;xe(),s=r.TOUCH_DOLLY_ROTATE;break;default:s=r.NONE}break;default:s=r.NONE}s!==r.NONE&&n.dispatchEvent(Bo)}function Y(L){switch(be(L),s){case r.TOUCH_ROTATE:if(n.enableRotate===!1)return;de(L),n.update();break;case r.TOUCH_PAN:if(n.enablePan===!1)return;pe(L),n.update();break;case r.TOUCH_DOLLY_PAN:if(n.enableZoom===!1&&n.enablePan===!1)return;V(L),n.update();break;case r.TOUCH_DOLLY_ROTATE:if(n.enableZoom===!1&&n.enableRotate===!1)return;te(L),n.update();break;default:s=r.NONE}}function K(L){n.enabled!==!1&&L.preventDefault()}function oe(L){M.push(L)}function Q(L){delete R[L.pointerId];for(let E=0;E<M.length;E++)if(M[E].pointerId==L.pointerId){M.splice(E,1);return}}function be(L){let E=R[L.pointerId];E===void 0&&(E=new Z,R[L.pointerId]=E),E.set(L.pageX,L.pageY)}function me(L){const E=L.pointerId===M[0].pointerId?M[1]:M[0];return R[E.pointerId]}n.domElement.addEventListener("contextmenu",K),n.domElement.addEventListener("pointerdown",ne),n.domElement.addEventListener("pointercancel",we),n.domElement.addEventListener("wheel",Ve,{passive:!1}),this.update()}}var or=function(){var i=0,e=document.createElement("div");e.style.cssText="position:fixed;top:0;left:0;cursor:pointer;opacity:0.9;z-index:10000",e.addEventListener("click",function(h){h.preventDefault(),n(++i%e.children.length)},!1);function t(h){return e.appendChild(h.dom),h}function n(h){for(var u=0;u<e.children.length;u++)e.children[u].style.display=u===h?"block":"none";i=h}var r=(performance||Date).now(),s=r,o=0,a=t(new or.Panel("FPS","#0ff","#002")),l=t(new or.Panel("MS","#0f0","#020"));if(self.performance&&self.performance.memory)var c=t(new or.Panel("MB","#f08","#201"));return n(0),{REVISION:16,dom:e,addPanel:t,showPanel:n,begin:function(){r=(performance||Date).now()},end:function(){o++;var h=(performance||Date).now();if(l.update(h-r,200),h>=s+1e3&&(a.update(o*1e3/(h-s),100),s=h,o=0,c)){var u=performance.memory;c.update(u.usedJSHeapSize/1048576,u.jsHeapSizeLimit/1048576)}return h},update:function(){r=this.end()},domElement:e,setMode:n}};or.Panel=function(i,e,t){var n=1/0,r=0,s=Math.round,o=s(window.devicePixelRatio||1),a=80*o,l=48*o,c=3*o,h=2*o,u=3*o,f=15*o,d=74*o,g=30*o,_=document.createElement("canvas");_.width=a,_.height=l,_.style.cssText="width:80px;height:48px";var v=_.getContext("2d");return v.font="bold "+9*o+"px Helvetica,Arial,sans-serif",v.textBaseline="top",v.fillStyle=t,v.fillRect(0,0,a,l),v.fillStyle=e,v.fillText(i,c,h),v.fillRect(u,f,d,g),v.fillStyle=t,v.globalAlpha=.9,v.fillRect(u,f,d,g),{dom:_,update:function(p,m){n=Math.min(n,p),r=Math.max(r,p),v.fillStyle=t,v.globalAlpha=1,v.fillRect(0,0,a,f),v.fillStyle=e,v.fillText(s(p)+" "+i+" ("+s(n)+"-"+s(r)+")",c,h),v.drawImage(_,u+o,f,d-o,g,u,f,d-o,g),v.fillRect(u+d-o,f,o,g),v.fillStyle=t,v.globalAlpha=.9,v.fillRect(u+d-o,f,o,s((1-p/m)*g))}}};const Vh=()=>{const i=new or;return i.setMode(0),i.domElement.style.position="absolute",i.domElement.style.left="0",i.domElement.style.top="0",i},Wh=(i,e,t)=>()=>{i.aspect=t.innerWidth/t.innerHeight,i.updateProjectionMatrix(),e.setSize(t.innerWidth,t.innerHeight)},vy=({cubeState:i,cubeA:e,cubeB:t,cubeAStartX:n,cubeAStartY:r,cubeAStartZ:s,cubeBStartX:o,cubeBStartY:a,cubeBStartZ:l,i:c,j:h})=>{e.position.x=o,e.position.y=a,e.position.z=l,t.position.x=n,t.position.y=r,t.position.z=s,i.moving=!1,i.pixelGrid[c]=t,i.pixelGrid[h]=e},xy=(i,e,t,n,r,s)=>{const o=n.pixelGrid[r],a=n.pixelGrid[s];if(!o||!a)return{};const l=o.position.z,c=o.position.y,h=a.position.z,u=a.position.y,f=o.position.x,d=a.position.x;n.moving=!0;const g=()=>{vy({cubeState:n,cubeA:o,cubeB:a,i:r,j:s,cubeAStartX:f,cubeAStartY:c,cubeAStartZ:l,cubeBStartX:d,cubeBStartY:u,cubeBStartZ:h})},_=t({targets:[o.position],x:[{value:o.position.x-2*i,duration:1e3/e/2,delay:0},{value:o.position.x,duration:1e3/e,delay:0}],z:[{value:h,duration:1e3/e,delay:0}],y:[{value:u,duration:1e3/e,delay:0}],delay:500,easing:"easeInOutCirc",complete:()=>{g()}}),v=t({targets:[a.position],x:[{value:a.position.x+2*i,duration:1e3/e/2,delay:0},{value:a.position.x,duration:1e3/e,delay:0}],z:[{value:l,duration:1e3/e,delay:0}],y:[{value:c,duration:1e3/e,delay:0}],delay:500,easing:"easeInOutCirc",complete:()=>{g()}});return{animA:_,animB:v}},xt=async(i,e,t,n,r,s)=>{const{animA:o,animB:a}=xy(n,r,s,i,e,t),l=o&&o.finished,c=a&&a.finished;await Promise.all([l,c])},yy=(i=globalThis.setTimeout,e=globalThis.clearTimeout)=>(t,n,r)=>t?(t.unsortTimeoutId!=null&&e(t.unsortTimeoutId),t.unsortTimeoutId=i(()=>{r(t)},n),t.unsortTimeoutId):null,ja=yy(),Oo=(i,e)=>{if(!i||typeof i.length!="number")return 0;const t=i.length|0;if(t<2)return 0;const n=256,r=e&&e.bit?e.bit:new Uint32Array(n+1);if(typeof r.fill=="function")r.fill(0);else for(let h=0;h<=n;h++)r[h]=0;const s=(h,u)=>{for(let f=h;f<=n;f+=f&-f)r[f]+=u},o=h=>{let u=0;for(let f=h;f>0;f-=f&-f)u+=r[f];return u};let a=0,l=0;for(let h=0;h<t;h++){const u=i[h],d=((Number.isFinite(u)?Math.max(0,Math.min(255,u)):0)|0)+1,g=o(d);a+=l-g,s(d,1),l+=1}const c=t*(t-1)/2;return c>0?a/c:0},Ar=()=>typeof performance<"u"&&typeof performance.now=="function"?performance.now():Date.now(),My=(i,e)=>{var r,s,o,a;const t=Math.max(0,Math.min(255,e))/255,n=Math.max(0,Math.min(255,e));(s=(r=i.material)==null?void 0:r.color)!=null&&s.setRGB?i.material.color.setRGB(t,t,t):(a=(o=i.material)==null?void 0:o.color)!=null&&a.setStyle&&i.material.color.setStyle(`rgb(${n},${n},${n})`)},ko=(i,e)=>{(!i.diffuseValuesBuffer||i.diffuseValuesBuffer.length!==e)&&(i.diffuseValuesBuffer=new Uint16Array(e));const t=i.diffuseValuesBuffer;for(let n=0;n<e;n++){const r=i.pixelGrid[n],s=r&&Number.isFinite(r.bubble_value)?r.bubble_value:0;t[n]=s&65535}return t},by=(i,e,t,n,r,s,o,a)=>{for(let l=0;l<t;l++){let c=Math.floor(o()*e);c<0&&(c=0),c>=e&&(c=e-1);let h=c+1;if(n){const v=r,p=Math.floor(c/v),m=c%v;if(s<=1){const y=Math.floor(o()*4);y===0&&m+1<v?h=c+1:y===1&&m-1>=0?h=c-1:y===2&&(p+1)*v+m<e?h=c+v:y===3&&p-1>=0?h=c-v:m+1<v?h=c+1:m-1>=0?h=c-1:(p+1)*v+m<e?h=c+v:p-1>=0&&(h=c-v)}else{let y=!1;for(let x=0;x<8;x++){const M=Math.floor(o()*(2*s+1))-s,R=Math.floor(o()*(2*s+1))-s;if(M===0&&R===0)continue;const D=p+R,O=m+M;if(D<0||O<0||D>=e/v||O>=v)continue;const j=D*v+O;if(!(j<0||j>=e)){h=j,y=!0;break}}y||(m+1<v?h=c+1:m-1>=0?h=c-1:(p+1)*v+m<e?h=c+v:p-1>=0&&(h=c-v))}}else{const v=2*s+1;let p=Math.floor(o()*v)-s;p===0&&(p=o()<.5?-1:1),h=c+p,h<0&&(h=0),h>=e&&(h=e-1),h===c&&(h=c===0?1:c-1)}const u=i.pixelGrid[c],f=i.pixelGrid[h];if(!u||!f)continue;const d=u.bubble_value,g=u.selection_value,_=u.value;u.bubble_value=f.bubble_value,f.bubble_value=d,u.selection_value=f.selection_value,f.selection_value=g,u.value=f.value,f.value=_,a(u,u.bubble_value),a(f,f.bubble_value)}},wy=({cubes:i,n:e,runToken:t,effectiveMaxMs:n,tickMs:r,maxCatchUpSteps:s,cappedSwapsPerTick:o,use2D:a,resolvedCols:l,radius:c,randomFn:h,setCubeGreyscale:u,checkEveryMs:f,targetRatio:d,onProgress:g,complete:_,nowFn:v,state:p,fillValuesBuffer:m,inversionRatioFromValues:y})=>()=>{if(i.diffuseRunToken!==t)return;const x=v();if(x-p.startedAt>=n){_("timeout");return}const M=Math.max(0,x-p.lastTickAt);p.lastTickAt=x;const R=r>0?Math.floor(M/r):1,D=Math.min(Math.max(1,R),typeof s=="number"&&s>0?s:120);for(let O=0;O<D;O++){if(i.diffuseRunToken!==t||p.completedRef.value)return;by(i,e,o,a,l,c,h,u)}x-p.lastCheckAt>=f&&(p.lastCheckAt=x,p.lastRatio=y(m(i,e),i.diffuseInversionScratch),typeof g=="function"&&g(p.lastRatio),p.lastRatio>=d&&_("target"))},pa=new WeakMap,Vn=(i,e=globalThis.clearInterval)=>{try{const t=pa.get(i);t!=null&&typeof e=="function"&&e(t)}catch{}finally{pa.delete(i)}},Sy=(i=globalThis.setInterval,e=globalThis.clearInterval,t=Ar,n=Math.random)=>(r,s={})=>{const{targetRatio:o=.5,maxMs:a,msPerCube:l=400,minMaxMs:c=5e3,cols:h,neighborRadius:u=1,tickMs:f=16,checkEveryMs:d=100,maxCatchUpSteps:g=120,swapsPerTick:_,randomFn:v,onProgress:p,onComplete:m}=s;if(typeof m!="function")throw new Error("unsortDiffuse requires options.onComplete");if(!r||!Array.isArray(r.pixelGrid))return m({ratio:0,reason:"noop"}),r;const y=r.pixelGrid.length;if(y<2)return m({ratio:0,reason:"noop"}),r;(!r.diffuseValuesBuffer||r.diffuseValuesBuffer.length!==y)&&(r.diffuseValuesBuffer=new Uint16Array(y)),(!r.diffuseInversionScratch||!r.diffuseInversionScratch.bit)&&(r.diffuseInversionScratch={bit:new Uint32Array(257)});const x=typeof h=="number"&&h>0?h:Math.max(1,Number(r.gridCols||1)),M=x>0&&y%x===0,R=Number.isFinite(Number(u))?Math.floor(Number(u)):1,D=Math.max(1,Math.min(10,R)),O=typeof a=="number"&&Number.isFinite(a)?Math.max(0,a):Math.max(0,c,y*l);if(typeof e=="function")try{Vn(r,e)}catch{}else Vn(r);r.active=!1,r.diffusing=!0,r.diffuseRunToken=(r.diffuseRunToken||0)+1;const j=r.diffuseRunToken,k=typeof _=="number"&&_>0?Math.floor(_):Math.max(1,Math.floor(y/5)),P=Math.min(k,2e3),w=t();let b=w,F=w,I=Oo(ko(r,y),r.diffuseInversionScratch);const N={value:!1},z=W=>{if(N.value)return;N.value=!0;const ae=t(),ie=Math.max(0,ae-w);(W==="timeout"||W==="target")&&(I=Oo(ko(r,y),r.diffuseInversionScratch));try{Vn(r,e)}catch{}r.diffusing=!1,m({ratio:I,reason:W,elapsedMs:ie,maxMs:O})};if(I>=o)return z("target"),r;const re=wy({cubes:r,n:y,runToken:j,effectiveMaxMs:O,tickMs:f,maxCatchUpSteps:g,cappedSwapsPerTick:P,use2D:M,resolvedCols:x,radius:D,randomFn:typeof v=="function"?v:n,setCubeGreyscale:My,checkEveryMs:d,targetRatio:o,onProgress:p,complete:z,nowFn:t,state:{lastTickAt:b,lastCheckAt:F,lastRatio:I,startedAt:w,completedRef:N},fillValuesBuffer:ko,inversionRatioFromValues:Oo}),G=i(re,f);return pa.set(r,G),r},$a=Sy(),Ty=(i,e={})=>{if(!(!i||!Array.isArray(i.pixelGrid))){i.active=!0,i.moving=!1,i.currentIndex=0,i.sortStartMs=Ar(),i.sortEndMs=void 0,i.sortRunId=(i.sortRunId||0)+1;{const t=Array.isArray(i.pixelGrid)?i.pixelGrid.length:0;console.log(`[sort] #${i.sortRunId} start`,{startMs:i.sortStartMs,cubeCount:t,...e})}}},Ey=i=>{if(i.active=!1,!i.gridCols||i.gridCols<=0){const e=Array.isArray(i.pixelGrid)?i.pixelGrid.length:1;i.gridCols=Math.max(1,e)}$a(i,{targetRatio:1,maxMs:3e3,swapsPerTick:i.diffuseSwapsPerTick,neighborRadius:i.diffuseNeighborRadius,onComplete:({ratio:e,reason:t,elapsedMs:n,maxMs:r})=>{Ty(i,{inversionRatio:e})}})},St=i=>{const e=i&&typeof i.unsortPauseMs=="number"?i.unsortPauseMs:0;if(i){i.sortEndMs=Ar();const t=typeof i.sortStartMs=="number"?i.sortStartMs:i.sortEndMs,n=Math.max(0,i.sortEndMs-t),r=Array.isArray(i.pixelGrid)?i.pixelGrid.length:0;console.log(`[sort] #${i.sortRunId} end`,{endMs:i.sortEndMs,elapsedMs:n,cubeCount:r})}ja(i,e,t=>Ey(t))},Ay=i=>async(e,t,n,r)=>{e&&(e.active=!1);const s=e.pixelGrid,o=async(c,h)=>{c!==h&&await xt(e,c,h,n,t,r)},a=s.length;let l;for(let c=0;c<a-1;c++){l=!1;for(let h=0;h<a-c-1;h++)s[h].value>s[h+1].value&&(await o(h,h+1),l=!0);if(!l)break}return i(e),e},Cy=Ay(St),Ly=i=>async(e,t,n,r)=>{e&&(e.active=!1);const s=e.pixelGrid,o=async(l,c)=>{l!==c&&await xt(e,l,c,n,t,r)},a=s.length;for(let l=0;l<a-1;l++){let c=l;for(let h=l+1;h<a;h++)s[h].value<s[c].value&&(c=h);await o(l,c)}return i(e),e},Ry=Ly(St),Py=i=>async(e,t=1,n=1,r)=>{e&&(e.active=!1);const s=e.pixelGrid,o=async(c,h)=>{c!==h&&await xt(e,c,h,n,t,r)},a=async(c,h)=>{const u=s[h].value;let f=c;for(let d=c;d<h;d++)s[d].value<=u&&(await o(f,d),f++);return await o(f,h),f},l=async(c,h)=>{if(c>=h)return;const u=await a(c,h);await l(c,u-1),await l(u+1,h)};return await l(0,s.length-1),i(e),e},Iy=Py(St),Dy=i=>async(e,t,n,r)=>{e&&(e.active=!1);const s=e.pixelGrid,o=async(l,c)=>{l!==c&&await xt(e,l,c,n,t,r)},a=s.length;for(let l=1;l<a;l++){let c=l;for(;c>0&&s[c-1].value>s[c].value;)await o(c-1,c),c--}return i(e),e},Ny=Dy(St),Fy=i=>async(e,t,n,r)=>{e&&(e.active=!1);const s=e.pixelGrid,o=async(l,c)=>{l!==c&&await xt(e,l,c,n,t,r)},a=s.length;for(let l=1;l<a;l++){const c=s[l].value;let h=0,u=l-1,f=l;for(;h<=u;){const d=h+u>>1,g=s[d].value;c<g?(f=d,u=d-1):h=d+1}if(f!==l)for(let d=l;d>f;d--)await o(d-1,d)}return i(e),e},zy=Fy(St),By=i=>async(e,t,n,r)=>{e&&(e.active=!1);const s=e.pixelGrid,o=async(l,c)=>{l!==c&&await xt(e,l,c,n,t,r)},a=s.length;for(let l=Math.floor(a/2);l>0;l=Math.floor(l/2))for(let c=l;c<a;c++){let h=c;for(;h>=l&&s[h-l].value>s[h].value;)await o(h-l,h),h-=l}return i(e),e},Oy=By(St),ky=8,Uy=16,qh=async(i,e,t,n,r,s)=>{if(e!==t){if(e>t)return qh(i,t,e,n,r,s);for(let o=e;o<t;o++)await xt(i,o,o+1,n,r,s);for(let o=t-2;o>=e;o--)await xt(i,o,o+1,n,r,s)}},Xh=async(i,e,t,n,r,s)=>{if(e===t)return;const o=Math.abs(e-t);if(o<=ky){await qh(i,e,t,n,r,s);return}const a=Math.max(1,Math.ceil(o/Uy)),l=r*a;await xt(i,e,t,n,l,s)},ou=async(i,e,t,n,r,s)=>{for(;;){const o=i.pixelGrid,a=2*t+1,l=2*t+2;let c=t;if(a<e&&o[a].value>o[c].value&&(c=a),l<e&&o[l].value>o[c].value&&(c=l),c!==t)await Xh(i,t,c,n,r,s),t=c;else break}},Hy=i=>async(e,t,n,r)=>{e&&(e.active=!1);const s=e.pixelGrid.length;for(let o=Math.floor(s/2)-1;o>=0;o--)await ou(e,s,o,n,t,r);for(let o=s-1;o>0;o--)await Xh(e,0,o,n,t,r),await ou(e,o,0,n,t,r);return i(e),e},Gy=Hy(St),Vy=i=>async(e,t,n,r)=>{e&&(e.active=!1);const s=e.pixelGrid,o=s.length,a=async(d,g)=>{d!==g&&await xt(e,d,g,n,t,r)},c=[...s.map((d,g)=>({value:d.value,index:g}))].sort((d,g)=>d.value<g.value?-1:d.value>g.value?1:d.index<g.index?-1:d.index>g.index?1:0),h=new Array(o);for(let d=0;d<o;d++){const g=c[d].index;h[g]=d}const u=new Array(o).fill(!1),f=[];for(let d=0;d<o;d++){if(u[d]||h[d]===d)continue;const g=[];let _=d;for(;!u[_];)u[_]=!0,g.push(_),_=h[_];if(g.length<=1)continue;const v=g[0];for(let p=1;p<g.length;p++)f.push({from:v,to:g[p]})}for(const d of f)await a(d.from,d.to);return i(e),e},Wy=Vy(St),qy=i=>async(e,t,n,r)=>{e&&(e.active=!1);const s=e.pixelGrid,o=async(u,f)=>{u!==f&&await xt(e,u,f,n,t,r)},a=1.3,l=s.length;let c=l,h=!0;for(;c>1||h;){c=Math.floor(c/a),c<1&&(c=1),h=!1;for(let u=0;u+c<l;u++){const f=e.pixelGrid||s,d=u+c;f[u].value>f[d].value&&(await o(u,d),h=!0)}}return i(e),e},Xy=qy(St),Yy=i=>async(e,t,n,r)=>{e&&(e.active=!1);const s=e.pixelGrid,o=async(h,u)=>{h!==u&&await xt(e,h,u,n,t,r)};let a=0,l=s.length-1,c=!0;for(;c;){c=!1;for(let h=a;h<l;h++)s[h].value>s[h+1].value&&(await o(h,h+1),c=!0);if(!c)break;c=!1,l--;for(let h=l;h>a;h--)s[h-1].value>s[h].value&&(await o(h-1,h),c=!0);a++}return i(e),e},jy=Yy(St),$y=i=>async(e,t,n,r)=>{e&&(e.active=!1);const s=e.pixelGrid,o=async(c,h)=>{c!==h&&await xt(e,c,h,n,t,r)};let a=1;const l=s.length;for(;a<l;)a===0||s[a].value>=s[a-1].value?a+=1:(await o(a,a-1),a-=1);return i(e),e},Zy=$y(St),Jy=i=>async(e,t,n,r)=>{e&&(e.active=!1);const s=e.pixelGrid,o=async(c,h)=>{c!==h&&await xt(e,c,h,n,t,r)};let a=!1;const l=s.length;for(;!a;){a=!0;for(let c=0;c<=l-2;c+=2)s[c].value>s[c+1].value&&(await o(c,c+1),a=!1);for(let c=1;c<=l-2;c+=2)s[c].value>s[c+1].value&&(await o(c,c+1),a=!1)}return i(e),e},Qy=Jy(St),Ky=i=>async(e,t,n,r)=>{e&&(e.active=!1);const s=e.pixelGrid,o=async(c,h)=>{c!==h&&await xt(e,c,h,n,t,r)},a=async(c,h,u)=>{const f=h-c;if(!(f<=1))for(let d=0;d<f-1;d++)for(let g=c;g<h-d-1;g++){const _=s[g].value,v=s[g+1].value;(u?_>v:_<v)&&await o(g,g+1)}},l=s.length;for(let c=2;c<=l;c*=2)for(let h=0;h<l;h+=c){const u=Math.min(h+c,l),f=h+Math.floor((u-h)/2);await a(h,f,!0),await a(f,u,!1),await a(h,u,!0)}return await a(0,l,!0),i(e),e},eM=Ky(St),tM=i=>async(e,t,n,r)=>{if(!e||!Array.isArray(e.pixelGrid))return e;e.active=!1;const s=e.pixelGrid,o=s.length;if(o<=1)return i(e),e;const a=async(h,u)=>{h!==u&&await xt(e,h,u,n,t,r)},l=async h=>{let u=0,f=h;for(;u<f;)await a(u,f),u+=1,f-=1},c=h=>{let u=0,f=s[0].value;for(let d=1;d<=h;d++){const g=s[d].value;g>f&&(f=g,u=d)}return u};for(let h=o;h>1;h--){const u=c(h-1);u!==h-1&&(u>0&&await l(u),await l(h-1))}return i(e),e},nM=tM(St),iM=async i=>{const{stats:e,scene:t,camera:n,renderer:r,reticleStuff:s,cubes:o}=i,a=r.xr.getSession(),l=await a.requestReferenceSpace("viewer");return s.hitTestSource=await a.requestHitTestSource({space:l}),s.localSpace=await a.requestReferenceSpace("local"),s.hitTestSourceInitialized=!0,a.addEventListener("end",()=>{s.hitTestSourceInitialized=!1,s.hitTestSource=null}),{stats:e,scene:t,camera:n,renderer:r,reticleStuff:s,cubes:o}};var Yh={update:null,begin:null,loopBegin:null,changeBegin:null,change:null,changeComplete:null,loopComplete:null,complete:null,loop:1,direction:"normal",autoplay:!0,timelineOffset:0},Za={duration:1e3,delay:0,endDelay:0,easing:"easeOutElastic(1, .5)",round:0},rM=["translateX","translateY","translateZ","rotate","rotateX","rotateY","rotateZ","scale","scaleX","scaleY","scaleZ","skew","skewX","skewY","perspective","matrix","matrix3d"],Ts={CSS:{},springs:{}};function Zt(i,e,t){return Math.min(Math.max(i,e),t)}function ar(i,e){return i.indexOf(e)>-1}function Uo(i,e){return i.apply(null,e)}var _e={arr:function(i){return Array.isArray(i)},obj:function(i){return ar(Object.prototype.toString.call(i),"Object")},pth:function(i){return _e.obj(i)&&i.hasOwnProperty("totalLength")},svg:function(i){return i instanceof SVGElement},inp:function(i){return i instanceof HTMLInputElement},dom:function(i){return i.nodeType||_e.svg(i)},str:function(i){return typeof i=="string"},fnc:function(i){return typeof i=="function"},und:function(i){return typeof i>"u"},nil:function(i){return _e.und(i)||i===null},hex:function(i){return/(^#[0-9A-F]{6}$)|(^#[0-9A-F]{3}$)/i.test(i)},rgb:function(i){return/^rgb/.test(i)},hsl:function(i){return/^hsl/.test(i)},col:function(i){return _e.hex(i)||_e.rgb(i)||_e.hsl(i)},key:function(i){return!Yh.hasOwnProperty(i)&&!Za.hasOwnProperty(i)&&i!=="targets"&&i!=="keyframes"}};function jh(i){var e=/\(([^)]+)\)/.exec(i);return e?e[1].split(",").map(function(t){return parseFloat(t)}):[]}function $h(i,e){var t=jh(i),n=Zt(_e.und(t[0])?1:t[0],.1,100),r=Zt(_e.und(t[1])?100:t[1],.1,100),s=Zt(_e.und(t[2])?10:t[2],.1,100),o=Zt(_e.und(t[3])?0:t[3],.1,100),a=Math.sqrt(r/n),l=s/(2*Math.sqrt(r*n)),c=l<1?a*Math.sqrt(1-l*l):0,h=1,u=l<1?(l*a+-o)/c:-o+a;function f(g){var _=e?e*g/1e3:g;return l<1?_=Math.exp(-_*l*a)*(h*Math.cos(c*_)+u*Math.sin(c*_)):_=(h+u*_)*Math.exp(-_*a),g===0||g===1?g:1-_}function d(){var g=Ts.springs[i];if(g)return g;for(var _=1/6,v=0,p=0;;)if(v+=_,f(v)===1){if(p++,p>=16)break}else p=0;var m=v*_*1e3;return Ts.springs[i]=m,m}return e?f:d}function sM(i){return i===void 0&&(i=10),function(e){return Math.ceil(Zt(e,1e-6,1)*i)*(1/i)}}var oM=function(){var i=11,e=1/(i-1);function t(h,u){return 1-3*u+3*h}function n(h,u){return 3*u-6*h}function r(h){return 3*h}function s(h,u,f){return((t(u,f)*h+n(u,f))*h+r(u))*h}function o(h,u,f){return 3*t(u,f)*h*h+2*n(u,f)*h+r(u)}function a(h,u,f,d,g){var _,v,p=0;do v=u+(f-u)/2,_=s(v,d,g)-h,_>0?f=v:u=v;while(Math.abs(_)>1e-7&&++p<10);return v}function l(h,u,f,d){for(var g=0;g<4;++g){var _=o(u,f,d);if(_===0)return u;var v=s(u,f,d)-h;u-=v/_}return u}function c(h,u,f,d){if(!(0<=h&&h<=1&&0<=f&&f<=1))return;var g=new Float32Array(i);if(h!==u||f!==d)for(var _=0;_<i;++_)g[_]=s(_*e,h,f);function v(p){for(var m=0,y=1,x=i-1;y!==x&&g[y]<=p;++y)m+=e;--y;var M=(p-g[y])/(g[y+1]-g[y]),R=m+M*e,D=o(R,h,f);return D>=.001?l(p,R,h,f):D===0?R:a(p,m,m+e,h,f)}return function(p){return h===u&&f===d||p===0||p===1?p:s(v(p),u,d)}}return c}(),Zh=function(){var i={linear:function(){return function(n){return n}}},e={Sine:function(){return function(n){return 1-Math.cos(n*Math.PI/2)}},Expo:function(){return function(n){return n?Math.pow(2,10*n-10):0}},Circ:function(){return function(n){return 1-Math.sqrt(1-n*n)}},Back:function(){return function(n){return n*n*(3*n-2)}},Bounce:function(){return function(n){for(var r,s=4;n<((r=Math.pow(2,--s))-1)/11;);return 1/Math.pow(4,3-s)-7.5625*Math.pow((r*3-2)/22-n,2)}},Elastic:function(n,r){n===void 0&&(n=1),r===void 0&&(r=.5);var s=Zt(n,1,10),o=Zt(r,.1,2);return function(a){return a===0||a===1?a:-s*Math.pow(2,10*(a-1))*Math.sin((a-1-o/(Math.PI*2)*Math.asin(1/s))*(Math.PI*2)/o)}}},t=["Quad","Cubic","Quart","Quint"];return t.forEach(function(n,r){e[n]=function(){return function(s){return Math.pow(s,r+2)}}}),Object.keys(e).forEach(function(n){var r=e[n];i["easeIn"+n]=r,i["easeOut"+n]=function(s,o){return function(a){return 1-r(s,o)(1-a)}},i["easeInOut"+n]=function(s,o){return function(a){return a<.5?r(s,o)(a*2)/2:1-r(s,o)(a*-2+2)/2}},i["easeOutIn"+n]=function(s,o){return function(a){return a<.5?(1-r(s,o)(1-a*2))/2:(r(s,o)(a*2-1)+1)/2}}}),i}();function Ja(i,e){if(_e.fnc(i))return i;var t=i.split("(")[0],n=Zh[t],r=jh(i);switch(t){case"spring":return $h(i,e);case"cubicBezier":return Uo(oM,r);case"steps":return Uo(sM,r);default:return Uo(n,r)}}function Jh(i){try{var e=document.querySelectorAll(i);return e}catch{return}}function qs(i,e){for(var t=i.length,n=arguments.length>=2?arguments[1]:void 0,r=[],s=0;s<t;s++)if(s in i){var o=i[s];e.call(n,o,s,i)&&r.push(o)}return r}function Xs(i){return i.reduce(function(e,t){return e.concat(_e.arr(t)?Xs(t):t)},[])}function au(i){return _e.arr(i)?i:(_e.str(i)&&(i=Jh(i)||i),i instanceof NodeList||i instanceof HTMLCollection?[].slice.call(i):[i])}function Qa(i,e){return i.some(function(t){return t===e})}function Ka(i){var e={};for(var t in i)e[t]=i[t];return e}function ma(i,e){var t=Ka(i);for(var n in i)t[n]=e.hasOwnProperty(n)?e[n]:i[n];return t}function Ys(i,e){var t=Ka(i);for(var n in e)t[n]=_e.und(i[n])?e[n]:i[n];return t}function aM(i){var e=/rgb\((\d+,\s*[\d]+,\s*[\d]+)\)/g.exec(i);return e?"rgba("+e[1]+",1)":i}function lM(i){var e=/^#?([a-f\d])([a-f\d])([a-f\d])$/i,t=i.replace(e,function(a,l,c,h){return l+l+c+c+h+h}),n=/^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(t),r=parseInt(n[1],16),s=parseInt(n[2],16),o=parseInt(n[3],16);return"rgba("+r+","+s+","+o+",1)"}function cM(i){var e=/hsl\((\d+),\s*([\d.]+)%,\s*([\d.]+)%\)/g.exec(i)||/hsla\((\d+),\s*([\d.]+)%,\s*([\d.]+)%,\s*([\d.]+)\)/g.exec(i),t=parseInt(e[1],10)/360,n=parseInt(e[2],10)/100,r=parseInt(e[3],10)/100,s=e[4]||1;function o(f,d,g){return g<0&&(g+=1),g>1&&(g-=1),g<1/6?f+(d-f)*6*g:g<1/2?d:g<2/3?f+(d-f)*(2/3-g)*6:f}var a,l,c;if(n==0)a=l=c=r;else{var h=r<.5?r*(1+n):r+n-r*n,u=2*r-h;a=o(u,h,t+1/3),l=o(u,h,t),c=o(u,h,t-1/3)}return"rgba("+a*255+","+l*255+","+c*255+","+s+")"}function uM(i){if(_e.rgb(i))return aM(i);if(_e.hex(i))return lM(i);if(_e.hsl(i))return cM(i)}function fn(i){var e=/[+-]?\d*\.?\d+(?:\.\d+)?(?:[eE][+-]?\d+)?(%|px|pt|em|rem|in|cm|mm|ex|ch|pc|vw|vh|vmin|vmax|deg|rad|turn)?$/.exec(i);if(e)return e[1]}function hM(i){if(ar(i,"translate")||i==="perspective")return"px";if(ar(i,"rotate")||ar(i,"skew"))return"deg"}function ga(i,e){return _e.fnc(i)?i(e.target,e.id,e.total):i}function Jt(i,e){return i.getAttribute(e)}function el(i,e,t){var n=fn(e);if(Qa([t,"deg","rad","turn"],n))return e;var r=Ts.CSS[e+t];if(!_e.und(r))return r;var s=100,o=document.createElement(i.tagName),a=i.parentNode&&i.parentNode!==document?i.parentNode:document.body;a.appendChild(o),o.style.position="absolute",o.style.width=s+t;var l=s/o.offsetWidth;a.removeChild(o);var c=l*parseFloat(e);return Ts.CSS[e+t]=c,c}function Qh(i,e,t){if(e in i.style){var n=e.replace(/([a-z])([A-Z])/g,"$1-$2").toLowerCase(),r=i.style[e]||getComputedStyle(i).getPropertyValue(n)||"0";return t?el(i,r,t):r}}function tl(i,e){if(_e.dom(i)&&!_e.inp(i)&&(!_e.nil(Jt(i,e))||_e.svg(i)&&i[e]))return"attribute";if(_e.dom(i)&&Qa(rM,e))return"transform";if(_e.dom(i)&&e!=="transform"&&Qh(i,e))return"css";if(i[e]!=null)return"object"}function Kh(i){if(_e.dom(i)){for(var e=i.style.transform||"",t=/(\w+)\(([^)]*)\)/g,n=new Map,r;r=t.exec(e);)n.set(r[1],r[2]);return n}}function fM(i,e,t,n){var r=ar(e,"scale")?1:0+hM(e),s=Kh(i).get(e)||r;return t&&(t.transforms.list.set(e,s),t.transforms.last=e),n?el(i,s,n):s}function nl(i,e,t,n){switch(tl(i,e)){case"transform":return fM(i,e,n,t);case"css":return Qh(i,e,t);case"attribute":return Jt(i,e);default:return i[e]||0}}function il(i,e){var t=/^(\*=|\+=|-=)/.exec(i);if(!t)return i;var n=fn(i)||0,r=parseFloat(e),s=parseFloat(i.replace(t[0],""));switch(t[0][0]){case"+":return r+s+n;case"-":return r-s+n;case"*":return r*s+n}}function ef(i,e){if(_e.col(i))return uM(i);if(/\s/g.test(i))return i;var t=fn(i),n=t?i.substr(0,i.length-t.length):i;return e?n+e:n}function rl(i,e){return Math.sqrt(Math.pow(e.x-i.x,2)+Math.pow(e.y-i.y,2))}function dM(i){return Math.PI*2*Jt(i,"r")}function pM(i){return Jt(i,"width")*2+Jt(i,"height")*2}function mM(i){return rl({x:Jt(i,"x1"),y:Jt(i,"y1")},{x:Jt(i,"x2"),y:Jt(i,"y2")})}function tf(i){for(var e=i.points,t=0,n,r=0;r<e.numberOfItems;r++){var s=e.getItem(r);r>0&&(t+=rl(n,s)),n=s}return t}function gM(i){var e=i.points;return tf(i)+rl(e.getItem(e.numberOfItems-1),e.getItem(0))}function nf(i){if(i.getTotalLength)return i.getTotalLength();switch(i.tagName.toLowerCase()){case"circle":return dM(i);case"rect":return pM(i);case"line":return mM(i);case"polyline":return tf(i);case"polygon":return gM(i)}}function _M(i){var e=nf(i);return i.setAttribute("stroke-dasharray",e),e}function vM(i){for(var e=i.parentNode;_e.svg(e)&&_e.svg(e.parentNode);)e=e.parentNode;return e}function rf(i,e){var t=e||{},n=t.el||vM(i),r=n.getBoundingClientRect(),s=Jt(n,"viewBox"),o=r.width,a=r.height,l=t.viewBox||(s?s.split(" "):[0,0,o,a]);return{el:n,viewBox:l,x:l[0]/1,y:l[1]/1,w:o,h:a,vW:l[2],vH:l[3]}}function xM(i,e){var t=_e.str(i)?Jh(i)[0]:i,n=e||100;return function(r){return{property:r,el:t,svg:rf(t),totalLength:nf(t)*(n/100)}}}function yM(i,e,t){function n(h){h===void 0&&(h=0);var u=e+h>=1?e+h:0;return i.el.getPointAtLength(u)}var r=rf(i.el,i.svg),s=n(),o=n(-1),a=n(1),l=t?1:r.w/r.vW,c=t?1:r.h/r.vH;switch(i.property){case"x":return(s.x-r.x)*l;case"y":return(s.y-r.y)*c;case"angle":return Math.atan2(a.y-o.y,a.x-o.x)*180/Math.PI}}function lu(i,e){var t=/[+-]?\d*\.?\d+(?:\.\d+)?(?:[eE][+-]?\d+)?/g,n=ef(_e.pth(i)?i.totalLength:i,e)+"";return{original:n,numbers:n.match(t)?n.match(t).map(Number):[0],strings:_e.str(i)||e?n.split(t):[]}}function sl(i){var e=i?Xs(_e.arr(i)?i.map(au):au(i)):[];return qs(e,function(t,n,r){return r.indexOf(t)===n})}function sf(i){var e=sl(i);return e.map(function(t,n){return{target:t,id:n,total:e.length,transforms:{list:Kh(t)}}})}function MM(i,e){var t=Ka(e);if(/^spring/.test(t.easing)&&(t.duration=$h(t.easing)),_e.arr(i)){var n=i.length,r=n===2&&!_e.obj(i[0]);r?i={value:i}:_e.fnc(e.duration)||(t.duration=e.duration/n)}var s=_e.arr(i)?i:[i];return s.map(function(o,a){var l=_e.obj(o)&&!_e.pth(o)?o:{value:o};return _e.und(l.delay)&&(l.delay=a?0:e.delay),_e.und(l.endDelay)&&(l.endDelay=a===s.length-1?e.endDelay:0),l}).map(function(o){return Ys(o,t)})}function bM(i){for(var e=qs(Xs(i.map(function(s){return Object.keys(s)})),function(s){return _e.key(s)}).reduce(function(s,o){return s.indexOf(o)<0&&s.push(o),s},[]),t={},n=function(s){var o=e[s];t[o]=i.map(function(a){var l={};for(var c in a)_e.key(c)?c==o&&(l.value=a[c]):l[c]=a[c];return l})},r=0;r<e.length;r++)n(r);return t}function wM(i,e){var t=[],n=e.keyframes;n&&(e=Ys(bM(n),e));for(var r in e)_e.key(r)&&t.push({name:r,tweens:MM(e[r],i)});return t}function SM(i,e){var t={};for(var n in i){var r=ga(i[n],e);_e.arr(r)&&(r=r.map(function(s){return ga(s,e)}),r.length===1&&(r=r[0])),t[n]=r}return t.duration=parseFloat(t.duration),t.delay=parseFloat(t.delay),t}function TM(i,e){var t;return i.tweens.map(function(n){var r=SM(n,e),s=r.value,o=_e.arr(s)?s[1]:s,a=fn(o),l=nl(e.target,i.name,a,e),c=t?t.to.original:l,h=_e.arr(s)?s[0]:c,u=fn(h)||fn(l),f=a||u;return _e.und(o)&&(o=c),r.from=lu(h,f),r.to=lu(il(o,h),f),r.start=t?t.end:0,r.end=r.start+r.delay+r.duration+r.endDelay,r.easing=Ja(r.easing,r.duration),r.isPath=_e.pth(s),r.isPathTargetInsideSVG=r.isPath&&_e.svg(e.target),r.isColor=_e.col(r.from.original),r.isColor&&(r.round=1),t=r,r})}var of={css:function(i,e,t){return i.style[e]=t},attribute:function(i,e,t){return i.setAttribute(e,t)},object:function(i,e,t){return i[e]=t},transform:function(i,e,t,n,r){if(n.list.set(e,t),e===n.last||r){var s="";n.list.forEach(function(o,a){s+=a+"("+o+") "}),i.style.transform=s}}};function af(i,e){var t=sf(i);t.forEach(function(n){for(var r in e){var s=ga(e[r],n),o=n.target,a=fn(s),l=nl(o,r,a,n),c=a||fn(l),h=il(ef(s,c),l),u=tl(o,r);of[u](o,r,h,n.transforms,!0)}})}function EM(i,e){var t=tl(i.target,e.name);if(t){var n=TM(e,i),r=n[n.length-1];return{type:t,property:e.name,animatable:i,tweens:n,duration:r.end,delay:n[0].delay,endDelay:r.endDelay}}}function AM(i,e){return qs(Xs(i.map(function(t){return e.map(function(n){return EM(t,n)})})),function(t){return!_e.und(t)})}function lf(i,e){var t=i.length,n=function(s){return s.timelineOffset?s.timelineOffset:0},r={};return r.duration=t?Math.max.apply(Math,i.map(function(s){return n(s)+s.duration})):e.duration,r.delay=t?Math.min.apply(Math,i.map(function(s){return n(s)+s.delay})):e.delay,r.endDelay=t?r.duration-Math.max.apply(Math,i.map(function(s){return n(s)+s.duration-s.endDelay})):e.endDelay,r}var cu=0;function CM(i){var e=ma(Yh,i),t=ma(Za,i),n=wM(t,i),r=sf(i.targets),s=AM(r,n),o=lf(s,t),a=cu;return cu++,Ys(e,{id:a,children:[],animatables:r,animations:s,duration:o.duration,delay:o.delay,endDelay:o.endDelay})}var Ut=[],cf=function(){var i;function e(){!i&&(!uu()||!Qe.suspendWhenDocumentHidden)&&Ut.length>0&&(i=requestAnimationFrame(t))}function t(r){for(var s=Ut.length,o=0;o<s;){var a=Ut[o];a.paused?(Ut.splice(o,1),s--):(a.tick(r),o++)}i=o>0?requestAnimationFrame(t):void 0}function n(){Qe.suspendWhenDocumentHidden&&(uu()?i=cancelAnimationFrame(i):(Ut.forEach(function(r){return r._onDocumentVisibility()}),cf()))}return typeof document<"u"&&document.addEventListener("visibilitychange",n),e}();function uu(){return!!document&&document.hidden}function Qe(i){i===void 0&&(i={});var e=0,t=0,n=0,r,s=0,o=null;function a(m){var y=window.Promise&&new Promise(function(x){return o=x});return m.finished=y,y}var l=CM(i);a(l);function c(){var m=l.direction;m!=="alternate"&&(l.direction=m!=="normal"?"normal":"reverse"),l.reversed=!l.reversed,r.forEach(function(y){return y.reversed=l.reversed})}function h(m){return l.reversed?l.duration-m:m}function u(){e=0,t=h(l.currentTime)*(1/Qe.speed)}function f(m,y){y&&y.seek(m-y.timelineOffset)}function d(m){if(l.reversePlayback)for(var x=s;x--;)f(m,r[x]);else for(var y=0;y<s;y++)f(m,r[y])}function g(m){for(var y=0,x=l.animations,M=x.length;y<M;){var R=x[y],D=R.animatable,O=R.tweens,j=O.length-1,k=O[j];j&&(k=qs(O,function(X){return m<X.end})[0]||k);for(var P=Zt(m-k.start-k.delay,0,k.duration)/k.duration,w=isNaN(P)?1:k.easing(P),b=k.to.strings,F=k.round,I=[],N=k.to.numbers.length,z=void 0,ee=0;ee<N;ee++){var re=void 0,G=k.to.numbers[ee],W=k.from.numbers[ee]||0;k.isPath?re=yM(k.value,w*G,k.isPathTargetInsideSVG):re=W+w*(G-W),F&&(k.isColor&&ee>2||(re=Math.round(re*F)/F)),I.push(re)}var ae=b.length;if(!ae)z=I[0];else{z=b[0];for(var ie=0;ie<ae;ie++){b[ie];var ue=b[ie+1],Re=I[ie];isNaN(Re)||(ue?z+=Re+ue:z+=Re+" ")}}of[R.type](D.target,R.property,z,D.transforms),R.currentValue=z,y++}}function _(m){l[m]&&!l.passThrough&&l[m](l)}function v(){l.remaining&&l.remaining!==!0&&l.remaining--}function p(m){var y=l.duration,x=l.delay,M=y-l.endDelay,R=h(m);l.progress=Zt(R/y*100,0,100),l.reversePlayback=R<l.currentTime,r&&d(R),!l.began&&l.currentTime>0&&(l.began=!0,_("begin")),!l.loopBegan&&l.currentTime>0&&(l.loopBegan=!0,_("loopBegin")),R<=x&&l.currentTime!==0&&g(0),(R>=M&&l.currentTime!==y||!y)&&g(y),R>x&&R<M?(l.changeBegan||(l.changeBegan=!0,l.changeCompleted=!1,_("changeBegin")),_("change"),g(R)):l.changeBegan&&(l.changeCompleted=!0,l.changeBegan=!1,_("changeComplete")),l.currentTime=Zt(R,0,y),l.began&&_("update"),m>=y&&(t=0,v(),l.remaining?(e=n,_("loopComplete"),l.loopBegan=!1,l.direction==="alternate"&&c()):(l.paused=!0,l.completed||(l.completed=!0,_("loopComplete"),_("complete"),!l.passThrough&&"Promise"in window&&(o(),a(l)))))}return l.reset=function(){var m=l.direction;l.passThrough=!1,l.currentTime=0,l.progress=0,l.paused=!0,l.began=!1,l.loopBegan=!1,l.changeBegan=!1,l.completed=!1,l.changeCompleted=!1,l.reversePlayback=!1,l.reversed=m==="reverse",l.remaining=l.loop,r=l.children,s=r.length;for(var y=s;y--;)l.children[y].reset();(l.reversed&&l.loop!==!0||m==="alternate"&&l.loop===1)&&l.remaining++,g(l.reversed?l.duration:0)},l._onDocumentVisibility=u,l.set=function(m,y){return af(m,y),l},l.tick=function(m){n=m,e||(e=n),p((n+(t-e))*Qe.speed)},l.seek=function(m){p(h(m))},l.pause=function(){l.paused=!0,u()},l.play=function(){l.paused&&(l.completed&&l.reset(),l.paused=!1,Ut.push(l),u(),cf())},l.reverse=function(){c(),l.completed=!l.reversed,u()},l.restart=function(){l.reset(),l.play()},l.remove=function(m){var y=sl(m);uf(y,l)},l.reset(),l.autoplay&&l.play(),l}function hu(i,e){for(var t=e.length;t--;)Qa(i,e[t].animatable.target)&&e.splice(t,1)}function uf(i,e){var t=e.animations,n=e.children;hu(i,t);for(var r=n.length;r--;){var s=n[r],o=s.animations;hu(i,o),!o.length&&!s.children.length&&n.splice(r,1)}!t.length&&!n.length&&e.pause()}function LM(i){for(var e=sl(i),t=Ut.length;t--;){var n=Ut[t];uf(e,n)}}function RM(i,e){e===void 0&&(e={});var t=e.direction||"normal",n=e.easing?Ja(e.easing):null,r=e.grid,s=e.axis,o=e.from||0,a=o==="first",l=o==="center",c=o==="last",h=_e.arr(i),u=parseFloat(h?i[0]:i),f=h?parseFloat(i[1]):0,d=fn(h?i[1]:i)||0,g=e.start||0+(h?u:0),_=[],v=0;return function(p,m,y){if(a&&(o=0),l&&(o=(y-1)/2),c&&(o=y-1),!_.length){for(var x=0;x<y;x++){if(!r)_.push(Math.abs(o-x));else{var M=l?(r[0]-1)/2:o%r[0],R=l?(r[1]-1)/2:Math.floor(o/r[0]),D=x%r[0],O=Math.floor(x/r[0]),j=M-D,k=R-O,P=Math.sqrt(j*j+k*k);s==="x"&&(P=-j),s==="y"&&(P=-k),_.push(P)}v=Math.max.apply(Math,_)}n&&(_=_.map(function(b){return n(b/v)*v})),t==="reverse"&&(_=_.map(function(b){return s?b<0?b*-1:-b:Math.abs(v-b)}))}var w=h?(f-u)/v:u;return g+w*(Math.round(_[m]*100)/100)+d}}function PM(i){i===void 0&&(i={});var e=Qe(i);return e.duration=0,e.add=function(t,n){var r=Ut.indexOf(e),s=e.children;r>-1&&Ut.splice(r,1);function o(f){f.passThrough=!0}for(var a=0;a<s.length;a++)o(s[a]);var l=Ys(t,ma(Za,i));l.targets=l.targets||i.targets;var c=e.duration;l.autoplay=!1,l.direction=e.direction,l.timelineOffset=_e.und(n)?c:il(n,c),o(e),e.seek(l.timelineOffset);var h=Qe(l);o(h),s.push(h);var u=lf(s,i);return e.delay=u.delay,e.endDelay=u.endDelay,e.duration=u.duration,e.seek(0),e.reset(),e.autoplay&&e.play(),e},e}Qe.version="3.2.1";Qe.speed=1;Qe.suspendWhenDocumentHidden=!0;Qe.running=Ut;Qe.remove=LM;Qe.get=nl;Qe.set=af;Qe.convertPx=el;Qe.path=xM;Qe.setDashoffset=_M;Qe.stagger=RM;Qe.timeline=PM;Qe.easing=Ja;Qe.penner=Zh;Qe.random=function(i,e){return Math.floor(Math.random()*(e-i+1))+i};const IM=(i,e,t,n,r,s,o,a="bubble")=>async(l,c)=>{var x,M;const h=r/100,u=((M=(x=i==null?void 0:i.renderer)==null?void 0:x.xr)==null?void 0:M.getSession)&&i.renderer.xr.getSession(),f=!!(c&&u);f&&(i!=null&&i.reticleStuff)&&!i.reticleStuff.hitTestSourceInitialized&&(i=await iM(i));const{stats:d,scene:g,camera:_,renderer:v,reticleStuff:p,cubes:m,controls:y}=i;if(y&&typeof y.update=="function"&&y.update(),f&&p&&p.active){if(p.hitTestSourceInitialized){const R=c.getHitTestResults(p.hitTestSource);if(R.length>0){const O=R[0].getPose(p.localSpace);p.reticle&&(p.reticle.visible=!0,p.reticle.matrix.fromArray(O.transform.matrix))}else p.reticle&&(p.reticle.visible=!1)}}else p&&p.reticle&&(p.reticle.visible=!1);m&&m.pixelGrid!==void 0&&m.active===!0&&(a==="selection"?Ry:a==="quick"?Iy:a==="pancake"?nM:a==="cocktail"?jy:a==="insertion"?Ny:a==="binaryinsertion"?zy:a==="shell"?Oy:a==="heap"?Gy:a==="cycle"?Wy:a==="comb"?Xy:a==="gnome"?Zy:a==="oddeven"?Qy:a==="bitonic"?eM:Cy)(m,e,h,Qe),d&&typeof d.update=="function"&&d.update(),v.render(g,_)},hf=(i,e,t,n,r,s,o,a)=>{const{stats:l,scene:c,camera:h,renderer:u,reticleStuff:f,cubes:d}=i;return i.renderer.setAnimationLoop(IM(i,e,t,n,r,s,o,a)),{stats:l,scene:c,camera:h,renderer:u,reticleStuff:f,cubes:d}},ff=(i,e,t,n,r,s,o)=>{const a=t/100,l=n/100,c=r/100,h=new vi,u=e*i,f=Array.from({length:u},()=>255-Math.ceil(255*Math.random())).sort((_,v)=>_-v),d=[];let g=0;for(let _=0;_<e;_++)for(let v=0;v<i;v++){const p=f[g++],m=new Bi(a,l,c),y=new br({color:`rgb(${p},${p},${p})`}),x=new gt(m,y);x.position.z=v*c,x.position.y=_*l,x.value=p,x.bubble_value=p,x.selection_value=p,x.castShadow=!0,h.add(x),d.push(x)}return s.add(h),{pixelGridGroup:h,pixelGridCubes:d}},df=()=>{const i=document.getElementById("sorting-vis");if(!i)return null;let e=document.getElementById("ar-container");return e||(e=document.createElement("div"),e.id="ar-container",i.appendChild(e)),e.style.display="block",e.style.position="absolute",e.style.top="0",e.style.left="0",e.style.width="100%",e.style.height="100%",e},DM=()=>({active:!1,reticle:{visible:!1},hitTestSourceInitialized:!1,hitTestSource:null,localSpace:null}),NM=(i,e)=>{const{cols:t,rows:n,speed:r,scaleX:s,scaleY:o,scaleZ:a,algorithm:l="bubble",diffuseSwapsPerTick:c,diffuseNeighborRadius:h,unsortPauseMs:u}=e||{};if(i.setAnimationLoop(null),i&&typeof i.__bubbleSortCleanup=="function"){try{i.__bubbleSortCleanup()}catch{}i.__bubbleSortCleanup=null}const f=df();if(!f)return;f.innerHTML="";const d=Vh(),g=new Hs,_=new mt(60,window.innerWidth/window.innerHeight,.01,100);g.add(new Uh(16777215,.6));const v=new Va(16777215,12303359,.8);v.position.set(.5,1,.25),g.add(v),i.setPixelRatio(window.devicePixelRatio),i.setSize(window.innerWidth,window.innerHeight),f.appendChild(i.domElement),f.appendChild(d.domElement??d.dom);const p=new _y(_,i.domElement);p.enableDamping=!0;const m=DM(),y={pixelGridGroup:{},pixelGrid:[],moving:!1,active:!1,currentIndex:0},x=console.log;if(i&&i.domElement&&i.__bubbleSortWebglListenersAttached!==!0){i.__bubbleSortWebglListenersAttached=!0;const I=()=>({cubeCount:Array.isArray(y.pixelGrid)?y.pixelGrid.length:0,active:!!y.active,diffusing:!!y.diffusing,pixelRatio:typeof i.getPixelRatio=="function"?i.getPixelRatio():void 0}),N=ee=>{try{ee&&typeof ee.preventDefault=="function"&&ee.preventDefault()}catch{}typeof x=="function"&&x("[webgl] context lost",{mode:"desktop",...I()})},z=()=>{typeof x=="function"&&x("[webgl] context restored",{mode:"desktop",...I()})};i.domElement.addEventListener("webglcontextlost",N,!1),i.domElement.addEventListener("webglcontextrestored",z,!1),i.__bubbleSortWebglListenerFns={onLost:N,onRestored:z}}const{pixelGridGroup:M,pixelGridCubes:R}=ff(t,n,s,o,a,g);y.pixelGrid=R,y.pixelGridGroup=M,y.gridCols=t,y.gridRows=n,c!=null&&Number.isFinite(Number(c))&&(y.diffuseSwapsPerTick=Math.max(0,Number(c))),h!=null&&Number.isFinite(Number(h))&&(y.diffuseNeighborRadius=Math.max(1,Math.floor(Number(h)))),u!=null&&Number.isFinite(Number(u))&&(y.unsortPauseMs=Math.max(0,Number(u))),y.moving=!1,y.active=!1,y.currentIndex=0,y.passHadSwap=!1;const D=y&&typeof y.unsortPauseMs=="number"?y.unsortPauseMs:1e4;ja(y,D,I=>{I.active=!1,$a(I,{targetRatio:1,maxMs:3e3,swapsPerTick:I&&typeof I.diffuseSwapsPerTick=="number"&&I.diffuseSwapsPerTick>0?I.diffuseSwapsPerTick:void 0,neighborRadius:I&&typeof I.diffuseNeighborRadius=="number"?I.diffuseNeighborRadius:void 0,onComplete:({ratio:N,reason:z,elapsedMs:ee,maxMs:re})=>{if(z==="timeout"&&typeof x=="function"){const G=Array.isArray(I.pixelGrid)?I.pixelGrid.length:0;x("[unsort] diffuse timeout",{cubeCount:G,inversionRatio:N,elapsedMs:ee,maxMs:re})}if(I.moving=!1,I.currentIndex=0,I.passHadSwap=!1,I.sortStartMs=Ar(),I.sortEndMs=void 0,I.sortRunId=(I.sortRunId||0)+1,typeof x=="function"){const G=Array.isArray(I.pixelGrid)?I.pixelGrid.length:0;x(`[sort] #${I.sortRunId} start`,{startMs:I.sortStartMs,cubeCount:G,inversionRatio:N})}I.active=!0}})});const O=new Nt().setFromObject(M),j=new C,k=new C;O.getSize(j),O.getCenter(k);const P=Math.max(j.x,j.y,j.z);_.position.set(k.x+P*.8,k.y+P*.6,k.z+P*2),_.lookAt(k),p.target.copy(k),p.update(),hf({stats:d,scene:g,camera:_,renderer:i,reticleStuff:m,cubes:y,controls:p},r,s,o,a,t,n,l);const w=Wh(_,i,window);window.addEventListener("resize",w);const b=I=>{if(I){if(Array.isArray(I)){for(const N of I)b(N);return}typeof I.dispose=="function"&&I.dispose()}},F=I=>{I&&(I.geometry&&typeof I.geometry.dispose=="function"&&I.geometry.dispose(),I.material&&b(I.material))};i.__bubbleSortCleanup=()=>{try{i.setAnimationLoop(null)}catch{}try{if(y&&y.unsortTimeoutId!=null){const{clearTimeout:N}=globalThis;typeof N=="function"&&N(y.unsortTimeoutId),y.unsortTimeoutId=null}const{clearInterval:I}=globalThis;typeof I=="function"?Vn(y,I):Vn(y)}catch{}try{window.removeEventListener("resize",w)}catch{}try{p&&typeof p.dispose=="function"&&p.dispose()}catch{}try{g&&typeof g.traverse=="function"&&g.traverse(F)}catch{}}},FM=(i,e,t,n,r,s,o,a,l)=>()=>{if(i.active=!1,i.reticle&&(i.reticle.visible=!1),e.hasGrid!==!0){const{pixelGridGroup:c,pixelGridCubes:h}=ff(t,n,r,s,o,a);e.pixelGrid=h,e.pixelGridGroup=c,e.gridCols=t,e.gridRows=n,e.moving=!1,e.active=!1,e.currentIndex=0,e.passHadSwap=!1,e.hasGrid=!0;const u=e&&typeof e.unsortPauseMs=="number"?e.unsortPauseMs:1e4;ja(e,u,g=>{g.active=!1,$a(g,{targetRatio:1,maxMs:3e3,swapsPerTick:g&&typeof g.diffuseSwapsPerTick=="number"&&g.diffuseSwapsPerTick>0?g.diffuseSwapsPerTick:void 0,neighborRadius:g&&typeof g.diffuseNeighborRadius=="number"?g.diffuseNeighborRadius:void 0,onComplete:({ratio:_,reason:v,elapsedMs:p,maxMs:m})=>{if(v==="timeout"){const y=Array.isArray(g.pixelGrid)?g.pixelGrid.length:0;console.log("[unsort] diffuse timeout",{cubeCount:y,inversionRatio:_,elapsedMs:p,maxMs:m})}g.moving=!1,g.currentIndex=0,g.passHadSwap=!1,g.sortStartMs=Ar(),g.sortEndMs=void 0,g.sortRunId=(g.sortRunId||0)+1;{const y=Array.isArray(g.pixelGrid)?g.pixelGrid.length:0;console.log(`[sort] #${g.sortRunId} start`,{startMs:g.sortStartMs,cubeCount:y,inversionRatio:_})}g.active=!0}})});const f=new C;l.getWorldDirection(f);const d=Math.atan2(f.x,f.z);e.pixelGridGroup.rotateY(d),c.position.setFromMatrixPosition(i.reticle.matrix)}},zM=({scene:i,stats:e,camera:t,renderer:n})=>{const r={};r.active=!0;const s=new Ha(.15,.2,32).rotateX(-Math.PI/2),o=new br;return r.reticle=new gt(s,o),r.reticle.matrixAutoUpdate=!1,r.reticle.visible=!1,i.add(r.reticle),r},BM=(i,e)=>{const{cols:t,rows:n,speed:r,scaleX:s,scaleY:o,scaleZ:a,algorithm:l="bubble",diffuseSwapsPerTick:c,diffuseNeighborRadius:h,unsortPauseMs:u}=e||{};if(i.setAnimationLoop(null),i&&typeof i.__bubbleSortCleanup=="function"){try{i.__bubbleSortCleanup()}catch{}i.__bubbleSortCleanup=null}const f=df();if(!f)return;f.innerHTML="";const d=Vh(),g=new Hs,_=new mt(75,window.innerWidth/window.innerHeight,.01,50),v=new Va(16777215,12303359,1);v.position.set(.5,1,.25),g.add(v),i.setPixelRatio(Math.min(window.devicePixelRatio||1,1)),i.setSize(window.innerWidth,window.innerHeight),f.appendChild(i.domElement),f.appendChild(d.domElement??d.dom);const p=zM({stats:d,scene:g,camera:_,renderer:i}),m={pixelGridGroup:{},pixelGrid:[],moving:!1,active:!1,currentIndex:0};if(c!=null&&Number.isFinite(Number(c))&&(m.diffuseSwapsPerTick=Math.max(0,Number(c))),h!=null&&Number.isFinite(Number(h))&&(m.diffuseNeighborRadius=Math.max(1,Math.floor(Number(h)))),u!=null&&Number.isFinite(Number(u))&&(m.unsortPauseMs=Math.max(0,Number(u))),i&&i.domElement&&i.__bubbleSortWebglListenersAttached!==!0){i.__bubbleSortWebglListenersAttached=!0;const O=()=>({cubeCount:Array.isArray(m.pixelGrid)?m.pixelGrid.length:0,active:!!m.active,diffusing:!!m.diffusing,pixelRatio:typeof i.getPixelRatio=="function"?i.getPixelRatio():void 0}),j=P=>{try{P&&typeof P.preventDefault=="function"&&P.preventDefault()}catch{}console.log("[webgl] context lost",{mode:"ar",...O()})},k=()=>{console.log("[webgl] context restored",{mode:"ar",...O()})};i.domElement.addEventListener("webglcontextlost",j,!1),i.domElement.addEventListener("webglcontextrestored",k,!1),i.__bubbleSortWebglListenerFns={onLost:j,onRestored:k}}const y=i.xr.getController(0),x=FM(p,m,t,n,s,o,a,g,_);y.addEventListener("select",x),g.add(y),hf({stats:d,scene:g,camera:_,renderer:i,reticleStuff:p,cubes:m},r,s,o,a,t,n,l);const M=Wh(_,i,window);window.addEventListener("resize",M);const R=O=>{if(O){if(Array.isArray(O)){for(const j of O)R(j);return}typeof O.dispose=="function"&&O.dispose()}},D=O=>{O&&(O.geometry&&typeof O.geometry.dispose=="function"&&O.geometry.dispose(),O.material&&R(O.material))};i.__bubbleSortCleanup=()=>{try{i.setAnimationLoop(null)}catch{}try{m&&m.unsortTimeoutId!=null&&(typeof clearTimeout=="function"&&clearTimeout(m.unsortTimeoutId),m.unsortTimeoutId=null),typeof clearInterval=="function"?Vn(m,clearInterval):Vn(m)}catch{}try{window.removeEventListener("resize",M)}catch{}try{y.removeEventListener("select",x),g.remove(y)}catch{}try{g&&typeof g.traverse=="function"&&g.traverse(D)}catch{}}},OM=(i,e,t,n,r,s,o={})=>{const a=dy(),l={cols:i,rows:e,speed:t,scaleX:n,scaleY:r,scaleZ:s,...o},{algorithm:c,diffuseSwapsPerTick:h,diffuseNeighborRadius:u,unsortPauseMs:f}=o||{},d=`/?speed=${t}&scalex=${n}&scaley=${r}&scalez=${s}&cols=${i}&rows=${e}&algorithm=${c??""}&diffuseSwapsPerTick=${h??""}&diffuseNeighborRadius=${u??""}&unsortPauseMs=${f??""}`;gy(a,g=>NM(g,l),g=>BM(g,l),{locationString:d,displayName:"START"})};Vu(Gu("sortingvis"));const[kM]=Xu({sortingContainer:{width:"100%",height:"100%",backgroundImage:"url(/img/bg1.png)",backgroundClip:"border-box",backgroundSize:"cover",backgroundRepeat:"none",position:"absolute"}}),UM=i=>{const e=Math.abs(parseInt(i.cols)||5),t=Math.abs(parseInt(i.rows)||4),n=Math.abs(parseFloat(i.speed)||1),r=Math.abs(parseFloat(i.scalex)||10),s=Math.abs(parseFloat(i.scaley)||10),o=Math.abs(parseFloat(i.scalez)||10),a=typeof i.algorithm=="string"&&i.algorithm.length>0?i.algorithm:"bubble",l=Math.max(0,Math.floor(parseFloat(i.diffuseSwapsPerTick))||0),c=Math.max(1,Math.floor(parseFloat(i.diffuseNeighborRadius))||1),h=Math.max(0,Math.floor(parseFloat(i.unsortPauseMs))||1e4),[u,f]=Nu(yd,{cols:e,rows:t,speed:n,scaleX:r,scaleY:s,scaleZ:o,algorithm:a,diffuseSwapsPerTick:l,diffuseNeighborRadius:c,unsortPauseMs:h});return Fu(()=>{if(typeof window<"u"&&window.history&&typeof window.history.replaceState=="function")try{const d=new URL(window.location.href);d.searchParams.set("cols",String(u.cols)),d.searchParams.set("rows",String(u.rows)),d.searchParams.set("speed",String(u.speed)),d.searchParams.set("scalex",String(u.scaleX)),d.searchParams.set("scaley",String(u.scaleY)),d.searchParams.set("scalez",String(u.scaleZ)),d.searchParams.set("algorithm",String(u.algorithm||"bubble")),d.searchParams.set("diffuseSwapsPerTick",String(u.diffuseSwapsPerTick)),d.searchParams.set("diffuseNeighborRadius",String(u.diffuseNeighborRadius)),d.searchParams.set("unsortPauseMs",String(u.unsortPauseMs)),window.history.replaceState({},"",`${d.pathname}?${d.searchParams.toString()}`)}catch{}OM(u.cols,u.rows,u.speed,u.scaleX,u.scaleY,u.scaleZ,{algorithm:u.algorithm,diffuseSwapsPerTick:u.diffuseSwapsPerTick,diffuseNeighborRadius:u.diffuseNeighborRadius,unsortPauseMs:u.unsortPauseMs})},[u.cols,u.rows,u.speed,u.scaleX,u.scaleY,u.scaleZ,u.algorithm,u.diffuseSwapsPerTick,u.diffuseNeighborRadius,u.unsortPauseMs]),Si`
    <div id="sorting-vis" className="${kM.sortingContainer}">
      <div id="dom-overlay">
        <div id="console-ui"></div>
      </div>
      <${xd}
        cols="${u.cols}"
        rows="${u.rows}"
        speed="${u.speed}"
        scaleX="${u.scaleX}"
        scaleY="${u.scaleY}"
        scaleZ="${u.scaleZ}"
        algorithm="${u.algorithm}"
        diffuseSwapsPerTick="${u.diffuseSwapsPerTick}"
        diffuseNeighborRadius="${u.diffuseNeighborRadius}"
        unsortPauseMs="${u.unsortPauseMs}"
        dispatch="${f}"
      />
    </div>
  `},HM=i=>Si`
    <${Ll} >
      <${Kt} url="${i.url}">
      	<${UM} path="/" />
      </${Kt}>
    </${Ll} >
  `,fu=document.getElementById("goodthing");fu&&Sf(Si`<${HM} />`,fu);
