$(document).ready(function() {
  $("form#quiz").submit(function(event) {
    event.preventDefault();
    var tracks = $("input:radio:checked");
    var numRuby = 0;
    var numPhp = 0;
    var numCss = 0;
    var numJava = 0;
    var numCsharp = 0;
    for (var i = 0; i < tracks.length; i++) {
      if (tracks[i].value === "ruby") {
        numRuby++;
      } else if (tracks[i].value === "php") {
        numPhp++;
      } else if (tracks[i].value === "css") {
        numCss++;
      } else if (tracks[i].value === "java") {
        numJava++;
      } else {
        numCsharp++;
      }
    }
    var maxCount = Math.max(numRuby, numPhp, numCss, numJava, numCsharp)
    if (numRuby === maxCount) {
      $("#ruby").show();
    } else if (numPhp === maxCount) {
      $("#php").show();
    } else if (numCss === maxCount) {
      $("#css").show();
    } else if (numJava === maxCount) {
      $("#java").show();
    } else if (numCsharp === maxCount) {
      $("#csharp").show();
    }
  });
  $("button.tryagain").click(function() {
      $(".result").hide();
    $("button.readmore").click(function() {
      $("#step3").show();
  });
});
