(this.webpackJsonpfrontend=this.webpackJsonpfrontend||[]).push([[0],{104:function(e,t,n){"use strict";n.r(t);var a=n(1),s=n(2),r=n.n(s),c=n(24),i=n.n(c),o=n(8),l=n(12),p=n(21),u=n(46),d=n(47),j=n(20),h=n(9),b="LOADING_RESULTS",m="GET_RESULTS",g="CLEAR_RESULTS",O="LOADING_MOVIE",v="GET_MOVIE",x="CLEAR_MOVIE",f="GET_RANDOM_MOVIE",y="GET_MOVIES",N="CLEAR_MOVIES",k="LOADING_GENRES",w="GET_GENRES",M="CLEAR_GENRES",G="LOADING_GENRE",_="GET_GENRE",L="CLEAR_GENRE",C={results:[],page:0,nextPage:"",count:0,areLoading:!1,loadingMore:!1},E={movie:{},isLoading:!1,random_movie:0,movies:[],page:0,nextPage:"",count:0},S={genres:[],areLoading:!1,loadingMore:!1,page:0,nextPage:"",count:0,genre:{},isLoading:!1},R=Object(p.combineReducers)({search:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:C,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case b:return Object(h.a)(Object(h.a)({},e),{},{areLoading:0===e.page,loadingMore:e.page>0});case m:return Object(h.a)(Object(h.a)({},e),{},{results:[].concat(Object(j.a)(e.results),Object(j.a)(t.payload.results)),page:e.page+1,nextPage:t.payload.next,count:t.payload.count,areLoading:!1,loadingMore:!1});case g:return Object(h.a)({},C);default:return e}},movies:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:E,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case O:return Object(h.a)(Object(h.a)({},e),{},{isLoading:!0});case v:return Object(h.a)(Object(h.a)({},e),{},{movie:t.payload,isLoading:!1});case x:return Object(h.a)(Object(h.a)({},e),{},{movie:{},isLoading:!1});case f:return Object(h.a)(Object(h.a)({},e),{},{random_movie:t.payload.id});case y:return Object(h.a)(Object(h.a)({},e),{},{movies:[].concat(Object(j.a)(e.movies),Object(j.a)(t.payload.results)),page:e.page+1,nextPage:t.payload.next,count:t.payload.count,areLoading:!1});case N:return Object(h.a)(Object(h.a)({},e),{},{movies:[],areLoading:!1,page:0,nextPage:"",count:0});default:return e}},genres:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:S,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case k:return Object(h.a)(Object(h.a)({},e),{},{areLoading:0===e.page,loadingMore:e.page>0});case w:return Object(h.a)(Object(h.a)({},e),{},{genres:[].concat(Object(j.a)(e.genres),Object(j.a)(t.payload.results)),page:e.page+1,nextPage:t.payload.next,count:t.payload.count,areLoading:!1,loadingMore:!1});case M:case L:return Object(h.a)({},S);case G:return Object(h.a)(Object(h.a)({},e),{},{isLoading:!0});case _:return Object(h.a)(Object(h.a)({},e),{},{genre:t.payload,isLoading:!1});default:return e}}}),A=[d.a],D=Object(p.createStore)(R,{},Object(u.composeWithDevTools)(p.applyMiddleware.apply(void 0,A))),P=(n(67),n(4)),T=n(5),U=n(7),I=n(6),z=(n(68),n(69),n.p+"static/media/logo.00d1e1db.png"),V=function(e){Object(U.a)(n,e);var t=Object(I.a)(n);function n(){return Object(P.a)(this,n),t.apply(this,arguments)}return Object(T.a)(n,[{key:"render",value:function(){return Object(a.jsx)("img",{src:z,alt:"logo",width:"140",height:"30",className:"d-inline-block align-top"})}}]),n}(s.Component),q=n(32),W=n(17),F=n.n(W),B=function(e){Object(U.a)(n,e);var t=Object(I.a)(n);function n(){var e;Object(P.a)(this,n);for(var a=arguments.length,s=new Array(a),r=0;r<a;r++)s[r]=arguments[r];return(e=t.call.apply(t,[this].concat(s))).state={throw:!0},e._toggleDice=function(){e.setState({throw:!e.state.throw}),e.props.getRandomMovie()},e}return Object(T.a)(n,[{key:"componentDidMount",value:function(){this.props.getRandomMovie()}},{key:"render",value:function(){var e=this.props.size;return Object(a.jsx)("div",{children:Object(a.jsx)(o.b,{className:"nav-link text-white",to:"/movies/".concat(this.props.random_movie),onClick:this._toggleDice,children:this.state.throw?Object(a.jsx)(q.b,{size:e}):Object(a.jsx)(q.a,{size:e})})})}}]),n}(s.Component),J=Object(l.b)((function(e){return{random_movie:e.movies.random_movie}}),{getRandomMovie:function(){return function(e){F.a.get("".concat("https://animatrix-app.herokuapp.com","/api/movies/random/")).then((function(t){e({type:f,payload:t.data})})).catch((function(e){}))}}})(B),H=function(e){Object(U.a)(n,e);var t=Object(I.a)(n);function n(){return Object(P.a)(this,n),t.apply(this,arguments)}return Object(T.a)(n,[{key:"render",value:function(){var e=this.props.location.pathname;return Object(a.jsxs)("ul",{className:"navbar-nav",children:[Object(a.jsx)("li",{className:"nav-item ml-4 ".concat("/"===e?"font-weight-bold":""),children:Object(a.jsx)(o.b,{className:"nav-link text-white",to:"/",children:"Home"})}),Object(a.jsx)("li",{className:"nav-item ml-4 ".concat("/movies"===e?"font-weight-bold":""),children:Object(a.jsx)(o.b,{className:"nav-link text-white",to:"/movies",children:"Animated Shorts"})}),Object(a.jsx)("li",{className:"nav-item ml-4 ".concat("/genres"===e?"font-weight-bold":""),children:Object(a.jsx)(o.b,{className:"nav-link text-white",to:"/genres",children:"Genres"})}),Object(a.jsx)("li",{className:"nav-item ml-4",children:Object(a.jsx)(J,{size:24})})]})}}]),n}(s.Component),Y=n(48),K=function(e){Object(U.a)(n,e);var t=Object(I.a)(n);function n(){var e;Object(P.a)(this,n);for(var a=arguments.length,s=new Array(a),r=0;r<a;r++)s[r]=arguments[r];return(e=t.call.apply(t,[this].concat(s))).state={query:""},e._handleChange=function(t){e.setState({query:t.target.value})},e}return Object(T.a)(n,[{key:"render",value:function(){return Object(a.jsx)("form",{className:"form-inline my-2 my-lg-0",children:Object(a.jsxs)("div",{className:"input-group",children:[Object(a.jsx)("input",{className:"form-control rounded-0 text-white border-right-0 d-none d-sm-block",type:"search",placeholder:"Search by title, description or genre... ",onChange:this._handleChange,style:{backgroundColor:"black",width:340}}),Object(a.jsx)("input",{className:"form-control rounded-0 text-white border-right-0 d-block d-sm-none",type:"search",placeholder:"Search... ",onChange:this._handleChange,style:{backgroundColor:"black",width:120}}),Object(a.jsx)("div",{className:"input-group-append",children:Object(a.jsx)(o.b,{to:"/search/".concat(this.state.query),children:Object(a.jsx)("button",{className:"btn text-white border-left-0 rounded-0",style:{borderColor:"#ced4da"},children:Object(a.jsx)(Y.a,{size:20})})})})]})})}}]),n}(s.Component),Q=function(e){Object(U.a)(n,e);var t=Object(I.a)(n);function n(){return Object(P.a)(this,n),t.apply(this,arguments)}return Object(T.a)(n,[{key:"render",value:function(){return Object(a.jsxs)("nav",{className:"navbar navbar-expand-lg sticky-top",style:{backgroundColor:"black"},children:[Object(a.jsx)(o.b,{className:"navbar-brand ml-lg-4",to:"/",children:Object(a.jsx)(V,{})}),Object(a.jsx)("div",{className:"collapse navbar-collapse",children:Object(a.jsx)(H,Object(h.a)({},this.props))}),Object(a.jsx)(K,{})]})}}]),n}(s.Component),X=n(49),Z=n(50),$=n(25),ee=function(e){Object(U.a)(n,e);var t=Object(I.a)(n);function n(){return Object(P.a)(this,n),t.apply(this,arguments)}return Object(T.a)(n,[{key:"render",value:function(){var e=this.props.location.pathname;return Object(a.jsxs)("nav",{className:"navbar navbar-expand-sm fixed-bottom d-lg-none text-white row text-center",style:{backgroundColor:"black"},children:[Object(a.jsx)("div",{className:"col ".concat("/"===e?"text-success":""),children:Object(a.jsx)(o.b,{to:"/",children:Object(a.jsx)(X.a,{size:24})})}),Object(a.jsx)("div",{className:"col ".concat("/movies"===e?"text-success":""),children:Object(a.jsx)(o.b,{to:"/movies",children:Object(a.jsx)(Z.a,{size:24})})}),Object(a.jsx)("div",{className:"col ".concat("/genres"===e?"text-success":""),children:Object(a.jsx)(o.b,{to:"/genres",children:Object(a.jsx)($.b,{size:25})})}),Object(a.jsx)("div",{className:"col",children:Object(a.jsx)(J,{size:25})})]})}}]),n}(s.Component),te=n(11),ne=function(e){Object(U.a)(n,e);var t=Object(I.a)(n);function n(){return Object(P.a)(this,n),t.apply(this,arguments)}return Object(T.a)(n,[{key:"render",value:function(){var e=this.props.src;return Object(a.jsx)("iframe",{width:"100%",height:"480",title:"video",src:e,frameBorder:"0",allow:"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture",allowFullScreen:!0})}}]),n}(s.Component),ae=function(e){Object(U.a)(n,e);var t=Object(I.a)(n);function n(){var e;Object(P.a)(this,n);for(var a=arguments.length,s=new Array(a),r=0;r<a;r++)s[r]=arguments[r];return(e=t.call.apply(t,[this].concat(s))).state={imgSrc:e.props.thumbnail},e}return Object(T.a)(n,[{key:"render",value:function(){var e=this.props,t=e.id,n=e.title;return Object(a.jsxs)(o.b,{to:"/movies/".concat(t),className:"",children:[Object(a.jsx)("div",{className:"overflow",children:Object(a.jsx)("img",{src:this.state.imgSrc,alt:"thumbnail",className:"img-fluid movie-img"})}),Object(a.jsx)("p",{className:"mt-2",children:n})]})}}]),n}(s.Component),se=n(52),re=n(51),ce=n.n(re),ie=(n(103),{superLargeDesktop:{breakpoint:{max:4e3,min:3e3},items:5,slidesToSlide:5,partialVisibilityGutter:10},desktop:{breakpoint:{max:3e3,min:1024},items:5,slidesToSlide:5,partialVisibilityGutter:10},tablet:{breakpoint:{max:1024,min:464},items:4,slidesToSlide:4,partialVisibilityGutter:12},mobile:{breakpoint:{max:464,min:0},items:2,slidesToSlide:2,partialVisibilityGutter:15}}),oe=function(e){Object(U.a)(n,e);var t=Object(I.a)(n);function n(){var e;Object(P.a)(this,n);for(var s=arguments.length,r=new Array(s),c=0;c<s;c++)r[c]=arguments[c];return(e=t.call.apply(t,[this].concat(r))).state={movies:[],loading:!0},e._getMovies=function(t){null!==t?F.a.get("".concat("https://animatrix-app.herokuapp.com","/api/genres/").concat(t,"/movies")).then((function(t){e.setState({movies:t.data.results}),e.setState({loading:!1})})).catch((function(e){})):F.a.get("".concat("https://animatrix-app.herokuapp.com","/api/movies/last_movies")).then((function(t){e.setState({movies:t.data}),e.setState({loading:!1})})).catch((function(e){}))},e._renderMovies=function(){return e.state.movies.map((function(e){return Object(a.jsx)("div",{className:"col pr-0",children:Object(a.jsx)(ae,{id:e.id,thumbnail:e.thumbnail,gif:e.gif,title:e.title})},e.id)}))},e}return Object(T.a)(n,[{key:"componentDidMount",value:function(){this._getMovies(this.props.id)}},{key:"render",value:function(){var e=this.props,t=e.title,n=e.seeAllUrl,s=Object(a.jsxs)("div",{className:"mb-2",children:[Object(a.jsx)(o.b,{to:n,children:Object(a.jsxs)("h5",{className:"mb-3 hiden-label-container",children:[t,Object(a.jsxs)("small",{className:"ml-4 hiden-label",children:["See all ",Object(a.jsx)(se.a,{})]})]})}),Object(a.jsx)(ce.a,{className:"row",responsive:ie,partialVisible:!0,showDots:!0,children:this._renderMovies()})]});return this.state.loading?"":s}}]),n}(s.Component),le=n(19),pe=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:1;return function(t){t({type:k}),F.a.get("".concat("https://animatrix-app.herokuapp.com","/api/genres/?page=").concat(e)).then((function(e){t({type:w,payload:e.data})})).catch((function(e){var n={message:e.response.data,status:e.response.status};alert(n.message),t({type:M})}))}},ue=function(){return function(e){e({type:M})}},de=function(e){Object(U.a)(n,e);var t=Object(I.a)(n);function n(){var e;Object(P.a)(this,n);for(var s=arguments.length,r=new Array(s),c=0;c<s;c++)r[c]=arguments[c];return(e=t.call.apply(t,[this].concat(r)))._getMoreGenresMovies=function(){null!==e.props.genres.nextPage&&e.props.getGenres(e.props.genres.page+1)},e._renderGenreMovies=function(){return e.props.genres.genres.map((function(e){return Object(a.jsx)(oe,{id:e.id,title:e.name,seeAllUrl:"/genres/".concat(e.id)},e.id)}))},e}return Object(T.a)(n,[{key:"componentDidMount",value:function(){this.props.getGenres()}},{key:"componentWillUnmount",value:function(){this.props.clearGenres()}},{key:"render",value:function(){var e=this.props.genres,t=e.count,n=e.nextPage;return Object(a.jsxs)("div",{className:"text-white",children:[Object(a.jsx)(ne,{src:"https://www.youtube.com/embed/ldYJ916tqJY?autoplay=1&mute=0&start=168&end=198"}),Object(a.jsx)("div",{className:"container mt-2",children:Object(a.jsx)(oe,{id:null,title:"Last Added",seeAllUrl:"/movies"})}),Object(a.jsx)(le.a,{dataLength:t,next:this._getMoreGenresMovies,hasMore:null!==n,loader:"",className:"container",children:this._renderGenreMovies()})]})}}]),n}(s.Component),je=Object(l.b)((function(e){return{genres:e.genres}}),{getGenres:pe,clearGenres:ue})(de),he=function(e){Object(U.a)(n,e);var t=Object(I.a)(n);function n(){var e;Object(P.a)(this,n);for(var s=arguments.length,r=new Array(s),c=0;c<s;c++)r[c]=arguments[c];return(e=t.call.apply(t,[this].concat(r)))._getMoreGenresMovies=function(){null!==e.props.genres.nextPage&&e.props.getGenres(e.props.genres.page+1)},e._renderGenreMovies=function(){return e.props.genres.genres.map((function(e){return Object(a.jsx)(oe,{id:e.id,title:e.name,seeAllUrl:"/genres/".concat(e.id)},e.id)}))},e}return Object(T.a)(n,[{key:"componentDidMount",value:function(){this.props.getGenres()}},{key:"componentWillUnmount",value:function(){this.props.clearGenres()}},{key:"render",value:function(){var e=this.props.genres,t=e.count,n=e.nextPage,s=Object(a.jsx)(le.a,{dataLength:t,next:this._getMoreGenresMovies,hasMore:null!==n,loader:Object(a.jsx)("div",{className:"text-center",children:Object(a.jsx)("div",{className:"spinner-border",children:Object(a.jsx)("span",{className:"sr-only",children:"Loading...."})})}),className:"container text-white mt-4",children:this._renderGenreMovies()});return this.props.genres.areLoading?"":s}}]),n}(s.Component),be=Object(l.b)((function(e){return{genres:e.genres}}),{getGenres:pe,clearGenres:ue})(he),me=n(53),ge=function(e){Object(U.a)(n,e);var t=Object(I.a)(n);function n(){var e;Object(P.a)(this,n);for(var s=arguments.length,r=new Array(s),c=0;c<s;c++)r[c]=arguments[c];return(e=t.call.apply(t,[this].concat(r)))._renderGenres=function(e){return e.genres.map((function(t){return Object(a.jsxs)(o.b,{to:"/genres/".concat(t.id),children:[t.name,e.genres.indexOf(t)+1===e.genres.length?".":", "]})}))},e}return Object(T.a)(n,[{key:"componentDidMount",value:function(){var e=this.props.match.params.id;this.props.getMovie(e)}},{key:"componentDidUpdate",value:function(e){var t=this.props.match.params.id;e.match.params.id!==t&&this.props.getMovie(t)}},{key:"componentWillUnmount",value:function(){this.props.clearMovie()}},{key:"render",value:function(){var e=this.props.movies,t=e.movie,n=e.isLoading;return Object(a.jsxs)("div",{className:"text-white mt-5",children:[Object(a.jsx)("div",{className:"container",children:Object(a.jsxs)("div",{className:"row d-flex",children:[Object(a.jsx)("div",{className:"col-5 col-md-3 pr-0",children:n?null:Object(a.jsx)("img",{src:t.thumbnail,alt:"thumbnail",className:"img-fluid"})}),Object(a.jsxs)("div",{className:"col ml-md-2",children:[Object(a.jsx)("h5",{className:"mb-3",children:t.title}),Object(a.jsxs)("p",{className:"centered-label",children:[Object(a.jsxs)("span",{className:"mr-4 centered-label",children:[Object(a.jsx)(me.a,{style:{color:"#1ED760"}}),Object(a.jsxs)("span",{className:"ml-2",children:[t.length," "," min"]})]}),Object(a.jsx)($.a,{style:{color:"#1ED760"},size:14}),Object(a.jsx)("span",{className:"ml-2",children:t.year})]}),Object(a.jsx)("p",{children:t.genres?Object(a.jsxs)("span",{children:["Genres: ",this._renderGenres(t)]}):null}),Object(a.jsx)("p",{children:t.synopsis})]})]})}),Object(a.jsx)("div",{className:"my-4",children:Object(a.jsx)(ne,{src:t.url})}),t.genres?Object(a.jsx)("div",{className:"container",children:Object(a.jsx)(oe,{id:t.genres[0].id,title:"More of ".concat(t.genres[0].name),seeAllUrl:"/genres/".concat(t.genres[0].id)})}):null]})}}]),n}(s.Component),Oe=Object(l.b)((function(e){return{movies:e.movies}}),{getMovie:function(e){return function(t){t({type:O}),F.a.get("".concat("https://animatrix-app.herokuapp.com","/api/movies/").concat(e)).then((function(e){t({type:v,payload:e.data})})).catch((function(e){var n={message:e.response.data,status:e.response.status};alert(n.message),t({type:x})}))}},clearMovie:function(){return function(e){e({type:x})}}})(ge),ve=n(55),xe=function(e){Object(U.a)(n,e);var t=Object(I.a)(n);function n(){return Object(P.a)(this,n),t.apply(this,arguments)}return Object(T.a)(n,[{key:"render",value:function(){var e=this.props,t=e.id,n=e.thumbnail,s=e.name,r=e.description;return Object(a.jsxs)(o.b,{to:"/genres/".concat(t),"data-tip":r,"data-for":"genre-description",children:[Object(a.jsx)("img",{src:n,alt:"thumbnail",className:"img-fluid"}),Object(a.jsx)("p",{className:"mt-2",children:s}),Object(a.jsx)(ve.a,{id:"genre-description",place:"bottom",getContent:function(e){return Object(a.jsx)("div",{style:{maxWidth:"220px",maxHeight:"100px"},className:"truncate-multiline",children:e})}})]})}}]),n}(s.Component),fe=function(e){Object(U.a)(n,e);var t=Object(I.a)(n);function n(){var e;Object(P.a)(this,n);for(var s=arguments.length,r=new Array(s),c=0;c<s;c++)r[c]=arguments[c];return(e=t.call.apply(t,[this].concat(r)))._getMoreGenres=function(){null!==e.props.genres.nextPage&&e.props.getGenres(e.props.genres.page+1)},e._renderGenres=function(){return e.props.genres.genres.map((function(e){return Object(a.jsx)("div",{className:"col pr-1",children:Object(a.jsx)(xe,{id:e.id,name:e.name,thumbnail:e.thumbnail,description:e.description})},e.id)}))},e}return Object(T.a)(n,[{key:"componentDidMount",value:function(){this.props.getGenres()}},{key:"componentWillUnmount",value:function(){this.props.clearGenres()}},{key:"render",value:function(){var e=this.props.genres,t=e.count,n=e.nextPage,s=Object(a.jsx)("div",{className:"text-white",children:Object(a.jsxs)("div",{className:"container mt-4",children:[Object(a.jsx)("h5",{className:"my-4",children:"Genres"}),Object(a.jsx)(le.a,{className:"row row-cols-2 row-cols-sm-3 row-cols-lg-4 row-cols-xl-4",dataLength:t,next:this._getMoreGenres,hasMore:null!==n,loader:Object(a.jsx)("h4",{children:"Loading..."}),children:this._renderGenres()})]})});return this.props.genres.areLoading?"":s}}]),n}(s.Component),ye=Object(l.b)((function(e){return{genres:e.genres}}),{getGenres:pe,clearGenres:ue})(fe),Ne=function(e){Object(U.a)(n,e);var t=Object(I.a)(n);function n(){var e;Object(P.a)(this,n);for(var s=arguments.length,r=new Array(s),c=0;c<s;c++)r[c]=arguments[c];return(e=t.call.apply(t,[this].concat(r)))._getMoreMovies=function(){if(null!==e.props.movies.nextPage){var t=e.props.match.params.id;e.props.getGenreMovies(t,e.props.movies.page+1)}},e._renderMovies=function(){return e.props.movies.movies.map((function(e){return Object(a.jsx)("div",{className:"col",children:Object(a.jsx)(ae,{id:e.id,thumbnail:e.thumbnail,gif:e.gif,title:e.title})},e.id)}))},e}return Object(T.a)(n,[{key:"componentDidMount",value:function(){var e=this.props.match.params.id;this.props.getGenreDetails(e),this.props.getGenreMovies(e)}},{key:"componentWillUnmount",value:function(){this.props.clearGenre(),this.props.clearMovies()}},{key:"render",value:function(){var e=this.props.genre,t=e.name,n=e.description,s=this.props.movies,r=s.count,c=s.nextPage,i=this.props.movies.movies[0],o=Object(a.jsxs)("div",{className:"text-white",children:[Object(a.jsx)(ne,{src:i?i.preview_url:""}),Object(a.jsxs)("div",{className:"container mt-4",children:[Object(a.jsx)("h5",{className:"my-4",children:t}),Object(a.jsx)("div",{className:"row",children:Object(a.jsx)("div",{className:"col-lg-8",children:Object(a.jsx)("p",{className:"mb-4",children:n})})}),Object(a.jsx)(le.a,{className:"row row-cols-2 row-cols-sm-3 row-cols-md-4 row-cols-lg-5",dataLength:r,next:this._getMoreMovies,hasMore:null!==c,loader:Object(a.jsx)("div",{className:"col text-center",children:Object(a.jsx)("div",{className:"spinner-border",children:Object(a.jsx)("span",{className:"sr-only",children:"Loading...."})})}),children:this._renderMovies()})]})]});return this.props.isLoading?"":o}}]),n}(s.Component),ke=Object(l.b)((function(e){return{genre:e.genres.genre,isLoading:e.genres.isLoading,movies:e.movies}}),{getGenreDetails:function(e){return function(t){t({type:G}),F.a.get("".concat("https://animatrix-app.herokuapp.com","/api/genres/").concat(e,"/")).then((function(e){t({type:_,payload:e.data})})).catch((function(e){var n={message:e.response.data,status:e.response.status};alert(n.message),t({type:L})}))}},clearGenre:function(){return function(e){e({type:L})}},getGenreMovies:function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:1;return function(n){F.a.get("".concat("https://animatrix-app.herokuapp.com","/api/genres/").concat(e,"/movies/?page=").concat(t)).then((function(e){n({type:y,payload:e.data})})).catch((function(e){n({type:N})}))}},clearMovies:function(){return function(e){e({type:N})}}})(Ne),we=function(e){Object(U.a)(n,e);var t=Object(I.a)(n);function n(){var e;Object(P.a)(this,n);for(var s=arguments.length,r=new Array(s),c=0;c<s;c++)r[c]=arguments[c];return(e=t.call.apply(t,[this].concat(r)))._getMoreResults=function(){if(null!==e.props.search.nextPage){var t=e.props.match.params.query;e.props.getSearchResults(t,e.props.search.page+1)}},e._renderResults=function(){return e.props.search.results.map((function(e){return Object(a.jsx)("div",{className:"col",children:Object(a.jsx)(ae,{id:e.id,thumbnail:e.thumbnail,gif:e.gif,title:e.title})},e.id)}))},e}return Object(T.a)(n,[{key:"componentDidMount",value:function(){var e=this.props.match.params.query;this.props.getSearchResults(e)}},{key:"componentDidUpdate",value:function(e){var t=this.props.match.params.query;e.match.params.query!==t&&(this.props.clearResults(),this.props.getSearchResults(t))}},{key:"componentWillUnmount",value:function(){this.props.clearResults()}},{key:"render",value:function(){var e=this.props.search,t=e.count,n=e.nextPage;return Object(a.jsx)("div",{className:"text-white",children:Object(a.jsxs)("div",{className:"container mt-4",children:[Object(a.jsxs)("h6",{className:"my-4",children:[t," results for ",this.props.match.params.query]}),Object(a.jsx)(le.a,{className:"row row-cols-2 row-cols-sm-3 row-cols-md-4 row-cols-lg-5",dataLength:t,next:this._getMoreResults,hasMore:null!==n,loader:Object(a.jsx)("h4",{children:"Loading..."}),children:this._renderResults()})]})})}}]),n}(s.Component),Me=Object(l.b)((function(e){return{search:e.search}}),{getSearchResults:function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:1;return function(n){n({type:b}),F.a.get("".concat("https://animatrix-app.herokuapp.com","/api/movies/?page=").concat(t,"&search=").concat(e)).then((function(e){n({type:m,payload:e.data})})).catch((function(e){var t={message:e.response.data,status:e.response.status};alert(t.message),n({type:g})}))}},clearResults:function(){return function(e){e({type:g})}}})(we),Ge=function(e){Object(U.a)(n,e);var t=Object(I.a)(n);function n(){return Object(P.a)(this,n),t.apply(this,arguments)}return Object(T.a)(n,[{key:"render",value:function(){return Object(a.jsx)("div",{className:"flex-fill",children:Object(a.jsxs)(te.c,{children:[Object(a.jsx)(te.a,{exact:!0,path:"/",component:je}),Object(a.jsx)(te.a,{exact:!0,path:"/movies",component:be}),Object(a.jsx)(te.a,{exact:!0,path:"/movies/:id",component:Oe}),Object(a.jsx)(te.a,{exact:!0,path:"/genres",component:ye}),Object(a.jsx)(te.a,{exact:!0,path:"/genres/:id",component:ke}),Object(a.jsx)(te.a,{exact:!0,path:"/search/:query",component:Me})]})})}}]),n}(s.Component),_e=n(54),Le=function(e){Object(U.a)(n,e);var t=Object(I.a)(n);function n(){return Object(P.a)(this,n),t.apply(this,arguments)}return Object(T.a)(n,[{key:"render",value:function(){return Object(a.jsx)("nav",{className:"navbar navbar-expand-lg fixed-bottom",style:{backgroundColor:"black"},children:Object(a.jsx)("div",{className:"collapse navbar-collapse text-white",children:Object(a.jsxs)("ul",{class:"navbar-nav mr-auto mt-2 mt-lg-0",children:[Object(a.jsx)("li",{class:"nav-item",children:Object(a.jsx)(o.b,{class:"nav-link",to:"/",children:"About us"})}),Object(a.jsx)("li",{class:"nav-item",children:Object(a.jsx)(o.b,{class:"nav-link",to:"/",children:"Terms of use"})}),Object(a.jsx)("li",{class:"nav-item",children:Object(a.jsx)(o.b,{class:"nav-link",to:"/",children:"Privacy policy"})}),Object(a.jsx)("li",{class:"nav-item",children:Object(a.jsx)(o.b,{class:"nav-link",to:"/",children:Object(a.jsx)(_e.a,{size:21})})})]})})})}}]),n}(s.Component),Ce=function(e){Object(U.a)(n,e);var t=Object(I.a)(n);function n(){return Object(P.a)(this,n),t.apply(this,arguments)}return Object(T.a)(n,[{key:"render",value:function(){return Object(a.jsxs)("div",{style:{paddingBottom:"60px"},children:[Object(a.jsx)(te.a,{component:Q}),Object(a.jsx)(Ge,{}),Object(a.jsx)(te.a,{component:ee}),Object(a.jsx)(Le,{})]})}}]),n}(s.Component),Ee=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,106)).then((function(t){var n=t.getCLS,a=t.getFID,s=t.getFCP,r=t.getLCP,c=t.getTTFB;n(e),a(e),s(e),r(e),c(e)}))};i.a.render(Object(a.jsx)(r.a.StrictMode,{children:Object(a.jsx)(l.a,{store:D,children:Object(a.jsx)(o.a,{basename:"/animatrix",children:Object(a.jsx)(Ce,{})})})}),document.getElementById("root")),Ee()},67:function(e,t,n){},68:function(e,t,n){}},[[104,1,2]]]);
//# sourceMappingURL=main.8200cfdb.chunk.js.map