/* Kursol - Main JavaScript */

document.addEventListener('DOMContentLoaded', function() {

  /* --- Mobile Navigation Toggle --- */
  const mobileToggle = document.querySelector('.mobile-toggle');
  const nav = document.querySelector('.nav');

  if (mobileToggle && nav) {
    mobileToggle.addEventListener('click', function() {
      nav.classList.toggle('active');
      const spans = mobileToggle.querySelectorAll('span');
      if (nav.classList.contains('active')) {
        spans[0].style.transform = 'rotate(45deg) translate(5px, 5px)';
        spans[1].style.opacity = '0';
        spans[2].style.transform = 'rotate(-45deg) translate(5px, -5px)';
      } else {
        spans[0].style.transform = '';
        spans[1].style.opacity = '';
        spans[2].style.transform = '';
      }
    });
  }

  /* --- Accordion --- */
  const accordionHeaders = document.querySelectorAll('.accordion-header');

  accordionHeaders.forEach(function(header) {
    header.addEventListener('click', function() {
      const item = header.parentElement;
      const isActive = item.classList.contains('active');

      // Close siblings in the same accordion group
      const parent = item.parentElement;
      if (parent) {
        parent.querySelectorAll('.accordion-item.active').forEach(function(activeItem) {
          activeItem.classList.remove('active');
        });
      }

      if (!isActive) {
        item.classList.add('active');
      }
    });
  });

  /* --- Header Scroll Effect --- */
  const header = document.querySelector('.header');
  if (header) {
    window.addEventListener('scroll', function() {
      if (window.scrollY > 50) {
        header.style.boxShadow = '0 4px 20px rgba(0,0,0,0.08)';
      } else {
        header.style.boxShadow = '0 1px 2px rgba(0,0,0,0.05)';
      }
    });
  }

  /* --- Animate Progress Bars on Scroll --- */
  const progressBars = document.querySelectorAll('.progress-fill');
  if (progressBars.length > 0) {
    const observer = new IntersectionObserver(function(entries) {
      entries.forEach(function(entry) {
        if (entry.isIntersecting) {
          const bar = entry.target;
          const width = bar.getAttribute('data-width');
          if (width) {
            bar.style.width = width + '%';
          }
          observer.unobserve(bar);
        }
      });
    }, { threshold: 0.5 });

    progressBars.forEach(function(bar) {
      bar.style.width = '0%';
      observer.observe(bar);
    });
  }

  /* --- Smooth Scroll for Anchor Links --- */
  document.querySelectorAll('a[href^="#"]').forEach(function(anchor) {
    anchor.addEventListener('click', function(e) {
      const target = document.querySelector(this.getAttribute('href'));
      if (target) {
        e.preventDefault();
        target.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    });
  });

  /* --- Active Navigation Highlight --- */
  const currentPage = window.location.pathname.split('/').pop() || 'index.html';
  document.querySelectorAll('.nav-menu a').forEach(function(link) {
    const href = link.getAttribute('href');
    if (href === currentPage) {
      link.classList.add('active');
    }
  });

});
