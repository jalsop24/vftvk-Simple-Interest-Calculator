

function compute()
{
    var principal = document.getElementById("principal").value;
    var rate = document.getElementById("rate").value;
    var years = document.getElementById("years").value;

    // Perform Amount box validation, focus them on the relevant box
    if (principal <= 0){
        alert("Please enter a number greater than 0.")
        document.getElementById("principal").focus()
        return
    }

    // Simple interest calculation (not compounded)
    var interest = principal * years * rate /100;

    // Find the year in *years* time
    var year = new Date().getFullYear() + parseInt(years);

    // Assign the result to the resultElement
    var resultElement = document.getElementById("result");

    resultElement.innerHTML = "If you deposit <mark>" + principal + 
        "</mark>,\<br\>at an interest rate of <mark>" + rate + 
        "%</mark>.\<br\>You will receive an amount of <mark>" + interest + 
        "</mark>,\<br\>in the year <mark>" + year + "</mark>";

}
        

function updateRate()
{
    var rateVal = document.getElementById("rate").value;
    document.getElementById("rate_val").innerText = rateVal + "%";
}


