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

    var cvo=$('#cvo');
    var error_cvo=$('#error_cvo');

    if(cvo.val()==0){
        error_cvo.fadeIn(400);
        send=false;
    }else{
        error_cvo.fadeOut(400);
    }

    return send;
}





})