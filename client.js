// sticky header
window.onscroll = function () {
  stickyHeader();
};

const header = document.getElementById("nav-bar");
const sticky = header.offsetTop;

function stickyHeader() {
  if (window.scrollY > sticky) {
    header.classList.add("sticky");
  } else {
    header.classList.remove("sticky");
  }
}

// scroll to top
const scrollback = document.getElementById("scrollback");
scrollback.addEventListener("click", (e) => {
  e.preventDefault();
  window.scrollTo({ top: 0, behavior: "smooth" });
});

// footer
function loadFooter() {
  scrollback.classList.add("stack");
  scrollback.innerHTML = `
        <img style="height: 20px; padding-top: 20px;" src="https://live.staticflickr.com/65535/53280889465_fd6314f3d7_o.png">
        <div class="footer-text">Go Back Up</div>
    `;
}

// header
function loadHeader() {
  const navbar = document.getElementById("nav-bar");
  navbar.innerHTML = `
        <a href="../index.html">
            <div class="nav-name" id="name">Sophia Fortier</div>
        </a>
        <div class="icons">
            <div><a href="https://github.com/sfortier32" target="_blank" class="fa fa-2x fa-github icon"></a></div>
            <div><a href="https://linkedin.com/in/sophiagfortier" target="_blank" class="fa fa-2x fa-linkedin icon"></a></div>
            <div><a href="mailto:sopfor02@me.com" target="_blank" class="fa fa-2x fa-envelope icon"></a></div>
        </div>
    `;
}

window.addEventListener("load", (e) => {
  loadHeader();
  loadFooter();
});
