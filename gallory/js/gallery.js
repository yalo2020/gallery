

function upDate(previewPic){
  document.getElementById('image').innerHTML=previewPic.alt;
  document.querySelector('#image').getElementsByClassName.backgroundImage = "url('" + previewPic.src + "'";
    
    }
  
    function unDo(){
       document.querySelector('#image').getElementsByClassName.backgroundImage = "url('')";
       document.querySelector('#image').innerHTML="Hover over an image below to display here. ";
      
    }