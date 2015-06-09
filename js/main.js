var OS = [];

$(window).load(function(){
  $("html").removeClass("loading");
  $(document).scroll(OS.slideNavbar);
  $(window).resize(OS.resize);
  OS.slideNavbar();
  OS.clickToScroll();
  OS.mockupSwitch();
  OS.titleAnim();
  OS.getTypeIntroSize();
  OS.adjustHeaderBackground();
  OS.fadeHeaderBackground();
});

OS.resize = function(){
  OS.getTypeIntroSize();
  OS.adjustHeaderBackground();
};

OS.navbarShown = false;

OS.slideNavbar = function(){
  if ($(document).scrollTop() >= $("#consultas").offset().top && !OS.navbarShown){
    $( "#navbar-main" ).velocity({
      marginTop: "0"
    },{
      duration:400,
      easing:"swing"
    });
    OS.navbarShown = true;
  }
  else if ($(document).scrollTop() < $("#consultas").offset().top && OS.navbarShown){
    $( "#navbar-main" ).velocity({
      marginTop: "-80"
    },{
      duration:400,
      easing:"swing"
    });
    OS.navbarShown = false;
  }
};

OS.clickToScroll = function(){
  $( ".link-scroll" ).click(function(e) {
    console.log($(this).attr("href"));
    e.preventDefault(); 
    OS.scrollToSection($(this).attr("href"));           
  });
};

OS.scrollToSection = function(section){
  $('html,body').animate({
    scrollTop: $(section).offset().top - 80
  },"slow");
};

OS.mockupSwitch = function(){
  $(".how-it-works-item").hoverIntent(function(){
    $(".how-it-works-item").removeClass("active");
    $(".how-it-works-mockup").removeClass("active");
    $($(this).data("target")).addClass("active");
    $(this).addClass("active");
  });
};

OS.titleAnim = function(){
  $(".animation").textrotator({
    animation: "fade",
    separator: "/",
    speed: 2000
  });
};

OS.getTypeIntroSize = function(){
  var currentWidth = $(".type-intro-image-container").css("width");
  $(".type-intro-image-container").css("height", currentWidth);
  $(".type-intro-image-container").css("border-radius", currentWidth);
};

OS.adjustHeaderBackground = function(){
  var headerHeight = $("header").height();
  var headerWidth = $(window).innerWidth();
  $("#background-container").css("height", headerHeight);
  if (headerWidth >= headerHeight * 2){
    $(".background").css("height", headerWidth/2);
    $(".background").css("width", headerWidth);
  }
  else{
    $(".background").css("height", headerHeight);
    $(".background").css("width", headerHeight*2);
  }
};

OS.fadeHeaderBackground = function(){
  $("#background-container .background").first().appendTo('#background-container').fadeOut(2000);
  $("#background-container img").first().fadeIn(2000);
  setTimeout(OS.fadeHeaderBackground, 4000);
};