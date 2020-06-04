$(function(){
    $('#submit_sign_up').click(function(e){

        e.preventDefault();

        var send = true;
        
        var first_name=$('#first_name');
        var error_first_name=$('#error_first_name');
        if(first_name.val()==""){
            error_first_name.fadeIn(400);
            send=false;
        }else{
            error_first_name.fadeOut(400);
        }

        var last_name=$('#last_name');
        var error_last_name=$('#error_last_name');
        if(last_name.val()==""){
            error_last_name.fadeIn(400);
            send=false;
        }else{
            error_last_name.fadeOut(400);
        }

        var email=$('#email');
        var error_no_email=$('#error_no_email');
        var error_email=$('#error_email');
        if(email.val()==""){
            error_email.fadeOut(400);
            error_no_email.fadeIn(400);
            send=false;
        }else{
            error_no_email.fadeOut(400);
            var resultcorreo = "";
                   emailRegex = /^[-\w.%+]{1,64}@(?:[A-Z0-9-]{1,63}\.){1,125}[A-Z]{2,63}$/i;
                   if (emailRegex.test(email.val())) {
                     resultcorreo = "0k";
                   } else {
                     resultcorreo = "no0k";
                   }
                    if(resultcorreo === "no0k"){
                        error_email.fadeIn(400);
                        send=false;
                    }
                    else{
                        error_email.fadeOut(400);
                   }
        }

        var reemail=$('#reemail');
        var error_reemail=$('#error_reemail');
        if(reemail.val()!== email.val() ){
            error_reemail.fadeIn(400);
            send=false;
        }else{
            error_reemail.fadeOut(400);
        }

        var password=$('#password');
        var error_password=$('#error_password');
        if(password.val()==""){
            error_password.fadeIn(400);
            send=false;
        }else{
            error_password.fadeOut(400);
        }

        var room_name=$('#room_name');
        var error_room_name=$('#error_room_name');
        if(room_name.val()==""){
            error_room_name.fadeIn(400);
            send=false;
        }else{
            error_room_name.fadeOut(400);
        }


        if(send==true){
            $('#form_sign_up').submit();
        }


    });


    $('#first_name').keyup(function (e) { 
        var first_name=$('#first_name');
        var error_first_name=$('#error_first_name');
        if(first_name.val()==""){
            error_first_name.fadeIn(400);
        }else{
            error_first_name.fadeOut(400);
        }        
    });

    $('#last_name').keyup(function (e) { 
        var last_name=$('#last_name');
        var error_last_name=$('#error_last_name');
        if(last_name.val()==""){
            error_last_name.fadeIn(400);
        }else{
            error_last_name.fadeOut(400);
        }    
    });

    $('#email').keyup(function (e) { 
        var email=$('#email');
        var error_no_email=$('#error_no_email');
        var error_email=$('#error_email');
        if(email.val()==""){
            error_email.fadeOut(400);
            error_no_email.fadeIn(400);
        }else{
            error_no_email.fadeOut(400);
            var resultcorreo = "";
                   emailRegex = /^[-\w.%+]{1,64}@(?:[A-Z0-9-]{1,63}\.){1,125}[A-Z]{2,63}$/i;
                   if (emailRegex.test(email.val())) {
                     resultcorreo = "0k";
                   } else {
                     resultcorreo = "no0k";
                   }
                    if(resultcorreo === "no0k"){
                        error_email.fadeIn(400);
                    }
                    else{
                        error_email.fadeOut(400);
                   }
        }        
    });

    $('#reemail').keyup(function (e) { 
        var email=$('#email');
        var error_no_email=$('#error_no_email');
        var error_email=$('#error_email');
        if(email.val()==""){
            error_email.fadeOut(400);
            error_no_email.fadeIn(400);
        }else{
            error_no_email.fadeOut(400);
            var resultcorreo = "";
                   emailRegex = /^[-\w.%+]{1,64}@(?:[A-Z0-9-]{1,63}\.){1,125}[A-Z]{2,63}$/i;
                   if (emailRegex.test(email.val())) {
                     resultcorreo = "0k";
                   } else {
                     resultcorreo = "no0k";
                   }
                    if(resultcorreo === "no0k"){
                        error_email.fadeIn(400);
                    }
                    else{
                        error_email.fadeOut(400);
                   }
        }        
    });

    $('#reemail').keyup(function (e) { 
        var reemail=$('#reemail');
        var email=$('#email');
        var error_reemail=$('#error_reemail');
        if(reemail.val()!== email.val() ){
            error_reemail.fadeIn(400);
            send=false;
        }else{
            error_reemail.fadeOut(400);
        }        
    });

    $('#password').keyup(function (e) { 
        var password=$('#password');
        var error_password=$('#error_password');
        if(password.val()==""){
            error_password.fadeIn(400);
            send=false;
        }else{
            error_password.fadeOut(400);
        }      
    });
      
    $('#room_name').keyup(function (e) { 
        var room_name=$('#room_name');
        var error_room_name=$('#error_room_name');
        if(room_name.val()==""){
            error_room_name.fadeIn(400);
            send=false;
        }else{
            error_room_name.fadeOut(400);
        }      
    });

});