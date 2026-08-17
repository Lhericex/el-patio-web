// scroll reveal
  const els = document.querySelectorAll('.reveal');
  const io = new IntersectionObserver((entries)=>{
    entries.forEach(e=>{
      if(e.isIntersecting){ e.target.classList.add('in'); io.unobserve(e.target); }
    });
  }, {threshold:0.14});
  els.forEach(el=>io.observe(el));

  // dynamic header: always stays visible, just condenses into a floating pill past the top
  const siteHeader = document.querySelector('header');
  const getScrollY = () => window.scrollY || document.documentElement.scrollTop || document.body.scrollTop || 0;
  let isScrolled = false;
  let ticking = false;

  const SCROLLED_ON = 56;   // enter "scrolled" state past this
  const SCROLLED_OFF = 24;  // exit below this — gap avoids flicker right at the edge

  const updateHeader = () => {
    const currentY = getScrollY();
    if(!isScrolled && currentY > SCROLLED_ON) isScrolled = true;
    else if(isScrolled && currentY < SCROLLED_OFF) isScrolled = false;
    siteHeader.classList.toggle('header-scrolled', isScrolled);
    ticking = false;
  };

  const onScroll = () => {
    if(!ticking){
      requestAnimationFrame(updateHeader);
      ticking = true;
    }
  };
  window.addEventListener('scroll', onScroll, {passive:true});

  // mobile menu toggle
  const navToggle = document.getElementById('navToggle');
  const mobileMenu = document.getElementById('mobileMenu');
  function closeMenu(){
    mobileMenu.classList.remove('open');
    navToggle.setAttribute('aria-expanded','false');
    navToggle.classList.remove('is-open');
  }
  navToggle.addEventListener('click', ()=>{
    const isOpen = mobileMenu.classList.toggle('open');
    navToggle.setAttribute('aria-expanded', String(isOpen));
    navToggle.classList.toggle('is-open', isOpen);
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
