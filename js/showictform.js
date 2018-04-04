// the form changes if certain radio buttons are selected
var ictradios = document.getElementsByName("ictradios");//
var ICTgrades =  document.getElementById("ICTgrades");
var Computinggrades =  document.getElementById("Computinggrades");

ICTgrades.style.display = 'none';   // show
Computinggrades.style.display = 'none';// hide

for(var i = 0; i < ictradios.length; i++) {//
    ictradios[i].onclick = function() {//
        var val = this.value;//
        if(val == 'ICT') {//
            ICTgrades.style.display = 'block';
            Computinggrades.style.display = 'none';
        }
        else if(val == 'Computing'){//
             ICTgrades.style.display = 'none';
             Computinggrades.style.display = 'block';
        } 
        
        else if(val == 'noict'){//
             ICTgrades.style.display = 'none';
             Computinggrades.style.display = 'none';
        }
    }
}