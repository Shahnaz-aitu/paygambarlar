(function(){
const saved=localStorage.getItem('paygambarlar-lang');window.currentLang=saved==='kk'?'kk':'ru';
window.t=function(key){return (window.uiText[window.currentLang]||window.uiText.ru)[key]||key};
window.applyLanguage=function(lang){window.currentLang=lang==='kk'?'kk':'ru';localStorage.setItem('paygambarlar-lang',window.currentLang);document.documentElement.lang=window.currentLang==='kk'?'kk':'ru';document.querySelectorAll('[data-ui]').forEach(el=>{el.textContent=t(el.dataset.ui)});document.querySelectorAll('[data-lang]').forEach(b=>b.classList.toggle('active',b.dataset.lang===window.currentLang));window.dispatchEvent(new CustomEvent('languagechange',{detail:{lang:window.currentLang}}));};
document.addEventListener('click',e=>{const b=e.target.closest('[data-lang]');if(b)applyLanguage(b.dataset.lang)});
})();
