$(document).ready(function() {
  $("form#quiz").submit(function(event) {
    event.preventDefault();
    var tracks = $("input:radio:checked");
    var languages = []
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
    debugger;
    if (tracks === "ruby") {
      $("#ruby").show();
    } else if (tracks === "php") {
      $("#php").show();
    } else if (tracks === "css") {
      $("#css").show();
    } else if (tracks === "java") {
      $("#java").show();
    } else if (tracks === "csharp") {
      $("#csharp").show();
    }
  });
});
