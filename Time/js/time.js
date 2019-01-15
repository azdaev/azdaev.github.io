const bg = document.querySelector('.bg'); //fullscreen div with page's background
const dateP = document.querySelector('#dateParagraph'); //<p> tag containing date

// get time
setInterval(() => {
  let time = moment().format('HH:mm:ss');
  document.getElementById("timeHeading").innerHTML = time
}, 1000);


// set background and date color
setInterval(() => {
  let time = new Date();
  let hours = time.getHours();
  if ((hours >= 6) && (hours < 12)) { //morning
    bg.style.backgroundImage = "url(./img/morning.jpg)";
    dateP.style.color = "var(--gray)";
  }
  if ((hours >= 12) && (hours < 17)) { //noon
    bg.style.backgroundImage = "url(./img/noon.jpg)";
    dateP.style.color = "var(--gray)";
  }
  if ((hours >= 17) && (hours < 21)) { //afternoon
    bg.style.backgroundImage = "url(./img/afternoon.jpg)"
    dateP.style.color = "white";
  }
  if ((hours >= 21) || (hours < 6)) { //night
    bg.style.backgroundImage = "url(./img/night.jpg)"
    dateP.style.color = "white";
  }
}, 1);

// get date
setInterval(() => {
  let date = moment().format('DD-MMM-YYYY');
  dateP.innerText = date;
}, 1000);

setInterval(
$.get("http://ipinfo.io/", function (response) {
  $("#address").html(response.city);
}, "jsonp"), 100000)