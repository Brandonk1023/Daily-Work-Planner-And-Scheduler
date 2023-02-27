
$(function () {

  let today = dayjs();
  let currentTime = dayjs();

  $(".saveBtn").on("click", function () {
    let description = $(this).siblings(".description").val();
    let hour = $(this).parent().attr("id");
    localStorage.setItem(hour, description);
  })

  $("#hour-9 .description").val(localStorage.getItem("hour-9"));
  $("#hour-10 .description").val(localStorage.getItem("hour-10"));
  $("#hour-11 .description").val(localStorage.getItem("hour-11"));
  $("#hour-12 .description").val(localStorage.getItem("hour-12"));
  $("#hour-13 .description").val(localStorage.getItem("hour-13"));
  $("#hour-14 .description").val(localStorage.getItem("hour-14"));
  $("#hour-15 .description").val(localStorage.getItem("hour-15"));
  $("#hour-16 .description").val(localStorage.getItem("hour-16"));
  $("#hour-17 .description").val(localStorage.getItem("hour-17"));

  $(".time-block").each(function () {
    let x = parseInt(currentTime.format("H"));
    let blockTime = parseInt(Math.abs(($(this).attr("id").split("hour")[1])));
    if (blockTime === x) {
      $(this).addClass("present");
      $(this).removeClass("future");
      $(this).removeClass("past");
    } else if (blockTime > x) {
      $(this).addClass("future");
      $(this).removeClass("present");
      $(this).removeClass("past");
    } else if (blockTime < x) {
      $(this).addClass("past");
      $(this).removeClass("present");
      $(this).removeClass("future");
    }
  })

  $("#currentDay").text(today.format("MMM D, YYYY"));
});