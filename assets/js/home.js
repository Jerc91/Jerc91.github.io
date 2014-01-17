// Funcion que carga todos los datos de la página
function LoadData() {
    // Se cargan los paises desde un txt
    $.ajax({
        async: true,
        type: "GET",
        contentType: "text/plain; charset=utf-8",
        dataType: "json",
        url: "services/file/paises.txt",
        success: function (data) {
            if (data) j().FillDataSelect(data, 'nacionalidad');
        } // end success
    }); // end ajax
} // end function
// función de inicio
$(document).ready(function () {
     // Se inician los componentes del j()
    jTools().Init();
    jTools().ControlDate('anio', 'mes', 'dia').init();
    LoadData();
    // Scroll
    $("#content").onepage_scroll({ sectionContainer: 'section', easing: 'ease', animationTime: 1000, pagination: true, updateURL: false, loop: false, menus: ".menu" });
    
    setTimeout(function () {$(".fa-globe").click()}, 500);

    var j = window.j || fnImport("j");
    // Config for pipeline
    var configPipeline = {
        "actionLink": "#",
        "animations": true,
        "backGradients": ["#2d4862", "#00aced"],
        "changeColorsFont": true,
        "changeColorsPanel": true,
        'classPanel': ".panel",
        "classPipeline": ".pipeline",
        "classContent": ".contentPipeline",
        "colorsFont": ["#fff", "#fff", "#fff", "#fff", "#fff", "#444", "#444", "#444"],
        "colorsPanel": ["#01abc4", "#04b7d1", "#04c7e3", "#01d4f3", "#15e1ff", "#bcd8ff", "#ddebff", "#eef5ff"],
        "firtsHeight": 330,
        "fontGradients": ["#ffffff", "#ffffff"],
        "heightButtons": 50,
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
    // Creation of   HTML
    var template = Hogan.compile($("#templatePipeline").html());
    $("#contentPipeline").html(template.render(configPipeline));
    j.pipeline.fnInit(configPipeline);  


    $("a[data-lb='true']").click(function () {jTools().LightboxShow()}).attr("href","javascript:void()");
}); // end function ready