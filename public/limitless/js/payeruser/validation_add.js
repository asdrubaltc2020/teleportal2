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

    var payer=$('#payer')
    var error_payer=$('#error_payer')

    var name=$('#name')
    var error_name=$('#error_name')

    var username=$('#username')
    var error_username=$('#error_username')

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

    if(username.val()==""){
        error_username.fadeIn(400)
        send=false
    }else{
        error_username.fadeOut(400)
    }

    if(payer.val()==0){
        error_payer.fadeIn(400)
        send=false
    }else{
        error_payer.fadeOut(400)
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