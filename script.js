

const questions = [
    {
        q: "1. What is the capital of India?",
        options: ["Mumbai", "Delhi", "Chennai", "Kolkata"],
        answer: "Delhi"
    },
    {
        q: "2. Who is known as the father of Computers?",
        options: ["Charles Babbage", "Alan Turing", "Bill Gates", "Steve Jobs"],
        answer: "Charles Babbage"
    },
    {
        q: "3. Which planet is called the Red Planet?",
        options: ["Venus", "Saturn", "Mars", "Jupiter"],
        answer: "Mars"
    },
    {
        q: "4. HTML stands for?",
        options: ["Hyper Text Markup Language", "High Transfer Machine Language", "Hyperlinks and Text Markup Language", "None of these"],
        answer: "Hyper Text Markup Language"
    },
    {
        q: "5. Which is the largest ocean on Earth?",
        options: ["Atlantic", "Indian", "Pacific", "Arctic"],
        answer: "Pacific"
    }
];


function loadQuiz() {
    const quizForm = document.getElementById("quizForm");

    questions.forEach((item, index) => {
    
        const questionDiv = document.createElement("div");
        questionDiv.classList.add("question");
        questionDiv.innerText = item.q;

        
        const answersDiv = document.createElement("div");
        answersDiv.classList.add("answers");

        item.options.forEach(opt => {
            const label = document.createElement("label");
            const input = document.createElement("input");
            input.type = "radio";
            input.name = "question" + index;
            input.value = opt;

            label.appendChild(input);
            label.appendChild(document.createTextNode(opt));
            answersDiv.appendChild(label);
        });

        quizForm.appendChild(questionDiv);
        quizForm.appendChild(answersDiv);
    });
}


function checkAnswers() {
    let score = 0;

    questions.forEach((item, index) => {
        const selected = document.querySelector(`input[name="question${index}"]:checked`);
        if (selected && selected.value === item.answer) {
            score++;
        }
    });

    document.getElementById("result").innerText = `You scored ${score} out of ${questions.length}`;
}


document.addEventListener("DOMContentLoaded", loadQuiz);
document.getElementById("submitBtn").addEventListener("click", checkAnswers);
