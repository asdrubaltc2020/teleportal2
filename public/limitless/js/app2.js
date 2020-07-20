$(function(){

    $('.show-password').click(function(e){
        e.preventDefault()

        var btn_social=$(this)
        var comp=$(this).parent().siblings('input')

        var btndisabled='<i class="fas fa-eye-slash"></i>'
        var btnenabled='<i class="far fa-eye"></i>'

        if(!btn_social.hasClass('active')){
            comp.attr('type','text')
            btn_social.html(btndisabled)
            btn_social.addClass('active')
        }else{
            btn_social.removeClass('active')
            btn_social.html(btnenabled)
            comp.attr('type','password')
        }

    });
})