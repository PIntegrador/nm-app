const app = document.getElementsByClassName('app')[0];
const dash = document.getElementsByClassName('dash')[0];
const header = document.getElementsByClassName('headerbar')[0];

function tamApp() {
    console.log("Update header size");
    if (header != null) {
        let tamHTML = $(document).width();
        let tamDash = $('.dash').width();
        let tam = (tamHTML - tamDash) + ".px";
        header.style.width = tam;
    }

    if(app != null){
        let tamHTML = $(document).width();
        let tamDash = $('.dash').width();
        let tam = (tamHTML - tamDash) + ".px";
        app.style.width = tam;
    }
}

tamApp();

header.addEventListener("load", tamApp);
window.addEventListener("resize", tamApp);
window.addEventListener("load", tamApp);