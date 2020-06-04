$(document).ready(function() {

  $(".submit").on("click", function handleFormSubmit(event) {
    event.preventDefault();
    let newAvailablity = $(".custom-select").map((i, item) => item.value);
   console.log(newAvailablity);
  });
});
