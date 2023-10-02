// targets save button and text area to hold the typed text content
$(function () {
  $(".saveBtn").on("click", function () {
      var data = $(this).siblings("textarea").val()
      var time = $(this).parent().attr("id")
      console.log(data, time)
      localStorage.setItem(time, data); // localStorage holds the text in place after refresh 
  })
  // uses day.js to format the days and hold the content in each particular section 
  $("#currentDay").text(
      dayjs().format("DD/MM/YYYY"))
  var currentHour = dayjs().hour()
  for (var i = 9; i <= 17; i++) {
      var id = "hour-" + i
      var data = localStorage.getItem(id) // "pushes" to page
      $("#" + id).children("textarea").val(data)
      if (i < currentHour) {
          $("#" + id).addClass("past")
      } else if (i === currentHour) {
          $("#" + id).addClass("present")
      } else {
          $("#" + id).addClass("future")
      }
  }
});

// RR 