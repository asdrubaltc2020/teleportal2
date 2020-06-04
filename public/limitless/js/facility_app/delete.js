$(function(){

    $('.btn-delete-location').click(function(e){

        e.preventDefault();

        var id=$(this).parent('td').parent('tr').data('id')
        var form = $('#form_delete_location');
        var url = form.attr('action');
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
                            $('#facility_loc_'+result.id).fadeOut()
                        })
                    }
                }
            }

        });

    });

});