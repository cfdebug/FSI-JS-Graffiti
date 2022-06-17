
// Select some elements...
let header = document.querySelector("#page-header");
header.style.textAlign = "left";

let dogimages = document.querySelectorAll(".dog-image");
for(i=0;i<dogimages.length;i++){
    dogimages[i].style.borderRadius = "50px";
    dogimages[i].style.transform = "rotate(180deg)";
};

let dognames = document.querySelectorAll(".dog-name");
for(x=0;x<dognames.length;x++){
    dognames[x].style.textAlign = "left";
};

let foottxt = document.querySelector(".footer");
foottxt.style.color = 'red';
foottxt.style.borderStyle = "solid";