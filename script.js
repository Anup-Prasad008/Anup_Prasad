/* MENU OPEN WITH TOP SCROLL + DELAY */
function openMenu() {
  window.scrollTo({ top: 0, behavior: "smooth" });

  setTimeout(() => {
    document.getElementById("slideMenu").classList.add("open");
    document.getElementById("menuBackdrop").classList.add("open");
  }, 400);
}

function closeMenu() {
  document.getElementById("slideMenu").classList.remove("open");
  document.getElementById("menuBackdrop").classList.remove("open");
}

/* HANDLE MENU LINK CLICK WITH SCROLL */
function handleMenuClick(targetId) {
  // Close menu first
  closeMenu();

  // Scroll page to top smoothly
  window.scrollTo({ top: 0, behavior: "smooth" });

  // After short delay, scroll down to target
  setTimeout(() => {
    const target = document.querySelector(targetId);
    if (target) {
      const offset = 60; // adjust as needed
      const topPos = target.offsetTop - offset;
      window.scrollTo({ top: topPos, behavior: "smooth" });

      // Optional: reopen menu after scroll
      setTimeout(() => {
        document.getElementById("slideMenu").classList.add("open");
      }, 400);
    }
  }, 400);
}

/* SCROLL BUTTONS */
function goToProjects() {
  const y = document.getElementById("projects").offsetTop - 60;
  window.scrollTo({ top: y, behavior: "smooth" });
}

function goToContact() {
  const y = document.getElementById("contact").offsetTop - 60;
  window.scrollTo({ top: y, behavior: "smooth" });
}

/* PROJECT TOGGLE */
function toggleProject(e) {
  e.stopPropagation();
  document.getElementById("projectMore").style.display = "block";
  document.getElementById("projectShort").style.display = "none";
  document.getElementById("viewMoreSpan").style.display = "none";
}

document.addEventListener("click", () => {
  document.getElementById("projectMore").style.display = "none";
  document.getElementById("projectShort").style.display = "block";
  document.getElementById("viewMoreSpan").style.display = "inline";
});

/* GITHUB */
function openProject(e) {
  e.stopPropagation();
  window.open("https://github.com/AloneHacker-008/Bunny-AI", "_blank");
}

/* TYPEWRITER */
const texts = ["Ethical Hacker", "Python Developer", "Cybersecurity Learner"];
let i = 0, j = 0;
const el = document.getElementById("typing");

function type() {
  if (j < texts[i].length) {
    el.textContent += texts[i][j++];
    setTimeout(type, 80);
  } else {
    setTimeout(erase, 1000);
  }
}

function erase() {
  if (j > 0) {
    el.textContent = texts[i].substring(0, --j);
    setTimeout(erase, 50);
  } else {
    i = (i + 1) % texts.length;
    setTimeout(type, 300);
  }
}

type();

/* CONTACT FORM AJAX SUBMISSION FOR FORMSPREE */
document.getElementById('contactForm').addEventListener('submit', function(e) {
  e.preventDefault(); // Prevent default form submission (no redirect)

  const form = e.target;
  const submitBtn = document.getElementById('submitBtn');
  const originalText = submitBtn.textContent;

  // Disable button and show loading
  submitBtn.disabled = true;
  submitBtn.textContent = 'Sending...';

  // Prepare form data
  const formData = new FormData(form);

  // Submit via AJAX to Formspree
  fetch(form.action, {
    method: 'POST',
    body: formData,
    headers: {
      'Accept': 'application/json'
    }
  })
  .then(response => {
    if (response.ok) {
      // Success: Reset form and show custom message
      form.reset();
      alert('Message sent successfully! Thank you for contacting me.');
      submitBtn.textContent = originalText;
      submitBtn.disabled = false;
    } else {
      // Error: Show error message
      alert('Oops!
