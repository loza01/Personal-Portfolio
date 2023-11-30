document.addEventListener('DOMContentLoaded', function () {
    "use strict";

    // to load the whole site is loaded
    window.addEventListener('load', function () {
        // will first fade out the loading animation
        document.getElementById('status').style.display = 'none';
        // will fade out the white DIV that covers the website.
        setTimeout(function () {
            document.getElementById('preloader').style.display = 'none';
            document.body.style.overflow = 'visible';
        }, 350);
    });

    // scroll menu
    var sections = document.querySelectorAll('.section'),
        nav = document.querySelectorAll('.navbar-fixed-top,footer')[0],
        nav_height = nav.offsetHeight;

    function setActiveSection() {
        var cur_pos = window.scrollY || window.scrollTop || document.getElementsByTagName("html")[0].scrollTop;

        sections.forEach(function (section) {
            var top = section.offsetTop - nav_height,
                bottom = top + section.offsetHeight;

            if (cur_pos >= top && cur_pos <= bottom) {
                nav.querySelectorAll('a').forEach(function (link) {
                    link.classList.remove('active');
                });
                sections.forEach(function (s) {
                    s.classList.remove('active');
                });

                section.classList.add('active');
                nav.querySelector('a[href="#' + section.id + '"]').classList.add('active');
            }
        });
    }

    window.addEventListener('scroll', setActiveSection);

    nav.querySelectorAll('a').forEach(function (link) {
        link.addEventListener('click', function (e) {
            e.preventDefault();
            var targetId = this.getAttribute('href');
            var targetOffset = document.querySelector(targetId).offsetTop - nav_height + 2;
            window.scrollTo({
                top: targetOffset,
                behavior: 'smooth'
            });
        });
    });

    // Menu opacity
    function updateMenuOpacity() {
        var navbar = document.querySelector(".navbar-fixed-top");
        if (window.scrollY > 80) {
            navbar.classList.add("bg-nav");
        } else {
            navbar.classList.remove("bg-nav");
        }
    }

    window.addEventListener('scroll', updateMenuOpacity);

    // Parallax
    // Note: Implement your parallax logic here

    // AOS
    AOS.init({
        duration: 1200,
        once: true,
        disable: 'mobile'
    });

    // isotope
    document.getElementById('projects').addEventListener('load', function () {
        var container = document.querySelector('.portfolio_container');
        var portfolioFilter = document.querySelector('.portfolio_filter');

        var filterButtons = portfolioFilter.querySelectorAll('a');

        filterButtons.forEach(function (button) {
            button.addEventListener('click', function () {
                portfolioFilter.querySelector('.active').classList.remove('active');
                this.classList.add('active');

                var selector = this.getAttribute('data-filter');
                container.isotope({
                    filter: selector,
                    animationOptions: {
                        duration: 500,
                        animationEngine: "jquery"
                    }
                });
            });
        });
    });

    // animatedModal
    var modalIds = ["demo01", "demo02", "demo03", "demo04", "demo05", "demo06", "demo07", "demo08", "demo09"];
    modalIds.forEach(function (id) {
        document.getElementById(id).animatedModal();
    });

    // Contact Form
    var contactForm = document.getElementById('contact-form');
    contactForm.addEventListener('submit', function (e) {
        e.preventDefault();
        // Implement your form submission logic here using vanilla JavaScript
        // You may use the Fetch API or other methods to send data to the server
    });
});
