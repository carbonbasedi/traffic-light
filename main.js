const red = document.getElementById('red');
const yellow = document.getElementById('yellow');
const green = document.getElementById('green');

function lightOrder() {
    if (red.classList.contains('r-on')) {
        red.classList.remove('r-on');
        yellow.classList.add('y-on');
        setTimeout(() => {
            yellow.classList.remove('y-on');
            green.classList.add('g-on');        
        }, 2000);
    } else if (yellow.classList.contains('y-on')){
        yellow.classList.remove('y-on');
        green.classList.add('g-on');
    } else if (green.classList.contains('g-on')){
        green.classList.remove('g-on');
        yellow.classList.add('y-on');
        setTimeout(() => {
            yellow.classList.remove('y-on');
            red.classList.add('r-on');
        }, 2000);
    } else {
        green.classList.add('g-on');
    }
}
setInterval(lightOrder,8000);