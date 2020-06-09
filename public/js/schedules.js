let nineAMArray = [];
let tenAMArray = [];
let elevenAMArray = [];
let twelvePMArray = [];
let onePMArray = [];
let twoPMArray = [];
let threePMArray = [];
let fourPMArray = [];
let fivePMArray = [];
let sixPMArray = [];
let sevenPMArray = [];
let eightPMArray = [];
let ninePMArray = [];

let nineAMAvalibility = true;
let tenAMAvalibility = true;
let elevenAMAvalibility = true;
let twelvePMAvalibility = true;
let onePMAvalibility = true;
let twoPMAvalibility = true;
let threePMAvalibility = true;
let fourPMAvalibility = true;
let fivePMAvalibility = true;
let sixPMAvalibility = true;
let sevenPMAvalibility = true;
let eightPMAvalibility = true;
let ninePMAvalibility = true;

$(document).ready(() => {
    $.get("/api/events").then(function (data) {
        let scheduleArray = data;
        console.log(scheduleArray);

        scheduleArray.forEach((element) => {
            nineAMArray.push(element.nine_am);
            tenAMArray.push(element.ten_am);
            elevenAMArray.push(element.eleven_am);
            twelvePMArray.push(element.twelve_pm);
            onePMArray.push(element.one_pm);
            twoPMArray.push(element.two_pm);
            threePMArray.push(element.three_pm);
            fourPMArray.push(element.four_pm);
            fivePMArray.push(element.five_pm);
            sixPMArray.push(element.six_pm);
            sevenPMArray.push(element.seven_pm);
            eightPMArray.push(element.eight_pm);
            ninePMArray.push(element.nine_pm);
        });

        console.log("NineAMArray: " + nineAMArray);

        nineAMAvalibility = nineAMArray.every((item) => item === true);
        tenAMAvalibility = tenAMArray.every((item) => item === true);
        elevenAMAvalibility = elevenAMArray.every((item) => item === true);
        twelvePMAvalibility = twelvePMArray.every((item) => item === true);
        onePMAvalibility = onePMArray.every((item) => item === true);
        twoPMAvalibility = twoPMArray.every((item) => item === true);
        threePMAvalibility = threePMArray.every((item) => item === true);
        fourPMAvalibility = fourPMArray.every((item) => item === true);
        fivePMAvalibility = fivePMArray.every((item) => item === true);
        sixPMAvalibility = sixPMArray.every((item) => item === true);
        sevenPMAvalibility = sevenPMArray.every((item) => item === true);
        eightPMAvalibility = eightPMArray.every((item) => item === true);
        ninePMAvalibility = ninePMArray.every((item) => item === true);

        console.log(nineAMAvalibility);

        if (nineAMAvalibility === false) {
            $("#nineAMAlert").removeClass("alert-success");
            $("#nineAMAlert").addClass("alert-danger");
        }

        if (tenAMAvalibility === false) {
            $("#tenAMAlert").removeClass("alert-success");
            $("#tenAMAlert").addClass("alert-danger");
        }

        if (elevenAMAvalibility === false) {
            $("#elevenAMAlert").removeClass("alert-success");
            $("#elevenAMAlert").addClass("alert-danger");
        }

        if (twelvePMAvalibility === false) {
            $("#twelvePMAlert").removeClass("alert-success");
            $("#twelvePMAlert").addClass("alert-danger");
        }

        if (onePMAvalibility === false) {
            $("#onePMAlert").removeClass("alert-success");
            $("#onePMAlert").addClass("alert-danger");
        }

        if (twoPMAvalibility === false) {
            $("#twoPMAlert").removeClass("alert-success");
            $("#twoPMAlert").addClass("alert-danger");
        }

        if (threePMAvalibility === false) {
            $("#threePMAlert").removeClass("alert-success");
            $("#threePMAlert").addClass("alert-danger");
        }

        if (fourPMAvalibility === false) {
            $("#fourPMAlert").removeClass("alert-success");
            $("#fourPMAlert").addClass("alert-danger");
        }

        if (fivePMAvalibility === false) {
            $("#fivePMAlert").removeClass("alert-success");
            $("#fivePMAlert").addClass("alert-danger");
        }

        if (sixPMAvalibility === false) {
            $("#sixPMAlert").removeClass("alert-success");
            $("#sixPMAlert").addClass("alert-danger");
        }

        if (sevenPMAvalibility === false) {
            $("#sevenPMAlert").removeClass("alert-success");
            $("#sevenPMAlert").addClass("alert-danger");
        }

        if (eightPMAvalibility === false) {
            $("#eightPMAlert").removeClass("alert-success");
            $("#eightPMAlert").addClass("alert-danger");
        }

        if (ninePMAvalibility === false) {
            $("#ninePMAlert").removeClass("alert-success");
            $("#ninePMAlert").addClass("alert-danger");
        }
    });
});
