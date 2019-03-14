
function isClicked(){
    if($('input[type="radio"]:checked')){
        return true;
    }else{
        return false;
    }
    
}

var checkedAns = [];





var radios = $('input[type="radio"]:checked').value;




// var rad = $('input[type="radio"]').on("click", function(){

//     for(var i = 0; i < radios.length; i++){
    
//     if(radios.length>0){

//          checkedAns.push(radios[i]);

//          console.log(checkedAns);

//     }
   
    
//     // console.log(isClicked());
// }

// });

// console.log(rad);



var answers = {
    ans0: $('input[value = "3"]').val(),
    ans1: $('input[value = "7"]').val(),
    ans2: $('input[value = "10"]').val(),
    ans3: $('input[value = "13"]').val(),
    ans4: $('input[value = "20"]').val(),
    ans5: $('input[value = "22"]').val(),
    ans6: $('input[value = "24"]').val(),
    ans7: $('input[value = "29"]').val(),
    ans8: $('input[value = "32"]').val(),
    ans9: $('input[value = "35"]').val()
}

console.log(answers);

var score = 0;
function clickAns(){
    for (var i = 0; i < answers.length; i++){
    if (answers[i].isClicked()){
        score++;
        console.log(score);
    }
}
    
}






var number = 5;
var intervalId;

function decrement() {
    number--;
    $("#time").html("Time Remaining : " + number + " sec");
    if(number===0){
        clearInterval(intervalId);
    };
};


function start() {
intervalId = setInterval(decrement, 1000 * 1);
};







$(document).ready(function(){


$("#content").hide();



$("#start").on("click", function() {

    $("#content").show();
    
    start();

    

});

$("#scoreBtn").on("click", function(){


    var rad = $('input[type="radio"]').on("click", function(){

        for(var i = 0; i < radios.length; i++){
        
        
    
             checkedAns.push(radios[i].val());
    
             console.log(checkedAns);
    
        
       
        
        // console.log(isClicked());
    }
    
    });
    
    console.log(rad);
   



});


})
