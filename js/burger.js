$(document).ready(function(){
                //when clicked set nav to show
                $("#burger-button").click(function(){
                    $("#main-nav").toggle(300);
                });
            });

// to capture a resize of the window to over 900 
$( window ).resize(function(){
    if (document.documentElement.clientWidth > 900) 
        {
                    $("#main-nav").show();
        }
});