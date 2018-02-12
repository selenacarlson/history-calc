const computationsArray = [];

function add(computation){
    if (computation.computer = '+'){
        computation.answer = Number(computation.number1) + Number(computation.number2);
    } // end +
    else if (computation.computer = '-'){
        computation.answer = Number(computation.number1) - (computation.number2);
    } // end -
    else if (computation.computer = '*'){
        computation.answer = Number(computation.number1) * (computation.number2);
    } // end *
    else {
        computation.answer = Number(computation.number1) / (computation.number2);
    } // %
    computationsArray.push(computation);
}; 

function history(){
    return computationsArray;
}

module.exports = {
    addComputation: add,
    getHistory: history
}