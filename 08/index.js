
Survey
.StylesManager
.applyTheme("default");

var json = {
title: "American History",
showProgressBar: "bottom",
goNextPageAutomatic: true,
showNavigationButtons: false,
pages: [
    {
        questions: [
            {
                type: "radiogroup",
                name: "civilwar",
                title: "When was the Civil War?",
                choices: ["1750-1800", "1800-1850", "1850-1900", "1900-1950", "after 1950"]
            }
        ]
    }, {
        questions: [
            {
                type: "radiogroup",
                name: "libertyordeath",
                title: "Who said 'Give me liberty or give me death?'",
                choicesOrder: "random",
                choices: ["John Hancock", "James Madison", "Patrick Henry", "Samuel Adams"]
            }
        ]
    }, {
        questions: [
            {
                type: "radiogroup",
                name: "magnacarta",
                title: "What is the Magna Carta?",
                choicesOrder: "random",
                choices: ["The foundation of the British parliamentary system", "The Great Seal of the monarchs of England", "The French Declaration of the Rights of Man", "The charter signed by the Pilgrims on the Mayflower"]
            }
        ]
    }
],
completedHtml: "<p>Your anwers are:</p><p>When was the Civil War?: <b>{civilwar}</b>. The correct is: <b>1850-1900</b></p><p>Who said 'Give me liberty or give me death?': <b>{libertyordeath}</b>. The correct is: <b>Patrick Henry</b></p><p>What is the Magna Carta?: <b>{magnacarta}</b>. The correct is: <b>The foundation of the British parliamentary system</b></p>"
};

window.survey = new Survey.Model(json);

survey
.onComplete
.add(function (result) {
    document
        .querySelector('#surveyResult')
        .innerHTML = "result: " + JSON.stringify(result.data);
});

$("#surveyElement").Survey({model: survey});