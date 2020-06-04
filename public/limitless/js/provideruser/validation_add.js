$(function(){

    $('.bnt-send').click(function(e){

        e.preventDefault();
        $('#new').val(0);

        if(validateForm()){
            $('#form').submit();
        }
    })


    $('.bnt-send-new').click(function(e){
        e.preventDefault();
        $('#new').val(1);

        if(validateForm()){
            $('#form').submit();
        }

    })


function  validateForm() {

    var send=true

    var name=$('#name')
    var error_name=$('#error_name')

    var user_name=$('#user_name')
    var error_user_name=$('#error_user_name')

    var name=$('#name')
    var error_name=$('#error_name')

    var last_name=$('#last_name')
    var error_last_name=$('#error_last_name')

    var email=$('#email')
    var error_email=$('#error_email')

    var password=$('#password')
    var error_password=$('#error_password')
    var re_password=$('#re-password')
    var error_repassword=$('#error_repassword')

    var role=$('#roles')
    var error_role=$('#error_roles')


    if(name.val()==""){
        error_name.fadeIn(400)
        send=false
    }else{
        error_name.fadeOut(400)
    }

    if(last_name.val()==""){
        error_last_name.fadeIn(400)
        send=false
    }else{
        error_last_name.fadeOut(400)
    }

    if(user_name.val()==""){
        error_user_name.fadeIn(400)
        send=false
    }else{
        error_user_name.fadeOut(400)
    }

    if(email.val()==""){
        error_email.fadeIn(400)
        send=false
    }else{
        error_email.fadeOut(400)
    }

    if(password.val()==""){
        error_password.fadeIn(400)
        send=false
    }else{
        error_password.fadeOut(400)
    }

    if(re_password.val()!==password.val()){
        error_repassword.fadeIn(400)
        send=false
    }else{
        error_repassword.fadeOut(400)
    }

    if(role.val()==""){
        error_role.fadeIn(400)
        send=false
    }else{
        error_role.fadeOut(400)
    }



    return send
}


})