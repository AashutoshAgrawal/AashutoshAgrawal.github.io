// script.js

// Add a class when the slide enters the viewport
const slides = document.querySelectorAll('.slide');

const isInViewport = (element) => {
  const rect = element.getBoundingClientRect();
  return rect.top < window.innerHeight && rect.bottom >= 0;
};

const handleScroll = () => {
  slides.forEach((slide) => {
    if (isInViewport(slide)) {
      slide.classList.add('in-view');
    }
  });
};

// Trigger animations on scroll
window.addEventListener('scroll', handleScroll);

// Initial check on page load
handleScroll();


const testimonials = document.querySelectorAll('.testimonial');
let currentTestimonialIndex = 0;

function showNextTestimonial() {
  testimonials[currentTestimonialIndex].classList.remove('active');
  currentTestimonialIndex = (currentTestimonialIndex + 1) % testimonials.length;
  testimonials[currentTestimonialIndex].classList.add('active');
}

// Show next testimonial every 3 seconds
setInterval(showNextTestimonial, 3000);

