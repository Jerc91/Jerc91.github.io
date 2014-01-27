//---------------------------------
// Plugin Control Date
// Depends JTools, Jquery, Namespace Main


(function () {
	// Private properties
	//---------------------------------
	// Variables of control
    // Id Control Year, Id Control Month, Id Control Day, Id Control for that the server get value
    // Select Year, Selec Month, Select Day, Number Year, Number Month, Number Day
    var sYear, sMonth, sDay;
	// Months in diferrencts languages
    var aMonthEs = new Array("", "Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre");
    var aMonthEn = new Array("", "January", "Febrary", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December");
    //---------------------------------

    // Private methods
    //---------------------------------
    // Added options on select
    function addOpt(oCntrl, iPos, sTxt, sVal) {
        var selOpcion = new Option(sTxt, sVal);
        oCntrl.options.add(selOpcion, iPos);
    } // end function
    //---------------------------------

	// Change controls and fill new date for month and day
    //---------------------------------
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
    //---------------------------------

    // Fill day
    //---------------------------------
    function fillDay(nYear, nMonth) {
        // Number Year, Number Month
        var today = new Date();
        var nEnd = lastDayOfMonth(nMonth, nYear); // Number End
        while (sDay.length > 1) sDay.remove(1);
        if (nYear == today.getFullYear() && nMonth == today.getMonth() + 1) nEnd = today.getDate();
        for (var i = 1; i <= nEnd; i++) addOpt(sDay, i + 1, String(i), String(i));
    } // end function
	//---------------------------------

	// Fill Month
    //---------------------------------
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
	//---------------------------------

	// Fill year
    //---------------------------------
	function fillYear() {
        var today = new Date();
        var nStart = 1940;
        for (var i = nStart ; i <= today.getFullYear() ; i++) addOpt(sYear, i - nStart + 1, String(i), String(i));
    }  // end function

	// Return the last day of month
    //---------------------------------
    function lastDayOfMonth(nMonth, nYear) {
        var aMonth = new Array(31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31);
        if ((nMonth == 2) && (nYear % 4 == 0)) return 29;
        else return aMonth[nMonth - 1];
    } // end function
    //---------------------------------

    // Return the date with format (yyyy-MM-dd)
    //---------------------------------
    function makeDateFormat(nDay, nMonth, nYear) {
        var sRes;
        sRes = padNmb(nYear, 4, "0") + "-" + padNmb(nMonth, 2, "0") + "-" + padNmb(nDay, 2, "0");
        return sRes;
    } // end function
    //---------------------------------

    // I don't remeber
    //---------------------------------
    function padNmb(nStr, nLen, sChr) {
        var sRes = String(nStr);
        for (var i = 0; i < nLen - String(nStr).length; i++) sRes = sChr + sRes;
        return sRes;
    } // end function
    
	// Start control
    //---------------------------------
    function fnInit (idCYear, idCMoth, idCDay) {
    	sYear = document.getElementById(idCYear);
	    sMonth = document.getElementById(idCMoth);
	    sDay = document.getElementById(idCDay);
        fillYear(); // Events change on the selects
        sYear.addEventListener("change", function () { changeDate(0) }, false);
        sMonth.addEventListener("change", function () { changeDate(1) }, false);
        sDay.addEventListener("change", function () { changeDate(2) }, false);
        return false;
    } // end function

    // Return the date with format (yyyy-MM-dd)
    //---------------------------------
    function fnGetDate() {
        return makeDateFormat(nDay, nMonth, nYear);
    } // end function
    //---------------------------------

    //---------------------------------
    // Public API
    this.fnInit = fnInit;
    this.fnGetDate = fnGetDate;

}).apply(j.fnAddNS("controlDate"));
$.extend(j.controlDate, { Author: 'Julian Ruiz', Created: '2014-01-27', Page: 'http://jerc91.github.io/', Title: 'Control Date' });