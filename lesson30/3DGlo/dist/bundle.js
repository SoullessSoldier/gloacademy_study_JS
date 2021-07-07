(()=>{"use strict";function e(e){return function(e){if(Array.isArray(e))return t(e)}(e)||function(e){if("undefined"!=typeof Symbol&&null!=e[Symbol.iterator]||null!=e["@@iterator"])return Array.from(e)}(e)||function(e,n){if(e){if("string"==typeof e)return t(e,n);var o=Object.prototype.toString.call(e).slice(8,-1);return"Object"===o&&e.constructor&&(o=e.constructor.name),"Map"===o||"Set"===o?Array.from(e):"Arguments"===o||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(o)?t(e,n):void 0}}(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function t(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,o=new Array(t);n<t;n++)o[n]=e[n];return o}function n(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,o=new Array(t);n<t;n++)o[n]=e[n];return o}var o,r,c,a,i,l,u,s,d,m,f,v,p,y,g,h,E,b,L,S,A,w,I,q,x,B,k,T,C,M,j,D,$,F,O,R,W,z,N,H,U,_,J,P,G,K,Q,V,X,Y,Z,ee,te,ne,oe;te=document.getElementById("timer-hours"),ne=document.getElementById("timer-minutes"),oe=document.getElementById("timer-seconds"),function e(){var t,n,o,r,c=(t=(new Date("16 jul 2021 23:59:59").getTime()-(new Date).getTime())/1e3,n=Math.floor(t%60),o=Math.floor(t/60%60),r=Math.floor(t/3600),Math.floor(t/86400),{timeRemaining:t,hours:r,minutes:o,seconds:n});Math.floor(c.timeRemaining)>=0&&(te.textContent=c.hours.toString().padStart(2,"0"),ne.textContent=c.minutes.toString().padStart(2,"0"),oe.textContent=c.seconds.toString().padStart(2,"0"),setTimeout(e,1e3))}(),ee=document.querySelector("menu"),document.addEventListener("click",(function(e){var t=e.target;(t.closest(".menu")||t.classList.contains("close-btn")||t.closest("menu")&&!t.matches("menu")||!(t=t.closest("menu"))&&ee.classList.contains("active-menu"))&&ee.classList.toggle("active-menu")})),Q=document.querySelector(".popup"),V=document.querySelector(".popup-content"),X=document.querySelectorAll(".popup-btn"),Y=50,Z=function e(){J=requestAnimationFrame(e),Q.offsetLeft+Y<0?(P=Q.offsetLeft,G=V.offsetLeft,P+=Y,G+=Y,Q.style.left=P+"px",V.style.left=G+"px"):Q.offsetLeft+Y>0&&Q.offsetLeft+Y<Y?Y/=2:0===Q.offsetLeft&&cancelAnimationFrame(J)},X.forEach((function(e){e.addEventListener("click",(function(){document.documentElement.clientWidth<768?Q.style.display="block":(Y=50,Q.style.display="block",K=document.documentElement.clientWidth/2-V.clientWidth/2,Q.style.left=-Q.clientWidth+"px",V.style.left=-Q.clientWidth+K+"px",J=requestAnimationFrame(Z))}))})),Q.addEventListener("click",(function(e){var t=e.target;t.classList.contains("popup-close")?Q.style.display="none":(t=t.closest(".popup-content"))||(Q.style.display="none")})),H=document.querySelector('[href="#service-block"]'),U=H.getAttribute("href").slice(1),_=document.getElementById("".concat(U)),H.addEventListener("click",(function(e){e.preventDefault(),window.scrollTo({top:_.offsetTop,behavior:"smooth"})})),W=document.querySelector(".service-header"),z=W.querySelectorAll(".service-header-tab"),N=document.querySelectorAll(".service-tab"),W.addEventListener("click",(function(e){var t=e.target;(t=t.closest(".service-header-tab"))&&z.forEach((function(e,n){e===t&&function(e){for(var t=0;t<N.length;t++)e===t?(z[t].classList.add("active"),N[t].classList.remove("d-none")):(z[t].classList.remove("active"),N[t].classList.add("d-none"))}(n)}))})),C=document.querySelectorAll(".portfolio-item"),document.querySelectorAll(".portfolio-btn"),M=document.querySelectorAll(".dot"),j=document.querySelector(".portfolio-content"),D=0,$=function(e,t,n){e[t].classList.remove(n)},F=function(e,t,n){e[t].classList.add(n)},O=function(){$(C,D,"portfolio-item-active"),$(M,D,"dot-active"),++D>=C.length&&(D=0),F(C,D,"portfolio-item-active"),F(M,D,"dot-active")},R=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:3e3;T=setInterval(O,e)},j.addEventListener("click",(function(e){e.preventDefault();var t=e.target;t.matches(".portfolio-btn, .dot")&&($(C,D,"portfolio-item-active"),$(M,D,"dot-active"),t.matches("#arrow-right")?D++:t.matches("#arrow-left")?D--:t.matches(".dot")&&M.forEach((function(e,n){e===t&&(D=n)})),D>=C.length&&(D=0),D<0&&(D=C.length-1),F(C,D,"portfolio-item-active"),F(M,D,"dot-active"))})),j.addEventListener("mouseover",(function(e){e.target.matches(".portfolio-btn, .dot")&&clearInterval(T)})),j.addEventListener("mouseout",(function(e){e.target.matches(".portfolio-btn, .dot")&&R()})),R(2e3),(k=document.querySelectorAll(".command__photo")).forEach((function(e){e.addEventListener("mouseover",(function(t){B=e.src,t.target.src=e.dataset.img}))})),k.forEach((function(e){e.addEventListener("mouseout",(function(e){e.target.src=B}))})),document.querySelectorAll(".calc-item").forEach((function(e){e.addEventListener("input",(function(e){var t;(t=e.target).value=t.value.replace(/\D/g,"")}))})),o=document.getElementById("form2-name"),r=document.getElementById("form2-message"),c=document.getElementById("form2-email"),a=document.getElementById("form2-phone"),i=document.getElementById("form1-name"),l=document.getElementById("form1-email"),u=document.getElementById("form1-phone"),s=document.getElementById("form3-name"),d=document.getElementById("form3-email"),m=document.getElementById("form3-phone"),f=[document.getElementById("form1"),document.getElementById("form2"),document.getElementById("form3")],v=new RegExp("^\\+?\\d{1}[\\(\\- ]?(\\d{3})[\\)\\- ]?[\\- ]?(\\d{3})[\\- ]?(\\d{2})[\\- ]?(\\d{2})$","gm"),p=new RegExp("^[^\\s@]+@[^\\s@]+\\.[^\\s@]+$"),y=new RegExp("^[а-яё ]{3,}$","ui"),g=new RegExp("^[\\?,{!\\.а-яё\\d ]+$","ui"),h=function(e){return e.closest("form").querySelector(".form-btn")},E=function(e){return(t=e.closest("form").elements,function(e){if(Array.isArray(e))return n(e)}(t)||function(e){if("undefined"!=typeof Symbol&&null!=e[Symbol.iterator]||null!=e["@@iterator"])return Array.from(e)}(t)||function(e,t){if(e){if("string"==typeof e)return n(e,t);var o=Object.prototype.toString.call(e).slice(8,-1);return"Object"===o&&e.constructor&&(o=e.constructor.name),"Map"===o||"Set"===o?Array.from(e):"Arguments"===o||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(o)?n(e,t):void 0}}(t)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()).filter((function(e){return"input"===e.tagName.toLowerCase()})).every((function(e){return e.hasAttribute("valid")}));var t},b=function(e){e.setAttribute("disabled","true"),e.style.cursor="not-allowed"},L=function(e){e.removeAttribute("disabled"),e.style.cursor="pointer"},S=function(e,t){return e.test(t)},A=function(e,t){e?(t.style.border="2px solid green",t.setAttribute("valid","valid")):(t.style.border="2px solid red",t.removeAttribute("valid"))},x=(w=[i,o,s]).concat(I=[l,c,d],q=[u,a,m]),r.addEventListener("input",(function(e){var t,n=e.target;(t=n).value=t.value.replace(/[^?!,.а-яё\d ]/gi,""),A(S(g,n.value.trim()),n),E(n)?L(h(n)):b(h(n))})),I.forEach((function(e){e.addEventListener("input",(function(e){var t,n=e.target;(t=n).value=t.value.replace(/[^a-z\d\@\-\_\.\!\~\*\']/gi,""),A(S(p,n.value.trim()),n),E(n)?L(h(n)):b(h(n))}))})),q.forEach((function(e){e.addEventListener("input",(function(e){var t,n=e.target;(t=n).value=t.value.replace(/[^\+\d\(\)\-]/g,""),A(S(v,n.value.trim()),n),E(n)?L(h(n)):b(h(n))}))})),w.forEach((function(e){e.addEventListener("input",(function(e){var t,n=e.target;(t=n).value=t.value.replace(/[^а-яё ]/gi,""),A(S(y,n.value.trim()),n),E(n)?L(h(n)):b(h(n))}))})),x.forEach((function(e){e.addEventListener("blur",(function(e){return(t=e.target).value=t.value.replace(/[ \-]{2,}/g," "),t.value=t.value.replace(/[\-]{2,}/g,"-"),t.value=t.value.replace(/^[ \-]/g,""),t.value=t.value.replace(/[ \-]$/g,""),void(w.includes(t)&&function(e){e.value=e.value.toLowerCase().replace(/\S{2,}/g,(function(e){return e.replace(/\S/,(function(e){return e.toUpperCase()}))}))}(t));var t}))})),f.forEach((function(e){var t=e.querySelector(".form-btn");b(t)})),function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:100,t=document.querySelector(".calc-block"),n=document.querySelector(".calc-type"),o=document.querySelector(".calc-square"),r=document.querySelector(".calc-count"),c=document.querySelector(".calc-day"),a=document.getElementById("total"),i=function(){var t,i,l,u=1,s=1,d=n.options[n.selectedIndex].value/10,m=+o.value;r.value>1&&(u+=(r.value-1)/10),c.value&&c.value<5?s*=2:c.value&&c.value<10&&(s*=1.5),t=a,i=d&&m?e*d*m*u*s:0,l=null,window.requestAnimationFrame((function e(n){l||(l=n);var o=Math.min((n-l)/500,1);t.innerHTML=Math.floor(o*(i-0)+0),o<1&&window.requestAnimationFrame(e)}))};t.addEventListener("change",(function(e){var t=e.target;(t.matches("select")||t.matches("input"))&&i()}))}(100),function(){var t=document.getElementById("form1"),n=document.getElementById("form2"),o=document.getElementById("form3"),r=[t,n,o],c=document.createElement("div");c.style.cssText="font-size: 2rem;",c.classList.add("preloader-block");var a=function(e,t){e.innerHTML='<font color="red">'.concat(t,"</font>"),setTimeout((function(){e.textContent=""}),2e3)};r.forEach((function(t){t.addEventListener("submit",(function(n){return function(t,n){if(t.preventDefault(),n.appendChild(c),function(t){var n=!0;return e(t.elements).forEach((function(e){"input"!==e.tagName.toLowerCase()||e.value.trim()||(a(c,"Заполните поля в форме!"),n=!1)})),n}(n)){c.innerHTML="<section>\n        <div class='sk-three-bounce'>\n          <div class='sk-bounce-1 sk-child'></div>\n          <div class='sk-bounce-2 sk-child'></div>\n          <div class='sk-bounce-3 sk-child'></div>\n        </div>\n      </section>";var r=new FormData(n),i={};r.forEach((function(e,t){i[t]=e})),function(e){return fetch("./server.php",{method:"POST",mode:"same-origin",headers:{"Content-Type":"application/json"},body:JSON.stringify(e)})}(i).then((function(e){if(!e.ok)throw new Error("Error:",e.status," with status text:",e.statusText);n===o&&(c.style.cssText="font-size: 2rem; color: #fff"),c.textContent="Спасибо! Мы скоро с вами свяжемся!"})).catch((function(e){n===o&&(c.style.cssText="font-size: 2rem; color: #fff"),c.textContent="Что-то пошло не так",console.error(e)})).finally(function(t){var n=t.querySelector(".form-btn");e(t.elements).forEach((function(e){"input"===e.tagName.toLowerCase()&&(e.value="",e.style.border="")})),n.setAttribute("disabled","true"),n.style.cursor="not-allowed"}(n))}}(n,t)}))}))}()})();