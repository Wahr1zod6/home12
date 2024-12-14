// // function toggleDarkMode(element) {
// //     element.style.backgroundColor = "black";
// //     element.style.color = "white";
// // }

// // function toggleLightMode() {
// //     document.body.style.backgroundColor = "#C4B5A5";
// //     document.body.style.color = "black";
// // }

// const lightBtn = document.querySelector('.nav_btn')


// function toggleDarkMode(element) {
//     element.style.backgroundColor = "black";
//     element.style.color = "white";
//  element.style.backgroundColor === 'black' ? lightBtn.style.backgroundColor = 'gray' : ''
//     const links = document.querySelectorAll("a, .nav_btn, .main_btn, p, h2, h1");
//     links.forEach(link => {
//         link.style.color = "white";
//     });
// }


// function toggleLightMode() {
//     document.body.style.backgroundColor = "#C4B5A5";
//     document.body.style.color = "black";

//     const links = document.querySelectorAll("a, .nav_btn, .main_btn, p, h2, h1");
//     links.forEach(link => {
//         link.style.color = "black";
//     });
// }


// window.onload = function () {
//     const lightModeBtn = document.getElementById("LightMode");
//     const darkModeBtn = document.querySelector("[onclick*='toggleDarkMode']");

//     darkModeBtn.style.border = "1px solid black";
// }

function toggleDarkMode(element) {
    element.style.backgroundColor = "black";
    element.style.color = "white";

    const lightBtn = document.querySelector(".nav_btn#LightMode");
    lightBtn.style.backgroundColor = "gray";

    updateElementsColor("white");
}

function toggleLightMode() {
    document.body.style.backgroundColor = "#C4B5A5";
    document.body.style.color = "black";

    const lightBtn = document.querySelector(".nav_btn#LightMode");
    lightBtn.style.backgroundColor = "#FB982F";

    updateElementsColor("black");
}

function updateElementsColor(color) {
    const elements = document.querySelectorAll("a, .nav_btn, .main_btn, p, h2, h1");
    elements.forEach((el) => {
        el.style.color = color;
    });
}

window.onload = function () {
    const darkModeBtn = document.querySelector("[onclick*='toggleDarkMode']");
};

