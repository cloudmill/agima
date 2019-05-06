
sliders = function(){
    $('.services .left').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        speed: 1000,
        arrows: true,
        dots : true,
        infinite: true,
        responsive: [
            {
              breakpoint: 1024,
              settings: {
                dots : false,
              }
            }
          ]
    })
    if($(document).width() <= 1024){
        $('section.partners .content .block').slick({
            slidesToShow: 1,
            slidesToScroll: 1,
            speed: 1000,
            arrows: true,
            dots : false,
            infinite: true,
        })
        $('section.reasons .content .block').slick({
            slidesToShow: 1,
            slidesToScroll: 1,
            speed: 1000,
            arrows: true,
            dots : false,
            infinite: true,
        })
        $('section.process .content > .block').slick({
            slidesToShow: 1,
            slidesToScroll: 1,
            speed: 1000,
            arrows: true,
            dots : false,
            infinite: true,
        })
    }
    $('section.partners .content .block').on('afterChange', function(event, slick,currentSlide , nextSlide){
        $('section.partners .content .slider_count').html(currentSlide+1+"<span>/"+($("section.partners .content .block").slick("getSlick").slideCount)+"</span>");
    });
    $('section.reasons .content .block').on('afterChange', function(event, slick,currentSlide , nextSlide){
        $('section.reasons .content .slider_count').html(currentSlide+1+"<span>/"+($("section.reasons .content .block").slick("getSlick").slideCount)+"</span>");
    });
};
custom = function(){
    $('input[type="file"]').change(function(){
        var value = $("input[type='file']").val(),
            size = this.files[0].size,
            pos = -1,
            index = 0;
        while ((pos = value.indexOf('\\', pos + 1)) != -1) {
            index = pos;
        }
        value = value.slice(index+1, value.length)
        $('.file_name').text(value);
        $('.file_size').text(Math.round(size/1024/1024*100)/100+" mB");
    });
    $(document).on('click','.show_text',function(){
        $('.hide_text').addClass('active')
        $('.show_text').hide();
    })
    $(document).on('click','.quest',function(e){
        e.preventDefault();
    })
    $(document).on('click','.quest.hide',function(){
        $(this).addClass('active')
        $(this).removeClass('hide')
        hide_block = $(this).parent().parent().parent().find('.hide_block')
        if(hide_block.hasClass('full')){
            hide_block.addClass('active')
        }
        else{
            $(this).find('.hide_block').css('max-width',$(this).offset().left-60);
            $(this).parent().addClass('active')
        }
    })
    $(document).on('click','.close',function(){
        quest = $(this).parent().parent().parent().find('.quest')
        $(this).parent().removeClass('active')
        quest.removeClass('active')
        quest.addClass('hide')
        quest.parent().removeClass('active')
    })
    $('.menu_list').hide()
    $('.open_menu, .menu_list ul li a').click(function(e){
        $('.open_menu').toggleClass('opened')
        $('body').toggleClass('overflow')
        if($(this).attr('href') == 0){
            e.preventDefault()
        }
        $('.menu_list').fadeIn(300)
        $('.menu_list.active').fadeOut(300)
        $('.menu_list').toggleClass('active');
        $('.menu_list').css('height',$(window).height());
    })
    $('form').submit(function(e){
        var error = false,
        input = $(this).find('.input.required input[type=text]'),
        email = $(this).find('input[name=mail]');
        input.parent().removeClass('error')
        email.parent().removeClass('error')
        for(i=0;i<input.length;i++){
            if(input.eq(i).val().length == 0){
                input.eq(i).parent().addClass('error')
                error = true;
            }
        }
        var pattern  = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        if(!pattern.test(email.val())){
            email.parent().addClass('error');
            error = true;
        }
        if(error) return false;
    })
};
(function(){
    sliders();
    custom();
})();

