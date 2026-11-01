document.getElementById('y').textContent = new Date().getFullYear();
const els = document.querySelectorAll('section:not(.hero) > *');
els.forEach(e => e.classList.add('reveal'));
if ('IntersectionObserver' in window) {
  const io = new IntersectionObserver(es => es.forEach(x => {
    if (x.isIntersecting) { x.target.classList.add('in'); io.unobserve(x.target); }
  }), { threshold: 0.1 });
  els.forEach(e => io.observe(e));
} else {
  els.forEach(e => e.classList.add('in'));
}
