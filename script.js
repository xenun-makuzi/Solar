(function(){
const $=s=>document.querySelector(s), $$=s=>Array.from(document.querySelectorAll(s));
function applyLang(lang){document.documentElement.classList.toggle('lang-fr',lang==='fr');document.documentElement.lang=lang;$$('[data-lang-btn]').forEach(b=>b.classList.toggle('active',b.dataset.langBtn===lang));try{localStorage.setItem('summit_lang',lang)}catch(e){}}
$$('[data-lang-btn]').forEach(b=>b.addEventListener('click',()=>applyLang(b.dataset.langBtn)));
try{applyLang(localStorage.getItem('summit_lang')||'en')}catch(e){applyLang('en')}
const hamb=$('#hamb');if(hamb){hamb.addEventListener('click',()=>{const open=document.body.classList.toggle('menu-open');hamb.setAttribute('aria-expanded',open?'true':'false');hamb.innerHTML=open?'<i class="fa-solid fa-xmark"></i>':'<i class="fa-solid fa-bars"></i>'});$$('.nav-links a').forEach(a=>a.addEventListener('click',()=>{document.body.classList.remove('menu-open');hamb.setAttribute('aria-expanded','false');hamb.innerHTML='<i class="fa-solid fa-bars"></i>'}))}
const rio=new IntersectionObserver(es=>es.forEach(e=>{if(e.isIntersecting){e.target.classList.add('in');rio.unobserve(e.target)}}),{threshold:.12});$$('.reveal').forEach(x=>rio.observe(x));
})();