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
  // centeredSlides: true,
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

/* .backgroung-color-fadein
-------------------------------------------------------------*/
$(function () {
  // タグ生成
  $(".mask").wrap("<div class='mask-wrap'>");
  $(".mask").append("<div class='mask-bg'></div>");

  // 速度とイージングの設定
  var speed = 500;
  var easing = "easeInOutCubic";

  $(".mask").on(
    "inview",
    function (event, isInView, visiblePartX, visiblePartY) {
      if (isInView) {
        $(this)
          .stop()
          .animate({ left: "0%" }, speed, easing, function () {
            $(this).find(".mask-bg").stop().animate({ left: "100%" }, speed, easing);
          });
      }
    }
  );
});


// //要素の取得とスピードの設定
// const box = $(".colorbox"),
//   speed = 700;

// //.colorboxの付いた全ての要素に対して下記の処理を行う
// box.each(function () {
//   $(this).append('<div class="color"></div>');
//   var color = $(this).find($(".color")),
//     image = $(this).find("img");
//   var counter = 0;

//   image.css("opacity", "0");
//   color.css("width", "0%");
//   //inviewを使って背景色が画面に現れたら処理をする
//   color.on("inview", function () {
//     if (counter == 0) {
//       $(this)
//         .delay(200)
//         .animate({ width: "100%" }, speed, function () {
//           image.css("opacity", "1");
//           $(this).css({ left: "0", right: "auto" });
//           $(this).animate({ width: "0%" }, speed);
//         });
//       counter = 1;
//     }
//   });
// });
