(function(){function e(){var e=[{src:"views/view-jspinner.html",then:myApp.main.fnSetHTML,query:"#wrapper"},{src:"models/jspinners.json",then:function(e){r=e.data}}];get(e).then(function(){get({src:"views/jspinner/jspinner-spinners.html"}).then(n)})}function n(e){myApp.main.fnShowPage(),document.querySelector("#Wspinners").innerHTML=Handlebars.compile(e.data)(r);for(var n=document.querySelectorAll("#Wspinners li"),i=0;i<n.length;i++)j.jspinner.fnBlockUI({query:'#Wspinners [data-css="'+n[i].dataset.css+'"]',theme:n[i].dataset.css,relative:!0});for(var a=document.querySelectorAll("#btnSpinnerAShow, #btnSpinnerAFade, #btnSpinnerBShow, #btnSpinnerBFade"),i=0;i<a.length;i++)a[i].addEventListener("click",t,!1);for(var o=document.querySelectorAll(".sltThemeBlock"),s="Tema ",i=0;i<o.length;i++){var p=document.createElement("option");p.value=0,p.textContent="Tema aleatoreo",o[i].appendChild(p),o[i].addEventListener("change",function(e){t.call(e.target.parentNode.parentNode.querySelector("button"),e)});for(var l=1;l<15;l++){var c=document.createElement("option");c.value=l,c.textContent=s+l,o[i].appendChild(c)}}}function t(e){var n,t,r=this.id.indexOf("A")>-1?"A":"B",i={query:"#demoSpinner"+r,relative:!0};switch(t=this.parentNode.parentNode.querySelector(".sltThemeBlock"),t&&"0"!=t.value&&(i.theme=t.value),this.id){case"btnSpinnerAShow":n=!0;break;case"btnSpinnerBShow":n=!0}return n?j.jspinner.fnBlockUI(i):j.jspinner.fnUnBlockUI(i)}var r,i={js:["controllers/controller-jspinner.js"],ns:["myApp.jspinner"]};this.fnInit=e,myApp.main.currentInfo=i}).call(myApp.fnAddNS("jspinner"));var jspinner=myApp.jspinner;jspinner.fnInit();