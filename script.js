document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();

        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

function scrollToTop() {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
}

$(document).ready(function(){
    $('.carousel').slick({
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 13000,
        dots: true
    });
});

$('.multiple-items').slick({
    infinite: true,
    slidesToShow: 4,
    slidesToScroll: 2,
    autoplay: true,
    autoplaySpeed: 2000
  });