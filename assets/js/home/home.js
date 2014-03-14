// Object with tools
var j = window.j || fnImport("j");

// Funcion que carga todos los datos de la página
function LoadData() {
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
$(document).ready(function () {
    LoadData();
    // Scroll
    $("#content").onepage_scroll({ sectionContainer: 'section', easing: 'ease', animationTime: 1000, pagination: true, updateURL: false, loop: false, menus: ".menu" });
    // setTimeout(function () {$(".fa-table").click()}, 500);

    // Config for pipeline
    var configPipeline = {
        "actionLink": "#",
        "animations": true,
        "backGradients": ["#2d4862", "#00aced"],
        "changeColorsFont": true,
        "changeColorsPanel": true,
        'classPanel': ".panel",
        "classPipeline": ".pipeline",
        "idContent": "#contentPipeline",
        "colorsFont": ["#fff", "#fff", "#fff", "#fff", "#fff", "#444", "#444", "#444"],
        "colorsPanel": ["#01abc4", "#04b7d1", "#04c7e3", "#01d4f3", "#15e1ff", "#bcd8ff", "#ddebff", "#eef5ff"],
        "firtsHeight": 330,
        "fontGradients": ["#ffffff", "#ffffff"],
        "heightButtons": 50,
        "leftToRight" : true,
        "list":
            [
                { "Total": "364", "Id": "#", "Name": "January" },
                { "Total": "333", "Id": "#", "Name": "Febrary" },
                { "Total": "305", "Id": "#", "Name": "March" },
                { "Total": "274", "Id": "#", "Name": "April" },
                { "Total": "244", "Id": "#", "Name": "May" },
                { "Total": "213", "Id": "#", "Name": "June" },
                { "Total": "183", "Id": "#", "Name": "July" },
                { "Total": "152", "Id": "#", "Name": "Augost" }
            ],
        "maxElementsShow": 4,
        "rotateY": 16,
        "showButtons": true,
        "width": 880,
        "widthButtons": 50
    };
    // Creation of HTML

    // implementación del hilo
    j.tools.fnThread({ 
        Data: { "list" : configPipeline.list }, 
        Template: $("#templatePipeline").html(),
        WorkerJs: "assets/js/workers/worker.js",
        Success: function (e) {
            $("#contentPipeline").html(e.data);
            j.pipeline.fnInit(configPipeline);
            // Init ui controls
            j.ui.fnInit(function () { $("a[data-lb='true']").click(j.ui.fnLightboxShow).attr("href", "javascript:void(0);"); });
        } // end function success 
    }); // end function thread

    // Init control date
    j.controlDate.fnInit('anio', 'mes', 'dia');
    
}); // end function ready