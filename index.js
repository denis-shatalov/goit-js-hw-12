import{a as y,S as v,i}from"./assets/vendor-B6jJ9_I0.js";(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))u(s);new MutationObserver(s=>{for(const a of s)if(a.type==="childList")for(const p of a.addedNodes)p.tagName==="LINK"&&p.rel==="modulepreload"&&u(p)}).observe(document,{childList:!0,subtree:!0});function d(s){const a={};return s.integrity&&(a.integrity=s.integrity),s.referrerPolicy&&(a.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?a.credentials="include":s.crossOrigin==="anonymous"?a.credentials="omit":a.credentials="same-origin",a}function u(s){if(s.ep)return;s.ep=!0;const a=d(s);fetch(s.href,a)}})();const h=o=>o.map(e=>`
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
          </li>`).join(""),f=(o,e)=>{const d={params:{key:"25786434-348adb767e319176b4ad356ea",q:o,image_type:"photo",orientation:"horizontal",safesearch:!0,page:e,per_page:15}};return y.get("https://pixabay.com/api/",d)},L=document.querySelector(".js-search-form"),w=document.querySelector(".js-search-input");document.querySelector(".search-btn");const m=document.querySelector(".gallery"),n=document.querySelector(".loader"),t=document.querySelector(".js-btn-load");let g=new v(".gallery a",{captionsData:"alt",captionDelay:250}),r=1,c="";t.classList.add("is-hidden");const b=async o=>{try{if(o.preventDefault(),c=w.value.trim(),!c){i.warning({message:"Please enter a search term.",position:"topRight"});return}r=1,t.classList.add("is-hidden"),m.innerHTML="",n.classList.add("show-loader");const e=await f(c,r);if(n.classList.remove("show-loader"),e.data.total===0){i.info({message:"Sorry, there are no images matching your search query. Please try again!",position:"topRight"});return}m.insertAdjacentHTML("beforeend",h(e.data.hits)),t.classList.remove("is-hidden"),g.refresh(),r*15>=e.data.totalHits?(t.classList.add("is-hidden"),t.removeEventListener("click",l),i.info({message:"We're sorry, but you've reached the end of search results.",position:"topRight"})):(t.classList.remove("is-hidden"),t.addEventListener("click",l))}catch(e){n.classList.remove("show-loader"),i.error({message:"Something went wrong, please try again later.",position:"topRight"}),console.error("Error fetching data:",e)}},l=async()=>{try{r++,n.classList.add("show-loader");const o=await f(c,r);n.classList.remove("show-loader"),m.insertAdjacentHTML("beforeend",h(o.data.hits)),g.refresh(),r*15>=o.data.totalHits?(t.classList.add("is-hidden"),t.removeEventListener("click",l),i.info({message:"We're sorry, but you've reached the end of search results.",position:"topRight"})):(t.classList.remove("is-hidden"),t.addEventListener("click",l));const e=document.querySelector(".gallery-card").getBoundingClientRect().height;window.scrollBy({top:e*2,behavior:"smooth"})}catch(o){console.log(o)}};L.addEventListener("submit",b);t.addEventListener("click",l);
//# sourceMappingURL=index.js.map
