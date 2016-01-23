/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
 var registrar=function(){
     valInputs("#registerform");
    /*if($("#confirm").val().length<=0 || $("#confirm").val()===null && !$("#confirm")){
        //$.post("http://nodejsbuscaproducto-jcsoluciones.rhcloud.com/usuario/",$("#loginform").serialize()).done(function (data) {
        $.post("http://nodejsbuscaproducto-jcsoluciones.rhcloud.com/usuario/",$("#loginform").serialize()).done(function (data) {                            
            $.mobile.changePage( "#login", { transition: "slideup", changeHash: false });
        });
    }*/
}
var login = function () {
    //$.post("http://nodejsbuscaproducto-jcsoluciones.rhcloud.com/usuario/login/",$("#loginform").serialize()).done(function (data) {
    if($("#frmemail").val()!==""){
        if($("#frmpassword").val()!==""){
            $.post("http://nodejsbuscaproducto-jcsoluciones.rhcloud.com/usuario/login/",$("#loginform").serialize()).done(function (data) {
                console.log(data);
                if(data!=0 && data!=-1){
                    $.mobile.changePage( "#home", { transition: "slideup", changeHash: false });
                }
            });
        }else{
            alert("Debe ingresar una contrasena!");
            navigator.notification.alert("Debe ingresar una contraseña!");
        }
    }else{
        alert("Debe ingresar una cuanta de correo!");
        navigator.notification.alert("Debe ingresar una cuanta de correo!");
    }
}

