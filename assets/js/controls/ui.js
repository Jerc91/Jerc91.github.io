//---------------------------------
// Plugin Control Date
// Depends JTools, Jquery


(function () {
    //---------------------------------
    var j = fnImport(company);
    if (!fnDepenciesTrue(['jQuery', company])) return;

    // properties privates
    //---------------------------------
    var identifier = "lightbox", classOut = "out", classIn = "in", classBg = "bg", classClose = "close";

    
    // Function for hide the Lightbox, ending with an animation
    //---------------------------------
    function fnLightboxFade() {
        var popup = document.getElementById(identifier);
        if (popup) {
            popup.className = classOut;
            setTimeout(function () { popup.className = identifier; activeLightbox = false; }, 1000);
        } // end if
        return false;
    }; // end function
    //---------------------------------

    // Function for show the Lightbox, ending with an animation
    //---------------------------------
    function fnLightboxShow(fnAdd) {
        activeLightbox = true;
        (document.getElementById(identifier)).className = classIn;
        if (j.tools.fnIsFunction(fnAdd)) fnAdd();
    } // end function
    //---------------------------------

    // Start of control
    //---------------------------------
    function fnInit(fnAdd) {
        var popup = document.getElementById(identifier);
        // Se agrega la función de ocultar el lightbox al botón x
        popup.getElementsByClassName(classBg)[0].addEventListener('click', function () { lightboxFade(); });
        // Se agrega la función de ocultar el lightbox al botón x
        popup.getElementsByClassName(classClose)[0].addEventListener('click', function () { lightboxFade(); });
        // Cuando se presione ecs y el lighbox este activo este se ocultara
        $("body").keydown(function (e) {
            if (e.keyCode == 27 && activeLightbox) {
                lightboxFade();
            } // end if
        }); // key down
        if (j.tools.fnIsFunction(fnAdd)) fnAdd();
    } // end function
    //---------------------------------

    //---------------------------------
    // Public APi
    this.activeLightbox = false;
    this.fnLightboxFade = fnLightboxFade;
    this.fnLightboxShow = fnLightboxShow;
    this.fnInit = fnInit;
}).apply(j.fnAddNS("ui"));
$.extend(j.ui, { Author: 'Julian Ruiz', Created: '2014-01-27', Page: 'http://jerc91.github.io/', Title: 'User Interface' });