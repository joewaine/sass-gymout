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


