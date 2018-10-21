function setEvents(){
    var b = document.querySelectorAll('.boundary');
    
    for (var i = 0; i < b.length; i++){
        
         b[i].onmouseover = function(){
             
             for(var x = 0; x < b.length; x++){
                 var elem = b[x];
                 elem.classList.add('youlose');
             }
         }
    
    }

}



window.onload= function(){
    setEvents();
};



    