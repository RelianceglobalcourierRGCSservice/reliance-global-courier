document.getElementById('year').textContent=new Date().getFullYear();
const menu=document.querySelector('.menu'),nav=document.querySelector('nav');
menu.addEventListener('click',()=>nav.classList.toggle('open'));
document.querySelectorAll('nav a').forEach(a=>a.addEventListener('click',()=>nav.classList.remove('open')));
document.querySelector('#tracking form').addEventListener('submit',e=>{e.preventDefault();const n=document.getElementById('track').value.trim();document.getElementById('result').textContent=n?'Tracking number received. For the latest update, please contact +1 (618) 504-0372 or relianceglobalcodelivery@yahoo.com.':'Please enter a tracking number.'});

const chatToggle=document.getElementById('chatToggle');
const chatBox=document.getElementById('chatBox');
const chatClose=document.getElementById('chatClose');
if(chatToggle&&chatBox){
  chatToggle.addEventListener('click',()=>{
    const open=chatBox.classList.toggle('open');
    chatToggle.setAttribute('aria-expanded',open);
    chatBox.setAttribute('aria-hidden',!open);
  });
}
if(chatClose&&chatBox&&chatToggle){
  chatClose.addEventListener('click',()=>{
    chatBox.classList.remove('open');
    chatToggle.setAttribute('aria-expanded','false');
    chatBox.setAttribute('aria-hidden','true');
  });
}
