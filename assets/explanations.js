function processWrongAnswer(correct,guess){
	// console.log("correct: " + correct + " and guess: " + guess);
	if(correct < 6){
		if(guess >5){
			return "This is not a hypothesis test, since you want to estimate something.";
		}
		else if(correct < 2){
			if(guess > 1){
				return "There is one sample here, not two.";
			}
			else if(correct == 0){
				return "The variable is quantitative, not categorical.";
			}
			else{
				return "The variable is categorical, not quantitative.";
			}
		}
		else if(guess < 2){
			return "There are two samples here, not one.";
		}
		else if(correct == 4){
			return "The variables are categorical, not quantitative.";
		}
		else if (guess == 4){
			return "The variables are quantitative, not categorical.";
		}
		else if(correct == 2){
			return "The two populations are not dependent. The data is not paired.";
		}
		else if(correct == 3){
			if(guess == 5){
				return "We are not given a value for the explanatory variable.";
			}
			else{
				return "The two populations are dependent. The data is paired.";
			}
		}
		else{
			return "We are given a value for the explanatory variable and want to estimate the response variable.";
		}
	}
	else if(guess < 6){
		return "Notice that we want to make a decision, not estimate a value.";
	}
	else if(correct < 8){
		if(guess > 7){
			return "There is one sample here, not two.";
		}
		else if(correct == 6){
			return "The variable is quantitative, not categorical.";
		}
		else{
			return "The variable is categorical, not quantitative.";
		}
	}
	else if(guess < 8){
		return "There is more than one sample here.";
	}
	else if(correct < 11){
		if(guess == 14){
			return "There are only two samples here. A 1-Way ANOVA test is used for more than two samples.";
		}
		else if(guess > 10){
			return "A Chi Square test should not be used for this problem.";
		}
		else if(correct == 10){
			return "The variable is categorical, not quantitative.";
		}
		else if(guess == 10){
			return "The variable is quantitative, not categorical.";
		}
		else if(correct == 8){
			return "The two populations are not dependent. The data is not paired.";
		}
		else if(correct == 9){
			return "The two populations are dependent. The data is paired.";
		}
	}
	else if(correct == 14){
		return "Notice that there are more than two variables populations.";
	}
	else if(guess == 14){
		return "There are not more than two samples here. A 1-Way ANOVA test is used for more than two samples.";
	}
	else if(correct == 11){
		if(guess == 12){
			return "We are testing for a distribution, not for independence.";
		}
		else if (guess == 13){
			return "There is only one sample here, and it is being compared with a known distribution.";
		}
		else{
			return "A Chi Square test should be used for this problem.";
		}
	}
	else if(correct == 12){
		if(guess == 11 || guess == 13){
			return "We are not interested in whether the distribution(s) are as predicted.";
		}
		else{
			return "A Chi Square test should be used for this problem.";
		}
	}
	else{
		if(guess == 11){
			return "We do not have a known distribution. We are comparing two distributions on only have the sample data of each.";
		}
		else if(guess == 12){
			return "Notice that we are testing to see if the distributions are the same, not to see if the variables are independent.";
		}
		else{
			return "What test compares two distributions?";
		}
	}
	return "That is incorrect.";
}
