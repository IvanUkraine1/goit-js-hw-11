import{S as d,a as u,i as f}from"./assets/vendor-BH9GyP-n.js";(function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))t(e);new MutationObserver(e=>{for(const r of e)if(r.type==="childList")for(const l of r.addedNodes)l.tagName==="LINK"&&l.rel==="modulepreload"&&t(l)}).observe(document,{childList:!0,subtree:!0});function i(e){const r={};return e.integrity&&(r.integrity=e.integrity),e.referrerPolicy&&(r.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?r.credentials="include":e.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function t(e){if(e.ep)return;e.ep=!0;const r=i(e);fetch(e.href,r)}})();let c=new d(".gallery a",{captionsData:"alt",captionDelay:250});c.on("shown.simplelightbox",function(){});function m(a){let o=document.querySelector(".gallery"),i=a.map(t=>`
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
        `).join("");o.innerHTML="",o.insertAdjacentHTML("beforeend",i),c.refresh()}function p(a){return u.get("https://pixabay.com/api/",{params:{key:"49450031-b4478c296ebc20935df165a9a",q:a,image_type:"photo",orientation:"horizontal",safesearch:!0}})}let g=document.querySelector(".form"),s=document.querySelector('[name="search-text"]'),n=document.querySelector(".loader");g.addEventListener("submit",a=>{a.preventDefault(),s.value.trim()!==""&&(n.style.display="block",p(s.value).then(o=>{o.data.hits.length>0?m(o.data.hits):f.show({message:`Sorry, there are no images matching your ${s.value}. Please try again!`,backgroundColor:"#EF4040",messageColor:"#FFBEBE",position:"topRight",icon:"fa-solid fa-ban"})}).catch(o=>{}).finally(()=>{n.style.display="none"}))});
//# sourceMappingURL=index.js.map
