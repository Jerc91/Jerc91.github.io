self.importScripts('/assets/js/workers/requester-tools.js'),self.requester={},function(){function l(){function e(c){return b=c}return i?Promise.resolve():caches.keys().then((g)=>Promise.all(g.map((b,a)=>{if(b!==d)return caches.delete(g[a])})).then(()=>caches.has(d).then((a)=>{let b=caches.open(d);return a?b.then(e):b.then((a)=>e(a).addAll(f))}).then(()=>i=!0))).catch(self.tools.error)}function a(c){self.clients.matchAll().then((function(a){a.forEach((function(a){m(a,c)}))}))}function m(f,a){return new Promise(function(b,c){var d=new MessageChannel;d.port1.onmessage=function(d){d.data.error?c(d.data.error):b(d.data)},f.postMessage('SW Says: \''+a+'\'',[d.port2])})}let b,d=self.tools.constants.CACHE_VERSION||'0.0.1',e=self.tools.constants.HEADER_JR,c=self.tools.constants.FILESTOUPDATE,f=['assets/fonts/fontawesome-webfont.ttf','assets/fonts/fontawesome-webfont.woff2','assets/fonts/roboto/Roboto-Light.ttf','assets/fonts/roboto/Roboto-Light.woff2','assets/js/jmain.js','assets/js/workers/requester-worker.js','assets/js/workers/requester-tools.js','scripts/app.js','favicon.ico','index.html'],h='',i=!1,j=[];j=location.href.split('/'),h=j.splice(0,j.length-1).join('/'),h+='/',self.tools.factoryError(a),this.install=function(a){var b;b=l().then((function(){return self.skipWaiting()})).catch(self.tools.error),a.waitUntil(b)},this.activate=function(a){var b=l().then((function(){return self.clients.claim()})).catch(self.tools.error);a.waitUntil(b)},this.fetch=function(d){if(d.request.headers.has(e))return d.request.headers.remove(e),d.respondWith(fetch(d.request));if(!d.request.url.startsWith(self.location.origin))return d.respondWith(fetch(d.request.url,{mode:'cors'}));let a=l().then((function(){let b,c=d.request,e=c.url.replace(h,'');return b=e&&!e.includes('#!')&&e.indexOf('?')?e:'index.html',self.tools.getFile({src:b,fromFetch:!0})}));return d.respondWith(a)},this.message=function(d){return navigator.onLine||d.data.src!=c?self.tools.getFile(d.data).then((function(a){return d.ports[0].postMessage(a)}),(function(a){return d.ports[0].postMessage(a)})):d.ports[0].postMessage({result:[],path:c,observedId:d.data.observedId})},this.error=a}.call(self.requester),self.addEventListener('install',self.requester.install),self.addEventListener('activate',self.requester.activate),self.addEventListener('fetch',self.requester.fetch),self.addEventListener('message',self.requester.message);