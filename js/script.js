  
 $(document).ready(function() {
	$('ul li:has(ul)').hover(function(e) {
 		$(this).find('ul').css({display: "block"});
	 },
 	function(e) {
 		$(this).find('ul').css({display: "none"});
 	});});   
    
    //validacion de los campos en blanco
   $(document).ready(function () {
    $('#caja1').blur(function () {var mensaje = $('#caja1').val();
        if (mensaje == "") {$('#MensError1').html("Este campo es Obligatorio");} });
    $('#caja2').blur(function () { var mensaje2 = $('#caja2').val();
        if (mensaje2 == "") { $('#MensError2').html("Este campo es Obligatorio");}});
    //identificar los campos en blanco
    $('#caja3').blur(function () {var mensaje1 = $('#caja3').val();
        if (mensaje1 == "") { $('#MensError3').html("Este campo es Obligatorio");}});
    $('#caja4').blur(function () {var mensaje3 = $('#caja4').val();
        if (mensaje3 == "") { $('#MensError4').html("Este campo es Obligatorio"); } });
    $('#caja5').blur(function () {var mensaje4 = $('#caja5').val();
        if (mensaje4 == "") { $('#MensError5').html("Este campo es Obligatorio");} });
    $('#caja6').blur(function () { var mensaje5 = $('#caja6').val();
        if (mensaje5 == "") {$('#MensError6').html("Este campo es Obligatorio");} });
    $('#caja7').blur(function () { var mensaje6= $('#caja7').val();
        if (mensaje6 == "") {$('#MensError7').html("Este campo es Obligatorio");} });
    
//borrar las barras de Error cuando se hace click en caja de texto
    //usamos para todo los cajas de texto
    $('#caja1').click(function () {$('#MensError1').empty();});
    $('#caja2').click(function () {$('#MensError2').empty();});
    $('#caja3').click(function () {$('#MensError3').empty();});
    $('#caja4').click(function () {$('#MensError4').empty();});
    $('#caja5').click(function () {$('#MensError5').empty();});
    $('#caja6').click(function () {$('#MensError6').empty();});
    $('#caja7').click(function () {$('#MensError7').empty();});    
}); 
//cuando se seleccione el combobox
//pasara el codigo al campo de txtTitulo
    $(document).ready(function() {
$('#codT').click(function(){
   var nombre = $("#codT").val();
$("#caja6").val(nombre);
});
});
 //color del barrar de memu  
 $(document).ready(function(){
    $(".btn1").hover(function(){
       $(this).css("background-color", "#060606");
        $(this).css("color", "white");}
        , function(){
        $(this).css("background-color", "#555");
        $(this).css("color", "#aaa");
    });    
});
//color para sub Menu
 $(document).ready(function(){
    $(".MenuColor").hover(function(){
       $(this).css("background-color", "#060606");
        $(this).css("color", "white");}
        , function(){
        $(this).css("background-color", "#555");
        $(this).css("color", "#aaa");
    });});
//color el menu principal
 $(document).ready(function(){
     $('.san').hover(function(){
       $('.san1').css("background-color", "#060606");
        }
        , function(){
        $('.san1').css("background-color", "#555");
       });   
});


/* Cuando se aga clik en el button o link pueda salir un mensaje de alerta*/
$( function( ){$("[data-toggle='popover'" ).popover( );} );
$( ".popover-dismiss" ).popover({trigger: "focus"} );
/* cuando se pase el puntero del mause por un button aprase un mensaje*/   
$( function( ){$( "[data-toggle='tooltip']").tooltip( );} );
 
   
jQuery.extend(jQuery.easing,{easeInOutSine:function(j,i,b,c,d){return -c/2*(Math.cos(Math.PI*i/d)-1)+b}});function ws_domino(m,i,k){$=jQuery;var h=$(this);var c=m.columns||5,l=m.rows||2,d=m.centerRow||2,g=m.centerColumn||2;var f=$("<div>").addClass("ws_effect ws_domino").css({position:"absolute",width:"100%",height:"100%",top:0,overflow:"hidden"}).appendTo(k);var b=$("<div>").addClass("ws_zoom").appendTo(f);var j=$("<div>").addClass("ws_parts").appendTo(f);var e=k.find(".ws_list");var a;this.go=function(y,x){function z(){j.find("img").stop(1,1);j.empty();b.empty();a=0}z();var s=$(i.get(x));s={width:s.width(),height:s.height(),marginTop:parseFloat(s.css("marginTop")),marginLeft:parseFloat(s.css("marginLeft"))};var D=$(i.get(x)).clone().appendTo(b).css({position:"absolute",top:0,left:0}).css(s);var p=f.width();var o=f.height();var w=Math.floor(p/c);var v=Math.floor(o/l);var t=p-w*(c-1);var E=o-v*(l-1);function I(L,K){return Math.random()*(K-L+1)+L}e.hide();var u=[];for(var C=0;C<l;C++){u[C]=[];for(var B=0;B<c;B++){var q=m.duration*(1-Math.abs((d*g-C*B)/(2*l*c)));var F=B<c-1?w:t;var n=C<l-1?v:E;u[C][B]=$("<div>").css({width:F,height:n,position:"absolute",top:C*v,left:B*w,overflow:"hidden"});var H=I(C-2,C+2);var G=I(B-2,B+2);u[C][B].appendTo(j);var J=$(i.get(y)).clone().appendTo(u[C][B]).css(s);var A={top:-H*v,left:-G*w,opacity:0};var r={top:-C*v,left:-B*w,opacity:1};if(m.support.transform&&m.support.transition){A.translate=[A.left,A.top,0];r.translate=[r.left,r.top,0];delete A.top;delete A.left;delete r.top;delete r.left}wowAnimate(J.css({position:"absolute"}),A,r,q,"easeInOutSine",function(){a++;if(a==l*c){z();e.stop(1,1);h.trigger("effectEnd")}})}}wowAnimate(D,{scale:1},{scale:1.6},m.duration,m.duration*0.2,"easeInOutSine")}};// -----------------------------------------------------------------------------------

jQuery("#wowslider-container1").wowSlider({effect:"domino",prev:"",next:"",duration:20*100,delay:20*100,width:640,height:360,autoPlay:true,autoPlayVideo:false,playPause:true,stopOnHover:false,loop:false,bullets:1,caption:true,captionEffect:"parallax",controls:true,responsive:1,fullScreen:false,gestures:2,onBeforeStep:0,images:0});

