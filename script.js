

function compute()
{
    var principal = document.getElementById("principal").value;
    var rate = document.getElementById("rate").value;
    var years = document.getElementById("years").value;


    if (principal <= 0){
        alert("Please enter a number greater than 0.")
        document.getElementById("principal").focus()
        return
    }


    var interest = principal * years * rate /100;
    var year = new Date().getFullYear() + parseInt(years);

    var resultElement = document.getElementById("result");

    resultElement.innerHTML = "If you deposit " + principal + ",\<br\>at an interest rate of " + rate + "%.\<br\>You will receive an amount of " + interest + ",\<br\>in the year " + year;

}
        

function updateRate()
{
    var rateVal = document.getElementById("rate").value;
    document.getElementById("rate_val").innerText = rateVal + "%";
}


