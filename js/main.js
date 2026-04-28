/* ═══════════════════════════════════════════════════════════
   AMRITESHWAR DWIVEDI PORTFOLIO — JavaScript
   ═══════════════════════════════════════════════════════════ */

document.addEventListener('DOMContentLoaded', () => {

  /* ── CUSTOM CURSOR ── */
  const cursorOuter = document.getElementById('cursor-outer');
  const cursorInner = document.getElementById('cursor-inner');
  let mx = 0, my = 0, cx = 0, cy = 0;

  document.addEventListener('mousemove', e => {
    mx = e.clientX; my = e.clientY;
    cursorInner.style.left = mx + 'px';
    cursorInner.style.top  = my + 'px';
  });

  (function animCursor() {
    cx += (mx - cx) * 0.1;
    cy += (my - cy) * 0.1;
    cursorOuter.style.left = cx + 'px';
    cursorOuter.style.top  = cy + 'px';
    requestAnimationFrame(animCursor);
  })();

  document.querySelectorAll('a,button,input,select,textarea,.tl-card,.about-card,.proj-card,.comp-chip,.method-tags span').forEach(el => {
    el.addEventListener('mouseenter', () => cursorOuter.classList.add('big'));
    el.addEventListener('mouseleave', () => cursorOuter.classList.remove('big'));
  });

  /* ── NAVBAR SCROLL ── */
  const header = document.getElementById('site-header');
  const navLinks = document.querySelectorAll('.nav-link');

  const onScroll = () => {
    if (window.scrollY > 60) header.classList.add('scrolled');
    else header.classList.remove('scrolled');
    updateActiveNav();
    handleBackTop();
  };
  window.addEventListener('scroll', onScroll, { passive: true });

  function updateActiveNav() {
    const sections = document.querySelectorAll('section[id]');
    let current = '';
    sections.forEach(s => {
      if (window.scrollY >= s.offsetTop - 180) current = s.id;
    });
    navLinks.forEach(l => {
      l.classList.remove('active');
      if (l.getAttribute('href') === '#' + current) l.classList.add('active');
    });
  }

  /* ── MOBILE DRAWER ── */
  const navToggle   = document.getElementById('navToggle');
  const mobileDrawer = document.getElementById('mobileDrawer');
  const drawerClose  = document.getElementById('drawerClose');

  const openDrawer = () => mobileDrawer.classList.add('open');
  const closeDrawer = () => mobileDrawer.classList.remove('open');

  navToggle.addEventListener('click', openDrawer);
  drawerClose.addEventListener('click', closeDrawer);
  document.querySelectorAll('.drawer-link').forEach(l => l.addEventListener('click', closeDrawer));

  /* ── SMOOTH SCROLL ── */
  document.querySelectorAll('a[href^="#"]').forEach(a => {
    a.addEventListener('click', e => {
      const tgt = document.querySelector(a.getAttribute('href'));
      if (tgt) { e.preventDefault(); window.scrollTo({ top: tgt.offsetTop - 80, behavior: 'smooth' }); }
    });
  });

  /* ── SCROLL REVEAL ── */
  const revealObs = new IntersectionObserver(entries => {
    entries.forEach(e => {
      if (e.isIntersecting) { e.target.classList.add('visible'); revealObs.unobserve(e.target); }
    });
  }, { threshold: 0.12 });
  document.querySelectorAll('.reveal').forEach(el => revealObs.observe(el));

  /* ── HERO KPI COUNTER ── */
  const kpiObs = new IntersectionObserver(entries => {
    entries.forEach(e => {
      if (e.isIntersecting) {
        document.querySelectorAll('.kpi-n').forEach(el => animCount(el));
        kpiObs.disconnect();
      }
    });
  }, { threshold: 0.5 });
  const kpiSection = document.querySelector('.hero-kpis');
  if (kpiSection) kpiObs.observe(kpiSection);

  function animCount(el) {
    const target = parseInt(el.dataset.target) || 0;
    let cur = 0;
    const step = target / 60;
    const t = setInterval(() => {
      cur += step;
      if (cur >= target) { cur = target; clearInterval(t); }
      el.textContent = Math.floor(cur);
    }, 20);
  }

  /* ── SKILL BARS ── */
  const skillObs = new IntersectionObserver(entries => {
    entries.forEach(e => {
      if (e.isIntersecting) {
        e.target.querySelectorAll('.bi-fill').forEach(bar => {
          bar.style.width = bar.dataset.w + '%';
        });
      }
    });
  }, { threshold: 0.2 });
  document.querySelectorAll('.skill-block').forEach(b => skillObs.observe(b));

  /* ── PARALLAX BLOBS ── */
  document.addEventListener('mousemove', e => {
    const x = (e.clientX / window.innerWidth  - 0.5) * 30;
    const y = (e.clientY / window.innerHeight - 0.5) * 30;
    document.querySelectorAll('.hb-circle').forEach((c, i) => {
      const f = (i + 1) * 0.5;
      c.style.transform = `translate(${x * f}px, ${y * f}px)`;
    });
  });

  /* ── BACK TO TOP ── */
  const btt = document.getElementById('backTop');
  function handleBackTop() {
    if (window.scrollY > 500) btt.classList.add('show');
    else btt.classList.remove('show');
  }
  if (btt) btt.addEventListener('click', () => window.scrollTo({ top: 0, behavior: 'smooth' }));

  /* ── CONTACT FORM ── */
  const cForm   = document.getElementById('contactForm');
  const cfSuccess = document.getElementById('cfSuccess');
  if (cForm) {
    cForm.addEventListener('submit', e => {
      e.preventDefault();
      const btn = cForm.querySelector('button[type="submit"]');
      btn.textContent = 'Sending…';
      btn.disabled = true;
      setTimeout(() => {
        cForm.reset();
        btn.innerHTML = 'Send Message <span>→</span>';
        btn.disabled = false;
        cfSuccess.style.display = 'block';
        setTimeout(() => cfSuccess.style.display = 'none', 5000);
      }, 1200);
    });
  }

  /* ── STAGGER ANIMATE PROJ CARDS ── */
  const projObs = new IntersectionObserver(entries => {
    entries.forEach((e, i) => {
      if (e.isIntersecting) {
        setTimeout(() => {
          e.target.style.opacity = '1';
          e.target.style.transform = 'translateY(0)';
        }, i * 100);
        projObs.unobserve(e.target);
      }
    });
  }, { threshold: 0.1 });

  document.querySelectorAll('.proj-card').forEach(c => {
    c.style.opacity = '0';
    c.style.transform = 'translateY(40px)';
    c.style.transition = 'opacity 0.7s ease, transform 0.7s cubic-bezier(0.16,1,0.3,1), border-color 0.3s, box-shadow 0.3s, transform 0.4s';
    projObs.observe(c);
  });

});
