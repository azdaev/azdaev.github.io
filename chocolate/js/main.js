const card = document.querySelectorAll(".cards");
const RED = "#d24d57";
const BLUE = "#00b5cc";
const PURPLE = "#8e44ad";
const ORANGE = "#f39c12";
let is_mobile;
if (navigator.userAgent.match(/Android/i) ||
    navigator.userAgent.match(/webOS/i) ||
    navigator.userAgent.match(/iPhone/i) ||
    navigator.userAgent.match(/iPad/i) ||
    navigator.userAgent.match(/iPod/i) ||
    navigator.userAgent.match(/BlackBerry/i) ||
    navigator.userAgent.match(/Windows Phone/i)
) {
    is_mobile = true;
} else {
    is_mobile = false;

}

$('.cards').click(function (event) {

    if ($(this).find('input:checkbox').is(":checked")) {

        $(this).find('input:checkbox').prop("checked", false);
    } else {
        $(this).find('input:checkbox').prop("checked", true);
    }
});



// coloring
const COLORS = [RED, BLUE, PURPLE, ORANGE]; //array of colors
let clicked = [0, 0, 0, 0, 0, 0, 0, 0, 0];
for (let i = 0; i < card.length; i++) {
    if (is_mobile == false) {
        card[i].addEventListener('mouseover', () => {
            if (clicked[i] == false) {
                card[i].style.background = COLORS[Math.floor(Math.random() * COLORS.length)];
                card[i].style.color = 'white';
            }
        })
    }
    card[i].addEventListener('click', () => {
        clicked[i] = !clicked[i]
        if (is_mobile == true) {
            card[i].style.background = COLORS[Math.floor(Math.random() * COLORS.length)];
        }
    })
    if (is_mobile == false) {
        card[i].addEventListener('mouseout', () => {
            if (clicked[i] == false) {
                card[i].style.background = "#eaeaea";
                card[i].style.color = "#212529";
            }
        })
    }
}