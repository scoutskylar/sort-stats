var currentQuestion = 0;
var allQuestions = []; // [category number, question number]
var categoryList = $('label[for^=item]').get().map(el => el.innerHTML);
var questionArray = []; // 2D array
var explanationsIndexArray = [
	"Confidence interval for a population mean",
	"Confidence interval for a population proportion",
	"Confidence interval for the difference between two population means",
	"Confidence interval for paired data",
	"Confidence interval for the difference between two population proportions",
	"Prediction interval for y for a single value of x",
	"Hypothesis test for a population mean",
	"Hypothesis test for a population proportion",
	"Hypothesis test for the difference between two population means",
	"Hypothesis test for paired data",
	"Hypothesis test for the difference between two population proportions",
	"Chi-square test for goodness of fit",
	"Chi-square test for independence",
	"Chi-square test for homogeneity",
	"One-way analysis of variance test"
];

$('#categorySelectionDiv > label').each(function() {
    if (!(this.innerText.trim() in questions)) {
        this.parentElement.removeChild(this);
    }
});

$('#categorySelectionDiv > label > input').change(function(e) {
	if ($('#categorySelectionDiv > label > input:checked').length > 1) {
		$('#selectTwoOptionsMsg').hide();
	}
});

function endInstructions() {
	$('#infoDiv').hide();
	$('#categorySelectionDiv').show();
}

function start() {
	var numSelected = 0;
	categoryList = [];
	let i = 0;
	$('#categorySelectionDiv > label').each(function() {
		if ($(this).find('> input').prop('checked')) {
			let cat = this.innerText.trim();
			categoryList.push(cat);
			for (let j of questions[cat].keys()) {
				allQuestions.push([i, j]);
			}
			questionArray.push(questions[cat]);
			let label = document.createElement('label');
			let radio = document.createElement('input');
			radio.setAttribute('type', 'radio');
			radio.setAttribute('name', 'ans');
			radio.setAttribute('value', i);
			radio.addEventListener('change', check);
			label.appendChild(radio);
			label.appendChild(document.createTextNode(cat))
			document.getElementById('answerChoices').appendChild(label);
			numSelected++;
			i++;
		}
	});
	if (numSelected <= 1) {
		// not enough categories selected
		$('#selectTwoOptionsMsg').show();
	} else {
		$("#categorySelectionDiv").hide();
		allQuestions.shuffle();
		$("#practiceDiv").show();
		$("#questionBox").text(questionArray[allQuestions[currentQuestion][0]][allQuestions[currentQuestion][1]]);
	}
}
function check(e) {
	var guess = Number(e.target.value);
	if (guess == allQuestions[currentQuestion][0]) {
		// correct
		$("#nextQuestionButton").show();
		$("#explanationDiv").text("Correct!");
		$("#explanationDiv").addClass('correct');
		$("#explanationDiv").removeClass('incorrect');
	} else {
		// incorrect
		$("#explanationDiv").text("That is not correct. Please try again.");
		$("#explanationDiv").text(processWrongAnswer(explanationsIndexArray.indexOf(categoryList[allQuestions[currentQuestion][0]]), explanationsIndexArray.indexOf(categoryList[guess])) + " Please try again.");
		$("#explanationDiv").addClass('incorrect');
		$("#explanationDiv").removeClass('correct');
		$("#explanationDiv").removeClass('confirmed-box');

	}
}
function processNextQuestion() {
	$("#nextQuestionButton").hide();
	currentQuestion++;
	if (currentQuestion >= allQuestions.length) {
		currentQuestion = 0;
		allQuestions.shuffle();
	}
	$("#questionBox").text(questionArray[allQuestions[currentQuestion][0]][allQuestions[currentQuestion][1]]);
	$('input[name="ans"]').prop("checked", false);

	$("#explanationDiv").removeClass('incorrect');
	$("#explanationDiv").removeClass('correct');
	$("#explanationDiv").text('Choose an option above.');
}

Array.prototype.shuffle = function() {
	var that = this;
	for (var i = that.length-1; i >=0; i--) {
		var randomIndex = Math.floor(Math.random() * (i + 1));
		var itemAtIndex = that[randomIndex];
		that[randomIndex] = that[i];
		that[i] = itemAtIndex;
	}
	return that;
}
