// sticky header
window.onscroll = function() {
    stickyHeader()
};

const header = document.getElementById('nav-bar');
const sticky = header.offsetTop;

function stickyHeader() {
    if (window.scrollY > sticky) {
        header.classList.add('sticky')
    } else {
        header.classList.remove('sticky')
    }
};


// scroll to top
const scrollback = document.getElementById('scrollback');
scrollback.addEventListener('click', (e) => {
    e.preventDefault();
    window.scrollTo({ top: 0, behavior: 'smooth' })
});