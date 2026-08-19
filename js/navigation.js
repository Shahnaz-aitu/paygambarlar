(function(){
window.openProphet=function(id){if(!window.prophetsData.some(p=>p.id===id))return;location.hash=id};
window.goHome=function(){history.pushState(null,'',location.pathname+location.search);window.dispatchEvent(new Event('hashchange'))};
document.addEventListener('click',e=>{if(e.target.closest('[data-go-home]'))goHome();const p=e.target.closest('[data-prophet-link]');if(p)openProphet(p.dataset.prophetLink);if(e.target.closest('#menuButton'))document.body.classList.toggle('menu-open');if(e.target.closest('#menuScrim'))document.body.classList.remove('menu-open')});
window.addEventListener('keydown',e=>{if(e.key==='Escape')document.body.classList.remove('menu-open');if(['INPUT','TEXTAREA','SELECT'].includes(document.activeElement?.tagName))return;const id=location.hash.slice(1),i=window.prophetsData.findIndex(p=>p.id===id);if(i>=0&&e.key==='ArrowRight')openProphet(window.prophetsData[Math.min(i+1,window.prophetsData.length-1)].id);if(i>=0&&e.key==='ArrowLeft')openProphet(window.prophetsData[Math.max(i-1,0)].id)});
})();
