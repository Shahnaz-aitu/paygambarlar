(function(){
const saved=localStorage.getItem('paygambarlar-theme');let theme=saved||(matchMedia('(prefers-color-scheme: dark)').matches?'dark':'light');
function apply(v){theme=v;document.body.dataset.theme=v;localStorage.setItem('paygambarlar-theme',v);const b=document.getElementById('themeButton');if(b){b.textContent=v==='dark'?'☀':'◐';b.title=v==='dark'?t('light'):t('dark')}}
window.toggleTheme=()=>apply(theme==='dark'?'light':'dark');document.addEventListener('click',e=>{if(e.target.closest('#themeButton'))toggleTheme()});window.addEventListener('DOMContentLoaded',()=>apply(theme));window.addEventListener('languagechange',()=>apply(theme));
})();
