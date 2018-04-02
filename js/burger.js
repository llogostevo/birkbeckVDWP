// only run the following code if the viewport is less than 900
window.onresize = function(){
    
    if (document.documentElement.clientWidth < 900) 
        {

            $(document).ready(function(){
                //set nav to hide
                $("#burger").hide();
                //when clicked set nav to show
                $("#burger-button").click(function(){
                    $("#burger").toggle(300);
                });
            });

        }
    else {
        // used to reshow menu if the window has been resized above 900
        $("#burger").show();
    }
}