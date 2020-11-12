var button = document.querySelector(".toggle"),
    header = document.querySelector(".header"),
    u_list = document.querySelector(".u-list");

button.onclick = function() {
    "use strict";
    button.classList.toggle("active");
    header.classList.toggle("active");
    u_list.classList.toggle("active");
}

var video_clicker = document.querySelector(".video-clicker"),
    video = document.querySelector(".video-player");

video_clicker.onclick = function() {
    "use strict";
    video.autoplay = true;
    video.load();
    video_clicker.style.display = "none";
}
video.onclick = function() {
    "use strict";
    video.autoplay = false;
    video.load();
    video_clicker.style.display = "inline-block";
}

// Start Slider Box
let slideBox = Array.from(document.querySelectorAll(".content .box"));

let slideCount  = slideBox.length;

let curren_index = 1;

let ulElement = document.createElement("ul");

ulElement.setAttribute("id", "ul-list");

for(var i = 1; i <= slideCount; i++) {

    var list_item = document.createElement("li");

    list_item.setAttribute("data-index", i);

    ulElement.appendChild(list_item);

}

document.getElementById("nav-box").appendChild(ulElement);

let bullets = Array.from(document.querySelectorAll("#ul-list li"));

let pagenation_Ul = document.getElementById("ul-list");

for(var i = 0; i < bullets.length; i++) {

    bullets[i].onclick = function() {

        curren_index = parseInt(this.getAttribute("data-index"));

        checking();

    }
}

checking();

function checking() {
    
    removeActive()

    slideBox[curren_index - 1].classList.add("active");

    bullets[curren_index - 1].classList.add("active");

    function removeActive() {

        slideBox.forEach(function(box) {
            box.classList.remove("active");
        })

        bullets.forEach(function(item) {
            item.classList.remove("active");
        })
    }

}