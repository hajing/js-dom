/**
 * Created by hejing on 2016/10/23.
 */

function displayCitations(){
    //获取所有引用
    var quotes = document.getElementsByTagName("blockquote");
    //循环引用
    for(var i=0;i<quotes.length;i++){
        //alert(quotes[i].lastChild.nodeType);
        //取过引用不存在cite,继续循环
        if(!quotes[i].getAttribute("cite")) continue;
        //保存cite属性
        var url = quotes[i].getAttribute("cite");
        //取得引用中的所有元素节点
        var quoteChildren = quotes[i].getElementsByTagName("*");
        //var quoteChildren = quotes[i].childNodes;
        //alert(quoteChildren[quoteChildren.length-1].nodeType);
        //alert(quoteChildren[quoteChildren.length-1].nodeValue);
        //如果没有元素节点,继续循环
        if(quoteChildren.length<1) continue;
        //取得引用中的最后一个元素节点
        var elem = quoteChildren[quoteChildren.length-1];
        //创建标记
        var link = document.createElement("a");
        var link_text = document.createTextNode("source");
        link.setAttribute("href",url);
        link.appendChild(link_text);
        var superscript = document.createElement("sup");
        superscript.appendChild(link);
        //把标记添加到引用中的最后一个元素节点
        elem.appendChild(superscript);
        //alert(quotes[i].lastChild.nodeType);
    }
}
addLoadEvent(displayCitations);