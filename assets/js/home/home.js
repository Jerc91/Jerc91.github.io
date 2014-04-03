$(document).ready(function () { j.home.fnInit(); }); // end function ready

// Object with tools
var j = window.j || fnImport("j");

// Module of home
(function () {
    var textCard;

    // Load text into lightbox
    function fnShowCard() { var lb = document.querySelector('#lightbox .description'); lb.textContent = textCard; }

    // Funcion que carga todos los datos de la página
    function fnLoadData() {
        // Se cargan los paises desde un txt
        $.ajax({
            async: true,
            type: "GET",
            contentType: "text/plain; charset=utf-8",
            dataType: "json",
            url: "services/file/paises.json", 
            success: function (data) {
                if (data) j.tools.fnFillDataSelect(data, 'nacionalidad');
            } // end success
        }); // end ajax
    } // end function
    // función de inicio

    function fnInit() {
        // Load the card
        j.tools.fnThreadURL({
            Data: 'https://www.mcpvirtualbusinesscard.com/VBCServer/jerc/card',
            WorkerJs: 'assets/js/workers/workerUrl.js',
            Success: function (i) { textCard = i.data; console.log(i.data); }
        });

        // Init control date
        j.controlDate.fnInit('anio', 'mes', 'dia');
        // Load countries
        fnLoadData();
        // Init ui controls
        var links = document.querySelectorAll('a[data-lb=true]');
        for(var i = 0; i < links.length; i++) {
            links[i].setAttribute('href','javascript:void(0)');
            links[i].addEventListener("click", fnShowCard, false);
        }
        // Init ui controls
        j.ui.fnInit();
    }

    // Public API
    this.fnInit = fnInit;

}).apply(j.fnAddNS("home"));