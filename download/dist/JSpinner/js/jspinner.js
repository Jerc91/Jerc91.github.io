(function(){function a(a){function b(a,b,c){var d,e;d=document.createDocumentFragment();for(var f=0;f<b;f++)e=document.createElement('div'),e.classList.add(a+(c?f+1:'')),d.appendChild(e);return d}var d=this;return new Promise(function(f){var g;if(d instanceof c||(d=a||{},d.theme=d.theme||e(14*Math.random())+1,d.content=(d.wrapper||document).querySelector(d.query||'body'),d.elemento=d.content.querySelector('.blockUI')),!!d.content){switch(d.relative&&d.content.classList.add('posRelav'),d.elemento||(d.elemento=document.createElement('div'),d.content.appendChild(d.elemento)),d.elemento.setAttribute('class','blockUI none'),0<d.elemento.children.length&&d.elemento.removeChild(d.elemento.children[0]),d.spinner=document.createElement('div'),d.spinner.classList.add('spinner'),d.elemento.classList.add('a'+d.theme),d.spinner.classList.add('a'+d.theme),d.elemento.appendChild(d.spinner),parseInt(d.theme)){case 1:g=b('double-bounce',2,!0);break;case 2:g=b('rect',5,!0);break;case 3:g=b('cube',2,!0);break;case 4:g=b('dot',2,!0);break;case 5:g=b('bounce',3,!0);break;case 6:g=b('cube',9);break;default:g=b('circle',1);}d.spinner.appendChild(g),d.elemento.classList.remove('off'),d.elemento.classList.add('on'),requestAnimationFrame(()=>f(d))}})}function b(a){var b=this;return new Promise(function(d){function f(a){requestAnimationFrame(()=>{a.stopPropagation();'opacity'!==a.propertyName||(b.relative&&b.elemento.parentNode&&(b.content.parentNode.classList.remove('posRelav'),b.elemento.parentNode.removeChild(b.elemento)),d(b))})}b instanceof c||(b=a||{},b.theme=b.theme||e(14*Math.random())+1,b.content=(b.wrapper||document).querySelector(b.query||'body'),b.elemento=b.content.querySelector('.blockUI')),b.elemento||d(b),b.elemento.style.transition||d(b),b.elemento.removeEventListener('transitionend',f,!1),b.elemento.addEventListener('transitionend',f,!1),b.elemento.classList.remove('on'),b.elemento.classList.add('off')})}function c(c){var d=this;return Object.assign({query:'body',relative:!1},d,c),d.content=(d.wrapper||document).querySelector(d.query||'body'),d.elemento=d.content.querySelector('.blockUI'),d.theme=d.theme||e(14*Math.random())+1,d.block=a,d.hide=b,d}var e=Math.floor;jr.addNS('jspinner',function(a){return new c(a)}),jr.jspinner.show=a,jr.jspinner.hide=b})();