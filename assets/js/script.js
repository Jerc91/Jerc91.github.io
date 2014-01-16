// Variable para saber en que lenguajes esta hecha la página
var lang = document.getElementsByTagName("html")[0].getAttribute("lang");
// variable para el uso del lightbox
var activeLightbox = false;

// Encuentra un elemento en el Array
Array.prototype.containsPregunta = function (element) {
    for (var i = 0; i < this.length; i++) if (this[i].PK_Pregunta == element) return this[i];
    return null;
} // end method

var ControlCaptcha = function (idImg, idCaptcha, idCOriginal, idCRequeried, idRequeriedCV) {
    // Región para el uso de captcha
    var totalChars = 6;
    var letras = "abcdefghijklmnopqrstuvwxyz1234567890";
    // Control Img
    var imgCaptcha = document.getElementById(imgCaptcha);
    // Id control txtCaptchaOriginal, Id txt Captcha
    function cargarCaptcha() {
        var captcha = "jo";
        if (imgCaptcha != null) {
            var letra = "";
            var contador = 0;
            var numero = 0;
            var srcAntiguo = String(imgCaptcha.src).substring((String(imgCaptcha.src).length - totalChars), String(imgCaptcha.src).length);
            while (contador < totalChars) {
                do numero = Math.ceil(Math.random() * letras.length);
                while (numero > letras.length)
                if (contador == 0) captcha = letras.substring(numero - 1, numero);
                else captcha = captcha + letras.substring(numero - 1, numero);
                contador = contador + 1;
            } // end while
            imgCaptcha.src = 'captcha.ashx?numeroIntento=' + captcha;
            var txtCaptchaOriginal = document.getElementById(idCOriginal);
            txtCaptchaOriginal.value = captcha.toUpperCase();
        } // end if
    } // end function
    function validarCaptcha() {
        if (imgCaptcha != null) {
            var txtCaptcha = document.getElementById(idCaptcha);
            var srcAntiguo = String(imgCaptcha.src).substring((String(imgCaptcha.src).length - totalChars), String(imgCaptcha.src).length);
            if (txtCaptcha.value != "") {
                if (srcAntiguo.toUpperCase() == txtCaptcha.value.toUpperCase()) {
                    //obj.disabled = "false";
                } // end if
                else {
                    var sVerificacion = document.getElementById(idCRequeried);
                    sVerificacion.innerHTML = "Código incorrecto";
                    sVerificacion.style.display = "block";
                } // end else
            } // end if
            else {
                var sVerificacion = document.getElementById(idCRequeried);
                sVerificacion.innerHTML = "Requerido";
                sVerificacion.style.display = "block";
            } // end else
        } // end if
    } // end function
    function onchangeCaptcha(obj) {
        var txtCaptcha = document.getElementById(idCOriginal);
        if (txtCaptcha.value.toUpperCase() == obj.value.toUpperCase()) {
            var sVerificacion = document.getElementById(idRequeriedCV);
            sVerificacion.style.display = "none";
            if (obj.value.length == 6) obj.value = obj.value.toUpperCase();
        } // end if
        else {
            var sVerificacion = document.getElementById(idRequeriedCV);
            sVerificacion.style.display = "block";
        } // end else
    } // end function
} // end ControlCaptcha

// Estructura de control
var j = function (e) {
    var BlockUI, ControlDate;
    var elemento = e;
    function lightboxFade() {
        var popup = document.getElementById("lightbox");
        if (popup) {
            popup.className = 'out';
            setTimeout(function () { popup.className = "lightbox"; activeLightbox = false; }, 1000);
        } // end if
        return false;
    }; // end function
    // Validates if parameter is a function
    function isFunction(x) {
        return Object.prototype.toString.call(x) == '[object Function]';
    };
    // Inicializa el control para las tablas
    function tablesInit() {
        $('.dataTable').dataTable({
            "bJQueryUI": true,
            "aaSorting": [],
            "oLanguage": { "sUrl": "../assets/css/dataTables-es.txt" },
            "sPaginationType": "full_numbers",
            "sDom": '<"H"Tfr>t<"F"ip>',
            "oTableTools": {
                "sRowSelect": "multi",
                "sSwfPath": "../services/swf/copy_csv_xls_pdf.swf",
                "aButtons": [{ "sExtends": "copy", "bSelectedOnly": "true" }, "xls", "csv", "pdf"]
            } // table tools
        }); // end datatable
    };
    // Agrega stylo como jquery { display : 'none' }
    function AddStyle(styles, elemento) { for (var i in styles) elemento.style[i] = styles[i]; } // agrega los estilos que se le indique
    // Agrega class
    function AddClass(name, elemento) { elemento.className += ' ' + name; } // agrega una clase a un elemento
    return {
        // Funcionaes para bloquear la pantalla para que el usuario 
        // no evnie la ininformación dos veces aal servidor
        BlockUI: function () {
            function block() { // Mientras se envian los datos al servidor se mostrara un panel ocultando los controles de servidor
                $(".postback").easyValidate(vldt);
            } // end function
            return {
                init: function () {
                    loadClick();
                    return false;
                }, // end function
                unBlock: function () {
                    fnHideLoading();
                    // ValidatorOnLoad();
                    block();
                }
            } // end return
        }, // End Estructura BlockUI
        // Grupo de funciones para el uso de tres controles select para fechas
        ControlDate: function (idCYear, idCMoth, idCDay, idCOutDate) {
            // Variables del control
            // Id Control Year, Id Control Month, Id Control Day, Id Control Para que el servidor obtenga el valor,   
            // Select Year, Selec Month, Select Day, Number Year, Number Month, Number Day
            var sYear = document.getElementById(idCYear);
            var sMonth = document.getElementById(idCMoth);
            var sDay = document.getElementById(idCDay);
            // Region para controls de fechas año, med y día
            var aMonthEs = new Array("", "Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre")
            var aMonthEn = new Array("", "January", "Febrary", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December")
            // funciones
            function addOpt(oCntrl, iPos, sTxt, sVal) {
                var selOpcion = new Option(sTxt, sVal);
                oCntrl.options.add(selOpcion, iPos);
            } // end function
            function changeDate(nOption) {
                // Number Option
                var nYear, nMonth, nDay;
                nYear = parseInt(sYear.options[sYear.selectedIndex].value);
                switch (nOption) {
                    case 0:
                        fillMonth(nYear);
                        break;
                    case 1:
                        nMonth = parseInt(sMonth.options[sMonth.selectedIndex].value);
                        fillDay(nYear, nMonth)
                        break;
                    case 2:
                        nMonth = parseInt(sMonth.options[sMonth.selectedIndex].value);
                        nDay = parseInt(sDay.options[sDay.selectedIndex].value);
                        break;
                } // end switch
            } // end function
            function fillDay(nYear, nMonth) {
                // Number Year, Number Month
                var today = new Date();
                var nEnd = lastDayOfMonth(nMonth, nYear); // Number End
                while (sDay.length > 1) sDay.remove(1);
                if (nYear == today.getFullYear() && nMonth == today.getMonth() + 1) nEnd = today.getDate();
                for (var i = 1; i <= nEnd; i++) addOpt(sDay, i + 1, String(i), String(i));
            } // end function
            function fillMonth(nYear) {
                // Number Year
                var today = new Date();
                var nEnd = 12; // Number End
                while (sMonth.length > 1) sMonth.remove(1);
                if (nYear == today.getFullYear()) nEnd = today.getMonth() + 1;
                var months; // Dependiendo del idioma se cargan los meses en lenguajes distintos
                if (lang == "en") months = aMonthEn;
                else months = aMonthEs;
                for (var i = 1; i <= nEnd; i++) addOpt(sMonth, i + 1, months[i], String(i));
            }  // end function
            function fillYear() {
                var today = new Date();
                var nStart = 1940;
                for (var i = nStart ; i <= today.getFullYear() ; i++) addOpt(sYear, i - nStart + 1, String(i), String(i));
            }  // end function
            function lastDayOfMonth(nMonth, nYear) {
                var aMonth = new Array(31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31);
                if ((nMonth == 2) && (nYear % 4 == 0)) return 29;
                else return aMonth[nMonth - 1];
            } // end function
            function makeDateFormat(nDay, nMonth, nYear) {
                var sRes;
                sRes = padNmb(nYear, 4, "0") + "-" + padNmb(nMonth, 2, "0") + "-" + padNmb(nDay, 2, "0");
                return sRes;
            } // end function
            function padNmb(nStr, nLen, sChr) {
                var sRes = String(nStr);
                for (var i = 0; i < nLen - String(nStr).length; i++) sRes = sChr + sRes;
                return sRes;
            } // end function
            // Inicio para que cargue todos los datos
            return {
                init: function () {
                    fillYear();  // Eventtos change en los selects
                    sYear.addEventListener("change", function () { changeDate(0) }, false);
                    sMonth.addEventListener("change", function () { changeDate(1) }, false);
                    sDay.addEventListener("change", function () { changeDate(2) }, false);
                    return false;
                },  // end function
                getDate: function () {
                    return makeDateFormat(nDay, nMonth, nYear);
                } // retorna la fecha que hay
            } // end return
        }, // end controlDate
        // Recibe un arreglo de objetos obtenido por medio de jquery
        Hide: function (elements) {
            if (Array.isArray(elements))
                for (var i = 0; i < elements.length; i++) $("#" + elements[i]).addClass("hide");
            else $("#" + elements).addClass("hide");
        }, // end function hide
        Show: function (elements) {
            if (Array.isArray(elements))
                for (var i = 0; i < elements.length; i++) $("#" + elements[i]).removeClass("hide");
            else $("#" + elements).removeClass("hide");
        }, // end function show
        // funcion para eleminar todas las opciones de un select excepto el primero si como segundo parametro recibe un false
        // el elemento que se espera debe se llamado a través de jquery 
        ClearOption: function (ele, all) {
            var s = 'option';
            s += all ? '' : ':not(:first)';
            ele.find(s).remove();
        }, // end function Delete option
        // Función para ocultar el lightbox terminando con una animación
        LightboxShow: function (fnAdd) {
            activeLightbox = true;
            var popup = document.getElementById("lightbox");
            // Se capturan los controles para agregar la información del paso
            popup.className = 'in';
            if (isFunction(fnAdd)) fnAdd();
            return {
                Text: function (txt) {
                    document.getElementById('lightbox').getElementsByClassName('content')[0].getElementsByTagName('div')[0].innerHTML = txt;
                }, // end function text
                Style: function (css, cover) {
                    var cntLight = document.getElementById('lightbox').getElementsByClassName('content')[0];
                    AddStyle(css, cntLight);
                    if (cover) AddClass('cover', cntLight);
                } // end function style
            }; // end return
        },
        // Función para ocultar el lightbox terminando con una animación
        LightboxFade: function () {
            lightboxFade();
        },
        // Funciones para el manejo de las teclas en el formulario
        Init: function () {
            var popup = document.getElementById("lightbox");
            // Se agrega la función de ocultar el lightbox al botón x
            popup.getElementsByClassName('bg')[0].addEventListener('click', function () { lightboxFade(); });
            // Se agrega la función de ocultar el lightbox al botón x
            popup.getElementsByClassName('close')[0].addEventListener('click', function () { lightboxFade(); });
            // Cuando se presione ecs y el lighbox este activo este se ocultara
            $("body").keydown(function (e) {
                if (e.keyCode == 27 && activeLightbox) {
                    lightboxFade();
                } // end if
            }); // key dow
            tablesInit();
            return false;
        },
        Thread: function (e) {
            var worker = new Worker('js/' + e.WorkedJs);
            // se envia la plantilla y se envian los datos JSON
            worker.postMessage({ compile: e.Template, data: e.Data });
            // Agregar función para cuando responde el hilo
            worker.addEventListener("message", function (i) {
                return e.Success(i);
            }); // end worker
        },// End method
        AddClass: function (name) { elemento.className += ' ' + name; }, // agrega una clase a un elemento
        AddStyle: function (styles) { for (var i in styles) elemento.style[i] = styles[i]; }, // agrega los estilos que se le indique
        RemoveAttr: function (attr) { elemento.removeAttribute(attr); },
        // Función para cargar un select con un objeto json con propiedades Pk, Name
        FillDataSelect: function (data, id) {
            var elemento = document.getElementById("nacionalidad");
            for (var i = 0; i < data.length; i++) {
                opcion = document.createElement("option");
                opcion.value = data[i].Pk;
                opcion.text = data[i].Name;
                elemento.add(opcion);
            } // end for
        }, // end method
        // Sets dataTable plugin basic configuration 
        fnTableTools: function () {
            tablesInit();
        }, // end method
        // Crea el formato para un new date de javascript
        ParseJsonDate: function (jsonDate) {
            var offset = new Date().getTimezoneOffset() * 60000;
            var parts = /\/Date\((-?\d+)([+-]\d{2})?(\d{2})?.*/.exec(jsonDate);
            if (parts[2] == undefined) parts[2] = 0;
            if (parts[3] == undefined) parts[3] = 0;
            return new Date(+parts[1] + offset + parts[2] * 3600000 + parts[3] * 60000);
        }, // end method
    } // end funciones de la estructura
};// end estructura J

function coments() {
    //var page = 1;
    //var numberItems = 10;
    //var totalItems = 0;
    //var loadingPublishes = false;
    // Para cargar por medio asincronomo
    //function inicio() {
    //    $.ajax({
    //        type: "POST",
    //        url: "../ajax/tablas.aspx/CountPublications",
    //        contentType: "application/json; charset=utf-8",
    //        dateType: "json",
    //        success: function (data) {
    //            if (data != "") totalItems = parseInt(data.d);
    //        } // end succes
    //    });
    //} // end function
    //function loadPublications() {
    //    $.ajax({
    //        type: "POST",
    //        url: "../ajax/tablas.aspx/LoadPublications",
    //        contentType: "application/json; charset=utf-8",
    //        data: "{ Page:" + page + ", NumberItems:" + numberItems + "  }",
    //        dateType: "json",
    //        beforeSend: function () { loadingPublishes = true },
    //        success: function (data) {
    //            if (data != "") {
    //                $("#publications").append(data.d);
    //            }
    //            $("#dvPostLoader").empty();
    //            loadingPublishes = false
    //        }
    //    });
    //}
    //$(window).scroll(function () {
    //    if ($(window).scrollTop() == ($(document).height() - $(window).height())) {
    //        if (!loadingPublishes) {
    //            if (page <= totalItems / numberItems) {
    //                $("#dvPostLoader").html('<img src="img/ajax-loader.gif" alt="cargando" />')
    //                page += 1;
    //                loadPublications(page, numberItems);
    //            }
    //        }
    //    }
    //});
};


// El alto de los section a 100%
//var alto = $(window).height();
//$("section").css({ height: screen.availHeight });
// Cambio de posición al hacer scroll
//var $document = $(document), st = 0, buffer = 500;
//$document.scroll(function () {
//    var scrollTop = $document.scrollTop();
//    if (scrollTop > $('#triqui').offset().top - buffer) change(4);
//    else if (scrollTop > $('#statics').offset().top - buffer) change(3);
//    else if (scrollTop > $('#reports').offset().top - buffer) change(2);
//    else if (scrollTop > $('#list').offset().top - buffer) change(1);
//    else if (scrollTop > $('#forms').offset().top - buffer) change(0);
//    function change(element) {
//        var active = 'active';
//        $('#menu li a').removeClass(active);
//        $('#menu li a:eq(' + element + ')').addClass(active);
//    } // end function change
//}); // end function scroll

//$('#menu a').click(function () {
//    var block = $(this).attr('href'),
//    blockRoof = $(block).position().top - 40
//    $('html, body').animate({ scrollTop: blockRoof }, 600, 'swing');
//    return false;
//}); // end function a click