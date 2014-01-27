//---------------------------------
// Plugin Pipeline
// Depends Tools, Jquery, Namespace Main
(function () {
    // Private properties
    //---------------------------------
    var j = fnImport(company), initTrue, p = this, tools = fnImport(company + '.tools');
    if (!fnDepenciesTrue(['jQuery', company, tools])) return;
    //---------------------------------

    //---------------------------------
    // Move elements to left
    function fnPipelineLeft() {
        var $ul = $(p.classPipeline);
        var classString = tools.fnFindWord("[a]" + p.rangeNumber, $ul.attr("class")) || 'a0';
        var activeItem = parseInt(tools.fnFindWord(p.rangeNumber, classString)) + 1;
        if (p.active) return;
        if (fnShowButton(activeItem)) return;
        p.active = true;
        $ul.removeClass(classString);
        $ul.addClass("a" + (activeItem));
        setTimeout(function () { p.active = false }, 500);
    };
    //---------------------------------

    //---------------------------------
    // Move elements to right
    function fnPipelineRight() {
        var $ul = $(p.classPipeline);
        var classString = tools.fnFindWord("[a]" + p.rangeNumber, $ul.attr("class")) || 'a0';
        var activeItem = parseInt(tools.fnFindWord(p.rangeNumber, classString)) - 1;
        if (p.active) return;
        if (fnShowButton(activeItem)) return;
        p.active = true;
        $ul.removeClass(classString);
        if (activeItem > 0) $ul.addClass("a" + (activeItem));
        setTimeout(function () { p.active = false }, 500);
    };
    //---------------------------------

    //---------------------------------
    // Show or fade the buttons(Left, Right)
    function fnShowButton(activeItem) {
        var btn1, btn2, countItems = p.elementsFade, classDisabled = "disable";
        if (!p.leftToRight) {
            btn1 = ".btnRight";
            btn2 = ".btnLeft";
        } // end if
        else {
            btn1 = ".btnLeft";
            btn2 = ".btnRight";    
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
    // Show or hide the buttons of navigation Pipeline
    function fnBtnMove() {
        var $button = $(this);
        if ($button.hasClass("disable")) return;
        if ($button.hasClass("btnLeft")) {if(!p.leftToRight) p.fnPipelineLeft(); else p.fnPipelineRight();}
        else if ($button.hasClass("btnRight")) {if(!p.leftToRight) p.fnPipelineRight(); else p.fnPipelineLeft();}
    };
    //---------------------------------

    //---------------------------------
    // Init of plugin Pipeline
    function fnInit(config) {
        //var pipeline = 
        // Set values to config and asing this to p for do small code
        $.extend(p, config);

        // Local variables for the funcionamiento del control
        p.active = false;
        var count = p.list.length;
        // Work colors for backgrounds of panels
        var backColors = (p.changeColorsPanel ? tools.fnGradientColors(p.backGradients[0], p.backGradients[1], count) : p.colorsPanel);
        var countFadeElements = 0;
        var elements = (count > p.maxElementsShow ? p.maxElementsShow : count);
        p.elementsFade = (count > p.maxElementsShow ? count - p.maxElementsShow : 0);
        var height = p.firtsHeight;
        var fontColors = (p.changeColorsFont ? tools.fnGradientColors(p.fontGradients[0], p.fontGradients[1], count) : p.colorsFont);
        var maxWidthElements = Math.round(p.width * 34.09 / 100);
        var paddingLeft = Math.round((p.width - maxWidthElements * elements) / 2);
        var perspective = Math.round(height * 151.51 / 100);
        var preBrowser = j.preBrowsers;
        p.rangeNumber = tools.fnGetERNumberRange(count.toString().length);
        var widthElements = Math.round(p.width / elements);
        // For the animation with move left to right or right to left
        p.leftToRight = p.leftToRight || false;
        // Calculate pixels to left for animation left to right or right to left
        var leftAnimation = !p.leftToRight ? 
            (p.elementsFade * widthElements) - (p.leftToRight ? (p.maxElementsShow * widthElements) : 0) :
            (p.maxElementsShow * widthElements) - (p.leftToRight ? (p.elementsFade * widthElements) : 0);
        if (!p.leftToRight) leftAnimation *= leftAnimation <= 0 ? -1 : 1;
        // Styles for the pipeline
        var css = [];
        css.push(p.classContent + "{width:" + p.width + "px}");
        var la = " init-pipeline{0%{left:" + (p.leftToRight ? "-" : "") + "100%;opacity:0;}100%{left:0;opacity:1;}}"; // left animation
        for (var i = 0; i < j.preBrowsers.length; i++) css.push("@" + j.preBrowsers[i] + "keyframes" + la);
        css.push(p.classPipeline + " {" + (paddingLeft < 0 ? '' : 'padding-left:' + paddingLeft + 'px;') + "width:" + p.width + "px;}");
        var pi = tools.fnGetTextPreBrowsers("transform: translateX(-" + leftAnimation + "px);");
        css.push(p.classPipeline + " li{max-width:" + maxWidthElements + "px;min-width:" + widthElements + "px;" + pi + "}");
        // Assing the classes for each li in the pipeline
        for (var i = 0; i < count; i++) {
            var i2 = i + 1;
            var b = count > 1 && ((i2 + i) == count || (i2) == count);
            var child = " li:nth-child(" + (i2) + ") ";
            if (p.elementsFade > countFadeElements && !p.leftToRight) {
                var tx = tools.fnGetTextPreBrowsers("transform: translateX(-" + (widthElements * (p.elementsFade - i2)) + "px);");
                css.push(p.classPipeline + ".a" + i2 + " li {" + tx + "}");
                countFadeElements++;
            } // end if
            else if (i < p.elementsFade && p.leftToRight) {
                var tx = tools.fnGetTextPreBrowsers("transform: translateX(-" + (widthElements * i2) + "px);");
                css.push(p.classPipeline + ".a" + i2 + " li {" + tx + "}");
            } // end if
            if (i != 0) height -= Math.round(height * 9.09 / 100);
            if (b) p.rotateY -= (p.rotateY * 25 / 100);
            css.push(p.classPipeline + child + ".content span{color:" + fontColors[i] + ";}");
            var tp = tools.fnGetTextPreBrowsers("transform:perspective(" + perspective.toString() + "px)rotate3d(0,1,0," + p.rotateY.toString() + "deg);");
            css.push(p.classPipeline + child + p.classPanel + "{background-color:" + backColors[i] + ";height:" + height + "px;" + ((count == i + 1) ? '' : tp) + (b ? 'width: 100%;' : '') + "}");
        } // end for
        var tp = tools.fnGetTextPreBrowsers("transform:perspective(" + perspective + "px)rotate3d(0,0,0,0);");
        css.push(p.classPipeline + " li:hover .second " + p.classPanel + "{" + tp + "}");
        // Background color for and color font for the button navigate
        css.push(".btnLeft, .btnRight {background-color: " + backColors[0] + "; border: 3px solid " + fontColors[0] + "; color: " + fontColors[0] + "; height:" + p.heightButtons + "px; width:" + p.widthButtons + "px;}");
        // Blob with the content css and created of tag link with src=blob
        var blob = blob || new Blob(css, { type: 'text/css; charset="utf-8"' });
        var csstag = document.createElement("link");
        csstag.setAttribute("href", URL.createObjectURL(blob));
        csstag.setAttribute("rel", 'stylesheet');
        $("head").append(csstag);
        // Events on Pipeline
        if (p.elementsFade == 0 || !p.showButtons) {
            $(".btnLeft").remove();
            $(".btnRight").remove();
        } // end if
        $(".btnLeft").click(fnBtnMove).addClass(p.leftToRight ? "disable" : "");
        $(".btnRight").click(fnBtnMove).addClass(!p.leftToRight ? "disable" : "");
        $('body').keydown(function (e) {
            if (e.keyCode == 37) if (!p.leftToRight) p.fnPipelineLeft(); else p.fnPipelineRight();
            else if (e.keyCode == 39) if (!p.leftToRight) p.fnPipelineRight(); else p.fnPipelineLeft();
        });
        // Animation active init
        if (p.animations) {
            var $ul = $(p.classPipeline);
            $ul.addClass("init");
            p.active = true;
            setTimeout(function () { $(p.classPipeline).removeClass("init"); p.active = false; }, 2000, $ul);
        } // end if
    }; // end function init
    //---------------------------------

    //---------------------------------
    // Public API
    this.fnPipelineLeft = fnPipelineLeft;
    this.fnPipelineRight = fnPipelineRight;
    //this.fnShowButton = fnShowButton;
    this.fnInit = fnInit;
    //---------------------------------
}).apply(j.fnAddNS("pipeline"));
$.extend(j.pipeline, { Author: 'Julian Ruiz', Created: '2014-01-27', Page: 'http://jerc91.github.io/', Title: 'Pipeline' });
//---------------------------------

$(document).ready(function () {
    var j = window.j || fnImport(company);
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
        "leftToRight": true,
        "list":
            [
                { "Total": "1,123", "Id": "#", "Name": "January" },
                { "Total": "600", "Id": "#", "Name": "Febrary" },
                { "Total": "510", "Id": "#", "Name": "March" },
                { "Total": "395", "Id": "#", "Name": "April" },
                { "Total": "173", "Id": "#", "Name": "May" },
                { "Total": "132", "Id": "#", "Name": "June" },
                { "Total": "100", "Id": "#", "Name": "July" },
                { "Total": "100", "Id": "#", "Name": "Augost" }
            ],
        "maxElementsShow": 4,
        "rotateY": 16,
        "showButtons": true,
        "width": 880,
        "widthButtons": 50
    };
    // Creación de HTML
    var template = Hogan.compile($("#templatePipeline").html());
    $("#contentPipeline").html(template.render(configPipeline));
    j.pipeline.fnInit(configPipeline);
});