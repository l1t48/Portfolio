'use strict';
import './style.css';
import 'animate.css';


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
    links.forEach(l => l.classList.remove('text-[var(--color-text-theme-switcher-hover)]', 'bg-[var(--color-bg-theme-switcher-hover)]', 'bold'));
    link.classList.add('text-[var(--color-text-theme-switcher-hover)]', 'bg-[var(--color-bg-theme-switcher-hover)]', 'bold');

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

const content_container_about = document.getElementById("content-container-about");
const Education = document.getElementById("Education");
const Strengths_Experience = document.getElementById("Strengths_Experience");
const CareerGoals = document.getElementById("CareerGoals");

Education.addEventListener("click", () => {
  const buttons = document.querySelectorAll("#Education, #CareerGoals, #Strengths_Experience");

  buttons.forEach(button => {
    button.classList.remove('bg-[var(--color-primary)]', 'text-[var(--color-text)]', 'bold') // Replace "active" with your class name
  });

  content_container_about.innerHTML = ` 
    <div class="animate__animated animate__fadeIn animate__slower">
      <h1 class="text-lg text-[var(--color-card-title-text)] border-b-1 border-gray-300">Education</h1>
      <div class="mt-3">
        <p class="text-lg">Karlstad University, Karlstad - B.Sc. in Computer Science</p>
        <p class="text-sm text-[var(--color-card-text-content)] italic mt-2">Aug 2022 – June 2025 (completed; pending final statistics/math exam)</p>
      </div>

      <br>

      <div>
        <p class="text-lg">NTI High School, Karlstad - Information and Media Technology specialization</p>
        <p class="text-sm text-[var(--color-card-text-content)] italic mt-2">Aug 2019 – June 2022</p>
      </div>
    </div>
    `
  Education.classList.add('bg-[var(--color-primary)]', 'text-[var(--color-text)]', 'bold')
});

Strengths_Experience.addEventListener("click", () => {

  const buttons = document.querySelectorAll("#Education, #CareerGoals, #Strengths_Experience");

  buttons.forEach(button => { 
    button.classList.remove('bg-[var(--color-primary)]', 'text-[var(--color-text)]', 'bold') // Replace "active" with your class name
  });

  content_container_about.innerHTML = ` 
  <div class="animate__animated animate__fadeIn animate__slower">
    <h1 class="text-lg text-[var(--color-card-title-text)] border-b-1 border-gray-300">Strengths / Experience</h1> 
    <ul class="list-disc list-inside text-[var(--color-card-text-content)] mt-5">
      <li class="mt-1">6+ years programming in various programming languages</li>
      <li class="mt-1">Full-stack web development</li>
      <li class="mt-1">Desktop applications & GUI development (Windows Forms, .NET)</li>
      <li class="mt-1">System-level programming & file handling (C, Java)</li>
      <li class="mt-1">Networking fundamentals & cybersecurity basics</li>
      <li class="mt-1">Penetration testing & vulnerability assessment (hobbyist/prototyping)</li>
      <li class="mt-1">Digital forensics foundations</li>
      <li class="mt-1">API integration & automation (REST, XML/JSON)</li>
      <li class="mt-1">Cloud & database experience (Firebase, MongoDB, phpMyAdmin (MySQL))</li>
      <li class="mt-1">Manual and automated testing (unit, integration, end-to-end)</li>
      <li class="mt-1">Machine learning fundamentals & applied experimentation</li>
      <li class="mt-1">User testing, prototyping, and evaluation</li>
      <li class="mt-1">Software engineering principles & best practices</li>
      <li class="mt-1">Data ethics knowledge</li>
      <li class="mt-1">Data structures and algorithms</li>
      <li class="mt-1">Operating systems fundamentals</li>
      <li class="mt-1">Graphical user interfaces (GUI) development</li>
      <li class="mt-1">General project management methodologies (Agile and traditional)</li>
      <li class="mt-1">Discrete mathematics</li>
    </ul>
</div>
    `

  Strengths_Experience.classList.add('bg-[var(--color-primary)]', 'text-[var(--color-text)]', 'bold')
});

CareerGoals.addEventListener("click", () => {

  const buttons = document.querySelectorAll("#Education, #CareerGoals, #Strengths_Experience");

  buttons.forEach(button => {
    button.classList.remove('bg-[var(--color-primary)]', 'text-[var(--color-text)]', 'bold') // Replace "active" with your class name
  });
  content_container_about.innerHTML = `
  <div class="animate__animated animate__fadeIn animate__slower">
      <h1 class="text-lg text-[var(--color-card-title-text)] border-b-1 border-gray-300">Career Goals</h1>
      <h2 class="mt-3 text-[var(--color-card-secondry-title)]">After my graduation, I am committed to building a strong foundation for my professional journey by focusing on
        both practical industry experience and continued learning. My goals include:</h2>
      <ol class="list-decimal list-inside text-[var(--color-card-text-content)] ml-5 mt-5">
        <li class="mt-1">Begin my career at a startup or innovative company where I can apply my skills in software development and gain real-world project experience.</li>
        <li class="mt-1">Pursue specialized courses in cybersecurity to deepen my knowledge in areas such as penetration testing, digital forensics, and network security.</li>
        <li class="mt-1">Advance my academic background with a Master’s degree in Cybersecurity, strengthening both my theoretical and practical expertise.</li>
        <li class="mt-1">Continue self-learning by dedicating free time to exploring advanced topics in cybersecurity, programming languages, and system design.</li>
        <li class="mt-1">Enhance my knowledge in software engineering by keeping up-to-date with modern tools, frameworks, and methodologies.</li>
        <li class="mt-1">Develop a strong understanding of hardware management and system maintenance, ensuring a well-rounded technical profile.</li>
        <li class="mt-1">Build personal projects and contribute to open-source communities to practice, collaborate, and share knowledge with other professionals.</li>
      </ol>
  </div>
    `

  CareerGoals.classList.add('bg-[var(--color-primary)]', 'text-[var(--color-text)]', 'bold')
});

const animatedElements = document.querySelectorAll('.animate-on-scroll');

const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('animate__animated', 'animate__fadeInUpBig');
      observer.unobserve(entry.target); // optional: animate only once
    }
  });
}, {
  threshold: 0.2 // trigger when 20% of element is visible
});

animatedElements.forEach(el => observer.observe(el));



// Select all nav links
const navLinks = document.querySelectorAll(".nav-link");

// Select all sections based on href targets
const sections = Array.from(navLinks).map(link => {
  const id = link.getAttribute("href").slice(1); // remove the #
  return document.getElementById(id);
});

// Scroll event
window.addEventListener("scroll", () => {
  let currentId = "";

  sections.forEach(section => {
    const rect = section.getBoundingClientRect();
    const sectionTop = rect.top;
    const sectionBottom = rect.bottom;

    // Check if section is visible in the viewport (adjust threshold if needed)
    if (sectionTop < window.innerHeight / 2 && sectionBottom > window.innerHeight / 2) {
      currentId = section.id;
    }
  });

  // Update nav links
  navLinks.forEach(link => {
    link.classList.remove('text-[var(--color-text-theme-switcher-hover)]', 'bg-[var(--color-bg-theme-switcher-hover)]', 'bold');
    if (link.getAttribute("href").slice(1) === currentId) {
      link.classList.add('text-[var(--color-text-theme-switcher-hover)]', 'bg-[var(--color-bg-theme-switcher-hover)]', 'bold');
    }
  });
});


