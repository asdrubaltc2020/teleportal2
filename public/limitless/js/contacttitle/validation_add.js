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

    var name=$('#name');
    var error_name=$('#error_name');

    var code=$('#code');
    var error_code=$('#error_code');

    if(name.val()==""){
        error_name.fadeIn(400);
        send=false;
    }else{
        error_name.fadeOut(400);
    }

    if(code.val()!=""){
        var data={
            'code':code.val()
        }
        var url="/admin/contacttitle/isUnique";

        $.post(url, data, function (result) {
            var isUnique=result.isUnique;

            if(isUnique==1){
                error_code.fadeIn(400);
                $('#send').val(false);
            }else{
                error_code.fadeOut(400);
                $('#send').val(true);
            }

        })
    }


    if($('#send').val()==false){
        send=false;
    }

    return send;
}





})