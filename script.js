//Random number generated on page load
var numToGuess = 0;

//Array Query
// var inputArray = [minRange, maxRange, challenger1, guess1, challenger2, guess2];
let inputArray = [$("#section__form--min-js"), $("#section__form--max-js"), $("#section__form--challenger1-js"), $("#section__form--guess1-js"), $("#section__form--challenger2-js"), $("#section__form--guess2-js")]

//Event Listeners
$("#section__form--submit-btn-js").click(submitGuess);
$("#section__form--clear-btn-js").click(clearField);
$("#section__form--btn-js").click(newRange);
$("#section__form--reset-btn-js").click(resetField);
$("input").keyup(enableBtn);
$(window).on("load", randomNum(1,100));

function randomNum(min, max) {
  numToGuess = Math.floor(Math.random() * (max - min + 1)) + min;
  console.log(numToGuess)
}

function clearField() {
  $("#section__form--min-js, #section__form--max-js, #section__form--guess1-js, #section__form--guess2-js").val("");
  $("input:text").val("");
  $(".section__form--btn").prop("disabled", true);
  clearErr();
}

function newRange() {
  // randomNum(parseInt($("#section__form--min-js")), parseInt($("#section__form--max-js")));
  const minRange = $("#section__form--min-js").val();
  const maxRange = $("#section__form--max-js").val();
  randomNum(parseInt(minRange), parseInt(maxRange));
  const currentRangeMin = $('#section__current-range--min-js');
  const currentRangeMax = $('#section__current-range--max-js');
  currentRangeMin.innerText = minRange.value;
  // $("#section__current-range--min-js").val(minRange);
  currentRangeMax.innerText = maxRange.value;
  // $("section__current-range--max-js").text("#section__form--max-js");
  rangeErrorMsg();
}

function rangeErrorMsg() {
  const min = parseInt($("#section__form--min-js").val());
  const max = parseInt($("#section__form--max-js").val())
  if (min >= max) {
    $("#min-range-error-message-js").css("visibility", "visible");
    $("#max-range-error-message-js").css("visibility", "visible");
  }
  if (min < max) {
    $("#min-range-error-message-js").css("visibility", "hidden");
    $("#max-range-error-message-js").css("visibility", "hidden");
  }
}

function clearErr() {
  $("#min-range-error-message-js").css("visibility", "hidden")
  $("#max-range-error-message-js").css("visibility", "hidden");
}


function resetField() {
  randomNum(1, 100);
  $("section__form--reset-btn-js").prop("disabled", true)
  clearErr();
}

$("#section__form--guess1-js").val() || $("section__form--guess2-js").val() || $("#section__form--challenger1-js").val() || $("#section__form--challenger2-js").val()

function enableBtn() {
  if ($("#section__form--guess1-js").val() || $("section__form--guess2-js").val() || $("#section__form--challenger1-js").val() || $("#section__form--challenger2-js").val()) {
  // if (guess1.value || guess2.value || challenger1.value || challenger2.value || minRange.value || maxRange.value) {
    $("#section__form--clear-btn-js").prop("disabled", false)
    $("#section__form--reset-btn-js").prop("disabled", false)
  } else {
    $("#section__form--clear-btn-js").prop("disabled", true)
    $("#section__form--reset-btn-js").prop("disabled", true)
  }
}

function submitGuess() {
  $("#section__latest-score-container-js").css("display", "flex")
  $("#append-challenger1-name-js").text($("#section__form--challenger1-js").val());
  $("#append-challenger2-name-js").text($("#section__form--challenger2-js").val());
  $("#section__guess-feedback-container--actual-guess1-js").text($("#section__form--guess1-js").val())
  $("#section__guess-feedback-container--actual-guess2-js").text($("#section__form--guess2-js").val());
  guessEval();
  errDisplay($("#section__form--guess1-js").val(), $("#section__form--guess2-js").val());
  clearField();
}

function guessEval() {
  const one = parseInt($("#section__form--guess1-js").val());
  const two = parseInt($("#section__form--guess2-js").val());

  if (one === numToGuess) {
    $("#section__guess-feedback-container--accuracy1-js").text("BOOM!");
    cardDisplay();
  } if (one < numToGuess) {
    $("#section__guess-feedback-container--accuracy1-js").text("That's too low!");
  } else if (one > numToGuess) {
    $("#section__guess-feedback-container--accuracy1-js").text("That's too high!");
  }  if (two === numToGuess) {
    $("#section__guess-feedback-container--accuracy2-js").text("BOOM!");
    cardDisplay();
  }  else if (two < numToGuess) {
    $("#section__guess-feedback-container--accuracy2-js").text("That's too low!");
  }  else if (two > numToGuess) {
    $("#section__guess-feedback-container--accuracy2-js").text("That's too high!");
  }
}


function errDisplay(one, two) {
  const currentRangeMin = $("#section__current-range--min-js");
  const currentRangeMax = $("#section__current-range--max-js");
  if (one > parseInt(currentRangeMax.innerText) || one < parseInt(currentRangeMin.innerText)) {
    $("#challenger1-guess-error-message-js").prop("visibility", "visible");
    console.log(one, maxRange, 'one')
  } else if (two > parseInt(currentRangeMax.innerText) || two < parseInt(currentRangeMin.innerText)) {
    $("#challenger2-guess-error-message-js").prop("visibility", "visible");
    console.log(two, maxRange, 'two')
  }
}

function cardDisplay() {
  const challenger1 = $("#section__form--challenger1-js").val();
  const challenger2 = $("#section__form--challenger2-js").val();
  var card = 
   `<aside class="winner-card">
      <p class="card-name"><span class="card-challenger">${challenger1}</span> vs <span class="card-challenger">${challenger2}</span></p>
      <hr class="card-line">
      <h3 class="card-challenger-winner">challenger 1</h3>
      <h3 class="card-winner">WINNER!</h3>
      <hr class="card-line">
      <img src="./assets/cancel.png" id="card-delete" alt="delete winner card">
        </aside>`;
  let cardContainer = $(".winner-card__container");
  cardContainer.addClass("new-card");
  cardContainer.prepend(card);
}