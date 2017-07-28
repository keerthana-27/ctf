console.log("hi hello");
const getWords = (str) => str.split(/\s+/).slice(0, 10).join(' ');

function initialize(){
   $.getJSON('https://api.myjson.com/bins/1fgfb3', function(data) {
    //data is the JSON string
    console.log(data);
    console.log(data[0].name);

/*$(function () {
      $('#head').click(function () {
        $(this).find('#content').slideToggle("slow");
      });
  });*/


 // let content = "content";
 // let head = "head";
 console.log($(window).width());
if ($(window).width() > 800){
  $(".main").html('<table><tbody><tr style="color:#501074;"><td>' + data[0].name +'</td><td>' +
   data[1].name + '</td><td>' + data[2].name + '</td><td>' + data[3].name + '</td></tr>' + 
   '<tr><td>' + '<IMG BORDER="0" ALIGN="center" SRC="' + data[0].image + '" height ="100" width ="200">' +'</td><td>' +
   '<IMG BORDER="0" ALIGN="center" SRC="' + data[1].image + '" height ="100" width ="200">' + '</td><td>' +
   '<IMG BORDER="0" ALIGN="center" SRC="' + data[2].image + '" height ="100" width ="200">' + '</td><td>' +
   '<IMG BORDER="0" ALIGN="center" SRC="' + data[3].image + '" height ="100" width ="200">' + '</td></tr>'+
   '<tr style="padding-left: 1cm;"><td>' + getWords(data[0].description) + '...<br><a><u>Click here to read fully</u></a></td>' +
   '<td>' + getWords(data[1].description) + '...<br><a><u>Click here to read fully</u></a></td>'+
   '<td>' + getWords(data[2].description) + '...<br><a><u>Click here to read fully</u></a></td>'+
   '<td>' + getWords(data[3].description) + '...<br><a><u>Click here to read fully</u></a></td>'+
   '</tr></tbody><hr><tbody><tr style="color:#501074;"><td>' + data[4].name +'</td><td>' + data[5].name + '</td><td>' +
   data[6].name + '</td><td>' + data[7].name + '</td></tr>'+ '<tr><td>' +
   '<IMG BORDER="0" ALIGN="center" SRC="' + data[4].image + '" height ="100" width ="200">' +'</td><td>' +
   '<IMG BORDER="0" ALIGN="center" SRC="' + data[5].image + '" height ="100" width ="200">' + '</td><td>' +
   '<IMG BORDER="0" ALIGN="center" SRC="' + data[6].image + '" height ="100" width ="200">' + '</td><td>' +
   '<IMG BORDER="0" ALIGN="center" SRC="' + data[7].image + '" height ="100" width ="200">' + '</td></tr>'+
   '<tr><td>' + getWords(data[4].description) + '...<br><a><u>Click here to read fully</u></a></td>' +
   '<td>' + getWords(data[5].description) + '...<br><a><u>Click here to read fully</u></a></td>'+
   '<td>' + getWords(data[6].description) + '...<br><a><u>Click here to read fully</u></a></td>'+
   '<td>' + getWords(data[7].description) + '...<br><a><u>Click here to read fully</u></a></td>'+
   '</tr></tbody></table>');
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
    
}
}
/*
$("#head").html("this is head part");
$("#content").html("this is content part").hide();

$("#head").click(function (){
        if($('#content').is(':visible')){          
          $('#content').hide();
        }
        else{
          $('#content').show();
        }   
      });  
/*
for(var i=0;i<data.length;i++){
  let t="child"+i;
  if((i===0)|| (i===4)){
    $(".main").append('<div class="child" id='+t+'>' + data[i].name +'</div>');
  }
  else
  $(".main").append('<div class="child" id='+t+'>' + data[i].name +'</div>');
}

*/


    console.log("baby");
    });
}
initialize();


/*
$(document).ready(function(){
    //your stuff
    console.log("worked");
});  
*/