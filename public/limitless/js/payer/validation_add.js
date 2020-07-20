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

    if(name.val()==""){
        error_name.fadeIn(400);
        send=false;
    }else{
        error_name.fadeOut(400);
    }

    var linesSelected="";
    var countiesSelected="";

    var lineofbusinees=$('input[name=lineofbusinees]');

    lineofbusinees.each(function(index,$this){
        var line=$(this);
        var id_line=line.attr('id');

        if(line.is(':checked')){
            linesSelected+=line.attr('id')+",";
        }

        var counties=$('.counties_'+id_line);

        counties.each(function(index,$this){
            var county=$(this);

            var counts=county.val();

            if(counts.length>0){
                counts.forEach(function(count, index) {
                    countiesSelected+=id_line+count+",";
                });
            }
        });

    });

    $('#linesselected').val(linesSelected);
    $('#countiesselected').val(countiesSelected);

    return send;
}

})