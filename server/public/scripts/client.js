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
            url: '/calculate',
            data: {objectToCompute: objectToCompute}
        }).done(function(response){
            console.log(response);
            getAnswer();
        }).fail(function(response){
            console.log('fail');
        })
    }; // end sendObject

    function getAnswer(){
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
        $('#answer').append('<h2> = ' + answer + '</h2>');
    } // end displayAnswer

    function showHistory(){
    }; // end showHistory

    

}; // end onReady

