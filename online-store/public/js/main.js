// Temporary JSON
const json = '{ "guns": [ { "name": "TEST", "number": 0, "type": "none", "price": 99, "description": "cool gun0" }, { "name": "AK 47", "number": 1, "type": "auto", "price": 99, "description": "cool gun1" }, { "name": "M4", "number": 2, "type": "auto", "price": 99, "description": "cool gun2" }, { "name": "M 60", "number": 3, "type": "auto", "price": 99, "description": "cool gun3" }, { "name": "M1911", "number": 4, "type": "semi", "price": 99, "description": "cool gun4" }, { "name": "Magnum 44", "number": 5, "type": "semi", "price": 99, "description": "cool gun5" }, { "name": "M1 Garand", "number": 6, "type": "semi", "price": 99, "description": "cool gun6" }, { "name": "Breech Loader", "number": 7, "type": "manual", "price": 99, "description": "cool gun7" }, { "name": "Breech Loader 2", "number": 8, "type": "manual", "price": 99, "description": "cool gun8" }, { "name": "Kar 98k", "number": 9, "type": "manual", "price": 99, "description": "cool gun9" } ] }';

// Populate portfolio/gunList with all elements from the array
var data = JSON.parse(json);
jQuery.each(data.guns, function (key, val) {

  // Momentary comment to test other way of showing guns
  // $("#gunList").append('<div class="col-lg-4 col-md-6 portfolio-item filter-' + val.type + '">' +
  //   '<div class="portfolio-img"><img src="/img/portfolio/portfolio-' + val.number + '.jpg" class="img-fluid" alt=""></div>' +
  //   '<div class="portfolio-info">' +
  //   '<h4>' + val.name + '</h4>' +
  //   '<p>' + val.type + '</p>' +
  //   '<a href="/img/portfolio/portfolio-' + val.number + '.jpg" data-gallery="portfolioGallery" class="portfolio-lightbox preview-link" title="' + val.name + '"><i class="bx bx-plus"></i></a>' +
  //   '<a class="details-link" title="More Details" id="' + val.number + '" onclick="showModal(this.id)"><i class="bx bx-link"></i></a>' +
  //   '</div>' +
  //   '</div>');

});


(function () {
  "use strict";

  /**
   * Easy selector helper function
   */
  const select = (el, all = false) => {
    el = el.trim()
    if (all) {
      return [...document.querySelectorAll(el)]
    } else {
      return document.querySelector(el)
    }
  }

  /**
   * Easy event listener function
   */
  const on = (type, el, listener, all = false) => {
    let selectEl = select(el, all)
    if (selectEl) {
      if (all) {
        selectEl.forEach(e => e.addEventListener(type, listener))
      } else {
        selectEl.addEventListener(type, listener)
      }
    }
  }

  /**
   * Easy on scroll event listener 
   */
  const onscroll = (el, listener) => {
    el.addEventListener('scroll', listener)
  }

  /**
   * Navbar links active state on scroll
   */
  let navbarlinks = select('#navbar .scrollto', true)
  const navbarlinksActive = () => {
    let position = window.scrollY + 200
    navbarlinks.forEach(navbarlink => {
      if (!navbarlink.hash) return
      let section = select(navbarlink.hash)
      if (!section) return
      if (position >= section.offsetTop && position <= (section.offsetTop + section.offsetHeight)) {
        navbarlink.classList.add('active')
      } else {
        navbarlink.classList.remove('active')
      }
    })
  }
  window.addEventListener('load', navbarlinksActive)
  onscroll(document, navbarlinksActive)

  /**
   * Scrolls to an element with header offset
   */
  const scrollto = (el) => {
    let header = select('#header')
    let offset = header.offsetHeight

    let elementPos = select(el).offsetTop
    window.scrollTo({
      top: elementPos - offset,
      behavior: 'smooth'
    })
  }

  /**
   * Toggle .header-scrolled class to #header when page is scrolled
   */
  let selectHeader = select('#header')
  if (selectHeader) {
    const headerScrolled = () => {
      if (window.scrollY > 100) {
        selectHeader.classList.add('header-scrolled')
      } else {
        selectHeader.classList.remove('header-scrolled')
      }
    }
    window.addEventListener('load', headerScrolled)
    onscroll(document, headerScrolled)
  }

  /**
   * Back to top button
   */
  let backtotop = select('.back-to-top')
  if (backtotop) {
    const toggleBacktotop = () => {
      if (window.scrollY > 100) {
        backtotop.classList.add('active')
      } else {
        backtotop.classList.remove('active')
      }
    }
    window.addEventListener('load', toggleBacktotop)
    onscroll(document, toggleBacktotop)
  }

  /**
   * Scrool with ofset on links with a class name .scrollto
   */
  on('click', '.scrollto', function (e) {
    if (select(this.hash)) {
      e.preventDefault()

      let navbar = select('#navbar')
      if (navbar.classList.contains('navbar-mobile')) {
        navbar.classList.remove('navbar-mobile')
        let navbarToggle = select('.mobile-nav-toggle')
        navbarToggle.classList.toggle('bi-list')
        navbarToggle.classList.toggle('bi-x')
      }
      scrollto(this.hash)
    }
  }, true)

  /**
   * Scroll with ofset on page load with hash links in the url
   */
  window.addEventListener('load', () => {
    if (window.location.hash) {
      if (select(window.location.hash)) {
        scrollto(window.location.hash)
      }
    }
  });

  /**
   * Initiate  glightbox 
   */
  const glightbox = GLightbox({
    selector: '.glightbox'
  });

  /**
   * Porfolio isotope and filter
   */
  window.addEventListener('load', () => {

    let portfolioContainer = select('.portfolio-container');
    if (portfolioContainer) {
      let portfolioIsotope = new Isotope(portfolioContainer, {
        itemSelector: '.portfolio-item'
      });

      let portfolioFilters = select('#portfolio-flters li', true);

      on('click', '#portfolio-flters li', function (e) {
        e.preventDefault();
        portfolioFilters.forEach(function (el) {
          el.classList.remove('filter-active');
        });
        this.classList.add('filter-active');

        portfolioIsotope.arrange({
          filter: this.getAttribute('data-filter')
        });
        portfolioIsotope.on('arrangeComplete', function () {
          AOS.refresh()
        });
      }, true);
    }

  });

  /**
   * Initiate portfolio lightbox 
   */
  const portfolioLightbox = GLightbox({
    selector: '.portfolio-lightbox'
  });

  /**
   * Portfolio details slider
   */
  new Swiper('.portfolio-details-slider', {
    speed: 400,
    loop: true,
    autoplay: {
      delay: 5000,
      disableOnInteraction: false
    },
    pagination: {
      el: '.swiper-pagination',
      type: 'bullets',
      clickable: true
    }
  });

  /**
   * Animation on scroll
   */
  window.addEventListener('load', () => {
    AOS.init({
      duration: 1000,
      easing: "ease-in-out",
      once: true,
      mirror: false
    });
  });

})()