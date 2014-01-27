importScripts('../hogan-2.0.0.min.js');
self.addEventListener("message", function (e) {
    var data = e.data;
    var template = Hogan.compile(data.compile);
    self.postMessage(template.render(data.data));
});