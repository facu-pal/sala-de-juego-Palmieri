import{B as y,C as p,Ca as T,Da as G,E as r,F as n,H as W,I as _,J as C,N as a,P as c,W as F,ea as j,fa as O,ia as I,j as w,k as l,m as x,n as d,o as m,pa as M,r as k,s as A,sa as L,w as s,x as S,za as P}from"./chunk-K5OLA4J3.js";var u=class o{constructor(t,e){this.firestore=t;this.auth=e}logGameResult(t,e){let i=G(this.firestore,"puntoJuegos");T(i,{puntos:t,juego:e,user:this.auth.currentUser?.email})}static \u0275fac=function(e){return new(e||o)(x(P),x(L))};static \u0275prov=w({token:o,factory:o.\u0275fac,providedIn:"root"})};var J=(o,t)=>({"btn-correct":o,"btn-incorrect":t});function R(o,t){if(o&1&&(r(0,"div",15),a(1),n()),o&2){let e=t.$implicit;s(),c(" ",e," ")}}function V(o,t){if(o&1){let e=W();r(0,"button",16),_("click",function(){let b=k(e).$implicit,E=C();return A(E.onLetterSelected(b))}),a(1),n()}if(o&2){let e=t.$implicit,i=C();p("ngClass",F(3,J,i.splittedWord.includes(e)&&i.lettersAlreadySelected.includes(e),!i.splittedWord.includes(e)&&i.lettersAlreadySelected.includes(e)))("disabled",i.lettersAlreadySelected.includes(e)),s(),c(" ",e," ")}}var f=class o{constructor(t){this.loggerJuegoService=t}letters=["A","B","C","D","E","F","G","H","I","J","K","L","M","N","\xD1","O","P","Q","R","S","T","U","V","W","X","Y","Z"];wordsList=["Goku","Vegeta","Piccolo","Gohan","Trunks","Bulma","Krillin","Freezer","Cell","Majin","Pikachu","Charizard","Bulbasaur","Squirtle","Jigglypuff","Eevee","Mewtwo","Lucario","Gengar","Snorlax","Messi","Maradona","Aguero","Tevez","Mascherano","Dybala","alvarez","Riquelme","Higuain","Dibu","F\xFAtbol","Baloncesto","Tenis","Voleibol","Nataci\xF3n","Atletismo","Rugby","Golf","Boxeo","Hockey"];playedWords=[];activeWord="";splittedWord="casa".split("");secretWord=[];lettersAlreadySelected=[];attemps=0;gameStatus="initial";score=0;ngOnInit(){this.wordsList=this.shuffleArray(this.wordsList),this.newGame()}shuffleArray(t){for(var e=t.length-1;e>0;e--){var i=Math.floor(Math.random()*(e+1)),b=t[e];t[e]=t[i],t[i]=b}return t}newGame(){this.attemps=8,this.lettersAlreadySelected=[],this.activeWord=this.wordsList.splice(0,1)[0],this.splittedWord=this.activeWord.split(""),this.splittedWord=this.splittedWord.map(t=>{let e=t.toUpperCase();return this.removeAccents(e)}),this.secretWord=this.splittedWord.map(t=>"_")}removeAccents(t){return t.normalize("NFD").replace(/[\u0300-\u036f]/g,"")}onLetterSelected(t){if(this.lettersAlreadySelected.push(t),this.splittedWord.includes(t)){if(!this.secretWord.includes(t)){for(let e=0;e<this.splittedWord.length;e++)this.splittedWord[e].toUpperCase()==t&&(this.secretWord[e]=t,this.score+=5);this.secretWord.includes("_")||(this.score+=25,this.playedWords.push(this.activeWord),setTimeout(()=>{this.newGame()},2e3))}}else this.attemps--,this.attemps==0&&(this.score>0&&(this.score-=10),this.onFailedGame())}onFailedGame(){this.loggerJuegoService.logGameResult(this.score,"ahorcado"),this.score=0,this.attemps=8;for(let t=0;t<this.splittedWord.length;t++){let e=this.splittedWord[t].toUpperCase();this.secretWord[t]=e}setTimeout(()=>{this.newGame()},2e3)}static \u0275fac=function(e){return new(e||o)(S(u))};static \u0275cmp=d({type:o,selectors:[["app-ahorcado"]],decls:20,vars:4,consts:[[1,"main","min-vh-100"],[1,"py-5"],[1,"container","px-lg-5"],[1,"p-lg-2","rounded-3","text-center","divTitulo"],[1,"m-4","m-lg-5"],[1,"display-5","fw-bold","image-text"],[1,"display-7"],[1,"m-5","d-flex","gap-5","divPuntoVida"],[1,"game-info"],[1,"container","divLetras"],[1,"row","d-flex"],[1,"container","d-flex","align-items-center","justify-content-center","gap-3","container-secret-letter"],["class","display-1",4,"ngFor","ngForOf"],[1,"container","row","d-flex","flex-wrap","align-content-between","mt-5","game-controls",2,"padding-left","4rem","gap","1.4rem"],["class","btn btn-outline-dark","style","width: 3rem; height: 3rem;",3,"ngClass","disabled","click",4,"ngFor","ngForOf"],[1,"display-1"],[1,"btn","btn-outline-dark",2,"width","3rem","height","3rem",3,"click","ngClass","disabled"]],template:function(e,i){e&1&&(r(0,"div",0)(1,"header",1)(2,"div",2)(3,"div",3)(4,"div",4)(5,"h1",5),a(6,"Ahorcado"),n(),r(7,"h2",6),a(8,"Adivina la palabra"),n()()()()(),r(9,"div",7)(10,"span",8),a(11),n(),r(12,"span",8),a(13),n()(),r(14,"div",9)(15,"div",10)(16,"div",11),y(17,R,2,1,"div",12),n()(),r(18,"div",13),y(19,V,2,6,"button",14),n()()()),e&2&&(s(11),c("Puntos: ",i.score,""),s(2),c("Vidas restantes: ",i.attemps,""),s(4),p("ngForOf",i.secretWord),s(2),p("ngForOf",i.letters))},dependencies:[j,O],styles:[".main[_ngcontent-%COMP%]{background-image:url(https://wallpapers.com/images/hd/game-night-background-poemd877bzft58ix.jpg);background-size:cover;background-position:center;background-repeat:no-repeat}.divTitulo[_ngcontent-%COMP%]{background-color:#f0e9e980;height:150px;display:flex;justify-content:center;align-items:center}.divPuntoVida[_ngcontent-%COMP%]{background-color:#f0e9e980;height:50px;width:320px;max-width:400;border-radius:10px}.divLetras[_ngcontent-%COMP%]{background-color:#f0e9e9cc;height:400px;max-height:800px;width:800px;max-width:900px;border-radius:10px}.btn-correct[_ngcontent-%COMP%]{background-color:green;color:#fff;border-color:green}.btn-incorrect[_ngcontent-%COMP%]{background-color:red;color:#fff;border-color:red}"]})};var h=class o{static \u0275fac=function(e){return new(e||o)};static \u0275cmp=d({type:o,selectors:[["app-mayor-menor"]],decls:9,vars:0,consts:[[1,"main","min-vh-100"],[1,"py-5"],[1,"container","px-lg-5"],[1,"p-lg-2","rounded-3","text-center","divTitulo"],[1,"m-4","m-lg-5"],[1,"display-5","fw-bold","image-text"],[1,"display-7"]],template:function(e,i){e&1&&(r(0,"div",0)(1,"header",1)(2,"div",2)(3,"div",3)(4,"div",4)(5,"h1",5),a(6,"Mayor menor"),n(),r(7,"h2",6),a(8,"Adivina si la siguiente carta va a ser mayor o menor que la anterior"),n()()()()()())},styles:[".main[_ngcontent-%COMP%]{background-image:url(https://wallpapers.com/images/hd/game-night-background-poemd877bzft58ix.jpg);background-size:cover;background-position:center;background-repeat:no-repeat}.divTitulo[_ngcontent-%COMP%]{background-color:#f0e9e980;height:150px;display:flex;justify-content:center;align-items:center}"]})};var B=[{path:"ahorcado",component:f},{path:"mayor",component:h}],v=class o{static \u0275fac=function(e){return new(e||o)};static \u0275mod=m({type:o});static \u0275inj=l({imports:[M.forChild(B),M]})};var N=class o{static \u0275fac=function(e){return new(e||o)};static \u0275mod=m({type:o});static \u0275inj=l({imports:[I,v]})};export{N as JuegosModule};
