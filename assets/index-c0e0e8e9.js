import{l as Z,X as qe,t as C,v as R,D as e,f as ae,az as Je,o as J,av as Xe,a as Ae,af as me,ad as Be,n as Qe,q as W,u as ye,y as i,G as f,B as g,z as M,A as P,ag as ne,C as B,R as oe,F as b,H as re,aG as Ze,ah as ie,a2 as Te,a7 as x,au as he,L as Q,E as Me,J as H,K as z,O as U,_ as se,a0 as Oe,am as ge,aT as et,an as tt,V as Ve,a4 as at,m as q,Y as ot,a9 as nt,b as st,M as be,P as lt,aU as rt,aP as Ce,aQ as Ie,aC as Re,aV as it,aW as ct,aX as ut,ak as pt,aY as dt,aZ as vt,a_ as ft,a$ as mt}from"./index-979d7bd3.js";import{u as _t,v as yt,E as ht,a as gt}from"./loading-91a3ecff.js";import{r as _e,u as D,c as bt,s as Ct,E as It,P as wt,q as $t}from"./ContentBox-37f3b621.js";import{t as Ne,a as ce,E as kt}from"./button-015b44a3.js";import{_ as Y}from"./plugin-vueexport-helper-c27b6911.js";import"./vnode-6ff96002.js";const St=Z({initialIndex:{type:Number,default:0},height:{type:String,default:""},trigger:{type:String,values:["hover","click"],default:"hover"},autoplay:{type:Boolean,default:!0},interval:{type:Number,default:3e3},indicatorPosition:{type:String,values:["","none","outside"],default:""},arrow:{type:String,values:["always","hover","never"],default:"hover"},type:{type:String,values:["","card"],default:""},loop:{type:Boolean,default:!0},direction:{type:String,values:["horizontal","vertical"],default:"horizontal"},pauseOnHover:{type:Boolean,default:!0}}),Et={change:(t,s)=>[t,s].every(qe)},xe=Symbol("carouselContextKey"),Le=300,Tt=(t,s,n)=>{const{children:a,addChild:p,removeChild:r}=_t(Be(),"ElCarouselItem"),o=C(-1),u=C(null),m=C(!1),c=C(),v=C(0),I=R(()=>t.arrow!=="never"&&!e(w)),T=R(()=>a.value.some(d=>d.props.label.toString().length>0)),k=R(()=>t.type==="card"),w=R(()=>t.direction==="vertical"),_=R(()=>t.height!=="auto"?{height:t.height}:{height:`${v.value}px`,overflow:"hidden"}),l=Ne(d=>{h(d)},Le,{trailing:!0}),O=Ne(d=>{X(d)},Le);function K(){u.value&&(clearInterval(u.value),u.value=null)}function G(){t.interval<=0||!t.autoplay||u.value||(u.value=setInterval(()=>$(),t.interval))}const $=()=>{o.value<a.value.length-1?o.value=o.value+1:t.loop&&(o.value=0)};function h(d){if(Qe(d)){const ee=a.value.filter(le=>le.props.name===d);ee.length>0&&(d=a.value.indexOf(ee[0]))}if(d=Number(d),Number.isNaN(d)||d!==Math.floor(d))return;const L=a.value.length,j=o.value;d<0?o.value=t.loop?L-1:0:d>=L?o.value=t.loop?0:L-1:o.value=d,j===o.value&&N(j),$e()}function N(d){a.value.forEach((L,j)=>{L.translateItem(j,o.value,d)})}function y(d,L){var j,ee,le,ke;const te=e(a),Se=te.length;if(Se===0||!d.states.inStage)return!1;const Ke=L+1,je=L-1,Ee=Se-1,Ge=te[Ee].states.active,Fe=te[0].states.active,We=(ee=(j=te[Ke])==null?void 0:j.states)==null?void 0:ee.active,Ye=(ke=(le=te[je])==null?void 0:le.states)==null?void 0:ke.active;return L===Ee&&Fe||We?"left":L===0&&Ge||Ye?"right":!1}function V(){m.value=!0,t.pauseOnHover&&K()}function F(){m.value=!1,G()}function S(d){e(w)||a.value.forEach((L,j)=>{d===y(L,j)&&(L.states.hover=!0)})}function E(){e(w)||a.value.forEach(d=>{d.states.hover=!1})}function A(d){o.value=d}function X(d){t.trigger==="hover"&&d!==o.value&&(o.value=d)}function pe(){h(o.value-1)}function ze(){h(o.value+1)}function $e(){K(),G()}function De(d){t.height==="auto"&&(v.value=d)}ae(()=>o.value,(d,L)=>{N(L),L>-1&&s("change",d,L)}),ae(()=>t.autoplay,d=>{d?G():K()}),ae(()=>t.loop,()=>{h(o.value)}),ae(()=>t.interval,()=>{$e()}),ae(()=>a.value,()=>{a.value.length>0&&h(t.initialIndex)});const de=Je();return J(()=>{de.value=Xe(c.value,()=>{N()}),G()}),Ae(()=>{K(),c.value&&de.value&&de.value.stop()}),me(xe,{root:c,isCardType:k,isVertical:w,items:a,loop:t.loop,addItem:p,removeItem:r,setActiveItem:h,setContainerHeight:De}),{root:c,activeIndex:o,arrowDisplay:I,hasLabel:T,hover:m,isCardType:k,items:a,isVertical:w,containerStyle:_,handleButtonEnter:S,handleButtonLeave:E,handleIndicatorClick:A,handleMouseEnter:V,handleMouseLeave:F,setActiveItem:h,prev:pe,next:ze,throttledArrowClick:l,throttledIndicatorHover:O}},Nt=["onMouseenter","onClick"],Lt={key:0},Pt="ElCarousel",At=W({name:Pt}),Bt=W({...At,props:St,emits:Et,setup(t,{expose:s,emit:n}){const a=t,{root:p,activeIndex:r,arrowDisplay:o,hasLabel:u,hover:m,isCardType:c,items:v,isVertical:I,containerStyle:T,handleButtonEnter:k,handleButtonLeave:w,handleIndicatorClick:_,handleMouseEnter:l,handleMouseLeave:O,setActiveItem:K,prev:G,next:$,throttledArrowClick:h,throttledIndicatorHover:N}=Tt(a,n),y=ye("carousel"),V=R(()=>{const S=[y.b(),y.m(a.direction)];return e(c)&&S.push(y.m("card")),S}),F=R(()=>{const S=[y.e("indicators"),y.em("indicators",a.direction)];return e(u)&&S.push(y.em("indicators","labels")),a.indicatorPosition==="outside"&&S.push(y.em("indicators","outside")),e(I)&&S.push(y.em("indicators","right")),S});return s({setActiveItem:K,prev:G,next:$}),(S,E)=>(i(),f("div",{ref_key:"root",ref:p,class:B(e(V)),onMouseenter:E[6]||(E[6]=oe((...A)=>e(l)&&e(l)(...A),["stop"])),onMouseleave:E[7]||(E[7]=oe((...A)=>e(O)&&e(O)(...A),["stop"]))},[g("div",{class:B(e(y).e("container")),style:Me(e(T))},[e(o)?(i(),M(Te,{key:0,name:"carousel-arrow-left",persisted:""},{default:P(()=>[ne(g("button",{type:"button",class:B([e(y).e("arrow"),e(y).em("arrow","left")]),onMouseenter:E[0]||(E[0]=A=>e(k)("left")),onMouseleave:E[1]||(E[1]=(...A)=>e(w)&&e(w)(...A)),onClick:E[2]||(E[2]=oe(A=>e(h)(e(r)-1),["stop"]))},[b(e(re),null,{default:P(()=>[b(e(Ze))]),_:1})],34),[[ie,(S.arrow==="always"||e(m))&&(a.loop||e(r)>0)]])]),_:1})):x("v-if",!0),e(o)?(i(),M(Te,{key:1,name:"carousel-arrow-right",persisted:""},{default:P(()=>[ne(g("button",{type:"button",class:B([e(y).e("arrow"),e(y).em("arrow","right")]),onMouseenter:E[3]||(E[3]=A=>e(k)("right")),onMouseleave:E[4]||(E[4]=(...A)=>e(w)&&e(w)(...A)),onClick:E[5]||(E[5]=oe(A=>e(h)(e(r)+1),["stop"]))},[b(e(re),null,{default:P(()=>[b(e(he))]),_:1})],34),[[ie,(S.arrow==="always"||e(m))&&(a.loop||e(r)<e(v).length-1)]])]),_:1})):x("v-if",!0),Q(S.$slots,"default")],6),S.indicatorPosition!=="none"?(i(),f("ul",{key:0,class:B(e(F))},[(i(!0),f(H,null,z(e(v),(A,X)=>(i(),f("li",{key:X,class:B([e(y).e("indicator"),e(y).em("indicator",S.direction),e(y).is("active",X===e(r))]),onMouseenter:pe=>e(N)(X),onClick:oe(pe=>e(_)(X),["stop"])},[g("button",{class:B(e(y).e("button"))},[e(u)?(i(),f("span",Lt,U(A.props.label),1)):x("v-if",!0)],2)],42,Nt))),128))],2)):x("v-if",!0)],34))}});var Mt=se(Bt,[["__file","/home/runner/work/element-plus/element-plus/packages/components/carousel/src/carousel.vue"]]);const Ot=Z({name:{type:String,default:""},label:{type:[String,Number],default:""}}),Vt=(t,s)=>{const n=Oe(xe),a=Be(),p=.83,r=C(),o=C(!1),u=C(0),m=C(1),c=C(!1),v=C(!1),I=C(!1),T=C(!1),{isCardType:k,isVertical:w}=n;function _($,h,N){const y=N-1,V=h-1,F=h+1,S=N/2;return h===0&&$===y?-1:h===y&&$===0?N:$<V&&h-$>=S?N+1:$>F&&$-h>=S?-2:$}function l($,h){var N,y;const V=e(w)?((N=n.root.value)==null?void 0:N.offsetHeight)||0:((y=n.root.value)==null?void 0:y.offsetWidth)||0;return I.value?V*((2-p)*($-h)+1)/4:$<h?-(1+p)*V/4:(3+p)*V/4}function O($,h,N){const y=n.root.value;return y?((N?y.offsetHeight:y.offsetWidth)||0)*($-h):0}const K=($,h,N)=>{var y;const V=e(k),F=(y=n.items.value.length)!=null?y:Number.NaN,S=$===h;!V&&!tt(N)&&(T.value=S||$===N),!S&&F>2&&n.loop&&($=_($,h,F));const E=e(w);c.value=S,V?(I.value=Math.round(Math.abs($-h))<=1,u.value=l($,h),m.value=e(c)?1:p):u.value=O($,h,E),v.value=!0,S&&r.value&&n.setContainerHeight(r.value.offsetHeight)};function G(){if(n&&e(k)){const $=n.items.value.findIndex(({uid:h})=>h===a.uid);n.setActiveItem($)}}return J(()=>{n.addItem({props:t,states:ge({hover:o,translate:u,scale:m,active:c,ready:v,inStage:I,animating:T}),uid:a.uid,translateItem:K})}),et(()=>{n.removeItem(a.uid)}),{carouselItemRef:r,active:c,animating:T,hover:o,inStage:I,isVertical:w,translate:u,isCardType:k,scale:m,ready:v,handleItemClick:G}},Rt=W({name:"ElCarouselItem"}),xt=W({...Rt,props:Ot,setup(t){const s=t,n=ye("carousel"),{carouselItemRef:a,active:p,animating:r,hover:o,inStage:u,isVertical:m,translate:c,isCardType:v,scale:I,ready:T,handleItemClick:k}=Vt(s),w=R(()=>{const l=`${`translate${e(m)?"Y":"X"}`}(${e(c)}px)`,O=`scale(${e(I)})`;return{transform:[l,O].join(" ")}});return(_,l)=>ne((i(),f("div",{ref_key:"carouselItemRef",ref:a,class:B([e(n).e("item"),e(n).is("active",e(p)),e(n).is("in-stage",e(u)),e(n).is("hover",e(o)),e(n).is("animating",e(r)),{[e(n).em("item","card")]:e(v),[e(n).em("item","card-vertical")]:e(v)&&e(m)}]),style:Me(e(w)),onClick:l[0]||(l[0]=(...O)=>e(k)&&e(k)(...O))},[e(v)?ne((i(),f("div",{key:0,class:B(e(n).e("mask"))},null,2)),[[ie,!e(p)]]):x("v-if",!0),Q(_.$slots,"default")],6)),[[ie,e(T)]])}});var Ue=se(xt,[["__file","/home/runner/work/element-plus/element-plus/packages/components/carousel/src/carousel-item.vue"]]);const Ut=Ve(Mt,{CarouselItem:Ue}),Ht=at(Ue),zt=W({inheritAttrs:!1});function Dt(t,s,n,a,p,r){return Q(t.$slots,"default")}var Kt=se(zt,[["render",Dt],["__file","/home/runner/work/element-plus/element-plus/packages/components/collection/src/collection.vue"]]);const jt=W({name:"ElCollectionItem",inheritAttrs:!1});function Gt(t,s,n,a,p,r){return Q(t.$slots,"default")}var Ft=se(jt,[["render",Gt],["__file","/home/runner/work/element-plus/element-plus/packages/components/collection/src/collection-item.vue"]]);const Wt="data-el-collection-item",Yt=t=>{const s=`El${t}Collection`,n=`${s}Item`,a=Symbol(s),p=Symbol(n),r={...Kt,name:s,setup(){const u=C(null),m=new Map;me(a,{itemMap:m,getItems:()=>{const v=e(u);if(!v)return[];const I=Array.from(v.querySelectorAll(`[${Wt}]`));return[...m.values()].sort((k,w)=>I.indexOf(k.ref)-I.indexOf(w.ref))},collectionRef:u})}},o={...Ft,name:n,setup(u,{attrs:m}){const c=C(null),v=Oe(a,void 0);me(p,{collectionItemRef:c}),J(()=>{const I=e(c);I&&v.itemMap.set(I,{ref:I,...m})}),Ae(()=>{const I=e(c);v.itemMap.delete(I)})}};return{COLLECTION_INJECTION_KEY:a,COLLECTION_ITEM_INJECTION_KEY:p,ElCollection:r,ElCollectionItem:o}},ve=Z({trigger:_e.trigger,effect:{...D.effect,default:"light"},type:{type:q(String)},placement:{type:q(String),default:"bottom"},popperOptions:{type:q(Object),default:()=>({})},id:String,size:{type:String,default:""},splitButton:Boolean,hideOnClick:{type:Boolean,default:!0},loop:{type:Boolean,default:!0},showTimeout:{type:Number,default:150},hideTimeout:{type:Number,default:150},tabindex:{type:q([Number,String]),default:0},maxHeight:{type:q([Number,String]),default:""},popperClass:{type:String,default:""},disabled:{type:Boolean,default:!1},role:{type:String,default:"menu"},buttonProps:{type:q(Object)},teleported:D.teleported});Z({command:{type:[Object,String,Number],default:()=>({})},disabled:Boolean,divided:Boolean,textValue:String,icon:{type:ot}});Z({onKeydown:{type:q(Function)}});Yt("Dropdown");const qt=Z({trigger:_e.trigger,placement:ve.placement,disabled:_e.disabled,visible:D.visible,transition:D.transition,popperOptions:ve.popperOptions,tabindex:ve.tabindex,content:D.content,popperStyle:D.popperStyle,popperClass:D.popperClass,enterable:{...D.enterable,default:!0},effect:{...D.effect,default:"light"},teleported:D.teleported,title:String,width:{type:[String,Number],default:150},offset:{type:Number,default:void 0},showAfter:{type:Number,default:0},hideAfter:{type:Number,default:200},autoClose:{type:Number,default:0},showArrow:{type:Boolean,default:!0},persistent:{type:Boolean,default:!0},"onUpdate:visible":{type:Function}}),Jt={"update:visible":t=>nt(t),"before-enter":()=>!0,"before-leave":()=>!0,"after-enter":()=>!0,"after-leave":()=>!0},Xt="onUpdate:visible",Qt=W({name:"ElPopover"}),Zt=W({...Qt,props:qt,emits:Jt,setup(t,{expose:s,emit:n}){const a=t,p=R(()=>a[Xt]),r=ye("popover"),o=C(),u=R(()=>{var l;return(l=e(o))==null?void 0:l.popperRef}),m=R(()=>[{width:st(a.width)},a.popperStyle]),c=R(()=>[r.b(),a.popperClass,{[r.m("plain")]:!!a.content}]),v=R(()=>a.transition===`${r.namespace.value}-fade-in-linear`),I=()=>{var l;(l=o.value)==null||l.hide()},T=()=>{n("before-enter")},k=()=>{n("before-leave")},w=()=>{n("after-enter")},_=()=>{n("update:visible",!1),n("after-leave")};return s({popperRef:u,hide:I}),(l,O)=>(i(),M(e(bt),lt({ref_key:"tooltipRef",ref:o},l.$attrs,{trigger:l.trigger,placement:l.placement,disabled:l.disabled,visible:l.visible,transition:l.transition,"popper-options":l.popperOptions,tabindex:l.tabindex,content:l.content,offset:l.offset,"show-after":l.showAfter,"hide-after":l.hideAfter,"auto-close":l.autoClose,"show-arrow":l.showArrow,"aria-label":l.title,effect:l.effect,enterable:l.enterable,"popper-class":e(c),"popper-style":e(m),teleported:l.teleported,persistent:l.persistent,"gpu-acceleration":e(v),"onUpdate:visible":e(p),onBeforeShow:T,onBeforeHide:k,onShow:w,onHide:_}),{content:P(()=>[l.title?(i(),f("div",{key:0,class:B(e(r).e("title")),role:"title"},U(l.title),3)):x("v-if",!0),Q(l.$slots,"default",{},()=>[be(U(l.content),1)])]),default:P(()=>[l.$slots.reference?Q(l.$slots,"reference",{key:0}):x("v-if",!0)]),_:3},16,["trigger","placement","disabled","visible","transition","popper-options","tabindex","content","offset","show-after","hide-after","auto-close","show-arrow","aria-label","effect","enterable","popper-class","popper-style","teleported","persistent","gpu-acceleration","onUpdate:visible"]))}});var ea=se(Zt,[["__file","/home/runner/work/element-plus/element-plus/packages/components/popover/src/popover.vue"]]);const Pe=(t,s)=>{const n=s.arg||s.value,a=n==null?void 0:n.popperRef;a&&(a.triggerRef=t)};var ta={mounted(t,s){Pe(t,s)},updated(t,s){Pe(t,s)}};const aa="popover",oa=rt(ta,aa),na=Ve(ea,{directive:oa});const sa=t=>(Ce("data-v-30f775e6"),t=t(),Ie(),t),la={class:"card-box"},ra={key:0,class:"player-counts"},ia=sa(()=>g("i",{class:"iconfont icon-player-count"},null,-1)),ca={key:1,class:"iconfont icon-card-player"},ua=["title"],pa={__name:"Card",props:{coverUrl:{type:String,default:""},playerCounts:{type:Number,default:0},showPlayerCounts:{type:Boolean,default:!0},showPlayerIcon:{type:Boolean,default:!0},title:{type:String,default:""},lazy:{type:Boolean,default:!0}},setup(t){return(s,n)=>{const a=ce;return i(),f("div",la,[b(a,{src:t.coverUrl,fit:"cover",lazy:t.lazy},null,8,["src","lazy"]),t.showPlayerCounts?(i(),f("div",ra,[ia,g("span",null,U(e(Ct)(t.playerCounts)),1)])):x("",!0),t.showPlayerIcon?(i(),f("i",ca)):x("",!0),g("div",{class:"title",title:t.title},U(t.title),9,ua)])}}},ue=Y(pa,[["__scopeId","data-v-30f775e6"]]);const da={class:"title"},va={class:"song-list"},fa={__name:"index",emits:["setActiveName"],setup(t,{emit:s}){const n=C([]),a=C([]),p=Re(),r=async()=>{const{banners:c}=await it();n.value=c},o=async()=>{const{result:c}=await ct({limit:24});a.value=c},u=c=>{p.push(`/playListDetail/${c.id}`)},m=()=>{s("setActiveName","songList")};return J(async()=>{await r(),await o()}),(c,v)=>{const I=ce,T=Ht,k=Ut,w=re;return i(),f("div",null,[b(k,{interval:5e3,type:"card",height:"220px"},{default:P(()=>[(i(!0),f(H,null,z(n.value,(_,l)=>(i(),M(T,{key:l},{default:P(()=>[b(I,{style:{width:"100%",height:"220px","border-radius":"10px"},src:_.imageUrl,lazy:""},null,8,["src"])]),_:2},1024))),128))]),_:1}),g("div",da,[g("span",{onClick:m},"推荐歌单"),b(w,{color:"#d5d5d5"},{default:P(()=>[b(e(he))]),_:1})]),g("div",va,[(i(!0),f(H,null,z(a.value,(_,l)=>(i(),M(ue,{key:l,onClick:O=>u(_),"cover-url":_.picUrl,"player-counts":_.playCount,title:_.name},null,8,["onClick","cover-url","player-counts","title"]))),128))])])}}},ma=Y(fa,[["__scopeId","data-v-68e59214"]]);const _a={class:"header"},ya={class:"type"},ha={class:"item-list"},ga=["onClick"],ba={__name:"SelectPopover",props:{selectTag:{type:String,default:"全部歌单"}},emits:["select"],setup(t,{emit:s}){const n=C(""),a=C([]),p=async()=>{const{categories:u,sub:m}=await ut();for(const c in u)a.value[c]={type:u[c],tagList:[]};m.forEach(c=>{a.value[c.category].tagList.push(c.name)})},r=u=>{s("select",u),n.value.hide()},o=()=>{a.value.length===0&&p()};return(u,m)=>{const c=re,v=kt,I=It,T=na;return i(),M(T,{ref_key:"popover",ref:n,placement:"right",width:400,trigger:"click","popper-class":"popper-class",onShow:o},{reference:P(()=>[b(v,{plain:"",round:""},{default:P(()=>[be(U(t.selectTag)+" ",1),b(c,null,{default:P(()=>[b(e(he))]),_:1})]),_:1})]),default:P(()=>[b(I,{"max-height":"300px"},{default:P(()=>[g("div",_a,[g("span",{class:B(["item",{"item-select":t.selectTag==="全部歌单"}]),onClick:m[0]||(m[0]=k=>r("全部歌单"))}," 全部歌单 ",2)]),(i(!0),f(H,null,z(a.value,(k,w)=>(i(),f("div",{class:"tags",key:w},[g("span",ya,U(k.type),1),g("div",ha,[(i(!0),f(H,null,z(k.tagList,_=>(i(),f("span",{class:B(["item",{"item-select":t.selectTag===_}]),key:_,onClick:l=>r(_)},U(_),11,ga))),128))])]))),128))]),_:1})]),_:1},512)}}},Ca=Y(ba,[["__scopeId","data-v-fa836910"]]);const we=t=>(Ce("data-v-29a76820"),t=t(),Ie(),t),Ia={class:"container"},wa={class:"top"},$a={class:"box"},ka={class:"info"},Sa=we(()=>g("i",{class:"iconfont icon-good"},null,-1)),Ea=we(()=>g("div",{class:"title text-ellipsis"},"「PB-R&B 」另类迷幻的空灵音律。",-1)),Ta=we(()=>g("div",{class:"copywriter text-ellipsis"},"另类迷幻的空灵音律",-1)),Na={class:"screen"},La={class:"select-item"},Pa=["onClick"],Aa={class:"song-list","element-loading-background":"rgba(122, 122, 122, 0.2)"},Ba={__name:"index",setup(t){const s=Re(),n=C("全部歌单"),a=C(!1),p=C([]),r=C([]),o=async()=>{const{tags:v}=await dt();p.value=v},u=async()=>{a.value=!0;const{playlists:v}=await vt({cat:n.value,offset:0,limit:24});r.value=v,a.value=!1},m=v=>{n.value=v,u()},c=v=>{s.push(`/playListDetail/${v.id}`)};return J(async()=>{await o(),await u()}),(v,I)=>{const T=ce,k=pt("dic"),w=yt;return i(),f("div",Ia,[g("div",wa,[g("div",$a,[b(T,{class:"background",src:"http://p1.music.126.net/K9aP41sb9puH2T7GT-GIMw==/109951164359163944.jpg",fit:"fill"}),b(T,{class:"logo",src:"http://p1.music.126.net/K9aP41sb9puH2T7GT-GIMw==/109951164359163944.jpg"}),g("div",ka,[b(k,{class:"tag"},{default:P(()=>[Sa,be(" 精品歌单 ")]),_:1}),Ea,Ta])])]),g("div",Na,[b(Ca,{"select-tag":n.value,onSelect:m},null,8,["select-tag"]),g("div",La,[(i(!0),f(H,null,z(p.value,_=>(i(),f("span",{class:B(["item",{"item-select":_.name===n.value}]),key:_,onClick:l=>m(_.name)},U(_.name),11,Pa))),128))])]),ne((i(),f("div",Aa,[(i(!0),f(H,null,z(r.value,(_,l)=>(i(),M(ue,{key:l,onClick:O=>c(_),"cover-url":_.coverImgUrl,"player-counts":_.playCount,title:_.name,lazy:!1},null,8,["onClick","cover-url","player-counts","title"]))),128))])),[[w,a.value]])])}}},Ma=Y(Ba,[["__scopeId","data-v-29a76820"]]);const He=t=>(Ce("data-v-6916f2bd"),t=t(),Ie(),t),Oa={class:"container"},Va=He(()=>g("p",{class:"title"},"官方榜",-1)),Ra=He(()=>g("p",{class:"title"},"全球榜",-1)),xa={class:"box-global"},Ua={__name:"index",setup(t){const s=ge({offical:[],global:[]}),n=async()=>{const{list:a}=await ft();a.forEach(p=>{p.ToplistType?s.offical.push(p):s.global.push(p)}),console.log(s)};return J(()=>{n()}),(a,p)=>{const r=ce;return i(),f("div",Oa,[Va,(i(!0),f(H,null,z(s.offical,o=>(i(),f("div",{class:"box-offical-item",key:o.id},[b(r,{src:o.coverImgUrl,class:"cover"},null,8,["src"]),(i(),M(wt,{class:"play-list-table","max-height":"200px",key:o.id,"player-list-id":o.id,"show-header":!1},null,8,["player-list-id"]))]))),128)),Ra,g("div",xa,[(i(!0),f(H,null,z(s.global,o=>(i(),M(ue,{key:o.id,"cover-url":o.coverImgUrl,"player-counts":o.playCount,title:o.description},null,8,["cover-url","player-counts","title"]))),128))])])}}},Ha=Y(Ua,[["__scopeId","data-v-6916f2bd"]]);const za={class:"select-box"},Da={class:"label"},Ka={class:"item-list"},ja=["onClick"],Ga={__name:"Select",props:{modelValue:{type:String,default:""},label:{type:String,default:"筛选"},options:{type:Array,default:()=>[]}},emits:["update:modelValue","change"],setup(t,{emit:s}){const n=a=>{s("update:modelValue",a),s("change",a)};return(a,p)=>(i(),f("div",za,[g("span",Da,U(t.label)+"：",1),g("div",Ka,[(i(!0),f(H,null,z(t.options,r=>(i(),f("span",{class:B(["item",{"item-select":r.value===t.modelValue}]),key:r.value,onClick:o=>n(r.value)},U(r.name),11,ja))),128))])]))}},fe=Y(Ga,[["__scopeId","data-v-13e7c2b6"]]),Fa=[{name:"全部",value:"-1"},{name:"华语",value:"7"},{name:"欧美",value:"96"},{name:"日本",value:""},{name:"韩国",value:"16"},{name:"其他",value:"0"}],Wa=[{name:"全部",value:"-1"},{name:"男歌手",value:"1"},{name:"女歌手",value:"2"},{name:"乐队",value:"3"}],Ya=[{name:"热门",value:"-1"},{name:"A",value:"a"},{name:"B",value:"b"},{name:"C",value:"c"},{name:"D",value:"d"},{name:"E",value:"e"},{name:"F",value:"f"},{name:"G",value:"g"},{name:"H",value:"h"},{name:"I",value:"i"},{name:"J",value:"j"},{name:"K",value:"k"},{name:"L",value:"l"},{name:"M",value:"m"},{name:"N",value:"n"},{name:"O",value:"o"},{name:"P",value:"p"},{name:"Q",value:"q"},{name:"R",value:"r"},{name:"S",value:"s"},{name:"T",value:"t"},{name:"U",value:"u"},{name:"V",value:"v"},{name:"W",value:"w"},{name:"X",value:"x"},{name:"Y",value:"y"},{name:"Z",value:"z"},{name:"#",value:"0"}];const qa={class:"container"},Ja={class:"search-top"},Xa={class:"singer-list-box"},Qa={__name:"index",setup(t){const s=ge({type:"-1",area:"-1",initial:"-1",offset:0,limit:30}),n=C([]),a=async()=>{const{artists:p}=await mt(s);n.value=p};return J(()=>{a()}),(p,r)=>(i(),f("div",qa,[g("div",Ja,[b(fe,{key:"area",modelValue:s.area,"onUpdate:modelValue":r[0]||(r[0]=o=>s.area=o),label:"语种",options:e(Fa),onChange:a},null,8,["modelValue","options"]),b(fe,{key:"type",modelValue:s.type,"onUpdate:modelValue":r[1]||(r[1]=o=>s.type=o),label:"类型",options:e(Wa),onChange:a},null,8,["modelValue","options"]),b(fe,{key:"initial",modelValue:s.initial,"onUpdate:modelValue":r[2]||(r[2]=o=>s.initial=o),label:"筛选",options:e(Ya),onChange:a},null,8,["modelValue","options"])]),g("div",Xa,[(i(!0),f(H,null,z(n.value,o=>(i(),M(ue,{key:o.picId,"cover-url":o.picUrl,title:o.name,"show-player-counts":!1,"show-player-icon":!1},null,8,["cover-url","title"]))),128))])]))}},Za=Y(Qa,[["__scopeId","data-v-f1c2c15c"]]);const eo={class:"container"},to={class:"top-tabs"},ao={__name:"index",setup(t){const s=C("recommend"),n=C(null),a=()=>{n.value.toTop()},p=r=>{s.value=r};return(r,o)=>{const u=gt,m=ht;return i(),f("div",eo,[g("div",to,[b(m,{modelValue:s.value,"onUpdate:modelValue":o[0]||(o[0]=c=>s.value=c),onTabClick:a},{default:P(()=>[b(u,{label:"个性推荐",name:"recommend"}),b(u,{label:"歌单",name:"songList"}),b(u,{label:"排行榜",name:"leaderboard"}),b(u,{label:"歌手",name:"singer"}),b(u,{label:"最新音乐",name:"latestMusic"})]),_:1},8,["modelValue"])]),b($t,{ref_key:"contentBoxRef",ref:n,height:"calc(100vh - 60px - 80px - 50px)","margin-top":"50px",padding:"0 10px"},{default:P(()=>[s.value==="recommend"?(i(),M(ma,{key:0,onSetActiveName:p})):x("",!0),s.value==="songList"?(i(),M(Ma,{key:1})):x("",!0),s.value==="leaderboard"?(i(),M(Ha,{key:2})):x("",!0),s.value==="singer"?(i(),M(Za,{key:3})):x("",!0)]),_:1},512)])}}},co=Y(ao,[["__scopeId","data-v-f4e1ea2d"]]);export{co as default};
