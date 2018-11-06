window.addEventListener("resize", tamApp);

const app = document.getElementsByClassName('app')[0];
const dash = document.getElementsByClassName('dash')[0];
const header = document.getElementsByClassName('headerbar')[0];

tamApp();

function tamApp() {
    var tamHTML = $(document).width();
    var tamDash = $('.dash').width();
    var tamApp = $('.app').width();
    var tam = (tamHTML - tamDash) + ".px";
    app.style.width = tam;
    header.style.width = tam;
    var tamApp = $('.app').width();
}