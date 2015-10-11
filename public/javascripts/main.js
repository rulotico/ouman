

var recognizer = new webkitSpeechRecognition();
recognizer.lang = "es-MX";


$("#voice_btn").click(function (){

$("#speech").html("");


$(".redPoint").css("visibility","visible");



recognizer.onresult = function(event) {
    if (event.results.length > 0) {
        var result = event.results[event.results.length-1];
        if(result.isFinal) {
            console.log(result[0].transcript);
            $("#speech").html(result[0].transcript);
            $(".redPoint").css("visibility","hidden");
        }
    }  
};
recognizer.start();

});


