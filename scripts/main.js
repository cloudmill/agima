$('.preload').height($(window).height())
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
    $(document).on('click',function(e){
        if(!$('.quest').is(e.target)){
            quest = $('.close').parent().parent().parent().find('.quest')
            $('.close').parent().removeClass('active')
            quest.removeClass('active')
            quest.addClass('hide')
            quest.parent().removeClass('active')
        }
        if(($('.dropdown-wrapper').has(e.target).length === 0)){
            $('.dropdown-wrapper').find('.list').removeClass('fadeIn')
            $('.dropdown-wrapper').find('.list').addClass('fadeOut')
            setTimeout(() => {
                $('.dropdown-wrapper').removeClass('active')
                $('.input').removeClass('drop')
            }, 300);
        }
    })
    $('.open_menu, .menu_list ul li a').click(function(e){
        $('.open_menu').toggleClass('opened')
        $('body').toggleClass('overflow')
        if($(this).attr('href') == 0){
            e.preventDefault()
        }
        $('.menu_list').toggleClass('fadeOut')
        $('.menu_list').toggleClass('fadeIn')
        $('.menu_list h1').toggleClass('fadeInLeft')
        $('.menu_list h1').toggleClass('fadeOutLeft')
        $('.menu_list ul li').toggleClass('fadeInRight')
        $('.menu_list ul li').toggleClass('fadeOutRight')
        $('.menu_list').css('height',$(window).height());
        if($('.menu_list').hasClass('fadeIn')){
            $('.menu_list').toggleClass('active');
        }
        else{
            setTimeout(() => {
                $('.menu_list').toggleClass('active');
            }, 600);
        }
        
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
    function circle_fig(){
        for(i =0;i<$('.circle_fig').length;i++){
            translate = Math.random()*6+'px,'+Math.random()*6;
            item = document.getElementsByClassName('circle_fig')
            item[i].style.transform = 'translate('+translate+'px)'
        }
    }
    setInterval(circle_fig,1000)


    $('.dropdown-wrapper .value').click(function(e){
        //if($(this).parent('.dropdown-wrapper').find('.list').hasClass('fadeOut')){
            $('.input').removeClass('drop')
            $('.input .dropdown-wrapper').removeClass('active')
            $(this).parent('.dropdown-wrapper').toggleClass('active')
            $(this).parent().parent('.input').toggleClass('drop')
            $(this).parent('.dropdown-wrapper').find('.list').addClass('fadeIn')
            $(this).parent('.dropdown-wrapper').find('.list').removeClass('fadeOut')
        //}
    })
    $('.dropdown-wrapper .list li').click(function(){
        if($(this).parent().hasClass('many')){
            $(this).toggleClass('checked')
            var data = '';
            for(i=0;i<$(this).parent().find('li.checked').length;i++){
                data += ($(this).parent().find('li.checked').eq(i).text())
                if(i+1<$(this).parent().find('li.checked').length)
                    data +=', '
            }
            $(this).parent().parent().find('input').val(data)
            $(this).parent().parent().find('.inpt').text(data)
        }
        else{
            $(this).parent().parent().find('input').val($(this).text())
            $(this).parent().parent().find('.inpt').text($(this).text())
            $(this).parent().find('li').removeClass('checked')
            $(this).addClass('checked')
            $(this).parent().toggleClass('fadeIn')
            $(this).parent().toggleClass('fadeOut')
            setTimeout(() => {
                $(this).parent().parent().removeClass('active')
                $(this).parent().parent().parent().removeClass('drop')
            }, 600);
        }
        if($(this).parent().parent().find('.inpt').text()=='')
            $(this).parent().parent().find('.inpt').text('Выберите')
    })

    $('input[name="site_adress"]').change(function(){
        console.log('sss')
        var item = document.getElementById('dont_have_site')
        if($(this).val() == ''){
            item.disabled = false
            $('input[name="dont_have_site"]').removeClass('disabled')
        }else{
            item.checked = false;
            item.disabled = true
            $('input[name="dont_have_site"]').addClass('disabled')
        }
    })
};
find_in_select = function(){
    $(document).on('keyup','.dropdown-wrapper .value input',function(e){
        word = $(this).val().toLowerCase();
        if(e.keyCode){
            $(this).parent().parent().find('.list li').hide();
        for(i=0;i<$(this).parent().parent().find('.list li').length;i++){
            var str = $(this).parent().parent().find('.list li').eq(i).text().toLowerCase()
            if(str.indexOf(word)+1){
                $(this).parent().parent().find('.list li').eq(i).show()
            }
        }
        if(word == ''){
            $(this).parent().parent().find('.list li').show();
        }
        }
    })
};
(function(){
    sliders();
    custom();
    find_in_select();
})();

$(window).on('load',function(){
    $('.preload').fadeOut(300);

    $('header .content .logo').addClass('animated fadeInDown');
    $('.first .content .img .layer').eq(0).addClass('animated fadeInDown');
    $('.first .content .img .layer').eq(2).addClass('animated fadeInDown');//
    $('.first .content .img .layer').eq(4).addClass('animated fadeInDown');
    $('.help .content p').addClass('animated fadeInUp')

    $('.help .content h1').addClass('animated fadeIn')
    $('.first .content .img .layer').eq(1).addClass('animated fadeInRight');
    $('.first .content h1').addClass('animated fadeInLeft')

    $('.first .content .img .layer').eq(5).addClass('animated zoomIn');//
})
var value_scroll = 0;
$(document).on('scroll',function(){
    var scroll = $(document).scrollTop(),
    height = $(window).height()
    down = value_scroll < scroll ? true : false;
    var animated = {
        'fadeInUp' : [
            $('.process .block .item .img'),
            $('header  .content .logo'),
            $('.first .content .img .layer').eq(0),
            $('.first .content .img .layer').eq(2),//
            $('.first .content .img .layer').eq(4),
            $('.services .content .right ul li'),
            $('.partners .content .block .item .img'),//
            $('.reasons .content .block .item .num'),
            $('.next_reasons .content .and_yet .circle'),
            $('.next_reasons .content .row .col .right .img'),//
            $('.next_reasons .content .block .col .img'),//
            $('.partners .content .row .col .img'),
            $('.support .content .block ul li'),
            $('.work .content p.all_time'),//
            $('.work .content .block .right span'),
            $('.order .content .block .text p'),
            $('.help .content button'),
            $('.help .content p'),
        ],
        'fadeIn':[
            $('.process .block .item .block .one'),
            $('.process .block .item .block .num'),
            $('.partners .content .block .item p'),
            $('.reasons .content .block .item .text'),
            $('.next_reasons .content .and_yet .line'),
            $('.next_reasons .content .row .col p.num'),//
            $('.reasons .content p'),
            $('.services .content .left .item h1'),
            $('.help .content h1'),
        ],
        'fadeInUp fadeOut':[
            $('.process .block .item .block .two'),
            $('.order .content .block .img p'),
            $('.partners .content .block .item ul li'),
            $('.reasons .content .block .item .text a'),
            $('.next_reasons .content .row .col .right p'),//
            $('.next_reasons .content .block .col .text'),//
            $('.form .content .form_block form .input'),//
            $('.form .content .form_block form button')//
        ],
        'fadeInRight':[
            $('.first .content .img .layer').eq(1),
            $('.order .content .block .img .bg'),//
            $('.next_reasons .content .and_yet h1 span.right'),
            $('.partners .content .row .col p'),//
            $('.work .content .block .right'),
            $('.form .content .block p.two'),
            $('.support .content .block .right'),
            $('.form .word')
        ],
        'fadeInLeft':[
            $('.first .content h1'),
            $('.next_reasons .content .and_yet h1 span.left'),
            $('.reasons .content p b'),
            $('.partners .content .row p.title'),//
            $('.services .content .left .item p'),
            $('.work .content p.all_time span.time'),
            $('.work .content .block .left'),
            $('.form .content .block p.one'),
            $('.process .content h1'),
            $('.support .content p.title'),
            $('.support .content .block .left'),
            $('.reasons .left_fig')
        ],
        'zoomIn':[
            $('.first .content .img .layer').eq(5),//
        ]
    }
    for(anim in animated){
        var an_out_up = 'fadeOutUp',
        an_out_down = 'fadeOutDown',
        an_in_up = 'fadeInUp',
        an_in_down = 'fadeInDown';
        if(anim == 'fadeIn'){
            an_out_up = 'fadeOut',
            an_out_down = 'fadeOut',
            an_in_up = 'fadeIn',
            an_in_down = 'fadeIn';
        }
        if(anim == 'fadeInUp fadeOut'){
            an_out_up = 'fadeOut',
            an_out_down = 'fadeOutDown',
            an_in_up = 'fadeInUp',
            an_in_down = 'fadeIn';
        }
        if(anim == 'fadeInRight'){
            an_out_up = 'fadeOutRight';
            an_out_down = 'fadeOutRight';
            an_in_up = 'fadeInRight';
            an_in_down = 'fadeInRight';
        }
        if(anim == 'fadeInLeft'){
            an_out_up = 'fadeOutLeft';
            an_out_down = 'fadeOutLeft';
            an_in_up = 'fadeInLeft';
            an_in_down = 'fadeInLeft';
        }
        if(anim == 'zoomIn'){
            an_out_up = 'zoomOut';
            an_out_down = 'zoomOut';
            an_in_up = 'zoomIn';
            an_in_down = 'zoomIn';
        }
        for(i=0;i<animated[anim].length;i++){
            for(j=0;j<animated[anim][i].length;j++){
                el_top = animated[anim][i].eq(j).offset().top
                el_height = animated[anim][i].eq(j).height()

                animated[anim][i].eq(j).addClass('animated')
                if(down){
                    if(scroll+height >= el_top - el_height/2 && scroll <= el_top){
                        animated[anim][i].eq(j).removeClass(an_out_up)
                        animated[anim][i].eq(j).removeClass(an_out_down)
                        if(!animated[anim][i].eq(j).hasClass(an_in_down))
                            animated[anim][i].eq(j).addClass(an_in_up)
                    }
                    else if(scroll >= el_top + el_height/2){
                        animated[anim][i].eq(j).removeClass(an_in_down)
                        animated[anim][i].eq(j).removeClass(an_in_up)
                        if(!animated[anim][i].eq(j).hasClass(an_out_down))
                            animated[anim][i].eq(j).addClass(an_out_up)
                    }
                }
                else{
                    if(scroll <= el_top + el_height + el_height/2 && scroll+height >= el_top + el_height/2){
                        animated[anim][i].eq(j).removeClass(an_out_up)
                        animated[anim][i].eq(j).removeClass(an_out_down)
                        if(!animated[anim][i].eq(j).hasClass(an_in_up))
                            animated[anim][i].eq(j).addClass(an_in_down)
                    }
                    else if(scroll <= el_top){
                        animated[anim][i].eq(j).removeClass(an_in_up)
                        animated[anim][i].eq(j).removeClass(an_in_down)
                        if(!animated[anim][i].eq(j).hasClass(an_out_up))
                            animated[anim][i].eq(j).addClass(an_out_down)
                    }
                }
            }
        }
        
    }
    value_scroll = scroll;
})

