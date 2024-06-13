import dtIconUrl from './images/dark-theme-icon.svg';
import ltIconUrl from './images/light-theme-icon.svg';
import ltLogoUrl from './images/lt-logo.svg';
import dtLogoUrl from './images/dt-logo.svg';


const logo = document.querySelector('.brand__logo img');
const themeToggle = document.querySelector('.theme-toggle');
const toggleImg = document.querySelector('.theme-toggle img');
const totalBillInput = document.getElementById('total-bill__amt');
const customPercentInput = document.getElementById('custom-percent');
const percentValues = document.querySelectorAll('.percent-value');
const defaultTip = document.getElementById('fifteen-percent');
const groupSizeInput = document.getElementById('group-size__amt');
const tipPerPerson = document.querySelector('.tip-per-person__amt span');
const totalPerPerson = document.querySelector('.total-per-person__amt span');
const resetBtn = document.getElementById('reset-btn');


let totalBill = 0;
let tipPercent = 15;
let groupSize = 1;


function calculate() {
  totalBill = totalBillInput.value ? parseFloat(totalBillInput.value) : 0;
  groupSize = groupSizeInput.value ? parseInt(groupSizeInput.value) : 1;

  const perPersonTipAmount = (totalBill * (tipPercent / 100) / groupSize)
  const perPersonTotalAmount = (totalBill / groupSize) + perPersonTipAmount

  tipPerPerson.innerText = `${perPersonTipAmount.toFixed(2)}`;
  totalPerPerson.innerText = `${perPersonTotalAmount.toFixed(2)}`;
};

function resetDOM() {
  totalBill = 0;
  tipPercent = 15;
  groupSize = 1;

  percentValues.forEach(val => {
    val.classList.remove('selected-tip')
  });

  if (!defaultTip.classList.contains('selected-tip')) {
    defaultTip.classList.add('selected-tip');
  }

  customPercentInput.style.border = "none";

  totalBillInput.value = '';
  groupSizeInput.value = '';
  customPercentInput.value = '';

  tipPerPerson.innerText = "0.00";
  totalPerPerson.innerText = "0.00";
};


themeToggle.addEventListener('click', () => {
  document.body.classList.toggle('dark-theme');

  toggleImg.src = document.body.classList.contains('dark-theme') ? dtIconUrl : ltIconUrl;

  logo.src = document.body.classList.contains('dark-theme') ? dtLogoUrl : ltLogoUrl;
});


percentValues.forEach(val => {
  val.addEventListener('click', (e) => {
    const tip = val.getAttribute('data-value');

    tipPercent = parseInt(tip);

    percentValues.forEach(val => {
      if (val.id !== e.target.id) {
        val.classList.remove('selected-tip');
      };
    });

    val.classList.toggle('selected-tip');
    calculate();
  });
});

// Attach event listeners
totalBillInput.addEventListener('change', calculate);
groupSizeInput.addEventListener('change', calculate);

customPercentInput.addEventListener('change', () => {
  percentValues.forEach(val => {
    val.classList.remove('selected-tip');
  });
  
  customPercentInput.style.border = "2px solid var(--input-focus-border)";
  
  tipPercent = customPercentInput.value;
  calculate();
});

resetBtn.addEventListener('click', resetDOM);