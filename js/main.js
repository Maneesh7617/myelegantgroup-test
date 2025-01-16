var owl = $('.carousel1');
owl.owlCarousel({
    items:6,
    loop:true,
    margin:10,
    autoplay:true,
    autoplayTimeout:3000,
    autoplayHoverPause:true,
    responsive: {
        0: {
            items: 1
        },
        576: {
            items: 2
        },
        768: {
            items: 3
        },
        992: {
            items: 4
        },
        1200: {
            items: 6
        }
    }
});

var owl1 = $('.carousel2');
owl1.owlCarousel({
    items:1,
    loop:true,
    margin:10,
    autoplay:true,
    autoplayTimeout:3000,
    autoplayHoverPause:true
});

var owl2 = $('.carousel3');
owl2.owlCarousel({
    items:3,
    loop:true,
    margin:10,
    autoplay:true,
    autoplayTimeout:3000,
    autoplayHoverPause:true,
    responsive: {
        0: {
            items: 1
        },
        768: {
            items: 2
        },
        1200: {
            items: 3
        }
    }
});

$(document).ready(function () {
  $(window).scroll(function () {
    if ($(this).scrollTop() > 300) {
      $('.back-to-top').addClass('show');
    } else {
      $('.back-to-top').removeClass('show');
    }
  });

  $('.back-to-top').click(function (e) {
    e.preventDefault();
    $('html, body').animate({ scrollTop: 0 }, 800);
  });
});

$(document).ready(function () {
  $('.counter').each(function () {
    const $this = $(this),
      countTo = $this.attr('data-count');

    $({ countNum: $this.text() }).animate(
      { countNum: countTo },
      {
        duration: 2000, 
        easing: 'linear',
        step: function () {
          $this.text(Math.floor(this.countNum));
        },
        complete: function () {
          $this.text(this.countNum); 
        },
      }
    );
  });
});
/*************************** */
document.addEventListener("DOMContentLoaded", function () {
  setTimeout(function () {
    const modal = new bootstrap.Modal(document.getElementById('auto'));
    modal.show();
  }, 5000); 
});
const accordeons = document.querySelectorAll('.accordion-button');
accordeons.forEach(acc => {
  acc.addEventListener('click', function() {
    const allAccordions = document.querySelectorAll('.accordion-button');
    allAccordions.forEach(button => {
      if (button !== acc) {
        button.setAttribute('aria-expanded', 'false');
        button.closest('.accordion-item').querySelector('.accordion-collapse').classList.remove('show');
      }
    });
  });
});

function countUp(element) {
  const target = parseInt(element.getAttribute('data-count'), 10);
  const duration = 2000; 
  const stepTime = Math.abs(Math.floor(duration / target));
  let current = 0;

  const timer = setInterval(() => {
    current += 1;
    element.textContent = current;
    if (current >= target) {
      clearInterval(timer);
    }
  }, stepTime);
}
document.addEventListener('DOMContentLoaded', function () {
  const counters = document.querySelectorAll('.counter');
  const section = document.getElementById('stats-section');
  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        counters.forEach((counter) => {
          if (!counter.classList.contains('counted')) { 
            counter.classList.add('counted');
            countUp(counter);
          }
        });
        observer.unobserve(section); 
      }
    });
  }, { threshold: 0.3 }); 
  observer.observe(section);
});