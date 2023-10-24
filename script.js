function _200px(){
    var test1_1 = document.getElementById("myTable");
    test1_1.style.width = "200px";
}
function _500px(){
    var test1_2 = document.getElementById("myTable");
    test1_2.style.width = "500px";
}
function chb_1px(){
    var test2_1 = document.getElementById("myTable");
    test2_1.style.border = "1px solid black";
    test2_1.style.borderSpacing = "10px"
}
function chb_10px(){
    var test2_2 = document.getElementById("myTable");
    test2_2.style.border = "10px solid black";
    test2_2.style.borderSpacing = "10px"
}
function chb_20px(){
    var test2_3 = document.getElementById("myTable");
    test2_3.style.border = "20px solid black";
    test2_3.style.borderSpacing = "20px"
}
function changeColor(color) {
    var table = document.getElementById('myTable');
    table.style.backgroundColor = color;
    var tds = document.querySelectorAll('td'); 
    for(var i=0; i<tds.length; i++) { 
        tds[i].style.backgroundColor = color; 
    }
}
function resetStyle() {
    var table = document.getElementById('myTable');
    // Reset the styles to the original
    table.style.width = '500px'; 
    table.style.border = '1px solid black'; 
    table.style.borderSpacing = '2px';
    table.style.backgroundColor = '#fff';
    var tds = document.querySelectorAll('td'); 
    for(var i=0; i<tds.length; i++) { 
        tds[i].style.backgroundColor = '#fff'; 
    }
}
