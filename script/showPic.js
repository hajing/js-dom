/**
 * Created by hejing on 2016/10/18.
 */

function insertAfter(newElement,targetElement){
    var parent = targetElement.parentNode;
    if(parent.lastChild == targetElement){
        parent.appendChild(newElement);
    }else{
        parent.insertBefore(newElement,targetElement.nextSibling);
    }
}

function preparePlaceholder(){
    if(!document.createElement) return false;
    if(!document.createTextNode) return false;
    if(!document.getElementById) return false;
    if(!document.getElementById("imagegallery")) return false;
    var placeholder = document.createElement("img");
    placeholder.setAttribute("id","placeholder");
    placeholder.setAttribute("src","images/placeholder.gif");
    placeholder.setAttribute("alt","my image gallery");
    var description = document.createElement("p");
    description.setAttribute("id","description");
    var desctext = document.createTextNode("choose an image");
    description.appendChild(desctext);
    var gallery = document.getElementById("imagegallery");
    insertAfter(placeholder,gallery);
    insertAfter(description,placeholder);
}

function showPic(whichpic){
    if(!document.getElementById("placeholder"))return false;
    var source = whichpic.getAttribute("href");
    var placeholder = document.getElementById("placeholder");
    if(placeholder.nodeName != "IMG")return false;
    placeholder.setAttribute("src",source);
    if(document.getElementById("description")){
        var text = whichpic.getAttribute("title") ? whichpic.getAttribute("title") : "";
        var description = document.getElementById("description");
        if(description.firstChild.nodeType == 3){
            description.firstChild.nodeValue = text;
        };
    };
    return true;
}

function conuntBodyChildren(){
    var body_element = document.getElementsByTagName("body")[0];
    //alert(body_element.childNodes.length);
    //alert(body_element.nodeType);
}
//window.onload = conuntBodyChildren();

function prepareGallery(){
    if(!document.getElementById || !document.getElementsByTagName) return false;
    if(!document.getElementById("imagegallery")) return false;
    var gallery = document.getElementById("imagegallery");
    var links = gallery.getElementsByTagName("a");
    for(var i=0;i<links.length;i++){
        links[i].onclick = function(){
            return !showPic(this);
        };
    }
}

window.onload = function(){
    preparePlaceholder();
    prepareGallery();
}