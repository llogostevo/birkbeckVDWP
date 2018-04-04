// the form changes if certain radio buttons are selected
var radios = document.getElementsByName("radios");//
var combinedscienceresults =  document.getElementById("combinedscienceresults");
var seperatescienceresults =  document.getElementById("seperatescienceresults");

combinedscienceresults.style.display = 'block';   // show
seperatescienceresults.style.display = 'none';// hide

for(var i = 0; i < radios.length; i++) {//
    radios[i].onclick = function() {//
        var val = this.value;//
        if(val == 'combinedscience') {//
            combinedscienceresults.style.display = 'block';
            seperatescienceresults.style.display = 'none';
        }
        else if(val == 'seperatescience'){//
             combinedscienceresults.style.display = 'none';
             seperatescienceresults.style.display = 'block';
        }    
            
    }
}