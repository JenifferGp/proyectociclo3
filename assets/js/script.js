 $(document).ready(function() {

  // Valida campo ingreso de campos unicamente texto para //Id name
  $('.name').bind("keypress", function (t) {
    var tkeyCode = t.which ? t.which : t.keyCode
    if ((tkeyCode >= 48 && tkeyCode <= 57)) {
      return false;
    }
  });
  // Valida campo ingreso de campos unicamente numericos para //Inputs Type Numerico 
  $('input[type=number]').bind("keypress", function (e) {
    var keyCode = e.which ? e.which : e.keyCode;
    if (!(keyCode >= 48 && keyCode <= 57)) {
      return false;
    }
    
  });
  $('#phone').bind("keypress", function (q) {
    var keyCode = q.which ? q.which : q.keyCode;
  // Chequear maximo 10 catarteres para telefono
    if ($("#phone").val().length>9){
      return false;
    }
    
  });
  $('.edad').bind("keypress", function (w) {
    var keyCode = w.which ? w.which : w.keyCode;

  // Chequear maximo 2 catarteres para edad
    if ($(".edad").val().length>1){
      return false;
    }
  });
  //Validar Url
  var regx = new RegExp(
  "^" +
    // protocol identifier
    "(?:(?:https?|http)://)" +
    // user:pass authentication
    "(?:\\S+(?::\\S*)?@)?" +
    "(?:" +
      // IP address exclusion
      // private & local networks
      "(?!(?:10|127)(?:\\.\\d{1,3}){3})" +
      "(?!(?:169\\.254|192\\.168)(?:\\.\\d{1,3}){2})" +
      "(?!172\\.(?:1[6-9]|2\\d|3[0-1])(?:\\.\\d{1,3}){2})" +
      // IP address dotted notation octets
      // excludes loopback network 0.0.0.0
      // excludes reserved space >= 224.0.0.0
      // excludes network & broacast addresses
      // (first & last IP address of each class)
      "(?:[1-9]\\d?|1\\d\\d|2[01]\\d|22[0-3])" +
      "(?:\\.(?:1?\\d{1,2}|2[0-4]\\d|25[0-5])){2}" +
      "(?:\\.(?:[1-9]\\d?|1\\d\\d|2[0-4]\\d|25[0-4]))" +
    "|" +
      // host name
      "(?:(?:[a-z\\u00a1-\\uffff0-9]-*)*[a-z\\u00a1-\\uffff0-9]+)" +
      // domain name
      "(?:\\.(?:[a-z\\u00a1-\\uffff0-9]-*)*[a-z\\u00a1-\\uffff0-9]+)*" +
      // TLD identifier
      "(?:\\.(?:[a-z\\u00a1-\\uffff]{2,}))" +
    ")" +
    // port number
    "(?::\\d{2,5})?" +
    // resource path
    "(?:/\\S*)?" + 
    "$", "i" );

    $("#button").click('input', function(r) {  
   var str = $("#url").val();   
   var isURL = regx.test(str);
   if ( isURL == false ) {
    alert('La dirección Url no es válida');
        return false; 
   } 
  });
// Valida campo ingreso de correo//en boton enviar
  $('#button').click(function() {
    var regex = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;
    if (!(regex.test($('#email').val().trim()))) {
        alert('La dirección de correo no es válida');
        return false; 
    }
  });


//calculadora


  $('.te').click(function(){
    //get value on click

    var x=$(this).attr("name");
    var res=document.getElementById('pant');
    var calcc=document.getElementById('calc');
    var restt=document.getElementById('rest');

   

    // //variable en pantala



   var now = $("#pant").val();

   res.value=res.value+x;

   //perct.onclick=function(x){
    //  res.value=res.value+"/100";
   // }

   var xx = now.substr(-1);
   var x1 = res.value.substr(0,1);
   var x2 = x.substr(0,1);
   // var yy=res.value.substr(0,-1);*

   console.log('valor anterioir: ' + now);
   console.log('valor ingresado: ' + x);
   console.log('primer valor de la pantalla: ' + x1);
  console.log('ultimo valor del anterioir: ' + xx);
  console.log('primer valor del ingreso: ' + x2);
  //console.log(yy);*

    if (x1 == '+' || x1 == '-' || x1 == '*' || x1 == '/') {
      alert('Antes de Operar por favor ingrese un numero');
      res.value='';
    }
   
   
   if (x2 == '+' || x2 == '-' || x2 == '*' || x2 == '/') {
      if (xx == '+' || xx == '-' || xx == '*' || xx == '/') {
        alert('No puede Operar dos veces seguidas');
      patron=x;
      nuevovalor="";
      nuevacadena=res.value.replace(patron,nuevovalor);
      res.value=nuevacadena;
    }
   }  
    
  
    // var xx=res.value.substr(-1);
 

    // console.log(x);

    // if (xx == '+' || xx == '-' || xx == '*' || xx == '/') {
    //   console.log('esta operando');
    // }
    
calcc.onclick=function(a){
      var y=eval(res.value);
      res.value=y;
}


    
    restt.onclick=function(a){
      res.value="";
    }
    //$('#calc').click(function(){
     // var y=res.value;
     // console.log(y)
    //})
  
  

    
   // alert($(this).attr("value"));
  })

});



//JS Concentrese



$(document).ready(init);
var DATOS_CHECK_ACTIVO = false;


var imagenes = new Array({ruta:"1.png", ganador:false, letrero:"1.png"}, {ruta:"2.png", ganador:false, letrero:"2.png"},
             {ruta:"3.png", ganador:false, letrero:"3.png"}, {ruta:"4.png", ganador:false, letrero:"4.png"},
             {ruta:"5.png", ganador:false, letrero:"5.png"}, {ruta:"6.png", ganador:false, letrero:"6.png"},
             {ruta:"1.png", ganador:false, letrero:"1.png"}, {ruta:"2.png", ganador:false, letrero:"2.png"},
             {ruta:"3.png", ganador:false, letrero:"3.png"}, {ruta:"4.png", ganador:false, letrero:"4.png"},
             {ruta:"5.png", ganador:false, letrero:"5.png"}, {ruta:"6.png", ganador:false, letrero:"6.png"});
var PAREJA = "";
var PRIMERO_ACTIVO = false;
var mat_imagenes = new Array( {id:"img1", pareja:1, im:"", id_im:0},{id:"img2", pareja:1, im:"", id_im:0},
                              {id:"img3", pareja:2, im:"", id_im:0},{id:"img4", pareja:2, im:"", id_im:0},
                              {id:"img5", pareja:3, im:"", id_im:0},{id:"img6", pareja:3, im:"", id_im:0},
                              {id:"img7", pareja:4, im:"", id_im:0},{id:"img8", pareja:4, im:"", id_im:0},
                              {id:"img9", pareja:5, im:"", id_im:0},{id:"img10", pareja:5, im:"", id_im:0},
                              {id:"img11", pareja:6, im:"", id_im:0},{id:"img12", pareja:6, im:"", id_im:0});
var arr_aleatorio = [];
var obj_activo;
var PROCESO = 0;
var SEGUNDO_ACTIVO = false;
var REPETIDOS = 0;

//TIEMPO PARA QUE SE RESETEE EL JUEGO EXPRESADO EN MINUTOS;
function init(){
     
  active_tabs();
}

function active_tabs(){
  for(i=0; i<mat_imagenes.length; ++i){
         num = aleatorio();
         mat_imagenes[i].im = imagenes[num].ruta;
         //para cargar las imagenes en cache
          var image =  new Image();
                      image.src =  "img/"+mat_imagenes[i].im;
               $("#"+mat_imagenes[i].id).on("click", {letrero:imagenes[num].letrero, id:mat_imagenes[i].id, ganador:imagenes[num].ganador, im:mat_imagenes[i].im, obj:$("#"+mat_imagenes[i].id)},     verificar_pareja);
   }
}

function insertar_letrero(letrero){

}

function verificar_pareja(event){

if(event.data.obj != obj_activo && !SEGUNDO_ACTIVO){
  console.log(PROCESO+"  _: proceso");
  $("#"+event.data.id).attr("src", "img/"+event.data.im);
  var img = event.data.id.split("img")[1];
  if(PRIMERO_ACTIVO){
    SEGUNDO_ACTIVO = true;
    if(PAREJA == event.data.im){
      //alert("pareja encontrada");
      insertar_letrero(event.data.letrero);
      PRIMERO_ACTIVO = false;
      SEGUNDO_ACTIVO = false;
      $("#"+event.data.id).unbind("click");
      obj_activo.unbind("click");
      ++PROCESO;
      ++REPETIDOS;
      console.log("REPETIDOS: "+REPETIDOS);
      //if(event.data.ganador)REPETIDOS += 2;
      if(REPETIDOS >=  8){
        insertar_ganador();
      //  alert("Felicidades a ganado el juego!!");
      }else if(PROCESO == 9){
        //$("#animo").trigger("click");
      }
    }else{

      PRIMERO_ACTIVO = false;
      var im = obj_activo.attr("id").split("img")[1];
      obj_activo.oneTime(1400, function(){
        // $(this).attr("src", "images/img"+im+".jpg");
        $(this).attr("src", "img/logon.png");
        SEGUNDO_ACTIVO = false;
        }
      );
      $("#"+event.data.id).oneTime(1400, function(){
        $(this).attr("src", "img/logon.png");
        SEGUNDO_ACTIVO = false;
        }
      );
      obj_activo = null;
    }
  }else{
    obj_activo = event.data.obj;
    PAREJA = event.data.im;
    PRIMERO_ACTIVO = true;
  }
 }
}


function aleatorio() {
  ////console.log("Repitiendo? : "+REPETIR);
  var long = imagenes.length;
  var r = Math.floor(Math.random() * long)
  // alert(arr_aleatorio)
  for(i=0;i<arr_aleatorio.length;++i){
    if(r ==  arr_aleatorio[i]){
      r = Math.floor(Math.random() * long);
      i = -1;
    }
  }
   arr_aleatorio.push(r);
   return r;
}
