function LazyChord(){for(var e=document.getElementsByClassName("lazy"),t=0;t<e.length;t++)isInViewport(e[t])&&(e[t].src=e[t].getAttribute("data-src"))}function isInViewport(e){var t=e.getBoundingClientRect();return t.bottom>=0&&t.right>=0&&t.top<=(window.innerHeight||document.documentElement.clientHeight)&&t.left<=(window.innerWidth||document.documentElement.clientWidth)}function registerListener(e,t){window.addEventListener?window.addEventListener(e,t):window.attachEvent("on"+e,t)}registerListener("load",LazyChord),registerListener("scroll",LazyChord),document.addEventListener("DOMContentLoaded",function(){"use strict";for(var e=document.querySelectorAll("a"),t=e.length,n=/firefox|trident/i.test(navigator.userAgent)?document.documentElement:document.body,i=function(e,t,n,i){return(e/=i/2)<1?n/2*e*e*e+t:n/2*((e-=2)*e*e+2)+t};t--;)e.item(t).addEventListener("click",function(e){var t,o=n.scrollTop,r=document.getElementById(/[^#]+$/.exec(this.href)[0]).getBoundingClientRect().top,d=n.scrollHeight-window.innerHeight,a=d>o+r?r:d-o,c=900,s=function(e){t=t||e;var r=e-t,d=i(r,o,a,c);n.scrollTop=d,c>r&&requestAnimationFrame(s)};requestAnimationFrame(s),e.preventDefault()})});
function loadjscssfile(filename, filetype){
    if (filetype=="js"){ //if filename is a external JavaScript file
        var fileref=document.createElement('script')
        fileref.setAttribute("type","text/javascript")
        fileref.setAttribute("src", filename)
    }
    else if (filetype=="css"){
        var fileref=document.createElement("link")
        fileref.setAttribute("rel", "stylesheet")
        fileref.setAttribute("type", "text/css")
        fileref.setAttribute("href", filename)
    }
    if (typeof fileref!="undefined")
        document.getElementsByTagName("head")[0].appendChild(fileref)
}
 
loadjscssfile("https://cdn.statically.io/gh/chordsfylan/chordfylan/master/raphael.js", "js")
loadjscssfile("https://cdn.statically.io/gh/chordsfylan/chordfylan/master/ChordChart1.2.js", "js")
loadjscssfile("https://cdn.statically.io/gh/chordsfylan/chordfylan/master/chordsh.js", "js")
loadjscssfile("https://cdn.statically.io/gh/chordsfylan/chordfylan/master/piano.js", "js")