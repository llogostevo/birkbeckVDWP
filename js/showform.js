

//the form changes as the function is changed
$("#form-menu").change(function () {
            var choice = $( "#form-menu option:selected" ).val();
            if(choice=="apply-now")
            {
              //show apply now fields
               $("#event-signup").hide();
                $("#apply-now").show();
                $("#Contact-Us").hide();
                $("#employers").hide();
            }
            else if(choice=="event-signup")
            {
              //show event sign up fields
               $("#event-signup").show();
                $("#apply-now").hide();
                $("#Contact-Us").hide();
                $("#employers").hide();
            }
            else if(choice=="Contact-Us")
            {
//              show contact us fields
//                NB this is currently empty and code is here purely for maintenance purposes to provide functionality in future, however the change will still hide the other fields that aren't relevant
               $("#event-signup").hide();
                $("#apply-now").hide();
//                $("#Contact-Us").show();
                $("#employers").hide();
            }
            else if(choice=="employers")
            {
              //show employers fields
                $("#event-signup").hide();
                $("#apply-now").hide();
                $("#Contact-Us").hide();
                $("#employers").show();
            }
        });

