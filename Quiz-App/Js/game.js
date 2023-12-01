import formatData from "./helper.js";

const loader = document.getElementById('loader');
const container = document.getElementById('container');
const questionText = document.getElementById('question-text');
const answerList = document.querySelectorAll('.answers-list');

const URL = 'https://opentdb.com/api.php?amount=10';
let formattedData = null;
let questionIndex = 0;
let correctAnswer = null;

const fetchData = async () => {
    const res = await fetch(URL);
    const json = await res.json();
    formattedData = formatData(json.results)
    start()
};

const start = () => {
    showQuestion()
    loader.style.display = "none";
    container.style.display = "block";
};
const showQuestion = () => {
    const { question, answers, correctAnswerIndex } =
        formattedData[questionIndex];
    correctAnswer = correctAnswerIndex
    questionText.innerText = question
    answerList.forEach((button, index) => {
        button.innerText = answers[index];

    });
}
window.addEventListener("load", fetchData);