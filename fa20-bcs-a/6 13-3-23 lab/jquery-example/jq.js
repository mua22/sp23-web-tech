$(doBindings);

function doBindings() {
  $("#mybtn").on("click", clicked);
}

function clicked() {
  console.log("BTn Clicked");
}
