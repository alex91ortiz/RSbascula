/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
function onPhotoURISuccessRegister(imageURI) {
   var largeImage = document.getElementById('smallImage');
   largeImage.src = imageURI;
   var dataUser = JSON.parse(window.localStorage.getItem("usuario"));
   dataUser.imagen=imageURI;
   $.ajax({
        url: 'http://nodejsbuscaproducto-jcsoluciones.rhcloud.com/usuario/',
        type: 'put',
        data:dataUser,
        dataType: 'jsonp',
        success: function(data) {
           home();
        }
   });
   
}
// A button will call this function
//
function getPhotoRegister() {
  // Retrieve image file location from specified source
  navigator.camera.getPicture(onPhotoURISuccessRegister, onFail, { quality: 50,
    destinationType: navigator.camera.DestinationType.FILE_URI,
    sourceType: navigator.camera.PictureSourceType.PHOTOLIBRARY });
}
// Called if something bad happens.
//
function onFail(message) {
  alert('Failed because: ' + message);
}

