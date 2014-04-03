self.addEventListener("message", function (e) {
	var r = e.data;
	var iframe = '../../../iframe.html?urliframe=';
 	var xhr = new XMLHttpRequest();
    xhr.open("GET", iframe + r.url, false); 
    xhr.send();                
    if (xhr.status !== 200) 
    	throw Error(xhr.status + " " + xhr.statusText + ": " + r.url);
    self.postMessage(xhr.responseText);
}, false);
