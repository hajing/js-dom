/**
 * Created by hejing on 2016/10/23.
 */
function stripeTables(){
    if(!document.getElementsByTagName) return false;
    var tables = document.getElementsByTagName("table");
    var odd,rows;
    for(var i=0;i<tables.length;i++){
        odd = false;
        rows = tables[i].getElementsByTagName("tr");
        for(var j=0;j<rows.length;j++){
            rows[j].onmouseover = function(){ this.style.fontWeight = "bold";};
            rows[j].onmouseout = function(){ this.style.fontWeight = "normal";};
            //alert(odd);
            if(odd){
                //rows[j].style.backgroundColor = "#ffc";
                addClass(rows[j],"odd");
                odd = false;
            }else{
                odd = true;
            }
        }
    }
}
/*function highlightRows(){
    if(!document.getElementsByTagName) return false;
    var rows = document.getElementsByTagName("tr");
    for(var i=0;i<rows.length;i++){
        rows[i].onmouseover = function(){
            this.style.fontWeight = "bold";
        }
        rows[i].onmouseout = function(){
            this.style.fontWeight = "normal";
        }
    }
}*/
function addClass(element,value){
    if(!element.className){
        element.className = value;
    }else{
        newClassName = element.className;
        newClassName+= " ";
        newClassName+= value;
        element.className = newClassName;
    }
}
addLoadEvent(stripeTables);
//addLoadEvent(highlightRows);