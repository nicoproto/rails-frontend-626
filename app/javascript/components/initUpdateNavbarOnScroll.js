const initUpdateNavbarOnScroll = () => {
  // Selecting the navbar element
  const navbar = document.querySelector('.navbar-lewagon');
  // Checking if the navbar element exists
  if (navbar) {
    window.addEventListener('scroll', () => {
      if (window.scrollY >= window.innerHeight) {
        navbar.classList.add('navbar-lewagon-white');
      } else {
        navbar.classList.remove('navbar-lewagon-white');
      }
    });
  }
}

export { initUpdateNavbarOnScroll };