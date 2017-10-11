var words = ['cat', 'tree', 'eagan'];

var selected = "";
var hiddenBlank = "";
var ans = "";
var wrong = "";
var counter = 0;
var goodSound = new Audio("https://s3-us-west-2.amazonaws.com/s.cdpn.io/74196/goodbell.mp3");
var badSound = new Audio("https://s3-us-west-2.amazonaws.com/s.cdpn.io/74196/bad.mp3");
var winSound = new Audio("https://s3-us-west-2.amazonaws.com/s.cdpn.io/74196/win.mp3");
var loseSound = new Audio("https://s3-us-west-2.amazonaws.com/s.cdpn.io/74196/lose.mp3");

function chooseWord () {
    selected = words[Math.floor(Math.random() * words.length)];
	hiddenBlank = hider(selected);
	ans = selected;
	counter = 0;
    document.getElementById("demo").innerHTML = hiddenBlank;

}

function hider (wordy)
{
	var under = "";
	for (var i = 0; i < wordy.length; i++){
		under = under + "-";
	}
	return under;
}

function right()
{
}

function wrong()
{
}

function guessIn()
{
	 var guessChar = document.getElementById("letter-input").value;
	 document.getElementById("letter-input").value = "";
	 guessChar = guessChar.toLowerCase();
	 //guessed a correct letter
	 if(selected.indexOf(guessChar) > -1)
	 {
	 while(selected.indexOf(guessChar) > -1)
	 {
		 var indy = selected.indexOf(guessChar);
		hiddenBlank = hiddenBlank.substr(0,indy) + guessChar + hiddenBlank.substr(indy+1, hiddenBlank.length);
		selected = selected.substr(0, indy) + '~' + selected.substr(indy+1, selected.length);
		document.getElementById("demo").innerHTML = hiddenBlank;
  }
  goodSound.play();
	}
	 else{
	 //wrong letter
	 wrong = wrong + guessChar;
	 document.getElementById("false").innerHTML = wrong;
   badSound.play();
	 }
	 if(ans === hiddenBlank)
	 {
     winSound.play();
     document.getElementById("false").innerHTML ="you won!!!";
		 chooseWord ();
	 }




}


function doKeypress () {
    var tempChar = $('#letter-input').val().toLowerCase();
    var tempString = "";
    $('#letter-input').val("");

    // Write here!
    tempString = guessLetter( tempChar, gameShownAnswer, gameAnswer );
    if ( tempString != gameShownAnswer ) {
        updateWord( tempString );
        gameShownAnswer = tempString;
        if ( gameShownAnswer === gameAnswer ) {
            win();
        }
    } else {
        wrongLetter(tempChar);
        drawSequence[ hangmanState++ ]();
        if ( hangmanState === drawSequence.length ) {
            lose();
        }
    }
	alert("kepress");
}
$('#letter-input').keyup( doKeypress );
