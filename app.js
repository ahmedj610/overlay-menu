// Goal: to make this pixel perfect when I'm expert enough! ~ 20/08/22, Saturday

const main = document.querySelector(".click");
const content = document.querySelector(".hidden");

main.addEventListener("click", function() {
    // content.classList.add('shown');
    // content.classList.remove('hidden');
    if(content.classList.contains('hidden')) {
        content.classList.add('shown');
        content.classList.remove('hidden');
        document.querySelector(".overlay-content div ul li i").classList.add('rotate');
    } else if (content.classList.contains('shown')) {
        content.classList.add('hidden');
        content.classList.remove('shown');
        document.querySelector(".overlay-content div ul li i").classList.remove('rotate')
    }
})


const menuBtn = document.querySelector(".wrap");
menuBtn.addEventListener("click", function() {
    document.querySelector(".wrap .menu-toggle").classList.toggle("activated");
    document.querySelector(".wrap .menu-toggle").setAttribute("aria-expanded", "true");
    document.querySelector(".wrap .menu-toggle").setAttribute("aria-pressed", "true");

    menuBtn.addEventListener("click", function() {
        document.querySelector(".wrap .menu-toggle").setAttribute("aria-expanded", "false");
        document.querySelector(".wrap .menu-toggle").setAttribute("aria-pressed", "false");
    })

    
    // document.querySelector(".overlay-content").classList.toggle("overlay-content--hidden");
    // document.querySelector(".overlay-content").classList.toggle("overlay-content");
})




// menuBtn.addEventListener("click", function() {
//         const div = document.querySelector(".overlay-content");
//         if (div.style.display !== 'none') {
//             div.style.display = 'none';
//         }
//         else {
//             div.style.display = '';
//         }
//     })

// console.log(menuBtn.getAttribute("aria-expanded") === "true");

function openNav() {
    // document.querySelector(".overlay-content").style.width = "100%";
    document.querySelector(".overlay-content--hidden").classList.toggle("overlay-content");
}

function closeNav() {
    // document.querySelector(".overlay-content").style.width = "0";
    
    document.querySelector(".overlay-content--hidden").classList.toggle("overlay-content--hidden");
}

