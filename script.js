/* Menu */
function toggleMenuAndScroll() {
  const menu = document.getElementById("slideMenu");
  const navLinks = document.querySelector('.nav-links');
  menu.classList.toggle("open");
  if (menu.classList.contains("open")) {
    navLinks.style.display = 'none';
    menu.scrollIntoView({ behavior: "smooth" });
  } else {
    navLinks.style.display = 'flex';
  }
}

function closeMenu() {
  const menu = document.getElementById("slideMenu");
  const navLinks = document.querySelector('.nav-links');
  menu.classList.remove("open");
  navLinks.style.display = 'flex';
}

/* Scroll buttons */
function goToProjects() {
  document.getElementById("projects").scrollIntoView({ behavior: "smooth" });
}

function goToContact() {
  document.getElementById("contact").scrollIntoView({ behavior: "smooth" });
}

/* Project overlay and toggle */
function showProjectOverlay() {
  // Optional: Add any additional hover effects if needed
}

function hideProjectOverlay() {
  // Optional: Add any additional hover effects if needed
}

function toggleProject(event) {
  event.stopPropagation();
  const more = document.getElementById("projectMore");
  const background = document.getElementById("projectBackground");
  if (more.style.display === "block") {
    more.style.display = "none";
    background.style.display = "block";
  } else {
    more.style.display = "block";
    background.style.display = "none";
  }
}

/* Prevent card toggle when clicking button */
function openProject(event) {
  event.stopPropagation();
  window.open("https://github.com/AloneHacker-008/Bunny-AI", "_blank");
}

/* Typewriter */
const texts = [
  "Ethical Hacker",
  "Python Developer",
  "Cybersecurity Enthusiast",
  "Open Source Learner"
];

let index = 0;
let char = 0;
const typingEl = document.getElementById("typing");

function typeEffect() {
  if (char < texts[index].length) {
    typingEl.textContent += texts[index].charAt(char);
    char++;
    setTimeout(typeEffect, 80);
  } else {
    setTimeout(eraseEffect, 1400);
  }
}

function eraseEffect() {
  if (char > 0) {
    typingEl.textContent = texts[index].substring(0, char - 1);
    char--;
    setTimeout(eraseEffect, 50);
  } else {
    index = (index + 1) % texts.length;
    setTimeout(typeEffect, 300);
  }
}

typeEffect();
