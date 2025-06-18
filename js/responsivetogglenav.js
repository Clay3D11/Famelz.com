// <!-- Nav -->
//   <!-- Nav -->
//   <!-- Nav -->

  const toggle = document.getElementById('menu-toggle');
  const nav = document.getElementById('nav');
  const navContainer = document.getElementById('nav-container');
  const navLinks = document.querySelectorAll('.nav a');

  // Toggle nav open/close
  toggle.addEventListener('click', () => {
    nav.classList.toggle('active');
  });

  // Smooth scroll and auto-close on link click
  navLinks.forEach(link => {
    link.addEventListener('click', e => {
      e.preventDefault();
      const target = document.querySelector(link.getAttribute('href'));
      target.scrollIntoView({ behavior: 'smooth' });
      nav.classList.remove('active');
    });
  });

  // Close nav when clicking outside
  document.addEventListener('click', (e) => {
    const isClickInside = nav.contains(e.target) || toggle.contains(e.target);
    if (!isClickInside && nav.classList.contains('active')) {
      nav.classList.remove('active');
    }
  });