const questions =[
    {
        question:"which is the capital city of pakistan",
        answers:[
            {text:"Karachi",correct:false},
            {text:"Lahore",correct:false},
            {text:"Islamabad",correct:true},
            {text:"Peshawar",correct:false},
        ]
    },
    {
        question:"which is the biggest continent in the world",
        answers:[
            {text:"Europe",correct:false},
            {text:"Asia",correct:true},
            {text:"Africa",correct:false},
            {text:"Australia",correct:false},
        ]
    },
    {
        question:"which one is the biggest country by size",
        answers:[
            {text:"Russia",correct:true},
            {text:"United state",correct:false},
            {text:"Brazil",correct:false},
            {text:"China",correct:false},
        ]
    },
    {
        question:"Which country have no river",
        answers:[
            {text:"Egypt",correct:false},
            {text:"Iran",correct:false},
            {text:"Afganistan",correct:false},
            {text:"Saudi arab",correct:true},
        ]
    },
    {
        question:"Which one is the biggest empire in history",
        answers:[
            {text:"Sovit union",correct:false},
            {text:"Mongol empire",correct:false},
            {text:"British empire",correct:true},
            {text:"Ottoman empire",correct:false},
        ]
    }
];

const questionsElement=document.getElementById("questions")
const answerbuttonsElement=document.getElementById("answer-buttons")
const nextbuttonElement=document.getElementById("next-button")
let currentquestionindex=0
let score
function startquiz() {
    currentquestionindex=0
    score=0
    nextbuttonElement.innerHTML="Next"
    showquestion()
}
function showquestion() {
    resetstate()
    let currentquestion=questions[currentquestionindex]
    let questionNo=currentquestionindex+1
    questionsElement.innerHTML=questionNo+"."+currentquestion.question
    currentquestion.answers.forEach(answer=>{
        const button=document.createElement("button")
        button.innerHTML=answer.text
        button.classList.add("btn")
        if(answer.correct)
        {
            button.dataset.correct=answer.correct
        }
        button.addEventListener("click",selectedAnswer)
        answerbuttonsElement.appendChild(button)
    })
}
function resetstate(){
    nextbuttonElement.style.display="none"
    while (answerbuttonsElement.firstChild) {
        answerbuttonsElement.removeChild(answerbuttonsElement.firstChild)
    }
}
function selectedAnswer(e) {
    const selectedbtn=e.target
    const iscorrect=selectedbtn.dataset.correct==="true"
    if (iscorrect) {
        selectedbtn.classList.add("correct")
        score++
    }
    else{
        selectedbtn.classList.add("incorrect")
    }
    Array.from(answerbuttonsElement.children).forEach(button=>{
        if (button.dataset.correct==="true") {
        button.classList.add("correct")
    }
    button.disabled=true
    })
    nextbuttonElement.style.display="flex"
    nextbuttonElement.addEventListener("click",nextbutton)
}
    function handle_next_button() {
    currentquestionindex++
    if (currentquestionindex<questions.length) {
        showquestion()
    }
    else
    {
        show_score()
    }
}
function show_score() {
    resetstate()
    questionsElement.innerHTML=`your score is ${score} out of ${questions.length}`
    nextbuttonElement.style.display="flex"
    nextbuttonElement.innerHTML="Play Again"
    // nextbuttonElement.addEventListener("click",startquiz)
}
function nextbutton(){
    if (currentquestionindex<questions.length) {
        handle_next_button()
    }
    else
    {
        startquiz()
    }
}
startquiz();