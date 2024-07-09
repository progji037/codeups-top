jQuery(function ($) {
  // この中であればWordpressでも「$」が使用可能になる
  $(".header__drawer").on("click", function () {
    if ($(this).hasClass("active")) {
      $(this).removeClass("active");
      $(".header-drawer__menu").removeClass("open");
    } else {
      $(this).addClass("active");
      $(".header-drawer__menu").addClass("open");
    }
    // ウィンドウのリサイズを監視し、幅が768px以上の場合はドロワーメニューを閉じる
  $(window).on("resize", function () {
    if ($(window).width() > 767) {
      $(".header__drawer").removeClass("active");
      $(".header-drawer__menu").removeClass("open");
    }
  });
  });
});

/* .ドロワーの後ろがスクロールされない
-------------------------------------------------------------*/
$(function () {
  // ハンバーガーメニューボタンがクリックされたときのイベントハンドラを設定
  $(".header__drawer").click(function () {

    // 現在のbodyタグのoverflowスタイルを確認
    if ($("body").css("overflow") === "hidden") {

      // もしoverflowがhiddenなら、bodyのスタイルを元に戻す
      $("body").css({ height: "", overflow: "" });

    } else {

      // そうでなければ、bodyにheight: 100%とoverflow: hiddenを設定し、スクロールを無効にする
      $("body").css({ height: "100%", overflow: "hidden" });

    }
  });
});

/* .fv
-------------------------------------------------------------*/

const swiper2 = new Swiper(".mySwiper2", {
  slidesPerView: 1,
  loot: true,
  effect: "fade",
  speed: 1000,
  autoplay: {
    // 自動再生
    delay: 2500, // 2.5秒後に次のスライド
  },
});


/* .campaign
-------------------------------------------------------------*/

const swiper1 = new Swiper(".js-top-swiper", {
  slidesPerView: "auto",
  spaceBetween: 24,
  loop: true,
  speed: 2000,
  autoplay: {
    // 自動再生
    delay: 1500, // 1.5秒後に次のスライド
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  breakpoints: {
    //ブレークポイント
    767: {
      //横幅が767px以上の場合
      spaceBetween: 40,
    },
  },
});

/* .top-scroll
-------------------------------------------------------------*/
$(function () {
  const pageTop = $("#js-pageTop").hide();

  $(window).scroll(function () {
    if ($(this).scrollTop() > 100) {
      pageTop.fadeIn();
    } else {
      pageTop.fadeOut();
    }
  });
  opacity:1,
  
  pageTop.click(function () {
    $("body,html").animate(
      {
        scrollTop: 0,
      },
      50
    );
    return false;
  });
});



//要素の取得とスピードの設定
var box = $('.colorbox'),
    speed = 700;  
 
//.colorboxの付いた全ての要素に対して下記の処理を行う
box.each(function(){
    $(this).append('<div class="color"></div>')
    var color = $(this).find($('.color')),
    image = $(this).find('img');
    var counter = 0;
 
    image.css('opacity','0');
    color.css('width','0%');
    //inviewを使って背景色が画面に現れたら処理をする
    color.on('inview', function(){
        if(counter == 0){
　　　　　$(this).delay(200).animate({'width':'100%'},speed,function(){
                   image.css('opacity','1');
                   $(this).css({'left':'0' , 'right':'auto'});
                   $(this).animate({'width':'0%'},speed);
                })
            counter = 1;
          }
     });
});


// loading animation
$(document).ready(function () {
  const leftSlides = $(".fv-loading__split.left .slide");
  const rightSlides = $(".fv-loading__split.right .slide");
  const totalSlides = leftSlides.length;
  let currentIndex = 0;


  // 最初のスライドを表示
  $(leftSlides[currentIndex]).addClass("active");
  $(rightSlides[currentIndex]).addClass("active");

});

/* .loading fadeout
-------------------------------------------------------------*/// script.js

$(document).ready(function() {
  // フェードアウトさせる要素を取得
  var $targetElement = $('.fade-out-target');

  // 指定の秒数（ミリ秒）後にフェードアウトさせる
  var delay = 3000; // 3000ミリ秒（3秒）

  setTimeout(function() {
    $targetElement.addClass('fade-out');

    // フェードアウト後に非表示にする
    setTimeout(function() {
      $targetElement.hide();
    }, 7000); // フェードアウトアニメーションの時間と同じにする
  }, delay);
});


