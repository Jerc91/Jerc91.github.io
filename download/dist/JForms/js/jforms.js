(function(){function h(){function j(c){if(c)for(var d=0;d<c.length;d++)c[d].textContent=''}this.reset(),this.removeAttribute('data-state');var k=this.querySelector('.form.validated');k&&k.classList.remove('validated'),j(this.querySelectorAll('span[data-bind]')),j(this.querySelectorAll('output[data-bind]'));var b=this.querySelectorAll('[data-disabled]');if(b)for(var c=0;c<b.length;c++)b[c].setAttribute('disabled','disabled');var d=this.querySelectorAll('[data-not-disabled]');if(d)for(var c=0;c<d.length;c++)d[c].removeAttribute('disabled','disabled');var e=this.querySelectorAll('[data-id]');if(e)for(var c=0;c<e.length;c++)delete e[c].dataset.id;var f=this.querySelectorAll('[data-fade]');if(f)for(var c=0;c<f.length;c++)f[c].classList.add('fade');var g=this.querySelectorAll('[type="hidden"]:not([data-block])');[].slice.call(g,(function(b){b.value=''}));var h=this.querySelector('button[data-accion]');h&&h.removeAttribute('data-accion')}function a(){if(!this.checkValidity()){for(var f,a,g=this.querySelectorAll('.form'),c=0;c<g.length;c++)a=g[c].querySelector(':invalid'),f=f||a,a&&!g[c].classList.contains('active')&&e.apply(g[c].querySelector('header h4')),g[c].classList.add('validated');return f&&f.focus(),!1}return!0}function b(){for(var d=this,a=d.querySelectorAll('[data-no-disabled]'),b=0;b<a.length;b++)a[b].setAttribute('data-no-disabled','active'),a[b].setAttribute('disabled','')}function c(g){var a,b=this,c=b.querySelectorAll('[data-bind]');if(0!=c.length){a={};for(var h=0;h<c.length;h++)'input'==c[h].tagName.toLowerCase()?'radio'==c[h].type.toLowerCase()?c[h].checked&&(a[c[h].dataset.bind]=c[h].value):'checkbox'==c[h].type.toLowerCase()?a[c[h].dataset.bind]=!!c[h].checked:'file'==c[h].type.toLowerCase()?a[c[h].dataset.bind]=c[h].file:a[c[h].dataset.bind]=c[h].value:a[c[h].dataset.bind]=c[h].value;if(g){var e=[];for(var h in a)e.push(a[h]);return e}return a}}function d(k){var b=this;for(var l in k){var c=b.querySelectorAll('[data-bind="'+l+'"]');if(c[0])if('radio'==c[0].getAttribute('type')){var d;[].slice.call(c).filter((function(b){b.value.toString()==k[l].toString()&&(d=b)})),d&&(d.checked=!0)}else if('checkbox'==c[0].getAttribute('type'))for(var f=0;f<c.length;f++)for(var g=0;g<k[l].length;g++)c[f].value==k[l][g]&&(c[f].checked=!0);else if('file'==c[0].getAttribute('type'))continue;else if(c[0].fnGet){var h=c[0].bind,a=c[0].db.length?c[0].db:[c[0].db],i=a.fnFind((function(a){return a[h.id]==k[l]}));c[0].value=i[h.text],c[0].dataset.id=k[l]}else c[0].value=k[l]}}function e(h,a,i){h=h||this;var c=h.parentNode.parentNode;i&&(c=h);var d=c.querySelector('fieldset ul'),e=c.querySelector('h4');i||(c.classList.contains('active')&&!a?c.classList.remove('active'):!c.classList.contains('active')&&(c.classList.add('active'),c.setAttribute('data-active',''),setTimeout((function(){c.removeAttribute('data-active')}),500)));var j=c.classList.contains('active');d.style.marginTop=j?'0px':'-'+(d.offsetHeight+e.offsetHeight)+'px'}this.form=function(f){f.clean=h,f.isValid=a,f.setNoDisabled=b,f.set=d,f.get=c,e(f,!1,!1),f.querySelector('h4').addEventListener('click',(function(){e(this)}),!1),f.querySelector('ul').addEventListener('click',(function(){e(this,!0)}),!1)},this.showForm=e,this.initButtons=function(d){d&&!d.length&&(d=[d]);for(var a=d||document.querySelectorAll('a.button, button.button'),b=0;b<a.length;b++)a[b].addEventListener('click',(function(d){d.preventDefault();var a,b,h,e,f=$(this);a=f.find('.circle'),a.height()||a.width()||(b=Math.max(f.outerWidth(),f.outerHeight()),a.css({height:b,width:b})),h=d.pageX-f.offset().left-a.width()/2,e=d.pageY-f.offset().top-a.height()/2,a.css({top:e+'px',left:h+'px'}),a.addClass('animate'),setTimeout((function(){a.removeClass('animate')}),700)}),!1)},this.isDate=this.isDate||new RegExp(/(\d{4})-(\d{2})-(\d{2})T(\d{2})\:(\d{2})\:(\d{2})/),this.isNull=this.isNull||/^null$/,this.isTrue=this.isTrue||/^true$/,this.isFalse=this.isFalse||/^false$/,this.isZero=this.isZero||/^0$/,this.isHour=this.isHour||new RegExp(/^(0[1-9]|1\d|2[0-3]):([0-5]\d):([0-5]\d)$/)}).apply(jr.addNS('jforms'));