$( document ).ready( onReady );

function onReady(){

    let computation = {};
    
    $( '.number1Button' ).on('click', function(){
        let number = $( this ).val('.number1Button').text();
        computation.number1 = Number(number);
        console.log(computation);
    }) // end numberButton

    $( '.computeButton' ).on('click', function(){
        let comp = $( this ).val('.number1Button').text();
        computation.computer = comp;
        console.log(computation);
    }); // end computeButton

    $( '.number2Button' ).on('click', function(){
        let number = $( this ).val('.number2Button').text();
        computation.number2 = Number(number);
        console.log(computation);
    }) // end numberButton

    $( '#equalsButton' ).on('click', function(){
        sendObject();
    }); // end equalsButton

    let objectToCompute = getObjectToCompute();

    function getObjectToCompute() {
        let object = computation;
        return object;
    }; // end getObject

    function sendObject(){
        $.ajax({
            method: 'POST',
            url: '/add',
            data: {objectToCompute: objectToCompute}
        }).done(function(response){
            console.log(response);
            getAnswer();
            getHistory();
        }).fail(function(response){
            console.log('fail');
        })
    }; // end sendObject

    function getHistory(){
        console.log('in getHistory');
        $.ajax({
            method: 'GET',
            url: '/history',
        }).done(function(response){
            showHistory(response);
            console.log(response);
        }).fail(function(response){
            console.log('fail');
        })
    } // getAnswer

    function getAnswer(){
        console.log('in getAnswer');
        $.ajax({
            method: 'GET',
            url: '/calculate',
        }).done(function(response){
            displayAnswer(response);
            console.log(response);
        }).fail(function(response){
            console.log('fail');
        })
    } // getAnswer

    function displayAnswer(answer){
        console.log('displayAnswer');
        $('#answer').append('<h2> = ' + answer + '</h2>');
    } // end displayAnswer

    function showHistory(historyList){
        $('#history').empty();
        let $ul = $('<ul></ul>');
        for(let i = 0; i<historyList.length; i++){
            $ul.append(`<li>
                ${historyList[i].number1} ${historyList[i].computer} ${historyList[i].number2}
              </li>`);
            }
            $('#history').append($ul);
    }; // end showHistory

    

}; // end onReady

