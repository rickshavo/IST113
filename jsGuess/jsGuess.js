
function runGame(){

	let input_p1 = parseInt(prompt("Player 1, input your number!"));
	let count = 0;
	alert("Hand the computer to Player 2")


while(true){
	let input_p2 = parseInt(prompt("Player 2, what did Player 1 "))
	count++;

	if(input_p1 < input_p2){
		alert("Guess is too high, try again!")
	}
	else if (input_p1 > input_p2) {
		alert("Guess is too low, try again!")
	}
	else {
		break;
	}
}
alert("Hooray, you won! It took you " + count + " tries")



}
		/*

		let guess = parseInt(prompt("Player 2, input your guess!"));
  	alert(guess)

		if (response < guess) {
		alert(response < guess)
		}
		else if(guess > response){
		alert(response < guess)
		}
		else {
		alert(Hooray!)
		}
*/
