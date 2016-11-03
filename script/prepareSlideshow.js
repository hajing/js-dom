/**
 * Created by hejing on 2016/10/26.
 */
function prepareSlideshow(){
    if(!document.getElementById) return false;
    if(!document.getElementsByTagName) return false;
    if(!document.getElementById("linklist")) return false;
    //if(!document.getElementById("preview")) return false;
    //var preview = document.getElementById("preview");
    //preview.style.position = "absolute";
    //preview.style.left = "0px";
    //preview.style.top = "0px";
    var slideshow = document.createElement("div");
    slideshow.setAttribute("id","slideshow");
    var preview = document.createElement("img");
    preview.setAttribute("id","preview");
    preview.setAttribute("src","images/topics.gif");
    preview.setAttribute("alt","building blocks of web design");
    slideshow.appendChild(preview);
    var list = document.getElementById("linklist");
    insertAfter(slideshow,list);
    var links = list.getElementsByTagName("a");
    links[0].onmouseover = function(){
        moveElement("preview",-100,0,10);
    }
    links[1].onmouseover = function(){
        moveElement("preview",-200,0,10);
    }
    links[2].onmouseover = function(){
        moveElement("preview",-300,0,10);
    }
}
addLoadEvent(prepareSlideshow);