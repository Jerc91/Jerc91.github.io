//---------------------------------
// Plugin carousel
// Depends Tools, Jquery, Namespace Main
(function () {
    // Private properties
    //---------------------------------
    var j = fnImport(company), initTrue, e = this, tools = fnImport(company + '.tools');
    if (!fnDepenciesTrue(['jQuery', company, tools])) return;
    //---------------------------------

    //---------------------------------
    // Move elements to left
    function fnjslideLeft() {
        var $ul = $(e.classContent);
        var classString = tools.fnFindWord("[a]" + e.rangeNumber, $ul.attr("class")) || 'a0';
        var activeItem = parseInt(tools.fnFindWord(e.rangeNumber, classString)) + 1;
        if (e.active) return;
        if (fnShowButton(activeItem)) return;
        e.active = true;
        $ul.removeClass(classString);
        $ul.addClass("a" + (activeItem));
        setTimeout(function () { e.active = false }, 500);
    };
    //---------------------------------

    //---------------------------------
    // Move elements to right
    function fnjslideRight() {
        var $ul = $(e.classContent);
        var classString = tools.fnFindWord("[a]" + e.rangeNumber, $ul.attr("class")) || 'a0';
        var activeItem = parseInt(tools.fnFindWord(e.rangeNumber, classString)) - 1;
        if (e.active) return;
        if (fnShowButton(activeItem)) return;
        e.active = true;
        $ul.removeClass(classString);
        if (activeItem > 0) $ul.addClass("a" + (activeItem));
        setTimeout(function () { e.active = false }, 500);
    };
    //---------------------------------

    //---------------------------------
    // Show or fade the buttons(Left, Right)
    function fnShowButton(activeItem) {
        var btn1, btn2, countItems = e.elementsFade, classDisabled = "disable";
        if (!e.leftToRight) {
            btn1 = e.idContent + " .btnRight";
            btn2 = e.idContent + " .btnLeft";
        } // end if
        else {
            btn1 = e.idContent + " .btnLeft";
            btn2 = e.idContent + " .btnRight";    
        } // end else

        if (activeItem == -1) { $(btn1).addClass(classDisabled); return true; }
        else if (activeItem == 0) $(btn1).addClass(classDisabled);
        else $(btn1).removeClass(classDisabled);
        if (activeItem > countItems) { $(btn2).addClass(classDisabled); return true; }
        if (activeItem == countItems) $(btn2).addClass(classDisabled);
        else $(btn2).removeClass(classDisabled);
        return false;
    };
    //---------------------------------

    //---------------------------------
    // Show or hide the buttons of navigation jslide
    function fnBtnMove() {
        var $button = $(this);
        if ($button.hasClass("disable")) return;
        if ($button.hasClass("btnLeft")) {if(!e.leftToRight) e.fnjslideLeft(); else e.fnjslideRight();}
        else if ($button.hasClass("btnRight")) {if(!e.leftToRight) e.fnjslideRight(); else e.fnjslideLeft();}
    };
    //---------------------------------

    //---------------------------------
    // Init of plugin jslide
    function fnInit(config) {
        // Set values to config and asing this to p for do small code
        $.extend(e, config);
        // Local variables for the funcionamiento del control
        e.active = false;
        var count = e.list.length;
        var countFadeElements = 0;
        var elements = (count > e.maxElementsShow ? e.maxElementsShow : count);
        e.elementsFade = (count > e.maxElementsShow ? count - e.maxElementsShow : 0);
        var preBrowser = j.preBrowsers;
        e.rangeNumber = tools.fnGetERNumberRange(count.toString().length);
        var widthElements = Math.round(e.width / e.maxElementsShow);
        // For the animation with move left to right or right to left
        e.leftToRight = e.leftToRight || false;
        // Calculate pixels to left for animation left to right or right to left
        var leftAnimation = !e.leftToRight ? 
            (e.elementsFade * widthElements) - (e.leftToRight ? (e.maxElementsShow * widthElements) : 0) :
            (e.maxElementsShow * widthElements) - (e.leftToRight ? (e.elementsFade * widthElements) : 0);
        if (!e.leftToRight) leftAnimation *= leftAnimation <= 0 ? -1 : 1;
        // Styles for the jslide
        var css = [];
        var la = " init-jslide{0%{left:" + (e.leftToRight ? "-" : "") + "100%;opacity:0;}100%{left:0;opacity:1;}}"; // left animation
        for (var i = 0; i < j.preBrowsers.length; i++) css.push("@" + j.preBrowsers[i] + "keyframes" + la);
        var pi = tools.fnGetTextPreBrowsers("transform: translateX(-" + leftAnimation + "px);");
        css.push(e.classContent + " li{min-width:" + widthElements + "px; -webkit-transition: all 1s ease-in-out; -moz-transition: all 1s ease-in-out; -o-transition: all 1s ease-in-out; transition: all 1s ease-in-out;" + pi + "}");
        // Assing the classes for each li in the jslide
        for (var i = 0; i < count; i++) {
            var i2 = i + 1;
            var b = count > 1 && ((i2 + i) == count || (i2) == count);
            var child = " li:nth-child(" + (i2) + ") ";
            if (e.elementsFade > countFadeElements && !e.leftToRight) {
                var tx = tools.fnGetTextPreBrowsers("transform: translateX(-" + (widthElements * (e.elementsFade - i2)) + "px);");
                css.push(e.classContent + ".a" + i2 + " li {" + tx + "}");
                countFadeElements++;
            } // end if
            else if (i < e.elementsFade && e.leftToRight) {
                var tx = tools.fnGetTextPreBrowsers("transform: translateX(-" + (widthElements * i2) + "px);");
                css.push(e.classContent + ".a" + i2 + " li {" + tx + "}");
            } // end if
        } // end for
        // Background color for and color font for the button navigate
        css.push(e.idContent + " .btnLeft, " + e.idContent + " .btnRight {background-color: #2d4862; border: 3px solid #fff; color: #fff; height:" + e.heightButtons + "px; width:" + e.widthButtons + "px;}");
        // Blob with the content css and created of tag link with src=blob
        var blob = blob || new Blob(css, { type: 'text/css; charset="utf-8"' });
        var csstag = document.createElement("link");
        csstag.setAttribute("href", URL.createObjectURL(blob));
        csstag.setAttribute("rel", 'stylesheet');
        $("head").append(csstag);
        // Events on jslide
        if (e.elementsFade == 0 || !e.showButtons) {
            $(e.idContent + " .btnLeft").remove();
            $(e.idContent + " .btnRight").remove();
        } // end if
        $(e.idContent + " .btnLeft").click(fnBtnMove).addClass(e.leftToRight ? "disable" : "");
        $(e.idContent + " .btnRight").click(fnBtnMove).addClass(!e.leftToRight ? "disable" : "");

        $('body').keydown(function (e) {
            if (e.keyCode == 37) if (!e.leftToRight) e.fnjslideLeft(); else e.fnjslideRight();
            else if (e.keyCode == 39) if (!e.leftToRight) e.fnjslideRight(); else e.fnjslideLeft();
        });
        // Animation active init
        if (e.animations) {
            var $ul = $(e.classContent);
            $ul.addClass("init");
            e.active = true;
            setTimeout(function () { $(e.classContent).removeClass("init"); e.active = false; }, 2000, $ul);
        } // end if
    }; // end function init
    //---------------------------------

    //---------------------------------
    // Public API
    this.fnjslideLeft = fnjslideLeft;
    this.fnjslideRight = fnjslideRight;
    //this.fnShowButton = fnShowButton;
    this.fnInit = fnInit;
    //---------------------------------
}).apply(j.fnAddNS("jslide"));
$.extend(j.jslide, { Author: 'Julian Ruiz', Created: '2014-01-27', Page: 'http://jerc91.github.io/', Title: 'jslide' });
//---------------------------------