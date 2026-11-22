document.getElementById('year').textContent = new Date().getFullYear();

// Navigation tactile des couvertures
document.querySelectorAll('.covers-stage').forEach(stage=>{
  const grid=stage.querySelector('.covers-grid');
  const prev=stage.querySelector('.slide-btn.prev');
  const next=stage.querySelector('.slide-btn.next');
  const step=()=>Math.max(180, grid.clientWidth*.65);
  prev?.addEventListener('click',()=>grid.scrollBy({left:-step(),behavior:'smooth'}));
  next?.addEventListener('click',()=>grid.scrollBy({left:step(),behavior:'smooth'}));
});
