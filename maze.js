function setEvents(){
    var e = document.querySelector('#end');
    var b = document.querySelectorAll('.boundary');
    var s = document.querySelector('#start');
   
    
    for (var i = 0; i < b.length; i++){
        
         b[i].onmouseover = function(){
            var test;
            for(var x = 0; x < b.length; x++){
                var elem = b[x];
                elem.classList.add('youlose');
                test =1;
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
         
    }; 
    
      e.onmouseover= function(){
        document.getElementById("status").innerHTML = "You Win!";
     };
     
     
}
   
window.onload= function(){
    setEvents();
};


