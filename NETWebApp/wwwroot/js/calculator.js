// javascript using jquery

$
    (document).ready(function () {
    // Calculate button click event
    $("#calculateBtn").click(function () {
        // Get the entered hours and hourly rate
        var hours = parseFloat($("#hours").val());
        var rate = parseFloat($("#rate").val().substring(1)); 

        // Validate the input to make sure it is positive
        if (isNaN(hours) || hours < 0) {
            alert("Please enter a valid positive number for hours.");
            return;
        }

        // Calculate total
        var total = hours * rate;

        // Display the total
        $("#total").val("$" + total.toFixed(2));
    });
});
