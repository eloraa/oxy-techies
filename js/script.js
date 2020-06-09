var music = document.getElementById("bg-music");
var isPlaying = false;

function togglePlay() {
  if (isPlaying) {
    music.pause()
  } else {
    music.play();
  }
};
music.onplaying = function() {
  isPlaying = true;
};
music.onpause = function() {
  isPlaying = false;
};


  // Mouse Click Ripple Effects
    if ($('html').data("click-ripple-animation") === "yes") {
      $("html").append('<i class="ripple"></i>');
      $("html").on("mousedown", function (e) {
        $("i.ripple").addClass("active").css("left", e.pageX).css("top", e.pageY);
      });

      $("i.ripple").bind("transitionend webkitTransitionEnd oTransitionEnd MSTransitionEnd", function () {
        return $("i.ripple").removeClass("active");
      });
    }


