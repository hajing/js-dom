/**
 * Created by hejing on 2016/10/23.
 */

/*function styleHeaderSiblings(){
    if(!document.getElementsByName) return false;
    var header = document.getElementsByTagName("h1");
    var elem;
    for(var i=0;i<header.length;i++){
        elem = getNextElement(header[i].nextSibling);
        //elem.style.fontWeight = "bold";
        //elem.style.fontSize = "1.2em";
        addClass(elem,"intro");
    }
}*/
function styleHeaderSiblings(tag,theclass){
    if(!document.getElementsByName) return false;
    var elems = document.getElementsByTagName(tag);
    var elem;
    for(var i=0;i<elems.length;i++){
        elem = getNextElement(elems[i].nextSibling);
        //elem.style.fontWeight = "bold";
        //elem.style.fontSize = "1.2em";
        addClass(elem,theclass);
    }
}
function getNextElement(node){
    if(node.nodeType == 1) return node;
    if(node.nextSibling) return getNextElement(node.nextSibling);
    return null;
}
function addClass(element,value){
    if(!element.className){
        element.className = value;
    }else{
        //var newClassName = element.className;
        newClassName = element.className;
        newClassName+= " ";
        newClassName+= value;
        element.className = newClassName;
    }
}
//addLoadEvent(styleHeaderSiblings("h1","intro"));
addLoadEvent(function(){
   styleHeaderSiblings("h1","intro");
});