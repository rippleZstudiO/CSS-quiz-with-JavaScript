score = 0; // set default score

// declare an array for the correct answers
correctAnswers = new Array();
correctAnswers[0] = 'q1_a2';
correctAnswers[1] = 'q2_a3';
correctAnswers[2] = 'q3_a2';
correctAnswers[3] = 'q4_a2';
correctAnswers[4] = 'q5_a2';
correctAnswers[5] = 'q6_a1';
correctAnswers[6] = 'q7_a2';
correctAnswers[7] = 'q8_a3';
correctAnswers[8] = 'q9_a3';
correctAnswers[9] = 'q10_a3';


// declare an array for the questions;
questionsDisplay = new Array();
questionsDisplay[0] = '1. What does CSS stand for?';
questionsDisplay[1] = '2. Which attribute can set text to bold?';
questionsDisplay[2] = '3. Which tag is used to link an external CSS file?';
questionsDisplay[3] = '4. Which attribute sets the underline property?';
questionsDisplay[4] = '5. Which measurement is NOT relative?';
questionsDisplay[5] = '6. Which measurement unit is relative?';
questionsDisplay[6] = '7. What attribute is used move an elements content away from its border?';
questionsDisplay[7] = '8. Which attribute does not contribute to a block elements total width?';
questionsDisplay[8] = '9. What property changes positioned elements display order?';
questionsDisplay[9] = '10. Which value of background-repeat will cause a background to repeat vertically?';

// declare an array for the answersDisplay;
answersDisplay = new Array();
answersDisplay[0] = 'Cascading style sheets';
answersDisplay[1] = 'Font weight';
answersDisplay[2] = 'Link';
answersDisplay[3] = 'Text-decoration';
answersDisplay[4] = 'cm';
answersDisplay[5] = 'em';
answersDisplay[6] = 'Padding';
answersDisplay[7] = 'Background-image';
answersDisplay[8] = 'Z-index';
answersDisplay[9] = 'Repeat-y';

// declare an array for the chosenDisplay;
chosenDisplay = new Array();
chosenDisplay[0] = '';
chosenDisplay[1] = '';
chosenDisplay[2] = '';
chosenDisplay[3] = '';
chosenDisplay[4] = '';
chosenDisplay[5] = '';
chosenDisplay[6] = '';
chosenDisplay[7] = '';
chosenDisplay[8] = '';
chosenDisplay[9] = '';

// declare an array for the chosenAnswers;
chosenAnswers = new Array();
chosenAnswers[0] = '';
chosenAnswers[1] = '';
chosenAnswers[2] = '';
chosenAnswers[3] = '';
chosenAnswers[4] = '';
chosenAnswers[5] = '';
chosenAnswers[6] = '';
chosenAnswers[7] = '';
chosenAnswers[8] = '';
chosenAnswers[9] = '';




// display questions 1 question and its answers
function question1() {
	document.getElementById("start").style.display = "none";

	document.getElementById("question").innerHTML = "<span id='question1'>1. What does CSS stand for?</span>";
	document.getElementById("answer1").innerHTML = "<input type='radio' id='q1_a1' value='q1_a1' name='answer' class='quiz_questions'>Cascading CSS";
	document.getElementById("answer2").innerHTML = "<input type='radio' id='q1_a2' value='q1_a2' name='answer'>Cascading style sheets";
	document.getElementById("answer3").innerHTML = "<input type='radio' id='q1_a3' value='q1_a3' name='answer'>Cascading separate style";

	// display the next button
	document.getElementById("next").innerHTML = "<input class='btn btn-success next_button' role='button' onclick='question1_answer()' value=' Next '>";

}// end of question1()

// check question1 answer and display question2()
function question1_answer() {

	if (document.getElementById("q1_a2").checked) {
	    chosenAnswers[0] = document.getElementById("q1_a2").value;
        chosenDisplay[0] = 'Cascading style sheets';
		score += 1; // increment correct answer by 1
		document.images["pic"].src = "img/tick.png";
		document.getElementById("pic").style.display = "block";
		setTimeout("document.getElementById('pic').style.display = 'none';", 2000);
		question2() ;// proceed to question2()
	}
	else if (document.getElementById("q1_a3").checked) {
	    chosenAnswers[0] = document.getElementById("q1_a3").value;
        chosenDisplay[0] = 'Cascading separate style';
		document.images["pic"].src = "img/cross.png";
		document.getElementById("pic").style.display = "block";
		setTimeout("document.getElementById('pic').style.display = 'none';", 2000);
		question2();// proceed to question2()
	}

	else  {
	    chosenAnswers[0] = document.getElementById("q1_a1").value;
        chosenDisplay[0] = 'Cascading CSS';
		document.images["pic"].src = "img/cross.png";
		document.getElementById("pic").style.display = "block";
		setTimeout("document.getElementById('pic').style.display = 'none';", 2000);
		question2();// proceed to question2()
	}
} // end of question1_answer()


function question2() {
	document.getElementById("question").innerHTML = "<span id='question2'> 2. Which attribute can set text to bold?</span>";
	document.getElementById("answer1").innerHTML = "<input type='radio' id='q2_a1' value='q2_a1' name='answer'>Text-decoration";
	document.getElementById("answer2").innerHTML = "<input type='radio' id='q2_a2' value='q2_a2' name='answer'>Font style";
	document.getElementById("answer3").innerHTML = "<input type='radio' id='q2_a3' value='q2_a3' name='answer'>Font weight";

	// display the next button
	document.getElementById("next").innerHTML = "<input class='btn btn-success next_button' role='button' onclick='question2_answer()' value=' Next '>";

} // end of question2()

// check question2 answer and display question3()
function question2_answer() {

	if (document.getElementById("q2_a3").checked) {
		chosenAnswers[1] = document.getElementById("q2_a3").value;
        chosenDisplay[1] = 'Font weight';
		score +=1; // increment correct answer by 1
		document.images["pic"].src = "img/tick.png";
		document.getElementById("pic").style.display = "block";
		setTimeout("document.getElementById('pic').style.display = 'none';", 2000);
		question3();// proceed to question2()
	}

	else if (document.getElementById("q2_a2").checked) {
		chosenAnswers[1] = document.getElementById("q2_a2").value;
        chosenDisplay[1] = 'Font style';
		document.images["pic"].src = "img/cross.png";
		document.getElementById("pic").style.display = "block";
		setTimeout("document.getElementById('pic').style.display = 'none';", 2000);
		question3();
	}

	else {
		chosenAnswers[1] = document.getElementById("q2_a1").value;
        chosenDisplay[1] = 'Text-decoration';
		document.images["pic"].src = "img/cross.png";
		document.getElementById("pic").style.display = "block";
		setTimeout("document.getElementById('pic').style.display = 'none';", 2000);
		question3();
	}

} // end of question2_answer()

function question3() {
	document.getElementById("question").innerHTML = "<span id='question3'> 3.	Which tag is used to link an external CSS file?</span>";
	document.getElementById("answer1").innerHTML = "<input type='radio' id='q3_a1' value='q3_a1' name='answer'>Script";
	document.getElementById("answer2").innerHTML = "<input type='radio' id='q3_a2' value='q3_a2' name='answer'>Link";
	document.getElementById("answer3").innerHTML = "<input type='radio' id='q3_a3' value='q3_a3' name='answer'>Rel";

	// display the next button
	document.getElementById("next").innerHTML = "<input class='btn btn-success next_button' role='button' onclick='question3_answer()' value=' Next '>";

} // end of question3()

// check question3 answer and display question4()
function question3_answer() {

	if (document.getElementById("q3_a2").checked) {
		chosenAnswers[2] = document.getElementById("q3_a2").value;
        chosenDisplay[2] = 'Link';
		score += 1; // increment correct answer by 1
		document.images["pic"].src = "img/tick.png";
		document.getElementById("pic").style.display = "block";
		setTimeout("document.getElementById('pic').style.display = 'none';", 2000);
		question4();// proceed to question2()
	}

	else if (document.getElementById("q3_a1").checked) {
		chosenAnswers[2] = document.getElementById("q3_a1").value;
        chosenDisplay[2] = 'Script';
		document.images["pic"].src = "img/cross.png";
		document.getElementById("pic").style.display = "block";
		setTimeout("document.getElementById('pic').style.display = 'none';", 2000);
		question4();
	}

	else {
		chosenAnswers[2] = document.getElementById("q3_a3").value;
        chosenDisplay[2] = 'Rel';
		document.images["pic"].src = "img/cross.png";
		document.getElementById("pic").style.display = "block";
		setTimeout("document.getElementById('pic').style.display = 'none';", 2000);
		question4();
	}


} // end of question3_answer()


function question4() {
	document.getElementById("question").innerHTML = "<span id='question4'> 4. Which attribute sets the underline property?</span>";
	document.getElementById("answer1").innerHTML = "<input type='radio' id='q4_a1' value='q4_a1' name='answer'>Font style";
	document.getElementById("answer2").innerHTML = "<input type='radio' id='q4_a2' value='q4_a2' name='answer'>Text-decoration";
	document.getElementById("answer3").innerHTML = "<input type='radio' id='q4_a3' value='q4_a3' name='answer'>Font weight";

	// display the next button
	document.getElementById("next").innerHTML = "<input class='btn btn-success next_button' role='button' onclick='question4_answer()' value=' Next '>";

} // end of question4()

// check question4 answer and display question5()
function question4_answer() {

	if (document.getElementById("q4_a2").checked) {
		chosenAnswers[3] = document.getElementById("q4_a2").value;
        chosenDisplay[3] = 'Text-decoration';
		score += 1; // increment correct answer by 1
		document.images["pic"].src = "img/tick.png";
		document.getElementById("pic").style.display = "block";
		setTimeout("document.getElementById('pic').style.display = 'none';", 2000);
		question5();// proceed to question2()
	}

	else if (document.getElementById("q4_a1").checked) {
		chosenAnswers[3] = document.getElementById("q4_a1").value;
        chosenDisplay[3] = 'Font style';
		document.images["pic"].src = "img/cross.png";
		document.getElementById("pic").style.display = "block";
		setTimeout("document.getElementById('pic').style.display = 'none';", 2000);
		question5();
	}

	else {
		chosenAnswers[3] = document.getElementById("q4_a3").value;
        chosenDisplay[3] = 'Font weight';
		document.images["pic"].src = "img/cross.png";
		document.getElementById("pic").style.display = "block";
		setTimeout("document.getElementById('pic').style.display = 'none';", 2000);
		question5();
	}



} // end of question4_answer()


function question5() {
	document.getElementById("question").innerHTML = "<span id='question5'> 5. Which measurement is NOT relative?</span>";
	document.getElementById("answer1").innerHTML = "<input type='radio' id='q5_a1' value='q5_a1' name='answer'>px";
	document.getElementById("answer2").innerHTML = "<input type='radio' id='q5_a2' value='q5_a2' name='answer'>cm";
	document.getElementById("answer3").innerHTML = "<input type='radio' id='q5_a3' value='q5_a3' name='answer'>%";
	document.getElementById("answer4").innerHTML = "<input type='radio' id='q5_a4' value='q5_a4' name='answer'>em";

	// display the next button
	document.getElementById("next").innerHTML = "<input class='btn btn-success next_button' role='button' onclick='question5_answer()' value=' Next '>";

} // end of question5()

// check question5 answer and display question6()
function question5_answer() {

	if (document.getElementById("q5_a2").checked) {
		chosenAnswers[4] = document.getElementById("q5_a2").value;
        chosenDisplay[4] = 'cm';
		score += 1; // increment correct answer by 1
		document.images["pic"].src = "img/tick.png";
		document.getElementById("pic").style.display = "block";
		setTimeout("document.getElementById('pic').style.display = 'none';", 2000);
		question6();// proceed to question2()
	}

	else if (document.getElementById("q5_a1").checked) {
		chosenAnswers[4] = document.getElementById("q5_a1").value;
        chosenDisplay[4] = 'px';
		document.images["pic"].src = "img/cross.png";
		document.getElementById("pic").style.display = "block";
		setTimeout("document.getElementById('pic').style.display = 'none';", 2000);
		question6();
	}

	else if (document.getElementById("q5_a3").checked) {
		chosenAnswers[4] = document.getElementById("q5_a3").value;
        chosenDisplay[4] = '%';
		document.images["pic"].src = "img/cross.png";
		document.getElementById("pic").style.display = "block";
		setTimeout("document.getElementById('pic').style.display = 'none';", 2000);
		question6();
	}

	else {
		chosenAnswers[4] = document.getElementById("q5_a4").value;
        chosenDisplay[4] = 'em';
		document.images["pic"].src = "img/cross.png";
		document.getElementById("pic").style.display = "block";
		setTimeout("document.getElementById('pic').style.display = 'none';", 2000);
		question6();
	}


} // end of question5_answer()


function question6() {
	document.getElementById("question").innerHTML = "<span id='question'> 6. Which measurement unit is relative?</span>";
	document.getElementById("answer1").innerHTML = "<input type='radio' id='q6_a1' value='q6_a1' name='answer'>em";
	document.getElementById("answer2").innerHTML = "<input type='radio' id='q6_a2' value='q6_a2' name='answer'>cm";
	document.getElementById("answer3").innerHTML = "<input type='radio' id='q6_a3' value='q6_a3' name='answer'>mm";
	document.getElementById("answer4").innerHTML = "<input type='radio' id='q6_a4' value='q6_a4' name='answer'>inch";

	// display the next button
	document.getElementById("next").innerHTML = "<input class='btn btn-success next_button' role='button' onclick='question6_answer()' value=' Next '>";

} // end of question6()

// check question6 answer and display question7()
function question6_answer() {

	if (document.getElementById("q6_a1").checked) {
		chosenAnswers[5] = document.getElementById("q6_a1").value;
        chosenDisplay[5] = 'em';
		score += 1; // increment correct answer by 1
		document.images["pic"].src = "img/tick.png";
		document.getElementById("pic").style.display = "block";
		setTimeout("document.getElementById('pic').style.display = 'none';", 2000);
		question7();// proceed to question2()
	}

	else if (document.getElementById("q6_a2").checked) {
		chosenAnswers[5] = document.getElementById("q6_a2").value;
        chosenDisplay[5] = 'cm';
		document.images["pic"].src = "img/cross.png";
		document.getElementById("pic").style.display = "block";
		setTimeout("document.getElementById('pic').style.display = 'none';", 2000);
		question7();
	}

	else if (document.getElementById("q6_a3").checked) {
		chosenAnswers[5] = document.getElementById("q6_a3").value;
        chosenDisplay[5] = 'mm';
		document.images["pic"].src = "img/cross.png";
		document.getElementById("pic").style.display = "block";
		setTimeout("document.getElementById('pic').style.display = 'none';", 2000);
		question7();
	}

	else {
		chosenAnswers[5] = document.getElementById("q6_a4").value;
        chosenDisplay[5] = 'inch';
		document.images["pic"].src = "img/cross.png";
		document.getElementById("pic").style.display = "block";
		setTimeout("document.getElementById('pic').style.display = 'none';", 2000);
		question7();
	}


} // end of question6_answer()


function question7() {
	document.getElementById("question").innerHTML = "<span id='question7'> 7. What attribute is used move an elements content away from its border?</span>";
	document.getElementById("answer1").innerHTML = "<input type='radio' id='q7_a1' value='q7_a1' name='answer'>Margin";
	document.getElementById("answer2").innerHTML = "<input type='radio' id='q7_a2' value='q7_a2' name='answer'>Padding";
	document.getElementById("answer3").innerHTML = "<input type='radio' id='q7_a3' value='q7_a3' name='answer'>Border";
	document.getElementById("answer4").innerHTML = "<input type='radio' id='q7_a4' value='q7_a4' name='answer'>Width";

	// display the next button
	document.getElementById("next").innerHTML = "<input class='btn btn-success next_button' role='button' onclick='question7_answer()' value=' Next '>";

} // end of question7()

// check question7 answer and display question8()
function question7_answer() {

	if (document.getElementById("q7_a2").checked) {
		chosenAnswers[6] = document.getElementById("q7_a2").value;
        chosenDisplay[6] = 'Padding';
		score += 1;// increment correct answer by 1
		document.images["pic"].src = "img/tick.png";
		document.getElementById("pic").style.display = "block";
		setTimeout("document.getElementById('pic').style.display = 'none';", 2000);
		question8();// proceed to question2()
	}

	else if (document.getElementById("q7_a1").checked) {
		chosenAnswers[6] = document.getElementById("q7_a1").value;
        chosenDisplay[6] = 'Margin';
		document.images["pic"].src = "img/cross.png";
		document.getElementById("pic").style.display = "block";
		setTimeout("document.getElementById('pic').style.display = 'none';", 2000);
		question8();
	}

	else if (document.getElementById("q7_a3").checked) {
		chosenAnswers[6] = document.getElementById("q7_a3").value;
        chosenDisplay[6] = 'Border';
		document.images["pic"].src = "img/cross.png";
		document.getElementById("pic").style.display = "block";
		setTimeout("document.getElementById('pic').style.display = 'none';", 2000);
		question8();
	}

	else {
		chosenAnswers[6] = document.getElementById("q7_a4").value;
        chosenDisplay[6] = 'Width';
		document.images["pic"].src = "img/cross.png";
		document.getElementById("pic").style.display = "block";
		setTimeout("document.getElementById('pic').style.display = 'none';", 2000);
		question8();
	}

} // end of question7_answer()


function question8() {
	document.getElementById("question").innerHTML = "<span id='question8'> 8. Which attribute does not contribute to a block elements total width?</span>";
	document.getElementById("answer1").innerHTML = "<input type='radio' id='q8_a1' value='q8_a1' name='answer'>Width";
	document.getElementById("answer2").innerHTML = "<input type='radio' id='q8_a2' value='q8_a2' name='answer'>Border";
	document.getElementById("answer3").innerHTML = "<input type='radio' id='q8_a3' value='q8_a3' name='answer'>Background-image";
	document.getElementById("answer4").innerHTML = "<input type='radio' id='q8_a4' value='q8_a4' name='answer'>Padding";

	// display the next button
	document.getElementById("next").innerHTML = "<input class='btn btn-success next_button' role='button' onclick='question8_answer()' value=' Next '>";

} // end of question8()

// check question8 answer and display question9()
function question8_answer() {

	if (document.getElementById("q8_a3").checked) {
		chosenAnswers[7] = document.getElementById("q8_a3").value;
        chosenDisplay[7] = 'Background-image';
		score += 1;// increment correct answer by 1
		document.images["pic"].src = "img/tick.png";
		document.getElementById("pic").style.display = "block";
		setTimeout("document.getElementById('pic').style.display = 'none';", 2000);
		question9();// proceed to question2()
	}

	else if (document.getElementById("q8_a1").checked) {
		chosenAnswers[7] = document.getElementById("q8_a1").value;
        chosenDisplay[7] = 'Width';
		document.images["pic"].src = "img/cross.png";
		document.getElementById("pic").style.display = "block";
		setTimeout("document.getElementById('pic').style.display = 'none';", 2000);
		question9();
	}

	else if (document.getElementById("q8_a2").checked) {
		chosenAnswers[7] = document.getElementById("q8_a2").value;
        chosenDisplay[7] = 'Border';
		document.images["pic"].src = "img/cross.png";
		document.getElementById("pic").style.display = "block";
		setTimeout("document.getElementById('pic').style.display = 'none';", 2000);
		question9();
	}

	else {
		chosenAnswers[7] = document.getElementById("q8_a4").value;
        chosenDisplay[7] = 'Padding';
		document.images["pic"].src = "img/cross.png";
		document.getElementById("pic").style.display = "block";
		setTimeout("document.getElementById('pic').style.display = 'none';", 2000);
		question9();
	}

} // end of question8_answer()


function question9() {
	document.getElementById("question").innerHTML = "<span id='question9'> 9. What property changes positioned elements display order?</span>";
	document.getElementById("answer1").innerHTML = "<input type='radio' id='q9_a1' value='q9_a1' name='answer'>Width";
	document.getElementById("answer2").innerHTML = "<input type='radio' id='q9_a2' value='q9_a2' name='answer'>Background";
	document.getElementById("answer3").innerHTML = "<input type='radio' id='q9_a3' value='q9_a3' name='answer'>Z-index";
	document.getElementById("answer4").innerHTML = "<input type='radio' id='q9_a4' value='q9_a4' name='answer'>Azimuth";

	// display the next button
	document.getElementById("next").innerHTML = "<input class='btn btn-success next_button' role='button' onclick='question9_answer()' value=' Next '>";

} // end of question9()

// check question9 answer and display question10()
function question9_answer() {

	if (document.getElementById("q9_a3").checked) {
		chosenAnswers[8] = document.getElementById("q9_a3").value;
        chosenDisplay[8] = 'Z-index';
		score += 1;// increment correct answer by 1
		document.images["pic"].src = "img/tick.png";
		document.getElementById("pic").style.display = "block";
		setTimeout("document.getElementById('pic').style.display = 'none';", 2000);
		question10();// proceed to question10()
	}

	else if (document.getElementById("q9_a1").checked) {
		chosenAnswers[8] = document.getElementById("q9_a1").value;
        chosenDisplay[8] = 'Width';
		document.images["pic"].src = "img/cross.png";
		document.getElementById("pic").style.display = "block";
		setTimeout("document.getElementById('pic').style.display = 'none';", 2000);
		question10();
	}

	else if (document.getElementById("q9_a2").checked) {
		chosenAnswers[8] = document.getElementById("q9_a2").value;
        chosenDisplay[8] = 'Background';
		document.images["pic"].src = "img/cross.png";
		document.getElementById("pic").style.display = "block";
		setTimeout("document.getElementById('pic').style.display = 'none';", 2000);
		question10();
	}

	else {
		chosenAnswers[8] = document.getElementById("q9_a4").value;
        chosenDisplay[8] = 'Azimuth';
		document.images["pic"].src = "img/cross.png";
		document.getElementById("pic").style.display = "block";
		setTimeout("document.getElementById('pic').style.display = 'none';", 2000);
		question10();
	}

} // end of question9_answer()


function question10() {
	document.getElementById("question").innerHTML = "<span id='question10'> 10. Which value of background-repeat will cause a background to repeat vertically?</span>";
	document.getElementById("answer1").innerHTML = "<input type='radio' id='q10_a1' value='q10_a1' name='answer'>Repeat-x";
	document.getElementById("answer2").innerHTML = "<input type='radio' id='q10_a2' value='q10_a2' name='answer'>Repeat";
	document.getElementById("answer3").innerHTML = "<input type='radio' id='q10_a3' value='q10_a3' name='answer'>Repeat-y";
	document.getElementById("answer4").innerHTML = "<input type='radio' id='q10_a4' value='q10_a4' name='answer'>No-repeat";

	// display the next button
	document.getElementById("next").innerHTML = "<input class='btn btn-success next_button' role='button' onclick='question10_answer()' value=' Proceed to score '>";

} // end of question10()

// check question10 answer and display total score()
function question10_answer() {

	if (document.getElementById("q10_a3").checked) {
		chosenAnswers[9] = document.getElementById("q10_a3").value;
        chosenDisplay[9] = 'Repeat-y';
		score += 1; // increment correct answer by 1
		document.images["pic"].src = "img/tick.png";
		document.getElementById("pic").style.display = "block";
		setTimeout("document.getElementById('pic').style.display = 'none';", 2000);
		finalScore();// proceed to question2()
	}

	else if (document.getElementById("q10_a1").checked) {
		chosenAnswers[9] = document.getElementById("q10_a1").value;
        chosenDisplay[9] = 'Repeat-x';
		document.images["pic"].src = "img/cross.png";
		document.getElementById("pic").style.display = "block";
		setTimeout("document.getElementById('pic').style.display = 'none';", 2000);
		finalScore();
	}

	else if (document.getElementById("q10_a2").checked) {
		chosenAnswers[9] = document.getElementById("q10_a2").value;
        chosenDisplay[9] = 'Repeat';
		document.images["pic"].src = "img/cross.png";
		document.getElementById("pic").style.display = "block";
		setTimeout("document.getElementById('pic').style.display = 'none';", 2000);
		finalScore();
	}

	else {
		chosenAnswers[9] = document.getElementById("q10_a4").value;
        chosenDisplay[9] = 'No-repeat';
		document.images["pic"].src = "img/cross.png";
		document.getElementById("pic").style.display = "block";
		setTimeout("document.getElementById('pic').style.display = 'none';", 2000);
		finalScore();
	}


} // end of question10_answer()



// function to display the total score of quiz
function finalScore() {
	document.getElementById("quiz").style.display = "none";
	//document.getElementById("reload").style.display = "block";
	document.getElementById("finalTxt").innerHTML = "Your total score is " + score + ".";

	if(score == 10) {
	document.getElementById("finalMessage").innerHTML = "<span style='color: green;'>Gee, this is the perfect score!!!</span>";
	document.images["finalPic"].src = "img/congrats.gif";
	//document.getElementById("reload").innerHTML = "<input class='btn btn-success next_button' role='button' onclick='question1()' value=' Reset '>";
	}

	else if(score == 9 || score == 8) {
	document.getElementById("finalMessage").innerHTML = "<span style='color: gold;'>Well done!!!</span>";
	document.images["finalPic"].src = "img/like.gif";
	//document.getElementById("reload").innerHTML = "<input class='btn btn-success next_button' role='button' onclick='question1()' value=' Reset '>";
	}

	else if(score == 7 || score == 6) {
	document.getElementById("finalMessage").innerHTML = "<span style='color: purple;'>Keep practicing and in no time you will be better.</span>";
	document.images["finalPic"].src = "img/clapping.gif";
	//document.getElementById("reload").innerHTML = "<input class='btn btn-success next_button' role='button' onclick='question1()' value=' Reset '>";
	}

	else {
	document.getElementById("finalMessage").innerHTML = "<span style='color: coral;'>Well, this is a bit sad,.. <br/> but I am sure if you practice you will get there...</span>";
	document.images["finalPic"].src = "img/crying.gif";
	//document.getElementById("reload").innerHTML = "<input class='btn btn-success next_button' role='button' onclick='question1()' value=' Reset '>";
	}

	document.getElementById("view").innerHTML = "<input class='btn btn-success next_button' role='button' onclick='getSelectedAnswer()' value=' Learn more '>";
	document.getElementById("view").style.display = "block";

	// hide start quiz button and display tryAgain button
	//document.getElementById("again").style.visibility = "hidden";
	//document.getElementById("tryAgain").style.visibility = "visible";

} // end of function

// function to check selected answer
function getSelectedAnswer() {

	var x='', i;

    for (i=0; i < correctAnswers.length; i++) {


      if (chosenAnswers[i] == correctAnswers[i]) {
        x = x + "<h4>" + questionsDisplay[i] + "<br/>" + chosenDisplay[i] + " is correct!" + "</h4><br/>";



			     //document.writeln(questionsDisplay[i] + "<br/>");
			        //document.writeln(chosenDisplay[i] + " is correct!");
		  }
		else {
			x = x + "<h4>" + questionsDisplay[i] + "<br/>" + chosenDisplay[i] + " is wrong! " + "The correct answer is " + answersDisplay[i] + "</h4><br/>";

			//document.writeln(questionsDisplay[i] + "<br/>");
			//document.writeln(chosenDisplay[i] + " is wrong! " + "The correct answer is " + answersDisplay[i]);
		}



	     //document.writeln("<br/>");
	    // document.writeln("<br/>");
     } // end of for

		document.getElementById("viewSolution").innerHTML = x ;
		document.getElementById("viewSolution").style.display = "block"

// loop through the radio button to check the one being selected
}// end of selected answer
