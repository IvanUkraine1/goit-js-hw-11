import{S as u,a as m,i as f}from"./assets/vendor-BH9GyP-n.js";(function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))t(e);new MutationObserver(e=>{for(const r of e)if(r.type==="childList")for(const l of r.addedNodes)l.tagName==="LINK"&&l.rel==="modulepreload"&&t(l)}).observe(document,{childList:!0,subtree:!0});function a(e){const r={};return e.integrity&&(r.integrity=e.integrity),e.referrerPolicy&&(r.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?r.credentials="include":e.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function t(e){if(e.ep)return;e.ep=!0;const r=a(e);fetch(e.href,r)}})();let d=new u(".gallery a",{captionsData:"alt",captionDelay:250});d.on("shown.simplelightbox",function(){});function p(i){let o=document.querySelector(".gallery"),a=i.map(t=>`
        <li class="gallery-item">
            <a href="${t.largeImageURL}" class="gallery-link">
                <img 
                class="gallery-image"
                src="${t.webformatURL}" 
                alt="${t.tags}"
                data-source="${t.largeImageURL}"
                >
            </a>
            <div class="image-info">
                <div class="image-info-element">
                    <b>Likes</b>
                    <p>${t.likes}</p>
                </div>
                <div class="image-info-element">
                    <b>Views</b>
                    <p>${t.views}</p>
                </div>
                <div class="image-info-element">
                    <b>Comments</b>
                    <p>${t.comments}</p>
                </div>
                <div class="image-info-element">
                    <b>Downloads</b>
                    <p>${t.downloads}</p>
                </div>
            </div>
        </li>
        `).join("");o.innerHTML="",o.insertAdjacentHTML("beforeend",a),d.refresh()}function g(i){return m.get("https://pixabay.com/api/",{params:{key:"49450031-b4478c296ebc20935df165a9a",q:i,image_type:"photo",orientation:"horizontal",safesearch:!0}})}let y=document.querySelector(".form"),s=document.querySelector('[name="search-text"]'),c=document.querySelector(".loader"),n=document.querySelector(".gallery");y.addEventListener("submit",i=>{if(i.preventDefault(),s.value.trim()===""){n.innerHTML="";return}n.innerHTML="",c.style.display="block",g(s.value).then(o=>{o.data.hits.length>0?p(o.data.hits):(n.innerHTML="",f.show({message:`Sorry, there are no images matching your ${s.value}. Please try again!`,backgroundColor:"#EF4040",messageColor:"#FFBEBE",position:"topRight",icon:"fa-solid fa-ban"}))}).catch(o=>{}).finally(()=>{c.style.display="none"})});
//# sourceMappingURL=index.js.map
