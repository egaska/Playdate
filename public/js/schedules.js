$(document).ready(() => {
    $.get("/api/events").then(function (data) {
        console.log(data);
    });
});