var dateString = moment().format("dddd, MMMM Do YYYY, h:mm a");
$("#currentDay").html(dateString);

var timeString = moment().format("h A");
$("#currentHour").html(timeString);

