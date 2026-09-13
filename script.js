const header=document.querySelector('.header');
const menu=document.querySelector('.menu');
menu?.addEventListener('click',()=>{const open=header.classList.toggle('open');menu.setAttribute('aria-expanded',String(open));});
document.querySelectorAll('.header nav a').forEach(a=>a.addEventListener('click',()=>header.classList.remove('open')));
document.getElementById('year').textContent=new Date().getFullYear();
const obs=new IntersectionObserver(entries=>{entries.forEach(e=>{if(e.isIntersecting){e.target.classList.add('visible');obs.unobserve(e.target)}})},{threshold:.12});
document.querySelectorAll('.reveal').forEach(el=>obs.observe(el));
