!function(){var e="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},t={},r={},o=e.parcelRequired7c6;null==o&&((o=function(e){if(e in t)return t[e].exports;if(e in r){var o=r[e];delete r[e];var a={id:e,exports:{}};return t[e]=a,o.call(a.exports,a,a.exports),a.exports}var i=new Error("Cannot find module '"+e+"'");throw i.code="MODULE_NOT_FOUND",i}).register=function(e,t){r[e]=t},e.parcelRequired7c6=o);var a=o("dBKLp");o("bMFcV");var i=o("cEgaa"),n=o("jvc3o"),l=o("7tKzz");o("hDVFF"),o("6v6Md");var d=o("6yfxu");o("1J7KA");var c=o("38PHG");o("2fHCY"),o("hDVFF"),o("5CXNC"),window.addEventListener("load",a.removeGlobalLoader),document.querySelector(".isDisabled-js").classList.remove("isDisabled-js");var s=document.querySelector(".gallery"),u=document.querySelector("[data-action='watched']"),v=document.querySelector("[data-action='queue']");function f(e){return e.map((function(e){var t=e.id,r=e.genres,o=e.title,a=e.vote_average,d=e.vote_count,c=e.release_date,s=e.popularity,u=e.original_title,v=e.overview,f=e.poster_path,g=function(e){return e.length<=33?"isNoActive":"isActive"}(o.split("")),p=(0,l.default)(f),w=c.split("-")[0],h=a.toFixed(1),m=(0,i.genresSearchBig)(r);return(0,n.cardMarkup)({id:t,genreString:m,title:o,rating:h,vote_count:d,releaseFullYear:w,posterPath:p,classStatus:g,popularity:s,original_title:u,overview:v})})).join("")}u.addEventListener("click",(function(){var e=(0,d.load)("STATE");console.log("loaded: ",e);var t=e.user.movies.watched;console.log("watchedMV: ",t),s.insertAdjacentHTML("afterbegin",f(t))})),v.addEventListener("click",(function(){var e=(0,d.load)("STATE");console.log("loaded: ",e);var t=e.user.movies.qeue;console.log("watchedMV: ",t),s.insertAdjacentHTML("afterbegin",f(t))})),c.refs.filmCardListEl.addEventListener("click",c.createFilmModal)}();
//# sourceMappingURL=library.3ecae33f.js.map
