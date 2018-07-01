this.on("mount", e => {
  var labelValue = document.getElementsByClassName("loader--label")[0];
  var loader = document.getElementsByClassName("loader")[0];
  setTimeout(function() {
    labelValue.text = loader.width;
  }, 200);
});
