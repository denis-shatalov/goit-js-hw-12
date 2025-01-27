import{a as y,S as v,i as r}from"./assets/vendor-B6jJ9_I0.js";(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))u(s);new MutationObserver(s=>{for(const i of s)if(i.type==="childList")for(const p of i.addedNodes)p.tagName==="LINK"&&p.rel==="modulepreload"&&u(p)}).observe(document,{childList:!0,subtree:!0});function d(s){const i={};return s.integrity&&(i.integrity=s.integrity),s.referrerPolicy&&(i.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?i.credentials="include":s.crossOrigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function u(s){if(s.ep)return;s.ep=!0;const i=d(s);fetch(s.href,i)}})();const f=a=>a.map(e=>`
          <li class="gallery-card">
            <a class="gallery-link" href="${e.largeImageURL}">
              <img
                class="gallery-img"
                src="${e.webformatURL}"
                alt="${e.tags}"
                loading="lazy"
              />
              <div class="info">
  <div class="info-list">
    <span class="info-item">Likes</span>
    <span class="info-item-value">${e.likes}</span>
  </div>
  <div class="info-list">
    <span class="info-item">Views</span>
    <span class="info-item-value">${e.views}</span>
  </div>
  <div class="info-list">
    <span class="info-item">Comments</span>
    <span class="info-item-value">${e.comments}</span>
  </div>
  <div class="info-list">
    <span class="info-item">Downloads</span>
    <span class="info-item-value">${e.downloads}</span>
  </div>
</div>
            </a>
          </li>`).join(""),h=(a,e)=>{const d={params:{key:"25786434-348adb767e319176b4ad356ea",q:a,image_type:"photo",orientation:"horizontal",safesearch:!0,page:e,per_page:15}};return y.get("https://pixabay.com/api/",d)},L=document.querySelector(".js-search-form"),b=document.querySelector(".js-search-input");document.querySelector(".search-btn");const m=document.querySelector(".gallery"),n=document.querySelector(".loader"),t=document.querySelector(".js-btn-load");let g=new v(".gallery a",{captionsData:"alt",captionDelay:250}),o=1,l="";t.classList.add("is-hidden");const w=async a=>{try{if(a.preventDefault(),l=b.value.trim(),!l){r.warning({message:"Please enter a search term.",position:"topRight"});return}o=1,t.classList.add("is-hidden"),m.innerHTML="",n.classList.add("active");const e=await h(l,o);if(n.classList.remove("active"),e.data.total===0){r.info({message:"Sorry, there are no images matching your search query. Please try again!",position:"topRight"});return}m.insertAdjacentHTML("beforeend",f(e.data.hits)),t.classList.remove("is-hidden"),g.refresh(),o*15>=e.data.totalHits?(t.classList.add("is-hidden"),t.removeEventListener("click",c),r.info({message:"We're sorry, but you've reached the end of search results.",position:"topRight"})):(t.classList.remove("is-hidden"),t.addEventListener("click",c))}catch(e){n.classList.remove("active"),r.error({message:"Something went wrong, please try again later.",position:"topRight"}),console.error("Error fetching data:",e)}},c=async()=>{try{o++,n.classList.add("active");const a=await h(l,o);n.classList.remove("active"),m.insertAdjacentHTML("beforeend",f(a.data.hits)),g.refresh(),o*15>=a.data.totalHits?(t.classList.add("is-hidden"),t.removeEventListener("click",c),r.info({message:"We're sorry, but you've reached the end of search results.",position:"topRight"})):(t.classList.remove("is-hidden"),t.addEventListener("click",c));const e=document.querySelector(".gallery-card").getBoundingClientRect().height;window.scrollBy({top:e*2,behavior:"smooth"})}catch(a){console.log(a)}};L.addEventListener("submit",w);t.addEventListener("click",c);
//# sourceMappingURL=index.js.map
