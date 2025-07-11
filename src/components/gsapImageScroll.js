import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
gsap.registerPlugin(ScrollTrigger);

/**
 * Animate image on scroll: Right → Diagonal Down-Left → Left → Diagonal Up-Right → Center.
 * @param {React.RefObject} imgRef - Ref to image element
 * @param {Object} options - scrollDistance, xMove, yMove
 */
export function animateImageOnScroll(imgRef, options = {}) {
  const scrollDistance = options.scrollDistance || 2.5;
  const xMove = options.xMove || '-20vw';
  const yMove = options.yMove || '20vh';

  if (!imgRef.current) return;

  ScrollTrigger.getAll().forEach(trigger => {
    if (trigger.trigger === imgRef.current) trigger.kill();
  });

  gsap.set(imgRef.current, {
    position: 'absolute',
    top: '10vh',
    right: '0',
    left: 'auto',
    x: 0,
    y: 0,
    xPercent: 0,
    zIndex: 10,
    pointerEvents: 'none',
  });

  const tl = gsap.timeline({
    scrollTrigger: {
      trigger: document.body,
      start: 'top top',
      end: `+=${window.innerHeight * scrollDistance}`,
      scrub: 2,
    },
  });

  tl.to(imgRef.current, {
    x: xMove,
    y: yMove,
    right: 'auto',
    left: '10vw',
    xPercent: 0,
    ease: 'power2.inOut',
    duration: 1,
  });

  tl.to(imgRef.current, {
    x: '0vw',
    y: '0vh',
    left: '50%',
    right: 'auto',
    xPercent: -50,
    ease: 'power2.inOut',
    duration: 1,
  });
}

/**
 * Initialize all scroll animations for the landing page
 */
export function initializeScrollAnimations() {
  // Clear any existing ScrollTriggers
  ScrollTrigger.getAll().forEach(trigger => trigger.kill());

  // Hero Section Animations
  gsap.fromTo('.hero-content', 
    { 
      opacity: 0, 
      y: 100,
      duration: 0 
    },
    {
      opacity: 1,
      y: 0,
      duration: 1,
      ease: 'power3.out',
      scrollTrigger: {
        trigger: '.hero-content',
        start: 'top 80%',
        end: 'bottom 20%',
        toggleActions: 'play none none reverse'
      }
    }
  );

  // Benefits Section Animations
  gsap.fromTo('.benefit-card',
    {
      opacity: 0,
      y: 50,
      scale: 0.9
    },
    {
      opacity: 1,
      y: 0,
      scale: 1,
      duration: 0.8,
      ease: 'power2.out',
      stagger: 0.2,
      scrollTrigger: {
        trigger: '.benefits-section',
        start: 'top 75%',
        end: 'bottom 25%',
        toggleActions: 'play none none reverse'
      }
    }
  );

  // Features Section Animations
  gsap.fromTo('.feature-card',
    {
      opacity: 0,
      y: 80,
      rotationY: 15
    },
    {
      opacity: 1,
      y: 0,
      rotationY: 0,
      duration: 1,
      ease: 'power3.out',
      stagger: 0.3,
      scrollTrigger: {
        trigger: '.features-section',
        start: 'top 70%',
        end: 'bottom 30%',
        toggleActions: 'play none none reverse'
      }
    }
  );

  // Testimonials Section Animations
  gsap.fromTo('.testimonial-card',
    {
      opacity: 0,
      x: -100,
      scale: 0.8
    },
    {
      opacity: 1,
      x: 0,
      scale: 1,
      duration: 0.8,
      ease: 'back.out(1.7)',
      stagger: 0.2,
      scrollTrigger: {
        trigger: '.testimonials-section',
        start: 'top 75%',
        end: 'bottom 25%',
        toggleActions: 'play none none reverse'
      }
    }
  );

  // Impact Section Animations
  gsap.fromTo('.impact-stat',
    {
      opacity: 0,
      scale: 0,
      rotation: 180
    },
    {
      opacity: 1,
      scale: 1,
      rotation: 0,
      duration: 1,
      ease: 'elastic.out(1, 0.3)',
      stagger: 0.1,
      scrollTrigger: {
        trigger: '.impact-section',
        start: 'top 80%',
        end: 'bottom 20%',
        toggleActions: 'play none none reverse'
      }
    }
  );

  // Environmental Impact Card Animation
  gsap.fromTo('.environmental-card',
    {
      opacity: 0,
      y: 50,
      scale: 0.95
    },
    {
      opacity: 1,
      y: 0,
      scale: 1,
      duration: 1,
      ease: 'power2.out',
      scrollTrigger: {
        trigger: '.environmental-card',
        start: 'top 85%',
        end: 'bottom 15%',
        toggleActions: 'play none none reverse'
      }
    }
  );

  // FAQ Section Animations
  gsap.fromTo('.faq-item',
    {
      opacity: 0,
      x: -50,
      scale: 0.95
    },
    {
      opacity: 1,
      x: 0,
      scale: 1,
      duration: 0.6,
      ease: 'power2.out',
      stagger: 0.1,
      scrollTrigger: {
        trigger: '.faq-section',
        start: 'top 80%',
        end: 'bottom 20%',
        toggleActions: 'play none none reverse'
      }
    }
  );

  // CTA Section Animations
  gsap.fromTo('.cta-content',
    {
      opacity: 0,
      y: 60,
      scale: 0.9
    },
    {
      opacity: 1,
      y: 0,
      scale: 1,
      duration: 1,
      ease: 'power3.out',
      scrollTrigger: {
        trigger: '.cta-section',
        start: 'top 75%',
        end: 'bottom 25%',
        toggleActions: 'play none none reverse'
      }
    }
  );

  // App Download Buttons Animation
  gsap.fromTo('.app-download-btn',
    {
      opacity: 0,
      y: 30,
      scale: 0.8
    },
    {
      opacity: 1,
      y: 0,
      scale: 1,
      duration: 0.8,
      ease: 'back.out(1.7)',
      stagger: 0.2,
      scrollTrigger: {
        trigger: '.app-download-section',
        start: 'top 85%',
        end: 'bottom 15%',
        toggleActions: 'play none none reverse'
      }
    }
  );

  // Floating Background Elements Animation
  gsap.to('.floating-element', {
    y: -50,
    rotation: 360,
    duration: 20,
    ease: 'none',
    repeat: -1,
    yoyo: true,
    scrollTrigger: {
      trigger: 'body',
      start: 'top top',
      end: 'bottom bottom',
      scrub: 1
    }
  });

  // Parallax Effect for Hero Image
  gsap.to('.hero-image', {
    y: -100,
    scale: 1.05,
    duration: 1,
    ease: 'none',
    scrollTrigger: {
      trigger: '.hero-section',
      start: 'top bottom',
      end: 'bottom top',
      scrub: 1
    }
  });

  // Text Reveal Animations
  gsap.fromTo('.reveal-text',
    {
      opacity: 0,
      y: 50,
      clipPath: 'inset(0 100% 0 0)'
    },
    {
      opacity: 1,
      y: 0,
      clipPath: 'inset(0 0% 0 0)',
      duration: 1.2,
      ease: 'power3.out',
      stagger: 0.1,
      scrollTrigger: {
        trigger: '.reveal-text',
        start: 'top 85%',
        end: 'bottom 15%',
        toggleActions: 'play none none reverse'
      }
    }
  );

  // Counter Animation for Stats
  const counters = document.querySelectorAll('.counter-number');
  counters.forEach(counter => {
    const target = parseInt(counter.textContent.replace(/[^\d]/g, ''));
    const suffix = counter.textContent.replace(/[\d]/g, '');
    
    gsap.fromTo(counter,
      { textContent: 0 },
      {
        textContent: target,
        duration: 2,
        ease: 'power2.out',
        snap: { textContent: 1 },
        scrollTrigger: {
          trigger: counter,
          start: 'top 80%',
          end: 'bottom 20%',
          toggleActions: 'play none none reverse'
        },
        onUpdate: function() {
          counter.textContent = Math.ceil(this.targets()[0].textContent) + suffix;
        }
      }
    );
  });
}

/**
 * Clean up all ScrollTrigger animations
 */
export function cleanupScrollAnimations() {
  ScrollTrigger.getAll().forEach(trigger => trigger.kill());
}

/**
 * Refresh ScrollTrigger on window resize
 */
export function refreshScrollTrigger() {
  ScrollTrigger.refresh();
}