$(function(){

    $('.btn-delete').click(function(e){
        e.preventDefault();

        var row = $(this).parents('tr');
        var id = row.data('id');
        var form = $('#form');
        var url = form.attr('action').replace('ROLE_ID', id);
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

                          //  $('#delete-progress').addClass('hidden');
                            row.fadeOut();

                            var removed=result.removed;
                            var message=result.message;

                            $('#message-removed').html(message);

                            if(removed==1){
                              $('.cont-alert-removed-true').fadeIn(300);

                              setTimeout(function(){
                                    $('.cont-alert-removed-true').fadeOut(500);
                              }, 3000);
                            }else{
                                $('.cont-alert-removed-false').fadeIn(300);

                                setTimeout(function(){
                                    $('.cont-alert-removed-false').fadeOut(500);
                                }, 3000);
                            }



                        })
                    }
                }
            }

        });

    });

});