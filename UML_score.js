/**
 * Created by you on 16-5-9.
 */
function printScore() {

    personalInformation();

    var answerBlank = loadFillInTheBlank();
    var answerSingle = loadSinglechoice();
    var answerMultiple = loadMultipleChoice();
    var answerJudgement = loadTrueOrFalse();
    var answerShort = loadShortAnswer();

    var blankScore = fillInTheBlank(answerBlank);
    var choiceSingle = makeChoice(answerSingle);
    var multipleChoiceScore = makeMultipleChoice(answerMultiple);
    var trueOrFalseScore = makeTrueOrFalse(answerJudgement);
    var shortAnswerScore = makeShortAnswer(answerShort);
    var totalScore = makeOverAllresults(blankScore, choiceSingle, multipleChoiceScore, trueOrFalseScore, shortAnswerScore);
    document.getElementById("grade").value = totalScore;
}

function personalInformation() {
    var classRoom = document.getElementById("classroom");
    if (classRoom.value.length === 0) {
        alert("请输入班级！");
    }

    var fullName = document.getElementById("fullName");
    if (fullName.value.length === 0) {
        alert("请输入姓名！");
    }

    var studyID = document.getElementById("studyID");
    if (studyID.value.length === 0) {
        alert("请输入学号！");
    }
}

function fillInTheBlank(answerBlank) {
    var scoreBlank = 0;

    var blankAnswer1 = document.getElementsByName("blank1");
    for (var i = 0; i < blankAnswer1.length; i++) {
        if (blankAnswer1[i].value === answerBlank[0].answer) {
            scoreBlank += 5;
        }
    }

    var blankAnswer2 = document.getElementsByName("blank2");
    for (var i = 0; i < blankAnswer2.length; i++) {
        for (var j = 0; j < answerBlank[1].answer.length; j++) {
            if (blankAnswer2[i].value === answerBlank[1].answer[j]) {
                scoreBlank += 5;
            }
        }
    }
    return scoreBlank;
}

function makeChoice(answerSingle) {
    var scoreChoice = 0;

    var answer1 = document.getElementsByName("choice1");
    for (var i = 0; i < answer1.length; i++) {
        if (answer1[i].checked === true) {
            if (answer1[i].value === answerSingle[0].answer) {
                scoreChoice += 10;
            }
        }
    }

    var answer2 = document.getElementsByName("choice2");
    for (var i = 0; i < answer2.length; i++) {
        if (answer2[i].checked === true) {
            if (answer2[i].value === answerSingle[1].answer) {
                scoreChoice += 10;
            }
        }
    }

    return scoreChoice;
}

function makeMultipleChoice(answerMultiple) {
    var scoreMultipleChoice = 0;

    var answer1 = document.getElementsByName("multiple1");
    var multipleAnswer1 = '';
    for (var i = 0; i < answer1.length; i++) {
        if (answer1[i].checked === true) {
            multipleAnswer1 = multipleAnswer1 + answer1[i].value;
        }
    }
    if (multipleAnswer1 === answerMultiple[0].answer) {
        scoreMultipleChoice += 10;
    }

    var answer2 = document.getElementsByName("multiple2");
    var multipleAnswer2 = '';
    for (var i = 0; i < answer2.length; i++) {
        if (answer2[i].checked === true) {
            multipleAnswer2 = multipleAnswer2 + answer2[i].value;
        }
    }
    if (multipleAnswer2 === answerMultiple[1].answer) {
        scoreMultipleChoice += 10;
    }
    return scoreMultipleChoice;
}

function makeTrueOrFalse(answerJudgement) {
    var scoreTrueOrFalse = 0;

    var answer1 = document.getElementsByName("judge1");
    for (var i = 0; i < answer1.length; i++) {
        if (answer1[i].checked === true) {
            if (answer1[i].value === answerJudgement[0].answer) {
                scoreTrueOrFalse += 10;
            }
        }
    }

    var answer2 = document.getElementsByName("judge2");
    for (var j = 0; j < answer2.length; j++) {
        if (answer2[j].checked === true) {
            if (answer2[j].value === answerJudgement[1].answer) {
                scoreTrueOrFalse += 10;
            }
        }
    }

    return scoreTrueOrFalse;
}

function makeShortAnswer(answerShort) {

    var scoreShortAnswer = 0;

    var answer1 = document.getElementsByName("shortAnswer1");
    for (var i = 0; i < answer1.length; i++) {
        answer1[i].value = answerShort[0].answer;
        scoreShortAnswer += 20;
    }


    return scoreShortAnswer;
}

function makeOverAllresults(blankScore, choiceSingle, multipleChoiceScore, trueOrFalseScore, shortAnswerScore) {
    return blankScore + choiceSingle + multipleChoiceScore + trueOrFalseScore + shortAnswerScore;
}