//listen for submit
document.getElementById('loan-form').addEventListener('submit', calculateResults);

//Calculate Results 
function calculateResults(e){
  console.log('calculating...')
  // UI Vars
  const amount = document.getElementById('amount');
  const interest = document.getElementById('interest');
  const years = document.getElementById('years');
  const monthyPayment = document.getElementById('monthy-payment');
  const totalPayment = document.getElementById('total-payment');
  const totalInterest = document.getElementById('total-interest');


 const principle = parseFloat(amount.value);
 const calculateInterest = parseFloat(interest.value)/ 100 / 12;
 const calculatedPayments = parseFloat(years.value)* 12;

 // Compute monthy payment
 const x = math.pow(1+ calculateInterest, calculatedPayments);

  e.preventDefault();
}