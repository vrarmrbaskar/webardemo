$(document).ready(function(){
const hamburger = document.querySelector(".hamburger");
const menu = document.querySelector(".menu");

const navLeft = menu.getBoundingClientRect().left;

hamburger.addEventListener("click", () => {
  if (navLeft < 0) {
    menu.classList.toggle("show");
  }
});

 var prevScrollpos = window.pageYOffset;
 window.onscroll = function () {
   var currentScrollPos = window.pageYOffset;
   if (prevScrollpos > currentScrollPos ) {
     document.getElementById("header").style.top = "0";
   } else {
     document.getElementById("header").style.top = "-80px";
   }
   prevScrollpos = currentScrollPos;
 };



ClickedDot = (count) => {
  SwitchActiveDot(count);
  shoe3D = document.getElementById("3d-dom");
  shoe_img = document.getElementById("shoe-img");
  show_figure = document.getElementById("show-figure");

  arqrcode = document.getElementById("arqrcode");

    // if (count === 1) {
    //   //SWITCH TO 3D
    //   shoe3D.classList.remove("off");
    //   shoe_img.classList.add("off");
    //   show_figure.add("off");
  

        
    // } else {
    //   //SWITCH TO IMAGE
    //   shoe3D.classList.add("off");
    //   shoe_img.classList.remove("off");
    //   show_figure.classList.remove("off");
    // }

    if (count === 1) {
      //SWITCH TO 3D
      console.log(`---- 3D and count value-----${count}`);
      shoe3D.classList.remove("off");
      shoe_img.classList.add("off");
    //  show_figure.classList.add("off");    
      arqrcode.classList.add("off");
    } else if(count === 2) {
      //SWITCH TO IMAGE
      console.log(`---- Image and count value----${count}`);
      shoe3D.classList.add("off");
      arqrcode.classList.add("off");
      shoe_img.classList.remove("off");
    //  show_figure.classList.remove("off");
     
    } else if(count === 3){
      console.log(`---- ARVR code and count value-----${count}`);
      arqrcode.classList.remove("off");
      shoe3D.classList.add("off");
      shoe_img.classList.add("off");
    // show_figure.classList.remove("off");
    }
};

SwitchActiveDot = (count) => {
  //   if (count === 1) {
  //     document.getElementById("dot-1").classList.remove("active");
  //     document.getElementById("dot-2").classList.add("active");
  //     document.getElementById("threedicon").classList.remove("not-active");
  //     document.getElementById("crossicon").classList.remove("not-active");
  //     document.getElementById("header").style.visibility = "hidden";

  // } else {
  //   document.getElementById("header").style.visibility = "visible";
  //     document.getElementById("dot-1").classList.add("active");
  //     document.getElementById("dot-2").classList.remove("active");
  //     document.getElementById("crossicon").classList.add("not-active");
  //     document.getElementById("threedicon").classList.add("not-active");

  //   }
    if (count === 1) {
      console.log('---- 3D -----');
      document.getElementById("dot-1").classList.remove("active");
      document.getElementById("dot-2").classList.add("active");
      document.getElementById("dot-3").classList.remove("active");
      document.getElementById("threedicon").classList.remove("not-active");
      document.getElementById("crossicon").classList.remove("not-active");
      document.getElementById("header").style.visibility = "hidden";

  } else if(count ===2 ) {
    console.log('---- Image -----');
    document.getElementById("header").style.visibility = "visible";
      document.getElementById("dot-1").classList.add("active");
      document.getElementById("dot-2").classList.remove("active");
      document.getElementById("dot-3").classList.remove("active");
      document.getElementById("crossicon").classList.add("not-active");
      document.getElementById("threedicon").classList.add("not-active");

    } else if(count === 3 ){
      console.log('---- AR QR CODE -----');
      document.getElementById("header").style.visibility = "visible";
      document.getElementById("dot-1").classList.remove("active");
      document.getElementById("dot-2").classList.remove("active");
      document.getElementById("dot-3").classList.add("active");
      document.getElementById("crossicon").classList.add("not-active");
      document.getElementById("threedicon").classList.add("not-active");
  
    }

};

// gsap.from(".logo", { opacity: 0, duration: 1, delay: 0.5, y: -10 });
// gsap.from(".hamburger", { opacity: 0, duration: 1, delay: 0.5, y: -10 });
// gsap.from(".cart", { opacity: 0, duration: 1, delay: 1, x: -10 });
// gsap.from(".shoe-figure", { opacity: 0, duration: 1, delay: 1.5, x: -100 });
// gsap.from(".shoe-img", { opacity: 0, duration: 1, delay: 2, y: -50 });
// gsap.from(".dots", { opacity: 0, duration: 1, delay: 2.2, y: 50 });
// gsap.from(".shoe-info", { opacity: 0, duration: 1, delay: 2.5, y: -50 });
// gsap.from(".size", { opacity: 0, duration: 1, delay: 3, x: -100 });
// gsap.from(".count", { opacity: 0, duration: 1, delay: 3, x: 100 });
// gsap.from(".price-title", { opacity: 0, duration: 1, delay: 3.5, y: 50 });
// gsap.from(".price-button", { opacity: 0, duration: 1, delay: 3.5, y: -50 });
// gsap.from(".nav-item", {
//   opacity: 0,
//   duration: 1,
//   delay: 1.2,
//   y: 30,
//   stagger: 0.2,
// });




  // if(window.matchMedia("(max-width: 767px)").matches){
  //     // The viewport is less than 768 pixels wide
  //     alert("This is a mobile device.");
  // } else{
  //     // The viewport is at least 768 pixels wide
  //     alert("This is a tablet or desktop.");
  //   }
    
    // if (window.innerWidth <= 767  && ClickedDot(2)) {
    //   // document.getElementById("header").style.visibility = "hidden";
    //   document.getElementById("header").style.backgroundColor = "green";
      
    // } else {
    //   // document.getElementById("header").style.visibility = "visible";
    //   document.getElementById("header").style.backgroundColor = "red";
      
    // }
});