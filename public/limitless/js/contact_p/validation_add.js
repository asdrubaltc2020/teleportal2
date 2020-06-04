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

    var bestSelected = "";
    var bests = $('input[name=bests]');

    bests.each(function (index, $this) {
        var best = $(this);

        if (best.is(':checked')) {
            bestSelected += best.val() + ",";
        }
    });

    $('#bestSelected').val(bestSelected)

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