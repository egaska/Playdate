$(document).ready(() => {
  $(".submit").on("click", (event) => {
    event.preventDefault();
    const newAvailablity = $(".custom-select").map((i, item) => item.value);
    console.log(newAvailablity);
  });
});
