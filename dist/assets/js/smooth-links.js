window.addEventListener("load",(function(){const e=document.querySelectorAll('a[href^="#"]');for(let t of e)t.addEventListener("click",(function(e){e.preventDefault();const o=t.getAttribute("href");"hidden"===document.body.style.overflow&&(document.body.removeAttribute("style"),navigation.style.left="-100%",toggle.classList.add("closed"),toggle.classList.remove("opened")),document.querySelector(o).scrollIntoView({behavior:"smooth",block:"start"})}))}));