let lis = document.querySelectorAll("ul li");
let like = document.querySelector(".like");
// check if there is something in local Storage
if (window.localStorage.getItem("color") && window.localStorage.getItem("pic")) {
    // if there's something
    document.body.style.backgroundColor = window.localStorage.getItem("color")
    document.images[1].src = `images/p${window.localStorage.getItem("pic")}.jpg`
} else {
    // there is nothing in local Storage
}

like.onclick = function() {
    like.classList.toggle("red")
}

lis.forEach(li => {
    li.addEventListener("click", e => {
        // Puch color and index pic in local strange
        window.localStorage.setItem("color", li.getAttribute("color-src"))
        window.localStorage.setItem("pic", li.classList[0])
            // change color and pic 
        document.body.style.backgroundColor = window.localStorage.getItem("color")
        document.images[1].src = `images/p${window.localStorage.getItem("pic")}.jpg`
    })
});