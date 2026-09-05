const menu=document.querySelector('.menu-toggle'),nav=document.querySelector('.nav');
menu.addEventListener('click',()=>nav.classList.toggle('open'));
nav.querySelectorAll('a').forEach(a=>a.addEventListener('click',()=>nav.classList.remove('open')));
const modal=document.getElementById('modal'),title=document.getElementById('modalTitle');
function showProject(name){title.textContent=name;modal.classList.add('open')}
function closeProject(){modal.classList.remove('open')}
modal.addEventListener('click',e=>{if(e.target===modal)closeProject()});
