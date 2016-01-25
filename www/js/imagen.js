/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */


function onPhotoURISuccess(imageURI) {
   // Uncomment to view the image file URI
   // console.log(imageURI);
   // Get image handle
   //
   var largeImage = document.getElementById('smallImage');
   // Unhide image elements
   //
   largeImage.style.display = 'block';
   // Show the captured photo
   // The inline CSS rules are used to resize the image
   //
   largeImage.src = imageURI;
}
   // A button will call this function
//
function getPhoto() {
  // Retrieve image file location from specified source
  navigator.camera.getPicture(onPhotoURISuccess, onFail, { quality: 50,
    destinationType: navigator.camera.DestinationType.FILE_URI,
    sourceType: navigator.camera.PictureSourceType.PHOTOLIBRARY });
}

// Called if something bad happens.
//
function onFail(message) {
  alert('Failed because: ' + message);
}

