var create_input_tag;
var read_input_tag;
var update_input_tag;
var delete_input_tag;
var myarray = [];
var arraymax = 50;

var create_element= function(name_of_input){
 var element=document.createElement(name_of_input);
 return element;
};

var atttach_element=function(child_element){
 document.body.appendChild(child_element);
};

var li_tag;
var create_li=function(name_of_li){
var li=document.createElement(name_of_li);
};

document.addEventListener("DOMContentLoaded", function(event){
 create_input_tag=create_element("input");
 read_input_tag=create_element("input");
 update_input_tag=create_element("input");
 delete_input_tag=create_element("input");
 
create_input_tag.placeholder="Create text";
read_input_tag.placeholder="Read text";
update_input_tag.placeholder="Update text";
delete_input_tag.placeholder="Delete text";

atttach_element(create_input_tag);
atttach_element(read_input_tag);
atttach_element(update_input_tag);
atttach_element(delete_input_tag);

create_input_tag.addEventListener("keydown", function (event){
 console.log(event, "keyCode");
 if(event, "keycode"===13){
  var ul_container=document.createElement('ul');
   
     document.body.appendChild(ul_container);
   
   li_tag=create_li('li');
 
     var list_element = document.createElement('li');
     list_element.textContent = Math.round(Math.random()*50);
     this.appendChild(list_element);
    
     ul_container.appendChild(li_child);
    li_child.textContent='items'
    console.log(event);
    for(i=9; i<arraymax.length; i++){
      console.log(i);
    }  
 
 
});