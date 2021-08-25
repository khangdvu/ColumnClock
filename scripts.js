const tensHour = document.getElementById('tensHour');
const onceHour = document.getElementById('onceHour');
const tensMinute = document.getElementById('tensMinute');
const onceMinute = document.getElementById('onceMinute');
const tensSecond = document.getElementById('tensSecond');
const onceSecond = document.getElementById('onceSecond');
const shadowBox = document.getElementsByClassName('shadowBox')


setInterval(setClock, 1000)

function setClock(){
    const currentDate = new Date()
    var tHour = Math.floor(currentDate.getHours()/10);
    var oHour = currentDate.getHours() % 10;
    var tMinute = Math.floor(currentDate.getMinutes()/10);
    var oMinute = currentDate.getMinutes() % 10;
    var tSecond = Math.floor(currentDate.getSeconds()/10);
    var oSecond = currentDate.getSeconds() % 10;
    
    tensHour.style.setProperty('--position', tHour);
    onceHour.style.setProperty('--position', oHour);
    tensMinute.style.setProperty('--position', tMinute);
    onceMinute.style.setProperty('--position', oMinute);
    tensSecond.style.setProperty('--position', tSecond);
    onceSecond.style.setProperty('--position', oSecond);





    let tHourSquares = tensHour.getElementsByClassName('clockSquare');
    let oHourSquares = onceHour.getElementsByClassName('clockSquare');
    let tMinuteSquares = tensMinute.getElementsByClassName('clockSquare');
    let oMinuteSquares = onceMinute.getElementsByClassName('clockSquare');
    let tSecondSquares = tensSecond.getElementsByClassName('clockSquare');
    let oSecondSquares = onceSecond.getElementsByClassName('clockSquare');
    updateCurrentSquare(tHourSquares, tHour);
    updateCurrentSquare(oHourSquares, oHour);
    updateCurrentSquare(tMinuteSquares, tMinute);
    updateCurrentSquare(oMinuteSquares, oMinute);
    updateCurrentSquare(tSecondSquares, tSecond);
    updateCurrentSquare(oSecondSquares, oSecond);
}

function updateCurrentSquare(squareList, position){
    for (var i = 0; i < squareList.length; i++){
        if (i === position){
            squareList[i].classList.add('current');
        } else{
            squareList[i].classList.remove('current');
        }
    }
}