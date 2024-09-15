function calculateLoan() {
  const principal = parseFloat(document.getElementById("principal").value);
  const interestRate =
    parseFloat(document.getElementById("interest-rate").value) / 100 / 12;
  const months = parseFloat(document.getElementById("months").value);
  const payments = months;

  const x = Math.pow(1 + interestRate, months);
  const monthly = (principal * x * interestRate) / (x - 1);

  if (isFinite(monthly)) {
    document.getElementById(
      "monthly-payment"
    ).textContent = `Monthly Payment: $${monthly.toFixed(2)}`;
    document.getElementById("total-payment").textContent = `Total Payment: $${(
      monthly * payments
    ).toFixed(2)}`;
    document.getElementById(
      "total-interest"
    ).textContent = `Total Interest: $${(
      monthly * payments -
      principal
    ).toFixed(2)}`;
  } else {
    document.getElementById("monthly-payment").textContent =
      "Please check your input values";
    document.getElementById("total-payment").textContent = "";
    document.getElementById("total-interest").textContent = "";
  }
}
