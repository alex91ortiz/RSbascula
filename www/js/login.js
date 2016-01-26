/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
 var registrar=function(){
    if(valInputs("#registerform")){
        if($("#password").val().length>=6){
            if($("#password").val()===$("#confirm").val()){
                $.post("http://localhost:3000/usuario/val",$("#registerform").serialize()).done(function (data) {
                    if(data){
                        $.post("http://localhost:3000/usuario/",$("#registerform").serialize()).done(function (data) {                            
                            $.mobile.changePage( "#imagen", { transition: "slideup", changeHash: false });
                        });
                    }else {
                        alert("Ya tienes una cuenta con  este correo!");
                        navigator.notification.alert("Debe ingresar una cuanta de correo!");
                    }
                });
            }else{
                alert("La contrasena de confirmacion no coincide con la suministrada!");
                navigator.notification.alert("La contrasena de confirmacion no coincide con la suministrada!");
            }
        }else{
            alert("La contrasena debe tener minimo de 6 caracteres!");
            navigator.notification.alert("La contrasena debe tener minimo de 6 caracteres!");
        }
    }
}
var login = function () {
    if($("#logemail").val()!==""){
        if($("#logpassword").val()!==""){
            $.post("http://nodejsbuscaproducto-jcsoluciones.rhcloud.com/usuario/login/",$("#loginform").serialize()).done(function (data) {
                console.log(data);
                if(data!=0 && data!=-1){
                    home();
                    window.localStorage.setItem("usuariologin","A");
                    window.localStorage.setItem("usuario",JSON.stringify(data));
                }else{
                    alert("La cuenta no existe o introdusca bien la contrasena!");
                    navigator.notification.alert("La cuenta no existe o introdusca bien la contrasena!");
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

var salir=function(){
    window.localStorage.setItem("usuariologin","C");
    $.mobile.changePage( "#login", { transition: "none", changeHash: false });
}