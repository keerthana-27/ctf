var data;
const getWords = (str) => str.split(/\s+/).slice(0, 10).join(' ');
function myFunction1(){
     for(var i=0;i<data.length;i++){
      var value = $('#myInput').val();
    console.log(value);
    value1 = value.replace(/\s+/g, '_')
    console.log(value1);
   
        let a = data[i].name;
        if(value===a)
            $('#'+value1).show();
        else
            $('#'+value1).hide();
    }
}

function initialize(){
   $.getJSON('https://api.myjson.com/bins/1fgfb3', function(e) {
    //data is the JSON string
    console.log(e);
    data = e;

if ($(window).width() > 800){
     $("#sidebar").html('<div id="side"><div id="title" >'+data[0].name+'<br><div id="image" ><br>'+
    '<IMG BORDER="0" ALIGN="center" SRC="' + data[0].image + '" height ="200" width ="300"></div></div>'+
    '<br><div id="desc"><br>'+data[0].description+'...<br></div></div>')

for(var i=0;i<data.length;i++){
    let t1 = data[i].name.replace(/\s+/g, '_')
    let t= t1;

    if(i<3){

    if(i===0){
        $("#box").append('<tr class="innerbox" id="innerbox0"></tr>');
    }
    
        $("#innerbox0").append('<td><div id='+t+' class='+i+'><div id="title">'+data[i].name+'<div id="image"><br>'+
    '<IMG BORDER="0" ALIGN="center" SRC="' + data[i].image + '" height ="100" width ="200"></div></div><div id="desc"><br>'+getWords(data[i].description)+'...<br><a><u>Click here to read fully</u></a></div></div></td>')

 function clickHandler(t,i) {
          return function (){
            myFunction(t,i);
          }}

       $("#"+t).click(clickHandler(t,i));
}
    else if(i<6){
        
    if(i===3){
        $("#box").append('<hr>');
        $("#box").append('<tr class="innerbox" id="innerbox1"></tr>');
    }
    
        $("#innerbox1").append('<td><div id='+t+' class='+i+'><div id="title">'+data[i].name+'<div id="image"><br>'+
    '<IMG BORDER="0" ALIGN="center" SRC="' + data[i].image + '" height ="100" width ="200"></div></div><div id="desc"><br>'+getWords(data[i].description)+'...<br><a><u>Click here to read fully</u></a></div></div></td>')
   
function clickHandler(t,i) {
          return function (){
            myFunction(t,i);
          }}

       $("#"+t).click(clickHandler(t,i));
}  
else {
        
    if(i===6){
        $("#box").append('<hr>');
        $("#box").append('<tr class="innerbox" id="innerbox2"></tr>');
    }
    
        $("#innerbox2").append('<td><div id='+t+' class='+i+'><div id="title">'+data[i].name+'<div id="image"><br>'+
    '<IMG BORDER="0" ALIGN="center" SRC="' + data[i].image + '" height ="100" width ="200"></div></div><div id="desc"><br>'+getWords(data[i].description)+'...<br><a><u>Click here to read fully</u></a></div></div><br><br></td>')
     
function clickHandler(t,i) {
          return function (){
            myFunction(t,i);
          }}

       $("#"+t).click(clickHandler(t,i));
} 

}


function myFunction(t,i){
    console.log(t);
    console.log(i);
    $("#sidebar").html("");
    $("#sidebar").html('<div id='+t+' class='+i+'><div id="title">'+data[i].name+'<br><div id="image"><br>'+
    '<IMG BORDER="0" ALIGN="center" SRC="' + data[i].image + '" height ="200" width ="300"></div></div>'+
    '<br><div id="desc"><br>'+data[i].description+'...<br></div></div>')
}

$(".main").append('<br>');
}
   else{
       for(var i=0;i<data.length;i++){
    let t="child"+i;
    if(i%2===0){
      $(".main").append('<div class="container" id='+t+'><div class="title">'+data[i].name+'<div id="image">'+
    '<IMG BORDER="0" ALIGN="left" SRC="' + data[i].image + '" height ="150" width ="300"></div></div><div class="desc">'+data[i].description+'</div></div><hr>');
  }
  else{
    $(".main").append('<div class="container" id='+t+'><div class="title">'+data[i].name+'<div id="image">'+
    '<IMG BORDER="0" ALIGN="right" SRC="' + data[i].image + '" height ="100" width ="100"></div></div><div class="desc" style="align:left;">'+data[i].description+'</div></div><hr>');
  }
    $('#sidebar').hide();
}
   }
});
   
}
initialize();

