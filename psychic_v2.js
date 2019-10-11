var allisonguess;
var guessesLeft = 3;


function start() {
    allisonguess = Math.floor((Math.random() * 9) + 1);
    console.log("random", allisonguess);

}

function number() {
    var inputGuess = document.querySelector("#userguess").value;


    if (parseFloat(inputGuess) === allisonguess) {
        var prediction = ["Fortune", "Love", "Danger", "Loss", "Happiness", "Success", "Pain", "Travel", "Fame", "Money", "Joy",
            "Sadness", "More Java Script", "Luck"];
        var predictionVal = prediction[Math.floor(Math.random() * prediction.length)];
        document.getElementById('title').innerHTML = "";
        document.getElementById('prediction').innerHTML = predictionVal;
        document.getElementById('tryagain').innerHTML = "";
        userguess.value = "";
        resetVariables()
        showGuessesRemaining()
        start()

    } else if (guessesLeft === 1) {
        title.value = "";
        userguess.value = "";
        location.reload(true);


    } else {
        document.getElementById('tryagain').innerHTML = "Try Again!";
        document.getElementById('title').innerHTML = "";
        document.getElementById('prediction').innerHTML = "";
        guessesLeft = guessesLeft - 1
        showGuessesRemaining();
        userguess.value = "";

    }
}

function showGuessesRemaining() {
    document.getElementById("countdown").innerHTML = guessesLeft;
}

function resetVariables() {
    guessesLeft = 3;
}




