(function(){function a(a,b){var d,e,o=a.fragment,p=b.fragment,x=myApp.main.screen.type;o.querySelector('#btnMoveLeft').addEventListener('click',(function(){j.left()})),o.querySelector('#btnMoveRight').addEventListener('click',(function(){k.right()})),o.querySelector('#slOption').addEventListener('change',(function(a){l.moveTo(a.target.value)}),!1),d=p.querySelectorAll('.loading');for(var y=0;y<d.length;y++)jr.tools.fnDeleteTag(d[y]);e=p.querySelectorAll('.movie');for(var y=0;y<e.length;y++)e[y].dataset.type='movies',e[y].addEventListener('mouseover',c,!1);jr.replaceWith(b,o),jr.replaceWith(a),(!n||n&&n!=x)&&(n=x,r.maxElementsShow=q[n]),r.width=.81*myApp.main.screen.size,s.width=.72*myApp.main.screen.size,t.width=s.width,u.width=s.width,w.width=s.width,myApp.main.addCallbackResize(f),Promise.all([g=jr.jslide(r),h=jr.jslide(s),j=jr.jslide(t).right(),k=jr.jslide(u),l=jr.jslide(v),m=jr.jslide(w)]).then(myApp.main.showPage)}function b(a,b){var c={response:{result:[]}};a&&(a=JSON.parse(a),a.results.forEach((function(a){a.pathImage=p,a.backdrop_path||(a.backdrop_path=a.backdrop_path||Shows.config.noImage,a.pathImage=''),a.original_name=a.title,o.push(a)}))),c.response.result=Enumerable.from(o).skip(0).take(9).toArray(),b(c)}function c(){var a=this;a.classList.contains('load')||this.info||(a.classList.add('load'),a.innerHTML+='<span class="loading"></div>',d({id:a.dataset.id,control:a,type:a.dataset.type}))}function d(a){i[a.type].getById({id:a.id,append_to_response:'credits,season/1'},(function(b){e(a.control,JSON.parse(b))}),(function(){}))}function e(a,b){var c=a,d=c.querySelector('.actors'),e=c.querySelector('.loading'),f=document.createDocumentFragment(),g=3;if((b.pathImage=p,b.type=c.dataset.type,b.seasons&&(b.seasons=b.seasons.slice(1,b.seasons.length)),c.info=b,e&&e.parentNode.removeChild(e),!!b.credits)&&b.credits.cast){3>b.credits.cast.length&&(g=b.credits.cast.length);for(var h,j=0;j<g;j++)h=document.createElement('li'),h.textContent=b.credits.cast[j].name,f.appendChild(h);d.appendChild(f),c.classList.remove('load')}}function f(){var a=myApp.main.screen.type;(!n||n&&n!=a)&&(n=a,r.maxElementsShow=q[n]),r.width=.81*myApp.main.screen.size,s.width=.72*myApp.main.screen.size,t.width=s.width,u.width=s.width,v.width=s.width,w.width=s.width,g.resize(r),h.resize(s),j.resize(t).right(),k.resize(u),l.resize(v),m.resize(w)}var g,h,j,k,l,m,n,i,o=[],p=`http${jr.ssl?'s':''}://image.tmdb.org/t/p/w500/`,q={s:1,m:2,l:3},r={maxElementsShow:3,qSlide:'#movies'},s={maxElementsShow:4,qSlide:'#listExample'},t={maxElementsShow:4,qSlide:'#slideMoveLeft'},u={maxElementsShow:4,qSlide:'#slideMoveRight'},v={qSlide:'#slideMove'},w={maxElementsShow:4,qSlide:'#slideResize'};this.fnInit=function(){i=window.theMovieDb,i.common.api_key='eed2b8cfb00d33f1a2fa105f098f6aef',i.common.base_uri=`http${jr.ssl?'s':''}://api.themoviedb.org/3/`;var c={sort_by:'popularity.desc',page:1,query:''},d=new Promise((a,d)=>{i.discover.getMovies(c,(c)=>b(c,a),d)});return get({src:'views/view-jslide.html',query:'#wrapper',noAppend:!0},jr.compileHTML({src:'views/jslide/view-movies.html',query:'.movies',noAppend:!0,noFragment:!0},d)).spread(a,myApp.main.fnShowPage)}}).call(myApp.addNS('jslide'));