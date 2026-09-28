const m=document.getElementById('mb'),n=document.getElementById('nav');
m.addEventListener('click',()=>{const o=n.classList.toggle('o');m.setAttribute('aria-expanded',o)});
const io=new IntersectionObserver(e=>e.forEach(x=>{if(x.isIntersecting){x.target.classList.add('in');io.unobserve(x.target)}}),{threshold:.15});
document.querySelectorAll('.rv').forEach(el=>io.observe(el));
