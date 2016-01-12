(function(){
  var windowwidth = $(window).width();
  var windowheight = $(window).height();
  var main = $("main");
  // 350 x 30 average div dimension
  function is_touch_device() {
        return (('ontouchstart' in window)
            || (navigator.MaxTouchPoints > 0)
            || (navigator.msMaxTouchPoints > 0));
  }

  main.css('max-height', windowheight);

  if(!is_touch_device() || windowwidth > 998) {
    var horizontalfit = windowwidth/300;
    var verticalfit = windowheight/50;
    var total = horizontalfit*verticalfit;
    var dontknow = ["HTML", "CSS", "Javascript", "Ember", "Java", "animation", "art", "how to draw", "programming",
                    "how to organize stuff", "enough languages", "the world", "cool cultural stuff", "how to talk to people",
                     "how to make a cool site", "how to publish something", "a good feminist comeback",
                   "martial arts", "how to act", "enough computer stuff"];
    var rando = 0;
    for(var i=0; i < total; i++) {
        rando = Math.floor((Math.random() * dontknow.length));
        main.prepend("<div class='bgmessage'>I don't know " + dontknow[rando] +"</div>");
    }

    var baloon1 = $('.bgmessage:nth-child(odd)');
    var baloon2 = $('.bgmessage:nth-child(even)');
   function runIt() {
       baloon1.animate({top:'+=5'}, 2000);
       baloon1.animate({top:'-=5'}, 2000, runIt);
       baloon2.animate({top:'-=5'}, 2000);
       baloon2.animate({top:'+=5'}, 2000, runIt);
   }

   runIt();
  }

}(jQuery));
