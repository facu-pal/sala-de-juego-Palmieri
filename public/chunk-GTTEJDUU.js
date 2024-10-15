import{A as c,B as x,F as p,H as l,Ia as Z,J as r,K as o,L as P,La as ee,M as h,Ma as te,N as g,O as d,P as R,T as a,U as B,V as m,aa as K,c as v,k as M,ka as q,l as T,la as I,ma as y,n as L,na as H,p as C,pa as X,q as A,t as u,u as f,wa as $,z as S,za as Y}from"./chunk-NETX7RRM.js";var b=class i{constructor(t,e){this.firestore=t;this.auth=e}logGameResult(t,e){let n=te(this.firestore,"puntoJuegos");ee(n,{puntos:t,juego:e,user:this.auth.currentUser?.email,fecha:new Date})}static \u0275fac=function(e){return new(e||i)(L(Z),L(Y))};static \u0275prov=M({token:i,factory:i.\u0275fac,providedIn:"root"})};var ie=(i,t)=>({"btn-correct":i,"btn-incorrect":t});function oe(i,t){if(i&1&&(r(0,"div",17),a(1),o()),i&2){let e=t.$implicit;c(),m(" ",e," ")}}function re(i,t){if(i&1){let e=h();r(0,"button",18),g("click",function(){let s=u(e).$implicit,_=d();return f(_.onLetterSelected(s))}),a(1),o()}if(i&2){let e=t.$implicit,n=d();l("ngClass",K(3,ie,n.splittedWord.includes(e)&&n.lettersAlreadySelected.includes(e),!n.splittedWord.includes(e)&&n.lettersAlreadySelected.includes(e)))("disabled",n.lettersAlreadySelected.includes(e)),c(),m(" ",e," ")}}function ae(i,t){if(i&1){let e=h();r(0,"div",19)(1,"div",20)(2,"div",21)(3,"span"),a(4,"Juego terminado"),o(),r(5,"span",22),g("click",function(){u(e);let s=d();return f(s.closeSuccessAlert())}),a(6,"\xD7"),o()(),r(7,"div",23)(8,"p"),a(9),o(),r(10,"p"),a(11),o()()()()}if(i&2){let e=d();c(9),m("Juego terminado la palabra es : ",e.activeWord,"."),c(2),m("Puntos:",e.score,"")}}var j=class i{constructor(t){this.loggerJuegoService=t}letters=["A","B","C","D","E","F","G","H","I","J","K","L","M","N","\xD1","O","P","Q","R","S","T","U","V","W","X","Y","Z"];wordsList=["Goku","Vegeta","Piccolo","Gohan","Trunks","Bulma","Krillin","Freezer","Cell","Majin","Pikachu","Charizard","Bulbasaur","Squirtle","Jigglypuff","Eevee","Mewtwo","Lucario","Gengar","Snorlax","Messi","Maradona","Aguero","Tevez","Mascherano","Dybala","alvarez","Riquelme","Higuain","Dibu","F\xFAtbol","Baloncesto","Tenis","Voleibol","Nataci\xF3n","Atletismo","Rugby","Golf","Boxeo","Hockey"];playedWords=[];activeWord="";splittedWord="casa".split("");secretWord=[];imgNumber=0;flagGame=!1;lettersAlreadySelected=[];attemps=6;gameStatus="initial";score=0;ngOnInit(){this.wordsList=this.shuffleArray(this.wordsList),this.newGame()}shuffleArray(t){for(var e=t.length-1;e>0;e--){var n=Math.floor(Math.random()*(e+1)),s=t[e];t[e]=t[n],t[n]=s}return t}newGame(){this.lettersAlreadySelected=[],this.activeWord=this.wordsList.splice(0,1)[0],this.splittedWord=this.activeWord.split(""),console.log("Palabra a descubrir:",this.activeWord),this.splittedWord=this.splittedWord.map(t=>{let e=t.toUpperCase();return this.removeAccents(e)}),this.secretWord=this.splittedWord.map(t=>"_")}setImage(){return`pos-${this.imgNumber}.jpg`}removeAccents(t){return t.normalize("NFD").replace(/[\u0300-\u036f]/g,"")}onLetterSelected(t){if(this.lettersAlreadySelected.push(t),this.splittedWord.includes(t)){if(!this.secretWord.includes(t)){for(let e=0;e<this.splittedWord.length;e++)this.splittedWord[e].toUpperCase()==t&&(this.secretWord[e]=t,this.score+=5);this.secretWord.includes("_")||(this.score+=25,this.playedWords.push(this.activeWord),setTimeout(()=>{this.newGame()},2e3))}}else this.attemps--,this.imgNumber++,this.attemps==0&&(this.score>0&&(this.score-=10),this.onFailedGame())}onFailedGame(){this.attemps=6,this.imgNumber=0,this.flagGame=!0;for(let t=0;t<this.splittedWord.length;t++){let e=this.splittedWord[t].toUpperCase();this.secretWord[t]=e}setTimeout(()=>{this.newGame()},2e3)}closeSuccessAlert(){this.loggerJuegoService.logGameResult(this.score,"ahorcado"),this.flagGame=!1,this.score=0}static \u0275fac=function(e){return new(e||i)(x(b))};static \u0275cmp=C({type:i,selectors:[["app-ahorcado"]],decls:21,vars:6,consts:[[1,"main","min-vh-100"],[1,"py-3"],[1,"container","px-lg-5"],[1,"p-lg-2","rounded-3","text-center","divTitulo"],[1,"m-4","m-lg-5"],[1,"display-5","fw-bold","image-text"],[1,"drawing","d-flex","flex-column","justify-content-center","align-items-center","py-3","ps-0","pe-5"],[1,"m-2","d-flex","gap-5","divPuntoVida"],[1,"game-info"],[3,"src"],[1,"container","divLetras"],[1,"row","d-flex"],[1,"container","d-flex","align-items-center","justify-content-center","gap-3","container-secret-letter"],["class","display-1",4,"ngFor","ngForOf"],[1,"container","row","d-flex","flex-wrap","align-content-between","mt-5","game-controls",2,"padding-left","4rem","gap","1.4rem"],["class","btn btn-outline-dark","style","width: 3rem; height: 3rem;",3,"ngClass","disabled","click",4,"ngFor","ngForOf"],["class","overlay",4,"ngIf"],[1,"display-1"],[1,"btn","btn-outline-dark",2,"width","3rem","height","3rem",3,"click","ngClass","disabled"],[1,"overlay"],[1,"custom-alert","success-alert"],[1,"custom-alert-header"],[1,"close-btn",3,"click"],[1,"custom-alert-body"]],template:function(e,n){e&1&&(r(0,"div",0)(1,"header",1)(2,"div",2)(3,"div",3)(4,"div",4)(5,"h1",5),a(6,"Ahorcado"),o()()()()(),r(7,"div",6)(8,"div",7)(9,"span",8),a(10),o(),r(11,"span",8),a(12),o()(),P(13,"img",9),o(),r(14,"div",10)(15,"div",11)(16,"div",12),p(17,oe,2,1,"div",13),o()(),r(18,"div",14),p(19,re,2,6,"button",15),o()()(),p(20,ae,12,2,"div",16)),e&2&&(c(10),m("Puntos: ",n.score,""),c(2),m("Vidas restantes: ",n.attemps,""),c(),l("src",n.setImage(),S),c(4),l("ngForOf",n.secretWord),c(2),l("ngForOf",n.letters),c(),l("ngIf",n.flagGame))},dependencies:[q,I,y],styles:[".main[_ngcontent-%COMP%]{background-image:url(https://wallpapers.com/images/hd/game-night-background-poemd877bzft58ix.jpg);background-size:cover;background-position:center;background-repeat:no-repeat}.divTitulo[_ngcontent-%COMP%]{background-color:#f0e9e980;height:100px;display:flex;justify-content:center;align-items:center}.divPuntoVida[_ngcontent-%COMP%]{background-color:#f0e9e980;height:50px;width:320px;max-width:400px;border-radius:10px;display:flex;justify-content:center;align-items:center}.game-info[_ngcontent-%COMP%]{font-size:20px}.drawing[_ngcontent-%COMP%]{grid-column:1 / span 1;grid-row:1 / span 3}.divLetras[_ngcontent-%COMP%]{background-color:#f0e9e9cc;height:400px;max-height:800px;width:800px;max-width:900px;border-radius:10px}.btn-correct[_ngcontent-%COMP%]{background-color:green;color:#fff;border-color:green}.btn-incorrect[_ngcontent-%COMP%]{background-color:red;color:#fff;border-color:red}.overlay[_ngcontent-%COMP%]{position:fixed;top:0;left:0;width:100%;height:100%;background-color:#00000080;display:flex;justify-content:center;align-items:center;z-index:1000}.custom-alert[_ngcontent-%COMP%]{background-color:#ffffffe6;border:1px solid #ccc;border-radius:8px;width:400px;box-shadow:0 4px 6px #0000001a}.custom-alert-header[_ngcontent-%COMP%]{padding:10px;border-top-left-radius:8px;border-top-right-radius:8px;font-weight:700;display:flex;justify-content:center;align-items:center;position:relative}.custom-alert-body[_ngcontent-%COMP%]{padding:15px;color:#333;text-align:center}.close-btn[_ngcontent-%COMP%]{font-size:20px;cursor:pointer;color:#000;padding:0 10px;position:absolute;right:10px;top:10px}.close-btn[_ngcontent-%COMP%]:hover{color:#9eb384}.success-alert[_ngcontent-%COMP%]{border-color:#f3f3f3;background-color:#ffffffde}"]})};var z=class{svg="";png=""};var O=class{image="";images=new z;value="";suit="";code=""};var G=class{success=void 0;deck_id="";shuffled=void 0;remaining=void 0};var V=class i{baseUrl="https://www.deckofcardsapi.com/api/deck/";deckId="";shuffleDeck(){return v(this,null,function*(){try{let e=yield(yield fetch(`${this.baseUrl}new/shuffle/?deck_count=1`)).json();this.deckId=e.deck_id}catch(t){console.error("Error al barajar el mazo:",t)}})}getCards(t){return v(this,null,function*(){try{return yield(yield fetch(`${this.baseUrl}${this.deckId}/draw/?count=${t}`)).json()}catch(e){throw console.error("Error al obtener cartas:",e),e}})}getCardValue(t){switch(t){case"ACE":return 1;case"JACK":return 11;case"QUEEN":return 12;case"KING":return 13;default:return Number.parseInt(t)}}static \u0275fac=function(e){return new(e||i)};static \u0275prov=M({token:i,factory:i.\u0275fac,providedIn:"root"})};function ce(i,t){if(i&1&&P(0,"img",15),i&2){let e=d();R("src",e.activeCard.images.svg,S)}}function le(i,t){if(i&1){let e=h();r(0,"div",16)(1,"div",17)(2,"div",18)(3,"span"),a(4,"Juego terminado"),o(),r(5,"span",19),g("click",function(){u(e);let s=d();return f(s.closeSuccessAlert())}),a(6,"\xD7"),o()(),r(7,"div",20)(8,"p"),a(9),o()()()()}if(i&2){let e=d();c(9),m("Puntos:",e.score,"")}}var N=class i{constructor(t,e){this._cardsService=t;this.loggerJuegoService=e}gameStatus="initial";score=0;activeCardValue="1";flagGame=!1;cardsDeck=new G;cards=[];showedCards=[];activeCard=new O;previousCard=new O;ngOnInit(){return v(this,null,function*(){try{yield this._cardsService.shuffleDeck();let t=yield this._cardsService.getCards(52);this.cards=t.cards,console.log("Baraja:",this.cards),this.nextCard(),this.gameStatus="in-progress"}catch(t){console.error("Error durante la inicializaci\xF3n del juego:",t)}})}nextCard(){this.activeCard=this.cards.splice(0,1)[0],this.showedCards.push(this.activeCard)}onNextCardSelected(t){this.previousCard=this.activeCard,this.nextCard();let e=this.compareCards(this.previousCard,this.activeCard);e===t?this.score+=1:e!=="equal"&&(this.flagGame=!0)}compareCards(t,e){let n=0,s=0;return[{name:"ACE",value:1},{name:"JACK",value:11},{name:"QUEEN",value:12},{name:"KING",value:13}].forEach(k=>{k.name==t.value&&(n=k.value),k.name==e.value&&(s=k.value)}),n==0&&(n=parseInt(t.value)),s==0&&(s=parseInt(e.value)),s==n?"equal":s>n?"bigger":"lower"}resetGame(){this.cards.push(...this.showedCards.splice(0)),this.cards.includes(this.activeCard)||this.cards.push(this.activeCard),this.cards=this.shuffleArray(this.cards),this.score=0}shuffleArray(t){for(var e=t.length-1;e>0;e--){var n=Math.floor(Math.random()*(e+1)),s=t[e];t[e]=t[n],t[n]=s}return t}closeSuccessAlert(){this.loggerJuegoService.logGameResult(this.score,"mayor-menor"),this.flagGame=!1,this.resetGame()}static \u0275fac=function(e){return new(e||i)(x(V),x(b))};static \u0275cmp=C({type:i,selectors:[["app-mayor-menor"]],decls:19,vars:3,consts:[[1,"main","min-vh-100"],[1,"py-3"],[1,"container","px-lg-5"],[1,"p-lg-2","rounded-3","text-center","divTitulo"],[1,"m-4","m-lg-5"],[1,"display-5","fw-bold","image-text"],[1,"d-flex","flex-column","justify-content-center","align-items-center"],[1,"m-2","d-flex","gap-5","divPunto"],[1,"game-info"],[1,"game-card"],["style",`
			background-repeat: no-repeat;
			background-position: center;
			width: 14rem;
			height: 20rem;
			object-fit: none;
			`,"alt","",3,"src",4,"ngIf"],[1,"mt-5","game-controls"],[1,"me-4","btn","btn-primary",3,"click"],[1,"btn","btn-primary",3,"click"],["class","overlay",4,"ngIf"],["alt","",2,"background-repeat","no-repeat","background-position","center","width","14rem","height","20rem","object-fit","none",3,"src"],[1,"overlay"],[1,"custom-alert","success-alert"],[1,"custom-alert-header"],[1,"close-btn",3,"click"],[1,"custom-alert-body"]],template:function(e,n){e&1&&(r(0,"div",0)(1,"header",1)(2,"div",2)(3,"div",3)(4,"div",4)(5,"h1",5),a(6,"Mayor menor"),o()()()()(),r(7,"div",6)(8,"div",7)(9,"span",8),a(10),o()()(),r(11,"div",9),p(12,ce,1,1,"img",10),o(),r(13,"div",11)(14,"button",12),g("click",function(){return n.onNextCardSelected("bigger")}),a(15," Mayor "),o(),r(16,"button",13),g("click",function(){return n.onNextCardSelected("lower")}),a(17," Menor "),o()()(),p(18,le,10,1,"div",14)),e&2&&(c(10),m("Puntos: ",n.score,""),c(2),l("ngIf",n.gameStatus=="in-progress"),c(6),l("ngIf",n.flagGame))},dependencies:[y],styles:[".main[_ngcontent-%COMP%]{background-image:url(https://wallpapers.com/images/hd/game-night-background-poemd877bzft58ix.jpg);background-size:cover;background-position:center;background-repeat:no-repeat}.divTitulo[_ngcontent-%COMP%]{background-color:#f0e9e980;height:100px;display:flex;justify-content:center;align-items:center}.divPunto[_ngcontent-%COMP%]{background-color:#f0e9e980;height:50px;width:320px;max-width:400px;border-radius:10px;display:flex;justify-content:center;align-items:center}.game-info[_ngcontent-%COMP%]{font-size:20px;font-size:1rem;color:#000}.game-container[_ngcontent-%COMP%]{margin:3rem;border:solid rgb(197,197,197) 2px;min-height:40vh;border-radius:10px;background-color:#ededed}ul[_ngcontent-%COMP%] > li[_ngcontent-%COMP%]{display:inline-block;margin-inline:1rem}.game-card[_ngcontent-%COMP%]{margin:auto;width:14rem;height:20rem}.game-controls[_ngcontent-%COMP%]{display:flex;width:100%;justify-content:center}.overlay[_ngcontent-%COMP%]{position:fixed;top:0;left:0;width:100%;height:100%;background-color:#00000080;display:flex;justify-content:center;align-items:center;z-index:1000}.custom-alert[_ngcontent-%COMP%]{background-color:#ffffffe6;border:1px solid #ccc;border-radius:8px;width:400px;box-shadow:0 4px 6px #0000001a}.custom-alert-header[_ngcontent-%COMP%]{padding:10px;border-top-left-radius:8px;border-top-right-radius:8px;font-weight:700;display:flex;justify-content:center;align-items:center;position:relative}.custom-alert-body[_ngcontent-%COMP%]{padding:15px;color:#333;text-align:center}.close-btn[_ngcontent-%COMP%]{font-size:20px;cursor:pointer;color:#000;padding:0 10px;position:absolute;right:10px;top:10px}.close-btn[_ngcontent-%COMP%]:hover{color:#9eb384}.success-alert[_ngcontent-%COMP%]{border-color:#f3f3f3;background-color:#ffffffde}"]})};var F=class i{baseUrl="https://pokeapi.co/api/v2/";getRandomPokemon(){return v(this,null,function*(){try{let t=Math.floor(Math.random()*898)+1;return yield(yield fetch(`${this.baseUrl}pokemon/${t}`)).json()}catch(t){throw console.error("Error al obtener Pok\xE9mon:",t),t}})}getPokemonOptions(t,e){return v(this,null,function*(){try{let n=[];for(;n.length<e;){let s=Math.floor(Math.random()*898)+1;if(s!==t){let k=yield(yield fetch(`${this.baseUrl}pokemon/${s}`)).json();n.push(k)}}return n}catch(n){throw console.error("Error al obtener opciones de Pok\xE9mon:",n),n}})}getPokemonDetails(t){return v(this,null,function*(){try{return yield(yield fetch(`${this.baseUrl}pokemon/${t}`)).json()}catch(e){throw console.error("Error al obtener detalles del Pok\xE9mon:",e),e}})}static \u0275fac=function(e){return new(e||i)};static \u0275prov=M({token:i,factory:i.\u0275fac,providedIn:"root"})};function me(i,t){if(i&1){let e=h();r(0,"div",15)(1,"button",16),g("click",function(){let s=u(e).$implicit,_=d();return f(_.onAnswer(s))}),a(2),o()()}if(i&2){let e=t.$implicit;c(2),B(e)}}function pe(i,t){if(i&1){let e=h();r(0,"div",17)(1,"div",18)(2,"div",19)(3,"span"),a(4,"Juego terminado"),o(),r(5,"span",20),g("click",function(){u(e);let s=d();return f(s.closeSuccessAlert())}),a(6,"\xD7"),o()(),r(7,"div",21)(8,"p"),a(9),o(),r(10,"p"),a(11),o()()()()}if(i&2){let e=d();c(9),m("El pokeon es: ",e.nombrePokemon,"."),c(2),m("Puntos:",e.score,"")}}var J=class i{constructor(t,e){this._pokemonService=t;this.loggerJuegoService=e}gameQuestion;showCorrectAnswer=!1;score=0;flagGame=!1;nombrePokemon="";ngOnInit(){}ngAfterViewInit(){this.newQuestion()}newQuestion(){return v(this,null,function*(){try{let t=yield this._pokemonService.getRandomPokemon(),e=t.id,n=yield this._pokemonService.getPokemonOptions(e,3);n.push(t),this.shuffleArray(n),this.gameQuestion={image:t.sprites.front_default,name:t.name,options:n.map(s=>s.name)},this.nombrePokemon=t.name,console.log(`Pok\xE9mon correcto: ${t.name}`)}catch(t){console.error("Error al cargar la nueva pregunta:",t)}})}evaluateAnswer(t){return t===this.gameQuestion.name}showCorrect(){this.showCorrectAnswer=!0,setTimeout(()=>{this.showCorrectAnswer=!1,this.newQuestion()},500)}onAnswer(t){this.showCorrectAnswer||(this.evaluateAnswer(t)?(this.score++,this.showCorrect()):this.flagGame=!0)}shuffleArray(t){for(let e=t.length-1;e>0;e--){let n=Math.floor(Math.random()*(e+1));[t[e],t[n]]=[t[n],t[e]]}}closeSuccessAlert(){this.loggerJuegoService.logGameResult(this.score,"preguntados"),this.flagGame=!1,this.score=0,this.showCorrect()}static \u0275fac=function(e){return new(e||i)(x(F),x(b))};static \u0275cmp=C({type:i,selectors:[["app-trivia"]],decls:21,vars:4,consts:[[1,"main","min-vh-100"],[1,"py-3"],[1,"container","px-lg-5"],[1,"p-lg-2","rounded-3","text-center","divTitulo"],[1,"m-4","m-lg-5"],[1,"display-5","fw-bold","image-text"],[1,"p-5","d-flex","justify-content-center","align-items-center"],[1,"d-flex","flex-row","gap-5"],[1,"card"],["alt","Pok\xE9mon Image",1,"card-img-top","prueba",3,"src"],[1,"card",2,"max-width","35vw"],[1,"p-4"],[1,"card-title"],["class","d-flex flex-column align-items-center",4,"ngFor","ngForOf"],["class","overlay",4,"ngIf"],[1,"d-flex","flex-column","align-items-center"],[1,"mb-4",3,"click"],[1,"overlay"],[1,"custom-alert","success-alert"],[1,"custom-alert-header"],[1,"close-btn",3,"click"],[1,"custom-alert-body"]],template:function(e,n){e&1&&(r(0,"div",0)(1,"header",1)(2,"div",2)(3,"div",3)(4,"div",4)(5,"h1",5),a(6,"Preguntados"),o()()()()(),r(7,"div",6)(8,"div",7)(9,"div",8),P(10,"img",9),o(),r(11,"div",10)(12,"div",11)(13,"h4"),a(14),o(),r(15,"h5",12),a(16,"\xBFQu\xE9 Pok\xE9mon es?"),o(),r(17,"p"),a(18,"Seleccione el nombre del Pok\xE9mon de la foto entre las opciones en pantalla."),o(),p(19,me,3,1,"div",13),o()()()()(),p(20,pe,12,2,"div",14)),e&2&&(c(10),l("src",n.gameQuestion==null?null:n.gameQuestion.image,S),c(4),m("Puntos: ",n.score,""),c(5),l("ngForOf",n.gameQuestion==null?null:n.gameQuestion.options),c(),l("ngIf",n.flagGame))},dependencies:[I,y],styles:[".main[_ngcontent-%COMP%]{background-image:url(https://wallpapers.com/images/hd/game-night-background-poemd877bzft58ix.jpg);background-size:cover;background-position:center;background-repeat:no-repeat}.divTitulo[_ngcontent-%COMP%]{background-color:#f0e9e980;height:100px;display:flex;justify-content:center;align-items:center}.prueba[_ngcontent-%COMP%]{height:450px}.card[_ngcontent-%COMP%]{background-color:#f0e9e9e6}button[_ngcontent-%COMP%]{width:200px;border-radius:3px;padding:5px 10px 10px 5px;background-color:#ffffff45;color:#1c1d1f;text-align:center}.overlay[_ngcontent-%COMP%]{position:fixed;top:0;left:0;width:100%;height:100%;background-color:#00000080;display:flex;justify-content:center;align-items:center;z-index:1000}.custom-alert[_ngcontent-%COMP%]{background-color:#ffffffe6;border:1px solid #ccc;border-radius:8px;width:400px;box-shadow:0 4px 6px #0000001a}.custom-alert-header[_ngcontent-%COMP%]{padding:10px;border-top-left-radius:8px;border-top-right-radius:8px;font-weight:700;display:flex;justify-content:center;align-items:center;position:relative}.custom-alert-body[_ngcontent-%COMP%]{padding:15px;color:#333;text-align:center}.close-btn[_ngcontent-%COMP%]{font-size:20px;cursor:pointer;color:#000;padding:0 10px;position:absolute;right:10px;top:10px}.close-btn[_ngcontent-%COMP%]:hover{color:#9eb384}.success-alert[_ngcontent-%COMP%]{border-color:#f3f3f3;background-color:#ffffffde}"]})};function ge(i,t){if(i&1&&(r(0,"div")(1,"span",8),a(2),o()()),i&2){let e=d();c(2),m("Tiempo: ",e.remainingTime," segundos")}}function ue(i,t){if(i&1){let e=h();r(0,"button",13),g("click",function(){u(e);let s=d();return f(s.startGame())}),a(1,"Empezar"),o()}}function fe(i,t){if(i&1){let e=h();r(0,"div",15),g("click",function(s){let _=u(e).$implicit;return d(2).hitTarget(_),f(s.stopPropagation())}),o()}if(i&2){let e=t.$implicit;l("ngStyle",e.style)}}function he(i,t){if(i&1&&(r(0,"div"),p(1,fe,1,1,"div",14),o()),i&2){let e=d();c(),l("ngForOf",e.targets)}}function ve(i,t){if(i&1){let e=h();r(0,"div",16)(1,"div",17)(2,"div",18)(3,"span"),a(4,"Juego terminado"),o(),r(5,"span",19),g("click",function(){u(e);let s=d();return f(s.closeSuccessAlert())}),a(6,"\xD7"),o()(),r(7,"div",20)(8,"p"),a(9),o()()()()}if(i&2){let e=d();c(9),m("Puntos:",e.score,"")}}var D=class i{constructor(t){this.loggerJuegoService=t}score=0;gameStarted=!1;remainingTime=30;targets=[];flagGame=!1;maxTargets=2;gameInterval;targetInterval;ngOnInit(){}startGame(){this.score=0,this.gameStarted=!0,this.remainingTime=30,this.gameInterval=setInterval(()=>{this.remainingTime--,this.remainingTime===0&&this.endGame()},1e3),this.generateTargets()}generateTargets(){this.targetInterval=setInterval(()=>{if(this.targets.length<this.maxTargets){let t=this.createTarget();this.targets.push(t)}},1e3)}createTarget(){let n=Math.random()*50+30,s=Math.random()*85;return{style:{top:`${Math.random()*85}%`,left:`${s}%`,width:`${n}px`,height:`${n}px`}}}missTarget(){this.score--,this.score<0&&(this.score=0)}hitTarget(t){this.score++,this.targets=this.targets.filter(e=>e!==t),this.targets.length<this.maxTargets&&this.targets.push(this.createTarget())}endGame(){this.gameStarted=!1,clearInterval(this.gameInterval),clearInterval(this.targetInterval),this.targets=[],this.flagGame=!0}closeSuccessAlert(){this.loggerJuegoService.logGameResult(this.score,"aim-trainer"),this.flagGame=!1,this.score=0}static \u0275fac=function(e){return new(e||i)(x(b))};static \u0275cmp=C({type:i,selectors:[["app-aim"]],decls:16,vars:5,consts:[[1,"main","min-vh-100"],[1,"py-3"],[1,"container","px-lg-5"],[1,"p-lg-2","rounded-3","text-center","divTitulo"],[1,"m-4","m-lg-5"],[1,"display-5","fw-bold","image-text"],[1,"drawing","d-flex","flex-column","justify-content-center","align-items-center","py-3","ps-0","pe-5"],[1,"m-2","d-flex","gap-5","divPunto"],[1,"game-info"],[4,"ngIf"],[1,"aim-trainer",3,"click"],["class","dark-button",3,"click",4,"ngIf"],["class","overlay",4,"ngIf"],[1,"dark-button",3,"click"],["class","target",3,"ngStyle","click",4,"ngFor","ngForOf"],[1,"target",3,"click","ngStyle"],[1,"overlay"],[1,"custom-alert","success-alert"],[1,"custom-alert-header"],[1,"close-btn",3,"click"],[1,"custom-alert-body"]],template:function(e,n){e&1&&(r(0,"div",0)(1,"header",1)(2,"div",2)(3,"div",3)(4,"div",4)(5,"h1",5),a(6,"Aim traini"),o()()()()(),r(7,"div",6)(8,"div",7)(9,"span",8),a(10),o(),p(11,ge,3,1,"div",9),o(),r(12,"div",10),g("click",function(){return n.missTarget()}),p(13,ue,2,0,"button",11)(14,he,2,1,"div",9),o()(),p(15,ve,10,1,"div",12),o()),e&2&&(c(10),m("Puntos: ",n.score,""),c(),l("ngIf",n.gameStarted),c(2),l("ngIf",!n.gameStarted),c(),l("ngIf",n.gameStarted),c(),l("ngIf",n.flagGame))},dependencies:[I,y,H],styles:[".main[_ngcontent-%COMP%]{background-image:url(https://wallpapers.com/images/hd/game-night-background-poemd877bzft58ix.jpg);background-size:cover;background-position:center;background-repeat:no-repeat}.divTitulo[_ngcontent-%COMP%]{background-color:#f0e9e980;height:100px;display:flex;justify-content:center;align-items:center}.divPunto[_ngcontent-%COMP%]{background-color:#f0e9e980;height:50px;width:400px;max-width:400px;border-radius:10px;display:flex;justify-content:center;align-items:center}.game-info[_ngcontent-%COMP%]{font-size:20px}.aim-trainer[_ngcontent-%COMP%]{position:relative;width:800px;height:450px;background-image:url(https://png.pngtree.com/thumb_back/fw800/background/20240227/pngtree-forest-wallpapers-image_15632304.jpg);overflow:hidden;display:flex;flex-direction:column;align-items:center;justify-content:center;border-radius:10px;cursor:crosshair}.target[_ngcontent-%COMP%]{position:absolute;width:50px;height:50px;background-image:url(https://c0.klipartz.com/pngpicture/848/923/gratis-png-dardos-de-tiro-blanco-diana-ojiva-s.png);background-size:cover;background-position:center;background-repeat:no-repeat;border-radius:50%;cursor:pointer;transition:all .2s;cursor:crosshair}button[_ngcontent-%COMP%]{width:200px;border-radius:10px;padding:5px 10px 10px 5px;font-size:20px;text-align:center}.dark-button[_ngcontent-%COMP%]{color:#000;background-color:#f0f8ffde;transition:color .3s}.dark-button[_ngcontent-%COMP%]:hover{color:#333}.dark-button[_ngcontent-%COMP%]:active{color:#666}.overlay[_ngcontent-%COMP%]{position:fixed;top:0;left:0;width:100%;height:100%;background-color:#00000080;display:flex;justify-content:center;align-items:center;z-index:1000}.custom-alert[_ngcontent-%COMP%]{background-color:#ffffffe6;border:1px solid #ccc;border-radius:8px;width:400px;box-shadow:0 4px 6px #0000001a}.custom-alert-header[_ngcontent-%COMP%]{padding:10px;border-top-left-radius:8px;border-top-right-radius:8px;font-weight:700;display:flex;justify-content:center;align-items:center;position:relative}.custom-alert-body[_ngcontent-%COMP%]{padding:15px;color:#333;text-align:center}.close-btn[_ngcontent-%COMP%]{font-size:20px;cursor:pointer;color:#000;padding:0 10px;position:absolute;right:10px;top:10px}.close-btn[_ngcontent-%COMP%]:hover{color:#9eb384}.success-alert[_ngcontent-%COMP%]{border-color:#f3f3f3;background-color:#ffffffde}"]})};var xe=[{path:"ahorcado",component:j},{path:"mayor",component:N},{path:"preguntados",component:J},{path:"aim-game",component:D}],W=class i{static \u0275fac=function(e){return new(e||i)};static \u0275mod=A({type:i});static \u0275inj=T({imports:[$.forChild(xe),$]})};var ne=class i{static \u0275fac=function(e){return new(e||i)};static \u0275mod=A({type:i});static \u0275inj=T({imports:[X,W]})};export{ne as JuegosModule};
