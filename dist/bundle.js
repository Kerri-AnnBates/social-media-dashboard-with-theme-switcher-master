(()=>{var e=document.querySelector("#toggle"),t=document.querySelector("body"),c=document.querySelector(".dash__header"),l=document.querySelectorAll(".card");e.addEventListener("click",(function(){t.classList.toggle("light"),c.classList.toggle("light"),l.forEach((function(e){e.classList.toggle("light")}))}))})();