var photo_container;
var image_url= new Array;
var add_images= function(number_of_images, image_width){
 
        var image;
        for(var i=0; i< number_of_images; i++){
              image=document.createElement('img');
              image_url.push('images/profile_photo_' + (i + 1) + '.jpg');
              image.setAttribute('src', image_url[i]);
              
              document.body.appendChild(image);
        };
};

document.addEventListener("DOMContentLoaded", function(event){
 add_images(68);
 
});