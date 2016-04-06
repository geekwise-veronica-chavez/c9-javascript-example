var photo_container;
var image_url= new Array;
var add_images= function(number_of_images, image_width, margin_image){
 
        var image;
        
        for(var i=0; i< number_of_images; i++){
              image=document.createElement('img');
              image_url.push('images/profile_photo_' + (i + 1) + '.jpg');
              image.setAttribute('src', image_url[i]);
              image.style.width=image_width;
              image.style.margin="10px";
         image.addEventListener('mouseover', function(event){
               this.style.width="15%";
             
         });
         
         image.addEventListener("mouseout", function(event){
               this.style.width="10%";
         });
         image.addEventListener('click', function(event){
               this.style.transform= "rotateZ(360deg)";
               this.style.transition="3s";
               this.style.opacity=".1";
          
         });
              document.body.appendChild(image);
              
        };
};

document.addEventListener("DOMContentLoaded", function(event){
 document.body.style.backgroundColor="lightgrey";
 add_images(68, "10%");

 
 
 
});