//typing animation

var typed = new Typed(".typing",{
    strings:["Web Designer", "Mobile app developer", "CS student"],
    typeSpeed:100,
    backSpeed: 60,
    loop:true
})

var typed = new Typed(".typed",{
    strings:["Web Designer", "Mobile app developer", "CS student"],
    typeSpeed:100,
    backSpeed: 60,
    loop:true
})

var nav = document.getElementById("nav-toggler");
var aside = document.getElementById("aside");

var check = false;
nav.addEventListener('click',()=>{
    if(!check)
       { 
        aside.style.left="0";
        check=true;
       }
    else{
        aside.style.left="-270px";
        check=false;
    }
})


function myFunction(x) {
    if (x.matches) { // If media query matches
      aside.style.left="0";
      check= true;
    } 
  }
  
  var x = window.matchMedia("(min-width: 992px)")
  myFunction(x) // Call listener function at run time
  x.addListener(myFunction) 



  var home =document.getElementById("nav-home");
  var about =document.getElementById("nav-about");
  var services =document.getElementById("nav-services");
  var portfolio =document.getElementById("nav-portfolio");
  var contact =document.getElementById("nav-contact");


  home.onclick = ()=>{
    home.style.color="var(--skin-color)";
    about.style.color= services.style.color = portfolio.style.color = contact.style.color = "var(--text-black-900)";
  }

  about.onclick = ()=>{
    about.style.color="var(--skin-color)";
    home.style.color= services.style.color = portfolio.style.color = contact.style.color = "var(--text-black-900)";
  }

  services.onclick = ()=>{
    services.style.color="var(--skin-color)";
    about.style.color= home.style.color = portfolio.style.color = contact.style.color = "var(--text-black-900)";
  }

  portfolio.onclick = ()=>{
    portfolio.style.color="var(--skin-color)";
    about.style.color= services.style.color = home.style.color = contact.style.color = "var(--text-black-900)";
  }
  contact.onclick = ()=>{
    contact.style.color="var(--skin-color)";
    about.style.color= services.style.color = portfolio.style.color = home.style.color = "var(--text-black-900)";
  }

 

 