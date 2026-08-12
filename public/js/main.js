// scroll reveal
  const els = document.querySelectorAll('.reveal');
  const io = new IntersectionObserver((entries)=>{
    entries.forEach(e=>{
      if(e.isIntersecting){ e.target.classList.add('in'); io.unobserve(e.target); }
    });
  }, {threshold:0.14});
  els.forEach(el=>io.observe(el));

  // mobile menu toggle
  const navToggle = document.getElementById('navToggle');
  const mobileMenu = document.getElementById('mobileMenu');
  function closeMenu(){
    mobileMenu.classList.remove('open');
    navToggle.setAttribute('aria-expanded','false');
    navToggle.textContent = '☰';
  }
  navToggle.addEventListener('click', ()=>{
    const isOpen = mobileMenu.classList.toggle('open');
    navToggle.setAttribute('aria-expanded', String(isOpen));
    navToggle.textContent = isOpen ? '✕' : '☰';
  });
  mobileMenu.querySelectorAll('a').forEach(a=>a.addEventListener('click', closeMenu));
  window.addEventListener('resize', ()=>{ if(window.innerWidth > 880) closeMenu(); });

  // games carousel
  const gamesCarousel = document.getElementById('gamesCarousel');
  const gamesPrev = document.getElementById('gamesPrev');
  const gamesNext = document.getElementById('gamesNext');
  if(gamesCarousel && gamesPrev && gamesNext){
    const scrollStep = () => Math.min(gamesCarousel.clientWidth * 0.8, 600);
    gamesPrev.addEventListener('click', ()=> gamesCarousel.scrollBy({left:-scrollStep(), behavior:'smooth'}));
    gamesNext.addEventListener('click', ()=> gamesCarousel.scrollBy({left:scrollStep(), behavior:'smooth'}));
  }
