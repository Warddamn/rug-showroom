import{V as It,M as Pi,Q as rn,E as bn,P as Xd,O as hu,C as bw,L as UM,B as LM,a as OM,F as PM,G as Fa,b as Ew,c as Si,d as xn,e as su,f as ou,g as Ld,T as Xg,S as zM,h as zl,R as SS,i as Tw,j as IM,k as Aw}from"./index-amOdoJkt.js";function ww(a){return a&&a.__esModule&&Object.prototype.hasOwnProperty.call(a,"default")?a.default:a}var Cm={exports:{}},Lc={};/**
 * @license React
 * react-jsx-runtime.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var MS;function Rw(){if(MS)return Lc;MS=1;var a=Symbol.for("react.transitional.element"),t=Symbol.for("react.fragment");function i(s,l,c){var d=null;if(c!==void 0&&(d=""+c),l.key!==void 0&&(d=""+l.key),"key"in l){c={};for(var h in l)h!=="key"&&(c[h]=l[h])}else c=l;return l=c.ref,{$$typeof:a,type:s,key:d,ref:l!==void 0?l:null,props:c}}return Lc.Fragment=t,Lc.jsx=i,Lc.jsxs=i,Lc}var bS;function Cw(){return bS||(bS=1,Cm.exports=Rw()),Cm.exports}var G=Cw(),Dm={exports:{}},pe={};/**
 * @license React
 * react.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var ES;function Dw(){if(ES)return pe;ES=1;var a=Symbol.for("react.transitional.element"),t=Symbol.for("react.portal"),i=Symbol.for("react.fragment"),s=Symbol.for("react.strict_mode"),l=Symbol.for("react.profiler"),c=Symbol.for("react.consumer"),d=Symbol.for("react.context"),h=Symbol.for("react.forward_ref"),p=Symbol.for("react.suspense"),m=Symbol.for("react.memo"),_=Symbol.for("react.lazy"),g=Symbol.for("react.activity"),v=Symbol.for("react.view_transition"),y=Symbol.iterator;function b(F){return F===null||typeof F!="object"?null:(F=y&&F[y]||F["@@iterator"],typeof F=="function"?F:null)}var C={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},S=Object.assign,M={};function R(F,lt,et){this.props=F,this.context=lt,this.refs=M,this.updater=et||C}R.prototype.isReactComponent={},R.prototype.setState=function(F,lt){if(typeof F!="object"&&typeof F!="function"&&F!=null)throw Error("takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,F,lt,"setState")},R.prototype.forceUpdate=function(F){this.updater.enqueueForceUpdate(this,F,"forceUpdate")};function P(){}P.prototype=R.prototype;function N(F,lt,et){this.props=F,this.context=lt,this.refs=M,this.updater=et||C}var H=N.prototype=new P;H.constructor=N,S(H,R.prototype),H.isPureReactComponent=!0;var U=Array.isArray;function L(){}var E={H:null,A:null,T:null,S:null},O=Object.prototype.hasOwnProperty;function V(F,lt,et){var ht=et.ref;return{$$typeof:a,type:F,key:lt,ref:ht!==void 0?ht:null,props:et}}function z(F,lt){return V(F.type,lt,F.props)}function Z(F){return typeof F=="object"&&F!==null&&F.$$typeof===a}function tt(F){var lt={"=":"=0",":":"=2"};return"$"+F.replace(/[=:]/g,function(et){return lt[et]})}var ft=/\/+/g;function X(F,lt){return typeof F=="object"&&F!==null&&F.key!=null?tt(""+F.key):lt.toString(36)}function B(F){switch(F.status){case"fulfilled":return F.value;case"rejected":throw F.reason;default:switch(typeof F.status=="string"?F.then(L,L):(F.status="pending",F.then(function(lt){F.status==="pending"&&(F.status="fulfilled",F.value=lt)},function(lt){F.status==="pending"&&(F.status="rejected",F.reason=lt)})),F.status){case"fulfilled":return F.value;case"rejected":throw F.reason}}throw F}function W(F,lt,et,ht,yt){var Rt=typeof F;(Rt==="undefined"||Rt==="boolean")&&(F=null);var Dt=!1;if(F===null)Dt=!0;else switch(Rt){case"bigint":case"string":case"number":Dt=!0;break;case"object":switch(F.$$typeof){case a:case t:Dt=!0;break;case _:return Dt=F._init,W(Dt(F._payload),lt,et,ht,yt)}}if(Dt)return yt=yt(F),Dt=ht===""?"."+X(F,0):ht,U(yt)?(et="",Dt!=null&&(et=Dt.replace(ft,"$&/")+"/"),W(yt,lt,et,"",function(he){return he})):yt!=null&&(Z(yt)&&(yt=z(yt,et+(yt.key==null||F&&F.key===yt.key?"":(""+yt.key).replace(ft,"$&/")+"/")+Dt)),lt.push(yt)),1;Dt=0;var Mt=ht===""?".":ht+":";if(U(F))for(var kt=0;kt<F.length;kt++)ht=F[kt],Rt=Mt+X(ht,kt),Dt+=W(ht,lt,et,Rt,yt);else if(kt=b(F),typeof kt=="function")for(F=kt.call(F),kt=0;!(ht=F.next()).done;)ht=ht.value,Rt=Mt+X(ht,kt++),Dt+=W(ht,lt,et,Rt,yt);else if(Rt==="object"){if(typeof F.then=="function")return W(B(F),lt,et,ht,yt);throw lt=String(F),Error("Objects are not valid as a React child (found: "+(lt==="[object Object]"?"object with keys {"+Object.keys(F).join(", ")+"}":lt)+"). If you meant to render a collection of children, use an array instead.")}return Dt}function J(F,lt,et){if(F==null)return F;var ht=[],yt=0;return W(F,ht,"","",function(Rt){return lt.call(et,Rt,yt++)}),ht}function dt(F){if(F._status===-1){var lt=F._result,et=lt();et.then(function(ht){(F._status===0||F._status===-1)&&(F._status=1,F._result=ht,et.status===void 0&&(et.status="fulfilled",et.value=ht))},function(ht){(F._status===0||F._status===-1)&&(F._status=2,F._result=ht,et.status===void 0&&(et.status="rejected",et.reason=ht))}),F._status===-1&&(F._status=0,F._result=et)}if(F._status===1)return F._result.default;throw F._result}var pt=typeof reportError=="function"?reportError:function(F){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var lt=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof F=="object"&&F!==null&&typeof F.message=="string"?String(F.message):String(F),error:F});if(!window.dispatchEvent(lt))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",F);return}console.error(F)};function Tt(F){var lt=E.T,et={};et.types=lt!==null?lt.types:null,E.T=et;try{var ht=F(),yt=E.S;yt!==null&&yt(et,ht),typeof ht=="object"&&ht!==null&&typeof ht.then=="function"&&ht.then(L,pt)}catch(Rt){pt(Rt)}finally{lt!==null&&et.types!==null&&(lt.types=et.types),E.T=lt}}function zt(F){var lt=E.T;if(lt!==null){var et=lt.types;et===null?lt.types=[F]:et.indexOf(F)===-1&&et.push(F)}else Tt(zt.bind(null,F))}var re={map:J,forEach:function(F,lt,et){J(F,function(){lt.apply(this,arguments)},et)},count:function(F){var lt=0;return J(F,function(){lt++}),lt},toArray:function(F){return J(F,function(lt){return lt})||[]},only:function(F){if(!Z(F))throw Error("React.Children.only expected to receive a single React element child.");return F}};return pe.Activity=g,pe.Children=re,pe.Component=R,pe.Fragment=i,pe.Profiler=l,pe.PureComponent=N,pe.StrictMode=s,pe.Suspense=p,pe.ViewTransition=v,pe.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=E,pe.__COMPILER_RUNTIME={__proto__:null,c:function(F){return E.H.useMemoCache(F)}},pe.addTransitionType=zt,pe.cache=function(F){return function(){return F.apply(null,arguments)}},pe.cacheSignal=function(){return null},pe.cloneElement=function(F,lt,et){if(F==null)throw Error("The argument must be a React element, but you passed "+F+".");var ht=S({},F.props),yt=F.key;if(lt!=null)for(Rt in lt.key!==void 0&&(yt=""+lt.key),lt)!O.call(lt,Rt)||Rt==="key"||Rt==="__self"||Rt==="__source"||Rt==="ref"&&lt.ref===void 0||(ht[Rt]=lt[Rt]);var Rt=arguments.length-2;if(Rt===1)ht.children=et;else if(1<Rt){for(var Dt=Array(Rt),Mt=0;Mt<Rt;Mt++)Dt[Mt]=arguments[Mt+2];ht.children=Dt}return V(F.type,yt,ht)},pe.createContext=function(F){return F={$$typeof:d,_currentValue:F,_currentValue2:F,_threadCount:0,Provider:null,Consumer:null},F.Provider=F,F.Consumer={$$typeof:c,_context:F},F},pe.createElement=function(F,lt,et){var ht,yt={},Rt=null;if(lt!=null)for(ht in lt.key!==void 0&&(Rt=""+lt.key),lt)O.call(lt,ht)&&ht!=="key"&&ht!=="__self"&&ht!=="__source"&&(yt[ht]=lt[ht]);var Dt=arguments.length-2;if(Dt===1)yt.children=et;else if(1<Dt){for(var Mt=Array(Dt),kt=0;kt<Dt;kt++)Mt[kt]=arguments[kt+2];yt.children=Mt}if(F&&F.defaultProps)for(ht in Dt=F.defaultProps,Dt)yt[ht]===void 0&&(yt[ht]=Dt[ht]);return V(F,Rt,yt)},pe.createRef=function(){return{current:null}},pe.forwardRef=function(F){return{$$typeof:h,render:F}},pe.isValidElement=Z,pe.lazy=function(F){return{$$typeof:_,_payload:{_status:-1,_result:F},_init:dt}},pe.memo=function(F,lt){return{$$typeof:m,type:F,compare:lt===void 0?null:lt}},pe.startTransition=Tt,pe.unstable_useCacheRefresh=function(){return E.H.useCacheRefresh()},pe.use=function(F){return E.H.use(F)},pe.useActionState=function(F,lt,et){return E.H.useActionState(F,lt,et)},pe.useCallback=function(F,lt){return E.H.useCallback(F,lt)},pe.useContext=function(F){return E.H.useContext(F)},pe.useDebugValue=function(){},pe.useDeferredValue=function(F,lt){return E.H.useDeferredValue(F,lt)},pe.useEffect=function(F,lt){return E.H.useEffect(F,lt)},pe.useEffectEvent=function(F){return E.H.useEffectEvent(F)},pe.useId=function(){return E.H.useId()},pe.useImperativeHandle=function(F,lt,et){return E.H.useImperativeHandle(F,lt,et)},pe.useInsertionEffect=function(F,lt){return E.H.useInsertionEffect(F,lt)},pe.useLayoutEffect=function(F,lt){return E.H.useLayoutEffect(F,lt)},pe.useMemo=function(F,lt){return E.H.useMemo(F,lt)},pe.useOptimistic=function(F,lt){return E.H.useOptimistic(F,lt)},pe.useReducer=function(F,lt,et){return E.H.useReducer(F,lt,et)},pe.useRef=function(F){return E.H.useRef(F)},pe.useState=function(F){return E.H.useState(F)},pe.useSyncExternalStore=function(F,lt,et){return E.H.useSyncExternalStore(F,lt,et)},pe.useTransition=function(){return E.H.useTransition()},pe.version="19.3.0",pe}var TS;function qg(){return TS||(TS=1,Dm.exports=Dw()),Dm.exports}var ge=qg();const fn=ww(ge);var un="-ms-",iu="-moz-",qe="-webkit-",FM="comm",qd="rule",Wg="decl",Nw="@import",Uw="@namespace",BM="@keyframes",Lw="@layer",HM=Math.abs,jg=String.fromCharCode,V0=Object.assign;function Ow(a,t){return Pn(a,0)^45?(((t<<2^Pn(a,0))<<2^Pn(a,1))<<2^Pn(a,2))<<2^Pn(a,3):0}function GM(a){return a.trim()}function fr(a,t){return(a=t.exec(a))?a[0]:a}function Ae(a,t,i){return a.replace(t,i)}function yd(a,t,i){return a.indexOf(t,i)}function Pn(a,t){return a.charCodeAt(t)|0}function eo(a,t,i){return a.slice(t,i)}function ha(a){return a.length}function VM(a){return a.length}function $c(a,t){return t.push(a),a}function Pw(a,t){return a.map(t).join("")}function AS(a,t){return a.filter(function(i){return!fr(i,t)})}var Wd=1,Cl=1,kM=0,Ji=0,Dn=0,Il="";function jd(a,t,i,s,l,c,d,h){return{value:a,root:t,parent:i,type:s,props:l,children:c,line:Wd,column:Cl,length:d,return:"",siblings:h}}function os(a,t){return V0(jd("",null,null,"",null,null,0,a.siblings),a,{length:-a.length},t)}function jo(a){for(;a.root;)a=os(a.root,{children:[a]});$c(a,a.siblings)}function zw(){return Dn}function Iw(){return Dn=Ji>0?Pn(Il,--Ji):0,Cl--,Dn===10&&(Cl=1,Wd--),Dn}function ga(){return Dn=Ji<kM?Pn(Il,Ji++):0,Cl++,Dn===10&&(Cl=1,Wd++),Dn}function cs(){return Pn(Il,Ji)}function Sd(){return Ji}function Yd(a,t){return eo(Il,a,t)}function lu(a){switch(a){case 0:case 9:case 10:case 13:case 32:return 5;case 33:case 43:case 44:case 47:case 62:case 64:case 126:case 59:case 123:case 125:return 4;case 58:return 3;case 34:case 39:case 40:case 91:return 2;case 41:case 93:return 1}return 0}function Fw(a){return Wd=Cl=1,kM=ha(Il=a),Ji=0,[]}function Bw(a){return Il="",a}function Nm(a){return GM(Yd(Ji-1,k0(a===91?a+2:a===40?a+1:a)))}function Hw(a){for(;(Dn=cs())&&Dn<33;)ga();return lu(a)>2||lu(Dn)>3?"":" "}function Gw(a,t){for(;--t&&ga()&&!(Dn<48||Dn>102||Dn>57&&Dn<65||Dn>70&&Dn<97););return Yd(a,Sd()+(t<6&&cs()==32&&ga()==32))}function k0(a){for(;ga();)switch(Dn){case a:return Ji;case 34:case 39:a!==34&&a!==39&&k0(Dn);break;case 40:a===41&&k0(a);break;case 92:ga();break}return Ji}function Vw(a,t){for(;ga()&&a+Dn!==57;)if(a+Dn===84&&cs()===47)break;return"/*"+Yd(t,Ji-1)+"*"+jg(a===47?a:ga())}function kw(a){for(;!lu(cs());)ga();return Yd(a,Ji)}function Xw(a){return Bw(Md("",null,null,null,[""],a=Fw(a),0,[0],a))}function Md(a,t,i,s,l,c,d,h,p){for(var m=0,_=0,g=d,v=0,y=0,b=0,C=1,S=1,M=1,R=0,P="",N=l,H=c,U=s,L=P;S;)switch(b=R,R=ga()){case 40:if(b!=108&&Pn(L,g-1)==58){yd(L+=Ae(Nm(R),"&","&\f"),"&\f",HM(m?h[m-1]:0))!=-1&&(M=-1);break}case 34:case 39:case 91:L+=Nm(R);break;case 9:case 10:case 13:case 32:L+=Hw(b);break;case 92:L+=Gw(Sd()-1,7);continue;case 47:switch(cs()){case 42:case 47:$c(qw(Vw(ga(),Sd()),t,i,p),p),(lu(b||1)==5||lu(cs()||1)==5)&&ha(L)&&eo(L,-1,void 0)!==" "&&(L+=" ");break;default:L+="/"}break;case 123*C:h[m++]=ha(L)*M;case 125*C:case 59:case 0:switch(R){case 0:case 125:S=0;case 59+_:M==-1&&(L=Ae(L,/\f/g,"")),y>0&&(ha(L)-g||C===0&&b===47)&&$c(y>32?RS(L+";",s,i,g-1,p):RS(Ae(L," ","")+";",s,i,g-2,p),p);break;case 59:L+=";";default:if($c(U=wS(L,t,i,m,_,l,h,P,N=[],H=[],g,c),c),R===123)if(_===0)Md(L,t,U,U,N,c,g,h,H);else{switch(v){case 99:if(Pn(L,3)===110)break;case 108:if(Pn(L,2)===97)break;default:_=0;case 100:case 109:case 115:}_?Md(a,U,U,s&&$c(wS(a,U,U,0,0,l,h,P,l,N=[],g,H),H),l,H,g,h,s?N:H):Md(L,U,U,U,[""],H,0,h,H)}}m=_=y=0,C=M=1,P=L="",g=d;break;case 58:g=1+ha(L),y=b;default:if(C<1){if(R==123)--C;else if(R==125&&C++==0&&Iw()==125)continue}switch(L+=jg(R),R*C){case 38:M=_>0?1:(L+="\f",-1);break;case 44:h[m++]=(ha(L)-1)*M,M=1;break;case 64:cs()===45&&(L+=Nm(ga())),v=cs(),_=g=ha(P=L+=kw(Sd())),R++;break;case 45:b===45&&ha(L)==2&&(C=0)}}return c}function wS(a,t,i,s,l,c,d,h,p,m,_,g){for(var v=l-1,y=l===0?c:[""],b=VM(y),C=0,S=0,M=0;C<s;++C)for(var R=0,P=eo(a,v+1,v=HM(S=d[C])),N=a;R<b;++R)(N=GM(S>0?y[R]+" "+P:Ae(P,/&\f/g,y[R])))&&(p[M++]=N);return jd(a,t,i,l===0?qd:h,p,m,_,g)}function qw(a,t,i,s){return jd(a,t,i,FM,jg(zw()),eo(a,2,-2),0,s)}function RS(a,t,i,s,l){return jd(a,t,i,Wg,eo(a,0,s),eo(a,s+1,-1),s,l)}function XM(a,t,i){switch(Ow(a,t)){case 5103:return qe+"print-"+a+a;case 5737:case 4201:case 3177:case 3433:case 1641:case 4457:case 2921:case 5572:case 6356:case 5844:case 3191:case 6645:case 3005:case 4215:case 6389:case 5109:case 5365:case 5621:case 3829:case 6391:case 5879:case 5623:case 6135:case 4599:return qe+a+a;case 4855:return qe+a.replace("add","source-over").replace("substract","source-out").replace("intersect","source-in").replace("exclude","xor")+a;case 4789:return iu+a+a;case 5349:case 4246:case 4810:case 6968:case 2756:return qe+a+iu+a+un+a+a;case 5936:switch(Pn(a,t+11)){case 114:return qe+a+un+Ae(a,/[svh]\w+-[tblr]{2}/,"tb")+a;case 108:return qe+a+un+Ae(a,/[svh]\w+-[tblr]{2}/,"tb-rl")+a;case 45:return qe+a+un+Ae(a,/[svh]\w+-[tblr]{2}/,"lr")+a}case 6828:case 4268:case 2903:return qe+a+un+a+a;case 6165:return qe+a+un+"flex-"+a+a;case 5187:return qe+a+Ae(a,/(\w+).+(:[^]+)/,qe+"box-$1$2"+un+"flex-$1$2")+a;case 5443:return qe+a+un+"flex-item-"+Ae(a,/flex-|-self/g,"")+(fr(a,/flex-|baseline/)?"":un+"grid-row-"+Ae(a,/flex-|-self/g,""))+a;case 4675:return qe+a+un+"flex-line-pack"+Ae(a,/align-content|flex-|-self/g,"")+a;case 5548:return qe+a+un+Ae(a,"shrink","negative")+a;case 5292:return qe+a+un+Ae(a,"basis","preferred-size")+a;case 6060:return qe+"box-"+Ae(a,"-grow","")+qe+a+un+Ae(a,"grow","positive")+a;case 4554:return qe+Ae(a,/([^-])(transform)/g,"$1"+qe+"$2")+a;case 6187:return Ae(Ae(Ae(a,/(zoom-|grab)/,qe+"$1"),/(image-set)/,qe+"$1"),a,"")+a;case 5495:case 3959:return Ae(a,/(image-set\([^]*)/,qe+"$1$`$1");case 4968:return Ae(Ae(a,/(.+:)(flex-)?(.*)/,qe+"box-pack:$3"+un+"flex-pack:$3"),/space-between/,"justify")+qe+a+a;case 4200:if(!fr(a,/flex-|baseline/))return un+"grid-column-align"+eo(a,t)+a;break;case 2592:case 3360:return un+Ae(a,"template-","")+a;case 4384:case 3616:return i&&i.some(function(s,l){return t=l,fr(s.props,/grid-\w+-end/)})?~yd(a+(i=i[t].value),"span",0)?a:un+Ae(a,"-start","")+a+un+"grid-row-span:"+(~yd(i,"span",0)?fr(i,/\d+/):+fr(i,/\d+/)-+fr(a,/\d+/))+";":un+Ae(a,"-start","")+a;case 4896:case 4128:return i&&i.some(function(s){return fr(s.props,/grid-\w+-start/)})?a:un+Ae(Ae(a,"-end","-span"),"span ","")+a;case 4095:case 3583:case 4068:case 2532:return Ae(a,/(.+)-inline(.+)/,qe+"$1$2")+a;case 8116:case 7059:case 5753:case 5535:case 5445:case 5701:case 4933:case 4677:case 5533:case 5789:case 5021:case 4765:if(ha(a)-1-t>6)switch(Pn(a,t+1)){case 109:if(Pn(a,t+4)!==45)break;case 102:return Ae(a,/(.+:)(.+)-([^]+)/,"$1"+qe+"$2-$3$1"+iu+(Pn(a,t+3)==108?"$3":"$2-$3"))+a;case 115:return~yd(a,"stretch",0)?XM(Ae(a,"stretch","fill-available"),t,i)+a:a}break;case 5152:case 5920:return Ae(a,/(.+?):(\d+)(\s*\/\s*(span)?\s*(\d+))?(.*)/,function(s,l,c,d,h,p,m){return un+l+":"+c+m+(d?un+l+"-span:"+(h?p:+p-+c)+m:"")+a});case 4949:if(Pn(a,t+6)===121)return Ae(a,":",":"+qe)+a;break;case 6444:switch(Pn(a,Pn(a,14)===45?18:11)){case 120:return Ae(a,/(.+:)([^;\s!]+)(;|(\s+)?!.+)?/,"$1"+qe+(Pn(a,14)===45?"inline-":"")+"box$3$1"+qe+"$2$3$1"+un+"$2box$3")+a;case 100:return Ae(a,":",":"+un)+a}break;case 5719:case 2647:case 2135:case 3927:case 2391:return Ae(a,"scroll-","scroll-snap-")+a}return a}function Od(a,t){for(var i="",s=0;s<a.length;s++)i+=t(a[s],s,a,t)||"";return i}function Ww(a,t,i,s){switch(a.type){case Lw:if(a.children.length)break;case Nw:case Uw:case Wg:return a.return=a.return||a.value;case FM:return"";case BM:return a.return=a.value+"{"+Od(a.children,s)+"}";case qd:if(!ha(a.value=a.props.join(",")))return""}return ha(i=Od(a.children,s))?a.return=a.value+"{"+i+"}":""}function jw(a){var t=VM(a);return function(i,s,l,c){for(var d="",h=0;h<t;h++)d+=a[h](i,s,l,c)||"";return d}}function Yw(a){return function(t){t.root||(t=t.return)&&a(t)}}function Zw(a,t,i,s){if(a.length>-1&&!a.return)switch(a.type){case Wg:a.return=XM(a.value,a.length,i);return;case BM:return Od([os(a,{value:Ae(a.value,"@","@"+qe)})],s);case qd:if(a.length)return Pw(i=a.props,function(l){switch(fr(l,s=/(::plac\w+|:read-\w+)/)){case":read-only":case":read-write":jo(os(a,{props:[Ae(l,/:(read-\w+)/,":"+iu+"$1")]})),jo(os(a,{props:[l]})),V0(a,{props:AS(i,s)});break;case"::placeholder":jo(os(a,{props:[Ae(l,/:(plac\w+)/,":"+qe+"input-$1")]})),jo(os(a,{props:[Ae(l,/:(plac\w+)/,":"+iu+"$1")]})),jo(os(a,{props:[Ae(l,/:(plac\w+)/,un+"input-$1")]})),jo(os(a,{props:[l]})),V0(a,{props:AS(i,s)});break}return""})}}var El={},Um,Lm;const Dl=typeof process<"u"&&El!==void 0&&(El.REACT_APP_SC_ATTR||El.SC_ATTR)||"data-styled",qM="active",WM="data-styled-version",Zd="6.5.3",Yg=`/*!sc*/
`,au=typeof window<"u"&&typeof document<"u";function CS(a){if(typeof process<"u"&&El!==void 0){const t=El[a];if(t!==void 0&&t!=="")return t!=="false"}}const Qw=!!(typeof SC_DISABLE_SPEEDY=="boolean"?SC_DISABLE_SPEEDY:(Lm=(Um=CS("REACT_APP_SC_DISABLE_SPEEDY"))!==null&&Um!==void 0?Um:CS("SC_DISABLE_SPEEDY"))!==null&&Lm!==void 0?Lm:typeof process<"u"&&El!==void 0&&!1),Kw="sc-keyframes-";function Qd(a,...t){return new Error(`An error occurred. See https://github.com/styled-components/styled-components/blob/main/packages/styled-components/src/utils/errors.md#${a} for more information.${t.length>0?` Args: ${t.join(", ")}`:""}`)}let bd=new Map,Pd=new Map,Ed=1;const Vf=a=>{if(bd.has(a))return bd.get(a);for(;Pd.has(Ed);)Ed++;const t=Ed++;return bd.set(a,t),Pd.set(t,a),t},$w=a=>Pd.get(a),Jw=(a,t)=>{Ed=t+1,bd.set(a,t),Pd.set(t,a)},Zg=Object.freeze([]),Nl=Object.freeze({});function t2(a,t,i=Nl){return a.theme!==i.theme&&a.theme||t||i.theme}const e2=/[!"#$%&'()*+,./:;<=>?@[\\\]^`{|}~-]+/g,n2=/(^-|-$)/g;function jM(a){return a.replace(e2,"-").replace(n2,"")}const i2=/(a)(d)/gi,DS=a=>String.fromCharCode(a+(a>25?39:97));function YM(a){let t,i="";for(t=Math.abs(a);t>52;t=t/52|0)i=DS(t%52)+i;return(DS(t%52)+i).replace(i2,"$1-$2")}const X0=5381,Ks=(a,t)=>{let i=t.length;for(;i;)a=33*a^t.charCodeAt(--i);return a},ZM=a=>Ks(X0,a);function a2(a){return YM(ZM(a)>>>0)}function r2(a){return a.displayName||a.name||"Component"}function q0(a){return typeof a=="string"&&!0}function s2(a){return q0(a)?`styled.${a}`:`Styled(${r2(a)})`}const QM=Symbol.for("react.memo"),o2=Symbol.for("react.forward_ref"),l2={contextType:!0,defaultProps:!0,displayName:!0,getDerivedStateFromError:!0,getDerivedStateFromProps:!0,propTypes:!0,type:!0},c2={name:!0,length:!0,prototype:!0,caller:!0,callee:!0,arguments:!0,arity:!0},KM={$$typeof:!0,compare:!0,defaultProps:!0,displayName:!0,propTypes:!0,type:!0},u2={[o2]:{$$typeof:!0,render:!0,defaultProps:!0,displayName:!0,propTypes:!0},[QM]:KM};function NS(a){return("type"in(t=a)&&t.type.$$typeof)===QM?KM:"$$typeof"in a?u2[a.$$typeof]:l2;var t}const f2=Object.defineProperty,d2=Object.getOwnPropertyNames,h2=Object.getOwnPropertySymbols,p2=Object.getOwnPropertyDescriptor,m2=Object.getPrototypeOf,g2=Object.prototype;function $M(a,t,i){if(typeof t!="string"){const s=m2(t);s&&s!==g2&&$M(a,s,i);const l=d2(t).concat(h2(t)),c=NS(a),d=NS(t);for(let h=0;h<l.length;++h){const p=l[h];if(!(p in c2||i&&i[p]||d&&p in d||c&&p in c)){const m=p2(t,p);try{f2(a,p,m)}catch{}}}}return a}function Kd(a){return typeof a=="function"}const v2=Symbol.for("react.forward_ref");function JM(a){return a!=null&&(typeof a=="object"||typeof a=="function")&&a.$$typeof===v2&&"styledComponentId"in a}function Jc(a,t){return a&&t?a+" "+t:a||t||""}function US(a,t){return a.join("")}function cu(a){return a!==null&&typeof a=="object"&&a.constructor.name===Object.name&&!("props"in a&&a.$$typeof)}function W0(a,t,i=!1){if(!i&&!cu(a)&&!Array.isArray(a))return t;if(Array.isArray(t))for(let s=0;s<t.length;s++)a[s]=W0(a[s],t[s]);else if(cu(t))for(const s in t)a[s]=W0(a[s],t[s]);return a}function tb(a,t){Object.defineProperty(a,"toString",{value:t})}const _2=class{constructor(a){this.groupSizes=new Uint32Array(512),this.length=512,this.tag=a,this._cGroup=0,this._cIndex=0}indexOfGroup(a){if(a===this._cGroup)return this._cIndex;let t=this._cIndex;if(a>this._cGroup)for(let i=this._cGroup;i<a;i++)t+=this.groupSizes[i];else for(let i=this._cGroup-1;i>=a;i--)t-=this.groupSizes[i];return this._cGroup=a,this._cIndex=t,t}insertRules(a,t){if(a>=this.groupSizes.length){const l=this.groupSizes,c=l.length;let d=c;for(;a>=d;)if(d<<=1,d<0)throw Qd(16,`${a}`);this.groupSizes=new Uint32Array(d),this.groupSizes.set(l),this.length=d;for(let h=c;h<d;h++)this.groupSizes[h]=0}let i=this.indexOfGroup(a+1),s=0;for(let l=0,c=t.length;l<c;l++)this.tag.insertRule(i,t[l])&&(this.groupSizes[a]++,i++,s++);s>0&&this._cGroup>a&&(this._cIndex+=s)}clearGroup(a){if(a<this.length){const t=this.groupSizes[a],i=this.indexOfGroup(a),s=i+t;this.groupSizes[a]=0;for(let l=i;l<s;l++)this.tag.deleteRule(i);t>0&&this._cGroup>a&&(this._cIndex-=t)}}getGroup(a){let t="";if(a>=this.length||this.groupSizes[a]===0)return t;const i=this.groupSizes[a],s=this.indexOfGroup(a),l=s+i;for(let c=s;c<l;c++)t+=this.tag.getRule(c)+Yg;return t}},x2=`style[${Dl}][${WM}="${Zd}"]`,y2=new RegExp(`^${Dl}\\.g(\\d+)\\[id="([\\w\\d-]+)"\\].*?"([^"]*)`),LS=a=>typeof ShadowRoot<"u"&&a instanceof ShadowRoot||"host"in a&&a.nodeType===11,j0=a=>{if(!a)return document;if(LS(a))return a;if("getRootNode"in a){const t=a.getRootNode();if(LS(t))return t}return document},S2=(a,t,i)=>{const s=i.split(",");let l;for(let c=0,d=s.length;c<d;c++)(l=s[c])&&a.registerName(t,l)},M2=(a,t)=>{var i;const s=((i=t.textContent)!==null&&i!==void 0?i:"").split(Yg),l=[];for(let c=0,d=s.length;c<d;c++){const h=s[c].trim();if(!h)continue;const p=h.match(y2);if(p){const m=0|parseInt(p[1],10),_=p[2];m!==0&&(Jw(_,m),S2(a,_,p[3]),a.getTag().insertRules(m,l)),l.length=0}else l.push(h)}},Om=a=>{const t=j0(a.options.target).querySelectorAll(x2);for(let i=0,s=t.length;i<s;i++){const l=t[i];l&&l.getAttribute(Dl)!==qM&&(M2(a,l),l.parentNode&&l.parentNode.removeChild(l))}};let Oc=!1;function b2(){if(Oc!==!1)return Oc;if(typeof document<"u"){const a=document.head.querySelector('meta[property="csp-nonce"]');if(a)return Oc=a.nonce||a.getAttribute("content")||void 0;const t=document.head.querySelector('meta[name="sc-nonce"]');if(t)return Oc=t.getAttribute("content")||void 0}return Oc=typeof __webpack_nonce__<"u"?__webpack_nonce__:void 0}const eb=(a,t)=>{const i=document.head,s=a||i,l=document.createElement("style"),c=(p=>{const m=Array.from(p.querySelectorAll(`style[${Dl}]`));return m[m.length-1]})(s),d=c!==void 0?c.nextSibling:null;l.setAttribute(Dl,qM),l.setAttribute(WM,Zd);const h=t||b2();return h&&l.setAttribute("nonce",h),s.insertBefore(l,d),l},E2=class{constructor(a,t){this.element=eb(a,t),this.element.appendChild(document.createTextNode("")),this.sheet=(i=>{var s;if(i.sheet)return i.sheet;const l=(s=i.getRootNode().styleSheets)!==null&&s!==void 0?s:document.styleSheets;for(let c=0,d=l.length;c<d;c++){const h=l[c];if(h.ownerNode===i)return h}throw Qd(17)})(this.element),this.length=0}insertRule(a,t){try{return this.sheet.insertRule(t,a),this.length++,!0}catch{return!1}}deleteRule(a){this.sheet.deleteRule(a),this.length--}getRule(a){const t=this.sheet.cssRules[a];return t&&t.cssText?t.cssText:""}},T2=class{constructor(a,t){this.element=eb(a,t),this.nodes=this.element.childNodes,this.length=0}insertRule(a,t){if(a<=this.length&&a>=0){const i=document.createTextNode(t);return this.element.insertBefore(i,this.nodes[a]||null),this.length++,!0}return!1}deleteRule(a){this.element.removeChild(this.nodes[a]),this.length--}getRule(a){return a<this.length?this.nodes[a].textContent:""}};let OS=au;const A2={isServer:!au,useCSSOMInjection:!Qw};class $d{static registerId(t){return Vf(t)}constructor(t=Nl,i={},s){this.options=Object.assign(Object.assign({},A2),t),this.gs=i,this.keyframeIds=new Set,this.names=new Map(s),this.server=!!t.isServer,!this.server&&au&&OS&&(OS=!1,Om(this)),tb(this,()=>(l=>{const c=l.getTag(),{length:d}=c;let h="";for(let p=0;p<d;p++){const m=$w(p);if(m===void 0)continue;const _=l.names.get(m);if(_===void 0||!_.size)continue;const g=c.getGroup(p);if(g.length===0)continue;const v=Dl+".g"+p+'[id="'+m+'"]';let y="";for(const b of _)b.length>0&&(y+=b+",");h+=g+v+'{content:"'+y+'"}'+Yg}return h})(this))}rehydrate(){!this.server&&au&&Om(this)}reconstructWithOptions(t,i=!0){const s=new $d(Object.assign(Object.assign({},this.options),t),this.gs,i&&this.names||void 0);return s.keyframeIds=new Set(this.keyframeIds),!this.server&&au&&t.target!==this.options.target&&j0(this.options.target)!==j0(t.target)&&Om(s),s}allocateGSInstance(t){return this.gs[t]=(this.gs[t]||0)+1}getTag(){return this.tag||(this.tag=(t=(({useCSSOMInjection:i,target:s,nonce:l})=>i?new E2(s,l):new T2(s,l))(this.options),new _2(t)));var t}hasNameForId(t,i){var s,l;return(l=(s=this.names.get(t))===null||s===void 0?void 0:s.has(i))!==null&&l!==void 0&&l}registerName(t,i){Vf(t),t.startsWith(Kw)&&this.keyframeIds.add(t);const s=this.names.get(t);s?s.add(i):this.names.set(t,new Set([i]))}insertRules(t,i,s){this.registerName(t,i),this.getTag().insertRules(Vf(t),s)}clearNames(t){this.names.has(t)&&this.names.get(t).clear()}clearRules(t){this.getTag().clearGroup(Vf(t)),this.clearNames(t)}clearTag(){this.tag=void 0}}const nb=new WeakSet,w2={animationIterationCount:1,aspectRatio:1,borderImageOutset:1,borderImageSlice:1,borderImageWidth:1,columnCount:1,columns:1,flex:1,flexGrow:1,flexShrink:1,gridRow:1,gridRowEnd:1,gridRowSpan:1,gridRowStart:1,gridColumn:1,gridColumnEnd:1,gridColumnSpan:1,gridColumnStart:1,fontWeight:1,lineHeight:1,opacity:1,order:1,orphans:1,scale:1,tabSize:1,widows:1,zIndex:1,zoom:1,WebkitLineClamp:1,fillOpacity:1,floodOpacity:1,stopOpacity:1,strokeDasharray:1,strokeDashoffset:1,strokeMiterlimit:1,strokeOpacity:1,strokeWidth:1};function R2(a,t){return t==null||typeof t=="boolean"||t===""?"":typeof t!="number"||t===0||a in w2||a.startsWith("--")?String(t).trim():t+"px"}const qs=47;function PS(a){if(a.charCodeAt(0)===45&&a.charCodeAt(1)===45)return a;let t="";for(let i=0;i<a.length;i++){const s=a.charCodeAt(i);t+=s>=65&&s<=90?"-"+String.fromCharCode(s+32):a[i]}return t.startsWith("ms-")?"-"+t:t}const C2=Symbol.for("sc-keyframes");function D2(a){return typeof a=="object"&&a!==null&&C2 in a}function ib(a){return Kd(a)&&!(a.prototype&&a.prototype.isReactComponent)}const ab=a=>a==null||a===!1||a==="",N2=Symbol.for("react.client.reference");function zS(a){return a.$$typeof===N2}function rb(a,t){for(const i in a){const s=a[i];a.hasOwnProperty(i)&&!ab(s)&&(Array.isArray(s)&&nb.has(s)||Kd(s)?t.push(PS(i)+":",s,";"):cu(s)?(t.push(i+" {"),rb(s,t),t.push("}")):t.push(PS(i)+": "+R2(i,s)+";"))}}function $s(a,t,i,s,l=[]){if(ab(a))return l;const c=typeof a;if(c==="string")return l.push(a),l;if(c==="function"){if(zS(a))return l;if(ib(a)&&t){const d=a(t);return $s(d,t,i,s,l)}return l.push(a),l}if(Array.isArray(a)){for(let d=0;d<a.length;d++)$s(a[d],t,i,s,l);return l}return JM(a)?(l.push(`.${a.styledComponentId}`),l):D2(a)?(i?(a.inject(i,s),l.push(a.getName(s))):l.push(a),l):zS(a)?l:cu(a)?a.toString!==Object.prototype.toString?(l.push(a.toString()),l):(rb(a,l),l):(l.push(a.toString()),l)}const U2=ZM(Zd);class L2{constructor(t,i,s){this.rules=t,this.componentId=i,this.baseHash=Ks(U2,i),this.baseStyle=s,$d.registerId(i)}generateAndInjectStyles(t,i,s){let l=this.baseStyle?this.baseStyle.generateAndInjectStyles(t,i,s):"";{let c="";for(let d=0;d<this.rules.length;d++){const h=this.rules[d];if(typeof h=="string")c+=h;else if(h)if(ib(h)){const p=h(t);typeof p=="string"?c+=p:p!=null&&p!==!1&&(c+=US($s(p,t,i,s)))}else c+=US($s(h,t,i,s))}if(c){this.dynamicNameCache||(this.dynamicNameCache=new Map);const d=s.hash?s.hash+c:c;let h=this.dynamicNameCache.get(d);if(!h){if(h=YM(Ks(Ks(this.baseHash,s.hash),c)>>>0),this.dynamicNameCache.size>=200){const p=this.dynamicNameCache.keys().next().value;p!==void 0&&this.dynamicNameCache.delete(p)}this.dynamicNameCache.set(d,h)}if(!i.hasNameForId(this.componentId,h)){const p=s(c,"."+h,void 0,this.componentId);i.insertRules(this.componentId,h,p)}l=Jc(l,h)}}return l}}const O2=/&/g;function sb(a,t){let i=0;for(;--t>=0&&a.charCodeAt(t)===92;)i++;return!(1&~i)}function Pm(a){const t=a.length;let i="",s=0,l=0,c=0,d=!1,h=!1;for(let p=0;p<t;p++){const m=a.charCodeAt(p);if(c!==0||d||m!==qs||a.charCodeAt(p+1)!==42)if(d)m===42&&a.charCodeAt(p+1)===qs&&(d=!1,p++);else if(m!==34&&m!==39||sb(a,p)){if(c===0)if(m===123)l++;else if(m===125){if(l--,l<0){h=!0;let _=p+1;for(;_<t;){const g=a.charCodeAt(_);if(g===59||g===10)break;_++}_<t&&a.charCodeAt(_)===59&&_++,l=0,p=_-1,s=_;continue}l===0&&(i+=a.substring(s,p+1),s=p+1)}else m===59&&l===0&&(i+=a.substring(s,p+1),s=p+1)}else c===0?c=m:c===m&&(c=0);else d=!0,p++}return h||l!==0||c!==0?(s<t&&l===0&&c===0&&(i+=a.substring(s)),i):a}function ob(a,t){const i=t+" ",s=","+i;for(let l=0;l<a.length;l++){const c=a[l];if(c.type==="rule"){c.value=(i+c.value).replaceAll(",",s);const d=c.props,h=[];for(let p=0;p<d.length;p++)h[p]=i+d[p];c.props=h}Array.isArray(c.children)&&c.type!=="@keyframes"&&ob(c.children,t)}return a}function lb({options:a=Nl,plugins:t=Zg}=Nl){let i,s,l;const c=(v,y,b)=>b.startsWith(s)&&b.endsWith(s)&&b.replaceAll(s,"").length>0?`.${i}`:v,d=t.slice();d.push(v=>{v.type===qd&&v.value.includes("&")&&(l||(l=new RegExp(`\\${s}\\b`,"g")),v.props[0]=v.props[0].replace(O2,s).replace(l,c))}),a.prefix&&d.push(Zw),d.push(Ww);let h=[];const p=jw(d.concat(Yw(v=>h.push(v)))),m=(v,y="",b="",C="&")=>{i=C,s=y,l=void 0;const S=(function(R){const P=R.indexOf("//")!==-1,N=R.indexOf("}")!==-1;if(!P&&!N)return R;if(!P)return Pm(R);const H=R.length;let U="",L=0,E=0,O=0,V=0,z=0,Z=!1;for(;E<H;){const tt=R.charCodeAt(E);if(tt!==34&&tt!==39||sb(R,E))if(O===0)if(tt===qs&&E+1<H&&R.charCodeAt(E+1)===42){for(E+=2;E+1<H&&(R.charCodeAt(E)!==42||R.charCodeAt(E+1)!==qs);)E++;E+=2}else if(tt!==40)if(tt!==41)if(V>0)E++;else if(tt===42&&E+1<H&&R.charCodeAt(E+1)===qs)U+=R.substring(L,E),E+=2,L=E,Z=!0;else if(tt===qs&&E+1<H&&R.charCodeAt(E+1)===qs){for(U+=R.substring(L,E);E<H&&R.charCodeAt(E)!==10;)E++;L=E,Z=!0}else tt===123?z++:tt===125&&z--,E++;else V>0&&V--,E++;else V++,E++;else E++;else O===0?O=tt:O===tt&&(O=0),E++}return Z?(L<H&&(U+=R.substring(L)),z===0?U:Pm(U)):z===0?R:Pm(R)})(v);let M=Xw(b||y?b+" "+y+" { "+S+" }":S);return a.namespace&&(M=ob(M,a.namespace)),h=[],Od(M,p),h},_=a;let g=X0;for(let v=0;v<t.length;v++)t[v].name||Qd(15),g=Ks(g,t[v].name);return _?.namespace&&(g=Ks(g,_.namespace)),_?.prefix&&(g=Ks(g,"p")),m.hash=g!==X0?g.toString():"",m}const P2=new $d,z2=lb(),Qg=fn.createContext({shouldForwardProp:void 0,styleSheet:P2,stylis:z2,stylisPlugins:void 0});Qg.Consumer;function cb(){return fn.useContext(Qg)}function ub(a){var t;const i=cb(),{styleSheet:s}=i,l=fn.useMemo(()=>{let m=s;return a.sheet?m=a.sheet:a.target?m=m.reconstructWithOptions(a.nonce!==void 0?{target:a.target,nonce:a.nonce}:{target:a.target},!1):a.nonce!==void 0&&(m=m.reconstructWithOptions({nonce:a.nonce})),a.disableCSSOMInjection&&(m=m.reconstructWithOptions({useCSSOMInjection:!1})),m},[a.disableCSSOMInjection,a.nonce,a.sheet,a.target,s]),c=fn.useMemo(()=>{var m;return a.stylisPlugins===void 0&&a.namespace===void 0&&a.enableVendorPrefixes===void 0?i.stylis:lb({options:{namespace:a.namespace,prefix:a.enableVendorPrefixes},plugins:(m=a.stylisPlugins)!==null&&m!==void 0?m:i.stylisPlugins})},[a.enableVendorPrefixes,a.namespace,a.stylisPlugins,i.stylis,i.stylisPlugins]),d="shouldForwardProp"in a?a.shouldForwardProp:i.shouldForwardProp,h=(t=a.stylisPlugins)!==null&&t!==void 0?t:i.stylisPlugins,p=fn.useMemo(()=>({shouldForwardProp:d,styleSheet:l,stylis:c,stylisPlugins:h}),[d,l,c,h]);return fn.createElement(Qg.Provider,{value:p},a.children)}const fb=fn.createContext(void 0);fb.Consumer;const IS=Object.prototype.hasOwnProperty,zm={};function I2(a,t){const i=typeof a!="string"?"sc":jM(a);zm[i]=(zm[i]||0)+1;const s=i+"-"+a2(Zd+i+zm[i]);return t?t+"-"+s:s}function F2(a,t,i){const s=JM(a),l=a,c=!q0(a),{attrs:d=Zg,componentId:h=I2(t.displayName,t.parentComponentId),displayName:p=s2(a)}=t,m=t.displayName&&t.componentId?jM(t.displayName)+"-"+t.componentId:t.componentId||h,_=s&&l.attrs?l.attrs.concat(d).filter(Boolean):d;let{shouldForwardProp:g}=t;if(s&&l.shouldForwardProp){const C=l.shouldForwardProp;if(t.shouldForwardProp){const S=t.shouldForwardProp;g=(M,R)=>C(M,R)&&S(M,R)}else g=C}const v=new L2(i,m,s?l.componentStyle:void 0);function y(C,S){return(function(M,R,P){const{attrs:N,componentStyle:H,defaultProps:U,foldedComponentIds:L,styledComponentId:E,target:O}=M,V=fn.useContext(fb),z=cb(),Z=M.shouldForwardProp||z.shouldForwardProp,tt=t2(R,V,U)||Nl;let ft,X;{const dt=fn.useRef(null),pt=dt.current;if(pt!==null&&pt[1]===tt&&pt[2]===z.styleSheet&&pt[3]===z.stylis&&pt[7]===H&&(function(Tt,zt,re){const F=Tt,lt=zt;let et=0;for(const ht in lt)if(IS.call(lt,ht)&&(et++,F[ht]!==lt[ht]))return!1;return et===re})(pt[0],R,pt[4]))ft=pt[5],X=pt[6];else{ft=(function(zt,re,F){const lt=Object.assign(Object.assign({},re),{className:void 0,theme:F}),et=zt.length>1;for(let ht=0;ht<zt.length;ht++){const yt=zt[ht],Rt=Kd(yt)?yt(et?Object.assign({},lt):lt):yt;for(const Dt in Rt)Dt==="className"?lt.className=Jc(lt.className,Rt[Dt]):Dt==="style"?lt.style=Object.assign(Object.assign({},lt.style),Rt[Dt]):Dt in re&&re[Dt]===void 0||(lt[Dt]=Rt[Dt])}return"className"in re&&typeof re.className=="string"&&(lt.className=Jc(lt.className,re.className)),lt})(N,R,tt),X=H.generateAndInjectStyles(ft,z.styleSheet,z.stylis);let Tt=0;for(const zt in R)IS.call(R,zt)&&Tt++;dt.current=[R,tt,z.styleSheet,z.stylis,Tt,ft,X,H]}}const B=ft.as||O,W=(function(dt,pt,Tt,zt){const re={};for(const F in dt)dt[F]===void 0||F[0]==="$"||F==="as"||F==="theme"&&dt.theme===Tt||(F==="forwardedAs"?re.as=dt.forwardedAs:zt&&!zt(F,pt)||(re[F]=dt[F]));return re})(ft,B,tt,Z);let J=Jc(L,E);return X&&(J+=" "+X),ft.className&&(J+=" "+ft.className),W[q0(B)&&B.includes("-")?"class":"className"]=J,P&&(W.ref=P),ge.createElement(B,W)})(b,C,S)}y.displayName=p;let b=fn.forwardRef(y);return b.attrs=_,b.componentStyle=v,b.displayName=p,b.shouldForwardProp=g,b.foldedComponentIds=s?Jc(l.foldedComponentIds,l.styledComponentId):"",b.styledComponentId=m,b.target=s?l.target:a,Object.defineProperty(b,"defaultProps",{get(){return this._foldedDefaultProps},set(C){this._foldedDefaultProps=s?(function(S,...M){for(const R of M)W0(S,R,!0);return S})({},l.defaultProps,C):C}}),tb(b,()=>`.${b.styledComponentId}`),c&&$M(b,a,{attrs:!0,componentStyle:!0,displayName:!0,foldedComponentIds:!0,shouldForwardProp:!0,styledComponentId:!0,target:!0}),b}var B2=new Set(["a","abbr","address","area","article","aside","audio","b","bdi","bdo","blockquote","body","button","br","canvas","caption","cite","code","col","colgroup","data","datalist","dd","del","details","dfn","dialog","div","dl","dt","em","embed","fieldset","figcaption","figure","footer","form","h1","h2","h3","h4","h5","h6","header","hgroup","hr","html","i","iframe","img","input","ins","kbd","label","legend","li","main","map","mark","menu","meter","nav","object","ol","optgroup","option","output","p","picture","pre","progress","q","rp","rt","ruby","s","samp","search","section","select","slot","small","span","strong","sub","summary","sup","table","tbody","td","template","textarea","tfoot","th","thead","time","tr","u","ul","var","video","wbr","circle","clipPath","defs","ellipse","feBlend","feColorMatrix","feComponentTransfer","feComposite","feConvolveMatrix","feDiffuseLighting","feDisplacementMap","feDistantLight","feDropShadow","feFlood","feFuncA","feFuncB","feFuncG","feFuncR","feGaussianBlur","feImage","feMerge","feMergeNode","feMorphology","feOffset","fePointLight","feSpecularLighting","feSpotLight","feTile","feTurbulence","filter","foreignObject","g","image","line","linearGradient","marker","mask","path","pattern","polygon","polyline","radialGradient","rect","stop","svg","switch","symbol","text","textPath","tspan","use"]);function FS(a,t){const i=[a[0]];for(let s=0,l=t.length;s<l;s+=1)i.push(t[s],a[s+1]);return i}const BS=a=>(nb.add(a),a);function H2(a,...t){if(Kd(a)||cu(a))return BS($s(FS(Zg,[a,...t])));const i=a;return t.length===0&&i.length===1&&typeof i[0]=="string"?$s(i):BS($s(FS(i,t)))}function Y0(a,t,i=Nl){if(!t)throw Qd(1,t);const s=(l,...c)=>a(t,i,H2(l,...c));return s.attrs=l=>Y0(a,t,Object.assign(Object.assign({},i),{attrs:Array.prototype.concat(i.attrs,l).filter(Boolean)})),s.withConfig=l=>Y0(a,t,Object.assign(Object.assign({},i),l)),s}const db=a=>Y0(F2,a),se=db;B2.forEach(a=>{se[a]=db(a)});const ee={textWhite:"#EDEDED",textGrey:"#9C9C9C",textTertiary:"#6B6B6E",dangerRed:"rgba(243, 151, 143, 1)",dangerRedPressed:"rgba(240, 97, 84,1)",accent:"#2D7FF9",accentGlow:"rgba(45, 127, 249, 0.35)",panelBackground:"rgba(38, 38, 38, 0.72)",panelBorder:"rgba(61, 61, 63, 0.7)",buttonBackground:"rgba(61, 61, 63, 0.6)",buttonPressed:"rgba(61, 61, 63, 1)",gradientGreyTranslucent:"linear-gradient(to bottom, rgba(52, 52, 52, 0.75), rgba(57, 57, 57, 0.75))"},Zn={height:"30px",minWidth:"30px",fontSize:"14px",radiusMiddle:"3px",radiusSolo:"10px",radiusFirst:"10px 3px 3px 10px",radiusLast:"3px 10px 10px 3px",widthLong:"70px"},HS=se.button`
  background: ${ee.gradientGreyTranslucent};
  border: none;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  color: ${ee.textWhite};
  border: 1px solid transparent;
  border-radius: ${Zn.radiusMiddle};
  font-size: ${Zn.fontSize};
  height: ${Zn.height};
  min-width: ${Zn.minWidth};
  transition: all 0.2s ease-in-out;
  text-transform: none;
  box-shadow: none;
  font-family:
    system-ui,
    -apple-system,
    'Segoe UI',
    Roboto,
    sans-serif;

  &:first-child {
    border-radius: ${({$reverse:a})=>a?Zn.radiusLast:Zn.radiusFirst};
  }

  &:last-child {
    border-radius: ${({$reverse:a})=>a?Zn.radiusFirst:Zn.radiusLast};
  }

  &:first-child:last-child {
    border-radius: ${Zn.radiusSolo};
  }
`,Z0=se.div`
  padding: 4px;
  display: flex;
  gap: 2px;
  background-color: ${ee.panelBackground};
  border: 1px solid ${ee.panelBorder};
  backdrop-filter: blur(40px);
  -webkit-backdrop-filter: blur(40px);
  box-shadow:
    0 5px 10px rgba(0, 0, 0, 0.3),
    inset 0 1px 0 rgba(255, 255, 255, 0.06);
  justify-content: center;
  pointer-events: all;
  border-radius: 14px;
  align-items: center;
`,xi=se.button`
  background-color: transparent;
  border: none;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  color: ${ee.textWhite};
  border-radius: 8px;
  height: 28px;
  min-width: 28px;
  padding: 0 6px;
  transition: all 0.15s ease-in-out;
  text-transform: none;
  box-shadow: none;
  font-family:
    system-ui,
    -apple-system,
    'Segoe UI',
    Roboto,
    sans-serif;

  &:hover {
    background-color: rgba(255, 255, 255, 0.06);
  }

  &:active {
    background-color: rgba(255, 255, 255, 0.1);
  }

  &:focus {
    outline: none;
  }
`,Ws=se.div`
  background-color: ${({$pressed:a})=>a?ee.buttonPressed:ee.buttonBackground};
  border: none;
  display: flex;
  align-items: center;
  justify-content: center;
  color: ${ee.textWhite};
  border-radius: 8px;
  font-size: 14px;
  font-family:
    system-ui,
    -apple-system,
    'Segoe UI',
    Roboto,
    sans-serif;
  height: 30px;
  width: 30px;
  transition: all 0.2s ease-in-out;
`,zd=se.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 3px;
  margin-bottom: 3px;

  &:last-child {
    margin-bottom: 0;
  }
`,Kg=se.div`
  flex: none;
  box-sizing: border-box;
  width: 30px;
  height: 30px;
  border-radius: 50%;
  border: 1px solid ${ee.panelBorder};
  display: flex;
  align-items: center;
  justify-content: center;
  font-family: ui-monospace, 'SF Mono', Menlo, Consolas, monospace;
  font-size: 9px;
  font-weight: 600;
  color: ${ee.textGrey};
`;se.div`
  display: flex;
  align-items: center;
  height: 30px;
  margin-bottom: 3px;
  justify-content: flex-start;
  flex-direction: ${({$reverse:a})=>a?"row-reverse":"row"};

  &:last-child {
    margin-bottom: 0;
  }
`;se.div`
  display: flex;
  flex-direction: ${({$reverse:a})=>a?"row-reverse":"row"};
  height: 100%;
  justify-content: space-between;
  align-items: center;
  margin: ${({$reverse:a})=>a?"0 5px 0 0":"0 0 0 5px"};
  gap: 3px;
`;se.button`
  background-color: rgba(255, 255, 255, 0.3);
  border: none;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0;
  pointer-events: none;
  width: 50px;
  height: 50px;
  border-radius: 50%;
  position: relative;
  margin: 0 5px;
  backdrop-filter: blur(10px);
  -webkit-backdrop-filter: blur(10px);
`;se.div`
  position: absolute;
  background-color: ${ee.accent};
  box-shadow: 0 0 8px ${ee.accentGlow};
  border-radius: 50%;
  width: 36px;
  height: 36px;
  cursor: pointer;
  pointer-events: auto;
`;se.input.attrs({type:"range"})`
  -webkit-appearance: none;
  appearance: none;
  background: ${ee.gradientGreyTranslucent};
  border: none;
  height: 100%;
  width: ${Zn.widthLong};
  cursor: pointer;
  margin: 0;
  transition: all 0.2s ease-in-out;
  border-radius: ${({$reverse:a})=>a?Zn.radiusFirst:Zn.radiusLast};

  &::-webkit-slider-thumb {
    -webkit-appearance: none;
    appearance: none;
    width: 8px;
    height: 30px;
    background-color: ${ee.accent};
    border-radius: ${Zn.radiusMiddle};
  }

  &::-moz-range-thumb {
    width: 10px;
    height: 30px;
    background-color: ${ee.accent};
    border-radius: ${Zn.radiusMiddle};
  }

  &::-ms-thumb {
    width: 8px;
    height: 24px;
    background-color: ${ee.accent};
    border-radius: ${Zn.radiusMiddle};
  }
`;se.div`
  display: flex;
  flex-direction: column;
  align-items: ${({$reverse:a})=>a?"flex-start":"flex-end"};
  justify-content: center;
  margin: ${({$reverse:a})=>a?"2px -26px 0 0":"2px 0 0 -26px"};
`;se.div`
  display: flex;
  flex-direction: ${({$reverse:a})=>a?"row-reverse":"row"};
  align-items: center;
  justify-content: center;
`;const te={labelW:"40px",fieldW:"52px",gap:"4px",rowH:"26px",cellRadius:"8px",inset:"rgba(0, 0, 0, 0.25)",accentSoft:"rgba(45, 127, 249, 0.45)",accentTint:"rgba(45, 127, 249, 0.18)"},Jd=se.span`
  flex: none;
  width: ${te.labelW};
  font-family: ui-monospace, 'SF Mono', Menlo, Consolas, monospace;
  font-size: 10px;
  color: ${ee.textGrey};
`,ru=se.div`
  position: fixed;
  padding: 5px;
  font-family:
    system-ui,
    -apple-system,
    'Segoe UI',
    Roboto,
    sans-serif;
  color: ${ee.textWhite};
  pointer-events: all;
  background-color: ${ee.panelBackground};
  border: 1px solid ${ee.panelBorder};
  backdrop-filter: blur(40px);
  -webkit-backdrop-filter: blur(40px);
  border-radius: 12px;
  box-shadow: 0 5px 10px rgba(0, 0, 0, 0.3);
  overflow: hidden;
  display: flex;
  flex-direction: column;
`,Oa=se.hr`
  width: ${({$horizontal:a=!0})=>a?"unset":"1px"};
  height: ${({$horizontal:a=!0})=>a?"1px":"unset"};
  background-color: ${ee.panelBorder};
  margin: 5px 3px;
  border: none;
`,Js=se.button`
  background-color: transparent;
  border: none;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  color: ${({$isRed:a})=>a?ee.dangerRed:ee.textWhite};
  font-size: 12px;
  padding: 3px;
  text-transform: none;
  box-shadow: none;

  &:hover {
    color: ${({$isRed:a})=>a?ee.dangerRedPressed:"#ffffff"};
  }

  &:active {
    color: ${({$isRed:a})=>a?ee.dangerRedPressed:"#ffffff"};
  }

  &:focus {
    outline: none;
  }
`,G2=se.div`
  display: flex;
  flex-direction: row;
  gap: ${te.gap};
  height: ${te.rowH};
`,Q0=se.input.attrs({type:"text"})`
  width: ${te.fieldW};
  outline: none;
  background: ${te.inset};
  border: 1px solid ${ee.panelBorder};
  border-radius: ${te.cellRadius};
  height: ${te.rowH};
  color: ${ee.textWhite};
  padding: 0 10px 0 5px;
  box-sizing: border-box;
  font-size: 10px;
  font-family: ui-monospace, 'SF Mono', Menlo, Consolas, monospace;

  &:read-only {
    background: ${te.inset};
    cursor: default;
  }

  &:invalid {
    background-color: ${ee.dangerRed};
  }
`,K0=se.span`
  position: absolute;
  right: 5px;
  top: 50%;
  transform: translateY(-50%);
  pointer-events: none;
  color: ${ee.textGrey};
  font-size: 10px;
  font-family: ui-monospace, 'SF Mono', Menlo, Consolas, monospace;
`;/**
 * @license lucide-react v1.46.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const V2=a=>a?.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase();/**
 * @license lucide-react v1.46.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */function k2(a,t,i=[]){if(t==null)throw new Error("[lucide]: iconNode is required when icon name is used");return{name:V2(a),size:24,node:t,...i.length>0?{aliases:i}:{}}}/**
 * @license lucide-react v1.46.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const X2=a=>{let t="",i=!1;for(const s of a){if(s==="-"||s==="_"||s<=" "){i=t.length>0;continue}t.length===0?t+=s.toLowerCase():t+=i?s.toUpperCase():s,i=!1}return t};/**
 * @license lucide-react v1.46.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const q2=a=>{const t=X2(a);return t.charAt(0).toUpperCase()+t.slice(1)};/**
 * @license lucide-react v1.46.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const $0=(...a)=>a.filter((t,i,s)=>!!t&&t.trim()!==""&&s.indexOf(t)===i).join(" ").trim();/**
 * @license lucide-react v1.46.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Os={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":2,"stroke-linecap":"round","stroke-linejoin":"round"};/**
 * @license lucide-react v1.46.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */function Im(a){return a!=null}function W2(a,t={}){const i=t.attributeNames??{},s=v=>i[v]??v,l=a.size??a.width??Os.width,c=a.size??a.height??Os.height,d=a.aliases?.filter(v=>typeof v=="string"&&v.trim()!=="").map(v=>`lucide-${v}`)??[],h=[...a.name?[`lucide-${a.name}`]:[],...d],p=t.className?.split(" ").filter(Boolean)??[],m=t.includeDefaultClasses===!1?$0(...p):$0("lucide",...h,...p),_=t.absoluteStrokeWidth?Number(t.strokeWidth??Os["stroke-width"])*Number(a.size??a.width??Os.width)/Number(t.size??t.width??Os.width):t.strokeWidth??Os["stroke-width"];return["svg",{...Object.entries(Os).reduce((v,[y,b])=>(v[s(y)]=b,v),{}),..."color"in t&&t.color&&{[s("stroke")]:t.color},..."size"in t&&Im(t.size)&&{[s("width")]:t.size,[s("height")]:t.size},..."width"in t&&Im(t.width)&&{[s("width")]:t.width},..."height"in t&&Im(t.height)&&{[s("height")]:t.height},[s("stroke-width")]:_,...m&&{[s("class")]:m},[s("viewBox")]:`0 0 ${l} ${c}`,...t.hasA11yProp===!1?{[s("aria-hidden")]:"true"}:{},..."attributes"in t&&t.attributes},a.node.map(v=>{const[y,b,C]=v,S=t.nonScalingStroke?{[s("vector-effect")]:"non-scaling-stroke",...b}:b;return C?[y,S,C]:[y,S]})]}/**
 * @license lucide-react v1.46.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */function j2(a,t={}){return W2(a,{...t,attributeNames:{...t.attributeNames,class:"className","stroke-width":"strokeWidth","stroke-linecap":"strokeLinecap","stroke-linejoin":"strokeLinejoin","vector-effect":"vectorEffect"}})}/**
 * @license lucide-react v1.46.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Y2=a=>{for(const t in a)if(t.startsWith("aria-")||t==="role"||t==="title")return!0;return!1},Z2=ge.createContext({}),Q2=()=>ge.useContext(Z2),K2=ge.forwardRef(({color:a,size:t,width:i,height:s,strokeWidth:l,absoluteStrokeWidth:c,nonScalingStroke:d,className:h="",children:p,iconNode:m=[],icon:_={node:m,aliases:[],size:24},...g},v)=>{const{size:y=24,strokeWidth:b=2,absoluteStrokeWidth:C=!1,nonScalingStroke:S=!1,color:M="currentColor",className:R=""}=Q2()??{},P=!!p||Y2(g),[N,H,U=[]]=j2(_,{color:a??M,width:i??t??y,height:s??t??y,strokeWidth:l??b,absoluteStrokeWidth:c??C,nonScalingStroke:d??S,className:$0(R,h),hasA11yProp:P,attributes:g});return ge.createElement(N,{ref:v,...H},[...U.map(([L,E])=>ge.createElement(L,E)),...Array.isArray(p)?p:[p]])});/**
 * @license lucide-react v1.46.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */function ze(a,t=[],i=[]){const s=typeof a=="string"?k2(a,t,i):a,l=ge.forwardRef(({className:c,...d},h)=>ge.createElement(K2,{ref:h,icon:s,className:c,...d}));return s.name&&(l.displayName=q2(s.name)),l}/**
 * @license lucide-react v1.46.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const hb={name:"armchair",size:24,node:[["path",{d:"M19 9V6a2 2 0 0 0-2-2H7a2 2 0 0 0-2 2v3",key:"irtipd"}],["path",{d:"M3 16a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-5a2 2 0 0 0-4 0v1.5a.5.5 0 0 1-.5.5h-9a.5.5 0 0 1-.5-.5V11a2 2 0 0 0-4 0z",key:"1qyhux"}],["path",{d:"M5 18v2",key:"ppbyun"}],["path",{d:"M19 18v2",key:"gy7782"}]]};hb.node;const $2=ze(hb);/**
 * @license lucide-react v1.46.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const pb={name:"arrow-big-up",size:24,node:[["path",{d:"M9 19a1 1 0 0 0 1 1h4a1 1 0 0 0 1-1v-6a1 1 0 0 1 1-1h3.293a.707.707 0 0 0 .5-1.207l-7.086-7.086a1 1 0 0 0-1.414 0l-7.086 7.086a.707.707 0 0 0 .5 1.207H8a1 1 0 0 1 1 1z",key:"106j91"}]]};pb.node;const J2=ze(pb);/**
 * @license lucide-react v1.46.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const mb={name:"arrow-down",size:24,node:[["path",{d:"M12 5v14",key:"s699le"}],["path",{d:"m19 12-7 7-7-7",key:"1idqje"}]]};mb.node;const t3=ze(mb);/**
 * @license lucide-react v1.46.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const gb={name:"arrow-left",size:24,node:[["path",{d:"m12 19-7-7 7-7",key:"1l729n"}],["path",{d:"M19 12H5",key:"x3x0zl"}]]};gb.node;const e3=ze(gb);/**
 * @license lucide-react v1.46.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const vb={name:"arrow-right-to-line",size:24,node:[["path",{d:"M17 12H3",key:"8awo09"}],["path",{d:"m11 18 6-6-6-6",key:"8c2y43"}],["path",{d:"M21 5v14",key:"nzette"}]]};vb.node;const n3=ze(vb);/**
 * @license lucide-react v1.46.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const _b={name:"arrow-right",size:24,node:[["path",{d:"M5 12h14",key:"1ays0h"}],["path",{d:"m12 5 7 7-7 7",key:"xquz4c"}]]};_b.node;const i3=ze(_b);/**
 * @license lucide-react v1.46.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const xb={name:"arrow-up",size:24,node:[["path",{d:"m5 12 7-7 7 7",key:"hav0vg"}],["path",{d:"M12 19V5",key:"x0mq9r"}]]};xb.node;const a3=ze(xb);/**
 * @license lucide-react v1.46.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const yb={name:"atom",size:24,node:[["circle",{cx:"12",cy:"12",r:"1",key:"41hilf"}],["path",{d:"M20.2 20.2c2.04-2.03.02-7.36-4.5-11.9-4.54-4.52-9.87-6.54-11.9-4.5-2.04 2.03-.02 7.36 4.5 11.9 4.54 4.52 9.87 6.54 11.9 4.5Z",key:"1l2ple"}],["path",{d:"M15.7 15.7c4.52-4.54 6.54-9.87 4.5-11.9-2.03-2.04-7.36-.02-11.9 4.5-4.52 4.54-6.54 9.87-4.5 11.9 2.03 2.04 7.36.02 11.9-4.5Z",key:"1wam0m"}]]};yb.node;const r3=ze(yb);/**
 * @license lucide-react v1.46.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Sb={name:"ban",size:24,node:[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"M4.929 4.929 19.07 19.071",key:"196cmz"}]]};Sb.node;const s3=ze(Sb);/**
 * @license lucide-react v1.46.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Mb={name:"box",size:24,node:[["path",{d:"M21 8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16Z",key:"hh9hay"}],["path",{d:"m3.3 7 8.7 5 8.7-5",key:"g66t2b"}],["path",{d:"M12 22V12",key:"d0xqtd"}]]};Mb.node;const o3=ze(Mb);/**
 * @license lucide-react v1.46.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const bb={name:"bug",size:24,node:[["path",{d:"M12 20v-9",key:"1qisl0"}],["path",{d:"M14 7a4 4 0 0 1 4 4v3a6 6 0 0 1-12 0v-3a4 4 0 0 1 4-4z",key:"uouzyp"}],["path",{d:"M14.12 3.88 16 2",key:"qol33r"}],["path",{d:"M21 21a4 4 0 0 0-3.81-4",key:"1b0z45"}],["path",{d:"M21 5a4 4 0 0 1-3.55 3.97",key:"5cxbf6"}],["path",{d:"M22 13h-4",key:"1jl80f"}],["path",{d:"M3 21a4 4 0 0 1 3.81-4",key:"1fjd4g"}],["path",{d:"M3 5a4 4 0 0 0 3.55 3.97",key:"1d7oge"}],["path",{d:"M6 13H2",key:"82j7cp"}],["path",{d:"m8 2 1.88 1.88",key:"fmnt4t"}],["path",{d:"M9 7.13V6a3 3 0 1 1 6 0v1.13",key:"1vgav8"}]]};bb.node;const l3=ze(bb);/**
 * @license lucide-react v1.46.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Eb={name:"chevron-left",size:24,node:[["path",{d:"m15 18-6-6 6-6",key:"1wnfg3"}]]};Eb.node;const c3=ze(Eb);/**
 * @license lucide-react v1.46.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Tb={name:"chevron-right",size:24,node:[["path",{d:"m9 18 6-6-6-6",key:"mthhwq"}]]};Tb.node;const u3=ze(Tb);/**
 * @license lucide-react v1.46.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ab={name:"circle-dot",size:24,node:[["circle",{cx:"12",cy:"12",r:"1",key:"41hilf"}],["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}]]};Ab.node;const f3=ze(Ab);/**
 * @license lucide-react v1.46.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const wb={name:"circle-play",size:24,node:[["path",{d:"M9 9.003a1 1 0 0 1 1.517-.859l4.997 2.997a1 1 0 0 1 0 1.718l-4.997 2.997A1 1 0 0 1 9 14.996z",key:"kmsa83"}],["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}]],aliases:["play-circle"]};wb.node;const d3=ze(wb);/**
 * @license lucide-react v1.46.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Rb={name:"circle-x",size:24,node:[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"m15 9-6 6",key:"1uzhvr"}],["path",{d:"m9 9 6 6",key:"z0biqf"}]],aliases:["x-circle"]};Rb.node;const h3=ze(Rb);/**
 * @license lucide-react v1.46.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Cb={name:"corner-down-left",size:24,node:[["path",{d:"M20 4v7a4 4 0 0 1-4 4H4",key:"6o5b7l"}],["path",{d:"m9 10-5 5 5 5",key:"1kshq7"}]]};Cb.node;const p3=ze(Cb);/**
 * @license lucide-react v1.46.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Db={name:"delete",size:24,node:[["path",{d:"M10 5a2 2 0 0 0-1.344.519l-6.328 5.74a1 1 0 0 0 0 1.481l6.328 5.741A2 2 0 0 0 10 19h10a2 2 0 0 0 2-2V7a2 2 0 0 0-2-2z",key:"1yo7s0"}],["path",{d:"m12 9 6 6",key:"anjzzh"}],["path",{d:"m18 9-6 6",key:"1fp51s"}]]};Db.node;const m3=ze(Db);/**
 * @license lucide-react v1.46.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Nb={name:"gamepad-2",size:24,node:[["line",{x1:"6",x2:"10",y1:"11",y2:"11",key:"1gktln"}],["line",{x1:"8",x2:"8",y1:"9",y2:"13",key:"qnk9ow"}],["line",{x1:"15",x2:"15.01",y1:"12",y2:"12",key:"krot7o"}],["line",{x1:"18",x2:"18.01",y1:"10",y2:"10",key:"1lcuu1"}],["path",{d:"M17.32 5H6.68a4 4 0 0 0-3.978 3.59c-.006.052-.01.101-.017.152C2.604 9.416 2 14.456 2 16a3 3 0 0 0 3 3c1 0 1.5-.5 2-1l1.414-1.414A2 2 0 0 1 9.828 16h4.344a2 2 0 0 1 1.414.586L17 18c.5.5 1 1 2 1a3 3 0 0 0 3-3c0-1.545-.604-6.584-.685-7.258-.007-.05-.011-.1-.017-.151A4 4 0 0 0 17.32 5z",key:"mfqc10"}]]};Nb.node;const g3=ze(Nb);/**
 * @license lucide-react v1.46.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ub={name:"glasses",size:24,node:[["circle",{cx:"6",cy:"15",r:"4",key:"vux9w4"}],["circle",{cx:"18",cy:"15",r:"4",key:"18o8ve"}],["path",{d:"M14 15a2 2 0 0 0-2-2 2 2 0 0 0-2 2",key:"1ag4bs"}],["path",{d:"M2.5 13 5 7c.7-1.3 1.4-2 3-2",key:"1hm1gs"}],["path",{d:"M21.5 13 19 7c-.7-1.3-1.5-2-3-2",key:"1r31ai"}]]};Ub.node;const v3=ze(Ub);/**
 * @license lucide-react v1.46.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Lb={name:"hand",size:24,node:[["path",{d:"M18 11V6a2 2 0 0 0-2-2a2 2 0 0 0-2 2",key:"1fvzgz"}],["path",{d:"M14 10V4a2 2 0 0 0-2-2a2 2 0 0 0-2 2v2",key:"1kc0my"}],["path",{d:"M10 10.5V6a2 2 0 0 0-2-2a2 2 0 0 0-2 2v8",key:"10h0bg"}],["path",{d:"M18 8a2 2 0 1 1 4 0v6a8 8 0 0 1-8 8h-2c-2.8 0-4.5-.86-5.99-2.34l-3.6-3.6a2 2 0 0 1 2.83-2.82L7 15",key:"1s1gnw"}]]};Lb.node;const _3=ze(Lb);/**
 * @license lucide-react v1.46.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ob={name:"keyboard",size:24,node:[["path",{d:"M10 8h.01",key:"1r9ogq"}],["path",{d:"M12 12h.01",key:"1mp3jc"}],["path",{d:"M14 8h.01",key:"1primd"}],["path",{d:"M16 12h.01",key:"1l6xoz"}],["path",{d:"M18 8h.01",key:"emo2bl"}],["path",{d:"M6 8h.01",key:"x9i8wu"}],["path",{d:"M7 16h10",key:"wp8him"}],["path",{d:"M8 12h.01",key:"czm47f"}],["rect",{width:"20",height:"16",x:"2",y:"4",rx:"2",key:"18n3k1"}]]};Ob.node;const x3=ze(Ob);/**
 * @license lucide-react v1.46.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Pb={name:"layers",size:24,node:[["path",{d:"M12.83 2.18a2 2 0 0 0-1.66 0L2.6 6.08a1 1 0 0 0 0 1.83l8.58 3.91a2 2 0 0 0 1.66 0l8.58-3.9a1 1 0 0 0 0-1.83z",key:"zw3jo"}],["path",{d:"M2 12a1 1 0 0 0 .58.91l8.6 3.91a2 2 0 0 0 1.65 0l8.58-3.9A1 1 0 0 0 22 12",key:"1wduqc"}],["path",{d:"M2 17a1 1 0 0 0 .58.91l8.6 3.91a2 2 0 0 0 1.65 0l8.58-3.9A1 1 0 0 0 22 17",key:"kqbvx6"}]],aliases:["layers-3"]};Pb.node;const y3=ze(Pb);/**
 * @license lucide-react v1.46.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const zb={name:"log-out",size:24,node:[["path",{d:"m16 17 5-5-5-5",key:"1bji2h"}],["path",{d:"M21 12H9",key:"dn1m92"}],["path",{d:"M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4",key:"1uf3rs"}]]};zb.node;const S3=ze(zb);/**
 * @license lucide-react v1.46.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ib={name:"mouse-left",size:24,node:[["path",{d:"M12 7.318V10",key:"17s7lh"}],["path",{d:"M5 10v5a7 7 0 0 0 14 0V9c0-3.527-2.608-6.515-6-7",key:"imk5ea"}],["circle",{cx:"7",cy:"4",r:"2",key:"ra7k3"}]]};Ib.node;const M3=ze(Ib);/**
 * @license lucide-react v1.46.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Fb={name:"mouse-right",size:24,node:[["path",{d:"M12 7.318V10",key:"17s7lh"}],["path",{d:"M19 10v5a7 7 0 0 1-14 0V9c0-3.527 2.608-6.515 6-7",key:"2es5nn"}],["circle",{cx:"17",cy:"4",r:"2",key:"y5j2s2"}]]};Fb.node;const b3=ze(Fb);/**
 * @license lucide-react v1.46.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Bb={name:"mouse",size:24,node:[["rect",{x:"5",y:"2",width:"14",height:"20",rx:"7",key:"11ol66"}],["path",{d:"M12 6v4",key:"16clxf"}]]};Bb.node;const E3=ze(Bb);/**
 * @license lucide-react v1.46.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Hb={name:"pin",size:24,node:[["path",{d:"M12 17v5",key:"bb1du9"}],["path",{d:"M9 10.76a2 2 0 0 1-1.11 1.79l-1.78.9A2 2 0 0 0 5 15.24V16a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1v-.76a2 2 0 0 0-1.11-1.79l-1.78-.9A2 2 0 0 1 15 10.76V7a1 1 0 0 1 1-1 2 2 0 0 0 0-4H8a2 2 0 0 0 0 4 1 1 0 0 1 1 1z",key:"1nkz8b"}]]};Hb.node;const T3=ze(Hb);/**
 * @license lucide-react v1.46.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Gb={name:"plug",size:24,node:[["path",{d:"M12 22v-5",key:"1ega77"}],["path",{d:"M15 8V2",key:"18g5xt"}],["path",{d:"M17 8a1 1 0 0 1 1 1v4a4 4 0 0 1-4 4h-4a4 4 0 0 1-4-4V9a1 1 0 0 1 1-1z",key:"1xoxul"}],["path",{d:"M9 8V2",key:"14iosj"}]]};Gb.node;const A3=ze(Gb);/**
 * @license lucide-react v1.46.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Vb={name:"rotate-ccw",size:24,node:[["path",{d:"M3 12a9 9 0 1 0 9-9 9.75 9.75 0 0 0-6.74 2.74L3 8",key:"1357e3"}],["path",{d:"M3 3v5h5",key:"1xhq8a"}]]};Vb.node;const w3=ze(Vb);/**
 * @license lucide-react v1.46.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const kb={name:"save",size:24,node:[["path",{d:"M15.2 3a2 2 0 0 1 1.4.6l3.8 3.8a2 2 0 0 1 .6 1.4V19a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2z",key:"1c8476"}],["path",{d:"M17 21v-7a1 1 0 0 0-1-1H8a1 1 0 0 0-1 1v7",key:"1ydtos"}],["path",{d:"M7 3v4a1 1 0 0 0 1 1h7",key:"t51u73"}]]};kb.node;const R3=ze(kb);/**
 * @license lucide-react v1.46.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Xb={name:"settings",size:24,node:[["path",{d:"M9.671 4.136a2.34 2.34 0 0 1 4.659 0 2.34 2.34 0 0 0 3.319 1.915 2.34 2.34 0 0 1 2.33 4.033 2.34 2.34 0 0 0 0 3.831 2.34 2.34 0 0 1-2.33 4.033 2.34 2.34 0 0 0-3.319 1.915 2.34 2.34 0 0 1-4.659 0 2.34 2.34 0 0 0-3.32-1.915 2.34 2.34 0 0 1-2.33-4.033 2.34 2.34 0 0 0 0-3.831A2.34 2.34 0 0 1 6.35 6.051a2.34 2.34 0 0 0 3.319-1.915",key:"1i5ecw"}],["circle",{cx:"12",cy:"12",r:"3",key:"1v7zrd"}]]};Xb.node;const C3=ze(Xb);/**
 * @license lucide-react v1.46.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const qb={name:"shapes",size:24,node:[["path",{d:"M8.3 10a.7.7 0 0 1-.626-1.079L11.4 3a.7.7 0 0 1 1.198-.043L16.3 8.9a.7.7 0 0 1-.572 1.1Z",key:"1bo67w"}],["rect",{x:"3",y:"14",width:"7",height:"7",rx:"1",key:"1bkyp8"}],["circle",{cx:"17.5",cy:"17.5",r:"3.5",key:"w3z12y"}]]};qb.node;const D3=ze(qb);/**
 * @license lucide-react v1.46.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Wb={name:"video",size:24,node:[["path",{d:"m16 13 5.223 3.482a.5.5 0 0 0 .777-.416V7.87a.5.5 0 0 0-.752-.432L16 10.5",key:"ftymec"}],["rect",{x:"2",y:"6",width:"14",height:"12",rx:"2",key:"158x01"}]]};Wb.node;const N3=ze(Wb);/**
 * @license lucide-react v1.46.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const jb={name:"x",size:24,node:[["path",{d:"M18 6 6 18",key:"1bl5f8"}],["path",{d:"m6 6 12 12",key:"d8bk6v"}]]};jb.node;const U3=ze(jb),L3={"rotate-ccw":w3,"circle-play":d3,"gamepad-2":g3,hand:_3,keyboard:x3,armchair:$2,layers:y3,box:o3,shapes:D3,save:R3,"log-out":S3,atom:r3,bug:l3,x:U3,settings:C3,"circle-x":h3,plug:A3,glasses:v3,video:N3,pin:T3,"circle-dot":f3,"chevron-left":c3,"chevron-right":u3,ban:s3,mouse:E3,"mouse-left":M3,"mouse-right":b3,"corner-down-left":p3,"arrow-big-up":J2,"arrow-up":a3,"arrow-down":t3,"arrow-left":e3,"arrow-right":i3,"arrow-right-to-line":n3,delete:m3},O3=({size:a,color:t,style:i})=>G.jsxs("svg",{xmlns:"http://www.w3.org/2000/svg",width:a,height:a,viewBox:"0 0 14 14",fill:"none",style:i,children:[G.jsx("path",{fill:t,d:"M10.5 8.367a1.4 1.4 0 1 0 0-2.8 1.4 1.4 0 0 0 0 2.8Z"}),G.jsx("path",{fill:t,fillRule:"evenodd",d:"M0 5.8A2.8 2.8 0 0 1 2.8 3h8.4A2.8 2.8 0 0 1 14 5.8v2.8a2.8 2.8 0 0 1-2.8 2.8H9.526c-.619 0-1.184-.35-1.46-.903l-.108-.214a.933.933 0 0 0-.835-.516h-.246c-.354 0-.677.2-.835.516l-.107.214a1.633 1.633 0 0 1-1.461.903H2.8A2.8 2.8 0 0 1 0 8.6V5.8Zm4.9 1.167a1.4 1.4 0 1 1-2.8 0 1.4 1.4 0 0 1 2.8 0Zm8.367-.768a.268.268 0 0 0 .076-.292 2.942 2.942 0 0 0-.187-.407l-.055-.096a3.012 3.012 0 0 0-.262-.37.27.27 0 0 0-.29-.08l-.66.21a2.279 2.279 0 0 0-.522-.302l-.148-.676a.268.268 0 0 0-.215-.211 3.062 3.062 0 0 0-1.008.001.268.268 0 0 0-.215.21l-.148.677a2.28 2.28 0 0 0-.522.301l-.66-.21a.268.268 0 0 0-.29.081c-.096.116-.184.24-.262.37l-.056.096c-.072.13-.135.265-.187.406a.268.268 0 0 0 .076.292l.513.467a2.293 2.293 0 0 0 0 .603l-.513.467a.268.268 0 0 0-.076.291c.052.141.115.276.187.407l.056.096c.078.13.166.253.262.37a.27.27 0 0 0 .29.08l.66-.211c.158.122.333.224.52.3l.149.677a.268.268 0 0 0 .215.211 3.06 3.06 0 0 0 1.007 0 .268.268 0 0 0 .216-.21l.148-.677a2.28 2.28 0 0 0 .521-.301l.66.21c.105.033.22.004.29-.08.097-.117.184-.24.263-.37l.055-.097c.073-.13.135-.265.188-.406a.268.268 0 0 0-.076-.292l-.513-.466a2.299 2.299 0 0 0 0-.602l.513-.467Z"})]}),me=({name:a,size:t=16,color:i="currentColor",strokeWidth:s=2,style:l})=>{if(a==="iwer")return G.jsx(O3,{size:t,color:i,style:l});const c=L3[a];return c?G.jsx(c,{size:t,color:i,strokeWidth:s,style:l}):null},La={KeyA:"A",KeyB:"B",KeyC:"C",KeyD:"D",KeyE:"E",KeyF:"F",KeyG:"G",KeyH:"H",KeyI:"I",KeyJ:"J",KeyK:"K",KeyL:"L",KeyM:"M",KeyN:"N",KeyO:"O",KeyP:"P",KeyQ:"Q",KeyR:"R",KeyS:"S",KeyT:"T",KeyU:"U",KeyV:"V",KeyW:"W",KeyX:"X",KeyY:"Y",KeyZ:"Z",Digit0:"0",Digit1:"1",Digit2:"2",Digit3:"3",Digit4:"4",Digit5:"5",Digit6:"6",Digit7:"7",Digit8:"8",Digit9:"9",Tab:G.jsx(me,{name:"arrow-right-to-line",size:15}),Backspace:G.jsx(me,{name:"delete",size:15}),Enter:G.jsx(me,{name:"corner-down-left",size:15}),ShiftLeft:G.jsx(me,{name:"arrow-big-up",size:15}),ShiftRight:G.jsx(me,{name:"arrow-big-up",size:15}),Space:" ",ArrowUp:G.jsx(me,{name:"arrow-up",size:15}),ArrowDown:G.jsx(me,{name:"arrow-down",size:15}),ArrowLeft:G.jsx(me,{name:"arrow-left",size:15}),ArrowRight:G.jsx(me,{name:"arrow-right",size:15}),Semicolon:";",Equal:"=",Comma:",",Minus:"-",Period:".",Slash:"/",Backquote:"`",BracketLeft:"[",Backslash:"\\",BracketRight:"]",Quote:"'",MouseLeft:G.jsx(me,{name:"mouse-left",size:15}),MouseRight:G.jsx(me,{name:"mouse-right",size:15})},GS=a=>{let t;const i=new Set,s=(m,_)=>{const g=typeof m=="function"?m(t):m;if(!Object.is(g,t)){const v=t;t=_??(typeof g!="object"||g===null)?g:Object.assign({},t,g),i.forEach(y=>y(t,v))}},l=()=>t,h={setState:s,getState:l,getInitialState:()=>p,subscribe:m=>(i.add(m),()=>i.delete(m))},p=t=a(s,l,h);return h},P3=(a=>a?GS(a):GS),z3=a=>a;function I3(a,t=z3){const i=fn.useSyncExternalStore(a.subscribe,fn.useCallback(()=>t(a.getState()),[a,t]),fn.useCallback(()=>t(a.getInitialState()),[a,t]));return fn.useDebugValue(i),i}const VS=a=>{const t=P3(a),i=s=>I3(t,s);return Object.assign(i,t),i},$g=(a=>a?VS(a):VS),F3="iwer-prefs";function to(a){if(typeof window>"u"||!a)return;const t=window.location.origin==="null"?"*":window.location.origin;window.postMessage({channel:F3,scope:"origin",patch:a},t)}let kf=null,Yo=null;function u4(a,t=200){typeof window>"u"||!a||(Yo={...Yo??{},...a},kf!=null&&clearTimeout(kf),kf=setTimeout(()=>{const i=Yo;Yo=null,kf=null,i&&to(i)},t))}let Yb=null;function f4(a){Yb=a}function B3(){return Yb}const H3={thumbstick:"Press",trigger:"Trig",squeeze:"Grip","x-button":"X","y-button":"Y","a-button":"A","b-button":"B",thumbrest:"Rest",pose:"Pose",pinch:"Pinch"},G3=a=>{var t;return(t=H3[a])!==null&&t!==void 0?t:a},kS={"thumbstick-up":"arrow-up","thumbstick-down":"arrow-down","thumbstick-left":"arrow-left","thumbstick-right":"arrow-right"},V3=["thumbstick-up","thumbstick-down","thumbstick-left","thumbstick-right","thumbstick"],XS=["trigger","squeeze","a-button","b-button","x-button","y-button","thumbrest","pose","pinch"],qS={left:{"thumbstick-up":"KeyW","thumbstick-down":"KeyS","thumbstick-left":"KeyA","thumbstick-right":"KeyD",thumbstick:"KeyR","x-button":"KeyX","y-button":"KeyZ",trigger:"KeyQ",squeeze:"KeyE",pinch:"MouseLeft",pose:"KeyF"},right:{"thumbstick-up":"ArrowUp","thumbstick-down":"ArrowDown","thumbstick-left":"ArrowLeft","thumbstick-right":"ArrowRight",thumbstick:"Slash","a-button":"Enter","b-button":"ShiftRight",trigger:"MouseLeft",squeeze:"MouseRight",pinch:"MouseRight",pose:"Backslash"}},Jg=$g(a=>({keyMap:qS,bindKey:(t,i,s="Unmapped")=>{to({keymap:{[t]:{[i]:s}}}),a(l=>({keyMap:{...l.keyMap,[t]:{...l.keyMap[t],[i]:s}}}))},resetKeyMap:t=>{const i={...qS[t]};to({keymap:{[t]:i}}),a(s=>({keyMap:{...s.keyMap,[t]:i}}))}})),k3=se.div`
  display: flex;
  align-items: center;
  gap: 6px;
  padding: 6px 8px;
  background-color: ${te.inset};
  border-radius: ${te.cellRadius};
  margin-bottom: ${te.gap};
  color: ${ee.textTertiary};
  font-size: 10px;
  line-height: 1.3;
`,WS=se.div`
  font-size: 10px;
  font-weight: 600;
  letter-spacing: 0.5px;
  text-transform: uppercase;
  color: ${ee.textTertiary};
  margin: 4px 0 1px;
`,X3=se.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: ${te.gap};
  height: ${te.rowH};
  margin-bottom: ${te.gap};
`,q3=se.div`
  flex: none;
  width: ${te.labelW};
  height: ${te.rowH};
  display: flex;
  align-items: center;
  font-family: ui-monospace, 'SF Mono', Menlo, Consolas, monospace;
  font-size: 10px;
  color: ${ee.textGrey};
`,W3=se.button`
  flex: 1 1 auto;
  height: ${te.rowH};
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 4px;
  border-radius: ${te.cellRadius};
  border: 1px solid
    ${({$listening:a})=>a?ee.accent:ee.panelBorder};
  background-color: ${({$listening:a})=>a?te.accentTint:ee.buttonBackground};
  color: ${({$listening:a})=>a?ee.accent:ee.textWhite};
  cursor: pointer;
  font-family: ui-monospace, 'SF Mono', Menlo, Consolas, monospace;
  font-size: 12px;
  transition: all 0.12s ease;

  &:hover {
    background-color: ${({$listening:a})=>a?te.accentTint:ee.buttonPressed};
  }
  &:focus {
    outline: none;
  }
`,j3=se.button`
  flex: none;
  width: 24px;
  height: 24px;
  display: flex;
  align-items: center;
  justify-content: center;
  border: none;
  border-radius: 6px;
  background-color: transparent;
  color: ${ee.textGrey};
  cursor: pointer;
  transition: all 0.12s ease;

  &:hover {
    background-color: rgba(255, 255, 255, 0.06);
    color: ${ee.textWhite};
  }
  &:focus {
    outline: none;
  }
`,Y3=se.button`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 6px;
  width: 100%;
  height: ${te.rowH};
  border: none;
  border-radius: ${te.cellRadius};
  background-color: transparent;
  color: ${ee.textGrey};
  cursor: pointer;
  font-family:
    system-ui,
    -apple-system,
    'Segoe UI',
    Roboto,
    sans-serif;
  font-size: 12px;
  transition: all 0.12s ease;

  &:hover {
    background-color: rgba(255, 255, 255, 0.06);
    color: ${ee.textWhite};
  }
  &:focus {
    outline: none;
  }
`,Zb=({handedness:a,actions:t})=>{var i;const{keyMap:s,bindKey:l,resetKeyMap:c}=Jg(),[d,h]=ge.useState(null);ge.useEffect(()=>{if(!d)return;const y=S=>{La[S.code]&&(l(a,d,S.code),h(null))},b=S=>{const M=S.button===0?"MouseLeft":S.button===2?"MouseRight":null;M&&La[M]&&(l(a,d,M),h(null))},C=S=>S.preventDefault();return window.addEventListener("keydown",y),window.addEventListener("mousedown",b),window.addEventListener("contextmenu",C),()=>{window.removeEventListener("keydown",y),window.removeEventListener("mousedown",b),window.removeEventListener("contextmenu",C)}},[d,a,l]);const p=(i=s[a])!==null&&i!==void 0?i:{},m=Object.keys(p).filter(y=>t.includes(y)),_=V3.filter(y=>m.includes(y)),g=m.filter(y=>!y.startsWith("thumbstick")).sort((y,b)=>XS.indexOf(y)-XS.indexOf(b)),v=y=>{const b=La[p[y]];return G.jsxs(X3,{children:[G.jsx(q3,{children:kS[y]?G.jsx(me,{name:kS[y],size:14}):G3(y)}),G.jsx(W3,{type:"button",$listening:d===y,onClick:()=>h(d===y?null:y),onContextMenu:C=>C.preventDefault(),title:"Click, then press a key or mouse button",children:d===y?"press a key…":b??"—"}),G.jsx(j3,{type:"button",onClick:()=>l(a,y),onContextMenu:C=>C.preventDefault(),title:"Clear binding",children:G.jsx(me,{name:"ban",size:12})})]},y)};return G.jsxs(G.Fragment,{children:[G.jsx(Oa,{}),G.jsxs(k3,{children:[G.jsx(me,{name:"keyboard",size:12}),"Click a binding, then press a key or mouse button"]}),_.length>0&&G.jsx(WS,{children:"Thumbstick"}),_.map(v),g.length>0&&_.length>0&&G.jsx(WS,{children:"Buttons"}),g.map(v),G.jsx(Oa,{}),G.jsxs(Y3,{type:"button",onClick:()=>c(a),children:[G.jsx(me,{name:"rotate-ccw",size:12}),"Reset to defaults"]})]})},Pc=16,Z3=se.div`
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  gap: 0;
  margin-bottom: ${te.gap};
`,Q3=se.div`
  position: relative;
  flex: none;
  width: ${te.fieldW};
  height: ${te.fieldW};
  border-radius: 50%;
  background-color: ${te.inset};
  box-shadow: inset 0 0 8px rgba(0, 0, 0, 0.4);
  display: flex;
  align-items: center;
  justify-content: center;
`,K3=se.div`
  position: absolute;
  width: 18px;
  height: 18px;
  border-radius: 50%;
  background-color: ${ee.accent};
  box-shadow: 0 0 8px ${ee.accentGlow};
  cursor: grab;
  pointer-events: auto;
`,$3=se.div`
  display: flex;
  flex-direction: column;
  gap: ${te.gap};
  flex: 1 1 auto;
  /* Joystick occupies column 1 (= label-width's first field). Offset the X/Y
     stack by one grid gap so the fields land exactly in columns 2 and 3,
     lining up with the Position/Rotation fields above. */
  margin-left: ${te.gap};
`,jS=se.div`
  display: flex;
  gap: ${te.gap};
  align-items: center;
`,YS=se.div`
  position: relative;
  display: inline-block;
  height: ${te.rowH};
`,J3=se.div`
  flex: 1 1 auto;
  height: ${te.rowH};
  border-radius: ${te.cellRadius};
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  user-select: none;
  font-size: 11px;
  color: ${ee.textWhite};
  background-color: ${({$active:a})=>a?te.accentTint:te.inset};
  transition: background-color 0.12s ease;
`,ZS=se.button`
  flex: none;
  width: 22px;
  height: ${te.rowH};
  display: flex;
  align-items: center;
  justify-content: center;
  border: none;
  border-radius: 6px;
  cursor: pointer;
  background-color: ${({$active:a})=>a?te.accentTint:"transparent"};
  color: ${({$active:a})=>a?ee.accent:ee.textGrey};

  &:hover {
    background-color: rgba(255, 255, 255, 0.06);
  }
  &:focus {
    outline: none;
  }
`,tR=se.div`
  flex: none;
  display: flex;
  align-items: center;
  gap: ${te.gap};
  margin-left: ${te.gap};
`,eR=({xrController:a,pointerLocked:t,buttonId:i,mappedKeyUp:s,mappedKeyDown:l,mappedKeyLeft:c,mappedKeyRight:d,mappedKeyPressed:h})=>{const p=ge.useRef(null),m=ge.useRef({x:0,y:0}),_=ge.useRef(!1),[g,v]=ge.useState({x:0,y:0}),[y,b]=ge.useState(!1),[C,S]=ge.useState(!1),M=ge.useRef(!1);M.current=C;const[R,P]=ge.useState(!1),[N,H]=ge.useState({up:!1,down:!1,left:!1,right:!1,pressed:!1}),U=ge.useRef(N);U.current=N;const L=z=>{const Z=p.current;if(!Z)return;const tt=Z.getBoundingClientRect();m.current={x:tt.left+tt.width/2,y:tt.top+tt.height/2},_.current=!0,z.preventDefault()};ge.useEffect(()=>{const z=tt=>{if(!_.current||!p.current)return;const ft=tt.clientX-m.current.x,X=tt.clientY-m.current.y,B=Math.sqrt(ft*ft+X*X);let W=ft,J=X;if(B>Pc){const Tt=Math.atan2(X,ft);W=Math.cos(Tt)*Pc,J=Math.sin(Tt)*Pc}p.current.style.transform=`translate(${W}px, ${J}px)`;const dt=W/Pc,pt=J/Pc;a.updateAxes(i,dt,pt),v({x:dt,y:pt})},Z=()=>{_.current&&(_.current=!1,p.current&&(p.current.style.transform="translate(0, 0)"),a.updateAxes(i,0,0),v({x:0,y:0}))};return document.addEventListener("mousemove",z),document.addEventListener("mouseup",Z),()=>{document.removeEventListener("mousemove",z),document.removeEventListener("mouseup",Z)}},[i,a]),ge.useEffect(()=>{const z=()=>{y&&!M.current&&(b(!1),a.updateButtonValue(i,0))};return window.addEventListener("mouseup",z),()=>window.removeEventListener("mouseup",z)},[y,i,a]),ge.useEffect(()=>{if(!t)return;const z=J=>{const dt=(J.right?1:0)-(J.left?1:0),pt=(J.down?1:0)-(J.up?1:0),Tt=Math.sqrt(dt*dt+pt*pt);Tt===0?a.updateAxes(i,0,0):a.updateAxes(i,dt/Tt,pt/Tt)},Z=(J,dt)=>{if(!J)return;const pt={...U.current};let Tt=!1;J===s&&(pt.up=dt,Tt=!0),J===l&&(pt.down=dt,Tt=!0),J===c&&(pt.left=dt,Tt=!0),J===d&&(pt.right=dt,Tt=!0),J===h&&(pt.pressed=dt,Tt=!0,a.updateButtonValue(i,dt?1:0)),Tt&&(H(pt),z(pt))},tt=J=>J.button===0?"MouseLeft":J.button===2?"MouseRight":null,ft=J=>Z(J.code,!0),X=J=>Z(J.code,!1),B=J=>Z(tt(J),!0),W=J=>Z(tt(J),!1);return window.addEventListener("keydown",ft),window.addEventListener("keyup",X),window.addEventListener("mousedown",B),window.addEventListener("mouseup",W),()=>{window.removeEventListener("keydown",ft),window.removeEventListener("keyup",X),window.removeEventListener("mousedown",B),window.removeEventListener("mouseup",W)}},[t,s,l,c,d,h,i,a]);const E=()=>{C||(b(!0),a.updateButtonValue(i,1))},O=()=>{const z=!C;S(z),b(z),a.updateButtonValue(i,z?1:0)},V=()=>{const z=!R;P(z),a.updateButtonTouch(i,z)};return t?G.jsxs(G.Fragment,{children:[G.jsxs(zd,{children:[G.jsx(Kg,{children:"Stick"}),G.jsx(Ws,{$pressed:N.up,children:La[s]}),G.jsx(Ws,{$pressed:N.pressed,children:La[h]})]}),G.jsxs(zd,{children:[G.jsx(Ws,{$pressed:N.left,children:La[c]}),G.jsx(Ws,{$pressed:N.down,children:La[l]}),G.jsx(Ws,{$pressed:N.right,children:La[d]})]})]}):G.jsxs(Z3,{children:[G.jsx(Jd,{children:"Stick"}),G.jsx(Q3,{children:G.jsx(K3,{ref:p,onMouseDown:L})}),G.jsxs($3,{children:[G.jsxs(jS,{children:[G.jsxs(YS,{children:[G.jsx(Q0,{readOnly:!0,value:g.x.toFixed(2)}),G.jsx(K0,{children:"X"})]}),G.jsxs(YS,{children:[G.jsx(Q0,{readOnly:!0,value:g.y.toFixed(2)}),G.jsx(K0,{children:"Y"})]})]}),G.jsxs(jS,{style:{gap:0},children:[G.jsx(J3,{$active:y||C,onMouseDown:E,children:"click"}),G.jsxs(tR,{children:[G.jsx(ZS,{$active:C,onClick:O,type:"button",title:"Hold (latch)",children:G.jsx(me,{name:"pin",size:12})}),G.jsx(ZS,{$active:R,onClick:V,type:"button",title:"Toggle touch state",children:G.jsx(me,{name:"circle-dot",size:12})})]})]})]})]})},nR=se.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 0;
  height: ${te.rowH};
  margin-bottom: ${te.gap};

  &:last-child {
    margin-bottom: 0;
  }
`,iR=se.div`
  flex: none;
  display: flex;
  align-items: center;
  gap: ${te.gap};
  margin-left: ${te.gap};
`,aR=se.div`
  position: relative;
  flex: 1 1 auto;
  height: ${te.rowH};
  border-radius: ${te.cellRadius};
  cursor: pointer;
  overflow: hidden;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0 8px;
  user-select: none;
  background-color: ${({$active:a})=>a?te.accentTint:te.inset};
  transition: background-color 0.12s ease;
`,rR=se.div`
  position: absolute;
  left: 0;
  top: 0;
  bottom: 0;
  background-color: ${te.accentSoft};
  pointer-events: none;
`,sR=se.span`
  position: relative;
  z-index: 1;
  font-family: ui-monospace, 'SF Mono', Menlo, Consolas, monospace;
  font-size: 11px;
  color: ${ee.textWhite};
  pointer-events: none;
`,QS=se.button`
  flex: none;
  width: 22px;
  height: ${te.rowH};
  display: flex;
  align-items: center;
  justify-content: center;
  border: none;
  border-radius: 6px;
  cursor: pointer;
  background-color: ${({$active:a})=>a?te.accentTint:"transparent"};
  color: ${({$active:a})=>a?ee.accent:ee.textGrey};
  transition: all 0.12s ease;

  &:hover {
    background-color: rgba(255, 255, 255, 0.06);
  }
  &:focus {
    outline: none;
  }
`,Qb=({label:a,analog:t,supportsTouch:i,mappedKey:s,pointerLocked:l,onValue:c,onTouch:d})=>{const[h,p]=ge.useState(0),[m,_]=ge.useState(!1),[g,v]=ge.useState(!1),[y,b]=ge.useState(!1),C=ge.useRef(null),S=ge.useRef(!1),M=ge.useRef(!1);M.current=m;const R=L=>{const E=Math.min(1,Math.max(0,L));p(E),c(E)};ge.useEffect(()=>{if(!l)return;const L=tt=>{c(tt?1:0),b(tt)},E=tt=>s==="MouseLeft"&&tt.button===0||s==="MouseRight"&&tt.button===2,O=tt=>{tt.code===s&&L(!0)},V=tt=>{tt.code===s&&L(!1)},z=tt=>{E(tt)&&L(!0)},Z=tt=>{E(tt)&&L(!1)};return window.addEventListener("keydown",O),window.addEventListener("keyup",V),window.addEventListener("mousedown",z),window.addEventListener("mouseup",Z),()=>{window.removeEventListener("keydown",O),window.removeEventListener("keyup",V),window.removeEventListener("mousedown",z),window.removeEventListener("mouseup",Z)}},[s,l,c]),ge.useEffect(()=>{const L=O=>{if(!S.current||!t||!C.current)return;const V=C.current.getBoundingClientRect();R((O.clientX-V.left)/V.width)},E=()=>{S.current&&(S.current=!1,M.current||R(0))};return window.addEventListener("mousemove",L),window.addEventListener("mouseup",E),()=>{window.removeEventListener("mousemove",L),window.removeEventListener("mouseup",E)}},[t]);const P=()=>{m||(S.current=!0,R(1))},N=()=>{const L=!m;_(L),R(L?h>0?h:1:0)},H=()=>{const L=!g;v(L),d?.(L)};if(l)return G.jsxs(zd,{children:[G.jsx(Kg,{children:a}),G.jsx(Ws,{$pressed:y,children:La[s]})]});const U=t?h.toFixed(2):m?"hold":"press";return G.jsxs(nR,{children:[G.jsx(Jd,{children:a}),G.jsxs(aR,{ref:C,$active:!t&&h>0,onMouseDown:P,title:"Click to press; drag to set value",children:[t&&G.jsx(rR,{style:{width:`${h*100}%`}}),G.jsx(sR,{children:U})]}),G.jsxs(iR,{children:[G.jsx(QS,{$active:m,onClick:N,title:"Hold (latch)",type:"button",children:G.jsx(me,{name:"pin",size:12})}),i&&G.jsx(QS,{$active:g,onClick:H,title:"Toggle touch state",type:"button",children:G.jsx(me,{name:"circle-dot",size:12})})]})]})};function Zo(a,t){const i=Math.pow(10,t);return Math.round(a*i)/i}const oR=se.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  align-items: center;
  margin-bottom: ${({$mb:a})=>a??"0"};
`,lR=se.div`
  position: relative;
  display: inline-block;
  height: 26px;
`,uu=({vector:a,label:t="",multiplier:i=1,precision:s=2,onValidInput:l=()=>{},marginBottom:c="0"})=>{const[d,h]=ge.useState({x:(a.x/i).toFixed(s),y:(a.y/i).toFixed(s),z:(a.z/i).toFixed(s)}),p=ge.useRef({x:Zo(a.x/i,s),y:Zo(a.y/i,s),z:Zo(a.z/i,s)}),m=ge.useRef(null),_=ge.useRef({x:0,y:0,z:0}),g=()=>{const y=_.current;y.x=Zo(a.x/i,s),y.y=Zo(a.y/i,s),y.z=Zo(a.z/i,s);const{x:b,y:C,z:S}=p.current;(y.x!==b||y.y!==C||y.z!==S)&&(p.current={x:y.x,y:y.y,z:y.z},h({x:y.x.toFixed(s),y:y.y.toFixed(s),z:y.z.toFixed(s)})),m.current=requestAnimationFrame(g)};ge.useEffect(()=>(m.current=requestAnimationFrame(g),()=>{m.current&&cancelAnimationFrame(m.current)}),[a,i,s]);const v=y=>b=>{const C=b.target.value,S=parseFloat(C);h(M=>({...M,[y]:C})),isNaN(S)||(p.current[y]=S,a[y]=S*i,l())};return G.jsxs(oR,{$mb:c,children:[G.jsx(Jd,{children:t}),G.jsx(G2,{children:["x","y","z"].map(y=>G.jsxs(lR,{children:[G.jsx(Q0,{value:d[y],onChange:v(y),className:parseFloat(d[y])!==p.current[y]?"invalid":void 0}),G.jsx(K0,{children:y.toUpperCase()})]},`${t}-${y}`))})]})},KS={thumbstick:"Stick",trigger:"Trig",squeeze:"Grip","a-button":"A","b-button":"B","x-button":"X","y-button":"Y",thumbrest:"Rest",menu:"Menu"};function cR(a){return KS[a]?KS[a]:a.charAt(0).toUpperCase()+a.slice(1).replace(/-button$/,"")}function uR(a){const t=new Set;for(const s of a.axes)s&&s.id&&t.add(s.id);const i=a.buttons.filter(s=>s!==null).map(s=>({id:s.id,type:s.type,hasAxes:t.has(s.id)}));return i.sort((s,l)=>s.hasAxes&&!l.hasAxes?-1:!s.hasAxes&&l.hasAxes?1:0),i}const fR=({controller:a,handle:t,handedness:i,pointerLocked:s})=>{const{keyMap:l}=Jg(),[c,d]=fn.useState(a.connected),[h,p]=fn.useState(!1),m=uR(a.gamepadConfig),_=m.flatMap(g=>g.hasAxes?[`${g.id}-left`,`${g.id}-right`,`${g.id}-up`,`${g.id}-down`,g.id]:g.id);return fn.useEffect(()=>{s&&p(!1)},[s]),G.jsxs(ru,{style:i==="left"?{left:"8px",bottom:"8px"}:{right:"8px",bottom:"8px"},children:[!s&&G.jsxs("div",{style:{display:"flex",flexDirection:"row",justifyContent:"space-between",alignItems:"center"},children:[G.jsxs("div",{style:{fontSize:"14px",fontWeight:600,display:"flex",flexDirection:"row",alignItems:"center",gap:"6px"},children:[G.jsx(me,{name:"gamepad-2",size:15}),"Controller [",i==="left"?"L":"R","]"]}),G.jsx("div",{style:{display:"flex",flexDirection:"row",gap:"1px"},children:c?G.jsxs(G.Fragment,{children:[G.jsx(Js,{title:`Click to ${h?"close":"change"} key bindings`,onClick:()=>p(!h),children:G.jsx(me,{name:"settings",size:14})}),G.jsx(Js,{title:`Click to disconnect ${i} controller`,$isRed:!0,onClick:()=>{a.connected=!1,d(!1)},children:G.jsx(me,{name:"circle-x",size:14})})]}):G.jsx(Js,{title:`Click to reconnect ${i} controller`,onClick:()=>{a.connected=!0,d(!0)},style:{marginLeft:"5px"},children:G.jsx(me,{name:"plug",size:14})})})]}),c&&!s&&G.jsxs(G.Fragment,{children:[!h&&G.jsxs(G.Fragment,{children:[G.jsx(Oa,{}),G.jsx(uu,{vector:t.position,label:"Pos",marginBottom:te.gap}),G.jsx(uu,{vector:t.rotation,label:"Rot"})]}),G.jsx(Oa,{})]}),c&&(h?G.jsx(Zb,{handedness:i,actions:_}):m.map(g=>{const v=l[i];return g.hasAxes?G.jsx(eR,{xrController:a,pointerLocked:s,buttonId:g.id,mappedKeyUp:v[`${g.id}-up`],mappedKeyDown:v[`${g.id}-down`],mappedKeyLeft:v[`${g.id}-left`],mappedKeyRight:v[`${g.id}-right`],mappedKeyPressed:v[g.id]},g.id):G.jsx(Qb,{label:cR(g.id),analog:g.type==="analog",supportsTouch:!0,mappedKey:v[g.id],pointerLocked:s,onValue:y=>a.updateButtonValue(g.id,y),onTouch:y=>a.updateButtonTouch(g.id,y)},g.id)}))]},i)},Qo=["default","pinch","point"],dR=se.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 0;
  height: ${te.rowH};
  margin-bottom: ${te.gap};
`,hR=se.div`
  flex: 1 1 auto;
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: ${te.gap};
  height: ${te.rowH};
`,$S=se.button`
  flex: none;
  width: 22px;
  height: ${te.rowH};
  display: flex;
  align-items: center;
  justify-content: center;
  border: none;
  border-radius: 6px;
  cursor: pointer;
  background-color: ${te.inset};
  color: ${ee.textGrey};

  &:hover {
    color: ${ee.textWhite};
  }
  &:focus {
    outline: none;
  }
`,pR=se.div`
  flex: 1 1 auto;
  height: ${te.rowH};
  border-radius: ${te.cellRadius};
  background-color: ${te.inset};
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 11px;
  color: ${ee.textWhite};
`,mR=({hand:a,pointerLocked:t,mappedKey:i})=>{const[s,l]=ge.useState(a.poseId),[c,d]=ge.useState(!1),h=a.inputSource.handedness,p=m=>{const g=(Qo.indexOf(a.poseId)+Qo.length+m)%Qo.length;l(Qo[g]),a.poseId=Qo[g],to({handPoses:{[h]:Qo[g]}})};return ge.useEffect(()=>{const m=b=>i==="MouseLeft"&&b.button===0||i==="MouseRight"&&b.button===2,_=b=>{b.repeat||b.code===i&&(p(1),d(!0))},g=b=>{b.code===i&&d(!1)},v=b=>{m(b)&&(p(1),d(!0))},y=b=>{m(b)&&d(!1)};return t&&(window.addEventListener("keydown",_),window.addEventListener("keyup",g),window.addEventListener("mousedown",v),window.addEventListener("mouseup",y)),()=>{window.removeEventListener("keydown",_),window.removeEventListener("keyup",g),window.removeEventListener("mousedown",v),window.removeEventListener("mouseup",y)}},[i,t,a]),t?G.jsxs(zd,{children:[G.jsx(Kg,{children:"Pose"}),G.jsx(Ws,{$pressed:c,children:La[i]})]}):G.jsxs(dR,{children:[G.jsx(Jd,{children:"Pose"}),G.jsxs(hR,{children:[G.jsx($S,{type:"button",onClick:()=>p(-1),title:"Previous pose",children:G.jsx(me,{name:"chevron-left",size:14})}),G.jsx(pR,{children:s}),G.jsx($S,{type:"button",onClick:()=>p(1),title:"Next pose",children:G.jsx(me,{name:"chevron-right",size:14})})]})]})},gR=({hand:a,handle:t,handedness:i,pointerLocked:s})=>{const{keyMap:l}=Jg(),[c,d]=fn.useState(a.connected),[h,p]=fn.useState(!1);return fn.useEffect(()=>{s&&p(!1)},[s]),G.jsxs(ru,{style:i==="left"?{left:"8px",bottom:"8px"}:{right:"8px",bottom:"8px"},children:[!s&&G.jsxs("div",{style:{display:"flex",flexDirection:"row",justifyContent:"space-between",alignItems:"center"},children:[G.jsxs("div",{style:{fontSize:"14px",fontWeight:600,display:"flex",flexDirection:"row",alignItems:"center",gap:"6px"},children:[G.jsx(me,{name:"hand",size:15}),"Hand [",i==="left"?"L":"R","]"]}),G.jsx("div",{style:{display:"flex",flexDirection:"row",gap:"1px"},children:c?G.jsxs(G.Fragment,{children:[G.jsx(Js,{title:`Click to ${h?"close":"change"} key bindings`,onClick:()=>p(!h),children:G.jsx(me,{name:"settings",size:14})}),G.jsx(Js,{title:`Click to disconnect ${i} hand`,$isRed:!0,onClick:()=>{a.connected=!1,d(!1)},children:G.jsx(me,{name:"circle-x",size:14})})]}):G.jsx(Js,{title:`Click to reconnect ${i} hand`,onClick:()=>{a.connected=!0,d(!0)},style:{marginLeft:"5px"},children:G.jsx(me,{name:"plug",size:14})})})]}),c&&!s&&G.jsxs(G.Fragment,{children:[!h&&G.jsxs(G.Fragment,{children:[G.jsx(Oa,{}),G.jsx(uu,{vector:t.position,label:"Pos",marginBottom:te.gap}),G.jsx(uu,{vector:t.rotation,label:"Rot"})]}),G.jsx(Oa,{})]}),c&&(h?G.jsx(Zb,{handedness:i,actions:["pose","pinch"]}):G.jsxs(G.Fragment,{children:[G.jsx(mR,{hand:a,pointerLocked:s,mappedKey:l[i].pose}),G.jsx(Qb,{label:"Pinch",analog:!0,supportsTouch:!1,mappedKey:l[i].pinch,pointerLocked:s,onValue:m=>a.updatePinchValue(m)})]}))]},i)},tv=$g(a=>({inputMode:"controller",setInputMode:t=>a(()=>({inputMode:t}))})),vR=({xrDevice:a,inputLayer:t,pointerLocked:i})=>{const s=tv(l=>l.inputMode);return G.jsx(G.Fragment,{children:s==="controller"?Object.entries(a.controllers).map(([l,c])=>G.jsx(fR,{controller:c,handle:t.transformHandles.get(l),handedness:l,pointerLocked:i},`controller-${l}`)):Object.entries(a.hands).map(([l,c])=>G.jsx(gR,{hand:c,handle:t.transformHandles.get(l),handedness:l,pointerLocked:i},`hand-${l}`))})},Fm=se.td`
  text-align: right;
  color: ${ee.textWhite};
  padding: 0 8px 0 0;
  font-weight: bold;
`,Bm=se.td`
  text-align: left;
  color: ${ee.textGrey};
  padding: 0;
`,_R=["meeting_room","living_room","music_room","office_large","office_small","none"],xR=$g(a=>({infoPanelOpen:!1,envDropDownOpen:!1,headsetOpen:!1,setInfoPanelOpen:t=>a(()=>({infoPanelOpen:t})),setEnvDropDownOpen:t=>a(()=>({envDropDownOpen:t})),setHeadsetOpen:t=>a(()=>({headsetOpen:t}))}));function yR(a){return a.split("_").map(t=>t.charAt(0).toUpperCase()+t.slice(1)).join(" ")}const SR=({xrDevice:a,inputLayer:t})=>{var i,s,l;const[c,d]=fn.useState(!!(!((i=a.sem)===null||i===void 0)&&i.planesVisible)),[h,p]=fn.useState(!!(!((s=a.sem)===null||s===void 0)&&s.boundingBoxesVisible)),[m,_]=fn.useState(!!(!((l=a.sem)===null||l===void 0)&&l.meshesVisible)),{inputMode:g,setInputMode:v}=tv(),{infoPanelOpen:y,setInfoPanelOpen:b,envDropDownOpen:C,setEnvDropDownOpen:S,headsetOpen:M,setHeadsetOpen:R}=xR(),P=N=>N?ee.accent:ee.textGrey;return G.jsxs("div",{style:{display:"flex",justifyContent:"center",flexDirection:"row",alignItems:"center",gap:"6px",padding:"8px"},children:[G.jsxs("div",{style:{position:"relative"},children:[G.jsxs(Z0,{children:[G.jsx(xi,{title:"Reset device transforms",onClick:()=>t.resetDeviceTransforms(),children:G.jsx(me,{name:"rotate-ccw",size:16})}),G.jsx(xi,{title:"Play mode (lock pointer)",onClick:()=>{t.lockPointer(),S(!1),b(!1)},children:G.jsx(me,{name:"circle-play",size:16})}),G.jsx(xi,{title:"Toggle input mode",onClick:()=>{const N=g==="controller"?"hand":"controller";v(N),a.primaryInputMode=N,to({inputMode:N})},children:G.jsx(me,{name:g==="controller"?"gamepad-2":"hand",size:16})}),G.jsx(xi,{title:"Headset position",onClick:()=>{R(!M),S(!1),b(!1)},children:G.jsx(me,{name:"glasses",size:16,color:M?ee.accent:ee.textWhite})}),a.sem&&G.jsxs(G.Fragment,{children:[G.jsx(Oa,{$horizontal:!1}),G.jsx(xi,{title:"Select emulated environment",onClick:()=>S(!C),children:G.jsx(me,{name:"armchair",size:16})}),G.jsx(xi,{title:"Toggle plane visibility",onClick:()=>{a.sem.planesVisible=!c,d(!c)},children:G.jsx(me,{name:"layers",size:16,color:P(c)})}),G.jsx(xi,{title:"Toggle bounding-box visibility",onClick:()=>{a.sem.boundingBoxesVisible=!h,p(!h)},children:G.jsx(me,{name:"box",size:16,color:P(h)})}),G.jsx(xi,{title:"Toggle mesh visibility",onClick:()=>{a.sem.meshesVisible=!m,_(!m)},children:G.jsx(me,{name:"shapes",size:16,color:P(m)})})]}),G.jsx(Oa,{$horizontal:!1}),G.jsx(xi,{title:"Save current device pose as the default for this site",onClick:()=>{const N=t.captureDefaultPose();t.applyDefaultPose(N),to({defaultPose:N})},children:G.jsx(me,{name:"save",size:16})}),G.jsx(Oa,{$horizontal:!1}),G.jsx(xi,{title:"Exit XR session",onClick:()=>{var N;return(N=a.activeSession)===null||N===void 0?void 0:N.end()},children:G.jsx(me,{name:"log-out",size:16})})]}),M&&G.jsxs(ru,{style:{position:"absolute",top:"calc(100% + 6px)",left:0,gap:"6px",padding:"10px"},children:[G.jsxs("div",{style:{display:"flex",alignItems:"center",gap:"6px",fontSize:"13px",fontWeight:600},children:[G.jsx(me,{name:"glasses",size:15}),a.name]}),G.jsx(Oa,{}),G.jsx(uu,{vector:t.combinedCameraPosition,label:"Pos"})]}),C&&G.jsx(ru,{style:{position:"absolute",top:"calc(100% + 6px)",left:0,gap:"2px"},children:_R.map(N=>G.jsx(xi,{style:{fontSize:"12px",width:"100%",justifyContent:"start",borderRadius:"8px",padding:"6px 10px"},onClick:()=>{const H=B3();H?H(N):N==="none"?a.sem.deleteAll():a.sem.loadDefaultEnvironment(N),to({environment:N})},children:yR(N)},N))})]}),G.jsxs(Z0,{children:[G.jsx(xi,{title:"About IWER",onClick:()=>b(!y),children:G.jsx(me,{name:"iwer",size:16})}),G.jsx(xi,{title:"Report issues",onClick:()=>window.open("https://github.com/meta-quest/immersive-web-emulation-runtime/issues","_blank"),children:G.jsx(me,{name:"bug",size:16})})]}),y&&G.jsxs(ru,{style:{top:"50vh",left:"50vw",transform:"translate(-50%, -50%)",maxWidth:"240px",gap:"4px",padding:"16px"},children:[G.jsx("div",{style:{display:"flex",justifyContent:"end"},children:G.jsx(Js,{$isRed:!0,onClick:()=>b(!1),children:G.jsx(me,{name:"circle-x",size:14})})}),G.jsx("div",{style:{display:"flex",justifyContent:"center"},children:G.jsx(me,{name:"iwer",size:72})}),G.jsxs("p",{style:{textAlign:"center",padding:"0 5px",margin:"0"},children:[G.jsx("b",{children:"Immersive Web Emulation Runtime"})," (IWER) is a free, open-source WebXR developer tool created by Meta Platforms, Inc."]}),G.jsx("table",{style:{width:"100%",borderCollapse:"collapse",display:"flex",justifyContent:"center",fontSize:"12px",padding:"8px"},children:G.jsxs("tbody",{children:[G.jsxs("tr",{children:[G.jsx(Fm,{children:"IWER"}),G.jsxs(Bm,{children:["v",a.version]})]}),G.jsxs("tr",{children:[G.jsx(Fm,{children:"DevUI"}),G.jsxs(Bm,{children:["v",a.devui.version]})]}),a.sem&&G.jsxs("tr",{children:[G.jsx(Fm,{children:"SEM"}),G.jsxs(Bm,{children:["v",a.sem.version]})]})]})}),G.jsx(HS,{style:{borderRadius:Zn.radiusSolo},onClick:()=>window.open("https://github.com/meta-quest/immersive-web-emulation-runtime/blob/main/LICENSE","_blank"),children:"MIT License"}),G.jsx(HS,{style:{borderRadius:Zn.radiusSolo},onClick:()=>window.open("https://github.com/meta-quest/immersive-web-emulation-runtime","_blank"),children:"View Source on GitHub"})]})]})};/**
 * @license
 * Copyright 2010-2026 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const ev="184",MR=0,JS=1,bR=2,Td=1,ER=2,tu=3,gr=0,yi=1,dr=2,pr=0,Tl=1,t1=2,e1=3,n1=4,TR=5,js=100,AR=101,wR=102,RR=103,CR=104,DR=200,NR=201,UR=202,LR=203,J0=204,tg=205,OR=206,PR=207,zR=208,IR=209,FR=210,BR=211,HR=212,GR=213,VR=214,eg=0,ng=1,ig=2,Ul=3,ag=4,rg=5,sg=6,og=7,Kb=0,kR=1,XR=2,Ba=0,$b=1,Jb=2,tE=3,eE=4,nE=5,iE=6,aE=7,rE=300,no=301,Ll=302,Hm=303,Gm=304,th=306,lg=1e3,hr=1001,cg=1002,Qn=1003,qR=1004,Xf=1005,ti=1006,Vm=1007,Zs=1008,Ki=1009,sE=1010,oE=1011,fu=1012,nv=1013,Va=1014,Pa=1015,vr=1016,iv=1017,av=1018,du=1020,lE=35902,cE=35899,uE=1021,fE=1022,ma=1023,_r=1026,Qs=1027,dE=1028,rv=1029,io=1030,sv=1031,ov=1033,Ad=33776,wd=33777,Rd=33778,Cd=33779,ug=35840,fg=35841,dg=35842,hg=35843,pg=36196,mg=37492,gg=37496,vg=37488,_g=37489,Id=37490,xg=37491,yg=37808,Sg=37809,Mg=37810,bg=37811,Eg=37812,Tg=37813,Ag=37814,wg=37815,Rg=37816,Cg=37817,Dg=37818,Ng=37819,Ug=37820,Lg=37821,Og=36492,Pg=36494,zg=36495,Ig=36283,Fg=36284,Fd=36285,Bg=36286,WR=3200,i1=0,jR=1,ls="",Zi="srgb",Bd="srgb-linear",Hd="linear",$e="srgb",Ko=7680,a1=519,YR=512,ZR=513,QR=514,lv=515,KR=516,$R=517,cv=518,JR=519,r1=35044,s1="300 es",za=2e3,Gd=2001;function tC(a){for(let t=a.length-1;t>=0;--t)if(a[t]>=65535)return!0;return!1}function Vd(a){return document.createElementNS("http://www.w3.org/1999/xhtml",a)}function eC(){const a=Vd("canvas");return a.style.display="block",a}const o1={};function l1(...a){const t="THREE."+a.shift();console.log(t,...a)}function hE(a){const t=a[0];if(typeof t=="string"&&t.startsWith("TSL:")){const i=a[1];i&&i.isStackTrace?a[0]+=" "+i.getLocation():a[1]='Stack trace not available. Enable "THREE.Node.captureStackTrace" to capture stack traces.'}return a}function de(...a){a=hE(a);const t="THREE."+a.shift();{const i=a[0];i&&i.isStackTrace?console.warn(i.getError(t)):console.warn(t,...a)}}function Be(...a){a=hE(a);const t="THREE."+a.shift();{const i=a[0];i&&i.isStackTrace?console.error(i.getError(t)):console.error(t,...a)}}function Hg(...a){const t=a.join(" ");t in o1||(o1[t]=!0,de(...a))}function nC(a,t,i){return new Promise(function(s,l){function c(){switch(a.clientWaitSync(t,a.SYNC_FLUSH_COMMANDS_BIT,0)){case a.WAIT_FAILED:l();break;case a.TIMEOUT_EXPIRED:setTimeout(c,i);break;default:s()}}setTimeout(c,i)})}const iC={[eg]:ng,[ig]:sg,[ag]:og,[Ul]:rg,[ng]:eg,[sg]:ig,[og]:ag,[rg]:Ul};class ao{addEventListener(t,i){this._listeners===void 0&&(this._listeners={});const s=this._listeners;s[t]===void 0&&(s[t]=[]),s[t].indexOf(i)===-1&&s[t].push(i)}hasEventListener(t,i){const s=this._listeners;return s===void 0?!1:s[t]!==void 0&&s[t].indexOf(i)!==-1}removeEventListener(t,i){const s=this._listeners;if(s===void 0)return;const l=s[t];if(l!==void 0){const c=l.indexOf(i);c!==-1&&l.splice(c,1)}}dispatchEvent(t){const i=this._listeners;if(i===void 0)return;const s=i[t.type];if(s!==void 0){t.target=this;const l=s.slice(0);for(let c=0,d=l.length;c<d;c++)l[c].call(this,t);t.target=null}}}const $n=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],km=Math.PI/180,Gg=180/Math.PI;function pu(){const a=Math.random()*4294967295|0,t=Math.random()*4294967295|0,i=Math.random()*4294967295|0,s=Math.random()*4294967295|0;return($n[a&255]+$n[a>>8&255]+$n[a>>16&255]+$n[a>>24&255]+"-"+$n[t&255]+$n[t>>8&255]+"-"+$n[t>>16&15|64]+$n[t>>24&255]+"-"+$n[i&63|128]+$n[i>>8&255]+"-"+$n[i>>16&255]+$n[i>>24&255]+$n[s&255]+$n[s>>8&255]+$n[s>>16&255]+$n[s>>24&255]).toLowerCase()}function Pe(a,t,i){return Math.max(t,Math.min(i,a))}function aC(a,t){return(a%t+t)%t}function Xm(a,t,i){return(1-i)*a+i*t}function zc(a,t){switch(t.constructor){case Float32Array:return a;case Uint32Array:return a/4294967295;case Uint16Array:return a/65535;case Uint8Array:return a/255;case Int32Array:return Math.max(a/2147483647,-1);case Int16Array:return Math.max(a/32767,-1);case Int8Array:return Math.max(a/127,-1);default:throw new Error("Invalid component type.")}}function vi(a,t){switch(t.constructor){case Float32Array:return a;case Uint32Array:return Math.round(a*4294967295);case Uint16Array:return Math.round(a*65535);case Uint8Array:return Math.round(a*255);case Int32Array:return Math.round(a*2147483647);case Int16Array:return Math.round(a*32767);case Int8Array:return Math.round(a*127);default:throw new Error("Invalid component type.")}}class Je{static{Je.prototype.isVector2=!0}constructor(t=0,i=0){this.x=t,this.y=i}get width(){return this.x}set width(t){this.x=t}get height(){return this.y}set height(t){this.y=t}set(t,i){return this.x=t,this.y=i,this}setScalar(t){return this.x=t,this.y=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setComponent(t,i){switch(t){case 0:this.x=i;break;case 1:this.y=i;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y)}copy(t){return this.x=t.x,this.y=t.y,this}add(t){return this.x+=t.x,this.y+=t.y,this}addScalar(t){return this.x+=t,this.y+=t,this}addVectors(t,i){return this.x=t.x+i.x,this.y=t.y+i.y,this}addScaledVector(t,i){return this.x+=t.x*i,this.y+=t.y*i,this}sub(t){return this.x-=t.x,this.y-=t.y,this}subScalar(t){return this.x-=t,this.y-=t,this}subVectors(t,i){return this.x=t.x-i.x,this.y=t.y-i.y,this}multiply(t){return this.x*=t.x,this.y*=t.y,this}multiplyScalar(t){return this.x*=t,this.y*=t,this}divide(t){return this.x/=t.x,this.y/=t.y,this}divideScalar(t){return this.multiplyScalar(1/t)}applyMatrix3(t){const i=this.x,s=this.y,l=t.elements;return this.x=l[0]*i+l[3]*s+l[6],this.y=l[1]*i+l[4]*s+l[7],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this}clamp(t,i){return this.x=Pe(this.x,t.x,i.x),this.y=Pe(this.y,t.y,i.y),this}clampScalar(t,i){return this.x=Pe(this.x,t,i),this.y=Pe(this.y,t,i),this}clampLength(t,i){const s=this.length();return this.divideScalar(s||1).multiplyScalar(Pe(s,t,i))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(t){return this.x*t.x+this.y*t.y}cross(t){return this.x*t.y-this.y*t.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(t){const i=Math.sqrt(this.lengthSq()*t.lengthSq());if(i===0)return Math.PI/2;const s=this.dot(t)/i;return Math.acos(Pe(s,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const i=this.x-t.x,s=this.y-t.y;return i*i+s*s}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,i){return this.x+=(t.x-this.x)*i,this.y+=(t.y-this.y)*i,this}lerpVectors(t,i,s){return this.x=t.x+(i.x-t.x)*s,this.y=t.y+(i.y-t.y)*s,this}equals(t){return t.x===this.x&&t.y===this.y}fromArray(t,i=0){return this.x=t[i],this.y=t[i+1],this}toArray(t=[],i=0){return t[i]=this.x,t[i+1]=this.y,t}fromBufferAttribute(t,i){return this.x=t.getX(i),this.y=t.getY(i),this}rotateAround(t,i){const s=Math.cos(i),l=Math.sin(i),c=this.x-t.x,d=this.y-t.y;return this.x=c*s-d*l+t.x,this.y=c*l+d*s+t.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class Ia{constructor(t=0,i=0,s=0,l=1){this.isQuaternion=!0,this._x=t,this._y=i,this._z=s,this._w=l}static slerpFlat(t,i,s,l,c,d,h){let p=s[l+0],m=s[l+1],_=s[l+2],g=s[l+3],v=c[d+0],y=c[d+1],b=c[d+2],C=c[d+3];if(g!==C||p!==v||m!==y||_!==b){let S=p*v+m*y+_*b+g*C;S<0&&(v=-v,y=-y,b=-b,C=-C,S=-S);let M=1-h;if(S<.9995){const R=Math.acos(S),P=Math.sin(R);M=Math.sin(M*R)/P,h=Math.sin(h*R)/P,p=p*M+v*h,m=m*M+y*h,_=_*M+b*h,g=g*M+C*h}else{p=p*M+v*h,m=m*M+y*h,_=_*M+b*h,g=g*M+C*h;const R=1/Math.sqrt(p*p+m*m+_*_+g*g);p*=R,m*=R,_*=R,g*=R}}t[i]=p,t[i+1]=m,t[i+2]=_,t[i+3]=g}static multiplyQuaternionsFlat(t,i,s,l,c,d){const h=s[l],p=s[l+1],m=s[l+2],_=s[l+3],g=c[d],v=c[d+1],y=c[d+2],b=c[d+3];return t[i]=h*b+_*g+p*y-m*v,t[i+1]=p*b+_*v+m*g-h*y,t[i+2]=m*b+_*y+h*v-p*g,t[i+3]=_*b-h*g-p*v-m*y,t}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get w(){return this._w}set w(t){this._w=t,this._onChangeCallback()}set(t,i,s,l){return this._x=t,this._y=i,this._z=s,this._w=l,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(t){return this._x=t.x,this._y=t.y,this._z=t.z,this._w=t.w,this._onChangeCallback(),this}setFromEuler(t,i=!0){const s=t._x,l=t._y,c=t._z,d=t._order,h=Math.cos,p=Math.sin,m=h(s/2),_=h(l/2),g=h(c/2),v=p(s/2),y=p(l/2),b=p(c/2);switch(d){case"XYZ":this._x=v*_*g+m*y*b,this._y=m*y*g-v*_*b,this._z=m*_*b+v*y*g,this._w=m*_*g-v*y*b;break;case"YXZ":this._x=v*_*g+m*y*b,this._y=m*y*g-v*_*b,this._z=m*_*b-v*y*g,this._w=m*_*g+v*y*b;break;case"ZXY":this._x=v*_*g-m*y*b,this._y=m*y*g+v*_*b,this._z=m*_*b+v*y*g,this._w=m*_*g-v*y*b;break;case"ZYX":this._x=v*_*g-m*y*b,this._y=m*y*g+v*_*b,this._z=m*_*b-v*y*g,this._w=m*_*g+v*y*b;break;case"YZX":this._x=v*_*g+m*y*b,this._y=m*y*g+v*_*b,this._z=m*_*b-v*y*g,this._w=m*_*g-v*y*b;break;case"XZY":this._x=v*_*g-m*y*b,this._y=m*y*g-v*_*b,this._z=m*_*b+v*y*g,this._w=m*_*g+v*y*b;break;default:de("Quaternion: .setFromEuler() encountered an unknown order: "+d)}return i===!0&&this._onChangeCallback(),this}setFromAxisAngle(t,i){const s=i/2,l=Math.sin(s);return this._x=t.x*l,this._y=t.y*l,this._z=t.z*l,this._w=Math.cos(s),this._onChangeCallback(),this}setFromRotationMatrix(t){const i=t.elements,s=i[0],l=i[4],c=i[8],d=i[1],h=i[5],p=i[9],m=i[2],_=i[6],g=i[10],v=s+h+g;if(v>0){const y=.5/Math.sqrt(v+1);this._w=.25/y,this._x=(_-p)*y,this._y=(c-m)*y,this._z=(d-l)*y}else if(s>h&&s>g){const y=2*Math.sqrt(1+s-h-g);this._w=(_-p)/y,this._x=.25*y,this._y=(l+d)/y,this._z=(c+m)/y}else if(h>g){const y=2*Math.sqrt(1+h-s-g);this._w=(c-m)/y,this._x=(l+d)/y,this._y=.25*y,this._z=(p+_)/y}else{const y=2*Math.sqrt(1+g-s-h);this._w=(d-l)/y,this._x=(c+m)/y,this._y=(p+_)/y,this._z=.25*y}return this._onChangeCallback(),this}setFromUnitVectors(t,i){let s=t.dot(i)+1;return s<1e-8?(s=0,Math.abs(t.x)>Math.abs(t.z)?(this._x=-t.y,this._y=t.x,this._z=0,this._w=s):(this._x=0,this._y=-t.z,this._z=t.y,this._w=s)):(this._x=t.y*i.z-t.z*i.y,this._y=t.z*i.x-t.x*i.z,this._z=t.x*i.y-t.y*i.x,this._w=s),this.normalize()}angleTo(t){return 2*Math.acos(Math.abs(Pe(this.dot(t),-1,1)))}rotateTowards(t,i){const s=this.angleTo(t);if(s===0)return this;const l=Math.min(1,i/s);return this.slerp(t,l),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(t){return this._x*t._x+this._y*t._y+this._z*t._z+this._w*t._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let t=this.length();return t===0?(this._x=0,this._y=0,this._z=0,this._w=1):(t=1/t,this._x=this._x*t,this._y=this._y*t,this._z=this._z*t,this._w=this._w*t),this._onChangeCallback(),this}multiply(t){return this.multiplyQuaternions(this,t)}premultiply(t){return this.multiplyQuaternions(t,this)}multiplyQuaternions(t,i){const s=t._x,l=t._y,c=t._z,d=t._w,h=i._x,p=i._y,m=i._z,_=i._w;return this._x=s*_+d*h+l*m-c*p,this._y=l*_+d*p+c*h-s*m,this._z=c*_+d*m+s*p-l*h,this._w=d*_-s*h-l*p-c*m,this._onChangeCallback(),this}slerp(t,i){let s=t._x,l=t._y,c=t._z,d=t._w,h=this.dot(t);h<0&&(s=-s,l=-l,c=-c,d=-d,h=-h);let p=1-i;if(h<.9995){const m=Math.acos(h),_=Math.sin(m);p=Math.sin(p*m)/_,i=Math.sin(i*m)/_,this._x=this._x*p+s*i,this._y=this._y*p+l*i,this._z=this._z*p+c*i,this._w=this._w*p+d*i,this._onChangeCallback()}else this._x=this._x*p+s*i,this._y=this._y*p+l*i,this._z=this._z*p+c*i,this._w=this._w*p+d*i,this.normalize();return this}slerpQuaternions(t,i,s){return this.copy(t).slerp(i,s)}random(){const t=2*Math.PI*Math.random(),i=2*Math.PI*Math.random(),s=Math.random(),l=Math.sqrt(1-s),c=Math.sqrt(s);return this.set(l*Math.sin(t),l*Math.cos(t),c*Math.sin(i),c*Math.cos(i))}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._w===this._w}fromArray(t,i=0){return this._x=t[i],this._y=t[i+1],this._z=t[i+2],this._w=t[i+3],this._onChangeCallback(),this}toArray(t=[],i=0){return t[i]=this._x,t[i+1]=this._y,t[i+2]=this._z,t[i+3]=this._w,t}fromBufferAttribute(t,i){return this._x=t.getX(i),this._y=t.getY(i),this._z=t.getZ(i),this._w=t.getW(i),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class ut{static{ut.prototype.isVector3=!0}constructor(t=0,i=0,s=0){this.x=t,this.y=i,this.z=s}set(t,i,s){return s===void 0&&(s=this.z),this.x=t,this.y=i,this.z=s,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setComponent(t,i){switch(t){case 0:this.x=i;break;case 1:this.y=i;break;case 2:this.z=i;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this}addVectors(t,i){return this.x=t.x+i.x,this.y=t.y+i.y,this.z=t.z+i.z,this}addScaledVector(t,i){return this.x+=t.x*i,this.y+=t.y*i,this.z+=t.z*i,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this}subVectors(t,i){return this.x=t.x-i.x,this.y=t.y-i.y,this.z=t.z-i.z,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this}multiplyVectors(t,i){return this.x=t.x*i.x,this.y=t.y*i.y,this.z=t.z*i.z,this}applyEuler(t){return this.applyQuaternion(c1.setFromEuler(t))}applyAxisAngle(t,i){return this.applyQuaternion(c1.setFromAxisAngle(t,i))}applyMatrix3(t){const i=this.x,s=this.y,l=this.z,c=t.elements;return this.x=c[0]*i+c[3]*s+c[6]*l,this.y=c[1]*i+c[4]*s+c[7]*l,this.z=c[2]*i+c[5]*s+c[8]*l,this}applyNormalMatrix(t){return this.applyMatrix3(t).normalize()}applyMatrix4(t){const i=this.x,s=this.y,l=this.z,c=t.elements,d=1/(c[3]*i+c[7]*s+c[11]*l+c[15]);return this.x=(c[0]*i+c[4]*s+c[8]*l+c[12])*d,this.y=(c[1]*i+c[5]*s+c[9]*l+c[13])*d,this.z=(c[2]*i+c[6]*s+c[10]*l+c[14])*d,this}applyQuaternion(t){const i=this.x,s=this.y,l=this.z,c=t.x,d=t.y,h=t.z,p=t.w,m=2*(d*l-h*s),_=2*(h*i-c*l),g=2*(c*s-d*i);return this.x=i+p*m+d*g-h*_,this.y=s+p*_+h*m-c*g,this.z=l+p*g+c*_-d*m,this}project(t){return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)}unproject(t){return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)}transformDirection(t){const i=this.x,s=this.y,l=this.z,c=t.elements;return this.x=c[0]*i+c[4]*s+c[8]*l,this.y=c[1]*i+c[5]*s+c[9]*l,this.z=c[2]*i+c[6]*s+c[10]*l,this.normalize()}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this}divideScalar(t){return this.multiplyScalar(1/t)}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this}clamp(t,i){return this.x=Pe(this.x,t.x,i.x),this.y=Pe(this.y,t.y,i.y),this.z=Pe(this.z,t.z,i.z),this}clampScalar(t,i){return this.x=Pe(this.x,t,i),this.y=Pe(this.y,t,i),this.z=Pe(this.z,t,i),this}clampLength(t,i){const s=this.length();return this.divideScalar(s||1).multiplyScalar(Pe(s,t,i))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,i){return this.x+=(t.x-this.x)*i,this.y+=(t.y-this.y)*i,this.z+=(t.z-this.z)*i,this}lerpVectors(t,i,s){return this.x=t.x+(i.x-t.x)*s,this.y=t.y+(i.y-t.y)*s,this.z=t.z+(i.z-t.z)*s,this}cross(t){return this.crossVectors(this,t)}crossVectors(t,i){const s=t.x,l=t.y,c=t.z,d=i.x,h=i.y,p=i.z;return this.x=l*p-c*h,this.y=c*d-s*p,this.z=s*h-l*d,this}projectOnVector(t){const i=t.lengthSq();if(i===0)return this.set(0,0,0);const s=t.dot(this)/i;return this.copy(t).multiplyScalar(s)}projectOnPlane(t){return qm.copy(this).projectOnVector(t),this.sub(qm)}reflect(t){return this.sub(qm.copy(t).multiplyScalar(2*this.dot(t)))}angleTo(t){const i=Math.sqrt(this.lengthSq()*t.lengthSq());if(i===0)return Math.PI/2;const s=this.dot(t)/i;return Math.acos(Pe(s,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const i=this.x-t.x,s=this.y-t.y,l=this.z-t.z;return i*i+s*s+l*l}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)+Math.abs(this.z-t.z)}setFromSpherical(t){return this.setFromSphericalCoords(t.radius,t.phi,t.theta)}setFromSphericalCoords(t,i,s){const l=Math.sin(i)*t;return this.x=l*Math.sin(s),this.y=Math.cos(i)*t,this.z=l*Math.cos(s),this}setFromCylindrical(t){return this.setFromCylindricalCoords(t.radius,t.theta,t.y)}setFromCylindricalCoords(t,i,s){return this.x=t*Math.sin(i),this.y=s,this.z=t*Math.cos(i),this}setFromMatrixPosition(t){const i=t.elements;return this.x=i[12],this.y=i[13],this.z=i[14],this}setFromMatrixScale(t){const i=this.setFromMatrixColumn(t,0).length(),s=this.setFromMatrixColumn(t,1).length(),l=this.setFromMatrixColumn(t,2).length();return this.x=i,this.y=s,this.z=l,this}setFromMatrixColumn(t,i){return this.fromArray(t.elements,i*4)}setFromMatrix3Column(t,i){return this.fromArray(t.elements,i*3)}setFromEuler(t){return this.x=t._x,this.y=t._y,this.z=t._z,this}setFromColor(t){return this.x=t.r,this.y=t.g,this.z=t.b,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z}fromArray(t,i=0){return this.x=t[i],this.y=t[i+1],this.z=t[i+2],this}toArray(t=[],i=0){return t[i]=this.x,t[i+1]=this.y,t[i+2]=this.z,t}fromBufferAttribute(t,i){return this.x=t.getX(i),this.y=t.getY(i),this.z=t.getZ(i),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const t=Math.random()*Math.PI*2,i=Math.random()*2-1,s=Math.sqrt(1-i*i);return this.x=s*Math.cos(t),this.y=i,this.z=s*Math.sin(t),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const qm=new ut,c1=new Ia;class _e{static{_e.prototype.isMatrix3=!0}constructor(t,i,s,l,c,d,h,p,m){this.elements=[1,0,0,0,1,0,0,0,1],t!==void 0&&this.set(t,i,s,l,c,d,h,p,m)}set(t,i,s,l,c,d,h,p,m){const _=this.elements;return _[0]=t,_[1]=l,_[2]=h,_[3]=i,_[4]=c,_[5]=p,_[6]=s,_[7]=d,_[8]=m,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(t){const i=this.elements,s=t.elements;return i[0]=s[0],i[1]=s[1],i[2]=s[2],i[3]=s[3],i[4]=s[4],i[5]=s[5],i[6]=s[6],i[7]=s[7],i[8]=s[8],this}extractBasis(t,i,s){return t.setFromMatrix3Column(this,0),i.setFromMatrix3Column(this,1),s.setFromMatrix3Column(this,2),this}setFromMatrix4(t){const i=t.elements;return this.set(i[0],i[4],i[8],i[1],i[5],i[9],i[2],i[6],i[10]),this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,i){const s=t.elements,l=i.elements,c=this.elements,d=s[0],h=s[3],p=s[6],m=s[1],_=s[4],g=s[7],v=s[2],y=s[5],b=s[8],C=l[0],S=l[3],M=l[6],R=l[1],P=l[4],N=l[7],H=l[2],U=l[5],L=l[8];return c[0]=d*C+h*R+p*H,c[3]=d*S+h*P+p*U,c[6]=d*M+h*N+p*L,c[1]=m*C+_*R+g*H,c[4]=m*S+_*P+g*U,c[7]=m*M+_*N+g*L,c[2]=v*C+y*R+b*H,c[5]=v*S+y*P+b*U,c[8]=v*M+y*N+b*L,this}multiplyScalar(t){const i=this.elements;return i[0]*=t,i[3]*=t,i[6]*=t,i[1]*=t,i[4]*=t,i[7]*=t,i[2]*=t,i[5]*=t,i[8]*=t,this}determinant(){const t=this.elements,i=t[0],s=t[1],l=t[2],c=t[3],d=t[4],h=t[5],p=t[6],m=t[7],_=t[8];return i*d*_-i*h*m-s*c*_+s*h*p+l*c*m-l*d*p}invert(){const t=this.elements,i=t[0],s=t[1],l=t[2],c=t[3],d=t[4],h=t[5],p=t[6],m=t[7],_=t[8],g=_*d-h*m,v=h*p-_*c,y=m*c-d*p,b=i*g+s*v+l*y;if(b===0)return this.set(0,0,0,0,0,0,0,0,0);const C=1/b;return t[0]=g*C,t[1]=(l*m-_*s)*C,t[2]=(h*s-l*d)*C,t[3]=v*C,t[4]=(_*i-l*p)*C,t[5]=(l*c-h*i)*C,t[6]=y*C,t[7]=(s*p-m*i)*C,t[8]=(d*i-s*c)*C,this}transpose(){let t;const i=this.elements;return t=i[1],i[1]=i[3],i[3]=t,t=i[2],i[2]=i[6],i[6]=t,t=i[5],i[5]=i[7],i[7]=t,this}getNormalMatrix(t){return this.setFromMatrix4(t).invert().transpose()}transposeIntoArray(t){const i=this.elements;return t[0]=i[0],t[1]=i[3],t[2]=i[6],t[3]=i[1],t[4]=i[4],t[5]=i[7],t[6]=i[2],t[7]=i[5],t[8]=i[8],this}setUvTransform(t,i,s,l,c,d,h){const p=Math.cos(c),m=Math.sin(c);return this.set(s*p,s*m,-s*(p*d+m*h)+d+t,-l*m,l*p,-l*(-m*d+p*h)+h+i,0,0,1),this}scale(t,i){return this.premultiply(Wm.makeScale(t,i)),this}rotate(t){return this.premultiply(Wm.makeRotation(-t)),this}translate(t,i){return this.premultiply(Wm.makeTranslation(t,i)),this}makeTranslation(t,i){return t.isVector2?this.set(1,0,t.x,0,1,t.y,0,0,1):this.set(1,0,t,0,1,i,0,0,1),this}makeRotation(t){const i=Math.cos(t),s=Math.sin(t);return this.set(i,-s,0,s,i,0,0,0,1),this}makeScale(t,i){return this.set(t,0,0,0,i,0,0,0,1),this}equals(t){const i=this.elements,s=t.elements;for(let l=0;l<9;l++)if(i[l]!==s[l])return!1;return!0}fromArray(t,i=0){for(let s=0;s<9;s++)this.elements[s]=t[s+i];return this}toArray(t=[],i=0){const s=this.elements;return t[i]=s[0],t[i+1]=s[1],t[i+2]=s[2],t[i+3]=s[3],t[i+4]=s[4],t[i+5]=s[5],t[i+6]=s[6],t[i+7]=s[7],t[i+8]=s[8],t}clone(){return new this.constructor().fromArray(this.elements)}}const Wm=new _e,u1=new _e().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),f1=new _e().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function rC(){const a={enabled:!0,workingColorSpace:Bd,spaces:{},convert:function(l,c,d){return this.enabled===!1||c===d||!c||!d||(this.spaces[c].transfer===$e&&(l.r=mr(l.r),l.g=mr(l.g),l.b=mr(l.b)),this.spaces[c].primaries!==this.spaces[d].primaries&&(l.applyMatrix3(this.spaces[c].toXYZ),l.applyMatrix3(this.spaces[d].fromXYZ)),this.spaces[d].transfer===$e&&(l.r=Al(l.r),l.g=Al(l.g),l.b=Al(l.b))),l},workingToColorSpace:function(l,c){return this.convert(l,this.workingColorSpace,c)},colorSpaceToWorking:function(l,c){return this.convert(l,c,this.workingColorSpace)},getPrimaries:function(l){return this.spaces[l].primaries},getTransfer:function(l){return l===ls?Hd:this.spaces[l].transfer},getToneMappingMode:function(l){return this.spaces[l].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(l,c=this.workingColorSpace){return l.fromArray(this.spaces[c].luminanceCoefficients)},define:function(l){Object.assign(this.spaces,l)},_getMatrix:function(l,c,d){return l.copy(this.spaces[c].toXYZ).multiply(this.spaces[d].fromXYZ)},_getDrawingBufferColorSpace:function(l){return this.spaces[l].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(l=this.workingColorSpace){return this.spaces[l].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(l,c){return Hg("ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),a.workingToColorSpace(l,c)},toWorkingColorSpace:function(l,c){return Hg("ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),a.colorSpaceToWorking(l,c)}},t=[.64,.33,.3,.6,.15,.06],i=[.2126,.7152,.0722],s=[.3127,.329];return a.define({[Bd]:{primaries:t,whitePoint:s,transfer:Hd,toXYZ:u1,fromXYZ:f1,luminanceCoefficients:i,workingColorSpaceConfig:{unpackColorSpace:Zi},outputColorSpaceConfig:{drawingBufferColorSpace:Zi}},[Zi]:{primaries:t,whitePoint:s,transfer:$e,toXYZ:u1,fromXYZ:f1,luminanceCoefficients:i,outputColorSpaceConfig:{drawingBufferColorSpace:Zi}}}),a}const Oe=rC();function mr(a){return a<.04045?a*.0773993808:Math.pow(a*.9478672986+.0521327014,2.4)}function Al(a){return a<.0031308?a*12.92:1.055*Math.pow(a,.41666)-.055}let $o;class sC{static getDataURL(t,i="image/png"){if(/^data:/i.test(t.src)||typeof HTMLCanvasElement>"u")return t.src;let s;if(t instanceof HTMLCanvasElement)s=t;else{$o===void 0&&($o=Vd("canvas")),$o.width=t.width,$o.height=t.height;const l=$o.getContext("2d");t instanceof ImageData?l.putImageData(t,0,0):l.drawImage(t,0,0,t.width,t.height),s=$o}return s.toDataURL(i)}static sRGBToLinear(t){if(typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap){const i=Vd("canvas");i.width=t.width,i.height=t.height;const s=i.getContext("2d");s.drawImage(t,0,0,t.width,t.height);const l=s.getImageData(0,0,t.width,t.height),c=l.data;for(let d=0;d<c.length;d++)c[d]=mr(c[d]/255)*255;return s.putImageData(l,0,0),i}else if(t.data){const i=t.data.slice(0);for(let s=0;s<i.length;s++)i instanceof Uint8Array||i instanceof Uint8ClampedArray?i[s]=Math.floor(mr(i[s]/255)*255):i[s]=mr(i[s]);return{data:i,width:t.width,height:t.height}}else return de("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),t}}let oC=0;class uv{constructor(t=null){this.isSource=!0,Object.defineProperty(this,"id",{value:oC++}),this.uuid=pu(),this.data=t,this.dataReady=!0,this.version=0}getSize(t){const i=this.data;return typeof HTMLVideoElement<"u"&&i instanceof HTMLVideoElement?t.set(i.videoWidth,i.videoHeight,0):typeof VideoFrame<"u"&&i instanceof VideoFrame?t.set(i.displayWidth,i.displayHeight,0):i!==null?t.set(i.width,i.height,i.depth||0):t.set(0,0,0),t}set needsUpdate(t){t===!0&&this.version++}toJSON(t){const i=t===void 0||typeof t=="string";if(!i&&t.images[this.uuid]!==void 0)return t.images[this.uuid];const s={uuid:this.uuid,url:""},l=this.data;if(l!==null){let c;if(Array.isArray(l)){c=[];for(let d=0,h=l.length;d<h;d++)l[d].isDataTexture?c.push(jm(l[d].image)):c.push(jm(l[d]))}else c=jm(l);s.url=c}return i||(t.images[this.uuid]=s),s}}function jm(a){return typeof HTMLImageElement<"u"&&a instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&a instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&a instanceof ImageBitmap?sC.getDataURL(a):a.data?{data:Array.from(a.data),width:a.width,height:a.height,type:a.data.constructor.name}:(de("Texture: Unable to serialize Texture."),{})}let lC=0;const Ym=new ut;class ci extends ao{constructor(t=ci.DEFAULT_IMAGE,i=ci.DEFAULT_MAPPING,s=hr,l=hr,c=ti,d=Zs,h=ma,p=Ki,m=ci.DEFAULT_ANISOTROPY,_=ls){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:lC++}),this.uuid=pu(),this.name="",this.source=new uv(t),this.mipmaps=[],this.mapping=i,this.channel=0,this.wrapS=s,this.wrapT=l,this.magFilter=c,this.minFilter=d,this.anisotropy=m,this.format=h,this.internalFormat=null,this.type=p,this.offset=new Je(0,0),this.repeat=new Je(1,1),this.center=new Je(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new _e,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=_,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(t&&t.depth&&t.depth>1),this.pmremVersion=0,this.normalized=!1}get width(){return this.source.getSize(Ym).x}get height(){return this.source.getSize(Ym).y}get depth(){return this.source.getSize(Ym).z}get image(){return this.source.data}set image(t){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(t,i){this.updateRanges.push({start:t,count:i})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.channel=t.channel,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.normalized=t.normalized,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.colorSpace=t.colorSpace,this.renderTarget=t.renderTarget,this.isRenderTargetTexture=t.isRenderTargetTexture,this.isArrayTexture=t.isArrayTexture,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}setValues(t){for(const i in t){const s=t[i];if(s===void 0){de(`Texture.setValues(): parameter '${i}' has value of undefined.`);continue}const l=this[i];if(l===void 0){de(`Texture.setValues(): property '${i}' does not exist.`);continue}l&&s&&l.isVector2&&s.isVector2||l&&s&&l.isVector3&&s.isVector3||l&&s&&l.isMatrix3&&s.isMatrix3?l.copy(s):this[i]=s}}toJSON(t){const i=t===void 0||typeof t=="string";if(!i&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];const s={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,normalized:this.normalized,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(s.userData=this.userData),i||(t.textures[this.uuid]=s),s}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==rE)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case lg:t.x=t.x-Math.floor(t.x);break;case hr:t.x=t.x<0?0:1;break;case cg:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case lg:t.y=t.y-Math.floor(t.y);break;case hr:t.y=t.y<0?0:1;break;case cg:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(t){t===!0&&this.pmremVersion++}}ci.DEFAULT_IMAGE=null;ci.DEFAULT_MAPPING=rE;ci.DEFAULT_ANISOTROPY=1;class Mn{static{Mn.prototype.isVector4=!0}constructor(t=0,i=0,s=0,l=1){this.x=t,this.y=i,this.z=s,this.w=l}get width(){return this.z}set width(t){this.z=t}get height(){return this.w}set height(t){this.w=t}set(t,i,s,l){return this.x=t,this.y=i,this.z=s,this.w=l,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this.w=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setW(t){return this.w=t,this}setComponent(t,i){switch(t){case 0:this.x=i;break;case 1:this.y=i;break;case 2:this.z=i;break;case 3:this.w=i;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w!==void 0?t.w:1,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this.w+=t.w,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this.w+=t,this}addVectors(t,i){return this.x=t.x+i.x,this.y=t.y+i.y,this.z=t.z+i.z,this.w=t.w+i.w,this}addScaledVector(t,i){return this.x+=t.x*i,this.y+=t.y*i,this.z+=t.z*i,this.w+=t.w*i,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this.w-=t.w,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this.w-=t,this}subVectors(t,i){return this.x=t.x-i.x,this.y=t.y-i.y,this.z=t.z-i.z,this.w=t.w-i.w,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this.w*=t.w,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this.w*=t,this}applyMatrix4(t){const i=this.x,s=this.y,l=this.z,c=this.w,d=t.elements;return this.x=d[0]*i+d[4]*s+d[8]*l+d[12]*c,this.y=d[1]*i+d[5]*s+d[9]*l+d[13]*c,this.z=d[2]*i+d[6]*s+d[10]*l+d[14]*c,this.w=d[3]*i+d[7]*s+d[11]*l+d[15]*c,this}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this.w/=t.w,this}divideScalar(t){return this.multiplyScalar(1/t)}setAxisAngleFromQuaternion(t){this.w=2*Math.acos(t.w);const i=Math.sqrt(1-t.w*t.w);return i<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=t.x/i,this.y=t.y/i,this.z=t.z/i),this}setAxisAngleFromRotationMatrix(t){let i,s,l,c;const p=t.elements,m=p[0],_=p[4],g=p[8],v=p[1],y=p[5],b=p[9],C=p[2],S=p[6],M=p[10];if(Math.abs(_-v)<.01&&Math.abs(g-C)<.01&&Math.abs(b-S)<.01){if(Math.abs(_+v)<.1&&Math.abs(g+C)<.1&&Math.abs(b+S)<.1&&Math.abs(m+y+M-3)<.1)return this.set(1,0,0,0),this;i=Math.PI;const P=(m+1)/2,N=(y+1)/2,H=(M+1)/2,U=(_+v)/4,L=(g+C)/4,E=(b+S)/4;return P>N&&P>H?P<.01?(s=0,l=.707106781,c=.707106781):(s=Math.sqrt(P),l=U/s,c=L/s):N>H?N<.01?(s=.707106781,l=0,c=.707106781):(l=Math.sqrt(N),s=U/l,c=E/l):H<.01?(s=.707106781,l=.707106781,c=0):(c=Math.sqrt(H),s=L/c,l=E/c),this.set(s,l,c,i),this}let R=Math.sqrt((S-b)*(S-b)+(g-C)*(g-C)+(v-_)*(v-_));return Math.abs(R)<.001&&(R=1),this.x=(S-b)/R,this.y=(g-C)/R,this.z=(v-_)/R,this.w=Math.acos((m+y+M-1)/2),this}setFromMatrixPosition(t){const i=t.elements;return this.x=i[12],this.y=i[13],this.z=i[14],this.w=i[15],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this.w=Math.min(this.w,t.w),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this.w=Math.max(this.w,t.w),this}clamp(t,i){return this.x=Pe(this.x,t.x,i.x),this.y=Pe(this.y,t.y,i.y),this.z=Pe(this.z,t.z,i.z),this.w=Pe(this.w,t.w,i.w),this}clampScalar(t,i){return this.x=Pe(this.x,t,i),this.y=Pe(this.y,t,i),this.z=Pe(this.z,t,i),this.w=Pe(this.w,t,i),this}clampLength(t,i){const s=this.length();return this.divideScalar(s||1).multiplyScalar(Pe(s,t,i))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,i){return this.x+=(t.x-this.x)*i,this.y+=(t.y-this.y)*i,this.z+=(t.z-this.z)*i,this.w+=(t.w-this.w)*i,this}lerpVectors(t,i,s){return this.x=t.x+(i.x-t.x)*s,this.y=t.y+(i.y-t.y)*s,this.z=t.z+(i.z-t.z)*s,this.w=t.w+(i.w-t.w)*s,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z&&t.w===this.w}fromArray(t,i=0){return this.x=t[i],this.y=t[i+1],this.z=t[i+2],this.w=t[i+3],this}toArray(t=[],i=0){return t[i]=this.x,t[i+1]=this.y,t[i+2]=this.z,t[i+3]=this.w,t}fromBufferAttribute(t,i){return this.x=t.getX(i),this.y=t.getY(i),this.z=t.getZ(i),this.w=t.getW(i),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class cC extends ao{constructor(t=1,i=1,s={}){super(),s=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:ti,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1},s),this.isRenderTarget=!0,this.width=t,this.height=i,this.depth=s.depth,this.scissor=new Mn(0,0,t,i),this.scissorTest=!1,this.viewport=new Mn(0,0,t,i),this.textures=[];const l={width:t,height:i,depth:s.depth},c=new ci(l),d=s.count;for(let h=0;h<d;h++)this.textures[h]=c.clone(),this.textures[h].isRenderTargetTexture=!0,this.textures[h].renderTarget=this;this._setTextureOptions(s),this.depthBuffer=s.depthBuffer,this.stencilBuffer=s.stencilBuffer,this.resolveDepthBuffer=s.resolveDepthBuffer,this.resolveStencilBuffer=s.resolveStencilBuffer,this._depthTexture=null,this.depthTexture=s.depthTexture,this.samples=s.samples,this.multiview=s.multiview}_setTextureOptions(t={}){const i={minFilter:ti,generateMipmaps:!1,flipY:!1,internalFormat:null};t.mapping!==void 0&&(i.mapping=t.mapping),t.wrapS!==void 0&&(i.wrapS=t.wrapS),t.wrapT!==void 0&&(i.wrapT=t.wrapT),t.wrapR!==void 0&&(i.wrapR=t.wrapR),t.magFilter!==void 0&&(i.magFilter=t.magFilter),t.minFilter!==void 0&&(i.minFilter=t.minFilter),t.format!==void 0&&(i.format=t.format),t.type!==void 0&&(i.type=t.type),t.anisotropy!==void 0&&(i.anisotropy=t.anisotropy),t.colorSpace!==void 0&&(i.colorSpace=t.colorSpace),t.flipY!==void 0&&(i.flipY=t.flipY),t.generateMipmaps!==void 0&&(i.generateMipmaps=t.generateMipmaps),t.internalFormat!==void 0&&(i.internalFormat=t.internalFormat);for(let s=0;s<this.textures.length;s++)this.textures[s].setValues(i)}get texture(){return this.textures[0]}set texture(t){this.textures[0]=t}set depthTexture(t){this._depthTexture!==null&&(this._depthTexture.renderTarget=null),t!==null&&(t.renderTarget=this),this._depthTexture=t}get depthTexture(){return this._depthTexture}setSize(t,i,s=1){if(this.width!==t||this.height!==i||this.depth!==s){this.width=t,this.height=i,this.depth=s;for(let l=0,c=this.textures.length;l<c;l++)this.textures[l].image.width=t,this.textures[l].image.height=i,this.textures[l].image.depth=s,this.textures[l].isData3DTexture!==!0&&(this.textures[l].isArrayTexture=this.textures[l].image.depth>1);this.dispose()}this.viewport.set(0,0,t,i),this.scissor.set(0,0,t,i)}clone(){return new this.constructor().copy(this)}copy(t){this.width=t.width,this.height=t.height,this.depth=t.depth,this.scissor.copy(t.scissor),this.scissorTest=t.scissorTest,this.viewport.copy(t.viewport),this.textures.length=0;for(let i=0,s=t.textures.length;i<s;i++){this.textures[i]=t.textures[i].clone(),this.textures[i].isRenderTargetTexture=!0,this.textures[i].renderTarget=this;const l=Object.assign({},t.textures[i].image);this.textures[i].source=new uv(l)}return this.depthBuffer=t.depthBuffer,this.stencilBuffer=t.stencilBuffer,this.resolveDepthBuffer=t.resolveDepthBuffer,this.resolveStencilBuffer=t.resolveStencilBuffer,t.depthTexture!==null&&(this.depthTexture=t.depthTexture.clone()),this.samples=t.samples,this.multiview=t.multiview,this}dispose(){this.dispatchEvent({type:"dispose"})}}class Ha extends cC{constructor(t=1,i=1,s={}){super(t,i,s),this.isWebGLRenderTarget=!0}}class pE extends ci{constructor(t=null,i=1,s=1,l=1){super(null),this.isDataArrayTexture=!0,this.image={data:t,width:i,height:s,depth:l},this.magFilter=Qn,this.minFilter=Qn,this.wrapR=hr,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(t){this.layerUpdates.add(t)}clearLayerUpdates(){this.layerUpdates.clear()}}class uC extends ci{constructor(t=null,i=1,s=1,l=1){super(null),this.isData3DTexture=!0,this.image={data:t,width:i,height:s,depth:l},this.magFilter=Qn,this.minFilter=Qn,this.wrapR=hr,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Nn{static{Nn.prototype.isMatrix4=!0}constructor(t,i,s,l,c,d,h,p,m,_,g,v,y,b,C,S){this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],t!==void 0&&this.set(t,i,s,l,c,d,h,p,m,_,g,v,y,b,C,S)}set(t,i,s,l,c,d,h,p,m,_,g,v,y,b,C,S){const M=this.elements;return M[0]=t,M[4]=i,M[8]=s,M[12]=l,M[1]=c,M[5]=d,M[9]=h,M[13]=p,M[2]=m,M[6]=_,M[10]=g,M[14]=v,M[3]=y,M[7]=b,M[11]=C,M[15]=S,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new Nn().fromArray(this.elements)}copy(t){const i=this.elements,s=t.elements;return i[0]=s[0],i[1]=s[1],i[2]=s[2],i[3]=s[3],i[4]=s[4],i[5]=s[5],i[6]=s[6],i[7]=s[7],i[8]=s[8],i[9]=s[9],i[10]=s[10],i[11]=s[11],i[12]=s[12],i[13]=s[13],i[14]=s[14],i[15]=s[15],this}copyPosition(t){const i=this.elements,s=t.elements;return i[12]=s[12],i[13]=s[13],i[14]=s[14],this}setFromMatrix3(t){const i=t.elements;return this.set(i[0],i[3],i[6],0,i[1],i[4],i[7],0,i[2],i[5],i[8],0,0,0,0,1),this}extractBasis(t,i,s){return this.determinant()===0?(t.set(1,0,0),i.set(0,1,0),s.set(0,0,1),this):(t.setFromMatrixColumn(this,0),i.setFromMatrixColumn(this,1),s.setFromMatrixColumn(this,2),this)}makeBasis(t,i,s){return this.set(t.x,i.x,s.x,0,t.y,i.y,s.y,0,t.z,i.z,s.z,0,0,0,0,1),this}extractRotation(t){if(t.determinant()===0)return this.identity();const i=this.elements,s=t.elements,l=1/Jo.setFromMatrixColumn(t,0).length(),c=1/Jo.setFromMatrixColumn(t,1).length(),d=1/Jo.setFromMatrixColumn(t,2).length();return i[0]=s[0]*l,i[1]=s[1]*l,i[2]=s[2]*l,i[3]=0,i[4]=s[4]*c,i[5]=s[5]*c,i[6]=s[6]*c,i[7]=0,i[8]=s[8]*d,i[9]=s[9]*d,i[10]=s[10]*d,i[11]=0,i[12]=0,i[13]=0,i[14]=0,i[15]=1,this}makeRotationFromEuler(t){const i=this.elements,s=t.x,l=t.y,c=t.z,d=Math.cos(s),h=Math.sin(s),p=Math.cos(l),m=Math.sin(l),_=Math.cos(c),g=Math.sin(c);if(t.order==="XYZ"){const v=d*_,y=d*g,b=h*_,C=h*g;i[0]=p*_,i[4]=-p*g,i[8]=m,i[1]=y+b*m,i[5]=v-C*m,i[9]=-h*p,i[2]=C-v*m,i[6]=b+y*m,i[10]=d*p}else if(t.order==="YXZ"){const v=p*_,y=p*g,b=m*_,C=m*g;i[0]=v+C*h,i[4]=b*h-y,i[8]=d*m,i[1]=d*g,i[5]=d*_,i[9]=-h,i[2]=y*h-b,i[6]=C+v*h,i[10]=d*p}else if(t.order==="ZXY"){const v=p*_,y=p*g,b=m*_,C=m*g;i[0]=v-C*h,i[4]=-d*g,i[8]=b+y*h,i[1]=y+b*h,i[5]=d*_,i[9]=C-v*h,i[2]=-d*m,i[6]=h,i[10]=d*p}else if(t.order==="ZYX"){const v=d*_,y=d*g,b=h*_,C=h*g;i[0]=p*_,i[4]=b*m-y,i[8]=v*m+C,i[1]=p*g,i[5]=C*m+v,i[9]=y*m-b,i[2]=-m,i[6]=h*p,i[10]=d*p}else if(t.order==="YZX"){const v=d*p,y=d*m,b=h*p,C=h*m;i[0]=p*_,i[4]=C-v*g,i[8]=b*g+y,i[1]=g,i[5]=d*_,i[9]=-h*_,i[2]=-m*_,i[6]=y*g+b,i[10]=v-C*g}else if(t.order==="XZY"){const v=d*p,y=d*m,b=h*p,C=h*m;i[0]=p*_,i[4]=-g,i[8]=m*_,i[1]=v*g+C,i[5]=d*_,i[9]=y*g-b,i[2]=b*g-y,i[6]=h*_,i[10]=C*g+v}return i[3]=0,i[7]=0,i[11]=0,i[12]=0,i[13]=0,i[14]=0,i[15]=1,this}makeRotationFromQuaternion(t){return this.compose(fC,t,dC)}lookAt(t,i,s){const l=this.elements;return Ni.subVectors(t,i),Ni.lengthSq()===0&&(Ni.z=1),Ni.normalize(),$r.crossVectors(s,Ni),$r.lengthSq()===0&&(Math.abs(s.z)===1?Ni.x+=1e-4:Ni.z+=1e-4,Ni.normalize(),$r.crossVectors(s,Ni)),$r.normalize(),qf.crossVectors(Ni,$r),l[0]=$r.x,l[4]=qf.x,l[8]=Ni.x,l[1]=$r.y,l[5]=qf.y,l[9]=Ni.y,l[2]=$r.z,l[6]=qf.z,l[10]=Ni.z,this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,i){const s=t.elements,l=i.elements,c=this.elements,d=s[0],h=s[4],p=s[8],m=s[12],_=s[1],g=s[5],v=s[9],y=s[13],b=s[2],C=s[6],S=s[10],M=s[14],R=s[3],P=s[7],N=s[11],H=s[15],U=l[0],L=l[4],E=l[8],O=l[12],V=l[1],z=l[5],Z=l[9],tt=l[13],ft=l[2],X=l[6],B=l[10],W=l[14],J=l[3],dt=l[7],pt=l[11],Tt=l[15];return c[0]=d*U+h*V+p*ft+m*J,c[4]=d*L+h*z+p*X+m*dt,c[8]=d*E+h*Z+p*B+m*pt,c[12]=d*O+h*tt+p*W+m*Tt,c[1]=_*U+g*V+v*ft+y*J,c[5]=_*L+g*z+v*X+y*dt,c[9]=_*E+g*Z+v*B+y*pt,c[13]=_*O+g*tt+v*W+y*Tt,c[2]=b*U+C*V+S*ft+M*J,c[6]=b*L+C*z+S*X+M*dt,c[10]=b*E+C*Z+S*B+M*pt,c[14]=b*O+C*tt+S*W+M*Tt,c[3]=R*U+P*V+N*ft+H*J,c[7]=R*L+P*z+N*X+H*dt,c[11]=R*E+P*Z+N*B+H*pt,c[15]=R*O+P*tt+N*W+H*Tt,this}multiplyScalar(t){const i=this.elements;return i[0]*=t,i[4]*=t,i[8]*=t,i[12]*=t,i[1]*=t,i[5]*=t,i[9]*=t,i[13]*=t,i[2]*=t,i[6]*=t,i[10]*=t,i[14]*=t,i[3]*=t,i[7]*=t,i[11]*=t,i[15]*=t,this}determinant(){const t=this.elements,i=t[0],s=t[4],l=t[8],c=t[12],d=t[1],h=t[5],p=t[9],m=t[13],_=t[2],g=t[6],v=t[10],y=t[14],b=t[3],C=t[7],S=t[11],M=t[15],R=p*y-m*v,P=h*y-m*g,N=h*v-p*g,H=d*y-m*_,U=d*v-p*_,L=d*g-h*_;return i*(C*R-S*P+M*N)-s*(b*R-S*H+M*U)+l*(b*P-C*H+M*L)-c*(b*N-C*U+S*L)}transpose(){const t=this.elements;let i;return i=t[1],t[1]=t[4],t[4]=i,i=t[2],t[2]=t[8],t[8]=i,i=t[6],t[6]=t[9],t[9]=i,i=t[3],t[3]=t[12],t[12]=i,i=t[7],t[7]=t[13],t[13]=i,i=t[11],t[11]=t[14],t[14]=i,this}setPosition(t,i,s){const l=this.elements;return t.isVector3?(l[12]=t.x,l[13]=t.y,l[14]=t.z):(l[12]=t,l[13]=i,l[14]=s),this}invert(){const t=this.elements,i=t[0],s=t[1],l=t[2],c=t[3],d=t[4],h=t[5],p=t[6],m=t[7],_=t[8],g=t[9],v=t[10],y=t[11],b=t[12],C=t[13],S=t[14],M=t[15],R=i*h-s*d,P=i*p-l*d,N=i*m-c*d,H=s*p-l*h,U=s*m-c*h,L=l*m-c*p,E=_*C-g*b,O=_*S-v*b,V=_*M-y*b,z=g*S-v*C,Z=g*M-y*C,tt=v*M-y*S,ft=R*tt-P*Z+N*z+H*V-U*O+L*E;if(ft===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const X=1/ft;return t[0]=(h*tt-p*Z+m*z)*X,t[1]=(l*Z-s*tt-c*z)*X,t[2]=(C*L-S*U+M*H)*X,t[3]=(v*U-g*L-y*H)*X,t[4]=(p*V-d*tt-m*O)*X,t[5]=(i*tt-l*V+c*O)*X,t[6]=(S*N-b*L-M*P)*X,t[7]=(_*L-v*N+y*P)*X,t[8]=(d*Z-h*V+m*E)*X,t[9]=(s*V-i*Z-c*E)*X,t[10]=(b*U-C*N+M*R)*X,t[11]=(g*N-_*U-y*R)*X,t[12]=(h*O-d*z-p*E)*X,t[13]=(i*z-s*O+l*E)*X,t[14]=(C*P-b*H-S*R)*X,t[15]=(_*H-g*P+v*R)*X,this}scale(t){const i=this.elements,s=t.x,l=t.y,c=t.z;return i[0]*=s,i[4]*=l,i[8]*=c,i[1]*=s,i[5]*=l,i[9]*=c,i[2]*=s,i[6]*=l,i[10]*=c,i[3]*=s,i[7]*=l,i[11]*=c,this}getMaxScaleOnAxis(){const t=this.elements,i=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],s=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],l=t[8]*t[8]+t[9]*t[9]+t[10]*t[10];return Math.sqrt(Math.max(i,s,l))}makeTranslation(t,i,s){return t.isVector3?this.set(1,0,0,t.x,0,1,0,t.y,0,0,1,t.z,0,0,0,1):this.set(1,0,0,t,0,1,0,i,0,0,1,s,0,0,0,1),this}makeRotationX(t){const i=Math.cos(t),s=Math.sin(t);return this.set(1,0,0,0,0,i,-s,0,0,s,i,0,0,0,0,1),this}makeRotationY(t){const i=Math.cos(t),s=Math.sin(t);return this.set(i,0,s,0,0,1,0,0,-s,0,i,0,0,0,0,1),this}makeRotationZ(t){const i=Math.cos(t),s=Math.sin(t);return this.set(i,-s,0,0,s,i,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(t,i){const s=Math.cos(i),l=Math.sin(i),c=1-s,d=t.x,h=t.y,p=t.z,m=c*d,_=c*h;return this.set(m*d+s,m*h-l*p,m*p+l*h,0,m*h+l*p,_*h+s,_*p-l*d,0,m*p-l*h,_*p+l*d,c*p*p+s,0,0,0,0,1),this}makeScale(t,i,s){return this.set(t,0,0,0,0,i,0,0,0,0,s,0,0,0,0,1),this}makeShear(t,i,s,l,c,d){return this.set(1,s,c,0,t,1,d,0,i,l,1,0,0,0,0,1),this}compose(t,i,s){const l=this.elements,c=i._x,d=i._y,h=i._z,p=i._w,m=c+c,_=d+d,g=h+h,v=c*m,y=c*_,b=c*g,C=d*_,S=d*g,M=h*g,R=p*m,P=p*_,N=p*g,H=s.x,U=s.y,L=s.z;return l[0]=(1-(C+M))*H,l[1]=(y+N)*H,l[2]=(b-P)*H,l[3]=0,l[4]=(y-N)*U,l[5]=(1-(v+M))*U,l[6]=(S+R)*U,l[7]=0,l[8]=(b+P)*L,l[9]=(S-R)*L,l[10]=(1-(v+C))*L,l[11]=0,l[12]=t.x,l[13]=t.y,l[14]=t.z,l[15]=1,this}decompose(t,i,s){const l=this.elements;t.x=l[12],t.y=l[13],t.z=l[14];const c=this.determinant();if(c===0)return s.set(1,1,1),i.identity(),this;let d=Jo.set(l[0],l[1],l[2]).length();const h=Jo.set(l[4],l[5],l[6]).length(),p=Jo.set(l[8],l[9],l[10]).length();c<0&&(d=-d),la.copy(this);const m=1/d,_=1/h,g=1/p;return la.elements[0]*=m,la.elements[1]*=m,la.elements[2]*=m,la.elements[4]*=_,la.elements[5]*=_,la.elements[6]*=_,la.elements[8]*=g,la.elements[9]*=g,la.elements[10]*=g,i.setFromRotationMatrix(la),s.x=d,s.y=h,s.z=p,this}makePerspective(t,i,s,l,c,d,h=za,p=!1){const m=this.elements,_=2*c/(i-t),g=2*c/(s-l),v=(i+t)/(i-t),y=(s+l)/(s-l);let b,C;if(p)b=c/(d-c),C=d*c/(d-c);else if(h===za)b=-(d+c)/(d-c),C=-2*d*c/(d-c);else if(h===Gd)b=-d/(d-c),C=-d*c/(d-c);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+h);return m[0]=_,m[4]=0,m[8]=v,m[12]=0,m[1]=0,m[5]=g,m[9]=y,m[13]=0,m[2]=0,m[6]=0,m[10]=b,m[14]=C,m[3]=0,m[7]=0,m[11]=-1,m[15]=0,this}makeOrthographic(t,i,s,l,c,d,h=za,p=!1){const m=this.elements,_=2/(i-t),g=2/(s-l),v=-(i+t)/(i-t),y=-(s+l)/(s-l);let b,C;if(p)b=1/(d-c),C=d/(d-c);else if(h===za)b=-2/(d-c),C=-(d+c)/(d-c);else if(h===Gd)b=-1/(d-c),C=-c/(d-c);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+h);return m[0]=_,m[4]=0,m[8]=0,m[12]=v,m[1]=0,m[5]=g,m[9]=0,m[13]=y,m[2]=0,m[6]=0,m[10]=b,m[14]=C,m[3]=0,m[7]=0,m[11]=0,m[15]=1,this}equals(t){const i=this.elements,s=t.elements;for(let l=0;l<16;l++)if(i[l]!==s[l])return!1;return!0}fromArray(t,i=0){for(let s=0;s<16;s++)this.elements[s]=t[s+i];return this}toArray(t=[],i=0){const s=this.elements;return t[i]=s[0],t[i+1]=s[1],t[i+2]=s[2],t[i+3]=s[3],t[i+4]=s[4],t[i+5]=s[5],t[i+6]=s[6],t[i+7]=s[7],t[i+8]=s[8],t[i+9]=s[9],t[i+10]=s[10],t[i+11]=s[11],t[i+12]=s[12],t[i+13]=s[13],t[i+14]=s[14],t[i+15]=s[15],t}}const Jo=new ut,la=new Nn,fC=new ut(0,0,0),dC=new ut(1,1,1),$r=new ut,qf=new ut,Ni=new ut,d1=new Nn,h1=new Ia;class fs{constructor(t=0,i=0,s=0,l=fs.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=i,this._z=s,this._order=l}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,i,s,l=this._order){return this._x=t,this._y=i,this._z=s,this._order=l,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,i=this._order,s=!0){const l=t.elements,c=l[0],d=l[4],h=l[8],p=l[1],m=l[5],_=l[9],g=l[2],v=l[6],y=l[10];switch(i){case"XYZ":this._y=Math.asin(Pe(h,-1,1)),Math.abs(h)<.9999999?(this._x=Math.atan2(-_,y),this._z=Math.atan2(-d,c)):(this._x=Math.atan2(v,m),this._z=0);break;case"YXZ":this._x=Math.asin(-Pe(_,-1,1)),Math.abs(_)<.9999999?(this._y=Math.atan2(h,y),this._z=Math.atan2(p,m)):(this._y=Math.atan2(-g,c),this._z=0);break;case"ZXY":this._x=Math.asin(Pe(v,-1,1)),Math.abs(v)<.9999999?(this._y=Math.atan2(-g,y),this._z=Math.atan2(-d,m)):(this._y=0,this._z=Math.atan2(p,c));break;case"ZYX":this._y=Math.asin(-Pe(g,-1,1)),Math.abs(g)<.9999999?(this._x=Math.atan2(v,y),this._z=Math.atan2(p,c)):(this._x=0,this._z=Math.atan2(-d,m));break;case"YZX":this._z=Math.asin(Pe(p,-1,1)),Math.abs(p)<.9999999?(this._x=Math.atan2(-_,m),this._y=Math.atan2(-g,c)):(this._x=0,this._y=Math.atan2(h,y));break;case"XZY":this._z=Math.asin(-Pe(d,-1,1)),Math.abs(d)<.9999999?(this._x=Math.atan2(v,m),this._y=Math.atan2(h,c)):(this._x=Math.atan2(-_,y),this._y=0);break;default:de("Euler: .setFromRotationMatrix() encountered an unknown order: "+i)}return this._order=i,s===!0&&this._onChangeCallback(),this}setFromQuaternion(t,i,s){return d1.makeRotationFromQuaternion(t),this.setFromRotationMatrix(d1,i,s)}setFromVector3(t,i=this._order){return this.set(t.x,t.y,t.z,i)}reorder(t){return h1.setFromEuler(this),this.setFromQuaternion(h1,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],i=0){return t[i]=this._x,t[i+1]=this._y,t[i+2]=this._z,t[i+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}fs.DEFAULT_ORDER="XYZ";class mE{constructor(){this.mask=1}set(t){this.mask=(1<<t|0)>>>0}enable(t){this.mask|=1<<t|0}enableAll(){this.mask=-1}toggle(t){this.mask^=1<<t|0}disable(t){this.mask&=~(1<<t|0)}disableAll(){this.mask=0}test(t){return(this.mask&t.mask)!==0}isEnabled(t){return(this.mask&(1<<t|0))!==0}}let hC=0;const p1=new ut,tl=new Ia,rr=new Nn,Wf=new ut,Ic=new ut,pC=new ut,mC=new Ia,m1=new ut(1,0,0),g1=new ut(0,1,0),v1=new ut(0,0,1),_1={type:"added"},gC={type:"removed"},el={type:"childadded",child:null},Zm={type:"childremoved",child:null};class Oi extends ao{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:hC++}),this.uuid=pu(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=Oi.DEFAULT_UP.clone();const t=new ut,i=new fs,s=new Ia,l=new ut(1,1,1);function c(){s.setFromEuler(i,!1)}function d(){i.setFromQuaternion(s,void 0,!1)}i._onChange(c),s._onChange(d),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:i},quaternion:{configurable:!0,enumerable:!0,value:s},scale:{configurable:!0,enumerable:!0,value:l},modelViewMatrix:{value:new Nn},normalMatrix:{value:new _e}}),this.matrix=new Nn,this.matrixWorld=new Nn,this.matrixAutoUpdate=Oi.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=Oi.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new mE,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.static=!1,this.userData={},this.pivot=null}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,i){this.quaternion.setFromAxisAngle(t,i)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,i){return tl.setFromAxisAngle(t,i),this.quaternion.multiply(tl),this}rotateOnWorldAxis(t,i){return tl.setFromAxisAngle(t,i),this.quaternion.premultiply(tl),this}rotateX(t){return this.rotateOnAxis(m1,t)}rotateY(t){return this.rotateOnAxis(g1,t)}rotateZ(t){return this.rotateOnAxis(v1,t)}translateOnAxis(t,i){return p1.copy(t).applyQuaternion(this.quaternion),this.position.add(p1.multiplyScalar(i)),this}translateX(t){return this.translateOnAxis(m1,t)}translateY(t){return this.translateOnAxis(g1,t)}translateZ(t){return this.translateOnAxis(v1,t)}localToWorld(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(rr.copy(this.matrixWorld).invert())}lookAt(t,i,s){t.isVector3?Wf.copy(t):Wf.set(t,i,s);const l=this.parent;this.updateWorldMatrix(!0,!1),Ic.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?rr.lookAt(Ic,Wf,this.up):rr.lookAt(Wf,Ic,this.up),this.quaternion.setFromRotationMatrix(rr),l&&(rr.extractRotation(l.matrixWorld),tl.setFromRotationMatrix(rr),this.quaternion.premultiply(tl.invert()))}add(t){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.add(arguments[i]);return this}return t===this?(Be("Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.removeFromParent(),t.parent=this,this.children.push(t),t.dispatchEvent(_1),el.child=t,this.dispatchEvent(el),el.child=null):Be("Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let s=0;s<arguments.length;s++)this.remove(arguments[s]);return this}const i=this.children.indexOf(t);return i!==-1&&(t.parent=null,this.children.splice(i,1),t.dispatchEvent(gC),Zm.child=t,this.dispatchEvent(Zm),Zm.child=null),this}removeFromParent(){const t=this.parent;return t!==null&&t.remove(this),this}clear(){return this.remove(...this.children)}attach(t){return this.updateWorldMatrix(!0,!1),rr.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),rr.multiply(t.parent.matrixWorld)),t.applyMatrix4(rr),t.removeFromParent(),t.parent=this,this.children.push(t),t.updateWorldMatrix(!1,!0),t.dispatchEvent(_1),el.child=t,this.dispatchEvent(el),el.child=null,this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,i){if(this[t]===i)return this;for(let s=0,l=this.children.length;s<l;s++){const d=this.children[s].getObjectByProperty(t,i);if(d!==void 0)return d}}getObjectsByProperty(t,i,s=[]){this[t]===i&&s.push(this);const l=this.children;for(let c=0,d=l.length;c<d;c++)l[c].getObjectsByProperty(t,i,s);return s}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Ic,t,pC),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Ic,mC,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);const i=this.matrixWorld.elements;return t.set(i[8],i[9],i[10]).normalize()}raycast(){}traverse(t){t(this);const i=this.children;for(let s=0,l=i.length;s<l;s++)i[s].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);const i=this.children;for(let s=0,l=i.length;s<l;s++)i[s].traverseVisible(t)}traverseAncestors(t){const i=this.parent;i!==null&&(t(i),i.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale);const t=this.pivot;if(t!==null){const i=t.x,s=t.y,l=t.z,c=this.matrix.elements;c[12]+=i-c[0]*i-c[4]*s-c[8]*l,c[13]+=s-c[1]*i-c[5]*s-c[9]*l,c[14]+=l-c[2]*i-c[6]*s-c[10]*l}this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,t=!0);const i=this.children;for(let s=0,l=i.length;s<l;s++)i[s].updateMatrixWorld(t)}updateWorldMatrix(t,i){const s=this.parent;if(t===!0&&s!==null&&s.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),i===!0){const l=this.children;for(let c=0,d=l.length;c<d;c++)l[c].updateWorldMatrix(!1,!0)}}toJSON(t){const i=t===void 0||typeof t=="string",s={};i&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},s.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});const l={};l.uuid=this.uuid,l.type=this.type,this.name!==""&&(l.name=this.name),this.castShadow===!0&&(l.castShadow=!0),this.receiveShadow===!0&&(l.receiveShadow=!0),this.visible===!1&&(l.visible=!1),this.frustumCulled===!1&&(l.frustumCulled=!1),this.renderOrder!==0&&(l.renderOrder=this.renderOrder),this.static!==!1&&(l.static=this.static),Object.keys(this.userData).length>0&&(l.userData=this.userData),l.layers=this.layers.mask,l.matrix=this.matrix.toArray(),l.up=this.up.toArray(),this.pivot!==null&&(l.pivot=this.pivot.toArray()),this.matrixAutoUpdate===!1&&(l.matrixAutoUpdate=!1),this.morphTargetDictionary!==void 0&&(l.morphTargetDictionary=Object.assign({},this.morphTargetDictionary)),this.morphTargetInfluences!==void 0&&(l.morphTargetInfluences=this.morphTargetInfluences.slice()),this.isInstancedMesh&&(l.type="InstancedMesh",l.count=this.count,l.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(l.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(l.type="BatchedMesh",l.perObjectFrustumCulled=this.perObjectFrustumCulled,l.sortObjects=this.sortObjects,l.drawRanges=this._drawRanges,l.reservedRanges=this._reservedRanges,l.geometryInfo=this._geometryInfo.map(h=>({...h,boundingBox:h.boundingBox?h.boundingBox.toJSON():void 0,boundingSphere:h.boundingSphere?h.boundingSphere.toJSON():void 0})),l.instanceInfo=this._instanceInfo.map(h=>({...h})),l.availableInstanceIds=this._availableInstanceIds.slice(),l.availableGeometryIds=this._availableGeometryIds.slice(),l.nextIndexStart=this._nextIndexStart,l.nextVertexStart=this._nextVertexStart,l.geometryCount=this._geometryCount,l.maxInstanceCount=this._maxInstanceCount,l.maxVertexCount=this._maxVertexCount,l.maxIndexCount=this._maxIndexCount,l.geometryInitialized=this._geometryInitialized,l.matricesTexture=this._matricesTexture.toJSON(t),l.indirectTexture=this._indirectTexture.toJSON(t),this._colorsTexture!==null&&(l.colorsTexture=this._colorsTexture.toJSON(t)),this.boundingSphere!==null&&(l.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(l.boundingBox=this.boundingBox.toJSON()));function c(h,p){return h[p.uuid]===void 0&&(h[p.uuid]=p.toJSON(t)),p.uuid}if(this.isScene)this.background&&(this.background.isColor?l.background=this.background.toJSON():this.background.isTexture&&(l.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(l.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){l.geometry=c(t.geometries,this.geometry);const h=this.geometry.parameters;if(h!==void 0&&h.shapes!==void 0){const p=h.shapes;if(Array.isArray(p))for(let m=0,_=p.length;m<_;m++){const g=p[m];c(t.shapes,g)}else c(t.shapes,p)}}if(this.isSkinnedMesh&&(l.bindMode=this.bindMode,l.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(c(t.skeletons,this.skeleton),l.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const h=[];for(let p=0,m=this.material.length;p<m;p++)h.push(c(t.materials,this.material[p]));l.material=h}else l.material=c(t.materials,this.material);if(this.children.length>0){l.children=[];for(let h=0;h<this.children.length;h++)l.children.push(this.children[h].toJSON(t).object)}if(this.animations.length>0){l.animations=[];for(let h=0;h<this.animations.length;h++){const p=this.animations[h];l.animations.push(c(t.animations,p))}}if(i){const h=d(t.geometries),p=d(t.materials),m=d(t.textures),_=d(t.images),g=d(t.shapes),v=d(t.skeletons),y=d(t.animations),b=d(t.nodes);h.length>0&&(s.geometries=h),p.length>0&&(s.materials=p),m.length>0&&(s.textures=m),_.length>0&&(s.images=_),g.length>0&&(s.shapes=g),v.length>0&&(s.skeletons=v),y.length>0&&(s.animations=y),b.length>0&&(s.nodes=b)}return s.object=l,s;function d(h){const p=[];for(const m in h){const _=h[m];delete _.metadata,p.push(_)}return p}}clone(t){return new this.constructor().copy(this,t)}copy(t,i=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),this.pivot=t.pivot!==null?t.pivot.clone():null,this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.static=t.static,this.animations=t.animations.slice(),this.userData=JSON.parse(JSON.stringify(t.userData)),i===!0)for(let s=0;s<t.children.length;s++){const l=t.children[s];this.add(l.clone())}return this}}Oi.DEFAULT_UP=new ut(0,1,0);Oi.DEFAULT_MATRIX_AUTO_UPDATE=!0;Oi.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;class bl extends Oi{constructor(){super(),this.isGroup=!0,this.type="Group"}}const vC={type:"move"};class Qm{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new bl,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new bl,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new ut,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new ut),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new bl,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new ut,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new ut,this._grip.eventsEnabled=!1),this._grip}dispatchEvent(t){return this._targetRay!==null&&this._targetRay.dispatchEvent(t),this._grip!==null&&this._grip.dispatchEvent(t),this._hand!==null&&this._hand.dispatchEvent(t),this}connect(t){if(t&&t.hand){const i=this._hand;if(i)for(const s of t.hand.values())this._getHandJoint(i,s)}return this.dispatchEvent({type:"connected",data:t}),this}disconnect(t){return this.dispatchEvent({type:"disconnected",data:t}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(t,i,s){let l=null,c=null,d=null;const h=this._targetRay,p=this._grip,m=this._hand;if(t&&i.session.visibilityState!=="visible-blurred"){if(m&&t.hand){d=!0;for(const C of t.hand.values()){const S=i.getJointPose(C,s),M=this._getHandJoint(m,C);S!==null&&(M.matrix.fromArray(S.transform.matrix),M.matrix.decompose(M.position,M.rotation,M.scale),M.matrixWorldNeedsUpdate=!0,M.jointRadius=S.radius),M.visible=S!==null}const _=m.joints["index-finger-tip"],g=m.joints["thumb-tip"],v=_.position.distanceTo(g.position),y=.02,b=.005;m.inputState.pinching&&v>y+b?(m.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:t.handedness,target:this})):!m.inputState.pinching&&v<=y-b&&(m.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:t.handedness,target:this}))}else p!==null&&t.gripSpace&&(c=i.getPose(t.gripSpace,s),c!==null&&(p.matrix.fromArray(c.transform.matrix),p.matrix.decompose(p.position,p.rotation,p.scale),p.matrixWorldNeedsUpdate=!0,c.linearVelocity?(p.hasLinearVelocity=!0,p.linearVelocity.copy(c.linearVelocity)):p.hasLinearVelocity=!1,c.angularVelocity?(p.hasAngularVelocity=!0,p.angularVelocity.copy(c.angularVelocity)):p.hasAngularVelocity=!1,p.eventsEnabled&&p.dispatchEvent({type:"gripUpdated",data:t,target:this})));h!==null&&(l=i.getPose(t.targetRaySpace,s),l===null&&c!==null&&(l=c),l!==null&&(h.matrix.fromArray(l.transform.matrix),h.matrix.decompose(h.position,h.rotation,h.scale),h.matrixWorldNeedsUpdate=!0,l.linearVelocity?(h.hasLinearVelocity=!0,h.linearVelocity.copy(l.linearVelocity)):h.hasLinearVelocity=!1,l.angularVelocity?(h.hasAngularVelocity=!0,h.angularVelocity.copy(l.angularVelocity)):h.hasAngularVelocity=!1,this.dispatchEvent(vC)))}return h!==null&&(h.visible=l!==null),p!==null&&(p.visible=c!==null),m!==null&&(m.visible=d!==null),this}_getHandJoint(t,i){if(t.joints[i.jointName]===void 0){const s=new bl;s.matrixAutoUpdate=!1,s.visible=!1,t.joints[i.jointName]=s,t.add(s)}return t.joints[i.jointName]}}const gE={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Jr={h:0,s:0,l:0},jf={h:0,s:0,l:0};function Km(a,t,i){return i<0&&(i+=1),i>1&&(i-=1),i<1/6?a+(t-a)*6*i:i<1/2?t:i<2/3?a+(t-a)*6*(2/3-i):a}class an{constructor(t,i,s){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(t,i,s)}set(t,i,s){if(i===void 0&&s===void 0){const l=t;l&&l.isColor?this.copy(l):typeof l=="number"?this.setHex(l):typeof l=="string"&&this.setStyle(l)}else this.setRGB(t,i,s);return this}setScalar(t){return this.r=t,this.g=t,this.b=t,this}setHex(t,i=Zi){return t=Math.floor(t),this.r=(t>>16&255)/255,this.g=(t>>8&255)/255,this.b=(t&255)/255,Oe.colorSpaceToWorking(this,i),this}setRGB(t,i,s,l=Oe.workingColorSpace){return this.r=t,this.g=i,this.b=s,Oe.colorSpaceToWorking(this,l),this}setHSL(t,i,s,l=Oe.workingColorSpace){if(t=aC(t,1),i=Pe(i,0,1),s=Pe(s,0,1),i===0)this.r=this.g=this.b=s;else{const c=s<=.5?s*(1+i):s+i-s*i,d=2*s-c;this.r=Km(d,c,t+1/3),this.g=Km(d,c,t),this.b=Km(d,c,t-1/3)}return Oe.colorSpaceToWorking(this,l),this}setStyle(t,i=Zi){function s(c){c!==void 0&&parseFloat(c)<1&&de("Color: Alpha component of "+t+" will be ignored.")}let l;if(l=/^(\w+)\(([^\)]*)\)/.exec(t)){let c;const d=l[1],h=l[2];switch(d){case"rgb":case"rgba":if(c=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(h))return s(c[4]),this.setRGB(Math.min(255,parseInt(c[1],10))/255,Math.min(255,parseInt(c[2],10))/255,Math.min(255,parseInt(c[3],10))/255,i);if(c=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(h))return s(c[4]),this.setRGB(Math.min(100,parseInt(c[1],10))/100,Math.min(100,parseInt(c[2],10))/100,Math.min(100,parseInt(c[3],10))/100,i);break;case"hsl":case"hsla":if(c=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(h))return s(c[4]),this.setHSL(parseFloat(c[1])/360,parseFloat(c[2])/100,parseFloat(c[3])/100,i);break;default:de("Color: Unknown color model "+t)}}else if(l=/^\#([A-Fa-f\d]+)$/.exec(t)){const c=l[1],d=c.length;if(d===3)return this.setRGB(parseInt(c.charAt(0),16)/15,parseInt(c.charAt(1),16)/15,parseInt(c.charAt(2),16)/15,i);if(d===6)return this.setHex(parseInt(c,16),i);de("Color: Invalid hex color "+t)}else if(t&&t.length>0)return this.setColorName(t,i);return this}setColorName(t,i=Zi){const s=gE[t.toLowerCase()];return s!==void 0?this.setHex(s,i):de("Color: Unknown color "+t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(t){return this.r=t.r,this.g=t.g,this.b=t.b,this}copySRGBToLinear(t){return this.r=mr(t.r),this.g=mr(t.g),this.b=mr(t.b),this}copyLinearToSRGB(t){return this.r=Al(t.r),this.g=Al(t.g),this.b=Al(t.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(t=Zi){return Oe.workingToColorSpace(Jn.copy(this),t),Math.round(Pe(Jn.r*255,0,255))*65536+Math.round(Pe(Jn.g*255,0,255))*256+Math.round(Pe(Jn.b*255,0,255))}getHexString(t=Zi){return("000000"+this.getHex(t).toString(16)).slice(-6)}getHSL(t,i=Oe.workingColorSpace){Oe.workingToColorSpace(Jn.copy(this),i);const s=Jn.r,l=Jn.g,c=Jn.b,d=Math.max(s,l,c),h=Math.min(s,l,c);let p,m;const _=(h+d)/2;if(h===d)p=0,m=0;else{const g=d-h;switch(m=_<=.5?g/(d+h):g/(2-d-h),d){case s:p=(l-c)/g+(l<c?6:0);break;case l:p=(c-s)/g+2;break;case c:p=(s-l)/g+4;break}p/=6}return t.h=p,t.s=m,t.l=_,t}getRGB(t,i=Oe.workingColorSpace){return Oe.workingToColorSpace(Jn.copy(this),i),t.r=Jn.r,t.g=Jn.g,t.b=Jn.b,t}getStyle(t=Zi){Oe.workingToColorSpace(Jn.copy(this),t);const i=Jn.r,s=Jn.g,l=Jn.b;return t!==Zi?`color(${t} ${i.toFixed(3)} ${s.toFixed(3)} ${l.toFixed(3)})`:`rgb(${Math.round(i*255)},${Math.round(s*255)},${Math.round(l*255)})`}offsetHSL(t,i,s){return this.getHSL(Jr),this.setHSL(Jr.h+t,Jr.s+i,Jr.l+s)}add(t){return this.r+=t.r,this.g+=t.g,this.b+=t.b,this}addColors(t,i){return this.r=t.r+i.r,this.g=t.g+i.g,this.b=t.b+i.b,this}addScalar(t){return this.r+=t,this.g+=t,this.b+=t,this}sub(t){return this.r=Math.max(0,this.r-t.r),this.g=Math.max(0,this.g-t.g),this.b=Math.max(0,this.b-t.b),this}multiply(t){return this.r*=t.r,this.g*=t.g,this.b*=t.b,this}multiplyScalar(t){return this.r*=t,this.g*=t,this.b*=t,this}lerp(t,i){return this.r+=(t.r-this.r)*i,this.g+=(t.g-this.g)*i,this.b+=(t.b-this.b)*i,this}lerpColors(t,i,s){return this.r=t.r+(i.r-t.r)*s,this.g=t.g+(i.g-t.g)*s,this.b=t.b+(i.b-t.b)*s,this}lerpHSL(t,i){this.getHSL(Jr),t.getHSL(jf);const s=Xm(Jr.h,jf.h,i),l=Xm(Jr.s,jf.s,i),c=Xm(Jr.l,jf.l,i);return this.setHSL(s,l,c),this}setFromVector3(t){return this.r=t.x,this.g=t.y,this.b=t.z,this}applyMatrix3(t){const i=this.r,s=this.g,l=this.b,c=t.elements;return this.r=c[0]*i+c[3]*s+c[6]*l,this.g=c[1]*i+c[4]*s+c[7]*l,this.b=c[2]*i+c[5]*s+c[8]*l,this}equals(t){return t.r===this.r&&t.g===this.g&&t.b===this.b}fromArray(t,i=0){return this.r=t[i],this.g=t[i+1],this.b=t[i+2],this}toArray(t=[],i=0){return t[i]=this.r,t[i+1]=this.g,t[i+2]=this.b,t}fromBufferAttribute(t,i){return this.r=t.getX(i),this.g=t.getY(i),this.b=t.getZ(i),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const Jn=new an;an.NAMES=gE;class _C extends Oi{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new fs,this.environmentIntensity=1,this.environmentRotation=new fs,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(t,i){return super.copy(t,i),t.background!==null&&(this.background=t.background.clone()),t.environment!==null&&(this.environment=t.environment.clone()),t.fog!==null&&(this.fog=t.fog.clone()),this.backgroundBlurriness=t.backgroundBlurriness,this.backgroundIntensity=t.backgroundIntensity,this.backgroundRotation.copy(t.backgroundRotation),this.environmentIntensity=t.environmentIntensity,this.environmentRotation.copy(t.environmentRotation),t.overrideMaterial!==null&&(this.overrideMaterial=t.overrideMaterial.clone()),this.matrixAutoUpdate=t.matrixAutoUpdate,this}toJSON(t){const i=super.toJSON(t);return this.fog!==null&&(i.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(i.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(i.object.backgroundIntensity=this.backgroundIntensity),i.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(i.object.environmentIntensity=this.environmentIntensity),i.object.environmentRotation=this.environmentRotation.toArray(),i}}const ca=new ut,sr=new ut,$m=new ut,or=new ut,nl=new ut,il=new ut,x1=new ut,Jm=new ut,t0=new ut,e0=new ut,n0=new Mn,i0=new Mn,a0=new Mn;class pa{constructor(t=new ut,i=new ut,s=new ut){this.a=t,this.b=i,this.c=s}static getNormal(t,i,s,l){l.subVectors(s,i),ca.subVectors(t,i),l.cross(ca);const c=l.lengthSq();return c>0?l.multiplyScalar(1/Math.sqrt(c)):l.set(0,0,0)}static getBarycoord(t,i,s,l,c){ca.subVectors(l,i),sr.subVectors(s,i),$m.subVectors(t,i);const d=ca.dot(ca),h=ca.dot(sr),p=ca.dot($m),m=sr.dot(sr),_=sr.dot($m),g=d*m-h*h;if(g===0)return c.set(0,0,0),null;const v=1/g,y=(m*p-h*_)*v,b=(d*_-h*p)*v;return c.set(1-y-b,b,y)}static containsPoint(t,i,s,l){return this.getBarycoord(t,i,s,l,or)===null?!1:or.x>=0&&or.y>=0&&or.x+or.y<=1}static getInterpolation(t,i,s,l,c,d,h,p){return this.getBarycoord(t,i,s,l,or)===null?(p.x=0,p.y=0,"z"in p&&(p.z=0),"w"in p&&(p.w=0),null):(p.setScalar(0),p.addScaledVector(c,or.x),p.addScaledVector(d,or.y),p.addScaledVector(h,or.z),p)}static getInterpolatedAttribute(t,i,s,l,c,d){return n0.setScalar(0),i0.setScalar(0),a0.setScalar(0),n0.fromBufferAttribute(t,i),i0.fromBufferAttribute(t,s),a0.fromBufferAttribute(t,l),d.setScalar(0),d.addScaledVector(n0,c.x),d.addScaledVector(i0,c.y),d.addScaledVector(a0,c.z),d}static isFrontFacing(t,i,s,l){return ca.subVectors(s,i),sr.subVectors(t,i),ca.cross(sr).dot(l)<0}set(t,i,s){return this.a.copy(t),this.b.copy(i),this.c.copy(s),this}setFromPointsAndIndices(t,i,s,l){return this.a.copy(t[i]),this.b.copy(t[s]),this.c.copy(t[l]),this}setFromAttributeAndIndices(t,i,s,l){return this.a.fromBufferAttribute(t,i),this.b.fromBufferAttribute(t,s),this.c.fromBufferAttribute(t,l),this}clone(){return new this.constructor().copy(this)}copy(t){return this.a.copy(t.a),this.b.copy(t.b),this.c.copy(t.c),this}getArea(){return ca.subVectors(this.c,this.b),sr.subVectors(this.a,this.b),ca.cross(sr).length()*.5}getMidpoint(t){return t.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return pa.getNormal(this.a,this.b,this.c,t)}getPlane(t){return t.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,i){return pa.getBarycoord(t,this.a,this.b,this.c,i)}getInterpolation(t,i,s,l,c){return pa.getInterpolation(t,this.a,this.b,this.c,i,s,l,c)}containsPoint(t){return pa.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return pa.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(t){return t.intersectsTriangle(this)}closestPointToPoint(t,i){const s=this.a,l=this.b,c=this.c;let d,h;nl.subVectors(l,s),il.subVectors(c,s),Jm.subVectors(t,s);const p=nl.dot(Jm),m=il.dot(Jm);if(p<=0&&m<=0)return i.copy(s);t0.subVectors(t,l);const _=nl.dot(t0),g=il.dot(t0);if(_>=0&&g<=_)return i.copy(l);const v=p*g-_*m;if(v<=0&&p>=0&&_<=0)return d=p/(p-_),i.copy(s).addScaledVector(nl,d);e0.subVectors(t,c);const y=nl.dot(e0),b=il.dot(e0);if(b>=0&&y<=b)return i.copy(c);const C=y*m-p*b;if(C<=0&&m>=0&&b<=0)return h=m/(m-b),i.copy(s).addScaledVector(il,h);const S=_*b-y*g;if(S<=0&&g-_>=0&&y-b>=0)return x1.subVectors(c,l),h=(g-_)/(g-_+(y-b)),i.copy(l).addScaledVector(x1,h);const M=1/(S+C+v);return d=C*M,h=v*M,i.copy(s).addScaledVector(nl,d).addScaledVector(il,h)}equals(t){return t.a.equals(this.a)&&t.b.equals(this.b)&&t.c.equals(this.c)}}class mu{constructor(t=new ut(1/0,1/0,1/0),i=new ut(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=t,this.max=i}set(t,i){return this.min.copy(t),this.max.copy(i),this}setFromArray(t){this.makeEmpty();for(let i=0,s=t.length;i<s;i+=3)this.expandByPoint(ua.fromArray(t,i));return this}setFromBufferAttribute(t){this.makeEmpty();for(let i=0,s=t.count;i<s;i++)this.expandByPoint(ua.fromBufferAttribute(t,i));return this}setFromPoints(t){this.makeEmpty();for(let i=0,s=t.length;i<s;i++)this.expandByPoint(t[i]);return this}setFromCenterAndSize(t,i){const s=ua.copy(i).multiplyScalar(.5);return this.min.copy(t).sub(s),this.max.copy(t).add(s),this}setFromObject(t,i=!1){return this.makeEmpty(),this.expandByObject(t,i)}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(t){return this.isEmpty()?t.set(0,0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return this.isEmpty()?t.set(0,0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}expandByObject(t,i=!1){t.updateWorldMatrix(!1,!1);const s=t.geometry;if(s!==void 0){const c=s.getAttribute("position");if(i===!0&&c!==void 0&&t.isInstancedMesh!==!0)for(let d=0,h=c.count;d<h;d++)t.isMesh===!0?t.getVertexPosition(d,ua):ua.fromBufferAttribute(c,d),ua.applyMatrix4(t.matrixWorld),this.expandByPoint(ua);else t.boundingBox!==void 0?(t.boundingBox===null&&t.computeBoundingBox(),Yf.copy(t.boundingBox)):(s.boundingBox===null&&s.computeBoundingBox(),Yf.copy(s.boundingBox)),Yf.applyMatrix4(t.matrixWorld),this.union(Yf)}const l=t.children;for(let c=0,d=l.length;c<d;c++)this.expandByObject(l[c],i);return this}containsPoint(t){return t.x>=this.min.x&&t.x<=this.max.x&&t.y>=this.min.y&&t.y<=this.max.y&&t.z>=this.min.z&&t.z<=this.max.z}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y&&this.min.z<=t.min.z&&t.max.z<=this.max.z}getParameter(t,i){return i.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y),(t.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(t){return t.max.x>=this.min.x&&t.min.x<=this.max.x&&t.max.y>=this.min.y&&t.min.y<=this.max.y&&t.max.z>=this.min.z&&t.min.z<=this.max.z}intersectsSphere(t){return this.clampPoint(t.center,ua),ua.distanceToSquared(t.center)<=t.radius*t.radius}intersectsPlane(t){let i,s;return t.normal.x>0?(i=t.normal.x*this.min.x,s=t.normal.x*this.max.x):(i=t.normal.x*this.max.x,s=t.normal.x*this.min.x),t.normal.y>0?(i+=t.normal.y*this.min.y,s+=t.normal.y*this.max.y):(i+=t.normal.y*this.max.y,s+=t.normal.y*this.min.y),t.normal.z>0?(i+=t.normal.z*this.min.z,s+=t.normal.z*this.max.z):(i+=t.normal.z*this.max.z,s+=t.normal.z*this.min.z),i<=-t.constant&&s>=-t.constant}intersectsTriangle(t){if(this.isEmpty())return!1;this.getCenter(Fc),Zf.subVectors(this.max,Fc),al.subVectors(t.a,Fc),rl.subVectors(t.b,Fc),sl.subVectors(t.c,Fc),ts.subVectors(rl,al),es.subVectors(sl,rl),Ps.subVectors(al,sl);let i=[0,-ts.z,ts.y,0,-es.z,es.y,0,-Ps.z,Ps.y,ts.z,0,-ts.x,es.z,0,-es.x,Ps.z,0,-Ps.x,-ts.y,ts.x,0,-es.y,es.x,0,-Ps.y,Ps.x,0];return!r0(i,al,rl,sl,Zf)||(i=[1,0,0,0,1,0,0,0,1],!r0(i,al,rl,sl,Zf))?!1:(Qf.crossVectors(ts,es),i=[Qf.x,Qf.y,Qf.z],r0(i,al,rl,sl,Zf))}clampPoint(t,i){return i.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return this.clampPoint(t,ua).distanceTo(t)}getBoundingSphere(t){return this.isEmpty()?t.makeEmpty():(this.getCenter(t.center),t.radius=this.getSize(ua).length()*.5),t}intersect(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}applyMatrix4(t){return this.isEmpty()?this:(lr[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(t),lr[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(t),lr[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(t),lr[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(t),lr[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(t),lr[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(t),lr[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(t),lr[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(t),this.setFromPoints(lr),this)}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(t){return this.min.fromArray(t.min),this.max.fromArray(t.max),this}}const lr=[new ut,new ut,new ut,new ut,new ut,new ut,new ut,new ut],ua=new ut,Yf=new mu,al=new ut,rl=new ut,sl=new ut,ts=new ut,es=new ut,Ps=new ut,Fc=new ut,Zf=new ut,Qf=new ut,zs=new ut;function r0(a,t,i,s,l){for(let c=0,d=a.length-3;c<=d;c+=3){zs.fromArray(a,c);const h=l.x*Math.abs(zs.x)+l.y*Math.abs(zs.y)+l.z*Math.abs(zs.z),p=t.dot(zs),m=i.dot(zs),_=s.dot(zs);if(Math.max(-Math.max(p,m,_),Math.min(p,m,_))>h)return!1}return!0}const Cn=new ut,Kf=new Je;let xC=0;class Ga extends ao{constructor(t,i,s=!1){if(super(),Array.isArray(t))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:xC++}),this.name="",this.array=t,this.itemSize=i,this.count=t!==void 0?t.length/i:0,this.normalized=s,this.usage=r1,this.updateRanges=[],this.gpuType=Pa,this.version=0}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,i){this.updateRanges.push({start:t,count:i})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.name=t.name,this.array=new t.array.constructor(t.array),this.itemSize=t.itemSize,this.count=t.count,this.normalized=t.normalized,this.usage=t.usage,this.gpuType=t.gpuType,this}copyAt(t,i,s){t*=this.itemSize,s*=i.itemSize;for(let l=0,c=this.itemSize;l<c;l++)this.array[t+l]=i.array[s+l];return this}copyArray(t){return this.array.set(t),this}applyMatrix3(t){if(this.itemSize===2)for(let i=0,s=this.count;i<s;i++)Kf.fromBufferAttribute(this,i),Kf.applyMatrix3(t),this.setXY(i,Kf.x,Kf.y);else if(this.itemSize===3)for(let i=0,s=this.count;i<s;i++)Cn.fromBufferAttribute(this,i),Cn.applyMatrix3(t),this.setXYZ(i,Cn.x,Cn.y,Cn.z);return this}applyMatrix4(t){for(let i=0,s=this.count;i<s;i++)Cn.fromBufferAttribute(this,i),Cn.applyMatrix4(t),this.setXYZ(i,Cn.x,Cn.y,Cn.z);return this}applyNormalMatrix(t){for(let i=0,s=this.count;i<s;i++)Cn.fromBufferAttribute(this,i),Cn.applyNormalMatrix(t),this.setXYZ(i,Cn.x,Cn.y,Cn.z);return this}transformDirection(t){for(let i=0,s=this.count;i<s;i++)Cn.fromBufferAttribute(this,i),Cn.transformDirection(t),this.setXYZ(i,Cn.x,Cn.y,Cn.z);return this}set(t,i=0){return this.array.set(t,i),this}getComponent(t,i){let s=this.array[t*this.itemSize+i];return this.normalized&&(s=zc(s,this.array)),s}setComponent(t,i,s){return this.normalized&&(s=vi(s,this.array)),this.array[t*this.itemSize+i]=s,this}getX(t){let i=this.array[t*this.itemSize];return this.normalized&&(i=zc(i,this.array)),i}setX(t,i){return this.normalized&&(i=vi(i,this.array)),this.array[t*this.itemSize]=i,this}getY(t){let i=this.array[t*this.itemSize+1];return this.normalized&&(i=zc(i,this.array)),i}setY(t,i){return this.normalized&&(i=vi(i,this.array)),this.array[t*this.itemSize+1]=i,this}getZ(t){let i=this.array[t*this.itemSize+2];return this.normalized&&(i=zc(i,this.array)),i}setZ(t,i){return this.normalized&&(i=vi(i,this.array)),this.array[t*this.itemSize+2]=i,this}getW(t){let i=this.array[t*this.itemSize+3];return this.normalized&&(i=zc(i,this.array)),i}setW(t,i){return this.normalized&&(i=vi(i,this.array)),this.array[t*this.itemSize+3]=i,this}setXY(t,i,s){return t*=this.itemSize,this.normalized&&(i=vi(i,this.array),s=vi(s,this.array)),this.array[t+0]=i,this.array[t+1]=s,this}setXYZ(t,i,s,l){return t*=this.itemSize,this.normalized&&(i=vi(i,this.array),s=vi(s,this.array),l=vi(l,this.array)),this.array[t+0]=i,this.array[t+1]=s,this.array[t+2]=l,this}setXYZW(t,i,s,l,c){return t*=this.itemSize,this.normalized&&(i=vi(i,this.array),s=vi(s,this.array),l=vi(l,this.array),c=vi(c,this.array)),this.array[t+0]=i,this.array[t+1]=s,this.array[t+2]=l,this.array[t+3]=c,this}onUpload(t){return this.onUploadCallback=t,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const t={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(t.name=this.name),this.usage!==r1&&(t.usage=this.usage),t}dispose(){this.dispatchEvent({type:"dispose"})}}class vE extends Ga{constructor(t,i,s){super(new Uint16Array(t),i,s)}}class _E extends Ga{constructor(t,i,s){super(new Uint32Array(t),i,s)}}class $i extends Ga{constructor(t,i,s){super(new Float32Array(t),i,s)}}const yC=new mu,Bc=new ut,s0=new ut;class fv{constructor(t=new ut,i=-1){this.isSphere=!0,this.center=t,this.radius=i}set(t,i){return this.center.copy(t),this.radius=i,this}setFromPoints(t,i){const s=this.center;i!==void 0?s.copy(i):yC.setFromPoints(t).getCenter(s);let l=0;for(let c=0,d=t.length;c<d;c++)l=Math.max(l,s.distanceToSquared(t[c]));return this.radius=Math.sqrt(l),this}copy(t){return this.center.copy(t.center),this.radius=t.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(t){return t.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(t){return t.distanceTo(this.center)-this.radius}intersectsSphere(t){const i=this.radius+t.radius;return t.center.distanceToSquared(this.center)<=i*i}intersectsBox(t){return t.intersectsSphere(this)}intersectsPlane(t){return Math.abs(t.distanceToPoint(this.center))<=this.radius}clampPoint(t,i){const s=this.center.distanceToSquared(t);return i.copy(t),s>this.radius*this.radius&&(i.sub(this.center).normalize(),i.multiplyScalar(this.radius).add(this.center)),i}getBoundingBox(t){return this.isEmpty()?(t.makeEmpty(),t):(t.set(this.center,this.center),t.expandByScalar(this.radius),t)}applyMatrix4(t){return this.center.applyMatrix4(t),this.radius=this.radius*t.getMaxScaleOnAxis(),this}translate(t){return this.center.add(t),this}expandByPoint(t){if(this.isEmpty())return this.center.copy(t),this.radius=0,this;Bc.subVectors(t,this.center);const i=Bc.lengthSq();if(i>this.radius*this.radius){const s=Math.sqrt(i),l=(s-this.radius)*.5;this.center.addScaledVector(Bc,l/s),this.radius+=l}return this}union(t){return t.isEmpty()?this:this.isEmpty()?(this.copy(t),this):(this.center.equals(t.center)===!0?this.radius=Math.max(this.radius,t.radius):(s0.subVectors(t.center,this.center).setLength(t.radius),this.expandByPoint(Bc.copy(t.center).add(s0)),this.expandByPoint(Bc.copy(t.center).sub(s0))),this)}equals(t){return t.center.equals(this.center)&&t.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(t){return this.radius=t.radius,this.center.fromArray(t.center),this}}let SC=0;const Wi=new Nn,o0=new Oi,ol=new ut,Ui=new mu,Hc=new mu,Vn=new ut;class qa extends ao{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:SC++}),this.uuid=pu(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.indirectOffset=0,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(t){return Array.isArray(t)?this.index=new(tC(t)?_E:vE)(t,1):this.index=t,this}setIndirect(t,i=0){return this.indirect=t,this.indirectOffset=i,this}getIndirect(){return this.indirect}getAttribute(t){return this.attributes[t]}setAttribute(t,i){return this.attributes[t]=i,this}deleteAttribute(t){return delete this.attributes[t],this}hasAttribute(t){return this.attributes[t]!==void 0}addGroup(t,i,s=0){this.groups.push({start:t,count:i,materialIndex:s})}clearGroups(){this.groups=[]}setDrawRange(t,i){this.drawRange.start=t,this.drawRange.count=i}applyMatrix4(t){const i=this.attributes.position;i!==void 0&&(i.applyMatrix4(t),i.needsUpdate=!0);const s=this.attributes.normal;if(s!==void 0){const c=new _e().getNormalMatrix(t);s.applyNormalMatrix(c),s.needsUpdate=!0}const l=this.attributes.tangent;return l!==void 0&&(l.transformDirection(t),l.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(t){return Wi.makeRotationFromQuaternion(t),this.applyMatrix4(Wi),this}rotateX(t){return Wi.makeRotationX(t),this.applyMatrix4(Wi),this}rotateY(t){return Wi.makeRotationY(t),this.applyMatrix4(Wi),this}rotateZ(t){return Wi.makeRotationZ(t),this.applyMatrix4(Wi),this}translate(t,i,s){return Wi.makeTranslation(t,i,s),this.applyMatrix4(Wi),this}scale(t,i,s){return Wi.makeScale(t,i,s),this.applyMatrix4(Wi),this}lookAt(t){return o0.lookAt(t),o0.updateMatrix(),this.applyMatrix4(o0.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(ol).negate(),this.translate(ol.x,ol.y,ol.z),this}setFromPoints(t){const i=this.getAttribute("position");if(i===void 0){const s=[];for(let l=0,c=t.length;l<c;l++){const d=t[l];s.push(d.x,d.y,d.z||0)}this.setAttribute("position",new $i(s,3))}else{const s=Math.min(t.length,i.count);for(let l=0;l<s;l++){const c=t[l];i.setXYZ(l,c.x,c.y,c.z||0)}t.length>i.count&&de("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),i.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new mu);const t=this.attributes.position,i=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){Be("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new ut(-1/0,-1/0,-1/0),new ut(1/0,1/0,1/0));return}if(t!==void 0){if(this.boundingBox.setFromBufferAttribute(t),i)for(let s=0,l=i.length;s<l;s++){const c=i[s];Ui.setFromBufferAttribute(c),this.morphTargetsRelative?(Vn.addVectors(this.boundingBox.min,Ui.min),this.boundingBox.expandByPoint(Vn),Vn.addVectors(this.boundingBox.max,Ui.max),this.boundingBox.expandByPoint(Vn)):(this.boundingBox.expandByPoint(Ui.min),this.boundingBox.expandByPoint(Ui.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&Be('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new fv);const t=this.attributes.position,i=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){Be("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new ut,1/0);return}if(t){const s=this.boundingSphere.center;if(Ui.setFromBufferAttribute(t),i)for(let c=0,d=i.length;c<d;c++){const h=i[c];Hc.setFromBufferAttribute(h),this.morphTargetsRelative?(Vn.addVectors(Ui.min,Hc.min),Ui.expandByPoint(Vn),Vn.addVectors(Ui.max,Hc.max),Ui.expandByPoint(Vn)):(Ui.expandByPoint(Hc.min),Ui.expandByPoint(Hc.max))}Ui.getCenter(s);let l=0;for(let c=0,d=t.count;c<d;c++)Vn.fromBufferAttribute(t,c),l=Math.max(l,s.distanceToSquared(Vn));if(i)for(let c=0,d=i.length;c<d;c++){const h=i[c],p=this.morphTargetsRelative;for(let m=0,_=h.count;m<_;m++)Vn.fromBufferAttribute(h,m),p&&(ol.fromBufferAttribute(t,m),Vn.add(ol)),l=Math.max(l,s.distanceToSquared(Vn))}this.boundingSphere.radius=Math.sqrt(l),isNaN(this.boundingSphere.radius)&&Be('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const t=this.index,i=this.attributes;if(t===null||i.position===void 0||i.normal===void 0||i.uv===void 0){Be("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const s=i.position,l=i.normal,c=i.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new Ga(new Float32Array(4*s.count),4));const d=this.getAttribute("tangent"),h=[],p=[];for(let E=0;E<s.count;E++)h[E]=new ut,p[E]=new ut;const m=new ut,_=new ut,g=new ut,v=new Je,y=new Je,b=new Je,C=new ut,S=new ut;function M(E,O,V){m.fromBufferAttribute(s,E),_.fromBufferAttribute(s,O),g.fromBufferAttribute(s,V),v.fromBufferAttribute(c,E),y.fromBufferAttribute(c,O),b.fromBufferAttribute(c,V),_.sub(m),g.sub(m),y.sub(v),b.sub(v);const z=1/(y.x*b.y-b.x*y.y);isFinite(z)&&(C.copy(_).multiplyScalar(b.y).addScaledVector(g,-y.y).multiplyScalar(z),S.copy(g).multiplyScalar(y.x).addScaledVector(_,-b.x).multiplyScalar(z),h[E].add(C),h[O].add(C),h[V].add(C),p[E].add(S),p[O].add(S),p[V].add(S))}let R=this.groups;R.length===0&&(R=[{start:0,count:t.count}]);for(let E=0,O=R.length;E<O;++E){const V=R[E],z=V.start,Z=V.count;for(let tt=z,ft=z+Z;tt<ft;tt+=3)M(t.getX(tt+0),t.getX(tt+1),t.getX(tt+2))}const P=new ut,N=new ut,H=new ut,U=new ut;function L(E){H.fromBufferAttribute(l,E),U.copy(H);const O=h[E];P.copy(O),P.sub(H.multiplyScalar(H.dot(O))).normalize(),N.crossVectors(U,O);const z=N.dot(p[E])<0?-1:1;d.setXYZW(E,P.x,P.y,P.z,z)}for(let E=0,O=R.length;E<O;++E){const V=R[E],z=V.start,Z=V.count;for(let tt=z,ft=z+Z;tt<ft;tt+=3)L(t.getX(tt+0)),L(t.getX(tt+1)),L(t.getX(tt+2))}}computeVertexNormals(){const t=this.index,i=this.getAttribute("position");if(i!==void 0){let s=this.getAttribute("normal");if(s===void 0)s=new Ga(new Float32Array(i.count*3),3),this.setAttribute("normal",s);else for(let v=0,y=s.count;v<y;v++)s.setXYZ(v,0,0,0);const l=new ut,c=new ut,d=new ut,h=new ut,p=new ut,m=new ut,_=new ut,g=new ut;if(t)for(let v=0,y=t.count;v<y;v+=3){const b=t.getX(v+0),C=t.getX(v+1),S=t.getX(v+2);l.fromBufferAttribute(i,b),c.fromBufferAttribute(i,C),d.fromBufferAttribute(i,S),_.subVectors(d,c),g.subVectors(l,c),_.cross(g),h.fromBufferAttribute(s,b),p.fromBufferAttribute(s,C),m.fromBufferAttribute(s,S),h.add(_),p.add(_),m.add(_),s.setXYZ(b,h.x,h.y,h.z),s.setXYZ(C,p.x,p.y,p.z),s.setXYZ(S,m.x,m.y,m.z)}else for(let v=0,y=i.count;v<y;v+=3)l.fromBufferAttribute(i,v+0),c.fromBufferAttribute(i,v+1),d.fromBufferAttribute(i,v+2),_.subVectors(d,c),g.subVectors(l,c),_.cross(g),s.setXYZ(v+0,_.x,_.y,_.z),s.setXYZ(v+1,_.x,_.y,_.z),s.setXYZ(v+2,_.x,_.y,_.z);this.normalizeNormals(),s.needsUpdate=!0}}normalizeNormals(){const t=this.attributes.normal;for(let i=0,s=t.count;i<s;i++)Vn.fromBufferAttribute(t,i),Vn.normalize(),t.setXYZ(i,Vn.x,Vn.y,Vn.z)}toNonIndexed(){function t(h,p){const m=h.array,_=h.itemSize,g=h.normalized,v=new m.constructor(p.length*_);let y=0,b=0;for(let C=0,S=p.length;C<S;C++){h.isInterleavedBufferAttribute?y=p[C]*h.data.stride+h.offset:y=p[C]*_;for(let M=0;M<_;M++)v[b++]=m[y++]}return new Ga(v,_,g)}if(this.index===null)return de("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const i=new qa,s=this.index.array,l=this.attributes;for(const h in l){const p=l[h],m=t(p,s);i.setAttribute(h,m)}const c=this.morphAttributes;for(const h in c){const p=[],m=c[h];for(let _=0,g=m.length;_<g;_++){const v=m[_],y=t(v,s);p.push(y)}i.morphAttributes[h]=p}i.morphTargetsRelative=this.morphTargetsRelative;const d=this.groups;for(let h=0,p=d.length;h<p;h++){const m=d[h];i.addGroup(m.start,m.count,m.materialIndex)}return i}toJSON(){const t={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(t.uuid=this.uuid,t.type=this.type,this.name!==""&&(t.name=this.name),Object.keys(this.userData).length>0&&(t.userData=this.userData),this.parameters!==void 0){const p=this.parameters;for(const m in p)p[m]!==void 0&&(t[m]=p[m]);return t}t.data={attributes:{}};const i=this.index;i!==null&&(t.data.index={type:i.array.constructor.name,array:Array.prototype.slice.call(i.array)});const s=this.attributes;for(const p in s){const m=s[p];t.data.attributes[p]=m.toJSON(t.data)}const l={};let c=!1;for(const p in this.morphAttributes){const m=this.morphAttributes[p],_=[];for(let g=0,v=m.length;g<v;g++){const y=m[g];_.push(y.toJSON(t.data))}_.length>0&&(l[p]=_,c=!0)}c&&(t.data.morphAttributes=l,t.data.morphTargetsRelative=this.morphTargetsRelative);const d=this.groups;d.length>0&&(t.data.groups=JSON.parse(JSON.stringify(d)));const h=this.boundingSphere;return h!==null&&(t.data.boundingSphere=h.toJSON()),t}clone(){return new this.constructor().copy(this)}copy(t){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const i={};this.name=t.name;const s=t.index;s!==null&&this.setIndex(s.clone());const l=t.attributes;for(const m in l){const _=l[m];this.setAttribute(m,_.clone(i))}const c=t.morphAttributes;for(const m in c){const _=[],g=c[m];for(let v=0,y=g.length;v<y;v++)_.push(g[v].clone(i));this.morphAttributes[m]=_}this.morphTargetsRelative=t.morphTargetsRelative;const d=t.groups;for(let m=0,_=d.length;m<_;m++){const g=d[m];this.addGroup(g.start,g.count,g.materialIndex)}const h=t.boundingBox;h!==null&&(this.boundingBox=h.clone());const p=t.boundingSphere;return p!==null&&(this.boundingSphere=p.clone()),this.drawRange.start=t.drawRange.start,this.drawRange.count=t.drawRange.count,this.userData=t.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}let MC=0;class eh extends ao{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:MC++}),this.uuid=pu(),this.name="",this.type="Material",this.blending=Tl,this.side=gr,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=J0,this.blendDst=tg,this.blendEquation=js,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new an(0,0,0),this.blendAlpha=0,this.depthFunc=Ul,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=a1,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Ko,this.stencilZFail=Ko,this.stencilZPass=Ko,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(t){this._alphaTest>0!=t>0&&this.version++,this._alphaTest=t}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(t){if(t!==void 0)for(const i in t){const s=t[i];if(s===void 0){de(`Material: parameter '${i}' has value of undefined.`);continue}const l=this[i];if(l===void 0){de(`Material: '${i}' is not a property of THREE.${this.type}.`);continue}l&&l.isColor?l.set(s):l&&l.isVector3&&s&&s.isVector3?l.copy(s):this[i]=s}}toJSON(t){const i=t===void 0||typeof t=="string";i&&(t={textures:{},images:{}});const s={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};s.uuid=this.uuid,s.type=this.type,this.name!==""&&(s.name=this.name),this.color&&this.color.isColor&&(s.color=this.color.getHex()),this.roughness!==void 0&&(s.roughness=this.roughness),this.metalness!==void 0&&(s.metalness=this.metalness),this.sheen!==void 0&&(s.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(s.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(s.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(s.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(s.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(s.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(s.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(s.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(s.shininess=this.shininess),this.clearcoat!==void 0&&(s.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(s.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(s.clearcoatMap=this.clearcoatMap.toJSON(t).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(s.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(t).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(s.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(t).uuid,s.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(s.sheenColorMap=this.sheenColorMap.toJSON(t).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(s.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(t).uuid),this.dispersion!==void 0&&(s.dispersion=this.dispersion),this.iridescence!==void 0&&(s.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(s.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(s.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(s.iridescenceMap=this.iridescenceMap.toJSON(t).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(s.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(t).uuid),this.anisotropy!==void 0&&(s.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(s.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(s.anisotropyMap=this.anisotropyMap.toJSON(t).uuid),this.map&&this.map.isTexture&&(s.map=this.map.toJSON(t).uuid),this.matcap&&this.matcap.isTexture&&(s.matcap=this.matcap.toJSON(t).uuid),this.alphaMap&&this.alphaMap.isTexture&&(s.alphaMap=this.alphaMap.toJSON(t).uuid),this.lightMap&&this.lightMap.isTexture&&(s.lightMap=this.lightMap.toJSON(t).uuid,s.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(s.aoMap=this.aoMap.toJSON(t).uuid,s.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(s.bumpMap=this.bumpMap.toJSON(t).uuid,s.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(s.normalMap=this.normalMap.toJSON(t).uuid,s.normalMapType=this.normalMapType,s.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(s.displacementMap=this.displacementMap.toJSON(t).uuid,s.displacementScale=this.displacementScale,s.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(s.roughnessMap=this.roughnessMap.toJSON(t).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(s.metalnessMap=this.metalnessMap.toJSON(t).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(s.emissiveMap=this.emissiveMap.toJSON(t).uuid),this.specularMap&&this.specularMap.isTexture&&(s.specularMap=this.specularMap.toJSON(t).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(s.specularIntensityMap=this.specularIntensityMap.toJSON(t).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(s.specularColorMap=this.specularColorMap.toJSON(t).uuid),this.envMap&&this.envMap.isTexture&&(s.envMap=this.envMap.toJSON(t).uuid,this.combine!==void 0&&(s.combine=this.combine)),this.envMapRotation!==void 0&&(s.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(s.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(s.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(s.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(s.gradientMap=this.gradientMap.toJSON(t).uuid),this.transmission!==void 0&&(s.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(s.transmissionMap=this.transmissionMap.toJSON(t).uuid),this.thickness!==void 0&&(s.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(s.thicknessMap=this.thicknessMap.toJSON(t).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(s.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(s.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(s.size=this.size),this.shadowSide!==null&&(s.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(s.sizeAttenuation=this.sizeAttenuation),this.blending!==Tl&&(s.blending=this.blending),this.side!==gr&&(s.side=this.side),this.vertexColors===!0&&(s.vertexColors=!0),this.opacity<1&&(s.opacity=this.opacity),this.transparent===!0&&(s.transparent=!0),this.blendSrc!==J0&&(s.blendSrc=this.blendSrc),this.blendDst!==tg&&(s.blendDst=this.blendDst),this.blendEquation!==js&&(s.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(s.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(s.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(s.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(s.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(s.blendAlpha=this.blendAlpha),this.depthFunc!==Ul&&(s.depthFunc=this.depthFunc),this.depthTest===!1&&(s.depthTest=this.depthTest),this.depthWrite===!1&&(s.depthWrite=this.depthWrite),this.colorWrite===!1&&(s.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(s.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==a1&&(s.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(s.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(s.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==Ko&&(s.stencilFail=this.stencilFail),this.stencilZFail!==Ko&&(s.stencilZFail=this.stencilZFail),this.stencilZPass!==Ko&&(s.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(s.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(s.rotation=this.rotation),this.polygonOffset===!0&&(s.polygonOffset=!0),this.polygonOffsetFactor!==0&&(s.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(s.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(s.linewidth=this.linewidth),this.dashSize!==void 0&&(s.dashSize=this.dashSize),this.gapSize!==void 0&&(s.gapSize=this.gapSize),this.scale!==void 0&&(s.scale=this.scale),this.dithering===!0&&(s.dithering=!0),this.alphaTest>0&&(s.alphaTest=this.alphaTest),this.alphaHash===!0&&(s.alphaHash=!0),this.alphaToCoverage===!0&&(s.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(s.premultipliedAlpha=!0),this.forceSinglePass===!0&&(s.forceSinglePass=!0),this.allowOverride===!1&&(s.allowOverride=!1),this.wireframe===!0&&(s.wireframe=!0),this.wireframeLinewidth>1&&(s.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(s.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(s.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(s.flatShading=!0),this.visible===!1&&(s.visible=!1),this.toneMapped===!1&&(s.toneMapped=!1),this.fog===!1&&(s.fog=!1),Object.keys(this.userData).length>0&&(s.userData=this.userData);function l(c){const d=[];for(const h in c){const p=c[h];delete p.metadata,d.push(p)}return d}if(i){const c=l(t.textures),d=l(t.images);c.length>0&&(s.textures=c),d.length>0&&(s.images=d)}return s}clone(){return new this.constructor().copy(this)}copy(t){this.name=t.name,this.blending=t.blending,this.side=t.side,this.vertexColors=t.vertexColors,this.opacity=t.opacity,this.transparent=t.transparent,this.blendSrc=t.blendSrc,this.blendDst=t.blendDst,this.blendEquation=t.blendEquation,this.blendSrcAlpha=t.blendSrcAlpha,this.blendDstAlpha=t.blendDstAlpha,this.blendEquationAlpha=t.blendEquationAlpha,this.blendColor.copy(t.blendColor),this.blendAlpha=t.blendAlpha,this.depthFunc=t.depthFunc,this.depthTest=t.depthTest,this.depthWrite=t.depthWrite,this.stencilWriteMask=t.stencilWriteMask,this.stencilFunc=t.stencilFunc,this.stencilRef=t.stencilRef,this.stencilFuncMask=t.stencilFuncMask,this.stencilFail=t.stencilFail,this.stencilZFail=t.stencilZFail,this.stencilZPass=t.stencilZPass,this.stencilWrite=t.stencilWrite;const i=t.clippingPlanes;let s=null;if(i!==null){const l=i.length;s=new Array(l);for(let c=0;c!==l;++c)s[c]=i[c].clone()}return this.clippingPlanes=s,this.clipIntersection=t.clipIntersection,this.clipShadows=t.clipShadows,this.shadowSide=t.shadowSide,this.colorWrite=t.colorWrite,this.precision=t.precision,this.polygonOffset=t.polygonOffset,this.polygonOffsetFactor=t.polygonOffsetFactor,this.polygonOffsetUnits=t.polygonOffsetUnits,this.dithering=t.dithering,this.alphaTest=t.alphaTest,this.alphaHash=t.alphaHash,this.alphaToCoverage=t.alphaToCoverage,this.premultipliedAlpha=t.premultipliedAlpha,this.forceSinglePass=t.forceSinglePass,this.allowOverride=t.allowOverride,this.visible=t.visible,this.toneMapped=t.toneMapped,this.userData=JSON.parse(JSON.stringify(t.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(t){t===!0&&this.version++}}const cr=new ut,l0=new ut,$f=new ut,ns=new ut,c0=new ut,Jf=new ut,u0=new ut;class bC{constructor(t=new ut,i=new ut(0,0,-1)){this.origin=t,this.direction=i}set(t,i){return this.origin.copy(t),this.direction.copy(i),this}copy(t){return this.origin.copy(t.origin),this.direction.copy(t.direction),this}at(t,i){return i.copy(this.origin).addScaledVector(this.direction,t)}lookAt(t){return this.direction.copy(t).sub(this.origin).normalize(),this}recast(t){return this.origin.copy(this.at(t,cr)),this}closestPointToPoint(t,i){i.subVectors(t,this.origin);const s=i.dot(this.direction);return s<0?i.copy(this.origin):i.copy(this.origin).addScaledVector(this.direction,s)}distanceToPoint(t){return Math.sqrt(this.distanceSqToPoint(t))}distanceSqToPoint(t){const i=cr.subVectors(t,this.origin).dot(this.direction);return i<0?this.origin.distanceToSquared(t):(cr.copy(this.origin).addScaledVector(this.direction,i),cr.distanceToSquared(t))}distanceSqToSegment(t,i,s,l){l0.copy(t).add(i).multiplyScalar(.5),$f.copy(i).sub(t).normalize(),ns.copy(this.origin).sub(l0);const c=t.distanceTo(i)*.5,d=-this.direction.dot($f),h=ns.dot(this.direction),p=-ns.dot($f),m=ns.lengthSq(),_=Math.abs(1-d*d);let g,v,y,b;if(_>0)if(g=d*p-h,v=d*h-p,b=c*_,g>=0)if(v>=-b)if(v<=b){const C=1/_;g*=C,v*=C,y=g*(g+d*v+2*h)+v*(d*g+v+2*p)+m}else v=c,g=Math.max(0,-(d*v+h)),y=-g*g+v*(v+2*p)+m;else v=-c,g=Math.max(0,-(d*v+h)),y=-g*g+v*(v+2*p)+m;else v<=-b?(g=Math.max(0,-(-d*c+h)),v=g>0?-c:Math.min(Math.max(-c,-p),c),y=-g*g+v*(v+2*p)+m):v<=b?(g=0,v=Math.min(Math.max(-c,-p),c),y=v*(v+2*p)+m):(g=Math.max(0,-(d*c+h)),v=g>0?c:Math.min(Math.max(-c,-p),c),y=-g*g+v*(v+2*p)+m);else v=d>0?-c:c,g=Math.max(0,-(d*v+h)),y=-g*g+v*(v+2*p)+m;return s&&s.copy(this.origin).addScaledVector(this.direction,g),l&&l.copy(l0).addScaledVector($f,v),y}intersectSphere(t,i){cr.subVectors(t.center,this.origin);const s=cr.dot(this.direction),l=cr.dot(cr)-s*s,c=t.radius*t.radius;if(l>c)return null;const d=Math.sqrt(c-l),h=s-d,p=s+d;return p<0?null:h<0?this.at(p,i):this.at(h,i)}intersectsSphere(t){return t.radius<0?!1:this.distanceSqToPoint(t.center)<=t.radius*t.radius}distanceToPlane(t){const i=t.normal.dot(this.direction);if(i===0)return t.distanceToPoint(this.origin)===0?0:null;const s=-(this.origin.dot(t.normal)+t.constant)/i;return s>=0?s:null}intersectPlane(t,i){const s=this.distanceToPlane(t);return s===null?null:this.at(s,i)}intersectsPlane(t){const i=t.distanceToPoint(this.origin);return i===0||t.normal.dot(this.direction)*i<0}intersectBox(t,i){let s,l,c,d,h,p;const m=1/this.direction.x,_=1/this.direction.y,g=1/this.direction.z,v=this.origin;return m>=0?(s=(t.min.x-v.x)*m,l=(t.max.x-v.x)*m):(s=(t.max.x-v.x)*m,l=(t.min.x-v.x)*m),_>=0?(c=(t.min.y-v.y)*_,d=(t.max.y-v.y)*_):(c=(t.max.y-v.y)*_,d=(t.min.y-v.y)*_),s>d||c>l||((c>s||isNaN(s))&&(s=c),(d<l||isNaN(l))&&(l=d),g>=0?(h=(t.min.z-v.z)*g,p=(t.max.z-v.z)*g):(h=(t.max.z-v.z)*g,p=(t.min.z-v.z)*g),s>p||h>l)||((h>s||s!==s)&&(s=h),(p<l||l!==l)&&(l=p),l<0)?null:this.at(s>=0?s:l,i)}intersectsBox(t){return this.intersectBox(t,cr)!==null}intersectTriangle(t,i,s,l,c){c0.subVectors(i,t),Jf.subVectors(s,t),u0.crossVectors(c0,Jf);let d=this.direction.dot(u0),h;if(d>0){if(l)return null;h=1}else if(d<0)h=-1,d=-d;else return null;ns.subVectors(this.origin,t);const p=h*this.direction.dot(Jf.crossVectors(ns,Jf));if(p<0)return null;const m=h*this.direction.dot(c0.cross(ns));if(m<0||p+m>d)return null;const _=-h*ns.dot(u0);return _<0?null:this.at(_/d,c)}applyMatrix4(t){return this.origin.applyMatrix4(t),this.direction.transformDirection(t),this}equals(t){return t.origin.equals(this.origin)&&t.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class dv extends eh{constructor(t){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new an(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new fs,this.combine=Kb,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}}const y1=new Nn,Is=new bC,td=new fv,S1=new ut,ed=new ut,nd=new ut,id=new ut,f0=new ut,ad=new ut,M1=new ut,rd=new ut;class ka extends Oi{constructor(t=new qa,i=new dv){super(),this.isMesh=!0,this.type="Mesh",this.geometry=t,this.material=i,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(t,i){return super.copy(t,i),t.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=t.morphTargetInfluences.slice()),t.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary)),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}updateMorphTargets(){const i=this.geometry.morphAttributes,s=Object.keys(i);if(s.length>0){const l=i[s[0]];if(l!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let c=0,d=l.length;c<d;c++){const h=l[c].name||String(c);this.morphTargetInfluences.push(0),this.morphTargetDictionary[h]=c}}}}getVertexPosition(t,i){const s=this.geometry,l=s.attributes.position,c=s.morphAttributes.position,d=s.morphTargetsRelative;i.fromBufferAttribute(l,t);const h=this.morphTargetInfluences;if(c&&h){ad.set(0,0,0);for(let p=0,m=c.length;p<m;p++){const _=h[p],g=c[p];_!==0&&(f0.fromBufferAttribute(g,t),d?ad.addScaledVector(f0,_):ad.addScaledVector(f0.sub(i),_))}i.add(ad)}return i}raycast(t,i){const s=this.geometry,l=this.material,c=this.matrixWorld;l!==void 0&&(s.boundingSphere===null&&s.computeBoundingSphere(),td.copy(s.boundingSphere),td.applyMatrix4(c),Is.copy(t.ray).recast(t.near),!(td.containsPoint(Is.origin)===!1&&(Is.intersectSphere(td,S1)===null||Is.origin.distanceToSquared(S1)>(t.far-t.near)**2))&&(y1.copy(c).invert(),Is.copy(t.ray).applyMatrix4(y1),!(s.boundingBox!==null&&Is.intersectsBox(s.boundingBox)===!1)&&this._computeIntersections(t,i,Is)))}_computeIntersections(t,i,s){let l;const c=this.geometry,d=this.material,h=c.index,p=c.attributes.position,m=c.attributes.uv,_=c.attributes.uv1,g=c.attributes.normal,v=c.groups,y=c.drawRange;if(h!==null)if(Array.isArray(d))for(let b=0,C=v.length;b<C;b++){const S=v[b],M=d[S.materialIndex],R=Math.max(S.start,y.start),P=Math.min(h.count,Math.min(S.start+S.count,y.start+y.count));for(let N=R,H=P;N<H;N+=3){const U=h.getX(N),L=h.getX(N+1),E=h.getX(N+2);l=sd(this,M,t,s,m,_,g,U,L,E),l&&(l.faceIndex=Math.floor(N/3),l.face.materialIndex=S.materialIndex,i.push(l))}}else{const b=Math.max(0,y.start),C=Math.min(h.count,y.start+y.count);for(let S=b,M=C;S<M;S+=3){const R=h.getX(S),P=h.getX(S+1),N=h.getX(S+2);l=sd(this,d,t,s,m,_,g,R,P,N),l&&(l.faceIndex=Math.floor(S/3),i.push(l))}}else if(p!==void 0)if(Array.isArray(d))for(let b=0,C=v.length;b<C;b++){const S=v[b],M=d[S.materialIndex],R=Math.max(S.start,y.start),P=Math.min(p.count,Math.min(S.start+S.count,y.start+y.count));for(let N=R,H=P;N<H;N+=3){const U=N,L=N+1,E=N+2;l=sd(this,M,t,s,m,_,g,U,L,E),l&&(l.faceIndex=Math.floor(N/3),l.face.materialIndex=S.materialIndex,i.push(l))}}else{const b=Math.max(0,y.start),C=Math.min(p.count,y.start+y.count);for(let S=b,M=C;S<M;S+=3){const R=S,P=S+1,N=S+2;l=sd(this,d,t,s,m,_,g,R,P,N),l&&(l.faceIndex=Math.floor(S/3),i.push(l))}}}}function EC(a,t,i,s,l,c,d,h){let p;if(t.side===yi?p=s.intersectTriangle(d,c,l,!0,h):p=s.intersectTriangle(l,c,d,t.side===gr,h),p===null)return null;rd.copy(h),rd.applyMatrix4(a.matrixWorld);const m=i.ray.origin.distanceTo(rd);return m<i.near||m>i.far?null:{distance:m,point:rd.clone(),object:a}}function sd(a,t,i,s,l,c,d,h,p,m){a.getVertexPosition(h,ed),a.getVertexPosition(p,nd),a.getVertexPosition(m,id);const _=EC(a,t,i,s,ed,nd,id,M1);if(_){const g=new ut;pa.getBarycoord(M1,ed,nd,id,g),l&&(_.uv=pa.getInterpolatedAttribute(l,h,p,m,g,new Je)),c&&(_.uv1=pa.getInterpolatedAttribute(c,h,p,m,g,new Je)),d&&(_.normal=pa.getInterpolatedAttribute(d,h,p,m,g,new ut),_.normal.dot(s.direction)>0&&_.normal.multiplyScalar(-1));const v={a:h,b:p,c:m,normal:new ut,materialIndex:0};pa.getNormal(ed,nd,id,v.normal),_.face=v,_.barycoord=g}return _}class TC extends ci{constructor(t=null,i=1,s=1,l,c,d,h,p,m=Qn,_=Qn,g,v){super(null,d,h,p,m,_,l,c,g,v),this.isDataTexture=!0,this.image={data:t,width:i,height:s},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}const d0=new ut,AC=new ut,wC=new _e;class Xs{constructor(t=new ut(1,0,0),i=0){this.isPlane=!0,this.normal=t,this.constant=i}set(t,i){return this.normal.copy(t),this.constant=i,this}setComponents(t,i,s,l){return this.normal.set(t,i,s),this.constant=l,this}setFromNormalAndCoplanarPoint(t,i){return this.normal.copy(t),this.constant=-i.dot(this.normal),this}setFromCoplanarPoints(t,i,s){const l=d0.subVectors(s,i).cross(AC.subVectors(t,i)).normalize();return this.setFromNormalAndCoplanarPoint(l,t),this}copy(t){return this.normal.copy(t.normal),this.constant=t.constant,this}normalize(){const t=1/this.normal.length();return this.normal.multiplyScalar(t),this.constant*=t,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(t){return this.normal.dot(t)+this.constant}distanceToSphere(t){return this.distanceToPoint(t.center)-t.radius}projectPoint(t,i){return i.copy(t).addScaledVector(this.normal,-this.distanceToPoint(t))}intersectLine(t,i,s=!0){const l=t.delta(d0),c=this.normal.dot(l);if(c===0)return this.distanceToPoint(t.start)===0?i.copy(t.start):null;const d=-(t.start.dot(this.normal)+this.constant)/c;return s===!0&&(d<0||d>1)?null:i.copy(t.start).addScaledVector(l,d)}intersectsLine(t){const i=this.distanceToPoint(t.start),s=this.distanceToPoint(t.end);return i<0&&s>0||s<0&&i>0}intersectsBox(t){return t.intersectsPlane(this)}intersectsSphere(t){return t.intersectsPlane(this)}coplanarPoint(t){return t.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(t,i){const s=i||wC.getNormalMatrix(t),l=this.coplanarPoint(d0).applyMatrix4(t),c=this.normal.applyMatrix3(s).normalize();return this.constant=-l.dot(c),this}translate(t){return this.constant-=t.dot(this.normal),this}equals(t){return t.normal.equals(this.normal)&&t.constant===this.constant}clone(){return new this.constructor().copy(this)}}const Fs=new fv,RC=new Je(.5,.5),od=new ut;class xE{constructor(t=new Xs,i=new Xs,s=new Xs,l=new Xs,c=new Xs,d=new Xs){this.planes=[t,i,s,l,c,d]}set(t,i,s,l,c,d){const h=this.planes;return h[0].copy(t),h[1].copy(i),h[2].copy(s),h[3].copy(l),h[4].copy(c),h[5].copy(d),this}copy(t){const i=this.planes;for(let s=0;s<6;s++)i[s].copy(t.planes[s]);return this}setFromProjectionMatrix(t,i=za,s=!1){const l=this.planes,c=t.elements,d=c[0],h=c[1],p=c[2],m=c[3],_=c[4],g=c[5],v=c[6],y=c[7],b=c[8],C=c[9],S=c[10],M=c[11],R=c[12],P=c[13],N=c[14],H=c[15];if(l[0].setComponents(m-d,y-_,M-b,H-R).normalize(),l[1].setComponents(m+d,y+_,M+b,H+R).normalize(),l[2].setComponents(m+h,y+g,M+C,H+P).normalize(),l[3].setComponents(m-h,y-g,M-C,H-P).normalize(),s)l[4].setComponents(p,v,S,N).normalize(),l[5].setComponents(m-p,y-v,M-S,H-N).normalize();else if(l[4].setComponents(m-p,y-v,M-S,H-N).normalize(),i===za)l[5].setComponents(m+p,y+v,M+S,H+N).normalize();else if(i===Gd)l[5].setComponents(p,v,S,N).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+i);return this}intersectsObject(t){if(t.boundingSphere!==void 0)t.boundingSphere===null&&t.computeBoundingSphere(),Fs.copy(t.boundingSphere).applyMatrix4(t.matrixWorld);else{const i=t.geometry;i.boundingSphere===null&&i.computeBoundingSphere(),Fs.copy(i.boundingSphere).applyMatrix4(t.matrixWorld)}return this.intersectsSphere(Fs)}intersectsSprite(t){Fs.center.set(0,0,0);const i=RC.distanceTo(t.center);return Fs.radius=.7071067811865476+i,Fs.applyMatrix4(t.matrixWorld),this.intersectsSphere(Fs)}intersectsSphere(t){const i=this.planes,s=t.center,l=-t.radius;for(let c=0;c<6;c++)if(i[c].distanceToPoint(s)<l)return!1;return!0}intersectsBox(t){const i=this.planes;for(let s=0;s<6;s++){const l=i[s];if(od.x=l.normal.x>0?t.max.x:t.min.x,od.y=l.normal.y>0?t.max.y:t.min.y,od.z=l.normal.z>0?t.max.z:t.min.z,l.distanceToPoint(od)<0)return!1}return!0}containsPoint(t){const i=this.planes;for(let s=0;s<6;s++)if(i[s].distanceToPoint(t)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}class yE extends ci{constructor(t=[],i=no,s,l,c,d,h,p,m,_){super(t,i,s,l,c,d,h,p,m,_),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(t){this.image=t}}class Ol extends ci{constructor(t,i,s=Va,l,c,d,h=Qn,p=Qn,m,_=_r,g=1){if(_!==_r&&_!==Qs)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");const v={width:t,height:i,depth:g};super(v,l,c,d,h,p,_,s,m),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(t){return super.copy(t),this.source=new uv(Object.assign({},t.image)),this.compareFunction=t.compareFunction,this}toJSON(t){const i=super.toJSON(t);return this.compareFunction!==null&&(i.compareFunction=this.compareFunction),i}}class CC extends Ol{constructor(t,i=Va,s=no,l,c,d=Qn,h=Qn,p,m=_r){const _={width:t,height:t,depth:1},g=[_,_,_,_,_,_];super(t,t,i,s,l,c,d,h,p,m),this.image=g,this.isCubeDepthTexture=!0,this.isCubeTexture=!0}get images(){return this.image}set images(t){this.image=t}}class SE extends ci{constructor(t=null){super(),this.sourceTexture=t,this.isExternalTexture=!0}copy(t){return super.copy(t),this.sourceTexture=t.sourceTexture,this}}class gu extends qa{constructor(t=1,i=1,s=1,l=1,c=1,d=1){super(),this.type="BoxGeometry",this.parameters={width:t,height:i,depth:s,widthSegments:l,heightSegments:c,depthSegments:d};const h=this;l=Math.floor(l),c=Math.floor(c),d=Math.floor(d);const p=[],m=[],_=[],g=[];let v=0,y=0;b("z","y","x",-1,-1,s,i,t,d,c,0),b("z","y","x",1,-1,s,i,-t,d,c,1),b("x","z","y",1,1,t,s,i,l,d,2),b("x","z","y",1,-1,t,s,-i,l,d,3),b("x","y","z",1,-1,t,i,s,l,c,4),b("x","y","z",-1,-1,t,i,-s,l,c,5),this.setIndex(p),this.setAttribute("position",new $i(m,3)),this.setAttribute("normal",new $i(_,3)),this.setAttribute("uv",new $i(g,2));function b(C,S,M,R,P,N,H,U,L,E,O){const V=N/L,z=H/E,Z=N/2,tt=H/2,ft=U/2,X=L+1,B=E+1;let W=0,J=0;const dt=new ut;for(let pt=0;pt<B;pt++){const Tt=pt*z-tt;for(let zt=0;zt<X;zt++){const re=zt*V-Z;dt[C]=re*R,dt[S]=Tt*P,dt[M]=ft,m.push(dt.x,dt.y,dt.z),dt[C]=0,dt[S]=0,dt[M]=U>0?1:-1,_.push(dt.x,dt.y,dt.z),g.push(zt/L),g.push(1-pt/E),W+=1}}for(let pt=0;pt<E;pt++)for(let Tt=0;Tt<L;Tt++){const zt=v+Tt+X*pt,re=v+Tt+X*(pt+1),F=v+(Tt+1)+X*(pt+1),lt=v+(Tt+1)+X*pt;p.push(zt,re,lt),p.push(re,F,lt),J+=6}h.addGroup(y,J,O),y+=J,v+=W}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new gu(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}}class nh extends qa{constructor(t=1,i=1,s=1,l=1){super(),this.type="PlaneGeometry",this.parameters={width:t,height:i,widthSegments:s,heightSegments:l};const c=t/2,d=i/2,h=Math.floor(s),p=Math.floor(l),m=h+1,_=p+1,g=t/h,v=i/p,y=[],b=[],C=[],S=[];for(let M=0;M<_;M++){const R=M*v-d;for(let P=0;P<m;P++){const N=P*g-c;b.push(N,-R,0),C.push(0,0,1),S.push(P/h),S.push(1-M/p)}}for(let M=0;M<p;M++)for(let R=0;R<h;R++){const P=R+m*M,N=R+m*(M+1),H=R+1+m*(M+1),U=R+1+m*M;y.push(P,N,U),y.push(N,H,U)}this.setIndex(y),this.setAttribute("position",new $i(b,3)),this.setAttribute("normal",new $i(C,3)),this.setAttribute("uv",new $i(S,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new nh(t.width,t.height,t.widthSegments,t.heightSegments)}}class hv extends qa{constructor(t=.5,i=1,s=32,l=1,c=0,d=Math.PI*2){super(),this.type="RingGeometry",this.parameters={innerRadius:t,outerRadius:i,thetaSegments:s,phiSegments:l,thetaStart:c,thetaLength:d},s=Math.max(3,s),l=Math.max(1,l);const h=[],p=[],m=[],_=[];let g=t;const v=(i-t)/l,y=new ut,b=new Je;for(let C=0;C<=l;C++){for(let S=0;S<=s;S++){const M=c+S/s*d;y.x=g*Math.cos(M),y.y=g*Math.sin(M),p.push(y.x,y.y,y.z),m.push(0,0,1),b.x=(y.x/i+1)/2,b.y=(y.y/i+1)/2,_.push(b.x,b.y)}g+=v}for(let C=0;C<l;C++){const S=C*(s+1);for(let M=0;M<s;M++){const R=M+S,P=R,N=R+s+1,H=R+s+2,U=R+1;h.push(P,N,U),h.push(N,H,U)}}this.setIndex(h),this.setAttribute("position",new $i(p,3)),this.setAttribute("normal",new $i(m,3)),this.setAttribute("uv",new $i(_,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new hv(t.innerRadius,t.outerRadius,t.thetaSegments,t.phiSegments,t.thetaStart,t.thetaLength)}}function Pl(a){const t={};for(const i in a){t[i]={};for(const s in a[i]){const l=a[i][s];if(b1(l))l.isRenderTargetTexture?(de("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),t[i][s]=null):t[i][s]=l.clone();else if(Array.isArray(l))if(b1(l[0])){const c=[];for(let d=0,h=l.length;d<h;d++)c[d]=l[d].clone();t[i][s]=c}else t[i][s]=l.slice();else t[i][s]=l}}return t}function oi(a){const t={};for(let i=0;i<a.length;i++){const s=Pl(a[i]);for(const l in s)t[l]=s[l]}return t}function b1(a){return a&&(a.isColor||a.isMatrix3||a.isMatrix4||a.isVector2||a.isVector3||a.isVector4||a.isTexture||a.isQuaternion)}function DC(a){const t=[];for(let i=0;i<a.length;i++)t.push(a[i].clone());return t}function ME(a){const t=a.getRenderTarget();return t===null?a.outputColorSpace:t.isXRRenderTarget===!0?t.texture.colorSpace:Oe.workingColorSpace}const NC={clone:Pl,merge:oi};var UC=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,LC=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class Xa extends eh{constructor(t){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=UC,this.fragmentShader=LC,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,t!==void 0&&this.setValues(t)}copy(t){return super.copy(t),this.fragmentShader=t.fragmentShader,this.vertexShader=t.vertexShader,this.uniforms=Pl(t.uniforms),this.uniformsGroups=DC(t.uniformsGroups),this.defines=Object.assign({},t.defines),this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.fog=t.fog,this.lights=t.lights,this.clipping=t.clipping,this.extensions=Object.assign({},t.extensions),this.glslVersion=t.glslVersion,this.defaultAttributeValues=Object.assign({},t.defaultAttributeValues),this.index0AttributeName=t.index0AttributeName,this.uniformsNeedUpdate=t.uniformsNeedUpdate,this}toJSON(t){const i=super.toJSON(t);i.glslVersion=this.glslVersion,i.uniforms={};for(const l in this.uniforms){const d=this.uniforms[l].value;d&&d.isTexture?i.uniforms[l]={type:"t",value:d.toJSON(t).uuid}:d&&d.isColor?i.uniforms[l]={type:"c",value:d.getHex()}:d&&d.isVector2?i.uniforms[l]={type:"v2",value:d.toArray()}:d&&d.isVector3?i.uniforms[l]={type:"v3",value:d.toArray()}:d&&d.isVector4?i.uniforms[l]={type:"v4",value:d.toArray()}:d&&d.isMatrix3?i.uniforms[l]={type:"m3",value:d.toArray()}:d&&d.isMatrix4?i.uniforms[l]={type:"m4",value:d.toArray()}:i.uniforms[l]={value:d}}Object.keys(this.defines).length>0&&(i.defines=this.defines),i.vertexShader=this.vertexShader,i.fragmentShader=this.fragmentShader,i.lights=this.lights,i.clipping=this.clipping;const s={};for(const l in this.extensions)this.extensions[l]===!0&&(s[l]=!0);return Object.keys(s).length>0&&(i.extensions=s),i}}class OC extends Xa{constructor(t){super(t),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}}class PC extends eh{constructor(t){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=WR,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(t)}copy(t){return super.copy(t),this.depthPacking=t.depthPacking,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this}}class zC extends eh{constructor(t){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(t)}copy(t){return super.copy(t),this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this}}const ld=new ut,cd=new Ia,Ca=new ut;class bE extends Oi{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new Nn,this.projectionMatrix=new Nn,this.projectionMatrixInverse=new Nn,this.coordinateSystem=za,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(t,i){return super.copy(t,i),this.matrixWorldInverse.copy(t.matrixWorldInverse),this.projectionMatrix.copy(t.projectionMatrix),this.projectionMatrixInverse.copy(t.projectionMatrixInverse),this.coordinateSystem=t.coordinateSystem,this}getWorldDirection(t){return super.getWorldDirection(t).negate()}updateMatrixWorld(t){super.updateMatrixWorld(t),this.matrixWorld.decompose(ld,cd,Ca),Ca.x===1&&Ca.y===1&&Ca.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(ld,cd,Ca.set(1,1,1)).invert()}updateWorldMatrix(t,i){super.updateWorldMatrix(t,i),this.matrixWorld.decompose(ld,cd,Ca),Ca.x===1&&Ca.y===1&&Ca.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(ld,cd,Ca.set(1,1,1)).invert()}clone(){return new this.constructor().copy(this)}}const is=new ut,E1=new Je,T1=new Je;class Qi extends bE{constructor(t=50,i=1,s=.1,l=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=t,this.zoom=1,this.near=s,this.far=l,this.focus=10,this.aspect=i,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(t,i){return super.copy(t,i),this.fov=t.fov,this.zoom=t.zoom,this.near=t.near,this.far=t.far,this.focus=t.focus,this.aspect=t.aspect,this.view=t.view===null?null:Object.assign({},t.view),this.filmGauge=t.filmGauge,this.filmOffset=t.filmOffset,this}setFocalLength(t){const i=.5*this.getFilmHeight()/t;this.fov=Gg*2*Math.atan(i),this.updateProjectionMatrix()}getFocalLength(){const t=Math.tan(km*.5*this.fov);return .5*this.getFilmHeight()/t}getEffectiveFOV(){return Gg*2*Math.atan(Math.tan(km*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(t,i,s){is.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),i.set(is.x,is.y).multiplyScalar(-t/is.z),is.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),s.set(is.x,is.y).multiplyScalar(-t/is.z)}getViewSize(t,i){return this.getViewBounds(t,E1,T1),i.subVectors(T1,E1)}setViewOffset(t,i,s,l,c,d){this.aspect=t/i,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=i,this.view.offsetX=s,this.view.offsetY=l,this.view.width=c,this.view.height=d,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=this.near;let i=t*Math.tan(km*.5*this.fov)/this.zoom,s=2*i,l=this.aspect*s,c=-.5*l;const d=this.view;if(this.view!==null&&this.view.enabled){const p=d.fullWidth,m=d.fullHeight;c+=d.offsetX*l/p,i-=d.offsetY*s/m,l*=d.width/p,s*=d.height/m}const h=this.filmOffset;h!==0&&(c+=t*h/this.getFilmWidth()),this.projectionMatrix.makePerspective(c,c+l,i,i-s,t,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const i=super.toJSON(t);return i.object.fov=this.fov,i.object.zoom=this.zoom,i.object.near=this.near,i.object.far=this.far,i.object.focus=this.focus,i.object.aspect=this.aspect,this.view!==null&&(i.object.view=Object.assign({},this.view)),i.object.filmGauge=this.filmGauge,i.object.filmOffset=this.filmOffset,i}}class EE extends bE{constructor(t=-1,i=1,s=1,l=-1,c=.1,d=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=t,this.right=i,this.top=s,this.bottom=l,this.near=c,this.far=d,this.updateProjectionMatrix()}copy(t,i){return super.copy(t,i),this.left=t.left,this.right=t.right,this.top=t.top,this.bottom=t.bottom,this.near=t.near,this.far=t.far,this.zoom=t.zoom,this.view=t.view===null?null:Object.assign({},t.view),this}setViewOffset(t,i,s,l,c,d){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=i,this.view.offsetX=s,this.view.offsetY=l,this.view.width=c,this.view.height=d,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=(this.right-this.left)/(2*this.zoom),i=(this.top-this.bottom)/(2*this.zoom),s=(this.right+this.left)/2,l=(this.top+this.bottom)/2;let c=s-t,d=s+t,h=l+i,p=l-i;if(this.view!==null&&this.view.enabled){const m=(this.right-this.left)/this.view.fullWidth/this.zoom,_=(this.top-this.bottom)/this.view.fullHeight/this.zoom;c+=m*this.view.offsetX,d=c+m*this.view.width,h-=_*this.view.offsetY,p=h-_*this.view.height}this.projectionMatrix.makeOrthographic(c,d,h,p,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const i=super.toJSON(t);return i.object.zoom=this.zoom,i.object.left=this.left,i.object.right=this.right,i.object.top=this.top,i.object.bottom=this.bottom,i.object.near=this.near,i.object.far=this.far,this.view!==null&&(i.object.view=Object.assign({},this.view)),i}}const ll=-90,cl=1;class IC extends Oi{constructor(t,i,s){super(),this.type="CubeCamera",this.renderTarget=s,this.coordinateSystem=null,this.activeMipmapLevel=0;const l=new Qi(ll,cl,t,i);l.layers=this.layers,this.add(l);const c=new Qi(ll,cl,t,i);c.layers=this.layers,this.add(c);const d=new Qi(ll,cl,t,i);d.layers=this.layers,this.add(d);const h=new Qi(ll,cl,t,i);h.layers=this.layers,this.add(h);const p=new Qi(ll,cl,t,i);p.layers=this.layers,this.add(p);const m=new Qi(ll,cl,t,i);m.layers=this.layers,this.add(m)}updateCoordinateSystem(){const t=this.coordinateSystem,i=this.children.concat(),[s,l,c,d,h,p]=i;for(const m of i)this.remove(m);if(t===za)s.up.set(0,1,0),s.lookAt(1,0,0),l.up.set(0,1,0),l.lookAt(-1,0,0),c.up.set(0,0,-1),c.lookAt(0,1,0),d.up.set(0,0,1),d.lookAt(0,-1,0),h.up.set(0,1,0),h.lookAt(0,0,1),p.up.set(0,1,0),p.lookAt(0,0,-1);else if(t===Gd)s.up.set(0,-1,0),s.lookAt(-1,0,0),l.up.set(0,-1,0),l.lookAt(1,0,0),c.up.set(0,0,1),c.lookAt(0,1,0),d.up.set(0,0,-1),d.lookAt(0,-1,0),h.up.set(0,-1,0),h.lookAt(0,0,1),p.up.set(0,-1,0),p.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+t);for(const m of i)this.add(m),m.updateMatrixWorld()}update(t,i){this.parent===null&&this.updateMatrixWorld();const{renderTarget:s,activeMipmapLevel:l}=this;this.coordinateSystem!==t.coordinateSystem&&(this.coordinateSystem=t.coordinateSystem,this.updateCoordinateSystem());const[c,d,h,p,m,_]=this.children,g=t.getRenderTarget(),v=t.getActiveCubeFace(),y=t.getActiveMipmapLevel(),b=t.xr.enabled;t.xr.enabled=!1;const C=s.texture.generateMipmaps;s.texture.generateMipmaps=!1;let S=!1;t.isWebGLRenderer===!0?S=t.state.buffers.depth.getReversed():S=t.reversedDepthBuffer,t.setRenderTarget(s,0,l),S&&t.autoClear===!1&&t.clearDepth(),t.render(i,c),t.setRenderTarget(s,1,l),S&&t.autoClear===!1&&t.clearDepth(),t.render(i,d),t.setRenderTarget(s,2,l),S&&t.autoClear===!1&&t.clearDepth(),t.render(i,h),t.setRenderTarget(s,3,l),S&&t.autoClear===!1&&t.clearDepth(),t.render(i,p),t.setRenderTarget(s,4,l),S&&t.autoClear===!1&&t.clearDepth(),t.render(i,m),s.texture.generateMipmaps=C,t.setRenderTarget(s,5,l),S&&t.autoClear===!1&&t.clearDepth(),t.render(i,_),t.setRenderTarget(g,v,y),t.xr.enabled=b,s.texture.needsPMREMUpdate=!0}}class FC extends Qi{constructor(t=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=t}}class TE{static{TE.prototype.isMatrix2=!0}constructor(t,i,s,l){this.elements=[1,0,0,1],t!==void 0&&this.set(t,i,s,l)}identity(){return this.set(1,0,0,1),this}fromArray(t,i=0){for(let s=0;s<4;s++)this.elements[s]=t[s+i];return this}set(t,i,s,l){const c=this.elements;return c[0]=t,c[2]=i,c[1]=s,c[3]=l,this}}function A1(a,t,i,s){const l=BC(s);switch(i){case uE:return a*t;case dE:return a*t/l.components*l.byteLength;case rv:return a*t/l.components*l.byteLength;case io:return a*t*2/l.components*l.byteLength;case sv:return a*t*2/l.components*l.byteLength;case fE:return a*t*3/l.components*l.byteLength;case ma:return a*t*4/l.components*l.byteLength;case ov:return a*t*4/l.components*l.byteLength;case Ad:case wd:return Math.floor((a+3)/4)*Math.floor((t+3)/4)*8;case Rd:case Cd:return Math.floor((a+3)/4)*Math.floor((t+3)/4)*16;case fg:case hg:return Math.max(a,16)*Math.max(t,8)/4;case ug:case dg:return Math.max(a,8)*Math.max(t,8)/2;case pg:case mg:case vg:case _g:return Math.floor((a+3)/4)*Math.floor((t+3)/4)*8;case gg:case Id:case xg:return Math.floor((a+3)/4)*Math.floor((t+3)/4)*16;case yg:return Math.floor((a+3)/4)*Math.floor((t+3)/4)*16;case Sg:return Math.floor((a+4)/5)*Math.floor((t+3)/4)*16;case Mg:return Math.floor((a+4)/5)*Math.floor((t+4)/5)*16;case bg:return Math.floor((a+5)/6)*Math.floor((t+4)/5)*16;case Eg:return Math.floor((a+5)/6)*Math.floor((t+5)/6)*16;case Tg:return Math.floor((a+7)/8)*Math.floor((t+4)/5)*16;case Ag:return Math.floor((a+7)/8)*Math.floor((t+5)/6)*16;case wg:return Math.floor((a+7)/8)*Math.floor((t+7)/8)*16;case Rg:return Math.floor((a+9)/10)*Math.floor((t+4)/5)*16;case Cg:return Math.floor((a+9)/10)*Math.floor((t+5)/6)*16;case Dg:return Math.floor((a+9)/10)*Math.floor((t+7)/8)*16;case Ng:return Math.floor((a+9)/10)*Math.floor((t+9)/10)*16;case Ug:return Math.floor((a+11)/12)*Math.floor((t+9)/10)*16;case Lg:return Math.floor((a+11)/12)*Math.floor((t+11)/12)*16;case Og:case Pg:case zg:return Math.ceil(a/4)*Math.ceil(t/4)*16;case Ig:case Fg:return Math.ceil(a/4)*Math.ceil(t/4)*8;case Fd:case Bg:return Math.ceil(a/4)*Math.ceil(t/4)*16}throw new Error(`Unable to determine texture byte length for ${i} format.`)}function BC(a){switch(a){case Ki:case sE:return{byteLength:1,components:1};case fu:case oE:case vr:return{byteLength:2,components:1};case iv:case av:return{byteLength:2,components:4};case Va:case nv:case Pa:return{byteLength:4,components:1};case lE:case cE:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${a}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:ev}}));typeof window<"u"&&(window.__THREE__?de("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=ev);/**
 * @license
 * Copyright 2010-2026 Three.js Authors
 * SPDX-License-Identifier: MIT
 */function AE(){let a=null,t=!1,i=null,s=null;function l(c,d){i(c,d),s=a.requestAnimationFrame(l)}return{start:function(){t!==!0&&i!==null&&a!==null&&(s=a.requestAnimationFrame(l),t=!0)},stop:function(){a!==null&&a.cancelAnimationFrame(s),t=!1},setAnimationLoop:function(c){i=c},setContext:function(c){a=c}}}function HC(a){const t=new WeakMap;function i(h,p){const m=h.array,_=h.usage,g=m.byteLength,v=a.createBuffer();a.bindBuffer(p,v),a.bufferData(p,m,_),h.onUploadCallback();let y;if(m instanceof Float32Array)y=a.FLOAT;else if(typeof Float16Array<"u"&&m instanceof Float16Array)y=a.HALF_FLOAT;else if(m instanceof Uint16Array)h.isFloat16BufferAttribute?y=a.HALF_FLOAT:y=a.UNSIGNED_SHORT;else if(m instanceof Int16Array)y=a.SHORT;else if(m instanceof Uint32Array)y=a.UNSIGNED_INT;else if(m instanceof Int32Array)y=a.INT;else if(m instanceof Int8Array)y=a.BYTE;else if(m instanceof Uint8Array)y=a.UNSIGNED_BYTE;else if(m instanceof Uint8ClampedArray)y=a.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+m);return{buffer:v,type:y,bytesPerElement:m.BYTES_PER_ELEMENT,version:h.version,size:g}}function s(h,p,m){const _=p.array,g=p.updateRanges;if(a.bindBuffer(m,h),g.length===0)a.bufferSubData(m,0,_);else{g.sort((y,b)=>y.start-b.start);let v=0;for(let y=1;y<g.length;y++){const b=g[v],C=g[y];C.start<=b.start+b.count+1?b.count=Math.max(b.count,C.start+C.count-b.start):(++v,g[v]=C)}g.length=v+1;for(let y=0,b=g.length;y<b;y++){const C=g[y];a.bufferSubData(m,C.start*_.BYTES_PER_ELEMENT,_,C.start,C.count)}p.clearUpdateRanges()}p.onUploadCallback()}function l(h){return h.isInterleavedBufferAttribute&&(h=h.data),t.get(h)}function c(h){h.isInterleavedBufferAttribute&&(h=h.data);const p=t.get(h);p&&(a.deleteBuffer(p.buffer),t.delete(h))}function d(h,p){if(h.isInterleavedBufferAttribute&&(h=h.data),h.isGLBufferAttribute){const _=t.get(h);(!_||_.version<h.version)&&t.set(h,{buffer:h.buffer,type:h.type,bytesPerElement:h.elementSize,version:h.version});return}const m=t.get(h);if(m===void 0)t.set(h,i(h,p));else if(m.version<h.version){if(m.size!==h.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");s(m.buffer,h,p),m.version=h.version}}return{get:l,remove:c,update:d}}var GC=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,VC=`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,kC=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,XC=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,qC=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,WC=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,jC=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,YC=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,ZC=`#ifdef USE_BATCHING
	#if ! defined( GL_ANGLE_multi_draw )
	#define gl_DrawID _gl_DrawID
	uniform int _gl_DrawID;
	#endif
	uniform highp sampler2D batchingTexture;
	uniform highp usampler2D batchingIdTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
	float getIndirectIndex( const in int i ) {
		int size = textureSize( batchingIdTexture, 0 ).x;
		int x = i % size;
		int y = i / size;
		return float( texelFetch( batchingIdTexture, ivec2( x, y ), 0 ).r );
	}
#endif
#ifdef USE_BATCHING_COLOR
	uniform sampler2D batchingColorTexture;
	vec4 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 );
	}
#endif`,QC=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,KC=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,$C=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,JC=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,tD=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,eD=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,nD=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#ifdef ALPHA_TO_COVERAGE
		float distanceToPlane, distanceGradient;
		float clipOpacity = 1.0;
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
			distanceGradient = fwidth( distanceToPlane ) / 2.0;
			clipOpacity *= smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			if ( clipOpacity == 0.0 ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			float unionClipOpacity = 1.0;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
				distanceGradient = fwidth( distanceToPlane ) / 2.0;
				unionClipOpacity *= 1.0 - smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			}
			#pragma unroll_loop_end
			clipOpacity *= 1.0 - unionClipOpacity;
		#endif
		diffuseColor.a *= clipOpacity;
		if ( diffuseColor.a == 0.0 ) discard;
	#else
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
	#endif
#endif`,iD=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,aD=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,rD=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,sD=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#endif`,oD=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#endif`,lD=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec4 vColor;
#endif`,cD=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec4( 1.0 );
#endif
#ifdef USE_COLOR_ALPHA
	vColor *= color;
#elif defined( USE_COLOR )
	vColor.rgb *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.rgb *= instanceColor.rgb;
#endif
#ifdef USE_BATCHING_COLOR
	vColor *= getBatchingColor( getIndirectIndex( gl_DrawID ) );
#endif`,uD=`#define PI 3.141592653589793
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
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
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
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,fD=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
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
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
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
#endif`,dD=`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,hD=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,pD=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,mD=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,gD=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,vD="gl_FragColor = linearToOutputTexel( gl_FragColor );",_D=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,xD=`#ifdef USE_ENVMAP
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
		vec4 envColor = textureCube( envMap, envMapRotation * reflectVec );
		#ifdef ENVMAP_BLENDING_MULTIPLY
			outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
		#elif defined( ENVMAP_BLENDING_MIX )
			outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
		#elif defined( ENVMAP_BLENDING_ADD )
			outgoingLight += envColor.xyz * specularStrength * reflectivity;
		#endif
	#endif
#endif`,yD=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
#endif`,SD=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,MD=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,bD=`#ifdef USE_ENVMAP
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
#endif`,ED=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,TD=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,AD=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,wD=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,RD=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,CD=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,DD=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,ND=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,UD=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
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
	float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
	if ( cutoffDistance > 0.0 ) {
		distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
	}
	return distanceFalloff;
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
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
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
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
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
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
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
#endif
#include <lightprobes_pars_fragment>`,LD=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, pow4( roughness ) ) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
#endif`,OD=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,PD=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,zD=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,ID=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,FD=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.diffuseContribution = diffuseColor.rgb * ( 1.0 - metalnessFactor );
material.metalness = metalnessFactor;
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor;
	material.specularColorBlended = mix( material.specularColor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = vec3( 0.04 );
	material.specularColorBlended = mix( material.specularColor, diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_DISPERSION
	material.dispersion = dispersion;
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.0001, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,BD=`uniform sampler2D dfgLUT;
struct PhysicalMaterial {
	vec3 diffuseColor;
	vec3 diffuseContribution;
	vec3 specularColor;
	vec3 specularColorBlended;
	float roughness;
	float metalness;
	float specularF90;
	float dispersion;
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0;
		vec3 iridescenceFresnelDielectric;
		vec3 iridescenceFresnelMetallic;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
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
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		return 0.5 / max( gv + gl, EPSILON );
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
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
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColorBlended;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
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
	mat3 mat = mInv * transpose( mat3( T1, T2, N ) );
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
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float rInv = 1.0 / ( roughness + 0.1 );
	float a = -1.9362 + 1.0678 * roughness + 0.4573 * r2 - 0.8469 * rInv;
	float b = -0.6014 + 0.5538 * roughness - 0.4670 * r2 - 0.1255 * rInv;
	float DG = exp( a * dotNV + b );
	return saturate( DG );
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 fab = texture2D( dfgLUT, vec2( roughness, dotNV ) ).rg;
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 fab = texture2D( dfgLUT, vec2( roughness, dotNV ) ).rg;
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
vec3 BRDF_GGX_Multiscatter( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 singleScatter = BRDF_GGX( lightDir, viewDir, normal, material );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 dfgV = texture2D( dfgLUT, vec2( material.roughness, dotNV ) ).rg;
	vec2 dfgL = texture2D( dfgLUT, vec2( material.roughness, dotNL ) ).rg;
	vec3 FssEss_V = material.specularColorBlended * dfgV.x + material.specularF90 * dfgV.y;
	vec3 FssEss_L = material.specularColorBlended * dfgL.x + material.specularF90 * dfgL.y;
	float Ess_V = dfgV.x + dfgV.y;
	float Ess_L = dfgL.x + dfgL.y;
	float Ems_V = 1.0 - Ess_V;
	float Ems_L = 1.0 - Ess_L;
	vec3 Favg = material.specularColorBlended + ( 1.0 - material.specularColorBlended ) * 0.047619;
	vec3 Fms = FssEss_V * FssEss_L * Favg / ( 1.0 - Ems_V * Ems_L * Favg + EPSILON );
	float compensationFactor = Ems_V * Ems_L;
	vec3 multiScatter = Fms * compensationFactor;
	return singleScatter + multiScatter;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
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
		vec3 fresnel = ( material.specularColorBlended * t2.x + ( material.specularF90 - material.specularColorBlended ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseContribution * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
		#ifdef USE_CLEARCOAT
			vec3 Ncc = geometryClearcoatNormal;
			vec2 uvClearcoat = LTC_Uv( Ncc, viewDir, material.clearcoatRoughness );
			vec4 t1Clearcoat = texture2D( ltc_1, uvClearcoat );
			vec4 t2Clearcoat = texture2D( ltc_2, uvClearcoat );
			mat3 mInvClearcoat = mat3(
				vec3( t1Clearcoat.x, 0, t1Clearcoat.y ),
				vec3(             0, 1,             0 ),
				vec3( t1Clearcoat.z, 0, t1Clearcoat.w )
			);
			vec3 fresnelClearcoat = material.clearcoatF0 * t2Clearcoat.x + ( material.clearcoatF90 - material.clearcoatF0 ) * t2Clearcoat.y;
			clearcoatSpecularDirect += lightColor * fresnelClearcoat * LTC_Evaluate( Ncc, viewDir, position, mInvClearcoat, rectCoords );
		#endif
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
 
 		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
 
 		float sheenAlbedoV = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
 		float sheenAlbedoL = IBLSheenBRDF( geometryNormal, directLight.direction, material.sheenRoughness );
 
 		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * max( sheenAlbedoV, sheenAlbedoL );
 
 		irradiance *= sheenEnergyComp;
 
 	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX_Multiscatter( directLight.direction, geometryViewDir, geometryNormal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseContribution );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 diffuse = irradiance * BRDF_Lambert( material.diffuseContribution );
	#ifdef USE_SHEEN
		float sheenAlbedo = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * sheenAlbedo;
		diffuse *= sheenEnergyComp;
	#endif
	reflectedLight.indirectDiffuse += diffuse;
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness ) * RECIPROCAL_PI;
 	#endif
	vec3 singleScatteringDielectric = vec3( 0.0 );
	vec3 multiScatteringDielectric = vec3( 0.0 );
	vec3 singleScatteringMetallic = vec3( 0.0 );
	vec3 multiScatteringMetallic = vec3( 0.0 );
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnelDielectric, material.roughness, singleScatteringDielectric, multiScatteringDielectric );
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.diffuseColor, material.specularF90, material.iridescence, material.iridescenceFresnelMetallic, material.roughness, singleScatteringMetallic, multiScatteringMetallic );
	#else
		computeMultiscattering( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.roughness, singleScatteringDielectric, multiScatteringDielectric );
		computeMultiscattering( geometryNormal, geometryViewDir, material.diffuseColor, material.specularF90, material.roughness, singleScatteringMetallic, multiScatteringMetallic );
	#endif
	vec3 singleScattering = mix( singleScatteringDielectric, singleScatteringMetallic, material.metalness );
	vec3 multiScattering = mix( multiScatteringDielectric, multiScatteringMetallic, material.metalness );
	vec3 totalScatteringDielectric = singleScatteringDielectric + multiScatteringDielectric;
	vec3 diffuse = material.diffuseContribution * ( 1.0 - totalScatteringDielectric );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	vec3 indirectSpecular = radiance * singleScattering;
	indirectSpecular += multiScattering * cosineWeightedIrradiance;
	vec3 indirectDiffuse = diffuse * cosineWeightedIrradiance;
	#ifdef USE_SHEEN
		float sheenAlbedo = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * sheenAlbedo;
		indirectSpecular *= sheenEnergyComp;
		indirectDiffuse *= sheenEnergyComp;
	#endif
	reflectedLight.indirectSpecular += indirectSpecular;
	reflectedLight.indirectDiffuse += indirectDiffuse;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,HD=`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		material.iridescenceFresnelDielectric = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceFresnelMetallic = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.diffuseColor );
		material.iridescenceFresnel = mix( material.iridescenceFresnelDielectric, material.iridescenceFresnelMetallic, material.metalness );
		material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );
	}
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
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS ) && ( defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_BASIC ) )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowIntensity, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowIntensity, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
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
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowIntensity, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
	#ifdef USE_LIGHT_PROBES_GRID
		vec3 probeWorldPos = ( ( vec4( geometryPosition, 1.0 ) - viewMatrix[ 3 ] ) * viewMatrix ).xyz;
		vec3 probeWorldNormal = inverseTransformDirection( geometryNormal, viewMatrix );
		irradiance += getLightProbeGridIrradiance( probeWorldPos, probeWorldNormal );
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,GD=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( ENVMAP_TYPE_CUBE_UV )
		#if defined( STANDARD ) || defined( LAMBERT ) || defined( PHONG )
			iblIrradiance += getIBLIrradiance( geometryNormal );
		#endif
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		radiance += getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		radiance += getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,VD=`#if defined( RE_IndirectDiffuse )
	#if defined( LAMBERT ) || defined( PHONG )
		irradiance += iblIrradiance;
	#endif
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,kD=`#ifdef USE_LIGHT_PROBES_GRID
uniform highp sampler3D probesSH;
uniform vec3 probesMin;
uniform vec3 probesMax;
uniform vec3 probesResolution;
vec3 getLightProbeGridIrradiance( vec3 worldPos, vec3 worldNormal ) {
	vec3 res = probesResolution;
	vec3 gridRange = probesMax - probesMin;
	vec3 resMinusOne = res - 1.0;
	vec3 probeSpacing = gridRange / resMinusOne;
	vec3 samplePos = worldPos + worldNormal * probeSpacing * 0.5;
	vec3 uvw = clamp( ( samplePos - probesMin ) / gridRange, 0.0, 1.0 );
	uvw = uvw * resMinusOne / res + 0.5 / res;
	float nz          = res.z;
	float paddedSlices = nz + 2.0;
	float atlasDepth  = 7.0 * paddedSlices;
	float uvZBase     = uvw.z * nz + 1.0;
	vec4 s0 = texture( probesSH, vec3( uvw.xy, ( uvZBase                       ) / atlasDepth ) );
	vec4 s1 = texture( probesSH, vec3( uvw.xy, ( uvZBase +       paddedSlices   ) / atlasDepth ) );
	vec4 s2 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 2.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s3 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 3.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s4 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 4.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s5 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 5.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s6 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 6.0 * paddedSlices   ) / atlasDepth ) );
	vec3 c0 = s0.xyz;
	vec3 c1 = vec3( s0.w, s1.xy );
	vec3 c2 = vec3( s1.zw, s2.x );
	vec3 c3 = s2.yzw;
	vec3 c4 = s3.xyz;
	vec3 c5 = vec3( s3.w, s4.xy );
	vec3 c6 = vec3( s4.zw, s5.x );
	vec3 c7 = s5.yzw;
	vec3 c8 = s6.xyz;
	float x = worldNormal.x, y = worldNormal.y, z = worldNormal.z;
	vec3 result = c0 * 0.886227;
	result += c1 * 2.0 * 0.511664 * y;
	result += c2 * 2.0 * 0.511664 * z;
	result += c3 * 2.0 * 0.511664 * x;
	result += c4 * 2.0 * 0.429043 * x * y;
	result += c5 * 2.0 * 0.429043 * y * z;
	result += c6 * ( 0.743125 * z * z - 0.247708 );
	result += c7 * 2.0 * 0.429043 * x * z;
	result += c8 * 0.429043 * ( x * x - y * y );
	return max( result, vec3( 0.0 ) );
}
#endif`,XD=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,qD=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,WD=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,jD=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,YD=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,ZD=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,QD=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,KD=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,$D=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,JD=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,tN=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,eN=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,nN=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,iN=`#ifdef USE_MORPHTARGETS
	#ifndef USE_INSTANCING_MORPH
		uniform float morphTargetBaseInfluence;
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	#endif
	uniform sampler2DArray morphTargetsTexture;
	uniform ivec2 morphTargetsTextureSize;
	vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
		int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
		int y = texelIndex / morphTargetsTextureSize.x;
		int x = texelIndex - y * morphTargetsTextureSize.x;
		ivec3 morphUV = ivec3( x, y, morphTargetIndex );
		return texelFetch( morphTargetsTexture, morphUV, 0 );
	}
#endif`,aN=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,rN=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,sN=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#if defined( USE_PACKED_NORMALMAP )
		mapN = vec3( mapN.xy, sqrt( saturate( 1.0 - dot( mapN.xy, mapN.xy ) ) ) );
	#endif
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,oN=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,lN=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,cN=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,uN=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,fN=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,dN=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,hN=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,pN=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,mN=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,gN=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;const float ShiftRight8 = 1. / 256.;
const float Inv255 = 1. / 255.;
const vec4 PackFactors = vec4( 1.0, 256.0, 256.0 * 256.0, 256.0 * 256.0 * 256.0 );
const vec2 UnpackFactors2 = vec2( UnpackDownscale, 1.0 / PackFactors.g );
const vec3 UnpackFactors3 = vec3( UnpackDownscale / PackFactors.rg, 1.0 / PackFactors.b );
const vec4 UnpackFactors4 = vec4( UnpackDownscale / PackFactors.rgb, 1.0 / PackFactors.a );
vec4 packDepthToRGBA( const in float v ) {
	if( v <= 0.0 )
		return vec4( 0., 0., 0., 0. );
	if( v >= 1.0 )
		return vec4( 1., 1., 1., 1. );
	float vuf;
	float af = modf( v * PackFactors.a, vuf );
	float bf = modf( vuf * ShiftRight8, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec4( vuf * Inv255, gf * PackUpscale, bf * PackUpscale, af );
}
vec3 packDepthToRGB( const in float v ) {
	if( v <= 0.0 )
		return vec3( 0., 0., 0. );
	if( v >= 1.0 )
		return vec3( 1., 1., 1. );
	float vuf;
	float bf = modf( v * PackFactors.b, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec3( vuf * Inv255, gf * PackUpscale, bf );
}
vec2 packDepthToRG( const in float v ) {
	if( v <= 0.0 )
		return vec2( 0., 0. );
	if( v >= 1.0 )
		return vec2( 1., 1. );
	float vuf;
	float gf = modf( v * 256., vuf );
	return vec2( vuf * Inv255, gf );
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors4 );
}
float unpackRGBToDepth( const in vec3 v ) {
	return dot( v, UnpackFactors3 );
}
float unpackRGToDepth( const in vec2 v ) {
	return v.r * UnpackFactors2.r + v.g * UnpackFactors2.g;
}
vec4 pack2HalfToRGBA( const in vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( const in vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	#ifdef USE_REVERSED_DEPTH_BUFFER
	
		return depth * ( far - near ) - far;
	#else
		return depth * ( near - far ) - near;
	#endif
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	
	#ifdef USE_REVERSED_DEPTH_BUFFER
		return ( near * far ) / ( ( near - far ) * depth - near );
	#else
		return ( near * far ) / ( ( far - near ) * depth - far );
	#endif
}`,vN=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,_N=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,xN=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,yN=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,SN=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,MN=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,bN=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		#else
			uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		#endif
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		#else
			uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		#endif
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform samplerCubeShadow pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		#elif defined( SHADOWMAP_TYPE_BASIC )
			uniform samplerCube pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		#endif
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	#if defined( SHADOWMAP_TYPE_PCF )
		float interleavedGradientNoise( vec2 position ) {
			return fract( 52.9829189 * fract( dot( position, vec2( 0.06711056, 0.00583715 ) ) ) );
		}
		vec2 vogelDiskSample( int sampleIndex, int samplesCount, float phi ) {
			const float goldenAngle = 2.399963229728653;
			float r = sqrt( ( float( sampleIndex ) + 0.5 ) / float( samplesCount ) );
			float theta = float( sampleIndex ) * goldenAngle + phi;
			return vec2( cos( theta ), sin( theta ) ) * r;
		}
	#endif
	#if defined( SHADOWMAP_TYPE_PCF )
		float getShadow( sampler2DShadow shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			shadowCoord.z += shadowBias;
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
				float radius = shadowRadius * texelSize.x;
				float phi = interleavedGradientNoise( gl_FragCoord.xy ) * PI2;
				shadow = (
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 0, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 1, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 2, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 3, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 4, 5, phi ) * radius, shadowCoord.z ) )
				) * 0.2;
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#elif defined( SHADOWMAP_TYPE_VSM )
		float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadowCoord.z -= shadowBias;
			#else
				shadowCoord.z += shadowBias;
			#endif
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				vec2 distribution = texture2D( shadowMap, shadowCoord.xy ).rg;
				float mean = distribution.x;
				float variance = distribution.y * distribution.y;
				#ifdef USE_REVERSED_DEPTH_BUFFER
					float hard_shadow = step( mean, shadowCoord.z );
				#else
					float hard_shadow = step( shadowCoord.z, mean );
				#endif
				
				if ( hard_shadow == 1.0 ) {
					shadow = 1.0;
				} else {
					variance = max( variance, 0.0000001 );
					float d = shadowCoord.z - mean;
					float p_max = variance / ( variance + d * d );
					p_max = clamp( ( p_max - 0.3 ) / 0.65, 0.0, 1.0 );
					shadow = max( hard_shadow, p_max );
				}
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#else
		float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadowCoord.z -= shadowBias;
			#else
				shadowCoord.z += shadowBias;
			#endif
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				float depth = texture2D( shadowMap, shadowCoord.xy ).r;
				#ifdef USE_REVERSED_DEPTH_BUFFER
					shadow = step( depth, shadowCoord.z );
				#else
					shadow = step( shadowCoord.z, depth );
				#endif
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	#if defined( SHADOWMAP_TYPE_PCF )
	float getPointShadow( samplerCubeShadow shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		vec3 bd3D = normalize( lightToPosition );
		vec3 absVec = abs( lightToPosition );
		float viewSpaceZ = max( max( absVec.x, absVec.y ), absVec.z );
		if ( viewSpaceZ - shadowCameraFar <= 0.0 && viewSpaceZ - shadowCameraNear >= 0.0 ) {
			#ifdef USE_REVERSED_DEPTH_BUFFER
				float dp = ( shadowCameraNear * ( shadowCameraFar - viewSpaceZ ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
				dp -= shadowBias;
			#else
				float dp = ( shadowCameraFar * ( viewSpaceZ - shadowCameraNear ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
				dp += shadowBias;
			#endif
			float texelSize = shadowRadius / shadowMapSize.x;
			vec3 absDir = abs( bd3D );
			vec3 tangent = absDir.x > absDir.z ? vec3( 0.0, 1.0, 0.0 ) : vec3( 1.0, 0.0, 0.0 );
			tangent = normalize( cross( bd3D, tangent ) );
			vec3 bitangent = cross( bd3D, tangent );
			float phi = interleavedGradientNoise( gl_FragCoord.xy ) * PI2;
			vec2 sample0 = vogelDiskSample( 0, 5, phi );
			vec2 sample1 = vogelDiskSample( 1, 5, phi );
			vec2 sample2 = vogelDiskSample( 2, 5, phi );
			vec2 sample3 = vogelDiskSample( 3, 5, phi );
			vec2 sample4 = vogelDiskSample( 4, 5, phi );
			shadow = (
				texture( shadowMap, vec4( bd3D + ( tangent * sample0.x + bitangent * sample0.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample1.x + bitangent * sample1.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample2.x + bitangent * sample2.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample3.x + bitangent * sample3.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample4.x + bitangent * sample4.y ) * texelSize, dp ) )
			) * 0.2;
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	#elif defined( SHADOWMAP_TYPE_BASIC )
	float getPointShadow( samplerCube shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		vec3 absVec = abs( lightToPosition );
		float viewSpaceZ = max( max( absVec.x, absVec.y ), absVec.z );
		if ( viewSpaceZ - shadowCameraFar <= 0.0 && viewSpaceZ - shadowCameraNear >= 0.0 ) {
			float dp = ( shadowCameraFar * ( viewSpaceZ - shadowCameraNear ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			float depth = textureCube( shadowMap, bd3D ).r;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				depth = 1.0 - depth;
			#endif
			shadow = step( dp, depth );
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	#endif
	#endif
#endif`,EN=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowIntensity;
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
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,TN=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	#ifdef HAS_NORMAL
		vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
	#else
		vec3 shadowWorldNormal = vec3( 0.0 );
	#endif
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
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
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,AN=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowIntensity, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowIntensity, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0 && ( defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_BASIC ) )
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowIntensity, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,wN=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,RN=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,CN=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,DN=`#ifdef USE_SKINNING
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
#endif`,NN=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,UN=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,LN=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,ON=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 CineonToneMapping( vec3 color ) {
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
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color *= toneMappingExposure;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	color = clamp( color, 0.0, 1.0 );
	return color;
}
vec3 NeutralToneMapping( vec3 color ) {
	const float StartCompression = 0.8 - 0.04;
	const float Desaturation = 0.15;
	color *= toneMappingExposure;
	float x = min( color.r, min( color.g, color.b ) );
	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;
	color -= offset;
	float peak = max( color.r, max( color.g, color.b ) );
	if ( peak < StartCompression ) return color;
	float d = 1. - StartCompression;
	float newPeak = 1. - d * d / ( peak + d - StartCompression );
	color *= newPeak / peak;
	float g = 1. - 1. / ( Desaturation * ( peak - newPeak ) + 1. );
	return mix( color, vec3( newPeak ), g );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,PN=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseContribution, material.specularColorBlended, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,zN=`#ifdef USE_TRANSMISSION
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
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float dispersion, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec4 transmittedLight;
		vec3 transmittance;
		#ifdef USE_DISPERSION
			float halfSpread = ( ior - 1.0 ) * 0.025 * dispersion;
			vec3 iors = vec3( ior - halfSpread, ior, ior + halfSpread );
			for ( int i = 0; i < 3; i ++ ) {
				vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, iors[ i ], modelMatrix );
				vec3 refractedRayExit = position + transmissionRay;
				vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
				vec2 refractionCoords = ndcPos.xy / ndcPos.w;
				refractionCoords += 1.0;
				refractionCoords /= 2.0;
				vec4 transmissionSample = getTransmissionSample( refractionCoords, roughness, iors[ i ] );
				transmittedLight[ i ] = transmissionSample[ i ];
				transmittedLight.a += transmissionSample.a;
				transmittance[ i ] = diffuseColor[ i ] * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance )[ i ];
			}
			transmittedLight.a /= 3.0;
		#else
			vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
			vec3 refractedRayExit = position + transmissionRay;
			vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
			vec2 refractionCoords = ndcPos.xy / ndcPos.w;
			refractionCoords += 1.0;
			refractionCoords /= 2.0;
			transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
			transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		#endif
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,IN=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,FN=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,BN=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,HN=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const GN=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,VN=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,kN=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,XN=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, backgroundRotation * vWorldDirection );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,qN=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,WN=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,jN=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
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
}`,YN=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	#ifdef USE_REVERSED_DEPTH_BUFFER
		float fragCoordZ = vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ];
	#else
		float fragCoordZ = 0.5 * vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ] + 0.5;
	#endif
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,ZN=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
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
}`,QN=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = vec4( dist, 0.0, 0.0, 1.0 );
}`,KN=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,$N=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,JN=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,tU=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,eU=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
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
}`,nU=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,iU=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
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
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
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
}`,aU=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,rU=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
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
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
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
}`,sU=`#define MATCAP
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
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,oU=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
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
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,lU=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( normalize( normal ) * 0.5 + 0.5, diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,cU=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
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
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
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
}`,uU=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <envmap_physical_pars_fragment>
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
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
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
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,fU=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
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
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
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
}`,dU=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_DISPERSION
	uniform float dispersion;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
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
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
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
 
		outgoingLight = outgoingLight + sheenSpecularDirect + sheenSpecularIndirect;
 
 	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,hU=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
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
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
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
}`,pU=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
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
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,mU=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
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
}`,gU=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,vU=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,_U=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,xU=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix[ 3 ];
	vec2 scale = vec2( length( modelMatrix[ 0 ].xyz ), length( modelMatrix[ 1 ].xyz ) );
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
}`,yU=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,Te={alphahash_fragment:GC,alphahash_pars_fragment:VC,alphamap_fragment:kC,alphamap_pars_fragment:XC,alphatest_fragment:qC,alphatest_pars_fragment:WC,aomap_fragment:jC,aomap_pars_fragment:YC,batching_pars_vertex:ZC,batching_vertex:QC,begin_vertex:KC,beginnormal_vertex:$C,bsdfs:JC,iridescence_fragment:tD,bumpmap_pars_fragment:eD,clipping_planes_fragment:nD,clipping_planes_pars_fragment:iD,clipping_planes_pars_vertex:aD,clipping_planes_vertex:rD,color_fragment:sD,color_pars_fragment:oD,color_pars_vertex:lD,color_vertex:cD,common:uD,cube_uv_reflection_fragment:fD,defaultnormal_vertex:dD,displacementmap_pars_vertex:hD,displacementmap_vertex:pD,emissivemap_fragment:mD,emissivemap_pars_fragment:gD,colorspace_fragment:vD,colorspace_pars_fragment:_D,envmap_fragment:xD,envmap_common_pars_fragment:yD,envmap_pars_fragment:SD,envmap_pars_vertex:MD,envmap_physical_pars_fragment:LD,envmap_vertex:bD,fog_vertex:ED,fog_pars_vertex:TD,fog_fragment:AD,fog_pars_fragment:wD,gradientmap_pars_fragment:RD,lightmap_pars_fragment:CD,lights_lambert_fragment:DD,lights_lambert_pars_fragment:ND,lights_pars_begin:UD,lights_toon_fragment:OD,lights_toon_pars_fragment:PD,lights_phong_fragment:zD,lights_phong_pars_fragment:ID,lights_physical_fragment:FD,lights_physical_pars_fragment:BD,lights_fragment_begin:HD,lights_fragment_maps:GD,lights_fragment_end:VD,lightprobes_pars_fragment:kD,logdepthbuf_fragment:XD,logdepthbuf_pars_fragment:qD,logdepthbuf_pars_vertex:WD,logdepthbuf_vertex:jD,map_fragment:YD,map_pars_fragment:ZD,map_particle_fragment:QD,map_particle_pars_fragment:KD,metalnessmap_fragment:$D,metalnessmap_pars_fragment:JD,morphinstance_vertex:tN,morphcolor_vertex:eN,morphnormal_vertex:nN,morphtarget_pars_vertex:iN,morphtarget_vertex:aN,normal_fragment_begin:rN,normal_fragment_maps:sN,normal_pars_fragment:oN,normal_pars_vertex:lN,normal_vertex:cN,normalmap_pars_fragment:uN,clearcoat_normal_fragment_begin:fN,clearcoat_normal_fragment_maps:dN,clearcoat_pars_fragment:hN,iridescence_pars_fragment:pN,opaque_fragment:mN,packing:gN,premultiplied_alpha_fragment:vN,project_vertex:_N,dithering_fragment:xN,dithering_pars_fragment:yN,roughnessmap_fragment:SN,roughnessmap_pars_fragment:MN,shadowmap_pars_fragment:bN,shadowmap_pars_vertex:EN,shadowmap_vertex:TN,shadowmask_pars_fragment:AN,skinbase_vertex:wN,skinning_pars_vertex:RN,skinning_vertex:CN,skinnormal_vertex:DN,specularmap_fragment:NN,specularmap_pars_fragment:UN,tonemapping_fragment:LN,tonemapping_pars_fragment:ON,transmission_fragment:PN,transmission_pars_fragment:zN,uv_pars_fragment:IN,uv_pars_vertex:FN,uv_vertex:BN,worldpos_vertex:HN,background_vert:GN,background_frag:VN,backgroundCube_vert:kN,backgroundCube_frag:XN,cube_vert:qN,cube_frag:WN,depth_vert:jN,depth_frag:YN,distance_vert:ZN,distance_frag:QN,equirect_vert:KN,equirect_frag:$N,linedashed_vert:JN,linedashed_frag:tU,meshbasic_vert:eU,meshbasic_frag:nU,meshlambert_vert:iU,meshlambert_frag:aU,meshmatcap_vert:rU,meshmatcap_frag:sU,meshnormal_vert:oU,meshnormal_frag:lU,meshphong_vert:cU,meshphong_frag:uU,meshphysical_vert:fU,meshphysical_frag:dU,meshtoon_vert:hU,meshtoon_frag:pU,points_vert:mU,points_frag:gU,shadow_vert:vU,shadow_frag:_U,sprite_vert:xU,sprite_frag:yU},Gt={common:{diffuse:{value:new an(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new _e},alphaMap:{value:null},alphaMapTransform:{value:new _e},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new _e}},envmap:{envMap:{value:null},envMapRotation:{value:new _e},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new _e}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new _e}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new _e},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new _e},normalScale:{value:new Je(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new _e},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new _e}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new _e}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new _e}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new an(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null},probesSH:{value:null},probesMin:{value:new ut},probesMax:{value:new ut},probesResolution:{value:new ut}},points:{diffuse:{value:new an(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new _e},alphaTest:{value:0},uvTransform:{value:new _e}},sprite:{diffuse:{value:new an(16777215)},opacity:{value:1},center:{value:new Je(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new _e},alphaMap:{value:null},alphaMapTransform:{value:new _e},alphaTest:{value:0}}},Ua={basic:{uniforms:oi([Gt.common,Gt.specularmap,Gt.envmap,Gt.aomap,Gt.lightmap,Gt.fog]),vertexShader:Te.meshbasic_vert,fragmentShader:Te.meshbasic_frag},lambert:{uniforms:oi([Gt.common,Gt.specularmap,Gt.envmap,Gt.aomap,Gt.lightmap,Gt.emissivemap,Gt.bumpmap,Gt.normalmap,Gt.displacementmap,Gt.fog,Gt.lights,{emissive:{value:new an(0)},envMapIntensity:{value:1}}]),vertexShader:Te.meshlambert_vert,fragmentShader:Te.meshlambert_frag},phong:{uniforms:oi([Gt.common,Gt.specularmap,Gt.envmap,Gt.aomap,Gt.lightmap,Gt.emissivemap,Gt.bumpmap,Gt.normalmap,Gt.displacementmap,Gt.fog,Gt.lights,{emissive:{value:new an(0)},specular:{value:new an(1118481)},shininess:{value:30},envMapIntensity:{value:1}}]),vertexShader:Te.meshphong_vert,fragmentShader:Te.meshphong_frag},standard:{uniforms:oi([Gt.common,Gt.envmap,Gt.aomap,Gt.lightmap,Gt.emissivemap,Gt.bumpmap,Gt.normalmap,Gt.displacementmap,Gt.roughnessmap,Gt.metalnessmap,Gt.fog,Gt.lights,{emissive:{value:new an(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Te.meshphysical_vert,fragmentShader:Te.meshphysical_frag},toon:{uniforms:oi([Gt.common,Gt.aomap,Gt.lightmap,Gt.emissivemap,Gt.bumpmap,Gt.normalmap,Gt.displacementmap,Gt.gradientmap,Gt.fog,Gt.lights,{emissive:{value:new an(0)}}]),vertexShader:Te.meshtoon_vert,fragmentShader:Te.meshtoon_frag},matcap:{uniforms:oi([Gt.common,Gt.bumpmap,Gt.normalmap,Gt.displacementmap,Gt.fog,{matcap:{value:null}}]),vertexShader:Te.meshmatcap_vert,fragmentShader:Te.meshmatcap_frag},points:{uniforms:oi([Gt.points,Gt.fog]),vertexShader:Te.points_vert,fragmentShader:Te.points_frag},dashed:{uniforms:oi([Gt.common,Gt.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Te.linedashed_vert,fragmentShader:Te.linedashed_frag},depth:{uniforms:oi([Gt.common,Gt.displacementmap]),vertexShader:Te.depth_vert,fragmentShader:Te.depth_frag},normal:{uniforms:oi([Gt.common,Gt.bumpmap,Gt.normalmap,Gt.displacementmap,{opacity:{value:1}}]),vertexShader:Te.meshnormal_vert,fragmentShader:Te.meshnormal_frag},sprite:{uniforms:oi([Gt.sprite,Gt.fog]),vertexShader:Te.sprite_vert,fragmentShader:Te.sprite_frag},background:{uniforms:{uvTransform:{value:new _e},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Te.background_vert,fragmentShader:Te.background_frag},backgroundCube:{uniforms:{envMap:{value:null},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new _e}},vertexShader:Te.backgroundCube_vert,fragmentShader:Te.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Te.cube_vert,fragmentShader:Te.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Te.equirect_vert,fragmentShader:Te.equirect_frag},distance:{uniforms:oi([Gt.common,Gt.displacementmap,{referencePosition:{value:new ut},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Te.distance_vert,fragmentShader:Te.distance_frag},shadow:{uniforms:oi([Gt.lights,Gt.fog,{color:{value:new an(0)},opacity:{value:1}}]),vertexShader:Te.shadow_vert,fragmentShader:Te.shadow_frag}};Ua.physical={uniforms:oi([Ua.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new _e},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new _e},clearcoatNormalScale:{value:new Je(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new _e},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new _e},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new _e},sheen:{value:0},sheenColor:{value:new an(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new _e},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new _e},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new _e},transmissionSamplerSize:{value:new Je},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new _e},attenuationDistance:{value:0},attenuationColor:{value:new an(0)},specularColor:{value:new an(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new _e},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new _e},anisotropyVector:{value:new Je},anisotropyMap:{value:null},anisotropyMapTransform:{value:new _e}}]),vertexShader:Te.meshphysical_vert,fragmentShader:Te.meshphysical_frag};const ud={r:0,b:0,g:0},SU=new Nn,wE=new _e;wE.set(-1,0,0,0,1,0,0,0,1);function MU(a,t,i,s,l,c){const d=new an(0);let h=l===!0?0:1,p,m,_=null,g=0,v=null;function y(R){let P=R.isScene===!0?R.background:null;if(P&&P.isTexture){const N=R.backgroundBlurriness>0;P=t.get(P,N)}return P}function b(R){let P=!1;const N=y(R);N===null?S(d,h):N&&N.isColor&&(S(N,1),P=!0);const H=a.xr.getEnvironmentBlendMode();H==="additive"?i.buffers.color.setClear(0,0,0,1,c):H==="alpha-blend"&&i.buffers.color.setClear(0,0,0,0,c),(a.autoClear||P)&&(i.buffers.depth.setTest(!0),i.buffers.depth.setMask(!0),i.buffers.color.setMask(!0),a.clear(a.autoClearColor,a.autoClearDepth,a.autoClearStencil))}function C(R,P){const N=y(P);N&&(N.isCubeTexture||N.mapping===th)?(m===void 0&&(m=new ka(new gu(1,1,1),new Xa({name:"BackgroundCubeMaterial",uniforms:Pl(Ua.backgroundCube.uniforms),vertexShader:Ua.backgroundCube.vertexShader,fragmentShader:Ua.backgroundCube.fragmentShader,side:yi,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),m.geometry.deleteAttribute("normal"),m.geometry.deleteAttribute("uv"),m.onBeforeRender=function(H,U,L){this.matrixWorld.copyPosition(L.matrixWorld)},Object.defineProperty(m.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),s.update(m)),m.material.uniforms.envMap.value=N,m.material.uniforms.backgroundBlurriness.value=P.backgroundBlurriness,m.material.uniforms.backgroundIntensity.value=P.backgroundIntensity,m.material.uniforms.backgroundRotation.value.setFromMatrix4(SU.makeRotationFromEuler(P.backgroundRotation)).transpose(),N.isCubeTexture&&N.isRenderTargetTexture===!1&&m.material.uniforms.backgroundRotation.value.premultiply(wE),m.material.toneMapped=Oe.getTransfer(N.colorSpace)!==$e,(_!==N||g!==N.version||v!==a.toneMapping)&&(m.material.needsUpdate=!0,_=N,g=N.version,v=a.toneMapping),m.layers.enableAll(),R.unshift(m,m.geometry,m.material,0,0,null)):N&&N.isTexture&&(p===void 0&&(p=new ka(new nh(2,2),new Xa({name:"BackgroundMaterial",uniforms:Pl(Ua.background.uniforms),vertexShader:Ua.background.vertexShader,fragmentShader:Ua.background.fragmentShader,side:gr,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),p.geometry.deleteAttribute("normal"),Object.defineProperty(p.material,"map",{get:function(){return this.uniforms.t2D.value}}),s.update(p)),p.material.uniforms.t2D.value=N,p.material.uniforms.backgroundIntensity.value=P.backgroundIntensity,p.material.toneMapped=Oe.getTransfer(N.colorSpace)!==$e,N.matrixAutoUpdate===!0&&N.updateMatrix(),p.material.uniforms.uvTransform.value.copy(N.matrix),(_!==N||g!==N.version||v!==a.toneMapping)&&(p.material.needsUpdate=!0,_=N,g=N.version,v=a.toneMapping),p.layers.enableAll(),R.unshift(p,p.geometry,p.material,0,0,null))}function S(R,P){R.getRGB(ud,ME(a)),i.buffers.color.setClear(ud.r,ud.g,ud.b,P,c)}function M(){m!==void 0&&(m.geometry.dispose(),m.material.dispose(),m=void 0),p!==void 0&&(p.geometry.dispose(),p.material.dispose(),p=void 0)}return{getClearColor:function(){return d},setClearColor:function(R,P=1){d.set(R),h=P,S(d,h)},getClearAlpha:function(){return h},setClearAlpha:function(R){h=R,S(d,h)},render:b,addToRenderList:C,dispose:M}}function bU(a,t){const i=a.getParameter(a.MAX_VERTEX_ATTRIBS),s={},l=v(null);let c=l,d=!1;function h(z,Z,tt,ft,X){let B=!1;const W=g(z,ft,tt,Z);c!==W&&(c=W,m(c.object)),B=y(z,ft,tt,X),B&&b(z,ft,tt,X),X!==null&&t.update(X,a.ELEMENT_ARRAY_BUFFER),(B||d)&&(d=!1,N(z,Z,tt,ft),X!==null&&a.bindBuffer(a.ELEMENT_ARRAY_BUFFER,t.get(X).buffer))}function p(){return a.createVertexArray()}function m(z){return a.bindVertexArray(z)}function _(z){return a.deleteVertexArray(z)}function g(z,Z,tt,ft){const X=ft.wireframe===!0;let B=s[Z.id];B===void 0&&(B={},s[Z.id]=B);const W=z.isInstancedMesh===!0?z.id:0;let J=B[W];J===void 0&&(J={},B[W]=J);let dt=J[tt.id];dt===void 0&&(dt={},J[tt.id]=dt);let pt=dt[X];return pt===void 0&&(pt=v(p()),dt[X]=pt),pt}function v(z){const Z=[],tt=[],ft=[];for(let X=0;X<i;X++)Z[X]=0,tt[X]=0,ft[X]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:Z,enabledAttributes:tt,attributeDivisors:ft,object:z,attributes:{},index:null}}function y(z,Z,tt,ft){const X=c.attributes,B=Z.attributes;let W=0;const J=tt.getAttributes();for(const dt in J)if(J[dt].location>=0){const Tt=X[dt];let zt=B[dt];if(zt===void 0&&(dt==="instanceMatrix"&&z.instanceMatrix&&(zt=z.instanceMatrix),dt==="instanceColor"&&z.instanceColor&&(zt=z.instanceColor)),Tt===void 0||Tt.attribute!==zt||zt&&Tt.data!==zt.data)return!0;W++}return c.attributesNum!==W||c.index!==ft}function b(z,Z,tt,ft){const X={},B=Z.attributes;let W=0;const J=tt.getAttributes();for(const dt in J)if(J[dt].location>=0){let Tt=B[dt];Tt===void 0&&(dt==="instanceMatrix"&&z.instanceMatrix&&(Tt=z.instanceMatrix),dt==="instanceColor"&&z.instanceColor&&(Tt=z.instanceColor));const zt={};zt.attribute=Tt,Tt&&Tt.data&&(zt.data=Tt.data),X[dt]=zt,W++}c.attributes=X,c.attributesNum=W,c.index=ft}function C(){const z=c.newAttributes;for(let Z=0,tt=z.length;Z<tt;Z++)z[Z]=0}function S(z){M(z,0)}function M(z,Z){const tt=c.newAttributes,ft=c.enabledAttributes,X=c.attributeDivisors;tt[z]=1,ft[z]===0&&(a.enableVertexAttribArray(z),ft[z]=1),X[z]!==Z&&(a.vertexAttribDivisor(z,Z),X[z]=Z)}function R(){const z=c.newAttributes,Z=c.enabledAttributes;for(let tt=0,ft=Z.length;tt<ft;tt++)Z[tt]!==z[tt]&&(a.disableVertexAttribArray(tt),Z[tt]=0)}function P(z,Z,tt,ft,X,B,W){W===!0?a.vertexAttribIPointer(z,Z,tt,X,B):a.vertexAttribPointer(z,Z,tt,ft,X,B)}function N(z,Z,tt,ft){C();const X=ft.attributes,B=tt.getAttributes(),W=Z.defaultAttributeValues;for(const J in B){const dt=B[J];if(dt.location>=0){let pt=X[J];if(pt===void 0&&(J==="instanceMatrix"&&z.instanceMatrix&&(pt=z.instanceMatrix),J==="instanceColor"&&z.instanceColor&&(pt=z.instanceColor)),pt!==void 0){const Tt=pt.normalized,zt=pt.itemSize,re=t.get(pt);if(re===void 0)continue;const F=re.buffer,lt=re.type,et=re.bytesPerElement,ht=lt===a.INT||lt===a.UNSIGNED_INT||pt.gpuType===nv;if(pt.isInterleavedBufferAttribute){const yt=pt.data,Rt=yt.stride,Dt=pt.offset;if(yt.isInstancedInterleavedBuffer){for(let Mt=0;Mt<dt.locationSize;Mt++)M(dt.location+Mt,yt.meshPerAttribute);z.isInstancedMesh!==!0&&ft._maxInstanceCount===void 0&&(ft._maxInstanceCount=yt.meshPerAttribute*yt.count)}else for(let Mt=0;Mt<dt.locationSize;Mt++)S(dt.location+Mt);a.bindBuffer(a.ARRAY_BUFFER,F);for(let Mt=0;Mt<dt.locationSize;Mt++)P(dt.location+Mt,zt/dt.locationSize,lt,Tt,Rt*et,(Dt+zt/dt.locationSize*Mt)*et,ht)}else{if(pt.isInstancedBufferAttribute){for(let yt=0;yt<dt.locationSize;yt++)M(dt.location+yt,pt.meshPerAttribute);z.isInstancedMesh!==!0&&ft._maxInstanceCount===void 0&&(ft._maxInstanceCount=pt.meshPerAttribute*pt.count)}else for(let yt=0;yt<dt.locationSize;yt++)S(dt.location+yt);a.bindBuffer(a.ARRAY_BUFFER,F);for(let yt=0;yt<dt.locationSize;yt++)P(dt.location+yt,zt/dt.locationSize,lt,Tt,zt*et,zt/dt.locationSize*yt*et,ht)}}else if(W!==void 0){const Tt=W[J];if(Tt!==void 0)switch(Tt.length){case 2:a.vertexAttrib2fv(dt.location,Tt);break;case 3:a.vertexAttrib3fv(dt.location,Tt);break;case 4:a.vertexAttrib4fv(dt.location,Tt);break;default:a.vertexAttrib1fv(dt.location,Tt)}}}}R()}function H(){O();for(const z in s){const Z=s[z];for(const tt in Z){const ft=Z[tt];for(const X in ft){const B=ft[X];for(const W in B)_(B[W].object),delete B[W];delete ft[X]}}delete s[z]}}function U(z){if(s[z.id]===void 0)return;const Z=s[z.id];for(const tt in Z){const ft=Z[tt];for(const X in ft){const B=ft[X];for(const W in B)_(B[W].object),delete B[W];delete ft[X]}}delete s[z.id]}function L(z){for(const Z in s){const tt=s[Z];for(const ft in tt){const X=tt[ft];if(X[z.id]===void 0)continue;const B=X[z.id];for(const W in B)_(B[W].object),delete B[W];delete X[z.id]}}}function E(z){for(const Z in s){const tt=s[Z],ft=z.isInstancedMesh===!0?z.id:0,X=tt[ft];if(X!==void 0){for(const B in X){const W=X[B];for(const J in W)_(W[J].object),delete W[J];delete X[B]}delete tt[ft],Object.keys(tt).length===0&&delete s[Z]}}}function O(){V(),d=!0,c!==l&&(c=l,m(c.object))}function V(){l.geometry=null,l.program=null,l.wireframe=!1}return{setup:h,reset:O,resetDefaultState:V,dispose:H,releaseStatesOfGeometry:U,releaseStatesOfObject:E,releaseStatesOfProgram:L,initAttributes:C,enableAttribute:S,disableUnusedAttributes:R}}function EU(a,t,i){let s;function l(p){s=p}function c(p,m){a.drawArrays(s,p,m),i.update(m,s,1)}function d(p,m,_){_!==0&&(a.drawArraysInstanced(s,p,m,_),i.update(m,s,_))}function h(p,m,_){if(_===0)return;t.get("WEBGL_multi_draw").multiDrawArraysWEBGL(s,p,0,m,0,_);let v=0;for(let y=0;y<_;y++)v+=m[y];i.update(v,s,1)}this.setMode=l,this.render=c,this.renderInstances=d,this.renderMultiDraw=h}function TU(a,t,i,s){let l;function c(){if(l!==void 0)return l;if(t.has("EXT_texture_filter_anisotropic")===!0){const L=t.get("EXT_texture_filter_anisotropic");l=a.getParameter(L.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else l=0;return l}function d(L){return!(L!==ma&&s.convert(L)!==a.getParameter(a.IMPLEMENTATION_COLOR_READ_FORMAT))}function h(L){const E=L===vr&&(t.has("EXT_color_buffer_half_float")||t.has("EXT_color_buffer_float"));return!(L!==Ki&&s.convert(L)!==a.getParameter(a.IMPLEMENTATION_COLOR_READ_TYPE)&&L!==Pa&&!E)}function p(L){if(L==="highp"){if(a.getShaderPrecisionFormat(a.VERTEX_SHADER,a.HIGH_FLOAT).precision>0&&a.getShaderPrecisionFormat(a.FRAGMENT_SHADER,a.HIGH_FLOAT).precision>0)return"highp";L="mediump"}return L==="mediump"&&a.getShaderPrecisionFormat(a.VERTEX_SHADER,a.MEDIUM_FLOAT).precision>0&&a.getShaderPrecisionFormat(a.FRAGMENT_SHADER,a.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let m=i.precision!==void 0?i.precision:"highp";const _=p(m);_!==m&&(de("WebGLRenderer:",m,"not supported, using",_,"instead."),m=_);const g=i.logarithmicDepthBuffer===!0,v=i.reversedDepthBuffer===!0&&t.has("EXT_clip_control");i.reversedDepthBuffer===!0&&v===!1&&de("WebGLRenderer: Unable to use reversed depth buffer due to missing EXT_clip_control extension. Fallback to default depth buffer.");const y=a.getParameter(a.MAX_TEXTURE_IMAGE_UNITS),b=a.getParameter(a.MAX_VERTEX_TEXTURE_IMAGE_UNITS),C=a.getParameter(a.MAX_TEXTURE_SIZE),S=a.getParameter(a.MAX_CUBE_MAP_TEXTURE_SIZE),M=a.getParameter(a.MAX_VERTEX_ATTRIBS),R=a.getParameter(a.MAX_VERTEX_UNIFORM_VECTORS),P=a.getParameter(a.MAX_VARYING_VECTORS),N=a.getParameter(a.MAX_FRAGMENT_UNIFORM_VECTORS),H=a.getParameter(a.MAX_SAMPLES),U=a.getParameter(a.SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:c,getMaxPrecision:p,textureFormatReadable:d,textureTypeReadable:h,precision:m,logarithmicDepthBuffer:g,reversedDepthBuffer:v,maxTextures:y,maxVertexTextures:b,maxTextureSize:C,maxCubemapSize:S,maxAttributes:M,maxVertexUniforms:R,maxVaryings:P,maxFragmentUniforms:N,maxSamples:H,samples:U}}function AU(a){const t=this;let i=null,s=0,l=!1,c=!1;const d=new Xs,h=new _e,p={value:null,needsUpdate:!1};this.uniform=p,this.numPlanes=0,this.numIntersection=0,this.init=function(g,v){const y=g.length!==0||v||s!==0||l;return l=v,s=g.length,y},this.beginShadows=function(){c=!0,_(null)},this.endShadows=function(){c=!1},this.setGlobalState=function(g,v){i=_(g,v,0)},this.setState=function(g,v,y){const b=g.clippingPlanes,C=g.clipIntersection,S=g.clipShadows,M=a.get(g);if(!l||b===null||b.length===0||c&&!S)c?_(null):m();else{const R=c?0:s,P=R*4;let N=M.clippingState||null;p.value=N,N=_(b,v,P,y);for(let H=0;H!==P;++H)N[H]=i[H];M.clippingState=N,this.numIntersection=C?this.numPlanes:0,this.numPlanes+=R}};function m(){p.value!==i&&(p.value=i,p.needsUpdate=s>0),t.numPlanes=s,t.numIntersection=0}function _(g,v,y,b){const C=g!==null?g.length:0;let S=null;if(C!==0){if(S=p.value,b!==!0||S===null){const M=y+C*4,R=v.matrixWorldInverse;h.getNormalMatrix(R),(S===null||S.length<M)&&(S=new Float32Array(M));for(let P=0,N=y;P!==C;++P,N+=4)d.copy(g[P]).applyMatrix4(R,h),d.normal.toArray(S,N),S[N+3]=d.constant}p.value=S,p.needsUpdate=!0}return t.numPlanes=C,t.numIntersection=0,S}}const us=4,w1=[.125,.215,.35,.446,.526,.582],Ys=20,wU=256,Gc=new EE,R1=new an;let h0=null,p0=0,m0=0,g0=!1;const RU=new ut;class C1{constructor(t){this._renderer=t,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._sizeLods=[],this._sigmas=[],this._lodMeshes=[],this._backgroundBox=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null}fromScene(t,i=0,s=.1,l=100,c={}){const{size:d=256,position:h=RU}=c;h0=this._renderer.getRenderTarget(),p0=this._renderer.getActiveCubeFace(),m0=this._renderer.getActiveMipmapLevel(),g0=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(d);const p=this._allocateTargets();return p.depthBuffer=!0,this._sceneToCubeUV(t,s,l,p,h),i>0&&this._blur(p,0,0,i),this._applyPMREM(p),this._cleanup(p),p}fromEquirectangular(t,i=null){return this._fromTexture(t,i)}fromCubemap(t,i=null){return this._fromTexture(t,i)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=U1(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=N1(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._backgroundBox!==null&&(this._backgroundBox.geometry.dispose(),this._backgroundBox.material.dispose())}_setSize(t){this._lodMax=Math.floor(Math.log2(t)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let t=0;t<this._lodMeshes.length;t++)this._lodMeshes[t].geometry.dispose()}_cleanup(t){this._renderer.setRenderTarget(h0,p0,m0),this._renderer.xr.enabled=g0,t.scissorTest=!1,ul(t,0,0,t.width,t.height)}_fromTexture(t,i){t.mapping===no||t.mapping===Ll?this._setSize(t.image.length===0?16:t.image[0].width||t.image[0].image.width):this._setSize(t.image.width/4),h0=this._renderer.getRenderTarget(),p0=this._renderer.getActiveCubeFace(),m0=this._renderer.getActiveMipmapLevel(),g0=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const s=i||this._allocateTargets();return this._textureToCubeUV(t,s),this._applyPMREM(s),this._cleanup(s),s}_allocateTargets(){const t=3*Math.max(this._cubeSize,112),i=4*this._cubeSize,s={magFilter:ti,minFilter:ti,generateMipmaps:!1,type:vr,format:ma,colorSpace:Bd,depthBuffer:!1},l=D1(t,i,s);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==t||this._pingPongRenderTarget.height!==i){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=D1(t,i,s);const{_lodMax:c}=this;({lodMeshes:this._lodMeshes,sizeLods:this._sizeLods,sigmas:this._sigmas}=CU(c)),this._blurMaterial=NU(c,t,i),this._ggxMaterial=DU(c,t,i)}return l}_compileMaterial(t){const i=new ka(new qa,t);this._renderer.compile(i,Gc)}_sceneToCubeUV(t,i,s,l,c){const p=new Qi(90,1,i,s),m=[1,-1,1,1,1,1],_=[1,1,1,-1,-1,-1],g=this._renderer,v=g.autoClear,y=g.toneMapping;g.getClearColor(R1),g.toneMapping=Ba,g.autoClear=!1,g.state.buffers.depth.getReversed()&&(g.setRenderTarget(l),g.clearDepth(),g.setRenderTarget(null)),this._backgroundBox===null&&(this._backgroundBox=new ka(new gu,new dv({name:"PMREM.Background",side:yi,depthWrite:!1,depthTest:!1})));const C=this._backgroundBox,S=C.material;let M=!1;const R=t.background;R?R.isColor&&(S.color.copy(R),t.background=null,M=!0):(S.color.copy(R1),M=!0);for(let P=0;P<6;P++){const N=P%3;N===0?(p.up.set(0,m[P],0),p.position.set(c.x,c.y,c.z),p.lookAt(c.x+_[P],c.y,c.z)):N===1?(p.up.set(0,0,m[P]),p.position.set(c.x,c.y,c.z),p.lookAt(c.x,c.y+_[P],c.z)):(p.up.set(0,m[P],0),p.position.set(c.x,c.y,c.z),p.lookAt(c.x,c.y,c.z+_[P]));const H=this._cubeSize;ul(l,N*H,P>2?H:0,H,H),g.setRenderTarget(l),M&&g.render(C,p),g.render(t,p)}g.toneMapping=y,g.autoClear=v,t.background=R}_textureToCubeUV(t,i){const s=this._renderer,l=t.mapping===no||t.mapping===Ll;l?(this._cubemapMaterial===null&&(this._cubemapMaterial=U1()),this._cubemapMaterial.uniforms.flipEnvMap.value=t.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=N1());const c=l?this._cubemapMaterial:this._equirectMaterial,d=this._lodMeshes[0];d.material=c;const h=c.uniforms;h.envMap.value=t;const p=this._cubeSize;ul(i,0,0,3*p,2*p),s.setRenderTarget(i),s.render(d,Gc)}_applyPMREM(t){const i=this._renderer,s=i.autoClear;i.autoClear=!1;const l=this._lodMeshes.length;for(let c=1;c<l;c++)this._applyGGXFilter(t,c-1,c);i.autoClear=s}_applyGGXFilter(t,i,s){const l=this._renderer,c=this._pingPongRenderTarget,d=this._ggxMaterial,h=this._lodMeshes[s];h.material=d;const p=d.uniforms,m=s/(this._lodMeshes.length-1),_=i/(this._lodMeshes.length-1),g=Math.sqrt(m*m-_*_),v=0+m*1.25,y=g*v,{_lodMax:b}=this,C=this._sizeLods[s],S=3*C*(s>b-us?s-b+us:0),M=4*(this._cubeSize-C);p.envMap.value=t.texture,p.roughness.value=y,p.mipInt.value=b-i,ul(c,S,M,3*C,2*C),l.setRenderTarget(c),l.render(h,Gc),p.envMap.value=c.texture,p.roughness.value=0,p.mipInt.value=b-s,ul(t,S,M,3*C,2*C),l.setRenderTarget(t),l.render(h,Gc)}_blur(t,i,s,l,c){const d=this._pingPongRenderTarget;this._halfBlur(t,d,i,s,l,"latitudinal",c),this._halfBlur(d,t,s,s,l,"longitudinal",c)}_halfBlur(t,i,s,l,c,d,h){const p=this._renderer,m=this._blurMaterial;d!=="latitudinal"&&d!=="longitudinal"&&Be("blur direction must be either latitudinal or longitudinal!");const _=3,g=this._lodMeshes[l];g.material=m;const v=m.uniforms,y=this._sizeLods[s]-1,b=isFinite(c)?Math.PI/(2*y):2*Math.PI/(2*Ys-1),C=c/b,S=isFinite(c)?1+Math.floor(_*C):Ys;S>Ys&&de(`sigmaRadians, ${c}, is too large and will clip, as it requested ${S} samples when the maximum is set to ${Ys}`);const M=[];let R=0;for(let L=0;L<Ys;++L){const E=L/C,O=Math.exp(-E*E/2);M.push(O),L===0?R+=O:L<S&&(R+=2*O)}for(let L=0;L<M.length;L++)M[L]=M[L]/R;v.envMap.value=t.texture,v.samples.value=S,v.weights.value=M,v.latitudinal.value=d==="latitudinal",h&&(v.poleAxis.value=h);const{_lodMax:P}=this;v.dTheta.value=b,v.mipInt.value=P-s;const N=this._sizeLods[l],H=3*N*(l>P-us?l-P+us:0),U=4*(this._cubeSize-N);ul(i,H,U,3*N,2*N),p.setRenderTarget(i),p.render(g,Gc)}}function CU(a){const t=[],i=[],s=[];let l=a;const c=a-us+1+w1.length;for(let d=0;d<c;d++){const h=Math.pow(2,l);t.push(h);let p=1/h;d>a-us?p=w1[d-a+us-1]:d===0&&(p=0),i.push(p);const m=1/(h-2),_=-m,g=1+m,v=[_,_,g,_,g,g,_,_,g,g,_,g],y=6,b=6,C=3,S=2,M=1,R=new Float32Array(C*b*y),P=new Float32Array(S*b*y),N=new Float32Array(M*b*y);for(let U=0;U<y;U++){const L=U%3*2/3-1,E=U>2?0:-1,O=[L,E,0,L+2/3,E,0,L+2/3,E+1,0,L,E,0,L+2/3,E+1,0,L,E+1,0];R.set(O,C*b*U),P.set(v,S*b*U);const V=[U,U,U,U,U,U];N.set(V,M*b*U)}const H=new qa;H.setAttribute("position",new Ga(R,C)),H.setAttribute("uv",new Ga(P,S)),H.setAttribute("faceIndex",new Ga(N,M)),s.push(new ka(H,null)),l>us&&l--}return{lodMeshes:s,sizeLods:t,sigmas:i}}function D1(a,t,i){const s=new Ha(a,t,i);return s.texture.mapping=th,s.texture.name="PMREM.cubeUv",s.scissorTest=!0,s}function ul(a,t,i,s,l){a.viewport.set(t,i,s,l),a.scissor.set(t,i,s,l)}function DU(a,t,i){return new Xa({name:"PMREMGGXConvolution",defines:{GGX_SAMPLES:wU,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/i,CUBEUV_MAX_MIP:`${a}.0`},uniforms:{envMap:{value:null},roughness:{value:0},mipInt:{value:0}},vertexShader:ih(),fragmentShader:`

			precision highp float;
			precision highp int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform float roughness;
			uniform float mipInt;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			#define PI 3.14159265359

			// Van der Corput radical inverse
			float radicalInverse_VdC(uint bits) {
				bits = (bits << 16u) | (bits >> 16u);
				bits = ((bits & 0x55555555u) << 1u) | ((bits & 0xAAAAAAAAu) >> 1u);
				bits = ((bits & 0x33333333u) << 2u) | ((bits & 0xCCCCCCCCu) >> 2u);
				bits = ((bits & 0x0F0F0F0Fu) << 4u) | ((bits & 0xF0F0F0F0u) >> 4u);
				bits = ((bits & 0x00FF00FFu) << 8u) | ((bits & 0xFF00FF00u) >> 8u);
				return float(bits) * 2.3283064365386963e-10; // / 0x100000000
			}

			// Hammersley sequence
			vec2 hammersley(uint i, uint N) {
				return vec2(float(i) / float(N), radicalInverse_VdC(i));
			}

			// GGX VNDF importance sampling (Eric Heitz 2018)
			// "Sampling the GGX Distribution of Visible Normals"
			// https://jcgt.org/published/0007/04/01/
			vec3 importanceSampleGGX_VNDF(vec2 Xi, vec3 V, float roughness) {
				float alpha = roughness * roughness;

				// Section 4.1: Orthonormal basis
				vec3 T1 = vec3(1.0, 0.0, 0.0);
				vec3 T2 = cross(V, T1);

				// Section 4.2: Parameterization of projected area
				float r = sqrt(Xi.x);
				float phi = 2.0 * PI * Xi.y;
				float t1 = r * cos(phi);
				float t2 = r * sin(phi);
				float s = 0.5 * (1.0 + V.z);
				t2 = (1.0 - s) * sqrt(1.0 - t1 * t1) + s * t2;

				// Section 4.3: Reprojection onto hemisphere
				vec3 Nh = t1 * T1 + t2 * T2 + sqrt(max(0.0, 1.0 - t1 * t1 - t2 * t2)) * V;

				// Section 3.4: Transform back to ellipsoid configuration
				return normalize(vec3(alpha * Nh.x, alpha * Nh.y, max(0.0, Nh.z)));
			}

			void main() {
				vec3 N = normalize(vOutputDirection);
				vec3 V = N; // Assume view direction equals normal for pre-filtering

				vec3 prefilteredColor = vec3(0.0);
				float totalWeight = 0.0;

				// For very low roughness, just sample the environment directly
				if (roughness < 0.001) {
					gl_FragColor = vec4(bilinearCubeUV(envMap, N, mipInt), 1.0);
					return;
				}

				// Tangent space basis for VNDF sampling
				vec3 up = abs(N.z) < 0.999 ? vec3(0.0, 0.0, 1.0) : vec3(1.0, 0.0, 0.0);
				vec3 tangent = normalize(cross(up, N));
				vec3 bitangent = cross(N, tangent);

				for(uint i = 0u; i < uint(GGX_SAMPLES); i++) {
					vec2 Xi = hammersley(i, uint(GGX_SAMPLES));

					// For PMREM, V = N, so in tangent space V is always (0, 0, 1)
					vec3 H_tangent = importanceSampleGGX_VNDF(Xi, vec3(0.0, 0.0, 1.0), roughness);

					// Transform H back to world space
					vec3 H = normalize(tangent * H_tangent.x + bitangent * H_tangent.y + N * H_tangent.z);
					vec3 L = normalize(2.0 * dot(V, H) * H - V);

					float NdotL = max(dot(N, L), 0.0);

					if(NdotL > 0.0) {
						// Sample environment at fixed mip level
						// VNDF importance sampling handles the distribution filtering
						vec3 sampleColor = bilinearCubeUV(envMap, L, mipInt);

						// Weight by NdotL for the split-sum approximation
						// VNDF PDF naturally accounts for the visible microfacet distribution
						prefilteredColor += sampleColor * NdotL;
						totalWeight += NdotL;
					}
				}

				if (totalWeight > 0.0) {
					prefilteredColor = prefilteredColor / totalWeight;
				}

				gl_FragColor = vec4(prefilteredColor, 1.0);
			}
		`,blending:pr,depthTest:!1,depthWrite:!1})}function NU(a,t,i){const s=new Float32Array(Ys),l=new ut(0,1,0);return new Xa({name:"SphericalGaussianBlur",defines:{n:Ys,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/i,CUBEUV_MAX_MIP:`${a}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:s},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:l}},vertexShader:ih(),fragmentShader:`

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
		`,blending:pr,depthTest:!1,depthWrite:!1})}function N1(){return new Xa({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:ih(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:pr,depthTest:!1,depthWrite:!1})}function U1(){return new Xa({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:ih(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:pr,depthTest:!1,depthWrite:!1})}function ih(){return`

		precision mediump float;
		precision mediump int;

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
	`}class RE extends Ha{constructor(t=1,i={}){super(t,t,i),this.isWebGLCubeRenderTarget=!0;const s={width:t,height:t,depth:1},l=[s,s,s,s,s,s];this.texture=new yE(l),this._setTextureOptions(i),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(t,i){this.texture.type=i.type,this.texture.colorSpace=i.colorSpace,this.texture.generateMipmaps=i.generateMipmaps,this.texture.minFilter=i.minFilter,this.texture.magFilter=i.magFilter;const s={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},l=new gu(5,5,5),c=new Xa({name:"CubemapFromEquirect",uniforms:Pl(s.uniforms),vertexShader:s.vertexShader,fragmentShader:s.fragmentShader,side:yi,blending:pr});c.uniforms.tEquirect.value=i;const d=new ka(l,c),h=i.minFilter;return i.minFilter===Zs&&(i.minFilter=ti),new IC(1,10,this).update(t,d),i.minFilter=h,d.geometry.dispose(),d.material.dispose(),this}clear(t,i=!0,s=!0,l=!0){const c=t.getRenderTarget();for(let d=0;d<6;d++)t.setRenderTarget(this,d),t.clear(i,s,l);t.setRenderTarget(c)}}function UU(a){let t=new WeakMap,i=new WeakMap,s=null;function l(v,y=!1){return v==null?null:y?d(v):c(v)}function c(v){if(v&&v.isTexture){const y=v.mapping;if(y===Hm||y===Gm)if(t.has(v)){const b=t.get(v).texture;return h(b,v.mapping)}else{const b=v.image;if(b&&b.height>0){const C=new RE(b.height);return C.fromEquirectangularTexture(a,v),t.set(v,C),v.addEventListener("dispose",m),h(C.texture,v.mapping)}else return null}}return v}function d(v){if(v&&v.isTexture){const y=v.mapping,b=y===Hm||y===Gm,C=y===no||y===Ll;if(b||C){let S=i.get(v);const M=S!==void 0?S.texture.pmremVersion:0;if(v.isRenderTargetTexture&&v.pmremVersion!==M)return s===null&&(s=new C1(a)),S=b?s.fromEquirectangular(v,S):s.fromCubemap(v,S),S.texture.pmremVersion=v.pmremVersion,i.set(v,S),S.texture;if(S!==void 0)return S.texture;{const R=v.image;return b&&R&&R.height>0||C&&R&&p(R)?(s===null&&(s=new C1(a)),S=b?s.fromEquirectangular(v):s.fromCubemap(v),S.texture.pmremVersion=v.pmremVersion,i.set(v,S),v.addEventListener("dispose",_),S.texture):null}}}return v}function h(v,y){return y===Hm?v.mapping=no:y===Gm&&(v.mapping=Ll),v}function p(v){let y=0;const b=6;for(let C=0;C<b;C++)v[C]!==void 0&&y++;return y===b}function m(v){const y=v.target;y.removeEventListener("dispose",m);const b=t.get(y);b!==void 0&&(t.delete(y),b.dispose())}function _(v){const y=v.target;y.removeEventListener("dispose",_);const b=i.get(y);b!==void 0&&(i.delete(y),b.dispose())}function g(){t=new WeakMap,i=new WeakMap,s!==null&&(s.dispose(),s=null)}return{get:l,dispose:g}}function LU(a){const t={};function i(s){if(t[s]!==void 0)return t[s];const l=a.getExtension(s);return t[s]=l,l}return{has:function(s){return i(s)!==null},init:function(){i("EXT_color_buffer_float"),i("WEBGL_clip_cull_distance"),i("OES_texture_float_linear"),i("EXT_color_buffer_half_float"),i("WEBGL_multisampled_render_to_texture"),i("WEBGL_render_shared_exponent")},get:function(s){const l=i(s);return l===null&&Hg("WebGLRenderer: "+s+" extension not supported."),l}}}function OU(a,t,i,s){const l={},c=new WeakMap;function d(g){const v=g.target;v.index!==null&&t.remove(v.index);for(const b in v.attributes)t.remove(v.attributes[b]);v.removeEventListener("dispose",d),delete l[v.id];const y=c.get(v);y&&(t.remove(y),c.delete(v)),s.releaseStatesOfGeometry(v),v.isInstancedBufferGeometry===!0&&delete v._maxInstanceCount,i.memory.geometries--}function h(g,v){return l[v.id]===!0||(v.addEventListener("dispose",d),l[v.id]=!0,i.memory.geometries++),v}function p(g){const v=g.attributes;for(const y in v)t.update(v[y],a.ARRAY_BUFFER)}function m(g){const v=[],y=g.index,b=g.attributes.position;let C=0;if(b===void 0)return;if(y!==null){const R=y.array;C=y.version;for(let P=0,N=R.length;P<N;P+=3){const H=R[P+0],U=R[P+1],L=R[P+2];v.push(H,U,U,L,L,H)}}else{const R=b.array;C=b.version;for(let P=0,N=R.length/3-1;P<N;P+=3){const H=P+0,U=P+1,L=P+2;v.push(H,U,U,L,L,H)}}const S=new(b.count>=65535?_E:vE)(v,1);S.version=C;const M=c.get(g);M&&t.remove(M),c.set(g,S)}function _(g){const v=c.get(g);if(v){const y=g.index;y!==null&&v.version<y.version&&m(g)}else m(g);return c.get(g)}return{get:h,update:p,getWireframeAttribute:_}}function PU(a,t,i){let s;function l(g){s=g}let c,d;function h(g){c=g.type,d=g.bytesPerElement}function p(g,v){a.drawElements(s,v,c,g*d),i.update(v,s,1)}function m(g,v,y){y!==0&&(a.drawElementsInstanced(s,v,c,g*d,y),i.update(v,s,y))}function _(g,v,y){if(y===0)return;t.get("WEBGL_multi_draw").multiDrawElementsWEBGL(s,v,0,c,g,0,y);let C=0;for(let S=0;S<y;S++)C+=v[S];i.update(C,s,1)}this.setMode=l,this.setIndex=h,this.render=p,this.renderInstances=m,this.renderMultiDraw=_}function zU(a){const t={geometries:0,textures:0},i={frame:0,calls:0,triangles:0,points:0,lines:0};function s(c,d,h){switch(i.calls++,d){case a.TRIANGLES:i.triangles+=h*(c/3);break;case a.LINES:i.lines+=h*(c/2);break;case a.LINE_STRIP:i.lines+=h*(c-1);break;case a.LINE_LOOP:i.lines+=h*c;break;case a.POINTS:i.points+=h*c;break;default:Be("WebGLInfo: Unknown draw mode:",d);break}}function l(){i.calls=0,i.triangles=0,i.points=0,i.lines=0}return{memory:t,render:i,programs:null,autoReset:!0,reset:l,update:s}}function IU(a,t,i){const s=new WeakMap,l=new Mn;function c(d,h,p){const m=d.morphTargetInfluences,_=h.morphAttributes.position||h.morphAttributes.normal||h.morphAttributes.color,g=_!==void 0?_.length:0;let v=s.get(h);if(v===void 0||v.count!==g){let O=function(){L.dispose(),s.delete(h),h.removeEventListener("dispose",O)};v!==void 0&&v.texture.dispose();const y=h.morphAttributes.position!==void 0,b=h.morphAttributes.normal!==void 0,C=h.morphAttributes.color!==void 0,S=h.morphAttributes.position||[],M=h.morphAttributes.normal||[],R=h.morphAttributes.color||[];let P=0;y===!0&&(P=1),b===!0&&(P=2),C===!0&&(P=3);let N=h.attributes.position.count*P,H=1;N>t.maxTextureSize&&(H=Math.ceil(N/t.maxTextureSize),N=t.maxTextureSize);const U=new Float32Array(N*H*4*g),L=new pE(U,N,H,g);L.type=Pa,L.needsUpdate=!0;const E=P*4;for(let V=0;V<g;V++){const z=S[V],Z=M[V],tt=R[V],ft=N*H*4*V;for(let X=0;X<z.count;X++){const B=X*E;y===!0&&(l.fromBufferAttribute(z,X),U[ft+B+0]=l.x,U[ft+B+1]=l.y,U[ft+B+2]=l.z,U[ft+B+3]=0),b===!0&&(l.fromBufferAttribute(Z,X),U[ft+B+4]=l.x,U[ft+B+5]=l.y,U[ft+B+6]=l.z,U[ft+B+7]=0),C===!0&&(l.fromBufferAttribute(tt,X),U[ft+B+8]=l.x,U[ft+B+9]=l.y,U[ft+B+10]=l.z,U[ft+B+11]=tt.itemSize===4?l.w:1)}}v={count:g,texture:L,size:new Je(N,H)},s.set(h,v),h.addEventListener("dispose",O)}if(d.isInstancedMesh===!0&&d.morphTexture!==null)p.getUniforms().setValue(a,"morphTexture",d.morphTexture,i);else{let y=0;for(let C=0;C<m.length;C++)y+=m[C];const b=h.morphTargetsRelative?1:1-y;p.getUniforms().setValue(a,"morphTargetBaseInfluence",b),p.getUniforms().setValue(a,"morphTargetInfluences",m)}p.getUniforms().setValue(a,"morphTargetsTexture",v.texture,i),p.getUniforms().setValue(a,"morphTargetsTextureSize",v.size)}return{update:c}}function FU(a,t,i,s,l){let c=new WeakMap;function d(m){const _=l.render.frame,g=m.geometry,v=t.get(m,g);if(c.get(v)!==_&&(t.update(v),c.set(v,_)),m.isInstancedMesh&&(m.hasEventListener("dispose",p)===!1&&m.addEventListener("dispose",p),c.get(m)!==_&&(i.update(m.instanceMatrix,a.ARRAY_BUFFER),m.instanceColor!==null&&i.update(m.instanceColor,a.ARRAY_BUFFER),c.set(m,_))),m.isSkinnedMesh){const y=m.skeleton;c.get(y)!==_&&(y.update(),c.set(y,_))}return v}function h(){c=new WeakMap}function p(m){const _=m.target;_.removeEventListener("dispose",p),s.releaseStatesOfObject(_),i.remove(_.instanceMatrix),_.instanceColor!==null&&i.remove(_.instanceColor)}return{update:d,dispose:h}}const BU={[$b]:"LINEAR_TONE_MAPPING",[Jb]:"REINHARD_TONE_MAPPING",[tE]:"CINEON_TONE_MAPPING",[eE]:"ACES_FILMIC_TONE_MAPPING",[iE]:"AGX_TONE_MAPPING",[aE]:"NEUTRAL_TONE_MAPPING",[nE]:"CUSTOM_TONE_MAPPING"};function HU(a,t,i,s,l){const c=new Ha(t,i,{type:a,depthBuffer:s,stencilBuffer:l,depthTexture:s?new Ol(t,i):void 0}),d=new Ha(t,i,{type:vr,depthBuffer:!1,stencilBuffer:!1}),h=new qa;h.setAttribute("position",new $i([-1,3,0,-1,-1,0,3,-1,0],3)),h.setAttribute("uv",new $i([0,2,0,0,2,0],2));const p=new OC({uniforms:{tDiffuse:{value:null}},vertexShader:`
			precision highp float;

			uniform mat4 modelViewMatrix;
			uniform mat4 projectionMatrix;

			attribute vec3 position;
			attribute vec2 uv;

			varying vec2 vUv;

			void main() {
				vUv = uv;
				gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
			}`,fragmentShader:`
			precision highp float;

			uniform sampler2D tDiffuse;

			varying vec2 vUv;

			#include <tonemapping_pars_fragment>
			#include <colorspace_pars_fragment>

			void main() {
				gl_FragColor = texture2D( tDiffuse, vUv );

				#ifdef LINEAR_TONE_MAPPING
					gl_FragColor.rgb = LinearToneMapping( gl_FragColor.rgb );
				#elif defined( REINHARD_TONE_MAPPING )
					gl_FragColor.rgb = ReinhardToneMapping( gl_FragColor.rgb );
				#elif defined( CINEON_TONE_MAPPING )
					gl_FragColor.rgb = CineonToneMapping( gl_FragColor.rgb );
				#elif defined( ACES_FILMIC_TONE_MAPPING )
					gl_FragColor.rgb = ACESFilmicToneMapping( gl_FragColor.rgb );
				#elif defined( AGX_TONE_MAPPING )
					gl_FragColor.rgb = AgXToneMapping( gl_FragColor.rgb );
				#elif defined( NEUTRAL_TONE_MAPPING )
					gl_FragColor.rgb = NeutralToneMapping( gl_FragColor.rgb );
				#elif defined( CUSTOM_TONE_MAPPING )
					gl_FragColor.rgb = CustomToneMapping( gl_FragColor.rgb );
				#endif

				#ifdef SRGB_TRANSFER
					gl_FragColor = sRGBTransferOETF( gl_FragColor );
				#endif
			}`,depthTest:!1,depthWrite:!1}),m=new ka(h,p),_=new EE(-1,1,1,-1,0,1);let g=null,v=null,y=!1,b,C=null,S=[],M=!1;this.setSize=function(R,P){c.setSize(R,P),d.setSize(R,P);for(let N=0;N<S.length;N++){const H=S[N];H.setSize&&H.setSize(R,P)}},this.setEffects=function(R){S=R,M=S.length>0&&S[0].isRenderPass===!0;const P=c.width,N=c.height;for(let H=0;H<S.length;H++){const U=S[H];U.setSize&&U.setSize(P,N)}},this.begin=function(R,P){if(y||R.toneMapping===Ba&&S.length===0)return!1;if(C=P,P!==null){const N=P.width,H=P.height;(c.width!==N||c.height!==H)&&this.setSize(N,H)}return M===!1&&R.setRenderTarget(c),b=R.toneMapping,R.toneMapping=Ba,!0},this.hasRenderPass=function(){return M},this.end=function(R,P){R.toneMapping=b,y=!0;let N=c,H=d;for(let U=0;U<S.length;U++){const L=S[U];if(L.enabled!==!1&&(L.render(R,H,N,P),L.needsSwap!==!1)){const E=N;N=H,H=E}}if(g!==R.outputColorSpace||v!==R.toneMapping){g=R.outputColorSpace,v=R.toneMapping,p.defines={},Oe.getTransfer(g)===$e&&(p.defines.SRGB_TRANSFER="");const U=BU[v];U&&(p.defines[U]=""),p.needsUpdate=!0}p.uniforms.tDiffuse.value=N.texture,R.setRenderTarget(C),R.render(m,_),C=null,y=!1},this.isCompositing=function(){return y},this.dispose=function(){c.depthTexture&&c.depthTexture.dispose(),c.dispose(),d.dispose(),h.dispose(),p.dispose()}}const CE=new ci,Vg=new Ol(1,1),DE=new pE,NE=new uC,UE=new yE,L1=[],O1=[],P1=new Float32Array(16),z1=new Float32Array(9),I1=new Float32Array(4);function Fl(a,t,i){const s=a[0];if(s<=0||s>0)return a;const l=t*i;let c=L1[l];if(c===void 0&&(c=new Float32Array(l),L1[l]=c),t!==0){s.toArray(c,0);for(let d=1,h=0;d!==t;++d)h+=i,a[d].toArray(c,h)}return c}function zn(a,t){if(a.length!==t.length)return!1;for(let i=0,s=a.length;i<s;i++)if(a[i]!==t[i])return!1;return!0}function In(a,t){for(let i=0,s=t.length;i<s;i++)a[i]=t[i]}function ah(a,t){let i=O1[t];i===void 0&&(i=new Int32Array(t),O1[t]=i);for(let s=0;s!==t;++s)i[s]=a.allocateTextureUnit();return i}function GU(a,t){const i=this.cache;i[0]!==t&&(a.uniform1f(this.addr,t),i[0]=t)}function VU(a,t){const i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y)&&(a.uniform2f(this.addr,t.x,t.y),i[0]=t.x,i[1]=t.y);else{if(zn(i,t))return;a.uniform2fv(this.addr,t),In(i,t)}}function kU(a,t){const i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y||i[2]!==t.z)&&(a.uniform3f(this.addr,t.x,t.y,t.z),i[0]=t.x,i[1]=t.y,i[2]=t.z);else if(t.r!==void 0)(i[0]!==t.r||i[1]!==t.g||i[2]!==t.b)&&(a.uniform3f(this.addr,t.r,t.g,t.b),i[0]=t.r,i[1]=t.g,i[2]=t.b);else{if(zn(i,t))return;a.uniform3fv(this.addr,t),In(i,t)}}function XU(a,t){const i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y||i[2]!==t.z||i[3]!==t.w)&&(a.uniform4f(this.addr,t.x,t.y,t.z,t.w),i[0]=t.x,i[1]=t.y,i[2]=t.z,i[3]=t.w);else{if(zn(i,t))return;a.uniform4fv(this.addr,t),In(i,t)}}function qU(a,t){const i=this.cache,s=t.elements;if(s===void 0){if(zn(i,t))return;a.uniformMatrix2fv(this.addr,!1,t),In(i,t)}else{if(zn(i,s))return;I1.set(s),a.uniformMatrix2fv(this.addr,!1,I1),In(i,s)}}function WU(a,t){const i=this.cache,s=t.elements;if(s===void 0){if(zn(i,t))return;a.uniformMatrix3fv(this.addr,!1,t),In(i,t)}else{if(zn(i,s))return;z1.set(s),a.uniformMatrix3fv(this.addr,!1,z1),In(i,s)}}function jU(a,t){const i=this.cache,s=t.elements;if(s===void 0){if(zn(i,t))return;a.uniformMatrix4fv(this.addr,!1,t),In(i,t)}else{if(zn(i,s))return;P1.set(s),a.uniformMatrix4fv(this.addr,!1,P1),In(i,s)}}function YU(a,t){const i=this.cache;i[0]!==t&&(a.uniform1i(this.addr,t),i[0]=t)}function ZU(a,t){const i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y)&&(a.uniform2i(this.addr,t.x,t.y),i[0]=t.x,i[1]=t.y);else{if(zn(i,t))return;a.uniform2iv(this.addr,t),In(i,t)}}function QU(a,t){const i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y||i[2]!==t.z)&&(a.uniform3i(this.addr,t.x,t.y,t.z),i[0]=t.x,i[1]=t.y,i[2]=t.z);else{if(zn(i,t))return;a.uniform3iv(this.addr,t),In(i,t)}}function KU(a,t){const i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y||i[2]!==t.z||i[3]!==t.w)&&(a.uniform4i(this.addr,t.x,t.y,t.z,t.w),i[0]=t.x,i[1]=t.y,i[2]=t.z,i[3]=t.w);else{if(zn(i,t))return;a.uniform4iv(this.addr,t),In(i,t)}}function $U(a,t){const i=this.cache;i[0]!==t&&(a.uniform1ui(this.addr,t),i[0]=t)}function JU(a,t){const i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y)&&(a.uniform2ui(this.addr,t.x,t.y),i[0]=t.x,i[1]=t.y);else{if(zn(i,t))return;a.uniform2uiv(this.addr,t),In(i,t)}}function tL(a,t){const i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y||i[2]!==t.z)&&(a.uniform3ui(this.addr,t.x,t.y,t.z),i[0]=t.x,i[1]=t.y,i[2]=t.z);else{if(zn(i,t))return;a.uniform3uiv(this.addr,t),In(i,t)}}function eL(a,t){const i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y||i[2]!==t.z||i[3]!==t.w)&&(a.uniform4ui(this.addr,t.x,t.y,t.z,t.w),i[0]=t.x,i[1]=t.y,i[2]=t.z,i[3]=t.w);else{if(zn(i,t))return;a.uniform4uiv(this.addr,t),In(i,t)}}function nL(a,t,i){const s=this.cache,l=i.allocateTextureUnit();s[0]!==l&&(a.uniform1i(this.addr,l),s[0]=l);let c;this.type===a.SAMPLER_2D_SHADOW?(Vg.compareFunction=i.isReversedDepthBuffer()?cv:lv,c=Vg):c=CE,i.setTexture2D(t||c,l)}function iL(a,t,i){const s=this.cache,l=i.allocateTextureUnit();s[0]!==l&&(a.uniform1i(this.addr,l),s[0]=l),i.setTexture3D(t||NE,l)}function aL(a,t,i){const s=this.cache,l=i.allocateTextureUnit();s[0]!==l&&(a.uniform1i(this.addr,l),s[0]=l),i.setTextureCube(t||UE,l)}function rL(a,t,i){const s=this.cache,l=i.allocateTextureUnit();s[0]!==l&&(a.uniform1i(this.addr,l),s[0]=l),i.setTexture2DArray(t||DE,l)}function sL(a){switch(a){case 5126:return GU;case 35664:return VU;case 35665:return kU;case 35666:return XU;case 35674:return qU;case 35675:return WU;case 35676:return jU;case 5124:case 35670:return YU;case 35667:case 35671:return ZU;case 35668:case 35672:return QU;case 35669:case 35673:return KU;case 5125:return $U;case 36294:return JU;case 36295:return tL;case 36296:return eL;case 35678:case 36198:case 36298:case 36306:case 35682:return nL;case 35679:case 36299:case 36307:return iL;case 35680:case 36300:case 36308:case 36293:return aL;case 36289:case 36303:case 36311:case 36292:return rL}}function oL(a,t){a.uniform1fv(this.addr,t)}function lL(a,t){const i=Fl(t,this.size,2);a.uniform2fv(this.addr,i)}function cL(a,t){const i=Fl(t,this.size,3);a.uniform3fv(this.addr,i)}function uL(a,t){const i=Fl(t,this.size,4);a.uniform4fv(this.addr,i)}function fL(a,t){const i=Fl(t,this.size,4);a.uniformMatrix2fv(this.addr,!1,i)}function dL(a,t){const i=Fl(t,this.size,9);a.uniformMatrix3fv(this.addr,!1,i)}function hL(a,t){const i=Fl(t,this.size,16);a.uniformMatrix4fv(this.addr,!1,i)}function pL(a,t){a.uniform1iv(this.addr,t)}function mL(a,t){a.uniform2iv(this.addr,t)}function gL(a,t){a.uniform3iv(this.addr,t)}function vL(a,t){a.uniform4iv(this.addr,t)}function _L(a,t){a.uniform1uiv(this.addr,t)}function xL(a,t){a.uniform2uiv(this.addr,t)}function yL(a,t){a.uniform3uiv(this.addr,t)}function SL(a,t){a.uniform4uiv(this.addr,t)}function ML(a,t,i){const s=this.cache,l=t.length,c=ah(i,l);zn(s,c)||(a.uniform1iv(this.addr,c),In(s,c));let d;this.type===a.SAMPLER_2D_SHADOW?d=Vg:d=CE;for(let h=0;h!==l;++h)i.setTexture2D(t[h]||d,c[h])}function bL(a,t,i){const s=this.cache,l=t.length,c=ah(i,l);zn(s,c)||(a.uniform1iv(this.addr,c),In(s,c));for(let d=0;d!==l;++d)i.setTexture3D(t[d]||NE,c[d])}function EL(a,t,i){const s=this.cache,l=t.length,c=ah(i,l);zn(s,c)||(a.uniform1iv(this.addr,c),In(s,c));for(let d=0;d!==l;++d)i.setTextureCube(t[d]||UE,c[d])}function TL(a,t,i){const s=this.cache,l=t.length,c=ah(i,l);zn(s,c)||(a.uniform1iv(this.addr,c),In(s,c));for(let d=0;d!==l;++d)i.setTexture2DArray(t[d]||DE,c[d])}function AL(a){switch(a){case 5126:return oL;case 35664:return lL;case 35665:return cL;case 35666:return uL;case 35674:return fL;case 35675:return dL;case 35676:return hL;case 5124:case 35670:return pL;case 35667:case 35671:return mL;case 35668:case 35672:return gL;case 35669:case 35673:return vL;case 5125:return _L;case 36294:return xL;case 36295:return yL;case 36296:return SL;case 35678:case 36198:case 36298:case 36306:case 35682:return ML;case 35679:case 36299:case 36307:return bL;case 35680:case 36300:case 36308:case 36293:return EL;case 36289:case 36303:case 36311:case 36292:return TL}}class wL{constructor(t,i,s){this.id=t,this.addr=s,this.cache=[],this.type=i.type,this.setValue=sL(i.type)}}class RL{constructor(t,i,s){this.id=t,this.addr=s,this.cache=[],this.type=i.type,this.size=i.size,this.setValue=AL(i.type)}}class CL{constructor(t){this.id=t,this.seq=[],this.map={}}setValue(t,i,s){const l=this.seq;for(let c=0,d=l.length;c!==d;++c){const h=l[c];h.setValue(t,i[h.id],s)}}}const v0=/(\w+)(\])?(\[|\.)?/g;function F1(a,t){a.seq.push(t),a.map[t.id]=t}function DL(a,t,i){const s=a.name,l=s.length;for(v0.lastIndex=0;;){const c=v0.exec(s),d=v0.lastIndex;let h=c[1];const p=c[2]==="]",m=c[3];if(p&&(h=h|0),m===void 0||m==="["&&d+2===l){F1(i,m===void 0?new wL(h,a,t):new RL(h,a,t));break}else{let g=i.map[h];g===void 0&&(g=new CL(h),F1(i,g)),i=g}}}class Dd{constructor(t,i){this.seq=[],this.map={};const s=t.getProgramParameter(i,t.ACTIVE_UNIFORMS);for(let d=0;d<s;++d){const h=t.getActiveUniform(i,d),p=t.getUniformLocation(i,h.name);DL(h,p,this)}const l=[],c=[];for(const d of this.seq)d.type===t.SAMPLER_2D_SHADOW||d.type===t.SAMPLER_CUBE_SHADOW||d.type===t.SAMPLER_2D_ARRAY_SHADOW?l.push(d):c.push(d);l.length>0&&(this.seq=l.concat(c))}setValue(t,i,s,l){const c=this.map[i];c!==void 0&&c.setValue(t,s,l)}setOptional(t,i,s){const l=i[s];l!==void 0&&this.setValue(t,s,l)}static upload(t,i,s,l){for(let c=0,d=i.length;c!==d;++c){const h=i[c],p=s[h.id];p.needsUpdate!==!1&&h.setValue(t,p.value,l)}}static seqWithValue(t,i){const s=[];for(let l=0,c=t.length;l!==c;++l){const d=t[l];d.id in i&&s.push(d)}return s}}function B1(a,t,i){const s=a.createShader(t);return a.shaderSource(s,i),a.compileShader(s),s}const NL=37297;let UL=0;function LL(a,t){const i=a.split(`
`),s=[],l=Math.max(t-6,0),c=Math.min(t+6,i.length);for(let d=l;d<c;d++){const h=d+1;s.push(`${h===t?">":" "} ${h}: ${i[d]}`)}return s.join(`
`)}const H1=new _e;function OL(a){Oe._getMatrix(H1,Oe.workingColorSpace,a);const t=`mat3( ${H1.elements.map(i=>i.toFixed(4))} )`;switch(Oe.getTransfer(a)){case Hd:return[t,"LinearTransferOETF"];case $e:return[t,"sRGBTransferOETF"];default:return de("WebGLProgram: Unsupported color space: ",a),[t,"LinearTransferOETF"]}}function G1(a,t,i){const s=a.getShaderParameter(t,a.COMPILE_STATUS),c=(a.getShaderInfoLog(t)||"").trim();if(s&&c==="")return"";const d=/ERROR: 0:(\d+)/.exec(c);if(d){const h=parseInt(d[1]);return i.toUpperCase()+`

`+c+`

`+LL(a.getShaderSource(t),h)}else return c}function PL(a,t){const i=OL(t);return[`vec4 ${a}( vec4 value ) {`,`	return ${i[1]}( vec4( value.rgb * ${i[0]}, value.a ) );`,"}"].join(`
`)}const zL={[$b]:"Linear",[Jb]:"Reinhard",[tE]:"Cineon",[eE]:"ACESFilmic",[iE]:"AgX",[aE]:"Neutral",[nE]:"Custom"};function IL(a,t){const i=zL[t];return i===void 0?(de("WebGLProgram: Unsupported toneMapping:",t),"vec3 "+a+"( vec3 color ) { return LinearToneMapping( color ); }"):"vec3 "+a+"( vec3 color ) { return "+i+"ToneMapping( color ); }"}const fd=new ut;function FL(){Oe.getLuminanceCoefficients(fd);const a=fd.x.toFixed(4),t=fd.y.toFixed(4),i=fd.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${a}, ${t}, ${i} );`,"	return dot( weights, rgb );","}"].join(`
`)}function BL(a){return[a.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",a.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(eu).join(`
`)}function HL(a){const t=[];for(const i in a){const s=a[i];s!==!1&&t.push("#define "+i+" "+s)}return t.join(`
`)}function GL(a,t){const i={},s=a.getProgramParameter(t,a.ACTIVE_ATTRIBUTES);for(let l=0;l<s;l++){const c=a.getActiveAttrib(t,l),d=c.name;let h=1;c.type===a.FLOAT_MAT2&&(h=2),c.type===a.FLOAT_MAT3&&(h=3),c.type===a.FLOAT_MAT4&&(h=4),i[d]={type:c.type,location:a.getAttribLocation(t,d),locationSize:h}}return i}function eu(a){return a!==""}function V1(a,t){const i=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return a.replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,i).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows)}function k1(a,t){return a.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}const VL=/^[ \t]*#include +<([\w\d./]+)>/gm;function kg(a){return a.replace(VL,XL)}const kL=new Map;function XL(a,t){let i=Te[t];if(i===void 0){const s=kL.get(t);if(s!==void 0)i=Te[s],de('WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',t,s);else throw new Error("Can not resolve #include <"+t+">")}return kg(i)}const qL=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function X1(a){return a.replace(qL,WL)}function WL(a,t,i,s){let l="";for(let c=parseInt(t);c<parseInt(i);c++)l+=s.replace(/\[\s*i\s*\]/g,"[ "+c+" ]").replace(/UNROLLED_LOOP_INDEX/g,c);return l}function q1(a){let t=`precision ${a.precision} float;
	precision ${a.precision} int;
	precision ${a.precision} sampler2D;
	precision ${a.precision} samplerCube;
	precision ${a.precision} sampler3D;
	precision ${a.precision} sampler2DArray;
	precision ${a.precision} sampler2DShadow;
	precision ${a.precision} samplerCubeShadow;
	precision ${a.precision} sampler2DArrayShadow;
	precision ${a.precision} isampler2D;
	precision ${a.precision} isampler3D;
	precision ${a.precision} isamplerCube;
	precision ${a.precision} isampler2DArray;
	precision ${a.precision} usampler2D;
	precision ${a.precision} usampler3D;
	precision ${a.precision} usamplerCube;
	precision ${a.precision} usampler2DArray;
	`;return a.precision==="highp"?t+=`
#define HIGH_PRECISION`:a.precision==="mediump"?t+=`
#define MEDIUM_PRECISION`:a.precision==="lowp"&&(t+=`
#define LOW_PRECISION`),t}const jL={[Td]:"SHADOWMAP_TYPE_PCF",[tu]:"SHADOWMAP_TYPE_VSM"};function YL(a){return jL[a.shadowMapType]||"SHADOWMAP_TYPE_BASIC"}const ZL={[no]:"ENVMAP_TYPE_CUBE",[Ll]:"ENVMAP_TYPE_CUBE",[th]:"ENVMAP_TYPE_CUBE_UV"};function QL(a){return a.envMap===!1?"ENVMAP_TYPE_CUBE":ZL[a.envMapMode]||"ENVMAP_TYPE_CUBE"}const KL={[Ll]:"ENVMAP_MODE_REFRACTION"};function $L(a){return a.envMap===!1?"ENVMAP_MODE_REFLECTION":KL[a.envMapMode]||"ENVMAP_MODE_REFLECTION"}const JL={[Kb]:"ENVMAP_BLENDING_MULTIPLY",[kR]:"ENVMAP_BLENDING_MIX",[XR]:"ENVMAP_BLENDING_ADD"};function tO(a){return a.envMap===!1?"ENVMAP_BLENDING_NONE":JL[a.combine]||"ENVMAP_BLENDING_NONE"}function eO(a){const t=a.envMapCubeUVHeight;if(t===null)return null;const i=Math.log2(t)-2,s=1/t;return{texelWidth:1/(3*Math.max(Math.pow(2,i),112)),texelHeight:s,maxMip:i}}function nO(a,t,i,s){const l=a.getContext(),c=i.defines;let d=i.vertexShader,h=i.fragmentShader;const p=YL(i),m=QL(i),_=$L(i),g=tO(i),v=eO(i),y=BL(i),b=HL(c),C=l.createProgram();let S,M,R=i.glslVersion?"#version "+i.glslVersion+`
`:"";i.isRawShaderMaterial?(S=["#define SHADER_TYPE "+i.shaderType,"#define SHADER_NAME "+i.shaderName,b].filter(eu).join(`
`),S.length>0&&(S+=`
`),M=["#define SHADER_TYPE "+i.shaderType,"#define SHADER_NAME "+i.shaderName,b].filter(eu).join(`
`),M.length>0&&(M+=`
`)):(S=[q1(i),"#define SHADER_TYPE "+i.shaderType,"#define SHADER_NAME "+i.shaderName,b,i.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",i.batching?"#define USE_BATCHING":"",i.batchingColor?"#define USE_BATCHING_COLOR":"",i.instancing?"#define USE_INSTANCING":"",i.instancingColor?"#define USE_INSTANCING_COLOR":"",i.instancingMorph?"#define USE_INSTANCING_MORPH":"",i.useFog&&i.fog?"#define USE_FOG":"",i.useFog&&i.fogExp2?"#define FOG_EXP2":"",i.map?"#define USE_MAP":"",i.envMap?"#define USE_ENVMAP":"",i.envMap?"#define "+_:"",i.lightMap?"#define USE_LIGHTMAP":"",i.aoMap?"#define USE_AOMAP":"",i.bumpMap?"#define USE_BUMPMAP":"",i.normalMap?"#define USE_NORMALMAP":"",i.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",i.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",i.displacementMap?"#define USE_DISPLACEMENTMAP":"",i.emissiveMap?"#define USE_EMISSIVEMAP":"",i.anisotropy?"#define USE_ANISOTROPY":"",i.anisotropyMap?"#define USE_ANISOTROPYMAP":"",i.clearcoatMap?"#define USE_CLEARCOATMAP":"",i.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",i.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",i.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",i.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",i.specularMap?"#define USE_SPECULARMAP":"",i.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",i.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",i.roughnessMap?"#define USE_ROUGHNESSMAP":"",i.metalnessMap?"#define USE_METALNESSMAP":"",i.alphaMap?"#define USE_ALPHAMAP":"",i.alphaHash?"#define USE_ALPHAHASH":"",i.transmission?"#define USE_TRANSMISSION":"",i.transmissionMap?"#define USE_TRANSMISSIONMAP":"",i.thicknessMap?"#define USE_THICKNESSMAP":"",i.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",i.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",i.mapUv?"#define MAP_UV "+i.mapUv:"",i.alphaMapUv?"#define ALPHAMAP_UV "+i.alphaMapUv:"",i.lightMapUv?"#define LIGHTMAP_UV "+i.lightMapUv:"",i.aoMapUv?"#define AOMAP_UV "+i.aoMapUv:"",i.emissiveMapUv?"#define EMISSIVEMAP_UV "+i.emissiveMapUv:"",i.bumpMapUv?"#define BUMPMAP_UV "+i.bumpMapUv:"",i.normalMapUv?"#define NORMALMAP_UV "+i.normalMapUv:"",i.displacementMapUv?"#define DISPLACEMENTMAP_UV "+i.displacementMapUv:"",i.metalnessMapUv?"#define METALNESSMAP_UV "+i.metalnessMapUv:"",i.roughnessMapUv?"#define ROUGHNESSMAP_UV "+i.roughnessMapUv:"",i.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+i.anisotropyMapUv:"",i.clearcoatMapUv?"#define CLEARCOATMAP_UV "+i.clearcoatMapUv:"",i.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+i.clearcoatNormalMapUv:"",i.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+i.clearcoatRoughnessMapUv:"",i.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+i.iridescenceMapUv:"",i.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+i.iridescenceThicknessMapUv:"",i.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+i.sheenColorMapUv:"",i.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+i.sheenRoughnessMapUv:"",i.specularMapUv?"#define SPECULARMAP_UV "+i.specularMapUv:"",i.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+i.specularColorMapUv:"",i.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+i.specularIntensityMapUv:"",i.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+i.transmissionMapUv:"",i.thicknessMapUv?"#define THICKNESSMAP_UV "+i.thicknessMapUv:"",i.vertexTangents&&i.flatShading===!1?"#define USE_TANGENT":"",i.vertexNormals?"#define HAS_NORMAL":"",i.vertexColors?"#define USE_COLOR":"",i.vertexAlphas?"#define USE_COLOR_ALPHA":"",i.vertexUv1s?"#define USE_UV1":"",i.vertexUv2s?"#define USE_UV2":"",i.vertexUv3s?"#define USE_UV3":"",i.pointsUvs?"#define USE_POINTS_UV":"",i.flatShading?"#define FLAT_SHADED":"",i.skinning?"#define USE_SKINNING":"",i.morphTargets?"#define USE_MORPHTARGETS":"",i.morphNormals&&i.flatShading===!1?"#define USE_MORPHNORMALS":"",i.morphColors?"#define USE_MORPHCOLORS":"",i.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+i.morphTextureStride:"",i.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+i.morphTargetsCount:"",i.doubleSided?"#define DOUBLE_SIDED":"",i.flipSided?"#define FLIP_SIDED":"",i.shadowMapEnabled?"#define USE_SHADOWMAP":"",i.shadowMapEnabled?"#define "+p:"",i.sizeAttenuation?"#define USE_SIZEATTENUATION":"",i.numLightProbes>0?"#define USE_LIGHT_PROBES":"",i.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",i.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(eu).join(`
`),M=[q1(i),"#define SHADER_TYPE "+i.shaderType,"#define SHADER_NAME "+i.shaderName,b,i.useFog&&i.fog?"#define USE_FOG":"",i.useFog&&i.fogExp2?"#define FOG_EXP2":"",i.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",i.map?"#define USE_MAP":"",i.matcap?"#define USE_MATCAP":"",i.envMap?"#define USE_ENVMAP":"",i.envMap?"#define "+m:"",i.envMap?"#define "+_:"",i.envMap?"#define "+g:"",v?"#define CUBEUV_TEXEL_WIDTH "+v.texelWidth:"",v?"#define CUBEUV_TEXEL_HEIGHT "+v.texelHeight:"",v?"#define CUBEUV_MAX_MIP "+v.maxMip+".0":"",i.lightMap?"#define USE_LIGHTMAP":"",i.aoMap?"#define USE_AOMAP":"",i.bumpMap?"#define USE_BUMPMAP":"",i.normalMap?"#define USE_NORMALMAP":"",i.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",i.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",i.packedNormalMap?"#define USE_PACKED_NORMALMAP":"",i.emissiveMap?"#define USE_EMISSIVEMAP":"",i.anisotropy?"#define USE_ANISOTROPY":"",i.anisotropyMap?"#define USE_ANISOTROPYMAP":"",i.clearcoat?"#define USE_CLEARCOAT":"",i.clearcoatMap?"#define USE_CLEARCOATMAP":"",i.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",i.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",i.dispersion?"#define USE_DISPERSION":"",i.iridescence?"#define USE_IRIDESCENCE":"",i.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",i.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",i.specularMap?"#define USE_SPECULARMAP":"",i.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",i.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",i.roughnessMap?"#define USE_ROUGHNESSMAP":"",i.metalnessMap?"#define USE_METALNESSMAP":"",i.alphaMap?"#define USE_ALPHAMAP":"",i.alphaTest?"#define USE_ALPHATEST":"",i.alphaHash?"#define USE_ALPHAHASH":"",i.sheen?"#define USE_SHEEN":"",i.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",i.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",i.transmission?"#define USE_TRANSMISSION":"",i.transmissionMap?"#define USE_TRANSMISSIONMAP":"",i.thicknessMap?"#define USE_THICKNESSMAP":"",i.vertexTangents&&i.flatShading===!1?"#define USE_TANGENT":"",i.vertexColors||i.instancingColor?"#define USE_COLOR":"",i.vertexAlphas||i.batchingColor?"#define USE_COLOR_ALPHA":"",i.vertexUv1s?"#define USE_UV1":"",i.vertexUv2s?"#define USE_UV2":"",i.vertexUv3s?"#define USE_UV3":"",i.pointsUvs?"#define USE_POINTS_UV":"",i.gradientMap?"#define USE_GRADIENTMAP":"",i.flatShading?"#define FLAT_SHADED":"",i.doubleSided?"#define DOUBLE_SIDED":"",i.flipSided?"#define FLIP_SIDED":"",i.shadowMapEnabled?"#define USE_SHADOWMAP":"",i.shadowMapEnabled?"#define "+p:"",i.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",i.numLightProbes>0?"#define USE_LIGHT_PROBES":"",i.numLightProbeGrids>0?"#define USE_LIGHT_PROBES_GRID":"",i.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",i.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",i.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",i.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",i.toneMapping!==Ba?"#define TONE_MAPPING":"",i.toneMapping!==Ba?Te.tonemapping_pars_fragment:"",i.toneMapping!==Ba?IL("toneMapping",i.toneMapping):"",i.dithering?"#define DITHERING":"",i.opaque?"#define OPAQUE":"",Te.colorspace_pars_fragment,PL("linearToOutputTexel",i.outputColorSpace),FL(),i.useDepthPacking?"#define DEPTH_PACKING "+i.depthPacking:"",`
`].filter(eu).join(`
`)),d=kg(d),d=V1(d,i),d=k1(d,i),h=kg(h),h=V1(h,i),h=k1(h,i),d=X1(d),h=X1(h),i.isRawShaderMaterial!==!0&&(R=`#version 300 es
`,S=[y,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+S,M=["#define varying in",i.glslVersion===s1?"":"layout(location = 0) out highp vec4 pc_fragColor;",i.glslVersion===s1?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+M);const P=R+S+d,N=R+M+h,H=B1(l,l.VERTEX_SHADER,P),U=B1(l,l.FRAGMENT_SHADER,N);l.attachShader(C,H),l.attachShader(C,U),i.index0AttributeName!==void 0?l.bindAttribLocation(C,0,i.index0AttributeName):i.morphTargets===!0&&l.bindAttribLocation(C,0,"position"),l.linkProgram(C);function L(z){if(a.debug.checkShaderErrors){const Z=l.getProgramInfoLog(C)||"",tt=l.getShaderInfoLog(H)||"",ft=l.getShaderInfoLog(U)||"",X=Z.trim(),B=tt.trim(),W=ft.trim();let J=!0,dt=!0;if(l.getProgramParameter(C,l.LINK_STATUS)===!1)if(J=!1,typeof a.debug.onShaderError=="function")a.debug.onShaderError(l,C,H,U);else{const pt=G1(l,H,"vertex"),Tt=G1(l,U,"fragment");Be("THREE.WebGLProgram: Shader Error "+l.getError()+" - VALIDATE_STATUS "+l.getProgramParameter(C,l.VALIDATE_STATUS)+`

Material Name: `+z.name+`
Material Type: `+z.type+`

Program Info Log: `+X+`
`+pt+`
`+Tt)}else X!==""?de("WebGLProgram: Program Info Log:",X):(B===""||W==="")&&(dt=!1);dt&&(z.diagnostics={runnable:J,programLog:X,vertexShader:{log:B,prefix:S},fragmentShader:{log:W,prefix:M}})}l.deleteShader(H),l.deleteShader(U),E=new Dd(l,C),O=GL(l,C)}let E;this.getUniforms=function(){return E===void 0&&L(this),E};let O;this.getAttributes=function(){return O===void 0&&L(this),O};let V=i.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return V===!1&&(V=l.getProgramParameter(C,NL)),V},this.destroy=function(){s.releaseStatesOfProgram(this),l.deleteProgram(C),this.program=void 0},this.type=i.shaderType,this.name=i.shaderName,this.id=UL++,this.cacheKey=t,this.usedTimes=1,this.program=C,this.vertexShader=H,this.fragmentShader=U,this}let iO=0;class aO{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(t){const i=t.vertexShader,s=t.fragmentShader,l=this._getShaderStage(i),c=this._getShaderStage(s),d=this._getShaderCacheForMaterial(t);return d.has(l)===!1&&(d.add(l),l.usedTimes++),d.has(c)===!1&&(d.add(c),c.usedTimes++),this}remove(t){const i=this.materialCache.get(t);for(const s of i)s.usedTimes--,s.usedTimes===0&&this.shaderCache.delete(s.code);return this.materialCache.delete(t),this}getVertexShaderID(t){return this._getShaderStage(t.vertexShader).id}getFragmentShaderID(t){return this._getShaderStage(t.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(t){const i=this.materialCache;let s=i.get(t);return s===void 0&&(s=new Set,i.set(t,s)),s}_getShaderStage(t){const i=this.shaderCache;let s=i.get(t);return s===void 0&&(s=new rO(t),i.set(t,s)),s}}class rO{constructor(t){this.id=iO++,this.code=t,this.usedTimes=0}}function sO(a){return a===io||a===Id||a===Fd}function oO(a,t,i,s,l,c){const d=new mE,h=new aO,p=new Set,m=[],_=new Map,g=s.logarithmicDepthBuffer;let v=s.precision;const y={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distance",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function b(E){return p.add(E),E===0?"uv":`uv${E}`}function C(E,O,V,z,Z,tt){const ft=z.fog,X=Z.geometry,B=E.isMeshStandardMaterial||E.isMeshLambertMaterial||E.isMeshPhongMaterial?z.environment:null,W=E.isMeshStandardMaterial||E.isMeshLambertMaterial&&!E.envMap||E.isMeshPhongMaterial&&!E.envMap,J=t.get(E.envMap||B,W),dt=J&&J.mapping===th?J.image.height:null,pt=y[E.type];E.precision!==null&&(v=s.getMaxPrecision(E.precision),v!==E.precision&&de("WebGLProgram.getParameters:",E.precision,"not supported, using",v,"instead."));const Tt=X.morphAttributes.position||X.morphAttributes.normal||X.morphAttributes.color,zt=Tt!==void 0?Tt.length:0;let re=0;X.morphAttributes.position!==void 0&&(re=1),X.morphAttributes.normal!==void 0&&(re=2),X.morphAttributes.color!==void 0&&(re=3);let F,lt,et,ht;if(pt){const ae=Ua[pt];F=ae.vertexShader,lt=ae.fragmentShader}else F=E.vertexShader,lt=E.fragmentShader,h.update(E),et=h.getVertexShaderID(E),ht=h.getFragmentShaderID(E);const yt=a.getRenderTarget(),Rt=a.state.buffers.depth.getReversed(),Dt=Z.isInstancedMesh===!0,Mt=Z.isBatchedMesh===!0,kt=!!E.map,he=!!E.matcap,He=!!J,Ge=!!E.aoMap,ce=!!E.lightMap,Re=!!E.bumpMap,oe=!!E.normalMap,dn=!!E.displacementMap,Y=!!E.emissiveMap,tn=!!E.metalnessMap,Me=!!E.roughnessMap,Ve=E.anisotropy>0,Ot=E.clearcoat>0,on=E.dispersion>0,D=E.iridescence>0,T=E.sheen>0,it=E.transmission>0,gt=Ve&&!!E.anisotropyMap,bt=Ot&&!!E.clearcoatMap,wt=Ot&&!!E.clearcoatNormalMap,Lt=Ot&&!!E.clearcoatRoughnessMap,mt=D&&!!E.iridescenceMap,St=D&&!!E.iridescenceThicknessMap,Bt=T&&!!E.sheenColorMap,Xt=T&&!!E.sheenRoughnessMap,Nt=!!E.specularMap,Ct=!!E.specularColorMap,ne=!!E.specularIntensityMap,ve=it&&!!E.transmissionMap,Le=it&&!!E.thicknessMap,q=!!E.gradientMap,At=!!E.alphaMap,xt=E.alphaTest>0,Vt=!!E.alphaHash,Ut=!!E.extensions;let Et=Ba;E.toneMapped&&(yt===null||yt.isXRRenderTarget===!0)&&(Et=a.toneMapping);const Zt={shaderID:pt,shaderType:E.type,shaderName:E.name,vertexShader:F,fragmentShader:lt,defines:E.defines,customVertexShaderID:et,customFragmentShaderID:ht,isRawShaderMaterial:E.isRawShaderMaterial===!0,glslVersion:E.glslVersion,precision:v,batching:Mt,batchingColor:Mt&&Z._colorsTexture!==null,instancing:Dt,instancingColor:Dt&&Z.instanceColor!==null,instancingMorph:Dt&&Z.morphTexture!==null,outputColorSpace:yt===null?a.outputColorSpace:yt.isXRRenderTarget===!0?yt.texture.colorSpace:Oe.workingColorSpace,alphaToCoverage:!!E.alphaToCoverage,map:kt,matcap:he,envMap:He,envMapMode:He&&J.mapping,envMapCubeUVHeight:dt,aoMap:Ge,lightMap:ce,bumpMap:Re,normalMap:oe,displacementMap:dn,emissiveMap:Y,normalMapObjectSpace:oe&&E.normalMapType===jR,normalMapTangentSpace:oe&&E.normalMapType===i1,packedNormalMap:oe&&E.normalMapType===i1&&sO(E.normalMap.format),metalnessMap:tn,roughnessMap:Me,anisotropy:Ve,anisotropyMap:gt,clearcoat:Ot,clearcoatMap:bt,clearcoatNormalMap:wt,clearcoatRoughnessMap:Lt,dispersion:on,iridescence:D,iridescenceMap:mt,iridescenceThicknessMap:St,sheen:T,sheenColorMap:Bt,sheenRoughnessMap:Xt,specularMap:Nt,specularColorMap:Ct,specularIntensityMap:ne,transmission:it,transmissionMap:ve,thicknessMap:Le,gradientMap:q,opaque:E.transparent===!1&&E.blending===Tl&&E.alphaToCoverage===!1,alphaMap:At,alphaTest:xt,alphaHash:Vt,combine:E.combine,mapUv:kt&&b(E.map.channel),aoMapUv:Ge&&b(E.aoMap.channel),lightMapUv:ce&&b(E.lightMap.channel),bumpMapUv:Re&&b(E.bumpMap.channel),normalMapUv:oe&&b(E.normalMap.channel),displacementMapUv:dn&&b(E.displacementMap.channel),emissiveMapUv:Y&&b(E.emissiveMap.channel),metalnessMapUv:tn&&b(E.metalnessMap.channel),roughnessMapUv:Me&&b(E.roughnessMap.channel),anisotropyMapUv:gt&&b(E.anisotropyMap.channel),clearcoatMapUv:bt&&b(E.clearcoatMap.channel),clearcoatNormalMapUv:wt&&b(E.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:Lt&&b(E.clearcoatRoughnessMap.channel),iridescenceMapUv:mt&&b(E.iridescenceMap.channel),iridescenceThicknessMapUv:St&&b(E.iridescenceThicknessMap.channel),sheenColorMapUv:Bt&&b(E.sheenColorMap.channel),sheenRoughnessMapUv:Xt&&b(E.sheenRoughnessMap.channel),specularMapUv:Nt&&b(E.specularMap.channel),specularColorMapUv:Ct&&b(E.specularColorMap.channel),specularIntensityMapUv:ne&&b(E.specularIntensityMap.channel),transmissionMapUv:ve&&b(E.transmissionMap.channel),thicknessMapUv:Le&&b(E.thicknessMap.channel),alphaMapUv:At&&b(E.alphaMap.channel),vertexTangents:!!X.attributes.tangent&&(oe||Ve),vertexNormals:!!X.attributes.normal,vertexColors:E.vertexColors,vertexAlphas:E.vertexColors===!0&&!!X.attributes.color&&X.attributes.color.itemSize===4,pointsUvs:Z.isPoints===!0&&!!X.attributes.uv&&(kt||At),fog:!!ft,useFog:E.fog===!0,fogExp2:!!ft&&ft.isFogExp2,flatShading:E.wireframe===!1&&(E.flatShading===!0||X.attributes.normal===void 0&&oe===!1&&(E.isMeshLambertMaterial||E.isMeshPhongMaterial||E.isMeshStandardMaterial||E.isMeshPhysicalMaterial)),sizeAttenuation:E.sizeAttenuation===!0,logarithmicDepthBuffer:g,reversedDepthBuffer:Rt,skinning:Z.isSkinnedMesh===!0,morphTargets:X.morphAttributes.position!==void 0,morphNormals:X.morphAttributes.normal!==void 0,morphColors:X.morphAttributes.color!==void 0,morphTargetsCount:zt,morphTextureStride:re,numDirLights:O.directional.length,numPointLights:O.point.length,numSpotLights:O.spot.length,numSpotLightMaps:O.spotLightMap.length,numRectAreaLights:O.rectArea.length,numHemiLights:O.hemi.length,numDirLightShadows:O.directionalShadowMap.length,numPointLightShadows:O.pointShadowMap.length,numSpotLightShadows:O.spotShadowMap.length,numSpotLightShadowsWithMaps:O.numSpotLightShadowsWithMaps,numLightProbes:O.numLightProbes,numLightProbeGrids:tt.length,numClippingPlanes:c.numPlanes,numClipIntersection:c.numIntersection,dithering:E.dithering,shadowMapEnabled:a.shadowMap.enabled&&V.length>0,shadowMapType:a.shadowMap.type,toneMapping:Et,decodeVideoTexture:kt&&E.map.isVideoTexture===!0&&Oe.getTransfer(E.map.colorSpace)===$e,decodeVideoTextureEmissive:Y&&E.emissiveMap.isVideoTexture===!0&&Oe.getTransfer(E.emissiveMap.colorSpace)===$e,premultipliedAlpha:E.premultipliedAlpha,doubleSided:E.side===dr,flipSided:E.side===yi,useDepthPacking:E.depthPacking>=0,depthPacking:E.depthPacking||0,index0AttributeName:E.index0AttributeName,extensionClipCullDistance:Ut&&E.extensions.clipCullDistance===!0&&i.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(Ut&&E.extensions.multiDraw===!0||Mt)&&i.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:i.has("KHR_parallel_shader_compile"),customProgramCacheKey:E.customProgramCacheKey()};return Zt.vertexUv1s=p.has(1),Zt.vertexUv2s=p.has(2),Zt.vertexUv3s=p.has(3),p.clear(),Zt}function S(E){const O=[];if(E.shaderID?O.push(E.shaderID):(O.push(E.customVertexShaderID),O.push(E.customFragmentShaderID)),E.defines!==void 0)for(const V in E.defines)O.push(V),O.push(E.defines[V]);return E.isRawShaderMaterial===!1&&(M(O,E),R(O,E),O.push(a.outputColorSpace)),O.push(E.customProgramCacheKey),O.join()}function M(E,O){E.push(O.precision),E.push(O.outputColorSpace),E.push(O.envMapMode),E.push(O.envMapCubeUVHeight),E.push(O.mapUv),E.push(O.alphaMapUv),E.push(O.lightMapUv),E.push(O.aoMapUv),E.push(O.bumpMapUv),E.push(O.normalMapUv),E.push(O.displacementMapUv),E.push(O.emissiveMapUv),E.push(O.metalnessMapUv),E.push(O.roughnessMapUv),E.push(O.anisotropyMapUv),E.push(O.clearcoatMapUv),E.push(O.clearcoatNormalMapUv),E.push(O.clearcoatRoughnessMapUv),E.push(O.iridescenceMapUv),E.push(O.iridescenceThicknessMapUv),E.push(O.sheenColorMapUv),E.push(O.sheenRoughnessMapUv),E.push(O.specularMapUv),E.push(O.specularColorMapUv),E.push(O.specularIntensityMapUv),E.push(O.transmissionMapUv),E.push(O.thicknessMapUv),E.push(O.combine),E.push(O.fogExp2),E.push(O.sizeAttenuation),E.push(O.morphTargetsCount),E.push(O.morphAttributeCount),E.push(O.numDirLights),E.push(O.numPointLights),E.push(O.numSpotLights),E.push(O.numSpotLightMaps),E.push(O.numHemiLights),E.push(O.numRectAreaLights),E.push(O.numDirLightShadows),E.push(O.numPointLightShadows),E.push(O.numSpotLightShadows),E.push(O.numSpotLightShadowsWithMaps),E.push(O.numLightProbes),E.push(O.shadowMapType),E.push(O.toneMapping),E.push(O.numClippingPlanes),E.push(O.numClipIntersection),E.push(O.depthPacking)}function R(E,O){d.disableAll(),O.instancing&&d.enable(0),O.instancingColor&&d.enable(1),O.instancingMorph&&d.enable(2),O.matcap&&d.enable(3),O.envMap&&d.enable(4),O.normalMapObjectSpace&&d.enable(5),O.normalMapTangentSpace&&d.enable(6),O.clearcoat&&d.enable(7),O.iridescence&&d.enable(8),O.alphaTest&&d.enable(9),O.vertexColors&&d.enable(10),O.vertexAlphas&&d.enable(11),O.vertexUv1s&&d.enable(12),O.vertexUv2s&&d.enable(13),O.vertexUv3s&&d.enable(14),O.vertexTangents&&d.enable(15),O.anisotropy&&d.enable(16),O.alphaHash&&d.enable(17),O.batching&&d.enable(18),O.dispersion&&d.enable(19),O.batchingColor&&d.enable(20),O.gradientMap&&d.enable(21),O.packedNormalMap&&d.enable(22),O.vertexNormals&&d.enable(23),E.push(d.mask),d.disableAll(),O.fog&&d.enable(0),O.useFog&&d.enable(1),O.flatShading&&d.enable(2),O.logarithmicDepthBuffer&&d.enable(3),O.reversedDepthBuffer&&d.enable(4),O.skinning&&d.enable(5),O.morphTargets&&d.enable(6),O.morphNormals&&d.enable(7),O.morphColors&&d.enable(8),O.premultipliedAlpha&&d.enable(9),O.shadowMapEnabled&&d.enable(10),O.doubleSided&&d.enable(11),O.flipSided&&d.enable(12),O.useDepthPacking&&d.enable(13),O.dithering&&d.enable(14),O.transmission&&d.enable(15),O.sheen&&d.enable(16),O.opaque&&d.enable(17),O.pointsUvs&&d.enable(18),O.decodeVideoTexture&&d.enable(19),O.decodeVideoTextureEmissive&&d.enable(20),O.alphaToCoverage&&d.enable(21),O.numLightProbeGrids>0&&d.enable(22),E.push(d.mask)}function P(E){const O=y[E.type];let V;if(O){const z=Ua[O];V=NC.clone(z.uniforms)}else V=E.uniforms;return V}function N(E,O){let V=_.get(O);return V!==void 0?++V.usedTimes:(V=new nO(a,O,E,l),m.push(V),_.set(O,V)),V}function H(E){if(--E.usedTimes===0){const O=m.indexOf(E);m[O]=m[m.length-1],m.pop(),_.delete(E.cacheKey),E.destroy()}}function U(E){h.remove(E)}function L(){h.dispose()}return{getParameters:C,getProgramCacheKey:S,getUniforms:P,acquireProgram:N,releaseProgram:H,releaseShaderCache:U,programs:m,dispose:L}}function lO(){let a=new WeakMap;function t(d){return a.has(d)}function i(d){let h=a.get(d);return h===void 0&&(h={},a.set(d,h)),h}function s(d){a.delete(d)}function l(d,h,p){a.get(d)[h]=p}function c(){a=new WeakMap}return{has:t,get:i,remove:s,update:l,dispose:c}}function cO(a,t){return a.groupOrder!==t.groupOrder?a.groupOrder-t.groupOrder:a.renderOrder!==t.renderOrder?a.renderOrder-t.renderOrder:a.material.id!==t.material.id?a.material.id-t.material.id:a.materialVariant!==t.materialVariant?a.materialVariant-t.materialVariant:a.z!==t.z?a.z-t.z:a.id-t.id}function W1(a,t){return a.groupOrder!==t.groupOrder?a.groupOrder-t.groupOrder:a.renderOrder!==t.renderOrder?a.renderOrder-t.renderOrder:a.z!==t.z?t.z-a.z:a.id-t.id}function j1(){const a=[];let t=0;const i=[],s=[],l=[];function c(){t=0,i.length=0,s.length=0,l.length=0}function d(v){let y=0;return v.isInstancedMesh&&(y+=2),v.isSkinnedMesh&&(y+=1),y}function h(v,y,b,C,S,M){let R=a[t];return R===void 0?(R={id:v.id,object:v,geometry:y,material:b,materialVariant:d(v),groupOrder:C,renderOrder:v.renderOrder,z:S,group:M},a[t]=R):(R.id=v.id,R.object=v,R.geometry=y,R.material=b,R.materialVariant=d(v),R.groupOrder=C,R.renderOrder=v.renderOrder,R.z=S,R.group=M),t++,R}function p(v,y,b,C,S,M){const R=h(v,y,b,C,S,M);b.transmission>0?s.push(R):b.transparent===!0?l.push(R):i.push(R)}function m(v,y,b,C,S,M){const R=h(v,y,b,C,S,M);b.transmission>0?s.unshift(R):b.transparent===!0?l.unshift(R):i.unshift(R)}function _(v,y){i.length>1&&i.sort(v||cO),s.length>1&&s.sort(y||W1),l.length>1&&l.sort(y||W1)}function g(){for(let v=t,y=a.length;v<y;v++){const b=a[v];if(b.id===null)break;b.id=null,b.object=null,b.geometry=null,b.material=null,b.group=null}}return{opaque:i,transmissive:s,transparent:l,init:c,push:p,unshift:m,finish:g,sort:_}}function uO(){let a=new WeakMap;function t(s,l){const c=a.get(s);let d;return c===void 0?(d=new j1,a.set(s,[d])):l>=c.length?(d=new j1,c.push(d)):d=c[l],d}function i(){a=new WeakMap}return{get:t,dispose:i}}function fO(){const a={};return{get:function(t){if(a[t.id]!==void 0)return a[t.id];let i;switch(t.type){case"DirectionalLight":i={direction:new ut,color:new an};break;case"SpotLight":i={position:new ut,direction:new ut,color:new an,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":i={position:new ut,color:new an,distance:0,decay:0};break;case"HemisphereLight":i={direction:new ut,skyColor:new an,groundColor:new an};break;case"RectAreaLight":i={color:new an,position:new ut,halfWidth:new ut,halfHeight:new ut};break}return a[t.id]=i,i}}}function dO(){const a={};return{get:function(t){if(a[t.id]!==void 0)return a[t.id];let i;switch(t.type){case"DirectionalLight":i={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Je};break;case"SpotLight":i={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Je};break;case"PointLight":i={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Je,shadowCameraNear:1,shadowCameraFar:1e3};break}return a[t.id]=i,i}}}let hO=0;function pO(a,t){return(t.castShadow?2:0)-(a.castShadow?2:0)+(t.map?1:0)-(a.map?1:0)}function mO(a){const t=new fO,i=dO(),s={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let m=0;m<9;m++)s.probe.push(new ut);const l=new ut,c=new Nn,d=new Nn;function h(m){let _=0,g=0,v=0;for(let O=0;O<9;O++)s.probe[O].set(0,0,0);let y=0,b=0,C=0,S=0,M=0,R=0,P=0,N=0,H=0,U=0,L=0;m.sort(pO);for(let O=0,V=m.length;O<V;O++){const z=m[O],Z=z.color,tt=z.intensity,ft=z.distance;let X=null;if(z.shadow&&z.shadow.map&&(z.shadow.map.texture.format===io?X=z.shadow.map.texture:X=z.shadow.map.depthTexture||z.shadow.map.texture),z.isAmbientLight)_+=Z.r*tt,g+=Z.g*tt,v+=Z.b*tt;else if(z.isLightProbe){for(let B=0;B<9;B++)s.probe[B].addScaledVector(z.sh.coefficients[B],tt);L++}else if(z.isDirectionalLight){const B=t.get(z);if(B.color.copy(z.color).multiplyScalar(z.intensity),z.castShadow){const W=z.shadow,J=i.get(z);J.shadowIntensity=W.intensity,J.shadowBias=W.bias,J.shadowNormalBias=W.normalBias,J.shadowRadius=W.radius,J.shadowMapSize=W.mapSize,s.directionalShadow[y]=J,s.directionalShadowMap[y]=X,s.directionalShadowMatrix[y]=z.shadow.matrix,R++}s.directional[y]=B,y++}else if(z.isSpotLight){const B=t.get(z);B.position.setFromMatrixPosition(z.matrixWorld),B.color.copy(Z).multiplyScalar(tt),B.distance=ft,B.coneCos=Math.cos(z.angle),B.penumbraCos=Math.cos(z.angle*(1-z.penumbra)),B.decay=z.decay,s.spot[C]=B;const W=z.shadow;if(z.map&&(s.spotLightMap[H]=z.map,H++,W.updateMatrices(z),z.castShadow&&U++),s.spotLightMatrix[C]=W.matrix,z.castShadow){const J=i.get(z);J.shadowIntensity=W.intensity,J.shadowBias=W.bias,J.shadowNormalBias=W.normalBias,J.shadowRadius=W.radius,J.shadowMapSize=W.mapSize,s.spotShadow[C]=J,s.spotShadowMap[C]=X,N++}C++}else if(z.isRectAreaLight){const B=t.get(z);B.color.copy(Z).multiplyScalar(tt),B.halfWidth.set(z.width*.5,0,0),B.halfHeight.set(0,z.height*.5,0),s.rectArea[S]=B,S++}else if(z.isPointLight){const B=t.get(z);if(B.color.copy(z.color).multiplyScalar(z.intensity),B.distance=z.distance,B.decay=z.decay,z.castShadow){const W=z.shadow,J=i.get(z);J.shadowIntensity=W.intensity,J.shadowBias=W.bias,J.shadowNormalBias=W.normalBias,J.shadowRadius=W.radius,J.shadowMapSize=W.mapSize,J.shadowCameraNear=W.camera.near,J.shadowCameraFar=W.camera.far,s.pointShadow[b]=J,s.pointShadowMap[b]=X,s.pointShadowMatrix[b]=z.shadow.matrix,P++}s.point[b]=B,b++}else if(z.isHemisphereLight){const B=t.get(z);B.skyColor.copy(z.color).multiplyScalar(tt),B.groundColor.copy(z.groundColor).multiplyScalar(tt),s.hemi[M]=B,M++}}S>0&&(a.has("OES_texture_float_linear")===!0?(s.rectAreaLTC1=Gt.LTC_FLOAT_1,s.rectAreaLTC2=Gt.LTC_FLOAT_2):(s.rectAreaLTC1=Gt.LTC_HALF_1,s.rectAreaLTC2=Gt.LTC_HALF_2)),s.ambient[0]=_,s.ambient[1]=g,s.ambient[2]=v;const E=s.hash;(E.directionalLength!==y||E.pointLength!==b||E.spotLength!==C||E.rectAreaLength!==S||E.hemiLength!==M||E.numDirectionalShadows!==R||E.numPointShadows!==P||E.numSpotShadows!==N||E.numSpotMaps!==H||E.numLightProbes!==L)&&(s.directional.length=y,s.spot.length=C,s.rectArea.length=S,s.point.length=b,s.hemi.length=M,s.directionalShadow.length=R,s.directionalShadowMap.length=R,s.pointShadow.length=P,s.pointShadowMap.length=P,s.spotShadow.length=N,s.spotShadowMap.length=N,s.directionalShadowMatrix.length=R,s.pointShadowMatrix.length=P,s.spotLightMatrix.length=N+H-U,s.spotLightMap.length=H,s.numSpotLightShadowsWithMaps=U,s.numLightProbes=L,E.directionalLength=y,E.pointLength=b,E.spotLength=C,E.rectAreaLength=S,E.hemiLength=M,E.numDirectionalShadows=R,E.numPointShadows=P,E.numSpotShadows=N,E.numSpotMaps=H,E.numLightProbes=L,s.version=hO++)}function p(m,_){let g=0,v=0,y=0,b=0,C=0;const S=_.matrixWorldInverse;for(let M=0,R=m.length;M<R;M++){const P=m[M];if(P.isDirectionalLight){const N=s.directional[g];N.direction.setFromMatrixPosition(P.matrixWorld),l.setFromMatrixPosition(P.target.matrixWorld),N.direction.sub(l),N.direction.transformDirection(S),g++}else if(P.isSpotLight){const N=s.spot[y];N.position.setFromMatrixPosition(P.matrixWorld),N.position.applyMatrix4(S),N.direction.setFromMatrixPosition(P.matrixWorld),l.setFromMatrixPosition(P.target.matrixWorld),N.direction.sub(l),N.direction.transformDirection(S),y++}else if(P.isRectAreaLight){const N=s.rectArea[b];N.position.setFromMatrixPosition(P.matrixWorld),N.position.applyMatrix4(S),d.identity(),c.copy(P.matrixWorld),c.premultiply(S),d.extractRotation(c),N.halfWidth.set(P.width*.5,0,0),N.halfHeight.set(0,P.height*.5,0),N.halfWidth.applyMatrix4(d),N.halfHeight.applyMatrix4(d),b++}else if(P.isPointLight){const N=s.point[v];N.position.setFromMatrixPosition(P.matrixWorld),N.position.applyMatrix4(S),v++}else if(P.isHemisphereLight){const N=s.hemi[C];N.direction.setFromMatrixPosition(P.matrixWorld),N.direction.transformDirection(S),C++}}}return{setup:h,setupView:p,state:s}}function Y1(a){const t=new mO(a),i=[],s=[],l=[];function c(v){g.camera=v,i.length=0,s.length=0,l.length=0}function d(v){i.push(v)}function h(v){s.push(v)}function p(v){l.push(v)}function m(){t.setup(i)}function _(v){t.setupView(i,v)}const g={lightsArray:i,shadowsArray:s,lightProbeGridArray:l,camera:null,lights:t,transmissionRenderTarget:{},textureUnits:0};return{init:c,state:g,setupLights:m,setupLightsView:_,pushLight:d,pushShadow:h,pushLightProbeGrid:p}}function gO(a){let t=new WeakMap;function i(l,c=0){const d=t.get(l);let h;return d===void 0?(h=new Y1(a),t.set(l,[h])):c>=d.length?(h=new Y1(a),d.push(h)):h=d[c],h}function s(){t=new WeakMap}return{get:i,dispose:s}}const vO=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,_O=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ).rg;
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ).r;
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( max( 0.0, squared_mean - mean * mean ) );
	gl_FragColor = vec4( mean, std_dev, 0.0, 1.0 );
}`,xO=[new ut(1,0,0),new ut(-1,0,0),new ut(0,1,0),new ut(0,-1,0),new ut(0,0,1),new ut(0,0,-1)],yO=[new ut(0,-1,0),new ut(0,-1,0),new ut(0,0,1),new ut(0,0,-1),new ut(0,-1,0),new ut(0,-1,0)],Z1=new Nn,Vc=new ut,_0=new ut;function SO(a,t,i){let s=new xE;const l=new Je,c=new Je,d=new Mn,h=new PC,p=new zC,m={},_=i.maxTextureSize,g={[gr]:yi,[yi]:gr,[dr]:dr},v=new Xa({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Je},radius:{value:4}},vertexShader:vO,fragmentShader:_O}),y=v.clone();y.defines.HORIZONTAL_PASS=1;const b=new qa;b.setAttribute("position",new Ga(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const C=new ka(b,v),S=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Td;let M=this.type;this.render=function(U,L,E){if(S.enabled===!1||S.autoUpdate===!1&&S.needsUpdate===!1||U.length===0)return;this.type===ER&&(de("WebGLShadowMap: PCFSoftShadowMap has been deprecated. Using PCFShadowMap instead."),this.type=Td);const O=a.getRenderTarget(),V=a.getActiveCubeFace(),z=a.getActiveMipmapLevel(),Z=a.state;Z.setBlending(pr),Z.buffers.depth.getReversed()===!0?Z.buffers.color.setClear(0,0,0,0):Z.buffers.color.setClear(1,1,1,1),Z.buffers.depth.setTest(!0),Z.setScissorTest(!1);const tt=M!==this.type;tt&&L.traverse(function(ft){ft.material&&(Array.isArray(ft.material)?ft.material.forEach(X=>X.needsUpdate=!0):ft.material.needsUpdate=!0)});for(let ft=0,X=U.length;ft<X;ft++){const B=U[ft],W=B.shadow;if(W===void 0){de("WebGLShadowMap:",B,"has no shadow.");continue}if(W.autoUpdate===!1&&W.needsUpdate===!1)continue;l.copy(W.mapSize);const J=W.getFrameExtents();l.multiply(J),c.copy(W.mapSize),(l.x>_||l.y>_)&&(l.x>_&&(c.x=Math.floor(_/J.x),l.x=c.x*J.x,W.mapSize.x=c.x),l.y>_&&(c.y=Math.floor(_/J.y),l.y=c.y*J.y,W.mapSize.y=c.y));const dt=a.state.buffers.depth.getReversed();if(W.camera._reversedDepth=dt,W.map===null||tt===!0){if(W.map!==null&&(W.map.depthTexture!==null&&(W.map.depthTexture.dispose(),W.map.depthTexture=null),W.map.dispose()),this.type===tu){if(B.isPointLight){de("WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.");continue}W.map=new Ha(l.x,l.y,{format:io,type:vr,minFilter:ti,magFilter:ti,generateMipmaps:!1}),W.map.texture.name=B.name+".shadowMap",W.map.depthTexture=new Ol(l.x,l.y,Pa),W.map.depthTexture.name=B.name+".shadowMapDepth",W.map.depthTexture.format=_r,W.map.depthTexture.compareFunction=null,W.map.depthTexture.minFilter=Qn,W.map.depthTexture.magFilter=Qn}else B.isPointLight?(W.map=new RE(l.x),W.map.depthTexture=new CC(l.x,Va)):(W.map=new Ha(l.x,l.y),W.map.depthTexture=new Ol(l.x,l.y,Va)),W.map.depthTexture.name=B.name+".shadowMap",W.map.depthTexture.format=_r,this.type===Td?(W.map.depthTexture.compareFunction=dt?cv:lv,W.map.depthTexture.minFilter=ti,W.map.depthTexture.magFilter=ti):(W.map.depthTexture.compareFunction=null,W.map.depthTexture.minFilter=Qn,W.map.depthTexture.magFilter=Qn);W.camera.updateProjectionMatrix()}const pt=W.map.isWebGLCubeRenderTarget?6:1;for(let Tt=0;Tt<pt;Tt++){if(W.map.isWebGLCubeRenderTarget)a.setRenderTarget(W.map,Tt),a.clear();else{Tt===0&&(a.setRenderTarget(W.map),a.clear());const zt=W.getViewport(Tt);d.set(c.x*zt.x,c.y*zt.y,c.x*zt.z,c.y*zt.w),Z.viewport(d)}if(B.isPointLight){const zt=W.camera,re=W.matrix,F=B.distance||zt.far;F!==zt.far&&(zt.far=F,zt.updateProjectionMatrix()),Vc.setFromMatrixPosition(B.matrixWorld),zt.position.copy(Vc),_0.copy(zt.position),_0.add(xO[Tt]),zt.up.copy(yO[Tt]),zt.lookAt(_0),zt.updateMatrixWorld(),re.makeTranslation(-Vc.x,-Vc.y,-Vc.z),Z1.multiplyMatrices(zt.projectionMatrix,zt.matrixWorldInverse),W._frustum.setFromProjectionMatrix(Z1,zt.coordinateSystem,zt.reversedDepth)}else W.updateMatrices(B);s=W.getFrustum(),N(L,E,W.camera,B,this.type)}W.isPointLightShadow!==!0&&this.type===tu&&R(W,E),W.needsUpdate=!1}M=this.type,S.needsUpdate=!1,a.setRenderTarget(O,V,z)};function R(U,L){const E=t.update(C);v.defines.VSM_SAMPLES!==U.blurSamples&&(v.defines.VSM_SAMPLES=U.blurSamples,y.defines.VSM_SAMPLES=U.blurSamples,v.needsUpdate=!0,y.needsUpdate=!0),U.mapPass===null&&(U.mapPass=new Ha(l.x,l.y,{format:io,type:vr})),v.uniforms.shadow_pass.value=U.map.depthTexture,v.uniforms.resolution.value=U.mapSize,v.uniforms.radius.value=U.radius,a.setRenderTarget(U.mapPass),a.clear(),a.renderBufferDirect(L,null,E,v,C,null),y.uniforms.shadow_pass.value=U.mapPass.texture,y.uniforms.resolution.value=U.mapSize,y.uniforms.radius.value=U.radius,a.setRenderTarget(U.map),a.clear(),a.renderBufferDirect(L,null,E,y,C,null)}function P(U,L,E,O){let V=null;const z=E.isPointLight===!0?U.customDistanceMaterial:U.customDepthMaterial;if(z!==void 0)V=z;else if(V=E.isPointLight===!0?p:h,a.localClippingEnabled&&L.clipShadows===!0&&Array.isArray(L.clippingPlanes)&&L.clippingPlanes.length!==0||L.displacementMap&&L.displacementScale!==0||L.alphaMap&&L.alphaTest>0||L.map&&L.alphaTest>0||L.alphaToCoverage===!0){const Z=V.uuid,tt=L.uuid;let ft=m[Z];ft===void 0&&(ft={},m[Z]=ft);let X=ft[tt];X===void 0&&(X=V.clone(),ft[tt]=X,L.addEventListener("dispose",H)),V=X}if(V.visible=L.visible,V.wireframe=L.wireframe,O===tu?V.side=L.shadowSide!==null?L.shadowSide:L.side:V.side=L.shadowSide!==null?L.shadowSide:g[L.side],V.alphaMap=L.alphaMap,V.alphaTest=L.alphaToCoverage===!0?.5:L.alphaTest,V.map=L.map,V.clipShadows=L.clipShadows,V.clippingPlanes=L.clippingPlanes,V.clipIntersection=L.clipIntersection,V.displacementMap=L.displacementMap,V.displacementScale=L.displacementScale,V.displacementBias=L.displacementBias,V.wireframeLinewidth=L.wireframeLinewidth,V.linewidth=L.linewidth,E.isPointLight===!0&&V.isMeshDistanceMaterial===!0){const Z=a.properties.get(V);Z.light=E}return V}function N(U,L,E,O,V){if(U.visible===!1)return;if(U.layers.test(L.layers)&&(U.isMesh||U.isLine||U.isPoints)&&(U.castShadow||U.receiveShadow&&V===tu)&&(!U.frustumCulled||s.intersectsObject(U))){U.modelViewMatrix.multiplyMatrices(E.matrixWorldInverse,U.matrixWorld);const tt=t.update(U),ft=U.material;if(Array.isArray(ft)){const X=tt.groups;for(let B=0,W=X.length;B<W;B++){const J=X[B],dt=ft[J.materialIndex];if(dt&&dt.visible){const pt=P(U,dt,O,V);U.onBeforeShadow(a,U,L,E,tt,pt,J),a.renderBufferDirect(E,null,tt,pt,U,J),U.onAfterShadow(a,U,L,E,tt,pt,J)}}}else if(ft.visible){const X=P(U,ft,O,V);U.onBeforeShadow(a,U,L,E,tt,X,null),a.renderBufferDirect(E,null,tt,X,U,null),U.onAfterShadow(a,U,L,E,tt,X,null)}}const Z=U.children;for(let tt=0,ft=Z.length;tt<ft;tt++)N(Z[tt],L,E,O,V)}function H(U){U.target.removeEventListener("dispose",H);for(const E in m){const O=m[E],V=U.target.uuid;V in O&&(O[V].dispose(),delete O[V])}}}function MO(a,t){function i(){let q=!1;const At=new Mn;let xt=null;const Vt=new Mn(0,0,0,0);return{setMask:function(Ut){xt!==Ut&&!q&&(a.colorMask(Ut,Ut,Ut,Ut),xt=Ut)},setLocked:function(Ut){q=Ut},setClear:function(Ut,Et,Zt,ae,We){We===!0&&(Ut*=ae,Et*=ae,Zt*=ae),At.set(Ut,Et,Zt,ae),Vt.equals(At)===!1&&(a.clearColor(Ut,Et,Zt,ae),Vt.copy(At))},reset:function(){q=!1,xt=null,Vt.set(-1,0,0,0)}}}function s(){let q=!1,At=!1,xt=null,Vt=null,Ut=null;return{setReversed:function(Et){if(At!==Et){const Zt=t.get("EXT_clip_control");Et?Zt.clipControlEXT(Zt.LOWER_LEFT_EXT,Zt.ZERO_TO_ONE_EXT):Zt.clipControlEXT(Zt.LOWER_LEFT_EXT,Zt.NEGATIVE_ONE_TO_ONE_EXT),At=Et;const ae=Ut;Ut=null,this.setClear(ae)}},getReversed:function(){return At},setTest:function(Et){Et?yt(a.DEPTH_TEST):Rt(a.DEPTH_TEST)},setMask:function(Et){xt!==Et&&!q&&(a.depthMask(Et),xt=Et)},setFunc:function(Et){if(At&&(Et=iC[Et]),Vt!==Et){switch(Et){case eg:a.depthFunc(a.NEVER);break;case ng:a.depthFunc(a.ALWAYS);break;case ig:a.depthFunc(a.LESS);break;case Ul:a.depthFunc(a.LEQUAL);break;case ag:a.depthFunc(a.EQUAL);break;case rg:a.depthFunc(a.GEQUAL);break;case sg:a.depthFunc(a.GREATER);break;case og:a.depthFunc(a.NOTEQUAL);break;default:a.depthFunc(a.LEQUAL)}Vt=Et}},setLocked:function(Et){q=Et},setClear:function(Et){Ut!==Et&&(Ut=Et,At&&(Et=1-Et),a.clearDepth(Et))},reset:function(){q=!1,xt=null,Vt=null,Ut=null,At=!1}}}function l(){let q=!1,At=null,xt=null,Vt=null,Ut=null,Et=null,Zt=null,ae=null,We=null;return{setTest:function(xe){q||(xe?yt(a.STENCIL_TEST):Rt(a.STENCIL_TEST))},setMask:function(xe){At!==xe&&!q&&(a.stencilMask(xe),At=xe)},setFunc:function(xe,ta,zi){(xt!==xe||Vt!==ta||Ut!==zi)&&(a.stencilFunc(xe,ta,zi),xt=xe,Vt=ta,Ut=zi)},setOp:function(xe,ta,zi){(Et!==xe||Zt!==ta||ae!==zi)&&(a.stencilOp(xe,ta,zi),Et=xe,Zt=ta,ae=zi)},setLocked:function(xe){q=xe},setClear:function(xe){We!==xe&&(a.clearStencil(xe),We=xe)},reset:function(){q=!1,At=null,xt=null,Vt=null,Ut=null,Et=null,Zt=null,ae=null,We=null}}}const c=new i,d=new s,h=new l,p=new WeakMap,m=new WeakMap;let _={},g={},v={},y=new WeakMap,b=[],C=null,S=!1,M=null,R=null,P=null,N=null,H=null,U=null,L=null,E=new an(0,0,0),O=0,V=!1,z=null,Z=null,tt=null,ft=null,X=null;const B=a.getParameter(a.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let W=!1,J=0;const dt=a.getParameter(a.VERSION);dt.indexOf("WebGL")!==-1?(J=parseFloat(/^WebGL (\d)/.exec(dt)[1]),W=J>=1):dt.indexOf("OpenGL ES")!==-1&&(J=parseFloat(/^OpenGL ES (\d)/.exec(dt)[1]),W=J>=2);let pt=null,Tt={};const zt=a.getParameter(a.SCISSOR_BOX),re=a.getParameter(a.VIEWPORT),F=new Mn().fromArray(zt),lt=new Mn().fromArray(re);function et(q,At,xt,Vt){const Ut=new Uint8Array(4),Et=a.createTexture();a.bindTexture(q,Et),a.texParameteri(q,a.TEXTURE_MIN_FILTER,a.NEAREST),a.texParameteri(q,a.TEXTURE_MAG_FILTER,a.NEAREST);for(let Zt=0;Zt<xt;Zt++)q===a.TEXTURE_3D||q===a.TEXTURE_2D_ARRAY?a.texImage3D(At,0,a.RGBA,1,1,Vt,0,a.RGBA,a.UNSIGNED_BYTE,Ut):a.texImage2D(At+Zt,0,a.RGBA,1,1,0,a.RGBA,a.UNSIGNED_BYTE,Ut);return Et}const ht={};ht[a.TEXTURE_2D]=et(a.TEXTURE_2D,a.TEXTURE_2D,1),ht[a.TEXTURE_CUBE_MAP]=et(a.TEXTURE_CUBE_MAP,a.TEXTURE_CUBE_MAP_POSITIVE_X,6),ht[a.TEXTURE_2D_ARRAY]=et(a.TEXTURE_2D_ARRAY,a.TEXTURE_2D_ARRAY,1,1),ht[a.TEXTURE_3D]=et(a.TEXTURE_3D,a.TEXTURE_3D,1,1),c.setClear(0,0,0,1),d.setClear(1),h.setClear(0),yt(a.DEPTH_TEST),d.setFunc(Ul),Re(!1),oe(JS),yt(a.CULL_FACE),Ge(pr);function yt(q){_[q]!==!0&&(a.enable(q),_[q]=!0)}function Rt(q){_[q]!==!1&&(a.disable(q),_[q]=!1)}function Dt(q,At){return v[q]!==At?(a.bindFramebuffer(q,At),v[q]=At,q===a.DRAW_FRAMEBUFFER&&(v[a.FRAMEBUFFER]=At),q===a.FRAMEBUFFER&&(v[a.DRAW_FRAMEBUFFER]=At),!0):!1}function Mt(q,At){let xt=b,Vt=!1;if(q){xt=y.get(At),xt===void 0&&(xt=[],y.set(At,xt));const Ut=q.textures;if(xt.length!==Ut.length||xt[0]!==a.COLOR_ATTACHMENT0){for(let Et=0,Zt=Ut.length;Et<Zt;Et++)xt[Et]=a.COLOR_ATTACHMENT0+Et;xt.length=Ut.length,Vt=!0}}else xt[0]!==a.BACK&&(xt[0]=a.BACK,Vt=!0);Vt&&a.drawBuffers(xt)}function kt(q){return C!==q?(a.useProgram(q),C=q,!0):!1}const he={[js]:a.FUNC_ADD,[AR]:a.FUNC_SUBTRACT,[wR]:a.FUNC_REVERSE_SUBTRACT};he[RR]=a.MIN,he[CR]=a.MAX;const He={[DR]:a.ZERO,[NR]:a.ONE,[UR]:a.SRC_COLOR,[J0]:a.SRC_ALPHA,[FR]:a.SRC_ALPHA_SATURATE,[zR]:a.DST_COLOR,[OR]:a.DST_ALPHA,[LR]:a.ONE_MINUS_SRC_COLOR,[tg]:a.ONE_MINUS_SRC_ALPHA,[IR]:a.ONE_MINUS_DST_COLOR,[PR]:a.ONE_MINUS_DST_ALPHA,[BR]:a.CONSTANT_COLOR,[HR]:a.ONE_MINUS_CONSTANT_COLOR,[GR]:a.CONSTANT_ALPHA,[VR]:a.ONE_MINUS_CONSTANT_ALPHA};function Ge(q,At,xt,Vt,Ut,Et,Zt,ae,We,xe){if(q===pr){S===!0&&(Rt(a.BLEND),S=!1);return}if(S===!1&&(yt(a.BLEND),S=!0),q!==TR){if(q!==M||xe!==V){if((R!==js||H!==js)&&(a.blendEquation(a.FUNC_ADD),R=js,H=js),xe)switch(q){case Tl:a.blendFuncSeparate(a.ONE,a.ONE_MINUS_SRC_ALPHA,a.ONE,a.ONE_MINUS_SRC_ALPHA);break;case t1:a.blendFunc(a.ONE,a.ONE);break;case e1:a.blendFuncSeparate(a.ZERO,a.ONE_MINUS_SRC_COLOR,a.ZERO,a.ONE);break;case n1:a.blendFuncSeparate(a.DST_COLOR,a.ONE_MINUS_SRC_ALPHA,a.ZERO,a.ONE);break;default:Be("WebGLState: Invalid blending: ",q);break}else switch(q){case Tl:a.blendFuncSeparate(a.SRC_ALPHA,a.ONE_MINUS_SRC_ALPHA,a.ONE,a.ONE_MINUS_SRC_ALPHA);break;case t1:a.blendFuncSeparate(a.SRC_ALPHA,a.ONE,a.ONE,a.ONE);break;case e1:Be("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case n1:Be("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:Be("WebGLState: Invalid blending: ",q);break}P=null,N=null,U=null,L=null,E.set(0,0,0),O=0,M=q,V=xe}return}Ut=Ut||At,Et=Et||xt,Zt=Zt||Vt,(At!==R||Ut!==H)&&(a.blendEquationSeparate(he[At],he[Ut]),R=At,H=Ut),(xt!==P||Vt!==N||Et!==U||Zt!==L)&&(a.blendFuncSeparate(He[xt],He[Vt],He[Et],He[Zt]),P=xt,N=Vt,U=Et,L=Zt),(ae.equals(E)===!1||We!==O)&&(a.blendColor(ae.r,ae.g,ae.b,We),E.copy(ae),O=We),M=q,V=!1}function ce(q,At){q.side===dr?Rt(a.CULL_FACE):yt(a.CULL_FACE);let xt=q.side===yi;At&&(xt=!xt),Re(xt),q.blending===Tl&&q.transparent===!1?Ge(pr):Ge(q.blending,q.blendEquation,q.blendSrc,q.blendDst,q.blendEquationAlpha,q.blendSrcAlpha,q.blendDstAlpha,q.blendColor,q.blendAlpha,q.premultipliedAlpha),d.setFunc(q.depthFunc),d.setTest(q.depthTest),d.setMask(q.depthWrite),c.setMask(q.colorWrite);const Vt=q.stencilWrite;h.setTest(Vt),Vt&&(h.setMask(q.stencilWriteMask),h.setFunc(q.stencilFunc,q.stencilRef,q.stencilFuncMask),h.setOp(q.stencilFail,q.stencilZFail,q.stencilZPass)),Y(q.polygonOffset,q.polygonOffsetFactor,q.polygonOffsetUnits),q.alphaToCoverage===!0?yt(a.SAMPLE_ALPHA_TO_COVERAGE):Rt(a.SAMPLE_ALPHA_TO_COVERAGE)}function Re(q){z!==q&&(q?a.frontFace(a.CW):a.frontFace(a.CCW),z=q)}function oe(q){q!==MR?(yt(a.CULL_FACE),q!==Z&&(q===JS?a.cullFace(a.BACK):q===bR?a.cullFace(a.FRONT):a.cullFace(a.FRONT_AND_BACK))):Rt(a.CULL_FACE),Z=q}function dn(q){q!==tt&&(W&&a.lineWidth(q),tt=q)}function Y(q,At,xt){q?(yt(a.POLYGON_OFFSET_FILL),(ft!==At||X!==xt)&&(ft=At,X=xt,d.getReversed()&&(At=-At),a.polygonOffset(At,xt))):Rt(a.POLYGON_OFFSET_FILL)}function tn(q){q?yt(a.SCISSOR_TEST):Rt(a.SCISSOR_TEST)}function Me(q){q===void 0&&(q=a.TEXTURE0+B-1),pt!==q&&(a.activeTexture(q),pt=q)}function Ve(q,At,xt){xt===void 0&&(pt===null?xt=a.TEXTURE0+B-1:xt=pt);let Vt=Tt[xt];Vt===void 0&&(Vt={type:void 0,texture:void 0},Tt[xt]=Vt),(Vt.type!==q||Vt.texture!==At)&&(pt!==xt&&(a.activeTexture(xt),pt=xt),a.bindTexture(q,At||ht[q]),Vt.type=q,Vt.texture=At)}function Ot(){const q=Tt[pt];q!==void 0&&q.type!==void 0&&(a.bindTexture(q.type,null),q.type=void 0,q.texture=void 0)}function on(){try{a.compressedTexImage2D(...arguments)}catch(q){Be("WebGLState:",q)}}function D(){try{a.compressedTexImage3D(...arguments)}catch(q){Be("WebGLState:",q)}}function T(){try{a.texSubImage2D(...arguments)}catch(q){Be("WebGLState:",q)}}function it(){try{a.texSubImage3D(...arguments)}catch(q){Be("WebGLState:",q)}}function gt(){try{a.compressedTexSubImage2D(...arguments)}catch(q){Be("WebGLState:",q)}}function bt(){try{a.compressedTexSubImage3D(...arguments)}catch(q){Be("WebGLState:",q)}}function wt(){try{a.texStorage2D(...arguments)}catch(q){Be("WebGLState:",q)}}function Lt(){try{a.texStorage3D(...arguments)}catch(q){Be("WebGLState:",q)}}function mt(){try{a.texImage2D(...arguments)}catch(q){Be("WebGLState:",q)}}function St(){try{a.texImage3D(...arguments)}catch(q){Be("WebGLState:",q)}}function Bt(q){return g[q]!==void 0?g[q]:a.getParameter(q)}function Xt(q,At){g[q]!==At&&(a.pixelStorei(q,At),g[q]=At)}function Nt(q){F.equals(q)===!1&&(a.scissor(q.x,q.y,q.z,q.w),F.copy(q))}function Ct(q){lt.equals(q)===!1&&(a.viewport(q.x,q.y,q.z,q.w),lt.copy(q))}function ne(q,At){let xt=m.get(At);xt===void 0&&(xt=new WeakMap,m.set(At,xt));let Vt=xt.get(q);Vt===void 0&&(Vt=a.getUniformBlockIndex(At,q.name),xt.set(q,Vt))}function ve(q,At){const Vt=m.get(At).get(q);p.get(At)!==Vt&&(a.uniformBlockBinding(At,Vt,q.__bindingPointIndex),p.set(At,Vt))}function Le(){a.disable(a.BLEND),a.disable(a.CULL_FACE),a.disable(a.DEPTH_TEST),a.disable(a.POLYGON_OFFSET_FILL),a.disable(a.SCISSOR_TEST),a.disable(a.STENCIL_TEST),a.disable(a.SAMPLE_ALPHA_TO_COVERAGE),a.blendEquation(a.FUNC_ADD),a.blendFunc(a.ONE,a.ZERO),a.blendFuncSeparate(a.ONE,a.ZERO,a.ONE,a.ZERO),a.blendColor(0,0,0,0),a.colorMask(!0,!0,!0,!0),a.clearColor(0,0,0,0),a.depthMask(!0),a.depthFunc(a.LESS),d.setReversed(!1),a.clearDepth(1),a.stencilMask(4294967295),a.stencilFunc(a.ALWAYS,0,4294967295),a.stencilOp(a.KEEP,a.KEEP,a.KEEP),a.clearStencil(0),a.cullFace(a.BACK),a.frontFace(a.CCW),a.polygonOffset(0,0),a.activeTexture(a.TEXTURE0),a.bindFramebuffer(a.FRAMEBUFFER,null),a.bindFramebuffer(a.DRAW_FRAMEBUFFER,null),a.bindFramebuffer(a.READ_FRAMEBUFFER,null),a.useProgram(null),a.lineWidth(1),a.scissor(0,0,a.canvas.width,a.canvas.height),a.viewport(0,0,a.canvas.width,a.canvas.height),a.pixelStorei(a.PACK_ALIGNMENT,4),a.pixelStorei(a.UNPACK_ALIGNMENT,4),a.pixelStorei(a.UNPACK_FLIP_Y_WEBGL,!1),a.pixelStorei(a.UNPACK_PREMULTIPLY_ALPHA_WEBGL,!1),a.pixelStorei(a.UNPACK_COLORSPACE_CONVERSION_WEBGL,a.BROWSER_DEFAULT_WEBGL),a.pixelStorei(a.PACK_ROW_LENGTH,0),a.pixelStorei(a.PACK_SKIP_PIXELS,0),a.pixelStorei(a.PACK_SKIP_ROWS,0),a.pixelStorei(a.UNPACK_ROW_LENGTH,0),a.pixelStorei(a.UNPACK_IMAGE_HEIGHT,0),a.pixelStorei(a.UNPACK_SKIP_PIXELS,0),a.pixelStorei(a.UNPACK_SKIP_ROWS,0),a.pixelStorei(a.UNPACK_SKIP_IMAGES,0),_={},g={},pt=null,Tt={},v={},y=new WeakMap,b=[],C=null,S=!1,M=null,R=null,P=null,N=null,H=null,U=null,L=null,E=new an(0,0,0),O=0,V=!1,z=null,Z=null,tt=null,ft=null,X=null,F.set(0,0,a.canvas.width,a.canvas.height),lt.set(0,0,a.canvas.width,a.canvas.height),c.reset(),d.reset(),h.reset()}return{buffers:{color:c,depth:d,stencil:h},enable:yt,disable:Rt,bindFramebuffer:Dt,drawBuffers:Mt,useProgram:kt,setBlending:Ge,setMaterial:ce,setFlipSided:Re,setCullFace:oe,setLineWidth:dn,setPolygonOffset:Y,setScissorTest:tn,activeTexture:Me,bindTexture:Ve,unbindTexture:Ot,compressedTexImage2D:on,compressedTexImage3D:D,texImage2D:mt,texImage3D:St,pixelStorei:Xt,getParameter:Bt,updateUBOMapping:ne,uniformBlockBinding:ve,texStorage2D:wt,texStorage3D:Lt,texSubImage2D:T,texSubImage3D:it,compressedTexSubImage2D:gt,compressedTexSubImage3D:bt,scissor:Nt,viewport:Ct,reset:Le}}function bO(a,t,i,s,l,c,d){const h=t.has("WEBGL_multisampled_render_to_texture")?t.get("WEBGL_multisampled_render_to_texture"):null,p=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),m=new Je,_=new WeakMap,g=new Set;let v;const y=new WeakMap;let b=!1;try{b=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function C(D,T){return b?new OffscreenCanvas(D,T):Vd("canvas")}function S(D,T,it){let gt=1;const bt=on(D);if((bt.width>it||bt.height>it)&&(gt=it/Math.max(bt.width,bt.height)),gt<1)if(typeof HTMLImageElement<"u"&&D instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&D instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&D instanceof ImageBitmap||typeof VideoFrame<"u"&&D instanceof VideoFrame){const wt=Math.floor(gt*bt.width),Lt=Math.floor(gt*bt.height);v===void 0&&(v=C(wt,Lt));const mt=T?C(wt,Lt):v;return mt.width=wt,mt.height=Lt,mt.getContext("2d").drawImage(D,0,0,wt,Lt),de("WebGLRenderer: Texture has been resized from ("+bt.width+"x"+bt.height+") to ("+wt+"x"+Lt+")."),mt}else return"data"in D&&de("WebGLRenderer: Image in DataTexture is too big ("+bt.width+"x"+bt.height+")."),D;return D}function M(D){return D.generateMipmaps}function R(D){a.generateMipmap(D)}function P(D){return D.isWebGLCubeRenderTarget?a.TEXTURE_CUBE_MAP:D.isWebGL3DRenderTarget?a.TEXTURE_3D:D.isWebGLArrayRenderTarget||D.isCompressedArrayTexture?a.TEXTURE_2D_ARRAY:a.TEXTURE_2D}function N(D,T,it,gt,bt,wt=!1){if(D!==null){if(a[D]!==void 0)return a[D];de("WebGLRenderer: Attempt to use non-existing WebGL internal format '"+D+"'")}let Lt;gt&&(Lt=t.get("EXT_texture_norm16"),Lt||de("WebGLRenderer: Unable to use normalized textures without EXT_texture_norm16 extension"));let mt=T;if(T===a.RED&&(it===a.FLOAT&&(mt=a.R32F),it===a.HALF_FLOAT&&(mt=a.R16F),it===a.UNSIGNED_BYTE&&(mt=a.R8),it===a.UNSIGNED_SHORT&&Lt&&(mt=Lt.R16_EXT),it===a.SHORT&&Lt&&(mt=Lt.R16_SNORM_EXT)),T===a.RED_INTEGER&&(it===a.UNSIGNED_BYTE&&(mt=a.R8UI),it===a.UNSIGNED_SHORT&&(mt=a.R16UI),it===a.UNSIGNED_INT&&(mt=a.R32UI),it===a.BYTE&&(mt=a.R8I),it===a.SHORT&&(mt=a.R16I),it===a.INT&&(mt=a.R32I)),T===a.RG&&(it===a.FLOAT&&(mt=a.RG32F),it===a.HALF_FLOAT&&(mt=a.RG16F),it===a.UNSIGNED_BYTE&&(mt=a.RG8),it===a.UNSIGNED_SHORT&&Lt&&(mt=Lt.RG16_EXT),it===a.SHORT&&Lt&&(mt=Lt.RG16_SNORM_EXT)),T===a.RG_INTEGER&&(it===a.UNSIGNED_BYTE&&(mt=a.RG8UI),it===a.UNSIGNED_SHORT&&(mt=a.RG16UI),it===a.UNSIGNED_INT&&(mt=a.RG32UI),it===a.BYTE&&(mt=a.RG8I),it===a.SHORT&&(mt=a.RG16I),it===a.INT&&(mt=a.RG32I)),T===a.RGB_INTEGER&&(it===a.UNSIGNED_BYTE&&(mt=a.RGB8UI),it===a.UNSIGNED_SHORT&&(mt=a.RGB16UI),it===a.UNSIGNED_INT&&(mt=a.RGB32UI),it===a.BYTE&&(mt=a.RGB8I),it===a.SHORT&&(mt=a.RGB16I),it===a.INT&&(mt=a.RGB32I)),T===a.RGBA_INTEGER&&(it===a.UNSIGNED_BYTE&&(mt=a.RGBA8UI),it===a.UNSIGNED_SHORT&&(mt=a.RGBA16UI),it===a.UNSIGNED_INT&&(mt=a.RGBA32UI),it===a.BYTE&&(mt=a.RGBA8I),it===a.SHORT&&(mt=a.RGBA16I),it===a.INT&&(mt=a.RGBA32I)),T===a.RGB&&(it===a.UNSIGNED_SHORT&&Lt&&(mt=Lt.RGB16_EXT),it===a.SHORT&&Lt&&(mt=Lt.RGB16_SNORM_EXT),it===a.UNSIGNED_INT_5_9_9_9_REV&&(mt=a.RGB9_E5),it===a.UNSIGNED_INT_10F_11F_11F_REV&&(mt=a.R11F_G11F_B10F)),T===a.RGBA){const St=wt?Hd:Oe.getTransfer(bt);it===a.FLOAT&&(mt=a.RGBA32F),it===a.HALF_FLOAT&&(mt=a.RGBA16F),it===a.UNSIGNED_BYTE&&(mt=St===$e?a.SRGB8_ALPHA8:a.RGBA8),it===a.UNSIGNED_SHORT&&Lt&&(mt=Lt.RGBA16_EXT),it===a.SHORT&&Lt&&(mt=Lt.RGBA16_SNORM_EXT),it===a.UNSIGNED_SHORT_4_4_4_4&&(mt=a.RGBA4),it===a.UNSIGNED_SHORT_5_5_5_1&&(mt=a.RGB5_A1)}return(mt===a.R16F||mt===a.R32F||mt===a.RG16F||mt===a.RG32F||mt===a.RGBA16F||mt===a.RGBA32F)&&t.get("EXT_color_buffer_float"),mt}function H(D,T){let it;return D?T===null||T===Va||T===du?it=a.DEPTH24_STENCIL8:T===Pa?it=a.DEPTH32F_STENCIL8:T===fu&&(it=a.DEPTH24_STENCIL8,de("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):T===null||T===Va||T===du?it=a.DEPTH_COMPONENT24:T===Pa?it=a.DEPTH_COMPONENT32F:T===fu&&(it=a.DEPTH_COMPONENT16),it}function U(D,T){return M(D)===!0||D.isFramebufferTexture&&D.minFilter!==Qn&&D.minFilter!==ti?Math.log2(Math.max(T.width,T.height))+1:D.mipmaps!==void 0&&D.mipmaps.length>0?D.mipmaps.length:D.isCompressedTexture&&Array.isArray(D.image)?T.mipmaps.length:1}function L(D){const T=D.target;T.removeEventListener("dispose",L),O(T),T.isVideoTexture&&_.delete(T),T.isHTMLTexture&&g.delete(T)}function E(D){const T=D.target;T.removeEventListener("dispose",E),z(T)}function O(D){const T=s.get(D);if(T.__webglInit===void 0)return;const it=D.source,gt=y.get(it);if(gt){const bt=gt[T.__cacheKey];bt.usedTimes--,bt.usedTimes===0&&V(D),Object.keys(gt).length===0&&y.delete(it)}s.remove(D)}function V(D){const T=s.get(D);a.deleteTexture(T.__webglTexture);const it=D.source,gt=y.get(it);delete gt[T.__cacheKey],d.memory.textures--}function z(D){const T=s.get(D);if(D.depthTexture&&(D.depthTexture.dispose(),s.remove(D.depthTexture)),D.isWebGLCubeRenderTarget)for(let gt=0;gt<6;gt++){if(Array.isArray(T.__webglFramebuffer[gt]))for(let bt=0;bt<T.__webglFramebuffer[gt].length;bt++)a.deleteFramebuffer(T.__webglFramebuffer[gt][bt]);else a.deleteFramebuffer(T.__webglFramebuffer[gt]);T.__webglDepthbuffer&&a.deleteRenderbuffer(T.__webglDepthbuffer[gt])}else{if(Array.isArray(T.__webglFramebuffer))for(let gt=0;gt<T.__webglFramebuffer.length;gt++)a.deleteFramebuffer(T.__webglFramebuffer[gt]);else a.deleteFramebuffer(T.__webglFramebuffer);if(T.__webglDepthbuffer&&a.deleteRenderbuffer(T.__webglDepthbuffer),T.__webglMultisampledFramebuffer&&a.deleteFramebuffer(T.__webglMultisampledFramebuffer),T.__webglColorRenderbuffer)for(let gt=0;gt<T.__webglColorRenderbuffer.length;gt++)T.__webglColorRenderbuffer[gt]&&a.deleteRenderbuffer(T.__webglColorRenderbuffer[gt]);T.__webglDepthRenderbuffer&&a.deleteRenderbuffer(T.__webglDepthRenderbuffer)}const it=D.textures;for(let gt=0,bt=it.length;gt<bt;gt++){const wt=s.get(it[gt]);wt.__webglTexture&&(a.deleteTexture(wt.__webglTexture),d.memory.textures--),s.remove(it[gt])}s.remove(D)}let Z=0;function tt(){Z=0}function ft(){return Z}function X(D){Z=D}function B(){const D=Z;return D>=l.maxTextures&&de("WebGLTextures: Trying to use "+D+" texture units while this GPU supports only "+l.maxTextures),Z+=1,D}function W(D){const T=[];return T.push(D.wrapS),T.push(D.wrapT),T.push(D.wrapR||0),T.push(D.magFilter),T.push(D.minFilter),T.push(D.anisotropy),T.push(D.internalFormat),T.push(D.format),T.push(D.type),T.push(D.generateMipmaps),T.push(D.premultiplyAlpha),T.push(D.flipY),T.push(D.unpackAlignment),T.push(D.colorSpace),T.join()}function J(D,T){const it=s.get(D);if(D.isVideoTexture&&Ve(D),D.isRenderTargetTexture===!1&&D.isExternalTexture!==!0&&D.version>0&&it.__version!==D.version){const gt=D.image;if(gt===null)de("WebGLRenderer: Texture marked for update but no image data found.");else if(gt.complete===!1)de("WebGLRenderer: Texture marked for update but image is incomplete");else{Rt(it,D,T);return}}else D.isExternalTexture&&(it.__webglTexture=D.sourceTexture?D.sourceTexture:null);i.bindTexture(a.TEXTURE_2D,it.__webglTexture,a.TEXTURE0+T)}function dt(D,T){const it=s.get(D);if(D.isRenderTargetTexture===!1&&D.version>0&&it.__version!==D.version){Rt(it,D,T);return}else D.isExternalTexture&&(it.__webglTexture=D.sourceTexture?D.sourceTexture:null);i.bindTexture(a.TEXTURE_2D_ARRAY,it.__webglTexture,a.TEXTURE0+T)}function pt(D,T){const it=s.get(D);if(D.isRenderTargetTexture===!1&&D.version>0&&it.__version!==D.version){Rt(it,D,T);return}i.bindTexture(a.TEXTURE_3D,it.__webglTexture,a.TEXTURE0+T)}function Tt(D,T){const it=s.get(D);if(D.isCubeDepthTexture!==!0&&D.version>0&&it.__version!==D.version){Dt(it,D,T);return}i.bindTexture(a.TEXTURE_CUBE_MAP,it.__webglTexture,a.TEXTURE0+T)}const zt={[lg]:a.REPEAT,[hr]:a.CLAMP_TO_EDGE,[cg]:a.MIRRORED_REPEAT},re={[Qn]:a.NEAREST,[qR]:a.NEAREST_MIPMAP_NEAREST,[Xf]:a.NEAREST_MIPMAP_LINEAR,[ti]:a.LINEAR,[Vm]:a.LINEAR_MIPMAP_NEAREST,[Zs]:a.LINEAR_MIPMAP_LINEAR},F={[YR]:a.NEVER,[JR]:a.ALWAYS,[ZR]:a.LESS,[lv]:a.LEQUAL,[QR]:a.EQUAL,[cv]:a.GEQUAL,[KR]:a.GREATER,[$R]:a.NOTEQUAL};function lt(D,T){if(T.type===Pa&&t.has("OES_texture_float_linear")===!1&&(T.magFilter===ti||T.magFilter===Vm||T.magFilter===Xf||T.magFilter===Zs||T.minFilter===ti||T.minFilter===Vm||T.minFilter===Xf||T.minFilter===Zs)&&de("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),a.texParameteri(D,a.TEXTURE_WRAP_S,zt[T.wrapS]),a.texParameteri(D,a.TEXTURE_WRAP_T,zt[T.wrapT]),(D===a.TEXTURE_3D||D===a.TEXTURE_2D_ARRAY)&&a.texParameteri(D,a.TEXTURE_WRAP_R,zt[T.wrapR]),a.texParameteri(D,a.TEXTURE_MAG_FILTER,re[T.magFilter]),a.texParameteri(D,a.TEXTURE_MIN_FILTER,re[T.minFilter]),T.compareFunction&&(a.texParameteri(D,a.TEXTURE_COMPARE_MODE,a.COMPARE_REF_TO_TEXTURE),a.texParameteri(D,a.TEXTURE_COMPARE_FUNC,F[T.compareFunction])),t.has("EXT_texture_filter_anisotropic")===!0){if(T.magFilter===Qn||T.minFilter!==Xf&&T.minFilter!==Zs||T.type===Pa&&t.has("OES_texture_float_linear")===!1)return;if(T.anisotropy>1||s.get(T).__currentAnisotropy){const it=t.get("EXT_texture_filter_anisotropic");a.texParameterf(D,it.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(T.anisotropy,l.getMaxAnisotropy())),s.get(T).__currentAnisotropy=T.anisotropy}}}function et(D,T){let it=!1;D.__webglInit===void 0&&(D.__webglInit=!0,T.addEventListener("dispose",L));const gt=T.source;let bt=y.get(gt);bt===void 0&&(bt={},y.set(gt,bt));const wt=W(T);if(wt!==D.__cacheKey){bt[wt]===void 0&&(bt[wt]={texture:a.createTexture(),usedTimes:0},d.memory.textures++,it=!0),bt[wt].usedTimes++;const Lt=bt[D.__cacheKey];Lt!==void 0&&(bt[D.__cacheKey].usedTimes--,Lt.usedTimes===0&&V(T)),D.__cacheKey=wt,D.__webglTexture=bt[wt].texture}return it}function ht(D,T,it){return Math.floor(Math.floor(D/it)/T)}function yt(D,T,it,gt){const wt=D.updateRanges;if(wt.length===0)i.texSubImage2D(a.TEXTURE_2D,0,0,0,T.width,T.height,it,gt,T.data);else{wt.sort((Xt,Nt)=>Xt.start-Nt.start);let Lt=0;for(let Xt=1;Xt<wt.length;Xt++){const Nt=wt[Lt],Ct=wt[Xt],ne=Nt.start+Nt.count,ve=ht(Ct.start,T.width,4),Le=ht(Nt.start,T.width,4);Ct.start<=ne+1&&ve===Le&&ht(Ct.start+Ct.count-1,T.width,4)===ve?Nt.count=Math.max(Nt.count,Ct.start+Ct.count-Nt.start):(++Lt,wt[Lt]=Ct)}wt.length=Lt+1;const mt=i.getParameter(a.UNPACK_ROW_LENGTH),St=i.getParameter(a.UNPACK_SKIP_PIXELS),Bt=i.getParameter(a.UNPACK_SKIP_ROWS);i.pixelStorei(a.UNPACK_ROW_LENGTH,T.width);for(let Xt=0,Nt=wt.length;Xt<Nt;Xt++){const Ct=wt[Xt],ne=Math.floor(Ct.start/4),ve=Math.ceil(Ct.count/4),Le=ne%T.width,q=Math.floor(ne/T.width),At=ve,xt=1;i.pixelStorei(a.UNPACK_SKIP_PIXELS,Le),i.pixelStorei(a.UNPACK_SKIP_ROWS,q),i.texSubImage2D(a.TEXTURE_2D,0,Le,q,At,xt,it,gt,T.data)}D.clearUpdateRanges(),i.pixelStorei(a.UNPACK_ROW_LENGTH,mt),i.pixelStorei(a.UNPACK_SKIP_PIXELS,St),i.pixelStorei(a.UNPACK_SKIP_ROWS,Bt)}}function Rt(D,T,it){let gt=a.TEXTURE_2D;(T.isDataArrayTexture||T.isCompressedArrayTexture)&&(gt=a.TEXTURE_2D_ARRAY),T.isData3DTexture&&(gt=a.TEXTURE_3D);const bt=et(D,T),wt=T.source;i.bindTexture(gt,D.__webglTexture,a.TEXTURE0+it);const Lt=s.get(wt);if(wt.version!==Lt.__version||bt===!0){if(i.activeTexture(a.TEXTURE0+it),(typeof ImageBitmap<"u"&&T.image instanceof ImageBitmap)===!1){const xt=Oe.getPrimaries(Oe.workingColorSpace),Vt=T.colorSpace===ls?null:Oe.getPrimaries(T.colorSpace),Ut=T.colorSpace===ls||xt===Vt?a.NONE:a.BROWSER_DEFAULT_WEBGL;i.pixelStorei(a.UNPACK_FLIP_Y_WEBGL,T.flipY),i.pixelStorei(a.UNPACK_PREMULTIPLY_ALPHA_WEBGL,T.premultiplyAlpha),i.pixelStorei(a.UNPACK_COLORSPACE_CONVERSION_WEBGL,Ut)}i.pixelStorei(a.UNPACK_ALIGNMENT,T.unpackAlignment);let St=S(T.image,!1,l.maxTextureSize);St=Ot(T,St);const Bt=c.convert(T.format,T.colorSpace),Xt=c.convert(T.type);let Nt=N(T.internalFormat,Bt,Xt,T.normalized,T.colorSpace,T.isVideoTexture);lt(gt,T);let Ct;const ne=T.mipmaps,ve=T.isVideoTexture!==!0,Le=Lt.__version===void 0||bt===!0,q=wt.dataReady,At=U(T,St);if(T.isDepthTexture)Nt=H(T.format===Qs,T.type),Le&&(ve?i.texStorage2D(a.TEXTURE_2D,1,Nt,St.width,St.height):i.texImage2D(a.TEXTURE_2D,0,Nt,St.width,St.height,0,Bt,Xt,null));else if(T.isDataTexture)if(ne.length>0){ve&&Le&&i.texStorage2D(a.TEXTURE_2D,At,Nt,ne[0].width,ne[0].height);for(let xt=0,Vt=ne.length;xt<Vt;xt++)Ct=ne[xt],ve?q&&i.texSubImage2D(a.TEXTURE_2D,xt,0,0,Ct.width,Ct.height,Bt,Xt,Ct.data):i.texImage2D(a.TEXTURE_2D,xt,Nt,Ct.width,Ct.height,0,Bt,Xt,Ct.data);T.generateMipmaps=!1}else ve?(Le&&i.texStorage2D(a.TEXTURE_2D,At,Nt,St.width,St.height),q&&yt(T,St,Bt,Xt)):i.texImage2D(a.TEXTURE_2D,0,Nt,St.width,St.height,0,Bt,Xt,St.data);else if(T.isCompressedTexture)if(T.isCompressedArrayTexture){ve&&Le&&i.texStorage3D(a.TEXTURE_2D_ARRAY,At,Nt,ne[0].width,ne[0].height,St.depth);for(let xt=0,Vt=ne.length;xt<Vt;xt++)if(Ct=ne[xt],T.format!==ma)if(Bt!==null)if(ve){if(q)if(T.layerUpdates.size>0){const Ut=A1(Ct.width,Ct.height,T.format,T.type);for(const Et of T.layerUpdates){const Zt=Ct.data.subarray(Et*Ut/Ct.data.BYTES_PER_ELEMENT,(Et+1)*Ut/Ct.data.BYTES_PER_ELEMENT);i.compressedTexSubImage3D(a.TEXTURE_2D_ARRAY,xt,0,0,Et,Ct.width,Ct.height,1,Bt,Zt)}T.clearLayerUpdates()}else i.compressedTexSubImage3D(a.TEXTURE_2D_ARRAY,xt,0,0,0,Ct.width,Ct.height,St.depth,Bt,Ct.data)}else i.compressedTexImage3D(a.TEXTURE_2D_ARRAY,xt,Nt,Ct.width,Ct.height,St.depth,0,Ct.data,0,0);else de("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else ve?q&&i.texSubImage3D(a.TEXTURE_2D_ARRAY,xt,0,0,0,Ct.width,Ct.height,St.depth,Bt,Xt,Ct.data):i.texImage3D(a.TEXTURE_2D_ARRAY,xt,Nt,Ct.width,Ct.height,St.depth,0,Bt,Xt,Ct.data)}else{ve&&Le&&i.texStorage2D(a.TEXTURE_2D,At,Nt,ne[0].width,ne[0].height);for(let xt=0,Vt=ne.length;xt<Vt;xt++)Ct=ne[xt],T.format!==ma?Bt!==null?ve?q&&i.compressedTexSubImage2D(a.TEXTURE_2D,xt,0,0,Ct.width,Ct.height,Bt,Ct.data):i.compressedTexImage2D(a.TEXTURE_2D,xt,Nt,Ct.width,Ct.height,0,Ct.data):de("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):ve?q&&i.texSubImage2D(a.TEXTURE_2D,xt,0,0,Ct.width,Ct.height,Bt,Xt,Ct.data):i.texImage2D(a.TEXTURE_2D,xt,Nt,Ct.width,Ct.height,0,Bt,Xt,Ct.data)}else if(T.isDataArrayTexture)if(ve){if(Le&&i.texStorage3D(a.TEXTURE_2D_ARRAY,At,Nt,St.width,St.height,St.depth),q)if(T.layerUpdates.size>0){const xt=A1(St.width,St.height,T.format,T.type);for(const Vt of T.layerUpdates){const Ut=St.data.subarray(Vt*xt/St.data.BYTES_PER_ELEMENT,(Vt+1)*xt/St.data.BYTES_PER_ELEMENT);i.texSubImage3D(a.TEXTURE_2D_ARRAY,0,0,0,Vt,St.width,St.height,1,Bt,Xt,Ut)}T.clearLayerUpdates()}else i.texSubImage3D(a.TEXTURE_2D_ARRAY,0,0,0,0,St.width,St.height,St.depth,Bt,Xt,St.data)}else i.texImage3D(a.TEXTURE_2D_ARRAY,0,Nt,St.width,St.height,St.depth,0,Bt,Xt,St.data);else if(T.isData3DTexture)ve?(Le&&i.texStorage3D(a.TEXTURE_3D,At,Nt,St.width,St.height,St.depth),q&&i.texSubImage3D(a.TEXTURE_3D,0,0,0,0,St.width,St.height,St.depth,Bt,Xt,St.data)):i.texImage3D(a.TEXTURE_3D,0,Nt,St.width,St.height,St.depth,0,Bt,Xt,St.data);else if(T.isFramebufferTexture){if(Le)if(ve)i.texStorage2D(a.TEXTURE_2D,At,Nt,St.width,St.height);else{let xt=St.width,Vt=St.height;for(let Ut=0;Ut<At;Ut++)i.texImage2D(a.TEXTURE_2D,Ut,Nt,xt,Vt,0,Bt,Xt,null),xt>>=1,Vt>>=1}}else if(T.isHTMLTexture){if("texElementImage2D"in a){const xt=a.canvas;if(xt.hasAttribute("layoutsubtree")||xt.setAttribute("layoutsubtree","true"),St.parentNode!==xt){xt.appendChild(St),g.add(T),xt.onpaint=ae=>{const We=ae.changedElements;for(const xe of g)We.includes(xe.image)&&(xe.needsUpdate=!0)},xt.requestPaint();return}const Vt=0,Ut=a.RGBA,Et=a.RGBA,Zt=a.UNSIGNED_BYTE;a.texElementImage2D(a.TEXTURE_2D,Vt,Ut,Et,Zt,St),a.texParameteri(a.TEXTURE_2D,a.TEXTURE_MIN_FILTER,a.LINEAR),a.texParameteri(a.TEXTURE_2D,a.TEXTURE_WRAP_S,a.CLAMP_TO_EDGE),a.texParameteri(a.TEXTURE_2D,a.TEXTURE_WRAP_T,a.CLAMP_TO_EDGE)}}else if(ne.length>0){if(ve&&Le){const xt=on(ne[0]);i.texStorage2D(a.TEXTURE_2D,At,Nt,xt.width,xt.height)}for(let xt=0,Vt=ne.length;xt<Vt;xt++)Ct=ne[xt],ve?q&&i.texSubImage2D(a.TEXTURE_2D,xt,0,0,Bt,Xt,Ct):i.texImage2D(a.TEXTURE_2D,xt,Nt,Bt,Xt,Ct);T.generateMipmaps=!1}else if(ve){if(Le){const xt=on(St);i.texStorage2D(a.TEXTURE_2D,At,Nt,xt.width,xt.height)}q&&i.texSubImage2D(a.TEXTURE_2D,0,0,0,Bt,Xt,St)}else i.texImage2D(a.TEXTURE_2D,0,Nt,Bt,Xt,St);M(T)&&R(gt),Lt.__version=wt.version,T.onUpdate&&T.onUpdate(T)}D.__version=T.version}function Dt(D,T,it){if(T.image.length!==6)return;const gt=et(D,T),bt=T.source;i.bindTexture(a.TEXTURE_CUBE_MAP,D.__webglTexture,a.TEXTURE0+it);const wt=s.get(bt);if(bt.version!==wt.__version||gt===!0){i.activeTexture(a.TEXTURE0+it);const Lt=Oe.getPrimaries(Oe.workingColorSpace),mt=T.colorSpace===ls?null:Oe.getPrimaries(T.colorSpace),St=T.colorSpace===ls||Lt===mt?a.NONE:a.BROWSER_DEFAULT_WEBGL;i.pixelStorei(a.UNPACK_FLIP_Y_WEBGL,T.flipY),i.pixelStorei(a.UNPACK_PREMULTIPLY_ALPHA_WEBGL,T.premultiplyAlpha),i.pixelStorei(a.UNPACK_ALIGNMENT,T.unpackAlignment),i.pixelStorei(a.UNPACK_COLORSPACE_CONVERSION_WEBGL,St);const Bt=T.isCompressedTexture||T.image[0].isCompressedTexture,Xt=T.image[0]&&T.image[0].isDataTexture,Nt=[];for(let Et=0;Et<6;Et++)!Bt&&!Xt?Nt[Et]=S(T.image[Et],!0,l.maxCubemapSize):Nt[Et]=Xt?T.image[Et].image:T.image[Et],Nt[Et]=Ot(T,Nt[Et]);const Ct=Nt[0],ne=c.convert(T.format,T.colorSpace),ve=c.convert(T.type),Le=N(T.internalFormat,ne,ve,T.normalized,T.colorSpace),q=T.isVideoTexture!==!0,At=wt.__version===void 0||gt===!0,xt=bt.dataReady;let Vt=U(T,Ct);lt(a.TEXTURE_CUBE_MAP,T);let Ut;if(Bt){q&&At&&i.texStorage2D(a.TEXTURE_CUBE_MAP,Vt,Le,Ct.width,Ct.height);for(let Et=0;Et<6;Et++){Ut=Nt[Et].mipmaps;for(let Zt=0;Zt<Ut.length;Zt++){const ae=Ut[Zt];T.format!==ma?ne!==null?q?xt&&i.compressedTexSubImage2D(a.TEXTURE_CUBE_MAP_POSITIVE_X+Et,Zt,0,0,ae.width,ae.height,ne,ae.data):i.compressedTexImage2D(a.TEXTURE_CUBE_MAP_POSITIVE_X+Et,Zt,Le,ae.width,ae.height,0,ae.data):de("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):q?xt&&i.texSubImage2D(a.TEXTURE_CUBE_MAP_POSITIVE_X+Et,Zt,0,0,ae.width,ae.height,ne,ve,ae.data):i.texImage2D(a.TEXTURE_CUBE_MAP_POSITIVE_X+Et,Zt,Le,ae.width,ae.height,0,ne,ve,ae.data)}}}else{if(Ut=T.mipmaps,q&&At){Ut.length>0&&Vt++;const Et=on(Nt[0]);i.texStorage2D(a.TEXTURE_CUBE_MAP,Vt,Le,Et.width,Et.height)}for(let Et=0;Et<6;Et++)if(Xt){q?xt&&i.texSubImage2D(a.TEXTURE_CUBE_MAP_POSITIVE_X+Et,0,0,0,Nt[Et].width,Nt[Et].height,ne,ve,Nt[Et].data):i.texImage2D(a.TEXTURE_CUBE_MAP_POSITIVE_X+Et,0,Le,Nt[Et].width,Nt[Et].height,0,ne,ve,Nt[Et].data);for(let Zt=0;Zt<Ut.length;Zt++){const We=Ut[Zt].image[Et].image;q?xt&&i.texSubImage2D(a.TEXTURE_CUBE_MAP_POSITIVE_X+Et,Zt+1,0,0,We.width,We.height,ne,ve,We.data):i.texImage2D(a.TEXTURE_CUBE_MAP_POSITIVE_X+Et,Zt+1,Le,We.width,We.height,0,ne,ve,We.data)}}else{q?xt&&i.texSubImage2D(a.TEXTURE_CUBE_MAP_POSITIVE_X+Et,0,0,0,ne,ve,Nt[Et]):i.texImage2D(a.TEXTURE_CUBE_MAP_POSITIVE_X+Et,0,Le,ne,ve,Nt[Et]);for(let Zt=0;Zt<Ut.length;Zt++){const ae=Ut[Zt];q?xt&&i.texSubImage2D(a.TEXTURE_CUBE_MAP_POSITIVE_X+Et,Zt+1,0,0,ne,ve,ae.image[Et]):i.texImage2D(a.TEXTURE_CUBE_MAP_POSITIVE_X+Et,Zt+1,Le,ne,ve,ae.image[Et])}}}M(T)&&R(a.TEXTURE_CUBE_MAP),wt.__version=bt.version,T.onUpdate&&T.onUpdate(T)}D.__version=T.version}function Mt(D,T,it,gt,bt,wt){const Lt=c.convert(it.format,it.colorSpace),mt=c.convert(it.type),St=N(it.internalFormat,Lt,mt,it.normalized,it.colorSpace),Bt=s.get(T),Xt=s.get(it);if(Xt.__renderTarget=T,!Bt.__hasExternalTextures){const Nt=Math.max(1,T.width>>wt),Ct=Math.max(1,T.height>>wt);bt===a.TEXTURE_3D||bt===a.TEXTURE_2D_ARRAY?i.texImage3D(bt,wt,St,Nt,Ct,T.depth,0,Lt,mt,null):i.texImage2D(bt,wt,St,Nt,Ct,0,Lt,mt,null)}i.bindFramebuffer(a.FRAMEBUFFER,D),Me(T)?h.framebufferTexture2DMultisampleEXT(a.FRAMEBUFFER,gt,bt,Xt.__webglTexture,0,tn(T)):(bt===a.TEXTURE_2D||bt>=a.TEXTURE_CUBE_MAP_POSITIVE_X&&bt<=a.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&a.framebufferTexture2D(a.FRAMEBUFFER,gt,bt,Xt.__webglTexture,wt),i.bindFramebuffer(a.FRAMEBUFFER,null)}function kt(D,T,it){if(a.bindRenderbuffer(a.RENDERBUFFER,D),T.depthBuffer){const gt=T.depthTexture,bt=gt&&gt.isDepthTexture?gt.type:null,wt=H(T.stencilBuffer,bt),Lt=T.stencilBuffer?a.DEPTH_STENCIL_ATTACHMENT:a.DEPTH_ATTACHMENT;Me(T)?h.renderbufferStorageMultisampleEXT(a.RENDERBUFFER,tn(T),wt,T.width,T.height):it?a.renderbufferStorageMultisample(a.RENDERBUFFER,tn(T),wt,T.width,T.height):a.renderbufferStorage(a.RENDERBUFFER,wt,T.width,T.height),a.framebufferRenderbuffer(a.FRAMEBUFFER,Lt,a.RENDERBUFFER,D)}else{const gt=T.textures;for(let bt=0;bt<gt.length;bt++){const wt=gt[bt],Lt=c.convert(wt.format,wt.colorSpace),mt=c.convert(wt.type),St=N(wt.internalFormat,Lt,mt,wt.normalized,wt.colorSpace);Me(T)?h.renderbufferStorageMultisampleEXT(a.RENDERBUFFER,tn(T),St,T.width,T.height):it?a.renderbufferStorageMultisample(a.RENDERBUFFER,tn(T),St,T.width,T.height):a.renderbufferStorage(a.RENDERBUFFER,St,T.width,T.height)}}a.bindRenderbuffer(a.RENDERBUFFER,null)}function he(D,T,it){const gt=T.isWebGLCubeRenderTarget===!0;if(i.bindFramebuffer(a.FRAMEBUFFER,D),!(T.depthTexture&&T.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");const bt=s.get(T.depthTexture);if(bt.__renderTarget=T,(!bt.__webglTexture||T.depthTexture.image.width!==T.width||T.depthTexture.image.height!==T.height)&&(T.depthTexture.image.width=T.width,T.depthTexture.image.height=T.height,T.depthTexture.needsUpdate=!0),gt){if(bt.__webglInit===void 0&&(bt.__webglInit=!0,T.depthTexture.addEventListener("dispose",L)),bt.__webglTexture===void 0){bt.__webglTexture=a.createTexture(),i.bindTexture(a.TEXTURE_CUBE_MAP,bt.__webglTexture),lt(a.TEXTURE_CUBE_MAP,T.depthTexture);const Bt=c.convert(T.depthTexture.format),Xt=c.convert(T.depthTexture.type);let Nt;T.depthTexture.format===_r?Nt=a.DEPTH_COMPONENT24:T.depthTexture.format===Qs&&(Nt=a.DEPTH24_STENCIL8);for(let Ct=0;Ct<6;Ct++)a.texImage2D(a.TEXTURE_CUBE_MAP_POSITIVE_X+Ct,0,Nt,T.width,T.height,0,Bt,Xt,null)}}else J(T.depthTexture,0);const wt=bt.__webglTexture,Lt=tn(T),mt=gt?a.TEXTURE_CUBE_MAP_POSITIVE_X+it:a.TEXTURE_2D,St=T.depthTexture.format===Qs?a.DEPTH_STENCIL_ATTACHMENT:a.DEPTH_ATTACHMENT;if(T.depthTexture.format===_r)Me(T)?h.framebufferTexture2DMultisampleEXT(a.FRAMEBUFFER,St,mt,wt,0,Lt):a.framebufferTexture2D(a.FRAMEBUFFER,St,mt,wt,0);else if(T.depthTexture.format===Qs)Me(T)?h.framebufferTexture2DMultisampleEXT(a.FRAMEBUFFER,St,mt,wt,0,Lt):a.framebufferTexture2D(a.FRAMEBUFFER,St,mt,wt,0);else throw new Error("Unknown depthTexture format")}function He(D){const T=s.get(D),it=D.isWebGLCubeRenderTarget===!0;if(T.__boundDepthTexture!==D.depthTexture){const gt=D.depthTexture;if(T.__depthDisposeCallback&&T.__depthDisposeCallback(),gt){const bt=()=>{delete T.__boundDepthTexture,delete T.__depthDisposeCallback,gt.removeEventListener("dispose",bt)};gt.addEventListener("dispose",bt),T.__depthDisposeCallback=bt}T.__boundDepthTexture=gt}if(D.depthTexture&&!T.__autoAllocateDepthBuffer)if(it)for(let gt=0;gt<6;gt++)he(T.__webglFramebuffer[gt],D,gt);else{const gt=D.texture.mipmaps;gt&&gt.length>0?he(T.__webglFramebuffer[0],D,0):he(T.__webglFramebuffer,D,0)}else if(it){T.__webglDepthbuffer=[];for(let gt=0;gt<6;gt++)if(i.bindFramebuffer(a.FRAMEBUFFER,T.__webglFramebuffer[gt]),T.__webglDepthbuffer[gt]===void 0)T.__webglDepthbuffer[gt]=a.createRenderbuffer(),kt(T.__webglDepthbuffer[gt],D,!1);else{const bt=D.stencilBuffer?a.DEPTH_STENCIL_ATTACHMENT:a.DEPTH_ATTACHMENT,wt=T.__webglDepthbuffer[gt];a.bindRenderbuffer(a.RENDERBUFFER,wt),a.framebufferRenderbuffer(a.FRAMEBUFFER,bt,a.RENDERBUFFER,wt)}}else{const gt=D.texture.mipmaps;if(gt&&gt.length>0?i.bindFramebuffer(a.FRAMEBUFFER,T.__webglFramebuffer[0]):i.bindFramebuffer(a.FRAMEBUFFER,T.__webglFramebuffer),T.__webglDepthbuffer===void 0)T.__webglDepthbuffer=a.createRenderbuffer(),kt(T.__webglDepthbuffer,D,!1);else{const bt=D.stencilBuffer?a.DEPTH_STENCIL_ATTACHMENT:a.DEPTH_ATTACHMENT,wt=T.__webglDepthbuffer;a.bindRenderbuffer(a.RENDERBUFFER,wt),a.framebufferRenderbuffer(a.FRAMEBUFFER,bt,a.RENDERBUFFER,wt)}}i.bindFramebuffer(a.FRAMEBUFFER,null)}function Ge(D,T,it){const gt=s.get(D);T!==void 0&&Mt(gt.__webglFramebuffer,D,D.texture,a.COLOR_ATTACHMENT0,a.TEXTURE_2D,0),it!==void 0&&He(D)}function ce(D){const T=D.texture,it=s.get(D),gt=s.get(T);D.addEventListener("dispose",E);const bt=D.textures,wt=D.isWebGLCubeRenderTarget===!0,Lt=bt.length>1;if(Lt||(gt.__webglTexture===void 0&&(gt.__webglTexture=a.createTexture()),gt.__version=T.version,d.memory.textures++),wt){it.__webglFramebuffer=[];for(let mt=0;mt<6;mt++)if(T.mipmaps&&T.mipmaps.length>0){it.__webglFramebuffer[mt]=[];for(let St=0;St<T.mipmaps.length;St++)it.__webglFramebuffer[mt][St]=a.createFramebuffer()}else it.__webglFramebuffer[mt]=a.createFramebuffer()}else{if(T.mipmaps&&T.mipmaps.length>0){it.__webglFramebuffer=[];for(let mt=0;mt<T.mipmaps.length;mt++)it.__webglFramebuffer[mt]=a.createFramebuffer()}else it.__webglFramebuffer=a.createFramebuffer();if(Lt)for(let mt=0,St=bt.length;mt<St;mt++){const Bt=s.get(bt[mt]);Bt.__webglTexture===void 0&&(Bt.__webglTexture=a.createTexture(),d.memory.textures++)}if(D.samples>0&&Me(D)===!1){it.__webglMultisampledFramebuffer=a.createFramebuffer(),it.__webglColorRenderbuffer=[],i.bindFramebuffer(a.FRAMEBUFFER,it.__webglMultisampledFramebuffer);for(let mt=0;mt<bt.length;mt++){const St=bt[mt];it.__webglColorRenderbuffer[mt]=a.createRenderbuffer(),a.bindRenderbuffer(a.RENDERBUFFER,it.__webglColorRenderbuffer[mt]);const Bt=c.convert(St.format,St.colorSpace),Xt=c.convert(St.type),Nt=N(St.internalFormat,Bt,Xt,St.normalized,St.colorSpace,D.isXRRenderTarget===!0),Ct=tn(D);a.renderbufferStorageMultisample(a.RENDERBUFFER,Ct,Nt,D.width,D.height),a.framebufferRenderbuffer(a.FRAMEBUFFER,a.COLOR_ATTACHMENT0+mt,a.RENDERBUFFER,it.__webglColorRenderbuffer[mt])}a.bindRenderbuffer(a.RENDERBUFFER,null),D.depthBuffer&&(it.__webglDepthRenderbuffer=a.createRenderbuffer(),kt(it.__webglDepthRenderbuffer,D,!0)),i.bindFramebuffer(a.FRAMEBUFFER,null)}}if(wt){i.bindTexture(a.TEXTURE_CUBE_MAP,gt.__webglTexture),lt(a.TEXTURE_CUBE_MAP,T);for(let mt=0;mt<6;mt++)if(T.mipmaps&&T.mipmaps.length>0)for(let St=0;St<T.mipmaps.length;St++)Mt(it.__webglFramebuffer[mt][St],D,T,a.COLOR_ATTACHMENT0,a.TEXTURE_CUBE_MAP_POSITIVE_X+mt,St);else Mt(it.__webglFramebuffer[mt],D,T,a.COLOR_ATTACHMENT0,a.TEXTURE_CUBE_MAP_POSITIVE_X+mt,0);M(T)&&R(a.TEXTURE_CUBE_MAP),i.unbindTexture()}else if(Lt){for(let mt=0,St=bt.length;mt<St;mt++){const Bt=bt[mt],Xt=s.get(Bt);let Nt=a.TEXTURE_2D;(D.isWebGL3DRenderTarget||D.isWebGLArrayRenderTarget)&&(Nt=D.isWebGL3DRenderTarget?a.TEXTURE_3D:a.TEXTURE_2D_ARRAY),i.bindTexture(Nt,Xt.__webglTexture),lt(Nt,Bt),Mt(it.__webglFramebuffer,D,Bt,a.COLOR_ATTACHMENT0+mt,Nt,0),M(Bt)&&R(Nt)}i.unbindTexture()}else{let mt=a.TEXTURE_2D;if((D.isWebGL3DRenderTarget||D.isWebGLArrayRenderTarget)&&(mt=D.isWebGL3DRenderTarget?a.TEXTURE_3D:a.TEXTURE_2D_ARRAY),i.bindTexture(mt,gt.__webglTexture),lt(mt,T),T.mipmaps&&T.mipmaps.length>0)for(let St=0;St<T.mipmaps.length;St++)Mt(it.__webglFramebuffer[St],D,T,a.COLOR_ATTACHMENT0,mt,St);else Mt(it.__webglFramebuffer,D,T,a.COLOR_ATTACHMENT0,mt,0);M(T)&&R(mt),i.unbindTexture()}D.depthBuffer&&He(D)}function Re(D){const T=D.textures;for(let it=0,gt=T.length;it<gt;it++){const bt=T[it];if(M(bt)){const wt=P(D),Lt=s.get(bt).__webglTexture;i.bindTexture(wt,Lt),R(wt),i.unbindTexture()}}}const oe=[],dn=[];function Y(D){if(D.samples>0){if(Me(D)===!1){const T=D.textures,it=D.width,gt=D.height;let bt=a.COLOR_BUFFER_BIT;const wt=D.stencilBuffer?a.DEPTH_STENCIL_ATTACHMENT:a.DEPTH_ATTACHMENT,Lt=s.get(D),mt=T.length>1;if(mt)for(let Bt=0;Bt<T.length;Bt++)i.bindFramebuffer(a.FRAMEBUFFER,Lt.__webglMultisampledFramebuffer),a.framebufferRenderbuffer(a.FRAMEBUFFER,a.COLOR_ATTACHMENT0+Bt,a.RENDERBUFFER,null),i.bindFramebuffer(a.FRAMEBUFFER,Lt.__webglFramebuffer),a.framebufferTexture2D(a.DRAW_FRAMEBUFFER,a.COLOR_ATTACHMENT0+Bt,a.TEXTURE_2D,null,0);i.bindFramebuffer(a.READ_FRAMEBUFFER,Lt.__webglMultisampledFramebuffer);const St=D.texture.mipmaps;St&&St.length>0?i.bindFramebuffer(a.DRAW_FRAMEBUFFER,Lt.__webglFramebuffer[0]):i.bindFramebuffer(a.DRAW_FRAMEBUFFER,Lt.__webglFramebuffer);for(let Bt=0;Bt<T.length;Bt++){if(D.resolveDepthBuffer&&(D.depthBuffer&&(bt|=a.DEPTH_BUFFER_BIT),D.stencilBuffer&&D.resolveStencilBuffer&&(bt|=a.STENCIL_BUFFER_BIT)),mt){a.framebufferRenderbuffer(a.READ_FRAMEBUFFER,a.COLOR_ATTACHMENT0,a.RENDERBUFFER,Lt.__webglColorRenderbuffer[Bt]);const Xt=s.get(T[Bt]).__webglTexture;a.framebufferTexture2D(a.DRAW_FRAMEBUFFER,a.COLOR_ATTACHMENT0,a.TEXTURE_2D,Xt,0)}a.blitFramebuffer(0,0,it,gt,0,0,it,gt,bt,a.NEAREST),p===!0&&(oe.length=0,dn.length=0,oe.push(a.COLOR_ATTACHMENT0+Bt),D.depthBuffer&&D.resolveDepthBuffer===!1&&(oe.push(wt),dn.push(wt),a.invalidateFramebuffer(a.DRAW_FRAMEBUFFER,dn)),a.invalidateFramebuffer(a.READ_FRAMEBUFFER,oe))}if(i.bindFramebuffer(a.READ_FRAMEBUFFER,null),i.bindFramebuffer(a.DRAW_FRAMEBUFFER,null),mt)for(let Bt=0;Bt<T.length;Bt++){i.bindFramebuffer(a.FRAMEBUFFER,Lt.__webglMultisampledFramebuffer),a.framebufferRenderbuffer(a.FRAMEBUFFER,a.COLOR_ATTACHMENT0+Bt,a.RENDERBUFFER,Lt.__webglColorRenderbuffer[Bt]);const Xt=s.get(T[Bt]).__webglTexture;i.bindFramebuffer(a.FRAMEBUFFER,Lt.__webglFramebuffer),a.framebufferTexture2D(a.DRAW_FRAMEBUFFER,a.COLOR_ATTACHMENT0+Bt,a.TEXTURE_2D,Xt,0)}i.bindFramebuffer(a.DRAW_FRAMEBUFFER,Lt.__webglMultisampledFramebuffer)}else if(D.depthBuffer&&D.resolveDepthBuffer===!1&&p){const T=D.stencilBuffer?a.DEPTH_STENCIL_ATTACHMENT:a.DEPTH_ATTACHMENT;a.invalidateFramebuffer(a.DRAW_FRAMEBUFFER,[T])}}}function tn(D){return Math.min(l.maxSamples,D.samples)}function Me(D){const T=s.get(D);return D.samples>0&&t.has("WEBGL_multisampled_render_to_texture")===!0&&T.__useRenderToTexture!==!1}function Ve(D){const T=d.render.frame;_.get(D)!==T&&(_.set(D,T),D.update())}function Ot(D,T){const it=D.colorSpace,gt=D.format,bt=D.type;return D.isCompressedTexture===!0||D.isVideoTexture===!0||it!==Bd&&it!==ls&&(Oe.getTransfer(it)===$e?(gt!==ma||bt!==Ki)&&de("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):Be("WebGLTextures: Unsupported texture color space:",it)),T}function on(D){return typeof HTMLImageElement<"u"&&D instanceof HTMLImageElement?(m.width=D.naturalWidth||D.width,m.height=D.naturalHeight||D.height):typeof VideoFrame<"u"&&D instanceof VideoFrame?(m.width=D.displayWidth,m.height=D.displayHeight):(m.width=D.width,m.height=D.height),m}this.allocateTextureUnit=B,this.resetTextureUnits=tt,this.getTextureUnits=ft,this.setTextureUnits=X,this.setTexture2D=J,this.setTexture2DArray=dt,this.setTexture3D=pt,this.setTextureCube=Tt,this.rebindTextures=Ge,this.setupRenderTarget=ce,this.updateRenderTargetMipmap=Re,this.updateMultisampleRenderTarget=Y,this.setupDepthRenderbuffer=He,this.setupFrameBufferTexture=Mt,this.useMultisampledRTT=Me,this.isReversedDepthBuffer=function(){return i.buffers.depth.getReversed()}}function EO(a,t){function i(s,l=ls){let c;const d=Oe.getTransfer(l);if(s===Ki)return a.UNSIGNED_BYTE;if(s===iv)return a.UNSIGNED_SHORT_4_4_4_4;if(s===av)return a.UNSIGNED_SHORT_5_5_5_1;if(s===lE)return a.UNSIGNED_INT_5_9_9_9_REV;if(s===cE)return a.UNSIGNED_INT_10F_11F_11F_REV;if(s===sE)return a.BYTE;if(s===oE)return a.SHORT;if(s===fu)return a.UNSIGNED_SHORT;if(s===nv)return a.INT;if(s===Va)return a.UNSIGNED_INT;if(s===Pa)return a.FLOAT;if(s===vr)return a.HALF_FLOAT;if(s===uE)return a.ALPHA;if(s===fE)return a.RGB;if(s===ma)return a.RGBA;if(s===_r)return a.DEPTH_COMPONENT;if(s===Qs)return a.DEPTH_STENCIL;if(s===dE)return a.RED;if(s===rv)return a.RED_INTEGER;if(s===io)return a.RG;if(s===sv)return a.RG_INTEGER;if(s===ov)return a.RGBA_INTEGER;if(s===Ad||s===wd||s===Rd||s===Cd)if(d===$e)if(c=t.get("WEBGL_compressed_texture_s3tc_srgb"),c!==null){if(s===Ad)return c.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(s===wd)return c.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(s===Rd)return c.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(s===Cd)return c.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(c=t.get("WEBGL_compressed_texture_s3tc"),c!==null){if(s===Ad)return c.COMPRESSED_RGB_S3TC_DXT1_EXT;if(s===wd)return c.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(s===Rd)return c.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(s===Cd)return c.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(s===ug||s===fg||s===dg||s===hg)if(c=t.get("WEBGL_compressed_texture_pvrtc"),c!==null){if(s===ug)return c.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(s===fg)return c.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(s===dg)return c.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(s===hg)return c.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(s===pg||s===mg||s===gg||s===vg||s===_g||s===Id||s===xg)if(c=t.get("WEBGL_compressed_texture_etc"),c!==null){if(s===pg||s===mg)return d===$e?c.COMPRESSED_SRGB8_ETC2:c.COMPRESSED_RGB8_ETC2;if(s===gg)return d===$e?c.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:c.COMPRESSED_RGBA8_ETC2_EAC;if(s===vg)return c.COMPRESSED_R11_EAC;if(s===_g)return c.COMPRESSED_SIGNED_R11_EAC;if(s===Id)return c.COMPRESSED_RG11_EAC;if(s===xg)return c.COMPRESSED_SIGNED_RG11_EAC}else return null;if(s===yg||s===Sg||s===Mg||s===bg||s===Eg||s===Tg||s===Ag||s===wg||s===Rg||s===Cg||s===Dg||s===Ng||s===Ug||s===Lg)if(c=t.get("WEBGL_compressed_texture_astc"),c!==null){if(s===yg)return d===$e?c.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:c.COMPRESSED_RGBA_ASTC_4x4_KHR;if(s===Sg)return d===$e?c.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:c.COMPRESSED_RGBA_ASTC_5x4_KHR;if(s===Mg)return d===$e?c.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:c.COMPRESSED_RGBA_ASTC_5x5_KHR;if(s===bg)return d===$e?c.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:c.COMPRESSED_RGBA_ASTC_6x5_KHR;if(s===Eg)return d===$e?c.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:c.COMPRESSED_RGBA_ASTC_6x6_KHR;if(s===Tg)return d===$e?c.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:c.COMPRESSED_RGBA_ASTC_8x5_KHR;if(s===Ag)return d===$e?c.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:c.COMPRESSED_RGBA_ASTC_8x6_KHR;if(s===wg)return d===$e?c.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:c.COMPRESSED_RGBA_ASTC_8x8_KHR;if(s===Rg)return d===$e?c.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:c.COMPRESSED_RGBA_ASTC_10x5_KHR;if(s===Cg)return d===$e?c.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:c.COMPRESSED_RGBA_ASTC_10x6_KHR;if(s===Dg)return d===$e?c.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:c.COMPRESSED_RGBA_ASTC_10x8_KHR;if(s===Ng)return d===$e?c.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:c.COMPRESSED_RGBA_ASTC_10x10_KHR;if(s===Ug)return d===$e?c.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:c.COMPRESSED_RGBA_ASTC_12x10_KHR;if(s===Lg)return d===$e?c.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:c.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(s===Og||s===Pg||s===zg)if(c=t.get("EXT_texture_compression_bptc"),c!==null){if(s===Og)return d===$e?c.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:c.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(s===Pg)return c.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(s===zg)return c.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(s===Ig||s===Fg||s===Fd||s===Bg)if(c=t.get("EXT_texture_compression_rgtc"),c!==null){if(s===Ig)return c.COMPRESSED_RED_RGTC1_EXT;if(s===Fg)return c.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(s===Fd)return c.COMPRESSED_RED_GREEN_RGTC2_EXT;if(s===Bg)return c.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return s===du?a.UNSIGNED_INT_24_8:a[s]!==void 0?a[s]:null}return{convert:i}}const TO=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,AO=`
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

	if ( coord.x >= 1.0 ) {

		gl_FragDepth = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

	} else {

		gl_FragDepth = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

	}

}`;class wO{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(t,i){if(this.texture===null){const s=new SE(t.texture);(t.depthNear!==i.depthNear||t.depthFar!==i.depthFar)&&(this.depthNear=t.depthNear,this.depthFar=t.depthFar),this.texture=s}}getMesh(t){if(this.texture!==null&&this.mesh===null){const i=t.cameras[0].viewport,s=new Xa({vertexShader:TO,fragmentShader:AO,uniforms:{depthColor:{value:this.texture},depthWidth:{value:i.z},depthHeight:{value:i.w}}});this.mesh=new ka(new nh(20,20),s)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class RO extends ao{constructor(t,i){super();const s=this;let l=null,c=1,d=null,h="local-floor",p=1,m=null,_=null,g=null,v=null,y=null,b=null;const C=typeof XRWebGLBinding<"u",S=new wO,M={},R=i.getContextAttributes();let P=null,N=null;const H=[],U=[],L=new Je;let E=null;const O=new Qi;O.viewport=new Mn;const V=new Qi;V.viewport=new Mn;const z=[O,V],Z=new FC;let tt=null,ft=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(et){let ht=H[et];return ht===void 0&&(ht=new Qm,H[et]=ht),ht.getTargetRaySpace()},this.getControllerGrip=function(et){let ht=H[et];return ht===void 0&&(ht=new Qm,H[et]=ht),ht.getGripSpace()},this.getHand=function(et){let ht=H[et];return ht===void 0&&(ht=new Qm,H[et]=ht),ht.getHandSpace()};function X(et){const ht=U.indexOf(et.inputSource);if(ht===-1)return;const yt=H[ht];yt!==void 0&&(yt.update(et.inputSource,et.frame,m||d),yt.dispatchEvent({type:et.type,data:et.inputSource}))}function B(){l.removeEventListener("select",X),l.removeEventListener("selectstart",X),l.removeEventListener("selectend",X),l.removeEventListener("squeeze",X),l.removeEventListener("squeezestart",X),l.removeEventListener("squeezeend",X),l.removeEventListener("end",B),l.removeEventListener("inputsourceschange",W);for(let et=0;et<H.length;et++){const ht=U[et];ht!==null&&(U[et]=null,H[et].disconnect(ht))}tt=null,ft=null,S.reset();for(const et in M)delete M[et];t.setRenderTarget(P),y=null,v=null,g=null,l=null,N=null,lt.stop(),s.isPresenting=!1,t.setPixelRatio(E),t.setSize(L.width,L.height,!1),s.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(et){c=et,s.isPresenting===!0&&de("WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(et){h=et,s.isPresenting===!0&&de("WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return m||d},this.setReferenceSpace=function(et){m=et},this.getBaseLayer=function(){return v!==null?v:y},this.getBinding=function(){return g===null&&C&&(g=new XRWebGLBinding(l,i)),g},this.getFrame=function(){return b},this.getSession=function(){return l},this.setSession=async function(et){if(l=et,l!==null){if(P=t.getRenderTarget(),l.addEventListener("select",X),l.addEventListener("selectstart",X),l.addEventListener("selectend",X),l.addEventListener("squeeze",X),l.addEventListener("squeezestart",X),l.addEventListener("squeezeend",X),l.addEventListener("end",B),l.addEventListener("inputsourceschange",W),R.xrCompatible!==!0&&await i.makeXRCompatible(),E=t.getPixelRatio(),t.getSize(L),C&&"createProjectionLayer"in XRWebGLBinding.prototype){let yt=null,Rt=null,Dt=null;R.depth&&(Dt=R.stencil?i.DEPTH24_STENCIL8:i.DEPTH_COMPONENT24,yt=R.stencil?Qs:_r,Rt=R.stencil?du:Va);const Mt={colorFormat:i.RGBA8,depthFormat:Dt,scaleFactor:c};g=this.getBinding(),v=g.createProjectionLayer(Mt),l.updateRenderState({layers:[v]}),t.setPixelRatio(1),t.setSize(v.textureWidth,v.textureHeight,!1),N=new Ha(v.textureWidth,v.textureHeight,{format:ma,type:Ki,depthTexture:new Ol(v.textureWidth,v.textureHeight,Rt,void 0,void 0,void 0,void 0,void 0,void 0,yt),stencilBuffer:R.stencil,colorSpace:t.outputColorSpace,samples:R.antialias?4:0,resolveDepthBuffer:v.ignoreDepthValues===!1,resolveStencilBuffer:v.ignoreDepthValues===!1})}else{const yt={antialias:R.antialias,alpha:!0,depth:R.depth,stencil:R.stencil,framebufferScaleFactor:c};y=new XRWebGLLayer(l,i,yt),l.updateRenderState({baseLayer:y}),t.setPixelRatio(1),t.setSize(y.framebufferWidth,y.framebufferHeight,!1),N=new Ha(y.framebufferWidth,y.framebufferHeight,{format:ma,type:Ki,colorSpace:t.outputColorSpace,stencilBuffer:R.stencil,resolveDepthBuffer:y.ignoreDepthValues===!1,resolveStencilBuffer:y.ignoreDepthValues===!1})}N.isXRRenderTarget=!0,this.setFoveation(p),m=null,d=await l.requestReferenceSpace(h),lt.setContext(l),lt.start(),s.isPresenting=!0,s.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(l!==null)return l.environmentBlendMode},this.getDepthTexture=function(){return S.getDepthTexture()};function W(et){for(let ht=0;ht<et.removed.length;ht++){const yt=et.removed[ht],Rt=U.indexOf(yt);Rt>=0&&(U[Rt]=null,H[Rt].disconnect(yt))}for(let ht=0;ht<et.added.length;ht++){const yt=et.added[ht];let Rt=U.indexOf(yt);if(Rt===-1){for(let Mt=0;Mt<H.length;Mt++)if(Mt>=U.length){U.push(yt),Rt=Mt;break}else if(U[Mt]===null){U[Mt]=yt,Rt=Mt;break}if(Rt===-1)break}const Dt=H[Rt];Dt&&Dt.connect(yt)}}const J=new ut,dt=new ut;function pt(et,ht,yt){J.setFromMatrixPosition(ht.matrixWorld),dt.setFromMatrixPosition(yt.matrixWorld);const Rt=J.distanceTo(dt),Dt=ht.projectionMatrix.elements,Mt=yt.projectionMatrix.elements,kt=Dt[14]/(Dt[10]-1),he=Dt[14]/(Dt[10]+1),He=(Dt[9]+1)/Dt[5],Ge=(Dt[9]-1)/Dt[5],ce=(Dt[8]-1)/Dt[0],Re=(Mt[8]+1)/Mt[0],oe=kt*ce,dn=kt*Re,Y=Rt/(-ce+Re),tn=Y*-ce;if(ht.matrixWorld.decompose(et.position,et.quaternion,et.scale),et.translateX(tn),et.translateZ(Y),et.matrixWorld.compose(et.position,et.quaternion,et.scale),et.matrixWorldInverse.copy(et.matrixWorld).invert(),Dt[10]===-1)et.projectionMatrix.copy(ht.projectionMatrix),et.projectionMatrixInverse.copy(ht.projectionMatrixInverse);else{const Me=kt+Y,Ve=he+Y,Ot=oe-tn,on=dn+(Rt-tn),D=He*he/Ve*Me,T=Ge*he/Ve*Me;et.projectionMatrix.makePerspective(Ot,on,D,T,Me,Ve),et.projectionMatrixInverse.copy(et.projectionMatrix).invert()}}function Tt(et,ht){ht===null?et.matrixWorld.copy(et.matrix):et.matrixWorld.multiplyMatrices(ht.matrixWorld,et.matrix),et.matrixWorldInverse.copy(et.matrixWorld).invert()}this.updateCamera=function(et){if(l===null)return;let ht=et.near,yt=et.far;S.texture!==null&&(S.depthNear>0&&(ht=S.depthNear),S.depthFar>0&&(yt=S.depthFar)),Z.near=V.near=O.near=ht,Z.far=V.far=O.far=yt,(tt!==Z.near||ft!==Z.far)&&(l.updateRenderState({depthNear:Z.near,depthFar:Z.far}),tt=Z.near,ft=Z.far),Z.layers.mask=et.layers.mask|6,O.layers.mask=Z.layers.mask&-5,V.layers.mask=Z.layers.mask&-3;const Rt=et.parent,Dt=Z.cameras;Tt(Z,Rt);for(let Mt=0;Mt<Dt.length;Mt++)Tt(Dt[Mt],Rt);Dt.length===2?pt(Z,O,V):Z.projectionMatrix.copy(O.projectionMatrix),zt(et,Z,Rt)};function zt(et,ht,yt){yt===null?et.matrix.copy(ht.matrixWorld):(et.matrix.copy(yt.matrixWorld),et.matrix.invert(),et.matrix.multiply(ht.matrixWorld)),et.matrix.decompose(et.position,et.quaternion,et.scale),et.updateMatrixWorld(!0),et.projectionMatrix.copy(ht.projectionMatrix),et.projectionMatrixInverse.copy(ht.projectionMatrixInverse),et.isPerspectiveCamera&&(et.fov=Gg*2*Math.atan(1/et.projectionMatrix.elements[5]),et.zoom=1)}this.getCamera=function(){return Z},this.getFoveation=function(){if(!(v===null&&y===null))return p},this.setFoveation=function(et){p=et,v!==null&&(v.fixedFoveation=et),y!==null&&y.fixedFoveation!==void 0&&(y.fixedFoveation=et)},this.hasDepthSensing=function(){return S.texture!==null},this.getDepthSensingMesh=function(){return S.getMesh(Z)},this.getCameraTexture=function(et){return M[et]};let re=null;function F(et,ht){if(_=ht.getViewerPose(m||d),b=ht,_!==null){const yt=_.views;y!==null&&(t.setRenderTargetFramebuffer(N,y.framebuffer),t.setRenderTarget(N));let Rt=!1;yt.length!==Z.cameras.length&&(Z.cameras.length=0,Rt=!0);for(let he=0;he<yt.length;he++){const He=yt[he];let Ge=null;if(y!==null)Ge=y.getViewport(He);else{const Re=g.getViewSubImage(v,He);Ge=Re.viewport,he===0&&(t.setRenderTargetTextures(N,Re.colorTexture,Re.depthStencilTexture),t.setRenderTarget(N))}let ce=z[he];ce===void 0&&(ce=new Qi,ce.layers.enable(he),ce.viewport=new Mn,z[he]=ce),ce.matrix.fromArray(He.transform.matrix),ce.matrix.decompose(ce.position,ce.quaternion,ce.scale),ce.projectionMatrix.fromArray(He.projectionMatrix),ce.projectionMatrixInverse.copy(ce.projectionMatrix).invert(),ce.viewport.set(Ge.x,Ge.y,Ge.width,Ge.height),he===0&&(Z.matrix.copy(ce.matrix),Z.matrix.decompose(Z.position,Z.quaternion,Z.scale)),Rt===!0&&Z.cameras.push(ce)}const Dt=l.enabledFeatures;if(Dt&&Dt.includes("depth-sensing")&&l.depthUsage=="gpu-optimized"&&C){g=s.getBinding();const he=g.getDepthInformation(yt[0]);he&&he.isValid&&he.texture&&S.init(he,l.renderState)}if(Dt&&Dt.includes("camera-access")&&C){t.state.unbindTexture(),g=s.getBinding();for(let he=0;he<yt.length;he++){const He=yt[he].camera;if(He){let Ge=M[He];Ge||(Ge=new SE,M[He]=Ge);const ce=g.getCameraImage(He);Ge.sourceTexture=ce}}}}for(let yt=0;yt<H.length;yt++){const Rt=U[yt],Dt=H[yt];Rt!==null&&Dt!==void 0&&Dt.update(Rt,ht,m||d)}re&&re(et,ht),ht.detectedPlanes&&s.dispatchEvent({type:"planesdetected",data:ht}),b=null}const lt=new AE;lt.setAnimationLoop(F),this.setAnimationLoop=function(et){re=et},this.dispose=function(){}}}const CO=new Nn,LE=new _e;LE.set(-1,0,0,0,1,0,0,0,1);function DO(a,t){function i(S,M){S.matrixAutoUpdate===!0&&S.updateMatrix(),M.value.copy(S.matrix)}function s(S,M){M.color.getRGB(S.fogColor.value,ME(a)),M.isFog?(S.fogNear.value=M.near,S.fogFar.value=M.far):M.isFogExp2&&(S.fogDensity.value=M.density)}function l(S,M,R,P,N){M.isNodeMaterial?M.uniformsNeedUpdate=!1:M.isMeshBasicMaterial?c(S,M):M.isMeshLambertMaterial?(c(S,M),M.envMap&&(S.envMapIntensity.value=M.envMapIntensity)):M.isMeshToonMaterial?(c(S,M),g(S,M)):M.isMeshPhongMaterial?(c(S,M),_(S,M),M.envMap&&(S.envMapIntensity.value=M.envMapIntensity)):M.isMeshStandardMaterial?(c(S,M),v(S,M),M.isMeshPhysicalMaterial&&y(S,M,N)):M.isMeshMatcapMaterial?(c(S,M),b(S,M)):M.isMeshDepthMaterial?c(S,M):M.isMeshDistanceMaterial?(c(S,M),C(S,M)):M.isMeshNormalMaterial?c(S,M):M.isLineBasicMaterial?(d(S,M),M.isLineDashedMaterial&&h(S,M)):M.isPointsMaterial?p(S,M,R,P):M.isSpriteMaterial?m(S,M):M.isShadowMaterial?(S.color.value.copy(M.color),S.opacity.value=M.opacity):M.isShaderMaterial&&(M.uniformsNeedUpdate=!1)}function c(S,M){S.opacity.value=M.opacity,M.color&&S.diffuse.value.copy(M.color),M.emissive&&S.emissive.value.copy(M.emissive).multiplyScalar(M.emissiveIntensity),M.map&&(S.map.value=M.map,i(M.map,S.mapTransform)),M.alphaMap&&(S.alphaMap.value=M.alphaMap,i(M.alphaMap,S.alphaMapTransform)),M.bumpMap&&(S.bumpMap.value=M.bumpMap,i(M.bumpMap,S.bumpMapTransform),S.bumpScale.value=M.bumpScale,M.side===yi&&(S.bumpScale.value*=-1)),M.normalMap&&(S.normalMap.value=M.normalMap,i(M.normalMap,S.normalMapTransform),S.normalScale.value.copy(M.normalScale),M.side===yi&&S.normalScale.value.negate()),M.displacementMap&&(S.displacementMap.value=M.displacementMap,i(M.displacementMap,S.displacementMapTransform),S.displacementScale.value=M.displacementScale,S.displacementBias.value=M.displacementBias),M.emissiveMap&&(S.emissiveMap.value=M.emissiveMap,i(M.emissiveMap,S.emissiveMapTransform)),M.specularMap&&(S.specularMap.value=M.specularMap,i(M.specularMap,S.specularMapTransform)),M.alphaTest>0&&(S.alphaTest.value=M.alphaTest);const R=t.get(M),P=R.envMap,N=R.envMapRotation;P&&(S.envMap.value=P,S.envMapRotation.value.setFromMatrix4(CO.makeRotationFromEuler(N)).transpose(),P.isCubeTexture&&P.isRenderTargetTexture===!1&&S.envMapRotation.value.premultiply(LE),S.reflectivity.value=M.reflectivity,S.ior.value=M.ior,S.refractionRatio.value=M.refractionRatio),M.lightMap&&(S.lightMap.value=M.lightMap,S.lightMapIntensity.value=M.lightMapIntensity,i(M.lightMap,S.lightMapTransform)),M.aoMap&&(S.aoMap.value=M.aoMap,S.aoMapIntensity.value=M.aoMapIntensity,i(M.aoMap,S.aoMapTransform))}function d(S,M){S.diffuse.value.copy(M.color),S.opacity.value=M.opacity,M.map&&(S.map.value=M.map,i(M.map,S.mapTransform))}function h(S,M){S.dashSize.value=M.dashSize,S.totalSize.value=M.dashSize+M.gapSize,S.scale.value=M.scale}function p(S,M,R,P){S.diffuse.value.copy(M.color),S.opacity.value=M.opacity,S.size.value=M.size*R,S.scale.value=P*.5,M.map&&(S.map.value=M.map,i(M.map,S.uvTransform)),M.alphaMap&&(S.alphaMap.value=M.alphaMap,i(M.alphaMap,S.alphaMapTransform)),M.alphaTest>0&&(S.alphaTest.value=M.alphaTest)}function m(S,M){S.diffuse.value.copy(M.color),S.opacity.value=M.opacity,S.rotation.value=M.rotation,M.map&&(S.map.value=M.map,i(M.map,S.mapTransform)),M.alphaMap&&(S.alphaMap.value=M.alphaMap,i(M.alphaMap,S.alphaMapTransform)),M.alphaTest>0&&(S.alphaTest.value=M.alphaTest)}function _(S,M){S.specular.value.copy(M.specular),S.shininess.value=Math.max(M.shininess,1e-4)}function g(S,M){M.gradientMap&&(S.gradientMap.value=M.gradientMap)}function v(S,M){S.metalness.value=M.metalness,M.metalnessMap&&(S.metalnessMap.value=M.metalnessMap,i(M.metalnessMap,S.metalnessMapTransform)),S.roughness.value=M.roughness,M.roughnessMap&&(S.roughnessMap.value=M.roughnessMap,i(M.roughnessMap,S.roughnessMapTransform)),M.envMap&&(S.envMapIntensity.value=M.envMapIntensity)}function y(S,M,R){S.ior.value=M.ior,M.sheen>0&&(S.sheenColor.value.copy(M.sheenColor).multiplyScalar(M.sheen),S.sheenRoughness.value=M.sheenRoughness,M.sheenColorMap&&(S.sheenColorMap.value=M.sheenColorMap,i(M.sheenColorMap,S.sheenColorMapTransform)),M.sheenRoughnessMap&&(S.sheenRoughnessMap.value=M.sheenRoughnessMap,i(M.sheenRoughnessMap,S.sheenRoughnessMapTransform))),M.clearcoat>0&&(S.clearcoat.value=M.clearcoat,S.clearcoatRoughness.value=M.clearcoatRoughness,M.clearcoatMap&&(S.clearcoatMap.value=M.clearcoatMap,i(M.clearcoatMap,S.clearcoatMapTransform)),M.clearcoatRoughnessMap&&(S.clearcoatRoughnessMap.value=M.clearcoatRoughnessMap,i(M.clearcoatRoughnessMap,S.clearcoatRoughnessMapTransform)),M.clearcoatNormalMap&&(S.clearcoatNormalMap.value=M.clearcoatNormalMap,i(M.clearcoatNormalMap,S.clearcoatNormalMapTransform),S.clearcoatNormalScale.value.copy(M.clearcoatNormalScale),M.side===yi&&S.clearcoatNormalScale.value.negate())),M.dispersion>0&&(S.dispersion.value=M.dispersion),M.iridescence>0&&(S.iridescence.value=M.iridescence,S.iridescenceIOR.value=M.iridescenceIOR,S.iridescenceThicknessMinimum.value=M.iridescenceThicknessRange[0],S.iridescenceThicknessMaximum.value=M.iridescenceThicknessRange[1],M.iridescenceMap&&(S.iridescenceMap.value=M.iridescenceMap,i(M.iridescenceMap,S.iridescenceMapTransform)),M.iridescenceThicknessMap&&(S.iridescenceThicknessMap.value=M.iridescenceThicknessMap,i(M.iridescenceThicknessMap,S.iridescenceThicknessMapTransform))),M.transmission>0&&(S.transmission.value=M.transmission,S.transmissionSamplerMap.value=R.texture,S.transmissionSamplerSize.value.set(R.width,R.height),M.transmissionMap&&(S.transmissionMap.value=M.transmissionMap,i(M.transmissionMap,S.transmissionMapTransform)),S.thickness.value=M.thickness,M.thicknessMap&&(S.thicknessMap.value=M.thicknessMap,i(M.thicknessMap,S.thicknessMapTransform)),S.attenuationDistance.value=M.attenuationDistance,S.attenuationColor.value.copy(M.attenuationColor)),M.anisotropy>0&&(S.anisotropyVector.value.set(M.anisotropy*Math.cos(M.anisotropyRotation),M.anisotropy*Math.sin(M.anisotropyRotation)),M.anisotropyMap&&(S.anisotropyMap.value=M.anisotropyMap,i(M.anisotropyMap,S.anisotropyMapTransform))),S.specularIntensity.value=M.specularIntensity,S.specularColor.value.copy(M.specularColor),M.specularColorMap&&(S.specularColorMap.value=M.specularColorMap,i(M.specularColorMap,S.specularColorMapTransform)),M.specularIntensityMap&&(S.specularIntensityMap.value=M.specularIntensityMap,i(M.specularIntensityMap,S.specularIntensityMapTransform))}function b(S,M){M.matcap&&(S.matcap.value=M.matcap)}function C(S,M){const R=t.get(M).light;S.referencePosition.value.setFromMatrixPosition(R.matrixWorld),S.nearDistance.value=R.shadow.camera.near,S.farDistance.value=R.shadow.camera.far}return{refreshFogUniforms:s,refreshMaterialUniforms:l}}function NO(a,t,i,s){let l={},c={},d=[];const h=a.getParameter(a.MAX_UNIFORM_BUFFER_BINDINGS);function p(R,P){const N=P.program;s.uniformBlockBinding(R,N)}function m(R,P){let N=l[R.id];N===void 0&&(b(R),N=_(R),l[R.id]=N,R.addEventListener("dispose",S));const H=P.program;s.updateUBOMapping(R,H);const U=t.render.frame;c[R.id]!==U&&(v(R),c[R.id]=U)}function _(R){const P=g();R.__bindingPointIndex=P;const N=a.createBuffer(),H=R.__size,U=R.usage;return a.bindBuffer(a.UNIFORM_BUFFER,N),a.bufferData(a.UNIFORM_BUFFER,H,U),a.bindBuffer(a.UNIFORM_BUFFER,null),a.bindBufferBase(a.UNIFORM_BUFFER,P,N),N}function g(){for(let R=0;R<h;R++)if(d.indexOf(R)===-1)return d.push(R),R;return Be("WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function v(R){const P=l[R.id],N=R.uniforms,H=R.__cache;a.bindBuffer(a.UNIFORM_BUFFER,P);for(let U=0,L=N.length;U<L;U++){const E=Array.isArray(N[U])?N[U]:[N[U]];for(let O=0,V=E.length;O<V;O++){const z=E[O];if(y(z,U,O,H)===!0){const Z=z.__offset,tt=Array.isArray(z.value)?z.value:[z.value];let ft=0;for(let X=0;X<tt.length;X++){const B=tt[X],W=C(B);typeof B=="number"||typeof B=="boolean"?(z.__data[0]=B,a.bufferSubData(a.UNIFORM_BUFFER,Z+ft,z.__data)):B.isMatrix3?(z.__data[0]=B.elements[0],z.__data[1]=B.elements[1],z.__data[2]=B.elements[2],z.__data[3]=0,z.__data[4]=B.elements[3],z.__data[5]=B.elements[4],z.__data[6]=B.elements[5],z.__data[7]=0,z.__data[8]=B.elements[6],z.__data[9]=B.elements[7],z.__data[10]=B.elements[8],z.__data[11]=0):ArrayBuffer.isView(B)?z.__data.set(new B.constructor(B.buffer,B.byteOffset,z.__data.length)):(B.toArray(z.__data,ft),ft+=W.storage/Float32Array.BYTES_PER_ELEMENT)}a.bufferSubData(a.UNIFORM_BUFFER,Z,z.__data)}}}a.bindBuffer(a.UNIFORM_BUFFER,null)}function y(R,P,N,H){const U=R.value,L=P+"_"+N;if(H[L]===void 0)return typeof U=="number"||typeof U=="boolean"?H[L]=U:ArrayBuffer.isView(U)?H[L]=U.slice():H[L]=U.clone(),!0;{const E=H[L];if(typeof U=="number"||typeof U=="boolean"){if(E!==U)return H[L]=U,!0}else{if(ArrayBuffer.isView(U))return!0;if(E.equals(U)===!1)return E.copy(U),!0}}return!1}function b(R){const P=R.uniforms;let N=0;const H=16;for(let L=0,E=P.length;L<E;L++){const O=Array.isArray(P[L])?P[L]:[P[L]];for(let V=0,z=O.length;V<z;V++){const Z=O[V],tt=Array.isArray(Z.value)?Z.value:[Z.value];for(let ft=0,X=tt.length;ft<X;ft++){const B=tt[ft],W=C(B),J=N%H,dt=J%W.boundary,pt=J+dt;N+=dt,pt!==0&&H-pt<W.storage&&(N+=H-pt),Z.__data=new Float32Array(W.storage/Float32Array.BYTES_PER_ELEMENT),Z.__offset=N,N+=W.storage}}}const U=N%H;return U>0&&(N+=H-U),R.__size=N,R.__cache={},this}function C(R){const P={boundary:0,storage:0};return typeof R=="number"||typeof R=="boolean"?(P.boundary=4,P.storage=4):R.isVector2?(P.boundary=8,P.storage=8):R.isVector3||R.isColor?(P.boundary=16,P.storage=12):R.isVector4?(P.boundary=16,P.storage=16):R.isMatrix3?(P.boundary=48,P.storage=48):R.isMatrix4?(P.boundary=64,P.storage=64):R.isTexture?de("WebGLRenderer: Texture samplers can not be part of an uniforms group."):ArrayBuffer.isView(R)?(P.boundary=16,P.storage=R.byteLength):de("WebGLRenderer: Unsupported uniform value type.",R),P}function S(R){const P=R.target;P.removeEventListener("dispose",S);const N=d.indexOf(P.__bindingPointIndex);d.splice(N,1),a.deleteBuffer(l[P.id]),delete l[P.id],delete c[P.id]}function M(){for(const R in l)a.deleteBuffer(l[R]);d=[],l={},c={}}return{bind:p,update:m,dispose:M}}const UO=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]);let Da=null;function LO(){return Da===null&&(Da=new TC(UO,16,16,io,vr),Da.name="DFG_LUT",Da.minFilter=ti,Da.magFilter=ti,Da.wrapS=hr,Da.wrapT=hr,Da.generateMipmaps=!1,Da.needsUpdate=!0),Da}class OO{constructor(t={}){const{canvas:i=eC(),context:s=null,depth:l=!0,stencil:c=!1,alpha:d=!1,antialias:h=!1,premultipliedAlpha:p=!0,preserveDrawingBuffer:m=!1,powerPreference:_="default",failIfMajorPerformanceCaveat:g=!1,reversedDepthBuffer:v=!1,outputBufferType:y=Ki}=t;this.isWebGLRenderer=!0;let b;if(s!==null){if(typeof WebGLRenderingContext<"u"&&s instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");b=s.getContextAttributes().alpha}else b=d;const C=y,S=new Set([ov,sv,rv]),M=new Set([Ki,Va,fu,du,iv,av]),R=new Uint32Array(4),P=new Int32Array(4),N=new ut;let H=null,U=null;const L=[],E=[];let O=null;this.domElement=i,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=Ba,this.toneMappingExposure=1,this.transmissionResolutionScale=1;const V=this;let z=!1,Z=null;this._outputColorSpace=Zi;let tt=0,ft=0,X=null,B=-1,W=null;const J=new Mn,dt=new Mn;let pt=null;const Tt=new an(0);let zt=0,re=i.width,F=i.height,lt=1,et=null,ht=null;const yt=new Mn(0,0,re,F),Rt=new Mn(0,0,re,F);let Dt=!1;const Mt=new xE;let kt=!1,he=!1;const He=new Nn,Ge=new ut,ce=new Mn,Re={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let oe=!1;function dn(){return X===null?lt:1}let Y=s;function tn(w,j){return i.getContext(w,j)}try{const w={alpha:!0,depth:l,stencil:c,antialias:h,premultipliedAlpha:p,preserveDrawingBuffer:m,powerPreference:_,failIfMajorPerformanceCaveat:g};if("setAttribute"in i&&i.setAttribute("data-engine",`three.js r${ev}`),i.addEventListener("webglcontextlost",Et,!1),i.addEventListener("webglcontextrestored",Zt,!1),i.addEventListener("webglcontextcreationerror",ae,!1),Y===null){const j="webgl2";if(Y=tn(j,w),Y===null)throw tn(j)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(w){throw Be("WebGLRenderer: "+w.message),w}let Me,Ve,Ot,on,D,T,it,gt,bt,wt,Lt,mt,St,Bt,Xt,Nt,Ct,ne,ve,Le,q,At,xt;function Vt(){Me=new LU(Y),Me.init(),q=new EO(Y,Me),Ve=new TU(Y,Me,t,q),Ot=new MO(Y,Me),Ve.reversedDepthBuffer&&v&&Ot.buffers.depth.setReversed(!0),on=new zU(Y),D=new lO,T=new bO(Y,Me,Ot,D,Ve,q,on),it=new UU(V),gt=new HC(Y),At=new bU(Y,gt),bt=new OU(Y,gt,on,At),wt=new FU(Y,bt,gt,At,on),ne=new IU(Y,Ve,T),Xt=new AU(D),Lt=new oO(V,it,Me,Ve,At,Xt),mt=new DO(V,D),St=new uO,Bt=new gO(Me),Ct=new MU(V,it,Ot,wt,b,p),Nt=new SO(V,wt,Ve),xt=new NO(Y,on,Ve,Ot),ve=new EU(Y,Me,on),Le=new PU(Y,Me,on),on.programs=Lt.programs,V.capabilities=Ve,V.extensions=Me,V.properties=D,V.renderLists=St,V.shadowMap=Nt,V.state=Ot,V.info=on}Vt(),C!==Ki&&(O=new HU(C,i.width,i.height,l,c));const Ut=new RO(V,Y);this.xr=Ut,this.getContext=function(){return Y},this.getContextAttributes=function(){return Y.getContextAttributes()},this.forceContextLoss=function(){const w=Me.get("WEBGL_lose_context");w&&w.loseContext()},this.forceContextRestore=function(){const w=Me.get("WEBGL_lose_context");w&&w.restoreContext()},this.getPixelRatio=function(){return lt},this.setPixelRatio=function(w){w!==void 0&&(lt=w,this.setSize(re,F,!1))},this.getSize=function(w){return w.set(re,F)},this.setSize=function(w,j,st=!0){if(Ut.isPresenting){de("WebGLRenderer: Can't change size while VR device is presenting.");return}re=w,F=j,i.width=Math.floor(w*lt),i.height=Math.floor(j*lt),st===!0&&(i.style.width=w+"px",i.style.height=j+"px"),O!==null&&O.setSize(i.width,i.height),this.setViewport(0,0,w,j)},this.getDrawingBufferSize=function(w){return w.set(re*lt,F*lt).floor()},this.setDrawingBufferSize=function(w,j,st){re=w,F=j,lt=st,i.width=Math.floor(w*st),i.height=Math.floor(j*st),this.setViewport(0,0,w,j)},this.setEffects=function(w){if(C===Ki){Be("THREE.WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.");return}if(w){for(let j=0;j<w.length;j++)if(w[j].isOutputPass===!0){de("THREE.WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.");break}}O.setEffects(w||[])},this.getCurrentViewport=function(w){return w.copy(J)},this.getViewport=function(w){return w.copy(yt)},this.setViewport=function(w,j,st,at){w.isVector4?yt.set(w.x,w.y,w.z,w.w):yt.set(w,j,st,at),Ot.viewport(J.copy(yt).multiplyScalar(lt).round())},this.getScissor=function(w){return w.copy(Rt)},this.setScissor=function(w,j,st,at){w.isVector4?Rt.set(w.x,w.y,w.z,w.w):Rt.set(w,j,st,at),Ot.scissor(dt.copy(Rt).multiplyScalar(lt).round())},this.getScissorTest=function(){return Dt},this.setScissorTest=function(w){Ot.setScissorTest(Dt=w)},this.setOpaqueSort=function(w){et=w},this.setTransparentSort=function(w){ht=w},this.getClearColor=function(w){return w.copy(Ct.getClearColor())},this.setClearColor=function(){Ct.setClearColor(...arguments)},this.getClearAlpha=function(){return Ct.getClearAlpha()},this.setClearAlpha=function(){Ct.setClearAlpha(...arguments)},this.clear=function(w=!0,j=!0,st=!0){let at=0;if(w){let ot=!1;if(X!==null){const Ht=X.texture.format;ot=S.has(Ht)}if(ot){const Ht=X.texture.type,Wt=M.has(Ht),Ft=Ct.getClearColor(),Yt=Ct.getClearAlpha(),$t=Ft.r,ue=Ft.g,fe=Ft.b;Wt?(R[0]=$t,R[1]=ue,R[2]=fe,R[3]=Yt,Y.clearBufferuiv(Y.COLOR,0,R)):(P[0]=$t,P[1]=ue,P[2]=fe,P[3]=Yt,Y.clearBufferiv(Y.COLOR,0,P))}else at|=Y.COLOR_BUFFER_BIT}j&&(at|=Y.DEPTH_BUFFER_BIT,this.state.buffers.depth.setMask(!0)),st&&(at|=Y.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),at!==0&&Y.clear(at)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.setNodesHandler=function(w){w.setRenderer(this),Z=w},this.dispose=function(){i.removeEventListener("webglcontextlost",Et,!1),i.removeEventListener("webglcontextrestored",Zt,!1),i.removeEventListener("webglcontextcreationerror",ae,!1),Ct.dispose(),St.dispose(),Bt.dispose(),D.dispose(),it.dispose(),wt.dispose(),At.dispose(),xt.dispose(),Lt.dispose(),Ut.dispose(),Ut.removeEventListener("sessionstart",ds),Ut.removeEventListener("sessionend",hs),ei.stop()};function Et(w){w.preventDefault(),l1("WebGLRenderer: Context Lost."),z=!0}function Zt(){l1("WebGLRenderer: Context Restored."),z=!1;const w=on.autoReset,j=Nt.enabled,st=Nt.autoUpdate,at=Nt.needsUpdate,ot=Nt.type;Vt(),on.autoReset=w,Nt.enabled=j,Nt.autoUpdate=st,Nt.needsUpdate=at,Nt.type=ot}function ae(w){Be("WebGLRenderer: A WebGL context could not be created. Reason: ",w.statusMessage)}function We(w){const j=w.target;j.removeEventListener("dispose",We),xe(j)}function xe(w){ta(w),D.remove(w)}function ta(w){const j=D.get(w).programs;j!==void 0&&(j.forEach(function(st){Lt.releaseProgram(st)}),w.isShaderMaterial&&Lt.releaseShaderCache(w))}this.renderBufferDirect=function(w,j,st,at,ot,Ht){j===null&&(j=Re);const Wt=ot.isMesh&&ot.matrixWorld.determinant()<0,Ft=xu(w,j,st,at,ot);Ot.setMaterial(at,Wt);let Yt=st.index,$t=1;if(at.wireframe===!0){if(Yt=bt.getWireframeAttribute(st),Yt===void 0)return;$t=2}const ue=st.drawRange,fe=st.attributes.position;let Kt=ue.start*$t,Ie=(ue.start+ue.count)*$t;Ht!==null&&(Kt=Math.max(Kt,Ht.start*$t),Ie=Math.min(Ie,(Ht.start+Ht.count)*$t)),Yt!==null?(Kt=Math.max(Kt,0),Ie=Math.min(Ie,Yt.count)):fe!=null&&(Kt=Math.max(Kt,0),Ie=Math.min(Ie,fe.count));const en=Ie-Kt;if(en<0||en===1/0)return;At.setup(ot,at,Ft,st,Yt);let be,je=ve;if(Yt!==null&&(be=gt.get(Yt),je=Le,je.setIndex(be)),ot.isMesh)at.wireframe===!0?(Ot.setLineWidth(at.wireframeLinewidth*dn()),je.setMode(Y.LINES)):je.setMode(Y.TRIANGLES);else if(ot.isLine){let Un=at.linewidth;Un===void 0&&(Un=1),Ot.setLineWidth(Un*dn()),ot.isLineSegments?je.setMode(Y.LINES):ot.isLineLoop?je.setMode(Y.LINE_LOOP):je.setMode(Y.LINE_STRIP)}else ot.isPoints?je.setMode(Y.POINTS):ot.isSprite&&je.setMode(Y.TRIANGLES);if(ot.isBatchedMesh)if(Me.get("WEBGL_multi_draw"))je.renderMultiDraw(ot._multiDrawStarts,ot._multiDrawCounts,ot._multiDrawCount);else{const Un=ot._multiDrawStarts,qt=ot._multiDrawCounts,yn=ot._multiDrawCount,Ee=Yt?gt.get(Yt).bytesPerElement:1,fi=D.get(at).currentProgram.getUniforms();for(let Mi=0;Mi<yn;Mi++)fi.setValue(Y,"_gl_DrawID",Mi),je.render(Un[Mi]/Ee,qt[Mi])}else if(ot.isInstancedMesh)je.renderInstances(Kt,en,ot.count);else if(st.isInstancedBufferGeometry){const Un=st._maxInstanceCount!==void 0?st._maxInstanceCount:1/0,qt=Math.min(st.instanceCount,Un);je.renderInstances(Kt,en,qt)}else je.render(Kt,en)};function zi(w,j,st){w.transparent===!0&&w.side===dr&&w.forceSinglePass===!1?(w.side=yi,w.needsUpdate=!0,br(w,j,st),w.side=gr,w.needsUpdate=!0,br(w,j,st),w.side=dr):br(w,j,st)}this.compile=function(w,j,st=null){st===null&&(st=w),U=Bt.get(st),U.init(j),E.push(U),st.traverseVisible(function(ot){ot.isLight&&ot.layers.test(j.layers)&&(U.pushLight(ot),ot.castShadow&&U.pushShadow(ot))}),w!==st&&w.traverseVisible(function(ot){ot.isLight&&ot.layers.test(j.layers)&&(U.pushLight(ot),ot.castShadow&&U.pushShadow(ot))}),U.setupLights();const at=new Set;return w.traverse(function(ot){if(!(ot.isMesh||ot.isPoints||ot.isLine||ot.isSprite))return;const Ht=ot.material;if(Ht)if(Array.isArray(Ht))for(let Wt=0;Wt<Ht.length;Wt++){const Ft=Ht[Wt];zi(Ft,st,ot),at.add(Ft)}else zi(Ht,st,ot),at.add(Ht)}),U=E.pop(),at},this.compileAsync=function(w,j,st=null){const at=this.compile(w,j,st);return new Promise(ot=>{function Ht(){if(at.forEach(function(Wt){D.get(Wt).currentProgram.isReady()&&at.delete(Wt)}),at.size===0){ot(w);return}setTimeout(Ht,10)}Me.get("KHR_parallel_shader_compile")!==null?Ht():setTimeout(Ht,10)})};let Bl=null;function ro(w){Bl&&Bl(w)}function ds(){ei.stop()}function hs(){ei.start()}const ei=new AE;ei.setAnimationLoop(ro),typeof self<"u"&&ei.setContext(self),this.setAnimationLoop=function(w){Bl=w,Ut.setAnimationLoop(w),w===null?ei.stop():ei.start()},Ut.addEventListener("sessionstart",ds),Ut.addEventListener("sessionend",hs),this.render=function(w,j){if(j!==void 0&&j.isCamera!==!0){Be("WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(z===!0)return;Z!==null&&Z.renderStart(w,j);const st=Ut.enabled===!0&&Ut.isPresenting===!0,at=O!==null&&(X===null||st)&&O.begin(V,X);if(w.matrixWorldAutoUpdate===!0&&w.updateMatrixWorld(),j.parent===null&&j.matrixWorldAutoUpdate===!0&&j.updateMatrixWorld(),Ut.enabled===!0&&Ut.isPresenting===!0&&(O===null||O.isCompositing()===!1)&&(Ut.cameraAutoUpdate===!0&&Ut.updateCamera(j),j=Ut.getCamera()),w.isScene===!0&&w.onBeforeRender(V,w,j,X),U=Bt.get(w,E.length),U.init(j),U.state.textureUnits=T.getTextureUnits(),E.push(U),He.multiplyMatrices(j.projectionMatrix,j.matrixWorldInverse),Mt.setFromProjectionMatrix(He,za,j.reversedDepth),he=this.localClippingEnabled,kt=Xt.init(this.clippingPlanes,he),H=St.get(w,L.length),H.init(),L.push(H),Ut.enabled===!0&&Ut.isPresenting===!0){const Wt=V.xr.getDepthSensingMesh();Wt!==null&&Sr(Wt,j,-1/0,V.sortObjects)}Sr(w,j,0,V.sortObjects),H.finish(),V.sortObjects===!0&&H.sort(et,ht),oe=Ut.enabled===!1||Ut.isPresenting===!1||Ut.hasDepthSensing()===!1,oe&&Ct.addToRenderList(H,w),this.info.render.frame++,kt===!0&&Xt.beginShadows();const ot=U.state.shadowsArray;if(Nt.render(ot,w,j),kt===!0&&Xt.endShadows(),this.info.autoReset===!0&&this.info.reset(),(at&&O.hasRenderPass())===!1){const Wt=H.opaque,Ft=H.transmissive;if(U.setupLights(),j.isArrayCamera){const Yt=j.cameras;if(Ft.length>0)for(let $t=0,ue=Yt.length;$t<ue;$t++){const fe=Yt[$t];Hl(Wt,Ft,w,fe)}oe&&Ct.render(w);for(let $t=0,ue=Yt.length;$t<ue;$t++){const fe=Yt[$t];Mr(H,w,fe,fe.viewport)}}else Ft.length>0&&Hl(Wt,Ft,w,j),oe&&Ct.render(w),Mr(H,w,j)}X!==null&&ft===0&&(T.updateMultisampleRenderTarget(X),T.updateRenderTargetMipmap(X)),at&&O.end(V),w.isScene===!0&&w.onAfterRender(V,w,j),At.resetDefaultState(),B=-1,W=null,E.pop(),E.length>0?(U=E[E.length-1],T.setTextureUnits(U.state.textureUnits),kt===!0&&Xt.setGlobalState(V.clippingPlanes,U.state.camera)):U=null,L.pop(),L.length>0?H=L[L.length-1]:H=null,Z!==null&&Z.renderEnd()};function Sr(w,j,st,at){if(w.visible===!1)return;if(w.layers.test(j.layers)){if(w.isGroup)st=w.renderOrder;else if(w.isLOD)w.autoUpdate===!0&&w.update(j);else if(w.isLightProbeGrid)U.pushLightProbeGrid(w);else if(w.isLight)U.pushLight(w),w.castShadow&&U.pushShadow(w);else if(w.isSprite){if(!w.frustumCulled||Mt.intersectsSprite(w)){at&&ce.setFromMatrixPosition(w.matrixWorld).applyMatrix4(He);const Wt=wt.update(w),Ft=w.material;Ft.visible&&H.push(w,Wt,Ft,st,ce.z,null)}}else if((w.isMesh||w.isLine||w.isPoints)&&(!w.frustumCulled||Mt.intersectsObject(w))){const Wt=wt.update(w),Ft=w.material;if(at&&(w.boundingSphere!==void 0?(w.boundingSphere===null&&w.computeBoundingSphere(),ce.copy(w.boundingSphere.center)):(Wt.boundingSphere===null&&Wt.computeBoundingSphere(),ce.copy(Wt.boundingSphere.center)),ce.applyMatrix4(w.matrixWorld).applyMatrix4(He)),Array.isArray(Ft)){const Yt=Wt.groups;for(let $t=0,ue=Yt.length;$t<ue;$t++){const fe=Yt[$t],Kt=Ft[fe.materialIndex];Kt&&Kt.visible&&H.push(w,Wt,Kt,st,ce.z,fe)}}else Ft.visible&&H.push(w,Wt,Ft,st,ce.z,null)}}const Ht=w.children;for(let Wt=0,Ft=Ht.length;Wt<Ft;Wt++)Sr(Ht[Wt],j,st,at)}function Mr(w,j,st,at){const{opaque:ot,transmissive:Ht,transparent:Wt}=w;U.setupLightsView(st),kt===!0&&Xt.setGlobalState(V.clippingPlanes,st),at&&Ot.viewport(J.copy(at)),ot.length>0&&so(ot,j,st),Ht.length>0&&so(Ht,j,st),Wt.length>0&&so(Wt,j,st),Ot.buffers.depth.setTest(!0),Ot.buffers.depth.setMask(!0),Ot.buffers.color.setMask(!0),Ot.setPolygonOffset(!1)}function Hl(w,j,st,at){if((st.isScene===!0?st.overrideMaterial:null)!==null)return;if(U.state.transmissionRenderTarget[at.id]===void 0){const Kt=Me.has("EXT_color_buffer_half_float")||Me.has("EXT_color_buffer_float");U.state.transmissionRenderTarget[at.id]=new Ha(1,1,{generateMipmaps:!0,type:Kt?vr:Ki,minFilter:Zs,samples:Math.max(4,Ve.samples),stencilBuffer:c,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:Oe.workingColorSpace})}const Ht=U.state.transmissionRenderTarget[at.id],Wt=at.viewport||J;Ht.setSize(Wt.z*V.transmissionResolutionScale,Wt.w*V.transmissionResolutionScale);const Ft=V.getRenderTarget(),Yt=V.getActiveCubeFace(),$t=V.getActiveMipmapLevel();V.setRenderTarget(Ht),V.getClearColor(Tt),zt=V.getClearAlpha(),zt<1&&V.setClearColor(16777215,.5),V.clear(),oe&&Ct.render(st);const ue=V.toneMapping;V.toneMapping=Ba;const fe=at.viewport;if(at.viewport!==void 0&&(at.viewport=void 0),U.setupLightsView(at),kt===!0&&Xt.setGlobalState(V.clippingPlanes,at),so(w,st,at),T.updateMultisampleRenderTarget(Ht),T.updateRenderTargetMipmap(Ht),Me.has("WEBGL_multisampled_render_to_texture")===!1){let Kt=!1;for(let Ie=0,en=j.length;Ie<en;Ie++){const be=j[Ie],{object:je,geometry:Un,material:qt,group:yn}=be;if(qt.side===dr&&je.layers.test(at.layers)){const Ee=qt.side;qt.side=yi,qt.needsUpdate=!0,Gl(je,st,at,Un,qt,yn),qt.side=Ee,qt.needsUpdate=!0,Kt=!0}}Kt===!0&&(T.updateMultisampleRenderTarget(Ht),T.updateRenderTargetMipmap(Ht))}V.setRenderTarget(Ft,Yt,$t),V.setClearColor(Tt,zt),fe!==void 0&&(at.viewport=fe),V.toneMapping=ue}function so(w,j,st){const at=j.isScene===!0?j.overrideMaterial:null;for(let ot=0,Ht=w.length;ot<Ht;ot++){const Wt=w[ot],{object:Ft,geometry:Yt,group:$t}=Wt;let ue=Wt.material;ue.allowOverride===!0&&at!==null&&(ue=at),Ft.layers.test(st.layers)&&Gl(Ft,j,st,Yt,ue,$t)}}function Gl(w,j,st,at,ot,Ht){w.onBeforeRender(V,j,st,at,ot,Ht),w.modelViewMatrix.multiplyMatrices(st.matrixWorldInverse,w.matrixWorld),w.normalMatrix.getNormalMatrix(w.modelViewMatrix),ot.onBeforeRender(V,j,st,at,w,Ht),ot.transparent===!0&&ot.side===dr&&ot.forceSinglePass===!1?(ot.side=yi,ot.needsUpdate=!0,V.renderBufferDirect(st,j,at,ot,w,Ht),ot.side=gr,ot.needsUpdate=!0,V.renderBufferDirect(st,j,at,ot,w,Ht),ot.side=dr):V.renderBufferDirect(st,j,at,ot,w,Ht),w.onAfterRender(V,j,st,at,ot,Ht)}function br(w,j,st){j.isScene!==!0&&(j=Re);const at=D.get(w),ot=U.state.lights,Ht=U.state.shadowsArray,Wt=ot.state.version,Ft=Lt.getParameters(w,ot.state,Ht,j,st,U.state.lightProbeGridArray),Yt=Lt.getProgramCacheKey(Ft);let $t=at.programs;at.environment=w.isMeshStandardMaterial||w.isMeshLambertMaterial||w.isMeshPhongMaterial?j.environment:null,at.fog=j.fog;const ue=w.isMeshStandardMaterial||w.isMeshLambertMaterial&&!w.envMap||w.isMeshPhongMaterial&&!w.envMap;at.envMap=it.get(w.envMap||at.environment,ue),at.envMapRotation=at.environment!==null&&w.envMap===null?j.environmentRotation:w.envMapRotation,$t===void 0&&(w.addEventListener("dispose",We),$t=new Map,at.programs=$t);let fe=$t.get(Yt);if(fe!==void 0){if(at.currentProgram===fe&&at.lightsStateVersion===Wt)return vu(w,Ft),fe}else Ft.uniforms=Lt.getUniforms(w),Z!==null&&w.isNodeMaterial&&Z.build(w,st,Ft),w.onBeforeCompile(Ft,V),fe=Lt.acquireProgram(Ft,Yt),$t.set(Yt,fe),at.uniforms=Ft.uniforms;const Kt=at.uniforms;return(!w.isShaderMaterial&&!w.isRawShaderMaterial||w.clipping===!0)&&(Kt.clippingPlanes=Xt.uniform),vu(w,Ft),at.needsLights=Vl(w),at.lightsStateVersion=Wt,at.needsLights&&(Kt.ambientLightColor.value=ot.state.ambient,Kt.lightProbe.value=ot.state.probe,Kt.directionalLights.value=ot.state.directional,Kt.directionalLightShadows.value=ot.state.directionalShadow,Kt.spotLights.value=ot.state.spot,Kt.spotLightShadows.value=ot.state.spotShadow,Kt.rectAreaLights.value=ot.state.rectArea,Kt.ltc_1.value=ot.state.rectAreaLTC1,Kt.ltc_2.value=ot.state.rectAreaLTC2,Kt.pointLights.value=ot.state.point,Kt.pointLightShadows.value=ot.state.pointShadow,Kt.hemisphereLights.value=ot.state.hemi,Kt.directionalShadowMatrix.value=ot.state.directionalShadowMatrix,Kt.spotLightMatrix.value=ot.state.spotLightMatrix,Kt.spotLightMap.value=ot.state.spotLightMap,Kt.pointShadowMatrix.value=ot.state.pointShadowMatrix),at.lightProbeGrid=U.state.lightProbeGridArray.length>0,at.currentProgram=fe,at.uniformsList=null,fe}function Er(w){if(w.uniformsList===null){const j=w.currentProgram.getUniforms();w.uniformsList=Dd.seqWithValue(j.seq,w.uniforms)}return w.uniformsList}function vu(w,j){const st=D.get(w);st.outputColorSpace=j.outputColorSpace,st.batching=j.batching,st.batchingColor=j.batchingColor,st.instancing=j.instancing,st.instancingColor=j.instancingColor,st.instancingMorph=j.instancingMorph,st.skinning=j.skinning,st.morphTargets=j.morphTargets,st.morphNormals=j.morphNormals,st.morphColors=j.morphColors,st.morphTargetsCount=j.morphTargetsCount,st.numClippingPlanes=j.numClippingPlanes,st.numIntersection=j.numClipIntersection,st.vertexAlphas=j.vertexAlphas,st.vertexTangents=j.vertexTangents,st.toneMapping=j.toneMapping}function _u(w,j){if(w.length===0)return null;if(w.length===1)return w[0].texture!==null?w[0]:null;N.setFromMatrixPosition(j.matrixWorld);for(let st=0,at=w.length;st<at;st++){const ot=w[st];if(ot.texture!==null&&ot.boundingBox.containsPoint(N))return ot}return null}function xu(w,j,st,at,ot){j.isScene!==!0&&(j=Re),T.resetTextureUnits();const Ht=j.fog,Wt=at.isMeshStandardMaterial||at.isMeshLambertMaterial||at.isMeshPhongMaterial?j.environment:null,Ft=X===null?V.outputColorSpace:X.isXRRenderTarget===!0?X.texture.colorSpace:Oe.workingColorSpace,Yt=at.isMeshStandardMaterial||at.isMeshLambertMaterial&&!at.envMap||at.isMeshPhongMaterial&&!at.envMap,$t=it.get(at.envMap||Wt,Yt),ue=at.vertexColors===!0&&!!st.attributes.color&&st.attributes.color.itemSize===4,fe=!!st.attributes.tangent&&(!!at.normalMap||at.anisotropy>0),Kt=!!st.morphAttributes.position,Ie=!!st.morphAttributes.normal,en=!!st.morphAttributes.color;let be=Ba;at.toneMapped&&(X===null||X.isXRRenderTarget===!0)&&(be=V.toneMapping);const je=st.morphAttributes.position||st.morphAttributes.normal||st.morphAttributes.color,Un=je!==void 0?je.length:0,qt=D.get(at),yn=U.state.lights;if(kt===!0&&(he===!0||w!==W)){const ke=w===W&&at.id===B;Xt.setState(at,w,ke)}let Ee=!1;at.version===qt.__version?(qt.needsLights&&qt.lightsStateVersion!==yn.state.version||qt.outputColorSpace!==Ft||ot.isBatchedMesh&&qt.batching===!1||!ot.isBatchedMesh&&qt.batching===!0||ot.isBatchedMesh&&qt.batchingColor===!0&&ot.colorTexture===null||ot.isBatchedMesh&&qt.batchingColor===!1&&ot.colorTexture!==null||ot.isInstancedMesh&&qt.instancing===!1||!ot.isInstancedMesh&&qt.instancing===!0||ot.isSkinnedMesh&&qt.skinning===!1||!ot.isSkinnedMesh&&qt.skinning===!0||ot.isInstancedMesh&&qt.instancingColor===!0&&ot.instanceColor===null||ot.isInstancedMesh&&qt.instancingColor===!1&&ot.instanceColor!==null||ot.isInstancedMesh&&qt.instancingMorph===!0&&ot.morphTexture===null||ot.isInstancedMesh&&qt.instancingMorph===!1&&ot.morphTexture!==null||qt.envMap!==$t||at.fog===!0&&qt.fog!==Ht||qt.numClippingPlanes!==void 0&&(qt.numClippingPlanes!==Xt.numPlanes||qt.numIntersection!==Xt.numIntersection)||qt.vertexAlphas!==ue||qt.vertexTangents!==fe||qt.morphTargets!==Kt||qt.morphNormals!==Ie||qt.morphColors!==en||qt.toneMapping!==be||qt.morphTargetsCount!==Un||!!qt.lightProbeGrid!=U.state.lightProbeGridArray.length>0)&&(Ee=!0):(Ee=!0,qt.__version=at.version);let fi=qt.currentProgram;Ee===!0&&(fi=br(at,j,ot),Z&&at.isNodeMaterial&&Z.onUpdateProgram(at,fi,qt));let Mi=!1,ea=!1,Tr=!1;const Jt=fi.getUniforms(),hn=qt.uniforms;if(Ot.useProgram(fi.program)&&(Mi=!0,ea=!0,Tr=!0),at.id!==B&&(B=at.id,ea=!0),qt.needsLights){const ke=_u(U.state.lightProbeGridArray,ot);qt.lightProbeGrid!==ke&&(qt.lightProbeGrid=ke,ea=!0)}if(Mi||W!==w){Ot.buffers.depth.getReversed()&&w.reversedDepth!==!0&&(w._reversedDepth=!0,w.updateProjectionMatrix()),Jt.setValue(Y,"projectionMatrix",w.projectionMatrix),Jt.setValue(Y,"viewMatrix",w.matrixWorldInverse);const Fn=Jt.map.cameraPosition;Fn!==void 0&&Fn.setValue(Y,Ge.setFromMatrixPosition(w.matrixWorld)),Ve.logarithmicDepthBuffer&&Jt.setValue(Y,"logDepthBufFC",2/(Math.log(w.far+1)/Math.LN2)),(at.isMeshPhongMaterial||at.isMeshToonMaterial||at.isMeshLambertMaterial||at.isMeshBasicMaterial||at.isMeshStandardMaterial||at.isShaderMaterial)&&Jt.setValue(Y,"isOrthographic",w.isOrthographicCamera===!0),W!==w&&(W=w,ea=!0,Tr=!0)}if(qt.needsLights&&(yn.state.directionalShadowMap.length>0&&Jt.setValue(Y,"directionalShadowMap",yn.state.directionalShadowMap,T),yn.state.spotShadowMap.length>0&&Jt.setValue(Y,"spotShadowMap",yn.state.spotShadowMap,T),yn.state.pointShadowMap.length>0&&Jt.setValue(Y,"pointShadowMap",yn.state.pointShadowMap,T)),ot.isSkinnedMesh){Jt.setOptional(Y,ot,"bindMatrix"),Jt.setOptional(Y,ot,"bindMatrixInverse");const ke=ot.skeleton;ke&&(ke.boneTexture===null&&ke.computeBoneTexture(),Jt.setValue(Y,"boneTexture",ke.boneTexture,T))}ot.isBatchedMesh&&(Jt.setOptional(Y,ot,"batchingTexture"),Jt.setValue(Y,"batchingTexture",ot._matricesTexture,T),Jt.setOptional(Y,ot,"batchingIdTexture"),Jt.setValue(Y,"batchingIdTexture",ot._indirectTexture,T),Jt.setOptional(Y,ot,"batchingColorTexture"),ot._colorsTexture!==null&&Jt.setValue(Y,"batchingColorTexture",ot._colorsTexture,T));const bi=st.morphAttributes;if((bi.position!==void 0||bi.normal!==void 0||bi.color!==void 0)&&ne.update(ot,st,fi),(ea||qt.receiveShadow!==ot.receiveShadow)&&(qt.receiveShadow=ot.receiveShadow,Jt.setValue(Y,"receiveShadow",ot.receiveShadow)),(at.isMeshStandardMaterial||at.isMeshLambertMaterial||at.isMeshPhongMaterial)&&at.envMap===null&&j.environment!==null&&(hn.envMapIntensity.value=j.environmentIntensity),hn.dfgLUT!==void 0&&(hn.dfgLUT.value=LO()),ea){if(Jt.setValue(Y,"toneMappingExposure",V.toneMappingExposure),qt.needsLights&&yu(hn,Tr),Ht&&at.fog===!0&&mt.refreshFogUniforms(hn,Ht),mt.refreshMaterialUniforms(hn,at,lt,F,U.state.transmissionRenderTarget[w.id]),qt.needsLights&&qt.lightProbeGrid){const ke=qt.lightProbeGrid;hn.probesSH.value=ke.texture,hn.probesMin.value.copy(ke.boundingBox.min),hn.probesMax.value.copy(ke.boundingBox.max),hn.probesResolution.value.copy(ke.resolution)}Dd.upload(Y,Er(qt),hn,T)}if(at.isShaderMaterial&&at.uniformsNeedUpdate===!0&&(Dd.upload(Y,Er(qt),hn,T),at.uniformsNeedUpdate=!1),at.isSpriteMaterial&&Jt.setValue(Y,"center",ot.center),Jt.setValue(Y,"modelViewMatrix",ot.modelViewMatrix),Jt.setValue(Y,"normalMatrix",ot.normalMatrix),Jt.setValue(Y,"modelMatrix",ot.matrixWorld),at.uniformsGroups!==void 0){const ke=at.uniformsGroups;for(let Fn=0,En=ke.length;Fn<En;Fn++){const Xl=ke[Fn];xt.update(Xl,fi),xt.bind(Xl,fi)}}return fi}function yu(w,j){w.ambientLightColor.needsUpdate=j,w.lightProbe.needsUpdate=j,w.directionalLights.needsUpdate=j,w.directionalLightShadows.needsUpdate=j,w.pointLights.needsUpdate=j,w.pointLightShadows.needsUpdate=j,w.spotLights.needsUpdate=j,w.spotLightShadows.needsUpdate=j,w.rectAreaLights.needsUpdate=j,w.hemisphereLights.needsUpdate=j}function Vl(w){return w.isMeshLambertMaterial||w.isMeshToonMaterial||w.isMeshPhongMaterial||w.isMeshStandardMaterial||w.isShadowMaterial||w.isShaderMaterial&&w.lights===!0}this.getActiveCubeFace=function(){return tt},this.getActiveMipmapLevel=function(){return ft},this.getRenderTarget=function(){return X},this.setRenderTargetTextures=function(w,j,st){const at=D.get(w);at.__autoAllocateDepthBuffer=w.resolveDepthBuffer===!1,at.__autoAllocateDepthBuffer===!1&&(at.__useRenderToTexture=!1),D.get(w.texture).__webglTexture=j,D.get(w.depthTexture).__webglTexture=at.__autoAllocateDepthBuffer?void 0:st,at.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(w,j){const st=D.get(w);st.__webglFramebuffer=j,st.__useDefaultFramebuffer=j===void 0};const kl=Y.createFramebuffer();this.setRenderTarget=function(w,j=0,st=0){X=w,tt=j,ft=st;let at=null,ot=!1,Ht=!1;if(w){const Ft=D.get(w);if(Ft.__useDefaultFramebuffer!==void 0){Ot.bindFramebuffer(Y.FRAMEBUFFER,Ft.__webglFramebuffer),J.copy(w.viewport),dt.copy(w.scissor),pt=w.scissorTest,Ot.viewport(J),Ot.scissor(dt),Ot.setScissorTest(pt),B=-1;return}else if(Ft.__webglFramebuffer===void 0)T.setupRenderTarget(w);else if(Ft.__hasExternalTextures)T.rebindTextures(w,D.get(w.texture).__webglTexture,D.get(w.depthTexture).__webglTexture);else if(w.depthBuffer){const ue=w.depthTexture;if(Ft.__boundDepthTexture!==ue){if(ue!==null&&D.has(ue)&&(w.width!==ue.image.width||w.height!==ue.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");T.setupDepthRenderbuffer(w)}}const Yt=w.texture;(Yt.isData3DTexture||Yt.isDataArrayTexture||Yt.isCompressedArrayTexture)&&(Ht=!0);const $t=D.get(w).__webglFramebuffer;w.isWebGLCubeRenderTarget?(Array.isArray($t[j])?at=$t[j][st]:at=$t[j],ot=!0):w.samples>0&&T.useMultisampledRTT(w)===!1?at=D.get(w).__webglMultisampledFramebuffer:Array.isArray($t)?at=$t[st]:at=$t,J.copy(w.viewport),dt.copy(w.scissor),pt=w.scissorTest}else J.copy(yt).multiplyScalar(lt).floor(),dt.copy(Rt).multiplyScalar(lt).floor(),pt=Dt;if(st!==0&&(at=kl),Ot.bindFramebuffer(Y.FRAMEBUFFER,at)&&Ot.drawBuffers(w,at),Ot.viewport(J),Ot.scissor(dt),Ot.setScissorTest(pt),ot){const Ft=D.get(w.texture);Y.framebufferTexture2D(Y.FRAMEBUFFER,Y.COLOR_ATTACHMENT0,Y.TEXTURE_CUBE_MAP_POSITIVE_X+j,Ft.__webglTexture,st)}else if(Ht){const Ft=j;for(let Yt=0;Yt<w.textures.length;Yt++){const $t=D.get(w.textures[Yt]);Y.framebufferTextureLayer(Y.FRAMEBUFFER,Y.COLOR_ATTACHMENT0+Yt,$t.__webglTexture,st,Ft)}}else if(w!==null&&st!==0){const Ft=D.get(w.texture);Y.framebufferTexture2D(Y.FRAMEBUFFER,Y.COLOR_ATTACHMENT0,Y.TEXTURE_2D,Ft.__webglTexture,st)}B=-1},this.readRenderTargetPixels=function(w,j,st,at,ot,Ht,Wt,Ft=0){if(!(w&&w.isWebGLRenderTarget)){Be("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Yt=D.get(w).__webglFramebuffer;if(w.isWebGLCubeRenderTarget&&Wt!==void 0&&(Yt=Yt[Wt]),Yt){Ot.bindFramebuffer(Y.FRAMEBUFFER,Yt);try{const $t=w.textures[Ft],ue=$t.format,fe=$t.type;if(w.textures.length>1&&Y.readBuffer(Y.COLOR_ATTACHMENT0+Ft),!Ve.textureFormatReadable(ue)){Be("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!Ve.textureTypeReadable(fe)){Be("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}j>=0&&j<=w.width-at&&st>=0&&st<=w.height-ot&&Y.readPixels(j,st,at,ot,q.convert(ue),q.convert(fe),Ht)}finally{const $t=X!==null?D.get(X).__webglFramebuffer:null;Ot.bindFramebuffer(Y.FRAMEBUFFER,$t)}}},this.readRenderTargetPixelsAsync=async function(w,j,st,at,ot,Ht,Wt,Ft=0){if(!(w&&w.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Yt=D.get(w).__webglFramebuffer;if(w.isWebGLCubeRenderTarget&&Wt!==void 0&&(Yt=Yt[Wt]),Yt)if(j>=0&&j<=w.width-at&&st>=0&&st<=w.height-ot){Ot.bindFramebuffer(Y.FRAMEBUFFER,Yt);const $t=w.textures[Ft],ue=$t.format,fe=$t.type;if(w.textures.length>1&&Y.readBuffer(Y.COLOR_ATTACHMENT0+Ft),!Ve.textureFormatReadable(ue))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!Ve.textureTypeReadable(fe))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");const Kt=Y.createBuffer();Y.bindBuffer(Y.PIXEL_PACK_BUFFER,Kt),Y.bufferData(Y.PIXEL_PACK_BUFFER,Ht.byteLength,Y.STREAM_READ),Y.readPixels(j,st,at,ot,q.convert(ue),q.convert(fe),0);const Ie=X!==null?D.get(X).__webglFramebuffer:null;Ot.bindFramebuffer(Y.FRAMEBUFFER,Ie);const en=Y.fenceSync(Y.SYNC_GPU_COMMANDS_COMPLETE,0);return Y.flush(),await nC(Y,en,4),Y.bindBuffer(Y.PIXEL_PACK_BUFFER,Kt),Y.getBufferSubData(Y.PIXEL_PACK_BUFFER,0,Ht),Y.deleteBuffer(Kt),Y.deleteSync(en),Ht}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(w,j=null,st=0){const at=Math.pow(2,-st),ot=Math.floor(w.image.width*at),Ht=Math.floor(w.image.height*at),Wt=j!==null?j.x:0,Ft=j!==null?j.y:0;T.setTexture2D(w,0),Y.copyTexSubImage2D(Y.TEXTURE_2D,st,0,0,Wt,Ft,ot,Ht),Ot.unbindTexture()};const Su=Y.createFramebuffer(),Mu=Y.createFramebuffer();this.copyTextureToTexture=function(w,j,st=null,at=null,ot=0,Ht=0){let Wt,Ft,Yt,$t,ue,fe,Kt,Ie,en;const be=w.isCompressedTexture?w.mipmaps[Ht]:w.image;if(st!==null)Wt=st.max.x-st.min.x,Ft=st.max.y-st.min.y,Yt=st.isBox3?st.max.z-st.min.z:1,$t=st.min.x,ue=st.min.y,fe=st.isBox3?st.min.z:0;else{const hn=Math.pow(2,-ot);Wt=Math.floor(be.width*hn),Ft=Math.floor(be.height*hn),w.isDataArrayTexture?Yt=be.depth:w.isData3DTexture?Yt=Math.floor(be.depth*hn):Yt=1,$t=0,ue=0,fe=0}at!==null?(Kt=at.x,Ie=at.y,en=at.z):(Kt=0,Ie=0,en=0);const je=q.convert(j.format),Un=q.convert(j.type);let qt;j.isData3DTexture?(T.setTexture3D(j,0),qt=Y.TEXTURE_3D):j.isDataArrayTexture||j.isCompressedArrayTexture?(T.setTexture2DArray(j,0),qt=Y.TEXTURE_2D_ARRAY):(T.setTexture2D(j,0),qt=Y.TEXTURE_2D),Ot.activeTexture(Y.TEXTURE0),Ot.pixelStorei(Y.UNPACK_FLIP_Y_WEBGL,j.flipY),Ot.pixelStorei(Y.UNPACK_PREMULTIPLY_ALPHA_WEBGL,j.premultiplyAlpha),Ot.pixelStorei(Y.UNPACK_ALIGNMENT,j.unpackAlignment);const yn=Ot.getParameter(Y.UNPACK_ROW_LENGTH),Ee=Ot.getParameter(Y.UNPACK_IMAGE_HEIGHT),fi=Ot.getParameter(Y.UNPACK_SKIP_PIXELS),Mi=Ot.getParameter(Y.UNPACK_SKIP_ROWS),ea=Ot.getParameter(Y.UNPACK_SKIP_IMAGES);Ot.pixelStorei(Y.UNPACK_ROW_LENGTH,be.width),Ot.pixelStorei(Y.UNPACK_IMAGE_HEIGHT,be.height),Ot.pixelStorei(Y.UNPACK_SKIP_PIXELS,$t),Ot.pixelStorei(Y.UNPACK_SKIP_ROWS,ue),Ot.pixelStorei(Y.UNPACK_SKIP_IMAGES,fe);const Tr=w.isDataArrayTexture||w.isData3DTexture,Jt=j.isDataArrayTexture||j.isData3DTexture;if(w.isDepthTexture){const hn=D.get(w),bi=D.get(j),ke=D.get(hn.__renderTarget),Fn=D.get(bi.__renderTarget);Ot.bindFramebuffer(Y.READ_FRAMEBUFFER,ke.__webglFramebuffer),Ot.bindFramebuffer(Y.DRAW_FRAMEBUFFER,Fn.__webglFramebuffer);for(let En=0;En<Yt;En++)Tr&&(Y.framebufferTextureLayer(Y.READ_FRAMEBUFFER,Y.COLOR_ATTACHMENT0,D.get(w).__webglTexture,ot,fe+En),Y.framebufferTextureLayer(Y.DRAW_FRAMEBUFFER,Y.COLOR_ATTACHMENT0,D.get(j).__webglTexture,Ht,en+En)),Y.blitFramebuffer($t,ue,Wt,Ft,Kt,Ie,Wt,Ft,Y.DEPTH_BUFFER_BIT,Y.NEAREST);Ot.bindFramebuffer(Y.READ_FRAMEBUFFER,null),Ot.bindFramebuffer(Y.DRAW_FRAMEBUFFER,null)}else if(ot!==0||w.isRenderTargetTexture||D.has(w)){const hn=D.get(w),bi=D.get(j);Ot.bindFramebuffer(Y.READ_FRAMEBUFFER,Su),Ot.bindFramebuffer(Y.DRAW_FRAMEBUFFER,Mu);for(let ke=0;ke<Yt;ke++)Tr?Y.framebufferTextureLayer(Y.READ_FRAMEBUFFER,Y.COLOR_ATTACHMENT0,hn.__webglTexture,ot,fe+ke):Y.framebufferTexture2D(Y.READ_FRAMEBUFFER,Y.COLOR_ATTACHMENT0,Y.TEXTURE_2D,hn.__webglTexture,ot),Jt?Y.framebufferTextureLayer(Y.DRAW_FRAMEBUFFER,Y.COLOR_ATTACHMENT0,bi.__webglTexture,Ht,en+ke):Y.framebufferTexture2D(Y.DRAW_FRAMEBUFFER,Y.COLOR_ATTACHMENT0,Y.TEXTURE_2D,bi.__webglTexture,Ht),ot!==0?Y.blitFramebuffer($t,ue,Wt,Ft,Kt,Ie,Wt,Ft,Y.COLOR_BUFFER_BIT,Y.NEAREST):Jt?Y.copyTexSubImage3D(qt,Ht,Kt,Ie,en+ke,$t,ue,Wt,Ft):Y.copyTexSubImage2D(qt,Ht,Kt,Ie,$t,ue,Wt,Ft);Ot.bindFramebuffer(Y.READ_FRAMEBUFFER,null),Ot.bindFramebuffer(Y.DRAW_FRAMEBUFFER,null)}else Jt?w.isDataTexture||w.isData3DTexture?Y.texSubImage3D(qt,Ht,Kt,Ie,en,Wt,Ft,Yt,je,Un,be.data):j.isCompressedArrayTexture?Y.compressedTexSubImage3D(qt,Ht,Kt,Ie,en,Wt,Ft,Yt,je,be.data):Y.texSubImage3D(qt,Ht,Kt,Ie,en,Wt,Ft,Yt,je,Un,be):w.isDataTexture?Y.texSubImage2D(Y.TEXTURE_2D,Ht,Kt,Ie,Wt,Ft,je,Un,be.data):w.isCompressedTexture?Y.compressedTexSubImage2D(Y.TEXTURE_2D,Ht,Kt,Ie,be.width,be.height,je,be.data):Y.texSubImage2D(Y.TEXTURE_2D,Ht,Kt,Ie,Wt,Ft,je,Un,be);Ot.pixelStorei(Y.UNPACK_ROW_LENGTH,yn),Ot.pixelStorei(Y.UNPACK_IMAGE_HEIGHT,Ee),Ot.pixelStorei(Y.UNPACK_SKIP_PIXELS,fi),Ot.pixelStorei(Y.UNPACK_SKIP_ROWS,Mi),Ot.pixelStorei(Y.UNPACK_SKIP_IMAGES,ea),Ht===0&&j.generateMipmaps&&Y.generateMipmap(qt),Ot.unbindTexture()},this.initRenderTarget=function(w){D.get(w).__webglFramebuffer===void 0&&T.setupRenderTarget(w)},this.initTexture=function(w){w.isCubeTexture?T.setTextureCube(w,0):w.isData3DTexture?T.setTexture3D(w,0):w.isDataArrayTexture||w.isCompressedArrayTexture?T.setTexture2DArray(w,0):T.setTexture2D(w,0),Ot.unbindTexture()},this.resetState=function(){tt=0,ft=0,X=null,Ot.reset(),At.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return za}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(t){this._outputColorSpace=t;const i=this.getContext();i.drawingBufferColorSpace=Oe._getDrawingBufferColorSpace(t),i.unpackColorSpace=Oe._getUnpackColorSpace()}}function PO(a,t,i){return Math.max(t,Math.min(i,a))}const x0=new Pi,zO=new Pi,IO={x:"XYZ",y:"YXZ",z:"ZXY"};function pv(a,t,i,s,l,c){x0.copy(i),l!=null&&x0.premultiply(zO.copy(l).invert());const d=new It,h=new rn,p=new It;x0.decompose(d,h,p),$1(d,s.initialTargetPosition,c.translate??!0);let m;const _=c.rotate??!0;if(_===!1)h.copy(s.initialTargetQuaternion),m=s.initialTargetRotation.clone();else if(Array.isArray(_)||_===!0||typeof _!="string"&&!Array.isArray(_)&&_.x===!0&&_.y===!0&&_.z===!0)m=new bn().setFromQuaternion(h,s.initialTargetRotation.order);else if(typeof _=="string"){const g=IO[_];m=new bn().setFromQuaternion(h,g);for(const v of g){const y=v.toLowerCase();y!==_&&(m[y]=0)}m.order=s.initialTargetRotation.order,h.setFromEuler(m)}else m=GO(h,s.initialTargetRotation,_);return(typeof c.scale!="object"||!c.scale.uniform)&&$1(p,s.initialTargetScale,c.scale??!0),{pointerAmount:t,position:d,quaternion:h,rotation:m,scale:p,time:a}}const fl=new Xd,dl=new It,hl=new It,FO=new It,BO=new rn;function Q1(a,t,i){return fl.normal.copy(a),fl.constant=0,HO(dl,fl.normal),hl.copy(dl),hl.applyQuaternion(BO.copy(t).invert().premultiply(i)),fl.projectPoint(dl,dl).normalize(),fl.projectPoint(hl,hl).normalize(),(FO.crossVectors(dl,fl.normal).dot(hl)<0?1:-1)*dl.angleTo(hl)}function HO(a,t){if(t.x===0){a.set(1,0,0);return}if(t.y===0){a.set(0,1,0);return}if(t.z===0){a.set(0,0,1);return}a.set(-t.y,t.x,0)}function GO(a,t,i){let s="",l="";for(const h of t.order)i[h.toLowerCase()]===!1?l+=h:s+=h;const c=s+l,d=new bn().setFromQuaternion(a,c);for(const h of c){const p=h.toLowerCase();d[p]=Nd(p,d[p],t[p],i)}return a.setFromEuler(d),d}const y0=new It,K1=new Xd,VO=new It,kO=new It;function $1(a,t,i){if(Array.isArray(i)){switch(i.length){case 0:a.copy(t);return;case 1:a.sub(t),OE(a,i[0]instanceof It?i[0]:y0.fromArray(i[0])),a.add(t);return;case 2:y0.crossVectors(i[0]instanceof It?i[0]:VO.fromArray(i[0]),i[1]instanceof It?i[1]:kO.fromArray(i[1])),K1.setFromNormalAndCoplanarPoint(y0,t),K1.projectPoint(a,a);return}return}a.x=Nd("x",a.x,t.x,i),a.y=Nd("y",a.y,t.y,i),a.z=Nd("z",a.z,t.z,i)}function Nd(a,t,i,s){if(typeof s=="boolean")return s?t:i;if(typeof s=="string")return s===a?t:i;const l=s[a];return l===!1?i:Array.isArray(l)?PO(t,...l):t}function wl(a=!0,t,i,s,l,c){if(a){switch(t.length){case 0:case 3:return;case 1:qO(i,...t,s,l,c);return;case 2:XO(...t,i,s,l,c);return}throw new Error(`space cannot be ${t.length}D but received (${t.map(d=>d.toArray().join("/")).join("; ")})`)}}const Ud={x:new It(1,0,0),y:new It(0,1,0),z:new It(0,0,1)};function Rl(a,t,i,s,l){if(s!==!1){if(s===!0){a[0]=Ud.x,a[1]=Ud.y,a[2]=Ud.z;return}if(typeof s=="string"){kc(a,t,i,s,l);return}if(Array.isArray(s)){for(const c of s)kc(a,t,i,c,l);return}s.x!==!1&&kc(a,t,i,"x",l),s.y!==!1&&kc(a,t,i,"y",l),s.z!==!1&&kc(a,t,i,"z",l)}}const Bs=new rn,dd=new bn,fa=new It,pl=new It,Hs=new It;function kc(a,t,i,s,l){if(Array.isArray(s)?fa.set(...s):s instanceof It?fa.copy(s):fa.copy(Ud[s]),l==="translate"){fa.applyQuaternion(t),hd(a,fa);return}if(l==="scale"){Array.isArray(s)?Bs.identity():Bs.setFromEuler(i),Bs.premultiply(t),fa.applyQuaternion(Bs),hd(a,fa);return}if(Array.isArray(s))dd.set(0,0,0);else{dd.copy(i);for(let c=2;c>=0;c--){const d=i.order[c].toLowerCase();if(dd[d]=0,d===s)break}}Bs.setFromEuler(dd).premultiply(t),fa.normalize(),pl.set(0,1,0),fa.dot(pl)>.99&&pl.set(0,0,1),Hs.crossVectors(fa,pl).normalize(),pl.copy(Hs),Hs.applyQuaternion(Bs),hd(a,Hs),Hs.crossVectors(fa,pl).normalize(),Hs.applyQuaternion(Bs),hd(a,Hs)}const J1=new It;function hd(a,t){if(a.length!==3){if(a.length===0){a.push(t.clone());return}if(a.length===1){Math.abs(a[0].dot(t))<.999&&a.push(t.clone());return}J1.crossVectors(a[0],a[1]),!(Math.abs(J1.dot(t))<.001)&&a.push(t.clone())}}const Xc=new Xd,S0=new It,nu=new It;function XO(a,t,i,s,l,c){S0.crossVectors(a,t).normalize(),Xc.setFromNormalAndCoplanarPoint(S0,i);const d=c==null?0:Math.abs(S0.dot(c));if(c==null||d<.01){Xc.projectPoint(l,l);return}const p=-Xc.distanceToPoint(s)/c.dot(Xc.normal);if(p<0){Xc.projectPoint(l,l);return}nu.copy(l),l.copy(s).addScaledVector(c,p)}function qO(a,t,i,s,l){const c=l==null?0:1-Math.abs(t.dot(l));if(l==null||c<.001){tM(s,a,t);return}nu.subVectors(i,a);const d=t.dot(l),h=t.dot(nu),p=l.dot(nu),m=1-d*d,_=(h-d*p)/m;if((d*h-p)/m<0){tM(s,a,t);return}nu.copy(s),s.copy(a).addScaledVector(t,_)}function tM(a,t,i){a.sub(t),OE(a,i),a.add(t)}function OE(a,t){const i=a.dot(t);a.copy(t).multiplyScalar(i)}const M0=new Pi,pd=new Pi,md=new It,WO=new It,Gs=new rn,jO=new It(1,1,1),b0=[];function YO(a,t,i,s,l){return s==null?Gs.identity():s.decompose(md,Gs,WO),b0.length=0,Rl(b0,Gs,i.initialTargetRotation,l.translate??!0,"translate"),pd.makeRotationFromQuaternion(Gs.copy(t.initialPointerWorldQuaternion).invert()).multiply(M0.makeTranslation(md.copy(t.initialPointerWorldPoint).negate())),i.initialTargetParentWorldMatrix!=null&&pd.multiply(i.initialTargetParentWorldMatrix),wl(l.projectRays,b0,t.initialPointerWorldPoint,t.pointerWorldOrigin,md.copy(t.pointerWorldPoint),t.pointerWorldDirection),Gs.copy(t.pointerWorldQuaternion),(l.rotate??!0)===!1&&Gs.copy(t.initialPointerWorldQuaternion),M0.compose(md,Gs,jO).multiply(pd).multiply(pd.compose(i.initialTargetPosition,i.initialTargetQuaternion,i.initialTargetScale)),pv(a,1,M0,i,s,l)}const ml=new It,qc=new It,On=new It,as=new It,ZO=new It,eM=new It,gl=new It,nM=new Pi,Wc=new Pi,gd=new Pi,Na=new rn,jc=new rn,vl=[];function QO(a,t,i,s,l,c){l==null?Na.identity():l.decompose(On,Na,as),vl.length=0,Rl(vl,Na,s.initialTargetRotation,c.translate??!0,"translate"),Rl(vl,Na,s.initialTargetRotation,c.rotate??!0,"rotate"),Rl(vl,Na,s.initialTargetRotation,c.scale??!0,"scale"),wl(c.projectRays,vl,t.initialPointerWorldPoint,t.pointerWorldOrigin,On.copy(t.pointerWorldPoint),t.pointerWorldDirection),wl(c.projectRays,vl,i.initialPointerWorldPoint,i.pointerWorldOrigin,as.copy(i.pointerWorldPoint),i.pointerWorldDirection),ml.copy(i.initialPointerWorldPoint).sub(t.initialPointerWorldPoint),qc.copy(as).sub(On),On.copy(ml),s.prevTwoPointerDeltaRotation!=null&&On.applyQuaternion(s.prevTwoPointerDeltaRotation),On.normalize(),as.copy(qc).normalize(),Na.setFromUnitVectors(On,as),s.prevTwoPointerDeltaRotation==null?s.prevTwoPointerDeltaRotation=new rn:Na.multiply(s.prevTwoPointerDeltaRotation),s.prevTwoPointerDeltaRotation.copy(Na);const d=(Q1(as,t.prevPointerWorldQuaternion,t.pointerWorldQuaternion)+Q1(as,i.prevPointerWorldQuaternion,i.pointerWorldQuaternion))*.5+(s.prevAngle??0);if(s.prevAngle=d,Na.premultiply(jc.setFromAxisAngle(as,d)),gd.compose(s.initialTargetPosition,s.initialTargetQuaternion,s.initialTargetScale),s.initialTargetParentWorldMatrix!=null&&gd.premultiply(s.initialTargetParentWorldMatrix),typeof c.scale=="object"&&(c.scale.uniform??!1))gl.setScalar(qc.length()/ml.length());else{gd.decompose(ZO,jc,eM),On.copy(ml).applyQuaternion(jc.invert()).divide(eM),On.x=Math.abs(On.x),On.y=Math.abs(On.y),On.z=Math.abs(On.z);const h=Math.max(...On.toArray());On.divideScalar(h),gl.set(1,1,1),gl.addScaledVector(On,qc.length()/ml.length()-1)}return nM.makeTranslation(On.copy(qc).multiplyScalar(.5).add(t.pointerWorldPoint)).multiply(Wc.makeRotationFromQuaternion(Na)).multiply(Wc.makeRotationFromQuaternion(jc.invert())).multiply(Wc.makeScale(gl.x,gl.y,gl.z)).multiply(Wc.makeRotationFromQuaternion(jc.invert())).multiply(Wc.makeTranslation(On.copy(ml).multiplyScalar(.5).add(t.initialPointerWorldPoint).negate())).multiply(gd),pv(a,2,nM,s,l,c)}const gn=new It,ji=new It,E0=new It,rs=new It,Vs=new It,Yi=new rn,Li=new rn,ss=new Pi,ur=new It,_l=[];function KO(a,t,i,s,l,c){if(l==null?Yi.identity():l.decompose(gn,Yi,ji),_l.length=0,c.translate==="as-scale"&&Rl(_l,Yi,i.initialTargetRotation,c.scale??!0,"scale"),c.translate!="as-scale"&&Rl(_l,Yi,i.initialTargetRotation,c.rotate??!0,"rotate"),ss.makeTranslation(i.initialTargetPosition),i.initialTargetParentWorldMatrix!=null&&ss.premultiply(i.initialTargetParentWorldMatrix),rs.setFromMatrixPosition(ss),wl(c.projectRays,_l,t.initialPointerWorldPoint,t.pointerWorldOrigin,rs,void 0),rs.negate().add(t.initialPointerWorldPoint),Vs.setFromMatrixPosition(s),wl(c.projectRays,_l,t.initialPointerWorldPoint,t.pointerWorldOrigin,Vs,void 0),wl(c.projectRays,_l,t.initialPointerWorldPoint,t.pointerWorldOrigin,ji.copy(t.pointerWorldPoint),t.pointerWorldDirection),Vs.negate().add(ji),c.translate==="as-scale"?Yi.copy(i.initialTargetQuaternion):(gn.copy(rs),i.prevTranslateAsDeltaRotation!=null&&gn.applyQuaternion(i.prevTranslateAsDeltaRotation),gn.normalize(),ji.copy(Vs).normalize(),Yi.setFromUnitVectors(gn,ji),i.prevTranslateAsDeltaRotation==null?i.prevTranslateAsDeltaRotation=new rn:Yi.multiply(i.prevTranslateAsDeltaRotation),i.prevTranslateAsDeltaRotation.copy(Yi),i.initialTargetParentWorldMatrix!=null&&(Li.setFromRotationMatrix(i.initialTargetParentWorldMatrix),Yi.multiply(Li.normalize()),Yi.premultiply(Li.invert())),Yi.multiply(i.initialTargetQuaternion)),c.translate==="as-rotate")ur.set(1,1,1);else if(typeof c.scale=="object"&&(c.scale.uniform??!1))ur.setScalar(Vs.length()/rs.length());else if(c.translate==="as-rotate-and-scale"){ss.compose(i.initialTargetPosition,i.initialTargetQuaternion,i.initialTargetScale),i.initialTargetParentWorldMatrix!=null&&ss.premultiply(i.initialTargetParentWorldMatrix),ss.decompose(ji,Li,E0),gn.copy(rs).applyQuaternion(Li.invert()).divide(E0),gn.x=Math.abs(gn.x),gn.y=Math.abs(gn.y),gn.z=Math.abs(gn.z);const d=Math.max(...gn.toArray());gn.divideScalar(d),ur.set(1,1,1),ur.addScaledVector(gn,Vs.length()/rs.length()-1)}else i.initialTargetParentWorldMatrix!=null?(i.initialTargetParentWorldMatrix.decompose(gn,Li,ji),Li.multiply(i.initialTargetQuaternion)):Li.copy(i.initialTargetQuaternion),gn.copy(rs).applyQuaternion(Li.invert()),l!=null?(l.decompose(ji,Li,E0),Li.multiply(i.initialTargetQuaternion)):Li.copy(i.initialTargetQuaternion),ji.copy(Vs).applyQuaternion(Li.invert()),ur.x=Math.abs(gn.x)<.001?1:Math.abs(ji.x/gn.x),ur.y=Math.abs(gn.y)<.001?1:Math.abs(ji.y/gn.y),ur.z=Math.abs(gn.z)<.001?1:Math.abs(ji.z/gn.z);return ur.multiply(i.initialTargetScale),ss.compose(i.initialTargetPosition,Yi,ur),pv(a,1,ss,i,void 0,c)}class iM{t1;t2;_position;_quaternion;_rotation;_scale;constructor(t,i){this.t1=t,this.t2=i}get time(){return this.t1.time-this.t2.time}get position(){return this._position??=this.t1.position.clone().sub(this.t2.position)}get quaternion(){return this._quaternion??=this.t2.quaternion.clone().invert().premultiply(this.t1.quaternion)}get rotation(){return this._rotation??=new bn().setFromQuaternion(this.quaternion)}get scale(){return this._scale??=this.t1.scale.clone().sub(this.t2.scale)}}class $O{cancel;previous;memo;event;initial;current;first;last;_delta;_offset;constructor(t){this.cancel=t}start(t,i){this.event=t,this.previous=void 0,this.current=i,this.initial=i,this.first=!0,this.last=!1,this.memo=void 0,this._delta=void 0,this._offset=void 0}update(t,i){this.event=t,this.previous=this.current,this.current=i,this.first=!1,this.last=!1,this._delta=void 0,this._offset=void 0}end(t){this.event=t,this.first=!1,this.last=!0,this._delta=void 0,this._offset=void 0}get delta(){if(this.previous!=null)return this._delta??=new iM(this.current,this.previous)}get offset(){return this._offset??=new iM(this.current,this.initial)}}function aM(a,t){if(a.details.type==="sphere")return!1;if(a.details.type==="lines"){const{line:i}=a.details;return t.copy(i.end).sub(i.start).normalize(),!0}return a.details.type==="screen-ray"?(t.copy(a.details.direction),!0):(t.set(0,0,-1).applyQuaternion(a.pointerQuaternion),!0)}const rM=new It;class JO{target;getOptions;outputState;latestMoveEvent;inputState=new Map;capturedObjects=new Map;initialTargetPosition=new It;initialTargetQuaternion=new rn;initialTargetRotation=new bn;initialTargetScale=new It;initialTargetParentWorldMatrix;prevTwoPointerDeltaRotation;prevTranslateAsDeltaRotation;prevAngle;handlers={onPointerDown:this.onPointerDown.bind(this),onPointerMove:this.onPointerMove.bind(this),onPointerEnd:this.onPointerEnd.bind(this)};constructor(t,i=()=>({})){this.target=t,this.getOptions=i,this.outputState=new $O(this.cancel.bind(this))}firstOnPointer(t){const i=this.getTarget();if(i==null)return;const s=aM(t,rM)?rM.clone():void 0;t.intersection.details.type,this.inputState.set(t.pointerId,{pointerWorldDirection:s,pointerWorldPoint:t.point,pointerWorldOrigin:t.pointerPosition,pointerWorldQuaternion:t.pointerQuaternion,initialPointerWorldPoint:t.point.clone(),initialPointerWorldDirection:s?.clone(),initialPointerWorldQuaternion:t.pointerQuaternion.clone(),prevPointerWorldQuaternion:t.pointerQuaternion}),this.save(),this.inputState.size===1&&this.outputState.start(t,{pointerAmount:1,time:t.timeStamp,position:this.initialTargetPosition.clone(),quaternion:this.initialTargetQuaternion.clone(),rotation:this.initialTargetRotation.clone(),scale:this.initialTargetScale.clone()}),this.outputState.memo=this.apply(i)}onPointerDown(t){this.getOptions().filter?.(t)!==!1&&(this.stopPropagation(t),this.capturePointer(t.pointerId,t.object)&&this.firstOnPointer(t))}onPointerMove(t){if(!this.capturedObjects.has(t.pointerId))return;this.stopPropagation(t);const i=this.inputState.get(t.pointerId);if(i==null){this.firstOnPointer(t);return}this.latestMoveEvent=t,i.pointerWorldPoint=t.point,i.prevPointerWorldQuaternion=i.pointerWorldQuaternion,i.pointerWorldQuaternion=t.pointerQuaternion,i.pointerWorldOrigin=t.pointerPosition,i.pointerWorldDirection!=null&&aM(t,i.pointerWorldDirection)}cancel(){if(this.capturedObjects.size===0)return;for(const[i,s]of this.capturedObjects)s.releasePointerCapture(i);this.capturedObjects.clear(),this.inputState.clear(),this.outputState.end(void 0);const t=this.getTarget();t!=null&&this.apply(t)}onPointerEnd(t){const i=this.capturedObjects.get(t.pointerId);i!=null&&(this.stopPropagation(t),this.releasePointer(t.pointerId,i,t))}update(t){const i=this.getTarget();if(i==null||this.inputState.size===0||this.latestMoveEvent==null&&(this.getOptions().alwaysUpdate??!1)===!1)return;const s=this.getOptions();let l;if(s.translate==="as-rotate"||s.translate==="as-rotate-and-scale"||s.translate==="as-scale"){s.translate,this.prevTwoPointerDeltaRotation=void 0,this.prevAngle=void 0;const[c]=this.inputState.values(),d=i.matrixWorld,h=i.parent?.matrixWorld;l=KO(t,c,this,d,h,s)}else if(this.inputState.size===1){this.prevTwoPointerDeltaRotation=void 0,this.prevAngle=void 0,this.prevTranslateAsDeltaRotation=void 0;const[c]=this.inputState.values();l=YO(t,c,this,i.parent?.matrixWorld,s)}else{this.prevTranslateAsDeltaRotation=void 0;const[c,d]=this.inputState.values();l=QO(t,c,d,this,i.parent?.matrixWorld,s)}this.outputState.update(this.latestMoveEvent,l),this.outputState.memo=this.apply(i),this.latestMoveEvent=void 0}getTarget(){return this.target instanceof hu?this.target:this.target?.current}capturePointer(t,i){if(this.capturedObjects.has(t))return!1;const{multitouch:s,translate:l}=this.getOptions();return((s??!0)===!1||typeof l=="string")&&this.capturedObjects.size===1?!1:(this.capturedObjects.set(t,i),i.setPointerCapture(t),!0)}releasePointer(t,i,s){const l=this.getTarget();if(!(l==null||!this.capturedObjects.delete(t))){if(this.inputState.delete(t),i.releasePointerCapture(t),this.inputState.size>0){this.save();return}this.outputState.end(s),this.apply(l)}}stopPropagation(t){t==null||!(this.getOptions()?.stopPropagation??!0)||t.stopPropagation()}apply(t){return(this.getOptions().apply??PE)(this.outputState,t)}getState(){return this.inputState.size===0?void 0:this.outputState}save(){const t=this.getTarget();if(t!=null){t.updateWorldMatrix(!0,!1),this.prevAngle=void 0,this.prevTwoPointerDeltaRotation=void 0,this.prevTranslateAsDeltaRotation=void 0,this.initialTargetParentWorldMatrix=t.parent?.matrixWorld.clone(),t.matrixAutoUpdate?(this.initialTargetPosition.copy(t.position),this.initialTargetQuaternion.copy(t.quaternion),this.initialTargetRotation.copy(t.rotation),this.initialTargetScale.copy(t.scale)):(t.matrix.decompose(this.initialTargetPosition,this.initialTargetQuaternion,this.initialTargetScale),this.initialTargetRotation.setFromQuaternion(this.initialTargetQuaternion,t.rotation.order));for(const i of this.inputState.values())i.pointerWorldDirection!=null&&i.initialPointerWorldDirection?.copy(i.pointerWorldDirection),i.initialPointerWorldPoint.copy(i.pointerWorldPoint),i.initialPointerWorldQuaternion.copy(i.pointerWorldQuaternion)}}bind(t){const{onPointerDown:i,onPointerMove:s,onPointerEnd:l}=this.handlers;return t.addEventListener("pointerdown",i),t.addEventListener("pointermove",s),t.addEventListener("pointercancel",l),t.addEventListener("pointerup",l),()=>{t.removeEventListener("pointerdown",i),t.removeEventListener("pointermove",s),t.removeEventListener("pointercancel",l),t.removeEventListener("pointerup",l),this.cancel()}}capture(t,i){return this.capturePointer(t,i)?()=>this.releasePointer(t,i,void 0):tP}}function tP(){}function PE(a,t){t.position.copy(a.current.position),t.rotation.order=a.current.rotation.order,t.quaternion.copy(a.current.quaternion),t.scale.copy(a.current.scale)}class eP{target;getOptions;handles=[];hoveredTagMap=new Map;hoverSubscriptions=[];applySubscriptions=[];space;constructor(t,i){this.target=t,this.getOptions=i}getSpace(){return this.space??"world"}getTarget(){return this.target instanceof hu?this.target:this.target.current}getHandleOptions(t,i){const s=this.getOptions?.(),l=i?.();return{...s,...l,apply:(c,d)=>(this.onApply(t,c,d),(l?.apply??s?.apply??PE)?.(c,d))}}registerHandle(t,i,s){const l={object:i,store:t,tag:s};this.handles.push(l);const c=t.bind(i),d=this.onPointerEnter.bind(this,s),h=this.onPointerLeave.bind(this);return i.addEventListener("pointerenter",d),i.addEventListener("pointerleave",h),()=>{const p=this.handles.indexOf(l);p!=-1&&this.handles.splice(p,1),c(),t.cancel()}}subscribeHover(t){return this.hoverSubscriptions.push(t),t(Array.from(this.hoveredTagMap.values())),()=>{const i=this.hoverSubscriptions.indexOf(t);i!==-1&&this.hoverSubscriptions.splice(i,1)}}subscribeApply(t){return this.applySubscriptions.push(t),()=>{const i=this.applySubscriptions.indexOf(t);i!==-1&&this.applySubscriptions.splice(i,1)}}update(t){for(const{store:i}of this.handles)i.update(t)}onPointerEnter(t,i){this.hoveredTagMap.set(i.pointerId,t),this.updateHover()}onPointerLeave(t){this.hoveredTagMap.delete(t.pointerId),this.updateHover()}updateHover(){const t=Array.from(this.hoveredTagMap.values());for(const i of this.hoverSubscriptions)i(t)}onApply(t,i,s){for(const l of this.applySubscriptions)l(t,i,s)}}const ui={depthTest:!1,depthWrite:!1,fog:!1,toneMapped:!1,transparent:!0};function va(a,t,i,{color:s,hoverColor:l,hoverOpacity:c,opacity:d,disabled:h=!1}){if(l==null&&c==null||h){t.color.set(s),t.opacity=d??1,h&&(t.opacity*=.5,t.color.lerp(new bw(1,1,1),.5));return}return l??=s,a.subscribeHover(p=>{const m=p.some(_=>_.includes(i));t.color.set(m?l:s),t.opacity=(m?c:d)??1})}const vd=new rn,zE=new LM;zE.setAttribute("position",new PM([-1e3,0,0,1e3,0,0],3));class T0 extends UM{context;rotationOffset;constructor(t,i){super(zE),this.context=t,this.rotationOffset=i,this.renderOrder=1/0}update(){this.quaternion.setFromEuler(this.rotationOffset);const t=this.context.getTarget();this.context.getSpace()==="world"&&t!=null&&(t.getWorldQuaternion(vd).invert(),this.quaternion.premultiply(vd))}bind(t){this.material=new OM({...ui,color:this.material.color??"white",opacity:this.material.opacity??1});const i=this.context.subscribeHover(l=>{const c=l.some(d=>d.includes(t));this.visible=c}),s=this.context.subscribeApply((l,c)=>{if(c.last){this.position.set(0,0,0);return}this.position.copy(c.initial.position).sub(c.current.position);const d=this.context.getTarget();d!=null&&(vd.copy(d.quaternion).invert(),this.position.applyQuaternion(vd))});return()=>{this.material.dispose(),i(),s()}}}class xr extends Fa{context;axis;store;options;tag;constructor(t,i,s,l){super(),this.context=t,this.axis=i,this.tag=(s??"")+i,this.store=new JO(t.target,()=>t.getHandleOptions(this.tag,l))}}function yr(a,t=!0){if(t===!1)return{options:!1,disabled:!0};if(t===!0){const l={x:!1,y:!1,z:!1,e:!1};for(const c of a)l[c]=!0;return{options:l,disabled:!1}}if(t==="disabled")return{options:{x:!0,y:!0,z:!0,e:!0},disabled:!0};if(typeof t=="string")return{options:t===a?{x:!1,y:!1,z:!1,e:!1,[a]:!0}:!1,disabled:!1};const i={x:!1,y:!1,z:!1,e:!1};let s=!1;for(const l of a){let c=t[l]??!0;if(c===!1)return{options:!1,disabled:!0};c==="disabled"&&(s=!0,c=!0),i[l]=c}return{options:i,disabled:s}}const sM=new It,oM=new It;function mv(a,t,i,s){if(!i)return s;let l;return t instanceof Ew?l=(t.top-t.bottom)/t.zoom:(t.getWorldPosition(sM),a.getWorldPosition(oM),l=sM.distanceTo(oM)*Math.min(1.9*Math.tan(Math.PI*t.fov/360)/t.zoom,7)),l*s/4}const IE=new su(0,.04,.1,12);IE.translate(0,.05,0);const FE=new su(.0075,.0075,.5,3);FE.translate(0,.25,0);const nP=new bn(0,0,-Math.PI/2),iP=new bn(0,0,Math.PI/2);class xl extends xr{invert;showArrowBody;constructor(t,i,s="",l,c=!1,d=!0){super(t,i,s,()=>({scale:!1,rotate:!1,translate:l!=null?[l]:this.options,multitouch:!1})),this.invert=c,this.showArrowBody=d}bind(t,i,s){const{options:l,disabled:c}=yr(this.axis,s);if(l===!1)return;this.options=l;const d=this.invert?iP:nP,h=new Si(ui),p=va(this.context,h,this.tag,{color:t,hoverColor:i,disabled:c}),m=new xn(IE,h);m.renderOrder=1/0,m.position.x=this.invert?-.5:.5,m.rotation.copy(d),this.add(m);let _,g;if(this.showArrowBody){const b=new Si(ui);_=va(this.context,b,this.tag,{color:t,hoverColor:16777024,disabled:c}),g=new xn(FE,b),g.renderOrder=1/0,g.rotation.copy(d),this.add(g)}const v=new xn(new su(.13,0,.6,4));v.pointerEventsOrder=1/0,v.position.x=this.invert?-.3:.3,v.rotation.copy(d),v.visible=!1,this.add(v);const y=c?void 0:this.context.registerHandle(this.store,v,this.tag);return()=>{h.dispose(),y?.(),p?.(),_?.(),this.remove(m),g!=null&&this.remove(g),this.remove(v)}}}class A0 extends xr{constructor(t,i,s="",l){super(t,i,s,()=>({translate:l??this.options,scale:!1,rotate:!1,multitouch:!1}))}bind(t,i,s){const{options:l,disabled:c}=yr(this.axis,s);if(l===!1)return;this.options=l;const d=new Si(ui),h=va(this.context,d,this.tag,{opacity:.5,hoverOpacity:1,color:t,hoverColor:i,disabled:c}),p=new xn(new ou(.2,.2,.01),d);p.renderOrder=1/0,p.pointerEventsOrder=1/0,p.position.set(.15,.15,0);const m=c?void 0:this.context.registerHandle(this.store,p,this.tag);return this.add(p),()=>{d.dispose(),p.geometry.dispose(),m?.(),h?.(),this.remove(p)}}}const lM=new rn;function aP(a,t){const i=new xn(new Ld(.01,2),new Si(ui));i.renderOrder=1/0,i.visible=!1,a.add(i);const s=new xn(new Ld(.01,2),new Si(ui));s.renderOrder=1/0,s.visible=!1,a.add(s);const l=new LM;l.setAttribute("position",new PM([0,0,0,1,1,1],3));const c=new UM(l,new OM(ui));c.renderOrder=1/0,c.visible=!1,a.add(c);const d=t.subscribeApply((h,p)=>{s.position.set(0,0,0),i.position.copy(p.initial.position).sub(p.current.position);const m=t.getTarget();m!=null&&(lM.copy(m.quaternion).invert(),i.position.applyQuaternion(lM)),c.position.set(0,0,0),c.scale.copy(i.position),i.visible=!p.last,c.visible=!p.last,s.visible=!p.last});return()=>{i.geometry.dispose(),i.material.dispose(),s.geometry.dispose(),s.material.dispose(),c.geometry.dispose(),c.material.dispose(),a.remove(i),a.remove(s),a.remove(c),d()}}class rP extends xr{constructor(t){super(t,"xyz","",()=>({translate:this.options,scale:!1,rotate:!1,multitouch:!1}))}bind(t){const{options:i,disabled:s}=yr(this.axis,t);if(i===!1)return;this.options=i;const l=new Si(ui),c=va(this.context,l,this.tag,{color:16777215,hoverColor:16776960,opacity:.25,hoverOpacity:1,disabled:s}),d=new xn(new Ld(.1,0),l);d.renderOrder=1/0,this.add(d);const h=new xn(new Ld(.2,0));h.pointerEventsOrder=1/0,h.visible=!1,this.add(h);const p=s?void 0:this.context.registerHandle(this.store,h,this.tag);return()=>{l.dispose(),d.geometry.dispose(),h.geometry.dispose(),p?.(),c?.(),this.remove(d),this.remove(h)}}}const cM=new It,si=new rn,uM=new rn,fM=new rn().setFromEuler(new bn(0,0,Math.PI/2)),dM=new rn().setFromEuler(new bn(0,-Math.PI/2,0)),sP=new rn,oP=new rn().setFromEuler(new bn(0,-Math.PI/2,0)),lP=new rn().setFromEuler(new bn(Math.PI/2,0,0));class cP extends Fa{context;size;fixed;free;translationX;translationY;translationZ;translationNegX;translationNegY;translationNegZ;translationXY;translationYZ;translationXZ;scaleGroup=new Fa;xAxis=new It;yAxis=new It;zAxis=new It;negXAxis=new It;negYAxis=new It;negZAxis=new It;constructor(t,i,s){super(),this.context=t,this.size=i,this.fixed=s,this.add(this.scaleGroup),this.free=new rP(this.context),this.scaleGroup.add(this.free),this.translationX=new xl(this.context,"x",void 0,this.xAxis),this.scaleGroup.add(this.translationX),this.translationY=new xl(this.context,"y",void 0,this.yAxis),this.scaleGroup.add(this.translationY),this.translationZ=new xl(this.context,"z",void 0,this.zAxis),this.scaleGroup.add(this.translationZ),this.translationNegX=new xl(this.context,"x",void 0,this.negXAxis,!0,!1),this.scaleGroup.add(this.translationNegX),this.translationNegY=new xl(this.context,"y",void 0,this.negYAxis,!0,!1),this.scaleGroup.add(this.translationNegY),this.translationNegZ=new xl(this.context,"z",void 0,this.negZAxis,!0,!1),this.scaleGroup.add(this.translationNegZ),this.translationXY=new A0(this.context,"xy",void 0,[this.xAxis,this.yAxis]),this.scaleGroup.add(this.translationXY),this.translationXZ=new A0(this.context,"xz",void 0,[this.xAxis,this.zAxis]),this.scaleGroup.add(this.translationXZ),this.translationYZ=new A0(this.context,"yz",void 0,[this.yAxis,this.zAxis]),this.scaleGroup.add(this.translationYZ)}update(t){this.updateWorldMatrix(!0,!1),this.xAxis.set(1,0,0),this.yAxis.set(0,1,0),this.zAxis.set(0,0,1),this.free.quaternion.identity(),this.translationX.quaternion.copy(uM),this.translationY.quaternion.copy(fM),this.translationZ.quaternion.copy(dM),this.translationNegX.quaternion.copy(uM),this.translationNegY.quaternion.copy(fM),this.translationNegZ.quaternion.copy(dM),this.translationXY.quaternion.copy(sP),this.translationYZ.quaternion.copy(oP),this.translationXZ.quaternion.copy(lP);const i=this.context.getSpace(),s=this.context.getTarget();i=="world"&&s!=null?(s.getWorldQuaternion(si).invert(),this.free.quaternion.premultiply(si),this.translationX.quaternion.premultiply(si),this.translationY.quaternion.premultiply(si),this.translationZ.quaternion.premultiply(si),this.translationNegX.quaternion.premultiply(si),this.translationNegY.quaternion.premultiply(si),this.translationNegZ.quaternion.premultiply(si),this.translationXY.quaternion.premultiply(si),this.translationYZ.quaternion.premultiply(si),this.translationXZ.quaternion.premultiply(si),s.parent!=null&&(s.parent.getWorldQuaternion(si).invert(),this.xAxis.applyQuaternion(si),this.yAxis.applyQuaternion(si),this.zAxis.applyQuaternion(si))):s!=null&&(this.xAxis.applyQuaternion(s.quaternion),this.yAxis.applyQuaternion(s.quaternion),this.zAxis.applyQuaternion(s.quaternion)),this.negXAxis.copy(this.xAxis).negate(),this.negYAxis.copy(this.yAxis).negate(),this.negZAxis.copy(this.zAxis).negate(),this.scaleGroup.scale.setScalar(1),s!=null&&(s.getWorldScale(cM),this.scaleGroup.scale.divide(cM)),this.scaleGroup.scale.multiplyScalar(mv(this,t,this.fixed??!0,this.size??1))}bind(t){const i=aP(this,this.context),s=this.translationX.bind(16711680,16776960,t),l=this.translationY.bind(65280,16776960,t),c=this.translationZ.bind(255,16776960,t),d=this.translationNegX.bind(16711680,16776960,t),h=this.translationNegY.bind(65280,16776960,t),p=this.translationNegZ.bind(255,16776960,t),m=this.translationXY.bind(255,16776960,t),_=this.translationYZ.bind(16711680,16776960,t),g=this.translationXZ.bind(65280,16776960,t),v=this.free.bind(t);return()=>{i(),s?.(),l?.(),c?.(),d?.(),h?.(),p?.(),m?.(),_?.(),g?.(),v?.()}}}const uP=new bn(0,0,-Math.PI/2),fP=new bn(0,0,Math.PI/2);class yl extends xr{invert;showHandleLine;constructor(t,i,s="",l=!1,c=!0){super(t,i,s,()=>({scale:this.options,rotate:!1,translate:"as-scale",multitouch:!1})),this.invert=l,this.showHandleLine=c}bind(t,i,s){const{options:l,disabled:c}=yr(this.axis,s);if(l===!1)return;this.options=l;const d=this.invert?fP:uP,h=new Fa;h.position.x=this.invert?-.5:.5,h.rotation.copy(d),this.add(h);const p=new Si(ui),m=va(this.context,p,this.tag,{color:t,hoverColor:i,disabled:c}),_=new xn(new ou(.08,.08,.08),p);_.renderOrder=1/0,_.rotation.copy(d),h.add(_);let g,v,y;if(this.showHandleLine){y=new Fa,y.rotation.copy(d),this.add(y);const M=new Si(ui);g=va(this.context,M,this.tag,{color:t,hoverColor:i,disabled:c}),v=new xn(new su(.0075,.0075,.5,3),M),v.renderOrder=1/0,v.position.y=.25,y.add(v)}const b=new Fa;b.visible=!1,b.rotation.copy(d),b.position.x=this.invert?-.3:.3,this.add(b);const C=new xn(new su(.2,0,.5,4));C.pointerEventsOrder=1/0,C.position.y=.04,b.add(C);const S=c?void 0:this.context.registerHandle(this.store,C,this.tag);return()=>{p.dispose(),C.geometry.dispose(),_.geometry.dispose(),v?.geometry.dispose(),S?.(),m?.(),g?.(),y!=null&&this.remove(y),this.remove(b),this.remove(h)}}}class w0 extends xr{constructor(t,i,s=""){super(t,i,s,()=>({translate:"as-scale",scale:this.options,rotate:!1,multitouch:!1}))}bind(t,i,s){const{options:l,disabled:c}=yr(this.axis,s);if(l===!1)return;this.options=l;const d=new Si(ui),h=va(this.context,d,this.tag,{opacity:.5,hoverOpacity:1,color:t,hoverColor:i,disabled:c}),p=new xn(new ou(.2,.2,.01),d);p.renderOrder=1/0,p.pointerEventsOrder=1/0,p.position.set(.15,.15,0);const m=c?void 0:this.context.registerHandle(this.store,p,this.tag);return this.add(p),()=>{d.dispose(),p.geometry.dispose(),m?.(),h?.(),this.remove(p)}}}const dP=new bn(0,0,-Math.PI/2),hP=new bn(0,0,Math.PI/2);class Sl extends xr{actualAxis;invert;constructor(t,i="",s,l=!1){super(t,"xyz",i,()=>({scale:{uniform:!0,...this.options},rotate:!1,translate:"as-scale",multitouch:!1})),this.actualAxis=s,this.invert=l}bind(t,i,s){const{options:l,disabled:c}=yr(this.actualAxis,s);if(l===!1)return;this.options=l;const d=this.invert?hP:dP,h=new Fa;h.position.x=this.invert?-.7:.7,h.rotation.copy(d),this.add(h);const p=new Si(ui),m=va(this.context,p,this.tag,{color:t,hoverColor:i,opacity:.5,hoverOpacity:1,disabled:c}),_=new xn(new ou(.08,.08,.08),p);_.renderOrder=1/0,_.rotation.copy(d),h.add(_);const g=new xn(new ou(.15,.15,.15),p);g.visible=!1,g.pointerEventsOrder=1/0,g.rotation.copy(d),h.add(g);const v=c?void 0:this.context.registerHandle(this.store,g,this.tag);return()=>{p.dispose(),_.geometry.dispose(),v?.(),m?.(),this.remove(h)}}}const hM=new It;class pP extends Fa{context;size;fixed;scaleX;scaleY;scaleZ;scaleNegX;scaleNegY;scaleNegZ;translationX;translationY;translationZ;translationNegX;translationNegY;translationNegZ;translationXY;translationYZ;translationXZ;constructor(t,i,s){super(),this.context=t,this.size=i,this.fixed=s,this.scaleX=new Sl(this.context,void 0,"x"),this.add(this.scaleX),this.scaleY=new Sl(this.context,void 0,"y"),this.scaleY.rotation.z=Math.PI/2,this.add(this.scaleY),this.scaleZ=new Sl(this.context,void 0,"z"),this.scaleZ.rotation.y=-Math.PI/2,this.add(this.scaleZ),this.scaleNegX=new Sl(this.context,void 0,"x",!0),this.add(this.scaleNegX),this.scaleNegY=new Sl(this.context,void 0,"y",!0),this.scaleNegY.rotation.z=Math.PI/2,this.add(this.scaleNegY),this.scaleNegZ=new Sl(this.context,void 0,"z",!0),this.scaleNegZ.rotation.y=-Math.PI/2,this.add(this.scaleNegZ),this.translationX=new yl(this.context,"x"),this.add(this.translationX),this.translationY=new yl(this.context,"y"),this.translationY.rotation.z=Math.PI/2,this.add(this.translationY),this.translationZ=new yl(this.context,"z"),this.translationZ.rotation.y=-Math.PI/2,this.add(this.translationZ),this.translationNegX=new yl(this.context,"x",void 0,!0,!1),this.add(this.translationNegX),this.translationNegY=new yl(this.context,"y",void 0,!0,!1),this.translationNegY.rotation.z=Math.PI/2,this.add(this.translationNegY),this.translationNegZ=new yl(this.context,"z",void 0,!0,!1),this.translationNegZ.rotation.y=-Math.PI/2,this.add(this.translationNegZ),this.translationXY=new w0(this.context,"xy"),this.add(this.translationXY),this.translationXZ=new w0(this.context,"xz"),this.translationXZ.rotation.x=Math.PI/2,this.add(this.translationXZ),this.translationYZ=new w0(this.context,"yz"),this.translationYZ.rotation.y=-Math.PI/2,this.add(this.translationYZ)}update(t){this.updateWorldMatrix(!0,!1),this.scale.setScalar(1);const i=this.context.getTarget();i!=null&&(i.getWorldScale(hM),this.scale.divide(hM)),this.scale.multiplyScalar(mv(this,t,this.fixed??!0,this.size??1))}bind(t){const i=this.scaleX.bind(16777215,16776960,t),s=this.scaleY.bind(16777215,16776960,t),l=this.scaleZ.bind(16777215,16776960,t),c=this.scaleNegX.bind(16777215,16776960,t),d=this.scaleNegY.bind(16777215,16776960,t),h=this.scaleNegZ.bind(16777215,16776960,t),p=this.translationX.bind(16711680,16776960,t),m=this.translationY.bind(65280,16776960,t),_=this.translationZ.bind(255,16776960,t),g=this.translationNegX.bind(16711680,16776960,t),v=this.translationNegY.bind(65280,16776960,t),y=this.translationNegZ.bind(255,16776960,t),b=this.translationXY.bind(255,16776960,t),C=this.translationYZ.bind(16711680,16776960,t),S=this.translationXZ.bind(65280,16776960,t);return()=>{p?.(),m?.(),_?.(),g?.(),v?.(),y?.(),b?.(),C?.(),S?.(),i?.(),s?.(),l?.(),c?.(),d?.(),h?.()}}}const pM={x:{vector1:new It(0,0,-1),vector2:new It(0,-1,0),rotationOffset:new rn,axis:[1,0,0]},y:{vector1:new It(0,0,-1),vector2:new It(-1,0,-1),rotationOffset:new rn().setFromEuler(new bn(0,0,Math.PI/2)),axis:[0,1,0]},z:{vector1:new It(-1,0,0),vector2:new It(0,-1,0),rotationOffset:new rn().setFromEuler(new bn(0,Math.PI/2,0)),axis:[0,0,1]}},R0=new It,Yc=new It,_d=new It,ks=new It,da=new rn;class C0 extends xr{direction=new It(1,0,0);constructor(t,i,s=""){super(t,i,s,()=>({scale:!1,translate:"as-rotate",rotate:[this.direction],multitouch:!1}))}update(t){const{rotationOffset:i,vector1:s,vector2:l}=pM[this.axis];t.getWorldPosition(R0),this.getWorldPosition(Yc).sub(R0),_d.copy(s),ks.copy(l);const c=this.context.getTarget(),d=this.context.getSpace();d==="local"&&c!=null&&(c.getWorldQuaternion(da),_d.applyQuaternion(da),ks.applyQuaternion(da)),ks.crossVectors(_d,ks);const h=Yc.dot(ks);ks.multiplyScalar(h),Yc.sub(ks),this.quaternion.setFromUnitVectors(_d,Yc.normalize()),d==="local"&&c!=null&&(c.getWorldQuaternion(da),this.quaternion.multiply(da)),this.quaternion.multiply(i),c?.parent!=null?(c.parent.matrixWorld.decompose(R0,da,Yc),da.invert(),this.quaternion.premultiply(da)):da.identity(),this.store.getState()==null&&(this.direction.fromArray(pM[this.axis].axis),this.direction.applyQuaternion(d==="local"&&c!=null?c?.quaternion:da)),c!=null&&this.quaternion.premultiply(da.copy(c.quaternion).invert())}bind(t,i){const{options:s,disabled:l}=yr(this.axis,i);if(s===!1)return;this.options=s;const c=new Si(ui),d=va(this.context,c,this.tag,{color:t,hoverColor:16776960,disabled:l}),h=new xn(gv(.5,.5),c);h.renderOrder=1/0,this.add(h);const p=new xn(new Xg(.5,.1,4,24));p.visible=!1,p.pointerEventsOrder=1/0,p.rotation.set(0,-Math.PI/2,-Math.PI/2),this.add(p);const m=l?void 0:this.context.registerHandle(this.store,p,this.tag);return()=>{c.dispose(),p.geometry.dispose(),h.geometry.dispose(),m?.(),d?.(),this.remove(p),this.remove(h)}}}const D0=new It,N0=new It,mP=new It(1,0,0),Zc=new rn;class gP extends xr{constructor(t,i=""){super(t,"xyz",i,()=>({scale:!1,translate:"as-rotate",rotate:this.options,multitouch:!1}))}update(t){t.getWorldPosition(D0),this.getWorldPosition(N0).sub(D0),this.quaternion.setFromUnitVectors(mP,N0.normalize());const i=this.context.getTarget();i?.parent!=null&&(i.parent.matrixWorld.decompose(D0,Zc,N0),Zc.invert(),this.quaternion.premultiply(Zc)),i!=null&&(Zc.copy(i.quaternion).invert(),this.quaternion.premultiply(Zc))}bind(t){const{options:i,disabled:s}=yr(this.axis,t);if(i===!1)return;this.options=i;const l=new Si(ui),c=va(this.context,l,this.tag,{color:16777215,hoverColor:16776960,opacity:.25,disabled:s}),d=new xn(gv(.5,1),l);d.renderOrder=1/0,this.add(d);const h=new xn(new zM(.25,10,8));h.visible=!1,h.pointerEventsOrder=1/0,this.add(h);const p=s?void 0:this.context.registerHandle(this.store,h,this.tag);return()=>{this.pointerEvents="none",l.dispose(),h.geometry.dispose(),d.geometry.dispose(),p?.(),c?.(),this.remove(h),this.remove(d)}}}const U0=new It,vP=new It,_P=new It(1,0,0),Ml=new rn;class xP extends xr{direction=new It(1,0,0);constructor(t,i=""){super(t,"e",i,()=>({scale:!1,translate:"as-rotate",rotate:[this.direction],multitouch:!1}))}update(t){t.getWorldPosition(U0),this.getWorldPosition(this.direction).sub(U0).normalize(),this.quaternion.setFromUnitVectors(_P,this.direction);const i=this.context.getTarget();i?.parent!=null&&(i.parent.matrixWorld.decompose(U0,Ml,vP),Ml.invert(),this.quaternion.premultiply(Ml),this.direction.applyQuaternion(Ml)),i!=null&&(Ml.copy(i.quaternion).invert(),this.quaternion.premultiply(Ml)),this.direction.negate()}bind(t){const{options:i,disabled:s}=yr(this.axis,t);if(i===!1)return;this.options=i;const l=new Si(ui),c=va(this.context,l,this.tag,{color:16776960,hoverColor:16776960,opacity:.5,disabled:s}),d=new xn(gv(.75,1),l);d.renderOrder=1/0,this.add(d);const h=new xn(new Xg(.75,.1,2,24),new Si({color:"white"}));h.visible=!1,h.rotation.y=Math.PI/2,h.pointerEventsOrder=1/0,this.add(h);const p=s?void 0:this.context.registerHandle(this.store,h,this.tag);return()=>{l.dispose(),h.geometry.dispose(),d.geometry.dispose(),p?.(),c?.(),this.remove(h),this.remove(d)}}}function gv(a,t){const i=new Xg(a,.0075,3,64,t*Math.PI*2);return i.rotateY(Math.PI/2),i.rotateX(Math.PI/2),i}const mM=new It;class yP extends Fa{context;fixed;size;rotationX;rotationY;rotationZ;free;screen;constructor(t,i,s){super(),this.context=t,this.fixed=i,this.size=s,this.rotationX=new C0(this.context,"x"),this.add(this.rotationX),this.rotationY=new C0(this.context,"y"),this.add(this.rotationY),this.rotationZ=new C0(this.context,"z"),this.add(this.rotationZ),this.free=new gP(this.context),this.add(this.free),this.screen=new xP(this.context),this.add(this.screen)}update(t){this.updateWorldMatrix(!0,!1),this.rotationX.update(t),this.rotationY.update(t),this.rotationZ.update(t),this.free.update(t),this.screen.update(t),this.scale.setScalar(1);const i=this.context.getTarget();i!=null&&(i.getWorldScale(mM),this.scale.divide(mM)),this.scale.multiplyScalar(mv(this,t,this.fixed??!0,this.size??1))}bind(t){const i=this.rotationX.bind(16711680,t),s=this.rotationY.bind(65280,t),l=this.rotationZ.bind(255,t),c=this.screen.bind(t),d=this.free.bind(t);return()=>{i?.(),s?.(),l?.(),c?.(),d?.()}}}const SP=new bn,MP=new bn(0,0,Math.PI/2),bP=new bn(0,-Math.PI/2,0);class EP extends Fa{xAxisHighlight;yAxisHighlight;zAxisHighlight;handles;context;constructor(t){super(),this.context=new eP(this,t),this.xAxisHighlight=new T0(this.context,SP),this.add(this.xAxisHighlight),this.yAxisHighlight=new T0(this.context,MP),this.add(this.yAxisHighlight),this.zAxisHighlight=new T0(this.context,bP),this.add(this.zAxisHighlight)}set space(t){this.context.space=t}get space(){return this.context.space}update(t,i){this.context.update(t),this.xAxisHighlight.update(),this.yAxisHighlight.update(),this.zAxisHighlight.update(),this.handles?.update(i)}bind(t,i){const s=this.xAxisHighlight.bind("x"),l=this.yAxisHighlight.bind("y"),c=this.zAxisHighlight.bind("z");switch(t){case"rotate":this.handles=new yP(this.context);break;case"scale":this.handles=new pP(this.context);break;case"translate":this.handles=new cP(this.context);break}this.add(this.handles);const d=this.handles.bind(i);return()=>{this.handles!=null&&this.remove(this.handles),this.handles=void 0,d(),s(),l(),c()}}}class TP{nativeEvent;NONE=0;CAPTURING_PHASE=1;AT_TARGET=2;BUBBLING_PHASE=3;relatedTarget=null;get altKey(){return this.getFromNative("altKey",!1)}get button(){return this.getFromNative("button",0)}get buttons(){return this.getFromNative("buttons",0)}get clientX(){return this.getFromNative("clientX",0)}get clientY(){return this.getFromNative("clientY",0)}get ctrlKey(){return this.getFromNative("ctrlKey",!1)}get layerX(){return this.getFromNative("layerX",0)}get layerY(){return this.getFromNative("layerY",0)}get metaKey(){return this.getFromNative("metaKey",!1)}get movementX(){return this.getFromNative("movementX",0)}get movementY(){return this.getFromNative("movementY",0)}get offsetX(){return this.getFromNative("offsetX",0)}get offsetY(){return this.getFromNative("offsetY",0)}get pageX(){return this.getFromNative("pageX",0)}get pageY(){return this.getFromNative("pageY",0)}get screenX(){return this.getFromNative("screenX",0)}get screenY(){return this.getFromNative("screenY",0)}get shiftKey(){return this.getFromNative("shiftKey",!1)}get x(){return this.getFromNative("x",0)}get y(){return this.getFromNative("y",0)}get detail(){return this.getFromNative("detail",0)}get view(){return this.getFromNative("view",null)}get which(){return this.getFromNative("which",0)}get cancelBubble(){return this.getFromNative("cancelBubble",!1)}get composed(){return this.getFromNative("composed",!1)}get eventPhase(){return this.getFromNative("eventPhase",0)}get isTrusted(){return this.getFromNative("isTrusted",!1)}get returnValue(){return this.getFromNative("returnValue",!1)}get timeStamp(){return this.getFromNative("timeStamp",0)}get cancelable(){return this.getFromNative("cancelable",!1)}get defaultPrevented(){return this.getFromNative("defaultPrevented",!1)}constructor(t){this.nativeEvent=t}getFromNative(t,i){return t in this.nativeEvent?this.nativeEvent[t]:i}}const L0=new It;class li extends TP{type;bubbles;internalPointer;intersection;camera;currentObject;object;propagationState;get pointerId(){return this.internalPointer.id}get pointerType(){return this.internalPointer.type}get pointerState(){return this.internalPointer.state}get distance(){return this.intersection.distance}get distanceToRay(){return this.intersection.distanceToRay}get point(){return this.intersection.point}get index(){return this.intersection.index}get face(){return this.intersection.face}get faceIndex(){return this.intersection.faceIndex}get uv(){return this.intersection.uv}get uv1(){return this.intersection.uv1}get normal(){return this.intersection.normal}get instanceId(){return this.intersection.instanceId}get pointOnLine(){return this.intersection.pointOnLine}get batchId(){return this.intersection.batchId}get pointerPosition(){return this.intersection.pointerPosition}get pointerQuaternion(){return this.intersection.pointerQuaternion}get pointOnFace(){return this.intersection.pointOnFace}get localPoint(){return this.intersection.localPoint}get details(){return this.intersection.details}get target(){return this.object}get currentTarget(){return this.currentObject}get eventObject(){return this.currentObject}get srcElement(){return this.currentObject}_pointer;get pointer(){return this._pointer==null&&(L0.copy(this.intersection.point).project(this.camera),this._pointer=new zl(L0.x,L0.y)),this._pointer}_ray;get ray(){if(this._ray!=null)return this._ray;switch(this.intersection.details.type){case"screen-ray":case"ray":case"sphere":return this._ray=new SS(this.intersection.pointerPosition,new It(0,0,-1).applyQuaternion(this.intersection.pointerQuaternion));case"lines":return this._ray=new SS(this.intersection.details.line.start,this.intersection.details.line.end.clone().sub(this.intersection.details.line.start).normalize())}}_intersections=[];get intersections(){return this._intersections==null&&(this._intersections=[{...this.intersection,eventObject:this.currentObject}]),this._intersections}_unprojectedPoint;get unprojectedPoint(){if(this._unprojectedPoint==null){const t=this.pointer;this._unprojectedPoint=new It(t.x,t.y,0).unproject(this.camera)}return this._unprojectedPoint}get stopped(){return this.propagationState.stoppedImmediate||this.propagationState.stopped}get stoppedImmediate(){return this.propagationState.stoppedImmediate}get delta(){throw new Error("not supported")}constructor(t,i,s,l,c,d,h=c.object,p=h,m={stopped:!i,stoppedImmediate:!1}){super(s),this.type=t,this.bubbles=i,this.internalPointer=l,this.intersection=c,this.camera=d,this.currentObject=h,this.object=p,this.propagationState=m}stopPropagation(){this.propagationState.stopped=!0}stopImmediatePropagation(){this.propagationState.stoppedImmediate=!0}retarget(t){return new li(this.type,this.bubbles,this.nativeEvent,this.internalPointer,this.intersection,this.camera,t,this.target,this.propagationState)}}class kd extends li{get deltaX(){return this.nativeEvent.deltaX}get deltaY(){return this.nativeEvent.deltaY}get deltaZ(){return this.nativeEvent.deltaZ}constructor(t,i,s,l,c,d){super("wheel",!0,t,i,s,l,c,d)}retarget(t){return new kd(this.nativeEvent,this.internalPointer,this.intersection,this.camera,t,this.target)}}function _i(a){BE(a,a.currentObject)}function BE(a,t){if(t==null)return;const i=wP(t,a.type);if(i!=null&&i.length>0){const s=a.retarget(t),l=i.length;for(let c=0;c<l&&!s.stoppedImmediate;c++)i[c](s)}a.stopped||BE(a,t.parent)}const HE={click:"onClick",contextmenu:"onContextMenu",dblclick:"onDoubleClick",pointercancel:"onPointerCancel",pointerdown:"onPointerDown",pointerenter:"onPointerEnter",pointerleave:"onPointerLeave",pointermove:"onPointerMove",pointerout:"onPointerOut",pointerover:"onPointerOver",pointerup:"onPointerUp",wheel:"onWheel"},AP=Object.keys(HE);function wP(a,t){if(a._listeners!=null&&t in a._listeners)return a._listeners[t];let i;if(a.isVoidObject&&t==="click"&&a.parent?.__r3f!=null&&(i=a.parent.__r3f.root.getState().onPointerMissed),a.__r3f!=null&&(i=a.__r3f.handlers[HE[t]]),i!=null)return[i]}const RP=1e10,CP=new zM(RP),gM=new Map;function DP(a){let t=gM.get(a);return t==null&&(t=new xn(CP),t.isVoidObject=!0,t.parent=a,t.pointerEventsOrder=-1/0,gM.set(a,t)),t}function NP(a,t,i){const s=t.normal??t.face?.normal;return s==null?!1:(a.setFromNormalAndCoplanarPoint(s,t.localPoint),a.applyMatrix4(i),!0)}function UP(a,t,i){if(t==="none"||t==="listener"&&!a)return!1;if(i==="all")return!0;if(typeof i=="function")return({id:c,type:d,state:h})=>i(c,d,h);let s,l;return"deny"in i?(l=!0,s=i.deny):(l=!1,s=i.allow),Array.isArray(s)?c=>vM(s.includes(c.type),l):c=>vM(s===c.type,l)}function vM(a,t){return t?!a:a}function GE(a,t,i,s=!1,l,c,d){const h=s||LP(a,t),p=t.pointerEvents??l,m=p??t.defaultPointerEvents??"listener",_=t.pointerEventsType??c??"all",g=t.pointerEventsOrder??d??0,v=UP(h,m,_),y=i.length;if(y===1)(v===!0||typeof v=="function"&&v(i[0]))&&O0(i[0],t,m,_,g);else if(v===!0)for(let S=0;S<y;S++)O0(i[S],t,m,_,g);else if(typeof v=="function")for(let S=0;S<y;S++){const M=i[S];v(M)&&O0(M,t,m,_,g)}if(t.children.length===0||t.intersectChildren===!1)return;const b=t.interactableDescendants??t.children,C=b.length;for(let S=0;S<C;S++)GE(a,b[S],i,h,p,_,g)}function LP(a,t){if(t.ancestorsHaveListeners||a==="pointer"&&t.ancestorsHavePointerListeners||a==="wheel"&&t.ancestorsHaveWheelListeners||t.__r3f!=null&&t.__r3f?.eventCount>0&&(a==="wheel"&&t.__r3f.handlers.onWheel!=null||a==="pointer"&&Object.keys(t.__r3f.handlers).some(l=>l!="onWheel")))return!0;if(t._listeners==null)return!1;if(a==="wheel"){const l=t._listeners.wheel;return l!=null&&l.length>0}const i=Object.entries(t._listeners),s=i.length;for(let l=0;l<s;l++){const c=i[l];if(c[0]!=="wheel"&&AP.includes(c[0])&&c[1]!=null&&c[1].length>0)return!0}return!1}function O0({intersector:a,options:t},i,s,l,c){t.filter?.(i,s,l,c)!==!1&&a.executeIntersection(i,c)}function OP(a,t,{customSort:i=PP}={},s){let l,c,d;const h=a.length;for(let p=0;p<h;p++){const m=a[p],_=t?.[p];(l==null||i(m,_,l,c)<0)&&(d=p,l=m,c=_)}return d}function PP(a,t=0,i,s=0){return t!=s?s-t:a.distance-i.distance}const _M=1e7;function zP(a,t,i,s,l,c=0){const d=t.direction.clone().multiplyScalar(_M),h=_M;return{distance:h+c,object:DP(a),point:d,normal:t.origin.clone().sub(d).normalize(),details:i(d,h),pointerPosition:s,pointerQuaternion:l,pointOnFace:d,localPoint:d}}function IP(a,t,i){for(;i>0;)a.push(t),--i}const P0=Symbol("buttonsDownTime"),FP=Symbol("buttonsClickTime");globalThis.pointerEventspointerMap??=new Map;hu.prototype.setPointerCapture=function(a){vv(a)?.setCapture(this)};hu.prototype.releasePointerCapture=function(a){const t=vv(a);t==null||!t.hasCaptured(this)||t.setCapture(void 0)};hu.prototype.hasPointerCapture=function(a){return vv(a)?.hasCaptured(this)??!1};function vv(a){return globalThis.pointerEventspointerMap?.get(a)}class BP{id;type;state;intersector;getCamera;onMoveCommited;parentSetPointerCapture;parentReleasePointerCapture;options;prevIntersection;intersection;prevEnabled=!0;enabled=!0;wheelIntersection;pointerEntered=[];pointerEnteredHelper=[];pointerCapture;buttonsDownTime=new Map;buttonsDown=new Set;wasMoved=!1;onFirstMove=[];constructor(t,i,s,l,c,d,h,p,m={}){this.id=t,this.type=i,this.state=s,this.intersector=l,this.getCamera=c,this.onMoveCommited=d,this.parentSetPointerCapture=h,this.parentReleasePointerCapture=p,this.options=m,globalThis.pointerEventspointerMap?.set(t,this)}getPointerCapture(){return this.pointerCapture}hasCaptured(t){return this.pointerCapture?.object===t}setCapture(t){this.pointerCapture?.object!==t&&(this.clearPointerCapture(),t!=null&&this.intersection!=null&&(this.pointerCapture={object:t,intersection:this.intersection},this.parentSetPointerCapture?.()))}getButtonsDown(){return this.buttonsDown}getIntersection(){return this.intersection}getEnabled(){return this.enabled}setEnabled(t,i,s=!0){this.enabled!==t&&(!t&&this.pointerCapture!=null&&this.clearPointerCapture(),this.enabled=t,s&&this.commit(i,!1))}computeIntersection(t,i,s){return this.pointerCapture!=null?this.intersector.intersectPointerCapture(this.pointerCapture,s):(this.intersector.startIntersection(s),GE(t,i,[this]),this.intersector.finalizeIntersection(i))}setIntersection(t){this.intersection=t}commit(t,i){const s=this.getCamera(),l=this.prevEnabled?this.prevIntersection:void 0,c=this.enabled?this.intersection:void 0;l!=null&&l.object!=c?.object&&_i(new li("pointerout",!0,t,this,l,s));const d=this.pointerEntered;this.pointerEntered=[],this.pointerEnteredHelper.length=0,VE(c?.object,this.pointerEntered,d,this.pointerEnteredHelper);const h=d.length;for(let p=0;p<h;p++){const m=d[p];_i(new li("pointerleave",!1,t,this,l,s,m))}c!=null&&l?.object!=c.object&&_i(new li("pointerover",!0,t,this,c,s));for(let p=this.pointerEnteredHelper.length-1;p>=0;p--){const m=this.pointerEnteredHelper[p];_i(new li("pointerenter",!1,t,this,c,s,m))}if(i&&c!=null&&_i(new li("pointermove",!0,t,this,c,s)),this.prevIntersection=this.intersection,this.prevEnabled=this.enabled,!this.wasMoved&&this.intersector.isReady()){this.wasMoved=!0;const p=this.onFirstMove.length;for(let m=0;m<p;m++)this.onFirstMove[m](s);this.onFirstMove.length=0}this.onMoveCommited?.(this)}move(t,i){this.intersection=this.computeIntersection("pointer",t,i),this.commit(i,!0)}over(t,i){this.wasMoved||(this.intersection=this.computeIntersection("pointer",t,i),this.commit(i,!1))}emitMove(t){this.intersection!=null&&_i(new li("pointermove",!0,t,this,this.intersection,this.getCamera()))}down(t){if(this.buttonsDown.add(t.button),!this.enabled)return;if(!this.wasMoved){this.onFirstMove.push(this.down.bind(this,t));return}if(this.intersection==null)return;_i(new li("pointerdown",!0,t,this,this.intersection,this.getCamera()));const{object:i}=this.intersection;i[P0]??=new Map,i[P0].set(t.button,t.timeStamp),this.buttonsDownTime.set(t.button,t.timeStamp)}up(t){if(this.buttonsDown.delete(t.button),!this.enabled)return;if(!this.wasMoved){this.onFirstMove.push(this.up.bind(this,t));return}if(this.intersection==null)return;const{clickThesholdMs:i,contextMenuButton:s=2,dblClickThresholdMs:l=500,clickThresholdMs:c=i??300}=this.options;this.clearPointerCapture();const d=HP(this.buttonsDownTime,this.intersection.object[P0],t.button,t.timeStamp,c),h=this.getCamera();if(d&&t.button===s&&_i(new li("contextmenu",!0,t,this,this.intersection,h)),_i(new li("pointerup",!0,t,this,this.intersection,h)),!d||t.button===s)return;_i(new li("click",!0,t,this,this.intersection,h));const{object:p}=this.intersection,m=p[FP]??=new Map,_=m.get(t.button);if(_==null||t.timeStamp-_>l){m.set(t.button,t.timeStamp);return}_i(new li("dblclick",!0,t,this,this.intersection,h)),m.delete(t.button)}cancel(t){this.buttonsDown.clear(),this.buttonsDownTime.clear(),this.clearPointerCapture(),this.onFirstMove.length=0,!(!this.enabled||!this.wasMoved||this.intersection==null)&&_i(new li("pointercancel",!0,t,this,this.intersection,this.getCamera()))}wheel(t,i,s=!1){if(!this.enabled)return;if(!this.wasMoved&&s){this.onFirstMove.push(this.wheel.bind(this,t,i,s));return}s||(this.wheelIntersection=this.computeIntersection("wheel",t,i));const l=s?this.intersection:this.wheelIntersection;l!=null&&_i(new kd(i,this,l,this.getCamera()))}emitWheel(t,i=!1){if(!this.enabled)return;if(!this.wasMoved&&i){this.onFirstMove.push(this.emitWheel.bind(this,t,i));return}const s=i?this.intersection:this.wheelIntersection;s!=null&&_i(new kd(t,this,s,this.getCamera()))}exit(t){(this.buttonsDown.size>0||this.pointerCapture!=null)&&this.cancel(t),this.wasMoved&&(this.intersection=void 0,this.commit(t,!1)),this.onFirstMove.length=0,this.wasMoved=!1}clearPointerCapture(){this.pointerCapture!=null&&(this.parentReleasePointerCapture?.(),this.pointerCapture=void 0)}}function VE(a,t,i,s){if(a==null)return;const l=i.indexOf(a);l!=-1?i.splice(l,1):s.push(a),t.push(a),VE(a.parent,t,i,s)}function HP(a,t,i,s,l){if(t==null)return!1;const c=t.get(i);return!(c==null||s-c>l||c!=a.get(i))}const Qc=new IM,z0=new IM,xM=new zl,yM=new zl,SM=new zl,I0=new It,GP=new Pi,xd=new It;function VP(a,t,i){xd.copy(t).applyMatrix4(GP.copy(i.matrixWorld).invert());const s=i.geometry.attributes.uv;if(s==null||!(s instanceof Tw))return!1;let l;return kP(i,(c,d,h)=>{i.getVertexPosition(c,Qc.a),i.getVertexPosition(d,Qc.b),i.getVertexPosition(h,Qc.c);const p=Qc.closestPointToPoint(xd,I0).distanceTo(xd);l!=null&&p>=l||(l=p,z0.copy(Qc),xM.fromBufferAttribute(s,c),yM.fromBufferAttribute(s,d),SM.fromBufferAttribute(s,h))}),l==null?!1:(z0.closestPointToPoint(xd,I0),z0.getInterpolation(I0,xM,yM,SM,a),!0)}function kP(a,t){const i=a.geometry.drawRange;if(a.geometry.index!=null){const d=a.geometry.index,h=Math.max(0,i.start),p=Math.min(d.count,i.start+i.count);for(let m=h;m<p;m+=3)t(d.getX(m),d.getX(m+1),d.getX(m+2));return}const s=a.geometry.attributes.position;if(s==null)return;const l=Math.max(0,i.start),c=Math.min(s.count,i.start+i.count);for(let d=l;d<c;d+=3)t(d,d+1,d+2)}new Pi;const MM=new Pi,XP=new It,bM=new zl,qP=new It;class WP{prepareTransformation;options;raycaster=new Aw;cameraQuaternion=new rn;fromPosition=new It;fromQuaternion=new rn;coords=new zl;viewPlane=new Xd;intersects=[];pointerEventsOrders=[];constructor(t,i){this.prepareTransformation=t,this.options=i}isReady(){return!0}intersectPointerCapture({intersection:t,object:i},s){const l=t.details;if(l.type!="screen-ray")throw new Error(`unable to process a pointer capture of type "${t.details.type}" with a camera ray intersector`);if(!this.startIntersection(s))return t;this.viewPlane.constant-=l.distanceViewPlane;const c=this.raycaster.ray.intersectPlane(this.viewPlane,new It);if(c==null)return t;t.object.updateWorldMatrix(!0,!1),NP(this.viewPlane,t,t.object.matrixWorld);let d=t.uv;return t.object instanceof xn&&VP(bM,c,t.object)&&(d=bM.clone()),{...t,details:{...l,direction:this.raycaster.ray.direction.clone(),screenPoint:this.coords.clone()},uv:d,object:i,point:c,pointOnFace:c,pointerPosition:this.raycaster.ray.origin.clone(),pointerQuaternion:this.cameraQuaternion.clone()}}startIntersection(t){const i=this.prepareTransformation(t,this.coords);return i==null?!1:(i.updateWorldMatrix(!0,!1),i.matrixWorld.decompose(this.fromPosition,this.fromQuaternion,XP),this.raycaster.setFromCamera(this.coords,i),this.viewPlane.setFromNormalAndCoplanarPoint(i.getWorldDirection(qP),this.raycaster.ray.origin),!0)}executeIntersection(t,i){const s=this.intersects.length;t.raycast(this.raycaster,this.intersects),IP(this.pointerEventsOrders,i,this.intersects.length-s)}finalizeIntersection(t){const i=this.fromPosition.clone(),s=this.cameraQuaternion.clone(),l=this.raycaster.ray.direction.clone(),c=OP(this.intersects,this.pointerEventsOrders,this.options),d=c==null?void 0:this.intersects[c];return this.intersects.length=0,this.pointerEventsOrders.length=0,d==null?zP(t,this.raycaster.ray,(h,p)=>({type:"screen-ray",distanceViewPlane:p,screenPoint:this.coords.clone(),direction:l}),i,s):(d.object.updateWorldMatrix(!0,!1),MM.copy(d.object.matrixWorld).invert(),Object.assign(d,{details:{type:"screen-ray",distanceViewPlane:this.viewPlane.distanceToPoint(d.point),screenPoint:this.coords.clone(),direction:l},pointOnFace:d.point,pointerPosition:i,pointerQuaternion:s,localPoint:d.point.clone().applyMatrix4(MM)}))}}new Pi;new Pi;let jP=23412;function YP(){return jP++}function ZP(a,t,i){if(!(t instanceof globalThis.MouseEvent))return i.set(0,0);const{width:s,height:l,top:c,left:d}=a.getBoundingClientRect(),h=t.clientX-d,p=t.clientY-c;return i.set(h/s*2-1,-(p/l)*2+1)}function QP(a,t,i,s){return KP(a,typeof t=="function"?t:()=>t,i,ZP.bind(null,a),a.setPointerCapture.bind(a),l=>{a.hasPointerCapture(l)&&a.releasePointerCapture(l)},{pointerTypePrefix:"screen-",...s})}function KP(a,t,i,s,l,c,d={}){const h=d?.forwardPointerCapture??!0,p=new Map,m=d.pointerTypePrefix??"forward-",_=(E,O)=>{let V=p.get(E.pointerId);return V!=null||(V=new BP(YP(),`${m}${E.pointerType}`,E.pointerState,new WP((z,Z)=>(s(z,Z),t()),d),t,void 0,h?l.bind(null,E.pointerId):void 0,h?c.bind(null,E.pointerId):void 0,d),O!="move"&&O!="wheel"&&(V.setIntersection(V.computeIntersection("pointer",i,E)),V.commit(E,!1)),p.set(E.pointerId,V)),V},g=new Map,v=new Map,y=[],b=[],C=(E,O,V)=>{switch(E){case"move":V.move(i,O);return;case"over":V.move(i,O);return;case"wheel":V.wheel(i,O);return;case"cancel":V.cancel(O);return;case"down":if(!EM(O))return;V.down(O);return;case"up":if(!EM(O))return;V.up(O);return;case"exit":v.delete(V),g.delete(V),V.exit(O);return}},S=(E,O)=>{const V=_(O,E);E==="move"&&v.set(V,O),E==="wheel"&&g.set(V,O),d.batchEvents??!0?b.push({type:E,event:O}):C(E,O,V)},M=S.bind(null,"move"),R=S.bind(null,"over"),P=S.bind(null,"cancel"),N=S.bind(null,"down"),H=S.bind(null,"up"),U=S.bind(null,"wheel"),L=S.bind(null,"exit");return a.addEventListener("pointermove",M),a.addEventListener("pointerover",R),a.addEventListener("pointercancel",P),a.addEventListener("pointerdown",N),a.addEventListener("pointerup",H),a.addEventListener("wheel",U),a.addEventListener("pointerleave",L),{destroy(){a.removeEventListener("pointermove",M),a.removeEventListener("pointerover",R),a.removeEventListener("pointercancel",P),a.removeEventListener("pointerdown",N),a.removeEventListener("pointerup",H),a.removeEventListener("wheel",U),a.removeEventListener("pointerleave",L),v.clear(),g.clear()},update(){const E=b.length;for(let O=0;O<E;O++){const{type:V,event:z}=b[O],Z=_(z,V);if(V==="move"&&(y.push(Z),v.get(Z)!=z)){Z.emitMove(z);continue}if(V==="wheel"&&g.get(Z)!=z){Z.emitWheel(z);continue}C(V,z,Z)}if(b.length=0,d.intersectEveryFrame??!1)for(const[O,V]of v.entries())y.includes(O)||O.move(i,V);y.length=0}}}function EM(a){return a.button!=null}const $P=2;class JP{constructor(t){this.xrDevice=t,this.combinedCameraPosition=new ut,this.isPointerLocked=!1,this.vec3=new ut,this.quat=new Ia,this.quatB=new Ia,this.quatInv=new Ia,this.quatMouse=new Ia,this.euler=new fs,this.keyState={ShiftLeft:!1,KeyW:!1,KeyA:!1,KeyS:!1,KeyD:!1,ArrowUp:!1,ArrowDown:!1},this.lastTime=0,this.isInProgrammaticMode=!1,this.interactionsEnabled=!0,this.scene=new _C,this.camera=new Qi(50,window.innerWidth/window.innerHeight,.1,40),this.playerRig=new bl,this.cameraRig=new bl,this.scene.add(this.playerRig),this.playerRig.add(this.cameraRig),this.cameraRig.position.fromArray(t.position.vec3),this.cameraRig.quaternion.fromArray(t.quaternion.quat),this.cameraRig.add(this.camera),this.camera.position.x-=t.ipd/2;const i=new ka(new hv(.25,.27,32),new dv({color:16777215,side:gr}));i.rotateX(-Math.PI/2),this.scene.add(i),this.renderer=new OO({alpha:!0}),this.renderer.setPixelRatio(window.devicePixelRatio),this.renderer.setSize(window.innerWidth,window.innerHeight),this.renderer.setClearColor(0,0),this.renderer.domElement.style.position="fixed",this.renderer.domElement.style.top="50vh",this.renderer.domElement.style.left="50vw",this.renderer.domElement.style.transform="translate(-50%, -50%)",this.transformHandles=new Map,["left","right"].forEach(s=>{const l=new EP;l.scale.setScalar(.1),l.position.fromArray(t.controllers[s].position.vec3),l.quaternion.fromArray(t.controllers[s].quaternion.quat),this.cameraRig.attach(l),l.userData={defaultPosition:l.position.toArray(),defaultQuaternion:l.quaternion.toArray()},l.userData.setMode=c=>{var d,h;(h=(d=l.userData).modeCleanup)===null||h===void 0||h.call(d),l.userData.modeCleanup=l.bind(c),l.userData.mode=c},l.userData.setMode("translate"),l.space="local",this.transformHandles.set(s,l),l.addEventListener("click",()=>{l.userData.mode==="translate"?l.userData.setMode("rotate"):l.userData.setMode("translate")})}),window.transformHandles=this.transformHandles,this.mouseMoveHandler=s=>{if(!this.isPointerLocked||this.isInProgrammaticMode)return;const l=s.movementX||s.mozMovementX||s.webkitMovementX||0,c=s.movementY||s.mozMovementY||s.webkitMovementY||0;this.playerRig.rotation.y-=l*.002,this.cameraRig.rotation.x-=c*.002,t.quaternion.copy(this.cameraRig.getWorldQuaternion(this.quatMouse))},this.cameraRig.getWorldPosition(this.combinedCameraPosition),this.headsetDefaultPosition=this.cameraRig.position.clone(),this.headsetDefaultQuaternion=this.cameraRig.quaternion.clone(),this.forwardHtmlEvents=QP(this.renderer.domElement,()=>this.camera,this.scene).update,this.pointerLockChangeHandlerBound=this.pointerLockChangeHandler.bind(this),this.keyDownHandlerBound=this.keyDownHandler.bind(this),this.keyUpHandlerBound=this.keyUpHandler.bind(this),document.addEventListener("pointerlockchange",this.pointerLockChangeHandlerBound,!1),document.addEventListener("mozpointerlockchange",this.pointerLockChangeHandlerBound,!1),document.addEventListener("webkitpointerlockchange",this.pointerLockChangeHandlerBound,!1),document.addEventListener("keydown",this.keyDownHandlerBound,!1),document.addEventListener("keyup",this.keyUpHandlerBound,!1)}lockPointer(){this.isInProgrammaticMode||!this.interactionsEnabled||(this.renderer.domElement.requestPointerLock=this.renderer.domElement.requestPointerLock||this.renderer.domElement.mozRequestPointerLock||this.renderer.domElement.webkitRequestPointerLock,this.renderer.domElement.requestPointerLock())}pointerLockChangeHandler(){this.isPointerLocked=document.pointerLockElement===this.renderer.domElement||document.mozPointerLockElement===this.renderer.domElement||document.webkitPointerLockElement===this.renderer.domElement,this.isPointerLocked?document.addEventListener("mousemove",this.mouseMoveHandler,!1):document.removeEventListener("mousemove",this.mouseMoveHandler,!1)}keyDownHandler(t){const{keyState:i}=this;t.code in i&&(i[t.code]=!0),!this.isInProgrammaticMode&&(i.ShiftLeft&&i.ArrowUp&&(this.cameraRig.position.y+=.05),i.ShiftLeft&&i.ArrowDown&&(this.cameraRig.position.y-=.05))}keyUpHandler(t){const{keyState:i}=this;t.code in i&&(i[t.code]=!1)}movePlayerRig(t){const{playerRig:i,keyState:s,vec3:l}=this;l.set((s.KeyD?1:0)-(s.KeyA?1:0),0,(s.KeyS?1:0)-(s.KeyW?1:0)),l.lengthSq()>0&&s.ShiftLeft&&(l.normalize().multiplyScalar($P*t).applyQuaternion(i.quaternion),i.position.add(l))}resetDeviceTransforms(){const{playerRig:t,cameraRig:i,transformHandles:s}=this;i.position.copy(this.headsetDefaultPosition),i.quaternion.copy(this.headsetDefaultQuaternion),t.position.set(0,0,0),t.quaternion.set(0,0,0,1),s.forEach(l=>{l.position.fromArray(l.userData.defaultPosition),l.quaternion.fromArray(l.userData.defaultQuaternion)})}captureDefaultPose(){const t=this.cameraRig.getWorldPosition(this.vec3).toArray(),i=this.cameraRig.getWorldQuaternion(this.quat).toArray(),s={},l={};return this.transformHandles.forEach((c,d)=>{const h=c.getWorldPosition(this.vec3).toArray(),p=c.getWorldQuaternion(this.quat).toArray(),m={position:h,quaternion:p};s[d]=m,l[d]={position:[...h],quaternion:[...p]}}),{headset:{position:t,quaternion:i},controllers:s,hands:l}}applyDefaultPose(t){const{headset:i,controllers:s,hands:l}=t;this.headsetDefaultPosition.fromArray(i.position),this.headsetDefaultQuaternion.fromArray(i.quaternion),this.quatInv.copy(this.headsetDefaultQuaternion).invert(),this.transformHandles.forEach((c,d)=>{var h;const p=(h=s?.[d])!==null&&h!==void 0?h:l?.[d];p&&(this.vec3.fromArray(p.position).sub(this.headsetDefaultPosition).applyQuaternion(this.quatInv),this.quat.fromArray(p.quaternion).premultiply(this.quatInv),c.userData.defaultPosition=this.vec3.toArray(),c.userData.defaultQuaternion=this.quat.toArray())}),this.resetDeviceTransforms(),this.combinedCameraPosition.copy(this.headsetDefaultPosition)}syncDeviceTransforms(){const{xrDevice:t,cameraRig:i,transformHandles:s}=this;t.position.copy(i.getWorldPosition(this.vec3)),t.quaternion.copy(i.getWorldQuaternion(this.quat)),s.forEach((l,c)=>{const d=t.primaryInputMode==="controller"?t.controllers[c]:t.hands[c];d.position.copy(l.getWorldPosition(this.vec3)),d.quaternion.copy(l.getWorldQuaternion(this.quat))})}syncFromDevice(){const{xrDevice:t,playerRig:i,cameraRig:s,transformHandles:l}=this,c=t.position,d=t.quaternion;this.combinedCameraPosition.set(c.x,c.y,c.z),this.quatB.set(d.x,d.y,d.z,d.w),this.euler.setFromQuaternion(this.quatB,"YXZ"),i.position.set(c.x,0,c.z),i.rotation.set(0,this.euler.y,0),s.position.set(0,c.y,0),this.quat.setFromEuler(this.euler.set(0,this.euler.y,0,"YXZ")),s.quaternion.multiplyQuaternions(this.quat.invert(),this.quatB),i.updateMatrixWorld(!0),s.getWorldQuaternion(this.quatInv).invert(),l.forEach((h,p)=>{const m=t.primaryInputMode==="controller"?t.controllers[p]:t.hands[p],_=this.vec3.set(m.position.x,m.position.y,m.position.z);s.worldToLocal(_),h.position.copy(_),this.quatB.set(m.quaternion.x,m.quaternion.y,m.quaternion.z,m.quaternion.w),this.quatB.premultiply(this.quatInv),h.quaternion.copy(this.quatB)})}setInteractionsEnabled(t){this.interactionsEnabled=t,!t&&this.isPointerLocked&&document.exitPointerLock()}renderScene(t){const i=this.xrDevice.fovy/Math.PI*180;let s=!1;this.camera.fov!==i&&(this.camera.fov=i,s=!0);const l=this.xrDevice.canvasDimensions;if(l){const d=this.renderer.domElement;(d.width!==l.width||d.height!==l.height)&&(this.camera.aspect=l.width/l.height,this.renderer.setSize(l.width,l.height),s=!0)}s&&this.camera.updateProjectionMatrix(),this.isInProgrammaticMode||(this.isPointerLocked?this.cameraRig.getWorldPosition(this.combinedCameraPosition):(this.cameraRig.position.y=this.combinedCameraPosition.y,this.playerRig.position.x=this.combinedCameraPosition.x,this.playerRig.position.z=this.combinedCameraPosition.z)),this.forwardHtmlEvents(),this.transformHandles.forEach((d,h)=>{var p;const m=!!(!((p=this.xrDevice.controllers[h])===null||p===void 0)&&p.connected);d.visible=m&&!this.isPointerLocked&&!this.isInProgrammaticMode,m&&d.update(t,this.camera)});const c=Math.min((t-this.lastTime)/1e3,.1);this.isInProgrammaticMode||(this.movePlayerRig(c),this.syncDeviceTransforms()),this.renderer.render(this.scene,this.camera),this.lastTime=t}get domElement(){return this.renderer.domElement}dispose(){this.renderer.dispose(),document.removeEventListener("pointerlockchange",this.pointerLockChangeHandlerBound,!1),document.removeEventListener("mozpointerlockchange",this.pointerLockChangeHandlerBound,!1),document.removeEventListener("webkitpointerlockchange",this.pointerLockChangeHandlerBound,!1),document.removeEventListener("mousemove",this.mouseMoveHandler,!1),document.removeEventListener("keydown",this.keyDownHandlerBound,!1),document.removeEventListener("keyup",this.keyUpHandlerBound,!1)}}const t4="2.4.0";var F0={exports:{}},Kc={},B0={exports:{}},H0={};/**
 * @license React
 * scheduler.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var TM;function e4(){return TM||(TM=1,(function(a){function t(B,W){var J=B.length;B.push(W);t:for(;0<J;){var dt=J-1>>>1,pt=B[dt];if(0<l(pt,W))B[dt]=W,B[J]=pt,J=dt;else break t}}function i(B){return B.length===0?null:B[0]}function s(B){if(B.length===0)return null;var W=B[0],J=B.pop();if(J!==W){B[0]=J;t:for(var dt=0,pt=B.length,Tt=pt>>>1;dt<Tt;){var zt=2*(dt+1)-1,re=B[zt],F=zt+1,lt=B[F];if(0>l(re,J))F<pt&&0>l(lt,re)?(B[dt]=lt,B[F]=J,dt=F):(B[dt]=re,B[zt]=J,dt=zt);else if(F<pt&&0>l(lt,J))B[dt]=lt,B[F]=J,dt=F;else break t}}return W}function l(B,W){var J=B.sortIndex-W.sortIndex;return J!==0?J:B.id-W.id}if(a.unstable_now=void 0,typeof performance=="object"&&typeof performance.now=="function"){var c=performance;a.unstable_now=function(){return c.now()}}else{var d=Date,h=d.now();a.unstable_now=function(){return d.now()-h}}var p=[],m=[],_=1,g=null,v=3,y=!1,b=!1,C=!1,S=!1,M=typeof setTimeout=="function"?setTimeout:null,R=typeof clearTimeout=="function"?clearTimeout:null,P=typeof setImmediate<"u"?setImmediate:null;function N(B){for(var W=i(m);W!==null;){if(W.callback===null)s(m);else if(W.startTime<=B)s(m),W.sortIndex=W.expirationTime,t(p,W);else break;W=i(m)}}function H(B){if(C=!1,N(B),!b)if(i(p)!==null)b=!0,U||(U=!0,Z());else{var W=i(m);W!==null&&X(H,W.startTime-B)}}var U=!1,L=-1,E=5,O=-1;function V(){return S?!0:!(a.unstable_now()-O<E)}function z(){if(S=!1,U){var B=a.unstable_now();O=B;var W=!0;try{t:{b=!1,C&&(C=!1,R(L),L=-1),y=!0;var J=v;try{e:{for(N(B),g=i(p);g!==null&&!(g.expirationTime>B&&V());){var dt=g.callback;if(typeof dt=="function"){g.callback=null,v=g.priorityLevel;var pt=dt(g.expirationTime<=B);if(B=a.unstable_now(),typeof pt=="function"){g.callback=pt,N(B),W=!0;break e}g===i(p)&&s(p),N(B)}else s(p);g=i(p)}if(g!==null)W=!0;else{var Tt=i(m);Tt!==null&&X(H,Tt.startTime-B),W=!1}}break t}finally{g=null,v=J,y=!1}W=void 0}}finally{W?Z():U=!1}}}var Z;if(typeof P=="function")Z=function(){P(z)};else if(typeof MessageChannel<"u"){var tt=new MessageChannel,ft=tt.port2;tt.port1.onmessage=z,Z=function(){ft.postMessage(null)}}else Z=function(){M(z,0)};function X(B,W){L=M(function(){B(a.unstable_now())},W)}a.unstable_IdlePriority=5,a.unstable_ImmediatePriority=1,a.unstable_LowPriority=4,a.unstable_NormalPriority=3,a.unstable_Profiling=null,a.unstable_UserBlockingPriority=2,a.unstable_cancelCallback=function(B){B.callback=null},a.unstable_forceFrameRate=function(B){0>B||125<B?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):E=0<B?Math.floor(1e3/B):5},a.unstable_getCurrentPriorityLevel=function(){return v},a.unstable_next=function(B){switch(v){case 1:case 2:case 3:var W=3;break;default:W=v}var J=v;v=W;try{return B()}finally{v=J}},a.unstable_requestPaint=function(){S=!0},a.unstable_runWithPriority=function(B,W){switch(B){case 1:case 2:case 3:case 4:case 5:break;default:B=3}var J=v;v=B;try{return W()}finally{v=J}},a.unstable_scheduleCallback=function(B,W,J){var dt=a.unstable_now();switch(typeof J=="object"&&J!==null?(J=J.delay,J=typeof J=="number"&&0<J?dt+J:dt):J=dt,B){case 1:var pt=-1;break;case 2:pt=250;break;case 5:pt=1073741823;break;case 4:pt=1e4;break;default:pt=5e3}return pt=J+pt,B={id:_++,callback:W,priorityLevel:B,startTime:J,expirationTime:pt,sortIndex:-1},J>dt?(B.sortIndex=J,t(m,B),i(p)===null&&B===i(m)&&(C?(R(L),L=-1):C=!0,X(H,J-dt))):(B.sortIndex=pt,t(p,B),b||y||(b=!0,U||(U=!0,Z()))),B},a.unstable_shouldYield=V,a.unstable_wrapCallback=function(B){var W=v;return function(){var J=v;v=W;try{return B.apply(this,arguments)}finally{v=J}}}})(H0)),H0}var AM;function n4(){return AM||(AM=1,B0.exports=e4()),B0.exports}var G0={exports:{}},Yn={};/**
 * @license React
 * react-dom.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var wM;function i4(){if(wM)return Yn;wM=1;var a=qg();function t(_){var g="https://react.dev/errors/"+_;if(1<arguments.length){g+="?args[]="+encodeURIComponent(arguments[1]);for(var v=2;v<arguments.length;v++)g+="&args[]="+encodeURIComponent(arguments[v])}return"Minified React error #"+_+"; visit "+g+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function i(){}var s={d:{f:i,r:function(){throw Error(t(522))},D:i,C:i,L:i,m:i,X:i,S:i,M:i},p:0,findDOMNode:null},l=Symbol.for("react.portal"),c=Symbol.for("react.recoverable"),d=Symbol.for("react.optimistic_key");function h(_,g,v){var y=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:l,key:y==null?null:y===d?d:""+y,children:_,containerInfo:g,implementation:v}}var p=a.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;function m(_,g){if(_==="font")return"";if(typeof g=="string")return g==="use-credentials"?g:""}return Yn.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=s,Yn.browser=function(_){return{$$typeof:c,_reason:_}},Yn.createPortal=function(_,g){var v=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!g||g.nodeType!==1&&g.nodeType!==9&&g.nodeType!==11)throw Error(t(299));return h(_,g,null,v)},Yn.flushSync=function(_){var g=p.T,v=s.p;try{if(p.T=null,s.p=2,_)return _()}finally{p.T=g,s.p=v,s.d.f()}},Yn.preconnect=function(_,g){typeof _=="string"&&(g?(g=g.crossOrigin,g=typeof g=="string"?g==="use-credentials"?g:"":void 0):g=null,s.d.C(_,g))},Yn.prefetchDNS=function(_){typeof _=="string"&&s.d.D(_)},Yn.preinit=function(_,g){if(typeof _=="string"&&g&&typeof g.as=="string"){var v=g.as,y=m(v,g.crossOrigin),b=typeof g.integrity=="string"?g.integrity:void 0,C=typeof g.fetchPriority=="string"?g.fetchPriority:void 0;v==="style"?s.d.S(_,typeof g.precedence=="string"?g.precedence:void 0,{crossOrigin:y,integrity:b,fetchPriority:C}):v==="script"&&s.d.X(_,{crossOrigin:y,integrity:b,fetchPriority:C,nonce:typeof g.nonce=="string"?g.nonce:void 0})}},Yn.preinitModule=function(_,g){if(typeof _=="string")if(typeof g=="object"&&g!==null){if(g.as==null||g.as==="script"){var v=m(g.as,g.crossOrigin);s.d.M(_,{crossOrigin:v,integrity:typeof g.integrity=="string"?g.integrity:void 0,nonce:typeof g.nonce=="string"?g.nonce:void 0,fetchPriority:typeof g.fetchPriority=="string"?g.fetchPriority:void 0})}}else g==null&&s.d.M(_)},Yn.preload=function(_,g){if(typeof _=="string"&&typeof g=="object"&&g!==null&&typeof g.as=="string"){var v=g.as,y=m(v,g.crossOrigin);s.d.L(_,v,{crossOrigin:y,integrity:typeof g.integrity=="string"?g.integrity:void 0,nonce:typeof g.nonce=="string"?g.nonce:void 0,type:typeof g.type=="string"?g.type:void 0,fetchPriority:typeof g.fetchPriority=="string"?g.fetchPriority:void 0,referrerPolicy:typeof g.referrerPolicy=="string"?g.referrerPolicy:void 0,imageSrcSet:typeof g.imageSrcSet=="string"?g.imageSrcSet:void 0,imageSizes:typeof g.imageSizes=="string"?g.imageSizes:void 0,media:typeof g.media=="string"?g.media:void 0})}},Yn.preloadModule=function(_,g){if(typeof _=="string")if(g){var v=m(g.as,g.crossOrigin);s.d.m(_,{as:typeof g.as=="string"&&g.as!=="script"?g.as:void 0,crossOrigin:v,integrity:typeof g.integrity=="string"?g.integrity:void 0,nonce:typeof g.nonce=="string"?g.nonce:void 0,fetchPriority:typeof g.fetchPriority=="string"?g.fetchPriority:void 0})}else s.d.m(_)},Yn.requestFormReset=function(_){s.d.r(_)},Yn.unstable_batchedUpdates=function(_,g){return _(g)},Yn.useFormState=function(_,g,v){return p.H.useFormState(_,g,v)},Yn.useFormStatus=function(){return p.H.useHostTransitionStatus()},Yn.version="19.3.0",Yn}var RM;function a4(){if(RM)return G0.exports;RM=1;function a(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(a)}catch(t){console.error(t)}}return a(),G0.exports=i4(),G0.exports}/**
 * @license React
 * react-dom-client.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var CM;function r4(){if(CM)return Kc;CM=1;var a=n4(),t=qg(),i=a4();function s(e){var n="https://react.dev/errors/"+e;if(1<arguments.length){n+="?args[]="+encodeURIComponent(arguments[1]);for(var r=2;r<arguments.length;r++)n+="&args[]="+encodeURIComponent(arguments[r])}return"Minified React error #"+e+"; visit "+n+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function l(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function c(e){for(var n=e,r=n;r&&!r.alternate;)n=r,(n.flags&4098)!==0&&(e=n.return),r=n.return;for(;n.return;)n=n.return;return n.tag===3?e:null}function d(e){if(e.tag===13){var n=e.memoizedState;if(n===null&&(e=e.alternate,e!==null&&(n=e.memoizedState)),n!==null)return n.dehydrated}return null}function h(e){if(e.tag===31){var n=e.memoizedState;if(n===null&&(e=e.alternate,e!==null&&(n=e.memoizedState)),n!==null)return n.dehydrated}return null}function p(e){if(c(e)!==e)throw Error(s(188))}function m(e){var n=e.alternate;if(!n){if(n=c(e),n===null)throw Error(s(188));return n!==e?null:e}for(var r=e,o=n;;){var u=r.return;if(u===null)break;var f=u.alternate;if(f===null){if(o=u.return,o!==null){r=o;continue}break}if(u.child===f.child){for(f=u.child;f;){if(f===r)return p(u),e;if(f===o)return p(u),n;f=f.sibling}throw Error(s(188))}if(r.return!==o.return)r=u,o=f;else{for(var x=!1,A=u.child;A;){if(A===r){x=!0,r=u,o=f;break}if(A===o){x=!0,o=u,r=f;break}A=A.sibling}if(!x){for(A=f.child;A;){if(A===r){x=!0,r=f,o=u;break}if(A===o){x=!0,o=f,r=u;break}A=A.sibling}if(!x)throw Error(s(189))}}if(r.alternate!==o)throw Error(s(190))}if(r.tag!==3)throw Error(s(188));return r.stateNode.current===r?e:n}function _(e){var n=e.tag;if(n===5||n===26||n===27||n===6)return e;for(e=e.child;e!==null;){if(n=_(e),n!==null)return n;e=e.sibling}return null}function g(e,n,r,o,u,f){for(;e!==null;){if((e.tag===5||e.tag===27||e.tag===6)&&r(e,o,u,f)||(e.tag!==22||e.memoizedState===null)&&(n||e.tag!==5&&e.tag!==27)&&g(e.child,n,r,o,u,f))return!0;e=e.sibling}return!1}function v(e){for(e=e.return;e!==null;){if(e.tag===3||e.tag===5||e.tag===27)return e;e=e.return}return null}function y(e){var n=!1;for(e=e.return;e!==null&&(e.tag===4&&(n=!0),!(e.tag===3||e.tag===5||e.tag===27));)e=e.return;return n}function b(e){var n=[null,null],r=v(e);return r===null||C(n,e,r.child,{foundSelf:!1}),n}function C(e,n,r,o){for(;r!==null;){if(r===n)o.foundSelf=!0;else if(r.tag===5||r.tag===27||r.tag===6){if(o.foundSelf)return e[1]=r,!0;e[0]=r}else if((r.tag!==22||r.memoizedState===null)&&C(e,n,r.child,o))return!0;r=r.sibling}return!1}function S(e){switch(e.tag){case 5:case 27:case 6:return e.stateNode;case 3:return e.stateNode.containerInfo;default:throw Error(s(559))}}var M=null,R=null;function P(e,n,r){return e===r?!0:e===n?(M=e,!0):!1}function N(e,n,r){return e===r?(R=e,!1):e===n?(R!==null&&(M=e),!0):!1}function H(e){if(e===null)return null;do e=e===null?null:e.return;while(e&&e.tag!==5&&e.tag!==27&&e.tag!==3);return e||null}function U(e,n,r){for(var o=0,u=e;u;u=r(u))o++;u=0;for(var f=n;f;f=r(f))u++;for(;0<o-u;)e=r(e),o--;for(;0<u-o;)n=r(n),u--;for(;o--;){if(e===n||n!==null&&e===n.alternate)return e;e=r(e),n=r(n)}return null}var L=Object.assign,E=Symbol.for("react.element"),O=Symbol.for("react.transitional.element"),V=Symbol.for("react.portal"),z=Symbol.for("react.fragment"),Z=Symbol.for("react.strict_mode"),tt=Symbol.for("react.profiler"),ft=Symbol.for("react.consumer"),X=Symbol.for("react.context"),B=Symbol.for("react.forward_ref"),W=Symbol.for("react.suspense"),J=Symbol.for("react.suspense_list"),dt=Symbol.for("react.memo"),pt=Symbol.for("react.lazy"),Tt=Symbol.for("react.activity"),zt=Symbol.for("react.legacy_hidden"),re=Symbol.for("react.memo_cache_sentinel"),F=Symbol.for("react.view_transition"),lt=Symbol.for("react.recoverable"),et=Symbol.iterator;function ht(e){return e===null||typeof e!="object"?null:(e=et&&e[et]||e["@@iterator"],typeof e=="function"?e:null)}var yt=Symbol.for("react.client.reference");function Rt(e){if(e==null)return null;if(typeof e=="function")return e.$$typeof===yt?null:e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case z:return"Fragment";case tt:return"Profiler";case Z:return"StrictMode";case W:return"Suspense";case J:return"SuspenseList";case Tt:return"Activity";case F:return"ViewTransition"}if(typeof e=="object")switch(e.$$typeof){case V:return"Portal";case X:return e.displayName||"Context";case ft:return(e._context.displayName||"Context")+".Consumer";case B:var n=e.render;return e=e.displayName,e||(e=n.displayName||n.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case dt:return n=e.displayName||null,n!==null?n:Rt(e.type)||"Memo";case pt:n=e._payload,e=e._init;try{return Rt(e(n))}catch{}}return null}var Dt=Array.isArray,Mt=t.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,kt=i.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,he={pending:!1,data:null,method:null,action:null},He=[],Ge=-1;function ce(e){return{current:e}}function Re(e){0>Ge||(e.current=He[Ge],He[Ge]=null,Ge--)}function oe(e,n){Ge++,He[Ge]=e.current,e.current=n}var dn=ce(null),Y=ce(null),tn=ce(null),Me=ce(null);function Ve(e,n){switch(oe(tn,n),oe(Y,e),oe(dn,null),n.nodeType){case 9:case 11:e=(e=n.documentElement)&&(e=e.namespaceURI)?Dy(e):0;break;default:if(e=n.tagName,n=n.namespaceURI)n=Dy(n),e=Ny(n,e);else switch(e){case"svg":e=1;break;case"math":e=2;break;default:e=0}}Re(dn),oe(dn,e)}function Ot(){Re(dn),Re(Y),Re(tn)}function on(e){var n=e.memoizedState;n!==null&&(Xo._currentValue=n.memoizedState,oe(Me,e)),n=dn.current;var r=Ny(n,e.type);n!==r&&(oe(Y,e),oe(dn,r))}function D(e){Y.current===e&&(Re(dn),Re(Y)),Me.current===e&&(Re(Me),Xo._currentValue=he)}var T,it;function gt(e){if(T===void 0)try{throw Error()}catch(r){var n=r.stack.trim().match(/\n( *(at )?)/);T=n&&n[1]||"",it=-1<r.stack.indexOf(`
    at`)?" (<anonymous>)":-1<r.stack.indexOf("@")?"@unknown:0:0":""}return`
`+T+e+it}var bt=!1;function wt(e,n){if(!e||bt)return"";bt=!0;var r=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{var o={DetermineComponentFrameRoot:function(){try{if(n){var _t=function(){throw Error()};if(Object.defineProperty(_t.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(_t,[])}catch(Pt){var Q=Pt}Reflect.construct(e,[],_t)}else{try{_t.call()}catch(Pt){Q=Pt}_t=!1;try{var rt=Object.getOwnPropertyDescriptor(e.prototype,"props");Object.defineProperty(e.prototype,"props",{configurable:!0,set:function(){throw Error()}}),_t=!0,new e}finally{_t&&(rt!==void 0?Object.defineProperty(e.prototype,"props",rt):delete e.prototype.props)}}}else{try{throw Error()}catch(Pt){Q=Pt}(_t=e())&&typeof _t.catch=="function"&&_t.catch(function(){})}}catch(Pt){if(Pt&&Q&&typeof Pt.stack=="string")return[Pt.stack,Q.stack]}return[null,null]}};o.DetermineComponentFrameRoot.displayName="DetermineComponentFrameRoot";var u=Object.getOwnPropertyDescriptor(o.DetermineComponentFrameRoot,"name");u&&u.configurable&&Object.defineProperty(o.DetermineComponentFrameRoot,"name",{value:"DetermineComponentFrameRoot"});var f=o.DetermineComponentFrameRoot(),x=f[0],A=f[1];if(x&&A){var I=x.split(`
`),$=A.split(`
`);for(u=o=0;o<I.length&&!I[o].includes("DetermineComponentFrameRoot");)o++;for(;u<$.length&&!$[u].includes("DetermineComponentFrameRoot");)u++;if(o===I.length||u===$.length)for(o=I.length-1,u=$.length-1;1<=o&&0<=u&&I[o]!==$[u];)u--;for(;1<=o&&0<=u;o--,u--)if(I[o]!==$[u]){if(o!==1||u!==1)do if(o--,u--,0>u||I[o]!==$[u]){var ct=`
`+I[o].replace(" at new "," at ");return e.displayName&&ct.includes("<anonymous>")&&(ct=ct.replace("<anonymous>",e.displayName)),ct}while(1<=o&&0<=u);break}}}finally{bt=!1,Error.prepareStackTrace=r}return(r=e?e.displayName||e.name:"")?gt(r):""}function Lt(e,n){switch(e.tag){case 26:case 27:case 5:return gt(e.type);case 16:return gt("Lazy");case 13:return e.child!==n&&n!==null?gt("Suspense Fallback"):gt("Suspense");case 19:return gt("SuspenseList");case 0:case 15:return wt(e.type,!1);case 11:return wt(e.type.render,!1);case 1:return wt(e.type,!0);case 31:return gt("Activity");case 30:return gt("ViewTransition");default:return""}}function mt(e){try{var n="",r=null;do n+=Lt(e,r),r=e,e=e.return;while(e);return n}catch(o){return`
Error generating stack: `+o.message+`
`+o.stack}}var St=Object.prototype.hasOwnProperty,Bt=a.unstable_scheduleCallback,Xt=a.unstable_cancelCallback,Nt=a.unstable_shouldYield,Ct=a.unstable_requestPaint,ne=a.unstable_now,ve=a.unstable_getCurrentPriorityLevel,Le=a.unstable_ImmediatePriority,q=a.unstable_UserBlockingPriority,At=a.unstable_NormalPriority,xt=a.unstable_LowPriority,Vt=a.unstable_IdlePriority,Ut=a.log,Et=a.unstable_setDisableYieldValue,Zt=null,ae=null;function We(e){if(typeof Ut=="function"&&Et(e),ae&&typeof ae.setStrictMode=="function")try{ae.setStrictMode(Zt,e)}catch{}}var xe=Math.clz32?Math.clz32:Bl,ta=Math.log,zi=Math.LN2;function Bl(e){return e>>>=0,e===0?32:31-(ta(e)/zi|0)|0}var ro=256,ds=262144,hs=4194304;function ei(e){var n=e&42;if(n!==0)return n;switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:return 64;case 128:return 128;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:return e&-e;case 262144:case 524288:case 1048576:case 2097152:return e&3932160;case 4194304:case 8388608:case 16777216:case 33554432:return e&62914560;case 67108864:return 67108864;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 0;default:return e}}function Sr(e,n,r){var o=e.pendingLanes;if(o===0)return 0;var u=0,f=e.suspendedLanes,x=e.pingedLanes;e=e.warmLanes;var A=o&134217727;return A!==0?(o=A&~f,o!==0?u=ei(o):(x&=A,x!==0?u=ei(x):r||(r=A&~e,r!==0&&(u=ei(r))))):(A=o&~f,A!==0?u=ei(A):x!==0?u=ei(x):r||(r=o&~e,r!==0&&(u=ei(r)))),u===0?0:n!==0&&n!==u&&(n&f)===0&&(f=u&-u,r=n&-n,f>=r||f===32&&(r&4194048)!==0)?n:u}function Mr(e,n){return(e.pendingLanes&~(e.suspendedLanes&~e.pingedLanes)&n)===0}function Hl(e,n){(n&8)!==0&&(n|=n&32);var r=e.entangledLanes;if(r!==0)for(e=e.entanglements,r&=n;0<r;){var o=31-xe(r),u=1<<o;n|=e[o],r&=~u}return n}function so(e,n){switch(e){case 1:case 2:case 4:case 8:case 64:return n+250;case 16:case 32:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return n+5e3;case 4194304:case 8388608:case 16777216:case 33554432:return-1;case 67108864:case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function Gl(){var e=hs;return hs<<=1,(hs&62914560)===0&&(hs=4194304),e}function br(e){for(var n=[],r=0;31>r;r++)n.push(e);return n}function Er(e,n){e.pendingLanes|=n,n!==268435456&&(e.suspendedLanes=0,e.pingedLanes=0,e.warmLanes=0)}function vu(e,n,r,o,u,f){var x=e.pendingLanes;e.pendingLanes=r,e.suspendedLanes=0,e.pingedLanes=0,e.warmLanes=0,e.expiredLanes&=r,e.entangledLanes&=r,e.errorRecoveryDisabledLanes&=r,e.shellSuspendCounter=0;var A=e.entanglements,I=e.expirationTimes,$=e.hiddenUpdates;for(r=x&~r;0<r;){var ct=31-xe(r),_t=1<<ct;A[ct]=0,I[ct]=-1;var Q=$[ct];if(Q!==null)for($[ct]=null,ct=0;ct<Q.length;ct++){var rt=Q[ct];rt!==null&&(rt.lane&=-536870913)}r&=~_t}o!==0&&_u(e,o,0),f!==0&&u===0&&e.tag!==0&&(e.suspendedLanes|=f&~(x&~n))}function _u(e,n,r){e.pendingLanes|=n,e.suspendedLanes&=~n;var o=31-xe(n);e.entangledLanes|=n,e.entanglements[o]=e.entanglements[o]|1073741824|r&261930}function xu(e,n){var r=e.entangledLanes|=n;for(e=e.entanglements;r;){var o=31-xe(r),u=1<<o;u&n|e[o]&n&&(e[o]|=n),r&=~u}}function yu(e,n){var r=n&-n;return r=(r&42)!==0?1:Vl(r),(r&(e.suspendedLanes|n))!==0?0:r}function Vl(e){switch(e){case 2:e=1;break;case 8:e=4;break;case 32:e=16;break;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:e=128;break;case 268435456:e=134217728;break;default:e=0}return e}function kl(e){return e&=-e,2<e?8<e?(e&134217727)!==0?32:268435456:8:2}function Su(){var e=kt.p;return e!==0?e:(e=window.event,e===void 0?32:pS(e.type))}function Mu(e,n){var r=kt.p;try{return kt.p=e,n()}finally{kt.p=r}}var w=Math.random().toString(36).slice(2),j="__reactFiber$"+w,st="__reactProps$"+w,at="__reactContainer$"+w,ot="__reactEvents$"+w,Ht="__reactListeners$"+w,Wt="__reactHandles$"+w,Ft="__reactResources$"+w,Yt="__reactMarker$"+w,$t="__reactLoad$"+w;function ue(e){delete e[j],delete e[st],delete e[Ht],delete e[Wt]}function fe(e){var n;if(n=e[j])return n;for(var r=e.parentNode;r;){if(n=r[at]||r[j]){if(r=n.alternate,n.child!==null||r!==null&&r.child!==null)for(e=Yy(e);e!==null;){if(r=e[j])return r;e=Yy(e)}return n}e=r,r=e.parentNode}return null}function Kt(e){if(e=e[j]||e[at]){var n=e.tag;if(n===5||n===6||n===13||n===31||n===26||n===27||n===3)return e}return null}function Ie(e){var n=e.tag;if(n===5||n===26||n===27||n===6)return e.stateNode;throw Error(s(33))}function en(e){var n=e[Ft];return n||(n=e[Ft]={hoistableStyles:new Map,hoistableScripts:new Map}),n}function be(e){e[Yt]=!0}function je(e){e[$t]=void 0}var Un=new Set,qt={};function yn(e,n){Ee(e,n),Ee(e+"Capture",n)}function Ee(e,n){for(qt[e]=n,e=0;e<n.length;e++)Un.add(n[e])}var fi=RegExp("^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"),Mi={},ea={};function Tr(e){return St.call(ea,e)?!0:St.call(Mi,e)?!1:fi.test(e)?ea[e]=!0:(Mi[e]=!0,!1)}var Jt=!1;function hn(){var e=Jt;return Jt=!1,e}function bi(e,n,r){if(Tr(n))if(r===null)e.removeAttribute(n);else{switch(typeof r){case"undefined":case"function":case"symbol":e.removeAttribute(n);return;case"boolean":var o=n.toLowerCase().slice(0,5);if(o!=="data-"&&o!=="aria-"){e.removeAttribute(n);return}}e.setAttribute(n,r)}}function ke(e,n,r){if(r===null)e.removeAttribute(n);else{switch(typeof r){case"undefined":case"function":case"symbol":case"boolean":e.removeAttribute(n);return}e.setAttribute(n,r)}}function Fn(e,n,r,o){if(o===null)e.removeAttribute(r);else{switch(typeof o){case"undefined":case"function":case"symbol":case"boolean":e.removeAttribute(r);return}e.setAttributeNS(n,r,o)}}function En(e){switch(typeof e){case"bigint":case"boolean":case"number":case"string":case"undefined":return e;case"object":return e;default:return""}}function Xl(e){var n=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(n==="checkbox"||n==="radio")}function kE(e,n,r){var o=Object.getOwnPropertyDescriptor(e.constructor.prototype,n);if(!e.hasOwnProperty(n)&&typeof o<"u"&&typeof o.get=="function"&&typeof o.set=="function"){var u=o.get,f=o.set;return Object.defineProperty(e,n,{configurable:!0,get:function(){return u.call(this)},set:function(x){r=""+x,f.call(this,x)}}),Object.defineProperty(e,n,{enumerable:o.enumerable}),{getValue:function(){return r},setValue:function(x){r=""+x},stopTracking:function(){e._valueTracker=null,delete e[n]}}}}function rh(e){if(!e._valueTracker){var n=Xl(e)?"checked":"value";e._valueTracker=kE(e,n,""+e[n])}}function _v(e){if(!e)return!1;var n=e._valueTracker;if(!n)return!0;var r=n.getValue(),o="";return e&&(o=Xl(e)?e.checked?"true":"false":e.value),e=o,e!==r?(n.setValue(e),!0):!1}var XE=/[\n"\\]/g;function Ii(e){return e.replace(XE,function(n){return"\\"+n.charCodeAt(0).toString(16)+" "})}function sh(e,n,r,o,u,f,x,A){e.name="",x!=null&&typeof x!="function"&&typeof x!="symbol"&&typeof x!="boolean"?e.type=x:e.removeAttribute("type"),n!=null?x==="number"?(n===0&&e.value===""||e.value!=n)&&(e.value=""+En(n)):e.value!==""+En(n)&&(e.value=""+En(n)):x!=="submit"&&x!=="reset"||e.removeAttribute("value"),n!=null?x==="number"&&e.value==n?oh(e,En(e.value)):oh(e,En(n)):r!=null?oh(e,En(r)):o!=null&&e.removeAttribute("value"),u==null&&f!=null&&(e.defaultChecked=!!f),u!=null&&(e.checked=u&&typeof u!="function"&&typeof u!="symbol"),A!=null&&typeof A!="function"&&typeof A!="symbol"&&typeof A!="boolean"?e.name=""+En(A):e.removeAttribute("name")}function xv(e,n,r,o,u,f,x,A){if(f!=null&&typeof f!="function"&&typeof f!="symbol"&&typeof f!="boolean"&&(e.type=f),n!=null||r!=null){if(!(f!=="submit"&&f!=="reset"||n!=null)){rh(e);return}r=r!=null?""+En(r):"",n=n!=null?""+En(n):r,A||n===e.value||(e.value=n),e.defaultValue=n}o=o??u,o=typeof o!="function"&&typeof o!="symbol"&&!!o,e.checked=A?e.checked:!!o,e.defaultChecked=!!o,x!=null&&typeof x!="function"&&typeof x!="symbol"&&typeof x!="boolean"&&(e.name=x),rh(e)}function oh(e,n){e.defaultValue!==""+n&&(e.defaultValue=""+n)}function oo(e,n,r,o){if(e=e.options,n){n={};for(var u=0;u<r.length;u++)n["$"+r[u]]=!0;for(r=0;r<e.length;r++)u=n.hasOwnProperty("$"+e[r].value),e[r].selected!==u&&(e[r].selected=u),u&&o&&(e[r].defaultSelected=!0)}else{for(r=""+En(r),n=null,u=0;u<e.length;u++){if(e[u].value===r){e[u].selected=!0,o&&(e[u].defaultSelected=!0);return}n!==null||e[u].disabled||(n=e[u])}n!==null&&(n.selected=!0)}}function yv(e,n,r){if(n!=null&&(n=""+En(n),n!==e.value&&(e.value=n),r==null)){e.defaultValue!==n&&(e.defaultValue=n);return}e.defaultValue=r!=null?""+En(r):""}function Sv(e,n,r,o){if(n==null){if(o!=null){if(r!=null)throw Error(s(92));if(Dt(o)){if(1<o.length)throw Error(s(93));o=o[0]}r=o}r==null&&(r=""),n=r}r=En(n),e.defaultValue=r,o=e.textContent,o===r&&o!==""&&o!==null&&(e.value=o),rh(e)}function lo(e,n){if(n){var r=e.firstChild;if(r&&r===e.lastChild&&r.nodeType===3){r.nodeValue=n;return}}e.textContent=n}var qE=new Set("animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(" "));function Mv(e,n,r){var o=n.indexOf("--")===0;r==null||typeof r=="boolean"||r===""?o?e.setProperty(n,""):n==="float"?e.cssFloat="":e[n]="":o?e.setProperty(n,r):typeof r!="number"||r===0||qE.has(n)?n==="float"?e.cssFloat=r:e[n]=(""+r).trim():e[n]=r+"px"}function bv(e,n,r){if(n!=null&&typeof n!="object")throw Error(s(62));if(e=e.style,r!=null){for(var o in r)!r.hasOwnProperty(o)||n!=null&&n.hasOwnProperty(o)||(o.indexOf("--")===0?e.setProperty(o,""):o==="float"?e.cssFloat="":e[o]="",Jt=!0);for(var u in n)o=n[u],n.hasOwnProperty(u)&&r[u]!==o&&(Mv(e,u,o),Jt=!0)}else for(var f in n)n.hasOwnProperty(f)&&Mv(e,f,n[f])}function lh(e){if(e.indexOf("-")===-1)return!1;switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var WE=new Map([["acceptCharset","accept-charset"],["htmlFor","for"],["httpEquiv","http-equiv"],["crossOrigin","crossorigin"],["accentHeight","accent-height"],["alignmentBaseline","alignment-baseline"],["arabicForm","arabic-form"],["baselineShift","baseline-shift"],["capHeight","cap-height"],["clipPath","clip-path"],["clipRule","clip-rule"],["colorInterpolation","color-interpolation"],["colorInterpolationFilters","color-interpolation-filters"],["colorProfile","color-profile"],["colorRendering","color-rendering"],["dominantBaseline","dominant-baseline"],["enableBackground","enable-background"],["fillOpacity","fill-opacity"],["fillRule","fill-rule"],["floodColor","flood-color"],["floodOpacity","flood-opacity"],["fontFamily","font-family"],["fontSize","font-size"],["fontSizeAdjust","font-size-adjust"],["fontStretch","font-stretch"],["fontStyle","font-style"],["fontVariant","font-variant"],["fontWeight","font-weight"],["glyphName","glyph-name"],["glyphOrientationHorizontal","glyph-orientation-horizontal"],["glyphOrientationVertical","glyph-orientation-vertical"],["horizAdvX","horiz-adv-x"],["horizOriginX","horiz-origin-x"],["imageRendering","image-rendering"],["letterSpacing","letter-spacing"],["lightingColor","lighting-color"],["markerEnd","marker-end"],["markerMid","marker-mid"],["markerStart","marker-start"],["maskType","mask-type"],["overlinePosition","overline-position"],["overlineThickness","overline-thickness"],["paintOrder","paint-order"],["panose-1","panose-1"],["pointerEvents","pointer-events"],["renderingIntent","rendering-intent"],["shapeRendering","shape-rendering"],["stopColor","stop-color"],["stopOpacity","stop-opacity"],["strikethroughPosition","strikethrough-position"],["strikethroughThickness","strikethrough-thickness"],["strokeDasharray","stroke-dasharray"],["strokeDashoffset","stroke-dashoffset"],["strokeLinecap","stroke-linecap"],["strokeLinejoin","stroke-linejoin"],["strokeMiterlimit","stroke-miterlimit"],["strokeOpacity","stroke-opacity"],["strokeWidth","stroke-width"],["textAnchor","text-anchor"],["textDecoration","text-decoration"],["textRendering","text-rendering"],["transformOrigin","transform-origin"],["underlinePosition","underline-position"],["underlineThickness","underline-thickness"],["unicodeBidi","unicode-bidi"],["unicodeRange","unicode-range"],["unitsPerEm","units-per-em"],["vAlphabetic","v-alphabetic"],["vHanging","v-hanging"],["vIdeographic","v-ideographic"],["vMathematical","v-mathematical"],["vectorEffect","vector-effect"],["vertAdvY","vert-adv-y"],["vertOriginX","vert-origin-x"],["vertOriginY","vert-origin-y"],["wordSpacing","word-spacing"],["writingMode","writing-mode"],["xmlnsXlink","xmlns:xlink"],["xHeight","x-height"]]),jE=/^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;function bu(e){return jE.test(""+e)?"javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')":e}function _a(){}var ch=null;function uh(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var co=null,uo=null;function Ev(e){var n=Kt(e);if(n&&(e=n.stateNode)){var r=e[st]||null;t:switch(e=n.stateNode,n.type){case"input":if(sh(e,r.value,r.defaultValue,r.defaultValue,r.checked,r.defaultChecked,r.type,r.name),n=r.name,r.type==="radio"&&n!=null){for(r=e;r.parentNode;)r=r.parentNode;for(r=r.querySelectorAll('input[name="'+Ii(""+n)+'"][type="radio"]'),n=0;n<r.length;n++){var o=r[n];if(o!==e&&o.form===e.form){var u=o[st]||null;if(!u)throw Error(s(90));sh(o,u.value,u.defaultValue,u.defaultValue,u.checked,u.defaultChecked,u.type,u.name)}}for(n=0;n<r.length;n++)o=r[n],o.form===e.form&&_v(o)}break t;case"textarea":yv(e,r.value,r.defaultValue);break t;case"select":n=r.value,n!=null&&oo(e,!!r.multiple,n,!1)}}}var fh=!1;function Tv(e,n,r){if(fh)return e(n,r);fh=!0;try{var o=e(n);return o}finally{if(fh=!1,(co!==null||uo!==null)&&(Ef(),co&&(n=co,e=uo,uo=co=null,Ev(n),e)))for(n=0;n<e.length;n++)Ev(e[n])}}function ql(e,n){var r=e.stateNode;if(r===null)return null;var o=r[st]||null;if(o===null)return null;r=o[n];t:switch(n){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(o=!o.disabled)||(e=e.type,o=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!o;break t;default:e=!1}if(e)return null;if(r&&typeof r!="function")throw Error(s(231,n,typeof r));return r}var Wa=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),dh=!1;if(Wa)try{var Wl={};Object.defineProperty(Wl,"passive",{get:function(){dh=!0}}),window.addEventListener("test",Wl,Wl),window.removeEventListener("test",Wl,Wl)}catch{dh=!1}var Ar=null,hh=null,Eu=null;function Av(){if(Eu)return Eu;var e,n=hh,r=n.length,o,u="value"in Ar?Ar.value:Ar.textContent,f=u.length;for(e=0;e<r&&n[e]===u[e];e++);var x=r-e;for(o=1;o<=x&&n[r-o]===u[f-o];o++);return Eu=u.slice(e,1<o?1-o:void 0)}function Tu(e){var n=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&n===13&&(e=13)):e=n,e===10&&(e=13),32<=e||e===13?e:0}function Au(){return!0}function wv(){return!1}function ni(e){function n(r,o,u,f,x){this._reactName=r,this._targetInst=u,this.type=o,this.nativeEvent=f,this.target=x,this.currentTarget=null;for(var A in e)e.hasOwnProperty(A)&&(r=e[A],this[A]=r?r(f):f[A]);return this.isDefaultPrevented=(f.defaultPrevented!=null?f.defaultPrevented:f.returnValue===!1)?Au:wv,this.isPropagationStopped=wv,this}return L(n.prototype,{preventDefault:function(){this.defaultPrevented=!0;var r=this.nativeEvent;r&&(r.preventDefault?r.preventDefault():typeof r.returnValue!="unknown"&&(r.returnValue=!1),this.isDefaultPrevented=Au)},stopPropagation:function(){var r=this.nativeEvent;r&&(r.stopPropagation?r.stopPropagation():typeof r.cancelBubble!="unknown"&&(r.cancelBubble=!0),this.isPropagationStopped=Au)},persist:function(){},isPersistent:Au}),n}var wr={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},wu=ni(wr),jl=L({},wr,{view:0,detail:0}),YE=ni(jl),ph,mh,Yl,Ru=L({},jl,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:vh,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==Yl&&(Yl&&e.type==="mousemove"?(ph=e.screenX-Yl.screenX,mh=e.screenY-Yl.screenY):mh=ph=0,Yl=e),ph)},movementY:function(e){return"movementY"in e?e.movementY:mh}}),Rv=ni(Ru),ZE=L({},Ru,{dataTransfer:0}),QE=ni(ZE),KE=L({},jl,{relatedTarget:0}),gh=ni(KE),$E=L({},wr,{animationName:0,elapsedTime:0,pseudoElement:0}),JE=ni($E),tT=L({},wr,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),eT=ni(tT),nT=L({},wr,{data:0}),Cv=ni(nT),iT={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},aT={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},rT={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function sT(e){var n=this.nativeEvent;return n.getModifierState?n.getModifierState(e):(e=rT[e])?!!n[e]:!1}function vh(){return sT}var oT=L({},jl,{key:function(e){if(e.key){var n=iT[e.key]||e.key;if(n!=="Unidentified")return n}return e.type==="keypress"?(e=Tu(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?aT[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:vh,charCode:function(e){return e.type==="keypress"?Tu(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?Tu(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),lT=ni(oT),cT=L({},Ru,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),Dv=ni(cT),uT=L({},wr,{submitter:0}),fT=ni(uT),dT=L({},jl,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:vh}),hT=ni(dT),pT=L({},wr,{propertyName:0,elapsedTime:0,pseudoElement:0}),mT=ni(pT),gT=L({},Ru,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),vT=ni(gT),_T=L({},wr,{newState:0,oldState:0,source:0}),xT=ni(_T),yT=[9,13,27,32],_h=Wa&&"CompositionEvent"in window,Zl=null;Wa&&"documentMode"in document&&(Zl=document.documentMode);var ST=Wa&&"TextEvent"in window&&!Zl,Nv=Wa&&(!_h||Zl&&8<Zl&&11>=Zl),Uv=" ",Lv=!1;function Ov(e,n){switch(e){case"keyup":return yT.indexOf(n.keyCode)!==-1;case"keydown":return n.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function Pv(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var fo=!1;function MT(e,n){switch(e){case"compositionend":return Pv(n);case"keypress":return n.which!==32?null:(Lv=!0,Uv);case"textInput":return e=n.data,e===Uv&&Lv?null:e;default:return null}}function bT(e,n){if(fo)return e==="compositionend"||!_h&&Ov(e,n)?(e=Av(),Eu=hh=Ar=null,fo=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(n.ctrlKey||n.altKey||n.metaKey)||n.ctrlKey&&n.altKey){if(n.char&&1<n.char.length)return n.char;if(n.which)return String.fromCharCode(n.which)}return null;case"compositionend":return Nv&&n.locale!=="ko"?null:n.data;default:return null}}var ET={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function zv(e){var n=e&&e.nodeName&&e.nodeName.toLowerCase();return n==="input"?!!ET[e.type]:n==="textarea"}function Iv(e,n,r,o){co?uo?uo.push(o):uo=[o]:co=o,n=Df(n,"onChange"),0<n.length&&(r=new wu("onChange","change",null,r,o),e.push({event:r,listeners:n}))}var Ql=null,Kl=null;function TT(e){Ey(e,0)}function Cu(e){var n=Ie(e);if(_v(n))return e}function Fv(e,n){if(e==="change")return n}var Bv=!1;if(Wa){var xh;if(Wa){var yh="oninput"in document;if(!yh){var Hv=document.createElement("div");Hv.setAttribute("oninput","return;"),yh=typeof Hv.oninput=="function"}xh=yh}else xh=!1;Bv=xh&&(!document.documentMode||9<document.documentMode)}function Gv(){Ql&&(Ql.detachEvent("onpropertychange",Vv),Kl=Ql=null)}function Vv(e){if(e.propertyName==="value"&&Cu(Kl)){var n=[];Iv(n,Kl,e,uh(e)),Tv(TT,n)}}function AT(e,n,r){e==="focusin"?(Gv(),Ql=n,Kl=r,Ql.attachEvent("onpropertychange",Vv)):e==="focusout"&&Gv()}function wT(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return Cu(Kl)}function RT(e,n){if(e==="click")return Cu(n)}function CT(e,n){if(e==="input"||e==="change")return Cu(n)}function DT(e,n){return e===n&&(e!==0||1/e===1/n)||e!==e&&n!==n}var Ei=typeof Object.is=="function"?Object.is:DT;function $l(e,n){if(Ei(e,n))return!0;if(typeof e!="object"||e===null||typeof n!="object"||n===null)return!1;var r=Object.keys(e),o=Object.keys(n);if(r.length!==o.length)return!1;for(o=0;o<r.length;o++){var u=r[o];if(!St.call(n,u)||!Ei(e[u],n[u]))return!1}return!0}function Sh(e){if(e=e||(typeof document<"u"?document:void 0),typeof e>"u")return null;try{return e.activeElement||e.body}catch{return e.body}}function kv(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function Xv(e,n){var r=kv(e);e=0;for(var o;r;){if(r.nodeType===3){if(o=e+r.textContent.length,e<=n&&o>=n)return{node:r,offset:n-e};e=o}t:{for(;r;){if(r.nextSibling){r=r.nextSibling;break t}r=r.parentNode}r=void 0}r=kv(r)}}function qv(e,n){return e&&n?e===n?!0:e&&e.nodeType===3?!1:n&&n.nodeType===3?qv(e,n.parentNode):"contains"in e?e.contains(n):e.compareDocumentPosition?!!(e.compareDocumentPosition(n)&16):!1:!1}function Wv(e){e=e!=null&&e.ownerDocument!=null&&e.ownerDocument.defaultView!=null?e.ownerDocument.defaultView:window;for(var n=Sh(e.document);n instanceof e.HTMLIFrameElement;){try{var r=typeof n.contentWindow.location.href=="string"}catch{r=!1}if(r)e=n.contentWindow;else break;n=Sh(e.document)}return n}function Mh(e){var n=e&&e.nodeName&&e.nodeName.toLowerCase();return n&&(n==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||n==="textarea"||e.contentEditable==="true")}var NT=Wa&&"documentMode"in document&&11>=document.documentMode,ho=null,bh=null,Jl=null,Eh=!1;function jv(e,n,r){var o=r.window===r?r.document:r.nodeType===9?r:r.ownerDocument;Eh||ho==null||ho!==Sh(o)||(o=ho,"selectionStart"in o&&Mh(o)?o={start:o.selectionStart,end:o.selectionEnd}:(o=(o.ownerDocument&&o.ownerDocument.defaultView||window).getSelection(),o={anchorNode:o.anchorNode,anchorOffset:o.anchorOffset,focusNode:o.focusNode,focusOffset:o.focusOffset}),Jl&&$l(Jl,o)||(Jl=o,o=Df(bh,"onSelect"),0<o.length&&(n=new wu("onSelect","select",null,n,r),e.push({event:n,listeners:o}),n.target=ho)))}function ps(e,n){var r={};return r[e.toLowerCase()]=n.toLowerCase(),r["Webkit"+e]="webkit"+n,r["Moz"+e]="moz"+n,r}var po={animationend:ps("Animation","AnimationEnd"),animationiteration:ps("Animation","AnimationIteration"),animationstart:ps("Animation","AnimationStart"),transitionrun:ps("Transition","TransitionRun"),transitionstart:ps("Transition","TransitionStart"),transitioncancel:ps("Transition","TransitionCancel"),transitionend:ps("Transition","TransitionEnd")},Th={},Yv={};Wa&&(Yv=document.createElement("div").style,"AnimationEvent"in window||(delete po.animationend.animation,delete po.animationiteration.animation,delete po.animationstart.animation),"TransitionEvent"in window||delete po.transitionend.transition);function ms(e){if(Th[e])return Th[e];if(!po[e])return e;var n=po[e],r;for(r in n)if(n.hasOwnProperty(r)&&r in Yv)return Th[e]=n[r];return e}var Zv=ms("animationend"),Qv=ms("animationiteration"),Kv=ms("animationstart"),UT=ms("transitionrun"),LT=ms("transitionstart"),OT=ms("transitioncancel"),$v=ms("transitionend"),Jv=new Map,Ah="abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error fullscreenChange fullscreenError gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");Ah.push("scrollEnd");function na(e,n){Jv.set(e,n),yn(n,[e])}var PT=0;function ja(e,n){if(e.name!=null&&e.name!=="auto")return e.name;if(n.autoName!==null)return n.autoName;e=sa.identifierPrefix;var r=PT++;return e="_"+e+"t_"+r.toString(32)+"_",n.autoName=e}function t_(e){if(e==null||typeof e=="string")return e;var n=null,r=Oo;if(r!==null)for(var o=0;o<r.length;o++){var u=e[r[o]];if(u!=null){if(u==="none")return"none";n=n==null?u:n+(" "+u)}}return n??e.default}function Ya(e,n){return e=t_(e),n=t_(n),n==null?e==="auto"?null:e:n==="auto"?null:n}var Du=typeof reportError=="function"?reportError:function(e){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var n=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof e=="object"&&e!==null&&typeof e.message=="string"?String(e.message):String(e),error:e});if(!window.dispatchEvent(n))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",e);return}console.error(e)},Fi=[],mo=0,wh=0;function Nu(){for(var e=mo,n=wh=mo=0;n<e;){var r=Fi[n];Fi[n++]=null;var o=Fi[n];Fi[n++]=null;var u=Fi[n];Fi[n++]=null;var f=Fi[n];if(Fi[n++]=null,o!==null&&u!==null){var x=o.pending;x===null?u.next=u:(u.next=x.next,x.next=u),o.pending=u}f!==0&&e_(r,u,f)}}function Uu(e,n,r,o){Fi[mo++]=e,Fi[mo++]=n,Fi[mo++]=r,Fi[mo++]=o,wh|=o,e.lanes|=o,e=e.alternate,e!==null&&(e.lanes|=o)}function Rh(e,n,r,o){return Uu(e,n,r,o),Lu(e)}function gs(e,n){return Uu(e,null,null,n),Lu(e)}function e_(e,n,r){e.lanes|=r;var o=e.alternate;o!==null&&(o.lanes|=r);for(var u=!1,f=e.return;f!==null;)f.childLanes|=r,o=f.alternate,o!==null&&(o.childLanes|=r),f.tag===22&&(e=f.stateNode,e===null||e._visibility&1||(u=!0)),e=f,f=f.return;return e.tag===3?(f=e.stateNode,u&&n!==null&&(u=31-xe(r),e=f.hiddenUpdates,o=e[u],o===null?e[u]=[n]:o.push(n),n.lane=r|536870912),f):null}function Lu(e){if(50<Sc)throw Sc=0,bf=null,Error(s(185));for(var n=e.return;n!==null;)e=n,n=e.return;return e.tag===3?e.stateNode:null}var go={};function zT(e,n,r,o){this.tag=e,this.key=r,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.refCleanup=this.ref=null,this.pendingProps=n,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=o,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function di(e,n,r,o){return new zT(e,n,r,o)}function Ch(e){return e=e.prototype,!(!e||!e.isReactComponent)}function Za(e,n){var r=e.alternate;return r===null?(r=di(e.tag,n,e.key,e.mode),r.elementType=e.elementType,r.type=e.type,r.stateNode=e.stateNode,r.alternate=e,e.alternate=r):(r.pendingProps=n,r.type=e.type,r.flags=0,r.subtreeFlags=0,r.deletions=null),r.flags=e.flags&1206910976,r.childLanes=e.childLanes,r.lanes=e.lanes,r.child=e.child,r.memoizedProps=e.memoizedProps,r.memoizedState=e.memoizedState,r.updateQueue=e.updateQueue,n=e.dependencies,r.dependencies=n===null?null:{lanes:n.lanes,firstContext:n.firstContext},r.sibling=e.sibling,r.index=e.index,r.ref=e.ref,r.refCleanup=e.refCleanup,r}function n_(e,n){e.flags&=1206910978;var r=e.alternate;return r===null?(e.childLanes=0,e.lanes=n,e.child=null,e.subtreeFlags=0,e.memoizedProps=null,e.memoizedState=null,e.updateQueue=null,e.dependencies=null,e.stateNode=null):(e.childLanes=r.childLanes,e.lanes=r.lanes,e.child=r.child,e.subtreeFlags=0,e.deletions=null,e.memoizedProps=r.memoizedProps,e.memoizedState=r.memoizedState,e.updateQueue=r.updateQueue,e.type=r.type,n=r.dependencies,e.dependencies=n===null?null:{lanes:n.lanes,firstContext:n.firstContext}),e}function Ou(e,n,r,o,u,f){var x=0;if(o=e,typeof o=="function")Ch(o)&&(x=1);else if(typeof o=="string")x=uw(e,r,dn.current)?26:e==="html"||e==="head"||e==="body"?27:5;else t:switch(o){case Tt:return e=di(31,r,n,u),e.elementType=Tt,e.lanes=f,e;case z:return vs(r.children,u,f,n);case Z:x=8,u|=24;break;case tt:return e=di(12,r,n,u|2),e.elementType=tt,e.lanes=f,e;case W:return e=di(13,r,n,u),e.elementType=W,e.lanes=f,e;case J:return e=di(19,r,n,u),e.elementType=J,e.lanes=f,e;case zt:case F:return e=u|32,e=di(30,r,n,e),e.elementType=F,e.lanes=f,e.stateNode={autoName:null,paired:null,clones:null,ref:null},e;default:if(typeof o=="object"&&o!==null)switch(o.$$typeof){case X:x=10;break t;case ft:x=9;break t;case B:x=11;break t;case dt:x=14;break t;case pt:x=16,o=null;break t}x=29,r=Error(s(130,e===null?"null":typeof e,"")),o=null}return n=di(x,r,n,u),n.elementType=e,n.type=o,n.lanes=f,n}function vs(e,n,r,o){return e=di(7,e,o,n),e.lanes=r,e}function Dh(e,n,r){return e=di(6,e,null,n),e.lanes=r,e}function i_(e){var n=di(18,null,null,0);return n.stateNode=e,n}function Nh(e,n,r){return n=di(4,e.children!==null?e.children:[],e.key,n),n.lanes=r,n.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},n}var a_=new WeakMap;function Bi(e,n){if(typeof e=="object"&&e!==null){var r=a_.get(e);return r!==void 0?r:(n={value:e,source:n,stack:mt(n)},a_.set(e,n),n)}return{value:e,source:n,stack:mt(n)}}var vo=[],_o=0,Pu=null,tc=0,Hi=[],Gi=0,Rr=null,xa=1,ya="";function Qa(e,n){vo[_o++]=tc,vo[_o++]=Pu,Pu=e,tc=n}function r_(e,n,r){Hi[Gi++]=xa,Hi[Gi++]=ya,Hi[Gi++]=Rr,Rr=e;var o=xa;e=ya;var u=32-xe(o)-1;o&=~(1<<u),r+=1;var f=32-xe(n)+u;if(30<f){var x=u-u%5;f=(o&(1<<x)-1).toString(32),o>>=x,u-=x,xa=1<<32-xe(n)+u|r<<u|o,ya=f+e}else xa=1<<f|r<<u|o,ya=e}function zu(e){e.return!==null&&(Qa(e,1),r_(e,1,0))}function Uh(e){for(;e===Pu;)Pu=vo[--_o],vo[_o]=null,tc=vo[--_o],vo[_o]=null;for(;e===Rr;)Rr=Hi[--Gi],Hi[Gi]=null,ya=Hi[--Gi],Hi[Gi]=null,xa=Hi[--Gi],Hi[Gi]=null}function s_(e,n){Hi[Gi++]=xa,Hi[Gi++]=ya,Hi[Gi++]=Rr,xa=n.id,ya=n.overflow,Rr=e}var Bn=null,ln=null,we=!1,Cr=null,Vi=!1,Lh=Error(s(519));function Dr(e){var n=Error(s(418,1<arguments.length&&arguments[1]!==void 0&&arguments[1]?"text":"HTML",""));throw ec(Bi(n,e)),Lh}function o_(e){var n=e.stateNode,r=e.type,o=e.memoizedProps;switch(n[j]=e,n[st]=o,r){case"dialog":De("cancel",n),De("close",n);break;case"iframe":case"object":case"embed":De("load",n);break;case"video":case"audio":for(r=0;r<bc.length;r++)De(bc[r],n);break;case"source":De("error",n);break;case"img":case"image":case"link":De("error",n),De("load",n);break;case"details":De("toggle",n);break;case"input":De("invalid",n),xv(n,o.value,o.defaultValue,o.checked,o.defaultChecked,o.type,o.name,!0);break;case"select":De("invalid",n);break;case"textarea":De("invalid",n),Sv(n,o.value,o.defaultValue,o.children)}r=o.children,typeof r!="string"&&typeof r!="number"&&typeof r!="bigint"||n.textContent===""+r||o.suppressHydrationWarning===!0||Ry(n.textContent,r)?(o.popover!=null&&(De("beforetoggle",n),De("toggle",n)),o.onScroll!=null&&De("scroll",n),o.onScrollEnd!=null&&De("scrollend",n),o.onClick!=null&&(n.onclick=_a),n=!0):n=!1,n||Dr(e,!0)}function Iu(e){for(Bn=e.return;Bn;)switch(Bn.tag){case 5:case 31:case 13:Vi=!1;return;case 27:case 3:Vi=!0;return;default:Bn=Bn.return}}function xo(e){if(e!==Bn)return!1;if(!we)return Iu(e),we=!0,!1;var n=e.tag,r;if((r=n!==3&&n!==27)&&((r=n===5)&&(r=e.type,r=!(r!=="form"&&r!=="button")||cm(e.type,e.memoizedProps)),r=!r),r&&ln&&Dr(e),Iu(e),n===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(s(317));ln=jy(e)}else if(n===31){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(s(317));ln=jy(e)}else n===27?(n=ln,Wr(e.type)?(e=_m,_m=null,ln=e):ln=n):ln=Bn?Xi(e.stateNode.nextSibling):null;return!0}function _s(){ln=Bn=null,we=!1}function Oh(){var e=Cr;return e!==null&&(mi===null?mi=e:mi.push.apply(mi,e),Cr=null),e}function ec(e){Cr===null?Cr=[e]:Cr.push(e)}var Ph=ce(null),xs=null,Ka=null;function Nr(e,n,r){oe(Ph,n._currentValue),n._currentValue=r}function $a(e){e._currentValue=Ph.current,Re(Ph)}function Fu(e,n,r){for(;e!==null;){var o=e.alternate;if((e.childLanes&n)!==n?(e.childLanes|=n,o!==null&&(o.childLanes|=n)):o!==null&&(o.childLanes&n)!==n&&(o.childLanes|=n),e===r)break;e=e.return}}function zh(e,n,r,o){var u=e.child;for(u!==null&&(u.return=e);u!==null;){var f=u.dependencies;if(f!==null){var x=u.child;f=f.firstContext;t:for(;f!==null;){var A=f;f=u;for(var I=0;I<n.length;I++)if(A.context===n[I]){f.lanes|=r,A=f.alternate,A!==null&&(A.lanes|=r),Fu(f.return,r,e),o||(x=null);break t}f=A.next}}else if(u.tag===18){if(x=u.return,x===null)throw Error(s(341));x.lanes|=r,f=x.alternate,f!==null&&(f.lanes|=r),Fu(x,r,e),x=null}else u.tag===13&&u.memoizedState!==null&&u.memoizedState.dehydrated===null?(u.lanes|=r,x=u.alternate,x!==null&&(x.lanes|=r),Fu(u.return,r,e),x=u.child,x=x!==null?x.sibling:null):x=u.child;if(x!==null)x.return=u;else for(x=u;x!==null;){if(x===e){x=null;break}if(u=x.sibling,u!==null){u.return=x.return,x=u;break}x=x.return}u=x}}function ys(e,n,r,o){e=null;for(var u=n,f=!1;u!==null;){if(!f){if((u.flags&524288)!==0)f=!0;else if((u.flags&262144)!==0)break}if(u.tag===10){var x=u.alternate;if(x===null)throw Error(s(387));if(x=x.memoizedProps,x!==null){var A=u.type;Ei(u.pendingProps.value,x.value)||(e!==null?e.push(A):e=[A])}}else if(u===Me.current){if(x=u.alternate,x===null)throw Error(s(387));x.memoizedState.memoizedState!==u.memoizedState.memoizedState&&(e!==null?e.push(Xo):e=[Xo])}u=u.return}return e!==null&&zh(n,e,r,o),n.flags|=262144,e!==null}function Bu(e){for(e=e.firstContext;e!==null;){if(!Ei(e.context._currentValue,e.memoizedValue))return!0;e=e.next}return!1}function Ss(e){xs=e,Ka=null,e=e.dependencies,e!==null&&(e.firstContext=null)}function kn(e){return l_(xs,e)}function Hu(e,n){return xs===null&&Ss(e),l_(e,n)}function l_(e,n){var r=n._currentValue;if(n={context:n,memoizedValue:r,next:null},Ka===null){if(e===null)throw Error(s(308));Ka=n,e.dependencies={lanes:0,firstContext:n},e.flags|=524288}else Ka=Ka.next=n;return r}var IT=typeof AbortController<"u"?AbortController:function(){var e=[],n=this.signal={aborted:!1,addEventListener:function(r,o){e.push(o)}};this.abort=function(){n.aborted=!0,e.forEach(function(r){return r()})}},FT=a.unstable_scheduleCallback,BT=a.unstable_NormalPriority,Tn={$$typeof:X,Consumer:null,Provider:null,_currentValue:null,_currentValue2:null,_threadCount:0};function Ih(){return{controller:new IT,data:new Map,refCount:0}}function nc(e){e.refCount--,e.refCount===0&&FT(BT,function(){e.controller.abort()})}function c_(e,n){if((e.pendingLanes&4194048)!==0){var r=e.transitionTypes;for(r===null&&(r=e.transitionTypes=[]),e=0;e<n.length;e++){var o=n[e];r.indexOf(o)===-1&&r.push(o)}}}var ic=null;function HT(e){var n=e.transitionTypes;return e.transitionTypes=null,n}var ac=null,Fh=0,Ms=0,yo=null;function GT(e,n){if(ac===null){var r=ac=[];Fh=0,Ms=tm(),yo={status:"pending",value:void 0,then:function(o){r.push(o)}}}return Fh++,n.then(u_,u_),n}function u_(){if(--Fh===0&&(ic=null,ac!==null)){yo!==null&&(yo.status="fulfilled");var e=ac;ac=null,Ms=0,yo=null;for(var n=0;n<e.length;n++)(0,e[n])()}}function VT(e,n){var r=[],o={status:"pending",value:null,reason:null,then:function(u){r.push(u)}};return e.then(function(){o.status="fulfilled",o.value=n;for(var u=0;u<r.length;u++)(0,r[u])(n)},function(u){for(o.status="rejected",o.reason=u,u=0;u<r.length;u++)(0,r[u])(void 0)}),o}var f_=Mt.S;Mt.S=function(e,n){if(iy=ne(),typeof n=="object"&&n!==null&&typeof n.then=="function"&&GT(e,n),ic!==null)for(var r=Fo;r!==null;)c_(r,ic),r=r.next;if(r=e.types,r!==null){for(var o=Fo;o!==null;)c_(o,r),o=o.next;if(Ms!==0){o=ic,o===null&&(o=ic=[]);for(var u=0;u<r.length;u++){var f=r[u];o.indexOf(f)===-1&&o.push(f)}}}f_!==null&&f_(e,n)};var bs=ce(null);function Bh(){var e=bs.current;return e!==null?e:sn.pooledCache}function Gu(e,n){n===null?oe(bs,bs.current):oe(bs,n.pool)}function d_(){var e=Bh();return e===null?null:{parent:Tn._currentValue,pool:e}}var So=Error(s(460)),Hh=Error(s(474)),Vu=Error(s(542)),ku={then:function(){}};function h_(e){return e=e.status,e==="fulfilled"||e==="rejected"}function p_(e,n,r){switch(r=e[r],r===void 0?e.push(n):r!==n&&(n.then(_a,_a),n=r),n.status){case"fulfilled":return n.value;case"rejected":throw e=n.reason,g_(e),e===void 0&&!("reason"in n)?Error(s(600)):e;default:if(typeof n.status=="string")n.then(_a,_a);else{if(e=sn,e!==null&&100<e.shellSuspendCounter)throw Error(s(482));e=n,e.status="pending",e.then(function(o){if(n.status==="pending"){var u=n;u.status="fulfilled",u.value=o}},function(o){if(n.status==="pending"){var u=n;u.status="rejected",u.reason=o}})}switch(n.status){case"fulfilled":return n.value;case"rejected":throw e=n.reason,g_(e),e}throw Ts=n,So}}function Es(e){try{var n=e._init;return n(e._payload)}catch(r){throw r!==null&&typeof r=="object"&&typeof r.then=="function"?(Ts=r,So):r}}var Ts=null;function m_(){if(Ts===null)throw Error(s(459));var e=Ts;return Ts=null,e}function g_(e){if(e===So||e===Vu)throw Error(s(483))}var Mo=null,rc=0;function Xu(e){var n=rc;return rc+=1,Mo===null&&(Mo=[]),p_(Mo,e,n)}function Ur(e,n){n=n.props.ref,e.ref=n!==void 0?n:null}function qu(e,n){throw n.$$typeof===E?Error(s(525)):(e=Object.prototype.toString.call(n),Error(s(31,e==="[object Object]"?"object with keys {"+Object.keys(n).join(", ")+"}":e)))}function v_(e){function n(K,k){if(e){var nt=K.deletions;nt===null?(K.deletions=[k],K.flags|=16):nt.push(k)}}function r(K,k){if(!e)return null;for(;k!==null;)n(K,k),k=k.sibling;return null}function o(K){for(var k=new Map;K!==null;)K.key===null?k.set(K.index,K):k.set(K.key,K),K=K.sibling;return k}function u(K,k){return K=Za(K,k),K.index=0,K.sibling=null,K}function f(K,k,nt){return K.index=nt,e?(nt=K.alternate,nt!==null?(nt=nt.index,nt<k?(K.flags|=2,k):nt):(K.flags|=134217730,k)):(K.flags|=1048576,k)}function x(K){return e&&K.alternate===null&&(K.flags|=134217730),K}function A(K,k,nt,vt){return k===null||k.tag!==6?(k=Dh(nt,K.mode,vt),k.return=K,k):(k=u(k,nt),k.return=K,k)}function I(K,k,nt,vt){var jt=nt.type;return jt===z?(K=ct(K,k,nt.props.children,vt,nt.key),Ur(K,nt),K):k!==null&&(k.elementType===jt||typeof jt=="object"&&jt!==null&&jt.$$typeof===pt&&Es(jt)===k.type)?(k=u(k,nt.props),Ur(k,nt),k.return=K,k):(k=Ou(nt.type,nt.key,nt.props,null,K.mode,vt),Ur(k,nt),k.return=K,k)}function $(K,k,nt,vt){return k===null||k.tag!==4||k.stateNode.containerInfo!==nt.containerInfo||k.stateNode.implementation!==nt.implementation?(k=Nh(nt,K.mode,vt),k.return=K,k):(k=u(k,nt.children||[]),k.return=K,k)}function ct(K,k,nt,vt,jt){return k===null||k.tag!==7?(k=vs(nt,K.mode,vt,jt),k.return=K,k):(k=u(k,nt),k.return=K,k)}function _t(K,k,nt){if(typeof k=="string"&&k!==""||typeof k=="number"||typeof k=="bigint")return k=Dh(""+k,K.mode,nt),k.return=K,k;if(typeof k=="object"&&k!==null){switch(k.$$typeof){case O:return nt=Ou(k.type,k.key,k.props,null,K.mode,nt),Ur(nt,k),nt.return=K,nt;case V:return k=Nh(k,K.mode,nt),k.return=K,k;case pt:return k=Es(k),_t(K,k,nt)}if(Dt(k)||ht(k))return k=vs(k,K.mode,nt,null),k.return=K,k;if(typeof k.then=="function")return _t(K,Xu(k),nt);if(k.$$typeof===X)return _t(K,Hu(K,k),nt);qu(K,k)}return null}function Q(K,k,nt,vt){var jt=k!==null?k.key:null;if(typeof nt=="string"&&nt!==""||typeof nt=="number"||typeof nt=="bigint")return jt!==null?null:A(K,k,""+nt,vt);if(typeof nt=="object"&&nt!==null){switch(nt.$$typeof){case O:return nt.key===jt?I(K,k,nt,vt):null;case V:return nt.key===jt?$(K,k,nt,vt):null;case pt:return nt=Es(nt),Q(K,k,nt,vt)}if(Dt(nt)||ht(nt))return jt!==null?null:ct(K,k,nt,vt,null);if(typeof nt.then=="function")return Q(K,k,Xu(nt),vt);if(nt.$$typeof===X)return Q(K,k,Hu(K,nt),vt);qu(K,nt)}return null}function rt(K,k,nt,vt,jt){if(typeof vt=="string"&&vt!==""||typeof vt=="number"||typeof vt=="bigint")return K=K.get(nt)||null,A(k,K,""+vt,jt);if(typeof vt=="object"&&vt!==null){switch(vt.$$typeof){case O:return K=K.get(vt.key===null?nt:vt.key)||null,I(k,K,vt,jt);case V:return K=K.get(vt.key===null?nt:vt.key)||null,$(k,K,vt,jt);case pt:return vt=Es(vt),rt(K,k,nt,vt,jt)}if(Dt(vt)||ht(vt))return K=K.get(nt)||null,ct(k,K,vt,jt,null);if(typeof vt.then=="function")return rt(K,k,nt,Xu(vt),jt);if(vt.$$typeof===X)return rt(K,k,nt,Hu(k,vt),jt);qu(k,vt)}return null}function Pt(K,k,nt,vt){for(var jt=null,Ue=null,ie=k,le=k=0,Rn=null;ie!==null&&le<nt.length;le++){ie.index>le?(Rn=ie,ie=null):Rn=ie.sibling;var Fe=Q(K,ie,nt[le],vt);if(Fe===null){ie===null&&(ie=Rn);break}e&&ie&&Fe.alternate===null&&n(K,ie),k=f(Fe,k,le),Ue===null?jt=Fe:Ue.sibling=Fe,Ue=Fe,ie=Rn}if(le===nt.length)return r(K,ie),we&&Qa(K,le),jt;if(ie===null){for(;le<nt.length;le++)ie=_t(K,nt[le],vt),ie!==null&&(k=f(ie,k,le),Ue===null?jt=ie:Ue.sibling=ie,Ue=ie);return we&&Qa(K,le),jt}for(ie=o(ie);le<nt.length;le++)Rn=rt(ie,K,le,nt[le],vt),Rn!==null&&(e&&(Fe=Rn.alternate,Fe!==null&&ie.delete(Fe.key===null?le:Fe.key)),k=f(Rn,k,le),Ue===null?jt=Rn:Ue.sibling=Rn,Ue=Rn);return e&&ie.forEach(function(Kr){return n(K,Kr)}),we&&Qa(K,le),jt}function Qt(K,k,nt,vt){if(nt==null)throw Error(s(151));for(var jt=null,Ue=null,ie=k,le=k=0,Rn=null,Fe=nt.next();ie!==null&&!Fe.done;le++,Fe=nt.next()){ie.index>le?(Rn=ie,ie=null):Rn=ie.sibling;var Kr=Q(K,ie,Fe.value,vt);if(Kr===null){ie===null&&(ie=Rn);break}e&&ie&&Kr.alternate===null&&n(K,ie),k=f(Kr,k,le),Ue===null?jt=Kr:Ue.sibling=Kr,Ue=Kr,ie=Rn}if(Fe.done)return r(K,ie),we&&Qa(K,le),jt;if(ie===null){for(;!Fe.done;le++,Fe=nt.next())Fe=_t(K,Fe.value,vt),Fe!==null&&(k=f(Fe,k,le),Ue===null?jt=Fe:Ue.sibling=Fe,Ue=Fe);return we&&Qa(K,le),jt}for(ie=o(ie);!Fe.done;le++,Fe=nt.next())Fe=rt(ie,K,le,Fe.value,vt),Fe!==null&&(e&&(Rn=Fe.alternate,Rn!==null&&ie.delete(Rn.key===null?le:Rn.key)),k=f(Fe,k,le),Ue===null?jt=Fe:Ue.sibling=Fe,Ue=Fe);return e&&ie.forEach(function(Mw){return n(K,Mw)}),we&&Qa(K,le),jt}function Se(K,k,nt,vt){if(typeof nt=="object"&&nt!==null&&nt.type===z&&nt.key===null&&nt.props.ref===void 0&&(nt=nt.props.children),typeof nt=="object"&&nt!==null){switch(nt.$$typeof){case O:t:{for(var jt=nt.key;k!==null;){if(k.key===jt){if(jt=nt.type,jt===z){if(k.tag===7){r(K,k.sibling),vt=u(k,nt.props.children),Ur(vt,nt),vt.return=K,K=vt;break t}}else if(k.elementType===jt||typeof jt=="object"&&jt!==null&&jt.$$typeof===pt&&Es(jt)===k.type){r(K,k.sibling),vt=u(k,nt.props),Ur(vt,nt),vt.return=K,K=vt;break t}r(K,k);break}else n(K,k);k=k.sibling}nt.type===z?(vt=vs(nt.props.children,K.mode,vt,nt.key),Ur(vt,nt),vt.return=K,K=vt):(vt=Ou(nt.type,nt.key,nt.props,null,K.mode,vt),Ur(vt,nt),vt.return=K,K=vt)}return x(K);case V:t:{for(jt=nt.key;k!==null;){if(k.key===jt)if(k.tag===4&&k.stateNode.containerInfo===nt.containerInfo&&k.stateNode.implementation===nt.implementation){r(K,k.sibling),vt=u(k,nt.children||[]),vt.return=K,K=vt;break t}else{r(K,k);break}else n(K,k);k=k.sibling}vt=Nh(nt,K.mode,vt),vt.return=K,K=vt}return x(K);case pt:return nt=Es(nt),Se(K,k,nt,vt)}if(Dt(nt))return Pt(K,k,nt,vt);if(ht(nt)){if(jt=ht(nt),typeof jt!="function")throw Error(s(150));return nt=jt.call(nt),Qt(K,k,nt,vt)}if(typeof nt.then=="function")return Se(K,k,Xu(nt),vt);if(nt.$$typeof===X)return Se(K,k,Hu(K,nt),vt);qu(K,nt)}return typeof nt=="string"&&nt!==""||typeof nt=="number"||typeof nt=="bigint"?(nt=""+nt,k!==null&&k.tag===6?(r(K,k.sibling),vt=u(k,nt),vt.return=K,K=vt):(r(K,k),vt=Dh(nt,K.mode,vt),vt.return=K,K=vt),x(K)):r(K,k)}return function(K,k,nt,vt){try{rc=0;var jt=Se(K,k,nt,vt);return Mo=null,jt}catch(ie){if(ie===So||ie===Vu)throw ie;var Ue=di(29,ie,null,K.mode);return Ue.lanes=vt,Ue.return=K,Ue}finally{}}}var As=v_(!0),__=v_(!1),Lr=!1;function Gh(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,lanes:0,hiddenCallbacks:null},callbacks:null}}function Vh(e,n){e=e.updateQueue,n.updateQueue===e&&(n.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,callbacks:null})}function Or(e){return{lane:e,tag:0,payload:null,callback:null,next:null}}function Pr(e,n,r){var o=e.updateQueue;if(o===null)return null;if(o=o.shared,(Xe&2)!==0){var u=o.pending;return u===null?n.next=n:(n.next=u.next,u.next=n),o.pending=n,n=Lu(e),e_(e,null,r),n}return Uu(e,o,n,r),Lu(e)}function sc(e,n,r){if(n=n.updateQueue,n!==null&&(n=n.shared,(r&4194048)!==0)){var o=n.lanes;o&=e.pendingLanes,r|=o,n.lanes=r,xu(e,r)}}function kh(e,n){var r=e.updateQueue,o=e.alternate;if(o!==null&&(o=o.updateQueue,r===o)){var u=null,f=null;if(r=r.firstBaseUpdate,r!==null){do{var x={lane:r.lane,tag:r.tag,payload:r.payload,callback:null,next:null};f===null?u=f=x:f=f.next=x,r=r.next}while(r!==null);f===null?u=f=n:f=f.next=n}else u=f=n;r={baseState:o.baseState,firstBaseUpdate:u,lastBaseUpdate:f,shared:o.shared,callbacks:o.callbacks},e.updateQueue=r;return}e=r.lastBaseUpdate,e===null?r.firstBaseUpdate=n:e.next=n,r.lastBaseUpdate=n}var Xh=!1;function oc(){if(Xh){var e=yo;if(e!==null)throw e}}function lc(e,n,r,o){Xh=!1;var u=e.updateQueue;Lr=!1;var f=u.firstBaseUpdate,x=u.lastBaseUpdate,A=u.shared.pending;if(A!==null){u.shared.pending=null;var I=A,$=I.next;I.next=null,x===null?f=$:x.next=$,x=I;var ct=e.alternate;ct!==null&&(ct=ct.updateQueue,A=ct.lastBaseUpdate,A!==x&&(A===null?ct.firstBaseUpdate=$:A.next=$,ct.lastBaseUpdate=I))}if(f!==null){var _t=u.baseState;x=0,ct=$=I=null,A=f;do{var Q=A.lane&-536870913,rt=Q!==A.lane;if(rt?(Ne&Q)===Q:(o&Q)===Q){Q!==0&&Q===Ms&&(Xh=!0),ct!==null&&(ct=ct.next={lane:0,tag:A.tag,payload:A.payload,callback:null,next:null});t:{var Pt=e,Qt=A;Q=n;var Se=r;switch(Qt.tag){case 1:if(Pt=Qt.payload,typeof Pt=="function"){_t=Pt.call(Se,_t,Q);break t}_t=Pt;break t;case 3:Pt.flags=Pt.flags&-65537|128;case 0:if(Pt=Qt.payload,Q=typeof Pt=="function"?Pt.call(Se,_t,Q):Pt,Q==null)break t;_t=L({},_t,Q);break t;case 2:Lr=!0}}Q=A.callback,Q!==null&&(e.flags|=64,rt&&(e.flags|=8192),rt=u.callbacks,rt===null?u.callbacks=[Q]:rt.push(Q))}else rt={lane:Q,tag:A.tag,payload:A.payload,callback:A.callback,next:null},ct===null?($=ct=rt,I=_t):ct=ct.next=rt,x|=Q;if(A=A.next,A===null){if(A=u.shared.pending,A===null)break;rt=A,A=rt.next,rt.next=null,u.lastBaseUpdate=rt,u.shared.pending=null}}while(!0);ct===null&&(I=_t),u.baseState=I,u.firstBaseUpdate=$,u.lastBaseUpdate=ct,f===null&&(u.shared.lanes=0),Vr|=x,e.lanes=x,e.memoizedState=_t}}function x_(e,n){if(typeof e!="function")throw Error(s(191,e));e.call(n)}function y_(e,n){var r=e.callbacks;if(r!==null)for(e.callbacks=null,e=0;e<r.length;e++)x_(r[e],n)}var zr=ce(null),Wu=ce(0);function S_(e,n){e=ir,oe(Wu,e),oe(zr,n),ir=e|n.baseLanes}function qh(){oe(Wu,ir),oe(zr,zr.current)}function Wh(){ir=Wu.current,Re(zr),Re(Wu)}var Xn=ce(null),Kn=null;function Ir(e){var n=e.alternate;oe(qn,qn.current&1),oe(Xn,e),Kn===null&&(n===null||zr.current!==null||n.memoizedState!==null)&&(Kn=e)}function jh(e){oe(qn,qn.current),oe(Xn,e),Kn===null&&(Kn=e)}function M_(e){e.tag===22?(oe(qn,qn.current),oe(Xn,e),Kn===null&&(Kn=e)):Fr()}function Fr(){oe(qn,qn.current),oe(Xn,Xn.current)}function Ti(e){Re(Xn),Kn===e&&(Kn=null),Re(qn)}var qn=ce(0);function cc(e,n){oe(Xn,Xn.current),oe(qn,n)}function Yh(e){Re(qn),Re(Xn),Kn===e&&(Kn=null)}function ju(e){for(var n=e;n!==null;){if(n.tag===13){var r=n.memoizedState;if(r!==null&&(r=r.dehydrated,r===null||gm(r)||vm(r)))return n}else if(n.tag===19&&n.memoizedProps.revealOrder!=="independent"){if((n.flags&128)!==0)return n}else if(n.child!==null){n.child.return=n,n=n.child;continue}if(n===e)break;for(;n.sibling===null;){if(n.return===null||n.return===e)return null;n=n.return}n.sibling.return=n.return,n=n.sibling}return null}var Ja=0,ye=null,nn=null,An=null,Yu=!1,bo=!1,ws=!1,Zu=0,uc=0,Eo=null,kT=0;function vn(){throw Error(s(321))}function Zh(e,n){if(n===null)return!1;for(var r=0;r<n.length&&r<e.length;r++)if(!Ei(e[r],n[r]))return!1;return!0}function Qh(e,n,r,o,u,f){return Ja=f,ye=n,n.memoizedState=null,n.updateQueue=null,n.lanes=0,Mt.H=e===null||e.memoizedState===null?rx:sx,ws=!1,f=r(o,u),ws=!1,bo&&(f=E_(n,r,o,u)),b_(e),f}function b_(e){Mt.H=nf;var n=nn!==null&&nn.next!==null;if(Ja=0,An=nn=ye=null,Yu=!1,uc=0,Eo=null,n)throw Error(s(300));e===null||wn||(e=e.dependencies,e!==null&&Bu(e)&&(wn=!0))}function E_(e,n,r,o){ye=e;var u=0;do{if(bo&&(Eo=null),uc=0,bo=!1,25<=u)throw Error(s(301));if(u+=1,An=nn=null,e.updateQueue!=null){var f=e.updateQueue;f.lastEffect=null,f.events=null,f.stores=null,f.memoCache!=null&&(f.memoCache.index=0)}Mt.H=KT,f=n(r,o)}while(bo);return f}function XT(){var e=Mt.H,n=e.useState()[0];return n=typeof n.then=="function"?fc(n):n,e=e.useState()[0],(nn!==null?nn.memoizedState:null)!==e&&(ye.flags|=1024),n}function Kh(){var e=Zu!==0;return Zu=0,e}function $h(e,n,r){n.updateQueue=e.updateQueue,n.flags&=-2053,e.lanes&=~r}function Jh(e){if(Yu){for(e=e.memoizedState;e!==null;){var n=e.queue;n!==null&&(n.pending=null),e=e.next}Yu=!1}Ja=0,An=nn=ye=null,bo=!1,uc=Zu=0,Eo=null}function ii(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return An===null?ye.memoizedState=An=e:An=An.next=e,An}function Sn(){if(nn===null){var e=ye.alternate;e=e!==null?e.memoizedState:null}else e=nn.next;var n=An===null?ye.memoizedState:An.next;if(n!==null)An=n,nn=e;else{if(e===null)throw ye.alternate===null?Error(s(467)):Error(s(310));nn=e,e={memoizedState:nn.memoizedState,baseState:nn.baseState,baseQueue:nn.baseQueue,queue:nn.queue,next:null},An===null?ye.memoizedState=An=e:An=An.next=e}return An}function Qu(){return{lastEffect:null,events:null,stores:null,memoCache:null}}function fc(e){var n=uc;return uc+=1,Eo===null&&(Eo=[]),e=p_(Eo,e,n),n=ye,(An===null?n.memoizedState:An.next)===null&&(n=n.alternate,Mt.H=n===null||n.memoizedState===null?rx:sx),e}function Ku(e){if(e!==null&&typeof e=="object"){if(typeof e.then=="function")return fc(e);if(e.$$typeof===lt)return;if(e.$$typeof===X)return kn(e)}throw Error(s(438,String(e)))}function tp(e){var n=null,r=ye.updateQueue;if(r!==null&&(n=r.memoCache),n==null){var o=ye.alternate;o!==null&&(o=o.updateQueue,o!==null&&(o=o.memoCache,o!=null&&(n={data:o.data.map(function(u){return u.slice()}),index:0})))}if(n==null&&(n={data:[],index:0}),r===null&&(r=Qu(),ye.updateQueue=r),r.memoCache=n,r=n.data[n.index],r===void 0)for(r=n.data[n.index]=Array(e),o=0;o<e;o++)r[o]=re;return n.index++,r}function tr(e,n){return typeof n=="function"?n(e):n}function $u(e){var n=Sn();return ep(n,nn,e)}function ep(e,n,r){var o=e.queue;if(o===null)throw Error(s(311));o.lastRenderedReducer=r;var u=e.baseQueue,f=o.pending;if(f!==null){if(u!==null){var x=u.next;u.next=f.next,f.next=x}n.baseQueue=u=f,o.pending=null}if(f=e.baseState,u===null)e.memoizedState=f;else{n=u.next;var A=x=null,I=null,$=n,ct=!1;do{var _t=$.lane&-536870913;if(_t!==$.lane?(Ne&_t)===_t:(Ja&_t)===_t){var Q=$.revertLane;if(Q===0)I!==null&&(I=I.next={lane:0,revertLane:0,gesture:null,action:$.action,hasEagerState:$.hasEagerState,eagerState:$.eagerState,next:null}),_t===Ms&&(ct=!0);else if((Ja&Q)===Q){$=$.next,Q===Ms&&(ct=!0);continue}else _t={lane:0,revertLane:$.revertLane,gesture:null,action:$.action,hasEagerState:$.hasEagerState,eagerState:$.eagerState,next:null},I===null?(A=I=_t,x=f):I=I.next=_t,ye.lanes|=Q,Vr|=Q;_t=$.action,ws&&r(f,_t),f=$.hasEagerState?$.eagerState:r(f,_t)}else Q={lane:_t,revertLane:$.revertLane,gesture:$.gesture,action:$.action,hasEagerState:$.hasEagerState,eagerState:$.eagerState,next:null},I===null?(A=I=Q,x=f):I=I.next=Q,ye.lanes|=_t,Vr|=_t;$=$.next}while($!==null&&$!==n);if(I===null?x=f:I.next=A,!Ei(f,e.memoizedState)&&(wn=!0,ct&&(r=yo,r!==null)))throw r;e.memoizedState=f,e.baseState=x,e.baseQueue=I,o.lastRenderedState=f}return u===null&&(o.lanes=0),[e.memoizedState,o.dispatch]}function np(e){var n=Sn(),r=n.queue;if(r===null)throw Error(s(311));r.lastRenderedReducer=e;var o=r.dispatch,u=r.pending,f=n.memoizedState;if(u!==null){r.pending=null;var x=u=u.next;do f=e(f,x.action),x=x.next;while(x!==u);Ei(f,n.memoizedState)||(wn=!0),n.memoizedState=f,n.baseQueue===null&&(n.baseState=f),r.lastRenderedState=f}return[f,o]}function T_(e,n,r){var o=ye,u=Sn(),f=we;if(f){if(r===void 0)throw Error(s(407));r=r()}else r=n();var x=!Ei((nn||u).memoizedState,r);if(x&&(u.memoizedState=r,wn=!0),u=u.queue,rp(R_.bind(null,o,u,e),[e]),e=u.getSnapshot!==n||x||An!==null&&(An.memoizedState.tag&1)!==0,To(e?9:8,{destroy:void 0},w_.bind(null,o,u,r,n),null),e){if(o.flags|=2048,sn===null)throw Error(s(349));f||(Ja&127)!==0||A_(o,n,r)}return r}function A_(e,n,r){e.flags|=16384,e={getSnapshot:n,value:r},n=ye.updateQueue,n===null?(n=Qu(),ye.updateQueue=n,n.stores=[e]):(r=n.stores,r===null?n.stores=[e]:r.push(e))}function w_(e,n,r,o){n.value=r,n.getSnapshot=o,C_(n)&&D_(e)}function R_(e,n,r){return r(function(){C_(n)&&D_(e)})}function C_(e){var n=e.getSnapshot;e=e.value;try{var r=n();return!Ei(e,r)}catch{return!0}}function D_(e){var n=gs(e,2);n!==null&&gi(n,e,2)}function ip(e){var n=ii();if(typeof e=="function"){var r=e;if(e=r(),ws){We(!0);try{r()}finally{We(!1)}}}return n.memoizedState=n.baseState=e,n.queue={pending:null,lanes:0,dispatch:null,lastRenderedReducer:tr,lastRenderedState:e},n}function N_(e,n,r,o){return e.baseState=r,ep(e,nn,typeof o=="function"?o:tr)}function qT(e,n,r,o,u){if(ef(e))throw Error(s(485));if(e=n.action,e!==null){var f={payload:u,action:e,next:null,isTransition:!0,status:"pending",value:null,reason:null,listeners:[],then:function(x){f.listeners.push(x)}};Mt.T!==null?r(!0):f.isTransition=!1,o(f),r=n.pending,r===null?(f.next=n.pending=f,U_(n,f)):(f.next=r.next,n.pending=r.next=f)}}function U_(e,n){var r=n.action,o=n.payload,u=e.state;if(n.isTransition){var f=Mt.T,x={};x.types=f!==null?f.types:null,Mt.T=x;try{var A=r(u,o),I=Mt.S;I!==null&&I(x,A),L_(e,n,A)}catch($){ap(e,n,$)}finally{f!==null&&x.types!==null&&(f.types=x.types),Mt.T=f}}else try{f=r(u,o),L_(e,n,f)}catch($){ap(e,n,$)}}function L_(e,n,r){r!==null&&typeof r=="object"&&typeof r.then=="function"?r.then(function(o){O_(e,n,o)},function(o){return ap(e,n,o)}):O_(e,n,r)}function O_(e,n,r){n.status="fulfilled",n.value=r,P_(n),e.state=r,n=e.pending,n!==null&&(r=n.next,r===n?e.pending=null:(r=r.next,n.next=r,U_(e,r)))}function ap(e,n,r){var o=e.pending;if(e.pending=null,o!==null){o=o.next;do n.status="rejected",n.reason=r,P_(n),n=n.next;while(n!==o)}e.action=null}function P_(e){e=e.listeners;for(var n=0;n<e.length;n++)(0,e[n])()}function z_(e,n){return n}function I_(e,n){if(we){var r=sn.formState;if(r!==null){t:{var o=ye;if(we){if(ln){e:{for(var u=ln,f=Vi;u.nodeType!==8;){if(!f){u=null;break e}if(u=Xi(u.nextSibling),u===null){u=null;break e}}f=u.data,u=f==="F!"||f==="F"?u:null}if(u){ln=Xi(u.nextSibling),o=u.data==="F!";break t}}Dr(o)}o=!1}o&&(n=r[0])}}return r=ii(),r.memoizedState=r.baseState=n,o={pending:null,lanes:0,dispatch:null,lastRenderedReducer:z_,lastRenderedState:n},r.queue=o,r=nx.bind(null,ye,o),o.dispatch=r,o=ip(!1),f=up.bind(null,ye,!1,o.queue),o=ii(),u={state:n,dispatch:null,action:e,pending:null},o.queue=u,r=qT.bind(null,ye,u,f,r),u.dispatch=r,o.memoizedState=e,[n,r,!1]}function F_(e){var n=Sn();return B_(n,nn,e)}function B_(e,n,r){if(n=ep(e,n,z_)[0],e=$u(tr)[0],typeof n=="object"&&n!==null&&typeof n.then=="function")try{var o=fc(n)}catch(x){throw x===So?Vu:x}else o=n;n=Sn();var u=n.queue,f=u.dispatch;return r!==n.memoizedState&&(ye.flags|=2048,To(9,{destroy:void 0},WT.bind(null,u,r),null)),[o,f,e]}function WT(e,n){e.action=n}function H_(e){var n=Sn(),r=nn;if(r!==null)return B_(n,r,e);Sn(),n=n.memoizedState,r=Sn();var o=r.queue.dispatch;return r.memoizedState=e,[n,o,!1]}function To(e,n,r,o){return e={tag:e,create:r,deps:o,inst:n,next:null},n=ye.updateQueue,n===null&&(n=Qu(),ye.updateQueue=n),r=n.lastEffect,r===null?n.lastEffect=e.next=e:(o=r.next,r.next=e,e.next=o,n.lastEffect=e),e}function G_(){return Sn().memoizedState}function Ju(e,n,r,o){var u=ii();ye.flags|=e,u.memoizedState=To(1|n,{destroy:void 0},r,o===void 0?null:o)}function tf(e,n,r,o){var u=Sn();o=o===void 0?null:o;var f=u.memoizedState.inst;nn!==null&&o!==null&&Zh(o,nn.memoizedState.deps)?u.memoizedState=To(n,f,r,o):(ye.flags|=e,u.memoizedState=To(1|n,f,r,o))}function V_(e,n){Ju(8390656,8,e,n)}function rp(e,n){tf(2048,8,e,n)}function jT(e){ye.flags|=4;var n=ye.updateQueue;if(n===null)n=Qu(),ye.updateQueue=n,n.events=[e];else{var r=n.events;r===null?n.events=[e]:r.push(e)}}function k_(e){var n=Sn().memoizedState;return jT({ref:n,nextImpl:e}),function(){if((Xe&2)!==0)throw Error(s(440));return n.impl.apply(void 0,arguments)}}function X_(e,n){return tf(4,2,e,n)}function q_(e,n){return tf(4,4,e,n)}function W_(e,n){if(typeof n=="function"){e=e();var r=n(e);return function(){typeof r=="function"?r():n(null)}}if(n!=null)return e=e(),n.current=e,function(){n.current=null}}function j_(e,n,r){r=r!=null?r.concat([e]):null,tf(4,4,W_.bind(null,n,e),r)}function sp(){}function Y_(e,n){var r=Sn();n=n===void 0?null:n;var o=r.memoizedState;return n!==null&&Zh(n,o[1])?o[0]:(r.memoizedState=[e,n],e)}function Z_(e,n){var r=Sn();n=n===void 0?null:n;var o=r.memoizedState;if(n!==null&&Zh(n,o[1]))return o[0];if(o=e(),ws){We(!0);try{e()}finally{We(!1)}}return r.memoizedState=[o,n],o}function op(e,n,r){return r===void 0||(Ja&1073741824)!==0&&(Ne&261930)===0?e.memoizedState=n:(e.memoizedState=r,e=ry(),ye.lanes|=e,Vr|=e,r)}function Q_(e,n,r,o){return Ei(r,n)?r:zr.current!==null?(e=op(e,r,o),Ei(e,n)||(wn=!0),e):(Ja&106)===0||(Ja&1073741824)!==0&&(Ne&261930)===0?(wn=!0,e.memoizedState=r):(e=ry(),ye.lanes|=e,Vr|=e,n)}function K_(e,n,r,o,u){var f=kt.p;kt.p=f!==0&&8>f?f:8;var x=Mt.T,A={};A.types=x!==null?x.types:null,Mt.T=A,up(e,!1,n,r);try{var I=u(),$=Mt.S;if($!==null&&$(A,I),I!==null&&typeof I=="object"&&typeof I.then=="function"){var ct=VT(I,o);dc(e,n,ct,Ci(e))}else dc(e,n,o,Ci(e))}catch(_t){dc(e,n,{then:function(){},status:"rejected",reason:_t},Ci())}finally{kt.p=f,x!==null&&A.types!==null&&(x.types=A.types),Mt.T=x}}function YT(){}function lp(e,n,r,o){if(e.tag!==5)throw Error(s(476));var u=$_(e).queue;K_(e,u,n,he,r===null?YT:function(){return J_(e),r(o)})}function $_(e){var n=e.memoizedState;if(n!==null)return n;n={memoizedState:he,baseState:he,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:tr,lastRenderedState:he},next:null};var r={};return n.next={memoizedState:r,baseState:r,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:tr,lastRenderedState:r},next:null},e.memoizedState=n,e=e.alternate,e!==null&&(e.memoizedState=n),n}function J_(e){var n=$_(e);n.next===null&&(n=e.alternate.memoizedState),dc(e,n.next.queue,{},Ci())}function cp(){return kn(Xo)}function tx(){return Sn().memoizedState}function ex(){return Sn().memoizedState}function ZT(e){for(var n=e.return;n!==null;){switch(n.tag){case 24:case 3:var r=Ci();e=Or(r);var o=Pr(n,e,r);o!==null&&(gi(o,n,r),sc(o,n,r)),n={cache:Ih()},e.payload=n;return}n=n.return}}function QT(e,n,r){var o=Ci();r={lane:o,revertLane:0,gesture:null,action:r,hasEagerState:!1,eagerState:null,next:null},ef(e)?ix(n,r):(r=Rh(e,n,r,o),r!==null&&(gi(r,e,o),ax(r,n,o)))}function nx(e,n,r){var o=Ci();dc(e,n,r,o)}function dc(e,n,r,o){var u={lane:o,revertLane:0,gesture:null,action:r,hasEagerState:!1,eagerState:null,next:null};if(ef(e))ix(n,u);else{var f=e.alternate;if(e.lanes===0&&(f===null||f.lanes===0)&&(f=n.lastRenderedReducer,f!==null))try{var x=n.lastRenderedState,A=f(x,r);if(u.hasEagerState=!0,u.eagerState=A,Ei(A,x))return Uu(e,n,u,0),sn===null&&Nu(),!1}catch{}finally{}if(r=Rh(e,n,u,o),r!==null)return gi(r,e,o),ax(r,n,o),!0}return!1}function up(e,n,r,o){if(o={lane:2,revertLane:tm(),gesture:null,action:o,hasEagerState:!1,eagerState:null,next:null},ef(e)){if(n)throw Error(s(479))}else n=Rh(e,r,o,2),n!==null&&gi(n,e,2)}function ef(e){var n=e.alternate;return e===ye||n!==null&&n===ye}function ix(e,n){bo=Yu=!0;var r=e.pending;r===null?n.next=n:(n.next=r.next,r.next=n),e.pending=n}function ax(e,n,r){if((r&4194048)!==0){var o=n.lanes;o&=e.pendingLanes,r|=o,n.lanes=r,xu(e,r)}}var nf={readContext:kn,use:Ku,useCallback:vn,useContext:vn,useEffect:vn,useImperativeHandle:vn,useLayoutEffect:vn,useInsertionEffect:vn,useMemo:vn,useReducer:vn,useRef:vn,useState:vn,useDebugValue:vn,useDeferredValue:vn,useTransition:vn,useSyncExternalStore:vn,useId:vn,useHostTransitionStatus:vn,useFormState:vn,useActionState:vn,useOptimistic:vn,useMemoCache:vn,useCacheRefresh:vn,useEffectEvent:vn},rx={readContext:kn,use:Ku,useCallback:function(e,n){return ii().memoizedState=[e,n===void 0?null:n],e},useContext:kn,useEffect:V_,useImperativeHandle:function(e,n,r){r=r!=null?r.concat([e]):null,Ju(4194308,4,W_.bind(null,n,e),r)},useLayoutEffect:function(e,n){return Ju(4194308,4,e,n)},useInsertionEffect:function(e,n){Ju(4,2,e,n)},useMemo:function(e,n){var r=ii();n=n===void 0?null:n;var o=e();if(ws){We(!0);try{e()}finally{We(!1)}}return r.memoizedState=[o,n],o},useReducer:function(e,n,r){var o=ii();if(r!==void 0){var u=r(n);if(ws){We(!0);try{r(n)}finally{We(!1)}}}else u=n;return o.memoizedState=o.baseState=u,e={pending:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:u},o.queue=e,e=e.dispatch=QT.bind(null,ye,e),[o.memoizedState,e]},useRef:function(e){var n=ii();return e={current:e},n.memoizedState=e},useState:function(e){e=ip(e);var n=e.queue,r=nx.bind(null,ye,n);return n.dispatch=r,[e.memoizedState,r]},useDebugValue:sp,useDeferredValue:function(e,n){var r=ii();return op(r,e,n)},useTransition:function(){var e=ip(!1);return e=K_.bind(null,ye,e.queue,!0,!1),ii().memoizedState=e,[!1,e]},useSyncExternalStore:function(e,n,r){var o=ye,u=ii();if(we){if(r===void 0)throw Error(s(407));r=r()}else{if(r=n(),sn===null)throw Error(s(349));(Ne&127)!==0||A_(o,n,r)}u.memoizedState=r;var f={value:r,getSnapshot:n};return u.queue=f,V_(R_.bind(null,o,f,e),[e]),o.flags|=2048,To(9,{destroy:void 0},w_.bind(null,o,f,r,n),null),r},useId:function(){var e=ii(),n=sn.identifierPrefix;if(we){var r=ya,o=xa;r=(o&~(1<<32-xe(o)-1)).toString(32)+r,n="_"+n+"R_"+r,r=Zu++,0<r&&(n+="H"+r.toString(32)),n+="_"}else r=kT++,n="_"+n+"r_"+r.toString(32)+"_";return e.memoizedState=n},useHostTransitionStatus:cp,useFormState:I_,useActionState:I_,useOptimistic:function(e){var n=ii();n.memoizedState=n.baseState=e;var r={pending:null,lanes:0,dispatch:null,lastRenderedReducer:null,lastRenderedState:null};return n.queue=r,n=up.bind(null,ye,!0,r),r.dispatch=n,[e,n]},useMemoCache:tp,useCacheRefresh:function(){return ii().memoizedState=ZT.bind(null,ye)},useEffectEvent:function(e){var n=ii(),r={impl:e};return n.memoizedState=r,function(){if((Xe&2)!==0)throw Error(s(440));return r.impl.apply(void 0,arguments)}}},sx={readContext:kn,use:Ku,useCallback:Y_,useContext:kn,useEffect:rp,useImperativeHandle:j_,useInsertionEffect:X_,useLayoutEffect:q_,useMemo:Z_,useReducer:$u,useRef:G_,useState:function(){return $u(tr)},useDebugValue:sp,useDeferredValue:function(e,n){var r=Sn();return Q_(r,nn.memoizedState,e,n)},useTransition:function(){var e=$u(tr)[0],n=Sn().memoizedState;return[typeof e=="boolean"?e:fc(e),n]},useSyncExternalStore:T_,useId:tx,useHostTransitionStatus:cp,useFormState:F_,useActionState:F_,useOptimistic:function(e,n){var r=Sn();return N_(r,nn,e,n)},useMemoCache:tp,useCacheRefresh:ex,useEffectEvent:k_},KT={readContext:kn,use:Ku,useCallback:Y_,useContext:kn,useEffect:rp,useImperativeHandle:j_,useInsertionEffect:X_,useLayoutEffect:q_,useMemo:Z_,useReducer:np,useRef:G_,useState:function(){return np(tr)},useDebugValue:sp,useDeferredValue:function(e,n){var r=Sn();return nn===null?op(r,e,n):Q_(r,nn.memoizedState,e,n)},useTransition:function(){var e=np(tr)[0],n=Sn().memoizedState;return[typeof e=="boolean"?e:fc(e),n]},useSyncExternalStore:T_,useId:tx,useHostTransitionStatus:cp,useFormState:H_,useActionState:H_,useOptimistic:function(e,n){var r=Sn();return nn!==null?N_(r,nn,e,n):(r.baseState=e,[e,r.queue.dispatch])},useMemoCache:tp,useCacheRefresh:ex,useEffectEvent:k_};function fp(e,n,r,o){n=e.memoizedState,r=r(o,n),r=r==null?n:L({},n,r),e.memoizedState=r,e.lanes===0&&(e.updateQueue.baseState=r)}var dp={enqueueSetState:function(e,n,r){e=e._reactInternals;var o=Ci(),u=Or(o);u.payload=n,r!=null&&(u.callback=r),n=Pr(e,u,o),n!==null&&(gi(n,e,o),sc(n,e,o))},enqueueReplaceState:function(e,n,r){e=e._reactInternals;var o=Ci(),u=Or(o);u.tag=1,u.payload=n,r!=null&&(u.callback=r),n=Pr(e,u,o),n!==null&&(gi(n,e,o),sc(n,e,o))},enqueueForceUpdate:function(e,n){e=e._reactInternals;var r=Ci(),o=Or(r);o.tag=2,n!=null&&(o.callback=n),n=Pr(e,o,r),n!==null&&(gi(n,e,r),sc(n,e,r))}};function ox(e,n,r,o,u,f,x){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(o,f,x):n.prototype&&n.prototype.isPureReactComponent?!$l(r,o)||!$l(u,f):!0}function lx(e,n,r,o){e=n.state,typeof n.componentWillReceiveProps=="function"&&n.componentWillReceiveProps(r,o),typeof n.UNSAFE_componentWillReceiveProps=="function"&&n.UNSAFE_componentWillReceiveProps(r,o),n.state!==e&&dp.enqueueReplaceState(n,n.state,null)}function Rs(e,n){var r=n;if("ref"in n){r={};for(var o in n)o!=="ref"&&(r[o]=n[o])}if(e=e.defaultProps){r===n&&(r=L({},r));for(var u in e)r[u]===void 0&&(r[u]=e[u])}return r}function cx(e){Du(e)}function ux(e){console.error(e)}function fx(e){Du(e)}function af(e,n){try{var r=e.onUncaughtError;r(n.value,{componentStack:n.stack})}catch(o){setTimeout(function(){throw o})}}function dx(e,n,r){try{var o=e.onCaughtError;o(r.value,{componentStack:r.stack,errorBoundary:n.tag===1?n.stateNode:null})}catch(u){setTimeout(function(){throw u})}}function hp(e,n,r){return r=Or(r),r.tag=3,r.payload={element:null},r.callback=function(){af(e,n)},r}function hx(e){return e=Or(e),e.tag=3,e}function px(e,n,r,o){var u=r.type.getDerivedStateFromError;if(typeof u=="function"){var f=o.value;e.payload=function(){return u(f)},e.callback=function(){dx(n,r,o)}}var x=r.stateNode;x!==null&&typeof x.componentDidCatch=="function"&&(e.callback=function(){dx(n,r,o),typeof u!="function"&&(kr===null?kr=new Set([this]):kr.add(this));var A=o.stack;this.componentDidCatch(o.value,{componentStack:A!==null?A:""})})}function $T(e,n,r,o,u){if(r.flags|=32768,o!==null&&typeof o=="object"&&typeof o.then=="function"){if(n=r.alternate,n!==null&&ys(n,r,u,!0),r=Xn.current,r!==null){switch(r.tag){case 31:case 13:case 19:return Kn===null?Tf():r.alternate===null&&_n===0&&(_n=3),r.flags&=-257,r.flags|=65536,r.lanes=u,o===ku?r.flags|=16384:(n=r.updateQueue,n===null?r.updateQueue=new Set([o]):n.add(o),Kp(e,o,u)),!1;case 22:return r.flags|=65536,o===ku?r.flags|=16384:(n=r.updateQueue,n===null?(n={transitions:null,markerInstances:null,retryQueue:new Set([o])},r.updateQueue=n):(r=n.retryQueue,r===null?n.retryQueue=new Set([o]):r.add(o)),Kp(e,o,u)),!1}throw Error(s(435,r.tag))}return Kp(e,o,u),Tf(),!1}if(we)return n=Xn.current,n!==null?((n.flags&65536)===0&&(n.flags|=256),n.flags|=65536,n.lanes=u,o!==Lh&&(e=Error(s(422),{cause:o}),ec(Bi(e,r)))):(o!==Lh&&(n=Error(s(423),{cause:o}),ec(Bi(n,r))),e=e.current.alternate,e.flags|=65536,u&=-u,e.lanes|=u,o=Bi(o,r),u=hp(e.stateNode,o,u),kh(e,u),_n!==4&&(_n=2)),!1;var f=Error(s(520),{cause:o});if(f=Bi(f,r),yc===null?yc=[f]:yc.push(f),_n!==4&&(_n=2),n===null)return!0;o=Bi(o,r),r=n;do{switch(r.tag){case 3:return r.flags|=65536,e=u&-u,r.lanes|=e,e=hp(r.stateNode,o,e),kh(r,e),!1;case 1:if(n=r.type,f=r.stateNode,(r.flags&128)===0&&(typeof n.getDerivedStateFromError=="function"||f!==null&&typeof f.componentDidCatch=="function"&&(kr===null||!kr.has(f))))return r.flags|=65536,u&=-u,r.lanes|=u,u=hx(u),px(u,e,r,o),kh(r,u),!1;break;case 22:if(r.memoizedState!==null)return r.flags|=65536,!1}r=r.return}while(r!==null);return!1}var pp=Error(s(461)),wn=!1;function Ln(e,n,r,o){n.child=e===null?__(n,null,r,o):As(n,e.child,r,o)}function mx(e,n,r,o,u){r=r.render;var f=n.ref;if("ref"in o){var x={};for(var A in o)A!=="ref"&&(x[A]=o[A])}else x=o;return Ss(n),o=Qh(e,n,r,x,f,u),A=Kh(),e!==null&&!wn?($h(e,n,u),er(e,n,u)):(we&&A&&zu(n),n.flags|=1,Ln(e,n,o,u),n.child)}function gx(e,n,r,o,u){if(e===null){var f=r.type;return typeof f=="function"&&!Ch(f)&&f.defaultProps===void 0&&r.compare===null?(n.tag=15,n.type=f,vx(e,n,f,o,u)):(e=Ou(r.type,null,o,n,n.mode,u),e.ref=n.ref,e.return=n,n.child=e)}if(f=e.child,!Mp(e,u)){var x=f.memoizedProps;if(r=r.compare,r=r!==null?r:$l,r(x,o)&&e.ref===n.ref)return er(e,n,u)}return n.flags|=1,e=Za(f,o),e.ref=n.ref,e.return=n,n.child=e}function vx(e,n,r,o,u){if(e!==null){var f=e.memoizedProps;if($l(f,o)&&e.ref===n.ref)if(wn=!1,n.pendingProps=o=f,Mp(e,u))(e.flags&131072)!==0&&(wn=!0);else return n.lanes=e.lanes,er(e,n,u)}return mp(e,n,r,o,u)}function _x(e,n,r,o){var u=o.children,f=e!==null?e.memoizedState:null;if(e===null&&n.stateNode===null&&(n.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),o.mode==="hidden"){if((n.flags&128)!==0){if(f=f!==null?f.baseLanes|r:r,e!==null){for(o=n.child=e.child,u=0;o!==null;)u=u|o.lanes|o.childLanes,o=o.sibling;o=u&~f}else o=0,n.child=null;return xx(e,n,f,r,o)}if((r&536870912)!==0)n.memoizedState={baseLanes:0,cachePool:null},e!==null&&Gu(n,f!==null?f.cachePool:null),f!==null?S_(n,f):qh(),M_(n);else return o=n.lanes=536870912,xx(e,n,f!==null?f.baseLanes|r:r,r,o)}else f!==null?(Gu(n,f.cachePool),S_(n,f),Fr(),n.memoizedState=null):(e!==null&&Gu(n,null),qh(),Fr());return Ln(e,n,u,r),n.child}function hc(e,n){return e!==null&&e.tag===22||n.stateNode!==null||(n.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),n.sibling}function xx(e,n,r,o,u){var f=Bh();return f=f===null?null:{parent:Tn._currentValue,pool:f},n.memoizedState={baseLanes:r,cachePool:f},e!==null&&Gu(n,null),qh(),M_(n),e!==null&&ys(e,n,o,!0),n.childLanes=u,null}function rf(e,n){return n=sf({mode:n.mode,children:n.children},e.mode),n.ref=e.ref,e.child=n,n.return=e,n}function yx(e,n,r){return As(n,e.child,null,r),e=rf(n,n.pendingProps),e.flags|=2,Ti(n),n.memoizedState=null,e}function JT(e,n,r){var o=n.pendingProps,u=(n.flags&128)!==0;if(n.flags&=-129,e===null){if(we){if(o.mode==="hidden")return e=rf(n,o),n.lanes=536870912,e.memoizedState={baseLanes:0,cachePool:null},hc(null,e);if(jh(n),(e=ln)?(e=Wy(e,Vi),e=e!==null&&e.data==="&"?e:null,e!==null&&(n.memoizedState={dehydrated:e,treeContext:Rr!==null?{id:xa,overflow:ya}:null,retryLane:536870912,hydrationErrors:null},r=i_(e),r.return=n,n.child=r,Bn=n,ln=null)):e=null,e===null)throw Dr(n);return n.lanes=536870912,null}return rf(n,o)}var f=e.memoizedState;if(f!==null){var x=f.dehydrated;if(jh(n),u)if(n.flags&256)n.flags&=-257,n=yx(e,n,r);else if(n.memoizedState!==null)n.child=e.child,n.flags|=128,n=null;else throw Error(s(558));else if(wn||ys(e,n,r,!1),u=(r&e.childLanes)!==0,wn||u){if(zr.current===null){if(o=sn,o!==null&&(x=yu(o,r),x!==0&&x!==f.retryLane))throw f.retryLane=x,gs(e,x),gi(o,e,x),pp;Tf()}n=yx(e,n,r)}else e=f.treeContext,ln=Xi(x.nextSibling),Bn=n,we=!0,Cr=null,Vi=!1,e!==null&&s_(n,e),n=rf(n,o),n.flags|=134221824;return n}return e=Za(e.child,{mode:o.mode,children:o.children}),e.ref=n.ref,n.child=e,e.return=n,e}function Ao(e,n){var r=n.ref;if(r===null)e!==null&&e.ref!==null&&(n.flags|=4194816);else{if(typeof r!="function"&&typeof r!="object")throw Error(s(284));(e===null||e.ref!==r)&&(n.flags|=4194816)}}function mp(e,n,r,o,u){return Ss(n),r=Qh(e,n,r,o,void 0,u),o=Kh(),e!==null&&!wn?($h(e,n,u),er(e,n,u)):(we&&o&&zu(n),n.flags|=1,Ln(e,n,r,u),n.child)}function Sx(e,n,r,o,u,f){return Ss(n),n.updateQueue=null,r=E_(n,o,r,u),b_(e),o=Kh(),e!==null&&!wn?($h(e,n,f),er(e,n,f)):(we&&o&&zu(n),n.flags|=1,Ln(e,n,r,f),n.child)}function Mx(e,n,r,o,u){if(Ss(n),n.stateNode===null){var f=go,x=r.contextType;typeof x=="object"&&x!==null&&(f=kn(x)),f=new r(o,f),n.memoizedState=f.state!==null&&f.state!==void 0?f.state:null,f.updater=dp,n.stateNode=f,f._reactInternals=n,f=n.stateNode,f.props=o,f.state=n.memoizedState,f.refs={},Gh(n),x=r.contextType,f.context=typeof x=="object"&&x!==null?kn(x):go,f.state=n.memoizedState,x=r.getDerivedStateFromProps,typeof x=="function"&&(fp(n,r,x,o),f.state=n.memoizedState),typeof r.getDerivedStateFromProps=="function"||typeof f.getSnapshotBeforeUpdate=="function"||typeof f.UNSAFE_componentWillMount!="function"&&typeof f.componentWillMount!="function"||(x=f.state,typeof f.componentWillMount=="function"&&f.componentWillMount(),typeof f.UNSAFE_componentWillMount=="function"&&f.UNSAFE_componentWillMount(),x!==f.state&&dp.enqueueReplaceState(f,f.state,null),lc(n,o,f,u),oc(),f.state=n.memoizedState),typeof f.componentDidMount=="function"&&(n.flags|=4194308),o=!0}else if(e===null){f=n.stateNode;var A=n.memoizedProps,I=Rs(r,A);f.props=I;var $=f.context,ct=r.contextType;x=go,typeof ct=="object"&&ct!==null&&(x=kn(ct));var _t=r.getDerivedStateFromProps;ct=typeof _t=="function"||typeof f.getSnapshotBeforeUpdate=="function",A=n.pendingProps!==A,ct||typeof f.UNSAFE_componentWillReceiveProps!="function"&&typeof f.componentWillReceiveProps!="function"||(A||$!==x)&&lx(n,f,o,x),Lr=!1;var Q=n.memoizedState;f.state=Q,lc(n,o,f,u),oc(),$=n.memoizedState,A||Q!==$||Lr?(typeof _t=="function"&&(fp(n,r,_t,o),$=n.memoizedState),(I=Lr||ox(n,r,I,o,Q,$,x))?(ct||typeof f.UNSAFE_componentWillMount!="function"&&typeof f.componentWillMount!="function"||(typeof f.componentWillMount=="function"&&f.componentWillMount(),typeof f.UNSAFE_componentWillMount=="function"&&f.UNSAFE_componentWillMount()),typeof f.componentDidMount=="function"&&(n.flags|=4194308)):(typeof f.componentDidMount=="function"&&(n.flags|=4194308),n.memoizedProps=o,n.memoizedState=$),f.props=o,f.state=$,f.context=x,o=I):(typeof f.componentDidMount=="function"&&(n.flags|=4194308),o=!1)}else{f=n.stateNode,Vh(e,n),x=n.memoizedProps,ct=Rs(r,x),f.props=ct,_t=n.pendingProps,Q=f.context,$=r.contextType,I=go,typeof $=="object"&&$!==null&&(I=kn($)),A=r.getDerivedStateFromProps,($=typeof A=="function"||typeof f.getSnapshotBeforeUpdate=="function")||typeof f.UNSAFE_componentWillReceiveProps!="function"&&typeof f.componentWillReceiveProps!="function"||(x!==_t||Q!==I)&&lx(n,f,o,I),Lr=!1,Q=n.memoizedState,f.state=Q,lc(n,o,f,u),oc();var rt=n.memoizedState;x!==_t||Q!==rt||Lr||e!==null&&e.dependencies!==null&&Bu(e.dependencies)?(typeof A=="function"&&(fp(n,r,A,o),rt=n.memoizedState),(ct=Lr||ox(n,r,ct,o,Q,rt,I)||e!==null&&e.dependencies!==null&&Bu(e.dependencies))?($||typeof f.UNSAFE_componentWillUpdate!="function"&&typeof f.componentWillUpdate!="function"||(typeof f.componentWillUpdate=="function"&&f.componentWillUpdate(o,rt,I),typeof f.UNSAFE_componentWillUpdate=="function"&&f.UNSAFE_componentWillUpdate(o,rt,I)),typeof f.componentDidUpdate=="function"&&(n.flags|=4),typeof f.getSnapshotBeforeUpdate=="function"&&(n.flags|=1024)):(typeof f.componentDidUpdate!="function"||x===e.memoizedProps&&Q===e.memoizedState||(n.flags|=4),typeof f.getSnapshotBeforeUpdate!="function"||x===e.memoizedProps&&Q===e.memoizedState||(n.flags|=1024),n.memoizedProps=o,n.memoizedState=rt),f.props=o,f.state=rt,f.context=I,o=ct):(typeof f.componentDidUpdate!="function"||x===e.memoizedProps&&Q===e.memoizedState||(n.flags|=4),typeof f.getSnapshotBeforeUpdate!="function"||x===e.memoizedProps&&Q===e.memoizedState||(n.flags|=1024),o=!1)}return f=o,Ao(e,n),o=(n.flags&128)!==0,f||o?(f=n.stateNode,r=o&&typeof r.getDerivedStateFromError!="function"?null:f.render(),n.flags|=1,e!==null&&o?(n.child=As(n,e.child,null,u),n.child=As(n,null,r,u)):Ln(e,n,r,u),n.memoizedState=f.state,e=n.child):e=er(e,n,u),e}function bx(e,n,r,o){return _s(),n.flags|=256,Ln(e,n,r,o),n.child}var gp={dehydrated:null,treeContext:null,retryLane:0,hydrationErrors:null};function vp(e){return{baseLanes:e,cachePool:d_()}}function _p(e,n,r){return e=e!==null?e.childLanes&~r:0,n&&(e|=Ri),e}function Ex(e,n,r){var o=n.pendingProps,u=!1,f=(n.flags&128)!==0,x;if((x=f)||(x=e!==null&&e.memoizedState===null?!1:(qn.current&2)!==0),x&&(u=!0,n.flags&=-129),x=(n.flags&32)!==0,n.flags&=-33,e===null){if(we){if(u?Ir(n):Fr(),(e=ln)?(e=Wy(e,Vi),e=e!==null&&e.data!=="&"?e:null,e!==null&&(n.memoizedState={dehydrated:e,treeContext:Rr!==null?{id:xa,overflow:ya}:null,retryLane:536870912,hydrationErrors:null},r=i_(e),r.return=n,n.child=r,Bn=n,ln=null)):e=null,e===null)throw Dr(n);return vm(e)?n.lanes=32:n.lanes=536870912,null}return f=o.children,o=o.fallback,u?(Fr(),u=n.mode,f=sf({mode:"hidden",children:f},u),o=vs(o,u,r,null),f.return=n,o.return=n,f.sibling=o,n.child=f,o=n.child,o.memoizedState=vp(r),o.childLanes=_p(e,x,r),n.memoizedState=gp,hc(null,o)):(Ir(n),xp(n,f))}var A=e.memoizedState;if(A!==null){var I=A.dehydrated;if(I!==null)return tA(e,n,f,x,o,I,A,r)}return u?(Fr(),u=o.fallback,f=n.mode,A=e.child,I=A.sibling,o=Za(A,{mode:"hidden",children:o.children}),o.subtreeFlags=A.subtreeFlags&1206910976,I!==null?u=Za(I,u):(u=vs(u,f,r,null),u.flags|=2),u.return=n,o.return=n,o.sibling=u,n.child=o,hc(null,o),o=n.child,u=e.child.memoizedState,u===null?u=vp(r):(f=u.cachePool,f!==null?(A=Tn._currentValue,f=f.parent!==A?{parent:A,pool:A}:f):f=d_(),u={baseLanes:u.baseLanes|r,cachePool:f}),o.memoizedState=u,o.childLanes=_p(e,x,r),n.memoizedState=gp,hc(e.child,o)):(Ir(n),r=e.child,e=r.sibling,r=Za(r,{mode:"visible",children:o.children}),r.return=n,r.sibling=null,e!==null&&(x=n.deletions,x===null?(n.deletions=[e],n.flags|=16):x.push(e)),n.child=r,n.memoizedState=null,r)}function xp(e,n){return n=sf({mode:"visible",children:n},e.mode),n.return=e,e.child=n}function sf(e,n){return e=di(22,e,null,n),e.lanes=0,e}function of(e,n,r){return As(n,e.child,null,r),e=xp(n,n.pendingProps.children),e.flags|=2,n.memoizedState=null,e}function tA(e,n,r,o,u,f,x,A){if(r)return n.flags&256?(Ir(n),n.flags&=-257,of(e,n,A)):n.memoizedState!==null?(Fr(),n.child=e.child,n.flags|=128,null):(Fr(),f=u.fallback,x=n.mode,u=sf({mode:"visible",children:u.children},x),f=vs(f,x,A,null),f.flags|=2,u.return=n,f.return=n,u.sibling=f,n.child=u,As(n,e.child,null,A),u=n.child,u.memoizedState=vp(A),u.childLanes=_p(e,o,A),n.memoizedState=gp,hc(null,u));if(Ir(n),vm(f)){if(o=f.nextSibling&&f.nextSibling.dataset,o)var I=o.dgst;return o=I,o!==""&&(u=Error(s(419)),u.stack="",u.digest=o,ec({value:u,source:null,stack:null})),of(e,n,A)}if(wn||ys(e,n,A,!1),o=(A&e.childLanes)!==0,wn||o){if(zr.current!==null)return of(e,n,A);if(o=sn,o!==null&&(u=yu(o,A),u!==0&&u!==x.retryLane))throw x.retryLane=u,gs(e,u),gi(o,e,u),pp;return gm(f)||Tf(),of(e,n,A)}return gm(f)?(n.flags|=192,n.child=e.child,null):(e=x.treeContext,ln=Xi(f.nextSibling),Bn=n,we=!0,Cr=null,Vi=!1,e!==null&&s_(n,e),n=xp(n,u.children),n.flags|=134221824,n)}function Tx(e,n,r){e.lanes|=n;var o=e.alternate;o!==null&&(o.lanes|=n),Fu(e.return,n,r)}function Ax(e){for(var n=null;e!==null;){var r=e.alternate;r!==null&&ju(r)===null&&(n=e),e=e.sibling}return n}function lf(e,n,r,o,u,f){var x=e.memoizedState;x===null?e.memoizedState={isBackwards:n,rendering:null,renderingStartTime:0,last:o,tail:r,tailMode:u,treeForkCount:f}:(x.isBackwards=n,x.rendering=null,x.renderingStartTime=0,x.last=o,x.tail=r,x.tailMode=u,x.treeForkCount=f)}function yp(e){var n=e.child;for(e.child=null;n!==null;){var r=n.sibling;n.sibling=e.child,e.child=n,n=r}}function Sp(e,n,r){var o=n.pendingProps,u=o.revealOrder,f=o.tail;o=o.children;var x=qn.current;if(n.flags&128)return cc(n,x),null;var A=(x&2)!==0;if(A?(x=x&1|2,n.flags|=128):x&=1,cc(n,x),u==="backwards"&&e!==null?(yp(e),Ln(e,n,o,r),yp(e)):Ln(e,n,o,r),o=we?tc:0,!A&&e!==null&&(e.flags&128)!==0)t:for(e=n.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&Tx(e,r,n);else if(e.tag===19)Tx(e,r,n);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===n)break t;for(;e.sibling===null;){if(e.return===null||e.return===n)break t;e=e.return}e.sibling.return=e.return,e=e.sibling}switch(u){case"backwards":r=Ax(n.child),r===null?(u=n.child,n.child=null):(u=r.sibling,r.sibling=null,yp(n)),lf(n,!0,u,null,f,o);break;case"unstable_legacy-backwards":for(r=null,u=n.child,n.child=null;u!==null;){if(e=u.alternate,e!==null&&ju(e)===null){n.child=u;break}e=u.sibling,u.sibling=r,r=u,u=e}lf(n,!0,r,null,f,o);break;case"together":lf(n,!1,null,null,void 0,o);break;case"independent":n.memoizedState=null;break;default:r=Ax(n.child),r===null?(u=n.child,n.child=null):(u=r.sibling,r.sibling=null),lf(n,!1,u,r,f,o)}return n.child}function wx(e,n,r){var o=n.pendingProps;return Nr(n,n.type,o.value),Ln(e,n,o.children,r),n.child}function er(e,n,r){if(e!==null&&(n.dependencies=e.dependencies),Vr|=n.lanes,(r&n.childLanes)===0)if(e!==null){if(ys(e,n,r,!1),(r&n.childLanes)===0)return null}else return null;if(e!==null&&n.child!==e.child)throw Error(s(153));if(n.child!==null){for(e=n.child,r=Za(e,e.pendingProps),n.child=r,r.return=n;e.sibling!==null;)e=e.sibling,r=r.sibling=Za(e,e.pendingProps),r.return=n;r.sibling=null}return n.child}function Mp(e,n){return(e.lanes&n)!==0?!0:(e=e.dependencies,!!(e!==null&&Bu(e)))}function eA(e,n,r){switch(n.tag){case 3:Ve(n,n.stateNode.containerInfo),Nr(n,Tn,e.memoizedState.cache),_s();break;case 27:case 5:on(n);break;case 4:Ve(n,n.stateNode.containerInfo);break;case 10:Nr(n,n.type,n.memoizedProps.value);break;case 31:if(n.memoizedState!==null)return n.flags|=128,jh(n),null;break;case 13:var o=n.memoizedState;if(o!==null){if(o.dehydrated!==null)return Ir(n),n.flags|=128,null;o=ys(e,n,r,!1);var u=n.child.childLanes;return o||(r&u)!==0?Ex(e,n,r):(Ir(n),e=er(e,n,r),e!==null?e.sibling:null)}Ir(n);break;case 19:if(n.flags&128)return Sp(e,n,r);if(u=(e.flags&128)!==0,o=(r&n.childLanes)!==0,o||(ys(e,n,r,!1),o=(r&n.childLanes)!==0),u){if(o)return Sp(e,n,r);n.flags|=128}if(u=n.memoizedState,u!==null&&(u.rendering=null,u.tail=null,u.lastEffect=null),cc(n,qn.current),o)break;return null;case 22:return n.lanes=0,_x(e,n,r,n.pendingProps);case 24:Nr(n,Tn,e.memoizedState.cache)}return er(e,n,r)}function Rx(e,n,r){if(e!==null)if(e.memoizedProps!==n.pendingProps)wn=!0;else{if(!Mp(e,r)&&(n.flags&128)===0)return wn=!1,eA(e,n,r);wn=(e.flags&131072)!==0}else wn=!1,we&&(n.flags&1048576)!==0&&r_(n,tc,n.index);switch(n.lanes=0,n.tag){case 16:t:{var o=n.pendingProps;if(e=Es(n.elementType),n.type=e,typeof e=="function")Ch(e)?(o=Rs(e,o),n.tag=1,n=Mx(null,n,e,o,r)):(n.tag=0,n=mp(null,n,e,o,r));else{if(e!=null){var u=e.$$typeof;if(u===B){n.tag=11,n=mx(null,n,e,o,r);break t}else if(u===dt){n.tag=14,n=gx(null,n,e,o,r);break t}else if(u===X){n.tag=10,n.type=e,n=wx(null,n,r);break t}}throw n=Rt(e)||e,Error(s(306,n,""))}}return n;case 0:return mp(e,n,n.type,n.pendingProps,r);case 1:return o=n.type,u=Rs(o,n.pendingProps),Mx(e,n,o,u,r);case 3:t:{if(Ve(n,n.stateNode.containerInfo),e===null)throw Error(s(387));o=n.pendingProps;var f=n.memoizedState;u=f.element,Vh(e,n),lc(n,o,null,r);var x=n.memoizedState;if(o=x.cache,Nr(n,Tn,o),o!==f.cache&&zh(n,[Tn],r,!0),oc(),o=x.element,f.isDehydrated)if(f={element:o,isDehydrated:!1,cache:x.cache},n.updateQueue.baseState=f,n.memoizedState=f,n.flags&256){n=bx(e,n,o,r);break t}else if(o!==u){u=Bi(Error(s(424)),n),ec(u),n=bx(e,n,o,r);break t}else{switch(e=n.stateNode.containerInfo,e.nodeType){case 9:e=e.body;break;default:e=e.nodeName==="HTML"?e.ownerDocument.body:e}for(ln=Xi(e.firstChild),Bn=n,we=!0,Cr=null,Vi=!0,r=__(n,null,o,r),n.child=r;r;)r.flags=r.flags&-3|134221824,r=r.sibling}else{if(_s(),o===u){n=er(e,n,r);break t}Ln(e,n,o,r)}n=n.child}return n;case 26:return Ao(e,n),e===null?(r=Jy(n.type,null,n.pendingProps,null))?n.memoizedState=r:we||(n.stateNode=Uy(n.type,n.pendingProps,tn.current,n)):n.memoizedState=Jy(n.type,e.memoizedProps,n.pendingProps,e.memoizedState),null;case 27:return on(n),e===null&&we&&(o=n.stateNode=Zy(n.type,n.pendingProps,tn.current),Bn=n,Vi=!0,u=ln,Wr(n.type)?(_m=u,ln=Xi(o.firstChild)):ln=u),Ln(e,n,n.pendingProps.children,r),Ao(e,n),e===null&&(n.flags|=4194304),n.child;case 5:return e===null&&we&&((u=o=ln)&&(o=ZA(o,n.type,n.pendingProps,Vi),o!==null?(n.stateNode=o,Bn=n,ln=Xi(o.firstChild),Vi=!1,u=!0):u=!1),u||Dr(n)),on(n),u=n.type,f=n.pendingProps,x=e!==null?e.memoizedProps:null,o=f.children,cm(u,f)?o=null:x!==null&&cm(u,x)&&(n.flags|=32),n.memoizedState!==null&&(u=Qh(e,n,XT,null,null,r),Xo._currentValue=u),Ao(e,n),Ln(e,n,o,r),n.child;case 6:return e===null&&we&&((e=r=ln)&&(r=QA(r,n.pendingProps,Vi),r!==null?(n.stateNode=r,Bn=n,ln=null,e=!0):e=!1),e||Dr(n)),null;case 13:return Ex(e,n,r);case 4:return Ve(n,n.stateNode.containerInfo),o=n.pendingProps,e===null?n.child=As(n,null,o,r):Ln(e,n,o,r),n.child;case 11:return mx(e,n,n.type,n.pendingProps,r);case 7:return o=n.pendingProps,Ao(e,n),Ln(e,n,o,r),n.child;case 8:return Ln(e,n,n.pendingProps.children,r),n.child;case 12:return Ln(e,n,n.pendingProps.children,r),n.child;case 10:return wx(e,n,r);case 9:return u=n.type._context,o=n.pendingProps.children,Ss(n),u=kn(u),o=o(u),n.flags|=1,Ln(e,n,o,r),n.child;case 14:return gx(e,n,n.type,n.pendingProps,r);case 15:return vx(e,n,n.type,n.pendingProps,r);case 19:return Sp(e,n,r);case 31:return JT(e,n,r);case 22:return _x(e,n,r,n.pendingProps);case 24:return Ss(n),o=kn(Tn),e===null?(u=Bh(),u===null&&(u=sn,f=Ih(),u.pooledCache=f,f.refCount++,f!==null&&(u.pooledCacheLanes|=r),u=f),n.memoizedState={parent:o,cache:u},Gh(n),Nr(n,Tn,u)):((e.lanes&r)!==0&&(Vh(e,n),lc(n,null,null,r),oc()),u=e.memoizedState,f=n.memoizedState,u.parent!==o?(u={parent:o,cache:o},n.memoizedState=u,n.lanes===0&&(n.memoizedState=n.updateQueue.baseState=u),Nr(n,Tn,o)):(o=f.cache,Nr(n,Tn,o),o!==u.cache&&zh(n,[Tn],r,!0))),Ln(e,n,n.pendingProps.children,r),n.child;case 30:return n.stateNode===null&&(n.stateNode={autoName:null,paired:null,clones:null,ref:null}),o=n.pendingProps,o.name!=null&&o.name!=="auto"?n.flags|=e===null?18882560:18874368:we&&zu(n),e!==null&&e.memoizedProps.name!==o.name?n.flags|=4194816:Ao(e,n),Ln(e,n,o.children,r),n.child;case 29:throw n.pendingProps}throw Error(s(156,n.tag))}function nr(e){e.flags|=4}function bp(e,n,r,o,u){var f;if((f=(e.mode&32)!==0)&&(f=r===null?iS(n,o):iS(n,o)&&(o.src!==r.src||o.srcSet!==r.srcSet)),f){if(e.flags|=16777216,(u&335544128)===u)if(e.stateNode.complete)e.flags|=8192;else if(cy())e.flags|=8192;else throw Ts=ku,Hh}else e.flags&=-16777217}function Cx(e,n){if(n.type!=="stylesheet"||(n.state.loading&4)!==0)e.flags&=-16777217;else if(e.flags|=16777216,!aS(n))if(cy())e.flags|=8192;else throw Ts=ku,Hh}function cf(e,n){n!==null&&(e.flags|=4),e.flags&16384&&(n=e.tag!==22?Gl():536870912,e.lanes|=n,No|=n)}function pc(e,n){if(!we)switch(e.tailMode){case"visible":break;case"collapsed":for(var r=e.tail,o=null;r!==null;)r.alternate!==null&&(o=r),r=r.sibling;o===null?n||e.tail===null?e.tail=null:e.tail.sibling=null:o.sibling=null;break;default:for(n=e.tail,r=null;n!==null;)n.alternate!==null&&(r=n),n=n.sibling;r===null?e.tail=null:r.sibling=null}}function cn(e){var n=e.alternate!==null&&e.alternate.child===e.child,r=0,o=0;if(n)for(var u=e.child;u!==null;)r|=u.lanes|u.childLanes,o|=u.subtreeFlags&1206910976,o|=u.flags&1206910976,u.return=e,u=u.sibling;else for(u=e.child;u!==null;)r|=u.lanes|u.childLanes,o|=u.subtreeFlags,o|=u.flags,u.return=e,u=u.sibling;return e.subtreeFlags|=o,e.childLanes=r,n}function nA(e,n,r){var o=n.pendingProps;switch(Uh(n),n.tag){case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return cn(n),null;case 1:return cn(n),null;case 3:return r=n.stateNode,o=null,e!==null&&(o=e.memoizedState.cache),n.memoizedState.cache!==o&&(n.flags|=2048),$a(Tn),Ot(),r.pendingContext&&(r.context=r.pendingContext,r.pendingContext=null),(e===null||e.child===null)&&(xo(n)?nr(n):e===null||e.memoizedState.isDehydrated&&(n.flags&256)===0||(n.flags|=1024,Oh())),cn(n),null;case 26:var u=n.type,f=n.memoizedState;return e===null?(nr(n),f!==null?(cn(n),Cx(n,f)):(cn(n),bp(n,u,null,o,r))):f?f!==e.memoizedState?(nr(n),cn(n),Cx(n,f)):(cn(n),n.flags&=-16777217):(e=e.memoizedProps,e!==o&&nr(n),cn(n),bp(n,u,e,o,r)),null;case 27:if(D(n),r=tn.current,u=n.type,e!==null&&n.stateNode!=null)e.memoizedProps!==o&&nr(n);else{if(!o){if(n.stateNode===null)throw Error(s(166));return cn(n),n.subtreeFlags&=-33554433,null}e=dn.current,xo(n)?o_(n):(e=Zy(u,o,r),n.stateNode=e,nr(n))}return cn(n),n.subtreeFlags&=-33554433,null;case 5:if(D(n),u=n.type,e!==null&&n.stateNode!=null)e.memoizedProps!==o&&nr(n);else{if(!o){if(n.stateNode===null)throw Error(s(166));return cn(n),n.subtreeFlags&=-33554433,null}if(f=dn.current,xo(n))o_(n);else{var x=Tc(tn.current);switch(f){case 1:f=x.createElementNS("http://www.w3.org/2000/svg",u);break;case 2:f=x.createElementNS("http://www.w3.org/1998/Math/MathML",u);break;default:switch(u){case"svg":f=x.createElementNS("http://www.w3.org/2000/svg",u);break;case"math":f=x.createElementNS("http://www.w3.org/1998/Math/MathML",u);break;case"script":f=x.createElement("div"),f.innerHTML="<script><\/script>",f=f.removeChild(f.firstChild);break;case"select":f=typeof o.is=="string"?x.createElement("select",{is:o.is}):x.createElement("select"),o.multiple?f.multiple=!0:o.size&&(f.size=o.size);break;default:f=typeof o.is=="string"?x.createElement(u,{is:o.is}):x.createElement(u)}}f[j]=n,f[st]=o;t:for(x=n.child;x!==null;){if(x.tag===5||x.tag===6)f.appendChild(x.stateNode);else if(x.tag!==4&&x.tag!==27&&x.child!==null){x.child.return=x,x=x.child;continue}if(x===n)break t;for(;x.sibling===null;){if(x.return===null||x.return===n)break t;x=x.return}x.sibling.return=x.return,x=x.sibling}n.stateNode=f;t:switch(jn(f,u,o),u){case"button":case"input":case"select":case"textarea":o=!!o.autoFocus;break t;case"img":o=!0;break t;default:o=!1}o&&nr(n)}}return cn(n),n.subtreeFlags&=-33554433,bp(n,n.type,e===null?null:e.memoizedProps,n.pendingProps,r),null;case 6:if(e&&n.stateNode!=null)e.memoizedProps!==o&&nr(n);else{if(typeof o!="string"&&n.stateNode===null)throw Error(s(166));if(e=tn.current,xo(n)){if(e=n.stateNode,r=n.memoizedProps,o=null,u=Bn,u!==null)switch(u.tag){case 27:case 5:o=u.memoizedProps}e[j]=n,e=!!(e.nodeValue===r||o!==null&&o.suppressHydrationWarning===!0||Ry(e.nodeValue,r)),e||Dr(n,!0)}else e=Tc(e).createTextNode(o),e[j]=n,n.stateNode=e}return cn(n),null;case 31:if(r=n.memoizedState,e===null||e.memoizedState!==null){if(o=xo(n),r!==null){if(e===null){if(!o)throw Error(s(318));if(e=n.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(s(557));e[j]=n}else _s(),(n.flags&128)===0&&(n.memoizedState=null),n.flags|=4;cn(n),e=!1}else r=Oh(),e!==null&&e.memoizedState!==null&&(e.memoizedState.hydrationErrors=r),e=!0;if(!e)return n.flags&256?(Ti(n),n):(Ti(n),null);if((n.flags&128)!==0)throw Error(s(558))}return cn(n),null;case 13:if(o=n.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(u=xo(n),o!==null&&o.dehydrated!==null){if(e===null){if(!u)throw Error(s(318));if(u=n.memoizedState,u=u!==null?u.dehydrated:null,!u)throw Error(s(317));u[j]=n}else _s(),(n.flags&128)===0&&(n.memoizedState=null),n.flags|=4;cn(n),u=!1}else u=Oh(),e!==null&&e.memoizedState!==null&&(e.memoizedState.hydrationErrors=u),u=!0;if(!u)return n.flags&256?(Ti(n),n):(Ti(n),null)}return Ti(n),(n.flags&128)!==0?(n.lanes=r,n):(r=o!==null,e=e!==null&&e.memoizedState!==null,r&&(o=n.child,u=null,o.alternate!==null&&o.alternate.memoizedState!==null&&o.alternate.memoizedState.cachePool!==null&&(u=o.alternate.memoizedState.cachePool.pool),f=null,o.memoizedState!==null&&o.memoizedState.cachePool!==null&&(f=o.memoizedState.cachePool.pool),f!==u&&(o.flags|=2048)),r!==e&&r&&(n.child.flags|=8192),cf(n,n.updateQueue),cn(n),null);case 4:return Ot(),e===null&&am(n.stateNode.containerInfo),n.flags|=67108864,cn(n),null;case 10:return $a(n.type),cn(n),null;case 19:if(Yh(n),o=n.memoizedState,o===null)return cn(n),null;if(u=(n.flags&128)!==0,f=o.rendering,f===null)if(u)pc(o,!1);else{if(_n!==0||e!==null&&(e.flags&128)!==0)for(e=n.child;e!==null;){if(f=ju(e),f!==null){for(n.flags|=128,pc(o,!1),e=f.updateQueue,n.updateQueue=e,cf(n,e),n.subtreeFlags=0,e=r,r=n.child;r!==null;)n_(r,e),r=r.sibling;return cc(n,qn.current&1|2),we&&Qa(n,o.treeForkCount),n.child}e=e.sibling}o.tail!==null&&ne()>Sf&&(n.flags|=128,u=!0,pc(o,!1),n.lanes=4194304)}else{if(!u)if(e=ju(f),e!==null){if(n.flags|=128,u=!0,e=e.updateQueue,n.updateQueue=e,cf(n,e),pc(o,!0),o.tail===null&&o.tailMode!=="collapsed"&&o.tailMode!=="visible"&&!f.alternate&&!we)return cn(n),null}else 2*ne()-o.renderingStartTime>Sf&&r!==536870912&&(n.flags|=128,u=!0,pc(o,!1),n.lanes=4194304);o.isBackwards?(f.sibling=n.child,n.child=f):(e=o.last,e!==null?e.sibling=f:n.child=f,o.last=f)}if(o.tail!==null){e=o.tail;t:{for(r=e;r!==null;){if(r.alternate!==null){r=!1;break t}r=r.sibling}r=!0}return o.rendering=e,o.tail=e.sibling,o.renderingStartTime=ne(),e.sibling=null,f=qn.current,f=u?f&1|2:f&1,o.tailMode==="visible"||o.tailMode==="collapsed"||!r||we?cc(n,f):(r=f,oe(Xn,n),oe(qn,r),Kn===null&&(Kn=n)),we&&Qa(n,o.treeForkCount),e}return cn(n),null;case 22:case 23:return Ti(n),Wh(),o=n.memoizedState!==null,e!==null?e.memoizedState!==null!==o&&(n.flags|=8192):o&&(n.flags|=8192),o?(r&536870912)!==0&&(n.flags&128)===0&&(cn(n),n.subtreeFlags&6&&(n.flags|=8192)):cn(n),r=n.updateQueue,r!==null&&cf(n,r.retryQueue),r=null,e!==null&&e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(r=e.memoizedState.cachePool.pool),o=null,n.memoizedState!==null&&n.memoizedState.cachePool!==null&&(o=n.memoizedState.cachePool.pool),o!==r&&(n.flags|=2048),e!==null&&Re(bs),null;case 24:return r=null,e!==null&&(r=e.memoizedState.cache),n.memoizedState.cache!==r&&(n.flags|=2048),$a(Tn),cn(n),null;case 25:return null;case 30:return n.flags|=33554432,cn(n),null}throw Error(s(156,n.tag))}function iA(e,n){switch(Uh(n),n.tag){case 1:return e=n.flags,e&65536?(n.flags=e&-65537|128,n):null;case 3:return $a(Tn),Ot(),e=n.flags,(e&65536)!==0&&(e&128)===0?(n.flags=e&-65537|128,n):null;case 26:case 27:case 5:return D(n),null;case 31:if(n.memoizedState!==null){if(Ti(n),n.alternate===null)throw Error(s(340));_s()}return e=n.flags,e&65536?(n.flags=e&-65537|128,n):null;case 13:if(Ti(n),e=n.memoizedState,e!==null&&e.dehydrated!==null){if(n.alternate===null)throw Error(s(340));_s()}return e=n.flags,e&65536?(n.flags=e&-65537|128,n):null;case 19:return Yh(n),e=n.flags,e&65536?(n.flags=e&-65537|128,e=n.memoizedState,e!==null&&(e.rendering=null,e.tail=null),n.flags|=4,n):null;case 4:return Ot(),null;case 10:return $a(n.type),null;case 22:case 23:return Ti(n),Wh(),e!==null&&Re(bs),e=n.flags,e&65536?(n.flags=e&-65537|128,n):null;case 24:return $a(Tn),null;case 25:return null;default:return null}}function Dx(e,n){switch(Uh(n),n.tag){case 3:$a(Tn),Ot();break;case 26:case 27:case 5:D(n);break;case 4:Ot();break;case 31:n.memoizedState!==null&&Ti(n);break;case 13:Ti(n);break;case 19:Yh(n);break;case 10:$a(n.type);break;case 22:case 23:Ti(n),Wh(),e!==null&&Re(bs);break;case 24:$a(Tn)}}function mc(e,n){try{var r=n.updateQueue,o=r!==null?r.lastEffect:null;if(o!==null){var u=o.next;r=u;do{if((r.tag&e)===e){o=void 0;var f=r.create,x=r.inst;o=f(),x.destroy=o}r=r.next}while(r!==u)}}catch(A){Qe(n,n.return,A)}}function Br(e,n,r){try{var o=n.updateQueue,u=o!==null?o.lastEffect:null;if(u!==null){var f=u.next;o=f;do{if((o.tag&e)===e){var x=o.inst,A=x.destroy;if(A!==void 0){x.destroy=void 0,u=n;var I=r,$=A;try{$()}catch(ct){Qe(u,I,ct)}}}o=o.next}while(o!==f)}}catch(ct){Qe(n,n.return,ct)}}function Nx(e){var n=e.updateQueue;if(n!==null){var r=e.stateNode;try{y_(n,r)}catch(o){Qe(e,e.return,o)}}}function Ux(e,n,r){r.props=Rs(e.type,e.memoizedProps),r.state=e.memoizedState;try{r.componentWillUnmount()}catch(o){Qe(e,n,o)}}function Sa(e,n){try{var r=e.ref;if(r!==null){switch(e.tag){case 26:case 27:case 5:var o=e.stateNode;break;case 30:var u=e.stateNode,f=ja(e.memoizedProps,u);(u.ref===null||u.ref.name!==f)&&(u.ref=By(f)),o=u.ref;break;case 7:if(e.stateNode===null){var x=new Di(e);g(e.child,!1,jA,x,void 0,void 0),e.stateNode=x}o=e.stateNode;break;default:o=e.stateNode}typeof r=="function"?e.refCleanup=r(o):r.current=o}}catch(A){Qe(e,n,A)}}function Wn(e,n){var r=e.ref,o=e.refCleanup;if(r!==null)if(typeof o=="function")try{o()}catch(u){Qe(e,n,u)}finally{e.refCleanup=null,e=e.alternate,e!=null&&(e.refCleanup=null)}else if(typeof r=="function")try{r(null)}catch(u){Qe(e,n,u)}else r.current=null}function uf(e,n){if((e.tag===5||e.tag===27||e.tag===6)&&e.alternate===null&&n!==null)for(var r=0;r<n.length;r++)qy(e.stateNode,n[r])}function Lx(e){for(var n=e.return;n!==null&&(Tp(n)&&qy(e.stateNode,n.stateNode),!Ep(n));)n=n.return}function gc(e){for(var n=e.return;n!==null&&(Tp(n)&&YA(e.stateNode,n.stateNode),!Ep(n));)n=n.return}function Ep(e){return e.tag===5||e.tag===3||e.tag===27}function Tp(e){return e&&e.tag===7&&e.stateNode!==null}function Ap(e){var n=e.type,r=e.memoizedProps,o=e.stateNode;try{t:switch(n){case"button":case"input":case"select":case"textarea":r.autoFocus&&o.focus();break t;case"img":r.src?o.src=r.src:r.srcSet&&(o.srcset=r.srcSet)}}catch(u){Qe(e,e.return,u)}}function wp(e,n,r){try{var o=e.stateNode;CA(o,e.type,r,n),o[st]=n}catch(u){Qe(e,e.return,u)}}function Ox(e){return e.tag===5||e.tag===3||e.tag===26||e.tag===27&&Wr(e.type)||e.tag===4}function Rp(e){t:for(;;){for(;e.sibling===null;){if(e.return===null||Ox(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.tag===27&&Wr(e.type)||e.flags&2||e.child===null||e.tag===4)continue t;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function Cp(e,n,r,o){var u=e.tag;if(u===5||u===6)u=e.stateNode,n?(r.nodeType===9?r.body:r.nodeName==="HTML"?r.ownerDocument.body:r).insertBefore(u,n):(n=r.nodeType===9?r.body:r.nodeName==="HTML"?r.ownerDocument.body:r,n.appendChild(u),r=r._reactRootContainer,r!=null||n.onclick!==null||(n.onclick=_a)),uf(e,o),Jt=!0;else if(u!==4&&(u===27&&(uf(e,o),o=null,Wr(e.type)&&(r=e.stateNode,n=null)),e=e.child,e!==null))for(Cp(e,n,r,o),e=e.sibling;e!==null;)Cp(e,n,r,o),e=e.sibling}function ff(e,n,r,o){var u=e.tag;if(u===5||u===6)u=e.stateNode,n?r.insertBefore(u,n):r.appendChild(u),uf(e,o),Jt=!0;else if(u!==4&&(u===27&&(uf(e,o),o=null,Wr(e.type)&&(r=e.stateNode)),e=e.child,e!==null))for(ff(e,n,r,o),e=e.sibling;e!==null;)ff(e,n,r,o),e=e.sibling}function Px(e){var n=e.stateNode,r=e.memoizedProps;try{for(var o=e.type,u=n.attributes;u.length;)n.removeAttributeNode(u[0]);jn(n,o,r),n[j]=e,n[st]=r}catch(f){Qe(e,e.return,f)}}var df=!1,Ai=null;function zx(e){(e.tag===30||(e.subtreeFlags&33554432)!==0)&&(df=!0)}var Ma=null;function Ix(){var e=Ma;return Ma=null,e}var hi=0;function wo(e,n,r,o,u){return hi=0,Fx(e.child,n,r,o,u)}function Fx(e,n,r,o,u){for(var f=!1;e!==null;){if(e.tag===5){var x=e.stateNode;if(o!==null){var A=dm(x);o.push(A),A.view&&(f=!0)}else f||dm(x).view&&(f=!0);df=!0,Iy(x,hi===0?n:n+"_"+hi,r),hi++}else(e.tag!==22||e.memoizedState===null)&&(e.tag===30&&u||Fx(e.child,n,r,o,u)&&(f=!0));e=e.sibling}return f}function ba(e,n){for(;e!==null;)e.tag===5?Fy(e.stateNode,e.memoizedProps):(e.tag!==22||e.memoizedState===null)&&(e.tag===30&&n||ba(e.child,n)),e=e.sibling}function hf(e){if((e.subtreeFlags&18874368)!==0)for(e=e.child;e!==null;){if((e.tag!==22||e.memoizedState===null)&&(hf(e),e.tag===30&&(e.flags&18874368)!==0&&e.stateNode.paired)){var n=e.memoizedProps;if(n.name==null||n.name==="auto")throw Error(s(544));var r=n.name;n=Ya(n.default,n.share),n!=="none"&&(wo(e,r,n,null,!1)||ba(e.child,!1))}e=e.sibling}}function Dp(e,n){if(e.tag===30){var r=e.stateNode,o=e.memoizedProps,u=ja(o,r),f=Ya(o.default,r.paired?o.share:o.enter);f!=="none"?wo(e,u,f,null,!1)?(hf(e),r.paired||n||Po(e,o.onEnter)):ba(e.child,!1):hf(e)}else if((e.subtreeFlags&33554432)!==0)for(e=e.child;e!==null;)Dp(e,n),e=e.sibling;else hf(e)}function Np(e){if(Ai!==null&&Ai.size!==0){var n=Ai;if((e.subtreeFlags&18874368)!==0)for(e=e.child;e!==null;){if(e.tag!==22||e.memoizedState===null){if(e.tag===30&&(e.flags&18874368)!==0){var r=e.memoizedProps,o=r.name;if(o!=null&&o!=="auto"){var u=n.get(o);if(u!==void 0){var f=Ya(r.default,r.share);if(f!=="none"&&(wo(e,o,f,null,!1)?(f=e.stateNode,u.paired=f,f.paired=u,Po(e,r.onShare)):ba(e.child,!1)),n.delete(o),n.size===0)break}}}Np(e)}e=e.sibling}}}function Up(e){if(e.tag===30){var n=e.memoizedProps,r=ja(n,e.stateNode),o=Ai!==null?Ai.get(r):void 0,u=Ya(n.default,o!==void 0?n.share:n.exit);u!=="none"&&(wo(e,r,u,null,!1)?o!==void 0?(u=e.stateNode,o.paired=u,u.paired=o,Ai.delete(r),Po(e,n.onShare)):Po(e,n.onExit):ba(e.child,!1)),Ai!==null&&Np(e)}else if((e.subtreeFlags&33554432)!==0)for(e=e.child;e!==null;)Up(e),e=e.sibling;else Ai!==null&&Np(e)}function Bx(e){for(e=e.child;e!==null;){if(e.tag===30){var n=e.memoizedProps,r=ja(n,e.stateNode);n=Ya(n.default,n.update),e.flags&=-5,n!=="none"&&wo(e,r,n,e.memoizedState=[],!1)}else(e.subtreeFlags&33554432)!==0&&Bx(e);e=e.sibling}}function Lp(e){if((e.subtreeFlags&18874368)!==0)for(e=e.child;e!==null;){if(e.tag!==22||e.memoizedState===null){if(e.tag===30&&(e.flags&18874368)!==0){var n=e.stateNode;n.paired!==null&&(n.paired=null,ba(e.child,!1))}Lp(e)}e=e.sibling}}function pf(e){if(e.tag===30)e.stateNode.paired=null,ba(e.child,!1),Lp(e);else if((e.subtreeFlags&33554432)!==0)for(e=e.child;e!==null;)pf(e),e=e.sibling;else Lp(e)}function Hx(e){for(e=e.child;e!==null;)e.tag===30?ba(e.child,!1):(e.subtreeFlags&33554432)!==0&&Hx(e),e=e.sibling}function Op(e,n,r,o,u,f,x){for(var A=!1;n!==null;){if(n.tag===5){var I=n.stateNode;if(f!==null&&hi<f.length){var $=f[hi],ct=dm(I);($.view||ct.view)&&(A=!0);var _t;if(_t=(e.flags&4)===0)if(ct.clip)_t=!0;else{_t=$.rect;var Q=ct.rect;_t=_t.y!==Q.y||_t.x!==Q.x||_t.height!==Q.height||_t.width!==Q.width}_t&&(e.flags|=4),ct.abs?ct=!$.abs:($=$.rect,ct=ct.rect,ct=$.height!==ct.height||$.width!==ct.width),ct&&(e.flags|=32)}else e.flags|=32;(e.flags&4)!==0&&Iy(I,hi===0?r:r+"_"+hi,u),A&&(e.flags&4)!==0||(Ma===null&&(Ma=[]),Ma.push(I,hi===0?o:o+"_"+hi,n.memoizedProps)),hi++}else(n.tag!==22||n.memoizedState===null)&&(n.tag===30&&x?e.flags|=n.flags&32:Op(e,n.child,r,o,u,f,x)&&(A=!0));n=n.sibling}return A}function Gx(e,n){for(e=e.child;e!==null;){if(e.tag===30){var r=e.memoizedProps,o=e.stateNode,u=ja(r,o),f=Ya(r.default,r.update),x;x=e.memoizedState,e.memoizedState=null,o=e;var A=e.child;hi=0,u=Op(o,A,u,u,f,x,!1),(e.flags&4)!==0&&u&&Po(e,r.onUpdate)}else(e.subtreeFlags&33554432)!==0&&Gx(e);e=e.sibling}}var Hn=!1,Ye=!1,Ea=!1,Pp=!1,Vx=typeof WeakSet=="function"?WeakSet:Set,Gn=null,Ta=!1,vc=!1,mf=!1,zp=!1;function aA(e,n,r){if(e=e.containerInfo,om=qo,e=Wv(e),Mh(e)){if("selectionStart"in e)var o={start:e.selectionStart,end:e.selectionEnd};else t:{o=(o=e.ownerDocument)&&o.defaultView||window;var u=o.getSelection&&o.getSelection();if(u&&u.rangeCount!==0){o=u.anchorNode;var f=u.anchorOffset,x=u.focusNode;u=u.focusOffset;try{o.nodeType,x.nodeType}catch{o=null;break t}var A=0,I=-1,$=-1,ct=0,_t=0,Q=e,rt=null;e:for(;;){for(var Pt;Q!==o||f!==0&&Q.nodeType!==3||(I=A+f),Q!==x||u!==0&&Q.nodeType!==3||($=A+u),Q.nodeType===3&&(A+=Q.nodeValue.length),(Pt=Q.firstChild)!==null;)rt=Q,Q=Pt;for(;;){if(Q===e)break e;if(rt===o&&++ct===f&&(I=A),rt===x&&++_t===u&&($=A),(Pt=Q.nextSibling)!==null)break;Q=rt,rt=Q.parentNode}Q=Pt}o=I===-1||$===-1?null:{start:I,end:$}}else o=null}o=o||{start:0,end:0}}else o=null;for(lm={focusedElem:e,selectionRange:o},qo=!1,r=(r&335544064)===r,Gn=n,n=r?9270:1024;Gn!==null;){if(e=Gn,r&&(o=e.deletions,o!==null))for(f=0;f<o.length;f++)r&&Up(o[f]);if(e.alternate===null&&(e.flags&2)!==0)r&&zx(e),gf(r);else{if(e.tag===22){if(o=e.alternate,e.memoizedState!==null){o!==null&&o.memoizedState===null&&r&&Up(o),gf(r);continue}else if(o!==null&&o.memoizedState!==null){r&&zx(e),gf(r);continue}}o=e.child,(e.subtreeFlags&n)!==0&&o!==null?(o.return=e,Gn=o):(r&&Bx(e),gf(r))}}Ai=null}function gf(e){for(;Gn!==null;){var n=Gn,r=e,o=n.alternate,u=n.flags;switch(n.tag){case 0:case 11:case 15:break;case 1:if((u&1024)!==0&&o!==null){r=void 0,u=o.memoizedProps,o=o.memoizedState;var f=n.stateNode;try{var x=Rs(n.type,u);r=f.getSnapshotBeforeUpdate(x,o),f.__reactInternalSnapshotBeforeUpdate=r}catch(A){Qe(n,n.return,A)}}break;case 3:if((u&1024)!==0){if(o=n.stateNode.containerInfo,r=o.nodeType,r===9)mm(o);else if(r===1)switch(o.nodeName){case"HEAD":case"HTML":case"BODY":mm(o);break;default:o.textContent=""}}break;case 5:case 26:case 27:case 6:case 4:case 17:break;case 30:r&&o!==null&&(r=ja(o.memoizedProps,o.stateNode),u=n.memoizedProps,u=Ya(u.default,u.update),u!=="none"&&wo(o,r,u,o.memoizedState=[],!0));break;default:if((u&1024)!==0)throw Error(s(163))}if(o=n.sibling,o!==null){o.return=n.return,Gn=o;break}Gn=n.return}}function kx(e,n,r){var o=r.flags;switch(r.tag){case 0:case 11:case 15:Aa(e,r),o&4&&mc(5,r);break;case 1:if(Aa(e,r),o&4)if(e=r.stateNode,n===null)try{e.componentDidMount()}catch(x){Qe(r,r.return,x)}else{var u=Rs(r.type,n.memoizedProps);n=n.memoizedState;try{e.componentDidUpdate(u,n,e.__reactInternalSnapshotBeforeUpdate)}catch(x){Qe(r,r.return,x)}}o&64&&Nx(r),o&512&&Sa(r,r.return);break;case 3:if(Aa(e,r),o&64&&(e=r.updateQueue,e!==null)){if(n=null,r.child!==null)switch(r.child.tag){case 27:case 5:n=r.child.stateNode;break;case 1:n=r.child.stateNode}try{y_(e,n)}catch(x){Qe(r,r.return,x)}}break;case 27:n===null&&o&4&&Px(r);case 26:case 5:Aa(e,r),n===null&&o&4&&Ap(r),o&512&&Sa(r,r.return);break;case 12:Aa(e,r);break;case 31:Aa(e,r),o&4&&jx(e,r);break;case 13:Aa(e,r),o&4&&Yx(e,r),o&64&&(e=r.memoizedState,e!==null&&(e=e.dehydrated,e!==null&&(r=gA.bind(null,r),KA(e,r))));break;case 22:if(o=r.memoizedState!==null||Hn,!o){var f=n!==null&&n.memoizedState!==null||Ye;n=Hn,u=Ye,Hn=o,(Ye=f)&&!u?(o=2,(r.subtreeFlags&8772)!==0&&(o|=1),ra(e,r,o)):Aa(e,r),Hn=n,Ye=u}break;case 30:Aa(e,r),o&512&&Sa(r,r.return);break;case 7:o&512&&Sa(r,r.return);default:Aa(e,r)}}function Ip(e,n){for(e=e.child;e!==null;)Xx(e,n),e=e.sibling}function Xx(e,n){switch(e.tag){case 5:case 26:try{var r=e.stateNode;if(n){var o=r.style;typeof o.setProperty=="function"?o.setProperty("display","none","important"):o.display="none"}else{var u=e.stateNode,f=e.memoizedProps.style,x=f!=null&&f.hasOwnProperty("display")?f.display:null;u.style.display=x==null||typeof x=="boolean"?"":(""+x).trim()}}catch(I){Qe(e,e.return,I)}Fp(e,n);break;case 6:try{e.stateNode.nodeValue=n?"":e.memoizedProps,Jt=!0}catch(I){Qe(e,e.return,I)}break;case 18:try{var A=e.stateNode;n?zy(A,!0):zy(e.stateNode,!1)}catch(I){Qe(e,e.return,I)}break;case 22:case 23:e.memoizedState===null&&Ip(e,n);break;default:Ip(e,n)}}function Fp(e,n){if(e.subtreeFlags&67108864)for(e=e.child;e!==null;){t:{var r=e,o=n;switch(r.tag){case 4:Xx(r,o);break t;case 22:r.memoizedState===null&&Fp(r,o);break t;default:Fp(r,o)}}e=e.sibling}}function qx(e){var n=e.alternate;n!==null&&(e.alternate=null,qx(n)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(n=e.stateNode,n!==null&&ue(n)),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}var pn=null,pi=!1;function ia(e,n,r){for(r=r.child;r!==null;)Wx(e,n,r),r=r.sibling}function Wx(e,n,r){if(ae&&typeof ae.onCommitFiberUnmount=="function")try{ae.onCommitFiberUnmount(Zt,r)}catch{}switch(r.tag){case 26:Ye||Wn(r,n),ia(e,n,r),r.memoizedState?r.memoizedState.count--:r.stateNode&&!Ye&&(r=r.stateNode,r.parentNode.removeChild(r));break;case 27:Ye||Wn(r,n),gc(r);var o=pn,u=pi;Wr(r.type)&&(pn=r.stateNode,pi=!1),ia(e,n,r),Qy(r.stateNode,r.type,r.memoizedProps),pn=o,pi=u;break;case 5:Ye||Wn(r,n),gc(r);case 6:if(r.tag===6&&gc(r),o=pn,u=pi,pn=null,ia(e,n,r),pn=o,pi=u,pn!==null)if(pi)try{(pn.nodeType===9?pn.body:pn.nodeName==="HTML"?pn.ownerDocument.body:pn).removeChild(r.stateNode),Jt=!0}catch(f){Qe(r,n,f)}else try{pn.removeChild(r.stateNode),Jt=!0}catch(f){Qe(r,n,f)}break;case 18:pn!==null&&(pi?(e=pn,Py(e.nodeType===9?e.body:e.nodeName==="HTML"?e.ownerDocument.body:e,r.stateNode),Wo(e)):Py(pn,r.stateNode));break;case 4:o=pn,u=pi,pn=r.stateNode.containerInfo,pi=!0,ia(e,n,r),pn=o,pi=u;break;case 0:case 11:case 14:case 15:Br(2,r,n),Ye||Br(4,r,n),ia(e,n,r);break;case 1:Ye||(Wn(r,n),o=r.stateNode,typeof o.componentWillUnmount=="function"&&Ux(r,n,o)),ia(e,n,r);break;case 21:ia(e,n,r);break;case 22:Ye=(o=Ye)||r.memoizedState!==null,ia(e,n,r),Ye=o;break;case 30:Wn(r,n),ia(e,n,r);break;case 7:Ye||Wn(r,n),ia(e,n,r);break;default:ia(e,n,r)}}function jx(e,n){if(n.memoizedState===null&&(e=n.alternate,e!==null&&(e=e.memoizedState,e!==null))){e=e.dehydrated;try{Wo(e)}catch(r){Qe(n,n.return,r)}}}function Yx(e,n){if(n.memoizedState===null&&(e=n.alternate,e!==null&&(e=e.memoizedState,e!==null&&(e=e.dehydrated,e!==null))))try{Wo(e)}catch(r){Qe(n,n.return,r)}}function rA(e){switch(e.tag){case 31:case 13:case 19:var n=e.stateNode;return n===null&&(n=e.stateNode=new Vx),n;case 22:return e=e.stateNode,n=e._retryCache,n===null&&(n=e._retryCache=new Vx),n;default:throw Error(s(435,e.tag))}}function vf(e,n){var r=rA(e);n.forEach(function(o){if(!r.has(o)){r.add(o);var u=vA.bind(null,e,o);o.then(u,u)}})}function ai(e,n,r){var o=n.deletions;if(o!==null)for(var u=0;u<o.length;u++){var f=o[u],x=e,A=n,I=A;t:for(;I!==null;){switch(I.tag){case 27:if(Wr(I.type)){pn=I.stateNode,pi=!1;break t}break;case 5:pn=I.stateNode,pi=!1;break t;case 3:case 4:pn=I.stateNode.containerInfo,pi=!0;break t}I=I.return}if(pn===null)throw Error(s(160));Wx(x,A,f),pn=null,pi=!1,x=f.alternate,x!==null&&(x.return=null),f.return=null}if(n.subtreeFlags&13886)for(n=n.child;n!==null;)Zx(n,e,r),n=n.sibling}var aa=null;function Zx(e,n,r){var o=e.alternate,u=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:if(u&4&&(o=e.updateQueue,o=o!==null?o.events:null,o!==null))for(var f=0;f<o.length;f++){var x=o[f];x.ref.impl=x.nextImpl}ai(n,e,r),ri(e),u&4&&(Br(3,e,e.return),mc(3,e),Br(5,e,e.return));break;case 1:ai(n,e,r),ri(e),u&512&&(Ye||o===null||Wn(o,o.return)),u&64&&Hn&&(e=e.updateQueue,e!==null&&(n=e.callbacks,n!==null&&(r=e.shared.hiddenCallbacks,e.shared.hiddenCallbacks=r===null?n:r.concat(n))));break;case 26:if(f=aa,ai(n,e,r),ri(e),u&512&&(Ye||o===null||Wn(o,o.return)),u&4)if(u=o!==null?o.memoizedState:null,r=e.memoizedState,o===null)if(r===null)if(e.stateNode===null)if(Hn)e.stateNode=Uy(e.type,e.memoizedProps,n.containerInfo,e);else{t:{n=e.type,r=e.memoizedProps,u=f.ownerDocument||f;e:switch(n){case"title":o=u.getElementsByTagName("title")[0],(!o||o[Yt]||o[j]||o.namespaceURI==="http://www.w3.org/2000/svg"||o.hasAttribute("itemprop"))&&(o=u.createElement(n),u.head.insertBefore(o,u.querySelector("head > title"))),jn(o,n,r),o[j]=e,be(o),n=o;break t;case"link":if(f=nS("link","href",u).get(n+(r.href||""))){for(x=0;x<f.length;x++)if(o=f[x],o.getAttribute("href")===(r.href==null||r.href===""?null:r.href)&&o.getAttribute("rel")===(r.rel==null?null:r.rel)&&o.getAttribute("title")===(r.title==null?null:r.title)&&o.getAttribute("crossorigin")===(r.crossOrigin==null?null:r.crossOrigin)){f.splice(x,1);break e}}o=u.createElement(n),jn(o,n,r),u.head.appendChild(o);break;case"meta":if(f=nS("meta","content",u).get(n+(r.content||""))){for(x=0;x<f.length;x++)if(o=f[x],o.getAttribute("content")===(r.content==null?null:""+r.content)&&o.getAttribute("name")===(r.name==null?null:r.name)&&o.getAttribute("property")===(r.property==null?null:r.property)&&o.getAttribute("http-equiv")===(r.httpEquiv==null?null:r.httpEquiv)&&o.getAttribute("charset")===(r.charSet==null?null:r.charSet)){f.splice(x,1);break e}}o=u.createElement(n),jn(o,n,r),u.head.appendChild(o);break;default:throw Error(s(468,n))}o[j]=e,be(o),n=o}e.stateNode=n}else Hn||Mm(f,e.type,e.stateNode);else e.stateNode=eS(f,r,e.memoizedProps);else u!==r?(u===null?(n=o.stateNode,n===null||Ye||n.parentNode.removeChild(n)):u.count--,r===null?Hn||Mm(f,e.type,e.stateNode):eS(f,r,e.memoizedProps)):r===null&&e.stateNode!==null&&wp(e,e.memoizedProps,o.memoizedProps);break;case 27:ai(n,e,r),ri(e),u&512&&(Ye||o===null||Wn(o,o.return)),o!==null&&u&4&&wp(e,e.memoizedProps,o.memoizedProps);break;case 5:if(f=Ea,Ea=!1,ai(n,e,r),Ea=f,ri(e),u&512&&(Ye||o===null||Wn(o,o.return)),e.flags&32){n=e.stateNode;try{lo(n,""),Jt=!0}catch(ct){Qe(e,e.return,ct)}}u&4&&e.stateNode!=null&&(n=e.memoizedProps,wp(e,n,o!==null?o.memoizedProps:n)),u&1024&&(Pp=!0);break;case 6:if(ai(n,e,r),ri(e),u&4){if(e.stateNode===null)throw Error(s(162));n=e.memoizedProps,r=e.stateNode;try{r.nodeValue=n,Jt=!0}catch(ct){Qe(e,e.return,ct)}}break;case 3:if(Jt=!1,Uf=null,f=aa,aa=Ac(n.containerInfo),ai(n,e,r),aa=f,ri(e),u&4&&o!==null&&o.memoizedState.isDehydrated)try{Wo(n.containerInfo)}catch(ct){Qe(e,e.return,ct)}Pp&&(Pp=!1,Qx(e)),Jt=!1;break;case 4:u=Ea,Ea=Hn,o=hn(),f=aa,aa=Ac(e.stateNode.containerInfo),ai(n,e,r),ri(e),aa=f,Jt&&vc&&(mf=!0),Jt=o,Ea=u;break;case 12:ai(n,e,r),ri(e);break;case 31:ai(n,e,r),ri(e),u&4&&(n=e.updateQueue,n!==null&&(e.updateQueue=null,vf(e,n)));break;case 13:ai(n,e,r),ri(e),e.child.flags&8192&&e.memoizedState!==null!=(o!==null&&o.memoizedState!==null)&&(yf=ne()),u&4&&(n=e.updateQueue,n!==null&&(e.updateQueue=null,vf(e,n)));break;case 22:f=e.memoizedState!==null,x=o!==null&&o.memoizedState!==null;var A=Hn,I=Ye,$=Ea;Hn=A||f,Ea=$||f,Ye=I||x,ai(n,e,r),Ye=I,Ea=$,Hn=A,ri(e),u&8192&&(n=e.stateNode,n._visibility=f?n._visibility&-2:n._visibility|1,!f||o===null||x||Hn||Ye||(n=x||Ye,r=Hn,o=Ye,Hn=f||Hn,Ye=n,Hr(e,2),Hn=r,Ye=o),!f&&Ea||Ip(e,f)),u&4&&(n=e.updateQueue,n!==null&&(r=n.retryQueue,r!==null&&(n.retryQueue=null,vf(e,r))));break;case 19:ai(n,e,r),ri(e),u&4&&(n=e.updateQueue,n!==null&&(e.updateQueue=null,vf(e,n)));break;case 30:u&512&&(Ye||o===null||Wn(o,o.return)),u=hn(),f=vc,x=(r&335544064)===r,A=e.memoizedProps,vc=x&&Ya(A.default,A.update)!=="none",ai(n,e,r),ri(e),x&&o!==null&&Jt&&(e.flags|=4),vc=f,Jt=u;break;case 21:break;case 7:u&512&&(Ye||o===null||Wn(o,o.return)),o&&o.stateNode!==null&&(o.stateNode._fragmentFiber=e);default:ai(n,e,r),ri(e)}}function ri(e){var n=e.flags;if(n&2){try{for(var r,o=e.return;o!==null;){if(Ox(o)){r=o;break}o=o.return}o=null;for(var u=e.return;u!==null;){if(Tp(u)){var f=u.stateNode;o===null?o=[f]:o.push(f)}if(Ep(u))break;u=u.return}var x=o;if(r==null)throw Error(s(160));switch(r.tag){case 27:var A=r.stateNode,I=Rp(e);ff(e,I,A,x);break;case 5:var $=r.stateNode;r.flags&32&&(lo($,""),r.flags&=-33);var ct=Rp(e);ff(e,ct,$,x);break;case 3:case 4:var _t=r.stateNode.containerInfo,Q=Rp(e);Cp(e,Q,_t,x);break;default:throw Error(s(161))}}catch(rt){Qe(e,e.return,rt)}e.flags&=-3}n&4096&&(e.flags&=-4097)}function Qx(e){if(e.subtreeFlags&1024)for(e=e.child;e!==null;){var n=e;Qx(n),n.tag===5&&n.flags&1024&&(n=n.stateNode,qo=!0,n.reset(),qo=!1),e=e.sibling}}function Ro(e,n){if(n.subtreeFlags&9270)for(n=n.child;n!==null;)Kx(n,e),n=n.sibling;else Gx(n)}function Kx(e,n){var r=e.alternate;if(r===null)Dp(e,!1);else switch(e.tag){case 3:if(zp=Ta=!1,Ix(),Ro(n,e),!Ta&&!mf){if(e=Ma,e!==null)for(var o=0;o<e.length;o+=3){r=e[o];var u=e[o+1];Fy(r,e[o+2]),r=r.ownerDocument.documentElement,r!==null&&r.animate({opacity:[0,0],pointerEvents:["none","none"]},{duration:0,fill:"forwards",pseudoElement:"::view-transition-group("+u+")"})}e=n.containerInfo,e=e.nodeType===9?e.documentElement:e.ownerDocument.documentElement,e!==null&&e.style.viewTransitionName===""&&(e.style.viewTransitionName="none",e.animate({opacity:[0,0],pointerEvents:["none","none"]},{duration:0,fill:"forwards",pseudoElement:"::view-transition-group(root)"}),e.animate({width:[0,0],height:[0,0]},{duration:0,fill:"forwards",pseudoElement:"::view-transition"})),zp=!0}Ma=null;break;case 5:Ro(n,e);break;case 4:o=Ta,Ta=!1,Ro(n,e),Ta&&(mf=!0),Ta=o;break;case 22:e.memoizedState===null&&(r.memoizedState!==null?Dp(e,!1):Ro(n,e));break;case 30:o=Ta,u=Ix(),Ta=!1,Ro(n,e),Ta&&(e.flags|=4);var f=e.memoizedProps,x=e.stateNode;n=ja(f,x),x=ja(r.memoizedProps,x);var A=Ya(f.default,f.update);A==="none"?n=!1:(f=r.memoizedState,r.memoizedState=null,r=e.child,hi=0,n=Op(e,r,n,x,A,f,!0),hi!==(f===null?0:f.length)&&(e.flags|=32)),(e.flags&4)!==0&&n?(Po(e,e.memoizedProps.onUpdate),Ma=u):u!==null&&(u.push.apply(u,Ma),Ma=u),Ta=(e.flags&32)!==0?!0:o;break;default:Ro(n,e)}}function Aa(e,n){if(n.subtreeFlags&8772)for(n=n.child;n!==null;)kx(e,n.alternate,n),n=n.sibling}function Hr(e,n){for(e=e.child;e!==null;){var r=e,o=n;switch(r.tag){case 0:case 11:case 14:case 15:Br(4,r,r.return),Hr(r,o);break;case 1:Wn(r,r.return);var u=r.stateNode;typeof u.componentWillUnmount=="function"&&Ux(r,r.return,u),Hr(r,o);break;case 27:(o&2)!==0&&Qy(r.stateNode,r.type,r.memoizedProps);case 5:Wn(r,r.return),r.tag!==5&&r.tag!==27||gc(r),Hr(r,o);break;case 6:gc(r);break;case 26:Wn(r,r.return),u=r.stateNode,r.memoizedState!==null||u===null||Ye||u.parentNode.removeChild(u),Hr(r,o);break;case 22:r.memoizedState===null&&Hr(r,o);break;case 30:Wn(r,r.return),Hr(r,o);break;case 7:Wn(r,r.return);default:Hr(r,o)}e=e.sibling}}function ra(e,n,r){for(r=(n.subtreeFlags&8772)!==0?r:r&-2,n=n.child;n!==null;){var o=n.alternate,u=e,f=n,x=f.flags,A=(r&1)!==0;switch(f.tag){case 0:case 11:case 15:ra(u,f,r),mc(4,f);break;case 1:if(ra(u,f,r),o=f,u=o.stateNode,typeof u.componentDidMount=="function")try{u.componentDidMount()}catch(ct){Qe(o,o.return,ct)}if(o=f,u=o.updateQueue,u!==null){var I=o.stateNode;try{var $=u.shared.hiddenCallbacks;if($!==null)for(u.shared.hiddenCallbacks=null,u=0;u<$.length;u++)x_($[u],I)}catch(ct){Qe(o,o.return,ct)}}A&&x&64&&Nx(f),Sa(f,f.return);break;case 27:(r&2)!==0&&Px(f);case 5:f.tag!==5&&f.tag!==27||Lx(f),ra(u,f,r),A&&o===null&&x&4&&Ap(f),Sa(f,f.return);break;case 6:Lx(f);break;case 26:I=f.stateNode,f.memoizedState!==null||I===null||Hn||Mm(Ac(I.ownerDocument),f.type,I),ra(u,f,r),A&&o===null&&x&4&&Ap(f),Sa(f,f.return);break;case 12:ra(u,f,r);break;case 31:ra(u,f,r),A&&x&4&&jx(u,f);break;case 13:ra(u,f,r),A&&x&4&&Yx(u,f);break;case 22:f.memoizedState===null&&ra(u,f,r),Sa(f,f.return);break;case 30:ra(u,f,r),Sa(f,f.return);break;case 7:Sa(f,f.return);default:ra(u,f,r)}n=n.sibling}}function Bp(e,n){var r=null;e!==null&&e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(r=e.memoizedState.cachePool.pool),e=null,n.memoizedState!==null&&n.memoizedState.cachePool!==null&&(e=n.memoizedState.cachePool.pool),e!==r&&(e!=null&&e.refCount++,r!=null&&nc(r))}function Hp(e,n){e=null,n.alternate!==null&&(e=n.alternate.memoizedState.cache),n=n.memoizedState.cache,n!==e&&(n.refCount++,e!=null&&nc(e))}function ki(e,n,r,o){var u=(r&335544064)===r;if(n.subtreeFlags&(u?10262:10256))for(n=n.child;n!==null;)$x(e,n,r,o),n=n.sibling;else u&&Hx(n)}function $x(e,n,r,o){var u=(r&335544064)===r;u&&n.alternate===null&&n.return!==null&&n.return.alternate!==null&&pf(n);var f=n.flags;switch(n.tag){case 0:case 11:case 15:ki(e,n,r,o),f&2048&&mc(9,n);break;case 1:ki(e,n,r,o);break;case 3:ki(e,n,r,o),u&&zp&&(e=e.containerInfo,e=e.nodeType===9?e.body:e.nodeName==="HTML"?e.ownerDocument.body:e,e.style.viewTransitionName==="root"&&(e.style.viewTransitionName=""),e=e.ownerDocument.documentElement,e!==null&&e.style.viewTransitionName==="none"&&(e.style.viewTransitionName="")),f&2048&&(f=null,n.alternate!==null&&(f=n.alternate.memoizedState.cache),n=n.memoizedState.cache,n!==f&&(n.refCount++,f!=null&&nc(f)));break;case 12:if(f&2048){ki(e,n,r,o),f=n.stateNode;try{var x=n.memoizedProps,A=x.id,I=x.onPostCommit;typeof I=="function"&&I(A,n.alternate===null?"mount":"update",f.passiveEffectDuration,-0)}catch($){Qe(n,n.return,$)}}else ki(e,n,r,o);break;case 31:ki(e,n,r,o);break;case 13:ki(e,n,r,o);break;case 23:break;case 22:x=n.stateNode,A=n.alternate,n.memoizedState!==null?(u&&A!==null&&A.memoizedState===null&&pf(A),x._visibility&2?ki(e,n,r,o):_c(e,n)):(u&&A!==null&&A.memoizedState!==null&&pf(n),x._visibility&2?ki(e,n,r,o):(x._visibility|=2,Co(e,n,r,o,(n.subtreeFlags&10256)!==0||!1))),f&2048&&Bp(A,n);break;case 24:ki(e,n,r,o),f&2048&&Hp(n.alternate,n);break;case 30:u&&(f=n.alternate,f!==null&&(ba(f.child,!0),ba(n.child,!0))),ki(e,n,r,o);break;default:ki(e,n,r,o)}}function Co(e,n,r,o,u){for(u=u&&((n.subtreeFlags&10256)!==0||!1),n=n.child;n!==null;){var f=e,x=n,A=r,I=o,$=x.flags;switch(x.tag){case 0:case 11:case 15:Co(f,x,A,I,u),mc(8,x);break;case 23:break;case 22:var ct=x.stateNode;x.memoizedState!==null?ct._visibility&2?Co(f,x,A,I,u):_c(f,x):(ct._visibility|=2,Co(f,x,A,I,u)),u&&$&2048&&Bp(x.alternate,x);break;case 24:Co(f,x,A,I,u),u&&$&2048&&Hp(x.alternate,x);break;default:Co(f,x,A,I,u)}n=n.sibling}}function _c(e,n){if(n.subtreeFlags&10256)for(n=n.child;n!==null;){var r=e,o=n,u=o.flags;switch(o.tag){case 22:_c(r,o),u&2048&&Bp(o.alternate,o);break;case 24:_c(r,o),u&2048&&Hp(o.alternate,o);break;default:_c(r,o)}n=n.sibling}}var Cs=8192;function Ds(e,n,r){if(e.subtreeFlags&Cs)for(e=e.child;e!==null;)Jx(e,n,r),e=e.sibling}function Jx(e,n,r){switch(e.tag){case 26:Ds(e,n,r),e.flags&Cs&&(e.memoizedState!==null?fw(r,aa,e.memoizedState,e.memoizedProps):(e=e.stateNode,(n&335544128)===n&&sS(r,e)));break;case 5:Ds(e,n,r),e.flags&Cs&&(e=e.stateNode,(n&335544128)===n&&sS(r,e));break;case 3:case 4:var o=aa;aa=Ac(e.stateNode.containerInfo),Ds(e,n,r),aa=o;break;case 22:e.memoizedState===null&&(o=e.alternate,o!==null&&o.memoizedState!==null?(o=Cs,Cs=16777216,Ds(e,n,r),Cs=o):Ds(e,n,r));break;case 30:if((e.flags&Cs)!==0&&(o=e.memoizedProps.name,o!=null&&o!=="auto")){var u=e.stateNode;u.paired=null,Ai===null&&(Ai=new Map),Ai.set(o,u)}Ds(e,n,r);break;default:Ds(e,n,r)}}function ty(e){var n=e.alternate;if(n!==null&&(e=n.child,e!==null)){n.child=null;do n=e.sibling,e.sibling=null,e=n;while(e!==null)}}function xc(e){var n=e.deletions;if((e.flags&16)!==0){if(n!==null)for(var r=0;r<n.length;r++){var o=n[r];Gn=o,ny(o,e)}ty(e)}if(e.subtreeFlags&10256)for(e=e.child;e!==null;)ey(e),e=e.sibling}function ey(e){switch(e.tag){case 0:case 11:case 15:xc(e),e.flags&2048&&Br(9,e,e.return);break;case 3:xc(e);break;case 12:xc(e);break;case 22:var n=e.stateNode;e.memoizedState!==null&&n._visibility&2&&(e.return===null||e.return.tag!==13)?(n._visibility&=-3,_f(e)):xc(e);break;default:xc(e)}}function _f(e){var n=e.deletions;if((e.flags&16)!==0){if(n!==null)for(var r=0;r<n.length;r++){var o=n[r];Gn=o,ny(o,e)}ty(e)}for(e=e.child;e!==null;){switch(n=e,n.tag){case 0:case 11:case 15:Br(8,n,n.return),_f(n);break;case 22:r=n.stateNode,r._visibility&2&&(r._visibility&=-3,_f(n));break;default:_f(n)}e=e.sibling}}function ny(e,n){for(;Gn!==null;){var r=Gn;switch(r.tag){case 0:case 11:case 15:Br(8,r,n);break;case 23:case 22:if(r.memoizedState!==null&&r.memoizedState.cachePool!==null){var o=r.memoizedState.cachePool.pool;o!=null&&o.refCount++}break;case 24:nc(r.memoizedState.cache)}if(o=r.child,o!==null)o.return=r,Gn=o;else t:for(r=e;Gn!==null;){o=Gn;var u=o.sibling,f=o.return;if(qx(o),o===r){Gn=null;break t}if(u!==null){u.return=f,Gn=u;break t}Gn=f}}}var sA={getCacheForType:function(e){var n=kn(Tn),r=n.data.get(e);return r===void 0&&(r=e(),n.data.set(e,r)),r},cacheSignal:function(){return kn(Tn).controller.signal}},oA=typeof WeakMap=="function"?WeakMap:Map,Xe=0,sn=null,Ce=null,Ne=0,Ze=0,wi=null,Gr=!1,Do=!1,Gp=!1,ir=0,_n=0,Vr=0,Ns=0,xf=0,Ri=0,No=0,yc=null,mi=null,Vp=!1,yf=0,iy=0,Sf=1/0,Mf=null,kr=null,mn=0,sa=null,Us=null,wa=0,kp=0,Xp=null,ay=null,Uo=null,Lo=null,Oo=null,Sc=0,bf=null;function Ci(){return(Xe&2)!==0&&Ne!==0?Ne&-Ne:Mt.T!==null?tm():Su()}function ry(){if(Ri===0)if((Ne&536870912)===0||we){var e=ds;ds<<=1,(ds&3932160)===0&&(ds=262144),Ri=e}else Ri=536870912;return e=Xn.current,e!==null&&(e.flags|=32),Ri}function Po(e,n){if(n!=null){var r=e.stateNode,o=r.ref;o===null&&(o=r.ref=By(ja(e.memoizedProps,r))),Lo===null&&(Lo=[]),Lo.push(n.bind(null,o))}}function gi(e,n,r){(e===sn&&(Ze===2||Ze===9)||e.cancelPendingCommit!==null)&&(zo(e,0),Xr(e,Ne,Ri,!1)),Er(e,r),((Xe&2)===0||e!==sn)&&(e===sn&&((Xe&2)===0&&(Ns|=r),_n===4&&Xr(e,Ne,Ri,!1)),Ra(e))}function sy(e,n,r){if((Xe&6)!==0)throw Error(s(327));var o=!r&&(n&127)===0&&(n&e.expiredLanes)===0||Mr(e,n),u=o?uA(e,n):Wp(e,n,!0),f=o;do{if(u===0){Do&&!o&&Xr(e,n,0,!1);break}else{if(r=e.current.alternate,f&&!lA(r)){u=Wp(e,n,!1),f=!1;continue}if(u===2){if(f=n,e.errorRecoveryDisabledLanes&f)var x=0;else x=e.pendingLanes&-536870913,x=x!==0?x:x&536870912?536870912:0;if(x!==0){n=x;t:{var A=e;u=yc;var I=A.current.memoizedState.isDehydrated;if(I&&(zo(A,x).flags|=256),x=Wp(A,x,!1),x!==2&&x!==6){if(Gp&&!I){A.errorRecoveryDisabledLanes|=f,Ns|=f,u=4;break t}f=mi,mi=u,f!==null&&(mi===null?mi=f:mi.push.apply(mi,f))}u=x}if(f=!1,u!==2)continue}}if(u===1){zo(e,0),Xr(e,n,0,!0);break}t:{switch(o=e,f=u,f){case 0:case 1:throw Error(s(345));case 4:if((n&4194048)!==n&&(n&62914560)!==n)break;case 6:Xr(o,n,Ri,!Gr);break t;case 2:mi=null;break;case 3:case 5:break;default:throw Error(s(329))}if((n&62914560)===n&&(u=yf+300-ne(),10<u)){if(Xr(o,n,Ri,!Gr),Sr(o,0,!0)!==0)break t;wa=n,o.timeoutHandle=fm(oy.bind(null,o,r,mi,Mf,Vp,n,Ri,Ns,No,Gr,f,"Throttled",-0,0),u);break t}oy(o,r,mi,Mf,Vp,n,Ri,Ns,No,Gr,f,null,-0,0)}}break}while(!0);Ra(e)}function oy(e,n,r,o,u,f,x,A,I,$,ct,_t,Q,rt){e.timeoutHandle=-1;var Pt=n.subtreeFlags,Qt=(f&335544064)===f;if(_t=null,(Qt||Pt&8192||(Pt&16785408)===16785408)&&(_t={stylesheets:null,count:0,imgCount:0,imgBytes:0,suspenseyImages:[],waitingForImages:!0,waitingForViewTransition:!1,unsuspend:_a},Ai=null,Jx(n,f,_t),Qt&&(Pt=_t,Qt=e.containerInfo,Qt=(Qt.nodeType===9?Qt:Qt.ownerDocument).__reactViewTransition,Qt!=null&&(Pt.count++,Pt.waitingForViewTransition=!0,Pt=Cc.bind(Pt),Qt.finished.then(Pt,Pt))),Pt=(f&62914560)===f?yf-ne():(f&4194048)===f?iy-ne():0,Pt=dw(_t,Pt),Pt!==null)){wa=f,e.cancelPendingCommit=Pt(my.bind(null,e,n,f,r,o,u,x,A,I,$,ct,_t,null,Q,rt)),Xr(e,f,x,!$);return}my(e,n,f,r,o,u,x,A,I,$,ct,_t)}function lA(e){for(var n=e;;){var r=n.tag;if((r===0||r===11||r===15)&&n.flags&16384&&(r=n.updateQueue,r!==null&&(r=r.stores,r!==null)))for(var o=0;o<r.length;o++){var u=r[o],f=u.getSnapshot;u=u.value;try{if(!Ei(f(),u))return!1}catch{return!1}}if(r=n.child,n.subtreeFlags&16384&&r!==null)r.return=n,n=r;else{if(n===e)break;for(;n.sibling===null;){if(n.return===null||n.return===e)return!0;n=n.return}n.sibling.return=n.return,n=n.sibling}}return!0}function Xr(e,n,r,o){n=Hl(e,n),n&=~xf,n&=~Ns,e.suspendedLanes|=n,e.pingedLanes&=~n,o&&(e.warmLanes|=n),o=e.expirationTimes;for(var u=n;0<u;){var f=31-xe(u),x=1<<f;o[f]=-1,u&=~x}r!==0&&_u(e,r,n)}function Ef(){return(Xe&6)===0?(Mc(0),!1):!0}function qp(){if(Ce!==null){if(Ze===0)var e=Ce.return;else e=Ce,Ka=xs=null,Jh(e),Mo=null,rc=0,e=Ce;for(;e!==null;)Dx(e.alternate,e),e=e.return;Ce=null}}function zo(e,n){var r=e.timeoutHandle;return r!==-1&&(e.timeoutHandle=-1,UA(r)),r=e.cancelPendingCommit,r!==null&&(e.cancelPendingCommit=null,r()),wa=0,qp(),sn=e,Ce=r=Za(e.current,null),Ne=n,Ze=0,wi=null,Gr=!1,Do=Mr(e,n),Gp=!1,No=Ri=xf=Ns=Vr=_n=0,mi=yc=null,Vp=!1,ir=Hl(e,n),Nu(),r}function ly(e,n){ye=null,Mt.H=nf,n===So||n===Vu?(n=m_(),Ze=3):n===Hh?(n=m_(),Ze=4):Ze=n===pp?8:n!==null&&typeof n=="object"&&typeof n.then=="function"?6:1,wi=n,Ce===null&&(_n=1,af(e,Bi(n,e.current)))}function cy(){var e=Xn.current;return e===null?!0:(Ne&4194048)===Ne?Kn===null:(Ne&62914560)===Ne||(Ne&536870912)!==0?e===Kn:!1}function uy(){var e=Mt.H;return Mt.H=nf,e===null?nf:e}function fy(){var e=Mt.A;return Mt.A=sA,e}function Tf(){_n=4,Gr||(Ne&4194048)!==Ne&&Xn.current!==null||(Do=!0),(Vr&134217727)===0&&(Ns&134217727)===0||sn===null||Xr(sn,Ne,Ri,!1)}function Wp(e,n,r){var o=Xe;Xe|=2;var u=uy(),f=fy();(sn!==e||Ne!==n)&&(Mf=null,zo(e,n)),n=!1;var x=_n;t:do try{if(Ze!==0&&Ce!==null){var A=Ce,I=wi;switch(Ze){case 8:qp(),x=6;break t;case 3:case 2:case 9:case 6:Xn.current===null&&(n=!0);var $=Ze;if(Ze=0,wi=null,Io(e,A,I,$),r&&Do){x=0;break t}break;default:$=Ze,Ze=0,wi=null,Io(e,A,I,$)}}cA(),x=_n;break}catch(ct){ly(e,ct)}while(!0);return n&&e.shellSuspendCounter++,Ka=xs=null,Xe=o,Mt.H=u,Mt.A=f,Ce===null&&(sn=null,Ne=0,Nu()),x}function cA(){for(;Ce!==null;)dy(Ce)}function uA(e,n){var r=Xe;Xe|=2;var o=uy(),u=fy();sn!==e||Ne!==n?(Mf=null,Sf=ne()+500,zo(e,n)):Do=Mr(e,n);t:do try{if(Ze!==0&&Ce!==null){n=Ce;var f=wi;e:switch(Ze){case 1:Ze=0,wi=null,Io(e,n,f,1);break;case 2:case 9:if(h_(f)){Ze=0,wi=null,hy(n);break}n=function(){Ze!==2&&Ze!==9||sn!==e||(Ze=7),Ra(e)},f.then(n,n);break t;case 3:Ze=7;break t;case 4:Ze=5;break t;case 7:h_(f)?(Ze=0,wi=null,hy(n)):(Ze=0,wi=null,Io(e,n,f,7));break;case 5:var x=null;switch(Ce.tag){case 26:x=Ce.memoizedState;case 5:case 27:var A=Ce;if(x?aS(x):A.stateNode.complete){Ze=0,wi=null;var I=A.sibling;if(I!==null)Ce=I;else{var $=A.return;$!==null?(Ce=$,Af($)):Ce=null}break e}}Ze=0,wi=null,Io(e,n,f,5);break;case 6:Ze=0,wi=null,Io(e,n,f,6);break;case 8:qp(),_n=6;break t;default:throw Error(s(462))}}fA();break}catch(ct){ly(e,ct)}while(!0);return Ka=xs=null,Mt.H=o,Mt.A=u,Xe=r,Ce!==null?0:(sn=null,Ne=0,Nu(),_n)}function fA(){for(;Ce!==null&&!Nt();)dy(Ce)}function dy(e){var n=Rx(e.alternate,e,ir);e.memoizedProps=e.pendingProps,n===null?Af(e):Ce=n}function hy(e){var n=e,r=n.alternate;switch(n.tag){case 15:case 0:n=Sx(r,n,n.pendingProps,n.type,void 0,Ne);break;case 11:n=Sx(r,n,n.pendingProps,n.type.render,n.ref,Ne);break;case 5:Jh(n);var o=n;o===Bn&&(we?(Iu(o),o.tag===5&&o.stateNode!=null&&(ln=o.stateNode)):(Iu(o),we=!0));default:Dx(r,n),n=Ce=n_(n,ir),n=Rx(r,n,ir)}e.memoizedProps=e.pendingProps,n===null?Af(e):Ce=n}function Io(e,n,r,o){Ka=xs=null,Jh(n),Mo=null,rc=0;var u=n.return;try{if($T(e,u,n,r,Ne)){_n=1,af(e,Bi(r,e.current)),Ce=null;return}}catch(f){if(u!==null)throw Ce=u,f;_n=1,af(e,Bi(r,e.current)),Ce=null;return}n.flags&32768?(we||o===1?e=!0:Do||(Ne&536870912)!==0?e=!1:(Gr=e=!0,(o===2||o===9||o===3||o===6)&&(o=Xn.current,o!==null&&o.tag===13&&(o.flags|=16384))),py(n,e)):Af(n)}function Af(e){var n=e;do{if((n.flags&32768)!==0){py(n,Gr);return}e=n.return;var r=nA(n.alternate,n,ir);if(r!==null){Ce=r;return}if(n=n.sibling,n!==null){Ce=n;return}Ce=n=e}while(n!==null);_n===0&&(_n=5)}function py(e,n){do{var r=iA(e.alternate,e);if(r!==null){r.flags&=32767,Ce=r;return}if(r=e.return,r!==null&&(r.flags|=32768,r.subtreeFlags=0,r.deletions=null),!n&&(e=e.sibling,e!==null)){Ce=e;return}Ce=e=r}while(e!==null);_n=6,Ce=null}function my(e,n,r,o,u,f,x,A,I,$,ct,_t){e.cancelPendingCommit=null;do wf();while(mn!==0);if((Xe&6)!==0)throw Error(s(327));if(n!==null){if(n===e.current)throw Error(s(177));e===sn&&(Ce=sn=null,Ne=0),Us=n,sa=e,wa=r,Xp=u,ay=o,dA(e,n,r,x,A,I,_t)}}function dA(e,n,r,o,u,f,x){var A=n.lanes|n.childLanes;if(kp=A,A|=wh,vu(e,r,A,o,u,f),Lo=null,(r&335544064)===r?(Oo=HT(e),o=10262):(Oo=null,o=10256),(n.subtreeFlags&o)!==0||(n.flags&o)!==0?(e.callbackNode=null,e.callbackPriority=0,_A(At,function(){return Qp(),null})):(e.callbackNode=null,e.callbackPriority=0),df=!1,o=(n.flags&13878)!==0,(n.subtreeFlags&13878)!==0||o){o=Mt.T,Mt.T=null,u=kt.p,kt.p=2,f=Xe,Xe|=4;try{aA(e,n,r)}finally{Xe=f,kt.p=u,Mt.T=o}}mn=1,df?Uo=FA(x,e.containerInfo,Oo,jp,Yp,pA,Zp,Qp,hA):(jp(),Yp(),Zp())}function hA(e){if(mn!==0){var n=sa.onRecoverableError;n(e,{componentStack:null})}}function pA(){mn===3&&(mn=0,Kx(Us,sa),mn=4)}function jp(){if(mn===1){mn=0;var e=sa,n=Us,r=wa,o=(n.flags&13878)!==0;if((n.subtreeFlags&13878)!==0||o){o=Mt.T,Mt.T=null;var u=kt.p;kt.p=2;var f=Xe;Xe|=4;try{vc=mf=!1,Zx(n,e,r),r=lm;var x=Wv(e.containerInfo),A=r.focusedElem,I=r.selectionRange;if(x!==A&&A&&A.ownerDocument&&qv(A.ownerDocument.documentElement,A)){if(I!==null&&Mh(A)){var $=I.start,ct=I.end;if(ct===void 0&&(ct=$),"selectionStart"in A)A.selectionStart=$,A.selectionEnd=Math.min(ct,A.value.length);else{var _t=A.ownerDocument||document,Q=_t&&_t.defaultView||window;if(Q.getSelection){var rt=Q.getSelection(),Pt=A.textContent.length,Qt=Math.min(I.start,Pt),Se=I.end===void 0?Qt:Math.min(I.end,Pt);!rt.extend&&Qt>Se&&(x=Se,Se=Qt,Qt=x);var K=Xv(A,Qt),k=Xv(A,Se);if(K&&k&&(rt.rangeCount!==1||rt.anchorNode!==K.node||rt.anchorOffset!==K.offset||rt.focusNode!==k.node||rt.focusOffset!==k.offset)){var nt=_t.createRange();nt.setStart(K.node,K.offset),rt.removeAllRanges(),Qt>Se?(rt.addRange(nt),rt.extend(k.node,k.offset)):(nt.setEnd(k.node,k.offset),rt.addRange(nt))}}}}for(_t=[],rt=A;rt=rt.parentNode;)rt.nodeType===1&&_t.push({element:rt,left:rt.scrollLeft,top:rt.scrollTop});for(typeof A.focus=="function"&&A.focus(),A=0;A<_t.length;A++){var vt=_t[A];vt.element.scrollLeft=vt.left,vt.element.scrollTop=vt.top}}qo=!!om,lm=om=null}finally{Xe=f,kt.p=u,Mt.T=o}}e.current=n,mn=2}}function Yp(){if(mn===2){mn=0;var e=sa,n=Us,r=(n.flags&8772)!==0;if((n.subtreeFlags&8772)!==0||r){r=Mt.T,Mt.T=null;var o=kt.p;kt.p=2;var u=Xe;Xe|=4;try{kx(e,n.alternate,n)}finally{Xe=u,kt.p=o,Mt.T=r}}mn=3}}function Zp(){if(mn===4||mn===3){mn=0;var e=Uo;Uo=null,Ct();var n=sa,r=Us,o=wa,u=ay,f=(o&335544064)===o?10262:10256;if((r.subtreeFlags&f)!==0||(r.flags&f)!==0?mn=5:(mn=0,Us=sa=null,gy(n,n.pendingLanes)),f=n.pendingLanes,f===0&&(kr=null),kl(o),r=r.stateNode,ae&&typeof ae.onCommitFiberRoot=="function")try{ae.onCommitFiberRoot(Zt,r,void 0,(r.current.flags&128)===128)}catch{}if(u!==null){r=Mt.T,f=kt.p,kt.p=2,Mt.T=null;try{for(var x=n.onRecoverableError,A=0;A<u.length;A++){var I=u[A];x(I.value,{componentStack:I.stack})}}finally{Mt.T=r,kt.p=f}}if(u=Lo,x=Oo,Oo=null,u!==null&&(Lo=null,x===null&&(x=[]),e!==null))for(I=0;I<u.length;I++)r=(0,u[I])(x),r!==void 0&&e.finished.finally(r);(wa&3)!==0&&wf(),Ra(n),f=n.pendingLanes,(o&261930)!==0&&(f&42)!==0?n===bf?Sc++:(Sc=0,bf=n):(Sc=0,bf=null),Mc(0)}}function gy(e,n){(e.pooledCacheLanes&=n)===0&&(n=e.pooledCache,n!=null&&(e.pooledCache=null,nc(n)))}function wf(){return Uo!==null&&(Uo.skipTransition(),Uo=null),jp(),Yp(),Zp(),Qp()}function Qp(){if(mn!==5)return!1;var e=sa,n=kp;kp=0;var r=kl(wa),o=Mt.T,u=kt.p;try{kt.p=32>r?32:r,Mt.T=null,r=Xp,Xp=null;var f=sa,x=wa;if(mn=0,Us=sa=null,wa=0,(Xe&6)!==0)throw Error(s(331));var A=Xe;if(Xe|=4,ey(f.current),$x(f,f.current,x,r),Xe=A,Mc(0,!1),ae&&typeof ae.onPostCommitFiberRoot=="function")try{ae.onPostCommitFiberRoot(Zt,f)}catch{}return!0}finally{kt.p=u,Mt.T=o,gy(e,n)}}function vy(e,n,r){n=Bi(r,n),n=hp(e.stateNode,n,2),e=Pr(e,n,2),e!==null&&(Er(e,2),Ra(e))}function Qe(e,n,r){if(e.tag===3)vy(e,e,r);else for(;n!==null;){if(n.tag===3){vy(n,e,r);break}else if(n.tag===1){var o=n.stateNode;if(typeof n.type.getDerivedStateFromError=="function"||typeof o.componentDidCatch=="function"&&(kr===null||!kr.has(o))){e=Bi(r,e),r=hx(2),o=Pr(n,r,2),o!==null&&(px(r,o,n,e),Er(o,2),Ra(o));break}}n=n.return}}function Kp(e,n,r){var o=e.pingCache;if(o===null){o=e.pingCache=new oA;var u=new Set;o.set(n,u)}else u=o.get(n),u===void 0&&(u=new Set,o.set(n,u));u.has(r)||(Gp=!0,u.add(r),e=mA.bind(null,e,n,r),n.then(e,e))}function mA(e,n,r){var o=e.pingCache;o!==null&&o.delete(n),e.pingedLanes|=e.suspendedLanes&r,e.warmLanes&=~r,sn===e&&(Ne&r)===r&&((_n===4||_n===3&&(Ne&62914560)===Ne&&300>ne()-yf)&&(Xe&2)===0?zo(e,0):xf|=r,No===Ne&&(No=0)),Ra(e)}function _y(e,n){n===0&&(n=Gl()),e=gs(e,n),e!==null&&(Er(e,n),Ra(e))}function gA(e){var n=e.memoizedState,r=0;n!==null&&(r=n.retryLane),_y(e,r)}function vA(e,n){var r=0;switch(e.tag){case 31:case 13:var o=e.stateNode,u=e.memoizedState;u!==null&&(r=u.retryLane);break;case 19:o=e.stateNode;break;case 22:o=e.stateNode._retryCache;break;default:throw Error(s(314))}o!==null&&o.delete(n),_y(e,r)}function _A(e,n){return Bt(e,n)}var Fo=null,Bo=null,$p=!1,Rf=!1,Jp=!1,qr=0;function Ra(e){e!==Bo&&e.next===null&&(Bo===null?Fo=Bo=e:Bo=Bo.next=e),Rf=!0,$p||($p=!0,yA())}function Mc(e,n){if(!Jp&&Rf){Jp=!0;do for(var r=!1,o=Fo;o!==null;){if(e!==0){var u=o.pendingLanes;if(u===0)var f=0;else{var x=o.suspendedLanes,A=o.pingedLanes;f=(1<<31-xe(42|e)+1)-1,f&=u&~(x&~A),f=f&201326741?f&201326741|1:f?f|2:0}f!==0&&(r=!0,My(o,f))}else f=Ne,f=Sr(o,o===sn?f:0,o.cancelPendingCommit!==null||o.timeoutHandle!==-1),(f&3)===0||Mr(o,f)||(r=!0,My(o,f));o=o.next}while(r);Jp=!1}}function xA(){xy()}function xy(){Rf=$p=!1;var e=0;qr!==0&&NA()&&(e=qr);for(var n=ne(),r=null,o=Fo;o!==null;){var u=o.next,f=yy(o,n);f===0?(o.next=null,r===null?Fo=u:r.next=u,u===null&&(Bo=r)):(r=o,(e!==0||(f&3)!==0)&&(Rf=!0)),o=u}mn!==0&&mn!==5||Mc(e),qr!==0&&(qr=0)}function yy(e,n){for(var r=e.suspendedLanes,o=e.pingedLanes,u=e.expirationTimes,f=e.pendingLanes&-62914561;0<f;){var x=31-xe(f),A=1<<x,I=u[x];I===-1?((A&r)===0||(A&o)!==0)&&(u[x]=so(A,n)):I<=n&&(e.expiredLanes|=A),f&=~A}if(n=sn,r=Ne,r=Sr(e,e===n?r:0,e.cancelPendingCommit!==null||e.timeoutHandle!==-1),o=e.callbackNode,r===0||e===n&&(Ze===2||Ze===9)||e.cancelPendingCommit!==null)return o!==null&&o!==null&&Xt(o),e.callbackNode=null,e.callbackPriority=0;if((r&3)===0||Mr(e,r)){if(n=r&-r,n===e.callbackPriority)return n;switch(o!==null&&Xt(o),kl(r)){case 2:case 8:r=q;break;case 32:r=At;break;case 268435456:r=Vt;break;default:r=At}return o=Sy.bind(null,e),r=Bt(r,o),e.callbackPriority=n,e.callbackNode=r,n}return o!==null&&o!==null&&Xt(o),e.callbackPriority=2,e.callbackNode=null,2}function Sy(e,n){if(mn!==0&&mn!==5)return e.callbackNode=null,e.callbackPriority=0,null;var r=e.callbackNode;if(wf()&&e.callbackNode!==r)return null;var o=Ne;return o=Sr(e,e===sn?o:0,e.cancelPendingCommit!==null||e.timeoutHandle!==-1),o===0?null:(sy(e,o,n),yy(e,ne()),e.callbackNode!=null&&e.callbackNode===r?Sy.bind(null,e):null)}function My(e,n){if(wf())return null;sy(e,n,!0)}function yA(){LA(function(){(Xe&6)!==0?Bt(Le,xA):xy()})}function tm(){if(qr===0){var e=Ms;e===0&&(e=ro,ro<<=1,(ro&261888)===0&&(ro=256)),qr=e}return qr}function by(e){return e==null||typeof e=="symbol"||typeof e=="boolean"?null:typeof e=="function"?e:bu(e)}function SA(e,n,r,o,u){if(n==="submit"&&r&&r.stateNode===u){var f=by((u[st]||null).action),x=o.submitter;x&&(n=(n=x[st]||null)?by(n.formAction):x.getAttribute("formAction"),n!==null&&(f=n,x=null));var A=new wu("action","action",null,o,u);e.push({event:A,listeners:[{instance:null,listener:function(){if(o.defaultPrevented){if(qr!==0){var I=new FormData(u,x);lp(r,{pending:!0,data:I,method:u.method,action:f},null,I)}}else typeof f=="function"&&(A.preventDefault(),I=new FormData(u,x),lp(r,{pending:!0,data:I,method:u.method,action:f},f,I))},currentTarget:u}]})}}for(var em=0;em<Ah.length;em++){var nm=Ah[em],MA=nm.toLowerCase(),bA=nm[0].toUpperCase()+nm.slice(1);na(MA,"on"+bA)}na(Zv,"onAnimationEnd"),na(Qv,"onAnimationIteration"),na(Kv,"onAnimationStart"),na("dblclick","onDoubleClick"),na("focusin","onFocus"),na("focusout","onBlur"),na(UT,"onTransitionRun"),na(LT,"onTransitionStart"),na(OT,"onTransitionCancel"),na($v,"onTransitionEnd"),Ee("onMouseEnter",["mouseout","mouseover"]),Ee("onMouseLeave",["mouseout","mouseover"]),Ee("onPointerEnter",["pointerout","pointerover"]),Ee("onPointerLeave",["pointerout","pointerover"]),yn("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),yn("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),yn("onBeforeInput",["compositionend","keypress","textInput","paste"]),yn("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),yn("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),yn("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var bc="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),EA=new Set("beforetoggle cancel close invalid load scroll scrollend toggle".split(" ").concat(bc));function Ey(e,n){n=(n&4)!==0;for(var r=0;r<e.length;r++){var o=e[r],u=o.event;o=o.listeners;t:{var f=void 0;if(n)for(var x=o.length-1;0<=x;x--){var A=o[x],I=A.instance,$=A.currentTarget;if(A=A.listener,I!==f&&u.isPropagationStopped())break t;f=A,u.currentTarget=$;try{f(u)}catch(ct){Du(ct)}u.currentTarget=null,f=I}else for(x=0;x<o.length;x++){if(A=o[x],I=A.instance,$=A.currentTarget,A=A.listener,I!==f&&u.isPropagationStopped())break t;f=A,u.currentTarget=$;try{f(u)}catch(ct){Du(ct)}u.currentTarget=null,f=I}}}}function De(e,n){var r=n[ot];r===void 0&&(r=n[ot]=new Set);var o=e+"__bubble";r.has(o)||(Ty(n,e,2,!1),r.add(o))}function im(e,n,r){var o=0;n&&(o|=4),Ty(r,e,o,n)}var Cf="_reactListening"+Math.random().toString(36).slice(2);function am(e){if(!e[Cf]){e[Cf]=!0,Un.forEach(function(r){r!=="selectionchange"&&(EA.has(r)||im(r,!1,e),im(r,!0,e))});var n=e.nodeType===9?e:e.ownerDocument;n===null||n[Cf]||(n[Cf]=!0,im("selectionchange",!1,n))}}function Ty(e,n,r,o){switch(pS(n)){case 2:var u=gw;break;case 8:u=vw;break;default:u=Em}r=u.bind(null,n,r,e),u=void 0,!dh||n!=="touchstart"&&n!=="touchmove"&&n!=="wheel"||(u=!0),o?u!==void 0?e.addEventListener(n,r,{capture:!0,passive:u}):e.addEventListener(n,r,!0):u!==void 0?e.addEventListener(n,r,{passive:u}):e.addEventListener(n,r,!1)}function rm(e,n,r,o,u){var f=o;if((n&1)===0&&(n&2)===0&&o!==null)t:for(;;){if(o===null)return;var x=o.tag;if(x===3||x===4){var A=o.stateNode.containerInfo;if(A===u)break;if(x===4)for(x=o.return;x!==null;){var I=x.tag;if((I===3||I===4)&&x.stateNode.containerInfo===u)return;x=x.return}for(;A!==null;){if(x=fe(A),x===null)return;if(I=x.tag,I===5||I===6||I===26||I===27){o=f=x;continue t}A=A.parentNode}}o=o.return}Tv(function(){var $=f,ct=uh(r),_t=[];t:{var Q=Jv.get(e);if(Q!==void 0){var rt=wu,Pt=e;switch(e){case"keypress":if(Tu(r)===0)break t;case"keydown":case"keyup":rt=lT;break;case"focusin":Pt="focus",rt=gh;break;case"focusout":Pt="blur",rt=gh;break;case"beforeblur":case"afterblur":rt=gh;break;case"click":if(r.button===2)break t;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":rt=Rv;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":rt=QE;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":rt=hT;break;case Zv:case Qv:case Kv:rt=JE;break;case $v:rt=mT;break;case"scroll":case"scrollend":rt=YE;break;case"wheel":rt=vT;break;case"copy":case"cut":case"paste":rt=eT;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":rt=Dv;break;case"submit":rt=fT;break;case"toggle":case"beforetoggle":rt=xT}var Qt=(n&4)!==0,Se=!Qt&&(e==="scroll"||e==="scrollend"),K=Qt?Q!==null?Q+"Capture":null:Q;Qt=[];for(var k=$,nt;k!==null;){var vt=k;if(nt=vt.stateNode,vt=vt.tag,vt!==5&&vt!==26&&vt!==27||nt===null||K===null||(vt=ql(k,K),vt!=null&&Qt.push(Ec(k,vt,nt))),Se)break;k=k.return}0<Qt.length&&(Q=new rt(Q,Pt,null,r,ct),_t.push({event:Q,listeners:Qt}))}}if((n&7)===0){t:{if(rt=e==="mouseover"||e==="pointerover",Q=e==="mouseout"||e==="pointerout",rt&&r!==ch&&(Pt=r.relatedTarget||r.fromElement)&&(fe(Pt)||Pt[at]))break t;(Q||rt)&&(Pt=ct.window===ct?ct:(rt=ct.ownerDocument)?rt.defaultView||rt.parentWindow:window,Q?(rt=r.relatedTarget||r.toElement,Q=$,rt=rt?fe(rt):null,rt!==null&&(Se=c(rt),Qt=rt.tag,rt!==Se||Qt!==5&&Qt!==27&&Qt!==6)&&(rt=null)):(Q=null,rt=$),Q!==rt&&(Qt=Rv,vt="onMouseLeave",K="onMouseEnter",k="mouse",(e==="pointerout"||e==="pointerover")&&(Qt=Dv,vt="onPointerLeave",K="onPointerEnter",k="pointer"),Se=Q==null?Pt:Ie(Q),nt=rt==null?Pt:Ie(rt),Pt=new Qt(vt,k+"leave",Q,r,ct),Pt.target=Se,Pt.relatedTarget=nt,vt=null,fe(ct)===$&&(Qt=new Qt(K,k+"enter",rt,r,ct),Qt.target=nt,Qt.relatedTarget=Se,vt=Qt),Se=vt,Qt=Q&&rt?U(Q,rt,TA):null,Q!==null&&Ay(_t,Pt,Q,Qt,!1),rt!==null&&Se!==null&&Ay(_t,Se,rt,Qt,!0)))}t:{if(Q=$?Ie($):window,rt=Q.nodeName&&Q.nodeName.toLowerCase(),rt==="select"||rt==="input"&&Q.type==="file")var jt=Fv;else if(zv(Q))if(Bv)jt=CT;else{jt=wT;var Ue=AT}else rt=Q.nodeName,!rt||rt.toLowerCase()!=="input"||Q.type!=="checkbox"&&Q.type!=="radio"?$&&lh($.elementType)&&(jt=Fv):jt=RT;if(jt&&(jt=jt(e,$))){Iv(_t,jt,r,ct);break t}Ue&&Ue(e,Q,$)}switch(Ue=$?Ie($):window,e){case"focusin":(zv(Ue)||Ue.contentEditable==="true")&&(ho=Ue,bh=$,Jl=null);break;case"focusout":Jl=bh=ho=null;break;case"mousedown":Eh=!0;break;case"contextmenu":case"mouseup":case"dragend":Eh=!1,jv(_t,r,ct);break;case"selectionchange":if(NT)break;case"keydown":case"keyup":jv(_t,r,ct)}var ie;if(_h)t:{switch(e){case"compositionstart":var le="onCompositionStart";break t;case"compositionend":le="onCompositionEnd";break t;case"compositionupdate":le="onCompositionUpdate";break t}le=void 0}else fo?Ov(e,r)&&(le="onCompositionEnd"):e==="keydown"&&r.keyCode===229&&(le="onCompositionStart");le&&(Nv&&r.locale!=="ko"&&(fo||le!=="onCompositionStart"?le==="onCompositionEnd"&&fo&&(ie=Av()):(Ar=ct,hh="value"in Ar?Ar.value:Ar.textContent,fo=!0)),Ue=Df($,le),0<Ue.length&&(le=new Cv(le,e,null,r,ct),_t.push({event:le,listeners:Ue}),ie?le.data=ie:(ie=Pv(r),ie!==null&&(le.data=ie)))),(ie=ST?MT(e,r):bT(e,r))&&(le=Df($,"onBeforeInput"),0<le.length&&(Ue=new Cv("onBeforeInput","beforeinput",null,r,ct),_t.push({event:Ue,listeners:le}),Ue.data=ie)),SA(_t,e,$,r,ct)}Ey(_t,n)})}function Ec(e,n,r){return{instance:e,listener:n,currentTarget:r}}function Df(e,n){for(var r=n+"Capture",o=[];e!==null;){var u=e,f=u.stateNode;if(u=u.tag,u!==5&&u!==26&&u!==27||f===null||(u=ql(e,r),u!=null&&o.unshift(Ec(e,u,f)),u=ql(e,n),u!=null&&o.push(Ec(e,u,f))),e.tag===3)return o;e=e.return}return[]}function TA(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5&&e.tag!==27);return e||null}function Ay(e,n,r,o,u){for(var f=n._reactName,x=[];r!==null&&r!==o;){var A=r,I=A.alternate,$=A.stateNode;if(A=A.tag,I!==null&&I===o)break;A!==5&&A!==26&&A!==27||$===null||(I=$,u?($=ql(r,f),$!=null&&x.unshift(Ec(r,$,I))):u||($=ql(r,f),$!=null&&x.push(Ec(r,$,I)))),r=r.return}x.length!==0&&e.push({event:n,listeners:x})}var AA=/\r\n?/g,wA=/\u0000|\uFFFD/g;function wy(e){return(typeof e=="string"?e:""+e).replace(AA,`
`).replace(wA,"")}function Ry(e,n){return n=wy(n),wy(e)===n}function Ke(e,n,r,o,u,f){switch(r){case"children":if(typeof o=="string")n==="body"||n==="textarea"&&o===""||lo(e,o);else if(typeof o=="number"||typeof o=="bigint")n!=="body"&&lo(e,""+o);else return;break;case"className":ke(e,"class",o);break;case"tabIndex":ke(e,"tabindex",o);break;case"dir":case"role":case"viewBox":case"width":case"height":ke(e,r,o);break;case"style":bv(e,o,f);return;case"data":if(n!=="object"){ke(e,"data",o);break}case"src":case"href":if(o===""&&(n!=="a"||r!=="href")){e.removeAttribute(r);break}if(o==null||typeof o=="function"||typeof o=="symbol"||typeof o=="boolean"){e.removeAttribute(r);break}o=bu(o),e.setAttribute(r,o);break;case"action":case"formAction":if(typeof o=="function"){e.setAttribute(r,"javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')");break}else typeof f=="function"&&(r==="formAction"?(n!=="input"&&Ke(e,n,"name",u.name,u,null),Ke(e,n,"formEncType",u.formEncType,u,null),Ke(e,n,"formMethod",u.formMethod,u,null),Ke(e,n,"formTarget",u.formTarget,u,null)):(Ke(e,n,"encType",u.encType,u,null),Ke(e,n,"method",u.method,u,null),Ke(e,n,"target",u.target,u,null)));if(o==null||typeof o=="symbol"||typeof o=="boolean"){e.removeAttribute(r);break}o=bu(o),e.setAttribute(r,o);break;case"onClick":o!=null&&(e.onclick=_a);return;case"onScroll":o!=null&&De("scroll",e);return;case"onScrollEnd":o!=null&&De("scrollend",e);return;case"dangerouslySetInnerHTML":if(o!=null){if(typeof o!="object"||!("__html"in o))throw Error(s(61));if(r=o.__html,r!=null){if(u.children!=null)throw Error(s(60));f?.__html!==r&&(e.innerHTML=r)}}break;case"multiple":e.multiple=o&&typeof o!="function"&&typeof o!="symbol";break;case"muted":e.muted=o&&typeof o!="function"&&typeof o!="symbol";break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"defaultValue":case"defaultChecked":case"innerHTML":case"ref":break;case"autoFocus":break;case"xlinkHref":if(o==null||typeof o=="function"||typeof o=="boolean"||typeof o=="symbol"){e.removeAttribute("xlink:href");break}r=bu(o),e.setAttributeNS("http://www.w3.org/1999/xlink","xlink:href",r);break;case"contentEditable":case"spellCheck":case"draggable":case"value":case"autoReverse":case"externalResourcesRequired":case"focusable":case"preserveAlpha":o!=null&&typeof o!="function"&&typeof o!="symbol"?e.setAttribute(r,o):e.removeAttribute(r);break;case"inert":case"allowFullScreen":case"async":case"autoPlay":case"controls":case"credentialless":case"default":case"defer":case"disabled":case"disablePictureInPicture":case"disableRemotePlayback":case"formNoValidate":case"hidden":case"loop":case"noModule":case"noValidate":case"open":case"playsInline":case"readOnly":case"required":case"reversed":case"scoped":case"seamless":case"itemScope":o&&typeof o!="function"&&typeof o!="symbol"?e.setAttribute(r,""):e.removeAttribute(r);break;case"capture":case"download":o===!0?e.setAttribute(r,""):o!==!1&&o!=null&&typeof o!="function"&&typeof o!="symbol"?e.setAttribute(r,o):e.removeAttribute(r);break;case"cols":case"rows":case"size":case"span":o!=null&&typeof o!="function"&&typeof o!="symbol"&&!isNaN(o)&&1<=o?e.setAttribute(r,o):e.removeAttribute(r);break;case"rowSpan":case"start":o==null||typeof o=="function"||typeof o=="symbol"||isNaN(o)?e.removeAttribute(r):e.setAttribute(r,o);break;case"popover":De("beforetoggle",e),De("toggle",e),bi(e,"popover",o);break;case"xlinkActuate":Fn(e,"http://www.w3.org/1999/xlink","xlink:actuate",o);break;case"xlinkArcrole":Fn(e,"http://www.w3.org/1999/xlink","xlink:arcrole",o);break;case"xlinkRole":Fn(e,"http://www.w3.org/1999/xlink","xlink:role",o);break;case"xlinkShow":Fn(e,"http://www.w3.org/1999/xlink","xlink:show",o);break;case"xlinkTitle":Fn(e,"http://www.w3.org/1999/xlink","xlink:title",o);break;case"xlinkType":Fn(e,"http://www.w3.org/1999/xlink","xlink:type",o);break;case"xmlBase":Fn(e,"http://www.w3.org/XML/1998/namespace","xml:base",o);break;case"xmlLang":Fn(e,"http://www.w3.org/XML/1998/namespace","xml:lang",o);break;case"xmlSpace":Fn(e,"http://www.w3.org/XML/1998/namespace","xml:space",o);break;case"is":bi(e,"is",o);break;case"innerText":case"textContent":return;default:if(!(2<r.length)||r[0]!=="o"&&r[0]!=="O"||r[1]!=="n"&&r[1]!=="N")r=WE.get(r)||r,bi(e,r,o);else return}Jt=!0}function sm(e,n,r,o,u,f){switch(r){case"style":bv(e,o,f);return;case"dangerouslySetInnerHTML":if(o!=null){if(typeof o!="object"||!("__html"in o))throw Error(s(61));if(r=o.__html,r!=null){if(u.children!=null)throw Error(s(60));f?.__html!==r&&(e.innerHTML=r)}}break;case"children":if(typeof o=="string")lo(e,o);else if(typeof o=="number"||typeof o=="bigint")lo(e,""+o);else return;break;case"onScroll":o!=null&&De("scroll",e);return;case"onScrollEnd":o!=null&&De("scrollend",e);return;case"onClick":o!=null&&(e.onclick=_a);return;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"innerHTML":case"ref":return;case"innerText":case"textContent":return;default:if(!qt.hasOwnProperty(r))t:{if(r[0]==="o"&&r[1]==="n"&&(u=r.endsWith("Capture"),f=r.slice(2,u?r.length-7:void 0),n=e[st]||null,n=n!=null?n[r]:null,typeof n=="function"&&e.removeEventListener(f,n,u),typeof o=="function")){typeof n!="function"&&n!==null&&(r in e?e[r]=null:e.hasAttribute(r)&&e.removeAttribute(r)),e.addEventListener(f,o,u);break t}Jt=!0,r in e?e[r]=o:o===!0?e.setAttribute(r,""):bi(e,r,o)}return}Jt=!0}function jn(e,n,r){switch(n){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"img":De("error",e),De("load",e);var o=!1,u=!1,f;for(f in r)if(r.hasOwnProperty(f)){var x=r[f];if(x!=null)switch(f){case"src":o=!0;break;case"srcSet":u=!0;break;case"children":case"dangerouslySetInnerHTML":throw Error(s(137,n));default:Ke(e,n,f,x,r,null)}}u&&Ke(e,n,"srcSet",r.srcSet,r,null),o&&Ke(e,n,"src",r.src,r,null);return;case"input":De("invalid",e);var A=f=x=u=null,I=null,$=null;for(o in r)if(r.hasOwnProperty(o)){var ct=r[o];if(ct!=null)switch(o){case"name":u=ct;break;case"type":x=ct;break;case"checked":I=ct;break;case"defaultChecked":$=ct;break;case"value":f=ct;break;case"defaultValue":A=ct;break;case"children":case"dangerouslySetInnerHTML":if(ct!=null)throw Error(s(137,n));break;default:Ke(e,n,o,ct,r,null)}}xv(e,f,A,I,$,x,u,!1);return;case"select":De("invalid",e),o=x=f=null;for(u in r)if(r.hasOwnProperty(u)&&(A=r[u],A!=null))switch(u){case"value":f=A;break;case"defaultValue":x=A;break;case"multiple":o=A;default:Ke(e,n,u,A,r,null)}n=f,r=x,e.multiple=!!o,n!=null?oo(e,!!o,n,!1):r!=null&&oo(e,!!o,r,!0);return;case"textarea":De("invalid",e),f=u=o=null;for(x in r)if(r.hasOwnProperty(x)&&(A=r[x],A!=null))switch(x){case"value":o=A;break;case"defaultValue":u=A;break;case"children":f=A;break;case"dangerouslySetInnerHTML":if(A!=null)throw Error(s(91));break;default:Ke(e,n,x,A,r,null)}Sv(e,o,u,f);return;case"option":for(I in r)if(r.hasOwnProperty(I)&&(o=r[I],o!=null))switch(I){case"selected":e.selected=o&&typeof o!="function"&&typeof o!="symbol";break;default:Ke(e,n,I,o,r,null)}return;case"dialog":De("beforetoggle",e),De("toggle",e),De("cancel",e),De("close",e);break;case"iframe":case"object":De("load",e);break;case"video":case"audio":for(o=0;o<bc.length;o++)De(bc[o],e);break;case"image":De("error",e),De("load",e);break;case"details":De("toggle",e);break;case"embed":case"source":case"link":De("error",e),De("load",e);case"area":case"base":case"br":case"col":case"hr":case"keygen":case"meta":case"param":case"track":case"wbr":case"menuitem":for($ in r)if(r.hasOwnProperty($)&&(o=r[$],o!=null))switch($){case"children":case"dangerouslySetInnerHTML":throw Error(s(137,n));default:Ke(e,n,$,o,r,null)}return;default:if(lh(n)){for(ct in r)r.hasOwnProperty(ct)&&(o=r[ct],o!==void 0&&sm(e,n,ct,o,r,void 0));return}}for(A in r)r.hasOwnProperty(A)&&(o=r[A],o!=null&&Ke(e,n,A,o,r,null))}var RA={};function CA(e,n,r,o){switch(n){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"input":var u=null,f=null,x=null,A=null,I=null,$=null,ct=null;for(rt in r){var _t=r[rt];if(r.hasOwnProperty(rt)&&_t!=null)switch(rt){case"checked":break;case"value":break;case"defaultValue":I=_t;default:o.hasOwnProperty(rt)||Ke(e,n,rt,null,o,_t)}}for(var Q in o){var rt=o[Q];if(_t=r[Q],o.hasOwnProperty(Q)&&(rt!=null||_t!=null))switch(Q){case"type":rt!==_t&&(Jt=!0),f=rt;break;case"name":rt!==_t&&(Jt=!0),u=rt;break;case"checked":rt!==_t&&(Jt=!0),$=rt;break;case"defaultChecked":rt!==_t&&(Jt=!0),ct=rt;break;case"value":rt!==_t&&(Jt=!0),x=rt;break;case"defaultValue":rt!==_t&&(Jt=!0),A=rt;break;case"children":case"dangerouslySetInnerHTML":if(rt!=null)throw Error(s(137,n));break;default:rt!==_t&&Ke(e,n,Q,rt,o,_t)}}sh(e,x,A,I,$,ct,f,u);return;case"select":rt=x=A=Q=null;for(f in r)if(I=r[f],r.hasOwnProperty(f)&&I!=null)switch(f){case"value":break;case"multiple":rt=I;default:o.hasOwnProperty(f)||Ke(e,n,f,null,o,I)}for(u in o)if(f=o[u],I=r[u],o.hasOwnProperty(u)&&(f!=null||I!=null))switch(u){case"value":f!==I&&(Jt=!0),Q=f;break;case"defaultValue":f!==I&&(Jt=!0),A=f;break;case"multiple":f!==I&&(Jt=!0),x=f;default:f!==I&&Ke(e,n,u,f,o,I)}n=A,r=x,o=rt,Q!=null?oo(e,!!r,Q,!1):!!o!=!!r&&(n!=null?oo(e,!!r,n,!0):oo(e,!!r,r?[]:"",!1));return;case"textarea":rt=Q=null;for(A in r)if(u=r[A],r.hasOwnProperty(A)&&u!=null&&!o.hasOwnProperty(A))switch(A){case"value":break;case"children":break;default:Ke(e,n,A,null,o,u)}for(x in o)if(u=o[x],f=r[x],o.hasOwnProperty(x)&&(u!=null||f!=null))switch(x){case"value":u!==f&&(Jt=!0),Q=u;break;case"defaultValue":u!==f&&(Jt=!0),rt=u;break;case"children":break;case"dangerouslySetInnerHTML":if(u!=null)throw Error(s(91));break;default:u!==f&&Ke(e,n,x,u,o,f)}yv(e,Q,rt);return;case"option":for(var Pt in r)if(Q=r[Pt],r.hasOwnProperty(Pt)&&Q!=null&&!o.hasOwnProperty(Pt))switch(Pt){case"selected":e.selected=!1;break;default:Ke(e,n,Pt,null,o,Q)}for(I in o)if(Q=o[I],rt=r[I],o.hasOwnProperty(I)&&Q!==rt&&(Q!=null||rt!=null))switch(I){case"selected":Q!==rt&&(Jt=!0),e.selected=Q&&typeof Q!="function"&&typeof Q!="symbol";break;default:Ke(e,n,I,Q,o,rt)}return;case"img":case"link":case"area":case"base":case"br":case"col":case"embed":case"hr":case"keygen":case"meta":case"param":case"source":case"track":case"wbr":case"menuitem":for(var Qt in r)Q=r[Qt],r.hasOwnProperty(Qt)&&Q!=null&&!o.hasOwnProperty(Qt)&&Ke(e,n,Qt,null,o,Q);for($ in o)if(Q=o[$],rt=r[$],o.hasOwnProperty($)&&Q!==rt&&(Q!=null||rt!=null))switch($){case"children":case"dangerouslySetInnerHTML":if(Q!=null)throw Error(s(137,n));break;default:Ke(e,n,$,Q,o,rt)}return;default:if(lh(n)){for(var Se in r)Q=r[Se],r.hasOwnProperty(Se)&&Q!==void 0&&!o.hasOwnProperty(Se)&&sm(e,n,Se,void 0,o,Q);for(ct in o)Q=o[ct],rt=r[ct],!o.hasOwnProperty(ct)||Q===rt||Q===void 0&&rt===void 0||sm(e,n,ct,Q,o,rt);return}}for(var K in r)Q=r[K],r.hasOwnProperty(K)&&Q!=null&&!o.hasOwnProperty(K)&&Ke(e,n,K,null,o,Q);for(_t in o)Q=o[_t],rt=r[_t],!o.hasOwnProperty(_t)||Q===rt||Q==null&&rt==null||Ke(e,n,_t,Q,o,rt)}function Cy(e){switch(e){case"css":case"script":case"font":case"img":case"image":case"input":case"link":return!0;default:return!1}}function DA(){if(typeof performance.getEntriesByType=="function"){for(var e=0,n=0,r=performance.getEntriesByType("resource"),o=0;o<r.length;o++){var u=r[o],f=u.transferSize,x=u.initiatorType,A=u.duration;if(f&&A&&Cy(x)){for(x=0,A=u.responseEnd,o+=1;o<r.length;o++){var I=r[o],$=I.startTime;if($>A)break;var ct=I.transferSize,_t=I.initiatorType;ct&&Cy(_t)&&(I=I.responseEnd,x+=ct*(I<A?1:(A-$)/(I-$)))}if(--o,n+=8*(f+x)/(u.duration/1e3),e++,10<e)break}}if(0<e)return n/e/1e6}return navigator.connection&&(e=navigator.connection.downlink,typeof e=="number")?e:5}var om=null,lm=null;function Tc(e){return e.nodeType===9?e:e.ownerDocument}function Dy(e){switch(e){case"http://www.w3.org/2000/svg":return 1;case"http://www.w3.org/1998/Math/MathML":return 2;default:return 0}}function Ny(e,n){if(e===0)switch(n){case"svg":return 1;case"math":return 2;default:return 0}return e===1&&n==="foreignObject"?0:e}function Uy(e,n,r,o){return r=Tc(r).createElement(e),r[j]=o,r[st]=n,jn(r,e,n),be(r),r}function cm(e,n){return e==="textarea"||e==="noscript"||typeof n.children=="string"||typeof n.children=="number"||typeof n.children=="bigint"||typeof n.dangerouslySetInnerHTML=="object"&&n.dangerouslySetInnerHTML!==null&&n.dangerouslySetInnerHTML.__html!=null}var um=null;function NA(){var e=window.event;return e&&e.type==="popstate"?e===um?!1:(um=e,!0):(um=null,!1)}var fm=typeof setTimeout=="function"?setTimeout:void 0,UA=typeof clearTimeout=="function"?clearTimeout:void 0,Ly=typeof Promise=="function"?Promise:void 0,Oy=typeof requestAnimationFrame=="function"?requestAnimationFrame:fm,LA=typeof queueMicrotask=="function"?queueMicrotask:typeof Ly<"u"?function(e){return Ly.resolve(null).then(e).catch(OA)}:fm;function OA(e){setTimeout(function(){throw e})}function Wr(e){return e==="head"}function Py(e,n){var r=n,o=0;do{var u=r.nextSibling;if(e.removeChild(r),u&&u.nodeType===8)if(r=u.data,r==="/$"||r==="/&"){if(o===0){e.removeChild(u),Wo(n);return}o--}else if(r==="$"||r==="$?"||r==="$~"||r==="$!"||r==="&")o++;else if(r==="html")xm(e.ownerDocument.documentElement);else if(r==="head"){r=e.ownerDocument.head,xm(r);for(var f=r.firstChild;f;){var x=f.nextSibling,A=f.nodeName;f[Yt]||A==="SCRIPT"||A==="STYLE"||A==="LINK"&&f.rel.toLowerCase()==="stylesheet"||r.removeChild(f),f=x}}else r==="body"&&xm(e.ownerDocument.body);r=u}while(r);Wo(n)}function zy(e,n){var r=e;e=0;do{var o=r.nextSibling;if(r.nodeType===1?n?(r._stashedDisplay=r.style.display,r.style.display="none"):(r.style.display=r._stashedDisplay||"",r.getAttribute("style")===""&&r.removeAttribute("style")):r.nodeType===3&&(n?(r._stashedText=r.nodeValue,r.nodeValue=""):r.nodeValue=r._stashedText||""),o&&o.nodeType===8)if(r=o.data,r==="/$"){if(e===0)break;e--}else r!=="$"&&r!=="$?"&&r!=="$~"&&r!=="$!"||e++;r=o}while(r)}function Iy(e,n,r){if(n=CSS.escape(n)!==n?"r-"+btoa(n).replace(/=/g,""):n,e.style.viewTransitionName=n,r!=null&&(e.style.viewTransitionClass=r),r=getComputedStyle(e),r.display==="inline"){if(n=e.getClientRects(),n.length===1)var o=1;else for(var u=o=0;u<n.length;u++){var f=n[u];0<f.width&&0<f.height&&o++}o===1&&(e=e.style,e.display=n.length===1?"inline-block":"block",e.marginTop="-"+r.paddingTop,e.marginBottom="-"+r.paddingBottom)}}function Fy(e,n){e=e.style,n=n.style;var r=n!=null?n.hasOwnProperty("viewTransitionName")?n.viewTransitionName:n.hasOwnProperty("view-transition-name")?n["view-transition-name"]:null:null;e.viewTransitionName=r==null||typeof r=="boolean"?"":(""+r).trim(),r=n!=null?n.hasOwnProperty("viewTransitionClass")?n.viewTransitionClass:n.hasOwnProperty("view-transition-class")?n["view-transition-class"]:null:null,e.viewTransitionClass=r==null||typeof r=="boolean"?"":(""+r).trim(),e.display==="inline-block"&&(n==null?e.display=e.margin="":(r=n.display,e.display=r==null||typeof r=="boolean"?"":r,r=n.margin,r!=null?e.margin=r:(r=n.hasOwnProperty("marginTop")?n.marginTop:n["margin-top"],e.marginTop=r==null||typeof r=="boolean"?"":r,n=n.hasOwnProperty("marginBottom")?n.marginBottom:n["margin-bottom"],e.marginBottom=n==null||typeof n=="boolean"?"":n)))}function PA(e,n,r){return r=r.ownerDocument.defaultView,{rect:e,abs:n.position==="absolute"||n.position==="fixed",clip:n.clipPath!=="none"||n.overflow!=="visible"||n.filter!=="none"||n.mask!=="none"||n.mask!=="none"||n.borderRadius!=="0px",view:0<=e.bottom&&0<=e.right&&e.top<=r.innerHeight&&e.left<=r.innerWidth}}function dm(e){var n=e.getBoundingClientRect(),r=getComputedStyle(e);return PA(n,r,e)}function zA(e){return e.documentElement.clientHeight}function IA(e){this.addEventListener("load",e),this.addEventListener("error",e)}function FA(e,n,r,o,u,f,x,A,I){var $=n.nodeType===9?n:n.ownerDocument;try{var ct=$.startViewTransition({update:function(){var Q=$.defaultView,rt=Q.navigation&&Q.navigation.transition,Pt=$.fonts.status;o();var Qt=[];if(Pt==="loaded"&&(zA($),$.fonts.status==="loading"&&Qt.push($.fonts.ready)),Pt=Qt.length,e!==null)for(var Se=e.suspenseyImages,K=0,k=0;k<Se.length;k++){var nt=Se[k];if(!nt.complete){var vt=nt.getBoundingClientRect();if(0<vt.bottom&&0<vt.right&&vt.top<Q.innerHeight&&vt.left<Q.innerWidth){if(K+=rS(nt),K>Lf){Qt.length=Pt;break}nt=new Promise(IA.bind(nt)),Qt.push(nt)}}}if(0<Qt.length)return Q=Promise.race([Promise.all(Qt),new Promise(function(jt){return setTimeout(jt,500)})]).then(u,u),(rt?Promise.allSettled([rt.finished,Q]):Q).then(f,f);if(u(),rt)return rt.finished.then(f,f);f()},types:r});$.__reactViewTransition=ct;var _t=[];return ct.ready.then(function(){for(var Q=$.documentElement.getAnimations({subtree:!0}),rt=0;rt<Q.length;rt++){var Pt=Q[rt],Qt=Pt.effect,Se=Qt.pseudoElement;if(Se!=null&&Se.startsWith("::view-transition")){_t.push(Pt),Pt=Qt.getKeyframes();for(var K=Se=void 0,k=!0,nt=0;nt<Pt.length;nt++){var vt=Pt[nt],jt=vt.width;if(Se===void 0)Se=jt;else if(Se!==jt){k=!1;break}if(jt=vt.height,K===void 0)K=jt;else if(K!==jt){k=!1;break}delete vt.width,delete vt.height,vt.transform==="none"&&delete vt.transform}k&&Se!==void 0&&K!==void 0&&(Qt.setKeyframes(Pt),k=getComputedStyle(Qt.target,Qt.pseudoElement),k.width!==Se||k.height!==K)&&(k=Pt[0],k.width=Se,k.height=K,k=Pt[Pt.length-1],k.width=Se,k.height=K,Qt.setKeyframes(Pt))}}x()},function(Q){$.__reactViewTransition===ct&&($.__reactViewTransition=null);try{if(typeof Q=="object"&&Q!==null)switch(Q.name){case"InvalidStateError":(Q.message==="View transition was skipped because document visibility state is hidden."||Q.message==="Skipping view transition because document visibility state has become hidden."||Q.message==="Skipping view transition because viewport size changed."||Q.message==="Transition was aborted because of invalid state")&&(Q=null)}Q!==null&&I(Q)}finally{o(),u(),x()}}),ct.finished.finally(function(){for(var Q=0;Q<_t.length;Q++)_t[Q].cancel();$.__reactViewTransition===ct&&($.__reactViewTransition=null),A()}),ct}catch{return o(),u(),x(),null}}function Ls(e,n){this._scope=document.documentElement,this._selector="::view-transition-"+e+"("+n+")"}Ls.prototype.animate=function(e,n){return n=typeof n=="number"?{duration:n}:L({},n),n.pseudoElement=this._selector,this._scope.animate(e,n)},Ls.prototype.getAnimations=function(){for(var e=this._scope,n=this._selector,r=e.getAnimations({subtree:!0}),o=[],u=0;u<r.length;u++){var f=r[u].effect;f!==null&&f.target===e&&f.pseudoElement===n&&o.push(r[u])}return o},Ls.prototype.getComputedStyle=function(){return getComputedStyle(this._scope,this._selector)};function By(e){return{name:e,group:new Ls("group",e),imagePair:new Ls("image-pair",e),old:new Ls("old",e),new:new Ls("new",e)}}function Di(e){this._fragmentFiber=e,this._observers=this._eventListeners=null}Di.prototype.addEventListener=function(e,n,r){var o=null,u=null;if(!(r!=null&&typeof r!="boolean"&&(o=r.signal||null,o!==null&&o.aborted))){this._eventListeners===null&&(this._eventListeners=[]);var f=this._eventListeners;if(Gy(f,e,n,r)===-1){var x=this,A=n;r!=null&&typeof r!="boolean"&&r.once===!0&&(A=function(I){x.removeEventListener(e,n,r),typeof n=="function"?n.call(this,I):n.handleEvent(I)}),o!==null&&(u=x.removeEventListener.bind(x,e,n,r),o.addEventListener("abort",u,{once:!0}),u=o.removeEventListener.bind(o,"abort",u)),o=Ho(r),f.push({type:e,listener:n,optionsOrUseCapture:r,attachedListener:A,cleanup:u}),g(this._fragmentFiber.child,!1,BA,e,A,o)}this._eventListeners=f}};function BA(e,n,r,o){return S(e).addEventListener(n,r,o),!1}Di.prototype.removeEventListener=function(e,n,r){var o=this._eventListeners;if(o!==null&&(n=Gy(o,e,n,r),n!==-1)){var u=o[n];r=u.attachedListener;var f=u.cleanup;u=Ho(u.optionsOrUseCapture),g(this._fragmentFiber.child,!1,HA,e,r,u),o.splice(n,1),f!==null&&f()}};function HA(e,n,r,o){return S(e).removeEventListener(n,r,o),!1}function Ho(e){return e!=null&&typeof e!="boolean"&&(e.once===!0||e.signal instanceof AbortSignal)?{capture:e.capture,passive:e.passive}:e}function Hy(e){return e==null?"c=0":typeof e=="boolean"?"c="+(e?"1":"0"):"c="+(e.capture?"1":"0")}function Gy(e,n,r,o){if(e.length===0)return-1;o=Hy(o);for(var u=0;u<e.length;u++){var f=e[u];if(f.type===n&&f.listener===r&&Hy(f.optionsOrUseCapture)===o)return u}return-1}Di.prototype.dispatchEvent=function(e){var n=v(this._fragmentFiber);if(n===null)return!0;n=S(n);var r=this._eventListeners;if(r!==null&&0<r.length||!e.bubbles){var o=n.nodeType===9?n.createComment(""):document.createTextNode("");if(r)for(var u=0;u<r.length;u++){var f=r[u];o.addEventListener(f.type,f.attachedListener,Ho(f.optionsOrUseCapture))}if(n.appendChild(o),e=o.dispatchEvent(e),r)for(u=0;u<r.length;u++)f=r[u],o.removeEventListener(f.type,f.attachedListener,Ho(f.optionsOrUseCapture));return n.removeChild(o),e}return n.dispatchEvent(e)},Di.prototype.focus=function(e){g(this._fragmentFiber.child,!0,Vy,e,void 0,void 0)};function Vy(e,n){return e.tag===6?!1:(e=S(e),$A(e,n))}Di.prototype.focusLast=function(e){var n=[];g(this._fragmentFiber.child,!0,hm,n,void 0,void 0);for(var r=n.length-1;0<=r&&!Vy(n[r],e);r--);};function hm(e,n){return n.push(e),!1}Di.prototype.blur=function(){var e=v(this._fragmentFiber);e!==null&&(e=S(e),e=Tc(e).activeElement,e!==null&&g(this._fragmentFiber.child,!1,GA,e,void 0,void 0))};function GA(e,n){return e.tag===6?!1:(e=S(e),e===n||e.contains(n)?(n.blur(),!0):!1)}Di.prototype.observeUsing=function(e){this._observers===null&&(this._observers=new Set),this._observers.add(e),g(this._fragmentFiber.child,!1,VA,e,void 0,void 0)};function VA(e,n){return e.tag===6||(e=S(e),n.observe(e)),!1}Di.prototype.unobserveUsing=function(e){var n=this._observers;if(n!==null&&n.has(e)){n.delete(e),g(this._fragmentFiber.child,!1,kA,e,void 0,void 0);for(var r=n=0;r<oa.length;r++){var o=oa[r];o.fragmentInstance===this&&o.observer===e?e.unobserve(o.instance):oa[n++]=o}oa.length=n}};function kA(e,n){return e.tag===6||(e=S(e),n.unobserve(e)),!1}var oa=[],pm=!1;function XA(e,n,r){oa.push({fragmentInstance:e,observer:n,instance:r}),pm||(pm=!0,JA(function(){pm=!1;var o=oa;oa=[];for(var u=0;u<o.length;u++){var f=o[u];f.observer.unobserve(f.instance)}}))}Di.prototype.getClientRects=function(){var e=[];return g(this._fragmentFiber.child,!1,qA,e,void 0,void 0),e};function qA(e,n){if(e.tag===6){e=e.stateNode;var r=e.ownerDocument.createRange();r.selectNodeContents(e),n.push.apply(n,r.getClientRects())}else e=S(e),n.push.apply(n,e.getClientRects());return!1}Di.prototype.getRootNode=function(e){var n=v(this._fragmentFiber);return n===null?this:S(n).getRootNode(e)},Di.prototype.compareDocumentPosition=function(e){var n=v(this._fragmentFiber);if(n===null)return Node.DOCUMENT_POSITION_DISCONNECTED;var r=[];g(this._fragmentFiber.child,!1,hm,r,void 0,void 0);var o=S(n);if(r.length===0){if(r=o,y(this._fragmentFiber)){t:{for(n=this._fragmentFiber.return;n!==null;){if(n.tag===4){n=n.stateNode.containerInfo;break t}if(n.tag===3||n.tag===5||n.tag===27)break;n=n.return}n=null}n!=null&&(r=n)}n=this._fragmentFiber;var u=o=r.compareDocumentPosition(e);return r===e?u=Node.DOCUMENT_POSITION_CONTAINS:o&Node.DOCUMENT_POSITION_CONTAINED_BY&&(r=b(n)[1],r===null?u=Node.DOCUMENT_POSITION_PRECEDING:(e=S(r).compareDocumentPosition(e),u=e===0||e&Node.DOCUMENT_POSITION_FOLLOWING?Node.DOCUMENT_POSITION_FOLLOWING:Node.DOCUMENT_POSITION_PRECEDING)),u|=Node.DOCUMENT_POSITION_IMPLEMENTATION_SPECIFIC}n=S(r[0]),u=S(r[r.length-1]);var f=y(this._fragmentFiber)?n.parentElement:o;if(f==null)return Node.DOCUMENT_POSITION_DISCONNECTED;o=f.compareDocumentPosition(n)&Node.DOCUMENT_POSITION_CONTAINED_BY,f=f.compareDocumentPosition(u)&Node.DOCUMENT_POSITION_CONTAINED_BY;var x=n.compareDocumentPosition(e),A=u.compareDocumentPosition(e),I=x&Node.DOCUMENT_POSITION_CONTAINED_BY||A&Node.DOCUMENT_POSITION_CONTAINED_BY;return A=o&&f&&x&Node.DOCUMENT_POSITION_FOLLOWING&&A&Node.DOCUMENT_POSITION_PRECEDING,n=o&&n===e||f&&u===e||I||A?Node.DOCUMENT_POSITION_CONTAINED_BY:!o&&n===e||!f&&u===e?Node.DOCUMENT_POSITION_IMPLEMENTATION_SPECIFIC:x,n&Node.DOCUMENT_POSITION_DISCONNECTED||n&Node.DOCUMENT_POSITION_IMPLEMENTATION_SPECIFIC||WA(n,this._fragmentFiber,r[0],r[r.length-1],e)?n:Node.DOCUMENT_POSITION_IMPLEMENTATION_SPECIFIC};function WA(e,n,r,o,u){var f=fe(u);if(e&Node.DOCUMENT_POSITION_CONTAINED_BY){if(r=!!f)t:{for(;f!==null;){if(f.tag===7&&(f===n||f.alternate===n)){r=!0;break t}f=f.return}r=!1}return r}if(e&Node.DOCUMENT_POSITION_CONTAINS){if(f===null)return f=u.ownerDocument,u===f||u===f.documentElement||u===f.body;t:{for(f=n,n=v(n);f!==null;){if(!(f.tag!==5&&f.tag!==3&&f.tag!==27||f!==n&&f.alternate!==n)){f=!0;break t}f=f.return}f=!1}return f}return e&Node.DOCUMENT_POSITION_PRECEDING?((n=!!f)&&!(n=f===r)&&(n=U(r,f,H),n===null?n=!1:(g(n,!0,P,f,r),f=M,M=null,n=f!==null)),n):e&Node.DOCUMENT_POSITION_FOLLOWING?((n=!!f)&&!(n=f===o)&&(n=U(o,f,H),n===null?n=!1:(g(n,!0,N,f,o),f=M,R=M=null,n=f!==null)),n):!1}function ky(e,n){var r=e.ownerDocument.createRange();r.selectNodeContents(e),e=r.getBoundingClientRect(),window.scrollTo(window.scrollX+e.left,n?window.scrollY+e.top:window.scrollY+e.bottom-window.innerHeight)}Di.prototype.scrollIntoView=function(e){if(typeof e=="object")throw Error(s(566));var n=[];g(this._fragmentFiber.child,!1,hm,n,void 0,void 0);var r=e!==!1;if(n.length===0){var o=b(this._fragmentFiber);if(o=r?o[1]||o[0]||v(this._fragmentFiber):o[0]||o[1],o===null)return;if(o.tag===6){e=S(o),ky(e,r);return}if(o=S(o),o.nodeType!==9){if(o.nodeType===11){r="host"in o?o.host:null,r!==null&&r.scrollIntoView(e);return}o.scrollIntoView(e)}}for(o=r?n.length-1:0;o!==(r?-1:n.length);){var u=n[o];u.tag===6?(u=S(u),ky(u,r)):S(u).scrollIntoView(e),o+=r?-1:1}};function jA(e,n){return e=S(e),Xy(e,n),!1}function Xy(e,n){e.reactFragments==null&&(e.reactFragments=new Set),e.reactFragments.add(n)}function qy(e,n){var r=n._eventListeners;if(r!==null)for(var o=0;o<r.length;o++){var u=r[o];e.addEventListener(u.type,u.attachedListener,Ho(u.optionsOrUseCapture))}e.nodeType!==3&&(r=n._observers,r!==null&&r.forEach(function(f){for(var x=0,A=0;A<oa.length;A++){var I=oa[A];(I.fragmentInstance!==n||I.observer!==f||I.instance!==e)&&(oa[x++]=I)}oa.length=x,f.observe(e)}),Xy(e,n))}function YA(e,n){var r=n._eventListeners;if(r!==null)for(var o=0;o<r.length;o++){var u=r[o];e.removeEventListener(u.type,u.attachedListener,Ho(u.optionsOrUseCapture))}e.nodeType!==3&&(r=n._observers,r!==null&&r.forEach(function(f){typeof f.rootMargin=="string"?XA(n,f,e):f.unobserve(e)}),e.reactFragments!=null&&e.reactFragments.delete(n))}function mm(e){var n=e.firstChild;for(n&&n.nodeType===10&&(n=n.nextSibling);n;){var r=n;switch(n=n.nextSibling,r.nodeName){case"HTML":case"HEAD":case"BODY":mm(r),ue(r);continue;case"SCRIPT":case"STYLE":continue;case"LINK":if(r.rel.toLowerCase()==="stylesheet")continue}e.removeChild(r)}}function ZA(e,n,r,o){for(;e.nodeType===1;){var u=r;if(e.nodeName.toLowerCase()!==n.toLowerCase()){if(!o&&(e.nodeName!=="INPUT"||e.type!=="hidden"))break}else if(o){if(!e[Yt])switch(n){case"meta":if(!e.hasAttribute("itemprop"))break;return e;case"link":if(f=e.getAttribute("rel"),f==="stylesheet"&&e.hasAttribute("data-precedence"))break;if(f!==u.rel||e.getAttribute("href")!==(u.href==null||u.href===""?null:u.href)||e.getAttribute("crossorigin")!==(u.crossOrigin==null?null:u.crossOrigin)||e.getAttribute("title")!==(u.title==null?null:u.title))break;return e;case"style":if(e.hasAttribute("data-precedence"))break;return e;case"script":if(f=e.getAttribute("src"),(f!==(u.src==null?null:u.src)||e.getAttribute("type")!==(u.type==null?null:u.type)||e.getAttribute("crossorigin")!==(u.crossOrigin==null?null:u.crossOrigin))&&f&&e.hasAttribute("async")&&!e.hasAttribute("itemprop"))break;return e;default:return e}}else if(n==="input"&&e.type==="hidden"){var f=u.name==null?null:""+u.name;if(u.type==="hidden"&&e.getAttribute("name")===f)return e}else return e;if(e=Xi(e.nextSibling),e===null)break}return null}function QA(e,n,r){if(n==="")return null;for(;e.nodeType!==3;)if((e.nodeType!==1||e.nodeName!=="INPUT"||e.type!=="hidden")&&!r||(e=Xi(e.nextSibling),e===null))return null;return e}function Wy(e,n){for(;e.nodeType!==8;)if((e.nodeType!==1||e.nodeName!=="INPUT"||e.type!=="hidden")&&!n||(e=Xi(e.nextSibling),e===null))return null;return e}function gm(e){return e.data==="$?"||e.data==="$~"}function vm(e){return e.data==="$!"||e.data==="$?"&&e.ownerDocument.readyState!=="loading"}function KA(e,n){var r=e.ownerDocument;if(e.data==="$~")e._reactRetry=n;else if(e.data!=="$?"||r.readyState!=="loading")n();else{var o=function(){n(),r.removeEventListener("DOMContentLoaded",o)};r.addEventListener("DOMContentLoaded",o),e._reactRetry=o}}function Xi(e){for(;e!=null;e=e.nextSibling){var n=e.nodeType;if(n===1||n===3)break;if(n===8){if(n=e.data,n==="$"||n==="$!"||n==="$?"||n==="$~"||n==="&"||n==="F!"||n==="F")break;if(n==="/$"||n==="/&")return null}}return e}var _m=null;function jy(e){e=e.nextSibling;for(var n=0;e;){if(e.nodeType===8){var r=e.data;if(r==="/$"||r==="/&"){if(n===0)return Xi(e.nextSibling);n--}else r!=="$"&&r!=="$!"&&r!=="$?"&&r!=="$~"&&r!=="&"||n++}e=e.nextSibling}return null}function Yy(e){e=e.previousSibling;for(var n=0;e;){if(e.nodeType===8){var r=e.data;if(r==="$"||r==="$!"||r==="$?"||r==="$~"||r==="&"){if(n===0)return e;n--}else r!=="/$"&&r!=="/&"||n++}e=e.previousSibling}return null}function $A(e,n){function r(){o=!0}if(e.ownerDocument.activeElement===e)return!0;var o=!1;try{e.ownerDocument.addEventListener("focus",r,!0),(e.focus||HTMLElement.prototype.focus).call(e,n)}finally{e.ownerDocument.removeEventListener("focus",r,!0)}return o}function JA(e){Oy(function(){Oy(function(n){return e(n)})})}function Zy(e,n,r){switch(n=Tc(r),e){case"html":if(e=n.documentElement,!e)throw Error(s(452));return e;case"head":if(e=n.head,!e)throw Error(s(453));return e;case"body":if(e=n.body,!e)throw Error(s(454));return e;default:throw Error(s(451))}}function Qy(e,n,r){for(var o in r){var u=r[o];r.hasOwnProperty(o)&&u!=null&&Ke(e,n,o,null,RA,u)}r.dangerouslySetInnerHTML!=null&&(e.textContent=""),e.onclick===_a&&(e.onclick=null),ue(e)}function xm(e){for(var n=e.attributes;n.length;)e.removeAttributeNode(n[0]);ue(e)}var qi=new Map,Ky=new Set;function Ac(e){if(typeof e.getRootNode=="function"){var n=e.getRootNode();if(n.nodeType===9||n.nodeType===11)return n}return e.nodeType===9?e:e.ownerDocument}var ar=kt.d;kt.d={f:tw,r:ew,D:nw,C:iw,L:aw,m:rw,X:ow,S:sw,M:lw};function tw(){var e=ar.f(),n=Ef();return e||n}function ew(e){var n=Kt(e);n!==null&&n.tag===5&&n.type==="form"?J_(n):ar.r(e)}var Go=typeof document>"u"?null:document;function $y(e,n,r){var o=Go;if(o&&typeof n=="string"&&n){var u=Ii(n);u='link[rel="'+e+'"][href="'+u+'"]',typeof r=="string"&&(u+='[crossorigin="'+r+'"]'),Ky.has(u)||(Ky.add(u),e={rel:e,crossOrigin:r,href:n},o.querySelector(u)===null&&(n=o.createElement("link"),jn(n,"link",e),be(n),o.head.appendChild(n)))}}function nw(e){ar.D(e),$y("dns-prefetch",e,null)}function iw(e,n){ar.C(e,n),$y("preconnect",e,n)}function aw(e,n,r){ar.L(e,n,r);var o=Go;if(o&&e&&n){var u='link[rel="preload"][as="'+Ii(n)+'"]';n==="image"&&r&&r.imageSrcSet?(u+='[imagesrcset="'+Ii(r.imageSrcSet)+'"]',typeof r.imageSizes=="string"&&(u+='[imagesizes="'+Ii(r.imageSizes)+'"]')):u+='[href="'+Ii(e)+'"]';var f=u;switch(n){case"style":f=Vo(e);break;case"script":f=ko(e)}if(!(qi.has(f)||(e=L({rel:"preload",href:n==="image"&&r&&r.imageSrcSet?void 0:e,as:n},r),qi.set(f,e),o.querySelector(u)!==null||n==="style"&&o.querySelector(wc(f))||n==="script"&&o.querySelector(Rc(f))))){var x=o.createElement("link");jn(x,"link",e),n==="style"&&(x[$t]=!0,x.onload=x.onerror=function(){je(x)}),be(x),o.head.appendChild(x)}}}function rw(e,n){ar.m(e,n);var r=Go;if(r&&e){var o=n&&typeof n.as=="string"?n.as:"script",u='link[rel="modulepreload"][as="'+Ii(o)+'"][href="'+Ii(e)+'"]',f=u;switch(o){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":f=ko(e)}if(!qi.has(f)&&(e=L({rel:"modulepreload",href:e},n),qi.set(f,e),r.querySelector(u)===null)){switch(o){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":if(r.querySelector(Rc(f)))return}o=r.createElement("link"),jn(o,"link",e),be(o),r.head.appendChild(o)}}}function sw(e,n,r){ar.S(e,n,r);var o=Go;if(o&&e){var u=en(o).hoistableStyles,f=Vo(e);n=n||"default";var x=u.get(f);if(!x){var A={loading:0,preload:null};if(x=o.querySelector(wc(f)))A.loading=5;else{e=L({rel:"stylesheet",href:e,"data-precedence":n},r),(r=qi.get(f))&&ym(e,r);var I=x=o.createElement("link");be(I),jn(I,"link",e),I._p=new Promise(function($,ct){I.onload=$,I.onerror=ct}),I.addEventListener("load",function(){A.loading|=1}),I.addEventListener("error",function(){A.loading|=2}),A.loading|=4,Nf(x,n,o)}x={type:"stylesheet",instance:x,count:1,state:A},u.set(f,x)}}}function ow(e,n){ar.X(e,n);var r=Go;if(r&&e){var o=en(r).hoistableScripts,u=ko(e),f=o.get(u);f||(f=r.querySelector(Rc(u)),f||(e=L({src:e,async:!0},n),(n=qi.get(u))&&Sm(e,n),f=r.createElement("script"),be(f),jn(f,"link",e),r.head.appendChild(f)),f={type:"script",instance:f,count:1,state:null},o.set(u,f))}}function lw(e,n){ar.M(e,n);var r=Go;if(r&&e){var o=en(r).hoistableScripts,u=ko(e),f=o.get(u);f||(f=r.querySelector(Rc(u)),f||(e=L({src:e,async:!0,type:"module"},n),(n=qi.get(u))&&Sm(e,n),f=r.createElement("script"),be(f),jn(f,"link",e),r.head.appendChild(f)),f={type:"script",instance:f,count:1,state:null},o.set(u,f))}}function Jy(e,n,r,o){var u=(u=tn.current)?Ac(u):null;if(!u)throw Error(s(446));switch(e){case"meta":case"title":return null;case"style":return typeof r.precedence=="string"&&typeof r.href=="string"?(r=Vo(r.href),n=en(u).hoistableStyles,o=n.get(r),o||(o={type:"style",instance:null,count:0,state:null},n.set(r,o)),o):{type:"void",instance:null,count:0,state:null};case"link":if(r.rel==="stylesheet"&&typeof r.href=="string"&&typeof r.precedence=="string"){e=Vo(r.href);var f=en(u).hoistableStyles,x=f.get(e);if(x||(u=u.ownerDocument||u,x={type:"stylesheet",instance:null,count:0,state:{loading:0,preload:null}},f.set(e,x),(f=u.querySelector(wc(e)))?f._p||(x.instance=f,x.state.loading=5):(f=qi.get(e),f||(f={rel:"preload",as:"style",href:r.href,crossOrigin:r.crossOrigin,integrity:r.integrity,media:r.media,hrefLang:r.hrefLang,referrerPolicy:r.referrerPolicy},qi.set(e,f)),cw(u,e,f,x.state))),n&&o===null)throw Error(s(528,""));return x}if(n&&o!==null)throw Error(s(529,""));return null;case"script":return n=r.async,r=r.src,typeof r=="string"&&n&&typeof n!="function"&&typeof n!="symbol"?(r=ko(r),n=en(u).hoistableScripts,o=n.get(r),o||(o={type:"script",instance:null,count:0,state:null},n.set(r,o)),o):{type:"void",instance:null,count:0,state:null};default:throw Error(s(444,e))}}function Vo(e){return'href="'+Ii(e)+'"'}function wc(e){return'link[rel="stylesheet"]['+e+"]"}function tS(e){return L({},e,{"data-precedence":e.precedence,precedence:null})}function cw(e,n,r,o){if(n=e.querySelector('link[rel="preload"][as="style"]['+n+"]")){if(n[$t]!==!0){o.loading=1;return}}else n=e.createElement("link"),n[$t]=!0,n.onload=n.onerror=je.bind(null,n),jn(n,"link",r),be(n),e.head.appendChild(n);o.preload=n,n.addEventListener("load",function(){return o.loading|=1}),n.addEventListener("error",function(){return o.loading|=2})}function ko(e){return'[src="'+Ii(e)+'"]'}function Rc(e){return"script[async]"+e}function eS(e,n,r){if(n.count++,n.instance===null)switch(n.type){case"style":var o=e.querySelector('style[data-href~="'+Ii(r.href)+'"]');if(o)return n.instance=o,be(o),o;var u=L({},r,{"data-href":r.href,"data-precedence":r.precedence,href:null,precedence:null});return o=(e.ownerDocument||e).createElement("style"),be(o),jn(o,"style",u),Nf(o,r.precedence,e),n.instance=o;case"stylesheet":u=Vo(r.href);var f=e.querySelector(wc(u));if(f)return n.state.loading|=4,n.instance=f,be(f),f;o=tS(r),(u=qi.get(u))&&ym(o,u),f=(e.ownerDocument||e).createElement("link"),be(f);var x=f;return x._p=new Promise(function(A,I){x.onload=A,x.onerror=I}),jn(f,"link",o),n.state.loading|=4,Nf(f,r.precedence,e),n.instance=f;case"script":return f=ko(r.src),(u=e.querySelector(Rc(f)))?(n.instance=u,be(u),u):(o=r,(u=qi.get(f))&&(o=L({},r),Sm(o,u)),e=e.ownerDocument||e,u=e.createElement("script"),be(u),jn(u,"link",o),e.head.appendChild(u),n.instance=u);case"void":return null;default:throw Error(s(443,n.type))}else n.type==="stylesheet"&&(n.state.loading&4)===0&&(o=n.instance,n.state.loading|=4,Nf(o,r.precedence,e));return n.instance}function Nf(e,n,r){for(var o=r.querySelectorAll('link[rel="stylesheet"][data-precedence],style[data-precedence]'),u=o.length?o[o.length-1]:null,f=u,x=0;x<o.length;x++){var A=o[x];if(A.dataset.precedence===n)f=A;else if(f!==u)break}f?f.parentNode.insertBefore(e,f.nextSibling):(n=r.nodeType===9?r.head:r,n.insertBefore(e,n.firstChild))}function ym(e,n){e.crossOrigin==null&&(e.crossOrigin=n.crossOrigin),e.referrerPolicy==null&&(e.referrerPolicy=n.referrerPolicy),e.title==null&&(e.title=n.title)}function Sm(e,n){e.crossOrigin==null&&(e.crossOrigin=n.crossOrigin),e.referrerPolicy==null&&(e.referrerPolicy=n.referrerPolicy),e.integrity==null&&(e.integrity=n.integrity)}var Uf=null;function nS(e,n,r){if(Uf===null){var o=new Map,u=Uf=new Map;u.set(r,o)}else u=Uf,o=u.get(r),o||(o=new Map,u.set(r,o));if(o.has(e))return o;for(o.set(e,null),r=r.getElementsByTagName(e),u=0;u<r.length;u++){var f=r[u];if(!(f[Yt]||f[j]||e==="link"&&f.getAttribute("rel")==="stylesheet")&&f.namespaceURI!=="http://www.w3.org/2000/svg"){var x=f.getAttribute(n)||"";x=e+x;var A=o.get(x);A?A.push(f):o.set(x,[f])}}return o}function Mm(e,n,r){e=e.ownerDocument||e,e.head.insertBefore(r,n==="title"?e.querySelector("head > title"):null)}function uw(e,n,r){if(r===1||n.itemProp!=null)return!1;switch(e){case"meta":case"title":return!0;case"style":if(typeof n.precedence!="string"||typeof n.href!="string"||n.href==="")break;return!0;case"link":if(typeof n.rel!="string"||typeof n.href!="string"||n.href===""||n.onLoad||n.onError)break;switch(n.rel){case"stylesheet":return e=n.disabled,typeof n.precedence=="string"&&e==null;default:return!0}case"script":if(n.async&&typeof n.async!="function"&&typeof n.async!="symbol"&&!n.onLoad&&!n.onError&&n.src&&typeof n.src=="string")return!0}return!1}function iS(e,n){return e==="img"&&n.src!=null&&n.src!==""&&n.onLoad==null&&n.loading!=="lazy"}function aS(e){return!(e.type==="stylesheet"&&(e.state.loading&3)===0)}function rS(e){return(e.width||100)*(e.height||100)*(typeof devicePixelRatio=="number"?devicePixelRatio:1)*.25}function sS(e,n){typeof n.decode=="function"&&(e.imgCount++,n.complete||(e.imgBytes+=rS(n),e.suspenseyImages.push(n)),e=hw.bind(e),n.decode().then(e,e))}function fw(e,n,r,o){if(r.type==="stylesheet"&&(typeof o.media!="string"||matchMedia(o.media).matches!==!1)&&(r.state.loading&4)===0){if(r.instance===null){var u=Vo(o.href),f=n.querySelector(wc(u));if(f){n=f._p,n!==null&&typeof n=="object"&&typeof n.then=="function"&&(e.count++,e=Cc.bind(e),n.then(e,e)),r.state.loading|=4,r.instance=f,be(f);return}f=n.ownerDocument||n,o=tS(o),(u=qi.get(u))&&ym(o,u),f=f.createElement("link"),be(f);var x=f;x._p=new Promise(function(A,I){x.onload=A,x.onerror=I}),jn(f,"link",o),r.instance=f}e.stylesheets===null&&(e.stylesheets=new Map),e.stylesheets.set(r,n),(n=r.state.preload)&&(r.state.loading&3)===0&&(e.count++,r=Cc.bind(e),n.addEventListener("load",r),n.addEventListener("error",r))}}var Lf=0;function dw(e,n){return e.stylesheets&&e.count===0&&Pf(e,e.stylesheets),0<e.count||0<e.imgCount?function(r){var o=setTimeout(function(){if(e.stylesheets&&Pf(e,e.stylesheets),e.unsuspend){var f=e.unsuspend;e.unsuspend=null,f()}},6e4+n);0<e.imgBytes&&Lf===0&&(Lf=62500*DA());var u=setTimeout(function(){if(e.waitingForImages=!1,e.count===0&&(e.stylesheets&&Pf(e,e.stylesheets),e.unsuspend)){var f=e.unsuspend;e.unsuspend=null,f()}},(e.imgBytes>Lf?50:800)+n);return e.unsuspend=r,function(){e.unsuspend=null,clearTimeout(o),clearTimeout(u)}}:null}function oS(e){if(e.count===0&&(e.imgCount===0||!e.waitingForImages)){if(e.stylesheets)Pf(e,e.stylesheets);else if(e.unsuspend){var n=e.unsuspend;e.unsuspend=null,n()}}}function Cc(){this.count--,oS(this)}function hw(){this.imgCount--,oS(this)}var Of=null;function Pf(e,n){e.stylesheets=null,e.unsuspend!==null&&(e.count++,Of=new Map,n.forEach(pw,e),Of=null,Cc.call(e))}function pw(e,n){if(!(n.state.loading&4)){var r=Of.get(e);if(r)var o=r.get(null);else{r=new Map,Of.set(e,r);for(var u=e.querySelectorAll("link[data-precedence],style[data-precedence]"),f=0;f<u.length;f++){var x=u[f];(x.nodeName==="LINK"||x.getAttribute("media")!=="not all")&&(r.set(x.dataset.precedence,x),o=x)}o&&r.set(null,o)}u=n.instance,x=u.getAttribute("data-precedence"),f=r.get(x)||o,f===o&&r.set(null,u),r.set(x,u),this.count++,o=Cc.bind(this),u.addEventListener("load",o),u.addEventListener("error",o),f?f.parentNode.insertBefore(u,f.nextSibling):(e=e.nodeType===9?e.head:e,e.insertBefore(u,e.firstChild)),n.state.loading|=4}}var Xo={$$typeof:X,Provider:null,Consumer:null,_currentValue:he,_currentValue2:he,_threadCount:0};function mw(e,n,r,o,u,f,x,A,I){this.tag=1,this.containerInfo=e,this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.next=this.pendingContext=this.context=this.cancelPendingCommit=null,this.callbackPriority=0,this.expirationTimes=br(-1),this.entangledLanes=this.shellSuspendCounter=this.errorRecoveryDisabledLanes=this.expiredLanes=this.warmLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=br(0),this.hiddenUpdates=br(null),this.identifierPrefix=o,this.onUncaughtError=u,this.onCaughtError=f,this.onRecoverableError=x,this.pooledCache=null,this.pooledCacheLanes=0,this.formState=I,this.transitionTypes=null,this.incompleteTransitions=new Map}function lS(e,n,r,o,u,f,x,A,I,$,ct,_t){return e=new mw(e,n,r,x,I,$,ct,_t,A),n=1,f===!0&&(n|=24),f=di(3,null,null,n),e.current=f,f.stateNode=e,n=Ih(),n.refCount++,e.pooledCache=n,n.refCount++,f.memoizedState={element:o,isDehydrated:r,cache:n},Gh(f),e}function cS(e){return e?(e=go,e):go}function uS(e,n,r,o,u,f){u=cS(u),o.context===null?o.context=u:o.pendingContext=u,o=Or(n),o.payload={element:r},f=f===void 0?null:f,f!==null&&(o.callback=f),r=Pr(e,o,n),r!==null&&(gi(r,e,n),sc(r,e,n))}function fS(e,n){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var r=e.retryLane;e.retryLane=r!==0&&r<n?r:n}}function bm(e,n){fS(e,n),(e=e.alternate)&&fS(e,n)}function dS(e){if(e.tag===13||e.tag===31){var n=gs(e,67108864);n!==null&&gi(n,e,67108864),bm(e,67108864)}}function hS(e){if(e.tag===13||e.tag===31){var n=Ci();n=Vl(n);var r=gs(e,n);r!==null&&gi(r,e,n),bm(e,n)}}var qo=!0;function gw(e,n,r,o){var u=Mt.T;Mt.T=null;var f=kt.p;try{kt.p=2,Em(e,n,r,o)}finally{kt.p=f,Mt.T=u}}function vw(e,n,r,o){var u=Mt.T;Mt.T=null;var f=kt.p;try{kt.p=8,Em(e,n,r,o)}finally{kt.p=f,Mt.T=u}}function Em(e,n,r,o){if(qo){var u=Tm(o);if(u===null)rm(e,n,o,zf,r),mS(e,o);else if(xw(u,e,n,r,o))o.stopPropagation();else if(mS(e,o),n&4&&-1<_w.indexOf(e)){for(;u!==null;){var f=Kt(u);if(f!==null)switch(f.tag){case 3:if(f=f.stateNode,f.current.memoizedState.isDehydrated){var x=ei(f.pendingLanes);if(x!==0){var A=f;for(A.pendingLanes|=2,A.entangledLanes|=2;x;){var I=1<<31-xe(x);A.entanglements[1]|=I,x&=~I}Ra(f),(Xe&6)===0&&(Sf=ne()+500,Mc(0))}}break;case 31:case 13:A=gs(f,2),A!==null&&gi(A,f,2),Ef(),bm(f,2)}if(f=Tm(o),f===null&&rm(e,n,o,zf,r),f===u)break;u=f}u!==null&&o.stopPropagation()}else rm(e,n,o,null,r)}}function Tm(e){return e=uh(e),Am(e)}var zf=null;function Am(e){if(zf=null,e=fe(e),e!==null){var n=c(e);if(n===null)e=null;else{var r=n.tag;if(r===13){if(e=d(n),e!==null)return e;e=null}else if(r===31){if(e=h(n),e!==null)return e;e=null}else if(r===3){if(n.stateNode.current.memoizedState.isDehydrated)return n.tag===3?n.stateNode.containerInfo:null;e=null}else n!==e&&(e=null)}}return zf=e,null}function pS(e){switch(e){case"beforetoggle":case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"seeked":case"submit":case"toggle":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"fullscreenerror":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 2;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"resize":case"scroll":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 8;case"message":switch(ve()){case Le:return 2;case q:return 8;case At:case xt:return 32;case Vt:return 268435456;default:return 32}default:return 32}}var wm=!1,jr=null,Yr=null,Zr=null,Dc=new Map,Nc=new Map,Qr=[],_w="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(" ");function mS(e,n){switch(e){case"focusin":case"focusout":jr=null;break;case"dragenter":case"dragleave":Yr=null;break;case"mouseover":case"mouseout":Zr=null;break;case"pointerover":case"pointerout":Dc.delete(n.pointerId);break;case"gotpointercapture":case"lostpointercapture":Nc.delete(n.pointerId)}}function Uc(e,n,r,o,u,f){return e===null||e.nativeEvent!==f?(e={blockedOn:n,domEventName:r,eventSystemFlags:o,nativeEvent:f,targetContainers:[u]},n!==null&&(n=Kt(n),n!==null&&dS(n)),e):(e.eventSystemFlags|=o,n=e.targetContainers,u!==null&&n.indexOf(u)===-1&&n.push(u),e)}function xw(e,n,r,o,u){switch(n){case"focusin":return jr=Uc(jr,e,n,r,o,u),!0;case"dragenter":return Yr=Uc(Yr,e,n,r,o,u),!0;case"mouseover":return Zr=Uc(Zr,e,n,r,o,u),!0;case"pointerover":var f=u.pointerId;return Dc.set(f,Uc(Dc.get(f)||null,e,n,r,o,u)),!0;case"gotpointercapture":return f=u.pointerId,Nc.set(f,Uc(Nc.get(f)||null,e,n,r,o,u)),!0}return!1}function gS(e){var n=fe(e.target);if(n!==null){var r=c(n);if(r!==null){if(n=r.tag,n===13){if(n=d(r),n!==null){e.blockedOn=n,Mu(e.priority,function(){hS(r)});return}}else if(n===31){if(n=h(r),n!==null){e.blockedOn=n,Mu(e.priority,function(){hS(r)});return}}else if(n===3&&r.stateNode.current.memoizedState.isDehydrated){e.blockedOn=r.tag===3?r.stateNode.containerInfo:null;return}}}e.blockedOn=null}function If(e){if(e.blockedOn!==null)return!1;for(var n=e.targetContainers;0<n.length;){var r=Tm(e.nativeEvent);if(r===null){r=e.nativeEvent;var o=new r.constructor(r.type,r);ch=o,r.target.dispatchEvent(o),ch=null}else return n=Kt(r),n!==null&&dS(n),e.blockedOn=r,!1;n.shift()}return!0}function vS(e,n,r){If(e)&&r.delete(n)}function yw(){wm=!1,jr!==null&&If(jr)&&(jr=null),Yr!==null&&If(Yr)&&(Yr=null),Zr!==null&&If(Zr)&&(Zr=null),Dc.forEach(vS),Nc.forEach(vS)}function Ff(e,n){e.blockedOn===n&&(e.blockedOn=null,wm||(wm=!0,a.unstable_scheduleCallback(a.unstable_NormalPriority,yw)))}var Bf=null;function _S(e){Bf!==e&&(Bf=e,a.unstable_scheduleCallback(a.unstable_NormalPriority,function(){Bf===e&&(Bf=null);for(var n=0;n<e.length;n+=3){var r=e[n],o=e[n+1],u=e[n+2];if(typeof o!="function"){if(Am(o||r)===null)continue;break}var f=Kt(r);f!==null&&(e.splice(n,3),n-=3,lp(f,{pending:!0,data:u,method:r.method,action:o},o,u))}}))}function Wo(e){function n(I){return Ff(I,e)}jr!==null&&Ff(jr,e),Yr!==null&&Ff(Yr,e),Zr!==null&&Ff(Zr,e),Dc.forEach(n),Nc.forEach(n);for(var r=0;r<Qr.length;r++){var o=Qr[r];o.blockedOn===e&&(o.blockedOn=null)}for(;0<Qr.length&&(r=Qr[0],r.blockedOn===null);)gS(r),r.blockedOn===null&&Qr.shift();if(r=(e.ownerDocument||e).$$reactFormReplay,r!=null)for(o=0;o<r.length;o+=3){var u=r[o],f=r[o+1],x=u[st]||null;if(typeof f=="function")x||_S(r);else if(x){var A=null;if(f&&f.hasAttribute("formAction")){if(u=f,x=f[st]||null)A=x.formAction;else if(Am(u)!==null)continue}else A=x.action;typeof A=="function"?r[o+1]=A:(r.splice(o,3),o-=3),_S(r)}}}function xS(){function e(f){f.canIntercept&&f.info==="react-transition"&&f.intercept({handler:function(){return new Promise(function(x){return u=x})},focusReset:"manual",scroll:"manual"})}function n(){u!==null&&(u(),u=null),o||setTimeout(r,20)}function r(){if(!o&&!navigation.transition){var f=navigation.currentEntry;f&&f.url!=null&&navigation.navigate(f.url,{state:f.getState(),info:"react-transition",history:"replace"})}}if(typeof navigation=="object"){var o=!1,u=null;return navigation.addEventListener("navigate",e),navigation.addEventListener("navigatesuccess",n),navigation.addEventListener("navigateerror",n),setTimeout(r,100),function(){o=!0,navigation.removeEventListener("navigate",e),navigation.removeEventListener("navigatesuccess",n),navigation.removeEventListener("navigateerror",n),u!==null&&(u(),u=null)}}}function Rm(e){this._internalRoot=e}Hf.prototype.render=Rm.prototype.render=function(e){var n=this._internalRoot;if(n===null)throw Error(s(409));var r=n.current,o=Ci();uS(r,o,e,n,null,null)},Hf.prototype.unmount=Rm.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var n=e.containerInfo;uS(e.current,2,null,e,null,null),Ef(),n[at]=null}};function Hf(e){this._internalRoot=e}Hf.prototype.unstable_scheduleHydration=function(e){if(e){var n=Su();e={blockedOn:null,target:e,priority:n};for(var r=0;r<Qr.length&&n!==0&&n<Qr[r].priority;r++);Qr.splice(r,0,e),r===0&&gS(e)}};var yS=t.version;if(yS!=="19.3.0")throw Error(s(527,yS,"19.3.0"));kt.findDOMNode=function(e){var n=e._reactInternals;if(n===void 0)throw typeof e.render=="function"?Error(s(188)):(e=Object.keys(e).join(","),Error(s(268,e)));return e=m(n),e=e!==null?_(e):null,e=e===null?null:e.stateNode,e};var Sw={bundleType:0,version:"19.3.0",rendererPackageName:"react-dom",currentDispatcherRef:Mt,reconcilerVersion:"19.3.0"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var Gf=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!Gf.isDisabled&&Gf.supportsFiber)try{Zt=Gf.inject(Sw),ae=Gf}catch{}}return Kc.createRoot=function(e,n){if(!l(e))throw Error(s(299));var r=!1,o="",u=cx,f=ux,x=fx;return n!=null&&(n.unstable_strictMode===!0&&(r=!0),n.identifierPrefix!==void 0&&(o=n.identifierPrefix),n.onUncaughtError!==void 0&&(u=n.onUncaughtError),n.onCaughtError!==void 0&&(f=n.onCaughtError),n.onRecoverableError!==void 0&&(x=n.onRecoverableError)),n=lS(e,1,!1,null,null,r,o,null,u,f,x,xS),e[at]=n.current,am(e),new Rm(n)},Kc.hydrateRoot=function(e,n,r){if(!l(e))throw Error(s(299));var o=!1,u="",f=cx,x=ux,A=fx,I=null;return r!=null&&(r.unstable_strictMode===!0&&(o=!0),r.identifierPrefix!==void 0&&(u=r.identifierPrefix),r.onUncaughtError!==void 0&&(f=r.onUncaughtError),r.onCaughtError!==void 0&&(x=r.onCaughtError),r.onRecoverableError!==void 0&&(A=r.onRecoverableError),r.formState!==void 0&&(I=r.formState)),n=lS(e,1,!0,n,r??null,o,u,I,f,x,A,xS),n.context=cS(null),r=n.current,o=Ci(),o=Vl(o),u=Or(o),u.callback=null,Pr(r,u,o),r=o,n.current.lanes=r,Er(n,r),Ra(n),e[at]=n.current,am(e),new Hf(n)},Kc.version="19.3.0",Kc}var DM;function s4(){if(DM)return F0.exports;DM=1;function a(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(a)}catch(t){console.error(t)}}return a(),F0.exports=r4(),F0.exports}var NM=s4();class d4{constructor(t){this.version=t4,t.ipd=0,tv.getState().setInputMode(t.primaryInputMode),this.devUIContainer=document.createElement("div"),this.devUIContainer.style.position="fixed",this.devUIContainer.style.width="100vw",this.devUIContainer.style.height="100vh",this.devUIContainer.style.top="50vh",this.devUIContainer.style.left="50vw",this.devUIContainer.style.transform="translate(-50%, -50%)",this.devUIContainer.style.pointerEvents="none";const i=this.devUIContainer.attachShadow({mode:"open"});this.inputLayer=new JP(t),this.unsubscribeControlMode=t.onControlModeChange(c=>{this.inputLayer.isInProgrammaticMode=c==="programmatic",c==="programmatic"?(this.inputLayer.syncFromDevice(),this.inputLayer.setInteractionsEnabled(!1)):this.inputLayer.setInteractionsEnabled(!0)}),this.unsubscribeStateChange=t.onStateChange(()=>{this.inputLayer.isInProgrammaticMode&&this.inputLayer.syncFromDevice()}),NM.createRoot(i).render(G.jsx(o4,{xrDevice:t,inputLayer:this.inputLayer,shadowRoot:i}));const l=()=>{const c=document.createElement("div");document.body.appendChild(c);const d=c.attachShadow({mode:"open"});NM.createRoot(d).render(G.jsx(l4,{xrDevice:t,shadowRoot:d}))};document.body?l():window.onload=l}render(t){this.inputLayer.renderScene(t)}applyDefaultPose(t){this.inputLayer.applyDefaultPose(t)}dispose(){this.unsubscribeControlMode(),this.unsubscribeStateChange(),this.inputLayer.dispose()}get devUICanvas(){return this.inputLayer.domElement}}const o4=({xrDevice:a,inputLayer:t,shadowRoot:i})=>{const[s,l]=ge.useState(!1),[c,d]=ge.useState(a.controlMode);return ge.useEffect(()=>{const h=()=>{const m=document.pointerLockElement||document.mozPointerLockElement||document.webkitPointerLockElement;l(!!m)};document.addEventListener("pointerlockchange",h,!1),document.addEventListener("mozpointerlockchange",h,!1),document.addEventListener("webkitpointerlockchange",h,!1);const p=a.onControlModeChange(m=>{d(m)});return()=>{document.removeEventListener("pointerlockchange",h,!1),document.removeEventListener("mozpointerlockchange",h,!1),document.removeEventListener("webkitpointerlockchange",h,!1),p()}},[a]),G.jsx(ub,{target:i,disableCSSOMInjection:!0,children:G.jsxs("div",{style:{width:"100vw",height:"100vh",display:"flex",flexDirection:"column",justifyContent:"space-between",pointerEvents:"none"},children:[c==="programmatic"&&G.jsxs(G.Fragment,{children:[G.jsx("div",{style:{position:"absolute",top:0,left:0,right:0,bottom:0,pointerEvents:"none",zIndex:999,boxShadow:"inset 0 0 20px 5px rgba(59, 130, 246, 0.5)"}}),G.jsxs("div",{style:{position:"absolute",bottom:"8px",left:"50%",transform:"translateX(-50%)",backgroundColor:"rgba(59, 130, 246, 0.9)",color:"white",padding:"6px 16px",borderRadius:"16px",fontSize:"12px",fontFamily:"system-ui, sans-serif",fontWeight:500,zIndex:1e3,display:"flex",alignItems:"center",gap:"6px",boxShadow:"0 2px 8px rgba(0,0,0,0.3)"},children:[G.jsx("span",{style:{fontSize:"14px"},children:"●"}),"Remote Control Active"]})]}),c!=="programmatic"&&G.jsxs(G.Fragment,{children:[G.jsx(SR,{xrDevice:a,inputLayer:t}),G.jsx(vR,{xrDevice:a,inputLayer:t,pointerLocked:s})]})]})})},l4=({xrDevice:a,shadowRoot:t})=>{const[i,s]=fn.useState(a.sessionOffered&&!a.activeSession);return fn.useEffect(()=>{const l=setInterval(()=>{s(a.sessionOffered&&!a.activeSession)},1e3);return()=>{clearInterval(l)}},[]),G.jsx(ub,{target:t,disableCSSOMInjection:!0,children:G.jsxs(Z0,{style:{zIndex:899,position:"fixed",top:"8px",display:"flex",flexDirection:"row",alignItems:"center",justifyItems:"space-between",left:"50vw",transform:i?"translateX(-50%)":"translateX(-50%) translateY(calc(-100% - 12px))",transition:"transform 0.2s ease-in-out",paddingLeft:"5px",gap:"3px"},children:[G.jsx(me,{name:"iwer",size:24}),G.jsx(xi,{onClick:()=>{a.grantOfferedSession()},style:{fontSize:"16px"},children:"Enter XR"})]})})};export{qS as DEFAULT_KEYMAP,d4 as DevUI,F3 as IWE_PREFS_CHANNEL,t4 as VERSION,to as emitPrefsPatch,u4 as emitPrefsPatchDebounced,B3 as getEnvironmentLoader,f4 as setEnvironmentLoader,Jg as useKeyMapStore};
