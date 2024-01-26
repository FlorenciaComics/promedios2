
    
function calculateAverages() {
  var setaverages = [];
  var totalaverage = 0;

  for (var i = 1; i <= 3; i++) {
    var num1 = parseFloat(document.getElementById("set" + i + "_num1").value) || 1;
    var num2 = parseFloat(document.getElementById("set" + i + "_num2").value) || 1;
    var num3 = parseFloat(document.getElementById("set" + i + "_num3").value) || 1;

    var average = (num1 + num2 + num3) / 3;
    setaverages.push(average.toFixed(2));
    totalaverage += average;

    document.getElementById("result" + i).innerHTML = "promedio: " + average.toFixed(2);
  }
  
  totalaverage /= 3;
  document.getElementById("totalresult").innerHTML = "Promedio final: " + totalaverage.toFixed(2);
}
    
