/*
1.Ask at least five questions

2.Keep track of the number of questions the user answered correctly

3.Provide a final message after the quiz letting the user know the number of questions he or she got right.

4.Rank the player. If the player answered all five correctly, give that player the gold crown: 3-4 is a silver crown; 1-2 correct answers is a bronze crown and 0 correct is no crown at all.

Kanji list:
both = 両　りょう = ryo
round = 丸　まる = maru
contend =争　そう = sou
mingle = 交　こう = kou
other =　他　ほか = hoka
*/

var score = 0
var question1 = prompt("What is the kanji for 'both'?");
 
if ( question1 === "両" ) {
    alert("Good job!");
    score += 1;
} else {
    alert ("Ooops sorry the answer is '両'");
}
var question2 = prompt("What is the kanji for 'round'?");

if ( question2 === "丸" ) {
    alert("Great!");
    score += 1;
} else {
    alert("Ooops it's '丸'")
}

var question3 = prompt("What is the kanji for 'contend'?");
if ( question3 === "争" )　{
    alert("Awesome!");
    score += 1;
} else {
    alert("Ooops sorry the answer is '争'");
}

var question4 = prompt("What is the kanji for 'mingle'?");
if ( question4 === '交' )　{
    alert("You're so smart!");
    score += 1;
} else {
    alert("Ooops sorry the answer is '交'");
}

var question5 = prompt("What is the kanji for 'other'?");
if ( question5 === "他" )　{
    alert("Amazing!");
    score += 1;
} else {
    alert("Ooops sorry the answer is '他'")
}

if ( score === 5 ){
    document.write("<p><strong>Wow amazing you got " + score + " Correct!. You got a Gold Crown!</strong></p>")
} else if ( score >= 3 ) {
    document.write("<p><strong>Wow amazing you got " + score + " Correct!. You got a Silver Crown!</strong></p>")
} else if (score >= 1 ) {
    document.write("<p><strong>Nice try you got " + score + " Correct!. You got a Bronze Crown!</strong></p>")
} else {
    document.write("<p><strong>You're score is "+ score + ". Keep studying and try again!<strong></p>")
}


