var curr_Question = 1;
var totalQuestions = document.querySelectorAll('.question-container').length;

var arr_answer = [];

function Questions(questionNumber) {

    var question = document.querySelectorAll('.question-container');

  
    question.forEach(function(container, index) {
        
        if (index + 1 === questionNumber) {
            container.style.display = 'block';

        } else {
            container.style.display = 'none';
        }
    
    });

    curr_Question = questionNumber;
  
    document.getElementById('Buttons').style.display = 'block';
}

function isAnswer() {
    var answer = document.querySelector('input[name="q' + curr_Question + '"]:checked');
    return answer !== null;

}

function previousButton() {
  if (curr_Question > 1) {
    Questions(curr_Question - 1);
  }
}

function nextButton() {

  if (isAnswer()) {

    if (curr_Question < totalQuestions) {

      Questions(curr_Question + 1);

    } else if (curr_Question === totalQuestions){

        alert('Completed Quiz! Please submit to get your result.');
    }

  } else {
    alert('Please select an answer.');
  }
}

function submitButton() {

    if (isAnswer() && curr_Question === totalQuestions) {

      document.getElementById('Buttons').style.display = 'none';
      calculateScore();
      Results();

    } else {
      alert('Please answer all questions before submitting.');
    }
  }

function calculateScore() {
  var questionContainers = document.querySelectorAll('.question-container');
  var score = 0;

  questionContainers.forEach(function(container, index) {
    var answer = container.querySelector('input[name="q' + (index + 1) + '"]:checked');

    if (answer) {
      arr_answer.push(answer);
      // Check if the selected option is correct (adjust values as needed)
      if (answer.value === 'B' && index === 0) {
        score += 1;
      } else if (answer.value === 'C' && index === 1) {
        score += 1;
      } else if (answer.value === 'C' && index === 2) {
        score += 1;
      } else if (answer.value === 'D' && index === 3) {
        score += 1;
      } else if (answer.value === 'A' && index === 4) {
        score += 1;
      }
    }
  });

  // Display the results
  document.getElementById('score').textContent = "You got: "+ score + "/" + totalQuestions;
}

function Results() {
  pushAnswers();
  var main = document.getElementById('main');
  main.style.display = 'none';
  var result = document.getElementById('result');
  result.style.display = 'block';
}

function pushAnswers() {

  document.getElementById('answer1').textContent = "Your Answer: " + arr_answer[0].value;
  document.getElementById('answer2').textContent = "Your Answer: " + arr_answer[1].value;
  document.getElementById('answer3').textContent = "Your Answer: " + arr_answer[2].value;
  document.getElementById('answer4').textContent = "Your Answer: " + arr_answer[3].value;
  document.getElementById('answer5').textContent = "Your Answer: " + arr_answer[4].value;
  
}

function retryButton() {
  location.reload();
}

// Show the first question initially
Questions(curr_Question);
