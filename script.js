document.addEventListener("DOMContentLoaded", init);
("use strict");

let headerText;

function init() {
  animateHeader();
  changeThemes();
}

function animateHeader() {
  headerText = document.querySelector(".header_text");

  let opacityKeyframes = [
    {
      opacity: 0,
    },
    {
      offset: 0.5,
      opacity: 1,
    },
  ];

  let animation = headerText.animate(opacityKeyframes, {
    duration: 2000,
  });
}

function changeThemes() {
    let theme = localStorage.getItem('data-theme');
    const changeThemeToDark = () => {
        document.documentElement.setAttribute("data-theme", "dark") // set theme to dark
        localStorage.setItem("data-theme", "dark") // save theme to local storage
    }
    
    const changeThemeToLight = () => {
        document.documentElement.setAttribute("data-theme", "light") // set theme light
        localStorage.setItem("data-theme", 'light') // save theme to local storage
    }

    // Get the element based on ID
const checkbox = document.getElementById("switch");
// Apply retrived them to the website
checkbox.addEventListener('change', () => {
    let theme = localStorage.getItem('data-theme'); // Retrieve saved them from local storage
    if (theme ==='dark'){
        changeThemeToLight()
    }else{
        changeThemeToDark()
    }   
});
}
