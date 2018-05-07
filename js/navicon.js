$("document").ready(function() {
  var navopen = false;
  $("#naviconcontainer").click(function(e) {
    var navic = $("#naviconcontainer");
    if(navopen) {
      navic.css("width", "65px").css("background-color", "black");
      $("#navicon").css("transform", "rotate(0deg)");
      navopen = false;
    } else {
      navic.css("width", "95%").css("background-color", "rgb(230, 230, 230, 95%)").css("transition", "width 1s, background-color 1s");
      $("#naviconcontainer ul a").css("display", "flex");
      $("#navicon").css("transform", "rotate(-180deg)").css("transition", "transform 1s");
      navopen = true;
    }
  });
});
