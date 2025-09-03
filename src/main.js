'use strict';
import './style.css';
import 'animate.css';


const skills = [
  { category: "Project & Process Management", items: ["Agile methodologies", "Traditional methodologies"] },
  { category: "Programming & Software Engineering", items: ["Object-Oriented Programming (OOP)", "GUI design principles", "API integration", "Front-end & Back-end development"] },
  { category: "Computer Science Fundamentals", items: ["Discrete Mathematics", "CPU and Memory Management", "Operating System Fundamentals", "Data Structures and Algorithms (searching, sorting, pathfinding, optimization)", "Programming language theory", "Networking Fundamentals"] },
  { category: "Testing & Evaluation", items: ["Manual testing", "Automated testing", "Usability testing", "Prototyping", "Evaluation methodologies"] },
  { category: "Machine Learning & AI", items: ["ML fundamentals", "ML programming with Python"] },
  { category: "Cybersecurity Knowledge", items: ["Cybersecurity fundamentals", "Network analysis", "Penetration testing principles"] },
  { category: "Database Design", items: ["Database fundamentals", "Database schema design", "Triggers", "Optimization", "Non-relational databases"] },
  { category: "Other Knowledge Areas", items: ["Data Ethics", "Team collaboration", "Mobile development (Android with Java)"] }
];

const technologies = [
  { category: "Operating Systems & Environments", items: ["Linux", "Kali Linux", "Ubuntu", "Windows"] },
  { category: "Programming Languages", items: ["C", "C# (.NET, Windows Forms, XML, API interaction)", "Java (Android, Windows game development)", "JavaScript (JS)", "PHP", "Python", "Assembly (MIPS)"] },
  { category: "Web Development", items: ["HTML", "CSS", "Bootstrap", "Tailwind", "Node.js", "PHP (with MySQL via phpMyAdmin)", "REST APIs (creation and integration)", "React", "Vue.js"] },
  { category: "Databases & Storage", items: ["MySQL (design, triggers, implementation)", "phpMyAdmin", "NoSQL", "Firebase", "MongoDB"] },
  { category: "Cybersecurity & Networking", items: ["Wireshark", "Nmap", "Burp Suite", "OWASP ZAP", "Ettercap", "Metasploit Framework"] },
  { category: "Development Tools & Version Control", items: ["GitHub", "GitLab"] }
];

function renderList(data) {
  const container = document.getElementById("content-container-skills");
  data.forEach(section => {
    // Add category title
    const title = document.createElement('h3');
    title.textContent = section.category + ":";
    title.classList.add("mt-5");
    title.classList.add("animate__animated");
    title.classList.add("animate__fadeIn");
    title.classList.add("animate__slower");
    container.appendChild(title);

    // Add items
    const ul = document.createElement('ul');
    ul.classList.add("list-disc");
    ul.classList.add("list-inside");
    ul.classList.add("animate__animated");
    ul.classList.add("animate__fadeIn");
    ul.classList.add("animate__slower",  "pl-5", "text-[var(--color-card-title-text)]");
    section.items.forEach(item => {
      const li = document.createElement('li');
      li.classList.add("mt-1");
      li.textContent = item;
      ul.appendChild(li);
    });

    container.appendChild(ul);
  });
}

renderList(technologies);


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
      <li class="mt-3">6+ years programming in various programming languages</li>
      <li class="mt-3">Full-stack web development</li>
      <li class="mt-3">Desktop applications & GUI development (Windows Forms, .NET)</li>
      <li class="mt-3">System-level programming & file handling (C, Java)</li>
      <li class="mt-3">Networking fundamentals & cybersecurity basics</li>
      <li class="mt-3">Penetration testing & vulnerability assessment (hobbyist/prototyping)</li>
      <li class="mt-3">Digital forensics foundations</li>
      <li class="mt-3">API integration & automation (REST, XML/JSON)</li>
      <li class="mt-3">Cloud & database experience (Firebase, MongoDB, phpMyAdmin (MySQL))</li>
      <li class="mt-3">Manual and automated testing (unit, integration, end-to-end)</li>
      <li class="mt-3">Machine learning fundamentals & applied experimentation</li>
      <li class="mt-3">User testing, prototyping, and evaluation</li>
      <li class="mt-3">Software engineering principles & best practices</li>
      <li class="mt-3">Data ethics knowledge</li>
      <li class="mt-3">Data structures and algorithms</li>
      <li class="mt-3">Operating systems fundamentals</li>
      <li class="mt-3">Graphical user interfaces (GUI) development</li>
      <li class="mt-3">General project management methodologies (Agile and traditional)</li>
      <li class="mt-3">Discrete mathematics</li>
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
        <li class="mt-3">Begin my career at a startup or innovative company where I can apply my skills in software development and gain real-world project experience.</li>
        <li class="mt-3">Pursue specialized courses in cybersecurity to deepen my knowledge in areas such as penetration testing, digital forensics, and network security.</li>
        <li class="mt-3">Advance my academic background with a Master’s degree in Cybersecurity, strengthening both my theoretical and practical expertise.</li>
        <li class="mt-3">Continue self-learning by dedicating free time to exploring advanced topics in cybersecurity, programming languages, and system design.</li>
        <li class="mt-3">Enhance my knowledge in software engineering by keeping up-to-date with modern tools, frameworks, and methodologies.</li>
        <li class="mt-3">Develop a strong understanding of hardware management and system maintenance, ensuring a well-rounded technical profile.</li>
        <li class="mt-3">Build personal projects and contribute to open-source communities to practice, collaborate, and share knowledge with other professionals.</li>
      </ol>
  </div>
    `

  CareerGoals.classList.add('bg-[var(--color-primary)]', 'text-[var(--color-text)]', 'bold')
});


const content_container_skills = document.getElementById("content-container-skills");
const Skills = document.getElementById("Skills");
const Technologies = document.getElementById("Technologies");

Skills.addEventListener("click", () => {
  const buttons = document.querySelectorAll("#Skills, #Courses, #Technologies");

  buttons.forEach(button => {
    button.classList.remove('bg-[var(--color-primary)]', 'text-[var(--color-text)]', 'bold') // Replace "active" with your class name
  });

  content_container_skills.innerHTML = ` 
    <div class="animate__animated animate__fadeIn animate__slower">
      <h1 class="text-lg text-[var(--color-card-title-text)] border-b-1 border-gray-300">Skills</h1>
    </div>
    `
  renderList(skills);
  Skills.classList.add('bg-[var(--color-primary)]', 'text-[var(--color-text)]', 'bold')
  console.log("Skills")
});


Technologies.addEventListener("click", () => {

  const buttons = document.querySelectorAll("#Skills, #Courses, #Technologies");

  buttons.forEach(button => {
    button.classList.remove('bg-[var(--color-primary)]', 'text-[var(--color-text)]', 'bold') // Replace "active" with your class name
  });
  content_container_skills.innerHTML = `
  <div class="animate__animated animate__fadeIn animate__slower">
      <h1 class="text-lg text-[var(--color-card-title-text)] border-b-1 border-gray-300">Technologies</h1>
  </div>
    `
  renderList(technologies);

  Technologies.classList.add('bg-[var(--color-primary)]', 'text-[var(--color-text)]', 'bold')
  console.log("Technologies")
});


// const animatedElements = document.querySelectorAll('.animate-on-scroll');

// const observer = new IntersectionObserver(entries => {
//   entries.forEach(entry => {
//     if (entry.isIntersecting) {
//       entry.target.classList.add('animate__animated', 'animate__fadeInUpBig');
//       observer.unobserve(entry.target); // optional: animate only once
//     }
//   });
// }, {
//   threshold: 0.2 // trigger when 20% of element is visible
// });

// animatedElements.forEach(el => observer.observe(el));

// Reusable scroll animation function
function animateOnScroll({ selector, animationClass, threshold = 0.2 } = {}) {
  const animatedElements = document.querySelectorAll(selector);

  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('animate__animated', animationClass);
        observer.unobserve(entry.target); // animate only once
      }
    });
  }, { threshold });

  animatedElements.forEach(el => observer.observe(el));
}

// Use it multiple times for different animations
animateOnScroll({
  selector: '.fade-left',
  animationClass: 'animate__fadeInLeft'
});

animateOnScroll({
  selector: '.fade-in-up-big',
  animationClass: 'animate__fadeInUpBig'
});

animateOnScroll({
  selector: '.fade-right',
  animationClass: 'animate__fadeInRight'
});




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

const bgText = document.querySelector('.background-text');
bgText.innerHTML = bgText.textContent
  .split('')
  .map((char, i) => `<span style="animation-delay:${i * 0.2}s">${char}</span>`)
  .join('');


const lines = document.querySelectorAll('.line');

let activeIndex = -1; // index of the currently active section

function updateDots() {
  const scrollY = window.scrollY;
  const windowHeight = window.innerHeight;

  lines.forEach((line, index) => {
    const dot = line.querySelector('.scroll-dot');
    const rect = line.getBoundingClientRect();
    const height = rect.height;
    const dotHeight = dot.offsetHeight;

    const lineTop = scrollY + rect.top;
    const lineBottom = lineTop + height;

    if (scrollY + windowHeight / 2 >= lineTop && scrollY + windowHeight / 2 <= lineBottom) {
      // This is the current active section
      activeIndex = index;
    }
  });

  lines.forEach((line, index) => {
    const dot = line.querySelector('.scroll-dot');
    const dotHeight = dot.offsetHeight;

    if (index < activeIndex) {
      // Sections before the current one → dot at bottom
      dot.style.top = `${line.offsetHeight - dotHeight}px`;
      dot.style.opacity = '1';
    } else if (index === activeIndex) {
      // Current section → dot moves proportionally
      const rect = line.getBoundingClientRect();
      const height = rect.height;

      let progress = (window.innerHeight - rect.top) / (window.innerHeight + height);
      progress = Math.min(Math.max(progress, 0), 1);

      const targetTop = progress * (height - dotHeight);

      dot.style.top = `${targetTop}px`;
      dot.style.opacity = '1';
    } else {
      // Sections after → dot at top and hidden
      dot.style.top = `0px`;
      dot.style.opacity = '0';
    }
  });
}

window.addEventListener('scroll', updateDots, { passive: true });
window.addEventListener('resize', updateDots);
updateDots();
