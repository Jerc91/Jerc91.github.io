self.importScripts("../vendor/compiler.js"),self.addEventListener("message",(function(a){try{self.postMessage(self.Hogan.compile(a.data.template).render(a.data.data))}catch(a){}}));