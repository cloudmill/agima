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

$(window).on('load',function(){
    $('.preload').fadeOut(300);

    $('header .content').addClass('animated fadeInDown');
    $('.first .content .img .layer').eq(0).addClass('animated fadeInDown');
    $('.first .content .img .layer').eq(4).addClass('animated fadeInDown');


    $('.first .content .img .layer').eq(5).addClass('animated fadeIn');

    $('.first .content .img .layer').eq(1).addClass('animated fadeInRight');

    $('.first .content h1').addClass('animated fadeInLeft')
})
var value_scroll = 0;
$(document).on('scroll',function(){
    var scroll = $(document).scrollTop(),
    height = $(window).height()
    down = value_scroll < scroll ? true : false;

    var animated = {
        'fadeInUp' : [
            $('.process .block .item .img'),
            $('header .content'),
            $('.first .content .img .layer').eq(0),
            $('.first .content .img .layer').eq(4),
            $('.services .content .right ul li'),
            $('.partners .content .block .item .img'),
            $('.reasons .content .block .item .num'),
            $('.next_reasons .content .and_yet .circle'),
            $('.next_reasons .content .row .col .right .img'),
            $('.next_reasons .content .block .col .img'),
            $('.partners .content .row .col .img'),
            $('.support .content .block ul li'),
            $('.work .content p.all_time'),
            $('.work .content .block .right span'),
            $('.order .content .block .text p')
            
        ],
        'fadeIn':[
            $('.process .block .item .block .one'),
            $('.process .block .item .block .num'),
            $('.first .content .img .layer').eq(5),
            $('.partners .content .block .item p'),
            $('.reasons .content .block .item .text'),
            $('.next_reasons .content .and_yet .line'),
            $('.next_reasons .content .row .col p.num'),
            $('.reasons .content p'),
            $('.services .content .left .item h1'),
            
            
        ],
        'fadeInUp fadeOut':[
            $('.process .block .item .block .two'),
            $('.order .content .block .img p'),
            $('.partners .content .block .item ul'),
            $('.reasons .content .block .item .text a'),
            $('.next_reasons .content .row .col .right p'),
            $('.next_reasons .content .block .col .text'),
        ],
        'fadeInRight':[
            $('.first .content .img .layer').eq(1),
            $('.order .content .block .img .bg'),
            $('.next_reasons .content .and_yet h1 span.right'),
            $('.partners .content .row .col p'),
            $('.work .content .block .right'),
            $('.form .content .block p.two')
            
        ],
        'fadeInLeft':[
            $('.first .content h1'),
            $('.next_reasons .content .and_yet h1 span.left'),
            $('.reasons .content p b'),
            $('.partners .content .row p.title'),
            $('.services .content .left .item p'),
            $('.work .content p.all_time span.time'),
            $('.work .content .block .left'),
            $('.form .content .block p.one')
        ],

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

