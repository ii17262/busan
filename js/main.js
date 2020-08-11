$(function () {
  $(".nav_btn").click(function () {
    $(this).fadeOut(900);
    $(".sum_mn").fadeIn(900);
    $(".darkback").fadeIn(900);
  });
  $(".closeBtn").click(function () {
    $(".sum_mn").fadeOut(1000);
    $(".darkback").fadeOut(1000);
    $(".nav_btn").fadeIn(900);
  });

  // $(".menu01 li a").click(function (){
  //   $(".sub").slideToggle("slow");
  // });

  //메인슬라이더
  $(".lazy").slick({
    autoplay: true,
    dots: true,
    lazyLoad: "ondemand",
    infinite: true,
    pauseOnHover: true,
  });
  //#section3 슬라이더
  $("#section3 .regular").slick({
    dots: true,
    infinite: true,
    slidesToShow: 4,
    slidesToScroll: 4,
  });

  $("#section5 .regular").slick({
    dots: true,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
  });

  $(".lazy .slick-slide").each(function () {
    //1단계
    //5단계
    if ($(window).width() < 740) {
      //alert();
      var img = $(this).find("img"); //2단계  find ==> 선택자를 찾는 명령
      var img_pc = img.attr("src"); //3단계
      var img_mo = img_pc.replace("_pc", "_mo"); //4단계   relapce(a,b) ==> a를 b로 대체
      img.attr("src", img_mo);
      $(".bx-viewport").css({ height: "auto" });
    } else {
      var img = $(this).find("img"); //2단계  find ==> 선택자를 찾는 명령
      var img_mo = img.attr("src"); //3단계
      var img_pc = img_mo.replace("_mo", "_pc"); //4단계   relapce(a,b) ==> a를 b로 대체
      img.attr("src", img_pc);
    }
  });

  var wd = $(window);
  $(".paral").each(function () {
    var bg = $(this);
    wd.scroll(function () {
      var yPos = -(wd.scrollTop() / 2);
      //나눠지는 숫자가 작을 수록 속도가 빠름
      var coords = "50%" + yPos + "px";
      bg.css({ backgroundPosition: coords });
    });
  });

  $(window).resize(function () {
    if ($(window).width() > 780) {
      var nheight = $(".notice_box").height();
      $(".news_box").height(nheight);
    } else {
      $(".news_box").height("auto");
    }

    $(".lazy .slick-slide").each(function () {
      //1단계
      //5단계
      if ($(window).width() < 740) {
        //alert();
        var img = $(this).find("img"); //2단계  find ==> 선택자를 찾는 명령
        var img_pc = img.attr("src"); //3단계
        var img_mo = img_pc.replace("_pc", "_mo"); //4단계   relapce(a,b) ==> a를 b로 대체
        img.attr("src", img_mo);
        $(".bx-viewport").css({ height: "auto" });
      } else {
        var img = $(this).find("img"); //2단계  find ==> 선택자를 찾는 명령
        var img_mo = img.attr("src"); //3단계
        var img_pc = img_mo.replace("_mo", "_pc"); //4단계   relapce(a,b) ==> a를 b로 대체
        img.attr("src", img_pc);
      }
    });
  });

  if ($(window).width() > 780) {
    var nheight = $(".notice_box").height();
    $(".news_box").height(nheight);
  } else {
    $(".news_box").height("auto");
  }

  /*
  if ($(window).width() > 780) {
    var nheight = $(".notice_box").height();
    $(".news_box").height(nheight);
  } else if ($(window).width() > 540){
      $(".news_box").height(500);
  }
    else {
    $(".news_box").height("auto");
  }
  */
}); //END
