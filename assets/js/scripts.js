let dateString = moment().format("dddd, MMMM Do YYYY, h:mm a");
$("#currentDay").html(dateString);

let currentHour = parseInt(moment().hour());

let inputTextLength = $(".time-block").length;

renderLocalStorage();

$(".description").each(function() {
  let currentTime = parseInt(moment($(this).attr("id"))._i);
  if (moment(currentTime).isBefore(currentHour)) {
    $(this).addClass("past");
  } else if (moment(currentTime).isSame(currentHour)) {
    $(this).addClass("present");
  } else if (moment(currentTime).isAfter(currentHour)) {
    $(this).addClass("future");
  }
});

$(".saveBtn").on("click", function() {
  for (let i = 0; i < inputTextLength; i++) {
    let currentID = $(".description")
      .eq(i)
      .attr("id");
    let value = $(".description")
      .eq(i)
      .val()
      .trim();
    localStorage.setItem(currentID, value);
  }
});

$(".clearSchedule").on("click", function() {
  $(".description").empty();
  localStorage.clear();
});

function renderLocalStorage() {
  for (let i = 9, j = 0; i < 18; i++, j++) {
    let textInfo = localStorage.getItem(i);
    $(".description")
      .eq(j)
      .text(textInfo);
  }
}
