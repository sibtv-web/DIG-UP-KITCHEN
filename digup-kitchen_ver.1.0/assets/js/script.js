//ローディング
$('head').append( // append()内の引数を</head>の手前に追加する
    '<style type="text/css">#container { display: none; } #fade, #loader { display: block; }</style>' // contanerを表示、loaderを非表示
);
 
jQuery.event.add(window,"load",function() { // 全ての読み込み完了後に呼ばれる関数
    var pageH = $("#container").height(); // containerの高さを取得して、pageHに代入する
 
    $("#fade").css("height", pageH).delay(900).fadeOut(800); // pageHで取得したcontainerの高さをfadeの高さに設定、900ms表示後、800ms掛けてフェイドアウト
    $("#loader").delay(600).fadeOut(300); // 600ms表示後、300ms掛けてフェイドアウト
    $("#container").css("display", "block"); // containerを表示する
});

//トップへ戻るボタン
$(document).ready(function () {
  $(".btn__totop").hide();
  $(window).on("scroll", function () {
    if ($(this).scrollTop() > 100) {
      $(".btn__totop").fadeIn("slow");
    } else {
      $(".btn__totop").fadeOut("slow");
    }
    scrollHeight = $(document).height(); //ドキュメントの高さ 
    scrollPosition = $(window).height() + $(window).scrollTop(); //現在地 
    footHeight = $("footer").innerHeight(); //footerの高さ（＝止めたい位置）
    if (scrollHeight - scrollPosition <= footHeight) { //ドキュメントの高さと現在地の差がfooterの高さ以下になったら
      $(".btn__totop").css({
        "position": "absolute", //pisitionをabsolute（親：wrapperからの絶対値）に変更
        "bottom": footHeight - 15 //下からfooterの高さ -15px の位置に配置
      });
    } else { //それ以外の場合は
      $(".btn__totop").css({
        "position": "fixed", //固定表示
        "bottom": "1em" //下から1em上げた位置に
      });
    }
  });
  $('.btn__totop').click(function () {
    $('body,html').animate({
      scrollTop: 0
    }, 400);
    return false;
  });
});

//スクロールエフェクト
window.onload = function () {
  scroll_effect();

  $(window).scroll(function () {
    scroll_effect();
  });

  function scroll_effect() {
    $('.effect-fade').each(function () {
      var elemPos = $(this).offset().top;
      var scroll = $(window).scrollTop();
      var windowHeight = $(window).height();
      if (scroll > elemPos - windowHeight) {
        $(this).addClass('effect-scroll');
      }
    });
  }
};