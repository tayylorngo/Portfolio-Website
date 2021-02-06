let navItems = document.querySelectorAll(".navItem");
console.log(navItems);
for(let i = 0; i < navItems.length; i++){
    navItems[i].addEventListener("mouseover", function () {
        navItems[i].style.color = "white";
        navItems[i].style.textDecoration = "underline";
    })
}

for(let i = 0; i < navItems.length; i++){
    navItems[i].addEventListener("mouseout", function () {
        navItems[i].style.color = "black";
        navItems[i].style.textDecoration = "none";
    })
}

