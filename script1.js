
// function myfun(){
//     Amount=+document.getElementById("txt1").value;
//     noy=+document.getElementById("txt2").value;
//     roi=+document.getElementById("txt3").value;
//     Opening_balance=0;
//     result=``
//     for(i=1;i<=noy;i++)
//     { 
//         Intrest=Math.round((Opening_balance+Amount)*roi/100);
//         Closing_balance=Math.round(Opening_balance+Amount+Intrest);
//         console.log(i,Opening_balance,Amount,Intrest,Closing_balance)
        
//         result=result+`
//         <tr>
//         <td> ${i}</td> 
//         <td> ${ Opening_balance}</td> 
//         <td> ${Amount}</td> 
//         <td> ${Intrest}</td> 
//         <td> ${ Closing_balance}</td> 
//         </tr>`
//         Opening_balance=Closing_balance;
//     }
//     document.querySelector("#finalAns").innerHTML=result;


// } 


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