/**
 * Created by hejing on 2016/10/23.
 */
function dispalyAccessKeys(){
    var links = document.getElementsByTagName("a");
    var akeys = new Array();
    for(var i=0;i<links.length;i++){
        var current_link = links[i];
        var key = current_link.getAttribute("accesskey")
        var text = current_link.lastChild.nodeValue;
        akeys[key] = text;
    }
    var list = document.createElement("ul");
    for(key in akeys){
        var text = akeys[key];
        var str = text + ": " + key;
        var item = document.createElement("li");
        item_text = document.createTextNode(str);
        item.appendChild(item_text);
        list.appendChild(item);
    }
    var header = document.createElement("h1");
    var header_text = document.createTextNode("Accesskeys");
    header.appendChild(header_text);
    document.body.appendChild(header);
    document.body.appendChild(list);
}
addLoadEvent(dispalyAccessKeys);