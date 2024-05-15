const toggleBtn = document.querySelector('.btn');
const sunIcon = document.querySelector('.fas');

toggleBtn.addEventListener('click', () => {
  document.documentElement.classList.toggle('dark-theme');
  
  if (sunIcon.classList.contains("fa-sun")) {
    sunIcon.classList.remove("fa-sun");
    sunIcon.classList.add("fa-moon");
  } else {
    sunIcon.classList.remove("fa-moon");
    sunIcon.classList.add("fa-sun");
  }
});

//date
function displayCurrentDate() {
    const options = { year: 'numeric', month: 'long', day: 'numeric' };
    const dateFormatter = new Intl.DateTimeFormat('en-US', options);
    const formattedDate = dateFormatter.format(new Date());
    const currentDateElement = document.getElementById('date');
    currentDateElement.textContent = ` ${formattedDate}`;
  }
  
  displayCurrentDate();

  //language
  let currentLanguage = 'en';

function toggleLanguage() {
  if (currentLanguage === 'en') {
    currentLanguage = 'fa';
    setLanguage('fa');
  } else {
    currentLanguage = 'en';
    setLanguage('en');
  }
}

function setLanguage(language) {
  const translations = {
    'en': {
      'nav-title': 'My Social Media',
      'hero-name': 'Atefeh Ameri',
      'hero-job': 'Front-End Developer',
      'tel': 'Telegram',
      'lin': 'LinkedIn',
      'git': 'GitHub',
      'insta': 'Instagram',
      'email': 'Email',
      'dev': 'Develope by Ati',
    },
    'fa': {
      'nav-title': 'لینک سوشیال مدیا',
      'hero-name': 'عاطفه عامری',
      'hero-job': 'برنامه نویس فرانت اند',
      'tel': 'تلگرام',
      'lin': 'لینکدین',
      'git': 'گیت هاب',
      'insta': 'اینستاگرام',
      'email': 'ایمیل',
      'dev': 'توسعه توسط عاطی',

    }
  };

  document.getElementById('nav-title').textContent = translations[language]['nav-title'];
  document.getElementById('hero-name').textContent = translations[language]['hero-name'];
  document.getElementById('hero-job').textContent = translations[language]['hero-job'];

  
  document.getElementById('tel').textContent = translations[language]['tel'];
  document.getElementById('lin').textContent = translations[language]['lin'];
  document.getElementById('git').textContent = translations[language]['git'];
  document.getElementById('insta').textContent = translations[language]['insta'];
  document.getElementById('email').textContent = translations[language]['email'];
  document.getElementById('dev').textContent = translations[language]['dev'];

}

setLanguage(currentLanguage);

var myElement = document.getElementById("myElement");
myElement.addEventListener("contextmenu", function(event) {
    event.preventDefault(); // Prevent the default right-click menu behavior
});

// Disable F12 key and Ctrl+Shift+I combo
document.addEventListener('keydown', event => {
  if (event.keyCode === 123 || (event.ctrlKey && event.shiftKey && event.keyCode === 73)) {
    event.preventDefault();
  }
});
function testKeyCode(e) {
  var keycode;
  if (window.event) keycode = window.event.keyCode;
  else if (e) keycode = e.which;
  var e = e || window.event;
             if (e.ctrlKey &&
                    (e.keyCode === 67 ||
                     e.keyCode === 86 ||
                     e.keyCode === 85 ||
                     e.keyCode === 117)) {
      alert('Hi!Find another way to access the sourse code..(99% You Know How) ');
     return false;
     } else {
      return true;
     }
  }
  document.onkeydown = testKeyCode;

  /*      alert('This website is protected against attempts to clone. Your IP has been duly recorded on our server and if you persist it will be forwarded to the competent authorities');
*/