'use strict';

/**Optionally add Bootstrap to your project**/
import 'bootstrap';

import '../css/style.scss';


/********** Paste your code here! ************/

console.log('Paste your code here!');

function pauseVid() {
    vid.pause();
}

let vid = document.getElementById("video");

$('.play-video').click(function(){
    vid.play();







});


$(".back-to-top").on("click", function() {
    $("html, body").animate({ scrollTop: "0" }, 2000);
});




$('.top-nav a').click(function(e) {

e.preventDefault()
$('.drop-down-menu').toggleClass('visible')

});




var acc = document.getElementsByClassName("accordion");
var i;

for (i = 0; i < acc.length; i++) {
  acc[i].addEventListener("click", function() {
    this.classList.toggle("active");
    var panel = this.nextElementSibling;
    if (panel.style.maxHeight) {
      panel.style.maxHeight = null;
    } else {
      panel.style.maxHeight = panel.scrollHeight + "px";
    }
  });
}








     $('.product-images img').click(function(e) {


    $('.scroll-modal').addClass('visible')
    
    });
    

    $('.scroll-modal .close').click(function(e) {


        $('.scroll-modal').removeClass('visible')
        
        });
        


        $('.owl-carousel').owlCarousel({
            loop:true,
            margin:10,
            nav:true,
            dots: false,
            responsive:{
              0:{
                items:1
            },
              1000:{
                    items:1
                }
            }
        })