import './style.css'

'use strict';

const html = document.documentElement;

// Desktop elements
const themeBtnDesktop = document.getElementById("ThemeSwitcherDesktop");
const sunDesktop = document.getElementById("sunIconDesktop");
const moonDesktop = document.getElementById("moonIconDesktop");
const iconWrapperDesktop = document.getElementById("iconWrapperDesktop");

// Phone elements
const themeBtnPhone = document.getElementById("ThemeSwitcherPhone");
const sunPhone = document.getElementById("sunIconPhone");
const moonPhone = document.getElementById("moonIconPhone");
const iconWrapperPhone = document.getElementById("iconWrapperPhone");

function toggleTheme(sunIcon, moonIcon, wrapper) {
  html.classList.toggle("dark");

  // Toggle icons
  sunIcon.classList.toggle("hidden");
  moonIcon.classList.toggle("hidden");

  // Toggle slide effect
  if (wrapper.classList.contains("translate-x-0")) {
    wrapper.classList.replace("translate-x-0", "translate-x-2");
  } else {
    wrapper.classList.replace("translate-x-2", "translate-x-0");
  }
}

// Event listeners
themeBtnDesktop.addEventListener("click", () => toggleTheme(sunDesktop, moonDesktop, iconWrapperDesktop));
themeBtnPhone.addEventListener("click", () => toggleTheme(sunPhone, moonPhone, iconWrapperPhone));


const links = document.querySelectorAll("nav a");

links.forEach(link => {
  link.addEventListener("click", (e) => {
    e.preventDefault(); // prevents page reload or jumping
    const target = link.getAttribute("href").slice(1); // e.g., "#section1"
    
    // Show/hide content or scroll to section
    document.getElementById(target)?.scrollIntoView({ behavior: "smooth" });
  });
});

const burgerBtn = document.querySelector('#burgerMenu button');
const sideMenu = document.getElementById('sideMenu');
const overlay = document.getElementById('overlay');
const closeBtn = document.getElementById('closeMenu');

// Open menu on mobile
burgerBtn.addEventListener('click', () => {
  sideMenu.classList.remove('translate-x-full');
  overlay.classList.remove('hidden');
});

// Close menu (overlay or "×" button)
[overlay, closeBtn].forEach(el =>
  el.addEventListener('click', () => {
    sideMenu.classList.add('translate-x-full');
    overlay.classList.add('hidden');
  })
);

