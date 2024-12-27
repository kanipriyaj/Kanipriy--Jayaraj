
// JavaScript to handle active link highlighting
document.addEventListener('DOMContentLoaded', function () {
    const sections = document.querySelectorAll('section');
    const navLinks = document.querySelectorAll('.nav-link');

    window.addEventListener('scroll', function () {
      let current = '';

      sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;
        if (pageYOffset >= (sectionTop - sectionHeight / 3)) {
          current = section.getAttribute('id');
        }
      });

      navLinks.forEach(navLink => {
        navLink.classList.remove('active');
        if (navLink.getAttribute('href').includes(current)) {
          navLink.classList.add('active');
        }
      });
    });
  });
//navbarcollapse

$(document).on('click',function(){ 
    $('.navbar .collapse').collapse('hide');})


    

  //animate progress bar
  $(document).ready(function() {
    function isElementInViewport(el) {
        var rect = el.getBoundingClientRect();
        return (
            rect.top >= 0 &&
            rect.left >= 0 &&
            rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
            rect.right <= (window.innerWidth || document.documentElement.clientWidth)
        );
    }

    function animateProgressBars() {
        $('.progress-bar').each(function() {
            if (isElementInViewport(this)) {
                var width = $(this).data('width');
                $(this).css('width', width + '%');
            }
        });
    }

    $(window).on('scroll', animateProgressBars);
    $(window).on('resize', animateProgressBars);

    // Trigger animation on page load
    animateProgressBars();
});