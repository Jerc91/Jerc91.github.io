(function(){function e(){get([{src:y.js[1]},{src:y.js[2]},{src:y.js[3]},{src:"views/jslide/view-movies.html",then:function(e){v=e.data}},{src:"views/view-jslide.html",then:myApp.main.fnSetHTML,query:"#wrapper"}]).then(t)}function t(){myApp.main.fnShowPage();var e={sort_by:"popularity.desc",page:1,query:""};theMovieDb.common.api_key="eed2b8cfb00d33f1a2fa105f098f6aef",theMovieDb.common.base_uri="http"+h+"://api.themoviedb.org/3/",theMovieDb.discover.getMovies(e,n,function(){});var t=document.querySelector("#btnMoveLeft");t.addEventListener("click",function(){d.fnMoveLeft()},!1);var s=document.querySelector("#btnMoveRight");s.addEventListener("click",function(){c.fnMoveRight()},!1);var o=document.querySelector("#slOption");o.addEventListener("change",function(){f.fnMoveTo(this.value)},!1)}function n(e){e&&(e=JSON.parse(e),e.results.forEach(function(e){e.pathImage=u,e.backdrop_path||(e.backdrop_path=e.backdrop_path||Shows.config.noImage,e.pathImage=""),e.original_name=e.title,p.push(e)}));for(var t=document.querySelectorAll(".loading"),n=0;n<t.length;n++)j.tools.fnDeleteTag(t[n]);$(".movies > div").fadeOut("fast",function(){$(this).remove()});var o=Enumerable.from(p).skip(0).take(9).toArray();document.querySelector(".movies").innerHTML+=Handlebars.compile(v)({result:o});for(var i=document.querySelectorAll(".movies li:not(.actor)"),n=0;n<i.length;n++)i[n].dataset.type="movies",i[n].addEventListener("mouseover",s,!1);0==$(".movies li").length&&$(".movies").append("<div>No hay resultados</div>"),window.addEventListener("resize",a,!1),a()}function s(e){var t=this;t.classList.contains("load")||this.info||(t.classList.add("load"),t.innerHTML+='<span class="loading"></div>',o({id:t.dataset.id,fnCall:i,control:t,type:t.dataset.type}))}function o(e){theMovieDb[e.type].getById({id:e.id,append_to_response:"credits,season/1"},function(t){e.fnCall.call(e.control,JSON.parse(t))},function(){})}function i(e){var t=this;e.pathImage=u,e.type=t.dataset.type,e.seasons&&(e.seasons=e.seasons.slice(1,e.seasons.length)),t.info=e;var n=t.querySelector(".actors"),s=t.querySelector(".loading");if(s&&s.parentNode.removeChild(s),e.credits&&e.credits.cast){var o=document.createDocumentFragment(),i=3;e.credits.cast.length<3&&(i=e.credits.cast.length);for(var a=0;a<i;a++){var r=document.createElement("li");r.innerHTML=e.credits.cast[a].name,o.appendChild(r)}n.appendChild(o),t.classList.remove("load")}}function a(){var e={s:1,m:2,l:3},t=myApp.main.fnGetSize(!0);(!m||m&&m!=t)&&(m=t,g.maxElementsShow=e[m]),g.width=document.querySelector(".methods").offsetWidth,S.width=document.querySelector("#fnInit .jslide").offsetWidth,q.width=document.querySelector("#fnMoveLeft .jslide").offsetWidth,M.width=document.querySelector("#fnMoveRight .jslide").offsetWidth,b.width=document.querySelector("#fnMoveTo .jslide").offsetWidth,r=r||j.jslide.fnGetInstance(),r.fnInit(g),l=l||j.jslide.fnGetInstance(),l.fnInit(S),d=d||j.jslide.fnGetInstance(),d.fnInit(q),c=c||j.jslide.fnGetInstance(),c.fnInit(M),c.fnMoveLeft(),f=f||j.jslide.fnGetInstance(),f.fnInit(b)}var r,l,d,c,f,m,p=[],v={},h=ssl?"s":"",u="http"+h+"://image.tmdb.org/t/p/w500/",y={js:["controllers/controller-jtools.js","assets/js/controls/jslide.js","assets/js/vendor/themoviedb.min.js","assets/js/vendor/linq.js"],ns:["myApp.jslide","theMovieDb","Enumerable"]},g={buttons:!0,list:9,maxElementsShow:3,name:"main",qSlide:".jslide",qWrapper:".wrapperMovies"},S={buttons:!0,list:12,maxElementsShow:4,name:"fnInit",qSlide:".jslide",qWrapper:"#fnInit"},q={buttons:!0,list:12,maxElementsShow:4,name:"fnMoveLeft",qSlide:".jslide",qWrapper:"#fnMoveLeft"},M={buttons:!0,list:12,maxElementsShow:4,name:"fnMoveRight",qSlide:".jslide",qWrapper:"#fnMoveRight"},b={buttons:!0,list:12,maxElementsShow:1,name:"fnMoveTo",qSlide:".jslide",qWrapper:"#fnMoveTo"};this.fnInit=e,myApp.main.currentInfo=y}).call(myApp.fnAddNS("jslide"));var jslide=myApp.jslide;jslide.fnInit();