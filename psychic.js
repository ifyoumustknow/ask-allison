var allisonguess;

function start() {
  allisonguess = Math.floor((Math.random() * 9) + 1);
  console.log(allisonguess);
}

function number() {
  var inputGuess = document.getElementById('userguess').value;
  console.log(allisonguess);


  if (inputGuess == allisonguess) {
    var prediction = ["Fortune", "Love", "Danger", "Loss", "Happiness", "Success", "Pain", "Travel", "Fame"];
    var predictionVal = prediction[Math.floor(Math.random() * prediction.length)];
    document.getElementById('prediction').innerHTML = 'Allison sees ' + predictionVal + ' in your future';


  } else {
    var x = document.getElementById("userguess").value;
    document.getElementById("prediction").innerHTML = "You Pick " + x + " Allison says try a different number";
    // document.getElementById('prediction').innerHTML = "Allison says try a different number";
    var inputGuess = document.getElementById('userguess').value = "";



  }

}