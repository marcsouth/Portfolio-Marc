var TxtType = function(el, toRotate, period) {
      this.toRotate = toRotate;
      this.el = el;
      this.loopNum = 0;
      this.period = parseInt(period, 10) || 2000;
      this.txt = '';
      this.tick();
      this.isDeleting = false;
  };

  TxtType.prototype.tick = function() {
      var i = this.loopNum % this.toRotate.length;
      var fullTxt = this.toRotate[i];

      if (this.isDeleting) {
      this.txt = fullTxt.substring(0, this.txt.length - 1);
      } else {
      this.txt = fullTxt.substring(0, this.txt.length + 1);
      }

      this.el.innerHTML = '<span class="wrap">'+this.txt+'</span>';

      var that = this;
      var delta = 200 - Math.random() * 100;

      if (this.isDeleting) { delta /= 2; }

      if (!this.isDeleting && this.txt === fullTxt) {
      delta = this.period;
      this.isDeleting = true;
      } else if (this.isDeleting && this.txt === '') {
      this.isDeleting = false;
      this.loopNum++;
      delta = 500;
      }

      setTimeout(function() {
      that.tick();
      }, delta);
  };

  window.onload = function() {
      var elements = document.getElementsByClassName('typewrite');
      for (var i=0; i<elements.length; i++) {
          var toRotate = elements[i].getAttribute('data-type');
          var period = elements[i].getAttribute('data-period');
          if (toRotate) {
            new TxtType(elements[i], JSON.parse(toRotate), period);
          }
      }
      // INJECT CSS
      var css = document.createElement("style");
      css.type = "text/css";
      css.innerHTML = ".typewrite > .wrap { border-right: 0.08em solid #fff}";
      document.body.appendChild(css);
  };



  // This is script for revealing elements //

  function reveal() {
    var reveals = document.querySelectorAll(".reveal");
  
    for (var i = 0; i < reveals.length; i++) {
      var windowHeight = window.innerHeight;
      var elementTop = reveals[i].getBoundingClientRect().top;
      var elementVisible = 150;
  
      if (elementTop < windowHeight - elementVisible) {
        reveals[i].classList.add("active");
      } else {
        reveals[i].classList.remove("active");
      }
    }
  }
  
  window.addEventListener("scroll", reveal);



  
  const body = document.body;
  const header = document.querySelector("header");
  const main = document.querySelector("main");
  const headerHeight = document.querySelector("header").offsetHeight;
  main.style.top = headerHeight + "px";
  let lastScroll = 0;
  window.addEventListener("scroll", () => {
    let currentScroll = window.pageYOffset;
    if (currentScroll - lastScroll > 0) {
      header.classList.add("scroll-down");
      header.classList.remove("scroll-up");
    } else {
      // scrolled up -- header show
      header.classList.add("scroll-up");
      header.classList.remove("scroll-down");
    }
    lastScroll = currentScroll;
  })

  const primaryNav = document.querySelector('.primary-nav');
  const navToggle = document.querySelector('.mobile-nav-toggle');

  navToggle.addEventListener('click', ()=>{

      const visibility = primaryNav.getAttribute('data-visible')

      if(visibility === "false") {
        primaryNav.setAttribute('data-visible', true);
        navToggle.setAttribute('aria-expanded',true)
      }else if (visibility === 'true'){
        primaryNav.setAttribute("data-visible", false)
        navToggle.setAttribute('aria-expanded',false)
      }

  });

  primaryNav.addEventListener('click', ()=>{

    const visibility = primaryNav.getAttribute('data-visible')
       primaryNav.setAttribute("data-visible", false);
       navToggle.setAttribute('aria-expanded',false)
   
});

$(document).ready(function(){
  $(".hamburger").click(function(){
    $(this).toggleClass("is-active");
  });
});

