$(function(){

    $('#table_grid_cred').on('click','.btn-delete',function(e){
        e.preventDefault();

        var id=$(this).data('id');
        var row=$(this).parent('td').parent('tr')
        var form = $('#form');
        var url = form.attr('action').replace('PROVIDERCREDENTIALING_ID', id);
        var data = {'id': id};

        bootbox.dialog({
            message: 'Are you sure?',
            title: 'Delete',
            buttons: {
                success: {
                    label: '<i class="fas fa-ban"></i> Cancel',
                    className: 'btn-success',
                    callback: function() {

                    }
                },
                danger: {
                    label: '<i class="far fa-trash-alt"></i> Delete',
                    className: 'btn-danger',
                    callback: function() {
                        $.post(url, data, function (result) {

                            var removed=result.removed;
                            var message=result.message;

                            $('#message-removed').html(message);

                            console.log(removed)

                            if(removed==1){
                                row.fadeOut()
                            }else{

                            }

                        })
                    }
                }
            }

        })

    });

});