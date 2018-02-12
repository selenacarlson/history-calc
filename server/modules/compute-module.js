const computationsArray = [];

function add(computation){
    computationsArray.push(computation);
}; 

function history(){
    return computationsArray;
}

function comp(object){
    if (object.computer = '+'){
        let answer = object.number1 + object.number2;
        return answer
    } // end +
    else if (object.computer = '-'){
        let answer = object.number1 - object.number2;
        return answer
    } // end -
    else if (object.computer = '*'){
        let answer = object.number1 * object.number2;
        return answer
    } // end *
    else if (object.computer = '%'){
        let answer = object.number1 / object.number2;
        return answer
    } // %

}; // end compute

module.exports = {
    compute: comp,
    addComputation: add,
    getHistory: history
}