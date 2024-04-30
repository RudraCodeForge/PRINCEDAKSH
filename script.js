var loader = document.querySelector('#loader');
if (loader) {
  setTimeout(function() {
    loader.style.top = '-100%';
  }, 5000);
}


//function for hamburger button 
function menu() {
  var mobileMenu = document.getElementsByClassName('mobilemenu')[0];
  var links = document.getElementsByClassName('links')[0];
  var hamburger = document.getElementsByClassName('hamburger')[0];

  mobileMenu.classList.toggle('open');
  links.classList.toggle('show');
  hamburger.classList.toggle("change");
}

//Function to clear the form data
function clearForm() {
  document.getElementById("contact-form").reset();
}
function BACK() {
  window.history.back();
}

 //Function to toggle mode
function toggleMode() {
  const body = document.body;
  const isDarkMode = !body.classList.contains('dark-mode');

  body.classList.toggle('dark-mode', isDarkMode);
  localStorage.setItem('darkMode', isDarkMode ? 'enabled' : 'disabled');
}

//Check for previously saved mode preference
document.addEventListener('DOMContentLoaded', function() {
  const darkModeSetting = localStorage.getItem('darkMode');
  if (darkModeSetting === 'enabled') {
    document.body.classList.add('dark-mode');
  }
});

function RELOAD(){
  window.location.reload();
}