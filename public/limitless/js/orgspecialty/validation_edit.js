$(function(){

    $('.bnt-send').click(function(e){

        e.preventDefault();
        $('#new').val(0);

        if(validateForm()){
            $('#form').submit();
        }
    })

    $('.bnt-send-new').click(function(e){

        console.log('OK')
        e.preventDefault();
        $('#new').val(1);

        if(validateForm()){
            $('#form').submit();
        }

    })


function  validateForm() {

    var send=true;

    var name=$('#name');
    var error_name=$('#error_name');

    if(name.val()==""){
        error_name.fadeIn(400);
        send=false;
    }else{
        error_name.fadeOut(400);
    }

    return send;
}





})