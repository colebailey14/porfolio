// Smooth scrolling
document.querySelectorAll('header nav a').forEach(anchor=>{
    anchor.addEventListener('click', function(e){
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({behavior:'smooth'});
    });
});

// Fade-in on scroll
const faders = document.querySelectorAll('.fade-in');
const options = { threshold: 0.2 };
const appearOnScroll = new IntersectionObserver(function(entries, observer){
  entries.forEach(entry=>{
    if(entry.isIntersecting){
      entry.target.style.animation = "fadeIn 1s forwards";
      observer.unobserve(entry.target);
    }
  });
}, options);
faders.forEach(fader=>{appearOnScroll.observe(fader)});
