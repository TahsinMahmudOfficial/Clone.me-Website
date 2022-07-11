const header = document.getElementById('header')
const navbar = document.querySelector('.navbar')
const display = document.querySelector('.dis_container')

const observer = new IntersectionObserver(
    (entries) =>{
    const ent = entries[0]
    console.log(ent);
    // ent.isIntersecting === false ? document.body.classList.add('fixed_nav') : document.body.classList.remove('fixed_nav')
    if(ent.isIntersecting === false){
        document.body.classList.add('fixed_nav')
        
        // if(window.scrollY >= 250){
        //     header.style.clipPath = "none"
        // }else{header.style.clipPath = "polygon(100% 0%, 100% 94%, 74% 100%, 0 95%, 0 0)"}

    }else{document.body.classList.remove('fixed_nav')}
}, {
    root: null,
    rootMargin: "-310px",
    threshold: 0,
})

observer.observe(display)




const mobile_nav_btns = document.querySelector('.mobile_nav_btns');
const nav_header = document.querySelector('.nav_all_items');
const navLinks = document.querySelector('.navLinks');


const toogleNavbar = () =>{
    nav_header.classList.toggle('active')
    navLinks.classList.toggle('mobile_view')

};

mobile_nav_btns.addEventListener('click', () => toogleNavbar());





// var maxWidth980 = window.matchMedia("(max-width: 980px)");

// // window.addEventListener("resize", function() {
// //     if (window.innerWidth < 980) document.body.classList.remove("fixed_nav");
// //   });

// function match(){
//     maxWidth980 ? document.body.classList.remove('fixed_nav') : document.body.classList.add('fixed_nav')
// }


