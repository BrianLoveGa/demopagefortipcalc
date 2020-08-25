console.log("test phrase")


// bill tip

function setBill() {
  let bill = document.getElementById("billAmount").value;
  let tip = document.getElementById("tipPercent").value;
  let amount = 0;
  amount = bill * (tip / 100);
  console.log(amount);
  clean = "Tip amount : $ " + (Math.round(amount*100)/100).toFixed(2);
  let answer = document.getElementById("tipAmount");
  answer.textContent = clean;
}
// to stop page re-load while clicking 'Try me tip'
document.getElementById("billSet").addEventListener("click", function (event) {
  event.preventDefault();
});