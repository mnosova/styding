function helloWorld() {
    console.log("Я – JavaScript! ")
}

function showAdmin() {
    let admin;
    let name = 'Василий';
    admin = name;
    console.log(admin);
}

function askName() {
    let name = prompt('Ваше имя?', '');
    let prove = confirm(`'Ваше имя? ${name}`);
    (prove) ? alert(name) : null;
}

function getKnowladge() {
    let answ = prompt('Каково «официальное» название JavaScript?', '');
    (answ === 'ECMAScript') ? alert('Верно') : alert('Не знаете? «ECMAScript»!');

}

function resultToNum() {
    let result = prompt('Значение', '');
    (result > 0) ? alert(1) : (result < 0) ? alert(-1) : (result === 0) ? alert(0) : null;
}

function logIn() {
    let name = prompt('Кто пришел', '');
    if (name === 'Админ') {
        let pass = prompt('Пароль?', '');
        if (pass === 'Чёрный Властелин') {
            alert('Добро пожаловать');
        } else if (pass === null) {
            alert('Вход отменён');
        } else {
            alert('Пароль неверен');
        }
    }
    else if (name === null) {

        alert('Вход отменён')
    } else {
        alert('Я вас не знаю');
    }
}

ifNumbers = () => {
    let result;
    return result = a + b < 4 ? "malo" : 'mnogo'
};

function ternaryTransform(login) {
    let message = (login == "Вася") ? "Привет" :
        (login == "Директор") ? "Здравствуйте" :
            (login == "") ? "Нет логина" : "";
    console.log(message)
}

function ageIsOk() {
    let age;
    if (age >= 14 && age <= 90) {

    }

}

function ageIsOk2() {
    let age;
    if (!(age >= 14 && age <= 90)) {

    }
    if (age < 14 || age > 90) {

    }

}

function showEqual() {
    for (let i = 2; i <= 10; i++) {
        if (i % 2 === 0) {
            console.log(i)
        }

    }

}

function forToWhile() {
    let i = 0;
    while (i < 3) {
        alert(`номер ${i} !`);
        i++;
    }

}

function isMoreThen100() {
    let num;
    do {
        num = +prompt('Введите число больше 100', '');
    } while (!isNaN(num) && num <= 100)
}

function simpleNum() {

    nextPrime:  for (let i = 2; i <= 10; i++) {
        for (let j = 2; j < i; j++) {
            if (i % j === 0) continue nextPrime;
        }
        console.log(i)
    }
}

function switchToIf() {
    let browser = 'Chrome';
    if (browser === 'IE') {
        alert('О, да у вас IE!');
    } else if (browser === 'Chrome' || browser === 'Firefox' || browser === 'Safari' || browser === 'Opera') {
        alert('Да, и эти браузеры мы поддерживаем');

    } else alert('Мы надеемся, что и в вашем браузере все ок!');

}

function forToSwitch() {
    let a = +prompt('a?', '');
    switch (a) {
        case 0:
            alert(0);
            break;
        case 1:
            alert(1);
            break;
        case 2:
        case 3:
            alert('2,3');
            break;
    }

}

//function
function checkAge(age) {
    //return (age > 18) ?  true : confirm('Родители разрешили?');
    return (age > 18) || confirm('Родители разрешили?');

}

function whichIsLess(a, b) {
    return ( a > b ) ? b : a;

}

ask = (question, yes, no) => {
    ((confirm(question)) ? yes : no)()
};

