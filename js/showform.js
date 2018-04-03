

//the form changes as the function is changed
$("#form-menu").change(function () {
            var choice = $( "#form-menu option:selected" ).val();
            if(choice=="apply-now-form")
            {
              //show apply now fields
               $("#event-signup-form").hide();
                $("#apply-now-form").show();
                $("#Contact-Us-form").hide();
                $("#employers-form").hide();
            }
            else if(choice=="event-signup-form")
            {
              //show event sign up fields
               $("#event-signup-form").show();
                $("#apply-now-form").hide();
                $("#Contact-Us-form").hide();
                $("#employers-form").hide();
            }
            else if(choice=="Contact-Us-form")
            {
//              show contact us fields
//                NB this is currently empty and code is here purely for maintenance purposes to provide functionality in future, however the change will still hide the other fields that aren't relevant
               $("#event-signup-form").hide();
                $("#apply-now-form").hide();
//                $("#Contact-Us").show();
                $("#employers-form").hide();
            }
            else if(choice=="employers-form")
            {
              //show employers fields
                $("#event-signup-form").hide();
                $("#apply-now-form").hide();
                $("#Contact-Us-form").hide();
                $("#employers-form").show();
            }
        });