import './style.css'

'use strict';

const ThemeSwitcherDesktop = document.createElement("button");
ThemeSwitcherDesktop.setAttribute("id", "ThemeSwitcherDesktop");
ThemeSwitcherDesktop.innerText = "Toggle Theme";

const ThemeSwitcherPhone = document.createElement("button");
ThemeSwitcherPhone.setAttribute("id", "ThemeSwitcherPhone");
ThemeSwitcherPhone.innerText = "Toggle Theme";


const html = document.documentElement;
document.getElementById("switcher-desktop").appendChild(ThemeSwitcherDesktop);

document.getElementById("ThemeSwitcherDesktop").addEventListener( "click", ()=>{
    html.classList.toggle("dark")
});

document.getElementById("switcher-phone").appendChild(ThemeSwitcherPhone);

document.getElementById("ThemeSwitcherPhone").addEventListener( "click", ()=>{
    html.classList.toggle("dark")
});

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

