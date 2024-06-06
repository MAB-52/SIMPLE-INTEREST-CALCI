let calculateBtn = document.getElementById("calculate");
let result = document.getElementById("result");

let calculate = () =>{
    let p = Number(document.getElementById("principal").value);
    let n = Number(document.getElementById("tenure").value);
    let r = Number(document.getElementById("rate").value);

    let simpleInterest = (p*n*r)/100;
    console.log(simpleInterest);

    let totalAmt = simpleInterest + p;
    console.log(totalAmt);

    result.innerHTML = `<div>Principal Amount: <span>$${p}</span></div>
    <div>Total Amount: <span>$${totalAmt}</span></div>
    <div>Interest: <span>$${simpleInterest}</span></div>`;
}

calculateBtn.addEventListener('click', calculate);
window.addEventListener('load', calculate);