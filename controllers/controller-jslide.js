(function(){function a(){p=window.theMovieDb,p.common.api_key="eed2b8cfb00d33f1a2fa105f098f6aef",p.common.base_uri=`http${jr.ssl?"s":""}://api.themoviedb.org/3/`;var a={sort_by:"popularity.desc",page:1,query:""},d=new Promise((b,d)=>{p.discover.getMovies(a,a=>c(a,b),d)});return get({src:"views/view-jslide.html",query:"#wrapper",noAppend:!0},jr.compileHTML({src:"views/jslide/view-movies.html",query:".movies",noAppend:!0,noFragment:!0},d)).spread(b,myApp.main.fnShowPage)}function b(a,b){var c,e,f=a.fragment,p=b.fragment,q=myApp.main.screen.type;f.querySelector("#btnMoveLeft").addEventListener("click",function(){k.left()}),f.querySelector("#btnMoveRight").addEventListener("click",function(){l.right()}),f.querySelector("#slOption").addEventListener("change",function(a){m.moveTo(a.target.value)},!1),c=p.querySelectorAll(".loading");for(var r=0;r<c.length;r++)jr.tools.fnDeleteTag(c[r]);e=p.querySelectorAll(".movie");for(var r=0;r<e.length;r++)e[r].dataset.type="movies",e[r].addEventListener("mouseover",d,!1);jr.replaceWith(b,f),jr.replaceWith(a),(!o||o&&o!=q)&&(o=q,t.maxElementsShow=s[o]),t.width=.81*myApp.main.screen.size,u.width=.72*myApp.main.screen.size,v.width=u.width,w.width=u.width,y.width=u.width,myApp.main.addCallbackResize(g),Promise.all([h=jr.jslide(t),j=jr.jslide(u),k=jr.jslide(v).right(),l=jr.jslide(w),m=jr.jslide(x),n=jr.jslide(y)]).then(myApp.main.showPage)}function c(a,b){var c={response:{result:[]}};a&&(a=JSON.parse(a),a.results.forEach(function(a){a.pathImage=r,a.backdrop_path||(a.backdrop_path=a.backdrop_path||Shows.config.noImage,a.pathImage=""),a.original_name=a.title,q.push(a)})),c.response.result=Enumerable.from(q).skip(0).take(9).toArray(),b(c)}function d(){var a=this;a.classList.contains("load")||this.info||(a.classList.add("load"),a.innerHTML+="<span class=\"loading\"></div>",e({id:a.dataset.id,control:a,type:a.dataset.type}))}function e(a){p[a.type].getById({id:a.id,append_to_response:"credits,season/1"},function(b){f(a.control,JSON.parse(b))},function(){})}function f(a,b){var c=a,d=c.querySelector(".actors"),e=c.querySelector(".loading"),f=document.createDocumentFragment(),g=3;if((b.pathImage=r,b.type=c.dataset.type,b.seasons&&(b.seasons=b.seasons.slice(1,b.seasons.length)),c.info=b,e&&e.parentNode.removeChild(e),!!b.credits)&&b.credits.cast){3>b.credits.cast.length&&(g=b.credits.cast.length);for(var h,j=0;j<g;j++)h=document.createElement("li"),h.textContent=b.credits.cast[j].name,f.appendChild(h);d.appendChild(f),c.classList.remove("load")}}function g(){var a=myApp.main.screen.type;(!o||o&&o!=a)&&(o=a,t.maxElementsShow=s[o]),t.width=.81*myApp.main.screen.size,u.width=.72*myApp.main.screen.size,v.width=u.width,w.width=u.width,x.width=u.width,y.width=u.width,h.resize(t),j.resize(u),k.resize(v).right(),l.resize(w),m.resize(x),n.resize(y)}var h,j,k,l,m,n,o,p,q=[],r=`http${jr.ssl?"s":""}://image.tmdb.org/t/p/w500/`,s={s:1,m:2,l:3},t={maxElementsShow:3,qSlide:"#movies"},u={maxElementsShow:4,qSlide:"#listExample"},v={maxElementsShow:4,qSlide:"#slideMoveLeft"},w={maxElementsShow:4,qSlide:"#slideMoveRight"},x={qSlide:"#slideMove"},y={maxElementsShow:4,qSlide:"#slideResize"};this.fnInit=a}).call(myApp.addNS("jslide"));