window.addEventListener('scroll', function() {
    var button = document.querySelector('.floating-button');
    var scrollPosition = window.scrollY;
    if (scrollPosition > 300) { /* Cambia este valor según cuánto quieras que se desplace el botón antes de aparecer */
      button.classList.add('scroll-up');
    } else {
      button.classList.remove('scroll-up');
    }
  });