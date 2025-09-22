// Nút cuộn lên đầu
const scrollBtn = document.getElementById("scrollTopBtn");

window.onscroll = function () {
  if (document.body.scrollTop > 200 || document.documentElement.scrollTop > 200) {
    scrollBtn.style.display = "block";
  } else {
    scrollBtn.style.display = "none";
  }
};

scrollBtn.addEventListener("click", () => {
  window.scrollTo({ top: 0, behavior: "smooth" });
});

// Hiệu ứng fade-in khi cuộn tới section
const sections = document.querySelectorAll(".section");

const fadeInOptions = {
  threshold: 0.2
};

const fadeInObserver = new IntersectionObserver((entries, fadeInObserver) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add("fade-in");
      fadeInObserver.unobserve(entry.target); // chỉ chạy 1 lần
    }
  });
}, fadeInOptions);

sections.forEach(section => {
  section.classList.add("hidden"); // ban đầu ẩn
  fadeInObserver.observe(section);
});

