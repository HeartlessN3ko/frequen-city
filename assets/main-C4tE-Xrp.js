const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["./RectAreaLightUniformsLib-zWALyqEO.js","./index-DkavfbuJ.js","./index-C7RzSoSn.css"])))=>i.map(i=>d[i]);
import{_ as vp}from"./index-DkavfbuJ.js";const su={youth:{title:"Our Youth Never Dies",artist:"Taku",src:"assets/audio/taku-our-youth-never-dies.mp3",context:"The session on the left-hand mixer display."},machine:{title:"Cold Hearted Machine",artist:"ChaosDesigned",src:"assets/audio/cold-hearted-machine-30s.mp3",context:"A request from The Suno Club’s set list. Excerpt."},mushroom:{title:"Mushroom Land",artist:"ChaosDesigned",src:"assets/audio/mushroom-land-excerpt.mp3",context:"A chiptune drum-and-bass track from Adventures in Weirdness (2016). Excerpt."},victory:{title:"Paper Fields — Tactical Victory Mix",artist:"Toy Plane: Alien Assault",src:"assets/audio/toy-plane-tactical-victory.mp3",context:"The intermission cue between missions. This excerpt starts at the game’s chosen loop point."}},Ig="./content/",ch=async i=>{let e;for(let t=0;t<3;t++){try{if(e=await fetch(Ig+i,{cache:"no-cache"}),e.ok||e.status<500)break}catch(n){if(t===2)throw new Error(i+": "+n.message)}t<2&&await new Promise(n=>setTimeout(n,250*(t+1)))}if(!e.ok)throw new Error(i+": HTTP "+e.status);try{return await e.json()}catch(t){throw new Error(i+": invalid JSON ("+t.message+")")}},K={recordings:su,game:null,characters:{},detectives:{models:[],voices:[]},narration:{},evidence:{},discoveries:{},achievements:[],completion:{},board:{},locations:{},dialogue:{},cinematics:{},credits:{}};async function kg(){const i=[],e=async(d,u)=>{try{return await ch(d)}catch(h){return i.push(h.message),u}};K.game=await ch("game.json");const[t,n,s,a,r,o,c,l]=await Promise.all([e("characters.json",{}),e("detectives.json",{models:[],voices:[]}),e("narration.json",{}),e("evidence.json",{}),e("discoveries.json",{}),e("achievements.json",{items:[]}),e("board.json",{}),e("credits.json",{})]);Object.assign(K,{characters:t,detectives:n,narration:s,evidence:a,discoveries:r,achievements:o.items||[],completion:o.completion||{},board:c,credits:l});for(const d of["characters","narration","evidence","discoveries"])delete K[d]._note;if(await Promise.all(K.game.locations.map(async d=>{const u=await e(`locations/${d}.json`,null);u&&(K.locations[d]=u)})),await Promise.all((K.game.dialogue||[]).map(async d=>{const u=await e(`dialogue/${d}.json`,null);u&&(K.dialogue[d]=u)})),await Promise.all((K.game.cinematics||[]).map(async d=>{const u=await e(`cinematics/${d}.json`,null);u&&(K.cinematics[d]=u)})),i.length)throw new Error(i.join(" � "));return i.push(...Ng()),i}function Ng(){const i=[],e=(n,s)=>i.push(`${n}: ${s}`),t=(n,s)=>[].concat(n||[]).forEach(a=>{a&&(a.do==="listeningStation"&&(!a.tracks?.length||a.tracks.some(r=>!su[r]))&&e(s,"unknown or missing station recording"),a.do==="dialogue"&&!K.dialogue[a.tree]&&e(s,`dialogue "${a.tree}" not found`),a.do==="travel"&&!K.locations[a.location]&&e(s,`location "${a.location}" not found`),a.do==="travel"&&a.position&&K.locations[a.location]&&!K.locations[a.location].positions.some(r=>r.id===a.position)&&e(s,`position "${a.position}" not in ${a.location}`),a.do==="moveTo"&&!a.position&&e(s,"moveTo needs a position"),a.do==="giveEvidence"&&!K.evidence[a.id]&&e(s,`evidence "${a.id}" not defined in evidence.json`),a.do==="discover"&&!K.discoveries[a.id]&&e(s,`discovery "${a.id}" not defined in discoveries.json`),a.do==="narrate"&&!K.narration[a.line]&&e(s,`narration "${a.line}" not found`),a.do==="cinematic"&&!K.cinematics[a.id]&&e(s,`cinematic "${a.id}" not found`),a.do==="unlockLocation"&&!K.locations[a.id]&&e(s,`location "${a.id}" not found`),(a.do==="if"||a.do==="keypad"||a.do==="inspect")&&(t(a.then,s),t(a.else,s),t(a.fail,s)),a.do==="inspect"&&a.listening&&t(a.listening,s),a.do==="inspect"&&a.evidence&&!K.evidence[a.evidence]&&e(s,`evidence "${a.evidence}" not defined in evidence.json`),a.do==="keypad"&&!(K.game.config||{})[a.codeKey||"towerPin"]&&e(s,`keypad code "${a.codeKey||"towerPin"}" not set in game.json config`))});for(const[n,s]of Object.entries(K.locations)){const a=`locations/${n}`,r=new Set((s.positions||[]).map(o=>o.id));r.size||e(a,"no positions"),s.startPosition&&!r.has(s.startPosition)&&e(a,`startPosition "${s.startPosition}" missing`),(s.positions||[]).forEach(o=>(o.links||[]).forEach(c=>{r.has(c.to)||e(a,`link ${o.id} -> ${c.to} missing`)})),(s.hotspots||[]).forEach(o=>{t(o.action,`${a} hotspot ${o.id}`),(o.positions||[]).forEach(c=>r.has(c)||e(a,`hotspot ${o.id} position ${c} missing`))}),(s.npcs||[]).forEach(o=>{o.dialogue&&!K.dialogue[o.dialogue]&&e(a,`npc ${o.id} dialogue "${o.dialogue}" missing`),o.character&&!K.characters[o.character]&&e(a,`npc ${o.id} character "${o.character}" not in characters.json`)});for(const o of[s.crossing,s.crossing?.alternate].filter(Boolean)){o.hotspot&&!s.hotspots?.some(c=>c.id===o.hotspot)&&e(a,"unknown crossing hotspot "+o.hotspot);for(const c of o.positions||[])r.has(c)||e(a,"unknown crossing position "+c);t(o.action,a+" crossing")}t(s.onEnter,`${a} onEnter`),t(s.onFirstEnter,`${a} onFirstEnter`),(s.tutorial||[]).forEach(o=>t(o.onComplete,`${a} tutorial ${o.id}`)),s.interior&&!K.locations[s.interior]&&e(a,`interior "${s.interior}" missing`),s.exterior&&!K.locations[s.exterior]&&e(a,`exterior "${s.exterior}" missing`)}for(const[n,s]of Object.entries(K.dialogue)){const a=`dialogue/${n}`;if(!s.nodes||!s.nodes[s.start]){e(a,`start node "${s.start}" missing`);continue}for(const[r,o]of Object.entries(s.nodes))o.speaker&&o.speaker!=="detective"&&!K.characters[o.speaker]&&e(`${a}#${r}`,`speaker "${o.speaker}" not in characters.json`),o.next&&!s.nodes[o.next]&&e(`${a}#${r}`,`next "${o.next}" missing`),(o.choices||[]).forEach((c,l)=>{c.next&&!s.nodes[c.next]&&e(`${a}#${r}`,`choice ${l} next "${c.next}" missing`),t(c.effects,`${a}#${r} choice ${l}`)}),t(o.effects,`${a}#${r}`)}for(const n of K.board.deductions||[])(n.pair||[]).forEach(s=>K.evidence[s]||e("board",`deduction ${n.id} evidence "${s}" not defined`));t(K.board.onSolved,"board onSolved");for(const n of K.achievements)(!n.id||!n.when)&&e("achievements",`entry ${n.id||"?"} needs id and when`);return i}const wr=new Map,Ge=(i,e)=>((wr.get(i)||wr.set(i,new Set).get(i)).add(e),()=>wr.get(i).delete(e)),Re=(i,e={})=>{for(const t of[...wr.get(i)||[],...wr.get("*")||[]])try{t(e,i)}catch(n){console.error(`[event ${i}]`,n)}},xp="fcmu.settings.v1",au=()=>({startedAt:Date.now(),playSeconds:0,stage:"new",detective:null,location:null,position:null,transcript:[],flags:{},evidence:[],discovered:[],visited:[],seenDialogue:[],achievements:[],board:{pins:{},strings:[],notes:[]},completed:!1}),_p=()=>({master:.9,voice:1,music:.6,sfx:.8,subtitles:!0,textSize:1,reducedMotion:matchMedia("(prefers-reduced-motion: reduce)").matches,quality:"auto",lookSensitivity:1,invertY:!1,autoAdvance:!1}),yp=i=>{try{return JSON.parse(localStorage.getItem(i))}catch{return null}},Mp=(i,e)=>{try{return localStorage.setItem(i,JSON.stringify(e)),!0}catch{return!1}};try{for(const i of["fcmu.save.v1","fcmu.visitor.v1","fcmu.candidate.v1","fcmu.analytics.queue.v1"])localStorage.removeItem(i)}catch{}const ru="fcmu.save.v2",X={save:au(),settings:{..._p(),...yp(xp)||{}}};let zl=0,Sp=0;function Ea(){return(X.paused?zl:performance.now())-Sp}function lh(i){!!X.paused!==i&&(i?zl=performance.now():Sp+=performance.now()-zl,X.paused=i,Re("pause:changed",i))}function Fg(){X.save=au(),wp()}function Hl(){const i=yp(ru);return i&&i.version===2&&i.save?.stage==="playing"&&i.save.location?i:null}function Wa(){const i=X.save;return i.stage!=="playing"||!i.location?!1:Mp(ru,{version:2,savedAt:Date.now(),save:{...i,transcript:i.transcript.slice(-200)}})}function wp(){try{localStorage.removeItem(ru)}catch{}}function Ug(){const i=Hl();return i?(X.save={...au(),...i.save,board:{pins:{},strings:[],notes:[],...i.save.board||{}}},X.save.startedAt=Date.now()-(X.save.playSeconds||0)*1e3,!0):!1}function yc(){Mp(xp,X.settings),Re("settings",X.settings)}const nr=(i,e)=>i.includes(e)?!1:(i.push(e),!0),bt={flag:i=>X.save.flags[i],setFlag(i,e=!0){X.save.flags[i]=e,Re("flag",{flag:i,value:e})},giveEvidence(i){return nr(X.save.evidence,i)?(Re("evidence",{id:i}),!0):!1},discover(i){return nr(X.save.discovered,i)?(Re("discovered",{id:i}),!0):!1},visit(i){nr(X.save.visited,i)&&Re("visited",{id:i})},seen(i){nr(X.save.seenDialogue,i)},achieve(i){return nr(X.save.achievements,i)?(Re("achievement",{id:i}),!0):!1},setPlace(i,e){X.save.location=i,X.save.position=e}};setInterval(()=>{X.save.stage==="playing"&&!X.paused&&!document.hidden&&(X.save.playSeconds+=5)},5e3);function Et(i){if(i==null||i===!0)return!0;if(i===!1)return!1;if(Array.isArray(i))return i.every(Et);if(i.all)return i.all.every(Et);if(i.any)return i.any.some(Et);if(i.not!==void 0)return!Et(i.not);const e=X.save;return i.flag!==void 0?"equals"in i?e.flags[i.flag]===i.equals:!!e.flags[i.flag]:i.evidence?e.evidence.includes(i.evidence):i.discovered?e.discovered.includes(i.discovered):i.visited?e.visited.includes(i.visited):i.achievement?e.achievements.includes(i.achievement):i.evidenceCount!==void 0?e.evidence.length>=i.evidenceCount:i.discoveredCount!==void 0?e.discovered.length>=i.discoveredCount:i.seen?e.seenDialogue.includes(i.seen):(console.warn("unknown condition",i),!1)}const Ep={setFlag:i=>bt.setFlag(i.flag,i.value??!0),clearFlag:i=>bt.setFlag(i.flag,!1),giveEvidence:i=>bt.giveEvidence(i.id),discover:i=>bt.discover(i.id),achievement:i=>bt.achieve(i.id),unlockLocation:i=>bt.setFlag(`unlocked:${i.id}`),emit:i=>Re(i.event,i),if:async i=>Vt(Et(i.when)?i.then:i.else)},en=(i,e)=>{Ep[i]=e};async function Vt(i){for(const e of[].concat(i||[])){if(!e||e.when!==void 0&&e.do!=="if"&&!Et(e.when))continue;const t=Ep[e.do];if(!t){console.warn("unknown effect",e),Re("content:error",{message:`Unknown effect "${e.do}"`});continue}await t(e)}}/**
 * @license
 * Copyright 2010-2024 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const ou="170",Og=0,dh=1,Bg=2,Tp=1,zg=2,Ai=3,Fi=0,Gt=1,nn=2,ns=0,ma=1,Gl=2,uh=3,hh=4,Hg=5,Ss=100,Gg=101,Vg=102,Wg=103,qg=104,jg=200,Xg=201,Yg=202,Kg=203,Vl=204,Wl=205,$g=206,Jg=207,Qg=208,Zg=209,e0=210,t0=211,n0=212,i0=213,s0=214,ql=0,jl=1,Xl=2,Ta=3,Yl=4,Kl=5,$l=6,Jl=7,Ap=0,a0=1,r0=2,is=0,o0=1,c0=2,l0=3,cu=4,d0=5,u0=6,h0=7,fh="attached",f0="detached",Rp=300,Aa=301,Ra=302,Ql=303,Zl=304,Mc=306,Vn=1e3,es=1001,sc=1002,Zt=1003,Cp=1004,yr=1005,Qt=1006,Ho=1007,Pi=1008,Ui=1009,Pp=1010,Lp=1011,Ur=1012,lu=1013,rs=1014,ii=1015,jr=1016,du=1017,uu=1018,Ca=1020,Dp=35902,Ip=1021,kp=1022,zn=1023,Np=1024,Fp=1025,ga=1026,Pa=1027,hu=1028,fu=1029,Up=1030,pu=1031,mu=1033,Go=33776,Vo=33777,Wo=33778,qo=33779,ed=35840,td=35841,nd=35842,id=35843,sd=36196,ad=37492,rd=37496,od=37808,cd=37809,ld=37810,dd=37811,ud=37812,hd=37813,fd=37814,pd=37815,md=37816,gd=37817,bd=37818,vd=37819,xd=37820,_d=37821,jo=36492,yd=36494,Md=36495,Op=36283,Sd=36284,wd=36285,Ed=36286,Or=2300,Br=2301,Wc=2302,ph=2400,mh=2401,gh=2402,p0=2500,m0=0,Bp=1,Td=2,g0=3200,b0=3201,zp=0,v0=1,Qi="",Ze="srgb",bn="srgb-linear",Sc="linear",pt="srgb",zs=7680,bh=519,x0=512,_0=513,y0=514,Hp=515,M0=516,S0=517,w0=518,E0=519,Ad=35044,vh="300 es",Li=2e3,ac=2001;class qa{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});const n=this._listeners;n[e]===void 0&&(n[e]=[]),n[e].indexOf(t)===-1&&n[e].push(t)}hasEventListener(e,t){if(this._listeners===void 0)return!1;const n=this._listeners;return n[e]!==void 0&&n[e].indexOf(t)!==-1}removeEventListener(e,t){if(this._listeners===void 0)return;const s=this._listeners[e];if(s!==void 0){const a=s.indexOf(t);a!==-1&&s.splice(a,1)}}dispatchEvent(e){if(this._listeners===void 0)return;const n=this._listeners[e.type];if(n!==void 0){e.target=this;const s=n.slice(0);for(let a=0,r=s.length;a<r;a++)s[a].call(this,e);e.target=null}}}const rn=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];let xh=1234567;const Er=Math.PI/180,La=180/Math.PI;function ai(){const i=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(rn[i&255]+rn[i>>8&255]+rn[i>>16&255]+rn[i>>24&255]+"-"+rn[e&255]+rn[e>>8&255]+"-"+rn[e>>16&15|64]+rn[e>>24&255]+"-"+rn[t&63|128]+rn[t>>8&255]+"-"+rn[t>>16&255]+rn[t>>24&255]+rn[n&255]+rn[n>>8&255]+rn[n>>16&255]+rn[n>>24&255]).toLowerCase()}function Wt(i,e,t){return Math.max(e,Math.min(t,i))}function gu(i,e){return(i%e+e)%e}function T0(i,e,t,n,s){return n+(i-e)*(s-n)/(t-e)}function A0(i,e,t){return i!==e?(t-i)/(e-i):0}function Tr(i,e,t){return(1-t)*i+t*e}function R0(i,e,t,n){return Tr(i,e,1-Math.exp(-t*n))}function C0(i,e=1){return e-Math.abs(gu(i,e*2)-e)}function P0(i,e,t){return i<=e?0:i>=t?1:(i=(i-e)/(t-e),i*i*(3-2*i))}function L0(i,e,t){return i<=e?0:i>=t?1:(i=(i-e)/(t-e),i*i*i*(i*(i*6-15)+10))}function D0(i,e){return i+Math.floor(Math.random()*(e-i+1))}function I0(i,e){return i+Math.random()*(e-i)}function k0(i){return i*(.5-Math.random())}function N0(i){i!==void 0&&(xh=i);let e=xh+=1831565813;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296}function F0(i){return i*Er}function U0(i){return i*La}function O0(i){return(i&i-1)===0&&i!==0}function B0(i){return Math.pow(2,Math.ceil(Math.log(i)/Math.LN2))}function z0(i){return Math.pow(2,Math.floor(Math.log(i)/Math.LN2))}function H0(i,e,t,n,s){const a=Math.cos,r=Math.sin,o=a(t/2),c=r(t/2),l=a((e+n)/2),d=r((e+n)/2),u=a((e-n)/2),h=r((e-n)/2),f=a((n-e)/2),g=r((n-e)/2);switch(s){case"XYX":i.set(o*d,c*u,c*h,o*l);break;case"YZY":i.set(c*h,o*d,c*u,o*l);break;case"ZXZ":i.set(c*u,c*h,o*d,o*l);break;case"XZX":i.set(o*d,c*g,c*f,o*l);break;case"YXY":i.set(c*f,o*d,c*g,o*l);break;case"ZYZ":i.set(c*g,c*f,o*d,o*l);break;default:console.warn("THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+s)}}function ti(i,e){switch(e.constructor){case Float32Array:return i;case Uint32Array:return i/4294967295;case Uint16Array:return i/65535;case Uint8Array:return i/255;case Int32Array:return Math.max(i/2147483647,-1);case Int16Array:return Math.max(i/32767,-1);case Int8Array:return Math.max(i/127,-1);default:throw new Error("Invalid component type.")}}function ht(i,e){switch(e.constructor){case Float32Array:return i;case Uint32Array:return Math.round(i*4294967295);case Uint16Array:return Math.round(i*65535);case Uint8Array:return Math.round(i*255);case Int32Array:return Math.round(i*2147483647);case Int16Array:return Math.round(i*32767);case Int8Array:return Math.round(i*127);default:throw new Error("Invalid component type.")}}const gt={DEG2RAD:Er,RAD2DEG:La,generateUUID:ai,clamp:Wt,euclideanModulo:gu,mapLinear:T0,inverseLerp:A0,lerp:Tr,damp:R0,pingpong:C0,smoothstep:P0,smootherstep:L0,randInt:D0,randFloat:I0,randFloatSpread:k0,seededRandom:N0,degToRad:F0,radToDeg:U0,isPowerOfTwo:O0,ceilPowerOfTwo:B0,floorPowerOfTwo:z0,setQuaternionFromProperEuler:H0,normalize:ht,denormalize:ti};class Ce{constructor(e=0,t=0){Ce.prototype.isVector2=!0,this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const t=this.x,n=this.y,s=e.elements;return this.x=s[0]*t+s[3]*n+s[6],this.y=s[1]*t+s[4]*n+s[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const n=this.dot(e)/t;return Math.acos(Wt(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,n=this.y-e.y;return t*t+n*n}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){const n=Math.cos(t),s=Math.sin(t),a=this.x-e.x,r=this.y-e.y;return this.x=a*n-r*s+e.x,this.y=a*s+r*n+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class je{constructor(e,t,n,s,a,r,o,c,l){je.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,n,s,a,r,o,c,l)}set(e,t,n,s,a,r,o,c,l){const d=this.elements;return d[0]=e,d[1]=s,d[2]=o,d[3]=t,d[4]=a,d[5]=c,d[6]=n,d[7]=r,d[8]=l,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],this}extractBasis(e,t,n){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const n=e.elements,s=t.elements,a=this.elements,r=n[0],o=n[3],c=n[6],l=n[1],d=n[4],u=n[7],h=n[2],f=n[5],g=n[8],b=s[0],m=s[3],p=s[6],v=s[1],x=s[4],y=s[7],D=s[2],T=s[5],R=s[8];return a[0]=r*b+o*v+c*D,a[3]=r*m+o*x+c*T,a[6]=r*p+o*y+c*R,a[1]=l*b+d*v+u*D,a[4]=l*m+d*x+u*T,a[7]=l*p+d*y+u*R,a[2]=h*b+f*v+g*D,a[5]=h*m+f*x+g*T,a[8]=h*p+f*y+g*R,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){const e=this.elements,t=e[0],n=e[1],s=e[2],a=e[3],r=e[4],o=e[5],c=e[6],l=e[7],d=e[8];return t*r*d-t*o*l-n*a*d+n*o*c+s*a*l-s*r*c}invert(){const e=this.elements,t=e[0],n=e[1],s=e[2],a=e[3],r=e[4],o=e[5],c=e[6],l=e[7],d=e[8],u=d*r-o*l,h=o*c-d*a,f=l*a-r*c,g=t*u+n*h+s*f;if(g===0)return this.set(0,0,0,0,0,0,0,0,0);const b=1/g;return e[0]=u*b,e[1]=(s*l-d*n)*b,e[2]=(o*n-s*r)*b,e[3]=h*b,e[4]=(d*t-s*c)*b,e[5]=(s*a-o*t)*b,e[6]=f*b,e[7]=(n*c-l*t)*b,e[8]=(r*t-n*a)*b,this}transpose(){let e;const t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,n,s,a,r,o){const c=Math.cos(a),l=Math.sin(a);return this.set(n*c,n*l,-n*(c*r+l*o)+r+e,-s*l,s*c,-s*(-l*r+c*o)+o+t,0,0,1),this}scale(e,t){return this.premultiply(qc.makeScale(e,t)),this}rotate(e){return this.premultiply(qc.makeRotation(-e)),this}translate(e,t){return this.premultiply(qc.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,n,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){const t=this.elements,n=e.elements;for(let s=0;s<9;s++)if(t[s]!==n[s])return!1;return!0}fromArray(e,t=0){for(let n=0;n<9;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){const n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const qc=new je;function Gp(i){for(let e=i.length-1;e>=0;--e)if(i[e]>=65535)return!0;return!1}function zr(i){return document.createElementNS("http://www.w3.org/1999/xhtml",i)}function G0(){const i=zr("canvas");return i.style.display="block",i}const _h={};function Mr(i){i in _h||(_h[i]=!0,console.warn(i))}function V0(i,e,t){return new Promise(function(n,s){function a(){switch(i.clientWaitSync(e,i.SYNC_FLUSH_COMMANDS_BIT,0)){case i.WAIT_FAILED:s();break;case i.TIMEOUT_EXPIRED:setTimeout(a,t);break;default:n()}}setTimeout(a,t)})}function W0(i){const e=i.elements;e[2]=.5*e[2]+.5*e[3],e[6]=.5*e[6]+.5*e[7],e[10]=.5*e[10]+.5*e[11],e[14]=.5*e[14]+.5*e[15]}function q0(i){const e=i.elements;e[11]===-1?(e[10]=-e[10]-1,e[14]=-e[14]):(e[10]=-e[10],e[14]=-e[14]+1)}const et={enabled:!0,workingColorSpace:bn,spaces:{},convert:function(i,e,t){return this.enabled===!1||e===t||!e||!t||(this.spaces[e].transfer===pt&&(i.r=ki(i.r),i.g=ki(i.g),i.b=ki(i.b)),this.spaces[e].primaries!==this.spaces[t].primaries&&(i.applyMatrix3(this.spaces[e].toXYZ),i.applyMatrix3(this.spaces[t].fromXYZ)),this.spaces[t].transfer===pt&&(i.r=ba(i.r),i.g=ba(i.g),i.b=ba(i.b))),i},fromWorkingColorSpace:function(i,e){return this.convert(i,this.workingColorSpace,e)},toWorkingColorSpace:function(i,e){return this.convert(i,e,this.workingColorSpace)},getPrimaries:function(i){return this.spaces[i].primaries},getTransfer:function(i){return i===Qi?Sc:this.spaces[i].transfer},getLuminanceCoefficients:function(i,e=this.workingColorSpace){return i.fromArray(this.spaces[e].luminanceCoefficients)},define:function(i){Object.assign(this.spaces,i)},_getMatrix:function(i,e,t){return i.copy(this.spaces[e].toXYZ).multiply(this.spaces[t].fromXYZ)},_getDrawingBufferColorSpace:function(i){return this.spaces[i].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(i=this.workingColorSpace){return this.spaces[i].workingColorSpaceConfig.unpackColorSpace}};function ki(i){return i<.04045?i*.0773993808:Math.pow(i*.9478672986+.0521327014,2.4)}function ba(i){return i<.0031308?i*12.92:1.055*Math.pow(i,.41666)-.055}const yh=[.64,.33,.3,.6,.15,.06],Mh=[.2126,.7152,.0722],Sh=[.3127,.329],wh=new je().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),Eh=new je().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);et.define({[bn]:{primaries:yh,whitePoint:Sh,transfer:Sc,toXYZ:wh,fromXYZ:Eh,luminanceCoefficients:Mh,workingColorSpaceConfig:{unpackColorSpace:Ze},outputColorSpaceConfig:{drawingBufferColorSpace:Ze}},[Ze]:{primaries:yh,whitePoint:Sh,transfer:pt,toXYZ:wh,fromXYZ:Eh,luminanceCoefficients:Mh,outputColorSpaceConfig:{drawingBufferColorSpace:Ze}}});let Hs;class j0{static getDataURL(e){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let t;if(e instanceof HTMLCanvasElement)t=e;else{Hs===void 0&&(Hs=zr("canvas")),Hs.width=e.width,Hs.height=e.height;const n=Hs.getContext("2d");e instanceof ImageData?n.putImageData(e,0,0):n.drawImage(e,0,0,e.width,e.height),t=Hs}return t.width>2048||t.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",e),t.toDataURL("image/jpeg",.6)):t.toDataURL("image/png")}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const t=zr("canvas");t.width=e.width,t.height=e.height;const n=t.getContext("2d");n.drawImage(e,0,0,e.width,e.height);const s=n.getImageData(0,0,e.width,e.height),a=s.data;for(let r=0;r<a.length;r++)a[r]=ki(a[r]/255)*255;return n.putImageData(s,0,0),t}else if(e.data){const t=e.data.slice(0);for(let n=0;n<t.length;n++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[n]=Math.floor(ki(t[n]/255)*255):t[n]=ki(t[n]);return{data:t,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let X0=0;class Vp{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:X0++}),this.uuid=ai(),this.data=e,this.dataReady=!0,this.version=0}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const n={uuid:this.uuid,url:""},s=this.data;if(s!==null){let a;if(Array.isArray(s)){a=[];for(let r=0,o=s.length;r<o;r++)s[r].isDataTexture?a.push(jc(s[r].image)):a.push(jc(s[r]))}else a=jc(s);n.url=a}return t||(e.images[this.uuid]=n),n}}function jc(i){return typeof HTMLImageElement<"u"&&i instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&i instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&i instanceof ImageBitmap?j0.getDataURL(i):i.data?{data:Array.from(i.data),width:i.width,height:i.height,type:i.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let Y0=0;class Ft extends qa{constructor(e=Ft.DEFAULT_IMAGE,t=Ft.DEFAULT_MAPPING,n=es,s=es,a=Qt,r=Pi,o=zn,c=Ui,l=Ft.DEFAULT_ANISOTROPY,d=Qi){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:Y0++}),this.uuid=ai(),this.name="",this.source=new Vp(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=n,this.wrapT=s,this.magFilter=a,this.minFilter=r,this.anisotropy=l,this.format=o,this.internalFormat=null,this.type=c,this.offset=new Ce(0,0),this.repeat=new Ce(1,1),this.center=new Ce(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new je,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=d,this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.pmremVersion=0}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const n={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),t||(e.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==Rp)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case Vn:e.x=e.x-Math.floor(e.x);break;case es:e.x=e.x<0?0:1;break;case sc:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case Vn:e.y=e.y-Math.floor(e.y);break;case es:e.y=e.y<0?0:1;break;case sc:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}}Ft.DEFAULT_IMAGE=null;Ft.DEFAULT_MAPPING=Rp;Ft.DEFAULT_ANISOTROPY=1;class tt{constructor(e=0,t=0,n=0,s=1){tt.prototype.isVector4=!0,this.x=e,this.y=t,this.z=n,this.w=s}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,n,s){return this.x=e,this.y=t,this.z=n,this.w=s,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const t=this.x,n=this.y,s=this.z,a=this.w,r=e.elements;return this.x=r[0]*t+r[4]*n+r[8]*s+r[12]*a,this.y=r[1]*t+r[5]*n+r[9]*s+r[13]*a,this.z=r[2]*t+r[6]*n+r[10]*s+r[14]*a,this.w=r[3]*t+r[7]*n+r[11]*s+r[15]*a,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,n,s,a;const c=e.elements,l=c[0],d=c[4],u=c[8],h=c[1],f=c[5],g=c[9],b=c[2],m=c[6],p=c[10];if(Math.abs(d-h)<.01&&Math.abs(u-b)<.01&&Math.abs(g-m)<.01){if(Math.abs(d+h)<.1&&Math.abs(u+b)<.1&&Math.abs(g+m)<.1&&Math.abs(l+f+p-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;const x=(l+1)/2,y=(f+1)/2,D=(p+1)/2,T=(d+h)/4,R=(u+b)/4,I=(g+m)/4;return x>y&&x>D?x<.01?(n=0,s=.707106781,a=.707106781):(n=Math.sqrt(x),s=T/n,a=R/n):y>D?y<.01?(n=.707106781,s=0,a=.707106781):(s=Math.sqrt(y),n=T/s,a=I/s):D<.01?(n=.707106781,s=.707106781,a=0):(a=Math.sqrt(D),n=R/a,s=I/a),this.set(n,s,a,t),this}let v=Math.sqrt((m-g)*(m-g)+(u-b)*(u-b)+(h-d)*(h-d));return Math.abs(v)<.001&&(v=1),this.x=(m-g)/v,this.y=(u-b)/v,this.z=(h-d)/v,this.w=Math.acos((l+f+p-1)/2),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this.w=t[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this.w=Math.max(e.w,Math.min(t.w,this.w)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this.w=Math.max(e,Math.min(t,this.w)),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this.w=e.w+(t.w-e.w)*n,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class K0 extends qa{constructor(e=1,t=1,n={}){super(),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=1,this.scissor=new tt(0,0,e,t),this.scissorTest=!1,this.viewport=new tt(0,0,e,t);const s={width:e,height:t,depth:1};n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Qt,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1},n);const a=new Ft(s,n.mapping,n.wrapS,n.wrapT,n.magFilter,n.minFilter,n.format,n.type,n.anisotropy,n.colorSpace);a.flipY=!1,a.generateMipmaps=n.generateMipmaps,a.internalFormat=n.internalFormat,this.textures=[];const r=n.count;for(let o=0;o<r;o++)this.textures[o]=a.clone(),this.textures[o].isRenderTargetTexture=!0;this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this.depthTexture=n.depthTexture,this.samples=n.samples}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}setSize(e,t,n=1){if(this.width!==e||this.height!==t||this.depth!==n){this.width=e,this.height=t,this.depth=n;for(let s=0,a=this.textures.length;s<a;s++)this.textures[s].image.width=e,this.textures[s].image.height=t,this.textures[s].image.depth=n;this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let n=0,s=e.textures.length;n<s;n++)this.textures[n]=e.textures[n].clone(),this.textures[n].isRenderTargetTexture=!0;const t=Object.assign({},e.texture.image);return this.texture.source=new Vp(t),this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class os extends K0{constructor(e=1,t=1,n={}){super(e,t,n),this.isWebGLRenderTarget=!0}}class Wp extends Ft{constructor(e=null,t=1,n=1,s=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:n,depth:s},this.magFilter=Zt,this.minFilter=Zt,this.wrapR=es,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}}class $0 extends Ft{constructor(e=null,t=1,n=1,s=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:n,depth:s},this.magFilter=Zt,this.minFilter=Zt,this.wrapR=es,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Gn{constructor(e=0,t=0,n=0,s=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=n,this._w=s}static slerpFlat(e,t,n,s,a,r,o){let c=n[s+0],l=n[s+1],d=n[s+2],u=n[s+3];const h=a[r+0],f=a[r+1],g=a[r+2],b=a[r+3];if(o===0){e[t+0]=c,e[t+1]=l,e[t+2]=d,e[t+3]=u;return}if(o===1){e[t+0]=h,e[t+1]=f,e[t+2]=g,e[t+3]=b;return}if(u!==b||c!==h||l!==f||d!==g){let m=1-o;const p=c*h+l*f+d*g+u*b,v=p>=0?1:-1,x=1-p*p;if(x>Number.EPSILON){const D=Math.sqrt(x),T=Math.atan2(D,p*v);m=Math.sin(m*T)/D,o=Math.sin(o*T)/D}const y=o*v;if(c=c*m+h*y,l=l*m+f*y,d=d*m+g*y,u=u*m+b*y,m===1-o){const D=1/Math.sqrt(c*c+l*l+d*d+u*u);c*=D,l*=D,d*=D,u*=D}}e[t]=c,e[t+1]=l,e[t+2]=d,e[t+3]=u}static multiplyQuaternionsFlat(e,t,n,s,a,r){const o=n[s],c=n[s+1],l=n[s+2],d=n[s+3],u=a[r],h=a[r+1],f=a[r+2],g=a[r+3];return e[t]=o*g+d*u+c*f-l*h,e[t+1]=c*g+d*h+l*u-o*f,e[t+2]=l*g+d*f+o*h-c*u,e[t+3]=d*g-o*u-c*h-l*f,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,n,s){return this._x=e,this._y=t,this._z=n,this._w=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){const n=e._x,s=e._y,a=e._z,r=e._order,o=Math.cos,c=Math.sin,l=o(n/2),d=o(s/2),u=o(a/2),h=c(n/2),f=c(s/2),g=c(a/2);switch(r){case"XYZ":this._x=h*d*u+l*f*g,this._y=l*f*u-h*d*g,this._z=l*d*g+h*f*u,this._w=l*d*u-h*f*g;break;case"YXZ":this._x=h*d*u+l*f*g,this._y=l*f*u-h*d*g,this._z=l*d*g-h*f*u,this._w=l*d*u+h*f*g;break;case"ZXY":this._x=h*d*u-l*f*g,this._y=l*f*u+h*d*g,this._z=l*d*g+h*f*u,this._w=l*d*u-h*f*g;break;case"ZYX":this._x=h*d*u-l*f*g,this._y=l*f*u+h*d*g,this._z=l*d*g-h*f*u,this._w=l*d*u+h*f*g;break;case"YZX":this._x=h*d*u+l*f*g,this._y=l*f*u+h*d*g,this._z=l*d*g-h*f*u,this._w=l*d*u-h*f*g;break;case"XZY":this._x=h*d*u-l*f*g,this._y=l*f*u-h*d*g,this._z=l*d*g+h*f*u,this._w=l*d*u+h*f*g;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+r)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){const n=t/2,s=Math.sin(n);return this._x=e.x*s,this._y=e.y*s,this._z=e.z*s,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(e){const t=e.elements,n=t[0],s=t[4],a=t[8],r=t[1],o=t[5],c=t[9],l=t[2],d=t[6],u=t[10],h=n+o+u;if(h>0){const f=.5/Math.sqrt(h+1);this._w=.25/f,this._x=(d-c)*f,this._y=(a-l)*f,this._z=(r-s)*f}else if(n>o&&n>u){const f=2*Math.sqrt(1+n-o-u);this._w=(d-c)/f,this._x=.25*f,this._y=(s+r)/f,this._z=(a+l)/f}else if(o>u){const f=2*Math.sqrt(1+o-n-u);this._w=(a-l)/f,this._x=(s+r)/f,this._y=.25*f,this._z=(c+d)/f}else{const f=2*Math.sqrt(1+u-n-o);this._w=(r-s)/f,this._x=(a+l)/f,this._y=(c+d)/f,this._z=.25*f}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let n=e.dot(t)+1;return n<Number.EPSILON?(n=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=n):(this._x=0,this._y=-e.z,this._z=e.y,this._w=n)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=n),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(Wt(this.dot(e),-1,1)))}rotateTowards(e,t){const n=this.angleTo(e);if(n===0)return this;const s=Math.min(1,t/n);return this.slerp(e,s),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){const n=e._x,s=e._y,a=e._z,r=e._w,o=t._x,c=t._y,l=t._z,d=t._w;return this._x=n*d+r*o+s*l-a*c,this._y=s*d+r*c+a*o-n*l,this._z=a*d+r*l+n*c-s*o,this._w=r*d-n*o-s*c-a*l,this._onChangeCallback(),this}slerp(e,t){if(t===0)return this;if(t===1)return this.copy(e);const n=this._x,s=this._y,a=this._z,r=this._w;let o=r*e._w+n*e._x+s*e._y+a*e._z;if(o<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,o=-o):this.copy(e),o>=1)return this._w=r,this._x=n,this._y=s,this._z=a,this;const c=1-o*o;if(c<=Number.EPSILON){const f=1-t;return this._w=f*r+t*this._w,this._x=f*n+t*this._x,this._y=f*s+t*this._y,this._z=f*a+t*this._z,this.normalize(),this}const l=Math.sqrt(c),d=Math.atan2(l,o),u=Math.sin((1-t)*d)/l,h=Math.sin(t*d)/l;return this._w=r*u+this._w*h,this._x=n*u+this._x*h,this._y=s*u+this._y*h,this._z=a*u+this._z*h,this._onChangeCallback(),this}slerpQuaternions(e,t,n){return this.copy(e).slerp(t,n)}random(){const e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),n=Math.random(),s=Math.sqrt(1-n),a=Math.sqrt(n);return this.set(s*Math.sin(e),s*Math.cos(e),a*Math.sin(t),a*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class A{constructor(e=0,t=0,n=0){A.prototype.isVector3=!0,this.x=e,this.y=t,this.z=n}set(e,t,n){return n===void 0&&(n=this.z),this.x=e,this.y=t,this.z=n,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(Th.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(Th.setFromAxisAngle(e,t))}applyMatrix3(e){const t=this.x,n=this.y,s=this.z,a=e.elements;return this.x=a[0]*t+a[3]*n+a[6]*s,this.y=a[1]*t+a[4]*n+a[7]*s,this.z=a[2]*t+a[5]*n+a[8]*s,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const t=this.x,n=this.y,s=this.z,a=e.elements,r=1/(a[3]*t+a[7]*n+a[11]*s+a[15]);return this.x=(a[0]*t+a[4]*n+a[8]*s+a[12])*r,this.y=(a[1]*t+a[5]*n+a[9]*s+a[13])*r,this.z=(a[2]*t+a[6]*n+a[10]*s+a[14])*r,this}applyQuaternion(e){const t=this.x,n=this.y,s=this.z,a=e.x,r=e.y,o=e.z,c=e.w,l=2*(r*s-o*n),d=2*(o*t-a*s),u=2*(a*n-r*t);return this.x=t+c*l+r*u-o*d,this.y=n+c*d+o*l-a*u,this.z=s+c*u+a*d-r*l,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const t=this.x,n=this.y,s=this.z,a=e.elements;return this.x=a[0]*t+a[4]*n+a[8]*s,this.y=a[1]*t+a[5]*n+a[9]*s,this.z=a[2]*t+a[6]*n+a[10]*s,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){const n=e.x,s=e.y,a=e.z,r=t.x,o=t.y,c=t.z;return this.x=s*c-a*o,this.y=a*r-n*c,this.z=n*o-s*r,this}projectOnVector(e){const t=e.lengthSq();if(t===0)return this.set(0,0,0);const n=e.dot(this)/t;return this.copy(e).multiplyScalar(n)}projectOnPlane(e){return Xc.copy(this).projectOnVector(e),this.sub(Xc)}reflect(e){return this.sub(Xc.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const n=this.dot(e)/t;return Math.acos(Wt(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,n=this.y-e.y,s=this.z-e.z;return t*t+n*n+s*s}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,n){const s=Math.sin(t)*e;return this.x=s*Math.sin(n),this.y=Math.cos(t)*e,this.z=s*Math.cos(n),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,n){return this.x=e*Math.sin(t),this.y=n,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){const t=this.setFromMatrixColumn(e,0).length(),n=this.setFromMatrixColumn(e,1).length(),s=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=n,this.z=s,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=Math.random()*Math.PI*2,t=Math.random()*2-1,n=Math.sqrt(1-t*t);return this.x=n*Math.cos(e),this.y=t,this.z=n*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const Xc=new A,Th=new Gn;class Rn{constructor(e=new A(1/0,1/0,1/0),t=new A(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t+=3)this.expandByPoint(Xn.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,n=e.count;t<n;t++)this.expandByPoint(Xn.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){const n=Xn.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(n),this.max.copy(e).add(n),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);const n=e.geometry;if(n!==void 0){const a=n.getAttribute("position");if(t===!0&&a!==void 0&&e.isInstancedMesh!==!0)for(let r=0,o=a.count;r<o;r++)e.isMesh===!0?e.getVertexPosition(r,Xn):Xn.fromBufferAttribute(a,r),Xn.applyMatrix4(e.matrixWorld),this.expandByPoint(Xn);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),so.copy(e.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),so.copy(n.boundingBox)),so.applyMatrix4(e.matrixWorld),this.union(so)}const s=e.children;for(let a=0,r=s.length;a<r;a++)this.expandByObject(s[a],t);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,Xn),Xn.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,n;return e.normal.x>0?(t=e.normal.x*this.min.x,n=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,n=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,n+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,n+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,n+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,n+=e.normal.z*this.min.z),t<=-e.constant&&n>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(ir),ao.subVectors(this.max,ir),Gs.subVectors(e.a,ir),Vs.subVectors(e.b,ir),Ws.subVectors(e.c,ir),Gi.subVectors(Vs,Gs),Vi.subVectors(Ws,Vs),fs.subVectors(Gs,Ws);let t=[0,-Gi.z,Gi.y,0,-Vi.z,Vi.y,0,-fs.z,fs.y,Gi.z,0,-Gi.x,Vi.z,0,-Vi.x,fs.z,0,-fs.x,-Gi.y,Gi.x,0,-Vi.y,Vi.x,0,-fs.y,fs.x,0];return!Yc(t,Gs,Vs,Ws,ao)||(t=[1,0,0,0,1,0,0,0,1],!Yc(t,Gs,Vs,Ws,ao))?!1:(ro.crossVectors(Gi,Vi),t=[ro.x,ro.y,ro.z],Yc(t,Gs,Vs,Ws,ao))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,Xn).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(Xn).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(yi[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),yi[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),yi[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),yi[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),yi[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),yi[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),yi[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),yi[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(yi),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}}const yi=[new A,new A,new A,new A,new A,new A,new A,new A],Xn=new A,so=new Rn,Gs=new A,Vs=new A,Ws=new A,Gi=new A,Vi=new A,fs=new A,ir=new A,ao=new A,ro=new A,ps=new A;function Yc(i,e,t,n,s){for(let a=0,r=i.length-3;a<=r;a+=3){ps.fromArray(i,a);const o=s.x*Math.abs(ps.x)+s.y*Math.abs(ps.y)+s.z*Math.abs(ps.z),c=e.dot(ps),l=t.dot(ps),d=n.dot(ps);if(Math.max(-Math.max(c,l,d),Math.min(c,l,d))>o)return!1}return!0}const J0=new Rn,sr=new A,Kc=new A;class pi{constructor(e=new A,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){const n=this.center;t!==void 0?n.copy(t):J0.setFromPoints(e).getCenter(n);let s=0;for(let a=0,r=e.length;a<r;a++)s=Math.max(s,n.distanceToSquared(e[a]));return this.radius=Math.sqrt(s),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){const n=this.center.distanceToSquared(e);return t.copy(e),n>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;sr.subVectors(e,this.center);const t=sr.lengthSq();if(t>this.radius*this.radius){const n=Math.sqrt(t),s=(n-this.radius)*.5;this.center.addScaledVector(sr,s/n),this.radius+=s}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(Kc.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(sr.copy(e.center).add(Kc)),this.expandByPoint(sr.copy(e.center).sub(Kc))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}}const Mi=new A,$c=new A,oo=new A,Wi=new A,Jc=new A,co=new A,Qc=new A;class Xr{constructor(e=new A,t=new A(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,Mi)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);const n=t.dot(this.direction);return n<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const t=Mi.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(Mi.copy(this.origin).addScaledVector(this.direction,t),Mi.distanceToSquared(e))}distanceSqToSegment(e,t,n,s){$c.copy(e).add(t).multiplyScalar(.5),oo.copy(t).sub(e).normalize(),Wi.copy(this.origin).sub($c);const a=e.distanceTo(t)*.5,r=-this.direction.dot(oo),o=Wi.dot(this.direction),c=-Wi.dot(oo),l=Wi.lengthSq(),d=Math.abs(1-r*r);let u,h,f,g;if(d>0)if(u=r*c-o,h=r*o-c,g=a*d,u>=0)if(h>=-g)if(h<=g){const b=1/d;u*=b,h*=b,f=u*(u+r*h+2*o)+h*(r*u+h+2*c)+l}else h=a,u=Math.max(0,-(r*h+o)),f=-u*u+h*(h+2*c)+l;else h=-a,u=Math.max(0,-(r*h+o)),f=-u*u+h*(h+2*c)+l;else h<=-g?(u=Math.max(0,-(-r*a+o)),h=u>0?-a:Math.min(Math.max(-a,-c),a),f=-u*u+h*(h+2*c)+l):h<=g?(u=0,h=Math.min(Math.max(-a,-c),a),f=h*(h+2*c)+l):(u=Math.max(0,-(r*a+o)),h=u>0?a:Math.min(Math.max(-a,-c),a),f=-u*u+h*(h+2*c)+l);else h=r>0?-a:a,u=Math.max(0,-(r*h+o)),f=-u*u+h*(h+2*c)+l;return n&&n.copy(this.origin).addScaledVector(this.direction,u),s&&s.copy($c).addScaledVector(oo,h),f}intersectSphere(e,t){Mi.subVectors(e.center,this.origin);const n=Mi.dot(this.direction),s=Mi.dot(Mi)-n*n,a=e.radius*e.radius;if(s>a)return null;const r=Math.sqrt(a-s),o=n-r,c=n+r;return c<0?null:o<0?this.at(c,t):this.at(o,t)}intersectsSphere(e){return this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;const n=-(this.origin.dot(e.normal)+e.constant)/t;return n>=0?n:null}intersectPlane(e,t){const n=this.distanceToPlane(e);return n===null?null:this.at(n,t)}intersectsPlane(e){const t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let n,s,a,r,o,c;const l=1/this.direction.x,d=1/this.direction.y,u=1/this.direction.z,h=this.origin;return l>=0?(n=(e.min.x-h.x)*l,s=(e.max.x-h.x)*l):(n=(e.max.x-h.x)*l,s=(e.min.x-h.x)*l),d>=0?(a=(e.min.y-h.y)*d,r=(e.max.y-h.y)*d):(a=(e.max.y-h.y)*d,r=(e.min.y-h.y)*d),n>r||a>s||((a>n||isNaN(n))&&(n=a),(r<s||isNaN(s))&&(s=r),u>=0?(o=(e.min.z-h.z)*u,c=(e.max.z-h.z)*u):(o=(e.max.z-h.z)*u,c=(e.min.z-h.z)*u),n>c||o>s)||((o>n||n!==n)&&(n=o),(c<s||s!==s)&&(s=c),s<0)?null:this.at(n>=0?n:s,t)}intersectsBox(e){return this.intersectBox(e,Mi)!==null}intersectTriangle(e,t,n,s,a){Jc.subVectors(t,e),co.subVectors(n,e),Qc.crossVectors(Jc,co);let r=this.direction.dot(Qc),o;if(r>0){if(s)return null;o=1}else if(r<0)o=-1,r=-r;else return null;Wi.subVectors(this.origin,e);const c=o*this.direction.dot(co.crossVectors(Wi,co));if(c<0)return null;const l=o*this.direction.dot(Jc.cross(Wi));if(l<0||c+l>r)return null;const d=-o*Wi.dot(Qc);return d<0?null:this.at(d/r,a)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class He{constructor(e,t,n,s,a,r,o,c,l,d,u,h,f,g,b,m){He.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,n,s,a,r,o,c,l,d,u,h,f,g,b,m)}set(e,t,n,s,a,r,o,c,l,d,u,h,f,g,b,m){const p=this.elements;return p[0]=e,p[4]=t,p[8]=n,p[12]=s,p[1]=a,p[5]=r,p[9]=o,p[13]=c,p[2]=l,p[6]=d,p[10]=u,p[14]=h,p[3]=f,p[7]=g,p[11]=b,p[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new He().fromArray(this.elements)}copy(e){const t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],t[9]=n[9],t[10]=n[10],t[11]=n[11],t[12]=n[12],t[13]=n[13],t[14]=n[14],t[15]=n[15],this}copyPosition(e){const t=this.elements,n=e.elements;return t[12]=n[12],t[13]=n[13],t[14]=n[14],this}setFromMatrix3(e){const t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,n){return e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this}makeBasis(e,t,n){return this.set(e.x,t.x,n.x,0,e.y,t.y,n.y,0,e.z,t.z,n.z,0,0,0,0,1),this}extractRotation(e){const t=this.elements,n=e.elements,s=1/qs.setFromMatrixColumn(e,0).length(),a=1/qs.setFromMatrixColumn(e,1).length(),r=1/qs.setFromMatrixColumn(e,2).length();return t[0]=n[0]*s,t[1]=n[1]*s,t[2]=n[2]*s,t[3]=0,t[4]=n[4]*a,t[5]=n[5]*a,t[6]=n[6]*a,t[7]=0,t[8]=n[8]*r,t[9]=n[9]*r,t[10]=n[10]*r,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){const t=this.elements,n=e.x,s=e.y,a=e.z,r=Math.cos(n),o=Math.sin(n),c=Math.cos(s),l=Math.sin(s),d=Math.cos(a),u=Math.sin(a);if(e.order==="XYZ"){const h=r*d,f=r*u,g=o*d,b=o*u;t[0]=c*d,t[4]=-c*u,t[8]=l,t[1]=f+g*l,t[5]=h-b*l,t[9]=-o*c,t[2]=b-h*l,t[6]=g+f*l,t[10]=r*c}else if(e.order==="YXZ"){const h=c*d,f=c*u,g=l*d,b=l*u;t[0]=h+b*o,t[4]=g*o-f,t[8]=r*l,t[1]=r*u,t[5]=r*d,t[9]=-o,t[2]=f*o-g,t[6]=b+h*o,t[10]=r*c}else if(e.order==="ZXY"){const h=c*d,f=c*u,g=l*d,b=l*u;t[0]=h-b*o,t[4]=-r*u,t[8]=g+f*o,t[1]=f+g*o,t[5]=r*d,t[9]=b-h*o,t[2]=-r*l,t[6]=o,t[10]=r*c}else if(e.order==="ZYX"){const h=r*d,f=r*u,g=o*d,b=o*u;t[0]=c*d,t[4]=g*l-f,t[8]=h*l+b,t[1]=c*u,t[5]=b*l+h,t[9]=f*l-g,t[2]=-l,t[6]=o*c,t[10]=r*c}else if(e.order==="YZX"){const h=r*c,f=r*l,g=o*c,b=o*l;t[0]=c*d,t[4]=b-h*u,t[8]=g*u+f,t[1]=u,t[5]=r*d,t[9]=-o*d,t[2]=-l*d,t[6]=f*u+g,t[10]=h-b*u}else if(e.order==="XZY"){const h=r*c,f=r*l,g=o*c,b=o*l;t[0]=c*d,t[4]=-u,t[8]=l*d,t[1]=h*u+b,t[5]=r*d,t[9]=f*u-g,t[2]=g*u-f,t[6]=o*d,t[10]=b*u+h}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(Q0,e,Z0)}lookAt(e,t,n){const s=this.elements;return Sn.subVectors(e,t),Sn.lengthSq()===0&&(Sn.z=1),Sn.normalize(),qi.crossVectors(n,Sn),qi.lengthSq()===0&&(Math.abs(n.z)===1?Sn.x+=1e-4:Sn.z+=1e-4,Sn.normalize(),qi.crossVectors(n,Sn)),qi.normalize(),lo.crossVectors(Sn,qi),s[0]=qi.x,s[4]=lo.x,s[8]=Sn.x,s[1]=qi.y,s[5]=lo.y,s[9]=Sn.y,s[2]=qi.z,s[6]=lo.z,s[10]=Sn.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const n=e.elements,s=t.elements,a=this.elements,r=n[0],o=n[4],c=n[8],l=n[12],d=n[1],u=n[5],h=n[9],f=n[13],g=n[2],b=n[6],m=n[10],p=n[14],v=n[3],x=n[7],y=n[11],D=n[15],T=s[0],R=s[4],I=s[8],_=s[12],M=s[1],L=s[5],k=s[9],P=s[13],B=s[2],H=s[6],z=s[10],ee=s[14],V=s[3],oe=s[7],le=s[11],_e=s[15];return a[0]=r*T+o*M+c*B+l*V,a[4]=r*R+o*L+c*H+l*oe,a[8]=r*I+o*k+c*z+l*le,a[12]=r*_+o*P+c*ee+l*_e,a[1]=d*T+u*M+h*B+f*V,a[5]=d*R+u*L+h*H+f*oe,a[9]=d*I+u*k+h*z+f*le,a[13]=d*_+u*P+h*ee+f*_e,a[2]=g*T+b*M+m*B+p*V,a[6]=g*R+b*L+m*H+p*oe,a[10]=g*I+b*k+m*z+p*le,a[14]=g*_+b*P+m*ee+p*_e,a[3]=v*T+x*M+y*B+D*V,a[7]=v*R+x*L+y*H+D*oe,a[11]=v*I+x*k+y*z+D*le,a[15]=v*_+x*P+y*ee+D*_e,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){const e=this.elements,t=e[0],n=e[4],s=e[8],a=e[12],r=e[1],o=e[5],c=e[9],l=e[13],d=e[2],u=e[6],h=e[10],f=e[14],g=e[3],b=e[7],m=e[11],p=e[15];return g*(+a*c*u-s*l*u-a*o*h+n*l*h+s*o*f-n*c*f)+b*(+t*c*f-t*l*h+a*r*h-s*r*f+s*l*d-a*c*d)+m*(+t*l*u-t*o*f-a*r*u+n*r*f+a*o*d-n*l*d)+p*(-s*o*d-t*c*u+t*o*h+s*r*u-n*r*h+n*c*d)}transpose(){const e=this.elements;let t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,n){const s=this.elements;return e.isVector3?(s[12]=e.x,s[13]=e.y,s[14]=e.z):(s[12]=e,s[13]=t,s[14]=n),this}invert(){const e=this.elements,t=e[0],n=e[1],s=e[2],a=e[3],r=e[4],o=e[5],c=e[6],l=e[7],d=e[8],u=e[9],h=e[10],f=e[11],g=e[12],b=e[13],m=e[14],p=e[15],v=u*m*l-b*h*l+b*c*f-o*m*f-u*c*p+o*h*p,x=g*h*l-d*m*l-g*c*f+r*m*f+d*c*p-r*h*p,y=d*b*l-g*u*l+g*o*f-r*b*f-d*o*p+r*u*p,D=g*u*c-d*b*c-g*o*h+r*b*h+d*o*m-r*u*m,T=t*v+n*x+s*y+a*D;if(T===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const R=1/T;return e[0]=v*R,e[1]=(b*h*a-u*m*a-b*s*f+n*m*f+u*s*p-n*h*p)*R,e[2]=(o*m*a-b*c*a+b*s*l-n*m*l-o*s*p+n*c*p)*R,e[3]=(u*c*a-o*h*a-u*s*l+n*h*l+o*s*f-n*c*f)*R,e[4]=x*R,e[5]=(d*m*a-g*h*a+g*s*f-t*m*f-d*s*p+t*h*p)*R,e[6]=(g*c*a-r*m*a-g*s*l+t*m*l+r*s*p-t*c*p)*R,e[7]=(r*h*a-d*c*a+d*s*l-t*h*l-r*s*f+t*c*f)*R,e[8]=y*R,e[9]=(g*u*a-d*b*a-g*n*f+t*b*f+d*n*p-t*u*p)*R,e[10]=(r*b*a-g*o*a+g*n*l-t*b*l-r*n*p+t*o*p)*R,e[11]=(d*o*a-r*u*a-d*n*l+t*u*l+r*n*f-t*o*f)*R,e[12]=D*R,e[13]=(d*b*s-g*u*s+g*n*h-t*b*h-d*n*m+t*u*m)*R,e[14]=(g*o*s-r*b*s-g*n*c+t*b*c+r*n*m-t*o*m)*R,e[15]=(r*u*s-d*o*s+d*n*c-t*u*c-r*n*h+t*o*h)*R,this}scale(e){const t=this.elements,n=e.x,s=e.y,a=e.z;return t[0]*=n,t[4]*=s,t[8]*=a,t[1]*=n,t[5]*=s,t[9]*=a,t[2]*=n,t[6]*=s,t[10]*=a,t[3]*=n,t[7]*=s,t[11]*=a,this}getMaxScaleOnAxis(){const e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],n=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],s=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,n,s))}makeTranslation(e,t,n){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,n,0,0,0,1),this}makeRotationX(e){const t=Math.cos(e),n=Math.sin(e);return this.set(1,0,0,0,0,t,-n,0,0,n,t,0,0,0,0,1),this}makeRotationY(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,0,n,0,0,1,0,0,-n,0,t,0,0,0,0,1),this}makeRotationZ(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,0,n,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){const n=Math.cos(t),s=Math.sin(t),a=1-n,r=e.x,o=e.y,c=e.z,l=a*r,d=a*o;return this.set(l*r+n,l*o-s*c,l*c+s*o,0,l*o+s*c,d*o+n,d*c-s*r,0,l*c-s*o,d*c+s*r,a*c*c+n,0,0,0,0,1),this}makeScale(e,t,n){return this.set(e,0,0,0,0,t,0,0,0,0,n,0,0,0,0,1),this}makeShear(e,t,n,s,a,r){return this.set(1,n,a,0,e,1,r,0,t,s,1,0,0,0,0,1),this}compose(e,t,n){const s=this.elements,a=t._x,r=t._y,o=t._z,c=t._w,l=a+a,d=r+r,u=o+o,h=a*l,f=a*d,g=a*u,b=r*d,m=r*u,p=o*u,v=c*l,x=c*d,y=c*u,D=n.x,T=n.y,R=n.z;return s[0]=(1-(b+p))*D,s[1]=(f+y)*D,s[2]=(g-x)*D,s[3]=0,s[4]=(f-y)*T,s[5]=(1-(h+p))*T,s[6]=(m+v)*T,s[7]=0,s[8]=(g+x)*R,s[9]=(m-v)*R,s[10]=(1-(h+b))*R,s[11]=0,s[12]=e.x,s[13]=e.y,s[14]=e.z,s[15]=1,this}decompose(e,t,n){const s=this.elements;let a=qs.set(s[0],s[1],s[2]).length();const r=qs.set(s[4],s[5],s[6]).length(),o=qs.set(s[8],s[9],s[10]).length();this.determinant()<0&&(a=-a),e.x=s[12],e.y=s[13],e.z=s[14],Yn.copy(this);const l=1/a,d=1/r,u=1/o;return Yn.elements[0]*=l,Yn.elements[1]*=l,Yn.elements[2]*=l,Yn.elements[4]*=d,Yn.elements[5]*=d,Yn.elements[6]*=d,Yn.elements[8]*=u,Yn.elements[9]*=u,Yn.elements[10]*=u,t.setFromRotationMatrix(Yn),n.x=a,n.y=r,n.z=o,this}makePerspective(e,t,n,s,a,r,o=Li){const c=this.elements,l=2*a/(t-e),d=2*a/(n-s),u=(t+e)/(t-e),h=(n+s)/(n-s);let f,g;if(o===Li)f=-(r+a)/(r-a),g=-2*r*a/(r-a);else if(o===ac)f=-r/(r-a),g=-r*a/(r-a);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+o);return c[0]=l,c[4]=0,c[8]=u,c[12]=0,c[1]=0,c[5]=d,c[9]=h,c[13]=0,c[2]=0,c[6]=0,c[10]=f,c[14]=g,c[3]=0,c[7]=0,c[11]=-1,c[15]=0,this}makeOrthographic(e,t,n,s,a,r,o=Li){const c=this.elements,l=1/(t-e),d=1/(n-s),u=1/(r-a),h=(t+e)*l,f=(n+s)*d;let g,b;if(o===Li)g=(r+a)*u,b=-2*u;else if(o===ac)g=a*u,b=-1*u;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+o);return c[0]=2*l,c[4]=0,c[8]=0,c[12]=-h,c[1]=0,c[5]=2*d,c[9]=0,c[13]=-f,c[2]=0,c[6]=0,c[10]=b,c[14]=-g,c[3]=0,c[7]=0,c[11]=0,c[15]=1,this}equals(e){const t=this.elements,n=e.elements;for(let s=0;s<16;s++)if(t[s]!==n[s])return!1;return!0}fromArray(e,t=0){for(let n=0;n<16;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){const n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e[t+9]=n[9],e[t+10]=n[10],e[t+11]=n[11],e[t+12]=n[12],e[t+13]=n[13],e[t+14]=n[14],e[t+15]=n[15],e}}const qs=new A,Yn=new He,Q0=new A(0,0,0),Z0=new A(1,1,1),qi=new A,lo=new A,Sn=new A,Ah=new He,Rh=new Gn;class An{constructor(e=0,t=0,n=0,s=An.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=n,this._order=s}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,n,s=this._order){return this._x=e,this._y=t,this._z=n,this._order=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,n=!0){const s=e.elements,a=s[0],r=s[4],o=s[8],c=s[1],l=s[5],d=s[9],u=s[2],h=s[6],f=s[10];switch(t){case"XYZ":this._y=Math.asin(Wt(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-d,f),this._z=Math.atan2(-r,a)):(this._x=Math.atan2(h,l),this._z=0);break;case"YXZ":this._x=Math.asin(-Wt(d,-1,1)),Math.abs(d)<.9999999?(this._y=Math.atan2(o,f),this._z=Math.atan2(c,l)):(this._y=Math.atan2(-u,a),this._z=0);break;case"ZXY":this._x=Math.asin(Wt(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(-u,f),this._z=Math.atan2(-r,l)):(this._y=0,this._z=Math.atan2(c,a));break;case"ZYX":this._y=Math.asin(-Wt(u,-1,1)),Math.abs(u)<.9999999?(this._x=Math.atan2(h,f),this._z=Math.atan2(c,a)):(this._x=0,this._z=Math.atan2(-r,l));break;case"YZX":this._z=Math.asin(Wt(c,-1,1)),Math.abs(c)<.9999999?(this._x=Math.atan2(-d,l),this._y=Math.atan2(-u,a)):(this._x=0,this._y=Math.atan2(o,f));break;case"XZY":this._z=Math.asin(-Wt(r,-1,1)),Math.abs(r)<.9999999?(this._x=Math.atan2(h,l),this._y=Math.atan2(o,a)):(this._x=Math.atan2(-d,f),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,n===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,n){return Ah.makeRotationFromQuaternion(e),this.setFromRotationMatrix(Ah,t,n)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return Rh.setFromEuler(this),this.setFromQuaternion(Rh,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}An.DEFAULT_ORDER="XYZ";class bu{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let eb=0;const Ch=new A,js=new Gn,Si=new He,uo=new A,ar=new A,tb=new A,nb=new Gn,Ph=new A(1,0,0),Lh=new A(0,1,0),Dh=new A(0,0,1),Ih={type:"added"},ib={type:"removed"},Xs={type:"childadded",child:null},Zc={type:"childremoved",child:null};class Rt extends qa{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:eb++}),this.uuid=ai(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=Rt.DEFAULT_UP.clone();const e=new A,t=new An,n=new Gn,s=new A(1,1,1);function a(){n.setFromEuler(t,!1)}function r(){t.setFromQuaternion(n,void 0,!1)}t._onChange(a),n._onChange(r),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:s},modelViewMatrix:{value:new He},normalMatrix:{value:new je}}),this.matrix=new He,this.matrixWorld=new He,this.matrixAutoUpdate=Rt.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=Rt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new bu,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return js.setFromAxisAngle(e,t),this.quaternion.multiply(js),this}rotateOnWorldAxis(e,t){return js.setFromAxisAngle(e,t),this.quaternion.premultiply(js),this}rotateX(e){return this.rotateOnAxis(Ph,e)}rotateY(e){return this.rotateOnAxis(Lh,e)}rotateZ(e){return this.rotateOnAxis(Dh,e)}translateOnAxis(e,t){return Ch.copy(e).applyQuaternion(this.quaternion),this.position.add(Ch.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(Ph,e)}translateY(e){return this.translateOnAxis(Lh,e)}translateZ(e){return this.translateOnAxis(Dh,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(Si.copy(this.matrixWorld).invert())}lookAt(e,t,n){e.isVector3?uo.copy(e):uo.set(e,t,n);const s=this.parent;this.updateWorldMatrix(!0,!1),ar.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Si.lookAt(ar,uo,this.up):Si.lookAt(uo,ar,this.up),this.quaternion.setFromRotationMatrix(Si),s&&(Si.extractRotation(s.matrixWorld),js.setFromRotationMatrix(Si),this.quaternion.premultiply(js.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(Ih),Xs.child=e,this.dispatchEvent(Xs),Xs.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}const t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(ib),Zc.child=e,this.dispatchEvent(Zc),Zc.child=null),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),Si.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),Si.multiply(e.parent.matrixWorld)),e.applyMatrix4(Si),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(Ih),Xs.child=e,this.dispatchEvent(Xs),Xs.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let n=0,s=this.children.length;n<s;n++){const r=this.children[n].getObjectByProperty(e,t);if(r!==void 0)return r}}getObjectsByProperty(e,t,n=[]){this[e]===t&&n.push(this);const s=this.children;for(let a=0,r=s.length;a<r;a++)s[a].getObjectsByProperty(e,t,n);return n}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(ar,e,tb),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(ar,nb,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);const t=this.children;for(let n=0,s=t.length;n<s;n++)t[n].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const t=this.children;for(let n=0,s=t.length;n<s;n++)t[n].traverseVisible(e)}traverseAncestors(e){const t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);const t=this.children;for(let n=0,s=t.length;n<s;n++)t[n].updateMatrixWorld(e)}updateWorldMatrix(e,t){const n=this.parent;if(e===!0&&n!==null&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),t===!0){const s=this.children;for(let a=0,r=s.length;a<r;a++)s[a].updateWorldMatrix(!1,!0)}}toJSON(e){const t=e===void 0||typeof e=="string",n={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});const s={};s.uuid=this.uuid,s.type=this.type,this.name!==""&&(s.name=this.name),this.castShadow===!0&&(s.castShadow=!0),this.receiveShadow===!0&&(s.receiveShadow=!0),this.visible===!1&&(s.visible=!1),this.frustumCulled===!1&&(s.frustumCulled=!1),this.renderOrder!==0&&(s.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(s.userData=this.userData),s.layers=this.layers.mask,s.matrix=this.matrix.toArray(),s.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(s.matrixAutoUpdate=!1),this.isInstancedMesh&&(s.type="InstancedMesh",s.count=this.count,s.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(s.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(s.type="BatchedMesh",s.perObjectFrustumCulled=this.perObjectFrustumCulled,s.sortObjects=this.sortObjects,s.drawRanges=this._drawRanges,s.reservedRanges=this._reservedRanges,s.visibility=this._visibility,s.active=this._active,s.bounds=this._bounds.map(o=>({boxInitialized:o.boxInitialized,boxMin:o.box.min.toArray(),boxMax:o.box.max.toArray(),sphereInitialized:o.sphereInitialized,sphereRadius:o.sphere.radius,sphereCenter:o.sphere.center.toArray()})),s.maxInstanceCount=this._maxInstanceCount,s.maxVertexCount=this._maxVertexCount,s.maxIndexCount=this._maxIndexCount,s.geometryInitialized=this._geometryInitialized,s.geometryCount=this._geometryCount,s.matricesTexture=this._matricesTexture.toJSON(e),this._colorsTexture!==null&&(s.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(s.boundingSphere={center:s.boundingSphere.center.toArray(),radius:s.boundingSphere.radius}),this.boundingBox!==null&&(s.boundingBox={min:s.boundingBox.min.toArray(),max:s.boundingBox.max.toArray()}));function a(o,c){return o[c.uuid]===void 0&&(o[c.uuid]=c.toJSON(e)),c.uuid}if(this.isScene)this.background&&(this.background.isColor?s.background=this.background.toJSON():this.background.isTexture&&(s.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(s.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){s.geometry=a(e.geometries,this.geometry);const o=this.geometry.parameters;if(o!==void 0&&o.shapes!==void 0){const c=o.shapes;if(Array.isArray(c))for(let l=0,d=c.length;l<d;l++){const u=c[l];a(e.shapes,u)}else a(e.shapes,c)}}if(this.isSkinnedMesh&&(s.bindMode=this.bindMode,s.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(a(e.skeletons,this.skeleton),s.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const o=[];for(let c=0,l=this.material.length;c<l;c++)o.push(a(e.materials,this.material[c]));s.material=o}else s.material=a(e.materials,this.material);if(this.children.length>0){s.children=[];for(let o=0;o<this.children.length;o++)s.children.push(this.children[o].toJSON(e).object)}if(this.animations.length>0){s.animations=[];for(let o=0;o<this.animations.length;o++){const c=this.animations[o];s.animations.push(a(e.animations,c))}}if(t){const o=r(e.geometries),c=r(e.materials),l=r(e.textures),d=r(e.images),u=r(e.shapes),h=r(e.skeletons),f=r(e.animations),g=r(e.nodes);o.length>0&&(n.geometries=o),c.length>0&&(n.materials=c),l.length>0&&(n.textures=l),d.length>0&&(n.images=d),u.length>0&&(n.shapes=u),h.length>0&&(n.skeletons=h),f.length>0&&(n.animations=f),g.length>0&&(n.nodes=g)}return n.object=s,n;function r(o){const c=[];for(const l in o){const d=o[l];delete d.metadata,c.push(d)}return c}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let n=0;n<e.children.length;n++){const s=e.children[n];this.add(s.clone())}return this}}Rt.DEFAULT_UP=new A(0,1,0);Rt.DEFAULT_MATRIX_AUTO_UPDATE=!0;Rt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const Kn=new A,wi=new A,el=new A,Ei=new A,Ys=new A,Ks=new A,kh=new A,tl=new A,nl=new A,il=new A,sl=new tt,al=new tt,rl=new tt;class ni{constructor(e=new A,t=new A,n=new A){this.a=e,this.b=t,this.c=n}static getNormal(e,t,n,s){s.subVectors(n,t),Kn.subVectors(e,t),s.cross(Kn);const a=s.lengthSq();return a>0?s.multiplyScalar(1/Math.sqrt(a)):s.set(0,0,0)}static getBarycoord(e,t,n,s,a){Kn.subVectors(s,t),wi.subVectors(n,t),el.subVectors(e,t);const r=Kn.dot(Kn),o=Kn.dot(wi),c=Kn.dot(el),l=wi.dot(wi),d=wi.dot(el),u=r*l-o*o;if(u===0)return a.set(0,0,0),null;const h=1/u,f=(l*c-o*d)*h,g=(r*d-o*c)*h;return a.set(1-f-g,g,f)}static containsPoint(e,t,n,s){return this.getBarycoord(e,t,n,s,Ei)===null?!1:Ei.x>=0&&Ei.y>=0&&Ei.x+Ei.y<=1}static getInterpolation(e,t,n,s,a,r,o,c){return this.getBarycoord(e,t,n,s,Ei)===null?(c.x=0,c.y=0,"z"in c&&(c.z=0),"w"in c&&(c.w=0),null):(c.setScalar(0),c.addScaledVector(a,Ei.x),c.addScaledVector(r,Ei.y),c.addScaledVector(o,Ei.z),c)}static getInterpolatedAttribute(e,t,n,s,a,r){return sl.setScalar(0),al.setScalar(0),rl.setScalar(0),sl.fromBufferAttribute(e,t),al.fromBufferAttribute(e,n),rl.fromBufferAttribute(e,s),r.setScalar(0),r.addScaledVector(sl,a.x),r.addScaledVector(al,a.y),r.addScaledVector(rl,a.z),r}static isFrontFacing(e,t,n,s){return Kn.subVectors(n,t),wi.subVectors(e,t),Kn.cross(wi).dot(s)<0}set(e,t,n){return this.a.copy(e),this.b.copy(t),this.c.copy(n),this}setFromPointsAndIndices(e,t,n,s){return this.a.copy(e[t]),this.b.copy(e[n]),this.c.copy(e[s]),this}setFromAttributeAndIndices(e,t,n,s){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,n),this.c.fromBufferAttribute(e,s),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return Kn.subVectors(this.c,this.b),wi.subVectors(this.a,this.b),Kn.cross(wi).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return ni.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return ni.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,n,s,a){return ni.getInterpolation(e,this.a,this.b,this.c,t,n,s,a)}containsPoint(e){return ni.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return ni.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){const n=this.a,s=this.b,a=this.c;let r,o;Ys.subVectors(s,n),Ks.subVectors(a,n),tl.subVectors(e,n);const c=Ys.dot(tl),l=Ks.dot(tl);if(c<=0&&l<=0)return t.copy(n);nl.subVectors(e,s);const d=Ys.dot(nl),u=Ks.dot(nl);if(d>=0&&u<=d)return t.copy(s);const h=c*u-d*l;if(h<=0&&c>=0&&d<=0)return r=c/(c-d),t.copy(n).addScaledVector(Ys,r);il.subVectors(e,a);const f=Ys.dot(il),g=Ks.dot(il);if(g>=0&&f<=g)return t.copy(a);const b=f*l-c*g;if(b<=0&&l>=0&&g<=0)return o=l/(l-g),t.copy(n).addScaledVector(Ks,o);const m=d*g-f*u;if(m<=0&&u-d>=0&&f-g>=0)return kh.subVectors(a,s),o=(u-d)/(u-d+(f-g)),t.copy(s).addScaledVector(kh,o);const p=1/(m+b+h);return r=b*p,o=h*p,t.copy(n).addScaledVector(Ys,r).addScaledVector(Ks,o)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}const qp={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},ji={h:0,s:0,l:0},ho={h:0,s:0,l:0};function ol(i,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?i+(e-i)*6*t:t<1/2?e:t<2/3?i+(e-i)*6*(2/3-t):i}class De{constructor(e,t,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,n)}set(e,t,n){if(t===void 0&&n===void 0){const s=e;s&&s.isColor?this.copy(s):typeof s=="number"?this.setHex(s):typeof s=="string"&&this.setStyle(s)}else this.setRGB(e,t,n);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=Ze){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,et.toWorkingColorSpace(this,t),this}setRGB(e,t,n,s=et.workingColorSpace){return this.r=e,this.g=t,this.b=n,et.toWorkingColorSpace(this,s),this}setHSL(e,t,n,s=et.workingColorSpace){if(e=gu(e,1),t=Wt(t,0,1),n=Wt(n,0,1),t===0)this.r=this.g=this.b=n;else{const a=n<=.5?n*(1+t):n+t-n*t,r=2*n-a;this.r=ol(r,a,e+1/3),this.g=ol(r,a,e),this.b=ol(r,a,e-1/3)}return et.toWorkingColorSpace(this,s),this}setStyle(e,t=Ze){function n(a){a!==void 0&&parseFloat(a)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let s;if(s=/^(\w+)\(([^\)]*)\)/.exec(e)){let a;const r=s[1],o=s[2];switch(r){case"rgb":case"rgba":if(a=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(a[4]),this.setRGB(Math.min(255,parseInt(a[1],10))/255,Math.min(255,parseInt(a[2],10))/255,Math.min(255,parseInt(a[3],10))/255,t);if(a=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(a[4]),this.setRGB(Math.min(100,parseInt(a[1],10))/100,Math.min(100,parseInt(a[2],10))/100,Math.min(100,parseInt(a[3],10))/100,t);break;case"hsl":case"hsla":if(a=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(a[4]),this.setHSL(parseFloat(a[1])/360,parseFloat(a[2])/100,parseFloat(a[3])/100,t);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(s=/^\#([A-Fa-f\d]+)$/.exec(e)){const a=s[1],r=a.length;if(r===3)return this.setRGB(parseInt(a.charAt(0),16)/15,parseInt(a.charAt(1),16)/15,parseInt(a.charAt(2),16)/15,t);if(r===6)return this.setHex(parseInt(a,16),t);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=Ze){const n=qp[e.toLowerCase()];return n!==void 0?this.setHex(n,t):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=ki(e.r),this.g=ki(e.g),this.b=ki(e.b),this}copyLinearToSRGB(e){return this.r=ba(e.r),this.g=ba(e.g),this.b=ba(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=Ze){return et.fromWorkingColorSpace(on.copy(this),e),Math.round(Wt(on.r*255,0,255))*65536+Math.round(Wt(on.g*255,0,255))*256+Math.round(Wt(on.b*255,0,255))}getHexString(e=Ze){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=et.workingColorSpace){et.fromWorkingColorSpace(on.copy(this),t);const n=on.r,s=on.g,a=on.b,r=Math.max(n,s,a),o=Math.min(n,s,a);let c,l;const d=(o+r)/2;if(o===r)c=0,l=0;else{const u=r-o;switch(l=d<=.5?u/(r+o):u/(2-r-o),r){case n:c=(s-a)/u+(s<a?6:0);break;case s:c=(a-n)/u+2;break;case a:c=(n-s)/u+4;break}c/=6}return e.h=c,e.s=l,e.l=d,e}getRGB(e,t=et.workingColorSpace){return et.fromWorkingColorSpace(on.copy(this),t),e.r=on.r,e.g=on.g,e.b=on.b,e}getStyle(e=Ze){et.fromWorkingColorSpace(on.copy(this),e);const t=on.r,n=on.g,s=on.b;return e!==Ze?`color(${e} ${t.toFixed(3)} ${n.toFixed(3)} ${s.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(n*255)},${Math.round(s*255)})`}offsetHSL(e,t,n){return this.getHSL(ji),this.setHSL(ji.h+e,ji.s+t,ji.l+n)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,n){return this.r=e.r+(t.r-e.r)*n,this.g=e.g+(t.g-e.g)*n,this.b=e.b+(t.b-e.b)*n,this}lerpHSL(e,t){this.getHSL(ji),e.getHSL(ho);const n=Tr(ji.h,ho.h,t),s=Tr(ji.s,ho.s,t),a=Tr(ji.l,ho.l,t);return this.setHSL(n,s,a),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const t=this.r,n=this.g,s=this.b,a=e.elements;return this.r=a[0]*t+a[3]*n+a[6]*s,this.g=a[1]*t+a[4]*n+a[7]*s,this.b=a[2]*t+a[5]*n+a[8]*s,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const on=new De;De.NAMES=qp;let sb=0;class ui extends qa{static get type(){return"Material"}get type(){return this.constructor.type}set type(e){}constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:sb++}),this.uuid=ai(),this.name="",this.blending=ma,this.side=Fi,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Vl,this.blendDst=Wl,this.blendEquation=Ss,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new De(0,0,0),this.blendAlpha=0,this.depthFunc=Ta,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=bh,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=zs,this.stencilZFail=zs,this.stencilZPass=zs,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const t in e){const n=e[t];if(n===void 0){console.warn(`THREE.Material: parameter '${t}' has value of undefined.`);continue}const s=this[t];if(s===void 0){console.warn(`THREE.Material: '${t}' is not a property of THREE.${this.type}.`);continue}s&&s.isColor?s.set(n):s&&s.isVector3&&n&&n.isVector3?s.copy(n):this[t]=n}}toJSON(e){const t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});const n={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(e).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(e).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(e).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(e).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(e).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==ma&&(n.blending=this.blending),this.side!==Fi&&(n.side=this.side),this.vertexColors===!0&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=!0),this.blendSrc!==Vl&&(n.blendSrc=this.blendSrc),this.blendDst!==Wl&&(n.blendDst=this.blendDst),this.blendEquation!==Ss&&(n.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(n.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(n.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(n.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(n.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(n.blendAlpha=this.blendAlpha),this.depthFunc!==Ta&&(n.depthFunc=this.depthFunc),this.depthTest===!1&&(n.depthTest=this.depthTest),this.depthWrite===!1&&(n.depthWrite=this.depthWrite),this.colorWrite===!1&&(n.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(n.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==bh&&(n.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(n.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(n.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==zs&&(n.stencilFail=this.stencilFail),this.stencilZFail!==zs&&(n.stencilZFail=this.stencilZFail),this.stencilZPass!==zs&&(n.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(n.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaHash===!0&&(n.alphaHash=!0),this.alphaToCoverage===!0&&(n.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=!0),this.forceSinglePass===!0&&(n.forceSinglePass=!0),this.wireframe===!0&&(n.wireframe=!0),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=!0),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),Object.keys(this.userData).length>0&&(n.userData=this.userData);function s(a){const r=[];for(const o in a){const c=a[o];delete c.metadata,r.push(c)}return r}if(t){const a=s(e.textures),r=s(e.images);a.length>0&&(n.textures=a),r.length>0&&(n.images=r)}return n}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const t=e.clippingPlanes;let n=null;if(t!==null){const s=t.length;n=new Array(s);for(let a=0;a!==s;++a)n[a]=t[a].clone()}return this.clippingPlanes=n,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}onBuild(){console.warn("Material: onBuild() has been removed.")}}class _t extends ui{static get type(){return"MeshBasicMaterial"}constructor(e){super(),this.isMeshBasicMaterial=!0,this.color=new De(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new An,this.combine=Ap,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const Ci=ab();function ab(){const i=new ArrayBuffer(4),e=new Float32Array(i),t=new Uint32Array(i),n=new Uint32Array(512),s=new Uint32Array(512);for(let c=0;c<256;++c){const l=c-127;l<-27?(n[c]=0,n[c|256]=32768,s[c]=24,s[c|256]=24):l<-14?(n[c]=1024>>-l-14,n[c|256]=1024>>-l-14|32768,s[c]=-l-1,s[c|256]=-l-1):l<=15?(n[c]=l+15<<10,n[c|256]=l+15<<10|32768,s[c]=13,s[c|256]=13):l<128?(n[c]=31744,n[c|256]=64512,s[c]=24,s[c|256]=24):(n[c]=31744,n[c|256]=64512,s[c]=13,s[c|256]=13)}const a=new Uint32Array(2048),r=new Uint32Array(64),o=new Uint32Array(64);for(let c=1;c<1024;++c){let l=c<<13,d=0;for(;!(l&8388608);)l<<=1,d-=8388608;l&=-8388609,d+=947912704,a[c]=l|d}for(let c=1024;c<2048;++c)a[c]=939524096+(c-1024<<13);for(let c=1;c<31;++c)r[c]=c<<23;r[31]=1199570944,r[32]=2147483648;for(let c=33;c<63;++c)r[c]=2147483648+(c-32<<23);r[63]=3347054592;for(let c=1;c<64;++c)c!==32&&(o[c]=1024);return{floatView:e,uint32View:t,baseTable:n,shiftTable:s,mantissaTable:a,exponentTable:r,offsetTable:o}}function rb(i){Math.abs(i)>65504&&console.warn("THREE.DataUtils.toHalfFloat(): Value out of range."),i=Wt(i,-65504,65504),Ci.floatView[0]=i;const e=Ci.uint32View[0],t=e>>23&511;return Ci.baseTable[t]+((e&8388607)>>Ci.shiftTable[t])}function ob(i){const e=i>>10;return Ci.uint32View[0]=Ci.mantissaTable[Ci.offsetTable[e]+(i&1023)]+Ci.exponentTable[e],Ci.floatView[0]}const AE={toHalfFloat:rb,fromHalfFloat:ob},zt=new A,fo=new Ce;class dn{constructor(e,t,n=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=n,this.usage=Ad,this.updateRanges=[],this.gpuType=ii,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,n){e*=this.itemSize,n*=t.itemSize;for(let s=0,a=this.itemSize;s<a;s++)this.array[e+s]=t.array[n+s];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,n=this.count;t<n;t++)fo.fromBufferAttribute(this,t),fo.applyMatrix3(e),this.setXY(t,fo.x,fo.y);else if(this.itemSize===3)for(let t=0,n=this.count;t<n;t++)zt.fromBufferAttribute(this,t),zt.applyMatrix3(e),this.setXYZ(t,zt.x,zt.y,zt.z);return this}applyMatrix4(e){for(let t=0,n=this.count;t<n;t++)zt.fromBufferAttribute(this,t),zt.applyMatrix4(e),this.setXYZ(t,zt.x,zt.y,zt.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)zt.fromBufferAttribute(this,t),zt.applyNormalMatrix(e),this.setXYZ(t,zt.x,zt.y,zt.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)zt.fromBufferAttribute(this,t),zt.transformDirection(e),this.setXYZ(t,zt.x,zt.y,zt.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let n=this.array[e*this.itemSize+t];return this.normalized&&(n=ti(n,this.array)),n}setComponent(e,t,n){return this.normalized&&(n=ht(n,this.array)),this.array[e*this.itemSize+t]=n,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=ti(t,this.array)),t}setX(e,t){return this.normalized&&(t=ht(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=ti(t,this.array)),t}setY(e,t){return this.normalized&&(t=ht(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=ti(t,this.array)),t}setZ(e,t){return this.normalized&&(t=ht(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=ti(t,this.array)),t}setW(e,t){return this.normalized&&(t=ht(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,n){return e*=this.itemSize,this.normalized&&(t=ht(t,this.array),n=ht(n,this.array)),this.array[e+0]=t,this.array[e+1]=n,this}setXYZ(e,t,n,s){return e*=this.itemSize,this.normalized&&(t=ht(t,this.array),n=ht(n,this.array),s=ht(s,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=s,this}setXYZW(e,t,n,s,a){return e*=this.itemSize,this.normalized&&(t=ht(t,this.array),n=ht(n,this.array),s=ht(s,this.array),a=ht(a,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=s,this.array[e+3]=a,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==Ad&&(e.usage=this.usage),e}}class jp extends dn{constructor(e,t,n){super(new Uint16Array(e),t,n)}}class Xp extends dn{constructor(e,t,n){super(new Uint32Array(e),t,n)}}class Tt extends dn{constructor(e,t,n){super(new Float32Array(e),t,n)}}let cb=0;const Dn=new He,cl=new Rt,$s=new A,wn=new Rn,rr=new Rn,Kt=new A;class Yt extends qa{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:cb++}),this.uuid=ai(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(Gp(e)?Xp:jp)(e,1):this.index=e,this}setIndirect(e){return this.indirect=e,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,n=0){this.groups.push({start:e,count:t,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){const t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);const n=this.attributes.normal;if(n!==void 0){const a=new je().getNormalMatrix(e);n.applyNormalMatrix(a),n.needsUpdate=!0}const s=this.attributes.tangent;return s!==void 0&&(s.transformDirection(e),s.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return Dn.makeRotationFromQuaternion(e),this.applyMatrix4(Dn),this}rotateX(e){return Dn.makeRotationX(e),this.applyMatrix4(Dn),this}rotateY(e){return Dn.makeRotationY(e),this.applyMatrix4(Dn),this}rotateZ(e){return Dn.makeRotationZ(e),this.applyMatrix4(Dn),this}translate(e,t,n){return Dn.makeTranslation(e,t,n),this.applyMatrix4(Dn),this}scale(e,t,n){return Dn.makeScale(e,t,n),this.applyMatrix4(Dn),this}lookAt(e){return cl.lookAt(e),cl.updateMatrix(),this.applyMatrix4(cl.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter($s).negate(),this.translate($s.x,$s.y,$s.z),this}setFromPoints(e){const t=this.getAttribute("position");if(t===void 0){const n=[];for(let s=0,a=e.length;s<a;s++){const r=e[s];n.push(r.x,r.y,r.z||0)}this.setAttribute("position",new Tt(n,3))}else{for(let n=0,s=t.count;n<s;n++){const a=e[n];t.setXYZ(n,a.x,a.y,a.z||0)}e.length>t.count&&console.warn("THREE.BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),t.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Rn);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new A(-1/0,-1/0,-1/0),new A(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let n=0,s=t.length;n<s;n++){const a=t[n];wn.setFromBufferAttribute(a),this.morphTargetsRelative?(Kt.addVectors(this.boundingBox.min,wn.min),this.boundingBox.expandByPoint(Kt),Kt.addVectors(this.boundingBox.max,wn.max),this.boundingBox.expandByPoint(Kt)):(this.boundingBox.expandByPoint(wn.min),this.boundingBox.expandByPoint(wn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new pi);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new A,1/0);return}if(e){const n=this.boundingSphere.center;if(wn.setFromBufferAttribute(e),t)for(let a=0,r=t.length;a<r;a++){const o=t[a];rr.setFromBufferAttribute(o),this.morphTargetsRelative?(Kt.addVectors(wn.min,rr.min),wn.expandByPoint(Kt),Kt.addVectors(wn.max,rr.max),wn.expandByPoint(Kt)):(wn.expandByPoint(rr.min),wn.expandByPoint(rr.max))}wn.getCenter(n);let s=0;for(let a=0,r=e.count;a<r;a++)Kt.fromBufferAttribute(e,a),s=Math.max(s,n.distanceToSquared(Kt));if(t)for(let a=0,r=t.length;a<r;a++){const o=t[a],c=this.morphTargetsRelative;for(let l=0,d=o.count;l<d;l++)Kt.fromBufferAttribute(o,l),c&&($s.fromBufferAttribute(e,l),Kt.add($s)),s=Math.max(s,n.distanceToSquared(Kt))}this.boundingSphere.radius=Math.sqrt(s),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const n=t.position,s=t.normal,a=t.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new dn(new Float32Array(4*n.count),4));const r=this.getAttribute("tangent"),o=[],c=[];for(let I=0;I<n.count;I++)o[I]=new A,c[I]=new A;const l=new A,d=new A,u=new A,h=new Ce,f=new Ce,g=new Ce,b=new A,m=new A;function p(I,_,M){l.fromBufferAttribute(n,I),d.fromBufferAttribute(n,_),u.fromBufferAttribute(n,M),h.fromBufferAttribute(a,I),f.fromBufferAttribute(a,_),g.fromBufferAttribute(a,M),d.sub(l),u.sub(l),f.sub(h),g.sub(h);const L=1/(f.x*g.y-g.x*f.y);isFinite(L)&&(b.copy(d).multiplyScalar(g.y).addScaledVector(u,-f.y).multiplyScalar(L),m.copy(u).multiplyScalar(f.x).addScaledVector(d,-g.x).multiplyScalar(L),o[I].add(b),o[_].add(b),o[M].add(b),c[I].add(m),c[_].add(m),c[M].add(m))}let v=this.groups;v.length===0&&(v=[{start:0,count:e.count}]);for(let I=0,_=v.length;I<_;++I){const M=v[I],L=M.start,k=M.count;for(let P=L,B=L+k;P<B;P+=3)p(e.getX(P+0),e.getX(P+1),e.getX(P+2))}const x=new A,y=new A,D=new A,T=new A;function R(I){D.fromBufferAttribute(s,I),T.copy(D);const _=o[I];x.copy(_),x.sub(D.multiplyScalar(D.dot(_))).normalize(),y.crossVectors(T,_);const L=y.dot(c[I])<0?-1:1;r.setXYZW(I,x.x,x.y,x.z,L)}for(let I=0,_=v.length;I<_;++I){const M=v[I],L=M.start,k=M.count;for(let P=L,B=L+k;P<B;P+=3)R(e.getX(P+0)),R(e.getX(P+1)),R(e.getX(P+2))}}computeVertexNormals(){const e=this.index,t=this.getAttribute("position");if(t!==void 0){let n=this.getAttribute("normal");if(n===void 0)n=new dn(new Float32Array(t.count*3),3),this.setAttribute("normal",n);else for(let h=0,f=n.count;h<f;h++)n.setXYZ(h,0,0,0);const s=new A,a=new A,r=new A,o=new A,c=new A,l=new A,d=new A,u=new A;if(e)for(let h=0,f=e.count;h<f;h+=3){const g=e.getX(h+0),b=e.getX(h+1),m=e.getX(h+2);s.fromBufferAttribute(t,g),a.fromBufferAttribute(t,b),r.fromBufferAttribute(t,m),d.subVectors(r,a),u.subVectors(s,a),d.cross(u),o.fromBufferAttribute(n,g),c.fromBufferAttribute(n,b),l.fromBufferAttribute(n,m),o.add(d),c.add(d),l.add(d),n.setXYZ(g,o.x,o.y,o.z),n.setXYZ(b,c.x,c.y,c.z),n.setXYZ(m,l.x,l.y,l.z)}else for(let h=0,f=t.count;h<f;h+=3)s.fromBufferAttribute(t,h+0),a.fromBufferAttribute(t,h+1),r.fromBufferAttribute(t,h+2),d.subVectors(r,a),u.subVectors(s,a),d.cross(u),n.setXYZ(h+0,d.x,d.y,d.z),n.setXYZ(h+1,d.x,d.y,d.z),n.setXYZ(h+2,d.x,d.y,d.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let t=0,n=e.count;t<n;t++)Kt.fromBufferAttribute(e,t),Kt.normalize(),e.setXYZ(t,Kt.x,Kt.y,Kt.z)}toNonIndexed(){function e(o,c){const l=o.array,d=o.itemSize,u=o.normalized,h=new l.constructor(c.length*d);let f=0,g=0;for(let b=0,m=c.length;b<m;b++){o.isInterleavedBufferAttribute?f=c[b]*o.data.stride+o.offset:f=c[b]*d;for(let p=0;p<d;p++)h[g++]=l[f++]}return new dn(h,d,u)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const t=new Yt,n=this.index.array,s=this.attributes;for(const o in s){const c=s[o],l=e(c,n);t.setAttribute(o,l)}const a=this.morphAttributes;for(const o in a){const c=[],l=a[o];for(let d=0,u=l.length;d<u;d++){const h=l[d],f=e(h,n);c.push(f)}t.morphAttributes[o]=c}t.morphTargetsRelative=this.morphTargetsRelative;const r=this.groups;for(let o=0,c=r.length;o<c;o++){const l=r[o];t.addGroup(l.start,l.count,l.materialIndex)}return t}toJSON(){const e={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const c=this.parameters;for(const l in c)c[l]!==void 0&&(e[l]=c[l]);return e}e.data={attributes:{}};const t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});const n=this.attributes;for(const c in n){const l=n[c];e.data.attributes[c]=l.toJSON(e.data)}const s={};let a=!1;for(const c in this.morphAttributes){const l=this.morphAttributes[c],d=[];for(let u=0,h=l.length;u<h;u++){const f=l[u];d.push(f.toJSON(e.data))}d.length>0&&(s[c]=d,a=!0)}a&&(e.data.morphAttributes=s,e.data.morphTargetsRelative=this.morphTargetsRelative);const r=this.groups;r.length>0&&(e.data.groups=JSON.parse(JSON.stringify(r)));const o=this.boundingSphere;return o!==null&&(e.data.boundingSphere={center:o.center.toArray(),radius:o.radius}),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const t={};this.name=e.name;const n=e.index;n!==null&&this.setIndex(n.clone(t));const s=e.attributes;for(const l in s){const d=s[l];this.setAttribute(l,d.clone(t))}const a=e.morphAttributes;for(const l in a){const d=[],u=a[l];for(let h=0,f=u.length;h<f;h++)d.push(u[h].clone(t));this.morphAttributes[l]=d}this.morphTargetsRelative=e.morphTargetsRelative;const r=e.groups;for(let l=0,d=r.length;l<d;l++){const u=r[l];this.addGroup(u.start,u.count,u.materialIndex)}const o=e.boundingBox;o!==null&&(this.boundingBox=o.clone());const c=e.boundingSphere;return c!==null&&(this.boundingSphere=c.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const Nh=new He,ms=new Xr,po=new pi,Fh=new A,mo=new A,go=new A,bo=new A,ll=new A,vo=new A,Uh=new A,xo=new A;class j extends Rt{constructor(e=new Yt,t=new _t){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const s=t[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let a=0,r=s.length;a<r;a++){const o=s[a].name||String(a);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=a}}}}getVertexPosition(e,t){const n=this.geometry,s=n.attributes.position,a=n.morphAttributes.position,r=n.morphTargetsRelative;t.fromBufferAttribute(s,e);const o=this.morphTargetInfluences;if(a&&o){vo.set(0,0,0);for(let c=0,l=a.length;c<l;c++){const d=o[c],u=a[c];d!==0&&(ll.fromBufferAttribute(u,e),r?vo.addScaledVector(ll,d):vo.addScaledVector(ll.sub(t),d))}t.add(vo)}return t}raycast(e,t){const n=this.geometry,s=this.material,a=this.matrixWorld;s!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),po.copy(n.boundingSphere),po.applyMatrix4(a),ms.copy(e.ray).recast(e.near),!(po.containsPoint(ms.origin)===!1&&(ms.intersectSphere(po,Fh)===null||ms.origin.distanceToSquared(Fh)>(e.far-e.near)**2))&&(Nh.copy(a).invert(),ms.copy(e.ray).applyMatrix4(Nh),!(n.boundingBox!==null&&ms.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(e,t,ms)))}_computeIntersections(e,t,n){let s;const a=this.geometry,r=this.material,o=a.index,c=a.attributes.position,l=a.attributes.uv,d=a.attributes.uv1,u=a.attributes.normal,h=a.groups,f=a.drawRange;if(o!==null)if(Array.isArray(r))for(let g=0,b=h.length;g<b;g++){const m=h[g],p=r[m.materialIndex],v=Math.max(m.start,f.start),x=Math.min(o.count,Math.min(m.start+m.count,f.start+f.count));for(let y=v,D=x;y<D;y+=3){const T=o.getX(y),R=o.getX(y+1),I=o.getX(y+2);s=_o(this,p,e,n,l,d,u,T,R,I),s&&(s.faceIndex=Math.floor(y/3),s.face.materialIndex=m.materialIndex,t.push(s))}}else{const g=Math.max(0,f.start),b=Math.min(o.count,f.start+f.count);for(let m=g,p=b;m<p;m+=3){const v=o.getX(m),x=o.getX(m+1),y=o.getX(m+2);s=_o(this,r,e,n,l,d,u,v,x,y),s&&(s.faceIndex=Math.floor(m/3),t.push(s))}}else if(c!==void 0)if(Array.isArray(r))for(let g=0,b=h.length;g<b;g++){const m=h[g],p=r[m.materialIndex],v=Math.max(m.start,f.start),x=Math.min(c.count,Math.min(m.start+m.count,f.start+f.count));for(let y=v,D=x;y<D;y+=3){const T=y,R=y+1,I=y+2;s=_o(this,p,e,n,l,d,u,T,R,I),s&&(s.faceIndex=Math.floor(y/3),s.face.materialIndex=m.materialIndex,t.push(s))}}else{const g=Math.max(0,f.start),b=Math.min(c.count,f.start+f.count);for(let m=g,p=b;m<p;m+=3){const v=m,x=m+1,y=m+2;s=_o(this,r,e,n,l,d,u,v,x,y),s&&(s.faceIndex=Math.floor(m/3),t.push(s))}}}}function lb(i,e,t,n,s,a,r,o){let c;if(e.side===Gt?c=n.intersectTriangle(r,a,s,!0,o):c=n.intersectTriangle(s,a,r,e.side===Fi,o),c===null)return null;xo.copy(o),xo.applyMatrix4(i.matrixWorld);const l=t.ray.origin.distanceTo(xo);return l<t.near||l>t.far?null:{distance:l,point:xo.clone(),object:i}}function _o(i,e,t,n,s,a,r,o,c,l){i.getVertexPosition(o,mo),i.getVertexPosition(c,go),i.getVertexPosition(l,bo);const d=lb(i,e,t,n,mo,go,bo,Uh);if(d){const u=new A;ni.getBarycoord(Uh,mo,go,bo,u),s&&(d.uv=ni.getInterpolatedAttribute(s,o,c,l,u,new Ce)),a&&(d.uv1=ni.getInterpolatedAttribute(a,o,c,l,u,new Ce)),r&&(d.normal=ni.getInterpolatedAttribute(r,o,c,l,u,new A),d.normal.dot(n.direction)>0&&d.normal.multiplyScalar(-1));const h={a:o,b:c,c:l,normal:new A,materialIndex:0};ni.getNormal(mo,go,bo,h.normal),d.face=h,d.barycoord=u}return d}class mt extends Yt{constructor(e=1,t=1,n=1,s=1,a=1,r=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:n,widthSegments:s,heightSegments:a,depthSegments:r};const o=this;s=Math.floor(s),a=Math.floor(a),r=Math.floor(r);const c=[],l=[],d=[],u=[];let h=0,f=0;g("z","y","x",-1,-1,n,t,e,r,a,0),g("z","y","x",1,-1,n,t,-e,r,a,1),g("x","z","y",1,1,e,n,t,s,r,2),g("x","z","y",1,-1,e,n,-t,s,r,3),g("x","y","z",1,-1,e,t,n,s,a,4),g("x","y","z",-1,-1,e,t,-n,s,a,5),this.setIndex(c),this.setAttribute("position",new Tt(l,3)),this.setAttribute("normal",new Tt(d,3)),this.setAttribute("uv",new Tt(u,2));function g(b,m,p,v,x,y,D,T,R,I,_){const M=y/R,L=D/I,k=y/2,P=D/2,B=T/2,H=R+1,z=I+1;let ee=0,V=0;const oe=new A;for(let le=0;le<z;le++){const _e=le*L-P;for(let ke=0;ke<H;ke++){const xe=ke*M-k;oe[b]=xe*v,oe[m]=_e*x,oe[p]=B,l.push(oe.x,oe.y,oe.z),oe[b]=0,oe[m]=0,oe[p]=T>0?1:-1,d.push(oe.x,oe.y,oe.z),u.push(ke/R),u.push(1-le/I),ee+=1}}for(let le=0;le<I;le++)for(let _e=0;_e<R;_e++){const ke=h+_e+H*le,xe=h+_e+H*(le+1),Y=h+(_e+1)+H*(le+1),te=h+(_e+1)+H*le;c.push(ke,xe,te),c.push(xe,Y,te),V+=6}o.addGroup(f,V,_),f+=V,h+=ee}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new mt(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function Da(i){const e={};for(const t in i){e[t]={};for(const n in i[t]){const s=i[t][n];s&&(s.isColor||s.isMatrix3||s.isMatrix4||s.isVector2||s.isVector3||s.isVector4||s.isTexture||s.isQuaternion)?s.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][n]=null):e[t][n]=s.clone():Array.isArray(s)?e[t][n]=s.slice():e[t][n]=s}}return e}function pn(i){const e={};for(let t=0;t<i.length;t++){const n=Da(i[t]);for(const s in n)e[s]=n[s]}return e}function db(i){const e=[];for(let t=0;t<i.length;t++)e.push(i[t].clone());return e}function Yp(i){const e=i.getRenderTarget();return e===null?i.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:et.workingColorSpace}const Kp={clone:Da,merge:pn};var ub=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,hb=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class un extends ui{static get type(){return"ShaderMaterial"}constructor(e){super(),this.isShaderMaterial=!0,this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=ub,this.fragmentShader=hb,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=Da(e.uniforms),this.uniformsGroups=db(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){const t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(const s in this.uniforms){const r=this.uniforms[s].value;r&&r.isTexture?t.uniforms[s]={type:"t",value:r.toJSON(e).uuid}:r&&r.isColor?t.uniforms[s]={type:"c",value:r.getHex()}:r&&r.isVector2?t.uniforms[s]={type:"v2",value:r.toArray()}:r&&r.isVector3?t.uniforms[s]={type:"v3",value:r.toArray()}:r&&r.isVector4?t.uniforms[s]={type:"v4",value:r.toArray()}:r&&r.isMatrix3?t.uniforms[s]={type:"m3",value:r.toArray()}:r&&r.isMatrix4?t.uniforms[s]={type:"m4",value:r.toArray()}:t.uniforms[s]={value:r}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;const n={};for(const s in this.extensions)this.extensions[s]===!0&&(n[s]=!0);return Object.keys(n).length>0&&(t.extensions=n),t}}class $p extends Rt{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new He,this.projectionMatrix=new He,this.projectionMatrixInverse=new He,this.coordinateSystem=Li}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const Xi=new A,Oh=new Ce,Bh=new Ce;class tn extends $p{constructor(e=50,t=1,n=.1,s=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=n,this.far=s,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const t=.5*this.getFilmHeight()/e;this.fov=La*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(Er*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return La*2*Math.atan(Math.tan(Er*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,n){Xi.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(Xi.x,Xi.y).multiplyScalar(-e/Xi.z),Xi.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(Xi.x,Xi.y).multiplyScalar(-e/Xi.z)}getViewSize(e,t){return this.getViewBounds(e,Oh,Bh),t.subVectors(Bh,Oh)}setViewOffset(e,t,n,s,a,r){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=s,this.view.width=a,this.view.height=r,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let t=e*Math.tan(Er*.5*this.fov)/this.zoom,n=2*t,s=this.aspect*n,a=-.5*s;const r=this.view;if(this.view!==null&&this.view.enabled){const c=r.fullWidth,l=r.fullHeight;a+=r.offsetX*s/c,t-=r.offsetY*n/l,s*=r.width/c,n*=r.height/l}const o=this.filmOffset;o!==0&&(a+=e*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(a,a+s,t,t-n,e,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}}const Js=-90,Qs=1;class fb extends Rt{constructor(e,t,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;const s=new tn(Js,Qs,e,t);s.layers=this.layers,this.add(s);const a=new tn(Js,Qs,e,t);a.layers=this.layers,this.add(a);const r=new tn(Js,Qs,e,t);r.layers=this.layers,this.add(r);const o=new tn(Js,Qs,e,t);o.layers=this.layers,this.add(o);const c=new tn(Js,Qs,e,t);c.layers=this.layers,this.add(c);const l=new tn(Js,Qs,e,t);l.layers=this.layers,this.add(l)}updateCoordinateSystem(){const e=this.coordinateSystem,t=this.children.concat(),[n,s,a,r,o,c]=t;for(const l of t)this.remove(l);if(e===Li)n.up.set(0,1,0),n.lookAt(1,0,0),s.up.set(0,1,0),s.lookAt(-1,0,0),a.up.set(0,0,-1),a.lookAt(0,1,0),r.up.set(0,0,1),r.lookAt(0,-1,0),o.up.set(0,1,0),o.lookAt(0,0,1),c.up.set(0,1,0),c.lookAt(0,0,-1);else if(e===ac)n.up.set(0,-1,0),n.lookAt(-1,0,0),s.up.set(0,-1,0),s.lookAt(1,0,0),a.up.set(0,0,1),a.lookAt(0,1,0),r.up.set(0,0,-1),r.lookAt(0,-1,0),o.up.set(0,-1,0),o.lookAt(0,0,1),c.up.set(0,-1,0),c.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const l of t)this.add(l),l.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();const{renderTarget:n,activeMipmapLevel:s}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[a,r,o,c,l,d]=this.children,u=e.getRenderTarget(),h=e.getActiveCubeFace(),f=e.getActiveMipmapLevel(),g=e.xr.enabled;e.xr.enabled=!1;const b=n.texture.generateMipmaps;n.texture.generateMipmaps=!1,e.setRenderTarget(n,0,s),e.render(t,a),e.setRenderTarget(n,1,s),e.render(t,r),e.setRenderTarget(n,2,s),e.render(t,o),e.setRenderTarget(n,3,s),e.render(t,c),e.setRenderTarget(n,4,s),e.render(t,l),n.texture.generateMipmaps=b,e.setRenderTarget(n,5,s),e.render(t,d),e.setRenderTarget(u,h,f),e.xr.enabled=g,n.texture.needsPMREMUpdate=!0}}class Jp extends Ft{constructor(e,t,n,s,a,r,o,c,l,d){e=e!==void 0?e:[],t=t!==void 0?t:Aa,super(e,t,n,s,a,r,o,c,l,d),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class pb extends os{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;const n={width:e,height:e,depth:1},s=[n,n,n,n,n,n];this.texture=new Jp(s,t.mapping,t.wrapS,t.wrapT,t.magFilter,t.minFilter,t.format,t.type,t.anisotropy,t.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=t.generateMipmaps!==void 0?t.generateMipmaps:!1,this.texture.minFilter=t.minFilter!==void 0?t.minFilter:Qt}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;const n={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},s=new mt(5,5,5),a=new un({name:"CubemapFromEquirect",uniforms:Da(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:Gt,blending:ns});a.uniforms.tEquirect.value=t;const r=new j(s,a),o=t.minFilter;return t.minFilter===Pi&&(t.minFilter=Qt),new fb(1,10,this).update(e,r),t.minFilter=o,r.geometry.dispose(),r.material.dispose(),this}clear(e,t,n,s){const a=e.getRenderTarget();for(let r=0;r<6;r++)e.setRenderTarget(this,r),e.clear(t,n,s);e.setRenderTarget(a)}}const dl=new A,mb=new A,gb=new je;class Qn{constructor(e=new A(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,n,s){return this.normal.set(e,t,n),this.constant=s,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,n){const s=dl.subVectors(n,t).cross(mb.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(s,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t){const n=e.delta(dl),s=this.normal.dot(n);if(s===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;const a=-(e.start.dot(this.normal)+this.constant)/s;return a<0||a>1?null:t.copy(e.start).addScaledVector(n,a)}intersectsLine(e){const t=this.distanceToPoint(e.start),n=this.distanceToPoint(e.end);return t<0&&n>0||n<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){const n=t||gb.getNormalMatrix(e),s=this.coplanarPoint(dl).applyMatrix4(e),a=this.normal.applyMatrix3(n).normalize();return this.constant=-s.dot(a),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const gs=new pi,yo=new A;class wc{constructor(e=new Qn,t=new Qn,n=new Qn,s=new Qn,a=new Qn,r=new Qn){this.planes=[e,t,n,s,a,r]}set(e,t,n,s,a,r){const o=this.planes;return o[0].copy(e),o[1].copy(t),o[2].copy(n),o[3].copy(s),o[4].copy(a),o[5].copy(r),this}copy(e){const t=this.planes;for(let n=0;n<6;n++)t[n].copy(e.planes[n]);return this}setFromProjectionMatrix(e,t=Li){const n=this.planes,s=e.elements,a=s[0],r=s[1],o=s[2],c=s[3],l=s[4],d=s[5],u=s[6],h=s[7],f=s[8],g=s[9],b=s[10],m=s[11],p=s[12],v=s[13],x=s[14],y=s[15];if(n[0].setComponents(c-a,h-l,m-f,y-p).normalize(),n[1].setComponents(c+a,h+l,m+f,y+p).normalize(),n[2].setComponents(c+r,h+d,m+g,y+v).normalize(),n[3].setComponents(c-r,h-d,m-g,y-v).normalize(),n[4].setComponents(c-o,h-u,m-b,y-x).normalize(),t===Li)n[5].setComponents(c+o,h+u,m+b,y+x).normalize();else if(t===ac)n[5].setComponents(o,u,b,x).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),gs.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),gs.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(gs)}intersectsSprite(e){return gs.center.set(0,0,0),gs.radius=.7071067811865476,gs.applyMatrix4(e.matrixWorld),this.intersectsSphere(gs)}intersectsSphere(e){const t=this.planes,n=e.center,s=-e.radius;for(let a=0;a<6;a++)if(t[a].distanceToPoint(n)<s)return!1;return!0}intersectsBox(e){const t=this.planes;for(let n=0;n<6;n++){const s=t[n];if(yo.x=s.normal.x>0?e.max.x:e.min.x,yo.y=s.normal.y>0?e.max.y:e.min.y,yo.z=s.normal.z>0?e.max.z:e.min.z,s.distanceToPoint(yo)<0)return!1}return!0}containsPoint(e){const t=this.planes;for(let n=0;n<6;n++)if(t[n].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}function Qp(){let i=null,e=!1,t=null,n=null;function s(a,r){t(a,r),n=i.requestAnimationFrame(s)}return{start:function(){e!==!0&&t!==null&&(n=i.requestAnimationFrame(s),e=!0)},stop:function(){i.cancelAnimationFrame(n),e=!1},setAnimationLoop:function(a){t=a},setContext:function(a){i=a}}}function bb(i){const e=new WeakMap;function t(o,c){const l=o.array,d=o.usage,u=l.byteLength,h=i.createBuffer();i.bindBuffer(c,h),i.bufferData(c,l,d),o.onUploadCallback();let f;if(l instanceof Float32Array)f=i.FLOAT;else if(l instanceof Uint16Array)o.isFloat16BufferAttribute?f=i.HALF_FLOAT:f=i.UNSIGNED_SHORT;else if(l instanceof Int16Array)f=i.SHORT;else if(l instanceof Uint32Array)f=i.UNSIGNED_INT;else if(l instanceof Int32Array)f=i.INT;else if(l instanceof Int8Array)f=i.BYTE;else if(l instanceof Uint8Array)f=i.UNSIGNED_BYTE;else if(l instanceof Uint8ClampedArray)f=i.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+l);return{buffer:h,type:f,bytesPerElement:l.BYTES_PER_ELEMENT,version:o.version,size:u}}function n(o,c,l){const d=c.array,u=c.updateRanges;if(i.bindBuffer(l,o),u.length===0)i.bufferSubData(l,0,d);else{u.sort((f,g)=>f.start-g.start);let h=0;for(let f=1;f<u.length;f++){const g=u[h],b=u[f];b.start<=g.start+g.count+1?g.count=Math.max(g.count,b.start+b.count-g.start):(++h,u[h]=b)}u.length=h+1;for(let f=0,g=u.length;f<g;f++){const b=u[f];i.bufferSubData(l,b.start*d.BYTES_PER_ELEMENT,d,b.start,b.count)}c.clearUpdateRanges()}c.onUploadCallback()}function s(o){return o.isInterleavedBufferAttribute&&(o=o.data),e.get(o)}function a(o){o.isInterleavedBufferAttribute&&(o=o.data);const c=e.get(o);c&&(i.deleteBuffer(c.buffer),e.delete(o))}function r(o,c){if(o.isInterleavedBufferAttribute&&(o=o.data),o.isGLBufferAttribute){const d=e.get(o);(!d||d.version<o.version)&&e.set(o,{buffer:o.buffer,type:o.type,bytesPerElement:o.elementSize,version:o.version});return}const l=e.get(o);if(l===void 0)e.set(o,t(o,c));else if(l.version<o.version){if(l.size!==o.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(l.buffer,o,c),l.version=o.version}}return{get:s,remove:a,update:r}}class qt extends Yt{constructor(e=1,t=1,n=1,s=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:n,heightSegments:s};const a=e/2,r=t/2,o=Math.floor(n),c=Math.floor(s),l=o+1,d=c+1,u=e/o,h=t/c,f=[],g=[],b=[],m=[];for(let p=0;p<d;p++){const v=p*h-r;for(let x=0;x<l;x++){const y=x*u-a;g.push(y,-v,0),b.push(0,0,1),m.push(x/o),m.push(1-p/c)}}for(let p=0;p<c;p++)for(let v=0;v<o;v++){const x=v+l*p,y=v+l*(p+1),D=v+1+l*(p+1),T=v+1+l*p;f.push(x,y,T),f.push(y,D,T)}this.setIndex(f),this.setAttribute("position",new Tt(g,3)),this.setAttribute("normal",new Tt(b,3)),this.setAttribute("uv",new Tt(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new qt(e.width,e.height,e.widthSegments,e.heightSegments)}}var vb=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,xb=`#ifdef USE_ALPHAHASH
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
#endif`,_b=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,yb=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Mb=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,Sb=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,wb=`#ifdef USE_AOMAP
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
#endif`,Eb=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,Tb=`#ifdef USE_BATCHING
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
	vec3 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 ).rgb;
	}
#endif`,Ab=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,Rb=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,Cb=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,Pb=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,Lb=`#ifdef USE_IRIDESCENCE
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
#endif`,Db=`#ifdef USE_BUMPMAP
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
#endif`,Ib=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,kb=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,Nb=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,Fb=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,Ub=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,Ob=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,Bb=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,zb=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif
#ifdef USE_BATCHING_COLOR
	vec3 batchingColor = getBatchingColor( getIndirectIndex( gl_DrawID ) );
	vColor.xyz *= batchingColor.xyz;
#endif`,Hb=`#define PI 3.141592653589793
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
mat3 transposeMat3( const in mat3 m ) {
	mat3 tmp;
	tmp[ 0 ] = vec3( m[ 0 ].x, m[ 1 ].x, m[ 2 ].x );
	tmp[ 1 ] = vec3( m[ 0 ].y, m[ 1 ].y, m[ 2 ].y );
	tmp[ 2 ] = vec3( m[ 0 ].z, m[ 1 ].z, m[ 2 ].z );
	return tmp;
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
} // validated`,Gb=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,Vb=`vec3 transformedNormal = objectNormal;
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
#endif`,Wb=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,qb=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,jb=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,Xb=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,Yb="gl_FragColor = linearToOutputTexel( gl_FragColor );",Kb=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,$b=`#ifdef USE_ENVMAP
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
		vec4 envColor = textureCube( envMap, envMapRotation * vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
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
#endif`,Jb=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,Qb=`#ifdef USE_ENVMAP
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
#endif`,Zb=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,ev=`#ifdef USE_ENVMAP
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
#endif`,tv=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,nv=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,iv=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,sv=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,av=`#ifdef USE_GRADIENTMAP
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
}`,rv=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,ov=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,cv=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,lv=`uniform bool receiveShadow;
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
#endif`,dv=`#ifdef USE_ENVMAP
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
			reflectVec = normalize( mix( reflectVec, normal, roughness * roughness) );
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
#endif`,uv=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,hv=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,fv=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,pv=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,mv=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb * ( 1.0 - metalnessFactor );
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
	material.specularColor = mix( min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor, diffuseColor.rgb, metalnessFactor );
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
	material.sheenRoughness = clamp( sheenRoughness, 0.07, 1.0 );
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
#endif`,gv=`struct PhysicalMaterial {
	vec3 diffuseColor;
	float roughness;
	vec3 specularColor;
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
		float v = 0.5 / ( gv + gl );
		return saturate(v);
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
	vec3 f0 = material.specularColor;
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
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	vec2 fab = DFGApprox( normal, viewDir, roughness );
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
		vec3 fresnel = ( material.specularColor * t2.x + ( vec3( 1.0 ) - material.specularColor ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseColor * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
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
	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX( directLight.direction, geometryViewDir, geometryNormal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
	#endif
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness, singleScattering, multiScattering );
	#else
		computeMultiscattering( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.roughness, singleScattering, multiScattering );
	#endif
	vec3 totalScattering = singleScattering + multiScattering;
	vec3 diffuse = material.diffuseColor * ( 1.0 - max( max( totalScattering.r, totalScattering.g ), totalScattering.b ) );
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
}`,bv=`
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
		material.iridescenceFresnel = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
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
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS )
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
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,vv=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )
		iblIrradiance += getIBLIrradiance( geometryNormal );
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
#endif`,xv=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,_v=`#if defined( USE_LOGDEPTHBUF )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,yv=`#if defined( USE_LOGDEPTHBUF )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Mv=`#ifdef USE_LOGDEPTHBUF
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Sv=`#ifdef USE_LOGDEPTHBUF
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,wv=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,Ev=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,Tv=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,Av=`#if defined( USE_POINTS_UV )
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
#endif`,Rv=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,Cv=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,Pv=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,Lv=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,Dv=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Iv=`#ifdef USE_MORPHTARGETS
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
#endif`,kv=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Nv=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,Fv=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,Uv=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Ov=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Bv=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,zv=`#ifdef USE_NORMALMAP
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
#endif`,Hv=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,Gv=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,Vv=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,Wv=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,qv=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,jv=`vec3 packNormalToRGB( const in vec3 normal ) {
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
	return depth * ( near - far ) - near;
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return ( near * far ) / ( ( far - near ) * depth - far );
}`,Xv=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,Yv=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,Kv=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,$v=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,Jv=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,Qv=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,Zv=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
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
		uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
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
		uniform sampler2D pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
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
	float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
		float shadow = 1.0;
		shadowCoord.xyz /= shadowCoord.w;
		shadowCoord.z += shadowBias;
		bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
		bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
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
		return mix( 1.0, shadow, shadowIntensity );
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
	float getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		
		float lightToPositionLength = length( lightToPosition );
		if ( lightToPositionLength - shadowCameraFar <= 0.0 && lightToPositionLength - shadowCameraNear >= 0.0 ) {
			float dp = ( lightToPositionLength - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			vec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );
			#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )
				vec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;
				shadow = (
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
				shadow = texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );
			#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
#endif`,ex=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,tx=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
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
#endif`,nx=`float getShadowMask() {
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
	#if NUM_POINT_LIGHT_SHADOWS > 0
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
}`,ix=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,sx=`#ifdef USE_SKINNING
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
#endif`,ax=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,rx=`#ifdef USE_SKINNING
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
#endif`,ox=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,cx=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,lx=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,dx=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,ux=`#ifdef USE_TRANSMISSION
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
		n, v, material.roughness, material.diffuseColor, material.specularColor, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,hx=`#ifdef USE_TRANSMISSION
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
#endif`,fx=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,px=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,mx=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,gx=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const bx=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,vx=`uniform sampler2D t2D;
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
}`,xx=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,_x=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float flipEnvMap;
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, backgroundRotation * vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,yx=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Mx=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Sx=`#include <common>
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
}`,wx=`#if DEPTH_PACKING == 3200
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
	float fragCoordZ = 0.5 * vHighPrecisionZW[0] / vHighPrecisionZW[1] + 0.5;
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,Ex=`#define DISTANCE
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
}`,Tx=`#define DISTANCE
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
	gl_FragColor = packDepthToRGBA( dist );
}`,Ax=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,Rx=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Cx=`uniform float scale;
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
}`,Px=`uniform vec3 diffuse;
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
}`,Lx=`#include <common>
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
}`,Dx=`uniform vec3 diffuse;
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
}`,Ix=`#define LAMBERT
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
}`,kx=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
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
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
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
}`,Nx=`#define MATCAP
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
}`,Fx=`#define MATCAP
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
}`,Ux=`#define NORMAL
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
}`,Ox=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
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
	vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( packNormalToRGB( normal ), diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,Bx=`#define PHONG
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
}`,zx=`#define PHONG
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
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
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
}`,Hx=`#define STANDARD
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
}`,Gx=`#define STANDARD
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
#include <packing>
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
		float sheenEnergyComp = 1.0 - 0.157 * max3( material.sheenColor );
		outgoingLight = outgoingLight * sheenEnergyComp + sheenSpecularDirect + sheenSpecularIndirect;
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
}`,Vx=`#define TOON
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
}`,Wx=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
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
}`,qx=`uniform float size;
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
}`,jx=`uniform vec3 diffuse;
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
}`,Xx=`#include <common>
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
}`,Yx=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <packing>
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
}`,Kx=`uniform float rotation;
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
}`,$x=`uniform vec3 diffuse;
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
}`,Ke={alphahash_fragment:vb,alphahash_pars_fragment:xb,alphamap_fragment:_b,alphamap_pars_fragment:yb,alphatest_fragment:Mb,alphatest_pars_fragment:Sb,aomap_fragment:wb,aomap_pars_fragment:Eb,batching_pars_vertex:Tb,batching_vertex:Ab,begin_vertex:Rb,beginnormal_vertex:Cb,bsdfs:Pb,iridescence_fragment:Lb,bumpmap_pars_fragment:Db,clipping_planes_fragment:Ib,clipping_planes_pars_fragment:kb,clipping_planes_pars_vertex:Nb,clipping_planes_vertex:Fb,color_fragment:Ub,color_pars_fragment:Ob,color_pars_vertex:Bb,color_vertex:zb,common:Hb,cube_uv_reflection_fragment:Gb,defaultnormal_vertex:Vb,displacementmap_pars_vertex:Wb,displacementmap_vertex:qb,emissivemap_fragment:jb,emissivemap_pars_fragment:Xb,colorspace_fragment:Yb,colorspace_pars_fragment:Kb,envmap_fragment:$b,envmap_common_pars_fragment:Jb,envmap_pars_fragment:Qb,envmap_pars_vertex:Zb,envmap_physical_pars_fragment:dv,envmap_vertex:ev,fog_vertex:tv,fog_pars_vertex:nv,fog_fragment:iv,fog_pars_fragment:sv,gradientmap_pars_fragment:av,lightmap_pars_fragment:rv,lights_lambert_fragment:ov,lights_lambert_pars_fragment:cv,lights_pars_begin:lv,lights_toon_fragment:uv,lights_toon_pars_fragment:hv,lights_phong_fragment:fv,lights_phong_pars_fragment:pv,lights_physical_fragment:mv,lights_physical_pars_fragment:gv,lights_fragment_begin:bv,lights_fragment_maps:vv,lights_fragment_end:xv,logdepthbuf_fragment:_v,logdepthbuf_pars_fragment:yv,logdepthbuf_pars_vertex:Mv,logdepthbuf_vertex:Sv,map_fragment:wv,map_pars_fragment:Ev,map_particle_fragment:Tv,map_particle_pars_fragment:Av,metalnessmap_fragment:Rv,metalnessmap_pars_fragment:Cv,morphinstance_vertex:Pv,morphcolor_vertex:Lv,morphnormal_vertex:Dv,morphtarget_pars_vertex:Iv,morphtarget_vertex:kv,normal_fragment_begin:Nv,normal_fragment_maps:Fv,normal_pars_fragment:Uv,normal_pars_vertex:Ov,normal_vertex:Bv,normalmap_pars_fragment:zv,clearcoat_normal_fragment_begin:Hv,clearcoat_normal_fragment_maps:Gv,clearcoat_pars_fragment:Vv,iridescence_pars_fragment:Wv,opaque_fragment:qv,packing:jv,premultiplied_alpha_fragment:Xv,project_vertex:Yv,dithering_fragment:Kv,dithering_pars_fragment:$v,roughnessmap_fragment:Jv,roughnessmap_pars_fragment:Qv,shadowmap_pars_fragment:Zv,shadowmap_pars_vertex:ex,shadowmap_vertex:tx,shadowmask_pars_fragment:nx,skinbase_vertex:ix,skinning_pars_vertex:sx,skinning_vertex:ax,skinnormal_vertex:rx,specularmap_fragment:ox,specularmap_pars_fragment:cx,tonemapping_fragment:lx,tonemapping_pars_fragment:dx,transmission_fragment:ux,transmission_pars_fragment:hx,uv_pars_fragment:fx,uv_pars_vertex:px,uv_vertex:mx,worldpos_vertex:gx,background_vert:bx,background_frag:vx,backgroundCube_vert:xx,backgroundCube_frag:_x,cube_vert:yx,cube_frag:Mx,depth_vert:Sx,depth_frag:wx,distanceRGBA_vert:Ex,distanceRGBA_frag:Tx,equirect_vert:Ax,equirect_frag:Rx,linedashed_vert:Cx,linedashed_frag:Px,meshbasic_vert:Lx,meshbasic_frag:Dx,meshlambert_vert:Ix,meshlambert_frag:kx,meshmatcap_vert:Nx,meshmatcap_frag:Fx,meshnormal_vert:Ux,meshnormal_frag:Ox,meshphong_vert:Bx,meshphong_frag:zx,meshphysical_vert:Hx,meshphysical_frag:Gx,meshtoon_vert:Vx,meshtoon_frag:Wx,points_vert:qx,points_frag:jx,shadow_vert:Xx,shadow_frag:Yx,sprite_vert:Kx,sprite_frag:$x},de={common:{diffuse:{value:new De(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new je},alphaMap:{value:null},alphaMapTransform:{value:new je},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new je}},envmap:{envMap:{value:null},envMapRotation:{value:new je},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new je}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new je}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new je},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new je},normalScale:{value:new Ce(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new je},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new je}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new je}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new je}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new De(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new De(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new je},alphaTest:{value:0},uvTransform:{value:new je}},sprite:{diffuse:{value:new De(16777215)},opacity:{value:1},center:{value:new Ce(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new je},alphaMap:{value:null},alphaMapTransform:{value:new je},alphaTest:{value:0}}},oi={basic:{uniforms:pn([de.common,de.specularmap,de.envmap,de.aomap,de.lightmap,de.fog]),vertexShader:Ke.meshbasic_vert,fragmentShader:Ke.meshbasic_frag},lambert:{uniforms:pn([de.common,de.specularmap,de.envmap,de.aomap,de.lightmap,de.emissivemap,de.bumpmap,de.normalmap,de.displacementmap,de.fog,de.lights,{emissive:{value:new De(0)}}]),vertexShader:Ke.meshlambert_vert,fragmentShader:Ke.meshlambert_frag},phong:{uniforms:pn([de.common,de.specularmap,de.envmap,de.aomap,de.lightmap,de.emissivemap,de.bumpmap,de.normalmap,de.displacementmap,de.fog,de.lights,{emissive:{value:new De(0)},specular:{value:new De(1118481)},shininess:{value:30}}]),vertexShader:Ke.meshphong_vert,fragmentShader:Ke.meshphong_frag},standard:{uniforms:pn([de.common,de.envmap,de.aomap,de.lightmap,de.emissivemap,de.bumpmap,de.normalmap,de.displacementmap,de.roughnessmap,de.metalnessmap,de.fog,de.lights,{emissive:{value:new De(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Ke.meshphysical_vert,fragmentShader:Ke.meshphysical_frag},toon:{uniforms:pn([de.common,de.aomap,de.lightmap,de.emissivemap,de.bumpmap,de.normalmap,de.displacementmap,de.gradientmap,de.fog,de.lights,{emissive:{value:new De(0)}}]),vertexShader:Ke.meshtoon_vert,fragmentShader:Ke.meshtoon_frag},matcap:{uniforms:pn([de.common,de.bumpmap,de.normalmap,de.displacementmap,de.fog,{matcap:{value:null}}]),vertexShader:Ke.meshmatcap_vert,fragmentShader:Ke.meshmatcap_frag},points:{uniforms:pn([de.points,de.fog]),vertexShader:Ke.points_vert,fragmentShader:Ke.points_frag},dashed:{uniforms:pn([de.common,de.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Ke.linedashed_vert,fragmentShader:Ke.linedashed_frag},depth:{uniforms:pn([de.common,de.displacementmap]),vertexShader:Ke.depth_vert,fragmentShader:Ke.depth_frag},normal:{uniforms:pn([de.common,de.bumpmap,de.normalmap,de.displacementmap,{opacity:{value:1}}]),vertexShader:Ke.meshnormal_vert,fragmentShader:Ke.meshnormal_frag},sprite:{uniforms:pn([de.sprite,de.fog]),vertexShader:Ke.sprite_vert,fragmentShader:Ke.sprite_frag},background:{uniforms:{uvTransform:{value:new je},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Ke.background_vert,fragmentShader:Ke.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new je}},vertexShader:Ke.backgroundCube_vert,fragmentShader:Ke.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Ke.cube_vert,fragmentShader:Ke.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Ke.equirect_vert,fragmentShader:Ke.equirect_frag},distanceRGBA:{uniforms:pn([de.common,de.displacementmap,{referencePosition:{value:new A},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Ke.distanceRGBA_vert,fragmentShader:Ke.distanceRGBA_frag},shadow:{uniforms:pn([de.lights,de.fog,{color:{value:new De(0)},opacity:{value:1}}]),vertexShader:Ke.shadow_vert,fragmentShader:Ke.shadow_frag}};oi.physical={uniforms:pn([oi.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new je},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new je},clearcoatNormalScale:{value:new Ce(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new je},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new je},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new je},sheen:{value:0},sheenColor:{value:new De(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new je},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new je},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new je},transmissionSamplerSize:{value:new Ce},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new je},attenuationDistance:{value:0},attenuationColor:{value:new De(0)},specularColor:{value:new De(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new je},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new je},anisotropyVector:{value:new Ce},anisotropyMap:{value:null},anisotropyMapTransform:{value:new je}}]),vertexShader:Ke.meshphysical_vert,fragmentShader:Ke.meshphysical_frag};const Mo={r:0,b:0,g:0},bs=new An,Jx=new He;function Qx(i,e,t,n,s,a,r){const o=new De(0);let c=a===!0?0:1,l,d,u=null,h=0,f=null;function g(v){let x=v.isScene===!0?v.background:null;return x&&x.isTexture&&(x=(v.backgroundBlurriness>0?t:e).get(x)),x}function b(v){let x=!1;const y=g(v);y===null?p(o,c):y&&y.isColor&&(p(y,1),x=!0);const D=i.xr.getEnvironmentBlendMode();D==="additive"?n.buffers.color.setClear(0,0,0,1,r):D==="alpha-blend"&&n.buffers.color.setClear(0,0,0,0,r),(i.autoClear||x)&&(n.buffers.depth.setTest(!0),n.buffers.depth.setMask(!0),n.buffers.color.setMask(!0),i.clear(i.autoClearColor,i.autoClearDepth,i.autoClearStencil))}function m(v,x){const y=g(x);y&&(y.isCubeTexture||y.mapping===Mc)?(d===void 0&&(d=new j(new mt(1,1,1),new un({name:"BackgroundCubeMaterial",uniforms:Da(oi.backgroundCube.uniforms),vertexShader:oi.backgroundCube.vertexShader,fragmentShader:oi.backgroundCube.fragmentShader,side:Gt,depthTest:!1,depthWrite:!1,fog:!1})),d.geometry.deleteAttribute("normal"),d.geometry.deleteAttribute("uv"),d.onBeforeRender=function(D,T,R){this.matrixWorld.copyPosition(R.matrixWorld)},Object.defineProperty(d.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),s.update(d)),bs.copy(x.backgroundRotation),bs.x*=-1,bs.y*=-1,bs.z*=-1,y.isCubeTexture&&y.isRenderTargetTexture===!1&&(bs.y*=-1,bs.z*=-1),d.material.uniforms.envMap.value=y,d.material.uniforms.flipEnvMap.value=y.isCubeTexture&&y.isRenderTargetTexture===!1?-1:1,d.material.uniforms.backgroundBlurriness.value=x.backgroundBlurriness,d.material.uniforms.backgroundIntensity.value=x.backgroundIntensity,d.material.uniforms.backgroundRotation.value.setFromMatrix4(Jx.makeRotationFromEuler(bs)),d.material.toneMapped=et.getTransfer(y.colorSpace)!==pt,(u!==y||h!==y.version||f!==i.toneMapping)&&(d.material.needsUpdate=!0,u=y,h=y.version,f=i.toneMapping),d.layers.enableAll(),v.unshift(d,d.geometry,d.material,0,0,null)):y&&y.isTexture&&(l===void 0&&(l=new j(new qt(2,2),new un({name:"BackgroundMaterial",uniforms:Da(oi.background.uniforms),vertexShader:oi.background.vertexShader,fragmentShader:oi.background.fragmentShader,side:Fi,depthTest:!1,depthWrite:!1,fog:!1})),l.geometry.deleteAttribute("normal"),Object.defineProperty(l.material,"map",{get:function(){return this.uniforms.t2D.value}}),s.update(l)),l.material.uniforms.t2D.value=y,l.material.uniforms.backgroundIntensity.value=x.backgroundIntensity,l.material.toneMapped=et.getTransfer(y.colorSpace)!==pt,y.matrixAutoUpdate===!0&&y.updateMatrix(),l.material.uniforms.uvTransform.value.copy(y.matrix),(u!==y||h!==y.version||f!==i.toneMapping)&&(l.material.needsUpdate=!0,u=y,h=y.version,f=i.toneMapping),l.layers.enableAll(),v.unshift(l,l.geometry,l.material,0,0,null))}function p(v,x){v.getRGB(Mo,Yp(i)),n.buffers.color.setClear(Mo.r,Mo.g,Mo.b,x,r)}return{getClearColor:function(){return o},setClearColor:function(v,x=1){o.set(v),c=x,p(o,c)},getClearAlpha:function(){return c},setClearAlpha:function(v){c=v,p(o,c)},render:b,addToRenderList:m}}function Zx(i,e){const t=i.getParameter(i.MAX_VERTEX_ATTRIBS),n={},s=h(null);let a=s,r=!1;function o(M,L,k,P,B){let H=!1;const z=u(P,k,L);a!==z&&(a=z,l(a.object)),H=f(M,P,k,B),H&&g(M,P,k,B),B!==null&&e.update(B,i.ELEMENT_ARRAY_BUFFER),(H||r)&&(r=!1,y(M,L,k,P),B!==null&&i.bindBuffer(i.ELEMENT_ARRAY_BUFFER,e.get(B).buffer))}function c(){return i.createVertexArray()}function l(M){return i.bindVertexArray(M)}function d(M){return i.deleteVertexArray(M)}function u(M,L,k){const P=k.wireframe===!0;let B=n[M.id];B===void 0&&(B={},n[M.id]=B);let H=B[L.id];H===void 0&&(H={},B[L.id]=H);let z=H[P];return z===void 0&&(z=h(c()),H[P]=z),z}function h(M){const L=[],k=[],P=[];for(let B=0;B<t;B++)L[B]=0,k[B]=0,P[B]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:L,enabledAttributes:k,attributeDivisors:P,object:M,attributes:{},index:null}}function f(M,L,k,P){const B=a.attributes,H=L.attributes;let z=0;const ee=k.getAttributes();for(const V in ee)if(ee[V].location>=0){const le=B[V];let _e=H[V];if(_e===void 0&&(V==="instanceMatrix"&&M.instanceMatrix&&(_e=M.instanceMatrix),V==="instanceColor"&&M.instanceColor&&(_e=M.instanceColor)),le===void 0||le.attribute!==_e||_e&&le.data!==_e.data)return!0;z++}return a.attributesNum!==z||a.index!==P}function g(M,L,k,P){const B={},H=L.attributes;let z=0;const ee=k.getAttributes();for(const V in ee)if(ee[V].location>=0){let le=H[V];le===void 0&&(V==="instanceMatrix"&&M.instanceMatrix&&(le=M.instanceMatrix),V==="instanceColor"&&M.instanceColor&&(le=M.instanceColor));const _e={};_e.attribute=le,le&&le.data&&(_e.data=le.data),B[V]=_e,z++}a.attributes=B,a.attributesNum=z,a.index=P}function b(){const M=a.newAttributes;for(let L=0,k=M.length;L<k;L++)M[L]=0}function m(M){p(M,0)}function p(M,L){const k=a.newAttributes,P=a.enabledAttributes,B=a.attributeDivisors;k[M]=1,P[M]===0&&(i.enableVertexAttribArray(M),P[M]=1),B[M]!==L&&(i.vertexAttribDivisor(M,L),B[M]=L)}function v(){const M=a.newAttributes,L=a.enabledAttributes;for(let k=0,P=L.length;k<P;k++)L[k]!==M[k]&&(i.disableVertexAttribArray(k),L[k]=0)}function x(M,L,k,P,B,H,z){z===!0?i.vertexAttribIPointer(M,L,k,B,H):i.vertexAttribPointer(M,L,k,P,B,H)}function y(M,L,k,P){b();const B=P.attributes,H=k.getAttributes(),z=L.defaultAttributeValues;for(const ee in H){const V=H[ee];if(V.location>=0){let oe=B[ee];if(oe===void 0&&(ee==="instanceMatrix"&&M.instanceMatrix&&(oe=M.instanceMatrix),ee==="instanceColor"&&M.instanceColor&&(oe=M.instanceColor)),oe!==void 0){const le=oe.normalized,_e=oe.itemSize,ke=e.get(oe);if(ke===void 0)continue;const xe=ke.buffer,Y=ke.type,te=ke.bytesPerElement,ue=Y===i.INT||Y===i.UNSIGNED_INT||oe.gpuType===lu;if(oe.isInterleavedBufferAttribute){const ce=oe.data,Ie=ce.stride,Ve=oe.offset;if(ce.isInstancedInterleavedBuffer){for(let $e=0;$e<V.locationSize;$e++)p(V.location+$e,ce.meshPerAttribute);M.isInstancedMesh!==!0&&P._maxInstanceCount===void 0&&(P._maxInstanceCount=ce.meshPerAttribute*ce.count)}else for(let $e=0;$e<V.locationSize;$e++)m(V.location+$e);i.bindBuffer(i.ARRAY_BUFFER,xe);for(let $e=0;$e<V.locationSize;$e++)x(V.location+$e,_e/V.locationSize,Y,le,Ie*te,(Ve+_e/V.locationSize*$e)*te,ue)}else{if(oe.isInstancedBufferAttribute){for(let ce=0;ce<V.locationSize;ce++)p(V.location+ce,oe.meshPerAttribute);M.isInstancedMesh!==!0&&P._maxInstanceCount===void 0&&(P._maxInstanceCount=oe.meshPerAttribute*oe.count)}else for(let ce=0;ce<V.locationSize;ce++)m(V.location+ce);i.bindBuffer(i.ARRAY_BUFFER,xe);for(let ce=0;ce<V.locationSize;ce++)x(V.location+ce,_e/V.locationSize,Y,le,_e*te,_e/V.locationSize*ce*te,ue)}}else if(z!==void 0){const le=z[ee];if(le!==void 0)switch(le.length){case 2:i.vertexAttrib2fv(V.location,le);break;case 3:i.vertexAttrib3fv(V.location,le);break;case 4:i.vertexAttrib4fv(V.location,le);break;default:i.vertexAttrib1fv(V.location,le)}}}}v()}function D(){I();for(const M in n){const L=n[M];for(const k in L){const P=L[k];for(const B in P)d(P[B].object),delete P[B];delete L[k]}delete n[M]}}function T(M){if(n[M.id]===void 0)return;const L=n[M.id];for(const k in L){const P=L[k];for(const B in P)d(P[B].object),delete P[B];delete L[k]}delete n[M.id]}function R(M){for(const L in n){const k=n[L];if(k[M.id]===void 0)continue;const P=k[M.id];for(const B in P)d(P[B].object),delete P[B];delete k[M.id]}}function I(){_(),r=!0,a!==s&&(a=s,l(a.object))}function _(){s.geometry=null,s.program=null,s.wireframe=!1}return{setup:o,reset:I,resetDefaultState:_,dispose:D,releaseStatesOfGeometry:T,releaseStatesOfProgram:R,initAttributes:b,enableAttribute:m,disableUnusedAttributes:v}}function e_(i,e,t){let n;function s(l){n=l}function a(l,d){i.drawArrays(n,l,d),t.update(d,n,1)}function r(l,d,u){u!==0&&(i.drawArraysInstanced(n,l,d,u),t.update(d,n,u))}function o(l,d,u){if(u===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n,l,0,d,0,u);let f=0;for(let g=0;g<u;g++)f+=d[g];t.update(f,n,1)}function c(l,d,u,h){if(u===0)return;const f=e.get("WEBGL_multi_draw");if(f===null)for(let g=0;g<l.length;g++)r(l[g],d[g],h[g]);else{f.multiDrawArraysInstancedWEBGL(n,l,0,d,0,h,0,u);let g=0;for(let b=0;b<u;b++)g+=d[b]*h[b];t.update(g,n,1)}}this.setMode=s,this.render=a,this.renderInstances=r,this.renderMultiDraw=o,this.renderMultiDrawInstances=c}function t_(i,e,t,n){let s;function a(){if(s!==void 0)return s;if(e.has("EXT_texture_filter_anisotropic")===!0){const R=e.get("EXT_texture_filter_anisotropic");s=i.getParameter(R.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else s=0;return s}function r(R){return!(R!==zn&&n.convert(R)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_FORMAT))}function o(R){const I=R===jr&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(R!==Ui&&n.convert(R)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_TYPE)&&R!==ii&&!I)}function c(R){if(R==="highp"){if(i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.HIGH_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.HIGH_FLOAT).precision>0)return"highp";R="mediump"}return R==="mediump"&&i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.MEDIUM_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let l=t.precision!==void 0?t.precision:"highp";const d=c(l);d!==l&&(console.warn("THREE.WebGLRenderer:",l,"not supported, using",d,"instead."),l=d);const u=t.logarithmicDepthBuffer===!0,h=t.reverseDepthBuffer===!0&&e.has("EXT_clip_control"),f=i.getParameter(i.MAX_TEXTURE_IMAGE_UNITS),g=i.getParameter(i.MAX_VERTEX_TEXTURE_IMAGE_UNITS),b=i.getParameter(i.MAX_TEXTURE_SIZE),m=i.getParameter(i.MAX_CUBE_MAP_TEXTURE_SIZE),p=i.getParameter(i.MAX_VERTEX_ATTRIBS),v=i.getParameter(i.MAX_VERTEX_UNIFORM_VECTORS),x=i.getParameter(i.MAX_VARYING_VECTORS),y=i.getParameter(i.MAX_FRAGMENT_UNIFORM_VECTORS),D=g>0,T=i.getParameter(i.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:a,getMaxPrecision:c,textureFormatReadable:r,textureTypeReadable:o,precision:l,logarithmicDepthBuffer:u,reverseDepthBuffer:h,maxTextures:f,maxVertexTextures:g,maxTextureSize:b,maxCubemapSize:m,maxAttributes:p,maxVertexUniforms:v,maxVaryings:x,maxFragmentUniforms:y,vertexTextures:D,maxSamples:T}}function n_(i){const e=this;let t=null,n=0,s=!1,a=!1;const r=new Qn,o=new je,c={value:null,needsUpdate:!1};this.uniform=c,this.numPlanes=0,this.numIntersection=0,this.init=function(u,h){const f=u.length!==0||h||n!==0||s;return s=h,n=u.length,f},this.beginShadows=function(){a=!0,d(null)},this.endShadows=function(){a=!1},this.setGlobalState=function(u,h){t=d(u,h,0)},this.setState=function(u,h,f){const g=u.clippingPlanes,b=u.clipIntersection,m=u.clipShadows,p=i.get(u);if(!s||g===null||g.length===0||a&&!m)a?d(null):l();else{const v=a?0:n,x=v*4;let y=p.clippingState||null;c.value=y,y=d(g,h,x,f);for(let D=0;D!==x;++D)y[D]=t[D];p.clippingState=y,this.numIntersection=b?this.numPlanes:0,this.numPlanes+=v}};function l(){c.value!==t&&(c.value=t,c.needsUpdate=n>0),e.numPlanes=n,e.numIntersection=0}function d(u,h,f,g){const b=u!==null?u.length:0;let m=null;if(b!==0){if(m=c.value,g!==!0||m===null){const p=f+b*4,v=h.matrixWorldInverse;o.getNormalMatrix(v),(m===null||m.length<p)&&(m=new Float32Array(p));for(let x=0,y=f;x!==b;++x,y+=4)r.copy(u[x]).applyMatrix4(v,o),r.normal.toArray(m,y),m[y+3]=r.constant}c.value=m,c.needsUpdate=!0}return e.numPlanes=b,e.numIntersection=0,m}}function i_(i){let e=new WeakMap;function t(r,o){return o===Ql?r.mapping=Aa:o===Zl&&(r.mapping=Ra),r}function n(r){if(r&&r.isTexture){const o=r.mapping;if(o===Ql||o===Zl)if(e.has(r)){const c=e.get(r).texture;return t(c,r.mapping)}else{const c=r.image;if(c&&c.height>0){const l=new pb(c.height);return l.fromEquirectangularTexture(i,r),e.set(r,l),r.addEventListener("dispose",s),t(l.texture,r.mapping)}else return null}}return r}function s(r){const o=r.target;o.removeEventListener("dispose",s);const c=e.get(o);c!==void 0&&(e.delete(o),c.dispose())}function a(){e=new WeakMap}return{get:n,dispose:a}}class Yr extends $p{constructor(e=-1,t=1,n=1,s=-1,a=.1,r=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=n,this.bottom=s,this.near=a,this.far=r,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,n,s,a,r){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=s,this.view.width=a,this.view.height=r,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,s=(this.top+this.bottom)/2;let a=n-e,r=n+e,o=s+t,c=s-t;if(this.view!==null&&this.view.enabled){const l=(this.right-this.left)/this.view.fullWidth/this.zoom,d=(this.top-this.bottom)/this.view.fullHeight/this.zoom;a+=l*this.view.offsetX,r=a+l*this.view.width,o-=d*this.view.offsetY,c=o-d*this.view.height}this.projectionMatrix.makeOrthographic(a,r,o,c,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}}const ca=4,zh=[.125,.215,.35,.446,.526,.582],ws=20,ul=new Yr,Hh=new De;let hl=null,fl=0,pl=0,ml=!1;const ys=(1+Math.sqrt(5))/2,Zs=1/ys,Gh=[new A(-ys,Zs,0),new A(ys,Zs,0),new A(-Zs,0,ys),new A(Zs,0,ys),new A(0,ys,-Zs),new A(0,ys,Zs),new A(-1,1,-1),new A(1,1,-1),new A(-1,1,1),new A(1,1,1)];class Rd{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,t=0,n=.1,s=100){hl=this._renderer.getRenderTarget(),fl=this._renderer.getActiveCubeFace(),pl=this._renderer.getActiveMipmapLevel(),ml=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(256);const a=this._allocateTargets();return a.depthBuffer=!0,this._sceneToCubeUV(e,n,s,a),t>0&&this._blur(a,0,0,t),this._applyPMREM(a),this._cleanup(a),a}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=qh(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Wh(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(hl,fl,pl),this._renderer.xr.enabled=ml,e.scissorTest=!1,So(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===Aa||e.mapping===Ra?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),hl=this._renderer.getRenderTarget(),fl=this._renderer.getActiveCubeFace(),pl=this._renderer.getActiveMipmapLevel(),ml=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const n=t||this._allocateTargets();return this._textureToCubeUV(e,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,n={magFilter:Qt,minFilter:Qt,generateMipmaps:!1,type:jr,format:zn,colorSpace:bn,depthBuffer:!1},s=Vh(e,t,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Vh(e,t,n);const{_lodMax:a}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=s_(a)),this._blurMaterial=a_(a,e,t)}return s}_compileMaterial(e){const t=new j(this._lodPlanes[0],e);this._renderer.compile(t,ul)}_sceneToCubeUV(e,t,n,s){const o=new tn(90,1,t,n),c=[1,-1,1,1,1,1],l=[1,1,1,-1,-1,-1],d=this._renderer,u=d.autoClear,h=d.toneMapping;d.getClearColor(Hh),d.toneMapping=is,d.autoClear=!1;const f=new _t({name:"PMREM.Background",side:Gt,depthWrite:!1,depthTest:!1}),g=new j(new mt,f);let b=!1;const m=e.background;m?m.isColor&&(f.color.copy(m),e.background=null,b=!0):(f.color.copy(Hh),b=!0);for(let p=0;p<6;p++){const v=p%3;v===0?(o.up.set(0,c[p],0),o.lookAt(l[p],0,0)):v===1?(o.up.set(0,0,c[p]),o.lookAt(0,l[p],0)):(o.up.set(0,c[p],0),o.lookAt(0,0,l[p]));const x=this._cubeSize;So(s,v*x,p>2?x:0,x,x),d.setRenderTarget(s),b&&d.render(g,o),d.render(e,o)}g.geometry.dispose(),g.material.dispose(),d.toneMapping=h,d.autoClear=u,e.background=m}_textureToCubeUV(e,t){const n=this._renderer,s=e.mapping===Aa||e.mapping===Ra;s?(this._cubemapMaterial===null&&(this._cubemapMaterial=qh()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Wh());const a=s?this._cubemapMaterial:this._equirectMaterial,r=new j(this._lodPlanes[0],a),o=a.uniforms;o.envMap.value=e;const c=this._cubeSize;So(t,0,0,3*c,2*c),n.setRenderTarget(t),n.render(r,ul)}_applyPMREM(e){const t=this._renderer,n=t.autoClear;t.autoClear=!1;const s=this._lodPlanes.length;for(let a=1;a<s;a++){const r=Math.sqrt(this._sigmas[a]*this._sigmas[a]-this._sigmas[a-1]*this._sigmas[a-1]),o=Gh[(s-a-1)%Gh.length];this._blur(e,a-1,a,r,o)}t.autoClear=n}_blur(e,t,n,s,a){const r=this._pingPongRenderTarget;this._halfBlur(e,r,t,n,s,"latitudinal",a),this._halfBlur(r,e,n,n,s,"longitudinal",a)}_halfBlur(e,t,n,s,a,r,o){const c=this._renderer,l=this._blurMaterial;r!=="latitudinal"&&r!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const d=3,u=new j(this._lodPlanes[s],l),h=l.uniforms,f=this._sizeLods[n]-1,g=isFinite(a)?Math.PI/(2*f):2*Math.PI/(2*ws-1),b=a/g,m=isFinite(a)?1+Math.floor(d*b):ws;m>ws&&console.warn(`sigmaRadians, ${a}, is too large and will clip, as it requested ${m} samples when the maximum is set to ${ws}`);const p=[];let v=0;for(let R=0;R<ws;++R){const I=R/b,_=Math.exp(-I*I/2);p.push(_),R===0?v+=_:R<m&&(v+=2*_)}for(let R=0;R<p.length;R++)p[R]=p[R]/v;h.envMap.value=e.texture,h.samples.value=m,h.weights.value=p,h.latitudinal.value=r==="latitudinal",o&&(h.poleAxis.value=o);const{_lodMax:x}=this;h.dTheta.value=g,h.mipInt.value=x-n;const y=this._sizeLods[s],D=3*y*(s>x-ca?s-x+ca:0),T=4*(this._cubeSize-y);So(t,D,T,3*y,2*y),c.setRenderTarget(t),c.render(u,ul)}}function s_(i){const e=[],t=[],n=[];let s=i;const a=i-ca+1+zh.length;for(let r=0;r<a;r++){const o=Math.pow(2,s);t.push(o);let c=1/o;r>i-ca?c=zh[r-i+ca-1]:r===0&&(c=0),n.push(c);const l=1/(o-2),d=-l,u=1+l,h=[d,d,u,d,u,u,d,d,u,u,d,u],f=6,g=6,b=3,m=2,p=1,v=new Float32Array(b*g*f),x=new Float32Array(m*g*f),y=new Float32Array(p*g*f);for(let T=0;T<f;T++){const R=T%3*2/3-1,I=T>2?0:-1,_=[R,I,0,R+2/3,I,0,R+2/3,I+1,0,R,I,0,R+2/3,I+1,0,R,I+1,0];v.set(_,b*g*T),x.set(h,m*g*T);const M=[T,T,T,T,T,T];y.set(M,p*g*T)}const D=new Yt;D.setAttribute("position",new dn(v,b)),D.setAttribute("uv",new dn(x,m)),D.setAttribute("faceIndex",new dn(y,p)),e.push(D),s>ca&&s--}return{lodPlanes:e,sizeLods:t,sigmas:n}}function Vh(i,e,t){const n=new os(i,e,t);return n.texture.mapping=Mc,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function So(i,e,t,n,s){i.viewport.set(e,t,n,s),i.scissor.set(e,t,n,s)}function a_(i,e,t){const n=new Float32Array(ws),s=new A(0,1,0);return new un({name:"SphericalGaussianBlur",defines:{n:ws,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${i}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:n},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:s}},vertexShader:vu(),fragmentShader:`

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
		`,blending:ns,depthTest:!1,depthWrite:!1})}function Wh(){return new un({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:vu(),fragmentShader:`

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
		`,blending:ns,depthTest:!1,depthWrite:!1})}function qh(){return new un({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:vu(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:ns,depthTest:!1,depthWrite:!1})}function vu(){return`

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
	`}function r_(i){let e=new WeakMap,t=null;function n(o){if(o&&o.isTexture){const c=o.mapping,l=c===Ql||c===Zl,d=c===Aa||c===Ra;if(l||d){let u=e.get(o);const h=u!==void 0?u.texture.pmremVersion:0;if(o.isRenderTargetTexture&&o.pmremVersion!==h)return t===null&&(t=new Rd(i)),u=l?t.fromEquirectangular(o,u):t.fromCubemap(o,u),u.texture.pmremVersion=o.pmremVersion,e.set(o,u),u.texture;if(u!==void 0)return u.texture;{const f=o.image;return l&&f&&f.height>0||d&&f&&s(f)?(t===null&&(t=new Rd(i)),u=l?t.fromEquirectangular(o):t.fromCubemap(o),u.texture.pmremVersion=o.pmremVersion,e.set(o,u),o.addEventListener("dispose",a),u.texture):null}}}return o}function s(o){let c=0;const l=6;for(let d=0;d<l;d++)o[d]!==void 0&&c++;return c===l}function a(o){const c=o.target;c.removeEventListener("dispose",a);const l=e.get(c);l!==void 0&&(e.delete(c),l.dispose())}function r(){e=new WeakMap,t!==null&&(t.dispose(),t=null)}return{get:n,dispose:r}}function o_(i){const e={};function t(n){if(e[n]!==void 0)return e[n];let s;switch(n){case"WEBGL_depth_texture":s=i.getExtension("WEBGL_depth_texture")||i.getExtension("MOZ_WEBGL_depth_texture")||i.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":s=i.getExtension("EXT_texture_filter_anisotropic")||i.getExtension("MOZ_EXT_texture_filter_anisotropic")||i.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":s=i.getExtension("WEBGL_compressed_texture_s3tc")||i.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":s=i.getExtension("WEBGL_compressed_texture_pvrtc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:s=i.getExtension(n)}return e[n]=s,s}return{has:function(n){return t(n)!==null},init:function(){t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance"),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture"),t("WEBGL_render_shared_exponent")},get:function(n){const s=t(n);return s===null&&Mr("THREE.WebGLRenderer: "+n+" extension not supported."),s}}}function c_(i,e,t,n){const s={},a=new WeakMap;function r(u){const h=u.target;h.index!==null&&e.remove(h.index);for(const g in h.attributes)e.remove(h.attributes[g]);for(const g in h.morphAttributes){const b=h.morphAttributes[g];for(let m=0,p=b.length;m<p;m++)e.remove(b[m])}h.removeEventListener("dispose",r),delete s[h.id];const f=a.get(h);f&&(e.remove(f),a.delete(h)),n.releaseStatesOfGeometry(h),h.isInstancedBufferGeometry===!0&&delete h._maxInstanceCount,t.memory.geometries--}function o(u,h){return s[h.id]===!0||(h.addEventListener("dispose",r),s[h.id]=!0,t.memory.geometries++),h}function c(u){const h=u.attributes;for(const g in h)e.update(h[g],i.ARRAY_BUFFER);const f=u.morphAttributes;for(const g in f){const b=f[g];for(let m=0,p=b.length;m<p;m++)e.update(b[m],i.ARRAY_BUFFER)}}function l(u){const h=[],f=u.index,g=u.attributes.position;let b=0;if(f!==null){const v=f.array;b=f.version;for(let x=0,y=v.length;x<y;x+=3){const D=v[x+0],T=v[x+1],R=v[x+2];h.push(D,T,T,R,R,D)}}else if(g!==void 0){const v=g.array;b=g.version;for(let x=0,y=v.length/3-1;x<y;x+=3){const D=x+0,T=x+1,R=x+2;h.push(D,T,T,R,R,D)}}else return;const m=new(Gp(h)?Xp:jp)(h,1);m.version=b;const p=a.get(u);p&&e.remove(p),a.set(u,m)}function d(u){const h=a.get(u);if(h){const f=u.index;f!==null&&h.version<f.version&&l(u)}else l(u);return a.get(u)}return{get:o,update:c,getWireframeAttribute:d}}function l_(i,e,t){let n;function s(h){n=h}let a,r;function o(h){a=h.type,r=h.bytesPerElement}function c(h,f){i.drawElements(n,f,a,h*r),t.update(f,n,1)}function l(h,f,g){g!==0&&(i.drawElementsInstanced(n,f,a,h*r,g),t.update(f,n,g))}function d(h,f,g){if(g===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n,f,0,a,h,0,g);let m=0;for(let p=0;p<g;p++)m+=f[p];t.update(m,n,1)}function u(h,f,g,b){if(g===0)return;const m=e.get("WEBGL_multi_draw");if(m===null)for(let p=0;p<h.length;p++)l(h[p]/r,f[p],b[p]);else{m.multiDrawElementsInstancedWEBGL(n,f,0,a,h,0,b,0,g);let p=0;for(let v=0;v<g;v++)p+=f[v]*b[v];t.update(p,n,1)}}this.setMode=s,this.setIndex=o,this.render=c,this.renderInstances=l,this.renderMultiDraw=d,this.renderMultiDrawInstances=u}function d_(i){const e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function n(a,r,o){switch(t.calls++,r){case i.TRIANGLES:t.triangles+=o*(a/3);break;case i.LINES:t.lines+=o*(a/2);break;case i.LINE_STRIP:t.lines+=o*(a-1);break;case i.LINE_LOOP:t.lines+=o*a;break;case i.POINTS:t.points+=o*a;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",r);break}}function s(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:s,update:n}}function u_(i,e,t){const n=new WeakMap,s=new tt;function a(r,o,c){const l=r.morphTargetInfluences,d=o.morphAttributes.position||o.morphAttributes.normal||o.morphAttributes.color,u=d!==void 0?d.length:0;let h=n.get(o);if(h===void 0||h.count!==u){let _=function(){R.dispose(),n.delete(o),o.removeEventListener("dispose",_)};h!==void 0&&h.texture.dispose();const f=o.morphAttributes.position!==void 0,g=o.morphAttributes.normal!==void 0,b=o.morphAttributes.color!==void 0,m=o.morphAttributes.position||[],p=o.morphAttributes.normal||[],v=o.morphAttributes.color||[];let x=0;f===!0&&(x=1),g===!0&&(x=2),b===!0&&(x=3);let y=o.attributes.position.count*x,D=1;y>e.maxTextureSize&&(D=Math.ceil(y/e.maxTextureSize),y=e.maxTextureSize);const T=new Float32Array(y*D*4*u),R=new Wp(T,y,D,u);R.type=ii,R.needsUpdate=!0;const I=x*4;for(let M=0;M<u;M++){const L=m[M],k=p[M],P=v[M],B=y*D*4*M;for(let H=0;H<L.count;H++){const z=H*I;f===!0&&(s.fromBufferAttribute(L,H),T[B+z+0]=s.x,T[B+z+1]=s.y,T[B+z+2]=s.z,T[B+z+3]=0),g===!0&&(s.fromBufferAttribute(k,H),T[B+z+4]=s.x,T[B+z+5]=s.y,T[B+z+6]=s.z,T[B+z+7]=0),b===!0&&(s.fromBufferAttribute(P,H),T[B+z+8]=s.x,T[B+z+9]=s.y,T[B+z+10]=s.z,T[B+z+11]=P.itemSize===4?s.w:1)}}h={count:u,texture:R,size:new Ce(y,D)},n.set(o,h),o.addEventListener("dispose",_)}if(r.isInstancedMesh===!0&&r.morphTexture!==null)c.getUniforms().setValue(i,"morphTexture",r.morphTexture,t);else{let f=0;for(let b=0;b<l.length;b++)f+=l[b];const g=o.morphTargetsRelative?1:1-f;c.getUniforms().setValue(i,"morphTargetBaseInfluence",g),c.getUniforms().setValue(i,"morphTargetInfluences",l)}c.getUniforms().setValue(i,"morphTargetsTexture",h.texture,t),c.getUniforms().setValue(i,"morphTargetsTextureSize",h.size)}return{update:a}}function h_(i,e,t,n){let s=new WeakMap;function a(c){const l=n.render.frame,d=c.geometry,u=e.get(c,d);if(s.get(u)!==l&&(e.update(u),s.set(u,l)),c.isInstancedMesh&&(c.hasEventListener("dispose",o)===!1&&c.addEventListener("dispose",o),s.get(c)!==l&&(t.update(c.instanceMatrix,i.ARRAY_BUFFER),c.instanceColor!==null&&t.update(c.instanceColor,i.ARRAY_BUFFER),s.set(c,l))),c.isSkinnedMesh){const h=c.skeleton;s.get(h)!==l&&(h.update(),s.set(h,l))}return u}function r(){s=new WeakMap}function o(c){const l=c.target;l.removeEventListener("dispose",o),t.remove(l.instanceMatrix),l.instanceColor!==null&&t.remove(l.instanceColor)}return{update:a,dispose:r}}class xu extends Ft{constructor(e,t,n,s,a,r,o,c,l,d=ga){if(d!==ga&&d!==Pa)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");n===void 0&&d===ga&&(n=rs),n===void 0&&d===Pa&&(n=Ca),super(null,s,a,r,o,c,d,n,l),this.isDepthTexture=!0,this.image={width:e,height:t},this.magFilter=o!==void 0?o:Zt,this.minFilter=c!==void 0?c:Zt,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.compareFunction=e.compareFunction,this}toJSON(e){const t=super.toJSON(e);return this.compareFunction!==null&&(t.compareFunction=this.compareFunction),t}}const Zp=new Ft,jh=new xu(1,1),em=new Wp,tm=new $0,nm=new Jp,Xh=[],Yh=[],Kh=new Float32Array(16),$h=new Float32Array(9),Jh=new Float32Array(4);function ja(i,e,t){const n=i[0];if(n<=0||n>0)return i;const s=e*t;let a=Xh[s];if(a===void 0&&(a=new Float32Array(s),Xh[s]=a),e!==0){n.toArray(a,0);for(let r=1,o=0;r!==e;++r)o+=t,i[r].toArray(a,o)}return a}function jt(i,e){if(i.length!==e.length)return!1;for(let t=0,n=i.length;t<n;t++)if(i[t]!==e[t])return!1;return!0}function Xt(i,e){for(let t=0,n=e.length;t<n;t++)i[t]=e[t]}function Ec(i,e){let t=Yh[e];t===void 0&&(t=new Int32Array(e),Yh[e]=t);for(let n=0;n!==e;++n)t[n]=i.allocateTextureUnit();return t}function f_(i,e){const t=this.cache;t[0]!==e&&(i.uniform1f(this.addr,e),t[0]=e)}function p_(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(jt(t,e))return;i.uniform2fv(this.addr,e),Xt(t,e)}}function m_(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(i.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(jt(t,e))return;i.uniform3fv(this.addr,e),Xt(t,e)}}function g_(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(jt(t,e))return;i.uniform4fv(this.addr,e),Xt(t,e)}}function b_(i,e){const t=this.cache,n=e.elements;if(n===void 0){if(jt(t,e))return;i.uniformMatrix2fv(this.addr,!1,e),Xt(t,e)}else{if(jt(t,n))return;Jh.set(n),i.uniformMatrix2fv(this.addr,!1,Jh),Xt(t,n)}}function v_(i,e){const t=this.cache,n=e.elements;if(n===void 0){if(jt(t,e))return;i.uniformMatrix3fv(this.addr,!1,e),Xt(t,e)}else{if(jt(t,n))return;$h.set(n),i.uniformMatrix3fv(this.addr,!1,$h),Xt(t,n)}}function x_(i,e){const t=this.cache,n=e.elements;if(n===void 0){if(jt(t,e))return;i.uniformMatrix4fv(this.addr,!1,e),Xt(t,e)}else{if(jt(t,n))return;Kh.set(n),i.uniformMatrix4fv(this.addr,!1,Kh),Xt(t,n)}}function __(i,e){const t=this.cache;t[0]!==e&&(i.uniform1i(this.addr,e),t[0]=e)}function y_(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(jt(t,e))return;i.uniform2iv(this.addr,e),Xt(t,e)}}function M_(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(jt(t,e))return;i.uniform3iv(this.addr,e),Xt(t,e)}}function S_(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(jt(t,e))return;i.uniform4iv(this.addr,e),Xt(t,e)}}function w_(i,e){const t=this.cache;t[0]!==e&&(i.uniform1ui(this.addr,e),t[0]=e)}function E_(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(jt(t,e))return;i.uniform2uiv(this.addr,e),Xt(t,e)}}function T_(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(jt(t,e))return;i.uniform3uiv(this.addr,e),Xt(t,e)}}function A_(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(jt(t,e))return;i.uniform4uiv(this.addr,e),Xt(t,e)}}function R_(i,e,t){const n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s);let a;this.type===i.SAMPLER_2D_SHADOW?(jh.compareFunction=Hp,a=jh):a=Zp,t.setTexture2D(e||a,s)}function C_(i,e,t){const n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),t.setTexture3D(e||tm,s)}function P_(i,e,t){const n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),t.setTextureCube(e||nm,s)}function L_(i,e,t){const n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),t.setTexture2DArray(e||em,s)}function D_(i){switch(i){case 5126:return f_;case 35664:return p_;case 35665:return m_;case 35666:return g_;case 35674:return b_;case 35675:return v_;case 35676:return x_;case 5124:case 35670:return __;case 35667:case 35671:return y_;case 35668:case 35672:return M_;case 35669:case 35673:return S_;case 5125:return w_;case 36294:return E_;case 36295:return T_;case 36296:return A_;case 35678:case 36198:case 36298:case 36306:case 35682:return R_;case 35679:case 36299:case 36307:return C_;case 35680:case 36300:case 36308:case 36293:return P_;case 36289:case 36303:case 36311:case 36292:return L_}}function I_(i,e){i.uniform1fv(this.addr,e)}function k_(i,e){const t=ja(e,this.size,2);i.uniform2fv(this.addr,t)}function N_(i,e){const t=ja(e,this.size,3);i.uniform3fv(this.addr,t)}function F_(i,e){const t=ja(e,this.size,4);i.uniform4fv(this.addr,t)}function U_(i,e){const t=ja(e,this.size,4);i.uniformMatrix2fv(this.addr,!1,t)}function O_(i,e){const t=ja(e,this.size,9);i.uniformMatrix3fv(this.addr,!1,t)}function B_(i,e){const t=ja(e,this.size,16);i.uniformMatrix4fv(this.addr,!1,t)}function z_(i,e){i.uniform1iv(this.addr,e)}function H_(i,e){i.uniform2iv(this.addr,e)}function G_(i,e){i.uniform3iv(this.addr,e)}function V_(i,e){i.uniform4iv(this.addr,e)}function W_(i,e){i.uniform1uiv(this.addr,e)}function q_(i,e){i.uniform2uiv(this.addr,e)}function j_(i,e){i.uniform3uiv(this.addr,e)}function X_(i,e){i.uniform4uiv(this.addr,e)}function Y_(i,e,t){const n=this.cache,s=e.length,a=Ec(t,s);jt(n,a)||(i.uniform1iv(this.addr,a),Xt(n,a));for(let r=0;r!==s;++r)t.setTexture2D(e[r]||Zp,a[r])}function K_(i,e,t){const n=this.cache,s=e.length,a=Ec(t,s);jt(n,a)||(i.uniform1iv(this.addr,a),Xt(n,a));for(let r=0;r!==s;++r)t.setTexture3D(e[r]||tm,a[r])}function $_(i,e,t){const n=this.cache,s=e.length,a=Ec(t,s);jt(n,a)||(i.uniform1iv(this.addr,a),Xt(n,a));for(let r=0;r!==s;++r)t.setTextureCube(e[r]||nm,a[r])}function J_(i,e,t){const n=this.cache,s=e.length,a=Ec(t,s);jt(n,a)||(i.uniform1iv(this.addr,a),Xt(n,a));for(let r=0;r!==s;++r)t.setTexture2DArray(e[r]||em,a[r])}function Q_(i){switch(i){case 5126:return I_;case 35664:return k_;case 35665:return N_;case 35666:return F_;case 35674:return U_;case 35675:return O_;case 35676:return B_;case 5124:case 35670:return z_;case 35667:case 35671:return H_;case 35668:case 35672:return G_;case 35669:case 35673:return V_;case 5125:return W_;case 36294:return q_;case 36295:return j_;case 36296:return X_;case 35678:case 36198:case 36298:case 36306:case 35682:return Y_;case 35679:case 36299:case 36307:return K_;case 35680:case 36300:case 36308:case 36293:return $_;case 36289:case 36303:case 36311:case 36292:return J_}}class Z_{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.setValue=D_(t.type)}}class ey{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=Q_(t.type)}}class ty{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,n){const s=this.seq;for(let a=0,r=s.length;a!==r;++a){const o=s[a];o.setValue(e,t[o.id],n)}}}const gl=/(\w+)(\])?(\[|\.)?/g;function Qh(i,e){i.seq.push(e),i.map[e.id]=e}function ny(i,e,t){const n=i.name,s=n.length;for(gl.lastIndex=0;;){const a=gl.exec(n),r=gl.lastIndex;let o=a[1];const c=a[2]==="]",l=a[3];if(c&&(o=o|0),l===void 0||l==="["&&r+2===s){Qh(t,l===void 0?new Z_(o,i,e):new ey(o,i,e));break}else{let u=t.map[o];u===void 0&&(u=new ty(o),Qh(t,u)),t=u}}}class Xo{constructor(e,t){this.seq=[],this.map={};const n=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let s=0;s<n;++s){const a=e.getActiveUniform(t,s),r=e.getUniformLocation(t,a.name);ny(a,r,this)}}setValue(e,t,n,s){const a=this.map[t];a!==void 0&&a.setValue(e,n,s)}setOptional(e,t,n){const s=t[n];s!==void 0&&this.setValue(e,n,s)}static upload(e,t,n,s){for(let a=0,r=t.length;a!==r;++a){const o=t[a],c=n[o.id];c.needsUpdate!==!1&&o.setValue(e,c.value,s)}}static seqWithValue(e,t){const n=[];for(let s=0,a=e.length;s!==a;++s){const r=e[s];r.id in t&&n.push(r)}return n}}function Zh(i,e,t){const n=i.createShader(e);return i.shaderSource(n,t),i.compileShader(n),n}const iy=37297;let sy=0;function ay(i,e){const t=i.split(`
`),n=[],s=Math.max(e-6,0),a=Math.min(e+6,t.length);for(let r=s;r<a;r++){const o=r+1;n.push(`${o===e?">":" "} ${o}: ${t[r]}`)}return n.join(`
`)}const ef=new je;function ry(i){et._getMatrix(ef,et.workingColorSpace,i);const e=`mat3( ${ef.elements.map(t=>t.toFixed(4))} )`;switch(et.getTransfer(i)){case Sc:return[e,"LinearTransferOETF"];case pt:return[e,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space: ",i),[e,"LinearTransferOETF"]}}function tf(i,e,t){const n=i.getShaderParameter(e,i.COMPILE_STATUS),s=i.getShaderInfoLog(e).trim();if(n&&s==="")return"";const a=/ERROR: 0:(\d+)/.exec(s);if(a){const r=parseInt(a[1]);return t.toUpperCase()+`

`+s+`

`+ay(i.getShaderSource(e),r)}else return s}function oy(i,e){const t=ry(e);return[`vec4 ${i}( vec4 value ) {`,`	return ${t[1]}( vec4( value.rgb * ${t[0]}, value.a ) );`,"}"].join(`
`)}function cy(i,e){let t;switch(e){case o0:t="Linear";break;case c0:t="Reinhard";break;case l0:t="Cineon";break;case cu:t="ACESFilmic";break;case u0:t="AgX";break;case h0:t="Neutral";break;case d0:t="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),t="Linear"}return"vec3 "+i+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}const wo=new A;function ly(){et.getLuminanceCoefficients(wo);const i=wo.x.toFixed(4),e=wo.y.toFixed(4),t=wo.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${i}, ${e}, ${t} );`,"	return dot( weights, rgb );","}"].join(`
`)}function dy(i){return[i.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",i.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Sr).join(`
`)}function uy(i){const e=[];for(const t in i){const n=i[t];n!==!1&&e.push("#define "+t+" "+n)}return e.join(`
`)}function hy(i,e){const t={},n=i.getProgramParameter(e,i.ACTIVE_ATTRIBUTES);for(let s=0;s<n;s++){const a=i.getActiveAttrib(e,s),r=a.name;let o=1;a.type===i.FLOAT_MAT2&&(o=2),a.type===i.FLOAT_MAT3&&(o=3),a.type===i.FLOAT_MAT4&&(o=4),t[r]={type:a.type,location:i.getAttribLocation(e,r),locationSize:o}}return t}function Sr(i){return i!==""}function nf(i,e){const t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return i.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function sf(i,e){return i.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const fy=/^[ \t]*#include +<([\w\d./]+)>/gm;function Cd(i){return i.replace(fy,my)}const py=new Map;function my(i,e){let t=Ke[e];if(t===void 0){const n=py.get(e);if(n!==void 0)t=Ke[n],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,n);else throw new Error("Can not resolve #include <"+e+">")}return Cd(t)}const gy=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function af(i){return i.replace(gy,by)}function by(i,e,t,n){let s="";for(let a=parseInt(e);a<parseInt(t);a++)s+=n.replace(/\[\s*i\s*\]/g,"[ "+a+" ]").replace(/UNROLLED_LOOP_INDEX/g,a);return s}function rf(i){let e=`precision ${i.precision} float;
	precision ${i.precision} int;
	precision ${i.precision} sampler2D;
	precision ${i.precision} samplerCube;
	precision ${i.precision} sampler3D;
	precision ${i.precision} sampler2DArray;
	precision ${i.precision} sampler2DShadow;
	precision ${i.precision} samplerCubeShadow;
	precision ${i.precision} sampler2DArrayShadow;
	precision ${i.precision} isampler2D;
	precision ${i.precision} isampler3D;
	precision ${i.precision} isamplerCube;
	precision ${i.precision} isampler2DArray;
	precision ${i.precision} usampler2D;
	precision ${i.precision} usampler3D;
	precision ${i.precision} usamplerCube;
	precision ${i.precision} usampler2DArray;
	`;return i.precision==="highp"?e+=`
#define HIGH_PRECISION`:i.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:i.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}function vy(i){let e="SHADOWMAP_TYPE_BASIC";return i.shadowMapType===Tp?e="SHADOWMAP_TYPE_PCF":i.shadowMapType===zg?e="SHADOWMAP_TYPE_PCF_SOFT":i.shadowMapType===Ai&&(e="SHADOWMAP_TYPE_VSM"),e}function xy(i){let e="ENVMAP_TYPE_CUBE";if(i.envMap)switch(i.envMapMode){case Aa:case Ra:e="ENVMAP_TYPE_CUBE";break;case Mc:e="ENVMAP_TYPE_CUBE_UV";break}return e}function _y(i){let e="ENVMAP_MODE_REFLECTION";if(i.envMap)switch(i.envMapMode){case Ra:e="ENVMAP_MODE_REFRACTION";break}return e}function yy(i){let e="ENVMAP_BLENDING_NONE";if(i.envMap)switch(i.combine){case Ap:e="ENVMAP_BLENDING_MULTIPLY";break;case a0:e="ENVMAP_BLENDING_MIX";break;case r0:e="ENVMAP_BLENDING_ADD";break}return e}function My(i){const e=i.envMapCubeUVHeight;if(e===null)return null;const t=Math.log2(e)-2,n=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),7*16)),texelHeight:n,maxMip:t}}function Sy(i,e,t,n){const s=i.getContext(),a=t.defines;let r=t.vertexShader,o=t.fragmentShader;const c=vy(t),l=xy(t),d=_y(t),u=yy(t),h=My(t),f=dy(t),g=uy(a),b=s.createProgram();let m,p,v=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(m=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g].filter(Sr).join(`
`),m.length>0&&(m+=`
`),p=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g].filter(Sr).join(`
`),p.length>0&&(p+=`
`)):(m=[rf(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.batchingColor?"#define USE_BATCHING_COLOR":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.instancingMorph?"#define USE_INSTANCING_MORPH":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+d:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+c:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Sr).join(`
`),p=[rf(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+l:"",t.envMap?"#define "+d:"",t.envMap?"#define "+u:"",h?"#define CUBEUV_TEXEL_WIDTH "+h.texelWidth:"",h?"#define CUBEUV_TEXEL_HEIGHT "+h.texelHeight:"",h?"#define CUBEUV_MAX_MIP "+h.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.dispersion?"#define USE_DISPERSION":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor||t.batchingColor?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+c:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==is?"#define TONE_MAPPING":"",t.toneMapping!==is?Ke.tonemapping_pars_fragment:"",t.toneMapping!==is?cy("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",Ke.colorspace_pars_fragment,oy("linearToOutputTexel",t.outputColorSpace),ly(),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(Sr).join(`
`)),r=Cd(r),r=nf(r,t),r=sf(r,t),o=Cd(o),o=nf(o,t),o=sf(o,t),r=af(r),o=af(o),t.isRawShaderMaterial!==!0&&(v=`#version 300 es
`,m=[f,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+m,p=["#define varying in",t.glslVersion===vh?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===vh?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+p);const x=v+m+r,y=v+p+o,D=Zh(s,s.VERTEX_SHADER,x),T=Zh(s,s.FRAGMENT_SHADER,y);s.attachShader(b,D),s.attachShader(b,T),t.index0AttributeName!==void 0?s.bindAttribLocation(b,0,t.index0AttributeName):t.morphTargets===!0&&s.bindAttribLocation(b,0,"position"),s.linkProgram(b);function R(L){if(i.debug.checkShaderErrors){const k=s.getProgramInfoLog(b).trim(),P=s.getShaderInfoLog(D).trim(),B=s.getShaderInfoLog(T).trim();let H=!0,z=!0;if(s.getProgramParameter(b,s.LINK_STATUS)===!1)if(H=!1,typeof i.debug.onShaderError=="function")i.debug.onShaderError(s,b,D,T);else{const ee=tf(s,D,"vertex"),V=tf(s,T,"fragment");console.error("THREE.WebGLProgram: Shader Error "+s.getError()+" - VALIDATE_STATUS "+s.getProgramParameter(b,s.VALIDATE_STATUS)+`

Material Name: `+L.name+`
Material Type: `+L.type+`

Program Info Log: `+k+`
`+ee+`
`+V)}else k!==""?console.warn("THREE.WebGLProgram: Program Info Log:",k):(P===""||B==="")&&(z=!1);z&&(L.diagnostics={runnable:H,programLog:k,vertexShader:{log:P,prefix:m},fragmentShader:{log:B,prefix:p}})}s.deleteShader(D),s.deleteShader(T),I=new Xo(s,b),_=hy(s,b)}let I;this.getUniforms=function(){return I===void 0&&R(this),I};let _;this.getAttributes=function(){return _===void 0&&R(this),_};let M=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return M===!1&&(M=s.getProgramParameter(b,iy)),M},this.destroy=function(){n.releaseStatesOfProgram(this),s.deleteProgram(b),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=sy++,this.cacheKey=e,this.usedTimes=1,this.program=b,this.vertexShader=D,this.fragmentShader=T,this}let wy=0;class Ey{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const t=e.vertexShader,n=e.fragmentShader,s=this._getShaderStage(t),a=this._getShaderStage(n),r=this._getShaderCacheForMaterial(e);return r.has(s)===!1&&(r.add(s),s.usedTimes++),r.has(a)===!1&&(r.add(a),a.usedTimes++),this}remove(e){const t=this.materialCache.get(e);for(const n of t)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const t=this.materialCache;let n=t.get(e);return n===void 0&&(n=new Set,t.set(e,n)),n}_getShaderStage(e){const t=this.shaderCache;let n=t.get(e);return n===void 0&&(n=new Ty(e),t.set(e,n)),n}}class Ty{constructor(e){this.id=wy++,this.code=e,this.usedTimes=0}}function Ay(i,e,t,n,s,a,r){const o=new bu,c=new Ey,l=new Set,d=[],u=s.logarithmicDepthBuffer,h=s.vertexTextures;let f=s.precision;const g={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function b(_){return l.add(_),_===0?"uv":`uv${_}`}function m(_,M,L,k,P){const B=k.fog,H=P.geometry,z=_.isMeshStandardMaterial?k.environment:null,ee=(_.isMeshStandardMaterial?t:e).get(_.envMap||z),V=ee&&ee.mapping===Mc?ee.image.height:null,oe=g[_.type];_.precision!==null&&(f=s.getMaxPrecision(_.precision),f!==_.precision&&console.warn("THREE.WebGLProgram.getParameters:",_.precision,"not supported, using",f,"instead."));const le=H.morphAttributes.position||H.morphAttributes.normal||H.morphAttributes.color,_e=le!==void 0?le.length:0;let ke=0;H.morphAttributes.position!==void 0&&(ke=1),H.morphAttributes.normal!==void 0&&(ke=2),H.morphAttributes.color!==void 0&&(ke=3);let xe,Y,te,ue;if(oe){const ut=oi[oe];xe=ut.vertexShader,Y=ut.fragmentShader}else xe=_.vertexShader,Y=_.fragmentShader,c.update(_),te=c.getVertexShaderID(_),ue=c.getFragmentShaderID(_);const ce=i.getRenderTarget(),Ie=i.state.buffers.depth.getReversed(),Ve=P.isInstancedMesh===!0,$e=P.isBatchedMesh===!0,Ct=!!_.map,at=!!_.matcap,Bt=!!ee,O=!!_.aoMap,Pn=!!_.lightMap,nt=!!_.bumpMap,it=!!_.normalMap,Fe=!!_.displacementMap,yt=!!_.emissiveMap,Ne=!!_.metalnessMap,C=!!_.roughnessMap,w=_.anisotropy>0,G=_.clearcoat>0,Q=_.dispersion>0,ne=_.iridescence>0,J=_.sheen>0,Pe=_.transmission>0,fe=w&&!!_.anisotropyMap,ye=G&&!!_.clearcoatMap,rt=G&&!!_.clearcoatNormalMap,ae=G&&!!_.clearcoatRoughnessMap,Me=ne&&!!_.iridescenceMap,Oe=ne&&!!_.iridescenceThicknessMap,Be=J&&!!_.sheenColorMap,Se=J&&!!_.sheenRoughnessMap,st=!!_.specularMap,Ye=!!_.specularColorMap,vt=!!_.specularIntensityMap,N=Pe&&!!_.transmissionMap,he=Pe&&!!_.thicknessMap,$=!!_.gradientMap,Z=!!_.alphaMap,be=_.alphaTest>0,me=!!_.alphaHash,We=!!_.extensions;let Dt=is;_.toneMapped&&(ce===null||ce.isXRRenderTarget===!0)&&(Dt=i.toneMapping);const an={shaderID:oe,shaderType:_.type,shaderName:_.name,vertexShader:xe,fragmentShader:Y,defines:_.defines,customVertexShaderID:te,customFragmentShaderID:ue,isRawShaderMaterial:_.isRawShaderMaterial===!0,glslVersion:_.glslVersion,precision:f,batching:$e,batchingColor:$e&&P._colorsTexture!==null,instancing:Ve,instancingColor:Ve&&P.instanceColor!==null,instancingMorph:Ve&&P.morphTexture!==null,supportsVertexTextures:h,outputColorSpace:ce===null?i.outputColorSpace:ce.isXRRenderTarget===!0?ce.texture.colorSpace:bn,alphaToCoverage:!!_.alphaToCoverage,map:Ct,matcap:at,envMap:Bt,envMapMode:Bt&&ee.mapping,envMapCubeUVHeight:V,aoMap:O,lightMap:Pn,bumpMap:nt,normalMap:it,displacementMap:h&&Fe,emissiveMap:yt,normalMapObjectSpace:it&&_.normalMapType===v0,normalMapTangentSpace:it&&_.normalMapType===zp,metalnessMap:Ne,roughnessMap:C,anisotropy:w,anisotropyMap:fe,clearcoat:G,clearcoatMap:ye,clearcoatNormalMap:rt,clearcoatRoughnessMap:ae,dispersion:Q,iridescence:ne,iridescenceMap:Me,iridescenceThicknessMap:Oe,sheen:J,sheenColorMap:Be,sheenRoughnessMap:Se,specularMap:st,specularColorMap:Ye,specularIntensityMap:vt,transmission:Pe,transmissionMap:N,thicknessMap:he,gradientMap:$,opaque:_.transparent===!1&&_.blending===ma&&_.alphaToCoverage===!1,alphaMap:Z,alphaTest:be,alphaHash:me,combine:_.combine,mapUv:Ct&&b(_.map.channel),aoMapUv:O&&b(_.aoMap.channel),lightMapUv:Pn&&b(_.lightMap.channel),bumpMapUv:nt&&b(_.bumpMap.channel),normalMapUv:it&&b(_.normalMap.channel),displacementMapUv:Fe&&b(_.displacementMap.channel),emissiveMapUv:yt&&b(_.emissiveMap.channel),metalnessMapUv:Ne&&b(_.metalnessMap.channel),roughnessMapUv:C&&b(_.roughnessMap.channel),anisotropyMapUv:fe&&b(_.anisotropyMap.channel),clearcoatMapUv:ye&&b(_.clearcoatMap.channel),clearcoatNormalMapUv:rt&&b(_.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:ae&&b(_.clearcoatRoughnessMap.channel),iridescenceMapUv:Me&&b(_.iridescenceMap.channel),iridescenceThicknessMapUv:Oe&&b(_.iridescenceThicknessMap.channel),sheenColorMapUv:Be&&b(_.sheenColorMap.channel),sheenRoughnessMapUv:Se&&b(_.sheenRoughnessMap.channel),specularMapUv:st&&b(_.specularMap.channel),specularColorMapUv:Ye&&b(_.specularColorMap.channel),specularIntensityMapUv:vt&&b(_.specularIntensityMap.channel),transmissionMapUv:N&&b(_.transmissionMap.channel),thicknessMapUv:he&&b(_.thicknessMap.channel),alphaMapUv:Z&&b(_.alphaMap.channel),vertexTangents:!!H.attributes.tangent&&(it||w),vertexColors:_.vertexColors,vertexAlphas:_.vertexColors===!0&&!!H.attributes.color&&H.attributes.color.itemSize===4,pointsUvs:P.isPoints===!0&&!!H.attributes.uv&&(Ct||Z),fog:!!B,useFog:_.fog===!0,fogExp2:!!B&&B.isFogExp2,flatShading:_.flatShading===!0,sizeAttenuation:_.sizeAttenuation===!0,logarithmicDepthBuffer:u,reverseDepthBuffer:Ie,skinning:P.isSkinnedMesh===!0,morphTargets:H.morphAttributes.position!==void 0,morphNormals:H.morphAttributes.normal!==void 0,morphColors:H.morphAttributes.color!==void 0,morphTargetsCount:_e,morphTextureStride:ke,numDirLights:M.directional.length,numPointLights:M.point.length,numSpotLights:M.spot.length,numSpotLightMaps:M.spotLightMap.length,numRectAreaLights:M.rectArea.length,numHemiLights:M.hemi.length,numDirLightShadows:M.directionalShadowMap.length,numPointLightShadows:M.pointShadowMap.length,numSpotLightShadows:M.spotShadowMap.length,numSpotLightShadowsWithMaps:M.numSpotLightShadowsWithMaps,numLightProbes:M.numLightProbes,numClippingPlanes:r.numPlanes,numClipIntersection:r.numIntersection,dithering:_.dithering,shadowMapEnabled:i.shadowMap.enabled&&L.length>0,shadowMapType:i.shadowMap.type,toneMapping:Dt,decodeVideoTexture:Ct&&_.map.isVideoTexture===!0&&et.getTransfer(_.map.colorSpace)===pt,decodeVideoTextureEmissive:yt&&_.emissiveMap.isVideoTexture===!0&&et.getTransfer(_.emissiveMap.colorSpace)===pt,premultipliedAlpha:_.premultipliedAlpha,doubleSided:_.side===nn,flipSided:_.side===Gt,useDepthPacking:_.depthPacking>=0,depthPacking:_.depthPacking||0,index0AttributeName:_.index0AttributeName,extensionClipCullDistance:We&&_.extensions.clipCullDistance===!0&&n.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(We&&_.extensions.multiDraw===!0||$e)&&n.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:n.has("KHR_parallel_shader_compile"),customProgramCacheKey:_.customProgramCacheKey()};return an.vertexUv1s=l.has(1),an.vertexUv2s=l.has(2),an.vertexUv3s=l.has(3),l.clear(),an}function p(_){const M=[];if(_.shaderID?M.push(_.shaderID):(M.push(_.customVertexShaderID),M.push(_.customFragmentShaderID)),_.defines!==void 0)for(const L in _.defines)M.push(L),M.push(_.defines[L]);return _.isRawShaderMaterial===!1&&(v(M,_),x(M,_),M.push(i.outputColorSpace)),M.push(_.customProgramCacheKey),M.join()}function v(_,M){_.push(M.precision),_.push(M.outputColorSpace),_.push(M.envMapMode),_.push(M.envMapCubeUVHeight),_.push(M.mapUv),_.push(M.alphaMapUv),_.push(M.lightMapUv),_.push(M.aoMapUv),_.push(M.bumpMapUv),_.push(M.normalMapUv),_.push(M.displacementMapUv),_.push(M.emissiveMapUv),_.push(M.metalnessMapUv),_.push(M.roughnessMapUv),_.push(M.anisotropyMapUv),_.push(M.clearcoatMapUv),_.push(M.clearcoatNormalMapUv),_.push(M.clearcoatRoughnessMapUv),_.push(M.iridescenceMapUv),_.push(M.iridescenceThicknessMapUv),_.push(M.sheenColorMapUv),_.push(M.sheenRoughnessMapUv),_.push(M.specularMapUv),_.push(M.specularColorMapUv),_.push(M.specularIntensityMapUv),_.push(M.transmissionMapUv),_.push(M.thicknessMapUv),_.push(M.combine),_.push(M.fogExp2),_.push(M.sizeAttenuation),_.push(M.morphTargetsCount),_.push(M.morphAttributeCount),_.push(M.numDirLights),_.push(M.numPointLights),_.push(M.numSpotLights),_.push(M.numSpotLightMaps),_.push(M.numHemiLights),_.push(M.numRectAreaLights),_.push(M.numDirLightShadows),_.push(M.numPointLightShadows),_.push(M.numSpotLightShadows),_.push(M.numSpotLightShadowsWithMaps),_.push(M.numLightProbes),_.push(M.shadowMapType),_.push(M.toneMapping),_.push(M.numClippingPlanes),_.push(M.numClipIntersection),_.push(M.depthPacking)}function x(_,M){o.disableAll(),M.supportsVertexTextures&&o.enable(0),M.instancing&&o.enable(1),M.instancingColor&&o.enable(2),M.instancingMorph&&o.enable(3),M.matcap&&o.enable(4),M.envMap&&o.enable(5),M.normalMapObjectSpace&&o.enable(6),M.normalMapTangentSpace&&o.enable(7),M.clearcoat&&o.enable(8),M.iridescence&&o.enable(9),M.alphaTest&&o.enable(10),M.vertexColors&&o.enable(11),M.vertexAlphas&&o.enable(12),M.vertexUv1s&&o.enable(13),M.vertexUv2s&&o.enable(14),M.vertexUv3s&&o.enable(15),M.vertexTangents&&o.enable(16),M.anisotropy&&o.enable(17),M.alphaHash&&o.enable(18),M.batching&&o.enable(19),M.dispersion&&o.enable(20),M.batchingColor&&o.enable(21),_.push(o.mask),o.disableAll(),M.fog&&o.enable(0),M.useFog&&o.enable(1),M.flatShading&&o.enable(2),M.logarithmicDepthBuffer&&o.enable(3),M.reverseDepthBuffer&&o.enable(4),M.skinning&&o.enable(5),M.morphTargets&&o.enable(6),M.morphNormals&&o.enable(7),M.morphColors&&o.enable(8),M.premultipliedAlpha&&o.enable(9),M.shadowMapEnabled&&o.enable(10),M.doubleSided&&o.enable(11),M.flipSided&&o.enable(12),M.useDepthPacking&&o.enable(13),M.dithering&&o.enable(14),M.transmission&&o.enable(15),M.sheen&&o.enable(16),M.opaque&&o.enable(17),M.pointsUvs&&o.enable(18),M.decodeVideoTexture&&o.enable(19),M.decodeVideoTextureEmissive&&o.enable(20),M.alphaToCoverage&&o.enable(21),_.push(o.mask)}function y(_){const M=g[_.type];let L;if(M){const k=oi[M];L=Kp.clone(k.uniforms)}else L=_.uniforms;return L}function D(_,M){let L;for(let k=0,P=d.length;k<P;k++){const B=d[k];if(B.cacheKey===M){L=B,++L.usedTimes;break}}return L===void 0&&(L=new Sy(i,M,_,a),d.push(L)),L}function T(_){if(--_.usedTimes===0){const M=d.indexOf(_);d[M]=d[d.length-1],d.pop(),_.destroy()}}function R(_){c.remove(_)}function I(){c.dispose()}return{getParameters:m,getProgramCacheKey:p,getUniforms:y,acquireProgram:D,releaseProgram:T,releaseShaderCache:R,programs:d,dispose:I}}function Ry(){let i=new WeakMap;function e(r){return i.has(r)}function t(r){let o=i.get(r);return o===void 0&&(o={},i.set(r,o)),o}function n(r){i.delete(r)}function s(r,o,c){i.get(r)[o]=c}function a(){i=new WeakMap}return{has:e,get:t,remove:n,update:s,dispose:a}}function Cy(i,e){return i.groupOrder!==e.groupOrder?i.groupOrder-e.groupOrder:i.renderOrder!==e.renderOrder?i.renderOrder-e.renderOrder:i.material.id!==e.material.id?i.material.id-e.material.id:i.z!==e.z?i.z-e.z:i.id-e.id}function of(i,e){return i.groupOrder!==e.groupOrder?i.groupOrder-e.groupOrder:i.renderOrder!==e.renderOrder?i.renderOrder-e.renderOrder:i.z!==e.z?e.z-i.z:i.id-e.id}function cf(){const i=[];let e=0;const t=[],n=[],s=[];function a(){e=0,t.length=0,n.length=0,s.length=0}function r(u,h,f,g,b,m){let p=i[e];return p===void 0?(p={id:u.id,object:u,geometry:h,material:f,groupOrder:g,renderOrder:u.renderOrder,z:b,group:m},i[e]=p):(p.id=u.id,p.object=u,p.geometry=h,p.material=f,p.groupOrder=g,p.renderOrder=u.renderOrder,p.z=b,p.group=m),e++,p}function o(u,h,f,g,b,m){const p=r(u,h,f,g,b,m);f.transmission>0?n.push(p):f.transparent===!0?s.push(p):t.push(p)}function c(u,h,f,g,b,m){const p=r(u,h,f,g,b,m);f.transmission>0?n.unshift(p):f.transparent===!0?s.unshift(p):t.unshift(p)}function l(u,h){t.length>1&&t.sort(u||Cy),n.length>1&&n.sort(h||of),s.length>1&&s.sort(h||of)}function d(){for(let u=e,h=i.length;u<h;u++){const f=i[u];if(f.id===null)break;f.id=null,f.object=null,f.geometry=null,f.material=null,f.group=null}}return{opaque:t,transmissive:n,transparent:s,init:a,push:o,unshift:c,finish:d,sort:l}}function Py(){let i=new WeakMap;function e(n,s){const a=i.get(n);let r;return a===void 0?(r=new cf,i.set(n,[r])):s>=a.length?(r=new cf,a.push(r)):r=a[s],r}function t(){i=new WeakMap}return{get:e,dispose:t}}function Ly(){const i={};return{get:function(e){if(i[e.id]!==void 0)return i[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new A,color:new De};break;case"SpotLight":t={position:new A,direction:new A,color:new De,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new A,color:new De,distance:0,decay:0};break;case"HemisphereLight":t={direction:new A,skyColor:new De,groundColor:new De};break;case"RectAreaLight":t={color:new De,position:new A,halfWidth:new A,halfHeight:new A};break}return i[e.id]=t,t}}}function Dy(){const i={};return{get:function(e){if(i[e.id]!==void 0)return i[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ce};break;case"SpotLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ce};break;case"PointLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ce,shadowCameraNear:1,shadowCameraFar:1e3};break}return i[e.id]=t,t}}}let Iy=0;function ky(i,e){return(e.castShadow?2:0)-(i.castShadow?2:0)+(e.map?1:0)-(i.map?1:0)}function Ny(i){const e=new Ly,t=Dy(),n={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let l=0;l<9;l++)n.probe.push(new A);const s=new A,a=new He,r=new He;function o(l){let d=0,u=0,h=0;for(let _=0;_<9;_++)n.probe[_].set(0,0,0);let f=0,g=0,b=0,m=0,p=0,v=0,x=0,y=0,D=0,T=0,R=0;l.sort(ky);for(let _=0,M=l.length;_<M;_++){const L=l[_],k=L.color,P=L.intensity,B=L.distance,H=L.shadow&&L.shadow.map?L.shadow.map.texture:null;if(L.isAmbientLight)d+=k.r*P,u+=k.g*P,h+=k.b*P;else if(L.isLightProbe){for(let z=0;z<9;z++)n.probe[z].addScaledVector(L.sh.coefficients[z],P);R++}else if(L.isDirectionalLight){const z=e.get(L);if(z.color.copy(L.color).multiplyScalar(L.intensity),L.castShadow){const ee=L.shadow,V=t.get(L);V.shadowIntensity=ee.intensity,V.shadowBias=ee.bias,V.shadowNormalBias=ee.normalBias,V.shadowRadius=ee.radius,V.shadowMapSize=ee.mapSize,n.directionalShadow[f]=V,n.directionalShadowMap[f]=H,n.directionalShadowMatrix[f]=L.shadow.matrix,v++}n.directional[f]=z,f++}else if(L.isSpotLight){const z=e.get(L);z.position.setFromMatrixPosition(L.matrixWorld),z.color.copy(k).multiplyScalar(P),z.distance=B,z.coneCos=Math.cos(L.angle),z.penumbraCos=Math.cos(L.angle*(1-L.penumbra)),z.decay=L.decay,n.spot[b]=z;const ee=L.shadow;if(L.map&&(n.spotLightMap[D]=L.map,D++,ee.updateMatrices(L),L.castShadow&&T++),n.spotLightMatrix[b]=ee.matrix,L.castShadow){const V=t.get(L);V.shadowIntensity=ee.intensity,V.shadowBias=ee.bias,V.shadowNormalBias=ee.normalBias,V.shadowRadius=ee.radius,V.shadowMapSize=ee.mapSize,n.spotShadow[b]=V,n.spotShadowMap[b]=H,y++}b++}else if(L.isRectAreaLight){const z=e.get(L);z.color.copy(k).multiplyScalar(P),z.halfWidth.set(L.width*.5,0,0),z.halfHeight.set(0,L.height*.5,0),n.rectArea[m]=z,m++}else if(L.isPointLight){const z=e.get(L);if(z.color.copy(L.color).multiplyScalar(L.intensity),z.distance=L.distance,z.decay=L.decay,L.castShadow){const ee=L.shadow,V=t.get(L);V.shadowIntensity=ee.intensity,V.shadowBias=ee.bias,V.shadowNormalBias=ee.normalBias,V.shadowRadius=ee.radius,V.shadowMapSize=ee.mapSize,V.shadowCameraNear=ee.camera.near,V.shadowCameraFar=ee.camera.far,n.pointShadow[g]=V,n.pointShadowMap[g]=H,n.pointShadowMatrix[g]=L.shadow.matrix,x++}n.point[g]=z,g++}else if(L.isHemisphereLight){const z=e.get(L);z.skyColor.copy(L.color).multiplyScalar(P),z.groundColor.copy(L.groundColor).multiplyScalar(P),n.hemi[p]=z,p++}}m>0&&(i.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=de.LTC_FLOAT_1,n.rectAreaLTC2=de.LTC_FLOAT_2):(n.rectAreaLTC1=de.LTC_HALF_1,n.rectAreaLTC2=de.LTC_HALF_2)),n.ambient[0]=d,n.ambient[1]=u,n.ambient[2]=h;const I=n.hash;(I.directionalLength!==f||I.pointLength!==g||I.spotLength!==b||I.rectAreaLength!==m||I.hemiLength!==p||I.numDirectionalShadows!==v||I.numPointShadows!==x||I.numSpotShadows!==y||I.numSpotMaps!==D||I.numLightProbes!==R)&&(n.directional.length=f,n.spot.length=b,n.rectArea.length=m,n.point.length=g,n.hemi.length=p,n.directionalShadow.length=v,n.directionalShadowMap.length=v,n.pointShadow.length=x,n.pointShadowMap.length=x,n.spotShadow.length=y,n.spotShadowMap.length=y,n.directionalShadowMatrix.length=v,n.pointShadowMatrix.length=x,n.spotLightMatrix.length=y+D-T,n.spotLightMap.length=D,n.numSpotLightShadowsWithMaps=T,n.numLightProbes=R,I.directionalLength=f,I.pointLength=g,I.spotLength=b,I.rectAreaLength=m,I.hemiLength=p,I.numDirectionalShadows=v,I.numPointShadows=x,I.numSpotShadows=y,I.numSpotMaps=D,I.numLightProbes=R,n.version=Iy++)}function c(l,d){let u=0,h=0,f=0,g=0,b=0;const m=d.matrixWorldInverse;for(let p=0,v=l.length;p<v;p++){const x=l[p];if(x.isDirectionalLight){const y=n.directional[u];y.direction.setFromMatrixPosition(x.matrixWorld),s.setFromMatrixPosition(x.target.matrixWorld),y.direction.sub(s),y.direction.transformDirection(m),u++}else if(x.isSpotLight){const y=n.spot[f];y.position.setFromMatrixPosition(x.matrixWorld),y.position.applyMatrix4(m),y.direction.setFromMatrixPosition(x.matrixWorld),s.setFromMatrixPosition(x.target.matrixWorld),y.direction.sub(s),y.direction.transformDirection(m),f++}else if(x.isRectAreaLight){const y=n.rectArea[g];y.position.setFromMatrixPosition(x.matrixWorld),y.position.applyMatrix4(m),r.identity(),a.copy(x.matrixWorld),a.premultiply(m),r.extractRotation(a),y.halfWidth.set(x.width*.5,0,0),y.halfHeight.set(0,x.height*.5,0),y.halfWidth.applyMatrix4(r),y.halfHeight.applyMatrix4(r),g++}else if(x.isPointLight){const y=n.point[h];y.position.setFromMatrixPosition(x.matrixWorld),y.position.applyMatrix4(m),h++}else if(x.isHemisphereLight){const y=n.hemi[b];y.direction.setFromMatrixPosition(x.matrixWorld),y.direction.transformDirection(m),b++}}}return{setup:o,setupView:c,state:n}}function lf(i){const e=new Ny(i),t=[],n=[];function s(d){l.camera=d,t.length=0,n.length=0}function a(d){t.push(d)}function r(d){n.push(d)}function o(){e.setup(t)}function c(d){e.setupView(t,d)}const l={lightsArray:t,shadowsArray:n,camera:null,lights:e,transmissionRenderTarget:{}};return{init:s,state:l,setupLights:o,setupLightsView:c,pushLight:a,pushShadow:r}}function Fy(i){let e=new WeakMap;function t(s,a=0){const r=e.get(s);let o;return r===void 0?(o=new lf(i),e.set(s,[o])):a>=r.length?(o=new lf(i),r.push(o)):o=r[a],o}function n(){e=new WeakMap}return{get:t,dispose:n}}class Uy extends ui{static get type(){return"MeshDepthMaterial"}constructor(e){super(),this.isMeshDepthMaterial=!0,this.depthPacking=g0,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class Oy extends ui{static get type(){return"MeshDistanceMaterial"}constructor(e){super(),this.isMeshDistanceMaterial=!0,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}const By=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,zy=`uniform sampler2D shadow_pass;
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
}`;function Hy(i,e,t){let n=new wc;const s=new Ce,a=new Ce,r=new tt,o=new Uy({depthPacking:b0}),c=new Oy,l={},d=t.maxTextureSize,u={[Fi]:Gt,[Gt]:Fi,[nn]:nn},h=new un({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Ce},radius:{value:4}},vertexShader:By,fragmentShader:zy}),f=h.clone();f.defines.HORIZONTAL_PASS=1;const g=new Yt;g.setAttribute("position",new dn(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const b=new j(g,h),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Tp;let p=this.type;this.render=function(T,R,I){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||T.length===0)return;const _=i.getRenderTarget(),M=i.getActiveCubeFace(),L=i.getActiveMipmapLevel(),k=i.state;k.setBlending(ns),k.buffers.color.setClear(1,1,1,1),k.buffers.depth.setTest(!0),k.setScissorTest(!1);const P=p!==Ai&&this.type===Ai,B=p===Ai&&this.type!==Ai;for(let H=0,z=T.length;H<z;H++){const ee=T[H],V=ee.shadow;if(V===void 0){console.warn("THREE.WebGLShadowMap:",ee,"has no shadow.");continue}if(V.autoUpdate===!1&&V.needsUpdate===!1)continue;s.copy(V.mapSize);const oe=V.getFrameExtents();if(s.multiply(oe),a.copy(V.mapSize),(s.x>d||s.y>d)&&(s.x>d&&(a.x=Math.floor(d/oe.x),s.x=a.x*oe.x,V.mapSize.x=a.x),s.y>d&&(a.y=Math.floor(d/oe.y),s.y=a.y*oe.y,V.mapSize.y=a.y)),V.map===null||P===!0||B===!0){const _e=this.type!==Ai?{minFilter:Zt,magFilter:Zt}:{};V.map!==null&&V.map.dispose(),V.map=new os(s.x,s.y,_e),V.map.texture.name=ee.name+".shadowMap",V.camera.updateProjectionMatrix()}i.setRenderTarget(V.map),i.clear();const le=V.getViewportCount();for(let _e=0;_e<le;_e++){const ke=V.getViewport(_e);r.set(a.x*ke.x,a.y*ke.y,a.x*ke.z,a.y*ke.w),k.viewport(r),V.updateMatrices(ee,_e),n=V.getFrustum(),y(R,I,V.camera,ee,this.type)}V.isPointLightShadow!==!0&&this.type===Ai&&v(V,I),V.needsUpdate=!1}p=this.type,m.needsUpdate=!1,i.setRenderTarget(_,M,L)};function v(T,R){const I=e.update(b);h.defines.VSM_SAMPLES!==T.blurSamples&&(h.defines.VSM_SAMPLES=T.blurSamples,f.defines.VSM_SAMPLES=T.blurSamples,h.needsUpdate=!0,f.needsUpdate=!0),T.mapPass===null&&(T.mapPass=new os(s.x,s.y)),h.uniforms.shadow_pass.value=T.map.texture,h.uniforms.resolution.value=T.mapSize,h.uniforms.radius.value=T.radius,i.setRenderTarget(T.mapPass),i.clear(),i.renderBufferDirect(R,null,I,h,b,null),f.uniforms.shadow_pass.value=T.mapPass.texture,f.uniforms.resolution.value=T.mapSize,f.uniforms.radius.value=T.radius,i.setRenderTarget(T.map),i.clear(),i.renderBufferDirect(R,null,I,f,b,null)}function x(T,R,I,_){let M=null;const L=I.isPointLight===!0?T.customDistanceMaterial:T.customDepthMaterial;if(L!==void 0)M=L;else if(M=I.isPointLight===!0?c:o,i.localClippingEnabled&&R.clipShadows===!0&&Array.isArray(R.clippingPlanes)&&R.clippingPlanes.length!==0||R.displacementMap&&R.displacementScale!==0||R.alphaMap&&R.alphaTest>0||R.map&&R.alphaTest>0){const k=M.uuid,P=R.uuid;let B=l[k];B===void 0&&(B={},l[k]=B);let H=B[P];H===void 0&&(H=M.clone(),B[P]=H,R.addEventListener("dispose",D)),M=H}if(M.visible=R.visible,M.wireframe=R.wireframe,_===Ai?M.side=R.shadowSide!==null?R.shadowSide:R.side:M.side=R.shadowSide!==null?R.shadowSide:u[R.side],M.alphaMap=R.alphaMap,M.alphaTest=R.alphaTest,M.map=R.map,M.clipShadows=R.clipShadows,M.clippingPlanes=R.clippingPlanes,M.clipIntersection=R.clipIntersection,M.displacementMap=R.displacementMap,M.displacementScale=R.displacementScale,M.displacementBias=R.displacementBias,M.wireframeLinewidth=R.wireframeLinewidth,M.linewidth=R.linewidth,I.isPointLight===!0&&M.isMeshDistanceMaterial===!0){const k=i.properties.get(M);k.light=I}return M}function y(T,R,I,_,M){if(T.visible===!1)return;if(T.layers.test(R.layers)&&(T.isMesh||T.isLine||T.isPoints)&&(T.castShadow||T.receiveShadow&&M===Ai)&&(!T.frustumCulled||n.intersectsObject(T))){T.modelViewMatrix.multiplyMatrices(I.matrixWorldInverse,T.matrixWorld);const P=e.update(T),B=T.material;if(Array.isArray(B)){const H=P.groups;for(let z=0,ee=H.length;z<ee;z++){const V=H[z],oe=B[V.materialIndex];if(oe&&oe.visible){const le=x(T,oe,_,M);T.onBeforeShadow(i,T,R,I,P,le,V),i.renderBufferDirect(I,null,P,le,T,V),T.onAfterShadow(i,T,R,I,P,le,V)}}}else if(B.visible){const H=x(T,B,_,M);T.onBeforeShadow(i,T,R,I,P,H,null),i.renderBufferDirect(I,null,P,H,T,null),T.onAfterShadow(i,T,R,I,P,H,null)}}const k=T.children;for(let P=0,B=k.length;P<B;P++)y(k[P],R,I,_,M)}function D(T){T.target.removeEventListener("dispose",D);for(const I in l){const _=l[I],M=T.target.uuid;M in _&&(_[M].dispose(),delete _[M])}}}const Gy={[ql]:jl,[Xl]:$l,[Yl]:Jl,[Ta]:Kl,[jl]:ql,[$l]:Xl,[Jl]:Yl,[Kl]:Ta};function Vy(i,e){function t(){let N=!1;const he=new tt;let $=null;const Z=new tt(0,0,0,0);return{setMask:function(be){$!==be&&!N&&(i.colorMask(be,be,be,be),$=be)},setLocked:function(be){N=be},setClear:function(be,me,We,Dt,an){an===!0&&(be*=Dt,me*=Dt,We*=Dt),he.set(be,me,We,Dt),Z.equals(he)===!1&&(i.clearColor(be,me,We,Dt),Z.copy(he))},reset:function(){N=!1,$=null,Z.set(-1,0,0,0)}}}function n(){let N=!1,he=!1,$=null,Z=null,be=null;return{setReversed:function(me){if(he!==me){const We=e.get("EXT_clip_control");he?We.clipControlEXT(We.LOWER_LEFT_EXT,We.ZERO_TO_ONE_EXT):We.clipControlEXT(We.LOWER_LEFT_EXT,We.NEGATIVE_ONE_TO_ONE_EXT);const Dt=be;be=null,this.setClear(Dt)}he=me},getReversed:function(){return he},setTest:function(me){me?ce(i.DEPTH_TEST):Ie(i.DEPTH_TEST)},setMask:function(me){$!==me&&!N&&(i.depthMask(me),$=me)},setFunc:function(me){if(he&&(me=Gy[me]),Z!==me){switch(me){case ql:i.depthFunc(i.NEVER);break;case jl:i.depthFunc(i.ALWAYS);break;case Xl:i.depthFunc(i.LESS);break;case Ta:i.depthFunc(i.LEQUAL);break;case Yl:i.depthFunc(i.EQUAL);break;case Kl:i.depthFunc(i.GEQUAL);break;case $l:i.depthFunc(i.GREATER);break;case Jl:i.depthFunc(i.NOTEQUAL);break;default:i.depthFunc(i.LEQUAL)}Z=me}},setLocked:function(me){N=me},setClear:function(me){be!==me&&(he&&(me=1-me),i.clearDepth(me),be=me)},reset:function(){N=!1,$=null,Z=null,be=null,he=!1}}}function s(){let N=!1,he=null,$=null,Z=null,be=null,me=null,We=null,Dt=null,an=null;return{setTest:function(ut){N||(ut?ce(i.STENCIL_TEST):Ie(i.STENCIL_TEST))},setMask:function(ut){he!==ut&&!N&&(i.stencilMask(ut),he=ut)},setFunc:function(ut,qn,xi){($!==ut||Z!==qn||be!==xi)&&(i.stencilFunc(ut,qn,xi),$=ut,Z=qn,be=xi)},setOp:function(ut,qn,xi){(me!==ut||We!==qn||Dt!==xi)&&(i.stencilOp(ut,qn,xi),me=ut,We=qn,Dt=xi)},setLocked:function(ut){N=ut},setClear:function(ut){an!==ut&&(i.clearStencil(ut),an=ut)},reset:function(){N=!1,he=null,$=null,Z=null,be=null,me=null,We=null,Dt=null,an=null}}}const a=new t,r=new n,o=new s,c=new WeakMap,l=new WeakMap;let d={},u={},h=new WeakMap,f=[],g=null,b=!1,m=null,p=null,v=null,x=null,y=null,D=null,T=null,R=new De(0,0,0),I=0,_=!1,M=null,L=null,k=null,P=null,B=null;const H=i.getParameter(i.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let z=!1,ee=0;const V=i.getParameter(i.VERSION);V.indexOf("WebGL")!==-1?(ee=parseFloat(/^WebGL (\d)/.exec(V)[1]),z=ee>=1):V.indexOf("OpenGL ES")!==-1&&(ee=parseFloat(/^OpenGL ES (\d)/.exec(V)[1]),z=ee>=2);let oe=null,le={};const _e=i.getParameter(i.SCISSOR_BOX),ke=i.getParameter(i.VIEWPORT),xe=new tt().fromArray(_e),Y=new tt().fromArray(ke);function te(N,he,$,Z){const be=new Uint8Array(4),me=i.createTexture();i.bindTexture(N,me),i.texParameteri(N,i.TEXTURE_MIN_FILTER,i.NEAREST),i.texParameteri(N,i.TEXTURE_MAG_FILTER,i.NEAREST);for(let We=0;We<$;We++)N===i.TEXTURE_3D||N===i.TEXTURE_2D_ARRAY?i.texImage3D(he,0,i.RGBA,1,1,Z,0,i.RGBA,i.UNSIGNED_BYTE,be):i.texImage2D(he+We,0,i.RGBA,1,1,0,i.RGBA,i.UNSIGNED_BYTE,be);return me}const ue={};ue[i.TEXTURE_2D]=te(i.TEXTURE_2D,i.TEXTURE_2D,1),ue[i.TEXTURE_CUBE_MAP]=te(i.TEXTURE_CUBE_MAP,i.TEXTURE_CUBE_MAP_POSITIVE_X,6),ue[i.TEXTURE_2D_ARRAY]=te(i.TEXTURE_2D_ARRAY,i.TEXTURE_2D_ARRAY,1,1),ue[i.TEXTURE_3D]=te(i.TEXTURE_3D,i.TEXTURE_3D,1,1),a.setClear(0,0,0,1),r.setClear(1),o.setClear(0),ce(i.DEPTH_TEST),r.setFunc(Ta),nt(!1),it(dh),ce(i.CULL_FACE),O(ns);function ce(N){d[N]!==!0&&(i.enable(N),d[N]=!0)}function Ie(N){d[N]!==!1&&(i.disable(N),d[N]=!1)}function Ve(N,he){return u[N]!==he?(i.bindFramebuffer(N,he),u[N]=he,N===i.DRAW_FRAMEBUFFER&&(u[i.FRAMEBUFFER]=he),N===i.FRAMEBUFFER&&(u[i.DRAW_FRAMEBUFFER]=he),!0):!1}function $e(N,he){let $=f,Z=!1;if(N){$=h.get(he),$===void 0&&($=[],h.set(he,$));const be=N.textures;if($.length!==be.length||$[0]!==i.COLOR_ATTACHMENT0){for(let me=0,We=be.length;me<We;me++)$[me]=i.COLOR_ATTACHMENT0+me;$.length=be.length,Z=!0}}else $[0]!==i.BACK&&($[0]=i.BACK,Z=!0);Z&&i.drawBuffers($)}function Ct(N){return g!==N?(i.useProgram(N),g=N,!0):!1}const at={[Ss]:i.FUNC_ADD,[Gg]:i.FUNC_SUBTRACT,[Vg]:i.FUNC_REVERSE_SUBTRACT};at[Wg]=i.MIN,at[qg]=i.MAX;const Bt={[jg]:i.ZERO,[Xg]:i.ONE,[Yg]:i.SRC_COLOR,[Vl]:i.SRC_ALPHA,[e0]:i.SRC_ALPHA_SATURATE,[Qg]:i.DST_COLOR,[$g]:i.DST_ALPHA,[Kg]:i.ONE_MINUS_SRC_COLOR,[Wl]:i.ONE_MINUS_SRC_ALPHA,[Zg]:i.ONE_MINUS_DST_COLOR,[Jg]:i.ONE_MINUS_DST_ALPHA,[t0]:i.CONSTANT_COLOR,[n0]:i.ONE_MINUS_CONSTANT_COLOR,[i0]:i.CONSTANT_ALPHA,[s0]:i.ONE_MINUS_CONSTANT_ALPHA};function O(N,he,$,Z,be,me,We,Dt,an,ut){if(N===ns){b===!0&&(Ie(i.BLEND),b=!1);return}if(b===!1&&(ce(i.BLEND),b=!0),N!==Hg){if(N!==m||ut!==_){if((p!==Ss||y!==Ss)&&(i.blendEquation(i.FUNC_ADD),p=Ss,y=Ss),ut)switch(N){case ma:i.blendFuncSeparate(i.ONE,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case Gl:i.blendFunc(i.ONE,i.ONE);break;case uh:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case hh:i.blendFuncSeparate(i.ZERO,i.SRC_COLOR,i.ZERO,i.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",N);break}else switch(N){case ma:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case Gl:i.blendFunc(i.SRC_ALPHA,i.ONE);break;case uh:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case hh:i.blendFunc(i.ZERO,i.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",N);break}v=null,x=null,D=null,T=null,R.set(0,0,0),I=0,m=N,_=ut}return}be=be||he,me=me||$,We=We||Z,(he!==p||be!==y)&&(i.blendEquationSeparate(at[he],at[be]),p=he,y=be),($!==v||Z!==x||me!==D||We!==T)&&(i.blendFuncSeparate(Bt[$],Bt[Z],Bt[me],Bt[We]),v=$,x=Z,D=me,T=We),(Dt.equals(R)===!1||an!==I)&&(i.blendColor(Dt.r,Dt.g,Dt.b,an),R.copy(Dt),I=an),m=N,_=!1}function Pn(N,he){N.side===nn?Ie(i.CULL_FACE):ce(i.CULL_FACE);let $=N.side===Gt;he&&($=!$),nt($),N.blending===ma&&N.transparent===!1?O(ns):O(N.blending,N.blendEquation,N.blendSrc,N.blendDst,N.blendEquationAlpha,N.blendSrcAlpha,N.blendDstAlpha,N.blendColor,N.blendAlpha,N.premultipliedAlpha),r.setFunc(N.depthFunc),r.setTest(N.depthTest),r.setMask(N.depthWrite),a.setMask(N.colorWrite);const Z=N.stencilWrite;o.setTest(Z),Z&&(o.setMask(N.stencilWriteMask),o.setFunc(N.stencilFunc,N.stencilRef,N.stencilFuncMask),o.setOp(N.stencilFail,N.stencilZFail,N.stencilZPass)),yt(N.polygonOffset,N.polygonOffsetFactor,N.polygonOffsetUnits),N.alphaToCoverage===!0?ce(i.SAMPLE_ALPHA_TO_COVERAGE):Ie(i.SAMPLE_ALPHA_TO_COVERAGE)}function nt(N){M!==N&&(N?i.frontFace(i.CW):i.frontFace(i.CCW),M=N)}function it(N){N!==Og?(ce(i.CULL_FACE),N!==L&&(N===dh?i.cullFace(i.BACK):N===Bg?i.cullFace(i.FRONT):i.cullFace(i.FRONT_AND_BACK))):Ie(i.CULL_FACE),L=N}function Fe(N){N!==k&&(z&&i.lineWidth(N),k=N)}function yt(N,he,$){N?(ce(i.POLYGON_OFFSET_FILL),(P!==he||B!==$)&&(i.polygonOffset(he,$),P=he,B=$)):Ie(i.POLYGON_OFFSET_FILL)}function Ne(N){N?ce(i.SCISSOR_TEST):Ie(i.SCISSOR_TEST)}function C(N){N===void 0&&(N=i.TEXTURE0+H-1),oe!==N&&(i.activeTexture(N),oe=N)}function w(N,he,$){$===void 0&&(oe===null?$=i.TEXTURE0+H-1:$=oe);let Z=le[$];Z===void 0&&(Z={type:void 0,texture:void 0},le[$]=Z),(Z.type!==N||Z.texture!==he)&&(oe!==$&&(i.activeTexture($),oe=$),i.bindTexture(N,he||ue[N]),Z.type=N,Z.texture=he)}function G(){const N=le[oe];N!==void 0&&N.type!==void 0&&(i.bindTexture(N.type,null),N.type=void 0,N.texture=void 0)}function Q(){try{i.compressedTexImage2D.apply(i,arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function ne(){try{i.compressedTexImage3D.apply(i,arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function J(){try{i.texSubImage2D.apply(i,arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function Pe(){try{i.texSubImage3D.apply(i,arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function fe(){try{i.compressedTexSubImage2D.apply(i,arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function ye(){try{i.compressedTexSubImage3D.apply(i,arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function rt(){try{i.texStorage2D.apply(i,arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function ae(){try{i.texStorage3D.apply(i,arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function Me(){try{i.texImage2D.apply(i,arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function Oe(){try{i.texImage3D.apply(i,arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function Be(N){xe.equals(N)===!1&&(i.scissor(N.x,N.y,N.z,N.w),xe.copy(N))}function Se(N){Y.equals(N)===!1&&(i.viewport(N.x,N.y,N.z,N.w),Y.copy(N))}function st(N,he){let $=l.get(he);$===void 0&&($=new WeakMap,l.set(he,$));let Z=$.get(N);Z===void 0&&(Z=i.getUniformBlockIndex(he,N.name),$.set(N,Z))}function Ye(N,he){const Z=l.get(he).get(N);c.get(he)!==Z&&(i.uniformBlockBinding(he,Z,N.__bindingPointIndex),c.set(he,Z))}function vt(){i.disable(i.BLEND),i.disable(i.CULL_FACE),i.disable(i.DEPTH_TEST),i.disable(i.POLYGON_OFFSET_FILL),i.disable(i.SCISSOR_TEST),i.disable(i.STENCIL_TEST),i.disable(i.SAMPLE_ALPHA_TO_COVERAGE),i.blendEquation(i.FUNC_ADD),i.blendFunc(i.ONE,i.ZERO),i.blendFuncSeparate(i.ONE,i.ZERO,i.ONE,i.ZERO),i.blendColor(0,0,0,0),i.colorMask(!0,!0,!0,!0),i.clearColor(0,0,0,0),i.depthMask(!0),i.depthFunc(i.LESS),r.setReversed(!1),i.clearDepth(1),i.stencilMask(4294967295),i.stencilFunc(i.ALWAYS,0,4294967295),i.stencilOp(i.KEEP,i.KEEP,i.KEEP),i.clearStencil(0),i.cullFace(i.BACK),i.frontFace(i.CCW),i.polygonOffset(0,0),i.activeTexture(i.TEXTURE0),i.bindFramebuffer(i.FRAMEBUFFER,null),i.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),i.bindFramebuffer(i.READ_FRAMEBUFFER,null),i.useProgram(null),i.lineWidth(1),i.scissor(0,0,i.canvas.width,i.canvas.height),i.viewport(0,0,i.canvas.width,i.canvas.height),d={},oe=null,le={},u={},h=new WeakMap,f=[],g=null,b=!1,m=null,p=null,v=null,x=null,y=null,D=null,T=null,R=new De(0,0,0),I=0,_=!1,M=null,L=null,k=null,P=null,B=null,xe.set(0,0,i.canvas.width,i.canvas.height),Y.set(0,0,i.canvas.width,i.canvas.height),a.reset(),r.reset(),o.reset()}return{buffers:{color:a,depth:r,stencil:o},enable:ce,disable:Ie,bindFramebuffer:Ve,drawBuffers:$e,useProgram:Ct,setBlending:O,setMaterial:Pn,setFlipSided:nt,setCullFace:it,setLineWidth:Fe,setPolygonOffset:yt,setScissorTest:Ne,activeTexture:C,bindTexture:w,unbindTexture:G,compressedTexImage2D:Q,compressedTexImage3D:ne,texImage2D:Me,texImage3D:Oe,updateUBOMapping:st,uniformBlockBinding:Ye,texStorage2D:rt,texStorage3D:ae,texSubImage2D:J,texSubImage3D:Pe,compressedTexSubImage2D:fe,compressedTexSubImage3D:ye,scissor:Be,viewport:Se,reset:vt}}function df(i,e,t,n){const s=Wy(n);switch(t){case Ip:return i*e;case Np:return i*e;case Fp:return i*e*2;case hu:return i*e/s.components*s.byteLength;case fu:return i*e/s.components*s.byteLength;case Up:return i*e*2/s.components*s.byteLength;case pu:return i*e*2/s.components*s.byteLength;case kp:return i*e*3/s.components*s.byteLength;case zn:return i*e*4/s.components*s.byteLength;case mu:return i*e*4/s.components*s.byteLength;case Go:case Vo:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*8;case Wo:case qo:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case td:case id:return Math.max(i,16)*Math.max(e,8)/4;case ed:case nd:return Math.max(i,8)*Math.max(e,8)/2;case sd:case ad:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*8;case rd:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case od:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case cd:return Math.floor((i+4)/5)*Math.floor((e+3)/4)*16;case ld:return Math.floor((i+4)/5)*Math.floor((e+4)/5)*16;case dd:return Math.floor((i+5)/6)*Math.floor((e+4)/5)*16;case ud:return Math.floor((i+5)/6)*Math.floor((e+5)/6)*16;case hd:return Math.floor((i+7)/8)*Math.floor((e+4)/5)*16;case fd:return Math.floor((i+7)/8)*Math.floor((e+5)/6)*16;case pd:return Math.floor((i+7)/8)*Math.floor((e+7)/8)*16;case md:return Math.floor((i+9)/10)*Math.floor((e+4)/5)*16;case gd:return Math.floor((i+9)/10)*Math.floor((e+5)/6)*16;case bd:return Math.floor((i+9)/10)*Math.floor((e+7)/8)*16;case vd:return Math.floor((i+9)/10)*Math.floor((e+9)/10)*16;case xd:return Math.floor((i+11)/12)*Math.floor((e+9)/10)*16;case _d:return Math.floor((i+11)/12)*Math.floor((e+11)/12)*16;case jo:case yd:case Md:return Math.ceil(i/4)*Math.ceil(e/4)*16;case Op:case Sd:return Math.ceil(i/4)*Math.ceil(e/4)*8;case wd:case Ed:return Math.ceil(i/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${t} format.`)}function Wy(i){switch(i){case Ui:case Pp:return{byteLength:1,components:1};case Ur:case Lp:case jr:return{byteLength:2,components:1};case du:case uu:return{byteLength:2,components:4};case rs:case lu:case ii:return{byteLength:4,components:1};case Dp:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${i}.`)}function qy(i,e,t,n,s,a,r){const o=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,c=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),l=new Ce,d=new WeakMap;let u;const h=new WeakMap;let f=!1;try{f=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function g(C,w){return f?new OffscreenCanvas(C,w):zr("canvas")}function b(C,w,G){let Q=1;const ne=Ne(C);if((ne.width>G||ne.height>G)&&(Q=G/Math.max(ne.width,ne.height)),Q<1)if(typeof HTMLImageElement<"u"&&C instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&C instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&C instanceof ImageBitmap||typeof VideoFrame<"u"&&C instanceof VideoFrame){const J=Math.floor(Q*ne.width),Pe=Math.floor(Q*ne.height);u===void 0&&(u=g(J,Pe));const fe=w?g(J,Pe):u;return fe.width=J,fe.height=Pe,fe.getContext("2d").drawImage(C,0,0,J,Pe),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+ne.width+"x"+ne.height+") to ("+J+"x"+Pe+")."),fe}else return"data"in C&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+ne.width+"x"+ne.height+")."),C;return C}function m(C){return C.generateMipmaps}function p(C){i.generateMipmap(C)}function v(C){return C.isWebGLCubeRenderTarget?i.TEXTURE_CUBE_MAP:C.isWebGL3DRenderTarget?i.TEXTURE_3D:C.isWebGLArrayRenderTarget||C.isCompressedArrayTexture?i.TEXTURE_2D_ARRAY:i.TEXTURE_2D}function x(C,w,G,Q,ne=!1){if(C!==null){if(i[C]!==void 0)return i[C];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+C+"'")}let J=w;if(w===i.RED&&(G===i.FLOAT&&(J=i.R32F),G===i.HALF_FLOAT&&(J=i.R16F),G===i.UNSIGNED_BYTE&&(J=i.R8)),w===i.RED_INTEGER&&(G===i.UNSIGNED_BYTE&&(J=i.R8UI),G===i.UNSIGNED_SHORT&&(J=i.R16UI),G===i.UNSIGNED_INT&&(J=i.R32UI),G===i.BYTE&&(J=i.R8I),G===i.SHORT&&(J=i.R16I),G===i.INT&&(J=i.R32I)),w===i.RG&&(G===i.FLOAT&&(J=i.RG32F),G===i.HALF_FLOAT&&(J=i.RG16F),G===i.UNSIGNED_BYTE&&(J=i.RG8)),w===i.RG_INTEGER&&(G===i.UNSIGNED_BYTE&&(J=i.RG8UI),G===i.UNSIGNED_SHORT&&(J=i.RG16UI),G===i.UNSIGNED_INT&&(J=i.RG32UI),G===i.BYTE&&(J=i.RG8I),G===i.SHORT&&(J=i.RG16I),G===i.INT&&(J=i.RG32I)),w===i.RGB_INTEGER&&(G===i.UNSIGNED_BYTE&&(J=i.RGB8UI),G===i.UNSIGNED_SHORT&&(J=i.RGB16UI),G===i.UNSIGNED_INT&&(J=i.RGB32UI),G===i.BYTE&&(J=i.RGB8I),G===i.SHORT&&(J=i.RGB16I),G===i.INT&&(J=i.RGB32I)),w===i.RGBA_INTEGER&&(G===i.UNSIGNED_BYTE&&(J=i.RGBA8UI),G===i.UNSIGNED_SHORT&&(J=i.RGBA16UI),G===i.UNSIGNED_INT&&(J=i.RGBA32UI),G===i.BYTE&&(J=i.RGBA8I),G===i.SHORT&&(J=i.RGBA16I),G===i.INT&&(J=i.RGBA32I)),w===i.RGB&&G===i.UNSIGNED_INT_5_9_9_9_REV&&(J=i.RGB9_E5),w===i.RGBA){const Pe=ne?Sc:et.getTransfer(Q);G===i.FLOAT&&(J=i.RGBA32F),G===i.HALF_FLOAT&&(J=i.RGBA16F),G===i.UNSIGNED_BYTE&&(J=Pe===pt?i.SRGB8_ALPHA8:i.RGBA8),G===i.UNSIGNED_SHORT_4_4_4_4&&(J=i.RGBA4),G===i.UNSIGNED_SHORT_5_5_5_1&&(J=i.RGB5_A1)}return(J===i.R16F||J===i.R32F||J===i.RG16F||J===i.RG32F||J===i.RGBA16F||J===i.RGBA32F)&&e.get("EXT_color_buffer_float"),J}function y(C,w){let G;return C?w===null||w===rs||w===Ca?G=i.DEPTH24_STENCIL8:w===ii?G=i.DEPTH32F_STENCIL8:w===Ur&&(G=i.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):w===null||w===rs||w===Ca?G=i.DEPTH_COMPONENT24:w===ii?G=i.DEPTH_COMPONENT32F:w===Ur&&(G=i.DEPTH_COMPONENT16),G}function D(C,w){return m(C)===!0||C.isFramebufferTexture&&C.minFilter!==Zt&&C.minFilter!==Qt?Math.log2(Math.max(w.width,w.height))+1:C.mipmaps!==void 0&&C.mipmaps.length>0?C.mipmaps.length:C.isCompressedTexture&&Array.isArray(C.image)?w.mipmaps.length:1}function T(C){const w=C.target;w.removeEventListener("dispose",T),I(w),w.isVideoTexture&&d.delete(w)}function R(C){const w=C.target;w.removeEventListener("dispose",R),M(w)}function I(C){const w=n.get(C);if(w.__webglInit===void 0)return;const G=C.source,Q=h.get(G);if(Q){const ne=Q[w.__cacheKey];ne.usedTimes--,ne.usedTimes===0&&_(C),Object.keys(Q).length===0&&h.delete(G)}n.remove(C)}function _(C){const w=n.get(C);i.deleteTexture(w.__webglTexture);const G=C.source,Q=h.get(G);delete Q[w.__cacheKey],r.memory.textures--}function M(C){const w=n.get(C);if(C.depthTexture&&(C.depthTexture.dispose(),n.remove(C.depthTexture)),C.isWebGLCubeRenderTarget)for(let Q=0;Q<6;Q++){if(Array.isArray(w.__webglFramebuffer[Q]))for(let ne=0;ne<w.__webglFramebuffer[Q].length;ne++)i.deleteFramebuffer(w.__webglFramebuffer[Q][ne]);else i.deleteFramebuffer(w.__webglFramebuffer[Q]);w.__webglDepthbuffer&&i.deleteRenderbuffer(w.__webglDepthbuffer[Q])}else{if(Array.isArray(w.__webglFramebuffer))for(let Q=0;Q<w.__webglFramebuffer.length;Q++)i.deleteFramebuffer(w.__webglFramebuffer[Q]);else i.deleteFramebuffer(w.__webglFramebuffer);if(w.__webglDepthbuffer&&i.deleteRenderbuffer(w.__webglDepthbuffer),w.__webglMultisampledFramebuffer&&i.deleteFramebuffer(w.__webglMultisampledFramebuffer),w.__webglColorRenderbuffer)for(let Q=0;Q<w.__webglColorRenderbuffer.length;Q++)w.__webglColorRenderbuffer[Q]&&i.deleteRenderbuffer(w.__webglColorRenderbuffer[Q]);w.__webglDepthRenderbuffer&&i.deleteRenderbuffer(w.__webglDepthRenderbuffer)}const G=C.textures;for(let Q=0,ne=G.length;Q<ne;Q++){const J=n.get(G[Q]);J.__webglTexture&&(i.deleteTexture(J.__webglTexture),r.memory.textures--),n.remove(G[Q])}n.remove(C)}let L=0;function k(){L=0}function P(){const C=L;return C>=s.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+C+" texture units while this GPU supports only "+s.maxTextures),L+=1,C}function B(C){const w=[];return w.push(C.wrapS),w.push(C.wrapT),w.push(C.wrapR||0),w.push(C.magFilter),w.push(C.minFilter),w.push(C.anisotropy),w.push(C.internalFormat),w.push(C.format),w.push(C.type),w.push(C.generateMipmaps),w.push(C.premultiplyAlpha),w.push(C.flipY),w.push(C.unpackAlignment),w.push(C.colorSpace),w.join()}function H(C,w){const G=n.get(C);if(C.isVideoTexture&&Fe(C),C.isRenderTargetTexture===!1&&C.version>0&&G.__version!==C.version){const Q=C.image;if(Q===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(Q.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{Y(G,C,w);return}}t.bindTexture(i.TEXTURE_2D,G.__webglTexture,i.TEXTURE0+w)}function z(C,w){const G=n.get(C);if(C.version>0&&G.__version!==C.version){Y(G,C,w);return}t.bindTexture(i.TEXTURE_2D_ARRAY,G.__webglTexture,i.TEXTURE0+w)}function ee(C,w){const G=n.get(C);if(C.version>0&&G.__version!==C.version){Y(G,C,w);return}t.bindTexture(i.TEXTURE_3D,G.__webglTexture,i.TEXTURE0+w)}function V(C,w){const G=n.get(C);if(C.version>0&&G.__version!==C.version){te(G,C,w);return}t.bindTexture(i.TEXTURE_CUBE_MAP,G.__webglTexture,i.TEXTURE0+w)}const oe={[Vn]:i.REPEAT,[es]:i.CLAMP_TO_EDGE,[sc]:i.MIRRORED_REPEAT},le={[Zt]:i.NEAREST,[Cp]:i.NEAREST_MIPMAP_NEAREST,[yr]:i.NEAREST_MIPMAP_LINEAR,[Qt]:i.LINEAR,[Ho]:i.LINEAR_MIPMAP_NEAREST,[Pi]:i.LINEAR_MIPMAP_LINEAR},_e={[x0]:i.NEVER,[E0]:i.ALWAYS,[_0]:i.LESS,[Hp]:i.LEQUAL,[y0]:i.EQUAL,[w0]:i.GEQUAL,[M0]:i.GREATER,[S0]:i.NOTEQUAL};function ke(C,w){if(w.type===ii&&e.has("OES_texture_float_linear")===!1&&(w.magFilter===Qt||w.magFilter===Ho||w.magFilter===yr||w.magFilter===Pi||w.minFilter===Qt||w.minFilter===Ho||w.minFilter===yr||w.minFilter===Pi)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),i.texParameteri(C,i.TEXTURE_WRAP_S,oe[w.wrapS]),i.texParameteri(C,i.TEXTURE_WRAP_T,oe[w.wrapT]),(C===i.TEXTURE_3D||C===i.TEXTURE_2D_ARRAY)&&i.texParameteri(C,i.TEXTURE_WRAP_R,oe[w.wrapR]),i.texParameteri(C,i.TEXTURE_MAG_FILTER,le[w.magFilter]),i.texParameteri(C,i.TEXTURE_MIN_FILTER,le[w.minFilter]),w.compareFunction&&(i.texParameteri(C,i.TEXTURE_COMPARE_MODE,i.COMPARE_REF_TO_TEXTURE),i.texParameteri(C,i.TEXTURE_COMPARE_FUNC,_e[w.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(w.magFilter===Zt||w.minFilter!==yr&&w.minFilter!==Pi||w.type===ii&&e.has("OES_texture_float_linear")===!1)return;if(w.anisotropy>1||n.get(w).__currentAnisotropy){const G=e.get("EXT_texture_filter_anisotropic");i.texParameterf(C,G.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(w.anisotropy,s.getMaxAnisotropy())),n.get(w).__currentAnisotropy=w.anisotropy}}}function xe(C,w){let G=!1;C.__webglInit===void 0&&(C.__webglInit=!0,w.addEventListener("dispose",T));const Q=w.source;let ne=h.get(Q);ne===void 0&&(ne={},h.set(Q,ne));const J=B(w);if(J!==C.__cacheKey){ne[J]===void 0&&(ne[J]={texture:i.createTexture(),usedTimes:0},r.memory.textures++,G=!0),ne[J].usedTimes++;const Pe=ne[C.__cacheKey];Pe!==void 0&&(ne[C.__cacheKey].usedTimes--,Pe.usedTimes===0&&_(w)),C.__cacheKey=J,C.__webglTexture=ne[J].texture}return G}function Y(C,w,G){let Q=i.TEXTURE_2D;(w.isDataArrayTexture||w.isCompressedArrayTexture)&&(Q=i.TEXTURE_2D_ARRAY),w.isData3DTexture&&(Q=i.TEXTURE_3D);const ne=xe(C,w),J=w.source;t.bindTexture(Q,C.__webglTexture,i.TEXTURE0+G);const Pe=n.get(J);if(J.version!==Pe.__version||ne===!0){t.activeTexture(i.TEXTURE0+G);const fe=et.getPrimaries(et.workingColorSpace),ye=w.colorSpace===Qi?null:et.getPrimaries(w.colorSpace),rt=w.colorSpace===Qi||fe===ye?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,w.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,w.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,w.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,rt);let ae=b(w.image,!1,s.maxTextureSize);ae=yt(w,ae);const Me=a.convert(w.format,w.colorSpace),Oe=a.convert(w.type);let Be=x(w.internalFormat,Me,Oe,w.colorSpace,w.isVideoTexture);ke(Q,w);let Se;const st=w.mipmaps,Ye=w.isVideoTexture!==!0,vt=Pe.__version===void 0||ne===!0,N=J.dataReady,he=D(w,ae);if(w.isDepthTexture)Be=y(w.format===Pa,w.type),vt&&(Ye?t.texStorage2D(i.TEXTURE_2D,1,Be,ae.width,ae.height):t.texImage2D(i.TEXTURE_2D,0,Be,ae.width,ae.height,0,Me,Oe,null));else if(w.isDataTexture)if(st.length>0){Ye&&vt&&t.texStorage2D(i.TEXTURE_2D,he,Be,st[0].width,st[0].height);for(let $=0,Z=st.length;$<Z;$++)Se=st[$],Ye?N&&t.texSubImage2D(i.TEXTURE_2D,$,0,0,Se.width,Se.height,Me,Oe,Se.data):t.texImage2D(i.TEXTURE_2D,$,Be,Se.width,Se.height,0,Me,Oe,Se.data);w.generateMipmaps=!1}else Ye?(vt&&t.texStorage2D(i.TEXTURE_2D,he,Be,ae.width,ae.height),N&&t.texSubImage2D(i.TEXTURE_2D,0,0,0,ae.width,ae.height,Me,Oe,ae.data)):t.texImage2D(i.TEXTURE_2D,0,Be,ae.width,ae.height,0,Me,Oe,ae.data);else if(w.isCompressedTexture)if(w.isCompressedArrayTexture){Ye&&vt&&t.texStorage3D(i.TEXTURE_2D_ARRAY,he,Be,st[0].width,st[0].height,ae.depth);for(let $=0,Z=st.length;$<Z;$++)if(Se=st[$],w.format!==zn)if(Me!==null)if(Ye){if(N)if(w.layerUpdates.size>0){const be=df(Se.width,Se.height,w.format,w.type);for(const me of w.layerUpdates){const We=Se.data.subarray(me*be/Se.data.BYTES_PER_ELEMENT,(me+1)*be/Se.data.BYTES_PER_ELEMENT);t.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,$,0,0,me,Se.width,Se.height,1,Me,We)}w.clearLayerUpdates()}else t.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,$,0,0,0,Se.width,Se.height,ae.depth,Me,Se.data)}else t.compressedTexImage3D(i.TEXTURE_2D_ARRAY,$,Be,Se.width,Se.height,ae.depth,0,Se.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else Ye?N&&t.texSubImage3D(i.TEXTURE_2D_ARRAY,$,0,0,0,Se.width,Se.height,ae.depth,Me,Oe,Se.data):t.texImage3D(i.TEXTURE_2D_ARRAY,$,Be,Se.width,Se.height,ae.depth,0,Me,Oe,Se.data)}else{Ye&&vt&&t.texStorage2D(i.TEXTURE_2D,he,Be,st[0].width,st[0].height);for(let $=0,Z=st.length;$<Z;$++)Se=st[$],w.format!==zn?Me!==null?Ye?N&&t.compressedTexSubImage2D(i.TEXTURE_2D,$,0,0,Se.width,Se.height,Me,Se.data):t.compressedTexImage2D(i.TEXTURE_2D,$,Be,Se.width,Se.height,0,Se.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Ye?N&&t.texSubImage2D(i.TEXTURE_2D,$,0,0,Se.width,Se.height,Me,Oe,Se.data):t.texImage2D(i.TEXTURE_2D,$,Be,Se.width,Se.height,0,Me,Oe,Se.data)}else if(w.isDataArrayTexture)if(Ye){if(vt&&t.texStorage3D(i.TEXTURE_2D_ARRAY,he,Be,ae.width,ae.height,ae.depth),N)if(w.layerUpdates.size>0){const $=df(ae.width,ae.height,w.format,w.type);for(const Z of w.layerUpdates){const be=ae.data.subarray(Z*$/ae.data.BYTES_PER_ELEMENT,(Z+1)*$/ae.data.BYTES_PER_ELEMENT);t.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,Z,ae.width,ae.height,1,Me,Oe,be)}w.clearLayerUpdates()}else t.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,0,ae.width,ae.height,ae.depth,Me,Oe,ae.data)}else t.texImage3D(i.TEXTURE_2D_ARRAY,0,Be,ae.width,ae.height,ae.depth,0,Me,Oe,ae.data);else if(w.isData3DTexture)Ye?(vt&&t.texStorage3D(i.TEXTURE_3D,he,Be,ae.width,ae.height,ae.depth),N&&t.texSubImage3D(i.TEXTURE_3D,0,0,0,0,ae.width,ae.height,ae.depth,Me,Oe,ae.data)):t.texImage3D(i.TEXTURE_3D,0,Be,ae.width,ae.height,ae.depth,0,Me,Oe,ae.data);else if(w.isFramebufferTexture){if(vt)if(Ye)t.texStorage2D(i.TEXTURE_2D,he,Be,ae.width,ae.height);else{let $=ae.width,Z=ae.height;for(let be=0;be<he;be++)t.texImage2D(i.TEXTURE_2D,be,Be,$,Z,0,Me,Oe,null),$>>=1,Z>>=1}}else if(st.length>0){if(Ye&&vt){const $=Ne(st[0]);t.texStorage2D(i.TEXTURE_2D,he,Be,$.width,$.height)}for(let $=0,Z=st.length;$<Z;$++)Se=st[$],Ye?N&&t.texSubImage2D(i.TEXTURE_2D,$,0,0,Me,Oe,Se):t.texImage2D(i.TEXTURE_2D,$,Be,Me,Oe,Se);w.generateMipmaps=!1}else if(Ye){if(vt){const $=Ne(ae);t.texStorage2D(i.TEXTURE_2D,he,Be,$.width,$.height)}N&&t.texSubImage2D(i.TEXTURE_2D,0,0,0,Me,Oe,ae)}else t.texImage2D(i.TEXTURE_2D,0,Be,Me,Oe,ae);m(w)&&p(Q),Pe.__version=J.version,w.onUpdate&&w.onUpdate(w)}C.__version=w.version}function te(C,w,G){if(w.image.length!==6)return;const Q=xe(C,w),ne=w.source;t.bindTexture(i.TEXTURE_CUBE_MAP,C.__webglTexture,i.TEXTURE0+G);const J=n.get(ne);if(ne.version!==J.__version||Q===!0){t.activeTexture(i.TEXTURE0+G);const Pe=et.getPrimaries(et.workingColorSpace),fe=w.colorSpace===Qi?null:et.getPrimaries(w.colorSpace),ye=w.colorSpace===Qi||Pe===fe?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,w.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,w.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,w.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,ye);const rt=w.isCompressedTexture||w.image[0].isCompressedTexture,ae=w.image[0]&&w.image[0].isDataTexture,Me=[];for(let Z=0;Z<6;Z++)!rt&&!ae?Me[Z]=b(w.image[Z],!0,s.maxCubemapSize):Me[Z]=ae?w.image[Z].image:w.image[Z],Me[Z]=yt(w,Me[Z]);const Oe=Me[0],Be=a.convert(w.format,w.colorSpace),Se=a.convert(w.type),st=x(w.internalFormat,Be,Se,w.colorSpace),Ye=w.isVideoTexture!==!0,vt=J.__version===void 0||Q===!0,N=ne.dataReady;let he=D(w,Oe);ke(i.TEXTURE_CUBE_MAP,w);let $;if(rt){Ye&&vt&&t.texStorage2D(i.TEXTURE_CUBE_MAP,he,st,Oe.width,Oe.height);for(let Z=0;Z<6;Z++){$=Me[Z].mipmaps;for(let be=0;be<$.length;be++){const me=$[be];w.format!==zn?Be!==null?Ye?N&&t.compressedTexSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Z,be,0,0,me.width,me.height,Be,me.data):t.compressedTexImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Z,be,st,me.width,me.height,0,me.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):Ye?N&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Z,be,0,0,me.width,me.height,Be,Se,me.data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Z,be,st,me.width,me.height,0,Be,Se,me.data)}}}else{if($=w.mipmaps,Ye&&vt){$.length>0&&he++;const Z=Ne(Me[0]);t.texStorage2D(i.TEXTURE_CUBE_MAP,he,st,Z.width,Z.height)}for(let Z=0;Z<6;Z++)if(ae){Ye?N&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Z,0,0,0,Me[Z].width,Me[Z].height,Be,Se,Me[Z].data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Z,0,st,Me[Z].width,Me[Z].height,0,Be,Se,Me[Z].data);for(let be=0;be<$.length;be++){const We=$[be].image[Z].image;Ye?N&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Z,be+1,0,0,We.width,We.height,Be,Se,We.data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Z,be+1,st,We.width,We.height,0,Be,Se,We.data)}}else{Ye?N&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Z,0,0,0,Be,Se,Me[Z]):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Z,0,st,Be,Se,Me[Z]);for(let be=0;be<$.length;be++){const me=$[be];Ye?N&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Z,be+1,0,0,Be,Se,me.image[Z]):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Z,be+1,st,Be,Se,me.image[Z])}}}m(w)&&p(i.TEXTURE_CUBE_MAP),J.__version=ne.version,w.onUpdate&&w.onUpdate(w)}C.__version=w.version}function ue(C,w,G,Q,ne,J){const Pe=a.convert(G.format,G.colorSpace),fe=a.convert(G.type),ye=x(G.internalFormat,Pe,fe,G.colorSpace),rt=n.get(w),ae=n.get(G);if(ae.__renderTarget=w,!rt.__hasExternalTextures){const Me=Math.max(1,w.width>>J),Oe=Math.max(1,w.height>>J);ne===i.TEXTURE_3D||ne===i.TEXTURE_2D_ARRAY?t.texImage3D(ne,J,ye,Me,Oe,w.depth,0,Pe,fe,null):t.texImage2D(ne,J,ye,Me,Oe,0,Pe,fe,null)}t.bindFramebuffer(i.FRAMEBUFFER,C),it(w)?o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,Q,ne,ae.__webglTexture,0,nt(w)):(ne===i.TEXTURE_2D||ne>=i.TEXTURE_CUBE_MAP_POSITIVE_X&&ne<=i.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&i.framebufferTexture2D(i.FRAMEBUFFER,Q,ne,ae.__webglTexture,J),t.bindFramebuffer(i.FRAMEBUFFER,null)}function ce(C,w,G){if(i.bindRenderbuffer(i.RENDERBUFFER,C),w.depthBuffer){const Q=w.depthTexture,ne=Q&&Q.isDepthTexture?Q.type:null,J=y(w.stencilBuffer,ne),Pe=w.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,fe=nt(w);it(w)?o.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,fe,J,w.width,w.height):G?i.renderbufferStorageMultisample(i.RENDERBUFFER,fe,J,w.width,w.height):i.renderbufferStorage(i.RENDERBUFFER,J,w.width,w.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,Pe,i.RENDERBUFFER,C)}else{const Q=w.textures;for(let ne=0;ne<Q.length;ne++){const J=Q[ne],Pe=a.convert(J.format,J.colorSpace),fe=a.convert(J.type),ye=x(J.internalFormat,Pe,fe,J.colorSpace),rt=nt(w);G&&it(w)===!1?i.renderbufferStorageMultisample(i.RENDERBUFFER,rt,ye,w.width,w.height):it(w)?o.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,rt,ye,w.width,w.height):i.renderbufferStorage(i.RENDERBUFFER,ye,w.width,w.height)}}i.bindRenderbuffer(i.RENDERBUFFER,null)}function Ie(C,w){if(w&&w.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(t.bindFramebuffer(i.FRAMEBUFFER,C),!(w.depthTexture&&w.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");const Q=n.get(w.depthTexture);Q.__renderTarget=w,(!Q.__webglTexture||w.depthTexture.image.width!==w.width||w.depthTexture.image.height!==w.height)&&(w.depthTexture.image.width=w.width,w.depthTexture.image.height=w.height,w.depthTexture.needsUpdate=!0),H(w.depthTexture,0);const ne=Q.__webglTexture,J=nt(w);if(w.depthTexture.format===ga)it(w)?o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,ne,0,J):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,ne,0);else if(w.depthTexture.format===Pa)it(w)?o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,ne,0,J):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,ne,0);else throw new Error("Unknown depthTexture format")}function Ve(C){const w=n.get(C),G=C.isWebGLCubeRenderTarget===!0;if(w.__boundDepthTexture!==C.depthTexture){const Q=C.depthTexture;if(w.__depthDisposeCallback&&w.__depthDisposeCallback(),Q){const ne=()=>{delete w.__boundDepthTexture,delete w.__depthDisposeCallback,Q.removeEventListener("dispose",ne)};Q.addEventListener("dispose",ne),w.__depthDisposeCallback=ne}w.__boundDepthTexture=Q}if(C.depthTexture&&!w.__autoAllocateDepthBuffer){if(G)throw new Error("target.depthTexture not supported in Cube render targets");Ie(w.__webglFramebuffer,C)}else if(G){w.__webglDepthbuffer=[];for(let Q=0;Q<6;Q++)if(t.bindFramebuffer(i.FRAMEBUFFER,w.__webglFramebuffer[Q]),w.__webglDepthbuffer[Q]===void 0)w.__webglDepthbuffer[Q]=i.createRenderbuffer(),ce(w.__webglDepthbuffer[Q],C,!1);else{const ne=C.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,J=w.__webglDepthbuffer[Q];i.bindRenderbuffer(i.RENDERBUFFER,J),i.framebufferRenderbuffer(i.FRAMEBUFFER,ne,i.RENDERBUFFER,J)}}else if(t.bindFramebuffer(i.FRAMEBUFFER,w.__webglFramebuffer),w.__webglDepthbuffer===void 0)w.__webglDepthbuffer=i.createRenderbuffer(),ce(w.__webglDepthbuffer,C,!1);else{const Q=C.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,ne=w.__webglDepthbuffer;i.bindRenderbuffer(i.RENDERBUFFER,ne),i.framebufferRenderbuffer(i.FRAMEBUFFER,Q,i.RENDERBUFFER,ne)}t.bindFramebuffer(i.FRAMEBUFFER,null)}function $e(C,w,G){const Q=n.get(C);w!==void 0&&ue(Q.__webglFramebuffer,C,C.texture,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,0),G!==void 0&&Ve(C)}function Ct(C){const w=C.texture,G=n.get(C),Q=n.get(w);C.addEventListener("dispose",R);const ne=C.textures,J=C.isWebGLCubeRenderTarget===!0,Pe=ne.length>1;if(Pe||(Q.__webglTexture===void 0&&(Q.__webglTexture=i.createTexture()),Q.__version=w.version,r.memory.textures++),J){G.__webglFramebuffer=[];for(let fe=0;fe<6;fe++)if(w.mipmaps&&w.mipmaps.length>0){G.__webglFramebuffer[fe]=[];for(let ye=0;ye<w.mipmaps.length;ye++)G.__webglFramebuffer[fe][ye]=i.createFramebuffer()}else G.__webglFramebuffer[fe]=i.createFramebuffer()}else{if(w.mipmaps&&w.mipmaps.length>0){G.__webglFramebuffer=[];for(let fe=0;fe<w.mipmaps.length;fe++)G.__webglFramebuffer[fe]=i.createFramebuffer()}else G.__webglFramebuffer=i.createFramebuffer();if(Pe)for(let fe=0,ye=ne.length;fe<ye;fe++){const rt=n.get(ne[fe]);rt.__webglTexture===void 0&&(rt.__webglTexture=i.createTexture(),r.memory.textures++)}if(C.samples>0&&it(C)===!1){G.__webglMultisampledFramebuffer=i.createFramebuffer(),G.__webglColorRenderbuffer=[],t.bindFramebuffer(i.FRAMEBUFFER,G.__webglMultisampledFramebuffer);for(let fe=0;fe<ne.length;fe++){const ye=ne[fe];G.__webglColorRenderbuffer[fe]=i.createRenderbuffer(),i.bindRenderbuffer(i.RENDERBUFFER,G.__webglColorRenderbuffer[fe]);const rt=a.convert(ye.format,ye.colorSpace),ae=a.convert(ye.type),Me=x(ye.internalFormat,rt,ae,ye.colorSpace,C.isXRRenderTarget===!0),Oe=nt(C);i.renderbufferStorageMultisample(i.RENDERBUFFER,Oe,Me,C.width,C.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+fe,i.RENDERBUFFER,G.__webglColorRenderbuffer[fe])}i.bindRenderbuffer(i.RENDERBUFFER,null),C.depthBuffer&&(G.__webglDepthRenderbuffer=i.createRenderbuffer(),ce(G.__webglDepthRenderbuffer,C,!0)),t.bindFramebuffer(i.FRAMEBUFFER,null)}}if(J){t.bindTexture(i.TEXTURE_CUBE_MAP,Q.__webglTexture),ke(i.TEXTURE_CUBE_MAP,w);for(let fe=0;fe<6;fe++)if(w.mipmaps&&w.mipmaps.length>0)for(let ye=0;ye<w.mipmaps.length;ye++)ue(G.__webglFramebuffer[fe][ye],C,w,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+fe,ye);else ue(G.__webglFramebuffer[fe],C,w,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+fe,0);m(w)&&p(i.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(Pe){for(let fe=0,ye=ne.length;fe<ye;fe++){const rt=ne[fe],ae=n.get(rt);t.bindTexture(i.TEXTURE_2D,ae.__webglTexture),ke(i.TEXTURE_2D,rt),ue(G.__webglFramebuffer,C,rt,i.COLOR_ATTACHMENT0+fe,i.TEXTURE_2D,0),m(rt)&&p(i.TEXTURE_2D)}t.unbindTexture()}else{let fe=i.TEXTURE_2D;if((C.isWebGL3DRenderTarget||C.isWebGLArrayRenderTarget)&&(fe=C.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),t.bindTexture(fe,Q.__webglTexture),ke(fe,w),w.mipmaps&&w.mipmaps.length>0)for(let ye=0;ye<w.mipmaps.length;ye++)ue(G.__webglFramebuffer[ye],C,w,i.COLOR_ATTACHMENT0,fe,ye);else ue(G.__webglFramebuffer,C,w,i.COLOR_ATTACHMENT0,fe,0);m(w)&&p(fe),t.unbindTexture()}C.depthBuffer&&Ve(C)}function at(C){const w=C.textures;for(let G=0,Q=w.length;G<Q;G++){const ne=w[G];if(m(ne)){const J=v(C),Pe=n.get(ne).__webglTexture;t.bindTexture(J,Pe),p(J),t.unbindTexture()}}}const Bt=[],O=[];function Pn(C){if(C.samples>0){if(it(C)===!1){const w=C.textures,G=C.width,Q=C.height;let ne=i.COLOR_BUFFER_BIT;const J=C.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,Pe=n.get(C),fe=w.length>1;if(fe)for(let ye=0;ye<w.length;ye++)t.bindFramebuffer(i.FRAMEBUFFER,Pe.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+ye,i.RENDERBUFFER,null),t.bindFramebuffer(i.FRAMEBUFFER,Pe.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+ye,i.TEXTURE_2D,null,0);t.bindFramebuffer(i.READ_FRAMEBUFFER,Pe.__webglMultisampledFramebuffer),t.bindFramebuffer(i.DRAW_FRAMEBUFFER,Pe.__webglFramebuffer);for(let ye=0;ye<w.length;ye++){if(C.resolveDepthBuffer&&(C.depthBuffer&&(ne|=i.DEPTH_BUFFER_BIT),C.stencilBuffer&&C.resolveStencilBuffer&&(ne|=i.STENCIL_BUFFER_BIT)),fe){i.framebufferRenderbuffer(i.READ_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.RENDERBUFFER,Pe.__webglColorRenderbuffer[ye]);const rt=n.get(w[ye]).__webglTexture;i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,rt,0)}i.blitFramebuffer(0,0,G,Q,0,0,G,Q,ne,i.NEAREST),c===!0&&(Bt.length=0,O.length=0,Bt.push(i.COLOR_ATTACHMENT0+ye),C.depthBuffer&&C.resolveDepthBuffer===!1&&(Bt.push(J),O.push(J),i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,O)),i.invalidateFramebuffer(i.READ_FRAMEBUFFER,Bt))}if(t.bindFramebuffer(i.READ_FRAMEBUFFER,null),t.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),fe)for(let ye=0;ye<w.length;ye++){t.bindFramebuffer(i.FRAMEBUFFER,Pe.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+ye,i.RENDERBUFFER,Pe.__webglColorRenderbuffer[ye]);const rt=n.get(w[ye]).__webglTexture;t.bindFramebuffer(i.FRAMEBUFFER,Pe.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+ye,i.TEXTURE_2D,rt,0)}t.bindFramebuffer(i.DRAW_FRAMEBUFFER,Pe.__webglMultisampledFramebuffer)}else if(C.depthBuffer&&C.resolveDepthBuffer===!1&&c){const w=C.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,[w])}}}function nt(C){return Math.min(s.maxSamples,C.samples)}function it(C){const w=n.get(C);return C.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&w.__useRenderToTexture!==!1}function Fe(C){const w=r.render.frame;d.get(C)!==w&&(d.set(C,w),C.update())}function yt(C,w){const G=C.colorSpace,Q=C.format,ne=C.type;return C.isCompressedTexture===!0||C.isVideoTexture===!0||G!==bn&&G!==Qi&&(et.getTransfer(G)===pt?(Q!==zn||ne!==Ui)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",G)),w}function Ne(C){return typeof HTMLImageElement<"u"&&C instanceof HTMLImageElement?(l.width=C.naturalWidth||C.width,l.height=C.naturalHeight||C.height):typeof VideoFrame<"u"&&C instanceof VideoFrame?(l.width=C.displayWidth,l.height=C.displayHeight):(l.width=C.width,l.height=C.height),l}this.allocateTextureUnit=P,this.resetTextureUnits=k,this.setTexture2D=H,this.setTexture2DArray=z,this.setTexture3D=ee,this.setTextureCube=V,this.rebindTextures=$e,this.setupRenderTarget=Ct,this.updateRenderTargetMipmap=at,this.updateMultisampleRenderTarget=Pn,this.setupDepthRenderbuffer=Ve,this.setupFrameBufferTexture=ue,this.useMultisampledRTT=it}function jy(i,e){function t(n,s=Qi){let a;const r=et.getTransfer(s);if(n===Ui)return i.UNSIGNED_BYTE;if(n===du)return i.UNSIGNED_SHORT_4_4_4_4;if(n===uu)return i.UNSIGNED_SHORT_5_5_5_1;if(n===Dp)return i.UNSIGNED_INT_5_9_9_9_REV;if(n===Pp)return i.BYTE;if(n===Lp)return i.SHORT;if(n===Ur)return i.UNSIGNED_SHORT;if(n===lu)return i.INT;if(n===rs)return i.UNSIGNED_INT;if(n===ii)return i.FLOAT;if(n===jr)return i.HALF_FLOAT;if(n===Ip)return i.ALPHA;if(n===kp)return i.RGB;if(n===zn)return i.RGBA;if(n===Np)return i.LUMINANCE;if(n===Fp)return i.LUMINANCE_ALPHA;if(n===ga)return i.DEPTH_COMPONENT;if(n===Pa)return i.DEPTH_STENCIL;if(n===hu)return i.RED;if(n===fu)return i.RED_INTEGER;if(n===Up)return i.RG;if(n===pu)return i.RG_INTEGER;if(n===mu)return i.RGBA_INTEGER;if(n===Go||n===Vo||n===Wo||n===qo)if(r===pt)if(a=e.get("WEBGL_compressed_texture_s3tc_srgb"),a!==null){if(n===Go)return a.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===Vo)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===Wo)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===qo)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(a=e.get("WEBGL_compressed_texture_s3tc"),a!==null){if(n===Go)return a.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===Vo)return a.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===Wo)return a.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===qo)return a.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===ed||n===td||n===nd||n===id)if(a=e.get("WEBGL_compressed_texture_pvrtc"),a!==null){if(n===ed)return a.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===td)return a.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===nd)return a.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===id)return a.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===sd||n===ad||n===rd)if(a=e.get("WEBGL_compressed_texture_etc"),a!==null){if(n===sd||n===ad)return r===pt?a.COMPRESSED_SRGB8_ETC2:a.COMPRESSED_RGB8_ETC2;if(n===rd)return r===pt?a.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:a.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(n===od||n===cd||n===ld||n===dd||n===ud||n===hd||n===fd||n===pd||n===md||n===gd||n===bd||n===vd||n===xd||n===_d)if(a=e.get("WEBGL_compressed_texture_astc"),a!==null){if(n===od)return r===pt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:a.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===cd)return r===pt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:a.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===ld)return r===pt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:a.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===dd)return r===pt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:a.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===ud)return r===pt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:a.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===hd)return r===pt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:a.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===fd)return r===pt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:a.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===pd)return r===pt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:a.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===md)return r===pt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:a.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===gd)return r===pt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:a.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===bd)return r===pt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:a.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===vd)return r===pt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:a.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===xd)return r===pt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:a.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===_d)return r===pt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:a.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===jo||n===yd||n===Md)if(a=e.get("EXT_texture_compression_bptc"),a!==null){if(n===jo)return r===pt?a.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:a.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===yd)return a.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===Md)return a.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===Op||n===Sd||n===wd||n===Ed)if(a=e.get("EXT_texture_compression_rgtc"),a!==null){if(n===jo)return a.COMPRESSED_RED_RGTC1_EXT;if(n===Sd)return a.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===wd)return a.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===Ed)return a.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===Ca?i.UNSIGNED_INT_24_8:i[n]!==void 0?i[n]:null}return{convert:t}}class Xy extends tn{constructor(e=[]){super(),this.isArrayCamera=!0,this.cameras=e}}class Ue extends Rt{constructor(){super(),this.isGroup=!0,this.type="Group"}}const Yy={type:"move"};class bl{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Ue,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Ue,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new A,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new A),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Ue,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new A,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new A),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const t=this._hand;if(t)for(const n of e.hand.values())this._getHandJoint(t,n)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,n){let s=null,a=null,r=null;const o=this._targetRay,c=this._grip,l=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(l&&e.hand){r=!0;for(const b of e.hand.values()){const m=t.getJointPose(b,n),p=this._getHandJoint(l,b);m!==null&&(p.matrix.fromArray(m.transform.matrix),p.matrix.decompose(p.position,p.rotation,p.scale),p.matrixWorldNeedsUpdate=!0,p.jointRadius=m.radius),p.visible=m!==null}const d=l.joints["index-finger-tip"],u=l.joints["thumb-tip"],h=d.position.distanceTo(u.position),f=.02,g=.005;l.inputState.pinching&&h>f+g?(l.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!l.inputState.pinching&&h<=f-g&&(l.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else c!==null&&e.gripSpace&&(a=t.getPose(e.gripSpace,n),a!==null&&(c.matrix.fromArray(a.transform.matrix),c.matrix.decompose(c.position,c.rotation,c.scale),c.matrixWorldNeedsUpdate=!0,a.linearVelocity?(c.hasLinearVelocity=!0,c.linearVelocity.copy(a.linearVelocity)):c.hasLinearVelocity=!1,a.angularVelocity?(c.hasAngularVelocity=!0,c.angularVelocity.copy(a.angularVelocity)):c.hasAngularVelocity=!1));o!==null&&(s=t.getPose(e.targetRaySpace,n),s===null&&a!==null&&(s=a),s!==null&&(o.matrix.fromArray(s.transform.matrix),o.matrix.decompose(o.position,o.rotation,o.scale),o.matrixWorldNeedsUpdate=!0,s.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(s.linearVelocity)):o.hasLinearVelocity=!1,s.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(s.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent(Yy)))}return o!==null&&(o.visible=s!==null),c!==null&&(c.visible=a!==null),l!==null&&(l.visible=r!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){const n=new Ue;n.matrixAutoUpdate=!1,n.visible=!1,e.joints[t.jointName]=n,e.add(n)}return e.joints[t.jointName]}}const Ky=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,$y=`
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

}`;class Jy{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t,n){if(this.texture===null){const s=new Ft,a=e.properties.get(s);a.__webglTexture=t.texture,(t.depthNear!=n.depthNear||t.depthFar!=n.depthFar)&&(this.depthNear=t.depthNear,this.depthFar=t.depthFar),this.texture=s}}getMesh(e){if(this.texture!==null&&this.mesh===null){const t=e.cameras[0].viewport,n=new un({vertexShader:Ky,fragmentShader:$y,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new j(new qt(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class Qy extends qa{constructor(e,t){super();const n=this;let s=null,a=1,r=null,o="local-floor",c=1,l=null,d=null,u=null,h=null,f=null,g=null;const b=new Jy,m=t.getContextAttributes();let p=null,v=null;const x=[],y=[],D=new Ce;let T=null;const R=new tn;R.viewport=new tt;const I=new tn;I.viewport=new tt;const _=[R,I],M=new Xy;let L=null,k=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(Y){let te=x[Y];return te===void 0&&(te=new bl,x[Y]=te),te.getTargetRaySpace()},this.getControllerGrip=function(Y){let te=x[Y];return te===void 0&&(te=new bl,x[Y]=te),te.getGripSpace()},this.getHand=function(Y){let te=x[Y];return te===void 0&&(te=new bl,x[Y]=te),te.getHandSpace()};function P(Y){const te=y.indexOf(Y.inputSource);if(te===-1)return;const ue=x[te];ue!==void 0&&(ue.update(Y.inputSource,Y.frame,l||r),ue.dispatchEvent({type:Y.type,data:Y.inputSource}))}function B(){s.removeEventListener("select",P),s.removeEventListener("selectstart",P),s.removeEventListener("selectend",P),s.removeEventListener("squeeze",P),s.removeEventListener("squeezestart",P),s.removeEventListener("squeezeend",P),s.removeEventListener("end",B),s.removeEventListener("inputsourceschange",H);for(let Y=0;Y<x.length;Y++){const te=y[Y];te!==null&&(y[Y]=null,x[Y].disconnect(te))}L=null,k=null,b.reset(),e.setRenderTarget(p),f=null,h=null,u=null,s=null,v=null,xe.stop(),n.isPresenting=!1,e.setPixelRatio(T),e.setSize(D.width,D.height,!1),n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(Y){a=Y,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(Y){o=Y,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return l||r},this.setReferenceSpace=function(Y){l=Y},this.getBaseLayer=function(){return h!==null?h:f},this.getBinding=function(){return u},this.getFrame=function(){return g},this.getSession=function(){return s},this.setSession=async function(Y){if(s=Y,s!==null){if(p=e.getRenderTarget(),s.addEventListener("select",P),s.addEventListener("selectstart",P),s.addEventListener("selectend",P),s.addEventListener("squeeze",P),s.addEventListener("squeezestart",P),s.addEventListener("squeezeend",P),s.addEventListener("end",B),s.addEventListener("inputsourceschange",H),m.xrCompatible!==!0&&await t.makeXRCompatible(),T=e.getPixelRatio(),e.getSize(D),s.renderState.layers===void 0){const te={antialias:m.antialias,alpha:!0,depth:m.depth,stencil:m.stencil,framebufferScaleFactor:a};f=new XRWebGLLayer(s,t,te),s.updateRenderState({baseLayer:f}),e.setPixelRatio(1),e.setSize(f.framebufferWidth,f.framebufferHeight,!1),v=new os(f.framebufferWidth,f.framebufferHeight,{format:zn,type:Ui,colorSpace:e.outputColorSpace,stencilBuffer:m.stencil})}else{let te=null,ue=null,ce=null;m.depth&&(ce=m.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,te=m.stencil?Pa:ga,ue=m.stencil?Ca:rs);const Ie={colorFormat:t.RGBA8,depthFormat:ce,scaleFactor:a};u=new XRWebGLBinding(s,t),h=u.createProjectionLayer(Ie),s.updateRenderState({layers:[h]}),e.setPixelRatio(1),e.setSize(h.textureWidth,h.textureHeight,!1),v=new os(h.textureWidth,h.textureHeight,{format:zn,type:Ui,depthTexture:new xu(h.textureWidth,h.textureHeight,ue,void 0,void 0,void 0,void 0,void 0,void 0,te),stencilBuffer:m.stencil,colorSpace:e.outputColorSpace,samples:m.antialias?4:0,resolveDepthBuffer:h.ignoreDepthValues===!1})}v.isXRRenderTarget=!0,this.setFoveation(c),l=null,r=await s.requestReferenceSpace(o),xe.setContext(s),xe.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(s!==null)return s.environmentBlendMode},this.getDepthTexture=function(){return b.getDepthTexture()};function H(Y){for(let te=0;te<Y.removed.length;te++){const ue=Y.removed[te],ce=y.indexOf(ue);ce>=0&&(y[ce]=null,x[ce].disconnect(ue))}for(let te=0;te<Y.added.length;te++){const ue=Y.added[te];let ce=y.indexOf(ue);if(ce===-1){for(let Ve=0;Ve<x.length;Ve++)if(Ve>=y.length){y.push(ue),ce=Ve;break}else if(y[Ve]===null){y[Ve]=ue,ce=Ve;break}if(ce===-1)break}const Ie=x[ce];Ie&&Ie.connect(ue)}}const z=new A,ee=new A;function V(Y,te,ue){z.setFromMatrixPosition(te.matrixWorld),ee.setFromMatrixPosition(ue.matrixWorld);const ce=z.distanceTo(ee),Ie=te.projectionMatrix.elements,Ve=ue.projectionMatrix.elements,$e=Ie[14]/(Ie[10]-1),Ct=Ie[14]/(Ie[10]+1),at=(Ie[9]+1)/Ie[5],Bt=(Ie[9]-1)/Ie[5],O=(Ie[8]-1)/Ie[0],Pn=(Ve[8]+1)/Ve[0],nt=$e*O,it=$e*Pn,Fe=ce/(-O+Pn),yt=Fe*-O;if(te.matrixWorld.decompose(Y.position,Y.quaternion,Y.scale),Y.translateX(yt),Y.translateZ(Fe),Y.matrixWorld.compose(Y.position,Y.quaternion,Y.scale),Y.matrixWorldInverse.copy(Y.matrixWorld).invert(),Ie[10]===-1)Y.projectionMatrix.copy(te.projectionMatrix),Y.projectionMatrixInverse.copy(te.projectionMatrixInverse);else{const Ne=$e+Fe,C=Ct+Fe,w=nt-yt,G=it+(ce-yt),Q=at*Ct/C*Ne,ne=Bt*Ct/C*Ne;Y.projectionMatrix.makePerspective(w,G,Q,ne,Ne,C),Y.projectionMatrixInverse.copy(Y.projectionMatrix).invert()}}function oe(Y,te){te===null?Y.matrixWorld.copy(Y.matrix):Y.matrixWorld.multiplyMatrices(te.matrixWorld,Y.matrix),Y.matrixWorldInverse.copy(Y.matrixWorld).invert()}this.updateCamera=function(Y){if(s===null)return;let te=Y.near,ue=Y.far;b.texture!==null&&(b.depthNear>0&&(te=b.depthNear),b.depthFar>0&&(ue=b.depthFar)),M.near=I.near=R.near=te,M.far=I.far=R.far=ue,(L!==M.near||k!==M.far)&&(s.updateRenderState({depthNear:M.near,depthFar:M.far}),L=M.near,k=M.far),R.layers.mask=Y.layers.mask|2,I.layers.mask=Y.layers.mask|4,M.layers.mask=R.layers.mask|I.layers.mask;const ce=Y.parent,Ie=M.cameras;oe(M,ce);for(let Ve=0;Ve<Ie.length;Ve++)oe(Ie[Ve],ce);Ie.length===2?V(M,R,I):M.projectionMatrix.copy(R.projectionMatrix),le(Y,M,ce)};function le(Y,te,ue){ue===null?Y.matrix.copy(te.matrixWorld):(Y.matrix.copy(ue.matrixWorld),Y.matrix.invert(),Y.matrix.multiply(te.matrixWorld)),Y.matrix.decompose(Y.position,Y.quaternion,Y.scale),Y.updateMatrixWorld(!0),Y.projectionMatrix.copy(te.projectionMatrix),Y.projectionMatrixInverse.copy(te.projectionMatrixInverse),Y.isPerspectiveCamera&&(Y.fov=La*2*Math.atan(1/Y.projectionMatrix.elements[5]),Y.zoom=1)}this.getCamera=function(){return M},this.getFoveation=function(){if(!(h===null&&f===null))return c},this.setFoveation=function(Y){c=Y,h!==null&&(h.fixedFoveation=Y),f!==null&&f.fixedFoveation!==void 0&&(f.fixedFoveation=Y)},this.hasDepthSensing=function(){return b.texture!==null},this.getDepthSensingMesh=function(){return b.getMesh(M)};let _e=null;function ke(Y,te){if(d=te.getViewerPose(l||r),g=te,d!==null){const ue=d.views;f!==null&&(e.setRenderTargetFramebuffer(v,f.framebuffer),e.setRenderTarget(v));let ce=!1;ue.length!==M.cameras.length&&(M.cameras.length=0,ce=!0);for(let Ve=0;Ve<ue.length;Ve++){const $e=ue[Ve];let Ct=null;if(f!==null)Ct=f.getViewport($e);else{const Bt=u.getViewSubImage(h,$e);Ct=Bt.viewport,Ve===0&&(e.setRenderTargetTextures(v,Bt.colorTexture,h.ignoreDepthValues?void 0:Bt.depthStencilTexture),e.setRenderTarget(v))}let at=_[Ve];at===void 0&&(at=new tn,at.layers.enable(Ve),at.viewport=new tt,_[Ve]=at),at.matrix.fromArray($e.transform.matrix),at.matrix.decompose(at.position,at.quaternion,at.scale),at.projectionMatrix.fromArray($e.projectionMatrix),at.projectionMatrixInverse.copy(at.projectionMatrix).invert(),at.viewport.set(Ct.x,Ct.y,Ct.width,Ct.height),Ve===0&&(M.matrix.copy(at.matrix),M.matrix.decompose(M.position,M.quaternion,M.scale)),ce===!0&&M.cameras.push(at)}const Ie=s.enabledFeatures;if(Ie&&Ie.includes("depth-sensing")){const Ve=u.getDepthInformation(ue[0]);Ve&&Ve.isValid&&Ve.texture&&b.init(e,Ve,s.renderState)}}for(let ue=0;ue<x.length;ue++){const ce=y[ue],Ie=x[ue];ce!==null&&Ie!==void 0&&Ie.update(ce,te,l||r)}_e&&_e(Y,te),te.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:te}),g=null}const xe=new Qp;xe.setAnimationLoop(ke),this.setAnimationLoop=function(Y){_e=Y},this.dispose=function(){}}}const vs=new An,Zy=new He;function e1(i,e){function t(m,p){m.matrixAutoUpdate===!0&&m.updateMatrix(),p.value.copy(m.matrix)}function n(m,p){p.color.getRGB(m.fogColor.value,Yp(i)),p.isFog?(m.fogNear.value=p.near,m.fogFar.value=p.far):p.isFogExp2&&(m.fogDensity.value=p.density)}function s(m,p,v,x,y){p.isMeshBasicMaterial||p.isMeshLambertMaterial?a(m,p):p.isMeshToonMaterial?(a(m,p),u(m,p)):p.isMeshPhongMaterial?(a(m,p),d(m,p)):p.isMeshStandardMaterial?(a(m,p),h(m,p),p.isMeshPhysicalMaterial&&f(m,p,y)):p.isMeshMatcapMaterial?(a(m,p),g(m,p)):p.isMeshDepthMaterial?a(m,p):p.isMeshDistanceMaterial?(a(m,p),b(m,p)):p.isMeshNormalMaterial?a(m,p):p.isLineBasicMaterial?(r(m,p),p.isLineDashedMaterial&&o(m,p)):p.isPointsMaterial?c(m,p,v,x):p.isSpriteMaterial?l(m,p):p.isShadowMaterial?(m.color.value.copy(p.color),m.opacity.value=p.opacity):p.isShaderMaterial&&(p.uniformsNeedUpdate=!1)}function a(m,p){m.opacity.value=p.opacity,p.color&&m.diffuse.value.copy(p.color),p.emissive&&m.emissive.value.copy(p.emissive).multiplyScalar(p.emissiveIntensity),p.map&&(m.map.value=p.map,t(p.map,m.mapTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,t(p.alphaMap,m.alphaMapTransform)),p.bumpMap&&(m.bumpMap.value=p.bumpMap,t(p.bumpMap,m.bumpMapTransform),m.bumpScale.value=p.bumpScale,p.side===Gt&&(m.bumpScale.value*=-1)),p.normalMap&&(m.normalMap.value=p.normalMap,t(p.normalMap,m.normalMapTransform),m.normalScale.value.copy(p.normalScale),p.side===Gt&&m.normalScale.value.negate()),p.displacementMap&&(m.displacementMap.value=p.displacementMap,t(p.displacementMap,m.displacementMapTransform),m.displacementScale.value=p.displacementScale,m.displacementBias.value=p.displacementBias),p.emissiveMap&&(m.emissiveMap.value=p.emissiveMap,t(p.emissiveMap,m.emissiveMapTransform)),p.specularMap&&(m.specularMap.value=p.specularMap,t(p.specularMap,m.specularMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest);const v=e.get(p),x=v.envMap,y=v.envMapRotation;x&&(m.envMap.value=x,vs.copy(y),vs.x*=-1,vs.y*=-1,vs.z*=-1,x.isCubeTexture&&x.isRenderTargetTexture===!1&&(vs.y*=-1,vs.z*=-1),m.envMapRotation.value.setFromMatrix4(Zy.makeRotationFromEuler(vs)),m.flipEnvMap.value=x.isCubeTexture&&x.isRenderTargetTexture===!1?-1:1,m.reflectivity.value=p.reflectivity,m.ior.value=p.ior,m.refractionRatio.value=p.refractionRatio),p.lightMap&&(m.lightMap.value=p.lightMap,m.lightMapIntensity.value=p.lightMapIntensity,t(p.lightMap,m.lightMapTransform)),p.aoMap&&(m.aoMap.value=p.aoMap,m.aoMapIntensity.value=p.aoMapIntensity,t(p.aoMap,m.aoMapTransform))}function r(m,p){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,p.map&&(m.map.value=p.map,t(p.map,m.mapTransform))}function o(m,p){m.dashSize.value=p.dashSize,m.totalSize.value=p.dashSize+p.gapSize,m.scale.value=p.scale}function c(m,p,v,x){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,m.size.value=p.size*v,m.scale.value=x*.5,p.map&&(m.map.value=p.map,t(p.map,m.uvTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,t(p.alphaMap,m.alphaMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest)}function l(m,p){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,m.rotation.value=p.rotation,p.map&&(m.map.value=p.map,t(p.map,m.mapTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,t(p.alphaMap,m.alphaMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest)}function d(m,p){m.specular.value.copy(p.specular),m.shininess.value=Math.max(p.shininess,1e-4)}function u(m,p){p.gradientMap&&(m.gradientMap.value=p.gradientMap)}function h(m,p){m.metalness.value=p.metalness,p.metalnessMap&&(m.metalnessMap.value=p.metalnessMap,t(p.metalnessMap,m.metalnessMapTransform)),m.roughness.value=p.roughness,p.roughnessMap&&(m.roughnessMap.value=p.roughnessMap,t(p.roughnessMap,m.roughnessMapTransform)),p.envMap&&(m.envMapIntensity.value=p.envMapIntensity)}function f(m,p,v){m.ior.value=p.ior,p.sheen>0&&(m.sheenColor.value.copy(p.sheenColor).multiplyScalar(p.sheen),m.sheenRoughness.value=p.sheenRoughness,p.sheenColorMap&&(m.sheenColorMap.value=p.sheenColorMap,t(p.sheenColorMap,m.sheenColorMapTransform)),p.sheenRoughnessMap&&(m.sheenRoughnessMap.value=p.sheenRoughnessMap,t(p.sheenRoughnessMap,m.sheenRoughnessMapTransform))),p.clearcoat>0&&(m.clearcoat.value=p.clearcoat,m.clearcoatRoughness.value=p.clearcoatRoughness,p.clearcoatMap&&(m.clearcoatMap.value=p.clearcoatMap,t(p.clearcoatMap,m.clearcoatMapTransform)),p.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=p.clearcoatRoughnessMap,t(p.clearcoatRoughnessMap,m.clearcoatRoughnessMapTransform)),p.clearcoatNormalMap&&(m.clearcoatNormalMap.value=p.clearcoatNormalMap,t(p.clearcoatNormalMap,m.clearcoatNormalMapTransform),m.clearcoatNormalScale.value.copy(p.clearcoatNormalScale),p.side===Gt&&m.clearcoatNormalScale.value.negate())),p.dispersion>0&&(m.dispersion.value=p.dispersion),p.iridescence>0&&(m.iridescence.value=p.iridescence,m.iridescenceIOR.value=p.iridescenceIOR,m.iridescenceThicknessMinimum.value=p.iridescenceThicknessRange[0],m.iridescenceThicknessMaximum.value=p.iridescenceThicknessRange[1],p.iridescenceMap&&(m.iridescenceMap.value=p.iridescenceMap,t(p.iridescenceMap,m.iridescenceMapTransform)),p.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=p.iridescenceThicknessMap,t(p.iridescenceThicknessMap,m.iridescenceThicknessMapTransform))),p.transmission>0&&(m.transmission.value=p.transmission,m.transmissionSamplerMap.value=v.texture,m.transmissionSamplerSize.value.set(v.width,v.height),p.transmissionMap&&(m.transmissionMap.value=p.transmissionMap,t(p.transmissionMap,m.transmissionMapTransform)),m.thickness.value=p.thickness,p.thicknessMap&&(m.thicknessMap.value=p.thicknessMap,t(p.thicknessMap,m.thicknessMapTransform)),m.attenuationDistance.value=p.attenuationDistance,m.attenuationColor.value.copy(p.attenuationColor)),p.anisotropy>0&&(m.anisotropyVector.value.set(p.anisotropy*Math.cos(p.anisotropyRotation),p.anisotropy*Math.sin(p.anisotropyRotation)),p.anisotropyMap&&(m.anisotropyMap.value=p.anisotropyMap,t(p.anisotropyMap,m.anisotropyMapTransform))),m.specularIntensity.value=p.specularIntensity,m.specularColor.value.copy(p.specularColor),p.specularColorMap&&(m.specularColorMap.value=p.specularColorMap,t(p.specularColorMap,m.specularColorMapTransform)),p.specularIntensityMap&&(m.specularIntensityMap.value=p.specularIntensityMap,t(p.specularIntensityMap,m.specularIntensityMapTransform))}function g(m,p){p.matcap&&(m.matcap.value=p.matcap)}function b(m,p){const v=e.get(p).light;m.referencePosition.value.setFromMatrixPosition(v.matrixWorld),m.nearDistance.value=v.shadow.camera.near,m.farDistance.value=v.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:s}}function t1(i,e,t,n){let s={},a={},r=[];const o=i.getParameter(i.MAX_UNIFORM_BUFFER_BINDINGS);function c(v,x){const y=x.program;n.uniformBlockBinding(v,y)}function l(v,x){let y=s[v.id];y===void 0&&(g(v),y=d(v),s[v.id]=y,v.addEventListener("dispose",m));const D=x.program;n.updateUBOMapping(v,D);const T=e.render.frame;a[v.id]!==T&&(h(v),a[v.id]=T)}function d(v){const x=u();v.__bindingPointIndex=x;const y=i.createBuffer(),D=v.__size,T=v.usage;return i.bindBuffer(i.UNIFORM_BUFFER,y),i.bufferData(i.UNIFORM_BUFFER,D,T),i.bindBuffer(i.UNIFORM_BUFFER,null),i.bindBufferBase(i.UNIFORM_BUFFER,x,y),y}function u(){for(let v=0;v<o;v++)if(r.indexOf(v)===-1)return r.push(v),v;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function h(v){const x=s[v.id],y=v.uniforms,D=v.__cache;i.bindBuffer(i.UNIFORM_BUFFER,x);for(let T=0,R=y.length;T<R;T++){const I=Array.isArray(y[T])?y[T]:[y[T]];for(let _=0,M=I.length;_<M;_++){const L=I[_];if(f(L,T,_,D)===!0){const k=L.__offset,P=Array.isArray(L.value)?L.value:[L.value];let B=0;for(let H=0;H<P.length;H++){const z=P[H],ee=b(z);typeof z=="number"||typeof z=="boolean"?(L.__data[0]=z,i.bufferSubData(i.UNIFORM_BUFFER,k+B,L.__data)):z.isMatrix3?(L.__data[0]=z.elements[0],L.__data[1]=z.elements[1],L.__data[2]=z.elements[2],L.__data[3]=0,L.__data[4]=z.elements[3],L.__data[5]=z.elements[4],L.__data[6]=z.elements[5],L.__data[7]=0,L.__data[8]=z.elements[6],L.__data[9]=z.elements[7],L.__data[10]=z.elements[8],L.__data[11]=0):(z.toArray(L.__data,B),B+=ee.storage/Float32Array.BYTES_PER_ELEMENT)}i.bufferSubData(i.UNIFORM_BUFFER,k,L.__data)}}}i.bindBuffer(i.UNIFORM_BUFFER,null)}function f(v,x,y,D){const T=v.value,R=x+"_"+y;if(D[R]===void 0)return typeof T=="number"||typeof T=="boolean"?D[R]=T:D[R]=T.clone(),!0;{const I=D[R];if(typeof T=="number"||typeof T=="boolean"){if(I!==T)return D[R]=T,!0}else if(I.equals(T)===!1)return I.copy(T),!0}return!1}function g(v){const x=v.uniforms;let y=0;const D=16;for(let R=0,I=x.length;R<I;R++){const _=Array.isArray(x[R])?x[R]:[x[R]];for(let M=0,L=_.length;M<L;M++){const k=_[M],P=Array.isArray(k.value)?k.value:[k.value];for(let B=0,H=P.length;B<H;B++){const z=P[B],ee=b(z),V=y%D,oe=V%ee.boundary,le=V+oe;y+=oe,le!==0&&D-le<ee.storage&&(y+=D-le),k.__data=new Float32Array(ee.storage/Float32Array.BYTES_PER_ELEMENT),k.__offset=y,y+=ee.storage}}}const T=y%D;return T>0&&(y+=D-T),v.__size=y,v.__cache={},this}function b(v){const x={boundary:0,storage:0};return typeof v=="number"||typeof v=="boolean"?(x.boundary=4,x.storage=4):v.isVector2?(x.boundary=8,x.storage=8):v.isVector3||v.isColor?(x.boundary=16,x.storage=12):v.isVector4?(x.boundary=16,x.storage=16):v.isMatrix3?(x.boundary=48,x.storage=48):v.isMatrix4?(x.boundary=64,x.storage=64):v.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",v),x}function m(v){const x=v.target;x.removeEventListener("dispose",m);const y=r.indexOf(x.__bindingPointIndex);r.splice(y,1),i.deleteBuffer(s[x.id]),delete s[x.id],delete a[x.id]}function p(){for(const v in s)i.deleteBuffer(s[v]);r=[],s={},a={}}return{bind:c,update:l,dispose:p}}class im{constructor(e={}){const{canvas:t=G0(),context:n=null,depth:s=!0,stencil:a=!1,alpha:r=!1,antialias:o=!1,premultipliedAlpha:c=!0,preserveDrawingBuffer:l=!1,powerPreference:d="default",failIfMajorPerformanceCaveat:u=!1,reverseDepthBuffer:h=!1}=e;this.isWebGLRenderer=!0;let f;if(n!==null){if(typeof WebGLRenderingContext<"u"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");f=n.getContextAttributes().alpha}else f=r;const g=new Uint32Array(4),b=new Int32Array(4);let m=null,p=null;const v=[],x=[];this.domElement=t,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=Ze,this.toneMapping=is,this.toneMappingExposure=1;const y=this;let D=!1,T=0,R=0,I=null,_=-1,M=null;const L=new tt,k=new tt;let P=null;const B=new De(0);let H=0,z=t.width,ee=t.height,V=1,oe=null,le=null;const _e=new tt(0,0,z,ee),ke=new tt(0,0,z,ee);let xe=!1;const Y=new wc;let te=!1,ue=!1;const ce=new He,Ie=new He,Ve=new A,$e=new tt,Ct={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let at=!1;function Bt(){return I===null?V:1}let O=n;function Pn(E,F){return t.getContext(E,F)}try{const E={alpha:!0,depth:s,stencil:a,antialias:o,premultipliedAlpha:c,preserveDrawingBuffer:l,powerPreference:d,failIfMajorPerformanceCaveat:u};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${ou}`),t.addEventListener("webglcontextlost",Z,!1),t.addEventListener("webglcontextrestored",be,!1),t.addEventListener("webglcontextcreationerror",me,!1),O===null){const F="webgl2";if(O=Pn(F,E),O===null)throw Pn(F)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(E){throw console.error("THREE.WebGLRenderer: "+E.message),E}let nt,it,Fe,yt,Ne,C,w,G,Q,ne,J,Pe,fe,ye,rt,ae,Me,Oe,Be,Se,st,Ye,vt,N;function he(){nt=new o_(O),nt.init(),Ye=new jy(O,nt),it=new t_(O,nt,e,Ye),Fe=new Vy(O,nt),it.reverseDepthBuffer&&h&&Fe.buffers.depth.setReversed(!0),yt=new d_(O),Ne=new Ry,C=new qy(O,nt,Fe,Ne,it,Ye,yt),w=new i_(y),G=new r_(y),Q=new bb(O),vt=new Zx(O,Q),ne=new c_(O,Q,yt,vt),J=new h_(O,ne,Q,yt),Be=new u_(O,it,C),ae=new n_(Ne),Pe=new Ay(y,w,G,nt,it,vt,ae),fe=new e1(y,Ne),ye=new Py,rt=new Fy(nt),Oe=new Qx(y,w,G,Fe,J,f,c),Me=new Hy(y,J,it),N=new t1(O,yt,it,Fe),Se=new e_(O,nt,yt),st=new l_(O,nt,yt),yt.programs=Pe.programs,y.capabilities=it,y.extensions=nt,y.properties=Ne,y.renderLists=ye,y.shadowMap=Me,y.state=Fe,y.info=yt}he();const $=new Qy(y,O);this.xr=$,this.getContext=function(){return O},this.getContextAttributes=function(){return O.getContextAttributes()},this.forceContextLoss=function(){const E=nt.get("WEBGL_lose_context");E&&E.loseContext()},this.forceContextRestore=function(){const E=nt.get("WEBGL_lose_context");E&&E.restoreContext()},this.getPixelRatio=function(){return V},this.setPixelRatio=function(E){E!==void 0&&(V=E,this.setSize(z,ee,!1))},this.getSize=function(E){return E.set(z,ee)},this.setSize=function(E,F,W=!0){if($.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}z=E,ee=F,t.width=Math.floor(E*V),t.height=Math.floor(F*V),W===!0&&(t.style.width=E+"px",t.style.height=F+"px"),this.setViewport(0,0,E,F)},this.getDrawingBufferSize=function(E){return E.set(z*V,ee*V).floor()},this.setDrawingBufferSize=function(E,F,W){z=E,ee=F,V=W,t.width=Math.floor(E*W),t.height=Math.floor(F*W),this.setViewport(0,0,E,F)},this.getCurrentViewport=function(E){return E.copy(L)},this.getViewport=function(E){return E.copy(_e)},this.setViewport=function(E,F,W,q){E.isVector4?_e.set(E.x,E.y,E.z,E.w):_e.set(E,F,W,q),Fe.viewport(L.copy(_e).multiplyScalar(V).round())},this.getScissor=function(E){return E.copy(ke)},this.setScissor=function(E,F,W,q){E.isVector4?ke.set(E.x,E.y,E.z,E.w):ke.set(E,F,W,q),Fe.scissor(k.copy(ke).multiplyScalar(V).round())},this.getScissorTest=function(){return xe},this.setScissorTest=function(E){Fe.setScissorTest(xe=E)},this.setOpaqueSort=function(E){oe=E},this.setTransparentSort=function(E){le=E},this.getClearColor=function(E){return E.copy(Oe.getClearColor())},this.setClearColor=function(){Oe.setClearColor.apply(Oe,arguments)},this.getClearAlpha=function(){return Oe.getClearAlpha()},this.setClearAlpha=function(){Oe.setClearAlpha.apply(Oe,arguments)},this.clear=function(E=!0,F=!0,W=!0){let q=0;if(E){let U=!1;if(I!==null){const re=I.texture.format;U=re===mu||re===pu||re===fu}if(U){const re=I.texture.type,ge=re===Ui||re===rs||re===Ur||re===Ca||re===du||re===uu,Ee=Oe.getClearColor(),Te=Oe.getClearAlpha(),ze=Ee.r,qe=Ee.g,Ae=Ee.b;ge?(g[0]=ze,g[1]=qe,g[2]=Ae,g[3]=Te,O.clearBufferuiv(O.COLOR,0,g)):(b[0]=ze,b[1]=qe,b[2]=Ae,b[3]=Te,O.clearBufferiv(O.COLOR,0,b))}else q|=O.COLOR_BUFFER_BIT}F&&(q|=O.DEPTH_BUFFER_BIT),W&&(q|=O.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),O.clear(q)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){t.removeEventListener("webglcontextlost",Z,!1),t.removeEventListener("webglcontextrestored",be,!1),t.removeEventListener("webglcontextcreationerror",me,!1),ye.dispose(),rt.dispose(),Ne.dispose(),w.dispose(),G.dispose(),J.dispose(),vt.dispose(),N.dispose(),Pe.dispose(),$.dispose(),$.removeEventListener("sessionstart",eh),$.removeEventListener("sessionend",th),hs.stop()};function Z(E){E.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),D=!0}function be(){console.log("THREE.WebGLRenderer: Context Restored."),D=!1;const E=yt.autoReset,F=Me.enabled,W=Me.autoUpdate,q=Me.needsUpdate,U=Me.type;he(),yt.autoReset=E,Me.enabled=F,Me.autoUpdate=W,Me.needsUpdate=q,Me.type=U}function me(E){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",E.statusMessage)}function We(E){const F=E.target;F.removeEventListener("dispose",We),Dt(F)}function Dt(E){an(E),Ne.remove(E)}function an(E){const F=Ne.get(E).programs;F!==void 0&&(F.forEach(function(W){Pe.releaseProgram(W)}),E.isShaderMaterial&&Pe.releaseShaderCache(E))}this.renderBufferDirect=function(E,F,W,q,U,re){F===null&&(F=Ct);const ge=U.isMesh&&U.matrixWorld.determinant()<0,Ee=Pg(E,F,W,q,U);Fe.setMaterial(q,ge);let Te=W.index,ze=1;if(q.wireframe===!0){if(Te=ne.getWireframeAttribute(W),Te===void 0)return;ze=2}const qe=W.drawRange,Ae=W.attributes.position;let ot=qe.start*ze,xt=(qe.start+qe.count)*ze;re!==null&&(ot=Math.max(ot,re.start*ze),xt=Math.min(xt,(re.start+re.count)*ze)),Te!==null?(ot=Math.max(ot,0),xt=Math.min(xt,Te.count)):Ae!=null&&(ot=Math.max(ot,0),xt=Math.min(xt,Ae.count));const Mt=xt-ot;if(Mt<0||Mt===1/0)return;vt.setup(U,q,Ee,W,Te);let xn,lt=Se;if(Te!==null&&(xn=Q.get(Te),lt=st,lt.setIndex(xn)),U.isMesh)q.wireframe===!0?(Fe.setLineWidth(q.wireframeLinewidth*Bt()),lt.setMode(O.LINES)):lt.setMode(O.TRIANGLES);else if(U.isLine){let Le=q.linewidth;Le===void 0&&(Le=1),Fe.setLineWidth(Le*Bt()),U.isLineSegments?lt.setMode(O.LINES):U.isLineLoop?lt.setMode(O.LINE_LOOP):lt.setMode(O.LINE_STRIP)}else U.isPoints?lt.setMode(O.POINTS):U.isSprite&&lt.setMode(O.TRIANGLES);if(U.isBatchedMesh)if(U._multiDrawInstances!==null)lt.renderMultiDrawInstances(U._multiDrawStarts,U._multiDrawCounts,U._multiDrawCount,U._multiDrawInstances);else if(nt.get("WEBGL_multi_draw"))lt.renderMultiDraw(U._multiDrawStarts,U._multiDrawCounts,U._multiDrawCount);else{const Le=U._multiDrawStarts,_i=U._multiDrawCounts,dt=U._multiDrawCount,jn=Te?Q.get(Te).bytesPerElement:1,Bs=Ne.get(q).currentProgram.getUniforms();for(let Mn=0;Mn<dt;Mn++)Bs.setValue(O,"_gl_DrawID",Mn),lt.render(Le[Mn]/jn,_i[Mn])}else if(U.isInstancedMesh)lt.renderInstances(ot,Mt,U.count);else if(W.isInstancedBufferGeometry){const Le=W._maxInstanceCount!==void 0?W._maxInstanceCount:1/0,_i=Math.min(W.instanceCount,Le);lt.renderInstances(ot,Mt,_i)}else lt.render(ot,Mt)};function ut(E,F,W){E.transparent===!0&&E.side===nn&&E.forceSinglePass===!1?(E.side=Gt,E.needsUpdate=!0,io(E,F,W),E.side=Fi,E.needsUpdate=!0,io(E,F,W),E.side=nn):io(E,F,W)}this.compile=function(E,F,W=null){W===null&&(W=E),p=rt.get(W),p.init(F),x.push(p),W.traverseVisible(function(U){U.isLight&&U.layers.test(F.layers)&&(p.pushLight(U),U.castShadow&&p.pushShadow(U))}),E!==W&&E.traverseVisible(function(U){U.isLight&&U.layers.test(F.layers)&&(p.pushLight(U),U.castShadow&&p.pushShadow(U))}),p.setupLights();const q=new Set;return E.traverse(function(U){if(!(U.isMesh||U.isPoints||U.isLine||U.isSprite))return;const re=U.material;if(re)if(Array.isArray(re))for(let ge=0;ge<re.length;ge++){const Ee=re[ge];ut(Ee,W,U),q.add(Ee)}else ut(re,W,U),q.add(re)}),x.pop(),p=null,q},this.compileAsync=function(E,F,W=null){const q=this.compile(E,F,W);return new Promise(U=>{function re(){if(q.forEach(function(ge){Ne.get(ge).currentProgram.isReady()&&q.delete(ge)}),q.size===0){U(E);return}setTimeout(re,10)}nt.get("KHR_parallel_shader_compile")!==null?re():setTimeout(re,10)})};let qn=null;function xi(E){qn&&qn(E)}function eh(){hs.stop()}function th(){hs.start()}const hs=new Qp;hs.setAnimationLoop(xi),typeof self<"u"&&hs.setContext(self),this.setAnimationLoop=function(E){qn=E,$.setAnimationLoop(E),E===null?hs.stop():hs.start()},$.addEventListener("sessionstart",eh),$.addEventListener("sessionend",th),this.render=function(E,F){if(F!==void 0&&F.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(D===!0)return;if(E.matrixWorldAutoUpdate===!0&&E.updateMatrixWorld(),F.parent===null&&F.matrixWorldAutoUpdate===!0&&F.updateMatrixWorld(),$.enabled===!0&&$.isPresenting===!0&&($.cameraAutoUpdate===!0&&$.updateCamera(F),F=$.getCamera()),E.isScene===!0&&E.onBeforeRender(y,E,F,I),p=rt.get(E,x.length),p.init(F),x.push(p),Ie.multiplyMatrices(F.projectionMatrix,F.matrixWorldInverse),Y.setFromProjectionMatrix(Ie),ue=this.localClippingEnabled,te=ae.init(this.clippingPlanes,ue),m=ye.get(E,v.length),m.init(),v.push(m),$.enabled===!0&&$.isPresenting===!0){const re=y.xr.getDepthSensingMesh();re!==null&&Vc(re,F,-1/0,y.sortObjects)}Vc(E,F,0,y.sortObjects),m.finish(),y.sortObjects===!0&&m.sort(oe,le),at=$.enabled===!1||$.isPresenting===!1||$.hasDepthSensing()===!1,at&&Oe.addToRenderList(m,E),this.info.render.frame++,te===!0&&ae.beginShadows();const W=p.state.shadowsArray;Me.render(W,E,F),te===!0&&ae.endShadows(),this.info.autoReset===!0&&this.info.reset();const q=m.opaque,U=m.transmissive;if(p.setupLights(),F.isArrayCamera){const re=F.cameras;if(U.length>0)for(let ge=0,Ee=re.length;ge<Ee;ge++){const Te=re[ge];ih(q,U,E,Te)}at&&Oe.render(E);for(let ge=0,Ee=re.length;ge<Ee;ge++){const Te=re[ge];nh(m,E,Te,Te.viewport)}}else U.length>0&&ih(q,U,E,F),at&&Oe.render(E),nh(m,E,F);I!==null&&(C.updateMultisampleRenderTarget(I),C.updateRenderTargetMipmap(I)),E.isScene===!0&&E.onAfterRender(y,E,F),vt.resetDefaultState(),_=-1,M=null,x.pop(),x.length>0?(p=x[x.length-1],te===!0&&ae.setGlobalState(y.clippingPlanes,p.state.camera)):p=null,v.pop(),v.length>0?m=v[v.length-1]:m=null};function Vc(E,F,W,q){if(E.visible===!1)return;if(E.layers.test(F.layers)){if(E.isGroup)W=E.renderOrder;else if(E.isLOD)E.autoUpdate===!0&&E.update(F);else if(E.isLight)p.pushLight(E),E.castShadow&&p.pushShadow(E);else if(E.isSprite){if(!E.frustumCulled||Y.intersectsSprite(E)){q&&$e.setFromMatrixPosition(E.matrixWorld).applyMatrix4(Ie);const ge=J.update(E),Ee=E.material;Ee.visible&&m.push(E,ge,Ee,W,$e.z,null)}}else if((E.isMesh||E.isLine||E.isPoints)&&(!E.frustumCulled||Y.intersectsObject(E))){const ge=J.update(E),Ee=E.material;if(q&&(E.boundingSphere!==void 0?(E.boundingSphere===null&&E.computeBoundingSphere(),$e.copy(E.boundingSphere.center)):(ge.boundingSphere===null&&ge.computeBoundingSphere(),$e.copy(ge.boundingSphere.center)),$e.applyMatrix4(E.matrixWorld).applyMatrix4(Ie)),Array.isArray(Ee)){const Te=ge.groups;for(let ze=0,qe=Te.length;ze<qe;ze++){const Ae=Te[ze],ot=Ee[Ae.materialIndex];ot&&ot.visible&&m.push(E,ge,ot,W,$e.z,Ae)}}else Ee.visible&&m.push(E,ge,Ee,W,$e.z,null)}}const re=E.children;for(let ge=0,Ee=re.length;ge<Ee;ge++)Vc(re[ge],F,W,q)}function nh(E,F,W,q){const U=E.opaque,re=E.transmissive,ge=E.transparent;p.setupLightsView(W),te===!0&&ae.setGlobalState(y.clippingPlanes,W),q&&Fe.viewport(L.copy(q)),U.length>0&&no(U,F,W),re.length>0&&no(re,F,W),ge.length>0&&no(ge,F,W),Fe.buffers.depth.setTest(!0),Fe.buffers.depth.setMask(!0),Fe.buffers.color.setMask(!0),Fe.setPolygonOffset(!1)}function ih(E,F,W,q){if((W.isScene===!0?W.overrideMaterial:null)!==null)return;p.state.transmissionRenderTarget[q.id]===void 0&&(p.state.transmissionRenderTarget[q.id]=new os(1,1,{generateMipmaps:!0,type:nt.has("EXT_color_buffer_half_float")||nt.has("EXT_color_buffer_float")?jr:Ui,minFilter:Pi,samples:4,stencilBuffer:a,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:et.workingColorSpace}));const re=p.state.transmissionRenderTarget[q.id],ge=q.viewport||L;re.setSize(ge.z,ge.w);const Ee=y.getRenderTarget();y.setRenderTarget(re),y.getClearColor(B),H=y.getClearAlpha(),H<1&&y.setClearColor(16777215,.5),y.clear(),at&&Oe.render(W);const Te=y.toneMapping;y.toneMapping=is;const ze=q.viewport;if(q.viewport!==void 0&&(q.viewport=void 0),p.setupLightsView(q),te===!0&&ae.setGlobalState(y.clippingPlanes,q),no(E,W,q),C.updateMultisampleRenderTarget(re),C.updateRenderTargetMipmap(re),nt.has("WEBGL_multisampled_render_to_texture")===!1){let qe=!1;for(let Ae=0,ot=F.length;Ae<ot;Ae++){const xt=F[Ae],Mt=xt.object,xn=xt.geometry,lt=xt.material,Le=xt.group;if(lt.side===nn&&Mt.layers.test(q.layers)){const _i=lt.side;lt.side=Gt,lt.needsUpdate=!0,sh(Mt,W,q,xn,lt,Le),lt.side=_i,lt.needsUpdate=!0,qe=!0}}qe===!0&&(C.updateMultisampleRenderTarget(re),C.updateRenderTargetMipmap(re))}y.setRenderTarget(Ee),y.setClearColor(B,H),ze!==void 0&&(q.viewport=ze),y.toneMapping=Te}function no(E,F,W){const q=F.isScene===!0?F.overrideMaterial:null;for(let U=0,re=E.length;U<re;U++){const ge=E[U],Ee=ge.object,Te=ge.geometry,ze=q===null?ge.material:q,qe=ge.group;Ee.layers.test(W.layers)&&sh(Ee,F,W,Te,ze,qe)}}function sh(E,F,W,q,U,re){E.onBeforeRender(y,F,W,q,U,re),E.modelViewMatrix.multiplyMatrices(W.matrixWorldInverse,E.matrixWorld),E.normalMatrix.getNormalMatrix(E.modelViewMatrix),U.onBeforeRender(y,F,W,q,E,re),U.transparent===!0&&U.side===nn&&U.forceSinglePass===!1?(U.side=Gt,U.needsUpdate=!0,y.renderBufferDirect(W,F,q,U,E,re),U.side=Fi,U.needsUpdate=!0,y.renderBufferDirect(W,F,q,U,E,re),U.side=nn):y.renderBufferDirect(W,F,q,U,E,re),E.onAfterRender(y,F,W,q,U,re)}function io(E,F,W){F.isScene!==!0&&(F=Ct);const q=Ne.get(E),U=p.state.lights,re=p.state.shadowsArray,ge=U.state.version,Ee=Pe.getParameters(E,U.state,re,F,W),Te=Pe.getProgramCacheKey(Ee);let ze=q.programs;q.environment=E.isMeshStandardMaterial?F.environment:null,q.fog=F.fog,q.envMap=(E.isMeshStandardMaterial?G:w).get(E.envMap||q.environment),q.envMapRotation=q.environment!==null&&E.envMap===null?F.environmentRotation:E.envMapRotation,ze===void 0&&(E.addEventListener("dispose",We),ze=new Map,q.programs=ze);let qe=ze.get(Te);if(qe!==void 0){if(q.currentProgram===qe&&q.lightsStateVersion===ge)return rh(E,Ee),qe}else Ee.uniforms=Pe.getUniforms(E),E.onBeforeCompile(Ee,y),qe=Pe.acquireProgram(Ee,Te),ze.set(Te,qe),q.uniforms=Ee.uniforms;const Ae=q.uniforms;return(!E.isShaderMaterial&&!E.isRawShaderMaterial||E.clipping===!0)&&(Ae.clippingPlanes=ae.uniform),rh(E,Ee),q.needsLights=Dg(E),q.lightsStateVersion=ge,q.needsLights&&(Ae.ambientLightColor.value=U.state.ambient,Ae.lightProbe.value=U.state.probe,Ae.directionalLights.value=U.state.directional,Ae.directionalLightShadows.value=U.state.directionalShadow,Ae.spotLights.value=U.state.spot,Ae.spotLightShadows.value=U.state.spotShadow,Ae.rectAreaLights.value=U.state.rectArea,Ae.ltc_1.value=U.state.rectAreaLTC1,Ae.ltc_2.value=U.state.rectAreaLTC2,Ae.pointLights.value=U.state.point,Ae.pointLightShadows.value=U.state.pointShadow,Ae.hemisphereLights.value=U.state.hemi,Ae.directionalShadowMap.value=U.state.directionalShadowMap,Ae.directionalShadowMatrix.value=U.state.directionalShadowMatrix,Ae.spotShadowMap.value=U.state.spotShadowMap,Ae.spotLightMatrix.value=U.state.spotLightMatrix,Ae.spotLightMap.value=U.state.spotLightMap,Ae.pointShadowMap.value=U.state.pointShadowMap,Ae.pointShadowMatrix.value=U.state.pointShadowMatrix),q.currentProgram=qe,q.uniformsList=null,qe}function ah(E){if(E.uniformsList===null){const F=E.currentProgram.getUniforms();E.uniformsList=Xo.seqWithValue(F.seq,E.uniforms)}return E.uniformsList}function rh(E,F){const W=Ne.get(E);W.outputColorSpace=F.outputColorSpace,W.batching=F.batching,W.batchingColor=F.batchingColor,W.instancing=F.instancing,W.instancingColor=F.instancingColor,W.instancingMorph=F.instancingMorph,W.skinning=F.skinning,W.morphTargets=F.morphTargets,W.morphNormals=F.morphNormals,W.morphColors=F.morphColors,W.morphTargetsCount=F.morphTargetsCount,W.numClippingPlanes=F.numClippingPlanes,W.numIntersection=F.numClipIntersection,W.vertexAlphas=F.vertexAlphas,W.vertexTangents=F.vertexTangents,W.toneMapping=F.toneMapping}function Pg(E,F,W,q,U){F.isScene!==!0&&(F=Ct),C.resetTextureUnits();const re=F.fog,ge=q.isMeshStandardMaterial?F.environment:null,Ee=I===null?y.outputColorSpace:I.isXRRenderTarget===!0?I.texture.colorSpace:bn,Te=(q.isMeshStandardMaterial?G:w).get(q.envMap||ge),ze=q.vertexColors===!0&&!!W.attributes.color&&W.attributes.color.itemSize===4,qe=!!W.attributes.tangent&&(!!q.normalMap||q.anisotropy>0),Ae=!!W.morphAttributes.position,ot=!!W.morphAttributes.normal,xt=!!W.morphAttributes.color;let Mt=is;q.toneMapped&&(I===null||I.isXRRenderTarget===!0)&&(Mt=y.toneMapping);const xn=W.morphAttributes.position||W.morphAttributes.normal||W.morphAttributes.color,lt=xn!==void 0?xn.length:0,Le=Ne.get(q),_i=p.state.lights;if(te===!0&&(ue===!0||E!==M)){const Ln=E===M&&q.id===_;ae.setState(q,E,Ln)}let dt=!1;q.version===Le.__version?(Le.needsLights&&Le.lightsStateVersion!==_i.state.version||Le.outputColorSpace!==Ee||U.isBatchedMesh&&Le.batching===!1||!U.isBatchedMesh&&Le.batching===!0||U.isBatchedMesh&&Le.batchingColor===!0&&U.colorTexture===null||U.isBatchedMesh&&Le.batchingColor===!1&&U.colorTexture!==null||U.isInstancedMesh&&Le.instancing===!1||!U.isInstancedMesh&&Le.instancing===!0||U.isSkinnedMesh&&Le.skinning===!1||!U.isSkinnedMesh&&Le.skinning===!0||U.isInstancedMesh&&Le.instancingColor===!0&&U.instanceColor===null||U.isInstancedMesh&&Le.instancingColor===!1&&U.instanceColor!==null||U.isInstancedMesh&&Le.instancingMorph===!0&&U.morphTexture===null||U.isInstancedMesh&&Le.instancingMorph===!1&&U.morphTexture!==null||Le.envMap!==Te||q.fog===!0&&Le.fog!==re||Le.numClippingPlanes!==void 0&&(Le.numClippingPlanes!==ae.numPlanes||Le.numIntersection!==ae.numIntersection)||Le.vertexAlphas!==ze||Le.vertexTangents!==qe||Le.morphTargets!==Ae||Le.morphNormals!==ot||Le.morphColors!==xt||Le.toneMapping!==Mt||Le.morphTargetsCount!==lt)&&(dt=!0):(dt=!0,Le.__version=q.version);let jn=Le.currentProgram;dt===!0&&(jn=io(q,F,U));let Bs=!1,Mn=!1,er=!1;const St=jn.getUniforms(),ri=Le.uniforms;if(Fe.useProgram(jn.program)&&(Bs=!0,Mn=!0,er=!0),q.id!==_&&(_=q.id,Mn=!0),Bs||M!==E){Fe.buffers.depth.getReversed()?(ce.copy(E.projectionMatrix),W0(ce),q0(ce),St.setValue(O,"projectionMatrix",ce)):St.setValue(O,"projectionMatrix",E.projectionMatrix),St.setValue(O,"viewMatrix",E.matrixWorldInverse);const zi=St.map.cameraPosition;zi!==void 0&&zi.setValue(O,Ve.setFromMatrixPosition(E.matrixWorld)),it.logarithmicDepthBuffer&&St.setValue(O,"logDepthBufFC",2/(Math.log(E.far+1)/Math.LN2)),(q.isMeshPhongMaterial||q.isMeshToonMaterial||q.isMeshLambertMaterial||q.isMeshBasicMaterial||q.isMeshStandardMaterial||q.isShaderMaterial)&&St.setValue(O,"isOrthographic",E.isOrthographicCamera===!0),M!==E&&(M=E,Mn=!0,er=!0)}if(U.isSkinnedMesh){St.setOptional(O,U,"bindMatrix"),St.setOptional(O,U,"bindMatrixInverse");const Ln=U.skeleton;Ln&&(Ln.boneTexture===null&&Ln.computeBoneTexture(),St.setValue(O,"boneTexture",Ln.boneTexture,C))}U.isBatchedMesh&&(St.setOptional(O,U,"batchingTexture"),St.setValue(O,"batchingTexture",U._matricesTexture,C),St.setOptional(O,U,"batchingIdTexture"),St.setValue(O,"batchingIdTexture",U._indirectTexture,C),St.setOptional(O,U,"batchingColorTexture"),U._colorsTexture!==null&&St.setValue(O,"batchingColorTexture",U._colorsTexture,C));const tr=W.morphAttributes;if((tr.position!==void 0||tr.normal!==void 0||tr.color!==void 0)&&Be.update(U,W,jn),(Mn||Le.receiveShadow!==U.receiveShadow)&&(Le.receiveShadow=U.receiveShadow,St.setValue(O,"receiveShadow",U.receiveShadow)),q.isMeshGouraudMaterial&&q.envMap!==null&&(ri.envMap.value=Te,ri.flipEnvMap.value=Te.isCubeTexture&&Te.isRenderTargetTexture===!1?-1:1),q.isMeshStandardMaterial&&q.envMap===null&&F.environment!==null&&(ri.envMapIntensity.value=F.environmentIntensity),Mn&&(St.setValue(O,"toneMappingExposure",y.toneMappingExposure),Le.needsLights&&Lg(ri,er),re&&q.fog===!0&&fe.refreshFogUniforms(ri,re),fe.refreshMaterialUniforms(ri,q,V,ee,p.state.transmissionRenderTarget[E.id]),Xo.upload(O,ah(Le),ri,C)),q.isShaderMaterial&&q.uniformsNeedUpdate===!0&&(Xo.upload(O,ah(Le),ri,C),q.uniformsNeedUpdate=!1),q.isSpriteMaterial&&St.setValue(O,"center",U.center),St.setValue(O,"modelViewMatrix",U.modelViewMatrix),St.setValue(O,"normalMatrix",U.normalMatrix),St.setValue(O,"modelMatrix",U.matrixWorld),q.isShaderMaterial||q.isRawShaderMaterial){const Ln=q.uniformsGroups;for(let zi=0,Hi=Ln.length;zi<Hi;zi++){const oh=Ln[zi];N.update(oh,jn),N.bind(oh,jn)}}return jn}function Lg(E,F){E.ambientLightColor.needsUpdate=F,E.lightProbe.needsUpdate=F,E.directionalLights.needsUpdate=F,E.directionalLightShadows.needsUpdate=F,E.pointLights.needsUpdate=F,E.pointLightShadows.needsUpdate=F,E.spotLights.needsUpdate=F,E.spotLightShadows.needsUpdate=F,E.rectAreaLights.needsUpdate=F,E.hemisphereLights.needsUpdate=F}function Dg(E){return E.isMeshLambertMaterial||E.isMeshToonMaterial||E.isMeshPhongMaterial||E.isMeshStandardMaterial||E.isShadowMaterial||E.isShaderMaterial&&E.lights===!0}this.getActiveCubeFace=function(){return T},this.getActiveMipmapLevel=function(){return R},this.getRenderTarget=function(){return I},this.setRenderTargetTextures=function(E,F,W){Ne.get(E.texture).__webglTexture=F,Ne.get(E.depthTexture).__webglTexture=W;const q=Ne.get(E);q.__hasExternalTextures=!0,q.__autoAllocateDepthBuffer=W===void 0,q.__autoAllocateDepthBuffer||nt.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),q.__useRenderToTexture=!1)},this.setRenderTargetFramebuffer=function(E,F){const W=Ne.get(E);W.__webglFramebuffer=F,W.__useDefaultFramebuffer=F===void 0},this.setRenderTarget=function(E,F=0,W=0){I=E,T=F,R=W;let q=!0,U=null,re=!1,ge=!1;if(E){const Te=Ne.get(E);if(Te.__useDefaultFramebuffer!==void 0)Fe.bindFramebuffer(O.FRAMEBUFFER,null),q=!1;else if(Te.__webglFramebuffer===void 0)C.setupRenderTarget(E);else if(Te.__hasExternalTextures)C.rebindTextures(E,Ne.get(E.texture).__webglTexture,Ne.get(E.depthTexture).__webglTexture);else if(E.depthBuffer){const Ae=E.depthTexture;if(Te.__boundDepthTexture!==Ae){if(Ae!==null&&Ne.has(Ae)&&(E.width!==Ae.image.width||E.height!==Ae.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");C.setupDepthRenderbuffer(E)}}const ze=E.texture;(ze.isData3DTexture||ze.isDataArrayTexture||ze.isCompressedArrayTexture)&&(ge=!0);const qe=Ne.get(E).__webglFramebuffer;E.isWebGLCubeRenderTarget?(Array.isArray(qe[F])?U=qe[F][W]:U=qe[F],re=!0):E.samples>0&&C.useMultisampledRTT(E)===!1?U=Ne.get(E).__webglMultisampledFramebuffer:Array.isArray(qe)?U=qe[W]:U=qe,L.copy(E.viewport),k.copy(E.scissor),P=E.scissorTest}else L.copy(_e).multiplyScalar(V).floor(),k.copy(ke).multiplyScalar(V).floor(),P=xe;if(Fe.bindFramebuffer(O.FRAMEBUFFER,U)&&q&&Fe.drawBuffers(E,U),Fe.viewport(L),Fe.scissor(k),Fe.setScissorTest(P),re){const Te=Ne.get(E.texture);O.framebufferTexture2D(O.FRAMEBUFFER,O.COLOR_ATTACHMENT0,O.TEXTURE_CUBE_MAP_POSITIVE_X+F,Te.__webglTexture,W)}else if(ge){const Te=Ne.get(E.texture),ze=F||0;O.framebufferTextureLayer(O.FRAMEBUFFER,O.COLOR_ATTACHMENT0,Te.__webglTexture,W||0,ze)}_=-1},this.readRenderTargetPixels=function(E,F,W,q,U,re,ge){if(!(E&&E.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Ee=Ne.get(E).__webglFramebuffer;if(E.isWebGLCubeRenderTarget&&ge!==void 0&&(Ee=Ee[ge]),Ee){Fe.bindFramebuffer(O.FRAMEBUFFER,Ee);try{const Te=E.texture,ze=Te.format,qe=Te.type;if(!it.textureFormatReadable(ze)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!it.textureTypeReadable(qe)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}F>=0&&F<=E.width-q&&W>=0&&W<=E.height-U&&O.readPixels(F,W,q,U,Ye.convert(ze),Ye.convert(qe),re)}finally{const Te=I!==null?Ne.get(I).__webglFramebuffer:null;Fe.bindFramebuffer(O.FRAMEBUFFER,Te)}}},this.readRenderTargetPixelsAsync=async function(E,F,W,q,U,re,ge){if(!(E&&E.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Ee=Ne.get(E).__webglFramebuffer;if(E.isWebGLCubeRenderTarget&&ge!==void 0&&(Ee=Ee[ge]),Ee){const Te=E.texture,ze=Te.format,qe=Te.type;if(!it.textureFormatReadable(ze))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!it.textureTypeReadable(qe))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");if(F>=0&&F<=E.width-q&&W>=0&&W<=E.height-U){Fe.bindFramebuffer(O.FRAMEBUFFER,Ee);const Ae=O.createBuffer();O.bindBuffer(O.PIXEL_PACK_BUFFER,Ae),O.bufferData(O.PIXEL_PACK_BUFFER,re.byteLength,O.STREAM_READ),O.readPixels(F,W,q,U,Ye.convert(ze),Ye.convert(qe),0);const ot=I!==null?Ne.get(I).__webglFramebuffer:null;Fe.bindFramebuffer(O.FRAMEBUFFER,ot);const xt=O.fenceSync(O.SYNC_GPU_COMMANDS_COMPLETE,0);return O.flush(),await V0(O,xt,4),O.bindBuffer(O.PIXEL_PACK_BUFFER,Ae),O.getBufferSubData(O.PIXEL_PACK_BUFFER,0,re),O.deleteBuffer(Ae),O.deleteSync(xt),re}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")}},this.copyFramebufferToTexture=function(E,F=null,W=0){E.isTexture!==!0&&(Mr("WebGLRenderer: copyFramebufferToTexture function signature has changed."),F=arguments[0]||null,E=arguments[1]);const q=Math.pow(2,-W),U=Math.floor(E.image.width*q),re=Math.floor(E.image.height*q),ge=F!==null?F.x:0,Ee=F!==null?F.y:0;C.setTexture2D(E,0),O.copyTexSubImage2D(O.TEXTURE_2D,W,0,0,ge,Ee,U,re),Fe.unbindTexture()},this.copyTextureToTexture=function(E,F,W=null,q=null,U=0){E.isTexture!==!0&&(Mr("WebGLRenderer: copyTextureToTexture function signature has changed."),q=arguments[0]||null,E=arguments[1],F=arguments[2],U=arguments[3]||0,W=null);let re,ge,Ee,Te,ze,qe,Ae,ot,xt;const Mt=E.isCompressedTexture?E.mipmaps[U]:E.image;W!==null?(re=W.max.x-W.min.x,ge=W.max.y-W.min.y,Ee=W.isBox3?W.max.z-W.min.z:1,Te=W.min.x,ze=W.min.y,qe=W.isBox3?W.min.z:0):(re=Mt.width,ge=Mt.height,Ee=Mt.depth||1,Te=0,ze=0,qe=0),q!==null?(Ae=q.x,ot=q.y,xt=q.z):(Ae=0,ot=0,xt=0);const xn=Ye.convert(F.format),lt=Ye.convert(F.type);let Le;F.isData3DTexture?(C.setTexture3D(F,0),Le=O.TEXTURE_3D):F.isDataArrayTexture||F.isCompressedArrayTexture?(C.setTexture2DArray(F,0),Le=O.TEXTURE_2D_ARRAY):(C.setTexture2D(F,0),Le=O.TEXTURE_2D),O.pixelStorei(O.UNPACK_FLIP_Y_WEBGL,F.flipY),O.pixelStorei(O.UNPACK_PREMULTIPLY_ALPHA_WEBGL,F.premultiplyAlpha),O.pixelStorei(O.UNPACK_ALIGNMENT,F.unpackAlignment);const _i=O.getParameter(O.UNPACK_ROW_LENGTH),dt=O.getParameter(O.UNPACK_IMAGE_HEIGHT),jn=O.getParameter(O.UNPACK_SKIP_PIXELS),Bs=O.getParameter(O.UNPACK_SKIP_ROWS),Mn=O.getParameter(O.UNPACK_SKIP_IMAGES);O.pixelStorei(O.UNPACK_ROW_LENGTH,Mt.width),O.pixelStorei(O.UNPACK_IMAGE_HEIGHT,Mt.height),O.pixelStorei(O.UNPACK_SKIP_PIXELS,Te),O.pixelStorei(O.UNPACK_SKIP_ROWS,ze),O.pixelStorei(O.UNPACK_SKIP_IMAGES,qe);const er=E.isDataArrayTexture||E.isData3DTexture,St=F.isDataArrayTexture||F.isData3DTexture;if(E.isRenderTargetTexture||E.isDepthTexture){const ri=Ne.get(E),tr=Ne.get(F),Ln=Ne.get(ri.__renderTarget),zi=Ne.get(tr.__renderTarget);Fe.bindFramebuffer(O.READ_FRAMEBUFFER,Ln.__webglFramebuffer),Fe.bindFramebuffer(O.DRAW_FRAMEBUFFER,zi.__webglFramebuffer);for(let Hi=0;Hi<Ee;Hi++)er&&O.framebufferTextureLayer(O.READ_FRAMEBUFFER,O.COLOR_ATTACHMENT0,Ne.get(E).__webglTexture,U,qe+Hi),E.isDepthTexture?(St&&O.framebufferTextureLayer(O.DRAW_FRAMEBUFFER,O.COLOR_ATTACHMENT0,Ne.get(F).__webglTexture,U,xt+Hi),O.blitFramebuffer(Te,ze,re,ge,Ae,ot,re,ge,O.DEPTH_BUFFER_BIT,O.NEAREST)):St?O.copyTexSubImage3D(Le,U,Ae,ot,xt+Hi,Te,ze,re,ge):O.copyTexSubImage2D(Le,U,Ae,ot,xt+Hi,Te,ze,re,ge);Fe.bindFramebuffer(O.READ_FRAMEBUFFER,null),Fe.bindFramebuffer(O.DRAW_FRAMEBUFFER,null)}else St?E.isDataTexture||E.isData3DTexture?O.texSubImage3D(Le,U,Ae,ot,xt,re,ge,Ee,xn,lt,Mt.data):F.isCompressedArrayTexture?O.compressedTexSubImage3D(Le,U,Ae,ot,xt,re,ge,Ee,xn,Mt.data):O.texSubImage3D(Le,U,Ae,ot,xt,re,ge,Ee,xn,lt,Mt):E.isDataTexture?O.texSubImage2D(O.TEXTURE_2D,U,Ae,ot,re,ge,xn,lt,Mt.data):E.isCompressedTexture?O.compressedTexSubImage2D(O.TEXTURE_2D,U,Ae,ot,Mt.width,Mt.height,xn,Mt.data):O.texSubImage2D(O.TEXTURE_2D,U,Ae,ot,re,ge,xn,lt,Mt);O.pixelStorei(O.UNPACK_ROW_LENGTH,_i),O.pixelStorei(O.UNPACK_IMAGE_HEIGHT,dt),O.pixelStorei(O.UNPACK_SKIP_PIXELS,jn),O.pixelStorei(O.UNPACK_SKIP_ROWS,Bs),O.pixelStorei(O.UNPACK_SKIP_IMAGES,Mn),U===0&&F.generateMipmaps&&O.generateMipmap(Le),Fe.unbindTexture()},this.copyTextureToTexture3D=function(E,F,W=null,q=null,U=0){return E.isTexture!==!0&&(Mr("WebGLRenderer: copyTextureToTexture3D function signature has changed."),W=arguments[0]||null,q=arguments[1]||null,E=arguments[2],F=arguments[3],U=arguments[4]||0),Mr('WebGLRenderer: copyTextureToTexture3D function has been deprecated. Use "copyTextureToTexture" instead.'),this.copyTextureToTexture(E,F,W,q,U)},this.initRenderTarget=function(E){Ne.get(E).__webglFramebuffer===void 0&&C.setupRenderTarget(E)},this.initTexture=function(E){E.isCubeTexture?C.setTextureCube(E,0):E.isData3DTexture?C.setTexture3D(E,0):E.isDataArrayTexture||E.isCompressedArrayTexture?C.setTexture2DArray(E,0):C.setTexture2D(E,0),Fe.unbindTexture()},this.resetState=function(){T=0,R=0,I=null,Fe.reset(),vt.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Li}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const t=this.getContext();t.drawingBufferColorspace=et._getDrawingBufferColorSpace(e),t.unpackColorSpace=et._getUnpackColorSpace()}}class Hr{constructor(e,t=1,n=1e3){this.isFog=!0,this.name="",this.color=new De(e),this.near=t,this.far=n}clone(){return new Hr(this.color,this.near,this.far)}toJSON(){return{type:"Fog",name:this.name,color:this.color.getHex(),near:this.near,far:this.far}}}class Xa extends Rt{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new An,this.environmentIntensity=1,this.environmentRotation=new An,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(t.object.environmentIntensity=this.environmentIntensity),t.object.environmentRotation=this.environmentRotation.toArray(),t}}class n1{constructor(e,t){this.isInterleavedBuffer=!0,this.array=e,this.stride=t,this.count=e!==void 0?e.length/t:0,this.usage=Ad,this.updateRanges=[],this.version=0,this.uuid=ai()}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.array=new e.array.constructor(e.array),this.count=e.count,this.stride=e.stride,this.usage=e.usage,this}copyAt(e,t,n){e*=this.stride,n*=t.stride;for(let s=0,a=this.stride;s<a;s++)this.array[e+s]=t.array[n+s];return this}set(e,t=0){return this.array.set(e,t),this}clone(e){e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=ai()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);const t=new this.array.constructor(e.arrayBuffers[this.array.buffer._uuid]),n=new this.constructor(t,this.stride);return n.setUsage(this.usage),n}onUpload(e){return this.onUploadCallback=e,this}toJSON(e){return e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=ai()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=Array.from(new Uint32Array(this.array.buffer))),{uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride}}}const hn=new A;class _u{constructor(e,t,n,s=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=e,this.itemSize=t,this.offset=n,this.normalized=s}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(e){this.data.needsUpdate=e}applyMatrix4(e){for(let t=0,n=this.data.count;t<n;t++)hn.fromBufferAttribute(this,t),hn.applyMatrix4(e),this.setXYZ(t,hn.x,hn.y,hn.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)hn.fromBufferAttribute(this,t),hn.applyNormalMatrix(e),this.setXYZ(t,hn.x,hn.y,hn.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)hn.fromBufferAttribute(this,t),hn.transformDirection(e),this.setXYZ(t,hn.x,hn.y,hn.z);return this}getComponent(e,t){let n=this.array[e*this.data.stride+this.offset+t];return this.normalized&&(n=ti(n,this.array)),n}setComponent(e,t,n){return this.normalized&&(n=ht(n,this.array)),this.data.array[e*this.data.stride+this.offset+t]=n,this}setX(e,t){return this.normalized&&(t=ht(t,this.array)),this.data.array[e*this.data.stride+this.offset]=t,this}setY(e,t){return this.normalized&&(t=ht(t,this.array)),this.data.array[e*this.data.stride+this.offset+1]=t,this}setZ(e,t){return this.normalized&&(t=ht(t,this.array)),this.data.array[e*this.data.stride+this.offset+2]=t,this}setW(e,t){return this.normalized&&(t=ht(t,this.array)),this.data.array[e*this.data.stride+this.offset+3]=t,this}getX(e){let t=this.data.array[e*this.data.stride+this.offset];return this.normalized&&(t=ti(t,this.array)),t}getY(e){let t=this.data.array[e*this.data.stride+this.offset+1];return this.normalized&&(t=ti(t,this.array)),t}getZ(e){let t=this.data.array[e*this.data.stride+this.offset+2];return this.normalized&&(t=ti(t,this.array)),t}getW(e){let t=this.data.array[e*this.data.stride+this.offset+3];return this.normalized&&(t=ti(t,this.array)),t}setXY(e,t,n){return e=e*this.data.stride+this.offset,this.normalized&&(t=ht(t,this.array),n=ht(n,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this}setXYZ(e,t,n,s){return e=e*this.data.stride+this.offset,this.normalized&&(t=ht(t,this.array),n=ht(n,this.array),s=ht(s,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this.data.array[e+2]=s,this}setXYZW(e,t,n,s,a){return e=e*this.data.stride+this.offset,this.normalized&&(t=ht(t,this.array),n=ht(n,this.array),s=ht(s,this.array),a=ht(a,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this.data.array[e+2]=s,this.data.array[e+3]=a,this}clone(e){if(e===void 0){console.log("THREE.InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");const t=[];for(let n=0;n<this.count;n++){const s=n*this.data.stride+this.offset;for(let a=0;a<this.itemSize;a++)t.push(this.data.array[s+a])}return new dn(new this.array.constructor(t),this.itemSize,this.normalized)}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.clone(e)),new _u(e.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(e){if(e===void 0){console.log("THREE.InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");const t=[];for(let n=0;n<this.count;n++){const s=n*this.data.stride+this.offset;for(let a=0;a<this.itemSize;a++)t.push(this.data.array[s+a])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:t,normalized:this.normalized}}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.toJSON(e)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}}const uf=new A,hf=new tt,ff=new tt,i1=new A,pf=new He,Eo=new A,vl=new pi,mf=new He,xl=new Xr;class s1 extends j{constructor(e,t){super(e,t),this.isSkinnedMesh=!0,this.type="SkinnedMesh",this.bindMode=fh,this.bindMatrix=new He,this.bindMatrixInverse=new He,this.boundingBox=null,this.boundingSphere=null}computeBoundingBox(){const e=this.geometry;this.boundingBox===null&&(this.boundingBox=new Rn),this.boundingBox.makeEmpty();const t=e.getAttribute("position");for(let n=0;n<t.count;n++)this.getVertexPosition(n,Eo),this.boundingBox.expandByPoint(Eo)}computeBoundingSphere(){const e=this.geometry;this.boundingSphere===null&&(this.boundingSphere=new pi),this.boundingSphere.makeEmpty();const t=e.getAttribute("position");for(let n=0;n<t.count;n++)this.getVertexPosition(n,Eo),this.boundingSphere.expandByPoint(Eo)}copy(e,t){return super.copy(e,t),this.bindMode=e.bindMode,this.bindMatrix.copy(e.bindMatrix),this.bindMatrixInverse.copy(e.bindMatrixInverse),this.skeleton=e.skeleton,e.boundingBox!==null&&(this.boundingBox=e.boundingBox.clone()),e.boundingSphere!==null&&(this.boundingSphere=e.boundingSphere.clone()),this}raycast(e,t){const n=this.material,s=this.matrixWorld;n!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),vl.copy(this.boundingSphere),vl.applyMatrix4(s),e.ray.intersectsSphere(vl)!==!1&&(mf.copy(s).invert(),xl.copy(e.ray).applyMatrix4(mf),!(this.boundingBox!==null&&xl.intersectsBox(this.boundingBox)===!1)&&this._computeIntersections(e,t,xl)))}getVertexPosition(e,t){return super.getVertexPosition(e,t),this.applyBoneTransform(e,t),t}bind(e,t){this.skeleton=e,t===void 0&&(this.updateMatrixWorld(!0),this.skeleton.calculateInverses(),t=this.matrixWorld),this.bindMatrix.copy(t),this.bindMatrixInverse.copy(t).invert()}pose(){this.skeleton.pose()}normalizeSkinWeights(){const e=new tt,t=this.geometry.attributes.skinWeight;for(let n=0,s=t.count;n<s;n++){e.fromBufferAttribute(t,n);const a=1/e.manhattanLength();a!==1/0?e.multiplyScalar(a):e.set(1,0,0,0),t.setXYZW(n,e.x,e.y,e.z,e.w)}}updateMatrixWorld(e){super.updateMatrixWorld(e),this.bindMode===fh?this.bindMatrixInverse.copy(this.matrixWorld).invert():this.bindMode===f0?this.bindMatrixInverse.copy(this.bindMatrix).invert():console.warn("THREE.SkinnedMesh: Unrecognized bindMode: "+this.bindMode)}applyBoneTransform(e,t){const n=this.skeleton,s=this.geometry;hf.fromBufferAttribute(s.attributes.skinIndex,e),ff.fromBufferAttribute(s.attributes.skinWeight,e),uf.copy(t).applyMatrix4(this.bindMatrix),t.set(0,0,0);for(let a=0;a<4;a++){const r=ff.getComponent(a);if(r!==0){const o=hf.getComponent(a);pf.multiplyMatrices(n.bones[o].matrixWorld,n.boneInverses[o]),t.addScaledVector(i1.copy(uf).applyMatrix4(pf),r)}}return t.applyMatrix4(this.bindMatrixInverse)}}class sm extends Rt{constructor(){super(),this.isBone=!0,this.type="Bone"}}class am extends Ft{constructor(e=null,t=1,n=1,s,a,r,o,c,l=Zt,d=Zt,u,h){super(null,r,o,c,l,d,s,a,u,h),this.isDataTexture=!0,this.image={data:e,width:t,height:n},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}const gf=new He,a1=new He;class yu{constructor(e=[],t=[]){this.uuid=ai(),this.bones=e.slice(0),this.boneInverses=t,this.boneMatrices=null,this.boneTexture=null,this.init()}init(){const e=this.bones,t=this.boneInverses;if(this.boneMatrices=new Float32Array(e.length*16),t.length===0)this.calculateInverses();else if(e.length!==t.length){console.warn("THREE.Skeleton: Number of inverse bone matrices does not match amount of bones."),this.boneInverses=[];for(let n=0,s=this.bones.length;n<s;n++)this.boneInverses.push(new He)}}calculateInverses(){this.boneInverses.length=0;for(let e=0,t=this.bones.length;e<t;e++){const n=new He;this.bones[e]&&n.copy(this.bones[e].matrixWorld).invert(),this.boneInverses.push(n)}}pose(){for(let e=0,t=this.bones.length;e<t;e++){const n=this.bones[e];n&&n.matrixWorld.copy(this.boneInverses[e]).invert()}for(let e=0,t=this.bones.length;e<t;e++){const n=this.bones[e];n&&(n.parent&&n.parent.isBone?(n.matrix.copy(n.parent.matrixWorld).invert(),n.matrix.multiply(n.matrixWorld)):n.matrix.copy(n.matrixWorld),n.matrix.decompose(n.position,n.quaternion,n.scale))}}update(){const e=this.bones,t=this.boneInverses,n=this.boneMatrices,s=this.boneTexture;for(let a=0,r=e.length;a<r;a++){const o=e[a]?e[a].matrixWorld:a1;gf.multiplyMatrices(o,t[a]),gf.toArray(n,a*16)}s!==null&&(s.needsUpdate=!0)}clone(){return new yu(this.bones,this.boneInverses)}computeBoneTexture(){let e=Math.sqrt(this.bones.length*4);e=Math.ceil(e/4)*4,e=Math.max(e,4);const t=new Float32Array(e*e*4);t.set(this.boneMatrices);const n=new am(t,e,e,zn,ii);return n.needsUpdate=!0,this.boneMatrices=t,this.boneTexture=n,this}getBoneByName(e){for(let t=0,n=this.bones.length;t<n;t++){const s=this.bones[t];if(s.name===e)return s}}dispose(){this.boneTexture!==null&&(this.boneTexture.dispose(),this.boneTexture=null)}fromJSON(e,t){this.uuid=e.uuid;for(let n=0,s=e.bones.length;n<s;n++){const a=e.bones[n];let r=t[a];r===void 0&&(console.warn("THREE.Skeleton: No bone found with UUID:",a),r=new sm),this.bones.push(r),this.boneInverses.push(new He().fromArray(e.boneInverses[n]))}return this.init(),this}toJSON(){const e={metadata:{version:4.6,type:"Skeleton",generator:"Skeleton.toJSON"},bones:[],boneInverses:[]};e.uuid=this.uuid;const t=this.bones,n=this.boneInverses;for(let s=0,a=t.length;s<a;s++){const r=t[s];e.bones.push(r.uuid);const o=n[s];e.boneInverses.push(o.toArray())}return e}}class Pd extends dn{constructor(e,t,n,s=1){super(e,t,n),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=s}copy(e){return super.copy(e),this.meshPerAttribute=e.meshPerAttribute,this}toJSON(){const e=super.toJSON();return e.meshPerAttribute=this.meshPerAttribute,e.isInstancedBufferAttribute=!0,e}}const ea=new He,bf=new He,To=[],vf=new Rn,r1=new He,or=new j,cr=new pi;class o1 extends j{constructor(e,t,n){super(e,t),this.isInstancedMesh=!0,this.instanceMatrix=new Pd(new Float32Array(n*16),16),this.instanceColor=null,this.morphTexture=null,this.count=n,this.boundingBox=null,this.boundingSphere=null;for(let s=0;s<n;s++)this.setMatrixAt(s,r1)}computeBoundingBox(){const e=this.geometry,t=this.count;this.boundingBox===null&&(this.boundingBox=new Rn),e.boundingBox===null&&e.computeBoundingBox(),this.boundingBox.makeEmpty();for(let n=0;n<t;n++)this.getMatrixAt(n,ea),vf.copy(e.boundingBox).applyMatrix4(ea),this.boundingBox.union(vf)}computeBoundingSphere(){const e=this.geometry,t=this.count;this.boundingSphere===null&&(this.boundingSphere=new pi),e.boundingSphere===null&&e.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let n=0;n<t;n++)this.getMatrixAt(n,ea),cr.copy(e.boundingSphere).applyMatrix4(ea),this.boundingSphere.union(cr)}copy(e,t){return super.copy(e,t),this.instanceMatrix.copy(e.instanceMatrix),e.morphTexture!==null&&(this.morphTexture=e.morphTexture.clone()),e.instanceColor!==null&&(this.instanceColor=e.instanceColor.clone()),this.count=e.count,e.boundingBox!==null&&(this.boundingBox=e.boundingBox.clone()),e.boundingSphere!==null&&(this.boundingSphere=e.boundingSphere.clone()),this}getColorAt(e,t){t.fromArray(this.instanceColor.array,e*3)}getMatrixAt(e,t){t.fromArray(this.instanceMatrix.array,e*16)}getMorphAt(e,t){const n=t.morphTargetInfluences,s=this.morphTexture.source.data.data,a=n.length+1,r=e*a+1;for(let o=0;o<n.length;o++)n[o]=s[r+o]}raycast(e,t){const n=this.matrixWorld,s=this.count;if(or.geometry=this.geometry,or.material=this.material,or.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),cr.copy(this.boundingSphere),cr.applyMatrix4(n),e.ray.intersectsSphere(cr)!==!1))for(let a=0;a<s;a++){this.getMatrixAt(a,ea),bf.multiplyMatrices(n,ea),or.matrixWorld=bf,or.raycast(e,To);for(let r=0,o=To.length;r<o;r++){const c=To[r];c.instanceId=a,c.object=this,t.push(c)}To.length=0}}setColorAt(e,t){this.instanceColor===null&&(this.instanceColor=new Pd(new Float32Array(this.instanceMatrix.count*3).fill(1),3)),t.toArray(this.instanceColor.array,e*3)}setMatrixAt(e,t){t.toArray(this.instanceMatrix.array,e*16)}setMorphAt(e,t){const n=t.morphTargetInfluences,s=n.length+1;this.morphTexture===null&&(this.morphTexture=new am(new Float32Array(s*this.count),s,this.count,hu,ii));const a=this.morphTexture.source.data.data;let r=0;for(let l=0;l<n.length;l++)r+=n[l];const o=this.geometry.morphTargetsRelative?1:1-r,c=s*e;a[c]=o,a.set(n,c+1)}updateMorphTargets(){}dispose(){return this.dispatchEvent({type:"dispose"}),this.morphTexture!==null&&(this.morphTexture.dispose(),this.morphTexture=null),this}}class Mu extends ui{static get type(){return"LineBasicMaterial"}constructor(e){super(),this.isLineBasicMaterial=!0,this.color=new De(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}}const rc=new A,oc=new A,xf=new He,lr=new Xr,Ao=new pi,_l=new A,_f=new A;class Tc extends Rt{constructor(e=new Yt,t=new Mu){super(),this.isLine=!0,this.type="Line",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}computeLineDistances(){const e=this.geometry;if(e.index===null){const t=e.attributes.position,n=[0];for(let s=1,a=t.count;s<a;s++)rc.fromBufferAttribute(t,s-1),oc.fromBufferAttribute(t,s),n[s]=n[s-1],n[s]+=rc.distanceTo(oc);e.setAttribute("lineDistance",new Tt(n,1))}else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(e,t){const n=this.geometry,s=this.matrixWorld,a=e.params.Line.threshold,r=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),Ao.copy(n.boundingSphere),Ao.applyMatrix4(s),Ao.radius+=a,e.ray.intersectsSphere(Ao)===!1)return;xf.copy(s).invert(),lr.copy(e.ray).applyMatrix4(xf);const o=a/((this.scale.x+this.scale.y+this.scale.z)/3),c=o*o,l=this.isLineSegments?2:1,d=n.index,h=n.attributes.position;if(d!==null){const f=Math.max(0,r.start),g=Math.min(d.count,r.start+r.count);for(let b=f,m=g-1;b<m;b+=l){const p=d.getX(b),v=d.getX(b+1),x=Ro(this,e,lr,c,p,v);x&&t.push(x)}if(this.isLineLoop){const b=d.getX(g-1),m=d.getX(f),p=Ro(this,e,lr,c,b,m);p&&t.push(p)}}else{const f=Math.max(0,r.start),g=Math.min(h.count,r.start+r.count);for(let b=f,m=g-1;b<m;b+=l){const p=Ro(this,e,lr,c,b,b+1);p&&t.push(p)}if(this.isLineLoop){const b=Ro(this,e,lr,c,g-1,f);b&&t.push(b)}}}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const s=t[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let a=0,r=s.length;a<r;a++){const o=s[a].name||String(a);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=a}}}}}function Ro(i,e,t,n,s,a){const r=i.geometry.attributes.position;if(rc.fromBufferAttribute(r,s),oc.fromBufferAttribute(r,a),t.distanceSqToSegment(rc,oc,_l,_f)>n)return;_l.applyMatrix4(i.matrixWorld);const c=e.ray.origin.distanceTo(_l);if(!(c<e.near||c>e.far))return{distance:c,point:_f.clone().applyMatrix4(i.matrixWorld),index:s,face:null,faceIndex:null,barycoord:null,object:i}}const yf=new A,Mf=new A;class c1 extends Tc{constructor(e,t){super(e,t),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){const e=this.geometry;if(e.index===null){const t=e.attributes.position,n=[];for(let s=0,a=t.count;s<a;s+=2)yf.fromBufferAttribute(t,s),Mf.fromBufferAttribute(t,s+1),n[s]=s===0?0:n[s-1],n[s+1]=n[s]+yf.distanceTo(Mf);e.setAttribute("lineDistance",new Tt(n,1))}else console.warn("THREE.LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}}class l1 extends Tc{constructor(e,t){super(e,t),this.isLineLoop=!0,this.type="LineLoop"}}class Su extends ui{static get type(){return"PointsMaterial"}constructor(e){super(),this.isPointsMaterial=!0,this.color=new De(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.size=e.size,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}}const Sf=new He,Ld=new Xr,Co=new pi,Po=new A;class rm extends Rt{constructor(e=new Yt,t=new Su){super(),this.isPoints=!0,this.type="Points",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}raycast(e,t){const n=this.geometry,s=this.matrixWorld,a=e.params.Points.threshold,r=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),Co.copy(n.boundingSphere),Co.applyMatrix4(s),Co.radius+=a,e.ray.intersectsSphere(Co)===!1)return;Sf.copy(s).invert(),Ld.copy(e.ray).applyMatrix4(Sf);const o=a/((this.scale.x+this.scale.y+this.scale.z)/3),c=o*o,l=n.index,u=n.attributes.position;if(l!==null){const h=Math.max(0,r.start),f=Math.min(l.count,r.start+r.count);for(let g=h,b=f;g<b;g++){const m=l.getX(g);Po.fromBufferAttribute(u,m),wf(Po,m,c,s,e,t,this)}}else{const h=Math.max(0,r.start),f=Math.min(u.count,r.start+r.count);for(let g=h,b=f;g<b;g++)Po.fromBufferAttribute(u,g),wf(Po,g,c,s,e,t,this)}}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const s=t[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let a=0,r=s.length;a<r;a++){const o=s[a].name||String(a);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=a}}}}}function wf(i,e,t,n,s,a,r){const o=Ld.distanceSqToPoint(i);if(o<t){const c=new A;Ld.closestPointToPoint(i,c),c.applyMatrix4(n);const l=s.ray.origin.distanceTo(c);if(l<s.near||l>s.far)return;a.push({distance:l,distanceToRay:Math.sqrt(o),point:c,index:e,face:null,faceIndex:null,barycoord:null,object:r})}}class d1 extends Ft{constructor(e,t,n,s,a,r,o,c,l){super(e,t,n,s,a,r,o,c,l),this.isVideoTexture=!0,this.minFilter=r!==void 0?r:Qt,this.magFilter=a!==void 0?a:Qt,this.generateMipmaps=!1;const d=this;function u(){d.needsUpdate=!0,e.requestVideoFrameCallback(u)}"requestVideoFrameCallback"in e&&e.requestVideoFrameCallback(u)}clone(){return new this.constructor(this.image).copy(this)}update(){const e=this.image;"requestVideoFrameCallback"in e===!1&&e.readyState>=e.HAVE_CURRENT_DATA&&(this.needsUpdate=!0)}}class u1 extends Ft{constructor(e,t){super({width:e,height:t}),this.isFramebufferTexture=!0,this.magFilter=Zt,this.minFilter=Zt,this.generateMipmaps=!1,this.needsUpdate=!0}}class mi extends Ft{constructor(e,t,n,s,a,r,o,c,l){super(e,t,n,s,a,r,o,c,l),this.isCanvasTexture=!0,this.needsUpdate=!0}}class gi{constructor(){this.type="Curve",this.arcLengthDivisions=200}getPoint(){return console.warn("THREE.Curve: .getPoint() not implemented."),null}getPointAt(e,t){const n=this.getUtoTmapping(e);return this.getPoint(n,t)}getPoints(e=5){const t=[];for(let n=0;n<=e;n++)t.push(this.getPoint(n/e));return t}getSpacedPoints(e=5){const t=[];for(let n=0;n<=e;n++)t.push(this.getPointAt(n/e));return t}getLength(){const e=this.getLengths();return e[e.length-1]}getLengths(e=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===e+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;const t=[];let n,s=this.getPoint(0),a=0;t.push(0);for(let r=1;r<=e;r++)n=this.getPoint(r/e),a+=n.distanceTo(s),t.push(a),s=n;return this.cacheArcLengths=t,t}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(e,t){const n=this.getLengths();let s=0;const a=n.length;let r;t?r=t:r=e*n[a-1];let o=0,c=a-1,l;for(;o<=c;)if(s=Math.floor(o+(c-o)/2),l=n[s]-r,l<0)o=s+1;else if(l>0)c=s-1;else{c=s;break}if(s=c,n[s]===r)return s/(a-1);const d=n[s],h=n[s+1]-d,f=(r-d)/h;return(s+f)/(a-1)}getTangent(e,t){let s=e-1e-4,a=e+1e-4;s<0&&(s=0),a>1&&(a=1);const r=this.getPoint(s),o=this.getPoint(a),c=t||(r.isVector2?new Ce:new A);return c.copy(o).sub(r).normalize(),c}getTangentAt(e,t){const n=this.getUtoTmapping(e);return this.getTangent(n,t)}computeFrenetFrames(e,t){const n=new A,s=[],a=[],r=[],o=new A,c=new He;for(let f=0;f<=e;f++){const g=f/e;s[f]=this.getTangentAt(g,new A)}a[0]=new A,r[0]=new A;let l=Number.MAX_VALUE;const d=Math.abs(s[0].x),u=Math.abs(s[0].y),h=Math.abs(s[0].z);d<=l&&(l=d,n.set(1,0,0)),u<=l&&(l=u,n.set(0,1,0)),h<=l&&n.set(0,0,1),o.crossVectors(s[0],n).normalize(),a[0].crossVectors(s[0],o),r[0].crossVectors(s[0],a[0]);for(let f=1;f<=e;f++){if(a[f]=a[f-1].clone(),r[f]=r[f-1].clone(),o.crossVectors(s[f-1],s[f]),o.length()>Number.EPSILON){o.normalize();const g=Math.acos(Wt(s[f-1].dot(s[f]),-1,1));a[f].applyMatrix4(c.makeRotationAxis(o,g))}r[f].crossVectors(s[f],a[f])}if(t===!0){let f=Math.acos(Wt(a[0].dot(a[e]),-1,1));f/=e,s[0].dot(o.crossVectors(a[0],a[e]))>0&&(f=-f);for(let g=1;g<=e;g++)a[g].applyMatrix4(c.makeRotationAxis(s[g],f*g)),r[g].crossVectors(s[g],a[g])}return{tangents:s,normals:a,binormals:r}}clone(){return new this.constructor().copy(this)}copy(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}toJSON(){const e={metadata:{version:4.6,type:"Curve",generator:"Curve.toJSON"}};return e.arcLengthDivisions=this.arcLengthDivisions,e.type=this.type,e}fromJSON(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}}class om extends gi{constructor(e=0,t=0,n=1,s=1,a=0,r=Math.PI*2,o=!1,c=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=e,this.aY=t,this.xRadius=n,this.yRadius=s,this.aStartAngle=a,this.aEndAngle=r,this.aClockwise=o,this.aRotation=c}getPoint(e,t=new Ce){const n=t,s=Math.PI*2;let a=this.aEndAngle-this.aStartAngle;const r=Math.abs(a)<Number.EPSILON;for(;a<0;)a+=s;for(;a>s;)a-=s;a<Number.EPSILON&&(r?a=0:a=s),this.aClockwise===!0&&!r&&(a===s?a=-s:a=a-s);const o=this.aStartAngle+e*a;let c=this.aX+this.xRadius*Math.cos(o),l=this.aY+this.yRadius*Math.sin(o);if(this.aRotation!==0){const d=Math.cos(this.aRotation),u=Math.sin(this.aRotation),h=c-this.aX,f=l-this.aY;c=h*d-f*u+this.aX,l=h*u+f*d+this.aY}return n.set(c,l)}copy(e){return super.copy(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}toJSON(){const e=super.toJSON();return e.aX=this.aX,e.aY=this.aY,e.xRadius=this.xRadius,e.yRadius=this.yRadius,e.aStartAngle=this.aStartAngle,e.aEndAngle=this.aEndAngle,e.aClockwise=this.aClockwise,e.aRotation=this.aRotation,e}fromJSON(e){return super.fromJSON(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}}class h1 extends om{constructor(e,t,n,s,a,r){super(e,t,n,n,s,a,r),this.isArcCurve=!0,this.type="ArcCurve"}}function wu(){let i=0,e=0,t=0,n=0;function s(a,r,o,c){i=a,e=o,t=-3*a+3*r-2*o-c,n=2*a-2*r+o+c}return{initCatmullRom:function(a,r,o,c,l){s(r,o,l*(o-a),l*(c-r))},initNonuniformCatmullRom:function(a,r,o,c,l,d,u){let h=(r-a)/l-(o-a)/(l+d)+(o-r)/d,f=(o-r)/d-(c-r)/(d+u)+(c-o)/u;h*=d,f*=d,s(r,o,h,f)},calc:function(a){const r=a*a,o=r*a;return i+e*a+t*r+n*o}}}const Lo=new A,yl=new wu,Ml=new wu,Sl=new wu;class f1 extends gi{constructor(e=[],t=!1,n="centripetal",s=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=e,this.closed=t,this.curveType=n,this.tension=s}getPoint(e,t=new A){const n=t,s=this.points,a=s.length,r=(a-(this.closed?0:1))*e;let o=Math.floor(r),c=r-o;this.closed?o+=o>0?0:(Math.floor(Math.abs(o)/a)+1)*a:c===0&&o===a-1&&(o=a-2,c=1);let l,d;this.closed||o>0?l=s[(o-1)%a]:(Lo.subVectors(s[0],s[1]).add(s[0]),l=Lo);const u=s[o%a],h=s[(o+1)%a];if(this.closed||o+2<a?d=s[(o+2)%a]:(Lo.subVectors(s[a-1],s[a-2]).add(s[a-1]),d=Lo),this.curveType==="centripetal"||this.curveType==="chordal"){const f=this.curveType==="chordal"?.5:.25;let g=Math.pow(l.distanceToSquared(u),f),b=Math.pow(u.distanceToSquared(h),f),m=Math.pow(h.distanceToSquared(d),f);b<1e-4&&(b=1),g<1e-4&&(g=b),m<1e-4&&(m=b),yl.initNonuniformCatmullRom(l.x,u.x,h.x,d.x,g,b,m),Ml.initNonuniformCatmullRom(l.y,u.y,h.y,d.y,g,b,m),Sl.initNonuniformCatmullRom(l.z,u.z,h.z,d.z,g,b,m)}else this.curveType==="catmullrom"&&(yl.initCatmullRom(l.x,u.x,h.x,d.x,this.tension),Ml.initCatmullRom(l.y,u.y,h.y,d.y,this.tension),Sl.initCatmullRom(l.z,u.z,h.z,d.z,this.tension));return n.set(yl.calc(c),Ml.calc(c),Sl.calc(c)),n}copy(e){super.copy(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){const s=e.points[t];this.points.push(s.clone())}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}toJSON(){const e=super.toJSON();e.points=[];for(let t=0,n=this.points.length;t<n;t++){const s=this.points[t];e.points.push(s.toArray())}return e.closed=this.closed,e.curveType=this.curveType,e.tension=this.tension,e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){const s=e.points[t];this.points.push(new A().fromArray(s))}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}}function Ef(i,e,t,n,s){const a=(n-e)*.5,r=(s-t)*.5,o=i*i,c=i*o;return(2*t-2*n+a+r)*c+(-3*t+3*n-2*a-r)*o+a*i+t}function p1(i,e){const t=1-i;return t*t*e}function m1(i,e){return 2*(1-i)*i*e}function g1(i,e){return i*i*e}function Ar(i,e,t,n){return p1(i,e)+m1(i,t)+g1(i,n)}function b1(i,e){const t=1-i;return t*t*t*e}function v1(i,e){const t=1-i;return 3*t*t*i*e}function x1(i,e){return 3*(1-i)*i*i*e}function _1(i,e){return i*i*i*e}function Rr(i,e,t,n,s){return b1(i,e)+v1(i,t)+x1(i,n)+_1(i,s)}class y1 extends gi{constructor(e=new Ce,t=new Ce,n=new Ce,s=new Ce){super(),this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=e,this.v1=t,this.v2=n,this.v3=s}getPoint(e,t=new Ce){const n=t,s=this.v0,a=this.v1,r=this.v2,o=this.v3;return n.set(Rr(e,s.x,a.x,r.x,o.x),Rr(e,s.y,a.y,r.y,o.y)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}}class M1 extends gi{constructor(e=new A,t=new A,n=new A,s=new A){super(),this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=e,this.v1=t,this.v2=n,this.v3=s}getPoint(e,t=new A){const n=t,s=this.v0,a=this.v1,r=this.v2,o=this.v3;return n.set(Rr(e,s.x,a.x,r.x,o.x),Rr(e,s.y,a.y,r.y,o.y),Rr(e,s.z,a.z,r.z,o.z)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}}class S1 extends gi{constructor(e=new Ce,t=new Ce){super(),this.isLineCurve=!0,this.type="LineCurve",this.v1=e,this.v2=t}getPoint(e,t=new Ce){const n=t;return e===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(e).add(this.v1)),n}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t=new Ce){return t.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,t){return this.getTangent(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class Dd extends gi{constructor(e=new A,t=new A){super(),this.isLineCurve3=!0,this.type="LineCurve3",this.v1=e,this.v2=t}getPoint(e,t=new A){const n=t;return e===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(e).add(this.v1)),n}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t=new A){return t.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,t){return this.getTangent(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class w1 extends gi{constructor(e=new Ce,t=new Ce,n=new Ce){super(),this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=e,this.v1=t,this.v2=n}getPoint(e,t=new Ce){const n=t,s=this.v0,a=this.v1,r=this.v2;return n.set(Ar(e,s.x,a.x,r.x),Ar(e,s.y,a.y,r.y)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class E1 extends gi{constructor(e=new A,t=new A,n=new A){super(),this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=e,this.v1=t,this.v2=n}getPoint(e,t=new A){const n=t,s=this.v0,a=this.v1,r=this.v2;return n.set(Ar(e,s.x,a.x,r.x),Ar(e,s.y,a.y,r.y),Ar(e,s.z,a.z,r.z)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class T1 extends gi{constructor(e=[]){super(),this.isSplineCurve=!0,this.type="SplineCurve",this.points=e}getPoint(e,t=new Ce){const n=t,s=this.points,a=(s.length-1)*e,r=Math.floor(a),o=a-r,c=s[r===0?r:r-1],l=s[r],d=s[r>s.length-2?s.length-1:r+1],u=s[r>s.length-3?s.length-1:r+2];return n.set(Ef(o,c.x,l.x,d.x,u.x),Ef(o,c.y,l.y,d.y,u.y)),n}copy(e){super.copy(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){const s=e.points[t];this.points.push(s.clone())}return this}toJSON(){const e=super.toJSON();e.points=[];for(let t=0,n=this.points.length;t<n;t++){const s=this.points[t];e.points.push(s.toArray())}return e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){const s=e.points[t];this.points.push(new Ce().fromArray(s))}return this}}var Tf=Object.freeze({__proto__:null,ArcCurve:h1,CatmullRomCurve3:f1,CubicBezierCurve:y1,CubicBezierCurve3:M1,EllipseCurve:om,LineCurve:S1,LineCurve3:Dd,QuadraticBezierCurve:w1,QuadraticBezierCurve3:E1,SplineCurve:T1});class A1 extends gi{constructor(){super(),this.type="CurvePath",this.curves=[],this.autoClose=!1}add(e){this.curves.push(e)}closePath(){const e=this.curves[0].getPoint(0),t=this.curves[this.curves.length-1].getPoint(1);if(!e.equals(t)){const n=e.isVector2===!0?"LineCurve":"LineCurve3";this.curves.push(new Tf[n](t,e))}return this}getPoint(e,t){const n=e*this.getLength(),s=this.getCurveLengths();let a=0;for(;a<s.length;){if(s[a]>=n){const r=s[a]-n,o=this.curves[a],c=o.getLength(),l=c===0?0:1-r/c;return o.getPointAt(l,t)}a++}return null}getLength(){const e=this.getCurveLengths();return e[e.length-1]}updateArcLengths(){this.needsUpdate=!0,this.cacheLengths=null,this.getCurveLengths()}getCurveLengths(){if(this.cacheLengths&&this.cacheLengths.length===this.curves.length)return this.cacheLengths;const e=[];let t=0;for(let n=0,s=this.curves.length;n<s;n++)t+=this.curves[n].getLength(),e.push(t);return this.cacheLengths=e,e}getSpacedPoints(e=40){const t=[];for(let n=0;n<=e;n++)t.push(this.getPoint(n/e));return this.autoClose&&t.push(t[0]),t}getPoints(e=12){const t=[];let n;for(let s=0,a=this.curves;s<a.length;s++){const r=a[s],o=r.isEllipseCurve?e*2:r.isLineCurve||r.isLineCurve3?1:r.isSplineCurve?e*r.points.length:e,c=r.getPoints(o);for(let l=0;l<c.length;l++){const d=c[l];n&&n.equals(d)||(t.push(d),n=d)}}return this.autoClose&&t.length>1&&!t[t.length-1].equals(t[0])&&t.push(t[0]),t}copy(e){super.copy(e),this.curves=[];for(let t=0,n=e.curves.length;t<n;t++){const s=e.curves[t];this.curves.push(s.clone())}return this.autoClose=e.autoClose,this}toJSON(){const e=super.toJSON();e.autoClose=this.autoClose,e.curves=[];for(let t=0,n=this.curves.length;t<n;t++){const s=this.curves[t];e.curves.push(s.toJSON())}return e}fromJSON(e){super.fromJSON(e),this.autoClose=e.autoClose,this.curves=[];for(let t=0,n=e.curves.length;t<n;t++){const s=e.curves[t];this.curves.push(new Tf[s.type]().fromJSON(s))}return this}}class Eu extends Yt{constructor(e=1,t=32,n=0,s=Math.PI*2){super(),this.type="CircleGeometry",this.parameters={radius:e,segments:t,thetaStart:n,thetaLength:s},t=Math.max(3,t);const a=[],r=[],o=[],c=[],l=new A,d=new Ce;r.push(0,0,0),o.push(0,0,1),c.push(.5,.5);for(let u=0,h=3;u<=t;u++,h+=3){const f=n+u/t*s;l.x=e*Math.cos(f),l.y=e*Math.sin(f),r.push(l.x,l.y,l.z),o.push(0,0,1),d.x=(r[h]/e+1)/2,d.y=(r[h+1]/e+1)/2,c.push(d.x,d.y)}for(let u=1;u<=t;u++)a.push(u,u+1,0);this.setIndex(a),this.setAttribute("position",new Tt(r,3)),this.setAttribute("normal",new Tt(o,3)),this.setAttribute("uv",new Tt(c,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Eu(e.radius,e.segments,e.thetaStart,e.thetaLength)}}class It extends Yt{constructor(e=1,t=1,n=1,s=32,a=1,r=!1,o=0,c=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:e,radiusBottom:t,height:n,radialSegments:s,heightSegments:a,openEnded:r,thetaStart:o,thetaLength:c};const l=this;s=Math.floor(s),a=Math.floor(a);const d=[],u=[],h=[],f=[];let g=0;const b=[],m=n/2;let p=0;v(),r===!1&&(e>0&&x(!0),t>0&&x(!1)),this.setIndex(d),this.setAttribute("position",new Tt(u,3)),this.setAttribute("normal",new Tt(h,3)),this.setAttribute("uv",new Tt(f,2));function v(){const y=new A,D=new A;let T=0;const R=(t-e)/n;for(let I=0;I<=a;I++){const _=[],M=I/a,L=M*(t-e)+e;for(let k=0;k<=s;k++){const P=k/s,B=P*c+o,H=Math.sin(B),z=Math.cos(B);D.x=L*H,D.y=-M*n+m,D.z=L*z,u.push(D.x,D.y,D.z),y.set(H,R,z).normalize(),h.push(y.x,y.y,y.z),f.push(P,1-M),_.push(g++)}b.push(_)}for(let I=0;I<s;I++)for(let _=0;_<a;_++){const M=b[_][I],L=b[_+1][I],k=b[_+1][I+1],P=b[_][I+1];(e>0||_!==0)&&(d.push(M,L,P),T+=3),(t>0||_!==a-1)&&(d.push(L,k,P),T+=3)}l.addGroup(p,T,0),p+=T}function x(y){const D=g,T=new Ce,R=new A;let I=0;const _=y===!0?e:t,M=y===!0?1:-1;for(let k=1;k<=s;k++)u.push(0,m*M,0),h.push(0,M,0),f.push(.5,.5),g++;const L=g;for(let k=0;k<=s;k++){const B=k/s*c+o,H=Math.cos(B),z=Math.sin(B);R.x=_*z,R.y=m*M,R.z=_*H,u.push(R.x,R.y,R.z),h.push(0,M,0),T.x=H*.5+.5,T.y=z*.5*M+.5,f.push(T.x,T.y),g++}for(let k=0;k<s;k++){const P=D+k,B=L+k;y===!0?d.push(B,B+1,P):d.push(B+1,B,P),I+=3}l.addGroup(p,I,y===!0?1:2),p+=I}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new It(e.radiusTop,e.radiusBottom,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}}class Tu extends It{constructor(e=1,t=1,n=32,s=1,a=!1,r=0,o=Math.PI*2){super(0,e,t,n,s,a,r,o),this.type="ConeGeometry",this.parameters={radius:e,height:t,radialSegments:n,heightSegments:s,openEnded:a,thetaStart:r,thetaLength:o}}static fromJSON(e){return new Tu(e.radius,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}}class si extends Yt{constructor(e=1,t=32,n=16,s=0,a=Math.PI*2,r=0,o=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:e,widthSegments:t,heightSegments:n,phiStart:s,phiLength:a,thetaStart:r,thetaLength:o},t=Math.max(3,Math.floor(t)),n=Math.max(2,Math.floor(n));const c=Math.min(r+o,Math.PI);let l=0;const d=[],u=new A,h=new A,f=[],g=[],b=[],m=[];for(let p=0;p<=n;p++){const v=[],x=p/n;let y=0;p===0&&r===0?y=.5/t:p===n&&c===Math.PI&&(y=-.5/t);for(let D=0;D<=t;D++){const T=D/t;u.x=-e*Math.cos(s+T*a)*Math.sin(r+x*o),u.y=e*Math.cos(r+x*o),u.z=e*Math.sin(s+T*a)*Math.sin(r+x*o),g.push(u.x,u.y,u.z),h.copy(u).normalize(),b.push(h.x,h.y,h.z),m.push(T+y,1-x),v.push(l++)}d.push(v)}for(let p=0;p<n;p++)for(let v=0;v<t;v++){const x=d[p][v+1],y=d[p][v],D=d[p+1][v],T=d[p+1][v+1];(p!==0||r>0)&&f.push(x,y,T),(p!==n-1||c<Math.PI)&&f.push(y,D,T)}this.setIndex(f),this.setAttribute("position",new Tt(g,3)),this.setAttribute("normal",new Tt(b,3)),this.setAttribute("uv",new Tt(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new si(e.radius,e.widthSegments,e.heightSegments,e.phiStart,e.phiLength,e.thetaStart,e.thetaLength)}}class Ac extends Yt{constructor(e=1,t=.4,n=12,s=48,a=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:e,tube:t,radialSegments:n,tubularSegments:s,arc:a},n=Math.floor(n),s=Math.floor(s);const r=[],o=[],c=[],l=[],d=new A,u=new A,h=new A;for(let f=0;f<=n;f++)for(let g=0;g<=s;g++){const b=g/s*a,m=f/n*Math.PI*2;u.x=(e+t*Math.cos(m))*Math.cos(b),u.y=(e+t*Math.cos(m))*Math.sin(b),u.z=t*Math.sin(m),o.push(u.x,u.y,u.z),d.x=e*Math.cos(b),d.y=e*Math.sin(b),h.subVectors(u,d).normalize(),c.push(h.x,h.y,h.z),l.push(g/s),l.push(f/n)}for(let f=1;f<=n;f++)for(let g=1;g<=s;g++){const b=(s+1)*f+g-1,m=(s+1)*(f-1)+g-1,p=(s+1)*(f-1)+g,v=(s+1)*f+g;r.push(b,m,v),r.push(m,p,v)}this.setIndex(r),this.setAttribute("position",new Tt(o,3)),this.setAttribute("normal",new Tt(c,3)),this.setAttribute("uv",new Tt(l,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Ac(e.radius,e.tube,e.radialSegments,e.tubularSegments,e.arc)}}class Wn extends ui{static get type(){return"MeshStandardMaterial"}constructor(e){super(),this.isMeshStandardMaterial=!0,this.defines={STANDARD:""},this.color=new De(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new De(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=zp,this.normalScale=new Ce(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new An,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class bi extends Wn{static get type(){return"MeshPhysicalMaterial"}constructor(e){super(),this.isMeshPhysicalMaterial=!0,this.defines={STANDARD:"",PHYSICAL:""},this.anisotropyRotation=0,this.anisotropyMap=null,this.clearcoatMap=null,this.clearcoatRoughness=0,this.clearcoatRoughnessMap=null,this.clearcoatNormalScale=new Ce(1,1),this.clearcoatNormalMap=null,this.ior=1.5,Object.defineProperty(this,"reflectivity",{get:function(){return Wt(2.5*(this.ior-1)/(this.ior+1),0,1)},set:function(t){this.ior=(1+.4*t)/(1-.4*t)}}),this.iridescenceMap=null,this.iridescenceIOR=1.3,this.iridescenceThicknessRange=[100,400],this.iridescenceThicknessMap=null,this.sheenColor=new De(0),this.sheenColorMap=null,this.sheenRoughness=1,this.sheenRoughnessMap=null,this.transmissionMap=null,this.thickness=0,this.thicknessMap=null,this.attenuationDistance=1/0,this.attenuationColor=new De(1,1,1),this.specularIntensity=1,this.specularIntensityMap=null,this.specularColor=new De(1,1,1),this.specularColorMap=null,this._anisotropy=0,this._clearcoat=0,this._dispersion=0,this._iridescence=0,this._sheen=0,this._transmission=0,this.setValues(e)}get anisotropy(){return this._anisotropy}set anisotropy(e){this._anisotropy>0!=e>0&&this.version++,this._anisotropy=e}get clearcoat(){return this._clearcoat}set clearcoat(e){this._clearcoat>0!=e>0&&this.version++,this._clearcoat=e}get iridescence(){return this._iridescence}set iridescence(e){this._iridescence>0!=e>0&&this.version++,this._iridescence=e}get dispersion(){return this._dispersion}set dispersion(e){this._dispersion>0!=e>0&&this.version++,this._dispersion=e}get sheen(){return this._sheen}set sheen(e){this._sheen>0!=e>0&&this.version++,this._sheen=e}get transmission(){return this._transmission}set transmission(e){this._transmission>0!=e>0&&this.version++,this._transmission=e}copy(e){return super.copy(e),this.defines={STANDARD:"",PHYSICAL:""},this.anisotropy=e.anisotropy,this.anisotropyRotation=e.anisotropyRotation,this.anisotropyMap=e.anisotropyMap,this.clearcoat=e.clearcoat,this.clearcoatMap=e.clearcoatMap,this.clearcoatRoughness=e.clearcoatRoughness,this.clearcoatRoughnessMap=e.clearcoatRoughnessMap,this.clearcoatNormalMap=e.clearcoatNormalMap,this.clearcoatNormalScale.copy(e.clearcoatNormalScale),this.dispersion=e.dispersion,this.ior=e.ior,this.iridescence=e.iridescence,this.iridescenceMap=e.iridescenceMap,this.iridescenceIOR=e.iridescenceIOR,this.iridescenceThicknessRange=[...e.iridescenceThicknessRange],this.iridescenceThicknessMap=e.iridescenceThicknessMap,this.sheen=e.sheen,this.sheenColor.copy(e.sheenColor),this.sheenColorMap=e.sheenColorMap,this.sheenRoughness=e.sheenRoughness,this.sheenRoughnessMap=e.sheenRoughnessMap,this.transmission=e.transmission,this.transmissionMap=e.transmissionMap,this.thickness=e.thickness,this.thicknessMap=e.thicknessMap,this.attenuationDistance=e.attenuationDistance,this.attenuationColor.copy(e.attenuationColor),this.specularIntensity=e.specularIntensity,this.specularIntensityMap=e.specularIntensityMap,this.specularColor.copy(e.specularColor),this.specularColorMap=e.specularColorMap,this}}function Do(i,e,t){return!i||!t&&i.constructor===e?i:typeof e.BYTES_PER_ELEMENT=="number"?new e(i):Array.prototype.slice.call(i)}function R1(i){return ArrayBuffer.isView(i)&&!(i instanceof DataView)}function C1(i){function e(s,a){return i[s]-i[a]}const t=i.length,n=new Array(t);for(let s=0;s!==t;++s)n[s]=s;return n.sort(e),n}function Af(i,e,t){const n=i.length,s=new i.constructor(n);for(let a=0,r=0;r!==n;++a){const o=t[a]*e;for(let c=0;c!==e;++c)s[r++]=i[o+c]}return s}function cm(i,e,t,n){let s=1,a=i[0];for(;a!==void 0&&a[n]===void 0;)a=i[s++];if(a===void 0)return;let r=a[n];if(r!==void 0)if(Array.isArray(r))do r=a[n],r!==void 0&&(e.push(a.time),t.push.apply(t,r)),a=i[s++];while(a!==void 0);else if(r.toArray!==void 0)do r=a[n],r!==void 0&&(e.push(a.time),r.toArray(t,t.length)),a=i[s++];while(a!==void 0);else do r=a[n],r!==void 0&&(e.push(a.time),t.push(r)),a=i[s++];while(a!==void 0)}class Kr{constructor(e,t,n,s){this.parameterPositions=e,this._cachedIndex=0,this.resultBuffer=s!==void 0?s:new t.constructor(n),this.sampleValues=t,this.valueSize=n,this.settings=null,this.DefaultSettings_={}}evaluate(e){const t=this.parameterPositions;let n=this._cachedIndex,s=t[n],a=t[n-1];n:{e:{let r;t:{i:if(!(e<s)){for(let o=n+2;;){if(s===void 0){if(e<a)break i;return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}if(n===o)break;if(a=s,s=t[++n],e<s)break e}r=t.length;break t}if(!(e>=a)){const o=t[1];e<o&&(n=2,a=o);for(let c=n-2;;){if(a===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(n===c)break;if(s=a,a=t[--n-1],e>=a)break e}r=n,n=0;break t}break n}for(;n<r;){const o=n+r>>>1;e<t[o]?r=o:n=o+1}if(s=t[n],a=t[n-1],a===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(s===void 0)return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}this._cachedIndex=n,this.intervalChanged_(n,a,s)}return this.interpolate_(n,a,e,s)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(e){const t=this.resultBuffer,n=this.sampleValues,s=this.valueSize,a=e*s;for(let r=0;r!==s;++r)t[r]=n[a+r];return t}interpolate_(){throw new Error("call to abstract method")}intervalChanged_(){}}class P1 extends Kr{constructor(e,t,n,s){super(e,t,n,s),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:ph,endingEnd:ph}}intervalChanged_(e,t,n){const s=this.parameterPositions;let a=e-2,r=e+1,o=s[a],c=s[r];if(o===void 0)switch(this.getSettings_().endingStart){case mh:a=e,o=2*t-n;break;case gh:a=s.length-2,o=t+s[a]-s[a+1];break;default:a=e,o=n}if(c===void 0)switch(this.getSettings_().endingEnd){case mh:r=e,c=2*n-t;break;case gh:r=1,c=n+s[1]-s[0];break;default:r=e-1,c=t}const l=(n-t)*.5,d=this.valueSize;this._weightPrev=l/(t-o),this._weightNext=l/(c-n),this._offsetPrev=a*d,this._offsetNext=r*d}interpolate_(e,t,n,s){const a=this.resultBuffer,r=this.sampleValues,o=this.valueSize,c=e*o,l=c-o,d=this._offsetPrev,u=this._offsetNext,h=this._weightPrev,f=this._weightNext,g=(n-t)/(s-t),b=g*g,m=b*g,p=-h*m+2*h*b-h*g,v=(1+h)*m+(-1.5-2*h)*b+(-.5+h)*g+1,x=(-1-f)*m+(1.5+f)*b+.5*g,y=f*m-f*b;for(let D=0;D!==o;++D)a[D]=p*r[d+D]+v*r[l+D]+x*r[c+D]+y*r[u+D];return a}}class L1 extends Kr{constructor(e,t,n,s){super(e,t,n,s)}interpolate_(e,t,n,s){const a=this.resultBuffer,r=this.sampleValues,o=this.valueSize,c=e*o,l=c-o,d=(n-t)/(s-t),u=1-d;for(let h=0;h!==o;++h)a[h]=r[l+h]*u+r[c+h]*d;return a}}class D1 extends Kr{constructor(e,t,n,s){super(e,t,n,s)}interpolate_(e){return this.copySampleValue_(e-1)}}class vi{constructor(e,t,n,s){if(e===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(t===void 0||t.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+e);this.name=e,this.times=Do(t,this.TimeBufferType),this.values=Do(n,this.ValueBufferType),this.setInterpolation(s||this.DefaultInterpolation)}static toJSON(e){const t=e.constructor;let n;if(t.toJSON!==this.toJSON)n=t.toJSON(e);else{n={name:e.name,times:Do(e.times,Array),values:Do(e.values,Array)};const s=e.getInterpolation();s!==e.DefaultInterpolation&&(n.interpolation=s)}return n.type=e.ValueTypeName,n}InterpolantFactoryMethodDiscrete(e){return new D1(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodLinear(e){return new L1(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodSmooth(e){return new P1(this.times,this.values,this.getValueSize(),e)}setInterpolation(e){let t;switch(e){case Or:t=this.InterpolantFactoryMethodDiscrete;break;case Br:t=this.InterpolantFactoryMethodLinear;break;case Wc:t=this.InterpolantFactoryMethodSmooth;break}if(t===void 0){const n="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(e!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(n);return console.warn("THREE.KeyframeTrack:",n),this}return this.createInterpolant=t,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return Or;case this.InterpolantFactoryMethodLinear:return Br;case this.InterpolantFactoryMethodSmooth:return Wc}}getValueSize(){return this.values.length/this.times.length}shift(e){if(e!==0){const t=this.times;for(let n=0,s=t.length;n!==s;++n)t[n]+=e}return this}scale(e){if(e!==1){const t=this.times;for(let n=0,s=t.length;n!==s;++n)t[n]*=e}return this}trim(e,t){const n=this.times,s=n.length;let a=0,r=s-1;for(;a!==s&&n[a]<e;)++a;for(;r!==-1&&n[r]>t;)--r;if(++r,a!==0||r!==s){a>=r&&(r=Math.max(r,1),a=r-1);const o=this.getValueSize();this.times=n.slice(a,r),this.values=this.values.slice(a*o,r*o)}return this}validate(){let e=!0;const t=this.getValueSize();t-Math.floor(t)!==0&&(console.error("THREE.KeyframeTrack: Invalid value size in track.",this),e=!1);const n=this.times,s=this.values,a=n.length;a===0&&(console.error("THREE.KeyframeTrack: Track is empty.",this),e=!1);let r=null;for(let o=0;o!==a;o++){const c=n[o];if(typeof c=="number"&&isNaN(c)){console.error("THREE.KeyframeTrack: Time is not a valid number.",this,o,c),e=!1;break}if(r!==null&&r>c){console.error("THREE.KeyframeTrack: Out of order keys.",this,o,c,r),e=!1;break}r=c}if(s!==void 0&&R1(s))for(let o=0,c=s.length;o!==c;++o){const l=s[o];if(isNaN(l)){console.error("THREE.KeyframeTrack: Value is not a valid number.",this,o,l),e=!1;break}}return e}optimize(){const e=this.times.slice(),t=this.values.slice(),n=this.getValueSize(),s=this.getInterpolation()===Wc,a=e.length-1;let r=1;for(let o=1;o<a;++o){let c=!1;const l=e[o],d=e[o+1];if(l!==d&&(o!==1||l!==e[0]))if(s)c=!0;else{const u=o*n,h=u-n,f=u+n;for(let g=0;g!==n;++g){const b=t[u+g];if(b!==t[h+g]||b!==t[f+g]){c=!0;break}}}if(c){if(o!==r){e[r]=e[o];const u=o*n,h=r*n;for(let f=0;f!==n;++f)t[h+f]=t[u+f]}++r}}if(a>0){e[r]=e[a];for(let o=a*n,c=r*n,l=0;l!==n;++l)t[c+l]=t[o+l];++r}return r!==e.length?(this.times=e.slice(0,r),this.values=t.slice(0,r*n)):(this.times=e,this.values=t),this}clone(){const e=this.times.slice(),t=this.values.slice(),n=this.constructor,s=new n(this.name,e,t);return s.createInterpolant=this.createInterpolant,s}}vi.prototype.TimeBufferType=Float32Array;vi.prototype.ValueBufferType=Float32Array;vi.prototype.DefaultInterpolation=Br;class Ya extends vi{constructor(e,t,n){super(e,t,n)}}Ya.prototype.ValueTypeName="bool";Ya.prototype.ValueBufferType=Array;Ya.prototype.DefaultInterpolation=Or;Ya.prototype.InterpolantFactoryMethodLinear=void 0;Ya.prototype.InterpolantFactoryMethodSmooth=void 0;class lm extends vi{}lm.prototype.ValueTypeName="color";class Ia extends vi{}Ia.prototype.ValueTypeName="number";class I1 extends Kr{constructor(e,t,n,s){super(e,t,n,s)}interpolate_(e,t,n,s){const a=this.resultBuffer,r=this.sampleValues,o=this.valueSize,c=(n-t)/(s-t);let l=e*o;for(let d=l+o;l!==d;l+=4)Gn.slerpFlat(a,0,r,l-o,r,l,c);return a}}class ka extends vi{InterpolantFactoryMethodLinear(e){return new I1(this.times,this.values,this.getValueSize(),e)}}ka.prototype.ValueTypeName="quaternion";ka.prototype.InterpolantFactoryMethodSmooth=void 0;class Ka extends vi{constructor(e,t,n){super(e,t,n)}}Ka.prototype.ValueTypeName="string";Ka.prototype.ValueBufferType=Array;Ka.prototype.DefaultInterpolation=Or;Ka.prototype.InterpolantFactoryMethodLinear=void 0;Ka.prototype.InterpolantFactoryMethodSmooth=void 0;class Na extends vi{}Na.prototype.ValueTypeName="vector";class k1{constructor(e="",t=-1,n=[],s=p0){this.name=e,this.tracks=n,this.duration=t,this.blendMode=s,this.uuid=ai(),this.duration<0&&this.resetDuration()}static parse(e){const t=[],n=e.tracks,s=1/(e.fps||1);for(let r=0,o=n.length;r!==o;++r)t.push(F1(n[r]).scale(s));const a=new this(e.name,e.duration,t,e.blendMode);return a.uuid=e.uuid,a}static toJSON(e){const t=[],n=e.tracks,s={name:e.name,duration:e.duration,tracks:t,uuid:e.uuid,blendMode:e.blendMode};for(let a=0,r=n.length;a!==r;++a)t.push(vi.toJSON(n[a]));return s}static CreateFromMorphTargetSequence(e,t,n,s){const a=t.length,r=[];for(let o=0;o<a;o++){let c=[],l=[];c.push((o+a-1)%a,o,(o+1)%a),l.push(0,1,0);const d=C1(c);c=Af(c,1,d),l=Af(l,1,d),!s&&c[0]===0&&(c.push(a),l.push(l[0])),r.push(new Ia(".morphTargetInfluences["+t[o].name+"]",c,l).scale(1/n))}return new this(e,-1,r)}static findByName(e,t){let n=e;if(!Array.isArray(e)){const s=e;n=s.geometry&&s.geometry.animations||s.animations}for(let s=0;s<n.length;s++)if(n[s].name===t)return n[s];return null}static CreateClipsFromMorphTargetSequences(e,t,n){const s={},a=/^([\w-]*?)([\d]+)$/;for(let o=0,c=e.length;o<c;o++){const l=e[o],d=l.name.match(a);if(d&&d.length>1){const u=d[1];let h=s[u];h||(s[u]=h=[]),h.push(l)}}const r=[];for(const o in s)r.push(this.CreateFromMorphTargetSequence(o,s[o],t,n));return r}static parseAnimation(e,t){if(!e)return console.error("THREE.AnimationClip: No animation in JSONLoader data."),null;const n=function(u,h,f,g,b){if(f.length!==0){const m=[],p=[];cm(f,m,p,g),m.length!==0&&b.push(new u(h,m,p))}},s=[],a=e.name||"default",r=e.fps||30,o=e.blendMode;let c=e.length||-1;const l=e.hierarchy||[];for(let u=0;u<l.length;u++){const h=l[u].keys;if(!(!h||h.length===0))if(h[0].morphTargets){const f={};let g;for(g=0;g<h.length;g++)if(h[g].morphTargets)for(let b=0;b<h[g].morphTargets.length;b++)f[h[g].morphTargets[b]]=-1;for(const b in f){const m=[],p=[];for(let v=0;v!==h[g].morphTargets.length;++v){const x=h[g];m.push(x.time),p.push(x.morphTarget===b?1:0)}s.push(new Ia(".morphTargetInfluence["+b+"]",m,p))}c=f.length*r}else{const f=".bones["+t[u].name+"]";n(Na,f+".position",h,"pos",s),n(ka,f+".quaternion",h,"rot",s),n(Na,f+".scale",h,"scl",s)}}return s.length===0?null:new this(a,c,s,o)}resetDuration(){const e=this.tracks;let t=0;for(let n=0,s=e.length;n!==s;++n){const a=this.tracks[n];t=Math.max(t,a.times[a.times.length-1])}return this.duration=t,this}trim(){for(let e=0;e<this.tracks.length;e++)this.tracks[e].trim(0,this.duration);return this}validate(){let e=!0;for(let t=0;t<this.tracks.length;t++)e=e&&this.tracks[t].validate();return e}optimize(){for(let e=0;e<this.tracks.length;e++)this.tracks[e].optimize();return this}clone(){const e=[];for(let t=0;t<this.tracks.length;t++)e.push(this.tracks[t].clone());return new this.constructor(this.name,this.duration,e,this.blendMode)}toJSON(){return this.constructor.toJSON(this)}}function N1(i){switch(i.toLowerCase()){case"scalar":case"double":case"float":case"number":case"integer":return Ia;case"vector":case"vector2":case"vector3":case"vector4":return Na;case"color":return lm;case"quaternion":return ka;case"bool":case"boolean":return Ya;case"string":return Ka}throw new Error("THREE.KeyframeTrack: Unsupported typeName: "+i)}function F1(i){if(i.type===void 0)throw new Error("THREE.KeyframeTrack: track type undefined, can not parse");const e=N1(i.type);if(i.times===void 0){const t=[],n=[];cm(i.keys,t,n,"value"),i.times=t,i.values=n}return e.parse!==void 0?e.parse(i):new e(i.name,i.times,i.values,i.interpolation)}const ts={enabled:!1,files:{},add:function(i,e){this.enabled!==!1&&(this.files[i]=e)},get:function(i){if(this.enabled!==!1)return this.files[i]},remove:function(i){delete this.files[i]},clear:function(){this.files={}}};class U1{constructor(e,t,n){const s=this;let a=!1,r=0,o=0,c;const l=[];this.onStart=void 0,this.onLoad=e,this.onProgress=t,this.onError=n,this.itemStart=function(d){o++,a===!1&&s.onStart!==void 0&&s.onStart(d,r,o),a=!0},this.itemEnd=function(d){r++,s.onProgress!==void 0&&s.onProgress(d,r,o),r===o&&(a=!1,s.onLoad!==void 0&&s.onLoad())},this.itemError=function(d){s.onError!==void 0&&s.onError(d)},this.resolveURL=function(d){return c?c(d):d},this.setURLModifier=function(d){return c=d,this},this.addHandler=function(d,u){return l.push(d,u),this},this.removeHandler=function(d){const u=l.indexOf(d);return u!==-1&&l.splice(u,2),this},this.getHandler=function(d){for(let u=0,h=l.length;u<h;u+=2){const f=l[u],g=l[u+1];if(f.global&&(f.lastIndex=0),f.test(d))return g}return null}}}const O1=new U1;class $a{constructor(e){this.manager=e!==void 0?e:O1,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(e,t){const n=this;return new Promise(function(s,a){n.load(e,s,t,a)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}}$a.DEFAULT_MATERIAL_NAME="__DEFAULT";const Ti={};class B1 extends Error{constructor(e,t){super(e),this.response=t}}class dm extends $a{constructor(e){super(e)}load(e,t,n,s){e===void 0&&(e=""),this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const a=ts.get(e);if(a!==void 0)return this.manager.itemStart(e),setTimeout(()=>{t&&t(a),this.manager.itemEnd(e)},0),a;if(Ti[e]!==void 0){Ti[e].push({onLoad:t,onProgress:n,onError:s});return}Ti[e]=[],Ti[e].push({onLoad:t,onProgress:n,onError:s});const r=new Request(e,{headers:new Headers(this.requestHeader),credentials:this.withCredentials?"include":"same-origin"}),o=this.mimeType,c=this.responseType;fetch(r).then(l=>{if(l.status===200||l.status===0){if(l.status===0&&console.warn("THREE.FileLoader: HTTP Status 0 received."),typeof ReadableStream>"u"||l.body===void 0||l.body.getReader===void 0)return l;const d=Ti[e],u=l.body.getReader(),h=l.headers.get("X-File-Size")||l.headers.get("Content-Length"),f=h?parseInt(h):0,g=f!==0;let b=0;const m=new ReadableStream({start(p){v();function v(){u.read().then(({done:x,value:y})=>{if(x)p.close();else{b+=y.byteLength;const D=new ProgressEvent("progress",{lengthComputable:g,loaded:b,total:f});for(let T=0,R=d.length;T<R;T++){const I=d[T];I.onProgress&&I.onProgress(D)}p.enqueue(y),v()}},x=>{p.error(x)})}}});return new Response(m)}else throw new B1(`fetch for "${l.url}" responded with ${l.status}: ${l.statusText}`,l)}).then(l=>{switch(c){case"arraybuffer":return l.arrayBuffer();case"blob":return l.blob();case"document":return l.text().then(d=>new DOMParser().parseFromString(d,o));case"json":return l.json();default:if(o===void 0)return l.text();{const u=/charset="?([^;"\s]*)"?/i.exec(o),h=u&&u[1]?u[1].toLowerCase():void 0,f=new TextDecoder(h);return l.arrayBuffer().then(g=>f.decode(g))}}}).then(l=>{ts.add(e,l);const d=Ti[e];delete Ti[e];for(let u=0,h=d.length;u<h;u++){const f=d[u];f.onLoad&&f.onLoad(l)}}).catch(l=>{const d=Ti[e];if(d===void 0)throw this.manager.itemError(e),l;delete Ti[e];for(let u=0,h=d.length;u<h;u++){const f=d[u];f.onError&&f.onError(l)}this.manager.itemError(e)}).finally(()=>{this.manager.itemEnd(e)}),this.manager.itemStart(e)}setResponseType(e){return this.responseType=e,this}setMimeType(e){return this.mimeType=e,this}}class z1 extends $a{constructor(e){super(e)}load(e,t,n,s){this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const a=this,r=ts.get(e);if(r!==void 0)return a.manager.itemStart(e),setTimeout(function(){t&&t(r),a.manager.itemEnd(e)},0),r;const o=zr("img");function c(){d(),ts.add(e,this),t&&t(this),a.manager.itemEnd(e)}function l(u){d(),s&&s(u),a.manager.itemError(e),a.manager.itemEnd(e)}function d(){o.removeEventListener("load",c,!1),o.removeEventListener("error",l,!1)}return o.addEventListener("load",c,!1),o.addEventListener("error",l,!1),e.slice(0,5)!=="data:"&&this.crossOrigin!==void 0&&(o.crossOrigin=this.crossOrigin),a.manager.itemStart(e),o.src=e,o}}class Ja extends $a{constructor(e){super(e)}load(e,t,n,s){const a=new Ft,r=new z1(this.manager);return r.setCrossOrigin(this.crossOrigin),r.setPath(this.path),r.load(e,function(o){a.image=o,a.needsUpdate=!0,t!==void 0&&t(a)},n,s),a}}class Qa extends Rt{constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new De(e),this.intensity=t}dispose(){}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){const t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,this.groundColor!==void 0&&(t.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(t.object.distance=this.distance),this.angle!==void 0&&(t.object.angle=this.angle),this.decay!==void 0&&(t.object.decay=this.decay),this.penumbra!==void 0&&(t.object.penumbra=this.penumbra),this.shadow!==void 0&&(t.object.shadow=this.shadow.toJSON()),this.target!==void 0&&(t.object.target=this.target.uuid),t}}class um extends Qa{constructor(e,t,n){super(e,n),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(Rt.DEFAULT_UP),this.updateMatrix(),this.groundColor=new De(t)}copy(e,t){return super.copy(e,t),this.groundColor.copy(e.groundColor),this}}const wl=new He,Rf=new A,Cf=new A;class Au{constructor(e){this.camera=e,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new Ce(512,512),this.map=null,this.mapPass=null,this.matrix=new He,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new wc,this._frameExtents=new Ce(1,1),this._viewportCount=1,this._viewports=[new tt(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){const t=this.camera,n=this.matrix;Rf.setFromMatrixPosition(e.matrixWorld),t.position.copy(Rf),Cf.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(Cf),t.updateMatrixWorld(),wl.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),this._frustum.setFromProjectionMatrix(wl),n.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),n.multiply(wl)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.intensity=e.intensity,this.bias=e.bias,this.radius=e.radius,this.mapSize.copy(e.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const e={};return this.intensity!==1&&(e.intensity=this.intensity),this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}}class H1 extends Au{constructor(){super(new tn(50,1,.5,500)),this.isSpotLightShadow=!0,this.focus=1}updateMatrices(e){const t=this.camera,n=La*2*e.angle*this.focus,s=this.mapSize.width/this.mapSize.height,a=e.distance||t.far;(n!==t.fov||s!==t.aspect||a!==t.far)&&(t.fov=n,t.aspect=s,t.far=a,t.updateProjectionMatrix()),super.updateMatrices(e)}copy(e){return super.copy(e),this.focus=e.focus,this}}class hm extends Qa{constructor(e,t,n=0,s=Math.PI/3,a=0,r=2){super(e,t),this.isSpotLight=!0,this.type="SpotLight",this.position.copy(Rt.DEFAULT_UP),this.updateMatrix(),this.target=new Rt,this.distance=n,this.angle=s,this.penumbra=a,this.decay=r,this.map=null,this.shadow=new H1}get power(){return this.intensity*Math.PI}set power(e){this.intensity=e/Math.PI}dispose(){this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.angle=e.angle,this.penumbra=e.penumbra,this.decay=e.decay,this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}}const Pf=new He,dr=new A,El=new A;class G1 extends Au{constructor(){super(new tn(90,1,.5,500)),this.isPointLightShadow=!0,this._frameExtents=new Ce(4,2),this._viewportCount=6,this._viewports=[new tt(2,1,1,1),new tt(0,1,1,1),new tt(3,1,1,1),new tt(1,1,1,1),new tt(3,0,1,1),new tt(1,0,1,1)],this._cubeDirections=[new A(1,0,0),new A(-1,0,0),new A(0,0,1),new A(0,0,-1),new A(0,1,0),new A(0,-1,0)],this._cubeUps=[new A(0,1,0),new A(0,1,0),new A(0,1,0),new A(0,1,0),new A(0,0,1),new A(0,0,-1)]}updateMatrices(e,t=0){const n=this.camera,s=this.matrix,a=e.distance||n.far;a!==n.far&&(n.far=a,n.updateProjectionMatrix()),dr.setFromMatrixPosition(e.matrixWorld),n.position.copy(dr),El.copy(n.position),El.add(this._cubeDirections[t]),n.up.copy(this._cubeUps[t]),n.lookAt(El),n.updateMatrixWorld(),s.makeTranslation(-dr.x,-dr.y,-dr.z),Pf.multiplyMatrices(n.projectionMatrix,n.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Pf)}}class Gr extends Qa{constructor(e,t,n=0,s=2){super(e,t),this.isPointLight=!0,this.type="PointLight",this.distance=n,this.decay=s,this.shadow=new G1}get power(){return this.intensity*4*Math.PI}set power(e){this.intensity=e/(4*Math.PI)}dispose(){this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.decay=e.decay,this.shadow=e.shadow.clone(),this}}class V1 extends Au{constructor(){super(new Yr(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class cc extends Qa{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(Rt.DEFAULT_UP),this.updateMatrix(),this.target=new Rt,this.shadow=new V1}dispose(){this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}}class W1 extends Qa{constructor(e,t){super(e,t),this.isAmbientLight=!0,this.type="AmbientLight"}}class Lf extends Qa{constructor(e,t,n=10,s=10){super(e,t),this.isRectAreaLight=!0,this.type="RectAreaLight",this.width=n,this.height=s}get power(){return this.intensity*this.width*this.height*Math.PI}set power(e){this.intensity=e/(this.width*this.height*Math.PI)}copy(e){return super.copy(e),this.width=e.width,this.height=e.height,this}toJSON(e){const t=super.toJSON(e);return t.object.width=this.width,t.object.height=this.height,t}}class Cr{static decodeText(e){if(console.warn("THREE.LoaderUtils: decodeText() has been deprecated with r165 and will be removed with r175. Use TextDecoder instead."),typeof TextDecoder<"u")return new TextDecoder().decode(e);let t="";for(let n=0,s=e.length;n<s;n++)t+=String.fromCharCode(e[n]);try{return decodeURIComponent(escape(t))}catch{return t}}static extractUrlBase(e){const t=e.lastIndexOf("/");return t===-1?"./":e.slice(0,t+1)}static resolveURL(e,t){return typeof e!="string"||e===""?"":(/^https?:\/\//i.test(t)&&/^\//.test(e)&&(t=t.replace(/(^https?:\/\/[^\/]+).*/i,"$1")),/^(https?:)?\/\//i.test(e)||/^data:.*,.*$/i.test(e)||/^blob:.*$/i.test(e)?e:t+e)}}class q1 extends $a{constructor(e){super(e),this.isImageBitmapLoader=!0,typeof createImageBitmap>"u"&&console.warn("THREE.ImageBitmapLoader: createImageBitmap() not supported."),typeof fetch>"u"&&console.warn("THREE.ImageBitmapLoader: fetch() not supported."),this.options={premultiplyAlpha:"none"}}setOptions(e){return this.options=e,this}load(e,t,n,s){e===void 0&&(e=""),this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const a=this,r=ts.get(e);if(r!==void 0){if(a.manager.itemStart(e),r.then){r.then(l=>{t&&t(l),a.manager.itemEnd(e)}).catch(l=>{s&&s(l)});return}return setTimeout(function(){t&&t(r),a.manager.itemEnd(e)},0),r}const o={};o.credentials=this.crossOrigin==="anonymous"?"same-origin":"include",o.headers=this.requestHeader;const c=fetch(e,o).then(function(l){return l.blob()}).then(function(l){return createImageBitmap(l,Object.assign(a.options,{colorSpaceConversion:"none"}))}).then(function(l){return ts.add(e,l),t&&t(l),a.manager.itemEnd(e),l}).catch(function(l){s&&s(l),ts.remove(e),a.manager.itemError(e),a.manager.itemEnd(e)});ts.add(e,c),a.manager.itemStart(e)}}class j1{constructor(e=!0){this.autoStart=e,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1}start(){this.startTime=Df(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let e=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){const t=Df();e=(t-this.oldTime)/1e3,this.oldTime=t,this.elapsedTime+=e}return e}}function Df(){return performance.now()}const Ru="\\[\\]\\.:\\/",X1=new RegExp("["+Ru+"]","g"),Cu="[^"+Ru+"]",Y1="[^"+Ru.replace("\\.","")+"]",K1=/((?:WC+[\/:])*)/.source.replace("WC",Cu),$1=/(WCOD+)?/.source.replace("WCOD",Y1),J1=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",Cu),Q1=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",Cu),Z1=new RegExp("^"+K1+$1+J1+Q1+"$"),eM=["material","materials","bones","map"];class tM{constructor(e,t,n){const s=n||ft.parseTrackName(t);this._targetGroup=e,this._bindings=e.subscribe_(t,s)}getValue(e,t){this.bind();const n=this._targetGroup.nCachedObjects_,s=this._bindings[n];s!==void 0&&s.getValue(e,t)}setValue(e,t){const n=this._bindings;for(let s=this._targetGroup.nCachedObjects_,a=n.length;s!==a;++s)n[s].setValue(e,t)}bind(){const e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].bind()}unbind(){const e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].unbind()}}class ft{constructor(e,t,n){this.path=t,this.parsedPath=n||ft.parseTrackName(t),this.node=ft.findNode(e,this.parsedPath.nodeName),this.rootNode=e,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(e,t,n){return e&&e.isAnimationObjectGroup?new ft.Composite(e,t,n):new ft(e,t,n)}static sanitizeNodeName(e){return e.replace(/\s/g,"_").replace(X1,"")}static parseTrackName(e){const t=Z1.exec(e);if(t===null)throw new Error("PropertyBinding: Cannot parse trackName: "+e);const n={nodeName:t[2],objectName:t[3],objectIndex:t[4],propertyName:t[5],propertyIndex:t[6]},s=n.nodeName&&n.nodeName.lastIndexOf(".");if(s!==void 0&&s!==-1){const a=n.nodeName.substring(s+1);eM.indexOf(a)!==-1&&(n.nodeName=n.nodeName.substring(0,s),n.objectName=a)}if(n.propertyName===null||n.propertyName.length===0)throw new Error("PropertyBinding: can not parse propertyName from trackName: "+e);return n}static findNode(e,t){if(t===void 0||t===""||t==="."||t===-1||t===e.name||t===e.uuid)return e;if(e.skeleton){const n=e.skeleton.getBoneByName(t);if(n!==void 0)return n}if(e.children){const n=function(a){for(let r=0;r<a.length;r++){const o=a[r];if(o.name===t||o.uuid===t)return o;const c=n(o.children);if(c)return c}return null},s=n(e.children);if(s)return s}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(e,t){e[t]=this.targetObject[this.propertyName]}_getValue_array(e,t){const n=this.resolvedProperty;for(let s=0,a=n.length;s!==a;++s)e[t++]=n[s]}_getValue_arrayElement(e,t){e[t]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(e,t){this.resolvedProperty.toArray(e,t)}_setValue_direct(e,t){this.targetObject[this.propertyName]=e[t]}_setValue_direct_setNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(e,t){const n=this.resolvedProperty;for(let s=0,a=n.length;s!==a;++s)n[s]=e[t++]}_setValue_array_setNeedsUpdate(e,t){const n=this.resolvedProperty;for(let s=0,a=n.length;s!==a;++s)n[s]=e[t++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(e,t){const n=this.resolvedProperty;for(let s=0,a=n.length;s!==a;++s)n[s]=e[t++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(e,t){this.resolvedProperty[this.propertyIndex]=e[t]}_setValue_arrayElement_setNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(e,t){this.resolvedProperty.fromArray(e,t)}_setValue_fromArray_setNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(e,t){this.bind(),this.getValue(e,t)}_setValue_unbound(e,t){this.bind(),this.setValue(e,t)}bind(){let e=this.node;const t=this.parsedPath,n=t.objectName,s=t.propertyName;let a=t.propertyIndex;if(e||(e=ft.findNode(this.rootNode,t.nodeName),this.node=e),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!e){console.warn("THREE.PropertyBinding: No target node found for track: "+this.path+".");return}if(n){let l=t.objectIndex;switch(n){case"materials":if(!e.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.materials){console.error("THREE.PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}e=e.material.materials;break;case"bones":if(!e.skeleton){console.error("THREE.PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}e=e.skeleton.bones;for(let d=0;d<e.length;d++)if(e[d].name===l){l=d;break}break;case"map":if("map"in e){e=e.map;break}if(!e.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.map){console.error("THREE.PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}e=e.material.map;break;default:if(e[n]===void 0){console.error("THREE.PropertyBinding: Can not bind to objectName of node undefined.",this);return}e=e[n]}if(l!==void 0){if(e[l]===void 0){console.error("THREE.PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,e);return}e=e[l]}}const r=e[s];if(r===void 0){const l=t.nodeName;console.error("THREE.PropertyBinding: Trying to update property for track: "+l+"."+s+" but it wasn't found.",e);return}let o=this.Versioning.None;this.targetObject=e,e.needsUpdate!==void 0?o=this.Versioning.NeedsUpdate:e.matrixWorldNeedsUpdate!==void 0&&(o=this.Versioning.MatrixWorldNeedsUpdate);let c=this.BindingType.Direct;if(a!==void 0){if(s==="morphTargetInfluences"){if(!e.geometry){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!e.geometry.morphAttributes){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}e.morphTargetDictionary[a]!==void 0&&(a=e.morphTargetDictionary[a])}c=this.BindingType.ArrayElement,this.resolvedProperty=r,this.propertyIndex=a}else r.fromArray!==void 0&&r.toArray!==void 0?(c=this.BindingType.HasFromToArray,this.resolvedProperty=r):Array.isArray(r)?(c=this.BindingType.EntireArray,this.resolvedProperty=r):this.propertyName=s;this.getValue=this.GetterByBindingType[c],this.setValue=this.SetterByBindingTypeAndVersioning[c][o]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}}ft.Composite=tM;ft.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};ft.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};ft.prototype.GetterByBindingType=[ft.prototype._getValue_direct,ft.prototype._getValue_array,ft.prototype._getValue_arrayElement,ft.prototype._getValue_toArray];ft.prototype.SetterByBindingTypeAndVersioning=[[ft.prototype._setValue_direct,ft.prototype._setValue_direct_setNeedsUpdate,ft.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[ft.prototype._setValue_array,ft.prototype._setValue_array_setNeedsUpdate,ft.prototype._setValue_array_setMatrixWorldNeedsUpdate],[ft.prototype._setValue_arrayElement,ft.prototype._setValue_arrayElement_setNeedsUpdate,ft.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[ft.prototype._setValue_fromArray,ft.prototype._setValue_fromArray_setNeedsUpdate,ft.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];const If=new He;class fm{constructor(e,t,n=0,s=1/0){this.ray=new Xr(e,t),this.near=n,this.far=s,this.camera=null,this.layers=new bu,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(e,t){this.ray.set(e,t)}setFromCamera(e,t){t.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(t.matrixWorld),this.ray.direction.set(e.x,e.y,.5).unproject(t).sub(this.ray.origin).normalize(),this.camera=t):t.isOrthographicCamera?(this.ray.origin.set(e.x,e.y,(t.near+t.far)/(t.near-t.far)).unproject(t),this.ray.direction.set(0,0,-1).transformDirection(t.matrixWorld),this.camera=t):console.error("THREE.Raycaster: Unsupported camera type: "+t.type)}setFromXRController(e){return If.identity().extractRotation(e.matrixWorld),this.ray.origin.setFromMatrixPosition(e.matrixWorld),this.ray.direction.set(0,0,-1).applyMatrix4(If),this}intersectObject(e,t=!0,n=[]){return Id(e,this,n,t),n.sort(kf),n}intersectObjects(e,t=!0,n=[]){for(let s=0,a=e.length;s<a;s++)Id(e[s],this,n,t);return n.sort(kf),n}}function kf(i,e){return i.distance-e.distance}function Id(i,e,t,n){let s=!0;if(i.layers.test(e.layers)&&i.raycast(e,t)===!1&&(s=!1),s===!0&&n===!0){const a=i.children;for(let r=0,o=a.length;r<o;r++)Id(a[r],e,t,!0)}}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:ou}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=ou);class nM extends Xa{constructor(){super();const e=new mt;e.deleteAttribute("uv");const t=new Wn({side:Gt}),n=new Wn,s=new Gr(16777215,900,28,2);s.position.set(.418,16.199,.3),this.add(s);const a=new j(e,t);a.position.set(-.757,13.219,.717),a.scale.set(31.713,28.305,28.591),this.add(a);const r=new j(e,n);r.position.set(-10.906,2.009,1.846),r.rotation.set(0,-.195,0),r.scale.set(2.328,7.905,4.651),this.add(r);const o=new j(e,n);o.position.set(-5.607,-.754,-.758),o.rotation.set(0,.994,0),o.scale.set(1.97,1.534,3.955),this.add(o);const c=new j(e,n);c.position.set(6.167,.857,7.803),c.rotation.set(0,.561,0),c.scale.set(3.927,6.285,3.687),this.add(c);const l=new j(e,n);l.position.set(-2.017,.018,6.124),l.rotation.set(0,.333,0),l.scale.set(2.002,4.566,2.064),this.add(l);const d=new j(e,n);d.position.set(2.291,-.756,-2.621),d.rotation.set(0,-.286,0),d.scale.set(1.546,1.552,1.496),this.add(d);const u=new j(e,n);u.position.set(-2.193,-.369,-5.547),u.rotation.set(0,.516,0),u.scale.set(3.875,3.487,2.986),this.add(u);const h=new j(e,ta(50));h.position.set(-16.116,14.37,8.208),h.scale.set(.1,2.428,2.739),this.add(h);const f=new j(e,ta(50));f.position.set(-16.109,18.021,-8.207),f.scale.set(.1,2.425,2.751),this.add(f);const g=new j(e,ta(17));g.position.set(14.904,12.198,-1.832),g.scale.set(.15,4.265,6.331),this.add(g);const b=new j(e,ta(43));b.position.set(-.462,8.89,14.52),b.scale.set(4.38,5.441,.088),this.add(b);const m=new j(e,ta(20));m.position.set(3.235,11.486,-12.541),m.scale.set(2.5,2,.1),this.add(m);const p=new j(e,ta(100));p.position.set(0,20,0),p.scale.set(1,.1,1),this.add(p)}dispose(){const e=new Set;this.traverse(t=>{t.isMesh&&(e.add(t.geometry),e.add(t.material))});for(const t of e)t.dispose()}}function ta(i){const e=new _t;return e.color.setScalar(i),e}function Nf(i,e){if(e===m0)return console.warn("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Geometry already defined as triangles."),i;if(e===Td||e===Bp){let t=i.getIndex();if(t===null){const r=[],o=i.getAttribute("position");if(o!==void 0){for(let c=0;c<o.count;c++)r.push(c);i.setIndex(r),t=i.getIndex()}else return console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Undefined position attribute. Processing not possible."),i}const n=t.count-2,s=[];if(e===Td)for(let r=1;r<=n;r++)s.push(t.getX(0)),s.push(t.getX(r)),s.push(t.getX(r+1));else for(let r=0;r<n;r++)r%2===0?(s.push(t.getX(r)),s.push(t.getX(r+1)),s.push(t.getX(r+2))):(s.push(t.getX(r+2)),s.push(t.getX(r+1)),s.push(t.getX(r)));s.length/3!==n&&console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Unable to generate correct amount of triangles.");const a=i.clone();return a.setIndex(s),a.clearGroups(),a}else return console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Unknown draw mode:",e),i}class iM extends $a{constructor(e){super(e),this.dracoLoader=null,this.ktx2Loader=null,this.meshoptDecoder=null,this.pluginCallbacks=[],this.register(function(t){return new cM(t)}),this.register(function(t){return new lM(t)}),this.register(function(t){return new vM(t)}),this.register(function(t){return new xM(t)}),this.register(function(t){return new _M(t)}),this.register(function(t){return new uM(t)}),this.register(function(t){return new hM(t)}),this.register(function(t){return new fM(t)}),this.register(function(t){return new pM(t)}),this.register(function(t){return new oM(t)}),this.register(function(t){return new mM(t)}),this.register(function(t){return new dM(t)}),this.register(function(t){return new bM(t)}),this.register(function(t){return new gM(t)}),this.register(function(t){return new aM(t)}),this.register(function(t){return new yM(t)}),this.register(function(t){return new MM(t)})}load(e,t,n,s){const a=this;let r;if(this.resourcePath!=="")r=this.resourcePath;else if(this.path!==""){const l=Cr.extractUrlBase(e);r=Cr.resolveURL(l,this.path)}else r=Cr.extractUrlBase(e);this.manager.itemStart(e);const o=function(l){s?s(l):console.error(l),a.manager.itemError(e),a.manager.itemEnd(e)},c=new dm(this.manager);c.setPath(this.path),c.setResponseType("arraybuffer"),c.setRequestHeader(this.requestHeader),c.setWithCredentials(this.withCredentials),c.load(e,function(l){try{a.parse(l,r,function(d){t(d),a.manager.itemEnd(e)},o)}catch(d){o(d)}},n,o)}setDRACOLoader(e){return this.dracoLoader=e,this}setKTX2Loader(e){return this.ktx2Loader=e,this}setMeshoptDecoder(e){return this.meshoptDecoder=e,this}register(e){return this.pluginCallbacks.indexOf(e)===-1&&this.pluginCallbacks.push(e),this}unregister(e){return this.pluginCallbacks.indexOf(e)!==-1&&this.pluginCallbacks.splice(this.pluginCallbacks.indexOf(e),1),this}parse(e,t,n,s){let a;const r={},o={},c=new TextDecoder;if(typeof e=="string")a=JSON.parse(e);else if(e instanceof ArrayBuffer)if(c.decode(new Uint8Array(e,0,4))===pm){try{r[Qe.KHR_BINARY_GLTF]=new SM(e)}catch(u){s&&s(u);return}a=JSON.parse(r[Qe.KHR_BINARY_GLTF].content)}else a=JSON.parse(c.decode(e));else a=e;if(a.asset===void 0||a.asset.version[0]<2){s&&s(new Error("THREE.GLTFLoader: Unsupported asset. glTF versions >=2.0 are supported."));return}const l=new FM(a,{path:t||this.resourcePath||"",crossOrigin:this.crossOrigin,requestHeader:this.requestHeader,manager:this.manager,ktx2Loader:this.ktx2Loader,meshoptDecoder:this.meshoptDecoder});l.fileLoader.setRequestHeader(this.requestHeader);for(let d=0;d<this.pluginCallbacks.length;d++){const u=this.pluginCallbacks[d](l);u.name||console.error("THREE.GLTFLoader: Invalid plugin found: missing name"),o[u.name]=u,r[u.name]=!0}if(a.extensionsUsed)for(let d=0;d<a.extensionsUsed.length;++d){const u=a.extensionsUsed[d],h=a.extensionsRequired||[];switch(u){case Qe.KHR_MATERIALS_UNLIT:r[u]=new rM;break;case Qe.KHR_DRACO_MESH_COMPRESSION:r[u]=new wM(a,this.dracoLoader);break;case Qe.KHR_TEXTURE_TRANSFORM:r[u]=new EM;break;case Qe.KHR_MESH_QUANTIZATION:r[u]=new TM;break;default:h.indexOf(u)>=0&&o[u]===void 0&&console.warn('THREE.GLTFLoader: Unknown extension "'+u+'".')}}l.setExtensions(r),l.setPlugins(o),l.parse(n,s)}parseAsync(e,t){const n=this;return new Promise(function(s,a){n.parse(e,t,s,a)})}}function sM(){let i={};return{get:function(e){return i[e]},add:function(e,t){i[e]=t},remove:function(e){delete i[e]},removeAll:function(){i={}}}}const Qe={KHR_BINARY_GLTF:"KHR_binary_glTF",KHR_DRACO_MESH_COMPRESSION:"KHR_draco_mesh_compression",KHR_LIGHTS_PUNCTUAL:"KHR_lights_punctual",KHR_MATERIALS_CLEARCOAT:"KHR_materials_clearcoat",KHR_MATERIALS_DISPERSION:"KHR_materials_dispersion",KHR_MATERIALS_IOR:"KHR_materials_ior",KHR_MATERIALS_SHEEN:"KHR_materials_sheen",KHR_MATERIALS_SPECULAR:"KHR_materials_specular",KHR_MATERIALS_TRANSMISSION:"KHR_materials_transmission",KHR_MATERIALS_IRIDESCENCE:"KHR_materials_iridescence",KHR_MATERIALS_ANISOTROPY:"KHR_materials_anisotropy",KHR_MATERIALS_UNLIT:"KHR_materials_unlit",KHR_MATERIALS_VOLUME:"KHR_materials_volume",KHR_TEXTURE_BASISU:"KHR_texture_basisu",KHR_TEXTURE_TRANSFORM:"KHR_texture_transform",KHR_MESH_QUANTIZATION:"KHR_mesh_quantization",KHR_MATERIALS_EMISSIVE_STRENGTH:"KHR_materials_emissive_strength",EXT_MATERIALS_BUMP:"EXT_materials_bump",EXT_TEXTURE_WEBP:"EXT_texture_webp",EXT_TEXTURE_AVIF:"EXT_texture_avif",EXT_MESHOPT_COMPRESSION:"EXT_meshopt_compression",EXT_MESH_GPU_INSTANCING:"EXT_mesh_gpu_instancing"};class aM{constructor(e){this.parser=e,this.name=Qe.KHR_LIGHTS_PUNCTUAL,this.cache={refs:{},uses:{}}}_markDefs(){const e=this.parser,t=this.parser.json.nodes||[];for(let n=0,s=t.length;n<s;n++){const a=t[n];a.extensions&&a.extensions[this.name]&&a.extensions[this.name].light!==void 0&&e._addNodeRef(this.cache,a.extensions[this.name].light)}}_loadLight(e){const t=this.parser,n="light:"+e;let s=t.cache.get(n);if(s)return s;const a=t.json,c=((a.extensions&&a.extensions[this.name]||{}).lights||[])[e];let l;const d=new De(16777215);c.color!==void 0&&d.setRGB(c.color[0],c.color[1],c.color[2],bn);const u=c.range!==void 0?c.range:0;switch(c.type){case"directional":l=new cc(d),l.target.position.set(0,0,-1),l.add(l.target);break;case"point":l=new Gr(d),l.distance=u;break;case"spot":l=new hm(d),l.distance=u,c.spot=c.spot||{},c.spot.innerConeAngle=c.spot.innerConeAngle!==void 0?c.spot.innerConeAngle:0,c.spot.outerConeAngle=c.spot.outerConeAngle!==void 0?c.spot.outerConeAngle:Math.PI/4,l.angle=c.spot.outerConeAngle,l.penumbra=1-c.spot.innerConeAngle/c.spot.outerConeAngle,l.target.position.set(0,0,-1),l.add(l.target);break;default:throw new Error("THREE.GLTFLoader: Unexpected light type: "+c.type)}return l.position.set(0,0,0),l.decay=2,Ri(l,c),c.intensity!==void 0&&(l.intensity=c.intensity),l.name=t.createUniqueName(c.name||"light_"+e),s=Promise.resolve(l),t.cache.add(n,s),s}getDependency(e,t){if(e==="light")return this._loadLight(t)}createNodeAttachment(e){const t=this,n=this.parser,a=n.json.nodes[e],o=(a.extensions&&a.extensions[this.name]||{}).light;return o===void 0?null:this._loadLight(o).then(function(c){return n._getNodeRef(t.cache,o,c)})}}class rM{constructor(){this.name=Qe.KHR_MATERIALS_UNLIT}getMaterialType(){return _t}extendParams(e,t,n){const s=[];e.color=new De(1,1,1),e.opacity=1;const a=t.pbrMetallicRoughness;if(a){if(Array.isArray(a.baseColorFactor)){const r=a.baseColorFactor;e.color.setRGB(r[0],r[1],r[2],bn),e.opacity=r[3]}a.baseColorTexture!==void 0&&s.push(n.assignTexture(e,"map",a.baseColorTexture,Ze))}return Promise.all(s)}}class oM{constructor(e){this.parser=e,this.name=Qe.KHR_MATERIALS_EMISSIVE_STRENGTH}extendMaterialParams(e,t){const s=this.parser.json.materials[e];if(!s.extensions||!s.extensions[this.name])return Promise.resolve();const a=s.extensions[this.name].emissiveStrength;return a!==void 0&&(t.emissiveIntensity=a),Promise.resolve()}}class cM{constructor(e){this.parser=e,this.name=Qe.KHR_MATERIALS_CLEARCOAT}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:bi}extendMaterialParams(e,t){const n=this.parser,s=n.json.materials[e];if(!s.extensions||!s.extensions[this.name])return Promise.resolve();const a=[],r=s.extensions[this.name];if(r.clearcoatFactor!==void 0&&(t.clearcoat=r.clearcoatFactor),r.clearcoatTexture!==void 0&&a.push(n.assignTexture(t,"clearcoatMap",r.clearcoatTexture)),r.clearcoatRoughnessFactor!==void 0&&(t.clearcoatRoughness=r.clearcoatRoughnessFactor),r.clearcoatRoughnessTexture!==void 0&&a.push(n.assignTexture(t,"clearcoatRoughnessMap",r.clearcoatRoughnessTexture)),r.clearcoatNormalTexture!==void 0&&(a.push(n.assignTexture(t,"clearcoatNormalMap",r.clearcoatNormalTexture)),r.clearcoatNormalTexture.scale!==void 0)){const o=r.clearcoatNormalTexture.scale;t.clearcoatNormalScale=new Ce(o,o)}return Promise.all(a)}}class lM{constructor(e){this.parser=e,this.name=Qe.KHR_MATERIALS_DISPERSION}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:bi}extendMaterialParams(e,t){const s=this.parser.json.materials[e];if(!s.extensions||!s.extensions[this.name])return Promise.resolve();const a=s.extensions[this.name];return t.dispersion=a.dispersion!==void 0?a.dispersion:0,Promise.resolve()}}class dM{constructor(e){this.parser=e,this.name=Qe.KHR_MATERIALS_IRIDESCENCE}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:bi}extendMaterialParams(e,t){const n=this.parser,s=n.json.materials[e];if(!s.extensions||!s.extensions[this.name])return Promise.resolve();const a=[],r=s.extensions[this.name];return r.iridescenceFactor!==void 0&&(t.iridescence=r.iridescenceFactor),r.iridescenceTexture!==void 0&&a.push(n.assignTexture(t,"iridescenceMap",r.iridescenceTexture)),r.iridescenceIor!==void 0&&(t.iridescenceIOR=r.iridescenceIor),t.iridescenceThicknessRange===void 0&&(t.iridescenceThicknessRange=[100,400]),r.iridescenceThicknessMinimum!==void 0&&(t.iridescenceThicknessRange[0]=r.iridescenceThicknessMinimum),r.iridescenceThicknessMaximum!==void 0&&(t.iridescenceThicknessRange[1]=r.iridescenceThicknessMaximum),r.iridescenceThicknessTexture!==void 0&&a.push(n.assignTexture(t,"iridescenceThicknessMap",r.iridescenceThicknessTexture)),Promise.all(a)}}class uM{constructor(e){this.parser=e,this.name=Qe.KHR_MATERIALS_SHEEN}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:bi}extendMaterialParams(e,t){const n=this.parser,s=n.json.materials[e];if(!s.extensions||!s.extensions[this.name])return Promise.resolve();const a=[];t.sheenColor=new De(0,0,0),t.sheenRoughness=0,t.sheen=1;const r=s.extensions[this.name];if(r.sheenColorFactor!==void 0){const o=r.sheenColorFactor;t.sheenColor.setRGB(o[0],o[1],o[2],bn)}return r.sheenRoughnessFactor!==void 0&&(t.sheenRoughness=r.sheenRoughnessFactor),r.sheenColorTexture!==void 0&&a.push(n.assignTexture(t,"sheenColorMap",r.sheenColorTexture,Ze)),r.sheenRoughnessTexture!==void 0&&a.push(n.assignTexture(t,"sheenRoughnessMap",r.sheenRoughnessTexture)),Promise.all(a)}}class hM{constructor(e){this.parser=e,this.name=Qe.KHR_MATERIALS_TRANSMISSION}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:bi}extendMaterialParams(e,t){const n=this.parser,s=n.json.materials[e];if(!s.extensions||!s.extensions[this.name])return Promise.resolve();const a=[],r=s.extensions[this.name];return r.transmissionFactor!==void 0&&(t.transmission=r.transmissionFactor),r.transmissionTexture!==void 0&&a.push(n.assignTexture(t,"transmissionMap",r.transmissionTexture)),Promise.all(a)}}class fM{constructor(e){this.parser=e,this.name=Qe.KHR_MATERIALS_VOLUME}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:bi}extendMaterialParams(e,t){const n=this.parser,s=n.json.materials[e];if(!s.extensions||!s.extensions[this.name])return Promise.resolve();const a=[],r=s.extensions[this.name];t.thickness=r.thicknessFactor!==void 0?r.thicknessFactor:0,r.thicknessTexture!==void 0&&a.push(n.assignTexture(t,"thicknessMap",r.thicknessTexture)),t.attenuationDistance=r.attenuationDistance||1/0;const o=r.attenuationColor||[1,1,1];return t.attenuationColor=new De().setRGB(o[0],o[1],o[2],bn),Promise.all(a)}}class pM{constructor(e){this.parser=e,this.name=Qe.KHR_MATERIALS_IOR}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:bi}extendMaterialParams(e,t){const s=this.parser.json.materials[e];if(!s.extensions||!s.extensions[this.name])return Promise.resolve();const a=s.extensions[this.name];return t.ior=a.ior!==void 0?a.ior:1.5,Promise.resolve()}}class mM{constructor(e){this.parser=e,this.name=Qe.KHR_MATERIALS_SPECULAR}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:bi}extendMaterialParams(e,t){const n=this.parser,s=n.json.materials[e];if(!s.extensions||!s.extensions[this.name])return Promise.resolve();const a=[],r=s.extensions[this.name];t.specularIntensity=r.specularFactor!==void 0?r.specularFactor:1,r.specularTexture!==void 0&&a.push(n.assignTexture(t,"specularIntensityMap",r.specularTexture));const o=r.specularColorFactor||[1,1,1];return t.specularColor=new De().setRGB(o[0],o[1],o[2],bn),r.specularColorTexture!==void 0&&a.push(n.assignTexture(t,"specularColorMap",r.specularColorTexture,Ze)),Promise.all(a)}}class gM{constructor(e){this.parser=e,this.name=Qe.EXT_MATERIALS_BUMP}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:bi}extendMaterialParams(e,t){const n=this.parser,s=n.json.materials[e];if(!s.extensions||!s.extensions[this.name])return Promise.resolve();const a=[],r=s.extensions[this.name];return t.bumpScale=r.bumpFactor!==void 0?r.bumpFactor:1,r.bumpTexture!==void 0&&a.push(n.assignTexture(t,"bumpMap",r.bumpTexture)),Promise.all(a)}}class bM{constructor(e){this.parser=e,this.name=Qe.KHR_MATERIALS_ANISOTROPY}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:bi}extendMaterialParams(e,t){const n=this.parser,s=n.json.materials[e];if(!s.extensions||!s.extensions[this.name])return Promise.resolve();const a=[],r=s.extensions[this.name];return r.anisotropyStrength!==void 0&&(t.anisotropy=r.anisotropyStrength),r.anisotropyRotation!==void 0&&(t.anisotropyRotation=r.anisotropyRotation),r.anisotropyTexture!==void 0&&a.push(n.assignTexture(t,"anisotropyMap",r.anisotropyTexture)),Promise.all(a)}}class vM{constructor(e){this.parser=e,this.name=Qe.KHR_TEXTURE_BASISU}loadTexture(e){const t=this.parser,n=t.json,s=n.textures[e];if(!s.extensions||!s.extensions[this.name])return null;const a=s.extensions[this.name],r=t.options.ktx2Loader;if(!r){if(n.extensionsRequired&&n.extensionsRequired.indexOf(this.name)>=0)throw new Error("THREE.GLTFLoader: setKTX2Loader must be called before loading KTX2 textures");return null}return t.loadTextureImage(e,a.source,r)}}class xM{constructor(e){this.parser=e,this.name=Qe.EXT_TEXTURE_WEBP,this.isSupported=null}loadTexture(e){const t=this.name,n=this.parser,s=n.json,a=s.textures[e];if(!a.extensions||!a.extensions[t])return null;const r=a.extensions[t],o=s.images[r.source];let c=n.textureLoader;if(o.uri){const l=n.options.manager.getHandler(o.uri);l!==null&&(c=l)}return this.detectSupport().then(function(l){if(l)return n.loadTextureImage(e,r.source,c);if(s.extensionsRequired&&s.extensionsRequired.indexOf(t)>=0)throw new Error("THREE.GLTFLoader: WebP required by asset but unsupported.");return n.loadTexture(e)})}detectSupport(){return this.isSupported||(this.isSupported=new Promise(function(e){const t=new Image;t.src="data:image/webp;base64,UklGRiIAAABXRUJQVlA4IBYAAAAwAQCdASoBAAEADsD+JaQAA3AAAAAA",t.onload=t.onerror=function(){e(t.height===1)}})),this.isSupported}}class _M{constructor(e){this.parser=e,this.name=Qe.EXT_TEXTURE_AVIF,this.isSupported=null}loadTexture(e){const t=this.name,n=this.parser,s=n.json,a=s.textures[e];if(!a.extensions||!a.extensions[t])return null;const r=a.extensions[t],o=s.images[r.source];let c=n.textureLoader;if(o.uri){const l=n.options.manager.getHandler(o.uri);l!==null&&(c=l)}return this.detectSupport().then(function(l){if(l)return n.loadTextureImage(e,r.source,c);if(s.extensionsRequired&&s.extensionsRequired.indexOf(t)>=0)throw new Error("THREE.GLTFLoader: AVIF required by asset but unsupported.");return n.loadTexture(e)})}detectSupport(){return this.isSupported||(this.isSupported=new Promise(function(e){const t=new Image;t.src="data:image/avif;base64,AAAAIGZ0eXBhdmlmAAAAAGF2aWZtaWYxbWlhZk1BMUIAAADybWV0YQAAAAAAAAAoaGRscgAAAAAAAAAAcGljdAAAAAAAAAAAAAAAAGxpYmF2aWYAAAAADnBpdG0AAAAAAAEAAAAeaWxvYwAAAABEAAABAAEAAAABAAABGgAAABcAAAAoaWluZgAAAAAAAQAAABppbmZlAgAAAAABAABhdjAxQ29sb3IAAAAAamlwcnAAAABLaXBjbwAAABRpc3BlAAAAAAAAAAEAAAABAAAAEHBpeGkAAAAAAwgICAAAAAxhdjFDgQAMAAAAABNjb2xybmNseAACAAIABoAAAAAXaXBtYQAAAAAAAAABAAEEAQKDBAAAAB9tZGF0EgAKCBgABogQEDQgMgkQAAAAB8dSLfI=",t.onload=t.onerror=function(){e(t.height===1)}})),this.isSupported}}class yM{constructor(e){this.name=Qe.EXT_MESHOPT_COMPRESSION,this.parser=e}loadBufferView(e){const t=this.parser.json,n=t.bufferViews[e];if(n.extensions&&n.extensions[this.name]){const s=n.extensions[this.name],a=this.parser.getDependency("buffer",s.buffer),r=this.parser.options.meshoptDecoder;if(!r||!r.supported){if(t.extensionsRequired&&t.extensionsRequired.indexOf(this.name)>=0)throw new Error("THREE.GLTFLoader: setMeshoptDecoder must be called before loading compressed files");return null}return a.then(function(o){const c=s.byteOffset||0,l=s.byteLength||0,d=s.count,u=s.byteStride,h=new Uint8Array(o,c,l);return r.decodeGltfBufferAsync?r.decodeGltfBufferAsync(d,u,h,s.mode,s.filter).then(function(f){return f.buffer}):r.ready.then(function(){const f=new ArrayBuffer(d*u);return r.decodeGltfBuffer(new Uint8Array(f),d,u,h,s.mode,s.filter),f})})}else return null}}class MM{constructor(e){this.name=Qe.EXT_MESH_GPU_INSTANCING,this.parser=e}createNodeMesh(e){const t=this.parser.json,n=t.nodes[e];if(!n.extensions||!n.extensions[this.name]||n.mesh===void 0)return null;const s=t.meshes[n.mesh];for(const l of s.primitives)if(l.mode!==Nn.TRIANGLES&&l.mode!==Nn.TRIANGLE_STRIP&&l.mode!==Nn.TRIANGLE_FAN&&l.mode!==void 0)return null;const r=n.extensions[this.name].attributes,o=[],c={};for(const l in r)o.push(this.parser.getDependency("accessor",r[l]).then(d=>(c[l]=d,c[l])));return o.length<1?null:(o.push(this.parser.createNodeMesh(e)),Promise.all(o).then(l=>{const d=l.pop(),u=d.isGroup?d.children:[d],h=l[0].count,f=[];for(const g of u){const b=new He,m=new A,p=new Gn,v=new A(1,1,1),x=new o1(g.geometry,g.material,h);for(let y=0;y<h;y++)c.TRANSLATION&&m.fromBufferAttribute(c.TRANSLATION,y),c.ROTATION&&p.fromBufferAttribute(c.ROTATION,y),c.SCALE&&v.fromBufferAttribute(c.SCALE,y),x.setMatrixAt(y,b.compose(m,p,v));for(const y in c)if(y==="_COLOR_0"){const D=c[y];x.instanceColor=new Pd(D.array,D.itemSize,D.normalized)}else y!=="TRANSLATION"&&y!=="ROTATION"&&y!=="SCALE"&&g.geometry.setAttribute(y,c[y]);Rt.prototype.copy.call(x,g),this.parser.assignFinalMaterial(x),f.push(x)}return d.isGroup?(d.clear(),d.add(...f),d):f[0]}))}}const pm="glTF",ur=12,Ff={JSON:1313821514,BIN:5130562};class SM{constructor(e){this.name=Qe.KHR_BINARY_GLTF,this.content=null,this.body=null;const t=new DataView(e,0,ur),n=new TextDecoder;if(this.header={magic:n.decode(new Uint8Array(e.slice(0,4))),version:t.getUint32(4,!0),length:t.getUint32(8,!0)},this.header.magic!==pm)throw new Error("THREE.GLTFLoader: Unsupported glTF-Binary header.");if(this.header.version<2)throw new Error("THREE.GLTFLoader: Legacy binary file detected.");const s=this.header.length-ur,a=new DataView(e,ur);let r=0;for(;r<s;){const o=a.getUint32(r,!0);r+=4;const c=a.getUint32(r,!0);if(r+=4,c===Ff.JSON){const l=new Uint8Array(e,ur+r,o);this.content=n.decode(l)}else if(c===Ff.BIN){const l=ur+r;this.body=e.slice(l,l+o)}r+=o}if(this.content===null)throw new Error("THREE.GLTFLoader: JSON content not found.")}}class wM{constructor(e,t){if(!t)throw new Error("THREE.GLTFLoader: No DRACOLoader instance provided.");this.name=Qe.KHR_DRACO_MESH_COMPRESSION,this.json=e,this.dracoLoader=t,this.dracoLoader.preload()}decodePrimitive(e,t){const n=this.json,s=this.dracoLoader,a=e.extensions[this.name].bufferView,r=e.extensions[this.name].attributes,o={},c={},l={};for(const d in r){const u=kd[d]||d.toLowerCase();o[u]=r[d]}for(const d in e.attributes){const u=kd[d]||d.toLowerCase();if(r[d]!==void 0){const h=n.accessors[e.attributes[d]],f=va[h.componentType];l[u]=f.name,c[u]=h.normalized===!0}}return t.getDependency("bufferView",a).then(function(d){return new Promise(function(u,h){s.decodeDracoFile(d,function(f){for(const g in f.attributes){const b=f.attributes[g],m=c[g];m!==void 0&&(b.normalized=m)}u(f)},o,l,bn,h)})})}}class EM{constructor(){this.name=Qe.KHR_TEXTURE_TRANSFORM}extendTexture(e,t){return(t.texCoord===void 0||t.texCoord===e.channel)&&t.offset===void 0&&t.rotation===void 0&&t.scale===void 0||(e=e.clone(),t.texCoord!==void 0&&(e.channel=t.texCoord),t.offset!==void 0&&e.offset.fromArray(t.offset),t.rotation!==void 0&&(e.rotation=t.rotation),t.scale!==void 0&&e.repeat.fromArray(t.scale),e.needsUpdate=!0),e}}class TM{constructor(){this.name=Qe.KHR_MESH_QUANTIZATION}}class mm extends Kr{constructor(e,t,n,s){super(e,t,n,s)}copySampleValue_(e){const t=this.resultBuffer,n=this.sampleValues,s=this.valueSize,a=e*s*3+s;for(let r=0;r!==s;r++)t[r]=n[a+r];return t}interpolate_(e,t,n,s){const a=this.resultBuffer,r=this.sampleValues,o=this.valueSize,c=o*2,l=o*3,d=s-t,u=(n-t)/d,h=u*u,f=h*u,g=e*l,b=g-l,m=-2*f+3*h,p=f-h,v=1-m,x=p-h+u;for(let y=0;y!==o;y++){const D=r[b+y+o],T=r[b+y+c]*d,R=r[g+y+o],I=r[g+y]*d;a[y]=v*D+x*T+m*R+p*I}return a}}const AM=new Gn;class RM extends mm{interpolate_(e,t,n,s){const a=super.interpolate_(e,t,n,s);return AM.fromArray(a).normalize().toArray(a),a}}const Nn={POINTS:0,LINES:1,LINE_LOOP:2,LINE_STRIP:3,TRIANGLES:4,TRIANGLE_STRIP:5,TRIANGLE_FAN:6},va={5120:Int8Array,5121:Uint8Array,5122:Int16Array,5123:Uint16Array,5125:Uint32Array,5126:Float32Array},Uf={9728:Zt,9729:Qt,9984:Cp,9985:Ho,9986:yr,9987:Pi},Of={33071:es,33648:sc,10497:Vn},Tl={SCALAR:1,VEC2:2,VEC3:3,VEC4:4,MAT2:4,MAT3:9,MAT4:16},kd={POSITION:"position",NORMAL:"normal",TANGENT:"tangent",TEXCOORD_0:"uv",TEXCOORD_1:"uv1",TEXCOORD_2:"uv2",TEXCOORD_3:"uv3",COLOR_0:"color",WEIGHTS_0:"skinWeight",JOINTS_0:"skinIndex"},Yi={scale:"scale",translation:"position",rotation:"quaternion",weights:"morphTargetInfluences"},CM={CUBICSPLINE:void 0,LINEAR:Br,STEP:Or},Al={OPAQUE:"OPAQUE",MASK:"MASK",BLEND:"BLEND"};function PM(i){return i.DefaultMaterial===void 0&&(i.DefaultMaterial=new Wn({color:16777215,emissive:0,metalness:1,roughness:1,transparent:!1,depthTest:!0,side:Fi})),i.DefaultMaterial}function xs(i,e,t){for(const n in t.extensions)i[n]===void 0&&(e.userData.gltfExtensions=e.userData.gltfExtensions||{},e.userData.gltfExtensions[n]=t.extensions[n])}function Ri(i,e){e.extras!==void 0&&(typeof e.extras=="object"?Object.assign(i.userData,e.extras):console.warn("THREE.GLTFLoader: Ignoring primitive type .extras, "+e.extras))}function LM(i,e,t){let n=!1,s=!1,a=!1;for(let l=0,d=e.length;l<d;l++){const u=e[l];if(u.POSITION!==void 0&&(n=!0),u.NORMAL!==void 0&&(s=!0),u.COLOR_0!==void 0&&(a=!0),n&&s&&a)break}if(!n&&!s&&!a)return Promise.resolve(i);const r=[],o=[],c=[];for(let l=0,d=e.length;l<d;l++){const u=e[l];if(n){const h=u.POSITION!==void 0?t.getDependency("accessor",u.POSITION):i.attributes.position;r.push(h)}if(s){const h=u.NORMAL!==void 0?t.getDependency("accessor",u.NORMAL):i.attributes.normal;o.push(h)}if(a){const h=u.COLOR_0!==void 0?t.getDependency("accessor",u.COLOR_0):i.attributes.color;c.push(h)}}return Promise.all([Promise.all(r),Promise.all(o),Promise.all(c)]).then(function(l){const d=l[0],u=l[1],h=l[2];return n&&(i.morphAttributes.position=d),s&&(i.morphAttributes.normal=u),a&&(i.morphAttributes.color=h),i.morphTargetsRelative=!0,i})}function DM(i,e){if(i.updateMorphTargets(),e.weights!==void 0)for(let t=0,n=e.weights.length;t<n;t++)i.morphTargetInfluences[t]=e.weights[t];if(e.extras&&Array.isArray(e.extras.targetNames)){const t=e.extras.targetNames;if(i.morphTargetInfluences.length===t.length){i.morphTargetDictionary={};for(let n=0,s=t.length;n<s;n++)i.morphTargetDictionary[t[n]]=n}else console.warn("THREE.GLTFLoader: Invalid extras.targetNames length. Ignoring names.")}}function IM(i){let e;const t=i.extensions&&i.extensions[Qe.KHR_DRACO_MESH_COMPRESSION];if(t?e="draco:"+t.bufferView+":"+t.indices+":"+Rl(t.attributes):e=i.indices+":"+Rl(i.attributes)+":"+i.mode,i.targets!==void 0)for(let n=0,s=i.targets.length;n<s;n++)e+=":"+Rl(i.targets[n]);return e}function Rl(i){let e="";const t=Object.keys(i).sort();for(let n=0,s=t.length;n<s;n++)e+=t[n]+":"+i[t[n]]+";";return e}function Nd(i){switch(i){case Int8Array:return 1/127;case Uint8Array:return 1/255;case Int16Array:return 1/32767;case Uint16Array:return 1/65535;default:throw new Error("THREE.GLTFLoader: Unsupported normalized accessor component type.")}}function kM(i){return i.search(/\.jpe?g($|\?)/i)>0||i.search(/^data\:image\/jpeg/)===0?"image/jpeg":i.search(/\.webp($|\?)/i)>0||i.search(/^data\:image\/webp/)===0?"image/webp":i.search(/\.ktx2($|\?)/i)>0||i.search(/^data\:image\/ktx2/)===0?"image/ktx2":"image/png"}const NM=new He;class FM{constructor(e={},t={}){this.json=e,this.extensions={},this.plugins={},this.options=t,this.cache=new sM,this.associations=new Map,this.primitiveCache={},this.nodeCache={},this.meshCache={refs:{},uses:{}},this.cameraCache={refs:{},uses:{}},this.lightCache={refs:{},uses:{}},this.sourceCache={},this.textureCache={},this.nodeNamesUsed={};let n=!1,s=-1,a=!1,r=-1;if(typeof navigator<"u"){const o=navigator.userAgent;n=/^((?!chrome|android).)*safari/i.test(o)===!0;const c=o.match(/Version\/(\d+)/);s=n&&c?parseInt(c[1],10):-1,a=o.indexOf("Firefox")>-1,r=a?o.match(/Firefox\/([0-9]+)\./)[1]:-1}typeof createImageBitmap>"u"||n&&s<17||a&&r<98?this.textureLoader=new Ja(this.options.manager):this.textureLoader=new q1(this.options.manager),this.textureLoader.setCrossOrigin(this.options.crossOrigin),this.textureLoader.setRequestHeader(this.options.requestHeader),this.fileLoader=new dm(this.options.manager),this.fileLoader.setResponseType("arraybuffer"),this.options.crossOrigin==="use-credentials"&&this.fileLoader.setWithCredentials(!0)}setExtensions(e){this.extensions=e}setPlugins(e){this.plugins=e}parse(e,t){const n=this,s=this.json,a=this.extensions;this.cache.removeAll(),this.nodeCache={},this._invokeAll(function(r){return r._markDefs&&r._markDefs()}),Promise.all(this._invokeAll(function(r){return r.beforeRoot&&r.beforeRoot()})).then(function(){return Promise.all([n.getDependencies("scene"),n.getDependencies("animation"),n.getDependencies("camera")])}).then(function(r){const o={scene:r[0][s.scene||0],scenes:r[0],animations:r[1],cameras:r[2],asset:s.asset,parser:n,userData:{}};return xs(a,o,s),Ri(o,s),Promise.all(n._invokeAll(function(c){return c.afterRoot&&c.afterRoot(o)})).then(function(){for(const c of o.scenes)c.updateMatrixWorld();e(o)})}).catch(t)}_markDefs(){const e=this.json.nodes||[],t=this.json.skins||[],n=this.json.meshes||[];for(let s=0,a=t.length;s<a;s++){const r=t[s].joints;for(let o=0,c=r.length;o<c;o++)e[r[o]].isBone=!0}for(let s=0,a=e.length;s<a;s++){const r=e[s];r.mesh!==void 0&&(this._addNodeRef(this.meshCache,r.mesh),r.skin!==void 0&&(n[r.mesh].isSkinnedMesh=!0)),r.camera!==void 0&&this._addNodeRef(this.cameraCache,r.camera)}}_addNodeRef(e,t){t!==void 0&&(e.refs[t]===void 0&&(e.refs[t]=e.uses[t]=0),e.refs[t]++)}_getNodeRef(e,t,n){if(e.refs[t]<=1)return n;const s=n.clone(),a=(r,o)=>{const c=this.associations.get(r);c!=null&&this.associations.set(o,c);for(const[l,d]of r.children.entries())a(d,o.children[l])};return a(n,s),s.name+="_instance_"+e.uses[t]++,s}_invokeOne(e){const t=Object.values(this.plugins);t.push(this);for(let n=0;n<t.length;n++){const s=e(t[n]);if(s)return s}return null}_invokeAll(e){const t=Object.values(this.plugins);t.unshift(this);const n=[];for(let s=0;s<t.length;s++){const a=e(t[s]);a&&n.push(a)}return n}getDependency(e,t){const n=e+":"+t;let s=this.cache.get(n);if(!s){switch(e){case"scene":s=this.loadScene(t);break;case"node":s=this._invokeOne(function(a){return a.loadNode&&a.loadNode(t)});break;case"mesh":s=this._invokeOne(function(a){return a.loadMesh&&a.loadMesh(t)});break;case"accessor":s=this.loadAccessor(t);break;case"bufferView":s=this._invokeOne(function(a){return a.loadBufferView&&a.loadBufferView(t)});break;case"buffer":s=this.loadBuffer(t);break;case"material":s=this._invokeOne(function(a){return a.loadMaterial&&a.loadMaterial(t)});break;case"texture":s=this._invokeOne(function(a){return a.loadTexture&&a.loadTexture(t)});break;case"skin":s=this.loadSkin(t);break;case"animation":s=this._invokeOne(function(a){return a.loadAnimation&&a.loadAnimation(t)});break;case"camera":s=this.loadCamera(t);break;default:if(s=this._invokeOne(function(a){return a!=this&&a.getDependency&&a.getDependency(e,t)}),!s)throw new Error("Unknown type: "+e);break}this.cache.add(n,s)}return s}getDependencies(e){let t=this.cache.get(e);if(!t){const n=this,s=this.json[e+(e==="mesh"?"es":"s")]||[];t=Promise.all(s.map(function(a,r){return n.getDependency(e,r)})),this.cache.add(e,t)}return t}loadBuffer(e){const t=this.json.buffers[e],n=this.fileLoader;if(t.type&&t.type!=="arraybuffer")throw new Error("THREE.GLTFLoader: "+t.type+" buffer type is not supported.");if(t.uri===void 0&&e===0)return Promise.resolve(this.extensions[Qe.KHR_BINARY_GLTF].body);const s=this.options;return new Promise(function(a,r){n.load(Cr.resolveURL(t.uri,s.path),a,void 0,function(){r(new Error('THREE.GLTFLoader: Failed to load buffer "'+t.uri+'".'))})})}loadBufferView(e){const t=this.json.bufferViews[e];return this.getDependency("buffer",t.buffer).then(function(n){const s=t.byteLength||0,a=t.byteOffset||0;return n.slice(a,a+s)})}loadAccessor(e){const t=this,n=this.json,s=this.json.accessors[e];if(s.bufferView===void 0&&s.sparse===void 0){const r=Tl[s.type],o=va[s.componentType],c=s.normalized===!0,l=new o(s.count*r);return Promise.resolve(new dn(l,r,c))}const a=[];return s.bufferView!==void 0?a.push(this.getDependency("bufferView",s.bufferView)):a.push(null),s.sparse!==void 0&&(a.push(this.getDependency("bufferView",s.sparse.indices.bufferView)),a.push(this.getDependency("bufferView",s.sparse.values.bufferView))),Promise.all(a).then(function(r){const o=r[0],c=Tl[s.type],l=va[s.componentType],d=l.BYTES_PER_ELEMENT,u=d*c,h=s.byteOffset||0,f=s.bufferView!==void 0?n.bufferViews[s.bufferView].byteStride:void 0,g=s.normalized===!0;let b,m;if(f&&f!==u){const p=Math.floor(h/f),v="InterleavedBuffer:"+s.bufferView+":"+s.componentType+":"+p+":"+s.count;let x=t.cache.get(v);x||(b=new l(o,p*f,s.count*f/d),x=new n1(b,f/d),t.cache.add(v,x)),m=new _u(x,c,h%f/d,g)}else o===null?b=new l(s.count*c):b=new l(o,h,s.count*c),m=new dn(b,c,g);if(s.sparse!==void 0){const p=Tl.SCALAR,v=va[s.sparse.indices.componentType],x=s.sparse.indices.byteOffset||0,y=s.sparse.values.byteOffset||0,D=new v(r[1],x,s.sparse.count*p),T=new l(r[2],y,s.sparse.count*c);o!==null&&(m=new dn(m.array.slice(),m.itemSize,m.normalized)),m.normalized=!1;for(let R=0,I=D.length;R<I;R++){const _=D[R];if(m.setX(_,T[R*c]),c>=2&&m.setY(_,T[R*c+1]),c>=3&&m.setZ(_,T[R*c+2]),c>=4&&m.setW(_,T[R*c+3]),c>=5)throw new Error("THREE.GLTFLoader: Unsupported itemSize in sparse BufferAttribute.")}m.normalized=g}return m})}loadTexture(e){const t=this.json,n=this.options,a=t.textures[e].source,r=t.images[a];let o=this.textureLoader;if(r.uri){const c=n.manager.getHandler(r.uri);c!==null&&(o=c)}return this.loadTextureImage(e,a,o)}loadTextureImage(e,t,n){const s=this,a=this.json,r=a.textures[e],o=a.images[t],c=(o.uri||o.bufferView)+":"+r.sampler;if(this.textureCache[c])return this.textureCache[c];const l=this.loadImageSource(t,n).then(function(d){d.flipY=!1,d.name=r.name||o.name||"",d.name===""&&typeof o.uri=="string"&&o.uri.startsWith("data:image/")===!1&&(d.name=o.uri);const h=(a.samplers||{})[r.sampler]||{};return d.magFilter=Uf[h.magFilter]||Qt,d.minFilter=Uf[h.minFilter]||Pi,d.wrapS=Of[h.wrapS]||Vn,d.wrapT=Of[h.wrapT]||Vn,d.generateMipmaps=!d.isCompressedTexture&&d.minFilter!==Zt&&d.minFilter!==Qt,s.associations.set(d,{textures:e}),d}).catch(function(){return null});return this.textureCache[c]=l,l}loadImageSource(e,t){const n=this,s=this.json,a=this.options;if(this.sourceCache[e]!==void 0)return this.sourceCache[e].then(u=>u.clone());const r=s.images[e],o=self.URL||self.webkitURL;let c=r.uri||"",l=!1;if(r.bufferView!==void 0)c=n.getDependency("bufferView",r.bufferView).then(function(u){l=!0;const h=new Blob([u],{type:r.mimeType});return c=o.createObjectURL(h),c});else if(r.uri===void 0)throw new Error("THREE.GLTFLoader: Image "+e+" is missing URI and bufferView");const d=Promise.resolve(c).then(function(u){return new Promise(function(h,f){let g=h;t.isImageBitmapLoader===!0&&(g=function(b){const m=new Ft(b);m.needsUpdate=!0,h(m)}),t.load(Cr.resolveURL(u,a.path),g,void 0,f)})}).then(function(u){return l===!0&&o.revokeObjectURL(c),Ri(u,r),u.userData.mimeType=r.mimeType||kM(r.uri),u}).catch(function(u){throw console.error("THREE.GLTFLoader: Couldn't load texture",c),u});return this.sourceCache[e]=d,d}assignTexture(e,t,n,s){const a=this;return this.getDependency("texture",n.index).then(function(r){if(!r)return null;if(n.texCoord!==void 0&&n.texCoord>0&&(r=r.clone(),r.channel=n.texCoord),a.extensions[Qe.KHR_TEXTURE_TRANSFORM]){const o=n.extensions!==void 0?n.extensions[Qe.KHR_TEXTURE_TRANSFORM]:void 0;if(o){const c=a.associations.get(r);r=a.extensions[Qe.KHR_TEXTURE_TRANSFORM].extendTexture(r,o),a.associations.set(r,c)}}return s!==void 0&&(r.colorSpace=s),e[t]=r,r})}assignFinalMaterial(e){const t=e.geometry;let n=e.material;const s=t.attributes.tangent===void 0,a=t.attributes.color!==void 0,r=t.attributes.normal===void 0;if(e.isPoints){const o="PointsMaterial:"+n.uuid;let c=this.cache.get(o);c||(c=new Su,ui.prototype.copy.call(c,n),c.color.copy(n.color),c.map=n.map,c.sizeAttenuation=!1,this.cache.add(o,c)),n=c}else if(e.isLine){const o="LineBasicMaterial:"+n.uuid;let c=this.cache.get(o);c||(c=new Mu,ui.prototype.copy.call(c,n),c.color.copy(n.color),c.map=n.map,this.cache.add(o,c)),n=c}if(s||a||r){let o="ClonedMaterial:"+n.uuid+":";s&&(o+="derivative-tangents:"),a&&(o+="vertex-colors:"),r&&(o+="flat-shading:");let c=this.cache.get(o);c||(c=n.clone(),a&&(c.vertexColors=!0),r&&(c.flatShading=!0),s&&(c.normalScale&&(c.normalScale.y*=-1),c.clearcoatNormalScale&&(c.clearcoatNormalScale.y*=-1)),this.cache.add(o,c),this.associations.set(c,this.associations.get(n))),n=c}e.material=n}getMaterialType(){return Wn}loadMaterial(e){const t=this,n=this.json,s=this.extensions,a=n.materials[e];let r;const o={},c=a.extensions||{},l=[];if(c[Qe.KHR_MATERIALS_UNLIT]){const u=s[Qe.KHR_MATERIALS_UNLIT];r=u.getMaterialType(),l.push(u.extendParams(o,a,t))}else{const u=a.pbrMetallicRoughness||{};if(o.color=new De(1,1,1),o.opacity=1,Array.isArray(u.baseColorFactor)){const h=u.baseColorFactor;o.color.setRGB(h[0],h[1],h[2],bn),o.opacity=h[3]}u.baseColorTexture!==void 0&&l.push(t.assignTexture(o,"map",u.baseColorTexture,Ze)),o.metalness=u.metallicFactor!==void 0?u.metallicFactor:1,o.roughness=u.roughnessFactor!==void 0?u.roughnessFactor:1,u.metallicRoughnessTexture!==void 0&&(l.push(t.assignTexture(o,"metalnessMap",u.metallicRoughnessTexture)),l.push(t.assignTexture(o,"roughnessMap",u.metallicRoughnessTexture))),r=this._invokeOne(function(h){return h.getMaterialType&&h.getMaterialType(e)}),l.push(Promise.all(this._invokeAll(function(h){return h.extendMaterialParams&&h.extendMaterialParams(e,o)})))}a.doubleSided===!0&&(o.side=nn);const d=a.alphaMode||Al.OPAQUE;if(d===Al.BLEND?(o.transparent=!0,o.depthWrite=!1):(o.transparent=!1,d===Al.MASK&&(o.alphaTest=a.alphaCutoff!==void 0?a.alphaCutoff:.5)),a.normalTexture!==void 0&&r!==_t&&(l.push(t.assignTexture(o,"normalMap",a.normalTexture)),o.normalScale=new Ce(1,1),a.normalTexture.scale!==void 0)){const u=a.normalTexture.scale;o.normalScale.set(u,u)}if(a.occlusionTexture!==void 0&&r!==_t&&(l.push(t.assignTexture(o,"aoMap",a.occlusionTexture)),a.occlusionTexture.strength!==void 0&&(o.aoMapIntensity=a.occlusionTexture.strength)),a.emissiveFactor!==void 0&&r!==_t){const u=a.emissiveFactor;o.emissive=new De().setRGB(u[0],u[1],u[2],bn)}return a.emissiveTexture!==void 0&&r!==_t&&l.push(t.assignTexture(o,"emissiveMap",a.emissiveTexture,Ze)),Promise.all(l).then(function(){const u=new r(o);return a.name&&(u.name=a.name),Ri(u,a),t.associations.set(u,{materials:e}),a.extensions&&xs(s,u,a),u})}createUniqueName(e){const t=ft.sanitizeNodeName(e||"");return t in this.nodeNamesUsed?t+"_"+ ++this.nodeNamesUsed[t]:(this.nodeNamesUsed[t]=0,t)}loadGeometries(e){const t=this,n=this.extensions,s=this.primitiveCache;function a(o){return n[Qe.KHR_DRACO_MESH_COMPRESSION].decodePrimitive(o,t).then(function(c){return Bf(c,o,t)})}const r=[];for(let o=0,c=e.length;o<c;o++){const l=e[o],d=IM(l),u=s[d];if(u)r.push(u.promise);else{let h;l.extensions&&l.extensions[Qe.KHR_DRACO_MESH_COMPRESSION]?h=a(l):h=Bf(new Yt,l,t),s[d]={primitive:l,promise:h},r.push(h)}}return Promise.all(r)}loadMesh(e){const t=this,n=this.json,s=this.extensions,a=n.meshes[e],r=a.primitives,o=[];for(let c=0,l=r.length;c<l;c++){const d=r[c].material===void 0?PM(this.cache):this.getDependency("material",r[c].material);o.push(d)}return o.push(t.loadGeometries(r)),Promise.all(o).then(function(c){const l=c.slice(0,c.length-1),d=c[c.length-1],u=[];for(let f=0,g=d.length;f<g;f++){const b=d[f],m=r[f];let p;const v=l[f];if(m.mode===Nn.TRIANGLES||m.mode===Nn.TRIANGLE_STRIP||m.mode===Nn.TRIANGLE_FAN||m.mode===void 0)p=a.isSkinnedMesh===!0?new s1(b,v):new j(b,v),p.isSkinnedMesh===!0&&p.normalizeSkinWeights(),m.mode===Nn.TRIANGLE_STRIP?p.geometry=Nf(p.geometry,Bp):m.mode===Nn.TRIANGLE_FAN&&(p.geometry=Nf(p.geometry,Td));else if(m.mode===Nn.LINES)p=new c1(b,v);else if(m.mode===Nn.LINE_STRIP)p=new Tc(b,v);else if(m.mode===Nn.LINE_LOOP)p=new l1(b,v);else if(m.mode===Nn.POINTS)p=new rm(b,v);else throw new Error("THREE.GLTFLoader: Primitive mode unsupported: "+m.mode);Object.keys(p.geometry.morphAttributes).length>0&&DM(p,a),p.name=t.createUniqueName(a.name||"mesh_"+e),Ri(p,a),m.extensions&&xs(s,p,m),t.assignFinalMaterial(p),u.push(p)}for(let f=0,g=u.length;f<g;f++)t.associations.set(u[f],{meshes:e,primitives:f});if(u.length===1)return a.extensions&&xs(s,u[0],a),u[0];const h=new Ue;a.extensions&&xs(s,h,a),t.associations.set(h,{meshes:e});for(let f=0,g=u.length;f<g;f++)h.add(u[f]);return h})}loadCamera(e){let t;const n=this.json.cameras[e],s=n[n.type];if(!s){console.warn("THREE.GLTFLoader: Missing camera parameters.");return}return n.type==="perspective"?t=new tn(gt.radToDeg(s.yfov),s.aspectRatio||1,s.znear||1,s.zfar||2e6):n.type==="orthographic"&&(t=new Yr(-s.xmag,s.xmag,s.ymag,-s.ymag,s.znear,s.zfar)),n.name&&(t.name=this.createUniqueName(n.name)),Ri(t,n),Promise.resolve(t)}loadSkin(e){const t=this.json.skins[e],n=[];for(let s=0,a=t.joints.length;s<a;s++)n.push(this._loadNodeShallow(t.joints[s]));return t.inverseBindMatrices!==void 0?n.push(this.getDependency("accessor",t.inverseBindMatrices)):n.push(null),Promise.all(n).then(function(s){const a=s.pop(),r=s,o=[],c=[];for(let l=0,d=r.length;l<d;l++){const u=r[l];if(u){o.push(u);const h=new He;a!==null&&h.fromArray(a.array,l*16),c.push(h)}else console.warn('THREE.GLTFLoader: Joint "%s" could not be found.',t.joints[l])}return new yu(o,c)})}loadAnimation(e){const t=this.json,n=this,s=t.animations[e],a=s.name?s.name:"animation_"+e,r=[],o=[],c=[],l=[],d=[];for(let u=0,h=s.channels.length;u<h;u++){const f=s.channels[u],g=s.samplers[f.sampler],b=f.target,m=b.node,p=s.parameters!==void 0?s.parameters[g.input]:g.input,v=s.parameters!==void 0?s.parameters[g.output]:g.output;b.node!==void 0&&(r.push(this.getDependency("node",m)),o.push(this.getDependency("accessor",p)),c.push(this.getDependency("accessor",v)),l.push(g),d.push(b))}return Promise.all([Promise.all(r),Promise.all(o),Promise.all(c),Promise.all(l),Promise.all(d)]).then(function(u){const h=u[0],f=u[1],g=u[2],b=u[3],m=u[4],p=[];for(let v=0,x=h.length;v<x;v++){const y=h[v],D=f[v],T=g[v],R=b[v],I=m[v];if(y===void 0)continue;y.updateMatrix&&y.updateMatrix();const _=n._createAnimationTracks(y,D,T,R,I);if(_)for(let M=0;M<_.length;M++)p.push(_[M])}return new k1(a,void 0,p)})}createNodeMesh(e){const t=this.json,n=this,s=t.nodes[e];return s.mesh===void 0?null:n.getDependency("mesh",s.mesh).then(function(a){const r=n._getNodeRef(n.meshCache,s.mesh,a);return s.weights!==void 0&&r.traverse(function(o){if(o.isMesh)for(let c=0,l=s.weights.length;c<l;c++)o.morphTargetInfluences[c]=s.weights[c]}),r})}loadNode(e){const t=this.json,n=this,s=t.nodes[e],a=n._loadNodeShallow(e),r=[],o=s.children||[];for(let l=0,d=o.length;l<d;l++)r.push(n.getDependency("node",o[l]));const c=s.skin===void 0?Promise.resolve(null):n.getDependency("skin",s.skin);return Promise.all([a,Promise.all(r),c]).then(function(l){const d=l[0],u=l[1],h=l[2];h!==null&&d.traverse(function(f){f.isSkinnedMesh&&f.bind(h,NM)});for(let f=0,g=u.length;f<g;f++)d.add(u[f]);return d})}_loadNodeShallow(e){const t=this.json,n=this.extensions,s=this;if(this.nodeCache[e]!==void 0)return this.nodeCache[e];const a=t.nodes[e],r=a.name?s.createUniqueName(a.name):"",o=[],c=s._invokeOne(function(l){return l.createNodeMesh&&l.createNodeMesh(e)});return c&&o.push(c),a.camera!==void 0&&o.push(s.getDependency("camera",a.camera).then(function(l){return s._getNodeRef(s.cameraCache,a.camera,l)})),s._invokeAll(function(l){return l.createNodeAttachment&&l.createNodeAttachment(e)}).forEach(function(l){o.push(l)}),this.nodeCache[e]=Promise.all(o).then(function(l){let d;if(a.isBone===!0?d=new sm:l.length>1?d=new Ue:l.length===1?d=l[0]:d=new Rt,d!==l[0])for(let u=0,h=l.length;u<h;u++)d.add(l[u]);if(a.name&&(d.userData.name=a.name,d.name=r),Ri(d,a),a.extensions&&xs(n,d,a),a.matrix!==void 0){const u=new He;u.fromArray(a.matrix),d.applyMatrix4(u)}else a.translation!==void 0&&d.position.fromArray(a.translation),a.rotation!==void 0&&d.quaternion.fromArray(a.rotation),a.scale!==void 0&&d.scale.fromArray(a.scale);return s.associations.has(d)||s.associations.set(d,{}),s.associations.get(d).nodes=e,d}),this.nodeCache[e]}loadScene(e){const t=this.extensions,n=this.json.scenes[e],s=this,a=new Ue;n.name&&(a.name=s.createUniqueName(n.name)),Ri(a,n),n.extensions&&xs(t,a,n);const r=n.nodes||[],o=[];for(let c=0,l=r.length;c<l;c++)o.push(s.getDependency("node",r[c]));return Promise.all(o).then(function(c){for(let d=0,u=c.length;d<u;d++)a.add(c[d]);const l=d=>{const u=new Map;for(const[h,f]of s.associations)(h instanceof ui||h instanceof Ft)&&u.set(h,f);return d.traverse(h=>{const f=s.associations.get(h);f!=null&&u.set(h,f)}),u};return s.associations=l(a),a})}_createAnimationTracks(e,t,n,s,a){const r=[],o=e.name?e.name:e.uuid,c=[];Yi[a.path]===Yi.weights?e.traverse(function(h){h.morphTargetInfluences&&c.push(h.name?h.name:h.uuid)}):c.push(o);let l;switch(Yi[a.path]){case Yi.weights:l=Ia;break;case Yi.rotation:l=ka;break;case Yi.position:case Yi.scale:l=Na;break;default:switch(n.itemSize){case 1:l=Ia;break;case 2:case 3:default:l=Na;break}break}const d=s.interpolation!==void 0?CM[s.interpolation]:Br,u=this._getArrayFromAccessor(n);for(let h=0,f=c.length;h<f;h++){const g=new l(c[h]+"."+Yi[a.path],t.array,u,d);s.interpolation==="CUBICSPLINE"&&this._createCubicSplineTrackInterpolant(g),r.push(g)}return r}_getArrayFromAccessor(e){let t=e.array;if(e.normalized){const n=Nd(t.constructor),s=new Float32Array(t.length);for(let a=0,r=t.length;a<r;a++)s[a]=t[a]*n;t=s}return t}_createCubicSplineTrackInterpolant(e){e.createInterpolant=function(n){const s=this instanceof ka?RM:mm;return new s(this.times,this.values,this.getValueSize()/3,n)},e.createInterpolant.isInterpolantFactoryMethodGLTFCubicSpline=!0}}function UM(i,e,t){const n=e.attributes,s=new Rn;if(n.POSITION!==void 0){const o=t.json.accessors[n.POSITION],c=o.min,l=o.max;if(c!==void 0&&l!==void 0){if(s.set(new A(c[0],c[1],c[2]),new A(l[0],l[1],l[2])),o.normalized){const d=Nd(va[o.componentType]);s.min.multiplyScalar(d),s.max.multiplyScalar(d)}}else{console.warn("THREE.GLTFLoader: Missing min/max properties for accessor POSITION.");return}}else return;const a=e.targets;if(a!==void 0){const o=new A,c=new A;for(let l=0,d=a.length;l<d;l++){const u=a[l];if(u.POSITION!==void 0){const h=t.json.accessors[u.POSITION],f=h.min,g=h.max;if(f!==void 0&&g!==void 0){if(c.setX(Math.max(Math.abs(f[0]),Math.abs(g[0]))),c.setY(Math.max(Math.abs(f[1]),Math.abs(g[1]))),c.setZ(Math.max(Math.abs(f[2]),Math.abs(g[2]))),h.normalized){const b=Nd(va[h.componentType]);c.multiplyScalar(b)}o.max(c)}else console.warn("THREE.GLTFLoader: Missing min/max properties for accessor POSITION.")}}s.expandByVector(o)}i.boundingBox=s;const r=new pi;s.getCenter(r.center),r.radius=s.min.distanceTo(s.max)/2,i.boundingSphere=r}function Bf(i,e,t){const n=e.attributes,s=[];function a(r,o){return t.getDependency("accessor",r).then(function(c){i.setAttribute(o,c)})}for(const r in n){const o=kd[r]||r.toLowerCase();o in i.attributes||s.push(a(n[r],o))}if(e.indices!==void 0&&!i.index){const r=t.getDependency("accessor",e.indices).then(function(o){i.setIndex(o)});s.push(r)}return et.workingColorSpace!==bn&&"COLOR_0"in n&&console.warn(`THREE.GLTFLoader: Converting vertex colors from "srgb-linear" to "${et.workingColorSpace}" not supported.`),Ri(i,e),UM(i,e,t),Promise.all(s).then(function(){return e.targets!==void 0?LM(i,e.targets,t):i})}var OM=function(){var i="b9H79Tebbbe8Fv9Gbb9Gvuuuuueu9Giuuub9Geueu9Giuuueuikqbeeedddillviebeoweuec:q;iekr;leDo9TW9T9VV95dbH9F9F939H79T9F9J9H229F9Jt9VV7bb8A9TW79O9V9Wt9F9KW9J9V9KW9wWVtW949c919M9MWVbeY9TW79O9V9Wt9F9KW9J9V9KW69U9KW949c919M9MWVbdE9TW79O9V9Wt9F9KW9J9V9KW69U9KW949tWG91W9U9JWbiL9TW79O9V9Wt9F9KW9J9V9KWS9P2tWV9p9JtblK9TW79O9V9Wt9F9KW9J9V9KWS9P2tWV9r919HtbvL9TW79O9V9Wt9F9KW9J9V9KWS9P2tWVT949Wbol79IV9Rbrq:P8Yqdbk;3sezu8Jjjjjbcj;eb9Rgv8Kjjjjbc9:hodnadcefal0mbcuhoaiRbbc:Ge9hmbavaialfgrad9Radz1jjjbhwcj;abad9UhoaicefhldnadTmbaoc;WFbGgocjdaocjd6EhDcbhqinaqae9pmeaDaeaq9RaqaDfae6Egkcsfgocl4cifcd4hxdndndndnaoc9WGgmTmbcbhPcehsawcjdfhzalhHinaraH9Rax6midnaraHaxfgl9RcK6mbczhoinawcj;cbfaogifgoc9WfhOdndndndndnaHaic9WfgAco4fRbbaAci4coG4ciGPlbedibkaO9cb83ibaOcwf9cb83ibxikaOalRblalRbbgAco4gCaCciSgCE86bbaocGfalclfaCfgORbbaAcl4ciGgCaCciSgCE86bbaocVfaOaCfgORbbaAcd4ciGgCaCciSgCE86bbaoc7faOaCfgORbbaAciGgAaAciSgAE86bbaoctfaOaAfgARbbalRbegOco4gCaCciSgCE86bbaoc91faAaCfgARbbaOcl4ciGgCaCciSgCE86bbaoc4faAaCfgARbbaOcd4ciGgCaCciSgCE86bbaoc93faAaCfgARbbaOciGgOaOciSgOE86bbaoc94faAaOfgARbbalRbdgOco4gCaCciSgCE86bbaoc95faAaCfgARbbaOcl4ciGgCaCciSgCE86bbaoc96faAaCfgARbbaOcd4ciGgCaCciSgCE86bbaoc97faAaCfgARbbaOciGgOaOciSgOE86bbaoc98faAaOfgORbbalRbiglco4gAaAciSgAE86bbaoc99faOaAfgORbbalcl4ciGgAaAciSgAE86bbaoc9:faOaAfgORbbalcd4ciGgAaAciSgAE86bbaocufaOaAfgoRbbalciGglalciSglE86bbaoalfhlxdkaOalRbwalRbbgAcl4gCaCcsSgCE86bbaocGfalcwfaCfgORbbaAcsGgAaAcsSgAE86bbaocVfaOaAfgORbbalRbegAcl4gCaCcsSgCE86bbaoc7faOaCfgORbbaAcsGgAaAcsSgAE86bbaoctfaOaAfgORbbalRbdgAcl4gCaCcsSgCE86bbaoc91faOaCfgORbbaAcsGgAaAcsSgAE86bbaoc4faOaAfgORbbalRbigAcl4gCaCcsSgCE86bbaoc93faOaCfgORbbaAcsGgAaAcsSgAE86bbaoc94faOaAfgORbbalRblgAcl4gCaCcsSgCE86bbaoc95faOaCfgORbbaAcsGgAaAcsSgAE86bbaoc96faOaAfgORbbalRbvgAcl4gCaCcsSgCE86bbaoc97faOaCfgORbbaAcsGgAaAcsSgAE86bbaoc98faOaAfgORbbalRbogAcl4gCaCcsSgCE86bbaoc99faOaCfgORbbaAcsGgAaAcsSgAE86bbaoc9:faOaAfgORbbalRbrglcl4gAaAcsSgAE86bbaocufaOaAfgoRbbalcsGglalcsSglE86bbaoalfhlxekaOal8Pbb83bbaOcwfalcwf8Pbb83bbalczfhlkdnaiam9pmbaiczfhoaral9RcL0mekkaiam6mialTmidnakTmbawaPfRbbhOcbhoazhiinaiawcj;cbfaofRbbgAce4cbaAceG9R7aOfgO86bbaiadfhiaocefgoak9hmbkkazcefhzaPcefgPad6hsalhHaPad9hmexvkkcbhlasceGmdxikalaxad2fhCdnakTmbcbhHcehsawcjdfhminaral9Rax6mialTmdalaxfhlawaHfRbbhOcbhoamhiinaiawcj;cbfaofRbbgAce4cbaAceG9R7aOfgO86bbaiadfhiaocefgoak9hmbkamcefhmaHcefgHad6hsaHad9hmbkaChlxikcbhocehsinaral9Rax6mdalTmealaxfhlaocefgoad6hsadao9hmbkaChlxdkcbhlasceGTmekc9:hoxikabaqad2fawcjdfakad2z1jjjb8Aawawcjdfakcufad2fadz1jjjb8Aakaqfhqalmbkc9:hoxekcbc99aral9Radcaadca0ESEhokavcj;ebf8Kjjjjbaok;yzeHu8Jjjjjbc;ae9Rgv8Kjjjjbc9:hodnaeci9UgrcHfal0mbcuhoaiRbbgwc;WeGc;Ge9hmbawcsGgDce0mbavc;abfcFecjez:jjjjb8AavcUf9cu83ibavc8Wf9cu83ibavcyf9cu83ibavcaf9cu83ibavcKf9cu83ibavczf9cu83ibav9cu83iwav9cu83ibaialfc9WfhqaicefgwarfhodnaeTmbcmcsaDceSEhkcbhxcbhmcbhDcbhicbhlindnaoaq9nmbc9:hoxikdndnawRbbgrc;Ve0mbavc;abfalarcl4cu7fcsGcitfgPydlhsaPydbhzdnarcsGgPak9pmbavaiarcu7fcsGcdtfydbaxaPEhraPThPdndnadcd9hmbabaDcetfgHaz87ebaHcdfas87ebaHclfar87ebxekabaDcdtfgHazBdbaHclfasBdbaHcwfarBdbkaxaPfhxavc;abfalcitfgHarBdbaHasBdlavaicdtfarBdbavc;abfalcefcsGglcitfgHazBdbaHarBdlaiaPfhialcefhlxdkdndnaPcsSmbamaPfaPc987fcefhmxekaocefhrao8SbbgPcFeGhHdndnaPcu9mmbarhoxekaocvfhoaHcFbGhHcrhPdninar8SbbgOcFbGaPtaHVhHaOcu9kmearcefhraPcrfgPc8J9hmbxdkkarcefhokaHce4cbaHceG9R7amfhmkdndnadcd9hmbabaDcetfgraz87ebarcdfas87ebarclfam87ebxekabaDcdtfgrazBdbarclfasBdbarcwfamBdbkavc;abfalcitfgramBdbarasBdlavaicdtfamBdbavc;abfalcefcsGglcitfgrazBdbaramBdlaicefhialcefhlxekdnarcpe0mbaxcefgOavaiaqarcsGfRbbgPcl49RcsGcdtfydbaPcz6gHEhravaiaP9RcsGcdtfydbaOaHfgsaPcsGgOEhPaOThOdndnadcd9hmbabaDcetfgzax87ebazcdfar87ebazclfaP87ebxekabaDcdtfgzaxBdbazclfarBdbazcwfaPBdbkavaicdtfaxBdbavc;abfalcitfgzarBdbazaxBdlavaicefgicsGcdtfarBdbavc;abfalcefcsGcitfgzaPBdbazarBdlavaiaHfcsGgicdtfaPBdbavc;abfalcdfcsGglcitfgraxBdbaraPBdlalcefhlaiaOfhiasaOfhxxekaxcbaoRbbgzEgAarc;:eSgrfhsazcsGhCazcl4hXdndnazcs0mbascefhOxekashOavaiaX9RcsGcdtfydbhskdndnaCmbaOcefhxxekaOhxavaiaz9RcsGcdtfydbhOkdndnarTmbaocefhrxekaocdfhrao8SbegHcFeGhPdnaHcu9kmbaocofhAaPcFbGhPcrhodninar8SbbgHcFbGaotaPVhPaHcu9kmearcefhraocrfgoc8J9hmbkaAhrxekarcefhrkaPce4cbaPceG9R7amfgmhAkdndnaXcsSmbarhPxekarcefhPar8SbbgocFeGhHdnaocu9kmbarcvfhsaHcFbGhHcrhodninaP8SbbgrcFbGaotaHVhHarcu9kmeaPcefhPaocrfgoc8J9hmbkashPxekaPcefhPkaHce4cbaHceG9R7amfgmhskdndnaCcsSmbaPhoxekaPcefhoaP8SbbgrcFeGhHdnarcu9kmbaPcvfhOaHcFbGhHcrhrdninao8SbbgPcFbGartaHVhHaPcu9kmeaocefhoarcrfgrc8J9hmbkaOhoxekaocefhokaHce4cbaHceG9R7amfgmhOkdndnadcd9hmbabaDcetfgraA87ebarcdfas87ebarclfaO87ebxekabaDcdtfgraABdbarclfasBdbarcwfaOBdbkavc;abfalcitfgrasBdbaraABdlavaicdtfaABdbavc;abfalcefcsGcitfgraOBdbarasBdlavaicefgicsGcdtfasBdbavc;abfalcdfcsGcitfgraABdbaraOBdlavaiazcz6aXcsSVfgicsGcdtfaOBdbaiaCTaCcsSVfhialcifhlkawcefhwalcsGhlaicsGhiaDcifgDae6mbkkcbc99aoaqSEhokavc;aef8Kjjjjbaok:llevu8Jjjjjbcz9Rhvc9:hodnaecvfal0mbcuhoaiRbbc;:eGc;qe9hmbav9cb83iwaicefhraialfc98fhwdnaeTmbdnadcdSmbcbhDindnaraw6mbc9:skarcefhoar8SbbglcFeGhidndnalcu9mmbaohrxekarcvfhraicFbGhicrhldninao8SbbgdcFbGaltaiVhiadcu9kmeaocefhoalcrfglc8J9hmbxdkkaocefhrkabaDcdtfaicd4cbaice4ceG9R7avcwfaiceGcdtVgoydbfglBdbaoalBdbaDcefgDae9hmbxdkkcbhDindnaraw6mbc9:skarcefhoar8SbbglcFeGhidndnalcu9mmbaohrxekarcvfhraicFbGhicrhldninao8SbbgdcFbGaltaiVhiadcu9kmeaocefhoalcrfglc8J9hmbxdkkaocefhrkabaDcetfaicd4cbaice4ceG9R7avcwfaiceGcdtVgoydbfgl87ebaoalBdbaDcefgDae9hmbkkcbc99arawSEhokaok:Lvoeue99dud99eud99dndnadcl9hmbaeTmeindndnabcdfgd8Sbb:Yab8Sbbgi:Ygl:l:tabcefgv8Sbbgo:Ygr:l:tgwJbb;:9cawawNJbbbbawawJbbbb9GgDEgq:mgkaqaicb9iEalMgwawNakaqaocb9iEarMgqaqNMM:r:vglNJbbbZJbbb:;aDEMgr:lJbbb9p9DTmbar:Ohixekcjjjj94hikadai86bbdndnaqalNJbbbZJbbb:;aqJbbbb9GEMgq:lJbbb9p9DTmbaq:Ohdxekcjjjj94hdkavad86bbdndnawalNJbbbZJbbb:;awJbbbb9GEMgw:lJbbb9p9DTmbaw:Ohdxekcjjjj94hdkabad86bbabclfhbaecufgembxdkkaeTmbindndnabclfgd8Ueb:Yab8Uebgi:Ygl:l:tabcdfgv8Uebgo:Ygr:l:tgwJb;:FSawawNJbbbbawawJbbbb9GgDEgq:mgkaqaicb9iEalMgwawNakaqaocb9iEarMgqaqNMM:r:vglNJbbbZJbbb:;aDEMgr:lJbbb9p9DTmbar:Ohixekcjjjj94hikadai87ebdndnaqalNJbbbZJbbb:;aqJbbbb9GEMgq:lJbbb9p9DTmbaq:Ohdxekcjjjj94hdkavad87ebdndnawalNJbbbZJbbb:;awJbbbb9GEMgw:lJbbb9p9DTmbaw:Ohdxekcjjjj94hdkabad87ebabcwfhbaecufgembkkk;siliui99iue99dnaeTmbcbhiabhlindndnJ;Zl81Zalcof8UebgvciV:Y:vgoal8Ueb:YNgrJb;:FSNJbbbZJbbb:;arJbbbb9GEMgw:lJbbb9p9DTmbaw:OhDxekcjjjj94hDkalclf8Uebhqalcdf8UebhkabavcefciGaiVcetfaD87ebdndnaoak:YNgwJb;:FSNJbbbZJbbb:;awJbbbb9GEMgx:lJbbb9p9DTmbax:Ohkxekcjjjj94hkkabavcdfciGaiVcetfak87ebdndnaoaq:YNgoJb;:FSNJbbbZJbbb:;aoJbbbb9GEMgx:lJbbb9p9DTmbax:Ohqxekcjjjj94hqkabavcufciGaiVcetfaq87ebdndnJbbjZararN:tawawN:taoaoN:tgrJbbbbarJbbbb9GE:rJb;:FSNJbbbZMgr:lJbbb9p9DTmbar:Ohqxekcjjjj94hqkabavciGaiVcetfaq87ebalcwfhlaiclfhiaecufgembkkk9mbdnadcd4ae2geTmbinababydbgdcwtcw91:Yadce91cjjj;8ifcjjj98G::NUdbabclfhbaecufgembkkk9teiucbcbydj1jjbgeabcifc98GfgbBdj1jjbdndnabZbcztgd9nmbcuhiabad9RcFFifcz4nbcuSmekaehikaik;LeeeudndnaeabVciGTmbabhixekdndnadcz9pmbabhixekabhiinaiaeydbBdbaiclfaeclfydbBdbaicwfaecwfydbBdbaicxfaecxfydbBdbaiczfhiaeczfheadc9Wfgdcs0mbkkadcl6mbinaiaeydbBdbaeclfheaiclfhiadc98fgdci0mbkkdnadTmbinaiaeRbb86bbaicefhiaecefheadcufgdmbkkabk;aeedudndnabciGTmbabhixekaecFeGc:b:c:ew2hldndnadcz9pmbabhixekabhiinaialBdbaicxfalBdbaicwfalBdbaiclfalBdbaiczfhiadc9Wfgdcs0mbkkadcl6mbinaialBdbaiclfhiadc98fgdci0mbkkdnadTmbinaiae86bbaicefhiadcufgdmbkkabkkkebcjwklz9Kbb",e="b9H79TebbbeKl9Gbb9Gvuuuuueu9Giuuub9Geueuikqbbebeedddilve9Weeeviebeoweuec:q;Aekr;leDo9TW9T9VV95dbH9F9F939H79T9F9J9H229F9Jt9VV7bb8A9TW79O9V9Wt9F9KW9J9V9KW9wWVtW949c919M9MWVbdY9TW79O9V9Wt9F9KW9J9V9KW69U9KW949c919M9MWVblE9TW79O9V9Wt9F9KW9J9V9KW69U9KW949tWG91W9U9JWbvL9TW79O9V9Wt9F9KW9J9V9KWS9P2tWV9p9JtboK9TW79O9V9Wt9F9KW9J9V9KWS9P2tWV9r919HtbrL9TW79O9V9Wt9F9KW9J9V9KWS9P2tWVT949Wbwl79IV9RbDq;t9tqlbzik9:evu8Jjjjjbcz9Rhbcbheincbhdcbhiinabcwfadfaicjuaead4ceGglE86bbaialfhiadcefgdcw9hmbkaec:q:yjjbfai86bbaecitc:q1jjbfab8Piw83ibaecefgecjd9hmbkk;h8JlHud97euo978Jjjjjbcj;kb9Rgv8Kjjjjbc9:hodnadcefal0mbcuhoaiRbbc:Ge9hmbavaialfgrad9Rad;8qbbcj;abad9UhoaicefhldnadTmbaoc;WFbGgocjdaocjd6EhwcbhDinaDae9pmeawaeaD9RaDawfae6Egqcsfgoc9WGgkci2hxakcethmaocl4cifcd4hPabaDad2fhscbhzdnincehHalhOcbhAdninaraO9RaP6miavcj;cbfaAak2fhCaOaPfhlcbhidnakc;ab6mbaral9Rc;Gb6mbcbhoinaCaofhidndndndndnaOaoco4fRbbgXciGPlbedibkaipxbbbbbbbbbbbbbbbbpklbxikaialpbblalpbbbgQclp:meaQpmbzeHdOiAlCvXoQrLgQcdp:meaQpmbzeHdOiAlCvXoQrLpxiiiiiiiiiiiiiiiip9ogLpxiiiiiiiiiiiiiiiip8JgQp5b9cjF;8;4;W;G;ab9:9cU1:NgKcitc:q1jjbfpbibaKc:q:yjjbfpbbbgYaYpmbbbbbbbbbbbbbbbbaQp5e9cjF;8;4;W;G;ab9:9cU1:NgKcitc:q1jjbfpbibp9UpmbedilvorzHOACXQLpPaLaQp9spklbalclfaYpQbfaKc:q:yjjbfRbbfhlxdkaialpbbwalpbbbgQclp:meaQpmbzeHdOiAlCvXoQrLpxssssssssssssssssp9ogLpxssssssssssssssssp8JgQp5b9cjF;8;4;W;G;ab9:9cU1:NgKcitc:q1jjbfpbibaKc:q:yjjbfpbbbgYaYpmbbbbbbbbbbbbbbbbaQp5e9cjF;8;4;W;G;ab9:9cU1:NgKcitc:q1jjbfpbibp9UpmbedilvorzHOACXQLpPaLaQp9spklbalcwfaYpQbfaKc:q:yjjbfRbbfhlxekaialpbbbpklbalczfhlkdndndndndnaXcd4ciGPlbedibkaipxbbbbbbbbbbbbbbbbpklzxikaialpbblalpbbbgQclp:meaQpmbzeHdOiAlCvXoQrLgQcdp:meaQpmbzeHdOiAlCvXoQrLpxiiiiiiiiiiiiiiiip9ogLpxiiiiiiiiiiiiiiiip8JgQp5b9cjF;8;4;W;G;ab9:9cU1:NgKcitc:q1jjbfpbibaKc:q:yjjbfpbbbgYaYpmbbbbbbbbbbbbbbbbaQp5e9cjF;8;4;W;G;ab9:9cU1:NgKcitc:q1jjbfpbibp9UpmbedilvorzHOACXQLpPaLaQp9spklzalclfaYpQbfaKc:q:yjjbfRbbfhlxdkaialpbbwalpbbbgQclp:meaQpmbzeHdOiAlCvXoQrLpxssssssssssssssssp9ogLpxssssssssssssssssp8JgQp5b9cjF;8;4;W;G;ab9:9cU1:NgKcitc:q1jjbfpbibaKc:q:yjjbfpbbbgYaYpmbbbbbbbbbbbbbbbbaQp5e9cjF;8;4;W;G;ab9:9cU1:NgKcitc:q1jjbfpbibp9UpmbedilvorzHOACXQLpPaLaQp9spklzalcwfaYpQbfaKc:q:yjjbfRbbfhlxekaialpbbbpklzalczfhlkdndndndndnaXcl4ciGPlbedibkaipxbbbbbbbbbbbbbbbbpklaxikaialpbblalpbbbgQclp:meaQpmbzeHdOiAlCvXoQrLgQcdp:meaQpmbzeHdOiAlCvXoQrLpxiiiiiiiiiiiiiiiip9ogLpxiiiiiiiiiiiiiiiip8JgQp5b9cjF;8;4;W;G;ab9:9cU1:NgKcitc:q1jjbfpbibaKc:q:yjjbfpbbbgYaYpmbbbbbbbbbbbbbbbbaQp5e9cjF;8;4;W;G;ab9:9cU1:NgKcitc:q1jjbfpbibp9UpmbedilvorzHOACXQLpPaLaQp9spklaalclfaYpQbfaKc:q:yjjbfRbbfhlxdkaialpbbwalpbbbgQclp:meaQpmbzeHdOiAlCvXoQrLpxssssssssssssssssp9ogLpxssssssssssssssssp8JgQp5b9cjF;8;4;W;G;ab9:9cU1:NgKcitc:q1jjbfpbibaKc:q:yjjbfpbbbgYaYpmbbbbbbbbbbbbbbbbaQp5e9cjF;8;4;W;G;ab9:9cU1:NgKcitc:q1jjbfpbibp9UpmbedilvorzHOACXQLpPaLaQp9spklaalcwfaYpQbfaKc:q:yjjbfRbbfhlxekaialpbbbpklaalczfhlkdndndndndnaXco4Plbedibkaipxbbbbbbbbbbbbbbbbpkl8WxikaialpbblalpbbbgQclp:meaQpmbzeHdOiAlCvXoQrLgQcdp:meaQpmbzeHdOiAlCvXoQrLpxiiiiiiiiiiiiiiiip9ogLpxiiiiiiiiiiiiiiiip8JgQp5b9cjF;8;4;W;G;ab9:9cU1:NgXcitc:q1jjbfpbibaXc:q:yjjbfpbbbgYaYpmbbbbbbbbbbbbbbbbaQp5e9cjF;8;4;W;G;ab9:9cU1:NgXcitc:q1jjbfpbibp9UpmbedilvorzHOACXQLpPaLaQp9spkl8WalclfaYpQbfaXc:q:yjjbfRbbfhlxdkaialpbbwalpbbbgQclp:meaQpmbzeHdOiAlCvXoQrLpxssssssssssssssssp9ogLpxssssssssssssssssp8JgQp5b9cjF;8;4;W;G;ab9:9cU1:NgXcitc:q1jjbfpbibaXc:q:yjjbfpbbbgYaYpmbbbbbbbbbbbbbbbbaQp5e9cjF;8;4;W;G;ab9:9cU1:NgXcitc:q1jjbfpbibp9UpmbedilvorzHOACXQLpPaLaQp9spkl8WalcwfaYpQbfaXc:q:yjjbfRbbfhlxekaialpbbbpkl8Walczfhlkaoc;abfhiaocjefak0meaihoaral9Rc;Fb0mbkkdndnaiak9pmbaici4hoinaral9RcK6mdaCaifhXdndndndndnaOaico4fRbbaocoG4ciGPlbedibkaXpxbbbbbbbbbbbbbbbbpklbxikaXalpbblalpbbbgQclp:meaQpmbzeHdOiAlCvXoQrLgQcdp:meaQpmbzeHdOiAlCvXoQrLpxiiiiiiiiiiiiiiiip9ogLpxiiiiiiiiiiiiiiiip8JgQp5b9cjF;8;4;W;G;ab9:9cU1:NgKcitc:q1jjbfpbibaKc:q:yjjbfpbbbgYaYpmbbbbbbbbbbbbbbbbaQp5e9cjF;8;4;W;G;ab9:9cU1:NgKcitc:q1jjbfpbibp9UpmbedilvorzHOACXQLpPaLaQp9spklbalclfaYpQbfaKc:q:yjjbfRbbfhlxdkaXalpbbwalpbbbgQclp:meaQpmbzeHdOiAlCvXoQrLpxssssssssssssssssp9ogLpxssssssssssssssssp8JgQp5b9cjF;8;4;W;G;ab9:9cU1:NgKcitc:q1jjbfpbibaKc:q:yjjbfpbbbgYaYpmbbbbbbbbbbbbbbbbaQp5e9cjF;8;4;W;G;ab9:9cU1:NgKcitc:q1jjbfpbibp9UpmbedilvorzHOACXQLpPaLaQp9spklbalcwfaYpQbfaKc:q:yjjbfRbbfhlxekaXalpbbbpklbalczfhlkaocdfhoaiczfgiak6mbkkalTmbaAci6hHalhOaAcefgohAaoclSmdxekkcbhlaHceGmdkdnakTmbavcjdfazfhiavazfpbdbhYcbhXinaiavcj;cbfaXfgopblbgLcep9TaLpxeeeeeeeeeeeeeeeegQp9op9Hp9rgLaoakfpblbg8Acep9Ta8AaQp9op9Hp9rg8ApmbzeHdOiAlCvXoQrLgEaoamfpblbg3cep9Ta3aQp9op9Hp9rg3aoaxfpblbg5cep9Ta5aQp9op9Hp9rg5pmbzeHdOiAlCvXoQrLg8EpmbezHdiOAlvCXorQLgQaQpmbedibedibedibediaYp9UgYp9AdbbaiadfgoaYaQaQpmlvorlvorlvorlvorp9UgYp9AdbbaoadfgoaYaQaQpmwDqkwDqkwDqkwDqkp9UgYp9AdbbaoadfgoaYaQaQpmxmPsxmPsxmPsxmPsp9UgYp9AdbbaoadfgoaYaEa8EpmwDKYqk8AExm35Ps8E8FgQaQpmbedibedibedibedip9UgYp9AdbbaoadfgoaYaQaQpmlvorlvorlvorlvorp9UgYp9AdbbaoadfgoaYaQaQpmwDqkwDqkwDqkwDqkp9UgYp9AdbbaoadfgoaYaQaQpmxmPsxmPsxmPsxmPsp9UgYp9AdbbaoadfgoaYaLa8ApmwKDYq8AkEx3m5P8Es8FgLa3a5pmwKDYq8AkEx3m5P8Es8Fg8ApmbezHdiOAlvCXorQLgQaQpmbedibedibedibedip9UgYp9AdbbaoadfgoaYaQaQpmlvorlvorlvorlvorp9UgYp9AdbbaoadfgoaYaQaQpmwDqkwDqkwDqkwDqkp9UgYp9AdbbaoadfgoaYaQaQpmxmPsxmPsxmPsxmPsp9UgYp9AdbbaoadfgoaYaLa8ApmwDKYqk8AExm35Ps8E8FgQaQpmbedibedibedibedip9UgYp9AdbbaoadfgoaYaQaQpmlvorlvorlvorlvorp9UgYp9AdbbaoadfgoaYaQaQpmwDqkwDqkwDqkwDqkp9UgYp9AdbbaoadfgoaYaQaQpmxmPsxmPsxmPsxmPsp9UgYp9AdbbaoadfhiaXczfgXak6mbkkazclfgzad6mbkasavcjdfaqad2;8qbbavavcjdfaqcufad2fad;8qbbaqaDfhDc9:hoalmexikkc9:hoxekcbc99aral9Radcaadca0ESEhokavcj;kbf8Kjjjjbaokwbz:bjjjbk;uzeHu8Jjjjjbc;ae9Rgv8Kjjjjbc9:hodnaeci9UgrcHfal0mbcuhoaiRbbgwc;WeGc;Ge9hmbawcsGgDce0mbavc;abfcFecje;8kbavcUf9cu83ibavc8Wf9cu83ibavcyf9cu83ibavcaf9cu83ibavcKf9cu83ibavczf9cu83ibav9cu83iwav9cu83ibaialfc9WfhqaicefgwarfhodnaeTmbcmcsaDceSEhkcbhxcbhmcbhDcbhicbhlindnaoaq9nmbc9:hoxikdndnawRbbgrc;Ve0mbavc;abfalarcl4cu7fcsGcitfgPydlhsaPydbhzdnarcsGgPak9pmbavaiarcu7fcsGcdtfydbaxaPEhraPThPdndnadcd9hmbabaDcetfgHaz87ebaHcdfas87ebaHclfar87ebxekabaDcdtfgHazBdbaHclfasBdbaHcwfarBdbkaxaPfhxavc;abfalcitfgHarBdbaHasBdlavaicdtfarBdbavc;abfalcefcsGglcitfgHazBdbaHarBdlaiaPfhialcefhlxdkdndnaPcsSmbamaPfaPc987fcefhmxekaocefhrao8SbbgPcFeGhHdndnaPcu9mmbarhoxekaocvfhoaHcFbGhHcrhPdninar8SbbgOcFbGaPtaHVhHaOcu9kmearcefhraPcrfgPc8J9hmbxdkkarcefhokaHce4cbaHceG9R7amfhmkdndnadcd9hmbabaDcetfgraz87ebarcdfas87ebarclfam87ebxekabaDcdtfgrazBdbarclfasBdbarcwfamBdbkavc;abfalcitfgramBdbarasBdlavaicdtfamBdbavc;abfalcefcsGglcitfgrazBdbaramBdlaicefhialcefhlxekdnarcpe0mbaxcefgOavaiaqarcsGfRbbgPcl49RcsGcdtfydbaPcz6gHEhravaiaP9RcsGcdtfydbaOaHfgsaPcsGgOEhPaOThOdndnadcd9hmbabaDcetfgzax87ebazcdfar87ebazclfaP87ebxekabaDcdtfgzaxBdbazclfarBdbazcwfaPBdbkavaicdtfaxBdbavc;abfalcitfgzarBdbazaxBdlavaicefgicsGcdtfarBdbavc;abfalcefcsGcitfgzaPBdbazarBdlavaiaHfcsGgicdtfaPBdbavc;abfalcdfcsGglcitfgraxBdbaraPBdlalcefhlaiaOfhiasaOfhxxekaxcbaoRbbgzEgAarc;:eSgrfhsazcsGhCazcl4hXdndnazcs0mbascefhOxekashOavaiaX9RcsGcdtfydbhskdndnaCmbaOcefhxxekaOhxavaiaz9RcsGcdtfydbhOkdndnarTmbaocefhrxekaocdfhrao8SbegHcFeGhPdnaHcu9kmbaocofhAaPcFbGhPcrhodninar8SbbgHcFbGaotaPVhPaHcu9kmearcefhraocrfgoc8J9hmbkaAhrxekarcefhrkaPce4cbaPceG9R7amfgmhAkdndnaXcsSmbarhPxekarcefhPar8SbbgocFeGhHdnaocu9kmbarcvfhsaHcFbGhHcrhodninaP8SbbgrcFbGaotaHVhHarcu9kmeaPcefhPaocrfgoc8J9hmbkashPxekaPcefhPkaHce4cbaHceG9R7amfgmhskdndnaCcsSmbaPhoxekaPcefhoaP8SbbgrcFeGhHdnarcu9kmbaPcvfhOaHcFbGhHcrhrdninao8SbbgPcFbGartaHVhHaPcu9kmeaocefhoarcrfgrc8J9hmbkaOhoxekaocefhokaHce4cbaHceG9R7amfgmhOkdndnadcd9hmbabaDcetfgraA87ebarcdfas87ebarclfaO87ebxekabaDcdtfgraABdbarclfasBdbarcwfaOBdbkavc;abfalcitfgrasBdbaraABdlavaicdtfaABdbavc;abfalcefcsGcitfgraOBdbarasBdlavaicefgicsGcdtfasBdbavc;abfalcdfcsGcitfgraABdbaraOBdlavaiazcz6aXcsSVfgicsGcdtfaOBdbaiaCTaCcsSVfhialcifhlkawcefhwalcsGhlaicsGhiaDcifgDae6mbkkcbc99aoaqSEhokavc;aef8Kjjjjbaok:llevu8Jjjjjbcz9Rhvc9:hodnaecvfal0mbcuhoaiRbbc;:eGc;qe9hmbav9cb83iwaicefhraialfc98fhwdnaeTmbdnadcdSmbcbhDindnaraw6mbc9:skarcefhoar8SbbglcFeGhidndnalcu9mmbaohrxekarcvfhraicFbGhicrhldninao8SbbgdcFbGaltaiVhiadcu9kmeaocefhoalcrfglc8J9hmbxdkkaocefhrkabaDcdtfaicd4cbaice4ceG9R7avcwfaiceGcdtVgoydbfglBdbaoalBdbaDcefgDae9hmbxdkkcbhDindnaraw6mbc9:skarcefhoar8SbbglcFeGhidndnalcu9mmbaohrxekarcvfhraicFbGhicrhldninao8SbbgdcFbGaltaiVhiadcu9kmeaocefhoalcrfglc8J9hmbxdkkaocefhrkabaDcetfaicd4cbaice4ceG9R7avcwfaiceGcdtVgoydbfgl87ebaoalBdbaDcefgDae9hmbkkcbc99arawSEhokaok:EPliuo97eue978Jjjjjbca9Rhidndnadcl9hmbdnaec98GglTmbcbhvabhdinadadpbbbgocKp:RecKp:Sep;6egraocwp:RecKp:Sep;6earp;Geaoczp:RecKp:Sep;6egwp;Gep;Kep;LegDpxbbbbbbbbbbbbbbbbp:2egqarpxbbbjbbbjbbbjbbbjgkp9op9rp;Kegrpxbb;:9cbb;:9cbb;:9cbb;:9cararp;MeaDaDp;Meawaqawakp9op9rp;Kegrarp;Mep;Kep;Kep;Jep;Negwp;Mepxbbn0bbn0bbn0bbn0gqp;KepxFbbbFbbbFbbbFbbbp9oaopxbbbFbbbFbbbFbbbFp9op9qarawp;Meaqp;Kecwp:RepxbFbbbFbbbFbbbFbbp9op9qaDawp;Meaqp;Keczp:RepxbbFbbbFbbbFbbbFbp9op9qpkbbadczfhdavclfgval6mbkkalae9pmeaiaeciGgvcdtgdVcbczad9R;8kbaiabalcdtfglad;8qbbdnavTmbaiaipblbgocKp:RecKp:Sep;6egraocwp:RecKp:Sep;6earp;Geaoczp:RecKp:Sep;6egwp;Gep;Kep;LegDpxbbbbbbbbbbbbbbbbp:2egqarpxbbbjbbbjbbbjbbbjgkp9op9rp;Kegrpxbb;:9cbb;:9cbb;:9cbb;:9cararp;MeaDaDp;Meawaqawakp9op9rp;Kegrarp;Mep;Kep;Kep;Jep;Negwp;Mepxbbn0bbn0bbn0bbn0gqp;KepxFbbbFbbbFbbbFbbbp9oaopxbbbFbbbFbbbFbbbFp9op9qarawp;Meaqp;Kecwp:RepxbFbbbFbbbFbbbFbbp9op9qaDawp;Meaqp;Keczp:RepxbbFbbbFbbbFbbbFbp9op9qpklbkalaiad;8qbbskdnaec98GgxTmbcbhvabhdinadczfglalpbbbgopxbbbbbbFFbbbbbbFFgkp9oadpbbbgDaopmlvorxmPsCXQL358E8FpxFubbFubbFubbFubbp9op;6eaDaopmbediwDqkzHOAKY8AEgoczp:Sep;6egrp;Geaoczp:Reczp:Sep;6egwp;Gep;Kep;Legopxb;:FSb;:FSb;:FSb;:FSawaopxbbbbbbbbbbbbbbbbp:2egqawpxbbbjbbbjbbbjbbbjgmp9op9rp;Kegwawp;Meaoaop;Mearaqaramp9op9rp;Kegoaop;Mep;Kep;Kep;Jep;Negrp;Mepxbbn0bbn0bbn0bbn0gqp;Keczp:Reawarp;Meaqp;KepxFFbbFFbbFFbbFFbbp9op9qgwaoarp;Meaqp;KepxFFbbFFbbFFbbFFbbp9ogopmwDKYqk8AExm35Ps8E8Fp9qpkbbadaDakp9oawaopmbezHdiOAlvCXorQLp9qpkbbadcafhdavclfgvax6mbkkaxae9pmbaiaeciGgvcitgdfcbcaad9R;8kbaiabaxcitfglad;8qbbdnavTmbaiaipblzgopxbbbbbbFFbbbbbbFFgkp9oaipblbgDaopmlvorxmPsCXQL358E8FpxFubbFubbFubbFubbp9op;6eaDaopmbediwDqkzHOAKY8AEgoczp:Sep;6egrp;Geaoczp:Reczp:Sep;6egwp;Gep;Kep;Legopxb;:FSb;:FSb;:FSb;:FSawaopxbbbbbbbbbbbbbbbbp:2egqawpxbbbjbbbjbbbjbbbjgmp9op9rp;Kegwawp;Meaoaop;Mearaqaramp9op9rp;Kegoaop;Mep;Kep;Kep;Jep;Negrp;Mepxbbn0bbn0bbn0bbn0gqp;Keczp:Reawarp;Meaqp;KepxFFbbFFbbFFbbFFbbp9op9qgwaoarp;Meaqp;KepxFFbbFFbbFFbbFFbbp9ogopmwDKYqk8AExm35Ps8E8Fp9qpklzaiaDakp9oawaopmbezHdiOAlvCXorQLp9qpklbkalaiad;8qbbkk;4wllue97euv978Jjjjjbc8W9Rhidnaec98GglTmbcbhvabhoinaiaopbbbgraoczfgwpbbbgDpmlvorxmPsCXQL358E8Fgqczp:Segkclp:RepklbaopxbbjZbbjZbbjZbbjZpx;Zl81Z;Zl81Z;Zl81Z;Zl81Zakpxibbbibbbibbbibbbp9qp;6ep;NegkaraDpmbediwDqkzHOAKY8AEgrczp:Reczp:Sep;6ep;MegDaDp;Meakarczp:Sep;6ep;Megxaxp;Meakaqczp:Reczp:Sep;6ep;Megqaqp;Mep;Kep;Kep;Lepxbbbbbbbbbbbbbbbbp:4ep;Jepxb;:FSb;:FSb;:FSb;:FSgkp;Mepxbbn0bbn0bbn0bbn0grp;KepxFFbbFFbbFFbbFFbbgmp9oaxakp;Mearp;Keczp:Rep9qgxaqakp;Mearp;Keczp:ReaDakp;Mearp;Keamp9op9qgkpmbezHdiOAlvCXorQLgrp5baipblbpEb:T:j83ibaocwfarp5eaipblbpEe:T:j83ibawaxakpmwDKYqk8AExm35Ps8E8Fgkp5baipblbpEd:T:j83ibaocKfakp5eaipblbpEi:T:j83ibaocafhoavclfgval6mbkkdnalae9pmbaiaeciGgvcitgofcbcaao9R;8kbaiabalcitfgwao;8qbbdnavTmbaiaipblbgraipblzgDpmlvorxmPsCXQL358E8Fgqczp:Segkclp:RepklaaipxbbjZbbjZbbjZbbjZpx;Zl81Z;Zl81Z;Zl81Z;Zl81Zakpxibbbibbbibbbibbbp9qp;6ep;NegkaraDpmbediwDqkzHOAKY8AEgrczp:Reczp:Sep;6ep;MegDaDp;Meakarczp:Sep;6ep;Megxaxp;Meakaqczp:Reczp:Sep;6ep;Megqaqp;Mep;Kep;Kep;Lepxbbbbbbbbbbbbbbbbp:4ep;Jepxb;:FSb;:FSb;:FSb;:FSgkp;Mepxbbn0bbn0bbn0bbn0grp;KepxFFbbFFbbFFbbFFbbgmp9oaxakp;Mearp;Keczp:Rep9qgxaqakp;Mearp;Keczp:ReaDakp;Mearp;Keamp9op9qgkpmbezHdiOAlvCXorQLgrp5baipblapEb:T:j83ibaiarp5eaipblapEe:T:j83iwaiaxakpmwDKYqk8AExm35Ps8E8Fgkp5baipblapEd:T:j83izaiakp5eaipblapEi:T:j83iKkawaiao;8qbbkk:Pddiue978Jjjjjbc;ab9Rhidnadcd4ae2glc98GgvTmbcbhdabheinaeaepbbbgocwp:Recwp:Sep;6eaocep:SepxbbjZbbjZbbjZbbjZp:UepxbbjFbbjFbbjFbbjFp9op;Mepkbbaeczfheadclfgdav6mbkkdnaval9pmbaialciGgdcdtgeVcbc;abae9R;8kbaiabavcdtfgvae;8qbbdnadTmbaiaipblbgocwp:Recwp:Sep;6eaocep:SepxbbjZbbjZbbjZbbjZp:UepxbbjFbbjFbbjFbbjFp9op;Mepklbkavaiae;8qbbkk9teiucbcbydj1jjbgeabcifc98GfgbBdj1jjbdndnabZbcztgd9nmbcuhiabad9RcFFifcz4nbcuSmekaehikaikkkebcjwklz9Tbb",t=new Uint8Array([0,97,115,109,1,0,0,0,1,4,1,96,0,0,3,3,2,0,0,5,3,1,0,1,12,1,0,10,22,2,12,0,65,0,65,0,65,0,252,10,0,0,11,7,0,65,0,253,15,26,11]),n=new Uint8Array([32,0,65,2,1,106,34,33,3,128,11,4,13,64,6,253,10,7,15,116,127,5,8,12,40,16,19,54,20,9,27,255,113,17,42,67,24,23,146,148,18,14,22,45,70,69,56,114,101,21,25,63,75,136,108,28,118,29,73,115]);if(typeof WebAssembly!="object")return{supported:!1};var s=WebAssembly.validate(t)?e:i,a,r=WebAssembly.instantiate(o(s),{}).then(function(p){a=p.instance,a.exports.__wasm_call_ctors()});function o(p){for(var v=new Uint8Array(p.length),x=0;x<p.length;++x){var y=p.charCodeAt(x);v[x]=y>96?y-97:y>64?y-39:y+4}for(var D=0,x=0;x<p.length;++x)v[D++]=v[x]<60?n[v[x]]:(v[x]-60)*64+v[++x];return v.buffer.slice(0,D)}function c(p,v,x,y,D,T){var R=a.exports.sbrk,I=x+3&-4,_=R(I*y),M=R(D.length),L=new Uint8Array(a.exports.memory.buffer);L.set(D,M);var k=p(_,x,y,M,D.length);if(k==0&&T&&T(_,I,y),v.set(L.subarray(_,_+x*y)),R(_-R(0)),k!=0)throw new Error("Malformed buffer data: "+k)}var l={NONE:"",OCTAHEDRAL:"meshopt_decodeFilterOct",QUATERNION:"meshopt_decodeFilterQuat",EXPONENTIAL:"meshopt_decodeFilterExp"},d={ATTRIBUTES:"meshopt_decodeVertexBuffer",TRIANGLES:"meshopt_decodeIndexBuffer",INDICES:"meshopt_decodeIndexSequence"},u=[],h=0;function f(p){var v={object:new Worker(p),pending:0,requests:{}};return v.object.onmessage=function(x){var y=x.data;v.pending-=y.count,v.requests[y.id][y.action](y.value),delete v.requests[y.id]},v}function g(p){for(var v="var instance; var ready = WebAssembly.instantiate(new Uint8Array(["+new Uint8Array(o(s))+"]), {}).then(function(result) { instance = result.instance; instance.exports.__wasm_call_ctors(); });self.onmessage = workerProcess;"+c.toString()+m.toString(),x=new Blob([v],{type:"text/javascript"}),y=URL.createObjectURL(x),D=0;D<p;++D)u[D]=f(y);URL.revokeObjectURL(y)}function b(p,v,x,y,D){for(var T=u[0],R=1;R<u.length;++R)u[R].pending<T.pending&&(T=u[R]);return new Promise(function(I,_){var M=new Uint8Array(x),L=h++;T.pending+=p,T.requests[L]={resolve:I,reject:_},T.object.postMessage({id:L,count:p,size:v,source:M,mode:y,filter:D},[M.buffer])})}function m(p){r.then(function(){var v=p.data;try{var x=new Uint8Array(v.count*v.size);c(a.exports[v.mode],x,v.count,v.size,v.source,a.exports[v.filter]),self.postMessage({id:v.id,count:v.count,action:"resolve",value:x},[x.buffer])}catch(y){self.postMessage({id:v.id,count:v.count,action:"reject",value:y})}})}return{ready:r,supported:!0,useWorkers:function(p){g(p)},decodeVertexBuffer:function(p,v,x,y,D){c(a.exports.meshopt_decodeVertexBuffer,p,v,x,y,a.exports[l[D]])},decodeIndexBuffer:function(p,v,x,y){c(a.exports.meshopt_decodeIndexBuffer,p,v,x,y)},decodeIndexSequence:function(p,v,x,y){c(a.exports.meshopt_decodeIndexSequence,p,v,x,y)},decodeGltfBuffer:function(p,v,x,y,D,T){c(a.exports[d[D]],p,v,x,y,a.exports[l[T]])},decodeGltfBufferAsync:function(p,v,x,y,D){return u.length>0?b(p,v,x,d[y],l[D]):r.then(function(){var T=new Uint8Array(p*v);return c(a.exports[d[y]],T,p,v,x,a.exports[l[D]]),T})}}}();class Rc extends j{constructor(){const e=Rc.SkyShader,t=new un({name:e.name,uniforms:Kp.clone(e.uniforms),vertexShader:e.vertexShader,fragmentShader:e.fragmentShader,side:Gt,depthWrite:!1});super(new mt(1,1,1),t),this.isSky=!0}}Rc.SkyShader={name:"SkyShader",uniforms:{turbidity:{value:2},rayleigh:{value:1},mieCoefficient:{value:.005},mieDirectionalG:{value:.8},sunPosition:{value:new A},up:{value:new A(0,1,0)}},vertexShader:`
		uniform vec3 sunPosition;
		uniform float rayleigh;
		uniform float turbidity;
		uniform float mieCoefficient;
		uniform vec3 up;

		varying vec3 vWorldPosition;
		varying vec3 vSunDirection;
		varying float vSunfade;
		varying vec3 vBetaR;
		varying vec3 vBetaM;
		varying float vSunE;

		// constants for atmospheric scattering
		const float e = 2.71828182845904523536028747135266249775724709369995957;
		const float pi = 3.141592653589793238462643383279502884197169;

		// wavelength of used primaries, according to preetham
		const vec3 lambda = vec3( 680E-9, 550E-9, 450E-9 );
		// this pre-calcuation replaces older TotalRayleigh(vec3 lambda) function:
		// (8.0 * pow(pi, 3.0) * pow(pow(n, 2.0) - 1.0, 2.0) * (6.0 + 3.0 * pn)) / (3.0 * N * pow(lambda, vec3(4.0)) * (6.0 - 7.0 * pn))
		const vec3 totalRayleigh = vec3( 5.804542996261093E-6, 1.3562911419845635E-5, 3.0265902468824876E-5 );

		// mie stuff
		// K coefficient for the primaries
		const float v = 4.0;
		const vec3 K = vec3( 0.686, 0.678, 0.666 );
		// MieConst = pi * pow( ( 2.0 * pi ) / lambda, vec3( v - 2.0 ) ) * K
		const vec3 MieConst = vec3( 1.8399918514433978E14, 2.7798023919660528E14, 4.0790479543861094E14 );

		// earth shadow hack
		// cutoffAngle = pi / 1.95;
		const float cutoffAngle = 1.6110731556870734;
		const float steepness = 1.5;
		const float EE = 1000.0;

		float sunIntensity( float zenithAngleCos ) {
			zenithAngleCos = clamp( zenithAngleCos, -1.0, 1.0 );
			return EE * max( 0.0, 1.0 - pow( e, -( ( cutoffAngle - acos( zenithAngleCos ) ) / steepness ) ) );
		}

		vec3 totalMie( float T ) {
			float c = ( 0.2 * T ) * 10E-18;
			return 0.434 * c * MieConst;
		}

		void main() {

			vec4 worldPosition = modelMatrix * vec4( position, 1.0 );
			vWorldPosition = worldPosition.xyz;

			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
			gl_Position.z = gl_Position.w; // set z to camera.far

			vSunDirection = normalize( sunPosition );

			vSunE = sunIntensity( dot( vSunDirection, up ) );

			vSunfade = 1.0 - clamp( 1.0 - exp( ( sunPosition.y / 450000.0 ) ), 0.0, 1.0 );

			float rayleighCoefficient = rayleigh - ( 1.0 * ( 1.0 - vSunfade ) );

			// extinction (absorbtion + out scattering)
			// rayleigh coefficients
			vBetaR = totalRayleigh * rayleighCoefficient;

			// mie coefficients
			vBetaM = totalMie( turbidity ) * mieCoefficient;

		}`,fragmentShader:`
		varying vec3 vWorldPosition;
		varying vec3 vSunDirection;
		varying float vSunfade;
		varying vec3 vBetaR;
		varying vec3 vBetaM;
		varying float vSunE;

		uniform float mieDirectionalG;
		uniform vec3 up;

		// constants for atmospheric scattering
		const float pi = 3.141592653589793238462643383279502884197169;

		const float n = 1.0003; // refractive index of air
		const float N = 2.545E25; // number of molecules per unit volume for air at 288.15K and 1013mb (sea level -45 celsius)

		// optical length at zenith for molecules
		const float rayleighZenithLength = 8.4E3;
		const float mieZenithLength = 1.25E3;
		// 66 arc seconds -> degrees, and the cosine of that
		const float sunAngularDiameterCos = 0.999956676946448443553574619906976478926848692873900859324;

		// 3.0 / ( 16.0 * pi )
		const float THREE_OVER_SIXTEENPI = 0.05968310365946075;
		// 1.0 / ( 4.0 * pi )
		const float ONE_OVER_FOURPI = 0.07957747154594767;

		float rayleighPhase( float cosTheta ) {
			return THREE_OVER_SIXTEENPI * ( 1.0 + pow( cosTheta, 2.0 ) );
		}

		float hgPhase( float cosTheta, float g ) {
			float g2 = pow( g, 2.0 );
			float inverse = 1.0 / pow( 1.0 - 2.0 * g * cosTheta + g2, 1.5 );
			return ONE_OVER_FOURPI * ( ( 1.0 - g2 ) * inverse );
		}

		void main() {

			vec3 direction = normalize( vWorldPosition - cameraPosition );

			// optical length
			// cutoff angle at 90 to avoid singularity in next formula.
			float zenithAngle = acos( max( 0.0, dot( up, direction ) ) );
			float inverse = 1.0 / ( cos( zenithAngle ) + 0.15 * pow( 93.885 - ( ( zenithAngle * 180.0 ) / pi ), -1.253 ) );
			float sR = rayleighZenithLength * inverse;
			float sM = mieZenithLength * inverse;

			// combined extinction factor
			vec3 Fex = exp( -( vBetaR * sR + vBetaM * sM ) );

			// in scattering
			float cosTheta = dot( direction, vSunDirection );

			float rPhase = rayleighPhase( cosTheta * 0.5 + 0.5 );
			vec3 betaRTheta = vBetaR * rPhase;

			float mPhase = hgPhase( cosTheta, mieDirectionalG );
			vec3 betaMTheta = vBetaM * mPhase;

			vec3 Lin = pow( vSunE * ( ( betaRTheta + betaMTheta ) / ( vBetaR + vBetaM ) ) * ( 1.0 - Fex ), vec3( 1.5 ) );
			Lin *= mix( vec3( 1.0 ), pow( vSunE * ( ( betaRTheta + betaMTheta ) / ( vBetaR + vBetaM ) ) * Fex, vec3( 1.0 / 2.0 ) ), clamp( pow( 1.0 - dot( up, vSunDirection ), 5.0 ), 0.0, 1.0 ) );

			// nightsky
			float theta = acos( direction.y ); // elevation --> y-axis, [-pi/2, pi/2]
			float phi = atan( direction.z, direction.x ); // azimuth --> x-axis [-pi/2, pi/2]
			vec2 uv = vec2( phi, theta ) / vec2( 2.0 * pi, pi ) + vec2( 0.5, 0.0 );
			vec3 L0 = vec3( 0.1 ) * Fex;

			// composition + solar disc
			float sundisk = smoothstep( sunAngularDiameterCos, sunAngularDiameterCos + 0.00002, cosTheta );
			L0 += ( vSunE * 19000.0 * Fex ) * sundisk;

			vec3 texColor = ( Lin + L0 ) * 0.04 + vec3( 0.0, 0.0003, 0.00075 );

			vec3 retColor = pow( texColor, vec3( 1.0 / ( 1.2 + ( 1.2 * vSunfade ) ) ) );

			gl_FragColor = vec4( retColor, 1.0 );

			#include <tonemapping_fragment>
			#include <colorspace_fragment>

		}`};const BM={name:"FXAAShader",uniforms:{tDiffuse:{value:null},resolution:{value:new Ce(1/1024,1/512)}},vertexShader:`

		varying vec2 vUv;

		void main() {

			vUv = uv;
			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

		}`,fragmentShader:`

		// FXAA algorithm from NVIDIA, C# implementation by Jasper Flick, GLSL port by Dave Hoskins
		// http://developer.download.nvidia.com/assets/gamedev/files/sdk/11/FXAA_WhitePaper.pdf
		// https://catlikecoding.com/unity/tutorials/advanced-rendering/fxaa/

		uniform sampler2D tDiffuse;
		uniform vec2 resolution;
		varying vec2 vUv;

		#define EDGE_STEP_COUNT 6
		#define EDGE_GUESS 8.0
		#define EDGE_STEPS 1.0, 1.5, 2.0, 2.0, 2.0, 4.0
		const float edgeSteps[EDGE_STEP_COUNT] = float[EDGE_STEP_COUNT]( EDGE_STEPS );

		float _ContrastThreshold = 0.0312;
		float _RelativeThreshold = 0.063;
		float _SubpixelBlending = 1.0;

		vec4 Sample( sampler2D  tex2D, vec2 uv ) {

			return texture( tex2D, uv );

		}

		float SampleLuminance( sampler2D tex2D, vec2 uv ) {

			return dot( Sample( tex2D, uv ).rgb, vec3( 0.3, 0.59, 0.11 ) );

		}

		float SampleLuminance( sampler2D tex2D, vec2 texSize, vec2 uv, float uOffset, float vOffset ) {

			uv += texSize * vec2(uOffset, vOffset);
			return SampleLuminance(tex2D, uv);

		}

		struct LuminanceData {

			float m, n, e, s, w;
			float ne, nw, se, sw;
			float highest, lowest, contrast;

		};

		LuminanceData SampleLuminanceNeighborhood( sampler2D tex2D, vec2 texSize, vec2 uv ) {

			LuminanceData l;
			l.m = SampleLuminance( tex2D, uv );
			l.n = SampleLuminance( tex2D, texSize, uv,  0.0,  1.0 );
			l.e = SampleLuminance( tex2D, texSize, uv,  1.0,  0.0 );
			l.s = SampleLuminance( tex2D, texSize, uv,  0.0, -1.0 );
			l.w = SampleLuminance( tex2D, texSize, uv, -1.0,  0.0 );

			l.ne = SampleLuminance( tex2D, texSize, uv,  1.0,  1.0 );
			l.nw = SampleLuminance( tex2D, texSize, uv, -1.0,  1.0 );
			l.se = SampleLuminance( tex2D, texSize, uv,  1.0, -1.0 );
			l.sw = SampleLuminance( tex2D, texSize, uv, -1.0, -1.0 );

			l.highest = max( max( max( max( l.n, l.e ), l.s ), l.w ), l.m );
			l.lowest = min( min( min( min( l.n, l.e ), l.s ), l.w ), l.m );
			l.contrast = l.highest - l.lowest;
			return l;

		}

		bool ShouldSkipPixel( LuminanceData l ) {

			float threshold = max( _ContrastThreshold, _RelativeThreshold * l.highest );
			return l.contrast < threshold;

		}

		float DeterminePixelBlendFactor( LuminanceData l ) {

			float f = 2.0 * ( l.n + l.e + l.s + l.w );
			f += l.ne + l.nw + l.se + l.sw;
			f *= 1.0 / 12.0;
			f = abs( f - l.m );
			f = clamp( f / l.contrast, 0.0, 1.0 );

			float blendFactor = smoothstep( 0.0, 1.0, f );
			return blendFactor * blendFactor * _SubpixelBlending;

		}

		struct EdgeData {

			bool isHorizontal;
			float pixelStep;
			float oppositeLuminance, gradient;

		};

		EdgeData DetermineEdge( vec2 texSize, LuminanceData l ) {

			EdgeData e;
			float horizontal =
				abs( l.n + l.s - 2.0 * l.m ) * 2.0 +
				abs( l.ne + l.se - 2.0 * l.e ) +
				abs( l.nw + l.sw - 2.0 * l.w );
			float vertical =
				abs( l.e + l.w - 2.0 * l.m ) * 2.0 +
				abs( l.ne + l.nw - 2.0 * l.n ) +
				abs( l.se + l.sw - 2.0 * l.s );
			e.isHorizontal = horizontal >= vertical;

			float pLuminance = e.isHorizontal ? l.n : l.e;
			float nLuminance = e.isHorizontal ? l.s : l.w;
			float pGradient = abs( pLuminance - l.m );
			float nGradient = abs( nLuminance - l.m );

			e.pixelStep = e.isHorizontal ? texSize.y : texSize.x;
			
			if (pGradient < nGradient) {

				e.pixelStep = -e.pixelStep;
				e.oppositeLuminance = nLuminance;
				e.gradient = nGradient;

			} else {

				e.oppositeLuminance = pLuminance;
				e.gradient = pGradient;

			}

			return e;

		}

		float DetermineEdgeBlendFactor( sampler2D  tex2D, vec2 texSize, LuminanceData l, EdgeData e, vec2 uv ) {

			vec2 uvEdge = uv;
			vec2 edgeStep;
			if (e.isHorizontal) {

				uvEdge.y += e.pixelStep * 0.5;
				edgeStep = vec2( texSize.x, 0.0 );

			} else {

				uvEdge.x += e.pixelStep * 0.5;
				edgeStep = vec2( 0.0, texSize.y );

			}

			float edgeLuminance = ( l.m + e.oppositeLuminance ) * 0.5;
			float gradientThreshold = e.gradient * 0.25;

			vec2 puv = uvEdge + edgeStep * edgeSteps[0];
			float pLuminanceDelta = SampleLuminance( tex2D, puv ) - edgeLuminance;
			bool pAtEnd = abs( pLuminanceDelta ) >= gradientThreshold;

			for ( int i = 1; i < EDGE_STEP_COUNT && !pAtEnd; i++ ) {

				puv += edgeStep * edgeSteps[i];
				pLuminanceDelta = SampleLuminance( tex2D, puv ) - edgeLuminance;
				pAtEnd = abs( pLuminanceDelta ) >= gradientThreshold;

			}

			if ( !pAtEnd ) {

				puv += edgeStep * EDGE_GUESS;

			}

			vec2 nuv = uvEdge - edgeStep * edgeSteps[0];
			float nLuminanceDelta = SampleLuminance( tex2D, nuv ) - edgeLuminance;
			bool nAtEnd = abs( nLuminanceDelta ) >= gradientThreshold;

			for ( int i = 1; i < EDGE_STEP_COUNT && !nAtEnd; i++ ) {

				nuv -= edgeStep * edgeSteps[i];
				nLuminanceDelta = SampleLuminance( tex2D, nuv ) - edgeLuminance;
				nAtEnd = abs( nLuminanceDelta ) >= gradientThreshold;

			}

			if ( !nAtEnd ) {

				nuv -= edgeStep * EDGE_GUESS;

			}

			float pDistance, nDistance;
			if ( e.isHorizontal ) {

				pDistance = puv.x - uv.x;
				nDistance = uv.x - nuv.x;

			} else {
				
				pDistance = puv.y - uv.y;
				nDistance = uv.y - nuv.y;

			}

			float shortestDistance;
			bool deltaSign;
			if ( pDistance <= nDistance ) {

				shortestDistance = pDistance;
				deltaSign = pLuminanceDelta >= 0.0;

			} else {

				shortestDistance = nDistance;
				deltaSign = nLuminanceDelta >= 0.0;

			}

			if ( deltaSign == ( l.m - edgeLuminance >= 0.0 ) ) {

				return 0.0;

			}

			return 0.5 - shortestDistance / ( pDistance + nDistance );

		}

		vec4 ApplyFXAA( sampler2D  tex2D, vec2 texSize, vec2 uv ) {

			LuminanceData luminance = SampleLuminanceNeighborhood( tex2D, texSize, uv );
			if ( ShouldSkipPixel( luminance ) ) {

				return Sample( tex2D, uv );

			}

			float pixelBlend = DeterminePixelBlendFactor( luminance );
			EdgeData edge = DetermineEdge( texSize, luminance );
			float edgeBlend = DetermineEdgeBlendFactor( tex2D, texSize, luminance, edge, uv );
			float finalBlend = max( pixelBlend, edgeBlend );

			if (edge.isHorizontal) {

				uv.y += edge.pixelStep * finalBlend;

			} else {

				uv.x += edge.pixelStep * finalBlend;

			}

			return Sample( tex2D, uv );

		}

		void main() {

			gl_FragColor = ApplyFXAA( tDiffuse, resolution.xy, vUv );
			
		}`},li=matchMedia("(pointer: coarse)").matches,Oi=document.getElementById("world"),At=new im({canvas:Oi,antialias:!0,powerPreference:li?"low-power":"high-performance",logarithmicDepthBuffer:!0});At.localClippingEnabled=!0;At.outputColorSpace=Ze;At.toneMapping=cu;At.toneMappingExposure=.9;const kt=new Xa,pe=new tn(50,1,.25,6e3);pe.rotation.order="YXZ";let Vr=!1,Fn;const gm=new Xa,zM=new Yr(-1,1,1,-1,0,1),Ni=new un({...BM,depthTest:!1,depthWrite:!1,toneMapped:!1}),lc=new Map,Fd=Array.from({length:12},()=>new tt),hr=new A,fr=new A;Ni.uniforms.regions={value:Fd};Ni.uniforms.regionCount={value:0};Ni.fragmentShader=`uniform vec4 regions[12]; uniform int regionCount;
`+Ni.fragmentShader.replace(/void\s+main\s*\(\s*\)\s*\{/,`void main(){
    bool actor=false;
    for(int i=0;i<12;i++){if(i>=regionCount) break;
      vec4 b=regions[i]; actor=actor || (all(greaterThanEqual(vUv,b.xy)) && all(lessThanEqual(vUv,b.zw)));}
    if(!actor) discard;`);gm.add(new j(new qt(2,2),Ni));function Pu(i,e,t){if(!Vr)return;lc.set(i,{radius:e,height:t});const n=()=>{lc.delete(i),i.removeEventListener("removed",n)};i.addEventListener("removed",n)}function HM(){let i=0;for(const[n,{radius:s,height:a}]of lc){if(!n.visible||!n.parent?.visible||i===Fd.length||(n.getWorldPosition(fr),hr.copy(fr).applyMatrix4(pe.matrixWorldInverse),hr.z>=-pe.near))continue;const r=Fd[i].set(1,1,0,0);for(const o of[-s,s])for(const c of[-s,s])for(const l of[-.05,a]){hr.set(fr.x+o,fr.y+l,fr.z+c).project(pe);const d=hr.x*.5+.5,u=hr.y*.5+.5;r.x=Math.min(r.x,d),r.y=Math.min(r.y,u),r.z=Math.max(r.z,d),r.w=Math.max(r.w,u)}r.z>0&&r.w>0&&r.x<1&&r.y<1&&i++}if(!i)return;Ni.uniforms.regionCount.value=i;const{width:e,height:t}=Oi;(!Fn||Fn.image.width!==e||Fn.image.height!==t)&&(Fn?.dispose(),Fn=new u1(e,t),Fn.minFilter=Fn.magFilter=Qt,Ni.uniforms.tDiffuse.value=Fn,Ni.uniforms.resolution.value.set(1/e,1/t)),At.copyFramebufferToTexture(Fn),At.autoClear=!1;try{At.render(gm,zM)}finally{At.autoClear=!0}}function GM(){const i=X.settings.quality,e=devicePixelRatio||1;return i==="low"?Math.min(e,1):i==="high"?Math.min(e,2):li&&Vr?Math.min(e,2,Math.max(1,Math.sqrt(125e4/(innerWidth*innerHeight)))):Math.min(e,li?1.25:1.75)}function Cc(){const i=innerWidth,e=innerHeight,t=GM();Oi.width===Math.floor(i*t)&&Oi.height===Math.floor(e*t)&&pe.aspect===i/e||(At.setDrawingBufferSize(i,e,t),pe.aspect=i/e,pe.updateProjectionMatrix())}addEventListener("resize",Cc);Cc();Ge("location:loading",({id:i})=>{lc.clear(),Vr=i==="museum"||i==="police",!Vr&&Fn&&(Fn.dispose(),Fn=null,Ni.uniforms.tDiffuse.value=null),Cc()});Ge("settings:applied",Cc);const bm=new iM;bm.setMeshoptDecoder(OM);const la=new Map;function On(i,e){return la.has(i)||la.set(i,new Promise((t,n)=>bm.load("./"+i,s=>{const a=Math.min(4,At.capabilities.getMaxAnisotropy());s.scene.traverse(r=>{for(const o of[].concat(r.material||[]))if(o.map&&(o.map.anisotropy=a),i.includes("assets/city/traffic/")&&o.isMeshPhysicalMaterial&&!o.userData.streetCoat&&(o.clearcoatRoughness=Math.max(.4,o.clearcoatRoughness),o.onBeforeCompile=c=>{c.fragmentShader=c.fragmentShader.replace("#include <roughnessmap_fragment>",`#include <roughnessmap_fragment>
roughnessFactor=max(.33,roughnessFactor);`)},o.userData.streetCoat=!0),o.name==="Passenger hall baked floor"&&(o.toneMapped=!1),li&&o.transmission>0){const c=Math.max(.22,1-o.transmission);o.transmission=0,o.transparent=!0,o.opacity=c,o.depthWrite=!1}}),t(s)},s=>e&&s.total&&e(s.loaded/s.total),s=>{la.delete(i);const a=s?.message||(s?.target?.status?`HTTP ${s.target.status}`:"network or decode error");n(new Error(`Could not load ${i} (${a})`))}))),la.get(i)}function zf(i,e){const t=la.get(i);t&&(la.delete(i),t.then(n=>n.scene.traverse(s=>{if(s.isMesh){s.geometry?.dispose();for(const a of[].concat(s.material||[])){e?.(a);for(const r of Object.values(a))r&&r.isTexture&&r.dispose();a.dispose()}}})).catch(()=>{}))}const xa=new um(12572415,4864556,1),di=new cc(16773596,2.2),Ud=new W1(16777215,0);kt.add(xa,di,di.target,Ud);const $r=new Rc;$r.scale.setScalar(4500);const Fa=$r.material.uniforms;Fa.turbidity.value=6;Fa.rayleigh.value=1.6;Fa.mieCoefficient.value=.005;Fa.mieDirectionalG.value=.8;kt.add($r);const Ls=new j(new si(4e3,32,16),new un({uniforms:{horizon:{value:new De},zenith:{value:new De(461592)},k:{value:0}},vertexShader:"varying vec3 vDir; void main() { vDir = normalize(position); gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0); }",fragmentShader:`uniform vec3 horizon; uniform vec3 zenith; uniform float k; varying vec3 vDir;
    float h(vec3 p) { return fract(sin(dot(p, vec3(12.9898, 78.233, 37.719))) * 43758.5453); }
    void main() {
      float y = clamp(vDir.y, 0.0, 1.0);
      vec3 c = mix(horizon, zenith, pow(y, 0.55));
      vec3 cell = floor(vDir * 420.0); float s = h(cell);
      c += vec3(0.75, 0.8, 1.0) * step(0.9975, s) * smoothstep(0.05, 0.3, y) * (0.5 + 0.5 * h(cell + 7.0));
      gl_FragColor = vec4(c, k);
      #include <colorspace_fragment>
    }`,side:Gt,transparent:!0,depthWrite:!1,fog:!1}));Ls.renderOrder=-1;Ls.frustumCulled=!1;kt.add(Ls);kt.fog=new Hr(12109528,400,2600);const Io=[{h:0,haze:1844280,sky:725024,fog:1712694,hemi:.75,amb:8228804,moon:.55,sun:0,exp:1.2,sunCol:10466559},{h:5.5,haze:3947096,sky:2761792,fog:3814736,hemi:.7,amb:10130112,moon:.35,sun:.2,exp:1.1,sunCol:16756874},{h:7,haze:12104896,sky:16762266,fog:14205616,hemi:.75,amb:16762266,moon:0,sun:1.4,exp:.9,sunCol:16765608},{h:12,haze:11189718,sky:12572415,fog:12372960,hemi:1,amb:12572415,moon:0,sun:2.4,exp:.85,sunCol:16774374},{h:17,haze:11056326,sky:16764830,fog:14270632,hemi:.85,amb:16764830,moon:0,sun:1.8,exp:.9,sunCol:16762512},{h:19,haze:6183032,sky:8149642,fog:6048364,hemi:.7,amb:11571392,moon:.1,sun:.4,exp:1.05,sunCol:16747114},{h:20.5,haze:2041410,sky:1317427,fog:1975616,hemi:.75,amb:8425672,moon:.5,sun:0,exp:1.2,sunCol:10466559},{h:24,haze:1844280,sky:725024,fog:1712694,hemi:.75,amb:8228804,moon:.55,sun:0,exp:1.2,sunCol:10466559}],VM=new De,WM=new De,Od={value:new De(11056326)},ko=(i,e,t,n)=>n.copy(VM.setHex(i)).lerp(WM.setHex(e),t),ln={hour:10,mode:"city",night:0},Lu=new Set,dc=i=>Lu.delete(i);function Hf(i){i.traverse(e=>{if(e.isMesh)for(const t of[].concat(e.material))t.emissive&&t.emissiveIntensity>0&&!t.userData.night&&(t.userData.night=t.emissiveIntensity,Lu.add(t))})}let qM=null;const Gf=()=>qM??(qM=new Rd(At).fromScene(new nM,.04).texture);let vm=1;function jM(i={}){vm=i.exposureScale??1,ln.mode=i.sky==="interior"?"interior":"city",$r.visible=Ls.visible=ln.mode==="city",ln.mode==="interior"?(kt.background=new De(i.background??789778),kt.fog=i.fog===!1?null:new Hr(i.background??789778,i.fogNear??20,i.fogFar??80),xa.intensity=i.hemi??.9,xa.color.setHex(16773344),xa.groundColor.setHex(2761760),di.intensity=i.key??1.2,di.position.set(4,10,6),di.target.position.set(0,0,0),di.color.setHex(16769728),Ud.intensity=i.ambient??.25,At.toneMappingExposure=i.exposure??1,kt.environment=i.reflections===0?null:Gf(),kt.environmentIntensity=i.reflections??.35):(kt.environment=Gf(),kt.environmentIntensity=i.reflections??.65,kt.background=null,kt.fog=kt.fog||new Hr(12109528,400,2600),kt.fog.near=i.fogNear??400,kt.fog.far=i.fogFar??2600,Ud.intensity=i.fill??0)}const XM=new A,YM=new A;function KM(i,e){const t=X.save.evidence.filter(p=>/^e[1-4]_/.test(p)).length;if(ln.hour=X.save.visited.includes("rooftop")?18:10+t*1.5+(X.save.flags.met_officer?1:0),ln.mode!=="city")return;const n=ln.hour;let s=0;for(;s<Io.length-2&&Io[s+1].h<=n;)s++;const a=Io[s],r=Io[s+1],o=(n-a.h)/(r.h-a.h),c=(p,v)=>p+(v-p)*o,l=Math.sin((n-6)/12*Math.PI)*62,d=gt.degToRad(110+n/24*180),u=gt.degToRad(90-l),h=XM.setFromSphericalCoords(1,u,d);Fa.sunPosition.value.copy(h);const f=Math.max(0,c(a.moon,r.moon)),g=Math.max(0,c(a.sun,r.sun)),b=l<0?YM.set(-h.x,Math.max(.35,-h.y),-h.z).normalize():h;di.position.copy(e).addScaledVector(b,300),di.target.position.copy(e),di.intensity=Math.max(g,f),ko(a.sunCol,r.sunCol,o,di.color),xa.intensity=c(a.hemi,r.hemi),ko(a.amb,r.amb,o,xa.color),ko(a.fog,r.fog,o,kt.fog.color),ko(a.haze,r.haze,o,Od.value),At.toneMappingExposure=c(a.exp,r.exp)*vm;const m=ln.night=gt.clamp((.6-g)/.6,0,1);for(const p of Lu)p.emissiveIntensity=p.userData.night*(.6+m*1.8);Fa.rayleigh.value=.8+m*2.5,Ls.position.copy(pe.position),$r.position.copy(pe.position),Ls.material.uniforms.k.value=gt.smoothstep(m,.35,.9),Ls.material.uniforms.horizon.value.copy(Od.value)}const $M=()=>{const i=Math.floor(ln.hour),e=Math.floor(ln.hour%1*60);return`${(i+11)%12+1}:${String(e).padStart(2,"0")} ${i<12?"AM":"PM"}`},Bd=new Set;let xm;function JM(i){xm=i}const Cn=i=>(Bd.add(i),()=>Bd.delete(i)),_m=new j1;let Du=!0;const ym=new A;function Mm(){Iu=performance.now()}let Vf=-1/0,Iu=performance.now();for(const i of["pointerdown","pointermove","wheel","keydown"])window.addEventListener(i,()=>{Iu=performance.now()},{passive:!0});function ku(i){if(!Du)return;requestAnimationFrame(ku);const n=1e3/(li&&i-Iu>3500?document.body.classList.contains("panel-open")?6:15:X.settings.quality==="low"?24:li?30:60);if(X.paused||document.hidden||i-Vf<n-.5)return;Vf=i;const s=li&&innerHeight<=520&&innerWidth>innerHeight&&document.body.classList.contains("in-dialogue");s&&(!pe.view?.enabled||pe.view.fullWidth!==innerWidth||pe.view.fullHeight!==innerHeight)?pe.setViewOffset(innerWidth,innerHeight,innerWidth*.19,0,innerWidth,innerHeight):!s&&pe.view?.enabled&&pe.clearViewOffset();const a=Math.min(_m.getDelta(),.1);for(const r of Bd)r(a);KM(a,ym),!document.querySelector(".screen.title, .screen.select, .screen.credits, .roof-sunset, .cine.on:not(.see3d)")&&(At.render(kt,pe),xm?.(),Vr&&li&&X.settings.quality!=="low"&&HM())}requestAnimationFrame(ku);document.addEventListener("visibilitychange",()=>{document.hidden||_m.getDelta()});Oi.addEventListener("webglcontextlost",i=>{i.preventDefault(),Du=!1,Re("gl:lost")});Oi.addEventListener("webglcontextrestored",()=>{Du=!0,requestAnimationFrame(ku)});function Tn(i,e){const n=(K.locations[X.save.location]?.tutorial||[]).find(s=>!X.save.flags["tut:"+s.id]);return n?Et(n.when)?i==="move"?!!n.route?.includes(e):i==="marker"?n.marker===e:n.done===i||!!n.allow?.includes(i):!1:!0}const na=new A,ie={base:{yaw:0,pitch:0},look:{yaw:0,pitch:0},target:{yaw:0,pitch:0},yawRange:70,pitchRange:30,fov:45,baseFov:45,minFov:22,maxFov:60,travel:null,locked:!1},Ua=ie,Ds=gt.degToRad;function Sm(i,e){return na.subVectors(e,i),{yaw:Math.atan2(-na.x,-na.z),pitch:Math.atan2(na.y,Math.hypot(na.x,na.z))}}function Oa(i,{instant:e=!1,duration:t=1.6,walk:n=null,maxWalkLength:s=3}={}){i.portrait&&pe.aspect<.9&&(i={...i,...i.portrait});const a=new A().fromArray(i.position),r=new A().fromArray(i.target),o=Sm(a,r);ie.turnCenter=i.turnCenter==null?null:Ds(i.turnCenter)-o.yaw,ie.yawRange=Math.min(85,i.yawRange??70),ie.pitchRange=Math.min(23,i.pitchRange??23),ie.baseFov=i.fov??45,ie.minFov=Math.max(14,ie.baseFov*.5),ie.maxFov=Math.max(ie.baseFov,Math.min(62,ie.baseFov*1.12)),ym.copy(r);const c=!n&&(matchMedia("(pointer: coarse)").matches||pe.position.distanceTo(a)>6),l=n&&[pe.position.clone(),...n.map(g=>new A(...g)),a],d=l?.reduce((g,b,m)=>m?g+b.distanceTo(l[m-1]):0,0);if(e||X.settings.reducedMotion||c||n&&(d>s||d<.005))return ie.travel&&ie.travel.res(),ie.travel=null,pe.position.copy(a),ie.base=o,ie.look={yaw:0,pitch:0},ie.target={yaw:0,pitch:0},ie.fov=ie.baseFov,zd(),Promise.resolve();const u=pe.position.clone(),h={yaw:ie.base.yaw+ie.look.yaw,pitch:ie.base.pitch+ie.look.pitch};if(ie.travel&&ie.travel.res(),l){const g=new A1;for(let b=1;b<l.length;b++)l[b].equals(l[b-1])||g.add(new Dd(l[b-1],l[b]));return new Promise(b=>{ie.travel={curve:g,started:performance.now(),t:0,dur:.4+.15*d,fromAim:h,toAim:o,fromFov:ie.fov,res:b}})}const f=new Dd(u,a);return new Promise(g=>{ie.travel={curve:f,t:0,dur:t,fromAim:h,toAim:o,fromFov:ie.fov,res:g}})}const QM=i=>i<.5?4*i*i*i:1-Math.pow(-2*i+2,3)/2,ZM=(i,e,t)=>{let n=e-i;for(;n>Math.PI;)n-=2*Math.PI;for(;n<-Math.PI;)n+=2*Math.PI;return i+n*t};function zd(){pe.rotation.set(ie.base.pitch+ie.look.pitch,ie.base.yaw+ie.look.yaw,0),Math.abs(pe.fov-ie.fov)>.01&&(pe.fov=ie.fov,pe.updateProjectionMatrix())}Cn(i=>{if(ie.travel){Mm();const e=ie.travel,t=e.started==null?e.t+i/e.dur:(performance.now()-e.started)/(1e3*e.dur);e.t=Math.min(1,t);const n=QM(e.t);pe.position.copy(e.curve.getPoint(n)),ie.base={yaw:ZM(e.fromAim.yaw,e.toAim.yaw,n),pitch:gt.lerp(e.fromAim.pitch,e.toAim.pitch,n)},ie.look={yaw:0,pitch:0},ie.target={yaw:0,pitch:0},ie.fov=e.fromFov+(ie.baseFov-e.fromFov)*n,zd(),e.t>=1&&(ie.travel=null,e.res(),Re("camera:arrived"));return}ie.target.yaw=Nu(ie.target.yaw),ie.look.yaw=ie.target.yaw,ie.look.pitch=ie.target.pitch,zd()});function Nu(i){if(ie.turnCenter!=null){const n=Ds(ie.yawRange);return gt.clamp(i,ie.turnCenter-n,ie.turnCenter+n)}const e=Math.atan(Math.tan(Ds(ie.fov)/2)*pe.aspect),t=Math.min(Ds(ie.yawRange),Math.max(0,Math.PI/2-e));return gt.clamp(i,-t,t)}function wm(i,e){if(ie.locked||ie.travel||!Tn("tutorial:looked"))return;const t=X.settings.lookSensitivity*(ie.fov/50)*.0024,n=X.settings.invertY?-1:1,s=Ds(ie.pitchRange),a=ie.target.yaw,r=ie.target.pitch;ie.target.yaw=Nu(ie.target.yaw+i*t),ie.target.pitch=gt.clamp(ie.target.pitch+e*t*n,-s,s),Cl+=Math.abs(ie.target.yaw-a)+Math.abs(ie.target.pitch-r),Cl>.16&&(Cl=0,Re("tutorial:looked"))}function Wr(i){ie.locked||ie.travel||!Tn("tutorial:zoomed")||(ie.fov=gt.clamp(ie.fov*i,ie.minFov,ie.maxFov),i<1&&ie.fov<ie.baseFov*.94&&Re("tutorial:zoomed"))}function Em(i,{fov:e,lift:t=0}={}){if(ie.travel)return;const n=Sm(pe.position,i),s=r=>{for(;r>Math.PI;)r-=2*Math.PI;for(;r<-Math.PI;)r+=2*Math.PI;return r},a=Ds(ie.pitchRange);ie.target.yaw=Nu(s(n.yaw-ie.base.yaw)),ie.target.pitch=gt.clamp(n.pitch-ie.base.pitch-t*Ds(e?gt.clamp(e,ie.minFov,ie.maxFov):ie.fov),-a,a),e&&(ie.fov=gt.clamp(e,ie.minFov,ie.maxFov))}const _s=new tn,No=new A;function eS(i){return _s.position.copy(pe.position),_s.rotation.set(ie.base.pitch+ie.target.pitch,ie.base.yaw+ie.target.yaw,0,pe.rotation.order),_s.fov=ie.fov,_s.aspect=pe.aspect,_s.updateProjectionMatrix(),_s.updateMatrixWorld(),No.fromArray(i).project(_s),Math.abs(No.x)<.85&&Math.abs(No.y)<.75&&Math.abs(No.z)<1}function Tm(){ie.target={yaw:0,pitch:0},ie.fov=ie.baseFov}function uc(i){ie.locked=i}let Cl=0;const ks=new Map;let Pr=0,hc=0;function tS(i){ks.set(i.pointerId,{x:i.clientX,y:i.clientY}),hc=0,(i.target.closest(".marker")||Oi).setPointerCapture(i.pointerId),ks.size===2&&(Pr=Fu())}function nS(i){const e=ks.get(i.pointerId);if(!e)return;const t=i.clientX-e.x,n=i.clientY-e.y;if(e.x=i.clientX,e.y=i.clientY,ks.size===2){const s=Fu();Pr&&Wr(Pr/s),Pr=s,hc+=10;return}hc+=Math.abs(t)+Math.abs(n),wm(t,n)}const Wf=i=>{ks.delete(i.pointerId),Pr=ks.size===2?Fu():0};for(const i of[Oi,document.getElementById("markers")])i.addEventListener("pointerdown",tS),i.addEventListener("pointermove",nS),i.addEventListener("pointerup",Wf),i.addEventListener("pointercancel",Wf),i.addEventListener("wheel",e=>{e.preventDefault(),Wr(e.deltaY>0?1.08:1/1.08)},{passive:!1});function Fu(){const[i,e]=[...ks.values()];return Math.hypot(i.x-e.x,i.y-e.y)||1}const Am=()=>hc,Un=new Set;addEventListener("keydown",i=>{i.target.closest&&i.target.closest("input,textarea,select")||(["ArrowLeft","ArrowRight","ArrowUp","ArrowDown","a","d","w","s"].includes(i.key)&&Un.add(i.key),(i.key==="+"||i.key==="=")&&Wr(1/1.1),i.key==="-"&&Wr(1.1))});addEventListener("keyup",i=>Un.delete(i.key));addEventListener("blur",()=>Un.clear());Cn(i=>{if(!Un.size)return;const e=420*i;let t=0,n=0;(Un.has("ArrowLeft")||Un.has("a"))&&(t-=e),(Un.has("ArrowRight")||Un.has("d"))&&(t+=e),(Un.has("ArrowUp")||Un.has("w"))&&(n-=e),(Un.has("ArrowDown")||Un.has("s"))&&(n+=e),wm(-t,-n)});const Rm=`float studioElevation(vec3 p) {
  float width=1.-smoothstep(9.6,10.4,abs(p.x-330.));
  return width*smoothstep(.36,.62,p.y)*smoothstep(-187.,-184.,p.z)*(1.-smoothstep(-164.,-162.,p.z));
}`;function iS(i){const e={};for(const l of["A","B"])for(const[d,u]of Object.entries({photo:null,depth:null,detail:null,hasDetail:!1,fill:0,eye:new A,heading:0,crop:new tt(1,1,0,0)}))e[d+l]={value:u};const t=new Map,n=new Map;let s=!1;const a=["A","B"].map(l=>`
    uniform sampler2D photo${l}, depth${l}, detail${l};
    uniform bool hasDetail${l};
    uniform vec3 eye${l};
    uniform float heading${l},fill${l};
    uniform vec4 crop${l};
  `).join(`
`),r=`${Rm}

    float aggregate(vec2 p) {
      vec2 id=floor(p), f=fract(p);f=f*f*(3.-2.*f);
      vec4 cells=vec4(dot(id,vec2(127.1,311.7)))+vec4(0.,127.1,311.7,438.8);
      vec4 n=fract(sin(cells)*43758.5453);
      return mix(mix(n.x,n.y,f.x),mix(n.z,n.w,f.x),f.y)-.5;
    }
    vec4 streetSurface(sampler2D photo,sampler2D depth,sampler2D detail,bool hasDetail,vec3 eye,float heading,float fill,vec4 crop,out vec3 bounce) {
      vec3 ray=streetPoint-eye;
      float dist=max(length(ray),.001);
      vec3 d=ray/dist;
      vec2 uv=vec2(fract(.5+(atan(d.x,-d.z)-heading)/(2.*PI)),.5+asin(clamp(d.y,-1.,1.))/PI);
      vec2 cm=texture2D(depth,uv).rg*255.;
      float measured=(cm.x*256.+cm.y)*.01;
      float tolerance=clamp(dist*.022,.13,1.8);
      float confidence=1.-smoothstep(tolerance,2.*tolerance,abs(measured-dist));
      vec2 at=uv*crop.xy+crop.zw;
      confidence*=float(all(greaterThanEqual(at,vec2(0.))) && all(lessThanEqual(at,vec2(1.))));
      vec2 dx=dFdx(at),dy=dFdy(at);
      dx.x-=round(dx.x/crop.x)*crop.x;dy.x-=round(dy.x/crop.x)*crop.x;
      // Keep low-frequency photographed illumination separate from sharp
      // contours; door hardware and lettering have their own geometry.
      bounce=textureLod(photo,at,3.).rgb;
      vec3 rgb=textureGrad(photo,at,dx,dy).rgb;
      if (hasDetail) {
        vec2 size=vec2(.24,.26);
        vec2 inset=(uv-vec2(.36,.42))/size;
        float edge=min(min(inset.x,inset.y),min(1.-inset.x,1.-inset.y));
        vec3 ink=textureGrad(detail,clamp(inset,0.,1.),dx/(crop.xy*size),dy/(crop.xy*size)).rgb;
        rgb=mix(rgb,ink,studioElevation(streetPoint)*smoothstep(0.,.035,edge));
      }
      rgb+=fill*sqrt(max(rgb,vec3(0.)))*(1.-clamp(rgb,0.,1.));
      return vec4(rgb,confidence);
    }`;function o(l){if(!l||l.transparent||l.alphaTest||!l.isMeshStandardMaterial)return l;if(n.has(l))return n.get(l);const d=l.clone();return d.onBeforeCompile=u=>{Object.assign(u.uniforms,e),u.vertexShader=`varying vec3 streetPoint;
`+u.vertexShader.replace("#include <project_vertex>",`
        #include <project_vertex>
        vec4 streetLocal=vec4(transformed,1.);
        #ifdef USE_INSTANCING
          streetLocal=instanceMatrix*streetLocal;
        #endif
        streetPoint=(modelMatrix*streetLocal).xyz;`),u.fragmentShader=u.fragmentShader.replace("void main() {",`varying vec3 streetPoint;
`+a+r+`
void main() {`).replace("#include <colorspace_fragment>",`
        vec3 bounceA,bounceB;
        vec4 a=streetSurface(photoA,depthA,detailA,hasDetailA,eyeA,headingA,fillA,cropA,bounceA);
        vec4 b=streetSurface(photoB,depthB,detailB,hasDetailB,eyeB,headingB,fillB,cropB,bounceB);
        float t=clamp(dot(cameraPosition-eyeA,eyeB-eyeA)/max(.001,dot(eyeB-eyeA,eyeB-eyeA)),0.,1.);
        vec2 weight=vec2(1.-t,t)*vec2(a.a,b.a);
        vec3 finish=(a.rgb*weight.x+b.rgb*weight.y)/max(.001,weight.x+weight.y);
        vec3 faceNormal=normalize(cross(dFdx(streetPoint),dFdy(streetPoint)));
        bool ground=streetPoint.y<.85;
        if (ground) {
          // Pavement immediately below a passing camera is seen edge-on in both
          // endpoint photos. Keep road markings on their original geometry.
          vec3 base=gl_FragColor.rgb;
          float luma=dot(base,vec3(.2126,.7152,.0722));
          float chroma=max(base.r,max(base.g,base.b))-min(base.r,min(base.g,base.b));
          if(abs(faceNormal.y)>.8 && chroma<.15 && luma>.012 && luma<.73) {
            // Sample broad pavement illumination in the two registered views.
            // The kerb and road paint still come from the physical geometry.
            vec3 reflected=mix(bounceA,bounceB,t);
            float sourceLuma=dot(reflected,vec3(.2126,.7152,.0722));
            base*=clamp(sourceLuma/max(.025,luma),.46,1.14);
          }
          if(abs(faceNormal.y)>.8 && luma>.17 && luma<.70 && chroma<.13) {
            vec2 cell=vec2(streetPoint.x+floor(streetPoint.z/.58)*.58,streetPoint.z)/vec2(1.16,.58);
            vec2 dist=abs(fract(cell+.5)-.5)/max(fwidth(cell),vec2(.00001));
            base*=.80+.20*smoothstep(.1,1.25,min(dist.x,dist.y));
          }
          // Aggregate is fixed in world metres and fades below a pixel. Use
          // broad asphalt patches and fine stone grain without shimmering.
          if(chroma<.15 && luma>.012 && luma<.75) {
            float footprint=max(length(dFdx(streetPoint.xz)),length(dFdy(streetPoint.xz)));
            float grain=aggregate(streetPoint.xz*22.)*(1.-smoothstep(.015,.065,footprint));
            float patches=aggregate(streetPoint.xz*.68);
            base*=1.+.18*grain+.12*patches;
          }
          gl_FragColor.rgb=base;
        } else {
          // The player passes close enough to resolve the actual door frames
          // and letter meshes. Projecting a photographed edge over that
          // physical edge produces doubled lines even at a small depth error.
          float distanceToPlayer=length(streetPoint-cameraPosition);
          float farDetail=smoothstep(17.,29.,distanceToPlayer);
          vec3 base=gl_FragColor.rgb;
          vec3 bounce=mix(bounceA,bounceB,t);
          float coverage=clamp(weight.x+weight.y,0.,1.);
          float lightRatio=dot(bounce,vec3(.2126,.7152,.0722))/max(.023,dot(base,vec3(.2126,.7152,.0722)));
          vec3 illuminated=base*clamp(lightRatio,.49,1.18);
          base=mix(illuminated,bounce,.21*coverage*(1.-farDetail));
          gl_FragColor.rgb=mix(base,finish,farDetail*coverage);
        }
        // Converge to the photograph continuously during the final stride.
        // At the exact registered eye it is the same colour as the resting
        // panorama, including shadows across the pavement and station facade.
        vec2 remaining=vec2(length(cameraPosition-eyeA),length(cameraPosition-eyeB));
        float distanceToStop=min(remaining.x,remaining.y);
        if (distanceToStop<2.) {
          vec3 registered=remaining.x<remaining.y ? a.rgb : b.rgb;
          gl_FragColor.rgb=mix(gl_FragColor.rgb,registered,1.-smoothstep(.02,2.,distanceToStop));
        }
        #include <colorspace_fragment>`)},n.set(l,d),d}function c(l){if(s!==l){if(s=l,!l){for(const[d,u]of t)d.material=u;t.clear();return}i.traverse(d=>{d.isMesh&&(t.set(d,d.material),d.material=Array.isArray(d.material)?d.material.map(o):o(d.material))})}}return{show:c,endpoints(l,d){if(l=l?.depth?l:d,d=d?.depth?d:l,!l?.depth||!d?.depth)return!1;for(const[u,h]of[["A",l],["B",d]])e["photo"+u].value=h.texture,e["depth"+u].value=h.depth,e["detail"+u].value=h.detail||h.texture,e["hasDetail"+u].value=!!h.detail,e["eye"+u].value=h.stop.at,e["heading"+u].value=h.stop.heading,e["fill"+u].value=h.stop.shadowFill||0,e["crop"+u].value=h.crop;return!0},dispose(){c(!1);for(const l of n.values())l.dispose()}}}let Pl;function sS(i,e){const t=new Ja,n=new Ue;n.name="Printed storefront signs",n.userData.distantScenery=!0,i.add(n);const s=new Map;let a=0,r=null,o=!1;const c="./assets/city/street-print/";Pl??(Pl=fetch(c+"faces.json").then(d=>{if(!d.ok)throw Error(d.status);return d.json()}).catch(d=>(Pl=null,console.warn("Street sign register unavailable",d),{})));function l(){for(const d of n.children)d.geometry.dispose(),d.material.dispose();n.clear()}return{async show(d,u){if(n.visible=u,!u||r===d)return;r=d;const h=++a;l();const f=await Pl;for(const g of f?.[e]?.[d]||[]){if(o||h!==a)return;s.has(g.art)||s.set(g.art,t.loadAsync(c+g.art).then(x=>o?(x.dispose(),null):(x.colorSpace=Ze,x.anisotropy=4,x)).catch(x=>(console.warn("Street sign unavailable",g.art,x),null)));const b=await s.get(g.art);if(!b||o||h!==a)continue;const m=new Yt;m.setAttribute("position",new Tt(g.vertices.flatMap(x=>x.slice(0,3)),3)),m.setAttribute("uv",new Tt(g.vertices.flatMap(x=>x.slice(3)),2)),m.setIndex(g.faces);const p=new _t({map:b,color:14341838,toneMapped:!1}),v=new j(m,p);v.name="Printed "+g.art,v.raycast=()=>{},n.add(v)}},dispose(){o=!0,a++,l();for(const d of s.values())d.then(u=>u?.dispose());s.clear(),n.removeFromParent()}}}const aS=new Ja,qf=4096;async function Uu(i){if(li&&self.createImageBitmap)try{const e=await fetch(i);if(!e.ok)throw new Error(e.status);const t=await e.blob(),n=await createImageBitmap(t),{width:s,height:a}=n;if(n.close(),s>5120){const r=await createImageBitmap(t,{imageOrientation:"flipY",premultiplyAlpha:"none",colorSpaceConversion:"none",resizeWidth:qf,resizeHeight:Math.round(a*qf/s),resizeQuality:"high"}),o=new Ft(r);return o.flipY=!1,o.needsUpdate=!0,o}}catch(e){console.warn("Loading the full panorama",i,e)}return aS.loadAsync(i)}const Pc=`vec4 samplePanorama(sampler2D image, vec2 uv) {
  vec2 dx=dFdx(uv), dy=dFdy(uv);
  dx.x-=floor(dx.x+.5);
  dy.x-=floor(dy.x+.5);
  return textureGrad(image,uv,dx,dy);
}`;function rS(i,e,t,n=[],s){const a=t.filter(P=>P.scenery).map(P=>({...P.scenery,id:P.id,at:new A(...P.camera.position),heading:P.scenery.heading??Math.atan2(P.camera.target[0]-P.camera.position[0],P.camera.position[2]-P.camera.target[2])}));if(!a.length)return null;const r=new un({uniforms:{twoRowDetail:{value:!1},writeSurfaceDepth:{value:!1},viewEye:{value:new A},detailImage:{value:null},hasDetail:{value:!1},eyeOffset:{value:new A},farOnly:{value:!1},distanceMap:{value:null},shadowFill:{value:0},panorama:{value:null},heading:{value:0},crop:{value:new tt(1,1,0,0)}},vertexShader:`varying vec3 direction;
      #include <common>
      #include <logdepthbuf_pars_vertex>
      void main() {
        direction = position;
        gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.);
        #include <logdepthbuf_vertex>
      }`,fragmentShader:`varying vec3 direction; uniform sampler2D panorama,detailImage; uniform bool hasDetail,writeSurfaceDepth,twoRowDetail; uniform vec3 viewEye; uniform float shadowFill; uniform vec3 eyeOffset; uniform bool farOnly; uniform sampler2D distanceMap; uniform float heading; uniform vec4 crop;
      #include <common>
      #include <logdepthbuf_pars_fragment>
      ${Pc}
      ${Rm}
      void main() {
        #include <logdepthbuf_fragment>
        vec3 d = normalize(direction);
        float u = fract(.5 + (atan(d.x, -d.z) - heading) / (2.*PI));
        vec2 uv = vec2(u, .5 + asin(clamp(d.y,-1.,1.)) / PI);
        gl_FragColor = samplePanorama(panorama, clamp(uv*crop.xy+crop.zw,0.,1.));
        #ifdef USE_LOGDEPTHBUF
        if (writeSurfaceDepth) {
          // Actors and traffic share the photographed street. Store the
          // surveyed first surface in the same eye-depth convention as Three,
          // so a car on a side street cannot render through a shop window.
          vec2 rg=texture2D(distanceMap,uv).rg*255.;
          float radius=(rg.x*256.+rg.y)*.01;
          float bias=.12+.004*radius;
          float forward=max(.01,-(viewMatrix*vec4(d,0.)).z);
          gl_FragDepth=log2(1.+(radius+bias)*forward)*logDepthBufFC*.5;
        }
        #endif
        if (farOnly) {
          // Fill gaps beyond the local street crop from the photographed city.
          // Reproject into the endpoint camera, including the road beneath the
          // player. A uniform sky fill here would erase the entire far block.
          vec3 sourceRay=d;
          for (int i=0;i<3;i++) {
            vec2 cm=texture2D(distanceMap,uv).rg*255.;
            float radius=max(.05,(cm.x*256.+cm.y)*.01);
            float along=dot(eyeOffset,d);
            float disc=radius*radius-dot(eyeOffset,eyeOffset)+along*along;
            if(disc<=0.) break;
            sourceRay=normalize(eyeOffset+d*max(.01,sqrt(disc)-along));
            uv=vec2(fract(.5+(atan(sourceRay.x,-sourceRay.z)-heading)/(2.*PI)),
                    .5+asin(clamp(sourceRay.y,-1.,1.))/PI);
          }
          gl_FragColor=samplePanorama(panorama,clamp(uv*crop.xy+crop.zw,0.,1.));
          // The physical street crop supplies the near skyline. Use one
          // continuous sky behind it, retaining photographed distant towers.
          vec2 encoded=texture2D(distanceMap,uv).rg*255.;
          float range=(encoded.x*256.+encoded.y)*.01;
          float distantStructure=smoothstep(85.,150.,range)*(1.-smoothstep(610.,650.,range));
          float skyWeight=smoothstep(.015,.12,d.y)*(1.-distantStructure);
          vec3 sky=mix(vec3(.56,.64,.67),vec3(.13,.29,.48),smoothstep(-.02,.65,d.y));
          gl_FragColor.rgb=mix(gl_FragColor.rgb,sky,skyWeight);
        }
        if (!farOnly && hasDetail && twoRowDetail) {
          vec2 inset=(uv-vec2(.1875,.4375))/vec2(.5625,.21875);
          float edge=min(min(inset.x,inset.y),min(1.-inset.x,1.-inset.y));
          // First half is the top row in the encoded image. Keep gradients
          // continuous across the split to prevent a blurry mip on the seam.
          vec2 sheet=vec2(textureSize(detailImage,0));
          vec2 tile=vec2(sheet.x,sheet.y*.5)-16.;
          float right=step(.5,inset.x);
          vec2 px=vec2((inset.x*2.-right)*tile.x,inset.y*tile.y)+8.;
          px.y+=(1.-right)*sheet.y*.5;
          vec2 slope=tile*vec2(2.,1.)/sheet;
          vec3 blocks=textureGrad(detailImage,clamp(px/sheet,0.,1.),dFdx(inset)*slope,dFdy(inset)*slope).rgb;
          gl_FragColor.rgb=mix(gl_FragColor.rgb,blocks,smoothstep(0.,.025,edge));
        } else if (!farOnly && hasDetail) {
          vec2 inset=(uv-vec2(.36,.42))/vec2(.24,.26);
          float edge=min(min(inset.x,inset.y),min(1.-inset.x,1.-inset.y));
          vec3 detail=texture2D(detailImage,clamp(inset,0.,1.)).rgb;
          vec2 cm=texture2D(distanceMap,uv).rg*255.;
          vec3 hit=viewEye+d*((cm.x*256.+cm.y)*.01);
          // Localize the bounce-lit crop to the actual studio elevation; the
          // surrounding block and surveyed sidewalk retain their baked finish.
          gl_FragColor.rgb=mix(gl_FragColor.rgb,detail,studioElevation(hit)*smoothstep(0.,.035,edge));
        }
        gl_FragColor.rgb += shadowFill * sqrt(max(gl_FragColor.rgb,vec3(0.))) * (1. - clamp(gl_FragColor.rgb,0.,1.));
      #include <colorspace_fragment>
      }`,side:Gt,toneMapped:!1}),o=new j(new si(900,40,24),r);o.name="Fixed city view",o.visible=!1,o.userData.distantScenery=!0,i.add(o);const c=new _t({colorWrite:!1}),l=new mt(1,1,1),d=n.map(({center:P,size:B})=>{const H=new j(l,c);return H.position.fromArray(P),H.scale.fromArray(B),H.visible=!1,H.renderOrder=-1,H.raycast=()=>{},i.add(H),H});o.renderOrder=-2;let u=!1;s&&On("assets/city/traffic/street-furniture-depth.glb").then(({scene:P})=>{if(u)return;const B=P.getObjectByName(s);B&&(P.updateMatrixWorld(!0),B.traverse(H=>{if(!H.isMesh)return;const z=new j(H.geometry,c);z.matrix.copy(H.matrixWorld),z.matrixAutoUpdate=!1,z.renderOrder=-1,z.visible=!1,z.userData.distantScenery=!0,z.raycast=()=>{},d.push(z),i.add(z)}))}).catch(P=>console.warn("Street furniture depth unavailable",s,P));const h=s?sS(i,s):null;let f,g=!1;const b=a.some(P=>P.surfaceDepth)?iS(e):null;let m,p,v,x,y,D=0,T=!1;function R(P){P?.texture.dispose(),P?.depth?.dispose(),P?.detail?.dispose()}function I(){D++,b?.show(!1),R(p),R(v),p=v=y=null,o.visible=!1,e.visible=!0}async function _(P){const B=ln.hour>=P.lateHour?P.late:P.day,H=ke=>Uu("./"+ke),z=ke=>ke&&H(ke).catch(xe=>{console.warn("Using street photo without optional layer",ke,xe)}),[ee,V,oe]=await Promise.all([H(B).then(ke=>({texture:ke}),ke=>({error:ke})),z(P.surfaceDepth),z(P.detail&&(ln.hour>=P.lateHour?P.detail.late:P.detail.day))]);if(ee.error)throw V?.dispose(),oe?.dispose(),ee.error;const{texture:le}=ee;le.colorSpace=Ze,le.wrapS=Vn,V&&(V.generateMipmaps=!1,V.minFilter=V.magFilter=Zt),oe&&(oe.colorSpace=Ze);const _e=Math.abs(le.image.width/le.image.height-2)>.02;return{stop:P,texture:le,depth:V,detail:oe,crop:new tt(..._e?[1.5,32/26,-.25,-3/26]:[1,1,0,0])}}function M(P){const B=a.find(z=>z.id===P);if(m===P)return x;m=P;const H=++D;if(R(p),p=v,v=null,T=b?.endpoints(p,null),!B){x=null;return}return x=_(B).then(z=>H!==D?(R(z),!1):(v=z,T=b?.endpoints(p,v),!0)).catch(()=>console.warn("Using street geometry for",B.id)),x}function L(){const P=[v,p].find(z=>z&&z.stop.at.distanceToSquared(pe.position)<1e-6),B=!P&&T&&Ua.travel?[v,p].filter(z=>z?.depth).sort((z,ee)=>z.stop.at.distanceToSquared(pe.position)-ee.stop.at.distanceToSquared(pe.position))[0]:null,H=P||B;o.visible=!!H,r.uniforms.farOnly.value=!!B,r.uniforms.writeSurfaceDepth.value=!!P?.depth,y!==H&&H&&(r.uniforms.panorama.value=H.texture,r.uniforms.viewEye.value.copy(H.stop.at),r.uniforms.detailImage.value=H.detail||H.texture,r.uniforms.hasDetail.value=!!H.detail,r.uniforms.twoRowDetail.value=H.stop.detail?.layout==="twoRows",r.uniforms.distanceMap.value=H.depth||null,r.uniforms.heading.value=H.stop.heading,r.uniforms.shadowFill.value=H.stop.shadowFill??0,r.uniforms.crop.value.copy(H.crop)),H&&(o.position.copy(B?pe.position:H.stop.at),r.uniforms.eyeOffset.value.subVectors(pe.position,H.stop.at)),y=H,b?.show(!!(!P&&T&&Ua.travel)),P&&P===v&&p&&(R(p),p=null,T=b?.endpoints(v,v));for(const z of d)z.visible=!!P;h&&(g!==!!P||f!==P?.stop.id)&&(f=P?.stop.id,g=!!P,h.show(f,g)),e.visible=!P,e.userData.photoCollision=!!P}const k=Cn(L);return{prepare:M,sync:L,dispose(){u=!0,h?.dispose(),k(),I(),b?.dispose(),r.dispose(),o.geometry.dispose(),l.dispose(),c.dispose()}}}async function oS(i,e){const t=await new Ja().loadAsync("./"+e.image);t.colorSpace=Ze,t.wrapS=Vn;const n=new un({uniforms:{skyline:{value:t}},vertexShader:`varying vec3 direction;
      #include <common>
      #include <logdepthbuf_pars_vertex>
      void main() {
        direction = position;
        gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.);
        #include <logdepthbuf_vertex>
      }`,fragmentShader:`varying vec3 direction; uniform sampler2D skyline;
      #include <common>
      #include <logdepthbuf_pars_fragment>
      ${Pc}
      void main() {
        #include <logdepthbuf_fragment>
        vec3 d = normalize(direction);
        gl_FragColor = samplePanorama(skyline, vec2(.5 + atan(d.x,-d.z)/(2.*PI), .5 + asin(clamp(d.y,-1.,1.))/PI));
        #include <colorspace_fragment>
      }`,side:Gt,toneMapped:!1}),s=new j(new si(e.radius,64,32),n);s.name="View from "+i.name,s.position.fromArray(e.origin),s.userData.distantScenery=!0,i.add(s);const a=Cn(()=>{s.visible=pe.position.distanceToSquared(s.position)<(e.radius*.76)**2});i.userData.releaseDistantView=()=>{a(),t.dispose(),n.dispose(),s.geometry.dispose()}}function cS(i,e){const t=new Map(e.filter(f=>f.finish).map(f=>[f.id,f]));if(!t.size)return;const n=[];i.traverse(f=>{f.isMesh&&f.userData.stageFinish&&!Array.isArray(f.material)&&!f.material.transparent&&!f.material.alphaTest&&!/floor|window|glazing|glass/i.test(f.material.name)&&n.push([f,f.material])});const s=new un({uniforms:{image:{value:null}},vertexShader:`varying vec3 ray;
      #include <common>
      #include <logdepthbuf_pars_vertex>
      void main(){
      vec4 local=vec4(position,1.);
      #ifdef USE_INSTANCING
        local=instanceMatrix*local;
      #endif
      vec4 world=modelMatrix*local;ray=world.xyz-cameraPosition;
      gl_Position=projectionMatrix*viewMatrix*world;
      #include <logdepthbuf_vertex>
      }`,fragmentShader:`varying vec3 ray; uniform sampler2D image;
      #include <common>
      #include <logdepthbuf_pars_fragment>
      ${Pc}
      void main(){
      #include <logdepthbuf_fragment>
      vec3 d=normalize(ray);gl_FragColor=samplePanorama(image,vec2(fract(.5+atan(d.x,-d.z)/(2.*PI)),.5+asin(clamp(d.y,-1.,1.))/PI));
      #include <colorspace_fragment>
      }`,toneMapped:!1}),a=new Map;for(const[f,g]of n){if(f.userData.stageFinish!=="light"||a.has(g))continue;const b=g.clone();b.onBeforeCompile=m=>{m.uniforms.roomLight=s.uniforms.image,m.vertexShader=`varying vec3 roomRay;
`+m.vertexShader.replace("#include <project_vertex>",`#include <project_vertex>
        vec4 roomPosition = vec4(transformed,1.);
        #ifdef USE_INSTANCING
          roomPosition = instanceMatrix * roomPosition;
        #endif
        roomRay = (modelMatrix * roomPosition).xyz-cameraPosition;`),m.fragmentShader=`varying vec3 roomRay; uniform sampler2D roomLight;
`+m.fragmentShader.replace("#include <opaque_fragment>",`vec3 viewRay=normalize(roomRay);
        vec2 roomUV=vec2(fract(.5+atan(viewRay.x,-viewRay.z)/(2.*PI)),.5+asin(clamp(viewRay.y,-1.,1.))/PI);
        vec3 illumination=textureLod(roomLight,roomUV,4.).rgb;
        outgoingLight *= .57+.66*sqrt(clamp(dot(illumination,vec3(.2126,.7152,.0722)),0.,1.));
        #include <opaque_fragment>`)},a.set(g,b)}const r=new A;let o=0,c=!1,l;function d(f){if(c!==f){c=f;for(const[g,b]of n)g.material=f?a.get(b)??s:b}}function u(){d(!1),s.uniforms.image.value?.dispose(),s.uniforms.image.value=null}const h=Cn(()=>d(!!s.uniforms.image.value&&r.distanceToSquared(pe.position)<1e-7));return{prepare(f){if(l===f)return;l=f;const g=++o;u();const b=t.get(f);b&&(r.fromArray(b.camera.position),Uu("./"+b.finish).then(m=>{if(g!==o){m.dispose();return}m.colorSpace=Ze,m.wrapS=Vn,s.uniforms.image.value=m},()=>console.warn("Using model materials for",f)))},dispose(){o++,h(),u();for(const f of a.values())f.dispose();s.dispose()}}}function lS(i,e){const t=n=>{const s=e.find(o=>n.name.includes(o.material));if(!s)return n;const a=n.clone();a.map=null,a.color.setRGB(1,1,1),a.userData.locationOwned=!0;const r={stripeBase:{value:new De().setRGB(...s.base)},stripeInk:{value:new De().setRGB(...s.stripe)},stripeSize:{value:new Ce(s.period,s.share)}};return a.onBeforeCompile=o=>{Object.assign(o.uniforms,r),o.vertexShader=`varying vec3 stripePoint;
`+o.vertexShader.replace("#include <project_vertex>",`#include <project_vertex>
        vec4 stripeLocal = vec4(transformed,1.);
        #ifdef USE_INSTANCING
          stripeLocal = instanceMatrix*stripeLocal;
        #endif
        stripePoint = (modelMatrix*stripeLocal).xyz;`),o.fragmentShader=`varying vec3 stripePoint; uniform vec3 stripeBase, stripeInk; uniform vec2 stripeSize;
        float stripeArea(float v) { return floor(v)*stripeSize.y+min(fract(v),stripeSize.y); }
        `+o.fragmentShader.replace("#include <map_fragment>",`#include <map_fragment>
        float stripeAt = (stripePoint.x-stripePoint.z)/stripeSize.x, stripeSpan = max(fwidth(stripeAt),1e-5);
        diffuseColor.rgb = mix(stripeBase,stripeInk,clamp((stripeArea(stripeAt+.5*stripeSpan)-stripeArea(stripeAt-.5*stripeSpan))/stripeSpan,0.,1.));`)},a.customProgramCacheKey=()=>"stripes",a};i.traverse(n=>{n.isMesh&&(n.material=Array.isArray(n.material)?n.material.map(t):t(n.material))})}const dS={"door|flag":[[22.562,1.15,14.651],[22.36,1.15,9.65],[13.14,1.15,8.38],[11.04,1.15,9.95],[12.24,1.15,11.75],[16.016,1.15,13.705],[16.74,1.494,14.08],[16.8,1.18,14.2],[16.74,1.494,14.08],[15.935,1.15,14.213],[15.737,1.15,14.245],[14.8,1.15,14.4],[15.31,1.224,13.85],[15.509,1.15,13.87],[17.56,1.15,14.08],[17.889,1.15,15.066],[18.16,1.574,15.88],[18.18,1.15,15.97],[18.16,1.555,15.88]],"desk-prints|door":[[16.74,1.15,14.08],[16.8,1.18,14.2],[16.74,1.494,14.08],[16.016,1.15,13.705],[12.24,1.15,11.75],[11.04,1.15,9.95],[13.14,1.15,8.38],[22.36,1.15,9.65],[22.562,1.15,14.651]],"door|hall":[],"bedroom|flag":[],"flag|shelf":[[18.16,1.555,15.88],[18.18,1.15,15.97],[18.16,1.574,15.88],[17.889,1.15,15.066],[17.56,1.15,14.08],[15.509,1.15,13.87],[15.31,1.224,13.85]],"bedroom|shelf":[],"bedroom|desk-prints":[],"desk-prints|shelf":[],"maru|records":[],"hall|records":[],"pantry-view|records":[],"hall|maru":[]},uS={"booths|entrance":[],"entrance|television":[[4.1,1.25,1.6]],"booths|television":[[-2.6,1.25,1.6]]},hS={"curb|street":[[90.51,1.61,-320.56],[90.96,1.61,-320.41],[91.11,1.61,-320.19]]},fS={"landing|stairs":[[65.23,57.06,-5],[65.23,55.46,-2.2],[65.23,55.46,-1.55],[63.77,55.46,-1.55],[63.77,55.46,-2.2],[63.77,53.86,-5]],"landing|terrace":[[65.45,57.06,-5.58],[66.56,57.06,-5.58],[67.65,57.06,-5.58],[67.65,57.06,-4.1]],"lounge|terrace":[[68.74,57.06,-4]]},pS={"door|street":[[71.8,1.35,8.7],[73.5,1.5,12.7],[75.2,1.75,16.1]]},mS={"approach|street":[]},gS={apartment:dS,bar:uS,"boutique-interior":{"entrance|tote-muse":[],"door|entrance":[],"collection-view|entrance":[],"door|tote-muse":[],"collection-view|tote-muse":[],"collection-view|door":[]},"club-interior":{"bar|entrance":[],"entrance|vault":[],"entrance|floor":[],"bar|vault":[],"bar|floor":[],"floor|vault":[]},"library-interior":{"entrance|local-history":[[-.65,1.15,-2.05],[.105,1.15,-2.627],[3.395,1.15,-5.143]],"door|entrance":[],"city-archive|entrance":[[-4.52,1.15,-8.678],[-3.46,1.15,-8.46],[-3.61,1.15,-6.36],[-3.83,1.15,-6.153],[-4.52,1.07,-5.5],[-3.712,1.15,-5],[-.808,1.15,-3.2]],"local-history|local-worlds":[[3.395,1.15,-5.143],[.105,1.15,-2.627],[-.65,1.15,-2.05],[-2.834,1.15,-2.469],[-.773,1.15,-3.253],[-2.18,1.15,-4.26],[-2.994,1.15,-6.092],[-3.38,1.15,-6.96],[-3.01,1.276,-6.59],[-2.592,1.15,-6.503],[.97,1.15,-5.76],[3.178,1.15,-8.186],[3.29,1.215,-8.31]],"door|local-worlds":[[-2.834,1.15,-2.469],[-.773,1.15,-3.253],[-2.18,1.15,-4.26],[-2.994,1.15,-6.092],[-3.38,1.15,-6.96],[-3.01,1.276,-6.59],[-2.592,1.15,-6.503],[.97,1.15,-5.76],[3.178,1.15,-8.186],[3.29,1.215,-8.31]],"city-archive|local-worlds":[[-4.52,1.15,-8.678],[-3.46,1.15,-8.46],[-3.61,1.15,-6.36],[-3.83,1.15,-6.153],[-4.52,1.07,-5.5],[-3.38,1.15,-6.96],[-3.01,1.276,-6.59],[-2.592,1.15,-6.503],[.97,1.15,-5.76],[3.178,1.15,-8.186],[3.29,1.215,-8.31]],"door|local-history":[],"city-archive|returns":[[-4.52,1.15,-8.678],[-3.46,1.15,-8.46],[-3.61,1.15,-6.36],[-3.83,1.15,-6.153],[-4.52,1.07,-5.5],[-3.828,1.15,-6.151],[-3.68,1.15,-6.29],[-3.01,1.15,-11.24],[-4.665,1.15,-12.598]]},"museum-interior":{"entrance|inventions-view":[[-3.9,1.25,-2.8]],"inventions-view|melaninated":[[-4.2,1.25,-2.8],[-4.2,1.25,-5.35]],"codex|melaninated":[],"codex|ex1":[],"commons|ex1":[[7,1.25,-9],[7,1.25,-5.35]],"commons|ex3":[[6.5,1.25,-9]],"ex3|realm":[[7,1.25,-10],[7,1.25,-13.4]],"museum-tv|realm":[],"expanded|museum-tv":[],"expanded|slos":[[-3.5,1.25,-13.4],[-3.5,1.25,-10]],"entrance|slos":[[-4.2,1.25,-1.85],[-4.2,1.25,-5.2],[-3.6,1.25,-5.2],[-3.6,1.25,-10]],"codex|entrance":[[0,1.25,-5.2],[-4.2,1.25,-5.2],[-4.2,1.25,-1.85]],"entrance|ex3":[[-4.2,1.25,-1.85],[-4.2,1.25,-5.2],[3.5,1.25,-5.2],[3.5,1.25,-10]],"entrance|museum-tv":[[-4.2,1.25,-1.85],[-4.2,1.25,-5.2],[-3.5,1.25,-5.2],[-3.5,1.25,-12.6]],"entrance|expanded":[[-4.2,1.25,-1.85],[-4.2,1.25,-5.2],[-3.5,1.25,-5.2],[-3.5,1.25,-13.4]]},police:hS,"police-interior":{"entrance|notices":[[.949,1.15,-2.843],[4.751,1.15,-3.016],[5.27,1.347,-3.04]],"desks|entrance":[],"entrance|operations":[],"notices|operations":[[5.27,1.347,-3.04],[4.752,1.15,-3.005],[-1.41,1.15,-2.59],[-1.642,1.15,-2.269],[-2.2,1.15,-1.5],[-1.546,1.15,-2.189],[3.287,1.15,-7.278],[3.47,1.245,-7.47],[4.07,1.461,-7.54]],"investigations|notices":[[4.44,1.312,-13.09],[4.81,1.15,-12.988],[5.79,1.15,-12.72],[6.32,1.15,-12.49],[6.39,1.15,-10.77],[4.14,1.15,-10.02],[.473,1.15,-3.624],[0,1.07,-2.8],[.949,1.15,-2.843],[4.751,1.15,-3.016],[5.27,1.347,-3.04]],"desks|recovery":[[-3.151,1.15,-8.574],[-4.18,1.15,-10.02],[-6.36,1.15,-10.77],[-6.81,1.15,-12.57],[-6.84,1.15,-12.606],[-7.18,1.308,-13.02]],"desks|evidence-room":[[-2.038,1.15,-8.566],[.02,1.15,-11.37],[.017,1.15,-11.55]],"investigations|operations":[[4.852,1.15,-13.003],[5.34,1.15,-12.72],[6.17,1.15,-12.64],[6.47,1.15,-11.74],[5.87,1.15,-10.24],[3.54,1.15,-9.34],[3.744,1.15,-8.322],[3.84,1.326,-7.84],[4.07,1.461,-7.54]],"evidence-room|investigations":[[.244,1.15,-11.582],[.54,1.15,-10.47],[6.17,1.15,-10.54],[6.32,1.15,-12.49],[5.79,1.15,-12.72],[4.81,1.15,-12.988],[4.44,1.312,-13.09]],"evidence-room|recovery":[[-.223,1.15,-11.577],[-.51,1.15,-10.39],[-6.13,1.15,-10.54],[-6.81,1.15,-12.57],[-6.84,1.15,-12.606],[-7.18,1.308,-13.02]]},rooftop:fS,"slos-hq-interior":{"entrance|prompt":[[2.63,1.15,-5.855],[.54,1.15,-10.8],[4.059,1.15,-14.118],[4.75,1.15,-14.77],[4.912,1.15,-15.706],[5.71,1.15,-20.33],[6.24,1.15,-24.38],[5.264,1.15,-24.7],[5.11,1.228,-24.75],[4.59,1.502,-24.53]],"entrance|planning-view":[],"floor|prompt":[[4.912,1.15,-15.706],[5.71,1.15,-20.33],[6.24,1.15,-24.38],[5.264,1.15,-24.7],[5.11,1.228,-24.75],[4.59,1.502,-24.53]],"floor|sonnet":[]},studio:pS,"studio-interior":{"archive|console":[[3.9,1.25,-3.75]],"archive|headphones":[[5.08,1.15,-5.363],[4.35,1.15,-3.837]],"archive|look-albums":[],"console|headphones":[[1.592,1.15,-2.68],[2.998,1.15,-2.86]],"door|entrance":[],"console|entrance":[],"entrance|logbook":[],"entrance|look-albums":[],"entrance|lounge":[[-4.2,1.25,-1.35],[-4.05,1.25,-4.05]],"logbook|lounge":[[-4.2,1.25,-1.95],[-3.9,1.25,-5.4]]},"usb-port":{"claim|desk":[],"claim|officer":[[212.39,3.1,166.81]],"curb|officer":[[173,1.64,76.5],[175,1.8,80],[179,2.89,83.15],[181,3.03,85],[199,3.03,99],[209,3.04,108],[214,2.82,118],[220.9,2.82,124.7],[222,2.92,128],[222,3.06,131.3],[214,3.06,140],[212.39,3.06,166.81]],"desk|officer":[],"officer|threshold":[[212.39,3.06,166.81],[214,3.06,140],[222,3.06,131.3],[222,2.92,128],[220.9,2.82,124.7]]},voidworks:mS,"voidworks-interior":{"arcade|entrance":[],"canyon|entrance":[[4.755,1.15,-7.268],[4.615,1.15,-6.782],[4.35,1.15,-5.87],[3.498,1.15,-5.451],[-1.648,1.15,-2.919]],"arcade|canyon":[]}};async function bS(i,e,t){const n=e.day?e:t,s=e.image||(ln.hour>=(n.lateHour??15)?n.late:n.day),a=await Uu("./"+s);a.colorSpace=Ze,a.wrapS=Vn;const r=new un({uniforms:{panorama:{value:a},turn:{value:gt.degToRad(e.rotation||0)}},vertexShader:`varying vec3 point;
      #include <common>
      #include <logdepthbuf_pars_vertex>
      void main() {
        vec4 worldPoint = modelMatrix * vec4(position, 1.);
        point = worldPoint.xyz;
        gl_Position = projectionMatrix * viewMatrix * worldPoint;
        #include <logdepthbuf_vertex>
      }`,fragmentShader:`varying vec3 point; uniform sampler2D panorama; uniform float turn;
      #include <common>
      #include <logdepthbuf_pars_fragment>
      ${Pc}
      void main() {
        #include <logdepthbuf_fragment>
        vec3 d = normalize(point-cameraPosition);
        vec2 uv = vec2(.5+(atan(d.x,-d.z)+turn)/(2.*PI), .5+asin(clamp(d.y,-1.,1.))/PI);
        gl_FragColor = samplePanorama(panorama,uv);
        #include <colorspace_fragment>
      }`,side:e.panes?nn:Gt,toneMapped:!1,polygonOffset:!!e.panes,polygonOffsetFactor:-3,polygonOffsetUnits:-4});let o;if(i.userData.releaseWindowView=()=>{a.dispose(),r.dispose(),o?.geometry.dispose()},e.panes){const l=(await On(e.panes)).scene.clone(!0);l.userData.distantScenery=!0,l.traverse(d=>{d.isMesh&&(d.material=r,d.renderOrder=1)}),i.add(l)}else o=new j(new si(180,24,12),r),o.userData.distantScenery=!0,i.add(o)}async function vS(i,{image:e,bounds:t}){const n=await new Ja().loadAsync("./"+e);n.anisotropy=4;const s=new A(...t),a=new Map;function r(o){if(a.has(o))return a.get(o);const c=o.clone();return c.userData.locationOwned=!0,c.onBeforeCompile=l=>{l.uniforms.floorFinish={value:n},l.uniforms.floorBounds={value:s},l.vertexShader=`varying vec3 stagePoint;
`+l.vertexShader.replace("#include <project_vertex>",`#include <project_vertex>
stagePoint = (modelMatrix * vec4(transformed, 1.0)).xyz;`),l.fragmentShader=`varying vec3 stagePoint; uniform sampler2D floorFinish; uniform vec3 floorBounds;
`+l.fragmentShader.replace("#include <fog_fragment>",`#include <fog_fragment>
          if (abs(stagePoint.y) < 0.015) {
            vec2 uv = (stagePoint.xz - floorBounds.xy) / floorBounds.z;
            if (all(greaterThanEqual(uv, vec2(0.0))) && all(lessThanEqual(uv, vec2(1.0))))
              gl_FragColor.rgb = texture2D(floorFinish, vec2(uv.x, 1.0 - uv.y)).rgb;
          }`)},c.customProgramCacheKey=()=>"civic-floor-projection-v1",a.set(o,c),c}i.updateMatrixWorld(!0),i.traverse(o=>{if(!o.isMesh||o.isInstancedMesh)return;o.geometry.boundingBox||o.geometry.computeBoundingBox();const c=o.geometry.boundingBox.clone().applyMatrix4(o.matrixWorld);c.min.y>.015||c.max.y<-.015||(o.material=Array.isArray(o.material)?o.material.map(r):r(o.material))}),i.userData.floorFinish=n}const pr=new A;function In(i,e,t,n,s,a){const r=2*Math.PI*s/4,o=Math.max(a-2*s,0),c=Math.PI/4;pr.copy(e),pr[n]=0,pr.normalize();const l=.5*r/(r+o),d=1-pr.angleTo(i)/c;return Math.sign(pr[t])===1?d*l:o/(r+o)+l+l*(1-d)}class Cm extends mt{constructor(e=1,t=1,n=1,s=2,a=.1){if(s=s*2+1,a=Math.min(e/2,t/2,n/2,a),super(1,1,1,s,s,s),s===1)return;const r=this.toNonIndexed();this.index=null,this.attributes.position=r.attributes.position,this.attributes.normal=r.attributes.normal,this.attributes.uv=r.attributes.uv;const o=new A,c=new A,l=new A(e,t,n).divideScalar(2).subScalar(a),d=this.attributes.position.array,u=this.attributes.normal.array,h=this.attributes.uv.array,f=d.length/6,g=new A,b=.5/s;for(let m=0,p=0;m<d.length;m+=3,p+=2)switch(o.fromArray(d,m),c.copy(o),c.x-=Math.sign(c.x)*b,c.y-=Math.sign(c.y)*b,c.z-=Math.sign(c.z)*b,c.normalize(),d[m+0]=l.x*Math.sign(o.x)+c.x*a,d[m+1]=l.y*Math.sign(o.y)+c.y*a,d[m+2]=l.z*Math.sign(o.z)+c.z*a,u[m+0]=c.x,u[m+1]=c.y,u[m+2]=c.z,Math.floor(m/f)){case 0:g.set(1,0,0),h[p+0]=In(g,c,"z","y",a,n),h[p+1]=1-In(g,c,"y","z",a,t);break;case 1:g.set(-1,0,0),h[p+0]=1-In(g,c,"z","y",a,n),h[p+1]=1-In(g,c,"y","z",a,t);break;case 2:g.set(0,1,0),h[p+0]=1-In(g,c,"x","z",a,e),h[p+1]=In(g,c,"z","x",a,n);break;case 3:g.set(0,-1,0),h[p+0]=1-In(g,c,"x","z",a,e),h[p+1]=1-In(g,c,"z","x",a,n);break;case 4:g.set(0,0,1),h[p+0]=1-In(g,c,"x","y",a,e),h[p+1]=1-In(g,c,"y","x",a,t);break;case 5:g.set(0,0,-1),h[p+0]=In(g,c,"x","y",a,e),h[p+1]=1-In(g,c,"y","x",a,t);break}}}const ve=(i,e=.75,t=0,n={})=>new Wn({color:i,roughness:e,metalness:t,...n}),Je=(i,e,t,n=.03)=>new Cm(i,e,t,2,Math.min(n,i/2,e/2,t/2));function jf(i,{bg:e="#14161c",fg:t="#f4e7c8",accent:n="#e7a6c4",w:s=1024,h:a=256,font:r='700 120px "Bebas Neue", Impact, sans-serif',sub:o=""}={}){const c=document.createElement("canvas");c.width=s,c.height=a;const l=c.getContext("2d");l.fillStyle=e,l.fillRect(0,0,s,a),l.strokeStyle=n,l.lineWidth=8,l.strokeRect(14,14,s-28,a-28),l.fillStyle=t,l.font=r,l.textAlign="center",l.textBaseline="middle",l.shadowColor=n,l.shadowBlur=18,l.fillText(i,s/2,o?a*.42:a/2),o&&(l.shadowBlur=0,l.font='500 40px "IBM Plex Mono", monospace',l.fillStyle=n,l.fillText(o,s/2,a*.78));const d=new mi(c);return d.colorSpace=Ze,d.anisotropy=4,d}function xS(i="#6b4a33",e="#4e3424"){const t=document.createElement("canvas");t.width=t.height=512;const n=t.getContext("2d");n.fillStyle=i,n.fillRect(0,0,512,512);for(let a=0;a<8;a++)n.fillStyle=`rgba(0,0,0,${.04+a%3*.03})`,n.fillRect(0,a*64,512,64),n.fillStyle=e,n.fillRect(0,a*64,512,3),n.fillRect(a*137%400+40,a*64,3,64);const s=new mi(t);return s.wrapS=s.wrapT=Vn,s.colorSpace=Ze,s}function Xf(i="#2c2f38",e="#24272f"){const t=document.createElement("canvas");t.width=t.height=256;const n=t.getContext("2d");n.fillStyle=i,n.fillRect(0,0,256,256),n.fillStyle=e,n.fillRect(0,0,128,128),n.fillRect(128,128,128,128),n.strokeStyle="rgba(0,0,0,.35)",n.lineWidth=3,n.strokeRect(0,0,128,128),n.strokeRect(128,128,128,128),n.strokeRect(128,0,128,128),n.strokeRect(0,128,128,128);const s=new mi(t);return s.wrapS=s.wrapT=Vn,s.colorSpace=Ze,s}const Ts={desk(i,e){const t=new Ue,n=new j(Je(1.8,.06,.85,.02),ve(e.wood??7031347,.55));n.position.y=.76,t.add(n);const s=ve(e.woodDark??5125156,.6);for(const o of[-.82,.82]){const c=new j(Je(.06,.73,.8,.01),s);c.position.set(o,.365,0),t.add(c)}const a=new j(Je(1.6,.45,.03,.01),s);a.position.set(0,.5,-.36),t.add(a);const r=new j(Je(.5,.6,.72,.01),s);if(r.position.set(.52,.42,.02),t.add(r),i.lamp!==!1){const o=Ts.lamp({},e);o.position.set(-.6,.79,-.15),o.scale.setScalar(.55),t.add(o)}if(i.papers!==!1)for(let o=0;o<3;o++){const c=new j(new mt(.22,.004,.3),ve(15722194,.9));c.position.set(.1+o*.05,.795+o*.004,.05),c.rotation.y=(o-1)*.2,t.add(c)}if(i.monitor){const o=Ts.screen({w:.55,h:.34},e);o.position.set(.2,.79,-.2),t.add(o)}return t},chair(i,e){const t=new Ue,n=ve(e.leather??3877410,.6),s=new j(Je(.48,.08,.46,.03),n);s.position.y=.46,t.add(s);const a=new j(Je(.48,.55,.07,.03),n);a.position.set(0,.76,-.2),t.add(a);const r=ve(2763825,.4,.7),o=new j(new It(.03,.03,.4,8),r);o.position.y=.22,t.add(o);for(let c=0;c<5;c++){const l=new j(Je(.3,.03,.04,.01),r),d=c/5*Math.PI*2;l.position.set(Math.cos(d)*.15,.03,Math.sin(d)*.15),l.rotation.y=-d,t.add(l)}return t},bench(i,e){const t=new Ue,n=i.w??2.2;for(let a=0;a<3;a++){const r=new j(Je(n,.04,.12,.01),ve(e.wood??7031347,.6));r.position.set(0,.45,-.15+a*.15),t.add(r)}const s=ve(2237739,.45,.6);for(const a of[-n/2+.15,n/2-.15]){const r=new j(Je(.06,.45,.45,.01),s);r.position.set(a,.225,0),t.add(r)}return t},counter(i,e){const t=new Ue,n=i.w??3.5,s=new j(Je(n,1.05,.7,.03),ve(e.counter??e.woodDark??4074530,.55));s.position.y=.525,t.add(s);const a=new j(Je(n+.1,.06,.82,.02),ve(e.counterTop??1908516,.25,.2));a.position.y=1.08,t.add(a);const r=new j(new mt(n-.1,.1,.02),ve(e.accent??15181508,.4,0,{emissive:e.accent??15181508,emissiveIntensity:.6}));return r.position.set(0,.06,.36),t.add(r),t},shelf(i,e){const t=new Ue,n=i.w??1.6,s=i.h??2.2,a=ve(e.woodDark??5125156,.65);for(const c of[-n/2,n/2]){const l=new j(Je(.05,s,.4,.01),a);l.position.set(c,s/2,0),t.add(l)}const r=new j(new mt(n,s,.02),a);r.position.set(0,s/2,-.19),t.add(r);const o=i.colors??[9059131,3099243,13214812,4021570,7031418,14208440];for(let c=0;c<5;c++){const l=.1+c*(s-.2)/5,d=new j(Je(n,.04,.4,.01),a);if(d.position.set(0,l,0),t.add(d),c===4&&i.topEmpty)continue;let u=-n/2+.06,h=c*3;for(;u<n/2-.12;){const f=.04+h*13%5*.012,g=.24+h*7%4*.03;if(h%9===4){u+=.15,h++;continue}const b=new j(new mt(f,g,.26),ve(o[h%o.length],.8));b.position.set(u+f/2,l+.02+g/2,.02),b.rotation.z=h%11===0?.18:0,t.add(b),u+=f+.005,h++}}return t},cabinet(i,e){const t=new Ue,n=ve(e.metal??6120560,.45,.5),s=new j(Je(.5,1.35,.62,.02),n);s.position.y=.675,t.add(s);for(let a=0;a<4;a++){const r=new j(Je(.16,.025,.03,.01),ve(13620186,.3,.9));r.position.set(0,.25+a*.32,.32),t.add(r)}return t},board(i,e){const t=new Ue,n=i.w??2.4,s=i.h??1.4,a=new j(Je(n+.08,s+.08,.05,.01),ve(e.woodDark??5125156,.6));a.position.y=1+s/2,t.add(a);const r=new j(new mt(n,s,.02),ve(11568474,.95));r.position.set(0,1+s/2,.025),t.add(r);const o=[15919827,16179834,15315910,12181718,15919827];for(let d=0;d<9;d++){const u=new j(new mt(.22,.26,.004),ve(o[d%o.length],.9));u.position.set(-n/2+.3+d%5*(n-.5)/4,1+.3+Math.floor(d/5)*.62+d*7%3*.05,.04),u.rotation.z=(d*13%7-3)*.04,t.add(u)}const c=new Mu({color:11544607}),l=[[-.8,1.45],[.1,1.9],[.7,1.4],[-.2,1.3],[-.8,1.45]].map(([d,u])=>new A(d*n/2.4,u,.05));return t.add(new Tc(new Yt().setFromPoints(l),c)),t},door(i,e){const t=new Ue,n=ve(e.trim??2894376,.55),s=new j(Je(1.2,2.3,.14,.01),n);s.position.y=1.15,t.add(s);const a=new j(Je(1,2.15,.06,.01),ve(e.door??5914155,.6));if(a.position.set(0,1.08,.06),t.add(a),i.glass!==!1){const o=new j(new mt(.6,.7,.02),ve(14149360,.08,.1,{transparent:!0,opacity:.45,emissive:9415104,emissiveIntensity:.25}));o.position.set(0,1.55,.1),t.add(o)}if(i.label){const o=new j(new qt(.55,.14),new _t({map:jf(i.label,{w:512,h:128,font:'600 54px "IBM Plex Mono", monospace',bg:"#1a1712",accent:"#c9a45c"})}));o.position.set(0,1.55,.115),t.add(o)}const r=new j(new si(.04,12,8),ve(13214812,.3,.9));return r.position.set(.38,1,.12),t.add(r),t},lamp(i,e){const t=new Ue,n=ve(12095823,.35,.85),s=new j(new It(.12,.14,.03,20),n);s.position.y=.015,t.add(s);const a=new j(new It(.012,.012,.42,8),n);a.position.y=.22,t.add(a);const r=new j(new It(.06,.16,.14,20,1,!0),ve(e.shade??3103292,.5,0,{side:nn,emissive:16767392,emissiveIntensity:.15}));r.position.y=.45,t.add(r);const o=new j(new si(.04,10,8),new _t({color:16771e3}));return o.position.y=.42,t.add(o),t},floorlamp(i,e){const t=Ts.lamp(i,e);return t.scale.set(1.2,3.6,1.2),t},plant(i,e){const t=new Ue,n=new j(new It(.22,.17,.42,16),ve(e.pot??10181180,.8));n.position.y=.21,t.add(n);const s=new j(new It(.2,.2,.02,16),ve(2825748,1));s.position.y=.41,t.add(s);const a=ve(4160069,.7);for(let r=0;r<9;r++){const o=new j(new si(.16,8,6),a);o.scale.set(.5,1.6,.25);const c=r/9*Math.PI*2;o.position.set(Math.cos(c)*.12,.62+r%3*.1,Math.sin(c)*.12),o.rotation.set(Math.sin(c)*.5,-c,Math.cos(c)*.5),t.add(o)}return t},screen(i,e){const t=new Ue,n=i.w??1.6,s=i.h??.9,a=new j(Je(n+.05,s+.05,.05,.01),ve(1447707,.4,.3));a.position.y=s/2+.06,t.add(a);const r=document.createElement("canvas");r.width=512,r.height=288;const o=r.getContext("2d"),c=o.createLinearGradient(0,0,512,288);c.addColorStop(0,"#13233a"),c.addColorStop(1,"#2b1838"),o.fillStyle=c,o.fillRect(0,0,512,288),o.fillStyle=e.screenText??"#7fe3d0",o.font='600 26px "IBM Plex Mono", monospace',(i.lines??["> STATUS: NO NEW PROMPTS","> LAST ACTIVE: ???","> _"]).forEach((h,f)=>o.fillText(h,24,56+f*40));const l=new mi(r);l.colorSpace=Ze;const d=new j(new qt(n,s),new _t({map:l}));d.position.set(0,s/2+.06,.03),t.add(d);const u=new j(Je(.25,.06,.18,.01),ve(1447707,.4));return u.position.y=.03,t.add(u),t},rug(i,e){const t=new j(new mt(i.w??3,.012,i.d??2),ve(e.rug??7023923,.95));t.position.y=.006;const n=new Ue;n.add(t);const s=new j(new mt((i.w??3)-.3,.014,(i.d??2)-.3),ve(e.rugInner??9062970,.95));return s.position.y=.008,n.add(s),n},crate(i,e){const t=new Ue,n=new j(Je(.7,.6,.6,.02),ve(9071173,.85));return n.position.y=.3,t.add(n),t},column(i,e){const t=new Ue,n=i.h??4,s=new j(new It(.28,.32,n,20),ve(e.column??14209732,.6));s.position.y=n/2,t.add(s);for(const a of[.1,n-.1]){const r=new j(Je(.8,.2,.8,.02),ve(e.column??14209732,.6));r.position.y=a,t.add(r)}return t},pedestal(i,e){const t=new Ue,n=new j(Je(.7,1,.7,.03),ve(e.pedestal??15525594,.5));n.position.y=.5,t.add(n);const s=new j(Je(.6,.6,.6,.01),ve(14674674,.05,0,{transparent:!0,opacity:.22}));return s.position.y=1.3,t.add(s),t},stool(i,e){const t=new Ue,n=new j(new It(.2,.2,.06,20),ve(e.leather??3877410,.6));n.position.y=.78,t.add(n);const s=new j(new It(.03,.05,.75,8),ve(10133672,.3,.9));s.position.y=.38,t.add(s);const a=new j(new Ac(.16,.012,6,20),ve(10133672,.3,.9));return a.rotation.x=Math.PI/2,a.position.y=.3,t.add(a),t},rack(i,e){const t=new Ue,n=i.w??1.6,s=ve(13620186,.2,.95);for(const o of[-n/2,n/2]){const c=new j(new It(.02,.02,1.6,8),s);c.position.set(o,.8,0),t.add(c)}const a=new j(new It(.018,.018,n,8),s);a.rotation.z=Math.PI/2,a.position.y=1.55,t.add(a);const r=i.colors??[15181508,15913594,7973119,14208440,11897568,8381392];for(let o=0;o<9;o++){const c=new j(Je(.06,.85,.45,.02),ve(r[o%r.length],.7,0,{emissive:r[o%r.length],emissiveIntensity:i.sparkle?.12:0}));c.position.set(-n/2+.15+o*(n-.3)/8,1.1,0),t.add(c)}return t},speaker(i,e){const t=new Ue,n=new j(Je(.7,1.4,.6,.02),ve(1315864,.6));n.position.y=.7,t.add(n);for(const[s,a]of[[1.05,.2],[.5,.26]]){const r=new j(new It(a,a,.02,24),ve(2763312,.4,.3));r.rotation.x=Math.PI/2,r.position.set(0,s,.31),t.add(r)}return t},window(i,e){const t=new Ue,n=i.w??2,s=i.h??1.6,a=new j(new qt(n,s),new _t({color:i.color??10470374}));a.position.y=(i.y??1)+s/2,t.add(a);const r=ve(e.trim??2894376,.5);for(const[o,c,l,d]of[[0,(i.y??1)+s,n+.12,.08],[0,i.y??1,n+.12,.1],[-n/2,(i.y??1)+s/2,.08,s],[n/2,(i.y??1)+s/2,.08,s],[0,(i.y??1)+s/2,.05,s]]){const u=new j(Je(l,d,.1,.01),r);u.position.set(o,c,.03),t.add(u)}return t},sign(i,e){const t=i.w??3,n=i.h??.75,s=new j(new qt(t,n),new _t({map:jf(i.text??"",{accent:e.accentCss??"#e7a6c4",sub:i.sub??""})}));s.position.y=i.y??2.6;const a=new Ue;return a.add(s),a},streetlamp(i,e){const t=new Ue,n=ve(2369324,.5,.6),s=new j(new It(.06,.09,4.2,10),n);s.position.y=2.1,t.add(s);const a=new j(new It(.03,.03,.8,6),n);a.rotation.z=Math.PI/2,a.position.set(.35,4.1,0),t.add(a);const r=new j(new It(.1,.24,.24,14),n);r.position.set(.7,3.98,0),t.add(r);const o=new j(new si(.1,10,8),ve(16773320,.3,0,{emissive:16766346,emissiveIntensity:1.2}));return o.position.set(.7,3.86,0),t.add(o),t},steps(i,e){const t=new Ue,n=i.n??3,s=i.w??3;for(let a=0;a<n;a++){const r=new j(Je(s,.17,.32*(n-a),.01),ve(e.stone??12169893,.85));r.position.set(0,.085+a*.17,-.16*a),t.add(r)}return t},car(i,e){const t=new Ue,n=ve(i.color??2306634,.35,.6),s=new j(Je(1.9,.6,4.4,.12),n);s.position.y=.6,t.add(s);const a=new j(Je(1.6,.55,2.3,.15),ve(1711912,.1,.4,{transparent:!0,opacity:.85}));a.position.set(0,1.12,-.2),t.add(a);for(const[r,o]of[[-.9,1.4],[.9,1.4],[-.9,-1.4],[.9,-1.4]]){const c=new j(new It(.34,.34,.26,18),ve(1118740,.8));c.rotation.z=Math.PI/2,c.position.set(r,.34,o),t.add(c)}if(i.police){const r=new j(Je(1,.1,.25,.03),ve(16777215,.3,0,{emissive:4219135,emissiveIntensity:.9}));r.position.set(0,1.45,-.2),t.add(r);const o=new j(new mt(1.92,.12,3.6),ve(15921906,.4));o.position.y=.66,t.add(o)}for(const r of[-.6,.6]){const o=new j(new Eu(.1,12),new _t({color:16774102}));o.position.set(r,.7,2.21),t.add(o)}return t}};function _S(i){const e=new Ue;e.name="stage";const t={...i.palette||{}};for(const r of Object.keys(t))typeof t[r]=="string"&&t[r].startsWith("#")&&r!=="accentCss"&&r!=="screenText"&&(t[r]=parseInt(t[r].slice(1),16));const[n,s,a]=i.size??[12,10,4];if(i.type==="room"){const r=i.floor==="tile"?Xf():xS();r.repeat.set(n/2,s/2);const o=new j(new qt(n,s),ve(16777215,.7,0,{map:r}));o.rotation.x=-Math.PI/2,e.add(o);const c=ve(t.wall??3882826,.9),l=ve(t.wainscot??t.woodDark??5125156,.7),d=ve(t.trim??2894376,.6),u=(f,g,b,m)=>{const p=new Ue;p.position.set(g,0,b),p.rotation.y=m;const v=new j(new mt(f,a,.2),c);v.position.set(0,a/2,-.1),p.add(v);const x=new j(new mt(f,1.05,.04),l);x.position.set(0,.525,.02),p.add(x);const y=new j(Je(f,.06,.08,.01),d);y.position.set(0,1.08,.03),p.add(y);const D=new j(Je(f,.12,.1,.01),d);D.position.set(0,a-.06,.04),p.add(D),e.add(p)};u(n,0,-s/2,0),u(s,-n/2,0,Math.PI/2),u(s,n/2,0,-Math.PI/2),i.frontWall&&u(n,0,s/2,Math.PI);const h=new j(new qt(n,s),ve(t.ceiling??1842466,.95));h.rotation.x=Math.PI/2,h.position.y=a,e.add(h);for(const[f,g]of i.pendants??[[0,0]]){const b=new j(new It(.008,.008,.8,4),ve(1118481));b.position.set(f,a-.4,g),e.add(b);const m=new j(new Tu(.3,.25,20,1,!0),ve(t.shade??3103292,.5,.2,{side:nn}));m.position.set(f,a-.85,g),e.add(m);const p=new j(new si(.07,10,8),new _t({color:16769712}));p.position.set(f,a-.93,g),e.add(p);const v=new Gr(t.light??16767400,i.lightIntensity??6,9,1.6);v.position.set(f,a-1,g),e.add(v)}}else if(i.type==="street"){const r=new j(new qt(n*3,8),ve(2763824,.92));r.rotation.x=-Math.PI/2,r.position.set(0,-.14,9),e.add(r);for(let b=-8;b<=8;b++){const m=new j(new qt(1.6,.14),ve(15262408,.8));m.rotation.x=-Math.PI/2,m.position.set(b*3.4,-.13,9),e.add(m)}const o=new j(new mt(n*3,.15,5),ve(11051674,.9,0,{map:(()=>{const b=Xf("#aaa49b","#a29c93");return b.repeat.set(n*2,3),b})()}));o.position.set(0,-.075,2.5),e.add(o);const c=new j(Je(n*3,.17,.25,.02),ve(13222840,.8));c.position.set(0,-.06,5),e.add(c);const l=new Ue;e.add(l);const d=new j(new mt(n,a,1),ve(t.wall??9146265,.85));d.position.set(0,a/2,-.5),l.add(d);const u=new j(Je(n+.2,1,1.2,.02),ve(t.stone??7301731,.9));u.position.set(0,.5,-.45),l.add(u);const h=new j(Je(n+.5,.45,1.4,.03),ve(t.trim??4869461,.7));h.position.set(0,a+.1,-.4),l.add(h);const f=Math.max(1,Math.floor((a-4)/3.2));for(let b=0;b<f;b++)for(let m=0;m<Math.floor(n/3);m++){const p=-n/2+1.5+m*3;if(Math.abs(p)<2.2)continue;const v=Ts.window({w:1.5,h:1.8,y:4.2+b*3.2,color:(m+b)%3?10467279:16112032},t);v.position.set(p,0,.02),l.add(v)}for(let b=0;b<Math.floor(n/3);b++){const m=-n/2+1.5+b*3;if(Math.abs(m)<2.2)continue;const p=Ts.window({w:1.8,h:2,y:1.1,color:15916206},t);p.position.set(m,0,.02),l.add(p)}const g=new j(new mt(n*3,a*2.2,1),ve(6252146,.95));g.position.set(0,a*1.1,-14),e.add(g)}else if(i.type==="roof"){const r=new j(new mt(n,.3,s),ve(t.deck??5593183,.9));r.position.y=-.15,e.add(r);const o=ve(t.wall??7106424,.85);for(const[c,l,d,u]of[[n,0,-s/2,0],[n,0,s/2,0],[s,-n/2,0,Math.PI/2],[s,n/2,0,Math.PI/2]]){const h=new j(Je(c,1.05,.3,.02),o);h.position.set(l,.52,d),h.rotation.y=u,e.add(h)}}for(const r of i.props??[]){const o=Ts[r.type];if(!o){console.warn("unknown stage prop",r.type);continue}const c=o(r,t);c.position.set(r.at[0],r.at[1]??0,r.at[2]??r.at[1]),r.at.length===2&&c.position.set(r.at[0],0,r.at[1]),c.rotation.y=gt.degToRad(r.rot??0),r.scale&&c.scale.setScalar(r.scale),r.name&&(c.name=r.name),e.add(c)}if(i.sign){const r=Ts.sign({text:i.sign,sub:i.signSub,w:i.signW??Math.min(n*.5,6),h:(i.signW??Math.min(n*.5,6))/4,y:i.signY??(i.type==="street"?3.4:a-.9)},t);r.position.z=i.type==="street"?.05:-s/2+.03,e.add(r)}return e}const yS={torso:"BITTY_Torso",head:"BITTY_Head",armL:"BITTY_Arm0",armR:"BITTY_Arm1",elbowL:"BITTY_Elbow0",elbowR:"BITTY_Elbow1",wristR:"CONN_wrist_plug1",legL:"BITTY_Leg0",legR:"BITTY_Leg1",kneeL:"BITTY_Knee0",kneeR:"BITTY_Knee1",ankleL:"BITTY_Ankle0",ankleR:"BITTY_Ankle1"},Yf=new An,MS=new Gn;function Pm(i){if(i.userData.rig!==void 0)return i.userData.rig;const e={};for(const[t,n]of Object.entries(yS)){const s=i.getObjectByName(n);s&&(e[t]={o:s,rest:s.quaternion.clone()})}if(e.ankleL&&e.ankleR){i.updateWorldMatrix(!0,!0);const t=i.children[0],n=[e.ankleL,e.ankleR].map(a=>{const r=a.o.getWorldPosition(new A);return r.y=new Rn().setFromObject(a.o,!0).min.y,{o:a.o,sole:a.o.worldToLocal(r)}}),s=Math.min(...n.map(a=>i.worldToLocal(a.o.localToWorld(a.sole.clone())).y));e.contact={model:t,restY:t.position.y,floor:s,feet:n}}return i.userData.rig=e.head&&e.armR&&e.legL?e:null}function fn(i,e,t,n){i&&(Yf.set(e,t,n),i.o.quaternion.copy(i.rest).multiply(MS.setFromEuler(Yf)))}function SS(i,e,t,n,s){if(!i.userData.seatedRig){const d=i.getObjectByName("Skye_Neck"),u=[];i.traverse(h=>{for(const[f,g]of Object.entries(h.morphTargetDictionary||{}))(f==="Blink"||f==="Jaw open")&&u.push({part:h,name:f,index:g})}),i.userData.seatedRig={head:d&&{o:d,rest:d.quaternion.clone()},controls:u}}const{head:a,controls:r}=i.userData.seatedRig,o=n*n*(3-2*n);fn(a,.09-.28*o+Math.sin(e*1.55)*.024+Math.sin(e*6)*.025*t,-.14*(1-o)+s*o+Math.sin(e*.57)*.035,Math.sin(e*.78)*.027);const c=Math.max(0,1-Math.abs(e%4.7-.13)/.13),l=t*(.45+.3*Math.sin(9*e)+.2*Math.sin(15*e));for(const{part:d,name:u,index:h}of r)d.morphTargetInfluences[h]=u==="Blink"?c:l}function fc(i,e,{walk:t=0,wave:n=0,talk:s=0,stride:a=6,attention:r=0,lookYaw:o=0}={},c=0){if(i.userData.seated){SS(i,e+c,s,r,o);return}const l=Pm(i);if(!l){const L=i.children[0];L&&(L.rotation.y=Math.sin(e*.5+c)*.06);return}i.userData.dressed&&(s=Math.max(s,n*.6),n=0);const d=i.userData.dressed?.25:1,u=Math.sin(e*a+c),h=Math.sin(e*.37+c)*.35+Math.sin(e*.91+c*2)*.1,f=Math.sin(e*.53+c*3)*.06,g=(Math.sin(e*7.3+c)*.6+Math.sin(e*11.1+c)*.4)*.09*s,b=Math.sin(e*2.1+c)*.12*s;fn(l.head,f*(1-s)+g,h*(1-.6*s)*(1-.7*t),b),fn(l.torso,0,0,0);const m=u*.5*t,p=-m,v=Math.max(0,-u)*.55*t,x=Math.max(0,u)*.55*t;if(fn(l.legL,m,0,0),fn(l.legR,p,0,0),fn(l.kneeL,v,0,0),fn(l.kneeR,x,0,0),fn(l.ankleL,-m-v,0,0),fn(l.ankleR,-p-x,0,0),l.contact){const L=l.contact;L.model.position.y=L.restY;const k=Math.min(...L.feet.map(P=>i.worldToLocal(P.o.localToWorld(P.sole.clone())).y));L.model.position.y+=L.floor-k}const y=Math.sin(e*.8+c)*.04,D=Math.sin(e*1.7+c)*.18*s,T=i.userData.hold||0,R=l.elbowL?.65:0;T?fn(l.armL,T*(1-R),0,i.userData.holdOut??0):fn(l.armL,(-u*.35*t+D*.4)*d,0,(-.05-y-.1*s)*d);const I=(.08+.2*t+.22*s)*d;fn(l.elbowL,T?T*R:-I+D*d*.5,0,0);const _=Math.sin(e*8+c);fn(l.armR,u*.35*t*(1-n)*d-.15*n,0,(.05+y)*d+1.95*n),fn(l.elbowR,-I*(1-n)-(1.05+.18*_)*n,0,0),fn(l.wristR,-.32*n,0,.28*_*n)}const Ms=(i,e,t,n=3)=>i+Math.max(-n*t,Math.min(n*t,e-i)),Yo=new Rn,ia=new A;function Hd(i){return Yo.makeEmpty(),i.updateMatrixWorld(!0),i.traverse(e=>{if(!e.isMesh||!e.visible)return;const t=e.isInstancedMesh?e:e.geometry;t.boundingBox||t.computeBoundingBox();const n=t.boundingBox;Yo.union(n.clone().applyMatrix4(e.matrixWorld))}),Yo}let mr;function wS(i){if(!mr){const n=document.createElement("canvas");n.width=n.height=128;const s=n.getContext("2d"),a=(r,o,c,l,d)=>{s.save(),s.translate(r,o),s.scale(c,l);const u=s.createRadialGradient(0,0,0,0,0,1);u.addColorStop(0,`rgba(24,18,15,${d})`),u.addColorStop(1,"rgba(24,18,15,0)"),s.fillStyle=u,s.fillRect(-1,-1,2,2),s.restore()};a(64,65,63,53,.36),a(46,62,21,30,.4),a(82,62,21,30,.4),mr=new j(new qt(1,1),new _t({map:new mi(n),transparent:!0,depthWrite:!1,polygonOffset:!0,polygonOffsetFactor:-1,toneMapped:!1})),mr.rotation.x=-Math.PI/2,mr.position.y=.004}const e=mr.clone();e.userData.excludeOutline=!0;const t=i.userData.height;e.scale.set(t*.67,t*.47,1),i.add(e)}async function Ou(i,{height:e=1.4,node:t,floorContact:n=!1}={}){const s=await On(i),a=t?s.scene.getObjectByName(t):s.scene;if(!a)throw new Error(`${i}: node "${t}" not found`);const r=a.clone(!0);r.position.set(0,0,0),r.rotation.set(0,0,0),r.traverse(d=>{(d.isLight||d.isCamera)&&(d.visible=!1),d.isMesh&&(d.castShadow=!1,d.frustumCulled=!0)});const o=n?Yo.setFromObject(r,!0):Hd(r);o.getSize(ia);const c=e/(ia.y||1),l=new Ue;return r.scale.setScalar(c),r.position.set(-(o.min.x+ia.x/2)*c,-o.min.y*c,-(o.min.z+ia.z/2)*c),l.add(r),l.userData={url:i,height:e,width:ia.x*c,depth:ia.z*c},l}const ES="assets/characters/outfit/detective-outfit.glb";let Kf;const TS=()=>Kf??(Kf=fetch("./assets/characters/outfit/detective-outfit-fit.json").then(i=>{if(!i.ok)throw new Error("Could not load detective outfit fit data");return i.json()}).catch(i=>{throw Kf=null,i}));async function Lm(i){const[e,t]=await Promise.all([On(ES),TS()]),n=i.children[0],s=(i.userData.url||"").split("/").pop().replace(/\.glb$/i,""),a=t.robots[s]||t.generic,r=e.scene.clone(!0);r.name="detective-outfit";const o=new Ue;o.name="fedora",o.position.set(0,a.y,0),o.scale.setScalar(a.scale);const c=[];return r.traverse(l=>{if(/^FCMU_Hat/.test(l.name)&&!/^FCMU_Hat/.test(l.parent?.name||"")&&c.push(l),!l.isMesh)return;l.castShadow=!1;const d=a.morph&&l.morphTargetDictionary?l.morphTargetDictionary[a.morph]:void 0;l.morphTargetInfluences&&(l.morphTargetInfluences=l.morphTargetInfluences.slice().fill(0),d!=null&&(l.morphTargetInfluences[d]=1))}),c.forEach(l=>o.add(l)),r.add(o),i.userData.dressed=!0,n.add(r),r}async function AS(i,e,{size:t=.2,hold:n=-1.35,out:s=-.55}={}){const a=i.getObjectByName("BITTY_Elbow0"),r=a||i.getObjectByName("CONN_wrist_plug0")||i.getObjectByName("BITTY_Arm0");if(!r)return null;i.updateMatrixWorld(!0);const c=(await On(e)).scene.clone(!0),l=Hd(c).clone(),d=l.getSize(new A),u=Hd(r).clone(),h=new A((u.min.x+u.max.x)/2,u.min.y,(u.min.z+u.max.z)/2),f=r.getWorldScale(new A).x,g=new Ue;g.name="held-prop",g.position.copy(r.worldToLocal(h.clone())),i.updateMatrixWorld(!0);const b=r.getWorldQuaternion(new Gn),m=i.getWorldQuaternion(new Gn),p=a?n*.65:0;return g.quaternion.setFromEuler(new An(n-p,0,s)).multiply(new Gn().setFromEuler(new An(p,0,0))).invert().multiply(b.invert()).multiply(m),g.scale.setScalar(t/Math.max(d.x,d.y,d.z)/f),c.position.set(-(l.min.x+l.max.x)/2,-l.min.y,-(l.min.z+l.max.z)/2),g.add(c),r.add(g),i.userData.hold=n,i.userData.holdOut=s,g}const RS={police:["See the shield on the door? You're on the right block.","If Dispatch finds a way to file the coffee as evidence, we're sunk.","They asked for a description. Grey. Left. Last seen in good company.","Skye calls all hands, everybody shows. We're still waiting to hear what she needed.","We weren't programmed with very many dialogue options."],boutique:["Last week that jacket was in my cart. Now it's right there in the window judging me.","She puts the print somewhere different on each cut. Look at the sleeves.","A tote is a good way to see the whole print unfolded.","The three of us agreed to a rota. Nobody's synced theirs yet.","I still have the order email from my first print."],library:["You'd think returning a book would make my bag lighter. The librarian had recommendations.","I like the chair by the window. So does everybody else with a deadline.","If the network goes down, you can pull a drawer. Try doing that to a search bar.","If you find the index, see if my lunch is cross-referenced.","The purple one's quick. I only looked away to stamp a due date."],museum:["I told my lunch date I'd be five minutes. That was two exhibits ago.","Ask which part got built first. That's where the good stories start.","Excellent frame. Terrible grade.","I like the bit where you can tell somebody actually tried it.","My own ideas would need a fourth label. 'In a drawer somewhere.'"],voidworks:["Hear that? Somebody beat the score I left on the cabinet.","I saved before the hard part. At least, I remember saving.","You'd think a cereal box would be a soft landing.","Skye can tell you what one turn costs. I just know it cost me my lunch break.","If you smell glue, you found the prototype bench."],"slos-hq":["We forked the coffee rota. Now there are two empty pots.","One more lap before I go back to my desk.","Leevee. Two e's at the end. The sign printer asked twice.","The meeting minutes were short. The diff wasn't.","He has a favourite poster. Give him a second and you'll hear which one.","The prompt about the microwave? Please tell me nobody merged that."],studio:["You feel the kick through your shoes before you hear the track.","Walk toward the tower. If you hit water, you've overshot.","I used to pass that plaque without reading it. Then somebody asked me the year."],"usb-port":["Same case, same colour, entirely different adapter. Check the tag.","I keep saying I'll take the earlier ferry. This bench keeps winning.","That lost-property desk has a box for things nobody knows how to plug in."],club:["I put my request in before going out for air. I'm still four spots down.","They have the Sideband Reserve. I watch somebody else order it first.","Wait until the DJ spots you. That's your cue to ask for a track."],"bar-street":["One more minute on this patio, then I'm logging off.","She knows my usual. Saves us a whole handshake.","If you sit by the rail you can catch the last of the light."]},CS=["bitty","lemo","mintie","peachy","sunny","pip","dusk","moss"],PS=()=>Es;async function LS(i){if(i.talking||!i.holder.visible||!i.lines.length)return;i.talking=!0,i.holder.rotation.y=Math.atan2(pe.position.x-i.holder.position.x,pe.position.z-i.holder.position.z);const e=i.greeting>0&&i.repeatLine?i.repeatLine:i.lines[i.greeting%i.lines.length];i.greeting++;try{await Vt({do:"say",speaker:"street_resident",text:e})}finally{i.talking=!1}}en("residentHello",async i=>{await Vt({do:"greet",speaker:"street_resident",text:i.text})});const $f=CS.map(i=>`assets/characters/bitty/${i}.glb`),DS=new _t({visible:!1,side:nn});let As=null,Es=[],Ko=null,ra=0;async function IS(i,e,t){Dm();const n=ra;if(!e||!e.paths||!e.paths.length)return;const s=X.settings.quality==="low",a=Math.round((e.pedestrians??8)*(s?.5:1)),r=e.residents?.length?e.residents:$f,o=[];try{for(let u=0;u<a&&n===ra;u++){const h=r[(u*5+1)%r.length],f=await Ou(h,{height:1.2+u*3%4*.05});if(n!==ra)return;if(e.talkPositions?.length&&$f.includes(h))try{const g=await On(h.replace("characters/bitty","outlines/residents"));if(n!==ra)return;Pm(f);const b=g.scene.children.map(m=>{const p=f.getObjectByName(m.name.slice(5));if(!p||!m.isMesh)throw Error("Missing joint for "+m.name);const v=m.clone(!1);return v.material=DS,{joint:p,mesh:v}});for(const{joint:m,mesh:p}of b)m.add(p);f.userData.talkParts=b.map(m=>m.mesh)}catch(g){console.warn("Using original resident silhouette",h,g)}o.push(f)}}catch(u){console.warn(u);return}if(n!==ra)return;As=new Ue,As.name="ambient",i.add(As),o.forEach((u,h)=>{const f=new Ue;f.add(u),As.add(f),Pu(f,.55,1.6);const g=e.paths[h%e.paths.length].map(L=>new A().fromArray(L)),b=[];let m=0;for(let L=1;L<g.length;L++){const k=g[L].distanceTo(g[L-1]);b.push(k),m+=k}const p=h%e.paths.length,v=e.lanes?.[p]?.length?e.lanes[p]:[0],x=v[Math.floor(h/e.paths.length)%v.length],y=x<0?1:-1,D=.89+p*.14+Math.abs(x)*.05,T=Math.ceil((o.length-p)/e.paths.length),R=(Math.floor(h/e.paths.length)+(p%2?.79:.21))/T,I=e.greetings?.[h%e.greetings.length],_=RS[t]?.[h],M=[I,_].filter(Boolean);Es.push({id:h,greeting:0,lines:M,repeatLine:h===0?e.repeatLine:null,talking:!1,holder:f,body:u,path:g,lens:b,total:m,pi:p,s:m*R,dir:y,speed:D,base:D,lane:x,phase:h*1.7,wait:0})}),Re("ambient:ready");const c=new A,l=new A,d=new A;Ko=Cn(u=>{const h=ln.hour<6||ln.hour>22,f=performance.now()/1e3;for(let g=0;g<Es.length;g++){const b=Es[g];if(b.talking){fc(b.body,f,{talk:1},b.phase);continue}if(b.wait>0){b.wait-=u,b.wait<=0&&Es.some(T=>T!==b&&T.pi===b.pi&&!T.wait&&Math.abs(T.s-b.s)<4)&&(b.wait=.4),b.holder.visible=!1;continue}if(b.holder.visible=!(h&&g%2),!b.holder.visible)continue;let m=b.base;for(const T of Es){if(T===b||T.pi!==b.pi||T.lane!==b.lane||T.wait>0)continue;const R=(T.s-b.s)*b.dir;R>0&&R<3.6&&(m=Math.min(m,(T.talking?0:T.speed)*(R<2.15?0:.95)))}if(b.speed+=(m-b.speed)*Math.min(1,u*4),b.s+=b.dir*b.speed*u,b.s>b.total||b.s<0){b.s=b.dir>0?0:b.total,b.wait=2+g*1.3%4,b.speed=b.base;continue}let p=b.s,v=0;for(;v<b.lens.length-1&&p>b.lens[v];)p-=b.lens[v],v++;const x=b.path[v],y=b.path[v+1],D=b.lens[v]?p/b.lens[v]:0;if(c.lerpVectors(x,y,D),l.subVectors(y,x).normalize(),d.set(-l.z,0,l.x).multiplyScalar(b.lane),l.multiplyScalar(b.dir),b.holder.position.copy(c).add(d),b.holder.rotation.y=Math.atan2(l.x,l.z),Math.hypot(b.holder.position.x-pe.position.x,b.holder.position.z-pe.position.z)<1.6){b.holder.visible=!1;continue}fc(b.body,f,{walk:Math.min(1,b.speed/b.base),stride:b.base*5.5},b.phase)}})}function Dm(){ra++,Ko&&Ko(),Ko=null,Es=[],As&&As.removeFromParent(),As=null}const kS={from:[84.8,-328],to:[84.8,-282]},NS={from:[241.55,-380],to:[241.55,-292]},FS={from:[-342,-36.55],to:[-263,-36.55]},US={from:[-141.55,-356],to:[-141.55,-268]},OS={from:[359,-273.45],to:[442,-273.45]},BS={from:[311.55,-202],to:[311.55,-112]},zS={from:[85.6,-27],to:[85.6,23]},Gd={police:kS,boutique:NS,museum:FS,library:US,club:OS,voidworks:BS,"slos-hq":{from:[-65,-156.55],to:[-12,-156.55]},"bar-street":{from:[180,-36.55],to:[226,-36.55]},studio:zS,"usb-port":{from:[128,80.2],to:[224,80.2],only:["curb"]}},HS=[[0,.265],[46,.265]],GS=[[0,.267],[37.435,.267],[37.714,.276],[38.832,.39],[41.067,.395],[41.625,.373],[42.743,.267],[47.213,.267],[48.33,.379],[48.61,.392],[50.565,.395],[51.124,.384],[52.241,.27],[52.521,.267],[88,.267]],VS=[[0,.265],[54.714,.265],[55.83,.38],[56.389,.395],[58.343,.394],[58.622,.384],[59.739,.27],[64.205,.267],[64.484,.283],[65.601,.389],[67.834,.395],[68.113,.391],[69.23,.28],[69.509,.265],[79,.265]],WS=[[0,.267],[13.41,.267],[13.689,.273],[14.806,.388],[15.086,.395],[17.321,.391],[17.6,.376],[18.717,.267],[23.187,.267],[24.305,.376],[24.863,.395],[27.098,.387],[28.216,.272],[28.495,.267],[73.473,.267],[73.752,.279],[74.87,.391],[75.149,.395],[77.384,.389],[78.781,.267],[83.251,.269],[84.368,.383],[84.927,.395],[86.883,.393],[87.162,.381],[88,.295]],qS=[[0,.265],[13.694,.265],[14.811,.378],[15.37,.395],[17.606,.385],[18.724,.272],[19.003,.267],[23.195,.267],[23.475,.282],[24.593,.389],[26.828,.395],[27.108,.391],[28.226,.28],[28.505,.265],[83,.265]],jS=[[0,.267],[39.41,.267],[39.689,.273],[40.807,.388],[43.043,.395],[43.602,.376],[44.72,.267],[49.193,.267],[50.311,.377],[50.59,.392],[52.826,.395],[53.106,.386],[54.224,.272],[54.503,.267],[90,.267]],XS=[[0,.265],[22.346,.265],[22.626,.3],[28.771,.3],[29.05,.305],[29.33,.327],[31.006,.479],[31.844,.519],[47.486,.52],[48.324,.548],[50,.659]],Jf={police:HS,boutique:GS,museum:VS,library:WS,club:qS,voidworks:jS,"slos-hq":[[0,.37],[.837,.37],[1.116,.265],[53,.265]],"bar-street":[[0,.265],[46,.265]],studio:XS,"usb-port":[[0,.2],[96,.2]]};function Qf(i,e){if(e<=0)return i[0][1];for(let t=1;t<i.length;t++){const[n,s]=i[t];if(e>n)continue;const[a,r]=i[t-1];return gt.lerp(r,s,(e-a)/(n-a))}return i[i.length-1][1]}const YS=i=>Object.hasOwn(Gd,i);function KS(i){const e=[],t=[];i.traverse(n=>{n.isMesh&&/tyre/i.test(n.name||n.parent?.name||"")&&t.push(n)});for(const n of t){const s=n.geometry,a=s.attributes.position,r=s.index;if(!a)continue;const o=(r?r.count:a.count)/3;if(o<8)continue;s.computeBoundingBox();const c=s.boundingBox.getCenter(new A),l=[[],[],[],[]],d=h=>r?r.getX(h):h;for(let h=0;h<o;h++){const f=d(h*3),g=d(h*3+1),b=d(h*3+2),m=(a.getX(f)+a.getX(g)+a.getX(b))/3,p=(a.getZ(f)+a.getZ(g)+a.getZ(b))/3;l[(m>c.x?1:0)+(p>c.z?2:0)].push(f,g,b)}if(l.some(h=>!h.length))continue;const u=new Ue;u.name="Wheels (runtime split)",u.position.copy(n.position),u.quaternion.copy(n.quaternion),u.scale.copy(n.scale);for(const h of l){const f=new Yt,g=new Rn;for(const p of Object.keys(s.attributes)){const v=s.attributes[p],x=v.itemSize,y=new Float32Array(h.length*x);h.forEach((D,T)=>{for(let R=0;R<x;R++)y[T*x+R]=v.getComponent(D,R)}),f.setAttribute(p,new dn(y,x))}f.computeBoundingBox(),g.copy(f.boundingBox);const b=g.getCenter(new A);f.translate(-b.x,-b.y,-b.z);const m=new j(f,n.material);m.position.copy(b),m.name="Wheel",u.add(m),e.push({wheel:m,radius:Math.max((g.max.y-g.min.y)/2*Math.abs(n.scale.y||1),.12)})}n.parent.add(u),n.visible=!1}return e}const Ll=["coupe","hatchback","city-pod"],Im={coupe:[4.69,2.44],hatchback:[4.68,2.4],"city-pod":[3.58,2.51]},Dl=new Map;function km(i,e){const[t,n]=Im[i],s=ln.hour>=15,a=[i,e,s].join("/"),r=t+5.2,o=n+5.2;if(!Dl.has(a)){const l=document.createElement("canvas");l.width=l.height=192;const d=l.getContext("2d"),u=l.width/r,h=l.height/o,f=(s?246:115)*Math.PI/180,g=s?1.85:1.08,b=-Math.cos(f)*g,m=Math.sin(f)*g,p=b*Math.cos(e)-m*Math.sin(e),v=b*Math.sin(e)+m*Math.cos(e);d.translate(96,96),d.scale(u,h),d.fillStyle="rgba(18,24,34,.58)",d.filter="blur(2px)",d.beginPath(),d.roundRect(-t*.49+p,-n*.46+v,t*.98,n*.92,n*.32),d.fill(),d.filter="blur(1px)",d.fillStyle="rgba(11,14,18,.49)",d.beginPath(),d.roundRect(-t*.46,-n*.43,t*.92,n*.86,.4),d.fill(),d.fillStyle="rgba(12,14,17,.86)";for(const y of[-t*.31,t*.31])for(const D of[-n*.41,n*.41])d.beginPath(),d.ellipse(y,D,.36,.25,0,0,Math.PI*2),d.fill();const x=new mi(l);x.colorSpace=Ze,Dl.set(a,x)}const c=new j(new qt(r,o),new _t({map:Dl.get(a),transparent:!0,depthWrite:!1,toneMapped:!1}));return c.name="Tyre contact and body shadow",c.rotation.x=-Math.PI/2,c.position.y=.012,c}function $S(i,e,t){const n=Gd[e];if(!n)return;const s=new A(n.from[0],0,n.from[1]),a=new A(n.to[0],0,n.to[1]),r=s.distanceTo(a),o=a.clone().sub(s).normalize(),c=new Ue;c.name="District traffic",c.userData.distantScenery=!0,i.add(c);let l=!0,d=null,u,h,f=[],b=Object.keys(Gd).indexOf(e)%Ll.length,m=r*.22,p=0;async function v(){const y=Ll[b];try{const D=await On("assets/city/traffic/"+y+".glb");if(!l)return;d=D.scene.clone(!0),d.rotation.y=Math.atan2(-o.z,o.x),f=KS(d),h=km(y,d.rotation.y),d.add(h),d.visible=!1,c.add(d),Pu(d,Math.max(...Im[y])/2,2.3)}catch(D){l&&console.warn("District traffic model unavailable",y,D)}}function x(){d?.removeFromParent(),h?.material.dispose(),h?.geometry.dispose(),h=null,d=null,f=[]}v(),u=Cn(y=>{if(c.visible=!n.only||n.only.includes(t()),!c.visible||!d||pe.position.y>14){d&&(d.visible=!1);return}if(p>0){p-=y;return}const D=4.4+b*.45;m+=y*D;for(const _ of f)_.wheel.rotation.z-=y*D/_.radius;if(m>r){x(),b=(b+1)%Ll.length,m=0,p=2.8+b*1.2,v();return}d.position.copy(s).addScaledVector(o,m);const T=b===2?2.21:2.83,R=Qf(Jf[e],m+T/2),I=Qf(Jf[e],m-T/2);d.position.y=(R+I)/2,d.rotation.z=Math.atan2(R-I,T),d.visible=!0}),i.userData.releaseTraffic=()=>{l=!1,u(),x(),c.removeFromParent()}}let Jt=null,Lr=null,da=0;const JS=(()=>{const i=document.createElement("canvas");i.width=i.height=64;const e=i.getContext("2d"),t=e.createRadialGradient(32,32,0,32,32,32);t.addColorStop(0,"rgba(255,240,210,1)"),t.addColorStop(.25,"rgba(255,200,130,0.55)"),t.addColorStop(1,"rgba(255,170,90,0)"),e.fillStyle=t,e.fillRect(0,0,64,64);const n=new mi(i);return n.colorSpace=Ze,n})(),QS=/terminal|pendant|hall|canopy|ceiling|interior/i;async function ZS(i){const e=await fetch("./"+i);if(!e.ok)throw new Error(`Could not load ${i}`);return e.json()}async function ew(i,e,t,n,s){const{RectAreaLightUniformsLib:a}=await vp(async()=>{const{RectAreaLightUniformsLib:u}=await import("./RectAreaLightUniformsLib-zWALyqEO.js");return{RectAreaLightUniformsLib:u}},__vite__mapDeps([0,1,2]),import.meta.url);if(t!==da)return;if(a.init(),Jt=new Ue,Jt.name="civic-fixtures",i.add(Jt),s){for(const u of s){const h=u.map(v=>e.find(x=>x.name===v)),[f,g]=h,b=f.size[0],m=f.size[1]+Math.abs(f.at[2]-g.at[2]),p=new Lf(new De().fromArray(f.color),(f.energy+g.energy)*n*.4/(b*m),b,m);p.position.fromArray(f.at).lerp(new A().fromArray(g.at),.5),p.quaternion.fromArray(f.rotation),Jt.add(p)}return}const r=e.map(u=>({...u,position:new A(...u.at)})),o=X.settings.quality==="low"||matchMedia("(pointer: coarse)").matches?4:8,c=r.slice(0,o).map(()=>new Lf);Jt.add(...c);const l=new A(1/0,0,0),d=()=>{l.distanceToSquared(pe.position)<1||(l.copy(pe.position),r.sort((u,h)=>u.position.distanceToSquared(l)-h.position.distanceToSquared(l)),c.forEach((u,h)=>{const f=r[h];u.position.copy(f.position),u.quaternion.fromArray(f.rotation),u.color.fromArray(f.color),[u.width,u.height]=f.size,u.intensity=f.energy*n*.4/Math.max(.1,u.width*u.height)}))};d(),Lr=Cn(d)}function tw(i,e){if(!(!i&&!e))return ZS(e||i).then(async t=>(e&&t.lights?.some(n=>n.type==="AREA"&&n.rotation&&n.size)&&await vp(()=>import("./RectAreaLightUniformsLib-zWALyqEO.js"),__vite__mapDeps([0,1,2]),import.meta.url),t)).catch(t=>(console.warn(t),null))}async function nw(i,e,t,n=1,s){Nm();const a=da;if(!e&&!t)return;let r,o;try{const v=await s;if(!v||a!==da)return;if(t){if(a!==da)return;if(o=v.fixedSet,v.lights.length&&v.lights.every(x=>x.type==="AREA"&&x.rotation&&x.size)){await ew(i,v.lights,a,n,v.ceilingPairs);return}r=v.lights.filter(x=>x.energy>1).map(x=>{const y=new A().fromArray(x.dir||[0,-1,0]),D=QS.test(x.name+" "+(x.group||""));return{p:new A().fromArray(x.at).addScaledVector(y,x.type==="AREA"?.4:0),indoor:D,street:!D,color:new De().fromArray(x.color||[1,.85,.65]),w:x.energy}})}else r=v.lamps.map(x=>({p:new A().fromArray(x.at),street:x.kind!=="fitting"}))}catch(v){console.warn(v);return}if(a!==da)return;if(Jt=new Ue,Jt.name="night-lights",i.add(Jt),o){for(const v of r){const x=new Gr(v.color,v.w*n/10,16,1.6);x.position.copy(v.p),Jt.add(x)}for(const v of o.spots){const x=new hm(v.color,v.intensity,15,.54,.72,2);x.position.fromArray(v.at),x.target.position.fromArray(v.target),Jt.add(x,x.target)}return}const c=new Yt().setFromPoints(r.map(v=>v.p)),l=new Su({map:JS,size:1.6*n,sizeAttenuation:!0,transparent:!0,depthWrite:!1,blending:Gl,opacity:0,fog:!1}),d=new rm(c,l);d.frustumCulled=!1,Jt.add(d);const u=X.settings.quality==="low"||matchMedia("(pointer: coarse)").matches?4:10,h=Array.from({length:Math.min(u,r.length)},()=>{const v=new Gr(16763274,0,16,1.6);return Jt.add(v),v});let f=-1,g=null;const b=v=>{const x=pe.position,D=(v?r:r.filter(T=>T.indoor)).slice().sort((T,R)=>T.p.distanceToSquared(x)-R.p.distanceToSquared(x)).slice(0,u);h.forEach((T,R)=>{const I=D[R];if(!I){T.userData.k=0;return}T.position.copy(I.p),T.userData.l=I,I.color?T.color.copy(I.color):T.color.set(16763274),T.userData.k=I.w?Math.min(3.2,I.w/280):I.street?1:.45,T.distance=I.w?I.indoor?22:16:I.street?18:9})},m=new A(1/0,0,0),p=r.some(v=>v.indoor);Lr=Cn(()=>{const v=gt.smoothstep(ln.night,.15,.8);if(Jt.visible=v>.01||p,!Jt.visible)return;const x=v>.01;(m.distanceToSquared(pe.position)>4||f<0||x!==g)&&(m.copy(pe.position),b(x),f=1,g=x),l.opacity=v*.9;for(const y of h)y.intensity=28*n*(y.userData.l?.indoor?1:v)*(y.userData.k??1)})}function Nm(){da++,Lr&&Lr(),Lr=null,Jt&&(Jt.traverse(i=>{i.geometry?.dispose?.(),i.material?.dispose?.()}),Jt.removeFromParent()),Jt=null}function Ht(i,e,t,n,s,a,r=500,o='"Segoe UI", sans-serif'){let c=a;i.font=`${r} ${c}px ${o}`,c*=Math.min(1,s/Math.max(1,i.measureText(e).width)),i.font=`${r} ${c}px ${o}`,i.fillText(e,t,n)}const iw={police:["#102134","#30475c","#efbd74"],studio:["#1f1b2c","#40394c","#fdc48c"],lab:["#101d23","#233e44","#87d9c2"],shop:["#2c1d31","#513748","#f8bacc"],museum:["#27261f","#474435","#e7d19b"],office:["#182332","#2c4153","#97d9e5"],port:["#122a31","#264850","#ffd394"],home:["#251e30","#483348","#edbed2"],music:["#271d23","#452d36","#f4bd8e"]};function sw(i,e){const{ctx:t,canvas:n,def:s}=i,a=n.width,r=n.height,[o,c,l]=iw[s.station.palette],d=a*.045,u=a-2*d;if(s.station.centerColumn){const m=a*s.station.centerColumn,p=(a-m)/2,v=m*.06;t.textBaseline="middle",t.textAlign="left",t.fillStyle=o,t.fillRect(0,0,a,r),t.fillStyle=c,t.fillRect(0,r*.13,a,r*.025),t.fillRect(p,r*.2,m,r*.59),t.fillStyle=l,t.fillRect(p,r*.2,m,r*.012),Ht(t,s.station.service,p+v,r*.259,m-2*v,r*.044,600),t.fillStyle="#fff2df",Ht(t,s.title,p+v,r*.383,m-2*v,r*.088,650),s.rows.forEach((x,y)=>Ht(t,x.join("  /  "),p+v,r*(.51+y*.09),m-2*v,r*.056)),s.station.footer&&(t.fillStyle=l,Ht(t,s.station.footer,p+v,r*.855,m-2*v,r*.054,650)),i.tex.needsUpdate=!0;return}if(s.station.poweredDown){t.fillStyle="#0a1012",t.fillRect(0,0,a,r),i.tex.needsUpdate=!0;return}if(t.textAlign="left",t.textBaseline="middle",t.fillStyle=o,t.fillRect(0,0,a,r),t.fillStyle=c,t.fillRect(0,0,a,r*.17),t.fillStyle=l,t.fillRect(0,0,a,r*.013),Ht(t,s.station.service,d,r*.091,u,r*.081,650),s.station.palette==="studio"){t.fillStyle="#fff2df",Ht(t,s.title,d,r*.287,u,r*.154,650),s.rows.forEach(([m,p],v)=>{const x=r*(.51+v*.24);t.fillStyle=c,t.fillRect(d,x-r*.088,u*.455,r*.176),t.fillRect(a*.57,x-r*.088,u*.42,r*.176),t.fillStyle=l,t.fillRect(d,x-r*.088,a*.006,r*.176),t.fillRect(a*.467,x,a*.095,r*.008),t.beginPath(),t.moveTo(a*.565,x),t.lineTo(a*.549,x-r*.035),t.lineTo(a*.549,x+r*.035),t.fill(),t.fillStyle="#fff2df",Ht(t,m,d+a*.025,x,u*.4,r*.096),Ht(t,p,a*.59,x,u*.37,r*.096)}),t.fillStyle=l,Ht(t,s.station.status,d,r*.937,u,r*.075),i.tex.needsUpdate=!0;return}if(s.station.palette==="home"){const m=s.id==="workstation-code";t.fillStyle="#f8e7ee",Ht(t,s.title,d,r*.3,u,r*.12,600),s.rows.forEach((p,v)=>{const x=r*(.47+v*.15);m&&(t.fillStyle=l,Ht(t,String(v+1),d,x,a*.04,r*.066)),t.fillStyle="#f3e9e6",Ht(t,p,d+(m?a*.073:0),x,u*.9,r*.083,500,m?"Consolas, monospace":"Georgia, serif")}),t.fillStyle=l,Ht(t,s.station.status,d,r*.91,u,r*.054),i.tex.needsUpdate=!0;return}if(s.station.wide){t.fillStyle="#fff2df",Ht(t,s.title,d,r*.47,u*.43,r*.32,650),s.rows.forEach((m,p)=>Ht(t,m.join("    /    "),a*.5,r*(.33+p*.26),a*.45,r*.17)),t.fillStyle=l,Ht(t,s.station.status,d,r*.83,u*.45,r*.11),i.tex.needsUpdate=!0;return}t.fillStyle="#fff2df",Ht(t,s.title,d,r*.305,u,r*.161,650);const h=s.rowsVisible||s.rows.length,f=s.rows.slice(e*h,(e+1)*h),g=r*.43/h,b=i.art?u*.6:u;if(i.art){const m=u*.36,p=r*.405,v=Math.min(m/i.art.width,p/i.art.height),x=i.art.width*v,y=i.art.height*v;t.drawImage(i.art,a-d-(m+x)/2,r*.438+(p-y)/2,x,y)}f.forEach((m,p)=>{const v=Array.isArray(m)?m:[m],x=r*.437+(p+.5)*g;t.fillStyle=c,t.fillRect(d,r*.437+p*g,b,Math.max(1,r*.003)),t.fillStyle="#e2eceb",Ht(t,v[0],d,x,b*(v.length>1?.54:1),g*.61,500),v.length>1&&(t.fillStyle=l,Ht(t,v.slice(1).join("  /  "),d+b*.57,x,b*.43,g*.58,600))}),t.fillStyle=c,t.fillRect(0,r*.9,a,r*.1),t.fillStyle=l,Ht(t,s.station.status,d,r*.95,u,r*.058,600),i.tex.needsUpdate=!0}function aw(){const i=document.createElement("canvas");i.width=1024,i.height=340;const e=i.getContext("2d");e.fillStyle="#253034",e.fillRect(0,0,1024,340);const t=["1 2 3 4 5 6 7 8 9 0 - + Del","Tab Q W E R T Y U I O P [ ]","Caps A S D F G H J K L ; Enter","Shift Z X C V B N M , . / Shift","Ctrl Alt Space Alt Ctrl"],n=[],s=[],a=[];t.forEach((g,b)=>{const m=g.split(" "),p=m.map(y=>y==="Space"?7:y.length>1?1.55:1),v=992/p.reduce((y,D)=>y+D,0);let x=16;m.forEach((y,D)=>{const T=v*p[D]-6,R=9+b*65;e.fillStyle="#10191d",e.fillRect(x,R+4,T,56),e.fillStyle=y.length>1?"#415657":"#d9d8cc",e.fillRect(x,R,T,51),e.fillStyle=y.length>1?"#eef3df":"#263136",e.font='600 24px "Segoe UI",sans-serif',e.textAlign="center",e.fillText(y,x+T/2,R+34);const I=n.length/3;for(const[_,M]of[[0,0],[.004,0],[.012,5]])for(const[L,k]of[[!1,!0],[!0,!0],[!0,!1],[!1,!1]]){const P=L?x+T-M:x+M,B=k?R+51-M:R+M;n.push((P/1024-.5)*.426,_,(B/340-.5)*.145),s.push(P/1024,1-B/340)}for(let _=0;_<2;_++)for(let M=0;M<4;M++){const L=I+_*4+M,k=I+_*4+(M+1)%4;a.push(L,k,k+4,L,k+4,L+4)}a.push(I+8,I+9,I+10,I+8,I+10,I+11),x+=T+6})});const r=new mi(i);r.colorSpace=Ze,r.anisotropy=4;const o=new Wn({color:2701370,roughness:.7}),c=new Wn({map:r,roughness:.72}),l=new Yt;l.setAttribute("position",new Tt(n,3)),l.setAttribute("uv",new Tt(s,2)),l.setIndex(a),l.computeVertexNormals();const d=new j(l,c),u=new Ue;u.add(d);const h=new j(new Cm(.06,.029,.092,2,.012),o);h.position.set(.268,-.0155,0);const f=new j(new It(.008,.008,.009,12),c.clone());return f.material.map=null,f.material.color.setHex(6653823),f.rotation.z=Math.PI/2,f.position.set(.268,-.0035,-.017),u.add(h,f),u}const Vd=new Set;function Lc(){for(const i of Vd)document.hidden||X.paused||document.body.classList.contains("panel-open")?i.pause():i.play().catch(()=>{})}document.addEventListener("visibilitychange",Lc);document.addEventListener("pointerdown",Lc,{passive:!0});Ge("pause:changed",Lc);function rw(i,e){const t=document.createElement("video");t.src="./"+e.video,t.muted=!0,t.loop=!0,t.playsInline=!0,t.preload="auto",t.dataset.worldTv=e.id;const n=new d1(t);n.colorSpace=Ze;const s=new _t({map:n,toneMapped:!1}),a=new j(new qt(...e.size),s);a.name="screen:"+e.id,a.position.fromArray(e.at),a.rotation.y=gt.degToRad(e.yaw||0),i.add(a),Vd.add(t);const r=()=>{e.poster&&new Ja().load("./"+e.poster,c=>{c.colorSpace=Ze,s.map=c,s.needsUpdate=!0})};t.addEventListener("error",r,{once:!0});const o=Cn(()=>{const c=document.hidden||X.paused||document.body.classList.contains("panel-open");c&&!t.paused&&t.pause(),!c&&t.paused&&!t.error&&t.play().catch(()=>{}),t.paused||Mm()});return Lc(),()=>{o(),Vd.delete(t),t.pause(),t.removeAttribute("src"),t.load()}}const Zf=512,ep={board:{bg:"#07110f",head:"#0f2a24",title:"#f2b46a",text:"#d9efe6",dim:"#6f9187",ok:"#7fe0b0",warn:"#f2b46a",bad:"#ff7a6b"},desk:{bg:"#0b1416",head:"#173036",title:"#9fe3ff",text:"#e4f2f5",dim:"#7a979e",ok:"#7fe0b0",warn:"#f2c46a",bad:"#ff7a6b"}},ow=[[/landed|arrived|ready|on time|claimed|open/i,"ok"],[/delay|wait|check|held|hold/i,"warn"],[/lost|cancel|corrupt|missing/i,"bad"]];let $o=null,Jn=null;const Jo=[],Fm=[];function Il(i,e){if(i.def.station)return sw(i,e);const{ctx:t,canvas:n}=i,s=n.width,a=n.height,r=ep[i.def.style]||ep.board;t.fillStyle=r.bg,t.fillRect(0,0,s,a);const o=Math.round(a*(i.def.rowsVisible>3?.2:.3));t.fillStyle=r.head,t.fillRect(0,0,s,o),t.textBaseline="middle",t.fillStyle=r.title,t.font=`700 ${Math.round(o*.58)}px "Segoe UI", system-ui, sans-serif`;const c=s*(i.def.subtitle?.63:1)-o*.7;t.fillText(i.def.title||"",o*.35,o/2,c),i.def.subtitle&&(t.fillStyle=r.dim,t.font=`500 ${Math.round(o*.36)}px "Segoe UI", system-ui, sans-serif`,t.textAlign="right",t.fillText(i.def.subtitle,s-o*.35,o/2,s*.34),t.textAlign="left");const l=i.def.rows||[],d=i.def.rowsVisible||l.length||1,u=i.def.columns||[1],h=u.reduce((b,m)=>b+m,0),f=(a-o)/d,g=o*.35;t.font=`500 ${Math.round(f*.6)}px "Cascadia Mono", Consolas, monospace`;for(let b=0;b<d;b++){const m=l[(e*d+b)%Math.max(1,l.length)];if(!m)break;const p=o+f*(b+.5);b%2&&(t.fillStyle="rgba(255,255,255,0.035)",t.fillRect(0,o+f*b,s,f));let v=g;const x=Array.isArray(m)?m:[m];x.forEach((y,D)=>{const T=(s-g*2)*(u[D]??1)/h;let R=D===0&&x.length>1?r.dim:r.text;if(D===x.length-1&&x.length>1){for(const[I,_]of ow)if(I.test(y)){R=r[_];break}}t.fillStyle=R,t.save(),t.beginPath(),t.rect(v,p-f/2,T-g*.4,f),t.clip(),t.fillText(String(y),v,p,T-g*.4),t.restore(),v+=T})}i.tex.needsUpdate=!0}function cw(i,e){const[t,n]=e.size,s=document.createElement("canvas");s.width=768,s.height=Math.round(768*n/t);const a=s.getContext("2d"),r=s.width,o=s.height;a.fillStyle="#bb9b62",a.fillRect(0,0,r,o),a.strokeStyle="#695536",a.lineWidth=3,a.strokeRect(18,18,r-36,o-36),a.textAlign="center",a.fillStyle="#29231c",a.font="bold 56px Georgia, serif",a.fillText(e.title,r/2,o*.33,r*.86),a.font="bold 55px Georgia, serif",a.fillText("Tenth anniversary · "+(Number(K.game.config[e.yearKey])+10),r/2,o*.61),a.font="italic 34px Georgia, serif",a.fillText(e.inscription,r/2,o*.82);for(const h of[32,r-32])for(const f of[32,o-32])a.fillStyle="#645238",a.beginPath(),a.arc(h,f,6,0,Math.PI*2),a.fill(),a.strokeStyle="#28221b",a.beginPath(),a.moveTo(h-3,f+3),a.lineTo(h+3,f-3),a.stroke();const c=new mi(s);c.colorSpace=Ze,c.anisotropy=4;const l=new Ue;l.name=e.id,l.position.fromArray(e.at),l.rotation.y=gt.degToRad(e.yaw||0);const d=new j(new mt(t,n,.024),new Wn({color:8481351,metalness:.45,roughness:.55}));d.position.z=.012;const u=new j(new qt(t-.008,n-.008),new Wn({map:c,metalness:.28,roughness:.63}));if(u.position.z=.025,l.userData.highlightFor=e.highlightFor,e.standOff)for(const h of[-n*.31,n*.31]){const f=new j(new mt(t*.89,.06,e.standOff),d.material);f.position.set(0,h,-e.standOff/2),l.add(f)}l.add(d,u),i.add(l)}function lw(i,e){if(Um(),!Array.isArray(e)||!e.length)return;Jn=new Ue,Jn.name="screens",i.add(Jn);let t;for(const n of e){if(n.video){Fm.push(rw(Jn,n));continue}if(n.station?.keyboard){t??(t=aw());const f=t.clone();f.position.fromArray(n.station.keyboard),f.rotation.y=gt.degToRad(n.yaw||0),Jn.add(f)}if(n.style==="brass"){cw(Jn,n);continue}const[s,a]=n.size,r=document.createElement("canvas"),o=Math.min(n.station?Math.max(Zf,800/s):Zf,2048/s,1024/a);r.width=Math.max(1,Math.round(s*o)),r.height=Math.max(1,Math.round(a*o));const c=r.getContext("2d"),l=new mi(r);l.colorSpace=Ze,l.anisotropy=4;const d=new _t({map:l,toneMapped:!1,polygonOffset:!0,polygonOffsetFactor:-2,polygonOffsetUnits:-2});d.color.setScalar(n.brightness??.9);const u=new j(new qt(s,a),d);if(u.position.fromArray(n.at),u.rotation.y=gt.degToRad(n.yaw||0),u.name=`screen:${n.id}`,u.userData.highlightFor=n.highlightFor,n.station?.rearMount){const f=new j(new mt(s+.018,a+.018,.018),new Wn({color:2700084,roughness:.65}));f.position.copy(u.position),f.rotation.copy(u.rotation),f.translateZ(-.01),Jn.add(f)}Jn.add(u);const h={def:n,ctx:c,canvas:r,tex:l,mesh:u,page:0,t:0};if(Jo.push(h),Il(h,0),n.station?.image){const f=new Image;f.onload=()=>{Jo.includes(h)&&(h.art=f,Il(h,h.page))},f.src="./"+n.station.image}}$o=Cn(n=>{for(const s of Jo){const a=Math.ceil((s.def.rows?.length||0)/(s.def.rowsVisible||1e9));a<2||(s.t+=n,s.t>(s.def.pageSeconds||6)&&(s.t=0,s.page=(s.page+1)%a,Il(s,s.page)))}})}function Um(){for(const e of Fm.splice(0))e();$o&&$o(),$o=null;const i=new Set;Jn?.traverse(e=>{if(e.isMesh){i.add(e.geometry);for(const t of[].concat(e.material))i.add(t),t.map&&i.add(t.map)}});for(const e of i)e.dispose();Jn?.removeFromParent(),Jn=null,Jo.length=0}const Dc="./",Xe={voice:null,music:null,ambience:null,sample:null},hi=i=>X.settings.master*(X.settings[i]??1),Om=(i="")=>Math.max(1.6,i.split(/\s+/).length/2.7+.5);function kl(i,e){const t=Ea()+i;let n;const s=()=>{const a=t-Ea();a<=0&&!X.paused?e():n=setTimeout(s,Math.max(25,Math.min(200,a)))};return s(),()=>clearTimeout(n)}const ss=new Set;Ge("pause:changed",i=>{if(i)for(const e of Object.values(Xe))e&&!e.paused&&(ss.add(e),e.pause());else{for(const e of ss)Object.values(Xe).includes(e)&&ds(e).catch(()=>{});ss.clear()}});function ds(i){return X.paused?(ss.add(i),Promise.resolve()):i.play()}function dw(i){if(!i)return null;if(typeof i=="string")return i;const e=X.save.detective&&X.save.detective.voice;return i[e]||i.default||null}function Bu(i,e){Jr();const t=dw(i),n=Om(e);if(!t)return{duration:n,done:new Promise(o=>kl(n*1e3,o)),real:!1};const s=new Audio(Dc+t);s.volume=hi("voice"),Xe.voice=s;let a;const r=new Promise(o=>a=o);return s.onended=()=>a(),s.onerror=()=>{console.warn("voice file missing",t),kl(n*1e3,a)},ds(s).catch(()=>kl(n*1e3,a)),{duration:n,done:r,real:!0,el:s}}function Jr(){Xe.voice&&(Xe.voice.pause(),Xe.voice=null)}function pc(i,e){if(Xe[i]&&Xe[i].dataset.src===e)return;if(Xe[i]&&Xe[i].pause(),!e){Xe[i]=null;return}const t=new Audio(Dc+e);t.loop=!0,t.dataset.src=e,t.volume=(i==="ambience"?hi("sfx")*Bm(e):hi("music"))*(cn.ducked?Zo:1),Xe[i]=t,document.hidden?Qo.add(t):ds(t).catch(()=>{})}const uw=.4,hw={"assets/audio/amb/city.mp3":.22};function Bm(i=Xe.ambience?.dataset.src){const e=document.body.classList;return(hw[i]??uw)*(e.contains("in-cinematic")?0:e.contains("at-title")?.5:e.contains("in-finale")?.35:1)}const Qo=new Set;document.addEventListener("visibilitychange",()=>{if(document.hidden)for(const i of[Xe.music,Xe.ambience])i&&!i.paused&&(Qo.add(i),i.pause());else{for(const i of Qo)(i===Xe.music||i===Xe.ambience)&&ds(i).catch(()=>{});Qo.clear()}});function mc(){removeEventListener("pointerdown",mc,!0),removeEventListener("keydown",mc,!0);for(const i of[Xe.music,Xe.ambience])i&&i.paused&&!document.hidden&&!ss.has(i)&&ds(i).catch(()=>{});try{Pt=Pt||new(window.AudioContext||window.webkitAudioContext)}catch{}}addEventListener("pointerdown",mc,!0);addEventListener("keydown",mc,!0);new MutationObserver(()=>{Xe.ambience&&cs()}).observe(document.body,{attributes:!0,attributeFilter:["class"]});function zm(i){return Xe.sample&&Xe.sample.pause(),Xe.sample=i,cs(),{play:()=>(i.error&&i.load(),ds(i)),pause:()=>{ss.delete(i),i.pause()},dispose:()=>{ss.delete(i),i.pause(),Xe.sample===i&&(Xe.sample=null),cs()}}}let Ic=1,Hm=0,Is=null;function Gm(i){kc(),pc("music",null);const e=new Audio(Dc+i.src);e.dataset.src=i.src,e.preload="auto",Xe.music=e,Is="verse",Ic=i.verseGain,e.currentTime=i.verseStart,e.ontimeupdate=()=>{Is==="verse"&&e.currentTime>=i.verseEnd&&(e.currentTime=i.verseStart+(e.currentTime-i.verseEnd))},cs(),ds(e).catch(()=>{})}function fw(i){Is||Gm(i);const e=Xe.music;Is="chorus",e.ontimeupdate=null,e.currentTime=i.chorusDownbeat-i.pickupSeconds,ds(e).catch(()=>{});const t=()=>{const n=Math.min(1,Math.max(0,1-(i.chorusDownbeat-e.currentTime)/i.pickupSeconds));Ic=i.verseGain+(1-i.verseGain)*n,cs(),Is==="chorus"&&n<1&&!e.error&&(Hm=requestAnimationFrame(t))};return t(),e}function kc(){cancelAnimationFrame(Hm),Is&&Xe.music&&(ss.delete(Xe.music),Xe.music.pause(),Xe.music.ontimeupdate=null,Xe.music=null),Is=null,Ic=1}let Pt;function sn(i=660,e=.06,t="sine",n=.05){try{Pt=Pt||new(window.AudioContext||window.webkitAudioContext);const s=Pt.createOscillator(),a=Pt.createGain();s.type=t,s.frequency.value=i,a.gain.value=n*hi("sfx"),a.gain.exponentialRampToValueAtTime(1e-4,Pt.currentTime+e),s.connect(a).connect(Pt.destination),s.start(),s.stop(Pt.currentTime+e)}catch{}}const Vm={step:{files:["step-1","step-2","step-3"],gain:.5},paper:{files:["paper-1","paper-2"],gain:.5},pin:{files:["pin"],gain:.5},string:{files:["string"],gain:.45},tick:{files:["music/tick"],gain:.1},click:{files:["music/click"],gain:.3},choice:{files:["music/choice"],gain:.35},confirm:{files:["music/confirm"],gain:.55},enter:{files:["music/enter"],gain:.5},exit:{files:["music/exit"],gain:.5},travel:{files:["music/travel"],gain:.45},evidence:{files:["music/evidence"],gain:.3},clue:{files:["music/clue"],gain:.48},deduce:{files:["music/deduce"],gain:.5},achievement:{files:["music/achievement"],gain:.55},key:{files:["music/key"],gain:.3},unlock:{files:["music/unlock"],gain:.55},denied:{files:["music/denied"],gain:.25},unlink:{files:["music/unlink"],gain:.35}},Wd=new Map,tp={};let np=!1;function pw(){if(!np){np=!0;try{const i=new(window.OfflineAudioContext||window.webkitOfflineAudioContext)(2,1,44100);for(const e of Object.values(Vm).flatMap(t=>t.files))fetch(`${Dc}assets/audio/sfx/${e}.mp3`).then(t=>t.ok?t.arrayBuffer():Promise.reject(new Error(`sfx ${e}: ${t.status}`))).then(t=>new Promise((n,s)=>{const a=i.decodeAudioData(t,n,s);a?.catch&&a.catch(s)})).then(t=>Wd.set(e,t)).catch(t=>console.warn("sound effect unavailable",e,t?.message||t))}catch{}}}function Ut(i,e=1,t=0){try{const n=Vm[i];if(!n||!Pt)return!1;const s=n.files.filter(l=>Wd.has(l));if(!s.length)return!1;const a=s.length>1?s.filter(l=>l!==tp[i]):s,r=a[Math.floor(Math.random()*a.length)];tp[i]=r,Pt.state==="suspended"&&Pt.resume().catch(()=>{});const o=Pt.createBufferSource(),c=Pt.createGain();return o.buffer=Wd.get(r),t&&(o.playbackRate.value=2**(t/12)),c.gain.value=n.gain*e*hi("sfx"),o.connect(c).connect(Pt.destination),o.start(),!0}catch{return!1}}pw();const cn={motif:"idle",motifCount:0,ducked:!1,lastMotifAt:0,lastRestoreAt:0};window.__fcAudio=cn;let qd=0;const Zo=.25;function cs(){Xe.music&&(Xe.music.volume=hi("music")*Ic*(Xe.sample||cn.ducked?Zo:1)),Xe.sample&&(Xe.sample.volume=hi("music")*(cn.ducked?Zo:1)),Xe.ambience&&(Xe.ambience.volume=hi("sfx")*Bm()*(cn.ducked?Zo:1))}function mw(){if(clearTimeout(qd),cn.ducked=!0,cs(),cn.motif==="playing"||performance.now()-cn.lastRestoreAt<400)return;cn.motif="playing",cn.motifCount++,cn.lastMotifAt=performance.now();const i=[[293.66,0,.22],[349.23,.2,.22],[220,.42,.26],[207.65,.7,.55]];try{Pt=Pt||new(window.AudioContext||window.webkitAudioContext);const e=Pt.currentTime+.02,t=Pt.createGain();t.gain.value=.06*hi("sfx");const n=Pt.createBiquadFilter();n.type="lowpass",n.frequency.value=1400,t.connect(n).connect(Pt.destination);for(const[s,a,r]of i){const o=Pt.createOscillator(),c=Pt.createGain();o.type="triangle",o.frequency.value=s,c.gain.setValueAtTime(1e-4,e+a),c.gain.exponentialRampToValueAtTime(1,e+a+.04),c.gain.exponentialRampToValueAtTime(1e-4,e+a+r),o.connect(c).connect(t),o.start(e+a),o.stop(e+a+r+.05)}}catch{}setTimeout(()=>{cn.motif==="playing"&&(cn.motif="done")},1300)}function Wm(){clearTimeout(qd),qd=setTimeout(()=>{cn.ducked=!1,cn.motif="idle",cn.lastRestoreAt=performance.now(),cs()},250)}function gw(){cs(),Xe.voice&&(Xe.voice.volume=hi("voice"))}function bw(i,{match:e=".",amount:t=.75,near:n=250,far:s=1600}={}){const a=new RegExp(e,"i");i.traverse(r=>{if(!r.isMesh||!(a.test(r.name)||a.test(r.parent?.name||"")))return;const o=(Array.isArray(r.material)?r.material:[r.material]).map(c=>{const l=c.clone();return l.fog=!0,l.onBeforeCompile=d=>{d.uniforms.hazeColor=Od,d.fragmentShader=`uniform vec3 hazeColor;
`+d.fragmentShader.replace("#include <fog_fragment>",`#include <fog_fragment>
        #ifdef USE_FOG
          gl_FragColor.rgb = mix(gl_FragColor.rgb, hazeColor, ${t.toFixed(3)} * smoothstep(${n.toFixed(1)}, ${s.toFixed(1)}, vFogDepth));
        #endif`)},l.customProgramCacheKey=()=>`haze${t}${n}${s}`,l});r.material=Array.isArray(r.material)?o:o[0]})}const se={id:null,def:null,position:null,root:null,npcs:new Map,swings:[],slidingDoors:[]},vw=new _t({visible:!1,side:nn});let _n=0,ec=0,zu=null,gc=null,qm=-1,jm=null;Ge("dialogue:start",i=>{zu=i.npc,jm=i.npc,qm=ec+1.6});Ge("subtitle",i=>{gc=i.speaker});Ge("dialogue:end",()=>{gc=zu=null});Cn(i=>{ec+=i;for(const e of se.swings){const t=e.base+(Et(e.s.when)?gt.degToRad(e.s.degrees??90):0);e.n.rotation.y=Ms(e.n.rotation.y,t,i,e.s.speed??2.5)}for(const e of se.slidingDoors){const t=pe.position.distanceToSquared(e.center)<16,n=Ms(e.right.position.x,t?e.travel:0,i,6);e.left.position.x=-n,e.right.position.x=n}for(const[e,t]of se.npcs){if(t.leaving&&xw(t,i),!t.obj.visible)continue;const n=t.w??(t.w={wave:0,talk:0,walk:0});if(n.walk=Ms(n.walk??0,t.leaving?1:0,i,5),n.wave=Ms(n.wave,e===jm&&ec<qm||t.def.wave?1:0,i,4),n.talk=Ms(n.talk,gc&&gc===t.def.character?1:0,i,4),t.def.seated){n.attention=Ms(n.attention??0,e===zu?1:0,i,1.6);const s=Math.atan2(pe.position.x-t.obj.position.x,pe.position.z-t.obj.position.z)-t.obj.rotation.y;n.lookYaw=gt.clamp(Math.atan2(Math.sin(s),Math.cos(s)),-.55,.55)}fc(t.obj,ec,n,t.seed)}});function xw(i,e){const t=i.leaving,n=t.path[0];if(!n){i.leaving=null,i.obj.visible=!1,clearTimeout(t.timer),t.flag&&bt.setFlag(t.flag);return}const s=new A(n[0]-i.obj.position.x,0,n[1]-i.obj.position.z),a=s.length(),r=t.speed*e;let o=Math.atan2(s.x,s.z)-i.obj.rotation.y;o=Math.atan2(Math.sin(o),Math.cos(o)),i.obj.rotation.y+=Math.max(-7*e,Math.min(7*e,o)),a<=r?(i.obj.position.x=n[0],i.obj.position.z=n[1],t.path.shift()):i.obj.position.addScaledVector(s.divideScalar(a),r)}en("npcLeave",i=>{const e=se.npcs.get(i.npc);if(!e||!e.obj.visible){i.flag&&bt.setFlag(i.flag);return}const t=(i.path||[]).map(o=>[...o]),n=i.speed??1.3;let s=0,a=[e.obj.position.x,e.obj.position.z];for(const o of t)s+=Math.hypot(o[0]-a[0],o[1]-a[1]),a=o;const r=setTimeout(()=>{i.flag&&!X.save.flags[i.flag]&&bt.setFlag(i.flag)},(s/n+2)*1e3);e.leaving={path:t,speed:n,flag:i.flag,timer:r},e.obj.userData.turnTo=void 0,bt.setFlag(`npc:${i.npc}:leaving`)});const Dr=(i,e)=>(i.positions||[]).find(t=>t.id===e);async function Xm(i,e,{onProgress:t,onReady:n,preview:s=!1}={}){const a=K.locations[i];if(!a)throw new Error(`Unknown location "${i}"`);const r=++_n;Re("location:loading",{id:i,name:a.name});const o=new Ue;o.name=`loc:${i}`;const c=new Ue;o.add(c);let l=a.models||[];const d=tw(a.lamps,a.lights),u=e&&Dr(a,e)?e:a.startPosition,h=(a.positions||[]).map(_=>a.horizon?.day&&_.id===a.startPosition?{..._,scenery:{...a.horizon,heading:0}}:_);o.userData.lookout=a.continuousInterior?null:rS(o,c,h,a.photoOccluders,YS(i)?i:void 0),a.horizon?.day||o.userData.lookout?.prepare(u);for(const _ of a.npcs||[]){const M=K.characters[_.character];for(const L of[M?.model,M?.interactionSurface])L&&On(L).catch(()=>{})}if(a.horizon?.day){for(const M of l)!M.outside&&!M.behindHorizon&&On(M.url).catch(()=>{});await o.userData.lookout.prepare(u)&&h.every(M=>M.scenery)&&(l=l.filter(M=>!M.outside||M.retainOnWalk))}else if(a.horizon)try{await oS(o,a.horizon),l=l.filter(_=>!_.behindHorizon)}catch(_){console.warn("Using the 3D city horizon",_)}if(r!==_n){sa(o);return}const f=new Set(l.map(_=>_.url));se.root&&se.def?.models?.some(_=>!f.has(_.url))&&kt.remove(se.root);for(const _ of Object.values(K.locations))for(const M of _.models||[])M.url&&!f.has(M.url)&&zf(M.url,dc);let g=0;const b=(_=0)=>t&&t((g+_)/Math.max(1,l.length+1)),m=[],p=[],v=[],x=[];if(await Promise.all(l.map(async _=>{const M=_.url;try{const k=(await On(M,P=>b(P))).scene.clone(!0);if(k.userData.highlightFor=_.highlightFor,k.userData.distantScenery=!!_.outside,_.hide&&k.traverse(P=>{_.hide.includes(P.name)&&(P.visible=!1)}),_.outside||_.highlight){const[P,B,H,z]=_.outside||[],ee=_.outside&&[new Qn(new A(-1,0,0),P),new Qn(new A(1,0,0),-H),new Qn(new A(0,0,-1),B),new Qn(new A(0,0,1),-z)];k.traverse(V=>{if(!V.isMesh)return;const oe=le=>{const _e=le.clone();return ee&&(_e.clippingPlanes=ee,_e.clipIntersection=!0),_.highlight&&_e.emissive&&(_e.emissive.setHex(4813929),_e.emissiveIntensity=.34),_e.userData.locationOwned=!0,_e};V.material=Array.isArray(V.material)?V.material.map(oe):oe(V.material)})}if(_.position&&k.position.fromArray(_.position),_.rotationY&&(k.rotation.y=gt.degToRad(_.rotationY)),_.scale&&k.scale.setScalar(_.scale),_.parkedVehicle){Pu(k,2.6,2.3);const P=km(_.parkedVehicle,k.rotation.y);P.userData.parkedShadow=!0,k.add(P)}if(k.traverse(P=>{P.isLight&&(P.intensity*=_.lightScale??0)}),_.haze&&bw(k,_.haze),_.swing){const P=k.getObjectByName(_.swing.node);if(P){const B=P.rotation.y;Et(_.swing.when)&&(P.rotation.y=B+gt.degToRad(_.swing.degrees??90)),p.push({n:P,s:_.swing,base:B})}else console.warn("swing node missing",_.swing.node)}if(_.slidingDoor){const{left:P,right:B,center:H,travel:z}=_.slidingDoor,ee=k.getObjectByName(P),V=k.getObjectByName(B);if(!ee||!V)throw new Error("Missing sliding door hardware in "+M);v.push({left:ee,right:V,center:new A(...H),travel:z})}if(_.floorFinish)try{await vS(k,_.floorFinish)}catch(P){console.warn("Floor finish unavailable",P)}_.stripes&&lS(k,_.stripes),_.tint&&k.traverse(P=>{if(!P.isMesh)return;const B=H=>{const z=_.tint.find(V=>new RegExp(V.material).test(H.name));if(!z)return H;const ee=H.clone();return ee.color.setRGB(...z.color),ee.userData.locationOwned=!0,ee};P.material=Array.isArray(P.material)?P.material.map(B):B(P.material)}),_.stageFinish&&k.traverse(P=>{P.isMesh&&(P.userData.stageFinish=_.stageFinish)}),Hf(k),_.when&&x.push({obj:k,when:_.when}),(_.showInPhotograph?o:c).add(k)}catch(L){m.push(M),console.error(L)}g++,b()})),o.userData.finish=cS(c,h),a.windowView)try{await bS(c,a.windowView,K.locations[a.windowView.street]?.horizon)}catch(_){console.warn("Exterior view unavailable in",i,_)}if(a.outlines&&!s)try{const _=await On(a.outlines);o.userData.clueShapes=new Map(_.scene.children.map(M=>[M.name,M])),_.scene.updateMatrixWorld(!0)}catch(_){m.push(a.outlines),console.error(_)}const D=l[0]?.url;if(m.includes(D))throw sa(o),new Error(`Could not load the setting for ${a.name} (${D}).`);if(a.stage){const _=_S(a.stage);a.stage.origin&&_.position.fromArray(a.stage.origin),a.stage.rotationY&&(_.rotation.y=gt.degToRad(a.stage.rotationY)),c.add(_),Hf(_)}if(r!==_n){sa(o);return}const T=new Map;if(await Promise.all((a.npcs||[]).map(async _=>{const M=K.characters[_.character];if(!M||!M.model)return;const L=M.model;try{const k=await Ou(L,{height:_.height??M.height??1.4,node:M.node,floorContact:_.floorContact});if(M.interactionSurface)try{const P=(await On(M.interactionSurface)).scene.clone(!0),B=k.children[0];B.traverse(H=>{H.isMesh&&(H.userData.hasInteractionSurface=!0)}),P.traverse(H=>{H.isMesh&&(H.material=vw)}),B.add(P),k.userData.interactionSurface=P}catch(P){console.warn("Using full character for interaction",_.id,P)}k.position.fromArray(_.at),k.userData.baseY=_.at[1],k.rotation.y=gt.degToRad(_.facing??0),k.userData.seated=!!_.seated,_.outfit==="detective"&&await Lm(k),_.holds&&await AS(k,_.holds.url,_.holds),(_.floorContact||a.env?.sky==="interior"&&_.at[1]===0)&&wS(k),k.traverse(P=>{P.userData.npc=_.id}),o.add(k),T.set(_.id,{def:_,obj:k,seed:Math.random()*10})}catch(k){m.push(L),console.error(k)}})),r!==_n){sa(o);return}if(Dm(),Nm(),Um(),se.def?.outlines&&se.def.outlines!==a.outlines&&zf(se.def.outlines,dc),se.root&&(kt.remove(se.root),sa(se.root)),await nw(c,a.lamps,a.lights,a.lampScale,d),r!==_n){sa(o);return}if(kt.add(o),Object.assign(se,{id:i,def:a,root:o,npcs:T,swings:p,slidingDoors:v,conditionalModels:x,position:null}),jM(a.env||{}),IS(o,a.ambient,i),$S(o,i,()=>se.position),lw(a.horizon?.day?o:c,a.screens),pc("music",a.music||null),pc("ambience",a.ambience||null),Gu(),s){if(await o.userData.lookout?.prepare(u),r!==_n)return;se.position=u,se.preview=!0,await Oa(Dr(a,u).camera,{instant:!0}),o.userData.lookout?.sync(),Re("location:previewed",{id:i,def:a});return}se.preview=!1;const R=!X.save.visited.includes(i);if(bt.visit(i),await Hu(u,{instant:!0,deferArrive:!0}),r!==_n)return;if(m.length&&Re("content:error",{message:`Missing model(s): ${m.join(", ")}`}),Re("location:entered",{id:i,def:a,first:R}),c.userData.photoCollision)At.render(kt,pe);else try{await Promise.race([At.compileAsync(kt,pe),new Promise(_=>setTimeout(_,4e3))])}catch{}if(r!==_n||(await n?.(),r!==_n))return;const I=()=>r===_n;for(const _ of[()=>Dr(a,u).onArrive,()=>R&&I()&&a.onFirstEnter,()=>I()&&a.onEnter])try{const M=_();M&&await Vt(M)}catch(M){console.error(M),Re("content:error",{message:`Arrival content failed in ${a.name}: ${M?.message||M}`})}}async function Hu(i,e={}){const t=se.def,n=Dr(t,i);if(!n){Re("content:error",{message:`Position "${i}" not in ${se.id}`});return}const{position:s,id:a,root:r}=se,o=_n,c=[s,i].sort().join("|"),l=gS[a]?.[c],d=l&&(s<i?l:[...l].reverse());if(se.root.userData.finish?.prepare(i),se.position=i,bt.setPlace(se.id,i),Gu(),Re("position:leaving",{id:i}),se.preview||pc("music",("music"in n?n.music:t.music)||null),!se.preview&&!e.instant&&s&&s!==i&&Ut("step"),se.root.userData.lookout){const h=se.root,f=_n;if(await h.userData.lookout.prepare(i),h!==se.root||f!==_n||i!==se.position)return}const u=pe.aspect<.9;await Oa(n.camera,{...e,walk:d,maxWalkLength:t.maxWalkLength??3,instant:e.instant||!d}),!(o!==_n||se.root!==r||se.position!==i)&&(u!==pe.aspect<.9&&await Oa(n.camera,{instant:!0}),se.root.userData.lookout?.sync(),Re("position:changed",{id:i,def:n}),e.deferArrive||await Vt(n.onArrive))}function Gu(){for(const i of se.npcs.values())i.obj.visible=Et(i.def.when)&&!i.def.hideAt?.includes(se.position);for(const i of se.conditionalModels||[])i.obj.visible=Et(i.when)}for(const i of["flag","evidence","discovered","visited","achievement"])Ge(i,Gu);const Ym=i=>se.npcs.get(i)?.obj;let ip=innerWidth/innerHeight<.9;addEventListener("resize",()=>{const i=innerWidth/innerHeight<.9;if(i===ip)return;ip=i;const e=se.def&&Dr(se.def,se.position)?.camera;e&&!Ua.travel&&!document.body.classList.contains("in-dialogue")&&Oa(e,{instant:!0})});function sa(i){i.userData.finish?.dispose(),i.userData.lookout?.dispose(),i.userData.releaseTraffic?.(),i.userData.releaseDistantView?.(),i.traverse(e=>e.userData.releaseWindowView?.()),i.traverse(e=>{e.userData.floorFinish?.dispose(),e.userData.parkedShadow&&(e.geometry.dispose(),e.material.dispose())}),i.traverse(e=>{for(const t of[].concat(e.material||[]))t.userData.locationOwned&&(dc(t),t.dispose())}),i.traverse(e=>{if(e.isMesh&&e.geometry&&!e.geometry.userData.cached&&e.parent&&_w(e,"stage")){e.geometry.dispose();for(const n of[].concat(e.material))n.map&&n.map.dispose(),dc(n),n.dispose()}})}const _w=(i,e)=>{for(let t=i.parent;t;t=t.parent)if(t.name===e)return!0;return!1},sp={pause:'<path d="M8 5v14M16 5v14" stroke-width="3"/>',inspect:'<circle cx="10.5" cy="10.5" r="6"/><path d="M15 15l5 5"/>',search:'<circle cx="10.5" cy="10.5" r="6"/><path d="M15 15l5 5"/>',talk:'<path d="M4 5h16v10H9l-4 4v-4H4z"/>',door:'<path d="M6 21V3h10v18M3 21h18"/><circle cx="13" cy="12" r=".6" fill="currentColor"/>',travel:'<path d="M5 12h13M13 6l6 6-6 6"/>',listen:'<path d="M4 15v-3a8 8 0 0116 0v3"/><rect x="3" y="14" width="4" height="6" rx="1"/><rect x="17" y="14" width="4" height="6" rx="1"/>',map:'<path d="M3 6l6-2 6 2 6-2v14l-6 2-6-2-6 2z"/><path d="M9 4v14M15 6v14"/>',board:'<rect x="3" y="4" width="18" height="14" rx="1"/><path d="M7 9l4 3 5-4"/><circle cx="7" cy="9" r="1" fill="currentColor"/><circle cx="16" cy="8" r="1" fill="currentColor"/>',notebook:'<rect x="5" y="3" width="14" height="18" rx="1"/><path d="M9 8h6M9 12h6M9 16h4"/>',settings:'<circle cx="12" cy="12" r="3"/><path d="M12 2v3M12 19v3M2 12h3M19 12h3M4.9 4.9l2.1 2.1M17 17l2.1 2.1M4.9 19.1L7 17M17 7l2.1-2.1"/>',back:'<path d="M15 5l-7 7 7 7"/>',close:'<path d="M6 6l12 12M18 6L6 18"/>',reset:'<path d="M4 12a8 8 0 108-8H7"/><path d="M8 1L5 4l3 3"/>',trophy:'<path d="M8 4h8v5a4 4 0 01-8 0z"/><path d="M8 6H4a3 3 0 004 4M16 6h4a3 3 0 01-4 4M12 13v4M8 21h8"/>',badge:'<path d="M12 2l2.6 5.3 5.9.9-4.3 4.1 1 5.8L12 15.4 6.8 18.1l1-5.8L3.5 8.2l5.9-.9z"/><circle cx="12" cy="10.6" r="2.2"/>',star:'<path d="M12 3l2.7 5.6 6.1.8-4.4 4.3 1 6.1L12 17l-5.4 2.8 1-6.1-4.4-4.3 6.1-.8z"/>',check:'<path d="M5 12.5l4.5 4.5L19 7"/>',pin:'<circle cx="12" cy="8" r="4"/><path d="M12 12v9"/>',skip:'<path d="M5 5l8 7-8 7zM15 5v14"/>',play:'<path d="M7 4l13 8-13 8z"/>',up:'<path d="M12 19V5M6 11l6-6 6 6"/>',left:'<path d="M19 12H5M11 6l-6 6 6 6"/>',right:'<path d="M5 12h14M13 6l6 6-6 6"/>',down:'<path d="M12 5v14M6 13l6 6 6-6"/>'},Ot=(i,e="")=>`<svg class="ico ${e}" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">${sp[i]??sp.inspect}</svg>`,bc=new Xa;bc.background=new De(0);const Rs=new os(1,1,{minFilter:Qt,magFilter:Qt});Rs.depthTexture=new xu(1,1,rs);const yw={clue:new _t({color:16711680,side:nn,toneMapped:!1}),talk:new _t({color:65280,side:nn,toneMapped:!1})},Km=new Xa,Mw=new Yr(-1,1,1,-1,0,1),$m=new un({uniforms:{mask:{value:Rs.texture},depth:{value:Rs.depthTexture},delta:{value:new Ce}},transparent:!0,depthTest:!0,depthWrite:!1,toneMapped:!1,vertexShader:`varying vec2 coord;
    void main(){coord=uv; gl_Position=vec4(position.xy,0.,1.);}`,fragmentShader:`varying vec2 coord; uniform sampler2D mask, depth; uniform vec2 delta;
    void main(){
      vec2 center=texture2D(mask,coord).rg;
      float inside=max(center.r,center.g);
      if (inside>.995) discard;
      vec2 color=vec2(0.);
      float dist=1.;
      for(int i=0;i<8;i++){
        float angle=float(i)*.7853981634;
        vec2 sampleUV=coord+vec2(cos(angle),sin(angle))*delta*1.65;
        vec2 hit=texture2D(mask,sampleUV).rg;
        color=max(color,hit);
        if(max(hit.r,hit.g)>.16) dist=min(dist,texture2D(depth,sampleUV).r);
      }
      float coverage=clamp(max(color.r,color.g)-inside,0.,1.);
      if(coverage<.04 || dist>=1.) discard;
      vec3 ink=color.g>color.r?vec3(.56,.86,.77):vec3(.96,.79,.46);
      gl_FragColor=vec4(ink,coverage*.87);
      gl_FragDepth=max(0.,dist-.00032);
    }`}),Jm=new j(new qt(2,2),$m);Jm.frustumCulled=!1;Km.add(Jm);let _a=[],Vu=()=>!1;const ap=new wc,Sw=new He;function Qm(i,e){for(const{mesh:t}of _a)t.isInstancedMesh&&t.dispose();bc.clear(),_a=[],Vu=e;for(const t of i)for(const n of t.objects)n.traverse(s=>{if(!s.isMesh||s.userData.excludeOutline)return;const a=yw[t.kind==="talk"?"talk":"clue"],r=s.isInstancedMesh?s.clone(!1):new j(s.geometry,a);s.isInstancedMesh&&(r.material=a),r.matrixAutoUpdate=!1,r.matrixWorldAutoUpdate=!1,bc.add(r),_a.push({mesh:r,source:s,item:t})})}function ww(i){if(!Vu())return null;const e=_a.filter(n=>n.mesh.visible&&n.item.available());if(!e.length)return null;const t=i.intersectObjects(e.map(n=>n.mesh),!1)[0];return t&&{distance:t.distance,item:e.find(n=>n.mesh===t.object).item}}JM(()=>{if(!_a.length||!Vu())return;ap.setFromProjectionMatrix(Sw.multiplyMatrices(pe.projectionMatrix,pe.matrixWorldInverse));let i=!1;for(const n of _a)n.mesh.matrixWorld.copy(n.source.matrixWorld),n.mesh.visible=n.item.available()&&ap.intersectsObject(n.mesh),i||(i=n.mesh.visible);if(!i)return;const e=At.domElement.width,t=At.domElement.height;(Rs.width!==e||Rs.height!==t)&&Rs.setSize(e,t),$m.uniforms.delta.value.set(1/innerWidth,1/innerHeight),At.setRenderTarget(Rs),At.render(bc,pe),At.setRenderTarget(null),At.autoClear=!1;try{At.render(Km,Mw)}finally{At.autoClear=!0}});const Nc=document.getElementById("markers");let En=[],Qr=!0;const ls=i=>{Qr=i,Nc.classList.toggle("off",!i)},Nl=new WeakMap;function Ew(i){if(Nl.has(i))return Nl.get(i);const e=new Map;return i.traverse(t=>{const n=t.userData.highlightFor;n&&(e.has(n)||e.set(n,[]),e.get(n).push(t))}),Nl.set(i,e),e}function Tw(){Nc.replaceChildren(),En=[];const i=se.def;if(!i)return;const e=se.position;(op!==se.root||cp!==e)&&(Pw(),op=se.root,cp=e);for(const s of i.hotspots||[]){if(s.positions&&!s.positions.includes(e)||!Et(s.when)||!Tn("marker",s.id))continue;const a=Fl({kind:s.kind||"inspect",label:s.label,at:new A().fromArray(s.at),act:()=>Vt(s.action),id:s.id,done:s.doneWhen&&Et(s.doneWhen)}),r=!!i.positions?.find(o=>o.id===e)?.scenery;(s.kind||"inspect")==="inspect"&&!r&&(a.reach=s.reach??Aw),En.push(a)}for(const[s,a]of se.npcs){const r=a.def;if(!Tn("marker","npc:"+s)||!a.obj.visible||a.leaving||r.positions&&!r.positions.includes(e)||!r.dialogue)continue;const o=K.characters[r.character]?.name??r.character,c=a.obj.userData.height??1.4,l=a.obj.position.clone();l.y+=r.talkMarkerHeight!=null?c*r.talkMarkerHeight:r.seated?c*.86:c+.25,r.talkMarkerOffset&&l.add(new A().fromArray(r.talkMarkerOffset)),En.push(Fl({kind:"talk",label:r.label??o,at:l,act:()=>Vt({do:"dialogue",tree:r.dialogue,npc:s}),id:`npc:${s}`}))}if(i.ambient?.talkPositions?.includes(e))for(const s of PS()){const a="resident:"+s.id;if(!s.lines.length||!Tn("marker",a))continue;const r=Fl({kind:"talk",label:"Local resident",at:new A,id:a,act:()=>LS(s)});r.resident=s,En.push(r)}const t=Ew(se.root),n=[];for(const s of En){const a=s.el.dataset.id,r=[...t.get(a)||[]],o=a.startsWith("npc:")&&se.npcs.get(a.slice(4));o&&r.push(o.obj.userData.interactionSurface||o.obj),s.resident&&r.push(...s.resident.body.userData.talkParts||[s.resident.body]);const c=se.root.userData.clueShapes?.get(a);c&&r.push(c),s.parts=r,s.box=r.length&&!o&&!s.resident?Lw(r):null,s.el.classList.toggle("has-outline",r.length>0),s.actor=o,s.aim=o?o.obj.position.clone().addScaledVector(Zm,(o.obj.userData.height||1.4)*.75):s.at,r.length&&n.push({objects:r,kind:s.kind,act:s.activate,available:()=>s.sighted&&(!o||o.obj.visible)&&(!s.resident||s.resident.holder.visible)})}Qm(n,()=>Qr&&!Ua.travel&&document.body.matches(".playing:not(.panel-open):not(.in-dialogue):not(.in-finale)")),Re("markers:built",{count:En.length})}const Aw=5.5;function Fl({kind:i,label:e,at:t,act:n,id:s,done:a}){const r=document.createElement("button");r.className=`marker k-${i}${a?" done":""}`,r.type="button",r.dataset.id=s,r.innerHTML=`<span class="ring">${Ot(i)}</span><span class="lab"></span>`,r.querySelector(".lab").textContent=e,r.setAttribute("aria-label",i==="door"&&/^enter\b/i.test(e)?e:`${i==="talk"?"Talk to":i==="door"?"Enter":i==="travel"?"Travel:":"Inspect"} ${e}`);function o(){!Qr||!En.some(c=>c.el===r&&c.sighted)||!Tn("marker",s)||(Re("interact",{id:s,kind:i}),n())}return r.addEventListener("click",c=>{c.stopPropagation(),(!c.detail||Am()<=8)&&o()}),Nc.append(r),{el:r,at:t,kind:i,activate:o,reach:0}}const Zm=new A(0,1,0),gr=new A,br=new fm,Rw=new A;let rp=new A(1/0,1/0,1/0);function Cw(i){for(let t=i.object;t;t=t.parent)if(!t.visible&&!t.userData.photoCollision||t.userData.excludeOutline||t.userData.distantScenery)return!1;const e=Array.isArray(i.object.material)?i.object.material[i.face.materialIndex]:i.object.material;return e&&(e.transmission||0)<.55&&(!e.transparent||e.opacity>.55)}let op,cp;const jd=[],lp=new A;function Pw(){jd.length=0;function i(e){if(!(!e.visible&&!e.userData.photoCollision||e.userData.excludeOutline||e.userData.distantScenery||e.name==="ambient")){if(e.isMesh&&!e.userData.hasInteractionSurface){e.isInstancedMesh?e.boundingBox||e.computeBoundingBox():e.geometry.boundingBox||e.geometry.computeBoundingBox();const t=e.isInstancedMesh?e.boundingBox:e.geometry.boundingBox;jd.push({mesh:e,local:t,world:t.clone().applyMatrix4(e.matrixWorld),matrix:e.matrixWorld.clone()})}for(const t of e.children)i(t)}}se.root&&i(se.root)}function eg(i){let e;for(const t of jd){const{mesh:n,local:s,world:a,matrix:r}=t;if(r.equals(n.matrixWorld)||(r.copy(n.matrixWorld),a.copy(s).applyMatrix4(r)),!(!a.containsPoint(i.ray.origin)&&(!i.ray.intersectBox(a,lp)||lp.distanceTo(i.ray.origin)>(e?.distance??i.far))))for(const o of i.intersectObject(n,!1))(!e||o.distance<e.distance)&&Cw(o)&&(e=o)}return e}function Lw(i){const e=new Rn;for(const t of i)t.updateWorldMatrix(!0,!0),e.expandByObject(t);return e.isEmpty()?null:e}const vr=new A;function Dw(i,e,t){let n=1/0,s=-1/0,a=1/0,r=-1/0;for(let o=0;o<8;o++)vr.set(o&1?i.max.x:i.min.x,o&2?i.max.y:i.min.y,o&4?i.max.z:i.min.z).project(pe),n=Math.min(n,vr.x),s=Math.max(s,vr.x),a=Math.min(a,vr.y),r=Math.max(r,vr.y);return Math.max((s-n)*e/2,(r-a)*t/2)}function Ul(i,e,t=!1){const n=pe.position.distanceTo(e);if(n<.05)return!0;br.set(pe.position,Rw.subVectors(e,pe.position).normalize()),br.far=n+.15;const s=br.intersectObjects(i.parts,!0)[0];return t&&!s?!1:(br.far=Math.max(0,(s?.distance??n)-.065),!eg(br))}const Ki=new A,Fo=new A;function dp(i){if(i.visibleAt=null,i.reach&&i.at.distanceTo(pe.position)>i.reach)return!1;if(Ul(i,i.aim))return!0;const e=i.actor?.obj||i.resident?.holder;if(e){const t=(i.actor?.obj||i.resident.body).userData.height||1.4;return Ki.copy(e.position).y+=t*.94,Ul(i,Ki,!0)}if(!i.box)return!1;i.box.getSize(Fo);for(const[t,n,s]of[[0,.33,0],[-.3,0,0],[.3,0,0],[0,0,-.3],[0,0,.3]])if(i.box.getCenter(Ki),Ki.x+=t*Fo.x,Ki.y+=n*Fo.y,Ki.z+=s*Fo.z,Ul(i,Ki,!0))return i.visibleAt=Ki.clone(),!0;return!1}Cn(()=>{if(!En.length)return;const i=!!Ua.travel,e=innerWidth,t=innerHeight;if(!i&&(En.some(n=>!n.resident&&n.sighted===void 0)||rp.distanceToSquared(pe.position)>1e-4)){se.root.updateMatrixWorld(!0);for(const n of En)n.resident||(n.sighted=dp(n));rp.copy(pe.position)}pe.updateMatrixWorld();for(const n of En){if(n.resident){const c=n.resident,l=c.body.userData.height||1.3;n.at.copy(c.holder.position),n.at.y+=l+.19,c.holder.visible&&n.at.distanceToSquared(pe.position)<400?(!n.nextSight||performance.now()>n.nextSight)&&(n.aim=c.holder.position.clone().addScaledVector(Zm,l*.75),n.sighted=dp(n),n.nextSight=performance.now()+800+c.id*43):(n.sighted=!1,n.nextSight=0)}gr.copy(n.visibleAt||n.at).project(pe);const s=gr.z>1||gr.z<-1,a=(gr.x*.5+.5)*e,r=(-gr.y*.5+.5)*t,o=!n.sighted||s||i||a<0||a>e||r<0||r>t;n.el.classList.toggle("hidden",o),!o&&n.box&&n.el.classList.toggle("small",Dw(n.box,e,t)<44),o||(n.el.style.transform="translate3d("+a.toFixed(1)+"px,"+r.toFixed(1)+"px,0)")}});const xr=new fm,up=new Ce;Oi.addEventListener("click",i=>{if(!Qr||Am()>8||!se.root)return;up.set(i.clientX/innerWidth*2-1,-(i.clientY/innerHeight)*2+1),xr.setFromCamera(up,pe);const e=ww(xr);if(!e)return;xr.far=e.distance;const t=eg(xr);xr.far=1/0,(!t||e.distance<=t.distance+.065)&&e.item.act()});for(const i of["position:changed","flag","evidence","discovered","location:entered","ambient:ready"])Ge(i,()=>se.def&&Tw());Ge("position:leaving",()=>{Nc.replaceChildren(),En=[],Qm([],()=>!1)});function Iw(i){const e=En.find(t=>t.el.dataset.id===i);!Qr||Ua.travel||!e||(e.sighted&&!e.el.classList.contains("hidden")?e.activate():Em(e.visibleAt||e.aim))}const hp=(i,e)=>i.destination===e||[].concat(i.where||[]).some(t=>t.location===e);function vn(){if(X.save.completed)return null;const i=K.board.leads||[];let e=i.find(n=>Et(n.when));if(e?.boardHint&&(e=i.find(n=>n.trail&&Et(n.when))||e),!e?.trail)return e;const t=X.save.location;return!hp(e,t)&&i.find(n=>n.trail&&Et(n.when)&&hp(n,t))||e}function S(i,e={},...t){const n=document.createElement(i);for(const[s,a]of Object.entries(e||{}))a==null||a===!1||(s==="class"?n.className=a:s==="html"?n.innerHTML=a:s==="text"?n.textContent=a:s.startsWith("on")?n.addEventListener(s.slice(2),a):s==="style"&&typeof a=="object"?Object.assign(n.style,a):n.setAttribute(s,a===!0?"":a));for(const s of t.flat())s!=null&&s!==!1&&n.append(s.nodeType?s:document.createTextNode(String(s)));return n}const us=document.getElementById("ui");function we(i=""){return String(i).replace(/\{(\w+)\}/g,(e,t)=>{if(t==="candidate")return X.candidate?`#${String(X.candidate.number).padStart(4,"0")}`:"#????";if(t==="detective"){const s=K.detectives.models.find(a=>a.id===X.save.detective?.model);return s?s.name:"Detective"}if(t==="known"||t==="needed"){const s=K.board?.profile?.needed||0;return String(t==="needed"?s:Math.min(X.save.discovered.length,s))}if(t==="towerAnniversary")return String(Number(K.game.config.towerYear)+10);const n=K.game?.config;return n&&n[t]!=null?String(n[t]):e})}const yn=[];let Fc=!1;addEventListener("pointerdown",()=>{Fc=!0},!0);addEventListener("keydown",i=>{i.key==="Tab"&&(Fc=!1)},!0);function Bi(i,{onClose:e,label:t}={}){const n=document.activeElement;return i.setAttribute("role","dialog"),i.setAttribute("aria-modal","true"),t&&i.setAttribute("aria-label",t),us.append(i),yn.push({el:i,onClose:e,prev:n,returnFocus:!Fc}),document.body.classList.add("panel-open"),requestAnimationFrame(()=>{i.classList.add("in");const s=i.querySelector('[autofocus], button, [tabindex="0"]');s&&s.focus({preventScroll:!0})}),()=>Lt(i)}function Lt(i){const e=yn.findIndex(n=>n.el===i);if(e<0)return;const[t]=yn.splice(e,1);i.classList.remove("in"),setTimeout(()=>i.remove(),220),yn.length||document.body.classList.remove("panel-open"),t.onClose?.(),i.inert=!0,t.returnFocus||yn.length?t.prev?.focus?.({preventScroll:!0}):i.contains(document.activeElement)&&document.activeElement.blur()}const Us=()=>yn[yn.length-1]?.el;addEventListener("keydown",i=>{if(i.code==="Space"&&Fc&&!yn.length&&document.body.matches(".playing:not(.in-dialogue)")&&i.target.closest?.(".hud, .pause-game, .marker, .navlink")&&i.preventDefault(),i.key!=="Tab"||!yn.length)return;const e=yn[yn.length-1].el,t=[...e.querySelectorAll('button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])')].filter(a=>!a.disabled&&a.offsetParent!==null);if(!t.length){i.preventDefault();return}const n=t[0],s=t[t.length-1];e.contains(document.activeElement)?i.shiftKey&&document.activeElement===n?(i.preventDefault(),s.focus()):!i.shiftKey&&document.activeElement===s&&(i.preventDefault(),n.focus()):(i.preventDefault(),n.focus())});addEventListener("keydown",i=>{if(i.key==="Escape"&&yn.length){const e=yn[yn.length-1];e.el.dataset.noEscape||(i.preventDefault(),Lt(e.el))}});function kw(i,e="Choose an entry"){const t=S("select",{"aria-label":e}),n=new Map;i.forEach((f,g)=>{if(f.group&&!n.has(f.group)){const b=S("optgroup",{label:f.group});n.set(f.group,b),t.append(b)}(n.get(f.group)||t).append(S("option",{value:g,text:f.title}))});const s=S("h3"),a=S("p"),r=S("small"),o=S("img",{hidden:!0,decoding:"async"}),c=S("article",{"aria-live":"polite","aria-atomic":"true"},s,o,a,r),l=S("button",{type:"button",text:"Previous"}),d=S("button",{type:"button",text:"Next"}),u=S("span");function h(f){const g=i[f];t.value=String(f),s.textContent=g.title,a.textContent=g.text,r.textContent=g.source||g.group||"",o.hidden=!g.image,g.image?(o.alt=g.alt||g.title,o.src="./"+g.image):o.removeAttribute("src"),l.disabled=f===0,d.disabled=f===i.length-1,u.textContent=f+1+" / "+i.length}return l.addEventListener("click",()=>h(Number(t.value)-1)),d.addEventListener("click",()=>h(Number(t.value)+1)),t.addEventListener("change",()=>h(Number(t.value))),h(0),S("div",{class:"collection-reader"},S("label",{},S("span",{text:e}),t),c,S("div",{class:"collection-pages"},l,u,d))}const Nw=[0,2,3,5,7,9,10,12,14,15],mn=S("section",{class:"dlg","aria-live":"polite"}),Xd=S("div",{class:"dlg-name"}),ua=S("p",{class:"dlg-text"}),Cs=S("div",{class:"dlg-choices",role:"group"}),Uc=S("button",{class:"dlg-next",type:"button","aria-label":"Continue"},S("span",{text:"Continue"}),S("kbd",{text:"Space"}));mn.append(Xd,ua,Cs,Uc);us.append(mn);const tg=i=>{if(i==="detective"){const e=K.detectives.models.find(t=>t.id===X.save.detective?.model);return{name:e?`${e.name} (you)`:"You",color:"#f4e7c8"}}return i==="narrator"?{name:"",color:"#f4e7c8"}:K.characters[i]||{name:i,color:"#ddd"}};let Ir=null;function Fw(i,e=48){return new Promise(t=>{if(ua.textContent="",X.settings.reducedMotion)return ua.textContent=i,t();let n=0;const s=Ea();Ir={finish:()=>{ua.textContent=i,cancelAnimationFrame(a),Ir=null,t()}};let a;const r=()=>{const o=Math.min(i.length,Math.floor((Ea()-s)/1e3*e));o!==n&&(n=o,ua.textContent=i.slice(0,n),n%3===0&&i[n-1]!==" "&&(Ut("tick",1,Math.random()-.5)||sn(520+n%7*18,.02,"triangle",.03))),n<i.length?a=requestAnimationFrame(r):(Ir=null,t())};a=requestAnimationFrame(r)})}let kr=null;const Oc=()=>{if(Ir){Ir.finish();return}if(kr){const i=kr;kr=null,i()}};Uc.addEventListener("click",Oc);mn.addEventListener("click",i=>{(i.target===mn||i.target===ua)&&Oc()});addEventListener("keydown",i=>{if(!(!mn.classList.contains("show")||Us()||document.body.classList.contains("in-finale"))&&!i.repeat&&(i.key===" "||i.key==="Enter")){if(document.activeElement&&document.activeElement.closest(".dlg-choices"))return;i.preventDefault(),Oc()}});let fp=Promise.resolve();function Wu(i){const e=fp.then(()=>Uw(i));return fp=e.catch(()=>{}),e}async function Uw({speaker:i,text:e,audio:t,mood:n,thought:s}){const a=i==="narrator"||i==="detective"&&s,r=a?{name:"",color:"#f4e7c8"}:tg(i);mn.classList.remove("many"),mn.classList.add("show"),mn.classList.toggle("narr",a),mn.classList.toggle("thought",a),document.body.classList.toggle("thinking",a),a?mw():Wm(),mn.style.setProperty("--sp",r.color||"#ddd"),Xd.textContent=r.name||"",Xd.hidden=!r.name,Cs.replaceChildren(),Uc.hidden=!1;const o=we(e);X.save.transcript.push({who:a?"Your thoughts":r.name||"Narration",text:o});const c=Bu(t,o);Re("subtitle",{speaker:i,text:o}),await Fw(o),await new Promise(l=>{kr=l,X.settings.autoAdvance&&c.done.then(()=>{kr===l&&Oc()})}),Jr()}function Ow(i){return new Promise(e=>{Uc.hidden=!0,Cs.replaceChildren();const t=performance.now()+340,n=new Map;i.forEach(a=>{if(!Et(a.when))return;const r=String(n.size+1),o=a.id&&X.save.seenDialogue.includes(a.id),c=S("button",{type:"button",class:`choice${o?" seen":""}`},S("span",{class:"n",text:r}),S("span",{text:we(a.text)}));c.addEventListener("click",()=>{performance.now()<t||(removeEventListener("keydown",s),Cs.replaceChildren(),X.save.transcript.push({who:"You",text:we(a.text)}),a.id&&bt.seen(a.id),Ut("choice")||sn(780,.05),e(a))}),n.set(r,c),Cs.append(c)}),mn.classList.toggle("many",n.size>=4),vc&&ng(vc,n.size>=4?.3:.22),Cs.querySelector("button")?.focus({preventScroll:!0});const s=a=>{Us()||a.target.closest?.("input,textarea")||!a.repeat&&!a.altKey&&!a.ctrlKey&&!a.metaKey&&n.get(a.key)?.click()};addEventListener("keydown",s)})}let Bc=!1,Yd=0,Kd=null,vc=null;function qu(){Yd++||(Xu(),Bc=!0,uc(!0),ls(!1),document.body.classList.add("in-dialogue"))}function ju(){--Yd>0||(Yd=0,Bc=!1,uc(!1),mn.classList.remove("show"),setTimeout(()=>{mn.classList.contains("show")||mn.classList.remove("narr","thought")},320),document.body.classList.remove("thinking"),Wm(),ls(document.body.classList.contains("playing")),document.body.classList.remove("in-dialogue"))}function Bw(){const i=Kd;Kd=null,vc=null,ju(),Re("dialogue:end",{tree:i}),i&&Re(`dialogue:end:${i}`)}function zw(i){const e=Ym(i);if(e){if(!e.userData.seated){const t=new A().subVectors(pe.position,e.position);e.userData.turnTo=Math.atan2(t.x,t.z);const n=e.rotation.y;let s=e.userData.turnTo-n;if(s=Math.atan2(Math.sin(s),Math.cos(s)),Math.abs(s)<2.2){const a=performance.now(),r=o=>{const c=Math.min(1,(o-a)/420);e.rotation.y=n+s*(c*c*(3-2*c)),c<1&&requestAnimationFrame(r)};requestAnimationFrame(r)}else e.rotation.y=e.userData.turnTo}ng(i,.17)}}function ng(i,e){const t=Ym(i);if(!t)return;const n=t.position.clone();n.y+=(t.userData.height||1.3)*.8,Em(n,{lift:e})}async function pp(i,e){const t=K.dialogue[i];if(!t){Re("content:error",{message:`Dialogue "${i}" not found`});return}if(Bc)return;qu(),Kd=i,vc=e||null,e&&zw(e),Re("dialogue:start",{tree:i,npc:e});let n=(t.entries||[]).find(c=>Et(c.when))?.node||t.start;const s=t.farewell||"end",a=t.hub&&t.nodes[t.hub]?t.hub:null;let r=!1,o=0;try{for(;n&&o++<500;){const c=t.nodes[n];if(!c){Re("content:error",{message:`dialogue/${i}: node "${n}" missing`});break}if(c.when!==void 0&&!Et(c.when)){n=c.elseNext;continue}bt.seen(`${i}#${n}`);const l=r&&n===a;if(r=!1,c.text&&!l&&await Wu({speaker:c.speaker,text:c.currentLead&&vn()?.text||c.text,audio:c.audio,thought:c.thought}),l||await Vt(c.effects),c.choices){const d=await Ow(c.choices);await Vt(d.effects),n=d.next;continue}if(a&&n!==a&&n!==s&&!c.final&&(c.end||c.next===s)){n=a,r=!0;continue}if(c.end)break;n=c.next}}finally{Bw()}}en("dialogue",async i=>{if(!i.greeting)return pp(i.tree,i.npc);const e=K.dialogue[i.tree];if(!e)return pp(i.tree,i.npc);const t=e.nodes[(e.entries||[]).find(n=>Et(n.when))?.node||e.start];t?.text&&await Vt({do:"greet",speaker:t.speaker,text:i.text||t.text})});const ha=S("div",{class:"greet","aria-live":"polite"},S("b",{class:"greet-name"}),S("span",{class:"greet-text"}));us.append(ha);let $d=0;const Xu=()=>{clearTimeout($d),ha.classList.remove("show")};Ge("dialogue:start",Xu);en("greet",async i=>{if(Bc)return;const e=tg(i.speaker),t=we(i.text);ha.querySelector(".greet-name").textContent=e.name||"",ha.querySelector(".greet-text").textContent=t,ha.style.setProperty("--sp",e.color||"#ddd"),ha.classList.add("show"),X.save.transcript.push({who:e.name||"Someone",text:t}),Re("subtitle",{speaker:i.speaker,text:t}),clearTimeout($d),$d=setTimeout(Xu,2600+t.length*45)});en("say",async i=>{qu();try{await Wu(i)}finally{ju()}});en("narrate",async i=>{const e=K.narration[i.line];if(e){for(;Cs.childElementCount&&mn.classList.contains("show");)await new Promise(t=>setTimeout(t,200));qu();try{await Wu({speaker:"narrator",text:e.text,audio:e.audio})}finally{ju()}}});const Hw=i=>i.kind==="essential"?"Essential evidence":i.kind==="theory"?"Theory note":"Evidence";en("keypad",i=>new Promise(e=>{const t=String((K.game.config||{})[i.codeKey||"towerPin"]??"");if(i.flag&&X.save.flags[i.flag]){Vt(i.then).then(e);return}let n="",s=!1,a,r;const o=S("div",{class:"kp-display","aria-live":"polite",text:"····"}),c=we(i.text||"Enter the access code."),l=S("p",{class:"kp-msg",text:c}),d=()=>{o.textContent="•".repeat(n.length)+"·".repeat(Math.max(4,t.length)-n.length)},u=b=>{if(!s){if(clearTimeout(a),o.classList.remove("bad"),b==="clr"||b==="back"){n=b==="clr"?"":n.slice(0,-1),d();return}Ut("key",1,Nw[Number(b)]??0)||sn(520+Number(b)*30,.03),n.length<Math.max(4,t.length)&&(n+=b),d(),!(!t||n.length!==t.length)&&(n===t?(s=!0,o.classList.add("ok"),o.textContent="OPEN",l.textContent=we(i.successText||"The lock clicks open."),Ut("unlock")||sn(990,.12),i.flag&&bt.setFlag(i.flag),r=setTimeout(()=>Lt(f),700)):(o.classList.add("bad"),Ut("denied")||sn(180,.12),l.textContent=we(i.wrongText||"The keypad buzzes. Wrong code."),n="",a=setTimeout(d,450)))}},h=["1","2","3","4","5","6","7","8","9","clr","0","back"].map(b=>S("button",{type:"button",class:`kp-key${b.length>1?" fn":""}`,text:b==="clr"?"C":b==="back"?"⌫":b,"aria-label":b==="clr"?"Clear":b==="back"?"Delete digit":b,onclick:()=>u(b)})),f=S("div",{class:"panel inspect keypad"},S("div",{class:"kp-card"},S("div",{class:"kicker",text:"Security keypad"}),S("h2",{text:we(i.title||"Keypad")}),l,o,S("div",{class:"kp-grid"},h),S("button",{class:"btn ghost",type:"button",text:"Step back",onclick:()=>Lt(f)}))),g=b=>{/^[0-9]$/.test(b.key)?u(b.key):b.key==="Backspace"&&(b.preventDefault(),u("back"))};addEventListener("keydown",g),Bi(f,{label:i.title||"Keypad",onClose:async()=>{clearTimeout(a),clearTimeout(r),removeEventListener("keydown",g),await Vt(s?i.then:i.fail),e()}}),t||(l.textContent="Keypad code not configured (game.json → config.towerPin).")}));function Gw(i,e,t){if(i.video)return S("video",{class:"inspect-video",src:"./"+i.video,poster:i.poster?"./"+i.poster:void 0,controls:!0,playsinline:!0,loop:!0,"aria-label":t});const n=i.image||e?.image;if(n)return S("img",{src:"./"+n,alt:t,class:"inspect-img"});const s=i.print||e?.print;return s?S("div",{class:"inspect-print"},S("div",{class:"paper-print print-"+s.style},...s.lines.map(a=>S("span",{text:we(a)})))):null}en("inspect",i=>new Promise(e=>{const t=i.evidence?K.evidence[i.evidence]:null,n=i.title??t?.title??"Something",s=i.text??t?.description??"",a=S("div",{class:"panel inspect"},S("div",{class:"inspect-card"},Gw(i,t,n),S("div",{class:"inspect-body"},S("div",{class:"kicker",text:t?Hw(t):i.kicker||"Inspect"}),S("h2",{text:we(n)}),S("p",{text:we(s)}),i.entries?.length?kw(i.entries,i.entryLabel):null,i.listening&&S("button",{class:"btn ghost",type:"button",text:we(i.listening.title),onclick:()=>Vt(i.listening)}),!i.text&&t?.points?S("p",{class:"ev-points",text:we(t.points)}):"",S("button",{class:"btn primary",type:"button",autofocus:!0,onclick:()=>Lt(a),text:i.confirm||(t&&!X.save.evidence.includes(i.evidence)?"Add to case file":"Done")})))),r=a.querySelector(".inspect-video");let o;if(r){a.classList.add("television"),r.volume=X.settings.master*X.settings.music,o=zm(r);const c=S("div",{class:"video-error",hidden:!0,role:"alert"},S("p",{text:"The video could not load."}),S("button",{type:"button",class:"btn ghost",text:"Retry video",onclick:()=>{c.hidden=!0,r.load(),o.play().catch(()=>{})}}));a.querySelector(".inspect-body").append(c),r.addEventListener("error",()=>{c.hidden=!1}),r.addEventListener("canplay",()=>{c.hidden=!0}),o.play().catch(()=>{})}a.addEventListener("click",c=>{c.target===a&&Lt(a)}),Bi(a,{label:n,onClose:async()=>{o?.dispose(),r&&(r.removeAttribute("src"),r.load()),i.evidence&&bt.giveEvidence(i.evidence),await Vt(i.then),e()}})}));const Ns=S("div",{class:"cine","aria-live":"polite"}),wt=S("canvas",{class:"cine-cv"}),Bn=S("div",{class:"cine-card"}),Zi=S("div",{class:"cine-sub"}),Vw=S("div",{class:"cine-bars","aria-hidden":"true"}),xc=S("button",{class:"cine-skip",type:"button"},S("span",{text:"Skip"}),S("span",{html:Ot("skip")}));Ns.append(wt,Bn,Vw,Zi,xc);us.append(Ns);const Ji=wt.getContext("2d"),Jd={};let ya=!1;xc.addEventListener("click",()=>{ya=!0});function Ww(i){return Promise.all(Object.entries(i||{}).map(([e,t])=>Jd[t]?null:new Promise(n=>{const s=new Image;s.onload=s.onerror=()=>n(),s.src="./"+t,Jd[t]=s})))}function ig(){const i=Math.min(devicePixelRatio||1,2);wt.width=innerWidth*i,wt.height=innerHeight*i}addEventListener("resize",ig);ig();const sg=i=>i<.5?2*i*i:1-Math.pow(-2*i+2,2)/2,Uo=(i,e,t)=>i+(e-i)*t;function qw(i,e,t,n){Ji.fillStyle="#000",Ji.fillRect(0,0,wt.width,wt.height);const s=Jd[i];if(!s||!s.naturalWidth)return;const a=e.cam||{from:[1,.5,.5],to:[1,.5,.5]},r=e.ease?sg(t):t;let o=Uo(a.from[0],a.to[0],r),c=Uo(a.from[1],a.to[1],r),l=Uo(a.from[2],a.to[2],r);X.settings.reducedMotion&&(o=a.from[0],c=a.from[1],l=a.from[2]);const d=s.naturalWidth,u=s.naturalHeight;if(wt.width<wt.height&&["A","B"].includes(e.shot)){const y=wt.width*u/d;Ji.drawImage(s,0,(wt.height-y)/2,wt.width,y);return}const h=wt.width/wt.height,f=d/u;let g=d/o,b=u/o;h<f?g=b*h:b=g/h;let m=0,p=0;if(e.shake&&!X.settings.reducedMotion){const y=e.shake*(e.shakeDecay?Math.max(0,1-n/.6):1);m=Math.sin(n*53)*y+Math.sin(n*31)*y*.5,p=Math.cos(n*47)*y*.7}const v=Math.min(Math.max(c*d-g/2+m,0),d-g),x=Math.min(Math.max(l*u-b/2+p,0),u-b);Ji.drawImage(s,v,x,g,b,0,0,wt.width,wt.height),e.dim&&(Ji.fillStyle=`rgba(0,0,0,${Uo(e.dim[0],e.dim[1],t)})`,Ji.fillRect(0,0,wt.width,wt.height))}function jw(i){Bn.replaceChildren(),Bn.className=`cine-card on s-${i.style||"title"}`,i.title&&Bn.append(S("div",{class:"cc-title",text:we(i.title)}));const e=(i.lines||[]).map(t=>S("div",{class:"cc-line",text:we(t)}));return Bn.append(...e),i.style==="progress"&&Bn.append(S("div",{class:"cc-bar"},S("i"))),e}async function Xw(i,e){const t=i.frames||{},n=i.colors||{};let s=e.dur||0;if(e.line){const r=e.line.who,o=n[r]||K.characters[r?.toLowerCase()]?.color||"#ddd",c=we(e.line.text);Zi.replaceChildren(S("b",{style:{color:o},text:r&&r!=="NARRATOR"?r:""}),S("span",{text:c}));const l=Bu(e.line.audio,c);Zi.classList.toggle("on",X.settings.subtitles||!l.real),s=Math.max(s,(l.real?l.duration:Om(c))+(e.post??.45))}else Zi.classList.remove("on");if(e.crosstalk&&(Zi.replaceChildren(S("span",{class:"xtalk",text:(i.crosstalk||["—"]).join("  ")})),Zi.classList.add("on")),Bn.className="cine-card",Ns.classList.remove("see3d"),e.card)jw(e.card),wt.style.opacity=0;else if(e.scene3d){wt.style.opacity=0,Ns.classList.add("see3d");const r=e.scene3d;if(r.location&&se.id!==r.location&&await Xm(r.location,r.position,{preview:!0}),r.camera&&await Oa(r.camera,{instant:!0}),r.faceCamera)for(const o of se.npcs.values()){const c=new A().subVectors(pe.position,o.obj.position);o.obj.userData.turnFrom=o.obj.rotation.y,o.obj.userData.turnTo=Math.atan2(c.x,c.z)}r.to&&Oa(r.to,{duration:s||3})}else e.shot==="BLACK"?(wt.style.opacity=1,Ji.fillStyle="#000",Ji.fillRect(0,0,wt.width,wt.height)):wt.style.opacity=1;const a=Ea();await new Promise(r=>{const o=()=>{if(ya)return r();if(X.paused){requestAnimationFrame(o);return}const c=(Ea()-a)/1e3,l=Math.min(1,c/Math.max(s,.01));if(!e.card&&!e.scene3d&&e.shot!=="BLACK"){const d=e.shot==="A"?e.blink&&Math.floor(c/.53)%2?"A0":"A1":e.shot;qw(t[d],e,l,c)}if(e.scene3d?.faceCamera)for(const d of se.npcs.values()){const u=Math.min(1,c/1.6),h=d.obj.userData.turnFrom??0;let g=(d.obj.userData.turnTo??0)-h;for(;g>Math.PI;)g-=2*Math.PI;for(;g<-Math.PI;)g+=2*Math.PI;d.obj.rotation.y=h+g*sg(u)}if(e.card?.style==="progress"){const d=Bn.querySelector(".cc-bar i");d&&(d.style.width=`${Math.round(l*100)}%`)}if(e.card?.reveal&&[...Bn.querySelectorAll(".cc-line")].forEach((d,u,h)=>d.classList.toggle("on",l>=(u+1)/(h.length+1))),c>=s)return r();requestAnimationFrame(o)};o()}),Jr()}function Yw(i){return new Promise(e=>{const t="./",n=S("video",{class:"cine-film",playsinline:!0,preload:"auto"});n.playsInline=!0,i.poster&&(n.poster=t+i.poster);const s=()=>{n.volume=Math.max(0,Math.min(1,(X.settings.master??1)*(X.settings.voice??1)))};s(),wt.style.opacity=0,Zi.classList.remove("on"),Bn.className="cine-card";let a=!1,r=!1,o=0;const c=()=>l(!0),l=u=>{r||(r=!0,cancelAnimationFrame(o),xc.removeEventListener("click",c),n.pause(),n.removeAttribute("src"),n.load(),n.remove(),wt.style.opacity=1,e(u))};n.addEventListener("playing",()=>{a=!0}),n.addEventListener("ended",()=>l(!0)),n.addEventListener("error",()=>l(a));const d=()=>{if(!r){if(ya)return l(!0);s(),X.paused&&!n.paused?n.pause():!X.paused&&n.paused&&a&&!n.ended&&n.play().catch(()=>{}),o=requestAnimationFrame(d)}};xc.addEventListener("click",c),Ns.insertBefore(n,Bn),n.src=t+i.video,n.play().catch(()=>{n.muted=!0,n.play().catch(()=>l(!1))}),setTimeout(()=>{a||l(!1)},12e3),d()})}async function Yu(i){const e=K.cinematics[i];if(!e){Re("content:error",{message:`Cinematic "${i}" not found`});return}if(ya=!1,await Ww(e.frames),Ns.classList.add("on"),document.body.classList.add("in-cinematic"),ls(!1),uc(!0),Re("cinematic:start",{id:i}),!(e.video?await Yw(e):!1))for(const n of e.beats||[]){if(ya)break;await Xw(e,n)}Jr(),Zi.classList.remove("on"),Bn.className="cine-card",Ns.classList.remove("on","see3d"),document.body.classList.remove("in-cinematic"),ls(document.body.classList.contains("playing")&&!document.body.classList.contains("in-dialogue")),uc(!1),Re("cinematic:end",{id:i,skipped:ya}),await Vt(e.then)}en("cinematic",i=>Yu(i.id));const Kw=S("button",{type:"button",class:"pause-game icon-btn","aria-label":"Pause game",title:"Pause game",html:Ot("pause"),onclick:rg});us.append(Kw);function ag(){const i=X.save.transcript,e=S("ol",{class:"transcript-lines"},...i.map(n=>S("li",{},S("b",{text:n.who}),S("span",{text:n.text})))),t=S("section",{class:"panel transcript"},S("div",{class:"case-sheet"},S("header",{},S("h2",{text:"Dialogue history"}),S("button",{type:"button",class:"icon-btn","aria-label":"Close history",html:Ot("close"),onclick:()=>Lt(t)})),i.length?e:S("p",{text:"Your conversations will appear here."})));Bi(t,{label:"Dialogue history"}),requestAnimationFrame(()=>e.lastElementChild?.scrollIntoView({block:"nearest"}))}function rg(){if(Us()||X.paused||!document.body.matches(".playing, .in-cinematic"))return;lh(!0);const i=S("section",{class:"panel pause-panel"},S("div",{class:"pause-sheet"},S("h2",{text:"Paused"}),S("button",{type:"button",class:"btn primary",text:"Resume",onclick:()=>Lt(i)}),S("button",{type:"button",class:"btn ghost",text:"Dialogue history",onclick:ag}),S("button",{type:"button",class:"btn ghost",text:"Settings",onclick:()=>Re("open:settings")}),K.game.invite?.url&&S("a",{class:"btn ghost",href:K.game.invite.url,target:"_blank",rel:"noopener noreferrer",text:K.game.invite.button||"Join the Discord"}),document.body.matches(".playing")&&S("button",{type:"button",class:"btn ghost",text:"Save and quit to title",onclick:()=>{Wa(),location.reload()}})));Bi(i,{label:"Paused",onClose:()=>lh(!1)})}addEventListener("keydown",i=>{i.key==="Escape"&&!i.repeat&&!i.defaultPrevented&&!Us()&&rg()});let fa;Ge("location:loading",()=>{fa&&Lt(fa)});const mp=i=>Number.isFinite(i)?Math.floor(i/60)+":"+String(Math.floor(i%60)).padStart(2,"0"):"–:––";function og(i,e,t,n=i){return fa&&Lt(fa),new Promise(s=>{const a=new Audio;a.preload="metadata";const r=zm(a),o=S("h2"),c=S("p"),l=S("p",{class:"listen-status",role:"status"}),d=S("output",{"aria-label":"Playback time"}),u=S("button",{type:"button",class:"btn primary",text:"Play",onclick:()=>{a.paused?y():r.pause()}}),h=S("button",{type:"button",class:"btn ghost",text:"Stop",onclick:()=>{r.pause(),a.readyState&&(a.currentTime=v()),l.textContent="Stopped",x()}}),f=S("div",{class:"listen-tracks",role:"group","aria-label":"Choose a recording"}),g=S("button",{type:"button",class:"btn ghost listen-close","aria-label":"Close listening station",text:"Close",onclick:()=>Lt(b)}),b=S("div",{class:"panel inspect listening"},S("div",{class:"inspect-card"},S("div",{class:"inspect-body"},S("div",{class:"listen-head"},S("p",{class:"kicker",text:n}),g),i.includes("Taku")||i.includes("Savage Cat")||i==="Listening desk"?S("img",{class:"listen-mark",src:"./assets/discoveries/civic/savage-cat.png",alt:"Savage Cat emblem"}):null,o,c,f,S("div",{class:"listen-controls"},u,h,d),l)));let m,p=0;function v(){return m.start||0}function x(){u.textContent=a.paused||a.ended?"Play":"Pause",a.paused&&a.currentTime>v()+.1&&!a.ended&&(u.textContent="Resume"),h.disabled=a.paused&&a.currentTime<=v()+.1,d.textContent=mp(Math.max(0,a.currentTime-v()))+" / "+mp(m.len??a.duration-v())}async function y(){const T=++p;(a.ended||m.len&&a.currentTime>=v()+m.len)&&(a.currentTime=v());try{await r.play()}catch(R){T===p&&R.name!=="AbortError"&&(l.textContent=a.error?"Recording unavailable. Select another track or retry Play.":"Press Play to start this recording.")}}function D(T,R){p++,r.pause(),m=T,a.src="./"+T.src,v()&&(a.currentTime=v()),o.textContent=T.title,c.textContent=[T.artist,T.context].filter(Boolean).join(" · "),l.textContent="Ready",x();for(const[I,_]of[...f.children].entries())_.setAttribute("aria-pressed",String(e[I]===T));R&&y()}for(const T of e)f.append(S("button",{type:"button",text:T.title,class:"btn ghost",onclick:()=>D(T,!1)}));e.length===1&&(f.hidden=!0),a.onplaying=()=>{l.textContent="Playing",x()},a.onpause=()=>{l.textContent==="Playing"&&(l.textContent="Paused"),x()},a.ontimeupdate=()=>{m.len&&a.currentTime>=v()+m.len&&!a.paused&&(r.pause(),l.textContent="Finished"),x()},a.onended=()=>{l.textContent="Finished",x()},a.ondurationchange=x,a.onerror=()=>{l.textContent="Recording unavailable. Select another track or retry Play."},fa=b,Bi(b,{label:i,onClose:()=>{p++,r.dispose(),fa=null,a.removeAttribute("src"),a.load(),s()}}),D(e[0],t)})}en("listeningStation",i=>og(i.title,i.tracks.map(e=>su[e]),!!i.autoplay,i.kicker||i.title));en("listen",i=>og(i.title||"Recording",[i],!0));const Ku=S("div",{class:"hud"}),Os=S("div",{class:"hud-place"},S("div",{class:"hud-loc"}),S("div",{class:"hud-pos"})),cg=S("div",{class:"hud-clock","aria-label":"City time"}),Zr=S("nav",{class:"hud-tools","aria-label":"Case tools"}),Oo=(i,e,t)=>{const n=S("button",{type:"button",class:`tool t-${i}`,"data-tool":i,"aria-label":e,title:e},S("span",{html:Ot(t)}),S("span",{class:"tl",text:e}),S("i",{class:"badge",hidden:!0}));return n.addEventListener("click",()=>{Ut("click")||sn(700,.04),Re(`open:${i}`)}),n};Zr.append(Oo("map","Map","map"),Oo("board","Board","board"),Oo("casefile","Case file","notebook"),Oo("settings","Settings","settings"));const Ma=S("nav",{class:"hud-nav","aria-label":"Move"}),$w=S("button",{type:"button",class:"recenter","aria-label":"Recenter view",title:"Recenter view",html:Ot("reset"),onclick:()=>Tm()}),Zn=S("div",{class:"tut",role:"status"}),Nr=S("div",{class:"toasts","aria-live":"polite"}),lg=S("details",{class:"content-errors",hidden:!0},S("summary",{text:"Content issues"}),S("ul")),Di=S("button",{type:"button",class:"cross-building",hidden:!0});Di.addEventListener("click",async()=>{const i=se.def?.crossing,e=se.def?.hotspots.find(t=>t.id===i?.hotspot);if(!(!e||Di.disabled||Us()||document.body.classList.contains("in-dialogue"))){Di.disabled=!0;try{await Vt(e.action)}finally{Di.disabled=!1}}});const Fr=S("button",{type:"button",class:"hud-lead",hidden:!0});Fr.addEventListener("click",()=>{Gc||Us()||document.body.matches(".in-dialogue,.in-cinematic,.in-finale")||document.querySelector("#veil.on")||mg(vn())?.go()});Os.append(cg,Fr);const Jw=S("div",{class:"hud-corner"},Di,$w);Ku.append(Os,Zr,Ma,Jw,Zn);us.append(Ku,Nr,lg);const zc=()=>{let i=Os.getBoundingClientRect().bottom;if(Zn.classList.contains("on")){const e=Zn.getBoundingClientRect();e.height&&(i=Math.max(i,e.bottom))}Nr.style.setProperty("--below-place",Math.ceil(i+8)+"px")};new ResizeObserver(zc).observe(Os);new ResizeObserver(zc).observe(Zn);addEventListener("resize",zc);const Hc=i=>Ku.classList.toggle("on",i);setInterval(()=>{cg.textContent=$M()},1e3);let Gc=!1,Ii=null;const Qw={left:"left",right:"right",forward:"up",back:"down",in:"up",out:"down"},Zw={Entrance:"Entry",Investigations:"Case desk",Advertisement:"Wall print","Worldbuilding shelves":"Worlds","City archive stacks":"City archive","Oracle Spatial Matrix":"Oracle exhibit","Toy Plane / Canyon Run":"Canyon Run","Public assistance":"Help desk","Playback equipment":"Headphones","Elevator landing":"Elevator"};function dg(i){if(Ma.replaceChildren(),Gc)return;const e=se.def?.crossing,t=se.def?.hotspots.find(o=>o.id===e?.hotspot);let n=!!t?.positions?.includes(i.id);if(n&&t.at&&i.camera?.position&&i.camera?.target){const[o,,c]=i.camera.position,[l,,d]=i.camera.target,u=Math.atan2(l-o,d-c),h=Math.atan2(t.at[0]-o,t.at[2]-c);Math.abs(Math.atan2(Math.sin(h-u),Math.cos(h-u)))>Math.PI*.45&&(n=!1)}Di.hidden=!e||n||!/^leave/i.test(e.label),e&&Di.replaceChildren(S("span",{html:Ot("door")}),S("span",{text:e.label}));const s=e?.alternate;if(s?.positions.includes(i.id)){const o=s.action||se.def.hotspots.find(c=>c.id===s.hotspot)?.action;o&&Ma.append(S("button",{type:"button",class:"navlink d-in",text:s.label,onclick:async c=>{const l=c.currentTarget;l.disabled=!0;try{await Vt(o)}finally{l.disabled=!1}}}))}const a=Ii&&Array.isArray(Ii.route)?Ii.route:null,r=gg(i.id);eE(i.id);for(const o of i.links||[]){if(!Et(o.when)||!Tn("move",o.to)||a&&!a.includes(o.to))continue;const c=se.def.positions.find(g=>g.id===o.to),l=o.to===r||Ii?.doneTo===o.to,d=o.label==="Back to the entrance"?"Entrance":o.label||c?.label||o.to,u=Zw[d],h=S("span",{class:"route-caption"},S("span",{class:u?"route-full":"",text:d}));u&&h.append(S("span",{class:"route-short",text:u}));const f=S("button",{type:"button",class:`navlink d-${o.dir||"forward"}${l?" is-lead":""}`,"aria-label":d,"aria-description":l?"Toward your current lead":null},S("span",{html:Ot(Qw[o.dir]||"up")}),h);f.addEventListener("click",()=>{Re("nav",{to:o.to}),Hu(o.to)}),Ma.append(f)}}let as=null,ug=null,Qd=0;const _c=i=>i?i.shortText||i.text:null,$u=()=>{const i=vn();return!!i&&ug===_c(i)};function hg(){clearTimeout(Qd),ug=_c(vn()),za(),Ba()}function fg(){clearTimeout(Qd);const i=vn(),e=[].concat(i?.where||[]).find(n=>n.location===se.id);if(!e?.hotspot||$u()||e.position&&e.position!==se.position||se.def?.crossing?.hotspot===e.hotspot)return;const t=_c(i);Qd=setTimeout(()=>{_c(vn())===t&&!X.paused?hg():fg()},75e3)}const pg=()=>{const i=vn()?.where;return[].concat(i||[]).find(e=>e.location===se.id)||(as?.location===se.id?as:null)};en("suggest",i=>{as={location:se.id,position:i.position,hotspot:i.hotspot},za()});Ge("interact",i=>{as&&i?.id===as.hotspot&&(as=null,za())});Ge("location:entered",()=>{as=null});function mg(i){if(!i)return;if(i.boardHint)return{text:i.shortText||i.text,verb:"Board",go:()=>Re("open:board")};const e=[].concat(i.where||[]).find(r=>r.location===se.id);if(!e)return{text:i.shortText||i.text,verb:"Map",go:()=>Re("open:map")};if(se.def?.crossing?.hotspot===e.hotspot)return{text:se.def.crossing.label,verb:"Enter",go:()=>Di.click()};const t=gg(se.position);if(t)return{text:se.def.positions.find(c=>c.id===se.position)?.links?.find(c=>c.to===t)?.label||se.def.positions.find(c=>c.id===t)?.label,verb:"Go",go:()=>Ma.querySelector(".navlink.is-lead")?.click()};const n=se.def.hotspots?.find(r=>r.id===e.hotspot),s=se.npcs.get(e.hotspot?.replace(/^npc:/,"")),a=n?.label||s?.def.label||K.characters[s?.def.character]?.name;return a&&!$u()?{text:i.shortText||i.text,verb:"Hint",go:hg}:a?{text:a,verb:s?"Talk":"Inspect",go:()=>Iw(e.hotspot)}:{text:i.shortText||i.text,verb:"Map",go:()=>Re("open:map")}}function Ba(){const i=vn();if(Fr.hidden=!i||Zn.classList.contains("on"),!i)return;const e=mg(i);Fr.replaceChildren(S("span",{class:"hl-k",text:"Lead"}),S("span",{class:"hl-t",text:we(e.text)}),S("span",{class:"hl-go",text:e.verb+" ›"})),Fr.setAttribute("aria-label",`Current lead: ${e.verb} — ${we(e.text)}`)}function gg(i){const e=pg();if(!e?.position||e.position===i)return null;const t=new Map([[i,null]]),n=[i];for(;n.length;){const a=n.shift();if(a===e.position)break;for(const r of se.def.positions.find(o=>o.id===a)?.links||[])t.has(r.to)||!Et(r.when)||!Tn("move",r.to)||(t.set(r.to,a),n.push(r.to))}if(!t.has(e.position))return null;let s=e.position;for(;t.get(s)!==i;)s=t.get(s);return s}const bg=S("style",{id:"lead-style"});document.head.append(bg);function eE(i){const e=pg(),t=e&&e===as&&![].concat(vn()?.where||[]).some(s=>s.location===se.id),n=e?.hotspot&&(!e.position||e.position===i)&&(t||$u()||se.def?.crossing?.hotspot===e.hotspot);bg.textContent=n?`#markers .marker:not(.hidden)[data-id="${CSS.escape(e.hotspot)}"] .ring{border:2px solid var(--brass-2);color:var(--brass-2);background:none;box-shadow:0 0 0 1px rgba(13,12,18,.6),inset 0 0 0 1px rgba(13,12,18,.6);animation:leadring 1.5s ease-in-out infinite}#markers .marker:not(.hidden)[data-id="${CSS.escape(e.hotspot)}"] .ring svg{opacity:0}#markers .marker:not(.hidden)[data-id="${CSS.escape(e.hotspot)}"] .lab{color:var(--brass-2);visibility:visible}`:"",document.body.classList.toggle("lead-here",!!n)}Ge("position:changed",({def:i})=>{Gc=!1,fg(),Ba(),Os.querySelector(".hud-pos").textContent=i.label||"",dg(i)});Ge("position:leaving",({id:i})=>{Gc=!0,Di.hidden=!0,Ma.replaceChildren(),se.id==="rooftop"&&(i==="landing"||i==="stairs")&&(Os.querySelector(".hud-pos").textContent=i==="landing"?"Approaching the roof door…":"Heading downstairs…")});Ge("location:entered",({def:i})=>{Os.querySelector(".hud-loc").textContent=i.name,Ba()});for(const i of["flag","evidence","discovered"])Ge(i,()=>{za(),Ba()});const Hn=[];let ei=null;function tE(){return!X.paused&&!Us()&&!document.hidden&&!document.body.matches(".in-dialogue, .in-cinematic, .in-finale")&&!document.querySelector("#veil.on")}function nE(){if(!Hn.length||!tE()){Nr.hidden=!0;return}Nr.hidden=!1;const i=Hn[0];if(!ei){const e=typeof i.text=="function"?i.text():i.text;if(!e){Hn.shift();return}zc(),ei=i.el||S("div",{class:"toast in k-"+i.kind},S("span",{text:e})),ei.classList.add("in"),Nr.replaceChildren(ei)}i.shown=!0,i.remaining-=200,i.remaining<=0&&(Hn.shift(),ei.remove(),ei=null)}Ge("location:entered",()=>{for(let i=Hn.length-1;i>=0;i--)Hn[i].shown&&Hn.splice(i,1);ei&&!Hn[0]?.shown&&(ei.remove(),ei=null)});setInterval(nE,200);function Fs(i,e="info",t=3400){const n={text:i,kind:e,remaining:t};e==="evidence"?Hn.splice(ei?1:0,0,n):Hn.push(n)}Ge("evidence",({id:i})=>{const e=K.evidence[i];if(Zd("casefile"),Zd("board"),e?.kind!=="essential"){Ut("evidence"),Fs(`Evidence added: ${e?.title??i}`,"evidence");return}Ut("clue");const t=Object.values(K.evidence).filter(a=>a?.kind==="essential").length,n=X.save.evidence.filter(a=>K.evidence[a]?.kind==="essential").length,s={kind:"evidence",remaining:16e3};s.text=()=>{const a=vn(),r=n>=t;return s.el=S("div",{class:"toast k-clue",role:"group","aria-label":`Essential evidence ${n} of ${t}`},S("small",{text:`Essential evidence · ${n} of ${t}`}),S("b",{text:`${e.code?e.code+" · ":""}${e.title}`}),e.points?S("p",{text:we(e.points)}):"",a?S("p",{class:"clue-next",text:`Next · ${we(a.text)}`}):"",S("div",{class:"clue-actions"},S("button",{type:"button",class:"btn",text:"Got it",onclick:()=>{s.remaining=0}}),S("button",{type:"button",class:"btn ghost",text:r?"Open Board":"Open Case file",onclick:()=>{s.remaining=0,Re(r?"open:board":"open:casefile")}}))),e.title},Hn.splice(ei?1:0,0,s)});Ge("discovered",({id:i})=>{const e=K.board.profile?.needed||0,t=X.save.discovered.length;Fs(`${t<=e?`About Skye · ${t} of ${e}`:"About Skye"} · ${K.discoveries[i]?.title??i}`,"discovery")});Ge("achievement",({id:i})=>{const e=K.achievements.find(n=>n.id===i),t=S("button",{type:"button",class:"toast k-achievement ach-toast","aria-label":`Achievement unlocked: ${e?.title??i}. Open in Case file`,onclick:()=>Re("open:casefile",{achievement:i})},S("span",{class:"ach-badge",html:Ot(e?.icon||"trophy")}),S("span",{class:"ach-text"},S("small",{text:"Achievement"}),S("b",{text:e?.title??i})));Hn.push({text:e?.title??i,kind:"achievement",remaining:4600,el:t}),Ut("achievement")||(sn(880,.08),setTimeout(()=>sn(1320,.12),90))});let Bo=[];Ge("flag",({flag:i})=>{!i.startsWith("unlocked:")||!K.locations[i.slice(9)]||(Bo.length||setTimeout(()=>{const e=Bo;Bo=[];const t=vn()?.destination,n=e.find(a=>a===t)??(e.length===1?e[0]:null);n&&Fs(`New place on your map: ${K.locations[n].name}`,"map");const s=e.filter(a=>a!==n).map(a=>K.locations[a].name);s.length&&Fs(`Optional stops on your map: ${s.join(", ")}`,"map"),Zd("map")},0),Bo.push(i.slice(9)))});function Zd(i){const e=Zr.querySelector(`[data-tool="${i}"] .badge`);e&&(e.hidden=!1)}for(const i of["map","board","casefile"])Ge(`open:${i}`,()=>{const e=Zr.querySelector(`[data-tool="${i}"] .badge`);e&&(e.hidden=!0)});let tc=[],Sa=null;const za=()=>{for(const i of Zr.querySelectorAll("[data-tool]"))i.classList.toggle("tutorial-target",Ii?.done===i.dataset.tool+":opened"),i.disabled=i.dataset.tool!=="settings"&&!Tn(i.dataset.tool+":opened");se.def&&se.position&&dg(se.def.positions.find(i=>i.id===se.position))};Ge("location:entered",({def:i})=>{Sa&&Sa(),Sa=null,Ii=null,tc=(i.tutorial||[]).filter(e=>!X.save.flags[`tut:${e.id}`]),Ju()});function Ju(){if(Ii)return;const i=tc.find(e=>Et(e.when));if(!i){Zn.classList.remove("on"),Zn.replaceChildren(),za(),Ba();return}Zn.replaceChildren(S("span",{class:"tut-k",text:"Tutorial"}),S("span",{text:we(window.matchMedia("(pointer: coarse)").matches&&i.textTouch?i.textTouch:i.text)})),i.done==="tutorial:zoomed"&&matchMedia("(pointer: coarse)").matches&&Zn.append(S("button",{class:"btn zoom-step",type:"button",text:"Zoom in",onclick:()=>Wr(.85)})),Zn.classList.add("on"),Ii=i,za(),Ba(),Sa=Ge(i.done,async e=>{if(!(i.doneTo&&(e?.to??e?.id)!==i.doneTo||i.marker&&i.done==="interact"&&e?.id!==i.marker)){if(i.focusMarker&&["tutorial:looked","tutorial:zoomed"].includes(i.done)){const t=se.def.hotspots.find(n=>n.id===i.focusMarker);if(t&&!eS(t.at))return}Sa(),Sa=null,tc=tc.filter(t=>t!==i),Zn.classList.remove("on"),Ut("click",1,5)||sn(990,.06),bt.setFlag(`tut:${i.id}`),await Vt(i.onComplete),Ii=null,Ju()}})}Ge("flag",()=>Ju());lg.querySelector("ul");function vg(i){{i.forEach(e=>console.warn(e));return}}Ge("content:error",({message:i})=>vg([i]));en("toast",i=>Fs(we(i.text),i.kind));en("recenter",()=>Tm());en("moveTo",i=>Hu(i.position));const xg=i=>{const e=K.locations[i];return!!e&&(e.unlocked===!0||bt.flag(`unlocked:${i}`)||Et(e.unlockWhen??!1))},iE="http://www.w3.org/2000/svg",$t=(i,e={},t=[])=>{const n=document.createElementNS(iE,i);for(const[s,a]of Object.entries(e))n.setAttribute(s,a);return t.forEach(s=>n.append(s)),n};function sE(){return K.game.locations.filter(i=>K.locations[i]?.mapPin&&!K.locations[i].hideOnMap&&xg(i))}function _g(i){return K.game.locations.filter(e=>K.locations[e]?.mapPin&&!K.locations[e].hideOnMap).indexOf(i)+1}function aE(){const i=vn(),e=K.game.map||{},t=$t("svg",{viewBox:"0 0 1000 700",class:"napkin-svg",role:"img","aria-label":"Napkin map of Frequen City"});t.innerHTML=`<defs>
    <filter id="rough"><feTurbulence type="fractalNoise" baseFrequency="0.035" numOctaves="2" seed="4"/><feDisplacementMap in="SourceGraphic" scale="5"/></filter>
    <filter id="paper"><feTurbulence type="fractalNoise" baseFrequency="0.9" numOctaves="3" seed="2" result="n"/><feColorMatrix in="n" type="matrix" values="0 0 0 0 0.94  0 0 0 0 0.91  0 0 0 0 0.84  0 0 0 -0.9 0.95"/></filter>
    <radialGradient id="stain" cx="0.78" cy="0.24" r="0.13"><stop offset="0.75" stop-color="#a77a4a" stop-opacity="0"/><stop offset="0.9" stop-color="#a77a4a" stop-opacity="0.32"/><stop offset="1" stop-color="#a77a4a" stop-opacity="0"/></radialGradient>
  </defs>
  <rect width="1000" height="700" fill="#f3ecdc"/><rect width="1000" height="700" filter="url(#paper)" opacity=".55"/>
  <rect width="1000" height="700" fill="url(#stain)"/>
  <g fill="none" stroke="#c9bfa8" stroke-width="1" opacity=".55">${Array.from({length:14},(r,o)=>`<path d="M0 ${50*o+25} H1000"/>`).join("")}</g>
  <path d="M0 0H1000V700H0z" fill="none" stroke="#d8ccb2" stroke-width="18" opacity=".35"/>`;const n=$t("g",{filter:"url(#rough)",fill:"none",stroke:"#2b3a55","stroke-linecap":"round","stroke-linejoin":"round"});for(const r of e.water||[])n.append($t("path",{d:r,stroke:"#3d6f9a","stroke-width":3,"stroke-dasharray":"2 9",opacity:.8}));for(const r of e.roads||[])n.append($t("path",{d:r,"stroke-width":4.5,opacity:.85}));for(const r of e.minor||[])n.append($t("path",{d:r,"stroke-width":2.2,opacity:.55}));t.append(n);for(const r of e.labels||[]){const o=$t("text",{x:r.x,y:r.y,class:"nap-label",transform:`rotate(${r.r||0} ${r.x} ${r.y})`});o.textContent=r.text,t.append(o)}const s=$t("g"),a=[];for(const r of K.game.locations){const o=K.locations[r];if(!o?.mapPin||o.hideOnMap)continue;const c=xg(r),l=se.id===r||se.def?.exterior===r;if(!c&&o.optional)continue;const d=$t("g",{class:`pin${c?"":" locked"}${l?" here":""}`,transform:`translate(${o.mapPin.x*10} ${o.mapPin.y*7})`,tabindex:c?0:-1,role:c?"button":"img","aria-label":c?`Travel to ${o.name}`:"Unknown place"});if(d.append($t("circle",{r:matchMedia("(pointer: coarse)").matches?40:26,class:"pin-hit"})),c){d.append($t("path",{d:"M-11 -2 A11 11 0 1 1 11 -2 L0 18 Z",class:"pin-body",filter:"url(#rough)"})),d.append($t("circle",{r:4.5,cy:-4,fill:"#f3ecdc"}));const u=o.mapPin.label,h=$t("text",u==="right"?{x:16,y:6,class:"pin-label","text-anchor":"start"}:u==="left"?{x:-16,y:6,class:"pin-label","text-anchor":"end"}:{y:40,class:"pin-label"});h.textContent=o.mapName||o.name,d.append(h);const f=$t("text",{class:"pin-number",y:5});if(f.textContent=_g(r),d.append(f),r===i?.destination&&d.classList.add("lead-pin"),yg(r)){const b=$t("g",{class:"pin-clue",transform:"translate(12 -20)"});b.append($t("circle",{r:8}),$t("path",{d:"M-4 0l3 3 5-6"})),d.append(b)}l&&d.append($t("circle",{r:19,class:"here-ring"}));const g=()=>{Lt($i),Za(r)};a.push({x:o.mapPin.x*10,y:o.mapPin.y*7,go:g,g:d}),d.addEventListener("keydown",b=>{(b.key==="Enter"||b.key===" ")&&(b.preventDefault(),g())})}else{const u=$t("text",{class:"pin-q",y:8});u.textContent="?",d.append(u)}s.append(d)}return t.append(s),t.addEventListener("click",r=>{const o=t.getScreenCTM();if(!o||!a.length)return;const c=new DOMPoint(r.clientX,r.clientY).matrixTransform(o.inverse()),l=Math.max(30,24/(t.getBoundingClientRect().width/1e3));let d=null,u=1/0;for(const f of a){const g=c.y<f.y-12?c.y-(f.y-12):c.y>f.y+44?c.y-(f.y+44):0,b=Math.hypot(c.x-f.x,g);b<u&&(u=b,d=f)}if(d&&u<=l)return d.go();const h=a.find(f=>f.g.contains(r.target));h&&h.go()}),t}const yg=i=>Object.entries(K.evidence).some(([e,t])=>t?.place===i&&X.save.evidence.includes(e));let $i;function Mg(){const i=vn();$i=S("div",{class:"panel napkin"},S("div",{class:"napkin-sheet"},S("header",{},S("h2",{text:"Frequen City"}),S("span",{class:"napkin-note",text:we(K.game.mapNote||"drawn on a bar napkin")}),S("button",{class:"icon-btn",type:"button","aria-label":"Close map",html:Ot("close"),onclick:()=>Lt($i)})),i&&S("p",{class:"map-lead",text:"Current lead · "+i.text}),S("p",{class:"map-help",text:"Tap a pin or a name below to go there. Gold is your current lead. ✓ means you already have that place’s clue."}),aE(),S("nav",{class:"nap-destinations","aria-label":"Destinations"},...sE().map(e=>{const t=K.locations[e];return S("button",{type:"button",text:_g(e)+"  "+(t.mapName||t.name)+(e===i?.destination?" · Lead":yg(e)?" · Clue ✓":""),"data-lead":e===i?.destination,"aria-label":"Travel to "+t.name,"aria-current":se.id===e||se.def?.exterior===e?"location":null,onclick:()=>{Lt($i),Za(e)}})})))),$i.addEventListener("click",e=>{e.target===$i&&Lt($i)}),Bi($i,{label:"Map"}),Re("map:opened")}Ge("open:map",()=>{const i=document.body.classList;Tn("map:opened")&&i.contains("playing")&&!i.contains("in-dialogue")&&!i.contains("in-cinematic")&&Mg()});const $n=document.getElementById("veil");let Ol=!1,_r=0;async function Za(i,e){if(!K.locations[i])return Re("content:error",{message:`travel: unknown location ${i}`});if(Ol)return;Ol=!0;const t=++_r,n=async()=>{t!==_r||!$n.classList.contains("on")||($n.classList.remove("on"),await Promise.allSettled($n.getAnimations().map(r=>r.finished)),t===_r&&(Ol=!1))},s=K.locations[i];$n.querySelector(".veil-title").textContent=s.name,$n.querySelector(".veil-sub").textContent=s.subtitle||"",$n.querySelector(".veil-bar i").style.width="0%",$n.classList.add("on");const a=s.exterior?"enter":se.def?.exterior?"exit":"travel";for(Ut(a)||sn(440,.08),await new Promise(r=>setTimeout(r,X.settings.reducedMotion?50:380));t===_r;)try{await Xm(i,e,{onProgress:r=>{$n.querySelector(".veil-bar i").style.width=`${Math.round(r*100)}%`},onReady:n});break}catch(r){if(console.error(r),t!==_r)return;const o=String(r?.message||r||"unknown error").replace(/\s+/g," ").slice(0,160);$n.querySelector(".veil-sub").textContent=`${s.name} could not load (${o}). Retry, or reload the page; your progress is saved.`;const c=S("button",{type:"button",class:"btn primary",text:"Retry scene"}),l=S("button",{type:"button",class:"btn ghost",text:"Reload the game",onclick:()=>location.reload()});$n.querySelector(".veil-inner").append(c,l),c.focus(),await new Promise(d=>c.addEventListener("click",d,{once:!0})),c.remove(),l.remove(),$n.querySelector(".veil-sub").textContent=s.subtitle||""}await n()}en("travel",i=>Za(i.location,i.position));en("openMap",()=>Mg());const gn=()=>X.save.board;let Nt,Bl,ct,qr,ci="move",kn=null;function nc(){return Math.max(2,Math.min(5,Math.floor(ct.clientWidth/140)))}let Ps=168;function rE(i,e=null){const t=nc(),n=ct.clientWidth,s=ct.clientHeight;let a,r;if(e&&n>=700){const o=e.n;e.kind==="clue"?(a=.04*n+o%2*.24*n,r=56+Math.floor(o/2)*(Ps+24)+o%2*40):(a=.6*n+o%3*.13*n,r=56+Math.floor(o/3)*(Ps+24)+o%2*36)}else a=12+i%t*n/t,r=42+Math.floor(i/t)*Ps;return{x:100*a/n,y:100*r/s,py:r}}function oE(i){const e=gn().pins[i.key]||i.pos||{x:0,y:0},t=S("div",{class:`bcard k-${i.kind}`,tabindex:0,role:"button","data-key":i.key,"aria-label":`${i.title}. ${ci==="string"?"Select to connect":"Drag to move"}`,style:{left:`${e.x}%`,top:`${e.y}%`,"--tilt":`${i.key.length*37%9-4}deg`}});if(t.append(S("i",{class:"tack","aria-hidden":"true"})),i.kind==="note"){const a=S("textarea",{class:"note-text","aria-label":"Note",rows:4,maxlength:140});a.value=i.text,a.addEventListener("input",()=>{const r=gn().notes.find(o=>o.id===i.id);r&&(r.text=a.value)}),t.append(a,S("button",{class:"note-del",type:"button","aria-label":"Remove note",html:Ot("close"),onclick:r=>{r.stopPropagation(),uE(i.key)}}))}else{t.append(i.image?S("img",{src:"./"+i.image,alt:""}):S("div",{class:"bc-label",text:i.print?.lines[0]||i.source||"Case note"}),S("div",{class:"bc-title",text:we(i.title)}));const a=i.kind2==="essential"?"Clue":i.kind2==="theory"?"Theory":"";a&&t.append(S("div",{class:"bc-tag",text:a})),i.kind2&&t.classList.add(`t-${i.kind2}`)}function n(a,r){const o=100*Math.max(0,ct.clientWidth-t.offsetWidth-4)/ct.clientWidth,c=100*Math.max(0,ct.clientHeight-t.offsetHeight-4)/ct.clientHeight;e.x=Math.max(0,Math.min(o,a)),e.y=Math.max(0,Math.min(c,r)),gn().pins[i.key]=e,t.style.left=e.x+"%",t.style.top=e.y+"%",Ga()}let s=null;return t.addEventListener("pointerdown",a=>{a.target.closest("textarea,button")||(s={x:a.clientX,y:a.clientY,px:100*t.offsetLeft/ct.clientWidth,py:100*t.offsetTop/ct.clientHeight,moved:0},t.setPointerCapture(a.pointerId),t.classList.add("lift"))}),t.addEventListener("pointermove",a=>{if(!s||ci!=="move")return;const r=ct.getBoundingClientRect(),o=(a.clientX-s.x)/r.width*100,c=(a.clientY-s.y)/r.height*100;s.moved=Math.abs(o)+Math.abs(c),n(s.px+o,s.py+c)}),t.addEventListener("pointercancel",()=>{s=null,t.classList.remove("lift")}),t.addEventListener("pointerup",()=>{if(!s)return;const a=s.moved;s=null,t.classList.remove("lift"),(ci==="string"||a<.6)&&gp(i.key,t)}),t.addEventListener("keydown",a=>{if(a.target!==t)return;(a.key==="Enter"||a.key===" ")&&(a.preventDefault(),gp(i.key,t));const r={ArrowLeft:[-2,0],ArrowRight:[2,0],ArrowUp:[0,-2],ArrowDown:[0,2]}[a.key];r&&ci==="move"&&(a.preventDefault(),n(100*t.offsetLeft/ct.clientWidth+r[0],100*t.offsetTop/ct.clientHeight+r[1]))}),t}function gp(i,e){if(ci!=="string"){Re("board:card",{key:i});const s=Ag().find(a=>a.key===i);s?.kind==="evidence"&&dE(s);return}if(!kn){kn=i,e.classList.add("picked"),Ut("pin")||sn(660,.04);return}if(kn===i){kn=null,e.classList.remove("picked");return}const t=gn().strings,n=t.findIndex(([s,a])=>s===kn&&a===i||s===i&&a===kn);n>=0?t.splice(n,1):t.push([kn,i]),(n<0?Ut("string"):Ut("unlink"))||sn(n>=0?380:880,.06),Re("board:string",{a:kn,b:i,removed:n>=0}),n<0?lE(kn,i):Nt&&(Nt.querySelector(".board-detail").hidden=!0),ct.querySelector(".picked")?.classList.remove("picked"),kn=null,Ga()}const fi=()=>K.board.deductions||[],Sg=(i,e,t)=>{const[n,s]=i.pair.map(a=>`e:${a}`);return n===e&&s===t||n===t&&s===e},Ha=i=>!!X.save.flags[`deduce:${i}`];function cE(i,e){return fi().some(t=>Ha(t.id)&&Sg(t,i,e))}function lE(i,e){const t=fi().find(s=>Sg(s,i,e));if(!t){const s=Nt.querySelector(".board-detail"),a=[i,e].includes("e:e2_transfer")&&[i,e].includes("e:e3_sighting"),r=[i,e].map(o=>K.evidence[o.slice(2)]?.strengthen).filter(Boolean);s.replaceChildren(S("h3",{text:"A possible lead"}),S("p",{text:a?"Both point to the tower. Look for a record that shows someone used the building.":"These can share a theory, but they don’t confirm it together."}),...a?[]:r.map(o=>S("p",{class:"b-why",text:we(o)})),S("button",{class:"btn small",type:"button",text:"Remove this string",onclick:()=>{gn().strings=gn().strings.filter(([o,c])=>!(o===i&&c===e||o===e&&c===i)),s.hidden=!0,Ga()}})),s.hidden=!1;return}if(Ha(t.id))return;bt.setFlag("board:strung"),bt.setFlag(`deduce:${t.id}`),Ut("deduce")||sn(990,.12);const n=Nt?.querySelector(".board-detail");n&&(n.replaceChildren(S("div",{class:"kicker",text:"Deduction confirmed"}),S("h3",{text:we(t.title)}),S("p",{text:we(t.text)})),n.hidden=!1),Re("board:deduced",{id:t.id}),Ga(),Qu(),fi().every(s=>Ha(s.id))&&!X.save.flags["board:solved"]&&(wg()?(bt.setFlag("board:solved"),n.append(S("button",{class:"btn primary",type:"button",text:"Follow the rooftop lead",onclick:()=>{Lt(Nt),Za("rooftop")}}))):n.append(S("p",{class:"b-why",text:we(K.board.profile.pending)})))}const ic=()=>K.board.profile?.needed||0,wg=()=>X.save.discovered.length>=ic();Ge("discovered",()=>{if(Qu(),!fi().length||!fi().every(e=>Ha(e.id))||!wg()||X.save.flags["board:solved"]||(bt.setFlag("board:solved"),Nt))return;const i=()=>{if(!X.save.flags["board:announced"]){if(document.body.matches(".panel-open, .in-dialogue, .in-cinematic"))return setTimeout(i,400);bt.setFlag("board:announced"),Vt(K.board.onSolved)}};i()});function Eg(){const i=X.save.evidence.length;return i===0?"Cards appear here as you collect evidence. + Note works any time: write down what you suspect.":i===1?"Tap your card to read it. You need a second card before Red string can connect anything.":we(K.board.hint)}function Qu(){const i=Nt?.querySelector(".b-tally");if(!i)return;const e=fi().filter(s=>Ha(s.id)).length;i.textContent=`${e}/${fi().length} connections`+(ic()?` · About Skye ${Math.min(X.save.discovered.length,ic())}/${ic()}`:"");const t=Nt.querySelector(".b-hint-text"),n=vn();n?.boardHint?t.replaceChildren(S("details",{},S("summary",{text:"Need a hint?"}),S("p",{text:we(n.boardHint)}))):t.textContent=Eg()}function dE(i){const e=Nt.querySelector(".board-detail"),t=X.save.evidence.length<2;e.replaceChildren(S("div",{class:"kicker",text:Tg(i)}),S("h3",{text:we(i.title)}),S("p",{text:we(i.description||"")}),i.source?S("p",{class:"src",text:`Found: ${we(i.source)}`}):"",t?S("p",{class:"b-why",text:"One card can’t be tied to anything yet. Drag it where you like or pin a note beside it. When you hold a second card, choose Red string and tap both."}):""),e.hidden=!1}function Tg(i){const e=i.kind2||i.kind;return e==="essential"?"Essential evidence":e==="theory"?"Theory note":"Evidence"}function Ag(){const i=[],e=a=>["essential","record"].includes(K.evidence[a]?.kind),t=[...X.save.evidence].sort((a,r)=>Number(e(r))-Number(e(a)));let n=0,s=0;return t.forEach((a,r)=>{const o=K.evidence[a]||{title:a};i.push({key:`e:${a}`,kind:"evidence",kind2:o.kind,code:o.code,draft:o.draft,title:o.title,image:o.boardImage||o.image,print:o.print,description:o.description,source:o.source,placeholder:o.placeholder,group:e(a)?{kind:"clue",n:n++}:{kind:"theory",n:s++}})}),gn().notes.forEach((a,r)=>i.push({key:`n:${a.id}`,id:a.id,kind:"note",text:a.text,title:"Note",group:{kind:"theory",n:s+r}})),i}function uE(i){i.startsWith("n:")&&(gn().notes=gn().notes.filter(e=>`n:${e.id}`!==i)),gn().strings=gn().strings.filter(([e,t])=>e!==i&&t!==i),delete gn().pins[i],oa()}function Ga(){qr.replaceChildren();const i=ct.getBoundingClientRect();for(const[e,t]of gn().strings){const n=ct.querySelector(`[data-key="${CSS.escape(e)}"]`),s=ct.querySelector(`[data-key="${CSS.escape(t)}"]`);if(!n||!s)continue;const a=n.querySelector(".tack").getBoundingClientRect(),r=s.querySelector(".tack").getBoundingClientRect(),o=a.x+a.width/2-i.x,c=a.y+a.height/2-i.y,l=r.x+r.width/2-i.x,d=r.y+r.height/2-i.y,u=Math.min(60,Math.hypot(l-o,d-c)*.12),h=document.createElementNS("http://www.w3.org/2000/svg","path");h.setAttribute("d",`M${o} ${c} Q${(o+l)/2} ${(c+d)/2+u} ${l} ${d}`),h.setAttribute("class",cE(e,t)?"string deduced":"string"),qr.append(h)}}function oa(){ct.style.setProperty("--columns",nc()),ct.replaceChildren(qr),(K.board.headings||[]).forEach(a=>ct.append(S("div",{class:"b-heading",style:{left:`${a.x}%`,top:`${a.y}%`},text:we(a.text)})));const e=Ag();e.length||ct.append(S("div",{class:"b-empty"},S("p",{text:we(K.board.emptyText||"No evidence yet. Inspect things around the city — what you find ends up here.")})));const t=e.map(oE);ct.append(...t),Ps=Math.max(70,...t.map(a=>a.offsetHeight+12));const n=Math.ceil(t.length/nc()),s=e.filter(a=>a.group?.kind==="clue").length;ct.style.minHeight=Math.max(52+n*Ps,ct.clientWidth>=700?56+Math.ceil(s/2)*(Ps+24)+60:0)+"px",t.forEach((a,r)=>{const o=gn().pins[e[r].key],c=o||rE(r,e[r].group);c.x=Math.min(c.x,100*(ct.clientWidth-a.offsetWidth-6)/ct.clientWidth),c.y=Math.min(c.y,100*(ct.clientHeight-a.offsetHeight-6)/ct.clientHeight),a.style.left=Math.max(0,c.x)+"%",a.style.top=o?Math.max(0,c.y)+"%":(c.py??42+Math.floor(r/nc())*Ps)+"px"}),requestAnimationFrame(Ga)}function eu(){if(!Nt)return;const i=Nt.querySelector(".board-scroll"),e=Nt.querySelector(".board-page");e.hidden=i.scrollHeight<=i.clientHeight+2,e.textContent=i.scrollTop+i.clientHeight>=i.scrollHeight-2?"First cards ↑":"More cards ↓"}function hE(){const i=Nt.querySelector(".board-scroll"),e=i.scrollTop+i.clientHeight>=i.scrollHeight-2;i.scrollTop=e?0:i.scrollTop+Math.max(44,i.clientHeight-20),eu()}function fE(){if(Nt)return;ci=matchMedia("(pointer: coarse)").matches?"string":"move",kn=null,qr=document.createElementNS("http://www.w3.org/2000/svg","svg"),qr.setAttribute("class","strings"),ct=S("div",{class:"cork"+(ci==="string"?" stringing":"")});const i=(n,s)=>S("button",{type:"button",class:`seg${ci===n?" on":""}`,"data-mode":n,"aria-pressed":String(ci===n),text:s,onclick:a=>{ci=n,kn=null,Nt.querySelectorAll(".seg").forEach(r=>{r.classList.toggle("on",r.dataset.mode===n),r.setAttribute("aria-pressed",String(r.dataset.mode===n))}),ct.classList.toggle("stringing",n==="string"),oa()}});Nt=S("div",{class:"panel board"},S("div",{class:"board-frame"},S("header",{},S("h2",{text:K.board.title||"Conspiracy Board"}),S("div",{class:"segs",role:"group","aria-label":"Board mode"},i("move","Arrange"),i("string","Red string")),fi().length?S("span",{class:"b-tally","aria-live":"polite"}):"",S("button",{type:"button",class:"btn ghost",text:"+ Note","aria-label":"Add a note",onclick:()=>{const n=Date.now().toString(36);gn().notes.push({id:n,text:""}),oa(),requestAnimationFrame(()=>{const s=ct.querySelector(`[data-key="n:${n}"] textarea`);s?.scrollIntoView({block:"nearest"}),s?.focus()})}})),S("button",{class:"icon-btn b-close",type:"button","aria-label":"Close board",html:Ot("close"),onclick:()=>Lt(Nt)}),S("div",{class:"board-scroll"},ct),S("aside",{class:"board-detail",hidden:!0,"aria-live":"polite"}),S("footer",{class:"board-hint"},S("span",{class:"b-hint-text",text:Eg()}),S("button",{type:"button",class:"btn board-page",hidden:!0,onclick:hE})))),Bi(Nt,{label:"Conspiracy Board",onClose:()=>{removeEventListener("resize",oa),Nt._resizeObserver.disconnect(),Nt=null,X.save.flags["board:solved"]&&!X.save.flags["board:announced"]&&(bt.setFlag("board:announced"),Vt(K.board.onSolved))}});const e=Nt.querySelector(".board-scroll");e.addEventListener("scroll",eu);const t=new ResizeObserver(()=>{eu(),Ga()});Nt._resizeObserver=t,t.observe(e),t.observe(ct),oa(),Qu(),addEventListener("resize",oa),Re("board:opened"),Ut("paper")}Ge("open:board",()=>{document.body.classList.contains("playing")&&Tn("board:opened")&&fE()});const pE=i=>{let e=i;for(let t=0;t<4&&K.locations[e]?.exterior&&K.locations[K.locations[e].exterior];t++)e=K.locations[e].exterior;return e};function mE(i={}){if(Bl)return;const e=X.save,t=(v,x,y,D,T=!1,R="")=>S("details",{class:"case-fold",open:T,"data-fold":R},S("summary",{},S("span",{text:v}),x!=null?S("small",{text:x}):""),y.length?S("ul",{},y):S("p",{class:"muted",text:D})),n=v=>{const x=K.evidence[v]||{title:v};return S("li",{},S("small",{class:"ev-kind",text:Tg({...x,kind2:x.kind})}),S("b",{text:we(x.title)}),S("span",{text:we(x.description||"")}),x.source?S("span",{class:"ev-src",text:`Found: ${we(x.source)}`}):"",x.points?S("span",{class:"ev-points",text:we(x.points)}):"")},s=Object.entries(K.evidence).filter(([,v])=>v?.kind==="essential"),a=s.filter(([v])=>e.evidence.includes(v)).length,r=s.map(([v,x])=>e.evidence.includes(v)?S("li",{class:"clue-slot got"},S("span",{class:"cs-mark",html:Ot("check")}),S("b",{text:we(x.title)}),S("span",{text:we(x.source||"")})):S("li",{class:"clue-slot"},S("span",{class:"cs-mark",text:"?"}),S("b",{text:"Not found yet"}))),o=e.evidence.filter(v=>K.evidence[v]?.kind!=="essential"),c=Object.entries(K.discoveries),l=c.filter(([v])=>e.discovered.includes(v)).map(([,v])=>S("li",{},S("b",{text:v.title}),S("span",{text:v.description||""}))),d=K.achievements.map(v=>{const x=e.achievements.includes(v.id),y=x||!v.secret;return S("li",{class:`ach-row${x?"":" locked"}`,"data-ach":v.id},S("span",{class:"ach-badge",html:Ot(v.icon||"trophy")}),S("div",{},S("b",{text:y?v.title:"???"}),S("span",{text:y?v.description||"":"Secret"}),S("small",{text:x?"Unlocked":"Locked"})))}),u=vn(),h=u&&Tn(u.destination?"map:opened":"board:opened")&&(u.destination?S("button",{type:"button",class:"btn small",text:"Open map",onclick:()=>{Lt(p),Re("open:map")}}):/board/i.test(u.text)?S("button",{type:"button",class:"btn small",text:"Open board",onclick:()=>{Lt(p),Re("open:board")}}):""),f=fi().filter(v=>Ha(v.id)).map(v=>S("li",{},S("b",{text:v.title}),S("span",{text:v.text}))),g=K.game.locations.filter(v=>K.locations[v]?.mapPin&&!K.locations[v].hideOnMap),b=new Set(e.visited.map(pE).filter(v=>g.includes(v))).size,m=Math.floor(e.playSeconds/60),p=Bl=S("div",{class:"panel casefile"},S("div",{class:"case-sheet"},S("header",{},S("div",{},S("div",{class:"kicker",text:we("Candidate {candidate}")}),S("h2",{text:"Case File: Missing User"})),S("button",{class:"icon-btn",type:"button","aria-label":"Close case file",html:Ot("close"),onclick:()=>Lt(p)})),u&&S("section",{class:"case-lead"},S("h3",{text:"Next step"}),S("p",{text:we(u.text)}),h),t("Case evidence",`${e.evidence.length}`,[...s.map(([v])=>v).filter(v=>e.evidence.includes(v)),...o].map(n),"Nothing yet. Inspect things around the city.",!0,"evidence"),S("section",{},S("h3",{text:`Essential clues · ${a}/${s.length}`}),S("ul",{class:"clue-slots"},r)),e.flags["seen:plaque"]&&S("p",{text:we("Frequency Tower plaque · Tenth anniversary, {towerAnniversary}")}),f.length>0&&S("section",{},S("h3",{text:`Deductions · ${f.length}/${fi().length}`}),S("ul",{},f)),S("div",{class:"case-stats"},S("span",{text:`${b}/${g.length} places visited`}),S("span",{text:`${m} min on the case`})),S("button",{type:"button",class:"btn history-btn",text:"Dialogue history",onclick:ag}),t("About Skye · discoveries",`${l.length}/${c.length}`,l,"Optional finds about Skye appear here. Explore any place on your map.",!1,"discoveries"),t("Achievements",`${e.achievements.length}/${K.achievements.length}`,d,"None defined.",!!i.achievement,"achievements")));Bi(p,{label:"Case file",onClose:()=>{Bl=null}}),Re("casefile:opened"),Ut("paper"),i.achievement&&requestAnimationFrame(()=>{const v=p.querySelector(`[data-ach="${CSS.escape(i.achievement)}"]`);v?.classList.add("flash"),v?.scrollIntoView({block:"center"})})}Ge("open:casefile",i=>{document.body.classList.contains("playing")&&Tn("casefile:opened")&&mE(i||{})});function eo(){const i=X.settings;document.documentElement.style.setProperty("--text-scale",i.textSize),document.body.classList.toggle("reduced-motion",!!i.reducedMotion),gw(),Re("settings:applied",i)}const aa=(i,e,t,n,s,a=r=>`${Math.round(r*100)}%`)=>{const r=`set-${i}`,o=S("output",{for:r,text:a(X.settings[i])}),c=S("input",{id:r,type:"range",min:t,max:n,step:s,value:X.settings[i]});return c.addEventListener("input",()=>{X.settings[i]=parseFloat(c.value),o.textContent=a(X.settings[i]),yc(),eo()}),S("div",{class:"set-row"},S("label",{for:r,text:e}),c,o)},zo=(i,e,t)=>{const n=`set-${i}`,s=S("input",{id:n,type:"checkbox",role:"switch"});return s.checked=!!X.settings[i],s.addEventListener("change",()=>{X.settings[i]=s.checked,yc(),eo()}),S("div",{class:"set-row toggle"},S("label",{for:n},S("span",{text:e}),t?S("small",{text:t}):""),s)},gE=(i,e,t)=>{const n=S("div",{class:"segs",role:"radiogroup","aria-label":e});for(const[s,a]of t){const r=S("button",{type:"button",class:`seg${X.settings[i]===s?" on":""}`,role:"radio","aria-checked":String(X.settings[i]===s),text:a});r.addEventListener("click",()=>{X.settings[i]=s,n.querySelectorAll(".seg").forEach(o=>{o.classList.toggle("on",o===r),o.setAttribute("aria-checked",String(o===r))}),yc(),eo()}),n.append(r)}return S("div",{class:"set-row"},S("span",{class:"set-label",text:e}),n)};function Rg({inGame:i=!0}={}){let e;const t=S("button",{type:"button",class:"btn danger",text:"Start over"});t.addEventListener("click",()=>{if(t.dataset.armed){Re("run:restart"),Lt(e);return}t.dataset.armed="1",t.textContent="Tap again — this case will be lost",setTimeout(()=>{delete t.dataset.armed,t.textContent="Start over"},4e3)}),e=S("div",{class:"panel settings"},S("div",{class:"sheet"},S("header",{},S("h2",{text:"Settings"}),S("button",{class:"icon-btn",type:"button","aria-label":"Close settings",html:Ot("close"),onclick:()=>Lt(e)})),S("section",{},S("h3",{text:"Sound"}),aa("master","Master",0,1,.05),aa("voice","Voices",0,1,.05),aa("music","Music",0,1,.05),aa("sfx","Effects",0,1,.05)),S("section",{},S("h3",{text:"Reading"}),zo("subtitles","Subtitles","Lines without a recorded voice are always subtitled"),aa("textSize","Text size",.85,1.5,.05),zo("autoAdvance","Auto-advance dialogue")),S("section",{},S("h3",{text:"View"}),zo("reducedMotion","Reduce motion","Cuts instead of camera moves; no shake"),aa("lookSensitivity","Look sensitivity",.4,2,.1,n=>`${n.toFixed(1)}×`),zo("invertY","Invert vertical look"),document.fullscreenEnabled?S("button",{type:"button",class:"btn ghost",text:document.fullscreenElement?"Leave full screen":"Full screen",onclick:async n=>{try{document.fullscreenElement?await document.exitFullscreen():await document.documentElement.requestFullscreen(),n.target.textContent=document.fullscreenElement?"Leave full screen":"Full screen"}catch{n.target.textContent="Full screen unavailable"}}}):null,gE("quality","Graphics",[["low","Battery"],["auto","Auto"],["high","Sharp"]])),i?S("section",{},S("h3",{text:"Investigation"}),S("p",{class:"muted",text:"Progress saves automatically on this device. Start over erases this case."}),t):"",S("footer",{},S("button",{type:"button",class:"btn ghost",text:"Restore defaults",onclick:()=>{Object.assign(X.settings,_p()),yc(),eo(),Lt(e),Rg({inGame:i})}})))),Bi(e,{label:"Settings"})}Ge("open:settings",()=>Rg({inGame:document.body.classList.contains("playing")}));const pa=(i,e)=>we(K.game?.text?.[i]??e);function to(i){const e=S("div",{class:`screen ${i}`,role:"dialog","aria-modal":"true"});return us.append(e),requestAnimationFrame(()=>e.classList.add("in")),e}function Va(i){i.classList.remove("in"),setTimeout(()=>i.remove(),400)}function bE(i=null){return new Promise(e=>{const t=X.candidate,n=t?`#${String(t.number).padStart(4,"0")}`:"#????",s=to("title"),a=r=>{Ut("confirm")||sn(720,.05),Va(s),e(r)};s.append(S("div",{class:"title-lockup"},S("div",{class:"title-kicker",text:pa("titleKicker","A Frequen City mystery")}),S("h1",{},S("span",{class:"t1",text:"Frequen City"}),S("span",{class:"t2",text:"Missing User"})),S("p",{class:"title-brief",text:"Skye has gone quiet. Her agents need a detective."}),S("div",{class:"cand",title:"Your candidate number"},S("span",{class:"cand-k",text:"Candidate"}),S("span",{class:"cand-n",text:n}))),S("nav",{class:"title-menu"},i&&S("button",{type:"button",class:"btn primary big",autofocus:!0,onclick:()=>a("continue")},S("span",{html:Ot("play")}),S("span",{text:i.save?.completed?"Keep exploring":"Continue"})),S("button",{type:"button",class:i?"btn ghost":"btn primary big",autofocus:!i,onclick:r=>{const o=r.currentTarget;if(i&&!o.dataset.armed){o.dataset.armed="1",o.lastElementChild.textContent="Tap again to erase the saved case",setTimeout(()=>{delete o.dataset.armed,o.lastElementChild.textContent="New case"},4e3);return}a("new")}},i?null:S("span",{html:Ot("play")}),S("span",{text:i?"New case":"Begin"})),K.game.opening&&S("button",{type:"button",class:"btn ghost",text:"Watch the recruitment film",onclick:()=>a("recruitment")}),S("button",{type:"button",class:"btn ghost",onclick:()=>Re("open:settings")},S("span",{html:Ot("settings")}),S("span",{text:"Settings"})),K.game.invite?.url&&S("a",{class:"btn ghost",href:K.game.invite.url,target:"_blank",rel:"noopener noreferrer",text:we(K.game.invite.button||"Join the Discord")}),...tu("btn ghost small")),S("p",{class:"title-foot",text:"Progress saves automatically on this device. "+pa("titleFoot",li?"Best with sound on. Drag to look around.":"Best with sound on. Drag or use arrow keys to look around.")})),s.querySelector("[autofocus]")?.focus(),fetch("/__play",{cache:"no-store"}).then(r=>r.ok&&r.json()).then(r=>{!r?.play||!s.isConnected||s.querySelector(".title-menu").append(S("button",{type:"button",class:"btn ghost",text:"Quit",onclick:async o=>{o.currentTarget.disabled=!0,Re("quit");try{await fetch("/__quit",{method:"POST"})}catch{}window.close(),document.body.replaceChildren(S("p",{class:"quit-note",text:"The game has stopped. You can close this tab."}))}}))}).catch(()=>{})})}function vE(){return new Promise(i=>{const e=K.detectives.models||[],t=K.detectives.voices||[];let n=Math.max(0,e.findIndex(xe=>xe.id===X.save.detective?.model)),s=X.save.detective?.voice||t[0]?.id||"default";const a=to("select"),r=S("div",{class:"sel-stage"}),o=S("canvas",{class:"sel-cv","aria-hidden":"true"});r.append(o);const c=S("h2",{class:"sel-name"}),l=S("div",{class:"sel-count"}),d=S("div",{class:"sel-loading",text:"Loading…"});r.append(d);const u=S("button",{type:"button",class:"icon-btn sel-prev","aria-label":"Previous detective",html:Ot("left")}),h=S("button",{type:"button",class:"icon-btn sel-next","aria-label":"Next detective",html:Ot("right")}),f=S("div",{class:"segs",role:"radiogroup","aria-label":"Narration voice"});for(const xe of t){const Y=S("button",{type:"button",class:`seg${xe.id===s?" on":""}`,role:"radio","aria-checked":String(xe.id===s),"data-v":xe.id,text:xe.label});Y.addEventListener("click",()=>{s=xe.id,f.querySelectorAll(".seg").forEach(te=>{te.classList.toggle("on",te===Y),te.setAttribute("aria-checked",String(te===Y))}),_e()}),f.append(Y)}const g=S("button",{type:"button",class:"btn ghost small",onclick:()=>_e()},S("span",{html:Ot("listen")}),S("span",{text:"Hear sample"})),b=S("p",{class:"sel-sample","aria-live":"polite"}),m=S("button",{type:"button",class:"btn primary big",text:pa("selectConfirm","Take the case")});a.append(S("header",{class:"sel-head"},S("div",{class:"kicker",text:pa("selectKicker","Candidate {candidate} · Choose your detective")}),S("p",{class:"muted",text:pa("selectHint","You’ll investigate as this robot. Pick the one that feels like you.")})),S("div",{class:"sel-main"},u,r,h),S("div",{class:"sel-info"},l,c,t.some(xe=>xe.sample)&&S("div",{class:"sel-voice"},S("span",{class:"set-label",text:"Narration voice"}),f,g),t.some(xe=>xe.sample)&&b,m));const p=new im({canvas:o,antialias:!0,alpha:!0});p.outputColorSpace=Ze,p.toneMapping=cu,p.toneMappingExposure=1.05;const v=new Xa,x=new tn(30,1,.05,50);x.position.set(0,1,4.6),x.lookAt(0,.78,0),v.add(new um(16773596,3156544,1.4));const y=new cc(16769208,2.4);y.position.set(2.5,4,3),v.add(y);const D=new cc(10467583,1.6);D.position.set(-3,2.5,-2.5),v.add(D);const T=new j(new It(.9,.98,.12,48),new Wn({color:2762032,roughness:.55,metalness:.3}));T.position.y=-.06,v.add(T);const R=new j(new Ac(.94,.012,8,64),new _t({color:13214812}));R.rotation.x=Math.PI/2,R.position.y=.002,v.add(R);const I=new Ue;v.add(I);let _=null,M=!0,L=!1,k=0,P=null,B=0,H=0;const z=()=>{const xe=r.getBoundingClientRect(),Y=Math.max(1,xe.width),te=Math.max(1,xe.height);p.setPixelRatio(Math.min(devicePixelRatio||1,2)),p.setSize(Y,te,!1),x.aspect=Y/te,x.updateProjectionMatrix()},ee=new ResizeObserver(z);ee.observe(r);let V=performance.now();const oe=xe=>{var ue;if(!M)return;requestAnimationFrame(oe);const Y=X.settings.reducedMotion&&!P&&!L?8:24;if(document.hidden||xe-V<1e3/Y-.5)return;const te=Math.min(.05,(xe-V)/1e3);if(V=xe,B+=te,!P&&!L&&!X.settings.reducedMotion&&(k+=te*.5),I.rotation.y=k,_){const ce=(ue=_.userData).w??(ue.w={wave:0,talk:0});ce.wave=Ms(ce.wave,L||B%9>7.2?1:0,te,4),fc(_,B,ce,.7)}p.render(v,x)};requestAnimationFrame(oe),o.addEventListener("pointerdown",xe=>{L||(P={x:xe.clientX,s:k},o.setPointerCapture(xe.pointerId))}),o.addEventListener("pointermove",xe=>{P&&(k=P.s+(xe.clientX-P.x)*.012)}),o.addEventListener("pointerup",()=>{P=null});async function le(xe){n=(xe+e.length)%e.length;const Y=e[n],te=++H;c.textContent=Y.name,l.textContent=`${n+1} / ${e.length}`,m.disabled=!0,d.textContent="Loading…",d.hidden=!1;try{const ue=await Ou(Y.model,{height:1.55});if(te!==H)return;_&&I.remove(_),_=ue,I.add(ue),m.disabled=!1,d.hidden=!0}catch(ue){if(te!==H)return;_&&I.remove(_),_=null,d.replaceChildren(S("button",{type:"button",class:"btn",text:"Retry detective preview",onclick:()=>le(n)})),console.error(ue)}}function _e(){const xe=t.find(ue=>ue.id===s);if(!xe)return;const Y=X.save.detective;X.save.detective={model:e[n]?.id,voice:s};const te=Bu(xe.sample,we(xe.sampleText||""));X.save.detective=Y,b.textContent=te.real?"":we(xe.sampleText||"")}u.addEventListener("click",()=>{Ut("click",1,-2)||sn(560,.04),le(n-1)}),h.addEventListener("click",()=>{Ut("click",1,2)||sn(640,.04),le(n+1)});const ke=xe=>{xe.target.closest("input,textarea")||(xe.key==="ArrowLeft"&&u.click(),xe.key==="ArrowRight"&&h.click())};addEventListener("keydown",ke),m.addEventListener("click",async()=>{if(m.disabled)return;Jr(),Ut("confirm")||sn(880,.08),X.save.detective={model:e[n].id,voice:s},m.disabled=!0,u.disabled=h.disabled=!0,removeEventListener("keydown",ke),m.textContent=pa("selectSuiting","Suiting up…");try{await Lm(_)}catch(ue){console.error(ue)}const xe=k,Y=Math.round(k/(Math.PI*2))*Math.PI*2,te=performance.now();L=!0,await new Promise(ue=>{const ce=()=>{const Ie=Math.min(1,(performance.now()-te)/600);k=xe+(Y-xe)*Ie*(2-Ie),Ie<1?requestAnimationFrame(ce):ue()};ce()}),await new Promise(ue=>setTimeout(ue,X.settings.reducedMotion?400:1400)),M=!1,ee.disconnect(),Va(a),setTimeout(()=>p.dispose(),450),i(X.save.detective)}),z(),le(n),h.focus()})}Ge("dialogue:start",({tree:i})=>{i==="skye_finale"&&K.credits.music&&Gm(K.credits.music)});Ge("location:loading",kc);Ge("dialogue:end:skye_finale",kc);async function xE(){const i=!X.save.completed;X.save.completed=!0,i&&bt.setFlag("case:complete"),Re("finale:start"),document.body.classList.remove("playing","thinking"),document.body.classList.add("in-finale");const e=K.credits||{},t=e.music?fw(e.music):null,n=S("div",{class:"roof-sunset","aria-hidden":"true"}),s="./",a=X.settings.reducedMotion?e.sunset.still:e.sunset.poster;n.style.backgroundImage=`url("${s}${a}")`;const r=S("video",{playsinline:!0,muted:!0,preload:"metadata",poster:s+e.sunset.poster});r.muted=!0,r.playsInline=!0,X.settings.reducedMotion||(r.src=s+e.sunset.video,r.addEventListener("error",()=>{r.hidden=!0},{once:!0}),n.append(r),r.play().catch(()=>{})),us.append(n);const o=to("credits"),c=S("div",{class:"roll"});c.append(S("h2",{class:"roll-title",text:we(e.title||"Frequen City: Missing User")}));for(const g of e.sections||[])c.append(S("section",{},S("h3",{text:we(g.title)}),...(g.names||[]).map(b=>S("p",{text:we(b)}))));c.append(S("p",{class:"roll-end",text:we(e.closing||"Thanks for playing.")}));const l=S("button",{type:"button",class:"cine-skip",text:"Skip credits"}),d=S("button",{type:"button",class:"btn ghost credits-music"});function u(){d.textContent=t?.paused?"Play music":"Pause music"}t&&(u(),d.onclick=()=>{t.paused?t.play().catch(()=>{}):t.pause()},t.addEventListener("play",u),t.addEventListener("pause",u));const h=S("div",{class:"credits-controls"},t&&d,l);o.append(c,h),setTimeout(()=>{l.isConnected&&l.focus({preventScroll:!0})},1800);const f=e.seconds||40;c.style.setProperty("--roll",`${f}s`),X.settings.reducedMotion&&(o.classList.add("still-credits"),l.textContent="Continue");try{await new Promise(g=>{const b=X.settings.reducedMotion?null:setTimeout(g,f*1e3+600);l.onclick=()=>{clearTimeout(b),g()}}),Va(o),await _E(),await yE(t&&d)}finally{t&&(t.removeEventListener("play",u),t.removeEventListener("pause",u)),kc(),r.pause(),r.removeAttribute("src"),r.load(),n.remove()}}function tu(i="btn ghost"){return(K.game.links||[]).filter(e=>e?.url&&e.label).map(e=>S("a",{class:i,href:e.url,target:"_blank",rel:"noopener noreferrer",text:we(e.label)}))}function _E(){return new Promise(i=>{const e=K.game.about;if(!e)return i();const t=Object.entries(K.discoveries).filter(([o])=>!o.startsWith("_")),n=t.filter(([o])=>X.save.discovered.includes(o)),s=to("invite about"),a=we(e.found||"").replace("{count}",n.length).replace("{total}",t.length),r=S("button",{type:"button",class:"btn primary big",text:"Continue",onclick:()=>{Va(s),i()}});s.append(S("div",{class:"invite-card about-card"},S("div",{class:"kicker",text:we(e.kicker||"About Skye")}),S("h2",{text:we(e.title||"About Skye")}),...(e.body||[]).map(o=>S("p",{text:we(o)})),S("h3",{class:"about-count",text:a}),n.length?S("ul",{class:"about-found","aria-label":"What you learned"},...n.map(([,o])=>S("li",{text:o.title}))):null,S("p",{class:"case-recap",text:we(n.length<t.length?e.more:e.all)}),r)),r.focus({preventScroll:!0})})}function yE(i){return new Promise(e=>{const t=K.game.invite||{},n=to("invite"),s=t.url||"",a=s?S("a",{class:"btn primary big",href:s,target:"_blank",rel:"noopener noreferrer",text:we(t.button||"Join the Discord")}):null;n.append(S("div",{class:"invite-card"},S("div",{class:"kicker",text:we(t.kicker||"Case closed · Candidate {candidate}")}),S("h2",{text:we(t.title||"You found her.")}),S("p",{text:s?we(t.body):"The case is closed. There’s still a city to explore."}),S("p",{class:"case-recap",text:"The pickup slip led to the bartender. The music transfer and roof log led here. Dispatch has your report."}),a,tu().length?S("div",{class:"invite-row"},...tu()):null,S("div",{class:"invite-row"},i,S("button",{type:"button",class:s?"btn ghost":"btn primary",text:"Keep exploring the city",onclick:()=>{Va(n),document.body.classList.remove("in-finale"),document.body.classList.add("playing"),Re("finale:end",{returnTo:"police-interior"}),e()}}),S("button",{type:"button",class:"btn ghost",text:"Title screen",onclick:()=>{Va(n),document.body.classList.remove("in-finale"),Re("finale:end",{title:!0}),e()}})))),X.save.flags["invite:unlocked"]||bt.setFlag("invite:unlocked"),n.querySelector("a,button")?.focus()})}en("finale",()=>xE());const nu="fcmu.film.v1",wa=document.getElementById("boot"),iu=wa.querySelector(".boot-msg"),ME=["flag","evidence","discovered","visited","board:string","board:opened","map:opened","dialogue:end","cinematic:end","interact","location:entered"];for(const i of ME)Ge(i,()=>{if(X.save.stage==="playing")for(const e of K.achievements)!X.save.achievements.includes(e.id)&&Et(e.when)&&bt.achieve(e.id)});async function SE(){eo();let i=[];try{i=await kg()}catch(e){console.error(e),iu.textContent=`The case files didn’t load (${e.message}). Check your connection and reload.`,wa.classList.add("failed");const t=document.createElement("button");t.type="button",t.className="btn primary",t.textContent="Retry loading case files",t.onclick=()=>location.reload(),iu.after(t);return}vg(i),X.candidate={number:Math.floor(1e3+Math.random()*9e3)},ls(!1),wa.classList.add("done"),setTimeout(()=>wa.remove(),600),Zu()}async function Zu(){Hc(!1),document.body.classList.remove("playing"),document.body.classList.add("at-title"),ls(!1);const i=await bE(Hl());if(document.body.classList.remove("at-title"),i==="continue"&&Ug())return Cg(X.save.location,X.save.position);if(i==="recruitment"&&Hl()){K.game.opening&&await Yu(K.game.opening);try{localStorage.setItem(nu,"1")}catch{}return Zu()}let e=!0;try{e=!!localStorage.getItem(nu)}catch{}return wE(i==="recruitment"||!e)}async function wE(i){if(Fg(),X.save.stage="intro",i&&K.game.opening){await Yu(K.game.opening);try{localStorage.setItem(nu,"1")}catch{}}await vE(),await Cg(K.game.start.location,K.game.start.position)}async function Cg(i,e){X.save.stage="playing",document.body.classList.add("playing"),Hc(!0),ls(!0),await Za(i,e)}let bp=0;const EE=()=>{X.save.stage==="playing"&&(clearTimeout(bp),bp=setTimeout(Wa,400))};for(const i of["flag","evidence","discovered","visited","achievement","position:changed","location:entered","dialogue:end","board:string","board:changed","board:opened"])Ge(i,EE);setInterval(()=>{document.hidden||Wa()},15e3);addEventListener("pagehide",()=>Wa());Ge("finale:start",()=>{X.save.completed=!0,Wa()});addEventListener("keydown",i=>{if(i.key!=="Backspace"||i.defaultPrevented)return;const e=i.target;e&&(e.isContentEditable||/^(INPUT|TEXTAREA|SELECT)$/.test(e.tagName))||i.preventDefault()},!0);addEventListener("beforeunload",i=>{X.save.stage==="playing"&&Wa()});Ge("run:restart",()=>{wp(),location.reload()});Ge("finale:end",({title:i,returnTo:e})=>{if(i){Zu();return}Hc(!0),ls(!0),e&&setTimeout(()=>Za(e,"entrance"),0)});Ge("finale:start",()=>{Hc(!1)});Ge("gl:lost",()=>Fs("Graphics were interrupted. Reload the page if the view stays black.","error",8e3));addEventListener("unhandledrejection",i=>console.error(i.reason));SE().catch(i=>{console.error(i),wa.isConnected?(iu.textContent="The game could not start. Reload the page to try again.",wa.classList.add("failed")):Fs("Something went wrong. Reload the page; your progress is saved.","error",1e4)});const RE=Object.freeze(Object.defineProperty({__proto__:null},Symbol.toStringTag,{value:"Module"}));export{es as C,am as D,ii as F,jr as H,Qt as L,Zt as N,zn as R,Rp as U,AE as a,de as b,RE as m};
