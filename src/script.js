const linkContainer = document.getElementById("link-container");
const links = linkContainer.getElementsByClassName("link-btn");
for (let i = 0; i < links.length; i++) {
  links[i].addEventListener("click", function () {
    const current = document.getElementsByClassName("link-active");
    console.log(current);

    if (current.length > 0) {
      current[0].classList.remove("link-active");
    }
    this.classList.add("link-active");
  });
}

const modal = document.getElementById("modal");
const openBtn = document.getElementById("open-btn");
const closeBtn = document.getElementById("close-btn");

openBtn.addEventListener("click", () => {
  modal.classList.remove("hidden");
  modal.classList.add("fixed");
});

closeBtn.addEventListener("click", () => {
  modal.classList.remove("fixed");
  modal.classList.add("hidden");
});

const mobileLinkContainer = document.getElementById("mobile-link-container");
const mobileLinks =
  mobileLinkContainer.getElementsByClassName("mobile-link-btn");
for (let i = 0; i < mobileLinks.length; i++) {
  mobileLinks[i].addEventListener("click", function () {
    const current = document.getElementsByClassName("mobile-link-active");
    if (current.length > 0) {
      current[0].classList.remove("mobile-link-active");
    }
    this.classList.add("mobile-link-active");
    modal.classList.remove("fixed");
    modal.classList.add("hidden");
  });
}
