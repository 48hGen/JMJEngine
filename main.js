//# 1€ start
// 0.25€ pro min
// 1.50 pro km
function calculateResult() {
    var duration = document.getElementById('duration').value;
    var route = document.getElementById('route').value;
    var calcOption1 = document.getElementById('calc_option1').value;
    var calcOption2 = document.getElementById('calc_option2').value;
    var routeOption = document.getElementById('route_option').value;
    var discountCode = document.getElementById('discountCode').value;
    var result = 0;

    if (routeOption = "km") {
        route = route * 1000; 
    }

    if (calcOption2 == "calc_time") {
        console.log(duration)
        var h= duration.split(0,1);
        var m = duration.split(3,4);
        h = h + m;

        result = 0.25 * h  + 1;
    } else {
        result = 1.50 * (route / 1000);
    }

    //Rabattcodes sind zulässig: Tec5 für 5%, Tec15 für 15%, TecFirstTry für 50%
    if (discountCode == "Tec5") {
        var discount = result * 0.05;
        result = result - discount;
    } else if (discountCode == "Tec15") {
        var discount = result * 0.15;
        result = result - discount;
    } else if (discountCode == "TecFirstTry") {
        var discount = result * 0.50;
        result = result - discount;
    }

console.log(result);

    const popup = document.getElementById('popup');
popup.style.display = 'block';
    document.getElementById('result').innerHTML += Math.round(result) + " Euro";
    
}

function closePopUp() {
    const popup = document.getElementById('popup');
    popup.style.display = 'none';

}