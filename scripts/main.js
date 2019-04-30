
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
    if($(document).width() < 1024){
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
};
(function(){
    sliders();
    custom();
})();

