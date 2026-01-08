document.querySelectorAll('.state-card').forEach(c=>{
  c.style.opacity=0;
  window.addEventListener('scroll',()=>{
    if(c.getBoundingClientRect().top<window.innerHeight-50){
      c.style.opacity=1;
    }
  });
});
