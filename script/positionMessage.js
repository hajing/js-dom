/**
 * Created by hejing on 2016/10/26.
 */
function positionMessage(){
    if(!document.getElementById) return false;
    if(!document.getElementById("message")) return false;
    var elem = document.getElementById("message");
    elem.style.position = "absolute";
    elem.style.left = "50px";
    elem.style.top = "100px";
    //movement = setTimeout("moveMessage()",5000);
    //clearTimeout(movement);
    moveElement("message",125,25,20);
    if(!document.getElementById) return false;
    if(!document.getElementById("message2")) return false;
    var elem = document.getElementById("message2");
    elem.style.position = "absolute";
    elem.style.left = "50px";
    elem.style.top = "50px";
    //movement = setTimeout("moveMessage()",5000);
    //clearTimeout(movement);
    moveElement("message2",125,125,20)
}
addLoadEvent(positionMessage);