(function(){function a(){b(),d(),myApp.main.showPage()}function b(){var a=document.querySelector('#fmfnForm'),b=document.querySelector('#slCiudad'),d=document.querySelectorAll('input[name="EsDesarrollador"]'),f=document.querySelector('#icLenguaje').parentNode;jr.jforms.form(a),document.querySelector('#slPais').addEventListener('change',(function(){'CO'==this.value?b.removeAttribute('disabled'):(b.setAttribute('disabled',''),b.value='')}),!1),d[0].addEventListener('click',(function(){this.checked&&f.classList.remove('fade')}),!1),d[1].addEventListener('click',(function(){this.checked&&f.classList.add('fade')}),!1),document.querySelector('#btnCleanfnForm').addEventListener('click',(function(a){a.preventDefault(),this.form.clean()})),document.querySelector('#btnFillfnForm').addEventListener('click',(function(a){a.preventDefault(),c.call(this,b,f)})),c.call(null,b,f,a)}function c(a,b,c){var d=c||this.form;d.set({nombres:'Julian Ruiz',pais:'CO',ciudad:'01',esDesarrollador:'Si',lenguaje:['JavaScript','C#']}),a.removeAttribute('disabled'),b.classList.remove('fade')}function d(){var a=document.querySelector('#fmfnIsValid');jr.jforms.form(a),document.querySelector('#btnfnValidate').addEventListener('click',(function(a){a.preventDefault(),void 0}),!1)}this.fnInit=function(){return get({src:'views/view-jforms.html',query:'#wrapper'}).then(a)}}).call(myApp.addNS('jforms'));