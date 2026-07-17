document.documentElement.classList.add('mh-premium-ready');
document.addEventListener('DOMContentLoaded',function(){
  var cards=document.querySelectorAll('.mh-catcard, .mh-editorial');
  if(!('IntersectionObserver'in window)||!cards.length)return;
  var io=new IntersectionObserver(function(entries){
    entries.forEach(function(e){if(e.isIntersecting){e.target.classList.add('mh-in-view');io.unobserve(e.target);}});
  },{threshold:.12});
  cards.forEach(function(c){io.observe(c);});
});
