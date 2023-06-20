function myfun() {
    var amount = +document.getElementById("txt1").value;
    var numberOfYears = +document.getElementById("txt2").value;
    var rateOfInterest = +document.getElementById("txt3").value;
    var openingBalance = 0;
    var result = '';

    for (var i = 1; i <= numberOfYears; i++) {
        var interest = Math.round((openingBalance + amount) * rateOfInterest / 100);
        var closingBalance = Math.round(openingBalance + amount + interest);

        result += `
            <tr>
                <td>${i}</td>
                <td>${openingBalance}</td>
                <td>${amount}</td>
                <td>${interest}</td>
                <td>${closingBalance}</td>
            </tr>`;
        openingBalance = closingBalance;
    }

    document.getElementById("finalAns").innerHTML = result;
}