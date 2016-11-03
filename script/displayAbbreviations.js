/**
 * Created by hejing on 2016/10/20.
 */
function displayAbbreviations(){
    if(!document.getElementsByTagName || !document.createElement || !document.createTextNode) return false;
    //获取所以abbr
    var abbreviations = document.getElementsByTagName("abbr");
    if(abbreviations.length < 1) return false;
    var defs = new Array();
    //遍历获取到的abbr
    for(var i=0;i<abbreviations.length;i++){
        var current_addr = abbreviations[i];
        if(current_addr.childNodes.length < 1) continue;
        var definition = current_addr.getAttribute("title");
        var key = current_addr.lastChild.nodeValue;
        defs[key] = definition;
        //defs[abbreviations[i].lastChild.nodeValue] = abbreviations[i].getAttribute("title");
    }
    //创建定义列表
    var dlist = document.createElement("dl");
    //遍历定义
    for(key in defs){
        var definition = defs[key];
        //创建定义标题
        var dtitle = document.createElement("dt");
        var dtitle_text = document.createTextNode(key);
        dtitle.appendChild(dtitle_text);
        //创建定义描述
        var ddsec = document.createElement("dd");
        var ddsec_text = document.createTextNode(definition);
        ddsec.appendChild(ddsec_text);
        //把他们添加到定义列表
        dlist.appendChild(dtitle);
        dlist.appendChild(ddsec);
    }
    if(dlist.childNodes.length < 1) return false;
    //创建标题
    var header = document.createElement("h1");
    var header_text = document.createTextNode("Abbreviations");
    header.appendChild(header_text);
    //把标题加到主体页面
    //document.getElementsByTagName("body")[0].appendChild(header);
    document.body.appendChild(header);
    //把定义列表添加到页面主体
    //document.getElementsByTagName("body")[0].appendChild(dlist);
    document.body.appendChild(dlist);
}
addLoadEvent(displayAbbreviations);