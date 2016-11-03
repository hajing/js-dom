/**
 * Created by hejing on 2016/10/19.
 */
window.onload = function(){
    secondFunction();
}

function firstFunction(){
    var para = document.createElement("p");
    var txt = document.createTextNode("helo world");
    para.appendChild(txt);
    var testdiv = document.getElementById("testdiv");
    testdiv.appendChild(para);
}

function secondFunction(){
    var para = document.createElement("p");
    var txt_1 = document.createTextNode("This is");
    var emphasis = document.createElement("em");
    var txt_2 = document.createTextNode(" my ");
    var txt_3 = document.createTextNode(" content.");
    para.appendChild(txt_1);
    emphasis.appendChild(txt_2);
    para.appendChild(emphasis);
    para.appendChild(txt_3);
    var testdiv = document.getElementById("testdiv");
    testdiv.appendChild(para);

}