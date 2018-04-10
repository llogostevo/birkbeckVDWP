$(document).ready(function(){
                //when clicked set nav of main-nav id to show
                $("#burger-button").click(function(){
                    //toggle the main nav on or off, 300 is the speed to which the animation comes in
                    $("#main-nav").toggle(300);
                });
            });

// to capture a resize of the window to over 900 
$( window ).resize(function(){
    //check that the window width is greater than 900
    if ( ($( window ).width()) > 900) 
        {
            // if it is then show the main nav, turns it back on if it was in a hidden state from the above toggle function
                    $("#main-nav").show();
        }
});
