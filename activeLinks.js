var scrollSpy = new bootstrap.ScrollSpy(document.body, {
  target: '#navbarNav',
  offset: 100,
});

// Update active class on click
document.querySelectorAll('.nav-link').forEach((link) => {
  link.addEventListener('click', function () {
    document.querySelectorAll('.nav-link').forEach((l) => {
      l.classList.remove('active');
    });
    this.classList.add('active');
  });
});
