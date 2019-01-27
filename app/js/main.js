$(document).ready(function() {
   
    window.addEventListener("scroll", () => {
        {
            // when user scrolls  add animation to navbar
            let navbar = document.querySelector(".navbar");
            if (window.scrollY >= 100) {
                navbar.classList.add("navbarbg");
                navbar.classList.remove("removeNavbarBg");
            }
            else {
                navbar.classList.remove("navbarbg");
                navbar.classList.add("removeNavbarBg");
            }
        }
    });

    // Remove class container and container-fluid to nav when site  is in tablet tablet view
    $(window).resize(function(){
        if ($(window).width() <= 1024){ 
            $(".navbar .container")
              .addClass("container-fluid")
              .removeClass("container");
        }
        else{ 
            $(".navbar .container-fluid")
              .removeClass("container-fluid")
              .addClass("container");;
        } 
    });

})