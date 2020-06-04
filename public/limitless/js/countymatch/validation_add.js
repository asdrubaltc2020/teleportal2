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

    var county_code=$('#county_code');
    var error_county_code=$('#error_county_code');

    var region =$('#region');
    var error_region=$('#error_region');


    if(name.val()==""){
        error_name.fadeIn(400);
        send=false;
    }else{
        error_name.fadeOut(400);
    }

    if(county_code.val()==""){
        error_county_code.fadeIn(400);
        send=false;
    }else{
        error_county_code.fadeOut(400);
    }

    if(region.val()==""){
        error_region.fadeIn(400);
        send=false;
    }else{
        error_region.fadeOut(400);
    }

    return send;
}





})