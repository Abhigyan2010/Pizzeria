var menu_list_array=["Chicken Tandoori Pizza","Veg Supreme Pizza","Paneer Tikka Pizza","Deluxe Veggie Pizza","Veg Extravaganza Pizza"];
var number=0;
var new_row="";
var name="";
function getmenu(){
    var htmldata;
    htmldata="<ol class='menulist'>"
    menu_list_array.sort();
    for (var i=0; i<menu_list_array.length; i++ +"<li>"){
        htmldata-htmldata+"<ol>";
        document.getElementById("newRow").innerHTML=htmldata;
        document.getElementById("newRow").style.visibility="visible";
    }
}
function add_item(){
    menu_list_array.push(document.getElementById("add_item").value);
    menu_list_array.sort();
    name=document.getElementById("add_item").value
    var number=number+1;
    var new_row="<span><button id='"+number+"'th><img src='pizzaImg.png'>"+name+"</button>";
    document.getElementById("new").innerHTML=new_row;  
}