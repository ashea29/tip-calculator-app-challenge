const themeToggle = document.querySelector('.theme-toggle')
const toggleImg = document.querySelector('.theme-toggle img')


themeToggle.addEventListener('click', () => {
  document.body.classList.toggle('dark-theme')

  toggleImg.src = document.body.classList.contains('dark-theme') ? './images/dark-theme-icon.svg' : './images/light-theme-icon.svg';
})