var targetNumber;
var counter =0;

// random- result meta score for every game



targetNumber= Math.floor(Math.random()*69 )+30;

$("#meta-score").html(targetNumber);

//divs random gems
for(var i= 0; i < 4; i++) {

var crystalNumb = Math.floor(Math.random()* 9 )+1;
console.log(crystalNumb);

var crystal = $("<div>");
crystal.addClass("crystal");
crystal.addClass("far fa-gem");

crystal.attr("data-random", crystalNumb);

//crystal.html(crystalNumb);

$(".crystals").append(crystal);

}


// giving each div the value on click event
$(".crystal").on("click", function()
{
    var crystalValue=($(this).attr("data-random"));
    //console.log($(this).attr("data-random"));
    crystalValue = parseInt(crystalValue);
console.log(crystalValue);
  // prev =+ num;
counter+=crystalValue;

$("#counter").html(counter);

if (counter === targetNumber) {
    $("#status").text("You Won!!");
  //  location.reload();

  setTimeout(function() { location.reload() },3000);
    
} else if (counter >=targetNumber) {
    $("#status").text("You Lose!!");
    setTimeout(function() { location.reload() },3000);
  //  location.reload();
}

});






