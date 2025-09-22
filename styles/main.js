// Nút cuộn lên đầu
const scrollBtn = document.getElementById("scrollTopBtn");

window.onscroll = function () {
  if (document.body.scrollTop > 60 || document.documentElement.scrollTop > 200) {
    scrollBtn.style.display = "block";
  } else {
    scrollBtn.style.display = "none";
  }

  // Progress bar khi cuộn
  let scrollTop = document.documentElement.scrollTop;
  let height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
  let progress = (scrollTop / height) * 100;
  document.getElementById("progressBar").style.width = progress + "%";
};

scrollBtn.addEventListener("click", () => {
  window.scrollTo({ top: 0, behavior: "smooth" });
});

// Hiệu ứng fade-in khi cuộn tới section
const sections = document.querySelectorAll(".section");
const fadeInOptions = { threshold: 0.2 };

const fadeInObserver = new IntersectionObserver((entries, fadeInObserver) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add("fade-in");
      fadeInObserver.unobserve(entry.target);
    }
  });
}, fadeInOptions);

sections.forEach(section => {
  section.classList.add("hidden");
  fadeInObserver.observe(section);
});

// Dark/Light Mode Toggle
const themeToggle = document.getElementById("themeToggle");
themeToggle.addEventListener("click", () => {
  document.body.classList.toggle("light-mode");
  themeToggle.textContent = document.body.classList.contains("light-mode") ? "☀️" : "🌙";
});

// Hiệu ứng gõ chữ
const typingText = document.querySelector(".about-text h1");
const text = typingText.textContent;
typingText.textContent = "";
let i = 0;

function typeEffect() {
  if (i < text.length) {
    typingText.textContent += text.charAt(i);
    i++;
    setTimeout(typeEffect, 100);
  }
}
typeEffect();

// Cuộn mượt khi bấm navbar
document.querySelectorAll('.nav-links a, .dropdown-content a').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();
    document.querySelector(this.getAttribute('href')).scrollIntoView({
      behavior: 'smooth'
    });
  });
});

// Form liên hệ giả lập gửi email
const contactForm = document.getElementById("contactForm");
contactForm.addEventListener("submit", (e) => {
  e.preventDefault();
  alert("📩 Cảm ơn bạn đã liên hệ! Mình sẽ phản hồi sớm nhất.");
  contactForm.reset();
});
