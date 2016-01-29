/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
function onPhotoURISuccessRegister(imageURI) {
   var largeImage = document.getElementById('smallImage');
   largeImage.src = imageURI;
   
   
}
// A button will call this function
//
/*function getPhotoRegister() {
  // Retrieve image file location from specified source
  navigator.camera.getPicture(onPhotoURISuccessRegister, onFail, { quality: 50,
    destinationType: navigator.camera.DestinationType.FILE_URI,
    sourceType: navigator.camera.PictureSourceType.PHOTOLIBRARY });

}*/
// Called if something bad happens.
//
function onFail(message) {
  alert('Failed because: ' + message);
}

var getPhotoRegister = function(event) {
    if (window.File && window.FileReader && window.FileList && window.Blob) {
        var input = event.target;
        var reader = new window.FileReader();
        reader.onload = function(){
          var dataURL = reader.result;
          var output = document.getElementById('smallImage');
          output.src = dataURL.toString().replace("data:base64,","data:image/jpeg;base64,");
        };
        reader.readAsDataURL(input.files[0]);
    }else{alert("no suposrt");}
    
};

var makeGif=function(){
    gifshot.createGIF({}, function(obj) {
        if(!obj.error) {
            var image = obj.image,
            animatedImage = document.createElement('gif');
            animatedImage.src = image;
            document.body.appendChild(animatedImage);
        }
    });
}