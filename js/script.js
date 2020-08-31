$(document).ready(function () {
    $('.owl-carousel').owlCarousel({
        center:true,
        loop: true,
        margin: 10,
        dots:false,
        responsiveClass: true,
        loop:true,
        responsive: {
            0: {
                items: 1,
            },
            768: {
                items: 1,
            },
            1000: {
                items: 4,
            },
        }
    });
});
// var btn = document.querySelector("bbb");
// btn.addEventListener("click",function(){
//     var header = document.getElementById("categories");
//     var btns = header.getElementsByClassName("active1");
//     for (var i = 0; i < btns.length; i++) {
//       btns[i].addEventListener("click", function() {
//       var current = document.getElementsByClassName("activve");
//       if (current.length > 0) { 
//         current[0].className = current[0].className.replace(" activve", "");
//       }
//       this.className += " activve";
//       });
//     }
    
// })


// var b = document.getElementById("bbb");
// b.addEventListener('click',function(){
    var header = document.getElementById("categories");
    var btns = header.getElementsByClassName("active1");
    for (var i = 0; i < btns.length; i++) {
      btns[i].addEventListener("click", function() {
      var current = document.getElementsByClassName("activve");
      if (current.length > 0) { 
        current[0].className = current[0].className.replace(" activve", "");
      }
      this.className += " activve";
      });

    } 