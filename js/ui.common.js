var front= {
    st: 0,

    init: function(){
        front.gnbUI();
        front.navUI();
        front.rightMenu = $('#nav .right_menu');
        front.mainSlider();
        front.localSlider();
        front.cultureSlider();
        front.newsroomSlider();
        front.brandSlider();
    },

    gnbUI: function(){
        var gnb = $('.bottom_header .gnb');

        gnb.on('mouseenter', function() {
            $(this).addClass('on');
            $('#header .bottom_header').addClass('on');
        });
        $('#header').on('mouseleave', function() {
            gnb.removeClass('on');
            $('#header .bottom_header').removeClass('on');
        });
        
    },
    navUI: function() {

        var offsetArr = [0, 474, 969, 1463, 1781];
        var offsetArr2 = [0, 246, 508, 766, 925];

        $('#nav .left_menu > li').each(function(i){
            var idx= $(this).index();
            var winW = $(window).outerWidth();
            
            $(this).on('click', function() {
                $(this).removeClass('active');
                $(this).addClass('on').siblings('li').removeClass('on');
              
                if(winW <= 767) {
                    // console.log(winW)
                    console.log(offsetArr2[i])
                    $('.right_nav .menu_wrap').css('transform','translateY(' + -offsetArr2[i] +'px)');
                } else {
                    $('.right_nav .menu_wrap').css('transform','translateY(' + -offsetArr[i] +'px)');
                    console.log(offsetArr[i])
                };
            });
        });   


        // 좌측메뉴 a로 클릭
        $('#nav .left_menu>li>a').on('click', function() {
          $('#nav .left_menu>li').removeClass('active');
            console.log($('#nav .left_menu>li>a').parent());
            $(this).parent().addClass('on').siblings('li').removeClass('on');
        });

		// 클릭 시에 메뉴열기 - 닫기
		$('#header .btn_menu').on('click', function(){
      $('#nav').addClass('on');
      $('body').addClass('on');
		});

		$('#nav .btn_close').on('click', function() {
      $('#nav').removeClass('on');
      $('body').removeClass('on');
		});
    },

    // 메인슬라이더 영역
    mainSlider: function() {
        var mainSwiper = new Swiper('.main_slider', {
            autoplay: true,
            centeredSlides: true,
            spaceBetween: 30,
            pagination: {
              el: '.main_slider_pagination',
              type: 'fraction',
            },
            navigation: {
              nextEl: '.main_slider_next',
              prevEl: '.main_slider_prev',
            },

          });

          $(".swiper-button-pause").click(function(){
            mainSwiper.autoplay.stop();
            $(".swiper-button-pause").removeClass('on');
            $(".swiper-button-play").addClass('on');
          });

          $(".swiper-button-play").click(function(){
            mainSwiper.autoplay.start();
            $(".swiper-button-play").removeClass('on');
            $(".swiper-button-pause").addClass('on');
          });
    },

    localSlider: function() {
    var localSwiper = new Swiper('.news_slider', {
        // Optional parameters
        loop: true,
        slidesPerView: 1,
      
        // If we need pagination
        pagination: {
          el: '.news_pagination',
        },
      });

      var todaySwiper = new Swiper('.today_slider', {
        // Optional parameters
        loop: true,
        slidesPerView: 'auto',      
        // If we need pagination
        navigation: {
            nextEl: '.today_slider_next',
            prevEl: '.today_slider_prev',
          },
      });

      var todaySwiper = new Swiper('.paldo_slider', {
        // Optional parameters
        loop: true,
        slidesPerView: 'auto',      
        // If we need pagination
        navigation: {
            nextEl: '.paldo_slider_next',
            prevEl: '.paldo_slider_prev',
          },
      });
    },

    // 헬로컬쳐 피플 슬라이더
    cultureSlider: function() {
      var cultureSwiper = new Swiper('.culture_slider', {
        // Optional parameters
        loop: true,
        slidesPerView: 'auto',      
        // If we need pagination
        navigation: {
            nextEl: '.culture_slider_next',
            prevEl: '.culture_slider_prev',
          },
        });
        
      },

    // 뉴스룸 슬라이더
    newsroomSlider: function() {
      var newsroomSwiper = new Swiper('.newsroom_slider', {
        slidesPerView: 'auto',
        // loop: true,
        navigation: {
          nextEl: '.newsroom_slider_next',
          prevEl: '.newsroom_slider_prev',
        },
      });
    },

    // 브랜드 스토리 슬라이더
    brandSlider: function() {
      var brandSwiper = new Swiper('.brand_story_slider', {
        // Optional parameters
        slidesPerView: 'auto',
        // loop: true,
        // effect: 'fade',
      
        // If we need pagination
        pagination: {
          el: '.brand_pagination',
          type: 'fraction',
        },
      
        // Navigation arrows
        navigation: {
          nextEl: '.brand_slide_next',
          prevEl: '.brand_slide_prev',
        },
      
      })
    },

};


$(document).ready(function() {
    front.init();

    $(window).scroll(function(){
        // front.st.$(this).scrollTop();
    });
});