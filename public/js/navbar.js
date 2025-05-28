/** @format */

const hamburger = document.getElementById("hamburger");
const mobileMenu = document.getElementById("mobile-menu");
const mainContent = document.querySelector("main");
const mobileContactBtn = document.getElementById("mobile-contact-btn");

hamburger.addEventListener("click", () => {
  mobileMenu.classList.toggle("hidden");
  if (mobileContactBtn) mobileContactBtn.classList.toggle("hidden");

  changeMenuState();
});

// Close menu when clicking outside
mainContent.addEventListener("click", () => {
  if (!mobileMenu.classList.contains("hidden")) {
    mobileMenu.classList.add("hidden");
    if (mobileContactBtn && !mobileContactBtn.classList.contains("hidden")) {
      mobileContactBtn.classList.add("hidden");
    }
    if (hamburger.classList.contains("active")) {
      hamburger.classList.remove("active");
    }
  }
});

// Close menu when clicking a link
document.querySelectorAll("#mobile-menu li a").forEach((link) => {
  link.addEventListener("click", () => {
    if (!mobileMenu.classList.contains("hidden")) {
      mobileMenu.classList.add("hidden");
    }
    if (mobileContactBtn && !mobileContactBtn.classList.contains("hidden")) {
      mobileContactBtn.classList.add("hidden");
    }
    if (hamburger.classList.contains("active")) {
      hamburger.classList.remove("active");
    }
  });
});

// Handle Submenu Toggle (e.g., Home)
const mobileHomeBtn = document.getElementById("mobile-home-btn");
const mobileMegaMenu = document.getElementById("mobile-mega-menu");

if (mobileHomeBtn && mobileMegaMenu) {
  mobileHomeBtn.addEventListener("click", (e) => {
    e.stopPropagation(); // Prevent closing the whole menu
    mobileMegaMenu.classList.toggle("hidden");
  });
}

// Highlight current page links
document.querySelectorAll("a[href]").forEach((link) => {
  const href = link.getAttribute("href");

  if (
    window.location.pathname.endsWith(href) ||
    window.location.pathname.endsWith(href + ".html")
  ) {
    link.classList.add("active");
  }
});

function changeMenuState() {
  hamburger.classList.toggle("active");
}

mainContent.addEventListener("click", () => {
  if (!mobileMenu.classList.contains("hidden")) {
    mobileMenu.classList.add("hidden");
    if (mobileContactBtn && !mobileContactBtn.classList.contains("hidden")) {
      mobileContactBtn.classList.add("hidden");
    }

    // Also hide the submenu
    if (mobileMegaMenu && !mobileMegaMenu.classList.contains("hidden")) {
      mobileMegaMenu.classList.add("hidden");
    }

    if (hamburger.classList.contains("active")) {
      hamburger.classList.remove("active");
    }
  }
});
