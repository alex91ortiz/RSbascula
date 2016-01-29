/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
var home = function () {
    var data = JSON.parse(window.localStorage.getItem("usuario"));
    $(".headername").html(data.name);
    $("#profileimage").attr("src",data.imagen);
    $.mobile.changePage( "#home", { transition: "none", changeHash: false });
}
var searchs = function () {
    $.mobile.changePage( "#search", { transition: "none", changeHash: false });
}
var galery = function () {
    $.mobile.changePage( "#galery", { transition: "none", changeHash: false });
}
var profile = function () {
    $.mobile.changePage( "#profile", { transition: "none", changeHash: false });
}
var register = function () {
    $.mobile.changePage( "#register", { transition: "none", changeHash: false });
}
var continuar = function () {
    var data = JSON.parse(window.localStorage.getItem("usuario"));
    $.post("http://nodejsbuscaproducto-jcsoluciones.rhcloud.com/usuario/update",{email:data.email,imagen:$("#smallImage").attr("src")},function(date){
        home();
    });
}
