let resumeIcon = document.querySelector(".resumeIcon");

resumeIcon.addEventListener("mouseover", function () {
    resumeIcon.style.color = "#007bff";
})

resumeIcon.addEventListener("mouseout", function () {
    resumeIcon.style.color = "black";
})

let icons = document.querySelectorAll(".icons");
console.log(icons);

for(let i = 0; i < icons.length; i++){
    icons[i].addEventListener("mouseover", function () {
        icons[i].style.color = "#16823c";
    })
    icons[i].addEventListener("mouseout", function () {
        icons[i].style.color = "black";
    })
}

let socialMediaLinks = document.querySelectorAll(".socialmedialinks");
for(let i = 0; i < socialMediaLinks.length; i++){
    socialMediaLinks[i].addEventListener("mouseover", function () {
        socialMediaLinks[i].style.color = "red";
    })
    socialMediaLinks[i].addEventListener("mouseout", function () {
        socialMediaLinks[i].style.color = "white";
    })
}