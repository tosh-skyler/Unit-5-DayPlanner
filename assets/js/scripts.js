var dateString = moment().format("dddd, MMMM Do YYYY, h:mm a");
$("#currentDay").html(dateString);

var timeString = moment().format("h A");

var scheduledHours = [];

for (var hour = 9; hour < 18; hour++) {
  scheduledHours.push(
    moment({
      hour
    }).format("h  a")
  );
  $("#section-a").append(`
		<div class="row time-block" data-time="${hour}"> 
			<!--hour column-->
			<div class="hour">
				<span class="time-block">${moment({ hour }).format("h  a")}</span>
			</div>
			<!--user input text area-->
			<textarea class="description" id="${moment({ hour }).format("HH")}"></textarea>
			<!-- saveBtn-->
			<button class="saveBtn">
				<i class="fas fa-save"></i>
			</button>
		</div>`);
  console.log({ hour });
}
