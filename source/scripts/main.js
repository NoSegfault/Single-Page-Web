/* Reference:
  https://codepen.io/subhaze/pen/BdEbn
  https://codepen.io/BuiltBySam/pen/merjWp
  https://www.w3schools.com/howto/howto_css_modal_images.asp
  https://www.w3schools.com/css/tryit.asp?filename=trycss3_column-rule
  https://www.w3schools.com/jsref/tryit.asp?filename=tryjsref_win_scrollto
  https://www.w3schools.com/howto/howto_js_slideshow.asp
  https://stackoverflow.com/questions/10422105/add-text-above-html5-video
  https://www.pinterest.com/explore/sunset-quotes/
  https://jsfiddle.net/rhcyy4kf/3/
  https://stackoverflow.com/questions/442404/retrieve-the-position-x-y-of-an-html-element
*/

var slideIndex = 0;
var scrollOffset = 0;
document.getElementById("carousel").style.color = "Aqua";
/*------------------------- Navbar and Indicator ----------------------*/
window.onscroll = function(){
  scrollOffset = window.scrollY;
  var nav = document.getElementById("nav");
  var car = document.getElementById("carousel");
  var mov = document.getElementById("movie");
  var mod = document.getElementById("modal");
  var mul = document.getElementById("multi");
  var fix = document.getElementById("fixed");

  if (scrollOffset <= 10){
    nav.style.fontSize = "28px";
  }
  else{
    nav.style.fontSize = "20px";
  }

  if(scrollOffset <= 550){
    car.style.color = "Aqua";
    mov.style.color = "white";
    mod.style.color = "white";
    mul.style.color = "white";
    fix.style.color = "white";
  }
  else if(scrollOffset <= 1080){
    car.style.color = "white";
    mov.style.color = "Aqua";
    mod.style.color = "white";
    mul.style.color = "white";
    fix.style.color = "white";
  }
  else if(scrollOffset <= 1380){
    car.style.color = "white";
    mov.style.color = "white";
    mod.style.color = "Aqua";
    mul.style.color = "white";
    fix.style.color = "white";
  }
  else if(scrollOffset <= 1600){
    car.style.color = "white";
    mov.style.color = "white";
    mod.style.color = "white";
    mul.style.color = "Aqua";
    fix.style.color = "white";
  }
  else{
    car.style.color = "white";
    mov.style.color = "white";
    mod.style.color = "white";
    mul.style.color = "white";
    fix.style.color = "Aqua";
  }
};

/*------------------------ Smooth Scrolling ----------------------*/

var carou = document.getElementById("carousel");
var carou_move = document.getElementById("caid");

var movie = document.getElementById("movie");
var movie_move = document.getElementById("video-container");

var modal = document.getElementById("modal");
var modal_move = document.getElementById("modal-contain");

var multi = document.getElementById("multi");
var multi_move = document.getElementById("mc");

var fixed = document.getElementById("fixed");
var fixed_move = document.getElementById("foot-contain");

var displacement = 0;
var total = 0;
var curr = 0;
carou.addEventListener("click",function(e){
  displacement = 0;
  total = carou_move.getBoundingClientRect().top;
  curr = window.scrollY;
  doMove();
})
movie.addEventListener("click",function(e){
  displacement = 0;
  total = movie_move.getBoundingClientRect().top;
  curr = window.scrollY;
  //alert(total);
  doMove();
})
modal.addEventListener("click", function(e){
  displacement = 0;
  total = modal_move.getBoundingClientRect().top;
  curr = window.scrollY;
  //alert(total);
  doMove();
})
multi.addEventListener("click",function(e){
  displacement = 0;
  total = multi_move.getBoundingClientRect().top;
  total -= 20;
  curr = window.scrollY;
  //alert(total);
  doMove();
})
fixed.addEventListener("click",function(e){
  displacement = 0;
  total = fixed_move.getBoundingClientRect().top;
  curr = window.scrollY;
  doMove();
})

function doMove(){
  displacement += total / 50;
  if(total > 0 && displacement >= total-30){
    return;
  }
  if(total < 0 && displacement <= total-60){
    return;
  }
  window.scrollTo(0, curr+displacement);
  requestAnimationFrame(doMove);
}







/*------------------------------- Carousel ------------------------------*/

// transitionend event stuff
var transitions = {
    'transition': 'transitionend',
    'OTransition': 'oTransitionEnd',
    'MozTransition': 'transitionend',
    'WebkitTransition': 'webkitTransitionEnd'
};
var transitionEvent = 'NO_TRANSITION_EVENT';
var _elem = document.createElement('div');
var __t = null;

for (__t in transitions)
    if (_elem.style[__t] !== undefined)
        transitionEvent = transitions[__t];

if (transitionEvent == 'NO_TRANSITION_EVENT') {
    var transEvent = document.createEvent('Event');
    transEvent.initEvent(transitionEvent, true, false);
}

// helper mixins

function asNodeList() {
    this.forEach = function(cb) {
        [].forEach.call(this, cb);
    };
    this.css = function(cssObj) {
        this.forEach(function(node) {
            for (var style in cssObj) node.style[style] = cssObj[style];
        });
    };
    return this;
}

// Carousel stuff

var carousels = asNodeList.call(document.querySelectorAll('[data-carousel]'));

carousels.forEach(function(elem) {
    var current = 0;
    var carouselSlide = elem.querySelector('.Carousel-Slide');
    var carouselSlideItems = asNodeList.call(
        carouselSlide.querySelectorAll('.Carousel-Slide-item')
    );

    carouselSlide.style.width = (carouselSlideItems.length * 100) + '%';
    carouselSlideItems.css({
        width: (100 / carouselSlideItems.length) + '%'
    });
    carouselSlideItems.forEach(function(item) {
        item.style.backgroundImage = item.getAttribute('data-background');
    });

    elem.querySelector('.Carousel-Controller-Nav-left')
        .addEventListener('click', function(e) {
            current--;
            slide(current);
        });
    elem.querySelector('.Carousel-Controller-Nav-right')
        .addEventListener('click', function(e) {
            current++;
            slide(current);
        });

    elem.addEventListener(transitionEvent, (function() {
        var completedElem = document.getElementById('completed');
        return function(e) {
            completedElem.style.display = 'block';
            setTimeout(function() {
                completedElem.style.display = 'none';
            }, 500);
        }
    })());

    function slide(place) {
        if (current < 0) current = carouselSlideItems.length - 1;
        else if (current >= carouselSlideItems.length) current = 0;
        carouselSlide.style.left = -(current * 100) + '%';

        if (transitionEvent == 'NO_TRANSITION_EVENT')
            elem.dispatchEvent(transEvent);
    }
});


/*------------------------------- Modal ------------------------------*/

var modal = document.getElementById('myModal');

var img1 = document.getElementById("myImg1");
var img2 = document.getElementById("myImg2");
var img3 = document.getElementById("myImg3");
var modalImg = document.getElementById("img01");
var captionText = document.getElementById("caption");
img1.onclick = function(){
    modal.style.display = "block";
    modalImg.src = this.src;
    captionText.innerHTML = this.alt;
}
img2.onclick = function(){
  modal.style.display = "block";
  modalImg.src = this.src;
  captionText.innerHTML = this.alt;
}
img3.onclick = function(){
  modal.style.display = "block";
  modalImg.src = this.src;
  captionText.innerHTML = this.alt;
}

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
  modal.style.display = "none";
}

/*-------------------------- Fixed Backgound Image ------------------------*/
