//listen for submit
document
	.getElementById('loan-form')
	.addEventListener('submit', calculateResults);

//Calculate Results
function calculateResults(e) {
	console.log('calculating...');
	// UI Vars
	const amount = document.getElementById('amount');
	const interest = document.getElementById('interest');
	const years = document.getElementById('years');
	const monthyPayment = document.getElementById('monthy-payment');
	const totalPayment = document.getElementById('total-payment');
	const totalInterest = document.getElementById('total-interest');

	const principal = parseFloat(amount.value);
	const calculatedInterest = parseFloat(interest.value) / 100 / 12;
	const calculatedPayments = parseFloat(years.value) * 12;

	// Compute monthy payment
	const x = Math.pow(1 + calculatedInterest, calculatedPayments);
	const monthy = (principal*x*calculatedInterest)/(x-1);

	if (isFinite(monthy)) {
		monthyPayment.value = monthy.toFixed(2);
		totalPayment.value = (monthly * calculatedPayments).toFixed(2);
		totalInterest.value = ((monthy * calculatedPayments) - principal).toFixed(2);
	} else {
		console.log('pleasse check your numbers');
	}

	e.preventDefault();
}
