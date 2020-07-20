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

    var send=true;

    var code=$('#code');
    var error_code=$('#error_code');

    if(code.val()==""){
        error_code.fadeIn(400);
        send=false;
    }else{
        error_code.fadeOut(400);
    }

    return send;
}





})