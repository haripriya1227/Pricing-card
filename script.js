// Price toggle functionality
const toggle = document.getElementById('billingToggle');
const prices = document.querySelectorAll('.amount');
const periods = document.querySelectorAll('.period');

toggle.addEventListener('change', () => {
  if (toggle.checked) {
    // Yearly prices
    prices[0].textContent = '0';
    prices[1].textContent = '240'; // Pro (25×12 – 20%)
    prices[2].textContent = '864'; // Enterprise (90×12 – 20%)
    periods.forEach(p => (p.textContent = '/year'));
  } else {
    // Monthly prices
    prices[0].textContent = '0';
    prices[1].textContent = '25';
    prices[2].textContent = '90';
    periods.forEach(p => (p.textContent = '/month'));
  }
});