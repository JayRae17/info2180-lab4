function setEvents(){
    var e = document.querySelector('#end');
    var b = document.querySelectorAll('.boundary');
    var s = document.querySelector('#start');
    var maze = document.querySelector('#maze');
    
   
    
    for (var i = 0; i < b.length; i++){
        
         b[i].onmouseover = function(){
    
            for(var x = 0; x < b.length; x++){
                var elem = b[x];
                elem.classList.add('youlose');
                }
                
            s.onclick = function(){
                for(var m = 0; m < b.length; m++){
                    var el = b[m];
                    el.classList.remove('youlose')
                    document.getElementById("status").innerHTML = 'Move your mouse over the "S" to begin.';
                }
            }
            
             e.onmouseover= function(){
                    document.getElementById("status").innerHTML = "You Lose :(";
             }
                
            
         }
         
         maze.onmouseleave = function(){
    
            for(var n = 0; n < b.length; n++){
                var le = b[n];
                le.classList.add('youlose');
                 e.onmouseover= function(){
                    document.getElementById("status").innerHTML = "You Lose :(";
                 }
            }
         }
         
    }; 
    
      e.onmouseover= function(){
        document.getElementById("status").innerHTML = "You Win!";
     };
     
     
}
   
window.onload= function(){
    setEvents();
};


