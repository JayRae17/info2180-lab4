var touch = 0;
function setEvents(){
    var e = document.querySelector('#end');
    var b = document.querySelectorAll('.boundary');
    var touch = 0;
    
    for (var i = 0; i < b.length; i++){
      
         b[i].onmouseover = function(){
            touch = 1;
            
            for(var x = 0; x < b.length; x++){
                var elem = b[x];
                elem.classList.add('youlose');
            }
            
            if (touch == 1){
                 e.onmouseover= function(){
                    alert("You Lost");
                 };
            }
        }; 
     e.onmouseover= function(){
        alert("You Won!");
     };
            
                
    } 
}
   // var check = function(e) {
	  //  if(e.type == 'mouseover') {
	//	console.log(10);
    //	}
//};
    
  // check(b);
    
window.onload= function(){
    setEvents();
};



