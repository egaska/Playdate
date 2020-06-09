$(document).ready(() => {
  $(".submit").on("click", (event) => {
    event.preventDefault();
    let newAvailablity = [...$(".custom-select")].map(
      (item) => "true" === item.value
    );
  
    console.log(newAvailablity);
    $.post("/api/events", {Availablity: newAvailablity}).then(function(data) {
    console.log(data);
    });
    window.location.href = "/schedules";
  });
});
