function years_count() {
    let years_count = document.getElementById("years-count").value;
    if (String(years_count)[0] == "0") {
        while (String(years_count)[0] == "0") years_count = years_count % Math.pow(10, String(years_count).length);
        document.getElementById("years-count").value = years_count;
    }
    var temp = years_count;
    var temp_lenght = String(years_count).length;
    document.querySelector('.progress-number-first').style.width = String(temp_lenght * 19) + "px";

    if (temp > 16) temp = 16;
    let temp_delta = (316 * (temp / 16) * 100) / 100;

    let start = Date.now();

    let timer = setInterval(function() {
        let timePassed = Date.now() - start;

        if (timePassed >= 500) {
            clearInterval(timer);
            return;
        }

        document.querySelector('circle:nth-child(2)').style.strokeDashoffset = 316 - temp_delta * timePassed / 500 - 11;
    }, 20);
    temp = years_count;
    while (temp_lenght > 0) {
        if ((temp >= 11 && temp <= 19) || temp == 0) {
            document.getElementById("progress-years-text").innerHTML = "Лет";
            return;
        }
        temp %= Math.pow(10, temp_lenght--);
    }

    if (temp % 10 == 1) document.getElementById("progress-years-text").innerHTML = "Год";
    else {
        if ((temp % 10 < 5) && (temp > -0)) document.getElementById("progress-years-text").innerHTML = "Года";
        else {
            document.getElementById("progress-years-text").innerHTML = "Лет";
        }
    }
}

function projects_count() {
    let projects_count = document.getElementById("projects-count").value;
    if (String(projects_count)[0] == "0") {
        while (String(projects_count)[0] == "0") projects_count = projects_count % Math.pow(10, String(projects_count).length);
        document.getElementById("projects-count").value = projects_count;
    }
    var temp = projects_count;
    var temp_lenght = String(projects_count).length;

    document.querySelector('.progress-number-second').style.width = String(temp_lenght * 19) + "px";

    if (temp > 150) temp = 150;

    let temp_delta = (316 * (temp / 150) * 100) / 100;

    let start = Date.now();

    let timer = setInterval(function() {
        let timePassed = Date.now() - start;
        if (timePassed >= 500) {
            clearInterval(timer);
            return;
        }
        document.querySelector('#progress-second-circle').style.strokeDashoffset = 316 - temp_delta * timePassed / 500 - 11;
    }, 20);

    temp = projects_count;
    while (temp_lenght > 0) {
        if ((temp >= 11 && temp <= 19) || temp == 0) {
            document.getElementById("progress-projects-text").innerHTML = "Проектов";
            return;
        }
        temp %= Math.pow(10, temp_lenght--);
    }

    if (projects_count % 10 == 1) document.getElementById("progress-projects-text").innerHTML = "Проект";
    else {
        if ((temp % 10 < 5) && (temp > -0)) document.getElementById("progress-projects-text").innerHTML = "Проекта";
        else {
            document.getElementById("progress-projects-text").innerHTML = "Проектов";
        }
    }
}

/* функция для смены цвета лайков */
function like_color(str) {
    if (document.getElementById('slider-element-like-color' + str).style.fill == "rgb(242, 111, 112)") {
        document.getElementById('slider-element-like-color' + str).style.fill = "#D8D8D8";
        return
    }
    document.getElementById('slider-element-like-color' + str).style.fill = "#F26F70";
}

/* Функция дли измненения цвета ботинок */
function boots_color(num, color) {
    let myurl = "img/slide-" + num + "-" + color + ".png";
    document.querySelector('.slider-element-prev-' + num).style.backgroundImage = 'url(' + myurl + ')';
}

/* Функция чтобы листать слайдер вправо */
function slide_right() {
    let start = Date.now();

    let timer = setInterval(function() {
        let timePassed = Date.now() - start;
        if (timePassed >= 500) {
            clearInterval(timer);
            return;
        }
        for (let i = 1; i < 17; i++) {
            if (parseInt(document.getElementById("slide-" + i).style.left) > 2700) document.getElementById("slide-" + i).style.left = String(parseInt(getComputedStyle(document.getElementById("slide-" + i)).left.replace('px', '')) - 3240) + "px";
            document.getElementById("slide-" + i).style.left = String(parseInt(getComputedStyle(document.getElementById("slide-" + i)).left.replace('px', '')) + 14) + "px";
        }
    }, 20);
}

/* Функция чтобы листать слайдер влево */
function slide_left() {
    let start = Date.now();

    let timer = setInterval(function() {
        let timePassed = Date.now() - start;
        if (timePassed >= 500) {
            clearInterval(timer);
            return;
        }
        for (let i = 1; i < 17; i++) {
            if (parseInt(document.getElementById("slide-" + i).style.left) < -540) document.getElementById("slide-" + i).style.left = String(parseInt(getComputedStyle(document.getElementById("slide-" + i)).left.replace('px', '')) + 3240) + "px";
            document.getElementById("slide-" + i).style.left = String(parseInt(getComputedStyle(document.getElementById("slide-" + i)).left.replace('px', '')) - 14) + "px";
        }
    }, 20);
}