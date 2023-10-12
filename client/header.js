
function loadHeader() {
    const navbar = document.getElementById('nav-bar');
    navbar.innerHTML = `
        <a href="../index.html">
            <div class="nav-name" id="name">Sophia Fortier</div>
        </a>
        <div><a href="https://github.com/sfortier32" target="_blank" class="fa fa-2x fa-github icon"></a></div>
        <div><a href="https://linkedin.com/in/sophiagfortier" target="_blank" class="fa fa-2x fa-linkedin icon"></a></div>
        <div><a href="#email" target="_blank" class="fa fa-2x fa-envelope icon"></a></div>
    `;
};
window.addEventListener("load", loadHeader());