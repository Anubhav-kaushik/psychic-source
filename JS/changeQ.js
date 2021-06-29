let resultData = {
    'a': ['Ambitions', 
"Limiting beliefs cause you to feel like you don't know your purpose or you're in a place where you simply can't pursue it. Instead, embrace the fact that every stage of life can be the perfect one for that moment and there's nothing keeping you from moving steadily forward."], 
    'b': ['Love',
"Finding love starts with loving yourself. When you tell yourself that you're unworthy, you slam the door to bountiful opportunities for partnership and affection. While it IS a good idea to make time to focus on yourself before you focus on finding a partner, beware of limiting beliefs that you're taking this time because you're in any way broken."], 
    'c': ['Health',
"It's easy to justify limiting beliefs about your health and appearance because you may think you can PROVE that they're true. You know how often you get ill and every body has its limitations. However, rephrasing these beliefs will help reframe those boundaries. Replace \"I'm always sick,\" with \"I'll feel better soon,\" or switch \"I don't like how I look,\" with \"I love my body the way it is.\""],
    'd': ['Friends and Family',
"The people you share your life with can be a tremendous asset to your health, happiness, and personal growth if you let them. While you should stay mindful of others, you need to escape from limitations built on pleasing or caring for them. Like the flight attendant tells you on the plane, you have to put on your own oxygen mask first so you're awake and breathing to help those around you."],
    'e': ['Career',
"Workplace success stems from confidence. Stop telling yourself what you don't know and start weaving a powerful story about all that you can learn. And that idea that you can't do work you love? Ditch that limiting belief! Find things to love in what you do or go do something you'll love. There are no limits on your possibilities other than your beliefs."],
'f': ['Abundance',
"It's easy to trick yourself into believing that you live in a world of finite opportunities and resources that determine what you can and can't have. But there's good news — you can have it all! Ample abundance is available to anyone who learns to find the ultimate peace and fulfillment that comes from appreciating the beauty of the now and fully believing that all things are available to them."],
'g': ['Self-Worth',
"You. Are. Perfect. Even your flaws, challenges, and struggles are pure perfection because they're creating a powerful and inspiring turning point for you to manifest your greatest destiny. Food wouldn't taste as good without hunger. Relish the moments of less for the meaning that they'll give to the times of plenty, and understand that you are always wonderful and worthy."]
};

let questions = {
    'q1': ['a', "I should be content with what I have and stop wanting more."], 
    'q2': ['b', "I'm not good enough to attract the most highly successful people."], 
    'q3': ['c', "There are certain things about the way I look I just don't like."], 
    'q4': ['a', "I'm too old now to do that."], 
    'q5': ['f', "I don't have the tools/skills/knowledge/money/strength for that."], 
    'q6': ['c', "I don't have the self-discipline to get in shape."], 
    'q7': ['f', "I never have enough time."], 
    'q8': ['b', "I need to fix something about myself."], 
    'q9': ['d', "It's selfish to put my own needs before others'."], 
    'q10': ['e', "I'm not qualified for that promotion."],
    'q11': ['g', "I'm just too much for a lot of people."],
    'q12': ['a', "This isn't the right time for me to pursue my dreams."],
    'q13': ['c', "My body just can't do that."],
    'q14': ['d', "I fear I'm less than the parent/partner/child that my family deserves."],
    'q15': ['g', "I wish I could hide my feelings better."],
    'q16': ['e', "I should have accomplished more in my career by now."],
    'q17': ['b', "I'm not very good at maintaining love relationships."],
    'q18': ['e', "I can't do what I love and pay the bills at the same time."],
    'q19': ['c', "I get sick all the time."],
    'q20': ['d', "That's not the way we do it in our family."],
    'q21': ['e', "Realistically the point of work is to make money, not to have fun."],
    'q22': ['a', "I can't do that until (the kids are older/I have more money/I lose more weight/etc)."],
    'q23': ['f', "This is the best I can do in my circumstances."],
    'q24': ['b', "I always manage to pick the wrong person for a relationship."],
    'q25': ['d', "It wouldn't be fair to my family if I were to pursue my dreams."],
    'q26': ['f', "I don't have the money for that."],
    'q27': ['g', "I'm not very smart in that area."],
    'q28': ['a', "I just don't know what I should be doing with my life."],
    'q29': ['f', "I can't be happy until this situation changes."],
    'q30': ['c', "Honestly, I'm not really all that attractive."],
    'q31': ['g', "I should be more thankful than I am."],
    'q32': ['d', "This is the legacy I'm stuck with."],
    'q33': ['f', "There isn't enough to go around."],
    'q34': ['g', "I always wind up getting the short end of the stick."],
    'q35': ['b', "I'm not an easy person to love."],
    'q36': ['e', "Managing my time and responsibilities has always been a challenge for me."],
    'q37': ['a', "Aside from day to day living, I have no idea of my bigger purpose."],
    'q38': ['d', "No one ever listens to me."],
    'q39': ['b', "I'm not good at being single."],
    'q40': ['c', "Losing weight is a battle I just can't win."],
    'q41': ['g', "Relatively speaking, I'm not that important."],
    'q42': ['e', "When the going gets tough, I suck it up."]
};

let groups = ['g1', 'g2', 'g3', 'g4', 'g5'];
let groupFilledStatus = {};

let answers = {};
let answersStatus = {};
let numQuesSec = 5;

let category = {'a': 0, 'b': 0, 'c': 0, 'd': 0, 'e': 0, 'f': 0, 'g': 0}

var timeout;

intialValue();

function isChecked(name){
    let checkRadio = document.getElementsByName(name);

    for(let k=0;k<checkRadio.length;k++){
        if(checkRadio[k].checked){
            return true;
        }
    }
    return false;
}

function getValue(name){
    let checkRadio = document.getElementsByName(name);

    for(let k=0;k<checkRadio.length;k++){
        if(checkRadio[k].checked){
            return [checkRadio[k].value];
        }
    }
}

function intialValue(boo=false, to=answersStatus){
    let quesList = Object.keys(questions);

    for(let i=0; i<quesList.length; i++){
        to[quesList[i]] = boo;
    }
}

function getStatus(ques){
    for(let i=0; i<ques.length; i++){
        if(answersStatus[ques[i]]){
            answers[ques[i]] = getValue(ques[i])[0];
            continue;
        }
        answersStatus[ques[i]] = isChecked(ques[i]);
    }

    for(let i=0; i<groups.length; i++){
        let temp = 'none';
        let quesNum = questionsInGroup(parseInt(groups[i][1]));

        if(groupFilledStatus[groups[i]]){
            continue;
        }

        for(let j=0; j<quesNum.length; j++){
            if(temp == 'none'){
                temp = answersStatus[quesNum[j]];
                continue;
            }
            temp = (temp && answersStatus[quesNum[j]]);
        }

        groupFilledStatus[groups[i]] = temp;
    }
}

function calculateAnswer(){
    let quesRep = Object.keys(answers);

    for(let i=0; i<quesRep.length; i++){
        let marks = answers[quesRep[i]][1];
        let cat = answers[quesRep[i]][0];

        category[cat] += parseInt(marks);
    }

    return top3dict(category);
}

function top3dict(keyValue){
    let keys = Object.keys(keyValue);
    let values = Object.values(keyValue);

    let firstThreeKeys = [];
    let firstThreeValues;

    let a = 0;
    let b = 0;
    let c = 0;

    for(let i=0; i<values.length; i++){
        if(a < values[i]){
            a = values[i];
            continue
        } else if(b < values[i]){
            b = values[i];
            continue
        } else if(c < values[i]){
            c = values[i];
            continue
        }
    }

    firstThreeValues = [a, b, c];

    for(let j=0; j<firstThreeValues.length; j++){
        for(let i=0; i<keys.length; i++){
            if(keyValue[keys[i]]==firstThreeValues[j]){
                firstThreeKeys.push(keys[i]);
                delete keyValue[keys[i]];
                break
            }
        }
    }

    return firstThreeKeys

}

function firstFalse(groupsList){
    for(let i=0; i<groupsList.length; i++) {
        if(!groupFilledStatus[groupsList[i]]){
            return groupsList[i];
        }
    }

    return 'fill'
}

// main function to run
let onScreen;

function update(){
    let grp = firstFalse(groups);
    
    getStatus(questionsInGroup(parseInt(grp[1])));
    
    if(onScreen != grp){
        if(onScreen != 'g5'){
            clearContainer('questions-container')

            onScreen = grp;
            
            enterQuestions(parseInt(grp[1]));
        }
    }

    timeout = setTimeout(update, 300);


}

function enterQuestions(groupNum){
    let numberOfQuestions = 9;
    let numberOfOptions = 5;
    let startingValue = numberOfQuestions*(groupNum - 1)+1;
    let endingValue = numberOfQuestions*groupNum;

    let quesRep = Object.keys(questions);

    if(quesRep.length - endingValue < 0) {
        endingValue = quesRep.length;
    }

    let quesPrefix = 'q';

    let quesContainer = document.getElementsByClassName('questions-container');

    for(let i=startingValue; i<=endingValue; i++) {
        let question = quesPrefix + i;

        let cat = questions[question][0];
        let content = questions[question][1];

        let quesElement = document.createElement('div');
        quesElement.setAttribute('class', question);

        let quesContent = document.createElement('p');
        quesContent.append(document.createTextNode(content));

        quesElement.appendChild(quesContent);

        for(let j=1; j<=numberOfOptions; j++) {
            let inpElement = document.createElement('input');
            inpElement.setAttribute('type', 'radio');
            inpElement.setAttribute('name', question);
            inpElement.setAttribute('id', question+cat+j);
            inpElement.setAttribute('value', cat+j);

            quesElement.appendChild(inpElement);
        }  
        
        quesContainer[0].appendChild(quesElement);

    }
}

function questionsInGroup(groupNum) {
    let numberOfQuestions = 9;

    let startingValue = numberOfQuestions*(groupNum - 1)+1;
    let endingValue = numberOfQuestions*groupNum;

    let quesList = Object.keys(questions);

    if(quesList.length - endingValue < 0) {
        endingValue = quesList.length;
    }

    let quesPrefix = 'q';

    questionsList = [];

    for(let i=startingValue; i<=endingValue; i++) {
        let temp = quesPrefix+i;
        questionsList.push(temp);
    }

    return questionsList;
}

function clearContainer(name){
    let element = document.getElementsByClassName(name);
    for(let i=0; i<element.length; i++) {
        element[i].innerHTML = '';
    }
}

function getResult() {
    clearTimeout(timeout);

    let element = document.getElementsByClassName('questions-container');
    element[0].style.display = 'none';

    let resultCatList = calculateAnswer();

    let resultContainer = document.getElementsByClassName('result-container');

    for(let i=0; i<resultCatList.length; i++) {
        let heading = resultData[resultCatList[i]][0];
        let description = resultData[resultCatList[i]][1];

        let result = document.createElement('div');
        result.setAttribute('class', 'result');

        let head = document.createElement('h3');
        head.appendChild(document.createTextNode(heading));

        let para = document.createElement('p');
        para.appendChild(document.createTextNode(description));

        result.appendChild(head);
        result.appendChild(para);

        resultContainer[0].appendChild(result);
    }
}

