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

})