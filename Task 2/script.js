const Questions=[{
	q: "Que 1: What is full form of HTML ?",
	a:[
		{text:"HyperLink Text markup Language",isCorrect:false},
		{text:"Hello To My Land",isCorrect:false},
		{text:"Home Tool Markup Language",isCorrect:false},
		{text:"HyperText Markup Language",isCorrect:true}
]
},
{
	q:"Que 2: What is full form of CSS ?",
	a:[{text:"Cascading Styling Sheets",isCorrect:true},
	{ text:"Cascading Style Sheep",isCorrect:false},
	{text:"Cartoon Style Sheets",isCorrect:false},
	{text:"Cascading Super Sheets",isCorrect:false}
	]
},
{
	q:"Que 3 : What is full form of WWW ?",
	a:[{text:"World Wide Web",isCorrect:true},
	{ text:"World Wide Website",isCorrect:false},
	{text:"Website World Web",isCorrect:false},
	{text:"None of These",isCorrect:false}
	]
},
{
	q:"Que 4 : What is full form of HTTP ?",
	a:[{text:"HyperText Tranfer Product",isCorrect:false},
	{ text:"HyperText Test Protocol",isCorrect:false},
	{text:"HyperText Transfer Protocol",isCorrect:true},
	{text:"HyperText Type Protocol",isCorrect:false}
	]
}
]

// cureent Question 
 
let currQuestion = 0
let score = 0
 
function loadQues() {
    const question = document.getElementById("ques")
    const opt = document.getElementById("opt")
 
    question.textContent = Questions[currQuestion].q;
    opt.innerHTML = ""
 
    for (let i = 0; i < Questions[currQuestion].a.length; i++) {
        const choicesdiv = document.createElement("div");
        const choice = document.createElement("input");
        const choiceLabel = document.createElement("label");
 
        choice.type = "radio";
        choice.name = "answer";
        choice.value = i;
 
        choiceLabel.textContent = Questions[currQuestion].a[i].text;
 
        choicesdiv.appendChild(choice);
        choicesdiv.appendChild(choiceLabel);
        opt.appendChild(choicesdiv);
    }
}
 
loadQues();
 
function loadScore() {
    const totalScore = document.getElementById("score")
    totalScore.innerHTML=`
	<h3>You Scored ${score} out of ${Questions.length}</h3>
	<button onclick="location.reload()">Try Again</button>
	`
}
 
 
function nextQuestion() {
    if (currQuestion < Questions.length - 1) {
        currQuestion++;
        loadQues();
    } else {
        document.getElementById("opt").remove()
        document.getElementById("ques").remove()
        document.getElementById("btn").remove()
        loadScore();
    }
}
 
function checkAns() {
    const selectedAns = parseInt(document.querySelector('input[name="answer"]:checked').value);
 
    if (Questions[currQuestion].a[selectedAns].isCorrect) {
        score++;
        console.log("Correct")
        nextQuestion();
    } else {
        nextQuestion();
    }
}