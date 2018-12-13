"use strict";(function(){function a(a){function b(a){var b=this===window?{}:this;a&&a.indexOf(".")&&a.split(".").forEach(function(a){b=b.addNS(a)})}return b.prototype.addNS=function(a,c){if(a)return a.match(window.validateNS)?("undefined"==typeof this[a]&&(c&&!c.hasOwnProperty("addNS")?(c.addNS=b.prototype.addNS,this[a]=c):this[a]=new b),this[a]):void 0},a?(a.hasOwnProperty("addNS")||(a.addNS=b.prototype.addNS),a):new b}function b(a,b){for(var c,d=window,e=a.split("."),f=e.length,g=f-1,h=0;h<f;h++)c=d,d=d[e[h]];return b&&(c[e[g]]=null,delete c[e[g]]),d}function c(a){var b,c,d,e,f,g=a||location.search,h=g.indexOf("?");if(-1==g.indexOf("?"))return{};b=g.substr(h+1).split("&"),f=b.length,c={};for(var j=0;j<f;++j)d=b[j].substring(0,b[j].indexOf("=")),e=b[j].substring(b[j].indexOf("=")+1,b[j].length),c[d]=decodeURIComponent(e.replace(/\+/g," "));return c}function d(){function a(){let c=arguments.length;for(let d=0;d<c;d++)arguments[d]=arguments[d]instanceof Array?Promise.all(arguments[d].map(b=>b instanceof Array?a(...b):a(b))):b(arguments[d]);return 1==c?arguments[0]:Promise.all(arguments)}function b(a){return a instanceof Promise?a:(++g,p.sendRequest(a,c))}function c(a){let b,c,d;if(++i,a&&a.fragment&&(h(a,f,j),j=!1),f.hasChildNodes()&&i==g){b=f.querySelectorAll("[data-j-parent]"),c=b.length;for(let a=0;a<c;a++)d=document.querySelector(b[a].dataset.jParent),d&&(d.firstElementChild?d.firstElementChild.replaceWith(b[a]):d.appendChild(b[a]));u.appendChild(f)}}let d=arguments.length,e=arguments,f=document.createDocumentFragment(),g=0,i=0,j=!0;return new Promise(function(b,c){a(...e).then(function(){b(...arguments)},a=>{let b={error:a.error};return l(s)&&n(s,b),c(b)})})}function e(a,b,c,d){function e(){var e=a.result instanceof Blob&&!/blob|text/.test(b.mime),f={request:b,response:e?URL.createObjectURL(a.result):a.result},h=/^css|js$/gi.exec(a.ext);if(h&&e)g({href:f.response,type:h[0],name:b.src,repeatTag:b.repeatTag,referenceTag:b.referenceTag,addFragment:a=>{let b=document.createDocumentFragment();b.appendChild(a),f.fragment=b,d(f)}}).then(function(){n(r,f),c(f)});else{if((f.request.query||f.request.noAppend)&&!f.request.noFragment){let a=i(f.response);Object.assign(f,{fragment:a}),f.request.noAppend||d(f)}else d(f);n(r,f),c(f)}}let f=performance.now();10<f-b.start?requestAnimationFrame(e):e()}function f(a,b){let c;return"string"==typeof a||a instanceof String?{src:a.toString(),useFS:jr.useFileSystem}:b?(c=JSON.parse(JSON.stringify(a)),c.useFS=jr.useFileSystem,c):(a.useFS=jr.useFileSystem,a)}function g(a={}){return new Promise(function(b,d){var e,f,g,h;if(!a.repeatTag&&a.referenceTag){var i=("js"==a.type?"script":"link")+"[data-name=\""+a.name+"\"]";document.querySelector(i)&&b({})}switch(a.type){case"js":e=document.createElement("script"),e.src=a.href,e.async=!0;break;case"css":e=document.createElement("link"),e.href=a.href,e.rel="stylesheet";}a.referenceTag&&(g=a.name,h=g.indexOf("?"),-1<h&&(g=g.substring(0,h)),e.dataset.name=g),a.name&&(f=c(a.name),Object.keys(f).forEach(a=>e.setAttribute(a,f[a]))),e.addEventListener("load",b,!1),e.addEventListener("error",d,!1),a.addFragment?a.addFragment(e):u.appendChild(e)})}function h(a,b,c){var d=b?b.querySelector(a.request.query):void 0,e=a.request.query;a.fragment&&(d&&d.firstElementChild?d.firstElementChild.replaceWith(a.fragment):d&&!d.firstElementChild?d.appendChild(a.fragment):!d&&e&&c?(a.fragment.firstElementChild.dataset.jParent=e,b.appendChild(a.fragment)):d||!e||c?u.appendChild(a.fragment):(d=document.querySelector(e),d.firstElementChild?d.firstElementChild.replaceWith(a.fragment):d.appendChild(a.fragment)))}function i(a){return document.createRange().createContextualFragment(a)}function j(){var a=document.currentScript,b=Object.assign({useSW:!0},a.dataset);jr.useFileSystem=b.useFS,b.workersCount&&(jr.workersCount=parseInt(b.workersCount)),jr.requesterWorkerPath=b.requesterWorkerPath||"assets/js/workers/requester-worker.js",jr.serviceWorkerPath=b.serviceWorkerPath||"./service-worker.js",p=jr.serviceWorker,p.init().then(function(){u.id||(u.id="dvContainerJGet"),g({href:b.init,type:"js"}),document.body.hasChildNodes(u)||document.body.appendChild(u)},o)}function k(a){var b={getToWindow:!0,useFS:!1,workersCount:0};return Object.assign(b,a),jr.useFileSystem=b.useFS,q=b.cbStartRequest||q,r=b.cbEndRequest||r,s=b.cbErrorRequest||s,w=b.workersCount,b.getToWindow&&(window.get=d),p.init().then(function(){if(b.packages)return jr.service=v.serviceLocator,jr.service(b.packages)})}function l(a){return"[object Function]"==Object.prototype.toString.call(a)}function m(){var a,b=arguments.length;if(1<b){a=[];for(var c=1;c<b;c++)a[a.length]=arguments[c]}return a}function n(a){var b=m(...arguments);if(l(a))return b?a(...b):a(b)}function o(a){window.console.log("Error: ",a.message||a)}var p,q,r,s,t,u=document.querySelector(`#${"dvContainerJGet"}`)||document.createElement("div"),v=new a,w=0;window.jr=new a(k),Object.defineProperty(jr,"workersCount",{set:a=>{w=a,w||p.deleteWorkers()},get:()=>w}),Promise.prototype.spread||(Promise.prototype.spread=function(a){return this.then(function(b){return b instanceof Array?a(...b):a(b)})}),function(){function a(){function a(a){b.observador.notify(a.data.observedId,a).remove(a.data.observedId)}let b;return i.size<jr.workersCount&&(b=new Worker(jr.requesterWorkerPath),b.observador=v.observer,b.addEventListener("message",a,!1),b.addEventListener("error",a,!1),i.set(i.size,b)),j>=i.size&&(j=0),b=i.get(j),j++,b}function b(b,c){let d=f(b,!0);return d.filesServerToUpdate=t,d.start=performance.now(),new Promise(function(f,g){var h,i;h=v.command.on("message",e).on("error",g),i=a(),d.observedId=i.observador.add(function(a){h.trigger(a.type,a.data,b,f,c)}),n(q,d),i.postMessage(d)}).then(function(a){return n(b.then,a),a},function(a){return d.error=a,n(b.catch,d),Promise.reject(d)})}function c(){return h?Promise.resolve(h):navigator.serviceWorker.getRegistration().then(a=>h=a)}function d(a,b){c().then(c=>{let d=new MessageChannel;d.port1.onmessage=a=>b(a.data),c.active.postMessage(a,[d.port2])})}function g(){return k?Promise.resolve():(k=!0,Promise.all([navigator.serviceWorker.register(jr.serviceWorkerPath,{scope:"./"}),navigator.serviceWorker.ready]).then(function(a){return jr.dev&&void 0,navigator.onLine?a[0].update():Promise.resolve()},o).then(function(){return navigator.serviceWorker.addEventListener("message",function(a){o("Mensaje recibido del SW: ",JSON.stringify(a.data))}),new Promise(a=>{d({command:"filesToUpdate"},b=>a(t=b))})},o))}var h,i=new Map,j=0,k=!1;this.sendRequest=function(a,c){if(jr.workersCount)return b(a,c);let g=f(a,!0);return g.command="request",g.start=performance.now(),new Promise((a,b)=>{n(q,g),d(g,d=>"string"==typeof d?(c(),void b(d)):void e(d,g,a,c))}).then(function(b){return n(a.then,b),b},function(b){return g.error=b,n(a.catch,g),Promise.reject(g)})},this.sendMessageToSW=d,this.deleteWorkers=function(){if(i&&i.size){let a=i.keys();for(let b of a)i.get(b).terminate(),i.delete(b)}},this.init=g}.call(jr.addNS("serviceWorker")),Array.prototype.sortBy=function(a){for(var b,c=this.length;c;)b=this[--c],this[c]=[].concat(a.call(b,b,c),b);this.sort(function(c,a){for(var b=0,d=c.length;b<d;++b)if(c[b]!=a[b])return c[b]<a[b]?-1:1;return 0});for(var c=this.length;c;)this[--c]=this[c][this[c].length-1];return this},function(){window.addEventListener("beforeinstallprompt",function(a){a.userChoice.then(function(a){void 0,"dismissed"==a.outcome,void 0})})}(),function(){var a=this;(function(){function b(){var a={},b=this;return b.on=function(c,d){return a[c]=function(){return n(d,...arguments),b},b},b.off=function(c){return delete a[c],b},b.trigger=function(c){let d=m(...arguments)||[];return n(a[c],...d),b},b}Object.defineProperty(a,"command",{get:()=>new b})})(),function(){function b(){var a=new Map,b=this;return b.add=function(b){var d=new c(b);return a.set(d.id,d),d.id},b.remove=function(c){return a.delete(c),b},b.notify=function(c){return a.has(c)&&a.get(c).update(...m(...arguments)),b},b}function c(a){this.update=function(){return n(a,...arguments),this},this.id=++d}var d=0;Object.defineProperty(a,"observer",{get:()=>new b})}(),function(){function a(){function a(e){var f="string"==typeof e?e:e.name,j=h.get(f)||e;if(!j.paths)throw"Package does not have any path: "+e;return new Promise(function(e,k){var l,m;g.has(f)?l=Promise.resolve({response:g.get(f)}):(m=[],j.dependencies&&j.dependencies.forEach(b=>{i.has(b)||(i.set(b,a(b)),m.push(i.get(b)))}),!i.has(j.name)&&i.set(j.name,Promise.all(m).then(()=>d(j.paths))),l=i.get(j.name)),l.then(function(a){var d=[];(h.has(f)?Promise.resolve():c([a.response])).then(function(){j=h.get(f),j.namespaces.forEach(function(a){d.push(b(a))}),g.set(f,d),e(d)})},k)})}function c(a){var b="string"==typeof a?d(a):Promise.resolve({response:a});return b.then(function(a){a.response instanceof Array||(a.response=[a.response]),a.response.forEach(a=>{h.has(a.name)||h.set(a.name,{name:a.name,paths:a.paths,namespaces:a.namespaces,dependencies:a.dependencies})})})}function e(b){return"string"==typeof b?/.+(\.|\/).+/.test(b)?c(b):a(b):"object"==typeof b?c(b):b instanceof Array?c(b):void 0}var f=this,g=new Map,h=new Map,i=new Map;return e.remove=function(a){var c="string"==typeof a?a:a.name,d=h.get(c)||a;return d&&(d.namespaces&&d.namespaces.forEach(a=>b(a,!0)),d.paths&&d.paths.forEach(a=>{var b=document.querySelector(`[data-name="${a}"]`);b&&b.parentNode.removeChild(b)})),g.delete(a),i.delete(a),Promise.resolve()},e}Object.defineProperty(v,"serviceLocator",{get:()=>new a})}(),this.addNS("singleton",function(a,b){return a&&a.singletonInstance?a:l(b)?(a=b(),Object.defineProperty(a,{value:!0}),a.singletonInstance=!0,a):void 0})}.call(v),jr.isFunction=l,jr.parametersWithoutFirst=m,jr.execFunction=n,jr.errorHandler=o,jr.getQuerys=c,jr.insertAfter=function(a,b){a.parentNode.insertBefore(b,a.nextSibling)},jr.deleteTag=function(a){a&&a.parentNode.removeChild(a)},jr.parseJsonDate=function(a){var b=6e4*new Date().getTimezoneOffset(),c=/\/Date\((-?\d+)([+-]\d{2})?(\d{2})?.*/.exec(a);return null==c[2]&&(c[2]=0),null==c[3]&&(c[3]=0),new Date(+c[1]+b+36e5*c[2]+6e4*c[3])},jr.now=function(){var a=new Date;return a.getFullYear()+"-"+(a.getMonth()+1)+"-"+(a.getDay()-1)+" "+a.getHours()+":"+a.getMinutes()},jr.namespace=a,jr.import=b,jr.replaceWith=h,jr.compileHTML=function(){function a(b){function c(a,b){var c="string"==typeof b.response;c?d[d.length]=b:Object.assign(a,b.response)}for(var d=[],e=jr.parametersWithoutFirst(...arguments)||[],f=e.length,g=0;g<f;g++)e[g]instanceof Array?e[g].forEach(c=>{var e=a(b,c);e.length&&(d[d.length]=e)}):c(b,e[g]);return d}function b(a){var d=jr.parametersWithoutFirst(...arguments)||[],e=d.map(d=>d instanceof Array?b(a,...d):c(a,d));return 1<d.length?Promise.all(e):e[0]}function c(a,b){return new Promise(c=>{var d=new Worker("assets/js/workers/compiler-worker.js");d.addEventListener("message",a=>{d.terminate(),c(Object.assign(b,{response:a.data,fragment:i(a.data)}))},!1),d.postMessage({template:b.response,data:a})})}return get(...arguments).spread(function(){var c={};return b(c,...a(c,...arguments))})},jr.get=d,jr.tagScriptLink=g,jr.patterns=v,jr.validateNS=/^[a-zA-Z]?[a-zA-z0-9]+$/,jr.countTags=0,jr.ssl=-1<location.origin.indexOf("https"),jr.dev="localhost"===location.hostname||"127.0.0.1"===location.hostname,jr.lang=document.querySelector("html").getAttribute("lang"),j()})(window);