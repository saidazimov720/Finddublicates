function takrorlanuvchi() {
  var input = document.getElementById("arrayInput").value;
  var arr = input.split(" ");
  var counts = {};

  for (var element of arr) { 
    element = element.trim();

    if (counts[element]) {
      counts[element]++;
    } else {
      counts[element] = 1;
    }
  }
  var natijalar = document.getElementById("natija");
  natijalar.innerHTML = "<h3>Takrorlanuvchi elementlar:</h3>";

  for (var key in counts) {
    if (counts[key] > 1) {
      natijalar.innerHTML += key + "<br>";
    }
  }
}  