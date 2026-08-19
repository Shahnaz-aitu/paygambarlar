(function(){
const s={
adam:`<div class="scene scene--adam"><div class="parallax" data-depth=".5"><i class="sun"></i><i class="cloud c1"></i><i class="cloud c2"></i><i class="garden g1"></i><i class="garden g2"></i><i class="river"></i>${'<i class="leaf"></i>'.repeat(9)}</div></div>`,
idris:`<div class="scene scene--idris"><div class="parallax" data-depth=".45"><i class="fabric f1"></i><i class="fabric f2"></i><i class="spool"></i><i class="needle"></i><i class="thread"></i></div></div>`,
nuh:`<div class="scene scene--nuh"><div class="parallax" data-depth=".38"><i class="storm"></i><i class="sea"></i><i class="ark"><b></b></i>${'<i class="drop"></i>'.repeat(16)}<i class="lightning"></i></div></div>`,
hud:`<div class="scene scene--hud"><div class="parallax" data-depth=".32"><i class="cliffs"></i><i class="palms"></i><i class="fields"></i><i class="sea"></i>${'<i class="wind"></i>'.repeat(5)}</div></div>`,
salih:`<div class="scene scene--salih"><div class="parallax" data-depth=".35"><i class="sun"></i><i class="canyon c1"></i><i class="canyon c2"></i><i class="camel"></i>${'<i class="dust"></i>'.repeat(8)}</div></div>`,
lut:`<div class="scene scene--lut"><div class="parallax" data-depth=".28"><i class="city"></i><i class="house"><b class="door"></b></i><i class="guest a"></i><i class="guest b"></i><i class="beam"></i></div></div>`,
ibrahim:`<div class="scene scene--ibrahim"><div class="parallax" data-depth=".35"><i class="night"></i><i class="fire"></i>${'<i class="spark"></i>'.repeat(14)}</div></div>`,
ismail:`<div class="scene scene--ismail"><div class="parallax" data-depth=".22"><i class="desert"></i><i class="kaaba"></i><i class="zamzam"></i><i class="hills"></i></div></div>`,
ishaq:`<div class="scene scene--ishaq"><div class="parallax" data-depth=".3"><i class="valley"></i><i class="tent"></i><i class="flock"></i>${'<i class="grass"></i>'.repeat(7)}</div></div>`,
yaqub:`<div class="scene scene--yaqub"><div class="parallax" data-depth=".16"><i class="room"></i><i class="window"></i><i class="bed"></i><i class="table"></i><i class="book"></i><i class="lamp"></i></div></div>`,
yusuf:`<div class="scene scene--yusuf"><div class="parallax" data-depth=".28"><i class="sand"></i><i class="well"><b></b></i><i class="rope"></i><i class="bucket"></i><i class="shaft"></i></div></div>`,
shuayb:`<div class="scene scene--shuayb"><div class="parallax" data-depth=".26"><i class="road"></i>${'<i class="caravan"></i>'.repeat(7)}<i class="cargo"></i>${'<i class="dust"></i>'.repeat(7)}</div></div>`,
ayyub:`<div class="scene scene--ayyub"><div class="parallax" data-depth=".12"><i class="room"></i><i class="window"></i><i class="bed"></i><i class="light"></i><i class="plant"></i></div></div>`,
dhulkifl:`<div class="scene scene--dhulkifl"><div class="parallax" data-depth=".18"><i class="court"></i><i class="columns"></i><i class="stairs"></i><i class="scales"></i></div></div>`,
musa:`<div class="scene scene--musa"><div class="parallax" data-depth=".24"><i class="sky"></i><i class="sun"></i><i class="pyramid p1"></i><i class="pyramid p2"></i><i class="nile"></i>${'<i class="dust"></i>'.repeat(6)}</div></div>`,
harun:`<div class="scene scene--harun"><div class="parallax" data-depth=".22"><i class="desert"></i><i class="pedestal"></i><i class="calf"></i><i class="glow"></i></div></div>`,
dawud:`<div class="scene scene--dawud"><div class="parallax" data-depth=".2"><i class="forge"></i><i class="mail"></i><i class="shield"></i><i class="sword"></i>${'<i class="spark"></i>'.repeat(12)}</div></div>`,
sulayman:`<div class="scene scene--sulayman"><div class="parallax" data-depth=".26"><i class="palace"></i><i class="domes"></i><i class="garden"></i><i class="fountain"></i>${'<i class="bird"></i>'.repeat(5)}</div></div>`,
ilyas:`<div class="scene scene--ilyas"><div class="parallax" data-depth=".3"><i class="mountains"></i><i class="clouds"></i><i class="bolt"></i><i class="ray"></i></div></div>`,
alyasa:`<div class="scene scene--alyasa"><div class="parallax" data-depth=".24"><i class="hills"></i><i class="spring"></i><i class="garden"></i>${'<i class="leaf"></i>'.repeat(7)}</div></div>`,
yunus:`<div class="scene scene--yunus"><div class="parallax" data-depth=".28"><i class="ocean"></i><i class="whale"></i><i class="ray"></i>${'<i class="bubble"></i>'.repeat(12)}</div></div>`,
zakariya:`<div class="scene scene--zakariya"><div class="parallax" data-depth=".24"><i class="ground"></i><i class="trunk"></i><i class="crown"></i>${'<i class="leaf"></i>'.repeat(10)}</div></div>`,
yahya:`<div class="scene scene--yahya"><div class="parallax" data-depth=".18"><i class="moon"></i><i class="hills"></i>${'<i class="star"></i>'.repeat(20)}</div></div>`,
isa:`<div class="scene scene--isa"><div class="parallax" data-depth=".15"><i class="room"></i><i class="window"></i><i class="table"></i><i class="bowl"></i><i class="herbs"></i><i class="water"></i><i class="light"></i></div></div>`,
muhammad:`<div class="scene scene--muhammad"><div class="parallax" data-depth=".22"><i class="garden"></i>${'<i class="rose"></i>'.repeat(10)}${'<i class="petal"></i>'.repeat(12)}<i class="softlight"></i></div></div>`};
window.prophetScenes=s;
let token=0;
window.loadProphetScene=function(id){const el=document.getElementById('storyBackground');if(!el)return;const t=++token;el.classList.remove('active');setTimeout(()=>{if(t!==token)return;document.body.dataset.prophet=id||'';el.innerHTML=id&&s[id]?s[id]:'';requestAnimationFrame(()=>el.classList.toggle('active',!!id));},220)};
const el=document.getElementById('storyBackground');
window.addEventListener('mousemove',e=>{if(matchMedia('(prefers-reduced-motion: reduce)').matches||innerWidth<820)return;const p=el&&el.querySelector('.parallax');if(!p)return;const x=(e.clientX/innerWidth-.5),y=(e.clientY/innerHeight-.5),d=Number(p.dataset.depth||.2);p.style.transform=`translate3d(${x*18*d}px,${y*14*d}px,0)`});
})();
