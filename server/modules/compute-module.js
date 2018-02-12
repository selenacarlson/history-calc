const 

function addComputation(){

}; 

function compute(object){
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

module.exports = compute;