function tamApp() {
    let app = document.getElementsByClassName('app')[0];
    let dash = document.getElementsByClassName('dash')[0];
    let header = document.getElementsByClassName('headerbar')[0];

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

setInterval(tamApp, 200);

tamApp();

header.addEventListener("load", tamApp);
document.addEventListener("resize", tamApp);
window.addEventListener("resize", tamApp);
window.addEventListener("load", tamApp);