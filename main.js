(()=>{"use strict";const e=function(){content.textContent="",content.append(t.headerElement,n.mainElement,o.footerElement)},t=function(){const e=document.createElement("div");e.setAttribute("id","header");const t=document.createElement("h1");t.textContent="Manu's Coffee",t.setAttribute("id","label");const n=document.createElement("div");n.classList.add("tabs");const o=document.createElement("button");o.textContent="Home";const c=document.createElement("button");c.textContent="Menu";const m=document.createElement("button");return m.textContent="Contact",n.append(o,c,m),e.append(t,n),{headerElement:e,homeButtonElement:o,menuButtonElement:c,contactButtonElement:m}}(),n=function(){const e=document.createElement("div");e.setAttribute("id","main");const t=document.createElement("p");t.textContent="Best coffee in your country";const n=document.createElement("p");n.textContent="Made with passion since 1806";const o=document.createElement("div");o.classList.add("main-photo");const c=document.createElement("div");return c.textContent="Place your order or visit us",e.append(t,n,o,c),{mainElement:e}}(),o=function(){const e=document.createElement("div");return e.textContent="Copyright © 2023 msdanmallan",e.classList.add("footer"),{footerElement:e}}(),c=function(){content.textContent="",content.append(t.headerElement,m.menuElement,o.footerElement)},m=function(){const e=document.createElement("div");e.classList.add("menu");const t=document.createElement("div");t.classList.add("menuItems");const n=document.createElement("p");n.textContent="Flatwhite",n.classList.add("itemNames"),t.append(n);const o=document.createElement("div");o.classList.add("menuItems");const c=document.createElement("p");c.textContent="Cappucino",c.classList.add("itemNames"),o.append(c);const m=document.createElement("div");m.classList.add("menuItems");const a=document.createElement("p");a.textContent="Frappucino",a.classList.add("itemNames"),m.append(a);const d=document.createElement("div");d.classList.add("menuItems");const s=document.createElement("p");s.textContent="Latte",s.classList.add("itemNames"),d.append(s);const l=document.createElement("div");l.classList.add("menuItems");const u=document.createElement("p");return u.textContent="Espresso",u.classList.add("itemNames"),l.append(u),e.append(t,o,m,d,l),{menuElement:e}}(),a=function(){content.textContent="",content.append(t.headerElement,d.contactElement,o.footerElement)},d=function(){const e=document.createElement("div");e.classList.add("contact");const t=document.createElement("div");t.classList.add("contactCard");const n=document.createElement("p");n.textContent="Phone: +000 1234 567 891";const o=document.createElement("p");return o.textContent="501 lorem ipsum avenue, lorem ipsum",t.append(n,o),e.appendChild(t),{contactElement:e}}();console.log("hello"),function(){const m=document.getElementById("content");return{loadHomePage:function(){m.append(t.headerElement,n.mainElement,o.footerElement),t.homeButtonElement.addEventListener("click",e),t.menuButtonElement.addEventListener("click",c),t.contactButtonElement.addEventListener("click",a)}}}().loadHomePage()})();