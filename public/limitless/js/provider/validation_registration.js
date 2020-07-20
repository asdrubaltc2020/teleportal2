$(function(){

    $('.btn-send').click(function(e){

        e.preventDefault();
        $('#new').val(0);

        if(validateForm()){
            $('#form').submit();
        }
    })

    $('#email').keyup(function(){
        var email=$('#email');
        var error_email_exist=$('#error_email_exist');

        var data={
            email: email.val()
        }

        var url=$('#url_check').val()

        $.post(url, data, function (result) {

            var exist=result.exist

            if(exist==1){
                $('.btn-send').addClass('disabled')
                error_email_exist.fadeIn(400)
            }else{
                error_email_exist.fadeOut(400)
                $('.btn-send').removeClass('disabled')
            }
        })

    })

    function  validateForm() {
        var send=true;

        var organization_name=$('#organization_name')
        var error_organization_name=$('#error_organization_name')
        var name=$('#name')
        var error_name=$('#error_name')
        var lastname=$('#lastname')
        var error_lastname=$('#error_lastname')
        var password=$('#password')
        var error_password=$('#error_password')
        var re_password=$('#re_password')
        var error_repassword=$('#error_repassword')
        var email=$('#email')
        var error_email=$('#error_email')

        if(organization_name.val()==""){
            error_organization_name.fadeIn(400);
            send=false;
        }else{
            error_organization_name.fadeOut(400);
        }

        if(name.val()==""){
            error_name.fadeIn(400);
            send=false;
        }else{
            error_name.fadeOut(400);
        }

        if(lastname.val()==""){
            error_lastname.fadeIn(400);
            send=false;
        }else{
            error_lastname.fadeOut(400);
        }

        if(password.val()==""){
            error_password.fadeIn(400);
            send=false;
        }else{
            error_password.fadeOut(400);
        }

        if(re_password.val()==""){
            error_repassword.fadeIn(400);
            send=false;
        }else{
            error_repassword.fadeOut(400);
        }

        if(password.val()!="" && re_password.val()!=""){
            if(password.val()!=re_password.val()){
                error_repassword.fadeOut(400);
                error_password.children('span').html('The passwords not match')
                error_password.fadeIn(400);
            }
        }

        if(email.val()==""){
            error_email.fadeIn(400);
            send=false;
        }else{
            error_email.fadeOut(400);
        }

        return send
    }
})