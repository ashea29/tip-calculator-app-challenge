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


themeToggle.addEventListener('click', () => {
  document.body.classList.toggle('dark-theme');

  toggleImg.src = document.body.classList.contains('dark-theme') ? './images/dark-theme-icon.svg' : './images/light-theme-icon.svg';

  logo.src = document.body.classList.contains('dark-theme') ? './images/dt-logo.svg' : './images/lt-logo.svg';
});


percentValues.forEach(val => {
  val.addEventListener('click', (e) => {
    const tip = val.getAttribute('data-value');
    // console.log(+tip)
    tipPercent = parseInt(tip);
    // console.log(typeof tipPercent)
    percentValues.forEach(val => {
      if (val.id !== e.target.id) {
        val.classList.remove('selected-tip');
      };
    });
    val.classList.toggle('selected-tip');
    calculate();
  });
});


function calculate() {
  totalBill = totalBillInput.value ? parseFloat(totalBillInput.value) : 0;
  groupSize = groupSizeInput.value ? parseInt(groupSizeInput.value) : 1;

  const perPersonTipAmount = (totalBill * (tipPercent / 100) / groupSize)
  const perPersonTotalAmount = (totalBill / groupSize) + perPersonTipAmount

  // console.log(totalBill);
  // console.log(groupSize);

  tipPerPerson.innerText = `${perPersonTipAmount.toFixed(2)}`;
  totalPerPerson.innerText = `${perPersonTotalAmount.toFixed(2)}`;
};


totalBillInput.addEventListener('change', () => {
  calculate();
});

groupSizeInput.addEventListener('change', () => {
  calculate();
});

resetBtn.addEventListener('click', () => {
  totalBill = 0;
  tipPercent = 15;
  groupSize = 1;

  percentValues.forEach(val => {
    val.classList.remove('selected-tip')
  });

  if (!defaultTip.classList.contains('selected-tip')) {
    defaultTip.classList.add('selected-tip');
  }

  totalBillInput.value = '';
  groupSizeInput.value = '';

  tipPerPerson.innerText = "0.00";
  totalPerPerson.innerText = "0.00";
})