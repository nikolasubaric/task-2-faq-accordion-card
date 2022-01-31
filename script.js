function showAnswerOne(i, e, o) {
  console.log("hello");
  var x = document.getElementById(i).style.display;
  if (x == "") {
    document.getElementById(i).style.display = "block";
    document.getElementById(e).style.fontWeight = 700;
    document.getElementById(o).style.transform = "rotate(180deg)";
  } else if (x == "block") {
    document.getElementById(i).style.display = "none";
    document.getElementById(e).style.fontWeight = 400;
    document.getElementById(o).style.transform = "rotate(0deg)";
  } else if (x == "none") {
    document.getElementById(i).style.display = "block";
    document.getElementById(e).style.fontWeight = 700;
    document.getElementById(o).style.transform = "rotate(180deg)";
  }
}
