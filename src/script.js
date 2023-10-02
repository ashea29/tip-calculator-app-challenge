const logo = document.querySelector('.brand__logo img');
const themeToggle = document.querySelector('.theme-toggle');
const toggleImg = document.querySelector('.theme-toggle img');
const totalBillInput = document.getElementById('total-bill__amt');
const customPercentInput = document.getElementById('custom-percent');
const percentValues = document.querySelectorAll('.percent-value');
const groupSizeInput = document.getElementById('group-size__amt');


let totalBill;
let tipPercent;
let groupSize;


themeToggle.addEventListener('click', () => {
  document.body.classList.toggle('dark-theme');

  toggleImg.src = document.body.classList.contains('dark-theme') ? './images/dark-theme-icon.svg' : './images/light-theme-icon.svg';

  logo.src = document.body.classList.contains('dark-theme') ? './images/dt-logo.svg' : './images/lt-logo.svg';
});


percentValues.forEach(val => {
  val.addEventListener('click', (e) => {
    const tip = val.getAttribute('data-value');
    // console.log(+tip)
    tipPercent = +tip;
    // console.log(typeof tipPercent)
    percentValues.forEach(val => {
      if (val.id !== e.target.id) {
        val.classList.remove('selected-tip');
      };
    });
    val.classList.toggle('selected-tip');
  })
})