(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{104:function(e,t,a){},105:function(e,t,a){},131:function(e,t,a){},132:function(e,t,a){"use strict";a.r(t);var n=a(0),c=a.n(n),i=a(10),r=a.n(i),s=a(47),l=a(48),o=a(70),m=a(49),d=a(71),u=a(23),f=a.n(u),h=a(24),g=a.n(h),p=a(50),E=a.n(p),w=(a(78),function(e){return c.a.createElement("div",null,c.a.createElement(f.a,{expand:"lg",variant:"default"},c.a.createElement(f.a.Brand,null,"Clicky Game"),c.a.createElement(g.a,null,c.a.createElement(g.a.Link,{href:"https://github.com/crsimpson5/clicky-game"},"GitHub"))),c.a.createElement(E.a,{fluid:!0,className:"text-center"},c.a.createElement("h1",null,c.a.createElement("strong",null,"Clicky Game")),c.a.createElement("p",{className:"px-2"},"Click a character to earn a point, but don't pick the same one twice!"),c.a.createElement("div",{id:"score"},c.a.createElement("strong",null,"Score: ",e.score))))}),k=(a(104),function(e){return c.a.createElement("div",{className:"game-card justify-content-center",onClick:e.handleClick},c.a.createElement("img",{className:"game-img",src:e.src,alt:e.id,"data-id":e.id}))}),v=a(51),x=a.n(v),j=a(52),y=a.n(j),b=a(25),C=a.n(b),I=(a(105),function(e){return c.a.createElement(x.a,null,c.a.createElement(y.a,null,c.a.createElement(C.a,{lg:1}),c.a.createElement(C.a,{lg:10},c.a.createElement("div",{className:"d-flex  flex-wrap justify-content-around mb-4 mt-lg-4"},e.images.map(function(t){return c.a.createElement(k,{key:t.id,id:t.id,src:t.src,handleClick:e.handleClick})})))))}),M=a(53),N=a.n(M),A=a(54),S=a.n(A),B=a(55),O=a.n(B),R=a(56),F=a.n(R),G=a(57),H=a.n(G),J=a(58),W=a.n(J),L=a(59),P=a.n(L),T=a(60),Y=a.n(T),$=a(61),q=a.n($),z=a(62),D=a.n(z),K=a(63),Q=a.n(K),U=a(64),V=a.n(U),X=[{id:0,src:N.a},{id:1,src:S.a},{id:2,src:O.a},{id:3,src:F.a},{id:4,src:H.a},{id:5,src:W.a},{id:6,src:P.a},{id:7,src:Y.a},{id:8,src:q.a},{id:9,src:D.a},{id:10,src:Q.a},{id:11,src:V.a}],Z=a(12),_=a.n(Z),ee=a(69),te=a.n(ee),ae=a(65),ne=a.n(ae),ce=a(66),ie=a.n(ce),re=a(67),se=a.n(re),le=a(68),oe=a.n(le),me={fail:ne.a,whatever:ie.a,nice:se.a,dance:oe.a},de=function(e){var t=function(){var t="";return t=e.score<=4?me.fail:e.score<=6?me.whatever:e.score<e.imageAmount?me.nice:me.dance,c.a.createElement("img",{src:t})};return c.a.createElement(_.a,{show:e.showModal,onHide:e.handleRestartClick},c.a.createElement(_.a.Header,{closeButton:!0},c.a.createElement(_.a.Title,null)),c.a.createElement(_.a.Body,{className:"text-center"},e.score<e.imageAmount?c.a.createElement(n.Fragment,null,c.a.createElement("h3",null,"Game over!"),c.a.createElement("p",null,"Score: ",e.score),t()):c.a.createElement(n.Fragment,null,c.a.createElement("h3",null,"You win!"),t())),c.a.createElement(_.a.Footer,null,c.a.createElement("div",{className:"mx-auto"},c.a.createElement(te.a,{variant:"primary",onClick:e.handleRestartClick},"Play Again!"))))},ue=(a(131),function(e){function t(){var e,a;Object(s.a)(this,t);for(var n=arguments.length,c=new Array(n),i=0;i<n;i++)c[i]=arguments[i];return(a=Object(o.a)(this,(e=Object(m.a)(t)).call.apply(e,[this].concat(c)))).state={score:0,chosenImgs:[],showModal:!1,images:a.shuffleImgs()},a.handleImageClick=function(e){var t=parseInt(e.target.getAttribute("data-id"));a.state.chosenImgs.includes(t)?a.setState({showModal:!0}):a.setState({score:a.state.score+1,chosenImgs:a.state.chosenImgs.concat(t),images:a.shuffleImgs()},function(){a.state.chosenImgs.length===X.length&&a.setState({showModal:!0})})},a.handleRestartClick=function(){a.setState({score:0,showModal:!1,chosenImgs:[],images:a.shuffleImgs()})},a}return Object(d.a)(t,e),Object(l.a)(t,[{key:"shuffleImgs",value:function(){for(var e=X.slice(),t=[],a=e.length;a>0;a--){var n=Math.floor(Math.random()*a);t.push(e[n]),e.splice(n,1)}return t}},{key:"render",value:function(){return c.a.createElement(n.Fragment,null,c.a.createElement(w,{score:this.state.score,length:X.length}),c.a.createElement(I,{images:this.state.images,handleClick:this.handleImageClick}),c.a.createElement(de,{score:this.state.score,imageAmount:this.state.images.length,showModal:this.state.showModal,handleRestartClick:this.handleRestartClick}))}}]),t}(n.Component));Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));r.a.render(c.a.createElement(ue,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})},53:function(e,t,a){e.exports=a.p+"static/media/creed.ead6d3fa.jpeg"},54:function(e,t,a){e.exports=a.p+"static/media/dwight.c690d3f8.jpeg"},55:function(e,t,a){e.exports=a.p+"static/media/jim.adb922fb.jpg"},56:function(e,t,a){e.exports=a.p+"static/media/kevin.8e33d958.jpeg"},57:function(e,t,a){e.exports=a.p+"static/media/meredith.f55673d6.jpg"},58:function(e,t,a){e.exports=a.p+"static/media/michael.e10f4015.jpg"},59:function(e,t,a){e.exports=a.p+"static/media/oscar.db6a5894.jpg"},60:function(e,t,a){e.exports=a.p+"static/media/pam.b1850744.jpg"},61:function(e,t,a){e.exports=a.p+"static/media/phyllis.840e556a.jpg"},62:function(e,t,a){e.exports=a.p+"static/media/ryan.b481dc38.jpg"},63:function(e,t,a){e.exports=a.p+"static/media/stanley.782f0780.jpg"},64:function(e,t,a){e.exports=a.p+"static/media/toby.8c56e58f.jpg"},65:function(e,t,a){e.exports=a.p+"static/media/fail.5c993918.gif"},66:function(e,t,a){e.exports=a.p+"static/media/whatever.565735a9.gif"},67:function(e,t,a){e.exports=a.p+"static/media/nice.ff12e27d.gif"},68:function(e,t,a){e.exports=a.p+"static/media/dance.7afd98a9.gif"},72:function(e,t,a){e.exports=a(132)},78:function(e,t,a){}},[[72,1,2]]]);
//# sourceMappingURL=main.1a332e88.chunk.js.map