//---------------------------------
// Functions globals, coomon
(function () {
    // Get path of a namespace
    function fnImport (namespace) {
        var parent;
        try {
            var parts = namespace.split('.');
            for (var i = 0; i < parts.length; i++) {
                if (!parent && i == 0) parent = window;
                parent = parent[parts[i]];
            } // end for
            return parent;
        } // end try
        catch (e) {
            console.log(e);
            return null;
        } // end catch
    };
    //---------------------------------

    //---------------------------------
    // Validate the dependences
    function fnDepenciesTrue(dependencies) {
        if (dependencies.constructor === Assembly) if (!dependencies) return false;
        if (dependencies.constructor === Array) for (var i in dependencies) if (!dependencies[i]) return false;
        return true;
    };
    //---------------------------------

    // Struct for the namespace
    function Assembly() {
        this.Author = '';
        this.Created = '';
        this.Description = '';
        this.Title = '';
        // Add new namespace
        this.fnAddNS = function (name) {
            if (!name) return;
            if (!name.match(validateNS)) return;
            // create a property if it doesnt exist
            if (typeof this[name] == 'undefined') this[name] = new Assembly();
            return this[name];
        };
    };
    //---------------------------------

    //---------------------------------
    // Public API
    this.fnImport = fnImport;
    this.fnDepenciesTrue = fnDepenciesTrue;
    this.Assembly = Assembly;
    //---------------------------------
    // Variables globals
    // Variable for validate the name of NameSpace
    this.validateNS = /^[a-zA-Z]?[a-zA-z0-9]+$/;
    // Variables for the all browsers
    this.URL = window.URL || window.webkitURL;
    //---------------------------------
    // For languaje of page
    this.lang = document.getElementsByTagName("html")[0].getAttribute("lang");
})(window);
//---------------------------------

//---------------------------------
// Namespace Main for library
var company = "j";
var j = new Assembly();
$.extend(j, {
    Author: 'Julian Ruiz', Created: '2014-01-27', Page: 'http://jerc91.github.io/', preBrowsers: ['', '-moz-', '-ms-', '-o-', '-webkit-'], Title: 'Namespace Main'
});
//---------------------------------

//---------------------------------
// Common Tools, Namespace Main
(function () {
    // Private members
    var j = fnImport(company);
    if (!fnDepenciesTrue(j)) return;
    //---------------------------------
    // Color string to hexadecimal color
    function fnStrToHex(str) {
        if (!str) return undefined;
        var hex = (str.indexOf("#") === 0) ? str.substring(1) : str;
        hex = parseInt("0x" + hex, 16);
        return hex;
    };
    //---------------------------------

    //---------------------------------
    // Hexadecimal color to string color
    function fnHexToStr(n) {
        n = n.toString(16);
        if (n.length === 6) return '#' + n;
        return '#000000'.substr(0, 7 - n.length) + n;
    };
    //---------------------------------

    // Public API
    //---------------------------------
    // Find "n" colors gradients between two colors
    function fnGradientColors(fromColor, toColor, steps) {
        fromColor = fnStrToHex(fromColor);
        toColor = fnStrToHex(toColor);
        var colors = [];
        var fadeHex = function (hex, hex2, ratio) {
            var r = hex >> 16;
            var g = hex >> 8 & 0xFF;
            var b = hex & 0xFF;
            r += ((hex2 >> 16) - r) * ratio;
            g += ((hex2 >> 8 & 0xFF) - g) * ratio;
            b += ((hex2 & 0xFF) - b) * ratio;
            return (r << 16 | g << 8 | b);
        };
        for (var i = 0; i <= steps; i++) colors.push(fnHexToStr(fadeHex(fromColor, toColor, i / steps)));
        return colors;
    };
    //---------------------------------

    //---------------------------------
    // Insert an element after the other element
    function fnInsertAfter(referenceNode, newNode) {
        referenceNode.parentNode.insertBefore(newNode, referenceNode.nextSibling);
    };
    //---------------------------------

    //---------------------------------
    // Find word in text
    // Parameters: Expression Regular, Text
    function fnFindWord(reString, text) {
        var re = new RegExp(reString);
        var result = re.exec(text);
        return result ? result[0] : result;
    };
    //---------------------------------

    //---------------------------------
    // Created a RegularExpression for a number range
    function fnGetERNumberRange(max) {
        var range = "[0-9]{";
        for (var i = 0; i < max; i++) range += (i + 1) + (i + 1 != max ? ',' : '');
        return range += "}";
    };
    //--------------------------------

    //---------------------------------
    // Created text with the prefixed of browsers
    function fnGetTextPreBrowsers(text) {
        var result = '';
        for (var i = 0; i < j.preBrowsers.length; i++) result += (j.preBrowsers[i] + text);
        return result;
    };
    //---------------------------------

    // Validates if parameter is a function
    //---------------------------------
    function fnIsFunction(x) {
        return Object.prototype.toString.call(x) == '[object Function]';
    };
    //---------------------------------

    // Function that used the Web Workers when it create new templates with Hogan.js
    //---------------------------------
    function fnThread(e) {
        var worker = new Worker(e.WorkerJs);

        // se envia la plantilla y se envian los datos JSON
        worker.postMessage({ compile: e.Template, data: e.Data });
        // Agregar función para cuando responde el hilo
        worker.addEventListener("message", function (i) {
            return e.Success(i);
        }); // end worker
    } // End method
    //---------------------------------

    // Created the format for a new date of javascript
    //---------------------------------
    function fnParseJsonDate(jsonDate) {
        var offset = new Date().getTimezoneOffset() * 60000;
        var parts = /\/Date\((-?\d+)([+-]\d{2})?(\d{2})?.*/.exec(jsonDate);
        if (parts[2] == undefined) parts[2] = 0;
        if (parts[3] == undefined) parts[3] = 0;
        return new Date(+parts[1] + offset + parts[2] * 3600000 + parts[3] * 60000);
    } // end method
    //---------------------------------


    //---------------------------------
    // Public API
    this.fnGradientColors = fnGradientColors;
    this.fnInsertAfter = fnInsertAfter;
    this.fnFindWord = fnFindWord;
    this.fnGetERNumberRange = fnGetERNumberRange;
    this.fnGetTextPreBrowsers = fnGetTextPreBrowsers;
    this.fnIsFunction = fnIsFunction;
    this.fnThread = fnThread;
    this.fnParseJsonDate = fnParseJsonDate;
    //---------------------------------    
}).apply(j.fnAddNS("tools"));
$.extend(j.tools, { Author: 'Julian Ruiz', Created: '2014-01-27', Page: 'http://jerc91.github.io/', Title: 'Common Tools' });
//---------------------------------